import { shallowRef as p, watchEffect as d, readonly as l, getCurrentScope as g, onScopeDispose as m, unref as v, toRef as w, customRef as O, ref as u, reactive as _ } from "vue";
var y = Object.defineProperty, P = Object.defineProperties, h = Object.getOwnPropertyDescriptors, i = Object.getOwnPropertySymbols, $ = Object.prototype.hasOwnProperty, b = Object.prototype.propertyIsEnumerable, c = (e, t, n) => t in e ? y(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, I = (e, t) => {
  for (var n in t || (t = {}))
    $.call(t, n) && c(e, n, t[n]);
  if (i)
    for (var n of i(t))
      b.call(t, n) && c(e, n, t[n]);
  return e;
}, S = (e, t) => P(e, h(t));
function f(e, t) {
  var n;
  const s = p();
  return d(() => {
    s.value = e();
  }, S(I({}, t), {
    flush: (n = t == null ? void 0 : t.flush) != null ? n : "sync"
  })), l(s);
}
function D(e) {
  return g() ? (m(e), !0) : !1;
}
function A() {
  const e = /* @__PURE__ */ new Set(), t = (o) => {
    e.delete(o);
  };
  return {
    on: (o) => {
      e.add(o);
      const r = () => t(o);
      return D(r), {
        off: r
      };
    },
    off: t,
    trigger: (o) => Promise.all(Array.from(e).map((r) => r(o)))
  };
}
function F(e) {
  return typeof e == "function" ? e() : v(e);
}
const Z = typeof window < "u", j = () => {
}, T = (e, t) => Object.prototype.hasOwnProperty.call(e, t), C = /* @__PURE__ */ E();
function E() {
  var e;
  return Z && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && /* @__PURE__ */ /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
const H = {
  mounted: "mounted",
  updated: "updated",
  unmounted: "unmounted"
};
function V(...e) {
  if (e.length !== 1)
    return w(...e);
  const t = e[0];
  return typeof t == "function" ? l(O(() => ({ get: t, set: j }))) : u(t);
}
const a = _({
  language: u(Intl.DateTimeFormat().resolvedOptions().locale),
  timeZone: u(Intl.DateTimeFormat().resolvedOptions().timeZone)
}), x = () => ({
  ...{
    language: f(() => a.language),
    timeZone: f(() => a.timeZone)
  },
  ...{
    setLanguage: (n) => {
      a.language = n;
    },
    setTimeZone: (n) => {
      a.timeZone = n;
    }
  }
});
export {
  F as a,
  f as b,
  A as c,
  H as d,
  C as e,
  V as f,
  T as h,
  Z as i,
  j as n,
  D as t,
  x as u
};
//# sourceMappingURL=index-8ac250c5.js.map
