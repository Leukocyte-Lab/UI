import { shallowRef as R, watchEffect as C, readonly as D, getCurrentScope as W, onScopeDispose as k, unref as A, onMounted as Z, nextTick as E, ref as p, isRef as j, watch as I, getCurrentInstance as M, toRef as _, customRef as L, reactive as V } from "vue";
function F(e, t) {
  var n;
  const o = R();
  return C(() => {
    o.value = e();
  }, {
    ...t,
    flush: (n = t == null ? void 0 : t.flush) != null ? n : "sync"
  }), D(o);
}
function h(e) {
  return W() ? (k(e), !0) : !1;
}
function J() {
  const e = /* @__PURE__ */ new Set(), t = (r) => {
    e.delete(r);
  };
  return {
    on: (r) => {
      e.add(r);
      const i = () => t(r);
      return h(i), {
        off: i
      };
    },
    off: t,
    trigger: (...r) => Promise.all(Array.from(e).map((i) => i(...r)))
  };
}
function w(e) {
  return typeof e == "function" ? e() : A(e);
}
const v = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const K = (e) => e != null, G = Object.prototype.toString, Q = (e) => G.call(e) === "[object Object]", U = () => +Date.now(), f = () => {
}, X = (e, t) => Object.prototype.hasOwnProperty.call(e, t), Y = /* @__PURE__ */ H();
function H() {
  var e, t;
  return v && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function y(e, t) {
  function n(...o) {
    return new Promise((r, i) => {
      Promise.resolve(e(() => t.apply(this, o), { fn: t, thisArg: this, args: o })).then(r).catch(i);
    });
  }
  return n;
}
const N = (e) => e();
function P(e, t = {}) {
  let n, o, r = f;
  const i = (a) => {
    clearTimeout(a), r(), r = f;
  };
  return (a) => {
    const l = w(e), s = w(t.maxWait);
    return n && i(n), l <= 0 || s !== void 0 && s <= 0 ? (o && (i(o), o = null), Promise.resolve(a())) : new Promise((u, b) => {
      r = t.rejectOnCancel ? b : u, s && !o && (o = setTimeout(() => {
        n && i(n), o = null, u(a());
      }, s)), n = setTimeout(() => {
        o && i(o), o = null, u(a());
      }, l);
    });
  };
}
function $(...e) {
  let t = 0, n, o = !0, r = f, i, c, a, l, s;
  !j(e[0]) && typeof e[0] == "object" ? { delay: c, trailing: a = !0, leading: l = !0, rejectOnCancel: s = !1 } = e[0] : [c, a = !0, l = !0, s = !1] = e;
  const u = () => {
    n && (clearTimeout(n), n = void 0, r(), r = f);
  };
  return (S) => {
    const d = w(c), O = Date.now() - t, g = () => i = S();
    return u(), d <= 0 ? (t = Date.now(), g()) : (O > d && (l || !o) ? (t = Date.now(), g()) : a && (i = new Promise((T, x) => {
      r = s ? x : T, n = setTimeout(() => {
        t = Date.now(), o = !0, T(g()), u();
      }, Math.max(0, d - O));
    })), !l && !n && (n = setTimeout(() => o = !0, d)), o = !1, i);
  };
}
const ee = {
  mounted: "mounted",
  updated: "updated",
  unmounted: "unmounted"
};
function q(e) {
  return e || M();
}
function te(...e) {
  if (e.length !== 1)
    return _(...e);
  const t = e[0];
  return typeof t == "function" ? D(L(() => ({ get: t, set: f }))) : p(t);
}
function ne(e, t = 200, n = {}) {
  return y(
    P(t, n),
    e
  );
}
function oe(e, t = 200, n = !1, o = !0, r = !1) {
  return y(
    $(t, n, o, r),
    e
  );
}
function z(e, t, n = {}) {
  const {
    eventFilter: o = N,
    ...r
  } = n;
  return I(
    e,
    y(
      o,
      t
    ),
    r
  );
}
function re(e, t = !0, n) {
  q() ? Z(e, n) : t ? e() : E(e);
}
function ie(e, t = 1e3, n = {}) {
  const {
    immediate: o = !0,
    immediateCallback: r = !1
  } = n;
  let i = null;
  const c = p(!1);
  function a() {
    i && (clearInterval(i), i = null);
  }
  function l() {
    c.value = !1, a();
  }
  function s() {
    const u = w(t);
    u <= 0 || (c.value = !0, r && e(), a(), i = setInterval(e, u));
  }
  if (o && v && s(), j(t) || typeof t == "function") {
    const u = I(t, () => {
      c.value && v && s();
    });
    h(u);
  }
  return h(l), {
    isActive: c,
    pause: l,
    resume: s
  };
}
function ae(e, t, n = {}) {
  const {
    debounce: o = 0,
    maxWait: r = void 0,
    ...i
  } = n;
  return z(
    e,
    t,
    {
      ...i,
      eventFilter: P(o, { maxWait: r })
    }
  );
}
const m = V({
  language: p(Intl.DateTimeFormat().resolvedOptions().locale),
  timeZone: p(Intl.DateTimeFormat().resolvedOptions().timeZone)
}), se = () => ({
  ...{
    language: F(() => m.language),
    timeZone: F(() => m.timeZone)
  },
  ...{
    setLanguage: (n) => {
      m.language = n;
    },
    setTimeZone: (n) => {
      m.timeZone = n;
    }
  }
});
export {
  re as a,
  w as b,
  oe as c,
  U as d,
  ie as e,
  Q as f,
  K as g,
  J as h,
  v as i,
  X as j,
  ne as k,
  F as l,
  ee as m,
  f as n,
  Y as o,
  te as p,
  h as t,
  se as u,
  ae as w
};
//# sourceMappingURL=i18n.service-4W5HT8k4.js.map
