import type { LargeDataTable } from './LargeDataTable.model';
type Props = {
    totalItems?: number;
    visibleSize?: number;
    bufferSize?: number;
};
export declare class ItemCarrier {
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
    private static readonly PRECISION;
    private static readonly HEIGHT_SHIFT;
    private static readonly MAX_INT_28_BITS;
    private static readonly MAX_INT_32_BITS;
    private static readonly STATUS_MASK;
    private static readonly ATTRS_MASK;
    private itemDataBitmap;
    private visibleSize;
    /**
     * Creates an instance of ItemCarrier.
     *  @param props.totalItems - Total number of items to be managed.
     *  @param props.visibleSize - Number of items visible in the viewport. default is `0`.
     *  @param props.bufferSize - Size of the buffer to allocate for item data. Default is based on totalItems with a minimum of 1,000. Set it to `-1` to use totalItems exactly.
     */
    constructor(props?: Props);
    private initialize;
    private getBaseSlotOrThrow;
    private getLowerBitsOrThrow;
    private getUpperBitsOrThrow;
    private setLowerBits;
    private setUpperBits;
    private encodeFixed;
    private encodeHeight;
    private encodeTop;
    private decodeHeight;
    private decodeTop;
    private updateStatusBit;
    getStatus(index: number): LargeDataTable.ItemCarrier.Status;
    getAttrs(index: number): LargeDataTable.ItemCarrier.Attrs;
    get(index: number): LargeDataTable.ItemCarrier.Payload;
    setStatus(index: number, status: Partial<LargeDataTable.ItemCarrier.Status>): void;
    setAttrs(index: number, attrs: Partial<Omit<LargeDataTable.ItemCarrier.Attrs, 'bottom'>>): void;
    toggleStatus(index: number, statusKey: keyof LargeDataTable.ItemCarrier.Status): void;
    setStatusByAttr(index: number, statusKey: keyof LargeDataTable.ItemCarrier.Status, value: boolean): void;
    resetItem(index: number): void;
    static convertToSamePrecision(value: number): number;
}
export {};
