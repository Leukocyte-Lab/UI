import { shallowRef as h, watchEffect as v, readonly as p, getCurrentScope as y, onScopeDispose as O, onMounted as b, nextTick as T, unref as S, getCurrentInstance as F, watch as P, toRef as j, customRef as x, ref as l, reactive as I } from "vue";
function m(t, e) {
  var n;
  const o = h();
  return v(() => {
    o.value = t();
  }, {
    ...e,
    flush: (n = e == null ? void 0 : e.flush) != null ? n : "sync"
  }), p(o);
}
function D(t) {
  return y() ? (O(t), !0) : !1;
}
function H() {
  const t = /* @__PURE__ */ new Set(), e = (r) => {
    t.delete(r);
  };
  return {
    on: (r) => {
      t.add(r);
      const i = () => e(r);
      return D(i), {
        off: i
      };
    },
    off: e,
    trigger: (...r) => Promise.all(Array.from(t).map((i) => i(...r)))
  };
}
function g(t) {
  return typeof t == "function" ? t() : S(t);
}
const R = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const L = (t) => t != null, W = Object.prototype.toString, N = (t) => W.call(t) === "[object Object]", f = () => {
}, V = (t, e) => Object.prototype.hasOwnProperty.call(t, e), $ = /* @__PURE__ */ Z();
function Z() {
  var t, e;
  return R && ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.userAgent) && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function A(t, e) {
  function n(...o) {
    return new Promise((r, i) => {
      Promise.resolve(t(() => e.apply(this, o), { fn: e, thisArg: this, args: o })).then(r).catch(i);
    });
  }
  return n;
}
const C = (t) => t();
function k(t, e = {}) {
  let n, o, r = f;
  const i = (s) => {
    clearTimeout(s), r(), r = f;
  };
  return (s) => {
    const d = g(t), a = g(e.maxWait);
    return n && i(n), d <= 0 || a !== void 0 && a <= 0 ? (o && (i(o), o = null), Promise.resolve(s())) : new Promise((c, w) => {
      r = e.rejectOnCancel ? w : c, a && !o && (o = setTimeout(() => {
        n && i(n), o = null, c(s());
      }, a)), n = setTimeout(() => {
        o && i(o), o = null, c(s());
      }, d);
    });
  };
}
const q = {
  mounted: "mounted",
  updated: "updated",
  unmounted: "unmounted"
};
function _(t) {
  return t || F();
}
function z(...t) {
  if (t.length !== 1)
    return j(...t);
  const e = t[0];
  return typeof e == "function" ? p(x(() => ({ get: e, set: f }))) : l(e);
}
function E(t, e, n = {}) {
  const {
    eventFilter: o = C,
    ...r
  } = n;
  return P(
    t,
    A(
      o,
      e
    ),
    r
  );
}
function B(t, e = !0, n) {
  _() ? b(t, n) : e ? t() : T(t);
}
function J(t, e, n = {}) {
  const {
    debounce: o = 0,
    maxWait: r = void 0,
    ...i
  } = n;
  return E(
    t,
    e,
    {
      ...i,
      eventFilter: k(o, { maxWait: r })
    }
  );
}
const u = I({
  language: l(Intl.DateTimeFormat().resolvedOptions().locale),
  timeZone: l(Intl.DateTimeFormat().resolvedOptions().timeZone)
}), K = () => ({
  ...{
    language: m(() => u.language),
    timeZone: m(() => u.timeZone)
  },
  ...{
    setLanguage: (n) => {
      u.language = n;
    },
    setTimeZone: (n) => {
      u.timeZone = n;
    }
  }
});
export {
  B as a,
  g as b,
  N as c,
  L as d,
  H as e,
  m as f,
  q as g,
  V as h,
  R as i,
  $ as j,
  z as k,
  f as n,
  D as t,
  K as u,
  J as w
};
//# sourceMappingURL=i18n.service-qhV3M78j.js.map
