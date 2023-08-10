import { shallowRef as Qt, watchEffect as mt, readonly as kt, getCurrentScope as Kt, onScopeDispose as en, unref as l, toRef as tn, customRef as nn, ref as B, computed as F, watch as W, getCurrentInstance as sn, onMounted as Y, defineComponent as V, openBlock as g, createBlock as R, resolveDynamicComponent as ln, normalizeProps as an, guardReactiveProps as rn, withCtx as q, renderSlot as G, createElementBlock as b, Fragment as O, createCommentVNode as x, renderList as A, normalizeClass as f, createElementVNode as h, useCssVars as wt, toDisplayString as M, createTextVNode as on, mergeProps as Le, createVNode as I, reactive as cn, pushScopeId as ie, popScopeId as ce, toRefs as te, withDirectives as qe, normalizeStyle as un, onUpdated as dn, withKeys as _e } from "vue";
import { i as he, d as oe, g as fn, e as ue, f as _n, h as zt, j as xt, k as pn, l as gn, o as hn, m as ze, n as vn, q as Re, r as yn, t as Ot, v as bn, w as $n, x as mn, y as et, z as tt, A as xe, B as ve, C as Oe, D as ne, E as kn, F as wn, G as zn, I as Mt, J as Fe, K as Z, L as xn, O as On, P as Mn, Q as nt, R as Sn, T as jn, V as St, W as jt, X as Bn, Y as An, Z as Tn, _ as Bt, $ as Cn, a0 as Pn, a1 as ye, u as de, p as be, a2 as re, a3 as At, a4 as se, M as w, b as U, s as D, a5 as Ie } from "./parser-f68503d3.js";
import { Icon as X } from "@iconify/vue/offline";
var qn = /\s/;
function In(e) {
  for (var t = e.length; t-- && qn.test(e.charAt(t)); )
    ;
  return t;
}
var Vn = /^\s+/;
function En(e) {
  return e && e.slice(0, In(e) + 1).replace(Vn, "");
}
var st = 0 / 0, Ln = /^[-+]0x[0-9a-f]+$/i, Rn = /^0b[01]+$/i, Fn = /^0o[0-7]+$/i, Dn = parseInt;
function Nn(e) {
  if (typeof e == "number")
    return e;
  if (he(e))
    return st;
  if (oe(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = oe(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = En(e);
  var n = Rn.test(e);
  return n || Fn.test(e) ? Dn(e.slice(2), n ? 2 : 8) : Ln.test(e) ? st : +e;
}
var lt = Object.create, Un = function() {
  function e() {
  }
  return function(t) {
    if (!oe(t))
      return {};
    if (lt)
      return lt(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
const Gn = Un;
function Wn(e, t, n) {
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
function Hn(e, t) {
  var n = -1, s = e.length;
  for (t || (t = Array(s)); ++n < s; )
    t[n] = e[n];
  return t;
}
var Yn = 800, Zn = 16, Xn = Date.now;
function Jn(e) {
  var t = 0, n = 0;
  return function() {
    var s = Xn(), a = Zn - (s - n);
    if (n = s, a > 0) {
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
const $e = Kn;
var es = $e ? function(e, t) {
  return $e(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Qn(t),
    writable: !0
  });
} : ue;
const ts = es;
var ns = Jn(ts);
const Tt = ns;
function ss(e, t) {
  for (var n = -1, s = e == null ? 0 : e.length; ++n < s && t(e[n], n, e) !== !1; )
    ;
  return e;
}
function De(e, t, n) {
  t == "__proto__" && $e ? $e(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
var ls = Object.prototype, as = ls.hasOwnProperty;
function Ct(e, t, n) {
  var s = e[t];
  (!(as.call(e, t) && _n(s, n)) || n === void 0 && !(t in e)) && De(e, t, n);
}
function fe(e, t, n, s) {
  var a = !n;
  n || (n = {});
  for (var r = -1, u = t.length; ++r < u; ) {
    var c = t[r], i = s ? s(n[c], e[c], c, n, e) : void 0;
    i === void 0 && (i = e[c]), a ? De(n, c, i) : Ct(n, c, i);
  }
  return n;
}
var at = Math.max;
function Pt(e, t, n) {
  return t = at(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var s = arguments, a = -1, r = at(s.length - t, 0), u = Array(r); ++a < r; )
      u[a] = s[t + a];
    a = -1;
    for (var c = Array(t + 1); ++a < t; )
      c[a] = s[a];
    return c[t] = n(u), Wn(e, this, c);
  };
}
function qt(e, t) {
  return Tt(Pt(e, t, ue), e + "");
}
function rs(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var os = Object.prototype, is = os.hasOwnProperty;
function cs(e) {
  if (!oe(e))
    return rs(e);
  var t = zt(e), n = [];
  for (var s in e)
    s == "constructor" && (t || !is.call(e, s)) || n.push(s);
  return n;
}
function Ne(e) {
  return xt(e) ? pn(e, !0) : cs(e);
}
function us(e) {
  var t = e == null ? 0 : e.length;
  return t ? gn(e, 1) : [];
}
function ds(e) {
  return Tt(Pt(e, void 0, us), e + "");
}
var fs = hn(Object.getPrototypeOf, Object);
const Ue = fs;
var _s = "[object Object]", ps = Function.prototype, gs = Object.prototype, It = ps.toString, hs = gs.hasOwnProperty, vs = It.call(Object);
function ys(e) {
  if (!ze(e) || vn(e) != _s)
    return !1;
  var t = Ue(e);
  if (t === null)
    return !0;
  var n = hs.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && It.call(n) == vs;
}
function bs(e, t, n) {
  var s = -1, a = e.length;
  t < 0 && (t = -t > a ? 0 : a + t), n = n > a ? a : n, n < 0 && (n += a), a = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var r = Array(a); ++s < a; )
    r[s] = e[s + t];
  return r;
}
function $s(e, t) {
  return e && fe(t, Re(t), e);
}
function ms(e, t) {
  return e && fe(t, Ne(t), e);
}
var Vt = typeof exports == "object" && exports && !exports.nodeType && exports, rt = Vt && typeof module == "object" && module && !module.nodeType && module, ks = rt && rt.exports === Vt, ot = ks ? yn.Buffer : void 0, it = ot ? ot.allocUnsafe : void 0;
function ws(e, t) {
  if (t)
    return e.slice();
  var n = e.length, s = it ? it(n) : new e.constructor(n);
  return e.copy(s), s;
}
function zs(e, t) {
  return fe(e, Ot(e), t);
}
var xs = Object.getOwnPropertySymbols, Os = xs ? function(e) {
  for (var t = []; e; )
    $n(t, Ot(e)), e = Ue(e);
  return t;
} : bn;
const Et = Os;
function Ms(e, t) {
  return fe(e, Et(e), t);
}
function Lt(e) {
  return mn(e, Ne, Et);
}
var Ss = Object.prototype, js = Ss.hasOwnProperty;
function Bs(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && js.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
function Ge(e) {
  var t = new e.constructor(e.byteLength);
  return new et(t).set(new et(e)), t;
}
function As(e, t) {
  var n = t ? Ge(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var Ts = /\w*$/;
function Cs(e) {
  var t = new e.constructor(e.source, Ts.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var ct = tt ? tt.prototype : void 0, ut = ct ? ct.valueOf : void 0;
function Ps(e) {
  return ut ? Object(ut.call(e)) : {};
}
function qs(e, t) {
  var n = t ? Ge(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var Is = "[object Boolean]", Vs = "[object Date]", Es = "[object Map]", Ls = "[object Number]", Rs = "[object RegExp]", Fs = "[object Set]", Ds = "[object String]", Ns = "[object Symbol]", Us = "[object ArrayBuffer]", Gs = "[object DataView]", Ws = "[object Float32Array]", Hs = "[object Float64Array]", Ys = "[object Int8Array]", Zs = "[object Int16Array]", Xs = "[object Int32Array]", Js = "[object Uint8Array]", Qs = "[object Uint8ClampedArray]", Ks = "[object Uint16Array]", el = "[object Uint32Array]";
function tl(e, t, n) {
  var s = e.constructor;
  switch (t) {
    case Us:
      return Ge(e);
    case Is:
    case Vs:
      return new s(+e);
    case Gs:
      return As(e, n);
    case Ws:
    case Hs:
    case Ys:
    case Zs:
    case Xs:
    case Js:
    case Qs:
    case Ks:
    case el:
      return qs(e, n);
    case Es:
      return new s();
    case Ls:
    case Ds:
      return new s(e);
    case Rs:
      return Cs(e);
    case Fs:
      return new s();
    case Ns:
      return Ps(e);
  }
}
function nl(e) {
  return typeof e.constructor == "function" && !zt(e) ? Gn(Ue(e)) : {};
}
var sl = "[object Map]";
function ll(e) {
  return ze(e) && xe(e) == sl;
}
var dt = ve && ve.isMap, al = dt ? Oe(dt) : ll;
const rl = al;
var ol = "[object Set]";
function il(e) {
  return ze(e) && xe(e) == ol;
}
var ft = ve && ve.isSet, cl = ft ? Oe(ft) : il;
const ul = cl;
var dl = 1, fl = 2, _l = 4, Rt = "[object Arguments]", pl = "[object Array]", gl = "[object Boolean]", hl = "[object Date]", vl = "[object Error]", Ft = "[object Function]", yl = "[object GeneratorFunction]", bl = "[object Map]", $l = "[object Number]", Dt = "[object Object]", ml = "[object RegExp]", kl = "[object Set]", wl = "[object String]", zl = "[object Symbol]", xl = "[object WeakMap]", Ol = "[object ArrayBuffer]", Ml = "[object DataView]", Sl = "[object Float32Array]", jl = "[object Float64Array]", Bl = "[object Int8Array]", Al = "[object Int16Array]", Tl = "[object Int32Array]", Cl = "[object Uint8Array]", Pl = "[object Uint8ClampedArray]", ql = "[object Uint16Array]", Il = "[object Uint32Array]", j = {};
j[Rt] = j[pl] = j[Ol] = j[Ml] = j[gl] = j[hl] = j[Sl] = j[jl] = j[Bl] = j[Al] = j[Tl] = j[bl] = j[$l] = j[Dt] = j[ml] = j[kl] = j[wl] = j[zl] = j[Cl] = j[Pl] = j[ql] = j[Il] = !0;
j[vl] = j[Ft] = j[xl] = !1;
function pe(e, t, n, s, a, r) {
  var u, c = t & dl, i = t & fl, o = t & _l;
  if (n && (u = a ? n(e, s, a, r) : n(e)), u !== void 0)
    return u;
  if (!oe(e))
    return e;
  var _ = ne(e);
  if (_) {
    if (u = Bs(e), !c)
      return Hn(e, u);
  } else {
    var p = xe(e), y = p == Ft || p == yl;
    if (kn(e))
      return ws(e, c);
    if (p == Dt || p == Rt || y && !a) {
      if (u = i || y ? {} : nl(e), !c)
        return i ? Ms(e, ms(u, e)) : zs(e, $s(u, e));
    } else {
      if (!j[p])
        return a ? e : {};
      u = tl(e, p, c);
    }
  }
  r || (r = new wn());
  var v = r.get(e);
  if (v)
    return v;
  r.set(e, u), ul(e) ? e.forEach(function(m) {
    u.add(pe(m, t, n, m, e, r));
  }) : rl(e) && e.forEach(function(m, k) {
    u.set(k, pe(m, t, n, k, e, r));
  });
  var d = o ? i ? Lt : zn : i ? Ne : Re, $ = _ ? void 0 : d(e);
  return ss($ || e, function(m, k) {
    $ && (k = m, m = e[k]), Ct(u, k, pe(m, t, n, k, e, r));
  }), u;
}
function Vl(e, t, n, s) {
  for (var a = -1, r = e == null ? 0 : e.length; ++a < r; ) {
    var u = e[a];
    t(s, u, n(u), e);
  }
  return s;
}
function El(e, t, n, s) {
  return Mt(e, function(a, r, u) {
    t(s, a, n(a), u);
  }), s;
}
function Ll(e, t) {
  return function(n, s) {
    var a = ne(n) ? Vl : El, r = t ? t() : {};
    return a(n, e, Fe(s), r);
  };
}
function Rl(e) {
  return ze(e) && xt(e);
}
var Fl = "Expected a function";
function Dl(e, t, n) {
  if (typeof e != "function")
    throw new TypeError(Fl);
  return setTimeout(function() {
    e.apply(void 0, n);
  }, t);
}
var Nl = qt(function(e, t, n) {
  return Dl(e, Nn(t) || 0, n);
});
const We = Nl;
function Ul(e, t) {
  return Z(t, function(n) {
    return [n, e[n]];
  });
}
function Gl(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(s) {
    n[++t] = [s, s];
  }), n;
}
var Wl = "[object Map]", Hl = "[object Set]";
function Yl(e) {
  return function(t) {
    var n = xe(t);
    return n == Wl ? xn(t) : n == Hl ? Gl(t) : Ul(t, e(t));
  };
}
var Zl = Yl(Re);
const ee = Zl;
function Xl(e, t) {
  var n = [];
  return Mt(e, function(s, a, r) {
    t(s, a, r) && n.push(s);
  }), n;
}
function Jl(e, t) {
  var n = ne(e) ? On : Xl;
  return n(e, Fe(t));
}
function Ql(e) {
  return e && e.length ? e[0] : void 0;
}
var Kl = Object.prototype, ea = Kl.hasOwnProperty, ta = Ll(function(e, t, n) {
  ea.call(e, n) ? e[n].push(t) : De(e, n, [t]);
});
const He = ta;
function na(e, t) {
  return e > t;
}
var sa = Math.min;
function la(e, t, n) {
  for (var s = n ? Sn : jn, a = e[0].length, r = e.length, u = r, c = Array(r), i = 1 / 0, o = []; u--; ) {
    var _ = e[u];
    u && t && (_ = Z(_, Oe(t))), i = sa(_.length, i), c[u] = !n && (t || a >= 120 && _.length >= 120) ? new Mn(u && _) : void 0;
  }
  _ = e[0];
  var p = -1, y = c[0];
  e:
    for (; ++p < a && o.length < i; ) {
      var v = _[p], d = t ? t(v) : v;
      if (v = n || v !== 0 ? v : 0, !(y ? nt(y, d) : s(o, d, n))) {
        for (u = r; --u; ) {
          var $ = c[u];
          if (!($ ? nt($, d) : s(e[u], d, n)))
            continue e;
        }
        y && y.push(d), o.push(v);
      }
    }
  return o;
}
function aa(e) {
  return Rl(e) ? e : [];
}
var ra = qt(function(e) {
  var t = St(e), n = Z(e, aa);
  return t = typeof t == "function" ? t : void 0, t && n.pop(), n.length && n[0] === e[0] ? la(n, void 0, t) : [];
});
const oa = ra;
function ia(e, t) {
  return t.length < 2 ? e : jt(e, bs(t, 0, -1));
}
function ca(e, t) {
  return Bn(e, t);
}
function ua(e, t) {
  return e === t || An(e, t, Tn(t));
}
function da(e, t) {
  return e < t;
}
function Nt(e, t, n) {
  for (var s = -1, a = e.length; ++s < a; ) {
    var r = e[s], u = t(r);
    if (u != null && (c === void 0 ? u === u && !he(u) : n(u, c)))
      var c = u, i = r;
  }
  return i;
}
function fa(e) {
  return e && e.length ? Nt(e, ue, na) : void 0;
}
function _a(e) {
  return e && e.length ? Nt(e, ue, da) : void 0;
}
function pa(e, t) {
  return t = Bt(t, e), e = ia(e, t), e == null || delete e[Cn(St(t))];
}
function ga(e) {
  return ys(e) ? void 0 : e;
}
var ha = 1, va = 2, ya = 4, ba = ds(function(e, t) {
  var n = {};
  if (e == null)
    return n;
  var s = !1;
  t = Z(t, function(r) {
    return r = Bt(r, e), s || (s = r.length > 1), r;
  }), fe(e, Lt(e), n), s && (n = pe(n, ha | va | ya, ga));
  for (var a = t.length; a--; )
    pa(n, t[a]);
  return n;
});
const Ut = ba;
function $a(e, t) {
  var n = e.length;
  for (e.sort(t); n--; )
    e[n] = e[n].value;
  return e;
}
function ma(e, t) {
  if (e !== t) {
    var n = e !== void 0, s = e === null, a = e === e, r = he(e), u = t !== void 0, c = t === null, i = t === t, o = he(t);
    if (!c && !o && !r && e > t || r && u && i && !c && !o || s && u && i || !n && i || !a)
      return 1;
    if (!s && !r && !o && e < t || o && n && a && !s && !r || c && n && a || !u && a || !i)
      return -1;
  }
  return 0;
}
function ka(e, t, n) {
  for (var s = -1, a = e.criteria, r = t.criteria, u = a.length, c = n.length; ++s < u; ) {
    var i = ma(a[s], r[s]);
    if (i) {
      if (s >= c)
        return i;
      var o = n[s];
      return i * (o == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
function wa(e, t, n) {
  t.length ? t = Z(t, function(r) {
    return ne(r) ? function(u) {
      return jt(u, r.length === 1 ? r[0] : r);
    } : r;
  }) : t = [ue];
  var s = -1;
  t = Z(t, Oe(Fe));
  var a = Pn(e, function(r, u, c) {
    var i = Z(t, function(o) {
      return o(r);
    });
    return { criteria: i, index: ++s, value: r };
  });
  return $a(a, function(r, u) {
    return ka(r, u, n);
  });
}
function za(e, t, n, s) {
  return e == null ? [] : (ne(t) || (t = t == null ? [] : [t]), n = s ? void 0 : n, ne(n) || (n = n == null ? [] : [n]), wa(e, t, n));
}
var xa = Object.defineProperty, Oa = Object.defineProperties, Ma = Object.getOwnPropertyDescriptors, _t = Object.getOwnPropertySymbols, Sa = Object.prototype.hasOwnProperty, ja = Object.prototype.propertyIsEnumerable, pt = (e, t, n) => t in e ? xa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ba = (e, t) => {
  for (var n in t || (t = {}))
    Sa.call(t, n) && pt(e, n, t[n]);
  if (_t)
    for (var n of _t(t))
      ja.call(t, n) && pt(e, n, t[n]);
  return e;
}, Aa = (e, t) => Oa(e, Ma(t));
function P(e, t) {
  var n;
  const s = Qt();
  return mt(() => {
    s.value = e();
  }, Aa(Ba({}, t), {
    flush: (n = t == null ? void 0 : t.flush) != null ? n : "sync"
  })), kt(s);
}
function Me(e) {
  return Kt() ? (en(e), !0) : !1;
}
function H(e) {
  return typeof e == "function" ? e() : l(e);
}
const Ye = typeof window < "u", me = () => {
}, Ve = /* @__PURE__ */ Ta();
function Ta() {
  var e;
  return Ye && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && /* @__PURE__ */ /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
const gt = {
  mounted: "mounted",
  updated: "updated",
  unmounted: "unmounted"
};
function Ca(...e) {
  if (e.length !== 1)
    return tn(...e);
  const t = e[0];
  return typeof t == "function" ? kt(nn(() => ({ get: t, set: me }))) : B(t);
}
function J(e) {
  var t;
  const n = H(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Se = Ye ? window : void 0;
function Pa() {
  const e = B(!1);
  return sn() && Y(() => {
    e.value = !0;
  }), e;
}
function Gt(e) {
  const t = Pa();
  return F(() => (t.value, !!e()));
}
var ht = Object.getOwnPropertySymbols, qa = Object.prototype.hasOwnProperty, Ia = Object.prototype.propertyIsEnumerable, Va = (e, t) => {
  var n = {};
  for (var s in e)
    qa.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && ht)
    for (var s of ht(e))
      t.indexOf(s) < 0 && Ia.call(e, s) && (n[s] = e[s]);
  return n;
};
function Ea(e, t, n = {}) {
  const s = n, { window: a = Se } = s, r = Va(s, ["window"]);
  let u;
  const c = Gt(() => a && "MutationObserver" in a), i = () => {
    u && (u.disconnect(), u = void 0);
  }, o = W(
    () => J(e),
    (p) => {
      i(), c.value && a && p && (u = new MutationObserver(t), u.observe(p, r));
    },
    { immediate: !0 }
  ), _ = () => {
    i(), o();
  };
  return Me(_), {
    isSupported: c,
    stop: _
  };
}
function Ze(e, t, n = {}) {
  const { window: s = Se, initialValue: a = "", observe: r = !1 } = n, u = B(a), c = F(() => {
    var o;
    return J(t) || ((o = s == null ? void 0 : s.document) == null ? void 0 : o.documentElement);
  });
  function i() {
    var o;
    const _ = H(e), p = H(c);
    if (p && s) {
      const y = (o = s.getComputedStyle(p).getPropertyValue(_)) == null ? void 0 : o.trim();
      u.value = y || a;
    }
  }
  return r && Ea(c, i, {
    attributeFilter: ["style", "class"],
    window: s
  }), W(
    [c, () => H(e)],
    i,
    { immediate: !0 }
  ), W(
    u,
    (o) => {
      var _;
      (_ = c.value) != null && _.style && c.value.style.setProperty(H(e), o);
    }
  ), u;
}
var vt = Object.getOwnPropertySymbols, La = Object.prototype.hasOwnProperty, Ra = Object.prototype.propertyIsEnumerable, Fa = (e, t) => {
  var n = {};
  for (var s in e)
    La.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && vt)
    for (var s of vt(e))
      t.indexOf(s) < 0 && Ra.call(e, s) && (n[s] = e[s]);
  return n;
};
function je(e, t, n = {}) {
  const s = n, { window: a = Se } = s, r = Fa(s, ["window"]);
  let u;
  const c = Gt(() => a && "ResizeObserver" in a), i = () => {
    u && (u.disconnect(), u = void 0);
  }, o = F(
    () => Array.isArray(e) ? e.map((y) => J(y)) : [J(e)]
  ), _ = W(
    o,
    (y) => {
      if (i(), c.value && a) {
        u = new ResizeObserver(t);
        for (const v of y)
          v && u.observe(v, r);
      }
    },
    { immediate: !0, flush: "post", deep: !0 }
  ), p = () => {
    i(), _();
  };
  return Me(p), {
    isSupported: c,
    stop: p
  };
}
function Be(e, t = { width: 0, height: 0 }, n = {}) {
  const { window: s = Se, box: a = "content-box" } = n, r = F(() => {
    var i, o;
    return (o = (i = J(e)) == null ? void 0 : i.namespaceURI) == null ? void 0 : o.includes("svg");
  }), u = B(t.width), c = B(t.height);
  return je(
    e,
    ([i]) => {
      const o = a === "border-box" ? i.borderBoxSize : a === "content-box" ? i.contentBoxSize : i.devicePixelContentBoxSize;
      if (s && r.value) {
        const _ = J(e);
        if (_) {
          const p = s.getComputedStyle(_);
          u.value = Number.parseFloat(p.width), c.value = Number.parseFloat(p.height);
        }
      } else if (o) {
        const _ = Array.isArray(o) ? o : [o];
        u.value = _.reduce((p, { inlineSize: y }) => p + y, 0), c.value = _.reduce((p, { blockSize: y }) => p + y, 0);
      } else
        u.value = i.contentRect.width, c.value = i.contentRect.height;
    },
    n
  ), W(
    () => J(e),
    (i) => {
      u.value = i ? t.width : 0, c.value = i ? t.height : 0;
    }
  ), {
    width: u,
    height: c
  };
}
const Xe = /* @__PURE__ */ V({
  __name: "BaseLink",
  props: {
    link: {},
    external: { type: Boolean, default: void 0 }
  },
  setup(e) {
    const t = e, n = P(
      () => t.external ?? /^(https?:\/\/)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&//=]*)$/.test(t.link || "")
    );
    return (s, a) => (g(), R(ln(t.link ? l(n) ? "a" : "RouterLink" : "div"), an(rn(
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
}), Da = /* @__PURE__ */ V({
  __name: "BaseList",
  props: {
    items: {},
    groupBy: {}
  },
  setup(e) {
    const t = e, n = P(
      () => ye(
        ee(He(t.items, t.groupBy ?? "")).map(([s, a]) => [
          s === "undefined" ? "" : s,
          a
        ])
      )
    );
    return (s, a) => (g(), b(O, null, [
      !t.items || t.items.length === 0 ? G(s.$slots, "placeholder", { key: 0 }) : x("", !0),
      (g(!0), b(O, null, A(l(n), (r, u) => (g(), b(O, {
        key: `list-group-${u}`
      }, [
        u ? G(s.$slots, "group", {
          key: 0,
          group: u,
          items: r
        }) : x("", !0),
        (g(!0), b(O, null, A(r, (c, i) => G(s.$slots, "default", {
          key: `list-item-${i}`,
          item: c,
          index: i
        })), 128))
      ], 64))), 128))
    ], 64));
  }
}), Na = ["width", "height"], Ua = /* @__PURE__ */ V({
  __name: "BasePoly",
  props: {
    height: {},
    width: {}
  },
  setup(e) {
    const t = e;
    return (n, s) => (g(), b("svg", {
      class: f(n.$style["poly-wrapper"]),
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
    ], 10, Na));
  }
}), Ga = {
  "poly-wrapper": "_poly-wrapper_14erz_1"
}, L = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, a] of t)
    n[s] = a;
  return n;
}, Wa = {
  $style: Ga
}, Ae = /* @__PURE__ */ L(Ua, [["__cssModules", Wa], ["__scopeId", "data-v-ac9d4bad"]]), Ha = /* @__PURE__ */ V({
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
    })), (n, s) => (g(), R(Xe, {
      link: t.link,
      class: f([n.$style["badge-container"], n.$style[t.variant], n.$style[`color-${t.color}`]])
    }, {
      default: q(() => [
        t.label ? (g(), b("label", {
          key: 0,
          class: f(n.$style["badge-label"])
        }, [
          t.delimiter && t.variant === "capsule" ? (g(!0), b(O, { key: 0 }, A(t.label.split(t.delimiter), (a, r) => (g(), b("span", { key: r }, M(a), 1))), 128)) : (g(), b(O, { key: 1 }, [
            on(M(t.label), 1)
          ], 64))
        ], 2)) : x("", !0),
        t.content ? (g(), b("p", {
          key: 1,
          class: f(n.$style["badge-content"])
        }, M(t.content), 3)) : x("", !0)
      ]),
      _: 1
    }, 8, ["link", "class"]));
  }
}), Ya = "_tab_1nyqw_16", Za = "_capsule_1nyqw_121", Xa = {
  "badge-container": "_badge-container_1nyqw_1",
  "color-default": "_color-default_1nyqw_8",
  tab: Ya,
  "color-cyan": "_color-cyan_1nyqw_19",
  "color-blue": "_color-blue_1nyqw_36",
  "color-green": "_color-green_1nyqw_53",
  "color-orange": "_color-orange_1nyqw_70",
  "color-red": "_color-red_1nyqw_87",
  "color-purple": "_color-purple_1nyqw_104",
  capsule: Za,
  "badge-label": "_badge-label_1nyqw_128",
  "badge-content": "_badge-content_1nyqw_128"
}, Ja = {
  $style: Xa
}, gu = /* @__PURE__ */ L(Ha, [["__cssModules", Ja], ["__scopeId", "data-v-fd756b25"]]), Qa = /* @__PURE__ */ V({
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
    const n = e, { triggered: s, onTrigger: a } = de((r) => {
      n.disabled ? (r.preventDefault(), r.stopPropagation()) : t("click", r);
    });
    return (r, u) => (g(), R(Xe, Le({
      link: n.link,
      class: [
        r.$style["button-container"],
        r.$style.behavior,
        r.$style[n.variant],
        r.$style[n.level],
        r.$style[n.size],
        n.disabled ? [r.$style.disabled] : [r.$style.clickable],
        {
          [r.$style.clicked]: n.clicked || l(s)()
        }
      ],
      "aria-disabled": n.disabled,
      "aria-label": n.label,
      onClick: l(a)
    }, n.disabled ? { disabled: "", ...r.$attrs } : r.$attrs, {
      role: "button",
      tabindex: "0"
    }), {
      default: q(() => [
        n.label ? (g(), b("span", {
          key: 0,
          class: f([r.$style["button-content"]])
        }, M(n.label), 3)) : x("", !0),
        n.icon ? (g(), b("span", {
          key: 1,
          class: f([r.$style["button-icon"]])
        }, [
          I(l(X), {
            icon: n.icon
          }, null, 8, ["icon"])
        ], 2)) : x("", !0)
      ]),
      _: 1
    }, 16, ["link", "class", "aria-disabled", "aria-label", "onClick"]));
  }
}), Ka = "_behavior_rnzkq_1", er = "_clickable_rnzkq_1", tr = "_disabled_rnzkq_4", nr = "_draggable_rnzkq_7", sr = "_loading_rnzkq_10", lr = "_rounded_rnzkq_14", ar = "_secondary_rnzkq_14", rr = "_rect_rnzkq_15", or = "_square_rnzkq_16", ir = "_circle_rnzkq_18", cr = "_clicked_rnzkq_58", ur = "_small_rnzkq_309", dr = "_large_rnzkq_313", fr = "_text_rnzkq_17", _r = {
  behavior: Ka,
  clickable: er,
  disabled: tr,
  draggable: nr,
  loading: sr,
  "button-container": "_button-container_rnzkq_14",
  rounded: lr,
  secondary: ar,
  rect: rr,
  square: or,
  "text-square": "_text-square_rnzkq_17",
  circle: ir,
  "extendable-rect": "_extendable-rect_rnzkq_26",
  clicked: cr,
  "button-icon": "_button-icon_rnzkq_226",
  "button-content": "_button-content_rnzkq_256",
  small: ur,
  large: dr,
  text: fr
}, pr = {
  $style: _r
}, ke = /* @__PURE__ */ L(Qa, [["__cssModules", pr], ["__scopeId", "data-v-c1af530e"]]), gr = /* @__PURE__ */ V({
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
    wt((a) => ({
      "1dbc842c": t.radius
    }));
    const { triggered: n, onTrigger: s } = de((a) => {
      t.clickable || a.preventDefault();
    });
    return (a, r) => (g(), R(Xe, {
      ref: "wrapperRef$",
      link: t.link,
      class: f([
        a.$style["card-container"],
        a.$style.behavior,
        a.$style[t.variant],
        a.$style[`color-${t.color}`],
        a.$style[`stroke-${t.strokeWeight}`],
        a.$style[`purpose-${t.purpose}`],
        {
          [a.$style.clickable]: t.link || t.clickable,
          [a.$style["has-stroke"]]: t.hasStroke,
          [a.$style.clicked]: l(n)() && t.clickable
        }
      ]),
      onClick: l(s)
    }, {
      default: q(() => [
        G(a.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["link", "class", "onClick"]));
  }
}), hr = "_behavior_rvqmg_1", vr = "_clickable_rvqmg_1", yr = "_disabled_rvqmg_4", br = "_draggable_rvqmg_7", $r = "_loading_rvqmg_10", mr = "_metallic_rvqmg_14", kr = "_flat_rvqmg_14", wr = "_clicked_rvqmg_22", zr = "_dash_rvqmg_92", xr = {
  behavior: hr,
  clickable: vr,
  disabled: yr,
  draggable: br,
  loading: $r,
  "card-container": "_card-container_rvqmg_14",
  "color-default": "_color-default_rvqmg_14",
  metallic: mr,
  "has-stroke": "_has-stroke_rvqmg_14",
  flat: kr,
  "color-cyan": "_color-cyan_rvqmg_14",
  "color-blue": "_color-blue_rvqmg_14",
  "color-green": "_color-green_rvqmg_14",
  "color-orange": "_color-orange_rvqmg_14",
  "color-red": "_color-red_rvqmg_14",
  clicked: wr,
  dash: zr,
  "stroke-bold": "_stroke-bold_rvqmg_399",
  "stroke-normal": "_stroke-normal_rvqmg_402",
  "stroke-thin": "_stroke-thin_rvqmg_405",
  "purpose-box": "_purpose-box_rvqmg_408",
  "purpose-container": "_purpose-container_rvqmg_412"
}, Or = {
  $style: xr
}, Q = /* @__PURE__ */ L(gr, [["__cssModules", Or], ["__scopeId", "data-v-d941fd1e"]]), Te = ({
  type: e,
  axises: t,
  data: n
}) => {
  const s = cn({
    datasets: [],
    axises: {}
  }), a = {
    datasets: P(() => s.datasets),
    axises: P(() => s.axises)
  }, r = (i) => {
    var o;
    return !Array.isArray(i) || i.length === 0 ? [] : Array.isArray(i) && ((o = i[0]) != null && o.label) ? i : [
      {
        label: "Data",
        series: i
      }
    ];
  }, u = (i, o) => o.map((_) => ({
    data: _,
    ...ye(
      ee(i).filter(([, p]) => !re(p)).map(([p, y]) => {
        const v = y.selector ? U(_, y.selector) : null, d = y.accessor ? be(_, y.accessor) : v;
        return [
          p,
          {
            normalized: Number(
              y.type === "number" ? parseFloat(String(v)) : y.type === "date" ? new Date(Number(v)) : v
            ),
            value: d
          }
        ];
      })
    )
  })), c = (i, o, _) => {
    const p = r(_).map((d) => ({
      ...d,
      label: be(d, d.label ?? ""),
      series: u(o, d.series)
    })), y = p.flatMap((d) => d.series), v = ye(
      ee(o).filter(([, d]) => !re(d)).map(([d, $]) => {
        const m = At(se(y, `${d}.${$.type === "string" ? "value" : "normalized"}`)), k = Number($.min === "auto" ? _a(m) : $.min ?? 0), E = Number(
          $.max === "auto" ? fa(m) ?? 0 : $.max ?? m.length - (/radar|doughnut/.test(i ?? "") ? 0 : 1)
        );
        return [
          d,
          {
            ...$,
            min: k,
            max: E,
            metrics: $.type === "string" ? m.map((T, N) => ({
              normalized: N / (E - k),
              value: T
            })) : Array(w.clamp(w.ceil((E - k) / ($.step ?? 1)) + 1, 0, 1 / 0)).fill(0).map((T, N) => ({
              normalized: N / w.ceil((E - k) / ($.step ?? 1)),
              value: k + ($.step ?? 1) * N
            }))
          }
        ];
      })
    );
    return v && ee(v).forEach(([d, $]) => {
      $.type === "string" ? p.forEach((m) => {
        m.series.forEach((k) => {
          k[d].normalized = se($.metrics, "value").indexOf(k[d].value) / (($.metrics ?? []).length - (/radar|doughnut/.test(i ?? "") ? 0 : 1));
        });
      }) : p.forEach((m) => {
        m.series.forEach((k) => {
          k[d].normalized = (Number(k[d].normalized ?? 0) - Number($.min)) / (Number($.max) - Number($.min));
        });
      });
    }), {
      datasets: p,
      axises: v
    };
  };
  return mt(() => {
    const i = c(l(e), l(t), l(n));
    s.datasets = i.datasets, s.axises = i.axises;
  }), {
    ...a
  };
}, Mr = (e) => (ie("data-v-fefd0601"), e = e(), ce(), e), Sr = ["cx", "cy", "r", "stroke-dashoffset", "stroke-dasharray"], jr = ["x", "y"], Br = /* @__PURE__ */ Mr(() => /* @__PURE__ */ h("hr", null, null, -1)), Ar = { id: "chart-content-clip" }, Tr = ["cx", "cy", "r"], Cr = { "clip-path": "url(#chart-content-clip)" }, Pr = ["height", "width", "x", "y"], qr = /* @__PURE__ */ V({
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
    const t = e, n = B(), { width: s, height: a } = Be(n), { axises: r, datasets: u } = Te({
      type: "doughnut",
      data: t.datasets,
      axises: t.axises
    }), c = P(
      () => w.clamp(
        w.min(s.value - t.options.offset.x, a.value - t.options.offset.y) / 2,
        0,
        1 / 0
      )
    ), i = P(() => t.options.round ? 30 : 15), o = P(() => c.value * 2 * w.PI), _ = P(() => ({
      x: s.value / 2,
      y: a.value / 2
    })), p = P(
      () => u.value.map((v) => v.series.reduce((d, $) => d + $.y.normalized, 0))
    ), y = P(
      () => u.value.map((v, d) => ({
        ...v,
        series: v.series.map(($) => ({
          ...$,
          y: {
            ...$.y,
            normalized: w.clamp(
              $.y.normalized / p.value[d] - i.value / o.value,
              0,
              1
            )
          }
        })).filter(($) => $.y.normalized > i.value / o.value / 2).map(($, m, k) => ({
          ...$,
          y: {
            ...$.y,
            normalized: $.y.normalized / k.reduce((E, T) => E + T.y.normalized, 0)
          }
        })).map(($, m, k) => ({
          ...$,
          y: {
            ...$.y,
            normalized: w.clamp(
              $.y.normalized / k.reduce((E, T) => E + T.y.normalized, 0) - i.value / o.value,
              0,
              1
            )
          }
        })).map(($, m, k) => ({
          ...$,
          y: {
            ...$.y,
            offset: k.slice(0, m).reduce((E, T) => E + T.y.normalized, 0)
          }
        })).map(($, m) => ({
          ...$,
          x: {
            ...$.x,
            label: w.cos(
              w.rad(
                ($.y.offset + $.y.normalized / 2 + i.value / o.value * m) * 360 - 90
              )
            )
          },
          y: {
            ...$.y,
            label: w.sin(
              w.rad(
                ($.y.offset + $.y.normalized / 2 + i.value / o.value * m) * 360 - 90
              )
            )
          }
        }))
      }))
    );
    return (v, d) => (g(), b("div", {
      ref_key: "wrapperRef$",
      ref: n,
      class: f(v.$style["chart-container"])
    }, [
      I(Ae, {
        height: l(a),
        width: l(s)
      }, {
        path: q(() => [
          h("g", {
            class: f([v.$style["chart-group-plots"]])
          }, [
            (g(!0), b(O, null, A(l(y), ($) => (g(), b(O, {
              key: $.label
            }, [
              (g(!0), b(O, null, A($.series, (m, k) => (g(), b("g", {
                key: `plot-${k}`,
                class: f(v.$style["chart-area"])
              }, [
                h("circle", {
                  cx: l(_).x,
                  cy: l(_).y,
                  r: l(c),
                  "stroke-dashoffset": m.y.offset * l(o) * -1 - l(i) * k + 0.25 * l(o),
                  "stroke-dasharray": `${m.y.normalized * l(o)} ${(1 - m.y.normalized) * l(o)}`,
                  class: f([
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
                }, null, 10, Sr),
                (g(), b("foreignObject", {
                  x: l(_).x + l(c) * m.x.label - 260 * +(m.x.label < 0),
                  y: l(_).y + l(c) * m.y.label - 240 * +(m.y.label < 0),
                  height: "240",
                  width: "260",
                  class: f([v.$style["chart-area"], v.$style["legend-container"]])
                }, [
                  I(Q, {
                    class: f([v.$style["chart-area"], v.$style["legend-wrapper"]]),
                    radius: "var(--agh-ref-border-radius-500)"
                  }, {
                    default: q(() => [
                      t.options.title ? (g(), b(O, { key: 0 }, [
                        h("h1", {
                          class: f([v.$style["chart-area"], v.$style["legend-title"], v.$style.doughnut])
                        }, [
                          h("span", null, M(m.x.value), 1)
                        ], 2),
                        Br
                      ], 64)) : x("", !0),
                      (g(!0), b(O, null, A(l(r), (E, T) => (g(), b(O, { key: T }, [
                        !/(x)/.test(T) && E && m[T] ? (g(), b("div", {
                          key: 0,
                          class: f([
                            v.$style["chart-area"],
                            v.$style["legend-group"],
                            v.$style.doughnut
                          ])
                        }, [
                          h("label", {
                            class: f([v.$style["chart-area"], v.$style["legend-label"]])
                          }, M(E.label), 3),
                          h("p", {
                            class: f([v.$style["chart-area"], v.$style["legend-value"]])
                          }, M(m[T].value), 3)
                        ], 2)) : x("", !0)
                      ], 64))), 128))
                    ]),
                    _: 2
                  }, 1032, ["class", "radius"])
                ], 10, jr))
              ], 2))), 128))
            ], 64))), 128))
          ], 2),
          h("clipPath", Ar, [
            h("circle", {
              cx: l(_).x,
              cy: l(_).y,
              r: l(c) - 10
            }, null, 8, Tr)
          ]),
          h("g", Cr, [
            (g(), b("foreignObject", {
              class: f(v.$style["chart-content-wrapper"]),
              height: l(c) * 2,
              width: l(c) * 2,
              x: l(_).x - l(c),
              y: l(_).y - l(c)
            }, [
              G(v.$slots, "default", {}, void 0, !0)
            ], 10, Pr))
          ])
        ]),
        _: 3
      }, 8, ["height", "width"])
    ], 2));
  }
}), Ir = "_behavior_pzvhi_1", Vr = "_clickable_pzvhi_1", Er = "_disabled_pzvhi_4", Lr = "_draggable_pzvhi_7", Rr = "_loading_pzvhi_10", Fr = "_path_pzvhi_24", Dr = "_radar_pzvhi_29", Nr = "_label_pzvhi_32", Ur = "_plot_pzvhi_85", Gr = "_point_pzvhi_85", Wr = "_doughnut_pzvhi_96", Hr = "_bg_pzvhi_102", Yr = "_round_pzvhi_106", Zr = "_line_pzvhi_119", Xr = {
  behavior: Ir,
  clickable: Vr,
  disabled: Er,
  draggable: Lr,
  loading: Rr,
  "chart-container": "_chart-container_pzvhi_14",
  "chart-axis": "_chart-axis_pzvhi_24",
  path: Fr,
  radar: Dr,
  label: Nr,
  "font-align--center": "_font-align--center_pzvhi_45",
  "font-align--right": "_font-align--right_pzvhi_48",
  "font-align--left": "_font-align--left_pzvhi_51",
  "box-align--center": "_box-align--center_pzvhi_54",
  "box-align--left": "_box-align--left_pzvhi_57",
  "box-align--right": "_box-align--right_pzvhi_60",
  "chart-group-plots": "_chart-group-plots_pzvhi_67",
  "chart-area": "_chart-area_pzvhi_67",
  plot: Ur,
  point: Gr,
  doughnut: Wr,
  "legend-container": "_legend-container_pzvhi_96",
  bg: Hr,
  round: Yr,
  line: Zr,
  "legend-wrapper": "_legend-wrapper_pzvhi_147",
  "legend-group": "_legend-group_pzvhi_158",
  "legend-value": "_legend-value_pzvhi_166",
  "legend-label": "_legend-label_pzvhi_169",
  "legend-title": "_legend-title_pzvhi_173"
}, Jr = {
  $style: Xr
}, hu = /* @__PURE__ */ L(qr, [["__cssModules", Jr], ["__scopeId", "data-v-fefd0601"]]), Qr = (e) => (ie("data-v-7ca4eb50"), e = e(), ce(), e), Kr = ["d"], eo = ["x", "y", "text-anchor"], to = ["x", "y"], no = ["d"], so = ["cx", "cy"], lo = ["cx", "cy"], ao = ["x", "y"], ro = /* @__PURE__ */ Qr(() => /* @__PURE__ */ h("hr", null, null, -1)), oo = /* @__PURE__ */ V({
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
    const t = e, n = B(), { width: s, height: a } = Be(n), { axises: r, datasets: u } = Te({
      type: "line",
      data: te(t).datasets,
      axises: te(t).axises
    }), c = P(
      () => {
        var o, _, p, y, v, d;
        return (_ = (o = r.value) == null ? void 0 : o.x) != null && _.metrics && ((y = (p = r.value) == null ? void 0 : p.y) != null && y.metrics) && a.value && a.value - t.options.offset.y > 0 && s.value && s.value - t.options.offset.x > 0 ? `
  M ${t.options.offset.x} 0
  L ${t.options.offset.x} ${a.value - t.options.offset.y}
  L ${s.value} ${a.value - t.options.offset.y}
  ${(v = t.options.grid) != null && v.includes("x") ? `${r.value.x.metrics.map(
          ($) => `
              M ${$.normalized * (s.value - t.options.offset.x) + t.options.offset.x} 0
              V ${a.value - t.options.offset.y}
            `
        ).join("")}` : ""}
  ${(d = t.options.grid) != null && d.includes("y") ? `${r.value.y.metrics.map(
          ($) => `
              M ${t.options.offset.x} ${(1 - $.normalized) * (a.value - t.options.offset.y)}
              H ${s.value}
            `
        ).join(`
`)}` : ""}
` : "";
      }
    ), i = P(
      () => c.value && u ? u.value.map((o) => ({
        ...o,
        path: `
            ${o.series.map(
          (_, p) => p === 0 ? `M ${_.x.normalized * (s.value - t.options.offset.x) + t.options.offset.x} ${(1 - _.y.normalized) * (a.value - t.options.offset.y)}` : t.options.curve === "smooth" ? p === 1 ? `C ${o.series[p - 1].x.normalized * (s.value - t.options.offset.x) + t.options.offset.x + s.value / o.series.length * t.options.radius} ${(1 - o.series[p - 1].y.normalized) * (a.value - t.options.offset.y)} ${_.x.normalized * (s.value - t.options.offset.x) + t.options.offset.x - s.value / o.series.length * t.options.radius} ${(1 - _.y.normalized) * (a.value - t.options.offset.y)} ${_.x.normalized * (s.value - t.options.offset.x) + t.options.offset.x} ${(1 - _.y.normalized) * (a.value - t.options.offset.y)}` : `S ${_.x.normalized * (s.value - t.options.offset.x) + t.options.offset.x - s.value / o.series.length * t.options.radius} ${(1 - _.y.normalized) * (a.value - t.options.offset.y)} ${_.x.normalized * (s.value - t.options.offset.x) + t.options.offset.x} ${(1 - _.y.normalized) * (a.value - t.options.offset.y)}` : `L ${_.x.normalized * (s.value - t.options.offset.x) + t.options.offset.x} ${(1 - _.y.normalized) * (a.value - t.options.offset.y)}`
        ).join(`
`)}`
      })) : []
    );
    return (o, _) => (g(), b("div", {
      ref_key: "wrapperRef$",
      ref: n,
      class: f(o.$style["chart-container"])
    }, [
      I(Ae, {
        height: l(a),
        width: l(s)
      }, {
        defs: q(() => []),
        path: q(() => [
          h("g", {
            id: "chart-group-axises",
            class: f([o.$style["chart-group-axises"]])
          }, [
            h("path", {
              d: l(c),
              class: f([o.$style["chart-axis"], o.$style.line, o.$style.path])
            }, null, 10, Kr)
          ], 2),
          l(r) && l(s) && l(a) ? (g(), b("g", {
            key: 0,
            class: f([o.$style["chart-group-axises-label"]])
          }, [
            l(r).x && l(r).x.metrics ? (g(!0), b(O, { key: 0 }, A(l(r).x.metrics, (p, y) => (g(), b("text", {
              key: `axis-x--${y}`,
              x: p.normalized * (l(s) - t.options.offset.x) + t.options.offset.x,
              y: l(a) - t.options.offset.y + 20,
              class: f([o.$style["chart-axis"], o.$style.label]),
              "text-anchor": y === 0 ? "start" : y === l(r).x.metrics.length - 1 ? "end" : "middle"
            }, M(p.value), 11, eo))), 128)) : x("", !0),
            l(r).y && l(r).y.metrics ? (g(!0), b(O, { key: 1 }, A(l(r).y.metrics, (p, y) => (g(), b("text", {
              key: `axis-y--${y}`,
              x: t.options.offset.x - 10,
              y: (1 - p.normalized) * (l(a) - t.options.offset.y) + 5,
              class: f([o.$style["chart-axis"], o.$style.label]),
              "text-anchor": "end"
            }, M(p.value), 11, to))), 128)) : x("", !0)
          ], 2)) : x("", !0),
          h("g", {
            class: f([o.$style["chart-group-plots"]])
          }, [
            (g(!0), b(O, null, A(l(i), (p) => (g(), b("g", {
              key: p.label,
              class: f([o.$style["chart-area"], o.$style.line, o.$style.plot])
            }, [
              h("path", {
                d: p.path
              }, null, 8, no)
            ], 2))), 128)),
            (g(!0), b(O, null, A(l(u), (p) => (g(), b(O, null, [
              (g(!0), b(O, null, A(p.series, (y, v) => (g(), b("g", {
                key: `chart-plot-${p.label}-plot-${v}`,
                class: f(o.$style["chart-area"])
              }, [
                h("circle", {
                  class: f([
                    o.$style.behavior,
                    o.$style["chart-area"],
                    o.$style.point,
                    o.$style.plot,
                    o.$style.clickable
                  ]),
                  cx: y.x.normalized * (l(s) - t.options.offset.x) + t.options.offset.x,
                  cy: (1 - y.y.normalized) * (l(a) - t.options.offset.y),
                  r: "50"
                }, null, 10, so),
                h("circle", {
                  class: f([o.$style["chart-area"], o.$style.point, o.$style.plot]),
                  cx: y.x.normalized * (l(s) - t.options.offset.x) + t.options.offset.x,
                  cy: (1 - y.y.normalized) * (l(a) - t.options.offset.y),
                  r: "5"
                }, null, 10, lo),
                (g(), b("foreignObject", {
                  x: y.x.normalized * (l(s) - t.options.offset.x) + t.options.offset.x - 140,
                  y: (1 - y.y.normalized) * (l(a) - t.options.offset.y) - (y.y.normalized >= 0.5 ? 0 : 220),
                  height: "220",
                  width: "280",
                  class: f([o.$style["chart-area"], o.$style["legend-container"]])
                }, [
                  I(Q, {
                    class: f([o.$style["chart-area"], o.$style["legend-wrapper"]]),
                    radius: "var(--agh-ref-border-radius-500)"
                  }, {
                    default: q(() => [
                      t.options.title ? (g(), b(O, { key: 0 }, [
                        h("h1", {
                          class: f([o.$style["chart-area"], o.$style["legend-title"]])
                        }, M(l(be)(y.data, t.options.title)), 3),
                        ro
                      ], 64)) : x("", !0),
                      (g(!0), b(O, null, A(l(r), (d, $) => (g(), b(O, { key: $ }, [
                        d && y[$] ? (g(), b("div", {
                          key: 0,
                          class: f([o.$style["chart-area"], o.$style["legend-group"]])
                        }, [
                          h("label", {
                            class: f([o.$style["chart-area"], o.$style["legend-label"]])
                          }, M(d.label), 3),
                          h("p", {
                            class: f([o.$style["chart-area"], o.$style["legend-value"]])
                          }, M(y[$].value), 3)
                        ], 2)) : x("", !0)
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
}), io = "_behavior_1sfnc_1", co = "_clickable_1sfnc_1", uo = "_disabled_1sfnc_4", fo = "_draggable_1sfnc_7", _o = "_loading_1sfnc_10", po = "_path_1sfnc_24", go = "_radar_1sfnc_29", ho = "_label_1sfnc_32", vo = "_plot_1sfnc_85", yo = "_point_1sfnc_85", bo = "_doughnut_1sfnc_96", $o = "_bg_1sfnc_102", mo = "_round_1sfnc_106", ko = "_line_1sfnc_119", wo = {
  behavior: io,
  clickable: co,
  disabled: uo,
  draggable: fo,
  loading: _o,
  "chart-container": "_chart-container_1sfnc_14",
  "chart-axis": "_chart-axis_1sfnc_24",
  path: po,
  radar: go,
  label: ho,
  "font-align--center": "_font-align--center_1sfnc_45",
  "font-align--right": "_font-align--right_1sfnc_48",
  "font-align--left": "_font-align--left_1sfnc_51",
  "box-align--center": "_box-align--center_1sfnc_54",
  "box-align--left": "_box-align--left_1sfnc_57",
  "box-align--right": "_box-align--right_1sfnc_60",
  "chart-group-plots": "_chart-group-plots_1sfnc_67",
  "chart-area": "_chart-area_1sfnc_67",
  plot: vo,
  point: yo,
  doughnut: bo,
  "legend-container": "_legend-container_1sfnc_96",
  bg: $o,
  round: mo,
  line: ko,
  "legend-wrapper": "_legend-wrapper_1sfnc_147",
  "legend-group": "_legend-group_1sfnc_158",
  "legend-value": "_legend-value_1sfnc_166",
  "legend-label": "_legend-label_1sfnc_169",
  "legend-title": "_legend-title_1sfnc_173"
}, zo = {
  $style: wo
}, vu = /* @__PURE__ */ L(oo, [["__cssModules", zo], ["__scopeId", "data-v-7ca4eb50"]]), xo = /* @__PURE__ */ V({
  __name: "MatrixChart",
  props: {
    axises: {},
    datasets: {},
    options: {}
  },
  setup(e) {
    const t = e, { axises: n, datasets: s } = Te({
      type: "matrix",
      data: te(t).datasets,
      axises: te(t).axises
    }), a = P(() => n.value.y.step), r = F(
      () => s.value[0].series.map((p) => ({
        ...p,
        y: {
          ...p.y,
          normalized: w.round(p.y.normalized * a.value)
        }
      }))
    ), u = B(), c = B(), i = D(""), o = () => {
      if (u.value && u.value.firstElementChild) {
        const { firstElementChild: p, clientWidth: y } = u.value, v = y, d = p == null ? void 0 : p.clientWidth;
        c.value = w.floor(v / d);
      }
    }, _ = () => {
      u.value && (i.set(
        Ze("--matrix-border-width", u, {
          observe: !0
        }).value
      ), i() || We(_, 1));
    };
    return je(u, o, { window }), Y(() => {
      _(), o();
    }), (p, y) => (g(), b("div", {
      ref_key: "containerRef$",
      ref: u,
      class: f(p.$style["chart-container"])
    }, [
      (g(!0), b(O, null, A(r.value, (v, d) => (g(), b("div", {
        class: f([
          p.$style["matrix-container"],
          c.value && d % c.value !== 0 && p.$style["matrix-container-border"]
        ]),
        key: d
      }, [
        h("label", {
          class: f(p.$style.label)
        }, M(v.x.value), 3),
        h("div", {
          class: f(p.$style["box-container"])
        }, [
          (g(!0), b(O, null, A(l(a), ($) => (g(), b("div", {
            class: f([
              p.$style.square,
              $ <= v.y.normalized ? p.$style["square-cyan"] : p.$style["square-grayscale"]
            ]),
            key: $
          }, null, 2))), 128))
        ], 2)
      ], 2))), 128))
    ], 2));
  }
}), Oo = "_behavior_1k1jv_1", Mo = "_clickable_1k1jv_1", So = "_disabled_1k1jv_4", jo = "_draggable_1k1jv_7", Bo = "_loading_1k1jv_10", Ao = "_path_1k1jv_24", To = "_radar_1k1jv_29", Co = "_label_1k1jv_32", Po = "_plot_1k1jv_85", qo = "_point_1k1jv_85", Io = "_doughnut_1k1jv_96", Vo = "_bg_1k1jv_102", Eo = "_round_1k1jv_106", Lo = "_line_1k1jv_119", Ro = "_square_1k1jv_242", Fo = {
  behavior: Oo,
  clickable: Mo,
  disabled: So,
  draggable: jo,
  loading: Bo,
  "chart-container": "_chart-container_1k1jv_14",
  "chart-axis": "_chart-axis_1k1jv_24",
  path: Ao,
  radar: To,
  label: Co,
  "font-align--center": "_font-align--center_1k1jv_45",
  "font-align--right": "_font-align--right_1k1jv_48",
  "font-align--left": "_font-align--left_1k1jv_51",
  "box-align--center": "_box-align--center_1k1jv_54",
  "box-align--left": "_box-align--left_1k1jv_57",
  "box-align--right": "_box-align--right_1k1jv_60",
  "chart-group-plots": "_chart-group-plots_1k1jv_67",
  "chart-area": "_chart-area_1k1jv_67",
  plot: Po,
  point: qo,
  doughnut: Io,
  "legend-container": "_legend-container_1k1jv_96",
  bg: Vo,
  round: Eo,
  line: Lo,
  "legend-wrapper": "_legend-wrapper_1k1jv_147",
  "legend-group": "_legend-group_1k1jv_158",
  "legend-value": "_legend-value_1k1jv_166",
  "legend-label": "_legend-label_1k1jv_169",
  "legend-title": "_legend-title_1k1jv_173",
  "matrix-container": "_matrix-container_1k1jv_220",
  "matrix-container-border": "_matrix-container-border_1k1jv_228",
  "box-container": "_box-container_1k1jv_238",
  square: Ro,
  "square-cyan": "_square-cyan_1k1jv_247",
  "square-grayscale": "_square-grayscale_1k1jv_250"
}, Do = {
  $style: Fo
}, yu = /* @__PURE__ */ L(xo, [["__cssModules", Do], ["__scopeId", "data-v-69fb85cf"]]), No = ["id"], Uo = ["stdDeviation"], Go = /* @__PURE__ */ h("feColorMatrix", {
  in: "blur",
  mode: "matrix",
  values: "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10",
  result: "mask"
}, null, -1), Wo = /* @__PURE__ */ h("feComposite", {
  in: "SourceGraphic",
  in2: "mask",
  operator: "in"
}, null, -1), yt = /* @__PURE__ */ V({
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
      }, null, 8, Uo),
      Go,
      Wo
    ], 8, No));
  }
}), Ho = (e) => (ie("data-v-5b47bbf2"), e = e(), ce(), e), Yo = ["innerHTML"], Zo = { id: "chart-area-bg-mask" }, Xo = ["d"], Jo = ["d"], Qo = ["d"], Ko = ["x", "y", "height", "width"], ei = ["d"], ti = ["cx", "cy"], ni = ["cx", "cy"], si = ["x", "y"], li = /* @__PURE__ */ Ho(() => /* @__PURE__ */ h("hr", null, null, -1)), ai = /* @__PURE__ */ V({
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
    const t = e, n = B(), { width: s, height: a } = Be(n), { axises: r, datasets: u } = Te({
      type: "radar",
      data: te(t).datasets,
      axises: te(t).axises
    }), c = P(
      () => w.clamp(
        w.min(s.value - t.options.offset.x, a.value - t.options.offset.y) / 2,
        0,
        1 / 0
      )
    ), i = P(() => ({
      x: s.value / 2,
      y: a.value / 2
    })), o = F(
      () => {
        var d, $;
        return c.value > 0 && (($ = (d = r.value) == null ? void 0 : d.x) != null && $.metrics) ? `
      ${r.value.x.metrics.map(
          (m, k) => `${k === 0 ? "M" : "L"} ${i.value.x + c.value * w.cos(w.rad(m.normalized * 360 - 90))} ${i.value.y + c.value * w.sin(w.rad(m.normalized * 360 - 90))}`
        ).join(" ")} Z
      ` : "";
      }
    ), _ = F(
      () => o.value && u.value ? u.value.map((d) => ({
        ...d,
        path: `${d.series.map(
          ($, m) => `${m === 0 ? "M" : "L"} ${i.value.x + c.value * $.y.normalized * w.cos(w.rad($.x.normalized * 360 - 90))} ${i.value.y + c.value * $.y.normalized * w.sin(w.rad($.x.normalized * 360 - 90))}`
        ).join(" ")} Z`
      })) : []
    ), p = P(
      () => c.value > 0 && r.value.x.metrics ? `M ${i.value.x} ${i.value.y}
      ${r.value.x.metrics.map(
        (d) => `L ${i.value.x + c.value * w.cos(w.rad(d.normalized * 360 - 90))} ${i.value.y + c.value * w.sin(w.rad(d.normalized * 360 - 90))}
            M ${i.value.x} ${i.value.y}`
      ).join(`
`)}
      Z` : ""
    ), y = D(""), v = () => {
      n.value && (y.set(
        Ze("--chart-bg-fill-svg", n, {
          observe: !0
        }).value
      ), y() || We(v, 1));
    };
    return Y(() => {
      v();
    }), (d, $) => (g(), b("div", {
      ref_key: "wrapperRef$",
      ref: n,
      class: f(d.$style["chart-container"])
    }, [
      I(Ae, {
        height: l(a),
        width: l(s)
      }, {
        defs: q(() => [
          I(yt, {
            id: "chart-area-bg-round",
            radius: 6
          }),
          I(yt, {
            id: "chart-area-plot-round",
            radius: 3
          }),
          h("g", {
            innerHTML: l(y)()
          }, null, 8, Yo),
          h("mask", Zo, [
            h("path", {
              d: o.value,
              class: f([
                d.$style["chart-area"],
                d.$style.radar,
                d.$style.bg,
                {
                  [d.$style.round]: t.options.round
                }
              ]),
              fill: "#fff"
            }, null, 10, Xo)
          ])
        ]),
        path: q(() => [
          h("path", {
            d: o.value,
            class: f([
              d.$style["chart-area"],
              d.$style.radar,
              d.$style.bg,
              {
                [d.$style.round]: t.options.round
              }
            ])
          }, null, 10, Jo),
          h("g", {
            id: "chart-group-axises",
            class: f([d.$style["chart-group-axises"]]),
            mask: "url(#chart-area-bg-mask)"
          }, [
            h("path", {
              d: l(p),
              class: f([d.$style["chart-axis"], d.$style.radar, d.$style.path])
            }, null, 10, Qo)
          ], 2),
          l(r) ? (g(), b("g", {
            key: 0,
            class: f([d.$style["chart-group-axises-label"]])
          }, [
            (g(!0), b(O, null, A(l(r).x.metrics, (m) => (g(), b("foreignObject", {
              key: m.value,
              x: l(i).x + l(c) * l(w).cos(l(w).rad(m.normalized * 360 - 90)) - (m.normalized % 0.5 === 0 ? l(c) / 2 : m.normalized > 0.5 ? l(c) : 0),
              y: l(i).y + l(c) * 1.1 * l(w).sin(l(w).rad(m.normalized * 360 - 90)) - l(c) / 6,
              height: l(c) / 3,
              width: l(c),
              class: f([d.$style["chart-axis"], d.$style.radar, d.$style["label-wrapper"]])
            }, [
              h("p", {
                class: f(["font-bold", [
                  d.$style["chart-axis"],
                  d.$style.radar,
                  d.$style.label,
                  m.normalized % 0.5 === 0 ? d.$style["font-align--center"] : m.normalized < 0.5 ? d.$style["font-align--left"] : d.$style["font-align--right"],
                  m.normalized % 0.5 === 0 ? d.$style["box-align--center"] : m.normalized < 0.5 ? d.$style["box-align--left"] : d.$style["box-align--right"]
                ]])
              }, M(m.value), 3)
            ], 10, Ko))), 128))
          ], 2)) : x("", !0),
          h("g", {
            class: f([d.$style["chart-group-plots"]])
          }, [
            (g(!0), b(O, null, A(_.value, (m) => (g(), b("g", {
              key: m.label,
              class: f([d.$style["chart-area"], d.$style.radar, d.$style.plot])
            }, [
              h("path", {
                d: m.path,
                class: f([
                  {
                    [d.$style.round]: t.options.round
                  }
                ])
              }, null, 10, ei)
            ], 2))), 128))
          ], 2),
          (g(!0), b(O, null, A(l(u), (m) => (g(), b("g", {
            key: m.label,
            class: f([d.$style["chart-area-label"]])
          }, [
            (g(!0), b(O, null, A(m.series, (k, E) => (g(), b("g", {
              key: `plot-${E}`,
              class: f(d.$style["chart-area"])
            }, [
              h("circle", {
                class: f([
                  d.$style.behavior,
                  d.$style["chart-area"],
                  d.$style.point,
                  d.$style.plot,
                  d.$style.clickable
                ]),
                cx: l(i).x + l(c) * k.y.normalized * l(w).cos(l(w).rad(k.x.normalized * 360 - 90)),
                cy: l(i).y + l(c) * k.y.normalized * l(w).sin(l(w).rad(k.x.normalized * 360 - 90)),
                r: "10"
              }, null, 10, ti),
              h("circle", {
                class: f([d.$style["chart-area"], d.$style.radar, d.$style.point, d.$style.plot]),
                cx: l(i).x + l(c) * k.y.normalized * l(w).cos(l(w).rad(k.x.normalized * 360 - 90)),
                cy: l(i).y + l(c) * k.y.normalized * l(w).sin(l(w).rad(k.x.normalized * 360 - 90)),
                r: "5"
              }, null, 10, ni),
              (g(), b("foreignObject", {
                x: l(i).x + l(c) * k.y.normalized * l(w).cos(l(w).rad(k.x.normalized * 360 - 90)) - 130,
                y: l(i).y + l(c) * k.y.normalized * l(w).sin(l(w).rad(k.x.normalized * 360 - 90)),
                height: "200",
                width: "260",
                class: f([d.$style["chart-area"], d.$style["legend-container"]])
              }, [
                I(Q, {
                  class: f([d.$style["chart-area"], d.$style["legend-wrapper"]]),
                  radius: "var(--agh-ref-border-radius-500)"
                }, {
                  default: q(() => [
                    t.options.title ? (g(), b(O, { key: 0 }, [
                      h("h1", {
                        class: f([d.$style["chart-area"], d.$style["legend-title"], d.$style.radar])
                      }, [
                        h("span", null, M(k.x.value), 1),
                        h("span", {
                          class: f(d.$style["legend-value"])
                        }, M(k.y.value), 3)
                      ], 2),
                      li
                    ], 64)) : x("", !0),
                    (g(!0), b(O, null, A(l(r), (T, N) => (g(), b(O, { key: N }, [
                      !/(x|y)/.test(N) && T && k[N] ? (g(), b("div", {
                        key: 0,
                        class: f([d.$style["chart-area"], d.$style["legend-group"], d.$style.radar])
                      }, [
                        h("p", {
                          class: f([d.$style["chart-area"], d.$style["legend-value"]])
                        }, M(k[N].value), 3),
                        h("label", {
                          class: f([d.$style["chart-area"], d.$style["legend-label"]])
                        }, M(T.label), 3)
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
}), ri = "_behavior_1bxlz_1", oi = "_clickable_1bxlz_1", ii = "_disabled_1bxlz_4", ci = "_draggable_1bxlz_7", ui = "_loading_1bxlz_10", di = "_path_1bxlz_24", fi = "_radar_1bxlz_29", _i = "_label_1bxlz_32", pi = "_plot_1bxlz_85", gi = "_point_1bxlz_85", hi = "_doughnut_1bxlz_96", vi = "_bg_1bxlz_102", yi = "_round_1bxlz_106", bi = "_line_1bxlz_119", $i = {
  behavior: ri,
  clickable: oi,
  disabled: ii,
  draggable: ci,
  loading: ui,
  "chart-container": "_chart-container_1bxlz_14",
  "chart-axis": "_chart-axis_1bxlz_24",
  path: di,
  radar: fi,
  label: _i,
  "font-align--center": "_font-align--center_1bxlz_45",
  "font-align--right": "_font-align--right_1bxlz_48",
  "font-align--left": "_font-align--left_1bxlz_51",
  "box-align--center": "_box-align--center_1bxlz_54",
  "box-align--left": "_box-align--left_1bxlz_57",
  "box-align--right": "_box-align--right_1bxlz_60",
  "chart-group-plots": "_chart-group-plots_1bxlz_67",
  "chart-area": "_chart-area_1bxlz_67",
  plot: pi,
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
}, bu = /* @__PURE__ */ L(ai, [["__cssModules", mi], ["__scopeId", "data-v-5b47bbf2"]]);
function ae(e) {
  var t;
  const n = H(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Wt = Ye ? window : void 0;
function ge(...e) {
  let t, n, s, a;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, s, a] = e, t = Wt) : [t, n, s, a] = e, !t)
    return me;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const r = [], u = () => {
    r.forEach((_) => _()), r.length = 0;
  }, c = (_, p, y, v) => (_.addEventListener(p, y, v), () => _.removeEventListener(p, y, v)), i = W(
    () => [ae(t), H(a)],
    ([_, p]) => {
      u(), _ && r.push(
        ...n.flatMap((y) => s.map((v) => c(_, y, v, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), o = () => {
    i(), u();
  };
  return Me(o), o;
}
let bt = !1;
function $t(e, t, n = {}) {
  const { window: s = Wt, ignore: a = [], capture: r = !0, detectIframe: u = !1 } = n;
  if (!s)
    return;
  Ve && !bt && (bt = !0, Array.from(s.document.body.children).forEach((y) => y.addEventListener("click", me)), s.document.documentElement.addEventListener("click", me));
  let c = !0;
  const i = (y) => a.some((v) => {
    if (typeof v == "string")
      return Array.from(s.document.querySelectorAll(v)).some((d) => d === y.target || y.composedPath().includes(d));
    {
      const d = ae(v);
      return d && (y.target === d || y.composedPath().includes(d));
    }
  }), _ = [
    ge(s, "click", (y) => {
      const v = ae(e);
      if (!(!v || v === y.target || y.composedPath().includes(v))) {
        if (y.detail === 0 && (c = !i(y)), !c) {
          c = !0;
          return;
        }
        t(y);
      }
    }, { passive: !0, capture: r }),
    ge(s, "pointerdown", (y) => {
      const v = ae(e);
      v && (c = !y.composedPath().includes(v) && !i(y));
    }, { passive: !0 }),
    u && ge(s, "blur", (y) => {
      setTimeout(() => {
        var v;
        const d = ae(e);
        ((v = s.document.activeElement) == null ? void 0 : v.tagName) === "IFRAME" && !(d != null && d.contains(s.document.activeElement)) && t(y);
      }, 0);
    })
  ].filter(Boolean);
  return () => _.forEach((y) => y());
}
const Ee = {
  [gt.mounted](e, t) {
    const n = !t.modifiers.bubble;
    if (typeof t.value == "function")
      e.__onClickOutside_stop = $t(e, t.value, { capture: n });
    else {
      const [s, a] = t.value;
      e.__onClickOutside_stop = $t(e, s, Object.assign({ capture: n }, a));
    }
  },
  [gt.unmounted](e) {
    e.__onClickOutside_stop();
  }
};
function Ht(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
    return !0;
  {
    const n = e.parentNode;
    return !n || n.tagName === "BODY" ? !1 : Ht(n);
  }
}
function ki(e) {
  const t = e || window.event, n = t.target;
  return Ht(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.preventDefault(), !1);
}
function wi(e, t = !1) {
  const n = B(t);
  let s = null, a;
  W(Ca(e), (c) => {
    if (c) {
      const i = c;
      a = i.style.overflow, n.value && (i.style.overflow = "hidden");
    }
  }, {
    immediate: !0
  });
  const r = () => {
    const c = H(e);
    !c || n.value || (Ve && (s = ge(
      c,
      "touchmove",
      (i) => {
        ki(i);
      },
      { passive: !1 }
    )), c.style.overflow = "hidden", n.value = !0);
  }, u = () => {
    const c = H(e);
    !c || !n.value || (Ve && (s == null || s()), c.style.overflow = a, n.value = !1);
  };
  return Me(u), F({
    get() {
      return n.value;
    },
    set(c) {
      c ? r() : u();
    }
  });
}
function zi() {
  let e = !1;
  const t = B(!1);
  return (n, s) => {
    if (t.value = s.value, e)
      return;
    e = !0;
    const a = wi(n, s.value);
    W(t, (r) => a.value = r);
  };
}
zi();
const xi = ["onClick"], Oi = /* @__PURE__ */ V({
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
    const n = e, s = B(), a = P(
      () => ye(
        ee(He(n.options, n.groupBy ?? "")).map(([o, _]) => [
          o === "undefined" ? "" : o,
          _.map(
            (p) => D({
              ...p,
              selected: !!(n.multiple ? se(n.modelValue, n.fields.key).includes(U(p, n.fields.key)) : U(p, n.fields.key) === U(n.modelValue, n.fields.key))
            })
          )
        ])
      )
    ), r = D(!1), u = () => {
      if (s.value) {
        const { scrollHeight: o, clientHeight: _ } = s.value;
        r.set(o > _ + 1);
      }
    }, c = (o) => {
      o.update((_) => ({
        ..._,
        selected: !_.selected
      })), n.multiple ? t(
        "update:modelValue",
        Ie(
          se(
            a.value,
            (_) => _.map((p) => p()).filter((p) => p.selected)
          )
        )
      ) : t("update:modelValue", o());
    }, i = () => {
      n.multiple ? t("update:modelValue", []) : t("update:modelValue", {});
    };
    return je(s, u, {
      window
    }), Y(() => {
      u();
    }), (o, _) => (g(), R(Q, {
      class: f([
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
          class: f(o.$style["menu-header"])
        }, [
          h("h1", {
            class: f(o.$style.title)
          }, M(n.label), 3),
          n.multiple ? (g(), R(ke, {
            key: 0,
            class: f(o.$style.button),
            label: "Clear Selection",
            icon: "fa6-solid:eraser",
            variant: "text",
            onClick: _[0] || (_[0] = (p) => i())
          }, null, 8, ["class"])) : x("", !0)
        ], 2)) : x("", !0),
        h("div", {
          ref_key: "wrapperRef$",
          ref: s,
          class: f([
            o.$style["menu-wrapper"],
            {
              [o.$style.overflowed]: l(r)()
            }
          ])
        }, [
          (g(!0), b(O, null, A(l(a), (p, y) => (g(), b("div", {
            key: y,
            class: f([
              o.$style["menu-group"],
              {
                [o.$style.classify]: n.groupBy
              }
            ])
          }, [
            y ? (g(), b("label", {
              key: 0,
              class: f(o.$style["menu-group-label"]),
              name: ""
            }, M(y), 3)) : x("", !0),
            (g(!0), b(O, null, A(p, (v, d) => (g(), b("div", {
              key: `option-${d}`,
              class: f([
                o.$style["menu-option"],
                o.$style.behavior,
                o.$style.clickable,
                {
                  [o.$style.selected]: v().selected,
                  [o.$style.multiple]: n.multiple
                }
              ]),
              onClick: ($) => c(v)
            }, [
              n.multiple ? (g(), R(l(X), {
                key: 0,
                class: f(o.$style["menu-option-icon"]),
                icon: v().selected ? "fa6-solid:square-check" : "fa6-regular:square"
              }, null, 8, ["class", "icon"])) : x("", !0),
              n.fields.icon ? (g(), R(l(X), {
                key: 1,
                class: f(o.$style["menu-option-icon"]),
                icon: String(l(U)(v(), n.fields.icon))
              }, null, 8, ["class", "icon"])) : x("", !0),
              h("div", {
                class: f(o.$style["menu-option-group"])
              }, [
                n.fields.title ? x("", !0) : (g(), b("p", {
                  key: 0,
                  class: f(o.$style["menu-field"])
                }, M(l(U)(v(), n.fields.key)), 3)),
                (g(!0), b(O, null, A(l(Ut)(n.fields, ["key", "icon"]), ($) => (g(), b(O, {
                  key: `option-field-${$}`
                }, [
                  $ ? (g(), b("p", {
                    key: 0,
                    class: f(o.$style["menu-field"])
                  }, M(l(be)(v(), $)), 3)) : x("", !0)
                ], 64))), 128))
              ], 2)
            ], 10, xi))), 128))
          ], 2))), 128))
        ], 2)
      ]),
      _: 1
    }, 8, ["class", "radius"]));
  }
}), Mi = "_behavior_1k2c6_1", Si = "_clickable_1k2c6_1", ji = "_disabled_1k2c6_4", Bi = "_draggable_1k2c6_7", Ai = "_loading_1k2c6_10", Ti = "_classify_1k2c6_29", Ci = "_title_1k2c6_47", Pi = "_button_1k2c6_50", qi = "_overflowed_1k2c6_77", Ii = "_hover_1k2c6_91", Vi = "_selected_1k2c6_95", Ei = "_multiple_1k2c6_99", Li = {
  behavior: Mi,
  clickable: Si,
  disabled: ji,
  draggable: Bi,
  loading: Ai,
  "menu-container": "_menu-container_1k2c6_14",
  classify: Ti,
  "menu-header": "_menu-header_1k2c6_32",
  title: Ci,
  button: Pi,
  "menu-wrapper": "_menu-wrapper_1k2c6_53",
  overflowed: qi,
  "menu-option": "_menu-option_1k2c6_81",
  hover: Ii,
  selected: Vi,
  multiple: Ei,
  "menu-field": "_menu-field_1k2c6_102",
  "menu-option-group": "_menu-option-group_1k2c6_108",
  "menu-group": "_menu-group_1k2c6_122",
  "menu-group-label": "_menu-group-label_1k2c6_144"
}, Ri = {
  $style: Li
}, we = /* @__PURE__ */ L(Oi, [["__cssModules", Ri], ["__scopeId", "data-v-29c13de6"]]), Fi = /* @__PURE__ */ V({
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
      set: (r) => (a.set(!0), t("update:modelValue", r))
    }), a = D(!0);
    return (r, u) => qe((g(), b("div", {
      class: f([r.$style["dropdown-container"], r.$style[r.size]])
    }, [
      I(ke, {
        disabled: n.disabled,
        label: l(U)(n.modelValue, n.fields.key),
        icon: l(a)() ? "fa6-solid:chevron-down" : "fa6-solid:chevron-up",
        clicked: !l(a)(),
        level: n.level,
        size: n.size,
        variant: n.size === "small" ? "rounded" : "rect",
        class: f([r.$style["dropdown-button"], r.$style[r.size]]),
        onClick: u[0] || (u[0] = (c) => l(a).update((i) => !i)),
        type: "search"
      }, null, 8, ["disabled", "label", "icon", "clicked", "level", "size", "variant", "class"]),
      r.items.length > 0 && !l(a)() ? (g(), R(we, {
        key: 0,
        class: f(r.$style["dropdown-menu"]),
        options: r.items,
        fields: n.fields,
        modelValue: s.value,
        "onUpdate:modelValue": u[1] || (u[1] = (c) => s.value = c)
      }, null, 8, ["class", "options", "fields", "modelValue"])) : x("", !0)
    ], 2)), [
      [l(Ee), () => l(a).set(!0)]
    ]);
  }
}), Di = "_large_184z5_7", Ni = {
  "dropdown-container": "_dropdown-container_184z5_1",
  large: Di,
  "dropdown-menu": "_dropdown-menu_184z5_11",
  "dropdown-button": "_dropdown-button_184z5_11"
}, Ui = {
  $style: Ni
}, $u = /* @__PURE__ */ L(Fi, [["__cssModules", Ui], ["__scopeId", "data-v-89c03d44"]]), Gi = ["height", "width"], Wi = /* @__PURE__ */ h("feFlood", {
  "flood-opacity": "0",
  result: "BackgroundImageFix"
}, null, -1), Hi = /* @__PURE__ */ h("feBlend", {
  in: "SourceGraphic",
  in2: "BackgroundImageFix",
  result: "shape"
}, null, -1), Yi = /* @__PURE__ */ h("feColorMatrix", {
  in: "SourceAlpha",
  result: "hardAlpha",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}, null, -1), Zi = /* @__PURE__ */ h("feOffset", {
  dx: "1",
  dy: "1"
}, null, -1), Xi = /* @__PURE__ */ h("feGaussianBlur", { stdDeviation: "1" }, null, -1), Ji = /* @__PURE__ */ h("feComposite", {
  in2: "hardAlpha",
  k2: "-1",
  k3: "1",
  operator: "arithmetic"
}, null, -1), Qi = /* @__PURE__ */ h("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" }, null, -1), Ki = /* @__PURE__ */ h("feBlend", {
  in2: "shape",
  result: "effect-innerShadow-1"
}, null, -1), ec = /* @__PURE__ */ h("feColorMatrix", {
  in: "SourceAlpha",
  result: "hardAlpha",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}, null, -1), tc = /* @__PURE__ */ h("feOffset", {
  dx: "2",
  dy: "3"
}, null, -1), nc = /* @__PURE__ */ h("feGaussianBlur", { stdDeviation: "1.5" }, null, -1), sc = /* @__PURE__ */ h("feComposite", {
  in2: "hardAlpha",
  k2: "-1",
  k3: "1",
  operator: "arithmetic"
}, null, -1), lc = /* @__PURE__ */ h("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.11 0" }, null, -1), ac = /* @__PURE__ */ h("feBlend", {
  in2: "effect-innerShadow-1",
  result: "effect-innerShadow2"
}, null, -1), rc = /* @__PURE__ */ h("feColorMatrix", {
  in: "SourceAlpha",
  result: "hardAlpha",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}, null, -1), oc = /* @__PURE__ */ h("feOffset", {
  dx: "5",
  dy: "6"
}, null, -1), ic = /* @__PURE__ */ h("feGaussianBlur", { stdDeviation: "2" }, null, -1), cc = /* @__PURE__ */ h("feComposite", {
  in2: "hardAlpha",
  k2: "-1",
  k3: "1",
  operator: "arithmetic"
}, null, -1), uc = /* @__PURE__ */ h("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" }, null, -1), dc = /* @__PURE__ */ h("feBlend", {
  in2: "effect-innerShadow2",
  result: "effect-innerShadow3"
}, null, -1), fc = /* @__PURE__ */ h("feColorMatrix", {
  in: "SourceAlpha",
  result: "hardAlpha",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}, null, -1), _c = /* @__PURE__ */ h("feOffset", {
  dx: "8",
  dy: "10"
}, null, -1), pc = /* @__PURE__ */ h("feGaussianBlur", { stdDeviation: "2.5" }, null, -1), gc = /* @__PURE__ */ h("feComposite", {
  in2: "hardAlpha",
  k2: "-1",
  k3: "1",
  operator: "arithmetic"
}, null, -1), hc = /* @__PURE__ */ h("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0" }, null, -1), vc = /* @__PURE__ */ h("feBlend", {
  in2: "effect-innerShadow3",
  result: "effect-innerShadow4"
}, null, -1), yc = [
  Wi,
  Hi,
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
  ac,
  rc,
  oc,
  ic,
  cc,
  uc,
  dc,
  fc,
  _c,
  pc,
  gc,
  hc,
  vc
], bc = /* @__PURE__ */ V({
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
    }, yc, 8, Gi));
  }
}), $c = /* @__PURE__ */ V({
  __name: "ProgressBar",
  props: {
    value: { default: 0 },
    variant: { default: "concave" },
    thickness: { default: 12 }
  },
  setup(e) {
    const t = e;
    return (n, s) => (g(), b("div", {
      class: f([n.$style["progress-container"], n.$style[t.variant]])
    }, [
      h("div", {
        class: f([n.$style["progress-groove"], n.$style[t.variant]])
      }, [
        h("div", {
          class: f(n.$style["progress-value"]),
          style: un({ width: `${t.value * 100}%` })
        }, null, 6)
      ], 2)
    ], 2));
  }
}), mc = "_concave_vuh1m_23", kc = "_convex_vuh1m_55", wc = {
  "progress-container": "_progress-container_vuh1m_1",
  "progress-groove": "_progress-groove_vuh1m_11",
  "progress-value": "_progress-value_vuh1m_11",
  concave: mc,
  "progress-content-wrapper": "_progress-content-wrapper_vuh1m_35",
  convex: kc
}, zc = {
  $style: wc
}, mu = /* @__PURE__ */ L($c, [["__cssModules", zc], ["__scopeId", "data-v-d1ec5a1d"]]), Je = (e) => (ie("data-v-017d9edf"), e = e(), ce(), e), xc = ["innerHTML"], Oc = ["cx", "cy", "r"], Mc = ["cx", "cy", "r"], Sc = /* @__PURE__ */ Je(() => /* @__PURE__ */ h("mask", { id: "progress-groove-mask" }, [
  /* @__PURE__ */ h("use", {
    href: "#progress-groove-outer",
    fill: "#fff"
  }),
  /* @__PURE__ */ h("use", {
    href: "#progress-groove-inner",
    fill: "#000"
  })
], -1)), jc = /* @__PURE__ */ Je(() => /* @__PURE__ */ h("use", {
  href: "#progress-groove-outer",
  mask: "url(#progress-groove-mask)"
}, null, -1)), Bc = [
  jc
], Ac = ["cx", "cy", "r", "stroke-dashoffset", "stroke-dasharray", "stroke-width"], Tc = /* @__PURE__ */ Je(() => /* @__PURE__ */ h("clipPath", { id: "progress-content-clip" }, [
  /* @__PURE__ */ h("use", { href: "#progress-groove-inner" })
], -1)), Cc = { "clip-path": "url(#progress-content-clip)" }, Pc = ["height", "width", "x", "y"], qc = /* @__PURE__ */ V({
  __name: "ProgressCircle",
  props: {
    value: { default: 0 },
    variant: { default: "concave" },
    thickness: { default: 12 }
  },
  setup(e) {
    const t = e, n = B(), { width: s, height: a } = Be(n), r = P(
      () => w.clamp(w.min(s.value, a.value) / 2 - t.thickness / 2, 0, 1 / 0)
    ), u = P(() => r.value * 2 * w.PI), c = P(() => ({
      x: s.value / 2,
      y: a.value / 2
    })), i = D(""), o = () => {
      n.value && t.variant === "convex" && (i.set(
        Ze("--progress-value-fill-gradient", n, {
          observe: !0
        }).value
      ), i() || We(o, 1));
    };
    return Y(() => {
      o();
    }), (_, p) => (g(), b("div", {
      ref_key: "wrapperRef$",
      ref: n,
      class: f([_.$style["progress-container"], _.$style[t.variant]])
    }, [
      I(Ae, {
        height: l(a),
        width: l(s)
      }, {
        defs: q(() => [
          h("g", {
            innerHTML: l(i)()
          }, null, 8, xc),
          I(bc, {
            height: l(a),
            width: l(s)
          }, null, 8, ["height", "width"]),
          h("circle", {
            id: "progress-groove-outer",
            cx: l(c).x,
            cy: l(c).y,
            r: l(r) + t.thickness / 2
          }, null, 8, Oc),
          h("circle", {
            id: "progress-groove-inner",
            cx: l(c).x,
            cy: l(c).y,
            r: l(r) - t.thickness / 2
          }, null, 8, Mc),
          Sc
        ]),
        path: q(() => [
          h("g", {
            class: f(_.$style["progress-groove"])
          }, Bc, 2),
          h("g", {
            class: f(_.$style["progress-value"])
          }, [
            h("circle", {
              cx: l(c).x,
              cy: l(c).y,
              r: l(r),
              "stroke-dashoffset": (t.value + 0.25) * l(u),
              "stroke-dasharray": `${t.value * l(u)} ${(1 - t.value) * l(u)}`,
              "stroke-width": t.thickness,
              fill: "transparent"
            }, null, 8, Ac)
          ], 2),
          Tc,
          h("g", Cc, [
            (g(), b("foreignObject", {
              height: l(r) * 2,
              width: l(r) * 2,
              x: l(c).x - l(r),
              y: l(c).y - l(r)
            }, [
              h("div", {
                class: f(_.$style["progress-content-wrapper"])
              }, [
                h("label", null, M((t.value * 100).toFixed(0)) + "%", 1)
              ], 2)
            ], 8, Pc))
          ])
        ]),
        _: 1
      }, 8, ["height", "width"])
    ], 2));
  }
}), Ic = "_concave_1jatd_23", Vc = "_convex_1jatd_55", Ec = {
  "progress-container": "_progress-container_1jatd_1",
  "progress-groove": "_progress-groove_1jatd_11",
  "progress-value": "_progress-value_1jatd_11",
  concave: Ic,
  "progress-content-wrapper": "_progress-content-wrapper_1jatd_35",
  convex: Vc
}, Lc = {
  $style: Ec
}, ku = /* @__PURE__ */ L(qc, [["__cssModules", Lc], ["__scopeId", "data-v-017d9edf"]]), Yt = (e, t) => {
  var n;
  if (t) {
    const s = (n = ee(Ut(e, "valid")).find(([a, r]) => r && t[a])) == null ? void 0 : n[0];
    return s ? t[s] ?? null : null;
  }
  return null;
}, Rc = (e) => (ie("data-v-ba5fc079"), e = e(), ce(), e), Fc = /* @__PURE__ */ Rc(() => /* @__PURE__ */ h("span", null, "Required", -1)), Dc = ["value"], Nc = /* @__PURE__ */ V({
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
    const n = e, { onTrigger: s } = de(
      (i) => {
        n.disabled ? (i.preventDefault(), i.stopPropagation()) : (u.set(!0), c(), t("update:modelValue", i.target.value));
      },
      {
        flush: "post"
      }
    ), a = B(), r = D(""), u = D(n.modelValue !== ""), c = () => {
      var i;
      return r.set(
        a.value ? (i = a.value) != null && i.validity.valid ? "" : Yt(a.value.validity, n.invalidMessage ?? {}) ?? a.value.validationMessage : ""
      );
    };
    return Y(() => {
      c();
    }), (i, o) => (g(), b("div", {
      class: f([
        i.$style["textfield-container"],
        {
          [i.$style[`icon-align--${n.iconAlign}`]]: n.icon || i.type === "search",
          [i.$style["no-label"]]: !n.label
        }
      ])
    }, [
      n.label || n.required ? (g(), b("label", {
        key: 0,
        class: f([i.$style["textfield-label"]])
      }, [
        n.label ? (g(), b("p", {
          key: 0,
          class: f([i.$style["textfield-label--value"]])
        }, M(n.label), 3)) : x("", !0),
        h("p", {
          class: f([i.$style["textfield-label--notation"]])
        }, [
          I(l(X), {
            class: f(i.$style.icon),
            icon: "fa6-solid:asterisk"
          }, null, 8, ["class"]),
          Fc
        ], 2)
      ], 2)) : x("", !0),
      h("input", Le({
        ref_key: "inputRef$",
        ref: a,
        class: [
          i.$style["textfield-input"],
          {
            [i.$style.focused]: l(u)()
          }
        ]
      }, n, {
        value: n.modelValue,
        onInput: o[0] || (o[0] = //@ts-ignore
        (..._) => l(s) && l(s)(..._))
      }), null, 16, Dc),
      i.type === "search" || n.icon ? (g(), R(l(X), {
        key: 1,
        class: f([i.$style["textfield-icon"], i.$style.icon]),
        icon: n.icon || i.type === "search" ? "fa6-solid:magnifying-glass" : ""
      }, null, 8, ["class", "icon"])) : x("", !0),
      l(r)() && l(u)() ? (g(), b("div", {
        key: 2,
        class: f([i.$style["textfield-msg"]])
      }, [
        I(l(X), {
          class: f([i.$style["textfield-icon"]]),
          icon: "fa6-solid:circle-xmark"
        }, null, 8, ["class"]),
        h("span", {
          class: f([i.$style["textfield-msg--value"]])
        }, M(l(r)()), 3)
      ], 2)) : x("", !0)
    ], 2));
  }
}), Uc = "_icon_10mkh_16", Gc = "_focused_10mkh_83", Wc = {
  "textfield-container": "_textfield-container_10mkh_1",
  "no-label": "_no-label_10mkh_10",
  "icon-align--left": "_icon-align--left_10mkh_16",
  "icon-align--right": "_icon-align--right_10mkh_16",
  "textfield-input": "_textfield-input_10mkh_21",
  "textfield-icon": "_textfield-icon_10mkh_24",
  "textfield-label": "_textfield-label_10mkh_35",
  "textfield-label--value": "_textfield-label--value_10mkh_43",
  "textfield-label--notation": "_textfield-label--notation_10mkh_47",
  icon: Uc,
  focused: Gc,
  "textfield-msg": "_textfield-msg_10mkh_113"
}, Hc = {
  $style: Wc
}, Zt = /* @__PURE__ */ L(Nc, [["__cssModules", Hc], ["__scopeId", "data-v-ba5fc079"]]), Yc = /* @__PURE__ */ V({
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
      set: (o) => (i(o), t("update:modelValue", o))
    }), a = B(), r = D(!1), u = D([]), c = (o) => {
      o && (t("update:modelValue", U(o, n.fields.key)), t("select", o), r.set(!0));
    }, i = (o) => {
      var _;
      u.set(
        ((_ = n.items) == null ? void 0 : _.filter((p) => String(U(p, n.fields.key)).includes(o))) ?? []
      );
    };
    return W(s, i), W(a, c), (o, _) => (g(), b("div", {
      class: f(o.$style["search-bar--container"])
    }, [
      I(Zt, {
        modelValue: s.value,
        "onUpdate:modelValue": _[0] || (_[0] = (p) => s.value = p),
        class: f(o.$style["search-bar--input"]),
        disabled: n.disabled,
        onClick: _[1] || (_[1] = (p) => l(r).set(!1)),
        onFocus: _[2] || (_[2] = (p) => l(r).set(!1)),
        onBlur: _[3] || (_[3] = (p) => l(r).set(!0)),
        type: "search"
      }, null, 8, ["modelValue", "class", "disabled"]),
      s.value && l(u)().length > 0 && !l(r)() ? (g(), R(we, {
        key: 0,
        class: f(o.$style["search-bar--menu"]),
        options: l(u)(),
        fields: n.fields,
        modelValue: a.value,
        "onUpdate:modelValue": _[4] || (_[4] = (p) => a.value = p)
      }, null, 8, ["class", "options", "fields", "modelValue"])) : x("", !0)
    ], 2));
  }
}), Zc = {
  "search-bar--container": "_search-bar--container_1hygv_1",
  "search-bar--input": "_search-bar--input_1hygv_7",
  "search-bar--menu": "_search-bar--menu_1hygv_10"
}, Xc = {
  $style: Zc
}, wu = /* @__PURE__ */ L(Yc, [["__cssModules", Xc], ["__scopeId", "data-v-644d7672"]]), Jc = ["value"], Qc = ["for"], Kc = /* @__PURE__ */ V({
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
    const n = e, { onTrigger: s } = de(
      (c) => {
        n.disabled ? (c.preventDefault(), c.stopPropagation()) : (u(), t("update:modelValue", c.target.value));
      },
      {
        flush: "post"
      }
    ), a = B(), r = D(""), u = () => {
      var c;
      return r.set(
        a.value ? (c = a.value) != null && c.validity.valid ? "" : Yt(a.value.validity, n.invalidMessage ?? {}) ?? a.value.validationMessage : ""
      );
    };
    return Y(() => {
      u();
    }), (c, i) => (g(), R(Q, {
      class: f([c.$style["textarea-container"]]),
      variant: "flat",
      radius: "var(--agh-ref-border-radius-400)"
    }, {
      default: q(() => [
        h("textarea", Le({
          ref_key: "inputRef$",
          ref: a,
          class: [c.$style["textarea-input"]]
        }, n, {
          value: n.modelValue,
          onInput: i[0] || (i[0] = //@ts-ignore
          (...o) => l(s) && l(s)(...o))
        }), null, 16, Jc),
        l(r)() ? (g(), b("label", {
          key: 0,
          for: n.name,
          class: f([c.$style["textarea-label"]])
        }, [
          I(l(X), {
            class: f([c.$style["textarea-label--icon"]]),
            icon: "fa6-solid:circle-xmark"
          }, null, 8, ["class"]),
          h("span", {
            class: f([c.$style["textarea-label--value"]])
          }, M(l(r)()), 3)
        ], 10, Qc)) : x("", !0)
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
}, zu = /* @__PURE__ */ L(Kc, [["__cssModules", tu], ["__scopeId", "data-v-1a3f9f23"]]), nu = /* @__PURE__ */ V({
  __name: "SwitchButton",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, { onTrigger: s } = de(
      (a) => {
        n.disabled ? (a.preventDefault(), a.stopPropagation()) : (console.log(n.modelValue), t("update:modelValue", !n.modelValue));
      },
      {
        flush: "post"
      }
    );
    return (a, r) => (g(), b("div", {
      class: f([a.$style.switch, n.modelValue && a.$style.switch_active]),
      onClick: r[0] || (r[0] = //@ts-ignore
      (...u) => l(s) && l(s)(...u))
    }, [
      h("div", {
        class: f([a.$style.slider, n.modelValue && a.$style.slider_active])
      }, null, 2)
    ], 2));
  }
}), su = "_switch_active_13jol_9", lu = "_slider_13jol_12", au = "_slider_active_13jol_23", ru = {
  switch: "_switch_13jol_1",
  switch_active: su,
  slider: lu,
  slider_active: au
}, ou = {
  $style: ru
}, xu = /* @__PURE__ */ L(nu, [["__cssModules", ou], ["__scopeId", "data-v-1ba5eb50"]]), iu = /* @__PURE__ */ V({
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
    const n = e, s = B(), a = {
      key: "detail",
      title: "{{ $.label }}",
      content: "{{ $.detail }}",
      icon: "icon"
    }, r = {
      key: "value",
      title: "{{ $.value }}"
    }, u = P(
      () => Ie(
        (n.filterOptions ?? []).map(
          (z) => At(se(n.items, z.field)).map((S) => ({ ...z, value: S }))
        )
      )
    ), c = B(n.modelValue ?? ""), i = F({
      get: () => n.modelValue ?? c.value,
      set: (z) => {
        t("update:modelValue", z ?? ""), n.modelValue || (c.value = z ?? "");
      }
    }), o = B(Ql(n.sortOptions)), _ = F({
      get: () => n.sort ?? o.value,
      set: (z) => {
        z && (k.set(!0), t("update:sort", z), n.sort || (o.value = z));
      }
    }), p = B([]), y = F({
      get: () => n.filter ?? p.value,
      set: (z) => {
        t("update:filter", z ?? []), n.filter || (p.value = z ?? []);
      }
    }), v = B(), d = F({
      get: () => n.selected !== void 0 ? n.selected : v.value,
      set: (z) => {
        z && (t("update:selected", z), n.selected || (v.value = z));
      }
    }), $ = B(n.items), m = D(!0), k = D(!0), E = D(!1), T = () => {
      if (s.value) {
        const { scrollHeight: z, clientHeight: S } = s.value;
        E.set(z > S + 1);
      }
    }, N = (z) => z.update((S) => !S), Xt = (z) => {
      d.value = z;
    }, Ce = () => {
      var Pe, Qe;
      const z = n.items.map(
        (K) => ({
          ...K,
          selected: U(K, n.fields.key) === U(d.value, n.fields.key)
        })
      ), S = Jl(
        z,
        (K) => U(K, n.fields.title ?? n.fields.key).includes(i.value)
      ), le = za(
        S,
        [((Pe = _.value) == null ? void 0 : Pe.field) ?? n.fields.key],
        [((Qe = _.value) == null ? void 0 : Qe.direction) ?? "asc"]
      ), C = re(y.value) ? le : oa(
        ...se(
          He(y.value, "field"),
          (K) => Ie(
            K.map(
              (Ke) => le.filter((Jt) => ua(Jt, { [Ke.field]: Ke.value }))
            )
          )
        ),
        ca
      );
      $.value = C;
    };
    return je(s, T, {
      window
    }), Y(() => {
      Ce(), T();
    }), dn(() => {
      Ce(), T();
    }), W([_, y, i, d], () => {
      Ce(), T();
    }), (z, S) => (g(), R(Q, {
      class: f(z.$style["list-container"]),
      purpose: "container",
      radius: "var(--agh-ref-border-radius-600)"
    }, {
      default: q(() => {
        var le;
        return [
          h("div", {
            class: f(z.$style["list-toolbar"])
          }, [
            I(Zt, {
              modelValue: i.value,
              "onUpdate:modelValue": S[0] || (S[0] = (C) => i.value = C),
              class: f(z.$style["list-toolbar-search"]),
              type: "search"
            }, null, 8, ["modelValue", "class"]),
            n.filterOptions && !l(re)(n.filterOptions) ? qe((g(), b("div", {
              key: 0,
              class: f(z.$style["list-toolbar-tool"]),
              onKeydown: [
                S[3] || (S[3] = _e((C) => l(m).set(!0), ["esc"])),
                S[4] || (S[4] = _e((C) => l(m).set(!0), ["enter"]))
              ]
            }, [
              I(ke, {
                class: f(z.$style["list-toolbar-button"]),
                clicked: !l(m)(),
                onClick: S[1] || (S[1] = (C) => N(l(m))),
                icon: "fa6-solid:filter",
                variant: "text"
              }, null, 8, ["class", "clicked"]),
              y.value.length > 0 ? (g(), b("span", {
                key: 0,
                class: f(z.$style["list-toolbar-button-deco"])
              }, M(y.value.length), 3)) : x("", !0),
              l(m)() ? x("", !0) : (g(), R(we, {
                key: 1,
                class: f(z.$style["list-toolbar-menu"]),
                fields: r,
                options: l(u),
                multiple: !0,
                modelValue: y.value,
                "onUpdate:modelValue": S[2] || (S[2] = (C) => y.value = C),
                label: "Filter",
                "group-by": "label"
              }, null, 8, ["class", "options", "modelValue"]))
            ], 34)), [
              [l(Ee), () => l(m).set(!0)]
            ]) : x("", !0),
            n.sortOptions && !l(re)(n.sortOptions) ? qe((g(), b("div", {
              key: 1,
              class: f(z.$style["list-toolbar-tool"]),
              onKeydown: [
                S[7] || (S[7] = _e((C) => l(k).set(!0), ["esc"])),
                S[8] || (S[8] = _e((C) => l(k).set(!0), ["enter"]))
              ]
            }, [
              I(ke, {
                class: f(z.$style["list-toolbar-button"]),
                icon: ((le = _.value) == null ? void 0 : le.icon) ?? "fa6-solid:arrow-down-wide-short",
                clicked: !l(k)(),
                onClick: S[5] || (S[5] = (C) => N(l(k))),
                variant: "text"
              }, null, 8, ["class", "icon", "clicked"]),
              l(k)() ? x("", !0) : (g(), R(we, {
                key: 0,
                class: f(z.$style["list-toolbar-menu"]),
                fields: a,
                options: n.sortOptions,
                modelValue: _.value,
                "onUpdate:modelValue": S[6] || (S[6] = (C) => _.value = C)
              }, null, 8, ["class", "options", "modelValue"]))
            ], 34)), [
              [l(Ee), () => l(k).set(!0)]
            ]) : x("", !0)
          ], 2),
          h("div", {
            ref_key: "wrapperRef$",
            ref: s,
            class: f([
              z.$style["list-wrapper"],
              {
                [z.$style.overflowed]: l(E)()
              }
            ])
          }, [
            I(Da, {
              items: $.value,
              "group-by": n.groupBy
            }, {
              placeholder: q(() => [
                G(z.$slots, "placeholder", {}, void 0, !0)
              ]),
              group: q((C) => [
                h("label", {
                  class: f(z.$style["list-item-label"])
                }, M(C.group), 3)
              ]),
              default: q((C) => [
                I(Q, {
                  class: f(z.$style["list-item"]),
                  color: C.item.selected ? "blue" : "default",
                  clickable: !0,
                  onClick: (Pe) => Xt(C.item),
                  radius: "var(--agh-ref-border-radius-400)"
                }, {
                  default: q(() => [
                    G(z.$slots, "default", {
                      item: C.item,
                      index: C.index,
                      selected: C.item.selected
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
}), cu = "_overflowed_10vs0_81", uu = {
  "list-container": "_list-container_10vs0_1",
  "list-toolbar": "_list-toolbar_10vs0_11",
  "list-toolbar-search": "_list-toolbar-search_10vs0_17",
  "list-toolbar-tool": "_list-toolbar-tool_10vs0_20",
  "list-toolbar-button": "_list-toolbar-button_10vs0_23",
  "list-toolbar-button-deco": "_list-toolbar-button-deco_10vs0_26",
  "list-toolbar-menu": "_list-toolbar-menu_10vs0_45",
  "list-wrapper": "_list-wrapper_10vs0_51",
  overflowed: cu,
  "list-item": "_list-item_10vs0_84",
  "list-item-label": "_list-item-label_10vs0_89"
}, du = {
  $style: uu
}, Ou = /* @__PURE__ */ L(iu, [["__cssModules", du], ["__scopeId", "data-v-52db1428"]]);
export {
  gu as BadgeBox,
  Xe as BaseLink,
  Da as BaseList,
  Ae as BasePoly,
  ke as ButtonBox,
  Q as CardBox,
  Ou as CardList,
  hu as DoughnutChart,
  $u as DropDown,
  bc as InnerShadowDeco,
  vu as LineChart,
  yu as MatrixChart,
  mu as ProgressBar,
  ku as ProgressCircle,
  bu as RadarChart,
  yt as RoundEffect,
  wu as SearchBar,
  we as SelectMenu,
  xu as SwitchButton,
  zu as TextArea,
  Zt as TextField
};
//# sourceMappingURL=ui.component.es.js.map
