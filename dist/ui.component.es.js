import { shallowRef as en, watchEffect as gt, readonly as yt, getCurrentScope as vt, onScopeDispose as mt, unref as o, computed as F, watch as H, ref as T, getCurrentInstance as tn, onMounted as ee, defineComponent as L, openBlock as v, createBlock as U, resolveDynamicComponent as nn, normalizeProps as sn, guardReactiveProps as on, withCtx as E, renderSlot as G, createElementBlock as $, Fragment as O, createCommentVNode as S, renderList as I, normalizeClass as p, createElementVNode as _, createVNode as j, mergeProps as $t, toDisplayString as A, useCssVars as ln, reactive as rn, pushScopeId as be, popScopeId as we, toRefs as fe, toRef as an, customRef as un, withDirectives as Pe, normalizeStyle as cn, onUpdated as dn, withKeys as ue } from "vue";
import { i as pe, d as le, g as fn, e as ae, f as pn, h as bt, j as wt, k as _n, l as hn, o as gn, m as ke, n as yn, q as Ie, r as vn, t as kt, v as mn, w as $n, x as bn, y as Ze, z as Xe, A as ze, B as _e, C as Oe, D as J, E as wn, F as kn, G as zn, I as zt, J as Ee, K as W, L as On, O as Sn, P as xn, Q as Je, R as Mn, T as An, V as Ot, W as St, X as Cn, Y as Pn, Z as Tn, _ as xt, $ as Bn, a0 as jn, a1 as he, u as Ve, p as ge, a2 as oe, a3 as Mt, a4 as Q, M as k, b as N, s as q, a5 as Te } from "./parser-9fc50bc2.js";
import { Icon as re } from "@iconify/vue/offline";
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
var Qe = 0 / 0, Fn = /^[-+]0x[0-9a-f]+$/i, Rn = /^0b[01]+$/i, Dn = /^0o[0-7]+$/i, Nn = parseInt;
function Un(e) {
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
  return n || Dn.test(e) ? Nn(e.slice(2), n ? 2 : 8) : Fn.test(e) ? Qe : +e;
}
var Ke = Object.create, Gn = function() {
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
const qn = Gn;
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
const ye = Kn;
var es = ye ? function(e, t) {
  return ye(e, "toString", {
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
  t == "__proto__" && ye ? ye(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
var os = Object.prototype, ls = os.hasOwnProperty;
function Ct(e, t, n) {
  var s = e[t];
  (!(ls.call(e, t) && pn(s, n)) || n === void 0 && !(t in e)) && Le(e, t, n);
}
function ie(e, t, n, s) {
  var l = !n;
  n || (n = {});
  for (var a = -1, c = t.length; ++a < c; ) {
    var i = t[a], u = s ? s(n[i], e[i], i, n, e) : void 0;
    u === void 0 && (u = e[i]), l ? Le(n, i, u) : Ct(n, i, u);
  }
  return n;
}
var et = Math.max;
function Pt(e, t, n) {
  return t = et(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var s = arguments, l = -1, a = et(s.length - t, 0), c = Array(a); ++l < a; )
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
function rs(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var as = Object.prototype, is = as.hasOwnProperty;
function us(e) {
  if (!le(e))
    return rs(e);
  var t = bt(e), n = [];
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
var ps = "[object Object]", _s = Function.prototype, hs = Object.prototype, Bt = _s.toString, gs = hs.hasOwnProperty, ys = Bt.call(Object);
function vs(e) {
  if (!ke(e) || yn(e) != ps)
    return !1;
  var t = Re(e);
  if (t === null)
    return !0;
  var n = gs.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Bt.call(n) == ys;
}
function ms(e, t, n) {
  var s = -1, l = e.length;
  t < 0 && (t = -t > l ? 0 : l + t), n = n > l ? l : n, n < 0 && (n += l), l = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var a = Array(l); ++s < l; )
    a[s] = e[s + t];
  return a;
}
function $s(e, t) {
  return e && ie(t, Ie(t), e);
}
function bs(e, t) {
  return e && ie(t, Fe(t), e);
}
var jt = typeof exports == "object" && exports && !exports.nodeType && exports, tt = jt && typeof module == "object" && module && !module.nodeType && module, ws = tt && tt.exports === jt, nt = ws ? vn.Buffer : void 0, st = nt ? nt.allocUnsafe : void 0;
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
    $n(t, kt(e)), e = Re(e);
  return t;
} : mn;
const It = Ss;
function xs(e, t) {
  return ie(e, It(e), t);
}
function Et(e) {
  return bn(e, Fe, It);
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
var ot = Xe ? Xe.prototype : void 0, lt = ot ? ot.valueOf : void 0;
function js(e) {
  return lt ? Object(lt.call(e)) : {};
}
function Is(e, t) {
  var n = t ? De(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var Es = "[object Boolean]", Vs = "[object Date]", Ls = "[object Map]", Fs = "[object Number]", Rs = "[object RegExp]", Ds = "[object Set]", Ns = "[object String]", Us = "[object Symbol]", Gs = "[object ArrayBuffer]", qs = "[object DataView]", Hs = "[object Float32Array]", Ws = "[object Float64Array]", Ys = "[object Int8Array]", Zs = "[object Int16Array]", Xs = "[object Int32Array]", Js = "[object Uint8Array]", Qs = "[object Uint8ClampedArray]", Ks = "[object Uint16Array]", eo = "[object Uint32Array]";
function to(e, t, n) {
  var s = e.constructor;
  switch (t) {
    case Gs:
      return De(e);
    case Es:
    case Vs:
      return new s(+e);
    case qs:
      return Ps(e, n);
    case Hs:
    case Ws:
    case Ys:
    case Zs:
    case Xs:
    case Js:
    case Qs:
    case Ks:
    case eo:
      return Is(e, n);
    case Ls:
      return new s();
    case Fs:
    case Ns:
      return new s(e);
    case Rs:
      return Bs(e);
    case Ds:
      return new s();
    case Us:
      return js(e);
  }
}
function no(e) {
  return typeof e.constructor == "function" && !bt(e) ? qn(Re(e)) : {};
}
var so = "[object Map]";
function oo(e) {
  return ke(e) && ze(e) == so;
}
var rt = _e && _e.isMap, lo = rt ? Oe(rt) : oo;
const ro = lo;
var ao = "[object Set]";
function io(e) {
  return ke(e) && ze(e) == ao;
}
var at = _e && _e.isSet, uo = at ? Oe(at) : io;
const co = uo;
var fo = 1, po = 2, _o = 4, Vt = "[object Arguments]", ho = "[object Array]", go = "[object Boolean]", yo = "[object Date]", vo = "[object Error]", Lt = "[object Function]", mo = "[object GeneratorFunction]", $o = "[object Map]", bo = "[object Number]", Ft = "[object Object]", wo = "[object RegExp]", ko = "[object Set]", zo = "[object String]", Oo = "[object Symbol]", So = "[object WeakMap]", xo = "[object ArrayBuffer]", Mo = "[object DataView]", Ao = "[object Float32Array]", Co = "[object Float64Array]", Po = "[object Int8Array]", To = "[object Int16Array]", Bo = "[object Int32Array]", jo = "[object Uint8Array]", Io = "[object Uint8ClampedArray]", Eo = "[object Uint16Array]", Vo = "[object Uint32Array]", M = {};
M[Vt] = M[ho] = M[xo] = M[Mo] = M[go] = M[yo] = M[Ao] = M[Co] = M[Po] = M[To] = M[Bo] = M[$o] = M[bo] = M[Ft] = M[wo] = M[ko] = M[zo] = M[Oo] = M[jo] = M[Io] = M[Eo] = M[Vo] = !0;
M[vo] = M[Lt] = M[So] = !1;
function ce(e, t, n, s, l, a) {
  var c, i = t & fo, u = t & po, r = t & _o;
  if (n && (c = l ? n(e, s, l, a) : n(e)), c !== void 0)
    return c;
  if (!le(e))
    return e;
  var f = J(e);
  if (f) {
    if (c = Cs(e), !i)
      return Wn(e, c);
  } else {
    var y = ze(e), h = y == Lt || y == mo;
    if (wn(e))
      return ks(e, i);
    if (y == Ft || y == Vt || h && !l) {
      if (c = u || h ? {} : no(e), !i)
        return u ? xs(e, bs(c, e)) : zs(e, $s(c, e));
    } else {
      if (!M[y])
        return l ? e : {};
      c = to(e, y, i);
    }
  }
  a || (a = new kn());
  var g = a.get(e);
  if (g)
    return g;
  a.set(e, c), co(e) ? e.forEach(function(b) {
    c.add(ce(b, t, n, b, e, a));
  }) : ro(e) && e.forEach(function(b, w) {
    c.set(w, ce(b, t, n, w, e, a));
  });
  var d = r ? u ? Et : zn : u ? Fe : Ie, m = f ? void 0 : d(e);
  return ss(m || e, function(b, w) {
    m && (w = b, b = e[w]), Ct(c, w, ce(b, t, n, w, e, a));
  }), c;
}
function Lo(e, t, n, s) {
  for (var l = -1, a = e == null ? 0 : e.length; ++l < a; ) {
    var c = e[l];
    t(s, c, n(c), e);
  }
  return s;
}
function Fo(e, t, n, s) {
  return zt(e, function(l, a, c) {
    t(s, l, n(l), c);
  }), s;
}
function Ro(e, t) {
  return function(n, s) {
    var l = J(n) ? Lo : Fo, a = t ? t() : {};
    return l(n, e, Ee(s), a);
  };
}
function Do(e) {
  return ke(e) && wt(e);
}
var No = "Expected a function";
function Uo(e, t, n) {
  if (typeof e != "function")
    throw new TypeError(No);
  return setTimeout(function() {
    e.apply(void 0, n);
  }, t);
}
var Go = Tt(function(e, t, n) {
  return Uo(e, Un(t) || 0, n);
});
const Rt = Go;
function qo(e, t) {
  return W(t, function(n) {
    return [n, e[n]];
  });
}
function Ho(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(s) {
    n[++t] = [s, s];
  }), n;
}
var Wo = "[object Map]", Yo = "[object Set]";
function Zo(e) {
  return function(t) {
    var n = ze(t);
    return n == Wo ? On(t) : n == Yo ? Ho(t) : qo(t, e(t));
  };
}
var Xo = Zo(Ie);
const X = Xo;
function Jo(e, t) {
  var n = [];
  return zt(e, function(s, l, a) {
    t(s, l, a) && n.push(s);
  }), n;
}
function Qo(e, t) {
  var n = J(e) ? Sn : Jo;
  return n(e, Ee(t));
}
function Ko(e) {
  return e && e.length ? e[0] : void 0;
}
var el = Object.prototype, tl = el.hasOwnProperty, nl = Ro(function(e, t, n) {
  tl.call(e, n) ? e[n].push(t) : Le(e, n, [t]);
});
const Ne = nl;
function sl(e, t) {
  return e > t;
}
var ol = Math.min;
function ll(e, t, n) {
  for (var s = n ? Mn : An, l = e[0].length, a = e.length, c = a, i = Array(a), u = 1 / 0, r = []; c--; ) {
    var f = e[c];
    c && t && (f = W(f, Oe(t))), u = ol(f.length, u), i[c] = !n && (t || l >= 120 && f.length >= 120) ? new xn(c && f) : void 0;
  }
  f = e[0];
  var y = -1, h = i[0];
  e:
    for (; ++y < l && r.length < u; ) {
      var g = f[y], d = t ? t(g) : g;
      if (g = n || g !== 0 ? g : 0, !(h ? Je(h, d) : s(r, d, n))) {
        for (c = a; --c; ) {
          var m = i[c];
          if (!(m ? Je(m, d) : s(e[c], d, n)))
            continue e;
        }
        h && h.push(d), r.push(g);
      }
    }
  return r;
}
function rl(e) {
  return Do(e) ? e : [];
}
var al = Tt(function(e) {
  var t = Ot(e), n = W(e, rl);
  return t = typeof t == "function" ? t : void 0, t && n.pop(), n.length && n[0] === e[0] ? ll(n, void 0, t) : [];
});
const il = al;
function ul(e, t) {
  return t.length < 2 ? e : St(e, ms(t, 0, -1));
}
function cl(e, t) {
  return Cn(e, t);
}
function dl(e, t) {
  return e === t || Pn(e, t, Tn(t));
}
function fl(e, t) {
  return e < t;
}
function Dt(e, t, n) {
  for (var s = -1, l = e.length; ++s < l; ) {
    var a = e[s], c = t(a);
    if (c != null && (i === void 0 ? c === c && !pe(c) : n(c, i)))
      var i = c, u = a;
  }
  return u;
}
function pl(e) {
  return e && e.length ? Dt(e, ae, sl) : void 0;
}
function _l(e) {
  return e && e.length ? Dt(e, ae, fl) : void 0;
}
function hl(e, t) {
  return t = xt(t, e), e = ul(e, t), e == null || delete e[Bn(Ot(t))];
}
function gl(e) {
  return vs(e) ? void 0 : e;
}
var yl = 1, vl = 2, ml = 4, $l = ds(function(e, t) {
  var n = {};
  if (e == null)
    return n;
  var s = !1;
  t = W(t, function(a) {
    return a = xt(a, e), s || (s = a.length > 1), a;
  }), ie(e, Et(e), n), s && (n = ce(n, yl | vl | ml, gl));
  for (var l = t.length; l--; )
    hl(n, t[l]);
  return n;
});
const Nt = $l;
function bl(e, t) {
  var n = e.length;
  for (e.sort(t); n--; )
    e[n] = e[n].value;
  return e;
}
function wl(e, t) {
  if (e !== t) {
    var n = e !== void 0, s = e === null, l = e === e, a = pe(e), c = t !== void 0, i = t === null, u = t === t, r = pe(t);
    if (!i && !r && !a && e > t || a && c && u && !i && !r || s && c && u || !n && u || !l)
      return 1;
    if (!s && !a && !r && e < t || r && n && l && !s && !a || i && n && l || !c && l || !u)
      return -1;
  }
  return 0;
}
function kl(e, t, n) {
  for (var s = -1, l = e.criteria, a = t.criteria, c = l.length, i = n.length; ++s < c; ) {
    var u = wl(l[s], a[s]);
    if (u) {
      if (s >= i)
        return u;
      var r = n[s];
      return u * (r == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
function zl(e, t, n) {
  t.length ? t = W(t, function(a) {
    return J(a) ? function(c) {
      return St(c, a.length === 1 ? a[0] : a);
    } : a;
  }) : t = [ae];
  var s = -1;
  t = W(t, Oe(Ee));
  var l = jn(e, function(a, c, i) {
    var u = W(t, function(r) {
      return r(a);
    });
    return { criteria: u, index: ++s, value: a };
  });
  return bl(l, function(a, c) {
    return kl(a, c, n);
  });
}
function Ol(e, t, n, s) {
  return e == null ? [] : (J(t) || (t = t == null ? [] : [t]), n = s ? void 0 : n, J(n) || (n = n == null ? [] : [n]), zl(e, t, n));
}
var Sl = Object.defineProperty, xl = Object.defineProperties, Ml = Object.getOwnPropertyDescriptors, it = Object.getOwnPropertySymbols, Al = Object.prototype.hasOwnProperty, Cl = Object.prototype.propertyIsEnumerable, ut = (e, t, n) => t in e ? Sl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Pl = (e, t) => {
  for (var n in t || (t = {}))
    Al.call(t, n) && ut(e, n, t[n]);
  if (it)
    for (var n of it(t))
      Cl.call(t, n) && ut(e, n, t[n]);
  return e;
}, Tl = (e, t) => xl(e, Ml(t));
function B(e, t) {
  var n;
  const s = en();
  return gt(() => {
    s.value = e();
  }, Tl(Pl({}, t), {
    flush: (n = t == null ? void 0 : t.flush) != null ? n : "sync"
  })), yt(s);
}
function Ut(e) {
  return vt() ? (mt(e), !0) : !1;
}
function ne(e) {
  return typeof e == "function" ? e() : o(e);
}
const Bl = typeof window < "u";
function Y(e) {
  var t;
  const n = ne(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Se = Bl ? window : void 0;
function jl() {
  const e = T(!1);
  return tn() && ee(() => {
    e.value = !0;
  }), e;
}
function Gt(e) {
  const t = jl();
  return F(() => (t.value, !!e()));
}
var ct = Object.getOwnPropertySymbols, Il = Object.prototype.hasOwnProperty, El = Object.prototype.propertyIsEnumerable, Vl = (e, t) => {
  var n = {};
  for (var s in e)
    Il.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && ct)
    for (var s of ct(e))
      t.indexOf(s) < 0 && El.call(e, s) && (n[s] = e[s]);
  return n;
};
function Ll(e, t, n = {}) {
  const s = n, { window: l = Se } = s, a = Vl(s, ["window"]);
  let c;
  const i = Gt(() => l && "MutationObserver" in l), u = () => {
    c && (c.disconnect(), c = void 0);
  }, r = H(
    () => Y(e),
    (y) => {
      u(), i.value && l && y && (c = new MutationObserver(t), c.observe(y, a));
    },
    { immediate: !0 }
  ), f = () => {
    u(), r();
  };
  return Ut(f), {
    isSupported: i,
    stop: f
  };
}
function qt(e, t, n = {}) {
  const { window: s = Se, initialValue: l = "", observe: a = !1 } = n, c = T(l), i = F(() => {
    var r;
    return Y(t) || ((r = s == null ? void 0 : s.document) == null ? void 0 : r.documentElement);
  });
  function u() {
    var r;
    const f = ne(e), y = ne(i);
    if (y && s) {
      const h = (r = s.getComputedStyle(y).getPropertyValue(f)) == null ? void 0 : r.trim();
      c.value = h || l;
    }
  }
  return a && Ll(i, u, {
    attributes: !0,
    window: s
  }), H(
    [i, () => ne(e)],
    u,
    { immediate: !0 }
  ), H(
    c,
    (r) => {
      var f;
      (f = i.value) != null && f.style && i.value.style.setProperty(ne(e), r);
    }
  ), c;
}
var dt = Object.getOwnPropertySymbols, Fl = Object.prototype.hasOwnProperty, Rl = Object.prototype.propertyIsEnumerable, Dl = (e, t) => {
  var n = {};
  for (var s in e)
    Fl.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && dt)
    for (var s of dt(e))
      t.indexOf(s) < 0 && Rl.call(e, s) && (n[s] = e[s]);
  return n;
};
function Ue(e, t, n = {}) {
  const s = n, { window: l = Se } = s, a = Dl(s, ["window"]);
  let c;
  const i = Gt(() => l && "ResizeObserver" in l), u = () => {
    c && (c.disconnect(), c = void 0);
  }, r = F(
    () => Array.isArray(e) ? e.map((h) => Y(h)) : [Y(e)]
  ), f = H(
    r,
    (h) => {
      if (u(), i.value && l) {
        c = new ResizeObserver(t);
        for (const g of h)
          g && c.observe(g, a);
      }
    },
    { immediate: !0, flush: "post", deep: !0 }
  ), y = () => {
    u(), f();
  };
  return Ut(y), {
    isSupported: i,
    stop: y
  };
}
function xe(e, t = { width: 0, height: 0 }, n = {}) {
  const { window: s = Se, box: l = "content-box" } = n, a = F(() => {
    var u, r;
    return (r = (u = Y(e)) == null ? void 0 : u.namespaceURI) == null ? void 0 : r.includes("svg");
  }), c = T(t.width), i = T(t.height);
  return Ue(
    e,
    ([u]) => {
      const r = l === "border-box" ? u.borderBoxSize : l === "content-box" ? u.contentBoxSize : u.devicePixelContentBoxSize;
      if (s && a.value) {
        const f = Y(e);
        if (f) {
          const y = s.getComputedStyle(f);
          c.value = parseFloat(y.width), i.value = parseFloat(y.height);
        }
      } else if (r) {
        const f = Array.isArray(r) ? r : [r];
        c.value = f.reduce((y, { inlineSize: h }) => y + h, 0), i.value = f.reduce((y, { blockSize: h }) => y + h, 0);
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
    return (s, l) => (v(), U(nn(t.link ? o(n) ? "a" : "RouterLink" : "div"), sn(on(
      t.link ? {
        [o(n) ? "href" : "to"]: t.link,
        ...o(n) ? {
          target: "_blank",
          rel: "noopener noreferrer"
        } : {}
      } : {}
    )), {
      default: E(() => [
        G(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Nl = /* @__PURE__ */ L({
  __name: "BaseList",
  props: {
    items: {},
    groupBy: {}
  },
  setup(e) {
    const t = e, n = B(
      () => he(
        X(Ne(t.items, t.groupBy ?? "")).map(([s, l]) => [
          s === "undefined" ? "" : s,
          l
        ])
      )
    );
    return (s, l) => (v(), $(O, null, [
      !t.items || t.items.length === 0 ? G(s.$slots, "placeholder", { key: 0 }) : S("", !0),
      (v(!0), $(O, null, I(o(n), (a, c) => (v(), $(O, {
        key: `list-group-${c}`
      }, [
        c ? G(s.$slots, "group", {
          key: 0,
          group: c,
          items: a
        }) : S("", !0),
        (v(!0), $(O, null, I(a, (i, u) => G(s.$slots, "default", {
          key: `list-item-${u}`,
          item: i,
          index: u
        })), 128))
      ], 64))), 128))
    ], 64));
  }
}), Ul = ["width", "height"], Gl = /* @__PURE__ */ L({
  __name: "BasePoly",
  props: {
    height: {},
    width: {}
  },
  setup(e) {
    const t = e;
    return (n, s) => (v(), $("svg", {
      class: p(n.$style["poly-wrapper"]),
      width: t.width,
      height: t.height,
      preserveAspectRatio: "xMinYMin",
      "color-profile": "sRGB",
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      _("defs", null, [
        G(n.$slots, "defs", {}, void 0, !0)
      ]),
      G(n.$slots, "path", {}, void 0, !0)
    ], 10, Ul));
  }
}), ql = {
  "poly-wrapper": "_poly-wrapper_14erz_1"
}, R = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, l] of t)
    n[s] = l;
  return n;
}, Hl = {
  $style: ql
}, Me = /* @__PURE__ */ R(Gl, [["__cssModules", Hl], ["__scopeId", "data-v-ac9d4bad"]]), Wl = /* @__PURE__ */ L({
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
    const n = e, { triggered: s, onTrigger: l } = Ve((a) => {
      n.disabled ? (a.preventDefault(), a.stopPropagation()) : t("click", a);
    });
    return (a, c) => (v(), $(O, null, [
      j(Ht, $t({
        ref: "wrapperRef$",
        link: n.link,
        class: [
          a.$style["button-container"],
          a.$style.behavior,
          a.$style[n.variant],
          a.$style[n.level],
          a.$style[n.size],
          n.disabled ? [a.$style.disabled] : [a.$style.clickable],
          {
            [a.$style.clicked]: n.clicked || o(s)()
          }
        ],
        "aria-disabled": n.disabled,
        "aria-label": n.label,
        onClick: o(l)
      }, n.disabled ? { disabled: "" } : {}, {
        role: "button",
        tabindex: "0"
      }), {
        default: E(() => [
          n.label ? (v(), $("span", {
            key: 0,
            class: p([a.$style["button-content"]])
          }, A(n.label), 3)) : S("", !0),
          n.icon ? (v(), $("span", {
            key: 1,
            class: p([a.$style["button-icon"]])
          }, [
            j(o(re), {
              icon: n.icon
            }, null, 8, ["icon"])
          ], 2)) : S("", !0)
        ]),
        _: 1
      }, 16, ["link", "class", "aria-disabled", "aria-label", "onClick"]),
      n.variant === "extendable-rect" ? (v(), $("div", {
        key: 0,
        class: p(a.$style["button-placeholder"])
      }, null, 2)) : S("", !0)
    ], 64));
  }
}), Yl = "_behavior_1fo8m_1", Zl = "_clickable_1fo8m_1", Xl = "_disabled_1fo8m_4", Jl = "_draggable_1fo8m_7", Ql = "_loading_1fo8m_10", Kl = "_rounded_1fo8m_14", er = "_secondary_1fo8m_14", tr = "_rect_1fo8m_14", nr = "_square_1fo8m_14", sr = "_circle_1fo8m_14", or = "_clicked_1fo8m_22", lr = "_small_1fo8m_143", rr = "_large_1fo8m_147", ar = "_text_1fo8m_303", ir = {
  behavior: Yl,
  clickable: Zl,
  disabled: Xl,
  draggable: Jl,
  loading: Ql,
  "button-container": "_button-container_1fo8m_14",
  rounded: Kl,
  secondary: er,
  rect: tr,
  "extendable-rect": "_extendable-rect_1fo8m_14",
  square: nr,
  circle: sr,
  clicked: or,
  "button-icon": "_button-icon_1fo8m_98",
  "button-content": "_button-content_1fo8m_114",
  small: lr,
  large: rr,
  "button-placeholder": "_button-placeholder_1fo8m_271",
  text: ar
}, ur = {
  $style: ir
}, ve = /* @__PURE__ */ R(Wl, [["__cssModules", ur], ["__scopeId", "data-v-9fd55233"]]), cr = /* @__PURE__ */ L({
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
    return (l, a) => (v(), U(Ht, {
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
          [l.$style.clicked]: o(n)() && t.clickable
        }
      ]),
      onClick: o(s)
    }, {
      default: E(() => [
        G(l.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["link", "class", "onClick"]));
  }
}), dr = "_behavior_ouh7m_1", fr = "_clickable_ouh7m_1", pr = "_disabled_ouh7m_4", _r = "_draggable_ouh7m_7", hr = "_loading_ouh7m_10", gr = "_metallic_ouh7m_14", yr = "_flat_ouh7m_14", vr = "_clicked_ouh7m_22", mr = "_dash_ouh7m_92", $r = {
  behavior: dr,
  clickable: fr,
  disabled: pr,
  draggable: _r,
  loading: hr,
  "card-container": "_card-container_ouh7m_14",
  "color-default": "_color-default_ouh7m_14",
  metallic: gr,
  "has-stroke": "_has-stroke_ouh7m_14",
  flat: yr,
  "color-cyan": "_color-cyan_ouh7m_14",
  "color-blue": "_color-blue_ouh7m_14",
  "color-green": "_color-green_ouh7m_14",
  "color-orange": "_color-orange_ouh7m_14",
  "color-red": "_color-red_ouh7m_14",
  clicked: vr,
  dash: mr,
  "stroke-bold": "_stroke-bold_ouh7m_399",
  "stroke-normal": "_stroke-normal_ouh7m_402",
  "stroke-thin": "_stroke-thin_ouh7m_405",
  "purpose-box": "_purpose-box_ouh7m_408",
  "purpose-container": "_purpose-container_ouh7m_412"
}, br = {
  $style: $r
}, K = /* @__PURE__ */ R(cr, [["__cssModules", br], ["__scopeId", "data-v-d941fd1e"]]), Ge = ({
  type: e,
  axises: t,
  data: n
}) => {
  const s = rn({
    datasets: [],
    axises: {}
  }), l = {
    datasets: B(() => s.datasets),
    axises: B(() => s.axises)
  }, a = (u) => {
    var r;
    return !Array.isArray(u) || u.length === 0 ? [] : Array.isArray(u) && ((r = u[0]) != null && r.label) ? u : [
      {
        label: "Data",
        series: u
      }
    ];
  }, c = (u, r) => r.map((f) => ({
    data: f,
    ...he(
      X(u).filter(([, y]) => !oe(y)).map(([y, h]) => {
        const g = h.selector ? N(f, h.selector) : null, d = h.accessor ? ge(f, h.accessor) : g;
        return [
          y,
          {
            normalized: Number(
              h.type === "number" ? parseFloat(String(g)) : h.type === "date" ? new Date(Number(g)) : g
            ),
            value: d
          }
        ];
      })
    )
  })), i = (u, r, f) => {
    const y = a(f).map((d) => ({
      ...d,
      label: ge(d, d.label ?? ""),
      series: c(r, d.series)
    })), h = y.flatMap((d) => d.series), g = he(
      X(r).filter(([, d]) => !oe(d)).map(([d, m]) => {
        const b = Mt(Q(h, `${d}.${m.type === "string" ? "value" : "normalized"}`)), w = Number(m.min === "auto" ? _l(b) : m.min ?? 0), V = Number(
          m.max === "auto" ? pl(b) ?? 0 : m.max ?? b.length - (/radar|doughnut/.test(u ?? "") ? 0 : 1)
        );
        return [
          d,
          {
            ...m,
            min: w,
            max: V,
            metrics: m.type === "string" ? b.map((C, D) => ({
              normalized: D / (V - w),
              value: C
            })) : Array(k.clamp(k.ceil((V - w) / (m.step ?? 1)) + 1, 0, 1 / 0)).fill(0).map((C, D) => ({
              normalized: D / k.ceil((V - w) / (m.step ?? 1)),
              value: w + (m.step ?? 1) * D
            }))
          }
        ];
      })
    );
    return g && X(g).forEach(([d, m]) => {
      m.type === "string" ? y.forEach((b) => {
        b.series.forEach((w) => {
          w[d].normalized = Q(m.metrics, "value").indexOf(w[d].value) / ((m.metrics ?? []).length - (/radar|doughnut/.test(u ?? "") ? 0 : 1));
        });
      }) : y.forEach((b) => {
        b.series.forEach((w) => {
          w[d].normalized = (Number(w[d].normalized ?? 0) - Number(m.min)) / (Number(m.max) - Number(m.min));
        });
      });
    }), {
      datasets: y,
      axises: g
    };
  };
  return gt(() => {
    const u = i(o(e), o(t), o(n));
    s.datasets = u.datasets, s.axises = u.axises;
  }), {
    ...l
  };
}, wr = (e) => (be("data-v-fefd0601"), e = e(), we(), e), kr = ["cx", "cy", "r", "stroke-dashoffset", "stroke-dasharray"], zr = ["x", "y"], Or = /* @__PURE__ */ wr(() => /* @__PURE__ */ _("hr", null, null, -1)), Sr = { id: "chart-content-clip" }, xr = ["cx", "cy", "r"], Mr = { "clip-path": "url(#chart-content-clip)" }, Ar = ["height", "width", "x", "y"], Cr = /* @__PURE__ */ L({
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
    const t = e, n = T(), { width: s, height: l } = xe(n), { axises: a, datasets: c } = Ge({
      type: "doughnut",
      data: t.datasets,
      axises: t.axises
    }), i = B(
      () => k.clamp(
        k.min(s.value - t.options.offset.x, l.value - t.options.offset.y) / 2,
        0,
        1 / 0
      )
    ), u = B(() => t.options.round ? 30 : 15), r = B(() => i.value * 2 * k.PI), f = B(() => ({
      x: s.value / 2,
      y: l.value / 2
    })), y = B(
      () => c.value.map((g) => g.series.reduce((d, m) => d + m.y.normalized, 0))
    ), h = B(
      () => c.value.map((g, d) => ({
        ...g,
        series: g.series.map((m) => ({
          ...m,
          y: {
            ...m.y,
            normalized: k.clamp(
              m.y.normalized / y.value[d] - u.value / r.value,
              0,
              1
            )
          }
        })).filter((m) => m.y.normalized > u.value / r.value / 2).map((m, b, w) => ({
          ...m,
          y: {
            ...m.y,
            normalized: m.y.normalized / w.reduce((V, C) => V + C.y.normalized, 0)
          }
        })).map((m, b, w) => ({
          ...m,
          y: {
            ...m.y,
            normalized: k.clamp(
              m.y.normalized / w.reduce((V, C) => V + C.y.normalized, 0) - u.value / r.value,
              0,
              1
            )
          }
        })).map((m, b, w) => ({
          ...m,
          y: {
            ...m.y,
            offset: w.slice(0, b).reduce((V, C) => V + C.y.normalized, 0)
          }
        })).map((m, b) => ({
          ...m,
          x: {
            ...m.x,
            label: k.cos(
              k.rad(
                (m.y.offset + m.y.normalized / 2 + u.value / r.value * b) * 360 - 90
              )
            )
          },
          y: {
            ...m.y,
            label: k.sin(
              k.rad(
                (m.y.offset + m.y.normalized / 2 + u.value / r.value * b) * 360 - 90
              )
            )
          }
        }))
      }))
    );
    return (g, d) => (v(), $("div", {
      ref_key: "wrapperRef$",
      ref: n,
      class: p(g.$style["chart-container"])
    }, [
      j(Me, {
        height: o(l),
        width: o(s)
      }, {
        path: E(() => [
          _("g", {
            class: p([g.$style["chart-group-plots"]])
          }, [
            (v(!0), $(O, null, I(o(h), (m) => (v(), $(O, {
              key: m.label
            }, [
              (v(!0), $(O, null, I(m.series, (b, w) => (v(), $("g", {
                key: `plot-${w}`,
                class: p(g.$style["chart-area"])
              }, [
                _("circle", {
                  cx: o(f).x,
                  cy: o(f).y,
                  r: o(i),
                  "stroke-dashoffset": b.y.offset * o(r) * -1 - o(u) * w + 0.25 * o(r),
                  "stroke-dasharray": `${b.y.normalized * o(r)} ${(1 - b.y.normalized) * o(r)}`,
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
                }, null, 10, kr),
                (v(), $("foreignObject", {
                  x: o(f).x + o(i) * b.x.label - 260 * +(b.x.label < 0),
                  y: o(f).y + o(i) * b.y.label - 240 * +(b.y.label < 0),
                  height: "240",
                  width: "260",
                  class: p([g.$style["chart-area"], g.$style["legend-container"]])
                }, [
                  j(K, {
                    class: p([g.$style["chart-area"], g.$style["legend-wrapper"]]),
                    radius: "var(--agh-ref-border-radius-500)"
                  }, {
                    default: E(() => [
                      t.options.title ? (v(), $(O, { key: 0 }, [
                        _("h1", {
                          class: p([g.$style["chart-area"], g.$style["legend-title"], g.$style.doughnut])
                        }, [
                          _("span", null, A(b.x.value), 1)
                        ], 2),
                        Or
                      ], 64)) : S("", !0),
                      (v(!0), $(O, null, I(o(a), (V, C) => (v(), $(O, { key: C }, [
                        !/(x)/.test(C) && V && b[C] ? (v(), $("div", {
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
                          }, A(b[C].value), 3)
                        ], 2)) : S("", !0)
                      ], 64))), 128))
                    ]),
                    _: 2
                  }, 1032, ["class", "radius"])
                ], 10, zr))
              ], 2))), 128))
            ], 64))), 128))
          ], 2),
          _("clipPath", Sr, [
            _("circle", {
              cx: o(f).x,
              cy: o(f).y,
              r: o(i) - 10
            }, null, 8, xr)
          ]),
          _("g", Mr, [
            (v(), $("foreignObject", {
              class: p(g.$style["chart-content-wrapper"]),
              height: o(i) * 2,
              width: o(i) * 2,
              x: o(f).x - o(i),
              y: o(f).y - o(i)
            }, [
              G(g.$slots, "default", {}, void 0, !0)
            ], 10, Ar))
          ])
        ]),
        _: 3
      }, 8, ["height", "width"])
    ], 2));
  }
}), Pr = "_behavior_pzvhi_1", Tr = "_clickable_pzvhi_1", Br = "_disabled_pzvhi_4", jr = "_draggable_pzvhi_7", Ir = "_loading_pzvhi_10", Er = "_path_pzvhi_24", Vr = "_radar_pzvhi_29", Lr = "_label_pzvhi_32", Fr = "_plot_pzvhi_85", Rr = "_point_pzvhi_85", Dr = "_doughnut_pzvhi_96", Nr = "_bg_pzvhi_102", Ur = "_round_pzvhi_106", Gr = "_line_pzvhi_119", qr = {
  behavior: Pr,
  clickable: Tr,
  disabled: Br,
  draggable: jr,
  loading: Ir,
  "chart-container": "_chart-container_pzvhi_14",
  "chart-axis": "_chart-axis_pzvhi_24",
  path: Er,
  radar: Vr,
  label: Lr,
  "font-align--center": "_font-align--center_pzvhi_45",
  "font-align--right": "_font-align--right_pzvhi_48",
  "font-align--left": "_font-align--left_pzvhi_51",
  "box-align--center": "_box-align--center_pzvhi_54",
  "box-align--left": "_box-align--left_pzvhi_57",
  "box-align--right": "_box-align--right_pzvhi_60",
  "chart-group-plots": "_chart-group-plots_pzvhi_67",
  "chart-area": "_chart-area_pzvhi_67",
  plot: Fr,
  point: Rr,
  doughnut: Dr,
  "legend-container": "_legend-container_pzvhi_96",
  bg: Nr,
  round: Ur,
  line: Gr,
  "legend-wrapper": "_legend-wrapper_pzvhi_147",
  "legend-group": "_legend-group_pzvhi_158",
  "legend-value": "_legend-value_pzvhi_166",
  "legend-label": "_legend-label_pzvhi_169",
  "legend-title": "_legend-title_pzvhi_173"
}, Hr = {
  $style: qr
}, ju = /* @__PURE__ */ R(Cr, [["__cssModules", Hr], ["__scopeId", "data-v-fefd0601"]]), Wr = (e) => (be("data-v-7ca4eb50"), e = e(), we(), e), Yr = ["d"], Zr = ["x", "y", "text-anchor"], Xr = ["x", "y"], Jr = ["d"], Qr = ["cx", "cy"], Kr = ["cx", "cy"], ea = ["x", "y"], ta = /* @__PURE__ */ Wr(() => /* @__PURE__ */ _("hr", null, null, -1)), na = /* @__PURE__ */ L({
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
    const t = e, n = T(), { width: s, height: l } = xe(n), { axises: a, datasets: c } = Ge({
      type: "line",
      data: fe(t).datasets,
      axises: fe(t).axises
    }), i = B(
      () => {
        var r, f, y, h, g, d;
        return (f = (r = a.value) == null ? void 0 : r.x) != null && f.metrics && ((h = (y = a.value) == null ? void 0 : y.y) != null && h.metrics) && l.value && l.value - t.options.offset.y > 0 && s.value && s.value - t.options.offset.x > 0 ? `
  M ${t.options.offset.x} 0
  L ${t.options.offset.x} ${l.value - t.options.offset.y}
  L ${s.value} ${l.value - t.options.offset.y}
  ${(g = t.options.grid) != null && g.includes("x") ? `${a.value.x.metrics.map(
          (m) => `
              M ${m.normalized * (s.value - t.options.offset.x) + t.options.offset.x} 0
              V ${l.value - t.options.offset.y}
            `
        ).join("")}` : ""}
  ${(d = t.options.grid) != null && d.includes("y") ? `${a.value.y.metrics.map(
          (m) => `
              M ${t.options.offset.x} ${(1 - m.normalized) * (l.value - t.options.offset.y)}
              H ${s.value}
            `
        ).join(`
`)}` : ""}
` : "";
      }
    ), u = B(
      () => i.value && c ? c.value.map((r) => ({
        ...r,
        path: `
            ${r.series.map(
          (f, y) => y === 0 ? `M ${f.x.normalized * (s.value - t.options.offset.x) + t.options.offset.x} ${(1 - f.y.normalized) * (l.value - t.options.offset.y)}` : t.options.curve === "smooth" ? y === 1 ? `C ${r.series[y - 1].x.normalized * (s.value - t.options.offset.x) + t.options.offset.x + s.value / r.series.length * t.options.radius} ${(1 - r.series[y - 1].y.normalized) * (l.value - t.options.offset.y)} ${f.x.normalized * (s.value - t.options.offset.x) + t.options.offset.x - s.value / r.series.length * t.options.radius} ${(1 - f.y.normalized) * (l.value - t.options.offset.y)} ${f.x.normalized * (s.value - t.options.offset.x) + t.options.offset.x} ${(1 - f.y.normalized) * (l.value - t.options.offset.y)}` : `S ${f.x.normalized * (s.value - t.options.offset.x) + t.options.offset.x - s.value / r.series.length * t.options.radius} ${(1 - f.y.normalized) * (l.value - t.options.offset.y)} ${f.x.normalized * (s.value - t.options.offset.x) + t.options.offset.x} ${(1 - f.y.normalized) * (l.value - t.options.offset.y)}` : `L ${f.x.normalized * (s.value - t.options.offset.x) + t.options.offset.x} ${(1 - f.y.normalized) * (l.value - t.options.offset.y)}`
        ).join(`
`)}`
      })) : []
    );
    return (r, f) => (v(), $("div", {
      ref_key: "wrapperRef$",
      ref: n,
      class: p(r.$style["chart-container"])
    }, [
      j(Me, {
        height: o(l),
        width: o(s)
      }, {
        defs: E(() => []),
        path: E(() => [
          _("g", {
            id: "chart-group-axises",
            class: p([r.$style["chart-group-axises"]])
          }, [
            _("path", {
              d: o(i),
              class: p([r.$style["chart-axis"], r.$style.line, r.$style.path])
            }, null, 10, Yr)
          ], 2),
          o(a) && o(s) && o(l) ? (v(), $("g", {
            key: 0,
            class: p([r.$style["chart-group-axises-label"]])
          }, [
            o(a).x && o(a).x.metrics ? (v(!0), $(O, { key: 0 }, I(o(a).x.metrics, (y, h) => (v(), $("text", {
              key: `axis-x--${h}`,
              x: y.normalized * (o(s) - t.options.offset.x) + t.options.offset.x,
              y: o(l) - t.options.offset.y + 20,
              class: p([r.$style["chart-axis"], r.$style.label]),
              "text-anchor": h === 0 ? "start" : h === o(a).x.metrics.length - 1 ? "end" : "middle"
            }, A(y.value), 11, Zr))), 128)) : S("", !0),
            o(a).y && o(a).y.metrics ? (v(!0), $(O, { key: 1 }, I(o(a).y.metrics, (y, h) => (v(), $("text", {
              key: `axis-y--${h}`,
              x: t.options.offset.x - 10,
              y: (1 - y.normalized) * (o(l) - t.options.offset.y) + 5,
              class: p([r.$style["chart-axis"], r.$style.label]),
              "text-anchor": "end"
            }, A(y.value), 11, Xr))), 128)) : S("", !0)
          ], 2)) : S("", !0),
          _("g", {
            class: p([r.$style["chart-group-plots"]])
          }, [
            (v(!0), $(O, null, I(o(u), (y) => (v(), $("g", {
              key: y.label,
              class: p([r.$style["chart-area"], r.$style.line, r.$style.plot])
            }, [
              _("path", {
                d: y.path
              }, null, 8, Jr)
            ], 2))), 128)),
            (v(!0), $(O, null, I(o(c), (y) => (v(), $(O, null, [
              (v(!0), $(O, null, I(y.series, (h, g) => (v(), $("g", {
                key: `chart-plot-${y.label}-plot-${g}`,
                class: p(r.$style["chart-area"])
              }, [
                _("circle", {
                  class: p([
                    r.$style.behavior,
                    r.$style["chart-area"],
                    r.$style.point,
                    r.$style.plot,
                    r.$style.clickable
                  ]),
                  cx: h.x.normalized * (o(s) - t.options.offset.x) + t.options.offset.x,
                  cy: (1 - h.y.normalized) * (o(l) - t.options.offset.y),
                  r: "50"
                }, null, 10, Qr),
                _("circle", {
                  class: p([r.$style["chart-area"], r.$style.point, r.$style.plot]),
                  cx: h.x.normalized * (o(s) - t.options.offset.x) + t.options.offset.x,
                  cy: (1 - h.y.normalized) * (o(l) - t.options.offset.y),
                  r: "5"
                }, null, 10, Kr),
                (v(), $("foreignObject", {
                  x: h.x.normalized * (o(s) - t.options.offset.x) + t.options.offset.x - 140,
                  y: (1 - h.y.normalized) * (o(l) - t.options.offset.y) - (h.y.normalized >= 0.5 ? 0 : 220),
                  height: "220",
                  width: "280",
                  class: p([r.$style["chart-area"], r.$style["legend-container"]])
                }, [
                  j(K, {
                    class: p([r.$style["chart-area"], r.$style["legend-wrapper"]]),
                    radius: "var(--agh-ref-border-radius-500)"
                  }, {
                    default: E(() => [
                      t.options.title ? (v(), $(O, { key: 0 }, [
                        _("h1", {
                          class: p([r.$style["chart-area"], r.$style["legend-title"]])
                        }, A(o(ge)(h.data, t.options.title)), 3),
                        ta
                      ], 64)) : S("", !0),
                      (v(!0), $(O, null, I(o(a), (d, m) => (v(), $(O, { key: m }, [
                        d && h[m] ? (v(), $("div", {
                          key: 0,
                          class: p([r.$style["chart-area"], r.$style["legend-group"]])
                        }, [
                          _("label", {
                            class: p([r.$style["chart-area"], r.$style["legend-label"]])
                          }, A(d.label), 3),
                          _("p", {
                            class: p([r.$style["chart-area"], r.$style["legend-value"]])
                          }, A(h[m].value), 3)
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
}), sa = "_behavior_1sfnc_1", oa = "_clickable_1sfnc_1", la = "_disabled_1sfnc_4", ra = "_draggable_1sfnc_7", aa = "_loading_1sfnc_10", ia = "_path_1sfnc_24", ua = "_radar_1sfnc_29", ca = "_label_1sfnc_32", da = "_plot_1sfnc_85", fa = "_point_1sfnc_85", pa = "_doughnut_1sfnc_96", _a = "_bg_1sfnc_102", ha = "_round_1sfnc_106", ga = "_line_1sfnc_119", ya = {
  behavior: sa,
  clickable: oa,
  disabled: la,
  draggable: ra,
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
}, va = {
  $style: ya
}, Iu = /* @__PURE__ */ R(na, [["__cssModules", va], ["__scopeId", "data-v-7ca4eb50"]]), ma = ["id"], $a = ["stdDeviation"], ba = /* @__PURE__ */ _("feColorMatrix", {
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
    return (n, s) => (v(), $("filter", {
      id: t.id
    }, [
      _("feGaussianBlur", {
        stdDeviation: t.radius,
        in: "SourceGraphic",
        result: "blur"
      }, null, 8, $a),
      ba,
      wa
    ], 8, ma));
  }
}), ka = (e) => (be("data-v-5b47bbf2"), e = e(), we(), e), za = ["innerHTML"], Oa = { id: "chart-area-bg-mask" }, Sa = ["d"], xa = ["d"], Ma = ["d"], Aa = ["x", "y", "height", "width"], Ca = ["d"], Pa = ["cx", "cy"], Ta = ["cx", "cy"], Ba = ["x", "y"], ja = /* @__PURE__ */ ka(() => /* @__PURE__ */ _("hr", null, null, -1)), Ia = /* @__PURE__ */ L({
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
    const t = e, n = T(), { width: s, height: l } = xe(n), { axises: a, datasets: c } = Ge({
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
    })), r = F(
      () => {
        var d, m;
        return i.value > 0 && ((m = (d = a.value) == null ? void 0 : d.x) != null && m.metrics) ? `
      ${a.value.x.metrics.map(
          (b, w) => `${w === 0 ? "M" : "L"} ${u.value.x + i.value * k.cos(k.rad(b.normalized * 360 - 90))} ${u.value.y + i.value * k.sin(k.rad(b.normalized * 360 - 90))}`
        ).join(" ")} Z
      ` : "";
      }
    ), f = F(
      () => r.value && c.value ? c.value.map((d) => ({
        ...d,
        path: `${d.series.map(
          (m, b) => `${b === 0 ? "M" : "L"} ${u.value.x + i.value * m.y.normalized * k.cos(k.rad(m.x.normalized * 360 - 90))} ${u.value.y + i.value * m.y.normalized * k.sin(k.rad(m.x.normalized * 360 - 90))}`
        ).join(" ")} Z`
      })) : []
    ), y = B(
      () => i.value > 0 && a.value.x.metrics ? `M ${u.value.x} ${u.value.y}
      ${a.value.x.metrics.map(
        (d) => `L ${u.value.x + i.value * k.cos(k.rad(d.normalized * 360 - 90))} ${u.value.y + i.value * k.sin(k.rad(d.normalized * 360 - 90))}
            M ${u.value.x} ${u.value.y}`
      ).join(`
`)}
      Z` : ""
    ), h = q(""), g = () => {
      n.value && (h.set(
        qt("--chart-bg-fill-svg", n, {
          observe: !0
        }).value
      ), h() || Rt(g, 1));
    };
    return ee(() => {
      g();
    }), (d, m) => (v(), $("div", {
      ref_key: "wrapperRef$",
      ref: n,
      class: p(d.$style["chart-container"])
    }, [
      j(Me, {
        height: o(l),
        width: o(s)
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
            innerHTML: o(h)()
          }, null, 8, za),
          _("mask", Oa, [
            _("path", {
              d: r.value,
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
            d: r.value,
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
              d: o(y),
              class: p([d.$style["chart-axis"], d.$style.radar, d.$style.path])
            }, null, 10, Ma)
          ], 2),
          o(a) ? (v(), $("g", {
            key: 0,
            class: p([d.$style["chart-group-axises-label"]])
          }, [
            (v(!0), $(O, null, I(o(a).x.metrics, (b) => (v(), $("foreignObject", {
              key: b.value,
              x: o(u).x + o(i) * o(k).cos(o(k).rad(b.normalized * 360 - 90)) - (b.normalized % 0.5 === 0 ? o(i) / 2 : b.normalized > 0.5 ? o(i) : 0),
              y: o(u).y + o(i) * 1.1 * o(k).sin(o(k).rad(b.normalized * 360 - 90)) - o(i) / 6,
              height: o(i) / 3,
              width: o(i),
              class: p([d.$style["chart-axis"], d.$style.radar, d.$style["label-wrapper"]])
            }, [
              _("p", {
                class: p(["font-bold", [
                  d.$style["chart-axis"],
                  d.$style.radar,
                  d.$style.label,
                  b.normalized % 0.5 === 0 ? d.$style["font-align--center"] : b.normalized < 0.5 ? d.$style["font-align--left"] : d.$style["font-align--right"],
                  b.normalized % 0.5 === 0 ? d.$style["box-align--center"] : b.normalized < 0.5 ? d.$style["box-align--left"] : d.$style["box-align--right"]
                ]])
              }, A(b.value), 3)
            ], 10, Aa))), 128))
          ], 2)) : S("", !0),
          _("g", {
            class: p([d.$style["chart-group-plots"]])
          }, [
            (v(!0), $(O, null, I(f.value, (b) => (v(), $("g", {
              key: b.label,
              class: p([d.$style["chart-area"], d.$style.radar, d.$style.plot])
            }, [
              _("path", {
                d: b.path,
                class: p([
                  {
                    [d.$style.round]: t.options.round
                  }
                ])
              }, null, 10, Ca)
            ], 2))), 128))
          ], 2),
          (v(!0), $(O, null, I(o(c), (b) => (v(), $("g", {
            key: b.label,
            class: p([d.$style["chart-area-label"]])
          }, [
            (v(!0), $(O, null, I(b.series, (w, V) => (v(), $("g", {
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
                cx: o(u).x + o(i) * w.y.normalized * o(k).cos(o(k).rad(w.x.normalized * 360 - 90)),
                cy: o(u).y + o(i) * w.y.normalized * o(k).sin(o(k).rad(w.x.normalized * 360 - 90)),
                r: "10"
              }, null, 10, Pa),
              _("circle", {
                class: p([d.$style["chart-area"], d.$style.radar, d.$style.point, d.$style.plot]),
                cx: o(u).x + o(i) * w.y.normalized * o(k).cos(o(k).rad(w.x.normalized * 360 - 90)),
                cy: o(u).y + o(i) * w.y.normalized * o(k).sin(o(k).rad(w.x.normalized * 360 - 90)),
                r: "5"
              }, null, 10, Ta),
              (v(), $("foreignObject", {
                x: o(u).x + o(i) * w.y.normalized * o(k).cos(o(k).rad(w.x.normalized * 360 - 90)) - 130,
                y: o(u).y + o(i) * w.y.normalized * o(k).sin(o(k).rad(w.x.normalized * 360 - 90)),
                height: "200",
                width: "260",
                class: p([d.$style["chart-area"], d.$style["legend-container"]])
              }, [
                j(K, {
                  class: p([d.$style["chart-area"], d.$style["legend-wrapper"]]),
                  radius: "var(--agh-ref-border-radius-500)"
                }, {
                  default: E(() => [
                    t.options.title ? (v(), $(O, { key: 0 }, [
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
                    (v(!0), $(O, null, I(o(a), (C, D) => (v(), $(O, { key: D }, [
                      !/(x|y)/.test(D) && C && w[D] ? (v(), $("div", {
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
}), Ea = "_behavior_1bxlz_1", Va = "_clickable_1bxlz_1", La = "_disabled_1bxlz_4", Fa = "_draggable_1bxlz_7", Ra = "_loading_1bxlz_10", Da = "_path_1bxlz_24", Na = "_radar_1bxlz_29", Ua = "_label_1bxlz_32", Ga = "_plot_1bxlz_85", qa = "_point_1bxlz_85", Ha = "_doughnut_1bxlz_96", Wa = "_bg_1bxlz_102", Ya = "_round_1bxlz_106", Za = "_line_1bxlz_119", Xa = {
  behavior: Ea,
  clickable: Va,
  disabled: La,
  draggable: Fa,
  loading: Ra,
  "chart-container": "_chart-container_1bxlz_14",
  "chart-axis": "_chart-axis_1bxlz_24",
  path: Da,
  radar: Na,
  label: Ua,
  "font-align--center": "_font-align--center_1bxlz_45",
  "font-align--right": "_font-align--right_1bxlz_48",
  "font-align--left": "_font-align--left_1bxlz_51",
  "box-align--center": "_box-align--center_1bxlz_54",
  "box-align--left": "_box-align--left_1bxlz_57",
  "box-align--right": "_box-align--right_1bxlz_60",
  "chart-group-plots": "_chart-group-plots_1bxlz_67",
  "chart-area": "_chart-area_1bxlz_67",
  plot: Ga,
  point: qa,
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
  return vt() ? (mt(e), !0) : !1;
}
function me(e) {
  return typeof e == "function" ? e() : o(e);
}
const Yt = typeof window < "u", qe = () => {
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
  return typeof t == "function" ? yt(un(() => ({ get: t, set: qe }))) : T(t);
}
function se(e) {
  var t;
  const n = me(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Zt = Yt ? window : void 0;
function de(...e) {
  let t, n, s, l;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, s, l] = e, t = Zt) : [t, n, s, l] = e, !t)
    return qe;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const a = [], c = () => {
    a.forEach((f) => f()), a.length = 0;
  }, i = (f, y, h, g) => (f.addEventListener(y, h, g), () => f.removeEventListener(y, h, g)), u = H(
    () => [se(t), me(l)],
    ([f, y]) => {
      c(), f && a.push(
        ...n.flatMap((h) => s.map((g) => i(f, h, g, y)))
      );
    },
    { immediate: !0, flush: "post" }
  ), r = () => {
    u(), c();
  };
  return Wt(r), r;
}
let _t = !1;
function ht(e, t, n = {}) {
  const { window: s = Zt, ignore: l = [], capture: a = !0, detectIframe: c = !1 } = n;
  if (!s)
    return;
  Be && !_t && (_t = !0, Array.from(s.document.body.children).forEach((h) => h.addEventListener("click", qe)));
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
    }, { passive: !0, capture: a }),
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
  const a = () => {
    const i = me(e);
    !i || n.value || (Be && (s = de(
      i,
      "touchmove",
      (u) => {
        ei(u);
      },
      { passive: !1 }
    )), i.style.overflow = "hidden", n.value = !0);
  }, c = () => {
    const i = me(e);
    !i || !n.value || (Be && (s == null || s()), i.style.overflow = l, n.value = !1);
  };
  return Wt(c), F({
    get() {
      return n.value;
    },
    set(i) {
      i ? a() : c();
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
    H(t, (a) => l.value = a);
  };
}
ni();
const si = ["onClick"], oi = /* @__PURE__ */ L({
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
        X(Ne(n.options, n.groupBy ?? "")).map(([r, f]) => [
          r === "undefined" ? "" : r,
          f.map(
            (y) => q({
              ...y,
              selected: !!(n.multiple ? Q(n.modelValue, n.fields.key).includes(N(y, n.fields.key)) : N(y, n.fields.key) === N(n.modelValue, n.fields.key))
            })
          )
        ])
      )
    ), a = q(!1), c = () => {
      if (s.value) {
        const { scrollHeight: r, clientHeight: f } = s.value;
        a.set(r > f + 1);
      }
    }, i = (r) => {
      r.update((f) => ({
        ...f,
        selected: !f.selected
      })), n.multiple ? t(
        "update:modelValue",
        Te(
          Q(
            l.value,
            (f) => f.map((y) => y()).filter((y) => y.selected)
          )
        )
      ) : t("update:modelValue", r());
    }, u = () => {
      n.multiple ? t("update:modelValue", []) : t("update:modelValue", {});
    };
    return Ue(s, c, {
      window
    }), ee(() => {
      c();
    }), (r, f) => (v(), U(K, {
      class: p([
        r.$style["menu-container"],
        {
          [r.$style.classify]: n.groupBy
        }
      ]),
      radius: "var(--agh-ref-border-radius-500)"
    }, {
      default: E(() => [
        n.label || n.multiple ? (v(), $("header", {
          key: 0,
          class: p(r.$style["menu-header"])
        }, [
          _("h1", {
            class: p(r.$style.title)
          }, A(n.label), 3),
          n.multiple ? (v(), U(ve, {
            key: 0,
            class: p(r.$style.button),
            label: "Clear Selection",
            icon: "fa6-solid:eraser",
            variant: "text",
            onClick: f[0] || (f[0] = (y) => u())
          }, null, 8, ["class"])) : S("", !0)
        ], 2)) : S("", !0),
        _("div", {
          ref_key: "wrapperRef$",
          ref: s,
          class: p([
            r.$style["menu-wrapper"],
            {
              [r.$style.overflowed]: o(a)()
            }
          ])
        }, [
          (v(!0), $(O, null, I(o(l), (y, h) => (v(), $("div", {
            key: h,
            class: p([
              r.$style["menu-group"],
              {
                [r.$style.classify]: n.groupBy
              }
            ])
          }, [
            h ? (v(), $("label", {
              key: 0,
              class: p(r.$style["menu-group-label"]),
              name: ""
            }, A(h), 3)) : S("", !0),
            (v(!0), $(O, null, I(y, (g, d) => (v(), $("div", {
              key: `option-${d}`,
              class: p([
                r.$style["menu-option"],
                r.$style.behavior,
                r.$style.clickable,
                {
                  [r.$style.selected]: g().selected,
                  [r.$style.multiple]: n.multiple
                }
              ]),
              onClick: (m) => i(g)
            }, [
              n.multiple ? (v(), U(o(re), {
                key: 0,
                class: p(r.$style["menu-option-icon"]),
                icon: g().selected ? "fa6-solid:square-check" : "fa6-regular:square"
              }, null, 8, ["class", "icon"])) : S("", !0),
              n.fields.icon ? (v(), U(o(re), {
                key: 1,
                class: p(r.$style["menu-option-icon"]),
                icon: String(o(N)(g(), n.fields.icon))
              }, null, 8, ["class", "icon"])) : S("", !0),
              _("div", {
                class: p(r.$style["menu-option-group"])
              }, [
                n.fields.title ? S("", !0) : (v(), $("p", {
                  key: 0,
                  class: p(r.$style["menu-field"])
                }, A(o(N)(g(), n.fields.key)), 3)),
                (v(!0), $(O, null, I(o(Nt)(n.fields, ["key", "icon"]), (m) => (v(), $(O, {
                  key: `option-field-${m}`
                }, [
                  m ? (v(), $("p", {
                    key: 0,
                    class: p(r.$style["menu-field"])
                  }, A(o(ge)(g(), m)), 3)) : S("", !0)
                ], 64))), 128))
              ], 2)
            ], 10, si))), 128))
          ], 2))), 128))
        ], 2)
      ]),
      _: 1
    }, 8, ["class", "radius"]));
  }
}), li = "_behavior_1k2c6_1", ri = "_clickable_1k2c6_1", ai = "_disabled_1k2c6_4", ii = "_draggable_1k2c6_7", ui = "_loading_1k2c6_10", ci = "_classify_1k2c6_29", di = "_title_1k2c6_47", fi = "_button_1k2c6_50", pi = "_overflowed_1k2c6_77", _i = "_hover_1k2c6_91", hi = "_selected_1k2c6_95", gi = "_multiple_1k2c6_99", yi = {
  behavior: li,
  clickable: ri,
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
}, vi = {
  $style: yi
}, $e = /* @__PURE__ */ R(oi, [["__cssModules", vi], ["__scopeId", "data-v-29c13de6"]]), mi = /* @__PURE__ */ L({
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
      set: (a) => (l.set(!0), t("update:modelValue", a))
    }), l = q(!0);
    return (a, c) => Pe((v(), $("div", {
      class: p([a.$style["dropdown-container"], a.$style[a.size]])
    }, [
      j(ve, {
        disabled: n.disabled,
        label: o(N)(n.modelValue, n.fields.key),
        icon: o(l)() ? "fa6-solid:chevron-down" : "fa6-solid:chevron-up",
        clicked: !o(l)(),
        level: n.level,
        size: n.size,
        variant: n.size === "small" ? "rounded" : "rect",
        class: p([a.$style["dropdown-button"], a.$style[a.size]]),
        onClick: c[0] || (c[0] = (i) => o(l).update((u) => !u)),
        type: "search"
      }, null, 8, ["disabled", "label", "icon", "clicked", "level", "size", "variant", "class"]),
      a.items.length > 0 && !o(l)() ? (v(), U($e, {
        key: 0,
        class: p(a.$style["dropdown-menu"]),
        options: a.items,
        fields: n.fields,
        modelValue: s.value,
        "onUpdate:modelValue": c[1] || (c[1] = (i) => s.value = i)
      }, null, 8, ["class", "options", "fields", "modelValue"])) : S("", !0)
    ], 2)), [
      [o(je), () => o(l).set(!0)]
    ]);
  }
}), $i = "_large_184z5_7", bi = {
  "dropdown-container": "_dropdown-container_184z5_1",
  large: $i,
  "dropdown-menu": "_dropdown-menu_184z5_11",
  "dropdown-button": "_dropdown-button_184z5_11"
}, wi = {
  $style: bi
}, Vu = /* @__PURE__ */ R(mi, [["__cssModules", wi], ["__scopeId", "data-v-89c03d44"]]), ki = ["height", "width"], zi = /* @__PURE__ */ _("feFlood", {
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
}, null, -1), Ni = /* @__PURE__ */ _("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" }, null, -1), Ui = /* @__PURE__ */ _("feBlend", {
  in2: "effect-innerShadow2",
  result: "effect-innerShadow3"
}, null, -1), Gi = /* @__PURE__ */ _("feColorMatrix", {
  in: "SourceAlpha",
  result: "hardAlpha",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}, null, -1), qi = /* @__PURE__ */ _("feOffset", {
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
  Ni,
  Ui,
  Gi,
  qi,
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
    return (n, s) => (v(), $("filter", {
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
    return (n, s) => (v(), $("div", {
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
}, Lu = /* @__PURE__ */ R(Qi, [["__cssModules", nu], ["__scopeId", "data-v-d1ec5a1d"]]), He = (e) => (be("data-v-017d9edf"), e = e(), we(), e), su = ["innerHTML"], ou = ["cx", "cy", "r"], lu = ["cx", "cy", "r"], ru = /* @__PURE__ */ He(() => /* @__PURE__ */ _("mask", { id: "progress-groove-mask" }, [
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
    const t = e, n = T(), { width: s, height: l } = xe(n), a = B(
      () => k.clamp(k.min(s.value, l.value) / 2 - t.thickness / 2, 0, 1 / 0)
    ), c = B(() => a.value * 2 * k.PI), i = B(() => ({
      x: s.value / 2,
      y: l.value / 2
    })), u = q(""), r = () => {
      n.value && t.variant === "convex" && (u.set(
        qt("--progress-value-fill-gradient", n, {
          observe: !0
        }).value
      ), u() || Rt(r, 1));
    };
    return ee(() => {
      r();
    }), (f, y) => (v(), $("div", {
      ref_key: "wrapperRef$",
      ref: n,
      class: p([f.$style["progress-container"], f.$style[t.variant]])
    }, [
      j(Me, {
        height: o(l),
        width: o(s)
      }, {
        defs: E(() => [
          _("g", {
            innerHTML: o(u)()
          }, null, 8, su),
          j(Ji, {
            height: o(l),
            width: o(s)
          }, null, 8, ["height", "width"]),
          _("circle", {
            id: "progress-groove-outer",
            cx: o(i).x,
            cy: o(i).y,
            r: o(a) + t.thickness / 2
          }, null, 8, ou),
          _("circle", {
            id: "progress-groove-inner",
            cx: o(i).x,
            cy: o(i).y,
            r: o(a) - t.thickness / 2
          }, null, 8, lu),
          ru
        ]),
        path: E(() => [
          _("g", {
            class: p(f.$style["progress-groove"])
          }, iu, 2),
          _("g", {
            class: p(f.$style["progress-value"])
          }, [
            _("circle", {
              cx: o(i).x,
              cy: o(i).y,
              r: o(a),
              "stroke-dashoffset": (t.value + 0.25) * o(c),
              "stroke-dasharray": `${t.value * o(c)} ${(1 - t.value) * o(c)}`,
              "stroke-width": t.thickness,
              fill: "transparent"
            }, null, 8, uu)
          ], 2),
          cu,
          _("g", du, [
            (v(), $("foreignObject", {
              height: o(a) * 2,
              width: o(a) * 2,
              x: o(i).x - o(a),
              y: o(i).y - o(a)
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
}, yu = {
  $style: gu
}, Fu = /* @__PURE__ */ R(pu, [["__cssModules", yu], ["__scopeId", "data-v-017d9edf"]]), vu = (e, t) => {
  var n;
  if (t) {
    const s = (n = X(Nt(e, "valid")).find(([l, a]) => a && t[l])) == null ? void 0 : n[0];
    return s ? t[s] ?? null : null;
  }
  return null;
}, mu = ["value"], $u = ["for"], bu = /* @__PURE__ */ L({
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
    ), l = T(), a = q(""), c = () => {
      var i;
      return a.set(
        l.value ? (i = l.value) != null && i.validity.valid ? "" : vu(l.value.validity, n.invalidMessage ?? {}) ?? l.value.validationMessage : ""
      );
    };
    return ee(() => {
      c();
    }), (i, u) => (v(), $("div", {
      class: p([
        i.$style["textfield-container"],
        {
          [i.$style[`icon-align--${n.iconAlign}`]]: n.icon || i.type === "search"
        }
      ])
    }, [
      _("input", $t({
        ref_key: "inputRef$",
        ref: l,
        class: [i.$style["textfield-input"]]
      }, n, {
        value: n.modelValue,
        onInput: u[0] || (u[0] = //@ts-ignore
        (...r) => o(s) && o(s)(...r))
      }), null, 16, mu),
      i.type === "search" || n.icon ? (v(), U(o(re), {
        key: 0,
        class: p([i.$style["textfield-label--icon"], i.$style.icon]),
        icon: n.icon || i.type === "search" ? "fa6-solid:magnifying-glass" : ""
      }, null, 8, ["class", "icon"])) : S("", !0),
      o(a)() ? (v(), $("label", {
        key: 1,
        for: n.name,
        class: p([i.$style["textfield-label"]])
      }, [
        j(o(re), {
          class: p([i.$style["textfield-label--icon"]]),
          icon: "fa6-solid:circle-xmark"
        }, null, 8, ["class"]),
        _("span", {
          class: p([i.$style["textfield-label--value"]])
        }, A(o(a)()), 3)
      ], 10, $u)) : S("", !0)
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
}, Jt = /* @__PURE__ */ R(bu, [["__cssModules", ku], ["__scopeId", "data-v-784e2d65"]]), zu = /* @__PURE__ */ L({
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
      set: (r) => (u(r), t("update:modelValue", r))
    }), l = T(), a = q(!1), c = q([]), i = (r) => {
      r && (t("update:modelValue", N(r, n.fields.key)), t("select", r), a.set(!0));
    }, u = (r) => {
      var f;
      c.set(
        ((f = n.items) == null ? void 0 : f.filter((y) => String(N(y, n.fields.key)).includes(r))) ?? []
      );
    };
    return H(s, u), H(l, i), (r, f) => (v(), $("div", {
      class: p(r.$style["search-bar--container"])
    }, [
      j(Jt, {
        modelValue: s.value,
        "onUpdate:modelValue": f[0] || (f[0] = (y) => s.value = y),
        class: p(r.$style["search-bar--input"]),
        disabled: n.disabled,
        onClick: f[1] || (f[1] = (y) => o(a).set(!1)),
        onFocus: f[2] || (f[2] = (y) => o(a).set(!1)),
        onBlur: f[3] || (f[3] = (y) => o(a).set(!0)),
        type: "search"
      }, null, 8, ["modelValue", "class", "disabled"]),
      s.value && o(c)().length > 0 && !o(a)() ? (v(), U($e, {
        key: 0,
        class: p(r.$style["search-bar--menu"]),
        options: o(c)(),
        fields: n.fields,
        modelValue: l.value,
        "onUpdate:modelValue": f[4] || (f[4] = (y) => l.value = y)
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
    }, a = {
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
    }), r = T(Ko(n.sortOptions)), f = F({
      get: () => n.sort ?? r.value,
      set: (z) => {
        z && (w.set(!0), t("update:sort", z), n.sort || (r.value = z));
      }
    }), y = T([]), h = F({
      get: () => n.filter ?? y.value,
      set: (z) => {
        t("update:filter", z ?? []), n.filter || (y.value = z ?? []);
      }
    }), g = T(), d = F({
      get: () => n.selected !== void 0 ? n.selected : g.value,
      set: (z) => {
        z && (t("update:selected", z), n.selected || (g.value = z));
      }
    }), m = T(n.items), b = q(!0), w = q(!0), V = q(!1), C = () => {
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
          selected: N(Z, n.fields.key) === N(d.value, n.fields.key)
        })
      ), x = Qo(
        z,
        (Z) => N(Z, n.fields.key).includes(u.value)
      ), te = Ol(
        x,
        [((Ce = f.value) == null ? void 0 : Ce.field) ?? n.fields.key],
        [((We = f.value) == null ? void 0 : We.direction) ?? "asc"]
      ), P = oe(h.value) ? te : il(
        ...Q(
          Ne(h.value, "field"),
          (Z) => Te(
            Z.map(
              (Ye) => te.filter((Kt) => dl(Kt, { [Ye.field]: Ye.value }))
            )
          )
        ),
        cl
      );
      m.value = P;
    };
    return Ue(s, C, {
      window
    }), ee(() => {
      Ae(), C();
    }), dn(() => {
      Ae(), C();
    }), H([f, h, u, d], () => {
      Ae(), C();
    }), (z, x) => (v(), U(K, {
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
            n.filterOptions && !o(oe)(n.filterOptions) ? Pe((v(), $("div", {
              key: 0,
              class: p(z.$style["list-toolbar-tool"]),
              onKeydown: [
                x[3] || (x[3] = ue((P) => o(b).set(!0), ["esc"])),
                x[4] || (x[4] = ue((P) => o(b).set(!0), ["enter"]))
              ]
            }, [
              j(ve, {
                class: p(z.$style["list-toolbar-button"]),
                clicked: !o(b)(),
                onClick: x[1] || (x[1] = (P) => D(o(b))),
                icon: "fa6-solid:filter",
                variant: "text"
              }, null, 8, ["class", "clicked"]),
              h.value.length > 0 ? (v(), $("span", {
                key: 0,
                class: p(z.$style["list-toolbar-button-deco"])
              }, A(h.value.length), 3)) : S("", !0),
              o(b)() ? S("", !0) : (v(), U($e, {
                key: 1,
                class: p(z.$style["list-toolbar-menu"]),
                fields: a,
                options: o(c),
                multiple: !0,
                modelValue: h.value,
                "onUpdate:modelValue": x[2] || (x[2] = (P) => h.value = P),
                label: "Filter",
                "group-by": "label"
              }, null, 8, ["class", "options", "modelValue"]))
            ], 34)), [
              [o(je), () => o(b).set(!0)]
            ]) : S("", !0),
            n.sortOptions && !o(oe)(n.sortOptions) ? Pe((v(), $("div", {
              key: 1,
              class: p(z.$style["list-toolbar-tool"]),
              onKeydown: [
                x[7] || (x[7] = ue((P) => o(w).set(!0), ["esc"])),
                x[8] || (x[8] = ue((P) => o(w).set(!0), ["enter"]))
              ]
            }, [
              j(ve, {
                class: p(z.$style["list-toolbar-button"]),
                icon: ((te = f.value) == null ? void 0 : te.icon) ?? "fa6-solid:arrow-down-wide-short",
                clicked: !o(w)(),
                onClick: x[5] || (x[5] = (P) => D(o(w))),
                variant: "text"
              }, null, 8, ["class", "icon", "clicked"]),
              o(w)() ? S("", !0) : (v(), U($e, {
                key: 0,
                class: p(z.$style["list-toolbar-menu"]),
                fields: l,
                options: n.sortOptions,
                modelValue: f.value,
                "onUpdate:modelValue": x[6] || (x[6] = (P) => f.value = P)
              }, null, 8, ["class", "options", "modelValue"]))
            ], 34)), [
              [o(je), () => o(w).set(!0)]
            ]) : S("", !0)
          ], 2),
          _("div", {
            ref_key: "wrapperRef$",
            ref: s,
            class: p([
              z.$style["list-wrapper"],
              {
                [z.$style.overflowed]: o(V)()
              }
            ])
          }, [
            j(Nl, {
              items: m.value,
              "group-by": n.groupBy
            }, {
              placeholder: E(() => [
                G(z.$slots, "placeholder", {}, void 0, !0)
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
                    G(z.$slots, "default", {
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
          G(z.$slots, "footer", {}, void 0, !0)
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
  Nl as BaseList,
  Me as BasePoly,
  ve as ButtonBox,
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
  $e as SelectMenu,
  Jt as TextField
};
//# sourceMappingURL=ui.component.es.js.map
