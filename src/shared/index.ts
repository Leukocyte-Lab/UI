// common
import { useFallback } from './common/fallback';
// libs
import { useEventDebounceSignal } from './libs/event';
import Map$ from './libs/map';
import Math$ from './libs/math';
import { parser } from './libs/parser';
import { selector } from './libs/selector';
import { computed, signal } from './libs/signal';
import String$ from './libs/string';
import uuid, { Hex2UUID, NilUUID, UUID2Hex } from './libs/uuid';
import { promoteInvalidMessage } from './libs/validation';

import type { EventSignalOptions } from './libs/event';
import type { MapProxy } from './libs/map';
import type { Signal } from './libs/signal';
// types
import type { HexUUID, UUID } from './libs/uuid';
import type { InvalidMessage } from './libs/validation';
import type { Callback, EventCallback, PromiseCallback } from './types/callback';
import type { HasHexUUID, HasID, HasUUID } from './types/id';
import type { Dictionary } from './types/map';
import type { ObjectLike } from './types/object';
import type {
  AtLeastOne,
  AtLeastOneOptional,
  Nullable,
  OneOf,
  OnlyOne,
  OnlyOneByKey,
  OnlyOneOf,
  Optional,
  OptionalObject,
  ValueOf
} from './types/optional';
import type { MaybeArray, MustDefined, MustHas, Writeable } from './types/utils';
import type { Vec2, Vec3, Vec4, Vector } from './types/vector';

export {
  computed,
  Hex2UUID,
  Map$,
  Math$,
  NilUUID,
  parser,
  promoteInvalidMessage,
  selector,
  signal,
  String$,
  // libs
  useEventDebounceSignal,
  // common
  useFallback,
  uuid,
  UUID2Hex
};

export type {
  AtLeastOne,
  AtLeastOneOptional,
  // types
  Callback,
  Dictionary,
  EventCallback,
  EventSignalOptions,
  HasHexUUID,
  HasID,
  HasUUID,
  HexUUID,
  // libs
  InvalidMessage,
  MapProxy,
  MaybeArray,
  MustDefined,
  MustHas,
  Nullable,
  ObjectLike,
  OneOf,
  OnlyOne,
  OnlyOneByKey,
  OnlyOneOf,
  Optional,
  OptionalObject,
  PromiseCallback,
  Signal,
  UUID,
  ValueOf,
  Vec2,
  Vec3,
  Vec4,
  Vector,
  Writeable
};
