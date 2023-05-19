// common
import { useFallback } from './common/fallback';

// libs
import { useClickSignal } from './libs/click';
import { signal, computed } from './libs/signal';
import Math$ from './libs/math';
import String$ from './libs/string';
import uuid, { NilUUID, Hex2UUID, UUID2Hex } from './libs/uuid';

// types
import type { UUID, HexUUID } from './libs/uuid';
import type { Callback, EventCallback } from './types/callback';
import type { HasUUID, HasHexUUID, HasID } from './types/id';
import type {
  AtLeastOne,
  AtLeastOneOptional,
  OneOf,
  OnlyOne,
  OnlyOneByKey,
  OnlyOneOf,
  Optional,
  Nullable,
  ValueOf
} from './types/optional';
import type { MustDefined, MustHas, Writeable, MaybeArray } from './types/utils';
import type { Vector, Vec2, Vec3, Vec4 } from './types/vector';

export {
  // common
  useFallback,

  // libs
  useClickSignal,
  signal,
  computed,
  Math$,
  String$,
  uuid,
  NilUUID,
  Hex2UUID,
  UUID2Hex
};

export type {
  // types
  Callback,
  EventCallback,
  HasUUID,
  HasHexUUID,
  HasID,
  AtLeastOne,
  AtLeastOneOptional,
  OneOf,
  OnlyOne,
  OnlyOneByKey,
  OnlyOneOf,
  Optional,
  Nullable,
  ValueOf,
  Vector,
  Vec2,
  Vec3,
  Vec4,
  MustDefined,
  MustHas,
  Writeable,
  MaybeArray,
  UUID,
  HexUUID
};
