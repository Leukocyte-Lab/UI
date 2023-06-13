import { shallowRef as Lr, watchEffect as ht, readonly as Yr, getCurrentScope as Wr, onScopeDispose as Hr, unref as g, computed as gu, ref as ou, watch as he, getCurrentInstance as Gr, onMounted as qD, defineComponent as H, openBlock as w, createBlock as nu, resolveDynamicComponent as qr, normalizeProps as Zr, guardReactiveProps as Vr, withCtx as K, renderSlot as Ju, createElementBlock as $, normalizeClass as _, createElementVNode as v, h as g0, mergeProps as gt, toDisplayString as U, createCommentVNode as z, createVNode as Q, useCssVars as Qr, reactive as Kr, Fragment as M, renderList as W, pushScopeId as ye, popScopeId as be, onUpdated as mt, normalizeStyle as Jr } from "vue";
import { u as ZD, f as uD, M as O, s as fu } from "./uuid-80ab1d9a.js";
var Xr = typeof global == "object" && global && global.Object === Object && global;
const vt = Xr;
var un = typeof self == "object" && self && self.Object === Object && self, en = vt || un || Function("return this")();
const su = en;
var Dn = su.Symbol;
const eu = Dn;
var _t = Object.prototype, tn = _t.hasOwnProperty, rn = _t.toString, Hu = eu ? eu.toStringTag : void 0;
function nn(u) {
  var e = tn.call(u, Hu), D = u[Hu];
  try {
    u[Hu] = void 0;
    var t = !0;
  } catch {
  }
  var r = rn.call(u);
  return t && (e ? u[Hu] = D : delete u[Hu]), r;
}
var an = Object.prototype, Fn = an.toString;
function on(u) {
  return Fn.call(u);
}
var sn = "[object Null]", ln = "[object Undefined]", m0 = eu ? eu.toStringTag : void 0;
function yu(u) {
  return u == null ? u === void 0 ? ln : sn : m0 && m0 in Object(u) ? nn(u) : on(u);
}
function Cu(u) {
  return u != null && typeof u == "object";
}
var Cn = "[object Symbol]";
function oe(u) {
  return typeof u == "symbol" || Cu(u) && yu(u) == Cn;
}
function we(u, e) {
  for (var D = -1, t = u == null ? 0 : u.length, r = Array(t); ++D < t; )
    r[D] = e(u[D], D, u);
  return r;
}
var En = Array.isArray;
const J = En;
var An = 1 / 0, v0 = eu ? eu.prototype : void 0, _0 = v0 ? v0.toString : void 0;
function yt(u) {
  if (typeof u == "string")
    return u;
  if (J(u))
    return we(u, yt) + "";
  if (oe(u))
    return _0 ? _0.call(u) : "";
  var e = u + "";
  return e == "0" && 1 / u == -An ? "-0" : e;
}
var cn = /\s/;
function fn(u) {
  for (var e = u.length; e-- && cn.test(u.charAt(e)); )
    ;
  return e;
}
var dn = /^\s+/;
function Bn(u) {
  return u && u.slice(0, fn(u) + 1).replace(dn, "");
}
function du(u) {
  var e = typeof u;
  return u != null && (e == "object" || e == "function");
}
var y0 = 0 / 0, pn = /^[-+]0x[0-9a-f]+$/i, hn = /^0b[01]+$/i, gn = /^0o[0-7]+$/i, mn = parseInt;
function vn(u) {
  if (typeof u == "number")
    return u;
  if (oe(u))
    return y0;
  if (du(u)) {
    var e = typeof u.valueOf == "function" ? u.valueOf() : u;
    u = du(e) ? e + "" : e;
  }
  if (typeof u != "string")
    return u === 0 ? u : +u;
  u = Bn(u);
  var D = hn.test(u);
  return D || gn.test(u) ? mn(u.slice(2), D ? 2 : 8) : pn.test(u) ? y0 : +u;
}
function ie(u) {
  return u;
}
var _n = "[object AsyncFunction]", yn = "[object Function]", bn = "[object GeneratorFunction]", wn = "[object Proxy]";
function bt(u) {
  if (!du(u))
    return !1;
  var e = yu(u);
  return e == yn || e == bn || e == _n || e == wn;
}
var $n = su["__core-js_shared__"];
const Ge = $n;
var b0 = function() {
  var u = /[^.]+$/.exec(Ge && Ge.keys && Ge.keys.IE_PROTO || "");
  return u ? "Symbol(src)_1." + u : "";
}();
function xn(u) {
  return !!b0 && b0 in u;
}
var On = Function.prototype, Tn = On.toString;
function bu(u) {
  if (u != null) {
    try {
      return Tn.call(u);
    } catch {
    }
    try {
      return u + "";
    } catch {
    }
  }
  return "";
}
var Sn = /[\\^$.*+?()[\]{}|]/g, Pn = /^\[object .+?Constructor\]$/, Mn = Function.prototype, kn = Object.prototype, In = Mn.toString, Nn = kn.hasOwnProperty, zn = RegExp(
  "^" + In.call(Nn).replace(Sn, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function jn(u) {
  if (!du(u) || xn(u))
    return !1;
  var e = bt(u) ? zn : Pn;
  return e.test(bu(u));
}
function Un(u, e) {
  return u == null ? void 0 : u[e];
}
function wu(u, e) {
  var D = Un(u, e);
  return jn(D) ? D : void 0;
}
var Rn = wu(su, "WeakMap");
const eD = Rn;
var w0 = Object.create, Ln = function() {
  function u() {
  }
  return function(e) {
    if (!du(e))
      return {};
    if (w0)
      return w0(e);
    u.prototype = e;
    var D = new u();
    return u.prototype = void 0, D;
  };
}();
const Yn = Ln;
function Wn(u, e, D) {
  switch (D.length) {
    case 0:
      return u.call(e);
    case 1:
      return u.call(e, D[0]);
    case 2:
      return u.call(e, D[0], D[1]);
    case 3:
      return u.call(e, D[0], D[1], D[2]);
  }
  return u.apply(e, D);
}
function Hn() {
}
function Gn(u, e) {
  var D = -1, t = u.length;
  for (e || (e = Array(t)); ++D < t; )
    e[D] = u[D];
  return e;
}
var qn = 800, Zn = 16, Vn = Date.now;
function Qn(u) {
  var e = 0, D = 0;
  return function() {
    var t = Vn(), r = Zn - (t - D);
    if (D = t, r > 0) {
      if (++e >= qn)
        return arguments[0];
    } else
      e = 0;
    return u.apply(void 0, arguments);
  };
}
function Kn(u) {
  return function() {
    return u;
  };
}
var Jn = function() {
  try {
    var u = wu(Object, "defineProperty");
    return u({}, "", {}), u;
  } catch {
  }
}();
const ge = Jn;
var Xn = ge ? function(u, e) {
  return ge(u, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Kn(e),
    writable: !0
  });
} : ie;
const ua = Xn;
var ea = Qn(ua);
const wt = ea;
function Da(u, e) {
  for (var D = -1, t = u == null ? 0 : u.length; ++D < t && e(u[D], D, u) !== !1; )
    ;
  return u;
}
function ta(u, e, D, t) {
  for (var r = u.length, n = D + (t ? 1 : -1); t ? n-- : ++n < r; )
    if (e(u[n], n, u))
      return n;
  return -1;
}
function ra(u) {
  return u !== u;
}
function na(u, e, D) {
  for (var t = D - 1, r = u.length; ++t < r; )
    if (u[t] === e)
      return t;
  return -1;
}
function aa(u, e, D) {
  return e === e ? na(u, e, D) : ta(u, ra, D);
}
function Fa(u, e) {
  var D = u == null ? 0 : u.length;
  return !!D && aa(u, e, 0) > -1;
}
var oa = 9007199254740991, ia = /^(?:0|[1-9]\d*)$/;
function $t(u, e) {
  var D = typeof u;
  return e = e ?? oa, !!e && (D == "number" || D != "symbol" && ia.test(u)) && u > -1 && u % 1 == 0 && u < e;
}
function VD(u, e, D) {
  e == "__proto__" && ge ? ge(u, e, {
    configurable: !0,
    enumerable: !0,
    value: D,
    writable: !0
  }) : u[e] = D;
}
function QD(u, e) {
  return u === e || u !== u && e !== e;
}
var sa = Object.prototype, la = sa.hasOwnProperty;
function xt(u, e, D) {
  var t = u[e];
  (!(la.call(u, e) && QD(t, D)) || D === void 0 && !(e in u)) && VD(u, e, D);
}
function se(u, e, D, t) {
  var r = !D;
  D || (D = {});
  for (var n = -1, a = e.length; ++n < a; ) {
    var o = e[n], i = t ? t(D[o], u[o], o, D, u) : void 0;
    i === void 0 && (i = u[o]), r ? VD(D, o, i) : xt(D, o, i);
  }
  return D;
}
var $0 = Math.max;
function Ot(u, e, D) {
  return e = $0(e === void 0 ? u.length - 1 : e, 0), function() {
    for (var t = arguments, r = -1, n = $0(t.length - e, 0), a = Array(n); ++r < n; )
      a[r] = t[e + r];
    r = -1;
    for (var o = Array(e + 1); ++r < e; )
      o[r] = t[r];
    return o[e] = D(a), Wn(u, this, o);
  };
}
function Ca(u, e) {
  return wt(Ot(u, e, ie), u + "");
}
var Ea = 9007199254740991;
function KD(u) {
  return typeof u == "number" && u > -1 && u % 1 == 0 && u <= Ea;
}
function le(u) {
  return u != null && KD(u.length) && !bt(u);
}
var Aa = Object.prototype;
function $e(u) {
  var e = u && u.constructor, D = typeof e == "function" && e.prototype || Aa;
  return u === D;
}
function ca(u, e) {
  for (var D = -1, t = Array(u); ++D < u; )
    t[D] = e(D);
  return t;
}
var fa = "[object Arguments]";
function x0(u) {
  return Cu(u) && yu(u) == fa;
}
var Tt = Object.prototype, da = Tt.hasOwnProperty, Ba = Tt.propertyIsEnumerable, pa = x0(function() {
  return arguments;
}()) ? x0 : function(u) {
  return Cu(u) && da.call(u, "callee") && !Ba.call(u, "callee");
};
const xe = pa;
function ha() {
  return !1;
}
var St = typeof exports == "object" && exports && !exports.nodeType && exports, O0 = St && typeof module == "object" && module && !module.nodeType && module, ga = O0 && O0.exports === St, T0 = ga ? su.Buffer : void 0, ma = T0 ? T0.isBuffer : void 0, va = ma || ha;
const Xu = va;
var _a = "[object Arguments]", ya = "[object Array]", ba = "[object Boolean]", wa = "[object Date]", $a = "[object Error]", xa = "[object Function]", Oa = "[object Map]", Ta = "[object Number]", Sa = "[object Object]", Pa = "[object RegExp]", Ma = "[object Set]", ka = "[object String]", Ia = "[object WeakMap]", Na = "[object ArrayBuffer]", za = "[object DataView]", ja = "[object Float32Array]", Ua = "[object Float64Array]", Ra = "[object Int8Array]", La = "[object Int16Array]", Ya = "[object Int32Array]", Wa = "[object Uint8Array]", Ha = "[object Uint8ClampedArray]", Ga = "[object Uint16Array]", qa = "[object Uint32Array]", k = {};
k[ja] = k[Ua] = k[Ra] = k[La] = k[Ya] = k[Wa] = k[Ha] = k[Ga] = k[qa] = !0;
k[_a] = k[ya] = k[Na] = k[ba] = k[za] = k[wa] = k[$a] = k[xa] = k[Oa] = k[Ta] = k[Sa] = k[Pa] = k[Ma] = k[ka] = k[Ia] = !1;
function Za(u) {
  return Cu(u) && KD(u.length) && !!k[yu(u)];
}
function JD(u) {
  return function(e) {
    return u(e);
  };
}
var Pt = typeof exports == "object" && exports && !exports.nodeType && exports, qu = Pt && typeof module == "object" && module && !module.nodeType && module, Va = qu && qu.exports === Pt, qe = Va && vt.process, Qa = function() {
  try {
    var u = qu && qu.require && qu.require("util").types;
    return u || qe && qe.binding && qe.binding("util");
  } catch {
  }
}();
const Iu = Qa;
var S0 = Iu && Iu.isTypedArray, Ka = S0 ? JD(S0) : Za;
const XD = Ka;
var Ja = Object.prototype, Xa = Ja.hasOwnProperty;
function Mt(u, e) {
  var D = J(u), t = !D && xe(u), r = !D && !t && Xu(u), n = !D && !t && !r && XD(u), a = D || t || r || n, o = a ? ca(u.length, String) : [], i = o.length;
  for (var F in u)
    (e || Xa.call(u, F)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (F == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    r && (F == "offset" || F == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    n && (F == "buffer" || F == "byteLength" || F == "byteOffset") || // Skip index properties.
    $t(F, i))) && o.push(F);
  return o;
}
function kt(u, e) {
  return function(D) {
    return u(e(D));
  };
}
var uF = kt(Object.keys, Object);
const eF = uF;
var DF = Object.prototype, tF = DF.hasOwnProperty;
function It(u) {
  if (!$e(u))
    return eF(u);
  var e = [];
  for (var D in Object(u))
    tF.call(u, D) && D != "constructor" && e.push(D);
  return e;
}
function zu(u) {
  return le(u) ? Mt(u) : It(u);
}
function rF(u) {
  var e = [];
  if (u != null)
    for (var D in Object(u))
      e.push(D);
  return e;
}
var nF = Object.prototype, aF = nF.hasOwnProperty;
function FF(u) {
  if (!du(u))
    return rF(u);
  var e = $e(u), D = [];
  for (var t in u)
    t == "constructor" && (e || !aF.call(u, t)) || D.push(t);
  return D;
}
function u0(u) {
  return le(u) ? Mt(u, !0) : FF(u);
}
var oF = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, iF = /^\w*$/;
function e0(u, e) {
  if (J(u))
    return !1;
  var D = typeof u;
  return D == "number" || D == "symbol" || D == "boolean" || u == null || oe(u) ? !0 : iF.test(u) || !oF.test(u) || e != null && u in Object(e);
}
var sF = wu(Object, "create");
const ue = sF;
function lF() {
  this.__data__ = ue ? ue(null) : {}, this.size = 0;
}
function CF(u) {
  var e = this.has(u) && delete this.__data__[u];
  return this.size -= e ? 1 : 0, e;
}
var EF = "__lodash_hash_undefined__", AF = Object.prototype, cF = AF.hasOwnProperty;
function fF(u) {
  var e = this.__data__;
  if (ue) {
    var D = e[u];
    return D === EF ? void 0 : D;
  }
  return cF.call(e, u) ? e[u] : void 0;
}
var dF = Object.prototype, BF = dF.hasOwnProperty;
function pF(u) {
  var e = this.__data__;
  return ue ? e[u] !== void 0 : BF.call(e, u);
}
var hF = "__lodash_hash_undefined__";
function gF(u, e) {
  var D = this.__data__;
  return this.size += this.has(u) ? 0 : 1, D[u] = ue && e === void 0 ? hF : e, this;
}
function mu(u) {
  var e = -1, D = u == null ? 0 : u.length;
  for (this.clear(); ++e < D; ) {
    var t = u[e];
    this.set(t[0], t[1]);
  }
}
mu.prototype.clear = lF;
mu.prototype.delete = CF;
mu.prototype.get = fF;
mu.prototype.has = pF;
mu.prototype.set = gF;
function mF() {
  this.__data__ = [], this.size = 0;
}
function Oe(u, e) {
  for (var D = u.length; D--; )
    if (QD(u[D][0], e))
      return D;
  return -1;
}
var vF = Array.prototype, _F = vF.splice;
function yF(u) {
  var e = this.__data__, D = Oe(e, u);
  if (D < 0)
    return !1;
  var t = e.length - 1;
  return D == t ? e.pop() : _F.call(e, D, 1), --this.size, !0;
}
function bF(u) {
  var e = this.__data__, D = Oe(e, u);
  return D < 0 ? void 0 : e[D][1];
}
function wF(u) {
  return Oe(this.__data__, u) > -1;
}
function $F(u, e) {
  var D = this.__data__, t = Oe(D, u);
  return t < 0 ? (++this.size, D.push([u, e])) : D[t][1] = e, this;
}
function Eu(u) {
  var e = -1, D = u == null ? 0 : u.length;
  for (this.clear(); ++e < D; ) {
    var t = u[e];
    this.set(t[0], t[1]);
  }
}
Eu.prototype.clear = mF;
Eu.prototype.delete = yF;
Eu.prototype.get = bF;
Eu.prototype.has = wF;
Eu.prototype.set = $F;
var xF = wu(su, "Map");
const ee = xF;
function OF() {
  this.size = 0, this.__data__ = {
    hash: new mu(),
    map: new (ee || Eu)(),
    string: new mu()
  };
}
function TF(u) {
  var e = typeof u;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? u !== "__proto__" : u === null;
}
function Te(u, e) {
  var D = u.__data__;
  return TF(e) ? D[typeof e == "string" ? "string" : "hash"] : D.map;
}
function SF(u) {
  var e = Te(this, u).delete(u);
  return this.size -= e ? 1 : 0, e;
}
function PF(u) {
  return Te(this, u).get(u);
}
function MF(u) {
  return Te(this, u).has(u);
}
function kF(u, e) {
  var D = Te(this, u), t = D.size;
  return D.set(u, e), this.size += D.size == t ? 0 : 1, this;
}
function Au(u) {
  var e = -1, D = u == null ? 0 : u.length;
  for (this.clear(); ++e < D; ) {
    var t = u[e];
    this.set(t[0], t[1]);
  }
}
Au.prototype.clear = OF;
Au.prototype.delete = SF;
Au.prototype.get = PF;
Au.prototype.has = MF;
Au.prototype.set = kF;
var IF = "Expected a function";
function D0(u, e) {
  if (typeof u != "function" || e != null && typeof e != "function")
    throw new TypeError(IF);
  var D = function() {
    var t = arguments, r = e ? e.apply(this, t) : t[0], n = D.cache;
    if (n.has(r))
      return n.get(r);
    var a = u.apply(this, t);
    return D.cache = n.set(r, a) || n, a;
  };
  return D.cache = new (D0.Cache || Au)(), D;
}
D0.Cache = Au;
var NF = 500;
function zF(u) {
  var e = D0(u, function(t) {
    return D.size === NF && D.clear(), t;
  }), D = e.cache;
  return e;
}
var jF = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, UF = /\\(\\)?/g, RF = zF(function(u) {
  var e = [];
  return u.charCodeAt(0) === 46 && e.push(""), u.replace(jF, function(D, t, r, n) {
    e.push(r ? n.replace(UF, "$1") : t || D);
  }), e;
});
const LF = RF;
function YF(u) {
  return u == null ? "" : yt(u);
}
function Se(u, e) {
  return J(u) ? u : e0(u, e) ? [u] : LF(YF(u));
}
var WF = 1 / 0;
function Ce(u) {
  if (typeof u == "string" || oe(u))
    return u;
  var e = u + "";
  return e == "0" && 1 / u == -WF ? "-0" : e;
}
function t0(u, e) {
  e = Se(e, u);
  for (var D = 0, t = e.length; u != null && D < t; )
    u = u[Ce(e[D++])];
  return D && D == t ? u : void 0;
}
function Nt(u, e, D) {
  var t = u == null ? void 0 : t0(u, e);
  return t === void 0 ? D : t;
}
function r0(u, e) {
  for (var D = -1, t = e.length, r = u.length; ++D < t; )
    u[r + D] = e[D];
  return u;
}
var P0 = eu ? eu.isConcatSpreadable : void 0;
function HF(u) {
  return J(u) || xe(u) || !!(P0 && u && u[P0]);
}
function n0(u, e, D, t, r) {
  var n = -1, a = u.length;
  for (D || (D = HF), r || (r = []); ++n < a; ) {
    var o = u[n];
    e > 0 && D(o) ? e > 1 ? n0(o, e - 1, D, t, r) : r0(r, o) : t || (r[r.length] = o);
  }
  return r;
}
function GF(u) {
  var e = u == null ? 0 : u.length;
  return e ? n0(u, 1) : [];
}
function qF(u) {
  return wt(Ot(u, void 0, GF), u + "");
}
var ZF = kt(Object.getPrototypeOf, Object);
const a0 = ZF;
var VF = "[object Object]", QF = Function.prototype, KF = Object.prototype, zt = QF.toString, JF = KF.hasOwnProperty, XF = zt.call(Object);
function u1(u) {
  if (!Cu(u) || yu(u) != VF)
    return !1;
  var e = a0(u);
  if (e === null)
    return !0;
  var D = JF.call(e, "constructor") && e.constructor;
  return typeof D == "function" && D instanceof D && zt.call(D) == XF;
}
function e1(u, e, D) {
  var t = -1, r = u.length;
  e < 0 && (e = -e > r ? 0 : r + e), D = D > r ? r : D, D < 0 && (D += r), r = e > D ? 0 : D - e >>> 0, e >>>= 0;
  for (var n = Array(r); ++t < r; )
    n[t] = u[t + e];
  return n;
}
function D1() {
  this.__data__ = new Eu(), this.size = 0;
}
function t1(u) {
  var e = this.__data__, D = e.delete(u);
  return this.size = e.size, D;
}
function r1(u) {
  return this.__data__.get(u);
}
function n1(u) {
  return this.__data__.has(u);
}
var a1 = 200;
function F1(u, e) {
  var D = this.__data__;
  if (D instanceof Eu) {
    var t = D.__data__;
    if (!ee || t.length < a1 - 1)
      return t.push([u, e]), this.size = ++D.size, this;
    D = this.__data__ = new Au(t);
  }
  return D.set(u, e), this.size = D.size, this;
}
function Fu(u) {
  var e = this.__data__ = new Eu(u);
  this.size = e.size;
}
Fu.prototype.clear = D1;
Fu.prototype.delete = t1;
Fu.prototype.get = r1;
Fu.prototype.has = n1;
Fu.prototype.set = F1;
function o1(u, e) {
  return u && se(e, zu(e), u);
}
function i1(u, e) {
  return u && se(e, u0(e), u);
}
var jt = typeof exports == "object" && exports && !exports.nodeType && exports, M0 = jt && typeof module == "object" && module && !module.nodeType && module, s1 = M0 && M0.exports === jt, k0 = s1 ? su.Buffer : void 0, I0 = k0 ? k0.allocUnsafe : void 0;
function l1(u, e) {
  if (e)
    return u.slice();
  var D = u.length, t = I0 ? I0(D) : new u.constructor(D);
  return u.copy(t), t;
}
function C1(u, e) {
  for (var D = -1, t = u == null ? 0 : u.length, r = 0, n = []; ++D < t; ) {
    var a = u[D];
    e(a, D, u) && (n[r++] = a);
  }
  return n;
}
function Ut() {
  return [];
}
var E1 = Object.prototype, A1 = E1.propertyIsEnumerable, N0 = Object.getOwnPropertySymbols, c1 = N0 ? function(u) {
  return u == null ? [] : (u = Object(u), C1(N0(u), function(e) {
    return A1.call(u, e);
  }));
} : Ut;
const F0 = c1;
function f1(u, e) {
  return se(u, F0(u), e);
}
var d1 = Object.getOwnPropertySymbols, B1 = d1 ? function(u) {
  for (var e = []; u; )
    r0(e, F0(u)), u = a0(u);
  return e;
} : Ut;
const Rt = B1;
function p1(u, e) {
  return se(u, Rt(u), e);
}
function Lt(u, e, D) {
  var t = e(u);
  return J(u) ? t : r0(t, D(u));
}
function DD(u) {
  return Lt(u, zu, F0);
}
function Yt(u) {
  return Lt(u, u0, Rt);
}
var h1 = wu(su, "DataView");
const tD = h1;
var g1 = wu(su, "Promise");
const rD = g1;
var m1 = wu(su, "Set");
const Mu = m1;
var z0 = "[object Map]", v1 = "[object Object]", j0 = "[object Promise]", U0 = "[object Set]", R0 = "[object WeakMap]", L0 = "[object DataView]", _1 = bu(tD), y1 = bu(ee), b1 = bu(rD), w1 = bu(Mu), $1 = bu(eD), hu = yu;
(tD && hu(new tD(new ArrayBuffer(1))) != L0 || ee && hu(new ee()) != z0 || rD && hu(rD.resolve()) != j0 || Mu && hu(new Mu()) != U0 || eD && hu(new eD()) != R0) && (hu = function(u) {
  var e = yu(u), D = e == v1 ? u.constructor : void 0, t = D ? bu(D) : "";
  if (t)
    switch (t) {
      case _1:
        return L0;
      case y1:
        return z0;
      case b1:
        return j0;
      case w1:
        return U0;
      case $1:
        return R0;
    }
  return e;
});
const vu = hu;
var x1 = Object.prototype, O1 = x1.hasOwnProperty;
function T1(u) {
  var e = u.length, D = new u.constructor(e);
  return e && typeof u[0] == "string" && O1.call(u, "index") && (D.index = u.index, D.input = u.input), D;
}
var S1 = su.Uint8Array;
const me = S1;
function o0(u) {
  var e = new u.constructor(u.byteLength);
  return new me(e).set(new me(u)), e;
}
function P1(u, e) {
  var D = e ? o0(u.buffer) : u.buffer;
  return new u.constructor(D, u.byteOffset, u.byteLength);
}
var M1 = /\w*$/;
function k1(u) {
  var e = new u.constructor(u.source, M1.exec(u));
  return e.lastIndex = u.lastIndex, e;
}
var Y0 = eu ? eu.prototype : void 0, W0 = Y0 ? Y0.valueOf : void 0;
function I1(u) {
  return W0 ? Object(W0.call(u)) : {};
}
function N1(u, e) {
  var D = e ? o0(u.buffer) : u.buffer;
  return new u.constructor(D, u.byteOffset, u.length);
}
var z1 = "[object Boolean]", j1 = "[object Date]", U1 = "[object Map]", R1 = "[object Number]", L1 = "[object RegExp]", Y1 = "[object Set]", W1 = "[object String]", H1 = "[object Symbol]", G1 = "[object ArrayBuffer]", q1 = "[object DataView]", Z1 = "[object Float32Array]", V1 = "[object Float64Array]", Q1 = "[object Int8Array]", K1 = "[object Int16Array]", J1 = "[object Int32Array]", X1 = "[object Uint8Array]", uo = "[object Uint8ClampedArray]", eo = "[object Uint16Array]", Do = "[object Uint32Array]";
function to(u, e, D) {
  var t = u.constructor;
  switch (e) {
    case G1:
      return o0(u);
    case z1:
    case j1:
      return new t(+u);
    case q1:
      return P1(u, D);
    case Z1:
    case V1:
    case Q1:
    case K1:
    case J1:
    case X1:
    case uo:
    case eo:
    case Do:
      return N1(u, D);
    case U1:
      return new t();
    case R1:
    case W1:
      return new t(u);
    case L1:
      return k1(u);
    case Y1:
      return new t();
    case H1:
      return I1(u);
  }
}
function ro(u) {
  return typeof u.constructor == "function" && !$e(u) ? Yn(a0(u)) : {};
}
var no = "[object Map]";
function ao(u) {
  return Cu(u) && vu(u) == no;
}
var H0 = Iu && Iu.isMap, Fo = H0 ? JD(H0) : ao;
const oo = Fo;
var io = "[object Set]";
function so(u) {
  return Cu(u) && vu(u) == io;
}
var G0 = Iu && Iu.isSet, lo = G0 ? JD(G0) : so;
const Co = lo;
var Eo = 1, Ao = 2, co = 4, Wt = "[object Arguments]", fo = "[object Array]", Bo = "[object Boolean]", po = "[object Date]", ho = "[object Error]", Ht = "[object Function]", go = "[object GeneratorFunction]", mo = "[object Map]", vo = "[object Number]", Gt = "[object Object]", _o = "[object RegExp]", yo = "[object Set]", bo = "[object String]", wo = "[object Symbol]", $o = "[object WeakMap]", xo = "[object ArrayBuffer]", Oo = "[object DataView]", To = "[object Float32Array]", So = "[object Float64Array]", Po = "[object Int8Array]", Mo = "[object Int16Array]", ko = "[object Int32Array]", Io = "[object Uint8Array]", No = "[object Uint8ClampedArray]", zo = "[object Uint16Array]", jo = "[object Uint32Array]", P = {};
P[Wt] = P[fo] = P[xo] = P[Oo] = P[Bo] = P[po] = P[To] = P[So] = P[Po] = P[Mo] = P[ko] = P[mo] = P[vo] = P[Gt] = P[_o] = P[yo] = P[bo] = P[wo] = P[Io] = P[No] = P[zo] = P[jo] = !0;
P[ho] = P[Ht] = P[$o] = !1;
function Be(u, e, D, t, r, n) {
  var a, o = e & Eo, i = e & Ao, F = e & co;
  if (D && (a = r ? D(u, t, r, n) : D(u)), a !== void 0)
    return a;
  if (!du(u))
    return u;
  var s = J(u);
  if (s) {
    if (a = T1(u), !o)
      return Gn(u, a);
  } else {
    var l = vu(u), A = l == Ht || l == go;
    if (Xu(u))
      return l1(u, o);
    if (l == Gt || l == Wt || A && !r) {
      if (a = i || A ? {} : ro(u), !o)
        return i ? p1(u, i1(a, u)) : f1(u, o1(a, u));
    } else {
      if (!P[l])
        return r ? u : {};
      a = to(u, l, o);
    }
  }
  n || (n = new Fu());
  var f = n.get(u);
  if (f)
    return f;
  n.set(u, a), Co(u) ? u.forEach(function(E) {
    a.add(Be(E, e, D, E, u, n));
  }) : oo(u) && u.forEach(function(E, c) {
    a.set(c, Be(E, e, D, c, u, n));
  });
  var C = F ? i ? Yt : DD : i ? u0 : zu, d = s ? void 0 : C(u);
  return Da(d || u, function(E, c) {
    d && (c = E, E = u[c]), xt(a, c, Be(E, e, D, c, u, n));
  }), a;
}
var Uo = "__lodash_hash_undefined__";
function Ro(u) {
  return this.__data__.set(u, Uo), this;
}
function Lo(u) {
  return this.__data__.has(u);
}
function De(u) {
  var e = -1, D = u == null ? 0 : u.length;
  for (this.__data__ = new Au(); ++e < D; )
    this.add(u[e]);
}
De.prototype.add = De.prototype.push = Ro;
De.prototype.has = Lo;
function Yo(u, e) {
  for (var D = -1, t = u == null ? 0 : u.length; ++D < t; )
    if (e(u[D], D, u))
      return !0;
  return !1;
}
function qt(u, e) {
  return u.has(e);
}
var Wo = 1, Ho = 2;
function Zt(u, e, D, t, r, n) {
  var a = D & Wo, o = u.length, i = e.length;
  if (o != i && !(a && i > o))
    return !1;
  var F = n.get(u), s = n.get(e);
  if (F && s)
    return F == e && s == u;
  var l = -1, A = !0, f = D & Ho ? new De() : void 0;
  for (n.set(u, e), n.set(e, u); ++l < o; ) {
    var C = u[l], d = e[l];
    if (t)
      var E = a ? t(d, C, l, e, u, n) : t(C, d, l, u, e, n);
    if (E !== void 0) {
      if (E)
        continue;
      A = !1;
      break;
    }
    if (f) {
      if (!Yo(e, function(c, h) {
        if (!qt(f, h) && (C === c || r(C, c, D, t, n)))
          return f.push(h);
      })) {
        A = !1;
        break;
      }
    } else if (!(C === d || r(C, d, D, t, n))) {
      A = !1;
      break;
    }
  }
  return n.delete(u), n.delete(e), A;
}
function Vt(u) {
  var e = -1, D = Array(u.size);
  return u.forEach(function(t, r) {
    D[++e] = [r, t];
  }), D;
}
function i0(u) {
  var e = -1, D = Array(u.size);
  return u.forEach(function(t) {
    D[++e] = t;
  }), D;
}
var Go = 1, qo = 2, Zo = "[object Boolean]", Vo = "[object Date]", Qo = "[object Error]", Ko = "[object Map]", Jo = "[object Number]", Xo = "[object RegExp]", ui = "[object Set]", ei = "[object String]", Di = "[object Symbol]", ti = "[object ArrayBuffer]", ri = "[object DataView]", q0 = eu ? eu.prototype : void 0, Ze = q0 ? q0.valueOf : void 0;
function ni(u, e, D, t, r, n, a) {
  switch (D) {
    case ri:
      if (u.byteLength != e.byteLength || u.byteOffset != e.byteOffset)
        return !1;
      u = u.buffer, e = e.buffer;
    case ti:
      return !(u.byteLength != e.byteLength || !n(new me(u), new me(e)));
    case Zo:
    case Vo:
    case Jo:
      return QD(+u, +e);
    case Qo:
      return u.name == e.name && u.message == e.message;
    case Xo:
    case ei:
      return u == e + "";
    case Ko:
      var o = Vt;
    case ui:
      var i = t & Go;
      if (o || (o = i0), u.size != e.size && !i)
        return !1;
      var F = a.get(u);
      if (F)
        return F == e;
      t |= qo, a.set(u, e);
      var s = Zt(o(u), o(e), t, r, n, a);
      return a.delete(u), s;
    case Di:
      if (Ze)
        return Ze.call(u) == Ze.call(e);
  }
  return !1;
}
var ai = 1, Fi = Object.prototype, oi = Fi.hasOwnProperty;
function ii(u, e, D, t, r, n) {
  var a = D & ai, o = DD(u), i = o.length, F = DD(e), s = F.length;
  if (i != s && !a)
    return !1;
  for (var l = i; l--; ) {
    var A = o[l];
    if (!(a ? A in e : oi.call(e, A)))
      return !1;
  }
  var f = n.get(u), C = n.get(e);
  if (f && C)
    return f == e && C == u;
  var d = !0;
  n.set(u, e), n.set(e, u);
  for (var E = a; ++l < i; ) {
    A = o[l];
    var c = u[A], h = e[A];
    if (t)
      var B = a ? t(h, c, A, e, u, n) : t(c, h, A, u, e, n);
    if (!(B === void 0 ? c === h || r(c, h, D, t, n) : B)) {
      d = !1;
      break;
    }
    E || (E = A == "constructor");
  }
  if (d && !E) {
    var p = u.constructor, m = e.constructor;
    p != m && "constructor" in u && "constructor" in e && !(typeof p == "function" && p instanceof p && typeof m == "function" && m instanceof m) && (d = !1);
  }
  return n.delete(u), n.delete(e), d;
}
var si = 1, Z0 = "[object Arguments]", V0 = "[object Array]", de = "[object Object]", li = Object.prototype, Q0 = li.hasOwnProperty;
function Ci(u, e, D, t, r, n) {
  var a = J(u), o = J(e), i = a ? V0 : vu(u), F = o ? V0 : vu(e);
  i = i == Z0 ? de : i, F = F == Z0 ? de : F;
  var s = i == de, l = F == de, A = i == F;
  if (A && Xu(u)) {
    if (!Xu(e))
      return !1;
    a = !0, s = !1;
  }
  if (A && !s)
    return n || (n = new Fu()), a || XD(u) ? Zt(u, e, D, t, r, n) : ni(u, e, i, D, t, r, n);
  if (!(D & si)) {
    var f = s && Q0.call(u, "__wrapped__"), C = l && Q0.call(e, "__wrapped__");
    if (f || C) {
      var d = f ? u.value() : u, E = C ? e.value() : e;
      return n || (n = new Fu()), r(d, E, D, t, n);
    }
  }
  return A ? (n || (n = new Fu()), ii(u, e, D, t, r, n)) : !1;
}
function s0(u, e, D, t, r) {
  return u === e ? !0 : u == null || e == null || !Cu(u) && !Cu(e) ? u !== u && e !== e : Ci(u, e, D, t, s0, r);
}
var Ei = 1, Ai = 2;
function ci(u, e, D, t) {
  var r = D.length, n = r, a = !t;
  if (u == null)
    return !n;
  for (u = Object(u); r--; ) {
    var o = D[r];
    if (a && o[2] ? o[1] !== u[o[0]] : !(o[0] in u))
      return !1;
  }
  for (; ++r < n; ) {
    o = D[r];
    var i = o[0], F = u[i], s = o[1];
    if (a && o[2]) {
      if (F === void 0 && !(i in u))
        return !1;
    } else {
      var l = new Fu();
      if (t)
        var A = t(F, s, i, u, e, l);
      if (!(A === void 0 ? s0(s, F, Ei | Ai, t, l) : A))
        return !1;
    }
  }
  return !0;
}
function Qt(u) {
  return u === u && !du(u);
}
function fi(u) {
  for (var e = zu(u), D = e.length; D--; ) {
    var t = e[D], r = u[t];
    e[D] = [t, r, Qt(r)];
  }
  return e;
}
function Kt(u, e) {
  return function(D) {
    return D == null ? !1 : D[u] === e && (e !== void 0 || u in Object(D));
  };
}
function di(u) {
  var e = fi(u);
  return e.length == 1 && e[0][2] ? Kt(e[0][0], e[0][1]) : function(D) {
    return D === u || ci(D, u, e);
  };
}
function Bi(u, e) {
  return u != null && e in Object(u);
}
function pi(u, e, D) {
  e = Se(e, u);
  for (var t = -1, r = e.length, n = !1; ++t < r; ) {
    var a = Ce(e[t]);
    if (!(n = u != null && D(u, a)))
      break;
    u = u[a];
  }
  return n || ++t != r ? n : (r = u == null ? 0 : u.length, !!r && KD(r) && $t(a, r) && (J(u) || xe(u)));
}
function hi(u, e) {
  return u != null && pi(u, e, Bi);
}
var gi = 1, mi = 2;
function vi(u, e) {
  return e0(u) && Qt(e) ? Kt(Ce(u), e) : function(D) {
    var t = Nt(D, u);
    return t === void 0 && t === e ? hi(D, u) : s0(e, t, gi | mi);
  };
}
function _i(u) {
  return function(e) {
    return e == null ? void 0 : e[u];
  };
}
function yi(u) {
  return function(e) {
    return t0(e, u);
  };
}
function bi(u) {
  return e0(u) ? _i(Ce(u)) : yi(u);
}
function Jt(u) {
  return typeof u == "function" ? u : u == null ? ie : typeof u == "object" ? J(u) ? vi(u[0], u[1]) : di(u) : bi(u);
}
function wi(u, e, D, t) {
  for (var r = -1, n = u == null ? 0 : u.length; ++r < n; ) {
    var a = u[r];
    e(t, a, D(a), u);
  }
  return t;
}
function $i(u) {
  return function(e, D, t) {
    for (var r = -1, n = Object(e), a = t(e), o = a.length; o--; ) {
      var i = a[u ? o : ++r];
      if (D(n[i], i, n) === !1)
        break;
    }
    return e;
  };
}
var xi = $i();
const Oi = xi;
function Ti(u, e) {
  return u && Oi(u, e, zu);
}
function Si(u, e) {
  return function(D, t) {
    if (D == null)
      return D;
    if (!le(D))
      return u(D, t);
    for (var r = D.length, n = e ? r : -1, a = Object(D); (e ? n-- : ++n < r) && t(a[n], n, a) !== !1; )
      ;
    return D;
  };
}
var Pi = Si(Ti);
const Xt = Pi;
function Mi(u, e, D, t) {
  return Xt(u, function(r, n, a) {
    e(t, r, D(r), a);
  }), t;
}
function ki(u, e) {
  return function(D, t) {
    var r = J(D) ? wi : Mi, n = e ? e() : {};
    return r(D, u, Jt(t), n);
  };
}
var Ii = "Expected a function";
function Ni(u, e, D) {
  if (typeof u != "function")
    throw new TypeError(Ii);
  return setTimeout(function() {
    u.apply(void 0, D);
  }, e);
}
var zi = Ca(function(u, e, D) {
  return Ni(u, vn(e) || 0, D);
});
const l0 = zi;
function ji(u, e, D) {
  for (var t = -1, r = u == null ? 0 : u.length; ++t < r; )
    if (D(e, u[t]))
      return !0;
  return !1;
}
function nD(u) {
  var e = u == null ? 0 : u.length;
  return e ? u[e - 1] : void 0;
}
function Ui(u, e) {
  return we(e, function(D) {
    return [D, u[D]];
  });
}
function Ri(u) {
  var e = -1, D = Array(u.size);
  return u.forEach(function(t) {
    D[++e] = [t, t];
  }), D;
}
var Li = "[object Map]", Yi = "[object Set]";
function Wi(u) {
  return function(e) {
    var D = vu(e);
    return D == Li ? Vt(e) : D == Yi ? Ri(e) : Ui(e, u(e));
  };
}
var Hi = Wi(zu);
const Zu = Hi;
function Gi(u, e) {
  var D = -1, t = le(u) ? Array(u.length) : [];
  return Xt(u, function(r, n, a) {
    t[++D] = e(r, n, a);
  }), t;
}
function te(u, e) {
  var D = J(u) ? we : Gi;
  return D(u, Jt(e));
}
function ur(u, e) {
  return n0(te(u, e), 1);
}
var qi = Object.prototype, Zi = qi.hasOwnProperty, Vi = ki(function(u, e, D) {
  Zi.call(u, D) ? u[D].push(e) : VD(u, D, [e]);
});
const Qi = Vi;
function Ki(u, e) {
  return u > e;
}
function Ji(u, e) {
  return e.length < 2 ? u : t0(u, e1(e, 0, -1));
}
var Xi = "[object Map]", us = "[object Set]", es = Object.prototype, Ds = es.hasOwnProperty;
function Vu(u) {
  if (u == null)
    return !0;
  if (le(u) && (J(u) || typeof u == "string" || typeof u.splice == "function" || Xu(u) || XD(u) || xe(u)))
    return !u.length;
  var e = vu(u);
  if (e == Xi || e == us)
    return !u.size;
  if ($e(u))
    return !It(u).length;
  for (var D in u)
    if (Ds.call(u, D))
      return !1;
  return !0;
}
var ts = Array.prototype, rs = ts.join;
function ns(u, e) {
  return u == null ? "" : rs.call(u, e);
}
function as(u, e) {
  return u < e;
}
function er(u, e, D) {
  for (var t = -1, r = u.length; ++t < r; ) {
    var n = u[t], a = e(n);
    if (a != null && (o === void 0 ? a === a && !oe(a) : D(a, o)))
      var o = a, i = n;
  }
  return i;
}
function Fs(u) {
  return u && u.length ? er(u, ie, Ki) : void 0;
}
function os(u) {
  return u && u.length ? er(u, ie, as) : void 0;
}
function is(u, e) {
  return e = Se(e, u), u = Ji(u, e), u == null || delete u[Ce(nD(e))];
}
function ss(u) {
  return u1(u) ? void 0 : u;
}
var ls = 1, Cs = 2, Es = 4, As = qF(function(u, e) {
  var D = {};
  if (u == null)
    return D;
  var t = !1;
  e = we(e, function(n) {
    return n = Se(n, u), t || (t = n.length > 1), n;
  }), se(u, Yt(u), D), t && (D = Be(D, ls | Cs | Es, ss));
  for (var r = e.length; r--; )
    is(D, e[r]);
  return D;
});
const Dr = As;
var cs = 1 / 0, fs = Mu && 1 / i0(new Mu([, -0]))[1] == cs ? function(u) {
  return new Mu(u);
} : Hn;
const ds = fs;
var Bs = 200;
function ps(u, e, D) {
  var t = -1, r = Fa, n = u.length, a = !0, o = [], i = o;
  if (D)
    a = !1, r = ji;
  else if (n >= Bs) {
    var F = e ? null : ds(u);
    if (F)
      return i0(F);
    a = !1, r = qt, i = new De();
  } else
    i = e ? [] : o;
  u:
    for (; ++t < n; ) {
      var s = u[t], l = e ? e(s) : s;
      if (s = D || s !== 0 ? s : 0, a && l === l) {
        for (var A = i.length; A--; )
          if (i[A] === l)
            continue u;
        e && i.push(l), o.push(s);
      } else
        r(i, l, D) || (i !== o && i.push(l), o.push(s));
    }
  return o;
}
function tr(u) {
  return u && u.length ? ps(u) : [];
}
var hs = Object.defineProperty, gs = Object.defineProperties, ms = Object.getOwnPropertyDescriptors, K0 = Object.getOwnPropertySymbols, vs = Object.prototype.hasOwnProperty, _s = Object.prototype.propertyIsEnumerable, J0 = (u, e, D) => e in u ? hs(u, e, { enumerable: !0, configurable: !0, writable: !0, value: D }) : u[e] = D, ys = (u, e) => {
  for (var D in e || (e = {}))
    vs.call(e, D) && J0(u, D, e[D]);
  if (K0)
    for (var D of K0(e))
      _s.call(e, D) && J0(u, D, e[D]);
  return u;
}, bs = (u, e) => gs(u, ms(e));
function L(u, e) {
  var D;
  const t = Lr();
  return ht(() => {
    t.value = u();
  }, bs(ys({}, e), {
    flush: (D = e == null ? void 0 : e.flush) != null ? D : "sync"
  })), Yr(t);
}
function ws(u) {
  return Wr() ? (Hr(u), !0) : !1;
}
function $s(u) {
  return typeof u == "function" ? u() : g(u);
}
const xs = typeof window < "u";
function Qu(u) {
  var e;
  const D = $s(u);
  return (e = D == null ? void 0 : D.$el) != null ? e : D;
}
const rr = xs ? window : void 0;
function Os() {
  const u = ou(!1);
  return Gr() && qD(() => {
    u.value = !0;
  }), u;
}
function Ts(u) {
  const e = Os();
  return gu(() => (e.value, !!u()));
}
var X0 = Object.getOwnPropertySymbols, Ss = Object.prototype.hasOwnProperty, Ps = Object.prototype.propertyIsEnumerable, Ms = (u, e) => {
  var D = {};
  for (var t in u)
    Ss.call(u, t) && e.indexOf(t) < 0 && (D[t] = u[t]);
  if (u != null && X0)
    for (var t of X0(u))
      e.indexOf(t) < 0 && Ps.call(u, t) && (D[t] = u[t]);
  return D;
};
function ks(u, e, D = {}) {
  const t = D, { window: r = rr } = t, n = Ms(t, ["window"]);
  let a;
  const o = Ts(() => r && "ResizeObserver" in r), i = () => {
    a && (a.disconnect(), a = void 0);
  }, F = gu(
    () => Array.isArray(u) ? u.map((A) => Qu(A)) : [Qu(u)]
  ), s = he(
    F,
    (A) => {
      if (i(), o.value && r) {
        a = new ResizeObserver(e);
        for (const f of A)
          f && a.observe(f, n);
      }
    },
    { immediate: !0, flush: "post", deep: !0 }
  ), l = () => {
    i(), s();
  };
  return ws(l), {
    isSupported: o,
    stop: l
  };
}
function Pe(u, e = { width: 0, height: 0 }, D = {}) {
  const { window: t = rr, box: r = "content-box" } = D, n = gu(() => {
    var i, F;
    return (F = (i = Qu(u)) == null ? void 0 : i.namespaceURI) == null ? void 0 : F.includes("svg");
  }), a = ou(e.width), o = ou(e.height);
  return ks(
    u,
    ([i]) => {
      const F = r === "border-box" ? i.borderBoxSize : r === "content-box" ? i.contentBoxSize : i.devicePixelContentBoxSize;
      if (t && n.value) {
        const s = Qu(u);
        if (s) {
          const l = t.getComputedStyle(s);
          a.value = parseFloat(l.width), o.value = parseFloat(l.height);
        }
      } else if (F) {
        const s = Array.isArray(F) ? F : [F];
        a.value = s.reduce((l, { inlineSize: A }) => l + A, 0), o.value = s.reduce((l, { blockSize: A }) => l + A, 0);
      } else
        a.value = i.contentRect.width, o.value = i.contentRect.height;
    },
    D
  ), he(
    () => Qu(u),
    (i) => {
      a.value = i ? e.width : 0, o.value = i ? e.height : 0;
    }
  ), {
    width: a,
    height: o
  };
}
const nr = /* @__PURE__ */ H({
  __name: "BaseLink",
  props: {
    link: {},
    external: { type: Boolean, default: void 0 }
  },
  setup(u) {
    const e = u, D = L(
      () => e.external ?? /^(https?:\/\/)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&//=]*)$/.test(e.link || "")
    );
    return (t, r) => (w(), nu(qr(e.link ? g(D) ? "a" : "RouterLink" : "div"), Zr(Vr(
      e.link ? {
        [g(D) ? "href" : "to"]: e.link,
        ...g(D) ? {
          target: "_blank",
          rel: "noopener noreferrer"
        } : {}
      } : {}
    )), {
      default: K(() => [
        Ju(t.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Is = ["width", "height"], Ns = /* @__PURE__ */ H({
  __name: "BasePoly",
  props: {
    height: {},
    width: {}
  },
  setup(u) {
    const e = u;
    return (D, t) => (w(), $("svg", {
      class: _(D.$style["poly-wrapper"]),
      width: e.width,
      height: e.height,
      preserveAspectRatio: "xMinYMin",
      "color-profile": "sRGB",
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      v("defs", null, [
        Ju(D.$slots, "defs", {}, void 0, !0)
      ]),
      Ju(D.$slots, "path", {}, void 0, !0)
    ], 10, Is));
  }
}), zs = {
  "poly-wrapper": "_poly-wrapper_14erz_1"
}, Du = (u, e) => {
  const D = u.__vccOpts || u;
  for (const [t, r] of e)
    D[t] = r;
  return D;
}, js = {
  $style: zs
}, Me = /* @__PURE__ */ Du(Ns, [["__cssModules", js], ["__scopeId", "data-v-ac9d4bad"]]), ar = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), Fr = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), C0 = Object.freeze({
  ...ar,
  ...Fr
});
Object.freeze({
  ...C0,
  body: "",
  hidden: !1
});
({
  ...ar
});
const or = Object.freeze({
  width: null,
  height: null
}), ir = Object.freeze({
  // Dimensions
  ...or,
  // Transformations
  ...Fr
});
function Us(u, e) {
  const D = {
    ...u
  };
  for (const t in e) {
    const r = e[t], n = typeof r;
    t in or ? (r === null || r && (n === "string" || n === "number")) && (D[t] = r) : n === typeof D[t] && (D[t] = t === "rotate" ? r % 4 : r);
  }
  return D;
}
const Rs = /[\s,]+/;
function Ls(u, e) {
  e.split(Rs).forEach((D) => {
    switch (D.trim()) {
      case "horizontal":
        u.hFlip = !0;
        break;
      case "vertical":
        u.vFlip = !0;
        break;
    }
  });
}
function Ys(u, e = 0) {
  const D = u.replace(/^-?[0-9.]*/, "");
  function t(r) {
    for (; r < 0; )
      r += 4;
    return r % 4;
  }
  if (D === "") {
    const r = parseInt(u);
    return isNaN(r) ? 0 : t(r);
  } else if (D !== u) {
    let r = 0;
    switch (D) {
      case "%":
        r = 25;
        break;
      case "deg":
        r = 90;
    }
    if (r) {
      let n = parseFloat(u.slice(0, u.length - D.length));
      return isNaN(n) ? 0 : (n = n / r, n % 1 === 0 ? t(n) : 0);
    }
  }
  return e;
}
const Ws = /(-?[0-9.]*[0-9]+[0-9.]*)/g, Hs = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function ut(u, e, D) {
  if (e === 1)
    return u;
  if (D = D || 100, typeof u == "number")
    return Math.ceil(u * e * D) / D;
  if (typeof u != "string")
    return u;
  const t = u.split(Ws);
  if (t === null || !t.length)
    return u;
  const r = [];
  let n = t.shift(), a = Hs.test(n);
  for (; ; ) {
    if (a) {
      const o = parseFloat(n);
      isNaN(o) ? r.push(n) : r.push(Math.ceil(o * e * D) / D);
    } else
      r.push(n);
    if (n = t.shift(), n === void 0)
      return r.join("");
    a = !a;
  }
}
const Gs = (u) => u === "unset" || u === "undefined" || u === "none";
function qs(u, e) {
  const D = {
    ...C0,
    ...u
  }, t = {
    ...ir,
    ...e
  }, r = {
    left: D.left,
    top: D.top,
    width: D.width,
    height: D.height
  };
  let n = D.body;
  [D, t].forEach((C) => {
    const d = [], E = C.hFlip, c = C.vFlip;
    let h = C.rotate;
    E ? c ? h += 2 : (d.push(
      "translate(" + (r.width + r.left).toString() + " " + (0 - r.top).toString() + ")"
    ), d.push("scale(-1 1)"), r.top = r.left = 0) : c && (d.push(
      "translate(" + (0 - r.left).toString() + " " + (r.height + r.top).toString() + ")"
    ), d.push("scale(1 -1)"), r.top = r.left = 0);
    let B;
    switch (h < 0 && (h -= Math.floor(h / 4) * 4), h = h % 4, h) {
      case 1:
        B = r.height / 2 + r.top, d.unshift(
          "rotate(90 " + B.toString() + " " + B.toString() + ")"
        );
        break;
      case 2:
        d.unshift(
          "rotate(180 " + (r.width / 2 + r.left).toString() + " " + (r.height / 2 + r.top).toString() + ")"
        );
        break;
      case 3:
        B = r.width / 2 + r.left, d.unshift(
          "rotate(-90 " + B.toString() + " " + B.toString() + ")"
        );
        break;
    }
    h % 2 === 1 && (r.left !== r.top && (B = r.left, r.left = r.top, r.top = B), r.width !== r.height && (B = r.width, r.width = r.height, r.height = B)), d.length && (n = '<g transform="' + d.join(" ") + '">' + n + "</g>");
  });
  const a = t.width, o = t.height, i = r.width, F = r.height;
  let s, l;
  a === null ? (l = o === null ? "1em" : o === "auto" ? F : o, s = ut(l, i / F)) : (s = a === "auto" ? i : a, l = o === null ? ut(s, F / i) : o === "auto" ? F : o);
  const A = {}, f = (C, d) => {
    Gs(d) || (A[C] = d.toString());
  };
  return f("width", s), f("height", l), A.viewBox = r.left.toString() + " " + r.top.toString() + " " + i.toString() + " " + F.toString(), {
    attributes: A,
    body: n
  };
}
const Zs = /\sid="(\S+)"/g, Vs = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let Qs = 0;
function Ks(u, e = Vs) {
  const D = [];
  let t;
  for (; t = Zs.exec(u); )
    D.push(t[1]);
  if (!D.length)
    return u;
  const r = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return D.forEach((n) => {
    const a = typeof e == "function" ? e(n) : e + (Qs++).toString(), o = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    u = u.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + o + ')([")]|\\.[a-z])', "g"),
      "$1" + a + r + "$3"
    );
  }), u = u.replace(new RegExp(r, "g"), ""), u;
}
function Js(u, e) {
  let D = u.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const t in e)
    D += " " + t + '="' + e[t] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + D + ">" + u + "</svg>";
}
function Xs(u) {
  return u.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function ul(u) {
  return "data:image/svg+xml," + Xs(u);
}
function el(u) {
  return 'url("' + ul(u) + '")';
}
const et = {
  ...ir,
  inline: !1
}, Dl = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, tl = {
  display: "inline-block"
}, aD = {
  backgroundColor: "currentColor"
}, sr = {
  backgroundColor: "transparent"
}, Dt = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, tt = {
  webkitMask: aD,
  mask: aD,
  background: sr
};
for (const u in tt) {
  const e = tt[u];
  for (const D in Dt)
    e[u + D] = Dt[D];
}
const pe = {};
["horizontal", "vertical"].forEach((u) => {
  const e = u.slice(0, 1) + "Flip";
  pe[u + "-flip"] = e, pe[u.slice(0, 1) + "-flip"] = e, pe[u + "Flip"] = e;
});
function rt(u) {
  return u + (u.match(/^[-0-9.]+$/) ? "px" : "");
}
const rl = (u, e) => {
  const D = Us(et, e), t = { ...Dl }, r = e.mode || "svg", n = {}, a = e.style, o = typeof a == "object" && !(a instanceof Array) ? a : {};
  for (let d in e) {
    const E = e[d];
    if (E !== void 0)
      switch (d) {
        case "icon":
        case "style":
        case "onLoad":
        case "mode":
          break;
        case "inline":
        case "hFlip":
        case "vFlip":
          D[d] = E === !0 || E === "true" || E === 1;
          break;
        case "flip":
          typeof E == "string" && Ls(D, E);
          break;
        case "color":
          n.color = E;
          break;
        case "rotate":
          typeof E == "string" ? D[d] = Ys(E) : typeof E == "number" && (D[d] = E);
          break;
        case "ariaHidden":
        case "aria-hidden":
          E !== !0 && E !== "true" && delete t["aria-hidden"];
          break;
        default: {
          const c = pe[d];
          c ? (E === !0 || E === "true" || E === 1) && (D[c] = !0) : et[d] === void 0 && (t[d] = E);
        }
      }
  }
  const i = qs(u, D), F = i.attributes;
  if (D.inline && (n.verticalAlign = "-0.125em"), r === "svg") {
    t.style = {
      ...n,
      ...o
    }, Object.assign(t, F);
    let d = 0, E = e.id;
    return typeof E == "string" && (E = E.replace(/-/g, "_")), t.innerHTML = Ks(i.body, E ? () => E + "ID" + d++ : "iconifyVue"), g0("svg", t);
  }
  const { body: s, width: l, height: A } = u, f = r === "mask" || (r === "bg" ? !1 : s.indexOf("currentColor") !== -1), C = Js(s, {
    ...F,
    width: l + "",
    height: A + ""
  });
  return t.style = {
    ...n,
    "--svg": el(C),
    width: rt(F.width),
    height: rt(F.height),
    ...tl,
    ...f ? aD : sr,
    ...o
  }, g0("span", t);
}, nl = /* @__PURE__ */ Object.create(null), re = H({
  // Do not inherit other attributes: it is handled by render()
  inheritAttrs: !1,
  // Render icon
  render() {
    const u = this.$attrs, e = u.icon, D = typeof e == "string" ? nl[e] : typeof e == "object" ? e : null;
    return D === null || typeof D != "object" || typeof D.body != "string" ? this.$slots.default ? this.$slots.default() : null : rl({
      ...C0,
      ...D
    }, u);
  }
}), al = /* @__PURE__ */ H({
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
  setup(u, { emit: e }) {
    const D = u, { triggered: t, onTrigger: r } = ZD((n) => {
      D.disabled ? (n.preventDefault(), n.stopPropagation()) : e("click", n);
    });
    return (n, a) => (w(), nu(nr, gt({
      ref: "wrapperRef$",
      link: D.link,
      class: [
        n.$style["button-container"],
        n.$style.behavior,
        n.$style[D.variant],
        n.$style[D.level],
        n.$style[D.size],
        D.disabled ? [n.$style.disabled] : [n.$style.clickable],
        {
          [n.$style.clicked]: D.clicked || g(t)()
        }
      ],
      "aria-disabled": D.disabled,
      "aria-label": D.label,
      onClick: g(r)
    }, D.disabled ? { disabled: "" } : {}, {
      role: "button",
      tabindex: "0"
    }), {
      default: K(() => [
        D.label ? (w(), $("span", {
          key: 0,
          class: _([n.$style["button-content"]])
        }, U(D.label), 3)) : z("", !0),
        D.icon ? (w(), $("span", {
          key: 1,
          class: _([n.$style["button-icon"]])
        }, [
          Q(g(re), {
            icon: D.icon
          }, null, 8, ["icon"])
        ], 2)) : z("", !0)
      ]),
      _: 1
    }, 16, ["link", "class", "aria-disabled", "aria-label", "onClick"]));
  }
}), Fl = "_behavior_gs1bz_1", ol = "_clickable_gs1bz_1", il = "_disabled_gs1bz_4", sl = "_draggable_gs1bz_7", ll = "_loading_gs1bz_10", Cl = "_rounded_gs1bz_14", El = "_secondary_gs1bz_14", Al = "_rect_gs1bz_14", cl = "_square_gs1bz_14", fl = "_circle_gs1bz_14", dl = "_clicked_gs1bz_22", Bl = "_small_gs1bz_144", pl = "_large_gs1bz_148", hl = "_text_gs1bz_260", gl = {
  behavior: Fl,
  clickable: ol,
  disabled: il,
  draggable: sl,
  loading: ll,
  "button-container": "_button-container_gs1bz_14",
  rounded: Cl,
  secondary: El,
  rect: Al,
  square: cl,
  circle: fl,
  clicked: dl,
  "button-icon": "_button-icon_gs1bz_99",
  "button-content": "_button-content_gs1bz_115",
  small: Bl,
  large: pl,
  text: hl
}, ml = {
  $style: gl
}, lr = /* @__PURE__ */ Du(al, [["__cssModules", ml], ["__scopeId", "data-v-538a7a2c"]]), vl = /* @__PURE__ */ H({
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
    const e = u;
    Qr((r) => ({
      aaa9167e: e.radius
    }));
    const { triggered: D, onTrigger: t } = ZD();
    return (r, n) => (w(), nu(nr, {
      ref: "wrapperRef$",
      link: e.link,
      class: _([
        r.$style["card-container"],
        r.$style.behavior,
        r.$style[e.variant],
        r.$style[`color-${e.color}`],
        r.$style[`stroke-${e.strokeWeight}`],
        r.$style[`purpose-${e.purpose}`],
        {
          [r.$style.clickable]: e.link || e.clickable,
          [r.$style["has-stroke"]]: e.hasStroke,
          [r.$style.clicked]: g(D)()
        }
      ]),
      onClick: g(t)
    }, {
      default: K(() => [
        Ju(r.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["link", "class", "onClick"]));
  }
}), _l = "_behavior_ouh7m_1", yl = "_clickable_ouh7m_1", bl = "_disabled_ouh7m_4", wl = "_draggable_ouh7m_7", $l = "_loading_ouh7m_10", xl = "_metallic_ouh7m_14", Ol = "_flat_ouh7m_14", Tl = "_clicked_ouh7m_22", Sl = "_dash_ouh7m_92", Pl = {
  behavior: _l,
  clickable: yl,
  disabled: bl,
  draggable: wl,
  loading: $l,
  "card-container": "_card-container_ouh7m_14",
  "color-default": "_color-default_ouh7m_14",
  metallic: xl,
  "has-stroke": "_has-stroke_ouh7m_14",
  flat: Ol,
  "color-cyan": "_color-cyan_ouh7m_14",
  "color-blue": "_color-blue_ouh7m_14",
  "color-green": "_color-green_ouh7m_14",
  "color-orange": "_color-orange_ouh7m_14",
  "color-red": "_color-red_ouh7m_14",
  clicked: Tl,
  dash: Sl,
  "stroke-bold": "_stroke-bold_ouh7m_399",
  "stroke-normal": "_stroke-normal_ouh7m_402",
  "stroke-thin": "_stroke-thin_ouh7m_405",
  "purpose-box": "_purpose-box_ouh7m_408",
  "purpose-container": "_purpose-container_ouh7m_412"
}, Ml = {
  $style: Pl
}, ke = /* @__PURE__ */ Du(vl, [["__cssModules", Ml], ["__scopeId", "data-v-9c85a764"]]);
function $u(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var FD = { exports: {} }, Cr = { exports: {} };
(function(u) {
  function e(D) {
    return D && D.__esModule ? D : {
      default: D
    };
  }
  u.exports = e, u.exports.__esModule = !0, u.exports.default = u.exports;
})(Cr);
var j = Cr.exports, oD = { exports: {} }, iD = { exports: {} }, Er = { exports: {} };
(function(u) {
  function e(D) {
    "@babel/helpers - typeof";
    return u.exports = e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
      return typeof t;
    } : function(t) {
      return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, u.exports.__esModule = !0, u.exports.default = u.exports, e(D);
  }
  u.exports = e, u.exports.__esModule = !0, u.exports.default = u.exports;
})(Er);
var Ar = Er.exports, sD = { exports: {} };
(function(u, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = D;
  function D(t, r) {
    if (r.length < t)
      throw new TypeError(t + " argument" + (t > 1 ? "s" : "") + " required, but only " + r.length + " present");
  }
  u.exports = e.default;
})(sD, sD.exports);
var Z = sD.exports;
(function(u, e) {
  var D = j.default;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = n;
  var t = D(Ar), r = D(Z);
  function n(a) {
    return (0, r.default)(1, arguments), a instanceof Date || (0, t.default)(a) === "object" && Object.prototype.toString.call(a) === "[object Date]";
  }
  u.exports = e.default;
})(iD, iD.exports);
var kl = iD.exports, lD = { exports: {} };
(function(u, e) {
  var D = j.default;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = n;
  var t = D(Ar), r = D(Z);
  function n(a) {
    (0, r.default)(1, arguments);
    var o = Object.prototype.toString.call(a);
    return a instanceof Date || (0, t.default)(a) === "object" && o === "[object Date]" ? new Date(a.getTime()) : typeof a == "number" || o === "[object Number]" ? new Date(a) : ((typeof a == "string" || o === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
  }
  u.exports = e.default;
})(lD, lD.exports);
var lu = lD.exports;
(function(u, e) {
  var D = j.default;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var t = D(kl), r = D(lu), n = D(Z);
  function a(o) {
    if ((0, n.default)(1, arguments), !(0, t.default)(o) && typeof o != "number")
      return !1;
    var i = (0, r.default)(o);
    return !isNaN(Number(i));
  }
  u.exports = e.default;
})(oD, oD.exports);
var Il = oD.exports, CD = { exports: {} }, ED = { exports: {} }, AD = { exports: {} };
(function(u, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = D;
  function D(t) {
    if (t === null || t === !0 || t === !1)
      return NaN;
    var r = Number(t);
    return isNaN(r) ? r : r < 0 ? Math.ceil(r) : Math.floor(r);
  }
  u.exports = e.default;
})(AD, AD.exports);
var xu = AD.exports;
const Nl = /* @__PURE__ */ $u(xu);
(function(u, e) {
  var D = j.default;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var t = D(xu), r = D(lu), n = D(Z);
  function a(o, i) {
    (0, n.default)(2, arguments);
    var F = (0, r.default)(o).getTime(), s = (0, t.default)(i);
    return new Date(F + s);
  }
  u.exports = e.default;
})(ED, ED.exports);
var zl = ED.exports;
(function(u, e) {
  var D = j.default;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var t = D(zl), r = D(Z), n = D(xu);
  function a(o, i) {
    (0, r.default)(2, arguments);
    var F = (0, n.default)(i);
    return (0, t.default)(o, -F);
  }
  u.exports = e.default;
})(CD, CD.exports);
var jl = CD.exports, cD = { exports: {} }, fD = { exports: {} };
(function(u, e) {
  var D = j.default;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var t = D(lu), r = D(Z), n = 864e5;
  function a(o) {
    (0, r.default)(1, arguments);
    var i = (0, t.default)(o), F = i.getTime();
    i.setUTCMonth(0, 1), i.setUTCHours(0, 0, 0, 0);
    var s = i.getTime(), l = F - s;
    return Math.floor(l / n) + 1;
  }
  u.exports = e.default;
})(fD, fD.exports);
var Ul = fD.exports, dD = { exports: {} }, BD = { exports: {} };
(function(u, e) {
  var D = j.default;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = n;
  var t = D(lu), r = D(Z);
  function n(a) {
    (0, r.default)(1, arguments);
    var o = 1, i = (0, t.default)(a), F = i.getUTCDay(), s = (F < o ? 7 : 0) + F - o;
    return i.setUTCDate(i.getUTCDate() - s), i.setUTCHours(0, 0, 0, 0), i;
  }
  u.exports = e.default;
})(BD, BD.exports);
var E0 = BD.exports, pD = { exports: {} }, hD = { exports: {} };
(function(u, e) {
  var D = j.default;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var t = D(lu), r = D(Z), n = D(E0);
  function a(o) {
    (0, r.default)(1, arguments);
    var i = (0, t.default)(o), F = i.getUTCFullYear(), s = /* @__PURE__ */ new Date(0);
    s.setUTCFullYear(F + 1, 0, 4), s.setUTCHours(0, 0, 0, 0);
    var l = (0, n.default)(s), A = /* @__PURE__ */ new Date(0);
    A.setUTCFullYear(F, 0, 4), A.setUTCHours(0, 0, 0, 0);
    var f = (0, n.default)(A);
    return i.getTime() >= l.getTime() ? F + 1 : i.getTime() >= f.getTime() ? F : F - 1;
  }
  u.exports = e.default;
})(hD, hD.exports);
var cr = hD.exports;
(function(u, e) {
  var D = j.default;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var t = D(cr), r = D(E0), n = D(Z);
  function a(o) {
    (0, n.default)(1, arguments);
    var i = (0, t.default)(o), F = /* @__PURE__ */ new Date(0);
    F.setUTCFullYear(i, 0, 4), F.setUTCHours(0, 0, 0, 0);
    var s = (0, r.default)(F);
    return s;
  }
  u.exports = e.default;
})(pD, pD.exports);
var Rl = pD.exports;
(function(u, e) {
  var D = j.default;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var t = D(lu), r = D(E0), n = D(Rl), a = D(Z), o = 6048e5;
  function i(F) {
    (0, a.default)(1, arguments);
    var s = (0, t.default)(F), l = (0, r.default)(s).getTime() - (0, n.default)(s).getTime();
    return Math.round(l / o) + 1;
  }
  u.exports = e.default;
})(dD, dD.exports);
var Ll = dD.exports, gD = { exports: {} }, mD = { exports: {} }, Ou = {};
Object.defineProperty(Ou, "__esModule", {
  value: !0
});
Ou.getDefaultOptions = Yl;
Ou.setDefaultOptions = Wl;
var fr = {};
function Yl() {
  return fr;
}
function Wl(u) {
  fr = u;
}
(function(u, e) {
  var D = j.default;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = o;
  var t = D(lu), r = D(Z), n = D(xu), a = Ou;
  function o(i, F) {
    var s, l, A, f, C, d, E, c;
    (0, r.default)(1, arguments);
    var h = (0, a.getDefaultOptions)(), B = (0, n.default)((s = (l = (A = (f = F == null ? void 0 : F.weekStartsOn) !== null && f !== void 0 ? f : F == null || (C = F.locale) === null || C === void 0 || (d = C.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && A !== void 0 ? A : h.weekStartsOn) !== null && l !== void 0 ? l : (E = h.locale) === null || E === void 0 || (c = E.options) === null || c === void 0 ? void 0 : c.weekStartsOn) !== null && s !== void 0 ? s : 0);
    if (!(B >= 0 && B <= 6))
      throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var p = (0, t.default)(i), m = p.getUTCDay(), b = (m < B ? 7 : 0) + m - B;
    return p.setUTCDate(p.getUTCDate() - b), p.setUTCHours(0, 0, 0, 0), p;
  }
  u.exports = e.default;
})(mD, mD.exports);
var A0 = mD.exports, vD = { exports: {} }, _D = { exports: {} };
(function(u, e) {
  var D = j.default;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var t = D(lu), r = D(Z), n = D(A0), a = D(xu), o = Ou;
  function i(F, s) {
    var l, A, f, C, d, E, c, h;
    (0, r.default)(1, arguments);
    var B = (0, t.default)(F), p = B.getUTCFullYear(), m = (0, o.getDefaultOptions)(), b = (0, a.default)((l = (A = (f = (C = s == null ? void 0 : s.firstWeekContainsDate) !== null && C !== void 0 ? C : s == null || (d = s.locale) === null || d === void 0 || (E = d.options) === null || E === void 0 ? void 0 : E.firstWeekContainsDate) !== null && f !== void 0 ? f : m.firstWeekContainsDate) !== null && A !== void 0 ? A : (c = m.locale) === null || c === void 0 || (h = c.options) === null || h === void 0 ? void 0 : h.firstWeekContainsDate) !== null && l !== void 0 ? l : 1);
    if (!(b >= 1 && b <= 7))
      throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var x = /* @__PURE__ */ new Date(0);
    x.setUTCFullYear(p + 1, 0, b), x.setUTCHours(0, 0, 0, 0);
    var Y = (0, n.default)(x, s), X = /* @__PURE__ */ new Date(0);
    X.setUTCFullYear(p, 0, b), X.setUTCHours(0, 0, 0, 0);
    var R = (0, n.default)(X, s);
    return B.getTime() >= Y.getTime() ? p + 1 : B.getTime() >= R.getTime() ? p : p - 1;
  }
  u.exports = e.default;
})(_D, _D.exports);
var dr = _D.exports;
(function(u, e) {
  var D = j.default;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var t = D(dr), r = D(Z), n = D(A0), a = D(xu), o = Ou;
  function i(F, s) {
    var l, A, f, C, d, E, c, h;
    (0, r.default)(1, arguments);
    var B = (0, o.getDefaultOptions)(), p = (0, a.default)((l = (A = (f = (C = s == null ? void 0 : s.firstWeekContainsDate) !== null && C !== void 0 ? C : s == null || (d = s.locale) === null || d === void 0 || (E = d.options) === null || E === void 0 ? void 0 : E.firstWeekContainsDate) !== null && f !== void 0 ? f : B.firstWeekContainsDate) !== null && A !== void 0 ? A : (c = B.locale) === null || c === void 0 || (h = c.options) === null || h === void 0 ? void 0 : h.firstWeekContainsDate) !== null && l !== void 0 ? l : 1), m = (0, t.default)(F, s), b = /* @__PURE__ */ new Date(0);
    b.setUTCFullYear(m, 0, p), b.setUTCHours(0, 0, 0, 0);
    var x = (0, n.default)(b, s);
    return x;
  }
  u.exports = e.default;
})(vD, vD.exports);
var Hl = vD.exports;
(function(u, e) {
  var D = j.default;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var t = D(lu), r = D(A0), n = D(Hl), a = D(Z), o = 6048e5;
  function i(F, s) {
    (0, a.default)(1, arguments);
    var l = (0, t.default)(F), A = (0, r.default)(l, s).getTime() - (0, n.default)(l, s).getTime();
    return Math.round(A / o) + 1;
  }
  u.exports = e.default;
})(gD, gD.exports);
var Gl = gD.exports, yD = { exports: {} };
(function(u, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = D;
  function D(t, r) {
    for (var n = t < 0 ? "-" : "", a = Math.abs(t).toString(); a.length < r; )
      a = "0" + a;
    return n + a;
  }
  u.exports = e.default;
})(yD, yD.exports);
var Br = yD.exports, bD = { exports: {} };
(function(u, e) {
  var D = j.default;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var t = D(Br), r = {
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
      var F = i.length, s = o.getUTCMilliseconds(), l = Math.floor(s * Math.pow(10, F - 3));
      return (0, t.default)(l, i.length);
    }
  }, n = r;
  e.default = n, u.exports = e.default;
})(bD, bD.exports);
var ql = bD.exports;
(function(u, e) {
  var D = j.default;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var t = D(Ul), r = D(Ll), n = D(cr), a = D(Gl), o = D(dr), i = D(Br), F = D(ql), s = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }, l = {
    // Era
    G: function(c, h, B) {
      var p = c.getUTCFullYear() > 0 ? 1 : 0;
      switch (h) {
        case "G":
        case "GG":
        case "GGG":
          return B.era(p, {
            width: "abbreviated"
          });
        case "GGGGG":
          return B.era(p, {
            width: "narrow"
          });
        case "GGGG":
        default:
          return B.era(p, {
            width: "wide"
          });
      }
    },
    // Year
    y: function(c, h, B) {
      if (h === "yo") {
        var p = c.getUTCFullYear(), m = p > 0 ? p : 1 - p;
        return B.ordinalNumber(m, {
          unit: "year"
        });
      }
      return F.default.y(c, h);
    },
    // Local week-numbering year
    Y: function(c, h, B, p) {
      var m = (0, o.default)(c, p), b = m > 0 ? m : 1 - m;
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
      var p = Math.ceil((c.getUTCMonth() + 1) / 3);
      switch (h) {
        case "Q":
          return String(p);
        case "QQ":
          return (0, i.default)(p, 2);
        case "Qo":
          return B.ordinalNumber(p, {
            unit: "quarter"
          });
        case "QQQ":
          return B.quarter(p, {
            width: "abbreviated",
            context: "formatting"
          });
        case "QQQQQ":
          return B.quarter(p, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQ":
        default:
          return B.quarter(p, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Stand-alone quarter
    q: function(c, h, B) {
      var p = Math.ceil((c.getUTCMonth() + 1) / 3);
      switch (h) {
        case "q":
          return String(p);
        case "qq":
          return (0, i.default)(p, 2);
        case "qo":
          return B.ordinalNumber(p, {
            unit: "quarter"
          });
        case "qqq":
          return B.quarter(p, {
            width: "abbreviated",
            context: "standalone"
          });
        case "qqqqq":
          return B.quarter(p, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqq":
        default:
          return B.quarter(p, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    // Month
    M: function(c, h, B) {
      var p = c.getUTCMonth();
      switch (h) {
        case "M":
        case "MM":
          return F.default.M(c, h);
        case "Mo":
          return B.ordinalNumber(p + 1, {
            unit: "month"
          });
        case "MMM":
          return B.month(p, {
            width: "abbreviated",
            context: "formatting"
          });
        case "MMMMM":
          return B.month(p, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMM":
        default:
          return B.month(p, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Stand-alone month
    L: function(c, h, B) {
      var p = c.getUTCMonth();
      switch (h) {
        case "L":
          return String(p + 1);
        case "LL":
          return (0, i.default)(p + 1, 2);
        case "Lo":
          return B.ordinalNumber(p + 1, {
            unit: "month"
          });
        case "LLL":
          return B.month(p, {
            width: "abbreviated",
            context: "standalone"
          });
        case "LLLLL":
          return B.month(p, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLL":
        default:
          return B.month(p, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    // Local week of year
    w: function(c, h, B, p) {
      var m = (0, a.default)(c, p);
      return h === "wo" ? B.ordinalNumber(m, {
        unit: "week"
      }) : (0, i.default)(m, h.length);
    },
    // ISO week of year
    I: function(c, h, B) {
      var p = (0, r.default)(c);
      return h === "Io" ? B.ordinalNumber(p, {
        unit: "week"
      }) : (0, i.default)(p, h.length);
    },
    // Day of the month
    d: function(c, h, B) {
      return h === "do" ? B.ordinalNumber(c.getUTCDate(), {
        unit: "date"
      }) : F.default.d(c, h);
    },
    // Day of year
    D: function(c, h, B) {
      var p = (0, t.default)(c);
      return h === "Do" ? B.ordinalNumber(p, {
        unit: "dayOfYear"
      }) : (0, i.default)(p, h.length);
    },
    // Day of week
    E: function(c, h, B) {
      var p = c.getUTCDay();
      switch (h) {
        case "E":
        case "EE":
        case "EEE":
          return B.day(p, {
            width: "abbreviated",
            context: "formatting"
          });
        case "EEEEE":
          return B.day(p, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEEE":
          return B.day(p, {
            width: "short",
            context: "formatting"
          });
        case "EEEE":
        default:
          return B.day(p, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Local day of week
    e: function(c, h, B, p) {
      var m = c.getUTCDay(), b = (m - p.weekStartsOn + 8) % 7 || 7;
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
          return B.day(m, {
            width: "abbreviated",
            context: "formatting"
          });
        case "eeeee":
          return B.day(m, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeeee":
          return B.day(m, {
            width: "short",
            context: "formatting"
          });
        case "eeee":
        default:
          return B.day(m, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Stand-alone local day of week
    c: function(c, h, B, p) {
      var m = c.getUTCDay(), b = (m - p.weekStartsOn + 8) % 7 || 7;
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
          return B.day(m, {
            width: "abbreviated",
            context: "standalone"
          });
        case "ccccc":
          return B.day(m, {
            width: "narrow",
            context: "standalone"
          });
        case "cccccc":
          return B.day(m, {
            width: "short",
            context: "standalone"
          });
        case "cccc":
        default:
          return B.day(m, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    // ISO day of week
    i: function(c, h, B) {
      var p = c.getUTCDay(), m = p === 0 ? 7 : p;
      switch (h) {
        case "i":
          return String(m);
        case "ii":
          return (0, i.default)(m, h.length);
        case "io":
          return B.ordinalNumber(m, {
            unit: "day"
          });
        case "iii":
          return B.day(p, {
            width: "abbreviated",
            context: "formatting"
          });
        case "iiiii":
          return B.day(p, {
            width: "narrow",
            context: "formatting"
          });
        case "iiiiii":
          return B.day(p, {
            width: "short",
            context: "formatting"
          });
        case "iiii":
        default:
          return B.day(p, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // AM or PM
    a: function(c, h, B) {
      var p = c.getUTCHours(), m = p / 12 >= 1 ? "pm" : "am";
      switch (h) {
        case "a":
        case "aa":
          return B.dayPeriod(m, {
            width: "abbreviated",
            context: "formatting"
          });
        case "aaa":
          return B.dayPeriod(m, {
            width: "abbreviated",
            context: "formatting"
          }).toLowerCase();
        case "aaaaa":
          return B.dayPeriod(m, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaa":
        default:
          return B.dayPeriod(m, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // AM, PM, midnight, noon
    b: function(c, h, B) {
      var p = c.getUTCHours(), m;
      switch (p === 12 ? m = s.noon : p === 0 ? m = s.midnight : m = p / 12 >= 1 ? "pm" : "am", h) {
        case "b":
        case "bb":
          return B.dayPeriod(m, {
            width: "abbreviated",
            context: "formatting"
          });
        case "bbb":
          return B.dayPeriod(m, {
            width: "abbreviated",
            context: "formatting"
          }).toLowerCase();
        case "bbbbb":
          return B.dayPeriod(m, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbb":
        default:
          return B.dayPeriod(m, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // in the morning, in the afternoon, in the evening, at night
    B: function(c, h, B) {
      var p = c.getUTCHours(), m;
      switch (p >= 17 ? m = s.evening : p >= 12 ? m = s.afternoon : p >= 4 ? m = s.morning : m = s.night, h) {
        case "B":
        case "BB":
        case "BBB":
          return B.dayPeriod(m, {
            width: "abbreviated",
            context: "formatting"
          });
        case "BBBBB":
          return B.dayPeriod(m, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBB":
        default:
          return B.dayPeriod(m, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Hour [1-12]
    h: function(c, h, B) {
      if (h === "ho") {
        var p = c.getUTCHours() % 12;
        return p === 0 && (p = 12), B.ordinalNumber(p, {
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
      var p = c.getUTCHours() % 12;
      return h === "Ko" ? B.ordinalNumber(p, {
        unit: "hour"
      }) : (0, i.default)(p, h.length);
    },
    // Hour [1-24]
    k: function(c, h, B) {
      var p = c.getUTCHours();
      return p === 0 && (p = 24), h === "ko" ? B.ordinalNumber(p, {
        unit: "hour"
      }) : (0, i.default)(p, h.length);
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
    X: function(c, h, B, p) {
      var m = p._originalDate || c, b = m.getTimezoneOffset();
      if (b === 0)
        return "Z";
      switch (h) {
        case "X":
          return f(b);
        case "XXXX":
        case "XX":
          return C(b);
        case "XXXXX":
        case "XXX":
        default:
          return C(b, ":");
      }
    },
    // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
    x: function(c, h, B, p) {
      var m = p._originalDate || c, b = m.getTimezoneOffset();
      switch (h) {
        case "x":
          return f(b);
        case "xxxx":
        case "xx":
          return C(b);
        case "xxxxx":
        case "xxx":
        default:
          return C(b, ":");
      }
    },
    // Timezone (GMT)
    O: function(c, h, B, p) {
      var m = p._originalDate || c, b = m.getTimezoneOffset();
      switch (h) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + A(b, ":");
        case "OOOO":
        default:
          return "GMT" + C(b, ":");
      }
    },
    // Timezone (specific non-location)
    z: function(c, h, B, p) {
      var m = p._originalDate || c, b = m.getTimezoneOffset();
      switch (h) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + A(b, ":");
        case "zzzz":
        default:
          return "GMT" + C(b, ":");
      }
    },
    // Seconds timestamp
    t: function(c, h, B, p) {
      var m = p._originalDate || c, b = Math.floor(m.getTime() / 1e3);
      return (0, i.default)(b, h.length);
    },
    // Milliseconds timestamp
    T: function(c, h, B, p) {
      var m = p._originalDate || c, b = m.getTime();
      return (0, i.default)(b, h.length);
    }
  };
  function A(E, c) {
    var h = E > 0 ? "-" : "+", B = Math.abs(E), p = Math.floor(B / 60), m = B % 60;
    if (m === 0)
      return h + String(p);
    var b = c || "";
    return h + String(p) + b + (0, i.default)(m, 2);
  }
  function f(E, c) {
    if (E % 60 === 0) {
      var h = E > 0 ? "-" : "+";
      return h + (0, i.default)(Math.abs(E) / 60, 2);
    }
    return C(E, c);
  }
  function C(E, c) {
    var h = c || "", B = E > 0 ? "-" : "+", p = Math.abs(E), m = (0, i.default)(Math.floor(p / 60), 2), b = (0, i.default)(p % 60, 2);
    return B + m + h + b;
  }
  var d = l;
  e.default = d, u.exports = e.default;
})(cD, cD.exports);
var Zl = cD.exports, wD = { exports: {} };
(function(u, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var D = function(i, F) {
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
    var s = i.match(/(P+)(p+)?/) || [], l = s[1], A = s[2];
    if (!A)
      return D(i, F);
    var f;
    switch (l) {
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
    return f.replace("{{date}}", D(l, F)).replace("{{time}}", t(A, F));
  }, n = {
    p: t,
    P: r
  }, a = n;
  e.default = a, u.exports = e.default;
})(wD, wD.exports);
var Vl = wD.exports, $D = { exports: {} };
(function(u, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = D;
  function D(t) {
    var r = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
    return r.setUTCFullYear(t.getFullYear()), t.getTime() - r.getTime();
  }
  u.exports = e.default;
})($D, $D.exports);
var pr = $D.exports;
const nt = /* @__PURE__ */ $u(pr);
var Ee = {};
Object.defineProperty(Ee, "__esModule", {
  value: !0
});
Ee.isProtectedDayOfYearToken = Jl;
Ee.isProtectedWeekYearToken = Xl;
Ee.throwProtectedError = uC;
var Ql = ["D", "DD"], Kl = ["YY", "YYYY"];
function Jl(u) {
  return Ql.indexOf(u) !== -1;
}
function Xl(u) {
  return Kl.indexOf(u) !== -1;
}
function uC(u, e, D) {
  if (u === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e, "`) for formatting years to the input `").concat(D, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (u === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(e, "`) for formatting years to the input `").concat(D, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (u === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(e, "`) for formatting days of the month to the input `").concat(D, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (u === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(e, "`) for formatting days of the month to the input `").concat(D, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var xD = { exports: {} }, OD = { exports: {} }, TD = { exports: {} };
(function(u, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var D = {
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
    var F, s = D[a];
    return typeof s == "string" ? F = s : o === 1 ? F = s.one : F = s.other.replace("{{count}}", o.toString()), i != null && i.addSuffix ? i.comparison && i.comparison > 0 ? "in " + F : F + " ago" : F;
  }, r = t;
  e.default = r, u.exports = e.default;
})(TD, TD.exports);
var eC = TD.exports, SD = { exports: {} }, PD = { exports: {} };
(function(u, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = D;
  function D(t) {
    return function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = r.width ? String(r.width) : t.defaultWidth, a = t.formats[n] || t.formats[t.defaultWidth];
      return a;
    };
  }
  u.exports = e.default;
})(PD, PD.exports);
var DC = PD.exports;
(function(u, e) {
  var D = j.default;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var t = D(DC), r = {
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
  e.default = i, u.exports = e.default;
})(SD, SD.exports);
var tC = SD.exports, MD = { exports: {} };
(function(u, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var D = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
  }, t = function(a, o, i, F) {
    return D[a];
  }, r = t;
  e.default = r, u.exports = e.default;
})(MD, MD.exports);
var rC = MD.exports, kD = { exports: {} }, ID = { exports: {} };
(function(u, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = D;
  function D(t) {
    return function(r, n) {
      var a = n != null && n.context ? String(n.context) : "standalone", o;
      if (a === "formatting" && t.formattingValues) {
        var i = t.defaultFormattingWidth || t.defaultWidth, F = n != null && n.width ? String(n.width) : i;
        o = t.formattingValues[F] || t.formattingValues[i];
      } else {
        var s = t.defaultWidth, l = n != null && n.width ? String(n.width) : t.defaultWidth;
        o = t.values[l] || t.values[s];
      }
      var A = t.argumentCallback ? t.argumentCallback(r) : r;
      return o[A];
    };
  }
  u.exports = e.default;
})(ID, ID.exports);
var nC = ID.exports;
(function(u, e) {
  var D = j.default;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var t = D(nC), r = {
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
  }, s = function(C, d) {
    var E = Number(C), c = E % 100;
    if (c > 20 || c < 10)
      switch (c % 10) {
        case 1:
          return E + "st";
        case 2:
          return E + "nd";
        case 3:
          return E + "rd";
      }
    return E + "th";
  }, l = {
    ordinalNumber: s,
    era: (0, t.default)({
      values: r,
      defaultWidth: "wide"
    }),
    quarter: (0, t.default)({
      values: n,
      defaultWidth: "wide",
      argumentCallback: function(C) {
        return C - 1;
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
  }, A = l;
  e.default = A, u.exports = e.default;
})(kD, kD.exports);
var aC = kD.exports, ND = { exports: {} }, zD = { exports: {} };
(function(u, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = D;
  function D(n) {
    return function(a) {
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = o.width, F = i && n.matchPatterns[i] || n.matchPatterns[n.defaultMatchWidth], s = a.match(F);
      if (!s)
        return null;
      var l = s[0], A = i && n.parsePatterns[i] || n.parsePatterns[n.defaultParseWidth], f = Array.isArray(A) ? r(A, function(E) {
        return E.test(l);
      }) : t(A, function(E) {
        return E.test(l);
      }), C;
      C = n.valueCallback ? n.valueCallback(f) : f, C = o.valueCallback ? o.valueCallback(C) : C;
      var d = a.slice(l.length);
      return {
        value: C,
        rest: d
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
  u.exports = e.default;
})(zD, zD.exports);
var FC = zD.exports, jD = { exports: {} };
(function(u, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = D;
  function D(t) {
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
  u.exports = e.default;
})(jD, jD.exports);
var oC = jD.exports;
(function(u, e) {
  var D = j.default;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var t = D(FC), r = D(oC), n = /^(\d+)(th|st|nd|rd)?/i, a = /\d+/i, o = {
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
  }, l = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
  }, A = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
  }, f = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
  }, C = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
  }, d = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
  }, E = {
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
      valueCallback: function(p) {
        return parseInt(p, 10);
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
      valueCallback: function(p) {
        return p + 1;
      }
    }),
    month: (0, t.default)({
      matchPatterns: l,
      defaultMatchWidth: "wide",
      parsePatterns: A,
      defaultParseWidth: "any"
    }),
    day: (0, t.default)({
      matchPatterns: f,
      defaultMatchWidth: "wide",
      parsePatterns: C,
      defaultParseWidth: "any"
    }),
    dayPeriod: (0, t.default)({
      matchPatterns: d,
      defaultMatchWidth: "any",
      parsePatterns: E,
      defaultParseWidth: "any"
    })
  }, h = c;
  e.default = h, u.exports = e.default;
})(ND, ND.exports);
var iC = ND.exports;
(function(u, e) {
  var D = j.default;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var t = D(eC), r = D(tC), n = D(rC), a = D(aC), o = D(iC), i = {
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
  e.default = F, u.exports = e.default;
})(OD, OD.exports);
var sC = OD.exports;
(function(u, e) {
  var D = j.default;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var t = D(sC), r = t.default;
  e.default = r, u.exports = e.default;
})(xD, xD.exports);
var lC = xD.exports;
(function(u, e) {
  var D = j.default;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = B;
  var t = D(Il), r = D(jl), n = D(lu), a = D(Zl), o = D(Vl), i = D(pr), F = Ee, s = D(xu), l = D(Z), A = Ou, f = D(lC), C = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, d = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, E = /^'([^]*?)'?$/, c = /''/g, h = /[a-zA-Z]/;
  function B(m, b, x) {
    var Y, X, R, T, N, G, ru, Uu, Ru, Lu, Bu, Ne, ze, je, Ue, Re, Le, Ye;
    (0, l.default)(2, arguments);
    var Nr = String(b), Yu = (0, A.getDefaultOptions)(), Wu = (Y = (X = x == null ? void 0 : x.locale) !== null && X !== void 0 ? X : Yu.locale) !== null && Y !== void 0 ? Y : f.default, We = (0, s.default)((R = (T = (N = (G = x == null ? void 0 : x.firstWeekContainsDate) !== null && G !== void 0 ? G : x == null || (ru = x.locale) === null || ru === void 0 || (Uu = ru.options) === null || Uu === void 0 ? void 0 : Uu.firstWeekContainsDate) !== null && N !== void 0 ? N : Yu.firstWeekContainsDate) !== null && T !== void 0 ? T : (Ru = Yu.locale) === null || Ru === void 0 || (Lu = Ru.options) === null || Lu === void 0 ? void 0 : Lu.firstWeekContainsDate) !== null && R !== void 0 ? R : 1);
    if (!(We >= 1 && We <= 7))
      throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var He = (0, s.default)((Bu = (Ne = (ze = (je = x == null ? void 0 : x.weekStartsOn) !== null && je !== void 0 ? je : x == null || (Ue = x.locale) === null || Ue === void 0 || (Re = Ue.options) === null || Re === void 0 ? void 0 : Re.weekStartsOn) !== null && ze !== void 0 ? ze : Yu.weekStartsOn) !== null && Ne !== void 0 ? Ne : (Le = Yu.locale) === null || Le === void 0 || (Ye = Le.options) === null || Ye === void 0 ? void 0 : Ye.weekStartsOn) !== null && Bu !== void 0 ? Bu : 0);
    if (!(He >= 0 && He <= 6))
      throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    if (!Wu.localize)
      throw new RangeError("locale must contain localize property");
    if (!Wu.formatLong)
      throw new RangeError("locale must contain formatLong property");
    var ce = (0, n.default)(m);
    if (!(0, t.default)(ce))
      throw new RangeError("Invalid time value");
    var zr = (0, i.default)(ce), jr = (0, r.default)(ce, zr), Ur = {
      firstWeekContainsDate: We,
      weekStartsOn: He,
      locale: Wu,
      _originalDate: ce
    }, Rr = Nr.match(d).map(function(uu) {
      var cu = uu[0];
      if (cu === "p" || cu === "P") {
        var fe = o.default[cu];
        return fe(uu, Wu.formatLong);
      }
      return uu;
    }).join("").match(C).map(function(uu) {
      if (uu === "''")
        return "'";
      var cu = uu[0];
      if (cu === "'")
        return p(uu);
      var fe = a.default[cu];
      if (fe)
        return !(x != null && x.useAdditionalWeekYearTokens) && (0, F.isProtectedWeekYearToken)(uu) && (0, F.throwProtectedError)(uu, b, String(m)), !(x != null && x.useAdditionalDayOfYearTokens) && (0, F.isProtectedDayOfYearToken)(uu) && (0, F.throwProtectedError)(uu, b, String(m)), fe(jr, uu, Wu.localize, Ur);
      if (cu.match(h))
        throw new RangeError("Format string contains an unescaped latin alphabet character `" + cu + "`");
      return uu;
    }).join("");
    return Rr;
  }
  function p(m) {
    var b = m.match(E);
    return b ? b[1].replace(c, "'") : m;
  }
  u.exports = e.default;
})(FD, FD.exports);
var CC = FD.exports;
const EC = /* @__PURE__ */ $u(CC);
function at(u, e, D) {
  var t = fC(u, D.timeZone, D.locale);
  return t.formatToParts ? AC(t, e) : cC(t, e);
}
function AC(u, e) {
  for (var D = u.formatToParts(e), t = D.length - 1; t >= 0; --t)
    if (D[t].type === "timeZoneName")
      return D[t].value;
}
function cC(u, e) {
  var D = u.format(e).replace(/\u200E/g, ""), t = / [\w-+ ]+$/.exec(D);
  return t ? t[0].substr(1) : "";
}
function fC(u, e, D) {
  if (D && !D.code)
    throw new Error(
      "date-fns-tz error: Please set a language code on the locale object imported from date-fns, e.g. `locale.code = 'en-US'`"
    );
  return new Intl.DateTimeFormat(D ? [D.code, "en-US"] : void 0, {
    timeZone: e,
    timeZoneName: u
  });
}
function dC(u, e) {
  var D = gC(e);
  return D.formatToParts ? pC(D, u) : hC(D, u);
}
var BC = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function pC(u, e) {
  try {
    for (var D = u.formatToParts(e), t = [], r = 0; r < D.length; r++) {
      var n = BC[D[r].type];
      n >= 0 && (t[n] = parseInt(D[r].value, 10));
    }
    return t;
  } catch (a) {
    if (a instanceof RangeError)
      return [NaN];
    throw a;
  }
}
function hC(u, e) {
  var D = u.format(e).replace(/\u200E/g, ""), t = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(D);
  return [t[3], t[1], t[2], t[4], t[5], t[6]];
}
var Ve = {};
function gC(u) {
  if (!Ve[u]) {
    var e = new Intl.DateTimeFormat("en-US", {
      hour12: !1,
      timeZone: "America/New_York",
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), D = e === "06/25/2014, 00:00:00" || e === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
    Ve[u] = D ? new Intl.DateTimeFormat("en-US", {
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
  return Ve[u];
}
function hr(u, e, D, t, r, n, a) {
  var o = /* @__PURE__ */ new Date(0);
  return o.setUTCFullYear(u, e, D), o.setUTCHours(t, r, n, a), o;
}
var Ft = 36e5, mC = 6e4, Qe = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
};
function Ie(u, e, D) {
  var t, r;
  if (!u || (t = Qe.timezoneZ.exec(u), t))
    return 0;
  var n;
  if (t = Qe.timezoneHH.exec(u), t)
    return n = parseInt(t[1], 10), ot(n) ? -(n * Ft) : NaN;
  if (t = Qe.timezoneHHMM.exec(u), t) {
    n = parseInt(t[1], 10);
    var a = parseInt(t[2], 10);
    return ot(n, a) ? (r = Math.abs(n) * Ft + a * mC, n > 0 ? -r : r) : NaN;
  }
  if (yC(u)) {
    e = new Date(e || Date.now());
    var o = D ? e : vC(e), i = UD(o, u), F = D ? i : _C(e, i, u);
    return -F;
  }
  return NaN;
}
function vC(u) {
  return hr(
    u.getFullYear(),
    u.getMonth(),
    u.getDate(),
    u.getHours(),
    u.getMinutes(),
    u.getSeconds(),
    u.getMilliseconds()
  );
}
function UD(u, e) {
  var D = dC(u, e), t = hr(
    D[0],
    D[1] - 1,
    D[2],
    D[3] % 24,
    D[4],
    D[5],
    0
  ).getTime(), r = u.getTime(), n = r % 1e3;
  return r -= n >= 0 ? n : 1e3 + n, t - r;
}
function _C(u, e, D) {
  var t = u.getTime(), r = t - e, n = UD(new Date(r), D);
  if (e === n)
    return e;
  r -= n - e;
  var a = UD(new Date(r), D);
  return n === a ? n : Math.max(n, a);
}
function ot(u, e) {
  return -23 <= u && u <= 23 && (e == null || 0 <= e && e <= 59);
}
var it = {};
function yC(u) {
  if (it[u])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: u }), it[u] = !0, !0;
  } catch {
    return !1;
  }
}
var bC = 60 * 1e3, wC = {
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(u, e, D, t) {
    var r = Ke(t.timeZone, t._originalDate || u);
    if (r === 0)
      return "Z";
    switch (e) {
      case "X":
        return st(r);
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
  x: function(u, e, D, t) {
    var r = Ke(t.timeZone, t._originalDate || u);
    switch (e) {
      case "x":
        return st(r);
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
  O: function(u, e, D, t) {
    var r = Ke(t.timeZone, t._originalDate || u);
    switch (e) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + $C(r, ":");
      case "OOOO":
      default:
        return "GMT" + Su(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(u, e, D, t) {
    var r = t._originalDate || u;
    switch (e) {
      case "z":
      case "zz":
      case "zzz":
        return at("short", r, t);
      case "zzzz":
      default:
        return at("long", r, t);
    }
  }
};
function Ke(u, e) {
  var D = u ? Ie(u, e, !0) / bC : e.getTimezoneOffset();
  if (Number.isNaN(D))
    throw new RangeError("Invalid time zone specified: " + u);
  return D;
}
function ve(u, e) {
  for (var D = u < 0 ? "-" : "", t = Math.abs(u).toString(); t.length < e; )
    t = "0" + t;
  return D + t;
}
function Su(u, e) {
  var D = e || "", t = u > 0 ? "-" : "+", r = Math.abs(u), n = ve(Math.floor(r / 60), 2), a = ve(Math.floor(r % 60), 2);
  return t + n + D + a;
}
function st(u, e) {
  if (u % 60 === 0) {
    var D = u > 0 ? "-" : "+";
    return D + ve(Math.abs(u) / 60, 2);
  }
  return Su(u, e);
}
function $C(u, e) {
  var D = u > 0 ? "-" : "+", t = Math.abs(u), r = Math.floor(t / 60), n = t % 60;
  if (n === 0)
    return D + String(r);
  var a = e || "";
  return D + String(r) + a + ve(n, 2);
}
const xC = wC;
var OC = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, Je = 36e5, lt = 6e4, TC = 2, q = {
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
  timeZone: OC
};
function gr(u, e) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (u === null)
    return /* @__PURE__ */ new Date(NaN);
  var D = e || {}, t = D.additionalDigits == null ? TC : Nl(D.additionalDigits);
  if (t !== 2 && t !== 1 && t !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (u instanceof Date || typeof u == "object" && Object.prototype.toString.call(u) === "[object Date]")
    return new Date(u.getTime());
  if (typeof u == "number" || Object.prototype.toString.call(u) === "[object Number]")
    return new Date(u);
  if (!(typeof u == "string" || Object.prototype.toString.call(u) === "[object String]"))
    return /* @__PURE__ */ new Date(NaN);
  var r = SC(u), n = PC(r.date, t), a = n.year, o = n.restDateString, i = MC(o, a);
  if (isNaN(i))
    return /* @__PURE__ */ new Date(NaN);
  if (i) {
    var F = i.getTime(), s = 0, l;
    if (r.time && (s = kC(r.time), isNaN(s)))
      return /* @__PURE__ */ new Date(NaN);
    if (r.timeZone || D.timeZone) {
      if (l = Ie(r.timeZone || D.timeZone, new Date(F + s)), isNaN(l))
        return /* @__PURE__ */ new Date(NaN);
    } else
      l = nt(new Date(F + s)), l = nt(new Date(F + s + l));
    return new Date(F + s + l);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function SC(u) {
  var e = {}, D = q.dateTimePattern.exec(u), t;
  if (D ? (e.date = D[1], t = D[3]) : (D = q.datePattern.exec(u), D ? (e.date = D[1], t = D[2]) : (e.date = null, t = u)), t) {
    var r = q.timeZone.exec(t);
    r ? (e.time = t.replace(r[1], ""), e.timeZone = r[1].trim()) : e.time = t;
  }
  return e;
}
function PC(u, e) {
  var D = q.YYY[e], t = q.YYYYY[e], r;
  if (r = q.YYYY.exec(u) || t.exec(u), r) {
    var n = r[1];
    return {
      year: parseInt(n, 10),
      restDateString: u.slice(n.length)
    };
  }
  if (r = q.YY.exec(u) || D.exec(u), r) {
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
function MC(u, e) {
  if (e === null)
    return null;
  var D, t, r, n;
  if (u.length === 0)
    return t = /* @__PURE__ */ new Date(0), t.setUTCFullYear(e), t;
  if (D = q.MM.exec(u), D)
    return t = /* @__PURE__ */ new Date(0), r = parseInt(D[1], 10) - 1, Et(e, r) ? (t.setUTCFullYear(e, r), t) : /* @__PURE__ */ new Date(NaN);
  if (D = q.DDD.exec(u), D) {
    t = /* @__PURE__ */ new Date(0);
    var a = parseInt(D[1], 10);
    return zC(e, a) ? (t.setUTCFullYear(e, 0, a), t) : /* @__PURE__ */ new Date(NaN);
  }
  if (D = q.MMDD.exec(u), D) {
    t = /* @__PURE__ */ new Date(0), r = parseInt(D[1], 10) - 1;
    var o = parseInt(D[2], 10);
    return Et(e, r, o) ? (t.setUTCFullYear(e, r, o), t) : /* @__PURE__ */ new Date(NaN);
  }
  if (D = q.Www.exec(u), D)
    return n = parseInt(D[1], 10) - 1, At(e, n) ? Ct(e, n) : /* @__PURE__ */ new Date(NaN);
  if (D = q.WwwD.exec(u), D) {
    n = parseInt(D[1], 10) - 1;
    var i = parseInt(D[2], 10) - 1;
    return At(e, n, i) ? Ct(e, n, i) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function kC(u) {
  var e, D, t;
  if (e = q.HH.exec(u), e)
    return D = parseFloat(e[1].replace(",", ".")), Xe(D) ? D % 24 * Je : NaN;
  if (e = q.HHMM.exec(u), e)
    return D = parseInt(e[1], 10), t = parseFloat(e[2].replace(",", ".")), Xe(D, t) ? D % 24 * Je + t * lt : NaN;
  if (e = q.HHMMSS.exec(u), e) {
    D = parseInt(e[1], 10), t = parseInt(e[2], 10);
    var r = parseFloat(e[3].replace(",", "."));
    return Xe(D, t, r) ? D % 24 * Je + t * lt + r * 1e3 : NaN;
  }
  return null;
}
function Ct(u, e, D) {
  e = e || 0, D = D || 0;
  var t = /* @__PURE__ */ new Date(0);
  t.setUTCFullYear(u, 0, 4);
  var r = t.getUTCDay() || 7, n = e * 7 + D + 1 - r;
  return t.setUTCDate(t.getUTCDate() + n), t;
}
var IC = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], NC = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function mr(u) {
  return u % 400 === 0 || u % 4 === 0 && u % 100 !== 0;
}
function Et(u, e, D) {
  if (e < 0 || e > 11)
    return !1;
  if (D != null) {
    if (D < 1)
      return !1;
    var t = mr(u);
    if (t && D > NC[e] || !t && D > IC[e])
      return !1;
  }
  return !0;
}
function zC(u, e) {
  if (e < 1)
    return !1;
  var D = mr(u);
  return !(D && e > 366 || !D && e > 365);
}
function At(u, e, D) {
  return !(e < 0 || e > 52 || D != null && (D < 0 || D > 6));
}
function Xe(u, e, D) {
  return !(u != null && (u < 0 || u >= 25) || e != null && (e < 0 || e >= 60) || D != null && (D < 0 || D >= 60));
}
var jC = /([xXOz]+)|''|'(''|[^'])+('|$)/g;
function UC(u, e, D) {
  var t = String(e), r = D || {}, n = t.match(jC);
  if (n) {
    var a = gr(u, r);
    t = n.reduce(function(o, i) {
      if (i[0] === "'")
        return o;
      var F = o.indexOf(i), s = o[F - 1] === "'", l = o.replace(
        i,
        "'" + xC[i[0]](a, i, null, r) + "'"
      );
      return s ? l.substring(0, F - 1) + l.substring(F + 1) : l;
    }, t);
  }
  return EC(u, t, r);
}
var RD = { exports: {} }, LD = { exports: {} };
(function(u, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = D;
  function D(t, r) {
    if (t == null)
      throw new TypeError("assign requires that input parameter not be null or undefined");
    for (var n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    return t;
  }
  u.exports = e.default;
})(LD, LD.exports);
var RC = LD.exports;
(function(u, e) {
  var D = j.default;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = r;
  var t = D(RC);
  function r(n) {
    return (0, t.default)({}, n);
  }
  u.exports = e.default;
})(RD, RD.exports);
var LC = RD.exports;
const YC = /* @__PURE__ */ $u(LC);
function WC(u, e, D) {
  var t = gr(u, D), r = Ie(e, t, !0), n = new Date(t.getTime() - r), a = /* @__PURE__ */ new Date(0);
  return a.setFullYear(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()), a.setHours(n.getUTCHours(), n.getUTCMinutes(), n.getUTCSeconds(), n.getUTCMilliseconds()), a;
}
function HC(u, e, D, t) {
  var r = YC(t);
  return r.timeZone = e, UC(WC(u, e), D, r);
}
function GC(u, e) {
  return -Ie(u, e);
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
const YD = [], ku = "default", ct = "class", qC = {
  // Any native multicharacter token in default scope, or any single character
  default: /\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|\(\?(?:[:=!]|<[=!])|[?*+]\?|{\d+(?:,\d*)?}\??|[\s\S]/,
  // Any native multicharacter token in character class scope, or any single character
  class: /\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|[\s\S]/
}, ZC = /\$(?:\{([^\}]+)\}|<([^>]+)>|(\d\d?|[\s\S]?))/g, VC = /()??/.exec("")[1] === void 0, QC = /x/.flags !== void 0;
function Ae(u) {
  let e = !0;
  try {
    if (new RegExp("", u), u === "y") {
      const D = (() => "gy")();
      ".a".replace(new RegExp("a", D), ".") === ".." && (e = !1);
    }
  } catch {
    e = !1;
  }
  return e;
}
const KC = Ae("d"), c0 = Ae("s"), vr = Ae("u"), f0 = Ae("y"), _r = {
  d: KC,
  g: !0,
  i: !0,
  m: !0,
  s: c0,
  u: vr,
  y: f0
}, JC = c0 ? /[^dgimsuy]+/g : /[^dgimuy]+/g;
function yr(u, e, D, t, r) {
  if (u[I] = {
    captureNames: e
  }, r)
    return u;
  if (u.__proto__)
    u.__proto__ = y.prototype;
  else
    for (const n in y.prototype)
      u[n] = y.prototype[n];
  return u[I].source = D, u[I].flags = t && t.split("").sort().join(""), u;
}
function ne(u) {
  return u.replace(/([\s\S])(?=[\s\S]*\1)/g, "");
}
function Tu(u, e) {
  if (!y.isRegExp(u))
    throw new TypeError("Type RegExp expected");
  const D = u[I] || {};
  let t = XC(u), r = "", n = "", a = null, o = null;
  return e = e || {}, e.removeG && (n += "g"), e.removeY && (n += "y"), n && (t = t.replace(new RegExp(`[${n}]+`, "g"), "")), e.addG && (r += "g"), e.addY && (r += "y"), r && (t = ne(t + r)), e.isInternalOnly || (D.source !== void 0 && (a = D.source), D.flags != null && (o = r ? ne(D.flags + r) : D.flags)), u = yr(
    new RegExp(e.source || u.source, t),
    uE(u) ? D.captureNames.slice(0) : null,
    a,
    o,
    e.isInternalOnly
  ), u;
}
function br(u) {
  return parseInt(u, 16);
}
function wr(u, e, D) {
  const t = u.index + u[0].length, r = u.input[u.index - 1], n = u.input[t];
  return (
    // No need to separate tokens if at the beginning or end of a group, before or after a
    // group, or before or after a `|`
    /^[()|]$/.test(r) || /^[()|]$/.test(n) || // No need to separate tokens if at the beginning or end of the pattern
    u.index === 0 || t === u.input.length || // No need to separate tokens if at the beginning of a noncapturing group or lookaround.
    // Looks only at the last 4 chars (at most) for perf when constructing long regexes.
    /\(\?(?:[:=!]|<[=!])$/.test(u.input.substring(u.index - 4, u.index)) || // Avoid separating tokens when the following token is a quantifier
    eE(u.input, t, D) ? "" : "(?:)"
  );
}
function XC(u) {
  return QC ? u.flags : (
    // Explicitly using `RegExp.prototype.toString` (rather than e.g. `String` or concatenation
    // with an empty string) allows this to continue working predictably when
    // `XRegExp.proptotype.toString` is overridden
    /\/([a-z]*)$/i.exec(RegExp.prototype.toString.call(u))[1]
  );
}
function uE(u) {
  return !!(u[I] && u[I].captureNames);
}
function d0(u) {
  return parseInt(u, 10).toString(16);
}
function eE(u, e, D) {
  const t = "\\(\\?#[^)]*\\)", r = "#[^#\\n]*", n = "[?*+]|{\\d+(?:,\\d*)?}";
  return (D.includes("x") ? (
    // Ignore any leading whitespace, line comments, and inline comments
    new RegExp(`^(?:\\s|${r}|${t})*(?:${n})`)
  ) : (
    // Ignore any leading inline comments
    new RegExp(`^(?:${t})*(?:${n})`)
  )).test(u.slice(e));
}
function _e(u, e) {
  return Object.prototype.toString.call(u) === `[object ${e}]`;
}
function ju(u) {
  if (u == null)
    throw new TypeError("Cannot convert null or undefined to object");
  return u;
}
function B0(u) {
  for (; u.length < 4; )
    u = `0${u}`;
  return u;
}
function DE(u, e) {
  if (ne(e) !== e)
    throw new SyntaxError(`Invalid duplicate regex flag ${e}`);
  u = u.replace(/^\(\?([\w$]+)\)/, (D, t) => {
    if (/[dgy]/.test(t))
      throw new SyntaxError(`Cannot use flags dgy in mode modifier ${D}`);
    return e = ne(e + t), "";
  });
  for (const D of e)
    if (!_r[D])
      throw new SyntaxError(`Unknown regex flag ${D}`);
  return {
    pattern: u,
    flags: e
  };
}
function $r(u) {
  const e = {};
  return _e(u, "String") ? (y.forEach(u, /[^\s,]+/, (D) => {
    e[D] = !0;
  }), e) : u;
}
function ft(u) {
  if (!/^[\w$]$/.test(u))
    throw new Error("Flag must be a single character A-Za-z0-9_$");
  _r[u] = !0;
}
function tE(u, e, D, t, r) {
  let n = YD.length;
  const a = u[D];
  let o = null, i, F;
  for (; n--; )
    if (F = YD[n], !(F.leadChar && F.leadChar !== a || F.scope !== t && F.scope !== "all" || F.flag && !e.includes(F.flag)) && (i = y.exec(u, F.regex, D, "sticky"), i)) {
      o = {
        matchLength: i[0].length,
        output: F.handler.call(r, i, t, e),
        reparse: F.reparse
      };
      break;
    }
  return o;
}
function xr(u) {
  _u.astral = u;
}
function Or(u) {
  _u.namespacing = u;
}
function y(u, e) {
  if (y.isRegExp(u)) {
    if (e !== void 0)
      throw new TypeError("Cannot supply flags when copying a RegExp");
    return Tu(u);
  }
  if (u = u === void 0 ? "" : String(u), e = e === void 0 ? "" : String(e), y.isInstalled("astral") && !e.includes("A") && (e += "A"), Pu[u] || (Pu[u] = {}), !Pu[u][e]) {
    const t = {
      hasNamedCapture: !1,
      captureNames: []
    };
    let r = ku, n = "", a = 0, o;
    const i = DE(u, e);
    let F = i.pattern;
    const s = i.flags;
    for (; a < F.length; ) {
      do
        o = tE(F, s, a, r, t), o && o.reparse && (F = F.slice(0, a) + o.output + F.slice(a + o.matchLength));
      while (o && o.reparse);
      if (o)
        n += o.output, a += o.matchLength || 1;
      else {
        const [l] = y.exec(F, qC[r], a, "sticky");
        n += l, a += l.length, l === "[" && r === ku ? r = ct : l === "]" && r === ct && (r = ku);
      }
    }
    Pu[u][e] = {
      // Use basic cleanup to collapse repeated empty groups like `(?:)(?:)` to `(?:)`. Empty
      // groups are sometimes inserted during regex transpilation in order to keep tokens
      // separated. However, more than one empty group in a row is never needed.
      pattern: n.replace(/(?:\(\?:\))+/g, "(?:)"),
      // Strip all but native flags
      flags: s.replace(JC, ""),
      // `context.captureNames` has an item for each capturing group, even if unnamed
      captures: t.hasNamedCapture ? t.captureNames : null
    };
  }
  const D = Pu[u][e];
  return yr(
    new RegExp(D.pattern, D.flags),
    D.captures,
    u,
    e
  );
}
y.prototype = new RegExp();
y.version = "5.1.1";
y._clipDuplicates = ne;
y._hasNativeFlag = Ae;
y._dec = br;
y._hex = d0;
y._pad4 = B0;
y.addToken = (u, e, D) => {
  D = D || {};
  let { optionalFlags: t } = D;
  if (D.flag && ft(D.flag), t) {
    t = t.split("");
    for (const r of t)
      ft(r);
  }
  YD.push({
    regex: Tu(u, {
      addG: !0,
      addY: f0,
      isInternalOnly: !0
    }),
    handler: e,
    scope: D.scope || ku,
    flag: D.flag,
    reparse: D.reparse,
    leadChar: D.leadChar
  }), y.cache.flush("patterns");
};
y.cache = (u, e) => (Gu[u] || (Gu[u] = {}), Gu[u][e] || (Gu[u][e] = y(u, e)));
y.cache.flush = (u) => {
  u === "patterns" ? Pu = {} : Gu = {};
};
y.escape = (u) => String(ju(u)).replace(/[\\\[\]{}()*+?.^$|]/g, "\\$&").replace(/[\s#\-,]/g, (e) => `\\u${B0(d0(e.charCodeAt(0)))}`);
y.exec = (u, e, D, t) => {
  let r = "g", n = !1, a = !1, o;
  n = f0 && !!(t || e.sticky && t !== !1), n ? r += "y" : t && (a = !0, r += "FakeY"), e[I] = e[I] || {};
  const i = e[I][r] || (e[I][r] = Tu(e, {
    addG: !0,
    addY: n,
    source: a ? `${e.source}|()` : void 0,
    removeY: t === !1,
    isInternalOnly: !0
  }));
  return D = D || 0, i.lastIndex = D, o = iu.exec.call(i, u), a && o && o.pop() === "" && (o = null), e.global && (e.lastIndex = o ? i.lastIndex : 0), o;
};
y.forEach = (u, e, D) => {
  let t = 0, r = -1, n;
  for (; n = y.exec(u, e, t); )
    D(n, ++r, u, e), t = n.index + (n[0].length || 1);
};
y.globalize = (u) => Tu(u, { addG: !0 });
y.install = (u) => {
  u = $r(u), !_u.astral && u.astral && xr(!0), !_u.namespacing && u.namespacing && Or(!0);
};
y.isInstalled = (u) => !!_u[u];
y.isRegExp = (u) => Object.prototype.toString.call(u) === "[object RegExp]";
y.match = (u, e, D) => {
  const t = e.global && D !== "one" || D === "all", r = (t ? "g" : "") + (e.sticky ? "y" : "") || "noGY";
  e[I] = e[I] || {};
  const n = e[I][r] || (e[I][r] = Tu(e, {
    addG: !!t,
    removeG: D === "one",
    isInternalOnly: !0
  })), a = String(ju(u)).match(n);
  return e.global && (e.lastIndex = D === "one" && a ? (
    // Can't use `r2.lastIndex` since `r2` is nonglobal in this case
    a.index + a[0].length
  ) : 0), t ? a || [] : a && a[0];
};
y.matchChain = (u, e) => function D(t, r) {
  const n = e[r].regex ? e[r] : { regex: e[r] }, a = [];
  function o(i) {
    if (n.backref) {
      const F = `Backreference to undefined group: ${n.backref}`, s = isNaN(n.backref);
      if (s && y.isInstalled("namespacing")) {
        if (!(i.groups && n.backref in i.groups))
          throw new ReferenceError(F);
      } else if (!i.hasOwnProperty(n.backref))
        throw new ReferenceError(F);
      const l = s && y.isInstalled("namespacing") ? i.groups[n.backref] : i[n.backref];
      a.push(l || "");
    } else
      a.push(i[0]);
  }
  for (const i of t)
    y.forEach(i, n.regex, o);
  return r === e.length - 1 || !a.length ? a : D(a, r + 1);
}([u], 0);
y.replace = (u, e, D, t) => {
  const r = y.isRegExp(e), n = e.global && t !== "one" || t === "all", a = (n ? "g" : "") + (e.sticky ? "y" : "") || "noGY";
  let o = e;
  r ? (e[I] = e[I] || {}, o = e[I][a] || (e[I][a] = Tu(e, {
    addG: !!n,
    removeG: t === "one",
    isInternalOnly: !0
  }))) : n && (o = new RegExp(y.escape(String(e)), "g"));
  const i = iu.replace.call(ju(u), o, D);
  return r && e.global && (e.lastIndex = 0), i;
};
y.replaceEach = (u, e) => {
  for (const D of e)
    u = y.replace(u, D[0], D[1], D[2]);
  return u;
};
y.split = (u, e, D) => iu.split.call(ju(u), e, D);
y.test = (u, e, D, t) => !!y.exec(u, e, D, t);
y.uninstall = (u) => {
  u = $r(u), _u.astral && u.astral && xr(!1), _u.namespacing && u.namespacing && Or(!1);
};
y.union = (u, e, D) => {
  D = D || {};
  const t = D.conjunction || "or";
  let r = 0, n, a;
  function o(l, A, f) {
    const C = a[r - n];
    if (A) {
      if (++r, C)
        return `(?<${C}>`;
    } else if (f)
      return `\\${+f + n}`;
    return l;
  }
  if (!(_e(u, "Array") && u.length))
    throw new TypeError("Must provide a nonempty array of patterns to merge");
  const i = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g, F = [];
  for (const l of u)
    y.isRegExp(l) ? (n = r, a = l[I] && l[I].captureNames || [], F.push(y(l.source).source.replace(i, o))) : F.push(y.escape(l));
  const s = t === "none" ? "" : "|";
  return y(F.join(s), e);
};
iu.exec = function(u) {
  const e = this.lastIndex, D = RegExp.prototype.exec.apply(this, arguments);
  if (D) {
    if (!VC && D.length > 1 && D.includes("")) {
      const t = Tu(this, {
        removeG: !0,
        isInternalOnly: !0
      });
      String(u).slice(D.index).replace(t, (...r) => {
        const n = r.length;
        for (let a = 1; a < n - 2; ++a)
          r[a] === void 0 && (D[a] = void 0);
      });
    }
    if (this[I] && this[I].captureNames) {
      let t = D;
      y.isInstalled("namespacing") && (D.groups = /* @__PURE__ */ Object.create(null), t = D.groups);
      for (let r = 1; r < D.length; ++r) {
        const n = this[I].captureNames[r - 1];
        n && (t[n] = D[r]);
      }
    } else
      !D.groups && y.isInstalled("namespacing") && (D.groups = void 0);
    this.global && !D[0].length && this.lastIndex > D.index && (this.lastIndex = D.index);
  }
  return this.global || (this.lastIndex = e), D;
};
iu.test = function(u) {
  return !!iu.exec.call(this, u);
};
iu.match = function(u) {
  if (!y.isRegExp(u))
    u = new RegExp(u);
  else if (u.global) {
    const e = String.prototype.match.apply(this, arguments);
    return u.lastIndex = 0, e;
  }
  return iu.exec.call(u, ju(this));
};
iu.replace = function(u, e) {
  const D = y.isRegExp(u);
  let t, r, n;
  return D ? (u[I] && ({ captureNames: r } = u[I]), t = u.lastIndex) : u += "", _e(e, "Function") ? n = String(this).replace(u, (...a) => {
    if (r) {
      let o;
      y.isInstalled("namespacing") ? (o = /* @__PURE__ */ Object.create(null), a.push(o)) : (a[0] = new String(a[0]), [o] = a);
      for (let i = 0; i < r.length; ++i)
        r[i] && (o[r[i]] = a[i + 1]);
    }
    return e(...a);
  }) : n = String(ju(this)).replace(u, (...a) => {
    return String(e).replace(ZC, o);
    function o(i, F, s, l) {
      F = F || s;
      const A = _e(a[a.length - 1], "Object") ? 4 : 3, f = a.length - A;
      if (F) {
        if (/^\d+$/.test(F)) {
          const d = +F;
          if (d <= f)
            return a[d] || "";
        }
        const C = r ? r.indexOf(F) : -1;
        if (C < 0)
          throw new SyntaxError(`Backreference to undefined group ${i}`);
        return a[C + 1] || "";
      }
      if (l === "" || l === " ")
        throw new SyntaxError(`Invalid token ${i}`);
      if (l === "&" || +l == 0)
        return a[0];
      if (l === "$")
        return "$";
      if (l === "`")
        return a[a.length - 1].slice(0, a[a.length - 2]);
      if (l === "'")
        return a[a.length - 1].slice(a[a.length - 2] + a[0].length);
      if (l = +l, !isNaN(l)) {
        if (l > f)
          throw new SyntaxError(`Backreference to undefined group ${i}`);
        return a[l] || "";
      }
      throw new SyntaxError(`Invalid token ${i}`);
    }
  }), D && (u.global ? u.lastIndex = 0 : u.lastIndex = t), n;
};
iu.split = function(u, e) {
  if (!y.isRegExp(u))
    return String.prototype.split.apply(this, arguments);
  const D = String(this), t = [], r = u.lastIndex;
  let n = 0, a;
  return e = (e === void 0 ? -1 : e) >>> 0, y.forEach(D, u, (o) => {
    o.index + o[0].length > n && (t.push(D.slice(n, o.index)), o.length > 1 && o.index < D.length && Array.prototype.push.apply(t, o.slice(1)), a = o[0].length, n = o.index + a);
  }), n === D.length ? (!u.test("") || a) && t.push("") : t.push(D.slice(n)), u.lastIndex = r, t.length > e ? t.slice(0, e) : t;
};
y.addToken(
  /\\([ABCE-RTUVXYZaeg-mopqyz]|c(?![A-Za-z])|u(?![\dA-Fa-f]{4}|{[\dA-Fa-f]+})|x(?![\dA-Fa-f]{2}))/,
  (u, e) => {
    if (u[1] === "B" && e === ku)
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
  (u, e, D) => {
    const t = br(u[1]);
    if (t > 1114111)
      throw new SyntaxError(`Invalid Unicode code point ${u[0]}`);
    if (t <= 65535)
      return `\\u${B0(d0(t))}`;
    if (vr && D.includes("u"))
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
  wr,
  { leadChar: "(" }
);
y.addToken(
  /\s+|#[^\n]*\n?/,
  wr,
  { flag: "x" }
);
c0 || y.addToken(
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
    const e = isNaN(u[1]) ? this.captureNames.indexOf(u[1]) + 1 : +u[1], D = u.index + u[0].length;
    if (!e || e > this.captureNames.length)
      throw new SyntaxError(`Backreference to undefined group ${u[0]}`);
    return `\\${e}${D === u.input.length || isNaN(u.input[D]) ? "" : "(?:)"}`;
  },
  { leadChar: "\\" }
);
y.addToken(
  /\\(\d+)/,
  function(u, e) {
    if (!(e === ku && /^[1-9]/.test(u[1]) && +u[1] <= this.captureNames.length) && u[1] !== "0")
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
  function(u, e, D) {
    return D.includes("n") ? "(?:" : (this.captureNames.push(null), "(");
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
const rE = (u) => {
  const e = "xregexp", D = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g, t = u.union([/\({{([\w$]+)}}\)|{{([\w$]+)}}/, D], "g", {
    conjunction: "or"
  });
  function r(F) {
    const s = /^(?:\(\?:\))*\^/, l = /\$(?:\(\?:\))*$/;
    return s.test(F) && l.test(F) && // Ensure that the trailing `$` isn't escaped
    l.test(F.replace(/\\[\s\S]/g, "")) ? F.replace(s, "").replace(l, "") : F;
  }
  function n(F, s) {
    const l = s ? "x" : "";
    return u.isRegExp(F) ? F[e] && F[e].captureNames ? (
      // Don't recompile, to preserve capture names
      F
    ) : (
      // Recompile as XRegExp
      u(F.source, l)
    ) : (
      // Compile string as XRegExp
      u(F, l)
    );
  }
  function a(F) {
    return F instanceof RegExp ? F : u.escape(F);
  }
  function o(F, s, l) {
    return F[`subpattern${l}`] = s, F;
  }
  function i(F, s, l) {
    const A = s < l.length - 1;
    return F + (A ? `{{subpattern${s}}}` : "");
  }
  u.tag = (F) => (s, ...l) => {
    const A = l.map(a).reduce(o, {}), f = s.raw.map(i).join("");
    return u.build(f, A, F);
  }, u.build = (F, s, l) => {
    l = l || "";
    const A = l.includes("x"), f = /^\(\?([\w$]+)\)/.exec(F);
    f && (l = u._clipDuplicates(l + f[1]));
    const C = {};
    for (const b in s)
      if (s.hasOwnProperty(b)) {
        const x = n(s[b], A);
        C[b] = {
          // Deanchoring allows embedding independently useful anchored regexes. If you
          // really need to keep your anchors, double them (i.e., `^^...$$`).
          pattern: r(x.source),
          names: x[e].captureNames || []
        };
      }
    const d = n(F, A);
    let E = 0, c, h = 0;
    const B = [0], p = d[e].captureNames || [], m = d.source.replace(t, (b, x, Y, X, R) => {
      const T = x || Y;
      let N, G, ru;
      if (T) {
        if (!C.hasOwnProperty(T))
          throw new ReferenceError(`Undefined property ${b}`);
        x ? (N = p[h], B[++h] = ++E, G = `(?<${N || T}>`) : G = "(?:", c = E;
        const Uu = C[T].pattern.replace(D, (Ru, Lu, Bu) => {
          if (Lu) {
            if (N = C[T].names[E - c], ++E, N)
              return `(?<${N}>`;
          } else if (Bu)
            return ru = +Bu - 1, C[T].names[ru] ? (
              // Need to preserve the backreference name in case using flag `n`
              `\\k<${C[T].names[ru]}>`
            ) : `\\${+Bu + c}`;
          return Ru;
        });
        return `${G}${Uu})`;
      }
      if (X) {
        if (N = p[h], B[++h] = ++E, N)
          return `(?<${N}>`;
      } else if (R)
        return ru = +R - 1, p[ru] ? (
          // Need to preserve the backreference name in case using flag `n`
          `\\k<${p[ru]}>`
        ) : `\\${B[+R]}`;
      return b;
    });
    return u(m, l);
  };
};
/*!
 * XRegExp.matchRecursive 5.1.1
 * <xregexp.com>
 * Steven Levithan (c) 2009-present MIT License
 */
const nE = (u) => {
  function e(D, t, r, n) {
    return {
      name: D,
      value: t,
      start: r,
      end: n
    };
  }
  u.matchRecursive = (D, t, r, n, a) => {
    n = n || "", a = a || {};
    const o = n.includes("g"), i = n.includes("y"), F = n.replace(/y/g, "");
    t = u(t, F), r = u(r, F);
    let s, { escapeChar: l } = a;
    if (l) {
      if (l.length > 1)
        throw new Error("Cannot use more than one escape character");
      l = u.escape(l), s = new RegExp(
        `(?:${l}[\\S\\s]|(?:(?!${// Using `XRegExp.union` safely rewrites backreferences in `left` and `right`.
        // Intentionally not passing `basicFlags` to `XRegExp.union` since any syntax
        // transformation resulting from those flags was already applied to `left` and
        // `right` when they were passed through the XRegExp constructor above.
        u.union([t, r], "", { conjunction: "or" }).source})[^${l}])+)+`,
        // Flags `dgy` not needed here
        n.replace(u._hasNativeFlag("s") ? /[^imsu]/g : /[^imu]/g, "")
      );
    }
    let A = 0, f = 0, C = 0, d = 0, E, c, h, B;
    const p = a.valueNames, m = [];
    for (; ; ) {
      if (l && (C += (u.exec(D, s, C, "sticky") || [""])[0].length), h = u.exec(D, t, C), B = u.exec(D, r, C), h && B && (h.index <= B.index ? B = null : h = null), h || B)
        f = (h || B).index, C = f + (h || B)[0].length;
      else if (!A)
        break;
      if (i && !A && f > d)
        break;
      if (h)
        A || (E = f, c = C), A += 1;
      else if (B && A) {
        if (A -= 1, !A && (p ? (p[0] && E > d && m.push(e(p[0], D.slice(d, E), d, E)), p[1] && m.push(e(p[1], D.slice(E, c), E, c)), p[2] && m.push(e(p[2], D.slice(c, f), c, f)), p[3] && m.push(e(p[3], D.slice(f, C), f, C))) : m.push(D.slice(c, f)), d = C, !o))
          break;
      } else {
        const b = a.unbalanced || "error";
        if (b === "skip" || b === "skip-lazy")
          if (B)
            B = null;
          else {
            if (b === "skip") {
              const x = u.exec(D, t, E, "sticky")[0].length;
              C = E + (x || 1);
            } else
              C = E + 1;
            A = 0;
          }
        else if (b === "error") {
          const x = B ? "right" : "left", Y = B ? f : E;
          throw new Error(`Unbalanced ${x} delimiter found in string at position ${Y}`);
        } else
          throw new Error(`Unsupported value for unbalanced: ${b}`);
      }
      f === C && (C += 1);
    }
    return o && m.length > 0 && !i && p && p[0] && D.length > d && m.push(e(p[0], D.slice(d), d, D.length)), m;
  };
};
/*!
 * XRegExp Unicode Base 5.1.1
 * <xregexp.com>
 * Steven Levithan (c) 2008-present MIT License
 */
const aE = (u) => {
  const e = {}, D = {}, t = u._dec, r = u._hex, n = u._pad4;
  function a(A) {
    return A.replace(/[- _]+/g, "").toLowerCase();
  }
  function o(A) {
    const f = /^\\[xu](.+)/.exec(A);
    return f ? t(f[1]) : A.charCodeAt(A[0] === "\\" ? 1 : 0);
  }
  function i(A) {
    let f = "", C = -1;
    return u.forEach(
      A,
      /(\\x..|\\u....|\\?[\s\S])(?:-(\\x..|\\u....|\\?[\s\S]))?/,
      (d) => {
        const E = o(d[1]);
        E > C + 1 && (f += `\\u${n(r(C + 1))}`, E > C + 2 && (f += `-\\u${n(r(E - 1))}`)), C = o(d[2] || d[1]);
      }
    ), C < 65535 && (f += `\\u${n(r(C + 1))}`, C < 65534 && (f += "-\\uFFFF")), f;
  }
  function F(A) {
    const f = "b!";
    return e[A][f] || (e[A][f] = i(e[A].bmp));
  }
  function s(A, f) {
    const C = e[A];
    let d = "";
    return C.bmp && !C.isBmpLast && (d = `[${C.bmp}]${C.astral ? "|" : ""}`), C.astral && (d += C.astral), C.isBmpLast && C.bmp && (d += `${C.astral ? "|" : ""}[${C.bmp}]`), f ? `(?:(?!${d})(?:[\uD800-\uDBFF][\uDC00-\uDFFF]|[\0-￿]))` : `(?:${d})`;
  }
  function l(A, f) {
    const C = f ? "a!" : "a=";
    return e[A][C] || (e[A][C] = s(A, f));
  }
  u.addToken(
    // Use `*` instead of `+` to avoid capturing `^` as the token name in `\p{^}`
    /\\([pP])(?:{(\^?)(?:(\w+)=)?([^}]*)}|([A-Za-z]))/,
    (A, f, C) => {
      const d = "Invalid double negation ", E = "Unknown Unicode token ", c = "Unicode token missing data ", h = "Astral mode required for Unicode token ", B = "Astral mode does not support Unicode tokens within character classes", [
        p,
        m,
        b,
        x,
        Y,
        X
      ] = A;
      let R = m === "P" || !!b;
      const T = C.includes("A");
      let N = a(X || Y), G = e[N];
      if (m === "P" && b)
        throw new SyntaxError(d + p);
      if (!e.hasOwnProperty(N))
        throw new SyntaxError(E + p);
      if (x && !(D[x] && D[x][N]))
        throw new SyntaxError(E + p);
      if (G.inverseOf) {
        if (N = a(G.inverseOf), !e.hasOwnProperty(N))
          throw new ReferenceError(`${c + p} -> ${G.inverseOf}`);
        G = e[N], R = !R;
      }
      if (!(G.bmp || T))
        throw new SyntaxError(h + p);
      if (T) {
        if (f === "class")
          throw new SyntaxError(B);
        return l(N, R);
      }
      return f === "class" ? R ? F(N) : G.bmp : `${(R ? "[^" : "[") + G.bmp}]`;
    },
    {
      scope: "all",
      optionalFlags: "A",
      leadChar: "\\"
    }
  ), u.addUnicodeData = (A, f) => {
    const C = "Unicode token requires name", d = "Unicode token has no character data ";
    f && (D[f] = {});
    for (const E of A) {
      if (!E.name)
        throw new Error(C);
      if (!(E.inverseOf || E.bmp || E.astral))
        throw new Error(d + E.name);
      const c = a(E.name);
      if (e[c] = E, f && (D[f][c] = !0), E.alias) {
        const h = a(E.alias);
        e[h] = E, f && (D[f][h] = !0);
      }
    }
    u.cache.flush("patterns");
  }, u._getUnicodeProperty = (A) => {
    const f = a(A);
    return e[f];
  };
};
var FE = [
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
const oE = /* @__PURE__ */ $u(FE);
/*!
 * XRegExp Unicode Categories 5.1.1
 * <xregexp.com>
 * Steven Levithan (c) 2010-present MIT License
 * Unicode data by Mathias Bynens <mathiasbynens.be>
 */
const iE = (u) => {
  if (!u.addUnicodeData)
    throw new ReferenceError("Unicode Base must be loaded before Unicode Categories");
  u.addUnicodeData(oE);
};
var sE = [
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
const lE = /* @__PURE__ */ $u(sE);
/*!
 * XRegExp Unicode Properties 5.1.1
 * <xregexp.com>
 * Steven Levithan (c) 2012-present MIT License
 * Unicode data by Mathias Bynens <mathiasbynens.be>
 */
const CE = (u) => {
  if (!u.addUnicodeData)
    throw new ReferenceError("Unicode Base must be loaded before Unicode Properties");
  const e = lE;
  e.push({
    name: "Assigned",
    // Since this is defined as the inverse of Unicode category Cn (Unassigned), the Unicode
    // Categories addon is required to use this property
    inverseOf: "Cn"
  }), u.addUnicodeData(e);
};
var EE = [
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
const AE = /* @__PURE__ */ $u(EE);
/*!
 * XRegExp Unicode Scripts 5.1.1
 * <xregexp.com>
 * Steven Levithan (c) 2010-present MIT License
 * Unicode data by Mathias Bynens <mathiasbynens.be>
 */
const cE = (u) => {
  if (!u.addUnicodeData)
    throw new ReferenceError("Unicode Base must be loaded before Unicode Scripts");
  u.addUnicodeData(AE, "Script");
};
rE(y);
nE(y);
aE(y);
iE(y);
CE(y);
cE(y);
function au(u) {
  "@babel/helpers - typeof";
  return au = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, au(u);
}
function Tr(u, e) {
  if (!(u instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function dt(u, e) {
  for (var D = 0; D < e.length; D++) {
    var t = e[D];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(u, t.key, t);
  }
}
function Sr(u, e, D) {
  return e && dt(u.prototype, e), D && dt(u, D), Object.defineProperty(u, "prototype", {
    writable: !1
  }), u;
}
function fE(u, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  u.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: u,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(u, "prototype", {
    writable: !1
  }), e && Fe(u, e);
}
function ae(u) {
  return ae = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(D) {
    return D.__proto__ || Object.getPrototypeOf(D);
  }, ae(u);
}
function Fe(u, e) {
  return Fe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, r) {
    return t.__proto__ = r, t;
  }, Fe(u, e);
}
function Pr() {
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
function Ku(u, e, D) {
  return Pr() ? Ku = Reflect.construct.bind() : Ku = function(r, n, a) {
    var o = [null];
    o.push.apply(o, n);
    var i = Function.bind.apply(r, o), F = new i();
    return a && Fe(F, a.prototype), F;
  }, Ku.apply(null, arguments);
}
function dE(u) {
  return Function.toString.call(u).indexOf("[native code]") !== -1;
}
function WD(u) {
  var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return WD = function(t) {
    if (t === null || !dE(t))
      return t;
    if (typeof t != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof e < "u") {
      if (e.has(t))
        return e.get(t);
      e.set(t, r);
    }
    function r() {
      return Ku(t, arguments, ae(this).constructor);
    }
    return r.prototype = Object.create(t.prototype, {
      constructor: {
        value: r,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), Fe(r, t);
  }, WD(u);
}
function BE(u) {
  if (u === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return u;
}
function pE(u, e) {
  if (e && (typeof e == "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return BE(u);
}
function hE(u) {
  var e = Pr();
  return function() {
    var t = ae(u), r;
    if (e) {
      var n = ae(this).constructor;
      r = Reflect.construct(t, arguments, n);
    } else
      r = t.apply(this, arguments);
    return pE(this, r);
  };
}
function gE(u) {
  return mE(u) || vE(u) || Mr(u) || _E();
}
function mE(u) {
  if (Array.isArray(u))
    return HD(u);
}
function vE(u) {
  if (typeof Symbol < "u" && u[Symbol.iterator] != null || u["@@iterator"] != null)
    return Array.from(u);
}
function Mr(u, e) {
  if (u) {
    if (typeof u == "string")
      return HD(u, e);
    var D = Object.prototype.toString.call(u).slice(8, -1);
    if (D === "Object" && u.constructor && (D = u.constructor.name), D === "Map" || D === "Set")
      return Array.from(u);
    if (D === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(D))
      return HD(u, e);
  }
}
function HD(u, e) {
  (e == null || e > u.length) && (e = u.length);
  for (var D = 0, t = new Array(e); D < e; D++)
    t[D] = u[D];
  return t;
}
function _E() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function yE(u, e) {
  var D = typeof Symbol < "u" && u[Symbol.iterator] || u["@@iterator"];
  if (!D) {
    if (Array.isArray(u) || (D = Mr(u)) || e && u && typeof u.length == "number") {
      D && (u = D);
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
      D = D.call(u);
    },
    n: function() {
      var i = D.next();
      return n = i.done, i;
    },
    e: function(i) {
      a = !0, o = i;
    },
    f: function() {
      try {
        !n && D.return != null && D.return();
      } finally {
        if (a)
          throw o;
      }
    }
  };
}
var V = Object.prototype.hasOwnProperty;
function pu(u, e) {
  return u = u.slice(), u.push(e), u;
}
function GD(u, e) {
  return e = e.slice(), e.unshift(u), e;
}
var bE = /* @__PURE__ */ function(u) {
  fE(D, u);
  var e = hE(D);
  function D(t) {
    var r;
    return Tr(this, D), r = e.call(this, 'JSONPath should not be called with "new" (it prevents return of (unwrapped) scalar values)'), r.avoidNew = !0, r.value = t, r.name = "NewError", r;
  }
  return Sr(D);
}(/* @__PURE__ */ WD(Error));
function S(u, e, D, t, r) {
  if (!(this instanceof S))
    try {
      return new S(u, e, D, t, r);
    } catch (i) {
      if (!i.avoidNew)
        throw i;
      return i.value;
    }
  typeof u == "string" && (r = t, t = D, D = e, e = u, u = null);
  var n = u && au(u) === "object";
  if (u = u || {}, this.json = u.json || D, this.path = u.path || e, this.resultType = u.resultType || "value", this.flatten = u.flatten || !1, this.wrap = V.call(u, "wrap") ? u.wrap : !0, this.sandbox = u.sandbox || {}, this.preventEval = u.preventEval || !1, this.parent = u.parent || null, this.parentProperty = u.parentProperty || null, this.callback = u.callback || t || null, this.otherTypeCallback = u.otherTypeCallback || r || function() {
    throw new TypeError("You must supply an otherTypeCallback callback option with the @other() operator.");
  }, u.autostart !== !1) {
    var a = {
      path: n ? u.path : e
    };
    n ? "json" in u && (a.json = u.json) : a.json = D;
    var o = this.evaluate(a);
    if (!o || au(o) !== "object")
      throw new bE(o);
    return o;
  }
}
S.prototype.evaluate = function(u, e, D, t) {
  var r = this, n = this.parent, a = this.parentProperty, o = this.flatten, i = this.wrap;
  if (this.currResultType = this.resultType, this.currPreventEval = this.preventEval, this.currSandbox = this.sandbox, D = D || this.callback, this.currOtherTypeCallback = t || this.otherTypeCallback, e = e || this.json, u = u || this.path, u && au(u) === "object" && !Array.isArray(u)) {
    if (!u.path && u.path !== "")
      throw new TypeError('You must supply a "path" property when providing an object argument to JSONPath.evaluate().');
    if (!V.call(u, "json"))
      throw new TypeError('You must supply a "json" property when providing an object argument to JSONPath.evaluate().');
    var F = u;
    e = F.json, o = V.call(u, "flatten") ? u.flatten : o, this.currResultType = V.call(u, "resultType") ? u.resultType : this.currResultType, this.currSandbox = V.call(u, "sandbox") ? u.sandbox : this.currSandbox, i = V.call(u, "wrap") ? u.wrap : i, this.currPreventEval = V.call(u, "preventEval") ? u.preventEval : this.currPreventEval, D = V.call(u, "callback") ? u.callback : D, this.currOtherTypeCallback = V.call(u, "otherTypeCallback") ? u.otherTypeCallback : this.currOtherTypeCallback, n = V.call(u, "parent") ? u.parent : n, a = V.call(u, "parentProperty") ? u.parentProperty : a, u = u.path;
  }
  if (n = n || null, a = a || null, Array.isArray(u) && (u = S.toPathString(u)), !(!u && u !== "" || !e)) {
    var s = S.toPathArray(u);
    s[0] === "$" && s.length > 1 && s.shift(), this._hasParentSelector = null;
    var l = this._trace(s, e, ["$"], n, a, D).filter(function(A) {
      return A && !A.isParentSelector;
    });
    return l.length ? !i && l.length === 1 && !l[0].hasArrExpr ? this._getPreferredOutput(l[0]) : l.reduce(function(A, f) {
      var C = r._getPreferredOutput(f);
      return o && Array.isArray(C) ? A = A.concat(C) : A.push(C), A;
    }, []) : i ? [] : void 0;
  }
};
S.prototype._getPreferredOutput = function(u) {
  var e = this.currResultType;
  switch (e) {
    case "all": {
      var D = Array.isArray(u.path) ? u.path : S.toPathArray(u.path);
      return u.pointer = S.toPointer(D), u.path = typeof u.path == "string" ? u.path : S.toPathString(u.path), u;
    }
    case "value":
    case "parent":
    case "parentProperty":
      return u[e];
    case "path":
      return S.toPathString(u[e]);
    case "pointer":
      return S.toPointer(u.path);
    default:
      throw new TypeError("Unknown result type");
  }
};
S.prototype._handleCallback = function(u, e, D) {
  if (e) {
    var t = this._getPreferredOutput(u);
    u.path = typeof u.path == "string" ? u.path : S.toPathString(u.path), e(t, D, u);
  }
};
S.prototype._trace = function(u, e, D, t, r, n, a, o) {
  var i = this, F;
  if (!u.length)
    return F = {
      path: D,
      value: e,
      parent: t,
      parentProperty: r,
      hasArrExpr: a
    }, this._handleCallback(F, n, "value"), F;
  var s = u[0], l = u.slice(1), A = [];
  function f(T) {
    Array.isArray(T) ? T.forEach(function(N) {
      A.push(N);
    }) : A.push(T);
  }
  if ((typeof s != "string" || o) && e && V.call(e, s))
    f(this._trace(l, e[s], pu(D, s), e, s, n, a));
  else if (s === "*")
    this._walk(e, function(T) {
      f(i._trace(l, e[T], pu(D, T), e, T, n, !0, !0));
    });
  else if (s === "..")
    f(this._trace(l, e, D, t, r, n, a)), this._walk(e, function(T) {
      au(e[T]) === "object" && f(i._trace(u.slice(), e[T], pu(D, T), e, T, n, !0));
    });
  else {
    if (s === "^")
      return this._hasParentSelector = !0, {
        path: D.slice(0, -1),
        expr: l,
        isParentSelector: !0
      };
    if (s === "~")
      return F = {
        path: pu(D, s),
        value: r,
        parent: t,
        parentProperty: null
      }, this._handleCallback(F, n, "property"), F;
    if (s === "$")
      f(this._trace(l, e, D, null, null, n, a));
    else if (/^(\x2D?[0-9]*):(\x2D?[0-9]*):?([0-9]*)$/.test(s))
      f(this._slice(s, l, e, D, t, r, n));
    else if (s.indexOf("?(") === 0) {
      if (this.currPreventEval)
        throw new Error("Eval [?(expr)] prevented in JSONPath expression.");
      var C = s.replace(/^\?\(((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?)\)$/, "$1");
      this._walk(e, function(T) {
        i._eval(C, e[T], T, D, t, r) && f(i._trace(l, e[T], pu(D, T), e, T, n, !0));
      });
    } else if (s[0] === "(") {
      if (this.currPreventEval)
        throw new Error("Eval [(expr)] prevented in JSONPath expression.");
      f(this._trace(GD(this._eval(s, e, D[D.length - 1], D.slice(0, -1), t, r), l), e, D, t, r, n, a));
    } else if (s[0] === "@") {
      var d = !1, E = s.slice(1, -2);
      switch (E) {
        case "scalar":
          (!e || !["object", "function"].includes(au(e))) && (d = !0);
          break;
        case "boolean":
        case "string":
        case "undefined":
        case "function":
          au(e) === E && (d = !0);
          break;
        case "integer":
          Number.isFinite(e) && !(e % 1) && (d = !0);
          break;
        case "number":
          Number.isFinite(e) && (d = !0);
          break;
        case "nonFinite":
          typeof e == "number" && !Number.isFinite(e) && (d = !0);
          break;
        case "object":
          e && au(e) === E && (d = !0);
          break;
        case "array":
          Array.isArray(e) && (d = !0);
          break;
        case "other":
          d = this.currOtherTypeCallback(e, D, t, r);
          break;
        case "null":
          e === null && (d = !0);
          break;
        default:
          throw new TypeError("Unknown value type " + E);
      }
      if (d)
        return F = {
          path: D,
          value: e,
          parent: t,
          parentProperty: r
        }, this._handleCallback(F, n, "value"), F;
    } else if (s[0] === "`" && e && V.call(e, s.slice(1))) {
      var c = s.slice(1);
      f(this._trace(l, e[c], pu(D, c), e, c, n, a, !0));
    } else if (s.includes(",")) {
      var h = s.split(","), B = yE(h), p;
      try {
        for (B.s(); !(p = B.n()).done; ) {
          var m = p.value;
          f(this._trace(GD(m, l), e, D, t, r, n, !0));
        }
      } catch (T) {
        B.e(T);
      } finally {
        B.f();
      }
    } else
      !o && e && V.call(e, s) && f(this._trace(l, e[s], pu(D, s), e, s, n, a, !0));
  }
  if (this._hasParentSelector)
    for (var b = 0; b < A.length; b++) {
      var x = A[b];
      if (x && x.isParentSelector) {
        var Y = this._trace(x.expr, e, x.path, t, r, n, a);
        if (Array.isArray(Y)) {
          A[b] = Y[0];
          for (var X = Y.length, R = 1; R < X; R++)
            b++, A.splice(b, 0, Y[R]);
        } else
          A[b] = Y;
      }
    }
  return A;
};
S.prototype._walk = function(u, e) {
  if (Array.isArray(u))
    for (var D = u.length, t = 0; t < D; t++)
      e(t);
  else
    u && au(u) === "object" && Object.keys(u).forEach(function(r) {
      e(r);
    });
};
S.prototype._slice = function(u, e, D, t, r, n, a) {
  if (Array.isArray(D)) {
    var o = D.length, i = u.split(":"), F = i[2] && Number.parseInt(i[2]) || 1, s = i[0] && Number.parseInt(i[0]) || 0, l = i[1] && Number.parseInt(i[1]) || o;
    s = s < 0 ? Math.max(0, s + o) : Math.min(o, s), l = l < 0 ? Math.max(0, l + o) : Math.min(o, l);
    for (var A = [], f = s; f < l; f += F) {
      var C = this._trace(GD(f, e), D, t, r, n, a, !0);
      C.forEach(function(d) {
        A.push(d);
      });
    }
    return A;
  }
};
S.prototype._eval = function(u, e, D, t, r, n) {
  this.currSandbox._$_parentProperty = n, this.currSandbox._$_parent = r, this.currSandbox._$_property = D, this.currSandbox._$_root = this.json, this.currSandbox._$_v = e;
  var a = u.includes("@path");
  a && (this.currSandbox._$_path = S.toPathString(t.concat([D])));
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
  for (var e = u, D = e.length, t = "$", r = 1; r < D; r++)
    /^(~|\^|@(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\(\))$/.test(e[r]) || (t += /^[\*0-9]+$/.test(e[r]) ? "[" + e[r] + "]" : "['" + e[r] + "']");
  return t;
};
S.toPointer = function(u) {
  for (var e = u, D = e.length, t = "", r = 1; r < D; r++)
    /^(~|\^|@(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\(\))$/.test(e[r]) || (t += "/" + e[r].toString().replace(/~/g, "~0").replace(/\//g, "~1"));
  return t;
};
S.toPathArray = function(u) {
  var e = S.cache;
  if (e[u])
    return e[u].concat();
  var D = [], t = u.replace(/@(?:null|boolean|number|string|integer|undefined|nonFinite|scalar|array|object|function|other)\(\)/g, ";$&;").replace(/['\[](\??\((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\))['\]]/g, function(n, a) {
    return "[#" + (D.push(a) - 1) + "]";
  }).replace(/\[["']((?:(?!['\]])[\s\S])*)["']\]/g, function(n, a) {
    return "['" + a.replace(/\./g, "%@%").replace(/~/g, "%%@@%%") + "']";
  }).replace(/~/g, ";~;").replace(/["']?\.["']?(?!(?:(?!\[)[\s\S])*\])|\[["']?/g, ";").replace(/%@%/g, ".").replace(/%%@@%%/g, "~").replace(/(?:;)?(\^+)(?:;)?/g, function(n, a) {
    return ";" + a.split("").join(";") + ";";
  }).replace(/;;;|;;/g, ";..;").replace(/;$|'?\]|'$/g, ""), r = t.split(";").map(function(n) {
    var a = n.match(/#([0-9]+)/);
    return !a || !a[1] ? n : D[a[1]];
  });
  return e[u] = r, e[u].concat();
};
var wE = function(e, D, t) {
  for (var r = e.length, n = 0; n < r; n++) {
    var a = e[n];
    t(a) && D.push(e.splice(n--, 1)[0]);
  }
}, $E = /* @__PURE__ */ function() {
  function u(e) {
    Tr(this, u), this.code = e;
  }
  return Sr(u, [{
    key: "runInNewContext",
    value: function(D) {
      var t = this.code, r = Object.keys(D), n = [];
      wE(r, n, function(s) {
        return typeof D[s] == "function";
      });
      var a = r.map(function(s, l) {
        return D[s];
      }), o = n.reduce(function(s, l) {
        var A = D[l].toString();
        return /function/.test(A) || (A = "function " + A), "var " + l + "=" + A + ";" + s;
      }, "");
      t = o + t, !/(["'])use strict\1/.test(t) && !r.includes("arguments") && (t = "var arguments = undefined;" + t), t = t.replace(/;[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*$/, "");
      var i = t.lastIndexOf(";"), F = i > -1 ? t.slice(0, i + 1) + " return " + t.slice(i + 1) : " return " + t;
      return Ku(Function, r.concat([F])).apply(void 0, gE(a));
    }
  }]), u;
}();
S.prototype.vm = {
  Script: $E
};
const tu = (u, e) => Vu(u) || Vu(e) ? null : (typeof e == "string" && /^\$\./.test(e) ? S({
  path: e,
  json: u
}) : Nt(u, e)) ?? null, kr = y.build("[^\\{\\}]*", {}, "gmx"), xE = y.build("[^\\|\\(\\)\\{\\}: 	]+", {}, "gmx"), OE = y.build("[^\\|\\(\\)\\{\\}]+", {}, "gmx"), TE = y.build(
  `
    \\|[ 	]*
      ({{filter}})
      ([ 	]*:[ 	]*({{args}}))*
      ({{tailing}})
  `,
  {
    filter: xE,
    args: OE,
    tailing: kr
  },
  "gmx"
), SE = y.build("[^\\:\\|\\(\\)\\{\\}\v 	]+", {}, "gmx"), PE = y.build(
  `
    [ \\(]*[ 	]*
      ({{selector}})
    ([ 	](?=\\))*)?[ \\)]*
    ({{tailing}})
  `,
  {
    selector: SE,
    tailing: kr
  },
  "gmx"
), Bt = y.build(
  `
    (\\{\\{[ 	]*
      ({{operator}})
    [ 	](?=\\})*\\}\\})
  `,
  { operator: PE },
  "gmx"
), Nu = (u, e) => e ? y.replace(
  e,
  Bt,
  (...D) => {
    var o;
    const t = nD(D), r = (o = y.exec((t == null ? void 0 : t.tailing) ?? "", TE)) == null ? void 0 : o.groups, n = tu(u, t == null ? void 0 : t.selector);
    let a = n;
    try {
      if (r) {
        const F = ((r == null ? void 0 : r.args) ?? "").trim().split(/\s:\s/);
        switch (r.filter) {
          case "date": {
            const s = F != null && F[1] ? tu(u, String(F == null ? void 0 : F[1])) ?? (F == null ? void 0 : F[1]) : Intl.DateTimeFormat().resolvedOptions().timeZone;
            a = HC(
              new Date(n),
              isNaN(GC(s)) ? Intl.DateTimeFormat().resolvedOptions().timeZone : s,
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
            a = ns(n, F == null ? void 0 : F[0]);
            break;
          case "last":
            a = nD(n);
            break;
          case "flat":
            a = ur(n);
            break;
          case "uniq":
            a = tr(n);
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
    return Bt.test(a) && (a = Nu(u, a)), a;
  },
  "all"
) : "", p0 = ({
  type: u,
  axises: e,
  data: D
}) => {
  const t = Kr({
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
    ...uD(
      Zu(i).filter(([, l]) => !Vu(l)).map(([l, A]) => {
        const f = A.selector ? tu(s, A.selector) : null, C = A.accessor ? Nu(s, A.accessor) : f;
        return [
          l,
          {
            normalized: Number(
              A.type === "number" ? parseFloat(String(f)) : A.type === "date" ? new Date(Number(f)) : f
            ),
            value: C
          }
        ];
      })
    )
  })), o = (i, F, s) => {
    const l = n(s).map((C) => ({
      ...C,
      label: Nu(C, C.label ?? ""),
      series: a(F, C.series)
    })), A = l.flatMap((C) => C.series), f = uD(
      Zu(F).filter(([, C]) => !Vu(C)).map(([C, d]) => {
        const E = tr(te(A, `${C}.${d.type === "string" ? "value" : "normalized"}`)), c = Number(d.min === "auto" ? os(E) : d.min ?? 0), h = Number(
          d.max === "auto" ? Fs(E) : d.max ?? E.length - (/radar|doughnut/.test(i ?? "") ? 0 : 1)
        );
        return [
          C,
          {
            ...d,
            min: c,
            max: h,
            metrics: d.type === "string" ? E.map((B, p) => ({
              normalized: p / (h - c),
              value: B
            })) : Array(O.clamp(O.ceil((h - c) / (d.step ?? 1)) + 1, 0, 1 / 0)).fill(0).map((B, p) => ({
              normalized: p / O.ceil((h - c) / (d.step ?? 1)),
              value: c + (d.step ?? 1) * p
            }))
          }
        ];
      })
    );
    return f && Zu(f).forEach(([C, d]) => {
      d.type === "string" ? l.forEach((E) => {
        E.series.forEach((c) => {
          c[C].normalized = te(d.metrics, "value").indexOf(c[C].value) / (d.metrics.length - (/radar|doughnut/.test(i ?? "") ? 0 : 1));
        });
      }) : l.forEach((E) => {
        E.series.forEach((c) => {
          c[C].normalized = (Number(c[C].normalized ?? 0) - Number(d.min)) / (Number(d.max) - Number(d.min));
        });
      });
    }), {
      datasets: l,
      axises: f
    };
  };
  return ht(() => {
    if (!Vu(g(D))) {
      const i = o(g(u), g(e), g(D));
      t.datasets = i.datasets, t.axises = i.axises;
    }
  }), {
    ...r
  };
}, ME = (u) => (ye("data-v-fefd0601"), u = u(), be(), u), kE = ["cx", "cy", "r", "stroke-dashoffset", "stroke-dasharray"], IE = ["x", "y"], NE = /* @__PURE__ */ ME(() => /* @__PURE__ */ v("hr", null, null, -1)), zE = { id: "chart-content-clip" }, jE = ["cx", "cy", "r"], UE = { "clip-path": "url(#chart-content-clip)" }, RE = ["height", "width", "x", "y"], LE = /* @__PURE__ */ H({
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
    const e = u, D = ou(), { width: t, height: r } = Pe(D), { axises: n, datasets: a } = p0({
      type: "doughnut",
      data: e.datasets,
      axises: e.axises
    }), o = L(
      () => O.clamp(
        O.min(t.value - e.options.offset.x, r.value - e.options.offset.y) / 2,
        0,
        1 / 0
      )
    ), i = L(() => e.options.round ? 30 : 15), F = L(() => o.value * 2 * O.PI), s = L(() => ({
      x: t.value / 2,
      y: r.value / 2
    })), l = L(
      () => a.value.map((f) => f.series.reduce((C, d) => C + d.y.normalized, 0))
    ), A = L(
      () => a.value.map((f, C) => ({
        ...f,
        series: f.series.map((d) => ({
          ...d,
          y: {
            ...d.y,
            normalized: O.clamp(
              d.y.normalized / l.value[C] - i.value / F.value,
              0,
              1
            )
          }
        })).filter((d) => d.y.normalized > i.value / F.value / 2).map((d, E, c) => ({
          ...d,
          y: {
            ...d.y,
            normalized: d.y.normalized / c.reduce((h, B) => h + B.y.normalized, 0)
          }
        })).map((d, E, c) => ({
          ...d,
          y: {
            ...d.y,
            normalized: O.clamp(
              d.y.normalized / c.reduce((h, B) => h + B.y.normalized, 0) - i.value / F.value,
              0,
              1
            )
          }
        })).map((d, E, c) => ({
          ...d,
          y: {
            ...d.y,
            offset: c.slice(0, E).reduce((h, B) => h + B.y.normalized, 0)
          }
        })).map((d, E) => ({
          ...d,
          x: {
            ...d.x,
            label: O.cos(
              O.rad(
                (d.y.offset + d.y.normalized / 2 + i.value / F.value * E) * 360 - 90
              )
            )
          },
          y: {
            ...d.y,
            label: O.sin(
              O.rad(
                (d.y.offset + d.y.normalized / 2 + i.value / F.value * E) * 360 - 90
              )
            )
          }
        }))
      }))
    );
    return (f, C) => (w(), $("div", {
      ref_key: "wrapperRef$",
      ref: D,
      class: _(f.$style["chart-container"])
    }, [
      Q(Me, {
        height: g(r),
        width: g(t)
      }, {
        path: K(() => [
          v("g", {
            class: _([f.$style["chart-group-plots"]])
          }, [
            (w(!0), $(M, null, W(g(A), (d) => (w(), $(M, {
              key: d.label
            }, [
              (w(!0), $(M, null, W(d.series, (E, c) => (w(), $("g", {
                key: `plot-${c}`,
                class: _(f.$style["chart-area"])
              }, [
                v("circle", {
                  cx: g(s).x,
                  cy: g(s).y,
                  r: g(o),
                  "stroke-dashoffset": E.y.offset * g(F) * -1 - g(i) * c + 0.25 * g(F),
                  "stroke-dasharray": `${E.y.normalized * g(F)} ${(1 - E.y.normalized) * g(F)}`,
                  class: _([
                    f.$style.behavior,
                    f.$style["chart-area"],
                    f.$style.doughnut,
                    f.$style.plot,
                    f.$style.clickable,
                    {
                      [f.$style.round]: e.options.round
                    }
                  ]),
                  "pointer-events": "visibleStroke"
                }, null, 10, kE),
                (w(), $("foreignObject", {
                  x: g(s).x + g(o) * E.x.label - 260 * +(E.x.label < 0),
                  y: g(s).y + g(o) * E.y.label - 240 * +(E.y.label < 0),
                  height: "240",
                  width: "260",
                  class: _([f.$style["chart-area"], f.$style["legend-container"]])
                }, [
                  Q(ke, {
                    class: _([f.$style["chart-area"], f.$style["legend-wrapper"]]),
                    radius: "var(--agh-ref-border-radius-500)"
                  }, {
                    default: K(() => [
                      e.options.title ? (w(), $(M, { key: 0 }, [
                        v("h1", {
                          class: _([f.$style["chart-area"], f.$style["legend-title"], f.$style.doughnut])
                        }, [
                          v("span", null, U(E.x.value), 1)
                        ], 2),
                        NE
                      ], 64)) : z("", !0),
                      (w(!0), $(M, null, W(g(n), (h, B) => (w(), $(M, { key: B }, [
                        !/(x)/.test(B) && h && E[B] ? (w(), $("div", {
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
                          }, U(E[B].value), 3)
                        ], 2)) : z("", !0)
                      ], 64))), 128))
                    ]),
                    _: 2
                  }, 1032, ["class", "radius"])
                ], 10, IE))
              ], 2))), 128))
            ], 64))), 128))
          ], 2),
          v("clipPath", zE, [
            v("circle", {
              cx: g(s).x,
              cy: g(s).y,
              r: g(o) - 10
            }, null, 8, jE)
          ]),
          v("g", UE, [
            (w(), $("foreignObject", {
              class: _(f.$style["chart-content-wrapper"]),
              height: g(o) * 2,
              width: g(o) * 2,
              x: g(s).x - g(o),
              y: g(s).y - g(o)
            }, [
              Ju(f.$slots, "default", {}, void 0, !0)
            ], 10, RE))
          ])
        ]),
        _: 3
      }, 8, ["height", "width"])
    ], 2));
  }
}), YE = "_behavior_pzvhi_1", WE = "_clickable_pzvhi_1", HE = "_disabled_pzvhi_4", GE = "_draggable_pzvhi_7", qE = "_loading_pzvhi_10", ZE = "_path_pzvhi_24", VE = "_radar_pzvhi_29", QE = "_label_pzvhi_32", KE = "_plot_pzvhi_85", JE = "_point_pzvhi_85", XE = "_doughnut_pzvhi_96", uA = "_bg_pzvhi_102", eA = "_round_pzvhi_106", DA = "_line_pzvhi_119", tA = {
  behavior: YE,
  clickable: WE,
  disabled: HE,
  draggable: GE,
  loading: qE,
  "chart-container": "_chart-container_pzvhi_14",
  "chart-axis": "_chart-axis_pzvhi_24",
  path: ZE,
  radar: VE,
  label: QE,
  "font-align--center": "_font-align--center_pzvhi_45",
  "font-align--right": "_font-align--right_pzvhi_48",
  "font-align--left": "_font-align--left_pzvhi_51",
  "box-align--center": "_box-align--center_pzvhi_54",
  "box-align--left": "_box-align--left_pzvhi_57",
  "box-align--right": "_box-align--right_pzvhi_60",
  "chart-group-plots": "_chart-group-plots_pzvhi_67",
  "chart-area": "_chart-area_pzvhi_67",
  plot: KE,
  point: JE,
  doughnut: XE,
  "legend-container": "_legend-container_pzvhi_96",
  bg: uA,
  round: eA,
  line: DA,
  "legend-wrapper": "_legend-wrapper_pzvhi_147",
  "legend-group": "_legend-group_pzvhi_158",
  "legend-value": "_legend-value_pzvhi_166",
  "legend-label": "_legend-label_pzvhi_169",
  "legend-title": "_legend-title_pzvhi_173"
}, rA = {
  $style: tA
}, Ic = /* @__PURE__ */ Du(LE, [["__cssModules", rA], ["__scopeId", "data-v-fefd0601"]]), nA = (u) => (ye("data-v-9f80c889"), u = u(), be(), u), aA = ["d"], FA = ["x", "y", "text-anchor"], oA = ["x", "y"], iA = ["d"], sA = ["cx", "cy"], lA = ["cx", "cy"], CA = ["x", "y"], EA = /* @__PURE__ */ nA(() => /* @__PURE__ */ v("hr", null, null, -1)), AA = /* @__PURE__ */ H({
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
    const e = u, D = ou(), { width: t, height: r } = Pe(D), { axises: n, datasets: a } = p0({
      type: "line",
      data: e.datasets,
      axises: e.axises
    }), o = L(
      () => {
        var F, s, l, A, f, C;
        return (s = (F = n.value) == null ? void 0 : F.x) != null && s.metrics && ((A = (l = n.value) == null ? void 0 : l.y) != null && A.metrics) && r.value && r.value - e.options.offset.y > 0 && t.value && t.value - e.options.offset.x > 0 ? `
  M ${e.options.offset.x} 0
  L ${e.options.offset.x} ${r.value - e.options.offset.y}
  L ${t.value} ${r.value - e.options.offset.y}
  ${(f = e.options.grid) != null && f.includes("x") ? `${n.value.x.metrics.map(
          (d) => `
              M ${d.normalized * (t.value - e.options.offset.x) + e.options.offset.x} 0
              V ${r.value - e.options.offset.y}
            `
        ).join("")}` : ""}
  ${(C = e.options.grid) != null && C.includes("y") ? `${n.value.y.metrics.map(
          (d) => `
              M ${e.options.offset.x} ${(1 - d.normalized) * (r.value - e.options.offset.y)}
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
          (s, l) => l === 0 ? `M ${s.x.normalized * (t.value - e.options.offset.x) + e.options.offset.x} ${(1 - s.y.normalized) * (r.value - e.options.offset.y)}` : e.options.curve === "smooth" ? l === 1 ? `C ${F.series[l - 1].x.normalized * (t.value - e.options.offset.x) + e.options.offset.x + t.value / F.series.length * e.options.radius} ${(1 - F.series[l - 1].y.normalized) * (r.value - e.options.offset.y)} ${s.x.normalized * (t.value - e.options.offset.x) + e.options.offset.x - t.value / F.series.length * e.options.radius} ${(1 - s.y.normalized) * (r.value - e.options.offset.y)} ${s.x.normalized * (t.value - e.options.offset.x) + e.options.offset.x} ${(1 - s.y.normalized) * (r.value - e.options.offset.y)}` : `S ${s.x.normalized * (t.value - e.options.offset.x) + e.options.offset.x - t.value / F.series.length * e.options.radius} ${(1 - s.y.normalized) * (r.value - e.options.offset.y)} ${s.x.normalized * (t.value - e.options.offset.x) + e.options.offset.x} ${(1 - s.y.normalized) * (r.value - e.options.offset.y)}` : `L ${s.x.normalized * (t.value - e.options.offset.x) + e.options.offset.x} ${(1 - s.y.normalized) * (r.value - e.options.offset.y)}`
        ).join(`
`)}`
      })) : []
    );
    return (F, s) => (w(), $("div", {
      ref_key: "wrapperRef$",
      ref: D,
      class: _(F.$style["chart-container"])
    }, [
      Q(Me, {
        height: g(r),
        width: g(t)
      }, {
        defs: K(() => []),
        path: K(() => [
          v("g", {
            id: "chart-group-axises",
            class: _([F.$style["chart-group-axises"]])
          }, [
            v("path", {
              d: g(o),
              class: _([F.$style["chart-axis"], F.$style.line, F.$style.path])
            }, null, 10, aA)
          ], 2),
          g(n) && g(t) && g(r) ? (w(), $("g", {
            key: 0,
            class: _([F.$style["chart-group-axises-label"]])
          }, [
            g(n).x && g(n).x.metrics ? (w(!0), $(M, { key: 0 }, W(g(n).x.metrics, (l, A) => (w(), $("text", {
              key: `axis-x--${A}`,
              x: l.normalized * (g(t) - e.options.offset.x) + e.options.offset.x,
              y: g(r) - e.options.offset.y + 20,
              class: _([F.$style["chart-axis"], F.$style.label]),
              "text-anchor": A === 0 ? "start" : A === g(n).x.metrics.length - 1 ? "end" : "middle"
            }, U(l.value), 11, FA))), 128)) : z("", !0),
            g(n).y && g(n).y.metrics ? (w(!0), $(M, { key: 1 }, W(g(n).y.metrics, (l, A) => (w(), $("text", {
              key: `axis-y--${A}`,
              x: e.options.offset.x - 10,
              y: (1 - l.normalized) * (g(r) - e.options.offset.y) + 5,
              class: _([F.$style["chart-axis"], F.$style.label]),
              "text-anchor": "end"
            }, U(l.value), 11, oA))), 128)) : z("", !0)
          ], 2)) : z("", !0),
          v("g", {
            class: _([F.$style["chart-group-plots"]])
          }, [
            (w(!0), $(M, null, W(g(i), (l) => (w(), $("g", {
              key: l.label,
              class: _([F.$style["chart-area"], F.$style.line, F.$style.plot])
            }, [
              v("path", {
                d: l.path
              }, null, 8, iA)
            ], 2))), 128)),
            (w(!0), $(M, null, W(g(a), (l) => (w(), $(M, null, [
              (w(!0), $(M, null, W(l.series, (A, f) => (w(), $("g", {
                key: `chart-plot-${l.label}-plot-${f}`,
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
                  cx: A.x.normalized * (g(t) - e.options.offset.x) + e.options.offset.x,
                  cy: (1 - A.y.normalized) * (g(r) - e.options.offset.y),
                  r: "50"
                }, null, 10, sA),
                v("circle", {
                  class: _([F.$style["chart-area"], F.$style.point, F.$style.plot]),
                  cx: A.x.normalized * (g(t) - e.options.offset.x) + e.options.offset.x,
                  cy: (1 - A.y.normalized) * (g(r) - e.options.offset.y),
                  r: "5"
                }, null, 10, lA),
                (w(), $("foreignObject", {
                  x: A.x.normalized * (g(t) - e.options.offset.x) + e.options.offset.x - 140,
                  y: (1 - A.y.normalized) * (g(r) - e.options.offset.y) - (A.y.normalized >= 0.5 ? 0 : 220),
                  height: "220",
                  width: "280",
                  class: _([F.$style["chart-area"], F.$style["legend-container"]])
                }, [
                  Q(ke, {
                    class: _([F.$style["chart-area"], F.$style["legend-wrapper"]]),
                    radius: "var(--agh-ref-border-radius-500)"
                  }, {
                    default: K(() => [
                      e.options.title ? (w(), $(M, { key: 0 }, [
                        v("h1", {
                          class: _([F.$style["chart-area"], F.$style["legend-title"]])
                        }, U(g(Nu)(A.data, e.options.title)), 3),
                        EA
                      ], 64)) : z("", !0),
                      (w(!0), $(M, null, W(g(n), (C, d) => (w(), $(M, { key: d }, [
                        C && A[d] ? (w(), $("div", {
                          key: 0,
                          class: _([F.$style["chart-area"], F.$style["legend-group"]])
                        }, [
                          v("label", {
                            class: _([F.$style["chart-area"], F.$style["legend-label"]])
                          }, U(C.label), 3),
                          v("p", {
                            class: _([F.$style["chart-area"], F.$style["legend-value"]])
                          }, U(A[d].value), 3)
                        ], 2)) : z("", !0)
                      ], 64))), 128))
                    ]),
                    _: 2
                  }, 1032, ["class", "radius"])
                ], 10, CA))
              ], 2))), 128))
            ], 64))), 256))
          ], 2)
        ]),
        _: 1
      }, 8, ["height", "width"])
    ], 2));
  }
}), cA = "_behavior_1sfnc_1", fA = "_clickable_1sfnc_1", dA = "_disabled_1sfnc_4", BA = "_draggable_1sfnc_7", pA = "_loading_1sfnc_10", hA = "_path_1sfnc_24", gA = "_radar_1sfnc_29", mA = "_label_1sfnc_32", vA = "_plot_1sfnc_85", _A = "_point_1sfnc_85", yA = "_doughnut_1sfnc_96", bA = "_bg_1sfnc_102", wA = "_round_1sfnc_106", $A = "_line_1sfnc_119", xA = {
  behavior: cA,
  clickable: fA,
  disabled: dA,
  draggable: BA,
  loading: pA,
  "chart-container": "_chart-container_1sfnc_14",
  "chart-axis": "_chart-axis_1sfnc_24",
  path: hA,
  radar: gA,
  label: mA,
  "font-align--center": "_font-align--center_1sfnc_45",
  "font-align--right": "_font-align--right_1sfnc_48",
  "font-align--left": "_font-align--left_1sfnc_51",
  "box-align--center": "_box-align--center_1sfnc_54",
  "box-align--left": "_box-align--left_1sfnc_57",
  "box-align--right": "_box-align--right_1sfnc_60",
  "chart-group-plots": "_chart-group-plots_1sfnc_67",
  "chart-area": "_chart-area_1sfnc_67",
  plot: vA,
  point: _A,
  doughnut: yA,
  "legend-container": "_legend-container_1sfnc_96",
  bg: bA,
  round: wA,
  line: $A,
  "legend-wrapper": "_legend-wrapper_1sfnc_147",
  "legend-group": "_legend-group_1sfnc_158",
  "legend-value": "_legend-value_1sfnc_166",
  "legend-label": "_legend-label_1sfnc_169",
  "legend-title": "_legend-title_1sfnc_173"
}, OA = {
  $style: xA
}, Nc = /* @__PURE__ */ Du(AA, [["__cssModules", OA], ["__scopeId", "data-v-9f80c889"]]), TA = ["id"], SA = ["stdDeviation"], PA = /* @__PURE__ */ v("feColorMatrix", {
  in: "blur",
  mode: "matrix",
  values: "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10",
  result: "mask"
}, null, -1), MA = /* @__PURE__ */ v("feComposite", {
  in: "SourceGraphic",
  in2: "mask",
  operator: "in"
}, null, -1), pt = /* @__PURE__ */ H({
  __name: "RoundEffect",
  props: {
    id: {},
    radius: {}
  },
  setup(u) {
    const e = u;
    return (D, t) => (w(), $("filter", {
      id: e.id
    }, [
      v("feGaussianBlur", {
        stdDeviation: e.radius,
        in: "SourceGraphic",
        result: "blur"
      }, null, 8, SA),
      PA,
      MA
    ], 8, TA));
  }
}), kA = (u) => (ye("data-v-50dd5e3e"), u = u(), be(), u), IA = ["innerHTML"], NA = { id: "chart-area-bg-mask" }, zA = ["d"], jA = ["d"], UA = ["d"], RA = ["x", "y", "height", "width"], LA = ["d"], YA = ["cx", "cy"], WA = ["cx", "cy"], HA = ["x", "y"], GA = /* @__PURE__ */ kA(() => /* @__PURE__ */ v("hr", null, null, -1)), qA = /* @__PURE__ */ H({
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
    const e = u, D = ou(), { width: t, height: r } = Pe(D), { axises: n, datasets: a } = p0({
      type: "radar",
      data: e.datasets,
      axises: e.axises
    }), o = L(
      () => O.clamp(
        O.min(t.value - e.options.offset.x, r.value - e.options.offset.y) / 2,
        0,
        1 / 0
      )
    ), i = L(() => ({
      x: t.value / 2,
      y: r.value / 2
    })), F = gu(
      () => {
        var C, d;
        return o.value > 0 && ((d = (C = n.value) == null ? void 0 : C.x) != null && d.metrics) ? `
      ${n.value.x.metrics.map(
          (E, c) => `${c === 0 ? "M" : "L"} ${i.value.x + o.value * O.cos(O.rad(E.normalized * 360 - 90))} ${i.value.y + o.value * O.sin(O.rad(E.normalized * 360 - 90))}`
        ).join(" ")} Z
      ` : "";
      }
    ), s = gu(
      () => F.value && a.value ? a.value.map((C) => ({
        ...C,
        path: `${C.series.map(
          (d, E) => `${E === 0 ? "M" : "L"} ${i.value.x + o.value * d.y.normalized * O.cos(O.rad(d.x.normalized * 360 - 90))} ${i.value.y + o.value * d.y.normalized * O.sin(O.rad(d.x.normalized * 360 - 90))}`
        ).join(" ")} Z`
      })) : []
    ), l = L(
      () => o.value > 0 && n.value.x.metrics ? `M ${i.value.x} ${i.value.y}
      ${n.value.x.metrics.map(
        (C) => `L ${i.value.x + o.value * O.cos(O.rad(C.normalized * 360 - 90))} ${i.value.y + o.value * O.sin(O.rad(C.normalized * 360 - 90))}
            M ${i.value.x} ${i.value.y}`
      ).join(`
`)}
      Z` : ""
    ), A = fu(""), f = () => {
      D.value && l0(
        () => A.set(
          globalThis.getComputedStyle(D.value).getPropertyValue("--chart-bg-fill-svg")
        ),
        30
      );
    };
    return mt(() => {
      f();
    }), (C, d) => (w(), $("div", {
      ref_key: "wrapperRef$",
      ref: D,
      class: _(C.$style["chart-container"])
    }, [
      Q(Me, {
        height: g(r),
        width: g(t)
      }, {
        defs: K(() => [
          Q(pt, {
            id: "chart-area-bg-round",
            radius: 6
          }),
          Q(pt, {
            id: "chart-area-plot-round",
            radius: 3
          }),
          v("g", {
            innerHTML: g(A)()
          }, null, 8, IA),
          v("mask", NA, [
            v("path", {
              d: F.value,
              class: _([
                C.$style["chart-area"],
                C.$style.radar,
                C.$style.bg,
                {
                  [C.$style.round]: e.options.round
                }
              ]),
              fill: "#fff"
            }, null, 10, zA)
          ])
        ]),
        path: K(() => [
          v("path", {
            d: F.value,
            class: _([
              C.$style["chart-area"],
              C.$style.radar,
              C.$style.bg,
              {
                [C.$style.round]: e.options.round
              }
            ])
          }, null, 10, jA),
          v("g", {
            id: "chart-group-axises",
            class: _([C.$style["chart-group-axises"]]),
            mask: "url(#chart-area-bg-mask)"
          }, [
            v("path", {
              d: g(l),
              class: _([C.$style["chart-axis"], C.$style.radar, C.$style.path])
            }, null, 10, UA)
          ], 2),
          g(n) ? (w(), $("g", {
            key: 0,
            class: _([C.$style["chart-group-axises-label"]])
          }, [
            (w(!0), $(M, null, W(g(n).x.metrics, (E) => (w(), $("foreignObject", {
              key: E.value,
              x: g(i).x + g(o) * g(O).cos(g(O).rad(E.normalized * 360 - 90)) - (E.normalized % 0.5 === 0 ? g(o) / 2 : E.normalized > 0.5 ? g(o) : 0),
              y: g(i).y + g(o) * 1.1 * g(O).sin(g(O).rad(E.normalized * 360 - 90)) - g(o) / 6,
              height: g(o) / 3,
              width: g(o),
              class: _([C.$style["chart-axis"], C.$style.radar, C.$style["label-wrapper"]])
            }, [
              v("p", {
                class: _(["font-bold", [
                  C.$style["chart-axis"],
                  C.$style.radar,
                  C.$style.label,
                  E.normalized % 0.5 === 0 ? C.$style["font-align--center"] : E.normalized < 0.5 ? C.$style["font-align--left"] : C.$style["font-align--right"],
                  E.normalized % 0.5 === 0 ? C.$style["box-align--center"] : E.normalized < 0.5 ? C.$style["box-align--left"] : C.$style["box-align--right"]
                ]])
              }, U(E.value), 3)
            ], 10, RA))), 128))
          ], 2)) : z("", !0),
          v("g", {
            class: _([C.$style["chart-group-plots"]])
          }, [
            (w(!0), $(M, null, W(s.value, (E) => (w(), $("g", {
              key: E.label,
              class: _([C.$style["chart-area"], C.$style.radar, C.$style.plot])
            }, [
              v("path", {
                d: E.path,
                class: _([
                  {
                    [C.$style.round]: e.options.round
                  }
                ])
              }, null, 10, LA)
            ], 2))), 128))
          ], 2),
          (w(!0), $(M, null, W(g(a), (E) => (w(), $("g", {
            key: E.label,
            class: _([C.$style["chart-area-label"]])
          }, [
            (w(!0), $(M, null, W(E.series, (c, h) => (w(), $("g", {
              key: `plot-${h}`,
              class: _(C.$style["chart-area"])
            }, [
              v("circle", {
                class: _([
                  C.$style.behavior,
                  C.$style["chart-area"],
                  C.$style.point,
                  C.$style.plot,
                  C.$style.clickable
                ]),
                cx: g(i).x + g(o) * c.y.normalized * g(O).cos(g(O).rad(c.x.normalized * 360 - 90)),
                cy: g(i).y + g(o) * c.y.normalized * g(O).sin(g(O).rad(c.x.normalized * 360 - 90)),
                r: "10"
              }, null, 10, YA),
              v("circle", {
                class: _([C.$style["chart-area"], C.$style.radar, C.$style.point, C.$style.plot]),
                cx: g(i).x + g(o) * c.y.normalized * g(O).cos(g(O).rad(c.x.normalized * 360 - 90)),
                cy: g(i).y + g(o) * c.y.normalized * g(O).sin(g(O).rad(c.x.normalized * 360 - 90)),
                r: "5"
              }, null, 10, WA),
              (w(), $("foreignObject", {
                x: g(i).x + g(o) * c.y.normalized * g(O).cos(g(O).rad(c.x.normalized * 360 - 90)) - 130,
                y: g(i).y + g(o) * c.y.normalized * g(O).sin(g(O).rad(c.x.normalized * 360 - 90)),
                height: "200",
                width: "260",
                class: _([C.$style["chart-area"], C.$style["legend-container"]])
              }, [
                Q(ke, {
                  class: _([C.$style["chart-area"], C.$style["legend-wrapper"]]),
                  radius: "var(--agh-ref-border-radius-500)"
                }, {
                  default: K(() => [
                    e.options.title ? (w(), $(M, { key: 0 }, [
                      v("h1", {
                        class: _([C.$style["chart-area"], C.$style["legend-title"], C.$style.radar])
                      }, [
                        v("span", null, U(c.x.value), 1),
                        v("span", {
                          class: _(C.$style["legend-value"])
                        }, U(c.y.value), 3)
                      ], 2),
                      GA
                    ], 64)) : z("", !0),
                    (w(!0), $(M, null, W(g(n), (B, p) => (w(), $(M, { key: p }, [
                      !/(x|y)/.test(p) && B && c[p] ? (w(), $("div", {
                        key: 0,
                        class: _([C.$style["chart-area"], C.$style["legend-group"], C.$style.radar])
                      }, [
                        v("p", {
                          class: _([C.$style["chart-area"], C.$style["legend-value"]])
                        }, U(c[p].value), 3),
                        v("label", {
                          class: _([C.$style["chart-area"], C.$style["legend-label"]])
                        }, U(B.label), 3)
                      ], 2)) : z("", !0)
                    ], 64))), 128))
                  ]),
                  _: 2
                }, 1032, ["class", "radius"])
              ], 10, HA))
            ], 2))), 128))
          ], 2))), 128))
        ]),
        _: 1
      }, 8, ["height", "width"])
    ], 2));
  }
}), ZA = "_behavior_1bxlz_1", VA = "_clickable_1bxlz_1", QA = "_disabled_1bxlz_4", KA = "_draggable_1bxlz_7", JA = "_loading_1bxlz_10", XA = "_path_1bxlz_24", u2 = "_radar_1bxlz_29", e2 = "_label_1bxlz_32", D2 = "_plot_1bxlz_85", t2 = "_point_1bxlz_85", r2 = "_doughnut_1bxlz_96", n2 = "_bg_1bxlz_102", a2 = "_round_1bxlz_106", F2 = "_line_1bxlz_119", o2 = {
  behavior: ZA,
  clickable: VA,
  disabled: QA,
  draggable: KA,
  loading: JA,
  "chart-container": "_chart-container_1bxlz_14",
  "chart-axis": "_chart-axis_1bxlz_24",
  path: XA,
  radar: u2,
  label: e2,
  "font-align--center": "_font-align--center_1bxlz_45",
  "font-align--right": "_font-align--right_1bxlz_48",
  "font-align--left": "_font-align--left_1bxlz_51",
  "box-align--center": "_box-align--center_1bxlz_54",
  "box-align--left": "_box-align--left_1bxlz_57",
  "box-align--right": "_box-align--right_1bxlz_60",
  "chart-group-plots": "_chart-group-plots_1bxlz_67",
  "chart-area": "_chart-area_1bxlz_67",
  plot: D2,
  point: t2,
  doughnut: r2,
  "legend-container": "_legend-container_1bxlz_96",
  bg: n2,
  round: a2,
  line: F2,
  "legend-wrapper": "_legend-wrapper_1bxlz_147",
  "legend-group": "_legend-group_1bxlz_158",
  "legend-value": "_legend-value_1bxlz_166",
  "legend-label": "_legend-label_1bxlz_169",
  "legend-title": "_legend-title_1bxlz_173"
}, i2 = {
  $style: o2
}, zc = /* @__PURE__ */ Du(qA, [["__cssModules", i2], ["__scopeId", "data-v-50dd5e3e"]]), s2 = ["onClick"], l2 = /* @__PURE__ */ H({
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
  setup(u, { emit: e }) {
    const D = u, t = ou(), r = L(
      () => uD(
        Zu(Qi(D.options, D.groupBy ?? "")).map(([F, s]) => [
          F === "undefined" ? "" : F,
          s.map(
            (l) => fu({
              ...l,
              selected: !!(D.multiple ? te(D.modelValue, D.fields.key).includes(tu(l, D.fields.key)) : tu(l, D.fields.key) === tu(D.modelValue, D.fields.key))
            })
          )
        ])
      )
    ), n = fu(!1), a = () => {
      t.value && l0(() => {
        const { scrollHeight: F, clientHeight: s } = t.value;
        n.set(F > s + 1);
      }, 30);
    }, o = (F) => {
      F.update((s) => ({
        ...s,
        selected: !s.selected
      })), D.multiple ? e(
        "update:modelValue",
        ur(
          te(
            r.value,
            (s) => s.map((l) => l()).filter((l) => l.selected)
          )
        )
      ) : e("update:modelValue", F());
    }, i = () => {
      D.multiple ? e("update:modelValue", []) : e("update:modelValue", {});
    };
    return qD(() => {
      a();
    }), (F, s) => (w(), nu(ke, {
      class: _([
        F.$style["menu-container"],
        {
          [F.$style.classify]: D.groupBy
        }
      ]),
      radius: "var(--agh-ref-border-radius-500)"
    }, {
      default: K(() => [
        D.label || D.multiple ? (w(), $("header", {
          key: 0,
          class: _(F.$style["menu-header"])
        }, [
          v("h1", {
            class: _(F.$style.title)
          }, U(D.label), 3),
          D.multiple ? (w(), nu(lr, {
            key: 0,
            class: _(F.$style.button),
            label: "Clear Selection",
            icon: "fa6-solid:eraser",
            variant: "text",
            onClick: s[0] || (s[0] = (l) => i())
          }, null, 8, ["class"])) : z("", !0)
        ], 2)) : z("", !0),
        v("div", {
          ref_key: "wrapperRef$",
          ref: t,
          class: _([
            F.$style["menu-wrapper"],
            {
              [F.$style.overflowed]: g(n)()
            }
          ])
        }, [
          (w(!0), $(M, null, W(g(r), (l, A) => (w(), $("div", {
            key: A,
            class: _([
              F.$style["menu-group"],
              {
                [F.$style.classify]: D.groupBy
              }
            ])
          }, [
            A ? (w(), $("label", {
              key: 0,
              class: _(F.$style["menu-group-label"]),
              name: ""
            }, U(A), 3)) : z("", !0),
            (w(!0), $(M, null, W(l, (f, C) => (w(), $("div", {
              key: `option-${C}`,
              class: _([
                F.$style["menu-option"],
                F.$style.behavior,
                F.$style.clickable,
                {
                  [F.$style.selected]: f().selected,
                  [F.$style.multiple]: D.multiple
                }
              ]),
              onClick: (d) => o(f)
            }, [
              D.multiple ? (w(), nu(g(re), {
                key: 0,
                class: _(F.$style["menu-option-icon"]),
                icon: f().selected ? "fa6-solid:square-check" : "fa6-regular:square"
              }, null, 8, ["class", "icon"])) : z("", !0),
              D.fields.icon ? (w(), nu(g(re), {
                key: 1,
                class: _(F.$style["menu-option-icon"]),
                icon: g(tu)(f(), D.fields.icon)
              }, null, 8, ["class", "icon"])) : z("", !0),
              v("div", {
                class: _(F.$style["menu-option-group"])
              }, [
                D.fields.title ? z("", !0) : (w(), $("p", {
                  key: 0,
                  class: _(F.$style["menu-field"])
                }, U(g(tu)(f(), D.fields.key)), 3)),
                (w(!0), $(M, null, W(g(Dr)(D.fields, ["key", "icon"]), (d) => (w(), $(M, {
                  key: `option-field-${d}`
                }, [
                  d ? (w(), $("p", {
                    key: 0,
                    class: _(F.$style["menu-field"])
                  }, U(g(Nu)(f(), d)), 3)) : z("", !0)
                ], 64))), 128))
              ], 2)
            ], 10, s2))), 128))
          ], 2))), 128))
        ], 2)
      ]),
      _: 1
    }, 8, ["class", "radius"]));
  }
}), C2 = "_behavior_1k2c6_1", E2 = "_clickable_1k2c6_1", A2 = "_disabled_1k2c6_4", c2 = "_draggable_1k2c6_7", f2 = "_loading_1k2c6_10", d2 = "_classify_1k2c6_29", B2 = "_title_1k2c6_47", p2 = "_button_1k2c6_50", h2 = "_overflowed_1k2c6_77", g2 = "_hover_1k2c6_91", m2 = "_selected_1k2c6_95", v2 = "_multiple_1k2c6_99", _2 = {
  behavior: C2,
  clickable: E2,
  disabled: A2,
  draggable: c2,
  loading: f2,
  "menu-container": "_menu-container_1k2c6_14",
  classify: d2,
  "menu-header": "_menu-header_1k2c6_32",
  title: B2,
  button: p2,
  "menu-wrapper": "_menu-wrapper_1k2c6_53",
  overflowed: h2,
  "menu-option": "_menu-option_1k2c6_81",
  hover: g2,
  selected: m2,
  multiple: v2,
  "menu-field": "_menu-field_1k2c6_102",
  "menu-option-group": "_menu-option-group_1k2c6_108",
  "menu-group": "_menu-group_1k2c6_122",
  "menu-group-label": "_menu-group-label_1k2c6_144"
}, y2 = {
  $style: _2
}, Ir = /* @__PURE__ */ Du(l2, [["__cssModules", y2], ["__scopeId", "data-v-c965c008"]]), b2 = /* @__PURE__ */ H({
  __name: "DropDown",
  props: {
    fields: {},
    modelValue: {},
    items: { default: () => [] },
    disabled: { type: Boolean },
    level: { default: "primary" }
  },
  emits: ["update:modelValue"],
  setup(u, { emit: e }) {
    const D = u, t = gu({
      get: () => D.modelValue,
      set: (n) => (r.set(!0), e("update:modelValue", n))
    }), r = fu(!0);
    return (n, a) => (w(), $("div", {
      class: _(n.$style["dropdown--container"])
    }, [
      Q(lr, {
        disabled: D.disabled,
        label: g(tu)(D.modelValue, D.fields.key),
        icon: g(r)() ? "fa6-solid:chevron-up" : "fa6-solid:chevron-down",
        clicked: !g(r)(),
        level: D.level,
        class: _(n.$style["dropdown--input"]),
        onClick: a[0] || (a[0] = (o) => g(r).update((i) => !i)),
        type: "search"
      }, null, 8, ["disabled", "label", "icon", "clicked", "level", "class"]),
      n.items.length > 0 && !g(r)() ? (w(), nu(Ir, {
        key: 0,
        class: _(n.$style["dropdown--menu"]),
        options: n.items,
        fields: D.fields,
        modelValue: t.value,
        "onUpdate:modelValue": a[1] || (a[1] = (o) => t.value = o)
      }, null, 8, ["class", "options", "fields", "modelValue"])) : z("", !0)
    ], 2));
  }
}), w2 = {
  "dropdown--container": "_dropdown--container_kizkx_1",
  "dropdown--input": "_dropdown--input_kizkx_7",
  "dropdown--menu": "_dropdown--menu_kizkx_12"
}, $2 = {
  $style: w2
}, jc = /* @__PURE__ */ Du(b2, [["__cssModules", $2], ["__scopeId", "data-v-8aec7555"]]), x2 = /* @__PURE__ */ H({
  __name: "ProgressBar",
  props: {
    value: { default: 0 },
    variant: { default: "concave" },
    thickness: { default: 12 }
  },
  setup(u) {
    const e = u;
    return (D, t) => (w(), $("div", {
      class: _([D.$style["progress-container"], D.$style[e.variant]])
    }, [
      v("div", {
        class: _([D.$style["progress-groove"], D.$style[e.variant]])
      }, [
        v("div", {
          class: _(D.$style["progress-value"]),
          style: Jr({ width: `${e.value * 100}%` })
        }, null, 6)
      ], 2)
    ], 2));
  }
}), O2 = "_concave_vuh1m_23", T2 = "_convex_vuh1m_55", S2 = {
  "progress-container": "_progress-container_vuh1m_1",
  "progress-groove": "_progress-groove_vuh1m_11",
  "progress-value": "_progress-value_vuh1m_11",
  concave: O2,
  "progress-content-wrapper": "_progress-content-wrapper_vuh1m_35",
  convex: T2
}, P2 = {
  $style: S2
}, Uc = /* @__PURE__ */ Du(x2, [["__cssModules", P2], ["__scopeId", "data-v-d1ec5a1d"]]), M2 = ["height", "width"], k2 = /* @__PURE__ */ v("feFlood", {
  "flood-opacity": "0",
  result: "BackgroundImageFix"
}, null, -1), I2 = /* @__PURE__ */ v("feBlend", {
  in: "SourceGraphic",
  in2: "BackgroundImageFix",
  result: "shape"
}, null, -1), N2 = /* @__PURE__ */ v("feColorMatrix", {
  in: "SourceAlpha",
  result: "hardAlpha",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}, null, -1), z2 = /* @__PURE__ */ v("feOffset", {
  dx: "1",
  dy: "1"
}, null, -1), j2 = /* @__PURE__ */ v("feGaussianBlur", { stdDeviation: "1" }, null, -1), U2 = /* @__PURE__ */ v("feComposite", {
  in2: "hardAlpha",
  k2: "-1",
  k3: "1",
  operator: "arithmetic"
}, null, -1), R2 = /* @__PURE__ */ v("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" }, null, -1), L2 = /* @__PURE__ */ v("feBlend", {
  in2: "shape",
  result: "effect-innerShadow-1"
}, null, -1), Y2 = /* @__PURE__ */ v("feColorMatrix", {
  in: "SourceAlpha",
  result: "hardAlpha",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}, null, -1), W2 = /* @__PURE__ */ v("feOffset", {
  dx: "2",
  dy: "3"
}, null, -1), H2 = /* @__PURE__ */ v("feGaussianBlur", { stdDeviation: "1.5" }, null, -1), G2 = /* @__PURE__ */ v("feComposite", {
  in2: "hardAlpha",
  k2: "-1",
  k3: "1",
  operator: "arithmetic"
}, null, -1), q2 = /* @__PURE__ */ v("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.11 0" }, null, -1), Z2 = /* @__PURE__ */ v("feBlend", {
  in2: "effect-innerShadow-1",
  result: "effect-innerShadow2"
}, null, -1), V2 = /* @__PURE__ */ v("feColorMatrix", {
  in: "SourceAlpha",
  result: "hardAlpha",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}, null, -1), Q2 = /* @__PURE__ */ v("feOffset", {
  dx: "5",
  dy: "6"
}, null, -1), K2 = /* @__PURE__ */ v("feGaussianBlur", { stdDeviation: "2" }, null, -1), J2 = /* @__PURE__ */ v("feComposite", {
  in2: "hardAlpha",
  k2: "-1",
  k3: "1",
  operator: "arithmetic"
}, null, -1), X2 = /* @__PURE__ */ v("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" }, null, -1), uc = /* @__PURE__ */ v("feBlend", {
  in2: "effect-innerShadow2",
  result: "effect-innerShadow3"
}, null, -1), ec = /* @__PURE__ */ v("feColorMatrix", {
  in: "SourceAlpha",
  result: "hardAlpha",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}, null, -1), Dc = /* @__PURE__ */ v("feOffset", {
  dx: "8",
  dy: "10"
}, null, -1), tc = /* @__PURE__ */ v("feGaussianBlur", { stdDeviation: "2.5" }, null, -1), rc = /* @__PURE__ */ v("feComposite", {
  in2: "hardAlpha",
  k2: "-1",
  k3: "1",
  operator: "arithmetic"
}, null, -1), nc = /* @__PURE__ */ v("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0" }, null, -1), ac = /* @__PURE__ */ v("feBlend", {
  in2: "effect-innerShadow3",
  result: "effect-innerShadow4"
}, null, -1), Fc = [
  k2,
  I2,
  N2,
  z2,
  j2,
  U2,
  R2,
  L2,
  Y2,
  W2,
  H2,
  G2,
  q2,
  Z2,
  V2,
  Q2,
  K2,
  J2,
  X2,
  uc,
  ec,
  Dc,
  tc,
  rc,
  nc,
  ac
], oc = /* @__PURE__ */ H({
  __name: "InnerShadowDeco",
  props: {
    height: {},
    width: {}
  },
  setup(u) {
    const e = u;
    return (D, t) => (w(), $("filter", {
      id: "effects--inner-shadow--deco",
      height: e.height,
      width: e.width,
      x: "0",
      y: "0",
      "color-interpolation-filters": "sRGB",
      filterUnits: "userSpaceOnUse"
    }, Fc, 8, M2));
  }
}), h0 = (u) => (ye("data-v-2a62d2db"), u = u(), be(), u), ic = ["innerHTML"], sc = ["cx", "cy", "r"], lc = ["cx", "cy", "r"], Cc = /* @__PURE__ */ h0(() => /* @__PURE__ */ v("mask", { id: "progress-groove-mask" }, [
  /* @__PURE__ */ v("use", {
    href: "#progress-groove-outer",
    fill: "#fff"
  }),
  /* @__PURE__ */ v("use", {
    href: "#progress-groove-inner",
    fill: "#000"
  })
], -1)), Ec = /* @__PURE__ */ h0(() => /* @__PURE__ */ v("use", {
  href: "#progress-groove-outer",
  mask: "url(#progress-groove-mask)"
}, null, -1)), Ac = [
  Ec
], cc = ["cx", "cy", "r", "stroke-dashoffset", "stroke-dasharray", "stroke-width"], fc = /* @__PURE__ */ h0(() => /* @__PURE__ */ v("clipPath", { id: "progress-content-clip" }, [
  /* @__PURE__ */ v("use", { href: "#progress-groove-inner" })
], -1)), dc = { "clip-path": "url(#progress-content-clip)" }, Bc = ["height", "width", "x", "y"], pc = /* @__PURE__ */ H({
  __name: "ProgressCircle",
  props: {
    value: { default: 0 },
    variant: { default: "concave" },
    thickness: { default: 12 }
  },
  setup(u) {
    const e = u, D = ou(), { width: t, height: r } = Pe(D), n = L(
      () => O.clamp(O.min(t.value, r.value) / 2 - e.thickness / 2, 0, 1 / 0)
    ), a = L(() => n.value * 2 * O.PI), o = L(() => ({
      x: t.value / 2,
      y: r.value / 2
    })), i = fu(""), F = () => {
      D.value && e.variant === "convex" && l0(
        () => i.set(
          globalThis.getComputedStyle(D.value).getPropertyValue("--progress-value-fill-gradient")
        ),
        30
      );
    };
    return mt(() => {
      F();
    }), (s, l) => (w(), $("div", {
      ref_key: "wrapperRef$",
      ref: D,
      class: _([s.$style["progress-container"], s.$style[e.variant]])
    }, [
      Q(Me, {
        height: g(r),
        width: g(t)
      }, {
        defs: K(() => [
          v("g", {
            innerHTML: g(i)()
          }, null, 8, ic),
          Q(oc, {
            height: g(r),
            width: g(t)
          }, null, 8, ["height", "width"]),
          v("circle", {
            id: "progress-groove-outer",
            cx: g(o).x,
            cy: g(o).y,
            r: g(n) + e.thickness / 2
          }, null, 8, sc),
          v("circle", {
            id: "progress-groove-inner",
            cx: g(o).x,
            cy: g(o).y,
            r: g(n) - e.thickness / 2
          }, null, 8, lc),
          Cc
        ]),
        path: K(() => [
          v("g", {
            class: _(s.$style["progress-groove"])
          }, Ac, 2),
          v("g", {
            class: _(s.$style["progress-value"])
          }, [
            v("circle", {
              cx: g(o).x,
              cy: g(o).y,
              r: g(n),
              "stroke-dashoffset": (e.value + 0.25) * g(a),
              "stroke-dasharray": `${e.value * g(a)} ${(1 - e.value) * g(a)}`,
              "stroke-width": e.thickness,
              fill: "transparent"
            }, null, 8, cc)
          ], 2),
          fc,
          v("g", dc, [
            (w(), $("foreignObject", {
              height: g(n) * 2,
              width: g(n) * 2,
              x: g(o).x - g(n),
              y: g(o).y - g(n)
            }, [
              v("div", {
                class: _(s.$style["progress-content-wrapper"])
              }, [
                v("label", null, U((e.value * 100).toFixed(0)) + "%", 1)
              ], 2)
            ], 8, Bc))
          ])
        ]),
        _: 1
      }, 8, ["height", "width"])
    ], 2));
  }
}), hc = "_concave_1jatd_23", gc = "_convex_1jatd_55", mc = {
  "progress-container": "_progress-container_1jatd_1",
  "progress-groove": "_progress-groove_1jatd_11",
  "progress-value": "_progress-value_1jatd_11",
  concave: hc,
  "progress-content-wrapper": "_progress-content-wrapper_1jatd_35",
  convex: gc
}, vc = {
  $style: mc
}, Rc = /* @__PURE__ */ Du(pc, [["__cssModules", vc], ["__scopeId", "data-v-2a62d2db"]]), _c = (u, e) => {
  var D;
  if (e) {
    const t = (D = Zu(Dr(u, "valid")).find(([r, n]) => n && e[r])) == null ? void 0 : D[0];
    return t ? e[t] ?? null : null;
  }
  return null;
}, yc = ["value"], bc = ["for"], wc = /* @__PURE__ */ H({
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
  setup(u, { emit: e }) {
    const D = u, { onTrigger: t } = ZD(
      (o) => {
        D.disabled ? (o.preventDefault(), o.stopPropagation()) : (a(), e("update:modelValue", o.target.value));
      },
      {
        flush: "post"
      }
    ), r = ou(), n = fu(""), a = () => {
      var o;
      return n.set(
        r.value ? (o = r.value) != null && o.validity.valid ? "" : _c(r.value.validity, D.invalidMessage ?? {}) ?? r.value.validationMessage : ""
      );
    };
    return qD(() => {
      a();
    }), (o, i) => (w(), $("div", {
      class: _([
        o.$style["textfield-container"],
        {
          [o.$style[`icon-align--${D.iconAlign}`]]: D.icon || o.type === "search"
        }
      ])
    }, [
      v("input", gt({
        ref_key: "inputRef$",
        ref: r,
        class: [o.$style["textfield-input"]]
      }, D, {
        value: D.modelValue,
        onInput: i[0] || (i[0] = //@ts-ignore
        (...F) => g(t) && g(t)(...F))
      }), null, 16, yc),
      o.type === "search" || D.icon ? (w(), nu(g(re), {
        key: 0,
        class: _([o.$style["textfield-label--icon"], o.$style.icon]),
        icon: D.icon || o.type === "search" ? "fa6-solid:magnifying-glass" : ""
      }, null, 8, ["class", "icon"])) : z("", !0),
      g(n)() ? (w(), $("label", {
        key: 1,
        for: D.name,
        class: _([o.$style["textfield-label"]])
      }, [
        Q(g(re), {
          class: _([o.$style["textfield-label--icon"]]),
          icon: "fa6-solid:circle-xmark"
        }, null, 8, ["class"]),
        v("span", {
          class: _([o.$style["textfield-label--value"]])
        }, U(g(n)()), 3)
      ], 10, bc)) : z("", !0)
    ], 2));
  }
}), $c = {
  "textfield-container": "_textfield-container_qhzrd_1",
  "icon-align--left": "_icon-align--left_qhzrd_9",
  "icon-align--right": "_icon-align--right_qhzrd_9",
  "textfield-input": "_textfield-input_qhzrd_17",
  "textfield-label--icon": "_textfield-label--icon_qhzrd_23",
  "textfield-label": "_textfield-label_qhzrd_23",
  "textfield-label--value": "_textfield-label--value_qhzrd_98"
}, xc = {
  $style: $c
}, Oc = /* @__PURE__ */ Du(wc, [["__cssModules", xc], ["__scopeId", "data-v-784e2d65"]]), Tc = /* @__PURE__ */ H({
  __name: "SearchBar",
  props: {
    fields: {},
    modelValue: { default: "" },
    items: { default: () => [] },
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue", "select"],
  setup(u, { emit: e }) {
    const D = u, t = gu({
      get: () => D.modelValue,
      set: (F) => (i(F), e("update:modelValue", F))
    }), r = ou(), n = fu(!1), a = fu([]), o = (F) => {
      e("update:modelValue", tu(F, D.fields.key)), e("select", F), n.set(!0);
    }, i = (F) => {
      var s;
      a.set(
        ((s = D.items) == null ? void 0 : s.filter((l) => tu(l, D.fields.key).includes(F))) ?? []
      );
    };
    return he(t, i), he(r, o), (F, s) => (w(), $("div", {
      class: _(F.$style["search-bar--container"])
    }, [
      Q(Oc, {
        modelValue: t.value,
        "onUpdate:modelValue": s[0] || (s[0] = (l) => t.value = l),
        class: _(F.$style["search-bar--input"]),
        disabled: D.disabled,
        onClick: s[1] || (s[1] = (l) => g(n).set(!1)),
        onFocus: s[2] || (s[2] = (l) => g(n).set(!1)),
        onBlur: s[3] || (s[3] = (l) => g(n).set(!0)),
        type: "search"
      }, null, 8, ["modelValue", "class", "disabled"]),
      t.value && g(a)().length > 0 && !g(n)() ? (w(), nu(Ir, {
        key: 0,
        class: _(F.$style["search-bar--menu"]),
        options: g(a)(),
        fields: D.fields,
        modelValue: r.value,
        "onUpdate:modelValue": s[4] || (s[4] = (l) => r.value = l)
      }, null, 8, ["class", "options", "fields", "modelValue"])) : z("", !0)
    ], 2));
  }
}), Sc = {
  "search-bar--container": "_search-bar--container_1hygv_1",
  "search-bar--input": "_search-bar--input_1hygv_7",
  "search-bar--menu": "_search-bar--menu_1hygv_10"
}, Pc = {
  $style: Sc
}, Lc = /* @__PURE__ */ Du(Tc, [["__cssModules", Pc], ["__scopeId", "data-v-384c9809"]]);
export {
  nr as BaseLink,
  Me as BasePoly,
  lr as ButtonBox,
  ke as CardBox,
  Ic as DoughnutChart,
  jc as DropDown,
  Nc as LineChart,
  Uc as ProgressBar,
  Rc as ProgressCircle,
  zc as RadarChart,
  Lc as SearchBar,
  Ir as SelectMenu,
  Oc as TextField
};
//# sourceMappingURL=ui.component.es.js.map
