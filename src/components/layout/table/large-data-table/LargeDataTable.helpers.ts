import type { LargeDataTable } from './LargeDataTable.model';

type Props = {
  totalItems?: number;
  visibleSize?: number;
  bufferSize?: number;
};

export class ItemCarrier {
  /**
   * The bitmap layout for each item uses TWO consecutive Uint32 values (64 bits total):
   * 
   * Lower 32 bits (index * 2):
   * - bits 0-3: status flags (inited, loaded, measured, visible)
   * - bits 4-31: height (28 bits, max 268435455), stored as a value multiplied by 100 to preserve two decimal places
   * 
   * Upper 32 bits (index * 2 + 1):
   * - bits 0-31: top position (32 bits, max 4294967295), stored as a value multiplied by 100 to preserve two decimal places
   *
   * This layout uses Uint32Array instead of BigUint64Array for significantly faster bitwise operations,
   * while maintaining the same bitmap concept to optimize memory usage and access speed.
   *
   * The status flags are defined as follows:
   * - inited: indicates whether the item has been initialized
   * - loaded: indicates whether the item data has been loaded
   * - measured: indicates whether the item height has been measured
   * - visible: indicates whether the item is currently visible in the viewport
   *
   * Layout visualization:
   * | Upper 32 bits (idx*2+1) | Lower 32 bits (idx*2)           |
   * | ----------------------- | ------------------------------- |
   * | top (32 bits)           | height (28 bits) | flags (4)    |
   *
   */
  private static readonly PRECISION = 100;
  private static readonly HEIGHT_SHIFT = 4;
  private static readonly MAX_INT_28_BITS = (1 << 28) - 1;
  private static readonly MAX_INT_32_BITS = 0xFFFFFFFF;

  private STATUS_MASK = {
    inited: 1 << 0,
    loaded: 1 << 1,
    measured: 1 << 2,
    visible: 1 << 3
  };

  private ATTRS_MASK = {
    height: 0xFFFFFFF0, // 28 bits for height (bits 4-31)
    top: 0xFFFFFFFF     // 32 bits for top
  };

  private itemDataBitmap: Uint32Array;
  private visibleSize: number = 0;

  /**
   * Creates an instance of ItemCarrier.
   *  @param props.totalItems - Total number of items to be managed.
   *  @param props.visibleSize - Number of items visible in the viewport. default is `0`.
   *  @param props.bufferSize - Size of the buffer to allocate for item data. Default is based on totalItems with a minimum of 1,000. Set it to `-1` to use totalItems exactly.
   */

  constructor(
    props?: Props
  ) {
    const totalItems = props?.totalItems ?? 0;
    const explicitBufferSize = props?.bufferSize;
    
    // Use a conservative default: max of totalItems and 1,000, unless bufferSize is explicitly set
    const bufferSize = explicitBufferSize !== undefined && explicitBufferSize >= 0
      ? explicitBufferSize
      : Math.max(totalItems, 1_000);
    
    // Allocate 2 Uint32 values per item (64 bits total)
    this.itemDataBitmap = new Uint32Array(bufferSize * 2);
    this.visibleSize = props?.visibleSize ?? 50; // Default visible size is 50

    this.initialize();
  }

  private initialize() {
    this.itemDataBitmap.fill(0);
    
    for (let i = 0; i < this.visibleSize; i++) {
      this.setStatus(i, { visible: true });
    }
  }

  private getLowerBitsOrThrow(index: number): number {
    const lowerIdx = index * 2;
    const bitmap = this.itemDataBitmap[lowerIdx];
    if (bitmap === undefined) {
      throw new Error(
        `Item at index ${index} is out of range. Buffer size: ${this.itemDataBitmap.length / 2}`
      );
    }
    return bitmap;
  }

  private getUpperBitsOrThrow(index: number): number {
    const upperIdx = index * 2 + 1;
    const bitmap = this.itemDataBitmap[upperIdx];
    if (bitmap === undefined) {
      throw new Error(
        `Item at index ${index} is out of range. Buffer size: ${this.itemDataBitmap.length / 2}`
      );
    }
    return bitmap;
  }

  private setLowerBits(index: number, bitmap: number): void {
    this.itemDataBitmap[index * 2] = bitmap >>> 0; // Ensure unsigned 32-bit
  }

  private setUpperBits(index: number, bitmap: number): void {
    this.itemDataBitmap[index * 2 + 1] = bitmap >>> 0; // Ensure unsigned 32-bit
  }

  private encodeHeight(height: number): number {
    const scaled = Math.round(height * ItemCarrier.PRECISION);

    if (scaled > ItemCarrier.MAX_INT_28_BITS || scaled < 0) {
      if (process.env.NODE_ENV !== 'production') {
        throw new Error(
          `LargeDataTable.ItemCarrier height=${height} is out of range (0 - ${
            ItemCarrier.MAX_INT_28_BITS / ItemCarrier.PRECISION
          }) for 28-bit fixed-point field`
        );
      }

      const clamped = Math.min(Math.max(scaled, 0), ItemCarrier.MAX_INT_28_BITS);
      return (clamped << ItemCarrier.HEIGHT_SHIFT) >>> 0;
    }

    return (scaled << ItemCarrier.HEIGHT_SHIFT) >>> 0;
  }

  private encodeTop(top: number): number {
    const scaled = Math.round(top * ItemCarrier.PRECISION);

    if (scaled > ItemCarrier.MAX_INT_32_BITS || scaled < 0) {
      if (process.env.NODE_ENV !== 'production') {
        throw new Error(
          `LargeDataTable.ItemCarrier top=${top} is out of range (0 - ${
            ItemCarrier.MAX_INT_32_BITS / ItemCarrier.PRECISION
          }) for 32-bit fixed-point field`
        );
      }

      const clamped = Math.min(Math.max(scaled, 0), ItemCarrier.MAX_INT_32_BITS);
      return clamped >>> 0;
    }

    return scaled >>> 0;
  }

  private decodeHeight(lowerBits: number): number {
    const value = (lowerBits & this.ATTRS_MASK.height) >>> ItemCarrier.HEIGHT_SHIFT;
    return value / ItemCarrier.PRECISION;
  }

  private decodeTop(upperBits: number): number {
    return upperBits / ItemCarrier.PRECISION;
  }

  private updateStatusBit(
    index: number,
    key: keyof LargeDataTable.ItemCarrier.Status,
    updater: (current: boolean) => boolean
  ): void {
    let lowerBits = this.getLowerBitsOrThrow(index);
    const mask = this.STATUS_MASK[key];
    const current = (lowerBits & mask) !== 0;
    const next = updater(current);
    lowerBits = next ? (lowerBits | mask) : (lowerBits & ~mask);
    this.setLowerBits(index, lowerBits);
  }

  public getStatus(index: number): LargeDataTable.ItemCarrier.Status {
    const lowerBits = this.getLowerBitsOrThrow(index);

    return {
      inited: (lowerBits & this.STATUS_MASK.inited) !== 0,
      loaded: (lowerBits & this.STATUS_MASK.loaded) !== 0,
      measured: (lowerBits & this.STATUS_MASK.measured) !== 0,
      visible: (lowerBits & this.STATUS_MASK.visible) !== 0
    };
  }

  public getAttrs(index: number): LargeDataTable.ItemCarrier.Attrs {
    const lowerBits = this.getLowerBitsOrThrow(index);
    const upperBits = this.getUpperBitsOrThrow(index);
    const height = this.decodeHeight(lowerBits);
    const top = this.decodeTop(upperBits);

    return {
      height,
      top,
      bottom: top + height
    };
  }

  public get(index: number): LargeDataTable.ItemCarrier.Payload {
    return {
      index,
      attrs: this.getAttrs(index),
      status: this.getStatus(index)
      // key and item would be retrieved from a separate Map based on index, not stored in the bitmap
    };
  }

  public setStatus(index: number, status: Partial<LargeDataTable.ItemCarrier.Status>) {
    (Object.keys(status) as (keyof LargeDataTable.ItemCarrier.Status)[]).forEach(
      key => {
        const value = status[key];
        if (value !== undefined) {
          this.updateStatusBit(index, key, () => value);
        }
      }
    );
  }

  public setAttrs(index: number, attrs: Partial<Omit<LargeDataTable.ItemCarrier.Attrs, 'bottom'>>) {
    if (attrs.height !== undefined) {
      let lowerBits = this.getLowerBitsOrThrow(index);
      const encodedHeight = this.encodeHeight(attrs.height);
      lowerBits = (lowerBits & ~this.ATTRS_MASK.height) | (encodedHeight & this.ATTRS_MASK.height);
      this.setLowerBits(index, lowerBits);
    }
    if (attrs.top !== undefined) {
      const encodedTop = this.encodeTop(attrs.top);
      this.setUpperBits(index, encodedTop);
    }
  }

  public toggleStatus(index: number, statusKey: keyof LargeDataTable.ItemCarrier.Status) {
    this.updateStatusBit(index, statusKey, current => !current);
  }

  public setStatusByAttr(
    index: number,
    statusKey: keyof LargeDataTable.ItemCarrier.Status,
    value: boolean
  ) {
    this.updateStatusBit(index, statusKey, () => value);
  }

  public resetItem(index: number) {
    this.itemDataBitmap[index * 2] = 0; // Reset lower bits
    this.itemDataBitmap[index * 2 + 1] = 0; // Reset upper bits
  }

  // Utility method to convert a number to a fixed precision (2 decimal places)
  // Used externally for comparing measured heights with stored heights
  static convertToSamePrecision(value: number): number {
    return Math.round(value * ItemCarrier.PRECISION) / ItemCarrier.PRECISION;
  }
}
