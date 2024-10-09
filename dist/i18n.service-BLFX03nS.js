import { shallowRef as R, watchEffect as C, readonly as D, getCurrentScope as W, onScopeDispose as k, unref as A, onMounted as Z, nextTick as E, ref as p, isRef as j, watch as I, getCurrentInstance as M, toRef as _, customRef as L, reactive as V } from "vue";
function F(e, t) {
  var n;
  const o = R();
  return C(() => {
    o.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), D(o);
}
function h(e) {
  return W() ? (k(e), !0) : !1;
}
function J() {
  const e = /* @__PURE__ */ new Set(), t = (i) => {
    e.delete(i);
  };
  return {
    on: (i) => {
      e.add(i);
      const r = () => t(i);
      return h(r), {
        off: r
      };
    },
    off: t,
    trigger: (...i) => Promise.all(Array.from(e).map((r) => r(...i)))
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
  return v && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function y(e, t) {
  function n(...o) {
    return new Promise((i, r) => {
      Promise.resolve(e(() => t.apply(this, o), { fn: t, thisArg: this, args: o })).then(i).catch(r);
    });
  }
  return n;
}
const N = (e) => e();
function P(e, t = {}) {
  let n, o, i = f;
  const r = (a) => {
    clearTimeout(a), i(), i = f;
  };
  return (a) => {
    const l = w(e), s = w(t.maxWait);
    return n && r(n), l <= 0 || s !== void 0 && s <= 0 ? (o && (r(o), o = null), Promise.resolve(a())) : new Promise((u, b) => {
      i = t.rejectOnCancel ? b : u, s && !o && (o = setTimeout(() => {
        n && r(n), o = null, u(a());
      }, s)), n = setTimeout(() => {
        o && r(o), o = null, u(a());
      }, l);
    });
  };
}
function $(...e) {
  let t = 0, n, o = !0, i = f, r, c, a, l, s;
  !j(e[0]) && typeof e[0] == "object" ? { delay: c, trailing: a = !0, leading: l = !0, rejectOnCancel: s = !1 } = e[0] : [c, a = !0, l = !0, s = !1] = e;
  const u = () => {
    n && (clearTimeout(n), n = void 0, i(), i = f);
  };
  return (S) => {
    const d = w(c), O = Date.now() - t, g = () => r = S();
    return u(), d <= 0 ? (t = Date.now(), g()) : (O > d && (l || !o) ? (t = Date.now(), g()) : a && (r = new Promise((T, x) => {
      i = s ? x : T, n = setTimeout(() => {
        t = Date.now(), o = !0, T(g()), u();
      }, Math.max(0, d - O));
    })), !l && !n && (n = setTimeout(() => o = !0, d)), o = !1, r);
  };
}
const ee = {
  mounted: "mounted",
  updated: "updated",
  unmounted: "unmounted"
};
function q(e) {
  return M();
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
function oe(e, t = 200, n = !1, o = !0, i = !1) {
  return y(
    $(t, n, o, i),
    e
  );
}
function z(e, t, n = {}) {
  const {
    eventFilter: o = N,
    ...i
  } = n;
  return I(
    e,
    y(
      o,
      t
    ),
    i
  );
}
function ie(e, t = !0, n) {
  q() ? Z(e, n) : t ? e() : E(e);
}
function re(e, t = 1e3, n = {}) {
  const {
    immediate: o = !0,
    immediateCallback: i = !1
  } = n;
  let r = null;
  const c = p(!1);
  function a() {
    r && (clearInterval(r), r = null);
  }
  function l() {
    c.value = !1, a();
  }
  function s() {
    const u = w(t);
    u <= 0 || (c.value = !0, i && e(), a(), r = setInterval(e, u));
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
    maxWait: i = void 0,
    ...r
  } = n;
  return z(
    e,
    t,
    {
      ...r,
      eventFilter: P(o, { maxWait: i })
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
  ie as a,
  w as b,
  ne as c,
  oe as d,
  U as e,
  re as f,
  Q as g,
  K as h,
  v as i,
  J as j,
  X as k,
  F as l,
  ee as m,
  f as n,
  Y as o,
  te as p,
  h as t,
  se as u,
  ae as w
};
//# sourceMappingURL=i18n.service-BLFX03nS.js.map
