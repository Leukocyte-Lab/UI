import { shallowRef as it, watchEffect as Ee, readonly as ct, getCurrentScope as ut, onScopeDispose as dt, unref as s, computed as F, ref as V, watch as Y, getCurrentInstance as ft, onMounted as ce, defineComponent as B, openBlock as h, createBlock as E, resolveDynamicComponent as pt, normalizeProps as _t, guardReactiveProps as ht, withCtx as I, renderSlot as U, createElementBlock as $, normalizeClass as d, createElementVNode as u, mergeProps as Ve, toDisplayString as O, createCommentVNode as S, createVNode as C, useCssVars as gt, reactive as yt, Fragment as x, renderList as P, pushScopeId as ee, popScopeId as te, onUpdated as Re, normalizeStyle as $t } from "vue";
import { Icon as q } from "@iconify/vue/offline";
import { i as De, d as H, g as vt, e as ne, f as bt, h as Le, j as mt, k as wt, l as kt, o as zt, m as ue, n as xt, q as de, r as St, t as Fe, v as Ot, w as Tt, x as Pt, y as be, z as me, A as se, B as X, C as Ne, D as Ge, E as Mt, F as At, G as Bt, I as Ct, J as It, K as Ue, L as jt, O as Et, P as qe, Q as Vt, R as Rt, u as fe, T as oe, p as J, V as ie, W as Dt, X as Q, M as k, b as D, s as L, Y as Lt } from "./parser-cb3ebaa6.js";
var Ft = /\s/;
function Nt(e) {
  for (var t = e.length; t-- && Ft.test(e.charAt(t)); )
    ;
  return t;
}
var Gt = /^\s+/;
function Ut(e) {
  return e && e.slice(0, Nt(e) + 1).replace(Gt, "");
}
var we = 0 / 0, qt = /^[-+]0x[0-9a-f]+$/i, Ht = /^0b[01]+$/i, Wt = /^0o[0-7]+$/i, Zt = parseInt;
function Yt(e) {
  if (typeof e == "number")
    return e;
  if (De(e))
    return we;
  if (H(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = H(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Ut(e);
  var n = Ht.test(e);
  return n || Wt.test(e) ? Zt(e.slice(2), n ? 2 : 8) : qt.test(e) ? we : +e;
}
var ke = Object.create, Xt = function() {
  function e() {
  }
  return function(t) {
    if (!H(t))
      return {};
    if (ke)
      return ke(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
const Jt = Xt;
function Qt(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
function Kt(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var en = 800, tn = 16, nn = Date.now;
function sn(e) {
  var t = 0, n = 0;
  return function() {
    var r = nn(), l = tn - (r - n);
    if (n = r, l > 0) {
      if (++t >= en)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function rn(e) {
  return function() {
    return e;
  };
}
var an = function() {
  try {
    var e = vt(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const K = an;
var ln = K ? function(e, t) {
  return K(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: rn(t),
    writable: !0
  });
} : ne;
const on = ln;
var cn = sn(on);
const He = cn;
function un(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
function pe(e, t, n) {
  t == "__proto__" && K ? K(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
var dn = Object.prototype, fn = dn.hasOwnProperty;
function We(e, t, n) {
  var r = e[t];
  (!(fn.call(e, t) && bt(r, n)) || n === void 0 && !(t in e)) && pe(e, t, n);
}
function W(e, t, n, r) {
  var l = !n;
  n || (n = {});
  for (var o = -1, _ = t.length; ++o < _; ) {
    var c = t[o], f = r ? r(n[c], e[c], c, n, e) : void 0;
    f === void 0 && (f = e[c]), l ? pe(n, c, f) : We(n, c, f);
  }
  return n;
}
var ze = Math.max;
function Ze(e, t, n) {
  return t = ze(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, l = -1, o = ze(r.length - t, 0), _ = Array(o); ++l < o; )
      _[l] = r[t + l];
    l = -1;
    for (var c = Array(t + 1); ++l < t; )
      c[l] = r[l];
    return c[t] = n(_), Qt(e, this, c);
  };
}
function pn(e, t) {
  return He(Ze(e, t, ne), e + "");
}
function _n(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var hn = Object.prototype, gn = hn.hasOwnProperty;
function yn(e) {
  if (!H(e))
    return _n(e);
  var t = Le(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !gn.call(e, r)) || n.push(r);
  return n;
}
function _e(e) {
  return mt(e) ? wt(e, !0) : yn(e);
}
function $n(e) {
  var t = e == null ? 0 : e.length;
  return t ? kt(e, 1) : [];
}
function vn(e) {
  return He(Ze(e, void 0, $n), e + "");
}
var bn = zt(Object.getPrototypeOf, Object);
const he = bn;
var mn = "[object Object]", wn = Function.prototype, kn = Object.prototype, Ye = wn.toString, zn = kn.hasOwnProperty, xn = Ye.call(Object);
function Sn(e) {
  if (!ue(e) || xt(e) != mn)
    return !1;
  var t = he(e);
  if (t === null)
    return !0;
  var n = zn.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Ye.call(n) == xn;
}
function On(e, t, n) {
  var r = -1, l = e.length;
  t < 0 && (t = -t > l ? 0 : l + t), n = n > l ? l : n, n < 0 && (n += l), l = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var o = Array(l); ++r < l; )
    o[r] = e[r + t];
  return o;
}
function Tn(e, t) {
  return e && W(t, de(t), e);
}
function Pn(e, t) {
  return e && W(t, _e(t), e);
}
var Xe = typeof exports == "object" && exports && !exports.nodeType && exports, xe = Xe && typeof module == "object" && module && !module.nodeType && module, Mn = xe && xe.exports === Xe, Se = Mn ? St.Buffer : void 0, Oe = Se ? Se.allocUnsafe : void 0;
function An(e, t) {
  if (t)
    return e.slice();
  var n = e.length, r = Oe ? Oe(n) : new e.constructor(n);
  return e.copy(r), r;
}
function Bn(e, t) {
  return W(e, Fe(e), t);
}
var Cn = Object.getOwnPropertySymbols, In = Cn ? function(e) {
  for (var t = []; e; )
    Tt(t, Fe(e)), e = he(e);
  return t;
} : Ot;
const Je = In;
function jn(e, t) {
  return W(e, Je(e), t);
}
function Qe(e) {
  return Pt(e, _e, Je);
}
var En = Object.prototype, Vn = En.hasOwnProperty;
function Rn(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && Vn.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
function ge(e) {
  var t = new e.constructor(e.byteLength);
  return new be(t).set(new be(e)), t;
}
function Dn(e, t) {
  var n = t ? ge(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var Ln = /\w*$/;
function Fn(e) {
  var t = new e.constructor(e.source, Ln.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var Te = me ? me.prototype : void 0, Pe = Te ? Te.valueOf : void 0;
function Nn(e) {
  return Pe ? Object(Pe.call(e)) : {};
}
function Gn(e, t) {
  var n = t ? ge(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var Un = "[object Boolean]", qn = "[object Date]", Hn = "[object Map]", Wn = "[object Number]", Zn = "[object RegExp]", Yn = "[object Set]", Xn = "[object String]", Jn = "[object Symbol]", Qn = "[object ArrayBuffer]", Kn = "[object DataView]", es = "[object Float32Array]", ts = "[object Float64Array]", ns = "[object Int8Array]", ss = "[object Int16Array]", rs = "[object Int32Array]", as = "[object Uint8Array]", ls = "[object Uint8ClampedArray]", os = "[object Uint16Array]", is = "[object Uint32Array]";
function cs(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case Qn:
      return ge(e);
    case Un:
    case qn:
      return new r(+e);
    case Kn:
      return Dn(e, n);
    case es:
    case ts:
    case ns:
    case ss:
    case rs:
    case as:
    case ls:
    case os:
    case is:
      return Gn(e, n);
    case Hn:
      return new r();
    case Wn:
    case Xn:
      return new r(e);
    case Zn:
      return Fn(e);
    case Yn:
      return new r();
    case Jn:
      return Nn(e);
  }
}
function us(e) {
  return typeof e.constructor == "function" && !Le(e) ? Jt(he(e)) : {};
}
var ds = "[object Map]";
function fs(e) {
  return ue(e) && se(e) == ds;
}
var Me = X && X.isMap, ps = Me ? Ne(Me) : fs;
const _s = ps;
var hs = "[object Set]";
function gs(e) {
  return ue(e) && se(e) == hs;
}
var Ae = X && X.isSet, ys = Ae ? Ne(Ae) : gs;
const $s = ys;
var vs = 1, bs = 2, ms = 4, Ke = "[object Arguments]", ws = "[object Array]", ks = "[object Boolean]", zs = "[object Date]", xs = "[object Error]", et = "[object Function]", Ss = "[object GeneratorFunction]", Os = "[object Map]", Ts = "[object Number]", tt = "[object Object]", Ps = "[object RegExp]", Ms = "[object Set]", As = "[object String]", Bs = "[object Symbol]", Cs = "[object WeakMap]", Is = "[object ArrayBuffer]", js = "[object DataView]", Es = "[object Float32Array]", Vs = "[object Float64Array]", Rs = "[object Int8Array]", Ds = "[object Int16Array]", Ls = "[object Int32Array]", Fs = "[object Uint8Array]", Ns = "[object Uint8ClampedArray]", Gs = "[object Uint16Array]", Us = "[object Uint32Array]", z = {};
z[Ke] = z[ws] = z[Is] = z[js] = z[ks] = z[zs] = z[Es] = z[Vs] = z[Rs] = z[Ds] = z[Ls] = z[Os] = z[Ts] = z[tt] = z[Ps] = z[Ms] = z[As] = z[Bs] = z[Fs] = z[Ns] = z[Gs] = z[Us] = !0;
z[xs] = z[et] = z[Cs] = !1;
function Z(e, t, n, r, l, o) {
  var _, c = t & vs, f = t & bs, a = t & ms;
  if (n && (_ = l ? n(e, r, l, o) : n(e)), _ !== void 0)
    return _;
  if (!H(e))
    return e;
  var p = Ge(e);
  if (p) {
    if (_ = Rn(e), !c)
      return Kt(e, _);
  } else {
    var y = se(e), m = y == et || y == Ss;
    if (Mt(e))
      return An(e, c);
    if (y == tt || y == Ke || m && !l) {
      if (_ = f || m ? {} : us(e), !c)
        return f ? jn(e, Pn(_, e)) : Bn(e, Tn(_, e));
    } else {
      if (!z[y])
        return l ? e : {};
      _ = cs(e, y, c);
    }
  }
  o || (o = new At());
  var v = o.get(e);
  if (v)
    return v;
  o.set(e, _), $s(e) ? e.forEach(function(b) {
    _.add(Z(b, t, n, b, e, o));
  }) : _s(e) && e.forEach(function(b, w) {
    _.set(w, Z(b, t, n, w, e, o));
  });
  var i = a ? f ? Qe : Bt : f ? _e : de, g = p ? void 0 : i(e);
  return un(g || e, function(b, w) {
    g && (w = b, b = e[w]), We(_, w, Z(b, t, n, w, e, o));
  }), _;
}
function qs(e, t, n, r) {
  for (var l = -1, o = e == null ? 0 : e.length; ++l < o; ) {
    var _ = e[l];
    t(r, _, n(_), e);
  }
  return r;
}
function Hs(e, t, n, r) {
  return Ct(e, function(l, o, _) {
    t(r, l, n(l), _);
  }), r;
}
function Ws(e, t) {
  return function(n, r) {
    var l = Ge(n) ? qs : Hs, o = t ? t() : {};
    return l(n, e, It(r), o);
  };
}
var Zs = "Expected a function";
function Ys(e, t, n) {
  if (typeof e != "function")
    throw new TypeError(Zs);
  return setTimeout(function() {
    e.apply(void 0, n);
  }, t);
}
var Xs = pn(function(e, t, n) {
  return Ys(e, Yt(t) || 0, n);
});
const ye = Xs;
function Js(e, t) {
  return Ue(t, function(n) {
    return [n, e[n]];
  });
}
function Qs(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = [r, r];
  }), n;
}
var Ks = "[object Map]", er = "[object Set]";
function tr(e) {
  return function(t) {
    var n = se(t);
    return n == Ks ? jt(t) : n == er ? Qs(t) : Js(t, e(t));
  };
}
var nr = tr(de);
const N = nr;
var sr = Object.prototype, rr = sr.hasOwnProperty, ar = Ws(function(e, t, n) {
  rr.call(e, n) ? e[n].push(t) : pe(e, n, [t]);
});
const lr = ar;
function or(e, t) {
  return e > t;
}
function ir(e, t) {
  return t.length < 2 ? e : Et(e, On(t, 0, -1));
}
function cr(e, t) {
  return e < t;
}
function nt(e, t, n) {
  for (var r = -1, l = e.length; ++r < l; ) {
    var o = e[r], _ = t(o);
    if (_ != null && (c === void 0 ? _ === _ && !De(_) : n(_, c)))
      var c = _, f = o;
  }
  return f;
}
function ur(e) {
  return e && e.length ? nt(e, ne, or) : void 0;
}
function dr(e) {
  return e && e.length ? nt(e, ne, cr) : void 0;
}
function fr(e, t) {
  return t = qe(t, e), e = ir(e, t), e == null || delete e[Vt(Rt(t))];
}
function pr(e) {
  return Sn(e) ? void 0 : e;
}
var _r = 1, hr = 2, gr = 4, yr = vn(function(e, t) {
  var n = {};
  if (e == null)
    return n;
  var r = !1;
  t = Ue(t, function(o) {
    return o = qe(o, e), r || (r = o.length > 1), o;
  }), W(e, Qe(e), n), r && (n = Z(n, _r | hr | gr, pr));
  for (var l = t.length; l--; )
    fr(n, t[l]);
  return n;
});
const st = yr;
var $r = Object.defineProperty, vr = Object.defineProperties, br = Object.getOwnPropertyDescriptors, Be = Object.getOwnPropertySymbols, mr = Object.prototype.hasOwnProperty, wr = Object.prototype.propertyIsEnumerable, Ce = (e, t, n) => t in e ? $r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, kr = (e, t) => {
  for (var n in t || (t = {}))
    mr.call(t, n) && Ce(e, n, t[n]);
  if (Be)
    for (var n of Be(t))
      wr.call(t, n) && Ce(e, n, t[n]);
  return e;
}, zr = (e, t) => vr(e, br(t));
function T(e, t) {
  var n;
  const r = it();
  return Ee(() => {
    r.value = e();
  }, zr(kr({}, t), {
    flush: (n = t == null ? void 0 : t.flush) != null ? n : "sync"
  })), ct(r);
}
function xr(e) {
  return ut() ? (dt(e), !0) : !1;
}
function Sr(e) {
  return typeof e == "function" ? e() : s(e);
}
const Or = typeof window < "u";
function G(e) {
  var t;
  const n = Sr(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const rt = Or ? window : void 0;
function Tr() {
  const e = V(!1);
  return ft() && ce(() => {
    e.value = !0;
  }), e;
}
function Pr(e) {
  const t = Tr();
  return F(() => (t.value, !!e()));
}
var Ie = Object.getOwnPropertySymbols, Mr = Object.prototype.hasOwnProperty, Ar = Object.prototype.propertyIsEnumerable, Br = (e, t) => {
  var n = {};
  for (var r in e)
    Mr.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Ie)
    for (var r of Ie(e))
      t.indexOf(r) < 0 && Ar.call(e, r) && (n[r] = e[r]);
  return n;
};
function Cr(e, t, n = {}) {
  const r = n, { window: l = rt } = r, o = Br(r, ["window"]);
  let _;
  const c = Pr(() => l && "ResizeObserver" in l), f = () => {
    _ && (_.disconnect(), _ = void 0);
  }, a = F(
    () => Array.isArray(e) ? e.map((m) => G(m)) : [G(e)]
  ), p = Y(
    a,
    (m) => {
      if (f(), c.value && l) {
        _ = new ResizeObserver(t);
        for (const v of m)
          v && _.observe(v, o);
      }
    },
    { immediate: !0, flush: "post", deep: !0 }
  ), y = () => {
    f(), p();
  };
  return xr(y), {
    isSupported: c,
    stop: y
  };
}
function re(e, t = { width: 0, height: 0 }, n = {}) {
  const { window: r = rt, box: l = "content-box" } = n, o = F(() => {
    var f, a;
    return (a = (f = G(e)) == null ? void 0 : f.namespaceURI) == null ? void 0 : a.includes("svg");
  }), _ = V(t.width), c = V(t.height);
  return Cr(
    e,
    ([f]) => {
      const a = l === "border-box" ? f.borderBoxSize : l === "content-box" ? f.contentBoxSize : f.devicePixelContentBoxSize;
      if (r && o.value) {
        const p = G(e);
        if (p) {
          const y = r.getComputedStyle(p);
          _.value = parseFloat(y.width), c.value = parseFloat(y.height);
        }
      } else if (a) {
        const p = Array.isArray(a) ? a : [a];
        _.value = p.reduce((y, { inlineSize: m }) => y + m, 0), c.value = p.reduce((y, { blockSize: m }) => y + m, 0);
      } else
        _.value = f.contentRect.width, c.value = f.contentRect.height;
    },
    n
  ), Y(
    () => G(e),
    (f) => {
      _.value = f ? t.width : 0, c.value = f ? t.height : 0;
    }
  ), {
    width: _,
    height: c
  };
}
const at = /* @__PURE__ */ B({
  __name: "BaseLink",
  props: {
    link: {},
    external: { type: Boolean, default: void 0 }
  },
  setup(e) {
    const t = e, n = T(
      () => t.external ?? /^(https?:\/\/)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&//=]*)$/.test(t.link || "")
    );
    return (r, l) => (h(), E(pt(t.link ? s(n) ? "a" : "RouterLink" : "div"), _t(ht(
      t.link ? {
        [s(n) ? "href" : "to"]: t.link,
        ...s(n) ? {
          target: "_blank",
          rel: "noopener noreferrer"
        } : {}
      } : {}
    )), {
      default: I(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ir = ["width", "height"], jr = /* @__PURE__ */ B({
  __name: "BasePoly",
  props: {
    height: {},
    width: {}
  },
  setup(e) {
    const t = e;
    return (n, r) => (h(), $("svg", {
      class: d(n.$style["poly-wrapper"]),
      width: t.width,
      height: t.height,
      preserveAspectRatio: "xMinYMin",
      "color-profile": "sRGB",
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      u("defs", null, [
        U(n.$slots, "defs", {}, void 0, !0)
      ]),
      U(n.$slots, "path", {}, void 0, !0)
    ], 10, Ir));
  }
}), Er = {
  "poly-wrapper": "_poly-wrapper_14erz_1"
}, j = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, l] of t)
    n[r] = l;
  return n;
}, Vr = {
  $style: Er
}, ae = /* @__PURE__ */ j(jr, [["__cssModules", Vr], ["__scopeId", "data-v-ac9d4bad"]]), Rr = /* @__PURE__ */ B({
  __name: "ButtonBox",
  props: {
    label: {},
    icon: {},
    link: {},
    disabled: { type: Boolean, default: !1 },
    clicked: { type: Boolean },
    variant: { default: "rounded" },
    level: { default: "primary" },
    size: { default: "small" }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e, { triggered: r, onTrigger: l } = fe((o) => {
      n.disabled ? (o.preventDefault(), o.stopPropagation()) : t("click", o);
    });
    return (o, _) => (h(), E(at, Ve({
      ref: "wrapperRef$",
      link: n.link,
      class: [
        o.$style["button-container"],
        o.$style.behavior,
        o.$style[n.variant],
        o.$style[n.level],
        o.$style[n.size],
        n.disabled ? [o.$style.disabled] : [o.$style.clickable],
        {
          [o.$style.clicked]: n.clicked || s(r)()
        }
      ],
      "aria-disabled": n.disabled,
      "aria-label": n.label,
      onClick: s(l)
    }, n.disabled ? { disabled: "" } : {}, {
      role: "button",
      tabindex: "0"
    }), {
      default: I(() => [
        n.label ? (h(), $("span", {
          key: 0,
          class: d([o.$style["button-content"]])
        }, O(n.label), 3)) : S("", !0),
        n.icon ? (h(), $("span", {
          key: 1,
          class: d([o.$style["button-icon"]])
        }, [
          C(s(q), {
            icon: n.icon
          }, null, 8, ["icon"])
        ], 2)) : S("", !0)
      ]),
      _: 1
    }, 16, ["link", "class", "aria-disabled", "aria-label", "onClick"]));
  }
}), Dr = "_behavior_8dwe1_1", Lr = "_clickable_8dwe1_1", Fr = "_disabled_8dwe1_4", Nr = "_draggable_8dwe1_7", Gr = "_loading_8dwe1_10", Ur = "_rounded_8dwe1_14", qr = "_secondary_8dwe1_14", Hr = "_rect_8dwe1_14", Wr = "_square_8dwe1_14", Zr = "_circle_8dwe1_14", Yr = "_clicked_8dwe1_22", Xr = "_small_8dwe1_143", Jr = "_large_8dwe1_147", Qr = "_text_8dwe1_259", Kr = {
  behavior: Dr,
  clickable: Lr,
  disabled: Fr,
  draggable: Nr,
  loading: Gr,
  "button-container": "_button-container_8dwe1_14",
  rounded: Ur,
  secondary: qr,
  rect: Hr,
  square: Wr,
  circle: Zr,
  clicked: Yr,
  "button-icon": "_button-icon_8dwe1_98",
  "button-content": "_button-content_8dwe1_114",
  small: Xr,
  large: Jr,
  text: Qr
}, ea = {
  $style: Kr
}, lt = /* @__PURE__ */ j(Rr, [["__cssModules", ea], ["__scopeId", "data-v-5899d4b1"]]), ta = /* @__PURE__ */ B({
  __name: "CardBox",
  props: {
    link: {},
    variant: { default: "metallic" },
    color: { default: "default" },
    hasStroke: { type: Boolean, default: !0 },
    strokeWeight: { default: "normal" },
    purpose: { default: "box" },
    radius: { default: "var(--agh-ref-border-radius-300)" },
    clickable: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e;
    gt((l) => ({
      "1dbc842c": t.radius
    }));
    const { triggered: n, onTrigger: r } = fe((l) => {
      t.clickable || l.preventDefault();
    });
    return (l, o) => (h(), E(at, {
      ref: "wrapperRef$",
      link: t.link,
      class: d([
        l.$style["card-container"],
        l.$style.behavior,
        l.$style[t.variant],
        l.$style[`color-${t.color}`],
        l.$style[`stroke-${t.strokeWeight}`],
        l.$style[`purpose-${t.purpose}`],
        {
          [l.$style.clickable]: t.link || t.clickable,
          [l.$style["has-stroke"]]: t.hasStroke,
          [l.$style.clicked]: s(n)() && t.clickable
        }
      ]),
      onClick: s(r)
    }, {
      default: I(() => [
        U(l.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["link", "class", "onClick"]));
  }
}), na = "_behavior_ouh7m_1", sa = "_clickable_ouh7m_1", ra = "_disabled_ouh7m_4", aa = "_draggable_ouh7m_7", la = "_loading_ouh7m_10", oa = "_metallic_ouh7m_14", ia = "_flat_ouh7m_14", ca = "_clicked_ouh7m_22", ua = "_dash_ouh7m_92", da = {
  behavior: na,
  clickable: sa,
  disabled: ra,
  draggable: aa,
  loading: la,
  "card-container": "_card-container_ouh7m_14",
  "color-default": "_color-default_ouh7m_14",
  metallic: oa,
  "has-stroke": "_has-stroke_ouh7m_14",
  flat: ia,
  "color-cyan": "_color-cyan_ouh7m_14",
  "color-blue": "_color-blue_ouh7m_14",
  "color-green": "_color-green_ouh7m_14",
  "color-orange": "_color-orange_ouh7m_14",
  "color-red": "_color-red_ouh7m_14",
  clicked: ca,
  dash: ua,
  "stroke-bold": "_stroke-bold_ouh7m_399",
  "stroke-normal": "_stroke-normal_ouh7m_402",
  "stroke-thin": "_stroke-thin_ouh7m_405",
  "purpose-box": "_purpose-box_ouh7m_408",
  "purpose-container": "_purpose-container_ouh7m_412"
}, fa = {
  $style: da
}, le = /* @__PURE__ */ j(ta, [["__cssModules", fa], ["__scopeId", "data-v-d941fd1e"]]), $e = ({
  type: e,
  axises: t,
  data: n
}) => {
  const r = yt({
    datasets: [],
    axises: {}
  }), l = {
    datasets: T(() => r.datasets),
    axises: T(() => r.axises)
  }, o = (f) => {
    var a;
    return !Array.isArray(f) || f.length === 0 ? [] : Array.isArray(f) && ((a = f[0]) != null && a.label) ? f : [
      {
        label: "Data",
        series: f
      }
    ];
  }, _ = (f, a) => a.map((p) => ({
    data: p,
    ...ie(
      N(f).filter(([, y]) => !oe(y)).map(([y, m]) => {
        const v = m.selector ? D(p, m.selector) : null, i = m.accessor ? J(p, m.accessor) : v;
        return [
          y,
          {
            normalized: Number(
              m.type === "number" ? parseFloat(String(v)) : m.type === "date" ? new Date(Number(v)) : v
            ),
            value: i
          }
        ];
      })
    )
  })), c = (f, a, p) => {
    const y = o(p).map((i) => ({
      ...i,
      label: J(i, i.label ?? ""),
      series: _(a, i.series)
    })), m = y.flatMap((i) => i.series), v = ie(
      N(a).filter(([, i]) => !oe(i)).map(([i, g]) => {
        const b = Dt(Q(m, `${i}.${g.type === "string" ? "value" : "normalized"}`)), w = Number(g.min === "auto" ? dr(b) : g.min ?? 0), A = Number(
          g.max === "auto" ? ur(b) : g.max ?? b.length - (/radar|doughnut/.test(f ?? "") ? 0 : 1)
        );
        return [
          i,
          {
            ...g,
            min: w,
            max: A,
            metrics: g.type === "string" ? b.map((M, R) => ({
              normalized: R / (A - w),
              value: M
            })) : Array(k.clamp(k.ceil((A - w) / (g.step ?? 1)) + 1, 0, 1 / 0)).fill(0).map((M, R) => ({
              normalized: R / k.ceil((A - w) / (g.step ?? 1)),
              value: w + (g.step ?? 1) * R
            }))
          }
        ];
      })
    );
    return v && N(v).forEach(([i, g]) => {
      g.type === "string" ? y.forEach((b) => {
        b.series.forEach((w) => {
          w[i].normalized = Q(g.metrics, "value").indexOf(w[i].value) / (g.metrics.length - (/radar|doughnut/.test(f ?? "") ? 0 : 1));
        });
      }) : y.forEach((b) => {
        b.series.forEach((w) => {
          w[i].normalized = (Number(w[i].normalized ?? 0) - Number(g.min)) / (Number(g.max) - Number(g.min));
        });
      });
    }), {
      datasets: y,
      axises: v
    };
  };
  return Ee(() => {
    if (!oe(s(n))) {
      const f = c(s(e), s(t), s(n));
      r.datasets = f.datasets, r.axises = f.axises;
    }
  }), {
    ...l
  };
}, pa = (e) => (ee("data-v-fefd0601"), e = e(), te(), e), _a = ["cx", "cy", "r", "stroke-dashoffset", "stroke-dasharray"], ha = ["x", "y"], ga = /* @__PURE__ */ pa(() => /* @__PURE__ */ u("hr", null, null, -1)), ya = { id: "chart-content-clip" }, $a = ["cx", "cy", "r"], va = { "clip-path": "url(#chart-content-clip)" }, ba = ["height", "width", "x", "y"], ma = /* @__PURE__ */ B({
  __name: "DoughnutChart",
  props: {
    axises: {},
    datasets: {},
    options: { default: () => ({
      offset: {
        x: 0,
        y: 0
      },
      radius: 0
    }) }
  },
  setup(e) {
    const t = e, n = V(), { width: r, height: l } = re(n), { axises: o, datasets: _ } = $e({
      type: "doughnut",
      data: t.datasets,
      axises: t.axises
    }), c = T(
      () => k.clamp(
        k.min(r.value - t.options.offset.x, l.value - t.options.offset.y) / 2,
        0,
        1 / 0
      )
    ), f = T(() => t.options.round ? 30 : 15), a = T(() => c.value * 2 * k.PI), p = T(() => ({
      x: r.value / 2,
      y: l.value / 2
    })), y = T(
      () => _.value.map((v) => v.series.reduce((i, g) => i + g.y.normalized, 0))
    ), m = T(
      () => _.value.map((v, i) => ({
        ...v,
        series: v.series.map((g) => ({
          ...g,
          y: {
            ...g.y,
            normalized: k.clamp(
              g.y.normalized / y.value[i] - f.value / a.value,
              0,
              1
            )
          }
        })).filter((g) => g.y.normalized > f.value / a.value / 2).map((g, b, w) => ({
          ...g,
          y: {
            ...g.y,
            normalized: g.y.normalized / w.reduce((A, M) => A + M.y.normalized, 0)
          }
        })).map((g, b, w) => ({
          ...g,
          y: {
            ...g.y,
            normalized: k.clamp(
              g.y.normalized / w.reduce((A, M) => A + M.y.normalized, 0) - f.value / a.value,
              0,
              1
            )
          }
        })).map((g, b, w) => ({
          ...g,
          y: {
            ...g.y,
            offset: w.slice(0, b).reduce((A, M) => A + M.y.normalized, 0)
          }
        })).map((g, b) => ({
          ...g,
          x: {
            ...g.x,
            label: k.cos(
              k.rad(
                (g.y.offset + g.y.normalized / 2 + f.value / a.value * b) * 360 - 90
              )
            )
          },
          y: {
            ...g.y,
            label: k.sin(
              k.rad(
                (g.y.offset + g.y.normalized / 2 + f.value / a.value * b) * 360 - 90
              )
            )
          }
        }))
      }))
    );
    return (v, i) => (h(), $("div", {
      ref_key: "wrapperRef$",
      ref: n,
      class: d(v.$style["chart-container"])
    }, [
      C(ae, {
        height: s(l),
        width: s(r)
      }, {
        path: I(() => [
          u("g", {
            class: d([v.$style["chart-group-plots"]])
          }, [
            (h(!0), $(x, null, P(s(m), (g) => (h(), $(x, {
              key: g.label
            }, [
              (h(!0), $(x, null, P(g.series, (b, w) => (h(), $("g", {
                key: `plot-${w}`,
                class: d(v.$style["chart-area"])
              }, [
                u("circle", {
                  cx: s(p).x,
                  cy: s(p).y,
                  r: s(c),
                  "stroke-dashoffset": b.y.offset * s(a) * -1 - s(f) * w + 0.25 * s(a),
                  "stroke-dasharray": `${b.y.normalized * s(a)} ${(1 - b.y.normalized) * s(a)}`,
                  class: d([
                    v.$style.behavior,
                    v.$style["chart-area"],
                    v.$style.doughnut,
                    v.$style.plot,
                    v.$style.clickable,
                    {
                      [v.$style.round]: t.options.round
                    }
                  ]),
                  "pointer-events": "visibleStroke"
                }, null, 10, _a),
                (h(), $("foreignObject", {
                  x: s(p).x + s(c) * b.x.label - 260 * +(b.x.label < 0),
                  y: s(p).y + s(c) * b.y.label - 240 * +(b.y.label < 0),
                  height: "240",
                  width: "260",
                  class: d([v.$style["chart-area"], v.$style["legend-container"]])
                }, [
                  C(le, {
                    class: d([v.$style["chart-area"], v.$style["legend-wrapper"]]),
                    radius: "var(--agh-ref-border-radius-500)"
                  }, {
                    default: I(() => [
                      t.options.title ? (h(), $(x, { key: 0 }, [
                        u("h1", {
                          class: d([v.$style["chart-area"], v.$style["legend-title"], v.$style.doughnut])
                        }, [
                          u("span", null, O(b.x.value), 1)
                        ], 2),
                        ga
                      ], 64)) : S("", !0),
                      (h(!0), $(x, null, P(s(o), (A, M) => (h(), $(x, { key: M }, [
                        !/(x)/.test(M) && A && b[M] ? (h(), $("div", {
                          key: 0,
                          class: d([
                            v.$style["chart-area"],
                            v.$style["legend-group"],
                            v.$style.doughnut
                          ])
                        }, [
                          u("label", {
                            class: d([v.$style["chart-area"], v.$style["legend-label"]])
                          }, O(A.label), 3),
                          u("p", {
                            class: d([v.$style["chart-area"], v.$style["legend-value"]])
                          }, O(b[M].value), 3)
                        ], 2)) : S("", !0)
                      ], 64))), 128))
                    ]),
                    _: 2
                  }, 1032, ["class", "radius"])
                ], 10, ha))
              ], 2))), 128))
            ], 64))), 128))
          ], 2),
          u("clipPath", ya, [
            u("circle", {
              cx: s(p).x,
              cy: s(p).y,
              r: s(c) - 10
            }, null, 8, $a)
          ]),
          u("g", va, [
            (h(), $("foreignObject", {
              class: d(v.$style["chart-content-wrapper"]),
              height: s(c) * 2,
              width: s(c) * 2,
              x: s(p).x - s(c),
              y: s(p).y - s(c)
            }, [
              U(v.$slots, "default", {}, void 0, !0)
            ], 10, ba))
          ])
        ]),
        _: 3
      }, 8, ["height", "width"])
    ], 2));
  }
}), wa = "_behavior_pzvhi_1", ka = "_clickable_pzvhi_1", za = "_disabled_pzvhi_4", xa = "_draggable_pzvhi_7", Sa = "_loading_pzvhi_10", Oa = "_path_pzvhi_24", Ta = "_radar_pzvhi_29", Pa = "_label_pzvhi_32", Ma = "_plot_pzvhi_85", Aa = "_point_pzvhi_85", Ba = "_doughnut_pzvhi_96", Ca = "_bg_pzvhi_102", Ia = "_round_pzvhi_106", ja = "_line_pzvhi_119", Ea = {
  behavior: wa,
  clickable: ka,
  disabled: za,
  draggable: xa,
  loading: Sa,
  "chart-container": "_chart-container_pzvhi_14",
  "chart-axis": "_chart-axis_pzvhi_24",
  path: Oa,
  radar: Ta,
  label: Pa,
  "font-align--center": "_font-align--center_pzvhi_45",
  "font-align--right": "_font-align--right_pzvhi_48",
  "font-align--left": "_font-align--left_pzvhi_51",
  "box-align--center": "_box-align--center_pzvhi_54",
  "box-align--left": "_box-align--left_pzvhi_57",
  "box-align--right": "_box-align--right_pzvhi_60",
  "chart-group-plots": "_chart-group-plots_pzvhi_67",
  "chart-area": "_chart-area_pzvhi_67",
  plot: Ma,
  point: Aa,
  doughnut: Ba,
  "legend-container": "_legend-container_pzvhi_96",
  bg: Ca,
  round: Ia,
  line: ja,
  "legend-wrapper": "_legend-wrapper_pzvhi_147",
  "legend-group": "_legend-group_pzvhi_158",
  "legend-value": "_legend-value_pzvhi_166",
  "legend-label": "_legend-label_pzvhi_169",
  "legend-title": "_legend-title_pzvhi_173"
}, Va = {
  $style: Ea
}, yi = /* @__PURE__ */ j(ma, [["__cssModules", Va], ["__scopeId", "data-v-fefd0601"]]), Ra = (e) => (ee("data-v-9f80c889"), e = e(), te(), e), Da = ["d"], La = ["x", "y", "text-anchor"], Fa = ["x", "y"], Na = ["d"], Ga = ["cx", "cy"], Ua = ["cx", "cy"], qa = ["x", "y"], Ha = /* @__PURE__ */ Ra(() => /* @__PURE__ */ u("hr", null, null, -1)), Wa = /* @__PURE__ */ B({
  __name: "LineChart",
  props: {
    axises: {},
    datasets: {},
    options: { default: () => ({
      offset: {
        x: 0,
        y: 0
      },
      curve: "straight",
      radius: 0
    }) }
  },
  setup(e) {
    const t = e, n = V(), { width: r, height: l } = re(n), { axises: o, datasets: _ } = $e({
      type: "line",
      data: t.datasets,
      axises: t.axises
    }), c = T(
      () => {
        var a, p, y, m, v, i;
        return (p = (a = o.value) == null ? void 0 : a.x) != null && p.metrics && ((m = (y = o.value) == null ? void 0 : y.y) != null && m.metrics) && l.value && l.value - t.options.offset.y > 0 && r.value && r.value - t.options.offset.x > 0 ? `
  M ${t.options.offset.x} 0
  L ${t.options.offset.x} ${l.value - t.options.offset.y}
  L ${r.value} ${l.value - t.options.offset.y}
  ${(v = t.options.grid) != null && v.includes("x") ? `${o.value.x.metrics.map(
          (g) => `
              M ${g.normalized * (r.value - t.options.offset.x) + t.options.offset.x} 0
              V ${l.value - t.options.offset.y}
            `
        ).join("")}` : ""}
  ${(i = t.options.grid) != null && i.includes("y") ? `${o.value.y.metrics.map(
          (g) => `
              M ${t.options.offset.x} ${(1 - g.normalized) * (l.value - t.options.offset.y)}
              H ${r.value}
            `
        ).join(`
`)}` : ""}
` : "";
      }
    ), f = T(
      () => c.value && _ ? _.value.map((a) => ({
        ...a,
        path: `
            ${a.series.map(
          (p, y) => y === 0 ? `M ${p.x.normalized * (r.value - t.options.offset.x) + t.options.offset.x} ${(1 - p.y.normalized) * (l.value - t.options.offset.y)}` : t.options.curve === "smooth" ? y === 1 ? `C ${a.series[y - 1].x.normalized * (r.value - t.options.offset.x) + t.options.offset.x + r.value / a.series.length * t.options.radius} ${(1 - a.series[y - 1].y.normalized) * (l.value - t.options.offset.y)} ${p.x.normalized * (r.value - t.options.offset.x) + t.options.offset.x - r.value / a.series.length * t.options.radius} ${(1 - p.y.normalized) * (l.value - t.options.offset.y)} ${p.x.normalized * (r.value - t.options.offset.x) + t.options.offset.x} ${(1 - p.y.normalized) * (l.value - t.options.offset.y)}` : `S ${p.x.normalized * (r.value - t.options.offset.x) + t.options.offset.x - r.value / a.series.length * t.options.radius} ${(1 - p.y.normalized) * (l.value - t.options.offset.y)} ${p.x.normalized * (r.value - t.options.offset.x) + t.options.offset.x} ${(1 - p.y.normalized) * (l.value - t.options.offset.y)}` : `L ${p.x.normalized * (r.value - t.options.offset.x) + t.options.offset.x} ${(1 - p.y.normalized) * (l.value - t.options.offset.y)}`
        ).join(`
`)}`
      })) : []
    );
    return (a, p) => (h(), $("div", {
      ref_key: "wrapperRef$",
      ref: n,
      class: d(a.$style["chart-container"])
    }, [
      C(ae, {
        height: s(l),
        width: s(r)
      }, {
        defs: I(() => []),
        path: I(() => [
          u("g", {
            id: "chart-group-axises",
            class: d([a.$style["chart-group-axises"]])
          }, [
            u("path", {
              d: s(c),
              class: d([a.$style["chart-axis"], a.$style.line, a.$style.path])
            }, null, 10, Da)
          ], 2),
          s(o) && s(r) && s(l) ? (h(), $("g", {
            key: 0,
            class: d([a.$style["chart-group-axises-label"]])
          }, [
            s(o).x && s(o).x.metrics ? (h(!0), $(x, { key: 0 }, P(s(o).x.metrics, (y, m) => (h(), $("text", {
              key: `axis-x--${m}`,
              x: y.normalized * (s(r) - t.options.offset.x) + t.options.offset.x,
              y: s(l) - t.options.offset.y + 20,
              class: d([a.$style["chart-axis"], a.$style.label]),
              "text-anchor": m === 0 ? "start" : m === s(o).x.metrics.length - 1 ? "end" : "middle"
            }, O(y.value), 11, La))), 128)) : S("", !0),
            s(o).y && s(o).y.metrics ? (h(!0), $(x, { key: 1 }, P(s(o).y.metrics, (y, m) => (h(), $("text", {
              key: `axis-y--${m}`,
              x: t.options.offset.x - 10,
              y: (1 - y.normalized) * (s(l) - t.options.offset.y) + 5,
              class: d([a.$style["chart-axis"], a.$style.label]),
              "text-anchor": "end"
            }, O(y.value), 11, Fa))), 128)) : S("", !0)
          ], 2)) : S("", !0),
          u("g", {
            class: d([a.$style["chart-group-plots"]])
          }, [
            (h(!0), $(x, null, P(s(f), (y) => (h(), $("g", {
              key: y.label,
              class: d([a.$style["chart-area"], a.$style.line, a.$style.plot])
            }, [
              u("path", {
                d: y.path
              }, null, 8, Na)
            ], 2))), 128)),
            (h(!0), $(x, null, P(s(_), (y) => (h(), $(x, null, [
              (h(!0), $(x, null, P(y.series, (m, v) => (h(), $("g", {
                key: `chart-plot-${y.label}-plot-${v}`,
                class: d(a.$style["chart-area"])
              }, [
                u("circle", {
                  class: d([
                    a.$style.behavior,
                    a.$style["chart-area"],
                    a.$style.point,
                    a.$style.plot,
                    a.$style.clickable
                  ]),
                  cx: m.x.normalized * (s(r) - t.options.offset.x) + t.options.offset.x,
                  cy: (1 - m.y.normalized) * (s(l) - t.options.offset.y),
                  r: "50"
                }, null, 10, Ga),
                u("circle", {
                  class: d([a.$style["chart-area"], a.$style.point, a.$style.plot]),
                  cx: m.x.normalized * (s(r) - t.options.offset.x) + t.options.offset.x,
                  cy: (1 - m.y.normalized) * (s(l) - t.options.offset.y),
                  r: "5"
                }, null, 10, Ua),
                (h(), $("foreignObject", {
                  x: m.x.normalized * (s(r) - t.options.offset.x) + t.options.offset.x - 140,
                  y: (1 - m.y.normalized) * (s(l) - t.options.offset.y) - (m.y.normalized >= 0.5 ? 0 : 220),
                  height: "220",
                  width: "280",
                  class: d([a.$style["chart-area"], a.$style["legend-container"]])
                }, [
                  C(le, {
                    class: d([a.$style["chart-area"], a.$style["legend-wrapper"]]),
                    radius: "var(--agh-ref-border-radius-500)"
                  }, {
                    default: I(() => [
                      t.options.title ? (h(), $(x, { key: 0 }, [
                        u("h1", {
                          class: d([a.$style["chart-area"], a.$style["legend-title"]])
                        }, O(s(J)(m.data, t.options.title)), 3),
                        Ha
                      ], 64)) : S("", !0),
                      (h(!0), $(x, null, P(s(o), (i, g) => (h(), $(x, { key: g }, [
                        i && m[g] ? (h(), $("div", {
                          key: 0,
                          class: d([a.$style["chart-area"], a.$style["legend-group"]])
                        }, [
                          u("label", {
                            class: d([a.$style["chart-area"], a.$style["legend-label"]])
                          }, O(i.label), 3),
                          u("p", {
                            class: d([a.$style["chart-area"], a.$style["legend-value"]])
                          }, O(m[g].value), 3)
                        ], 2)) : S("", !0)
                      ], 64))), 128))
                    ]),
                    _: 2
                  }, 1032, ["class", "radius"])
                ], 10, qa))
              ], 2))), 128))
            ], 64))), 256))
          ], 2)
        ]),
        _: 1
      }, 8, ["height", "width"])
    ], 2));
  }
}), Za = "_behavior_1sfnc_1", Ya = "_clickable_1sfnc_1", Xa = "_disabled_1sfnc_4", Ja = "_draggable_1sfnc_7", Qa = "_loading_1sfnc_10", Ka = "_path_1sfnc_24", el = "_radar_1sfnc_29", tl = "_label_1sfnc_32", nl = "_plot_1sfnc_85", sl = "_point_1sfnc_85", rl = "_doughnut_1sfnc_96", al = "_bg_1sfnc_102", ll = "_round_1sfnc_106", ol = "_line_1sfnc_119", il = {
  behavior: Za,
  clickable: Ya,
  disabled: Xa,
  draggable: Ja,
  loading: Qa,
  "chart-container": "_chart-container_1sfnc_14",
  "chart-axis": "_chart-axis_1sfnc_24",
  path: Ka,
  radar: el,
  label: tl,
  "font-align--center": "_font-align--center_1sfnc_45",
  "font-align--right": "_font-align--right_1sfnc_48",
  "font-align--left": "_font-align--left_1sfnc_51",
  "box-align--center": "_box-align--center_1sfnc_54",
  "box-align--left": "_box-align--left_1sfnc_57",
  "box-align--right": "_box-align--right_1sfnc_60",
  "chart-group-plots": "_chart-group-plots_1sfnc_67",
  "chart-area": "_chart-area_1sfnc_67",
  plot: nl,
  point: sl,
  doughnut: rl,
  "legend-container": "_legend-container_1sfnc_96",
  bg: al,
  round: ll,
  line: ol,
  "legend-wrapper": "_legend-wrapper_1sfnc_147",
  "legend-group": "_legend-group_1sfnc_158",
  "legend-value": "_legend-value_1sfnc_166",
  "legend-label": "_legend-label_1sfnc_169",
  "legend-title": "_legend-title_1sfnc_173"
}, cl = {
  $style: il
}, $i = /* @__PURE__ */ j(Wa, [["__cssModules", cl], ["__scopeId", "data-v-9f80c889"]]), ul = ["id"], dl = ["stdDeviation"], fl = /* @__PURE__ */ u("feColorMatrix", {
  in: "blur",
  mode: "matrix",
  values: "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10",
  result: "mask"
}, null, -1), pl = /* @__PURE__ */ u("feComposite", {
  in: "SourceGraphic",
  in2: "mask",
  operator: "in"
}, null, -1), je = /* @__PURE__ */ B({
  __name: "RoundEffect",
  props: {
    id: {},
    radius: {}
  },
  setup(e) {
    const t = e;
    return (n, r) => (h(), $("filter", {
      id: t.id
    }, [
      u("feGaussianBlur", {
        stdDeviation: t.radius,
        in: "SourceGraphic",
        result: "blur"
      }, null, 8, dl),
      fl,
      pl
    ], 8, ul));
  }
}), _l = (e) => (ee("data-v-50dd5e3e"), e = e(), te(), e), hl = ["innerHTML"], gl = { id: "chart-area-bg-mask" }, yl = ["d"], $l = ["d"], vl = ["d"], bl = ["x", "y", "height", "width"], ml = ["d"], wl = ["cx", "cy"], kl = ["cx", "cy"], zl = ["x", "y"], xl = /* @__PURE__ */ _l(() => /* @__PURE__ */ u("hr", null, null, -1)), Sl = /* @__PURE__ */ B({
  __name: "RadarChart",
  props: {
    axises: {},
    datasets: {},
    options: { default: () => ({
      offset: {
        x: 0,
        y: 0
      },
      radius: 0
    }) }
  },
  setup(e) {
    const t = e, n = V(), { width: r, height: l } = re(n), { axises: o, datasets: _ } = $e({
      type: "radar",
      data: t.datasets,
      axises: t.axises
    }), c = T(
      () => k.clamp(
        k.min(r.value - t.options.offset.x, l.value - t.options.offset.y) / 2,
        0,
        1 / 0
      )
    ), f = T(() => ({
      x: r.value / 2,
      y: l.value / 2
    })), a = F(
      () => {
        var i, g;
        return c.value > 0 && ((g = (i = o.value) == null ? void 0 : i.x) != null && g.metrics) ? `
      ${o.value.x.metrics.map(
          (b, w) => `${w === 0 ? "M" : "L"} ${f.value.x + c.value * k.cos(k.rad(b.normalized * 360 - 90))} ${f.value.y + c.value * k.sin(k.rad(b.normalized * 360 - 90))}`
        ).join(" ")} Z
      ` : "";
      }
    ), p = F(
      () => a.value && _.value ? _.value.map((i) => ({
        ...i,
        path: `${i.series.map(
          (g, b) => `${b === 0 ? "M" : "L"} ${f.value.x + c.value * g.y.normalized * k.cos(k.rad(g.x.normalized * 360 - 90))} ${f.value.y + c.value * g.y.normalized * k.sin(k.rad(g.x.normalized * 360 - 90))}`
        ).join(" ")} Z`
      })) : []
    ), y = T(
      () => c.value > 0 && o.value.x.metrics ? `M ${f.value.x} ${f.value.y}
      ${o.value.x.metrics.map(
        (i) => `L ${f.value.x + c.value * k.cos(k.rad(i.normalized * 360 - 90))} ${f.value.y + c.value * k.sin(k.rad(i.normalized * 360 - 90))}
            M ${f.value.x} ${f.value.y}`
      ).join(`
`)}
      Z` : ""
    ), m = L(""), v = () => {
      n.value && ye(
        () => m.set(
          globalThis.getComputedStyle(n.value).getPropertyValue("--chart-bg-fill-svg")
        ),
        30
      );
    };
    return Re(() => {
      v();
    }), (i, g) => (h(), $("div", {
      ref_key: "wrapperRef$",
      ref: n,
      class: d(i.$style["chart-container"])
    }, [
      C(ae, {
        height: s(l),
        width: s(r)
      }, {
        defs: I(() => [
          C(je, {
            id: "chart-area-bg-round",
            radius: 6
          }),
          C(je, {
            id: "chart-area-plot-round",
            radius: 3
          }),
          u("g", {
            innerHTML: s(m)()
          }, null, 8, hl),
          u("mask", gl, [
            u("path", {
              d: a.value,
              class: d([
                i.$style["chart-area"],
                i.$style.radar,
                i.$style.bg,
                {
                  [i.$style.round]: t.options.round
                }
              ]),
              fill: "#fff"
            }, null, 10, yl)
          ])
        ]),
        path: I(() => [
          u("path", {
            d: a.value,
            class: d([
              i.$style["chart-area"],
              i.$style.radar,
              i.$style.bg,
              {
                [i.$style.round]: t.options.round
              }
            ])
          }, null, 10, $l),
          u("g", {
            id: "chart-group-axises",
            class: d([i.$style["chart-group-axises"]]),
            mask: "url(#chart-area-bg-mask)"
          }, [
            u("path", {
              d: s(y),
              class: d([i.$style["chart-axis"], i.$style.radar, i.$style.path])
            }, null, 10, vl)
          ], 2),
          s(o) ? (h(), $("g", {
            key: 0,
            class: d([i.$style["chart-group-axises-label"]])
          }, [
            (h(!0), $(x, null, P(s(o).x.metrics, (b) => (h(), $("foreignObject", {
              key: b.value,
              x: s(f).x + s(c) * s(k).cos(s(k).rad(b.normalized * 360 - 90)) - (b.normalized % 0.5 === 0 ? s(c) / 2 : b.normalized > 0.5 ? s(c) : 0),
              y: s(f).y + s(c) * 1.1 * s(k).sin(s(k).rad(b.normalized * 360 - 90)) - s(c) / 6,
              height: s(c) / 3,
              width: s(c),
              class: d([i.$style["chart-axis"], i.$style.radar, i.$style["label-wrapper"]])
            }, [
              u("p", {
                class: d(["font-bold", [
                  i.$style["chart-axis"],
                  i.$style.radar,
                  i.$style.label,
                  b.normalized % 0.5 === 0 ? i.$style["font-align--center"] : b.normalized < 0.5 ? i.$style["font-align--left"] : i.$style["font-align--right"],
                  b.normalized % 0.5 === 0 ? i.$style["box-align--center"] : b.normalized < 0.5 ? i.$style["box-align--left"] : i.$style["box-align--right"]
                ]])
              }, O(b.value), 3)
            ], 10, bl))), 128))
          ], 2)) : S("", !0),
          u("g", {
            class: d([i.$style["chart-group-plots"]])
          }, [
            (h(!0), $(x, null, P(p.value, (b) => (h(), $("g", {
              key: b.label,
              class: d([i.$style["chart-area"], i.$style.radar, i.$style.plot])
            }, [
              u("path", {
                d: b.path,
                class: d([
                  {
                    [i.$style.round]: t.options.round
                  }
                ])
              }, null, 10, ml)
            ], 2))), 128))
          ], 2),
          (h(!0), $(x, null, P(s(_), (b) => (h(), $("g", {
            key: b.label,
            class: d([i.$style["chart-area-label"]])
          }, [
            (h(!0), $(x, null, P(b.series, (w, A) => (h(), $("g", {
              key: `plot-${A}`,
              class: d(i.$style["chart-area"])
            }, [
              u("circle", {
                class: d([
                  i.$style.behavior,
                  i.$style["chart-area"],
                  i.$style.point,
                  i.$style.plot,
                  i.$style.clickable
                ]),
                cx: s(f).x + s(c) * w.y.normalized * s(k).cos(s(k).rad(w.x.normalized * 360 - 90)),
                cy: s(f).y + s(c) * w.y.normalized * s(k).sin(s(k).rad(w.x.normalized * 360 - 90)),
                r: "10"
              }, null, 10, wl),
              u("circle", {
                class: d([i.$style["chart-area"], i.$style.radar, i.$style.point, i.$style.plot]),
                cx: s(f).x + s(c) * w.y.normalized * s(k).cos(s(k).rad(w.x.normalized * 360 - 90)),
                cy: s(f).y + s(c) * w.y.normalized * s(k).sin(s(k).rad(w.x.normalized * 360 - 90)),
                r: "5"
              }, null, 10, kl),
              (h(), $("foreignObject", {
                x: s(f).x + s(c) * w.y.normalized * s(k).cos(s(k).rad(w.x.normalized * 360 - 90)) - 130,
                y: s(f).y + s(c) * w.y.normalized * s(k).sin(s(k).rad(w.x.normalized * 360 - 90)),
                height: "200",
                width: "260",
                class: d([i.$style["chart-area"], i.$style["legend-container"]])
              }, [
                C(le, {
                  class: d([i.$style["chart-area"], i.$style["legend-wrapper"]]),
                  radius: "var(--agh-ref-border-radius-500)"
                }, {
                  default: I(() => [
                    t.options.title ? (h(), $(x, { key: 0 }, [
                      u("h1", {
                        class: d([i.$style["chart-area"], i.$style["legend-title"], i.$style.radar])
                      }, [
                        u("span", null, O(w.x.value), 1),
                        u("span", {
                          class: d(i.$style["legend-value"])
                        }, O(w.y.value), 3)
                      ], 2),
                      xl
                    ], 64)) : S("", !0),
                    (h(!0), $(x, null, P(s(o), (M, R) => (h(), $(x, { key: R }, [
                      !/(x|y)/.test(R) && M && w[R] ? (h(), $("div", {
                        key: 0,
                        class: d([i.$style["chart-area"], i.$style["legend-group"], i.$style.radar])
                      }, [
                        u("p", {
                          class: d([i.$style["chart-area"], i.$style["legend-value"]])
                        }, O(w[R].value), 3),
                        u("label", {
                          class: d([i.$style["chart-area"], i.$style["legend-label"]])
                        }, O(M.label), 3)
                      ], 2)) : S("", !0)
                    ], 64))), 128))
                  ]),
                  _: 2
                }, 1032, ["class", "radius"])
              ], 10, zl))
            ], 2))), 128))
          ], 2))), 128))
        ]),
        _: 1
      }, 8, ["height", "width"])
    ], 2));
  }
}), Ol = "_behavior_1bxlz_1", Tl = "_clickable_1bxlz_1", Pl = "_disabled_1bxlz_4", Ml = "_draggable_1bxlz_7", Al = "_loading_1bxlz_10", Bl = "_path_1bxlz_24", Cl = "_radar_1bxlz_29", Il = "_label_1bxlz_32", jl = "_plot_1bxlz_85", El = "_point_1bxlz_85", Vl = "_doughnut_1bxlz_96", Rl = "_bg_1bxlz_102", Dl = "_round_1bxlz_106", Ll = "_line_1bxlz_119", Fl = {
  behavior: Ol,
  clickable: Tl,
  disabled: Pl,
  draggable: Ml,
  loading: Al,
  "chart-container": "_chart-container_1bxlz_14",
  "chart-axis": "_chart-axis_1bxlz_24",
  path: Bl,
  radar: Cl,
  label: Il,
  "font-align--center": "_font-align--center_1bxlz_45",
  "font-align--right": "_font-align--right_1bxlz_48",
  "font-align--left": "_font-align--left_1bxlz_51",
  "box-align--center": "_box-align--center_1bxlz_54",
  "box-align--left": "_box-align--left_1bxlz_57",
  "box-align--right": "_box-align--right_1bxlz_60",
  "chart-group-plots": "_chart-group-plots_1bxlz_67",
  "chart-area": "_chart-area_1bxlz_67",
  plot: jl,
  point: El,
  doughnut: Vl,
  "legend-container": "_legend-container_1bxlz_96",
  bg: Rl,
  round: Dl,
  line: Ll,
  "legend-wrapper": "_legend-wrapper_1bxlz_147",
  "legend-group": "_legend-group_1bxlz_158",
  "legend-value": "_legend-value_1bxlz_166",
  "legend-label": "_legend-label_1bxlz_169",
  "legend-title": "_legend-title_1bxlz_173"
}, Nl = {
  $style: Fl
}, vi = /* @__PURE__ */ j(Sl, [["__cssModules", Nl], ["__scopeId", "data-v-50dd5e3e"]]), Gl = ["onClick"], Ul = /* @__PURE__ */ B({
  __name: "SelectMenu",
  props: {
    options: {},
    fields: {},
    modelValue: {},
    groupBy: {},
    label: {},
    multiple: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, r = V(), l = T(
      () => ie(
        N(lr(n.options, n.groupBy ?? "")).map(([a, p]) => [
          a === "undefined" ? "" : a,
          p.map(
            (y) => L({
              ...y,
              selected: !!(n.multiple ? Q(n.modelValue, n.fields.key).includes(D(y, n.fields.key)) : D(y, n.fields.key) === D(n.modelValue, n.fields.key))
            })
          )
        ])
      )
    ), o = L(!1), _ = () => {
      r.value && ye(() => {
        const { scrollHeight: a, clientHeight: p } = r.value;
        o.set(a > p + 1);
      }, 30);
    }, c = (a) => {
      a.update((p) => ({
        ...p,
        selected: !p.selected
      })), n.multiple ? t(
        "update:modelValue",
        Lt(
          Q(
            l.value,
            (p) => p.map((y) => y()).filter((y) => y.selected)
          )
        )
      ) : t("update:modelValue", a());
    }, f = () => {
      n.multiple ? t("update:modelValue", []) : t("update:modelValue", {});
    };
    return ce(() => {
      _();
    }), (a, p) => (h(), E(le, {
      class: d([
        a.$style["menu-container"],
        {
          [a.$style.classify]: n.groupBy
        }
      ]),
      radius: "var(--agh-ref-border-radius-500)"
    }, {
      default: I(() => [
        n.label || n.multiple ? (h(), $("header", {
          key: 0,
          class: d(a.$style["menu-header"])
        }, [
          u("h1", {
            class: d(a.$style.title)
          }, O(n.label), 3),
          n.multiple ? (h(), E(lt, {
            key: 0,
            class: d(a.$style.button),
            label: "Clear Selection",
            icon: "fa6-solid:eraser",
            variant: "text",
            onClick: p[0] || (p[0] = (y) => f())
          }, null, 8, ["class"])) : S("", !0)
        ], 2)) : S("", !0),
        u("div", {
          ref_key: "wrapperRef$",
          ref: r,
          class: d([
            a.$style["menu-wrapper"],
            {
              [a.$style.overflowed]: s(o)()
            }
          ])
        }, [
          (h(!0), $(x, null, P(s(l), (y, m) => (h(), $("div", {
            key: m,
            class: d([
              a.$style["menu-group"],
              {
                [a.$style.classify]: n.groupBy
              }
            ])
          }, [
            m ? (h(), $("label", {
              key: 0,
              class: d(a.$style["menu-group-label"]),
              name: ""
            }, O(m), 3)) : S("", !0),
            (h(!0), $(x, null, P(y, (v, i) => (h(), $("div", {
              key: `option-${i}`,
              class: d([
                a.$style["menu-option"],
                a.$style.behavior,
                a.$style.clickable,
                {
                  [a.$style.selected]: v().selected,
                  [a.$style.multiple]: n.multiple
                }
              ]),
              onClick: (g) => c(v)
            }, [
              n.multiple ? (h(), E(s(q), {
                key: 0,
                class: d(a.$style["menu-option-icon"]),
                icon: v().selected ? "fa6-solid:square-check" : "fa6-regular:square"
              }, null, 8, ["class", "icon"])) : S("", !0),
              n.fields.icon ? (h(), E(s(q), {
                key: 1,
                class: d(a.$style["menu-option-icon"]),
                icon: s(D)(v(), n.fields.icon)
              }, null, 8, ["class", "icon"])) : S("", !0),
              u("div", {
                class: d(a.$style["menu-option-group"])
              }, [
                n.fields.title ? S("", !0) : (h(), $("p", {
                  key: 0,
                  class: d(a.$style["menu-field"])
                }, O(s(D)(v(), n.fields.key)), 3)),
                (h(!0), $(x, null, P(s(st)(n.fields, ["key", "icon"]), (g) => (h(), $(x, {
                  key: `option-field-${g}`
                }, [
                  g ? (h(), $("p", {
                    key: 0,
                    class: d(a.$style["menu-field"])
                  }, O(s(J)(v(), g)), 3)) : S("", !0)
                ], 64))), 128))
              ], 2)
            ], 10, Gl))), 128))
          ], 2))), 128))
        ], 2)
      ]),
      _: 1
    }, 8, ["class", "radius"]));
  }
}), ql = "_behavior_1k2c6_1", Hl = "_clickable_1k2c6_1", Wl = "_disabled_1k2c6_4", Zl = "_draggable_1k2c6_7", Yl = "_loading_1k2c6_10", Xl = "_classify_1k2c6_29", Jl = "_title_1k2c6_47", Ql = "_button_1k2c6_50", Kl = "_overflowed_1k2c6_77", eo = "_hover_1k2c6_91", to = "_selected_1k2c6_95", no = "_multiple_1k2c6_99", so = {
  behavior: ql,
  clickable: Hl,
  disabled: Wl,
  draggable: Zl,
  loading: Yl,
  "menu-container": "_menu-container_1k2c6_14",
  classify: Xl,
  "menu-header": "_menu-header_1k2c6_32",
  title: Jl,
  button: Ql,
  "menu-wrapper": "_menu-wrapper_1k2c6_53",
  overflowed: Kl,
  "menu-option": "_menu-option_1k2c6_81",
  hover: eo,
  selected: to,
  multiple: no,
  "menu-field": "_menu-field_1k2c6_102",
  "menu-option-group": "_menu-option-group_1k2c6_108",
  "menu-group": "_menu-group_1k2c6_122",
  "menu-group-label": "_menu-group-label_1k2c6_144"
}, ro = {
  $style: so
}, ot = /* @__PURE__ */ j(Ul, [["__cssModules", ro], ["__scopeId", "data-v-c965c008"]]), ao = /* @__PURE__ */ B({
  __name: "DropDown",
  props: {
    fields: {},
    modelValue: {},
    items: { default: () => [] },
    disabled: { type: Boolean },
    level: { default: "primary" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, r = F({
      get: () => n.modelValue,
      set: (o) => (l.set(!0), t("update:modelValue", o))
    }), l = L(!0);
    return (o, _) => (h(), $("div", {
      class: d(o.$style["dropdown--container"])
    }, [
      C(lt, {
        disabled: n.disabled,
        label: s(D)(n.modelValue, n.fields.key),
        icon: s(l)() ? "fa6-solid:chevron-up" : "fa6-solid:chevron-down",
        clicked: !s(l)(),
        level: n.level,
        class: d(o.$style["dropdown--input"]),
        onClick: _[0] || (_[0] = (c) => s(l).update((f) => !f)),
        type: "search"
      }, null, 8, ["disabled", "label", "icon", "clicked", "level", "class"]),
      o.items.length > 0 && !s(l)() ? (h(), E(ot, {
        key: 0,
        class: d(o.$style["dropdown--menu"]),
        options: o.items,
        fields: n.fields,
        modelValue: r.value,
        "onUpdate:modelValue": _[1] || (_[1] = (c) => r.value = c)
      }, null, 8, ["class", "options", "fields", "modelValue"])) : S("", !0)
    ], 2));
  }
}), lo = {
  "dropdown--container": "_dropdown--container_kizkx_1",
  "dropdown--input": "_dropdown--input_kizkx_7",
  "dropdown--menu": "_dropdown--menu_kizkx_12"
}, oo = {
  $style: lo
}, bi = /* @__PURE__ */ j(ao, [["__cssModules", oo], ["__scopeId", "data-v-8aec7555"]]), io = ["height", "width"], co = /* @__PURE__ */ u("feFlood", {
  "flood-opacity": "0",
  result: "BackgroundImageFix"
}, null, -1), uo = /* @__PURE__ */ u("feBlend", {
  in: "SourceGraphic",
  in2: "BackgroundImageFix",
  result: "shape"
}, null, -1), fo = /* @__PURE__ */ u("feColorMatrix", {
  in: "SourceAlpha",
  result: "hardAlpha",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}, null, -1), po = /* @__PURE__ */ u("feOffset", {
  dx: "1",
  dy: "1"
}, null, -1), _o = /* @__PURE__ */ u("feGaussianBlur", { stdDeviation: "1" }, null, -1), ho = /* @__PURE__ */ u("feComposite", {
  in2: "hardAlpha",
  k2: "-1",
  k3: "1",
  operator: "arithmetic"
}, null, -1), go = /* @__PURE__ */ u("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" }, null, -1), yo = /* @__PURE__ */ u("feBlend", {
  in2: "shape",
  result: "effect-innerShadow-1"
}, null, -1), $o = /* @__PURE__ */ u("feColorMatrix", {
  in: "SourceAlpha",
  result: "hardAlpha",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}, null, -1), vo = /* @__PURE__ */ u("feOffset", {
  dx: "2",
  dy: "3"
}, null, -1), bo = /* @__PURE__ */ u("feGaussianBlur", { stdDeviation: "1.5" }, null, -1), mo = /* @__PURE__ */ u("feComposite", {
  in2: "hardAlpha",
  k2: "-1",
  k3: "1",
  operator: "arithmetic"
}, null, -1), wo = /* @__PURE__ */ u("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.11 0" }, null, -1), ko = /* @__PURE__ */ u("feBlend", {
  in2: "effect-innerShadow-1",
  result: "effect-innerShadow2"
}, null, -1), zo = /* @__PURE__ */ u("feColorMatrix", {
  in: "SourceAlpha",
  result: "hardAlpha",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}, null, -1), xo = /* @__PURE__ */ u("feOffset", {
  dx: "5",
  dy: "6"
}, null, -1), So = /* @__PURE__ */ u("feGaussianBlur", { stdDeviation: "2" }, null, -1), Oo = /* @__PURE__ */ u("feComposite", {
  in2: "hardAlpha",
  k2: "-1",
  k3: "1",
  operator: "arithmetic"
}, null, -1), To = /* @__PURE__ */ u("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" }, null, -1), Po = /* @__PURE__ */ u("feBlend", {
  in2: "effect-innerShadow2",
  result: "effect-innerShadow3"
}, null, -1), Mo = /* @__PURE__ */ u("feColorMatrix", {
  in: "SourceAlpha",
  result: "hardAlpha",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}, null, -1), Ao = /* @__PURE__ */ u("feOffset", {
  dx: "8",
  dy: "10"
}, null, -1), Bo = /* @__PURE__ */ u("feGaussianBlur", { stdDeviation: "2.5" }, null, -1), Co = /* @__PURE__ */ u("feComposite", {
  in2: "hardAlpha",
  k2: "-1",
  k3: "1",
  operator: "arithmetic"
}, null, -1), Io = /* @__PURE__ */ u("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0" }, null, -1), jo = /* @__PURE__ */ u("feBlend", {
  in2: "effect-innerShadow3",
  result: "effect-innerShadow4"
}, null, -1), Eo = [
  co,
  uo,
  fo,
  po,
  _o,
  ho,
  go,
  yo,
  $o,
  vo,
  bo,
  mo,
  wo,
  ko,
  zo,
  xo,
  So,
  Oo,
  To,
  Po,
  Mo,
  Ao,
  Bo,
  Co,
  Io,
  jo
], Vo = /* @__PURE__ */ B({
  __name: "InnerShadowDeco",
  props: {
    height: {},
    width: {}
  },
  setup(e) {
    const t = e;
    return (n, r) => (h(), $("filter", {
      id: "effects--inner-shadow--deco",
      height: t.height,
      width: t.width,
      x: "0",
      y: "0",
      "color-interpolation-filters": "sRGB",
      filterUnits: "userSpaceOnUse"
    }, Eo, 8, io));
  }
}), Ro = /* @__PURE__ */ B({
  __name: "ProgressBar",
  props: {
    value: { default: 0 },
    variant: { default: "concave" },
    thickness: { default: 12 }
  },
  setup(e) {
    const t = e;
    return (n, r) => (h(), $("div", {
      class: d([n.$style["progress-container"], n.$style[t.variant]])
    }, [
      u("div", {
        class: d([n.$style["progress-groove"], n.$style[t.variant]])
      }, [
        u("div", {
          class: d(n.$style["progress-value"]),
          style: $t({ width: `${t.value * 100}%` })
        }, null, 6)
      ], 2)
    ], 2));
  }
}), Do = "_concave_vuh1m_23", Lo = "_convex_vuh1m_55", Fo = {
  "progress-container": "_progress-container_vuh1m_1",
  "progress-groove": "_progress-groove_vuh1m_11",
  "progress-value": "_progress-value_vuh1m_11",
  concave: Do,
  "progress-content-wrapper": "_progress-content-wrapper_vuh1m_35",
  convex: Lo
}, No = {
  $style: Fo
}, mi = /* @__PURE__ */ j(Ro, [["__cssModules", No], ["__scopeId", "data-v-d1ec5a1d"]]), ve = (e) => (ee("data-v-2a62d2db"), e = e(), te(), e), Go = ["innerHTML"], Uo = ["cx", "cy", "r"], qo = ["cx", "cy", "r"], Ho = /* @__PURE__ */ ve(() => /* @__PURE__ */ u("mask", { id: "progress-groove-mask" }, [
  /* @__PURE__ */ u("use", {
    href: "#progress-groove-outer",
    fill: "#fff"
  }),
  /* @__PURE__ */ u("use", {
    href: "#progress-groove-inner",
    fill: "#000"
  })
], -1)), Wo = /* @__PURE__ */ ve(() => /* @__PURE__ */ u("use", {
  href: "#progress-groove-outer",
  mask: "url(#progress-groove-mask)"
}, null, -1)), Zo = [
  Wo
], Yo = ["cx", "cy", "r", "stroke-dashoffset", "stroke-dasharray", "stroke-width"], Xo = /* @__PURE__ */ ve(() => /* @__PURE__ */ u("clipPath", { id: "progress-content-clip" }, [
  /* @__PURE__ */ u("use", { href: "#progress-groove-inner" })
], -1)), Jo = { "clip-path": "url(#progress-content-clip)" }, Qo = ["height", "width", "x", "y"], Ko = /* @__PURE__ */ B({
  __name: "ProgressCircle",
  props: {
    value: { default: 0 },
    variant: { default: "concave" },
    thickness: { default: 12 }
  },
  setup(e) {
    const t = e, n = V(), { width: r, height: l } = re(n), o = T(
      () => k.clamp(k.min(r.value, l.value) / 2 - t.thickness / 2, 0, 1 / 0)
    ), _ = T(() => o.value * 2 * k.PI), c = T(() => ({
      x: r.value / 2,
      y: l.value / 2
    })), f = L(""), a = () => {
      n.value && t.variant === "convex" && ye(
        () => f.set(
          globalThis.getComputedStyle(n.value).getPropertyValue("--progress-value-fill-gradient")
        ),
        30
      );
    };
    return Re(() => {
      a();
    }), (p, y) => (h(), $("div", {
      ref_key: "wrapperRef$",
      ref: n,
      class: d([p.$style["progress-container"], p.$style[t.variant]])
    }, [
      C(ae, {
        height: s(l),
        width: s(r)
      }, {
        defs: I(() => [
          u("g", {
            innerHTML: s(f)()
          }, null, 8, Go),
          C(Vo, {
            height: s(l),
            width: s(r)
          }, null, 8, ["height", "width"]),
          u("circle", {
            id: "progress-groove-outer",
            cx: s(c).x,
            cy: s(c).y,
            r: s(o) + t.thickness / 2
          }, null, 8, Uo),
          u("circle", {
            id: "progress-groove-inner",
            cx: s(c).x,
            cy: s(c).y,
            r: s(o) - t.thickness / 2
          }, null, 8, qo),
          Ho
        ]),
        path: I(() => [
          u("g", {
            class: d(p.$style["progress-groove"])
          }, Zo, 2),
          u("g", {
            class: d(p.$style["progress-value"])
          }, [
            u("circle", {
              cx: s(c).x,
              cy: s(c).y,
              r: s(o),
              "stroke-dashoffset": (t.value + 0.25) * s(_),
              "stroke-dasharray": `${t.value * s(_)} ${(1 - t.value) * s(_)}`,
              "stroke-width": t.thickness,
              fill: "transparent"
            }, null, 8, Yo)
          ], 2),
          Xo,
          u("g", Jo, [
            (h(), $("foreignObject", {
              height: s(o) * 2,
              width: s(o) * 2,
              x: s(c).x - s(o),
              y: s(c).y - s(o)
            }, [
              u("div", {
                class: d(p.$style["progress-content-wrapper"])
              }, [
                u("label", null, O((t.value * 100).toFixed(0)) + "%", 1)
              ], 2)
            ], 8, Qo))
          ])
        ]),
        _: 1
      }, 8, ["height", "width"])
    ], 2));
  }
}), ei = "_concave_1jatd_23", ti = "_convex_1jatd_55", ni = {
  "progress-container": "_progress-container_1jatd_1",
  "progress-groove": "_progress-groove_1jatd_11",
  "progress-value": "_progress-value_1jatd_11",
  concave: ei,
  "progress-content-wrapper": "_progress-content-wrapper_1jatd_35",
  convex: ti
}, si = {
  $style: ni
}, wi = /* @__PURE__ */ j(Ko, [["__cssModules", si], ["__scopeId", "data-v-2a62d2db"]]), ri = (e, t) => {
  var n;
  if (t) {
    const r = (n = N(st(e, "valid")).find(([l, o]) => o && t[l])) == null ? void 0 : n[0];
    return r ? t[r] ?? null : null;
  }
  return null;
}, ai = ["value"], li = ["for"], oi = /* @__PURE__ */ B({
  __name: "TextField",
  props: {
    modelValue: {},
    label: {},
    placeholder: {},
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    type: { default: "text" },
    name: {},
    autocomplete: { default: "off" },
    autofocus: { type: Boolean },
    maxlength: {},
    minlength: {},
    pattern: {},
    size: {},
    spellcheck: { type: Boolean, default: !1 },
    tabindex: {},
    inputmode: {},
    invalidMessage: {},
    icon: {},
    iconAlign: { default: "right" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, { onTrigger: r } = fe(
      (c) => {
        n.disabled ? (c.preventDefault(), c.stopPropagation()) : (_(), t("update:modelValue", c.target.value));
      },
      {
        flush: "post"
      }
    ), l = V(), o = L(""), _ = () => {
      var c;
      return o.set(
        l.value ? (c = l.value) != null && c.validity.valid ? "" : ri(l.value.validity, n.invalidMessage ?? {}) ?? l.value.validationMessage : ""
      );
    };
    return ce(() => {
      _();
    }), (c, f) => (h(), $("div", {
      class: d([
        c.$style["textfield-container"],
        {
          [c.$style[`icon-align--${n.iconAlign}`]]: n.icon || c.type === "search"
        }
      ])
    }, [
      u("input", Ve({
        ref_key: "inputRef$",
        ref: l,
        class: [c.$style["textfield-input"]]
      }, n, {
        value: n.modelValue,
        onInput: f[0] || (f[0] = //@ts-ignore
        (...a) => s(r) && s(r)(...a))
      }), null, 16, ai),
      c.type === "search" || n.icon ? (h(), E(s(q), {
        key: 0,
        class: d([c.$style["textfield-label--icon"], c.$style.icon]),
        icon: n.icon || c.type === "search" ? "fa6-solid:magnifying-glass" : ""
      }, null, 8, ["class", "icon"])) : S("", !0),
      s(o)() ? (h(), $("label", {
        key: 1,
        for: n.name,
        class: d([c.$style["textfield-label"]])
      }, [
        C(s(q), {
          class: d([c.$style["textfield-label--icon"]]),
          icon: "fa6-solid:circle-xmark"
        }, null, 8, ["class"]),
        u("span", {
          class: d([c.$style["textfield-label--value"]])
        }, O(s(o)()), 3)
      ], 10, li)) : S("", !0)
    ], 2));
  }
}), ii = {
  "textfield-container": "_textfield-container_qhzrd_1",
  "icon-align--left": "_icon-align--left_qhzrd_9",
  "icon-align--right": "_icon-align--right_qhzrd_9",
  "textfield-input": "_textfield-input_qhzrd_17",
  "textfield-label--icon": "_textfield-label--icon_qhzrd_23",
  "textfield-label": "_textfield-label_qhzrd_23",
  "textfield-label--value": "_textfield-label--value_qhzrd_98"
}, ci = {
  $style: ii
}, ui = /* @__PURE__ */ j(oi, [["__cssModules", ci], ["__scopeId", "data-v-784e2d65"]]), di = /* @__PURE__ */ B({
  __name: "SearchBar",
  props: {
    fields: {},
    modelValue: { default: "" },
    items: { default: () => [] },
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue", "select"],
  setup(e, { emit: t }) {
    const n = e, r = F({
      get: () => n.modelValue,
      set: (a) => (f(a), t("update:modelValue", a))
    }), l = V(), o = L(!1), _ = L([]), c = (a) => {
      t("update:modelValue", D(a, n.fields.key)), t("select", a), o.set(!0);
    }, f = (a) => {
      var p;
      _.set(
        ((p = n.items) == null ? void 0 : p.filter((y) => D(y, n.fields.key).includes(a))) ?? []
      );
    };
    return Y(r, f), Y(l, c), (a, p) => (h(), $("div", {
      class: d(a.$style["search-bar--container"])
    }, [
      C(ui, {
        modelValue: r.value,
        "onUpdate:modelValue": p[0] || (p[0] = (y) => r.value = y),
        class: d(a.$style["search-bar--input"]),
        disabled: n.disabled,
        onClick: p[1] || (p[1] = (y) => s(o).set(!1)),
        onFocus: p[2] || (p[2] = (y) => s(o).set(!1)),
        onBlur: p[3] || (p[3] = (y) => s(o).set(!0)),
        type: "search"
      }, null, 8, ["modelValue", "class", "disabled"]),
      r.value && s(_)().length > 0 && !s(o)() ? (h(), E(ot, {
        key: 0,
        class: d(a.$style["search-bar--menu"]),
        options: s(_)(),
        fields: n.fields,
        modelValue: l.value,
        "onUpdate:modelValue": p[4] || (p[4] = (y) => l.value = y)
      }, null, 8, ["class", "options", "fields", "modelValue"])) : S("", !0)
    ], 2));
  }
}), fi = {
  "search-bar--container": "_search-bar--container_1hygv_1",
  "search-bar--input": "_search-bar--input_1hygv_7",
  "search-bar--menu": "_search-bar--menu_1hygv_10"
}, pi = {
  $style: fi
}, ki = /* @__PURE__ */ j(di, [["__cssModules", pi], ["__scopeId", "data-v-384c9809"]]);
export {
  at as BaseLink,
  ae as BasePoly,
  lt as ButtonBox,
  le as CardBox,
  yi as DoughnutChart,
  bi as DropDown,
  Vo as InnerShadowDeco,
  $i as LineChart,
  mi as ProgressBar,
  wi as ProgressCircle,
  vi as RadarChart,
  je as RoundEffect,
  ki as SearchBar,
  ot as SelectMenu,
  ui as TextField
};
//# sourceMappingURL=ui.component.es.js.map
