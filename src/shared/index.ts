// common
import { useFallback } from './common/fallback';

// libs
import { useEventDebounceSignal } from './libs/event';
import { signal, computed } from './libs/signal';
import Math$ from './libs/math';
import String$ from './libs/string';
import uuid, { NilUUID, Hex2UUID, UUID2Hex } from './libs/uuid';
import { selector } from './libs/selector';
import { parser } from './libs/parser';

// types
import type { UUID, HexUUID } from './libs/uuid';
import type { EventSignalOptions } from './libs/event';
import type { Signal } from './libs/signal';
import type { Callback, EventCallback } from './types/callback';
import type { HasUUID, HasHexUUID, HasID } from './types/id';
import type { ObjectLike } from './types/object';
import type {
  AtLeastOne,
  AtLeastOneOptional,
  OneOf,
  OnlyOne,
  OnlyOneByKey,
  OnlyOneOf,
  Optional,
  OptionalObject,
  Nullable,
  ValueOf
} from './types/optional';
import type { MustDefined, MustHas, Writeable, MaybeArray } from './types/utils';
import type { Vector, Vec2, Vec3, Vec4 } from './types/vector';

export {
  // common
  useFallback,

  // libs
  useEventDebounceSignal,
  signal,
  computed,
  Math$,
  String$,
  uuid,
  NilUUID,
  Hex2UUID,
  UUID2Hex,
  selector,
  parser
};

export type {
  // types
  Callback,
  EventCallback,
  Signal,
  EventSignalOptions,
  HasUUID,
  HasHexUUID,
  HasID,
  AtLeastOne,
  AtLeastOneOptional,
  ObjectLike,
  OptionalObject,
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
