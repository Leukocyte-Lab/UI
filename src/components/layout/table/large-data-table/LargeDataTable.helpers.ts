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
   * - bits 4-33: height (30 bits, max 1073741823), stored as an float value multiplied by 1000 to preserve three decimal places
   * - bits 34-63: top (30 bits, max 1073741823), stored as an float value multiplied by 1000 to preserve three decimal places
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
  private STATUS_MASK = {
    inited: 1n << 0n,
    loaded: 1n << 1n,
    measured: 1n << 2n,
    visible: 1n << 3n
  };

  private ATTRS_MASK = {
    height: 0x3fffffffn << 4n,
    top: 0x3fffffffn << 34n
  };

  private itemDataBitmap: BigUint64Array;
  private visibleSize: number = 0;

  /**
   * Creates an instance of ItemCarrier.
   *  @param props.totalItems - Total number of items to be managed.
   *  @param props.visibleSize - Number of items visible in the viewport. default is `0`.
   *  @param props.bufferSize - Size of the buffer to allocate for item data. Default is `1,000,000`. Set it to `-1` to allocate based on totalItems.
   */

  constructor(
    props?: Props
  ) {
    this.itemDataBitmap = new BigUint64Array(Math.max(props?.bufferSize ?? 1_000_000, props?.totalItems ?? 0));
    this.visibleSize = props?.visibleSize ?? 50; // Default visible size is 50

    this.initialize();
  }

  private initialize() {
    this.itemDataBitmap.fill(0n);
    
    for (let i = 0; i < this.visibleSize; i++) {
      this.setStatus(i, { visible: true });
    }
  }

  public getStatus(index: number): LargeDataTable.ItemCarrier.Status {
    const bitmap = this.itemDataBitmap[index];

    if (bitmap === undefined) {
      throw new Error(`Item at index ${index} is out of range. Buffer size: ${this.itemDataBitmap.length}`);
    }

    return {
      inited: (bitmap & this.STATUS_MASK.inited) !== 0n,
      loaded: (bitmap & this.STATUS_MASK.loaded) !== 0n,
      measured: (bitmap & this.STATUS_MASK.measured) !== 0n,
      visible: (bitmap & this.STATUS_MASK.visible) !== 0n
    };
  }

  public getAttrs(index: number): LargeDataTable.ItemCarrier.Attrs {
    const bitmap = this.itemDataBitmap[index];
    
    if (bitmap === undefined) {
      throw new Error(`Item at index ${index} is out of range. Buffer size: ${this.itemDataBitmap.length}`);
    }

    const heightValue = (bitmap & this.ATTRS_MASK.height) >> 4n;
    const topValue = (bitmap & this.ATTRS_MASK.top) >> 34n;

    return {
      height: Number(heightValue) / 1000, // Convert back to float
      top: Number(topValue) / 1000, // Convert back to float
      bottom: (Number(topValue) + Number(heightValue)) / 1000 // Calculate bottom based on top and height
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
    let bitmap = this.itemDataBitmap[index];
    
    if (bitmap === undefined) {
      throw new Error(`Item at index ${index} is out of range. Buffer size: ${this.itemDataBitmap.length}`);
    }

    if (status.inited !== undefined) {
      bitmap = status.inited ? bitmap | this.STATUS_MASK.inited : bitmap & ~this.STATUS_MASK.inited;
    }
    if (status.loaded !== undefined) {
      bitmap = status.loaded ? bitmap | this.STATUS_MASK.loaded : bitmap & ~this.STATUS_MASK.loaded;
    }
    if (status.measured !== undefined) {
      bitmap = status.measured
        ? bitmap | this.STATUS_MASK.measured
        : bitmap & ~this.STATUS_MASK.measured;
    }
    if (status.visible !== undefined) {
      bitmap = status.visible
        ? bitmap | this.STATUS_MASK.visible
        : bitmap & ~this.STATUS_MASK.visible;
    }
    this.itemDataBitmap[index] = bitmap;
  }

  public setAttrs(index: number, attrs: Partial<Omit<LargeDataTable.ItemCarrier.Attrs, 'bottom'>>) {
    let bitmap = this.itemDataBitmap[index];

    if (bitmap === undefined) {
      throw new Error(`Item at index ${index} is out of range. Buffer size: ${this.itemDataBitmap.length}`);
    }

    if (attrs.height !== undefined) {
      const heightValue = BigInt(Math.round(attrs.height * 1000)); // Store as integer to preserve three decimal places
      bitmap = (bitmap & ~this.ATTRS_MASK.height) | ((heightValue << 4n) & this.ATTRS_MASK.height);
    }
    if (attrs.top !== undefined) {
      const topValue = BigInt(Math.round(attrs.top * 1000)); // Store as integer to preserve three decimal places
      bitmap = (bitmap & ~this.ATTRS_MASK.top) | ((topValue << 34n) & this.ATTRS_MASK.top);
    }
    this.itemDataBitmap[index] = bitmap;
  }

  public toggleStatus(index: number, statusKey: keyof LargeDataTable.ItemCarrier.Status) {
    let bitmap = this.itemDataBitmap[index];

    if (bitmap === undefined) {
      throw new Error(`Item at index ${index} is out of range. Buffer size: ${this.itemDataBitmap.length}`);
    }
    const mask = this.STATUS_MASK[statusKey];
    bitmap ^= mask; // Toggle the specific status bit
    this.itemDataBitmap[index] = bitmap;
  }

  public setStatusByAttr(
    index: number,
    statusKey: keyof LargeDataTable.ItemCarrier.Status,
    value: boolean
  ) {
    let bitmap = this.itemDataBitmap[index];

    if (bitmap === undefined) {
      throw new Error(`Item at index ${index} is out of range. Buffer size: ${this.itemDataBitmap.length}`);
    }
    const mask = this.STATUS_MASK[statusKey];
    bitmap = value ? bitmap | mask : bitmap & ~mask; // Set or clear the specific status bit based on value
    this.itemDataBitmap[index] = bitmap;
  }

  public resetItem(index: number) {
    this.itemDataBitmap[index] = 0n; // Reset all bits to 0
  }

  // Utility method to convert a number to a fixed precision (3 decimal places)
  static convertToSamePrecision(value: number): number {
    return Math.round(value * 1000) / 1000;
  }
}
