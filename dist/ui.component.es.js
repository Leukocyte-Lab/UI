import { shallowRef as wr, watchEffect as Ct, readonly as xr, getCurrentScope as Or, onScopeDispose as Tr, unref as p, computed as mu, ref as ou, watch as pD, getCurrentInstance as Sr, onMounted as He, defineComponent as q, openBlock as $, createBlock as nu, resolveDynamicComponent as Pr, normalizeProps as Mr, guardReactiveProps as kr, withCtx as J, renderSlot as Ku, createElementBlock as w, normalizeClass as _, createElementVNode as v, mergeProps as lt, toDisplayString as U, createCommentVNode as z, createVNode as Q, useCssVars as Ir, reactive as Nr, Fragment as M, renderList as W, pushScopeId as _D, popScopeId as yD, onUpdated as Et, normalizeStyle as zr } from "vue";
import { Icon as Xu } from "@iconify/vue/offline";
import { u as Ge, f as XD, M as O, s as fu } from "./uuid-80ab1d9a.js";
var jr = typeof global == "object" && global && global.Object === Object && global;
const At = jr;
var Ur = typeof self == "object" && self && self.Object === Object && self, Rr = At || Ur || Function("return this")();
const su = Rr;
var Lr = su.Symbol;
const Du = Lr;
var ct = Object.prototype, Yr = ct.hasOwnProperty, Wr = ct.toString, Hu = Du ? Du.toStringTag : void 0;
function Hr(u) {
  var D = Yr.call(u, Hu), e = u[Hu];
  try {
    u[Hu] = void 0;
    var t = !0;
  } catch {
  }
  var r = Wr.call(u);
  return t && (D ? u[Hu] = e : delete u[Hu]), r;
}
var Gr = Object.prototype, qr = Gr.toString;
function Zr(u) {
  return qr.call(u);
}
var Vr = "[object Null]", Qr = "[object Undefined]", B0 = Du ? Du.toStringTag : void 0;
function yu(u) {
  return u == null ? u === void 0 ? Qr : Vr : B0 && B0 in Object(u) ? Hr(u) : Zr(u);
}
function lu(u) {
  return u != null && typeof u == "object";
}
var Jr = "[object Symbol]";
function oD(u) {
  return typeof u == "symbol" || lu(u) && yu(u) == Jr;
}
function bD(u, D) {
  for (var e = -1, t = u == null ? 0 : u.length, r = Array(t); ++e < t; )
    r[e] = D(u[e], e, u);
  return r;
}
var Kr = Array.isArray;
const K = Kr;
var Xr = 1 / 0, p0 = Du ? Du.prototype : void 0, h0 = p0 ? p0.toString : void 0;
function ft(u) {
  if (typeof u == "string")
    return u;
  if (K(u))
    return bD(u, ft) + "";
  if (oD(u))
    return h0 ? h0.call(u) : "";
  var D = u + "";
  return D == "0" && 1 / u == -Xr ? "-0" : D;
}
var un = /\s/;
function Dn(u) {
  for (var D = u.length; D-- && un.test(u.charAt(D)); )
    ;
  return D;
}
var en = /^\s+/;
function tn(u) {
  return u && u.slice(0, Dn(u) + 1).replace(en, "");
}
function du(u) {
  var D = typeof u;
  return u != null && (D == "object" || D == "function");
}
var m0 = 0 / 0, rn = /^[-+]0x[0-9a-f]+$/i, nn = /^0b[01]+$/i, an = /^0o[0-7]+$/i, Fn = parseInt;
function on(u) {
  if (typeof u == "number")
    return u;
  if (oD(u))
    return m0;
  if (du(u)) {
    var D = typeof u.valueOf == "function" ? u.valueOf() : u;
    u = du(D) ? D + "" : D;
  }
  if (typeof u != "string")
    return u === 0 ? u : +u;
  u = tn(u);
  var e = nn.test(u);
  return e || an.test(u) ? Fn(u.slice(2), e ? 2 : 8) : rn.test(u) ? m0 : +u;
}
function iD(u) {
  return u;
}
var sn = "[object AsyncFunction]", Cn = "[object Function]", ln = "[object GeneratorFunction]", En = "[object Proxy]";
function dt(u) {
  if (!du(u))
    return !1;
  var D = yu(u);
  return D == Cn || D == ln || D == sn || D == En;
}
var An = su["__core-js_shared__"];
const HD = An;
var g0 = function() {
  var u = /[^.]+$/.exec(HD && HD.keys && HD.keys.IE_PROTO || "");
  return u ? "Symbol(src)_1." + u : "";
}();
function cn(u) {
  return !!g0 && g0 in u;
}
var fn = Function.prototype, dn = fn.toString;
function bu(u) {
  if (u != null) {
    try {
      return dn.call(u);
    } catch {
    }
    try {
      return u + "";
    } catch {
    }
  }
  return "";
}
var Bn = /[\\^$.*+?()[\]{}|]/g, pn = /^\[object .+?Constructor\]$/, hn = Function.prototype, mn = Object.prototype, gn = hn.toString, vn = mn.hasOwnProperty, _n = RegExp(
  "^" + gn.call(vn).replace(Bn, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function yn(u) {
  if (!du(u) || cn(u))
    return !1;
  var D = dt(u) ? _n : pn;
  return D.test(bu(u));
}
function bn(u, D) {
  return u == null ? void 0 : u[D];
}
function $u(u, D) {
  var e = bn(u, D);
  return yn(e) ? e : void 0;
}
var $n = $u(su, "WeakMap");
const ue = $n;
var v0 = Object.create, wn = function() {
  function u() {
  }
  return function(D) {
    if (!du(D))
      return {};
    if (v0)
      return v0(D);
    u.prototype = D;
    var e = new u();
    return u.prototype = void 0, e;
  };
}();
const xn = wn;
function On(u, D, e) {
  switch (e.length) {
    case 0:
      return u.call(D);
    case 1:
      return u.call(D, e[0]);
    case 2:
      return u.call(D, e[0], e[1]);
    case 3:
      return u.call(D, e[0], e[1], e[2]);
  }
  return u.apply(D, e);
}
function Tn() {
}
function Sn(u, D) {
  var e = -1, t = u.length;
  for (D || (D = Array(t)); ++e < t; )
    D[e] = u[e];
  return D;
}
var Pn = 800, Mn = 16, kn = Date.now;
function In(u) {
  var D = 0, e = 0;
  return function() {
    var t = kn(), r = Mn - (t - e);
    if (e = t, r > 0) {
      if (++D >= Pn)
        return arguments[0];
    } else
      D = 0;
    return u.apply(void 0, arguments);
  };
}
function Nn(u) {
  return function() {
    return u;
  };
}
var zn = function() {
  try {
    var u = $u(Object, "defineProperty");
    return u({}, "", {}), u;
  } catch {
  }
}();
const hD = zn;
var jn = hD ? function(u, D) {
  return hD(u, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Nn(D),
    writable: !0
  });
} : iD;
const Un = jn;
var Rn = In(Un);
const Bt = Rn;
function Ln(u, D) {
  for (var e = -1, t = u == null ? 0 : u.length; ++e < t && D(u[e], e, u) !== !1; )
    ;
  return u;
}
function Yn(u, D, e, t) {
  for (var r = u.length, n = e + (t ? 1 : -1); t ? n-- : ++n < r; )
    if (D(u[n], n, u))
      return n;
  return -1;
}
function Wn(u) {
  return u !== u;
}
function Hn(u, D, e) {
  for (var t = e - 1, r = u.length; ++t < r; )
    if (u[t] === D)
      return t;
  return -1;
}
function Gn(u, D, e) {
  return D === D ? Hn(u, D, e) : Yn(u, Wn, e);
}
function qn(u, D) {
  var e = u == null ? 0 : u.length;
  return !!e && Gn(u, D, 0) > -1;
}
var Zn = 9007199254740991, Vn = /^(?:0|[1-9]\d*)$/;
function pt(u, D) {
  var e = typeof u;
  return D = D ?? Zn, !!D && (e == "number" || e != "symbol" && Vn.test(u)) && u > -1 && u % 1 == 0 && u < D;
}
function qe(u, D, e) {
  D == "__proto__" && hD ? hD(u, D, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : u[D] = e;
}
function Ze(u, D) {
  return u === D || u !== u && D !== D;
}
var Qn = Object.prototype, Jn = Qn.hasOwnProperty;
function ht(u, D, e) {
  var t = u[D];
  (!(Jn.call(u, D) && Ze(t, e)) || e === void 0 && !(D in u)) && qe(u, D, e);
}
function sD(u, D, e, t) {
  var r = !e;
  e || (e = {});
  for (var n = -1, a = D.length; ++n < a; ) {
    var o = D[n], i = t ? t(e[o], u[o], o, e, u) : void 0;
    i === void 0 && (i = u[o]), r ? qe(e, o, i) : ht(e, o, i);
  }
  return e;
}
var _0 = Math.max;
function mt(u, D, e) {
  return D = _0(D === void 0 ? u.length - 1 : D, 0), function() {
    for (var t = arguments, r = -1, n = _0(t.length - D, 0), a = Array(n); ++r < n; )
      a[r] = t[D + r];
    r = -1;
    for (var o = Array(D + 1); ++r < D; )
      o[r] = t[r];
    return o[D] = e(a), On(u, this, o);
  };
}
function Kn(u, D) {
  return Bt(mt(u, D, iD), u + "");
}
var Xn = 9007199254740991;
function Ve(u) {
  return typeof u == "number" && u > -1 && u % 1 == 0 && u <= Xn;
}
function CD(u) {
  return u != null && Ve(u.length) && !dt(u);
}
var ua = Object.prototype;
function $D(u) {
  var D = u && u.constructor, e = typeof D == "function" && D.prototype || ua;
  return u === e;
}
function Da(u, D) {
  for (var e = -1, t = Array(u); ++e < u; )
    t[e] = D(e);
  return t;
}
var ea = "[object Arguments]";
function y0(u) {
  return lu(u) && yu(u) == ea;
}
var gt = Object.prototype, ta = gt.hasOwnProperty, ra = gt.propertyIsEnumerable, na = y0(function() {
  return arguments;
}()) ? y0 : function(u) {
  return lu(u) && ta.call(u, "callee") && !ra.call(u, "callee");
};
const wD = na;
function aa() {
  return !1;
}
var vt = typeof exports == "object" && exports && !exports.nodeType && exports, b0 = vt && typeof module == "object" && module && !module.nodeType && module, Fa = b0 && b0.exports === vt, $0 = Fa ? su.Buffer : void 0, oa = $0 ? $0.isBuffer : void 0, ia = oa || aa;
const uD = ia;
var sa = "[object Arguments]", Ca = "[object Array]", la = "[object Boolean]", Ea = "[object Date]", Aa = "[object Error]", ca = "[object Function]", fa = "[object Map]", da = "[object Number]", Ba = "[object Object]", pa = "[object RegExp]", ha = "[object Set]", ma = "[object String]", ga = "[object WeakMap]", va = "[object ArrayBuffer]", _a = "[object DataView]", ya = "[object Float32Array]", ba = "[object Float64Array]", $a = "[object Int8Array]", wa = "[object Int16Array]", xa = "[object Int32Array]", Oa = "[object Uint8Array]", Ta = "[object Uint8ClampedArray]", Sa = "[object Uint16Array]", Pa = "[object Uint32Array]", k = {};
k[ya] = k[ba] = k[$a] = k[wa] = k[xa] = k[Oa] = k[Ta] = k[Sa] = k[Pa] = !0;
k[sa] = k[Ca] = k[va] = k[la] = k[_a] = k[Ea] = k[Aa] = k[ca] = k[fa] = k[da] = k[Ba] = k[pa] = k[ha] = k[ma] = k[ga] = !1;
function Ma(u) {
  return lu(u) && Ve(u.length) && !!k[yu(u)];
}
function Qe(u) {
  return function(D) {
    return u(D);
  };
}
var _t = typeof exports == "object" && exports && !exports.nodeType && exports, qu = _t && typeof module == "object" && module && !module.nodeType && module, ka = qu && qu.exports === _t, GD = ka && At.process, Ia = function() {
  try {
    var u = qu && qu.require && qu.require("util").types;
    return u || GD && GD.binding && GD.binding("util");
  } catch {
  }
}();
const Iu = Ia;
var w0 = Iu && Iu.isTypedArray, Na = w0 ? Qe(w0) : Ma;
const Je = Na;
var za = Object.prototype, ja = za.hasOwnProperty;
function yt(u, D) {
  var e = K(u), t = !e && wD(u), r = !e && !t && uD(u), n = !e && !t && !r && Je(u), a = e || t || r || n, o = a ? Da(u.length, String) : [], i = o.length;
  for (var F in u)
    (D || ja.call(u, F)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (F == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    r && (F == "offset" || F == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    n && (F == "buffer" || F == "byteLength" || F == "byteOffset") || // Skip index properties.
    pt(F, i))) && o.push(F);
  return o;
}
function bt(u, D) {
  return function(e) {
    return u(D(e));
  };
}
var Ua = bt(Object.keys, Object);
const Ra = Ua;
var La = Object.prototype, Ya = La.hasOwnProperty;
function $t(u) {
  if (!$D(u))
    return Ra(u);
  var D = [];
  for (var e in Object(u))
    Ya.call(u, e) && e != "constructor" && D.push(e);
  return D;
}
function zu(u) {
  return CD(u) ? yt(u) : $t(u);
}
function Wa(u) {
  var D = [];
  if (u != null)
    for (var e in Object(u))
      D.push(e);
  return D;
}
var Ha = Object.prototype, Ga = Ha.hasOwnProperty;
function qa(u) {
  if (!du(u))
    return Wa(u);
  var D = $D(u), e = [];
  for (var t in u)
    t == "constructor" && (D || !Ga.call(u, t)) || e.push(t);
  return e;
}
function Ke(u) {
  return CD(u) ? yt(u, !0) : qa(u);
}
var Za = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Va = /^\w*$/;
function Xe(u, D) {
  if (K(u))
    return !1;
  var e = typeof u;
  return e == "number" || e == "symbol" || e == "boolean" || u == null || oD(u) ? !0 : Va.test(u) || !Za.test(u) || D != null && u in Object(D);
}
var Qa = $u(Object, "create");
const DD = Qa;
function Ja() {
  this.__data__ = DD ? DD(null) : {}, this.size = 0;
}
function Ka(u) {
  var D = this.has(u) && delete this.__data__[u];
  return this.size -= D ? 1 : 0, D;
}
var Xa = "__lodash_hash_undefined__", uF = Object.prototype, DF = uF.hasOwnProperty;
function eF(u) {
  var D = this.__data__;
  if (DD) {
    var e = D[u];
    return e === Xa ? void 0 : e;
  }
  return DF.call(D, u) ? D[u] : void 0;
}
var tF = Object.prototype, rF = tF.hasOwnProperty;
function nF(u) {
  var D = this.__data__;
  return DD ? D[u] !== void 0 : rF.call(D, u);
}
var aF = "__lodash_hash_undefined__";
function FF(u, D) {
  var e = this.__data__;
  return this.size += this.has(u) ? 0 : 1, e[u] = DD && D === void 0 ? aF : D, this;
}
function gu(u) {
  var D = -1, e = u == null ? 0 : u.length;
  for (this.clear(); ++D < e; ) {
    var t = u[D];
    this.set(t[0], t[1]);
  }
}
gu.prototype.clear = Ja;
gu.prototype.delete = Ka;
gu.prototype.get = eF;
gu.prototype.has = nF;
gu.prototype.set = FF;
function oF() {
  this.__data__ = [], this.size = 0;
}
function xD(u, D) {
  for (var e = u.length; e--; )
    if (Ze(u[e][0], D))
      return e;
  return -1;
}
var iF = Array.prototype, sF = iF.splice;
function CF(u) {
  var D = this.__data__, e = xD(D, u);
  if (e < 0)
    return !1;
  var t = D.length - 1;
  return e == t ? D.pop() : sF.call(D, e, 1), --this.size, !0;
}
function lF(u) {
  var D = this.__data__, e = xD(D, u);
  return e < 0 ? void 0 : D[e][1];
}
function EF(u) {
  return xD(this.__data__, u) > -1;
}
function AF(u, D) {
  var e = this.__data__, t = xD(e, u);
  return t < 0 ? (++this.size, e.push([u, D])) : e[t][1] = D, this;
}
function Eu(u) {
  var D = -1, e = u == null ? 0 : u.length;
  for (this.clear(); ++D < e; ) {
    var t = u[D];
    this.set(t[0], t[1]);
  }
}
Eu.prototype.clear = oF;
Eu.prototype.delete = CF;
Eu.prototype.get = lF;
Eu.prototype.has = EF;
Eu.prototype.set = AF;
var cF = $u(su, "Map");
const eD = cF;
function fF() {
  this.size = 0, this.__data__ = {
    hash: new gu(),
    map: new (eD || Eu)(),
    string: new gu()
  };
}
function dF(u) {
  var D = typeof u;
  return D == "string" || D == "number" || D == "symbol" || D == "boolean" ? u !== "__proto__" : u === null;
}
function OD(u, D) {
  var e = u.__data__;
  return dF(D) ? e[typeof D == "string" ? "string" : "hash"] : e.map;
}
function BF(u) {
  var D = OD(this, u).delete(u);
  return this.size -= D ? 1 : 0, D;
}
function pF(u) {
  return OD(this, u).get(u);
}
function hF(u) {
  return OD(this, u).has(u);
}
function mF(u, D) {
  var e = OD(this, u), t = e.size;
  return e.set(u, D), this.size += e.size == t ? 0 : 1, this;
}
function Au(u) {
  var D = -1, e = u == null ? 0 : u.length;
  for (this.clear(); ++D < e; ) {
    var t = u[D];
    this.set(t[0], t[1]);
  }
}
Au.prototype.clear = fF;
Au.prototype.delete = BF;
Au.prototype.get = pF;
Au.prototype.has = hF;
Au.prototype.set = mF;
var gF = "Expected a function";
function u0(u, D) {
  if (typeof u != "function" || D != null && typeof D != "function")
    throw new TypeError(gF);
  var e = function() {
    var t = arguments, r = D ? D.apply(this, t) : t[0], n = e.cache;
    if (n.has(r))
      return n.get(r);
    var a = u.apply(this, t);
    return e.cache = n.set(r, a) || n, a;
  };
  return e.cache = new (u0.Cache || Au)(), e;
}
u0.Cache = Au;
var vF = 500;
function _F(u) {
  var D = u0(u, function(t) {
    return e.size === vF && e.clear(), t;
  }), e = D.cache;
  return D;
}
var yF = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, bF = /\\(\\)?/g, $F = _F(function(u) {
  var D = [];
  return u.charCodeAt(0) === 46 && D.push(""), u.replace(yF, function(e, t, r, n) {
    D.push(r ? n.replace(bF, "$1") : t || e);
  }), D;
});
const wF = $F;
function xF(u) {
  return u == null ? "" : ft(u);
}
function TD(u, D) {
  return K(u) ? u : Xe(u, D) ? [u] : wF(xF(u));
}
var OF = 1 / 0;
function lD(u) {
  if (typeof u == "string" || oD(u))
    return u;
  var D = u + "";
  return D == "0" && 1 / u == -OF ? "-0" : D;
}
function D0(u, D) {
  D = TD(D, u);
  for (var e = 0, t = D.length; u != null && e < t; )
    u = u[lD(D[e++])];
  return e && e == t ? u : void 0;
}
function wt(u, D, e) {
  var t = u == null ? void 0 : D0(u, D);
  return t === void 0 ? e : t;
}
function e0(u, D) {
  for (var e = -1, t = D.length, r = u.length; ++e < t; )
    u[r + e] = D[e];
  return u;
}
var x0 = Du ? Du.isConcatSpreadable : void 0;
function TF(u) {
  return K(u) || wD(u) || !!(x0 && u && u[x0]);
}
function t0(u, D, e, t, r) {
  var n = -1, a = u.length;
  for (e || (e = TF), r || (r = []); ++n < a; ) {
    var o = u[n];
    D > 0 && e(o) ? D > 1 ? t0(o, D - 1, e, t, r) : e0(r, o) : t || (r[r.length] = o);
  }
  return r;
}
function SF(u) {
  var D = u == null ? 0 : u.length;
  return D ? t0(u, 1) : [];
}
function PF(u) {
  return Bt(mt(u, void 0, SF), u + "");
}
var MF = bt(Object.getPrototypeOf, Object);
const r0 = MF;
var kF = "[object Object]", IF = Function.prototype, NF = Object.prototype, xt = IF.toString, zF = NF.hasOwnProperty, jF = xt.call(Object);
function UF(u) {
  if (!lu(u) || yu(u) != kF)
    return !1;
  var D = r0(u);
  if (D === null)
    return !0;
  var e = zF.call(D, "constructor") && D.constructor;
  return typeof e == "function" && e instanceof e && xt.call(e) == jF;
}
function RF(u, D, e) {
  var t = -1, r = u.length;
  D < 0 && (D = -D > r ? 0 : r + D), e = e > r ? r : e, e < 0 && (e += r), r = D > e ? 0 : e - D >>> 0, D >>>= 0;
  for (var n = Array(r); ++t < r; )
    n[t] = u[t + D];
  return n;
}
function LF() {
  this.__data__ = new Eu(), this.size = 0;
}
function YF(u) {
  var D = this.__data__, e = D.delete(u);
  return this.size = D.size, e;
}
function WF(u) {
  return this.__data__.get(u);
}
function HF(u) {
  return this.__data__.has(u);
}
var GF = 200;
function qF(u, D) {
  var e = this.__data__;
  if (e instanceof Eu) {
    var t = e.__data__;
    if (!eD || t.length < GF - 1)
      return t.push([u, D]), this.size = ++e.size, this;
    e = this.__data__ = new Au(t);
  }
  return e.set(u, D), this.size = e.size, this;
}
function Fu(u) {
  var D = this.__data__ = new Eu(u);
  this.size = D.size;
}
Fu.prototype.clear = LF;
Fu.prototype.delete = YF;
Fu.prototype.get = WF;
Fu.prototype.has = HF;
Fu.prototype.set = qF;
function ZF(u, D) {
  return u && sD(D, zu(D), u);
}
function VF(u, D) {
  return u && sD(D, Ke(D), u);
}
var Ot = typeof exports == "object" && exports && !exports.nodeType && exports, O0 = Ot && typeof module == "object" && module && !module.nodeType && module, QF = O0 && O0.exports === Ot, T0 = QF ? su.Buffer : void 0, S0 = T0 ? T0.allocUnsafe : void 0;
function JF(u, D) {
  if (D)
    return u.slice();
  var e = u.length, t = S0 ? S0(e) : new u.constructor(e);
  return u.copy(t), t;
}
function KF(u, D) {
  for (var e = -1, t = u == null ? 0 : u.length, r = 0, n = []; ++e < t; ) {
    var a = u[e];
    D(a, e, u) && (n[r++] = a);
  }
  return n;
}
function Tt() {
  return [];
}
var XF = Object.prototype, u1 = XF.propertyIsEnumerable, P0 = Object.getOwnPropertySymbols, D1 = P0 ? function(u) {
  return u == null ? [] : (u = Object(u), KF(P0(u), function(D) {
    return u1.call(u, D);
  }));
} : Tt;
const n0 = D1;
function e1(u, D) {
  return sD(u, n0(u), D);
}
var t1 = Object.getOwnPropertySymbols, r1 = t1 ? function(u) {
  for (var D = []; u; )
    e0(D, n0(u)), u = r0(u);
  return D;
} : Tt;
const St = r1;
function n1(u, D) {
  return sD(u, St(u), D);
}
function Pt(u, D, e) {
  var t = D(u);
  return K(u) ? t : e0(t, e(u));
}
function De(u) {
  return Pt(u, zu, n0);
}
function Mt(u) {
  return Pt(u, Ke, St);
}
var a1 = $u(su, "DataView");
const ee = a1;
var F1 = $u(su, "Promise");
const te = F1;
var o1 = $u(su, "Set");
const Mu = o1;
var M0 = "[object Map]", i1 = "[object Object]", k0 = "[object Promise]", I0 = "[object Set]", N0 = "[object WeakMap]", z0 = "[object DataView]", s1 = bu(ee), C1 = bu(eD), l1 = bu(te), E1 = bu(Mu), A1 = bu(ue), hu = yu;
(ee && hu(new ee(new ArrayBuffer(1))) != z0 || eD && hu(new eD()) != M0 || te && hu(te.resolve()) != k0 || Mu && hu(new Mu()) != I0 || ue && hu(new ue()) != N0) && (hu = function(u) {
  var D = yu(u), e = D == i1 ? u.constructor : void 0, t = e ? bu(e) : "";
  if (t)
    switch (t) {
      case s1:
        return z0;
      case C1:
        return M0;
      case l1:
        return k0;
      case E1:
        return I0;
      case A1:
        return N0;
    }
  return D;
});
const vu = hu;
var c1 = Object.prototype, f1 = c1.hasOwnProperty;
function d1(u) {
  var D = u.length, e = new u.constructor(D);
  return D && typeof u[0] == "string" && f1.call(u, "index") && (e.index = u.index, e.input = u.input), e;
}
var B1 = su.Uint8Array;
const mD = B1;
function a0(u) {
  var D = new u.constructor(u.byteLength);
  return new mD(D).set(new mD(u)), D;
}
function p1(u, D) {
  var e = D ? a0(u.buffer) : u.buffer;
  return new u.constructor(e, u.byteOffset, u.byteLength);
}
var h1 = /\w*$/;
function m1(u) {
  var D = new u.constructor(u.source, h1.exec(u));
  return D.lastIndex = u.lastIndex, D;
}
var j0 = Du ? Du.prototype : void 0, U0 = j0 ? j0.valueOf : void 0;
function g1(u) {
  return U0 ? Object(U0.call(u)) : {};
}
function v1(u, D) {
  var e = D ? a0(u.buffer) : u.buffer;
  return new u.constructor(e, u.byteOffset, u.length);
}
var _1 = "[object Boolean]", y1 = "[object Date]", b1 = "[object Map]", $1 = "[object Number]", w1 = "[object RegExp]", x1 = "[object Set]", O1 = "[object String]", T1 = "[object Symbol]", S1 = "[object ArrayBuffer]", P1 = "[object DataView]", M1 = "[object Float32Array]", k1 = "[object Float64Array]", I1 = "[object Int8Array]", N1 = "[object Int16Array]", z1 = "[object Int32Array]", j1 = "[object Uint8Array]", U1 = "[object Uint8ClampedArray]", R1 = "[object Uint16Array]", L1 = "[object Uint32Array]";
function Y1(u, D, e) {
  var t = u.constructor;
  switch (D) {
    case S1:
      return a0(u);
    case _1:
    case y1:
      return new t(+u);
    case P1:
      return p1(u, e);
    case M1:
    case k1:
    case I1:
    case N1:
    case z1:
    case j1:
    case U1:
    case R1:
    case L1:
      return v1(u, e);
    case b1:
      return new t();
    case $1:
    case O1:
      return new t(u);
    case w1:
      return m1(u);
    case x1:
      return new t();
    case T1:
      return g1(u);
  }
}
function W1(u) {
  return typeof u.constructor == "function" && !$D(u) ? xn(r0(u)) : {};
}
var H1 = "[object Map]";
function G1(u) {
  return lu(u) && vu(u) == H1;
}
var R0 = Iu && Iu.isMap, q1 = R0 ? Qe(R0) : G1;
const Z1 = q1;
var V1 = "[object Set]";
function Q1(u) {
  return lu(u) && vu(u) == V1;
}
var L0 = Iu && Iu.isSet, J1 = L0 ? Qe(L0) : Q1;
const K1 = J1;
var X1 = 1, uo = 2, Do = 4, kt = "[object Arguments]", eo = "[object Array]", to = "[object Boolean]", ro = "[object Date]", no = "[object Error]", It = "[object Function]", ao = "[object GeneratorFunction]", Fo = "[object Map]", oo = "[object Number]", Nt = "[object Object]", io = "[object RegExp]", so = "[object Set]", Co = "[object String]", lo = "[object Symbol]", Eo = "[object WeakMap]", Ao = "[object ArrayBuffer]", co = "[object DataView]", fo = "[object Float32Array]", Bo = "[object Float64Array]", po = "[object Int8Array]", ho = "[object Int16Array]", mo = "[object Int32Array]", go = "[object Uint8Array]", vo = "[object Uint8ClampedArray]", _o = "[object Uint16Array]", yo = "[object Uint32Array]", P = {};
P[kt] = P[eo] = P[Ao] = P[co] = P[to] = P[ro] = P[fo] = P[Bo] = P[po] = P[ho] = P[mo] = P[Fo] = P[oo] = P[Nt] = P[io] = P[so] = P[Co] = P[lo] = P[go] = P[vo] = P[_o] = P[yo] = !0;
P[no] = P[It] = P[Eo] = !1;
function BD(u, D, e, t, r, n) {
  var a, o = D & X1, i = D & uo, F = D & Do;
  if (e && (a = r ? e(u, t, r, n) : e(u)), a !== void 0)
    return a;
  if (!du(u))
    return u;
  var s = K(u);
  if (s) {
    if (a = d1(u), !o)
      return Sn(u, a);
  } else {
    var C = vu(u), E = C == It || C == ao;
    if (uD(u))
      return JF(u, o);
    if (C == Nt || C == kt || E && !r) {
      if (a = i || E ? {} : W1(u), !o)
        return i ? n1(u, VF(a, u)) : e1(u, ZF(a, u));
    } else {
      if (!P[C])
        return r ? u : {};
      a = Y1(u, C, o);
    }
  }
  n || (n = new Fu());
  var f = n.get(u);
  if (f)
    return f;
  n.set(u, a), K1(u) ? u.forEach(function(A) {
    a.add(BD(A, D, e, A, u, n));
  }) : Z1(u) && u.forEach(function(A, c) {
    a.set(c, BD(A, D, e, c, u, n));
  });
  var l = F ? i ? Mt : De : i ? Ke : zu, m = s ? void 0 : l(u);
  return Ln(m || u, function(A, c) {
    m && (c = A, A = u[c]), ht(a, c, BD(A, D, e, c, u, n));
  }), a;
}
var bo = "__lodash_hash_undefined__";
function $o(u) {
  return this.__data__.set(u, bo), this;
}
function wo(u) {
  return this.__data__.has(u);
}
function tD(u) {
  var D = -1, e = u == null ? 0 : u.length;
  for (this.__data__ = new Au(); ++D < e; )
    this.add(u[D]);
}
tD.prototype.add = tD.prototype.push = $o;
tD.prototype.has = wo;
function xo(u, D) {
  for (var e = -1, t = u == null ? 0 : u.length; ++e < t; )
    if (D(u[e], e, u))
      return !0;
  return !1;
}
function zt(u, D) {
  return u.has(D);
}
var Oo = 1, To = 2;
function jt(u, D, e, t, r, n) {
  var a = e & Oo, o = u.length, i = D.length;
  if (o != i && !(a && i > o))
    return !1;
  var F = n.get(u), s = n.get(D);
  if (F && s)
    return F == D && s == u;
  var C = -1, E = !0, f = e & To ? new tD() : void 0;
  for (n.set(u, D), n.set(D, u); ++C < o; ) {
    var l = u[C], m = D[C];
    if (t)
      var A = a ? t(m, l, C, D, u, n) : t(l, m, C, u, D, n);
    if (A !== void 0) {
      if (A)
        continue;
      E = !1;
      break;
    }
    if (f) {
      if (!xo(D, function(c, h) {
        if (!zt(f, h) && (l === c || r(l, c, e, t, n)))
          return f.push(h);
      })) {
        E = !1;
        break;
      }
    } else if (!(l === m || r(l, m, e, t, n))) {
      E = !1;
      break;
    }
  }
  return n.delete(u), n.delete(D), E;
}
function Ut(u) {
  var D = -1, e = Array(u.size);
  return u.forEach(function(t, r) {
    e[++D] = [r, t];
  }), e;
}
function F0(u) {
  var D = -1, e = Array(u.size);
  return u.forEach(function(t) {
    e[++D] = t;
  }), e;
}
var So = 1, Po = 2, Mo = "[object Boolean]", ko = "[object Date]", Io = "[object Error]", No = "[object Map]", zo = "[object Number]", jo = "[object RegExp]", Uo = "[object Set]", Ro = "[object String]", Lo = "[object Symbol]", Yo = "[object ArrayBuffer]", Wo = "[object DataView]", Y0 = Du ? Du.prototype : void 0, qD = Y0 ? Y0.valueOf : void 0;
function Ho(u, D, e, t, r, n, a) {
  switch (e) {
    case Wo:
      if (u.byteLength != D.byteLength || u.byteOffset != D.byteOffset)
        return !1;
      u = u.buffer, D = D.buffer;
    case Yo:
      return !(u.byteLength != D.byteLength || !n(new mD(u), new mD(D)));
    case Mo:
    case ko:
    case zo:
      return Ze(+u, +D);
    case Io:
      return u.name == D.name && u.message == D.message;
    case jo:
    case Ro:
      return u == D + "";
    case No:
      var o = Ut;
    case Uo:
      var i = t & So;
      if (o || (o = F0), u.size != D.size && !i)
        return !1;
      var F = a.get(u);
      if (F)
        return F == D;
      t |= Po, a.set(u, D);
      var s = jt(o(u), o(D), t, r, n, a);
      return a.delete(u), s;
    case Lo:
      if (qD)
        return qD.call(u) == qD.call(D);
  }
  return !1;
}
var Go = 1, qo = Object.prototype, Zo = qo.hasOwnProperty;
function Vo(u, D, e, t, r, n) {
  var a = e & Go, o = De(u), i = o.length, F = De(D), s = F.length;
  if (i != s && !a)
    return !1;
  for (var C = i; C--; ) {
    var E = o[C];
    if (!(a ? E in D : Zo.call(D, E)))
      return !1;
  }
  var f = n.get(u), l = n.get(D);
  if (f && l)
    return f == D && l == u;
  var m = !0;
  n.set(u, D), n.set(D, u);
  for (var A = a; ++C < i; ) {
    E = o[C];
    var c = u[E], h = D[E];
    if (t)
      var B = a ? t(h, c, E, D, u, n) : t(c, h, E, u, D, n);
    if (!(B === void 0 ? c === h || r(c, h, e, t, n) : B)) {
      m = !1;
      break;
    }
    A || (A = E == "constructor");
  }
  if (m && !A) {
    var d = u.constructor, g = D.constructor;
    d != g && "constructor" in u && "constructor" in D && !(typeof d == "function" && d instanceof d && typeof g == "function" && g instanceof g) && (m = !1);
  }
  return n.delete(u), n.delete(D), m;
}
var Qo = 1, W0 = "[object Arguments]", H0 = "[object Array]", dD = "[object Object]", Jo = Object.prototype, G0 = Jo.hasOwnProperty;
function Ko(u, D, e, t, r, n) {
  var a = K(u), o = K(D), i = a ? H0 : vu(u), F = o ? H0 : vu(D);
  i = i == W0 ? dD : i, F = F == W0 ? dD : F;
  var s = i == dD, C = F == dD, E = i == F;
  if (E && uD(u)) {
    if (!uD(D))
      return !1;
    a = !0, s = !1;
  }
  if (E && !s)
    return n || (n = new Fu()), a || Je(u) ? jt(u, D, e, t, r, n) : Ho(u, D, i, e, t, r, n);
  if (!(e & Qo)) {
    var f = s && G0.call(u, "__wrapped__"), l = C && G0.call(D, "__wrapped__");
    if (f || l) {
      var m = f ? u.value() : u, A = l ? D.value() : D;
      return n || (n = new Fu()), r(m, A, e, t, n);
    }
  }
  return E ? (n || (n = new Fu()), Vo(u, D, e, t, r, n)) : !1;
}
function o0(u, D, e, t, r) {
  return u === D ? !0 : u == null || D == null || !lu(u) && !lu(D) ? u !== u && D !== D : Ko(u, D, e, t, o0, r);
}
var Xo = 1, ui = 2;
function Di(u, D, e, t) {
  var r = e.length, n = r, a = !t;
  if (u == null)
    return !n;
  for (u = Object(u); r--; ) {
    var o = e[r];
    if (a && o[2] ? o[1] !== u[o[0]] : !(o[0] in u))
      return !1;
  }
  for (; ++r < n; ) {
    o = e[r];
    var i = o[0], F = u[i], s = o[1];
    if (a && o[2]) {
      if (F === void 0 && !(i in u))
        return !1;
    } else {
      var C = new Fu();
      if (t)
        var E = t(F, s, i, u, D, C);
      if (!(E === void 0 ? o0(s, F, Xo | ui, t, C) : E))
        return !1;
    }
  }
  return !0;
}
function Rt(u) {
  return u === u && !du(u);
}
function ei(u) {
  for (var D = zu(u), e = D.length; e--; ) {
    var t = D[e], r = u[t];
    D[e] = [t, r, Rt(r)];
  }
  return D;
}
function Lt(u, D) {
  return function(e) {
    return e == null ? !1 : e[u] === D && (D !== void 0 || u in Object(e));
  };
}
function ti(u) {
  var D = ei(u);
  return D.length == 1 && D[0][2] ? Lt(D[0][0], D[0][1]) : function(e) {
    return e === u || Di(e, u, D);
  };
}
function ri(u, D) {
  return u != null && D in Object(u);
}
function ni(u, D, e) {
  D = TD(D, u);
  for (var t = -1, r = D.length, n = !1; ++t < r; ) {
    var a = lD(D[t]);
    if (!(n = u != null && e(u, a)))
      break;
    u = u[a];
  }
  return n || ++t != r ? n : (r = u == null ? 0 : u.length, !!r && Ve(r) && pt(a, r) && (K(u) || wD(u)));
}
function ai(u, D) {
  return u != null && ni(u, D, ri);
}
var Fi = 1, oi = 2;
function ii(u, D) {
  return Xe(u) && Rt(D) ? Lt(lD(u), D) : function(e) {
    var t = wt(e, u);
    return t === void 0 && t === D ? ai(e, u) : o0(D, t, Fi | oi);
  };
}
function si(u) {
  return function(D) {
    return D == null ? void 0 : D[u];
  };
}
function Ci(u) {
  return function(D) {
    return D0(D, u);
  };
}
function li(u) {
  return Xe(u) ? si(lD(u)) : Ci(u);
}
function Yt(u) {
  return typeof u == "function" ? u : u == null ? iD : typeof u == "object" ? K(u) ? ii(u[0], u[1]) : ti(u) : li(u);
}
function Ei(u, D, e, t) {
  for (var r = -1, n = u == null ? 0 : u.length; ++r < n; ) {
    var a = u[r];
    D(t, a, e(a), u);
  }
  return t;
}
function Ai(u) {
  return function(D, e, t) {
    for (var r = -1, n = Object(D), a = t(D), o = a.length; o--; ) {
      var i = a[u ? o : ++r];
      if (e(n[i], i, n) === !1)
        break;
    }
    return D;
  };
}
var ci = Ai();
const fi = ci;
function di(u, D) {
  return u && fi(u, D, zu);
}
function Bi(u, D) {
  return function(e, t) {
    if (e == null)
      return e;
    if (!CD(e))
      return u(e, t);
    for (var r = e.length, n = D ? r : -1, a = Object(e); (D ? n-- : ++n < r) && t(a[n], n, a) !== !1; )
      ;
    return e;
  };
}
var pi = Bi(di);
const Wt = pi;
function hi(u, D, e, t) {
  return Wt(u, function(r, n, a) {
    D(t, r, e(r), a);
  }), t;
}
function mi(u, D) {
  return function(e, t) {
    var r = K(e) ? Ei : hi, n = D ? D() : {};
    return r(e, u, Yt(t), n);
  };
}
var gi = "Expected a function";
function vi(u, D, e) {
  if (typeof u != "function")
    throw new TypeError(gi);
  return setTimeout(function() {
    u.apply(void 0, e);
  }, D);
}
var _i = Kn(function(u, D, e) {
  return vi(u, on(D) || 0, e);
});
const i0 = _i;
function yi(u, D, e) {
  for (var t = -1, r = u == null ? 0 : u.length; ++t < r; )
    if (e(D, u[t]))
      return !0;
  return !1;
}
function re(u) {
  var D = u == null ? 0 : u.length;
  return D ? u[D - 1] : void 0;
}
function bi(u, D) {
  return bD(D, function(e) {
    return [e, u[e]];
  });
}
function $i(u) {
  var D = -1, e = Array(u.size);
  return u.forEach(function(t) {
    e[++D] = [t, t];
  }), e;
}
var wi = "[object Map]", xi = "[object Set]";
function Oi(u) {
  return function(D) {
    var e = vu(D);
    return e == wi ? Ut(D) : e == xi ? $i(D) : bi(D, u(D));
  };
}
var Ti = Oi(zu);
const Zu = Ti;
function Si(u, D) {
  var e = -1, t = CD(u) ? Array(u.length) : [];
  return Wt(u, function(r, n, a) {
    t[++e] = D(r, n, a);
  }), t;
}
function rD(u, D) {
  var e = K(u) ? bD : Si;
  return e(u, Yt(D));
}
function Ht(u, D) {
  return t0(rD(u, D), 1);
}
var Pi = Object.prototype, Mi = Pi.hasOwnProperty, ki = mi(function(u, D, e) {
  Mi.call(u, e) ? u[e].push(D) : qe(u, e, [D]);
});
const Ii = ki;
function Ni(u, D) {
  return u > D;
}
function zi(u, D) {
  return D.length < 2 ? u : D0(u, RF(D, 0, -1));
}
var ji = "[object Map]", Ui = "[object Set]", Ri = Object.prototype, Li = Ri.hasOwnProperty;
function Vu(u) {
  if (u == null)
    return !0;
  if (CD(u) && (K(u) || typeof u == "string" || typeof u.splice == "function" || uD(u) || Je(u) || wD(u)))
    return !u.length;
  var D = vu(u);
  if (D == ji || D == Ui)
    return !u.size;
  if ($D(u))
    return !$t(u).length;
  for (var e in u)
    if (Li.call(u, e))
      return !1;
  return !0;
}
var Yi = Array.prototype, Wi = Yi.join;
function Hi(u, D) {
  return u == null ? "" : Wi.call(u, D);
}
function Gi(u, D) {
  return u < D;
}
function Gt(u, D, e) {
  for (var t = -1, r = u.length; ++t < r; ) {
    var n = u[t], a = D(n);
    if (a != null && (o === void 0 ? a === a && !oD(a) : e(a, o)))
      var o = a, i = n;
  }
  return i;
}
function qi(u) {
  return u && u.length ? Gt(u, iD, Ni) : void 0;
}
function Zi(u) {
  return u && u.length ? Gt(u, iD, Gi) : void 0;
}
function Vi(u, D) {
  return D = TD(D, u), u = zi(u, D), u == null || delete u[lD(re(D))];
}
function Qi(u) {
  return UF(u) ? void 0 : u;
}
var Ji = 1, Ki = 2, Xi = 4, us = PF(function(u, D) {
  var e = {};
  if (u == null)
    return e;
  var t = !1;
  D = bD(D, function(n) {
    return n = TD(n, u), t || (t = n.length > 1), n;
  }), sD(u, Mt(u), e), t && (e = BD(e, Ji | Ki | Xi, Qi));
  for (var r = D.length; r--; )
    Vi(e, D[r]);
  return e;
});
const qt = us;
var Ds = 1 / 0, es = Mu && 1 / F0(new Mu([, -0]))[1] == Ds ? function(u) {
  return new Mu(u);
} : Tn;
const ts = es;
var rs = 200;
function ns(u, D, e) {
  var t = -1, r = qn, n = u.length, a = !0, o = [], i = o;
  if (e)
    a = !1, r = yi;
  else if (n >= rs) {
    var F = D ? null : ts(u);
    if (F)
      return F0(F);
    a = !1, r = zt, i = new tD();
  } else
    i = D ? [] : o;
  u:
    for (; ++t < n; ) {
      var s = u[t], C = D ? D(s) : s;
      if (s = e || s !== 0 ? s : 0, a && C === C) {
        for (var E = i.length; E--; )
          if (i[E] === C)
            continue u;
        D && i.push(C), o.push(s);
      } else
        r(i, C, e) || (i !== o && i.push(C), o.push(s));
    }
  return o;
}
function Zt(u) {
  return u && u.length ? ns(u) : [];
}
var as = Object.defineProperty, Fs = Object.defineProperties, os = Object.getOwnPropertyDescriptors, q0 = Object.getOwnPropertySymbols, is = Object.prototype.hasOwnProperty, ss = Object.prototype.propertyIsEnumerable, Z0 = (u, D, e) => D in u ? as(u, D, { enumerable: !0, configurable: !0, writable: !0, value: e }) : u[D] = e, Cs = (u, D) => {
  for (var e in D || (D = {}))
    is.call(D, e) && Z0(u, e, D[e]);
  if (q0)
    for (var e of q0(D))
      ss.call(D, e) && Z0(u, e, D[e]);
  return u;
}, ls = (u, D) => Fs(u, os(D));
function L(u, D) {
  var e;
  const t = wr();
  return Ct(() => {
    t.value = u();
  }, ls(Cs({}, D), {
    flush: (e = D == null ? void 0 : D.flush) != null ? e : "sync"
  })), xr(t);
}
function Es(u) {
  return Or() ? (Tr(u), !0) : !1;
}
function As(u) {
  return typeof u == "function" ? u() : p(u);
}
const cs = typeof window < "u";
function Qu(u) {
  var D;
  const e = As(u);
  return (D = e == null ? void 0 : e.$el) != null ? D : e;
}
const Vt = cs ? window : void 0;
function fs() {
  const u = ou(!1);
  return Sr() && He(() => {
    u.value = !0;
  }), u;
}
function ds(u) {
  const D = fs();
  return mu(() => (D.value, !!u()));
}
var V0 = Object.getOwnPropertySymbols, Bs = Object.prototype.hasOwnProperty, ps = Object.prototype.propertyIsEnumerable, hs = (u, D) => {
  var e = {};
  for (var t in u)
    Bs.call(u, t) && D.indexOf(t) < 0 && (e[t] = u[t]);
  if (u != null && V0)
    for (var t of V0(u))
      D.indexOf(t) < 0 && ps.call(u, t) && (e[t] = u[t]);
  return e;
};
function ms(u, D, e = {}) {
  const t = e, { window: r = Vt } = t, n = hs(t, ["window"]);
  let a;
  const o = ds(() => r && "ResizeObserver" in r), i = () => {
    a && (a.disconnect(), a = void 0);
  }, F = mu(
    () => Array.isArray(u) ? u.map((E) => Qu(E)) : [Qu(u)]
  ), s = pD(
    F,
    (E) => {
      if (i(), o.value && r) {
        a = new ResizeObserver(D);
        for (const f of E)
          f && a.observe(f, n);
      }
    },
    { immediate: !0, flush: "post", deep: !0 }
  ), C = () => {
    i(), s();
  };
  return Es(C), {
    isSupported: o,
    stop: C
  };
}
function SD(u, D = { width: 0, height: 0 }, e = {}) {
  const { window: t = Vt, box: r = "content-box" } = e, n = mu(() => {
    var i, F;
    return (F = (i = Qu(u)) == null ? void 0 : i.namespaceURI) == null ? void 0 : F.includes("svg");
  }), a = ou(D.width), o = ou(D.height);
  return ms(
    u,
    ([i]) => {
      const F = r === "border-box" ? i.borderBoxSize : r === "content-box" ? i.contentBoxSize : i.devicePixelContentBoxSize;
      if (t && n.value) {
        const s = Qu(u);
        if (s) {
          const C = t.getComputedStyle(s);
          a.value = parseFloat(C.width), o.value = parseFloat(C.height);
        }
      } else if (F) {
        const s = Array.isArray(F) ? F : [F];
        a.value = s.reduce((C, { inlineSize: E }) => C + E, 0), o.value = s.reduce((C, { blockSize: E }) => C + E, 0);
      } else
        a.value = i.contentRect.width, o.value = i.contentRect.height;
    },
    e
  ), pD(
    () => Qu(u),
    (i) => {
      a.value = i ? D.width : 0, o.value = i ? D.height : 0;
    }
  ), {
    width: a,
    height: o
  };
}
const Qt = /* @__PURE__ */ q({
  __name: "BaseLink",
  props: {
    link: {},
    external: { type: Boolean, default: void 0 }
  },
  setup(u) {
    const D = u, e = L(
      () => D.external ?? /^(https?:\/\/)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&//=]*)$/.test(D.link || "")
    );
    return (t, r) => ($(), nu(Pr(D.link ? p(e) ? "a" : "RouterLink" : "div"), Mr(kr(
      D.link ? {
        [p(e) ? "href" : "to"]: D.link,
        ...p(e) ? {
          target: "_blank",
          rel: "noopener noreferrer"
        } : {}
      } : {}
    )), {
      default: J(() => [
        Ku(t.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gs = ["width", "height"], vs = /* @__PURE__ */ q({
  __name: "BasePoly",
  props: {
    height: {},
    width: {}
  },
  setup(u) {
    const D = u;
    return (e, t) => ($(), w("svg", {
      class: _(e.$style["poly-wrapper"]),
      width: D.width,
      height: D.height,
      preserveAspectRatio: "xMinYMin",
      "color-profile": "sRGB",
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      v("defs", null, [
        Ku(e.$slots, "defs", {}, void 0, !0)
      ]),
      Ku(e.$slots, "path", {}, void 0, !0)
    ], 10, gs));
  }
}), _s = {
  "poly-wrapper": "_poly-wrapper_14erz_1"
}, eu = (u, D) => {
  const e = u.__vccOpts || u;
  for (const [t, r] of D)
    e[t] = r;
  return e;
}, ys = {
  $style: _s
}, PD = /* @__PURE__ */ eu(vs, [["__cssModules", ys], ["__scopeId", "data-v-ac9d4bad"]]), bs = /* @__PURE__ */ q({
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
  setup(u, { emit: D }) {
    const e = u, { triggered: t, onTrigger: r } = Ge((n) => {
      e.disabled ? (n.preventDefault(), n.stopPropagation()) : D("click", n);
    });
    return (n, a) => ($(), nu(Qt, lt({
      ref: "wrapperRef$",
      link: e.link,
      class: [
        n.$style["button-container"],
        n.$style.behavior,
        n.$style[e.variant],
        n.$style[e.level],
        n.$style[e.size],
        e.disabled ? [n.$style.disabled] : [n.$style.clickable],
        {
          [n.$style.clicked]: e.clicked || p(t)()
        }
      ],
      "aria-disabled": e.disabled,
      "aria-label": e.label,
      onClick: p(r)
    }, e.disabled ? { disabled: "" } : {}, {
      role: "button",
      tabindex: "0"
    }), {
      default: J(() => [
        e.label ? ($(), w("span", {
          key: 0,
          class: _([n.$style["button-content"]])
        }, U(e.label), 3)) : z("", !0),
        e.icon ? ($(), w("span", {
          key: 1,
          class: _([n.$style["button-icon"]])
        }, [
          Q(p(Xu), {
            icon: e.icon
          }, null, 8, ["icon"])
        ], 2)) : z("", !0)
      ]),
      _: 1
    }, 16, ["link", "class", "aria-disabled", "aria-label", "onClick"]));
  }
}), $s = "_behavior_8dwe1_1", ws = "_clickable_8dwe1_1", xs = "_disabled_8dwe1_4", Os = "_draggable_8dwe1_7", Ts = "_loading_8dwe1_10", Ss = "_rounded_8dwe1_14", Ps = "_secondary_8dwe1_14", Ms = "_rect_8dwe1_14", ks = "_square_8dwe1_14", Is = "_circle_8dwe1_14", Ns = "_clicked_8dwe1_22", zs = "_small_8dwe1_143", js = "_large_8dwe1_147", Us = "_text_8dwe1_259", Rs = {
  behavior: $s,
  clickable: ws,
  disabled: xs,
  draggable: Os,
  loading: Ts,
  "button-container": "_button-container_8dwe1_14",
  rounded: Ss,
  secondary: Ps,
  rect: Ms,
  square: ks,
  circle: Is,
  clicked: Ns,
  "button-icon": "_button-icon_8dwe1_98",
  "button-content": "_button-content_8dwe1_114",
  small: zs,
  large: js,
  text: Us
}, Ls = {
  $style: Rs
}, Jt = /* @__PURE__ */ eu(bs, [["__cssModules", Ls], ["__scopeId", "data-v-5899d4b1"]]), Ys = /* @__PURE__ */ q({
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
  setup(u) {
    const D = u;
    Ir((r) => ({
      "1dbc842c": D.radius
    }));
    const { triggered: e, onTrigger: t } = Ge((r) => {
      D.clickable || r.preventDefault();
    });
    return (r, n) => ($(), nu(Qt, {
      ref: "wrapperRef$",
      link: D.link,
      class: _([
        r.$style["card-container"],
        r.$style.behavior,
        r.$style[D.variant],
        r.$style[`color-${D.color}`],
        r.$style[`stroke-${D.strokeWeight}`],
        r.$style[`purpose-${D.purpose}`],
        {
          [r.$style.clickable]: D.link || D.clickable,
          [r.$style["has-stroke"]]: D.hasStroke,
          [r.$style.clicked]: p(e)() && D.clickable
        }
      ]),
      onClick: p(t)
    }, {
      default: J(() => [
        Ku(r.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["link", "class", "onClick"]));
  }
}), Ws = "_behavior_ouh7m_1", Hs = "_clickable_ouh7m_1", Gs = "_disabled_ouh7m_4", qs = "_draggable_ouh7m_7", Zs = "_loading_ouh7m_10", Vs = "_metallic_ouh7m_14", Qs = "_flat_ouh7m_14", Js = "_clicked_ouh7m_22", Ks = "_dash_ouh7m_92", Xs = {
  behavior: Ws,
  clickable: Hs,
  disabled: Gs,
  draggable: qs,
  loading: Zs,
  "card-container": "_card-container_ouh7m_14",
  "color-default": "_color-default_ouh7m_14",
  metallic: Vs,
  "has-stroke": "_has-stroke_ouh7m_14",
  flat: Qs,
  "color-cyan": "_color-cyan_ouh7m_14",
  "color-blue": "_color-blue_ouh7m_14",
  "color-green": "_color-green_ouh7m_14",
  "color-orange": "_color-orange_ouh7m_14",
  "color-red": "_color-red_ouh7m_14",
  clicked: Js,
  dash: Ks,
  "stroke-bold": "_stroke-bold_ouh7m_399",
  "stroke-normal": "_stroke-normal_ouh7m_402",
  "stroke-thin": "_stroke-thin_ouh7m_405",
  "purpose-box": "_purpose-box_ouh7m_408",
  "purpose-container": "_purpose-container_ouh7m_412"
}, uC = {
  $style: Xs
}, MD = /* @__PURE__ */ eu(Ys, [["__cssModules", uC], ["__scopeId", "data-v-d941fd1e"]]);
function wu(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var ne = { exports: {} }, Kt = { exports: {} };
(function(u) {
  function D(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  u.exports = D, u.exports.__esModule = !0, u.exports.default = u.exports;
})(Kt);
var j = Kt.exports, ae = { exports: {} }, Fe = { exports: {} }, Xt = { exports: {} };
(function(u) {
  function D(e) {
    "@babel/helpers - typeof";
    return u.exports = D = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
      return typeof t;
    } : function(t) {
      return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, u.exports.__esModule = !0, u.exports.default = u.exports, D(e);
  }
  u.exports = D, u.exports.__esModule = !0, u.exports.default = u.exports;
})(Xt);
var ur = Xt.exports, oe = { exports: {} };
(function(u, D) {
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = e;
  function e(t, r) {
    if (r.length < t)
      throw new TypeError(t + " argument" + (t > 1 ? "s" : "") + " required, but only " + r.length + " present");
  }
  u.exports = D.default;
})(oe, oe.exports);
var Z = oe.exports;
(function(u, D) {
  var e = j.default;
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = n;
  var t = e(ur), r = e(Z);
  function n(a) {
    return (0, r.default)(1, arguments), a instanceof Date || (0, t.default)(a) === "object" && Object.prototype.toString.call(a) === "[object Date]";
  }
  u.exports = D.default;
})(Fe, Fe.exports);
var DC = Fe.exports, ie = { exports: {} };
(function(u, D) {
  var e = j.default;
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = n;
  var t = e(ur), r = e(Z);
  function n(a) {
    (0, r.default)(1, arguments);
    var o = Object.prototype.toString.call(a);
    return a instanceof Date || (0, t.default)(a) === "object" && o === "[object Date]" ? new Date(a.getTime()) : typeof a == "number" || o === "[object Number]" ? new Date(a) : ((typeof a == "string" || o === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
  }
  u.exports = D.default;
})(ie, ie.exports);
var Cu = ie.exports;
(function(u, D) {
  var e = j.default;
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = a;
  var t = e(DC), r = e(Cu), n = e(Z);
  function a(o) {
    if ((0, n.default)(1, arguments), !(0, t.default)(o) && typeof o != "number")
      return !1;
    var i = (0, r.default)(o);
    return !isNaN(Number(i));
  }
  u.exports = D.default;
})(ae, ae.exports);
var eC = ae.exports, se = { exports: {} }, Ce = { exports: {} }, le = { exports: {} };
(function(u, D) {
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = e;
  function e(t) {
    if (t === null || t === !0 || t === !1)
      return NaN;
    var r = Number(t);
    return isNaN(r) ? r : r < 0 ? Math.ceil(r) : Math.floor(r);
  }
  u.exports = D.default;
})(le, le.exports);
var xu = le.exports;
const tC = /* @__PURE__ */ wu(xu);
(function(u, D) {
  var e = j.default;
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = a;
  var t = e(xu), r = e(Cu), n = e(Z);
  function a(o, i) {
    (0, n.default)(2, arguments);
    var F = (0, r.default)(o).getTime(), s = (0, t.default)(i);
    return new Date(F + s);
  }
  u.exports = D.default;
})(Ce, Ce.exports);
var rC = Ce.exports;
(function(u, D) {
  var e = j.default;
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = a;
  var t = e(rC), r = e(Z), n = e(xu);
  function a(o, i) {
    (0, r.default)(2, arguments);
    var F = (0, n.default)(i);
    return (0, t.default)(o, -F);
  }
  u.exports = D.default;
})(se, se.exports);
var nC = se.exports, Ee = { exports: {} }, Ae = { exports: {} };
(function(u, D) {
  var e = j.default;
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = a;
  var t = e(Cu), r = e(Z), n = 864e5;
  function a(o) {
    (0, r.default)(1, arguments);
    var i = (0, t.default)(o), F = i.getTime();
    i.setUTCMonth(0, 1), i.setUTCHours(0, 0, 0, 0);
    var s = i.getTime(), C = F - s;
    return Math.floor(C / n) + 1;
  }
  u.exports = D.default;
})(Ae, Ae.exports);
var aC = Ae.exports, ce = { exports: {} }, fe = { exports: {} };
(function(u, D) {
  var e = j.default;
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = n;
  var t = e(Cu), r = e(Z);
  function n(a) {
    (0, r.default)(1, arguments);
    var o = 1, i = (0, t.default)(a), F = i.getUTCDay(), s = (F < o ? 7 : 0) + F - o;
    return i.setUTCDate(i.getUTCDate() - s), i.setUTCHours(0, 0, 0, 0), i;
  }
  u.exports = D.default;
})(fe, fe.exports);
var s0 = fe.exports, de = { exports: {} }, Be = { exports: {} };
(function(u, D) {
  var e = j.default;
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = a;
  var t = e(Cu), r = e(Z), n = e(s0);
  function a(o) {
    (0, r.default)(1, arguments);
    var i = (0, t.default)(o), F = i.getUTCFullYear(), s = /* @__PURE__ */ new Date(0);
    s.setUTCFullYear(F + 1, 0, 4), s.setUTCHours(0, 0, 0, 0);
    var C = (0, n.default)(s), E = /* @__PURE__ */ new Date(0);
    E.setUTCFullYear(F, 0, 4), E.setUTCHours(0, 0, 0, 0);
    var f = (0, n.default)(E);
    return i.getTime() >= C.getTime() ? F + 1 : i.getTime() >= f.getTime() ? F : F - 1;
  }
  u.exports = D.default;
})(Be, Be.exports);
var Dr = Be.exports;
(function(u, D) {
  var e = j.default;
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = a;
  var t = e(Dr), r = e(s0), n = e(Z);
  function a(o) {
    (0, n.default)(1, arguments);
    var i = (0, t.default)(o), F = /* @__PURE__ */ new Date(0);
    F.setUTCFullYear(i, 0, 4), F.setUTCHours(0, 0, 0, 0);
    var s = (0, r.default)(F);
    return s;
  }
  u.exports = D.default;
})(de, de.exports);
var FC = de.exports;
(function(u, D) {
  var e = j.default;
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = i;
  var t = e(Cu), r = e(s0), n = e(FC), a = e(Z), o = 6048e5;
  function i(F) {
    (0, a.default)(1, arguments);
    var s = (0, t.default)(F), C = (0, r.default)(s).getTime() - (0, n.default)(s).getTime();
    return Math.round(C / o) + 1;
  }
  u.exports = D.default;
})(ce, ce.exports);
var oC = ce.exports, pe = { exports: {} }, he = { exports: {} }, Ou = {};
Object.defineProperty(Ou, "__esModule", {
  value: !0
});
Ou.getDefaultOptions = iC;
Ou.setDefaultOptions = sC;
var er = {};
function iC() {
  return er;
}
function sC(u) {
  er = u;
}
(function(u, D) {
  var e = j.default;
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = o;
  var t = e(Cu), r = e(Z), n = e(xu), a = Ou;
  function o(i, F) {
    var s, C, E, f, l, m, A, c;
    (0, r.default)(1, arguments);
    var h = (0, a.getDefaultOptions)(), B = (0, n.default)((s = (C = (E = (f = F == null ? void 0 : F.weekStartsOn) !== null && f !== void 0 ? f : F == null || (l = F.locale) === null || l === void 0 || (m = l.options) === null || m === void 0 ? void 0 : m.weekStartsOn) !== null && E !== void 0 ? E : h.weekStartsOn) !== null && C !== void 0 ? C : (A = h.locale) === null || A === void 0 || (c = A.options) === null || c === void 0 ? void 0 : c.weekStartsOn) !== null && s !== void 0 ? s : 0);
    if (!(B >= 0 && B <= 6))
      throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var d = (0, t.default)(i), g = d.getUTCDay(), b = (g < B ? 7 : 0) + g - B;
    return d.setUTCDate(d.getUTCDate() - b), d.setUTCHours(0, 0, 0, 0), d;
  }
  u.exports = D.default;
})(he, he.exports);
var C0 = he.exports, me = { exports: {} }, ge = { exports: {} };
(function(u, D) {
  var e = j.default;
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = i;
  var t = e(Cu), r = e(Z), n = e(C0), a = e(xu), o = Ou;
  function i(F, s) {
    var C, E, f, l, m, A, c, h;
    (0, r.default)(1, arguments);
    var B = (0, t.default)(F), d = B.getUTCFullYear(), g = (0, o.getDefaultOptions)(), b = (0, a.default)((C = (E = (f = (l = s == null ? void 0 : s.firstWeekContainsDate) !== null && l !== void 0 ? l : s == null || (m = s.locale) === null || m === void 0 || (A = m.options) === null || A === void 0 ? void 0 : A.firstWeekContainsDate) !== null && f !== void 0 ? f : g.firstWeekContainsDate) !== null && E !== void 0 ? E : (c = g.locale) === null || c === void 0 || (h = c.options) === null || h === void 0 ? void 0 : h.firstWeekContainsDate) !== null && C !== void 0 ? C : 1);
    if (!(b >= 1 && b <= 7))
      throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var x = /* @__PURE__ */ new Date(0);
    x.setUTCFullYear(d + 1, 0, b), x.setUTCHours(0, 0, 0, 0);
    var Y = (0, n.default)(x, s), X = /* @__PURE__ */ new Date(0);
    X.setUTCFullYear(d, 0, b), X.setUTCHours(0, 0, 0, 0);
    var R = (0, n.default)(X, s);
    return B.getTime() >= Y.getTime() ? d + 1 : B.getTime() >= R.getTime() ? d : d - 1;
  }
  u.exports = D.default;
})(ge, ge.exports);
var tr = ge.exports;
(function(u, D) {
  var e = j.default;
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = i;
  var t = e(tr), r = e(Z), n = e(C0), a = e(xu), o = Ou;
  function i(F, s) {
    var C, E, f, l, m, A, c, h;
    (0, r.default)(1, arguments);
    var B = (0, o.getDefaultOptions)(), d = (0, a.default)((C = (E = (f = (l = s == null ? void 0 : s.firstWeekContainsDate) !== null && l !== void 0 ? l : s == null || (m = s.locale) === null || m === void 0 || (A = m.options) === null || A === void 0 ? void 0 : A.firstWeekContainsDate) !== null && f !== void 0 ? f : B.firstWeekContainsDate) !== null && E !== void 0 ? E : (c = B.locale) === null || c === void 0 || (h = c.options) === null || h === void 0 ? void 0 : h.firstWeekContainsDate) !== null && C !== void 0 ? C : 1), g = (0, t.default)(F, s), b = /* @__PURE__ */ new Date(0);
    b.setUTCFullYear(g, 0, d), b.setUTCHours(0, 0, 0, 0);
    var x = (0, n.default)(b, s);
    return x;
  }
  u.exports = D.default;
})(me, me.exports);
var CC = me.exports;
(function(u, D) {
  var e = j.default;
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = i;
  var t = e(Cu), r = e(C0), n = e(CC), a = e(Z), o = 6048e5;
  function i(F, s) {
    (0, a.default)(1, arguments);
    var C = (0, t.default)(F), E = (0, r.default)(C, s).getTime() - (0, n.default)(C, s).getTime();
    return Math.round(E / o) + 1;
  }
  u.exports = D.default;
})(pe, pe.exports);
var lC = pe.exports, ve = { exports: {} };
(function(u, D) {
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = e;
  function e(t, r) {
    for (var n = t < 0 ? "-" : "", a = Math.abs(t).toString(); a.length < r; )
      a = "0" + a;
    return n + a;
  }
  u.exports = D.default;
})(ve, ve.exports);
var rr = ve.exports, _e = { exports: {} };
(function(u, D) {
  var e = j.default;
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = void 0;
  var t = e(rr), r = {
    // Year
    y: function(o, i) {
      var F = o.getUTCFullYear(), s = F > 0 ? F : 1 - F;
      return (0, t.default)(i === "yy" ? s % 100 : s, i.length);
    },
    // Month
    M: function(o, i) {
      var F = o.getUTCMonth();
      return i === "M" ? String(F + 1) : (0, t.default)(F + 1, 2);
    },
    // Day of the month
    d: function(o, i) {
      return (0, t.default)(o.getUTCDate(), i.length);
    },
    // AM or PM
    a: function(o, i) {
      var F = o.getUTCHours() / 12 >= 1 ? "pm" : "am";
      switch (i) {
        case "a":
        case "aa":
          return F.toUpperCase();
        case "aaa":
          return F;
        case "aaaaa":
          return F[0];
        case "aaaa":
        default:
          return F === "am" ? "a.m." : "p.m.";
      }
    },
    // Hour [1-12]
    h: function(o, i) {
      return (0, t.default)(o.getUTCHours() % 12 || 12, i.length);
    },
    // Hour [0-23]
    H: function(o, i) {
      return (0, t.default)(o.getUTCHours(), i.length);
    },
    // Minute
    m: function(o, i) {
      return (0, t.default)(o.getUTCMinutes(), i.length);
    },
    // Second
    s: function(o, i) {
      return (0, t.default)(o.getUTCSeconds(), i.length);
    },
    // Fraction of second
    S: function(o, i) {
      var F = i.length, s = o.getUTCMilliseconds(), C = Math.floor(s * Math.pow(10, F - 3));
      return (0, t.default)(C, i.length);
    }
  }, n = r;
  D.default = n, u.exports = D.default;
})(_e, _e.exports);
var EC = _e.exports;
(function(u, D) {
  var e = j.default;
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = void 0;
  var t = e(aC), r = e(oC), n = e(Dr), a = e(lC), o = e(tr), i = e(rr), F = e(EC), s = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }, C = {
    // Era
    G: function(c, h, B) {
      var d = c.getUTCFullYear() > 0 ? 1 : 0;
      switch (h) {
        case "G":
        case "GG":
        case "GGG":
          return B.era(d, {
            width: "abbreviated"
          });
        case "GGGGG":
          return B.era(d, {
            width: "narrow"
          });
        case "GGGG":
        default:
          return B.era(d, {
            width: "wide"
          });
      }
    },
    // Year
    y: function(c, h, B) {
      if (h === "yo") {
        var d = c.getUTCFullYear(), g = d > 0 ? d : 1 - d;
        return B.ordinalNumber(g, {
          unit: "year"
        });
      }
      return F.default.y(c, h);
    },
    // Local week-numbering year
    Y: function(c, h, B, d) {
      var g = (0, o.default)(c, d), b = g > 0 ? g : 1 - g;
      if (h === "YY") {
        var x = b % 100;
        return (0, i.default)(x, 2);
      }
      return h === "Yo" ? B.ordinalNumber(b, {
        unit: "year"
      }) : (0, i.default)(b, h.length);
    },
    // ISO week-numbering year
    R: function(c, h) {
      var B = (0, n.default)(c);
      return (0, i.default)(B, h.length);
    },
    // Extended year. This is a single number designating the year of this calendar system.
    // The main difference between `y` and `u` localizers are B.C. years:
    // | Year | `y` | `u` |
    // |------|-----|-----|
    // | AC 1 |   1 |   1 |
    // | BC 1 |   1 |   0 |
    // | BC 2 |   2 |  -1 |
    // Also `yy` always returns the last two digits of a year,
    // while `uu` pads single digit years to 2 characters and returns other years unchanged.
    u: function(c, h) {
      var B = c.getUTCFullYear();
      return (0, i.default)(B, h.length);
    },
    // Quarter
    Q: function(c, h, B) {
      var d = Math.ceil((c.getUTCMonth() + 1) / 3);
      switch (h) {
        case "Q":
          return String(d);
        case "QQ":
          return (0, i.default)(d, 2);
        case "Qo":
          return B.ordinalNumber(d, {
            unit: "quarter"
          });
        case "QQQ":
          return B.quarter(d, {
            width: "abbreviated",
            context: "formatting"
          });
        case "QQQQQ":
          return B.quarter(d, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQ":
        default:
          return B.quarter(d, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Stand-alone quarter
    q: function(c, h, B) {
      var d = Math.ceil((c.getUTCMonth() + 1) / 3);
      switch (h) {
        case "q":
          return String(d);
        case "qq":
          return (0, i.default)(d, 2);
        case "qo":
          return B.ordinalNumber(d, {
            unit: "quarter"
          });
        case "qqq":
          return B.quarter(d, {
            width: "abbreviated",
            context: "standalone"
          });
        case "qqqqq":
          return B.quarter(d, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqq":
        default:
          return B.quarter(d, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    // Month
    M: function(c, h, B) {
      var d = c.getUTCMonth();
      switch (h) {
        case "M":
        case "MM":
          return F.default.M(c, h);
        case "Mo":
          return B.ordinalNumber(d + 1, {
            unit: "month"
          });
        case "MMM":
          return B.month(d, {
            width: "abbreviated",
            context: "formatting"
          });
        case "MMMMM":
          return B.month(d, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMM":
        default:
          return B.month(d, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Stand-alone month
    L: function(c, h, B) {
      var d = c.getUTCMonth();
      switch (h) {
        case "L":
          return String(d + 1);
        case "LL":
          return (0, i.default)(d + 1, 2);
        case "Lo":
          return B.ordinalNumber(d + 1, {
            unit: "month"
          });
        case "LLL":
          return B.month(d, {
            width: "abbreviated",
            context: "standalone"
          });
        case "LLLLL":
          return B.month(d, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLL":
        default:
          return B.month(d, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    // Local week of year
    w: function(c, h, B, d) {
      var g = (0, a.default)(c, d);
      return h === "wo" ? B.ordinalNumber(g, {
        unit: "week"
      }) : (0, i.default)(g, h.length);
    },
    // ISO week of year
    I: function(c, h, B) {
      var d = (0, r.default)(c);
      return h === "Io" ? B.ordinalNumber(d, {
        unit: "week"
      }) : (0, i.default)(d, h.length);
    },
    // Day of the month
    d: function(c, h, B) {
      return h === "do" ? B.ordinalNumber(c.getUTCDate(), {
        unit: "date"
      }) : F.default.d(c, h);
    },
    // Day of year
    D: function(c, h, B) {
      var d = (0, t.default)(c);
      return h === "Do" ? B.ordinalNumber(d, {
        unit: "dayOfYear"
      }) : (0, i.default)(d, h.length);
    },
    // Day of week
    E: function(c, h, B) {
      var d = c.getUTCDay();
      switch (h) {
        case "E":
        case "EE":
        case "EEE":
          return B.day(d, {
            width: "abbreviated",
            context: "formatting"
          });
        case "EEEEE":
          return B.day(d, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEEE":
          return B.day(d, {
            width: "short",
            context: "formatting"
          });
        case "EEEE":
        default:
          return B.day(d, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Local day of week
    e: function(c, h, B, d) {
      var g = c.getUTCDay(), b = (g - d.weekStartsOn + 8) % 7 || 7;
      switch (h) {
        case "e":
          return String(b);
        case "ee":
          return (0, i.default)(b, 2);
        case "eo":
          return B.ordinalNumber(b, {
            unit: "day"
          });
        case "eee":
          return B.day(g, {
            width: "abbreviated",
            context: "formatting"
          });
        case "eeeee":
          return B.day(g, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeeee":
          return B.day(g, {
            width: "short",
            context: "formatting"
          });
        case "eeee":
        default:
          return B.day(g, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Stand-alone local day of week
    c: function(c, h, B, d) {
      var g = c.getUTCDay(), b = (g - d.weekStartsOn + 8) % 7 || 7;
      switch (h) {
        case "c":
          return String(b);
        case "cc":
          return (0, i.default)(b, h.length);
        case "co":
          return B.ordinalNumber(b, {
            unit: "day"
          });
        case "ccc":
          return B.day(g, {
            width: "abbreviated",
            context: "standalone"
          });
        case "ccccc":
          return B.day(g, {
            width: "narrow",
            context: "standalone"
          });
        case "cccccc":
          return B.day(g, {
            width: "short",
            context: "standalone"
          });
        case "cccc":
        default:
          return B.day(g, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    // ISO day of week
    i: function(c, h, B) {
      var d = c.getUTCDay(), g = d === 0 ? 7 : d;
      switch (h) {
        case "i":
          return String(g);
        case "ii":
          return (0, i.default)(g, h.length);
        case "io":
          return B.ordinalNumber(g, {
            unit: "day"
          });
        case "iii":
          return B.day(d, {
            width: "abbreviated",
            context: "formatting"
          });
        case "iiiii":
          return B.day(d, {
            width: "narrow",
            context: "formatting"
          });
        case "iiiiii":
          return B.day(d, {
            width: "short",
            context: "formatting"
          });
        case "iiii":
        default:
          return B.day(d, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // AM or PM
    a: function(c, h, B) {
      var d = c.getUTCHours(), g = d / 12 >= 1 ? "pm" : "am";
      switch (h) {
        case "a":
        case "aa":
          return B.dayPeriod(g, {
            width: "abbreviated",
            context: "formatting"
          });
        case "aaa":
          return B.dayPeriod(g, {
            width: "abbreviated",
            context: "formatting"
          }).toLowerCase();
        case "aaaaa":
          return B.dayPeriod(g, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaa":
        default:
          return B.dayPeriod(g, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // AM, PM, midnight, noon
    b: function(c, h, B) {
      var d = c.getUTCHours(), g;
      switch (d === 12 ? g = s.noon : d === 0 ? g = s.midnight : g = d / 12 >= 1 ? "pm" : "am", h) {
        case "b":
        case "bb":
          return B.dayPeriod(g, {
            width: "abbreviated",
            context: "formatting"
          });
        case "bbb":
          return B.dayPeriod(g, {
            width: "abbreviated",
            context: "formatting"
          }).toLowerCase();
        case "bbbbb":
          return B.dayPeriod(g, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbb":
        default:
          return B.dayPeriod(g, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // in the morning, in the afternoon, in the evening, at night
    B: function(c, h, B) {
      var d = c.getUTCHours(), g;
      switch (d >= 17 ? g = s.evening : d >= 12 ? g = s.afternoon : d >= 4 ? g = s.morning : g = s.night, h) {
        case "B":
        case "BB":
        case "BBB":
          return B.dayPeriod(g, {
            width: "abbreviated",
            context: "formatting"
          });
        case "BBBBB":
          return B.dayPeriod(g, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBB":
        default:
          return B.dayPeriod(g, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Hour [1-12]
    h: function(c, h, B) {
      if (h === "ho") {
        var d = c.getUTCHours() % 12;
        return d === 0 && (d = 12), B.ordinalNumber(d, {
          unit: "hour"
        });
      }
      return F.default.h(c, h);
    },
    // Hour [0-23]
    H: function(c, h, B) {
      return h === "Ho" ? B.ordinalNumber(c.getUTCHours(), {
        unit: "hour"
      }) : F.default.H(c, h);
    },
    // Hour [0-11]
    K: function(c, h, B) {
      var d = c.getUTCHours() % 12;
      return h === "Ko" ? B.ordinalNumber(d, {
        unit: "hour"
      }) : (0, i.default)(d, h.length);
    },
    // Hour [1-24]
    k: function(c, h, B) {
      var d = c.getUTCHours();
      return d === 0 && (d = 24), h === "ko" ? B.ordinalNumber(d, {
        unit: "hour"
      }) : (0, i.default)(d, h.length);
    },
    // Minute
    m: function(c, h, B) {
      return h === "mo" ? B.ordinalNumber(c.getUTCMinutes(), {
        unit: "minute"
      }) : F.default.m(c, h);
    },
    // Second
    s: function(c, h, B) {
      return h === "so" ? B.ordinalNumber(c.getUTCSeconds(), {
        unit: "second"
      }) : F.default.s(c, h);
    },
    // Fraction of second
    S: function(c, h) {
      return F.default.S(c, h);
    },
    // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
    X: function(c, h, B, d) {
      var g = d._originalDate || c, b = g.getTimezoneOffset();
      if (b === 0)
        return "Z";
      switch (h) {
        case "X":
          return f(b);
        case "XXXX":
        case "XX":
          return l(b);
        case "XXXXX":
        case "XXX":
        default:
          return l(b, ":");
      }
    },
    // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
    x: function(c, h, B, d) {
      var g = d._originalDate || c, b = g.getTimezoneOffset();
      switch (h) {
        case "x":
          return f(b);
        case "xxxx":
        case "xx":
          return l(b);
        case "xxxxx":
        case "xxx":
        default:
          return l(b, ":");
      }
    },
    // Timezone (GMT)
    O: function(c, h, B, d) {
      var g = d._originalDate || c, b = g.getTimezoneOffset();
      switch (h) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + E(b, ":");
        case "OOOO":
        default:
          return "GMT" + l(b, ":");
      }
    },
    // Timezone (specific non-location)
    z: function(c, h, B, d) {
      var g = d._originalDate || c, b = g.getTimezoneOffset();
      switch (h) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + E(b, ":");
        case "zzzz":
        default:
          return "GMT" + l(b, ":");
      }
    },
    // Seconds timestamp
    t: function(c, h, B, d) {
      var g = d._originalDate || c, b = Math.floor(g.getTime() / 1e3);
      return (0, i.default)(b, h.length);
    },
    // Milliseconds timestamp
    T: function(c, h, B, d) {
      var g = d._originalDate || c, b = g.getTime();
      return (0, i.default)(b, h.length);
    }
  };
  function E(A, c) {
    var h = A > 0 ? "-" : "+", B = Math.abs(A), d = Math.floor(B / 60), g = B % 60;
    if (g === 0)
      return h + String(d);
    var b = c || "";
    return h + String(d) + b + (0, i.default)(g, 2);
  }
  function f(A, c) {
    if (A % 60 === 0) {
      var h = A > 0 ? "-" : "+";
      return h + (0, i.default)(Math.abs(A) / 60, 2);
    }
    return l(A, c);
  }
  function l(A, c) {
    var h = c || "", B = A > 0 ? "-" : "+", d = Math.abs(A), g = (0, i.default)(Math.floor(d / 60), 2), b = (0, i.default)(d % 60, 2);
    return B + g + h + b;
  }
  var m = C;
  D.default = m, u.exports = D.default;
})(Ee, Ee.exports);
var AC = Ee.exports, ye = { exports: {} };
(function(u, D) {
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = void 0;
  var e = function(i, F) {
    switch (i) {
      case "P":
        return F.date({
          width: "short"
        });
      case "PP":
        return F.date({
          width: "medium"
        });
      case "PPP":
        return F.date({
          width: "long"
        });
      case "PPPP":
      default:
        return F.date({
          width: "full"
        });
    }
  }, t = function(i, F) {
    switch (i) {
      case "p":
        return F.time({
          width: "short"
        });
      case "pp":
        return F.time({
          width: "medium"
        });
      case "ppp":
        return F.time({
          width: "long"
        });
      case "pppp":
      default:
        return F.time({
          width: "full"
        });
    }
  }, r = function(i, F) {
    var s = i.match(/(P+)(p+)?/) || [], C = s[1], E = s[2];
    if (!E)
      return e(i, F);
    var f;
    switch (C) {
      case "P":
        f = F.dateTime({
          width: "short"
        });
        break;
      case "PP":
        f = F.dateTime({
          width: "medium"
        });
        break;
      case "PPP":
        f = F.dateTime({
          width: "long"
        });
        break;
      case "PPPP":
      default:
        f = F.dateTime({
          width: "full"
        });
        break;
    }
    return f.replace("{{date}}", e(C, F)).replace("{{time}}", t(E, F));
  }, n = {
    p: t,
    P: r
  }, a = n;
  D.default = a, u.exports = D.default;
})(ye, ye.exports);
var cC = ye.exports, be = { exports: {} };
(function(u, D) {
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = e;
  function e(t) {
    var r = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
    return r.setUTCFullYear(t.getFullYear()), t.getTime() - r.getTime();
  }
  u.exports = D.default;
})(be, be.exports);
var nr = be.exports;
const Q0 = /* @__PURE__ */ wu(nr);
var ED = {};
Object.defineProperty(ED, "__esModule", {
  value: !0
});
ED.isProtectedDayOfYearToken = BC;
ED.isProtectedWeekYearToken = pC;
ED.throwProtectedError = hC;
var fC = ["D", "DD"], dC = ["YY", "YYYY"];
function BC(u) {
  return fC.indexOf(u) !== -1;
}
function pC(u) {
  return dC.indexOf(u) !== -1;
}
function hC(u, D, e) {
  if (u === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(D, "`) for formatting years to the input `").concat(e, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (u === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(D, "`) for formatting years to the input `").concat(e, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (u === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(D, "`) for formatting days of the month to the input `").concat(e, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (u === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(D, "`) for formatting days of the month to the input `").concat(e, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var $e = { exports: {} }, we = { exports: {} }, xe = { exports: {} };
(function(u, D) {
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = void 0;
  var e = {
    lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds"
    },
    xSeconds: {
      one: "1 second",
      other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes"
    },
    xMinutes: {
      one: "1 minute",
      other: "{{count}} minutes"
    },
    aboutXHours: {
      one: "about 1 hour",
      other: "about {{count}} hours"
    },
    xHours: {
      one: "1 hour",
      other: "{{count}} hours"
    },
    xDays: {
      one: "1 day",
      other: "{{count}} days"
    },
    aboutXWeeks: {
      one: "about 1 week",
      other: "about {{count}} weeks"
    },
    xWeeks: {
      one: "1 week",
      other: "{{count}} weeks"
    },
    aboutXMonths: {
      one: "about 1 month",
      other: "about {{count}} months"
    },
    xMonths: {
      one: "1 month",
      other: "{{count}} months"
    },
    aboutXYears: {
      one: "about 1 year",
      other: "about {{count}} years"
    },
    xYears: {
      one: "1 year",
      other: "{{count}} years"
    },
    overXYears: {
      one: "over 1 year",
      other: "over {{count}} years"
    },
    almostXYears: {
      one: "almost 1 year",
      other: "almost {{count}} years"
    }
  }, t = function(a, o, i) {
    var F, s = e[a];
    return typeof s == "string" ? F = s : o === 1 ? F = s.one : F = s.other.replace("{{count}}", o.toString()), i != null && i.addSuffix ? i.comparison && i.comparison > 0 ? "in " + F : F + " ago" : F;
  }, r = t;
  D.default = r, u.exports = D.default;
})(xe, xe.exports);
var mC = xe.exports, Oe = { exports: {} }, Te = { exports: {} };
(function(u, D) {
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = e;
  function e(t) {
    return function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = r.width ? String(r.width) : t.defaultWidth, a = t.formats[n] || t.formats[t.defaultWidth];
      return a;
    };
  }
  u.exports = D.default;
})(Te, Te.exports);
var gC = Te.exports;
(function(u, D) {
  var e = j.default;
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = void 0;
  var t = e(gC), r = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
  }, n = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
  }, a = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
  }, o = {
    date: (0, t.default)({
      formats: r,
      defaultWidth: "full"
    }),
    time: (0, t.default)({
      formats: n,
      defaultWidth: "full"
    }),
    dateTime: (0, t.default)({
      formats: a,
      defaultWidth: "full"
    })
  }, i = o;
  D.default = i, u.exports = D.default;
})(Oe, Oe.exports);
var vC = Oe.exports, Se = { exports: {} };
(function(u, D) {
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = void 0;
  var e = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
  }, t = function(a, o, i, F) {
    return e[a];
  }, r = t;
  D.default = r, u.exports = D.default;
})(Se, Se.exports);
var _C = Se.exports, Pe = { exports: {} }, Me = { exports: {} };
(function(u, D) {
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = e;
  function e(t) {
    return function(r, n) {
      var a = n != null && n.context ? String(n.context) : "standalone", o;
      if (a === "formatting" && t.formattingValues) {
        var i = t.defaultFormattingWidth || t.defaultWidth, F = n != null && n.width ? String(n.width) : i;
        o = t.formattingValues[F] || t.formattingValues[i];
      } else {
        var s = t.defaultWidth, C = n != null && n.width ? String(n.width) : t.defaultWidth;
        o = t.values[C] || t.values[s];
      }
      var E = t.argumentCallback ? t.argumentCallback(r) : r;
      return o[E];
    };
  }
  u.exports = D.default;
})(Me, Me.exports);
var yC = Me.exports;
(function(u, D) {
  var e = j.default;
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = void 0;
  var t = e(yC), r = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"]
  }, n = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
  }, a = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  }, o = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  }, i = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    }
  }, F = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
    }
  }, s = function(l, m) {
    var A = Number(l), c = A % 100;
    if (c > 20 || c < 10)
      switch (c % 10) {
        case 1:
          return A + "st";
        case 2:
          return A + "nd";
        case 3:
          return A + "rd";
      }
    return A + "th";
  }, C = {
    ordinalNumber: s,
    era: (0, t.default)({
      values: r,
      defaultWidth: "wide"
    }),
    quarter: (0, t.default)({
      values: n,
      defaultWidth: "wide",
      argumentCallback: function(l) {
        return l - 1;
      }
    }),
    month: (0, t.default)({
      values: a,
      defaultWidth: "wide"
    }),
    day: (0, t.default)({
      values: o,
      defaultWidth: "wide"
    }),
    dayPeriod: (0, t.default)({
      values: i,
      defaultWidth: "wide",
      formattingValues: F,
      defaultFormattingWidth: "wide"
    })
  }, E = C;
  D.default = E, u.exports = D.default;
})(Pe, Pe.exports);
var bC = Pe.exports, ke = { exports: {} }, Ie = { exports: {} };
(function(u, D) {
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = e;
  function e(n) {
    return function(a) {
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = o.width, F = i && n.matchPatterns[i] || n.matchPatterns[n.defaultMatchWidth], s = a.match(F);
      if (!s)
        return null;
      var C = s[0], E = i && n.parsePatterns[i] || n.parsePatterns[n.defaultParseWidth], f = Array.isArray(E) ? r(E, function(A) {
        return A.test(C);
      }) : t(E, function(A) {
        return A.test(C);
      }), l;
      l = n.valueCallback ? n.valueCallback(f) : f, l = o.valueCallback ? o.valueCallback(l) : l;
      var m = a.slice(C.length);
      return {
        value: l,
        rest: m
      };
    };
  }
  function t(n, a) {
    for (var o in n)
      if (n.hasOwnProperty(o) && a(n[o]))
        return o;
  }
  function r(n, a) {
    for (var o = 0; o < n.length; o++)
      if (a(n[o]))
        return o;
  }
  u.exports = D.default;
})(Ie, Ie.exports);
var $C = Ie.exports, Ne = { exports: {} };
(function(u, D) {
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = e;
  function e(t) {
    return function(r) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.match(t.matchPattern);
      if (!a)
        return null;
      var o = a[0], i = r.match(t.parsePattern);
      if (!i)
        return null;
      var F = t.valueCallback ? t.valueCallback(i[0]) : i[0];
      F = n.valueCallback ? n.valueCallback(F) : F;
      var s = r.slice(o.length);
      return {
        value: F,
        rest: s
      };
    };
  }
  u.exports = D.default;
})(Ne, Ne.exports);
var wC = Ne.exports;
(function(u, D) {
  var e = j.default;
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = void 0;
  var t = e($C), r = e(wC), n = /^(\d+)(th|st|nd|rd)?/i, a = /\d+/i, o = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
  }, i = {
    any: [/^b/i, /^(a|c)/i]
  }, F = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
  }, s = {
    any: [/1/i, /2/i, /3/i, /4/i]
  }, C = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
  }, E = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
  }, f = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
  }, l = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
  }, m = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
  }, A = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i
    }
  }, c = {
    ordinalNumber: (0, r.default)({
      matchPattern: n,
      parsePattern: a,
      valueCallback: function(d) {
        return parseInt(d, 10);
      }
    }),
    era: (0, t.default)({
      matchPatterns: o,
      defaultMatchWidth: "wide",
      parsePatterns: i,
      defaultParseWidth: "any"
    }),
    quarter: (0, t.default)({
      matchPatterns: F,
      defaultMatchWidth: "wide",
      parsePatterns: s,
      defaultParseWidth: "any",
      valueCallback: function(d) {
        return d + 1;
      }
    }),
    month: (0, t.default)({
      matchPatterns: C,
      defaultMatchWidth: "wide",
      parsePatterns: E,
      defaultParseWidth: "any"
    }),
    day: (0, t.default)({
      matchPatterns: f,
      defaultMatchWidth: "wide",
      parsePatterns: l,
      defaultParseWidth: "any"
    }),
    dayPeriod: (0, t.default)({
      matchPatterns: m,
      defaultMatchWidth: "any",
      parsePatterns: A,
      defaultParseWidth: "any"
    })
  }, h = c;
  D.default = h, u.exports = D.default;
})(ke, ke.exports);
var xC = ke.exports;
(function(u, D) {
  var e = j.default;
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = void 0;
  var t = e(mC), r = e(vC), n = e(_C), a = e(bC), o = e(xC), i = {
    code: "en-US",
    formatDistance: t.default,
    formatLong: r.default,
    formatRelative: n.default,
    localize: a.default,
    match: o.default,
    options: {
      weekStartsOn: 0,
      firstWeekContainsDate: 1
    }
  }, F = i;
  D.default = F, u.exports = D.default;
})(we, we.exports);
var OC = we.exports;
(function(u, D) {
  var e = j.default;
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = void 0;
  var t = e(OC), r = t.default;
  D.default = r, u.exports = D.default;
})($e, $e.exports);
var TC = $e.exports;
(function(u, D) {
  var e = j.default;
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = B;
  var t = e(eC), r = e(nC), n = e(Cu), a = e(AC), o = e(cC), i = e(nr), F = ED, s = e(xu), C = e(Z), E = Ou, f = e(TC), l = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, m = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, A = /^'([^]*?)'?$/, c = /''/g, h = /[a-zA-Z]/;
  function B(g, b, x) {
    var Y, X, R, T, N, H, ru, Uu, Ru, Lu, Bu, ID, ND, zD, jD, UD, RD, LD;
    (0, C.default)(2, arguments);
    var vr = String(b), Yu = (0, E.getDefaultOptions)(), Wu = (Y = (X = x == null ? void 0 : x.locale) !== null && X !== void 0 ? X : Yu.locale) !== null && Y !== void 0 ? Y : f.default, YD = (0, s.default)((R = (T = (N = (H = x == null ? void 0 : x.firstWeekContainsDate) !== null && H !== void 0 ? H : x == null || (ru = x.locale) === null || ru === void 0 || (Uu = ru.options) === null || Uu === void 0 ? void 0 : Uu.firstWeekContainsDate) !== null && N !== void 0 ? N : Yu.firstWeekContainsDate) !== null && T !== void 0 ? T : (Ru = Yu.locale) === null || Ru === void 0 || (Lu = Ru.options) === null || Lu === void 0 ? void 0 : Lu.firstWeekContainsDate) !== null && R !== void 0 ? R : 1);
    if (!(YD >= 1 && YD <= 7))
      throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var WD = (0, s.default)((Bu = (ID = (ND = (zD = x == null ? void 0 : x.weekStartsOn) !== null && zD !== void 0 ? zD : x == null || (jD = x.locale) === null || jD === void 0 || (UD = jD.options) === null || UD === void 0 ? void 0 : UD.weekStartsOn) !== null && ND !== void 0 ? ND : Yu.weekStartsOn) !== null && ID !== void 0 ? ID : (RD = Yu.locale) === null || RD === void 0 || (LD = RD.options) === null || LD === void 0 ? void 0 : LD.weekStartsOn) !== null && Bu !== void 0 ? Bu : 0);
    if (!(WD >= 0 && WD <= 6))
      throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    if (!Wu.localize)
      throw new RangeError("locale must contain localize property");
    if (!Wu.formatLong)
      throw new RangeError("locale must contain formatLong property");
    var cD = (0, n.default)(g);
    if (!(0, t.default)(cD))
      throw new RangeError("Invalid time value");
    var _r = (0, i.default)(cD), yr = (0, r.default)(cD, _r), br = {
      firstWeekContainsDate: YD,
      weekStartsOn: WD,
      locale: Wu,
      _originalDate: cD
    }, $r = vr.match(m).map(function(uu) {
      var cu = uu[0];
      if (cu === "p" || cu === "P") {
        var fD = o.default[cu];
        return fD(uu, Wu.formatLong);
      }
      return uu;
    }).join("").match(l).map(function(uu) {
      if (uu === "''")
        return "'";
      var cu = uu[0];
      if (cu === "'")
        return d(uu);
      var fD = a.default[cu];
      if (fD)
        return !(x != null && x.useAdditionalWeekYearTokens) && (0, F.isProtectedWeekYearToken)(uu) && (0, F.throwProtectedError)(uu, b, String(g)), !(x != null && x.useAdditionalDayOfYearTokens) && (0, F.isProtectedDayOfYearToken)(uu) && (0, F.throwProtectedError)(uu, b, String(g)), fD(yr, uu, Wu.localize, br);
      if (cu.match(h))
        throw new RangeError("Format string contains an unescaped latin alphabet character `" + cu + "`");
      return uu;
    }).join("");
    return $r;
  }
  function d(g) {
    var b = g.match(A);
    return b ? b[1].replace(c, "'") : g;
  }
  u.exports = D.default;
})(ne, ne.exports);
var SC = ne.exports;
const PC = /* @__PURE__ */ wu(SC);
function J0(u, D, e) {
  var t = IC(u, e.timeZone, e.locale);
  return t.formatToParts ? MC(t, D) : kC(t, D);
}
function MC(u, D) {
  for (var e = u.formatToParts(D), t = e.length - 1; t >= 0; --t)
    if (e[t].type === "timeZoneName")
      return e[t].value;
}
function kC(u, D) {
  var e = u.format(D).replace(/\u200E/g, ""), t = / [\w-+ ]+$/.exec(e);
  return t ? t[0].substr(1) : "";
}
function IC(u, D, e) {
  if (e && !e.code)
    throw new Error(
      "date-fns-tz error: Please set a language code on the locale object imported from date-fns, e.g. `locale.code = 'en-US'`"
    );
  return new Intl.DateTimeFormat(e ? [e.code, "en-US"] : void 0, {
    timeZone: D,
    timeZoneName: u
  });
}
function NC(u, D) {
  var e = RC(D);
  return e.formatToParts ? jC(e, u) : UC(e, u);
}
var zC = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function jC(u, D) {
  try {
    for (var e = u.formatToParts(D), t = [], r = 0; r < e.length; r++) {
      var n = zC[e[r].type];
      n >= 0 && (t[n] = parseInt(e[r].value, 10));
    }
    return t;
  } catch (a) {
    if (a instanceof RangeError)
      return [NaN];
    throw a;
  }
}
function UC(u, D) {
  var e = u.format(D).replace(/\u200E/g, ""), t = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(e);
  return [t[3], t[1], t[2], t[4], t[5], t[6]];
}
var ZD = {};
function RC(u) {
  if (!ZD[u]) {
    var D = new Intl.DateTimeFormat("en-US", {
      hour12: !1,
      timeZone: "America/New_York",
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), e = D === "06/25/2014, 00:00:00" || D === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
    ZD[u] = e ? new Intl.DateTimeFormat("en-US", {
      hour12: !1,
      timeZone: u,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }) : new Intl.DateTimeFormat("en-US", {
      hourCycle: "h23",
      timeZone: u,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }
  return ZD[u];
}
function ar(u, D, e, t, r, n, a) {
  var o = /* @__PURE__ */ new Date(0);
  return o.setUTCFullYear(u, D, e), o.setUTCHours(t, r, n, a), o;
}
var K0 = 36e5, LC = 6e4, VD = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
};
function kD(u, D, e) {
  var t, r;
  if (!u || (t = VD.timezoneZ.exec(u), t))
    return 0;
  var n;
  if (t = VD.timezoneHH.exec(u), t)
    return n = parseInt(t[1], 10), X0(n) ? -(n * K0) : NaN;
  if (t = VD.timezoneHHMM.exec(u), t) {
    n = parseInt(t[1], 10);
    var a = parseInt(t[2], 10);
    return X0(n, a) ? (r = Math.abs(n) * K0 + a * LC, n > 0 ? -r : r) : NaN;
  }
  if (HC(u)) {
    D = new Date(D || Date.now());
    var o = e ? D : YC(D), i = ze(o, u), F = e ? i : WC(D, i, u);
    return -F;
  }
  return NaN;
}
function YC(u) {
  return ar(
    u.getFullYear(),
    u.getMonth(),
    u.getDate(),
    u.getHours(),
    u.getMinutes(),
    u.getSeconds(),
    u.getMilliseconds()
  );
}
function ze(u, D) {
  var e = NC(u, D), t = ar(
    e[0],
    e[1] - 1,
    e[2],
    e[3] % 24,
    e[4],
    e[5],
    0
  ).getTime(), r = u.getTime(), n = r % 1e3;
  return r -= n >= 0 ? n : 1e3 + n, t - r;
}
function WC(u, D, e) {
  var t = u.getTime(), r = t - D, n = ze(new Date(r), e);
  if (D === n)
    return D;
  r -= n - D;
  var a = ze(new Date(r), e);
  return n === a ? n : Math.max(n, a);
}
function X0(u, D) {
  return -23 <= u && u <= 23 && (D == null || 0 <= D && D <= 59);
}
var ut = {};
function HC(u) {
  if (ut[u])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: u }), ut[u] = !0, !0;
  } catch {
    return !1;
  }
}
var GC = 60 * 1e3, qC = {
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(u, D, e, t) {
    var r = QD(t.timeZone, t._originalDate || u);
    if (r === 0)
      return "Z";
    switch (D) {
      case "X":
        return Dt(r);
      case "XXXX":
      case "XX":
        return Su(r);
      case "XXXXX":
      case "XXX":
      default:
        return Su(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(u, D, e, t) {
    var r = QD(t.timeZone, t._originalDate || u);
    switch (D) {
      case "x":
        return Dt(r);
      case "xxxx":
      case "xx":
        return Su(r);
      case "xxxxx":
      case "xxx":
      default:
        return Su(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(u, D, e, t) {
    var r = QD(t.timeZone, t._originalDate || u);
    switch (D) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + ZC(r, ":");
      case "OOOO":
      default:
        return "GMT" + Su(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(u, D, e, t) {
    var r = t._originalDate || u;
    switch (D) {
      case "z":
      case "zz":
      case "zzz":
        return J0("short", r, t);
      case "zzzz":
      default:
        return J0("long", r, t);
    }
  }
};
function QD(u, D) {
  var e = u ? kD(u, D, !0) / GC : D.getTimezoneOffset();
  if (Number.isNaN(e))
    throw new RangeError("Invalid time zone specified: " + u);
  return e;
}
function gD(u, D) {
  for (var e = u < 0 ? "-" : "", t = Math.abs(u).toString(); t.length < D; )
    t = "0" + t;
  return e + t;
}
function Su(u, D) {
  var e = D || "", t = u > 0 ? "-" : "+", r = Math.abs(u), n = gD(Math.floor(r / 60), 2), a = gD(Math.floor(r % 60), 2);
  return t + n + e + a;
}
function Dt(u, D) {
  if (u % 60 === 0) {
    var e = u > 0 ? "-" : "+";
    return e + gD(Math.abs(u) / 60, 2);
  }
  return Su(u, D);
}
function ZC(u, D) {
  var e = u > 0 ? "-" : "+", t = Math.abs(u), r = Math.floor(t / 60), n = t % 60;
  if (n === 0)
    return e + String(r);
  var a = D || "";
  return e + String(r) + a + gD(n, 2);
}
const VC = qC;
var QC = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, JD = 36e5, et = 6e4, JC = 2, G = {
  dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
  datePattern: /^([0-9W+-]+)(.*)/,
  plainTime: /:/,
  // year tokens
  YY: /^(\d{2})$/,
  YYY: [
    /^([+-]\d{2})$/,
    // 0 additional digits
    /^([+-]\d{3})$/,
    // 1 additional digit
    /^([+-]\d{4})$/
    // 2 additional digits
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [
    /^([+-]\d{4})/,
    // 0 additional digits
    /^([+-]\d{5})/,
    // 1 additional digit
    /^([+-]\d{6})/
    // 2 additional digits
  ],
  // date tokens
  MM: /^-(\d{2})$/,
  DDD: /^-?(\d{3})$/,
  MMDD: /^-?(\d{2})-?(\d{2})$/,
  Www: /^-?W(\d{2})$/,
  WwwD: /^-?W(\d{2})-?(\d{1})$/,
  HH: /^(\d{2}([.,]\d*)?)$/,
  HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  // time zone tokens (to identify the presence of a tz)
  timeZone: QC
};
function Fr(u, D) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (u === null)
    return /* @__PURE__ */ new Date(NaN);
  var e = D || {}, t = e.additionalDigits == null ? JC : tC(e.additionalDigits);
  if (t !== 2 && t !== 1 && t !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (u instanceof Date || typeof u == "object" && Object.prototype.toString.call(u) === "[object Date]")
    return new Date(u.getTime());
  if (typeof u == "number" || Object.prototype.toString.call(u) === "[object Number]")
    return new Date(u);
  if (!(typeof u == "string" || Object.prototype.toString.call(u) === "[object String]"))
    return /* @__PURE__ */ new Date(NaN);
  var r = KC(u), n = XC(r.date, t), a = n.year, o = n.restDateString, i = ul(o, a);
  if (isNaN(i))
    return /* @__PURE__ */ new Date(NaN);
  if (i) {
    var F = i.getTime(), s = 0, C;
    if (r.time && (s = Dl(r.time), isNaN(s)))
      return /* @__PURE__ */ new Date(NaN);
    if (r.timeZone || e.timeZone) {
      if (C = kD(r.timeZone || e.timeZone, new Date(F + s)), isNaN(C))
        return /* @__PURE__ */ new Date(NaN);
    } else
      C = Q0(new Date(F + s)), C = Q0(new Date(F + s + C));
    return new Date(F + s + C);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function KC(u) {
  var D = {}, e = G.dateTimePattern.exec(u), t;
  if (e ? (D.date = e[1], t = e[3]) : (e = G.datePattern.exec(u), e ? (D.date = e[1], t = e[2]) : (D.date = null, t = u)), t) {
    var r = G.timeZone.exec(t);
    r ? (D.time = t.replace(r[1], ""), D.timeZone = r[1].trim()) : D.time = t;
  }
  return D;
}
function XC(u, D) {
  var e = G.YYY[D], t = G.YYYYY[D], r;
  if (r = G.YYYY.exec(u) || t.exec(u), r) {
    var n = r[1];
    return {
      year: parseInt(n, 10),
      restDateString: u.slice(n.length)
    };
  }
  if (r = G.YY.exec(u) || e.exec(u), r) {
    var a = r[1];
    return {
      year: parseInt(a, 10) * 100,
      restDateString: u.slice(a.length)
    };
  }
  return {
    year: null
  };
}
function ul(u, D) {
  if (D === null)
    return null;
  var e, t, r, n;
  if (u.length === 0)
    return t = /* @__PURE__ */ new Date(0), t.setUTCFullYear(D), t;
  if (e = G.MM.exec(u), e)
    return t = /* @__PURE__ */ new Date(0), r = parseInt(e[1], 10) - 1, rt(D, r) ? (t.setUTCFullYear(D, r), t) : /* @__PURE__ */ new Date(NaN);
  if (e = G.DDD.exec(u), e) {
    t = /* @__PURE__ */ new Date(0);
    var a = parseInt(e[1], 10);
    return rl(D, a) ? (t.setUTCFullYear(D, 0, a), t) : /* @__PURE__ */ new Date(NaN);
  }
  if (e = G.MMDD.exec(u), e) {
    t = /* @__PURE__ */ new Date(0), r = parseInt(e[1], 10) - 1;
    var o = parseInt(e[2], 10);
    return rt(D, r, o) ? (t.setUTCFullYear(D, r, o), t) : /* @__PURE__ */ new Date(NaN);
  }
  if (e = G.Www.exec(u), e)
    return n = parseInt(e[1], 10) - 1, nt(D, n) ? tt(D, n) : /* @__PURE__ */ new Date(NaN);
  if (e = G.WwwD.exec(u), e) {
    n = parseInt(e[1], 10) - 1;
    var i = parseInt(e[2], 10) - 1;
    return nt(D, n, i) ? tt(D, n, i) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function Dl(u) {
  var D, e, t;
  if (D = G.HH.exec(u), D)
    return e = parseFloat(D[1].replace(",", ".")), KD(e) ? e % 24 * JD : NaN;
  if (D = G.HHMM.exec(u), D)
    return e = parseInt(D[1], 10), t = parseFloat(D[2].replace(",", ".")), KD(e, t) ? e % 24 * JD + t * et : NaN;
  if (D = G.HHMMSS.exec(u), D) {
    e = parseInt(D[1], 10), t = parseInt(D[2], 10);
    var r = parseFloat(D[3].replace(",", "."));
    return KD(e, t, r) ? e % 24 * JD + t * et + r * 1e3 : NaN;
  }
  return null;
}
function tt(u, D, e) {
  D = D || 0, e = e || 0;
  var t = /* @__PURE__ */ new Date(0);
  t.setUTCFullYear(u, 0, 4);
  var r = t.getUTCDay() || 7, n = D * 7 + e + 1 - r;
  return t.setUTCDate(t.getUTCDate() + n), t;
}
var el = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], tl = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function or(u) {
  return u % 400 === 0 || u % 4 === 0 && u % 100 !== 0;
}
function rt(u, D, e) {
  if (D < 0 || D > 11)
    return !1;
  if (e != null) {
    if (e < 1)
      return !1;
    var t = or(u);
    if (t && e > tl[D] || !t && e > el[D])
      return !1;
  }
  return !0;
}
function rl(u, D) {
  if (D < 1)
    return !1;
  var e = or(u);
  return !(e && D > 366 || !e && D > 365);
}
function nt(u, D, e) {
  return !(D < 0 || D > 52 || e != null && (e < 0 || e > 6));
}
function KD(u, D, e) {
  return !(u != null && (u < 0 || u >= 25) || D != null && (D < 0 || D >= 60) || e != null && (e < 0 || e >= 60));
}
var nl = /([xXOz]+)|''|'(''|[^'])+('|$)/g;
function al(u, D, e) {
  var t = String(D), r = e || {}, n = t.match(nl);
  if (n) {
    var a = Fr(u, r);
    t = n.reduce(function(o, i) {
      if (i[0] === "'")
        return o;
      var F = o.indexOf(i), s = o[F - 1] === "'", C = o.replace(
        i,
        "'" + VC[i[0]](a, i, null, r) + "'"
      );
      return s ? C.substring(0, F - 1) + C.substring(F + 1) : C;
    }, t);
  }
  return PC(u, t, r);
}
var je = { exports: {} }, Ue = { exports: {} };
(function(u, D) {
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = e;
  function e(t, r) {
    if (t == null)
      throw new TypeError("assign requires that input parameter not be null or undefined");
    for (var n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    return t;
  }
  u.exports = D.default;
})(Ue, Ue.exports);
var Fl = Ue.exports;
(function(u, D) {
  var e = j.default;
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = r;
  var t = e(Fl);
  function r(n) {
    return (0, t.default)({}, n);
  }
  u.exports = D.default;
})(je, je.exports);
var ol = je.exports;
const il = /* @__PURE__ */ wu(ol);
function sl(u, D, e) {
  var t = Fr(u, e), r = kD(D, t, !0), n = new Date(t.getTime() - r), a = /* @__PURE__ */ new Date(0);
  return a.setFullYear(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()), a.setHours(n.getUTCHours(), n.getUTCMinutes(), n.getUTCSeconds(), n.getUTCMilliseconds()), a;
}
function Cl(u, D, e, t) {
  var r = il(t);
  return r.timeZone = D, al(sl(u, D), e, r);
}
function ll(u, D) {
  return -kD(u, D);
}
/*!
 * XRegExp 5.1.1
 * <xregexp.com>
 * Steven Levithan (c) 2007-present MIT License
 */
const I = "xregexp", _u = {
  astral: !1,
  namespacing: !0
}, iu = {};
let Gu = {}, Pu = {};
const Re = [], ku = "default", at = "class", El = {
  // Any native multicharacter token in default scope, or any single character
  default: /\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|\(\?(?:[:=!]|<[=!])|[?*+]\?|{\d+(?:,\d*)?}\??|[\s\S]/,
  // Any native multicharacter token in character class scope, or any single character
  class: /\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|[\s\S]/
}, Al = /\$(?:\{([^\}]+)\}|<([^>]+)>|(\d\d?|[\s\S]?))/g, cl = /()??/.exec("")[1] === void 0, fl = /x/.flags !== void 0;
function AD(u) {
  let D = !0;
  try {
    if (new RegExp("", u), u === "y") {
      const e = (() => "gy")();
      ".a".replace(new RegExp("a", e), ".") === ".." && (D = !1);
    }
  } catch {
    D = !1;
  }
  return D;
}
const dl = AD("d"), l0 = AD("s"), ir = AD("u"), E0 = AD("y"), sr = {
  d: dl,
  g: !0,
  i: !0,
  m: !0,
  s: l0,
  u: ir,
  y: E0
}, Bl = l0 ? /[^dgimsuy]+/g : /[^dgimuy]+/g;
function Cr(u, D, e, t, r) {
  if (u[I] = {
    captureNames: D
  }, r)
    return u;
  if (u.__proto__)
    u.__proto__ = y.prototype;
  else
    for (const n in y.prototype)
      u[n] = y.prototype[n];
  return u[I].source = e, u[I].flags = t && t.split("").sort().join(""), u;
}
function nD(u) {
  return u.replace(/([\s\S])(?=[\s\S]*\1)/g, "");
}
function Tu(u, D) {
  if (!y.isRegExp(u))
    throw new TypeError("Type RegExp expected");
  const e = u[I] || {};
  let t = pl(u), r = "", n = "", a = null, o = null;
  return D = D || {}, D.removeG && (n += "g"), D.removeY && (n += "y"), n && (t = t.replace(new RegExp(`[${n}]+`, "g"), "")), D.addG && (r += "g"), D.addY && (r += "y"), r && (t = nD(t + r)), D.isInternalOnly || (e.source !== void 0 && (a = e.source), e.flags != null && (o = r ? nD(e.flags + r) : e.flags)), u = Cr(
    new RegExp(D.source || u.source, t),
    hl(u) ? e.captureNames.slice(0) : null,
    a,
    o,
    D.isInternalOnly
  ), u;
}
function lr(u) {
  return parseInt(u, 16);
}
function Er(u, D, e) {
  const t = u.index + u[0].length, r = u.input[u.index - 1], n = u.input[t];
  return (
    // No need to separate tokens if at the beginning or end of a group, before or after a
    // group, or before or after a `|`
    /^[()|]$/.test(r) || /^[()|]$/.test(n) || // No need to separate tokens if at the beginning or end of the pattern
    u.index === 0 || t === u.input.length || // No need to separate tokens if at the beginning of a noncapturing group or lookaround.
    // Looks only at the last 4 chars (at most) for perf when constructing long regexes.
    /\(\?(?:[:=!]|<[=!])$/.test(u.input.substring(u.index - 4, u.index)) || // Avoid separating tokens when the following token is a quantifier
    ml(u.input, t, e) ? "" : "(?:)"
  );
}
function pl(u) {
  return fl ? u.flags : (
    // Explicitly using `RegExp.prototype.toString` (rather than e.g. `String` or concatenation
    // with an empty string) allows this to continue working predictably when
    // `XRegExp.proptotype.toString` is overridden
    /\/([a-z]*)$/i.exec(RegExp.prototype.toString.call(u))[1]
  );
}
function hl(u) {
  return !!(u[I] && u[I].captureNames);
}
function A0(u) {
  return parseInt(u, 10).toString(16);
}
function ml(u, D, e) {
  const t = "\\(\\?#[^)]*\\)", r = "#[^#\\n]*", n = "[?*+]|{\\d+(?:,\\d*)?}";
  return (e.includes("x") ? (
    // Ignore any leading whitespace, line comments, and inline comments
    new RegExp(`^(?:\\s|${r}|${t})*(?:${n})`)
  ) : (
    // Ignore any leading inline comments
    new RegExp(`^(?:${t})*(?:${n})`)
  )).test(u.slice(D));
}
function vD(u, D) {
  return Object.prototype.toString.call(u) === `[object ${D}]`;
}
function ju(u) {
  if (u == null)
    throw new TypeError("Cannot convert null or undefined to object");
  return u;
}
function c0(u) {
  for (; u.length < 4; )
    u = `0${u}`;
  return u;
}
function gl(u, D) {
  if (nD(D) !== D)
    throw new SyntaxError(`Invalid duplicate regex flag ${D}`);
  u = u.replace(/^\(\?([\w$]+)\)/, (e, t) => {
    if (/[dgy]/.test(t))
      throw new SyntaxError(`Cannot use flags dgy in mode modifier ${e}`);
    return D = nD(D + t), "";
  });
  for (const e of D)
    if (!sr[e])
      throw new SyntaxError(`Unknown regex flag ${e}`);
  return {
    pattern: u,
    flags: D
  };
}
function Ar(u) {
  const D = {};
  return vD(u, "String") ? (y.forEach(u, /[^\s,]+/, (e) => {
    D[e] = !0;
  }), D) : u;
}
function Ft(u) {
  if (!/^[\w$]$/.test(u))
    throw new Error("Flag must be a single character A-Za-z0-9_$");
  sr[u] = !0;
}
function vl(u, D, e, t, r) {
  let n = Re.length;
  const a = u[e];
  let o = null, i, F;
  for (; n--; )
    if (F = Re[n], !(F.leadChar && F.leadChar !== a || F.scope !== t && F.scope !== "all" || F.flag && !D.includes(F.flag)) && (i = y.exec(u, F.regex, e, "sticky"), i)) {
      o = {
        matchLength: i[0].length,
        output: F.handler.call(r, i, t, D),
        reparse: F.reparse
      };
      break;
    }
  return o;
}
function cr(u) {
  _u.astral = u;
}
function fr(u) {
  _u.namespacing = u;
}
function y(u, D) {
  if (y.isRegExp(u)) {
    if (D !== void 0)
      throw new TypeError("Cannot supply flags when copying a RegExp");
    return Tu(u);
  }
  if (u = u === void 0 ? "" : String(u), D = D === void 0 ? "" : String(D), y.isInstalled("astral") && !D.includes("A") && (D += "A"), Pu[u] || (Pu[u] = {}), !Pu[u][D]) {
    const t = {
      hasNamedCapture: !1,
      captureNames: []
    };
    let r = ku, n = "", a = 0, o;
    const i = gl(u, D);
    let F = i.pattern;
    const s = i.flags;
    for (; a < F.length; ) {
      do
        o = vl(F, s, a, r, t), o && o.reparse && (F = F.slice(0, a) + o.output + F.slice(a + o.matchLength));
      while (o && o.reparse);
      if (o)
        n += o.output, a += o.matchLength || 1;
      else {
        const [C] = y.exec(F, El[r], a, "sticky");
        n += C, a += C.length, C === "[" && r === ku ? r = at : C === "]" && r === at && (r = ku);
      }
    }
    Pu[u][D] = {
      // Use basic cleanup to collapse repeated empty groups like `(?:)(?:)` to `(?:)`. Empty
      // groups are sometimes inserted during regex transpilation in order to keep tokens
      // separated. However, more than one empty group in a row is never needed.
      pattern: n.replace(/(?:\(\?:\))+/g, "(?:)"),
      // Strip all but native flags
      flags: s.replace(Bl, ""),
      // `context.captureNames` has an item for each capturing group, even if unnamed
      captures: t.hasNamedCapture ? t.captureNames : null
    };
  }
  const e = Pu[u][D];
  return Cr(
    new RegExp(e.pattern, e.flags),
    e.captures,
    u,
    D
  );
}
y.prototype = new RegExp();
y.version = "5.1.1";
y._clipDuplicates = nD;
y._hasNativeFlag = AD;
y._dec = lr;
y._hex = A0;
y._pad4 = c0;
y.addToken = (u, D, e) => {
  e = e || {};
  let { optionalFlags: t } = e;
  if (e.flag && Ft(e.flag), t) {
    t = t.split("");
    for (const r of t)
      Ft(r);
  }
  Re.push({
    regex: Tu(u, {
      addG: !0,
      addY: E0,
      isInternalOnly: !0
    }),
    handler: D,
    scope: e.scope || ku,
    flag: e.flag,
    reparse: e.reparse,
    leadChar: e.leadChar
  }), y.cache.flush("patterns");
};
y.cache = (u, D) => (Gu[u] || (Gu[u] = {}), Gu[u][D] || (Gu[u][D] = y(u, D)));
y.cache.flush = (u) => {
  u === "patterns" ? Pu = {} : Gu = {};
};
y.escape = (u) => String(ju(u)).replace(/[\\\[\]{}()*+?.^$|]/g, "\\$&").replace(/[\s#\-,]/g, (D) => `\\u${c0(A0(D.charCodeAt(0)))}`);
y.exec = (u, D, e, t) => {
  let r = "g", n = !1, a = !1, o;
  n = E0 && !!(t || D.sticky && t !== !1), n ? r += "y" : t && (a = !0, r += "FakeY"), D[I] = D[I] || {};
  const i = D[I][r] || (D[I][r] = Tu(D, {
    addG: !0,
    addY: n,
    source: a ? `${D.source}|()` : void 0,
    removeY: t === !1,
    isInternalOnly: !0
  }));
  return e = e || 0, i.lastIndex = e, o = iu.exec.call(i, u), a && o && o.pop() === "" && (o = null), D.global && (D.lastIndex = o ? i.lastIndex : 0), o;
};
y.forEach = (u, D, e) => {
  let t = 0, r = -1, n;
  for (; n = y.exec(u, D, t); )
    e(n, ++r, u, D), t = n.index + (n[0].length || 1);
};
y.globalize = (u) => Tu(u, { addG: !0 });
y.install = (u) => {
  u = Ar(u), !_u.astral && u.astral && cr(!0), !_u.namespacing && u.namespacing && fr(!0);
};
y.isInstalled = (u) => !!_u[u];
y.isRegExp = (u) => Object.prototype.toString.call(u) === "[object RegExp]";
y.match = (u, D, e) => {
  const t = D.global && e !== "one" || e === "all", r = (t ? "g" : "") + (D.sticky ? "y" : "") || "noGY";
  D[I] = D[I] || {};
  const n = D[I][r] || (D[I][r] = Tu(D, {
    addG: !!t,
    removeG: e === "one",
    isInternalOnly: !0
  })), a = String(ju(u)).match(n);
  return D.global && (D.lastIndex = e === "one" && a ? (
    // Can't use `r2.lastIndex` since `r2` is nonglobal in this case
    a.index + a[0].length
  ) : 0), t ? a || [] : a && a[0];
};
y.matchChain = (u, D) => function e(t, r) {
  const n = D[r].regex ? D[r] : { regex: D[r] }, a = [];
  function o(i) {
    if (n.backref) {
      const F = `Backreference to undefined group: ${n.backref}`, s = isNaN(n.backref);
      if (s && y.isInstalled("namespacing")) {
        if (!(i.groups && n.backref in i.groups))
          throw new ReferenceError(F);
      } else if (!i.hasOwnProperty(n.backref))
        throw new ReferenceError(F);
      const C = s && y.isInstalled("namespacing") ? i.groups[n.backref] : i[n.backref];
      a.push(C || "");
    } else
      a.push(i[0]);
  }
  for (const i of t)
    y.forEach(i, n.regex, o);
  return r === D.length - 1 || !a.length ? a : e(a, r + 1);
}([u], 0);
y.replace = (u, D, e, t) => {
  const r = y.isRegExp(D), n = D.global && t !== "one" || t === "all", a = (n ? "g" : "") + (D.sticky ? "y" : "") || "noGY";
  let o = D;
  r ? (D[I] = D[I] || {}, o = D[I][a] || (D[I][a] = Tu(D, {
    addG: !!n,
    removeG: t === "one",
    isInternalOnly: !0
  }))) : n && (o = new RegExp(y.escape(String(D)), "g"));
  const i = iu.replace.call(ju(u), o, e);
  return r && D.global && (D.lastIndex = 0), i;
};
y.replaceEach = (u, D) => {
  for (const e of D)
    u = y.replace(u, e[0], e[1], e[2]);
  return u;
};
y.split = (u, D, e) => iu.split.call(ju(u), D, e);
y.test = (u, D, e, t) => !!y.exec(u, D, e, t);
y.uninstall = (u) => {
  u = Ar(u), _u.astral && u.astral && cr(!1), _u.namespacing && u.namespacing && fr(!1);
};
y.union = (u, D, e) => {
  e = e || {};
  const t = e.conjunction || "or";
  let r = 0, n, a;
  function o(C, E, f) {
    const l = a[r - n];
    if (E) {
      if (++r, l)
        return `(?<${l}>`;
    } else if (f)
      return `\\${+f + n}`;
    return C;
  }
  if (!(vD(u, "Array") && u.length))
    throw new TypeError("Must provide a nonempty array of patterns to merge");
  const i = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g, F = [];
  for (const C of u)
    y.isRegExp(C) ? (n = r, a = C[I] && C[I].captureNames || [], F.push(y(C.source).source.replace(i, o))) : F.push(y.escape(C));
  const s = t === "none" ? "" : "|";
  return y(F.join(s), D);
};
iu.exec = function(u) {
  const D = this.lastIndex, e = RegExp.prototype.exec.apply(this, arguments);
  if (e) {
    if (!cl && e.length > 1 && e.includes("")) {
      const t = Tu(this, {
        removeG: !0,
        isInternalOnly: !0
      });
      String(u).slice(e.index).replace(t, (...r) => {
        const n = r.length;
        for (let a = 1; a < n - 2; ++a)
          r[a] === void 0 && (e[a] = void 0);
      });
    }
    if (this[I] && this[I].captureNames) {
      let t = e;
      y.isInstalled("namespacing") && (e.groups = /* @__PURE__ */ Object.create(null), t = e.groups);
      for (let r = 1; r < e.length; ++r) {
        const n = this[I].captureNames[r - 1];
        n && (t[n] = e[r]);
      }
    } else
      !e.groups && y.isInstalled("namespacing") && (e.groups = void 0);
    this.global && !e[0].length && this.lastIndex > e.index && (this.lastIndex = e.index);
  }
  return this.global || (this.lastIndex = D), e;
};
iu.test = function(u) {
  return !!iu.exec.call(this, u);
};
iu.match = function(u) {
  if (!y.isRegExp(u))
    u = new RegExp(u);
  else if (u.global) {
    const D = String.prototype.match.apply(this, arguments);
    return u.lastIndex = 0, D;
  }
  return iu.exec.call(u, ju(this));
};
iu.replace = function(u, D) {
  const e = y.isRegExp(u);
  let t, r, n;
  return e ? (u[I] && ({ captureNames: r } = u[I]), t = u.lastIndex) : u += "", vD(D, "Function") ? n = String(this).replace(u, (...a) => {
    if (r) {
      let o;
      y.isInstalled("namespacing") ? (o = /* @__PURE__ */ Object.create(null), a.push(o)) : (a[0] = new String(a[0]), [o] = a);
      for (let i = 0; i < r.length; ++i)
        r[i] && (o[r[i]] = a[i + 1]);
    }
    return D(...a);
  }) : n = String(ju(this)).replace(u, (...a) => {
    return String(D).replace(Al, o);
    function o(i, F, s, C) {
      F = F || s;
      const E = vD(a[a.length - 1], "Object") ? 4 : 3, f = a.length - E;
      if (F) {
        if (/^\d+$/.test(F)) {
          const m = +F;
          if (m <= f)
            return a[m] || "";
        }
        const l = r ? r.indexOf(F) : -1;
        if (l < 0)
          throw new SyntaxError(`Backreference to undefined group ${i}`);
        return a[l + 1] || "";
      }
      if (C === "" || C === " ")
        throw new SyntaxError(`Invalid token ${i}`);
      if (C === "&" || +C == 0)
        return a[0];
      if (C === "$")
        return "$";
      if (C === "`")
        return a[a.length - 1].slice(0, a[a.length - 2]);
      if (C === "'")
        return a[a.length - 1].slice(a[a.length - 2] + a[0].length);
      if (C = +C, !isNaN(C)) {
        if (C > f)
          throw new SyntaxError(`Backreference to undefined group ${i}`);
        return a[C] || "";
      }
      throw new SyntaxError(`Invalid token ${i}`);
    }
  }), e && (u.global ? u.lastIndex = 0 : u.lastIndex = t), n;
};
iu.split = function(u, D) {
  if (!y.isRegExp(u))
    return String.prototype.split.apply(this, arguments);
  const e = String(this), t = [], r = u.lastIndex;
  let n = 0, a;
  return D = (D === void 0 ? -1 : D) >>> 0, y.forEach(e, u, (o) => {
    o.index + o[0].length > n && (t.push(e.slice(n, o.index)), o.length > 1 && o.index < e.length && Array.prototype.push.apply(t, o.slice(1)), a = o[0].length, n = o.index + a);
  }), n === e.length ? (!u.test("") || a) && t.push("") : t.push(e.slice(n)), u.lastIndex = r, t.length > D ? t.slice(0, D) : t;
};
y.addToken(
  /\\([ABCE-RTUVXYZaeg-mopqyz]|c(?![A-Za-z])|u(?![\dA-Fa-f]{4}|{[\dA-Fa-f]+})|x(?![\dA-Fa-f]{2}))/,
  (u, D) => {
    if (u[1] === "B" && D === ku)
      return u[0];
    throw new SyntaxError(`Invalid escape ${u[0]}`);
  },
  {
    scope: "all",
    leadChar: "\\"
  }
);
y.addToken(
  /\\u{([\dA-Fa-f]+)}/,
  (u, D, e) => {
    const t = lr(u[1]);
    if (t > 1114111)
      throw new SyntaxError(`Invalid Unicode code point ${u[0]}`);
    if (t <= 65535)
      return `\\u${c0(A0(t))}`;
    if (ir && e.includes("u"))
      return u[0];
    throw new SyntaxError("Cannot use Unicode code point above \\u{FFFF} without flag u");
  },
  {
    scope: "all",
    leadChar: "\\"
  }
);
y.addToken(
  /\(\?#[^)]*\)/,
  Er,
  { leadChar: "(" }
);
y.addToken(
  /\s+|#[^\n]*\n?/,
  Er,
  { flag: "x" }
);
l0 || y.addToken(
  /\./,
  () => "[\\s\\S]",
  {
    flag: "s",
    leadChar: "."
  }
);
y.addToken(
  /\\k<([^>]+)>/,
  function(u) {
    const D = isNaN(u[1]) ? this.captureNames.indexOf(u[1]) + 1 : +u[1], e = u.index + u[0].length;
    if (!D || D > this.captureNames.length)
      throw new SyntaxError(`Backreference to undefined group ${u[0]}`);
    return `\\${D}${e === u.input.length || isNaN(u.input[e]) ? "" : "(?:)"}`;
  },
  { leadChar: "\\" }
);
y.addToken(
  /\\(\d+)/,
  function(u, D) {
    if (!(D === ku && /^[1-9]/.test(u[1]) && +u[1] <= this.captureNames.length) && u[1] !== "0")
      throw new SyntaxError(`Cannot use octal escape or backreference to undefined group ${u[0]}`);
    return u[0];
  },
  {
    scope: "all",
    leadChar: "\\"
  }
);
y.addToken(
  /\(\?P?<([\p{ID_Start}$_][\p{ID_Continue}$_\u200C\u200D]*)>/u,
  function(u) {
    if (!y.isInstalled("namespacing") && (u[1] === "length" || u[1] === "__proto__"))
      throw new SyntaxError(`Cannot use reserved word as capture name ${u[0]}`);
    if (this.captureNames.includes(u[1]))
      throw new SyntaxError(`Cannot use same name for multiple groups ${u[0]}`);
    return this.captureNames.push(u[1]), this.hasNamedCapture = !0, "(";
  },
  { leadChar: "(" }
);
y.addToken(
  /\((?!\?)/,
  function(u, D, e) {
    return e.includes("n") ? "(?:" : (this.captureNames.push(null), "(");
  },
  {
    optionalFlags: "n",
    leadChar: "("
  }
);
/*!
 * XRegExp.build 5.1.1
 * <xregexp.com>
 * Steven Levithan (c) 2012-present MIT License
 */
const _l = (u) => {
  const D = "xregexp", e = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g, t = u.union([/\({{([\w$]+)}}\)|{{([\w$]+)}}/, e], "g", {
    conjunction: "or"
  });
  function r(F) {
    const s = /^(?:\(\?:\))*\^/, C = /\$(?:\(\?:\))*$/;
    return s.test(F) && C.test(F) && // Ensure that the trailing `$` isn't escaped
    C.test(F.replace(/\\[\s\S]/g, "")) ? F.replace(s, "").replace(C, "") : F;
  }
  function n(F, s) {
    const C = s ? "x" : "";
    return u.isRegExp(F) ? F[D] && F[D].captureNames ? (
      // Don't recompile, to preserve capture names
      F
    ) : (
      // Recompile as XRegExp
      u(F.source, C)
    ) : (
      // Compile string as XRegExp
      u(F, C)
    );
  }
  function a(F) {
    return F instanceof RegExp ? F : u.escape(F);
  }
  function o(F, s, C) {
    return F[`subpattern${C}`] = s, F;
  }
  function i(F, s, C) {
    const E = s < C.length - 1;
    return F + (E ? `{{subpattern${s}}}` : "");
  }
  u.tag = (F) => (s, ...C) => {
    const E = C.map(a).reduce(o, {}), f = s.raw.map(i).join("");
    return u.build(f, E, F);
  }, u.build = (F, s, C) => {
    C = C || "";
    const E = C.includes("x"), f = /^\(\?([\w$]+)\)/.exec(F);
    f && (C = u._clipDuplicates(C + f[1]));
    const l = {};
    for (const b in s)
      if (s.hasOwnProperty(b)) {
        const x = n(s[b], E);
        l[b] = {
          // Deanchoring allows embedding independently useful anchored regexes. If you
          // really need to keep your anchors, double them (i.e., `^^...$$`).
          pattern: r(x.source),
          names: x[D].captureNames || []
        };
      }
    const m = n(F, E);
    let A = 0, c, h = 0;
    const B = [0], d = m[D].captureNames || [], g = m.source.replace(t, (b, x, Y, X, R) => {
      const T = x || Y;
      let N, H, ru;
      if (T) {
        if (!l.hasOwnProperty(T))
          throw new ReferenceError(`Undefined property ${b}`);
        x ? (N = d[h], B[++h] = ++A, H = `(?<${N || T}>`) : H = "(?:", c = A;
        const Uu = l[T].pattern.replace(e, (Ru, Lu, Bu) => {
          if (Lu) {
            if (N = l[T].names[A - c], ++A, N)
              return `(?<${N}>`;
          } else if (Bu)
            return ru = +Bu - 1, l[T].names[ru] ? (
              // Need to preserve the backreference name in case using flag `n`
              `\\k<${l[T].names[ru]}>`
            ) : `\\${+Bu + c}`;
          return Ru;
        });
        return `${H}${Uu})`;
      }
      if (X) {
        if (N = d[h], B[++h] = ++A, N)
          return `(?<${N}>`;
      } else if (R)
        return ru = +R - 1, d[ru] ? (
          // Need to preserve the backreference name in case using flag `n`
          `\\k<${d[ru]}>`
        ) : `\\${B[+R]}`;
      return b;
    });
    return u(g, C);
  };
};
/*!
 * XRegExp.matchRecursive 5.1.1
 * <xregexp.com>
 * Steven Levithan (c) 2009-present MIT License
 */
const yl = (u) => {
  function D(e, t, r, n) {
    return {
      name: e,
      value: t,
      start: r,
      end: n
    };
  }
  u.matchRecursive = (e, t, r, n, a) => {
    n = n || "", a = a || {};
    const o = n.includes("g"), i = n.includes("y"), F = n.replace(/y/g, "");
    t = u(t, F), r = u(r, F);
    let s, { escapeChar: C } = a;
    if (C) {
      if (C.length > 1)
        throw new Error("Cannot use more than one escape character");
      C = u.escape(C), s = new RegExp(
        `(?:${C}[\\S\\s]|(?:(?!${// Using `XRegExp.union` safely rewrites backreferences in `left` and `right`.
        // Intentionally not passing `basicFlags` to `XRegExp.union` since any syntax
        // transformation resulting from those flags was already applied to `left` and
        // `right` when they were passed through the XRegExp constructor above.
        u.union([t, r], "", { conjunction: "or" }).source})[^${C}])+)+`,
        // Flags `dgy` not needed here
        n.replace(u._hasNativeFlag("s") ? /[^imsu]/g : /[^imu]/g, "")
      );
    }
    let E = 0, f = 0, l = 0, m = 0, A, c, h, B;
    const d = a.valueNames, g = [];
    for (; ; ) {
      if (C && (l += (u.exec(e, s, l, "sticky") || [""])[0].length), h = u.exec(e, t, l), B = u.exec(e, r, l), h && B && (h.index <= B.index ? B = null : h = null), h || B)
        f = (h || B).index, l = f + (h || B)[0].length;
      else if (!E)
        break;
      if (i && !E && f > m)
        break;
      if (h)
        E || (A = f, c = l), E += 1;
      else if (B && E) {
        if (E -= 1, !E && (d ? (d[0] && A > m && g.push(D(d[0], e.slice(m, A), m, A)), d[1] && g.push(D(d[1], e.slice(A, c), A, c)), d[2] && g.push(D(d[2], e.slice(c, f), c, f)), d[3] && g.push(D(d[3], e.slice(f, l), f, l))) : g.push(e.slice(c, f)), m = l, !o))
          break;
      } else {
        const b = a.unbalanced || "error";
        if (b === "skip" || b === "skip-lazy")
          if (B)
            B = null;
          else {
            if (b === "skip") {
              const x = u.exec(e, t, A, "sticky")[0].length;
              l = A + (x || 1);
            } else
              l = A + 1;
            E = 0;
          }
        else if (b === "error") {
          const x = B ? "right" : "left", Y = B ? f : A;
          throw new Error(`Unbalanced ${x} delimiter found in string at position ${Y}`);
        } else
          throw new Error(`Unsupported value for unbalanced: ${b}`);
      }
      f === l && (l += 1);
    }
    return o && g.length > 0 && !i && d && d[0] && e.length > m && g.push(D(d[0], e.slice(m), m, e.length)), g;
  };
};
/*!
 * XRegExp Unicode Base 5.1.1
 * <xregexp.com>
 * Steven Levithan (c) 2008-present MIT License
 */
const bl = (u) => {
  const D = {}, e = {}, t = u._dec, r = u._hex, n = u._pad4;
  function a(E) {
    return E.replace(/[- _]+/g, "").toLowerCase();
  }
  function o(E) {
    const f = /^\\[xu](.+)/.exec(E);
    return f ? t(f[1]) : E.charCodeAt(E[0] === "\\" ? 1 : 0);
  }
  function i(E) {
    let f = "", l = -1;
    return u.forEach(
      E,
      /(\\x..|\\u....|\\?[\s\S])(?:-(\\x..|\\u....|\\?[\s\S]))?/,
      (m) => {
        const A = o(m[1]);
        A > l + 1 && (f += `\\u${n(r(l + 1))}`, A > l + 2 && (f += `-\\u${n(r(A - 1))}`)), l = o(m[2] || m[1]);
      }
    ), l < 65535 && (f += `\\u${n(r(l + 1))}`, l < 65534 && (f += "-\\uFFFF")), f;
  }
  function F(E) {
    const f = "b!";
    return D[E][f] || (D[E][f] = i(D[E].bmp));
  }
  function s(E, f) {
    const l = D[E];
    let m = "";
    return l.bmp && !l.isBmpLast && (m = `[${l.bmp}]${l.astral ? "|" : ""}`), l.astral && (m += l.astral), l.isBmpLast && l.bmp && (m += `${l.astral ? "|" : ""}[${l.bmp}]`), f ? `(?:(?!${m})(?:[\uD800-\uDBFF][\uDC00-\uDFFF]|[\0-￿]))` : `(?:${m})`;
  }
  function C(E, f) {
    const l = f ? "a!" : "a=";
    return D[E][l] || (D[E][l] = s(E, f));
  }
  u.addToken(
    // Use `*` instead of `+` to avoid capturing `^` as the token name in `\p{^}`
    /\\([pP])(?:{(\^?)(?:(\w+)=)?([^}]*)}|([A-Za-z]))/,
    (E, f, l) => {
      const m = "Invalid double negation ", A = "Unknown Unicode token ", c = "Unicode token missing data ", h = "Astral mode required for Unicode token ", B = "Astral mode does not support Unicode tokens within character classes", [
        d,
        g,
        b,
        x,
        Y,
        X
      ] = E;
      let R = g === "P" || !!b;
      const T = l.includes("A");
      let N = a(X || Y), H = D[N];
      if (g === "P" && b)
        throw new SyntaxError(m + d);
      if (!D.hasOwnProperty(N))
        throw new SyntaxError(A + d);
      if (x && !(e[x] && e[x][N]))
        throw new SyntaxError(A + d);
      if (H.inverseOf) {
        if (N = a(H.inverseOf), !D.hasOwnProperty(N))
          throw new ReferenceError(`${c + d} -> ${H.inverseOf}`);
        H = D[N], R = !R;
      }
      if (!(H.bmp || T))
        throw new SyntaxError(h + d);
      if (T) {
        if (f === "class")
          throw new SyntaxError(B);
        return C(N, R);
      }
      return f === "class" ? R ? F(N) : H.bmp : `${(R ? "[^" : "[") + H.bmp}]`;
    },
    {
      scope: "all",
      optionalFlags: "A",
      leadChar: "\\"
    }
  ), u.addUnicodeData = (E, f) => {
    const l = "Unicode token requires name", m = "Unicode token has no character data ";
    f && (e[f] = {});
    for (const A of E) {
      if (!A.name)
        throw new Error(l);
      if (!(A.inverseOf || A.bmp || A.astral))
        throw new Error(m + A.name);
      const c = a(A.name);
      if (D[c] = A, f && (e[f][c] = !0), A.alias) {
        const h = a(A.alias);
        D[h] = A, f && (e[f][h] = !0);
      }
    }
    u.cache.flush("patterns");
  }, u._getUnicodeProperty = (E) => {
    const f = a(E);
    return D[f];
  };
};
var $l = [
  {
    name: "C",
    alias: "Other",
    isBmpLast: !0,
    bmp: "\0--­͸͹΀-΃΋΍΢԰՗՘֋֌֐׈-׏׫-׮׵-؅؜۝܎܏݋݌޲-޿߻߼࠮࠯࠿࡜࡝࡟࡫-࡯࢏-ࢗ࣢঄঍঎঑঒঩঱঳-঵঺঻৅৆৉৊৏-৖৘-৛৞৤৥৿਀਄਋-਎਑਒਩਱਴਷਺਻਽੃-੆੉੊੎-੐੒-੘੝੟-੥੷-઀઄઎઒઩઱઴઺઻૆૊૎૏૑-૟૤૥૲-૸଀଄଍଎଑଒଩଱଴଺଻୅୆୉୊୎-୔୘-୛୞୤୥୸-஁஄஋-஍஑஖-஘஛஝஠-஢஥-஧஫-஭஺-஽௃-௅௉௎௏௑-௖௘-௥௻-௿఍఑఩఺఻౅౉౎-౔౗౛౜౞౟౤౥౰-౶಍಑಩಴಺಻೅೉೎-೔೗-೜೟೤೥೰ೳ-೿഍഑൅൉൐-൓൤൥඀඄඗-඙඲඼඾඿෇-෉෋-෎෕෗෠-෥෰෱෵-฀฻-฾๜-຀຃຅຋຤຦຾຿໅໇໎໏໚໛໠-໿཈཭-཰྘྽࿍࿛-࿿჆჈-჌჎჏቉቎቏቗቙቞቟኉኎኏኱኶኷኿዁዆዇዗጑጖጗፛፜፽-፿᎚-᎟᏶᏷᏾᏿᚝-᚟᛹-᛿᜖-᜞᜷-᜿᝔-᝟᝭᝱᝴-᝿៞៟៪-៯៺-៿᠎᠚-᠟᡹-᡿᢫-᢯᣶-᣿᤟᤬-᤯᤼-᤿᥁-᥃᥮᥯᥵-᥿᦬-᦯᧊-᧏᧛-᧝᨜᨝᩟᩽᩾᪊-᪏᪚-᪟᪮᪯᫏-᫿᭍-᭏᭿᯴-᯻᰸-᰺᱊-᱌Ᲊ-᲏᲻᲼᳈-᳏᳻-᳿἖἗἞἟὆὇὎὏὘὚὜὞὾὿᾵῅῔῕῜῰῱῵῿​-‏‪-‮⁠-⁯⁲⁳₏₝-₟⃁-⃏⃱-⃿↌-↏␧-␿⑋-⑟⭴⭵⮖⳴-⳸⴦⴨-⴬⴮⴯⵨-⵮⵱-⵾⶗-⶟⶧⶯⶷⶿⷇⷏⷗⷟⹞-⹿⺚⻴-⻿⿖-⿯⿼-⿿぀゗゘㄀-㄄㄰㆏㇤-㇯㈟꒍-꒏꓇-꓏꘬-꘿꛸-꛿Ɤ-꟏꟒꟔Ꟛ-꟱꠭-꠯꠺-꠿꡸-꡿꣆-꣍꣚-꣟꥔-꥞꥽-꥿꧎꧚-꧝꧿꨷-꨿꩎꩏꩚꩛꫃-꫚꫷-꬀꬇꬈꬏꬐꬗-꬟꬧꬯꭬-꭯꯮꯯꯺-꯿힤-힯퟇-퟊퟼-﩮﩯﫚-﫿﬇-﬒﬘-﬜﬷﬽﬿﭂﭅﯃-﯒﶐﶑﷈-﷎﷐-﷯︚-︟﹓﹧﹬-﹯﹵﻽-＀﾿-￁￈￉￐￑￘￙￝-￟￧￯-￻￾￿",
    astral: "\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDCFF\uDD03-\uDD06\uDD34-\uDD36\uDD8F\uDD9D-\uDD9F\uDDA1-\uDDCF\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEFC-\uDEFF\uDF24-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDFC4-\uDFC7\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDD6E\uDD7B\uDD8B\uDD93\uDD96\uDDA2\uDDB2\uDDBA\uDDBD-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDF7F\uDF86\uDFB1\uDFBB-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56\uDC9F-\uDCA6\uDCB0-\uDCDF\uDCF3\uDCF6-\uDCFA\uDD1C-\uDD1E\uDD3A-\uDD3E\uDD40-\uDD7F\uDDB8-\uDDBB\uDDD0\uDDD1\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE49-\uDE4F\uDE59-\uDE5F\uDEA0-\uDEBF\uDEE7-\uDEEA\uDEF7-\uDEFF\uDF36-\uDF38\uDF56\uDF57\uDF73-\uDF77\uDF92-\uDF98\uDF9D-\uDFA8\uDFB0-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCF9\uDD28-\uDD2F\uDD3A-\uDE5F\uDE7F\uDEAA\uDEAE\uDEAF\uDEB2-\uDEFF\uDF28-\uDF2F\uDF5A-\uDF6F\uDF8A-\uDFAF\uDFCC-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC4E-\uDC51\uDC76-\uDC7E\uDCBD\uDCC3-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD48-\uDD4F\uDD77-\uDD7F\uDDE0\uDDF5-\uDDFF\uDE12\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEAA-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC5C\uDC62-\uDC7F\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDDE-\uDDFF\uDE45-\uDE4F\uDE5A-\uDE5F\uDE6D-\uDE7F\uDEBA-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF47-\uDFFF]|\uD806[\uDC3C-\uDC9F\uDCF3-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD47-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE5-\uDDFF\uDE48-\uDE4F\uDEA3-\uDEAF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC46-\uDC4F\uDC6D-\uDC6F\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF9-\uDFAF\uDFB1-\uDFBF\uDFF2-\uDFFE]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F\uDC75-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80E-\uD810\uD812-\uD819\uD824-\uD82A\uD82D\uD82E\uD830-\uD832\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80B[\uDC00-\uDF8F\uDFF3-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDE6D\uDEBF\uDECA-\uDECF\uDEEE\uDEEF\uDEF6-\uDEFF\uDF46-\uDF4F\uDF5A\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE9B-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82B[\uDC00-\uDFEF\uDFF4\uDFFC\uDFFF]|\uD82C[\uDD23-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A\uDC9B\uDCA0-\uDFFF]|\uD833[\uDC00-\uDEFF\uDF2E\uDF2F\uDF47-\uDF4F\uDFC4-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDD73-\uDD7A\uDDEB-\uDDFF\uDE46-\uDEDF\uDEF4-\uDEFF\uDF57-\uDF5F\uDF79-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]|\uD836[\uDE8C-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD837[\uDC00-\uDEFF\uDF1F-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD50-\uDE8F\uDEAF-\uDEBF\uDEFA-\uDEFE\uDF00-\uDFFF]|\uD839[\uDC00-\uDFDF\uDFE7\uDFEC\uDFEF\uDFFF]|\uD83A[\uDCC5\uDCC6\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDD5D\uDD60-\uDFFF]|\uD83B[\uDC00-\uDC70\uDCB5-\uDD00\uDD3E-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDCFF\uDDAE-\uDDE5\uDE03-\uDE0F\uDE3C-\uDE3F\uDE49-\uDE4F\uDE52-\uDE5F\uDE66-\uDEFF]|\uD83D[\uDED8-\uDEDC\uDEED-\uDEEF\uDEFD-\uDEFF\uDF74-\uDF7F\uDFD9-\uDFDF\uDFEC-\uDFEF\uDFF1-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE\uDCAF\uDCB2-\uDCFF\uDE54-\uDE5F\uDE6E\uDE6F\uDE75-\uDE77\uDE7D-\uDE7F\uDE87-\uDE8F\uDEAD-\uDEAF\uDEBB-\uDEBF\uDEC6-\uDECF\uDEDA-\uDEDF\uDEE8-\uDEEF\uDEF7-\uDEFF\uDF93\uDFCB-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEE0-\uDEFF]|\uD86D[\uDF39-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]"
  },
  {
    name: "Cc",
    alias: "Control",
    bmp: "\0--"
  },
  {
    name: "Cf",
    alias: "Format",
    bmp: "­؀-؅؜۝܏࢐࢑࣢᠎​-‏‪-‮⁠-⁤⁦-⁯\uFEFF￹-￻",
    astral: "\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC38]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]"
  },
  {
    name: "Cn",
    alias: "Unassigned",
    bmp: "͸͹΀-΃΋΍΢԰՗՘֋֌֐׈-׏׫-׮׵-׿܎݋݌޲-޿߻߼࠮࠯࠿࡜࡝࡟࡫-࡯࢏࢒-ࢗ঄঍঎঑঒঩঱঳-঵঺঻৅৆৉৊৏-৖৘-৛৞৤৥৿਀਄਋-਎਑਒਩਱਴਷਺਻਽੃-੆੉੊੎-੐੒-੘੝੟-੥੷-઀઄઎઒઩઱઴઺઻૆૊૎૏૑-૟૤૥૲-૸଀଄଍଎଑଒଩଱଴଺଻୅୆୉୊୎-୔୘-୛୞୤୥୸-஁஄஋-஍஑஖-஘஛஝஠-஢஥-஧஫-஭஺-஽௃-௅௉௎௏௑-௖௘-௥௻-௿఍఑఩఺఻౅౉౎-౔౗౛౜౞౟౤౥౰-౶಍಑಩಴಺಻೅೉೎-೔೗-೜೟೤೥೰ೳ-೿഍഑൅൉൐-൓൤൥඀඄඗-඙඲඼඾඿෇-෉෋-෎෕෗෠-෥෰෱෵-฀฻-฾๜-຀຃຅຋຤຦຾຿໅໇໎໏໚໛໠-໿཈཭-཰྘྽࿍࿛-࿿჆჈-჌჎჏቉቎቏቗቙቞቟኉኎኏኱኶኷኿዁዆዇዗጑጖጗፛፜፽-፿᎚-᎟᏶᏷᏾᏿᚝-᚟᛹-᛿᜖-᜞᜷-᜿᝔-᝟᝭᝱᝴-᝿៞៟៪-៯៺-៿᠚-᠟᡹-᡿᢫-᢯᣶-᣿᤟᤬-᤯᤼-᤿᥁-᥃᥮᥯᥵-᥿᦬-᦯᧊-᧏᧛-᧝᨜᨝᩟᩽᩾᪊-᪏᪚-᪟᪮᪯᫏-᫿᭍-᭏᭿᯴-᯻᰸-᰺᱊-᱌Ᲊ-᲏᲻᲼᳈-᳏᳻-᳿἖἗἞἟὆὇὎὏὘὚὜὞὾὿᾵῅῔῕῜῰῱῵῿⁥⁲⁳₏₝-₟⃁-⃏⃱-⃿↌-↏␧-␿⑋-⑟⭴⭵⮖⳴-⳸⴦⴨-⴬⴮⴯⵨-⵮⵱-⵾⶗-⶟⶧⶯⶷⶿⷇⷏⷗⷟⹞-⹿⺚⻴-⻿⿖-⿯⿼-⿿぀゗゘㄀-㄄㄰㆏㇤-㇯㈟꒍-꒏꓇-꓏꘬-꘿꛸-꛿Ɤ-꟏꟒꟔Ꟛ-꟱꠭-꠯꠺-꠿꡸-꡿꣆-꣍꣚-꣟꥔-꥞꥽-꥿꧎꧚-꧝꧿꨷-꨿꩎꩏꩚꩛꫃-꫚꫷-꬀꬇꬈꬏꬐꬗-꬟꬧꬯꭬-꭯꯮꯯꯺-꯿힤-힯퟇-퟊퟼-퟿﩮﩯﫚-﫿﬇-﬒﬘-﬜﬷﬽﬿﭂﭅﯃-﯒﶐﶑﷈-﷎﷐-﷯︚-︟﹓﹧﹬-﹯﹵﻽﻾＀﾿-￁￈￉￐￑￘￙￝-￟￧￯-￸￾￿",
    astral: "\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDCFF\uDD03-\uDD06\uDD34-\uDD36\uDD8F\uDD9D-\uDD9F\uDDA1-\uDDCF\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEFC-\uDEFF\uDF24-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDFC4-\uDFC7\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDD6E\uDD7B\uDD8B\uDD93\uDD96\uDDA2\uDDB2\uDDBA\uDDBD-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDF7F\uDF86\uDFB1\uDFBB-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56\uDC9F-\uDCA6\uDCB0-\uDCDF\uDCF3\uDCF6-\uDCFA\uDD1C-\uDD1E\uDD3A-\uDD3E\uDD40-\uDD7F\uDDB8-\uDDBB\uDDD0\uDDD1\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE49-\uDE4F\uDE59-\uDE5F\uDEA0-\uDEBF\uDEE7-\uDEEA\uDEF7-\uDEFF\uDF36-\uDF38\uDF56\uDF57\uDF73-\uDF77\uDF92-\uDF98\uDF9D-\uDFA8\uDFB0-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCF9\uDD28-\uDD2F\uDD3A-\uDE5F\uDE7F\uDEAA\uDEAE\uDEAF\uDEB2-\uDEFF\uDF28-\uDF2F\uDF5A-\uDF6F\uDF8A-\uDFAF\uDFCC-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC4E-\uDC51\uDC76-\uDC7E\uDCC3-\uDCCC\uDCCE\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD48-\uDD4F\uDD77-\uDD7F\uDDE0\uDDF5-\uDDFF\uDE12\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEAA-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC5C\uDC62-\uDC7F\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDDE-\uDDFF\uDE45-\uDE4F\uDE5A-\uDE5F\uDE6D-\uDE7F\uDEBA-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF47-\uDFFF]|\uD806[\uDC3C-\uDC9F\uDCF3-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD47-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE5-\uDDFF\uDE48-\uDE4F\uDEA3-\uDEAF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC46-\uDC4F\uDC6D-\uDC6F\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF9-\uDFAF\uDFB1-\uDFBF\uDFF2-\uDFFE]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F\uDC75-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80E-\uD810\uD812-\uD819\uD824-\uD82A\uD82D\uD82E\uD830-\uD832\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDB7F][\uDC00-\uDFFF]|\uD80B[\uDC00-\uDF8F\uDFF3-\uDFFF]|\uD80D[\uDC2F\uDC39-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDE6D\uDEBF\uDECA-\uDECF\uDEEE\uDEEF\uDEF6-\uDEFF\uDF46-\uDF4F\uDF5A\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE9B-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82B[\uDC00-\uDFEF\uDFF4\uDFFC\uDFFF]|\uD82C[\uDD23-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A\uDC9B\uDCA4-\uDFFF]|\uD833[\uDC00-\uDEFF\uDF2E\uDF2F\uDF47-\uDF4F\uDFC4-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDDEB-\uDDFF\uDE46-\uDEDF\uDEF4-\uDEFF\uDF57-\uDF5F\uDF79-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]|\uD836[\uDE8C-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD837[\uDC00-\uDEFF\uDF1F-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD50-\uDE8F\uDEAF-\uDEBF\uDEFA-\uDEFE\uDF00-\uDFFF]|\uD839[\uDC00-\uDFDF\uDFE7\uDFEC\uDFEF\uDFFF]|\uD83A[\uDCC5\uDCC6\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDD5D\uDD60-\uDFFF]|\uD83B[\uDC00-\uDC70\uDCB5-\uDD00\uDD3E-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDCFF\uDDAE-\uDDE5\uDE03-\uDE0F\uDE3C-\uDE3F\uDE49-\uDE4F\uDE52-\uDE5F\uDE66-\uDEFF]|\uD83D[\uDED8-\uDEDC\uDEED-\uDEEF\uDEFD-\uDEFF\uDF74-\uDF7F\uDFD9-\uDFDF\uDFEC-\uDFEF\uDFF1-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE\uDCAF\uDCB2-\uDCFF\uDE54-\uDE5F\uDE6E\uDE6F\uDE75-\uDE77\uDE7D-\uDE7F\uDE87-\uDE8F\uDEAD-\uDEAF\uDEBB-\uDEBF\uDEC6-\uDECF\uDEDA-\uDEDF\uDEE8-\uDEEF\uDEF7-\uDEFF\uDF93\uDFCB-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEE0-\uDEFF]|\uD86D[\uDF39-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00\uDC02-\uDC1F\uDC80-\uDCFF\uDDF0-\uDFFF]|[\uDBBF\uDBFF][\uDFFE\uDFFF]"
  },
  {
    name: "Co",
    alias: "Private_Use",
    bmp: "-",
    astral: "[\uDB80-\uDBBE\uDBC0-\uDBFE][\uDC00-\uDFFF]|[\uDBBF\uDBFF][\uDC00-\uDFFD]"
  },
  {
    name: "Cs",
    alias: "Surrogate",
    bmp: "\uD800-\uDFFF"
  },
  {
    name: "L",
    alias: "Letter",
    bmp: "A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛱ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢄᢇ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꟊꟐꟑꟓꟕ-ꟙꟲ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
    astral: "\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]"
  },
  {
    name: "LC",
    alias: "Cased_Letter",
    bmp: "A-Za-zµÀ-ÖØ-öø-ƺƼ-ƿǄ-ʓʕ-ʯͰ-ͳͶͷͻ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՠ-ֈႠ-ჅჇჍა-ჺჽ-ჿᎠ-Ᏽᏸ-ᏽᲀ-ᲈᲐ-ᲺᲽ-Ჿᴀ-ᴫᵫ-ᵷᵹ-ᶚḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℴℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-ⱻⱾ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭꙀ-ꙭꚀ-ꚛꜢ-ꝯꝱ-ꞇꞋ-ꞎꞐ-ꟊꟐꟑꟓꟕ-ꟙꟵꟶꟺꬰ-ꭚꭠ-ꭨꭰ-ꮿﬀ-ﬆﬓ-ﬗＡ-Ｚａ-ｚ",
    astral: "\uD801[\uDC00-\uDC4F\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC]|\uD803[\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD806[\uDCA0-\uDCDF]|\uD81B[\uDE40-\uDE7F]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF09\uDF0B-\uDF1E]|\uD83A[\uDD00-\uDD43]"
  },
  {
    name: "Ll",
    alias: "Lowercase_Letter",
    bmp: "a-zµß-öø-ÿāăąćĉċčďđēĕėęěĝğġģĥħĩīĭįıĳĵķĸĺļľŀłńņňŉŋōŏőœŕŗřśŝşšţťŧũūŭůűųŵŷźżž-ƀƃƅƈƌƍƒƕƙ-ƛƞơƣƥƨƪƫƭưƴƶƹƺƽ-ƿǆǉǌǎǐǒǔǖǘǚǜǝǟǡǣǥǧǩǫǭǯǰǳǵǹǻǽǿȁȃȅȇȉȋȍȏȑȓȕȗșțȝȟȡȣȥȧȩȫȭȯȱȳ-ȹȼȿɀɂɇɉɋɍɏ-ʓʕ-ʯͱͳͷͻ-ͽΐά-ώϐϑϕ-ϗϙϛϝϟϡϣϥϧϩϫϭϯ-ϳϵϸϻϼа-џѡѣѥѧѩѫѭѯѱѳѵѷѹѻѽѿҁҋҍҏґғҕҗҙқҝҟҡңҥҧҩҫҭүұҳҵҷҹһҽҿӂӄӆӈӊӌӎӏӑӓӕӗәӛӝӟӡӣӥӧөӫӭӯӱӳӵӷӹӻӽӿԁԃԅԇԉԋԍԏԑԓԕԗԙԛԝԟԡԣԥԧԩԫԭԯՠ-ֈა-ჺჽ-ჿᏸ-ᏽᲀ-ᲈᴀ-ᴫᵫ-ᵷᵹ-ᶚḁḃḅḇḉḋḍḏḑḓḕḗḙḛḝḟḡḣḥḧḩḫḭḯḱḳḵḷḹḻḽḿṁṃṅṇṉṋṍṏṑṓṕṗṙṛṝṟṡṣṥṧṩṫṭṯṱṳṵṷṹṻṽṿẁẃẅẇẉẋẍẏẑẓẕ-ẝẟạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹỻỽỿ-ἇἐ-ἕἠ-ἧἰ-ἷὀ-ὅὐ-ὗὠ-ὧὰ-ώᾀ-ᾇᾐ-ᾗᾠ-ᾧᾰ-ᾴᾶᾷιῂ-ῄῆῇῐ-ΐῖῗῠ-ῧῲ-ῴῶῷℊℎℏℓℯℴℹℼℽⅆ-ⅉⅎↄⰰ-ⱟⱡⱥⱦⱨⱪⱬⱱⱳⱴⱶ-ⱻⲁⲃⲅⲇⲉⲋⲍⲏⲑⲓⲕⲗⲙⲛⲝⲟⲡⲣⲥⲧⲩⲫⲭⲯⲱⲳⲵⲷⲹⲻⲽⲿⳁⳃⳅⳇⳉⳋⳍⳏⳑⳓⳕⳗⳙⳛⳝⳟⳡⳣⳤⳬⳮⳳⴀ-ⴥⴧⴭꙁꙃꙅꙇꙉꙋꙍꙏꙑꙓꙕꙗꙙꙛꙝꙟꙡꙣꙥꙧꙩꙫꙭꚁꚃꚅꚇꚉꚋꚍꚏꚑꚓꚕꚗꚙꚛꜣꜥꜧꜩꜫꜭꜯ-ꜱꜳꜵꜷꜹꜻꜽꜿꝁꝃꝅꝇꝉꝋꝍꝏꝑꝓꝕꝗꝙꝛꝝꝟꝡꝣꝥꝧꝩꝫꝭꝯꝱ-ꝸꝺꝼꝿꞁꞃꞅꞇꞌꞎꞑꞓ-ꞕꞗꞙꞛꞝꞟꞡꞣꞥꞧꞩꞯꞵꞷꞹꞻꞽꞿꟁꟃꟈꟊꟑꟓꟕꟗꟙꟶꟺꬰ-ꭚꭠ-ꭨꭰ-ꮿﬀ-ﬆﬓ-ﬗａ-ｚ",
    astral: "\uD801[\uDC28-\uDC4F\uDCD8-\uDCFB\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC]|\uD803[\uDCC0-\uDCF2]|\uD806[\uDCC0-\uDCDF]|\uD81B[\uDE60-\uDE7F]|\uD835[\uDC1A-\uDC33\uDC4E-\uDC54\uDC56-\uDC67\uDC82-\uDC9B\uDCB6-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDCEA-\uDD03\uDD1E-\uDD37\uDD52-\uDD6B\uDD86-\uDD9F\uDDBA-\uDDD3\uDDEE-\uDE07\uDE22-\uDE3B\uDE56-\uDE6F\uDE8A-\uDEA5\uDEC2-\uDEDA\uDEDC-\uDEE1\uDEFC-\uDF14\uDF16-\uDF1B\uDF36-\uDF4E\uDF50-\uDF55\uDF70-\uDF88\uDF8A-\uDF8F\uDFAA-\uDFC2\uDFC4-\uDFC9\uDFCB]|\uD837[\uDF00-\uDF09\uDF0B-\uDF1E]|\uD83A[\uDD22-\uDD43]"
  },
  {
    name: "Lm",
    alias: "Modifier_Letter",
    bmp: "ʰ-ˁˆ-ˑˠ-ˤˬˮʹͺՙـۥۦߴߵߺࠚࠤࠨࣉॱๆໆჼៗᡃᪧᱸ-ᱽᴬ-ᵪᵸᶛ-ᶿⁱⁿₐ-ₜⱼⱽⵯⸯ々〱-〵〻ゝゞー-ヾꀕꓸ-ꓽꘌꙿꚜꚝꜗ-ꜟꝰꞈꟲ-ꟴꟸꟹꧏꧦꩰꫝꫳꫴꭜ-ꭟꭩｰﾞﾟ",
    astral: "\uD801[\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD81A[\uDF40-\uDF43]|\uD81B[\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD838[\uDD37-\uDD3D]|𞥋"
  },
  {
    name: "Lo",
    alias: "Other_Letter",
    bmp: "ªºƻǀ-ǃʔא-תׯ-ײؠ-ؿف-يٮٯٱ-ۓەۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪࠀ-ࠕࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣈऄ-हऽॐक़-ॡॲ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๅກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎᄀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛱ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៜᠠ-ᡂᡄ-ᡸᢀ-ᢄᢇ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱷᳩ-ᳬᳮ-ᳳᳵᳶᳺℵ-ℸⴰ-ⵧⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ〆〼ぁ-ゖゟァ-ヺヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꀔꀖ-ꒌꓐ-ꓷꔀ-ꘋꘐ-ꘟꘪꘫꙮꚠ-ꛥꞏꟷꟻ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧠ-ꧤꧧ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩯꩱ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛꫜꫠ-ꫪꫲꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎יִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼｦ-ｯｱ-ﾝﾠ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
    astral: "\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC50-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF4A\uDF50]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|𝼊|\uD838[\uDD00-\uDD2C\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]"
  },
  {
    name: "Lt",
    alias: "Titlecase_Letter",
    bmp: "ǅǈǋǲᾈ-ᾏᾘ-ᾟᾨ-ᾯᾼῌῼ"
  },
  {
    name: "Lu",
    alias: "Uppercase_Letter",
    bmp: "A-ZÀ-ÖØ-ÞĀĂĄĆĈĊČĎĐĒĔĖĘĚĜĞĠĢĤĦĨĪĬĮİĲĴĶĹĻĽĿŁŃŅŇŊŌŎŐŒŔŖŘŚŜŞŠŢŤŦŨŪŬŮŰŲŴŶŸŹŻŽƁƂƄƆƇƉ-ƋƎ-ƑƓƔƖ-ƘƜƝƟƠƢƤƦƧƩƬƮƯƱ-ƳƵƷƸƼǄǇǊǍǏǑǓǕǗǙǛǞǠǢǤǦǨǪǬǮǱǴǶ-ǸǺǼǾȀȂȄȆȈȊȌȎȐȒȔȖȘȚȜȞȠȢȤȦȨȪȬȮȰȲȺȻȽȾɁɃ-ɆɈɊɌɎͰͲͶͿΆΈ-ΊΌΎΏΑ-ΡΣ-ΫϏϒ-ϔϘϚϜϞϠϢϤϦϨϪϬϮϴϷϹϺϽ-ЯѠѢѤѦѨѪѬѮѰѲѴѶѸѺѼѾҀҊҌҎҐҒҔҖҘҚҜҞҠҢҤҦҨҪҬҮҰҲҴҶҸҺҼҾӀӁӃӅӇӉӋӍӐӒӔӖӘӚӜӞӠӢӤӦӨӪӬӮӰӲӴӶӸӺӼӾԀԂԄԆԈԊԌԎԐԒԔԖԘԚԜԞԠԢԤԦԨԪԬԮԱ-ՖႠ-ჅჇჍᎠ-ᏵᲐ-ᲺᲽ-ᲿḀḂḄḆḈḊḌḎḐḒḔḖḘḚḜḞḠḢḤḦḨḪḬḮḰḲḴḶḸḺḼḾṀṂṄṆṈṊṌṎṐṒṔṖṘṚṜṞṠṢṤṦṨṪṬṮṰṲṴṶṸṺṼṾẀẂẄẆẈẊẌẎẐẒẔẞẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴỶỸỺỼỾἈ-ἏἘ-ἝἨ-ἯἸ-ἿὈ-ὍὙὛὝὟὨ-ὯᾸ-ΆῈ-ΉῘ-ΊῨ-ῬῸ-Ώℂℇℋ-ℍℐ-ℒℕℙ-ℝℤΩℨK-ℭℰ-ℳℾℿⅅↃⰀ-ⰯⱠⱢ-ⱤⱧⱩⱫⱭ-ⱰⱲⱵⱾ-ⲀⲂⲄⲆⲈⲊⲌⲎⲐⲒⲔⲖⲘⲚⲜⲞⲠⲢⲤⲦⲨⲪⲬⲮⲰⲲⲴⲶⲸⲺⲼⲾⳀⳂⳄⳆⳈⳊⳌⳎⳐⳒⳔⳖⳘⳚⳜⳞⳠⳢⳫⳭⳲꙀꙂꙄꙆꙈꙊꙌꙎꙐꙒꙔꙖꙘꙚꙜꙞꙠꙢꙤꙦꙨꙪꙬꚀꚂꚄꚆꚈꚊꚌꚎꚐꚒꚔꚖꚘꚚꜢꜤꜦꜨꜪꜬꜮꜲꜴꜶꜸꜺꜼꜾꝀꝂꝄꝆꝈꝊꝌꝎꝐꝒꝔꝖꝘꝚꝜꝞꝠꝢꝤꝦꝨꝪꝬꝮꝹꝻꝽꝾꞀꞂꞄꞆꞋꞍꞐꞒꞖꞘꞚꞜꞞꞠꞢꞤꞦꞨꞪ-ꞮꞰ-ꞴꞶꞸꞺꞼꞾꟀꟂꟄ-ꟇꟉꟐꟖꟘꟵＡ-Ｚ",
    astral: "\uD801[\uDC00-\uDC27\uDCB0-\uDCD3\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95]|\uD803[\uDC80-\uDCB2]|\uD806[\uDCA0-\uDCBF]|\uD81B[\uDE40-\uDE5F]|\uD835[\uDC00-\uDC19\uDC34-\uDC4D\uDC68-\uDC81\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB5\uDCD0-\uDCE9\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD38\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD6C-\uDD85\uDDA0-\uDDB9\uDDD4-\uDDED\uDE08-\uDE21\uDE3C-\uDE55\uDE70-\uDE89\uDEA8-\uDEC0\uDEE2-\uDEFA\uDF1C-\uDF34\uDF56-\uDF6E\uDF90-\uDFA8\uDFCA]|\uD83A[\uDD00-\uDD21]"
  },
  {
    name: "M",
    alias: "Mark",
    bmp: "̀-ͯ҃-҉֑-ׇֽֿׁׂׅׄؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۤۧۨ-ܑۭܰ-݊ަ-ް߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࢘-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣঁ-ঃ়া-ৄেৈো-্ৗৢৣ৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑੰੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣஂா-ூெ-ைொ-்ௗఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣඁ-ඃ්ා-ුූෘ-ෟෲෳัิ-ฺ็-๎ັິ-ຼ່-ໍ༹༘༙༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏႚ-ႝ፝-፟ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝᠋-᠍᠏ᢅᢆᢩᤠ-ᤫᤰ-᤻ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼᪰-ᫎᬀ-ᬄ᬴-᭄᭫-᭳ᮀ-ᮂᮡ-ᮭ᯦-᯳ᰤ-᰷᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿⃐-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꙯-꙲ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣠-꣱ꣿꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀ꧥꨩ-ꨶꩃꩌꩍꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭ﬞ︀-️︠-︯",
    astral: "\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC00-\uDC02\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC82\uDCB0-\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD34\uDD45\uDD46\uDD73\uDD80-\uDD82\uDDB3-\uDDC0\uDDC9-\uDDCC\uDDCE\uDDCF\uDE2C-\uDE37\uDE3E\uDEDF-\uDEEA\uDF00-\uDF03\uDF3B\uDF3C\uDF3E-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC35-\uDC46\uDC5E\uDCB0-\uDCC3\uDDAF-\uDDB5\uDDB8-\uDDC0\uDDDC\uDDDD\uDE30-\uDE40\uDEAB-\uDEB7\uDF1D-\uDF2B]|\uD806[\uDC2C-\uDC3A\uDD30-\uDD35\uDD37\uDD38\uDD3B-\uDD3E\uDD40\uDD42\uDD43\uDDD1-\uDDD7\uDDDA-\uDDE0\uDDE4\uDE01-\uDE0A\uDE33-\uDE39\uDE3B-\uDE3E\uDE47\uDE51-\uDE5B\uDE8A-\uDE99]|\uD807[\uDC2F-\uDC36\uDC38-\uDC3F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD8A-\uDD8E\uDD90\uDD91\uDD93-\uDD97\uDEF3-\uDEF6]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF51-\uDF87\uDF8F-\uDF92\uDFE4\uDFF0\uDFF1]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uDB40[\uDD00-\uDDEF]"
  },
  {
    name: "Mc",
    alias: "Spacing_Mark",
    bmp: "ःऻा-ीॉ-ौॎॏংঃা-ীেৈোৌৗਃਾ-ੀઃા-ીૉોૌଂଃାୀେୈୋୌୗாிுூெ-ைொ-ௌௗఁ-ఃు-ౄಂಃಾೀ-ೄೇೈೊೋೕೖംഃാ-ീെ-ൈൊ-ൌൗංඃා-ෑෘ-ෟෲෳ༾༿ཿါာေးျြၖၗၢ-ၤၧ-ၭႃႄႇ-ႌႏႚ-ႜ᜕᜴ាើ-ៅះៈᤣ-ᤦᤩ-ᤫᤰᤱᤳ-ᤸᨙᨚᩕᩗᩡᩣᩤᩭ-ᩲᬄᬵᬻᬽ-ᭁᭃ᭄ᮂᮡᮦᮧ᮪ᯧᯪ-ᯬᯮ᯲᯳ᰤ-ᰫᰴᰵ᳡᳷〮〯ꠣꠤꠧꢀꢁꢴ-ꣃꥒ꥓ꦃꦴꦵꦺꦻꦾ-꧀ꨯꨰꨳꨴꩍꩻꩽꫫꫮꫯꫵꯣꯤꯦꯧꯩꯪ꯬",
    astral: "\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3E\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB0-\uDCB2\uDCB9\uDCBB-\uDCBE\uDCC1\uDDAF-\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF20\uDF21\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD30-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD65\uDD66\uDD6D-\uDD72]"
  },
  {
    name: "Me",
    alias: "Enclosing_Mark",
    bmp: "҈҉᪾⃝-⃠⃢-⃤꙰-꙲"
  },
  {
    name: "Mn",
    alias: "Nonspacing_Mark",
    bmp: "̀-ͯ҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۤۧۨ-ܑۭܰ-݊ަ-ް߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࢘-࢟࣊-ࣣ࣡-ंऺ़ु-ै्॑-ॗॢॣঁ়ু-ৄ্ৢৣ৾ਁਂ਼ੁੂੇੈੋ-੍ੑੰੱੵઁં઼ુ-ૅેૈ્ૢૣૺ-૿ଁ଼ିୁ-ୄ୍୕ୖୢୣஂீ்ఀఄ఼ా-ీె-ైొ-్ౕౖౢౣಁ಼ಿೆೌ್ೢೣഀഁ഻഼ു-ൄ്ൢൣඁ්ි-ුූัิ-ฺ็-๎ັິ-ຼ່-ໍཱ༹༘༙༵༷-ཾྀ-྄྆྇ྍ-ྗྙ-ྼ࿆ိ-ူဲ-့္်ွှၘၙၞ-ၠၱ-ၴႂႅႆႍႝ፝-፟ᜒ-᜔ᜲᜳᝒᝓᝲᝳ឴឵ិ-ួំ៉-៓៝᠋-᠍᠏ᢅᢆᢩᤠ-ᤢᤧᤨᤲ᤹-᤻ᨘᨗᨛᩖᩘ-ᩞ᩠ᩢᩥ-ᩬᩳ-᩿᩼᪰-᪽ᪿ-ᫎᬀ-ᬃ᬴ᬶ-ᬺᬼᭂ᭫-᭳ᮀᮁᮢ-ᮥᮨᮩ᮫-ᮭ᯦ᯨᯩᯭᯯ-ᯱᰬ-ᰳᰶ᰷᳐-᳔᳒-᳢᳠-᳨᳭᳴᳸᳹᷀-᷿⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〭꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠥꠦ꠬꣄ꣅ꣠-꣱ꣿꤦ-꤭ꥇ-ꥑꦀ-ꦂ꦳ꦶ-ꦹꦼꦽꧥꨩ-ꨮꨱꨲꨵꨶꩃꩌꩼꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫬꫭ꫶ꯥꯨ꯭ﬞ︀-️︠-︯",
    astral: "\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC01\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF40\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB3-\uDCB8\uDCBA\uDCBF\uDCC0\uDCC2\uDCC3\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD67-\uDD69\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uDB40[\uDD00-\uDDEF]"
  },
  {
    name: "N",
    alias: "Number",
    bmp: "0-9²³¹¼-¾٠-٩۰-۹߀-߉०-९০-৯৴-৹੦-੯૦-૯୦-୯୲-୷௦-௲౦-౯౸-౾೦-೯൘-൞൦-൸෦-෯๐-๙໐-໙༠-༳၀-၉႐-႙፩-፼ᛮ-ᛰ០-៩៰-៹᠐-᠙᥆-᥏᧐-᧚᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙⁰⁴-⁹₀-₉⅐-ↂↅ-↉①-⒛⓪-⓿❶-➓⳽〇〡-〩〸-〺㆒-㆕㈠-㈩㉈-㉏㉑-㉟㊀-㊉㊱-㊿꘠-꘩ꛦ-ꛯ꠰-꠵꣐-꣙꤀-꤉꧐-꧙꧰-꧹꩐-꩙꯰-꯹０-９",
    astral: "\uD800[\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23\uDF41\uDF4A\uDFD1-\uDFD5]|\uD801[\uDCA0-\uDCA9]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE48\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDCFA-\uDCFF\uDD30-\uDD39\uDE60-\uDE7E\uDF1D-\uDF26\uDF51-\uDF54\uDFC5-\uDFCB]|\uD804[\uDC52-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDDE1-\uDDF4\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF3B]|\uD806[\uDCE0-\uDCF2\uDD50-\uDD59]|\uD807[\uDC50-\uDC6C\uDD50-\uDD59\uDDA0-\uDDA9\uDFC0-\uDFD4]|\uD809[\uDC00-\uDC6E]|\uD81A[\uDE60-\uDE69\uDEC0-\uDEC9\uDF50-\uDF59\uDF5B-\uDF61]|\uD81B[\uDE80-\uDE96]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDFCE-\uDFFF]|\uD838[\uDD40-\uDD49\uDEF0-\uDEF9]|\uD83A[\uDCC7-\uDCCF\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]"
  },
  {
    name: "Nd",
    alias: "Decimal_Number",
    bmp: "0-9٠-٩۰-۹߀-߉०-९০-৯੦-੯૦-૯୦-୯௦-௯౦-౯೦-೯൦-൯෦-෯๐-๙໐-໙༠-༩၀-၉႐-႙០-៩᠐-᠙᥆-᥏᧐-᧙᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙꘠-꘩꣐-꣙꤀-꤉꧐-꧙꧰-꧹꩐-꩙꯰-꯹０-９",
    astral: "\uD801[\uDCA0-\uDCA9]|\uD803[\uDD30-\uDD39]|\uD804[\uDC66-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF39]|\uD806[\uDCE0-\uDCE9\uDD50-\uDD59]|\uD807[\uDC50-\uDC59\uDD50-\uDD59\uDDA0-\uDDA9]|\uD81A[\uDE60-\uDE69\uDEC0-\uDEC9\uDF50-\uDF59]|\uD835[\uDFCE-\uDFFF]|\uD838[\uDD40-\uDD49\uDEF0-\uDEF9]|\uD83A[\uDD50-\uDD59]|\uD83E[\uDFF0-\uDFF9]"
  },
  {
    name: "Nl",
    alias: "Letter_Number",
    bmp: "ᛮ-ᛰⅠ-ↂↅ-ↈ〇〡-〩〸-〺ꛦ-ꛯ",
    astral: "\uD800[\uDD40-\uDD74\uDF41\uDF4A\uDFD1-\uDFD5]|\uD809[\uDC00-\uDC6E]"
  },
  {
    name: "No",
    alias: "Other_Number",
    bmp: "²³¹¼-¾৴-৹୲-୷௰-௲౸-౾൘-൞൰-൸༪-༳፩-፼៰-៹᧚⁰⁴-⁹₀-₉⅐-⅟↉①-⒛⓪-⓿❶-➓⳽㆒-㆕㈠-㈩㉈-㉏㉑-㉟㊀-㊉㊱-㊿꠰-꠵",
    astral: "\uD800[\uDD07-\uDD33\uDD75-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE48\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDCFA-\uDCFF\uDE60-\uDE7E\uDF1D-\uDF26\uDF51-\uDF54\uDFC5-\uDFCB]|\uD804[\uDC52-\uDC65\uDDE1-\uDDF4]|\uD805[\uDF3A\uDF3B]|\uD806[\uDCEA-\uDCF2]|\uD807[\uDC5A-\uDC6C\uDFC0-\uDFD4]|\uD81A[\uDF5B-\uDF61]|\uD81B[\uDE80-\uDE96]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD83A[\uDCC7-\uDCCF]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D]|\uD83C[\uDD00-\uDD0C]"
  },
  {
    name: "P",
    alias: "Punctuation",
    bmp: "!-#%-\\*,-\\/:;\\?@\\[-\\]_\\{\\}¡§«¶·»¿;·՚-՟։֊־׀׃׆׳״؉؊،؍؛؝-؟٪-٭۔܀-܍߷-߹࠰-࠾࡞।॥॰৽੶૰౷಄෴๏๚๛༄-༒༔༺-༽྅࿐-࿔࿙࿚၊-၏჻፠-፨᐀᙮᚛᚜᛫-᛭᜵᜶។-៖៘-៚᠀-᠊᥄᥅᨞᨟᪠-᪦᪨-᪭᭚-᭠᭽᭾᯼-᯿᰻-᰿᱾᱿᳀-᳇᳓‐-‧‰-⁃⁅-⁑⁓-⁞⁽⁾₍₎⌈-⌋〈〉❨-❵⟅⟆⟦-⟯⦃-⦘⧘-⧛⧼⧽⳹-⳼⳾⳿⵰⸀-⸮⸰-⹏⹒-⹝、-〃〈-】〔-〟〰〽゠・꓾꓿꘍-꘏꙳꙾꛲-꛷꡴-꡷꣎꣏꣸-꣺꣼꤮꤯꥟꧁-꧍꧞꧟꩜-꩟꫞꫟꫰꫱꯫﴾﴿︐-︙︰-﹒﹔-﹡﹣﹨﹪﹫！-＃％-＊，-／：；？＠［-］＿｛｝｟-･",
    astral: "\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|𐕯|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|𛲟|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]"
  },
  {
    name: "Pc",
    alias: "Connector_Punctuation",
    bmp: "_‿⁀⁔︳︴﹍-﹏＿"
  },
  {
    name: "Pd",
    alias: "Dash_Punctuation",
    bmp: "\\-֊־᐀᠆‐-―⸗⸚⸺⸻⹀⹝〜〰゠︱︲﹘﹣－",
    astral: "𐺭"
  },
  {
    name: "Pe",
    alias: "Close_Punctuation",
    bmp: "\\)\\]\\}༻༽᚜⁆⁾₎⌉⌋〉❩❫❭❯❱❳❵⟆⟧⟩⟫⟭⟯⦄⦆⦈⦊⦌⦎⦐⦒⦔⦖⦘⧙⧛⧽⸣⸥⸧⸩⹖⹘⹚⹜〉》」』】〕〗〙〛〞〟﴾︘︶︸︺︼︾﹀﹂﹄﹈﹚﹜﹞）］｝｠｣"
  },
  {
    name: "Pf",
    alias: "Final_Punctuation",
    bmp: "»’”›⸃⸅⸊⸍⸝⸡"
  },
  {
    name: "Pi",
    alias: "Initial_Punctuation",
    bmp: "«‘‛“‟‹⸂⸄⸉⸌⸜⸠"
  },
  {
    name: "Po",
    alias: "Other_Punctuation",
    bmp: "!-#%-'\\*,\\.\\/:;\\?@\\¡§¶·¿;·՚-՟։׀׃׆׳״؉؊،؍؛؝-؟٪-٭۔܀-܍߷-߹࠰-࠾࡞।॥॰৽੶૰౷಄෴๏๚๛༄-༒༔྅࿐-࿔࿙࿚၊-၏჻፠-፨᙮᛫-᛭᜵᜶។-៖៘-៚᠀-᠅᠇-᠊᥄᥅᨞᨟᪠-᪦᪨-᪭᭚-᭠᭽᭾᯼-᯿᰻-᰿᱾᱿᳀-᳇᳓‖‗†-‧‰-‸※-‾⁁-⁃⁇-⁑⁓⁕-⁞⳹-⳼⳾⳿⵰⸀⸁⸆-⸈⸋⸎-⸖⸘⸙⸛⸞⸟⸪-⸮⸰-⸹⸼-⸿⹁⹃-⹏⹒-⹔、-〃〽・꓾꓿꘍-꘏꙳꙾꛲-꛷꡴-꡷꣎꣏꣸-꣺꣼꤮꤯꥟꧁-꧍꧞꧟꩜-꩟꫞꫟꫰꫱꯫︐-︖︙︰﹅﹆﹉-﹌﹐-﹒﹔-﹗﹟-﹡﹨﹪﹫！-＃％-＇＊，．／：；？＠＼｡､･",
    astral: "\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|𐕯|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|𛲟|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]"
  },
  {
    name: "Ps",
    alias: "Open_Punctuation",
    bmp: "\\(\\[\\{༺༼᚛‚„⁅⁽₍⌈⌊〈❨❪❬❮❰❲❴⟅⟦⟨⟪⟬⟮⦃⦅⦇⦉⦋⦍⦏⦑⦓⦕⦗⧘⧚⧼⸢⸤⸦⸨⹂⹕⹗⹙⹛〈《「『【〔〖〘〚〝﴿︗︵︷︹︻︽︿﹁﹃﹇﹙﹛﹝（［｛｟｢"
  },
  {
    name: "S",
    alias: "Symbol",
    bmp: "\\$\\+<->\\^`\\|~¢-¦¨©¬®-±´¸×÷˂-˅˒-˟˥-˫˭˯-˿͵΄΅϶҂֍-֏؆-؈؋؎؏۞۩۽۾߶߾߿࢈৲৳৺৻૱୰௳-௺౿൏൹฿༁-༃༓༕-༗༚-༟༴༶༸྾-࿅࿇-࿌࿎࿏࿕-࿘႞႟᎐-᎙᙭៛᥀᧞-᧿᭡-᭪᭴-᭼᾽᾿-῁῍-῏῝-῟῭-`´῾⁄⁒⁺-⁼₊-₌₠-⃀℀℁℃-℆℈℉℔№-℘℞-℣℥℧℩℮℺℻⅀-⅄⅊-⅍⅏↊↋←-⌇⌌-⌨⌫-␦⑀-⑊⒜-ⓩ─-❧➔-⟄⟇-⟥⟰-⦂⦙-⧗⧜-⧻⧾-⭳⭶-⮕⮗-⯿⳥-⳪⹐⹑⺀-⺙⺛-⻳⼀-⿕⿰-⿻〄〒〓〠〶〷〾〿゛゜㆐㆑㆖-㆟㇀-㇣㈀-㈞㈪-㉇㉐㉠-㉿㊊-㊰㋀-㏿䷀-䷿꒐-꓆꜀-꜖꜠꜡꞉꞊꠨-꠫꠶-꠹꩷-꩹꭛꭪꭫﬩﮲-﯂﵀-﵏﷏﷼-﷿﹢﹤-﹦﹩＄＋＜-＞＾｀｜～￠-￦￨-￮￼�",
    astral: "\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|𑜿|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|𛲜|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDD-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7C\uDE80-\uDE86\uDE90-\uDEAC\uDEB0-\uDEBA\uDEC0-\uDEC5\uDED0-\uDED9\uDEE0-\uDEE7\uDEF0-\uDEF6\uDF00-\uDF92\uDF94-\uDFCA]"
  },
  {
    name: "Sc",
    alias: "Currency_Symbol",
    bmp: "\\$¢-¥֏؋߾߿৲৳৻૱௹฿៛₠-⃀꠸﷼﹩＄￠￡￥￦",
    astral: "\uD807[\uDFDD-\uDFE0]|𞋿|𞲰"
  },
  {
    name: "Sk",
    alias: "Modifier_Symbol",
    bmp: "\\^`¨¯´¸˂-˅˒-˟˥-˫˭˯-˿͵΄΅࢈᾽᾿-῁῍-῏῝-῟῭-`´῾゛゜꜀-꜖꜠꜡꞉꞊꭛꭪꭫﮲-﯂＾｀￣",
    astral: "\uD83C[\uDFFB-\uDFFF]"
  },
  {
    name: "Sm",
    alias: "Math_Symbol",
    bmp: "\\+<->\\|~¬±×÷϶؆-؈⁄⁒⁺-⁼₊-₌℘⅀-⅄⅋←-↔↚↛↠↣↦↮⇎⇏⇒⇔⇴-⋿⌠⌡⍼⎛-⎳⏜-⏡▷◁◸-◿♯⟀-⟄⟇-⟥⟰-⟿⤀-⦂⦙-⧗⧜-⧻⧾-⫿⬰-⭄⭇-⭌﬩﹢﹤-﹦＋＜-＞｜～￢￩-￬",
    astral: "\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD83B[\uDEF0\uDEF1]"
  },
  {
    name: "So",
    alias: "Other_Symbol",
    bmp: "¦©®°҂֍֎؎؏۞۩۽۾߶৺୰௳-௸௺౿൏൹༁-༃༓༕-༗༚-༟༴༶༸྾-࿅࿇-࿌࿎࿏࿕-࿘႞႟᎐-᎙᙭᥀᧞-᧿᭡-᭪᭴-᭼℀℁℃-℆℈℉℔№℗℞-℣℥℧℩℮℺℻⅊⅌⅍⅏↊↋↕-↙↜-↟↡↢↤↥↧-↭↯-⇍⇐⇑⇓⇕-⇳⌀-⌇⌌-⌟⌢-⌨⌫-⍻⍽-⎚⎴-⏛⏢-␦⑀-⑊⒜-ⓩ─-▶▸-◀◂-◷☀-♮♰-❧➔-➿⠀-⣿⬀-⬯⭅⭆⭍-⭳⭶-⮕⮗-⯿⳥-⳪⹐⹑⺀-⺙⺛-⻳⼀-⿕⿰-⿻〄〒〓〠〶〷〾〿㆐㆑㆖-㆟㇀-㇣㈀-㈞㈪-㉇㉐㉠-㉿㊊-㊰㋀-㏿䷀-䷿꒐-꓆꠨-꠫꠶꠷꠹꩷-꩹﵀-﵏﷏﷽-﷿￤￨￭￮￼�",
    astral: "\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|𑜿|\uD807[\uDFD5-\uDFDC\uDFE1-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|𛲜|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|𞅏|\uD83B[\uDCAC\uDD2E]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFA]|\uD83D[\uDC00-\uDED7\uDEDD-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7C\uDE80-\uDE86\uDE90-\uDEAC\uDEB0-\uDEBA\uDEC0-\uDEC5\uDED0-\uDED9\uDEE0-\uDEE7\uDEF0-\uDEF6\uDF00-\uDF92\uDF94-\uDFCA]"
  },
  {
    name: "Z",
    alias: "Separator",
    bmp: "    - \u2028\u2029  　"
  },
  {
    name: "Zl",
    alias: "Line_Separator",
    bmp: "\u2028"
  },
  {
    name: "Zp",
    alias: "Paragraph_Separator",
    bmp: "\u2029"
  },
  {
    name: "Zs",
    alias: "Space_Separator",
    bmp: "    -   　"
  }
];
const wl = /* @__PURE__ */ wu($l);
/*!
 * XRegExp Unicode Categories 5.1.1
 * <xregexp.com>
 * Steven Levithan (c) 2010-present MIT License
 * Unicode data by Mathias Bynens <mathiasbynens.be>
 */
const xl = (u) => {
  if (!u.addUnicodeData)
    throw new ReferenceError("Unicode Base must be loaded before Unicode Categories");
  u.addUnicodeData(wl);
};
var Ol = [
  {
    name: "ASCII",
    bmp: "\0-"
  },
  {
    name: "Alphabetic",
    bmp: "A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͅͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈְ-ׇֽֿׁׂׅׄא-תׯ-ײؐ-ؚؠ-ٗٙ-ٟٮ-ۓە-ۜۡ-ۭۨ-ۯۺ-ۼۿܐ-ܿݍ-ޱߊ-ߪߴߵߺࠀ-ࠗࠚ-ࠬࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉࣔ-ࣣࣟ-ࣰࣩ-ऻऽ-ौॎ-ॐॕ-ॣॱ-ঃঅ-ঌএঐও-নপ-রলশ-হঽ-ৄেৈোৌৎৗড়ঢ়য়-ৣৰৱৼਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਾ-ੂੇੈੋੌੑਖ਼-ੜਫ਼ੰ-ੵઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽ-ૅે-ૉોૌૐૠ-ૣૹ-ૼଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽ-ୄେୈୋୌୖୗଡ଼ଢ଼ୟ-ୣୱஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-ௌௐௗఀ-ఃఅ-ఌఎ-ఐఒ-నప-హఽ-ౄె-ైొ-ౌౕౖౘ-ౚౝౠ-ౣಀ-ಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽ-ೄೆ-ೈೊ-ೌೕೖೝೞೠ-ೣೱೲഀ-ഌഎ-ഐഒ-ഺഽ-ൄെ-ൈൊ-ൌൎൔ-ൗൟ-ൣൺ-ൿඁ-ඃඅ-ඖක-නඳ-රලව-ෆා-ුූෘ-ෟෲෳก-ฺเ-ๆํກຂຄຆ-ຊຌ-ຣລວ-ູົ-ຽເ-ໄໆໍໜ-ໟༀཀ-ཇཉ-ཬཱ-ཱྀྈ-ྗྙ-ྼက-ံးျ-ဿၐ-ႏႚ-ႝႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜓᜟ-ᜳᝀ-ᝓᝠ-ᝬᝮ-ᝰᝲᝳក-ឳា-ៈៗៜᠠ-ᡸᢀ-ᢪᢰ-ᣵᤀ-ᤞᤠ-ᤫᤰ-ᤸᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨛᨠ-ᩞᩡ-ᩴᪧᪿᫀᫌ-ᫎᬀ-ᬳᬵ-ᭃᭅ-ᭌᮀ-ᮩᮬ-ᮯᮺ-ᯥᯧ-ᯱᰀ-ᰶᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿᷧ-ᷴḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⒶ-ⓩⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⷠ-ⷿⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙴ-ꙻꙿ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꟊꟐꟑꟓꟕ-ꟙꟲ-ꠅꠇ-ꠧꡀ-ꡳꢀ-ꣃꣅꣲ-ꣷꣻꣽ-ꣿꤊ-ꤪꤰ-ꥒꥠ-ꥼꦀ-ꦲꦴ-ꦿꧏꧠ-ꧯꧺ-ꧾꨀ-ꨶꩀ-ꩍꩠ-ꩶꩺ-ꪾꫀꫂꫛ-ꫝꫠ-ꫯꫲ-ꫵꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯪ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
    astral: "\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD27\uDE80-\uDEA9\uDEAB\uDEAC\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC45\uDC71-\uDC75\uDC82-\uDCB8\uDCC2\uDCD0-\uDCE8\uDD00-\uDD32\uDD44-\uDD47\uDD50-\uDD72\uDD76\uDD80-\uDDBF\uDDC1-\uDDC4\uDDCE\uDDCF\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE34\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEE8\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D-\uDF44\uDF47\uDF48\uDF4B\uDF4C\uDF50\uDF57\uDF5D-\uDF63]|\uD805[\uDC00-\uDC41\uDC43-\uDC45\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCC1\uDCC4\uDCC5\uDCC7\uDD80-\uDDB5\uDDB8-\uDDBE\uDDD8-\uDDDD\uDE00-\uDE3E\uDE40\uDE44\uDE80-\uDEB5\uDEB8\uDF00-\uDF1A\uDF1D-\uDF2A\uDF40-\uDF46]|\uD806[\uDC00-\uDC38\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B\uDD3C\uDD3F-\uDD42\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDDF\uDDE1\uDDE3\uDDE4\uDE00-\uDE32\uDE35-\uDE3E\uDE50-\uDE97\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC3E\uDC40\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD41\uDD43\uDD46\uDD47\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD96\uDD98\uDEE0-\uDEF6\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3\uDFF0\uDFF1]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9E]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD47\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD30-\uDD49\uDD50-\uDD69\uDD70-\uDD89]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]"
  },
  {
    name: "Any",
    isBmpLast: !0,
    bmp: "\0-￿",
    astral: "[\uD800-\uDBFF][\uDC00-\uDFFF]"
  },
  {
    name: "Default_Ignorable_Code_Point",
    bmp: "­͏؜ᅟᅠ឴឵᠋-᠏​-‏‪-‮⁠-⁯ㅤ︀-️\uFEFFﾠ￰-￸",
    astral: "\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|[\uDB40-\uDB43][\uDC00-\uDFFF]"
  },
  {
    name: "Lowercase",
    bmp: "a-zªµºß-öø-ÿāăąćĉċčďđēĕėęěĝğġģĥħĩīĭįıĳĵķĸĺļľŀłńņňŉŋōŏőœŕŗřśŝşšţťŧũūŭůűųŵŷźżž-ƀƃƅƈƌƍƒƕƙ-ƛƞơƣƥƨƪƫƭưƴƶƹƺƽ-ƿǆǉǌǎǐǒǔǖǘǚǜǝǟǡǣǥǧǩǫǭǯǰǳǵǹǻǽǿȁȃȅȇȉȋȍȏȑȓȕȗșțȝȟȡȣȥȧȩȫȭȯȱȳ-ȹȼȿɀɂɇɉɋɍɏ-ʓʕ-ʸˀˁˠ-ˤͅͱͳͷͺ-ͽΐά-ώϐϑϕ-ϗϙϛϝϟϡϣϥϧϩϫϭϯ-ϳϵϸϻϼа-џѡѣѥѧѩѫѭѯѱѳѵѷѹѻѽѿҁҋҍҏґғҕҗҙқҝҟҡңҥҧҩҫҭүұҳҵҷҹһҽҿӂӄӆӈӊӌӎӏӑӓӕӗәӛӝӟӡӣӥӧөӫӭӯӱӳӵӷӹӻӽӿԁԃԅԇԉԋԍԏԑԓԕԗԙԛԝԟԡԣԥԧԩԫԭԯՠ-ֈა-ჺჽ-ჿᏸ-ᏽᲀ-ᲈᴀ-ᶿḁḃḅḇḉḋḍḏḑḓḕḗḙḛḝḟḡḣḥḧḩḫḭḯḱḳḵḷḹḻḽḿṁṃṅṇṉṋṍṏṑṓṕṗṙṛṝṟṡṣṥṧṩṫṭṯṱṳṵṷṹṻṽṿẁẃẅẇẉẋẍẏẑẓẕ-ẝẟạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹỻỽỿ-ἇἐ-ἕἠ-ἧἰ-ἷὀ-ὅὐ-ὗὠ-ὧὰ-ώᾀ-ᾇᾐ-ᾗᾠ-ᾧᾰ-ᾴᾶᾷιῂ-ῄῆῇῐ-ΐῖῗῠ-ῧῲ-ῴῶῷⁱⁿₐ-ₜℊℎℏℓℯℴℹℼℽⅆ-ⅉⅎⅰ-ⅿↄⓐ-ⓩⰰ-ⱟⱡⱥⱦⱨⱪⱬⱱⱳⱴⱶ-ⱽⲁⲃⲅⲇⲉⲋⲍⲏⲑⲓⲕⲗⲙⲛⲝⲟⲡⲣⲥⲧⲩⲫⲭⲯⲱⲳⲵⲷⲹⲻⲽⲿⳁⳃⳅⳇⳉⳋⳍⳏⳑⳓⳕⳗⳙⳛⳝⳟⳡⳣⳤⳬⳮⳳⴀ-ⴥⴧⴭꙁꙃꙅꙇꙉꙋꙍꙏꙑꙓꙕꙗꙙꙛꙝꙟꙡꙣꙥꙧꙩꙫꙭꚁꚃꚅꚇꚉꚋꚍꚏꚑꚓꚕꚗꚙꚛ-ꚝꜣꜥꜧꜩꜫꜭꜯ-ꜱꜳꜵꜷꜹꜻꜽꜿꝁꝃꝅꝇꝉꝋꝍꝏꝑꝓꝕꝗꝙꝛꝝꝟꝡꝣꝥꝧꝩꝫꝭꝯ-ꝸꝺꝼꝿꞁꞃꞅꞇꞌꞎꞑꞓ-ꞕꞗꞙꞛꞝꞟꞡꞣꞥꞧꞩꞯꞵꞷꞹꞻꞽꞿꟁꟃꟈꟊꟑꟓꟕꟗꟙꟶꟸ-ꟺꬰ-ꭚꭜ-ꭨꭰ-ꮿﬀ-ﬆﬓ-ﬗａ-ｚ",
    astral: "\uD801[\uDC28-\uDC4F\uDCD8-\uDCFB\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDF80\uDF83-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD803[\uDCC0-\uDCF2]|\uD806[\uDCC0-\uDCDF]|\uD81B[\uDE60-\uDE7F]|\uD835[\uDC1A-\uDC33\uDC4E-\uDC54\uDC56-\uDC67\uDC82-\uDC9B\uDCB6-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDCEA-\uDD03\uDD1E-\uDD37\uDD52-\uDD6B\uDD86-\uDD9F\uDDBA-\uDDD3\uDDEE-\uDE07\uDE22-\uDE3B\uDE56-\uDE6F\uDE8A-\uDEA5\uDEC2-\uDEDA\uDEDC-\uDEE1\uDEFC-\uDF14\uDF16-\uDF1B\uDF36-\uDF4E\uDF50-\uDF55\uDF70-\uDF88\uDF8A-\uDF8F\uDFAA-\uDFC2\uDFC4-\uDFC9\uDFCB]|\uD837[\uDF00-\uDF09\uDF0B-\uDF1E]|\uD83A[\uDD22-\uDD43]"
  },
  {
    name: "Noncharacter_Code_Point",
    bmp: "﷐-﷯￾￿",
    astral: "[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]"
  },
  {
    name: "Uppercase",
    bmp: "A-ZÀ-ÖØ-ÞĀĂĄĆĈĊČĎĐĒĔĖĘĚĜĞĠĢĤĦĨĪĬĮİĲĴĶĹĻĽĿŁŃŅŇŊŌŎŐŒŔŖŘŚŜŞŠŢŤŦŨŪŬŮŰŲŴŶŸŹŻŽƁƂƄƆƇƉ-ƋƎ-ƑƓƔƖ-ƘƜƝƟƠƢƤƦƧƩƬƮƯƱ-ƳƵƷƸƼǄǇǊǍǏǑǓǕǗǙǛǞǠǢǤǦǨǪǬǮǱǴǶ-ǸǺǼǾȀȂȄȆȈȊȌȎȐȒȔȖȘȚȜȞȠȢȤȦȨȪȬȮȰȲȺȻȽȾɁɃ-ɆɈɊɌɎͰͲͶͿΆΈ-ΊΌΎΏΑ-ΡΣ-ΫϏϒ-ϔϘϚϜϞϠϢϤϦϨϪϬϮϴϷϹϺϽ-ЯѠѢѤѦѨѪѬѮѰѲѴѶѸѺѼѾҀҊҌҎҐҒҔҖҘҚҜҞҠҢҤҦҨҪҬҮҰҲҴҶҸҺҼҾӀӁӃӅӇӉӋӍӐӒӔӖӘӚӜӞӠӢӤӦӨӪӬӮӰӲӴӶӸӺӼӾԀԂԄԆԈԊԌԎԐԒԔԖԘԚԜԞԠԢԤԦԨԪԬԮԱ-ՖႠ-ჅჇჍᎠ-ᏵᲐ-ᲺᲽ-ᲿḀḂḄḆḈḊḌḎḐḒḔḖḘḚḜḞḠḢḤḦḨḪḬḮḰḲḴḶḸḺḼḾṀṂṄṆṈṊṌṎṐṒṔṖṘṚṜṞṠṢṤṦṨṪṬṮṰṲṴṶṸṺṼṾẀẂẄẆẈẊẌẎẐẒẔẞẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴỶỸỺỼỾἈ-ἏἘ-ἝἨ-ἯἸ-ἿὈ-ὍὙὛὝὟὨ-ὯᾸ-ΆῈ-ΉῘ-ΊῨ-ῬῸ-Ώℂℇℋ-ℍℐ-ℒℕℙ-ℝℤΩℨK-ℭℰ-ℳℾℿⅅⅠ-ⅯↃⒶ-ⓏⰀ-ⰯⱠⱢ-ⱤⱧⱩⱫⱭ-ⱰⱲⱵⱾ-ⲀⲂⲄⲆⲈⲊⲌⲎⲐⲒⲔⲖⲘⲚⲜⲞⲠⲢⲤⲦⲨⲪⲬⲮⲰⲲⲴⲶⲸⲺⲼⲾⳀⳂⳄⳆⳈⳊⳌⳎⳐⳒⳔⳖⳘⳚⳜⳞⳠⳢⳫⳭⳲꙀꙂꙄꙆꙈꙊꙌꙎꙐꙒꙔꙖꙘꙚꙜꙞꙠꙢꙤꙦꙨꙪꙬꚀꚂꚄꚆꚈꚊꚌꚎꚐꚒꚔꚖꚘꚚꜢꜤꜦꜨꜪꜬꜮꜲꜴꜶꜸꜺꜼꜾꝀꝂꝄꝆꝈꝊꝌꝎꝐꝒꝔꝖꝘꝚꝜꝞꝠꝢꝤꝦꝨꝪꝬꝮꝹꝻꝽꝾꞀꞂꞄꞆꞋꞍꞐꞒꞖꞘꞚꞜꞞꞠꞢꞤꞦꞨꞪ-ꞮꞰ-ꞴꞶꞸꞺꞼꞾꟀꟂꟄ-ꟇꟉꟐꟖꟘꟵＡ-Ｚ",
    astral: "\uD801[\uDC00-\uDC27\uDCB0-\uDCD3\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95]|\uD803[\uDC80-\uDCB2]|\uD806[\uDCA0-\uDCBF]|\uD81B[\uDE40-\uDE5F]|\uD835[\uDC00-\uDC19\uDC34-\uDC4D\uDC68-\uDC81\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB5\uDCD0-\uDCE9\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD38\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD6C-\uDD85\uDDA0-\uDDB9\uDDD4-\uDDED\uDE08-\uDE21\uDE3C-\uDE55\uDE70-\uDE89\uDEA8-\uDEC0\uDEE2-\uDEFA\uDF1C-\uDF34\uDF56-\uDF6E\uDF90-\uDFA8\uDFCA]|\uD83A[\uDD00-\uDD21]|\uD83C[\uDD30-\uDD49\uDD50-\uDD69\uDD70-\uDD89]"
  },
  {
    name: "White_Space",
    bmp: "	-\r    - \u2028\u2029  　"
  }
];
const Tl = /* @__PURE__ */ wu(Ol);
/*!
 * XRegExp Unicode Properties 5.1.1
 * <xregexp.com>
 * Steven Levithan (c) 2012-present MIT License
 * Unicode data by Mathias Bynens <mathiasbynens.be>
 */
const Sl = (u) => {
  if (!u.addUnicodeData)
    throw new ReferenceError("Unicode Base must be loaded before Unicode Properties");
  const D = Tl;
  D.push({
    name: "Assigned",
    // Since this is defined as the inverse of Unicode category Cn (Unassigned), the Unicode
    // Categories addon is required to use this property
    inverseOf: "Cn"
  }), u.addUnicodeData(D);
};
var Pl = [
  {
    name: "Adlam",
    astral: "\uD83A[\uDD00-\uDD4B\uDD50-\uDD59\uDD5E\uDD5F]"
  },
  {
    name: "Ahom",
    astral: "\uD805[\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF46]"
  },
  {
    name: "Anatolian_Hieroglyphs",
    astral: "\uD811[\uDC00-\uDE46]"
  },
  {
    name: "Arabic",
    bmp: "؀-؄؆-؋؍-ؚ؜-؞ؠ-ؿف-يٖ-ٯٱ-ۜ۞-ۿݐ-ݿࡰ-ࢎ࢐࢑࢘-ࣣ࣡-ࣿﭐ-﯂ﯓ-ﴽ﵀-ﶏﶒ-ﷇ﷏ﷰ-﷿ﹰ-ﹴﹶ-ﻼ",
    astral: "\uD803[\uDE60-\uDE7E]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB\uDEF0\uDEF1]"
  },
  {
    name: "Armenian",
    bmp: "Ա-Ֆՙ-֊֍-֏ﬓ-ﬗ"
  },
  {
    name: "Avestan",
    astral: "\uD802[\uDF00-\uDF35\uDF39-\uDF3F]"
  },
  {
    name: "Balinese",
    bmp: "ᬀ-ᭌ᭐-᭾"
  },
  {
    name: "Bamum",
    bmp: "ꚠ-꛷",
    astral: "\uD81A[\uDC00-\uDE38]"
  },
  {
    name: "Bassa_Vah",
    astral: "\uD81A[\uDED0-\uDEED\uDEF0-\uDEF5]"
  },
  {
    name: "Batak",
    bmp: "ᯀ-᯳᯼-᯿"
  },
  {
    name: "Bengali",
    bmp: "ঀ-ঃঅ-ঌএঐও-নপ-রলশ-হ়-ৄেৈো-ৎৗড়ঢ়য়-ৣ০-৾"
  },
  {
    name: "Bhaiksuki",
    astral: "\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC45\uDC50-\uDC6C]"
  },
  {
    name: "Bopomofo",
    bmp: "˪˫ㄅ-ㄯㆠ-ㆿ"
  },
  {
    name: "Brahmi",
    astral: "\uD804[\uDC00-\uDC4D\uDC52-\uDC75\uDC7F]"
  },
  {
    name: "Braille",
    bmp: "⠀-⣿"
  },
  {
    name: "Buginese",
    bmp: "ᨀ-ᨛ᨞᨟"
  },
  {
    name: "Buhid",
    bmp: "ᝀ-ᝓ"
  },
  {
    name: "Canadian_Aboriginal",
    bmp: "᐀-ᙿᢰ-ᣵ",
    astral: "\uD806[\uDEB0-\uDEBF]"
  },
  {
    name: "Carian",
    astral: "\uD800[\uDEA0-\uDED0]"
  },
  {
    name: "Caucasian_Albanian",
    astral: "\uD801[\uDD30-\uDD63\uDD6F]"
  },
  {
    name: "Chakma",
    astral: "\uD804[\uDD00-\uDD34\uDD36-\uDD47]"
  },
  {
    name: "Cham",
    bmp: "ꨀ-ꨶꩀ-ꩍ꩐-꩙꩜-꩟"
  },
  {
    name: "Cherokee",
    bmp: "Ꭰ-Ᏽᏸ-ᏽꭰ-ꮿ"
  },
  {
    name: "Chorasmian",
    astral: "\uD803[\uDFB0-\uDFCB]"
  },
  {
    name: "Common",
    bmp: "\0-@\\[-`\\{-©«-¹»-¿×÷ʹ-˟˥-˩ˬ-˿ʹ;΅·؅،؛؟ـ۝࣢।॥฿࿕-࿘჻᛫-᛭᜵᜶᠂᠃᠅᳓᳡ᳩ-ᳬᳮ-ᳳᳵ-᳷ᳺ -​‎-⁤⁦-⁰⁴-⁾₀-₎₠-⃀℀-℥℧-℩ℬ-ℱℳ-⅍⅏-⅟↉-↋←-␦⑀-⑊①-⟿⤀-⭳⭶-⮕⮗-⯿⸀-⹝⿰-⿻　-〄〆〈-〠〰-〷〼-〿゛゜゠・ー㆐-㆟㇀-㇣㈠-㉟㉿-㋏㋿㍘-㏿䷀-䷿꜀-꜡ꞈ-꞊꠰-꠹꤮ꧏ꭛꭪꭫﴾﴿︐-︙︰-﹒﹔-﹦﹨-﹫\uFEFF！-＠［-｀｛-･ｰﾞﾟ￠-￦￨-￮￹-�",
    astral: "\uD800[\uDD00-\uDD02\uDD07-\uDD33\uDD37-\uDD3F\uDD90-\uDD9C\uDDD0-\uDDFC\uDEE1-\uDEFB]|\uD82F[\uDCA0-\uDCA3]|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD66\uDD6A-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDEE0-\uDEF3\uDF00-\uDF56\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDFCB\uDFCE-\uDFFF]|\uD83B[\uDC71-\uDCB4\uDD01-\uDD3D]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD00-\uDDAD\uDDE6-\uDDFF\uDE01\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDD-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7C\uDE80-\uDE86\uDE90-\uDEAC\uDEB0-\uDEBA\uDEC0-\uDEC5\uDED0-\uDED9\uDEE0-\uDEE7\uDEF0-\uDEF6\uDF00-\uDF92\uDF94-\uDFCA\uDFF0-\uDFF9]|\uDB40[\uDC01\uDC20-\uDC7F]"
  },
  {
    name: "Coptic",
    bmp: "Ϣ-ϯⲀ-ⳳ⳹-⳿"
  },
  {
    name: "Cuneiform",
    astral: "\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC70-\uDC74\uDC80-\uDD43]"
  },
  {
    name: "Cypriot",
    astral: "\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F]"
  },
  {
    name: "Cypro_Minoan",
    astral: "\uD80B[\uDF90-\uDFF2]"
  },
  {
    name: "Cyrillic",
    bmp: "Ѐ-҄҇-ԯᲀ-ᲈᴫᵸⷠ-ⷿꙀ-ꚟ︮︯"
  },
  {
    name: "Deseret",
    astral: "\uD801[\uDC00-\uDC4F]"
  },
  {
    name: "Devanagari",
    bmp: "ऀ-ॐॕ-ॣ०-ॿ꣠-ꣿ"
  },
  {
    name: "Dives_Akuru",
    astral: "\uD806[\uDD00-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B-\uDD46\uDD50-\uDD59]"
  },
  {
    name: "Dogra",
    astral: "\uD806[\uDC00-\uDC3B]"
  },
  {
    name: "Duployan",
    astral: "\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9C-\uDC9F]"
  },
  {
    name: "Egyptian_Hieroglyphs",
    astral: "\uD80C[\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E\uDC30-\uDC38]"
  },
  {
    name: "Elbasan",
    astral: "\uD801[\uDD00-\uDD27]"
  },
  {
    name: "Elymaic",
    astral: "\uD803[\uDFE0-\uDFF6]"
  },
  {
    name: "Ethiopic",
    bmp: "ሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፝-፼ᎀ-᎙ⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮ",
    astral: "\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]"
  },
  {
    name: "Georgian",
    bmp: "Ⴀ-ჅჇჍა-ჺჼ-ჿᲐ-ᲺᲽ-Ჿⴀ-ⴥⴧⴭ"
  },
  {
    name: "Glagolitic",
    bmp: "Ⰰ-ⱟ",
    astral: "\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]"
  },
  {
    name: "Gothic",
    astral: "\uD800[\uDF30-\uDF4A]"
  },
  {
    name: "Grantha",
    astral: "\uD804[\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]"
  },
  {
    name: "Greek",
    bmp: "Ͱ-ͳ͵-ͷͺ-ͽͿ΄ΆΈ-ΊΌΎ-ΡΣ-ϡϰ-Ͽᴦ-ᴪᵝ-ᵡᵦ-ᵪᶿἀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ῄῆ-ΐῖ-Ί῝-`ῲ-ῴῶ-῾Ωꭥ",
    astral: "\uD800[\uDD40-\uDD8E\uDDA0]|\uD834[\uDE00-\uDE45]"
  },
  {
    name: "Gujarati",
    bmp: "ઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હ઼-ૅે-ૉો-્ૐૠ-ૣ૦-૱ૹ-૿"
  },
  {
    name: "Gunjala_Gondi",
    astral: "\uD807[\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9]"
  },
  {
    name: "Gurmukhi",
    bmp: "ਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹ਼ਾ-ੂੇੈੋ-੍ੑਖ਼-ੜਫ਼੦-੶"
  },
  {
    name: "Han",
    bmp: "⺀-⺙⺛-⻳⼀-⿕々〇〡-〩〸-〻㐀-䶿一-鿿豈-舘並-龎",
    astral: "\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]"
  },
  {
    name: "Hangul",
    bmp: "ᄀ-ᇿ〮〯ㄱ-ㆎ㈀-㈞㉠-㉾ꥠ-ꥼ가-힣ힰ-ퟆퟋ-ퟻﾠ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ"
  },
  {
    name: "Hanifi_Rohingya",
    astral: "\uD803[\uDD00-\uDD27\uDD30-\uDD39]"
  },
  {
    name: "Hanunoo",
    bmp: "ᜠ-᜴"
  },
  {
    name: "Hatran",
    astral: "\uD802[\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDCFF]"
  },
  {
    name: "Hebrew",
    bmp: "֑-ׇא-תׯ-״יִ-זּטּ-לּמּנּסּףּפּצּ-ﭏ"
  },
  {
    name: "Hiragana",
    bmp: "ぁ-ゖゝ-ゟ",
    astral: "\uD82C[\uDC01-\uDD1F\uDD50-\uDD52]|🈀"
  },
  {
    name: "Imperial_Aramaic",
    astral: "\uD802[\uDC40-\uDC55\uDC57-\uDC5F]"
  },
  {
    name: "Inherited",
    bmp: "̀-ًͯ҅҆-ٰٕ॑-॔᪰-ᫎ᳐-᳔᳒-᳢᳠-᳨᳭᳴᳸᳹᷀-᷿‌‍⃐-〪⃰-゙゚〭︀-️︠-︭",
    astral: "\uD800[\uDDFD\uDEE0]|𑌻|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD67-\uDD69\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD]|\uDB40[\uDD00-\uDDEF]"
  },
  {
    name: "Inscriptional_Pahlavi",
    astral: "\uD802[\uDF60-\uDF72\uDF78-\uDF7F]"
  },
  {
    name: "Inscriptional_Parthian",
    astral: "\uD802[\uDF40-\uDF55\uDF58-\uDF5F]"
  },
  {
    name: "Javanese",
    bmp: "ꦀ-꧍꧐-꧙꧞꧟"
  },
  {
    name: "Kaithi",
    astral: "\uD804[\uDC80-\uDCC2\uDCCD]"
  },
  {
    name: "Kannada",
    bmp: "ಀ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ಼-ೄೆ-ೈೊ-್ೕೖೝೞೠ-ೣ೦-೯ೱೲ"
  },
  {
    name: "Katakana",
    bmp: "ァ-ヺヽ-ヿㇰ-ㇿ㋐-㋾㌀-㍗ｦ-ｯｱ-ﾝ",
    astral: "\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00\uDD20-\uDD22\uDD64-\uDD67]"
  },
  {
    name: "Kayah_Li",
    bmp: "꤀-꤭꤯"
  },
  {
    name: "Kharoshthi",
    astral: "\uD802[\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F-\uDE48\uDE50-\uDE58]"
  },
  {
    name: "Khitan_Small_Script",
    astral: "𖿤|\uD822[\uDF00-\uDFFF]|\uD823[\uDC00-\uDCD5]"
  },
  {
    name: "Khmer",
    bmp: "ក-៝០-៩៰-៹᧠-᧿"
  },
  {
    name: "Khojki",
    astral: "\uD804[\uDE00-\uDE11\uDE13-\uDE3E]"
  },
  {
    name: "Khudawadi",
    astral: "\uD804[\uDEB0-\uDEEA\uDEF0-\uDEF9]"
  },
  {
    name: "Lao",
    bmp: "ກຂຄຆ-ຊຌ-ຣລວ-ຽເ-ໄໆ່-ໍ໐-໙ໜ-ໟ"
  },
  {
    name: "Latin",
    bmp: "A-Za-zªºÀ-ÖØ-öø-ʸˠ-ˤᴀ-ᴥᴬ-ᵜᵢ-ᵥᵫ-ᵷᵹ-ᶾḀ-ỿⁱⁿₐ-ₜKÅℲⅎⅠ-ↈⱠ-ⱿꜢ-ꞇꞋ-ꟊꟐꟑꟓꟕ-ꟙꟲ-ꟿꬰ-ꭚꭜ-ꭤꭦ-ꭩﬀ-ﬆＡ-Ｚａ-ｚ",
    astral: "\uD801[\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD837[\uDF00-\uDF1E]"
  },
  {
    name: "Lepcha",
    bmp: "ᰀ-᰷᰻-᱉ᱍ-ᱏ"
  },
  {
    name: "Limbu",
    bmp: "ᤀ-ᤞᤠ-ᤫᤰ-᤻᥀᥄-᥏"
  },
  {
    name: "Linear_A",
    astral: "\uD801[\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]"
  },
  {
    name: "Linear_B",
    astral: "\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA]"
  },
  {
    name: "Lisu",
    bmp: "ꓐ-꓿",
    astral: "𑾰"
  },
  {
    name: "Lycian",
    astral: "\uD800[\uDE80-\uDE9C]"
  },
  {
    name: "Lydian",
    astral: "\uD802[\uDD20-\uDD39\uDD3F]"
  },
  {
    name: "Mahajani",
    astral: "\uD804[\uDD50-\uDD76]"
  },
  {
    name: "Makasar",
    astral: "\uD807[\uDEE0-\uDEF8]"
  },
  {
    name: "Malayalam",
    bmp: "ഀ-ഌഎ-ഐഒ-ൄെ-ൈൊ-൏ൔ-ൣ൦-ൿ"
  },
  {
    name: "Mandaic",
    bmp: "ࡀ-࡛࡞"
  },
  {
    name: "Manichaean",
    astral: "\uD802[\uDEC0-\uDEE6\uDEEB-\uDEF6]"
  },
  {
    name: "Marchen",
    astral: "\uD807[\uDC70-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]"
  },
  {
    name: "Masaram_Gondi",
    astral: "\uD807[\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]"
  },
  {
    name: "Medefaidrin",
    astral: "\uD81B[\uDE40-\uDE9A]"
  },
  {
    name: "Meetei_Mayek",
    bmp: "ꫠ-꫶ꯀ-꯭꯰-꯹"
  },
  {
    name: "Mende_Kikakui",
    astral: "\uD83A[\uDC00-\uDCC4\uDCC7-\uDCD6]"
  },
  {
    name: "Meroitic_Cursive",
    astral: "\uD802[\uDDA0-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDDFF]"
  },
  {
    name: "Meroitic_Hieroglyphs",
    astral: "\uD802[\uDD80-\uDD9F]"
  },
  {
    name: "Miao",
    astral: "\uD81B[\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F]"
  },
  {
    name: "Modi",
    astral: "\uD805[\uDE00-\uDE44\uDE50-\uDE59]"
  },
  {
    name: "Mongolian",
    bmp: "᠀᠁᠄᠆-᠙ᠠ-ᡸᢀ-ᢪ",
    astral: "\uD805[\uDE60-\uDE6C]"
  },
  {
    name: "Mro",
    astral: "\uD81A[\uDE40-\uDE5E\uDE60-\uDE69\uDE6E\uDE6F]"
  },
  {
    name: "Multani",
    astral: "\uD804[\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA9]"
  },
  {
    name: "Myanmar",
    bmp: "က-႟ꧠ-ꧾꩠ-ꩿ"
  },
  {
    name: "Nabataean",
    astral: "\uD802[\uDC80-\uDC9E\uDCA7-\uDCAF]"
  },
  {
    name: "Nandinagari",
    astral: "\uD806[\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE4]"
  },
  {
    name: "New_Tai_Lue",
    bmp: "ᦀ-ᦫᦰ-ᧉ᧐-᧚᧞᧟"
  },
  {
    name: "Newa",
    astral: "\uD805[\uDC00-\uDC5B\uDC5D-\uDC61]"
  },
  {
    name: "Nko",
    bmp: "߀-ߺ߽-߿"
  },
  {
    name: "Nushu",
    astral: "𖿡|\uD82C[\uDD70-\uDEFB]"
  },
  {
    name: "Nyiakeng_Puachue_Hmong",
    astral: "\uD838[\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDD4F]"
  },
  {
    name: "Ogham",
    bmp: " -᚜"
  },
  {
    name: "Ol_Chiki",
    bmp: "᱐-᱿"
  },
  {
    name: "Old_Hungarian",
    astral: "\uD803[\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDCFF]"
  },
  {
    name: "Old_Italic",
    astral: "\uD800[\uDF00-\uDF23\uDF2D-\uDF2F]"
  },
  {
    name: "Old_North_Arabian",
    astral: "\uD802[\uDE80-\uDE9F]"
  },
  {
    name: "Old_Permic",
    astral: "\uD800[\uDF50-\uDF7A]"
  },
  {
    name: "Old_Persian",
    astral: "\uD800[\uDFA0-\uDFC3\uDFC8-\uDFD5]"
  },
  {
    name: "Old_Sogdian",
    astral: "\uD803[\uDF00-\uDF27]"
  },
  {
    name: "Old_South_Arabian",
    astral: "\uD802[\uDE60-\uDE7F]"
  },
  {
    name: "Old_Turkic",
    astral: "\uD803[\uDC00-\uDC48]"
  },
  {
    name: "Old_Uyghur",
    astral: "\uD803[\uDF70-\uDF89]"
  },
  {
    name: "Oriya",
    bmp: "ଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହ଼-ୄେୈୋ-୍୕-ୗଡ଼ଢ଼ୟ-ୣ୦-୷"
  },
  {
    name: "Osage",
    astral: "\uD801[\uDCB0-\uDCD3\uDCD8-\uDCFB]"
  },
  {
    name: "Osmanya",
    astral: "\uD801[\uDC80-\uDC9D\uDCA0-\uDCA9]"
  },
  {
    name: "Pahawh_Hmong",
    astral: "\uD81A[\uDF00-\uDF45\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]"
  },
  {
    name: "Palmyrene",
    astral: "\uD802[\uDC60-\uDC7F]"
  },
  {
    name: "Pau_Cin_Hau",
    astral: "\uD806[\uDEC0-\uDEF8]"
  },
  {
    name: "Phags_Pa",
    bmp: "ꡀ-꡷"
  },
  {
    name: "Phoenician",
    astral: "\uD802[\uDD00-\uDD1B\uDD1F]"
  },
  {
    name: "Psalter_Pahlavi",
    astral: "\uD802[\uDF80-\uDF91\uDF99-\uDF9C\uDFA9-\uDFAF]"
  },
  {
    name: "Rejang",
    bmp: "ꤰ-꥓꥟"
  },
  {
    name: "Runic",
    bmp: "ᚠ-ᛪᛮ-ᛸ"
  },
  {
    name: "Samaritan",
    bmp: "ࠀ-࠭࠰-࠾"
  },
  {
    name: "Saurashtra",
    bmp: "ꢀ-ꣅ꣎-꣙"
  },
  {
    name: "Sharada",
    astral: "\uD804[\uDD80-\uDDDF]"
  },
  {
    name: "Shavian",
    astral: "\uD801[\uDC50-\uDC7F]"
  },
  {
    name: "Siddham",
    astral: "\uD805[\uDD80-\uDDB5\uDDB8-\uDDDD]"
  },
  {
    name: "SignWriting",
    astral: "\uD836[\uDC00-\uDE8B\uDE9B-\uDE9F\uDEA1-\uDEAF]"
  },
  {
    name: "Sinhala",
    bmp: "ඁ-ඃඅ-ඖක-නඳ-රලව-ෆ්ා-ුූෘ-ෟ෦-෯ෲ-෴",
    astral: "\uD804[\uDDE1-\uDDF4]"
  },
  {
    name: "Sogdian",
    astral: "\uD803[\uDF30-\uDF59]"
  },
  {
    name: "Sora_Sompeng",
    astral: "\uD804[\uDCD0-\uDCE8\uDCF0-\uDCF9]"
  },
  {
    name: "Soyombo",
    astral: "\uD806[\uDE50-\uDEA2]"
  },
  {
    name: "Sundanese",
    bmp: "ᮀ-ᮿ᳀-᳇"
  },
  {
    name: "Syloti_Nagri",
    bmp: "ꠀ-꠬"
  },
  {
    name: "Syriac",
    bmp: "܀-܍܏-݊ݍ-ݏࡠ-ࡪ"
  },
  {
    name: "Tagalog",
    bmp: "ᜀ-᜕ᜟ"
  },
  {
    name: "Tagbanwa",
    bmp: "ᝠ-ᝬᝮ-ᝰᝲᝳ"
  },
  {
    name: "Tai_Le",
    bmp: "ᥐ-ᥭᥰ-ᥴ"
  },
  {
    name: "Tai_Tham",
    bmp: "ᨠ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪠-᪭"
  },
  {
    name: "Tai_Viet",
    bmp: "ꪀ-ꫂꫛ-꫟"
  },
  {
    name: "Takri",
    astral: "\uD805[\uDE80-\uDEB9\uDEC0-\uDEC9]"
  },
  {
    name: "Tamil",
    bmp: "ஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-்ௐௗ௦-௺",
    astral: "\uD807[\uDFC0-\uDFF1\uDFFF]"
  },
  {
    name: "Tangsa",
    astral: "\uD81A[\uDE70-\uDEBE\uDEC0-\uDEC9]"
  },
  {
    name: "Tangut",
    astral: "𖿠|[\uD81C-\uD820][\uDC00-\uDFFF]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEFF]|\uD823[\uDD00-\uDD08]"
  },
  {
    name: "Telugu",
    bmp: "ఀ-ఌఎ-ఐఒ-నప-హ఼-ౄె-ైొ-్ౕౖౘ-ౚౝౠ-ౣ౦-౯౷-౿"
  },
  {
    name: "Thaana",
    bmp: "ހ-ޱ"
  },
  {
    name: "Thai",
    bmp: "ก-ฺเ-๛"
  },
  {
    name: "Tibetan",
    bmp: "ༀ-ཇཉ-ཬཱ-ྗྙ-ྼ྾-࿌࿎-࿔࿙࿚"
  },
  {
    name: "Tifinagh",
    bmp: "ⴰ-ⵧⵯ⵰⵿"
  },
  {
    name: "Tirhuta",
    astral: "\uD805[\uDC80-\uDCC7\uDCD0-\uDCD9]"
  },
  {
    name: "Toto",
    astral: "\uD838[\uDE90-\uDEAE]"
  },
  {
    name: "Ugaritic",
    astral: "\uD800[\uDF80-\uDF9D\uDF9F]"
  },
  {
    name: "Vai",
    bmp: "ꔀ-ꘫ"
  },
  {
    name: "Vithkuqi",
    astral: "\uD801[\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC]"
  },
  {
    name: "Wancho",
    astral: "\uD838[\uDEC0-\uDEF9\uDEFF]"
  },
  {
    name: "Warang_Citi",
    astral: "\uD806[\uDCA0-\uDCF2\uDCFF]"
  },
  {
    name: "Yezidi",
    astral: "\uD803[\uDE80-\uDEA9\uDEAB-\uDEAD\uDEB0\uDEB1]"
  },
  {
    name: "Yi",
    bmp: "ꀀ-ꒌ꒐-꓆"
  },
  {
    name: "Zanabazar_Square",
    astral: "\uD806[\uDE00-\uDE47]"
  }
];
const Ml = /* @__PURE__ */ wu(Pl);
/*!
 * XRegExp Unicode Scripts 5.1.1
 * <xregexp.com>
 * Steven Levithan (c) 2010-present MIT License
 * Unicode data by Mathias Bynens <mathiasbynens.be>
 */
const kl = (u) => {
  if (!u.addUnicodeData)
    throw new ReferenceError("Unicode Base must be loaded before Unicode Scripts");
  u.addUnicodeData(Ml, "Script");
};
_l(y);
yl(y);
bl(y);
xl(y);
Sl(y);
kl(y);
function au(u) {
  "@babel/helpers - typeof";
  return au = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(D) {
    return typeof D;
  } : function(D) {
    return D && typeof Symbol == "function" && D.constructor === Symbol && D !== Symbol.prototype ? "symbol" : typeof D;
  }, au(u);
}
function dr(u, D) {
  if (!(u instanceof D))
    throw new TypeError("Cannot call a class as a function");
}
function ot(u, D) {
  for (var e = 0; e < D.length; e++) {
    var t = D[e];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(u, t.key, t);
  }
}
function Br(u, D, e) {
  return D && ot(u.prototype, D), e && ot(u, e), Object.defineProperty(u, "prototype", {
    writable: !1
  }), u;
}
function Il(u, D) {
  if (typeof D != "function" && D !== null)
    throw new TypeError("Super expression must either be null or a function");
  u.prototype = Object.create(D && D.prototype, {
    constructor: {
      value: u,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(u, "prototype", {
    writable: !1
  }), D && FD(u, D);
}
function aD(u) {
  return aD = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
    return e.__proto__ || Object.getPrototypeOf(e);
  }, aD(u);
}
function FD(u, D) {
  return FD = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, r) {
    return t.__proto__ = r, t;
  }, FD(u, D);
}
function pr() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ju(u, D, e) {
  return pr() ? Ju = Reflect.construct.bind() : Ju = function(r, n, a) {
    var o = [null];
    o.push.apply(o, n);
    var i = Function.bind.apply(r, o), F = new i();
    return a && FD(F, a.prototype), F;
  }, Ju.apply(null, arguments);
}
function Nl(u) {
  return Function.toString.call(u).indexOf("[native code]") !== -1;
}
function Le(u) {
  var D = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Le = function(t) {
    if (t === null || !Nl(t))
      return t;
    if (typeof t != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof D < "u") {
      if (D.has(t))
        return D.get(t);
      D.set(t, r);
    }
    function r() {
      return Ju(t, arguments, aD(this).constructor);
    }
    return r.prototype = Object.create(t.prototype, {
      constructor: {
        value: r,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), FD(r, t);
  }, Le(u);
}
function zl(u) {
  if (u === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return u;
}
function jl(u, D) {
  if (D && (typeof D == "object" || typeof D == "function"))
    return D;
  if (D !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return zl(u);
}
function Ul(u) {
  var D = pr();
  return function() {
    var t = aD(u), r;
    if (D) {
      var n = aD(this).constructor;
      r = Reflect.construct(t, arguments, n);
    } else
      r = t.apply(this, arguments);
    return jl(this, r);
  };
}
function Rl(u) {
  return Ll(u) || Yl(u) || hr(u) || Wl();
}
function Ll(u) {
  if (Array.isArray(u))
    return Ye(u);
}
function Yl(u) {
  if (typeof Symbol < "u" && u[Symbol.iterator] != null || u["@@iterator"] != null)
    return Array.from(u);
}
function hr(u, D) {
  if (u) {
    if (typeof u == "string")
      return Ye(u, D);
    var e = Object.prototype.toString.call(u).slice(8, -1);
    if (e === "Object" && u.constructor && (e = u.constructor.name), e === "Map" || e === "Set")
      return Array.from(u);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
      return Ye(u, D);
  }
}
function Ye(u, D) {
  (D == null || D > u.length) && (D = u.length);
  for (var e = 0, t = new Array(D); e < D; e++)
    t[e] = u[e];
  return t;
}
function Wl() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Hl(u, D) {
  var e = typeof Symbol < "u" && u[Symbol.iterator] || u["@@iterator"];
  if (!e) {
    if (Array.isArray(u) || (e = hr(u)) || D && u && typeof u.length == "number") {
      e && (u = e);
      var t = 0, r = function() {
      };
      return {
        s: r,
        n: function() {
          return t >= u.length ? {
            done: !0
          } : {
            done: !1,
            value: u[t++]
          };
        },
        e: function(i) {
          throw i;
        },
        f: r
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var n = !0, a = !1, o;
  return {
    s: function() {
      e = e.call(u);
    },
    n: function() {
      var i = e.next();
      return n = i.done, i;
    },
    e: function(i) {
      a = !0, o = i;
    },
    f: function() {
      try {
        !n && e.return != null && e.return();
      } finally {
        if (a)
          throw o;
      }
    }
  };
}
var V = Object.prototype.hasOwnProperty;
function pu(u, D) {
  return u = u.slice(), u.push(D), u;
}
function We(u, D) {
  return D = D.slice(), D.unshift(u), D;
}
var Gl = /* @__PURE__ */ function(u) {
  Il(e, u);
  var D = Ul(e);
  function e(t) {
    var r;
    return dr(this, e), r = D.call(this, 'JSONPath should not be called with "new" (it prevents return of (unwrapped) scalar values)'), r.avoidNew = !0, r.value = t, r.name = "NewError", r;
  }
  return Br(e);
}(/* @__PURE__ */ Le(Error));
function S(u, D, e, t, r) {
  if (!(this instanceof S))
    try {
      return new S(u, D, e, t, r);
    } catch (i) {
      if (!i.avoidNew)
        throw i;
      return i.value;
    }
  typeof u == "string" && (r = t, t = e, e = D, D = u, u = null);
  var n = u && au(u) === "object";
  if (u = u || {}, this.json = u.json || e, this.path = u.path || D, this.resultType = u.resultType || "value", this.flatten = u.flatten || !1, this.wrap = V.call(u, "wrap") ? u.wrap : !0, this.sandbox = u.sandbox || {}, this.preventEval = u.preventEval || !1, this.parent = u.parent || null, this.parentProperty = u.parentProperty || null, this.callback = u.callback || t || null, this.otherTypeCallback = u.otherTypeCallback || r || function() {
    throw new TypeError("You must supply an otherTypeCallback callback option with the @other() operator.");
  }, u.autostart !== !1) {
    var a = {
      path: n ? u.path : D
    };
    n ? "json" in u && (a.json = u.json) : a.json = e;
    var o = this.evaluate(a);
    if (!o || au(o) !== "object")
      throw new Gl(o);
    return o;
  }
}
S.prototype.evaluate = function(u, D, e, t) {
  var r = this, n = this.parent, a = this.parentProperty, o = this.flatten, i = this.wrap;
  if (this.currResultType = this.resultType, this.currPreventEval = this.preventEval, this.currSandbox = this.sandbox, e = e || this.callback, this.currOtherTypeCallback = t || this.otherTypeCallback, D = D || this.json, u = u || this.path, u && au(u) === "object" && !Array.isArray(u)) {
    if (!u.path && u.path !== "")
      throw new TypeError('You must supply a "path" property when providing an object argument to JSONPath.evaluate().');
    if (!V.call(u, "json"))
      throw new TypeError('You must supply a "json" property when providing an object argument to JSONPath.evaluate().');
    var F = u;
    D = F.json, o = V.call(u, "flatten") ? u.flatten : o, this.currResultType = V.call(u, "resultType") ? u.resultType : this.currResultType, this.currSandbox = V.call(u, "sandbox") ? u.sandbox : this.currSandbox, i = V.call(u, "wrap") ? u.wrap : i, this.currPreventEval = V.call(u, "preventEval") ? u.preventEval : this.currPreventEval, e = V.call(u, "callback") ? u.callback : e, this.currOtherTypeCallback = V.call(u, "otherTypeCallback") ? u.otherTypeCallback : this.currOtherTypeCallback, n = V.call(u, "parent") ? u.parent : n, a = V.call(u, "parentProperty") ? u.parentProperty : a, u = u.path;
  }
  if (n = n || null, a = a || null, Array.isArray(u) && (u = S.toPathString(u)), !(!u && u !== "" || !D)) {
    var s = S.toPathArray(u);
    s[0] === "$" && s.length > 1 && s.shift(), this._hasParentSelector = null;
    var C = this._trace(s, D, ["$"], n, a, e).filter(function(E) {
      return E && !E.isParentSelector;
    });
    return C.length ? !i && C.length === 1 && !C[0].hasArrExpr ? this._getPreferredOutput(C[0]) : C.reduce(function(E, f) {
      var l = r._getPreferredOutput(f);
      return o && Array.isArray(l) ? E = E.concat(l) : E.push(l), E;
    }, []) : i ? [] : void 0;
  }
};
S.prototype._getPreferredOutput = function(u) {
  var D = this.currResultType;
  switch (D) {
    case "all": {
      var e = Array.isArray(u.path) ? u.path : S.toPathArray(u.path);
      return u.pointer = S.toPointer(e), u.path = typeof u.path == "string" ? u.path : S.toPathString(u.path), u;
    }
    case "value":
    case "parent":
    case "parentProperty":
      return u[D];
    case "path":
      return S.toPathString(u[D]);
    case "pointer":
      return S.toPointer(u.path);
    default:
      throw new TypeError("Unknown result type");
  }
};
S.prototype._handleCallback = function(u, D, e) {
  if (D) {
    var t = this._getPreferredOutput(u);
    u.path = typeof u.path == "string" ? u.path : S.toPathString(u.path), D(t, e, u);
  }
};
S.prototype._trace = function(u, D, e, t, r, n, a, o) {
  var i = this, F;
  if (!u.length)
    return F = {
      path: e,
      value: D,
      parent: t,
      parentProperty: r,
      hasArrExpr: a
    }, this._handleCallback(F, n, "value"), F;
  var s = u[0], C = u.slice(1), E = [];
  function f(T) {
    Array.isArray(T) ? T.forEach(function(N) {
      E.push(N);
    }) : E.push(T);
  }
  if ((typeof s != "string" || o) && D && V.call(D, s))
    f(this._trace(C, D[s], pu(e, s), D, s, n, a));
  else if (s === "*")
    this._walk(D, function(T) {
      f(i._trace(C, D[T], pu(e, T), D, T, n, !0, !0));
    });
  else if (s === "..")
    f(this._trace(C, D, e, t, r, n, a)), this._walk(D, function(T) {
      au(D[T]) === "object" && f(i._trace(u.slice(), D[T], pu(e, T), D, T, n, !0));
    });
  else {
    if (s === "^")
      return this._hasParentSelector = !0, {
        path: e.slice(0, -1),
        expr: C,
        isParentSelector: !0
      };
    if (s === "~")
      return F = {
        path: pu(e, s),
        value: r,
        parent: t,
        parentProperty: null
      }, this._handleCallback(F, n, "property"), F;
    if (s === "$")
      f(this._trace(C, D, e, null, null, n, a));
    else if (/^(\x2D?[0-9]*):(\x2D?[0-9]*):?([0-9]*)$/.test(s))
      f(this._slice(s, C, D, e, t, r, n));
    else if (s.indexOf("?(") === 0) {
      if (this.currPreventEval)
        throw new Error("Eval [?(expr)] prevented in JSONPath expression.");
      var l = s.replace(/^\?\(((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?)\)$/, "$1");
      this._walk(D, function(T) {
        i._eval(l, D[T], T, e, t, r) && f(i._trace(C, D[T], pu(e, T), D, T, n, !0));
      });
    } else if (s[0] === "(") {
      if (this.currPreventEval)
        throw new Error("Eval [(expr)] prevented in JSONPath expression.");
      f(this._trace(We(this._eval(s, D, e[e.length - 1], e.slice(0, -1), t, r), C), D, e, t, r, n, a));
    } else if (s[0] === "@") {
      var m = !1, A = s.slice(1, -2);
      switch (A) {
        case "scalar":
          (!D || !["object", "function"].includes(au(D))) && (m = !0);
          break;
        case "boolean":
        case "string":
        case "undefined":
        case "function":
          au(D) === A && (m = !0);
          break;
        case "integer":
          Number.isFinite(D) && !(D % 1) && (m = !0);
          break;
        case "number":
          Number.isFinite(D) && (m = !0);
          break;
        case "nonFinite":
          typeof D == "number" && !Number.isFinite(D) && (m = !0);
          break;
        case "object":
          D && au(D) === A && (m = !0);
          break;
        case "array":
          Array.isArray(D) && (m = !0);
          break;
        case "other":
          m = this.currOtherTypeCallback(D, e, t, r);
          break;
        case "null":
          D === null && (m = !0);
          break;
        default:
          throw new TypeError("Unknown value type " + A);
      }
      if (m)
        return F = {
          path: e,
          value: D,
          parent: t,
          parentProperty: r
        }, this._handleCallback(F, n, "value"), F;
    } else if (s[0] === "`" && D && V.call(D, s.slice(1))) {
      var c = s.slice(1);
      f(this._trace(C, D[c], pu(e, c), D, c, n, a, !0));
    } else if (s.includes(",")) {
      var h = s.split(","), B = Hl(h), d;
      try {
        for (B.s(); !(d = B.n()).done; ) {
          var g = d.value;
          f(this._trace(We(g, C), D, e, t, r, n, !0));
        }
      } catch (T) {
        B.e(T);
      } finally {
        B.f();
      }
    } else
      !o && D && V.call(D, s) && f(this._trace(C, D[s], pu(e, s), D, s, n, a, !0));
  }
  if (this._hasParentSelector)
    for (var b = 0; b < E.length; b++) {
      var x = E[b];
      if (x && x.isParentSelector) {
        var Y = this._trace(x.expr, D, x.path, t, r, n, a);
        if (Array.isArray(Y)) {
          E[b] = Y[0];
          for (var X = Y.length, R = 1; R < X; R++)
            b++, E.splice(b, 0, Y[R]);
        } else
          E[b] = Y;
      }
    }
  return E;
};
S.prototype._walk = function(u, D) {
  if (Array.isArray(u))
    for (var e = u.length, t = 0; t < e; t++)
      D(t);
  else
    u && au(u) === "object" && Object.keys(u).forEach(function(r) {
      D(r);
    });
};
S.prototype._slice = function(u, D, e, t, r, n, a) {
  if (Array.isArray(e)) {
    var o = e.length, i = u.split(":"), F = i[2] && Number.parseInt(i[2]) || 1, s = i[0] && Number.parseInt(i[0]) || 0, C = i[1] && Number.parseInt(i[1]) || o;
    s = s < 0 ? Math.max(0, s + o) : Math.min(o, s), C = C < 0 ? Math.max(0, C + o) : Math.min(o, C);
    for (var E = [], f = s; f < C; f += F) {
      var l = this._trace(We(f, D), e, t, r, n, a, !0);
      l.forEach(function(m) {
        E.push(m);
      });
    }
    return E;
  }
};
S.prototype._eval = function(u, D, e, t, r, n) {
  this.currSandbox._$_parentProperty = n, this.currSandbox._$_parent = r, this.currSandbox._$_property = e, this.currSandbox._$_root = this.json, this.currSandbox._$_v = D;
  var a = u.includes("@path");
  a && (this.currSandbox._$_path = S.toPathString(t.concat([e])));
  var o = "script:" + u;
  if (!S.cache[o]) {
    var i = u.replace(/@parentProperty/g, "_$_parentProperty").replace(/@parent/g, "_$_parent").replace(/@property/g, "_$_property").replace(/@root/g, "_$_root").replace(/@([\t-\r \)\.\[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])/g, "_$_v$1");
    a && (i = i.replace(/@path/g, "_$_path")), S.cache[o] = new this.vm.Script(i);
  }
  try {
    return S.cache[o].runInNewContext(this.currSandbox);
  } catch (F) {
    throw new Error("jsonPath: " + F.message + ": " + u);
  }
};
S.cache = {};
S.toPathString = function(u) {
  for (var D = u, e = D.length, t = "$", r = 1; r < e; r++)
    /^(~|\^|@(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\(\))$/.test(D[r]) || (t += /^[\*0-9]+$/.test(D[r]) ? "[" + D[r] + "]" : "['" + D[r] + "']");
  return t;
};
S.toPointer = function(u) {
  for (var D = u, e = D.length, t = "", r = 1; r < e; r++)
    /^(~|\^|@(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\(\))$/.test(D[r]) || (t += "/" + D[r].toString().replace(/~/g, "~0").replace(/\//g, "~1"));
  return t;
};
S.toPathArray = function(u) {
  var D = S.cache;
  if (D[u])
    return D[u].concat();
  var e = [], t = u.replace(/@(?:null|boolean|number|string|integer|undefined|nonFinite|scalar|array|object|function|other)\(\)/g, ";$&;").replace(/['\[](\??\((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\))['\]]/g, function(n, a) {
    return "[#" + (e.push(a) - 1) + "]";
  }).replace(/\[["']((?:(?!['\]])[\s\S])*)["']\]/g, function(n, a) {
    return "['" + a.replace(/\./g, "%@%").replace(/~/g, "%%@@%%") + "']";
  }).replace(/~/g, ";~;").replace(/["']?\.["']?(?!(?:(?!\[)[\s\S])*\])|\[["']?/g, ";").replace(/%@%/g, ".").replace(/%%@@%%/g, "~").replace(/(?:;)?(\^+)(?:;)?/g, function(n, a) {
    return ";" + a.split("").join(";") + ";";
  }).replace(/;;;|;;/g, ";..;").replace(/;$|'?\]|'$/g, ""), r = t.split(";").map(function(n) {
    var a = n.match(/#([0-9]+)/);
    return !a || !a[1] ? n : e[a[1]];
  });
  return D[u] = r, D[u].concat();
};
var ql = function(D, e, t) {
  for (var r = D.length, n = 0; n < r; n++) {
    var a = D[n];
    t(a) && e.push(D.splice(n--, 1)[0]);
  }
}, Zl = /* @__PURE__ */ function() {
  function u(D) {
    dr(this, u), this.code = D;
  }
  return Br(u, [{
    key: "runInNewContext",
    value: function(e) {
      var t = this.code, r = Object.keys(e), n = [];
      ql(r, n, function(s) {
        return typeof e[s] == "function";
      });
      var a = r.map(function(s, C) {
        return e[s];
      }), o = n.reduce(function(s, C) {
        var E = e[C].toString();
        return /function/.test(E) || (E = "function " + E), "var " + C + "=" + E + ";" + s;
      }, "");
      t = o + t, !/(["'])use strict\1/.test(t) && !r.includes("arguments") && (t = "var arguments = undefined;" + t), t = t.replace(/;[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*$/, "");
      var i = t.lastIndexOf(";"), F = i > -1 ? t.slice(0, i + 1) + " return " + t.slice(i + 1) : " return " + t;
      return Ju(Function, r.concat([F])).apply(void 0, Rl(a));
    }
  }]), u;
}();
S.prototype.vm = {
  Script: Zl
};
const tu = (u, D) => Vu(u) || Vu(D) ? null : (typeof D == "string" && /^\$\./.test(D) ? S({
  path: D,
  json: u
}) : wt(u, D)) ?? null, mr = y.build("[^\\{\\}]*", {}, "gmx"), Vl = y.build("[^\\|\\(\\)\\{\\}: 	]+", {}, "gmx"), Ql = y.build("[^\\|\\(\\)\\{\\}]+", {}, "gmx"), Jl = y.build(
  `
    \\|[ 	]*
      ({{filter}})
      ([ 	]*:[ 	]*({{args}}))*
      ({{tailing}})
  `,
  {
    filter: Vl,
    args: Ql,
    tailing: mr
  },
  "gmx"
), Kl = y.build("[^\\:\\|\\(\\)\\{\\}\v 	]+", {}, "gmx"), Xl = y.build(
  `
    [ \\(]*[ 	]*
      ({{selector}})
    ([ 	](?=\\))*)?[ \\)]*
    ({{tailing}})
  `,
  {
    selector: Kl,
    tailing: mr
  },
  "gmx"
), it = y.build(
  `
    (\\{\\{[ 	]*
      ({{operator}})
    [ 	](?=\\})*\\}\\})
  `,
  { operator: Xl },
  "gmx"
), Nu = (u, D) => D ? y.replace(
  D,
  it,
  (...e) => {
    var o;
    const t = re(e), r = (o = y.exec((t == null ? void 0 : t.tailing) ?? "", Jl)) == null ? void 0 : o.groups, n = tu(u, t == null ? void 0 : t.selector);
    let a = n;
    try {
      if (r) {
        const F = ((r == null ? void 0 : r.args) ?? "").trim().split(/\s:\s/);
        switch (r.filter) {
          case "date": {
            const s = F != null && F[1] ? tu(u, String(F == null ? void 0 : F[1])) ?? (F == null ? void 0 : F[1]) : Intl.DateTimeFormat().resolvedOptions().timeZone;
            a = Cl(
              new Date(n),
              isNaN(ll(s)) ? Intl.DateTimeFormat().resolvedOptions().timeZone : s,
              String((F == null ? void 0 : F[0]) ?? "yyyy-MM-dd")
            );
            break;
          }
          case "number":
            a = Number(n ?? 0);
            break;
          case "json":
            a = JSON.parse(n);
            break;
          case "stringify":
            a = JSON.stringify(n);
            break;
          case "trim":
            a = n.trim();
            break;
          case "upper":
            a = n.toUpperCase();
            break;
          case "lower":
            a = n.toLowerCase();
            break;
          case "capitalize":
            a = n.replace(
              /\b\w/g,
              (s) => s.toUpperCase()
            );
            break;
          case "join":
            a = Hi(n, F == null ? void 0 : F[0]);
            break;
          case "last":
            a = re(n);
            break;
          case "flat":
            a = Ht(n);
            break;
          case "uniq":
            a = Zt(n);
            break;
          case "wrap":
            if (!(F != null && F[0]))
              break;
            a = n.map((s) => ({ [F[0]]: s }));
            break;
          default:
            break;
        }
      }
      const i = ((r == null ? void 0 : r.tailing) ?? (t == null ? void 0 : t.tailing) ?? "").replace(
        /^\)/,
        ""
      );
      i && (a = Nu({ ...u, result: a }, `{{ result${i} }}`));
    } catch (i) {
      return i;
    }
    return it.test(a) && (a = Nu(u, a)), a;
  },
  "all"
) : "", f0 = ({
  type: u,
  axises: D,
  data: e
}) => {
  const t = Nr({
    datasets: [],
    axises: {}
  }), r = {
    datasets: L(() => t.datasets),
    axises: L(() => t.axises)
  }, n = (i) => {
    var F;
    return !Array.isArray(i) || i.length === 0 ? [] : Array.isArray(i) && ((F = i[0]) != null && F.label) ? i : [
      {
        label: "Data",
        series: i
      }
    ];
  }, a = (i, F) => F.map((s) => ({
    data: s,
    ...XD(
      Zu(i).filter(([, C]) => !Vu(C)).map(([C, E]) => {
        const f = E.selector ? tu(s, E.selector) : null, l = E.accessor ? Nu(s, E.accessor) : f;
        return [
          C,
          {
            normalized: Number(
              E.type === "number" ? parseFloat(String(f)) : E.type === "date" ? new Date(Number(f)) : f
            ),
            value: l
          }
        ];
      })
    )
  })), o = (i, F, s) => {
    const C = n(s).map((l) => ({
      ...l,
      label: Nu(l, l.label ?? ""),
      series: a(F, l.series)
    })), E = C.flatMap((l) => l.series), f = XD(
      Zu(F).filter(([, l]) => !Vu(l)).map(([l, m]) => {
        const A = Zt(rD(E, `${l}.${m.type === "string" ? "value" : "normalized"}`)), c = Number(m.min === "auto" ? Zi(A) : m.min ?? 0), h = Number(
          m.max === "auto" ? qi(A) : m.max ?? A.length - (/radar|doughnut/.test(i ?? "") ? 0 : 1)
        );
        return [
          l,
          {
            ...m,
            min: c,
            max: h,
            metrics: m.type === "string" ? A.map((B, d) => ({
              normalized: d / (h - c),
              value: B
            })) : Array(O.clamp(O.ceil((h - c) / (m.step ?? 1)) + 1, 0, 1 / 0)).fill(0).map((B, d) => ({
              normalized: d / O.ceil((h - c) / (m.step ?? 1)),
              value: c + (m.step ?? 1) * d
            }))
          }
        ];
      })
    );
    return f && Zu(f).forEach(([l, m]) => {
      m.type === "string" ? C.forEach((A) => {
        A.series.forEach((c) => {
          c[l].normalized = rD(m.metrics, "value").indexOf(c[l].value) / (m.metrics.length - (/radar|doughnut/.test(i ?? "") ? 0 : 1));
        });
      }) : C.forEach((A) => {
        A.series.forEach((c) => {
          c[l].normalized = (Number(c[l].normalized ?? 0) - Number(m.min)) / (Number(m.max) - Number(m.min));
        });
      });
    }), {
      datasets: C,
      axises: f
    };
  };
  return Ct(() => {
    if (!Vu(p(e))) {
      const i = o(p(u), p(D), p(e));
      t.datasets = i.datasets, t.axises = i.axises;
    }
  }), {
    ...r
  };
}, uE = (u) => (_D("data-v-fefd0601"), u = u(), yD(), u), DE = ["cx", "cy", "r", "stroke-dashoffset", "stroke-dasharray"], eE = ["x", "y"], tE = /* @__PURE__ */ uE(() => /* @__PURE__ */ v("hr", null, null, -1)), rE = { id: "chart-content-clip" }, nE = ["cx", "cy", "r"], aE = { "clip-path": "url(#chart-content-clip)" }, FE = ["height", "width", "x", "y"], oE = /* @__PURE__ */ q({
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
  setup(u) {
    const D = u, e = ou(), { width: t, height: r } = SD(e), { axises: n, datasets: a } = f0({
      type: "doughnut",
      data: D.datasets,
      axises: D.axises
    }), o = L(
      () => O.clamp(
        O.min(t.value - D.options.offset.x, r.value - D.options.offset.y) / 2,
        0,
        1 / 0
      )
    ), i = L(() => D.options.round ? 30 : 15), F = L(() => o.value * 2 * O.PI), s = L(() => ({
      x: t.value / 2,
      y: r.value / 2
    })), C = L(
      () => a.value.map((f) => f.series.reduce((l, m) => l + m.y.normalized, 0))
    ), E = L(
      () => a.value.map((f, l) => ({
        ...f,
        series: f.series.map((m) => ({
          ...m,
          y: {
            ...m.y,
            normalized: O.clamp(
              m.y.normalized / C.value[l] - i.value / F.value,
              0,
              1
            )
          }
        })).filter((m) => m.y.normalized > i.value / F.value / 2).map((m, A, c) => ({
          ...m,
          y: {
            ...m.y,
            normalized: m.y.normalized / c.reduce((h, B) => h + B.y.normalized, 0)
          }
        })).map((m, A, c) => ({
          ...m,
          y: {
            ...m.y,
            normalized: O.clamp(
              m.y.normalized / c.reduce((h, B) => h + B.y.normalized, 0) - i.value / F.value,
              0,
              1
            )
          }
        })).map((m, A, c) => ({
          ...m,
          y: {
            ...m.y,
            offset: c.slice(0, A).reduce((h, B) => h + B.y.normalized, 0)
          }
        })).map((m, A) => ({
          ...m,
          x: {
            ...m.x,
            label: O.cos(
              O.rad(
                (m.y.offset + m.y.normalized / 2 + i.value / F.value * A) * 360 - 90
              )
            )
          },
          y: {
            ...m.y,
            label: O.sin(
              O.rad(
                (m.y.offset + m.y.normalized / 2 + i.value / F.value * A) * 360 - 90
              )
            )
          }
        }))
      }))
    );
    return (f, l) => ($(), w("div", {
      ref_key: "wrapperRef$",
      ref: e,
      class: _(f.$style["chart-container"])
    }, [
      Q(PD, {
        height: p(r),
        width: p(t)
      }, {
        path: J(() => [
          v("g", {
            class: _([f.$style["chart-group-plots"]])
          }, [
            ($(!0), w(M, null, W(p(E), (m) => ($(), w(M, {
              key: m.label
            }, [
              ($(!0), w(M, null, W(m.series, (A, c) => ($(), w("g", {
                key: `plot-${c}`,
                class: _(f.$style["chart-area"])
              }, [
                v("circle", {
                  cx: p(s).x,
                  cy: p(s).y,
                  r: p(o),
                  "stroke-dashoffset": A.y.offset * p(F) * -1 - p(i) * c + 0.25 * p(F),
                  "stroke-dasharray": `${A.y.normalized * p(F)} ${(1 - A.y.normalized) * p(F)}`,
                  class: _([
                    f.$style.behavior,
                    f.$style["chart-area"],
                    f.$style.doughnut,
                    f.$style.plot,
                    f.$style.clickable,
                    {
                      [f.$style.round]: D.options.round
                    }
                  ]),
                  "pointer-events": "visibleStroke"
                }, null, 10, DE),
                ($(), w("foreignObject", {
                  x: p(s).x + p(o) * A.x.label - 260 * +(A.x.label < 0),
                  y: p(s).y + p(o) * A.y.label - 240 * +(A.y.label < 0),
                  height: "240",
                  width: "260",
                  class: _([f.$style["chart-area"], f.$style["legend-container"]])
                }, [
                  Q(MD, {
                    class: _([f.$style["chart-area"], f.$style["legend-wrapper"]]),
                    radius: "var(--agh-ref-border-radius-500)"
                  }, {
                    default: J(() => [
                      D.options.title ? ($(), w(M, { key: 0 }, [
                        v("h1", {
                          class: _([f.$style["chart-area"], f.$style["legend-title"], f.$style.doughnut])
                        }, [
                          v("span", null, U(A.x.value), 1)
                        ], 2),
                        tE
                      ], 64)) : z("", !0),
                      ($(!0), w(M, null, W(p(n), (h, B) => ($(), w(M, { key: B }, [
                        !/(x)/.test(B) && h && A[B] ? ($(), w("div", {
                          key: 0,
                          class: _([
                            f.$style["chart-area"],
                            f.$style["legend-group"],
                            f.$style.doughnut
                          ])
                        }, [
                          v("label", {
                            class: _([f.$style["chart-area"], f.$style["legend-label"]])
                          }, U(h.label), 3),
                          v("p", {
                            class: _([f.$style["chart-area"], f.$style["legend-value"]])
                          }, U(A[B].value), 3)
                        ], 2)) : z("", !0)
                      ], 64))), 128))
                    ]),
                    _: 2
                  }, 1032, ["class", "radius"])
                ], 10, eE))
              ], 2))), 128))
            ], 64))), 128))
          ], 2),
          v("clipPath", rE, [
            v("circle", {
              cx: p(s).x,
              cy: p(s).y,
              r: p(o) - 10
            }, null, 8, nE)
          ]),
          v("g", aE, [
            ($(), w("foreignObject", {
              class: _(f.$style["chart-content-wrapper"]),
              height: p(o) * 2,
              width: p(o) * 2,
              x: p(s).x - p(o),
              y: p(s).y - p(o)
            }, [
              Ku(f.$slots, "default", {}, void 0, !0)
            ], 10, FE))
          ])
        ]),
        _: 3
      }, 8, ["height", "width"])
    ], 2));
  }
}), iE = "_behavior_pzvhi_1", sE = "_clickable_pzvhi_1", CE = "_disabled_pzvhi_4", lE = "_draggable_pzvhi_7", EE = "_loading_pzvhi_10", AE = "_path_pzvhi_24", cE = "_radar_pzvhi_29", fE = "_label_pzvhi_32", dE = "_plot_pzvhi_85", BE = "_point_pzvhi_85", pE = "_doughnut_pzvhi_96", hE = "_bg_pzvhi_102", mE = "_round_pzvhi_106", gE = "_line_pzvhi_119", vE = {
  behavior: iE,
  clickable: sE,
  disabled: CE,
  draggable: lE,
  loading: EE,
  "chart-container": "_chart-container_pzvhi_14",
  "chart-axis": "_chart-axis_pzvhi_24",
  path: AE,
  radar: cE,
  label: fE,
  "font-align--center": "_font-align--center_pzvhi_45",
  "font-align--right": "_font-align--right_pzvhi_48",
  "font-align--left": "_font-align--left_pzvhi_51",
  "box-align--center": "_box-align--center_pzvhi_54",
  "box-align--left": "_box-align--left_pzvhi_57",
  "box-align--right": "_box-align--right_pzvhi_60",
  "chart-group-plots": "_chart-group-plots_pzvhi_67",
  "chart-area": "_chart-area_pzvhi_67",
  plot: dE,
  point: BE,
  doughnut: pE,
  "legend-container": "_legend-container_pzvhi_96",
  bg: hE,
  round: mE,
  line: gE,
  "legend-wrapper": "_legend-wrapper_pzvhi_147",
  "legend-group": "_legend-group_pzvhi_158",
  "legend-value": "_legend-value_pzvhi_166",
  "legend-label": "_legend-label_pzvhi_169",
  "legend-title": "_legend-title_pzvhi_173"
}, _E = {
  $style: vE
}, tc = /* @__PURE__ */ eu(oE, [["__cssModules", _E], ["__scopeId", "data-v-fefd0601"]]), yE = (u) => (_D("data-v-9f80c889"), u = u(), yD(), u), bE = ["d"], $E = ["x", "y", "text-anchor"], wE = ["x", "y"], xE = ["d"], OE = ["cx", "cy"], TE = ["cx", "cy"], SE = ["x", "y"], PE = /* @__PURE__ */ yE(() => /* @__PURE__ */ v("hr", null, null, -1)), ME = /* @__PURE__ */ q({
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
  setup(u) {
    const D = u, e = ou(), { width: t, height: r } = SD(e), { axises: n, datasets: a } = f0({
      type: "line",
      data: D.datasets,
      axises: D.axises
    }), o = L(
      () => {
        var F, s, C, E, f, l;
        return (s = (F = n.value) == null ? void 0 : F.x) != null && s.metrics && ((E = (C = n.value) == null ? void 0 : C.y) != null && E.metrics) && r.value && r.value - D.options.offset.y > 0 && t.value && t.value - D.options.offset.x > 0 ? `
  M ${D.options.offset.x} 0
  L ${D.options.offset.x} ${r.value - D.options.offset.y}
  L ${t.value} ${r.value - D.options.offset.y}
  ${(f = D.options.grid) != null && f.includes("x") ? `${n.value.x.metrics.map(
          (m) => `
              M ${m.normalized * (t.value - D.options.offset.x) + D.options.offset.x} 0
              V ${r.value - D.options.offset.y}
            `
        ).join("")}` : ""}
  ${(l = D.options.grid) != null && l.includes("y") ? `${n.value.y.metrics.map(
          (m) => `
              M ${D.options.offset.x} ${(1 - m.normalized) * (r.value - D.options.offset.y)}
              H ${t.value}
            `
        ).join(`
`)}` : ""}
` : "";
      }
    ), i = L(
      () => o.value && a ? a.value.map((F) => ({
        ...F,
        path: `
            ${F.series.map(
          (s, C) => C === 0 ? `M ${s.x.normalized * (t.value - D.options.offset.x) + D.options.offset.x} ${(1 - s.y.normalized) * (r.value - D.options.offset.y)}` : D.options.curve === "smooth" ? C === 1 ? `C ${F.series[C - 1].x.normalized * (t.value - D.options.offset.x) + D.options.offset.x + t.value / F.series.length * D.options.radius} ${(1 - F.series[C - 1].y.normalized) * (r.value - D.options.offset.y)} ${s.x.normalized * (t.value - D.options.offset.x) + D.options.offset.x - t.value / F.series.length * D.options.radius} ${(1 - s.y.normalized) * (r.value - D.options.offset.y)} ${s.x.normalized * (t.value - D.options.offset.x) + D.options.offset.x} ${(1 - s.y.normalized) * (r.value - D.options.offset.y)}` : `S ${s.x.normalized * (t.value - D.options.offset.x) + D.options.offset.x - t.value / F.series.length * D.options.radius} ${(1 - s.y.normalized) * (r.value - D.options.offset.y)} ${s.x.normalized * (t.value - D.options.offset.x) + D.options.offset.x} ${(1 - s.y.normalized) * (r.value - D.options.offset.y)}` : `L ${s.x.normalized * (t.value - D.options.offset.x) + D.options.offset.x} ${(1 - s.y.normalized) * (r.value - D.options.offset.y)}`
        ).join(`
`)}`
      })) : []
    );
    return (F, s) => ($(), w("div", {
      ref_key: "wrapperRef$",
      ref: e,
      class: _(F.$style["chart-container"])
    }, [
      Q(PD, {
        height: p(r),
        width: p(t)
      }, {
        defs: J(() => []),
        path: J(() => [
          v("g", {
            id: "chart-group-axises",
            class: _([F.$style["chart-group-axises"]])
          }, [
            v("path", {
              d: p(o),
              class: _([F.$style["chart-axis"], F.$style.line, F.$style.path])
            }, null, 10, bE)
          ], 2),
          p(n) && p(t) && p(r) ? ($(), w("g", {
            key: 0,
            class: _([F.$style["chart-group-axises-label"]])
          }, [
            p(n).x && p(n).x.metrics ? ($(!0), w(M, { key: 0 }, W(p(n).x.metrics, (C, E) => ($(), w("text", {
              key: `axis-x--${E}`,
              x: C.normalized * (p(t) - D.options.offset.x) + D.options.offset.x,
              y: p(r) - D.options.offset.y + 20,
              class: _([F.$style["chart-axis"], F.$style.label]),
              "text-anchor": E === 0 ? "start" : E === p(n).x.metrics.length - 1 ? "end" : "middle"
            }, U(C.value), 11, $E))), 128)) : z("", !0),
            p(n).y && p(n).y.metrics ? ($(!0), w(M, { key: 1 }, W(p(n).y.metrics, (C, E) => ($(), w("text", {
              key: `axis-y--${E}`,
              x: D.options.offset.x - 10,
              y: (1 - C.normalized) * (p(r) - D.options.offset.y) + 5,
              class: _([F.$style["chart-axis"], F.$style.label]),
              "text-anchor": "end"
            }, U(C.value), 11, wE))), 128)) : z("", !0)
          ], 2)) : z("", !0),
          v("g", {
            class: _([F.$style["chart-group-plots"]])
          }, [
            ($(!0), w(M, null, W(p(i), (C) => ($(), w("g", {
              key: C.label,
              class: _([F.$style["chart-area"], F.$style.line, F.$style.plot])
            }, [
              v("path", {
                d: C.path
              }, null, 8, xE)
            ], 2))), 128)),
            ($(!0), w(M, null, W(p(a), (C) => ($(), w(M, null, [
              ($(!0), w(M, null, W(C.series, (E, f) => ($(), w("g", {
                key: `chart-plot-${C.label}-plot-${f}`,
                class: _(F.$style["chart-area"])
              }, [
                v("circle", {
                  class: _([
                    F.$style.behavior,
                    F.$style["chart-area"],
                    F.$style.point,
                    F.$style.plot,
                    F.$style.clickable
                  ]),
                  cx: E.x.normalized * (p(t) - D.options.offset.x) + D.options.offset.x,
                  cy: (1 - E.y.normalized) * (p(r) - D.options.offset.y),
                  r: "50"
                }, null, 10, OE),
                v("circle", {
                  class: _([F.$style["chart-area"], F.$style.point, F.$style.plot]),
                  cx: E.x.normalized * (p(t) - D.options.offset.x) + D.options.offset.x,
                  cy: (1 - E.y.normalized) * (p(r) - D.options.offset.y),
                  r: "5"
                }, null, 10, TE),
                ($(), w("foreignObject", {
                  x: E.x.normalized * (p(t) - D.options.offset.x) + D.options.offset.x - 140,
                  y: (1 - E.y.normalized) * (p(r) - D.options.offset.y) - (E.y.normalized >= 0.5 ? 0 : 220),
                  height: "220",
                  width: "280",
                  class: _([F.$style["chart-area"], F.$style["legend-container"]])
                }, [
                  Q(MD, {
                    class: _([F.$style["chart-area"], F.$style["legend-wrapper"]]),
                    radius: "var(--agh-ref-border-radius-500)"
                  }, {
                    default: J(() => [
                      D.options.title ? ($(), w(M, { key: 0 }, [
                        v("h1", {
                          class: _([F.$style["chart-area"], F.$style["legend-title"]])
                        }, U(p(Nu)(E.data, D.options.title)), 3),
                        PE
                      ], 64)) : z("", !0),
                      ($(!0), w(M, null, W(p(n), (l, m) => ($(), w(M, { key: m }, [
                        l && E[m] ? ($(), w("div", {
                          key: 0,
                          class: _([F.$style["chart-area"], F.$style["legend-group"]])
                        }, [
                          v("label", {
                            class: _([F.$style["chart-area"], F.$style["legend-label"]])
                          }, U(l.label), 3),
                          v("p", {
                            class: _([F.$style["chart-area"], F.$style["legend-value"]])
                          }, U(E[m].value), 3)
                        ], 2)) : z("", !0)
                      ], 64))), 128))
                    ]),
                    _: 2
                  }, 1032, ["class", "radius"])
                ], 10, SE))
              ], 2))), 128))
            ], 64))), 256))
          ], 2)
        ]),
        _: 1
      }, 8, ["height", "width"])
    ], 2));
  }
}), kE = "_behavior_1sfnc_1", IE = "_clickable_1sfnc_1", NE = "_disabled_1sfnc_4", zE = "_draggable_1sfnc_7", jE = "_loading_1sfnc_10", UE = "_path_1sfnc_24", RE = "_radar_1sfnc_29", LE = "_label_1sfnc_32", YE = "_plot_1sfnc_85", WE = "_point_1sfnc_85", HE = "_doughnut_1sfnc_96", GE = "_bg_1sfnc_102", qE = "_round_1sfnc_106", ZE = "_line_1sfnc_119", VE = {
  behavior: kE,
  clickable: IE,
  disabled: NE,
  draggable: zE,
  loading: jE,
  "chart-container": "_chart-container_1sfnc_14",
  "chart-axis": "_chart-axis_1sfnc_24",
  path: UE,
  radar: RE,
  label: LE,
  "font-align--center": "_font-align--center_1sfnc_45",
  "font-align--right": "_font-align--right_1sfnc_48",
  "font-align--left": "_font-align--left_1sfnc_51",
  "box-align--center": "_box-align--center_1sfnc_54",
  "box-align--left": "_box-align--left_1sfnc_57",
  "box-align--right": "_box-align--right_1sfnc_60",
  "chart-group-plots": "_chart-group-plots_1sfnc_67",
  "chart-area": "_chart-area_1sfnc_67",
  plot: YE,
  point: WE,
  doughnut: HE,
  "legend-container": "_legend-container_1sfnc_96",
  bg: GE,
  round: qE,
  line: ZE,
  "legend-wrapper": "_legend-wrapper_1sfnc_147",
  "legend-group": "_legend-group_1sfnc_158",
  "legend-value": "_legend-value_1sfnc_166",
  "legend-label": "_legend-label_1sfnc_169",
  "legend-title": "_legend-title_1sfnc_173"
}, QE = {
  $style: VE
}, rc = /* @__PURE__ */ eu(ME, [["__cssModules", QE], ["__scopeId", "data-v-9f80c889"]]), JE = ["id"], KE = ["stdDeviation"], XE = /* @__PURE__ */ v("feColorMatrix", {
  in: "blur",
  mode: "matrix",
  values: "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10",
  result: "mask"
}, null, -1), uA = /* @__PURE__ */ v("feComposite", {
  in: "SourceGraphic",
  in2: "mask",
  operator: "in"
}, null, -1), st = /* @__PURE__ */ q({
  __name: "RoundEffect",
  props: {
    id: {},
    radius: {}
  },
  setup(u) {
    const D = u;
    return (e, t) => ($(), w("filter", {
      id: D.id
    }, [
      v("feGaussianBlur", {
        stdDeviation: D.radius,
        in: "SourceGraphic",
        result: "blur"
      }, null, 8, KE),
      XE,
      uA
    ], 8, JE));
  }
}), DA = (u) => (_D("data-v-50dd5e3e"), u = u(), yD(), u), eA = ["innerHTML"], tA = { id: "chart-area-bg-mask" }, rA = ["d"], nA = ["d"], aA = ["d"], FA = ["x", "y", "height", "width"], oA = ["d"], iA = ["cx", "cy"], sA = ["cx", "cy"], CA = ["x", "y"], lA = /* @__PURE__ */ DA(() => /* @__PURE__ */ v("hr", null, null, -1)), EA = /* @__PURE__ */ q({
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
  setup(u) {
    const D = u, e = ou(), { width: t, height: r } = SD(e), { axises: n, datasets: a } = f0({
      type: "radar",
      data: D.datasets,
      axises: D.axises
    }), o = L(
      () => O.clamp(
        O.min(t.value - D.options.offset.x, r.value - D.options.offset.y) / 2,
        0,
        1 / 0
      )
    ), i = L(() => ({
      x: t.value / 2,
      y: r.value / 2
    })), F = mu(
      () => {
        var l, m;
        return o.value > 0 && ((m = (l = n.value) == null ? void 0 : l.x) != null && m.metrics) ? `
      ${n.value.x.metrics.map(
          (A, c) => `${c === 0 ? "M" : "L"} ${i.value.x + o.value * O.cos(O.rad(A.normalized * 360 - 90))} ${i.value.y + o.value * O.sin(O.rad(A.normalized * 360 - 90))}`
        ).join(" ")} Z
      ` : "";
      }
    ), s = mu(
      () => F.value && a.value ? a.value.map((l) => ({
        ...l,
        path: `${l.series.map(
          (m, A) => `${A === 0 ? "M" : "L"} ${i.value.x + o.value * m.y.normalized * O.cos(O.rad(m.x.normalized * 360 - 90))} ${i.value.y + o.value * m.y.normalized * O.sin(O.rad(m.x.normalized * 360 - 90))}`
        ).join(" ")} Z`
      })) : []
    ), C = L(
      () => o.value > 0 && n.value.x.metrics ? `M ${i.value.x} ${i.value.y}
      ${n.value.x.metrics.map(
        (l) => `L ${i.value.x + o.value * O.cos(O.rad(l.normalized * 360 - 90))} ${i.value.y + o.value * O.sin(O.rad(l.normalized * 360 - 90))}
            M ${i.value.x} ${i.value.y}`
      ).join(`
`)}
      Z` : ""
    ), E = fu(""), f = () => {
      e.value && i0(
        () => E.set(
          globalThis.getComputedStyle(e.value).getPropertyValue("--chart-bg-fill-svg")
        ),
        30
      );
    };
    return Et(() => {
      f();
    }), (l, m) => ($(), w("div", {
      ref_key: "wrapperRef$",
      ref: e,
      class: _(l.$style["chart-container"])
    }, [
      Q(PD, {
        height: p(r),
        width: p(t)
      }, {
        defs: J(() => [
          Q(st, {
            id: "chart-area-bg-round",
            radius: 6
          }),
          Q(st, {
            id: "chart-area-plot-round",
            radius: 3
          }),
          v("g", {
            innerHTML: p(E)()
          }, null, 8, eA),
          v("mask", tA, [
            v("path", {
              d: F.value,
              class: _([
                l.$style["chart-area"],
                l.$style.radar,
                l.$style.bg,
                {
                  [l.$style.round]: D.options.round
                }
              ]),
              fill: "#fff"
            }, null, 10, rA)
          ])
        ]),
        path: J(() => [
          v("path", {
            d: F.value,
            class: _([
              l.$style["chart-area"],
              l.$style.radar,
              l.$style.bg,
              {
                [l.$style.round]: D.options.round
              }
            ])
          }, null, 10, nA),
          v("g", {
            id: "chart-group-axises",
            class: _([l.$style["chart-group-axises"]]),
            mask: "url(#chart-area-bg-mask)"
          }, [
            v("path", {
              d: p(C),
              class: _([l.$style["chart-axis"], l.$style.radar, l.$style.path])
            }, null, 10, aA)
          ], 2),
          p(n) ? ($(), w("g", {
            key: 0,
            class: _([l.$style["chart-group-axises-label"]])
          }, [
            ($(!0), w(M, null, W(p(n).x.metrics, (A) => ($(), w("foreignObject", {
              key: A.value,
              x: p(i).x + p(o) * p(O).cos(p(O).rad(A.normalized * 360 - 90)) - (A.normalized % 0.5 === 0 ? p(o) / 2 : A.normalized > 0.5 ? p(o) : 0),
              y: p(i).y + p(o) * 1.1 * p(O).sin(p(O).rad(A.normalized * 360 - 90)) - p(o) / 6,
              height: p(o) / 3,
              width: p(o),
              class: _([l.$style["chart-axis"], l.$style.radar, l.$style["label-wrapper"]])
            }, [
              v("p", {
                class: _(["font-bold", [
                  l.$style["chart-axis"],
                  l.$style.radar,
                  l.$style.label,
                  A.normalized % 0.5 === 0 ? l.$style["font-align--center"] : A.normalized < 0.5 ? l.$style["font-align--left"] : l.$style["font-align--right"],
                  A.normalized % 0.5 === 0 ? l.$style["box-align--center"] : A.normalized < 0.5 ? l.$style["box-align--left"] : l.$style["box-align--right"]
                ]])
              }, U(A.value), 3)
            ], 10, FA))), 128))
          ], 2)) : z("", !0),
          v("g", {
            class: _([l.$style["chart-group-plots"]])
          }, [
            ($(!0), w(M, null, W(s.value, (A) => ($(), w("g", {
              key: A.label,
              class: _([l.$style["chart-area"], l.$style.radar, l.$style.plot])
            }, [
              v("path", {
                d: A.path,
                class: _([
                  {
                    [l.$style.round]: D.options.round
                  }
                ])
              }, null, 10, oA)
            ], 2))), 128))
          ], 2),
          ($(!0), w(M, null, W(p(a), (A) => ($(), w("g", {
            key: A.label,
            class: _([l.$style["chart-area-label"]])
          }, [
            ($(!0), w(M, null, W(A.series, (c, h) => ($(), w("g", {
              key: `plot-${h}`,
              class: _(l.$style["chart-area"])
            }, [
              v("circle", {
                class: _([
                  l.$style.behavior,
                  l.$style["chart-area"],
                  l.$style.point,
                  l.$style.plot,
                  l.$style.clickable
                ]),
                cx: p(i).x + p(o) * c.y.normalized * p(O).cos(p(O).rad(c.x.normalized * 360 - 90)),
                cy: p(i).y + p(o) * c.y.normalized * p(O).sin(p(O).rad(c.x.normalized * 360 - 90)),
                r: "10"
              }, null, 10, iA),
              v("circle", {
                class: _([l.$style["chart-area"], l.$style.radar, l.$style.point, l.$style.plot]),
                cx: p(i).x + p(o) * c.y.normalized * p(O).cos(p(O).rad(c.x.normalized * 360 - 90)),
                cy: p(i).y + p(o) * c.y.normalized * p(O).sin(p(O).rad(c.x.normalized * 360 - 90)),
                r: "5"
              }, null, 10, sA),
              ($(), w("foreignObject", {
                x: p(i).x + p(o) * c.y.normalized * p(O).cos(p(O).rad(c.x.normalized * 360 - 90)) - 130,
                y: p(i).y + p(o) * c.y.normalized * p(O).sin(p(O).rad(c.x.normalized * 360 - 90)),
                height: "200",
                width: "260",
                class: _([l.$style["chart-area"], l.$style["legend-container"]])
              }, [
                Q(MD, {
                  class: _([l.$style["chart-area"], l.$style["legend-wrapper"]]),
                  radius: "var(--agh-ref-border-radius-500)"
                }, {
                  default: J(() => [
                    D.options.title ? ($(), w(M, { key: 0 }, [
                      v("h1", {
                        class: _([l.$style["chart-area"], l.$style["legend-title"], l.$style.radar])
                      }, [
                        v("span", null, U(c.x.value), 1),
                        v("span", {
                          class: _(l.$style["legend-value"])
                        }, U(c.y.value), 3)
                      ], 2),
                      lA
                    ], 64)) : z("", !0),
                    ($(!0), w(M, null, W(p(n), (B, d) => ($(), w(M, { key: d }, [
                      !/(x|y)/.test(d) && B && c[d] ? ($(), w("div", {
                        key: 0,
                        class: _([l.$style["chart-area"], l.$style["legend-group"], l.$style.radar])
                      }, [
                        v("p", {
                          class: _([l.$style["chart-area"], l.$style["legend-value"]])
                        }, U(c[d].value), 3),
                        v("label", {
                          class: _([l.$style["chart-area"], l.$style["legend-label"]])
                        }, U(B.label), 3)
                      ], 2)) : z("", !0)
                    ], 64))), 128))
                  ]),
                  _: 2
                }, 1032, ["class", "radius"])
              ], 10, CA))
            ], 2))), 128))
          ], 2))), 128))
        ]),
        _: 1
      }, 8, ["height", "width"])
    ], 2));
  }
}), AA = "_behavior_1bxlz_1", cA = "_clickable_1bxlz_1", fA = "_disabled_1bxlz_4", dA = "_draggable_1bxlz_7", BA = "_loading_1bxlz_10", pA = "_path_1bxlz_24", hA = "_radar_1bxlz_29", mA = "_label_1bxlz_32", gA = "_plot_1bxlz_85", vA = "_point_1bxlz_85", _A = "_doughnut_1bxlz_96", yA = "_bg_1bxlz_102", bA = "_round_1bxlz_106", $A = "_line_1bxlz_119", wA = {
  behavior: AA,
  clickable: cA,
  disabled: fA,
  draggable: dA,
  loading: BA,
  "chart-container": "_chart-container_1bxlz_14",
  "chart-axis": "_chart-axis_1bxlz_24",
  path: pA,
  radar: hA,
  label: mA,
  "font-align--center": "_font-align--center_1bxlz_45",
  "font-align--right": "_font-align--right_1bxlz_48",
  "font-align--left": "_font-align--left_1bxlz_51",
  "box-align--center": "_box-align--center_1bxlz_54",
  "box-align--left": "_box-align--left_1bxlz_57",
  "box-align--right": "_box-align--right_1bxlz_60",
  "chart-group-plots": "_chart-group-plots_1bxlz_67",
  "chart-area": "_chart-area_1bxlz_67",
  plot: gA,
  point: vA,
  doughnut: _A,
  "legend-container": "_legend-container_1bxlz_96",
  bg: yA,
  round: bA,
  line: $A,
  "legend-wrapper": "_legend-wrapper_1bxlz_147",
  "legend-group": "_legend-group_1bxlz_158",
  "legend-value": "_legend-value_1bxlz_166",
  "legend-label": "_legend-label_1bxlz_169",
  "legend-title": "_legend-title_1bxlz_173"
}, xA = {
  $style: wA
}, nc = /* @__PURE__ */ eu(EA, [["__cssModules", xA], ["__scopeId", "data-v-50dd5e3e"]]), OA = ["onClick"], TA = /* @__PURE__ */ q({
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
  setup(u, { emit: D }) {
    const e = u, t = ou(), r = L(
      () => XD(
        Zu(Ii(e.options, e.groupBy ?? "")).map(([F, s]) => [
          F === "undefined" ? "" : F,
          s.map(
            (C) => fu({
              ...C,
              selected: !!(e.multiple ? rD(e.modelValue, e.fields.key).includes(tu(C, e.fields.key)) : tu(C, e.fields.key) === tu(e.modelValue, e.fields.key))
            })
          )
        ])
      )
    ), n = fu(!1), a = () => {
      t.value && i0(() => {
        const { scrollHeight: F, clientHeight: s } = t.value;
        n.set(F > s + 1);
      }, 30);
    }, o = (F) => {
      F.update((s) => ({
        ...s,
        selected: !s.selected
      })), e.multiple ? D(
        "update:modelValue",
        Ht(
          rD(
            r.value,
            (s) => s.map((C) => C()).filter((C) => C.selected)
          )
        )
      ) : D("update:modelValue", F());
    }, i = () => {
      e.multiple ? D("update:modelValue", []) : D("update:modelValue", {});
    };
    return He(() => {
      a();
    }), (F, s) => ($(), nu(MD, {
      class: _([
        F.$style["menu-container"],
        {
          [F.$style.classify]: e.groupBy
        }
      ]),
      radius: "var(--agh-ref-border-radius-500)"
    }, {
      default: J(() => [
        e.label || e.multiple ? ($(), w("header", {
          key: 0,
          class: _(F.$style["menu-header"])
        }, [
          v("h1", {
            class: _(F.$style.title)
          }, U(e.label), 3),
          e.multiple ? ($(), nu(Jt, {
            key: 0,
            class: _(F.$style.button),
            label: "Clear Selection",
            icon: "fa6-solid:eraser",
            variant: "text",
            onClick: s[0] || (s[0] = (C) => i())
          }, null, 8, ["class"])) : z("", !0)
        ], 2)) : z("", !0),
        v("div", {
          ref_key: "wrapperRef$",
          ref: t,
          class: _([
            F.$style["menu-wrapper"],
            {
              [F.$style.overflowed]: p(n)()
            }
          ])
        }, [
          ($(!0), w(M, null, W(p(r), (C, E) => ($(), w("div", {
            key: E,
            class: _([
              F.$style["menu-group"],
              {
                [F.$style.classify]: e.groupBy
              }
            ])
          }, [
            E ? ($(), w("label", {
              key: 0,
              class: _(F.$style["menu-group-label"]),
              name: ""
            }, U(E), 3)) : z("", !0),
            ($(!0), w(M, null, W(C, (f, l) => ($(), w("div", {
              key: `option-${l}`,
              class: _([
                F.$style["menu-option"],
                F.$style.behavior,
                F.$style.clickable,
                {
                  [F.$style.selected]: f().selected,
                  [F.$style.multiple]: e.multiple
                }
              ]),
              onClick: (m) => o(f)
            }, [
              e.multiple ? ($(), nu(p(Xu), {
                key: 0,
                class: _(F.$style["menu-option-icon"]),
                icon: f().selected ? "fa6-solid:square-check" : "fa6-regular:square"
              }, null, 8, ["class", "icon"])) : z("", !0),
              e.fields.icon ? ($(), nu(p(Xu), {
                key: 1,
                class: _(F.$style["menu-option-icon"]),
                icon: p(tu)(f(), e.fields.icon)
              }, null, 8, ["class", "icon"])) : z("", !0),
              v("div", {
                class: _(F.$style["menu-option-group"])
              }, [
                e.fields.title ? z("", !0) : ($(), w("p", {
                  key: 0,
                  class: _(F.$style["menu-field"])
                }, U(p(tu)(f(), e.fields.key)), 3)),
                ($(!0), w(M, null, W(p(qt)(e.fields, ["key", "icon"]), (m) => ($(), w(M, {
                  key: `option-field-${m}`
                }, [
                  m ? ($(), w("p", {
                    key: 0,
                    class: _(F.$style["menu-field"])
                  }, U(p(Nu)(f(), m)), 3)) : z("", !0)
                ], 64))), 128))
              ], 2)
            ], 10, OA))), 128))
          ], 2))), 128))
        ], 2)
      ]),
      _: 1
    }, 8, ["class", "radius"]));
  }
}), SA = "_behavior_1k2c6_1", PA = "_clickable_1k2c6_1", MA = "_disabled_1k2c6_4", kA = "_draggable_1k2c6_7", IA = "_loading_1k2c6_10", NA = "_classify_1k2c6_29", zA = "_title_1k2c6_47", jA = "_button_1k2c6_50", UA = "_overflowed_1k2c6_77", RA = "_hover_1k2c6_91", LA = "_selected_1k2c6_95", YA = "_multiple_1k2c6_99", WA = {
  behavior: SA,
  clickable: PA,
  disabled: MA,
  draggable: kA,
  loading: IA,
  "menu-container": "_menu-container_1k2c6_14",
  classify: NA,
  "menu-header": "_menu-header_1k2c6_32",
  title: zA,
  button: jA,
  "menu-wrapper": "_menu-wrapper_1k2c6_53",
  overflowed: UA,
  "menu-option": "_menu-option_1k2c6_81",
  hover: RA,
  selected: LA,
  multiple: YA,
  "menu-field": "_menu-field_1k2c6_102",
  "menu-option-group": "_menu-option-group_1k2c6_108",
  "menu-group": "_menu-group_1k2c6_122",
  "menu-group-label": "_menu-group-label_1k2c6_144"
}, HA = {
  $style: WA
}, gr = /* @__PURE__ */ eu(TA, [["__cssModules", HA], ["__scopeId", "data-v-c965c008"]]), GA = /* @__PURE__ */ q({
  __name: "DropDown",
  props: {
    fields: {},
    modelValue: {},
    items: { default: () => [] },
    disabled: { type: Boolean },
    level: { default: "primary" }
  },
  emits: ["update:modelValue"],
  setup(u, { emit: D }) {
    const e = u, t = mu({
      get: () => e.modelValue,
      set: (n) => (r.set(!0), D("update:modelValue", n))
    }), r = fu(!0);
    return (n, a) => ($(), w("div", {
      class: _(n.$style["dropdown--container"])
    }, [
      Q(Jt, {
        disabled: e.disabled,
        label: p(tu)(e.modelValue, e.fields.key),
        icon: p(r)() ? "fa6-solid:chevron-up" : "fa6-solid:chevron-down",
        clicked: !p(r)(),
        level: e.level,
        class: _(n.$style["dropdown--input"]),
        onClick: a[0] || (a[0] = (o) => p(r).update((i) => !i)),
        type: "search"
      }, null, 8, ["disabled", "label", "icon", "clicked", "level", "class"]),
      n.items.length > 0 && !p(r)() ? ($(), nu(gr, {
        key: 0,
        class: _(n.$style["dropdown--menu"]),
        options: n.items,
        fields: e.fields,
        modelValue: t.value,
        "onUpdate:modelValue": a[1] || (a[1] = (o) => t.value = o)
      }, null, 8, ["class", "options", "fields", "modelValue"])) : z("", !0)
    ], 2));
  }
}), qA = {
  "dropdown--container": "_dropdown--container_kizkx_1",
  "dropdown--input": "_dropdown--input_kizkx_7",
  "dropdown--menu": "_dropdown--menu_kizkx_12"
}, ZA = {
  $style: qA
}, ac = /* @__PURE__ */ eu(GA, [["__cssModules", ZA], ["__scopeId", "data-v-8aec7555"]]), VA = /* @__PURE__ */ q({
  __name: "ProgressBar",
  props: {
    value: { default: 0 },
    variant: { default: "concave" },
    thickness: { default: 12 }
  },
  setup(u) {
    const D = u;
    return (e, t) => ($(), w("div", {
      class: _([e.$style["progress-container"], e.$style[D.variant]])
    }, [
      v("div", {
        class: _([e.$style["progress-groove"], e.$style[D.variant]])
      }, [
        v("div", {
          class: _(e.$style["progress-value"]),
          style: zr({ width: `${D.value * 100}%` })
        }, null, 6)
      ], 2)
    ], 2));
  }
}), QA = "_concave_vuh1m_23", JA = "_convex_vuh1m_55", KA = {
  "progress-container": "_progress-container_vuh1m_1",
  "progress-groove": "_progress-groove_vuh1m_11",
  "progress-value": "_progress-value_vuh1m_11",
  concave: QA,
  "progress-content-wrapper": "_progress-content-wrapper_vuh1m_35",
  convex: JA
}, XA = {
  $style: KA
}, Fc = /* @__PURE__ */ eu(VA, [["__cssModules", XA], ["__scopeId", "data-v-d1ec5a1d"]]), u2 = ["height", "width"], D2 = /* @__PURE__ */ v("feFlood", {
  "flood-opacity": "0",
  result: "BackgroundImageFix"
}, null, -1), e2 = /* @__PURE__ */ v("feBlend", {
  in: "SourceGraphic",
  in2: "BackgroundImageFix",
  result: "shape"
}, null, -1), t2 = /* @__PURE__ */ v("feColorMatrix", {
  in: "SourceAlpha",
  result: "hardAlpha",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}, null, -1), r2 = /* @__PURE__ */ v("feOffset", {
  dx: "1",
  dy: "1"
}, null, -1), n2 = /* @__PURE__ */ v("feGaussianBlur", { stdDeviation: "1" }, null, -1), a2 = /* @__PURE__ */ v("feComposite", {
  in2: "hardAlpha",
  k2: "-1",
  k3: "1",
  operator: "arithmetic"
}, null, -1), F2 = /* @__PURE__ */ v("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" }, null, -1), o2 = /* @__PURE__ */ v("feBlend", {
  in2: "shape",
  result: "effect-innerShadow-1"
}, null, -1), i2 = /* @__PURE__ */ v("feColorMatrix", {
  in: "SourceAlpha",
  result: "hardAlpha",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}, null, -1), s2 = /* @__PURE__ */ v("feOffset", {
  dx: "2",
  dy: "3"
}, null, -1), C2 = /* @__PURE__ */ v("feGaussianBlur", { stdDeviation: "1.5" }, null, -1), l2 = /* @__PURE__ */ v("feComposite", {
  in2: "hardAlpha",
  k2: "-1",
  k3: "1",
  operator: "arithmetic"
}, null, -1), E2 = /* @__PURE__ */ v("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.11 0" }, null, -1), A2 = /* @__PURE__ */ v("feBlend", {
  in2: "effect-innerShadow-1",
  result: "effect-innerShadow2"
}, null, -1), c2 = /* @__PURE__ */ v("feColorMatrix", {
  in: "SourceAlpha",
  result: "hardAlpha",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}, null, -1), f2 = /* @__PURE__ */ v("feOffset", {
  dx: "5",
  dy: "6"
}, null, -1), d2 = /* @__PURE__ */ v("feGaussianBlur", { stdDeviation: "2" }, null, -1), B2 = /* @__PURE__ */ v("feComposite", {
  in2: "hardAlpha",
  k2: "-1",
  k3: "1",
  operator: "arithmetic"
}, null, -1), p2 = /* @__PURE__ */ v("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" }, null, -1), h2 = /* @__PURE__ */ v("feBlend", {
  in2: "effect-innerShadow2",
  result: "effect-innerShadow3"
}, null, -1), m2 = /* @__PURE__ */ v("feColorMatrix", {
  in: "SourceAlpha",
  result: "hardAlpha",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}, null, -1), g2 = /* @__PURE__ */ v("feOffset", {
  dx: "8",
  dy: "10"
}, null, -1), v2 = /* @__PURE__ */ v("feGaussianBlur", { stdDeviation: "2.5" }, null, -1), _2 = /* @__PURE__ */ v("feComposite", {
  in2: "hardAlpha",
  k2: "-1",
  k3: "1",
  operator: "arithmetic"
}, null, -1), y2 = /* @__PURE__ */ v("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0" }, null, -1), b2 = /* @__PURE__ */ v("feBlend", {
  in2: "effect-innerShadow3",
  result: "effect-innerShadow4"
}, null, -1), $2 = [
  D2,
  e2,
  t2,
  r2,
  n2,
  a2,
  F2,
  o2,
  i2,
  s2,
  C2,
  l2,
  E2,
  A2,
  c2,
  f2,
  d2,
  B2,
  p2,
  h2,
  m2,
  g2,
  v2,
  _2,
  y2,
  b2
], w2 = /* @__PURE__ */ q({
  __name: "InnerShadowDeco",
  props: {
    height: {},
    width: {}
  },
  setup(u) {
    const D = u;
    return (e, t) => ($(), w("filter", {
      id: "effects--inner-shadow--deco",
      height: D.height,
      width: D.width,
      x: "0",
      y: "0",
      "color-interpolation-filters": "sRGB",
      filterUnits: "userSpaceOnUse"
    }, $2, 8, u2));
  }
}), d0 = (u) => (_D("data-v-2a62d2db"), u = u(), yD(), u), x2 = ["innerHTML"], O2 = ["cx", "cy", "r"], T2 = ["cx", "cy", "r"], S2 = /* @__PURE__ */ d0(() => /* @__PURE__ */ v("mask", { id: "progress-groove-mask" }, [
  /* @__PURE__ */ v("use", {
    href: "#progress-groove-outer",
    fill: "#fff"
  }),
  /* @__PURE__ */ v("use", {
    href: "#progress-groove-inner",
    fill: "#000"
  })
], -1)), P2 = /* @__PURE__ */ d0(() => /* @__PURE__ */ v("use", {
  href: "#progress-groove-outer",
  mask: "url(#progress-groove-mask)"
}, null, -1)), M2 = [
  P2
], k2 = ["cx", "cy", "r", "stroke-dashoffset", "stroke-dasharray", "stroke-width"], I2 = /* @__PURE__ */ d0(() => /* @__PURE__ */ v("clipPath", { id: "progress-content-clip" }, [
  /* @__PURE__ */ v("use", { href: "#progress-groove-inner" })
], -1)), N2 = { "clip-path": "url(#progress-content-clip)" }, z2 = ["height", "width", "x", "y"], j2 = /* @__PURE__ */ q({
  __name: "ProgressCircle",
  props: {
    value: { default: 0 },
    variant: { default: "concave" },
    thickness: { default: 12 }
  },
  setup(u) {
    const D = u, e = ou(), { width: t, height: r } = SD(e), n = L(
      () => O.clamp(O.min(t.value, r.value) / 2 - D.thickness / 2, 0, 1 / 0)
    ), a = L(() => n.value * 2 * O.PI), o = L(() => ({
      x: t.value / 2,
      y: r.value / 2
    })), i = fu(""), F = () => {
      e.value && D.variant === "convex" && i0(
        () => i.set(
          globalThis.getComputedStyle(e.value).getPropertyValue("--progress-value-fill-gradient")
        ),
        30
      );
    };
    return Et(() => {
      F();
    }), (s, C) => ($(), w("div", {
      ref_key: "wrapperRef$",
      ref: e,
      class: _([s.$style["progress-container"], s.$style[D.variant]])
    }, [
      Q(PD, {
        height: p(r),
        width: p(t)
      }, {
        defs: J(() => [
          v("g", {
            innerHTML: p(i)()
          }, null, 8, x2),
          Q(w2, {
            height: p(r),
            width: p(t)
          }, null, 8, ["height", "width"]),
          v("circle", {
            id: "progress-groove-outer",
            cx: p(o).x,
            cy: p(o).y,
            r: p(n) + D.thickness / 2
          }, null, 8, O2),
          v("circle", {
            id: "progress-groove-inner",
            cx: p(o).x,
            cy: p(o).y,
            r: p(n) - D.thickness / 2
          }, null, 8, T2),
          S2
        ]),
        path: J(() => [
          v("g", {
            class: _(s.$style["progress-groove"])
          }, M2, 2),
          v("g", {
            class: _(s.$style["progress-value"])
          }, [
            v("circle", {
              cx: p(o).x,
              cy: p(o).y,
              r: p(n),
              "stroke-dashoffset": (D.value + 0.25) * p(a),
              "stroke-dasharray": `${D.value * p(a)} ${(1 - D.value) * p(a)}`,
              "stroke-width": D.thickness,
              fill: "transparent"
            }, null, 8, k2)
          ], 2),
          I2,
          v("g", N2, [
            ($(), w("foreignObject", {
              height: p(n) * 2,
              width: p(n) * 2,
              x: p(o).x - p(n),
              y: p(o).y - p(n)
            }, [
              v("div", {
                class: _(s.$style["progress-content-wrapper"])
              }, [
                v("label", null, U((D.value * 100).toFixed(0)) + "%", 1)
              ], 2)
            ], 8, z2))
          ])
        ]),
        _: 1
      }, 8, ["height", "width"])
    ], 2));
  }
}), U2 = "_concave_1jatd_23", R2 = "_convex_1jatd_55", L2 = {
  "progress-container": "_progress-container_1jatd_1",
  "progress-groove": "_progress-groove_1jatd_11",
  "progress-value": "_progress-value_1jatd_11",
  concave: U2,
  "progress-content-wrapper": "_progress-content-wrapper_1jatd_35",
  convex: R2
}, Y2 = {
  $style: L2
}, oc = /* @__PURE__ */ eu(j2, [["__cssModules", Y2], ["__scopeId", "data-v-2a62d2db"]]), W2 = (u, D) => {
  var e;
  if (D) {
    const t = (e = Zu(qt(u, "valid")).find(([r, n]) => n && D[r])) == null ? void 0 : e[0];
    return t ? D[t] ?? null : null;
  }
  return null;
}, H2 = ["value"], G2 = ["for"], q2 = /* @__PURE__ */ q({
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
  setup(u, { emit: D }) {
    const e = u, { onTrigger: t } = Ge(
      (o) => {
        e.disabled ? (o.preventDefault(), o.stopPropagation()) : (a(), D("update:modelValue", o.target.value));
      },
      {
        flush: "post"
      }
    ), r = ou(), n = fu(""), a = () => {
      var o;
      return n.set(
        r.value ? (o = r.value) != null && o.validity.valid ? "" : W2(r.value.validity, e.invalidMessage ?? {}) ?? r.value.validationMessage : ""
      );
    };
    return He(() => {
      a();
    }), (o, i) => ($(), w("div", {
      class: _([
        o.$style["textfield-container"],
        {
          [o.$style[`icon-align--${e.iconAlign}`]]: e.icon || o.type === "search"
        }
      ])
    }, [
      v("input", lt({
        ref_key: "inputRef$",
        ref: r,
        class: [o.$style["textfield-input"]]
      }, e, {
        value: e.modelValue,
        onInput: i[0] || (i[0] = //@ts-ignore
        (...F) => p(t) && p(t)(...F))
      }), null, 16, H2),
      o.type === "search" || e.icon ? ($(), nu(p(Xu), {
        key: 0,
        class: _([o.$style["textfield-label--icon"], o.$style.icon]),
        icon: e.icon || o.type === "search" ? "fa6-solid:magnifying-glass" : ""
      }, null, 8, ["class", "icon"])) : z("", !0),
      p(n)() ? ($(), w("label", {
        key: 1,
        for: e.name,
        class: _([o.$style["textfield-label"]])
      }, [
        Q(p(Xu), {
          class: _([o.$style["textfield-label--icon"]]),
          icon: "fa6-solid:circle-xmark"
        }, null, 8, ["class"]),
        v("span", {
          class: _([o.$style["textfield-label--value"]])
        }, U(p(n)()), 3)
      ], 10, G2)) : z("", !0)
    ], 2));
  }
}), Z2 = {
  "textfield-container": "_textfield-container_qhzrd_1",
  "icon-align--left": "_icon-align--left_qhzrd_9",
  "icon-align--right": "_icon-align--right_qhzrd_9",
  "textfield-input": "_textfield-input_qhzrd_17",
  "textfield-label--icon": "_textfield-label--icon_qhzrd_23",
  "textfield-label": "_textfield-label_qhzrd_23",
  "textfield-label--value": "_textfield-label--value_qhzrd_98"
}, V2 = {
  $style: Z2
}, Q2 = /* @__PURE__ */ eu(q2, [["__cssModules", V2], ["__scopeId", "data-v-784e2d65"]]), J2 = /* @__PURE__ */ q({
  __name: "SearchBar",
  props: {
    fields: {},
    modelValue: { default: "" },
    items: { default: () => [] },
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue", "select"],
  setup(u, { emit: D }) {
    const e = u, t = mu({
      get: () => e.modelValue,
      set: (F) => (i(F), D("update:modelValue", F))
    }), r = ou(), n = fu(!1), a = fu([]), o = (F) => {
      D("update:modelValue", tu(F, e.fields.key)), D("select", F), n.set(!0);
    }, i = (F) => {
      var s;
      a.set(
        ((s = e.items) == null ? void 0 : s.filter((C) => tu(C, e.fields.key).includes(F))) ?? []
      );
    };
    return pD(t, i), pD(r, o), (F, s) => ($(), w("div", {
      class: _(F.$style["search-bar--container"])
    }, [
      Q(Q2, {
        modelValue: t.value,
        "onUpdate:modelValue": s[0] || (s[0] = (C) => t.value = C),
        class: _(F.$style["search-bar--input"]),
        disabled: e.disabled,
        onClick: s[1] || (s[1] = (C) => p(n).set(!1)),
        onFocus: s[2] || (s[2] = (C) => p(n).set(!1)),
        onBlur: s[3] || (s[3] = (C) => p(n).set(!0)),
        type: "search"
      }, null, 8, ["modelValue", "class", "disabled"]),
      t.value && p(a)().length > 0 && !p(n)() ? ($(), nu(gr, {
        key: 0,
        class: _(F.$style["search-bar--menu"]),
        options: p(a)(),
        fields: e.fields,
        modelValue: r.value,
        "onUpdate:modelValue": s[4] || (s[4] = (C) => r.value = C)
      }, null, 8, ["class", "options", "fields", "modelValue"])) : z("", !0)
    ], 2));
  }
}), K2 = {
  "search-bar--container": "_search-bar--container_1hygv_1",
  "search-bar--input": "_search-bar--input_1hygv_7",
  "search-bar--menu": "_search-bar--menu_1hygv_10"
}, X2 = {
  $style: K2
}, ic = /* @__PURE__ */ eu(J2, [["__cssModules", X2], ["__scopeId", "data-v-384c9809"]]);
export {
  Qt as BaseLink,
  PD as BasePoly,
  Jt as ButtonBox,
  MD as CardBox,
  tc as DoughnutChart,
  ac as DropDown,
  rc as LineChart,
  Fc as ProgressBar,
  oc as ProgressCircle,
  nc as RadarChart,
  ic as SearchBar,
  gr as SelectMenu,
  Q2 as TextField
};
//# sourceMappingURL=ui.component.es.js.map
