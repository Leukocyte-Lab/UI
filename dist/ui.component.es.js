import { shallowRef as en, watchEffect as gt, readonly as vt, getCurrentScope as yt, onScopeDispose as $t, unref as r, computed as F, watch as H, ref as T, getCurrentInstance as tn, onMounted as ee, defineComponent as L, openBlock as y, createBlock as N, resolveDynamicComponent as nn, normalizeProps as sn, guardReactiveProps as rn, withCtx as E, renderSlot as U, createElementBlock as b, Fragment as O, createCommentVNode as S, renderList as I, normalizeClass as p, createElementVNode as _, createVNode as j, mergeProps as bt, toDisplayString as A, useCssVars as ln, reactive as on, pushScopeId as me, popScopeId as we, toRefs as fe, toRef as an, customRef as un, withDirectives as Pe, normalizeStyle as cn, onUpdated as dn, withKeys as ue } from "vue";
import { i as pe, d as le, g as fn, e as ae, f as pn, h as mt, j as wt, k as _n, l as hn, o as gn, m as ke, n as vn, q as Ie, r as yn, t as kt, v as $n, w as bn, x as mn, y as Ze, z as Xe, A as ze, B as _e, C as Oe, D as J, E as wn, F as kn, G as zn, I as zt, J as Ee, K as W, L as On, O as Sn, P as xn, Q as Je, R as Mn, T as An, V as Ot, W as St, X as Cn, Y as Pn, Z as Tn, _ as xt, $ as Bn, a0 as jn, a1 as he, u as Ve, p as ge, a2 as re, a3 as Mt, a4 as Q, M as k, b as q, s as G, a5 as Te } from "./parser-9fc50bc2.js";
import { Icon as oe } from "@iconify/vue/offline";
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
var Qe = 0 / 0, Fn = /^[-+]0x[0-9a-f]+$/i, Rn = /^0b[01]+$/i, Dn = /^0o[0-7]+$/i, qn = parseInt;
function Nn(e) {
  if (typeof e == "number")
    return e;
  if (pe(e))
    return Qe;
  if (le(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = le(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Ln(e);
  var n = Rn.test(e);
  return n || Dn.test(e) ? qn(e.slice(2), n ? 2 : 8) : Fn.test(e) ? Qe : +e;
}
var Ke = Object.create, Un = function() {
  function e() {
  }
  return function(t) {
    if (!le(t))
      return {};
    if (Ke)
      return Ke(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
const Gn = Un;
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
function Wn(e, t) {
  var n = -1, s = e.length;
  for (t || (t = Array(s)); ++n < s; )
    t[n] = e[n];
  return t;
}
var Yn = 800, Zn = 16, Xn = Date.now;
function Jn(e) {
  var t = 0, n = 0;
  return function() {
    var s = Xn(), l = Zn - (s - n);
    if (n = s, l > 0) {
      if (++t >= Yn)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Qn(e) {
  return function() {
    return e;
  };
}
var Kn = function() {
  try {
    var e = fn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const ve = Kn;
var es = ve ? function(e, t) {
  return ve(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Qn(t),
    writable: !0
  });
} : ae;
const ts = es;
var ns = Jn(ts);
const At = ns;
function ss(e, t) {
  for (var n = -1, s = e == null ? 0 : e.length; ++n < s && t(e[n], n, e) !== !1; )
    ;
  return e;
}
function Le(e, t, n) {
  t == "__proto__" && ve ? ve(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
var rs = Object.prototype, ls = rs.hasOwnProperty;
function Ct(e, t, n) {
  var s = e[t];
  (!(ls.call(e, t) && pn(s, n)) || n === void 0 && !(t in e)) && Le(e, t, n);
}
function ie(e, t, n, s) {
  var l = !n;
  n || (n = {});
  for (var o = -1, c = t.length; ++o < c; ) {
    var i = t[o], u = s ? s(n[i], e[i], i, n, e) : void 0;
    u === void 0 && (u = e[i]), l ? Le(n, i, u) : Ct(n, i, u);
  }
  return n;
}
var et = Math.max;
function Pt(e, t, n) {
  return t = et(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var s = arguments, l = -1, o = et(s.length - t, 0), c = Array(o); ++l < o; )
      c[l] = s[t + l];
    l = -1;
    for (var i = Array(t + 1); ++l < t; )
      i[l] = s[l];
    return i[t] = n(c), Hn(e, this, i);
  };
}
function Tt(e, t) {
  return At(Pt(e, t, ae), e + "");
}
function os(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var as = Object.prototype, is = as.hasOwnProperty;
function us(e) {
  if (!le(e))
    return os(e);
  var t = mt(e), n = [];
  for (var s in e)
    s == "constructor" && (t || !is.call(e, s)) || n.push(s);
  return n;
}
function Fe(e) {
  return wt(e) ? _n(e, !0) : us(e);
}
function cs(e) {
  var t = e == null ? 0 : e.length;
  return t ? hn(e, 1) : [];
}
function ds(e) {
  return At(Pt(e, void 0, cs), e + "");
}
var fs = gn(Object.getPrototypeOf, Object);
const Re = fs;
var ps = "[object Object]", _s = Function.prototype, hs = Object.prototype, Bt = _s.toString, gs = hs.hasOwnProperty, vs = Bt.call(Object);
function ys(e) {
  if (!ke(e) || vn(e) != ps)
    return !1;
  var t = Re(e);
  if (t === null)
    return !0;
  var n = gs.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Bt.call(n) == vs;
}
function $s(e, t, n) {
  var s = -1, l = e.length;
  t < 0 && (t = -t > l ? 0 : l + t), n = n > l ? l : n, n < 0 && (n += l), l = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var o = Array(l); ++s < l; )
    o[s] = e[s + t];
  return o;
}
function bs(e, t) {
  return e && ie(t, Ie(t), e);
}
function ms(e, t) {
  return e && ie(t, Fe(t), e);
}
var jt = typeof exports == "object" && exports && !exports.nodeType && exports, tt = jt && typeof module == "object" && module && !module.nodeType && module, ws = tt && tt.exports === jt, nt = ws ? yn.Buffer : void 0, st = nt ? nt.allocUnsafe : void 0;
function ks(e, t) {
  if (t)
    return e.slice();
  var n = e.length, s = st ? st(n) : new e.constructor(n);
  return e.copy(s), s;
}
function zs(e, t) {
  return ie(e, kt(e), t);
}
var Os = Object.getOwnPropertySymbols, Ss = Os ? function(e) {
  for (var t = []; e; )
    bn(t, kt(e)), e = Re(e);
  return t;
} : $n;
const It = Ss;
function xs(e, t) {
  return ie(e, It(e), t);
}
function Et(e) {
  return mn(e, Fe, It);
}
var Ms = Object.prototype, As = Ms.hasOwnProperty;
function Cs(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && As.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
function De(e) {
  var t = new e.constructor(e.byteLength);
  return new Ze(t).set(new Ze(e)), t;
}
function Ps(e, t) {
  var n = t ? De(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var Ts = /\w*$/;
function Bs(e) {
  var t = new e.constructor(e.source, Ts.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var rt = Xe ? Xe.prototype : void 0, lt = rt ? rt.valueOf : void 0;
function js(e) {
  return lt ? Object(lt.call(e)) : {};
}
function Is(e, t) {
  var n = t ? De(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var Es = "[object Boolean]", Vs = "[object Date]", Ls = "[object Map]", Fs = "[object Number]", Rs = "[object RegExp]", Ds = "[object Set]", qs = "[object String]", Ns = "[object Symbol]", Us = "[object ArrayBuffer]", Gs = "[object DataView]", Hs = "[object Float32Array]", Ws = "[object Float64Array]", Ys = "[object Int8Array]", Zs = "[object Int16Array]", Xs = "[object Int32Array]", Js = "[object Uint8Array]", Qs = "[object Uint8ClampedArray]", Ks = "[object Uint16Array]", er = "[object Uint32Array]";
function tr(e, t, n) {
  var s = e.constructor;
  switch (t) {
    case Us:
      return De(e);
    case Es:
    case Vs:
      return new s(+e);
    case Gs:
      return Ps(e, n);
    case Hs:
    case Ws:
    case Ys:
    case Zs:
    case Xs:
    case Js:
    case Qs:
    case Ks:
    case er:
      return Is(e, n);
    case Ls:
      return new s();
    case Fs:
    case qs:
      return new s(e);
    case Rs:
      return Bs(e);
    case Ds:
      return new s();
    case Ns:
      return js(e);
  }
}
function nr(e) {
  return typeof e.constructor == "function" && !mt(e) ? Gn(Re(e)) : {};
}
var sr = "[object Map]";
function rr(e) {
  return ke(e) && ze(e) == sr;
}
var ot = _e && _e.isMap, lr = ot ? Oe(ot) : rr;
const or = lr;
var ar = "[object Set]";
function ir(e) {
  return ke(e) && ze(e) == ar;
}
var at = _e && _e.isSet, ur = at ? Oe(at) : ir;
const cr = ur;
var dr = 1, fr = 2, pr = 4, Vt = "[object Arguments]", _r = "[object Array]", hr = "[object Boolean]", gr = "[object Date]", vr = "[object Error]", Lt = "[object Function]", yr = "[object GeneratorFunction]", $r = "[object Map]", br = "[object Number]", Ft = "[object Object]", mr = "[object RegExp]", wr = "[object Set]", kr = "[object String]", zr = "[object Symbol]", Or = "[object WeakMap]", Sr = "[object ArrayBuffer]", xr = "[object DataView]", Mr = "[object Float32Array]", Ar = "[object Float64Array]", Cr = "[object Int8Array]", Pr = "[object Int16Array]", Tr = "[object Int32Array]", Br = "[object Uint8Array]", jr = "[object Uint8ClampedArray]", Ir = "[object Uint16Array]", Er = "[object Uint32Array]", M = {};
M[Vt] = M[_r] = M[Sr] = M[xr] = M[hr] = M[gr] = M[Mr] = M[Ar] = M[Cr] = M[Pr] = M[Tr] = M[$r] = M[br] = M[Ft] = M[mr] = M[wr] = M[kr] = M[zr] = M[Br] = M[jr] = M[Ir] = M[Er] = !0;
M[vr] = M[Lt] = M[Or] = !1;
function ce(e, t, n, s, l, o) {
  var c, i = t & dr, u = t & fr, a = t & pr;
  if (n && (c = l ? n(e, s, l, o) : n(e)), c !== void 0)
    return c;
  if (!le(e))
    return e;
  var f = J(e);
  if (f) {
    if (c = Cs(e), !i)
      return Wn(e, c);
  } else {
    var v = ze(e), h = v == Lt || v == yr;
    if (wn(e))
      return ks(e, i);
    if (v == Ft || v == Vt || h && !l) {
      if (c = u || h ? {} : nr(e), !i)
        return u ? xs(e, ms(c, e)) : zs(e, bs(c, e));
    } else {
      if (!M[v])
        return l ? e : {};
      c = tr(e, v, i);
    }
  }
  o || (o = new kn());
  var g = o.get(e);
  if (g)
    return g;
  o.set(e, c), cr(e) ? e.forEach(function(m) {
    c.add(ce(m, t, n, m, e, o));
  }) : or(e) && e.forEach(function(m, w) {
    c.set(w, ce(m, t, n, w, e, o));
  });
  var d = a ? u ? Et : zn : u ? Fe : Ie, $ = f ? void 0 : d(e);
  return ss($ || e, function(m, w) {
    $ && (w = m, m = e[w]), Ct(c, w, ce(m, t, n, w, e, o));
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
  return zt(e, function(l, o, c) {
    t(s, l, n(l), c);
  }), s;
}
function Fr(e, t) {
  return function(n, s) {
    var l = J(n) ? Vr : Lr, o = t ? t() : {};
    return l(n, e, Ee(s), o);
  };
}
function Rr(e) {
  return ke(e) && wt(e);
}
var Dr = "Expected a function";
function qr(e, t, n) {
  if (typeof e != "function")
    throw new TypeError(Dr);
  return setTimeout(function() {
    e.apply(void 0, n);
  }, t);
}
var Nr = Tt(function(e, t, n) {
  return qr(e, Nn(t) || 0, n);
});
const Rt = Nr;
function Ur(e, t) {
  return W(t, function(n) {
    return [n, e[n]];
  });
}
function Gr(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(s) {
    n[++t] = [s, s];
  }), n;
}
var Hr = "[object Map]", Wr = "[object Set]";
function Yr(e) {
  return function(t) {
    var n = ze(t);
    return n == Hr ? On(t) : n == Wr ? Gr(t) : Ur(t, e(t));
  };
}
var Zr = Yr(Ie);
const X = Zr;
function Xr(e, t) {
  var n = [];
  return zt(e, function(s, l, o) {
    t(s, l, o) && n.push(s);
  }), n;
}
function Jr(e, t) {
  var n = J(e) ? Sn : Xr;
  return n(e, Ee(t));
}
function Qr(e) {
  return e && e.length ? e[0] : void 0;
}
var Kr = Object.prototype, el = Kr.hasOwnProperty, tl = Fr(function(e, t, n) {
  el.call(e, n) ? e[n].push(t) : Le(e, n, [t]);
});
const qe = tl;
function nl(e, t) {
  return e > t;
}
var sl = Math.min;
function rl(e, t, n) {
  for (var s = n ? Mn : An, l = e[0].length, o = e.length, c = o, i = Array(o), u = 1 / 0, a = []; c--; ) {
    var f = e[c];
    c && t && (f = W(f, Oe(t))), u = sl(f.length, u), i[c] = !n && (t || l >= 120 && f.length >= 120) ? new xn(c && f) : void 0;
  }
  f = e[0];
  var v = -1, h = i[0];
  e:
    for (; ++v < l && a.length < u; ) {
      var g = f[v], d = t ? t(g) : g;
      if (g = n || g !== 0 ? g : 0, !(h ? Je(h, d) : s(a, d, n))) {
        for (c = o; --c; ) {
          var $ = i[c];
          if (!($ ? Je($, d) : s(e[c], d, n)))
            continue e;
        }
        h && h.push(d), a.push(g);
      }
    }
  return a;
}
function ll(e) {
  return Rr(e) ? e : [];
}
var ol = Tt(function(e) {
  var t = Ot(e), n = W(e, ll);
  return t = typeof t == "function" ? t : void 0, t && n.pop(), n.length && n[0] === e[0] ? rl(n, void 0, t) : [];
});
const al = ol;
function il(e, t) {
  return t.length < 2 ? e : St(e, $s(t, 0, -1));
}
function ul(e, t) {
  return Cn(e, t);
}
function cl(e, t) {
  return e === t || Pn(e, t, Tn(t));
}
function dl(e, t) {
  return e < t;
}
function Dt(e, t, n) {
  for (var s = -1, l = e.length; ++s < l; ) {
    var o = e[s], c = t(o);
    if (c != null && (i === void 0 ? c === c && !pe(c) : n(c, i)))
      var i = c, u = o;
  }
  return u;
}
function fl(e) {
  return e && e.length ? Dt(e, ae, nl) : void 0;
}
function pl(e) {
  return e && e.length ? Dt(e, ae, dl) : void 0;
}
function _l(e, t) {
  return t = xt(t, e), e = il(e, t), e == null || delete e[Bn(Ot(t))];
}
function hl(e) {
  return ys(e) ? void 0 : e;
}
var gl = 1, vl = 2, yl = 4, $l = ds(function(e, t) {
  var n = {};
  if (e == null)
    return n;
  var s = !1;
  t = W(t, function(o) {
    return o = xt(o, e), s || (s = o.length > 1), o;
  }), ie(e, Et(e), n), s && (n = ce(n, gl | vl | yl, hl));
  for (var l = t.length; l--; )
    _l(n, t[l]);
  return n;
});
const qt = $l;
function bl(e, t) {
  var n = e.length;
  for (e.sort(t); n--; )
    e[n] = e[n].value;
  return e;
}
function ml(e, t) {
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
    var u = ml(l[s], o[s]);
    if (u) {
      if (s >= i)
        return u;
      var a = n[s];
      return u * (a == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
function kl(e, t, n) {
  t.length ? t = W(t, function(o) {
    return J(o) ? function(c) {
      return St(c, o.length === 1 ? o[0] : o);
    } : o;
  }) : t = [ae];
  var s = -1;
  t = W(t, Oe(Ee));
  var l = jn(e, function(o, c, i) {
    var u = W(t, function(a) {
      return a(o);
    });
    return { criteria: u, index: ++s, value: o };
  });
  return bl(l, function(o, c) {
    return wl(o, c, n);
  });
}
function zl(e, t, n, s) {
  return e == null ? [] : (J(t) || (t = t == null ? [] : [t]), n = s ? void 0 : n, J(n) || (n = n == null ? [] : [n]), kl(e, t, n));
}
var Ol = Object.defineProperty, Sl = Object.defineProperties, xl = Object.getOwnPropertyDescriptors, it = Object.getOwnPropertySymbols, Ml = Object.prototype.hasOwnProperty, Al = Object.prototype.propertyIsEnumerable, ut = (e, t, n) => t in e ? Ol(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Cl = (e, t) => {
  for (var n in t || (t = {}))
    Ml.call(t, n) && ut(e, n, t[n]);
  if (it)
    for (var n of it(t))
      Al.call(t, n) && ut(e, n, t[n]);
  return e;
}, Pl = (e, t) => Sl(e, xl(t));
function B(e, t) {
  var n;
  const s = en();
  return gt(() => {
    s.value = e();
  }, Pl(Cl({}, t), {
    flush: (n = t == null ? void 0 : t.flush) != null ? n : "sync"
  })), vt(s);
}
function Nt(e) {
  return yt() ? ($t(e), !0) : !1;
}
function ne(e) {
  return typeof e == "function" ? e() : r(e);
}
const Tl = typeof window < "u";
function Y(e) {
  var t;
  const n = ne(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Se = Tl ? window : void 0;
function Bl() {
  const e = T(!1);
  return tn() && ee(() => {
    e.value = !0;
  }), e;
}
function Ut(e) {
  const t = Bl();
  return F(() => (t.value, !!e()));
}
var ct = Object.getOwnPropertySymbols, jl = Object.prototype.hasOwnProperty, Il = Object.prototype.propertyIsEnumerable, El = (e, t) => {
  var n = {};
  for (var s in e)
    jl.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && ct)
    for (var s of ct(e))
      t.indexOf(s) < 0 && Il.call(e, s) && (n[s] = e[s]);
  return n;
};
function Vl(e, t, n = {}) {
  const s = n, { window: l = Se } = s, o = El(s, ["window"]);
  let c;
  const i = Ut(() => l && "MutationObserver" in l), u = () => {
    c && (c.disconnect(), c = void 0);
  }, a = H(
    () => Y(e),
    (v) => {
      u(), i.value && l && v && (c = new MutationObserver(t), c.observe(v, o));
    },
    { immediate: !0 }
  ), f = () => {
    u(), a();
  };
  return Nt(f), {
    isSupported: i,
    stop: f
  };
}
function Gt(e, t, n = {}) {
  const { window: s = Se, initialValue: l = "", observe: o = !1 } = n, c = T(l), i = F(() => {
    var a;
    return Y(t) || ((a = s == null ? void 0 : s.document) == null ? void 0 : a.documentElement);
  });
  function u() {
    var a;
    const f = ne(e), v = ne(i);
    if (v && s) {
      const h = (a = s.getComputedStyle(v).getPropertyValue(f)) == null ? void 0 : a.trim();
      c.value = h || l;
    }
  }
  return o && Vl(i, u, {
    attributes: !0,
    window: s
  }), H(
    [i, () => ne(e)],
    u,
    { immediate: !0 }
  ), H(
    c,
    (a) => {
      var f;
      (f = i.value) != null && f.style && i.value.style.setProperty(ne(e), a);
    }
  ), c;
}
var dt = Object.getOwnPropertySymbols, Ll = Object.prototype.hasOwnProperty, Fl = Object.prototype.propertyIsEnumerable, Rl = (e, t) => {
  var n = {};
  for (var s in e)
    Ll.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && dt)
    for (var s of dt(e))
      t.indexOf(s) < 0 && Fl.call(e, s) && (n[s] = e[s]);
  return n;
};
function Ne(e, t, n = {}) {
  const s = n, { window: l = Se } = s, o = Rl(s, ["window"]);
  let c;
  const i = Ut(() => l && "ResizeObserver" in l), u = () => {
    c && (c.disconnect(), c = void 0);
  }, a = F(
    () => Array.isArray(e) ? e.map((h) => Y(h)) : [Y(e)]
  ), f = H(
    a,
    (h) => {
      if (u(), i.value && l) {
        c = new ResizeObserver(t);
        for (const g of h)
          g && c.observe(g, o);
      }
    },
    { immediate: !0, flush: "post", deep: !0 }
  ), v = () => {
    u(), f();
  };
  return Nt(v), {
    isSupported: i,
    stop: v
  };
}
function xe(e, t = { width: 0, height: 0 }, n = {}) {
  const { window: s = Se, box: l = "content-box" } = n, o = F(() => {
    var u, a;
    return (a = (u = Y(e)) == null ? void 0 : u.namespaceURI) == null ? void 0 : a.includes("svg");
  }), c = T(t.width), i = T(t.height);
  return Ne(
    e,
    ([u]) => {
      const a = l === "border-box" ? u.borderBoxSize : l === "content-box" ? u.contentBoxSize : u.devicePixelContentBoxSize;
      if (s && o.value) {
        const f = Y(e);
        if (f) {
          const v = s.getComputedStyle(f);
          c.value = parseFloat(v.width), i.value = parseFloat(v.height);
        }
      } else if (a) {
        const f = Array.isArray(a) ? a : [a];
        c.value = f.reduce((v, { inlineSize: h }) => v + h, 0), i.value = f.reduce((v, { blockSize: h }) => v + h, 0);
      } else
        c.value = u.contentRect.width, i.value = u.contentRect.height;
    },
    n
  ), H(
    () => Y(e),
    (u) => {
      c.value = u ? t.width : 0, i.value = u ? t.height : 0;
    }
  ), {
    width: c,
    height: i
  };
}
const Ht = /* @__PURE__ */ L({
  __name: "BaseLink",
  props: {
    link: {},
    external: { type: Boolean, default: void 0 }
  },
  setup(e) {
    const t = e, n = B(
      () => t.external ?? /^(https?:\/\/)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&//=]*)$/.test(t.link || "")
    );
    return (s, l) => (y(), N(nn(t.link ? r(n) ? "a" : "RouterLink" : "div"), sn(rn(
      t.link ? {
        [r(n) ? "href" : "to"]: t.link,
        ...r(n) ? {
          target: "_blank",
          rel: "noopener noreferrer"
        } : {}
      } : {}
    )), {
      default: E(() => [
        U(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Dl = /* @__PURE__ */ L({
  __name: "BaseList",
  props: {
    items: {},
    groupBy: {}
  },
  setup(e) {
    const t = e, n = B(
      () => he(
        X(qe(t.items, t.groupBy ?? "")).map(([s, l]) => [
          s === "undefined" ? "" : s,
          l
        ])
      )
    );
    return (s, l) => (y(), b(O, null, [
      !t.items || t.items.length === 0 ? U(s.$slots, "placeholder", { key: 0 }) : S("", !0),
      (y(!0), b(O, null, I(r(n), (o, c) => (y(), b(O, {
        key: `list-group-${c}`
      }, [
        c ? U(s.$slots, "group", {
          key: 0,
          group: c,
          items: o
        }) : S("", !0),
        (y(!0), b(O, null, I(o, (i, u) => U(s.$slots, "default", {
          key: `list-item-${u}`,
          item: i,
          index: u
        })), 128))
      ], 64))), 128))
    ], 64));
  }
}), ql = ["width", "height"], Nl = /* @__PURE__ */ L({
  __name: "BasePoly",
  props: {
    height: {},
    width: {}
  },
  setup(e) {
    const t = e;
    return (n, s) => (y(), b("svg", {
      class: p(n.$style["poly-wrapper"]),
      width: t.width,
      height: t.height,
      preserveAspectRatio: "xMinYMin",
      "color-profile": "sRGB",
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      _("defs", null, [
        U(n.$slots, "defs", {}, void 0, !0)
      ]),
      U(n.$slots, "path", {}, void 0, !0)
    ], 10, ql));
  }
}), Ul = {
  "poly-wrapper": "_poly-wrapper_14erz_1"
}, R = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, l] of t)
    n[s] = l;
  return n;
}, Gl = {
  $style: Ul
}, Me = /* @__PURE__ */ R(Nl, [["__cssModules", Gl], ["__scopeId", "data-v-ac9d4bad"]]), Hl = /* @__PURE__ */ L({
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
    const n = e, { triggered: s, onTrigger: l } = Ve((o) => {
      n.disabled ? (o.preventDefault(), o.stopPropagation()) : t("click", o);
    });
    return (o, c) => (y(), b(O, null, [
      j(Ht, bt({
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
        default: E(() => [
          n.label ? (y(), b("span", {
            key: 0,
            class: p([o.$style["button-content"]])
          }, A(n.label), 3)) : S("", !0),
          n.icon ? (y(), b("span", {
            key: 1,
            class: p([o.$style["button-icon"]])
          }, [
            j(r(oe), {
              icon: n.icon
            }, null, 8, ["icon"])
          ], 2)) : S("", !0)
        ]),
        _: 1
      }, 16, ["link", "class", "aria-disabled", "aria-label", "onClick"]),
      n.variant === "extendable-rect" ? (y(), b("div", {
        key: 0,
        class: p(o.$style["button-placeholder"])
      }, null, 2)) : S("", !0)
    ], 64));
  }
}), Wl = "_behavior_assvn_1", Yl = "_clickable_assvn_1", Zl = "_disabled_assvn_4", Xl = "_draggable_assvn_7", Jl = "_loading_assvn_10", Ql = "_rounded_assvn_14", Kl = "_secondary_assvn_14", eo = "_rect_assvn_14", to = "_square_assvn_14", no = "_circle_assvn_14", so = "_clicked_assvn_22", ro = "_small_assvn_143", lo = "_large_assvn_147", oo = "_text_assvn_305", ao = {
  behavior: Wl,
  clickable: Yl,
  disabled: Zl,
  draggable: Xl,
  loading: Jl,
  "button-container": "_button-container_assvn_14",
  rounded: Ql,
  secondary: Kl,
  rect: eo,
  "extendable-rect": "_extendable-rect_assvn_14",
  square: to,
  circle: no,
  clicked: so,
  "button-icon": "_button-icon_assvn_98",
  "button-content": "_button-content_assvn_114",
  small: ro,
  large: lo,
  "button-placeholder": "_button-placeholder_assvn_271",
  text: oo
}, io = {
  $style: ao
}, ye = /* @__PURE__ */ R(Hl, [["__cssModules", io], ["__scopeId", "data-v-f286cd6c"]]), uo = /* @__PURE__ */ L({
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
    ln((l) => ({
      "1dbc842c": t.radius
    }));
    const { triggered: n, onTrigger: s } = Ve((l) => {
      t.clickable || l.preventDefault();
    });
    return (l, o) => (y(), N(Ht, {
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
      default: E(() => [
        U(l.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["link", "class", "onClick"]));
  }
}), co = "_behavior_rvqmg_1", fo = "_clickable_rvqmg_1", po = "_disabled_rvqmg_4", _o = "_draggable_rvqmg_7", ho = "_loading_rvqmg_10", go = "_metallic_rvqmg_14", vo = "_flat_rvqmg_14", yo = "_clicked_rvqmg_22", $o = "_dash_rvqmg_92", bo = {
  behavior: co,
  clickable: fo,
  disabled: po,
  draggable: _o,
  loading: ho,
  "card-container": "_card-container_rvqmg_14",
  "color-default": "_color-default_rvqmg_14",
  metallic: go,
  "has-stroke": "_has-stroke_rvqmg_14",
  flat: vo,
  "color-cyan": "_color-cyan_rvqmg_14",
  "color-blue": "_color-blue_rvqmg_14",
  "color-green": "_color-green_rvqmg_14",
  "color-orange": "_color-orange_rvqmg_14",
  "color-red": "_color-red_rvqmg_14",
  clicked: yo,
  dash: $o,
  "stroke-bold": "_stroke-bold_rvqmg_399",
  "stroke-normal": "_stroke-normal_rvqmg_402",
  "stroke-thin": "_stroke-thin_rvqmg_405",
  "purpose-box": "_purpose-box_rvqmg_408",
  "purpose-container": "_purpose-container_rvqmg_412"
}, mo = {
  $style: bo
}, K = /* @__PURE__ */ R(uo, [["__cssModules", mo], ["__scopeId", "data-v-d941fd1e"]]), Ue = ({
  type: e,
  axises: t,
  data: n
}) => {
  const s = on({
    datasets: [],
    axises: {}
  }), l = {
    datasets: B(() => s.datasets),
    axises: B(() => s.axises)
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
    ...he(
      X(u).filter(([, v]) => !re(v)).map(([v, h]) => {
        const g = h.selector ? q(f, h.selector) : null, d = h.accessor ? ge(f, h.accessor) : g;
        return [
          v,
          {
            normalized: Number(
              h.type === "number" ? parseFloat(String(g)) : h.type === "date" ? new Date(Number(g)) : g
            ),
            value: d
          }
        ];
      })
    )
  })), i = (u, a, f) => {
    const v = o(f).map((d) => ({
      ...d,
      label: ge(d, d.label ?? ""),
      series: c(a, d.series)
    })), h = v.flatMap((d) => d.series), g = he(
      X(a).filter(([, d]) => !re(d)).map(([d, $]) => {
        const m = Mt(Q(h, `${d}.${$.type === "string" ? "value" : "normalized"}`)), w = Number($.min === "auto" ? pl(m) : $.min ?? 0), V = Number(
          $.max === "auto" ? fl(m) ?? 0 : $.max ?? m.length - (/radar|doughnut/.test(u ?? "") ? 0 : 1)
        );
        return [
          d,
          {
            ...$,
            min: w,
            max: V,
            metrics: $.type === "string" ? m.map((C, D) => ({
              normalized: D / (V - w),
              value: C
            })) : Array(k.clamp(k.ceil((V - w) / ($.step ?? 1)) + 1, 0, 1 / 0)).fill(0).map((C, D) => ({
              normalized: D / k.ceil((V - w) / ($.step ?? 1)),
              value: w + ($.step ?? 1) * D
            }))
          }
        ];
      })
    );
    return g && X(g).forEach(([d, $]) => {
      $.type === "string" ? v.forEach((m) => {
        m.series.forEach((w) => {
          w[d].normalized = Q($.metrics, "value").indexOf(w[d].value) / (($.metrics ?? []).length - (/radar|doughnut/.test(u ?? "") ? 0 : 1));
        });
      }) : v.forEach((m) => {
        m.series.forEach((w) => {
          w[d].normalized = (Number(w[d].normalized ?? 0) - Number($.min)) / (Number($.max) - Number($.min));
        });
      });
    }), {
      datasets: v,
      axises: g
    };
  };
  return gt(() => {
    const u = i(r(e), r(t), r(n));
    s.datasets = u.datasets, s.axises = u.axises;
  }), {
    ...l
  };
}, wo = (e) => (me("data-v-fefd0601"), e = e(), we(), e), ko = ["cx", "cy", "r", "stroke-dashoffset", "stroke-dasharray"], zo = ["x", "y"], Oo = /* @__PURE__ */ wo(() => /* @__PURE__ */ _("hr", null, null, -1)), So = { id: "chart-content-clip" }, xo = ["cx", "cy", "r"], Mo = { "clip-path": "url(#chart-content-clip)" }, Ao = ["height", "width", "x", "y"], Co = /* @__PURE__ */ L({
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
    const t = e, n = T(), { width: s, height: l } = xe(n), { axises: o, datasets: c } = Ue({
      type: "doughnut",
      data: t.datasets,
      axises: t.axises
    }), i = B(
      () => k.clamp(
        k.min(s.value - t.options.offset.x, l.value - t.options.offset.y) / 2,
        0,
        1 / 0
      )
    ), u = B(() => t.options.round ? 30 : 15), a = B(() => i.value * 2 * k.PI), f = B(() => ({
      x: s.value / 2,
      y: l.value / 2
    })), v = B(
      () => c.value.map((g) => g.series.reduce((d, $) => d + $.y.normalized, 0))
    ), h = B(
      () => c.value.map((g, d) => ({
        ...g,
        series: g.series.map(($) => ({
          ...$,
          y: {
            ...$.y,
            normalized: k.clamp(
              $.y.normalized / v.value[d] - u.value / a.value,
              0,
              1
            )
          }
        })).filter(($) => $.y.normalized > u.value / a.value / 2).map(($, m, w) => ({
          ...$,
          y: {
            ...$.y,
            normalized: $.y.normalized / w.reduce((V, C) => V + C.y.normalized, 0)
          }
        })).map(($, m, w) => ({
          ...$,
          y: {
            ...$.y,
            normalized: k.clamp(
              $.y.normalized / w.reduce((V, C) => V + C.y.normalized, 0) - u.value / a.value,
              0,
              1
            )
          }
        })).map(($, m, w) => ({
          ...$,
          y: {
            ...$.y,
            offset: w.slice(0, m).reduce((V, C) => V + C.y.normalized, 0)
          }
        })).map(($, m) => ({
          ...$,
          x: {
            ...$.x,
            label: k.cos(
              k.rad(
                ($.y.offset + $.y.normalized / 2 + u.value / a.value * m) * 360 - 90
              )
            )
          },
          y: {
            ...$.y,
            label: k.sin(
              k.rad(
                ($.y.offset + $.y.normalized / 2 + u.value / a.value * m) * 360 - 90
              )
            )
          }
        }))
      }))
    );
    return (g, d) => (y(), b("div", {
      ref_key: "wrapperRef$",
      ref: n,
      class: p(g.$style["chart-container"])
    }, [
      j(Me, {
        height: r(l),
        width: r(s)
      }, {
        path: E(() => [
          _("g", {
            class: p([g.$style["chart-group-plots"]])
          }, [
            (y(!0), b(O, null, I(r(h), ($) => (y(), b(O, {
              key: $.label
            }, [
              (y(!0), b(O, null, I($.series, (m, w) => (y(), b("g", {
                key: `plot-${w}`,
                class: p(g.$style["chart-area"])
              }, [
                _("circle", {
                  cx: r(f).x,
                  cy: r(f).y,
                  r: r(i),
                  "stroke-dashoffset": m.y.offset * r(a) * -1 - r(u) * w + 0.25 * r(a),
                  "stroke-dasharray": `${m.y.normalized * r(a)} ${(1 - m.y.normalized) * r(a)}`,
                  class: p([
                    g.$style.behavior,
                    g.$style["chart-area"],
                    g.$style.doughnut,
                    g.$style.plot,
                    g.$style.clickable,
                    {
                      [g.$style.round]: t.options.round
                    }
                  ]),
                  "pointer-events": "visibleStroke"
                }, null, 10, ko),
                (y(), b("foreignObject", {
                  x: r(f).x + r(i) * m.x.label - 260 * +(m.x.label < 0),
                  y: r(f).y + r(i) * m.y.label - 240 * +(m.y.label < 0),
                  height: "240",
                  width: "260",
                  class: p([g.$style["chart-area"], g.$style["legend-container"]])
                }, [
                  j(K, {
                    class: p([g.$style["chart-area"], g.$style["legend-wrapper"]]),
                    radius: "var(--agh-ref-border-radius-500)"
                  }, {
                    default: E(() => [
                      t.options.title ? (y(), b(O, { key: 0 }, [
                        _("h1", {
                          class: p([g.$style["chart-area"], g.$style["legend-title"], g.$style.doughnut])
                        }, [
                          _("span", null, A(m.x.value), 1)
                        ], 2),
                        Oo
                      ], 64)) : S("", !0),
                      (y(!0), b(O, null, I(r(o), (V, C) => (y(), b(O, { key: C }, [
                        !/(x)/.test(C) && V && m[C] ? (y(), b("div", {
                          key: 0,
                          class: p([
                            g.$style["chart-area"],
                            g.$style["legend-group"],
                            g.$style.doughnut
                          ])
                        }, [
                          _("label", {
                            class: p([g.$style["chart-area"], g.$style["legend-label"]])
                          }, A(V.label), 3),
                          _("p", {
                            class: p([g.$style["chart-area"], g.$style["legend-value"]])
                          }, A(m[C].value), 3)
                        ], 2)) : S("", !0)
                      ], 64))), 128))
                    ]),
                    _: 2
                  }, 1032, ["class", "radius"])
                ], 10, zo))
              ], 2))), 128))
            ], 64))), 128))
          ], 2),
          _("clipPath", So, [
            _("circle", {
              cx: r(f).x,
              cy: r(f).y,
              r: r(i) - 10
            }, null, 8, xo)
          ]),
          _("g", Mo, [
            (y(), b("foreignObject", {
              class: p(g.$style["chart-content-wrapper"]),
              height: r(i) * 2,
              width: r(i) * 2,
              x: r(f).x - r(i),
              y: r(f).y - r(i)
            }, [
              U(g.$slots, "default", {}, void 0, !0)
            ], 10, Ao))
          ])
        ]),
        _: 3
      }, 8, ["height", "width"])
    ], 2));
  }
}), Po = "_behavior_pzvhi_1", To = "_clickable_pzvhi_1", Bo = "_disabled_pzvhi_4", jo = "_draggable_pzvhi_7", Io = "_loading_pzvhi_10", Eo = "_path_pzvhi_24", Vo = "_radar_pzvhi_29", Lo = "_label_pzvhi_32", Fo = "_plot_pzvhi_85", Ro = "_point_pzvhi_85", Do = "_doughnut_pzvhi_96", qo = "_bg_pzvhi_102", No = "_round_pzvhi_106", Uo = "_line_pzvhi_119", Go = {
  behavior: Po,
  clickable: To,
  disabled: Bo,
  draggable: jo,
  loading: Io,
  "chart-container": "_chart-container_pzvhi_14",
  "chart-axis": "_chart-axis_pzvhi_24",
  path: Eo,
  radar: Vo,
  label: Lo,
  "font-align--center": "_font-align--center_pzvhi_45",
  "font-align--right": "_font-align--right_pzvhi_48",
  "font-align--left": "_font-align--left_pzvhi_51",
  "box-align--center": "_box-align--center_pzvhi_54",
  "box-align--left": "_box-align--left_pzvhi_57",
  "box-align--right": "_box-align--right_pzvhi_60",
  "chart-group-plots": "_chart-group-plots_pzvhi_67",
  "chart-area": "_chart-area_pzvhi_67",
  plot: Fo,
  point: Ro,
  doughnut: Do,
  "legend-container": "_legend-container_pzvhi_96",
  bg: qo,
  round: No,
  line: Uo,
  "legend-wrapper": "_legend-wrapper_pzvhi_147",
  "legend-group": "_legend-group_pzvhi_158",
  "legend-value": "_legend-value_pzvhi_166",
  "legend-label": "_legend-label_pzvhi_169",
  "legend-title": "_legend-title_pzvhi_173"
}, Ho = {
  $style: Go
}, ju = /* @__PURE__ */ R(Co, [["__cssModules", Ho], ["__scopeId", "data-v-fefd0601"]]), Wo = (e) => (me("data-v-7ca4eb50"), e = e(), we(), e), Yo = ["d"], Zo = ["x", "y", "text-anchor"], Xo = ["x", "y"], Jo = ["d"], Qo = ["cx", "cy"], Ko = ["cx", "cy"], ea = ["x", "y"], ta = /* @__PURE__ */ Wo(() => /* @__PURE__ */ _("hr", null, null, -1)), na = /* @__PURE__ */ L({
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
    const t = e, n = T(), { width: s, height: l } = xe(n), { axises: o, datasets: c } = Ue({
      type: "line",
      data: fe(t).datasets,
      axises: fe(t).axises
    }), i = B(
      () => {
        var a, f, v, h, g, d;
        return (f = (a = o.value) == null ? void 0 : a.x) != null && f.metrics && ((h = (v = o.value) == null ? void 0 : v.y) != null && h.metrics) && l.value && l.value - t.options.offset.y > 0 && s.value && s.value - t.options.offset.x > 0 ? `
  M ${t.options.offset.x} 0
  L ${t.options.offset.x} ${l.value - t.options.offset.y}
  L ${s.value} ${l.value - t.options.offset.y}
  ${(g = t.options.grid) != null && g.includes("x") ? `${o.value.x.metrics.map(
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
    ), u = B(
      () => i.value && c ? c.value.map((a) => ({
        ...a,
        path: `
            ${a.series.map(
          (f, v) => v === 0 ? `M ${f.x.normalized * (s.value - t.options.offset.x) + t.options.offset.x} ${(1 - f.y.normalized) * (l.value - t.options.offset.y)}` : t.options.curve === "smooth" ? v === 1 ? `C ${a.series[v - 1].x.normalized * (s.value - t.options.offset.x) + t.options.offset.x + s.value / a.series.length * t.options.radius} ${(1 - a.series[v - 1].y.normalized) * (l.value - t.options.offset.y)} ${f.x.normalized * (s.value - t.options.offset.x) + t.options.offset.x - s.value / a.series.length * t.options.radius} ${(1 - f.y.normalized) * (l.value - t.options.offset.y)} ${f.x.normalized * (s.value - t.options.offset.x) + t.options.offset.x} ${(1 - f.y.normalized) * (l.value - t.options.offset.y)}` : `S ${f.x.normalized * (s.value - t.options.offset.x) + t.options.offset.x - s.value / a.series.length * t.options.radius} ${(1 - f.y.normalized) * (l.value - t.options.offset.y)} ${f.x.normalized * (s.value - t.options.offset.x) + t.options.offset.x} ${(1 - f.y.normalized) * (l.value - t.options.offset.y)}` : `L ${f.x.normalized * (s.value - t.options.offset.x) + t.options.offset.x} ${(1 - f.y.normalized) * (l.value - t.options.offset.y)}`
        ).join(`
`)}`
      })) : []
    );
    return (a, f) => (y(), b("div", {
      ref_key: "wrapperRef$",
      ref: n,
      class: p(a.$style["chart-container"])
    }, [
      j(Me, {
        height: r(l),
        width: r(s)
      }, {
        defs: E(() => []),
        path: E(() => [
          _("g", {
            id: "chart-group-axises",
            class: p([a.$style["chart-group-axises"]])
          }, [
            _("path", {
              d: r(i),
              class: p([a.$style["chart-axis"], a.$style.line, a.$style.path])
            }, null, 10, Yo)
          ], 2),
          r(o) && r(s) && r(l) ? (y(), b("g", {
            key: 0,
            class: p([a.$style["chart-group-axises-label"]])
          }, [
            r(o).x && r(o).x.metrics ? (y(!0), b(O, { key: 0 }, I(r(o).x.metrics, (v, h) => (y(), b("text", {
              key: `axis-x--${h}`,
              x: v.normalized * (r(s) - t.options.offset.x) + t.options.offset.x,
              y: r(l) - t.options.offset.y + 20,
              class: p([a.$style["chart-axis"], a.$style.label]),
              "text-anchor": h === 0 ? "start" : h === r(o).x.metrics.length - 1 ? "end" : "middle"
            }, A(v.value), 11, Zo))), 128)) : S("", !0),
            r(o).y && r(o).y.metrics ? (y(!0), b(O, { key: 1 }, I(r(o).y.metrics, (v, h) => (y(), b("text", {
              key: `axis-y--${h}`,
              x: t.options.offset.x - 10,
              y: (1 - v.normalized) * (r(l) - t.options.offset.y) + 5,
              class: p([a.$style["chart-axis"], a.$style.label]),
              "text-anchor": "end"
            }, A(v.value), 11, Xo))), 128)) : S("", !0)
          ], 2)) : S("", !0),
          _("g", {
            class: p([a.$style["chart-group-plots"]])
          }, [
            (y(!0), b(O, null, I(r(u), (v) => (y(), b("g", {
              key: v.label,
              class: p([a.$style["chart-area"], a.$style.line, a.$style.plot])
            }, [
              _("path", {
                d: v.path
              }, null, 8, Jo)
            ], 2))), 128)),
            (y(!0), b(O, null, I(r(c), (v) => (y(), b(O, null, [
              (y(!0), b(O, null, I(v.series, (h, g) => (y(), b("g", {
                key: `chart-plot-${v.label}-plot-${g}`,
                class: p(a.$style["chart-area"])
              }, [
                _("circle", {
                  class: p([
                    a.$style.behavior,
                    a.$style["chart-area"],
                    a.$style.point,
                    a.$style.plot,
                    a.$style.clickable
                  ]),
                  cx: h.x.normalized * (r(s) - t.options.offset.x) + t.options.offset.x,
                  cy: (1 - h.y.normalized) * (r(l) - t.options.offset.y),
                  r: "50"
                }, null, 10, Qo),
                _("circle", {
                  class: p([a.$style["chart-area"], a.$style.point, a.$style.plot]),
                  cx: h.x.normalized * (r(s) - t.options.offset.x) + t.options.offset.x,
                  cy: (1 - h.y.normalized) * (r(l) - t.options.offset.y),
                  r: "5"
                }, null, 10, Ko),
                (y(), b("foreignObject", {
                  x: h.x.normalized * (r(s) - t.options.offset.x) + t.options.offset.x - 140,
                  y: (1 - h.y.normalized) * (r(l) - t.options.offset.y) - (h.y.normalized >= 0.5 ? 0 : 220),
                  height: "220",
                  width: "280",
                  class: p([a.$style["chart-area"], a.$style["legend-container"]])
                }, [
                  j(K, {
                    class: p([a.$style["chart-area"], a.$style["legend-wrapper"]]),
                    radius: "var(--agh-ref-border-radius-500)"
                  }, {
                    default: E(() => [
                      t.options.title ? (y(), b(O, { key: 0 }, [
                        _("h1", {
                          class: p([a.$style["chart-area"], a.$style["legend-title"]])
                        }, A(r(ge)(h.data, t.options.title)), 3),
                        ta
                      ], 64)) : S("", !0),
                      (y(!0), b(O, null, I(r(o), (d, $) => (y(), b(O, { key: $ }, [
                        d && h[$] ? (y(), b("div", {
                          key: 0,
                          class: p([a.$style["chart-area"], a.$style["legend-group"]])
                        }, [
                          _("label", {
                            class: p([a.$style["chart-area"], a.$style["legend-label"]])
                          }, A(d.label), 3),
                          _("p", {
                            class: p([a.$style["chart-area"], a.$style["legend-value"]])
                          }, A(h[$].value), 3)
                        ], 2)) : S("", !0)
                      ], 64))), 128))
                    ]),
                    _: 2
                  }, 1032, ["class", "radius"])
                ], 10, ea))
              ], 2))), 128))
            ], 64))), 256))
          ], 2)
        ]),
        _: 1
      }, 8, ["height", "width"])
    ], 2));
  }
}), sa = "_behavior_1sfnc_1", ra = "_clickable_1sfnc_1", la = "_disabled_1sfnc_4", oa = "_draggable_1sfnc_7", aa = "_loading_1sfnc_10", ia = "_path_1sfnc_24", ua = "_radar_1sfnc_29", ca = "_label_1sfnc_32", da = "_plot_1sfnc_85", fa = "_point_1sfnc_85", pa = "_doughnut_1sfnc_96", _a = "_bg_1sfnc_102", ha = "_round_1sfnc_106", ga = "_line_1sfnc_119", va = {
  behavior: sa,
  clickable: ra,
  disabled: la,
  draggable: oa,
  loading: aa,
  "chart-container": "_chart-container_1sfnc_14",
  "chart-axis": "_chart-axis_1sfnc_24",
  path: ia,
  radar: ua,
  label: ca,
  "font-align--center": "_font-align--center_1sfnc_45",
  "font-align--right": "_font-align--right_1sfnc_48",
  "font-align--left": "_font-align--left_1sfnc_51",
  "box-align--center": "_box-align--center_1sfnc_54",
  "box-align--left": "_box-align--left_1sfnc_57",
  "box-align--right": "_box-align--right_1sfnc_60",
  "chart-group-plots": "_chart-group-plots_1sfnc_67",
  "chart-area": "_chart-area_1sfnc_67",
  plot: da,
  point: fa,
  doughnut: pa,
  "legend-container": "_legend-container_1sfnc_96",
  bg: _a,
  round: ha,
  line: ga,
  "legend-wrapper": "_legend-wrapper_1sfnc_147",
  "legend-group": "_legend-group_1sfnc_158",
  "legend-value": "_legend-value_1sfnc_166",
  "legend-label": "_legend-label_1sfnc_169",
  "legend-title": "_legend-title_1sfnc_173"
}, ya = {
  $style: va
}, Iu = /* @__PURE__ */ R(na, [["__cssModules", ya], ["__scopeId", "data-v-7ca4eb50"]]), $a = ["id"], ba = ["stdDeviation"], ma = /* @__PURE__ */ _("feColorMatrix", {
  in: "blur",
  mode: "matrix",
  values: "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10",
  result: "mask"
}, null, -1), wa = /* @__PURE__ */ _("feComposite", {
  in: "SourceGraphic",
  in2: "mask",
  operator: "in"
}, null, -1), ft = /* @__PURE__ */ L({
  __name: "RoundEffect",
  props: {
    id: {},
    radius: {}
  },
  setup(e) {
    const t = e;
    return (n, s) => (y(), b("filter", {
      id: t.id
    }, [
      _("feGaussianBlur", {
        stdDeviation: t.radius,
        in: "SourceGraphic",
        result: "blur"
      }, null, 8, ba),
      ma,
      wa
    ], 8, $a));
  }
}), ka = (e) => (me("data-v-5b47bbf2"), e = e(), we(), e), za = ["innerHTML"], Oa = { id: "chart-area-bg-mask" }, Sa = ["d"], xa = ["d"], Ma = ["d"], Aa = ["x", "y", "height", "width"], Ca = ["d"], Pa = ["cx", "cy"], Ta = ["cx", "cy"], Ba = ["x", "y"], ja = /* @__PURE__ */ ka(() => /* @__PURE__ */ _("hr", null, null, -1)), Ia = /* @__PURE__ */ L({
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
    const t = e, n = T(), { width: s, height: l } = xe(n), { axises: o, datasets: c } = Ue({
      type: "radar",
      data: fe(t).datasets,
      axises: fe(t).axises
    }), i = B(
      () => k.clamp(
        k.min(s.value - t.options.offset.x, l.value - t.options.offset.y) / 2,
        0,
        1 / 0
      )
    ), u = B(() => ({
      x: s.value / 2,
      y: l.value / 2
    })), a = F(
      () => {
        var d, $;
        return i.value > 0 && (($ = (d = o.value) == null ? void 0 : d.x) != null && $.metrics) ? `
      ${o.value.x.metrics.map(
          (m, w) => `${w === 0 ? "M" : "L"} ${u.value.x + i.value * k.cos(k.rad(m.normalized * 360 - 90))} ${u.value.y + i.value * k.sin(k.rad(m.normalized * 360 - 90))}`
        ).join(" ")} Z
      ` : "";
      }
    ), f = F(
      () => a.value && c.value ? c.value.map((d) => ({
        ...d,
        path: `${d.series.map(
          ($, m) => `${m === 0 ? "M" : "L"} ${u.value.x + i.value * $.y.normalized * k.cos(k.rad($.x.normalized * 360 - 90))} ${u.value.y + i.value * $.y.normalized * k.sin(k.rad($.x.normalized * 360 - 90))}`
        ).join(" ")} Z`
      })) : []
    ), v = B(
      () => i.value > 0 && o.value.x.metrics ? `M ${u.value.x} ${u.value.y}
      ${o.value.x.metrics.map(
        (d) => `L ${u.value.x + i.value * k.cos(k.rad(d.normalized * 360 - 90))} ${u.value.y + i.value * k.sin(k.rad(d.normalized * 360 - 90))}
            M ${u.value.x} ${u.value.y}`
      ).join(`
`)}
      Z` : ""
    ), h = G(""), g = () => {
      n.value && (h.set(
        Gt("--chart-bg-fill-svg", n, {
          observe: !0
        }).value
      ), h() || Rt(g, 1));
    };
    return ee(() => {
      g();
    }), (d, $) => (y(), b("div", {
      ref_key: "wrapperRef$",
      ref: n,
      class: p(d.$style["chart-container"])
    }, [
      j(Me, {
        height: r(l),
        width: r(s)
      }, {
        defs: E(() => [
          j(ft, {
            id: "chart-area-bg-round",
            radius: 6
          }),
          j(ft, {
            id: "chart-area-plot-round",
            radius: 3
          }),
          _("g", {
            innerHTML: r(h)()
          }, null, 8, za),
          _("mask", Oa, [
            _("path", {
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
            }, null, 10, Sa)
          ])
        ]),
        path: E(() => [
          _("path", {
            d: a.value,
            class: p([
              d.$style["chart-area"],
              d.$style.radar,
              d.$style.bg,
              {
                [d.$style.round]: t.options.round
              }
            ])
          }, null, 10, xa),
          _("g", {
            id: "chart-group-axises",
            class: p([d.$style["chart-group-axises"]]),
            mask: "url(#chart-area-bg-mask)"
          }, [
            _("path", {
              d: r(v),
              class: p([d.$style["chart-axis"], d.$style.radar, d.$style.path])
            }, null, 10, Ma)
          ], 2),
          r(o) ? (y(), b("g", {
            key: 0,
            class: p([d.$style["chart-group-axises-label"]])
          }, [
            (y(!0), b(O, null, I(r(o).x.metrics, (m) => (y(), b("foreignObject", {
              key: m.value,
              x: r(u).x + r(i) * r(k).cos(r(k).rad(m.normalized * 360 - 90)) - (m.normalized % 0.5 === 0 ? r(i) / 2 : m.normalized > 0.5 ? r(i) : 0),
              y: r(u).y + r(i) * 1.1 * r(k).sin(r(k).rad(m.normalized * 360 - 90)) - r(i) / 6,
              height: r(i) / 3,
              width: r(i),
              class: p([d.$style["chart-axis"], d.$style.radar, d.$style["label-wrapper"]])
            }, [
              _("p", {
                class: p(["font-bold", [
                  d.$style["chart-axis"],
                  d.$style.radar,
                  d.$style.label,
                  m.normalized % 0.5 === 0 ? d.$style["font-align--center"] : m.normalized < 0.5 ? d.$style["font-align--left"] : d.$style["font-align--right"],
                  m.normalized % 0.5 === 0 ? d.$style["box-align--center"] : m.normalized < 0.5 ? d.$style["box-align--left"] : d.$style["box-align--right"]
                ]])
              }, A(m.value), 3)
            ], 10, Aa))), 128))
          ], 2)) : S("", !0),
          _("g", {
            class: p([d.$style["chart-group-plots"]])
          }, [
            (y(!0), b(O, null, I(f.value, (m) => (y(), b("g", {
              key: m.label,
              class: p([d.$style["chart-area"], d.$style.radar, d.$style.plot])
            }, [
              _("path", {
                d: m.path,
                class: p([
                  {
                    [d.$style.round]: t.options.round
                  }
                ])
              }, null, 10, Ca)
            ], 2))), 128))
          ], 2),
          (y(!0), b(O, null, I(r(c), (m) => (y(), b("g", {
            key: m.label,
            class: p([d.$style["chart-area-label"]])
          }, [
            (y(!0), b(O, null, I(m.series, (w, V) => (y(), b("g", {
              key: `plot-${V}`,
              class: p(d.$style["chart-area"])
            }, [
              _("circle", {
                class: p([
                  d.$style.behavior,
                  d.$style["chart-area"],
                  d.$style.point,
                  d.$style.plot,
                  d.$style.clickable
                ]),
                cx: r(u).x + r(i) * w.y.normalized * r(k).cos(r(k).rad(w.x.normalized * 360 - 90)),
                cy: r(u).y + r(i) * w.y.normalized * r(k).sin(r(k).rad(w.x.normalized * 360 - 90)),
                r: "10"
              }, null, 10, Pa),
              _("circle", {
                class: p([d.$style["chart-area"], d.$style.radar, d.$style.point, d.$style.plot]),
                cx: r(u).x + r(i) * w.y.normalized * r(k).cos(r(k).rad(w.x.normalized * 360 - 90)),
                cy: r(u).y + r(i) * w.y.normalized * r(k).sin(r(k).rad(w.x.normalized * 360 - 90)),
                r: "5"
              }, null, 10, Ta),
              (y(), b("foreignObject", {
                x: r(u).x + r(i) * w.y.normalized * r(k).cos(r(k).rad(w.x.normalized * 360 - 90)) - 130,
                y: r(u).y + r(i) * w.y.normalized * r(k).sin(r(k).rad(w.x.normalized * 360 - 90)),
                height: "200",
                width: "260",
                class: p([d.$style["chart-area"], d.$style["legend-container"]])
              }, [
                j(K, {
                  class: p([d.$style["chart-area"], d.$style["legend-wrapper"]]),
                  radius: "var(--agh-ref-border-radius-500)"
                }, {
                  default: E(() => [
                    t.options.title ? (y(), b(O, { key: 0 }, [
                      _("h1", {
                        class: p([d.$style["chart-area"], d.$style["legend-title"], d.$style.radar])
                      }, [
                        _("span", null, A(w.x.value), 1),
                        _("span", {
                          class: p(d.$style["legend-value"])
                        }, A(w.y.value), 3)
                      ], 2),
                      ja
                    ], 64)) : S("", !0),
                    (y(!0), b(O, null, I(r(o), (C, D) => (y(), b(O, { key: D }, [
                      !/(x|y)/.test(D) && C && w[D] ? (y(), b("div", {
                        key: 0,
                        class: p([d.$style["chart-area"], d.$style["legend-group"], d.$style.radar])
                      }, [
                        _("p", {
                          class: p([d.$style["chart-area"], d.$style["legend-value"]])
                        }, A(w[D].value), 3),
                        _("label", {
                          class: p([d.$style["chart-area"], d.$style["legend-label"]])
                        }, A(C.label), 3)
                      ], 2)) : S("", !0)
                    ], 64))), 128))
                  ]),
                  _: 2
                }, 1032, ["class", "radius"])
              ], 10, Ba))
            ], 2))), 128))
          ], 2))), 128))
        ]),
        _: 1
      }, 8, ["height", "width"])
    ], 2));
  }
}), Ea = "_behavior_1bxlz_1", Va = "_clickable_1bxlz_1", La = "_disabled_1bxlz_4", Fa = "_draggable_1bxlz_7", Ra = "_loading_1bxlz_10", Da = "_path_1bxlz_24", qa = "_radar_1bxlz_29", Na = "_label_1bxlz_32", Ua = "_plot_1bxlz_85", Ga = "_point_1bxlz_85", Ha = "_doughnut_1bxlz_96", Wa = "_bg_1bxlz_102", Ya = "_round_1bxlz_106", Za = "_line_1bxlz_119", Xa = {
  behavior: Ea,
  clickable: Va,
  disabled: La,
  draggable: Fa,
  loading: Ra,
  "chart-container": "_chart-container_1bxlz_14",
  "chart-axis": "_chart-axis_1bxlz_24",
  path: Da,
  radar: qa,
  label: Na,
  "font-align--center": "_font-align--center_1bxlz_45",
  "font-align--right": "_font-align--right_1bxlz_48",
  "font-align--left": "_font-align--left_1bxlz_51",
  "box-align--center": "_box-align--center_1bxlz_54",
  "box-align--left": "_box-align--left_1bxlz_57",
  "box-align--right": "_box-align--right_1bxlz_60",
  "chart-group-plots": "_chart-group-plots_1bxlz_67",
  "chart-area": "_chart-area_1bxlz_67",
  plot: Ua,
  point: Ga,
  doughnut: Ha,
  "legend-container": "_legend-container_1bxlz_96",
  bg: Wa,
  round: Ya,
  line: Za,
  "legend-wrapper": "_legend-wrapper_1bxlz_147",
  "legend-group": "_legend-group_1bxlz_158",
  "legend-value": "_legend-value_1bxlz_166",
  "legend-label": "_legend-label_1bxlz_169",
  "legend-title": "_legend-title_1bxlz_173"
}, Ja = {
  $style: Xa
}, Eu = /* @__PURE__ */ R(Ia, [["__cssModules", Ja], ["__scopeId", "data-v-5b47bbf2"]]);
function Wt(e) {
  return yt() ? ($t(e), !0) : !1;
}
function $e(e) {
  return typeof e == "function" ? e() : r(e);
}
const Yt = typeof window < "u", Ge = () => {
}, Be = /* @__PURE__ */ Qa();
function Qa() {
  var e;
  return Yt && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && /* @__PURE__ */ /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
const pt = {
  mounted: "mounted",
  updated: "updated",
  unmounted: "unmounted"
};
function Ka(...e) {
  if (e.length !== 1)
    return an(...e);
  const t = e[0];
  return typeof t == "function" ? vt(un(() => ({ get: t, set: Ge }))) : T(t);
}
function se(e) {
  var t;
  const n = $e(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Zt = Yt ? window : void 0;
function de(...e) {
  let t, n, s, l;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, s, l] = e, t = Zt) : [t, n, s, l] = e, !t)
    return Ge;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const o = [], c = () => {
    o.forEach((f) => f()), o.length = 0;
  }, i = (f, v, h, g) => (f.addEventListener(v, h, g), () => f.removeEventListener(v, h, g)), u = H(
    () => [se(t), $e(l)],
    ([f, v]) => {
      c(), f && o.push(
        ...n.flatMap((h) => s.map((g) => i(f, h, g, v)))
      );
    },
    { immediate: !0, flush: "post" }
  ), a = () => {
    u(), c();
  };
  return Wt(a), a;
}
let _t = !1;
function ht(e, t, n = {}) {
  const { window: s = Zt, ignore: l = [], capture: o = !0, detectIframe: c = !1 } = n;
  if (!s)
    return;
  Be && !_t && (_t = !0, Array.from(s.document.body.children).forEach((h) => h.addEventListener("click", Ge)));
  let i = !0;
  const u = (h) => l.some((g) => {
    if (typeof g == "string")
      return Array.from(s.document.querySelectorAll(g)).some((d) => d === h.target || h.composedPath().includes(d));
    {
      const d = se(g);
      return d && (h.target === d || h.composedPath().includes(d));
    }
  }), f = [
    de(s, "click", (h) => {
      const g = se(e);
      if (!(!g || g === h.target || h.composedPath().includes(g))) {
        if (h.detail === 0 && (i = !u(h)), !i) {
          i = !0;
          return;
        }
        t(h);
      }
    }, { passive: !0, capture: o }),
    de(s, "pointerdown", (h) => {
      const g = se(e);
      g && (i = !h.composedPath().includes(g) && !u(h));
    }, { passive: !0 }),
    c && de(s, "blur", (h) => {
      setTimeout(() => {
        var g;
        const d = se(e);
        ((g = s.document.activeElement) == null ? void 0 : g.tagName) === "IFRAME" && !(d != null && d.contains(s.document.activeElement)) && t(h);
      }, 0);
    })
  ].filter(Boolean);
  return () => f.forEach((h) => h());
}
const je = {
  [pt.mounted](e, t) {
    const n = !t.modifiers.bubble;
    if (typeof t.value == "function")
      e.__onClickOutside_stop = ht(e, t.value, { capture: n });
    else {
      const [s, l] = t.value;
      e.__onClickOutside_stop = ht(e, s, Object.assign({ capture: n }, l));
    }
  },
  [pt.unmounted](e) {
    e.__onClickOutside_stop();
  }
};
function Xt(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
    return !0;
  {
    const n = e.parentNode;
    return !n || n.tagName === "BODY" ? !1 : Xt(n);
  }
}
function ei(e) {
  const t = e || window.event, n = t.target;
  return Xt(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.preventDefault(), !1);
}
function ti(e, t = !1) {
  const n = T(t);
  let s = null, l;
  H(Ka(e), (i) => {
    if (i) {
      const u = i;
      l = u.style.overflow, n.value && (u.style.overflow = "hidden");
    }
  }, {
    immediate: !0
  });
  const o = () => {
    const i = $e(e);
    !i || n.value || (Be && (s = de(
      i,
      "touchmove",
      (u) => {
        ei(u);
      },
      { passive: !1 }
    )), i.style.overflow = "hidden", n.value = !0);
  }, c = () => {
    const i = $e(e);
    !i || !n.value || (Be && (s == null || s()), i.style.overflow = l, n.value = !1);
  };
  return Wt(c), F({
    get() {
      return n.value;
    },
    set(i) {
      i ? o() : c();
    }
  });
}
function ni() {
  let e = !1;
  const t = T(!1);
  return (n, s) => {
    if (t.value = s.value, e)
      return;
    e = !0;
    const l = ti(n, s.value);
    H(t, (o) => l.value = o);
  };
}
ni();
const si = ["onClick"], ri = /* @__PURE__ */ L({
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
    const n = e, s = T(), l = B(
      () => he(
        X(qe(n.options, n.groupBy ?? "")).map(([a, f]) => [
          a === "undefined" ? "" : a,
          f.map(
            (v) => G({
              ...v,
              selected: !!(n.multiple ? Q(n.modelValue, n.fields.key).includes(q(v, n.fields.key)) : q(v, n.fields.key) === q(n.modelValue, n.fields.key))
            })
          )
        ])
      )
    ), o = G(!1), c = () => {
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
        Te(
          Q(
            l.value,
            (f) => f.map((v) => v()).filter((v) => v.selected)
          )
        )
      ) : t("update:modelValue", a());
    }, u = () => {
      n.multiple ? t("update:modelValue", []) : t("update:modelValue", {});
    };
    return Ne(s, c, {
      window
    }), ee(() => {
      c();
    }), (a, f) => (y(), N(K, {
      class: p([
        a.$style["menu-container"],
        {
          [a.$style.classify]: n.groupBy
        }
      ]),
      radius: "var(--agh-ref-border-radius-500)"
    }, {
      default: E(() => [
        n.label || n.multiple ? (y(), b("header", {
          key: 0,
          class: p(a.$style["menu-header"])
        }, [
          _("h1", {
            class: p(a.$style.title)
          }, A(n.label), 3),
          n.multiple ? (y(), N(ye, {
            key: 0,
            class: p(a.$style.button),
            label: "Clear Selection",
            icon: "fa6-solid:eraser",
            variant: "text",
            onClick: f[0] || (f[0] = (v) => u())
          }, null, 8, ["class"])) : S("", !0)
        ], 2)) : S("", !0),
        _("div", {
          ref_key: "wrapperRef$",
          ref: s,
          class: p([
            a.$style["menu-wrapper"],
            {
              [a.$style.overflowed]: r(o)()
            }
          ])
        }, [
          (y(!0), b(O, null, I(r(l), (v, h) => (y(), b("div", {
            key: h,
            class: p([
              a.$style["menu-group"],
              {
                [a.$style.classify]: n.groupBy
              }
            ])
          }, [
            h ? (y(), b("label", {
              key: 0,
              class: p(a.$style["menu-group-label"]),
              name: ""
            }, A(h), 3)) : S("", !0),
            (y(!0), b(O, null, I(v, (g, d) => (y(), b("div", {
              key: `option-${d}`,
              class: p([
                a.$style["menu-option"],
                a.$style.behavior,
                a.$style.clickable,
                {
                  [a.$style.selected]: g().selected,
                  [a.$style.multiple]: n.multiple
                }
              ]),
              onClick: ($) => i(g)
            }, [
              n.multiple ? (y(), N(r(oe), {
                key: 0,
                class: p(a.$style["menu-option-icon"]),
                icon: g().selected ? "fa6-solid:square-check" : "fa6-regular:square"
              }, null, 8, ["class", "icon"])) : S("", !0),
              n.fields.icon ? (y(), N(r(oe), {
                key: 1,
                class: p(a.$style["menu-option-icon"]),
                icon: String(r(q)(g(), n.fields.icon))
              }, null, 8, ["class", "icon"])) : S("", !0),
              _("div", {
                class: p(a.$style["menu-option-group"])
              }, [
                n.fields.title ? S("", !0) : (y(), b("p", {
                  key: 0,
                  class: p(a.$style["menu-field"])
                }, A(r(q)(g(), n.fields.key)), 3)),
                (y(!0), b(O, null, I(r(qt)(n.fields, ["key", "icon"]), ($) => (y(), b(O, {
                  key: `option-field-${$}`
                }, [
                  $ ? (y(), b("p", {
                    key: 0,
                    class: p(a.$style["menu-field"])
                  }, A(r(ge)(g(), $)), 3)) : S("", !0)
                ], 64))), 128))
              ], 2)
            ], 10, si))), 128))
          ], 2))), 128))
        ], 2)
      ]),
      _: 1
    }, 8, ["class", "radius"]));
  }
}), li = "_behavior_1k2c6_1", oi = "_clickable_1k2c6_1", ai = "_disabled_1k2c6_4", ii = "_draggable_1k2c6_7", ui = "_loading_1k2c6_10", ci = "_classify_1k2c6_29", di = "_title_1k2c6_47", fi = "_button_1k2c6_50", pi = "_overflowed_1k2c6_77", _i = "_hover_1k2c6_91", hi = "_selected_1k2c6_95", gi = "_multiple_1k2c6_99", vi = {
  behavior: li,
  clickable: oi,
  disabled: ai,
  draggable: ii,
  loading: ui,
  "menu-container": "_menu-container_1k2c6_14",
  classify: ci,
  "menu-header": "_menu-header_1k2c6_32",
  title: di,
  button: fi,
  "menu-wrapper": "_menu-wrapper_1k2c6_53",
  overflowed: pi,
  "menu-option": "_menu-option_1k2c6_81",
  hover: _i,
  selected: hi,
  multiple: gi,
  "menu-field": "_menu-field_1k2c6_102",
  "menu-option-group": "_menu-option-group_1k2c6_108",
  "menu-group": "_menu-group_1k2c6_122",
  "menu-group-label": "_menu-group-label_1k2c6_144"
}, yi = {
  $style: vi
}, be = /* @__PURE__ */ R(ri, [["__cssModules", yi], ["__scopeId", "data-v-29c13de6"]]), $i = /* @__PURE__ */ L({
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
    const n = e, s = F({
      get: () => n.modelValue,
      set: (o) => (l.set(!0), t("update:modelValue", o))
    }), l = G(!0);
    return (o, c) => Pe((y(), b("div", {
      class: p([o.$style["dropdown-container"], o.$style[o.size]])
    }, [
      j(ye, {
        disabled: n.disabled,
        label: r(q)(n.modelValue, n.fields.key),
        icon: r(l)() ? "fa6-solid:chevron-down" : "fa6-solid:chevron-up",
        clicked: !r(l)(),
        level: n.level,
        size: n.size,
        variant: n.size === "small" ? "rounded" : "rect",
        class: p([o.$style["dropdown-button"], o.$style[o.size]]),
        onClick: c[0] || (c[0] = (i) => r(l).update((u) => !u)),
        type: "search"
      }, null, 8, ["disabled", "label", "icon", "clicked", "level", "size", "variant", "class"]),
      o.items.length > 0 && !r(l)() ? (y(), N(be, {
        key: 0,
        class: p(o.$style["dropdown-menu"]),
        options: o.items,
        fields: n.fields,
        modelValue: s.value,
        "onUpdate:modelValue": c[1] || (c[1] = (i) => s.value = i)
      }, null, 8, ["class", "options", "fields", "modelValue"])) : S("", !0)
    ], 2)), [
      [r(je), () => r(l).set(!0)]
    ]);
  }
}), bi = "_large_184z5_7", mi = {
  "dropdown-container": "_dropdown-container_184z5_1",
  large: bi,
  "dropdown-menu": "_dropdown-menu_184z5_11",
  "dropdown-button": "_dropdown-button_184z5_11"
}, wi = {
  $style: mi
}, Vu = /* @__PURE__ */ R($i, [["__cssModules", wi], ["__scopeId", "data-v-89c03d44"]]), ki = ["height", "width"], zi = /* @__PURE__ */ _("feFlood", {
  "flood-opacity": "0",
  result: "BackgroundImageFix"
}, null, -1), Oi = /* @__PURE__ */ _("feBlend", {
  in: "SourceGraphic",
  in2: "BackgroundImageFix",
  result: "shape"
}, null, -1), Si = /* @__PURE__ */ _("feColorMatrix", {
  in: "SourceAlpha",
  result: "hardAlpha",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}, null, -1), xi = /* @__PURE__ */ _("feOffset", {
  dx: "1",
  dy: "1"
}, null, -1), Mi = /* @__PURE__ */ _("feGaussianBlur", { stdDeviation: "1" }, null, -1), Ai = /* @__PURE__ */ _("feComposite", {
  in2: "hardAlpha",
  k2: "-1",
  k3: "1",
  operator: "arithmetic"
}, null, -1), Ci = /* @__PURE__ */ _("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" }, null, -1), Pi = /* @__PURE__ */ _("feBlend", {
  in2: "shape",
  result: "effect-innerShadow-1"
}, null, -1), Ti = /* @__PURE__ */ _("feColorMatrix", {
  in: "SourceAlpha",
  result: "hardAlpha",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}, null, -1), Bi = /* @__PURE__ */ _("feOffset", {
  dx: "2",
  dy: "3"
}, null, -1), ji = /* @__PURE__ */ _("feGaussianBlur", { stdDeviation: "1.5" }, null, -1), Ii = /* @__PURE__ */ _("feComposite", {
  in2: "hardAlpha",
  k2: "-1",
  k3: "1",
  operator: "arithmetic"
}, null, -1), Ei = /* @__PURE__ */ _("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.11 0" }, null, -1), Vi = /* @__PURE__ */ _("feBlend", {
  in2: "effect-innerShadow-1",
  result: "effect-innerShadow2"
}, null, -1), Li = /* @__PURE__ */ _("feColorMatrix", {
  in: "SourceAlpha",
  result: "hardAlpha",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}, null, -1), Fi = /* @__PURE__ */ _("feOffset", {
  dx: "5",
  dy: "6"
}, null, -1), Ri = /* @__PURE__ */ _("feGaussianBlur", { stdDeviation: "2" }, null, -1), Di = /* @__PURE__ */ _("feComposite", {
  in2: "hardAlpha",
  k2: "-1",
  k3: "1",
  operator: "arithmetic"
}, null, -1), qi = /* @__PURE__ */ _("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" }, null, -1), Ni = /* @__PURE__ */ _("feBlend", {
  in2: "effect-innerShadow2",
  result: "effect-innerShadow3"
}, null, -1), Ui = /* @__PURE__ */ _("feColorMatrix", {
  in: "SourceAlpha",
  result: "hardAlpha",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}, null, -1), Gi = /* @__PURE__ */ _("feOffset", {
  dx: "8",
  dy: "10"
}, null, -1), Hi = /* @__PURE__ */ _("feGaussianBlur", { stdDeviation: "2.5" }, null, -1), Wi = /* @__PURE__ */ _("feComposite", {
  in2: "hardAlpha",
  k2: "-1",
  k3: "1",
  operator: "arithmetic"
}, null, -1), Yi = /* @__PURE__ */ _("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0" }, null, -1), Zi = /* @__PURE__ */ _("feBlend", {
  in2: "effect-innerShadow3",
  result: "effect-innerShadow4"
}, null, -1), Xi = [
  zi,
  Oi,
  Si,
  xi,
  Mi,
  Ai,
  Ci,
  Pi,
  Ti,
  Bi,
  ji,
  Ii,
  Ei,
  Vi,
  Li,
  Fi,
  Ri,
  Di,
  qi,
  Ni,
  Ui,
  Gi,
  Hi,
  Wi,
  Yi,
  Zi
], Ji = /* @__PURE__ */ L({
  __name: "InnerShadowDeco",
  props: {
    height: {},
    width: {}
  },
  setup(e) {
    const t = e;
    return (n, s) => (y(), b("filter", {
      id: "effects--inner-shadow--deco",
      height: t.height,
      width: t.width,
      x: "0",
      y: "0",
      "color-interpolation-filters": "sRGB",
      filterUnits: "userSpaceOnUse"
    }, Xi, 8, ki));
  }
}), Qi = /* @__PURE__ */ L({
  __name: "ProgressBar",
  props: {
    value: { default: 0 },
    variant: { default: "concave" },
    thickness: { default: 12 }
  },
  setup(e) {
    const t = e;
    return (n, s) => (y(), b("div", {
      class: p([n.$style["progress-container"], n.$style[t.variant]])
    }, [
      _("div", {
        class: p([n.$style["progress-groove"], n.$style[t.variant]])
      }, [
        _("div", {
          class: p(n.$style["progress-value"]),
          style: cn({ width: `${t.value * 100}%` })
        }, null, 6)
      ], 2)
    ], 2));
  }
}), Ki = "_concave_vuh1m_23", eu = "_convex_vuh1m_55", tu = {
  "progress-container": "_progress-container_vuh1m_1",
  "progress-groove": "_progress-groove_vuh1m_11",
  "progress-value": "_progress-value_vuh1m_11",
  concave: Ki,
  "progress-content-wrapper": "_progress-content-wrapper_vuh1m_35",
  convex: eu
}, nu = {
  $style: tu
}, Lu = /* @__PURE__ */ R(Qi, [["__cssModules", nu], ["__scopeId", "data-v-d1ec5a1d"]]), He = (e) => (me("data-v-017d9edf"), e = e(), we(), e), su = ["innerHTML"], ru = ["cx", "cy", "r"], lu = ["cx", "cy", "r"], ou = /* @__PURE__ */ He(() => /* @__PURE__ */ _("mask", { id: "progress-groove-mask" }, [
  /* @__PURE__ */ _("use", {
    href: "#progress-groove-outer",
    fill: "#fff"
  }),
  /* @__PURE__ */ _("use", {
    href: "#progress-groove-inner",
    fill: "#000"
  })
], -1)), au = /* @__PURE__ */ He(() => /* @__PURE__ */ _("use", {
  href: "#progress-groove-outer",
  mask: "url(#progress-groove-mask)"
}, null, -1)), iu = [
  au
], uu = ["cx", "cy", "r", "stroke-dashoffset", "stroke-dasharray", "stroke-width"], cu = /* @__PURE__ */ He(() => /* @__PURE__ */ _("clipPath", { id: "progress-content-clip" }, [
  /* @__PURE__ */ _("use", { href: "#progress-groove-inner" })
], -1)), du = { "clip-path": "url(#progress-content-clip)" }, fu = ["height", "width", "x", "y"], pu = /* @__PURE__ */ L({
  __name: "ProgressCircle",
  props: {
    value: { default: 0 },
    variant: { default: "concave" },
    thickness: { default: 12 }
  },
  setup(e) {
    const t = e, n = T(), { width: s, height: l } = xe(n), o = B(
      () => k.clamp(k.min(s.value, l.value) / 2 - t.thickness / 2, 0, 1 / 0)
    ), c = B(() => o.value * 2 * k.PI), i = B(() => ({
      x: s.value / 2,
      y: l.value / 2
    })), u = G(""), a = () => {
      n.value && t.variant === "convex" && (u.set(
        Gt("--progress-value-fill-gradient", n, {
          observe: !0
        }).value
      ), u() || Rt(a, 1));
    };
    return ee(() => {
      a();
    }), (f, v) => (y(), b("div", {
      ref_key: "wrapperRef$",
      ref: n,
      class: p([f.$style["progress-container"], f.$style[t.variant]])
    }, [
      j(Me, {
        height: r(l),
        width: r(s)
      }, {
        defs: E(() => [
          _("g", {
            innerHTML: r(u)()
          }, null, 8, su),
          j(Ji, {
            height: r(l),
            width: r(s)
          }, null, 8, ["height", "width"]),
          _("circle", {
            id: "progress-groove-outer",
            cx: r(i).x,
            cy: r(i).y,
            r: r(o) + t.thickness / 2
          }, null, 8, ru),
          _("circle", {
            id: "progress-groove-inner",
            cx: r(i).x,
            cy: r(i).y,
            r: r(o) - t.thickness / 2
          }, null, 8, lu),
          ou
        ]),
        path: E(() => [
          _("g", {
            class: p(f.$style["progress-groove"])
          }, iu, 2),
          _("g", {
            class: p(f.$style["progress-value"])
          }, [
            _("circle", {
              cx: r(i).x,
              cy: r(i).y,
              r: r(o),
              "stroke-dashoffset": (t.value + 0.25) * r(c),
              "stroke-dasharray": `${t.value * r(c)} ${(1 - t.value) * r(c)}`,
              "stroke-width": t.thickness,
              fill: "transparent"
            }, null, 8, uu)
          ], 2),
          cu,
          _("g", du, [
            (y(), b("foreignObject", {
              height: r(o) * 2,
              width: r(o) * 2,
              x: r(i).x - r(o),
              y: r(i).y - r(o)
            }, [
              _("div", {
                class: p(f.$style["progress-content-wrapper"])
              }, [
                _("label", null, A((t.value * 100).toFixed(0)) + "%", 1)
              ], 2)
            ], 8, fu))
          ])
        ]),
        _: 1
      }, 8, ["height", "width"])
    ], 2));
  }
}), _u = "_concave_1jatd_23", hu = "_convex_1jatd_55", gu = {
  "progress-container": "_progress-container_1jatd_1",
  "progress-groove": "_progress-groove_1jatd_11",
  "progress-value": "_progress-value_1jatd_11",
  concave: _u,
  "progress-content-wrapper": "_progress-content-wrapper_1jatd_35",
  convex: hu
}, vu = {
  $style: gu
}, Fu = /* @__PURE__ */ R(pu, [["__cssModules", vu], ["__scopeId", "data-v-017d9edf"]]), yu = (e, t) => {
  var n;
  if (t) {
    const s = (n = X(qt(e, "valid")).find(([l, o]) => o && t[l])) == null ? void 0 : n[0];
    return s ? t[s] ?? null : null;
  }
  return null;
}, $u = ["value"], bu = ["for"], mu = /* @__PURE__ */ L({
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
    const n = e, { onTrigger: s } = Ve(
      (i) => {
        n.disabled ? (i.preventDefault(), i.stopPropagation()) : (c(), t("update:modelValue", i.target.value));
      },
      {
        flush: "post"
      }
    ), l = T(), o = G(""), c = () => {
      var i;
      return o.set(
        l.value ? (i = l.value) != null && i.validity.valid ? "" : yu(l.value.validity, n.invalidMessage ?? {}) ?? l.value.validationMessage : ""
      );
    };
    return ee(() => {
      c();
    }), (i, u) => (y(), b("div", {
      class: p([
        i.$style["textfield-container"],
        {
          [i.$style[`icon-align--${n.iconAlign}`]]: n.icon || i.type === "search"
        }
      ])
    }, [
      _("input", bt({
        ref_key: "inputRef$",
        ref: l,
        class: [i.$style["textfield-input"]]
      }, n, {
        value: n.modelValue,
        onInput: u[0] || (u[0] = //@ts-ignore
        (...a) => r(s) && r(s)(...a))
      }), null, 16, $u),
      i.type === "search" || n.icon ? (y(), N(r(oe), {
        key: 0,
        class: p([i.$style["textfield-label--icon"], i.$style.icon]),
        icon: n.icon || i.type === "search" ? "fa6-solid:magnifying-glass" : ""
      }, null, 8, ["class", "icon"])) : S("", !0),
      r(o)() ? (y(), b("label", {
        key: 1,
        for: n.name,
        class: p([i.$style["textfield-label"]])
      }, [
        j(r(oe), {
          class: p([i.$style["textfield-label--icon"]]),
          icon: "fa6-solid:circle-xmark"
        }, null, 8, ["class"]),
        _("span", {
          class: p([i.$style["textfield-label--value"]])
        }, A(r(o)()), 3)
      ], 10, bu)) : S("", !0)
    ], 2));
  }
}), wu = {
  "textfield-container": "_textfield-container_qhzrd_1",
  "icon-align--left": "_icon-align--left_qhzrd_9",
  "icon-align--right": "_icon-align--right_qhzrd_9",
  "textfield-input": "_textfield-input_qhzrd_17",
  "textfield-label--icon": "_textfield-label--icon_qhzrd_23",
  "textfield-label": "_textfield-label_qhzrd_23",
  "textfield-label--value": "_textfield-label--value_qhzrd_98"
}, ku = {
  $style: wu
}, Jt = /* @__PURE__ */ R(mu, [["__cssModules", ku], ["__scopeId", "data-v-784e2d65"]]), zu = /* @__PURE__ */ L({
  __name: "SearchBar",
  props: {
    fields: {},
    modelValue: { default: "" },
    items: { default: () => [] },
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue", "select"],
  setup(e, { emit: t }) {
    const n = e, s = F({
      get: () => n.modelValue,
      set: (a) => (u(a), t("update:modelValue", a))
    }), l = T(), o = G(!1), c = G([]), i = (a) => {
      a && (t("update:modelValue", q(a, n.fields.key)), t("select", a), o.set(!0));
    }, u = (a) => {
      var f;
      c.set(
        ((f = n.items) == null ? void 0 : f.filter((v) => String(q(v, n.fields.key)).includes(a))) ?? []
      );
    };
    return H(s, u), H(l, i), (a, f) => (y(), b("div", {
      class: p(a.$style["search-bar--container"])
    }, [
      j(Jt, {
        modelValue: s.value,
        "onUpdate:modelValue": f[0] || (f[0] = (v) => s.value = v),
        class: p(a.$style["search-bar--input"]),
        disabled: n.disabled,
        onClick: f[1] || (f[1] = (v) => r(o).set(!1)),
        onFocus: f[2] || (f[2] = (v) => r(o).set(!1)),
        onBlur: f[3] || (f[3] = (v) => r(o).set(!0)),
        type: "search"
      }, null, 8, ["modelValue", "class", "disabled"]),
      s.value && r(c)().length > 0 && !r(o)() ? (y(), N(be, {
        key: 0,
        class: p(a.$style["search-bar--menu"]),
        options: r(c)(),
        fields: n.fields,
        modelValue: l.value,
        "onUpdate:modelValue": f[4] || (f[4] = (v) => l.value = v)
      }, null, 8, ["class", "options", "fields", "modelValue"])) : S("", !0)
    ], 2));
  }
}), Ou = {
  "search-bar--container": "_search-bar--container_1hygv_1",
  "search-bar--input": "_search-bar--input_1hygv_7",
  "search-bar--menu": "_search-bar--menu_1hygv_10"
}, Su = {
  $style: Ou
}, Ru = /* @__PURE__ */ R(zu, [["__cssModules", Su], ["__scopeId", "data-v-644d7672"]]), xu = /* @__PURE__ */ L({
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
    const n = e, s = T(), l = {
      key: "detail",
      title: "{{ $.label }}",
      content: "{{ $.detail }}",
      icon: "icon"
    }, o = {
      key: "value",
      title: "{{ $.value }}"
    }, c = B(
      () => Te(
        (n.filterOptions ?? []).map(
          (z) => Mt(Q(n.items, z.field)).map((x) => ({ ...z, value: x }))
        )
      )
    ), i = T(n.modelValue ?? ""), u = F({
      get: () => n.modelValue ?? i.value,
      set: (z) => {
        t("update:modelValue", z ?? ""), n.modelValue || (i.value = z ?? "");
      }
    }), a = T(Qr(n.sortOptions)), f = F({
      get: () => n.sort ?? a.value,
      set: (z) => {
        z && (w.set(!0), t("update:sort", z), n.sort || (a.value = z));
      }
    }), v = T([]), h = F({
      get: () => n.filter ?? v.value,
      set: (z) => {
        t("update:filter", z ?? []), n.filter || (v.value = z ?? []);
      }
    }), g = T(), d = F({
      get: () => n.selected !== void 0 ? n.selected : g.value,
      set: (z) => {
        z && (t("update:selected", z), n.selected || (g.value = z));
      }
    }), $ = T(n.items), m = G(!0), w = G(!0), V = G(!1), C = () => {
      if (s.value) {
        const { scrollHeight: z, clientHeight: x } = s.value;
        V.set(z > x + 1);
      }
    }, D = (z) => z.update((x) => !x), Qt = (z) => {
      d.value = z;
    }, Ae = () => {
      var Ce, We;
      const z = n.items.map(
        (Z) => ({
          ...Z,
          selected: q(Z, n.fields.key) === q(d.value, n.fields.key)
        })
      ), x = Jr(
        z,
        (Z) => q(Z, n.fields.key).includes(u.value)
      ), te = zl(
        x,
        [((Ce = f.value) == null ? void 0 : Ce.field) ?? n.fields.key],
        [((We = f.value) == null ? void 0 : We.direction) ?? "asc"]
      ), P = re(h.value) ? te : al(
        ...Q(
          qe(h.value, "field"),
          (Z) => Te(
            Z.map(
              (Ye) => te.filter((Kt) => cl(Kt, { [Ye.field]: Ye.value }))
            )
          )
        ),
        ul
      );
      $.value = P;
    };
    return Ne(s, C, {
      window
    }), ee(() => {
      Ae(), C();
    }), dn(() => {
      Ae(), C();
    }), H([f, h, u, d], () => {
      Ae(), C();
    }), (z, x) => (y(), N(K, {
      class: p(z.$style["list-container"]),
      purpose: "container",
      radius: "var(--agh-ref-border-radius-600)"
    }, {
      default: E(() => {
        var te;
        return [
          _("div", {
            class: p(z.$style["list-toolbar"])
          }, [
            j(Jt, {
              modelValue: u.value,
              "onUpdate:modelValue": x[0] || (x[0] = (P) => u.value = P),
              class: p(z.$style["list-toolbar-search"]),
              type: "search"
            }, null, 8, ["modelValue", "class"]),
            n.filterOptions && !r(re)(n.filterOptions) ? Pe((y(), b("div", {
              key: 0,
              class: p(z.$style["list-toolbar-tool"]),
              onKeydown: [
                x[3] || (x[3] = ue((P) => r(m).set(!0), ["esc"])),
                x[4] || (x[4] = ue((P) => r(m).set(!0), ["enter"]))
              ]
            }, [
              j(ye, {
                class: p(z.$style["list-toolbar-button"]),
                clicked: !r(m)(),
                onClick: x[1] || (x[1] = (P) => D(r(m))),
                icon: "fa6-solid:filter",
                variant: "text"
              }, null, 8, ["class", "clicked"]),
              h.value.length > 0 ? (y(), b("span", {
                key: 0,
                class: p(z.$style["list-toolbar-button-deco"])
              }, A(h.value.length), 3)) : S("", !0),
              r(m)() ? S("", !0) : (y(), N(be, {
                key: 1,
                class: p(z.$style["list-toolbar-menu"]),
                fields: o,
                options: r(c),
                multiple: !0,
                modelValue: h.value,
                "onUpdate:modelValue": x[2] || (x[2] = (P) => h.value = P),
                label: "Filter",
                "group-by": "label"
              }, null, 8, ["class", "options", "modelValue"]))
            ], 34)), [
              [r(je), () => r(m).set(!0)]
            ]) : S("", !0),
            n.sortOptions && !r(re)(n.sortOptions) ? Pe((y(), b("div", {
              key: 1,
              class: p(z.$style["list-toolbar-tool"]),
              onKeydown: [
                x[7] || (x[7] = ue((P) => r(w).set(!0), ["esc"])),
                x[8] || (x[8] = ue((P) => r(w).set(!0), ["enter"]))
              ]
            }, [
              j(ye, {
                class: p(z.$style["list-toolbar-button"]),
                icon: ((te = f.value) == null ? void 0 : te.icon) ?? "fa6-solid:arrow-down-wide-short",
                clicked: !r(w)(),
                onClick: x[5] || (x[5] = (P) => D(r(w))),
                variant: "text"
              }, null, 8, ["class", "icon", "clicked"]),
              r(w)() ? S("", !0) : (y(), N(be, {
                key: 0,
                class: p(z.$style["list-toolbar-menu"]),
                fields: l,
                options: n.sortOptions,
                modelValue: f.value,
                "onUpdate:modelValue": x[6] || (x[6] = (P) => f.value = P)
              }, null, 8, ["class", "options", "modelValue"]))
            ], 34)), [
              [r(je), () => r(w).set(!0)]
            ]) : S("", !0)
          ], 2),
          _("div", {
            ref_key: "wrapperRef$",
            ref: s,
            class: p([
              z.$style["list-wrapper"],
              {
                [z.$style.overflowed]: r(V)()
              }
            ])
          }, [
            j(Dl, {
              items: $.value,
              "group-by": n.groupBy
            }, {
              placeholder: E(() => [
                U(z.$slots, "placeholder", {}, void 0, !0)
              ]),
              group: E((P) => [
                _("label", {
                  class: p(z.$style["list-item-label"])
                }, A(P.group), 3)
              ]),
              default: E((P) => [
                j(K, {
                  class: p(z.$style["list-item"]),
                  color: P.item.selected ? "blue" : "default",
                  clickable: !0,
                  onClick: (Ce) => Qt(P.item),
                  radius: "var(--agh-ref-border-radius-400)"
                }, {
                  default: E(() => [
                    U(z.$slots, "default", {
                      item: P.item,
                      index: P.index,
                      selected: P.item.selected
                    }, void 0, !0)
                  ]),
                  _: 2
                }, 1032, ["class", "color", "onClick"])
              ]),
              _: 3
            }, 8, ["items", "group-by"])
          ], 2),
          U(z.$slots, "footer", {}, void 0, !0)
        ];
      }),
      _: 3
    }, 8, ["class"]));
  }
}), Mu = "_overflowed_10vs0_81", Au = {
  "list-container": "_list-container_10vs0_1",
  "list-toolbar": "_list-toolbar_10vs0_11",
  "list-toolbar-search": "_list-toolbar-search_10vs0_17",
  "list-toolbar-tool": "_list-toolbar-tool_10vs0_20",
  "list-toolbar-button": "_list-toolbar-button_10vs0_23",
  "list-toolbar-button-deco": "_list-toolbar-button-deco_10vs0_26",
  "list-toolbar-menu": "_list-toolbar-menu_10vs0_45",
  "list-wrapper": "_list-wrapper_10vs0_51",
  overflowed: Mu,
  "list-item": "_list-item_10vs0_84",
  "list-item-label": "_list-item-label_10vs0_89"
}, Cu = {
  $style: Au
}, Du = /* @__PURE__ */ R(xu, [["__cssModules", Cu], ["__scopeId", "data-v-3097007d"]]);
export {
  Ht as BaseLink,
  Dl as BaseList,
  Me as BasePoly,
  ye as ButtonBox,
  K as CardBox,
  Du as CardList,
  ju as DoughnutChart,
  Vu as DropDown,
  Ji as InnerShadowDeco,
  Iu as LineChart,
  Lu as ProgressBar,
  Fu as ProgressCircle,
  Eu as RadarChart,
  ft as RoundEffect,
  Ru as SearchBar,
  be as SelectMenu,
  Jt as TextField
};
//# sourceMappingURL=ui.component.es.js.map
