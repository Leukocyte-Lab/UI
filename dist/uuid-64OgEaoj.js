import { shallowRef as le, triggerRef as fe, computed as he, readonly as de } from "vue";
import { u as pe } from "./i18n.service-BLFX03nS.js";
const me = Symbol("SIGNAL_DEBUG_INSPECTION"), ge = (u) => {
  const D = le(u), e = () => de(D).value;
  return e.set = (t) => {
    D.value = t;
  }, e.update = (t) => {
    D.value = t(D.value);
  }, e.mutate = (t) => {
    t(D.value), fe(D);
  }, e[me] = D, e;
}, ia = (u) => {
  const D = he(u);
  return () => D.value;
}, oa = (u) => u.update((D) => !D), sa = (u, { debounce: D = 300, flush: e = "pre" } = {}) => {
  const t = ge(!1);
  let F;
  return {
    triggered: t,
    onTrigger: (r) => {
      !t() && e === "pre" || e === "sync" ? u == null || u.call({}, r) : (r.preventDefault(), r.stopPropagation()), t.set(!0), globalThis.clearTimeout(F), F = globalThis.setTimeout(() => {
        t.set(!1), (e === "post" || e === "sync") && (u == null || u.call({}, r));
      }, D);
    }
  };
};
class gu extends Map {
  constructor(D) {
    super(D);
  }
  find(D, e) {
    for (const [t, F] of this)
      if (D.call(e, F, t, this))
        return [t, F];
  }
  findKey(D, e) {
    for (const [t, F] of this)
      if (D.call(e, F, t, this))
        return t;
  }
  findValue(D, e) {
    for (const [t, F] of this)
      if (D.call(e, F, t, this))
        return F;
  }
  map(D, e) {
    const t = new gu();
    for (const [F, n] of this) {
      const [r, E] = D.call(e, n, F, this);
      t.set(r, E);
    }
    return t;
  }
  filter(D, e) {
    const t = new gu();
    for (const [F, n] of this)
      D.call(e, n, F, this) && t.set(F, n);
    return t;
  }
  groupBy(D, e) {
    const t = new gu();
    let F = 0;
    for (const n of D) {
      const r = e(n, F), E = t.get(r) ?? [];
      E.push(n), t.set(r, E), F++;
    }
    return t;
  }
  toArray(D) {
    switch (D) {
      case "entries":
        return Array.from(this.entries());
      case "keys":
        return Array.from(this.keys());
      case "values":
        return Array.from(this.values());
      default:
        return Array.from(this.entries());
    }
  }
  toObject() {
    return Object.fromEntries(this.entries());
  }
  static fromObject(D) {
    return new gu(Object.entries(D));
  }
}
var O0 = typeof global == "object" && global && global.Object === Object && global, ye = typeof self == "object" && self && self.Object === Object && self, Z = O0 || ye || Function("return this")(), Y = Z.Symbol, S0 = Object.prototype, be = S0.hasOwnProperty, we = S0.toString, du = Y ? Y.toStringTag : void 0;
function xe(u) {
  var D = be.call(u, du), e = u[du];
  try {
    u[du] = void 0;
    var t = !0;
  } catch {
  }
  var F = we.call(u);
  return t && (D ? u[du] = e : delete u[du]), F;
}
var _e = Object.prototype, ve = _e.toString;
function Oe(u) {
  return ve.call(u);
}
var Se = "[object Null]", Pe = "[object Undefined]", PD = Y ? Y.toStringTag : void 0;
function cu(u) {
  return u == null ? u === void 0 ? Pe : Se : PD && PD in Object(u) ? xe(u) : Oe(u);
}
function su(u) {
  return u != null && typeof u == "object";
}
var Te = "[object Symbol]";
function Uu(u) {
  return typeof u == "symbol" || su(u) && cu(u) == Te;
}
function P0(u, D) {
  for (var e = -1, t = u == null ? 0 : u.length, F = Array(t); ++e < t; )
    F[e] = D(u[e], e, u);
  return F;
}
var R = Array.isArray, Ie = 1 / 0, TD = Y ? Y.prototype : void 0, ID = TD ? TD.toString : void 0;
function T0(u) {
  if (typeof u == "string")
    return u;
  if (R(u))
    return P0(u, T0) + "";
  if (Uu(u))
    return ID ? ID.call(u) : "";
  var D = u + "";
  return D == "0" && 1 / u == -Ie ? "-0" : D;
}
var Ne = /\s/;
function Me(u) {
  for (var D = u.length; D-- && Ne.test(u.charAt(D)); )
    ;
  return D;
}
var ke = /^\s+/;
function $e(u) {
  return u && u.slice(0, Me(u) + 1).replace(ke, "");
}
function wu(u) {
  var D = typeof u;
  return u != null && (D == "object" || D == "function");
}
var ND = NaN, Re = /^[-+]0x[0-9a-f]+$/i, Le = /^0b[01]+$/i, Ue = /^0o[0-7]+$/i, je = parseInt;
function Ye(u) {
  if (typeof u == "number")
    return u;
  if (Uu(u))
    return ND;
  if (wu(u)) {
    var D = typeof u.valueOf == "function" ? u.valueOf() : u;
    u = wu(D) ? D + "" : D;
  }
  if (typeof u != "string")
    return u === 0 ? u : +u;
  u = $e(u);
  var e = Le.test(u);
  return e || Ue.test(u) ? je(u.slice(2), e ? 2 : 8) : Re.test(u) ? ND : +u;
}
var MD = 1 / 0, He = 17976931348623157e292;
function We(u) {
  if (!u)
    return u === 0 ? u : 0;
  if (u = Ye(u), u === MD || u === -MD) {
    var D = u < 0 ? -1 : 1;
    return D * He;
  }
  return u === u ? u : 0;
}
function ze(u) {
  var D = We(u), e = D % 1;
  return D === D ? e ? D - e : D : 0;
}
function Ge(u) {
  return u;
}
var Ze = "[object AsyncFunction]", Ke = "[object Function]", qe = "[object GeneratorFunction]", Xe = "[object Proxy]";
function I0(u) {
  if (!wu(u))
    return !1;
  var D = cu(u);
  return D == Ke || D == qe || D == Ze || D == Xe;
}
var Xu = Z["__core-js_shared__"], kD = function() {
  var u = /[^.]+$/.exec(Xu && Xu.keys && Xu.keys.IE_PROTO || "");
  return u ? "Symbol(src)_1." + u : "";
}();
function Qe(u) {
  return !!kD && kD in u;
}
var Je = Function.prototype, Ve = Je.toString;
function Fu(u) {
  if (u != null) {
    try {
      return Ve.call(u);
    } catch {
    }
    try {
      return u + "";
    } catch {
    }
  }
  return "";
}
var ut = /[\\^$.*+?()[\]{}|]/g, Dt = /^\[object .+?Constructor\]$/, et = Function.prototype, tt = Object.prototype, Ft = et.toString, nt = tt.hasOwnProperty, rt = RegExp(
  "^" + Ft.call(nt).replace(ut, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Et(u) {
  if (!wu(u) || Qe(u))
    return !1;
  var D = I0(u) ? rt : Dt;
  return D.test(Fu(u));
}
function at(u, D) {
  return u == null ? void 0 : u[D];
}
function nu(u, D) {
  var e = at(u, D);
  return Et(e) ? e : void 0;
}
var ED = nu(Z, "WeakMap");
function Ct() {
}
var $D = function() {
  try {
    var u = nu(Object, "defineProperty");
    return u({}, "", {}), u;
  } catch {
  }
}();
function At(u, D, e, t) {
  for (var F = u.length, n = e + -1; ++n < F; )
    if (D(u[n], n, u))
      return n;
  return -1;
}
function it(u) {
  return u !== u;
}
function ot(u, D, e) {
  for (var t = e - 1, F = u.length; ++t < F; )
    if (u[t] === D)
      return t;
  return -1;
}
function st(u, D, e) {
  return D === D ? ot(u, D, e) : At(u, it, e);
}
function Bt(u, D) {
  var e = u == null ? 0 : u.length;
  return !!e && st(u, D, 0) > -1;
}
var ct = 9007199254740991, lt = /^(?:0|[1-9]\d*)$/;
function N0(u, D) {
  var e = typeof u;
  return D = D ?? ct, !!D && (e == "number" || e != "symbol" && lt.test(u)) && u > -1 && u % 1 == 0 && u < D;
}
function Ba(u, D, e) {
  D == "__proto__" && $D ? $D(u, D, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : u[D] = e;
}
function M0(u, D) {
  return u === D || u !== u && D !== D;
}
var ft = 9007199254740991;
function lD(u) {
  return typeof u == "number" && u > -1 && u % 1 == 0 && u <= ft;
}
function ju(u) {
  return u != null && lD(u.length) && !I0(u);
}
var ht = Object.prototype;
function k0(u) {
  var D = u && u.constructor, e = typeof D == "function" && D.prototype || ht;
  return u === e;
}
function dt(u, D) {
  for (var e = -1, t = Array(u); ++e < u; )
    t[e] = D(e);
  return t;
}
var pt = "[object Arguments]";
function RD(u) {
  return su(u) && cu(u) == pt;
}
var $0 = Object.prototype, mt = $0.hasOwnProperty, gt = $0.propertyIsEnumerable, Yu = RD(/* @__PURE__ */ function() {
  return arguments;
}()) ? RD : function(u) {
  return su(u) && mt.call(u, "callee") && !gt.call(u, "callee");
};
function yt() {
  return !1;
}
var R0 = typeof exports == "object" && exports && !exports.nodeType && exports, LD = R0 && typeof module == "object" && module && !module.nodeType && module, bt = LD && LD.exports === R0, UD = bt ? Z.Buffer : void 0, wt = UD ? UD.isBuffer : void 0, ku = wt || yt, xt = "[object Arguments]", _t = "[object Array]", vt = "[object Boolean]", Ot = "[object Date]", St = "[object Error]", Pt = "[object Function]", Tt = "[object Map]", It = "[object Number]", Nt = "[object Object]", Mt = "[object RegExp]", kt = "[object Set]", $t = "[object String]", Rt = "[object WeakMap]", Lt = "[object ArrayBuffer]", Ut = "[object DataView]", jt = "[object Float32Array]", Yt = "[object Float64Array]", Ht = "[object Int8Array]", Wt = "[object Int16Array]", zt = "[object Int32Array]", Gt = "[object Uint8Array]", Zt = "[object Uint8ClampedArray]", Kt = "[object Uint16Array]", qt = "[object Uint32Array]", x = {};
x[jt] = x[Yt] = x[Ht] = x[Wt] = x[zt] = x[Gt] = x[Zt] = x[Kt] = x[qt] = !0;
x[xt] = x[_t] = x[Lt] = x[vt] = x[Ut] = x[Ot] = x[St] = x[Pt] = x[Tt] = x[It] = x[Nt] = x[Mt] = x[kt] = x[$t] = x[Rt] = !1;
function Xt(u) {
  return su(u) && lD(u.length) && !!x[cu(u)];
}
function Qt(u) {
  return function(D) {
    return u(D);
  };
}
var L0 = typeof exports == "object" && exports && !exports.nodeType && exports, bu = L0 && typeof module == "object" && module && !module.nodeType && module, Jt = bu && bu.exports === L0, Qu = Jt && O0.process, jD = function() {
  try {
    var u = bu && bu.require && bu.require("util").types;
    return u || Qu && Qu.binding && Qu.binding("util");
  } catch {
  }
}(), YD = jD && jD.isTypedArray, fD = YD ? Qt(YD) : Xt, Vt = Object.prototype, uF = Vt.hasOwnProperty;
function DF(u, D) {
  var e = R(u), t = !e && Yu(u), F = !e && !t && ku(u), n = !e && !t && !F && fD(u), r = e || t || F || n, E = r ? dt(u.length, String) : [], C = E.length;
  for (var a in u)
    (D || uF.call(u, a)) && !(r && // Safari 9 has enumerable `arguments.length` in strict mode.
    (a == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    F && (a == "offset" || a == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    n && (a == "buffer" || a == "byteLength" || a == "byteOffset") || // Skip index properties.
    N0(a, C))) && E.push(a);
  return E;
}
function eF(u, D) {
  return function(e) {
    return u(D(e));
  };
}
var tF = eF(Object.keys, Object), FF = Object.prototype, nF = FF.hasOwnProperty;
function U0(u) {
  if (!k0(u))
    return tF(u);
  var D = [];
  for (var e in Object(u))
    nF.call(u, e) && e != "constructor" && D.push(e);
  return D;
}
function hD(u) {
  return ju(u) ? DF(u) : U0(u);
}
var rF = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, EF = /^\w*$/;
function dD(u, D) {
  if (R(u))
    return !1;
  var e = typeof u;
  return e == "number" || e == "symbol" || e == "boolean" || u == null || Uu(u) ? !0 : EF.test(u) || !rF.test(u) || D != null && u in Object(D);
}
var xu = nu(Object, "create");
function aF() {
  this.__data__ = xu ? xu(null) : {}, this.size = 0;
}
function CF(u) {
  var D = this.has(u) && delete this.__data__[u];
  return this.size -= D ? 1 : 0, D;
}
var AF = "__lodash_hash_undefined__", iF = Object.prototype, oF = iF.hasOwnProperty;
function sF(u) {
  var D = this.__data__;
  if (xu) {
    var e = D[u];
    return e === AF ? void 0 : e;
  }
  return oF.call(D, u) ? D[u] : void 0;
}
var BF = Object.prototype, cF = BF.hasOwnProperty;
function lF(u) {
  var D = this.__data__;
  return xu ? D[u] !== void 0 : cF.call(D, u);
}
var fF = "__lodash_hash_undefined__";
function hF(u, D) {
  var e = this.__data__;
  return this.size += this.has(u) ? 0 : 1, e[u] = xu && D === void 0 ? fF : D, this;
}
function Du(u) {
  var D = -1, e = u == null ? 0 : u.length;
  for (this.clear(); ++D < e; ) {
    var t = u[D];
    this.set(t[0], t[1]);
  }
}
Du.prototype.clear = aF;
Du.prototype.delete = CF;
Du.prototype.get = sF;
Du.prototype.has = lF;
Du.prototype.set = hF;
function dF() {
  this.__data__ = [], this.size = 0;
}
function Hu(u, D) {
  for (var e = u.length; e--; )
    if (M0(u[e][0], D))
      return e;
  return -1;
}
var pF = Array.prototype, mF = pF.splice;
function gF(u) {
  var D = this.__data__, e = Hu(D, u);
  if (e < 0)
    return !1;
  var t = D.length - 1;
  return e == t ? D.pop() : mF.call(D, e, 1), --this.size, !0;
}
function yF(u) {
  var D = this.__data__, e = Hu(D, u);
  return e < 0 ? void 0 : D[e][1];
}
function bF(u) {
  return Hu(this.__data__, u) > -1;
}
function wF(u, D) {
  var e = this.__data__, t = Hu(e, u);
  return t < 0 ? (++this.size, e.push([u, D])) : e[t][1] = D, this;
}
function K(u) {
  var D = -1, e = u == null ? 0 : u.length;
  for (this.clear(); ++D < e; ) {
    var t = u[D];
    this.set(t[0], t[1]);
  }
}
K.prototype.clear = dF;
K.prototype.delete = gF;
K.prototype.get = yF;
K.prototype.has = bF;
K.prototype.set = wF;
var _u = nu(Z, "Map");
function xF() {
  this.size = 0, this.__data__ = {
    hash: new Du(),
    map: new (_u || K)(),
    string: new Du()
  };
}
function _F(u) {
  var D = typeof u;
  return D == "string" || D == "number" || D == "symbol" || D == "boolean" ? u !== "__proto__" : u === null;
}
function Wu(u, D) {
  var e = u.__data__;
  return _F(D) ? e[typeof D == "string" ? "string" : "hash"] : e.map;
}
function vF(u) {
  var D = Wu(this, u).delete(u);
  return this.size -= D ? 1 : 0, D;
}
function OF(u) {
  return Wu(this, u).get(u);
}
function SF(u) {
  return Wu(this, u).has(u);
}
function PF(u, D) {
  var e = Wu(this, u), t = e.size;
  return e.set(u, D), this.size += e.size == t ? 0 : 1, this;
}
function q(u) {
  var D = -1, e = u == null ? 0 : u.length;
  for (this.clear(); ++D < e; ) {
    var t = u[D];
    this.set(t[0], t[1]);
  }
}
q.prototype.clear = xF;
q.prototype.delete = vF;
q.prototype.get = OF;
q.prototype.has = SF;
q.prototype.set = PF;
var TF = "Expected a function";
function pD(u, D) {
  if (typeof u != "function" || D != null && typeof D != "function")
    throw new TypeError(TF);
  var e = function() {
    var t = arguments, F = D ? D.apply(this, t) : t[0], n = e.cache;
    if (n.has(F))
      return n.get(F);
    var r = u.apply(this, t);
    return e.cache = n.set(F, r) || n, r;
  };
  return e.cache = new (pD.Cache || q)(), e;
}
pD.Cache = q;
var IF = 500;
function NF(u) {
  var D = pD(u, function(t) {
    return e.size === IF && e.clear(), t;
  }), e = D.cache;
  return D;
}
var MF = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, kF = /\\(\\)?/g, $F = NF(function(u) {
  var D = [];
  return u.charCodeAt(0) === 46 && D.push(""), u.replace(MF, function(e, t, F, n) {
    D.push(F ? n.replace(kF, "$1") : t || e);
  }), D;
});
function RF(u) {
  return u == null ? "" : T0(u);
}
function j0(u, D) {
  return R(u) ? u : dD(u, D) ? [u] : $F(RF(u));
}
var LF = 1 / 0;
function zu(u) {
  if (typeof u == "string" || Uu(u))
    return u;
  var D = u + "";
  return D == "0" && 1 / u == -LF ? "-0" : D;
}
function Y0(u, D) {
  D = j0(D, u);
  for (var e = 0, t = D.length; u != null && e < t; )
    u = u[zu(D[e++])];
  return e && e == t ? u : void 0;
}
function H0(u, D, e) {
  var t = u == null ? void 0 : Y0(u, D);
  return t === void 0 ? e : t;
}
function W0(u, D) {
  for (var e = -1, t = D.length, F = u.length; ++e < t; )
    u[F + e] = D[e];
  return u;
}
var HD = Y ? Y.isConcatSpreadable : void 0;
function UF(u) {
  return R(u) || Yu(u) || !!(HD && u && u[HD]);
}
function jF(u, D, e, t, F) {
  var n = -1, r = u.length;
  for (e || (e = UF), F || (F = []); ++n < r; ) {
    var E = u[n];
    e(E) ? W0(F, E) : F[F.length] = E;
  }
  return F;
}
function YF(u, D, e) {
  var t = -1, F = u.length;
  D < 0 && (D = -D > F ? 0 : F + D), e = e > F ? F : e, e < 0 && (e += F), F = D > e ? 0 : e - D >>> 0, D >>>= 0;
  for (var n = Array(F); ++t < F; )
    n[t] = u[t + D];
  return n;
}
function HF() {
  this.__data__ = new K(), this.size = 0;
}
function WF(u) {
  var D = this.__data__, e = D.delete(u);
  return this.size = D.size, e;
}
function zF(u) {
  return this.__data__.get(u);
}
function GF(u) {
  return this.__data__.has(u);
}
var ZF = 200;
function KF(u, D) {
  var e = this.__data__;
  if (e instanceof K) {
    var t = e.__data__;
    if (!_u || t.length < ZF - 1)
      return t.push([u, D]), this.size = ++e.size, this;
    e = this.__data__ = new q(t);
  }
  return e.set(u, D), this.size = e.size, this;
}
function G(u) {
  var D = this.__data__ = new K(u);
  this.size = D.size;
}
G.prototype.clear = HF;
G.prototype.delete = WF;
G.prototype.get = zF;
G.prototype.has = GF;
G.prototype.set = KF;
function qF(u, D) {
  for (var e = -1, t = u == null ? 0 : u.length, F = 0, n = []; ++e < t; ) {
    var r = u[e];
    D(r, e, u) && (n[F++] = r);
  }
  return n;
}
function XF() {
  return [];
}
var QF = Object.prototype, JF = QF.propertyIsEnumerable, WD = Object.getOwnPropertySymbols, VF = WD ? function(u) {
  return u == null ? [] : (u = Object(u), qF(WD(u), function(D) {
    return JF.call(u, D);
  }));
} : XF;
function un(u, D, e) {
  var t = D(u);
  return R(u) ? t : W0(t, e(u));
}
function zD(u) {
  return un(u, hD, VF);
}
var aD = nu(Z, "DataView"), CD = nu(Z, "Promise"), iu = nu(Z, "Set"), GD = "[object Map]", Dn = "[object Object]", ZD = "[object Promise]", KD = "[object Set]", qD = "[object WeakMap]", XD = "[object DataView]", en = Fu(aD), tn = Fu(_u), Fn = Fu(CD), nn = Fu(iu), rn = Fu(ED), z = cu;
(aD && z(new aD(new ArrayBuffer(1))) != XD || _u && z(new _u()) != GD || CD && z(CD.resolve()) != ZD || iu && z(new iu()) != KD || ED && z(new ED()) != qD) && (z = function(u) {
  var D = cu(u), e = D == Dn ? u.constructor : void 0, t = e ? Fu(e) : "";
  if (t)
    switch (t) {
      case en:
        return XD;
      case tn:
        return GD;
      case Fn:
        return ZD;
      case nn:
        return KD;
      case rn:
        return qD;
    }
  return D;
});
var QD = Z.Uint8Array, En = "__lodash_hash_undefined__";
function an(u) {
  return this.__data__.set(u, En), this;
}
function Cn(u) {
  return this.__data__.has(u);
}
function vu(u) {
  var D = -1, e = u == null ? 0 : u.length;
  for (this.__data__ = new q(); ++D < e; )
    this.add(u[D]);
}
vu.prototype.add = vu.prototype.push = an;
vu.prototype.has = Cn;
function An(u, D) {
  for (var e = -1, t = u == null ? 0 : u.length; ++e < t; )
    if (D(u[e], e, u))
      return !0;
  return !1;
}
function z0(u, D) {
  return u.has(D);
}
var on = 1, sn = 2;
function G0(u, D, e, t, F, n) {
  var r = e & on, E = u.length, C = D.length;
  if (E != C && !(r && C > E))
    return !1;
  var a = n.get(u), i = n.get(D);
  if (a && i)
    return a == D && i == u;
  var A = -1, o = !0, s = e & sn ? new vu() : void 0;
  for (n.set(u, D), n.set(D, u); ++A < E; ) {
    var c = u[A], f = D[A];
    if (t)
      var l = r ? t(f, c, A, D, u, n) : t(c, f, A, u, D, n);
    if (l !== void 0) {
      if (l)
        continue;
      o = !1;
      break;
    }
    if (s) {
      if (!An(D, function(y, h) {
        if (!z0(s, h) && (c === y || F(c, y, e, t, n)))
          return s.push(h);
      })) {
        o = !1;
        break;
      }
    } else if (!(c === f || F(c, f, e, t, n))) {
      o = !1;
      break;
    }
  }
  return n.delete(u), n.delete(D), o;
}
function Bn(u) {
  var D = -1, e = Array(u.size);
  return u.forEach(function(t, F) {
    e[++D] = [F, t];
  }), e;
}
function mD(u) {
  var D = -1, e = Array(u.size);
  return u.forEach(function(t) {
    e[++D] = t;
  }), e;
}
var cn = 1, ln = 2, fn = "[object Boolean]", hn = "[object Date]", dn = "[object Error]", pn = "[object Map]", mn = "[object Number]", gn = "[object RegExp]", yn = "[object Set]", bn = "[object String]", wn = "[object Symbol]", xn = "[object ArrayBuffer]", _n = "[object DataView]", JD = Y ? Y.prototype : void 0, Ju = JD ? JD.valueOf : void 0;
function vn(u, D, e, t, F, n, r) {
  switch (e) {
    case _n:
      if (u.byteLength != D.byteLength || u.byteOffset != D.byteOffset)
        return !1;
      u = u.buffer, D = D.buffer;
    case xn:
      return !(u.byteLength != D.byteLength || !n(new QD(u), new QD(D)));
    case fn:
    case hn:
    case mn:
      return M0(+u, +D);
    case dn:
      return u.name == D.name && u.message == D.message;
    case gn:
    case bn:
      return u == D + "";
    case pn:
      var E = Bn;
    case yn:
      var C = t & cn;
      if (E || (E = mD), u.size != D.size && !C)
        return !1;
      var a = r.get(u);
      if (a)
        return a == D;
      t |= ln, r.set(u, D);
      var i = G0(E(u), E(D), t, F, n, r);
      return r.delete(u), i;
    case wn:
      if (Ju)
        return Ju.call(u) == Ju.call(D);
  }
  return !1;
}
var On = 1, Sn = Object.prototype, Pn = Sn.hasOwnProperty;
function Tn(u, D, e, t, F, n) {
  var r = e & On, E = zD(u), C = E.length, a = zD(D), i = a.length;
  if (C != i && !r)
    return !1;
  for (var A = C; A--; ) {
    var o = E[A];
    if (!(r ? o in D : Pn.call(D, o)))
      return !1;
  }
  var s = n.get(u), c = n.get(D);
  if (s && c)
    return s == D && c == u;
  var f = !0;
  n.set(u, D), n.set(D, u);
  for (var l = r; ++A < C; ) {
    o = E[A];
    var y = u[o], h = D[o];
    if (t)
      var p = r ? t(h, y, o, D, u, n) : t(y, h, o, u, D, n);
    if (!(p === void 0 ? y === h || F(y, h, e, t, n) : p)) {
      f = !1;
      break;
    }
    l || (l = o == "constructor");
  }
  if (f && !l) {
    var m = u.constructor, v = D.constructor;
    m != v && "constructor" in u && "constructor" in D && !(typeof m == "function" && m instanceof m && typeof v == "function" && v instanceof v) && (f = !1);
  }
  return n.delete(u), n.delete(D), f;
}
var In = 1, VD = "[object Arguments]", u0 = "[object Array]", Nu = "[object Object]", Nn = Object.prototype, D0 = Nn.hasOwnProperty;
function Mn(u, D, e, t, F, n) {
  var r = R(u), E = R(D), C = r ? u0 : z(u), a = E ? u0 : z(D);
  C = C == VD ? Nu : C, a = a == VD ? Nu : a;
  var i = C == Nu, A = a == Nu, o = C == a;
  if (o && ku(u)) {
    if (!ku(D))
      return !1;
    r = !0, i = !1;
  }
  if (o && !i)
    return n || (n = new G()), r || fD(u) ? G0(u, D, e, t, F, n) : vn(u, D, C, e, t, F, n);
  if (!(e & In)) {
    var s = i && D0.call(u, "__wrapped__"), c = A && D0.call(D, "__wrapped__");
    if (s || c) {
      var f = s ? u.value() : u, l = c ? D.value() : D;
      return n || (n = new G()), F(f, l, e, t, n);
    }
  }
  return o ? (n || (n = new G()), Tn(u, D, e, t, F, n)) : !1;
}
function gD(u, D, e, t, F) {
  return u === D ? !0 : u == null || D == null || !su(u) && !su(D) ? u !== u && D !== D : Mn(u, D, e, t, gD, F);
}
var kn = 1, $n = 2;
function Rn(u, D, e, t) {
  var F = e.length, n = F;
  if (u == null)
    return !n;
  for (u = Object(u); F--; ) {
    var r = e[F];
    if (r[2] ? r[1] !== u[r[0]] : !(r[0] in u))
      return !1;
  }
  for (; ++F < n; ) {
    r = e[F];
    var E = r[0], C = u[E], a = r[1];
    if (r[2]) {
      if (C === void 0 && !(E in u))
        return !1;
    } else {
      var i = new G(), A;
      if (!(A === void 0 ? gD(a, C, kn | $n, t, i) : A))
        return !1;
    }
  }
  return !0;
}
function Z0(u) {
  return u === u && !wu(u);
}
function Ln(u) {
  for (var D = hD(u), e = D.length; e--; ) {
    var t = D[e], F = u[t];
    D[e] = [t, F, Z0(F)];
  }
  return D;
}
function K0(u, D) {
  return function(e) {
    return e == null ? !1 : e[u] === D && (D !== void 0 || u in Object(e));
  };
}
function Un(u) {
  var D = Ln(u);
  return D.length == 1 && D[0][2] ? K0(D[0][0], D[0][1]) : function(e) {
    return e === u || Rn(e, u, D);
  };
}
function jn(u, D) {
  return u != null && D in Object(u);
}
function Yn(u, D, e) {
  D = j0(D, u);
  for (var t = -1, F = D.length, n = !1; ++t < F; ) {
    var r = zu(D[t]);
    if (!(n = u != null && e(u, r)))
      break;
    u = u[r];
  }
  return n || ++t != F ? n : (F = u == null ? 0 : u.length, !!F && lD(F) && N0(r, F) && (R(u) || Yu(u)));
}
function Hn(u, D) {
  return u != null && Yn(u, D, jn);
}
var Wn = 1, zn = 2;
function Gn(u, D) {
  return dD(u) && Z0(D) ? K0(zu(u), D) : function(e) {
    var t = H0(e, u);
    return t === void 0 && t === D ? Hn(e, u) : gD(D, t, Wn | zn);
  };
}
function Zn(u) {
  return function(D) {
    return D == null ? void 0 : D[u];
  };
}
function Kn(u) {
  return function(D) {
    return Y0(D, u);
  };
}
function qn(u) {
  return dD(u) ? Zn(zu(u)) : Kn(u);
}
function Xn(u) {
  return typeof u == "function" ? u : u == null ? Ge : typeof u == "object" ? R(u) ? Gn(u[0], u[1]) : Un(u) : qn(u);
}
function Qn(u) {
  return function(D, e, t) {
    for (var F = -1, n = Object(D), r = t(D), E = r.length; E--; ) {
      var C = r[++F];
      if (e(n[C], C, n) === !1)
        break;
    }
    return D;
  };
}
var Jn = Qn();
function Vn(u, D) {
  return u && Jn(u, D, hD);
}
function ur(u, D) {
  return function(e, t) {
    if (e == null)
      return e;
    if (!ju(e))
      return u(e, t);
    for (var F = e.length, n = -1, r = Object(e); ++n < F && t(r[n], n, r) !== !1; )
      ;
    return e;
  };
}
var Dr = ur(Vn);
function e0(u) {
  var D = u == null ? 0 : u.length;
  return D ? u[D - 1] : void 0;
}
function er(u, D) {
  var e = -1, t = ju(u) ? Array(u.length) : [];
  return Dr(u, function(F, n, r) {
    t[++e] = D(F, n, r);
  }), t;
}
function tr(u, D) {
  var e = R(u) ? P0 : er;
  return e(u, Xn(D));
}
function Fr(u, D) {
  return jF(tr(u, D));
}
function V(u) {
  for (var D = -1, e = u == null ? 0 : u.length, t = {}; ++D < e; ) {
    var F = u[D];
    t[F[0]] = F[1];
  }
  return t;
}
var nr = "[object Map]", rr = "[object Set]", Er = Object.prototype, ar = Er.hasOwnProperty;
function t0(u) {
  if (u == null)
    return !0;
  if (ju(u) && (R(u) || typeof u == "string" || typeof u.splice == "function" || ku(u) || fD(u) || Yu(u)))
    return !u.length;
  var D = z(u);
  if (D == nr || D == rr)
    return !u.size;
  if (k0(u))
    return !U0(u).length;
  for (var e in u)
    if (ar.call(u, e))
      return !1;
  return !0;
}
var Cr = Array.prototype, Ar = Cr.join;
function ir(u, D) {
  return u == null ? "" : Ar.call(u, D);
}
function or(u, D, e) {
  return u && u.length ? (D = D === void 0 ? 1 : ze(D), YF(u, 0, D < 0 ? 0 : D)) : [];
}
var sr = 1 / 0, Br = iu && 1 / mD(new iu([, -0]))[1] == sr ? function(u) {
  return new iu(u);
} : Ct, cr = 200;
function lr(u, D, e) {
  var t = -1, F = Bt, n = u.length, r = !0, E = [], C = E;
  if (n >= cr) {
    var a = Br(u);
    if (a)
      return mD(a);
    r = !1, F = z0, C = new vu();
  } else
    C = E;
  u:
    for (; ++t < n; ) {
      var i = u[t], A = i;
      if (i = i !== 0 ? i : 0, r && A === A) {
        for (var o = C.length; o--; )
          if (C[o] === A)
            continue u;
        E.push(i);
      } else F(C, A, e) || (C !== E && C.push(A), E.push(i));
    }
  return E;
}
function fr(u) {
  return u && u.length ? lr(u) : [];
}
const hr = 0.5522847498307935, dr = (u, D, e, t = !1) => t ? u[e] - D[e] : Math.abs(u[e] - D[e]), pr = (u, D, e = !1) => {
  const t = Object.keys(u).map((F) => dr(u, D, F, e));
  return e ? V(t.map((F, n) => [Object.keys(u)[n], F])) : Math.pow(
    t.reduce((F, n) => F + Math.pow(n, t.length), 0),
    1 / t.length
  );
}, mr = {
  get: (u, D, e) => /^ORIGIN_/.test(D) ? V(
    ["x", "y", "z", "w"].slice(0, Number(D.replace(/^ORIGIN_(\d)D/, "$1"))).map((t) => [t, 0])
  ) : /^delta/.test(D) ? (t, F, n) => D === "delta" ? pr(t, F, n) : Reflect.get(u, D, e) : D === "add" ? (t, F) => V(
    Object.keys(t).map((n) => [n, t[n] + F[n]])
  ) : D === "minus" ? (t, F) => V(
    Object.keys(t).map((n) => [n, t[n] - F[n]])
  ) : D === "times" ? (t, F) => V(
    Object.keys(t).map((n) => [
      n,
      t[n] * (Number(F) || F[n])
    ])
  ) : D === "divide" ? (t, F, n = !1) => V(
    Object.keys(t).map((r) => [
      r,
      ((E) => n ? Math.abs(E) : E)(t[r] / F[r])
    ])
  ) : D === "clamp" ? (t, F, n) => V(
    Object.keys(t).map((r) => [
      r,
      AD.clamp(t[r], F[r], n[r])
    ])
  ) : D === "middle" ? (t, F) => V(
    Object.keys(t).map((n) => [n, (t[n] + F[n]) / 2])
  ) : Reflect.get(u, D, e)
}, AD = new Proxy(Math, {
  get(u, D, e) {
    return D === "ARC_BASE" ? hr : D === "Vector" ? new Proxy({}, mr) : D === "deg" ? (t) => t * (180 / Math.PI) : D === "rad" ? (t) => t * (Math.PI / 180) : D === "gcd" ? (t, F) => F ? AD.gcd(F, t % F) : t : D === "lcm" ? (t, F) => t * F / AD.gcd(t, F) : D === "clamp" ? (t, F, n) => Math.min(Math.max(t, F), n) : D === "round" ? (t, F = 0) => Math.round(t * 10 ** F) / 10 ** F : D === "cot" ? (t) => 1 / Math.tan(t) : D === "sec" ? (t) => 1 / Math.cos(t) : D === "csc" ? (t) => 1 / Math.sin(t) : Reflect.get(u, D, e);
  }
}), gr = {
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
}, yr = (u, D, e) => {
  let t;
  const F = gr[u];
  return typeof F == "string" ? t = F : D === 1 ? t = F.one : t = F.other.replace("{{count}}", D.toString()), e != null && e.addSuffix ? e.comparison && e.comparison > 0 ? "in " + t : t + " ago" : t;
};
function Vu(u) {
  return (D = {}) => {
    const e = D.width ? String(D.width) : u.defaultWidth;
    return u.formats[e] || u.formats[u.defaultWidth];
  };
}
const br = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, wr = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, xr = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, _r = {
  date: Vu({
    formats: br,
    defaultWidth: "full"
  }),
  time: Vu({
    formats: wr,
    defaultWidth: "full"
  }),
  dateTime: Vu({
    formats: xr,
    defaultWidth: "full"
  })
}, vr = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Or = (u, D, e, t) => vr[u];
function pu(u) {
  return (D, e) => {
    const t = e != null && e.context ? String(e.context) : "standalone";
    let F;
    if (t === "formatting" && u.formattingValues) {
      const r = u.defaultFormattingWidth || u.defaultWidth, E = e != null && e.width ? String(e.width) : r;
      F = u.formattingValues[E] || u.formattingValues[r];
    } else {
      const r = u.defaultWidth, E = e != null && e.width ? String(e.width) : u.defaultWidth;
      F = u.values[E] || u.values[r];
    }
    const n = u.argumentCallback ? u.argumentCallback(D) : D;
    return F[n];
  };
}
const Sr = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Pr = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Tr = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, Ir = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, Nr = {
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
}, Mr = {
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
}, kr = (u, D) => {
  const e = Number(u), t = e % 100;
  if (t > 20 || t < 10)
    switch (t % 10) {
      case 1:
        return e + "st";
      case 2:
        return e + "nd";
      case 3:
        return e + "rd";
    }
  return e + "th";
}, $r = {
  ordinalNumber: kr,
  era: pu({
    values: Sr,
    defaultWidth: "wide"
  }),
  quarter: pu({
    values: Pr,
    defaultWidth: "wide",
    argumentCallback: (u) => u - 1
  }),
  month: pu({
    values: Tr,
    defaultWidth: "wide"
  }),
  day: pu({
    values: Ir,
    defaultWidth: "wide"
  }),
  dayPeriod: pu({
    values: Nr,
    defaultWidth: "wide",
    formattingValues: Mr,
    defaultFormattingWidth: "wide"
  })
};
function mu(u) {
  return (D, e = {}) => {
    const t = e.width, F = t && u.matchPatterns[t] || u.matchPatterns[u.defaultMatchWidth], n = D.match(F);
    if (!n)
      return null;
    const r = n[0], E = t && u.parsePatterns[t] || u.parsePatterns[u.defaultParseWidth], C = Array.isArray(E) ? Lr(E, (A) => A.test(r)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      Rr(E, (A) => A.test(r))
    );
    let a;
    a = u.valueCallback ? u.valueCallback(C) : C, a = e.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      e.valueCallback(a)
    ) : a;
    const i = D.slice(r.length);
    return { value: a, rest: i };
  };
}
function Rr(u, D) {
  for (const e in u)
    if (Object.prototype.hasOwnProperty.call(u, e) && D(u[e]))
      return e;
}
function Lr(u, D) {
  for (let e = 0; e < u.length; e++)
    if (D(u[e]))
      return e;
}
function Ur(u) {
  return (D, e = {}) => {
    const t = D.match(u.matchPattern);
    if (!t) return null;
    const F = t[0], n = D.match(u.parsePattern);
    if (!n) return null;
    let r = u.valueCallback ? u.valueCallback(n[0]) : n[0];
    r = e.valueCallback ? e.valueCallback(r) : r;
    const E = D.slice(F.length);
    return { value: r, rest: E };
  };
}
const jr = /^(\d+)(th|st|nd|rd)?/i, Yr = /\d+/i, Hr = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Wr = {
  any: [/^b/i, /^(a|c)/i]
}, zr = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Gr = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Zr = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Kr = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, qr = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Xr = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Qr = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Jr = {
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
}, Vr = {
  ordinalNumber: Ur({
    matchPattern: jr,
    parsePattern: Yr,
    valueCallback: (u) => parseInt(u, 10)
  }),
  era: mu({
    matchPatterns: Hr,
    defaultMatchWidth: "wide",
    parsePatterns: Wr,
    defaultParseWidth: "any"
  }),
  quarter: mu({
    matchPatterns: zr,
    defaultMatchWidth: "wide",
    parsePatterns: Gr,
    defaultParseWidth: "any",
    valueCallback: (u) => u + 1
  }),
  month: mu({
    matchPatterns: Zr,
    defaultMatchWidth: "wide",
    parsePatterns: Kr,
    defaultParseWidth: "any"
  }),
  day: mu({
    matchPatterns: qr,
    defaultMatchWidth: "wide",
    parsePatterns: Xr,
    defaultParseWidth: "any"
  }),
  dayPeriod: mu({
    matchPatterns: Qr,
    defaultMatchWidth: "any",
    parsePatterns: Jr,
    defaultParseWidth: "any"
  })
}, u1 = {
  code: "en-US",
  formatDistance: yr,
  formatLong: _r,
  formatRelative: Or,
  localize: $r,
  match: Vr,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
let D1 = {};
function Gu() {
  return D1;
}
const q0 = 6048e5, e1 = 864e5;
function U(u) {
  const D = Object.prototype.toString.call(u);
  return u instanceof Date || typeof u == "object" && D === "[object Date]" ? new u.constructor(+u) : typeof u == "number" || D === "[object Number]" || typeof u == "string" || D === "[object String]" ? new Date(u) : /* @__PURE__ */ new Date(NaN);
}
function F0(u) {
  const D = U(u);
  return D.setHours(0, 0, 0, 0), D;
}
function n0(u) {
  const D = U(u), e = new Date(
    Date.UTC(
      D.getFullYear(),
      D.getMonth(),
      D.getDate(),
      D.getHours(),
      D.getMinutes(),
      D.getSeconds(),
      D.getMilliseconds()
    )
  );
  return e.setUTCFullYear(D.getFullYear()), +u - +e;
}
function t1(u, D) {
  const e = F0(u), t = F0(D), F = +e - n0(e), n = +t - n0(t);
  return Math.round((F - n) / e1);
}
function eu(u, D) {
  return u instanceof Date ? new u.constructor(D) : new Date(D);
}
function F1(u) {
  const D = U(u), e = eu(u, 0);
  return e.setFullYear(D.getFullYear(), 0, 1), e.setHours(0, 0, 0, 0), e;
}
function n1(u) {
  const D = U(u);
  return t1(D, F1(D)) + 1;
}
function Ou(u, D) {
  var E, C, a, i;
  const e = Gu(), t = (D == null ? void 0 : D.weekStartsOn) ?? ((C = (E = D == null ? void 0 : D.locale) == null ? void 0 : E.options) == null ? void 0 : C.weekStartsOn) ?? e.weekStartsOn ?? ((i = (a = e.locale) == null ? void 0 : a.options) == null ? void 0 : i.weekStartsOn) ?? 0, F = U(u), n = F.getDay(), r = (n < t ? 7 : 0) + n - t;
  return F.setDate(F.getDate() - r), F.setHours(0, 0, 0, 0), F;
}
function $u(u) {
  return Ou(u, { weekStartsOn: 1 });
}
function X0(u) {
  const D = U(u), e = D.getFullYear(), t = eu(u, 0);
  t.setFullYear(e + 1, 0, 4), t.setHours(0, 0, 0, 0);
  const F = $u(t), n = eu(u, 0);
  n.setFullYear(e, 0, 4), n.setHours(0, 0, 0, 0);
  const r = $u(n);
  return D.getTime() >= F.getTime() ? e + 1 : D.getTime() >= r.getTime() ? e : e - 1;
}
function r1(u) {
  const D = X0(u), e = eu(u, 0);
  return e.setFullYear(D, 0, 4), e.setHours(0, 0, 0, 0), $u(e);
}
function E1(u) {
  const D = U(u), e = +$u(D) - +r1(D);
  return Math.round(e / q0) + 1;
}
function Q0(u, D) {
  var i, A, o, s;
  const e = U(u), t = e.getFullYear(), F = Gu(), n = (D == null ? void 0 : D.firstWeekContainsDate) ?? ((A = (i = D == null ? void 0 : D.locale) == null ? void 0 : i.options) == null ? void 0 : A.firstWeekContainsDate) ?? F.firstWeekContainsDate ?? ((s = (o = F.locale) == null ? void 0 : o.options) == null ? void 0 : s.firstWeekContainsDate) ?? 1, r = eu(u, 0);
  r.setFullYear(t + 1, 0, n), r.setHours(0, 0, 0, 0);
  const E = Ou(r, D), C = eu(u, 0);
  C.setFullYear(t, 0, n), C.setHours(0, 0, 0, 0);
  const a = Ou(C, D);
  return e.getTime() >= E.getTime() ? t + 1 : e.getTime() >= a.getTime() ? t : t - 1;
}
function a1(u, D) {
  var E, C, a, i;
  const e = Gu(), t = (D == null ? void 0 : D.firstWeekContainsDate) ?? ((C = (E = D == null ? void 0 : D.locale) == null ? void 0 : E.options) == null ? void 0 : C.firstWeekContainsDate) ?? e.firstWeekContainsDate ?? ((i = (a = e.locale) == null ? void 0 : a.options) == null ? void 0 : i.firstWeekContainsDate) ?? 1, F = Q0(u, D), n = eu(u, 0);
  return n.setFullYear(F, 0, t), n.setHours(0, 0, 0, 0), Ou(n, D);
}
function C1(u, D) {
  const e = U(u), t = +Ou(e, D) - +a1(e, D);
  return Math.round(t / q0) + 1;
}
function b(u, D) {
  const e = u < 0 ? "-" : "", t = Math.abs(u).toString().padStart(D, "0");
  return e + t;
}
const Q = {
  // Year
  y(u, D) {
    const e = u.getFullYear(), t = e > 0 ? e : 1 - e;
    return b(D === "yy" ? t % 100 : t, D.length);
  },
  // Month
  M(u, D) {
    const e = u.getMonth();
    return D === "M" ? String(e + 1) : b(e + 1, 2);
  },
  // Day of the month
  d(u, D) {
    return b(u.getDate(), D.length);
  },
  // AM or PM
  a(u, D) {
    const e = u.getHours() / 12 >= 1 ? "pm" : "am";
    switch (D) {
      case "a":
      case "aa":
        return e.toUpperCase();
      case "aaa":
        return e;
      case "aaaaa":
        return e[0];
      case "aaaa":
      default:
        return e === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(u, D) {
    return b(u.getHours() % 12 || 12, D.length);
  },
  // Hour [0-23]
  H(u, D) {
    return b(u.getHours(), D.length);
  },
  // Minute
  m(u, D) {
    return b(u.getMinutes(), D.length);
  },
  // Second
  s(u, D) {
    return b(u.getSeconds(), D.length);
  },
  // Fraction of second
  S(u, D) {
    const e = D.length, t = u.getMilliseconds(), F = Math.trunc(
      t * Math.pow(10, e - 3)
    );
    return b(F, D.length);
  }
}, Eu = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, r0 = {
  // Era
  G: function(u, D, e) {
    const t = u.getFullYear() > 0 ? 1 : 0;
    switch (D) {
      case "G":
      case "GG":
      case "GGG":
        return e.era(t, { width: "abbreviated" });
      case "GGGGG":
        return e.era(t, { width: "narrow" });
      case "GGGG":
      default:
        return e.era(t, { width: "wide" });
    }
  },
  // Year
  y: function(u, D, e) {
    if (D === "yo") {
      const t = u.getFullYear(), F = t > 0 ? t : 1 - t;
      return e.ordinalNumber(F, { unit: "year" });
    }
    return Q.y(u, D);
  },
  // Local week-numbering year
  Y: function(u, D, e, t) {
    const F = Q0(u, t), n = F > 0 ? F : 1 - F;
    if (D === "YY") {
      const r = n % 100;
      return b(r, 2);
    }
    return D === "Yo" ? e.ordinalNumber(n, { unit: "year" }) : b(n, D.length);
  },
  // ISO week-numbering year
  R: function(u, D) {
    const e = X0(u);
    return b(e, D.length);
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
  u: function(u, D) {
    const e = u.getFullYear();
    return b(e, D.length);
  },
  // Quarter
  Q: function(u, D, e) {
    const t = Math.ceil((u.getMonth() + 1) / 3);
    switch (D) {
      case "Q":
        return String(t);
      case "QQ":
        return b(t, 2);
      case "Qo":
        return e.ordinalNumber(t, { unit: "quarter" });
      case "QQQ":
        return e.quarter(t, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return e.quarter(t, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return e.quarter(t, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(u, D, e) {
    const t = Math.ceil((u.getMonth() + 1) / 3);
    switch (D) {
      case "q":
        return String(t);
      case "qq":
        return b(t, 2);
      case "qo":
        return e.ordinalNumber(t, { unit: "quarter" });
      case "qqq":
        return e.quarter(t, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return e.quarter(t, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return e.quarter(t, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(u, D, e) {
    const t = u.getMonth();
    switch (D) {
      case "M":
      case "MM":
        return Q.M(u, D);
      case "Mo":
        return e.ordinalNumber(t + 1, { unit: "month" });
      case "MMM":
        return e.month(t, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return e.month(t, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return e.month(t, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(u, D, e) {
    const t = u.getMonth();
    switch (D) {
      case "L":
        return String(t + 1);
      case "LL":
        return b(t + 1, 2);
      case "Lo":
        return e.ordinalNumber(t + 1, { unit: "month" });
      case "LLL":
        return e.month(t, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return e.month(t, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return e.month(t, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(u, D, e, t) {
    const F = C1(u, t);
    return D === "wo" ? e.ordinalNumber(F, { unit: "week" }) : b(F, D.length);
  },
  // ISO week of year
  I: function(u, D, e) {
    const t = E1(u);
    return D === "Io" ? e.ordinalNumber(t, { unit: "week" }) : b(t, D.length);
  },
  // Day of the month
  d: function(u, D, e) {
    return D === "do" ? e.ordinalNumber(u.getDate(), { unit: "date" }) : Q.d(u, D);
  },
  // Day of year
  D: function(u, D, e) {
    const t = n1(u);
    return D === "Do" ? e.ordinalNumber(t, { unit: "dayOfYear" }) : b(t, D.length);
  },
  // Day of week
  E: function(u, D, e) {
    const t = u.getDay();
    switch (D) {
      case "E":
      case "EE":
      case "EEE":
        return e.day(t, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return e.day(t, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return e.day(t, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return e.day(t, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(u, D, e, t) {
    const F = u.getDay(), n = (F - t.weekStartsOn + 8) % 7 || 7;
    switch (D) {
      case "e":
        return String(n);
      case "ee":
        return b(n, 2);
      case "eo":
        return e.ordinalNumber(n, { unit: "day" });
      case "eee":
        return e.day(F, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return e.day(F, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return e.day(F, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return e.day(F, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(u, D, e, t) {
    const F = u.getDay(), n = (F - t.weekStartsOn + 8) % 7 || 7;
    switch (D) {
      case "c":
        return String(n);
      case "cc":
        return b(n, D.length);
      case "co":
        return e.ordinalNumber(n, { unit: "day" });
      case "ccc":
        return e.day(F, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return e.day(F, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return e.day(F, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return e.day(F, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(u, D, e) {
    const t = u.getDay(), F = t === 0 ? 7 : t;
    switch (D) {
      case "i":
        return String(F);
      case "ii":
        return b(F, D.length);
      case "io":
        return e.ordinalNumber(F, { unit: "day" });
      case "iii":
        return e.day(t, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return e.day(t, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return e.day(t, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return e.day(t, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(u, D, e) {
    const F = u.getHours() / 12 >= 1 ? "pm" : "am";
    switch (D) {
      case "a":
      case "aa":
        return e.dayPeriod(F, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return e.dayPeriod(F, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return e.dayPeriod(F, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return e.dayPeriod(F, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(u, D, e) {
    const t = u.getHours();
    let F;
    switch (t === 12 ? F = Eu.noon : t === 0 ? F = Eu.midnight : F = t / 12 >= 1 ? "pm" : "am", D) {
      case "b":
      case "bb":
        return e.dayPeriod(F, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return e.dayPeriod(F, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return e.dayPeriod(F, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return e.dayPeriod(F, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(u, D, e) {
    const t = u.getHours();
    let F;
    switch (t >= 17 ? F = Eu.evening : t >= 12 ? F = Eu.afternoon : t >= 4 ? F = Eu.morning : F = Eu.night, D) {
      case "B":
      case "BB":
      case "BBB":
        return e.dayPeriod(F, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return e.dayPeriod(F, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return e.dayPeriod(F, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(u, D, e) {
    if (D === "ho") {
      let t = u.getHours() % 12;
      return t === 0 && (t = 12), e.ordinalNumber(t, { unit: "hour" });
    }
    return Q.h(u, D);
  },
  // Hour [0-23]
  H: function(u, D, e) {
    return D === "Ho" ? e.ordinalNumber(u.getHours(), { unit: "hour" }) : Q.H(u, D);
  },
  // Hour [0-11]
  K: function(u, D, e) {
    const t = u.getHours() % 12;
    return D === "Ko" ? e.ordinalNumber(t, { unit: "hour" }) : b(t, D.length);
  },
  // Hour [1-24]
  k: function(u, D, e) {
    let t = u.getHours();
    return t === 0 && (t = 24), D === "ko" ? e.ordinalNumber(t, { unit: "hour" }) : b(t, D.length);
  },
  // Minute
  m: function(u, D, e) {
    return D === "mo" ? e.ordinalNumber(u.getMinutes(), { unit: "minute" }) : Q.m(u, D);
  },
  // Second
  s: function(u, D, e) {
    return D === "so" ? e.ordinalNumber(u.getSeconds(), { unit: "second" }) : Q.s(u, D);
  },
  // Fraction of second
  S: function(u, D) {
    return Q.S(u, D);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(u, D, e) {
    const t = u.getTimezoneOffset();
    if (t === 0)
      return "Z";
    switch (D) {
      case "X":
        return a0(t);
      case "XXXX":
      case "XX":
        return uu(t);
      case "XXXXX":
      case "XXX":
      default:
        return uu(t, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(u, D, e) {
    const t = u.getTimezoneOffset();
    switch (D) {
      case "x":
        return a0(t);
      case "xxxx":
      case "xx":
        return uu(t);
      case "xxxxx":
      case "xxx":
      default:
        return uu(t, ":");
    }
  },
  // Timezone (GMT)
  O: function(u, D, e) {
    const t = u.getTimezoneOffset();
    switch (D) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + E0(t, ":");
      case "OOOO":
      default:
        return "GMT" + uu(t, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(u, D, e) {
    const t = u.getTimezoneOffset();
    switch (D) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + E0(t, ":");
      case "zzzz":
      default:
        return "GMT" + uu(t, ":");
    }
  },
  // Seconds timestamp
  t: function(u, D, e) {
    const t = Math.trunc(u.getTime() / 1e3);
    return b(t, D.length);
  },
  // Milliseconds timestamp
  T: function(u, D, e) {
    const t = u.getTime();
    return b(t, D.length);
  }
};
function E0(u, D = "") {
  const e = u > 0 ? "-" : "+", t = Math.abs(u), F = Math.trunc(t / 60), n = t % 60;
  return n === 0 ? e + String(F) : e + String(F) + D + b(n, 2);
}
function a0(u, D) {
  return u % 60 === 0 ? (u > 0 ? "-" : "+") + b(Math.abs(u) / 60, 2) : uu(u, D);
}
function uu(u, D = "") {
  const e = u > 0 ? "-" : "+", t = Math.abs(u), F = b(Math.trunc(t / 60), 2), n = b(t % 60, 2);
  return e + F + D + n;
}
const C0 = (u, D) => {
  switch (u) {
    case "P":
      return D.date({ width: "short" });
    case "PP":
      return D.date({ width: "medium" });
    case "PPP":
      return D.date({ width: "long" });
    case "PPPP":
    default:
      return D.date({ width: "full" });
  }
}, J0 = (u, D) => {
  switch (u) {
    case "p":
      return D.time({ width: "short" });
    case "pp":
      return D.time({ width: "medium" });
    case "ppp":
      return D.time({ width: "long" });
    case "pppp":
    default:
      return D.time({ width: "full" });
  }
}, A1 = (u, D) => {
  const e = u.match(/(P+)(p+)?/) || [], t = e[1], F = e[2];
  if (!F)
    return C0(u, D);
  let n;
  switch (t) {
    case "P":
      n = D.dateTime({ width: "short" });
      break;
    case "PP":
      n = D.dateTime({ width: "medium" });
      break;
    case "PPP":
      n = D.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      n = D.dateTime({ width: "full" });
      break;
  }
  return n.replace("{{date}}", C0(t, D)).replace("{{time}}", J0(F, D));
}, i1 = {
  p: J0,
  P: A1
}, o1 = /^D+$/, s1 = /^Y+$/, B1 = ["D", "DD", "YY", "YYYY"];
function c1(u) {
  return o1.test(u);
}
function l1(u) {
  return s1.test(u);
}
function f1(u, D, e) {
  const t = h1(u, D, e);
  if (console.warn(t), B1.includes(u)) throw new RangeError(t);
}
function h1(u, D, e) {
  const t = u[0] === "Y" ? "years" : "days of the month";
  return `Use \`${u.toLowerCase()}\` instead of \`${u}\` (in \`${D}\`) for formatting ${t} to the input \`${e}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
function d1(u) {
  return u instanceof Date || typeof u == "object" && Object.prototype.toString.call(u) === "[object Date]";
}
function p1(u) {
  if (!d1(u) && typeof u != "number")
    return !1;
  const D = U(u);
  return !isNaN(Number(D));
}
const m1 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, g1 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, y1 = /^'([^]*?)'?$/, b1 = /''/g, w1 = /[a-zA-Z]/;
function x1(u, D, e) {
  var i, A, o, s, c, f, l, y;
  const t = Gu(), F = (e == null ? void 0 : e.locale) ?? t.locale ?? u1, n = (e == null ? void 0 : e.firstWeekContainsDate) ?? ((A = (i = e == null ? void 0 : e.locale) == null ? void 0 : i.options) == null ? void 0 : A.firstWeekContainsDate) ?? t.firstWeekContainsDate ?? ((s = (o = t.locale) == null ? void 0 : o.options) == null ? void 0 : s.firstWeekContainsDate) ?? 1, r = (e == null ? void 0 : e.weekStartsOn) ?? ((f = (c = e == null ? void 0 : e.locale) == null ? void 0 : c.options) == null ? void 0 : f.weekStartsOn) ?? t.weekStartsOn ?? ((y = (l = t.locale) == null ? void 0 : l.options) == null ? void 0 : y.weekStartsOn) ?? 0, E = U(u);
  if (!p1(E))
    throw new RangeError("Invalid time value");
  let C = D.match(g1).map((h) => {
    const p = h[0];
    if (p === "p" || p === "P") {
      const m = i1[p];
      return m(h, F.formatLong);
    }
    return h;
  }).join("").match(m1).map((h) => {
    if (h === "''")
      return { isToken: !1, value: "'" };
    const p = h[0];
    if (p === "'")
      return { isToken: !1, value: _1(h) };
    if (r0[p])
      return { isToken: !0, value: h };
    if (p.match(w1))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + p + "`"
      );
    return { isToken: !1, value: h };
  });
  F.localize.preprocessor && (C = F.localize.preprocessor(E, C));
  const a = {
    firstWeekContainsDate: n,
    weekStartsOn: r,
    locale: F
  };
  return C.map((h) => {
    if (!h.isToken) return h.value;
    const p = h.value;
    (!(e != null && e.useAdditionalWeekYearTokens) && l1(p) || !(e != null && e.useAdditionalDayOfYearTokens) && c1(p)) && f1(p, D, String(u));
    const m = r0[p[0]];
    return m(E, p, F.localize, a);
  }).join("");
}
function _1(u) {
  const D = u.match(y1);
  return D ? D[1].replace(b1, "'") : u;
}
function A0(u, D, e) {
  const t = S1(u, e.timeZone, e.locale);
  return "formatToParts" in t ? v1(t, D) : O1(t, D);
}
function v1(u, D) {
  const e = u.formatToParts(D);
  for (let t = e.length - 1; t >= 0; --t)
    if (e[t].type === "timeZoneName")
      return e[t].value;
}
function O1(u, D) {
  const e = u.format(D).replace(/\u200E/g, ""), t = / [\w-+ ]+$/.exec(e);
  return t ? t[0].substr(1) : "";
}
function S1(u, D, e) {
  return new Intl.DateTimeFormat(e ? [e.code, "en-US"] : void 0, {
    timeZone: D,
    timeZoneName: u
  });
}
function P1(u, D) {
  const e = M1(D);
  return "formatToParts" in e ? I1(e, u) : N1(e, u);
}
const T1 = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function I1(u, D) {
  try {
    const e = u.formatToParts(D), t = [];
    for (let F = 0; F < e.length; F++) {
      const n = T1[e[F].type];
      n !== void 0 && (t[n] = parseInt(e[F].value, 10));
    }
    return t;
  } catch (e) {
    if (e instanceof RangeError)
      return [NaN];
    throw e;
  }
}
function N1(u, D) {
  const e = u.format(D), t = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(e);
  return [
    parseInt(t[3], 10),
    parseInt(t[1], 10),
    parseInt(t[2], 10),
    parseInt(t[4], 10),
    parseInt(t[5], 10),
    parseInt(t[6], 10)
  ];
}
const uD = {};
function M1(u) {
  if (!uD[u]) {
    const D = new Intl.DateTimeFormat("en-US", {
      hourCycle: "h23",
      timeZone: "America/New_York",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), e = D === "06/25/2014, 00:00:00" || D === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
    uD[u] = e ? new Intl.DateTimeFormat("en-US", {
      hourCycle: "h23",
      timeZone: u,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }) : new Intl.DateTimeFormat("en-US", {
      hour12: !1,
      timeZone: u,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }
  return uD[u];
}
function V0(u, D, e, t, F, n, r) {
  const E = /* @__PURE__ */ new Date(0);
  return E.setUTCFullYear(u, D, e), E.setUTCHours(t, F, n, r), E;
}
const i0 = 36e5, k1 = 6e4, DD = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/
};
function Zu(u, D, e) {
  if (!u)
    return 0;
  let t = DD.timezoneZ.exec(u);
  if (t)
    return 0;
  let F, n;
  if (t = DD.timezoneHH.exec(u), t)
    return F = parseInt(t[1], 10), o0(F) ? -(F * i0) : NaN;
  if (t = DD.timezoneHHMM.exec(u), t) {
    F = parseInt(t[2], 10);
    const r = parseInt(t[3], 10);
    return o0(F, r) ? (n = Math.abs(F) * i0 + r * k1, t[1] === "+" ? -n : n) : NaN;
  }
  if (L1(u)) {
    D = new Date(D || Date.now());
    const r = e ? D : $1(D), E = iD(r, u);
    return -(e ? E : R1(D, E, u));
  }
  return NaN;
}
function $1(u) {
  return V0(u.getFullYear(), u.getMonth(), u.getDate(), u.getHours(), u.getMinutes(), u.getSeconds(), u.getMilliseconds());
}
function iD(u, D) {
  const e = P1(u, D), t = V0(e[0], e[1] - 1, e[2], e[3] % 24, e[4], e[5], 0).getTime();
  let F = u.getTime();
  const n = F % 1e3;
  return F -= n >= 0 ? n : 1e3 + n, t - F;
}
function R1(u, D, e) {
  let F = u.getTime() - D;
  const n = iD(new Date(F), e);
  if (D === n)
    return D;
  F -= n - D;
  const r = iD(new Date(F), e);
  return n === r ? n : Math.max(n, r);
}
function o0(u, D) {
  return -23 <= u && u <= 23 && (D == null || 0 <= D && D <= 59);
}
const s0 = {};
function L1(u) {
  if (s0[u])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: u }), s0[u] = !0, !0;
  } catch {
    return !1;
  }
}
const U1 = 60 * 1e3, j1 = {
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(u, D, e) {
    const t = eD(e.timeZone, u);
    if (t === 0)
      return "Z";
    switch (D) {
      case "X":
        return B0(t);
      case "XXXX":
      case "XX":
        return au(t);
      case "XXXXX":
      case "XXX":
      default:
        return au(t, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(u, D, e) {
    const t = eD(e.timeZone, u);
    switch (D) {
      case "x":
        return B0(t);
      case "xxxx":
      case "xx":
        return au(t);
      case "xxxxx":
      case "xxx":
      default:
        return au(t, ":");
    }
  },
  // Timezone (GMT)
  O: function(u, D, e) {
    const t = eD(e.timeZone, u);
    switch (D) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Y1(t, ":");
      case "OOOO":
      default:
        return "GMT" + au(t, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(u, D, e) {
    switch (D) {
      case "z":
      case "zz":
      case "zzz":
        return A0("short", u, e);
      case "zzzz":
      default:
        return A0("long", u, e);
    }
  }
};
function eD(u, D) {
  const e = u ? Zu(u, D, !0) / U1 : (D == null ? void 0 : D.getTimezoneOffset()) ?? 0;
  if (Number.isNaN(e))
    throw new RangeError("Invalid time zone specified: " + u);
  return e;
}
function Ru(u, D) {
  const e = u < 0 ? "-" : "";
  let t = Math.abs(u).toString();
  for (; t.length < D; )
    t = "0" + t;
  return e + t;
}
function au(u, D = "") {
  const e = u > 0 ? "-" : "+", t = Math.abs(u), F = Ru(Math.floor(t / 60), 2), n = Ru(Math.floor(t % 60), 2);
  return e + F + D + n;
}
function B0(u, D) {
  return u % 60 === 0 ? (u > 0 ? "-" : "+") + Ru(Math.abs(u) / 60, 2) : au(u, D);
}
function Y1(u, D = "") {
  const e = u > 0 ? "-" : "+", t = Math.abs(u), F = Math.floor(t / 60), n = t % 60;
  return n === 0 ? e + String(F) : e + String(F) + D + Ru(n, 2);
}
function c0(u) {
  const D = new Date(Date.UTC(u.getFullYear(), u.getMonth(), u.getDate(), u.getHours(), u.getMinutes(), u.getSeconds(), u.getMilliseconds()));
  return D.setUTCFullYear(u.getFullYear()), +u - +D;
}
const H1 = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, tD = 36e5, l0 = 6e4, W1 = 2, N = {
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
  timeZone: H1
};
function ue(u, D = {}) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (u === null)
    return /* @__PURE__ */ new Date(NaN);
  const e = D.additionalDigits == null ? W1 : Number(D.additionalDigits);
  if (e !== 2 && e !== 1 && e !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (u instanceof Date || typeof u == "object" && Object.prototype.toString.call(u) === "[object Date]")
    return new Date(u.getTime());
  if (typeof u == "number" || Object.prototype.toString.call(u) === "[object Number]")
    return new Date(u);
  if (Object.prototype.toString.call(u) !== "[object String]")
    return /* @__PURE__ */ new Date(NaN);
  const t = z1(u), { year: F, restDateString: n } = G1(t.date, e), r = Z1(n, F);
  if (r === null || isNaN(r.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  if (r) {
    const E = r.getTime();
    let C = 0, a;
    if (t.time && (C = K1(t.time), C === null || isNaN(C)))
      return /* @__PURE__ */ new Date(NaN);
    if (t.timeZone || D.timeZone) {
      if (a = Zu(t.timeZone || D.timeZone, new Date(E + C)), isNaN(a))
        return /* @__PURE__ */ new Date(NaN);
    } else
      a = c0(new Date(E + C)), a = c0(new Date(E + C + a));
    return new Date(E + C + a);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function z1(u) {
  const D = {};
  let e = N.dateTimePattern.exec(u), t;
  if (e ? (D.date = e[1], t = e[3]) : (e = N.datePattern.exec(u), e ? (D.date = e[1], t = e[2]) : (D.date = null, t = u)), t) {
    const F = N.timeZone.exec(t);
    F ? (D.time = t.replace(F[1], ""), D.timeZone = F[1].trim()) : D.time = t;
  }
  return D;
}
function G1(u, D) {
  if (u) {
    const e = N.YYY[D], t = N.YYYYY[D];
    let F = N.YYYY.exec(u) || t.exec(u);
    if (F) {
      const n = F[1];
      return {
        year: parseInt(n, 10),
        restDateString: u.slice(n.length)
      };
    }
    if (F = N.YY.exec(u) || e.exec(u), F) {
      const n = F[1];
      return {
        year: parseInt(n, 10) * 100,
        restDateString: u.slice(n.length)
      };
    }
  }
  return {
    year: null
  };
}
function Z1(u, D) {
  if (D === null)
    return null;
  let e, t, F;
  if (!u || !u.length)
    return e = /* @__PURE__ */ new Date(0), e.setUTCFullYear(D), e;
  let n = N.MM.exec(u);
  if (n)
    return e = /* @__PURE__ */ new Date(0), t = parseInt(n[1], 10) - 1, h0(D, t) ? (e.setUTCFullYear(D, t), e) : /* @__PURE__ */ new Date(NaN);
  if (n = N.DDD.exec(u), n) {
    e = /* @__PURE__ */ new Date(0);
    const r = parseInt(n[1], 10);
    return Q1(D, r) ? (e.setUTCFullYear(D, 0, r), e) : /* @__PURE__ */ new Date(NaN);
  }
  if (n = N.MMDD.exec(u), n) {
    e = /* @__PURE__ */ new Date(0), t = parseInt(n[1], 10) - 1;
    const r = parseInt(n[2], 10);
    return h0(D, t, r) ? (e.setUTCFullYear(D, t, r), e) : /* @__PURE__ */ new Date(NaN);
  }
  if (n = N.Www.exec(u), n)
    return F = parseInt(n[1], 10) - 1, d0(F) ? f0(D, F) : /* @__PURE__ */ new Date(NaN);
  if (n = N.WwwD.exec(u), n) {
    F = parseInt(n[1], 10) - 1;
    const r = parseInt(n[2], 10) - 1;
    return d0(F, r) ? f0(D, F, r) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function K1(u) {
  let D, e, t = N.HH.exec(u);
  if (t)
    return D = parseFloat(t[1].replace(",", ".")), FD(D) ? D % 24 * tD : NaN;
  if (t = N.HHMM.exec(u), t)
    return D = parseInt(t[1], 10), e = parseFloat(t[2].replace(",", ".")), FD(D, e) ? D % 24 * tD + e * l0 : NaN;
  if (t = N.HHMMSS.exec(u), t) {
    D = parseInt(t[1], 10), e = parseInt(t[2], 10);
    const F = parseFloat(t[3].replace(",", "."));
    return FD(D, e, F) ? D % 24 * tD + e * l0 + F * 1e3 : NaN;
  }
  return null;
}
function f0(u, D, e) {
  D = D || 0, e = e || 0;
  const t = /* @__PURE__ */ new Date(0);
  t.setUTCFullYear(u, 0, 4);
  const F = t.getUTCDay() || 7, n = D * 7 + e + 1 - F;
  return t.setUTCDate(t.getUTCDate() + n), t;
}
const q1 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], X1 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function De(u) {
  return u % 400 === 0 || u % 4 === 0 && u % 100 !== 0;
}
function h0(u, D, e) {
  if (D < 0 || D > 11)
    return !1;
  if (e != null) {
    if (e < 1)
      return !1;
    const t = De(u);
    if (t && e > X1[D] || !t && e > q1[D])
      return !1;
  }
  return !0;
}
function Q1(u, D) {
  if (D < 1)
    return !1;
  const e = De(u);
  return !(e && D > 366 || !e && D > 365);
}
function d0(u, D) {
  return !(u < 0 || u > 52 || D != null && (D < 0 || D > 6));
}
function FD(u, D, e) {
  return !(u < 0 || u >= 25 || D != null && (D < 0 || D >= 60) || e != null && (e < 0 || e >= 60));
}
const J1 = /([xXOz]+)|''|'(''|[^'])+('|$)/g;
function V1(u, D, e = {}) {
  D = String(D);
  const t = D.match(J1);
  if (t) {
    const F = ue(e.originalDate || u, e);
    D = t.reduce(function(n, r) {
      if (r[0] === "'")
        return n;
      const E = n.indexOf(r), C = n[E - 1] === "'", a = n.replace(r, "'" + j1[r[0]](F, r, e) + "'");
      return C ? a.substring(0, E - 1) + a.substring(E + 1) : a;
    }, D);
  }
  return x1(u, D, e);
}
function uE(u, D, e) {
  u = ue(u, e);
  const t = Zu(D, u, !0), F = new Date(u.getTime() - t), n = /* @__PURE__ */ new Date(0);
  return n.setFullYear(F.getUTCFullYear(), F.getUTCMonth(), F.getUTCDate()), n.setHours(F.getUTCHours(), F.getUTCMinutes(), F.getUTCSeconds(), F.getUTCMilliseconds()), n;
}
function DE(u, D, e, t) {
  return t = {
    ...t,
    timeZone: D,
    originalDate: u
  }, V1(uE(u, D, { timeZone: t.timeZone }), e, t);
}
function eE(u, D) {
  return -Zu(u, D);
}
/*!
 * XRegExp 5.1.1
 * <xregexp.com>
 * Steven Levithan (c) 2007-present MIT License
 */
const _ = "xregexp", tu = {
  astral: !1,
  namespacing: !0
}, H = {};
let yu = {}, Cu = {};
const oD = [], ou = "default", p0 = "class", tE = {
  // Any native multicharacter token in default scope, or any single character
  default: /\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|\(\?(?:[:=!]|<[=!])|[?*+]\?|{\d+(?:,\d*)?}\??|[\s\S]/,
  // Any native multicharacter token in character class scope, or any single character
  class: /\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|[\s\S]/
}, FE = /\$(?:\{([^\}]+)\}|<([^>]+)>|(\d\d?|[\s\S]?))/g, nE = /()??/.exec("")[1] === void 0, rE = /x/.flags !== void 0;
function Iu(u) {
  let D = !0;
  try {
    if (new RegExp("", u), u === "y") {
      const e = "gy";
      ".a".replace(new RegExp("a", e), ".") === ".." && (D = !1);
    }
  } catch {
    D = !1;
  }
  return D;
}
const EE = Iu("d"), yD = Iu("s"), ee = Iu("u"), bD = Iu("y"), te = {
  d: EE,
  g: !0,
  i: !0,
  m: !0,
  s: yD,
  u: ee,
  y: bD
}, aE = yD ? /[^dgimsuy]+/g : /[^dgimuy]+/g;
function Fe(u, D, e, t, F) {
  if (u[_] = {
    captureNames: D
  }, F)
    return u;
  if (u.__proto__)
    u.__proto__ = B.prototype;
  else
    for (const n in B.prototype)
      u[n] = B.prototype[n];
  return u[_].source = e, u[_].flags = t && t.split("").sort().join(""), u;
}
function Su(u) {
  return u.replace(/([\s\S])(?=[\s\S]*\1)/g, "");
}
function ru(u, D) {
  if (!B.isRegExp(u))
    throw new TypeError("Type RegExp expected");
  const e = u[_] || {};
  let t = CE(u), F = "", n = "", r = null, E = null;
  return D = D || {}, D.removeG && (n += "g"), D.removeY && (n += "y"), n && (t = t.replace(new RegExp(`[${n}]+`, "g"), "")), D.addG && (F += "g"), D.addY && (F += "y"), F && (t = Su(t + F)), D.isInternalOnly || (e.source !== void 0 && (r = e.source), e.flags != null && (E = F ? Su(e.flags + F) : e.flags)), u = Fe(
    new RegExp(D.source || u.source, t),
    AE(u) ? e.captureNames.slice(0) : null,
    r,
    E,
    D.isInternalOnly
  ), u;
}
function ne(u) {
  return parseInt(u, 16);
}
function re(u, D, e) {
  const t = u.index + u[0].length, F = u.input[u.index - 1], n = u.input[t];
  return (
    // No need to separate tokens if at the beginning or end of a group, before or after a
    // group, or before or after a `|`
    /^[()|]$/.test(F) || /^[()|]$/.test(n) || // No need to separate tokens if at the beginning or end of the pattern
    u.index === 0 || t === u.input.length || // No need to separate tokens if at the beginning of a noncapturing group or lookaround.
    // Looks only at the last 4 chars (at most) for perf when constructing long regexes.
    /\(\?(?:[:=!]|<[=!])$/.test(u.input.substring(u.index - 4, u.index)) || // Avoid separating tokens when the following token is a quantifier
    iE(u.input, t, e) ? "" : "(?:)"
  );
}
function CE(u) {
  return rE ? u.flags : (
    // Explicitly using `RegExp.prototype.toString` (rather than e.g. `String` or concatenation
    // with an empty string) allows this to continue working predictably when
    // `XRegExp.proptotype.toString` is overridden
    /\/([a-z]*)$/i.exec(RegExp.prototype.toString.call(u))[1]
  );
}
function AE(u) {
  return !!(u[_] && u[_].captureNames);
}
function wD(u) {
  return parseInt(u, 10).toString(16);
}
function iE(u, D, e) {
  const t = "\\(\\?#[^)]*\\)", F = "#[^#\\n]*", n = "[?*+]|{\\d+(?:,\\d*)?}";
  return (e.includes("x") ? (
    // Ignore any leading whitespace, line comments, and inline comments
    new RegExp(`^(?:\\s|${F}|${t})*(?:${n})`)
  ) : (
    // Ignore any leading inline comments
    new RegExp(`^(?:${t})*(?:${n})`)
  )).test(u.slice(D));
}
function Lu(u, D) {
  return Object.prototype.toString.call(u) === `[object ${D}]`;
}
function lu(u) {
  if (u == null)
    throw new TypeError("Cannot convert null or undefined to object");
  return u;
}
function xD(u) {
  for (; u.length < 4; )
    u = `0${u}`;
  return u;
}
function oE(u, D) {
  if (Su(D) !== D)
    throw new SyntaxError(`Invalid duplicate regex flag ${D}`);
  u = u.replace(/^\(\?([\w$]+)\)/, (e, t) => {
    if (/[dgy]/.test(t))
      throw new SyntaxError(`Cannot use flags dgy in mode modifier ${e}`);
    return D = Su(D + t), "";
  });
  for (const e of D)
    if (!te[e])
      throw new SyntaxError(`Unknown regex flag ${e}`);
  return {
    pattern: u,
    flags: D
  };
}
function Ee(u) {
  const D = {};
  return Lu(u, "String") ? (B.forEach(u, /[^\s,]+/, (e) => {
    D[e] = !0;
  }), D) : u;
}
function m0(u) {
  if (!/^[\w$]$/.test(u))
    throw new Error("Flag must be a single character A-Za-z0-9_$");
  te[u] = !0;
}
function sE(u, D, e, t, F) {
  let n = oD.length;
  const r = u[e];
  let E = null, C, a;
  for (; n--; )
    if (a = oD[n], !(a.leadChar && a.leadChar !== r || a.scope !== t && a.scope !== "all" || a.flag && !D.includes(a.flag)) && (C = B.exec(u, a.regex, e, "sticky"), C)) {
      E = {
        matchLength: C[0].length,
        output: a.handler.call(F, C, t, D),
        reparse: a.reparse
      };
      break;
    }
  return E;
}
function ae(u) {
  tu.astral = u;
}
function Ce(u) {
  tu.namespacing = u;
}
function B(u, D) {
  if (B.isRegExp(u)) {
    if (D !== void 0)
      throw new TypeError("Cannot supply flags when copying a RegExp");
    return ru(u);
  }
  if (u = u === void 0 ? "" : String(u), D = D === void 0 ? "" : String(D), B.isInstalled("astral") && !D.includes("A") && (D += "A"), Cu[u] || (Cu[u] = {}), !Cu[u][D]) {
    const t = {
      hasNamedCapture: !1,
      captureNames: []
    };
    let F = ou, n = "", r = 0, E;
    const C = oE(u, D);
    let a = C.pattern;
    const i = C.flags;
    for (; r < a.length; ) {
      do
        E = sE(a, i, r, F, t), E && E.reparse && (a = a.slice(0, r) + E.output + a.slice(r + E.matchLength));
      while (E && E.reparse);
      if (E)
        n += E.output, r += E.matchLength || 1;
      else {
        const [A] = B.exec(a, tE[F], r, "sticky");
        n += A, r += A.length, A === "[" && F === ou ? F = p0 : A === "]" && F === p0 && (F = ou);
      }
    }
    Cu[u][D] = {
      // Use basic cleanup to collapse repeated empty groups like `(?:)(?:)` to `(?:)`. Empty
      // groups are sometimes inserted during regex transpilation in order to keep tokens
      // separated. However, more than one empty group in a row is never needed.
      pattern: n.replace(/(?:\(\?:\))+/g, "(?:)"),
      // Strip all but native flags
      flags: i.replace(aE, ""),
      // `context.captureNames` has an item for each capturing group, even if unnamed
      captures: t.hasNamedCapture ? t.captureNames : null
    };
  }
  const e = Cu[u][D];
  return Fe(
    new RegExp(e.pattern, e.flags),
    e.captures,
    u,
    D
  );
}
B.prototype = new RegExp();
B.version = "5.1.1";
B._clipDuplicates = Su;
B._hasNativeFlag = Iu;
B._dec = ne;
B._hex = wD;
B._pad4 = xD;
B.addToken = (u, D, e) => {
  e = e || {};
  let { optionalFlags: t } = e;
  if (e.flag && m0(e.flag), t) {
    t = t.split("");
    for (const F of t)
      m0(F);
  }
  oD.push({
    regex: ru(u, {
      addG: !0,
      addY: bD,
      isInternalOnly: !0
    }),
    handler: D,
    scope: e.scope || ou,
    flag: e.flag,
    reparse: e.reparse,
    leadChar: e.leadChar
  }), B.cache.flush("patterns");
};
B.cache = (u, D) => (yu[u] || (yu[u] = {}), yu[u][D] || (yu[u][D] = B(u, D)));
B.cache.flush = (u) => {
  u === "patterns" ? Cu = {} : yu = {};
};
B.escape = (u) => String(lu(u)).replace(/[\\\[\]{}()*+?.^$|]/g, "\\$&").replace(/[\s#\-,]/g, (D) => `\\u${xD(wD(D.charCodeAt(0)))}`);
B.exec = (u, D, e, t) => {
  let F = "g", n = !1, r = !1, E;
  n = bD && !!(t || D.sticky && t !== !1), n ? F += "y" : t && (r = !0, F += "FakeY"), D[_] = D[_] || {};
  const C = D[_][F] || (D[_][F] = ru(D, {
    addG: !0,
    addY: n,
    source: r ? `${D.source}|()` : void 0,
    removeY: t === !1,
    isInternalOnly: !0
  }));
  return e = e || 0, C.lastIndex = e, E = H.exec.call(C, u), r && E && E.pop() === "" && (E = null), D.global && (D.lastIndex = E ? C.lastIndex : 0), E;
};
B.forEach = (u, D, e) => {
  let t = 0, F = -1, n;
  for (; n = B.exec(u, D, t); )
    e(n, ++F, u, D), t = n.index + (n[0].length || 1);
};
B.globalize = (u) => ru(u, { addG: !0 });
B.install = (u) => {
  u = Ee(u), !tu.astral && u.astral && ae(!0), !tu.namespacing && u.namespacing && Ce(!0);
};
B.isInstalled = (u) => !!tu[u];
B.isRegExp = (u) => Object.prototype.toString.call(u) === "[object RegExp]";
B.match = (u, D, e) => {
  const t = D.global && e !== "one" || e === "all", F = (t ? "g" : "") + (D.sticky ? "y" : "") || "noGY";
  D[_] = D[_] || {};
  const n = D[_][F] || (D[_][F] = ru(D, {
    addG: !!t,
    removeG: e === "one",
    isInternalOnly: !0
  })), r = String(lu(u)).match(n);
  return D.global && (D.lastIndex = e === "one" && r ? (
    // Can't use `r2.lastIndex` since `r2` is nonglobal in this case
    r.index + r[0].length
  ) : 0), t ? r || [] : r && r[0];
};
B.matchChain = (u, D) => function e(t, F) {
  const n = D[F].regex ? D[F] : { regex: D[F] }, r = [];
  function E(C) {
    if (n.backref) {
      const a = `Backreference to undefined group: ${n.backref}`, i = isNaN(n.backref);
      if (i && B.isInstalled("namespacing")) {
        if (!(C.groups && n.backref in C.groups))
          throw new ReferenceError(a);
      } else if (!C.hasOwnProperty(n.backref))
        throw new ReferenceError(a);
      const A = i && B.isInstalled("namespacing") ? C.groups[n.backref] : C[n.backref];
      r.push(A || "");
    } else
      r.push(C[0]);
  }
  for (const C of t)
    B.forEach(C, n.regex, E);
  return F === D.length - 1 || !r.length ? r : e(r, F + 1);
}([u], 0);
B.replace = (u, D, e, t) => {
  const F = B.isRegExp(D), n = D.global && t !== "one" || t === "all", r = (n ? "g" : "") + (D.sticky ? "y" : "") || "noGY";
  let E = D;
  F ? (D[_] = D[_] || {}, E = D[_][r] || (D[_][r] = ru(D, {
    addG: !!n,
    removeG: t === "one",
    isInternalOnly: !0
  }))) : n && (E = new RegExp(B.escape(String(D)), "g"));
  const C = H.replace.call(lu(u), E, e);
  return F && D.global && (D.lastIndex = 0), C;
};
B.replaceEach = (u, D) => {
  for (const e of D)
    u = B.replace(u, e[0], e[1], e[2]);
  return u;
};
B.split = (u, D, e) => H.split.call(lu(u), D, e);
B.test = (u, D, e, t) => !!B.exec(u, D, e, t);
B.uninstall = (u) => {
  u = Ee(u), tu.astral && u.astral && ae(!1), tu.namespacing && u.namespacing && Ce(!1);
};
B.union = (u, D, e) => {
  e = e || {};
  const t = e.conjunction || "or";
  let F = 0, n, r;
  function E(A, o, s) {
    const c = r[F - n];
    if (o) {
      if (++F, c)
        return `(?<${c}>`;
    } else if (s)
      return `\\${+s + n}`;
    return A;
  }
  if (!(Lu(u, "Array") && u.length))
    throw new TypeError("Must provide a nonempty array of patterns to merge");
  const C = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g, a = [];
  for (const A of u)
    B.isRegExp(A) ? (n = F, r = A[_] && A[_].captureNames || [], a.push(B(A.source).source.replace(C, E))) : a.push(B.escape(A));
  const i = t === "none" ? "" : "|";
  return B(a.join(i), D);
};
H.exec = function(u) {
  const D = this.lastIndex, e = RegExp.prototype.exec.apply(this, arguments);
  if (e) {
    if (!nE && e.length > 1 && e.includes("")) {
      const t = ru(this, {
        removeG: !0,
        isInternalOnly: !0
      });
      String(u).slice(e.index).replace(t, (...F) => {
        const n = F.length;
        for (let r = 1; r < n - 2; ++r)
          F[r] === void 0 && (e[r] = void 0);
      });
    }
    if (this[_] && this[_].captureNames) {
      let t = e;
      B.isInstalled("namespacing") && (e.groups = /* @__PURE__ */ Object.create(null), t = e.groups);
      for (let F = 1; F < e.length; ++F) {
        const n = this[_].captureNames[F - 1];
        n && (t[n] = e[F]);
      }
    } else !e.groups && B.isInstalled("namespacing") && (e.groups = void 0);
    this.global && !e[0].length && this.lastIndex > e.index && (this.lastIndex = e.index);
  }
  return this.global || (this.lastIndex = D), e;
};
H.test = function(u) {
  return !!H.exec.call(this, u);
};
H.match = function(u) {
  if (!B.isRegExp(u))
    u = new RegExp(u);
  else if (u.global) {
    const D = String.prototype.match.apply(this, arguments);
    return u.lastIndex = 0, D;
  }
  return H.exec.call(u, lu(this));
};
H.replace = function(u, D) {
  const e = B.isRegExp(u);
  let t, F, n;
  return e ? (u[_] && ({ captureNames: F } = u[_]), t = u.lastIndex) : u += "", Lu(D, "Function") ? n = String(this).replace(u, (...r) => {
    if (F) {
      let E;
      B.isInstalled("namespacing") ? (E = /* @__PURE__ */ Object.create(null), r.push(E)) : (r[0] = new String(r[0]), [E] = r);
      for (let C = 0; C < F.length; ++C)
        F[C] && (E[F[C]] = r[C + 1]);
    }
    return D(...r);
  }) : n = String(lu(this)).replace(u, (...r) => {
    return String(D).replace(FE, E);
    function E(C, a, i, A) {
      a = a || i;
      const o = Lu(r[r.length - 1], "Object") ? 4 : 3, s = r.length - o;
      if (a) {
        if (/^\d+$/.test(a)) {
          const f = +a;
          if (f <= s)
            return r[f] || "";
        }
        const c = F ? F.indexOf(a) : -1;
        if (c < 0)
          throw new SyntaxError(`Backreference to undefined group ${C}`);
        return r[c + 1] || "";
      }
      if (A === "" || A === " ")
        throw new SyntaxError(`Invalid token ${C}`);
      if (A === "&" || +A == 0)
        return r[0];
      if (A === "$")
        return "$";
      if (A === "`")
        return r[r.length - 1].slice(0, r[r.length - 2]);
      if (A === "'")
        return r[r.length - 1].slice(r[r.length - 2] + r[0].length);
      if (A = +A, !isNaN(A)) {
        if (A > s)
          throw new SyntaxError(`Backreference to undefined group ${C}`);
        return r[A] || "";
      }
      throw new SyntaxError(`Invalid token ${C}`);
    }
  }), e && (u.global ? u.lastIndex = 0 : u.lastIndex = t), n;
};
H.split = function(u, D) {
  if (!B.isRegExp(u))
    return String.prototype.split.apply(this, arguments);
  const e = String(this), t = [], F = u.lastIndex;
  let n = 0, r;
  return D = (D === void 0 ? -1 : D) >>> 0, B.forEach(e, u, (E) => {
    E.index + E[0].length > n && (t.push(e.slice(n, E.index)), E.length > 1 && E.index < e.length && Array.prototype.push.apply(t, E.slice(1)), r = E[0].length, n = E.index + r);
  }), n === e.length ? (!u.test("") || r) && t.push("") : t.push(e.slice(n)), u.lastIndex = F, t.length > D ? t.slice(0, D) : t;
};
B.addToken(
  /\\([ABCE-RTUVXYZaeg-mopqyz]|c(?![A-Za-z])|u(?![\dA-Fa-f]{4}|{[\dA-Fa-f]+})|x(?![\dA-Fa-f]{2}))/,
  (u, D) => {
    if (u[1] === "B" && D === ou)
      return u[0];
    throw new SyntaxError(`Invalid escape ${u[0]}`);
  },
  {
    scope: "all",
    leadChar: "\\"
  }
);
B.addToken(
  /\\u{([\dA-Fa-f]+)}/,
  (u, D, e) => {
    const t = ne(u[1]);
    if (t > 1114111)
      throw new SyntaxError(`Invalid Unicode code point ${u[0]}`);
    if (t <= 65535)
      return `\\u${xD(wD(t))}`;
    if (ee && e.includes("u"))
      return u[0];
    throw new SyntaxError("Cannot use Unicode code point above \\u{FFFF} without flag u");
  },
  {
    scope: "all",
    leadChar: "\\"
  }
);
B.addToken(
  /\(\?#[^)]*\)/,
  re,
  { leadChar: "(" }
);
B.addToken(
  /\s+|#[^\n]*\n?/,
  re,
  { flag: "x" }
);
yD || B.addToken(
  /\./,
  () => "[\\s\\S]",
  {
    flag: "s",
    leadChar: "."
  }
);
B.addToken(
  /\\k<([^>]+)>/,
  function(u) {
    const D = isNaN(u[1]) ? this.captureNames.indexOf(u[1]) + 1 : +u[1], e = u.index + u[0].length;
    if (!D || D > this.captureNames.length)
      throw new SyntaxError(`Backreference to undefined group ${u[0]}`);
    return `\\${D}${e === u.input.length || isNaN(u.input[e]) ? "" : "(?:)"}`;
  },
  { leadChar: "\\" }
);
B.addToken(
  /\\(\d+)/,
  function(u, D) {
    if (!(D === ou && /^[1-9]/.test(u[1]) && +u[1] <= this.captureNames.length) && u[1] !== "0")
      throw new SyntaxError(`Cannot use octal escape or backreference to undefined group ${u[0]}`);
    return u[0];
  },
  {
    scope: "all",
    leadChar: "\\"
  }
);
B.addToken(
  /\(\?P?<([\p{ID_Start}$_][\p{ID_Continue}$_\u200C\u200D]*)>/u,
  function(u) {
    if (!B.isInstalled("namespacing") && (u[1] === "length" || u[1] === "__proto__"))
      throw new SyntaxError(`Cannot use reserved word as capture name ${u[0]}`);
    if (this.captureNames.includes(u[1]))
      throw new SyntaxError(`Cannot use same name for multiple groups ${u[0]}`);
    return this.captureNames.push(u[1]), this.hasNamedCapture = !0, "(";
  },
  { leadChar: "(" }
);
B.addToken(
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
const BE = (u) => {
  const D = "xregexp", e = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g, t = u.union([/\({{([\w$]+)}}\)|{{([\w$]+)}}/, e], "g", {
    conjunction: "or"
  });
  function F(a) {
    const i = /^(?:\(\?:\))*\^/, A = /\$(?:\(\?:\))*$/;
    return i.test(a) && A.test(a) && // Ensure that the trailing `$` isn't escaped
    A.test(a.replace(/\\[\s\S]/g, "")) ? a.replace(i, "").replace(A, "") : a;
  }
  function n(a, i) {
    const A = i ? "x" : "";
    return u.isRegExp(a) ? a[D] && a[D].captureNames ? (
      // Don't recompile, to preserve capture names
      a
    ) : (
      // Recompile as XRegExp
      u(a.source, A)
    ) : (
      // Compile string as XRegExp
      u(a, A)
    );
  }
  function r(a) {
    return a instanceof RegExp ? a : u.escape(a);
  }
  function E(a, i, A) {
    return a[`subpattern${A}`] = i, a;
  }
  function C(a, i, A) {
    const o = i < A.length - 1;
    return a + (o ? `{{subpattern${i}}}` : "");
  }
  u.tag = (a) => (i, ...A) => {
    const o = A.map(r).reduce(E, {}), s = i.raw.map(C).join("");
    return u.build(s, o, a);
  }, u.build = (a, i, A) => {
    A = A || "";
    const o = A.includes("x"), s = /^\(\?([\w$]+)\)/.exec(a);
    s && (A = u._clipDuplicates(A + s[1]));
    const c = {};
    for (const S in i)
      if (i.hasOwnProperty(S)) {
        const O = n(i[S], o);
        c[S] = {
          // Deanchoring allows embedding independently useful anchored regexes. If you
          // really need to keep your anchors, double them (i.e., `^^...$$`).
          pattern: F(O.source),
          names: O[D].captureNames || []
        };
      }
    const f = n(a, o);
    let l = 0, y, h = 0;
    const p = [0], m = f[D].captureNames || [], v = f.source.replace(t, (S, O, j, W, L) => {
      const M = O || j;
      let d, T, X;
      if (M) {
        if (!c.hasOwnProperty(M))
          throw new ReferenceError(`Undefined property ${S}`);
        O ? (d = m[h], p[++h] = ++l, T = `(?<${d || M}>`) : T = "(?:", y = l;
        const Ku = c[M].pattern.replace(e, (Be, ce, qu) => {
          if (ce) {
            if (d = c[M].names[l - y], ++l, d)
              return `(?<${d}>`;
          } else if (qu)
            return X = +qu - 1, c[M].names[X] ? (
              // Need to preserve the backreference name in case using flag `n`
              `\\k<${c[M].names[X]}>`
            ) : `\\${+qu + y}`;
          return Be;
        });
        return `${T}${Ku})`;
      }
      if (W) {
        if (d = m[h], p[++h] = ++l, d)
          return `(?<${d}>`;
      } else if (L)
        return X = +L - 1, m[X] ? (
          // Need to preserve the backreference name in case using flag `n`
          `\\k<${m[X]}>`
        ) : `\\${p[+L]}`;
      return S;
    });
    return u(v, A);
  };
};
/*!
 * XRegExp.matchRecursive 5.1.1
 * <xregexp.com>
 * Steven Levithan (c) 2009-present MIT License
 */
const cE = (u) => {
  function D(e, t, F, n) {
    return {
      name: e,
      value: t,
      start: F,
      end: n
    };
  }
  u.matchRecursive = (e, t, F, n, r) => {
    n = n || "", r = r || {};
    const E = n.includes("g"), C = n.includes("y"), a = n.replace(/y/g, "");
    t = u(t, a), F = u(F, a);
    let i, { escapeChar: A } = r;
    if (A) {
      if (A.length > 1)
        throw new Error("Cannot use more than one escape character");
      A = u.escape(A), i = new RegExp(
        `(?:${A}[\\S\\s]|(?:(?!${// Using `XRegExp.union` safely rewrites backreferences in `left` and `right`.
        // Intentionally not passing `basicFlags` to `XRegExp.union` since any syntax
        // transformation resulting from those flags was already applied to `left` and
        // `right` when they were passed through the XRegExp constructor above.
        u.union([t, F], "", { conjunction: "or" }).source})[^${A}])+)+`,
        // Flags `dgy` not needed here
        n.replace(u._hasNativeFlag("s") ? /[^imsu]/g : /[^imu]/g, "")
      );
    }
    let o = 0, s = 0, c = 0, f = 0, l, y, h, p;
    const m = r.valueNames, v = [];
    for (; ; ) {
      if (A && (c += (u.exec(e, i, c, "sticky") || [""])[0].length), h = u.exec(e, t, c), p = u.exec(e, F, c), h && p && (h.index <= p.index ? p = null : h = null), h || p)
        s = (h || p).index, c = s + (h || p)[0].length;
      else if (!o)
        break;
      if (C && !o && s > f)
        break;
      if (h)
        o || (l = s, y = c), o += 1;
      else if (p && o) {
        if (o -= 1, !o && (m ? (m[0] && l > f && v.push(D(m[0], e.slice(f, l), f, l)), m[1] && v.push(D(m[1], e.slice(l, y), l, y)), m[2] && v.push(D(m[2], e.slice(y, s), y, s)), m[3] && v.push(D(m[3], e.slice(s, c), s, c))) : v.push(e.slice(y, s)), f = c, !E))
          break;
      } else {
        const S = r.unbalanced || "error";
        if (S === "skip" || S === "skip-lazy")
          if (p)
            p = null;
          else {
            if (S === "skip") {
              const O = u.exec(e, t, l, "sticky")[0].length;
              c = l + (O || 1);
            } else
              c = l + 1;
            o = 0;
          }
        else if (S === "error") {
          const O = p ? "right" : "left", j = p ? s : l;
          throw new Error(`Unbalanced ${O} delimiter found in string at position ${j}`);
        } else
          throw new Error(`Unsupported value for unbalanced: ${S}`);
      }
      s === c && (c += 1);
    }
    return E && v.length > 0 && !C && m && m[0] && e.length > f && v.push(D(m[0], e.slice(f), f, e.length)), v;
  };
};
/*!
 * XRegExp Unicode Base 5.1.1
 * <xregexp.com>
 * Steven Levithan (c) 2008-present MIT License
 */
const lE = (u) => {
  const D = {}, e = {}, t = u._dec, F = u._hex, n = u._pad4;
  function r(o) {
    return o.replace(/[- _]+/g, "").toLowerCase();
  }
  function E(o) {
    const s = /^\\[xu](.+)/.exec(o);
    return s ? t(s[1]) : o.charCodeAt(o[0] === "\\" ? 1 : 0);
  }
  function C(o) {
    let s = "", c = -1;
    return u.forEach(
      o,
      /(\\x..|\\u....|\\?[\s\S])(?:-(\\x..|\\u....|\\?[\s\S]))?/,
      (f) => {
        const l = E(f[1]);
        l > c + 1 && (s += `\\u${n(F(c + 1))}`, l > c + 2 && (s += `-\\u${n(F(l - 1))}`)), c = E(f[2] || f[1]);
      }
    ), c < 65535 && (s += `\\u${n(F(c + 1))}`, c < 65534 && (s += "-\\uFFFF")), s;
  }
  function a(o) {
    const s = "b!";
    return D[o][s] || (D[o][s] = C(D[o].bmp));
  }
  function i(o, s) {
    const c = D[o];
    let f = "";
    return c.bmp && !c.isBmpLast && (f = `[${c.bmp}]${c.astral ? "|" : ""}`), c.astral && (f += c.astral), c.isBmpLast && c.bmp && (f += `${c.astral ? "|" : ""}[${c.bmp}]`), s ? `(?:(?!${f})(?:[\uD800-\uDBFF][\uDC00-\uDFFF]|[\0-￿]))` : `(?:${f})`;
  }
  function A(o, s) {
    const c = s ? "a!" : "a=";
    return D[o][c] || (D[o][c] = i(o, s));
  }
  u.addToken(
    // Use `*` instead of `+` to avoid capturing `^` as the token name in `\p{^}`
    /\\([pP])(?:{(\^?)(?:(\w+)=)?([^}]*)}|([A-Za-z]))/,
    (o, s, c) => {
      const f = "Invalid double negation ", l = "Unknown Unicode token ", y = "Unicode token missing data ", h = "Astral mode required for Unicode token ", p = "Astral mode does not support Unicode tokens within character classes", [
        m,
        v,
        S,
        O,
        j,
        W
      ] = o;
      let L = v === "P" || !!S;
      const M = c.includes("A");
      let d = r(W || j), T = D[d];
      if (v === "P" && S)
        throw new SyntaxError(f + m);
      if (!D.hasOwnProperty(d))
        throw new SyntaxError(l + m);
      if (O && !(e[O] && e[O][d]))
        throw new SyntaxError(l + m);
      if (T.inverseOf) {
        if (d = r(T.inverseOf), !D.hasOwnProperty(d))
          throw new ReferenceError(`${y + m} -> ${T.inverseOf}`);
        T = D[d], L = !L;
      }
      if (!(T.bmp || M))
        throw new SyntaxError(h + m);
      if (M) {
        if (s === "class")
          throw new SyntaxError(p);
        return A(d, L);
      }
      return s === "class" ? L ? a(d) : T.bmp : `${(L ? "[^" : "[") + T.bmp}]`;
    },
    {
      scope: "all",
      optionalFlags: "A",
      leadChar: "\\"
    }
  ), u.addUnicodeData = (o, s) => {
    const c = "Unicode token requires name", f = "Unicode token has no character data ";
    s && (e[s] = {});
    for (const l of o) {
      if (!l.name)
        throw new Error(c);
      if (!(l.inverseOf || l.bmp || l.astral))
        throw new Error(f + l.name);
      const y = r(l.name);
      if (D[y] = l, s && (e[s][y] = !0), l.alias) {
        const h = r(l.alias);
        D[h] = l, s && (e[s][h] = !0);
      }
    }
    u.cache.flush("patterns");
  }, u._getUnicodeProperty = (o) => {
    const s = r(o);
    return D[s];
  };
};
var ca = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _D(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
function la(u) {
  if (u.__esModule) return u;
  var D = u.default;
  if (typeof D == "function") {
    var e = function t() {
      return this instanceof t ? Reflect.construct(D, arguments, this.constructor) : D.apply(this, arguments);
    };
    e.prototype = D.prototype;
  } else e = {};
  return Object.defineProperty(e, "__esModule", { value: !0 }), Object.keys(u).forEach(function(t) {
    var F = Object.getOwnPropertyDescriptor(u, t);
    Object.defineProperty(e, t, F.get ? F : {
      enumerable: !0,
      get: function() {
        return u[t];
      }
    });
  }), e;
}
var fE = [
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
const hE = /* @__PURE__ */ _D(fE);
/*!
 * XRegExp Unicode Categories 5.1.1
 * <xregexp.com>
 * Steven Levithan (c) 2010-present MIT License
 * Unicode data by Mathias Bynens <mathiasbynens.be>
 */
const dE = (u) => {
  if (!u.addUnicodeData)
    throw new ReferenceError("Unicode Base must be loaded before Unicode Categories");
  u.addUnicodeData(hE);
};
var pE = [
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
const mE = /* @__PURE__ */ _D(pE);
/*!
 * XRegExp Unicode Properties 5.1.1
 * <xregexp.com>
 * Steven Levithan (c) 2012-present MIT License
 * Unicode data by Mathias Bynens <mathiasbynens.be>
 */
const gE = (u) => {
  if (!u.addUnicodeData)
    throw new ReferenceError("Unicode Base must be loaded before Unicode Properties");
  const D = mE;
  D.push({
    name: "Assigned",
    // Since this is defined as the inverse of Unicode category Cn (Unassigned), the Unicode
    // Categories addon is required to use this property
    inverseOf: "Cn"
  }), u.addUnicodeData(D);
};
var yE = [
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
const bE = /* @__PURE__ */ _D(yE);
/*!
 * XRegExp Unicode Scripts 5.1.1
 * <xregexp.com>
 * Steven Levithan (c) 2010-present MIT License
 * Unicode data by Mathias Bynens <mathiasbynens.be>
 */
const wE = (u) => {
  if (!u.addUnicodeData)
    throw new ReferenceError("Unicode Base must be loaded before Unicode Scripts");
  u.addUnicodeData(bE, "Script");
};
BE(B);
cE(B);
lE(B);
dE(B);
gE(B);
wE(B);
function xE(u, D, e) {
  return D = Pu(D), IE(u, vD() ? Reflect.construct(D, e || [], Pu(u).constructor) : D.apply(u, e));
}
function Ae(u, D, e) {
  if (vD()) return Reflect.construct.apply(null, arguments);
  var t = [null];
  t.push.apply(t, D);
  var F = new (u.bind.apply(u, t))();
  return e && Tu(F, e.prototype), F;
}
function vD() {
  try {
    var u = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (vD = function() {
    return !!u;
  })();
}
function g0(u, D) {
  var e = Object.keys(u);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(u);
    D && (t = t.filter(function(F) {
      return Object.getOwnPropertyDescriptor(u, F).enumerable;
    })), e.push.apply(e, t);
  }
  return e;
}
function _E(u) {
  for (var D = 1; D < arguments.length; D++) {
    var e = arguments[D] != null ? arguments[D] : {};
    D % 2 ? g0(Object(e), !0).forEach(function(t) {
      OE(u, t, e[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(e)) : g0(Object(e)).forEach(function(t) {
      Object.defineProperty(u, t, Object.getOwnPropertyDescriptor(e, t));
    });
  }
  return u;
}
function vE(u, D) {
  if (typeof u != "object" || !u) return u;
  var e = u[Symbol.toPrimitive];
  if (e !== void 0) {
    var t = e.call(u, D);
    if (typeof t != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(u);
}
function ie(u) {
  var D = vE(u, "string");
  return typeof D == "symbol" ? D : D + "";
}
function k(u) {
  "@babel/helpers - typeof";
  return k = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(D) {
    return typeof D;
  } : function(D) {
    return D && typeof Symbol == "function" && D.constructor === Symbol && D !== Symbol.prototype ? "symbol" : typeof D;
  }, k(u);
}
function fu(u, D) {
  if (!(u instanceof D))
    throw new TypeError("Cannot call a class as a function");
}
function y0(u, D) {
  for (var e = 0; e < D.length; e++) {
    var t = D[e];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(u, ie(t.key), t);
  }
}
function hu(u, D, e) {
  return D && y0(u.prototype, D), e && y0(u, e), Object.defineProperty(u, "prototype", {
    writable: !1
  }), u;
}
function OE(u, D, e) {
  return D = ie(D), D in u ? Object.defineProperty(u, D, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : u[D] = e, u;
}
function SE(u, D) {
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
  }), D && Tu(u, D);
}
function Pu(u) {
  return Pu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
    return e.__proto__ || Object.getPrototypeOf(e);
  }, Pu(u);
}
function Tu(u, D) {
  return Tu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, F) {
    return t.__proto__ = F, t;
  }, Tu(u, D);
}
function PE(u) {
  try {
    return Function.toString.call(u).indexOf("[native code]") !== -1;
  } catch {
    return typeof u == "function";
  }
}
function sD(u) {
  var D = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return sD = function(t) {
    if (t === null || !PE(t)) return t;
    if (typeof t != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof D < "u") {
      if (D.has(t)) return D.get(t);
      D.set(t, F);
    }
    function F() {
      return Ae(t, arguments, Pu(this).constructor);
    }
    return F.prototype = Object.create(t.prototype, {
      constructor: {
        value: F,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), Tu(F, t);
  }, sD(u);
}
function TE(u) {
  if (u === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return u;
}
function IE(u, D) {
  if (D && (typeof D == "object" || typeof D == "function"))
    return D;
  if (D !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return TE(u);
}
function OD(u) {
  return NE(u) || ME(u) || oe(u) || kE();
}
function NE(u) {
  if (Array.isArray(u)) return BD(u);
}
function ME(u) {
  if (typeof Symbol < "u" && u[Symbol.iterator] != null || u["@@iterator"] != null) return Array.from(u);
}
function oe(u, D) {
  if (u) {
    if (typeof u == "string") return BD(u, D);
    var e = Object.prototype.toString.call(u).slice(8, -1);
    if (e === "Object" && u.constructor && (e = u.constructor.name), e === "Map" || e === "Set") return Array.from(u);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return BD(u, D);
  }
}
function BD(u, D) {
  (D == null || D > u.length) && (D = u.length);
  for (var e = 0, t = new Array(D); e < D; e++) t[e] = u[e];
  return t;
}
function kE() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $E(u, D) {
  var e = typeof Symbol < "u" && u[Symbol.iterator] || u["@@iterator"];
  if (!e) {
    if (Array.isArray(u) || (e = oe(u)) || D) {
      e && (u = e);
      var t = 0, F = function() {
      };
      return {
        s: F,
        n: function() {
          return t >= u.length ? {
            done: !0
          } : {
            done: !1,
            value: u[t++]
          };
        },
        e: function(C) {
          throw C;
        },
        f: F
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var n = !0, r = !1, E;
  return {
    s: function() {
      e = e.call(u);
    },
    n: function() {
      var C = e.next();
      return n = C.done, C;
    },
    e: function(C) {
      r = !0, E = C;
    },
    f: function() {
      try {
        !n && e.return != null && e.return();
      } finally {
        if (r) throw E;
      }
    }
  };
}
var RE = /* @__PURE__ */ function() {
  function u() {
    fu(this, u);
  }
  return hu(u, [{
    key: "add",
    value: (
      /**
       * @callback HookCallback
       * @this {*|Jsep} this
       * @param {Jsep} env
       * @returns: void
       */
      /**
       * Adds the given callback to the list of callbacks for the given hook.
       *
       * The callback will be invoked when the hook it is registered for is run.
       *
       * One callback function can be registered to multiple hooks and the same hook multiple times.
       *
       * @param {string|object} name The name of the hook, or an object of callbacks keyed by name
       * @param {HookCallback|boolean} callback The callback function which is given environment variables.
       * @param {?boolean} [first=false] Will add the hook to the top of the list (defaults to the bottom)
       * @public
       */
      function(e, t, F) {
        if (typeof arguments[0] != "string")
          for (var n in arguments[0])
            this.add(n, arguments[0][n], arguments[1]);
        else
          (Array.isArray(e) ? e : [e]).forEach(function(r) {
            this[r] = this[r] || [], t && this[r][F ? "unshift" : "push"](t);
          }, this);
      }
    )
    /**
     * Runs a hook invoking all registered callbacks with the given environment variables.
     *
     * Callbacks will be invoked synchronously and in the order in which they were registered.
     *
     * @param {string} name The name of the hook.
     * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
     * @public
     */
  }, {
    key: "run",
    value: function(e, t) {
      this[e] = this[e] || [], this[e].forEach(function(F) {
        F.call(t && t.context ? t.context : t, t);
      });
    }
  }]);
}(), LE = /* @__PURE__ */ function() {
  function u(D) {
    fu(this, u), this.jsep = D, this.registered = {};
  }
  return hu(u, [{
    key: "register",
    value: function() {
      for (var e = this, t = arguments.length, F = new Array(t), n = 0; n < t; n++)
        F[n] = arguments[n];
      F.forEach(function(r) {
        if (k(r) !== "object" || !r.name || !r.init)
          throw new Error("Invalid JSEP plugin format");
        e.registered[r.name] || (r.init(e.jsep), e.registered[r.name] = r);
      });
    }
  }]);
}(), $ = /* @__PURE__ */ function() {
  function u(D) {
    fu(this, u), this.expr = D, this.index = 0;
  }
  return hu(u, [{
    key: "char",
    get: (
      // ==================== END CONFIG ============================
      /**
       * @returns {string}
       */
      function() {
        return this.expr.charAt(this.index);
      }
    )
    /**
     * @returns {number}
     */
  }, {
    key: "code",
    get: function() {
      return this.expr.charCodeAt(this.index);
    }
  }, {
    key: "throwError",
    value: (
      /**
       * throw error at index of the expression
       * @param {string} message
       * @throws
       */
      function(e) {
        var t = new Error(e + " at character " + this.index);
        throw t.index = this.index, t.description = e, t;
      }
    )
    /**
     * Run a given hook
     * @param {string} name
     * @param {jsep.Expression|false} [node]
     * @returns {?jsep.Expression}
     */
  }, {
    key: "runHook",
    value: function(e, t) {
      if (u.hooks[e]) {
        var F = {
          context: this,
          node: t
        };
        return u.hooks.run(e, F), F.node;
      }
      return t;
    }
    /**
     * Runs a given hook until one returns a node
     * @param {string} name
     * @returns {?jsep.Expression}
     */
  }, {
    key: "searchHook",
    value: function(e) {
      if (u.hooks[e]) {
        var t = {
          context: this
        };
        return u.hooks[e].find(function(F) {
          return F.call(t.context, t), t.node;
        }), t.node;
      }
    }
    /**
     * Push `index` up to the next non-space character
     */
  }, {
    key: "gobbleSpaces",
    value: function() {
      for (var e = this.code; e === u.SPACE_CODE || e === u.TAB_CODE || e === u.LF_CODE || e === u.CR_CODE; )
        e = this.expr.charCodeAt(++this.index);
      this.runHook("gobble-spaces");
    }
    /**
     * Top-level method to parse all expressions and returns compound or single node
     * @returns {jsep.Expression}
     */
  }, {
    key: "parse",
    value: function() {
      this.runHook("before-all");
      var e = this.gobbleExpressions(), t = e.length === 1 ? e[0] : {
        type: u.COMPOUND,
        body: e
      };
      return this.runHook("after-all", t);
    }
    /**
     * top-level parser (but can be reused within as well)
     * @param {number} [untilICode]
     * @returns {jsep.Expression[]}
     */
  }, {
    key: "gobbleExpressions",
    value: function(e) {
      for (var t = [], F, n; this.index < this.expr.length; )
        if (F = this.code, F === u.SEMCOL_CODE || F === u.COMMA_CODE)
          this.index++;
        else if (n = this.gobbleExpression())
          t.push(n);
        else if (this.index < this.expr.length) {
          if (F === e)
            break;
          this.throwError('Unexpected "' + this.char + '"');
        }
      return t;
    }
    /**
     * The main parsing function.
     * @returns {?jsep.Expression}
     */
  }, {
    key: "gobbleExpression",
    value: function() {
      var e = this.searchHook("gobble-expression") || this.gobbleBinaryExpression();
      return this.gobbleSpaces(), this.runHook("after-expression", e);
    }
    /**
     * Search for the operation portion of the string (e.g. `+`, `===`)
     * Start by taking the longest possible binary operations (3 characters: `===`, `!==`, `>>>`)
     * and move down from 3 to 2 to 1 character until a matching binary operation is found
     * then, return that binary operation
     * @returns {string|boolean}
     */
  }, {
    key: "gobbleBinaryOp",
    value: function() {
      this.gobbleSpaces();
      for (var e = this.expr.substr(this.index, u.max_binop_len), t = e.length; t > 0; ) {
        if (u.binary_ops.hasOwnProperty(e) && (!u.isIdentifierStart(this.code) || this.index + e.length < this.expr.length && !u.isIdentifierPart(this.expr.charCodeAt(this.index + e.length))))
          return this.index += t, e;
        e = e.substr(0, --t);
      }
      return !1;
    }
    /**
     * This function is responsible for gobbling an individual expression,
     * e.g. `1`, `1+2`, `a+(b*2)-Math.sqrt(2)`
     * @returns {?jsep.BinaryExpression}
     */
  }, {
    key: "gobbleBinaryExpression",
    value: function() {
      var e, t, F, n, r, E, C, a, i;
      if (E = this.gobbleToken(), !E || (t = this.gobbleBinaryOp(), !t))
        return E;
      for (r = {
        value: t,
        prec: u.binaryPrecedence(t),
        right_a: u.right_associative.has(t)
      }, C = this.gobbleToken(), C || this.throwError("Expected expression after " + t), n = [E, r, C]; t = this.gobbleBinaryOp(); ) {
        if (F = u.binaryPrecedence(t), F === 0) {
          this.index -= t.length;
          break;
        }
        r = {
          value: t,
          prec: F,
          right_a: u.right_associative.has(t)
        }, i = t;
        for (var A = function(s) {
          return r.right_a && s.right_a ? F > s.prec : F <= s.prec;
        }; n.length > 2 && A(n[n.length - 2]); )
          C = n.pop(), t = n.pop().value, E = n.pop(), e = {
            type: u.BINARY_EXP,
            operator: t,
            left: E,
            right: C
          }, n.push(e);
        e = this.gobbleToken(), e || this.throwError("Expected expression after " + i), n.push(r, e);
      }
      for (a = n.length - 1, e = n[a]; a > 1; )
        e = {
          type: u.BINARY_EXP,
          operator: n[a - 1].value,
          left: n[a - 2],
          right: e
        }, a -= 2;
      return e;
    }
    /**
     * An individual part of a binary expression:
     * e.g. `foo.bar(baz)`, `1`, `"abc"`, `(a % 2)` (because it's in parenthesis)
     * @returns {boolean|jsep.Expression}
     */
  }, {
    key: "gobbleToken",
    value: function() {
      var e, t, F, n;
      if (this.gobbleSpaces(), n = this.searchHook("gobble-token"), n)
        return this.runHook("after-token", n);
      if (e = this.code, u.isDecimalDigit(e) || e === u.PERIOD_CODE)
        return this.gobbleNumericLiteral();
      if (e === u.SQUOTE_CODE || e === u.DQUOTE_CODE)
        n = this.gobbleStringLiteral();
      else if (e === u.OBRACK_CODE)
        n = this.gobbleArray();
      else {
        for (t = this.expr.substr(this.index, u.max_unop_len), F = t.length; F > 0; ) {
          if (u.unary_ops.hasOwnProperty(t) && (!u.isIdentifierStart(this.code) || this.index + t.length < this.expr.length && !u.isIdentifierPart(this.expr.charCodeAt(this.index + t.length)))) {
            this.index += F;
            var r = this.gobbleToken();
            return r || this.throwError("missing unaryOp argument"), this.runHook("after-token", {
              type: u.UNARY_EXP,
              operator: t,
              argument: r,
              prefix: !0
            });
          }
          t = t.substr(0, --F);
        }
        u.isIdentifierStart(e) ? (n = this.gobbleIdentifier(), u.literals.hasOwnProperty(n.name) ? n = {
          type: u.LITERAL,
          value: u.literals[n.name],
          raw: n.name
        } : n.name === u.this_str && (n = {
          type: u.THIS_EXP
        })) : e === u.OPAREN_CODE && (n = this.gobbleGroup());
      }
      return n ? (n = this.gobbleTokenProperty(n), this.runHook("after-token", n)) : this.runHook("after-token", !1);
    }
    /**
     * Gobble properties of of identifiers/strings/arrays/groups.
     * e.g. `foo`, `bar.baz`, `foo['bar'].baz`
     * It also gobbles function calls:
     * e.g. `Math.acos(obj.angle)`
     * @param {jsep.Expression} node
     * @returns {jsep.Expression}
     */
  }, {
    key: "gobbleTokenProperty",
    value: function(e) {
      this.gobbleSpaces();
      for (var t = this.code; t === u.PERIOD_CODE || t === u.OBRACK_CODE || t === u.OPAREN_CODE || t === u.QUMARK_CODE; ) {
        var F = void 0;
        if (t === u.QUMARK_CODE) {
          if (this.expr.charCodeAt(this.index + 1) !== u.PERIOD_CODE)
            break;
          F = !0, this.index += 2, this.gobbleSpaces(), t = this.code;
        }
        this.index++, t === u.OBRACK_CODE ? (e = {
          type: u.MEMBER_EXP,
          computed: !0,
          object: e,
          property: this.gobbleExpression()
        }, this.gobbleSpaces(), t = this.code, t !== u.CBRACK_CODE && this.throwError("Unclosed ["), this.index++) : t === u.OPAREN_CODE ? e = {
          type: u.CALL_EXP,
          arguments: this.gobbleArguments(u.CPAREN_CODE),
          callee: e
        } : (t === u.PERIOD_CODE || F) && (F && this.index--, this.gobbleSpaces(), e = {
          type: u.MEMBER_EXP,
          computed: !1,
          object: e,
          property: this.gobbleIdentifier()
        }), F && (e.optional = !0), this.gobbleSpaces(), t = this.code;
      }
      return e;
    }
    /**
     * Parse simple numeric literals: `12`, `3.4`, `.5`. Do this by using a string to
     * keep track of everything in the numeric literal and then calling `parseFloat` on that string
     * @returns {jsep.Literal}
     */
  }, {
    key: "gobbleNumericLiteral",
    value: function() {
      for (var e = "", t, F; u.isDecimalDigit(this.code); )
        e += this.expr.charAt(this.index++);
      if (this.code === u.PERIOD_CODE)
        for (e += this.expr.charAt(this.index++); u.isDecimalDigit(this.code); )
          e += this.expr.charAt(this.index++);
      if (t = this.char, t === "e" || t === "E") {
        for (e += this.expr.charAt(this.index++), t = this.char, (t === "+" || t === "-") && (e += this.expr.charAt(this.index++)); u.isDecimalDigit(this.code); )
          e += this.expr.charAt(this.index++);
        u.isDecimalDigit(this.expr.charCodeAt(this.index - 1)) || this.throwError("Expected exponent (" + e + this.char + ")");
      }
      return F = this.code, u.isIdentifierStart(F) ? this.throwError("Variable names cannot start with a number (" + e + this.char + ")") : (F === u.PERIOD_CODE || e.length === 1 && e.charCodeAt(0) === u.PERIOD_CODE) && this.throwError("Unexpected period"), {
        type: u.LITERAL,
        value: parseFloat(e),
        raw: e
      };
    }
    /**
     * Parses a string literal, staring with single or double quotes with basic support for escape codes
     * e.g. `"hello world"`, `'this is\nJSEP'`
     * @returns {jsep.Literal}
     */
  }, {
    key: "gobbleStringLiteral",
    value: function() {
      for (var e = "", t = this.index, F = this.expr.charAt(this.index++), n = !1; this.index < this.expr.length; ) {
        var r = this.expr.charAt(this.index++);
        if (r === F) {
          n = !0;
          break;
        } else if (r === "\\")
          switch (r = this.expr.charAt(this.index++), r) {
            case "n":
              e += `
`;
              break;
            case "r":
              e += "\r";
              break;
            case "t":
              e += "	";
              break;
            case "b":
              e += "\b";
              break;
            case "f":
              e += "\f";
              break;
            case "v":
              e += "\v";
              break;
            default:
              e += r;
          }
        else
          e += r;
      }
      return n || this.throwError('Unclosed quote after "' + e + '"'), {
        type: u.LITERAL,
        value: e,
        raw: this.expr.substring(t, this.index)
      };
    }
    /**
     * Gobbles only identifiers
     * e.g.: `foo`, `_value`, `$x1`
     * Also, this function checks if that identifier is a literal:
     * (e.g. `true`, `false`, `null`) or `this`
     * @returns {jsep.Identifier}
     */
  }, {
    key: "gobbleIdentifier",
    value: function() {
      var e = this.code, t = this.index;
      for (u.isIdentifierStart(e) ? this.index++ : this.throwError("Unexpected " + this.char); this.index < this.expr.length && (e = this.code, u.isIdentifierPart(e)); )
        this.index++;
      return {
        type: u.IDENTIFIER,
        name: this.expr.slice(t, this.index)
      };
    }
    /**
     * Gobbles a list of arguments within the context of a function call
     * or array literal. This function also assumes that the opening character
     * `(` or `[` has already been gobbled, and gobbles expressions and commas
     * until the terminator character `)` or `]` is encountered.
     * e.g. `foo(bar, baz)`, `my_func()`, or `[bar, baz]`
     * @param {number} termination
     * @returns {jsep.Expression[]}
     */
  }, {
    key: "gobbleArguments",
    value: function(e) {
      for (var t = [], F = !1, n = 0; this.index < this.expr.length; ) {
        this.gobbleSpaces();
        var r = this.code;
        if (r === e) {
          F = !0, this.index++, e === u.CPAREN_CODE && n && n >= t.length && this.throwError("Unexpected token " + String.fromCharCode(e));
          break;
        } else if (r === u.COMMA_CODE) {
          if (this.index++, n++, n !== t.length) {
            if (e === u.CPAREN_CODE)
              this.throwError("Unexpected token ,");
            else if (e === u.CBRACK_CODE)
              for (var E = t.length; E < n; E++)
                t.push(null);
          }
        } else if (t.length !== n && n !== 0)
          this.throwError("Expected comma");
        else {
          var C = this.gobbleExpression();
          (!C || C.type === u.COMPOUND) && this.throwError("Expected comma"), t.push(C);
        }
      }
      return F || this.throwError("Expected " + String.fromCharCode(e)), t;
    }
    /**
     * Responsible for parsing a group of things within parentheses `()`
     * that have no identifier in front (so not a function call)
     * This function assumes that it needs to gobble the opening parenthesis
     * and then tries to gobble everything within that parenthesis, assuming
     * that the next thing it should see is the close parenthesis. If not,
     * then the expression probably doesn't have a `)`
     * @returns {boolean|jsep.Expression}
     */
  }, {
    key: "gobbleGroup",
    value: function() {
      this.index++;
      var e = this.gobbleExpressions(u.CPAREN_CODE);
      if (this.code === u.CPAREN_CODE)
        return this.index++, e.length === 1 ? e[0] : e.length ? {
          type: u.SEQUENCE_EXP,
          expressions: e
        } : !1;
      this.throwError("Unclosed (");
    }
    /**
     * Responsible for parsing Array literals `[1, 2, 3]`
     * This function assumes that it needs to gobble the opening bracket
     * and then tries to gobble the expressions as arguments.
     * @returns {jsep.ArrayExpression}
     */
  }, {
    key: "gobbleArray",
    value: function() {
      return this.index++, {
        type: u.ARRAY_EXP,
        elements: this.gobbleArguments(u.CBRACK_CODE)
      };
    }
  }], [{
    key: "version",
    get: (
      /**
       * @returns {string}
       */
      function() {
        return "1.3.8";
      }
    )
    /**
     * @returns {string}
     */
  }, {
    key: "toString",
    value: function() {
      return "JavaScript Expression Parser (JSEP) v" + u.version;
    }
  }, {
    key: "addUnaryOp",
    value: (
      // ==================== CONFIG ================================
      /**
       * @method addUnaryOp
       * @param {string} op_name The name of the unary op to add
       * @returns {Jsep}
       */
      function(e) {
        return u.max_unop_len = Math.max(e.length, u.max_unop_len), u.unary_ops[e] = 1, u;
      }
    )
    /**
     * @method jsep.addBinaryOp
     * @param {string} op_name The name of the binary op to add
     * @param {number} precedence The precedence of the binary op (can be a float). Higher number = higher precedence
     * @param {boolean} [isRightAssociative=false] whether operator is right-associative
     * @returns {Jsep}
     */
  }, {
    key: "addBinaryOp",
    value: function(e, t, F) {
      return u.max_binop_len = Math.max(e.length, u.max_binop_len), u.binary_ops[e] = t, F ? u.right_associative.add(e) : u.right_associative.delete(e), u;
    }
    /**
     * @method addIdentifierChar
     * @param {string} char The additional character to treat as a valid part of an identifier
     * @returns {Jsep}
     */
  }, {
    key: "addIdentifierChar",
    value: function(e) {
      return u.additional_identifier_chars.add(e), u;
    }
    /**
     * @method addLiteral
     * @param {string} literal_name The name of the literal to add
     * @param {*} literal_value The value of the literal
     * @returns {Jsep}
     */
  }, {
    key: "addLiteral",
    value: function(e, t) {
      return u.literals[e] = t, u;
    }
    /**
     * @method removeUnaryOp
     * @param {string} op_name The name of the unary op to remove
     * @returns {Jsep}
     */
  }, {
    key: "removeUnaryOp",
    value: function(e) {
      return delete u.unary_ops[e], e.length === u.max_unop_len && (u.max_unop_len = u.getMaxKeyLen(u.unary_ops)), u;
    }
    /**
     * @method removeAllUnaryOps
     * @returns {Jsep}
     */
  }, {
    key: "removeAllUnaryOps",
    value: function() {
      return u.unary_ops = {}, u.max_unop_len = 0, u;
    }
    /**
     * @method removeIdentifierChar
     * @param {string} char The additional character to stop treating as a valid part of an identifier
     * @returns {Jsep}
     */
  }, {
    key: "removeIdentifierChar",
    value: function(e) {
      return u.additional_identifier_chars.delete(e), u;
    }
    /**
     * @method removeBinaryOp
     * @param {string} op_name The name of the binary op to remove
     * @returns {Jsep}
     */
  }, {
    key: "removeBinaryOp",
    value: function(e) {
      return delete u.binary_ops[e], e.length === u.max_binop_len && (u.max_binop_len = u.getMaxKeyLen(u.binary_ops)), u.right_associative.delete(e), u;
    }
    /**
     * @method removeAllBinaryOps
     * @returns {Jsep}
     */
  }, {
    key: "removeAllBinaryOps",
    value: function() {
      return u.binary_ops = {}, u.max_binop_len = 0, u;
    }
    /**
     * @method removeLiteral
     * @param {string} literal_name The name of the literal to remove
     * @returns {Jsep}
     */
  }, {
    key: "removeLiteral",
    value: function(e) {
      return delete u.literals[e], u;
    }
    /**
     * @method removeAllLiterals
     * @returns {Jsep}
     */
  }, {
    key: "removeAllLiterals",
    value: function() {
      return u.literals = {}, u;
    }
  }, {
    key: "parse",
    value: function(e) {
      return new u(e).parse();
    }
    /**
     * Get the longest key length of any object
     * @param {object} obj
     * @returns {number}
     */
  }, {
    key: "getMaxKeyLen",
    value: function(e) {
      return Math.max.apply(Math, [0].concat(OD(Object.keys(e).map(function(t) {
        return t.length;
      }))));
    }
    /**
     * `ch` is a character code in the next three functions
     * @param {number} ch
     * @returns {boolean}
     */
  }, {
    key: "isDecimalDigit",
    value: function(e) {
      return e >= 48 && e <= 57;
    }
    /**
     * Returns the precedence of a binary operator or `0` if it isn't a binary operator. Can be float.
     * @param {string} op_val
     * @returns {number}
     */
  }, {
    key: "binaryPrecedence",
    value: function(e) {
      return u.binary_ops[e] || 0;
    }
    /**
     * Looks for start of identifier
     * @param {number} ch
     * @returns {boolean}
     */
  }, {
    key: "isIdentifierStart",
    value: function(e) {
      return e >= 65 && e <= 90 || // A...Z
      e >= 97 && e <= 122 || // a...z
      e >= 128 && !u.binary_ops[String.fromCharCode(e)] || // any non-ASCII that is not an operator
      u.additional_identifier_chars.has(String.fromCharCode(e));
    }
    /**
     * @param {number} ch
     * @returns {boolean}
     */
  }, {
    key: "isIdentifierPart",
    value: function(e) {
      return u.isIdentifierStart(e) || u.isDecimalDigit(e);
    }
  }]);
}(), UE = new RE();
Object.assign($, {
  hooks: UE,
  plugins: new LE($),
  // Node Types
  // ----------
  // This is the full set of types that any JSEP node can be.
  // Store them here to save space when minified
  COMPOUND: "Compound",
  SEQUENCE_EXP: "SequenceExpression",
  IDENTIFIER: "Identifier",
  MEMBER_EXP: "MemberExpression",
  LITERAL: "Literal",
  THIS_EXP: "ThisExpression",
  CALL_EXP: "CallExpression",
  UNARY_EXP: "UnaryExpression",
  BINARY_EXP: "BinaryExpression",
  ARRAY_EXP: "ArrayExpression",
  TAB_CODE: 9,
  LF_CODE: 10,
  CR_CODE: 13,
  SPACE_CODE: 32,
  PERIOD_CODE: 46,
  // '.'
  COMMA_CODE: 44,
  // ','
  SQUOTE_CODE: 39,
  // single quote
  DQUOTE_CODE: 34,
  // double quotes
  OPAREN_CODE: 40,
  // (
  CPAREN_CODE: 41,
  // )
  OBRACK_CODE: 91,
  // [
  CBRACK_CODE: 93,
  // ]
  QUMARK_CODE: 63,
  // ?
  SEMCOL_CODE: 59,
  // ;
  COLON_CODE: 58,
  // :
  // Operations
  // ----------
  // Use a quickly-accessible map to store all of the unary operators
  // Values are set to `1` (it really doesn't matter)
  unary_ops: {
    "-": 1,
    "!": 1,
    "~": 1,
    "+": 1
  },
  // Also use a map for the binary operations but set their values to their
  // binary precedence for quick reference (higher number = higher precedence)
  // see [Order of operations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
  binary_ops: {
    "||": 1,
    "&&": 2,
    "|": 3,
    "^": 4,
    "&": 5,
    "==": 6,
    "!=": 6,
    "===": 6,
    "!==": 6,
    "<": 7,
    ">": 7,
    "<=": 7,
    ">=": 7,
    "<<": 8,
    ">>": 8,
    ">>>": 8,
    "+": 9,
    "-": 9,
    "*": 10,
    "/": 10,
    "%": 10
  },
  // sets specific binary_ops as right-associative
  right_associative: /* @__PURE__ */ new Set(),
  // Additional valid identifier chars, apart from a-z, A-Z and 0-9 (except on the starting char)
  additional_identifier_chars: /* @__PURE__ */ new Set(["$", "_"]),
  // Literals
  // ----------
  // Store the values to return for the various literals we may encounter
  literals: {
    true: !0,
    false: !1,
    null: null
  },
  // Except for `this`, which is special. This could be changed to something like `'self'` as well
  this_str: "this"
});
$.max_unop_len = $.getMaxKeyLen($.unary_ops);
$.max_binop_len = $.getMaxKeyLen($.binary_ops);
var Bu = function(D) {
  return new $(D).parse();
}, jE = Object.getOwnPropertyNames($);
jE.forEach(function(u) {
  Bu[u] === void 0 && u !== "prototype" && (Bu[u] = $[u]);
});
Bu.Jsep = $;
var YE = "ConditionalExpression", HE = {
  name: "ternary",
  init: function(D) {
    D.hooks.add("after-expression", function(t) {
      if (t.node && this.code === D.QUMARK_CODE) {
        this.index++;
        var F = t.node, n = this.gobbleExpression();
        if (n || this.throwError("Expected expression"), this.gobbleSpaces(), this.code === D.COLON_CODE) {
          this.index++;
          var r = this.gobbleExpression();
          if (r || this.throwError("Expected expression"), t.node = {
            type: YE,
            test: F,
            consequent: n,
            alternate: r
          }, F.operator && D.binary_ops[F.operator] <= 0.9) {
            for (var E = F; E.right.operator && D.binary_ops[E.right.operator] <= 0.9; )
              E = E.right;
            t.node.test = E.right, E.right = t.node, t.node = F;
          }
        } else
          this.throwError("Expected :");
      }
    });
  }
};
Bu.plugins.register(HE);
var b0 = 47, WE = 92, zE = {
  name: "regex",
  init: function(D) {
    D.hooks.add("gobble-token", function(t) {
      if (this.code === b0) {
        for (var F = ++this.index, n = !1; this.index < this.expr.length; ) {
          if (this.code === b0 && !n) {
            for (var r = this.expr.slice(F, this.index), E = ""; ++this.index < this.expr.length; ) {
              var C = this.code;
              if (C >= 97 && C <= 122 || C >= 65 && C <= 90 || C >= 48 && C <= 57)
                E += this.char;
              else
                break;
            }
            var a = void 0;
            try {
              a = new RegExp(r, E);
            } catch (i) {
              this.throwError(i.message);
            }
            return t.node = {
              type: D.LITERAL,
              value: a,
              raw: this.expr.slice(F - 1, this.index)
            }, t.node = this.gobbleTokenProperty(t.node), t.node;
          }
          this.code === D.OBRACK_CODE ? n = !0 : n && this.code === D.CBRACK_CODE && (n = !1), this.index += this.code === WE ? 2 : 1;
        }
        this.throwError("Unclosed Regex");
      }
    });
  }
}, nD = 43, GE = 45, Au = {
  name: "assignment",
  assignmentOperators: /* @__PURE__ */ new Set(["=", "*=", "**=", "/=", "%=", "+=", "-=", "<<=", ">>=", ">>>=", "&=", "^=", "|="]),
  updateOperators: [nD, GE],
  assignmentPrecedence: 0.9,
  init: function(D) {
    var e = [D.IDENTIFIER, D.MEMBER_EXP];
    Au.assignmentOperators.forEach(function(F) {
      return D.addBinaryOp(F, Au.assignmentPrecedence, !0);
    }), D.hooks.add("gobble-token", function(n) {
      var r = this, E = this.code;
      Au.updateOperators.some(function(C) {
        return C === E && C === r.expr.charCodeAt(r.index + 1);
      }) && (this.index += 2, n.node = {
        type: "UpdateExpression",
        operator: E === nD ? "++" : "--",
        argument: this.gobbleTokenProperty(this.gobbleIdentifier()),
        prefix: !0
      }, (!n.node.argument || !e.includes(n.node.argument.type)) && this.throwError("Unexpected ".concat(n.node.operator)));
    }), D.hooks.add("after-token", function(n) {
      var r = this;
      if (n.node) {
        var E = this.code;
        Au.updateOperators.some(function(C) {
          return C === E && C === r.expr.charCodeAt(r.index + 1);
        }) && (e.includes(n.node.type) || this.throwError("Unexpected ".concat(n.node.operator)), this.index += 2, n.node = {
          type: "UpdateExpression",
          operator: E === nD ? "++" : "--",
          argument: n.node,
          prefix: !1
        });
      }
    }), D.hooks.add("after-expression", function(n) {
      n.node && t(n.node);
    });
    function t(F) {
      Au.assignmentOperators.has(F.operator) ? (F.type = "AssignmentExpression", t(F.left), t(F.right)) : F.operator || Object.values(F).forEach(function(n) {
        n && k(n) === "object" && t(n);
      });
    }
  }
}, I = Object.prototype.hasOwnProperty;
function J(u, D) {
  return u = u.slice(), u.push(D), u;
}
function cD(u, D) {
  return D = D.slice(), D.unshift(u), D;
}
var ZE = /* @__PURE__ */ function(u) {
  function D(e) {
    var t;
    return fu(this, D), t = xE(this, D, ['JSONPath should not be called with "new" (it prevents return of (unwrapped) scalar values)']), t.avoidNew = !0, t.value = e, t.name = "NewError", t;
  }
  return SE(D, u), hu(D);
}(/* @__PURE__ */ sD(Error));
function g(u, D, e, t, F) {
  if (!(this instanceof g))
    try {
      return new g(u, D, e, t, F);
    } catch (C) {
      if (!C.avoidNew)
        throw C;
      return C.value;
    }
  typeof u == "string" && (F = t, t = e, e = D, D = u, u = null);
  var n = u && k(u) === "object";
  if (u = u || {}, this.json = u.json || e, this.path = u.path || D, this.resultType = u.resultType || "value", this.flatten = u.flatten || !1, this.wrap = I.call(u, "wrap") ? u.wrap : !0, this.sandbox = u.sandbox || {}, this.eval = u.eval === void 0 ? "safe" : u.eval, this.ignoreEvalErrors = typeof u.ignoreEvalErrors > "u" ? !1 : u.ignoreEvalErrors, this.parent = u.parent || null, this.parentProperty = u.parentProperty || null, this.callback = u.callback || t || null, this.otherTypeCallback = u.otherTypeCallback || F || function() {
    throw new TypeError("You must supply an otherTypeCallback callback option with the @other() operator.");
  }, u.autostart !== !1) {
    var r = {
      path: n ? u.path : D
    };
    n ? "json" in u && (r.json = u.json) : r.json = e;
    var E = this.evaluate(r);
    if (!E || k(E) !== "object")
      throw new ZE(E);
    return E;
  }
}
g.prototype.evaluate = function(u, D, e, t) {
  var F = this, n = this.parent, r = this.parentProperty, E = this.flatten, C = this.wrap;
  if (this.currResultType = this.resultType, this.currEval = this.eval, this.currSandbox = this.sandbox, e = e || this.callback, this.currOtherTypeCallback = t || this.otherTypeCallback, D = D || this.json, u = u || this.path, u && k(u) === "object" && !Array.isArray(u)) {
    if (!u.path && u.path !== "")
      throw new TypeError('You must supply a "path" property when providing an object argument to JSONPath.evaluate().');
    if (!I.call(u, "json"))
      throw new TypeError('You must supply a "json" property when providing an object argument to JSONPath.evaluate().');
    var a = u;
    D = a.json, E = I.call(u, "flatten") ? u.flatten : E, this.currResultType = I.call(u, "resultType") ? u.resultType : this.currResultType, this.currSandbox = I.call(u, "sandbox") ? u.sandbox : this.currSandbox, C = I.call(u, "wrap") ? u.wrap : C, this.currEval = I.call(u, "eval") ? u.eval : this.currEval, e = I.call(u, "callback") ? u.callback : e, this.currOtherTypeCallback = I.call(u, "otherTypeCallback") ? u.otherTypeCallback : this.currOtherTypeCallback, n = I.call(u, "parent") ? u.parent : n, r = I.call(u, "parentProperty") ? u.parentProperty : r, u = u.path;
  }
  if (n = n || null, r = r || null, Array.isArray(u) && (u = g.toPathString(u)), !(!u && u !== "" || !D)) {
    var i = g.toPathArray(u);
    i[0] === "$" && i.length > 1 && i.shift(), this._hasParentSelector = null;
    var A = this._trace(i, D, ["$"], n, r, e).filter(function(o) {
      return o && !o.isParentSelector;
    });
    return A.length ? !C && A.length === 1 && !A[0].hasArrExpr ? this._getPreferredOutput(A[0]) : A.reduce(function(o, s) {
      var c = F._getPreferredOutput(s);
      return E && Array.isArray(c) ? o = o.concat(c) : o.push(c), o;
    }, []) : C ? [] : void 0;
  }
};
g.prototype._getPreferredOutput = function(u) {
  var D = this.currResultType;
  switch (D) {
    case "all": {
      var e = Array.isArray(u.path) ? u.path : g.toPathArray(u.path);
      return u.pointer = g.toPointer(e), u.path = typeof u.path == "string" ? u.path : g.toPathString(u.path), u;
    }
    case "value":
    case "parent":
    case "parentProperty":
      return u[D];
    case "path":
      return g.toPathString(u[D]);
    case "pointer":
      return g.toPointer(u.path);
    default:
      throw new TypeError("Unknown result type");
  }
};
g.prototype._handleCallback = function(u, D, e) {
  if (D) {
    var t = this._getPreferredOutput(u);
    u.path = typeof u.path == "string" ? u.path : g.toPathString(u.path), D(t, e, u);
  }
};
g.prototype._trace = function(u, D, e, t, F, n, r, E) {
  var C = this, a;
  if (!u.length)
    return a = {
      path: e,
      value: D,
      parent: t,
      parentProperty: F,
      hasArrExpr: r
    }, this._handleCallback(a, n, "value"), a;
  var i = u[0], A = u.slice(1), o = [];
  function s(d) {
    Array.isArray(d) ? d.forEach(function(T) {
      o.push(T);
    }) : o.push(d);
  }
  if ((typeof i != "string" || E) && D && I.call(D, i))
    s(this._trace(A, D[i], J(e, i), D, i, n, r));
  else if (i === "*")
    this._walk(D, function(d) {
      s(C._trace(A, D[d], J(e, d), D, d, n, !0, !0));
    });
  else if (i === "..")
    s(this._trace(A, D, e, t, F, n, r)), this._walk(D, function(d) {
      k(D[d]) === "object" && s(C._trace(u.slice(), D[d], J(e, d), D, d, n, !0));
    });
  else {
    if (i === "^")
      return this._hasParentSelector = !0, {
        path: e.slice(0, -1),
        expr: A,
        isParentSelector: !0
      };
    if (i === "~")
      return a = {
        path: J(e, i),
        value: F,
        parent: t,
        parentProperty: null
      }, this._handleCallback(a, n, "property"), a;
    if (i === "$")
      s(this._trace(A, D, e, null, null, n, r));
    else if (/^(\x2D?[0-9]*):(\x2D?[0-9]*):?([0-9]*)$/.test(i))
      s(this._slice(i, A, D, e, t, F, n));
    else if (i.indexOf("?(") === 0) {
      if (this.currEval === !1)
        throw new Error("Eval [?(expr)] prevented in JSONPath expression.");
      var c = i.replace(/^\?\(((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?)\)$/, "$1"), f = /@(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])?((?:[\0->@-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)['\[](\??\((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\))(?!(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])\)\])['\]]/g.exec(c);
      f ? this._walk(D, function(d) {
        var T = [f[2]], X = f[1] ? D[d][f[1]] : D[d], Ku = C._trace(T, X, e, t, F, n, !0);
        Ku.length > 0 && s(C._trace(A, D[d], J(e, d), D, d, n, !0));
      }) : this._walk(D, function(d) {
        C._eval(c, D[d], d, e, t, F) && s(C._trace(A, D[d], J(e, d), D, d, n, !0));
      });
    } else if (i[0] === "(") {
      if (this.currEval === !1)
        throw new Error("Eval [(expr)] prevented in JSONPath expression.");
      s(this._trace(cD(this._eval(i, D, e[e.length - 1], e.slice(0, -1), t, F), A), D, e, t, F, n, r));
    } else if (i[0] === "@") {
      var l = !1, y = i.slice(1, -2);
      switch (y) {
        case "scalar":
          (!D || !["object", "function"].includes(k(D))) && (l = !0);
          break;
        case "boolean":
        case "string":
        case "undefined":
        case "function":
          k(D) === y && (l = !0);
          break;
        case "integer":
          Number.isFinite(D) && !(D % 1) && (l = !0);
          break;
        case "number":
          Number.isFinite(D) && (l = !0);
          break;
        case "nonFinite":
          typeof D == "number" && !Number.isFinite(D) && (l = !0);
          break;
        case "object":
          D && k(D) === y && (l = !0);
          break;
        case "array":
          Array.isArray(D) && (l = !0);
          break;
        case "other":
          l = this.currOtherTypeCallback(D, e, t, F);
          break;
        case "null":
          D === null && (l = !0);
          break;
        default:
          throw new TypeError("Unknown value type " + y);
      }
      if (l)
        return a = {
          path: e,
          value: D,
          parent: t,
          parentProperty: F
        }, this._handleCallback(a, n, "value"), a;
    } else if (i[0] === "`" && D && I.call(D, i.slice(1))) {
      var h = i.slice(1);
      s(this._trace(A, D[h], J(e, h), D, h, n, r, !0));
    } else if (i.includes(",")) {
      var p = i.split(","), m = $E(p), v;
      try {
        for (m.s(); !(v = m.n()).done; ) {
          var S = v.value;
          s(this._trace(cD(S, A), D, e, t, F, n, !0));
        }
      } catch (d) {
        m.e(d);
      } finally {
        m.f();
      }
    } else !E && D && I.call(D, i) && s(this._trace(A, D[i], J(e, i), D, i, n, r, !0));
  }
  if (this._hasParentSelector)
    for (var O = 0; O < o.length; O++) {
      var j = o[O];
      if (j && j.isParentSelector) {
        var W = this._trace(j.expr, D, j.path, t, F, n, r);
        if (Array.isArray(W)) {
          o[O] = W[0];
          for (var L = W.length, M = 1; M < L; M++)
            O++, o.splice(O, 0, W[M]);
        } else
          o[O] = W;
      }
    }
  return o;
};
g.prototype._walk = function(u, D) {
  if (Array.isArray(u))
    for (var e = u.length, t = 0; t < e; t++)
      D(t);
  else u && k(u) === "object" && Object.keys(u).forEach(function(F) {
    D(F);
  });
};
g.prototype._slice = function(u, D, e, t, F, n, r) {
  if (Array.isArray(e)) {
    var E = e.length, C = u.split(":"), a = C[2] && Number.parseInt(C[2]) || 1, i = C[0] && Number.parseInt(C[0]) || 0, A = C[1] && Number.parseInt(C[1]) || E;
    i = i < 0 ? Math.max(0, i + E) : Math.min(E, i), A = A < 0 ? Math.max(0, A + E) : Math.min(E, A);
    for (var o = [], s = i; s < A; s += a) {
      var c = this._trace(cD(s, D), e, t, F, n, r, !0);
      c.forEach(function(f) {
        o.push(f);
      });
    }
    return o;
  }
};
g.prototype._eval = function(u, D, e, t, F, n) {
  var r = this;
  this.currSandbox._$_parentProperty = n, this.currSandbox._$_parent = F, this.currSandbox._$_property = e, this.currSandbox._$_root = this.json, this.currSandbox._$_v = D;
  var E = u.includes("@path");
  E && (this.currSandbox._$_path = g.toPathString(t.concat([e])));
  var C = this.currEval + "Script:" + u;
  if (!g.cache[C]) {
    var a = u.replace(/@parentProperty/g, "_$_parentProperty").replace(/@parent/g, "_$_parent").replace(/@property/g, "_$_property").replace(/@root/g, "_$_root").replace(/@([\t-\r \)\.\[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])/g, "_$_v$1");
    if (E && (a = a.replace(/@path/g, "_$_path")), this.currEval === "safe" || this.currEval === !0 || this.currEval === void 0)
      g.cache[C] = new this.safeVm.Script(a);
    else if (this.currEval === "native")
      g.cache[C] = new this.vm.Script(a);
    else if (typeof this.currEval == "function" && this.currEval.prototype && I.call(this.currEval.prototype, "runInNewContext")) {
      var i = this.currEval;
      g.cache[C] = new i(a);
    } else if (typeof this.currEval == "function")
      g.cache[C] = {
        runInNewContext: function(o) {
          return r.currEval(a, o);
        }
      };
    else
      throw new TypeError('Unknown "eval" property "'.concat(this.currEval, '"'));
  }
  try {
    return g.cache[C].runInNewContext(this.currSandbox);
  } catch (A) {
    if (this.ignoreEvalErrors)
      return !1;
    throw new Error("jsonPath: " + A.message + ": " + u);
  }
};
g.cache = {};
g.toPathString = function(u) {
  for (var D = u, e = D.length, t = "$", F = 1; F < e; F++)
    /^(~|\^|@(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\(\))$/.test(D[F]) || (t += /^[\*0-9]+$/.test(D[F]) ? "[" + D[F] + "]" : "['" + D[F] + "']");
  return t;
};
g.toPointer = function(u) {
  for (var D = u, e = D.length, t = "", F = 1; F < e; F++)
    /^(~|\^|@(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\(\))$/.test(D[F]) || (t += "/" + D[F].toString().replace(/~/g, "~0").replace(/\//g, "~1"));
  return t;
};
g.toPathArray = function(u) {
  var D = g.cache;
  if (D[u])
    return D[u].concat();
  var e = [], t = u.replace(/@(?:null|boolean|number|string|integer|undefined|nonFinite|scalar|array|object|function|other)\(\)/g, ";$&;").replace(/['\[](\??\((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\))['\]](?!(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])\])/g, function(n, r) {
    return "[#" + (e.push(r) - 1) + "]";
  }).replace(/\[["']((?:[\0-&\(-\\\^-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)["']\]/g, function(n, r) {
    return "['" + r.replace(/\./g, "%@%").replace(/~/g, "%%@@%%") + "']";
  }).replace(/~/g, ";~;").replace(/["']?\.["']?(?!(?:[\0-Z\\-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*\])|\[["']?/g, ";").replace(/%@%/g, ".").replace(/%%@@%%/g, "~").replace(/(?:;)?(\^+)(?:;)?/g, function(n, r) {
    return ";" + r.split("").join(";") + ";";
  }).replace(/;;;|;;/g, ";..;").replace(/;$|'?\]|'$/g, ""), F = t.split(";").map(function(n) {
    var r = n.match(/#([0-9]+)/);
    return !r || !r[1] ? n : e[r[1]];
  });
  return D[u] = F, D[u].concat();
};
var KE = function(D, e, t) {
  for (var F = D.length, n = 0; n < F; n++) {
    var r = D[n];
    t(r) && e.push(D.splice(n--, 1)[0]);
  }
};
Bu.plugins.register(zE, Au);
var w = {
  /**
   * @param {jsep.Expression} ast
   * @param {Record<string, any>} subs
   */
  evalAst: function(D, e) {
    switch (D.type) {
      case "BinaryExpression":
      case "LogicalExpression":
        return w.evalBinaryExpression(D, e);
      case "Compound":
        return w.evalCompound(D, e);
      case "ConditionalExpression":
        return w.evalConditionalExpression(D, e);
      case "Identifier":
        return w.evalIdentifier(D, e);
      case "Literal":
        return w.evalLiteral(D, e);
      case "MemberExpression":
        return w.evalMemberExpression(D, e);
      case "UnaryExpression":
        return w.evalUnaryExpression(D, e);
      case "ArrayExpression":
        return w.evalArrayExpression(D, e);
      case "CallExpression":
        return w.evalCallExpression(D, e);
      case "AssignmentExpression":
        return w.evalAssignmentExpression(D, e);
      default:
        throw SyntaxError("Unexpected expression", D);
    }
  },
  evalBinaryExpression: function(D, e) {
    var t = {
      "||": function(n, r) {
        return n || r();
      },
      "&&": function(n, r) {
        return n && r();
      },
      "|": function(n, r) {
        return n | r();
      },
      "^": function(n, r) {
        return n ^ r();
      },
      "&": function(n, r) {
        return n & r();
      },
      // eslint-disable-next-line eqeqeq
      "==": function(n, r) {
        return n == r();
      },
      // eslint-disable-next-line eqeqeq
      "!=": function(n, r) {
        return n != r();
      },
      "===": function(n, r) {
        return n === r();
      },
      "!==": function(n, r) {
        return n !== r();
      },
      "<": function(n, r) {
        return n < r();
      },
      ">": function(n, r) {
        return n > r();
      },
      "<=": function(n, r) {
        return n <= r();
      },
      ">=": function(n, r) {
        return n >= r();
      },
      "<<": function(n, r) {
        return n << r();
      },
      ">>": function(n, r) {
        return n >> r();
      },
      ">>>": function(n, r) {
        return n >>> r();
      },
      "+": function(n, r) {
        return n + r();
      },
      "-": function(n, r) {
        return n - r();
      },
      "*": function(n, r) {
        return n * r();
      },
      "/": function(n, r) {
        return n / r();
      },
      "%": function(n, r) {
        return n % r();
      }
    }[D.operator](w.evalAst(D.left, e), function() {
      return w.evalAst(D.right, e);
    });
    return t;
  },
  evalCompound: function(D, e) {
    for (var t, F = 0; F < D.body.length; F++) {
      D.body[F].type === "Identifier" && ["var", "let", "const"].includes(D.body[F].name) && D.body[F + 1] && D.body[F + 1].type === "AssignmentExpression" && (F += 1);
      var n = D.body[F];
      t = w.evalAst(n, e);
    }
    return t;
  },
  evalConditionalExpression: function(D, e) {
    return w.evalAst(D.test, e) ? w.evalAst(D.consequent, e) : w.evalAst(D.alternate, e);
  },
  evalIdentifier: function(D, e) {
    if (D.name in e)
      return e[D.name];
    throw ReferenceError("".concat(D.name, " is not defined"));
  },
  evalLiteral: function(D) {
    return D.value;
  },
  evalMemberExpression: function(D, e) {
    var t = D.computed ? w.evalAst(D.property) : D.property.name, F = w.evalAst(D.object, e), n = F[t];
    return typeof n == "function" ? n.bind(F) : n;
  },
  evalUnaryExpression: function(D, e) {
    var t = {
      "-": function(n) {
        return -w.evalAst(n, e);
      },
      "!": function(n) {
        return !w.evalAst(n, e);
      },
      "~": function(n) {
        return ~w.evalAst(n, e);
      },
      // eslint-disable-next-line no-implicit-coercion
      "+": function(n) {
        return +w.evalAst(n, e);
      }
    }[D.operator](D.argument);
    return t;
  },
  evalArrayExpression: function(D, e) {
    return D.elements.map(function(t) {
      return w.evalAst(t, e);
    });
  },
  evalCallExpression: function(D, e) {
    var t = D.arguments.map(function(n) {
      return w.evalAst(n, e);
    }), F = w.evalAst(D.callee, e);
    return F.apply(void 0, OD(t));
  },
  evalAssignmentExpression: function(D, e) {
    if (D.left.type !== "Identifier")
      throw SyntaxError("Invalid left-hand side in assignment");
    var t = D.left.name, F = w.evalAst(D.right, e);
    return e[t] = F, e[t];
  }
}, qE = /* @__PURE__ */ function() {
  function u(D) {
    fu(this, u), this.code = D, this.ast = Bu(this.code);
  }
  return hu(u, [{
    key: "runInNewContext",
    value: function(e) {
      var t = _E({}, e);
      return w.evalAst(this.ast, t);
    }
  }]);
}(), XE = /* @__PURE__ */ function() {
  function u(D) {
    fu(this, u), this.code = D;
  }
  return hu(u, [{
    key: "runInNewContext",
    value: function(e) {
      var t = this.code, F = Object.keys(e), n = [];
      KE(F, n, function(i) {
        return typeof e[i] == "function";
      });
      var r = F.map(function(i) {
        return e[i];
      }), E = n.reduce(function(i, A) {
        var o = e[A].toString();
        return /function/.test(o) || (o = "function " + o), "var " + A + "=" + o + ";" + i;
      }, "");
      t = E + t, !/(["'])use strict\1/.test(t) && !F.includes("arguments") && (t = "var arguments = undefined;" + t), t = t.replace(/;[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*$/, "");
      var C = t.lastIndexOf(";"), a = C > -1 ? t.slice(0, C + 1) + " return " + t.slice(C + 1) : " return " + t;
      return Ae(Function, F.concat([a])).apply(void 0, OD(r));
    }
  }]);
}();
g.prototype.vm = {
  Script: XE
};
g.prototype.safeVm = {
  Script: qE
};
const w0 = (u, D) => t0(u) || t0(D) ? null : (typeof D == "string" && /^\$\./.test(D) ? g({
  path: D,
  json: u
}) : H0(u, D)) ?? null, se = B.build("[^\\{\\}]*", {}, "gmx"), QE = B.build("[^\\|\\(\\)\\{\\}: 	]+", {}, "gmx"), JE = B.build("[^\\|\\(\\)\\{\\}]+", {}, "gmx"), VE = B.build(
  `
    \\|[ 	]*
      ({{filter}})
      ([ 	]*:[ 	]*({{args}}))*
      ({{tailing}})
  `,
  {
    filter: QE,
    args: JE,
    tailing: se
  },
  "gmx"
), ua = B.build("[^\\:\\|\\(\\)\\{\\}\v 	]+", {}, "gmx"), Da = B.build(
  `
    [ \\(]*[ 	]*
      ({{selector}})
    ([ 	](?=\\))*)?[ \\)]*
    ({{tailing}})
  `,
  {
    selector: ua,
    tailing: se
  },
  "gmx"
), x0 = B.build(
  `
    (\\{\\{[ 	]*
      ({{operator}})
    [ 	](?=\\})*\\}\\})
  `,
  { operator: Da },
  "gmx"
), _0 = (u, D) => D ? B.replace(
  D,
  x0,
  (...e) => {
    var E;
    const t = e0(e), F = (E = B.exec((t == null ? void 0 : t.tailing) ?? "", VE)) == null ? void 0 : E.groups, n = w0(u, t == null ? void 0 : t.selector);
    let r = n ?? "";
    try {
      if (F) {
        const a = ((F == null ? void 0 : F.args) ?? "").trim().split(/\s:\s/), i = pe();
        switch (F.filter) {
          case "date": {
            const A = a != null && a[1] ? w0(u, String(a == null ? void 0 : a[1])) ?? (a == null ? void 0 : a[1]) : i.timeZone.value;
            r = DE(
              new Date(n),
              isNaN(eE(A)) ? Intl.DateTimeFormat().resolvedOptions().timeZone : A,
              String((a == null ? void 0 : a[0]) ?? "yyyy-MM-dd")
            );
            break;
          }
          case "number":
            r = Number(n ?? 0);
            break;
          case "json":
            r = JSON.parse(n);
            break;
          case "stringify":
            r = JSON.stringify(n);
            break;
          case "trim":
            r = n.trim();
            break;
          case "upper":
            r = n.toUpperCase();
            break;
          case "lower":
            r = n.toLowerCase();
            break;
          case "capitalize":
            r = n.replace(/\b\w/g, (A) => A.toUpperCase());
            break;
          case "join":
            r = ir(n, a == null ? void 0 : a[0]);
            break;
          case "take":
            r = or(n, Number(a == null ? void 0 : a[0]));
            break;
          case "last":
            r = e0(n);
            break;
          case "flat":
            r = Fr(n);
            break;
          case "uniq":
            r = fr(n);
            break;
          case "wrap":
            if (!(a != null && a[0])) break;
            r = n.map((A) => ({ [a[0]]: A }));
            break;
          default:
            break;
        }
      }
      const C = ((F == null ? void 0 : F.tailing) ?? (t == null ? void 0 : t.tailing) ?? "").replace(/^\)/, "");
      C && (r = _0({ ...u, result: r }, `{{ result${C} }}`));
    } catch (C) {
      return C;
    }
    return x0.test(r) && (r = _0(u, r)), r;
  },
  "all"
) : "", fa = new Proxy(String, {
  get(u, D, e) {
    return D === "toKebabCase" ? (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, "-").toLowerCase() : D === "toUpperCase" || D === "toLocaleUpperCase" ? (t, F = "every") => {
      switch (F) {
        case "every":
          return t[D]();
        case "eachFirst":
          return t.split(" ").map((n) => n.charAt(0)[D]() + n.slice(1)).join(" ");
        case "onlyFirst":
          return t.charAt(0)[D]() + t.slice(1);
      }
    } : D === "humanizeByte" ? (t, F = 1024) => {
      const n = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], r = Math.floor(Math.log(t) / Math.log(F));
      return `${(t / Math.pow(F, r)).toFixed(2)} ${n[r]}`;
    } : Reflect.get(u, D, e);
  }
});
var P = [];
for (var rD = 0; rD < 256; ++rD)
  P.push((rD + 256).toString(16).slice(1));
function ea(u, D = 0) {
  return (P[u[D + 0]] + P[u[D + 1]] + P[u[D + 2]] + P[u[D + 3]] + "-" + P[u[D + 4]] + P[u[D + 5]] + "-" + P[u[D + 6]] + P[u[D + 7]] + "-" + P[u[D + 8]] + P[u[D + 9]] + "-" + P[u[D + 10]] + P[u[D + 11]] + P[u[D + 12]] + P[u[D + 13]] + P[u[D + 14]] + P[u[D + 15]]).toLowerCase();
}
var Mu, ta = new Uint8Array(16);
function Fa() {
  if (!Mu && (Mu = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Mu))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Mu(ta);
}
var na = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const v0 = {
  randomUUID: na
};
function ra(u, D, e) {
  if (v0.randomUUID && !D && !u)
    return v0.randomUUID();
  u = u || {};
  var t = u.random || (u.rng || Fa)();
  return t[6] = t[6] & 15 | 64, t[8] = t[8] & 63 | 128, ea(t);
}
const Ea = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i, aa = /^[0-9a-f]{12}[0-5][0-9a-f]{3}[089ab][0-9a-f]{3}[0-9a-f]{12}$/i, SD = (u, D) => {
  if (u) {
    if (Ea.test(u) || D)
      return u;
    throw new Error(`Invalid UUID format: ${u}`);
  }
  return ra();
}, ha = SD("00000000-0000-0000-0000-000000000000");
function da(u, D = !1) {
  if (!D && !aa.test(u))
    throw new Error(`Invalid HexUUID format: ${u}`);
  return SD(
    `${u.slice(0, 8)}-${u.slice(8, 12)}-${u.slice(12, 16)}-${u.slice(
      16,
      20
    )}-${u.slice(20, 32)}`,
    D
  );
}
function pa(u, D = !1) {
  return SD(u, D).replace(/-/gm, "");
}
export {
  z0 as $,
  VF as A,
  XF as B,
  W0 as C,
  un as D,
  QD as E,
  Y as F,
  z as G,
  da as H,
  jD as I,
  Qt as J,
  ku as K,
  G as L,
  gu as M,
  ha as N,
  zD as O,
  P0 as P,
  Bn as Q,
  Y0 as R,
  fa as S,
  YF as T,
  pa as U,
  j0 as V,
  zu as W,
  e0 as X,
  Ye as Y,
  qF as Z,
  vu as _,
  AD as a,
  Bt as a0,
  Rn as a1,
  Ln as a2,
  N0 as a3,
  er as a4,
  Hn as a5,
  V as a6,
  t0 as a7,
  fr as a8,
  tr as a9,
  oa as aa,
  Fr as ab,
  _D as ac,
  ca as ad,
  la as ae,
  ge as b,
  ia as c,
  SD as d,
  Dr as e,
  Xn as f,
  Ba as g,
  gD as h,
  R as i,
  Uu as j,
  wu as k,
  $D as l,
  Ge as m,
  M0 as n,
  k0 as o,
  _0 as p,
  ju as q,
  DF as r,
  w0 as s,
  jF as t,
  sa as u,
  eF as v,
  su as w,
  cu as x,
  hD as y,
  Z as z
};
//# sourceMappingURL=uuid-64OgEaoj.js.map
