import { omit, toPairs } from 'lodash-es';

export type InvalidMessage = Record<keyof Exclude<ValidityStateFlags, 'valid'>, 'string'>;

export const promoteInvalidMessage = (
  validity: ValidityState,
  invalidMessage?: Partial<InvalidMessage>
): string | null =>
  invalidMessage
    ? (
        toPairs(omit(validity, 'valid')) as [keyof Exclude<ValidityStateFlags, 'valid'>, boolean][]
      ).find(([key, value]) => value && invalidMessage[key])?.[0] ?? null
    : null;
