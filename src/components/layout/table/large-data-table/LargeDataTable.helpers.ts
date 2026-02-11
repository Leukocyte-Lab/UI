import type { LargeDataTable } from './LargeDataTable.model';

type Props = {
  totalItems?: number;
  visibleSize?: number;
  bufferSize?: number;
};

export class ItemCarrier {
  /**
   * The bitmap layout for each item is as follows:
   * - bits 0-3: status flags (inited, loaded, measured, visible), each boolean represented by a single bit
   * - bits 4-33: height (30 bits, max 1073741823), stored as an float value multiplied by 100 to preserve two decimal places
   * - bits 34-63: top (30 bits, max 1073741823), stored as an float value multiplied by 100 to preserve two decimal places
   *
   * This layout allows us to store all necessary information for each item in a single 64-bit integer, optimizing memory usage and access speed.
   * The use of BigInt ensures that we can handle the full range of values without overflow issues.
   *
   * Note: The actual item data (key and item) will be stored separately in a Map for quick access, while the bitmap will be used for status and layout information.
   *
   * The status flags are defined as follows:
   * - inited: indicates whether the item has been initialized
   * - loaded: indicates whether the item data has been loaded
   * - measured: indicates whether the item height has been measured
   * - visible: indicates whether the item is currently visible in the viewport
   *
   * Layout of the bitmap:
   * | 63 ... 34 | 33 ... 04 |  03 .... 00  |
   * | --------- | --------- | ------------ |
   * |    top    |   height  | status flags |
   *
   */
  private static readonly PRECISION = 100;
  private static readonly HEIGHT_SHIFT = 4n;
  private static readonly TOP_SHIFT = 34n;
  private static readonly MAX_INT_30_BITS = Number((1n << 30n) - 1n);

  private STATUS_MASK = {
    inited: 1n << 0n,
    loaded: 1n << 1n,
    measured: 1n << 2n,
    visible: 1n << 3n
  };

  private ATTRS_MASK = {
    height: 0x3fffffffn << ItemCarrier.HEIGHT_SHIFT,
    top: 0x3fffffffn << ItemCarrier.TOP_SHIFT
  };

  private itemDataBitmap: BigUint64Array;
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
    
    this.itemDataBitmap = new BigUint64Array(bufferSize);
    this.visibleSize = props?.visibleSize ?? 50; // Default visible size is 50

    this.initialize();
  }

  private initialize() {
    this.itemDataBitmap.fill(0n);
    
    for (let i = 0; i < this.visibleSize; i++) {
      this.setStatus(i, { visible: true });
    }
  }

  private getBitmapOrThrow(index: number): bigint {
    const bitmap = this.itemDataBitmap[index];
    if (bitmap === undefined) {
      throw new Error(
        `Item at index ${index} is out of range. Buffer size: ${this.itemDataBitmap.length}`
      );
    }
    return bitmap;
  }

  private setBitmap(index: number, bitmap: bigint): void {
    this.itemDataBitmap[index] = bitmap;
  }

  private encodeHeight(height: number): bigint {
    const scaled = Math.round(height * ItemCarrier.PRECISION);

    if (scaled > ItemCarrier.MAX_INT_30_BITS || scaled < 0) {
      if (process.env.NODE_ENV !== 'production') {
        throw new Error(
          `LargeDataTable.ItemCarrier height=${height} is out of range (0 - ${
            ItemCarrier.MAX_INT_30_BITS / ItemCarrier.PRECISION
          }) for 30-bit fixed-point field`
        );
      }

      const clamped = Math.min(Math.max(scaled, 0), ItemCarrier.MAX_INT_30_BITS);
      return BigInt(clamped) << ItemCarrier.HEIGHT_SHIFT;
    }

    return BigInt(scaled) << ItemCarrier.HEIGHT_SHIFT;
  }

  private encodeTop(top: number): bigint {
    const scaled = Math.round(top * ItemCarrier.PRECISION);

    if (scaled > ItemCarrier.MAX_INT_30_BITS || scaled < 0) {
      if (process.env.NODE_ENV !== 'production') {
        throw new Error(
          `LargeDataTable.ItemCarrier top=${top} is out of range (0 - ${
            ItemCarrier.MAX_INT_30_BITS / ItemCarrier.PRECISION
          }) for 30-bit fixed-point field`
        );
      }

      const clamped = Math.min(Math.max(scaled, 0), ItemCarrier.MAX_INT_30_BITS);
      return BigInt(clamped) << ItemCarrier.TOP_SHIFT;
    }

    return BigInt(scaled) << ItemCarrier.TOP_SHIFT;
  }

  private decodeHeight(bitmap: bigint): number {
    const value = (bitmap & this.ATTRS_MASK.height) >> ItemCarrier.HEIGHT_SHIFT;
    return Number(value) / ItemCarrier.PRECISION;
  }

  private decodeTop(bitmap: bigint): number {
    const value = (bitmap & this.ATTRS_MASK.top) >> ItemCarrier.TOP_SHIFT;
    return Number(value) / ItemCarrier.PRECISION;
  }

  private updateStatusBit(
    index: number,
    key: keyof LargeDataTable.ItemCarrier.Status,
    updater: (current: boolean) => boolean
  ): void {
    let bitmap = this.getBitmapOrThrow(index);
    const mask = this.STATUS_MASK[key];
    const current = (bitmap & mask) !== 0n;
    const next = updater(current);
    bitmap = next ? (bitmap | mask) : (bitmap & ~mask);
    this.setBitmap(index, bitmap);
  }

  public getStatus(index: number): LargeDataTable.ItemCarrier.Status {
    const bitmap = this.getBitmapOrThrow(index);

    return {
      inited: (bitmap & this.STATUS_MASK.inited) !== 0n,
      loaded: (bitmap & this.STATUS_MASK.loaded) !== 0n,
      measured: (bitmap & this.STATUS_MASK.measured) !== 0n,
      visible: (bitmap & this.STATUS_MASK.visible) !== 0n
    };
  }

  public getAttrs(index: number): LargeDataTable.ItemCarrier.Attrs {
    const bitmap = this.getBitmapOrThrow(index);
    const height = this.decodeHeight(bitmap);
    const top = this.decodeTop(bitmap);

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
    let bitmap = this.getBitmapOrThrow(index);

    if (attrs.height !== undefined) {
      bitmap = (bitmap & ~this.ATTRS_MASK.height) | (this.encodeHeight(attrs.height) & this.ATTRS_MASK.height);
    }
    if (attrs.top !== undefined) {
      bitmap = (bitmap & ~this.ATTRS_MASK.top) | (this.encodeTop(attrs.top) & this.ATTRS_MASK.top);
    }

    this.setBitmap(index, bitmap);
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
    this.itemDataBitmap[index] = 0n; // Reset all bits to 0
  }

  // Utility method to convert a number to a fixed precision (2 decimal places)
  // Used externally for comparing measured heights with stored heights
  static convertToSamePrecision(value: number): number {
    return Math.round(value * ItemCarrier.PRECISION) / ItemCarrier.PRECISION;
  }
}
