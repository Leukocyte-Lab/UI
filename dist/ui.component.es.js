import { shallowRef as nn, watchEffect as $t, readonly as mt, getCurrentScope as kt, onScopeDispose as wt, unref as l, computed as D, watch as W, ref as A, getCurrentInstance as sn, onMounted as H, defineComponent as E, openBlock as g, createBlock as R, resolveDynamicComponent as ln, normalizeProps as rn, guardReactiveProps as an, withCtx as q, renderSlot as G, createElementBlock as b, Fragment as x, createCommentVNode as O, renderList as B, normalizeClass as p, createElementVNode as h, useCssVars as zt, toDisplayString as M, createTextVNode as on, mergeProps as Ve, createVNode as I, reactive as cn, pushScopeId as me, popScopeId as ke, toRefs as K, toRef as un, customRef as dn, withDirectives as Pe, normalizeStyle as fn, onUpdated as pn, withKeys as ue } from "vue";
import { i as pe, d as oe, g as _n, e as ie, f as gn, h as xt, j as Ot, k as hn, l as vn, o as yn, m as we, n as bn, q as Le, r as $n, t as Mt, v as mn, w as kn, x as wn, y as Ke, z as et, A as ze, B as _e, C as xe, D as ee, E as zn, F as xn, G as On, I as St, J as Re, K as Y, L as Mn, O as Sn, P as jn, Q as tt, R as An, T as Bn, V as jt, W as At, X as Cn, Y as Tn, Z as Pn, _ as Bt, $ as qn, a0 as In, a1 as ge, u as Oe, p as he, a2 as ae, a3 as Ct, a4 as te, M as w, b as U, s as F, a5 as qe } from "./parser-f68503d3.js";
import { Icon as ne } from "@iconify/vue/offline";
var En = /\s/;
function Vn(e) {
  for (var t = e.length; t-- && En.test(e.charAt(t)); )
    ;
  return t;
}
var Ln = /^\s+/;
function Rn(e) {
  return e && e.slice(0, Vn(e) + 1).replace(Ln, "");
}
var nt = 0 / 0, Dn = /^[-+]0x[0-9a-f]+$/i, Fn = /^0b[01]+$/i, Nn = /^0o[0-7]+$/i, Un = parseInt;
function Gn(e) {
  if (typeof e == "number")
    return e;
  if (pe(e))
    return nt;
  if (oe(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = oe(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Rn(e);
  var n = Fn.test(e);
  return n || Nn.test(e) ? Un(e.slice(2), n ? 2 : 8) : Dn.test(e) ? nt : +e;
}
var st = Object.create, Wn = function() {
  function e() {
  }
  return function(t) {
    if (!oe(t))
      return {};
    if (st)
      return st(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
const Hn = Wn;
function Yn(e, t, n) {
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
function Zn(e, t) {
  var n = -1, s = e.length;
  for (t || (t = Array(s)); ++n < s; )
    t[n] = e[n];
  return t;
}
var Xn = 800, Jn = 16, Qn = Date.now;
function Kn(e) {
  var t = 0, n = 0;
  return function() {
    var s = Qn(), r = Jn - (s - n);
    if (n = s, r > 0) {
      if (++t >= Xn)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function es(e) {
  return function() {
    return e;
  };
}
var ts = function() {
  try {
    var e = _n(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const ve = ts;
var ns = ve ? function(e, t) {
  return ve(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: es(t),
    writable: !0
  });
} : ie;
const ss = ns;
var ls = Kn(ss);
const Tt = ls;
function rs(e, t) {
  for (var n = -1, s = e == null ? 0 : e.length; ++n < s && t(e[n], n, e) !== !1; )
    ;
  return e;
}
function De(e, t, n) {
  t == "__proto__" && ve ? ve(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
var as = Object.prototype, os = as.hasOwnProperty;
function Pt(e, t, n) {
  var s = e[t];
  (!(os.call(e, t) && gn(s, n)) || n === void 0 && !(t in e)) && De(e, t, n);
}
function ce(e, t, n, s) {
  var r = !n;
  n || (n = {});
  for (var a = -1, c = t.length; ++a < c; ) {
    var i = t[a], u = s ? s(n[i], e[i], i, n, e) : void 0;
    u === void 0 && (u = e[i]), r ? De(n, i, u) : Pt(n, i, u);
  }
  return n;
}
var lt = Math.max;
function qt(e, t, n) {
  return t = lt(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var s = arguments, r = -1, a = lt(s.length - t, 0), c = Array(a); ++r < a; )
      c[r] = s[t + r];
    r = -1;
    for (var i = Array(t + 1); ++r < t; )
      i[r] = s[r];
    return i[t] = n(c), Yn(e, this, i);
  };
}
function It(e, t) {
  return Tt(qt(e, t, ie), e + "");
}
function is(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var cs = Object.prototype, us = cs.hasOwnProperty;
function ds(e) {
  if (!oe(e))
    return is(e);
  var t = xt(e), n = [];
  for (var s in e)
    s == "constructor" && (t || !us.call(e, s)) || n.push(s);
  return n;
}
function Fe(e) {
  return Ot(e) ? hn(e, !0) : ds(e);
}
function fs(e) {
  var t = e == null ? 0 : e.length;
  return t ? vn(e, 1) : [];
}
function ps(e) {
  return Tt(qt(e, void 0, fs), e + "");
}
var _s = yn(Object.getPrototypeOf, Object);
const Ne = _s;
var gs = "[object Object]", hs = Function.prototype, vs = Object.prototype, Et = hs.toString, ys = vs.hasOwnProperty, bs = Et.call(Object);
function $s(e) {
  if (!we(e) || bn(e) != gs)
    return !1;
  var t = Ne(e);
  if (t === null)
    return !0;
  var n = ys.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Et.call(n) == bs;
}
function ms(e, t, n) {
  var s = -1, r = e.length;
  t < 0 && (t = -t > r ? 0 : r + t), n = n > r ? r : n, n < 0 && (n += r), r = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var a = Array(r); ++s < r; )
    a[s] = e[s + t];
  return a;
}
function ks(e, t) {
  return e && ce(t, Le(t), e);
}
function ws(e, t) {
  return e && ce(t, Fe(t), e);
}
var Vt = typeof exports == "object" && exports && !exports.nodeType && exports, rt = Vt && typeof module == "object" && module && !module.nodeType && module, zs = rt && rt.exports === Vt, at = zs ? $n.Buffer : void 0, ot = at ? at.allocUnsafe : void 0;
function xs(e, t) {
  if (t)
    return e.slice();
  var n = e.length, s = ot ? ot(n) : new e.constructor(n);
  return e.copy(s), s;
}
function Os(e, t) {
  return ce(e, Mt(e), t);
}
var Ms = Object.getOwnPropertySymbols, Ss = Ms ? function(e) {
  for (var t = []; e; )
    kn(t, Mt(e)), e = Ne(e);
  return t;
} : mn;
const Lt = Ss;
function js(e, t) {
  return ce(e, Lt(e), t);
}
function Rt(e) {
  return wn(e, Fe, Lt);
}
var As = Object.prototype, Bs = As.hasOwnProperty;
function Cs(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && Bs.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
function Ue(e) {
  var t = new e.constructor(e.byteLength);
  return new Ke(t).set(new Ke(e)), t;
}
function Ts(e, t) {
  var n = t ? Ue(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var Ps = /\w*$/;
function qs(e) {
  var t = new e.constructor(e.source, Ps.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var it = et ? et.prototype : void 0, ct = it ? it.valueOf : void 0;
function Is(e) {
  return ct ? Object(ct.call(e)) : {};
}
function Es(e, t) {
  var n = t ? Ue(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var Vs = "[object Boolean]", Ls = "[object Date]", Rs = "[object Map]", Ds = "[object Number]", Fs = "[object RegExp]", Ns = "[object Set]", Us = "[object String]", Gs = "[object Symbol]", Ws = "[object ArrayBuffer]", Hs = "[object DataView]", Ys = "[object Float32Array]", Zs = "[object Float64Array]", Xs = "[object Int8Array]", Js = "[object Int16Array]", Qs = "[object Int32Array]", Ks = "[object Uint8Array]", el = "[object Uint8ClampedArray]", tl = "[object Uint16Array]", nl = "[object Uint32Array]";
function sl(e, t, n) {
  var s = e.constructor;
  switch (t) {
    case Ws:
      return Ue(e);
    case Vs:
    case Ls:
      return new s(+e);
    case Hs:
      return Ts(e, n);
    case Ys:
    case Zs:
    case Xs:
    case Js:
    case Qs:
    case Ks:
    case el:
    case tl:
    case nl:
      return Es(e, n);
    case Rs:
      return new s();
    case Ds:
    case Us:
      return new s(e);
    case Fs:
      return qs(e);
    case Ns:
      return new s();
    case Gs:
      return Is(e);
  }
}
function ll(e) {
  return typeof e.constructor == "function" && !xt(e) ? Hn(Ne(e)) : {};
}
var rl = "[object Map]";
function al(e) {
  return we(e) && ze(e) == rl;
}
var ut = _e && _e.isMap, ol = ut ? xe(ut) : al;
const il = ol;
var cl = "[object Set]";
function ul(e) {
  return we(e) && ze(e) == cl;
}
var dt = _e && _e.isSet, dl = dt ? xe(dt) : ul;
const fl = dl;
var pl = 1, _l = 2, gl = 4, Dt = "[object Arguments]", hl = "[object Array]", vl = "[object Boolean]", yl = "[object Date]", bl = "[object Error]", Ft = "[object Function]", $l = "[object GeneratorFunction]", ml = "[object Map]", kl = "[object Number]", Nt = "[object Object]", wl = "[object RegExp]", zl = "[object Set]", xl = "[object String]", Ol = "[object Symbol]", Ml = "[object WeakMap]", Sl = "[object ArrayBuffer]", jl = "[object DataView]", Al = "[object Float32Array]", Bl = "[object Float64Array]", Cl = "[object Int8Array]", Tl = "[object Int16Array]", Pl = "[object Int32Array]", ql = "[object Uint8Array]", Il = "[object Uint8ClampedArray]", El = "[object Uint16Array]", Vl = "[object Uint32Array]", j = {};
j[Dt] = j[hl] = j[Sl] = j[jl] = j[vl] = j[yl] = j[Al] = j[Bl] = j[Cl] = j[Tl] = j[Pl] = j[ml] = j[kl] = j[Nt] = j[wl] = j[zl] = j[xl] = j[Ol] = j[ql] = j[Il] = j[El] = j[Vl] = !0;
j[bl] = j[Ft] = j[Ml] = !1;
function de(e, t, n, s, r, a) {
  var c, i = t & pl, u = t & _l, o = t & gl;
  if (n && (c = r ? n(e, s, r, a) : n(e)), c !== void 0)
    return c;
  if (!oe(e))
    return e;
  var f = ee(e);
  if (f) {
    if (c = Cs(e), !i)
      return Zn(e, c);
  } else {
    var _ = ze(e), y = _ == Ft || _ == $l;
    if (zn(e))
      return xs(e, i);
    if (_ == Nt || _ == Dt || y && !r) {
      if (c = u || y ? {} : ll(e), !i)
        return u ? js(e, ws(c, e)) : Os(e, ks(c, e));
    } else {
      if (!j[_])
        return r ? e : {};
      c = sl(e, _, i);
    }
  }
  a || (a = new xn());
  var v = a.get(e);
  if (v)
    return v;
  a.set(e, c), fl(e) ? e.forEach(function(m) {
    c.add(de(m, t, n, m, e, a));
  }) : il(e) && e.forEach(function(m, k) {
    c.set(k, de(m, t, n, k, e, a));
  });
  var d = o ? u ? Rt : On : u ? Fe : Le, $ = f ? void 0 : d(e);
  return rs($ || e, function(m, k) {
    $ && (k = m, m = e[k]), Pt(c, k, de(m, t, n, k, e, a));
  }), c;
}
function Ll(e, t, n, s) {
  for (var r = -1, a = e == null ? 0 : e.length; ++r < a; ) {
    var c = e[r];
    t(s, c, n(c), e);
  }
  return s;
}
function Rl(e, t, n, s) {
  return St(e, function(r, a, c) {
    t(s, r, n(r), c);
  }), s;
}
function Dl(e, t) {
  return function(n, s) {
    var r = ee(n) ? Ll : Rl, a = t ? t() : {};
    return r(n, e, Re(s), a);
  };
}
function Fl(e) {
  return we(e) && Ot(e);
}
var Nl = "Expected a function";
function Ul(e, t, n) {
  if (typeof e != "function")
    throw new TypeError(Nl);
  return setTimeout(function() {
    e.apply(void 0, n);
  }, t);
}
var Gl = It(function(e, t, n) {
  return Ul(e, Gn(t) || 0, n);
});
const Ge = Gl;
function Wl(e, t) {
  return Y(t, function(n) {
    return [n, e[n]];
  });
}
function Hl(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(s) {
    n[++t] = [s, s];
  }), n;
}
var Yl = "[object Map]", Zl = "[object Set]";
function Xl(e) {
  return function(t) {
    var n = ze(t);
    return n == Yl ? Mn(t) : n == Zl ? Hl(t) : Wl(t, e(t));
  };
}
var Jl = Xl(Le);
const Q = Jl;
function Ql(e, t) {
  var n = [];
  return St(e, function(s, r, a) {
    t(s, r, a) && n.push(s);
  }), n;
}
function Kl(e, t) {
  var n = ee(e) ? Sn : Ql;
  return n(e, Re(t));
}
function er(e) {
  return e && e.length ? e[0] : void 0;
}
var tr = Object.prototype, nr = tr.hasOwnProperty, sr = Dl(function(e, t, n) {
  nr.call(e, n) ? e[n].push(t) : De(e, n, [t]);
});
const We = sr;
function lr(e, t) {
  return e > t;
}
var rr = Math.min;
function ar(e, t, n) {
  for (var s = n ? An : Bn, r = e[0].length, a = e.length, c = a, i = Array(a), u = 1 / 0, o = []; c--; ) {
    var f = e[c];
    c && t && (f = Y(f, xe(t))), u = rr(f.length, u), i[c] = !n && (t || r >= 120 && f.length >= 120) ? new jn(c && f) : void 0;
  }
  f = e[0];
  var _ = -1, y = i[0];
  e:
    for (; ++_ < r && o.length < u; ) {
      var v = f[_], d = t ? t(v) : v;
      if (v = n || v !== 0 ? v : 0, !(y ? tt(y, d) : s(o, d, n))) {
        for (c = a; --c; ) {
          var $ = i[c];
          if (!($ ? tt($, d) : s(e[c], d, n)))
            continue e;
        }
        y && y.push(d), o.push(v);
      }
    }
  return o;
}
function or(e) {
  return Fl(e) ? e : [];
}
var ir = It(function(e) {
  var t = jt(e), n = Y(e, or);
  return t = typeof t == "function" ? t : void 0, t && n.pop(), n.length && n[0] === e[0] ? ar(n, void 0, t) : [];
});
const cr = ir;
function ur(e, t) {
  return t.length < 2 ? e : At(e, ms(t, 0, -1));
}
function dr(e, t) {
  return Cn(e, t);
}
function fr(e, t) {
  return e === t || Tn(e, t, Pn(t));
}
function pr(e, t) {
  return e < t;
}
function Ut(e, t, n) {
  for (var s = -1, r = e.length; ++s < r; ) {
    var a = e[s], c = t(a);
    if (c != null && (i === void 0 ? c === c && !pe(c) : n(c, i)))
      var i = c, u = a;
  }
  return u;
}
function _r(e) {
  return e && e.length ? Ut(e, ie, lr) : void 0;
}
function gr(e) {
  return e && e.length ? Ut(e, ie, pr) : void 0;
}
function hr(e, t) {
  return t = Bt(t, e), e = ur(e, t), e == null || delete e[qn(jt(t))];
}
function vr(e) {
  return $s(e) ? void 0 : e;
}
var yr = 1, br = 2, $r = 4, mr = ps(function(e, t) {
  var n = {};
  if (e == null)
    return n;
  var s = !1;
  t = Y(t, function(a) {
    return a = Bt(a, e), s || (s = a.length > 1), a;
  }), ce(e, Rt(e), n), s && (n = de(n, yr | br | $r, vr));
  for (var r = t.length; r--; )
    hr(n, t[r]);
  return n;
});
const Gt = mr;
function kr(e, t) {
  var n = e.length;
  for (e.sort(t); n--; )
    e[n] = e[n].value;
  return e;
}
function wr(e, t) {
  if (e !== t) {
    var n = e !== void 0, s = e === null, r = e === e, a = pe(e), c = t !== void 0, i = t === null, u = t === t, o = pe(t);
    if (!i && !o && !a && e > t || a && c && u && !i && !o || s && c && u || !n && u || !r)
      return 1;
    if (!s && !a && !o && e < t || o && n && r && !s && !a || i && n && r || !c && r || !u)
      return -1;
  }
  return 0;
}
function zr(e, t, n) {
  for (var s = -1, r = e.criteria, a = t.criteria, c = r.length, i = n.length; ++s < c; ) {
    var u = wr(r[s], a[s]);
    if (u) {
      if (s >= i)
        return u;
      var o = n[s];
      return u * (o == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
function xr(e, t, n) {
  t.length ? t = Y(t, function(a) {
    return ee(a) ? function(c) {
      return At(c, a.length === 1 ? a[0] : a);
    } : a;
  }) : t = [ie];
  var s = -1;
  t = Y(t, xe(Re));
  var r = In(e, function(a, c, i) {
    var u = Y(t, function(o) {
      return o(a);
    });
    return { criteria: u, index: ++s, value: a };
  });
  return kr(r, function(a, c) {
    return zr(a, c, n);
  });
}
function Or(e, t, n, s) {
  return e == null ? [] : (ee(t) || (t = t == null ? [] : [t]), n = s ? void 0 : n, ee(n) || (n = n == null ? [] : [n]), xr(e, t, n));
}
var Mr = Object.defineProperty, Sr = Object.defineProperties, jr = Object.getOwnPropertyDescriptors, ft = Object.getOwnPropertySymbols, Ar = Object.prototype.hasOwnProperty, Br = Object.prototype.propertyIsEnumerable, pt = (e, t, n) => t in e ? Mr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Cr = (e, t) => {
  for (var n in t || (t = {}))
    Ar.call(t, n) && pt(e, n, t[n]);
  if (ft)
    for (var n of ft(t))
      Br.call(t, n) && pt(e, n, t[n]);
  return e;
}, Tr = (e, t) => Sr(e, jr(t));
function P(e, t) {
  var n;
  const s = nn();
  return $t(() => {
    s.value = e();
  }, Tr(Cr({}, t), {
    flush: (n = t == null ? void 0 : t.flush) != null ? n : "sync"
  })), mt(s);
}
function Wt(e) {
  return kt() ? (wt(e), !0) : !1;
}
function le(e) {
  return typeof e == "function" ? e() : l(e);
}
const Pr = typeof window < "u";
function Z(e) {
  var t;
  const n = le(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Me = Pr ? window : void 0;
function qr() {
  const e = A(!1);
  return sn() && H(() => {
    e.value = !0;
  }), e;
}
function Ht(e) {
  const t = qr();
  return D(() => (t.value, !!e()));
}
var _t = Object.getOwnPropertySymbols, Ir = Object.prototype.hasOwnProperty, Er = Object.prototype.propertyIsEnumerable, Vr = (e, t) => {
  var n = {};
  for (var s in e)
    Ir.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && _t)
    for (var s of _t(e))
      t.indexOf(s) < 0 && Er.call(e, s) && (n[s] = e[s]);
  return n;
};
function Lr(e, t, n = {}) {
  const s = n, { window: r = Me } = s, a = Vr(s, ["window"]);
  let c;
  const i = Ht(() => r && "MutationObserver" in r), u = () => {
    c && (c.disconnect(), c = void 0);
  }, o = W(
    () => Z(e),
    (_) => {
      u(), i.value && r && _ && (c = new MutationObserver(t), c.observe(_, a));
    },
    { immediate: !0 }
  ), f = () => {
    u(), o();
  };
  return Wt(f), {
    isSupported: i,
    stop: f
  };
}
function He(e, t, n = {}) {
  const { window: s = Me, initialValue: r = "", observe: a = !1 } = n, c = A(r), i = D(() => {
    var o;
    return Z(t) || ((o = s == null ? void 0 : s.document) == null ? void 0 : o.documentElement);
  });
  function u() {
    var o;
    const f = le(e), _ = le(i);
    if (_ && s) {
      const y = (o = s.getComputedStyle(_).getPropertyValue(f)) == null ? void 0 : o.trim();
      c.value = y || r;
    }
  }
  return a && Lr(i, u, {
    attributes: !0,
    window: s
  }), W(
    [i, () => le(e)],
    u,
    { immediate: !0 }
  ), W(
    c,
    (o) => {
      var f;
      (f = i.value) != null && f.style && i.value.style.setProperty(le(e), o);
    }
  ), c;
}
var gt = Object.getOwnPropertySymbols, Rr = Object.prototype.hasOwnProperty, Dr = Object.prototype.propertyIsEnumerable, Fr = (e, t) => {
  var n = {};
  for (var s in e)
    Rr.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && gt)
    for (var s of gt(e))
      t.indexOf(s) < 0 && Dr.call(e, s) && (n[s] = e[s]);
  return n;
};
function Se(e, t, n = {}) {
  const s = n, { window: r = Me } = s, a = Fr(s, ["window"]);
  let c;
  const i = Ht(() => r && "ResizeObserver" in r), u = () => {
    c && (c.disconnect(), c = void 0);
  }, o = D(
    () => Array.isArray(e) ? e.map((y) => Z(y)) : [Z(e)]
  ), f = W(
    o,
    (y) => {
      if (u(), i.value && r) {
        c = new ResizeObserver(t);
        for (const v of y)
          v && c.observe(v, a);
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
function je(e, t = { width: 0, height: 0 }, n = {}) {
  const { window: s = Me, box: r = "content-box" } = n, a = D(() => {
    var u, o;
    return (o = (u = Z(e)) == null ? void 0 : u.namespaceURI) == null ? void 0 : o.includes("svg");
  }), c = A(t.width), i = A(t.height);
  return Se(
    e,
    ([u]) => {
      const o = r === "border-box" ? u.borderBoxSize : r === "content-box" ? u.contentBoxSize : u.devicePixelContentBoxSize;
      if (s && a.value) {
        const f = Z(e);
        if (f) {
          const _ = s.getComputedStyle(f);
          c.value = parseFloat(_.width), i.value = parseFloat(_.height);
        }
      } else if (o) {
        const f = Array.isArray(o) ? o : [o];
        c.value = f.reduce((_, { inlineSize: y }) => _ + y, 0), i.value = f.reduce((_, { blockSize: y }) => _ + y, 0);
      } else
        c.value = u.contentRect.width, i.value = u.contentRect.height;
    },
    n
  ), W(
    () => Z(e),
    (u) => {
      c.value = u ? t.width : 0, i.value = u ? t.height : 0;
    }
  ), {
    width: c,
    height: i
  };
}
const Ye = /* @__PURE__ */ E({
  __name: "BaseLink",
  props: {
    link: {},
    external: { type: Boolean, default: void 0 }
  },
  setup(e) {
    const t = e, n = P(
      () => t.external ?? /^(https?:\/\/)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&//=]*)$/.test(t.link || "")
    );
    return (s, r) => (g(), R(ln(t.link ? l(n) ? "a" : "RouterLink" : "div"), rn(an(
      t.link ? {
        [l(n) ? "href" : "to"]: t.link,
        ...l(n) ? {
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
}), Nr = /* @__PURE__ */ E({
  __name: "BaseList",
  props: {
    items: {},
    groupBy: {}
  },
  setup(e) {
    const t = e, n = P(
      () => ge(
        Q(We(t.items, t.groupBy ?? "")).map(([s, r]) => [
          s === "undefined" ? "" : s,
          r
        ])
      )
    );
    return (s, r) => (g(), b(x, null, [
      !t.items || t.items.length === 0 ? G(s.$slots, "placeholder", { key: 0 }) : O("", !0),
      (g(!0), b(x, null, B(l(n), (a, c) => (g(), b(x, {
        key: `list-group-${c}`
      }, [
        c ? G(s.$slots, "group", {
          key: 0,
          group: c,
          items: a
        }) : O("", !0),
        (g(!0), b(x, null, B(a, (i, u) => G(s.$slots, "default", {
          key: `list-item-${u}`,
          item: i,
          index: u
        })), 128))
      ], 64))), 128))
    ], 64));
  }
}), Ur = ["width", "height"], Gr = /* @__PURE__ */ E({
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
      h("defs", null, [
        G(n.$slots, "defs", {}, void 0, !0)
      ]),
      G(n.$slots, "path", {}, void 0, !0)
    ], 10, Ur));
  }
}), Wr = {
  "poly-wrapper": "_poly-wrapper_14erz_1"
}, L = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, Hr = {
  $style: Wr
}, Ae = /* @__PURE__ */ L(Gr, [["__cssModules", Hr], ["__scopeId", "data-v-ac9d4bad"]]), Yr = /* @__PURE__ */ E({
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
    return zt((n) => ({
      c6544528: `"${t.delimiter}"`
    })), (n, s) => (g(), R(Ye, {
      link: t.link,
      class: p([n.$style["badge-container"], n.$style[t.variant], n.$style[`color-${t.color}`]])
    }, {
      default: q(() => [
        t.label ? (g(), b("label", {
          key: 0,
          class: p(n.$style["badge-label"])
        }, [
          t.delimiter && t.variant === "capsule" ? (g(!0), b(x, { key: 0 }, B(t.label.split(t.delimiter), (r, a) => (g(), b("span", { key: a }, M(r), 1))), 128)) : (g(), b(x, { key: 1 }, [
            on(M(t.label), 1)
          ], 64))
        ], 2)) : O("", !0),
        t.content ? (g(), b("p", {
          key: 1,
          class: p(n.$style["badge-content"])
        }, M(t.content), 3)) : O("", !0)
      ]),
      _: 1
    }, 8, ["link", "class"]));
  }
}), Zr = "_tab_1nyqw_16", Xr = "_capsule_1nyqw_121", Jr = {
  "badge-container": "_badge-container_1nyqw_1",
  "color-default": "_color-default_1nyqw_8",
  tab: Zr,
  "color-cyan": "_color-cyan_1nyqw_19",
  "color-blue": "_color-blue_1nyqw_36",
  "color-green": "_color-green_1nyqw_53",
  "color-orange": "_color-orange_1nyqw_70",
  "color-red": "_color-red_1nyqw_87",
  "color-purple": "_color-purple_1nyqw_104",
  capsule: Xr,
  "badge-label": "_badge-label_1nyqw_128",
  "badge-content": "_badge-content_1nyqw_128"
}, Qr = {
  $style: Jr
}, cu = /* @__PURE__ */ L(Yr, [["__cssModules", Qr], ["__scopeId", "data-v-fd756b25"]]), Kr = /* @__PURE__ */ E({
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
    const n = e, { triggered: s, onTrigger: r } = Oe((a) => {
      n.disabled ? (a.preventDefault(), a.stopPropagation()) : t("click", a);
    });
    return (a, c) => (g(), R(Ye, Ve({
      link: n.link,
      class: [
        a.$style["button-container"],
        a.$style.behavior,
        a.$style[n.variant],
        a.$style[n.level],
        a.$style[n.size],
        n.disabled ? [a.$style.disabled] : [a.$style.clickable],
        {
          [a.$style.clicked]: n.clicked || l(s)()
        }
      ],
      "aria-disabled": n.disabled,
      "aria-label": n.label,
      onClick: l(r)
    }, n.disabled ? { disabled: "", ...a.$attrs } : a.$attrs, {
      role: "button",
      tabindex: "0"
    }), {
      default: q(() => [
        n.label ? (g(), b("span", {
          key: 0,
          class: p([a.$style["button-content"]])
        }, M(n.label), 3)) : O("", !0),
        n.icon ? (g(), b("span", {
          key: 1,
          class: p([a.$style["button-icon"]])
        }, [
          I(l(ne), {
            icon: n.icon
          }, null, 8, ["icon"])
        ], 2)) : O("", !0)
      ]),
      _: 1
    }, 16, ["link", "class", "aria-disabled", "aria-label", "onClick"]));
  }
}), ea = "_behavior_rnzkq_1", ta = "_clickable_rnzkq_1", na = "_disabled_rnzkq_4", sa = "_draggable_rnzkq_7", la = "_loading_rnzkq_10", ra = "_rounded_rnzkq_14", aa = "_secondary_rnzkq_14", oa = "_rect_rnzkq_15", ia = "_square_rnzkq_16", ca = "_circle_rnzkq_18", ua = "_clicked_rnzkq_58", da = "_small_rnzkq_309", fa = "_large_rnzkq_313", pa = "_text_rnzkq_17", _a = {
  behavior: ea,
  clickable: ta,
  disabled: na,
  draggable: sa,
  loading: la,
  "button-container": "_button-container_rnzkq_14",
  rounded: ra,
  secondary: aa,
  rect: oa,
  square: ia,
  "text-square": "_text-square_rnzkq_17",
  circle: ca,
  "extendable-rect": "_extendable-rect_rnzkq_26",
  clicked: ua,
  "button-icon": "_button-icon_rnzkq_226",
  "button-content": "_button-content_rnzkq_256",
  small: da,
  large: fa,
  text: pa
}, ga = {
  $style: _a
}, ye = /* @__PURE__ */ L(Kr, [["__cssModules", ga], ["__scopeId", "data-v-c1af530e"]]), ha = /* @__PURE__ */ E({
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
    zt((r) => ({
      "1dbc842c": t.radius
    }));
    const { triggered: n, onTrigger: s } = Oe((r) => {
      t.clickable || r.preventDefault();
    });
    return (r, a) => (g(), R(Ye, {
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
      default: q(() => [
        G(r.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["link", "class", "onClick"]));
  }
}), va = "_behavior_rvqmg_1", ya = "_clickable_rvqmg_1", ba = "_disabled_rvqmg_4", $a = "_draggable_rvqmg_7", ma = "_loading_rvqmg_10", ka = "_metallic_rvqmg_14", wa = "_flat_rvqmg_14", za = "_clicked_rvqmg_22", xa = "_dash_rvqmg_92", Oa = {
  behavior: va,
  clickable: ya,
  disabled: ba,
  draggable: $a,
  loading: ma,
  "card-container": "_card-container_rvqmg_14",
  "color-default": "_color-default_rvqmg_14",
  metallic: ka,
  "has-stroke": "_has-stroke_rvqmg_14",
  flat: wa,
  "color-cyan": "_color-cyan_rvqmg_14",
  "color-blue": "_color-blue_rvqmg_14",
  "color-green": "_color-green_rvqmg_14",
  "color-orange": "_color-orange_rvqmg_14",
  "color-red": "_color-red_rvqmg_14",
  clicked: za,
  dash: xa,
  "stroke-bold": "_stroke-bold_rvqmg_399",
  "stroke-normal": "_stroke-normal_rvqmg_402",
  "stroke-thin": "_stroke-thin_rvqmg_405",
  "purpose-box": "_purpose-box_rvqmg_408",
  "purpose-container": "_purpose-container_rvqmg_412"
}, Ma = {
  $style: Oa
}, X = /* @__PURE__ */ L(ha, [["__cssModules", Ma], ["__scopeId", "data-v-d941fd1e"]]), Be = ({
  type: e,
  axises: t,
  data: n
}) => {
  const s = cn({
    datasets: [],
    axises: {}
  }), r = {
    datasets: P(() => s.datasets),
    axises: P(() => s.axises)
  }, a = (u) => {
    var o;
    return !Array.isArray(u) || u.length === 0 ? [] : Array.isArray(u) && ((o = u[0]) != null && o.label) ? u : [
      {
        label: "Data",
        series: u
      }
    ];
  }, c = (u, o) => o.map((f) => ({
    data: f,
    ...ge(
      Q(u).filter(([, _]) => !ae(_)).map(([_, y]) => {
        const v = y.selector ? U(f, y.selector) : null, d = y.accessor ? he(f, y.accessor) : v;
        return [
          _,
          {
            normalized: Number(
              y.type === "number" ? parseFloat(String(v)) : y.type === "date" ? new Date(Number(v)) : v
            ),
            value: d
          }
        ];
      })
    )
  })), i = (u, o, f) => {
    const _ = a(f).map((d) => ({
      ...d,
      label: he(d, d.label ?? ""),
      series: c(o, d.series)
    })), y = _.flatMap((d) => d.series), v = ge(
      Q(o).filter(([, d]) => !ae(d)).map(([d, $]) => {
        const m = Ct(te(y, `${d}.${$.type === "string" ? "value" : "normalized"}`)), k = Number($.min === "auto" ? gr(m) : $.min ?? 0), V = Number(
          $.max === "auto" ? _r(m) ?? 0 : $.max ?? m.length - (/radar|doughnut/.test(u ?? "") ? 0 : 1)
        );
        return [
          d,
          {
            ...$,
            min: k,
            max: V,
            metrics: $.type === "string" ? m.map((C, N) => ({
              normalized: N / (V - k),
              value: C
            })) : Array(w.clamp(w.ceil((V - k) / ($.step ?? 1)) + 1, 0, 1 / 0)).fill(0).map((C, N) => ({
              normalized: N / w.ceil((V - k) / ($.step ?? 1)),
              value: k + ($.step ?? 1) * N
            }))
          }
        ];
      })
    );
    return v && Q(v).forEach(([d, $]) => {
      $.type === "string" ? _.forEach((m) => {
        m.series.forEach((k) => {
          k[d].normalized = te($.metrics, "value").indexOf(k[d].value) / (($.metrics ?? []).length - (/radar|doughnut/.test(u ?? "") ? 0 : 1));
        });
      }) : _.forEach((m) => {
        m.series.forEach((k) => {
          k[d].normalized = (Number(k[d].normalized ?? 0) - Number($.min)) / (Number($.max) - Number($.min));
        });
      });
    }), {
      datasets: _,
      axises: v
    };
  };
  return $t(() => {
    const u = i(l(e), l(t), l(n));
    s.datasets = u.datasets, s.axises = u.axises;
  }), {
    ...r
  };
}, Sa = (e) => (me("data-v-fefd0601"), e = e(), ke(), e), ja = ["cx", "cy", "r", "stroke-dashoffset", "stroke-dasharray"], Aa = ["x", "y"], Ba = /* @__PURE__ */ Sa(() => /* @__PURE__ */ h("hr", null, null, -1)), Ca = { id: "chart-content-clip" }, Ta = ["cx", "cy", "r"], Pa = { "clip-path": "url(#chart-content-clip)" }, qa = ["height", "width", "x", "y"], Ia = /* @__PURE__ */ E({
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
    const t = e, n = A(), { width: s, height: r } = je(n), { axises: a, datasets: c } = Be({
      type: "doughnut",
      data: t.datasets,
      axises: t.axises
    }), i = P(
      () => w.clamp(
        w.min(s.value - t.options.offset.x, r.value - t.options.offset.y) / 2,
        0,
        1 / 0
      )
    ), u = P(() => t.options.round ? 30 : 15), o = P(() => i.value * 2 * w.PI), f = P(() => ({
      x: s.value / 2,
      y: r.value / 2
    })), _ = P(
      () => c.value.map((v) => v.series.reduce((d, $) => d + $.y.normalized, 0))
    ), y = P(
      () => c.value.map((v, d) => ({
        ...v,
        series: v.series.map(($) => ({
          ...$,
          y: {
            ...$.y,
            normalized: w.clamp(
              $.y.normalized / _.value[d] - u.value / o.value,
              0,
              1
            )
          }
        })).filter(($) => $.y.normalized > u.value / o.value / 2).map(($, m, k) => ({
          ...$,
          y: {
            ...$.y,
            normalized: $.y.normalized / k.reduce((V, C) => V + C.y.normalized, 0)
          }
        })).map(($, m, k) => ({
          ...$,
          y: {
            ...$.y,
            normalized: w.clamp(
              $.y.normalized / k.reduce((V, C) => V + C.y.normalized, 0) - u.value / o.value,
              0,
              1
            )
          }
        })).map(($, m, k) => ({
          ...$,
          y: {
            ...$.y,
            offset: k.slice(0, m).reduce((V, C) => V + C.y.normalized, 0)
          }
        })).map(($, m) => ({
          ...$,
          x: {
            ...$.x,
            label: w.cos(
              w.rad(
                ($.y.offset + $.y.normalized / 2 + u.value / o.value * m) * 360 - 90
              )
            )
          },
          y: {
            ...$.y,
            label: w.sin(
              w.rad(
                ($.y.offset + $.y.normalized / 2 + u.value / o.value * m) * 360 - 90
              )
            )
          }
        }))
      }))
    );
    return (v, d) => (g(), b("div", {
      ref_key: "wrapperRef$",
      ref: n,
      class: p(v.$style["chart-container"])
    }, [
      I(Ae, {
        height: l(r),
        width: l(s)
      }, {
        path: q(() => [
          h("g", {
            class: p([v.$style["chart-group-plots"]])
          }, [
            (g(!0), b(x, null, B(l(y), ($) => (g(), b(x, {
              key: $.label
            }, [
              (g(!0), b(x, null, B($.series, (m, k) => (g(), b("g", {
                key: `plot-${k}`,
                class: p(v.$style["chart-area"])
              }, [
                h("circle", {
                  cx: l(f).x,
                  cy: l(f).y,
                  r: l(i),
                  "stroke-dashoffset": m.y.offset * l(o) * -1 - l(u) * k + 0.25 * l(o),
                  "stroke-dasharray": `${m.y.normalized * l(o)} ${(1 - m.y.normalized) * l(o)}`,
                  class: p([
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
                }, null, 10, ja),
                (g(), b("foreignObject", {
                  x: l(f).x + l(i) * m.x.label - 260 * +(m.x.label < 0),
                  y: l(f).y + l(i) * m.y.label - 240 * +(m.y.label < 0),
                  height: "240",
                  width: "260",
                  class: p([v.$style["chart-area"], v.$style["legend-container"]])
                }, [
                  I(X, {
                    class: p([v.$style["chart-area"], v.$style["legend-wrapper"]]),
                    radius: "var(--agh-ref-border-radius-500)"
                  }, {
                    default: q(() => [
                      t.options.title ? (g(), b(x, { key: 0 }, [
                        h("h1", {
                          class: p([v.$style["chart-area"], v.$style["legend-title"], v.$style.doughnut])
                        }, [
                          h("span", null, M(m.x.value), 1)
                        ], 2),
                        Ba
                      ], 64)) : O("", !0),
                      (g(!0), b(x, null, B(l(a), (V, C) => (g(), b(x, { key: C }, [
                        !/(x)/.test(C) && V && m[C] ? (g(), b("div", {
                          key: 0,
                          class: p([
                            v.$style["chart-area"],
                            v.$style["legend-group"],
                            v.$style.doughnut
                          ])
                        }, [
                          h("label", {
                            class: p([v.$style["chart-area"], v.$style["legend-label"]])
                          }, M(V.label), 3),
                          h("p", {
                            class: p([v.$style["chart-area"], v.$style["legend-value"]])
                          }, M(m[C].value), 3)
                        ], 2)) : O("", !0)
                      ], 64))), 128))
                    ]),
                    _: 2
                  }, 1032, ["class", "radius"])
                ], 10, Aa))
              ], 2))), 128))
            ], 64))), 128))
          ], 2),
          h("clipPath", Ca, [
            h("circle", {
              cx: l(f).x,
              cy: l(f).y,
              r: l(i) - 10
            }, null, 8, Ta)
          ]),
          h("g", Pa, [
            (g(), b("foreignObject", {
              class: p(v.$style["chart-content-wrapper"]),
              height: l(i) * 2,
              width: l(i) * 2,
              x: l(f).x - l(i),
              y: l(f).y - l(i)
            }, [
              G(v.$slots, "default", {}, void 0, !0)
            ], 10, qa))
          ])
        ]),
        _: 3
      }, 8, ["height", "width"])
    ], 2));
  }
}), Ea = "_behavior_pzvhi_1", Va = "_clickable_pzvhi_1", La = "_disabled_pzvhi_4", Ra = "_draggable_pzvhi_7", Da = "_loading_pzvhi_10", Fa = "_path_pzvhi_24", Na = "_radar_pzvhi_29", Ua = "_label_pzvhi_32", Ga = "_plot_pzvhi_85", Wa = "_point_pzvhi_85", Ha = "_doughnut_pzvhi_96", Ya = "_bg_pzvhi_102", Za = "_round_pzvhi_106", Xa = "_line_pzvhi_119", Ja = {
  behavior: Ea,
  clickable: Va,
  disabled: La,
  draggable: Ra,
  loading: Da,
  "chart-container": "_chart-container_pzvhi_14",
  "chart-axis": "_chart-axis_pzvhi_24",
  path: Fa,
  radar: Na,
  label: Ua,
  "font-align--center": "_font-align--center_pzvhi_45",
  "font-align--right": "_font-align--right_pzvhi_48",
  "font-align--left": "_font-align--left_pzvhi_51",
  "box-align--center": "_box-align--center_pzvhi_54",
  "box-align--left": "_box-align--left_pzvhi_57",
  "box-align--right": "_box-align--right_pzvhi_60",
  "chart-group-plots": "_chart-group-plots_pzvhi_67",
  "chart-area": "_chart-area_pzvhi_67",
  plot: Ga,
  point: Wa,
  doughnut: Ha,
  "legend-container": "_legend-container_pzvhi_96",
  bg: Ya,
  round: Za,
  line: Xa,
  "legend-wrapper": "_legend-wrapper_pzvhi_147",
  "legend-group": "_legend-group_pzvhi_158",
  "legend-value": "_legend-value_pzvhi_166",
  "legend-label": "_legend-label_pzvhi_169",
  "legend-title": "_legend-title_pzvhi_173"
}, Qa = {
  $style: Ja
}, uu = /* @__PURE__ */ L(Ia, [["__cssModules", Qa], ["__scopeId", "data-v-fefd0601"]]), Ka = (e) => (me("data-v-7ca4eb50"), e = e(), ke(), e), eo = ["d"], to = ["x", "y", "text-anchor"], no = ["x", "y"], so = ["d"], lo = ["cx", "cy"], ro = ["cx", "cy"], ao = ["x", "y"], oo = /* @__PURE__ */ Ka(() => /* @__PURE__ */ h("hr", null, null, -1)), io = /* @__PURE__ */ E({
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
    const t = e, n = A(), { width: s, height: r } = je(n), { axises: a, datasets: c } = Be({
      type: "line",
      data: K(t).datasets,
      axises: K(t).axises
    }), i = P(
      () => {
        var o, f, _, y, v, d;
        return (f = (o = a.value) == null ? void 0 : o.x) != null && f.metrics && ((y = (_ = a.value) == null ? void 0 : _.y) != null && y.metrics) && r.value && r.value - t.options.offset.y > 0 && s.value && s.value - t.options.offset.x > 0 ? `
  M ${t.options.offset.x} 0
  L ${t.options.offset.x} ${r.value - t.options.offset.y}
  L ${s.value} ${r.value - t.options.offset.y}
  ${(v = t.options.grid) != null && v.includes("x") ? `${a.value.x.metrics.map(
          ($) => `
              M ${$.normalized * (s.value - t.options.offset.x) + t.options.offset.x} 0
              V ${r.value - t.options.offset.y}
            `
        ).join("")}` : ""}
  ${(d = t.options.grid) != null && d.includes("y") ? `${a.value.y.metrics.map(
          ($) => `
              M ${t.options.offset.x} ${(1 - $.normalized) * (r.value - t.options.offset.y)}
              H ${s.value}
            `
        ).join(`
`)}` : ""}
` : "";
      }
    ), u = P(
      () => i.value && c ? c.value.map((o) => ({
        ...o,
        path: `
            ${o.series.map(
          (f, _) => _ === 0 ? `M ${f.x.normalized * (s.value - t.options.offset.x) + t.options.offset.x} ${(1 - f.y.normalized) * (r.value - t.options.offset.y)}` : t.options.curve === "smooth" ? _ === 1 ? `C ${o.series[_ - 1].x.normalized * (s.value - t.options.offset.x) + t.options.offset.x + s.value / o.series.length * t.options.radius} ${(1 - o.series[_ - 1].y.normalized) * (r.value - t.options.offset.y)} ${f.x.normalized * (s.value - t.options.offset.x) + t.options.offset.x - s.value / o.series.length * t.options.radius} ${(1 - f.y.normalized) * (r.value - t.options.offset.y)} ${f.x.normalized * (s.value - t.options.offset.x) + t.options.offset.x} ${(1 - f.y.normalized) * (r.value - t.options.offset.y)}` : `S ${f.x.normalized * (s.value - t.options.offset.x) + t.options.offset.x - s.value / o.series.length * t.options.radius} ${(1 - f.y.normalized) * (r.value - t.options.offset.y)} ${f.x.normalized * (s.value - t.options.offset.x) + t.options.offset.x} ${(1 - f.y.normalized) * (r.value - t.options.offset.y)}` : `L ${f.x.normalized * (s.value - t.options.offset.x) + t.options.offset.x} ${(1 - f.y.normalized) * (r.value - t.options.offset.y)}`
        ).join(`
`)}`
      })) : []
    );
    return (o, f) => (g(), b("div", {
      ref_key: "wrapperRef$",
      ref: n,
      class: p(o.$style["chart-container"])
    }, [
      I(Ae, {
        height: l(r),
        width: l(s)
      }, {
        defs: q(() => []),
        path: q(() => [
          h("g", {
            id: "chart-group-axises",
            class: p([o.$style["chart-group-axises"]])
          }, [
            h("path", {
              d: l(i),
              class: p([o.$style["chart-axis"], o.$style.line, o.$style.path])
            }, null, 10, eo)
          ], 2),
          l(a) && l(s) && l(r) ? (g(), b("g", {
            key: 0,
            class: p([o.$style["chart-group-axises-label"]])
          }, [
            l(a).x && l(a).x.metrics ? (g(!0), b(x, { key: 0 }, B(l(a).x.metrics, (_, y) => (g(), b("text", {
              key: `axis-x--${y}`,
              x: _.normalized * (l(s) - t.options.offset.x) + t.options.offset.x,
              y: l(r) - t.options.offset.y + 20,
              class: p([o.$style["chart-axis"], o.$style.label]),
              "text-anchor": y === 0 ? "start" : y === l(a).x.metrics.length - 1 ? "end" : "middle"
            }, M(_.value), 11, to))), 128)) : O("", !0),
            l(a).y && l(a).y.metrics ? (g(!0), b(x, { key: 1 }, B(l(a).y.metrics, (_, y) => (g(), b("text", {
              key: `axis-y--${y}`,
              x: t.options.offset.x - 10,
              y: (1 - _.normalized) * (l(r) - t.options.offset.y) + 5,
              class: p([o.$style["chart-axis"], o.$style.label]),
              "text-anchor": "end"
            }, M(_.value), 11, no))), 128)) : O("", !0)
          ], 2)) : O("", !0),
          h("g", {
            class: p([o.$style["chart-group-plots"]])
          }, [
            (g(!0), b(x, null, B(l(u), (_) => (g(), b("g", {
              key: _.label,
              class: p([o.$style["chart-area"], o.$style.line, o.$style.plot])
            }, [
              h("path", {
                d: _.path
              }, null, 8, so)
            ], 2))), 128)),
            (g(!0), b(x, null, B(l(c), (_) => (g(), b(x, null, [
              (g(!0), b(x, null, B(_.series, (y, v) => (g(), b("g", {
                key: `chart-plot-${_.label}-plot-${v}`,
                class: p(o.$style["chart-area"])
              }, [
                h("circle", {
                  class: p([
                    o.$style.behavior,
                    o.$style["chart-area"],
                    o.$style.point,
                    o.$style.plot,
                    o.$style.clickable
                  ]),
                  cx: y.x.normalized * (l(s) - t.options.offset.x) + t.options.offset.x,
                  cy: (1 - y.y.normalized) * (l(r) - t.options.offset.y),
                  r: "50"
                }, null, 10, lo),
                h("circle", {
                  class: p([o.$style["chart-area"], o.$style.point, o.$style.plot]),
                  cx: y.x.normalized * (l(s) - t.options.offset.x) + t.options.offset.x,
                  cy: (1 - y.y.normalized) * (l(r) - t.options.offset.y),
                  r: "5"
                }, null, 10, ro),
                (g(), b("foreignObject", {
                  x: y.x.normalized * (l(s) - t.options.offset.x) + t.options.offset.x - 140,
                  y: (1 - y.y.normalized) * (l(r) - t.options.offset.y) - (y.y.normalized >= 0.5 ? 0 : 220),
                  height: "220",
                  width: "280",
                  class: p([o.$style["chart-area"], o.$style["legend-container"]])
                }, [
                  I(X, {
                    class: p([o.$style["chart-area"], o.$style["legend-wrapper"]]),
                    radius: "var(--agh-ref-border-radius-500)"
                  }, {
                    default: q(() => [
                      t.options.title ? (g(), b(x, { key: 0 }, [
                        h("h1", {
                          class: p([o.$style["chart-area"], o.$style["legend-title"]])
                        }, M(l(he)(y.data, t.options.title)), 3),
                        oo
                      ], 64)) : O("", !0),
                      (g(!0), b(x, null, B(l(a), (d, $) => (g(), b(x, { key: $ }, [
                        d && y[$] ? (g(), b("div", {
                          key: 0,
                          class: p([o.$style["chart-area"], o.$style["legend-group"]])
                        }, [
                          h("label", {
                            class: p([o.$style["chart-area"], o.$style["legend-label"]])
                          }, M(d.label), 3),
                          h("p", {
                            class: p([o.$style["chart-area"], o.$style["legend-value"]])
                          }, M(y[$].value), 3)
                        ], 2)) : O("", !0)
                      ], 64))), 128))
                    ]),
                    _: 2
                  }, 1032, ["class", "radius"])
                ], 10, ao))
              ], 2))), 128))
            ], 64))), 256))
          ], 2)
        ]),
        _: 1
      }, 8, ["height", "width"])
    ], 2));
  }
}), co = "_behavior_1sfnc_1", uo = "_clickable_1sfnc_1", fo = "_disabled_1sfnc_4", po = "_draggable_1sfnc_7", _o = "_loading_1sfnc_10", go = "_path_1sfnc_24", ho = "_radar_1sfnc_29", vo = "_label_1sfnc_32", yo = "_plot_1sfnc_85", bo = "_point_1sfnc_85", $o = "_doughnut_1sfnc_96", mo = "_bg_1sfnc_102", ko = "_round_1sfnc_106", wo = "_line_1sfnc_119", zo = {
  behavior: co,
  clickable: uo,
  disabled: fo,
  draggable: po,
  loading: _o,
  "chart-container": "_chart-container_1sfnc_14",
  "chart-axis": "_chart-axis_1sfnc_24",
  path: go,
  radar: ho,
  label: vo,
  "font-align--center": "_font-align--center_1sfnc_45",
  "font-align--right": "_font-align--right_1sfnc_48",
  "font-align--left": "_font-align--left_1sfnc_51",
  "box-align--center": "_box-align--center_1sfnc_54",
  "box-align--left": "_box-align--left_1sfnc_57",
  "box-align--right": "_box-align--right_1sfnc_60",
  "chart-group-plots": "_chart-group-plots_1sfnc_67",
  "chart-area": "_chart-area_1sfnc_67",
  plot: yo,
  point: bo,
  doughnut: $o,
  "legend-container": "_legend-container_1sfnc_96",
  bg: mo,
  round: ko,
  line: wo,
  "legend-wrapper": "_legend-wrapper_1sfnc_147",
  "legend-group": "_legend-group_1sfnc_158",
  "legend-value": "_legend-value_1sfnc_166",
  "legend-label": "_legend-label_1sfnc_169",
  "legend-title": "_legend-title_1sfnc_173"
}, xo = {
  $style: zo
}, du = /* @__PURE__ */ L(io, [["__cssModules", xo], ["__scopeId", "data-v-7ca4eb50"]]), Oo = /* @__PURE__ */ E({
  __name: "MatrixChart",
  props: {
    axises: {},
    datasets: {},
    options: {}
  },
  setup(e) {
    const t = e, { axises: n, datasets: s } = Be({
      type: "matrix",
      data: K(t).datasets,
      axises: K(t).axises
    }), r = P(() => n.value.y.step), a = D(
      () => s.value[0].series.map((_) => ({
        ..._,
        y: {
          ..._.y,
          normalized: w.round(_.y.normalized * r.value)
        }
      }))
    ), c = A(), i = A(), u = F(""), o = () => {
      if (c.value && c.value.firstElementChild) {
        const { firstElementChild: _, clientWidth: y } = c.value, v = y, d = _ == null ? void 0 : _.clientWidth;
        i.value = w.floor(v / d);
      }
    }, f = () => {
      c.value && (u.set(
        He("--matrix-border-width", c, {
          observe: !0
        }).value
      ), u() || Ge(f, 1));
    };
    return Se(c, o, { window }), H(() => {
      f(), o();
    }), (_, y) => (g(), b("div", {
      ref_key: "containerRef$",
      ref: c,
      class: p(_.$style["chart-container"])
    }, [
      (g(!0), b(x, null, B(a.value, (v, d) => (g(), b("div", {
        class: p([
          _.$style["matrix-container"],
          i.value && d % i.value !== 0 && _.$style["matrix-container-border"]
        ]),
        key: d
      }, [
        h("label", {
          class: p(_.$style.label)
        }, M(v.x.value), 3),
        h("div", {
          class: p(_.$style["box-container"])
        }, [
          (g(!0), b(x, null, B(l(r), ($) => (g(), b("div", {
            class: p([
              _.$style.square,
              $ <= v.y.normalized ? _.$style["square-cyan"] : _.$style["square-grayscale"]
            ]),
            key: $
          }, null, 2))), 128))
        ], 2)
      ], 2))), 128))
    ], 2));
  }
}), Mo = "_behavior_1k1jv_1", So = "_clickable_1k1jv_1", jo = "_disabled_1k1jv_4", Ao = "_draggable_1k1jv_7", Bo = "_loading_1k1jv_10", Co = "_path_1k1jv_24", To = "_radar_1k1jv_29", Po = "_label_1k1jv_32", qo = "_plot_1k1jv_85", Io = "_point_1k1jv_85", Eo = "_doughnut_1k1jv_96", Vo = "_bg_1k1jv_102", Lo = "_round_1k1jv_106", Ro = "_line_1k1jv_119", Do = "_square_1k1jv_242", Fo = {
  behavior: Mo,
  clickable: So,
  disabled: jo,
  draggable: Ao,
  loading: Bo,
  "chart-container": "_chart-container_1k1jv_14",
  "chart-axis": "_chart-axis_1k1jv_24",
  path: Co,
  radar: To,
  label: Po,
  "font-align--center": "_font-align--center_1k1jv_45",
  "font-align--right": "_font-align--right_1k1jv_48",
  "font-align--left": "_font-align--left_1k1jv_51",
  "box-align--center": "_box-align--center_1k1jv_54",
  "box-align--left": "_box-align--left_1k1jv_57",
  "box-align--right": "_box-align--right_1k1jv_60",
  "chart-group-plots": "_chart-group-plots_1k1jv_67",
  "chart-area": "_chart-area_1k1jv_67",
  plot: qo,
  point: Io,
  doughnut: Eo,
  "legend-container": "_legend-container_1k1jv_96",
  bg: Vo,
  round: Lo,
  line: Ro,
  "legend-wrapper": "_legend-wrapper_1k1jv_147",
  "legend-group": "_legend-group_1k1jv_158",
  "legend-value": "_legend-value_1k1jv_166",
  "legend-label": "_legend-label_1k1jv_169",
  "legend-title": "_legend-title_1k1jv_173",
  "matrix-container": "_matrix-container_1k1jv_220",
  "matrix-container-border": "_matrix-container-border_1k1jv_228",
  "box-container": "_box-container_1k1jv_238",
  square: Do,
  "square-cyan": "_square-cyan_1k1jv_247",
  "square-grayscale": "_square-grayscale_1k1jv_250"
}, No = {
  $style: Fo
}, fu = /* @__PURE__ */ L(Oo, [["__cssModules", No], ["__scopeId", "data-v-69fb85cf"]]), Uo = ["id"], Go = ["stdDeviation"], Wo = /* @__PURE__ */ h("feColorMatrix", {
  in: "blur",
  mode: "matrix",
  values: "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10",
  result: "mask"
}, null, -1), Ho = /* @__PURE__ */ h("feComposite", {
  in: "SourceGraphic",
  in2: "mask",
  operator: "in"
}, null, -1), ht = /* @__PURE__ */ E({
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
      h("feGaussianBlur", {
        stdDeviation: t.radius,
        in: "SourceGraphic",
        result: "blur"
      }, null, 8, Go),
      Wo,
      Ho
    ], 8, Uo));
  }
}), Yo = (e) => (me("data-v-5b47bbf2"), e = e(), ke(), e), Zo = ["innerHTML"], Xo = { id: "chart-area-bg-mask" }, Jo = ["d"], Qo = ["d"], Ko = ["d"], ei = ["x", "y", "height", "width"], ti = ["d"], ni = ["cx", "cy"], si = ["cx", "cy"], li = ["x", "y"], ri = /* @__PURE__ */ Yo(() => /* @__PURE__ */ h("hr", null, null, -1)), ai = /* @__PURE__ */ E({
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
    const t = e, n = A(), { width: s, height: r } = je(n), { axises: a, datasets: c } = Be({
      type: "radar",
      data: K(t).datasets,
      axises: K(t).axises
    }), i = P(
      () => w.clamp(
        w.min(s.value - t.options.offset.x, r.value - t.options.offset.y) / 2,
        0,
        1 / 0
      )
    ), u = P(() => ({
      x: s.value / 2,
      y: r.value / 2
    })), o = D(
      () => {
        var d, $;
        return i.value > 0 && (($ = (d = a.value) == null ? void 0 : d.x) != null && $.metrics) ? `
      ${a.value.x.metrics.map(
          (m, k) => `${k === 0 ? "M" : "L"} ${u.value.x + i.value * w.cos(w.rad(m.normalized * 360 - 90))} ${u.value.y + i.value * w.sin(w.rad(m.normalized * 360 - 90))}`
        ).join(" ")} Z
      ` : "";
      }
    ), f = D(
      () => o.value && c.value ? c.value.map((d) => ({
        ...d,
        path: `${d.series.map(
          ($, m) => `${m === 0 ? "M" : "L"} ${u.value.x + i.value * $.y.normalized * w.cos(w.rad($.x.normalized * 360 - 90))} ${u.value.y + i.value * $.y.normalized * w.sin(w.rad($.x.normalized * 360 - 90))}`
        ).join(" ")} Z`
      })) : []
    ), _ = P(
      () => i.value > 0 && a.value.x.metrics ? `M ${u.value.x} ${u.value.y}
      ${a.value.x.metrics.map(
        (d) => `L ${u.value.x + i.value * w.cos(w.rad(d.normalized * 360 - 90))} ${u.value.y + i.value * w.sin(w.rad(d.normalized * 360 - 90))}
            M ${u.value.x} ${u.value.y}`
      ).join(`
`)}
      Z` : ""
    ), y = F(""), v = () => {
      n.value && (y.set(
        He("--chart-bg-fill-svg", n, {
          observe: !0
        }).value
      ), y() || Ge(v, 1));
    };
    return H(() => {
      v();
    }), (d, $) => (g(), b("div", {
      ref_key: "wrapperRef$",
      ref: n,
      class: p(d.$style["chart-container"])
    }, [
      I(Ae, {
        height: l(r),
        width: l(s)
      }, {
        defs: q(() => [
          I(ht, {
            id: "chart-area-bg-round",
            radius: 6
          }),
          I(ht, {
            id: "chart-area-plot-round",
            radius: 3
          }),
          h("g", {
            innerHTML: l(y)()
          }, null, 8, Zo),
          h("mask", Xo, [
            h("path", {
              d: o.value,
              class: p([
                d.$style["chart-area"],
                d.$style.radar,
                d.$style.bg,
                {
                  [d.$style.round]: t.options.round
                }
              ]),
              fill: "#fff"
            }, null, 10, Jo)
          ])
        ]),
        path: q(() => [
          h("path", {
            d: o.value,
            class: p([
              d.$style["chart-area"],
              d.$style.radar,
              d.$style.bg,
              {
                [d.$style.round]: t.options.round
              }
            ])
          }, null, 10, Qo),
          h("g", {
            id: "chart-group-axises",
            class: p([d.$style["chart-group-axises"]]),
            mask: "url(#chart-area-bg-mask)"
          }, [
            h("path", {
              d: l(_),
              class: p([d.$style["chart-axis"], d.$style.radar, d.$style.path])
            }, null, 10, Ko)
          ], 2),
          l(a) ? (g(), b("g", {
            key: 0,
            class: p([d.$style["chart-group-axises-label"]])
          }, [
            (g(!0), b(x, null, B(l(a).x.metrics, (m) => (g(), b("foreignObject", {
              key: m.value,
              x: l(u).x + l(i) * l(w).cos(l(w).rad(m.normalized * 360 - 90)) - (m.normalized % 0.5 === 0 ? l(i) / 2 : m.normalized > 0.5 ? l(i) : 0),
              y: l(u).y + l(i) * 1.1 * l(w).sin(l(w).rad(m.normalized * 360 - 90)) - l(i) / 6,
              height: l(i) / 3,
              width: l(i),
              class: p([d.$style["chart-axis"], d.$style.radar, d.$style["label-wrapper"]])
            }, [
              h("p", {
                class: p(["font-bold", [
                  d.$style["chart-axis"],
                  d.$style.radar,
                  d.$style.label,
                  m.normalized % 0.5 === 0 ? d.$style["font-align--center"] : m.normalized < 0.5 ? d.$style["font-align--left"] : d.$style["font-align--right"],
                  m.normalized % 0.5 === 0 ? d.$style["box-align--center"] : m.normalized < 0.5 ? d.$style["box-align--left"] : d.$style["box-align--right"]
                ]])
              }, M(m.value), 3)
            ], 10, ei))), 128))
          ], 2)) : O("", !0),
          h("g", {
            class: p([d.$style["chart-group-plots"]])
          }, [
            (g(!0), b(x, null, B(f.value, (m) => (g(), b("g", {
              key: m.label,
              class: p([d.$style["chart-area"], d.$style.radar, d.$style.plot])
            }, [
              h("path", {
                d: m.path,
                class: p([
                  {
                    [d.$style.round]: t.options.round
                  }
                ])
              }, null, 10, ti)
            ], 2))), 128))
          ], 2),
          (g(!0), b(x, null, B(l(c), (m) => (g(), b("g", {
            key: m.label,
            class: p([d.$style["chart-area-label"]])
          }, [
            (g(!0), b(x, null, B(m.series, (k, V) => (g(), b("g", {
              key: `plot-${V}`,
              class: p(d.$style["chart-area"])
            }, [
              h("circle", {
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
              }, null, 10, ni),
              h("circle", {
                class: p([d.$style["chart-area"], d.$style.radar, d.$style.point, d.$style.plot]),
                cx: l(u).x + l(i) * k.y.normalized * l(w).cos(l(w).rad(k.x.normalized * 360 - 90)),
                cy: l(u).y + l(i) * k.y.normalized * l(w).sin(l(w).rad(k.x.normalized * 360 - 90)),
                r: "5"
              }, null, 10, si),
              (g(), b("foreignObject", {
                x: l(u).x + l(i) * k.y.normalized * l(w).cos(l(w).rad(k.x.normalized * 360 - 90)) - 130,
                y: l(u).y + l(i) * k.y.normalized * l(w).sin(l(w).rad(k.x.normalized * 360 - 90)),
                height: "200",
                width: "260",
                class: p([d.$style["chart-area"], d.$style["legend-container"]])
              }, [
                I(X, {
                  class: p([d.$style["chart-area"], d.$style["legend-wrapper"]]),
                  radius: "var(--agh-ref-border-radius-500)"
                }, {
                  default: q(() => [
                    t.options.title ? (g(), b(x, { key: 0 }, [
                      h("h1", {
                        class: p([d.$style["chart-area"], d.$style["legend-title"], d.$style.radar])
                      }, [
                        h("span", null, M(k.x.value), 1),
                        h("span", {
                          class: p(d.$style["legend-value"])
                        }, M(k.y.value), 3)
                      ], 2),
                      ri
                    ], 64)) : O("", !0),
                    (g(!0), b(x, null, B(l(a), (C, N) => (g(), b(x, { key: N }, [
                      !/(x|y)/.test(N) && C && k[N] ? (g(), b("div", {
                        key: 0,
                        class: p([d.$style["chart-area"], d.$style["legend-group"], d.$style.radar])
                      }, [
                        h("p", {
                          class: p([d.$style["chart-area"], d.$style["legend-value"]])
                        }, M(k[N].value), 3),
                        h("label", {
                          class: p([d.$style["chart-area"], d.$style["legend-label"]])
                        }, M(C.label), 3)
                      ], 2)) : O("", !0)
                    ], 64))), 128))
                  ]),
                  _: 2
                }, 1032, ["class", "radius"])
              ], 10, li))
            ], 2))), 128))
          ], 2))), 128))
        ]),
        _: 1
      }, 8, ["height", "width"])
    ], 2));
  }
}), oi = "_behavior_1bxlz_1", ii = "_clickable_1bxlz_1", ci = "_disabled_1bxlz_4", ui = "_draggable_1bxlz_7", di = "_loading_1bxlz_10", fi = "_path_1bxlz_24", pi = "_radar_1bxlz_29", _i = "_label_1bxlz_32", gi = "_plot_1bxlz_85", hi = "_point_1bxlz_85", vi = "_doughnut_1bxlz_96", yi = "_bg_1bxlz_102", bi = "_round_1bxlz_106", $i = "_line_1bxlz_119", mi = {
  behavior: oi,
  clickable: ii,
  disabled: ci,
  draggable: ui,
  loading: di,
  "chart-container": "_chart-container_1bxlz_14",
  "chart-axis": "_chart-axis_1bxlz_24",
  path: fi,
  radar: pi,
  label: _i,
  "font-align--center": "_font-align--center_1bxlz_45",
  "font-align--right": "_font-align--right_1bxlz_48",
  "font-align--left": "_font-align--left_1bxlz_51",
  "box-align--center": "_box-align--center_1bxlz_54",
  "box-align--left": "_box-align--left_1bxlz_57",
  "box-align--right": "_box-align--right_1bxlz_60",
  "chart-group-plots": "_chart-group-plots_1bxlz_67",
  "chart-area": "_chart-area_1bxlz_67",
  plot: gi,
  point: hi,
  doughnut: vi,
  "legend-container": "_legend-container_1bxlz_96",
  bg: yi,
  round: bi,
  line: $i,
  "legend-wrapper": "_legend-wrapper_1bxlz_147",
  "legend-group": "_legend-group_1bxlz_158",
  "legend-value": "_legend-value_1bxlz_166",
  "legend-label": "_legend-label_1bxlz_169",
  "legend-title": "_legend-title_1bxlz_173"
}, ki = {
  $style: mi
}, pu = /* @__PURE__ */ L(ai, [["__cssModules", ki], ["__scopeId", "data-v-5b47bbf2"]]);
function Yt(e) {
  return kt() ? (wt(e), !0) : !1;
}
function be(e) {
  return typeof e == "function" ? e() : l(e);
}
const Zt = typeof window < "u", Ze = () => {
}, Ie = /* @__PURE__ */ wi();
function wi() {
  var e;
  return Zt && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && /* @__PURE__ */ /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
const vt = {
  mounted: "mounted",
  updated: "updated",
  unmounted: "unmounted"
};
function zi(...e) {
  if (e.length !== 1)
    return un(...e);
  const t = e[0];
  return typeof t == "function" ? mt(dn(() => ({ get: t, set: Ze }))) : A(t);
}
function re(e) {
  var t;
  const n = be(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Xt = Zt ? window : void 0;
function fe(...e) {
  let t, n, s, r;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, s, r] = e, t = Xt) : [t, n, s, r] = e, !t)
    return Ze;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const a = [], c = () => {
    a.forEach((f) => f()), a.length = 0;
  }, i = (f, _, y, v) => (f.addEventListener(_, y, v), () => f.removeEventListener(_, y, v)), u = W(
    () => [re(t), be(r)],
    ([f, _]) => {
      c(), f && a.push(
        ...n.flatMap((y) => s.map((v) => i(f, y, v, _)))
      );
    },
    { immediate: !0, flush: "post" }
  ), o = () => {
    u(), c();
  };
  return Yt(o), o;
}
let yt = !1;
function bt(e, t, n = {}) {
  const { window: s = Xt, ignore: r = [], capture: a = !0, detectIframe: c = !1 } = n;
  if (!s)
    return;
  Ie && !yt && (yt = !0, Array.from(s.document.body.children).forEach((y) => y.addEventListener("click", Ze)));
  let i = !0;
  const u = (y) => r.some((v) => {
    if (typeof v == "string")
      return Array.from(s.document.querySelectorAll(v)).some((d) => d === y.target || y.composedPath().includes(d));
    {
      const d = re(v);
      return d && (y.target === d || y.composedPath().includes(d));
    }
  }), f = [
    fe(s, "click", (y) => {
      const v = re(e);
      if (!(!v || v === y.target || y.composedPath().includes(v))) {
        if (y.detail === 0 && (i = !u(y)), !i) {
          i = !0;
          return;
        }
        t(y);
      }
    }, { passive: !0, capture: a }),
    fe(s, "pointerdown", (y) => {
      const v = re(e);
      v && (i = !y.composedPath().includes(v) && !u(y));
    }, { passive: !0 }),
    c && fe(s, "blur", (y) => {
      setTimeout(() => {
        var v;
        const d = re(e);
        ((v = s.document.activeElement) == null ? void 0 : v.tagName) === "IFRAME" && !(d != null && d.contains(s.document.activeElement)) && t(y);
      }, 0);
    })
  ].filter(Boolean);
  return () => f.forEach((y) => y());
}
const Ee = {
  [vt.mounted](e, t) {
    const n = !t.modifiers.bubble;
    if (typeof t.value == "function")
      e.__onClickOutside_stop = bt(e, t.value, { capture: n });
    else {
      const [s, r] = t.value;
      e.__onClickOutside_stop = bt(e, s, Object.assign({ capture: n }, r));
    }
  },
  [vt.unmounted](e) {
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
function xi(e) {
  const t = e || window.event, n = t.target;
  return Jt(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.preventDefault(), !1);
}
function Oi(e, t = !1) {
  const n = A(t);
  let s = null, r;
  W(zi(e), (i) => {
    if (i) {
      const u = i;
      r = u.style.overflow, n.value && (u.style.overflow = "hidden");
    }
  }, {
    immediate: !0
  });
  const a = () => {
    const i = be(e);
    !i || n.value || (Ie && (s = fe(
      i,
      "touchmove",
      (u) => {
        xi(u);
      },
      { passive: !1 }
    )), i.style.overflow = "hidden", n.value = !0);
  }, c = () => {
    const i = be(e);
    !i || !n.value || (Ie && (s == null || s()), i.style.overflow = r, n.value = !1);
  };
  return Yt(c), D({
    get() {
      return n.value;
    },
    set(i) {
      i ? a() : c();
    }
  });
}
function Mi() {
  let e = !1;
  const t = A(!1);
  return (n, s) => {
    if (t.value = s.value, e)
      return;
    e = !0;
    const r = Oi(n, s.value);
    W(t, (a) => r.value = a);
  };
}
Mi();
const Si = ["onClick"], ji = /* @__PURE__ */ E({
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
        Q(We(n.options, n.groupBy ?? "")).map(([o, f]) => [
          o === "undefined" ? "" : o,
          f.map(
            (_) => F({
              ..._,
              selected: !!(n.multiple ? te(n.modelValue, n.fields.key).includes(U(_, n.fields.key)) : U(_, n.fields.key) === U(n.modelValue, n.fields.key))
            })
          )
        ])
      )
    ), a = F(!1), c = () => {
      if (s.value) {
        const { scrollHeight: o, clientHeight: f } = s.value;
        a.set(o > f + 1);
      }
    }, i = (o) => {
      o.update((f) => ({
        ...f,
        selected: !f.selected
      })), n.multiple ? t(
        "update:modelValue",
        qe(
          te(
            r.value,
            (f) => f.map((_) => _()).filter((_) => _.selected)
          )
        )
      ) : t("update:modelValue", o());
    }, u = () => {
      n.multiple ? t("update:modelValue", []) : t("update:modelValue", {});
    };
    return Se(s, c, {
      window
    }), H(() => {
      c();
    }), (o, f) => (g(), R(X, {
      class: p([
        o.$style["menu-container"],
        {
          [o.$style.classify]: n.groupBy
        }
      ]),
      radius: "var(--agh-ref-border-radius-500)"
    }, {
      default: q(() => [
        n.label || n.multiple ? (g(), b("header", {
          key: 0,
          class: p(o.$style["menu-header"])
        }, [
          h("h1", {
            class: p(o.$style.title)
          }, M(n.label), 3),
          n.multiple ? (g(), R(ye, {
            key: 0,
            class: p(o.$style.button),
            label: "Clear Selection",
            icon: "fa6-solid:eraser",
            variant: "text",
            onClick: f[0] || (f[0] = (_) => u())
          }, null, 8, ["class"])) : O("", !0)
        ], 2)) : O("", !0),
        h("div", {
          ref_key: "wrapperRef$",
          ref: s,
          class: p([
            o.$style["menu-wrapper"],
            {
              [o.$style.overflowed]: l(a)()
            }
          ])
        }, [
          (g(!0), b(x, null, B(l(r), (_, y) => (g(), b("div", {
            key: y,
            class: p([
              o.$style["menu-group"],
              {
                [o.$style.classify]: n.groupBy
              }
            ])
          }, [
            y ? (g(), b("label", {
              key: 0,
              class: p(o.$style["menu-group-label"]),
              name: ""
            }, M(y), 3)) : O("", !0),
            (g(!0), b(x, null, B(_, (v, d) => (g(), b("div", {
              key: `option-${d}`,
              class: p([
                o.$style["menu-option"],
                o.$style.behavior,
                o.$style.clickable,
                {
                  [o.$style.selected]: v().selected,
                  [o.$style.multiple]: n.multiple
                }
              ]),
              onClick: ($) => i(v)
            }, [
              n.multiple ? (g(), R(l(ne), {
                key: 0,
                class: p(o.$style["menu-option-icon"]),
                icon: v().selected ? "fa6-solid:square-check" : "fa6-regular:square"
              }, null, 8, ["class", "icon"])) : O("", !0),
              n.fields.icon ? (g(), R(l(ne), {
                key: 1,
                class: p(o.$style["menu-option-icon"]),
                icon: String(l(U)(v(), n.fields.icon))
              }, null, 8, ["class", "icon"])) : O("", !0),
              h("div", {
                class: p(o.$style["menu-option-group"])
              }, [
                n.fields.title ? O("", !0) : (g(), b("p", {
                  key: 0,
                  class: p(o.$style["menu-field"])
                }, M(l(U)(v(), n.fields.key)), 3)),
                (g(!0), b(x, null, B(l(Gt)(n.fields, ["key", "icon"]), ($) => (g(), b(x, {
                  key: `option-field-${$}`
                }, [
                  $ ? (g(), b("p", {
                    key: 0,
                    class: p(o.$style["menu-field"])
                  }, M(l(he)(v(), $)), 3)) : O("", !0)
                ], 64))), 128))
              ], 2)
            ], 10, Si))), 128))
          ], 2))), 128))
        ], 2)
      ]),
      _: 1
    }, 8, ["class", "radius"]));
  }
}), Ai = "_behavior_1k2c6_1", Bi = "_clickable_1k2c6_1", Ci = "_disabled_1k2c6_4", Ti = "_draggable_1k2c6_7", Pi = "_loading_1k2c6_10", qi = "_classify_1k2c6_29", Ii = "_title_1k2c6_47", Ei = "_button_1k2c6_50", Vi = "_overflowed_1k2c6_77", Li = "_hover_1k2c6_91", Ri = "_selected_1k2c6_95", Di = "_multiple_1k2c6_99", Fi = {
  behavior: Ai,
  clickable: Bi,
  disabled: Ci,
  draggable: Ti,
  loading: Pi,
  "menu-container": "_menu-container_1k2c6_14",
  classify: qi,
  "menu-header": "_menu-header_1k2c6_32",
  title: Ii,
  button: Ei,
  "menu-wrapper": "_menu-wrapper_1k2c6_53",
  overflowed: Vi,
  "menu-option": "_menu-option_1k2c6_81",
  hover: Li,
  selected: Ri,
  multiple: Di,
  "menu-field": "_menu-field_1k2c6_102",
  "menu-option-group": "_menu-option-group_1k2c6_108",
  "menu-group": "_menu-group_1k2c6_122",
  "menu-group-label": "_menu-group-label_1k2c6_144"
}, Ni = {
  $style: Fi
}, $e = /* @__PURE__ */ L(ji, [["__cssModules", Ni], ["__scopeId", "data-v-29c13de6"]]), Ui = /* @__PURE__ */ E({
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
    const n = e, s = D({
      get: () => n.modelValue,
      set: (a) => (r.set(!0), t("update:modelValue", a))
    }), r = F(!0);
    return (a, c) => Pe((g(), b("div", {
      class: p([a.$style["dropdown-container"], a.$style[a.size]])
    }, [
      I(ye, {
        disabled: n.disabled,
        label: l(U)(n.modelValue, n.fields.key),
        icon: l(r)() ? "fa6-solid:chevron-down" : "fa6-solid:chevron-up",
        clicked: !l(r)(),
        level: n.level,
        size: n.size,
        variant: n.size === "small" ? "rounded" : "rect",
        class: p([a.$style["dropdown-button"], a.$style[a.size]]),
        onClick: c[0] || (c[0] = (i) => l(r).update((u) => !u)),
        type: "search"
      }, null, 8, ["disabled", "label", "icon", "clicked", "level", "size", "variant", "class"]),
      a.items.length > 0 && !l(r)() ? (g(), R($e, {
        key: 0,
        class: p(a.$style["dropdown-menu"]),
        options: a.items,
        fields: n.fields,
        modelValue: s.value,
        "onUpdate:modelValue": c[1] || (c[1] = (i) => s.value = i)
      }, null, 8, ["class", "options", "fields", "modelValue"])) : O("", !0)
    ], 2)), [
      [l(Ee), () => l(r).set(!0)]
    ]);
  }
}), Gi = "_large_184z5_7", Wi = {
  "dropdown-container": "_dropdown-container_184z5_1",
  large: Gi,
  "dropdown-menu": "_dropdown-menu_184z5_11",
  "dropdown-button": "_dropdown-button_184z5_11"
}, Hi = {
  $style: Wi
}, _u = /* @__PURE__ */ L(Ui, [["__cssModules", Hi], ["__scopeId", "data-v-89c03d44"]]), Yi = ["height", "width"], Zi = /* @__PURE__ */ h("feFlood", {
  "flood-opacity": "0",
  result: "BackgroundImageFix"
}, null, -1), Xi = /* @__PURE__ */ h("feBlend", {
  in: "SourceGraphic",
  in2: "BackgroundImageFix",
  result: "shape"
}, null, -1), Ji = /* @__PURE__ */ h("feColorMatrix", {
  in: "SourceAlpha",
  result: "hardAlpha",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}, null, -1), Qi = /* @__PURE__ */ h("feOffset", {
  dx: "1",
  dy: "1"
}, null, -1), Ki = /* @__PURE__ */ h("feGaussianBlur", { stdDeviation: "1" }, null, -1), ec = /* @__PURE__ */ h("feComposite", {
  in2: "hardAlpha",
  k2: "-1",
  k3: "1",
  operator: "arithmetic"
}, null, -1), tc = /* @__PURE__ */ h("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" }, null, -1), nc = /* @__PURE__ */ h("feBlend", {
  in2: "shape",
  result: "effect-innerShadow-1"
}, null, -1), sc = /* @__PURE__ */ h("feColorMatrix", {
  in: "SourceAlpha",
  result: "hardAlpha",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}, null, -1), lc = /* @__PURE__ */ h("feOffset", {
  dx: "2",
  dy: "3"
}, null, -1), rc = /* @__PURE__ */ h("feGaussianBlur", { stdDeviation: "1.5" }, null, -1), ac = /* @__PURE__ */ h("feComposite", {
  in2: "hardAlpha",
  k2: "-1",
  k3: "1",
  operator: "arithmetic"
}, null, -1), oc = /* @__PURE__ */ h("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.11 0" }, null, -1), ic = /* @__PURE__ */ h("feBlend", {
  in2: "effect-innerShadow-1",
  result: "effect-innerShadow2"
}, null, -1), cc = /* @__PURE__ */ h("feColorMatrix", {
  in: "SourceAlpha",
  result: "hardAlpha",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}, null, -1), uc = /* @__PURE__ */ h("feOffset", {
  dx: "5",
  dy: "6"
}, null, -1), dc = /* @__PURE__ */ h("feGaussianBlur", { stdDeviation: "2" }, null, -1), fc = /* @__PURE__ */ h("feComposite", {
  in2: "hardAlpha",
  k2: "-1",
  k3: "1",
  operator: "arithmetic"
}, null, -1), pc = /* @__PURE__ */ h("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" }, null, -1), _c = /* @__PURE__ */ h("feBlend", {
  in2: "effect-innerShadow2",
  result: "effect-innerShadow3"
}, null, -1), gc = /* @__PURE__ */ h("feColorMatrix", {
  in: "SourceAlpha",
  result: "hardAlpha",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}, null, -1), hc = /* @__PURE__ */ h("feOffset", {
  dx: "8",
  dy: "10"
}, null, -1), vc = /* @__PURE__ */ h("feGaussianBlur", { stdDeviation: "2.5" }, null, -1), yc = /* @__PURE__ */ h("feComposite", {
  in2: "hardAlpha",
  k2: "-1",
  k3: "1",
  operator: "arithmetic"
}, null, -1), bc = /* @__PURE__ */ h("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0" }, null, -1), $c = /* @__PURE__ */ h("feBlend", {
  in2: "effect-innerShadow3",
  result: "effect-innerShadow4"
}, null, -1), mc = [
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
  ac,
  oc,
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
  bc,
  $c
], kc = /* @__PURE__ */ E({
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
    }, mc, 8, Yi));
  }
}), wc = /* @__PURE__ */ E({
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
      h("div", {
        class: p([n.$style["progress-groove"], n.$style[t.variant]])
      }, [
        h("div", {
          class: p(n.$style["progress-value"]),
          style: fn({ width: `${t.value * 100}%` })
        }, null, 6)
      ], 2)
    ], 2));
  }
}), zc = "_concave_vuh1m_23", xc = "_convex_vuh1m_55", Oc = {
  "progress-container": "_progress-container_vuh1m_1",
  "progress-groove": "_progress-groove_vuh1m_11",
  "progress-value": "_progress-value_vuh1m_11",
  concave: zc,
  "progress-content-wrapper": "_progress-content-wrapper_vuh1m_35",
  convex: xc
}, Mc = {
  $style: Oc
}, gu = /* @__PURE__ */ L(wc, [["__cssModules", Mc], ["__scopeId", "data-v-d1ec5a1d"]]), Xe = (e) => (me("data-v-017d9edf"), e = e(), ke(), e), Sc = ["innerHTML"], jc = ["cx", "cy", "r"], Ac = ["cx", "cy", "r"], Bc = /* @__PURE__ */ Xe(() => /* @__PURE__ */ h("mask", { id: "progress-groove-mask" }, [
  /* @__PURE__ */ h("use", {
    href: "#progress-groove-outer",
    fill: "#fff"
  }),
  /* @__PURE__ */ h("use", {
    href: "#progress-groove-inner",
    fill: "#000"
  })
], -1)), Cc = /* @__PURE__ */ Xe(() => /* @__PURE__ */ h("use", {
  href: "#progress-groove-outer",
  mask: "url(#progress-groove-mask)"
}, null, -1)), Tc = [
  Cc
], Pc = ["cx", "cy", "r", "stroke-dashoffset", "stroke-dasharray", "stroke-width"], qc = /* @__PURE__ */ Xe(() => /* @__PURE__ */ h("clipPath", { id: "progress-content-clip" }, [
  /* @__PURE__ */ h("use", { href: "#progress-groove-inner" })
], -1)), Ic = { "clip-path": "url(#progress-content-clip)" }, Ec = ["height", "width", "x", "y"], Vc = /* @__PURE__ */ E({
  __name: "ProgressCircle",
  props: {
    value: { default: 0 },
    variant: { default: "concave" },
    thickness: { default: 12 }
  },
  setup(e) {
    const t = e, n = A(), { width: s, height: r } = je(n), a = P(
      () => w.clamp(w.min(s.value, r.value) / 2 - t.thickness / 2, 0, 1 / 0)
    ), c = P(() => a.value * 2 * w.PI), i = P(() => ({
      x: s.value / 2,
      y: r.value / 2
    })), u = F(""), o = () => {
      n.value && t.variant === "convex" && (u.set(
        He("--progress-value-fill-gradient", n, {
          observe: !0
        }).value
      ), u() || Ge(o, 1));
    };
    return H(() => {
      o();
    }), (f, _) => (g(), b("div", {
      ref_key: "wrapperRef$",
      ref: n,
      class: p([f.$style["progress-container"], f.$style[t.variant]])
    }, [
      I(Ae, {
        height: l(r),
        width: l(s)
      }, {
        defs: q(() => [
          h("g", {
            innerHTML: l(u)()
          }, null, 8, Sc),
          I(kc, {
            height: l(r),
            width: l(s)
          }, null, 8, ["height", "width"]),
          h("circle", {
            id: "progress-groove-outer",
            cx: l(i).x,
            cy: l(i).y,
            r: l(a) + t.thickness / 2
          }, null, 8, jc),
          h("circle", {
            id: "progress-groove-inner",
            cx: l(i).x,
            cy: l(i).y,
            r: l(a) - t.thickness / 2
          }, null, 8, Ac),
          Bc
        ]),
        path: q(() => [
          h("g", {
            class: p(f.$style["progress-groove"])
          }, Tc, 2),
          h("g", {
            class: p(f.$style["progress-value"])
          }, [
            h("circle", {
              cx: l(i).x,
              cy: l(i).y,
              r: l(a),
              "stroke-dashoffset": (t.value + 0.25) * l(c),
              "stroke-dasharray": `${t.value * l(c)} ${(1 - t.value) * l(c)}`,
              "stroke-width": t.thickness,
              fill: "transparent"
            }, null, 8, Pc)
          ], 2),
          qc,
          h("g", Ic, [
            (g(), b("foreignObject", {
              height: l(a) * 2,
              width: l(a) * 2,
              x: l(i).x - l(a),
              y: l(i).y - l(a)
            }, [
              h("div", {
                class: p(f.$style["progress-content-wrapper"])
              }, [
                h("label", null, M((t.value * 100).toFixed(0)) + "%", 1)
              ], 2)
            ], 8, Ec))
          ])
        ]),
        _: 1
      }, 8, ["height", "width"])
    ], 2));
  }
}), Lc = "_concave_1jatd_23", Rc = "_convex_1jatd_55", Dc = {
  "progress-container": "_progress-container_1jatd_1",
  "progress-groove": "_progress-groove_1jatd_11",
  "progress-value": "_progress-value_1jatd_11",
  concave: Lc,
  "progress-content-wrapper": "_progress-content-wrapper_1jatd_35",
  convex: Rc
}, Fc = {
  $style: Dc
}, hu = /* @__PURE__ */ L(Vc, [["__cssModules", Fc], ["__scopeId", "data-v-017d9edf"]]), Qt = (e, t) => {
  var n;
  if (t) {
    const s = (n = Q(Gt(e, "valid")).find(([r, a]) => a && t[r])) == null ? void 0 : n[0];
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
    const n = e, { onTrigger: s } = Oe(
      (i) => {
        n.disabled ? (i.preventDefault(), i.stopPropagation()) : (c(), t("update:modelValue", i.target.value));
      },
      {
        flush: "post"
      }
    ), r = A(), a = F(""), c = () => {
      var i;
      return a.set(
        r.value ? (i = r.value) != null && i.validity.valid ? "" : Qt(r.value.validity, n.invalidMessage ?? {}) ?? r.value.validationMessage : ""
      );
    };
    return H(() => {
      c();
    }), (i, u) => (g(), b("div", {
      class: p([
        i.$style["textfield-container"],
        {
          [i.$style[`icon-align--${n.iconAlign}`]]: n.icon || i.type === "search"
        }
      ])
    }, [
      h("input", Ve({
        ref_key: "inputRef$",
        ref: r,
        class: [i.$style["textfield-input"]]
      }, n, {
        value: n.modelValue,
        onInput: u[0] || (u[0] = //@ts-ignore
        (...o) => l(s) && l(s)(...o))
      }), null, 16, Nc),
      i.type === "search" || n.icon ? (g(), R(l(ne), {
        key: 0,
        class: p([i.$style["textfield-label--icon"], i.$style.icon]),
        icon: n.icon || i.type === "search" ? "fa6-solid:magnifying-glass" : ""
      }, null, 8, ["class", "icon"])) : O("", !0),
      l(a)() ? (g(), b("label", {
        key: 1,
        for: n.name,
        class: p([i.$style["textfield-label"]])
      }, [
        I(l(ne), {
          class: p([i.$style["textfield-label--icon"]]),
          icon: "fa6-solid:circle-xmark"
        }, null, 8, ["class"]),
        h("span", {
          class: p([i.$style["textfield-label--value"]])
        }, M(l(a)()), 3)
      ], 10, Uc)) : O("", !0)
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
}, Kt = /* @__PURE__ */ L(Gc, [["__cssModules", Hc], ["__scopeId", "data-v-784e2d65"]]), Yc = /* @__PURE__ */ E({
  __name: "SearchBar",
  props: {
    fields: {},
    modelValue: { default: "" },
    items: { default: () => [] },
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue", "select"],
  setup(e, { emit: t }) {
    const n = e, s = D({
      get: () => n.modelValue,
      set: (o) => (u(o), t("update:modelValue", o))
    }), r = A(), a = F(!1), c = F([]), i = (o) => {
      o && (t("update:modelValue", U(o, n.fields.key)), t("select", o), a.set(!0));
    }, u = (o) => {
      var f;
      c.set(
        ((f = n.items) == null ? void 0 : f.filter((_) => String(U(_, n.fields.key)).includes(o))) ?? []
      );
    };
    return W(s, u), W(r, i), (o, f) => (g(), b("div", {
      class: p(o.$style["search-bar--container"])
    }, [
      I(Kt, {
        modelValue: s.value,
        "onUpdate:modelValue": f[0] || (f[0] = (_) => s.value = _),
        class: p(o.$style["search-bar--input"]),
        disabled: n.disabled,
        onClick: f[1] || (f[1] = (_) => l(a).set(!1)),
        onFocus: f[2] || (f[2] = (_) => l(a).set(!1)),
        onBlur: f[3] || (f[3] = (_) => l(a).set(!0)),
        type: "search"
      }, null, 8, ["modelValue", "class", "disabled"]),
      s.value && l(c)().length > 0 && !l(a)() ? (g(), R($e, {
        key: 0,
        class: p(o.$style["search-bar--menu"]),
        options: l(c)(),
        fields: n.fields,
        modelValue: r.value,
        "onUpdate:modelValue": f[4] || (f[4] = (_) => r.value = _)
      }, null, 8, ["class", "options", "fields", "modelValue"])) : O("", !0)
    ], 2));
  }
}), Zc = {
  "search-bar--container": "_search-bar--container_1hygv_1",
  "search-bar--input": "_search-bar--input_1hygv_7",
  "search-bar--menu": "_search-bar--menu_1hygv_10"
}, Xc = {
  $style: Zc
}, vu = /* @__PURE__ */ L(Yc, [["__cssModules", Xc], ["__scopeId", "data-v-644d7672"]]), Jc = ["value"], Qc = ["for"], Kc = /* @__PURE__ */ E({
  __name: "TextArea",
  props: {
    modelValue: {},
    placeholder: {},
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    name: {},
    autocomplete: { default: "off" },
    autofocus: { type: Boolean },
    maxlength: {},
    minlength: {},
    size: {},
    spellcheck: { type: Boolean, default: !1 },
    tabindex: {},
    invalidMessage: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, { onTrigger: s } = Oe(
      (i) => {
        n.disabled ? (i.preventDefault(), i.stopPropagation()) : (c(), t("update:modelValue", i.target.value));
      },
      {
        flush: "post"
      }
    ), r = A(), a = F(""), c = () => {
      var i;
      return a.set(
        r.value ? (i = r.value) != null && i.validity.valid ? "" : Qt(r.value.validity, n.invalidMessage ?? {}) ?? r.value.validationMessage : ""
      );
    };
    return H(() => {
      c();
    }), (i, u) => (g(), R(X, {
      class: p([i.$style["textarea-container"]]),
      variant: "flat",
      radius: "var(--agh-ref-border-radius-400)"
    }, {
      default: q(() => [
        h("textarea", Ve({
          ref_key: "inputRef$",
          ref: r,
          class: [i.$style["textarea-input"]]
        }, n, {
          value: n.modelValue,
          onInput: u[0] || (u[0] = //@ts-ignore
          (...o) => l(s) && l(s)(...o))
        }), null, 16, Jc),
        l(a)() ? (g(), b("label", {
          key: 0,
          for: n.name,
          class: p([i.$style["textarea-label"]])
        }, [
          I(l(ne), {
            class: p([i.$style["textarea-label--icon"]]),
            icon: "fa6-solid:circle-xmark"
          }, null, 8, ["class"]),
          h("span", {
            class: p([i.$style["textarea-label--value"]])
          }, M(l(a)()), 3)
        ], 10, Qc)) : O("", !0)
      ]),
      _: 1
    }, 8, ["class"]));
  }
}), eu = {
  "textarea-container": "_textarea-container_v6fbk_1",
  "textarea-input": "_textarea-input_v6fbk_12",
  "icon-align--left": "_icon-align--left_v6fbk_16",
  "icon-align--right": "_icon-align--right_v6fbk_16",
  "textarea-label--icon": "_textarea-label--icon_v6fbk_30",
  "textarea-label": "_textarea-label_v6fbk_30",
  "textarea-label--value": "_textarea-label--value_v6fbk_107"
}, tu = {
  $style: eu
}, yu = /* @__PURE__ */ L(Kc, [["__cssModules", tu], ["__scopeId", "data-v-1a3f9f23"]]), nu = /* @__PURE__ */ E({
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
    }, a = {
      key: "value",
      title: "{{ $.value }}"
    }, c = P(
      () => qe(
        (n.filterOptions ?? []).map(
          (z) => Ct(te(n.items, z.field)).map((S) => ({ ...z, value: S }))
        )
      )
    ), i = A(n.modelValue ?? ""), u = D({
      get: () => n.modelValue ?? i.value,
      set: (z) => {
        t("update:modelValue", z ?? ""), n.modelValue || (i.value = z ?? "");
      }
    }), o = A(er(n.sortOptions)), f = D({
      get: () => n.sort ?? o.value,
      set: (z) => {
        z && (k.set(!0), t("update:sort", z), n.sort || (o.value = z));
      }
    }), _ = A([]), y = D({
      get: () => n.filter ?? _.value,
      set: (z) => {
        t("update:filter", z ?? []), n.filter || (_.value = z ?? []);
      }
    }), v = A(), d = D({
      get: () => n.selected !== void 0 ? n.selected : v.value,
      set: (z) => {
        z && (t("update:selected", z), n.selected || (v.value = z));
      }
    }), $ = A(n.items), m = F(!0), k = F(!0), V = F(!1), C = () => {
      if (s.value) {
        const { scrollHeight: z, clientHeight: S } = s.value;
        V.set(z > S + 1);
      }
    }, N = (z) => z.update((S) => !S), en = (z) => {
      d.value = z;
    }, Ce = () => {
      var Te, Je;
      const z = n.items.map(
        (J) => ({
          ...J,
          selected: U(J, n.fields.key) === U(d.value, n.fields.key)
        })
      ), S = Kl(
        z,
        (J) => U(J, n.fields.title ?? n.fields.key).includes(u.value)
      ), se = Or(
        S,
        [((Te = f.value) == null ? void 0 : Te.field) ?? n.fields.key],
        [((Je = f.value) == null ? void 0 : Je.direction) ?? "asc"]
      ), T = ae(y.value) ? se : cr(
        ...te(
          We(y.value, "field"),
          (J) => qe(
            J.map(
              (Qe) => se.filter((tn) => fr(tn, { [Qe.field]: Qe.value }))
            )
          )
        ),
        dr
      );
      $.value = T;
    };
    return Se(s, C, {
      window
    }), H(() => {
      Ce(), C();
    }), pn(() => {
      Ce(), C();
    }), W([f, y, u, d], () => {
      Ce(), C();
    }), (z, S) => (g(), R(X, {
      class: p(z.$style["list-container"]),
      purpose: "container",
      radius: "var(--agh-ref-border-radius-600)"
    }, {
      default: q(() => {
        var se;
        return [
          h("div", {
            class: p(z.$style["list-toolbar"])
          }, [
            I(Kt, {
              modelValue: u.value,
              "onUpdate:modelValue": S[0] || (S[0] = (T) => u.value = T),
              class: p(z.$style["list-toolbar-search"]),
              type: "search"
            }, null, 8, ["modelValue", "class"]),
            n.filterOptions && !l(ae)(n.filterOptions) ? Pe((g(), b("div", {
              key: 0,
              class: p(z.$style["list-toolbar-tool"]),
              onKeydown: [
                S[3] || (S[3] = ue((T) => l(m).set(!0), ["esc"])),
                S[4] || (S[4] = ue((T) => l(m).set(!0), ["enter"]))
              ]
            }, [
              I(ye, {
                class: p(z.$style["list-toolbar-button"]),
                clicked: !l(m)(),
                onClick: S[1] || (S[1] = (T) => N(l(m))),
                icon: "fa6-solid:filter",
                variant: "text"
              }, null, 8, ["class", "clicked"]),
              y.value.length > 0 ? (g(), b("span", {
                key: 0,
                class: p(z.$style["list-toolbar-button-deco"])
              }, M(y.value.length), 3)) : O("", !0),
              l(m)() ? O("", !0) : (g(), R($e, {
                key: 1,
                class: p(z.$style["list-toolbar-menu"]),
                fields: a,
                options: l(c),
                multiple: !0,
                modelValue: y.value,
                "onUpdate:modelValue": S[2] || (S[2] = (T) => y.value = T),
                label: "Filter",
                "group-by": "label"
              }, null, 8, ["class", "options", "modelValue"]))
            ], 34)), [
              [l(Ee), () => l(m).set(!0)]
            ]) : O("", !0),
            n.sortOptions && !l(ae)(n.sortOptions) ? Pe((g(), b("div", {
              key: 1,
              class: p(z.$style["list-toolbar-tool"]),
              onKeydown: [
                S[7] || (S[7] = ue((T) => l(k).set(!0), ["esc"])),
                S[8] || (S[8] = ue((T) => l(k).set(!0), ["enter"]))
              ]
            }, [
              I(ye, {
                class: p(z.$style["list-toolbar-button"]),
                icon: ((se = f.value) == null ? void 0 : se.icon) ?? "fa6-solid:arrow-down-wide-short",
                clicked: !l(k)(),
                onClick: S[5] || (S[5] = (T) => N(l(k))),
                variant: "text"
              }, null, 8, ["class", "icon", "clicked"]),
              l(k)() ? O("", !0) : (g(), R($e, {
                key: 0,
                class: p(z.$style["list-toolbar-menu"]),
                fields: r,
                options: n.sortOptions,
                modelValue: f.value,
                "onUpdate:modelValue": S[6] || (S[6] = (T) => f.value = T)
              }, null, 8, ["class", "options", "modelValue"]))
            ], 34)), [
              [l(Ee), () => l(k).set(!0)]
            ]) : O("", !0)
          ], 2),
          h("div", {
            ref_key: "wrapperRef$",
            ref: s,
            class: p([
              z.$style["list-wrapper"],
              {
                [z.$style.overflowed]: l(V)()
              }
            ])
          }, [
            I(Nr, {
              items: $.value,
              "group-by": n.groupBy
            }, {
              placeholder: q(() => [
                G(z.$slots, "placeholder", {}, void 0, !0)
              ]),
              group: q((T) => [
                h("label", {
                  class: p(z.$style["list-item-label"])
                }, M(T.group), 3)
              ]),
              default: q((T) => [
                I(X, {
                  class: p(z.$style["list-item"]),
                  color: T.item.selected ? "blue" : "default",
                  clickable: !0,
                  onClick: (Te) => en(T.item),
                  radius: "var(--agh-ref-border-radius-400)"
                }, {
                  default: q(() => [
                    G(z.$slots, "default", {
                      item: T.item,
                      index: T.index,
                      selected: T.item.selected
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
}), su = "_overflowed_10vs0_81", lu = {
  "list-container": "_list-container_10vs0_1",
  "list-toolbar": "_list-toolbar_10vs0_11",
  "list-toolbar-search": "_list-toolbar-search_10vs0_17",
  "list-toolbar-tool": "_list-toolbar-tool_10vs0_20",
  "list-toolbar-button": "_list-toolbar-button_10vs0_23",
  "list-toolbar-button-deco": "_list-toolbar-button-deco_10vs0_26",
  "list-toolbar-menu": "_list-toolbar-menu_10vs0_45",
  "list-wrapper": "_list-wrapper_10vs0_51",
  overflowed: su,
  "list-item": "_list-item_10vs0_84",
  "list-item-label": "_list-item-label_10vs0_89"
}, ru = {
  $style: lu
}, bu = /* @__PURE__ */ L(nu, [["__cssModules", ru], ["__scopeId", "data-v-52db1428"]]);
export {
  cu as BadgeBox,
  Ye as BaseLink,
  Nr as BaseList,
  Ae as BasePoly,
  ye as ButtonBox,
  X as CardBox,
  bu as CardList,
  uu as DoughnutChart,
  _u as DropDown,
  kc as InnerShadowDeco,
  du as LineChart,
  fu as MatrixChart,
  gu as ProgressBar,
  hu as ProgressCircle,
  pu as RadarChart,
  ht as RoundEffect,
  vu as SearchBar,
  $e as SelectMenu,
  yu as TextArea,
  Kt as TextField
};
//# sourceMappingURL=ui.component.es.js.map
