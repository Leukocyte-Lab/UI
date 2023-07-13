import { shallowRef as tn, watchEffect as bt, readonly as $t, getCurrentScope as mt, onScopeDispose as kt, unref as l, computed as R, watch as W, ref as A, getCurrentInstance as nn, onMounted as Z, defineComponent as V, openBlock as g, createBlock as F, resolveDynamicComponent as sn, normalizeProps as ln, guardReactiveProps as rn, withCtx as I, renderSlot as G, createElementBlock as b, Fragment as O, createCommentVNode as x, renderList as C, normalizeClass as p, createElementVNode as v, useCssVars as wt, toDisplayString as j, createTextVNode as on, createVNode as E, mergeProps as zt, reactive as an, pushScopeId as me, popScopeId as ke, toRefs as Q, toRef as cn, customRef as un, withDirectives as Be, normalizeStyle as dn, onUpdated as fn, withKeys as ue } from "vue";
import { i as pe, d as oe, g as pn, e as ie, f as _n, h as Ot, j as xt, k as gn, l as hn, o as vn, m as we, n as yn, q as Ve, r as bn, t as St, v as $n, w as mn, x as kn, y as Qe, z as Ke, A as ze, B as _e, C as Oe, D as K, E as wn, F as zn, G as On, I as Mt, J as Le, K as H, L as xn, O as Sn, P as Mn, Q as et, R as jn, T as An, V as jt, W as At, X as Cn, Y as Tn, Z as Bn, _ as Ct, $ as Pn, a0 as In, a1 as ge, u as qe, p as he, a2 as re, a3 as Tt, a4 as ee, M as w, b as N, s as U, a5 as Pe } from "./parser-f68503d3.js";
import { Icon as ae } from "@iconify/vue/offline";
var En = /\s/;
function Vn(e) {
  for (var t = e.length; t-- && En.test(e.charAt(t)); )
    ;
  return t;
}
var Ln = /^\s+/;
function qn(e) {
  return e && e.slice(0, Vn(e) + 1).replace(Ln, "");
}
var tt = 0 / 0, Rn = /^[-+]0x[0-9a-f]+$/i, Fn = /^0b[01]+$/i, Dn = /^0o[0-7]+$/i, Nn = parseInt;
function Un(e) {
  if (typeof e == "number")
    return e;
  if (pe(e))
    return tt;
  if (oe(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = oe(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = qn(e);
  var n = Fn.test(e);
  return n || Dn.test(e) ? Nn(e.slice(2), n ? 2 : 8) : Rn.test(e) ? tt : +e;
}
var nt = Object.create, Gn = function() {
  function e() {
  }
  return function(t) {
    if (!oe(t))
      return {};
    if (nt)
      return nt(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
const Wn = Gn;
function Hn(e, t, n) {
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
function Yn(e, t) {
  var n = -1, s = e.length;
  for (t || (t = Array(s)); ++n < s; )
    t[n] = e[n];
  return t;
}
var Zn = 800, Xn = 16, Jn = Date.now;
function Qn(e) {
  var t = 0, n = 0;
  return function() {
    var s = Jn(), r = Xn - (s - n);
    if (n = s, r > 0) {
      if (++t >= Zn)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Kn(e) {
  return function() {
    return e;
  };
}
var es = function() {
  try {
    var e = pn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const ve = es;
var ts = ve ? function(e, t) {
  return ve(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Kn(t),
    writable: !0
  });
} : ie;
const ns = ts;
var ss = Qn(ns);
const Bt = ss;
function ls(e, t) {
  for (var n = -1, s = e == null ? 0 : e.length; ++n < s && t(e[n], n, e) !== !1; )
    ;
  return e;
}
function Re(e, t, n) {
  t == "__proto__" && ve ? ve(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
var rs = Object.prototype, os = rs.hasOwnProperty;
function Pt(e, t, n) {
  var s = e[t];
  (!(os.call(e, t) && _n(s, n)) || n === void 0 && !(t in e)) && Re(e, t, n);
}
function ce(e, t, n, s) {
  var r = !n;
  n || (n = {});
  for (var o = -1, c = t.length; ++o < c; ) {
    var i = t[o], u = s ? s(n[i], e[i], i, n, e) : void 0;
    u === void 0 && (u = e[i]), r ? Re(n, i, u) : Pt(n, i, u);
  }
  return n;
}
var st = Math.max;
function It(e, t, n) {
  return t = st(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var s = arguments, r = -1, o = st(s.length - t, 0), c = Array(o); ++r < o; )
      c[r] = s[t + r];
    r = -1;
    for (var i = Array(t + 1); ++r < t; )
      i[r] = s[r];
    return i[t] = n(c), Hn(e, this, i);
  };
}
function Et(e, t) {
  return Bt(It(e, t, ie), e + "");
}
function as(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var is = Object.prototype, cs = is.hasOwnProperty;
function us(e) {
  if (!oe(e))
    return as(e);
  var t = Ot(e), n = [];
  for (var s in e)
    s == "constructor" && (t || !cs.call(e, s)) || n.push(s);
  return n;
}
function Fe(e) {
  return xt(e) ? gn(e, !0) : us(e);
}
function ds(e) {
  var t = e == null ? 0 : e.length;
  return t ? hn(e, 1) : [];
}
function fs(e) {
  return Bt(It(e, void 0, ds), e + "");
}
var ps = vn(Object.getPrototypeOf, Object);
const De = ps;
var _s = "[object Object]", gs = Function.prototype, hs = Object.prototype, Vt = gs.toString, vs = hs.hasOwnProperty, ys = Vt.call(Object);
function bs(e) {
  if (!we(e) || yn(e) != _s)
    return !1;
  var t = De(e);
  if (t === null)
    return !0;
  var n = vs.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Vt.call(n) == ys;
}
function $s(e, t, n) {
  var s = -1, r = e.length;
  t < 0 && (t = -t > r ? 0 : r + t), n = n > r ? r : n, n < 0 && (n += r), r = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var o = Array(r); ++s < r; )
    o[s] = e[s + t];
  return o;
}
function ms(e, t) {
  return e && ce(t, Ve(t), e);
}
function ks(e, t) {
  return e && ce(t, Fe(t), e);
}
var Lt = typeof exports == "object" && exports && !exports.nodeType && exports, lt = Lt && typeof module == "object" && module && !module.nodeType && module, ws = lt && lt.exports === Lt, rt = ws ? bn.Buffer : void 0, ot = rt ? rt.allocUnsafe : void 0;
function zs(e, t) {
  if (t)
    return e.slice();
  var n = e.length, s = ot ? ot(n) : new e.constructor(n);
  return e.copy(s), s;
}
function Os(e, t) {
  return ce(e, St(e), t);
}
var xs = Object.getOwnPropertySymbols, Ss = xs ? function(e) {
  for (var t = []; e; )
    mn(t, St(e)), e = De(e);
  return t;
} : $n;
const qt = Ss;
function Ms(e, t) {
  return ce(e, qt(e), t);
}
function Rt(e) {
  return kn(e, Fe, qt);
}
var js = Object.prototype, As = js.hasOwnProperty;
function Cs(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && As.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
function Ne(e) {
  var t = new e.constructor(e.byteLength);
  return new Qe(t).set(new Qe(e)), t;
}
function Ts(e, t) {
  var n = t ? Ne(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var Bs = /\w*$/;
function Ps(e) {
  var t = new e.constructor(e.source, Bs.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var at = Ke ? Ke.prototype : void 0, it = at ? at.valueOf : void 0;
function Is(e) {
  return it ? Object(it.call(e)) : {};
}
function Es(e, t) {
  var n = t ? Ne(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var Vs = "[object Boolean]", Ls = "[object Date]", qs = "[object Map]", Rs = "[object Number]", Fs = "[object RegExp]", Ds = "[object Set]", Ns = "[object String]", Us = "[object Symbol]", Gs = "[object ArrayBuffer]", Ws = "[object DataView]", Hs = "[object Float32Array]", Ys = "[object Float64Array]", Zs = "[object Int8Array]", Xs = "[object Int16Array]", Js = "[object Int32Array]", Qs = "[object Uint8Array]", Ks = "[object Uint8ClampedArray]", el = "[object Uint16Array]", tl = "[object Uint32Array]";
function nl(e, t, n) {
  var s = e.constructor;
  switch (t) {
    case Gs:
      return Ne(e);
    case Vs:
    case Ls:
      return new s(+e);
    case Ws:
      return Ts(e, n);
    case Hs:
    case Ys:
    case Zs:
    case Xs:
    case Js:
    case Qs:
    case Ks:
    case el:
    case tl:
      return Es(e, n);
    case qs:
      return new s();
    case Rs:
    case Ns:
      return new s(e);
    case Fs:
      return Ps(e);
    case Ds:
      return new s();
    case Us:
      return Is(e);
  }
}
function sl(e) {
  return typeof e.constructor == "function" && !Ot(e) ? Wn(De(e)) : {};
}
var ll = "[object Map]";
function rl(e) {
  return we(e) && ze(e) == ll;
}
var ct = _e && _e.isMap, ol = ct ? Oe(ct) : rl;
const al = ol;
var il = "[object Set]";
function cl(e) {
  return we(e) && ze(e) == il;
}
var ut = _e && _e.isSet, ul = ut ? Oe(ut) : cl;
const dl = ul;
var fl = 1, pl = 2, _l = 4, Ft = "[object Arguments]", gl = "[object Array]", hl = "[object Boolean]", vl = "[object Date]", yl = "[object Error]", Dt = "[object Function]", bl = "[object GeneratorFunction]", $l = "[object Map]", ml = "[object Number]", Nt = "[object Object]", kl = "[object RegExp]", wl = "[object Set]", zl = "[object String]", Ol = "[object Symbol]", xl = "[object WeakMap]", Sl = "[object ArrayBuffer]", Ml = "[object DataView]", jl = "[object Float32Array]", Al = "[object Float64Array]", Cl = "[object Int8Array]", Tl = "[object Int16Array]", Bl = "[object Int32Array]", Pl = "[object Uint8Array]", Il = "[object Uint8ClampedArray]", El = "[object Uint16Array]", Vl = "[object Uint32Array]", M = {};
M[Ft] = M[gl] = M[Sl] = M[Ml] = M[hl] = M[vl] = M[jl] = M[Al] = M[Cl] = M[Tl] = M[Bl] = M[$l] = M[ml] = M[Nt] = M[kl] = M[wl] = M[zl] = M[Ol] = M[Pl] = M[Il] = M[El] = M[Vl] = !0;
M[yl] = M[Dt] = M[xl] = !1;
function de(e, t, n, s, r, o) {
  var c, i = t & fl, u = t & pl, a = t & _l;
  if (n && (c = r ? n(e, s, r, o) : n(e)), c !== void 0)
    return c;
  if (!oe(e))
    return e;
  var f = K(e);
  if (f) {
    if (c = Cs(e), !i)
      return Yn(e, c);
  } else {
    var _ = ze(e), y = _ == Dt || _ == bl;
    if (wn(e))
      return zs(e, i);
    if (_ == Nt || _ == Ft || y && !r) {
      if (c = u || y ? {} : sl(e), !i)
        return u ? Ms(e, ks(c, e)) : Os(e, ms(c, e));
    } else {
      if (!M[_])
        return r ? e : {};
      c = nl(e, _, i);
    }
  }
  o || (o = new zn());
  var h = o.get(e);
  if (h)
    return h;
  o.set(e, c), dl(e) ? e.forEach(function(m) {
    c.add(de(m, t, n, m, e, o));
  }) : al(e) && e.forEach(function(m, k) {
    c.set(k, de(m, t, n, k, e, o));
  });
  var d = a ? u ? Rt : On : u ? Fe : Ve, $ = f ? void 0 : d(e);
  return ls($ || e, function(m, k) {
    $ && (k = m, m = e[k]), Pt(c, k, de(m, t, n, k, e, o));
  }), c;
}
function Ll(e, t, n, s) {
  for (var r = -1, o = e == null ? 0 : e.length; ++r < o; ) {
    var c = e[r];
    t(s, c, n(c), e);
  }
  return s;
}
function ql(e, t, n, s) {
  return Mt(e, function(r, o, c) {
    t(s, r, n(r), c);
  }), s;
}
function Rl(e, t) {
  return function(n, s) {
    var r = K(n) ? Ll : ql, o = t ? t() : {};
    return r(n, e, Le(s), o);
  };
}
function Fl(e) {
  return we(e) && xt(e);
}
var Dl = "Expected a function";
function Nl(e, t, n) {
  if (typeof e != "function")
    throw new TypeError(Dl);
  return setTimeout(function() {
    e.apply(void 0, n);
  }, t);
}
var Ul = Et(function(e, t, n) {
  return Nl(e, Un(t) || 0, n);
});
const Ue = Ul;
function Gl(e, t) {
  return H(t, function(n) {
    return [n, e[n]];
  });
}
function Wl(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(s) {
    n[++t] = [s, s];
  }), n;
}
var Hl = "[object Map]", Yl = "[object Set]";
function Zl(e) {
  return function(t) {
    var n = ze(t);
    return n == Hl ? xn(t) : n == Yl ? Wl(t) : Gl(t, e(t));
  };
}
var Xl = Zl(Ve);
const J = Xl;
function Jl(e, t) {
  var n = [];
  return Mt(e, function(s, r, o) {
    t(s, r, o) && n.push(s);
  }), n;
}
function Ql(e, t) {
  var n = K(e) ? Sn : Jl;
  return n(e, Le(t));
}
function Kl(e) {
  return e && e.length ? e[0] : void 0;
}
var er = Object.prototype, tr = er.hasOwnProperty, nr = Rl(function(e, t, n) {
  tr.call(e, n) ? e[n].push(t) : Re(e, n, [t]);
});
const Ge = nr;
function sr(e, t) {
  return e > t;
}
var lr = Math.min;
function rr(e, t, n) {
  for (var s = n ? jn : An, r = e[0].length, o = e.length, c = o, i = Array(o), u = 1 / 0, a = []; c--; ) {
    var f = e[c];
    c && t && (f = H(f, Oe(t))), u = lr(f.length, u), i[c] = !n && (t || r >= 120 && f.length >= 120) ? new Mn(c && f) : void 0;
  }
  f = e[0];
  var _ = -1, y = i[0];
  e:
    for (; ++_ < r && a.length < u; ) {
      var h = f[_], d = t ? t(h) : h;
      if (h = n || h !== 0 ? h : 0, !(y ? et(y, d) : s(a, d, n))) {
        for (c = o; --c; ) {
          var $ = i[c];
          if (!($ ? et($, d) : s(e[c], d, n)))
            continue e;
        }
        y && y.push(d), a.push(h);
      }
    }
  return a;
}
function or(e) {
  return Fl(e) ? e : [];
}
var ar = Et(function(e) {
  var t = jt(e), n = H(e, or);
  return t = typeof t == "function" ? t : void 0, t && n.pop(), n.length && n[0] === e[0] ? rr(n, void 0, t) : [];
});
const ir = ar;
function cr(e, t) {
  return t.length < 2 ? e : At(e, $s(t, 0, -1));
}
function ur(e, t) {
  return Cn(e, t);
}
function dr(e, t) {
  return e === t || Tn(e, t, Bn(t));
}
function fr(e, t) {
  return e < t;
}
function Ut(e, t, n) {
  for (var s = -1, r = e.length; ++s < r; ) {
    var o = e[s], c = t(o);
    if (c != null && (i === void 0 ? c === c && !pe(c) : n(c, i)))
      var i = c, u = o;
  }
  return u;
}
function pr(e) {
  return e && e.length ? Ut(e, ie, sr) : void 0;
}
function _r(e) {
  return e && e.length ? Ut(e, ie, fr) : void 0;
}
function gr(e, t) {
  return t = Ct(t, e), e = cr(e, t), e == null || delete e[Pn(jt(t))];
}
function hr(e) {
  return bs(e) ? void 0 : e;
}
var vr = 1, yr = 2, br = 4, $r = fs(function(e, t) {
  var n = {};
  if (e == null)
    return n;
  var s = !1;
  t = H(t, function(o) {
    return o = Ct(o, e), s || (s = o.length > 1), o;
  }), ce(e, Rt(e), n), s && (n = de(n, vr | yr | br, hr));
  for (var r = t.length; r--; )
    gr(n, t[r]);
  return n;
});
const Gt = $r;
function mr(e, t) {
  var n = e.length;
  for (e.sort(t); n--; )
    e[n] = e[n].value;
  return e;
}
function kr(e, t) {
  if (e !== t) {
    var n = e !== void 0, s = e === null, r = e === e, o = pe(e), c = t !== void 0, i = t === null, u = t === t, a = pe(t);
    if (!i && !a && !o && e > t || o && c && u && !i && !a || s && c && u || !n && u || !r)
      return 1;
    if (!s && !o && !a && e < t || a && n && r && !s && !o || i && n && r || !c && r || !u)
      return -1;
  }
  return 0;
}
function wr(e, t, n) {
  for (var s = -1, r = e.criteria, o = t.criteria, c = r.length, i = n.length; ++s < c; ) {
    var u = kr(r[s], o[s]);
    if (u) {
      if (s >= i)
        return u;
      var a = n[s];
      return u * (a == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
function zr(e, t, n) {
  t.length ? t = H(t, function(o) {
    return K(o) ? function(c) {
      return At(c, o.length === 1 ? o[0] : o);
    } : o;
  }) : t = [ie];
  var s = -1;
  t = H(t, Oe(Le));
  var r = In(e, function(o, c, i) {
    var u = H(t, function(a) {
      return a(o);
    });
    return { criteria: u, index: ++s, value: o };
  });
  return mr(r, function(o, c) {
    return wr(o, c, n);
  });
}
function Or(e, t, n, s) {
  return e == null ? [] : (K(t) || (t = t == null ? [] : [t]), n = s ? void 0 : n, K(n) || (n = n == null ? [] : [n]), zr(e, t, n));
}
var xr = Object.defineProperty, Sr = Object.defineProperties, Mr = Object.getOwnPropertyDescriptors, dt = Object.getOwnPropertySymbols, jr = Object.prototype.hasOwnProperty, Ar = Object.prototype.propertyIsEnumerable, ft = (e, t, n) => t in e ? xr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Cr = (e, t) => {
  for (var n in t || (t = {}))
    jr.call(t, n) && ft(e, n, t[n]);
  if (dt)
    for (var n of dt(t))
      Ar.call(t, n) && ft(e, n, t[n]);
  return e;
}, Tr = (e, t) => Sr(e, Mr(t));
function P(e, t) {
  var n;
  const s = tn();
  return bt(() => {
    s.value = e();
  }, Tr(Cr({}, t), {
    flush: (n = t == null ? void 0 : t.flush) != null ? n : "sync"
  })), $t(s);
}
function Wt(e) {
  return mt() ? (kt(e), !0) : !1;
}
function se(e) {
  return typeof e == "function" ? e() : l(e);
}
const Br = typeof window < "u";
function Y(e) {
  var t;
  const n = se(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const xe = Br ? window : void 0;
function Pr() {
  const e = A(!1);
  return nn() && Z(() => {
    e.value = !0;
  }), e;
}
function Ht(e) {
  const t = Pr();
  return R(() => (t.value, !!e()));
}
var pt = Object.getOwnPropertySymbols, Ir = Object.prototype.hasOwnProperty, Er = Object.prototype.propertyIsEnumerable, Vr = (e, t) => {
  var n = {};
  for (var s in e)
    Ir.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && pt)
    for (var s of pt(e))
      t.indexOf(s) < 0 && Er.call(e, s) && (n[s] = e[s]);
  return n;
};
function Lr(e, t, n = {}) {
  const s = n, { window: r = xe } = s, o = Vr(s, ["window"]);
  let c;
  const i = Ht(() => r && "MutationObserver" in r), u = () => {
    c && (c.disconnect(), c = void 0);
  }, a = W(
    () => Y(e),
    (_) => {
      u(), i.value && r && _ && (c = new MutationObserver(t), c.observe(_, o));
    },
    { immediate: !0 }
  ), f = () => {
    u(), a();
  };
  return Wt(f), {
    isSupported: i,
    stop: f
  };
}
function We(e, t, n = {}) {
  const { window: s = xe, initialValue: r = "", observe: o = !1 } = n, c = A(r), i = R(() => {
    var a;
    return Y(t) || ((a = s == null ? void 0 : s.document) == null ? void 0 : a.documentElement);
  });
  function u() {
    var a;
    const f = se(e), _ = se(i);
    if (_ && s) {
      const y = (a = s.getComputedStyle(_).getPropertyValue(f)) == null ? void 0 : a.trim();
      c.value = y || r;
    }
  }
  return o && Lr(i, u, {
    attributes: !0,
    window: s
  }), W(
    [i, () => se(e)],
    u,
    { immediate: !0 }
  ), W(
    c,
    (a) => {
      var f;
      (f = i.value) != null && f.style && i.value.style.setProperty(se(e), a);
    }
  ), c;
}
var _t = Object.getOwnPropertySymbols, qr = Object.prototype.hasOwnProperty, Rr = Object.prototype.propertyIsEnumerable, Fr = (e, t) => {
  var n = {};
  for (var s in e)
    qr.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && _t)
    for (var s of _t(e))
      t.indexOf(s) < 0 && Rr.call(e, s) && (n[s] = e[s]);
  return n;
};
function Se(e, t, n = {}) {
  const s = n, { window: r = xe } = s, o = Fr(s, ["window"]);
  let c;
  const i = Ht(() => r && "ResizeObserver" in r), u = () => {
    c && (c.disconnect(), c = void 0);
  }, a = R(
    () => Array.isArray(e) ? e.map((y) => Y(y)) : [Y(e)]
  ), f = W(
    a,
    (y) => {
      if (u(), i.value && r) {
        c = new ResizeObserver(t);
        for (const h of y)
          h && c.observe(h, o);
      }
    },
    { immediate: !0, flush: "post", deep: !0 }
  ), _ = () => {
    u(), f();
  };
  return Wt(_), {
    isSupported: i,
    stop: _
  };
}
function Me(e, t = { width: 0, height: 0 }, n = {}) {
  const { window: s = xe, box: r = "content-box" } = n, o = R(() => {
    var u, a;
    return (a = (u = Y(e)) == null ? void 0 : u.namespaceURI) == null ? void 0 : a.includes("svg");
  }), c = A(t.width), i = A(t.height);
  return Se(
    e,
    ([u]) => {
      const a = r === "border-box" ? u.borderBoxSize : r === "content-box" ? u.contentBoxSize : u.devicePixelContentBoxSize;
      if (s && o.value) {
        const f = Y(e);
        if (f) {
          const _ = s.getComputedStyle(f);
          c.value = parseFloat(_.width), i.value = parseFloat(_.height);
        }
      } else if (a) {
        const f = Array.isArray(a) ? a : [a];
        c.value = f.reduce((_, { inlineSize: y }) => _ + y, 0), i.value = f.reduce((_, { blockSize: y }) => _ + y, 0);
      } else
        c.value = u.contentRect.width, i.value = u.contentRect.height;
    },
    n
  ), W(
    () => Y(e),
    (u) => {
      c.value = u ? t.width : 0, i.value = u ? t.height : 0;
    }
  ), {
    width: c,
    height: i
  };
}
const He = /* @__PURE__ */ V({
  __name: "BaseLink",
  props: {
    link: {},
    external: { type: Boolean, default: void 0 }
  },
  setup(e) {
    const t = e, n = P(
      () => t.external ?? /^(https?:\/\/)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&//=]*)$/.test(t.link || "")
    );
    return (s, r) => (g(), F(sn(t.link ? l(n) ? "a" : "RouterLink" : "div"), ln(rn(
      t.link ? {
        [l(n) ? "href" : "to"]: t.link,
        ...l(n) ? {
          target: "_blank",
          rel: "noopener noreferrer"
        } : {}
      } : {}
    )), {
      default: I(() => [
        G(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Dr = /* @__PURE__ */ V({
  __name: "BaseList",
  props: {
    items: {},
    groupBy: {}
  },
  setup(e) {
    const t = e, n = P(
      () => ge(
        J(Ge(t.items, t.groupBy ?? "")).map(([s, r]) => [
          s === "undefined" ? "" : s,
          r
        ])
      )
    );
    return (s, r) => (g(), b(O, null, [
      !t.items || t.items.length === 0 ? G(s.$slots, "placeholder", { key: 0 }) : x("", !0),
      (g(!0), b(O, null, C(l(n), (o, c) => (g(), b(O, {
        key: `list-group-${c}`
      }, [
        c ? G(s.$slots, "group", {
          key: 0,
          group: c,
          items: o
        }) : x("", !0),
        (g(!0), b(O, null, C(o, (i, u) => G(s.$slots, "default", {
          key: `list-item-${u}`,
          item: i,
          index: u
        })), 128))
      ], 64))), 128))
    ], 64));
  }
}), Nr = ["width", "height"], Ur = /* @__PURE__ */ V({
  __name: "BasePoly",
  props: {
    height: {},
    width: {}
  },
  setup(e) {
    const t = e;
    return (n, s) => (g(), b("svg", {
      class: p(n.$style["poly-wrapper"]),
      width: t.width,
      height: t.height,
      preserveAspectRatio: "xMinYMin",
      "color-profile": "sRGB",
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      v("defs", null, [
        G(n.$slots, "defs", {}, void 0, !0)
      ]),
      G(n.$slots, "path", {}, void 0, !0)
    ], 10, Nr));
  }
}), Gr = {
  "poly-wrapper": "_poly-wrapper_14erz_1"
}, q = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, Wr = {
  $style: Gr
}, je = /* @__PURE__ */ q(Ur, [["__cssModules", Wr], ["__scopeId", "data-v-ac9d4bad"]]), Hr = /* @__PURE__ */ V({
  __name: "BadgeBox",
  props: {
    label: {},
    content: {},
    delimiter: {},
    color: { default: "default" },
    variant: { default: "capsule" },
    link: {}
  },
  setup(e) {
    const t = e;
    return wt((n) => ({
      "3363e4fe": `"${t.delimiter}"`
    })), (n, s) => (g(), F(He, {
      link: t.link,
      class: p([n.$style["badge-container"], n.$style[t.variant], n.$style[`color-${t.color}`]])
    }, {
      default: I(() => [
        t.label ? (g(), b("label", {
          key: 0,
          class: p(n.$style["badge-label"])
        }, [
          t.delimiter && t.variant === "capsule" ? (g(!0), b(O, { key: 0 }, C(t.label.split(t.delimiter), (r, o) => (g(), b("span", { key: o }, j(r), 1))), 128)) : (g(), b(O, { key: 1 }, [
            on(j(t.label), 1)
          ], 64))
        ], 2)) : x("", !0),
        t.content ? (g(), b("p", {
          key: 1,
          class: p(n.$style["badge-content"])
        }, j(t.content), 3)) : x("", !0)
      ]),
      _: 1
    }, 8, ["link", "class"]));
  }
}), Yr = "_tab_1y2vu_16", Zr = "_capsule_1y2vu_121", Xr = {
  "badge-container": "_badge-container_1y2vu_1",
  "color-default": "_color-default_1y2vu_8",
  tab: Yr,
  "color-cyan": "_color-cyan_1y2vu_19",
  "color-blue": "_color-blue_1y2vu_36",
  "color-green": "_color-green_1y2vu_53",
  "color-orange": "_color-orange_1y2vu_70",
  "color-red": "_color-red_1y2vu_87",
  "color-purple": "_color-purple_1y2vu_104",
  capsule: Zr,
  "badge-label": "_badge-label_1y2vu_128",
  "badge-content": "_badge-content_1y2vu_128"
}, Jr = {
  $style: Xr
}, lu = /* @__PURE__ */ q(Hr, [["__cssModules", Jr], ["__scopeId", "data-v-4bc87078"]]), Qr = /* @__PURE__ */ V({
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
    const n = e, { triggered: s, onTrigger: r } = qe((o) => {
      n.disabled ? (o.preventDefault(), o.stopPropagation()) : t("click", o);
    });
    return (o, c) => (g(), b(O, null, [
      E(He, zt({
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
            [o.$style.clicked]: n.clicked || l(s)()
          }
        ],
        "aria-disabled": n.disabled,
        "aria-label": n.label,
        onClick: l(r)
      }, n.disabled ? { disabled: "", ...o.$attrs } : o.$attrs, {
        role: "button",
        tabindex: "0"
      }), {
        default: I(() => [
          n.label ? (g(), b("span", {
            key: 0,
            class: p([o.$style["button-content"]])
          }, j(n.label), 3)) : x("", !0),
          n.icon ? (g(), b("span", {
            key: 1,
            class: p([o.$style["button-icon"]])
          }, [
            E(l(ae), {
              icon: n.icon
            }, null, 8, ["icon"])
          ], 2)) : x("", !0)
        ]),
        _: 1
      }, 16, ["link", "class", "aria-disabled", "aria-label", "onClick"]),
      n.variant === "extendable-rect" ? (g(), b("div", {
        key: 0,
        class: p(o.$style["button-placeholder"])
      }, null, 2)) : x("", !0)
    ], 64));
  }
}), Kr = "_behavior_assvn_1", eo = "_clickable_assvn_1", to = "_disabled_assvn_4", no = "_draggable_assvn_7", so = "_loading_assvn_10", lo = "_rounded_assvn_14", ro = "_secondary_assvn_14", oo = "_rect_assvn_14", ao = "_square_assvn_14", io = "_circle_assvn_14", co = "_clicked_assvn_22", uo = "_small_assvn_143", fo = "_large_assvn_147", po = "_text_assvn_305", _o = {
  behavior: Kr,
  clickable: eo,
  disabled: to,
  draggable: no,
  loading: so,
  "button-container": "_button-container_assvn_14",
  rounded: lo,
  secondary: ro,
  rect: oo,
  "extendable-rect": "_extendable-rect_assvn_14",
  square: ao,
  circle: io,
  clicked: co,
  "button-icon": "_button-icon_assvn_98",
  "button-content": "_button-content_assvn_114",
  small: uo,
  large: fo,
  "button-placeholder": "_button-placeholder_assvn_271",
  text: po
}, go = {
  $style: _o
}, ye = /* @__PURE__ */ q(Qr, [["__cssModules", go], ["__scopeId", "data-v-f286cd6c"]]), ho = /* @__PURE__ */ V({
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
    wt((r) => ({
      "1dbc842c": t.radius
    }));
    const { triggered: n, onTrigger: s } = qe((r) => {
      t.clickable || r.preventDefault();
    });
    return (r, o) => (g(), F(He, {
      ref: "wrapperRef$",
      link: t.link,
      class: p([
        r.$style["card-container"],
        r.$style.behavior,
        r.$style[t.variant],
        r.$style[`color-${t.color}`],
        r.$style[`stroke-${t.strokeWeight}`],
        r.$style[`purpose-${t.purpose}`],
        {
          [r.$style.clickable]: t.link || t.clickable,
          [r.$style["has-stroke"]]: t.hasStroke,
          [r.$style.clicked]: l(n)() && t.clickable
        }
      ]),
      onClick: l(s)
    }, {
      default: I(() => [
        G(r.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["link", "class", "onClick"]));
  }
}), vo = "_behavior_rvqmg_1", yo = "_clickable_rvqmg_1", bo = "_disabled_rvqmg_4", $o = "_draggable_rvqmg_7", mo = "_loading_rvqmg_10", ko = "_metallic_rvqmg_14", wo = "_flat_rvqmg_14", zo = "_clicked_rvqmg_22", Oo = "_dash_rvqmg_92", xo = {
  behavior: vo,
  clickable: yo,
  disabled: bo,
  draggable: $o,
  loading: mo,
  "card-container": "_card-container_rvqmg_14",
  "color-default": "_color-default_rvqmg_14",
  metallic: ko,
  "has-stroke": "_has-stroke_rvqmg_14",
  flat: wo,
  "color-cyan": "_color-cyan_rvqmg_14",
  "color-blue": "_color-blue_rvqmg_14",
  "color-green": "_color-green_rvqmg_14",
  "color-orange": "_color-orange_rvqmg_14",
  "color-red": "_color-red_rvqmg_14",
  clicked: zo,
  dash: Oo,
  "stroke-bold": "_stroke-bold_rvqmg_399",
  "stroke-normal": "_stroke-normal_rvqmg_402",
  "stroke-thin": "_stroke-thin_rvqmg_405",
  "purpose-box": "_purpose-box_rvqmg_408",
  "purpose-container": "_purpose-container_rvqmg_412"
}, So = {
  $style: xo
}, te = /* @__PURE__ */ q(ho, [["__cssModules", So], ["__scopeId", "data-v-d941fd1e"]]), Ae = ({
  type: e,
  axises: t,
  data: n
}) => {
  const s = an({
    datasets: [],
    axises: {}
  }), r = {
    datasets: P(() => s.datasets),
    axises: P(() => s.axises)
  }, o = (u) => {
    var a;
    return !Array.isArray(u) || u.length === 0 ? [] : Array.isArray(u) && ((a = u[0]) != null && a.label) ? u : [
      {
        label: "Data",
        series: u
      }
    ];
  }, c = (u, a) => a.map((f) => ({
    data: f,
    ...ge(
      J(u).filter(([, _]) => !re(_)).map(([_, y]) => {
        const h = y.selector ? N(f, y.selector) : null, d = y.accessor ? he(f, y.accessor) : h;
        return [
          _,
          {
            normalized: Number(
              y.type === "number" ? parseFloat(String(h)) : y.type === "date" ? new Date(Number(h)) : h
            ),
            value: d
          }
        ];
      })
    )
  })), i = (u, a, f) => {
    const _ = o(f).map((d) => ({
      ...d,
      label: he(d, d.label ?? ""),
      series: c(a, d.series)
    })), y = _.flatMap((d) => d.series), h = ge(
      J(a).filter(([, d]) => !re(d)).map(([d, $]) => {
        const m = Tt(ee(y, `${d}.${$.type === "string" ? "value" : "normalized"}`)), k = Number($.min === "auto" ? _r(m) : $.min ?? 0), L = Number(
          $.max === "auto" ? pr(m) ?? 0 : $.max ?? m.length - (/radar|doughnut/.test(u ?? "") ? 0 : 1)
        );
        return [
          d,
          {
            ...$,
            min: k,
            max: L,
            metrics: $.type === "string" ? m.map((T, D) => ({
              normalized: D / (L - k),
              value: T
            })) : Array(w.clamp(w.ceil((L - k) / ($.step ?? 1)) + 1, 0, 1 / 0)).fill(0).map((T, D) => ({
              normalized: D / w.ceil((L - k) / ($.step ?? 1)),
              value: k + ($.step ?? 1) * D
            }))
          }
        ];
      })
    );
    return h && J(h).forEach(([d, $]) => {
      $.type === "string" ? _.forEach((m) => {
        m.series.forEach((k) => {
          k[d].normalized = ee($.metrics, "value").indexOf(k[d].value) / (($.metrics ?? []).length - (/radar|doughnut/.test(u ?? "") ? 0 : 1));
        });
      }) : _.forEach((m) => {
        m.series.forEach((k) => {
          k[d].normalized = (Number(k[d].normalized ?? 0) - Number($.min)) / (Number($.max) - Number($.min));
        });
      });
    }), {
      datasets: _,
      axises: h
    };
  };
  return bt(() => {
    const u = i(l(e), l(t), l(n));
    s.datasets = u.datasets, s.axises = u.axises;
  }), {
    ...r
  };
}, Mo = (e) => (me("data-v-fefd0601"), e = e(), ke(), e), jo = ["cx", "cy", "r", "stroke-dashoffset", "stroke-dasharray"], Ao = ["x", "y"], Co = /* @__PURE__ */ Mo(() => /* @__PURE__ */ v("hr", null, null, -1)), To = { id: "chart-content-clip" }, Bo = ["cx", "cy", "r"], Po = { "clip-path": "url(#chart-content-clip)" }, Io = ["height", "width", "x", "y"], Eo = /* @__PURE__ */ V({
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
    const t = e, n = A(), { width: s, height: r } = Me(n), { axises: o, datasets: c } = Ae({
      type: "doughnut",
      data: t.datasets,
      axises: t.axises
    }), i = P(
      () => w.clamp(
        w.min(s.value - t.options.offset.x, r.value - t.options.offset.y) / 2,
        0,
        1 / 0
      )
    ), u = P(() => t.options.round ? 30 : 15), a = P(() => i.value * 2 * w.PI), f = P(() => ({
      x: s.value / 2,
      y: r.value / 2
    })), _ = P(
      () => c.value.map((h) => h.series.reduce((d, $) => d + $.y.normalized, 0))
    ), y = P(
      () => c.value.map((h, d) => ({
        ...h,
        series: h.series.map(($) => ({
          ...$,
          y: {
            ...$.y,
            normalized: w.clamp(
              $.y.normalized / _.value[d] - u.value / a.value,
              0,
              1
            )
          }
        })).filter(($) => $.y.normalized > u.value / a.value / 2).map(($, m, k) => ({
          ...$,
          y: {
            ...$.y,
            normalized: $.y.normalized / k.reduce((L, T) => L + T.y.normalized, 0)
          }
        })).map(($, m, k) => ({
          ...$,
          y: {
            ...$.y,
            normalized: w.clamp(
              $.y.normalized / k.reduce((L, T) => L + T.y.normalized, 0) - u.value / a.value,
              0,
              1
            )
          }
        })).map(($, m, k) => ({
          ...$,
          y: {
            ...$.y,
            offset: k.slice(0, m).reduce((L, T) => L + T.y.normalized, 0)
          }
        })).map(($, m) => ({
          ...$,
          x: {
            ...$.x,
            label: w.cos(
              w.rad(
                ($.y.offset + $.y.normalized / 2 + u.value / a.value * m) * 360 - 90
              )
            )
          },
          y: {
            ...$.y,
            label: w.sin(
              w.rad(
                ($.y.offset + $.y.normalized / 2 + u.value / a.value * m) * 360 - 90
              )
            )
          }
        }))
      }))
    );
    return (h, d) => (g(), b("div", {
      ref_key: "wrapperRef$",
      ref: n,
      class: p(h.$style["chart-container"])
    }, [
      E(je, {
        height: l(r),
        width: l(s)
      }, {
        path: I(() => [
          v("g", {
            class: p([h.$style["chart-group-plots"]])
          }, [
            (g(!0), b(O, null, C(l(y), ($) => (g(), b(O, {
              key: $.label
            }, [
              (g(!0), b(O, null, C($.series, (m, k) => (g(), b("g", {
                key: `plot-${k}`,
                class: p(h.$style["chart-area"])
              }, [
                v("circle", {
                  cx: l(f).x,
                  cy: l(f).y,
                  r: l(i),
                  "stroke-dashoffset": m.y.offset * l(a) * -1 - l(u) * k + 0.25 * l(a),
                  "stroke-dasharray": `${m.y.normalized * l(a)} ${(1 - m.y.normalized) * l(a)}`,
                  class: p([
                    h.$style.behavior,
                    h.$style["chart-area"],
                    h.$style.doughnut,
                    h.$style.plot,
                    h.$style.clickable,
                    {
                      [h.$style.round]: t.options.round
                    }
                  ]),
                  "pointer-events": "visibleStroke"
                }, null, 10, jo),
                (g(), b("foreignObject", {
                  x: l(f).x + l(i) * m.x.label - 260 * +(m.x.label < 0),
                  y: l(f).y + l(i) * m.y.label - 240 * +(m.y.label < 0),
                  height: "240",
                  width: "260",
                  class: p([h.$style["chart-area"], h.$style["legend-container"]])
                }, [
                  E(te, {
                    class: p([h.$style["chart-area"], h.$style["legend-wrapper"]]),
                    radius: "var(--agh-ref-border-radius-500)"
                  }, {
                    default: I(() => [
                      t.options.title ? (g(), b(O, { key: 0 }, [
                        v("h1", {
                          class: p([h.$style["chart-area"], h.$style["legend-title"], h.$style.doughnut])
                        }, [
                          v("span", null, j(m.x.value), 1)
                        ], 2),
                        Co
                      ], 64)) : x("", !0),
                      (g(!0), b(O, null, C(l(o), (L, T) => (g(), b(O, { key: T }, [
                        !/(x)/.test(T) && L && m[T] ? (g(), b("div", {
                          key: 0,
                          class: p([
                            h.$style["chart-area"],
                            h.$style["legend-group"],
                            h.$style.doughnut
                          ])
                        }, [
                          v("label", {
                            class: p([h.$style["chart-area"], h.$style["legend-label"]])
                          }, j(L.label), 3),
                          v("p", {
                            class: p([h.$style["chart-area"], h.$style["legend-value"]])
                          }, j(m[T].value), 3)
                        ], 2)) : x("", !0)
                      ], 64))), 128))
                    ]),
                    _: 2
                  }, 1032, ["class", "radius"])
                ], 10, Ao))
              ], 2))), 128))
            ], 64))), 128))
          ], 2),
          v("clipPath", To, [
            v("circle", {
              cx: l(f).x,
              cy: l(f).y,
              r: l(i) - 10
            }, null, 8, Bo)
          ]),
          v("g", Po, [
            (g(), b("foreignObject", {
              class: p(h.$style["chart-content-wrapper"]),
              height: l(i) * 2,
              width: l(i) * 2,
              x: l(f).x - l(i),
              y: l(f).y - l(i)
            }, [
              G(h.$slots, "default", {}, void 0, !0)
            ], 10, Io))
          ])
        ]),
        _: 3
      }, 8, ["height", "width"])
    ], 2));
  }
}), Vo = "_behavior_pzvhi_1", Lo = "_clickable_pzvhi_1", qo = "_disabled_pzvhi_4", Ro = "_draggable_pzvhi_7", Fo = "_loading_pzvhi_10", Do = "_path_pzvhi_24", No = "_radar_pzvhi_29", Uo = "_label_pzvhi_32", Go = "_plot_pzvhi_85", Wo = "_point_pzvhi_85", Ho = "_doughnut_pzvhi_96", Yo = "_bg_pzvhi_102", Zo = "_round_pzvhi_106", Xo = "_line_pzvhi_119", Jo = {
  behavior: Vo,
  clickable: Lo,
  disabled: qo,
  draggable: Ro,
  loading: Fo,
  "chart-container": "_chart-container_pzvhi_14",
  "chart-axis": "_chart-axis_pzvhi_24",
  path: Do,
  radar: No,
  label: Uo,
  "font-align--center": "_font-align--center_pzvhi_45",
  "font-align--right": "_font-align--right_pzvhi_48",
  "font-align--left": "_font-align--left_pzvhi_51",
  "box-align--center": "_box-align--center_pzvhi_54",
  "box-align--left": "_box-align--left_pzvhi_57",
  "box-align--right": "_box-align--right_pzvhi_60",
  "chart-group-plots": "_chart-group-plots_pzvhi_67",
  "chart-area": "_chart-area_pzvhi_67",
  plot: Go,
  point: Wo,
  doughnut: Ho,
  "legend-container": "_legend-container_pzvhi_96",
  bg: Yo,
  round: Zo,
  line: Xo,
  "legend-wrapper": "_legend-wrapper_pzvhi_147",
  "legend-group": "_legend-group_pzvhi_158",
  "legend-value": "_legend-value_pzvhi_166",
  "legend-label": "_legend-label_pzvhi_169",
  "legend-title": "_legend-title_pzvhi_173"
}, Qo = {
  $style: Jo
}, ru = /* @__PURE__ */ q(Eo, [["__cssModules", Qo], ["__scopeId", "data-v-fefd0601"]]), Ko = (e) => (me("data-v-7ca4eb50"), e = e(), ke(), e), ea = ["d"], ta = ["x", "y", "text-anchor"], na = ["x", "y"], sa = ["d"], la = ["cx", "cy"], ra = ["cx", "cy"], oa = ["x", "y"], aa = /* @__PURE__ */ Ko(() => /* @__PURE__ */ v("hr", null, null, -1)), ia = /* @__PURE__ */ V({
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
    const t = e, n = A(), { width: s, height: r } = Me(n), { axises: o, datasets: c } = Ae({
      type: "line",
      data: Q(t).datasets,
      axises: Q(t).axises
    }), i = P(
      () => {
        var a, f, _, y, h, d;
        return (f = (a = o.value) == null ? void 0 : a.x) != null && f.metrics && ((y = (_ = o.value) == null ? void 0 : _.y) != null && y.metrics) && r.value && r.value - t.options.offset.y > 0 && s.value && s.value - t.options.offset.x > 0 ? `
  M ${t.options.offset.x} 0
  L ${t.options.offset.x} ${r.value - t.options.offset.y}
  L ${s.value} ${r.value - t.options.offset.y}
  ${(h = t.options.grid) != null && h.includes("x") ? `${o.value.x.metrics.map(
          ($) => `
              M ${$.normalized * (s.value - t.options.offset.x) + t.options.offset.x} 0
              V ${r.value - t.options.offset.y}
            `
        ).join("")}` : ""}
  ${(d = t.options.grid) != null && d.includes("y") ? `${o.value.y.metrics.map(
          ($) => `
              M ${t.options.offset.x} ${(1 - $.normalized) * (r.value - t.options.offset.y)}
              H ${s.value}
            `
        ).join(`
`)}` : ""}
` : "";
      }
    ), u = P(
      () => i.value && c ? c.value.map((a) => ({
        ...a,
        path: `
            ${a.series.map(
          (f, _) => _ === 0 ? `M ${f.x.normalized * (s.value - t.options.offset.x) + t.options.offset.x} ${(1 - f.y.normalized) * (r.value - t.options.offset.y)}` : t.options.curve === "smooth" ? _ === 1 ? `C ${a.series[_ - 1].x.normalized * (s.value - t.options.offset.x) + t.options.offset.x + s.value / a.series.length * t.options.radius} ${(1 - a.series[_ - 1].y.normalized) * (r.value - t.options.offset.y)} ${f.x.normalized * (s.value - t.options.offset.x) + t.options.offset.x - s.value / a.series.length * t.options.radius} ${(1 - f.y.normalized) * (r.value - t.options.offset.y)} ${f.x.normalized * (s.value - t.options.offset.x) + t.options.offset.x} ${(1 - f.y.normalized) * (r.value - t.options.offset.y)}` : `S ${f.x.normalized * (s.value - t.options.offset.x) + t.options.offset.x - s.value / a.series.length * t.options.radius} ${(1 - f.y.normalized) * (r.value - t.options.offset.y)} ${f.x.normalized * (s.value - t.options.offset.x) + t.options.offset.x} ${(1 - f.y.normalized) * (r.value - t.options.offset.y)}` : `L ${f.x.normalized * (s.value - t.options.offset.x) + t.options.offset.x} ${(1 - f.y.normalized) * (r.value - t.options.offset.y)}`
        ).join(`
`)}`
      })) : []
    );
    return (a, f) => (g(), b("div", {
      ref_key: "wrapperRef$",
      ref: n,
      class: p(a.$style["chart-container"])
    }, [
      E(je, {
        height: l(r),
        width: l(s)
      }, {
        defs: I(() => []),
        path: I(() => [
          v("g", {
            id: "chart-group-axises",
            class: p([a.$style["chart-group-axises"]])
          }, [
            v("path", {
              d: l(i),
              class: p([a.$style["chart-axis"], a.$style.line, a.$style.path])
            }, null, 10, ea)
          ], 2),
          l(o) && l(s) && l(r) ? (g(), b("g", {
            key: 0,
            class: p([a.$style["chart-group-axises-label"]])
          }, [
            l(o).x && l(o).x.metrics ? (g(!0), b(O, { key: 0 }, C(l(o).x.metrics, (_, y) => (g(), b("text", {
              key: `axis-x--${y}`,
              x: _.normalized * (l(s) - t.options.offset.x) + t.options.offset.x,
              y: l(r) - t.options.offset.y + 20,
              class: p([a.$style["chart-axis"], a.$style.label]),
              "text-anchor": y === 0 ? "start" : y === l(o).x.metrics.length - 1 ? "end" : "middle"
            }, j(_.value), 11, ta))), 128)) : x("", !0),
            l(o).y && l(o).y.metrics ? (g(!0), b(O, { key: 1 }, C(l(o).y.metrics, (_, y) => (g(), b("text", {
              key: `axis-y--${y}`,
              x: t.options.offset.x - 10,
              y: (1 - _.normalized) * (l(r) - t.options.offset.y) + 5,
              class: p([a.$style["chart-axis"], a.$style.label]),
              "text-anchor": "end"
            }, j(_.value), 11, na))), 128)) : x("", !0)
          ], 2)) : x("", !0),
          v("g", {
            class: p([a.$style["chart-group-plots"]])
          }, [
            (g(!0), b(O, null, C(l(u), (_) => (g(), b("g", {
              key: _.label,
              class: p([a.$style["chart-area"], a.$style.line, a.$style.plot])
            }, [
              v("path", {
                d: _.path
              }, null, 8, sa)
            ], 2))), 128)),
            (g(!0), b(O, null, C(l(c), (_) => (g(), b(O, null, [
              (g(!0), b(O, null, C(_.series, (y, h) => (g(), b("g", {
                key: `chart-plot-${_.label}-plot-${h}`,
                class: p(a.$style["chart-area"])
              }, [
                v("circle", {
                  class: p([
                    a.$style.behavior,
                    a.$style["chart-area"],
                    a.$style.point,
                    a.$style.plot,
                    a.$style.clickable
                  ]),
                  cx: y.x.normalized * (l(s) - t.options.offset.x) + t.options.offset.x,
                  cy: (1 - y.y.normalized) * (l(r) - t.options.offset.y),
                  r: "50"
                }, null, 10, la),
                v("circle", {
                  class: p([a.$style["chart-area"], a.$style.point, a.$style.plot]),
                  cx: y.x.normalized * (l(s) - t.options.offset.x) + t.options.offset.x,
                  cy: (1 - y.y.normalized) * (l(r) - t.options.offset.y),
                  r: "5"
                }, null, 10, ra),
                (g(), b("foreignObject", {
                  x: y.x.normalized * (l(s) - t.options.offset.x) + t.options.offset.x - 140,
                  y: (1 - y.y.normalized) * (l(r) - t.options.offset.y) - (y.y.normalized >= 0.5 ? 0 : 220),
                  height: "220",
                  width: "280",
                  class: p([a.$style["chart-area"], a.$style["legend-container"]])
                }, [
                  E(te, {
                    class: p([a.$style["chart-area"], a.$style["legend-wrapper"]]),
                    radius: "var(--agh-ref-border-radius-500)"
                  }, {
                    default: I(() => [
                      t.options.title ? (g(), b(O, { key: 0 }, [
                        v("h1", {
                          class: p([a.$style["chart-area"], a.$style["legend-title"]])
                        }, j(l(he)(y.data, t.options.title)), 3),
                        aa
                      ], 64)) : x("", !0),
                      (g(!0), b(O, null, C(l(o), (d, $) => (g(), b(O, { key: $ }, [
                        d && y[$] ? (g(), b("div", {
                          key: 0,
                          class: p([a.$style["chart-area"], a.$style["legend-group"]])
                        }, [
                          v("label", {
                            class: p([a.$style["chart-area"], a.$style["legend-label"]])
                          }, j(d.label), 3),
                          v("p", {
                            class: p([a.$style["chart-area"], a.$style["legend-value"]])
                          }, j(y[$].value), 3)
                        ], 2)) : x("", !0)
                      ], 64))), 128))
                    ]),
                    _: 2
                  }, 1032, ["class", "radius"])
                ], 10, oa))
              ], 2))), 128))
            ], 64))), 256))
          ], 2)
        ]),
        _: 1
      }, 8, ["height", "width"])
    ], 2));
  }
}), ca = "_behavior_1sfnc_1", ua = "_clickable_1sfnc_1", da = "_disabled_1sfnc_4", fa = "_draggable_1sfnc_7", pa = "_loading_1sfnc_10", _a = "_path_1sfnc_24", ga = "_radar_1sfnc_29", ha = "_label_1sfnc_32", va = "_plot_1sfnc_85", ya = "_point_1sfnc_85", ba = "_doughnut_1sfnc_96", $a = "_bg_1sfnc_102", ma = "_round_1sfnc_106", ka = "_line_1sfnc_119", wa = {
  behavior: ca,
  clickable: ua,
  disabled: da,
  draggable: fa,
  loading: pa,
  "chart-container": "_chart-container_1sfnc_14",
  "chart-axis": "_chart-axis_1sfnc_24",
  path: _a,
  radar: ga,
  label: ha,
  "font-align--center": "_font-align--center_1sfnc_45",
  "font-align--right": "_font-align--right_1sfnc_48",
  "font-align--left": "_font-align--left_1sfnc_51",
  "box-align--center": "_box-align--center_1sfnc_54",
  "box-align--left": "_box-align--left_1sfnc_57",
  "box-align--right": "_box-align--right_1sfnc_60",
  "chart-group-plots": "_chart-group-plots_1sfnc_67",
  "chart-area": "_chart-area_1sfnc_67",
  plot: va,
  point: ya,
  doughnut: ba,
  "legend-container": "_legend-container_1sfnc_96",
  bg: $a,
  round: ma,
  line: ka,
  "legend-wrapper": "_legend-wrapper_1sfnc_147",
  "legend-group": "_legend-group_1sfnc_158",
  "legend-value": "_legend-value_1sfnc_166",
  "legend-label": "_legend-label_1sfnc_169",
  "legend-title": "_legend-title_1sfnc_173"
}, za = {
  $style: wa
}, ou = /* @__PURE__ */ q(ia, [["__cssModules", za], ["__scopeId", "data-v-7ca4eb50"]]), Oa = /* @__PURE__ */ V({
  __name: "MatrixChart",
  props: {
    axises: {},
    datasets: {},
    options: {}
  },
  setup(e) {
    const t = e, { axises: n, datasets: s } = Ae({
      type: "matrix",
      data: Q(t).datasets,
      axises: Q(t).axises
    }), r = P(() => n.value.y.step), o = R(
      () => s.value[0].series.map((_) => ({
        ..._,
        y: {
          ..._.y,
          normalized: w.round(_.y.normalized * r.value)
        }
      }))
    ), c = A(), i = A(), u = U(""), a = () => {
      if (c.value && c.value.firstElementChild) {
        const { firstElementChild: _, clientWidth: y } = c.value, h = y, d = _ == null ? void 0 : _.clientWidth;
        i.value = w.floor(h / d);
      }
    }, f = () => {
      c.value && (u.set(
        We("--matrix-border-width", c, {
          observe: !0
        }).value
      ), u() || Ue(f, 1));
    };
    return Se(c, a, { window }), Z(() => {
      f(), a();
    }), (_, y) => (g(), b("div", {
      ref_key: "containerRef$",
      ref: c,
      class: p(_.$style["chart-container"])
    }, [
      (g(!0), b(O, null, C(o.value, (h, d) => (g(), b("div", {
        class: p([
          _.$style["matrix-container"],
          i.value && d % i.value !== 0 && _.$style["matrix-container-border"]
        ]),
        key: d
      }, [
        v("label", {
          class: p(_.$style.label)
        }, j(h.x.value), 3),
        v("div", {
          class: p(_.$style["box-container"])
        }, [
          (g(!0), b(O, null, C(l(r), ($) => (g(), b("div", {
            class: p([
              _.$style.square,
              $ <= h.y.normalized ? _.$style["square-cyan"] : _.$style["square-grayscale"]
            ]),
            key: $
          }, null, 2))), 128))
        ], 2)
      ], 2))), 128))
    ], 2));
  }
}), xa = "_behavior_1k1jv_1", Sa = "_clickable_1k1jv_1", Ma = "_disabled_1k1jv_4", ja = "_draggable_1k1jv_7", Aa = "_loading_1k1jv_10", Ca = "_path_1k1jv_24", Ta = "_radar_1k1jv_29", Ba = "_label_1k1jv_32", Pa = "_plot_1k1jv_85", Ia = "_point_1k1jv_85", Ea = "_doughnut_1k1jv_96", Va = "_bg_1k1jv_102", La = "_round_1k1jv_106", qa = "_line_1k1jv_119", Ra = "_square_1k1jv_242", Fa = {
  behavior: xa,
  clickable: Sa,
  disabled: Ma,
  draggable: ja,
  loading: Aa,
  "chart-container": "_chart-container_1k1jv_14",
  "chart-axis": "_chart-axis_1k1jv_24",
  path: Ca,
  radar: Ta,
  label: Ba,
  "font-align--center": "_font-align--center_1k1jv_45",
  "font-align--right": "_font-align--right_1k1jv_48",
  "font-align--left": "_font-align--left_1k1jv_51",
  "box-align--center": "_box-align--center_1k1jv_54",
  "box-align--left": "_box-align--left_1k1jv_57",
  "box-align--right": "_box-align--right_1k1jv_60",
  "chart-group-plots": "_chart-group-plots_1k1jv_67",
  "chart-area": "_chart-area_1k1jv_67",
  plot: Pa,
  point: Ia,
  doughnut: Ea,
  "legend-container": "_legend-container_1k1jv_96",
  bg: Va,
  round: La,
  line: qa,
  "legend-wrapper": "_legend-wrapper_1k1jv_147",
  "legend-group": "_legend-group_1k1jv_158",
  "legend-value": "_legend-value_1k1jv_166",
  "legend-label": "_legend-label_1k1jv_169",
  "legend-title": "_legend-title_1k1jv_173",
  "matrix-container": "_matrix-container_1k1jv_220",
  "matrix-container-border": "_matrix-container-border_1k1jv_228",
  "box-container": "_box-container_1k1jv_238",
  square: Ra,
  "square-cyan": "_square-cyan_1k1jv_247",
  "square-grayscale": "_square-grayscale_1k1jv_250"
}, Da = {
  $style: Fa
}, au = /* @__PURE__ */ q(Oa, [["__cssModules", Da], ["__scopeId", "data-v-69fb85cf"]]), Na = ["id"], Ua = ["stdDeviation"], Ga = /* @__PURE__ */ v("feColorMatrix", {
  in: "blur",
  mode: "matrix",
  values: "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10",
  result: "mask"
}, null, -1), Wa = /* @__PURE__ */ v("feComposite", {
  in: "SourceGraphic",
  in2: "mask",
  operator: "in"
}, null, -1), gt = /* @__PURE__ */ V({
  __name: "RoundEffect",
  props: {
    id: {},
    radius: {}
  },
  setup(e) {
    const t = e;
    return (n, s) => (g(), b("filter", {
      id: t.id
    }, [
      v("feGaussianBlur", {
        stdDeviation: t.radius,
        in: "SourceGraphic",
        result: "blur"
      }, null, 8, Ua),
      Ga,
      Wa
    ], 8, Na));
  }
}), Ha = (e) => (me("data-v-5b47bbf2"), e = e(), ke(), e), Ya = ["innerHTML"], Za = { id: "chart-area-bg-mask" }, Xa = ["d"], Ja = ["d"], Qa = ["d"], Ka = ["x", "y", "height", "width"], ei = ["d"], ti = ["cx", "cy"], ni = ["cx", "cy"], si = ["x", "y"], li = /* @__PURE__ */ Ha(() => /* @__PURE__ */ v("hr", null, null, -1)), ri = /* @__PURE__ */ V({
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
    const t = e, n = A(), { width: s, height: r } = Me(n), { axises: o, datasets: c } = Ae({
      type: "radar",
      data: Q(t).datasets,
      axises: Q(t).axises
    }), i = P(
      () => w.clamp(
        w.min(s.value - t.options.offset.x, r.value - t.options.offset.y) / 2,
        0,
        1 / 0
      )
    ), u = P(() => ({
      x: s.value / 2,
      y: r.value / 2
    })), a = R(
      () => {
        var d, $;
        return i.value > 0 && (($ = (d = o.value) == null ? void 0 : d.x) != null && $.metrics) ? `
      ${o.value.x.metrics.map(
          (m, k) => `${k === 0 ? "M" : "L"} ${u.value.x + i.value * w.cos(w.rad(m.normalized * 360 - 90))} ${u.value.y + i.value * w.sin(w.rad(m.normalized * 360 - 90))}`
        ).join(" ")} Z
      ` : "";
      }
    ), f = R(
      () => a.value && c.value ? c.value.map((d) => ({
        ...d,
        path: `${d.series.map(
          ($, m) => `${m === 0 ? "M" : "L"} ${u.value.x + i.value * $.y.normalized * w.cos(w.rad($.x.normalized * 360 - 90))} ${u.value.y + i.value * $.y.normalized * w.sin(w.rad($.x.normalized * 360 - 90))}`
        ).join(" ")} Z`
      })) : []
    ), _ = P(
      () => i.value > 0 && o.value.x.metrics ? `M ${u.value.x} ${u.value.y}
      ${o.value.x.metrics.map(
        (d) => `L ${u.value.x + i.value * w.cos(w.rad(d.normalized * 360 - 90))} ${u.value.y + i.value * w.sin(w.rad(d.normalized * 360 - 90))}
            M ${u.value.x} ${u.value.y}`
      ).join(`
`)}
      Z` : ""
    ), y = U(""), h = () => {
      n.value && (y.set(
        We("--chart-bg-fill-svg", n, {
          observe: !0
        }).value
      ), y() || Ue(h, 1));
    };
    return Z(() => {
      h();
    }), (d, $) => (g(), b("div", {
      ref_key: "wrapperRef$",
      ref: n,
      class: p(d.$style["chart-container"])
    }, [
      E(je, {
        height: l(r),
        width: l(s)
      }, {
        defs: I(() => [
          E(gt, {
            id: "chart-area-bg-round",
            radius: 6
          }),
          E(gt, {
            id: "chart-area-plot-round",
            radius: 3
          }),
          v("g", {
            innerHTML: l(y)()
          }, null, 8, Ya),
          v("mask", Za, [
            v("path", {
              d: a.value,
              class: p([
                d.$style["chart-area"],
                d.$style.radar,
                d.$style.bg,
                {
                  [d.$style.round]: t.options.round
                }
              ]),
              fill: "#fff"
            }, null, 10, Xa)
          ])
        ]),
        path: I(() => [
          v("path", {
            d: a.value,
            class: p([
              d.$style["chart-area"],
              d.$style.radar,
              d.$style.bg,
              {
                [d.$style.round]: t.options.round
              }
            ])
          }, null, 10, Ja),
          v("g", {
            id: "chart-group-axises",
            class: p([d.$style["chart-group-axises"]]),
            mask: "url(#chart-area-bg-mask)"
          }, [
            v("path", {
              d: l(_),
              class: p([d.$style["chart-axis"], d.$style.radar, d.$style.path])
            }, null, 10, Qa)
          ], 2),
          l(o) ? (g(), b("g", {
            key: 0,
            class: p([d.$style["chart-group-axises-label"]])
          }, [
            (g(!0), b(O, null, C(l(o).x.metrics, (m) => (g(), b("foreignObject", {
              key: m.value,
              x: l(u).x + l(i) * l(w).cos(l(w).rad(m.normalized * 360 - 90)) - (m.normalized % 0.5 === 0 ? l(i) / 2 : m.normalized > 0.5 ? l(i) : 0),
              y: l(u).y + l(i) * 1.1 * l(w).sin(l(w).rad(m.normalized * 360 - 90)) - l(i) / 6,
              height: l(i) / 3,
              width: l(i),
              class: p([d.$style["chart-axis"], d.$style.radar, d.$style["label-wrapper"]])
            }, [
              v("p", {
                class: p(["font-bold", [
                  d.$style["chart-axis"],
                  d.$style.radar,
                  d.$style.label,
                  m.normalized % 0.5 === 0 ? d.$style["font-align--center"] : m.normalized < 0.5 ? d.$style["font-align--left"] : d.$style["font-align--right"],
                  m.normalized % 0.5 === 0 ? d.$style["box-align--center"] : m.normalized < 0.5 ? d.$style["box-align--left"] : d.$style["box-align--right"]
                ]])
              }, j(m.value), 3)
            ], 10, Ka))), 128))
          ], 2)) : x("", !0),
          v("g", {
            class: p([d.$style["chart-group-plots"]])
          }, [
            (g(!0), b(O, null, C(f.value, (m) => (g(), b("g", {
              key: m.label,
              class: p([d.$style["chart-area"], d.$style.radar, d.$style.plot])
            }, [
              v("path", {
                d: m.path,
                class: p([
                  {
                    [d.$style.round]: t.options.round
                  }
                ])
              }, null, 10, ei)
            ], 2))), 128))
          ], 2),
          (g(!0), b(O, null, C(l(c), (m) => (g(), b("g", {
            key: m.label,
            class: p([d.$style["chart-area-label"]])
          }, [
            (g(!0), b(O, null, C(m.series, (k, L) => (g(), b("g", {
              key: `plot-${L}`,
              class: p(d.$style["chart-area"])
            }, [
              v("circle", {
                class: p([
                  d.$style.behavior,
                  d.$style["chart-area"],
                  d.$style.point,
                  d.$style.plot,
                  d.$style.clickable
                ]),
                cx: l(u).x + l(i) * k.y.normalized * l(w).cos(l(w).rad(k.x.normalized * 360 - 90)),
                cy: l(u).y + l(i) * k.y.normalized * l(w).sin(l(w).rad(k.x.normalized * 360 - 90)),
                r: "10"
              }, null, 10, ti),
              v("circle", {
                class: p([d.$style["chart-area"], d.$style.radar, d.$style.point, d.$style.plot]),
                cx: l(u).x + l(i) * k.y.normalized * l(w).cos(l(w).rad(k.x.normalized * 360 - 90)),
                cy: l(u).y + l(i) * k.y.normalized * l(w).sin(l(w).rad(k.x.normalized * 360 - 90)),
                r: "5"
              }, null, 10, ni),
              (g(), b("foreignObject", {
                x: l(u).x + l(i) * k.y.normalized * l(w).cos(l(w).rad(k.x.normalized * 360 - 90)) - 130,
                y: l(u).y + l(i) * k.y.normalized * l(w).sin(l(w).rad(k.x.normalized * 360 - 90)),
                height: "200",
                width: "260",
                class: p([d.$style["chart-area"], d.$style["legend-container"]])
              }, [
                E(te, {
                  class: p([d.$style["chart-area"], d.$style["legend-wrapper"]]),
                  radius: "var(--agh-ref-border-radius-500)"
                }, {
                  default: I(() => [
                    t.options.title ? (g(), b(O, { key: 0 }, [
                      v("h1", {
                        class: p([d.$style["chart-area"], d.$style["legend-title"], d.$style.radar])
                      }, [
                        v("span", null, j(k.x.value), 1),
                        v("span", {
                          class: p(d.$style["legend-value"])
                        }, j(k.y.value), 3)
                      ], 2),
                      li
                    ], 64)) : x("", !0),
                    (g(!0), b(O, null, C(l(o), (T, D) => (g(), b(O, { key: D }, [
                      !/(x|y)/.test(D) && T && k[D] ? (g(), b("div", {
                        key: 0,
                        class: p([d.$style["chart-area"], d.$style["legend-group"], d.$style.radar])
                      }, [
                        v("p", {
                          class: p([d.$style["chart-area"], d.$style["legend-value"]])
                        }, j(k[D].value), 3),
                        v("label", {
                          class: p([d.$style["chart-area"], d.$style["legend-label"]])
                        }, j(T.label), 3)
                      ], 2)) : x("", !0)
                    ], 64))), 128))
                  ]),
                  _: 2
                }, 1032, ["class", "radius"])
              ], 10, si))
            ], 2))), 128))
          ], 2))), 128))
        ]),
        _: 1
      }, 8, ["height", "width"])
    ], 2));
  }
}), oi = "_behavior_1bxlz_1", ai = "_clickable_1bxlz_1", ii = "_disabled_1bxlz_4", ci = "_draggable_1bxlz_7", ui = "_loading_1bxlz_10", di = "_path_1bxlz_24", fi = "_radar_1bxlz_29", pi = "_label_1bxlz_32", _i = "_plot_1bxlz_85", gi = "_point_1bxlz_85", hi = "_doughnut_1bxlz_96", vi = "_bg_1bxlz_102", yi = "_round_1bxlz_106", bi = "_line_1bxlz_119", $i = {
  behavior: oi,
  clickable: ai,
  disabled: ii,
  draggable: ci,
  loading: ui,
  "chart-container": "_chart-container_1bxlz_14",
  "chart-axis": "_chart-axis_1bxlz_24",
  path: di,
  radar: fi,
  label: pi,
  "font-align--center": "_font-align--center_1bxlz_45",
  "font-align--right": "_font-align--right_1bxlz_48",
  "font-align--left": "_font-align--left_1bxlz_51",
  "box-align--center": "_box-align--center_1bxlz_54",
  "box-align--left": "_box-align--left_1bxlz_57",
  "box-align--right": "_box-align--right_1bxlz_60",
  "chart-group-plots": "_chart-group-plots_1bxlz_67",
  "chart-area": "_chart-area_1bxlz_67",
  plot: _i,
  point: gi,
  doughnut: hi,
  "legend-container": "_legend-container_1bxlz_96",
  bg: vi,
  round: yi,
  line: bi,
  "legend-wrapper": "_legend-wrapper_1bxlz_147",
  "legend-group": "_legend-group_1bxlz_158",
  "legend-value": "_legend-value_1bxlz_166",
  "legend-label": "_legend-label_1bxlz_169",
  "legend-title": "_legend-title_1bxlz_173"
}, mi = {
  $style: $i
}, iu = /* @__PURE__ */ q(ri, [["__cssModules", mi], ["__scopeId", "data-v-5b47bbf2"]]);
function Yt(e) {
  return mt() ? (kt(e), !0) : !1;
}
function be(e) {
  return typeof e == "function" ? e() : l(e);
}
const Zt = typeof window < "u", Ye = () => {
}, Ie = /* @__PURE__ */ ki();
function ki() {
  var e;
  return Zt && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && /* @__PURE__ */ /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
const ht = {
  mounted: "mounted",
  updated: "updated",
  unmounted: "unmounted"
};
function wi(...e) {
  if (e.length !== 1)
    return cn(...e);
  const t = e[0];
  return typeof t == "function" ? $t(un(() => ({ get: t, set: Ye }))) : A(t);
}
function le(e) {
  var t;
  const n = be(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Xt = Zt ? window : void 0;
function fe(...e) {
  let t, n, s, r;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, s, r] = e, t = Xt) : [t, n, s, r] = e, !t)
    return Ye;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const o = [], c = () => {
    o.forEach((f) => f()), o.length = 0;
  }, i = (f, _, y, h) => (f.addEventListener(_, y, h), () => f.removeEventListener(_, y, h)), u = W(
    () => [le(t), be(r)],
    ([f, _]) => {
      c(), f && o.push(
        ...n.flatMap((y) => s.map((h) => i(f, y, h, _)))
      );
    },
    { immediate: !0, flush: "post" }
  ), a = () => {
    u(), c();
  };
  return Yt(a), a;
}
let vt = !1;
function yt(e, t, n = {}) {
  const { window: s = Xt, ignore: r = [], capture: o = !0, detectIframe: c = !1 } = n;
  if (!s)
    return;
  Ie && !vt && (vt = !0, Array.from(s.document.body.children).forEach((y) => y.addEventListener("click", Ye)));
  let i = !0;
  const u = (y) => r.some((h) => {
    if (typeof h == "string")
      return Array.from(s.document.querySelectorAll(h)).some((d) => d === y.target || y.composedPath().includes(d));
    {
      const d = le(h);
      return d && (y.target === d || y.composedPath().includes(d));
    }
  }), f = [
    fe(s, "click", (y) => {
      const h = le(e);
      if (!(!h || h === y.target || y.composedPath().includes(h))) {
        if (y.detail === 0 && (i = !u(y)), !i) {
          i = !0;
          return;
        }
        t(y);
      }
    }, { passive: !0, capture: o }),
    fe(s, "pointerdown", (y) => {
      const h = le(e);
      h && (i = !y.composedPath().includes(h) && !u(y));
    }, { passive: !0 }),
    c && fe(s, "blur", (y) => {
      setTimeout(() => {
        var h;
        const d = le(e);
        ((h = s.document.activeElement) == null ? void 0 : h.tagName) === "IFRAME" && !(d != null && d.contains(s.document.activeElement)) && t(y);
      }, 0);
    })
  ].filter(Boolean);
  return () => f.forEach((y) => y());
}
const Ee = {
  [ht.mounted](e, t) {
    const n = !t.modifiers.bubble;
    if (typeof t.value == "function")
      e.__onClickOutside_stop = yt(e, t.value, { capture: n });
    else {
      const [s, r] = t.value;
      e.__onClickOutside_stop = yt(e, s, Object.assign({ capture: n }, r));
    }
  },
  [ht.unmounted](e) {
    e.__onClickOutside_stop();
  }
};
function Jt(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
    return !0;
  {
    const n = e.parentNode;
    return !n || n.tagName === "BODY" ? !1 : Jt(n);
  }
}
function zi(e) {
  const t = e || window.event, n = t.target;
  return Jt(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.preventDefault(), !1);
}
function Oi(e, t = !1) {
  const n = A(t);
  let s = null, r;
  W(wi(e), (i) => {
    if (i) {
      const u = i;
      r = u.style.overflow, n.value && (u.style.overflow = "hidden");
    }
  }, {
    immediate: !0
  });
  const o = () => {
    const i = be(e);
    !i || n.value || (Ie && (s = fe(
      i,
      "touchmove",
      (u) => {
        zi(u);
      },
      { passive: !1 }
    )), i.style.overflow = "hidden", n.value = !0);
  }, c = () => {
    const i = be(e);
    !i || !n.value || (Ie && (s == null || s()), i.style.overflow = r, n.value = !1);
  };
  return Yt(c), R({
    get() {
      return n.value;
    },
    set(i) {
      i ? o() : c();
    }
  });
}
function xi() {
  let e = !1;
  const t = A(!1);
  return (n, s) => {
    if (t.value = s.value, e)
      return;
    e = !0;
    const r = Oi(n, s.value);
    W(t, (o) => r.value = o);
  };
}
xi();
const Si = ["onClick"], Mi = /* @__PURE__ */ V({
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
    const n = e, s = A(), r = P(
      () => ge(
        J(Ge(n.options, n.groupBy ?? "")).map(([a, f]) => [
          a === "undefined" ? "" : a,
          f.map(
            (_) => U({
              ..._,
              selected: !!(n.multiple ? ee(n.modelValue, n.fields.key).includes(N(_, n.fields.key)) : N(_, n.fields.key) === N(n.modelValue, n.fields.key))
            })
          )
        ])
      )
    ), o = U(!1), c = () => {
      if (s.value) {
        const { scrollHeight: a, clientHeight: f } = s.value;
        o.set(a > f + 1);
      }
    }, i = (a) => {
      a.update((f) => ({
        ...f,
        selected: !f.selected
      })), n.multiple ? t(
        "update:modelValue",
        Pe(
          ee(
            r.value,
            (f) => f.map((_) => _()).filter((_) => _.selected)
          )
        )
      ) : t("update:modelValue", a());
    }, u = () => {
      n.multiple ? t("update:modelValue", []) : t("update:modelValue", {});
    };
    return Se(s, c, {
      window
    }), Z(() => {
      c();
    }), (a, f) => (g(), F(te, {
      class: p([
        a.$style["menu-container"],
        {
          [a.$style.classify]: n.groupBy
        }
      ]),
      radius: "var(--agh-ref-border-radius-500)"
    }, {
      default: I(() => [
        n.label || n.multiple ? (g(), b("header", {
          key: 0,
          class: p(a.$style["menu-header"])
        }, [
          v("h1", {
            class: p(a.$style.title)
          }, j(n.label), 3),
          n.multiple ? (g(), F(ye, {
            key: 0,
            class: p(a.$style.button),
            label: "Clear Selection",
            icon: "fa6-solid:eraser",
            variant: "text",
            onClick: f[0] || (f[0] = (_) => u())
          }, null, 8, ["class"])) : x("", !0)
        ], 2)) : x("", !0),
        v("div", {
          ref_key: "wrapperRef$",
          ref: s,
          class: p([
            a.$style["menu-wrapper"],
            {
              [a.$style.overflowed]: l(o)()
            }
          ])
        }, [
          (g(!0), b(O, null, C(l(r), (_, y) => (g(), b("div", {
            key: y,
            class: p([
              a.$style["menu-group"],
              {
                [a.$style.classify]: n.groupBy
              }
            ])
          }, [
            y ? (g(), b("label", {
              key: 0,
              class: p(a.$style["menu-group-label"]),
              name: ""
            }, j(y), 3)) : x("", !0),
            (g(!0), b(O, null, C(_, (h, d) => (g(), b("div", {
              key: `option-${d}`,
              class: p([
                a.$style["menu-option"],
                a.$style.behavior,
                a.$style.clickable,
                {
                  [a.$style.selected]: h().selected,
                  [a.$style.multiple]: n.multiple
                }
              ]),
              onClick: ($) => i(h)
            }, [
              n.multiple ? (g(), F(l(ae), {
                key: 0,
                class: p(a.$style["menu-option-icon"]),
                icon: h().selected ? "fa6-solid:square-check" : "fa6-regular:square"
              }, null, 8, ["class", "icon"])) : x("", !0),
              n.fields.icon ? (g(), F(l(ae), {
                key: 1,
                class: p(a.$style["menu-option-icon"]),
                icon: String(l(N)(h(), n.fields.icon))
              }, null, 8, ["class", "icon"])) : x("", !0),
              v("div", {
                class: p(a.$style["menu-option-group"])
              }, [
                n.fields.title ? x("", !0) : (g(), b("p", {
                  key: 0,
                  class: p(a.$style["menu-field"])
                }, j(l(N)(h(), n.fields.key)), 3)),
                (g(!0), b(O, null, C(l(Gt)(n.fields, ["key", "icon"]), ($) => (g(), b(O, {
                  key: `option-field-${$}`
                }, [
                  $ ? (g(), b("p", {
                    key: 0,
                    class: p(a.$style["menu-field"])
                  }, j(l(he)(h(), $)), 3)) : x("", !0)
                ], 64))), 128))
              ], 2)
            ], 10, Si))), 128))
          ], 2))), 128))
        ], 2)
      ]),
      _: 1
    }, 8, ["class", "radius"]));
  }
}), ji = "_behavior_1k2c6_1", Ai = "_clickable_1k2c6_1", Ci = "_disabled_1k2c6_4", Ti = "_draggable_1k2c6_7", Bi = "_loading_1k2c6_10", Pi = "_classify_1k2c6_29", Ii = "_title_1k2c6_47", Ei = "_button_1k2c6_50", Vi = "_overflowed_1k2c6_77", Li = "_hover_1k2c6_91", qi = "_selected_1k2c6_95", Ri = "_multiple_1k2c6_99", Fi = {
  behavior: ji,
  clickable: Ai,
  disabled: Ci,
  draggable: Ti,
  loading: Bi,
  "menu-container": "_menu-container_1k2c6_14",
  classify: Pi,
  "menu-header": "_menu-header_1k2c6_32",
  title: Ii,
  button: Ei,
  "menu-wrapper": "_menu-wrapper_1k2c6_53",
  overflowed: Vi,
  "menu-option": "_menu-option_1k2c6_81",
  hover: Li,
  selected: qi,
  multiple: Ri,
  "menu-field": "_menu-field_1k2c6_102",
  "menu-option-group": "_menu-option-group_1k2c6_108",
  "menu-group": "_menu-group_1k2c6_122",
  "menu-group-label": "_menu-group-label_1k2c6_144"
}, Di = {
  $style: Fi
}, $e = /* @__PURE__ */ q(Mi, [["__cssModules", Di], ["__scopeId", "data-v-29c13de6"]]), Ni = /* @__PURE__ */ V({
  __name: "DropDown",
  props: {
    fields: {},
    modelValue: {},
    items: { default: () => [] },
    disabled: { type: Boolean },
    level: { default: "primary" },
    size: { default: "small" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, s = R({
      get: () => n.modelValue,
      set: (o) => (r.set(!0), t("update:modelValue", o))
    }), r = U(!0);
    return (o, c) => Be((g(), b("div", {
      class: p([o.$style["dropdown-container"], o.$style[o.size]])
    }, [
      E(ye, {
        disabled: n.disabled,
        label: l(N)(n.modelValue, n.fields.key),
        icon: l(r)() ? "fa6-solid:chevron-down" : "fa6-solid:chevron-up",
        clicked: !l(r)(),
        level: n.level,
        size: n.size,
        variant: n.size === "small" ? "rounded" : "rect",
        class: p([o.$style["dropdown-button"], o.$style[o.size]]),
        onClick: c[0] || (c[0] = (i) => l(r).update((u) => !u)),
        type: "search"
      }, null, 8, ["disabled", "label", "icon", "clicked", "level", "size", "variant", "class"]),
      o.items.length > 0 && !l(r)() ? (g(), F($e, {
        key: 0,
        class: p(o.$style["dropdown-menu"]),
        options: o.items,
        fields: n.fields,
        modelValue: s.value,
        "onUpdate:modelValue": c[1] || (c[1] = (i) => s.value = i)
      }, null, 8, ["class", "options", "fields", "modelValue"])) : x("", !0)
    ], 2)), [
      [l(Ee), () => l(r).set(!0)]
    ]);
  }
}), Ui = "_large_184z5_7", Gi = {
  "dropdown-container": "_dropdown-container_184z5_1",
  large: Ui,
  "dropdown-menu": "_dropdown-menu_184z5_11",
  "dropdown-button": "_dropdown-button_184z5_11"
}, Wi = {
  $style: Gi
}, cu = /* @__PURE__ */ q(Ni, [["__cssModules", Wi], ["__scopeId", "data-v-89c03d44"]]), Hi = ["height", "width"], Yi = /* @__PURE__ */ v("feFlood", {
  "flood-opacity": "0",
  result: "BackgroundImageFix"
}, null, -1), Zi = /* @__PURE__ */ v("feBlend", {
  in: "SourceGraphic",
  in2: "BackgroundImageFix",
  result: "shape"
}, null, -1), Xi = /* @__PURE__ */ v("feColorMatrix", {
  in: "SourceAlpha",
  result: "hardAlpha",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}, null, -1), Ji = /* @__PURE__ */ v("feOffset", {
  dx: "1",
  dy: "1"
}, null, -1), Qi = /* @__PURE__ */ v("feGaussianBlur", { stdDeviation: "1" }, null, -1), Ki = /* @__PURE__ */ v("feComposite", {
  in2: "hardAlpha",
  k2: "-1",
  k3: "1",
  operator: "arithmetic"
}, null, -1), ec = /* @__PURE__ */ v("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" }, null, -1), tc = /* @__PURE__ */ v("feBlend", {
  in2: "shape",
  result: "effect-innerShadow-1"
}, null, -1), nc = /* @__PURE__ */ v("feColorMatrix", {
  in: "SourceAlpha",
  result: "hardAlpha",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}, null, -1), sc = /* @__PURE__ */ v("feOffset", {
  dx: "2",
  dy: "3"
}, null, -1), lc = /* @__PURE__ */ v("feGaussianBlur", { stdDeviation: "1.5" }, null, -1), rc = /* @__PURE__ */ v("feComposite", {
  in2: "hardAlpha",
  k2: "-1",
  k3: "1",
  operator: "arithmetic"
}, null, -1), oc = /* @__PURE__ */ v("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.11 0" }, null, -1), ac = /* @__PURE__ */ v("feBlend", {
  in2: "effect-innerShadow-1",
  result: "effect-innerShadow2"
}, null, -1), ic = /* @__PURE__ */ v("feColorMatrix", {
  in: "SourceAlpha",
  result: "hardAlpha",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}, null, -1), cc = /* @__PURE__ */ v("feOffset", {
  dx: "5",
  dy: "6"
}, null, -1), uc = /* @__PURE__ */ v("feGaussianBlur", { stdDeviation: "2" }, null, -1), dc = /* @__PURE__ */ v("feComposite", {
  in2: "hardAlpha",
  k2: "-1",
  k3: "1",
  operator: "arithmetic"
}, null, -1), fc = /* @__PURE__ */ v("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" }, null, -1), pc = /* @__PURE__ */ v("feBlend", {
  in2: "effect-innerShadow2",
  result: "effect-innerShadow3"
}, null, -1), _c = /* @__PURE__ */ v("feColorMatrix", {
  in: "SourceAlpha",
  result: "hardAlpha",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}, null, -1), gc = /* @__PURE__ */ v("feOffset", {
  dx: "8",
  dy: "10"
}, null, -1), hc = /* @__PURE__ */ v("feGaussianBlur", { stdDeviation: "2.5" }, null, -1), vc = /* @__PURE__ */ v("feComposite", {
  in2: "hardAlpha",
  k2: "-1",
  k3: "1",
  operator: "arithmetic"
}, null, -1), yc = /* @__PURE__ */ v("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0" }, null, -1), bc = /* @__PURE__ */ v("feBlend", {
  in2: "effect-innerShadow3",
  result: "effect-innerShadow4"
}, null, -1), $c = [
  Yi,
  Zi,
  Xi,
  Ji,
  Qi,
  Ki,
  ec,
  tc,
  nc,
  sc,
  lc,
  rc,
  oc,
  ac,
  ic,
  cc,
  uc,
  dc,
  fc,
  pc,
  _c,
  gc,
  hc,
  vc,
  yc,
  bc
], mc = /* @__PURE__ */ V({
  __name: "InnerShadowDeco",
  props: {
    height: {},
    width: {}
  },
  setup(e) {
    const t = e;
    return (n, s) => (g(), b("filter", {
      id: "effects--inner-shadow--deco",
      height: t.height,
      width: t.width,
      x: "0",
      y: "0",
      "color-interpolation-filters": "sRGB",
      filterUnits: "userSpaceOnUse"
    }, $c, 8, Hi));
  }
}), kc = /* @__PURE__ */ V({
  __name: "ProgressBar",
  props: {
    value: { default: 0 },
    variant: { default: "concave" },
    thickness: { default: 12 }
  },
  setup(e) {
    const t = e;
    return (n, s) => (g(), b("div", {
      class: p([n.$style["progress-container"], n.$style[t.variant]])
    }, [
      v("div", {
        class: p([n.$style["progress-groove"], n.$style[t.variant]])
      }, [
        v("div", {
          class: p(n.$style["progress-value"]),
          style: dn({ width: `${t.value * 100}%` })
        }, null, 6)
      ], 2)
    ], 2));
  }
}), wc = "_concave_vuh1m_23", zc = "_convex_vuh1m_55", Oc = {
  "progress-container": "_progress-container_vuh1m_1",
  "progress-groove": "_progress-groove_vuh1m_11",
  "progress-value": "_progress-value_vuh1m_11",
  concave: wc,
  "progress-content-wrapper": "_progress-content-wrapper_vuh1m_35",
  convex: zc
}, xc = {
  $style: Oc
}, uu = /* @__PURE__ */ q(kc, [["__cssModules", xc], ["__scopeId", "data-v-d1ec5a1d"]]), Ze = (e) => (me("data-v-017d9edf"), e = e(), ke(), e), Sc = ["innerHTML"], Mc = ["cx", "cy", "r"], jc = ["cx", "cy", "r"], Ac = /* @__PURE__ */ Ze(() => /* @__PURE__ */ v("mask", { id: "progress-groove-mask" }, [
  /* @__PURE__ */ v("use", {
    href: "#progress-groove-outer",
    fill: "#fff"
  }),
  /* @__PURE__ */ v("use", {
    href: "#progress-groove-inner",
    fill: "#000"
  })
], -1)), Cc = /* @__PURE__ */ Ze(() => /* @__PURE__ */ v("use", {
  href: "#progress-groove-outer",
  mask: "url(#progress-groove-mask)"
}, null, -1)), Tc = [
  Cc
], Bc = ["cx", "cy", "r", "stroke-dashoffset", "stroke-dasharray", "stroke-width"], Pc = /* @__PURE__ */ Ze(() => /* @__PURE__ */ v("clipPath", { id: "progress-content-clip" }, [
  /* @__PURE__ */ v("use", { href: "#progress-groove-inner" })
], -1)), Ic = { "clip-path": "url(#progress-content-clip)" }, Ec = ["height", "width", "x", "y"], Vc = /* @__PURE__ */ V({
  __name: "ProgressCircle",
  props: {
    value: { default: 0 },
    variant: { default: "concave" },
    thickness: { default: 12 }
  },
  setup(e) {
    const t = e, n = A(), { width: s, height: r } = Me(n), o = P(
      () => w.clamp(w.min(s.value, r.value) / 2 - t.thickness / 2, 0, 1 / 0)
    ), c = P(() => o.value * 2 * w.PI), i = P(() => ({
      x: s.value / 2,
      y: r.value / 2
    })), u = U(""), a = () => {
      n.value && t.variant === "convex" && (u.set(
        We("--progress-value-fill-gradient", n, {
          observe: !0
        }).value
      ), u() || Ue(a, 1));
    };
    return Z(() => {
      a();
    }), (f, _) => (g(), b("div", {
      ref_key: "wrapperRef$",
      ref: n,
      class: p([f.$style["progress-container"], f.$style[t.variant]])
    }, [
      E(je, {
        height: l(r),
        width: l(s)
      }, {
        defs: I(() => [
          v("g", {
            innerHTML: l(u)()
          }, null, 8, Sc),
          E(mc, {
            height: l(r),
            width: l(s)
          }, null, 8, ["height", "width"]),
          v("circle", {
            id: "progress-groove-outer",
            cx: l(i).x,
            cy: l(i).y,
            r: l(o) + t.thickness / 2
          }, null, 8, Mc),
          v("circle", {
            id: "progress-groove-inner",
            cx: l(i).x,
            cy: l(i).y,
            r: l(o) - t.thickness / 2
          }, null, 8, jc),
          Ac
        ]),
        path: I(() => [
          v("g", {
            class: p(f.$style["progress-groove"])
          }, Tc, 2),
          v("g", {
            class: p(f.$style["progress-value"])
          }, [
            v("circle", {
              cx: l(i).x,
              cy: l(i).y,
              r: l(o),
              "stroke-dashoffset": (t.value + 0.25) * l(c),
              "stroke-dasharray": `${t.value * l(c)} ${(1 - t.value) * l(c)}`,
              "stroke-width": t.thickness,
              fill: "transparent"
            }, null, 8, Bc)
          ], 2),
          Pc,
          v("g", Ic, [
            (g(), b("foreignObject", {
              height: l(o) * 2,
              width: l(o) * 2,
              x: l(i).x - l(o),
              y: l(i).y - l(o)
            }, [
              v("div", {
                class: p(f.$style["progress-content-wrapper"])
              }, [
                v("label", null, j((t.value * 100).toFixed(0)) + "%", 1)
              ], 2)
            ], 8, Ec))
          ])
        ]),
        _: 1
      }, 8, ["height", "width"])
    ], 2));
  }
}), Lc = "_concave_1jatd_23", qc = "_convex_1jatd_55", Rc = {
  "progress-container": "_progress-container_1jatd_1",
  "progress-groove": "_progress-groove_1jatd_11",
  "progress-value": "_progress-value_1jatd_11",
  concave: Lc,
  "progress-content-wrapper": "_progress-content-wrapper_1jatd_35",
  convex: qc
}, Fc = {
  $style: Rc
}, du = /* @__PURE__ */ q(Vc, [["__cssModules", Fc], ["__scopeId", "data-v-017d9edf"]]), Dc = (e, t) => {
  var n;
  if (t) {
    const s = (n = J(Gt(e, "valid")).find(([r, o]) => o && t[r])) == null ? void 0 : n[0];
    return s ? t[s] ?? null : null;
  }
  return null;
}, Nc = ["value"], Uc = ["for"], Gc = /* @__PURE__ */ V({
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
    const n = e, { onTrigger: s } = qe(
      (i) => {
        n.disabled ? (i.preventDefault(), i.stopPropagation()) : (c(), t("update:modelValue", i.target.value));
      },
      {
        flush: "post"
      }
    ), r = A(), o = U(""), c = () => {
      var i;
      return o.set(
        r.value ? (i = r.value) != null && i.validity.valid ? "" : Dc(r.value.validity, n.invalidMessage ?? {}) ?? r.value.validationMessage : ""
      );
    };
    return Z(() => {
      c();
    }), (i, u) => (g(), b("div", {
      class: p([
        i.$style["textfield-container"],
        {
          [i.$style[`icon-align--${n.iconAlign}`]]: n.icon || i.type === "search"
        }
      ])
    }, [
      v("input", zt({
        ref_key: "inputRef$",
        ref: r,
        class: [i.$style["textfield-input"]]
      }, n, {
        value: n.modelValue,
        onInput: u[0] || (u[0] = //@ts-ignore
        (...a) => l(s) && l(s)(...a))
      }), null, 16, Nc),
      i.type === "search" || n.icon ? (g(), F(l(ae), {
        key: 0,
        class: p([i.$style["textfield-label--icon"], i.$style.icon]),
        icon: n.icon || i.type === "search" ? "fa6-solid:magnifying-glass" : ""
      }, null, 8, ["class", "icon"])) : x("", !0),
      l(o)() ? (g(), b("label", {
        key: 1,
        for: n.name,
        class: p([i.$style["textfield-label"]])
      }, [
        E(l(ae), {
          class: p([i.$style["textfield-label--icon"]]),
          icon: "fa6-solid:circle-xmark"
        }, null, 8, ["class"]),
        v("span", {
          class: p([i.$style["textfield-label--value"]])
        }, j(l(o)()), 3)
      ], 10, Uc)) : x("", !0)
    ], 2));
  }
}), Wc = {
  "textfield-container": "_textfield-container_qhzrd_1",
  "icon-align--left": "_icon-align--left_qhzrd_9",
  "icon-align--right": "_icon-align--right_qhzrd_9",
  "textfield-input": "_textfield-input_qhzrd_17",
  "textfield-label--icon": "_textfield-label--icon_qhzrd_23",
  "textfield-label": "_textfield-label_qhzrd_23",
  "textfield-label--value": "_textfield-label--value_qhzrd_98"
}, Hc = {
  $style: Wc
}, Qt = /* @__PURE__ */ q(Gc, [["__cssModules", Hc], ["__scopeId", "data-v-784e2d65"]]), Yc = /* @__PURE__ */ V({
  __name: "SearchBar",
  props: {
    fields: {},
    modelValue: { default: "" },
    items: { default: () => [] },
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue", "select"],
  setup(e, { emit: t }) {
    const n = e, s = R({
      get: () => n.modelValue,
      set: (a) => (u(a), t("update:modelValue", a))
    }), r = A(), o = U(!1), c = U([]), i = (a) => {
      a && (t("update:modelValue", N(a, n.fields.key)), t("select", a), o.set(!0));
    }, u = (a) => {
      var f;
      c.set(
        ((f = n.items) == null ? void 0 : f.filter((_) => String(N(_, n.fields.key)).includes(a))) ?? []
      );
    };
    return W(s, u), W(r, i), (a, f) => (g(), b("div", {
      class: p(a.$style["search-bar--container"])
    }, [
      E(Qt, {
        modelValue: s.value,
        "onUpdate:modelValue": f[0] || (f[0] = (_) => s.value = _),
        class: p(a.$style["search-bar--input"]),
        disabled: n.disabled,
        onClick: f[1] || (f[1] = (_) => l(o).set(!1)),
        onFocus: f[2] || (f[2] = (_) => l(o).set(!1)),
        onBlur: f[3] || (f[3] = (_) => l(o).set(!0)),
        type: "search"
      }, null, 8, ["modelValue", "class", "disabled"]),
      s.value && l(c)().length > 0 && !l(o)() ? (g(), F($e, {
        key: 0,
        class: p(a.$style["search-bar--menu"]),
        options: l(c)(),
        fields: n.fields,
        modelValue: r.value,
        "onUpdate:modelValue": f[4] || (f[4] = (_) => r.value = _)
      }, null, 8, ["class", "options", "fields", "modelValue"])) : x("", !0)
    ], 2));
  }
}), Zc = {
  "search-bar--container": "_search-bar--container_1hygv_1",
  "search-bar--input": "_search-bar--input_1hygv_7",
  "search-bar--menu": "_search-bar--menu_1hygv_10"
}, Xc = {
  $style: Zc
}, fu = /* @__PURE__ */ q(Yc, [["__cssModules", Xc], ["__scopeId", "data-v-644d7672"]]), Jc = /* @__PURE__ */ V({
  __name: "CardList",
  props: {
    items: { default: () => [] },
    groupBy: {},
    fields: {},
    selected: {},
    modelValue: { default: "" },
    sort: {},
    filter: {},
    sortOptions: {},
    filterOptions: {}
  },
  emits: ["update:modelValue", "update:sort", "update:filter", "update:selected"],
  setup(e, { emit: t }) {
    const n = e, s = A(), r = {
      key: "detail",
      title: "{{ $.label }}",
      content: "{{ $.detail }}",
      icon: "icon"
    }, o = {
      key: "value",
      title: "{{ $.value }}"
    }, c = P(
      () => Pe(
        (n.filterOptions ?? []).map(
          (z) => Tt(ee(n.items, z.field)).map((S) => ({ ...z, value: S }))
        )
      )
    ), i = A(n.modelValue ?? ""), u = R({
      get: () => n.modelValue ?? i.value,
      set: (z) => {
        t("update:modelValue", z ?? ""), n.modelValue || (i.value = z ?? "");
      }
    }), a = A(Kl(n.sortOptions)), f = R({
      get: () => n.sort ?? a.value,
      set: (z) => {
        z && (k.set(!0), t("update:sort", z), n.sort || (a.value = z));
      }
    }), _ = A([]), y = R({
      get: () => n.filter ?? _.value,
      set: (z) => {
        t("update:filter", z ?? []), n.filter || (_.value = z ?? []);
      }
    }), h = A(), d = R({
      get: () => n.selected !== void 0 ? n.selected : h.value,
      set: (z) => {
        z && (t("update:selected", z), n.selected || (h.value = z));
      }
    }), $ = A(n.items), m = U(!0), k = U(!0), L = U(!1), T = () => {
      if (s.value) {
        const { scrollHeight: z, clientHeight: S } = s.value;
        L.set(z > S + 1);
      }
    }, D = (z) => z.update((S) => !S), Kt = (z) => {
      d.value = z;
    }, Ce = () => {
      var Te, Xe;
      const z = n.items.map(
        (X) => ({
          ...X,
          selected: N(X, n.fields.key) === N(d.value, n.fields.key)
        })
      ), S = Ql(
        z,
        (X) => N(X, n.fields.title ?? n.fields.key).includes(u.value)
      ), ne = Or(
        S,
        [((Te = f.value) == null ? void 0 : Te.field) ?? n.fields.key],
        [((Xe = f.value) == null ? void 0 : Xe.direction) ?? "asc"]
      ), B = re(y.value) ? ne : ir(
        ...ee(
          Ge(y.value, "field"),
          (X) => Pe(
            X.map(
              (Je) => ne.filter((en) => dr(en, { [Je.field]: Je.value }))
            )
          )
        ),
        ur
      );
      $.value = B;
    };
    return Se(s, T, {
      window
    }), Z(() => {
      Ce(), T();
    }), fn(() => {
      Ce(), T();
    }), W([f, y, u, d], () => {
      Ce(), T();
    }), (z, S) => (g(), F(te, {
      class: p(z.$style["list-container"]),
      purpose: "container",
      radius: "var(--agh-ref-border-radius-600)"
    }, {
      default: I(() => {
        var ne;
        return [
          v("div", {
            class: p(z.$style["list-toolbar"])
          }, [
            E(Qt, {
              modelValue: u.value,
              "onUpdate:modelValue": S[0] || (S[0] = (B) => u.value = B),
              class: p(z.$style["list-toolbar-search"]),
              type: "search"
            }, null, 8, ["modelValue", "class"]),
            n.filterOptions && !l(re)(n.filterOptions) ? Be((g(), b("div", {
              key: 0,
              class: p(z.$style["list-toolbar-tool"]),
              onKeydown: [
                S[3] || (S[3] = ue((B) => l(m).set(!0), ["esc"])),
                S[4] || (S[4] = ue((B) => l(m).set(!0), ["enter"]))
              ]
            }, [
              E(ye, {
                class: p(z.$style["list-toolbar-button"]),
                clicked: !l(m)(),
                onClick: S[1] || (S[1] = (B) => D(l(m))),
                icon: "fa6-solid:filter",
                variant: "text"
              }, null, 8, ["class", "clicked"]),
              y.value.length > 0 ? (g(), b("span", {
                key: 0,
                class: p(z.$style["list-toolbar-button-deco"])
              }, j(y.value.length), 3)) : x("", !0),
              l(m)() ? x("", !0) : (g(), F($e, {
                key: 1,
                class: p(z.$style["list-toolbar-menu"]),
                fields: o,
                options: l(c),
                multiple: !0,
                modelValue: y.value,
                "onUpdate:modelValue": S[2] || (S[2] = (B) => y.value = B),
                label: "Filter",
                "group-by": "label"
              }, null, 8, ["class", "options", "modelValue"]))
            ], 34)), [
              [l(Ee), () => l(m).set(!0)]
            ]) : x("", !0),
            n.sortOptions && !l(re)(n.sortOptions) ? Be((g(), b("div", {
              key: 1,
              class: p(z.$style["list-toolbar-tool"]),
              onKeydown: [
                S[7] || (S[7] = ue((B) => l(k).set(!0), ["esc"])),
                S[8] || (S[8] = ue((B) => l(k).set(!0), ["enter"]))
              ]
            }, [
              E(ye, {
                class: p(z.$style["list-toolbar-button"]),
                icon: ((ne = f.value) == null ? void 0 : ne.icon) ?? "fa6-solid:arrow-down-wide-short",
                clicked: !l(k)(),
                onClick: S[5] || (S[5] = (B) => D(l(k))),
                variant: "text"
              }, null, 8, ["class", "icon", "clicked"]),
              l(k)() ? x("", !0) : (g(), F($e, {
                key: 0,
                class: p(z.$style["list-toolbar-menu"]),
                fields: r,
                options: n.sortOptions,
                modelValue: f.value,
                "onUpdate:modelValue": S[6] || (S[6] = (B) => f.value = B)
              }, null, 8, ["class", "options", "modelValue"]))
            ], 34)), [
              [l(Ee), () => l(k).set(!0)]
            ]) : x("", !0)
          ], 2),
          v("div", {
            ref_key: "wrapperRef$",
            ref: s,
            class: p([
              z.$style["list-wrapper"],
              {
                [z.$style.overflowed]: l(L)()
              }
            ])
          }, [
            E(Dr, {
              items: $.value,
              "group-by": n.groupBy
            }, {
              placeholder: I(() => [
                G(z.$slots, "placeholder", {}, void 0, !0)
              ]),
              group: I((B) => [
                v("label", {
                  class: p(z.$style["list-item-label"])
                }, j(B.group), 3)
              ]),
              default: I((B) => [
                E(te, {
                  class: p(z.$style["list-item"]),
                  color: B.item.selected ? "blue" : "default",
                  clickable: !0,
                  onClick: (Te) => Kt(B.item),
                  radius: "var(--agh-ref-border-radius-400)"
                }, {
                  default: I(() => [
                    G(z.$slots, "default", {
                      item: B.item,
                      index: B.index,
                      selected: B.item.selected
                    }, void 0, !0)
                  ]),
                  _: 2
                }, 1032, ["class", "color", "onClick"])
              ]),
              _: 3
            }, 8, ["items", "group-by"])
          ], 2),
          G(z.$slots, "footer", {}, void 0, !0)
        ];
      }),
      _: 3
    }, 8, ["class"]));
  }
}), Qc = "_overflowed_10vs0_81", Kc = {
  "list-container": "_list-container_10vs0_1",
  "list-toolbar": "_list-toolbar_10vs0_11",
  "list-toolbar-search": "_list-toolbar-search_10vs0_17",
  "list-toolbar-tool": "_list-toolbar-tool_10vs0_20",
  "list-toolbar-button": "_list-toolbar-button_10vs0_23",
  "list-toolbar-button-deco": "_list-toolbar-button-deco_10vs0_26",
  "list-toolbar-menu": "_list-toolbar-menu_10vs0_45",
  "list-wrapper": "_list-wrapper_10vs0_51",
  overflowed: Qc,
  "list-item": "_list-item_10vs0_84",
  "list-item-label": "_list-item-label_10vs0_89"
}, eu = {
  $style: Kc
}, pu = /* @__PURE__ */ q(Jc, [["__cssModules", eu], ["__scopeId", "data-v-52db1428"]]);
export {
  lu as BadgeBox,
  He as BaseLink,
  Dr as BaseList,
  je as BasePoly,
  ye as ButtonBox,
  te as CardBox,
  pu as CardList,
  ru as DoughnutChart,
  cu as DropDown,
  mc as InnerShadowDeco,
  ou as LineChart,
  au as MatrixChart,
  uu as ProgressBar,
  du as ProgressCircle,
  iu as RadarChart,
  gt as RoundEffect,
  fu as SearchBar,
  $e as SelectMenu,
  Qt as TextField
};
//# sourceMappingURL=ui.component.es.js.map
