export type InvalidMessage = Record<keyof Exclude<ValidityStateFlags, 'valid'>, string>;
export declare const promoteInvalidMessage: (validity: ValidityState, invalidMessage?: Partial<InvalidMessage>) => string | null;
