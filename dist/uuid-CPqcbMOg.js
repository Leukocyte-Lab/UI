import { computed as ae, shallowRef as Ae, triggerRef as ie, readonly as se } from "vue";
import { u as oe } from "./i18n.service-JsWnUUar.js";
const b0 = /* @__PURE__ */ Symbol("SIGNAL_DEBUG_INSPECTION"), Be = (u) => {
  const D = Ae(u), e = () => se(D).value;
  return e.set = (t) => {
    D.value = t;
  }, e.update = (t) => {
    D.value = t(D.value);
  }, e.mutate = (t) => {
    t(D.value), ie(D);
  }, e[b0] = D, e;
}, XE = (u) => {
  const D = ae(u);
  return () => D.value;
}, QE = (u) => u.update((D) => !D), VE = (u) => u[b0], JE = (u, { debounce: D = 300, flush: e = "pre", syncWithDebounce: t } = {}) => {
  const { triggered: F, onTrigger: n } = ce(
    (E) => {
      u?.call({}, E);
    },
    { debounce: D, flush: e, syncWithDebounce: t }
  );
  return {
    triggered: F,
    onTrigger: (E) => {
      e === "post" && (E.preventDefault(), E.stopPropagation()), n(E);
    }
  };
}, ce = (u, { debounce: D = 300, flush: e = "pre", syncWithDebounce: t } = {}) => {
  const F = Be(!1);
  let n, r, E = !1;
  const a = () => {
    globalThis.clearTimeout(n), n = globalThis.setTimeout(() => {
      if (F.set(!1), e === "post" || e === "sync" && !t) {
        u?.call({}, ...r), r = void 0;
        return;
      }
      if (e === "sync" && t && E) {
        const s = r;
        r = void 0, E = !1, u?.call({}, ...s), F.set(!0), a();
      }
    }, D);
  };
  return {
    triggered: F,
    onTrigger: (...s) => {
      if (!F() && e === "pre")
        u?.call({}, ...s);
      else if (e === "sync")
        if (t)
          if (!F())
            u?.call({}, ...s);
          else {
            r = s, E = !0;
            return;
          }
        else {
          u?.call({}, ...s);
          return;
        }
      (e !== "sync" || t) && (F.set(!0), r = s, a());
    }
  };
};
class nu extends Map {
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
  findLast(D, e) {
    let t;
    for (const [F, n] of this)
      D.call(e, n, F, this) && (t = [F, n]);
    return t;
  }
  findLastKey(D, e) {
    let t;
    for (const [F, n] of this)
      D.call(e, n, F, this) && (t = F);
    return t;
  }
  findLastValue(D, e) {
    let t;
    for (const [F, n] of this)
      D.call(e, n, F, this) && (t = n);
    return t;
  }
  map(D, e) {
    const t = new nu();
    for (const [F, n] of this) {
      const [r, E] = D.call(e, n, F, this);
      t.set(r, E);
    }
    return t;
  }
  mapWithIndex(D, e) {
    const t = new nu();
    let F = 0;
    for (const [n, r] of this) {
      const [E, a] = D.call(e, r, n, F, this);
      t.set(E, a), F++;
    }
    return t;
  }
  filter(D, e) {
    const t = new nu();
    for (const [F, n] of this)
      D.call(e, n, F, this) && t.set(F, n);
    return t;
  }
  groupBy(D, e) {
    const t = new nu();
    let F = 0;
    for (const n of D) {
      const r = e(n, F), E = t.get(r) ?? [];
      E.push(n), t.set(r, E), F++;
    }
    return t;
  }
  reduce(D, e, t) {
    let F = e;
    for (const [n, r] of this)
      F = D.call(t, F, r, n, this);
    return F;
  }
  reduceRight(D, e, t) {
    let F = e;
    const n = Array.from(this.entries()).reverse();
    for (const [r, E] of n)
      F = D.call(t, F, E, r, this);
    return F;
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
    return new nu(Object.entries(D));
  }
}
var y0 = typeof global == "object" && global && global.Object === Object && global, le = typeof self == "object" && self && self.Object === Object && self, W = y0 || le || Function("return this")(), R = W.Symbol, w0 = Object.prototype, fe = w0.hasOwnProperty, he = w0.toString, cu = R ? R.toStringTag : void 0;
function de(u) {
  var D = fe.call(u, cu), e = u[cu];
  try {
    u[cu] = void 0;
    var t = !0;
  } catch {
  }
  var F = he.call(u);
  return t && (D ? u[cu] = e : delete u[cu]), F;
}
var pe = Object.prototype, me = pe.toString;
function ge(u) {
  return me.call(u);
}
var be = "[object Null]", ye = "[object Undefined]", bD = R ? R.toStringTag : void 0;
function su(u) {
  return u == null ? u === void 0 ? ye : be : bD && bD in Object(u) ? de(u) : ge(u);
}
function iu(u) {
  return u != null && typeof u == "object";
}
var we = "[object Symbol]";
function Nu(u) {
  return typeof u == "symbol" || iu(u) && su(u) == we;
}
function x0(u, D) {
  for (var e = -1, t = u == null ? 0 : u.length, F = Array(t); ++e < t; )
    F[e] = D(u[e], e, u);
  return F;
}
var N = Array.isArray, yD = R ? R.prototype : void 0, wD = yD ? yD.toString : void 0;
function O0(u) {
  if (typeof u == "string")
    return u;
  if (N(u))
    return x0(u, O0) + "";
  if (Nu(u))
    return wD ? wD.call(u) : "";
  var D = u + "";
  return D == "0" && 1 / u == -1 / 0 ? "-0" : D;
}
var xe = /\s/;
function Oe(u) {
  for (var D = u.length; D-- && xe.test(u.charAt(D)); )
    ;
  return D;
}
var _e = /^\s+/;
function Se(u) {
  return u && u.slice(0, Oe(u) + 1).replace(_e, "");
}
function pu(u) {
  var D = typeof u;
  return u != null && (D == "object" || D == "function");
}
var xD = NaN, Te = /^[-+]0x[0-9a-f]+$/i, Pe = /^0b[01]+$/i, ve = /^0o[0-7]+$/i, Me = parseInt;
function Ne(u) {
  if (typeof u == "number")
    return u;
  if (Nu(u))
    return xD;
  if (pu(u)) {
    var D = typeof u.valueOf == "function" ? u.valueOf() : u;
    u = pu(D) ? D + "" : D;
  }
  if (typeof u != "string")
    return u === 0 ? u : +u;
  u = Se(u);
  var e = Pe.test(u);
  return e || ve.test(u) ? Me(u.slice(2), e ? 2 : 8) : Te.test(u) ? xD : +u;
}
var OD = 1 / 0, Ie = 17976931348623157e292;
function $e(u) {
  if (!u)
    return u === 0 ? u : 0;
  if (u = Ne(u), u === OD || u === -OD) {
    var D = u < 0 ? -1 : 1;
    return D * Ie;
  }
  return u === u ? u : 0;
}
function ke(u) {
  var D = $e(u), e = D % 1;
  return D === D ? e ? D - e : D : 0;
}
function Re(u) {
  return u;
}
var Le = "[object AsyncFunction]", Ue = "[object Function]", je = "[object GeneratorFunction]", Ye = "[object Proxy]";
function _0(u) {
  if (!pu(u))
    return !1;
  var D = su(u);
  return D == Ue || D == je || D == Le || D == Ye;
}
var Hu = W["__core-js_shared__"], _D = (function() {
  var u = /[^.]+$/.exec(Hu && Hu.keys && Hu.keys.IE_PROTO || "");
  return u ? "Symbol(src)_1." + u : "";
})();
function He(u) {
  return !!_D && _D in u;
}
var We = Function.prototype, Ge = We.toString;
function uu(u) {
  if (u != null) {
    try {
      return Ge.call(u);
    } catch {
    }
    try {
      return u + "";
    } catch {
    }
  }
  return "";
}
var ze = /[\\^$.*+?()[\]{}|]/g, qe = /^\[object .+?Constructor\]$/, Ze = Function.prototype, Ke = Object.prototype, Xe = Ze.toString, Qe = Ke.hasOwnProperty, Ve = RegExp(
  "^" + Xe.call(Qe).replace(ze, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Je(u) {
  if (!pu(u) || He(u))
    return !1;
  var D = _0(u) ? Ve : qe;
  return D.test(uu(u));
}
function ut(u, D) {
  return u?.[D];
}
function Du(u, D) {
  var e = ut(u, D);
  return Je(e) ? e : void 0;
}
var tD = Du(W, "WeakMap");
function Dt() {
}
var SD = (function() {
  try {
    var u = Du(Object, "defineProperty");
    return u({}, "", {}), u;
  } catch {
  }
})();
function et(u, D, e, t) {
  for (var F = u.length, n = e + -1; ++n < F; )
    if (D(u[n], n, u))
      return n;
  return -1;
}
function tt(u) {
  return u !== u;
}
function Ft(u, D, e) {
  for (var t = e - 1, F = u.length; ++t < F; )
    if (u[t] === D)
      return t;
  return -1;
}
function nt(u, D, e) {
  return D === D ? Ft(u, D, e) : et(u, tt, e);
}
function rt(u, D) {
  var e = u == null ? 0 : u.length;
  return !!e && nt(u, D, 0) > -1;
}
var Et = 9007199254740991, Ct = /^(?:0|[1-9]\d*)$/;
function S0(u, D) {
  var e = typeof u;
  return D = D ?? Et, !!D && (e == "number" || e != "symbol" && Ct.test(u)) && u > -1 && u % 1 == 0 && u < D;
}
function uC(u, D, e) {
  D == "__proto__" && SD ? SD(u, D, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : u[D] = e;
}
function T0(u, D) {
  return u === D || u !== u && D !== D;
}
var at = 9007199254740991;
function AD(u) {
  return typeof u == "number" && u > -1 && u % 1 == 0 && u <= at;
}
function Iu(u) {
  return u != null && AD(u.length) && !_0(u);
}
var At = Object.prototype;
function P0(u) {
  var D = u && u.constructor, e = typeof D == "function" && D.prototype || At;
  return u === e;
}
function it(u, D) {
  for (var e = -1, t = Array(u); ++e < u; )
    t[e] = D(e);
  return t;
}
var st = "[object Arguments]";
function TD(u) {
  return iu(u) && su(u) == st;
}
var v0 = Object.prototype, ot = v0.hasOwnProperty, Bt = v0.propertyIsEnumerable, $u = TD(/* @__PURE__ */ (function() {
  return arguments;
})()) ? TD : function(u) {
  return iu(u) && ot.call(u, "callee") && !Bt.call(u, "callee");
};
function ct() {
  return !1;
}
var M0 = typeof exports == "object" && exports && !exports.nodeType && exports, PD = M0 && typeof module == "object" && module && !module.nodeType && module, lt = PD && PD.exports === M0, vD = lt ? W.Buffer : void 0, ft = vD ? vD.isBuffer : void 0, Tu = ft || ct, ht = "[object Arguments]", dt = "[object Array]", pt = "[object Boolean]", mt = "[object Date]", gt = "[object Error]", bt = "[object Function]", yt = "[object Map]", wt = "[object Number]", xt = "[object Object]", Ot = "[object RegExp]", _t = "[object Set]", St = "[object String]", Tt = "[object WeakMap]", Pt = "[object ArrayBuffer]", vt = "[object DataView]", Mt = "[object Float32Array]", Nt = "[object Float64Array]", It = "[object Int8Array]", $t = "[object Int16Array]", kt = "[object Int32Array]", Rt = "[object Uint8Array]", Lt = "[object Uint8ClampedArray]", Ut = "[object Uint16Array]", jt = "[object Uint32Array]", w = {};
w[Mt] = w[Nt] = w[It] = w[$t] = w[kt] = w[Rt] = w[Lt] = w[Ut] = w[jt] = !0;
w[ht] = w[dt] = w[Pt] = w[pt] = w[vt] = w[mt] = w[gt] = w[bt] = w[yt] = w[wt] = w[xt] = w[Ot] = w[_t] = w[St] = w[Tt] = !1;
function Yt(u) {
  return iu(u) && AD(u.length) && !!w[su(u)];
}
function Ht(u) {
  return function(D) {
    return u(D);
  };
}
var N0 = typeof exports == "object" && exports && !exports.nodeType && exports, du = N0 && typeof module == "object" && module && !module.nodeType && module, Wt = du && du.exports === N0, Wu = Wt && y0.process, MD = (function() {
  try {
    var u = du && du.require && du.require("util").types;
    return u || Wu && Wu.binding && Wu.binding("util");
  } catch {
  }
})(), ND = MD && MD.isTypedArray, iD = ND ? Ht(ND) : Yt, Gt = Object.prototype, zt = Gt.hasOwnProperty;
function qt(u, D) {
  var e = N(u), t = !e && $u(u), F = !e && !t && Tu(u), n = !e && !t && !F && iD(u), r = e || t || F || n, E = r ? it(u.length, String) : [], a = E.length;
  for (var C in u)
    (D || zt.call(u, C)) && !(r && // Safari 9 has enumerable `arguments.length` in strict mode.
    (C == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    F && (C == "offset" || C == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    n && (C == "buffer" || C == "byteLength" || C == "byteOffset") || // Skip index properties.
    S0(C, a))) && E.push(C);
  return E;
}
function Zt(u, D) {
  return function(e) {
    return u(D(e));
  };
}
var Kt = Zt(Object.keys, Object), Xt = Object.prototype, Qt = Xt.hasOwnProperty;
function I0(u) {
  if (!P0(u))
    return Kt(u);
  var D = [];
  for (var e in Object(u))
    Qt.call(u, e) && e != "constructor" && D.push(e);
  return D;
}
function sD(u) {
  return Iu(u) ? qt(u) : I0(u);
}
var Vt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Jt = /^\w*$/;
function oD(u, D) {
  if (N(u))
    return !1;
  var e = typeof u;
  return e == "number" || e == "symbol" || e == "boolean" || u == null || Nu(u) ? !0 : Jt.test(u) || !Vt.test(u) || D != null && u in Object(D);
}
var mu = Du(Object, "create");
function uF() {
  this.__data__ = mu ? mu(null) : {}, this.size = 0;
}
function DF(u) {
  var D = this.has(u) && delete this.__data__[u];
  return this.size -= D ? 1 : 0, D;
}
var eF = "__lodash_hash_undefined__", tF = Object.prototype, FF = tF.hasOwnProperty;
function nF(u) {
  var D = this.__data__;
  if (mu) {
    var e = D[u];
    return e === eF ? void 0 : e;
  }
  return FF.call(D, u) ? D[u] : void 0;
}
var rF = Object.prototype, EF = rF.hasOwnProperty;
function CF(u) {
  var D = this.__data__;
  return mu ? D[u] !== void 0 : EF.call(D, u);
}
var aF = "__lodash_hash_undefined__";
function AF(u, D) {
  var e = this.__data__;
  return this.size += this.has(u) ? 0 : 1, e[u] = mu && D === void 0 ? aF : D, this;
}
function Q(u) {
  var D = -1, e = u == null ? 0 : u.length;
  for (this.clear(); ++D < e; ) {
    var t = u[D];
    this.set(t[0], t[1]);
  }
}
Q.prototype.clear = uF;
Q.prototype.delete = DF;
Q.prototype.get = nF;
Q.prototype.has = CF;
Q.prototype.set = AF;
function iF() {
  this.__data__ = [], this.size = 0;
}
function ku(u, D) {
  for (var e = u.length; e--; )
    if (T0(u[e][0], D))
      return e;
  return -1;
}
var sF = Array.prototype, oF = sF.splice;
function BF(u) {
  var D = this.__data__, e = ku(D, u);
  if (e < 0)
    return !1;
  var t = D.length - 1;
  return e == t ? D.pop() : oF.call(D, e, 1), --this.size, !0;
}
function cF(u) {
  var D = this.__data__, e = ku(D, u);
  return e < 0 ? void 0 : D[e][1];
}
function lF(u) {
  return ku(this.__data__, u) > -1;
}
function fF(u, D) {
  var e = this.__data__, t = ku(e, u);
  return t < 0 ? (++this.size, e.push([u, D])) : e[t][1] = D, this;
}
function G(u) {
  var D = -1, e = u == null ? 0 : u.length;
  for (this.clear(); ++D < e; ) {
    var t = u[D];
    this.set(t[0], t[1]);
  }
}
G.prototype.clear = iF;
G.prototype.delete = BF;
G.prototype.get = cF;
G.prototype.has = lF;
G.prototype.set = fF;
var gu = Du(W, "Map");
function hF() {
  this.size = 0, this.__data__ = {
    hash: new Q(),
    map: new (gu || G)(),
    string: new Q()
  };
}
function dF(u) {
  var D = typeof u;
  return D == "string" || D == "number" || D == "symbol" || D == "boolean" ? u !== "__proto__" : u === null;
}
function Ru(u, D) {
  var e = u.__data__;
  return dF(D) ? e[typeof D == "string" ? "string" : "hash"] : e.map;
}
function pF(u) {
  var D = Ru(this, u).delete(u);
  return this.size -= D ? 1 : 0, D;
}
function mF(u) {
  return Ru(this, u).get(u);
}
function gF(u) {
  return Ru(this, u).has(u);
}
function bF(u, D) {
  var e = Ru(this, u), t = e.size;
  return e.set(u, D), this.size += e.size == t ? 0 : 1, this;
}
function z(u) {
  var D = -1, e = u == null ? 0 : u.length;
  for (this.clear(); ++D < e; ) {
    var t = u[D];
    this.set(t[0], t[1]);
  }
}
z.prototype.clear = hF;
z.prototype.delete = pF;
z.prototype.get = mF;
z.prototype.has = gF;
z.prototype.set = bF;
var yF = "Expected a function";
function BD(u, D) {
  if (typeof u != "function" || D != null && typeof D != "function")
    throw new TypeError(yF);
  var e = function() {
    var t = arguments, F = D ? D.apply(this, t) : t[0], n = e.cache;
    if (n.has(F))
      return n.get(F);
    var r = u.apply(this, t);
    return e.cache = n.set(F, r) || n, r;
  };
  return e.cache = new (BD.Cache || z)(), e;
}
BD.Cache = z;
var wF = 500;
function xF(u) {
  var D = BD(u, function(t) {
    return e.size === wF && e.clear(), t;
  }), e = D.cache;
  return D;
}
var OF = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, _F = /\\(\\)?/g, SF = xF(function(u) {
  var D = [];
  return u.charCodeAt(0) === 46 && D.push(""), u.replace(OF, function(e, t, F, n) {
    D.push(F ? n.replace(_F, "$1") : t || e);
  }), D;
});
function TF(u) {
  return u == null ? "" : O0(u);
}
function $0(u, D) {
  return N(u) ? u : oD(u, D) ? [u] : SF(TF(u));
}
function Lu(u) {
  if (typeof u == "string" || Nu(u))
    return u;
  var D = u + "";
  return D == "0" && 1 / u == -1 / 0 ? "-0" : D;
}
function k0(u, D) {
  D = $0(D, u);
  for (var e = 0, t = D.length; u != null && e < t; )
    u = u[Lu(D[e++])];
  return e && e == t ? u : void 0;
}
function R0(u, D, e) {
  var t = u == null ? void 0 : k0(u, D);
  return t === void 0 ? e : t;
}
function L0(u, D) {
  for (var e = -1, t = D.length, F = u.length; ++e < t; )
    u[F + e] = D[e];
  return u;
}
var ID = R ? R.isConcatSpreadable : void 0;
function PF(u) {
  return N(u) || $u(u) || !!(ID && u && u[ID]);
}
function vF(u, D, e, t, F) {
  var n = -1, r = u.length;
  for (e || (e = PF), F || (F = []); ++n < r; ) {
    var E = u[n];
    e(E) ? L0(F, E) : F[F.length] = E;
  }
  return F;
}
function MF(u, D, e) {
  var t = -1, F = u.length;
  D < 0 && (D = -D > F ? 0 : F + D), e = e > F ? F : e, e < 0 && (e += F), F = D > e ? 0 : e - D >>> 0, D >>>= 0;
  for (var n = Array(F); ++t < F; )
    n[t] = u[t + D];
  return n;
}
function NF() {
  this.__data__ = new G(), this.size = 0;
}
function IF(u) {
  var D = this.__data__, e = D.delete(u);
  return this.size = D.size, e;
}
function $F(u) {
  return this.__data__.get(u);
}
function kF(u) {
  return this.__data__.has(u);
}
var RF = 200;
function LF(u, D) {
  var e = this.__data__;
  if (e instanceof G) {
    var t = e.__data__;
    if (!gu || t.length < RF - 1)
      return t.push([u, D]), this.size = ++e.size, this;
    e = this.__data__ = new z(t);
  }
  return e.set(u, D), this.size = e.size, this;
}
function Y(u) {
  var D = this.__data__ = new G(u);
  this.size = D.size;
}
Y.prototype.clear = NF;
Y.prototype.delete = IF;
Y.prototype.get = $F;
Y.prototype.has = kF;
Y.prototype.set = LF;
function UF(u, D) {
  for (var e = -1, t = u == null ? 0 : u.length, F = 0, n = []; ++e < t; ) {
    var r = u[e];
    D(r, e, u) && (n[F++] = r);
  }
  return n;
}
function jF() {
  return [];
}
var YF = Object.prototype, HF = YF.propertyIsEnumerable, $D = Object.getOwnPropertySymbols, WF = $D ? function(u) {
  return u == null ? [] : (u = Object(u), UF($D(u), function(D) {
    return HF.call(u, D);
  }));
} : jF;
function GF(u, D, e) {
  var t = D(u);
  return N(u) ? t : L0(t, e(u));
}
function kD(u) {
  return GF(u, sD, WF);
}
var FD = Du(W, "DataView"), nD = Du(W, "Promise"), au = Du(W, "Set"), RD = "[object Map]", zF = "[object Object]", LD = "[object Promise]", UD = "[object Set]", jD = "[object WeakMap]", YD = "[object DataView]", qF = uu(FD), ZF = uu(gu), KF = uu(nD), XF = uu(au), QF = uu(tD), j = su;
(FD && j(new FD(new ArrayBuffer(1))) != YD || gu && j(new gu()) != RD || nD && j(nD.resolve()) != LD || au && j(new au()) != UD || tD && j(new tD()) != jD) && (j = function(u) {
  var D = su(u), e = D == zF ? u.constructor : void 0, t = e ? uu(e) : "";
  if (t)
    switch (t) {
      case qF:
        return YD;
      case ZF:
        return RD;
      case KF:
        return LD;
      case XF:
        return UD;
      case QF:
        return jD;
    }
  return D;
});
var HD = W.Uint8Array, VF = "__lodash_hash_undefined__";
function JF(u) {
  return this.__data__.set(u, VF), this;
}
function un(u) {
  return this.__data__.has(u);
}
function bu(u) {
  var D = -1, e = u == null ? 0 : u.length;
  for (this.__data__ = new z(); ++D < e; )
    this.add(u[D]);
}
bu.prototype.add = bu.prototype.push = JF;
bu.prototype.has = un;
function Dn(u, D) {
  for (var e = -1, t = u == null ? 0 : u.length; ++e < t; )
    if (D(u[e], e, u))
      return !0;
  return !1;
}
function U0(u, D) {
  return u.has(D);
}
var en = 1, tn = 2;
function j0(u, D, e, t, F, n) {
  var r = e & en, E = u.length, a = D.length;
  if (E != a && !(r && a > E))
    return !1;
  var C = n.get(u), s = n.get(D);
  if (C && s)
    return C == D && s == u;
  var i = -1, B = !0, o = e & tn ? new bu() : void 0;
  for (n.set(u, D), n.set(D, u); ++i < E; ) {
    var c = u[i], f = D[i];
    if (t)
      var h = r ? t(f, c, i, D, u, n) : t(c, f, i, u, D, n);
    if (h !== void 0) {
      if (h)
        continue;
      B = !1;
      break;
    }
    if (o) {
      if (!Dn(D, function(p, y) {
        if (!U0(o, y) && (c === p || F(c, p, e, t, n)))
          return o.push(y);
      })) {
        B = !1;
        break;
      }
    } else if (!(c === f || F(c, f, e, t, n))) {
      B = !1;
      break;
    }
  }
  return n.delete(u), n.delete(D), B;
}
function Fn(u) {
  var D = -1, e = Array(u.size);
  return u.forEach(function(t, F) {
    e[++D] = [F, t];
  }), e;
}
function cD(u) {
  var D = -1, e = Array(u.size);
  return u.forEach(function(t) {
    e[++D] = t;
  }), e;
}
var nn = 1, rn = 2, En = "[object Boolean]", Cn = "[object Date]", an = "[object Error]", An = "[object Map]", sn = "[object Number]", on = "[object RegExp]", Bn = "[object Set]", cn = "[object String]", ln = "[object Symbol]", fn = "[object ArrayBuffer]", hn = "[object DataView]", WD = R ? R.prototype : void 0, Gu = WD ? WD.valueOf : void 0;
function dn(u, D, e, t, F, n, r) {
  switch (e) {
    case hn:
      if (u.byteLength != D.byteLength || u.byteOffset != D.byteOffset)
        return !1;
      u = u.buffer, D = D.buffer;
    case fn:
      return !(u.byteLength != D.byteLength || !n(new HD(u), new HD(D)));
    case En:
    case Cn:
    case sn:
      return T0(+u, +D);
    case an:
      return u.name == D.name && u.message == D.message;
    case on:
    case cn:
      return u == D + "";
    case An:
      var E = Fn;
    case Bn:
      var a = t & nn;
      if (E || (E = cD), u.size != D.size && !a)
        return !1;
      var C = r.get(u);
      if (C)
        return C == D;
      t |= rn, r.set(u, D);
      var s = j0(E(u), E(D), t, F, n, r);
      return r.delete(u), s;
    case ln:
      if (Gu)
        return Gu.call(u) == Gu.call(D);
  }
  return !1;
}
var pn = 1, mn = Object.prototype, gn = mn.hasOwnProperty;
function bn(u, D, e, t, F, n) {
  var r = e & pn, E = kD(u), a = E.length, C = kD(D), s = C.length;
  if (a != s && !r)
    return !1;
  for (var i = a; i--; ) {
    var B = E[i];
    if (!(r ? B in D : gn.call(D, B)))
      return !1;
  }
  var o = n.get(u), c = n.get(D);
  if (o && c)
    return o == D && c == u;
  var f = !0;
  n.set(u, D), n.set(D, u);
  for (var h = r; ++i < a; ) {
    B = E[i];
    var p = u[B], y = D[B];
    if (t)
      var O = r ? t(y, p, B, D, u, n) : t(p, y, B, u, D, n);
    if (!(O === void 0 ? p === y || F(p, y, e, t, n) : O)) {
      f = !1;
      break;
    }
    h || (h = B == "constructor");
  }
  if (f && !h) {
    var g = u.constructor, _ = D.constructor;
    g != _ && "constructor" in u && "constructor" in D && !(typeof g == "function" && g instanceof g && typeof _ == "function" && _ instanceof _) && (f = !1);
  }
  return n.delete(u), n.delete(D), f;
}
var yn = 1, GD = "[object Arguments]", zD = "[object Array]", _u = "[object Object]", wn = Object.prototype, qD = wn.hasOwnProperty;
function xn(u, D, e, t, F, n) {
  var r = N(u), E = N(D), a = r ? zD : j(u), C = E ? zD : j(D);
  a = a == GD ? _u : a, C = C == GD ? _u : C;
  var s = a == _u, i = C == _u, B = a == C;
  if (B && Tu(u)) {
    if (!Tu(D))
      return !1;
    r = !0, s = !1;
  }
  if (B && !s)
    return n || (n = new Y()), r || iD(u) ? j0(u, D, e, t, F, n) : dn(u, D, a, e, t, F, n);
  if (!(e & yn)) {
    var o = s && qD.call(u, "__wrapped__"), c = i && qD.call(D, "__wrapped__");
    if (o || c) {
      var f = o ? u.value() : u, h = c ? D.value() : D;
      return n || (n = new Y()), F(f, h, e, t, n);
    }
  }
  return B ? (n || (n = new Y()), bn(u, D, e, t, F, n)) : !1;
}
function lD(u, D, e, t, F) {
  return u === D ? !0 : u == null || D == null || !iu(u) && !iu(D) ? u !== u && D !== D : xn(u, D, e, t, lD, F);
}
var On = 1, _n = 2;
function Sn(u, D, e, t) {
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
    var E = r[0], a = u[E], C = r[1];
    if (r[2]) {
      if (a === void 0 && !(E in u))
        return !1;
    } else {
      var s = new Y(), i;
      if (!(i === void 0 ? lD(C, a, On | _n, t, s) : i))
        return !1;
    }
  }
  return !0;
}
function Y0(u) {
  return u === u && !pu(u);
}
function Tn(u) {
  for (var D = sD(u), e = D.length; e--; ) {
    var t = D[e], F = u[t];
    D[e] = [t, F, Y0(F)];
  }
  return D;
}
function H0(u, D) {
  return function(e) {
    return e == null ? !1 : e[u] === D && (D !== void 0 || u in Object(e));
  };
}
function Pn(u) {
  var D = Tn(u);
  return D.length == 1 && D[0][2] ? H0(D[0][0], D[0][1]) : function(e) {
    return e === u || Sn(e, u, D);
  };
}
function vn(u, D) {
  return u != null && D in Object(u);
}
function Mn(u, D, e) {
  D = $0(D, u);
  for (var t = -1, F = D.length, n = !1; ++t < F; ) {
    var r = Lu(D[t]);
    if (!(n = u != null && e(u, r)))
      break;
    u = u[r];
  }
  return n || ++t != F ? n : (F = u == null ? 0 : u.length, !!F && AD(F) && S0(r, F) && (N(u) || $u(u)));
}
function Nn(u, D) {
  return u != null && Mn(u, D, vn);
}
var In = 1, $n = 2;
function kn(u, D) {
  return oD(u) && Y0(D) ? H0(Lu(u), D) : function(e) {
    var t = R0(e, u);
    return t === void 0 && t === D ? Nn(e, u) : lD(D, t, In | $n);
  };
}
function Rn(u) {
  return function(D) {
    return D?.[u];
  };
}
function Ln(u) {
  return function(D) {
    return k0(D, u);
  };
}
function Un(u) {
  return oD(u) ? Rn(Lu(u)) : Ln(u);
}
function jn(u) {
  return typeof u == "function" ? u : u == null ? Re : typeof u == "object" ? N(u) ? kn(u[0], u[1]) : Pn(u) : Un(u);
}
function Yn(u) {
  return function(D, e, t) {
    for (var F = -1, n = Object(D), r = t(D), E = r.length; E--; ) {
      var a = r[++F];
      if (e(n[a], a, n) === !1)
        break;
    }
    return D;
  };
}
var Hn = Yn();
function Wn(u, D) {
  return u && Hn(u, D, sD);
}
function Gn(u, D) {
  return function(e, t) {
    if (e == null)
      return e;
    if (!Iu(e))
      return u(e, t);
    for (var F = e.length, n = -1, r = Object(e); ++n < F && t(r[n], n, r) !== !1; )
      ;
    return e;
  };
}
var zn = Gn(Wn);
function ZD(u) {
  var D = u == null ? 0 : u.length;
  return D ? u[D - 1] : void 0;
}
function qn(u, D) {
  var e = -1, t = Iu(u) ? Array(u.length) : [];
  return zn(u, function(F, n, r) {
    t[++e] = D(F, n, r);
  }), t;
}
function Zn(u, D) {
  var e = N(u) ? x0 : qn;
  return e(u, jn(D));
}
function Kn(u, D) {
  return vF(Zn(u, D));
}
function K(u) {
  for (var D = -1, e = u == null ? 0 : u.length, t = {}; ++D < e; ) {
    var F = u[D];
    t[F[0]] = F[1];
  }
  return t;
}
var Xn = "[object Map]", Qn = "[object Set]", Vn = Object.prototype, Jn = Vn.hasOwnProperty;
function KD(u) {
  if (u == null)
    return !0;
  if (Iu(u) && (N(u) || typeof u == "string" || typeof u.splice == "function" || Tu(u) || iD(u) || $u(u)))
    return !u.length;
  var D = j(u);
  if (D == Xn || D == Qn)
    return !u.size;
  if (P0(u))
    return !I0(u).length;
  for (var e in u)
    if (Jn.call(u, e))
      return !1;
  return !0;
}
var ur = Array.prototype, Dr = ur.join;
function er(u, D) {
  return u == null ? "" : Dr.call(u, D);
}
function tr(u, D, e) {
  return u && u.length ? (D = D === void 0 ? 1 : ke(D), MF(u, 0, D < 0 ? 0 : D)) : [];
}
var Fr = 1 / 0, nr = au && 1 / cD(new au([, -0]))[1] == Fr ? function(u) {
  return new au(u);
} : Dt, rr = 200;
function Er(u, D, e) {
  var t = -1, F = rt, n = u.length, r = !0, E = [], a = E;
  if (n >= rr) {
    var C = nr(u);
    if (C)
      return cD(C);
    r = !1, F = U0, a = new bu();
  } else
    a = E;
  u:
    for (; ++t < n; ) {
      var s = u[t], i = s;
      if (s = s !== 0 ? s : 0, r && i === i) {
        for (var B = a.length; B--; )
          if (a[B] === i)
            continue u;
        E.push(s);
      } else F(a, i, e) || (a !== E && a.push(i), E.push(s));
    }
  return E;
}
function Cr(u) {
  return u && u.length ? Er(u) : [];
}
const ar = 0.5522847498307935, Ar = (u, D, e, t = !1) => t ? u[e] - D[e] : Math.abs(u[e] - D[e]), ir = (u, D, e = !1) => {
  const t = Object.keys(u).map((F) => Ar(u, D, F, e));
  return e ? K(t.map((F, n) => [Object.keys(u)[n], F])) : Math.pow(
    t.reduce((F, n) => F + Math.pow(n, t.length), 0),
    1 / t.length
  );
}, sr = {
  get: (u, D, e) => /^ORIGIN_/.test(D) ? K(
    ["x", "y", "z", "w"].slice(0, Number(D.replace(/^ORIGIN_(\d)D/, "$1"))).map((t) => [t, 0])
  ) : /^delta/.test(D) ? (t, F, n) => D === "delta" ? ir(t, F, n) : Reflect.get(u, D, e) : D === "add" ? (t, F) => K(
    Object.keys(t).map((n) => [n, t[n] + F[n]])
  ) : D === "minus" ? (t, F) => K(
    Object.keys(t).map((n) => [n, t[n] - F[n]])
  ) : D === "times" ? (t, F) => K(
    Object.keys(t).map((n) => [
      n,
      t[n] * (Number(F) || F[n])
    ])
  ) : D === "divide" ? (t, F, n = !1) => K(
    Object.keys(t).map((r) => [
      r,
      ((E) => n ? Math.abs(E) : E)(t[r] / F[r])
    ])
  ) : D === "clamp" ? (t, F, n) => K(
    Object.keys(t).map((r) => [
      r,
      rD.clamp(t[r], F[r], n[r])
    ])
  ) : D === "middle" ? (t, F) => K(
    Object.keys(t).map((n) => [n, (t[n] + F[n]) / 2])
  ) : Reflect.get(u, D, e)
}, rD = new Proxy(Math, {
  get(u, D, e) {
    return D === "ARC_BASE" ? ar : D === "Vector" ? new Proxy({}, sr) : D === "deg" ? (t) => t * (180 / Math.PI) : D === "rad" ? (t) => t * (Math.PI / 180) : D === "gcd" ? (t, F) => F ? rD.gcd(F, t % F) : t : D === "lcm" ? (t, F) => t * F / rD.gcd(t, F) : D === "clamp" ? (t, F, n) => Math.min(Math.max(t, F), n) : D === "round" ? (t, F = 0) => Math.round(t * 10 ** F) / 10 ** F : D === "cot" ? (t) => 1 / Math.tan(t) : D === "sec" ? (t) => 1 / Math.cos(t) : D === "csc" ? (t) => 1 / Math.sin(t) : D === "avg" ? (...t) => t.length === 0 ? NaN : t.reduce((F, n) => F + n, 0) / t.length : D === "geoavg" ? (...t) => {
      if (t.length === 0) return NaN;
      if (t.some((n) => n <= 0)) return NaN;
      const F = t.reduce((n, r) => n + Math.log(r), 0);
      return Math.exp(F / t.length);
    } : Reflect.get(u, D, e);
  }
}), or = {
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
}, Br = (u, D, e) => {
  let t;
  const F = or[u];
  return typeof F == "string" ? t = F : D === 1 ? t = F.one : t = F.other.replace("{{count}}", D.toString()), e?.addSuffix ? e.comparison && e.comparison > 0 ? "in " + t : t + " ago" : t;
};
function zu(u) {
  return (D = {}) => {
    const e = D.width ? String(D.width) : u.defaultWidth;
    return u.formats[e] || u.formats[u.defaultWidth];
  };
}
const cr = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, lr = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, fr = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, hr = {
  date: zu({
    formats: cr,
    defaultWidth: "full"
  }),
  time: zu({
    formats: lr,
    defaultWidth: "full"
  }),
  dateTime: zu({
    formats: fr,
    defaultWidth: "full"
  })
}, dr = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, pr = (u, D, e, t) => dr[u];
function lu(u) {
  return (D, e) => {
    const t = e?.context ? String(e.context) : "standalone";
    let F;
    if (t === "formatting" && u.formattingValues) {
      const r = u.defaultFormattingWidth || u.defaultWidth, E = e?.width ? String(e.width) : r;
      F = u.formattingValues[E] || u.formattingValues[r];
    } else {
      const r = u.defaultWidth, E = e?.width ? String(e.width) : u.defaultWidth;
      F = u.values[E] || u.values[r];
    }
    const n = u.argumentCallback ? u.argumentCallback(D) : D;
    return F[n];
  };
}
const mr = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, gr = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, br = {
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
}, yr = {
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
}, wr = {
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
}, xr = {
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
}, Or = (u, D) => {
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
}, _r = {
  ordinalNumber: Or,
  era: lu({
    values: mr,
    defaultWidth: "wide"
  }),
  quarter: lu({
    values: gr,
    defaultWidth: "wide",
    argumentCallback: (u) => u - 1
  }),
  month: lu({
    values: br,
    defaultWidth: "wide"
  }),
  day: lu({
    values: yr,
    defaultWidth: "wide"
  }),
  dayPeriod: lu({
    values: wr,
    defaultWidth: "wide",
    formattingValues: xr,
    defaultFormattingWidth: "wide"
  })
};
function fu(u) {
  return (D, e = {}) => {
    const t = e.width, F = t && u.matchPatterns[t] || u.matchPatterns[u.defaultMatchWidth], n = D.match(F);
    if (!n)
      return null;
    const r = n[0], E = t && u.parsePatterns[t] || u.parsePatterns[u.defaultParseWidth], a = Array.isArray(E) ? Tr(E, (i) => i.test(r)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      Sr(E, (i) => i.test(r))
    );
    let C;
    C = u.valueCallback ? u.valueCallback(a) : a, C = e.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      e.valueCallback(C)
    ) : C;
    const s = D.slice(r.length);
    return { value: C, rest: s };
  };
}
function Sr(u, D) {
  for (const e in u)
    if (Object.prototype.hasOwnProperty.call(u, e) && D(u[e]))
      return e;
}
function Tr(u, D) {
  for (let e = 0; e < u.length; e++)
    if (D(u[e]))
      return e;
}
function Pr(u) {
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
const vr = /^(\d+)(th|st|nd|rd)?/i, Mr = /\d+/i, Nr = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Ir = {
  any: [/^b/i, /^(a|c)/i]
}, $r = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, kr = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Rr = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Lr = {
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
}, Ur = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, jr = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Yr = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Hr = {
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
}, Wr = {
  ordinalNumber: Pr({
    matchPattern: vr,
    parsePattern: Mr,
    valueCallback: (u) => parseInt(u, 10)
  }),
  era: fu({
    matchPatterns: Nr,
    defaultMatchWidth: "wide",
    parsePatterns: Ir,
    defaultParseWidth: "any"
  }),
  quarter: fu({
    matchPatterns: $r,
    defaultMatchWidth: "wide",
    parsePatterns: kr,
    defaultParseWidth: "any",
    valueCallback: (u) => u + 1
  }),
  month: fu({
    matchPatterns: Rr,
    defaultMatchWidth: "wide",
    parsePatterns: Lr,
    defaultParseWidth: "any"
  }),
  day: fu({
    matchPatterns: Ur,
    defaultMatchWidth: "wide",
    parsePatterns: jr,
    defaultParseWidth: "any"
  }),
  dayPeriod: fu({
    matchPatterns: Yr,
    defaultMatchWidth: "any",
    parsePatterns: Hr,
    defaultParseWidth: "any"
  })
}, Gr = {
  code: "en-US",
  formatDistance: Br,
  formatLong: hr,
  formatRelative: pr,
  localize: _r,
  match: Wr,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
let zr = {};
function xu() {
  return zr;
}
const W0 = 6048e5, qr = 864e5;
function $(u) {
  const D = Object.prototype.toString.call(u);
  return u instanceof Date || typeof u == "object" && D === "[object Date]" ? new u.constructor(+u) : typeof u == "number" || D === "[object Number]" || typeof u == "string" || D === "[object String]" ? new Date(u) : /* @__PURE__ */ new Date(NaN);
}
function XD(u) {
  const D = $(u);
  return D.setHours(0, 0, 0, 0), D;
}
function QD(u) {
  const D = $(u), e = new Date(
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
function Zr(u, D) {
  const e = XD(u), t = XD(D), F = +e - QD(e), n = +t - QD(t);
  return Math.round((F - n) / qr);
}
function V(u, D) {
  return u instanceof Date ? new u.constructor(D) : new Date(D);
}
function Kr(u) {
  const D = $(u), e = V(u, 0);
  return e.setFullYear(D.getFullYear(), 0, 1), e.setHours(0, 0, 0, 0), e;
}
function Xr(u) {
  const D = $(u);
  return Zr(D, Kr(D)) + 1;
}
function yu(u, D) {
  const e = xu(), t = D?.weekStartsOn ?? D?.locale?.options?.weekStartsOn ?? e.weekStartsOn ?? e.locale?.options?.weekStartsOn ?? 0, F = $(u), n = F.getDay(), r = (n < t ? 7 : 0) + n - t;
  return F.setDate(F.getDate() - r), F.setHours(0, 0, 0, 0), F;
}
function Pu(u) {
  return yu(u, { weekStartsOn: 1 });
}
function G0(u) {
  const D = $(u), e = D.getFullYear(), t = V(u, 0);
  t.setFullYear(e + 1, 0, 4), t.setHours(0, 0, 0, 0);
  const F = Pu(t), n = V(u, 0);
  n.setFullYear(e, 0, 4), n.setHours(0, 0, 0, 0);
  const r = Pu(n);
  return D.getTime() >= F.getTime() ? e + 1 : D.getTime() >= r.getTime() ? e : e - 1;
}
function Qr(u) {
  const D = G0(u), e = V(u, 0);
  return e.setFullYear(D, 0, 4), e.setHours(0, 0, 0, 0), Pu(e);
}
function Vr(u) {
  const D = $(u), e = +Pu(D) - +Qr(D);
  return Math.round(e / W0) + 1;
}
function z0(u, D) {
  const e = $(u), t = e.getFullYear(), F = xu(), n = D?.firstWeekContainsDate ?? D?.locale?.options?.firstWeekContainsDate ?? F.firstWeekContainsDate ?? F.locale?.options?.firstWeekContainsDate ?? 1, r = V(u, 0);
  r.setFullYear(t + 1, 0, n), r.setHours(0, 0, 0, 0);
  const E = yu(r, D), a = V(u, 0);
  a.setFullYear(t, 0, n), a.setHours(0, 0, 0, 0);
  const C = yu(a, D);
  return e.getTime() >= E.getTime() ? t + 1 : e.getTime() >= C.getTime() ? t : t - 1;
}
function Jr(u, D) {
  const e = xu(), t = D?.firstWeekContainsDate ?? D?.locale?.options?.firstWeekContainsDate ?? e.firstWeekContainsDate ?? e.locale?.options?.firstWeekContainsDate ?? 1, F = z0(u, D), n = V(u, 0);
  return n.setFullYear(F, 0, t), n.setHours(0, 0, 0, 0), yu(n, D);
}
function u1(u, D) {
  const e = $(u), t = +yu(e, D) - +Jr(e, D);
  return Math.round(t / W0) + 1;
}
function m(u, D) {
  const e = u < 0 ? "-" : "", t = Math.abs(u).toString().padStart(D, "0");
  return e + t;
}
const q = {
  // Year
  y(u, D) {
    const e = u.getFullYear(), t = e > 0 ? e : 1 - e;
    return m(D === "yy" ? t % 100 : t, D.length);
  },
  // Month
  M(u, D) {
    const e = u.getMonth();
    return D === "M" ? String(e + 1) : m(e + 1, 2);
  },
  // Day of the month
  d(u, D) {
    return m(u.getDate(), D.length);
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
      default:
        return e === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(u, D) {
    return m(u.getHours() % 12 || 12, D.length);
  },
  // Hour [0-23]
  H(u, D) {
    return m(u.getHours(), D.length);
  },
  // Minute
  m(u, D) {
    return m(u.getMinutes(), D.length);
  },
  // Second
  s(u, D) {
    return m(u.getSeconds(), D.length);
  },
  // Fraction of second
  S(u, D) {
    const e = D.length, t = u.getMilliseconds(), F = Math.trunc(
      t * Math.pow(10, e - 3)
    );
    return m(F, D.length);
  }
}, Fu = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, VD = {
  // Era
  G: function(u, D, e) {
    const t = u.getFullYear() > 0 ? 1 : 0;
    switch (D) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return e.era(t, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return e.era(t, { width: "narrow" });
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
    return q.y(u, D);
  },
  // Local week-numbering year
  Y: function(u, D, e, t) {
    const F = z0(u, t), n = F > 0 ? F : 1 - F;
    if (D === "YY") {
      const r = n % 100;
      return m(r, 2);
    }
    return D === "Yo" ? e.ordinalNumber(n, { unit: "year" }) : m(n, D.length);
  },
  // ISO week-numbering year
  R: function(u, D) {
    const e = G0(u);
    return m(e, D.length);
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
    return m(e, D.length);
  },
  // Quarter
  Q: function(u, D, e) {
    const t = Math.ceil((u.getMonth() + 1) / 3);
    switch (D) {
      // 1, 2, 3, 4
      case "Q":
        return String(t);
      // 01, 02, 03, 04
      case "QQ":
        return m(t, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return e.ordinalNumber(t, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return e.quarter(t, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return e.quarter(t, {
          width: "narrow",
          context: "formatting"
        });
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
      // 1, 2, 3, 4
      case "q":
        return String(t);
      // 01, 02, 03, 04
      case "qq":
        return m(t, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return e.ordinalNumber(t, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return e.quarter(t, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return e.quarter(t, {
          width: "narrow",
          context: "standalone"
        });
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
        return q.M(u, D);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return e.ordinalNumber(t + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return e.month(t, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return e.month(t, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return e.month(t, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(u, D, e) {
    const t = u.getMonth();
    switch (D) {
      // 1, 2, ..., 12
      case "L":
        return String(t + 1);
      // 01, 02, ..., 12
      case "LL":
        return m(t + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return e.ordinalNumber(t + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return e.month(t, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return e.month(t, {
          width: "narrow",
          context: "standalone"
        });
      default:
        return e.month(t, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(u, D, e, t) {
    const F = u1(u, t);
    return D === "wo" ? e.ordinalNumber(F, { unit: "week" }) : m(F, D.length);
  },
  // ISO week of year
  I: function(u, D, e) {
    const t = Vr(u);
    return D === "Io" ? e.ordinalNumber(t, { unit: "week" }) : m(t, D.length);
  },
  // Day of the month
  d: function(u, D, e) {
    return D === "do" ? e.ordinalNumber(u.getDate(), { unit: "date" }) : q.d(u, D);
  },
  // Day of year
  D: function(u, D, e) {
    const t = Xr(u);
    return D === "Do" ? e.ordinalNumber(t, { unit: "dayOfYear" }) : m(t, D.length);
  },
  // Day of week
  E: function(u, D, e) {
    const t = u.getDay();
    switch (D) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return e.day(t, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return e.day(t, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return e.day(t, {
          width: "short",
          context: "formatting"
        });
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
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(n);
      // Padded numerical value
      case "ee":
        return m(n, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return e.ordinalNumber(n, { unit: "day" });
      case "eee":
        return e.day(F, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return e.day(F, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return e.day(F, {
          width: "short",
          context: "formatting"
        });
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
      // Numerical value (same as in `e`)
      case "c":
        return String(n);
      // Padded numerical value
      case "cc":
        return m(n, D.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return e.ordinalNumber(n, { unit: "day" });
      case "ccc":
        return e.day(F, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return e.day(F, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return e.day(F, {
          width: "short",
          context: "standalone"
        });
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
      // 2
      case "i":
        return String(F);
      // 02
      case "ii":
        return m(F, D.length);
      // 2nd
      case "io":
        return e.ordinalNumber(F, { unit: "day" });
      // Tue
      case "iii":
        return e.day(t, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return e.day(t, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return e.day(t, {
          width: "short",
          context: "formatting"
        });
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
    switch (t === 12 ? F = Fu.noon : t === 0 ? F = Fu.midnight : F = t / 12 >= 1 ? "pm" : "am", D) {
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
    switch (t >= 17 ? F = Fu.evening : t >= 12 ? F = Fu.afternoon : t >= 4 ? F = Fu.morning : F = Fu.night, D) {
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
    return q.h(u, D);
  },
  // Hour [0-23]
  H: function(u, D, e) {
    return D === "Ho" ? e.ordinalNumber(u.getHours(), { unit: "hour" }) : q.H(u, D);
  },
  // Hour [0-11]
  K: function(u, D, e) {
    const t = u.getHours() % 12;
    return D === "Ko" ? e.ordinalNumber(t, { unit: "hour" }) : m(t, D.length);
  },
  // Hour [1-24]
  k: function(u, D, e) {
    let t = u.getHours();
    return t === 0 && (t = 24), D === "ko" ? e.ordinalNumber(t, { unit: "hour" }) : m(t, D.length);
  },
  // Minute
  m: function(u, D, e) {
    return D === "mo" ? e.ordinalNumber(u.getMinutes(), { unit: "minute" }) : q.m(u, D);
  },
  // Second
  s: function(u, D, e) {
    return D === "so" ? e.ordinalNumber(u.getSeconds(), { unit: "second" }) : q.s(u, D);
  },
  // Fraction of second
  S: function(u, D) {
    return q.S(u, D);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(u, D, e) {
    const t = u.getTimezoneOffset();
    if (t === 0)
      return "Z";
    switch (D) {
      // Hours and optional minutes
      case "X":
        return u0(t);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return X(t);
      // Hours and minutes with `:` delimiter
      default:
        return X(t, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(u, D, e) {
    const t = u.getTimezoneOffset();
    switch (D) {
      // Hours and optional minutes
      case "x":
        return u0(t);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return X(t);
      // Hours and minutes with `:` delimiter
      default:
        return X(t, ":");
    }
  },
  // Timezone (GMT)
  O: function(u, D, e) {
    const t = u.getTimezoneOffset();
    switch (D) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + JD(t, ":");
      default:
        return "GMT" + X(t, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(u, D, e) {
    const t = u.getTimezoneOffset();
    switch (D) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + JD(t, ":");
      default:
        return "GMT" + X(t, ":");
    }
  },
  // Seconds timestamp
  t: function(u, D, e) {
    const t = Math.trunc(u.getTime() / 1e3);
    return m(t, D.length);
  },
  // Milliseconds timestamp
  T: function(u, D, e) {
    const t = u.getTime();
    return m(t, D.length);
  }
};
function JD(u, D = "") {
  const e = u > 0 ? "-" : "+", t = Math.abs(u), F = Math.trunc(t / 60), n = t % 60;
  return n === 0 ? e + String(F) : e + String(F) + D + m(n, 2);
}
function u0(u, D) {
  return u % 60 === 0 ? (u > 0 ? "-" : "+") + m(Math.abs(u) / 60, 2) : X(u, D);
}
function X(u, D = "") {
  const e = u > 0 ? "-" : "+", t = Math.abs(u), F = m(Math.trunc(t / 60), 2), n = m(t % 60, 2);
  return e + F + D + n;
}
const D0 = (u, D) => {
  switch (u) {
    case "P":
      return D.date({ width: "short" });
    case "PP":
      return D.date({ width: "medium" });
    case "PPP":
      return D.date({ width: "long" });
    default:
      return D.date({ width: "full" });
  }
}, q0 = (u, D) => {
  switch (u) {
    case "p":
      return D.time({ width: "short" });
    case "pp":
      return D.time({ width: "medium" });
    case "ppp":
      return D.time({ width: "long" });
    default:
      return D.time({ width: "full" });
  }
}, D1 = (u, D) => {
  const e = u.match(/(P+)(p+)?/) || [], t = e[1], F = e[2];
  if (!F)
    return D0(u, D);
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
    default:
      n = D.dateTime({ width: "full" });
      break;
  }
  return n.replace("{{date}}", D0(t, D)).replace("{{time}}", q0(F, D));
}, e1 = {
  p: q0,
  P: D1
}, t1 = /^D+$/, F1 = /^Y+$/, n1 = ["D", "DD", "YY", "YYYY"];
function r1(u) {
  return t1.test(u);
}
function E1(u) {
  return F1.test(u);
}
function C1(u, D, e) {
  const t = a1(u, D, e);
  if (console.warn(t), n1.includes(u)) throw new RangeError(t);
}
function a1(u, D, e) {
  const t = u[0] === "Y" ? "years" : "days of the month";
  return `Use \`${u.toLowerCase()}\` instead of \`${u}\` (in \`${D}\`) for formatting ${t} to the input \`${e}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
function A1(u) {
  return u instanceof Date || typeof u == "object" && Object.prototype.toString.call(u) === "[object Date]";
}
function i1(u) {
  if (!A1(u) && typeof u != "number")
    return !1;
  const D = $(u);
  return !isNaN(Number(D));
}
const s1 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, o1 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, B1 = /^'([^]*?)'?$/, c1 = /''/g, l1 = /[a-zA-Z]/;
function f1(u, D, e) {
  const t = xu(), F = e?.locale ?? t.locale ?? Gr, n = e?.firstWeekContainsDate ?? e?.locale?.options?.firstWeekContainsDate ?? t.firstWeekContainsDate ?? t.locale?.options?.firstWeekContainsDate ?? 1, r = e?.weekStartsOn ?? e?.locale?.options?.weekStartsOn ?? t.weekStartsOn ?? t.locale?.options?.weekStartsOn ?? 0, E = $(u);
  if (!i1(E))
    throw new RangeError("Invalid time value");
  let a = D.match(o1).map((s) => {
    const i = s[0];
    if (i === "p" || i === "P") {
      const B = e1[i];
      return B(s, F.formatLong);
    }
    return s;
  }).join("").match(s1).map((s) => {
    if (s === "''")
      return { isToken: !1, value: "'" };
    const i = s[0];
    if (i === "'")
      return { isToken: !1, value: h1(s) };
    if (VD[i])
      return { isToken: !0, value: s };
    if (i.match(l1))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + i + "`"
      );
    return { isToken: !1, value: s };
  });
  F.localize.preprocessor && (a = F.localize.preprocessor(E, a));
  const C = {
    firstWeekContainsDate: n,
    weekStartsOn: r,
    locale: F
  };
  return a.map((s) => {
    if (!s.isToken) return s.value;
    const i = s.value;
    (!e?.useAdditionalWeekYearTokens && E1(i) || !e?.useAdditionalDayOfYearTokens && r1(i)) && C1(i, D, String(u));
    const B = VD[i[0]];
    return B(E, i, F.localize, C);
  }).join("");
}
function h1(u) {
  const D = u.match(B1);
  return D ? D[1].replace(c1, "'") : u;
}
function d1() {
  return Object.assign({}, xu());
}
function e0(u, D, e) {
  const t = d1(), F = g1(u, e.timeZone, e.locale ?? t.locale);
  return "formatToParts" in F ? p1(F, D) : m1(F, D);
}
function p1(u, D) {
  const e = u.formatToParts(D);
  for (let t = e.length - 1; t >= 0; --t)
    if (e[t].type === "timeZoneName")
      return e[t].value;
}
function m1(u, D) {
  const e = u.format(D).replace(/\u200E/g, ""), t = / [\w-+ ]+$/.exec(e);
  return t ? t[0].substr(1) : "";
}
function g1(u, D, e) {
  return new Intl.DateTimeFormat(e ? [e.code, "en-US"] : void 0, {
    timeZone: D,
    timeZoneName: u
  });
}
function b1(u, D) {
  const e = _1(D);
  return "formatToParts" in e ? w1(e, u) : x1(e, u);
}
const y1 = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function w1(u, D) {
  try {
    const e = u.formatToParts(D), t = [];
    for (let F = 0; F < e.length; F++) {
      const n = y1[e[F].type];
      n !== void 0 && (t[n] = parseInt(e[F].value, 10));
    }
    return t;
  } catch (e) {
    if (e instanceof RangeError)
      return [NaN];
    throw e;
  }
}
function x1(u, D) {
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
const qu = {}, t0 = new Intl.DateTimeFormat("en-US", {
  hourCycle: "h23",
  timeZone: "America/New_York",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
}).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), O1 = t0 === "06/25/2014, 00:00:00" || t0 === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
function _1(u) {
  return qu[u] || (qu[u] = O1 ? new Intl.DateTimeFormat("en-US", {
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
  })), qu[u];
}
function Z0(u, D, e, t, F, n, r) {
  const E = /* @__PURE__ */ new Date(0);
  return E.setUTCFullYear(u, D, e), E.setUTCHours(t, F, n, r), E;
}
const F0 = 36e5, S1 = 6e4, Zu = {
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/
};
function Uu(u, D, e) {
  if (!u)
    return 0;
  let t = Zu.timezoneZ.exec(u);
  if (t)
    return 0;
  let F, n;
  if (t = Zu.timezoneHH.exec(u), t)
    return F = parseInt(t[1], 10), n0(F) ? -(F * F0) : NaN;
  if (t = Zu.timezoneHHMM.exec(u), t) {
    F = parseInt(t[2], 10);
    const r = parseInt(t[3], 10);
    return n0(F, r) ? (n = Math.abs(F) * F0 + r * S1, t[1] === "+" ? -n : n) : NaN;
  }
  if (v1(u)) {
    D = new Date(D || Date.now());
    const r = e ? D : T1(D), E = ED(r, u);
    return -(e ? E : P1(D, E, u));
  }
  return NaN;
}
function T1(u) {
  return Z0(u.getFullYear(), u.getMonth(), u.getDate(), u.getHours(), u.getMinutes(), u.getSeconds(), u.getMilliseconds());
}
function ED(u, D) {
  const e = b1(u, D), t = Z0(e[0], e[1] - 1, e[2], e[3] % 24, e[4], e[5], 0).getTime();
  let F = u.getTime();
  const n = F % 1e3;
  return F -= n >= 0 ? n : 1e3 + n, t - F;
}
function P1(u, D, e) {
  let F = u.getTime() - D;
  const n = ED(new Date(F), e);
  if (D === n)
    return D;
  F -= n - D;
  const r = ED(new Date(F), e);
  return n === r ? n : Math.max(n, r);
}
function n0(u, D) {
  return -23 <= u && u <= 23 && (D == null || 0 <= D && D <= 59);
}
const r0 = {};
function v1(u) {
  if (r0[u])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: u }), r0[u] = !0, !0;
  } catch {
    return !1;
  }
}
const M1 = 60 * 1e3, N1 = {
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(u, D, e) {
    const t = Ku(e.timeZone, u);
    if (t === 0)
      return "Z";
    switch (D) {
      // Hours and optional minutes
      case "X":
        return E0(t);
      // Hours, minutes and optional seconds without `:` delimeter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return ru(t);
      // Hours and minutes with `:` delimeter
      default:
        return ru(t, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(u, D, e) {
    const t = Ku(e.timeZone, u);
    switch (D) {
      // Hours and optional minutes
      case "x":
        return E0(t);
      // Hours, minutes and optional seconds without `:` delimeter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return ru(t);
      // Hours and minutes with `:` delimeter
      default:
        return ru(t, ":");
    }
  },
  // Timezone (GMT)
  O: function(u, D, e) {
    const t = Ku(e.timeZone, u);
    switch (D) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + I1(t, ":");
      default:
        return "GMT" + ru(t, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(u, D, e) {
    switch (D) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return e0("short", u, e);
      default:
        return e0("long", u, e);
    }
  }
};
function Ku(u, D) {
  const e = u ? Uu(u, D, !0) / M1 : D?.getTimezoneOffset() ?? 0;
  if (Number.isNaN(e))
    throw new RangeError("Invalid time zone specified: " + u);
  return e;
}
function vu(u, D) {
  const e = u < 0 ? "-" : "";
  let t = Math.abs(u).toString();
  for (; t.length < D; )
    t = "0" + t;
  return e + t;
}
function ru(u, D = "") {
  const e = u > 0 ? "-" : "+", t = Math.abs(u), F = vu(Math.floor(t / 60), 2), n = vu(Math.floor(t % 60), 2);
  return e + F + D + n;
}
function E0(u, D) {
  return u % 60 === 0 ? (u > 0 ? "-" : "+") + vu(Math.abs(u) / 60, 2) : ru(u, D);
}
function I1(u, D = "") {
  const e = u > 0 ? "-" : "+", t = Math.abs(u), F = Math.floor(t / 60), n = t % 60;
  return n === 0 ? e + String(F) : e + String(F) + D + vu(n, 2);
}
function C0(u) {
  const D = new Date(Date.UTC(u.getFullYear(), u.getMonth(), u.getDate(), u.getHours(), u.getMinutes(), u.getSeconds(), u.getMilliseconds()));
  return D.setUTCFullYear(u.getFullYear()), +u - +D;
}
const $1 = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, Xu = 36e5, a0 = 6e4, k1 = 2, v = {
  dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
  datePattern: /^([0-9W+-]+)(.*)/,
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
  timeZone: $1
};
function K0(u, D = {}) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (u === null)
    return /* @__PURE__ */ new Date(NaN);
  const e = D.additionalDigits == null ? k1 : Number(D.additionalDigits);
  if (e !== 2 && e !== 1 && e !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (u instanceof Date || typeof u == "object" && Object.prototype.toString.call(u) === "[object Date]")
    return new Date(u.getTime());
  if (typeof u == "number" || Object.prototype.toString.call(u) === "[object Number]")
    return new Date(u);
  if (Object.prototype.toString.call(u) !== "[object String]")
    return /* @__PURE__ */ new Date(NaN);
  const t = R1(u), { year: F, restDateString: n } = L1(t.date, e), r = U1(n, F);
  if (r === null || isNaN(r.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  if (r) {
    const E = r.getTime();
    let a = 0, C;
    if (t.time && (a = j1(t.time), a === null || isNaN(a)))
      return /* @__PURE__ */ new Date(NaN);
    if (t.timeZone || D.timeZone) {
      if (C = Uu(t.timeZone || D.timeZone, new Date(E + a)), isNaN(C))
        return /* @__PURE__ */ new Date(NaN);
    } else
      C = C0(new Date(E + a)), C = C0(new Date(E + a + C));
    return new Date(E + a + C);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function R1(u) {
  const D = {};
  let e = v.dateTimePattern.exec(u), t;
  if (e ? (D.date = e[1], t = e[3]) : (e = v.datePattern.exec(u), e ? (D.date = e[1], t = e[2]) : (D.date = null, t = u)), t) {
    const F = v.timeZone.exec(t);
    F ? (D.time = t.replace(F[1], ""), D.timeZone = F[1].trim()) : D.time = t;
  }
  return D;
}
function L1(u, D) {
  if (u) {
    const e = v.YYY[D], t = v.YYYYY[D];
    let F = v.YYYY.exec(u) || t.exec(u);
    if (F) {
      const n = F[1];
      return {
        year: parseInt(n, 10),
        restDateString: u.slice(n.length)
      };
    }
    if (F = v.YY.exec(u) || e.exec(u), F) {
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
function U1(u, D) {
  if (D === null)
    return null;
  let e, t, F;
  if (!u || !u.length)
    return e = /* @__PURE__ */ new Date(0), e.setUTCFullYear(D), e;
  let n = v.MM.exec(u);
  if (n)
    return e = /* @__PURE__ */ new Date(0), t = parseInt(n[1], 10) - 1, i0(D, t) ? (e.setUTCFullYear(D, t), e) : /* @__PURE__ */ new Date(NaN);
  if (n = v.DDD.exec(u), n) {
    e = /* @__PURE__ */ new Date(0);
    const r = parseInt(n[1], 10);
    return W1(D, r) ? (e.setUTCFullYear(D, 0, r), e) : /* @__PURE__ */ new Date(NaN);
  }
  if (n = v.MMDD.exec(u), n) {
    e = /* @__PURE__ */ new Date(0), t = parseInt(n[1], 10) - 1;
    const r = parseInt(n[2], 10);
    return i0(D, t, r) ? (e.setUTCFullYear(D, t, r), e) : /* @__PURE__ */ new Date(NaN);
  }
  if (n = v.Www.exec(u), n)
    return F = parseInt(n[1], 10) - 1, s0(F) ? A0(D, F) : /* @__PURE__ */ new Date(NaN);
  if (n = v.WwwD.exec(u), n) {
    F = parseInt(n[1], 10) - 1;
    const r = parseInt(n[2], 10) - 1;
    return s0(F, r) ? A0(D, F, r) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function j1(u) {
  let D, e, t = v.HH.exec(u);
  if (t)
    return D = parseFloat(t[1].replace(",", ".")), Qu(D) ? D % 24 * Xu : NaN;
  if (t = v.HHMM.exec(u), t)
    return D = parseInt(t[1], 10), e = parseFloat(t[2].replace(",", ".")), Qu(D, e) ? D % 24 * Xu + e * a0 : NaN;
  if (t = v.HHMMSS.exec(u), t) {
    D = parseInt(t[1], 10), e = parseInt(t[2], 10);
    const F = parseFloat(t[3].replace(",", "."));
    return Qu(D, e, F) ? D % 24 * Xu + e * a0 + F * 1e3 : NaN;
  }
  return null;
}
function A0(u, D, e) {
  D = D || 0, e = e || 0;
  const t = /* @__PURE__ */ new Date(0);
  t.setUTCFullYear(u, 0, 4);
  const F = t.getUTCDay() || 7, n = D * 7 + e + 1 - F;
  return t.setUTCDate(t.getUTCDate() + n), t;
}
const Y1 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], H1 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function X0(u) {
  return u % 400 === 0 || u % 4 === 0 && u % 100 !== 0;
}
function i0(u, D, e) {
  if (D < 0 || D > 11)
    return !1;
  if (e != null) {
    if (e < 1)
      return !1;
    const t = X0(u);
    if (t && e > H1[D] || !t && e > Y1[D])
      return !1;
  }
  return !0;
}
function W1(u, D) {
  if (D < 1)
    return !1;
  const e = X0(u);
  return !(e && D > 366 || !e && D > 365);
}
function s0(u, D) {
  return !(u < 0 || u > 52 || D != null && (D < 0 || D > 6));
}
function Qu(u, D, e) {
  return !(u < 0 || u >= 25 || D != null && (D < 0 || D >= 60) || e != null && (e < 0 || e >= 60));
}
const G1 = /([xXOz]+)|''|'(''|[^'])+('|$)/g;
function z1(u, D, e = {}) {
  D = String(D);
  const t = D.match(G1);
  if (t) {
    const F = K0(e.originalDate || u, e);
    D = t.reduce(function(n, r) {
      if (r[0] === "'")
        return n;
      const E = n.indexOf(r), a = n[E - 1] === "'", C = n.replace(r, "'" + N1[r[0]](F, r, e) + "'");
      return a ? C.substring(0, E - 1) + C.substring(E + 1) : C;
    }, D);
  }
  return f1(u, D, e);
}
function q1(u, D, e) {
  u = K0(u, e);
  const t = Uu(D, u, !0), F = new Date(u.getTime() - t), n = /* @__PURE__ */ new Date(0);
  return n.setFullYear(F.getUTCFullYear(), F.getUTCMonth(), F.getUTCDate()), n.setHours(F.getUTCHours(), F.getUTCMinutes(), F.getUTCSeconds(), F.getUTCMilliseconds()), n;
}
function Z1(u, D, e, t) {
  return t = {
    ...t,
    timeZone: D,
    originalDate: u
  }, z1(q1(u, D, { timeZone: t.timeZone }), e, t);
}
function K1(u, D) {
  return -Uu(u, D);
}
const x = "xregexp", J = {
  astral: !1,
  namespacing: !0
}, L = {};
let hu = /* @__PURE__ */ Object.create(null), Eu = /* @__PURE__ */ Object.create(null);
const CD = [], Au = "default", o0 = "class", X1 = {
  // Any native multicharacter token in default scope, or any single character
  default: /\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|\(\?(?:[:=!]|<[=!])|[?*+]\?|{\d+(?:,\d*)?}\??|[\s\S]/,
  // Any native multicharacter token in character class scope, or any single character
  class: /\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|[\s\S]/
}, Q1 = /\$(?:\{([^\}]+)\}|<([^>]+)>|(\d\d?|[\s\S]?))/g, V1 = /()??/.exec("")[1] === void 0, J1 = /x/.flags !== void 0;
function Ou(u) {
  let D = !0;
  try {
    new RegExp("", u), u === "y" && ".a".replace(new RegExp("a", "gy"), ".") === ".." && (D = !1);
  } catch {
    D = !1;
  }
  return D;
}
const uE = Ou("d"), fD = Ou("s"), Q0 = Ou("u"), hD = Ou("y"), V0 = {
  d: uE,
  g: !0,
  i: !0,
  m: !0,
  s: fD,
  u: Q0,
  y: hD
}, DE = fD ? /[^dgimsuy]+/g : /[^dgimuy]+/g;
function J0(u, D, e, t, F) {
  if (u[x] = {
    captureNames: D
  }, F)
    return u;
  if (u.__proto__)
    u.__proto__ = l.prototype;
  else
    for (const n in l.prototype)
      u[n] = l.prototype[n];
  return u[x].source = e, u[x].flags = t && t.split("").sort().join(""), u;
}
function wu(u) {
  return u.replace(/([\s\S])(?=[\s\S]*\1)/g, "");
}
function eu(u, D) {
  if (!l.isRegExp(u))
    throw new TypeError("Type RegExp expected");
  const e = u[x] || {};
  let t = eE(u), F = "", n = "", r = null, E = null;
  return D = D || {}, D.removeG && (n += "g"), D.removeY && (n += "y"), n && (t = t.replace(new RegExp(`[${n}]+`, "g"), "")), D.addG && (F += "g"), D.addY && (F += "y"), F && (t = wu(t + F)), D.isInternalOnly || (e.source !== void 0 && (r = e.source), e.flags != null && (E = F ? wu(e.flags + F) : e.flags)), u = J0(
    new RegExp(D.source || u.source, t),
    tE(u) ? e.captureNames.slice(0) : null,
    r,
    E,
    D.isInternalOnly
  ), u;
}
function ue(u) {
  return parseInt(u, 16);
}
function De(u, D, e) {
  const t = u.index + u[0].length, F = u.input[u.index - 1], n = u.input[t];
  return (
    // No need to separate tokens if at the beginning or end of a group, before or after a
    // group, or before or after a `|`
    /^[()|]$/.test(F) || /^[()|]$/.test(n) || // No need to separate tokens if at the beginning or end of the pattern
    u.index === 0 || t === u.input.length || // No need to separate tokens if at the beginning of a noncapturing group or lookaround.
    // Looks only at the last 4 chars (at most) for perf when constructing long regexes.
    /\(\?(?:[:=!]|<[=!])$/.test(u.input.substring(u.index - 4, u.index)) || // Avoid separating tokens when the following token is a quantifier
    FE(u.input, t, e) ? "" : "(?:)"
  );
}
function eE(u) {
  return J1 ? u.flags : (
    // Explicitly using `RegExp.prototype.toString` (rather than e.g. `String` or concatenation
    // with an empty string) allows this to continue working predictably when
    // `XRegExp.proptotype.toString` is overridden
    /\/([a-z]*)$/i.exec(RegExp.prototype.toString.call(u))[1]
  );
}
function tE(u) {
  return !!(u[x] && u[x].captureNames);
}
function dD(u) {
  return parseInt(u, 10).toString(16);
}
function FE(u, D, e) {
  const t = "\\(\\?#[^)]*\\)", F = "#[^#\\n]*", n = "[?*+]|{\\d+(?:,\\d*)?}";
  return (e.includes("x") ? (
    // Ignore any leading whitespace, line comments, and inline comments
    new RegExp(`^(?:\\s|${F}|${t})*(?:${n})`)
  ) : (
    // Ignore any leading inline comments
    new RegExp(`^(?:${t})*(?:${n})`)
  )).test(u.slice(D));
}
function Mu(u, D) {
  return Object.prototype.toString.call(u) === `[object ${D}]`;
}
function ou(u) {
  if (u == null)
    throw new TypeError("Cannot convert null or undefined to object");
  return u;
}
function pD(u) {
  for (; u.length < 4; )
    u = `0${u}`;
  return u;
}
function nE(u, D) {
  if (wu(D) !== D)
    throw new SyntaxError(`Invalid duplicate regex flag ${D}`);
  u = u.replace(/^\(\?([\w$]+)\)/, (e, t) => {
    if (/[dgy]/.test(t))
      throw new SyntaxError(`Cannot use flags dgy in mode modifier ${e}`);
    return D = wu(D + t), "";
  });
  for (const e of D)
    if (!V0[e])
      throw new SyntaxError(`Unknown regex flag ${e}`);
  return {
    pattern: u,
    flags: D
  };
}
function ee(u) {
  const D = {};
  return Mu(u, "String") ? (l.forEach(u, /[^\s,]+/, (e) => {
    D[e] = !0;
  }), D) : u;
}
function B0(u) {
  if (!/^[\w$]$/.test(u))
    throw new Error("Flag must be a single character A-Za-z0-9_$");
  V0[u] = !0;
}
function rE(u, D, e, t, F) {
  let n = CD.length;
  const r = u[e];
  let E = null, a, C;
  for (; n--; )
    if (C = CD[n], !(C.leadChar && C.leadChar !== r || C.scope !== t && C.scope !== "all" || C.flag && !D.includes(C.flag)) && (a = l.exec(u, C.regex, e, "sticky"), a)) {
      E = {
        matchLength: a[0].length,
        output: C.handler.call(F, a, t, D),
        reparse: C.reparse
      };
      break;
    }
  return E;
}
function te(u) {
  J.astral = u;
}
function Fe(u) {
  J.namespacing = u;
}
function l(u, D) {
  if (l.isRegExp(u)) {
    if (D !== void 0)
      throw new TypeError("Cannot supply flags when copying a RegExp");
    return eu(u);
  }
  if (u = u === void 0 ? "" : String(u), D = D === void 0 ? "" : String(D), l.isInstalled("astral") && !D.includes("A") && (D += "A"), Eu[u] || (Eu[u] = {}), !Eu[u][D]) {
    const t = {
      hasNamedCapture: !1,
      captureNames: []
    };
    let F = Au, n = "", r = 0, E;
    const a = nE(u, D);
    let C = a.pattern;
    const s = a.flags;
    for (; r < C.length; ) {
      do
        E = rE(C, s, r, F, t), E && E.reparse && (C = C.slice(0, r) + E.output + C.slice(r + E.matchLength));
      while (E && E.reparse);
      if (E)
        n += E.output, r += E.matchLength || 1;
      else {
        const [i] = l.exec(C, X1[F], r, "sticky");
        n += i, r += i.length, i === "[" && F === Au ? F = o0 : i === "]" && F === o0 && (F = Au);
      }
    }
    Eu[u][D] = {
      // Use basic cleanup to collapse repeated empty groups like `(?:)(?:)` to `(?:)`. Empty
      // groups are sometimes inserted during regex transpilation in order to keep tokens
      // separated. However, more than one empty group in a row is never needed.
      pattern: n.replace(/(?:\(\?:\))+/g, "(?:)"),
      // Strip all but native flags
      flags: s.replace(DE, ""),
      // `context.captureNames` has an item for each capturing group, even if unnamed
      captures: t.hasNamedCapture ? t.captureNames : null
    };
  }
  const e = Eu[u][D];
  return J0(
    new RegExp(e.pattern, e.flags),
    e.captures,
    u,
    D
  );
}
l.prototype = new RegExp();
l.version = "5.1.2";
l._clipDuplicates = wu;
l._hasNativeFlag = Ou;
l._dec = ue;
l._hex = dD;
l._pad4 = pD;
l.addToken = (u, D, e) => {
  e = e || {};
  let { optionalFlags: t } = e;
  if (e.flag && B0(e.flag), t) {
    t = t.split("");
    for (const F of t)
      B0(F);
  }
  CD.push({
    regex: eu(u, {
      addG: !0,
      addY: hD,
      isInternalOnly: !0
    }),
    handler: D,
    scope: e.scope || Au,
    flag: e.flag,
    reparse: e.reparse,
    leadChar: e.leadChar
  }), l.cache.flush("patterns");
};
l.cache = (u, D) => (hu[u] || (hu[u] = {}), hu[u][D] || (hu[u][D] = l(u, D)));
l.cache.flush = (u) => {
  u === "patterns" ? Eu = /* @__PURE__ */ Object.create(null) : hu = /* @__PURE__ */ Object.create(null);
};
l.escape = (u) => String(ou(u)).replace(/[\\\[\]{}()*+?.^$|]/g, "\\$&").replace(/[\s#\-,]/g, (D) => `\\u${pD(dD(D.charCodeAt(0)))}`);
l.exec = (u, D, e, t) => {
  let F = "g", n = !1, r = !1, E;
  n = hD && !!(t || D.sticky && t !== !1), n ? F += "y" : t && (r = !0, F += "FakeY"), D[x] = D[x] || {};
  const a = D[x][F] || (D[x][F] = eu(D, {
    addG: !0,
    addY: n,
    source: r ? `${D.source}|()` : void 0,
    removeY: t === !1,
    isInternalOnly: !0
  }));
  return e = e || 0, a.lastIndex = e, E = L.exec.call(a, u), r && E && E.pop() === "" && (E = null), D.global && (D.lastIndex = E ? a.lastIndex : 0), E;
};
l.forEach = (u, D, e) => {
  let t = 0, F = -1, n;
  for (; n = l.exec(u, D, t); )
    e(n, ++F, u, D), t = n.index + (n[0].length || 1);
};
l.globalize = (u) => eu(u, { addG: !0 });
l.install = (u) => {
  u = ee(u), !J.astral && u.astral && te(!0), !J.namespacing && u.namespacing && Fe(!0);
};
l.isInstalled = (u) => !!J[u];
l.isRegExp = (u) => Object.prototype.toString.call(u) === "[object RegExp]";
l.match = (u, D, e) => {
  const t = D.global && e !== "one" || e === "all", F = (t ? "g" : "") + (D.sticky ? "y" : "") || "noGY";
  D[x] = D[x] || {};
  const n = D[x][F] || (D[x][F] = eu(D, {
    addG: !!t,
    removeG: e === "one",
    isInternalOnly: !0
  })), r = String(ou(u)).match(n);
  return D.global && (D.lastIndex = e === "one" && r ? (
    // Can't use `r2.lastIndex` since `r2` is nonglobal in this case
    r.index + r[0].length
  ) : 0), t ? r || [] : r && r[0];
};
l.matchChain = (u, D) => (function e(t, F) {
  const n = D[F].regex ? D[F] : { regex: D[F] }, r = [];
  function E(a) {
    if (n.backref) {
      const C = `Backreference to undefined group: ${n.backref}`, s = isNaN(n.backref);
      if (s && l.isInstalled("namespacing")) {
        if (!(a.groups && n.backref in a.groups))
          throw new ReferenceError(C);
      } else if (!a.hasOwnProperty(n.backref))
        throw new ReferenceError(C);
      const i = s && l.isInstalled("namespacing") ? a.groups[n.backref] : a[n.backref];
      r.push(i || "");
    } else
      r.push(a[0]);
  }
  for (const a of t)
    l.forEach(a, n.regex, E);
  return F === D.length - 1 || !r.length ? r : e(r, F + 1);
})([u], 0);
l.replace = (u, D, e, t) => {
  const F = l.isRegExp(D), n = D.global && t !== "one" || t === "all", r = (n ? "g" : "") + (D.sticky ? "y" : "") || "noGY";
  let E = D;
  F ? (D[x] = D[x] || {}, E = D[x][r] || (D[x][r] = eu(D, {
    addG: !!n,
    removeG: t === "one",
    isInternalOnly: !0
  }))) : n && (E = new RegExp(l.escape(String(D)), "g"));
  const a = L.replace.call(ou(u), E, e);
  return F && D.global && (D.lastIndex = 0), a;
};
l.replaceEach = (u, D) => {
  for (const e of D)
    u = l.replace(u, e[0], e[1], e[2]);
  return u;
};
l.split = (u, D, e) => L.split.call(ou(u), D, e);
l.test = (u, D, e, t) => !!l.exec(u, D, e, t);
l.uninstall = (u) => {
  u = ee(u), J.astral && u.astral && te(!1), J.namespacing && u.namespacing && Fe(!1);
};
l.union = (u, D, e) => {
  e = e || {};
  const t = e.conjunction || "or";
  let F = 0, n, r;
  function E(i, B, o) {
    const c = r[F - n];
    if (B) {
      if (++F, c)
        return `(?<${c}>`;
    } else if (o)
      return `\\${+o + n}`;
    return i;
  }
  if (!(Mu(u, "Array") && u.length))
    throw new TypeError("Must provide a nonempty array of patterns to merge");
  const a = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g, C = [];
  for (const i of u)
    l.isRegExp(i) ? (n = F, r = i[x] && i[x].captureNames || [], C.push(l(i.source).source.replace(a, E))) : C.push(l.escape(i));
  const s = t === "none" ? "" : "|";
  return l(C.join(s), D);
};
L.exec = function(u) {
  const D = this.lastIndex, e = RegExp.prototype.exec.apply(this, arguments);
  if (e) {
    if (!V1 && e.length > 1 && e.includes("")) {
      const t = eu(this, {
        removeG: !0,
        isInternalOnly: !0
      });
      String(u).slice(e.index).replace(t, (...F) => {
        const n = F.length;
        for (let r = 1; r < n - 2; ++r)
          F[r] === void 0 && (e[r] = void 0);
      });
    }
    if (this[x] && this[x].captureNames) {
      let t = e;
      l.isInstalled("namespacing") && (e.groups = /* @__PURE__ */ Object.create(null), t = e.groups);
      for (let F = 1; F < e.length; ++F) {
        const n = this[x].captureNames[F - 1];
        n && (t[n] = e[F]);
      }
    } else !e.groups && l.isInstalled("namespacing") && (e.groups = void 0);
    this.global && !e[0].length && this.lastIndex > e.index && (this.lastIndex = e.index);
  }
  return this.global || (this.lastIndex = D), e;
};
L.test = function(u) {
  return !!L.exec.call(this, u);
};
L.match = function(u) {
  if (!l.isRegExp(u))
    u = new RegExp(u);
  else if (u.global) {
    const D = String.prototype.match.apply(this, arguments);
    return u.lastIndex = 0, D;
  }
  return L.exec.call(u, ou(this));
};
L.replace = function(u, D) {
  const e = l.isRegExp(u);
  let t, F, n;
  return e ? (u[x] && ({ captureNames: F } = u[x]), t = u.lastIndex) : u += "", Mu(D, "Function") ? n = String(this).replace(u, (...r) => {
    if (F) {
      let E;
      l.isInstalled("namespacing") ? (E = /* @__PURE__ */ Object.create(null), r.push(E)) : (r[0] = new String(r[0]), [E] = r);
      for (let a = 0; a < F.length; ++a)
        F[a] && (E[F[a]] = r[a + 1]);
    }
    return D(...r);
  }) : n = String(ou(this)).replace(u, (...r) => {
    return String(D).replace(Q1, E);
    function E(a, C, s, i) {
      C = C || s;
      const B = Mu(r[r.length - 1], "Object") ? 4 : 3, o = r.length - B;
      if (C) {
        if (/^\d+$/.test(C)) {
          const f = +C;
          if (f <= o)
            return r[f] || "";
        }
        const c = F ? F.indexOf(C) : -1;
        if (c < 0)
          throw new SyntaxError(`Backreference to undefined group ${a}`);
        return r[c + 1] || "";
      }
      if (i === "" || i === " ")
        throw new SyntaxError(`Invalid token ${a}`);
      if (i === "&" || +i == 0)
        return r[0];
      if (i === "$")
        return "$";
      if (i === "`")
        return r[r.length - 1].slice(0, r[r.length - 2]);
      if (i === "'")
        return r[r.length - 1].slice(r[r.length - 2] + r[0].length);
      if (i = +i, !isNaN(i)) {
        if (i > o)
          throw new SyntaxError(`Backreference to undefined group ${a}`);
        return r[i] || "";
      }
      throw new SyntaxError(`Invalid token ${a}`);
    }
  }), e && (u.global ? u.lastIndex = 0 : u.lastIndex = t), n;
};
L.split = function(u, D) {
  if (!l.isRegExp(u))
    return String.prototype.split.apply(this, arguments);
  const e = String(this), t = [], F = u.lastIndex;
  let n = 0, r;
  return D = (D === void 0 ? -1 : D) >>> 0, l.forEach(e, u, (E) => {
    E.index + E[0].length > n && (t.push(e.slice(n, E.index)), E.length > 1 && E.index < e.length && Array.prototype.push.apply(t, E.slice(1)), r = E[0].length, n = E.index + r);
  }), n === e.length ? (!u.test("") || r) && t.push("") : t.push(e.slice(n)), u.lastIndex = F, t.length > D ? t.slice(0, D) : t;
};
l.addToken(
  /\\([ABCE-RTUVXYZaeg-mopqyz]|c(?![A-Za-z])|u(?![\dA-Fa-f]{4}|{[\dA-Fa-f]+})|x(?![\dA-Fa-f]{2}))/,
  (u, D) => {
    if (u[1] === "B" && D === Au)
      return u[0];
    throw new SyntaxError(`Invalid escape ${u[0]}`);
  },
  {
    scope: "all",
    leadChar: "\\"
  }
);
l.addToken(
  /\\u{([\dA-Fa-f]+)}/,
  (u, D, e) => {
    const t = ue(u[1]);
    if (t > 1114111)
      throw new SyntaxError(`Invalid Unicode code point ${u[0]}`);
    if (t <= 65535)
      return `\\u${pD(dD(t))}`;
    if (Q0 && e.includes("u"))
      return u[0];
    throw new SyntaxError("Cannot use Unicode code point above \\u{FFFF} without flag u");
  },
  {
    scope: "all",
    leadChar: "\\"
  }
);
l.addToken(
  /\(\?#[^)]*\)/,
  De,
  { leadChar: "(" }
);
l.addToken(
  /\s+|#[^\n]*\n?/,
  De,
  { flag: "x" }
);
fD || l.addToken(
  /\./,
  () => "[\\s\\S]",
  {
    flag: "s",
    leadChar: "."
  }
);
l.addToken(
  /\\k<([^>]+)>/,
  function(u) {
    const D = isNaN(u[1]) ? this.captureNames.indexOf(u[1]) + 1 : +u[1], e = u.index + u[0].length;
    if (!D || D > this.captureNames.length)
      throw new SyntaxError(`Backreference to undefined group ${u[0]}`);
    return `\\${D}${e === u.input.length || isNaN(u.input[e]) ? "" : "(?:)"}`;
  },
  { leadChar: "\\" }
);
l.addToken(
  /\\(\d+)/,
  function(u, D) {
    if (!(D === Au && /^[1-9]/.test(u[1]) && +u[1] <= this.captureNames.length) && u[1] !== "0")
      throw new SyntaxError(`Cannot use octal escape or backreference to undefined group ${u[0]}`);
    return u[0];
  },
  {
    scope: "all",
    leadChar: "\\"
  }
);
l.addToken(
  /\(\?P?<([\p{ID_Start}$_][\p{ID_Continue}$_\u200C\u200D]*)>/u,
  function(u) {
    if (!l.isInstalled("namespacing") && (u[1] === "length" || u[1] === "__proto__"))
      throw new SyntaxError(`Cannot use reserved word as capture name ${u[0]}`);
    if (this.captureNames.includes(u[1]))
      throw new SyntaxError(`Cannot use same name for multiple groups ${u[0]}`);
    return this.captureNames.push(u[1]), this.hasNamedCapture = !0, "(";
  },
  { leadChar: "(" }
);
l.addToken(
  /\((?!\?)/,
  function(u, D, e) {
    return e.includes("n") ? "(?:" : (this.captureNames.push(null), "(");
  },
  {
    optionalFlags: "n",
    leadChar: "("
  }
);
const EE = (u) => {
  const D = "xregexp", e = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g, t = u.union([/\({{([\w$]+)}}\)|{{([\w$]+)}}/, e], "g", {
    conjunction: "or"
  });
  function F(C) {
    const s = /^(?:\(\?:\))*\^/, i = /\$(?:\(\?:\))*$/;
    return s.test(C) && i.test(C) && // Ensure that the trailing `$` isn't escaped
    i.test(C.replace(/\\[\s\S]/g, "")) ? C.replace(s, "").replace(i, "") : C;
  }
  function n(C, s) {
    const i = s ? "x" : "";
    return u.isRegExp(C) ? C[D] && C[D].captureNames ? (
      // Don't recompile, to preserve capture names
      C
    ) : (
      // Recompile as XRegExp
      u(C.source, i)
    ) : (
      // Compile string as XRegExp
      u(C, i)
    );
  }
  function r(C) {
    return C instanceof RegExp ? C : u.escape(C);
  }
  function E(C, s, i) {
    return C[`subpattern${i}`] = s, C;
  }
  function a(C, s, i) {
    const B = s < i.length - 1;
    return C + (B ? `{{subpattern${s}}}` : "");
  }
  u.tag = (C) => (s, ...i) => {
    const B = i.map(r).reduce(E, {}), o = s.raw.map(a).join("");
    return u.build(o, B, C);
  }, u.build = (C, s, i) => {
    i = i || "";
    const B = i.includes("x"), o = /^\(\?([\w$]+)\)/.exec(C);
    o && (i = u._clipDuplicates(i + o[1]));
    const c = {};
    for (const P in s)
      if (s.hasOwnProperty(P)) {
        const M = n(s[P], B);
        c[P] = {
          // Deanchoring allows embedding independently useful anchored regexes. If you
          // really need to keep your anchors, double them (i.e., `^^...$$`).
          pattern: F(M.source),
          names: M[D].captureNames || []
        };
      }
    const f = n(C, B);
    let h = 0, p, y = 0;
    const O = [0], g = f[D].captureNames || [], _ = f.source.replace(t, (P, M, Bu, ju, U) => {
      const k = M || Bu;
      let S, I, tu;
      if (k) {
        if (!c.hasOwnProperty(k))
          throw new ReferenceError(`Undefined property ${P}`);
        M ? (S = g[y], O[++y] = ++h, I = `(?<${S || k}>`) : I = "(?:", p = h;
        const re = c[k].pattern.replace(e, (Ee, Ce, Yu) => {
          if (Ce) {
            if (S = c[k].names[h - p], ++h, S)
              return `(?<${S}>`;
          } else if (Yu)
            return tu = +Yu - 1, c[k].names[tu] ? (
              // Need to preserve the backreference name in case using flag `n`
              `\\k<${c[k].names[tu]}>`
            ) : `\\${+Yu + p}`;
          return Ee;
        });
        return `${I}${re})`;
      }
      if (ju) {
        if (S = g[y], O[++y] = ++h, S)
          return `(?<${S}>`;
      } else if (U)
        return tu = +U - 1, g[tu] ? (
          // Need to preserve the backreference name in case using flag `n`
          `\\k<${g[tu]}>`
        ) : `\\${O[+U]}`;
      return P;
    });
    return u(_, i);
  };
};
const CE = (u) => {
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
    const E = n.includes("g"), a = n.includes("y"), C = n.replace(/y/g, "");
    t = u(t, C), F = u(F, C);
    let s, { escapeChar: i } = r;
    if (i) {
      if (i.length > 1)
        throw new Error("Cannot use more than one escape character");
      i = u.escape(i), s = new RegExp(
        `(?:${i}[\\S\\s]|(?:(?!${// Using `XRegExp.union` safely rewrites backreferences in `left` and `right`.
        // Intentionally not passing `basicFlags` to `XRegExp.union` since any syntax
        // transformation resulting from those flags was already applied to `left` and
        // `right` when they were passed through the XRegExp constructor above.
        u.union([t, F], "", { conjunction: "or" }).source})[^${i}])+)+`,
        // Flags `dgy` not needed here
        n.replace(u._hasNativeFlag("s") ? /[^imsu]/g : /[^imu]/g, "")
      );
    }
    let B = 0, o = 0, c = 0, f = 0, h, p, y, O;
    const g = r.valueNames, _ = [];
    for (; ; ) {
      if (i && (c += (u.exec(e, s, c, "sticky") || [""])[0].length), y = u.exec(e, t, c), O = u.exec(e, F, c), y && O && (y.index <= O.index ? O = null : y = null), y || O)
        o = (y || O).index, c = o + (y || O)[0].length;
      else if (!B)
        break;
      if (a && !B && o > f)
        break;
      if (y)
        B || (h = o, p = c), B += 1;
      else if (O && B) {
        if (B -= 1, !B && (g ? (g[0] && h > f && _.push(D(g[0], e.slice(f, h), f, h)), g[1] && _.push(D(g[1], e.slice(h, p), h, p)), g[2] && _.push(D(g[2], e.slice(p, o), p, o)), g[3] && _.push(D(g[3], e.slice(o, c), o, c))) : _.push(e.slice(p, o)), f = c, !E))
          break;
      } else {
        const P = r.unbalanced || "error";
        if (P === "skip" || P === "skip-lazy")
          if (O)
            O = null;
          else {
            if (P === "skip") {
              const M = u.exec(e, t, h, "sticky")[0].length;
              c = h + (M || 1);
            } else
              c = h + 1;
            B = 0;
          }
        else if (P === "error") {
          const M = O ? "right" : "left", Bu = O ? o : h;
          throw new Error(`Unbalanced ${M} delimiter found in string at position ${Bu}`);
        } else
          throw new Error(`Unsupported value for unbalanced: ${P}`);
      }
      o === c && (c += 1);
    }
    return E && _.length > 0 && !a && g && g[0] && e.length > f && _.push(D(g[0], e.slice(f), f, e.length)), _;
  };
};
const aE = (u) => {
  const D = {}, e = {}, t = u._dec, F = u._hex, n = u._pad4;
  function r(B) {
    return B.replace(/[- _]+/g, "").toLowerCase();
  }
  function E(B) {
    const o = /^\\[xu](.+)/.exec(B);
    return o ? t(o[1]) : B.charCodeAt(B[0] === "\\" ? 1 : 0);
  }
  function a(B) {
    let o = "", c = -1;
    return u.forEach(
      B,
      /(\\x..|\\u....|\\?[\s\S])(?:-(\\x..|\\u....|\\?[\s\S]))?/,
      (f) => {
        const h = E(f[1]);
        h > c + 1 && (o += `\\u${n(F(c + 1))}`, h > c + 2 && (o += `-\\u${n(F(h - 1))}`)), c = E(f[2] || f[1]);
      }
    ), c < 65535 && (o += `\\u${n(F(c + 1))}`, c < 65534 && (o += "-\\uFFFF")), o;
  }
  function C(B) {
    return D[B]["b!"] || (D[B]["b!"] = a(D[B].bmp));
  }
  function s(B, o) {
    const c = D[B];
    let f = "";
    return c.bmp && !c.isBmpLast && (f = `[${c.bmp}]${c.astral ? "|" : ""}`), c.astral && (f += c.astral), c.isBmpLast && c.bmp && (f += `${c.astral ? "|" : ""}[${c.bmp}]`), o ? `(?:(?!${f})(?:[\uD800-\uDBFF][\uDC00-\uDFFF]|[\0-￿]))` : `(?:${f})`;
  }
  function i(B, o) {
    const c = o ? "a!" : "a=";
    return D[B][c] || (D[B][c] = s(B, o));
  }
  u.addToken(
    // Use `*` instead of `+` to avoid capturing `^` as the token name in `\p{^}`
    /\\([pP])(?:{(\^?)(?:(\w+)=)?([^}]*)}|([A-Za-z]))/,
    (B, o, c) => {
      const f = "Invalid double negation ", h = "Unknown Unicode token ", p = "Unicode token missing data ", y = "Astral mode required for Unicode token ", O = "Astral mode does not support Unicode tokens within character classes", [
        g,
        _,
        P,
        M,
        Bu,
        ju
      ] = B;
      let U = _ === "P" || !!P;
      const k = c.includes("A");
      let S = r(ju || Bu), I = D[S];
      if (_ === "P" && P)
        throw new SyntaxError(f + g);
      if (!D.hasOwnProperty(S))
        throw new SyntaxError(h + g);
      if (M && !(e[M] && e[M][S]))
        throw new SyntaxError(h + g);
      if (I.inverseOf) {
        if (S = r(I.inverseOf), !D.hasOwnProperty(S))
          throw new ReferenceError(`${p + g} -> ${I.inverseOf}`);
        I = D[S], U = !U;
      }
      if (!(I.bmp || k))
        throw new SyntaxError(y + g);
      if (k) {
        if (o === "class")
          throw new SyntaxError(O);
        return i(S, U);
      }
      return o === "class" ? U ? C(S) : I.bmp : `${(U ? "[^" : "[") + I.bmp}]`;
    },
    {
      scope: "all",
      optionalFlags: "A",
      leadChar: "\\"
    }
  ), u.addUnicodeData = (B, o) => {
    const c = "Unicode token requires name", f = "Unicode token has no character data ";
    o && (e[o] = {});
    for (const h of B) {
      if (!h.name)
        throw new Error(c);
      if (!(h.inverseOf || h.bmp || h.astral))
        throw new Error(f + h.name);
      const p = r(h.name);
      if (D[p] = h, o && (e[o][p] = !0), h.alias) {
        const y = r(h.alias);
        D[y] = h, o && (e[o][y] = !0);
      }
    }
    u.cache.flush("patterns");
  }, u._getUnicodeProperty = (B) => {
    const o = r(B);
    return D[o];
  };
};
var DC = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function mD(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
function eC(u) {
  if (Object.prototype.hasOwnProperty.call(u, "__esModule")) return u;
  var D = u.default;
  if (typeof D == "function") {
    var e = function t() {
      var F = !1;
      try {
        F = this instanceof t;
      } catch {
      }
      return F ? Reflect.construct(D, arguments, this.constructor) : D.apply(this, arguments);
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
var Vu, c0;
function AE() {
  return c0 || (c0 = 1, Vu = [
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
  ]), Vu;
}
var iE = AE();
const sE = /* @__PURE__ */ mD(iE);
const oE = (u) => {
  if (!u.addUnicodeData)
    throw new ReferenceError("Unicode Base must be loaded before Unicode Categories");
  u.addUnicodeData(sE);
};
var Ju, l0;
function BE() {
  return l0 || (l0 = 1, Ju = [
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
  ]), Ju;
}
var cE = BE();
const lE = /* @__PURE__ */ mD(cE);
const fE = (u) => {
  if (!u.addUnicodeData)
    throw new ReferenceError("Unicode Base must be loaded before Unicode Properties");
  const D = lE;
  D.push({
    name: "Assigned",
    // Since this is defined as the inverse of Unicode category Cn (Unassigned), the Unicode
    // Categories addon is required to use this property
    inverseOf: "Cn"
  }), u.addUnicodeData(D);
};
var uD, f0;
function hE() {
  return f0 || (f0 = 1, uD = [
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
  ]), uD;
}
var dE = hE();
const pE = /* @__PURE__ */ mD(dE);
const mE = (u) => {
  if (!u.addUnicodeData)
    throw new ReferenceError("Unicode Base must be loaded before Unicode Scripts");
  u.addUnicodeData(pE, "Script");
};
EE(l);
CE(l);
aE(l);
oE(l);
fE(l);
mE(l);
class gE {
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
  add(D, e, t) {
    if (typeof arguments[0] != "string")
      for (let F in arguments[0])
        this.add(F, arguments[0][F], arguments[1]);
    else
      (Array.isArray(D) ? D : [D]).forEach(function(F) {
        this[F] = this[F] || [], e && this[F][t ? "unshift" : "push"](e);
      }, this);
  }
  /**
   * Runs a hook invoking all registered callbacks with the given environment variables.
   *
   * Callbacks will be invoked synchronously and in the order in which they were registered.
   *
   * @param {string} name The name of the hook.
   * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
   * @public
   */
  run(D, e) {
    this[D] = this[D] || [], this[D].forEach(function(t) {
      t.call(e && e.context ? e.context : e, e);
    });
  }
}
class bE {
  constructor(D) {
    this.jsep = D, this.registered = {};
  }
  /**
   * @callback PluginSetup
   * @this {Jsep} jsep
   * @returns: void
   */
  /**
   * Adds the given plugin(s) to the registry
   *
   * @param {object} plugins
   * @param {string} plugins.name The name of the plugin
   * @param {PluginSetup} plugins.init The init function
   * @public
   */
  register() {
    for (var D = arguments.length, e = new Array(D), t = 0; t < D; t++)
      e[t] = arguments[t];
    e.forEach((F) => {
      if (typeof F != "object" || !F.name || !F.init)
        throw new Error("Invalid JSEP plugin format");
      this.registered[F.name] || (F.init(this.jsep), this.registered[F.name] = F);
    });
  }
}
class A {
  /**
   * @returns {string}
   */
  static get version() {
    return "1.4.0";
  }
  /**
   * @returns {string}
   */
  static toString() {
    return "JavaScript Expression Parser (JSEP) v" + A.version;
  }
  // ==================== CONFIG ================================
  /**
   * @method addUnaryOp
   * @param {string} op_name The name of the unary op to add
   * @returns {Jsep}
   */
  static addUnaryOp(D) {
    return A.max_unop_len = Math.max(D.length, A.max_unop_len), A.unary_ops[D] = 1, A;
  }
  /**
   * @method jsep.addBinaryOp
   * @param {string} op_name The name of the binary op to add
   * @param {number} precedence The precedence of the binary op (can be a float). Higher number = higher precedence
   * @param {boolean} [isRightAssociative=false] whether operator is right-associative
   * @returns {Jsep}
   */
  static addBinaryOp(D, e, t) {
    return A.max_binop_len = Math.max(D.length, A.max_binop_len), A.binary_ops[D] = e, t ? A.right_associative.add(D) : A.right_associative.delete(D), A;
  }
  /**
   * @method addIdentifierChar
   * @param {string} char The additional character to treat as a valid part of an identifier
   * @returns {Jsep}
   */
  static addIdentifierChar(D) {
    return A.additional_identifier_chars.add(D), A;
  }
  /**
   * @method addLiteral
   * @param {string} literal_name The name of the literal to add
   * @param {*} literal_value The value of the literal
   * @returns {Jsep}
   */
  static addLiteral(D, e) {
    return A.literals[D] = e, A;
  }
  /**
   * @method removeUnaryOp
   * @param {string} op_name The name of the unary op to remove
   * @returns {Jsep}
   */
  static removeUnaryOp(D) {
    return delete A.unary_ops[D], D.length === A.max_unop_len && (A.max_unop_len = A.getMaxKeyLen(A.unary_ops)), A;
  }
  /**
   * @method removeAllUnaryOps
   * @returns {Jsep}
   */
  static removeAllUnaryOps() {
    return A.unary_ops = {}, A.max_unop_len = 0, A;
  }
  /**
   * @method removeIdentifierChar
   * @param {string} char The additional character to stop treating as a valid part of an identifier
   * @returns {Jsep}
   */
  static removeIdentifierChar(D) {
    return A.additional_identifier_chars.delete(D), A;
  }
  /**
   * @method removeBinaryOp
   * @param {string} op_name The name of the binary op to remove
   * @returns {Jsep}
   */
  static removeBinaryOp(D) {
    return delete A.binary_ops[D], D.length === A.max_binop_len && (A.max_binop_len = A.getMaxKeyLen(A.binary_ops)), A.right_associative.delete(D), A;
  }
  /**
   * @method removeAllBinaryOps
   * @returns {Jsep}
   */
  static removeAllBinaryOps() {
    return A.binary_ops = {}, A.max_binop_len = 0, A;
  }
  /**
   * @method removeLiteral
   * @param {string} literal_name The name of the literal to remove
   * @returns {Jsep}
   */
  static removeLiteral(D) {
    return delete A.literals[D], A;
  }
  /**
   * @method removeAllLiterals
   * @returns {Jsep}
   */
  static removeAllLiterals() {
    return A.literals = {}, A;
  }
  // ==================== END CONFIG ============================
  /**
   * @returns {string}
   */
  get char() {
    return this.expr.charAt(this.index);
  }
  /**
   * @returns {number}
   */
  get code() {
    return this.expr.charCodeAt(this.index);
  }
  /**
   * @param {string} expr a string with the passed in express
   * @returns Jsep
   */
  constructor(D) {
    this.expr = D, this.index = 0;
  }
  /**
   * static top-level parser
   * @returns {jsep.Expression}
   */
  static parse(D) {
    return new A(D).parse();
  }
  /**
   * Get the longest key length of any object
   * @param {object} obj
   * @returns {number}
   */
  static getMaxKeyLen(D) {
    return Math.max(0, ...Object.keys(D).map((e) => e.length));
  }
  /**
   * `ch` is a character code in the next three functions
   * @param {number} ch
   * @returns {boolean}
   */
  static isDecimalDigit(D) {
    return D >= 48 && D <= 57;
  }
  /**
   * Returns the precedence of a binary operator or `0` if it isn't a binary operator. Can be float.
   * @param {string} op_val
   * @returns {number}
   */
  static binaryPrecedence(D) {
    return A.binary_ops[D] || 0;
  }
  /**
   * Looks for start of identifier
   * @param {number} ch
   * @returns {boolean}
   */
  static isIdentifierStart(D) {
    return D >= 65 && D <= 90 || // A...Z
    D >= 97 && D <= 122 || // a...z
    D >= 128 && !A.binary_ops[String.fromCharCode(D)] || // any non-ASCII that is not an operator
    A.additional_identifier_chars.has(String.fromCharCode(D));
  }
  /**
   * @param {number} ch
   * @returns {boolean}
   */
  static isIdentifierPart(D) {
    return A.isIdentifierStart(D) || A.isDecimalDigit(D);
  }
  /**
   * throw error at index of the expression
   * @param {string} message
   * @throws
   */
  throwError(D) {
    const e = new Error(D + " at character " + this.index);
    throw e.index = this.index, e.description = D, e;
  }
  /**
   * Run a given hook
   * @param {string} name
   * @param {jsep.Expression|false} [node]
   * @returns {?jsep.Expression}
   */
  runHook(D, e) {
    if (A.hooks[D]) {
      const t = {
        context: this,
        node: e
      };
      return A.hooks.run(D, t), t.node;
    }
    return e;
  }
  /**
   * Runs a given hook until one returns a node
   * @param {string} name
   * @returns {?jsep.Expression}
   */
  searchHook(D) {
    if (A.hooks[D]) {
      const e = {
        context: this
      };
      return A.hooks[D].find(function(t) {
        return t.call(e.context, e), e.node;
      }), e.node;
    }
  }
  /**
   * Push `index` up to the next non-space character
   */
  gobbleSpaces() {
    let D = this.code;
    for (; D === A.SPACE_CODE || D === A.TAB_CODE || D === A.LF_CODE || D === A.CR_CODE; )
      D = this.expr.charCodeAt(++this.index);
    this.runHook("gobble-spaces");
  }
  /**
   * Top-level method to parse all expressions and returns compound or single node
   * @returns {jsep.Expression}
   */
  parse() {
    this.runHook("before-all");
    const D = this.gobbleExpressions(), e = D.length === 1 ? D[0] : {
      type: A.COMPOUND,
      body: D
    };
    return this.runHook("after-all", e);
  }
  /**
   * top-level parser (but can be reused within as well)
   * @param {number} [untilICode]
   * @returns {jsep.Expression[]}
   */
  gobbleExpressions(D) {
    let e = [], t, F;
    for (; this.index < this.expr.length; )
      if (t = this.code, t === A.SEMCOL_CODE || t === A.COMMA_CODE)
        this.index++;
      else if (F = this.gobbleExpression())
        e.push(F);
      else if (this.index < this.expr.length) {
        if (t === D)
          break;
        this.throwError('Unexpected "' + this.char + '"');
      }
    return e;
  }
  /**
   * The main parsing function.
   * @returns {?jsep.Expression}
   */
  gobbleExpression() {
    const D = this.searchHook("gobble-expression") || this.gobbleBinaryExpression();
    return this.gobbleSpaces(), this.runHook("after-expression", D);
  }
  /**
   * Search for the operation portion of the string (e.g. `+`, `===`)
   * Start by taking the longest possible binary operations (3 characters: `===`, `!==`, `>>>`)
   * and move down from 3 to 2 to 1 character until a matching binary operation is found
   * then, return that binary operation
   * @returns {string|boolean}
   */
  gobbleBinaryOp() {
    this.gobbleSpaces();
    let D = this.expr.substr(this.index, A.max_binop_len), e = D.length;
    for (; e > 0; ) {
      if (A.binary_ops.hasOwnProperty(D) && (!A.isIdentifierStart(this.code) || this.index + D.length < this.expr.length && !A.isIdentifierPart(this.expr.charCodeAt(this.index + D.length))))
        return this.index += e, D;
      D = D.substr(0, --e);
    }
    return !1;
  }
  /**
   * This function is responsible for gobbling an individual expression,
   * e.g. `1`, `1+2`, `a+(b*2)-Math.sqrt(2)`
   * @returns {?jsep.BinaryExpression}
   */
  gobbleBinaryExpression() {
    let D, e, t, F, n, r, E, a, C;
    if (r = this.gobbleToken(), !r || (e = this.gobbleBinaryOp(), !e))
      return r;
    for (n = {
      value: e,
      prec: A.binaryPrecedence(e),
      right_a: A.right_associative.has(e)
    }, E = this.gobbleToken(), E || this.throwError("Expected expression after " + e), F = [r, n, E]; e = this.gobbleBinaryOp(); ) {
      if (t = A.binaryPrecedence(e), t === 0) {
        this.index -= e.length;
        break;
      }
      n = {
        value: e,
        prec: t,
        right_a: A.right_associative.has(e)
      }, C = e;
      const s = (i) => n.right_a && i.right_a ? t > i.prec : t <= i.prec;
      for (; F.length > 2 && s(F[F.length - 2]); )
        E = F.pop(), e = F.pop().value, r = F.pop(), D = {
          type: A.BINARY_EXP,
          operator: e,
          left: r,
          right: E
        }, F.push(D);
      D = this.gobbleToken(), D || this.throwError("Expected expression after " + C), F.push(n, D);
    }
    for (a = F.length - 1, D = F[a]; a > 1; )
      D = {
        type: A.BINARY_EXP,
        operator: F[a - 1].value,
        left: F[a - 2],
        right: D
      }, a -= 2;
    return D;
  }
  /**
   * An individual part of a binary expression:
   * e.g. `foo.bar(baz)`, `1`, `"abc"`, `(a % 2)` (because it's in parenthesis)
   * @returns {boolean|jsep.Expression}
   */
  gobbleToken() {
    let D, e, t, F;
    if (this.gobbleSpaces(), F = this.searchHook("gobble-token"), F)
      return this.runHook("after-token", F);
    if (D = this.code, A.isDecimalDigit(D) || D === A.PERIOD_CODE)
      return this.gobbleNumericLiteral();
    if (D === A.SQUOTE_CODE || D === A.DQUOTE_CODE)
      F = this.gobbleStringLiteral();
    else if (D === A.OBRACK_CODE)
      F = this.gobbleArray();
    else {
      for (e = this.expr.substr(this.index, A.max_unop_len), t = e.length; t > 0; ) {
        if (A.unary_ops.hasOwnProperty(e) && (!A.isIdentifierStart(this.code) || this.index + e.length < this.expr.length && !A.isIdentifierPart(this.expr.charCodeAt(this.index + e.length)))) {
          this.index += t;
          const n = this.gobbleToken();
          return n || this.throwError("missing unaryOp argument"), this.runHook("after-token", {
            type: A.UNARY_EXP,
            operator: e,
            argument: n,
            prefix: !0
          });
        }
        e = e.substr(0, --t);
      }
      A.isIdentifierStart(D) ? (F = this.gobbleIdentifier(), A.literals.hasOwnProperty(F.name) ? F = {
        type: A.LITERAL,
        value: A.literals[F.name],
        raw: F.name
      } : F.name === A.this_str && (F = {
        type: A.THIS_EXP
      })) : D === A.OPAREN_CODE && (F = this.gobbleGroup());
    }
    return F ? (F = this.gobbleTokenProperty(F), this.runHook("after-token", F)) : this.runHook("after-token", !1);
  }
  /**
   * Gobble properties of of identifiers/strings/arrays/groups.
   * e.g. `foo`, `bar.baz`, `foo['bar'].baz`
   * It also gobbles function calls:
   * e.g. `Math.acos(obj.angle)`
   * @param {jsep.Expression} node
   * @returns {jsep.Expression}
   */
  gobbleTokenProperty(D) {
    this.gobbleSpaces();
    let e = this.code;
    for (; e === A.PERIOD_CODE || e === A.OBRACK_CODE || e === A.OPAREN_CODE || e === A.QUMARK_CODE; ) {
      let t;
      if (e === A.QUMARK_CODE) {
        if (this.expr.charCodeAt(this.index + 1) !== A.PERIOD_CODE)
          break;
        t = !0, this.index += 2, this.gobbleSpaces(), e = this.code;
      }
      this.index++, e === A.OBRACK_CODE ? (D = {
        type: A.MEMBER_EXP,
        computed: !0,
        object: D,
        property: this.gobbleExpression()
      }, D.property || this.throwError('Unexpected "' + this.char + '"'), this.gobbleSpaces(), e = this.code, e !== A.CBRACK_CODE && this.throwError("Unclosed ["), this.index++) : e === A.OPAREN_CODE ? D = {
        type: A.CALL_EXP,
        arguments: this.gobbleArguments(A.CPAREN_CODE),
        callee: D
      } : (e === A.PERIOD_CODE || t) && (t && this.index--, this.gobbleSpaces(), D = {
        type: A.MEMBER_EXP,
        computed: !1,
        object: D,
        property: this.gobbleIdentifier()
      }), t && (D.optional = !0), this.gobbleSpaces(), e = this.code;
    }
    return D;
  }
  /**
   * Parse simple numeric literals: `12`, `3.4`, `.5`. Do this by using a string to
   * keep track of everything in the numeric literal and then calling `parseFloat` on that string
   * @returns {jsep.Literal}
   */
  gobbleNumericLiteral() {
    let D = "", e, t;
    for (; A.isDecimalDigit(this.code); )
      D += this.expr.charAt(this.index++);
    if (this.code === A.PERIOD_CODE)
      for (D += this.expr.charAt(this.index++); A.isDecimalDigit(this.code); )
        D += this.expr.charAt(this.index++);
    if (e = this.char, e === "e" || e === "E") {
      for (D += this.expr.charAt(this.index++), e = this.char, (e === "+" || e === "-") && (D += this.expr.charAt(this.index++)); A.isDecimalDigit(this.code); )
        D += this.expr.charAt(this.index++);
      A.isDecimalDigit(this.expr.charCodeAt(this.index - 1)) || this.throwError("Expected exponent (" + D + this.char + ")");
    }
    return t = this.code, A.isIdentifierStart(t) ? this.throwError("Variable names cannot start with a number (" + D + this.char + ")") : (t === A.PERIOD_CODE || D.length === 1 && D.charCodeAt(0) === A.PERIOD_CODE) && this.throwError("Unexpected period"), {
      type: A.LITERAL,
      value: parseFloat(D),
      raw: D
    };
  }
  /**
   * Parses a string literal, staring with single or double quotes with basic support for escape codes
   * e.g. `"hello world"`, `'this is\nJSEP'`
   * @returns {jsep.Literal}
   */
  gobbleStringLiteral() {
    let D = "";
    const e = this.index, t = this.expr.charAt(this.index++);
    let F = !1;
    for (; this.index < this.expr.length; ) {
      let n = this.expr.charAt(this.index++);
      if (n === t) {
        F = !0;
        break;
      } else if (n === "\\")
        switch (n = this.expr.charAt(this.index++), n) {
          case "n":
            D += `
`;
            break;
          case "r":
            D += "\r";
            break;
          case "t":
            D += "	";
            break;
          case "b":
            D += "\b";
            break;
          case "f":
            D += "\f";
            break;
          case "v":
            D += "\v";
            break;
          default:
            D += n;
        }
      else
        D += n;
    }
    return F || this.throwError('Unclosed quote after "' + D + '"'), {
      type: A.LITERAL,
      value: D,
      raw: this.expr.substring(e, this.index)
    };
  }
  /**
   * Gobbles only identifiers
   * e.g.: `foo`, `_value`, `$x1`
   * Also, this function checks if that identifier is a literal:
   * (e.g. `true`, `false`, `null`) or `this`
   * @returns {jsep.Identifier}
   */
  gobbleIdentifier() {
    let D = this.code, e = this.index;
    for (A.isIdentifierStart(D) ? this.index++ : this.throwError("Unexpected " + this.char); this.index < this.expr.length && (D = this.code, A.isIdentifierPart(D)); )
      this.index++;
    return {
      type: A.IDENTIFIER,
      name: this.expr.slice(e, this.index)
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
  gobbleArguments(D) {
    const e = [];
    let t = !1, F = 0;
    for (; this.index < this.expr.length; ) {
      this.gobbleSpaces();
      let n = this.code;
      if (n === D) {
        t = !0, this.index++, D === A.CPAREN_CODE && F && F >= e.length && this.throwError("Unexpected token " + String.fromCharCode(D));
        break;
      } else if (n === A.COMMA_CODE) {
        if (this.index++, F++, F !== e.length) {
          if (D === A.CPAREN_CODE)
            this.throwError("Unexpected token ,");
          else if (D === A.CBRACK_CODE)
            for (let r = e.length; r < F; r++)
              e.push(null);
        }
      } else if (e.length !== F && F !== 0)
        this.throwError("Expected comma");
      else {
        const r = this.gobbleExpression();
        (!r || r.type === A.COMPOUND) && this.throwError("Expected comma"), e.push(r);
      }
    }
    return t || this.throwError("Expected " + String.fromCharCode(D)), e;
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
  gobbleGroup() {
    this.index++;
    let D = this.gobbleExpressions(A.CPAREN_CODE);
    if (this.code === A.CPAREN_CODE)
      return this.index++, D.length === 1 ? D[0] : D.length ? {
        type: A.SEQUENCE_EXP,
        expressions: D
      } : !1;
    this.throwError("Unclosed (");
  }
  /**
   * Responsible for parsing Array literals `[1, 2, 3]`
   * This function assumes that it needs to gobble the opening bracket
   * and then tries to gobble the expressions as arguments.
   * @returns {jsep.ArrayExpression}
   */
  gobbleArray() {
    return this.index++, {
      type: A.ARRAY_EXP,
      elements: this.gobbleArguments(A.CBRACK_CODE)
    };
  }
}
const yE = new gE();
Object.assign(A, {
  hooks: yE,
  plugins: new bE(A),
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
    "??": 1,
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
    "%": 10,
    "**": 11
  },
  // sets specific binary_ops as right-associative
  right_associative: /* @__PURE__ */ new Set(["**"]),
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
A.max_unop_len = A.getMaxKeyLen(A.unary_ops);
A.max_binop_len = A.getMaxKeyLen(A.binary_ops);
const H = (u) => new A(u).parse(), wE = Object.getOwnPropertyNames(class {
});
Object.getOwnPropertyNames(A).filter((u) => !wE.includes(u) && H[u] === void 0).forEach((u) => {
  H[u] = A[u];
});
H.Jsep = A;
const xE = "ConditionalExpression";
var OE = {
  name: "ternary",
  init(u) {
    u.hooks.add("after-expression", function(e) {
      if (e.node && this.code === u.QUMARK_CODE) {
        this.index++;
        const t = e.node, F = this.gobbleExpression();
        if (F || this.throwError("Expected expression"), this.gobbleSpaces(), this.code === u.COLON_CODE) {
          this.index++;
          const n = this.gobbleExpression();
          if (n || this.throwError("Expected expression"), e.node = {
            type: xE,
            test: t,
            consequent: F,
            alternate: n
          }, t.operator && u.binary_ops[t.operator] <= 0.9) {
            let r = t;
            for (; r.right.operator && u.binary_ops[r.right.operator] <= 0.9; )
              r = r.right;
            e.node.test = r.right, r.right = e.node, e.node = t;
          }
        } else
          this.throwError("Expected :");
      }
    });
  }
};
H.plugins.register(OE);
const h0 = 47, _E = 92;
var SE = {
  name: "regex",
  init(u) {
    u.hooks.add("gobble-token", function(e) {
      if (this.code === h0) {
        const t = ++this.index;
        let F = !1;
        for (; this.index < this.expr.length; ) {
          if (this.code === h0 && !F) {
            const n = this.expr.slice(t, this.index);
            let r = "";
            for (; ++this.index < this.expr.length; ) {
              const a = this.code;
              if (a >= 97 && a <= 122 || a >= 65 && a <= 90 || a >= 48 && a <= 57)
                r += this.char;
              else
                break;
            }
            let E;
            try {
              E = new RegExp(n, r);
            } catch (a) {
              this.throwError(a.message);
            }
            return e.node = {
              type: u.LITERAL,
              value: E,
              raw: this.expr.slice(t - 1, this.index)
            }, e.node = this.gobbleTokenProperty(e.node), e.node;
          }
          this.code === u.OBRACK_CODE ? F = !0 : F && this.code === u.CBRACK_CODE && (F = !1), this.index += this.code === _E ? 2 : 1;
        }
        this.throwError("Unclosed Regex");
      }
    });
  }
};
const DD = 43, TE = 45, Cu = {
  name: "assignment",
  assignmentOperators: /* @__PURE__ */ new Set(["=", "*=", "**=", "/=", "%=", "+=", "-=", "<<=", ">>=", ">>>=", "&=", "^=", "|=", "||=", "&&=", "??="]),
  updateOperators: [DD, TE],
  assignmentPrecedence: 0.9,
  init(u) {
    const D = [u.IDENTIFIER, u.MEMBER_EXP];
    Cu.assignmentOperators.forEach((t) => u.addBinaryOp(t, Cu.assignmentPrecedence, !0)), u.hooks.add("gobble-token", function(F) {
      const n = this.code;
      Cu.updateOperators.some((r) => r === n && r === this.expr.charCodeAt(this.index + 1)) && (this.index += 2, F.node = {
        type: "UpdateExpression",
        operator: n === DD ? "++" : "--",
        argument: this.gobbleTokenProperty(this.gobbleIdentifier()),
        prefix: !0
      }, (!F.node.argument || !D.includes(F.node.argument.type)) && this.throwError(`Unexpected ${F.node.operator}`));
    }), u.hooks.add("after-token", function(F) {
      if (F.node) {
        const n = this.code;
        Cu.updateOperators.some((r) => r === n && r === this.expr.charCodeAt(this.index + 1)) && (D.includes(F.node.type) || this.throwError(`Unexpected ${F.node.operator}`), this.index += 2, F.node = {
          type: "UpdateExpression",
          operator: n === DD ? "++" : "--",
          argument: F.node,
          prefix: !1
        });
      }
    }), u.hooks.add("after-expression", function(F) {
      F.node && e(F.node);
    });
    function e(t) {
      Cu.assignmentOperators.has(t.operator) ? (t.type = "AssignmentExpression", e(t.left), e(t.right)) : t.operator || Object.values(t).forEach((F) => {
        F && typeof F == "object" && e(F);
      });
    }
  }
};
H.plugins.register(SE, Cu);
H.addUnaryOp("typeof");
H.addLiteral("null", null);
H.addLiteral("undefined", void 0);
const PE = /* @__PURE__ */ new Set(["constructor", "__proto__", "__defineGetter__", "__defineSetter__"]), b = {
  /**
   * @param {jsep.Expression} ast
   * @param {Record<string, any>} subs
   */
  evalAst(u, D) {
    switch (u.type) {
      case "BinaryExpression":
      case "LogicalExpression":
        return b.evalBinaryExpression(u, D);
      case "Compound":
        return b.evalCompound(u, D);
      case "ConditionalExpression":
        return b.evalConditionalExpression(u, D);
      case "Identifier":
        return b.evalIdentifier(u, D);
      case "Literal":
        return b.evalLiteral(u, D);
      case "MemberExpression":
        return b.evalMemberExpression(u, D);
      case "UnaryExpression":
        return b.evalUnaryExpression(u, D);
      case "ArrayExpression":
        return b.evalArrayExpression(u, D);
      case "CallExpression":
        return b.evalCallExpression(u, D);
      case "AssignmentExpression":
        return b.evalAssignmentExpression(u, D);
      default:
        throw SyntaxError("Unexpected expression", u);
    }
  },
  evalBinaryExpression(u, D) {
    return {
      "||": (t, F) => t || F(),
      "&&": (t, F) => t && F(),
      "|": (t, F) => t | F(),
      "^": (t, F) => t ^ F(),
      "&": (t, F) => t & F(),
      // eslint-disable-next-line eqeqeq -- API
      "==": (t, F) => t == F(),
      // eslint-disable-next-line eqeqeq -- API
      "!=": (t, F) => t != F(),
      "===": (t, F) => t === F(),
      "!==": (t, F) => t !== F(),
      "<": (t, F) => t < F(),
      ">": (t, F) => t > F(),
      "<=": (t, F) => t <= F(),
      ">=": (t, F) => t >= F(),
      "<<": (t, F) => t << F(),
      ">>": (t, F) => t >> F(),
      ">>>": (t, F) => t >>> F(),
      "+": (t, F) => t + F(),
      "-": (t, F) => t - F(),
      "*": (t, F) => t * F(),
      "/": (t, F) => t / F(),
      "%": (t, F) => t % F()
    }[u.operator](b.evalAst(u.left, D), () => b.evalAst(u.right, D));
  },
  evalCompound(u, D) {
    let e;
    for (let t = 0; t < u.body.length; t++) {
      u.body[t].type === "Identifier" && ["var", "let", "const"].includes(u.body[t].name) && u.body[t + 1] && u.body[t + 1].type === "AssignmentExpression" && (t += 1);
      const F = u.body[t];
      e = b.evalAst(F, D);
    }
    return e;
  },
  evalConditionalExpression(u, D) {
    return b.evalAst(u.test, D) ? b.evalAst(u.consequent, D) : b.evalAst(u.alternate, D);
  },
  evalIdentifier(u, D) {
    if (Object.hasOwn(D, u.name))
      return D[u.name];
    throw ReferenceError(`${u.name} is not defined`);
  },
  evalLiteral(u) {
    return u.value;
  },
  evalMemberExpression(u, D) {
    const e = String(
      // NOTE: `String(value)` throws error when
      // value has overwritten the toString method to return non-string
      // i.e. `value = {toString: () => []}`
      u.computed ? b.evalAst(u.property) : u.property.name
      // `object.property` property is Identifier
    ), t = b.evalAst(u.object, D);
    if (t == null)
      throw TypeError(`Cannot read properties of ${t} (reading '${e}')`);
    if (!Object.hasOwn(t, e) && PE.has(e))
      throw TypeError(`Cannot read properties of ${t} (reading '${e}')`);
    const F = t[e];
    return typeof F == "function" ? F.bind(t) : F;
  },
  evalUnaryExpression(u, D) {
    return {
      "-": (t) => -b.evalAst(t, D),
      "!": (t) => !b.evalAst(t, D),
      "~": (t) => ~b.evalAst(t, D),
      // eslint-disable-next-line no-implicit-coercion -- API
      "+": (t) => +b.evalAst(t, D),
      typeof: (t) => typeof b.evalAst(t, D)
    }[u.operator](u.argument);
  },
  evalArrayExpression(u, D) {
    return u.elements.map((e) => b.evalAst(e, D));
  },
  evalCallExpression(u, D) {
    const e = u.arguments.map((F) => b.evalAst(F, D));
    return b.evalAst(u.callee, D)(...e);
  },
  evalAssignmentExpression(u, D) {
    if (u.left.type !== "Identifier")
      throw SyntaxError("Invalid left-hand side in assignment");
    const e = u.left.name, t = b.evalAst(u.right, D);
    return D[e] = t, D[e];
  }
};
class vE {
  /**
   * @param {string} expr Expression to evaluate
   */
  constructor(D) {
    this.code = D, this.ast = H(this.code);
  }
  /**
   * @param {object} context Object whose items will be added
   *   to evaluation
   * @returns {EvaluatedResult} Result of evaluated code
   */
  runInNewContext(D) {
    const e = Object.assign(/* @__PURE__ */ Object.create(null), D);
    return b.evalAst(this.ast, e);
  }
}
function Z(u, D) {
  return u = u.slice(), u.push(D), u;
}
function aD(u, D) {
  return D = D.slice(), D.unshift(u), D;
}
class ME extends Error {
  /**
   * @param {AnyResult} value The evaluated scalar value
   */
  constructor(D) {
    super('JSONPath should not be called with "new" (it prevents return of (unwrapped) scalar values)'), this.avoidNew = !0, this.value = D, this.name = "NewError";
  }
}
function d(u, D, e, t, F) {
  if (!(this instanceof d))
    try {
      return new d(u, D, e, t, F);
    } catch (r) {
      if (!r.avoidNew)
        throw r;
      return r.value;
    }
  typeof u == "string" && (F = t, t = e, e = D, D = u, u = null);
  const n = u && typeof u == "object";
  if (u = u || {}, this.json = u.json || e, this.path = u.path || D, this.resultType = u.resultType || "value", this.flatten = u.flatten || !1, this.wrap = Object.hasOwn(u, "wrap") ? u.wrap : !0, this.sandbox = u.sandbox || {}, this.eval = u.eval === void 0 ? "safe" : u.eval, this.ignoreEvalErrors = typeof u.ignoreEvalErrors > "u" ? !1 : u.ignoreEvalErrors, this.parent = u.parent || null, this.parentProperty = u.parentProperty || null, this.callback = u.callback || t || null, this.otherTypeCallback = u.otherTypeCallback || F || function() {
    throw new TypeError("You must supply an otherTypeCallback callback option with the @other() operator.");
  }, u.autostart !== !1) {
    const r = {
      path: n ? u.path : D
    };
    n ? "json" in u && (r.json = u.json) : r.json = e;
    const E = this.evaluate(r);
    if (!E || typeof E != "object")
      throw new ME(E);
    return E;
  }
}
d.prototype.evaluate = function(u, D, e, t) {
  let F = this.parent, n = this.parentProperty, {
    flatten: r,
    wrap: E
  } = this;
  if (this.currResultType = this.resultType, this.currEval = this.eval, this.currSandbox = this.sandbox, e = e || this.callback, this.currOtherTypeCallback = t || this.otherTypeCallback, D = D || this.json, u = u || this.path, u && typeof u == "object" && !Array.isArray(u)) {
    if (!u.path && u.path !== "")
      throw new TypeError('You must supply a "path" property when providing an object argument to JSONPath.evaluate().');
    if (!Object.hasOwn(u, "json"))
      throw new TypeError('You must supply a "json" property when providing an object argument to JSONPath.evaluate().');
    ({
      json: D
    } = u), r = Object.hasOwn(u, "flatten") ? u.flatten : r, this.currResultType = Object.hasOwn(u, "resultType") ? u.resultType : this.currResultType, this.currSandbox = Object.hasOwn(u, "sandbox") ? u.sandbox : this.currSandbox, E = Object.hasOwn(u, "wrap") ? u.wrap : E, this.currEval = Object.hasOwn(u, "eval") ? u.eval : this.currEval, e = Object.hasOwn(u, "callback") ? u.callback : e, this.currOtherTypeCallback = Object.hasOwn(u, "otherTypeCallback") ? u.otherTypeCallback : this.currOtherTypeCallback, F = Object.hasOwn(u, "parent") ? u.parent : F, n = Object.hasOwn(u, "parentProperty") ? u.parentProperty : n, u = u.path;
  }
  if (F = F || null, n = n || null, Array.isArray(u) && (u = d.toPathString(u)), !u && u !== "" || !D)
    return;
  const a = d.toPathArray(u);
  a[0] === "$" && a.length > 1 && a.shift(), this._hasParentSelector = null;
  const C = this._trace(a, D, ["$"], F, n, e).filter(function(s) {
    return s && !s.isParentSelector;
  });
  return C.length ? !E && C.length === 1 && !C[0].hasArrExpr ? this._getPreferredOutput(C[0]) : C.reduce((s, i) => {
    const B = this._getPreferredOutput(i);
    return r && Array.isArray(B) ? s = s.concat(B) : s.push(B), s;
  }, []) : E ? [] : void 0;
};
d.prototype._getPreferredOutput = function(u) {
  const D = this.currResultType;
  switch (D) {
    case "all": {
      const e = Array.isArray(u.path) ? u.path : d.toPathArray(u.path);
      return u.pointer = d.toPointer(e), u.path = typeof u.path == "string" ? u.path : d.toPathString(u.path), u;
    }
    case "value":
    case "parent":
    case "parentProperty":
      return u[D];
    case "path":
      return d.toPathString(u[D]);
    case "pointer":
      return d.toPointer(u.path);
    default:
      throw new TypeError("Unknown result type");
  }
};
d.prototype._handleCallback = function(u, D, e) {
  if (D) {
    const t = this._getPreferredOutput(u);
    u.path = typeof u.path == "string" ? u.path : d.toPathString(u.path), D(t, e, u);
  }
};
d.prototype._trace = function(u, D, e, t, F, n, r, E) {
  let a;
  if (!u.length)
    return a = {
      path: e,
      value: D,
      parent: t,
      parentProperty: F,
      hasArrExpr: r
    }, this._handleCallback(a, n, "value"), a;
  const C = u[0], s = u.slice(1), i = [];
  function B(o) {
    Array.isArray(o) ? o.forEach((c) => {
      i.push(c);
    }) : i.push(o);
  }
  if ((typeof C != "string" || E) && D && Object.hasOwn(D, C))
    B(this._trace(s, D[C], Z(e, C), D, C, n, r));
  else if (C === "*")
    this._walk(D, (o) => {
      B(this._trace(s, D[o], Z(e, o), D, o, n, !0, !0));
    });
  else if (C === "..")
    B(this._trace(s, D, e, t, F, n, r)), this._walk(D, (o) => {
      typeof D[o] == "object" && B(this._trace(u.slice(), D[o], Z(e, o), D, o, n, !0));
    });
  else {
    if (C === "^")
      return this._hasParentSelector = !0, {
        path: e.slice(0, -1),
        expr: s,
        isParentSelector: !0
      };
    if (C === "~")
      return a = {
        path: Z(e, C),
        value: F,
        parent: t,
        parentProperty: null
      }, this._handleCallback(a, n, "property"), a;
    if (C === "$")
      B(this._trace(s, D, e, null, null, n, r));
    else if (/^(-?\d*):(-?\d*):?(\d*)$/u.test(C))
      B(this._slice(C, s, D, e, t, F, n));
    else if (C.indexOf("?(") === 0) {
      if (this.currEval === !1)
        throw new Error("Eval [?(expr)] prevented in JSONPath expression.");
      const o = C.replace(/^\?\((.*?)\)$/u, "$1"), c = /@.?([^?]*)[['](\??\(.*?\))(?!.\)\])[\]']/gu.exec(o);
      c ? this._walk(D, (f) => {
        const h = [c[2]], p = c[1] ? D[f][c[1]] : D[f];
        this._trace(h, p, e, t, F, n, !0).length > 0 && B(this._trace(s, D[f], Z(e, f), D, f, n, !0));
      }) : this._walk(D, (f) => {
        this._eval(o, D[f], f, e, t, F) && B(this._trace(s, D[f], Z(e, f), D, f, n, !0));
      });
    } else if (C[0] === "(") {
      if (this.currEval === !1)
        throw new Error("Eval [(expr)] prevented in JSONPath expression.");
      B(this._trace(aD(this._eval(C, D, e.at(-1), e.slice(0, -1), t, F), s), D, e, t, F, n, r));
    } else if (C[0] === "@") {
      let o = !1;
      const c = C.slice(1, -2);
      switch (c) {
        case "scalar":
          (!D || !["object", "function"].includes(typeof D)) && (o = !0);
          break;
        case "boolean":
        case "string":
        case "undefined":
        case "function":
          typeof D === c && (o = !0);
          break;
        case "integer":
          Number.isFinite(D) && !(D % 1) && (o = !0);
          break;
        case "number":
          Number.isFinite(D) && (o = !0);
          break;
        case "nonFinite":
          typeof D == "number" && !Number.isFinite(D) && (o = !0);
          break;
        case "object":
          D && typeof D === c && (o = !0);
          break;
        case "array":
          Array.isArray(D) && (o = !0);
          break;
        case "other":
          o = this.currOtherTypeCallback(D, e, t, F);
          break;
        case "null":
          D === null && (o = !0);
          break;
        /* c8 ignore next 2 */
        default:
          throw new TypeError("Unknown value type " + c);
      }
      if (o)
        return a = {
          path: e,
          value: D,
          parent: t,
          parentProperty: F
        }, this._handleCallback(a, n, "value"), a;
    } else if (C[0] === "`" && D && Object.hasOwn(D, C.slice(1))) {
      const o = C.slice(1);
      B(this._trace(s, D[o], Z(e, o), D, o, n, r, !0));
    } else if (C.includes(",")) {
      const o = C.split(",");
      for (const c of o)
        B(this._trace(aD(c, s), D, e, t, F, n, !0));
    } else !E && D && Object.hasOwn(D, C) && B(this._trace(s, D[C], Z(e, C), D, C, n, r, !0));
  }
  if (this._hasParentSelector)
    for (let o = 0; o < i.length; o++) {
      const c = i[o];
      if (c && c.isParentSelector) {
        const f = this._trace(c.expr, D, c.path, t, F, n, r);
        if (Array.isArray(f)) {
          i[o] = f[0];
          const h = f.length;
          for (let p = 1; p < h; p++)
            o++, i.splice(o, 0, f[p]);
        } else
          i[o] = f;
      }
    }
  return i;
};
d.prototype._walk = function(u, D) {
  if (Array.isArray(u)) {
    const e = u.length;
    for (let t = 0; t < e; t++)
      D(t);
  } else u && typeof u == "object" && Object.keys(u).forEach((e) => {
    D(e);
  });
};
d.prototype._slice = function(u, D, e, t, F, n, r) {
  if (!Array.isArray(e))
    return;
  const E = e.length, a = u.split(":"), C = a[2] && Number.parseInt(a[2]) || 1;
  let s = a[0] && Number.parseInt(a[0]) || 0, i = a[1] && Number.parseInt(a[1]) || E;
  s = s < 0 ? Math.max(0, s + E) : Math.min(E, s), i = i < 0 ? Math.max(0, i + E) : Math.min(E, i);
  const B = [];
  for (let o = s; o < i; o += C)
    this._trace(aD(o, D), e, t, F, n, r, !0).forEach((f) => {
      B.push(f);
    });
  return B;
};
d.prototype._eval = function(u, D, e, t, F, n) {
  this.currSandbox._$_parentProperty = n, this.currSandbox._$_parent = F, this.currSandbox._$_property = e, this.currSandbox._$_root = this.json, this.currSandbox._$_v = D;
  const r = u.includes("@path");
  r && (this.currSandbox._$_path = d.toPathString(t.concat([e])));
  const E = this.currEval + "Script:" + u;
  if (!d.cache[E]) {
    let a = u.replaceAll("@parentProperty", "_$_parentProperty").replaceAll("@parent", "_$_parent").replaceAll("@property", "_$_property").replaceAll("@root", "_$_root").replaceAll(/@([.\s)[])/gu, "_$_v$1");
    if (r && (a = a.replaceAll("@path", "_$_path")), this.currEval === "safe" || this.currEval === !0 || this.currEval === void 0)
      d.cache[E] = new this.safeVm.Script(a);
    else if (this.currEval === "native")
      d.cache[E] = new this.vm.Script(a);
    else if (typeof this.currEval == "function" && this.currEval.prototype && Object.hasOwn(this.currEval.prototype, "runInNewContext")) {
      const C = this.currEval;
      d.cache[E] = new C(a);
    } else if (typeof this.currEval == "function")
      d.cache[E] = {
        runInNewContext: (C) => this.currEval(a, C)
      };
    else
      throw new TypeError(`Unknown "eval" property "${this.currEval}"`);
  }
  try {
    return d.cache[E].runInNewContext(this.currSandbox);
  } catch (a) {
    if (this.ignoreEvalErrors)
      return !1;
    throw new Error("jsonPath: " + a.message + ": " + u);
  }
};
d.cache = {};
d.toPathString = function(u) {
  const D = u, e = D.length;
  let t = "$";
  for (let F = 1; F < e; F++)
    /^(~|\^|@.*?\(\))$/u.test(D[F]) || (t += /^[0-9*]+$/u.test(D[F]) ? "[" + D[F] + "]" : "['" + D[F] + "']");
  return t;
};
d.toPointer = function(u) {
  const D = u, e = D.length;
  let t = "";
  for (let F = 1; F < e; F++)
    /^(~|\^|@.*?\(\))$/u.test(D[F]) || (t += "/" + D[F].toString().replaceAll("~", "~0").replaceAll("/", "~1"));
  return t;
};
d.toPathArray = function(u) {
  const {
    cache: D
  } = d;
  if (D[u])
    return D[u].concat();
  const e = [], F = u.replaceAll(/@(?:null|boolean|number|string|integer|undefined|nonFinite|scalar|array|object|function|other)\(\)/gu, ";$&;").replaceAll(/[['](\??\(.*?\))[\]'](?!.\])/gu, function(n, r) {
    return "[#" + (e.push(r) - 1) + "]";
  }).replaceAll(/\[['"]([^'\]]*)['"]\]/gu, function(n, r) {
    return "['" + r.replaceAll(".", "%@%").replaceAll("~", "%%@@%%") + "']";
  }).replaceAll("~", ";~;").replaceAll(/['"]?\.['"]?(?![^[]*\])|\[['"]?/gu, ";").replaceAll("%@%", ".").replaceAll("%%@@%%", "~").replaceAll(/(?:;)?(\^+)(?:;)?/gu, function(n, r) {
    return ";" + r.split("").join(";") + ";";
  }).replaceAll(/;;;|;;/gu, ";..;").replaceAll(/;$|'?\]|'$/gu, "").split(";").map(function(n) {
    const r = n.match(/#(\d+)/u);
    return !r || !r[1] ? n : e[r[1]];
  });
  return D[u] = F, D[u].concat();
};
d.prototype.safeVm = {
  Script: vE
};
const NE = function(u, D, e) {
  const t = u.length;
  for (let F = 0; F < t; F++) {
    const n = u[F];
    e(n) && D.push(u.splice(F--, 1)[0]);
  }
};
class IE {
  /**
   * @param {string} expr Expression to evaluate
   */
  constructor(D) {
    this.code = D;
  }
  /**
   * @param {object} context Object whose items will be added
   *   to evaluation
   * @returns {EvaluatedResult} Result of evaluated code
   */
  runInNewContext(D) {
    let e = this.code;
    const t = Object.keys(D), F = [];
    NE(t, F, (C) => typeof D[C] == "function");
    const n = t.map((C) => D[C]);
    e = F.reduce((C, s) => {
      let i = D[s].toString();
      return /function/u.test(i) || (i = "function " + i), "var " + s + "=" + i + ";" + C;
    }, "") + e, !/(['"])use strict\1/u.test(e) && !t.includes("arguments") && (e = "var arguments = undefined;" + e), e = e.replace(/;\s*$/u, "");
    const E = e.lastIndexOf(";"), a = E !== -1 ? e.slice(0, E + 1) + " return " + e.slice(E + 1) : " return " + e;
    return new Function(...t, a)(...n);
  }
}
d.prototype.vm = {
  Script: IE
};
const d0 = (u, D) => KD(u) || KD(D) ? null : (typeof D == "string" && /^\$\./.test(D) ? d({
  path: D,
  json: u
}) : R0(u, D)) ?? null, ne = l.build("[^\\{\\}]*", {}, "gmx"), $E = l.build("[^\\|\\(\\)\\{\\}: 	]+", {}, "gmx"), kE = l.build("[^\\|\\(\\)\\{\\}]+", {}, "gmx"), RE = l.build(
  `
    \\|[ 	]*
      ({{filter}})
      ([ 	]*:[ 	]*({{args}}))*
      ({{tailing}})
  `,
  {
    filter: $E,
    args: kE,
    tailing: ne
  },
  "gmx"
), LE = l.build("[^\\:\\|\\(\\)\\{\\}\v 	]+", {}, "gmx"), UE = l.build(
  `
    [ \\(]*[ 	]*
      ({{selector}})
    ([ 	](?=\\))*)?[ \\)]*
    ({{tailing}})
  `,
  {
    selector: LE,
    tailing: ne
  },
  "gmx"
), p0 = l.build(
  `
    (\\{\\{[ 	]*
      ({{operator}})
    [ 	](?=\\})*\\}\\})
  `,
  { operator: UE },
  "gmx"
), m0 = (u, D) => D ? l.replace(
  D,
  p0,
  (...e) => {
    const t = ZD(e), F = l.exec(t?.tailing ?? "", RE)?.groups, n = d0(u, t?.selector);
    let r = n ?? "";
    try {
      if (F) {
        const a = (F?.args ?? "").trim().split(/\s:\s/), C = oe();
        switch (F.filter) {
          case "date": {
            const s = a?.[1] ? d0(u, String(a?.[1])) ?? a?.[1] : C.timeZone.value;
            r = Z1(
              new Date(n),
              isNaN(K1(s)) ? Intl.DateTimeFormat().resolvedOptions().timeZone : s,
              String(a?.[0] ?? "yyyy-MM-dd")
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
            r = n.replace(/\b\w/g, (s) => s.toUpperCase());
            break;
          case "join":
            r = er(n, a?.[0]);
            break;
          case "take":
            r = tr(n, Number(a?.[0]));
            break;
          case "last":
            r = ZD(n);
            break;
          case "flat":
            r = Kn(n);
            break;
          case "uniq":
            r = Cr(n);
            break;
          case "wrap":
            if (!a?.[0]) break;
            r = n.map((s) => ({ [String(a[0])]: s }));
            break;
          default:
            break;
        }
      }
      const E = (F?.tailing ?? t?.tailing ?? "").replace(/^\)/, "");
      E && (r = m0({ ...u, result: r }, `{{ result${E} }}`));
    } catch (E) {
      return E;
    }
    return p0.test(r) && (r = m0(u, r)), r;
  },
  "all"
) : "", FC = new Proxy(String, {
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
var T = [];
for (var eD = 0; eD < 256; ++eD)
  T.push((eD + 256).toString(16).slice(1));
function jE(u, D = 0) {
  return (T[u[D + 0]] + T[u[D + 1]] + T[u[D + 2]] + T[u[D + 3]] + "-" + T[u[D + 4]] + T[u[D + 5]] + "-" + T[u[D + 6]] + T[u[D + 7]] + "-" + T[u[D + 8]] + T[u[D + 9]] + "-" + T[u[D + 10]] + T[u[D + 11]] + T[u[D + 12]] + T[u[D + 13]] + T[u[D + 14]] + T[u[D + 15]]).toLowerCase();
}
var Su, YE = new Uint8Array(16);
function HE() {
  if (!Su && (Su = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Su))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Su(YE);
}
var WE = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const g0 = {
  randomUUID: WE
};
function GE(u, D, e) {
  if (g0.randomUUID && !u)
    return g0.randomUUID();
  u = u || {};
  var t = u.random || (u.rng || HE)();
  return t[6] = t[6] & 15 | 64, t[8] = t[8] & 63 | 128, jE(t);
}
const zE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i, qE = /^[0-9a-f]{12}[0-5][0-9a-f]{3}[089ab][0-9a-f]{3}[0-9a-f]{12}$/i, gD = (u, D) => {
  if (u) {
    if (zE.test(u) || D)
      return u;
    throw new Error(`Invalid UUID format: ${u}`);
  }
  return GE();
}, nC = gD("00000000-0000-0000-0000-000000000000");
function rC(u, D = !1) {
  if (!D && !qE.test(u))
    throw new Error(`Invalid HexUUID format: ${u}`);
  return gD(
    `${u.slice(0, 8)}-${u.slice(8, 12)}-${u.slice(12, 16)}-${u.slice(
      16,
      20
    )}-${u.slice(20, 32)}`,
    D
  );
}
function EC(u, D = !1) {
  return gD(u, D).replace(/-/gm, "");
}
export {
  Ne as $,
  su as A,
  W as B,
  jF as C,
  L0 as D,
  WF as E,
  GF as F,
  HD as G,
  rC as H,
  R as I,
  j as J,
  Ht as K,
  MD as L,
  nu as M,
  nC as N,
  Tu as O,
  Y as P,
  x0 as Q,
  Fn as R,
  FC as S,
  sD as T,
  EC as U,
  k0 as V,
  MF as W,
  $0 as X,
  Lu as Y,
  ZD as Z,
  S0 as _,
  rD as a,
  UF as a0,
  bu as a1,
  U0 as a2,
  rt as a3,
  Sn as a4,
  Tn as a5,
  qn as a6,
  Nn as a7,
  K as a8,
  KD as a9,
  Cr as aa,
  Zn as ab,
  Kn as ac,
  mD as ad,
  DC as ae,
  eC as af,
  Be as b,
  XE as c,
  VE as d,
  JE as e,
  gD as f,
  zn as g,
  jn as h,
  N as i,
  uC as j,
  lD as k,
  Nu as l,
  Re as m,
  SD as n,
  T0 as o,
  m0 as p,
  pu as q,
  P0 as r,
  d0 as s,
  QE as t,
  ce as u,
  Iu as v,
  qt as w,
  vF as x,
  Zt as y,
  iu as z
};
//# sourceMappingURL=uuid-CPqcbMOg.js.map
