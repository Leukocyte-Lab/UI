import { shallowRef as l, watchEffect as d, readonly as c, getCurrentScope as f, onScopeDispose as g, onMounted as p, nextTick as m, unref as w, getCurrentInstance as v, toRef as y, customRef as h, ref as i, reactive as O } from "vue";
function u(e, t) {
  var n;
  const s = l();
  return d(() => {
    s.value = e();
  }, {
    ...t,
    flush: (n = t == null ? void 0 : t.flush) != null ? n : "sync"
  }), c(s);
}
function b(e) {
  return f() ? (g(e), !0) : !1;
}
function P() {
  const e = /* @__PURE__ */ new Set(), t = (o) => {
    e.delete(o);
  };
  return {
    on: (o) => {
      e.add(o);
      const a = () => t(o);
      return b(a), {
        off: a
      };
    },
    off: t,
    trigger: (...o) => Promise.all(Array.from(e).map((a) => a(...o)))
  };
}
function R(e) {
  return typeof e == "function" ? e() : w(e);
}
const S = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const A = (e) => e != null, I = Object.prototype.toString, C = (e) => I.call(e) === "[object Object]", T = () => {
}, D = (e, t) => Object.prototype.hasOwnProperty.call(e, t), x = /* @__PURE__ */ j();
function j() {
  var e, t;
  return S && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
const E = {
  mounted: "mounted",
  updated: "updated",
  unmounted: "unmounted"
};
function k(e) {
  return e || v();
}
function F(...e) {
  if (e.length !== 1)
    return y(...e);
  const t = e[0];
  return typeof t == "function" ? c(h(() => ({ get: t, set: T }))) : i(t);
}
function M(e, t = !0, n) {
  k() ? p(e, n) : t ? e() : m(e);
}
const r = O({
  language: i(Intl.DateTimeFormat().resolvedOptions().locale),
  timeZone: i(Intl.DateTimeFormat().resolvedOptions().timeZone)
}), _ = () => ({
  ...{
    language: u(() => r.language),
    timeZone: u(() => r.timeZone)
  },
  ...{
    setLanguage: (n) => {
      r.language = n;
    },
    setTimeZone: (n) => {
      r.timeZone = n;
    }
  }
});
export {
  M as a,
  R as b,
  C as c,
  A as d,
  P as e,
  u as f,
  E as g,
  D as h,
  S as i,
  x as j,
  F as k,
  T as n,
  b as t,
  _ as u
};
//# sourceMappingURL=i18n.service-gElpgByf.js.map
