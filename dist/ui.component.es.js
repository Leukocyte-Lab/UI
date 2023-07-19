import { shallowRef as tn, watchEffect as bt, readonly as $t, getCurrentScope as mt, onScopeDispose as kt, unref as r, computed as R, watch as W, ref as A, getCurrentInstance as nn, onMounted as Z, defineComponent as E, openBlock as g, createBlock as F, resolveDynamicComponent as sn, normalizeProps as rn, guardReactiveProps as ln, withCtx as q, renderSlot as G, createElementBlock as b, Fragment as O, createCommentVNode as x, renderList as C, normalizeClass as p, createElementVNode as y, useCssVars as wt, toDisplayString as j, createTextVNode as on, mergeProps as zt, createVNode as I, reactive as an, pushScopeId as me, popScopeId as ke, toRefs as Q, toRef as cn, customRef as un, withDirectives as Be, normalizeStyle as dn, onUpdated as fn, withKeys as ue } from "vue";
import { i as pe, d as oe, g as pn, e as ie, f as _n, h as Ot, j as xt, k as gn, l as hn, o as yn, m as we, n as vn, q as Ee, r as bn, t as St, v as $n, w as mn, x as kn, y as Qe, z as Ke, A as ze, B as _e, C as Oe, D as K, E as wn, F as zn, G as On, I as Mt, J as Ve, K as H, L as xn, O as Sn, P as Mn, Q as et, R as jn, T as An, V as jt, W as At, X as Cn, Y as Tn, Z as Bn, _ as Ct, $ as Pn, a0 as qn, a1 as ge, u as Le, p as he, a2 as le, a3 as Tt, a4 as ee, M as w, b as N, s as U, a5 as Pe } from "./parser-f68503d3.js";
import { Icon as ae } from "@iconify/vue/offline";
var In = /\s/;
function En(e) {
  for (var t = e.length; t-- && In.test(e.charAt(t)); )
    ;
  return t;
}
var Vn = /^\s+/;
function Ln(e) {
  return e && e.slice(0, En(e) + 1).replace(Vn, "");
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
  e = Ln(e);
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
    var s = Jn(), l = Xn - (s - n);
    if (n = s, l > 0) {
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
const ye = es;
var ts = ye ? function(e, t) {
  return ye(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Kn(t),
    writable: !0
  });
} : ie;
const ns = ts;
var ss = Qn(ns);
const Bt = ss;
function rs(e, t) {
  for (var n = -1, s = e == null ? 0 : e.length; ++n < s && t(e[n], n, e) !== !1; )
    ;
  return e;
}
function Re(e, t, n) {
  t == "__proto__" && ye ? ye(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
var ls = Object.prototype, os = ls.hasOwnProperty;
function Pt(e, t, n) {
  var s = e[t];
  (!(os.call(e, t) && _n(s, n)) || n === void 0 && !(t in e)) && Re(e, t, n);
}
function ce(e, t, n, s) {
  var l = !n;
  n || (n = {});
  for (var o = -1, c = t.length; ++o < c; ) {
    var i = t[o], u = s ? s(n[i], e[i], i, n, e) : void 0;
    u === void 0 && (u = e[i]), l ? Re(n, i, u) : Pt(n, i, u);
  }
  return n;
}
var st = Math.max;
function qt(e, t, n) {
  return t = st(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var s = arguments, l = -1, o = st(s.length - t, 0), c = Array(o); ++l < o; )
      c[l] = s[t + l];
    l = -1;
    for (var i = Array(t + 1); ++l < t; )
      i[l] = s[l];
    return i[t] = n(c), Hn(e, this, i);
  };
}
function It(e, t) {
  return Bt(qt(e, t, ie), e + "");
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
  return Bt(qt(e, void 0, ds), e + "");
}
var ps = yn(Object.getPrototypeOf, Object);
const De = ps;
var _s = "[object Object]", gs = Function.prototype, hs = Object.prototype, Et = gs.toString, ys = hs.hasOwnProperty, vs = Et.call(Object);
function bs(e) {
  if (!we(e) || vn(e) != _s)
    return !1;
  var t = De(e);
  if (t === null)
    return !0;
  var n = ys.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Et.call(n) == vs;
}
function $s(e, t, n) {
  var s = -1, l = e.length;
  t < 0 && (t = -t > l ? 0 : l + t), n = n > l ? l : n, n < 0 && (n += l), l = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var o = Array(l); ++s < l; )
    o[s] = e[s + t];
  return o;
}
function ms(e, t) {
  return e && ce(t, Ee(t), e);
}
function ks(e, t) {
  return e && ce(t, Fe(t), e);
}
var Vt = typeof exports == "object" && exports && !exports.nodeType && exports, rt = Vt && typeof module == "object" && module && !module.nodeType && module, ws = rt && rt.exports === Vt, lt = ws ? bn.Buffer : void 0, ot = lt ? lt.allocUnsafe : void 0;
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
const Lt = Ss;
function Ms(e, t) {
  return ce(e, Lt(e), t);
}
function Rt(e) {
  return kn(e, Fe, Lt);
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
function qs(e) {
  return it ? Object(it.call(e)) : {};
}
function Is(e, t) {
  var n = t ? Ne(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var Es = "[object Boolean]", Vs = "[object Date]", Ls = "[object Map]", Rs = "[object Number]", Fs = "[object RegExp]", Ds = "[object Set]", Ns = "[object String]", Us = "[object Symbol]", Gs = "[object ArrayBuffer]", Ws = "[object DataView]", Hs = "[object Float32Array]", Ys = "[object Float64Array]", Zs = "[object Int8Array]", Xs = "[object Int16Array]", Js = "[object Int32Array]", Qs = "[object Uint8Array]", Ks = "[object Uint8ClampedArray]", er = "[object Uint16Array]", tr = "[object Uint32Array]";
function nr(e, t, n) {
  var s = e.constructor;
  switch (t) {
    case Gs:
      return Ne(e);
    case Es:
    case Vs:
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
    case er:
    case tr:
      return Is(e, n);
    case Ls:
      return new s();
    case Rs:
    case Ns:
      return new s(e);
    case Fs:
      return Ps(e);
    case Ds:
      return new s();
    case Us:
      return qs(e);
  }
}
function sr(e) {
  return typeof e.constructor == "function" && !Ot(e) ? Wn(De(e)) : {};
}
var rr = "[object Map]";
function lr(e) {
  return we(e) && ze(e) == rr;
}
var ct = _e && _e.isMap, or = ct ? Oe(ct) : lr;
const ar = or;
var ir = "[object Set]";
function cr(e) {
  return we(e) && ze(e) == ir;
}
var ut = _e && _e.isSet, ur = ut ? Oe(ut) : cr;
const dr = ur;
var fr = 1, pr = 2, _r = 4, Ft = "[object Arguments]", gr = "[object Array]", hr = "[object Boolean]", yr = "[object Date]", vr = "[object Error]", Dt = "[object Function]", br = "[object GeneratorFunction]", $r = "[object Map]", mr = "[object Number]", Nt = "[object Object]", kr = "[object RegExp]", wr = "[object Set]", zr = "[object String]", Or = "[object Symbol]", xr = "[object WeakMap]", Sr = "[object ArrayBuffer]", Mr = "[object DataView]", jr = "[object Float32Array]", Ar = "[object Float64Array]", Cr = "[object Int8Array]", Tr = "[object Int16Array]", Br = "[object Int32Array]", Pr = "[object Uint8Array]", qr = "[object Uint8ClampedArray]", Ir = "[object Uint16Array]", Er = "[object Uint32Array]", M = {};
M[Ft] = M[gr] = M[Sr] = M[Mr] = M[hr] = M[yr] = M[jr] = M[Ar] = M[Cr] = M[Tr] = M[Br] = M[$r] = M[mr] = M[Nt] = M[kr] = M[wr] = M[zr] = M[Or] = M[Pr] = M[qr] = M[Ir] = M[Er] = !0;
M[vr] = M[Dt] = M[xr] = !1;
function de(e, t, n, s, l, o) {
  var c, i = t & fr, u = t & pr, a = t & _r;
  if (n && (c = l ? n(e, s, l, o) : n(e)), c !== void 0)
    return c;
  if (!oe(e))
    return e;
  var f = K(e);
  if (f) {
    if (c = Cs(e), !i)
      return Yn(e, c);
  } else {
    var _ = ze(e), v = _ == Dt || _ == br;
    if (wn(e))
      return zs(e, i);
    if (_ == Nt || _ == Ft || v && !l) {
      if (c = u || v ? {} : sr(e), !i)
        return u ? Ms(e, ks(c, e)) : Os(e, ms(c, e));
    } else {
      if (!M[_])
        return l ? e : {};
      c = nr(e, _, i);
    }
  }
  o || (o = new zn());
  var h = o.get(e);
  if (h)
    return h;
  o.set(e, c), dr(e) ? e.forEach(function(m) {
    c.add(de(m, t, n, m, e, o));
  }) : ar(e) && e.forEach(function(m, k) {
    c.set(k, de(m, t, n, k, e, o));
  });
  var d = a ? u ? Rt : On : u ? Fe : Ee, $ = f ? void 0 : d(e);
  return rs($ || e, function(m, k) {
    $ && (k = m, m = e[k]), Pt(c, k, de(m, t, n, k, e, o));
  }), c;
}
function Vr(e, t, n, s) {
  for (var l = -1, o = e == null ? 0 : e.length; ++l < o; ) {
    var c = e[l];
    t(s, c, n(c), e);
  }
  return s;
}
function Lr(e, t, n, s) {
  return Mt(e, function(l, o, c) {
    t(s, l, n(l), c);
  }), s;
}
function Rr(e, t) {
  return function(n, s) {
    var l = K(n) ? Vr : Lr, o = t ? t() : {};
    return l(n, e, Ve(s), o);
  };
}
function Fr(e) {
  return we(e) && xt(e);
}
var Dr = "Expected a function";
function Nr(e, t, n) {
  if (typeof e != "function")
    throw new TypeError(Dr);
  return setTimeout(function() {
    e.apply(void 0, n);
  }, t);
}
var Ur = It(function(e, t, n) {
  return Nr(e, Un(t) || 0, n);
});
const Ue = Ur;
function Gr(e, t) {
  return H(t, function(n) {
    return [n, e[n]];
  });
}
function Wr(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(s) {
    n[++t] = [s, s];
  }), n;
}
var Hr = "[object Map]", Yr = "[object Set]";
function Zr(e) {
  return function(t) {
    var n = ze(t);
    return n == Hr ? xn(t) : n == Yr ? Wr(t) : Gr(t, e(t));
  };
}
var Xr = Zr(Ee);
const J = Xr;
function Jr(e, t) {
  var n = [];
  return Mt(e, function(s, l, o) {
    t(s, l, o) && n.push(s);
  }), n;
}
function Qr(e, t) {
  var n = K(e) ? Sn : Jr;
  return n(e, Ve(t));
}
function Kr(e) {
  return e && e.length ? e[0] : void 0;
}
var el = Object.prototype, tl = el.hasOwnProperty, nl = Rr(function(e, t, n) {
  tl.call(e, n) ? e[n].push(t) : Re(e, n, [t]);
});
const Ge = nl;
function sl(e, t) {
  return e > t;
}
var rl = Math.min;
function ll(e, t, n) {
  for (var s = n ? jn : An, l = e[0].length, o = e.length, c = o, i = Array(o), u = 1 / 0, a = []; c--; ) {
    var f = e[c];
    c && t && (f = H(f, Oe(t))), u = rl(f.length, u), i[c] = !n && (t || l >= 120 && f.length >= 120) ? new Mn(c && f) : void 0;
  }
  f = e[0];
  var _ = -1, v = i[0];
  e:
    for (; ++_ < l && a.length < u; ) {
      var h = f[_], d = t ? t(h) : h;
      if (h = n || h !== 0 ? h : 0, !(v ? et(v, d) : s(a, d, n))) {
        for (c = o; --c; ) {
          var $ = i[c];
          if (!($ ? et($, d) : s(e[c], d, n)))
            continue e;
        }
        v && v.push(d), a.push(h);
      }
    }
  return a;
}
function ol(e) {
  return Fr(e) ? e : [];
}
var al = It(function(e) {
  var t = jt(e), n = H(e, ol);
  return t = typeof t == "function" ? t : void 0, t && n.pop(), n.length && n[0] === e[0] ? ll(n, void 0, t) : [];
});
const il = al;
function cl(e, t) {
  return t.length < 2 ? e : At(e, $s(t, 0, -1));
}
function ul(e, t) {
  return Cn(e, t);
}
function dl(e, t) {
  return e === t || Tn(e, t, Bn(t));
}
function fl(e, t) {
  return e < t;
}
function Ut(e, t, n) {
  for (var s = -1, l = e.length; ++s < l; ) {
    var o = e[s], c = t(o);
    if (c != null && (i === void 0 ? c === c && !pe(c) : n(c, i)))
      var i = c, u = o;
  }
  return u;
}
function pl(e) {
  return e && e.length ? Ut(e, ie, sl) : void 0;
}
function _l(e) {
  return e && e.length ? Ut(e, ie, fl) : void 0;
}
function gl(e, t) {
  return t = Ct(t, e), e = cl(e, t), e == null || delete e[Pn(jt(t))];
}
function hl(e) {
  return bs(e) ? void 0 : e;
}
var yl = 1, vl = 2, bl = 4, $l = fs(function(e, t) {
  var n = {};
  if (e == null)
    return n;
  var s = !1;
  t = H(t, function(o) {
    return o = Ct(o, e), s || (s = o.length > 1), o;
  }), ce(e, Rt(e), n), s && (n = de(n, yl | vl | bl, hl));
  for (var l = t.length; l--; )
    gl(n, t[l]);
  return n;
});
const Gt = $l;
function ml(e, t) {
  var n = e.length;
  for (e.sort(t); n--; )
    e[n] = e[n].value;
  return e;
}
function kl(e, t) {
  if (e !== t) {
    var n = e !== void 0, s = e === null, l = e === e, o = pe(e), c = t !== void 0, i = t === null, u = t === t, a = pe(t);
    if (!i && !a && !o && e > t || o && c && u && !i && !a || s && c && u || !n && u || !l)
      return 1;
    if (!s && !o && !a && e < t || a && n && l && !s && !o || i && n && l || !c && l || !u)
      return -1;
  }
  return 0;
}
function wl(e, t, n) {
  for (var s = -1, l = e.criteria, o = t.criteria, c = l.length, i = n.length; ++s < c; ) {
    var u = kl(l[s], o[s]);
    if (u) {
      if (s >= i)
        return u;
      var a = n[s];
      return u * (a == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
function zl(e, t, n) {
  t.length ? t = H(t, function(o) {
    return K(o) ? function(c) {
      return At(c, o.length === 1 ? o[0] : o);
    } : o;
  }) : t = [ie];
  var s = -1;
  t = H(t, Oe(Ve));
  var l = qn(e, function(o, c, i) {
    var u = H(t, function(a) {
      return a(o);
    });
    return { criteria: u, index: ++s, value: o };
  });
  return ml(l, function(o, c) {
    return wl(o, c, n);
  });
}
function Ol(e, t, n, s) {
  return e == null ? [] : (K(t) || (t = t == null ? [] : [t]), n = s ? void 0 : n, K(n) || (n = n == null ? [] : [n]), zl(e, t, n));
}
var xl = Object.defineProperty, Sl = Object.defineProperties, Ml = Object.getOwnPropertyDescriptors, dt = Object.getOwnPropertySymbols, jl = Object.prototype.hasOwnProperty, Al = Object.prototype.propertyIsEnumerable, ft = (e, t, n) => t in e ? xl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Cl = (e, t) => {
  for (var n in t || (t = {}))
    jl.call(t, n) && ft(e, n, t[n]);
  if (dt)
    for (var n of dt(t))
      Al.call(t, n) && ft(e, n, t[n]);
  return e;
}, Tl = (e, t) => Sl(e, Ml(t));
function P(e, t) {
  var n;
  const s = tn();
  return bt(() => {
    s.value = e();
  }, Tl(Cl({}, t), {
    flush: (n = t == null ? void 0 : t.flush) != null ? n : "sync"
  })), $t(s);
}
function Wt(e) {
  return mt() ? (kt(e), !0) : !1;
}
function se(e) {
  return typeof e == "function" ? e() : r(e);
}
const Bl = typeof window < "u";
function Y(e) {
  var t;
  const n = se(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const xe = Bl ? window : void 0;
function Pl() {
  const e = A(!1);
  return nn() && Z(() => {
    e.value = !0;
  }), e;
}
function Ht(e) {
  const t = Pl();
  return R(() => (t.value, !!e()));
}
var pt = Object.getOwnPropertySymbols, ql = Object.prototype.hasOwnProperty, Il = Object.prototype.propertyIsEnumerable, El = (e, t) => {
  var n = {};
  for (var s in e)
    ql.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && pt)
    for (var s of pt(e))
      t.indexOf(s) < 0 && Il.call(e, s) && (n[s] = e[s]);
  return n;
};
function Vl(e, t, n = {}) {
  const s = n, { window: l = xe } = s, o = El(s, ["window"]);
  let c;
  const i = Ht(() => l && "MutationObserver" in l), u = () => {
    c && (c.disconnect(), c = void 0);
  }, a = W(
    () => Y(e),
    (_) => {
      u(), i.value && l && _ && (c = new MutationObserver(t), c.observe(_, o));
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
  const { window: s = xe, initialValue: l = "", observe: o = !1 } = n, c = A(l), i = R(() => {
    var a;
    return Y(t) || ((a = s == null ? void 0 : s.document) == null ? void 0 : a.documentElement);
  });
  function u() {
    var a;
    const f = se(e), _ = se(i);
    if (_ && s) {
      const v = (a = s.getComputedStyle(_).getPropertyValue(f)) == null ? void 0 : a.trim();
      c.value = v || l;
    }
  }
  return o && Vl(i, u, {
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
var _t = Object.getOwnPropertySymbols, Ll = Object.prototype.hasOwnProperty, Rl = Object.prototype.propertyIsEnumerable, Fl = (e, t) => {
  var n = {};
  for (var s in e)
    Ll.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && _t)
    for (var s of _t(e))
      t.indexOf(s) < 0 && Rl.call(e, s) && (n[s] = e[s]);
  return n;
};
function Se(e, t, n = {}) {
  const s = n, { window: l = xe } = s, o = Fl(s, ["window"]);
  let c;
  const i = Ht(() => l && "ResizeObserver" in l), u = () => {
    c && (c.disconnect(), c = void 0);
  }, a = R(
    () => Array.isArray(e) ? e.map((v) => Y(v)) : [Y(e)]
  ), f = W(
    a,
    (v) => {
      if (u(), i.value && l) {
        c = new ResizeObserver(t);
        for (const h of v)
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
  const { window: s = xe, box: l = "content-box" } = n, o = R(() => {
    var u, a;
    return (a = (u = Y(e)) == null ? void 0 : u.namespaceURI) == null ? void 0 : a.includes("svg");
  }), c = A(t.width), i = A(t.height);
  return Se(
    e,
    ([u]) => {
      const a = l === "border-box" ? u.borderBoxSize : l === "content-box" ? u.contentBoxSize : u.devicePixelContentBoxSize;
      if (s && o.value) {
        const f = Y(e);
        if (f) {
          const _ = s.getComputedStyle(f);
          c.value = parseFloat(_.width), i.value = parseFloat(_.height);
        }
      } else if (a) {
        const f = Array.isArray(a) ? a : [a];
        c.value = f.reduce((_, { inlineSize: v }) => _ + v, 0), i.value = f.reduce((_, { blockSize: v }) => _ + v, 0);
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
const He = /* @__PURE__ */ E({
  __name: "BaseLink",
  props: {
    link: {},
    external: { type: Boolean, default: void 0 }
  },
  setup(e) {
    const t = e, n = P(
      () => t.external ?? /^(https?:\/\/)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&//=]*)$/.test(t.link || "")
    );
    return (s, l) => (g(), F(sn(t.link ? r(n) ? "a" : "RouterLink" : "div"), rn(ln(
      t.link ? {
        [r(n) ? "href" : "to"]: t.link,
        ...r(n) ? {
          target: "_blank",
          rel: "noopener noreferrer"
        } : {}
      } : {}
    )), {
      default: q(() => [
        G(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Dl = /* @__PURE__ */ E({
  __name: "BaseList",
  props: {
    items: {},
    groupBy: {}
  },
  setup(e) {
    const t = e, n = P(
      () => ge(
        J(Ge(t.items, t.groupBy ?? "")).map(([s, l]) => [
          s === "undefined" ? "" : s,
          l
        ])
      )
    );
    return (s, l) => (g(), b(O, null, [
      !t.items || t.items.length === 0 ? G(s.$slots, "placeholder", { key: 0 }) : x("", !0),
      (g(!0), b(O, null, C(r(n), (o, c) => (g(), b(O, {
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
}), Nl = ["width", "height"], Ul = /* @__PURE__ */ E({
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
      y("defs", null, [
        G(n.$slots, "defs", {}, void 0, !0)
      ]),
      G(n.$slots, "path", {}, void 0, !0)
    ], 10, Nl));
  }
}), Gl = {
  "poly-wrapper": "_poly-wrapper_14erz_1"
}, L = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, l] of t)
    n[s] = l;
  return n;
}, Wl = {
  $style: Gl
}, je = /* @__PURE__ */ L(Ul, [["__cssModules", Wl], ["__scopeId", "data-v-ac9d4bad"]]), Hl = /* @__PURE__ */ E({
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
      c6544528: `"${t.delimiter}"`
    })), (n, s) => (g(), F(He, {
      link: t.link,
      class: p([n.$style["badge-container"], n.$style[t.variant], n.$style[`color-${t.color}`]])
    }, {
      default: q(() => [
        t.label ? (g(), b("label", {
          key: 0,
          class: p(n.$style["badge-label"])
        }, [
          t.delimiter && t.variant === "capsule" ? (g(!0), b(O, { key: 0 }, C(t.label.split(t.delimiter), (l, o) => (g(), b("span", { key: o }, j(l), 1))), 128)) : (g(), b(O, { key: 1 }, [
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
}), Yl = "_tab_1nyqw_16", Zl = "_capsule_1nyqw_121", Xl = {
  "badge-container": "_badge-container_1nyqw_1",
  "color-default": "_color-default_1nyqw_8",
  tab: Yl,
  "color-cyan": "_color-cyan_1nyqw_19",
  "color-blue": "_color-blue_1nyqw_36",
  "color-green": "_color-green_1nyqw_53",
  "color-orange": "_color-orange_1nyqw_70",
  "color-red": "_color-red_1nyqw_87",
  "color-purple": "_color-purple_1nyqw_104",
  capsule: Zl,
  "badge-label": "_badge-label_1nyqw_128",
  "badge-content": "_badge-content_1nyqw_128"
}, Jl = {
  $style: Xl
}, ru = /* @__PURE__ */ L(Hl, [["__cssModules", Jl], ["__scopeId", "data-v-fd756b25"]]), Ql = /* @__PURE__ */ E({
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
    const n = e, { triggered: s, onTrigger: l } = Le((o) => {
      n.disabled ? (o.preventDefault(), o.stopPropagation()) : t("click", o);
    });
    return (o, c) => (g(), F(He, zt({
      link: n.link,
      class: [
        o.$style["button-container"],
        o.$style.behavior,
        o.$style[n.variant],
        o.$style[n.level],
        o.$style[n.size],
        n.disabled ? [o.$style.disabled] : [o.$style.clickable],
        {
          [o.$style.clicked]: n.clicked || r(s)()
        }
      ],
      "aria-disabled": n.disabled,
      "aria-label": n.label,
      onClick: r(l)
    }, n.disabled ? { disabled: "", ...o.$attrs } : o.$attrs, {
      role: "button",
      tabindex: "0"
    }), {
      default: q(() => [
        n.label ? (g(), b("span", {
          key: 0,
          class: p([o.$style["button-content"]])
        }, j(n.label), 3)) : x("", !0),
        n.icon ? (g(), b("span", {
          key: 1,
          class: p([o.$style["button-icon"]])
        }, [
          I(r(ae), {
            icon: n.icon
          }, null, 8, ["icon"])
        ], 2)) : x("", !0)
      ]),
      _: 1
    }, 16, ["link", "class", "aria-disabled", "aria-label", "onClick"]));
  }
}), Kl = "_behavior_rnzkq_1", eo = "_clickable_rnzkq_1", to = "_disabled_rnzkq_4", no = "_draggable_rnzkq_7", so = "_loading_rnzkq_10", ro = "_rounded_rnzkq_14", lo = "_secondary_rnzkq_14", oo = "_rect_rnzkq_15", ao = "_square_rnzkq_16", io = "_circle_rnzkq_18", co = "_clicked_rnzkq_58", uo = "_small_rnzkq_309", fo = "_large_rnzkq_313", po = "_text_rnzkq_17", _o = {
  behavior: Kl,
  clickable: eo,
  disabled: to,
  draggable: no,
  loading: so,
  "button-container": "_button-container_rnzkq_14",
  rounded: ro,
  secondary: lo,
  rect: oo,
  square: ao,
  "text-square": "_text-square_rnzkq_17",
  circle: io,
  "extendable-rect": "_extendable-rect_rnzkq_26",
  clicked: co,
  "button-icon": "_button-icon_rnzkq_226",
  "button-content": "_button-content_rnzkq_256",
  small: uo,
  large: fo,
  text: po
}, go = {
  $style: _o
}, ve = /* @__PURE__ */ L(Ql, [["__cssModules", go], ["__scopeId", "data-v-c1af530e"]]), ho = /* @__PURE__ */ E({
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
    wt((l) => ({
      "1dbc842c": t.radius
    }));
    const { triggered: n, onTrigger: s } = Le((l) => {
      t.clickable || l.preventDefault();
    });
    return (l, o) => (g(), F(He, {
      ref: "wrapperRef$",
      link: t.link,
      class: p([
        l.$style["card-container"],
        l.$style.behavior,
        l.$style[t.variant],
        l.$style[`color-${t.color}`],
        l.$style[`stroke-${t.strokeWeight}`],
        l.$style[`purpose-${t.purpose}`],
        {
          [l.$style.clickable]: t.link || t.clickable,
          [l.$style["has-stroke"]]: t.hasStroke,
          [l.$style.clicked]: r(n)() && t.clickable
        }
      ]),
      onClick: r(s)
    }, {
      default: q(() => [
        G(l.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["link", "class", "onClick"]));
  }
}), yo = "_behavior_rvqmg_1", vo = "_clickable_rvqmg_1", bo = "_disabled_rvqmg_4", $o = "_draggable_rvqmg_7", mo = "_loading_rvqmg_10", ko = "_metallic_rvqmg_14", wo = "_flat_rvqmg_14", zo = "_clicked_rvqmg_22", Oo = "_dash_rvqmg_92", xo = {
  behavior: yo,
  clickable: vo,
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
}, te = /* @__PURE__ */ L(ho, [["__cssModules", So], ["__scopeId", "data-v-d941fd1e"]]), Ae = ({
  type: e,
  axises: t,
  data: n
}) => {
  const s = an({
    datasets: [],
    axises: {}
  }), l = {
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
      J(u).filter(([, _]) => !le(_)).map(([_, v]) => {
        const h = v.selector ? N(f, v.selector) : null, d = v.accessor ? he(f, v.accessor) : h;
        return [
          _,
          {
            normalized: Number(
              v.type === "number" ? parseFloat(String(h)) : v.type === "date" ? new Date(Number(h)) : h
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
    })), v = _.flatMap((d) => d.series), h = ge(
      J(a).filter(([, d]) => !le(d)).map(([d, $]) => {
        const m = Tt(ee(v, `${d}.${$.type === "string" ? "value" : "normalized"}`)), k = Number($.min === "auto" ? _l(m) : $.min ?? 0), V = Number(
          $.max === "auto" ? pl(m) ?? 0 : $.max ?? m.length - (/radar|doughnut/.test(u ?? "") ? 0 : 1)
        );
        return [
          d,
          {
            ...$,
            min: k,
            max: V,
            metrics: $.type === "string" ? m.map((T, D) => ({
              normalized: D / (V - k),
              value: T
            })) : Array(w.clamp(w.ceil((V - k) / ($.step ?? 1)) + 1, 0, 1 / 0)).fill(0).map((T, D) => ({
              normalized: D / w.ceil((V - k) / ($.step ?? 1)),
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
    const u = i(r(e), r(t), r(n));
    s.datasets = u.datasets, s.axises = u.axises;
  }), {
    ...l
  };
}, Mo = (e) => (me("data-v-fefd0601"), e = e(), ke(), e), jo = ["cx", "cy", "r", "stroke-dashoffset", "stroke-dasharray"], Ao = ["x", "y"], Co = /* @__PURE__ */ Mo(() => /* @__PURE__ */ y("hr", null, null, -1)), To = { id: "chart-content-clip" }, Bo = ["cx", "cy", "r"], Po = { "clip-path": "url(#chart-content-clip)" }, qo = ["height", "width", "x", "y"], Io = /* @__PURE__ */ E({
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
    const t = e, n = A(), { width: s, height: l } = Me(n), { axises: o, datasets: c } = Ae({
      type: "doughnut",
      data: t.datasets,
      axises: t.axises
    }), i = P(
      () => w.clamp(
        w.min(s.value - t.options.offset.x, l.value - t.options.offset.y) / 2,
        0,
        1 / 0
      )
    ), u = P(() => t.options.round ? 30 : 15), a = P(() => i.value * 2 * w.PI), f = P(() => ({
      x: s.value / 2,
      y: l.value / 2
    })), _ = P(
      () => c.value.map((h) => h.series.reduce((d, $) => d + $.y.normalized, 0))
    ), v = P(
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
            normalized: $.y.normalized / k.reduce((V, T) => V + T.y.normalized, 0)
          }
        })).map(($, m, k) => ({
          ...$,
          y: {
            ...$.y,
            normalized: w.clamp(
              $.y.normalized / k.reduce((V, T) => V + T.y.normalized, 0) - u.value / a.value,
              0,
              1
            )
          }
        })).map(($, m, k) => ({
          ...$,
          y: {
            ...$.y,
            offset: k.slice(0, m).reduce((V, T) => V + T.y.normalized, 0)
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
      I(je, {
        height: r(l),
        width: r(s)
      }, {
        path: q(() => [
          y("g", {
            class: p([h.$style["chart-group-plots"]])
          }, [
            (g(!0), b(O, null, C(r(v), ($) => (g(), b(O, {
              key: $.label
            }, [
              (g(!0), b(O, null, C($.series, (m, k) => (g(), b("g", {
                key: `plot-${k}`,
                class: p(h.$style["chart-area"])
              }, [
                y("circle", {
                  cx: r(f).x,
                  cy: r(f).y,
                  r: r(i),
                  "stroke-dashoffset": m.y.offset * r(a) * -1 - r(u) * k + 0.25 * r(a),
                  "stroke-dasharray": `${m.y.normalized * r(a)} ${(1 - m.y.normalized) * r(a)}`,
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
                  x: r(f).x + r(i) * m.x.label - 260 * +(m.x.label < 0),
                  y: r(f).y + r(i) * m.y.label - 240 * +(m.y.label < 0),
                  height: "240",
                  width: "260",
                  class: p([h.$style["chart-area"], h.$style["legend-container"]])
                }, [
                  I(te, {
                    class: p([h.$style["chart-area"], h.$style["legend-wrapper"]]),
                    radius: "var(--agh-ref-border-radius-500)"
                  }, {
                    default: q(() => [
                      t.options.title ? (g(), b(O, { key: 0 }, [
                        y("h1", {
                          class: p([h.$style["chart-area"], h.$style["legend-title"], h.$style.doughnut])
                        }, [
                          y("span", null, j(m.x.value), 1)
                        ], 2),
                        Co
                      ], 64)) : x("", !0),
                      (g(!0), b(O, null, C(r(o), (V, T) => (g(), b(O, { key: T }, [
                        !/(x)/.test(T) && V && m[T] ? (g(), b("div", {
                          key: 0,
                          class: p([
                            h.$style["chart-area"],
                            h.$style["legend-group"],
                            h.$style.doughnut
                          ])
                        }, [
                          y("label", {
                            class: p([h.$style["chart-area"], h.$style["legend-label"]])
                          }, j(V.label), 3),
                          y("p", {
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
          y("clipPath", To, [
            y("circle", {
              cx: r(f).x,
              cy: r(f).y,
              r: r(i) - 10
            }, null, 8, Bo)
          ]),
          y("g", Po, [
            (g(), b("foreignObject", {
              class: p(h.$style["chart-content-wrapper"]),
              height: r(i) * 2,
              width: r(i) * 2,
              x: r(f).x - r(i),
              y: r(f).y - r(i)
            }, [
              G(h.$slots, "default", {}, void 0, !0)
            ], 10, qo))
          ])
        ]),
        _: 3
      }, 8, ["height", "width"])
    ], 2));
  }
}), Eo = "_behavior_pzvhi_1", Vo = "_clickable_pzvhi_1", Lo = "_disabled_pzvhi_4", Ro = "_draggable_pzvhi_7", Fo = "_loading_pzvhi_10", Do = "_path_pzvhi_24", No = "_radar_pzvhi_29", Uo = "_label_pzvhi_32", Go = "_plot_pzvhi_85", Wo = "_point_pzvhi_85", Ho = "_doughnut_pzvhi_96", Yo = "_bg_pzvhi_102", Zo = "_round_pzvhi_106", Xo = "_line_pzvhi_119", Jo = {
  behavior: Eo,
  clickable: Vo,
  disabled: Lo,
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
}, lu = /* @__PURE__ */ L(Io, [["__cssModules", Qo], ["__scopeId", "data-v-fefd0601"]]), Ko = (e) => (me("data-v-7ca4eb50"), e = e(), ke(), e), ea = ["d"], ta = ["x", "y", "text-anchor"], na = ["x", "y"], sa = ["d"], ra = ["cx", "cy"], la = ["cx", "cy"], oa = ["x", "y"], aa = /* @__PURE__ */ Ko(() => /* @__PURE__ */ y("hr", null, null, -1)), ia = /* @__PURE__ */ E({
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
    const t = e, n = A(), { width: s, height: l } = Me(n), { axises: o, datasets: c } = Ae({
      type: "line",
      data: Q(t).datasets,
      axises: Q(t).axises
    }), i = P(
      () => {
        var a, f, _, v, h, d;
        return (f = (a = o.value) == null ? void 0 : a.x) != null && f.metrics && ((v = (_ = o.value) == null ? void 0 : _.y) != null && v.metrics) && l.value && l.value - t.options.offset.y > 0 && s.value && s.value - t.options.offset.x > 0 ? `
  M ${t.options.offset.x} 0
  L ${t.options.offset.x} ${l.value - t.options.offset.y}
  L ${s.value} ${l.value - t.options.offset.y}
  ${(h = t.options.grid) != null && h.includes("x") ? `${o.value.x.metrics.map(
          ($) => `
              M ${$.normalized * (s.value - t.options.offset.x) + t.options.offset.x} 0
              V ${l.value - t.options.offset.y}
            `
        ).join("")}` : ""}
  ${(d = t.options.grid) != null && d.includes("y") ? `${o.value.y.metrics.map(
          ($) => `
              M ${t.options.offset.x} ${(1 - $.normalized) * (l.value - t.options.offset.y)}
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
          (f, _) => _ === 0 ? `M ${f.x.normalized * (s.value - t.options.offset.x) + t.options.offset.x} ${(1 - f.y.normalized) * (l.value - t.options.offset.y)}` : t.options.curve === "smooth" ? _ === 1 ? `C ${a.series[_ - 1].x.normalized * (s.value - t.options.offset.x) + t.options.offset.x + s.value / a.series.length * t.options.radius} ${(1 - a.series[_ - 1].y.normalized) * (l.value - t.options.offset.y)} ${f.x.normalized * (s.value - t.options.offset.x) + t.options.offset.x - s.value / a.series.length * t.options.radius} ${(1 - f.y.normalized) * (l.value - t.options.offset.y)} ${f.x.normalized * (s.value - t.options.offset.x) + t.options.offset.x} ${(1 - f.y.normalized) * (l.value - t.options.offset.y)}` : `S ${f.x.normalized * (s.value - t.options.offset.x) + t.options.offset.x - s.value / a.series.length * t.options.radius} ${(1 - f.y.normalized) * (l.value - t.options.offset.y)} ${f.x.normalized * (s.value - t.options.offset.x) + t.options.offset.x} ${(1 - f.y.normalized) * (l.value - t.options.offset.y)}` : `L ${f.x.normalized * (s.value - t.options.offset.x) + t.options.offset.x} ${(1 - f.y.normalized) * (l.value - t.options.offset.y)}`
        ).join(`
`)}`
      })) : []
    );
    return (a, f) => (g(), b("div", {
      ref_key: "wrapperRef$",
      ref: n,
      class: p(a.$style["chart-container"])
    }, [
      I(je, {
        height: r(l),
        width: r(s)
      }, {
        defs: q(() => []),
        path: q(() => [
          y("g", {
            id: "chart-group-axises",
            class: p([a.$style["chart-group-axises"]])
          }, [
            y("path", {
              d: r(i),
              class: p([a.$style["chart-axis"], a.$style.line, a.$style.path])
            }, null, 10, ea)
          ], 2),
          r(o) && r(s) && r(l) ? (g(), b("g", {
            key: 0,
            class: p([a.$style["chart-group-axises-label"]])
          }, [
            r(o).x && r(o).x.metrics ? (g(!0), b(O, { key: 0 }, C(r(o).x.metrics, (_, v) => (g(), b("text", {
              key: `axis-x--${v}`,
              x: _.normalized * (r(s) - t.options.offset.x) + t.options.offset.x,
              y: r(l) - t.options.offset.y + 20,
              class: p([a.$style["chart-axis"], a.$style.label]),
              "text-anchor": v === 0 ? "start" : v === r(o).x.metrics.length - 1 ? "end" : "middle"
            }, j(_.value), 11, ta))), 128)) : x("", !0),
            r(o).y && r(o).y.metrics ? (g(!0), b(O, { key: 1 }, C(r(o).y.metrics, (_, v) => (g(), b("text", {
              key: `axis-y--${v}`,
              x: t.options.offset.x - 10,
              y: (1 - _.normalized) * (r(l) - t.options.offset.y) + 5,
              class: p([a.$style["chart-axis"], a.$style.label]),
              "text-anchor": "end"
            }, j(_.value), 11, na))), 128)) : x("", !0)
          ], 2)) : x("", !0),
          y("g", {
            class: p([a.$style["chart-group-plots"]])
          }, [
            (g(!0), b(O, null, C(r(u), (_) => (g(), b("g", {
              key: _.label,
              class: p([a.$style["chart-area"], a.$style.line, a.$style.plot])
            }, [
              y("path", {
                d: _.path
              }, null, 8, sa)
            ], 2))), 128)),
            (g(!0), b(O, null, C(r(c), (_) => (g(), b(O, null, [
              (g(!0), b(O, null, C(_.series, (v, h) => (g(), b("g", {
                key: `chart-plot-${_.label}-plot-${h}`,
                class: p(a.$style["chart-area"])
              }, [
                y("circle", {
                  class: p([
                    a.$style.behavior,
                    a.$style["chart-area"],
                    a.$style.point,
                    a.$style.plot,
                    a.$style.clickable
                  ]),
                  cx: v.x.normalized * (r(s) - t.options.offset.x) + t.options.offset.x,
                  cy: (1 - v.y.normalized) * (r(l) - t.options.offset.y),
                  r: "50"
                }, null, 10, ra),
                y("circle", {
                  class: p([a.$style["chart-area"], a.$style.point, a.$style.plot]),
                  cx: v.x.normalized * (r(s) - t.options.offset.x) + t.options.offset.x,
                  cy: (1 - v.y.normalized) * (r(l) - t.options.offset.y),
                  r: "5"
                }, null, 10, la),
                (g(), b("foreignObject", {
                  x: v.x.normalized * (r(s) - t.options.offset.x) + t.options.offset.x - 140,
                  y: (1 - v.y.normalized) * (r(l) - t.options.offset.y) - (v.y.normalized >= 0.5 ? 0 : 220),
                  height: "220",
                  width: "280",
                  class: p([a.$style["chart-area"], a.$style["legend-container"]])
                }, [
                  I(te, {
                    class: p([a.$style["chart-area"], a.$style["legend-wrapper"]]),
                    radius: "var(--agh-ref-border-radius-500)"
                  }, {
                    default: q(() => [
                      t.options.title ? (g(), b(O, { key: 0 }, [
                        y("h1", {
                          class: p([a.$style["chart-area"], a.$style["legend-title"]])
                        }, j(r(he)(v.data, t.options.title)), 3),
                        aa
                      ], 64)) : x("", !0),
                      (g(!0), b(O, null, C(r(o), (d, $) => (g(), b(O, { key: $ }, [
                        d && v[$] ? (g(), b("div", {
                          key: 0,
                          class: p([a.$style["chart-area"], a.$style["legend-group"]])
                        }, [
                          y("label", {
                            class: p([a.$style["chart-area"], a.$style["legend-label"]])
                          }, j(d.label), 3),
                          y("p", {
                            class: p([a.$style["chart-area"], a.$style["legend-value"]])
                          }, j(v[$].value), 3)
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
}), ca = "_behavior_1sfnc_1", ua = "_clickable_1sfnc_1", da = "_disabled_1sfnc_4", fa = "_draggable_1sfnc_7", pa = "_loading_1sfnc_10", _a = "_path_1sfnc_24", ga = "_radar_1sfnc_29", ha = "_label_1sfnc_32", ya = "_plot_1sfnc_85", va = "_point_1sfnc_85", ba = "_doughnut_1sfnc_96", $a = "_bg_1sfnc_102", ma = "_round_1sfnc_106", ka = "_line_1sfnc_119", wa = {
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
  plot: ya,
  point: va,
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
}, ou = /* @__PURE__ */ L(ia, [["__cssModules", za], ["__scopeId", "data-v-7ca4eb50"]]), Oa = /* @__PURE__ */ E({
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
    }), l = P(() => n.value.y.step), o = R(
      () => s.value[0].series.map((_) => ({
        ..._,
        y: {
          ..._.y,
          normalized: w.round(_.y.normalized * l.value)
        }
      }))
    ), c = A(), i = A(), u = U(""), a = () => {
      if (c.value && c.value.firstElementChild) {
        const { firstElementChild: _, clientWidth: v } = c.value, h = v, d = _ == null ? void 0 : _.clientWidth;
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
    }), (_, v) => (g(), b("div", {
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
        y("label", {
          class: p(_.$style.label)
        }, j(h.x.value), 3),
        y("div", {
          class: p(_.$style["box-container"])
        }, [
          (g(!0), b(O, null, C(r(l), ($) => (g(), b("div", {
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
}), xa = "_behavior_1k1jv_1", Sa = "_clickable_1k1jv_1", Ma = "_disabled_1k1jv_4", ja = "_draggable_1k1jv_7", Aa = "_loading_1k1jv_10", Ca = "_path_1k1jv_24", Ta = "_radar_1k1jv_29", Ba = "_label_1k1jv_32", Pa = "_plot_1k1jv_85", qa = "_point_1k1jv_85", Ia = "_doughnut_1k1jv_96", Ea = "_bg_1k1jv_102", Va = "_round_1k1jv_106", La = "_line_1k1jv_119", Ra = "_square_1k1jv_242", Fa = {
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
  point: qa,
  doughnut: Ia,
  "legend-container": "_legend-container_1k1jv_96",
  bg: Ea,
  round: Va,
  line: La,
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
}, au = /* @__PURE__ */ L(Oa, [["__cssModules", Da], ["__scopeId", "data-v-69fb85cf"]]), Na = ["id"], Ua = ["stdDeviation"], Ga = /* @__PURE__ */ y("feColorMatrix", {
  in: "blur",
  mode: "matrix",
  values: "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10",
  result: "mask"
}, null, -1), Wa = /* @__PURE__ */ y("feComposite", {
  in: "SourceGraphic",
  in2: "mask",
  operator: "in"
}, null, -1), gt = /* @__PURE__ */ E({
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
      y("feGaussianBlur", {
        stdDeviation: t.radius,
        in: "SourceGraphic",
        result: "blur"
      }, null, 8, Ua),
      Ga,
      Wa
    ], 8, Na));
  }
}), Ha = (e) => (me("data-v-5b47bbf2"), e = e(), ke(), e), Ya = ["innerHTML"], Za = { id: "chart-area-bg-mask" }, Xa = ["d"], Ja = ["d"], Qa = ["d"], Ka = ["x", "y", "height", "width"], ei = ["d"], ti = ["cx", "cy"], ni = ["cx", "cy"], si = ["x", "y"], ri = /* @__PURE__ */ Ha(() => /* @__PURE__ */ y("hr", null, null, -1)), li = /* @__PURE__ */ E({
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
    const t = e, n = A(), { width: s, height: l } = Me(n), { axises: o, datasets: c } = Ae({
      type: "radar",
      data: Q(t).datasets,
      axises: Q(t).axises
    }), i = P(
      () => w.clamp(
        w.min(s.value - t.options.offset.x, l.value - t.options.offset.y) / 2,
        0,
        1 / 0
      )
    ), u = P(() => ({
      x: s.value / 2,
      y: l.value / 2
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
    ), v = U(""), h = () => {
      n.value && (v.set(
        We("--chart-bg-fill-svg", n, {
          observe: !0
        }).value
      ), v() || Ue(h, 1));
    };
    return Z(() => {
      h();
    }), (d, $) => (g(), b("div", {
      ref_key: "wrapperRef$",
      ref: n,
      class: p(d.$style["chart-container"])
    }, [
      I(je, {
        height: r(l),
        width: r(s)
      }, {
        defs: q(() => [
          I(gt, {
            id: "chart-area-bg-round",
            radius: 6
          }),
          I(gt, {
            id: "chart-area-plot-round",
            radius: 3
          }),
          y("g", {
            innerHTML: r(v)()
          }, null, 8, Ya),
          y("mask", Za, [
            y("path", {
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
        path: q(() => [
          y("path", {
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
          y("g", {
            id: "chart-group-axises",
            class: p([d.$style["chart-group-axises"]]),
            mask: "url(#chart-area-bg-mask)"
          }, [
            y("path", {
              d: r(_),
              class: p([d.$style["chart-axis"], d.$style.radar, d.$style.path])
            }, null, 10, Qa)
          ], 2),
          r(o) ? (g(), b("g", {
            key: 0,
            class: p([d.$style["chart-group-axises-label"]])
          }, [
            (g(!0), b(O, null, C(r(o).x.metrics, (m) => (g(), b("foreignObject", {
              key: m.value,
              x: r(u).x + r(i) * r(w).cos(r(w).rad(m.normalized * 360 - 90)) - (m.normalized % 0.5 === 0 ? r(i) / 2 : m.normalized > 0.5 ? r(i) : 0),
              y: r(u).y + r(i) * 1.1 * r(w).sin(r(w).rad(m.normalized * 360 - 90)) - r(i) / 6,
              height: r(i) / 3,
              width: r(i),
              class: p([d.$style["chart-axis"], d.$style.radar, d.$style["label-wrapper"]])
            }, [
              y("p", {
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
          y("g", {
            class: p([d.$style["chart-group-plots"]])
          }, [
            (g(!0), b(O, null, C(f.value, (m) => (g(), b("g", {
              key: m.label,
              class: p([d.$style["chart-area"], d.$style.radar, d.$style.plot])
            }, [
              y("path", {
                d: m.path,
                class: p([
                  {
                    [d.$style.round]: t.options.round
                  }
                ])
              }, null, 10, ei)
            ], 2))), 128))
          ], 2),
          (g(!0), b(O, null, C(r(c), (m) => (g(), b("g", {
            key: m.label,
            class: p([d.$style["chart-area-label"]])
          }, [
            (g(!0), b(O, null, C(m.series, (k, V) => (g(), b("g", {
              key: `plot-${V}`,
              class: p(d.$style["chart-area"])
            }, [
              y("circle", {
                class: p([
                  d.$style.behavior,
                  d.$style["chart-area"],
                  d.$style.point,
                  d.$style.plot,
                  d.$style.clickable
                ]),
                cx: r(u).x + r(i) * k.y.normalized * r(w).cos(r(w).rad(k.x.normalized * 360 - 90)),
                cy: r(u).y + r(i) * k.y.normalized * r(w).sin(r(w).rad(k.x.normalized * 360 - 90)),
                r: "10"
              }, null, 10, ti),
              y("circle", {
                class: p([d.$style["chart-area"], d.$style.radar, d.$style.point, d.$style.plot]),
                cx: r(u).x + r(i) * k.y.normalized * r(w).cos(r(w).rad(k.x.normalized * 360 - 90)),
                cy: r(u).y + r(i) * k.y.normalized * r(w).sin(r(w).rad(k.x.normalized * 360 - 90)),
                r: "5"
              }, null, 10, ni),
              (g(), b("foreignObject", {
                x: r(u).x + r(i) * k.y.normalized * r(w).cos(r(w).rad(k.x.normalized * 360 - 90)) - 130,
                y: r(u).y + r(i) * k.y.normalized * r(w).sin(r(w).rad(k.x.normalized * 360 - 90)),
                height: "200",
                width: "260",
                class: p([d.$style["chart-area"], d.$style["legend-container"]])
              }, [
                I(te, {
                  class: p([d.$style["chart-area"], d.$style["legend-wrapper"]]),
                  radius: "var(--agh-ref-border-radius-500)"
                }, {
                  default: q(() => [
                    t.options.title ? (g(), b(O, { key: 0 }, [
                      y("h1", {
                        class: p([d.$style["chart-area"], d.$style["legend-title"], d.$style.radar])
                      }, [
                        y("span", null, j(k.x.value), 1),
                        y("span", {
                          class: p(d.$style["legend-value"])
                        }, j(k.y.value), 3)
                      ], 2),
                      ri
                    ], 64)) : x("", !0),
                    (g(!0), b(O, null, C(r(o), (T, D) => (g(), b(O, { key: D }, [
                      !/(x|y)/.test(D) && T && k[D] ? (g(), b("div", {
                        key: 0,
                        class: p([d.$style["chart-area"], d.$style["legend-group"], d.$style.radar])
                      }, [
                        y("p", {
                          class: p([d.$style["chart-area"], d.$style["legend-value"]])
                        }, j(k[D].value), 3),
                        y("label", {
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
}), oi = "_behavior_1bxlz_1", ai = "_clickable_1bxlz_1", ii = "_disabled_1bxlz_4", ci = "_draggable_1bxlz_7", ui = "_loading_1bxlz_10", di = "_path_1bxlz_24", fi = "_radar_1bxlz_29", pi = "_label_1bxlz_32", _i = "_plot_1bxlz_85", gi = "_point_1bxlz_85", hi = "_doughnut_1bxlz_96", yi = "_bg_1bxlz_102", vi = "_round_1bxlz_106", bi = "_line_1bxlz_119", $i = {
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
  bg: yi,
  round: vi,
  line: bi,
  "legend-wrapper": "_legend-wrapper_1bxlz_147",
  "legend-group": "_legend-group_1bxlz_158",
  "legend-value": "_legend-value_1bxlz_166",
  "legend-label": "_legend-label_1bxlz_169",
  "legend-title": "_legend-title_1bxlz_173"
}, mi = {
  $style: $i
}, iu = /* @__PURE__ */ L(li, [["__cssModules", mi], ["__scopeId", "data-v-5b47bbf2"]]);
function Yt(e) {
  return mt() ? (kt(e), !0) : !1;
}
function be(e) {
  return typeof e == "function" ? e() : r(e);
}
const Zt = typeof window < "u", Ye = () => {
}, qe = /* @__PURE__ */ ki();
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
function re(e) {
  var t;
  const n = be(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Xt = Zt ? window : void 0;
function fe(...e) {
  let t, n, s, l;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, s, l] = e, t = Xt) : [t, n, s, l] = e, !t)
    return Ye;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const o = [], c = () => {
    o.forEach((f) => f()), o.length = 0;
  }, i = (f, _, v, h) => (f.addEventListener(_, v, h), () => f.removeEventListener(_, v, h)), u = W(
    () => [re(t), be(l)],
    ([f, _]) => {
      c(), f && o.push(
        ...n.flatMap((v) => s.map((h) => i(f, v, h, _)))
      );
    },
    { immediate: !0, flush: "post" }
  ), a = () => {
    u(), c();
  };
  return Yt(a), a;
}
let yt = !1;
function vt(e, t, n = {}) {
  const { window: s = Xt, ignore: l = [], capture: o = !0, detectIframe: c = !1 } = n;
  if (!s)
    return;
  qe && !yt && (yt = !0, Array.from(s.document.body.children).forEach((v) => v.addEventListener("click", Ye)));
  let i = !0;
  const u = (v) => l.some((h) => {
    if (typeof h == "string")
      return Array.from(s.document.querySelectorAll(h)).some((d) => d === v.target || v.composedPath().includes(d));
    {
      const d = re(h);
      return d && (v.target === d || v.composedPath().includes(d));
    }
  }), f = [
    fe(s, "click", (v) => {
      const h = re(e);
      if (!(!h || h === v.target || v.composedPath().includes(h))) {
        if (v.detail === 0 && (i = !u(v)), !i) {
          i = !0;
          return;
        }
        t(v);
      }
    }, { passive: !0, capture: o }),
    fe(s, "pointerdown", (v) => {
      const h = re(e);
      h && (i = !v.composedPath().includes(h) && !u(v));
    }, { passive: !0 }),
    c && fe(s, "blur", (v) => {
      setTimeout(() => {
        var h;
        const d = re(e);
        ((h = s.document.activeElement) == null ? void 0 : h.tagName) === "IFRAME" && !(d != null && d.contains(s.document.activeElement)) && t(v);
      }, 0);
    })
  ].filter(Boolean);
  return () => f.forEach((v) => v());
}
const Ie = {
  [ht.mounted](e, t) {
    const n = !t.modifiers.bubble;
    if (typeof t.value == "function")
      e.__onClickOutside_stop = vt(e, t.value, { capture: n });
    else {
      const [s, l] = t.value;
      e.__onClickOutside_stop = vt(e, s, Object.assign({ capture: n }, l));
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
  let s = null, l;
  W(wi(e), (i) => {
    if (i) {
      const u = i;
      l = u.style.overflow, n.value && (u.style.overflow = "hidden");
    }
  }, {
    immediate: !0
  });
  const o = () => {
    const i = be(e);
    !i || n.value || (qe && (s = fe(
      i,
      "touchmove",
      (u) => {
        zi(u);
      },
      { passive: !1 }
    )), i.style.overflow = "hidden", n.value = !0);
  }, c = () => {
    const i = be(e);
    !i || !n.value || (qe && (s == null || s()), i.style.overflow = l, n.value = !1);
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
    const l = Oi(n, s.value);
    W(t, (o) => l.value = o);
  };
}
xi();
const Si = ["onClick"], Mi = /* @__PURE__ */ E({
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
    const n = e, s = A(), l = P(
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
            l.value,
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
      default: q(() => [
        n.label || n.multiple ? (g(), b("header", {
          key: 0,
          class: p(a.$style["menu-header"])
        }, [
          y("h1", {
            class: p(a.$style.title)
          }, j(n.label), 3),
          n.multiple ? (g(), F(ve, {
            key: 0,
            class: p(a.$style.button),
            label: "Clear Selection",
            icon: "fa6-solid:eraser",
            variant: "text",
            onClick: f[0] || (f[0] = (_) => u())
          }, null, 8, ["class"])) : x("", !0)
        ], 2)) : x("", !0),
        y("div", {
          ref_key: "wrapperRef$",
          ref: s,
          class: p([
            a.$style["menu-wrapper"],
            {
              [a.$style.overflowed]: r(o)()
            }
          ])
        }, [
          (g(!0), b(O, null, C(r(l), (_, v) => (g(), b("div", {
            key: v,
            class: p([
              a.$style["menu-group"],
              {
                [a.$style.classify]: n.groupBy
              }
            ])
          }, [
            v ? (g(), b("label", {
              key: 0,
              class: p(a.$style["menu-group-label"]),
              name: ""
            }, j(v), 3)) : x("", !0),
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
              n.multiple ? (g(), F(r(ae), {
                key: 0,
                class: p(a.$style["menu-option-icon"]),
                icon: h().selected ? "fa6-solid:square-check" : "fa6-regular:square"
              }, null, 8, ["class", "icon"])) : x("", !0),
              n.fields.icon ? (g(), F(r(ae), {
                key: 1,
                class: p(a.$style["menu-option-icon"]),
                icon: String(r(N)(h(), n.fields.icon))
              }, null, 8, ["class", "icon"])) : x("", !0),
              y("div", {
                class: p(a.$style["menu-option-group"])
              }, [
                n.fields.title ? x("", !0) : (g(), b("p", {
                  key: 0,
                  class: p(a.$style["menu-field"])
                }, j(r(N)(h(), n.fields.key)), 3)),
                (g(!0), b(O, null, C(r(Gt)(n.fields, ["key", "icon"]), ($) => (g(), b(O, {
                  key: `option-field-${$}`
                }, [
                  $ ? (g(), b("p", {
                    key: 0,
                    class: p(a.$style["menu-field"])
                  }, j(r(he)(h(), $)), 3)) : x("", !0)
                ], 64))), 128))
              ], 2)
            ], 10, Si))), 128))
          ], 2))), 128))
        ], 2)
      ]),
      _: 1
    }, 8, ["class", "radius"]));
  }
}), ji = "_behavior_1k2c6_1", Ai = "_clickable_1k2c6_1", Ci = "_disabled_1k2c6_4", Ti = "_draggable_1k2c6_7", Bi = "_loading_1k2c6_10", Pi = "_classify_1k2c6_29", qi = "_title_1k2c6_47", Ii = "_button_1k2c6_50", Ei = "_overflowed_1k2c6_77", Vi = "_hover_1k2c6_91", Li = "_selected_1k2c6_95", Ri = "_multiple_1k2c6_99", Fi = {
  behavior: ji,
  clickable: Ai,
  disabled: Ci,
  draggable: Ti,
  loading: Bi,
  "menu-container": "_menu-container_1k2c6_14",
  classify: Pi,
  "menu-header": "_menu-header_1k2c6_32",
  title: qi,
  button: Ii,
  "menu-wrapper": "_menu-wrapper_1k2c6_53",
  overflowed: Ei,
  "menu-option": "_menu-option_1k2c6_81",
  hover: Vi,
  selected: Li,
  multiple: Ri,
  "menu-field": "_menu-field_1k2c6_102",
  "menu-option-group": "_menu-option-group_1k2c6_108",
  "menu-group": "_menu-group_1k2c6_122",
  "menu-group-label": "_menu-group-label_1k2c6_144"
}, Di = {
  $style: Fi
}, $e = /* @__PURE__ */ L(Mi, [["__cssModules", Di], ["__scopeId", "data-v-29c13de6"]]), Ni = /* @__PURE__ */ E({
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
      set: (o) => (l.set(!0), t("update:modelValue", o))
    }), l = U(!0);
    return (o, c) => Be((g(), b("div", {
      class: p([o.$style["dropdown-container"], o.$style[o.size]])
    }, [
      I(ve, {
        disabled: n.disabled,
        label: r(N)(n.modelValue, n.fields.key),
        icon: r(l)() ? "fa6-solid:chevron-down" : "fa6-solid:chevron-up",
        clicked: !r(l)(),
        level: n.level,
        size: n.size,
        variant: n.size === "small" ? "rounded" : "rect",
        class: p([o.$style["dropdown-button"], o.$style[o.size]]),
        onClick: c[0] || (c[0] = (i) => r(l).update((u) => !u)),
        type: "search"
      }, null, 8, ["disabled", "label", "icon", "clicked", "level", "size", "variant", "class"]),
      o.items.length > 0 && !r(l)() ? (g(), F($e, {
        key: 0,
        class: p(o.$style["dropdown-menu"]),
        options: o.items,
        fields: n.fields,
        modelValue: s.value,
        "onUpdate:modelValue": c[1] || (c[1] = (i) => s.value = i)
      }, null, 8, ["class", "options", "fields", "modelValue"])) : x("", !0)
    ], 2)), [
      [r(Ie), () => r(l).set(!0)]
    ]);
  }
}), Ui = "_large_184z5_7", Gi = {
  "dropdown-container": "_dropdown-container_184z5_1",
  large: Ui,
  "dropdown-menu": "_dropdown-menu_184z5_11",
  "dropdown-button": "_dropdown-button_184z5_11"
}, Wi = {
  $style: Gi
}, cu = /* @__PURE__ */ L(Ni, [["__cssModules", Wi], ["__scopeId", "data-v-89c03d44"]]), Hi = ["height", "width"], Yi = /* @__PURE__ */ y("feFlood", {
  "flood-opacity": "0",
  result: "BackgroundImageFix"
}, null, -1), Zi = /* @__PURE__ */ y("feBlend", {
  in: "SourceGraphic",
  in2: "BackgroundImageFix",
  result: "shape"
}, null, -1), Xi = /* @__PURE__ */ y("feColorMatrix", {
  in: "SourceAlpha",
  result: "hardAlpha",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}, null, -1), Ji = /* @__PURE__ */ y("feOffset", {
  dx: "1",
  dy: "1"
}, null, -1), Qi = /* @__PURE__ */ y("feGaussianBlur", { stdDeviation: "1" }, null, -1), Ki = /* @__PURE__ */ y("feComposite", {
  in2: "hardAlpha",
  k2: "-1",
  k3: "1",
  operator: "arithmetic"
}, null, -1), ec = /* @__PURE__ */ y("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" }, null, -1), tc = /* @__PURE__ */ y("feBlend", {
  in2: "shape",
  result: "effect-innerShadow-1"
}, null, -1), nc = /* @__PURE__ */ y("feColorMatrix", {
  in: "SourceAlpha",
  result: "hardAlpha",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}, null, -1), sc = /* @__PURE__ */ y("feOffset", {
  dx: "2",
  dy: "3"
}, null, -1), rc = /* @__PURE__ */ y("feGaussianBlur", { stdDeviation: "1.5" }, null, -1), lc = /* @__PURE__ */ y("feComposite", {
  in2: "hardAlpha",
  k2: "-1",
  k3: "1",
  operator: "arithmetic"
}, null, -1), oc = /* @__PURE__ */ y("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.11 0" }, null, -1), ac = /* @__PURE__ */ y("feBlend", {
  in2: "effect-innerShadow-1",
  result: "effect-innerShadow2"
}, null, -1), ic = /* @__PURE__ */ y("feColorMatrix", {
  in: "SourceAlpha",
  result: "hardAlpha",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}, null, -1), cc = /* @__PURE__ */ y("feOffset", {
  dx: "5",
  dy: "6"
}, null, -1), uc = /* @__PURE__ */ y("feGaussianBlur", { stdDeviation: "2" }, null, -1), dc = /* @__PURE__ */ y("feComposite", {
  in2: "hardAlpha",
  k2: "-1",
  k3: "1",
  operator: "arithmetic"
}, null, -1), fc = /* @__PURE__ */ y("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" }, null, -1), pc = /* @__PURE__ */ y("feBlend", {
  in2: "effect-innerShadow2",
  result: "effect-innerShadow3"
}, null, -1), _c = /* @__PURE__ */ y("feColorMatrix", {
  in: "SourceAlpha",
  result: "hardAlpha",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}, null, -1), gc = /* @__PURE__ */ y("feOffset", {
  dx: "8",
  dy: "10"
}, null, -1), hc = /* @__PURE__ */ y("feGaussianBlur", { stdDeviation: "2.5" }, null, -1), yc = /* @__PURE__ */ y("feComposite", {
  in2: "hardAlpha",
  k2: "-1",
  k3: "1",
  operator: "arithmetic"
}, null, -1), vc = /* @__PURE__ */ y("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0" }, null, -1), bc = /* @__PURE__ */ y("feBlend", {
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
  rc,
  lc,
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
  yc,
  vc,
  bc
], mc = /* @__PURE__ */ E({
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
}), kc = /* @__PURE__ */ E({
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
      y("div", {
        class: p([n.$style["progress-groove"], n.$style[t.variant]])
      }, [
        y("div", {
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
}, uu = /* @__PURE__ */ L(kc, [["__cssModules", xc], ["__scopeId", "data-v-d1ec5a1d"]]), Ze = (e) => (me("data-v-017d9edf"), e = e(), ke(), e), Sc = ["innerHTML"], Mc = ["cx", "cy", "r"], jc = ["cx", "cy", "r"], Ac = /* @__PURE__ */ Ze(() => /* @__PURE__ */ y("mask", { id: "progress-groove-mask" }, [
  /* @__PURE__ */ y("use", {
    href: "#progress-groove-outer",
    fill: "#fff"
  }),
  /* @__PURE__ */ y("use", {
    href: "#progress-groove-inner",
    fill: "#000"
  })
], -1)), Cc = /* @__PURE__ */ Ze(() => /* @__PURE__ */ y("use", {
  href: "#progress-groove-outer",
  mask: "url(#progress-groove-mask)"
}, null, -1)), Tc = [
  Cc
], Bc = ["cx", "cy", "r", "stroke-dashoffset", "stroke-dasharray", "stroke-width"], Pc = /* @__PURE__ */ Ze(() => /* @__PURE__ */ y("clipPath", { id: "progress-content-clip" }, [
  /* @__PURE__ */ y("use", { href: "#progress-groove-inner" })
], -1)), qc = { "clip-path": "url(#progress-content-clip)" }, Ic = ["height", "width", "x", "y"], Ec = /* @__PURE__ */ E({
  __name: "ProgressCircle",
  props: {
    value: { default: 0 },
    variant: { default: "concave" },
    thickness: { default: 12 }
  },
  setup(e) {
    const t = e, n = A(), { width: s, height: l } = Me(n), o = P(
      () => w.clamp(w.min(s.value, l.value) / 2 - t.thickness / 2, 0, 1 / 0)
    ), c = P(() => o.value * 2 * w.PI), i = P(() => ({
      x: s.value / 2,
      y: l.value / 2
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
      I(je, {
        height: r(l),
        width: r(s)
      }, {
        defs: q(() => [
          y("g", {
            innerHTML: r(u)()
          }, null, 8, Sc),
          I(mc, {
            height: r(l),
            width: r(s)
          }, null, 8, ["height", "width"]),
          y("circle", {
            id: "progress-groove-outer",
            cx: r(i).x,
            cy: r(i).y,
            r: r(o) + t.thickness / 2
          }, null, 8, Mc),
          y("circle", {
            id: "progress-groove-inner",
            cx: r(i).x,
            cy: r(i).y,
            r: r(o) - t.thickness / 2
          }, null, 8, jc),
          Ac
        ]),
        path: q(() => [
          y("g", {
            class: p(f.$style["progress-groove"])
          }, Tc, 2),
          y("g", {
            class: p(f.$style["progress-value"])
          }, [
            y("circle", {
              cx: r(i).x,
              cy: r(i).y,
              r: r(o),
              "stroke-dashoffset": (t.value + 0.25) * r(c),
              "stroke-dasharray": `${t.value * r(c)} ${(1 - t.value) * r(c)}`,
              "stroke-width": t.thickness,
              fill: "transparent"
            }, null, 8, Bc)
          ], 2),
          Pc,
          y("g", qc, [
            (g(), b("foreignObject", {
              height: r(o) * 2,
              width: r(o) * 2,
              x: r(i).x - r(o),
              y: r(i).y - r(o)
            }, [
              y("div", {
                class: p(f.$style["progress-content-wrapper"])
              }, [
                y("label", null, j((t.value * 100).toFixed(0)) + "%", 1)
              ], 2)
            ], 8, Ic))
          ])
        ]),
        _: 1
      }, 8, ["height", "width"])
    ], 2));
  }
}), Vc = "_concave_1jatd_23", Lc = "_convex_1jatd_55", Rc = {
  "progress-container": "_progress-container_1jatd_1",
  "progress-groove": "_progress-groove_1jatd_11",
  "progress-value": "_progress-value_1jatd_11",
  concave: Vc,
  "progress-content-wrapper": "_progress-content-wrapper_1jatd_35",
  convex: Lc
}, Fc = {
  $style: Rc
}, du = /* @__PURE__ */ L(Ec, [["__cssModules", Fc], ["__scopeId", "data-v-017d9edf"]]), Dc = (e, t) => {
  var n;
  if (t) {
    const s = (n = J(Gt(e, "valid")).find(([l, o]) => o && t[l])) == null ? void 0 : n[0];
    return s ? t[s] ?? null : null;
  }
  return null;
}, Nc = ["value"], Uc = ["for"], Gc = /* @__PURE__ */ E({
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
    const n = e, { onTrigger: s } = Le(
      (i) => {
        n.disabled ? (i.preventDefault(), i.stopPropagation()) : (c(), t("update:modelValue", i.target.value));
      },
      {
        flush: "post"
      }
    ), l = A(), o = U(""), c = () => {
      var i;
      return o.set(
        l.value ? (i = l.value) != null && i.validity.valid ? "" : Dc(l.value.validity, n.invalidMessage ?? {}) ?? l.value.validationMessage : ""
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
      y("input", zt({
        ref_key: "inputRef$",
        ref: l,
        class: [i.$style["textfield-input"]]
      }, n, {
        value: n.modelValue,
        onInput: u[0] || (u[0] = //@ts-ignore
        (...a) => r(s) && r(s)(...a))
      }), null, 16, Nc),
      i.type === "search" || n.icon ? (g(), F(r(ae), {
        key: 0,
        class: p([i.$style["textfield-label--icon"], i.$style.icon]),
        icon: n.icon || i.type === "search" ? "fa6-solid:magnifying-glass" : ""
      }, null, 8, ["class", "icon"])) : x("", !0),
      r(o)() ? (g(), b("label", {
        key: 1,
        for: n.name,
        class: p([i.$style["textfield-label"]])
      }, [
        I(r(ae), {
          class: p([i.$style["textfield-label--icon"]]),
          icon: "fa6-solid:circle-xmark"
        }, null, 8, ["class"]),
        y("span", {
          class: p([i.$style["textfield-label--value"]])
        }, j(r(o)()), 3)
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
}, Qt = /* @__PURE__ */ L(Gc, [["__cssModules", Hc], ["__scopeId", "data-v-784e2d65"]]), Yc = /* @__PURE__ */ E({
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
    }), l = A(), o = U(!1), c = U([]), i = (a) => {
      a && (t("update:modelValue", N(a, n.fields.key)), t("select", a), o.set(!0));
    }, u = (a) => {
      var f;
      c.set(
        ((f = n.items) == null ? void 0 : f.filter((_) => String(N(_, n.fields.key)).includes(a))) ?? []
      );
    };
    return W(s, u), W(l, i), (a, f) => (g(), b("div", {
      class: p(a.$style["search-bar--container"])
    }, [
      I(Qt, {
        modelValue: s.value,
        "onUpdate:modelValue": f[0] || (f[0] = (_) => s.value = _),
        class: p(a.$style["search-bar--input"]),
        disabled: n.disabled,
        onClick: f[1] || (f[1] = (_) => r(o).set(!1)),
        onFocus: f[2] || (f[2] = (_) => r(o).set(!1)),
        onBlur: f[3] || (f[3] = (_) => r(o).set(!0)),
        type: "search"
      }, null, 8, ["modelValue", "class", "disabled"]),
      s.value && r(c)().length > 0 && !r(o)() ? (g(), F($e, {
        key: 0,
        class: p(a.$style["search-bar--menu"]),
        options: r(c)(),
        fields: n.fields,
        modelValue: l.value,
        "onUpdate:modelValue": f[4] || (f[4] = (_) => l.value = _)
      }, null, 8, ["class", "options", "fields", "modelValue"])) : x("", !0)
    ], 2));
  }
}), Zc = {
  "search-bar--container": "_search-bar--container_1hygv_1",
  "search-bar--input": "_search-bar--input_1hygv_7",
  "search-bar--menu": "_search-bar--menu_1hygv_10"
}, Xc = {
  $style: Zc
}, fu = /* @__PURE__ */ L(Yc, [["__cssModules", Xc], ["__scopeId", "data-v-644d7672"]]), Jc = /* @__PURE__ */ E({
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
    const n = e, s = A(), l = {
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
    }), a = A(Kr(n.sortOptions)), f = R({
      get: () => n.sort ?? a.value,
      set: (z) => {
        z && (k.set(!0), t("update:sort", z), n.sort || (a.value = z));
      }
    }), _ = A([]), v = R({
      get: () => n.filter ?? _.value,
      set: (z) => {
        t("update:filter", z ?? []), n.filter || (_.value = z ?? []);
      }
    }), h = A(), d = R({
      get: () => n.selected !== void 0 ? n.selected : h.value,
      set: (z) => {
        z && (t("update:selected", z), n.selected || (h.value = z));
      }
    }), $ = A(n.items), m = U(!0), k = U(!0), V = U(!1), T = () => {
      if (s.value) {
        const { scrollHeight: z, clientHeight: S } = s.value;
        V.set(z > S + 1);
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
      ), S = Qr(
        z,
        (X) => N(X, n.fields.title ?? n.fields.key).includes(u.value)
      ), ne = Ol(
        S,
        [((Te = f.value) == null ? void 0 : Te.field) ?? n.fields.key],
        [((Xe = f.value) == null ? void 0 : Xe.direction) ?? "asc"]
      ), B = le(v.value) ? ne : il(
        ...ee(
          Ge(v.value, "field"),
          (X) => Pe(
            X.map(
              (Je) => ne.filter((en) => dl(en, { [Je.field]: Je.value }))
            )
          )
        ),
        ul
      );
      $.value = B;
    };
    return Se(s, T, {
      window
    }), Z(() => {
      Ce(), T();
    }), fn(() => {
      Ce(), T();
    }), W([f, v, u, d], () => {
      Ce(), T();
    }), (z, S) => (g(), F(te, {
      class: p(z.$style["list-container"]),
      purpose: "container",
      radius: "var(--agh-ref-border-radius-600)"
    }, {
      default: q(() => {
        var ne;
        return [
          y("div", {
            class: p(z.$style["list-toolbar"])
          }, [
            I(Qt, {
              modelValue: u.value,
              "onUpdate:modelValue": S[0] || (S[0] = (B) => u.value = B),
              class: p(z.$style["list-toolbar-search"]),
              type: "search"
            }, null, 8, ["modelValue", "class"]),
            n.filterOptions && !r(le)(n.filterOptions) ? Be((g(), b("div", {
              key: 0,
              class: p(z.$style["list-toolbar-tool"]),
              onKeydown: [
                S[3] || (S[3] = ue((B) => r(m).set(!0), ["esc"])),
                S[4] || (S[4] = ue((B) => r(m).set(!0), ["enter"]))
              ]
            }, [
              I(ve, {
                class: p(z.$style["list-toolbar-button"]),
                clicked: !r(m)(),
                onClick: S[1] || (S[1] = (B) => D(r(m))),
                icon: "fa6-solid:filter",
                variant: "text"
              }, null, 8, ["class", "clicked"]),
              v.value.length > 0 ? (g(), b("span", {
                key: 0,
                class: p(z.$style["list-toolbar-button-deco"])
              }, j(v.value.length), 3)) : x("", !0),
              r(m)() ? x("", !0) : (g(), F($e, {
                key: 1,
                class: p(z.$style["list-toolbar-menu"]),
                fields: o,
                options: r(c),
                multiple: !0,
                modelValue: v.value,
                "onUpdate:modelValue": S[2] || (S[2] = (B) => v.value = B),
                label: "Filter",
                "group-by": "label"
              }, null, 8, ["class", "options", "modelValue"]))
            ], 34)), [
              [r(Ie), () => r(m).set(!0)]
            ]) : x("", !0),
            n.sortOptions && !r(le)(n.sortOptions) ? Be((g(), b("div", {
              key: 1,
              class: p(z.$style["list-toolbar-tool"]),
              onKeydown: [
                S[7] || (S[7] = ue((B) => r(k).set(!0), ["esc"])),
                S[8] || (S[8] = ue((B) => r(k).set(!0), ["enter"]))
              ]
            }, [
              I(ve, {
                class: p(z.$style["list-toolbar-button"]),
                icon: ((ne = f.value) == null ? void 0 : ne.icon) ?? "fa6-solid:arrow-down-wide-short",
                clicked: !r(k)(),
                onClick: S[5] || (S[5] = (B) => D(r(k))),
                variant: "text"
              }, null, 8, ["class", "icon", "clicked"]),
              r(k)() ? x("", !0) : (g(), F($e, {
                key: 0,
                class: p(z.$style["list-toolbar-menu"]),
                fields: l,
                options: n.sortOptions,
                modelValue: f.value,
                "onUpdate:modelValue": S[6] || (S[6] = (B) => f.value = B)
              }, null, 8, ["class", "options", "modelValue"]))
            ], 34)), [
              [r(Ie), () => r(k).set(!0)]
            ]) : x("", !0)
          ], 2),
          y("div", {
            ref_key: "wrapperRef$",
            ref: s,
            class: p([
              z.$style["list-wrapper"],
              {
                [z.$style.overflowed]: r(V)()
              }
            ])
          }, [
            I(Dl, {
              items: $.value,
              "group-by": n.groupBy
            }, {
              placeholder: q(() => [
                G(z.$slots, "placeholder", {}, void 0, !0)
              ]),
              group: q((B) => [
                y("label", {
                  class: p(z.$style["list-item-label"])
                }, j(B.group), 3)
              ]),
              default: q((B) => [
                I(te, {
                  class: p(z.$style["list-item"]),
                  color: B.item.selected ? "blue" : "default",
                  clickable: !0,
                  onClick: (Te) => Kt(B.item),
                  radius: "var(--agh-ref-border-radius-400)"
                }, {
                  default: q(() => [
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
}, pu = /* @__PURE__ */ L(Jc, [["__cssModules", eu], ["__scopeId", "data-v-52db1428"]]);
export {
  ru as BadgeBox,
  He as BaseLink,
  Dl as BaseList,
  je as BasePoly,
  ve as ButtonBox,
  te as CardBox,
  pu as CardList,
  lu as DoughnutChart,
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
