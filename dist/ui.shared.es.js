import { H as c, M as f, N as l, S as h, U as d, c as y, p as m, b as p, s as v, u as b, a as U } from "./parser-DcmpGuup.js";
const n = (a, r) => a ?? r;
class i extends Map {
  constructor(r) {
    super(r);
  }
  find(r, t) {
    for (const [e, s] of this)
      if (r.call(t, s, e, this))
        return [e, s];
  }
  findKey(r, t) {
    for (const [e, s] of this)
      if (r.call(t, s, e, this))
        return e;
  }
  findValue(r, t) {
    for (const [e, s] of this)
      if (r.call(t, s, e, this))
        return s;
  }
  toArray(r) {
    switch (r) {
      case "entries":
        return Array.from(this.entries());
      case "keys":
        return Array.from(this.keys());
      case "values":
        return Array.from(this.values());
      default:
        return Array.from(this.entries());
    }
  }
  toObject() {
    return Object.fromEntries(this.entries());
  }
  static fromObject(r) {
    return new i(Object.entries(r));
  }
}
export {
  c as Hex2UUID,
  i as Map$,
  f as Math$,
  l as NilUUID,
  h as String$,
  d as UUID2Hex,
  y as computed,
  m as parser,
  p as selector,
  v as signal,
  b as useEventDebounceSignal,
  n as useFallback,
  U as uuid
};
//# sourceMappingURL=ui.shared.es.js.map
