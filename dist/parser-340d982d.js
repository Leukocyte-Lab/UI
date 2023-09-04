import { s as Ve, u as ut } from "./index-b6d5966a.js";
const fE = (u, { debounce: D = 300, flush: e = "pre" } = {}) => {
  const t = Ve(!1);
  let F;
  return {
    triggered: t,
    onTrigger: (n) => {
      !t() && e === "pre" || e === "sync" ? u == null || u.call({}, n) : (n.preventDefault(), n.stopPropagation()), t.set(!0), globalThis.clearTimeout(F), F = globalThis.setTimeout(() => {
        t.set(!1), (e === "post" || e === "sync") && (u == null || u.call({}, n));
      }, D);
    }
  };
};
var Dt = typeof global == "object" && global && global.Object === Object && global;
const te = Dt;
var et = typeof self == "object" && self && self.Object === Object && self, tt = te || et || Function("return this")();
const G = tt;
var Ft = G.Symbol;
const W = Ft;
var Fe = Object.prototype, rt = Fe.hasOwnProperty, nt = Fe.toString, hu = W ? W.toStringTag : void 0;
function at(u) {
  var D = rt.call(u, hu), e = u[hu];
  try {
    u[hu] = void 0;
    var t = !0;
  } catch {
  }
  var F = nt.call(u);
  return t && (D ? u[hu] = e : delete u[hu]), F;
}
var Et = Object.prototype, Ct = Et.toString;
function At(u) {
  return Ct.call(u);
}
var it = "[object Null]", ot = "[object Undefined]", l0 = W ? W.toStringTag : void 0;
function ou(u) {
  return u == null ? u === void 0 ? ot : it : l0 && l0 in Object(u) ? at(u) : At(u);
}
function iu(u) {
  return u != null && typeof u == "object";
}
var st = "[object Symbol]";
function VD(u) {
  return typeof u == "symbol" || iu(u) && ou(u) == st;
}
function re(u, D) {
  for (var e = -1, t = u == null ? 0 : u.length, F = Array(t); ++e < t; )
    F[e] = D(u[e], e, u);
  return F;
}
var Bt = Array.isArray;
const R = Bt;
var lt = 1 / 0, f0 = W ? W.prototype : void 0, c0 = f0 ? f0.toString : void 0;
function ne(u) {
  if (typeof u == "string")
    return u;
  if (R(u))
    return re(u, ne) + "";
  if (VD(u))
    return c0 ? c0.call(u) : "";
  var D = u + "";
  return D == "0" && 1 / u == -lt ? "-0" : D;
}
function u0(u) {
  var D = typeof u;
  return u != null && (D == "object" || D == "function");
}
function ft(u) {
  return u;
}
var ct = "[object AsyncFunction]", dt = "[object Function]", pt = "[object GeneratorFunction]", ht = "[object Proxy]";
function ae(u) {
  if (!u0(u))
    return !1;
  var D = ou(u);
  return D == dt || D == pt || D == ct || D == ht;
}
var mt = G["__core-js_shared__"];
const uD = mt;
var d0 = function() {
  var u = /[^.]+$/.exec(uD && uD.keys && uD.keys.IE_PROTO || "");
  return u ? "Symbol(src)_1." + u : "";
}();
function vt(u) {
  return !!d0 && d0 in u;
}
var gt = Function.prototype, bt = gt.toString;
function eu(u) {
  if (u != null) {
    try {
      return bt.call(u);
    } catch {
    }
    try {
      return u + "";
    } catch {
    }
  }
  return "";
}
var yt = /[\\^$.*+?()[\]{}|]/g, _t = /^\[object .+?Constructor\]$/, wt = Function.prototype, xt = Object.prototype, Ot = wt.toString, Tt = xt.hasOwnProperty, St = RegExp(
  "^" + Ot.call(Tt).replace(yt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Pt(u) {
  if (!u0(u) || vt(u))
    return !1;
  var D = ae(u) ? St : _t;
  return D.test(eu(u));
}
function Mt(u, D) {
  return u == null ? void 0 : u[D];
}
function su(u, D) {
  var e = Mt(u, D);
  return Pt(e) ? e : void 0;
}
var $t = su(G, "WeakMap");
const ED = $t;
function Nt() {
}
function It(u, D, e, t) {
  for (var F = u.length, r = e + (t ? 1 : -1); t ? r-- : ++r < F; )
    if (D(u[r], r, u))
      return r;
  return -1;
}
function Ut(u) {
  return u !== u;
}
function kt(u, D, e) {
  for (var t = e - 1, F = u.length; ++t < F; )
    if (u[t] === D)
      return t;
  return -1;
}
function jt(u, D, e) {
  return D === D ? kt(u, D, e) : It(u, Ut, e);
}
function Rt(u, D) {
  var e = u == null ? 0 : u.length;
  return !!e && jt(u, D, 0) > -1;
}
var Yt = 9007199254740991, Lt = /^(?:0|[1-9]\d*)$/;
function Ee(u, D) {
  var e = typeof u;
  return D = D ?? Yt, !!D && (e == "number" || e != "symbol" && Lt.test(u)) && u > -1 && u % 1 == 0 && u < D;
}
function Ce(u, D) {
  return u === D || u !== u && D !== D;
}
var Wt = 9007199254740991;
function D0(u) {
  return typeof u == "number" && u > -1 && u % 1 == 0 && u <= Wt;
}
function ju(u) {
  return u != null && D0(u.length) && !ae(u);
}
var zt = Object.prototype;
function Ae(u) {
  var D = u && u.constructor, e = typeof D == "function" && D.prototype || zt;
  return u === e;
}
function Ht(u, D) {
  for (var e = -1, t = Array(u); ++e < u; )
    t[e] = D(e);
  return t;
}
var qt = "[object Arguments]";
function p0(u) {
  return iu(u) && ou(u) == qt;
}
var ie = Object.prototype, Gt = ie.hasOwnProperty, Zt = ie.propertyIsEnumerable, Kt = p0(function() {
  return arguments;
}()) ? p0 : function(u) {
  return iu(u) && Gt.call(u, "callee") && !Zt.call(u, "callee");
};
const Ru = Kt;
function Qt() {
  return !1;
}
var oe = typeof exports == "object" && exports && !exports.nodeType && exports, h0 = oe && typeof module == "object" && module && !module.nodeType && module, Jt = h0 && h0.exports === oe, m0 = Jt ? G.Buffer : void 0, Xt = m0 ? m0.isBuffer : void 0, Vt = Xt || Qt;
const Iu = Vt;
var uF = "[object Arguments]", DF = "[object Array]", eF = "[object Boolean]", tF = "[object Date]", FF = "[object Error]", rF = "[object Function]", nF = "[object Map]", aF = "[object Number]", EF = "[object Object]", CF = "[object RegExp]", AF = "[object Set]", iF = "[object String]", oF = "[object WeakMap]", sF = "[object ArrayBuffer]", BF = "[object DataView]", lF = "[object Float32Array]", fF = "[object Float64Array]", cF = "[object Int8Array]", dF = "[object Int16Array]", pF = "[object Int32Array]", hF = "[object Uint8Array]", mF = "[object Uint8ClampedArray]", vF = "[object Uint16Array]", gF = "[object Uint32Array]", w = {};
w[lF] = w[fF] = w[cF] = w[dF] = w[pF] = w[hF] = w[mF] = w[vF] = w[gF] = !0;
w[uF] = w[DF] = w[sF] = w[eF] = w[BF] = w[tF] = w[FF] = w[rF] = w[nF] = w[aF] = w[EF] = w[CF] = w[AF] = w[iF] = w[oF] = !1;
function bF(u) {
  return iu(u) && D0(u.length) && !!w[ou(u)];
}
function yF(u) {
  return function(D) {
    return u(D);
  };
}
var se = typeof exports == "object" && exports && !exports.nodeType && exports, vu = se && typeof module == "object" && module && !module.nodeType && module, _F = vu && vu.exports === se, DD = _F && te.process, wF = function() {
  try {
    var u = vu && vu.require && vu.require("util").types;
    return u || DD && DD.binding && DD.binding("util");
  } catch {
  }
}();
const v0 = wF;
var g0 = v0 && v0.isTypedArray, xF = g0 ? yF(g0) : bF;
const e0 = xF;
var OF = Object.prototype, TF = OF.hasOwnProperty;
function SF(u, D) {
  var e = R(u), t = !e && Ru(u), F = !e && !t && Iu(u), r = !e && !t && !F && e0(u), n = e || t || F || r, C = n ? Ht(u.length, String) : [], E = C.length;
  for (var a in u)
    (D || TF.call(u, a)) && !(n && // Safari 9 has enumerable `arguments.length` in strict mode.
    (a == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    F && (a == "offset" || a == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    r && (a == "buffer" || a == "byteLength" || a == "byteOffset") || // Skip index properties.
    Ee(a, E))) && C.push(a);
  return C;
}
function PF(u, D) {
  return function(e) {
    return u(D(e));
  };
}
var MF = PF(Object.keys, Object);
const $F = MF;
var NF = Object.prototype, IF = NF.hasOwnProperty;
function Be(u) {
  if (!Ae(u))
    return $F(u);
  var D = [];
  for (var e in Object(u))
    IF.call(u, e) && e != "constructor" && D.push(e);
  return D;
}
function t0(u) {
  return ju(u) ? SF(u) : Be(u);
}
var UF = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, kF = /^\w*$/;
function F0(u, D) {
  if (R(u))
    return !1;
  var e = typeof u;
  return e == "number" || e == "symbol" || e == "boolean" || u == null || VD(u) ? !0 : kF.test(u) || !UF.test(u) || D != null && u in Object(D);
}
var jF = su(Object, "create");
const bu = jF;
function RF() {
  this.__data__ = bu ? bu(null) : {}, this.size = 0;
}
function YF(u) {
  var D = this.has(u) && delete this.__data__[u];
  return this.size -= D ? 1 : 0, D;
}
var LF = "__lodash_hash_undefined__", WF = Object.prototype, zF = WF.hasOwnProperty;
function HF(u) {
  var D = this.__data__;
  if (bu) {
    var e = D[u];
    return e === LF ? void 0 : e;
  }
  return zF.call(D, u) ? D[u] : void 0;
}
var qF = Object.prototype, GF = qF.hasOwnProperty;
function ZF(u) {
  var D = this.__data__;
  return bu ? D[u] !== void 0 : GF.call(D, u);
}
var KF = "__lodash_hash_undefined__";
function QF(u, D) {
  var e = this.__data__;
  return this.size += this.has(u) ? 0 : 1, e[u] = bu && D === void 0 ? KF : D, this;
}
function uu(u) {
  var D = -1, e = u == null ? 0 : u.length;
  for (this.clear(); ++D < e; ) {
    var t = u[D];
    this.set(t[0], t[1]);
  }
}
uu.prototype.clear = RF;
uu.prototype.delete = YF;
uu.prototype.get = HF;
uu.prototype.has = ZF;
uu.prototype.set = QF;
function JF() {
  this.__data__ = [], this.size = 0;
}
function Yu(u, D) {
  for (var e = u.length; e--; )
    if (Ce(u[e][0], D))
      return e;
  return -1;
}
var XF = Array.prototype, VF = XF.splice;
function ur(u) {
  var D = this.__data__, e = Yu(D, u);
  if (e < 0)
    return !1;
  var t = D.length - 1;
  return e == t ? D.pop() : VF.call(D, e, 1), --this.size, !0;
}
function Dr(u) {
  var D = this.__data__, e = Yu(D, u);
  return e < 0 ? void 0 : D[e][1];
}
function er(u) {
  return Yu(this.__data__, u) > -1;
}
function tr(u, D) {
  var e = this.__data__, t = Yu(e, u);
  return t < 0 ? (++this.size, e.push([u, D])) : e[t][1] = D, this;
}
function Z(u) {
  var D = -1, e = u == null ? 0 : u.length;
  for (this.clear(); ++D < e; ) {
    var t = u[D];
    this.set(t[0], t[1]);
  }
}
Z.prototype.clear = JF;
Z.prototype.delete = ur;
Z.prototype.get = Dr;
Z.prototype.has = er;
Z.prototype.set = tr;
var Fr = su(G, "Map");
const yu = Fr;
function rr() {
  this.size = 0, this.__data__ = {
    hash: new uu(),
    map: new (yu || Z)(),
    string: new uu()
  };
}
function nr(u) {
  var D = typeof u;
  return D == "string" || D == "number" || D == "symbol" || D == "boolean" ? u !== "__proto__" : u === null;
}
function Lu(u, D) {
  var e = u.__data__;
  return nr(D) ? e[typeof D == "string" ? "string" : "hash"] : e.map;
}
function ar(u) {
  var D = Lu(this, u).delete(u);
  return this.size -= D ? 1 : 0, D;
}
function Er(u) {
  return Lu(this, u).get(u);
}
function Cr(u) {
  return Lu(this, u).has(u);
}
function Ar(u, D) {
  var e = Lu(this, u), t = e.size;
  return e.set(u, D), this.size += e.size == t ? 0 : 1, this;
}
function K(u) {
  var D = -1, e = u == null ? 0 : u.length;
  for (this.clear(); ++D < e; ) {
    var t = u[D];
    this.set(t[0], t[1]);
  }
}
K.prototype.clear = rr;
K.prototype.delete = ar;
K.prototype.get = Er;
K.prototype.has = Cr;
K.prototype.set = Ar;
var ir = "Expected a function";
function r0(u, D) {
  if (typeof u != "function" || D != null && typeof D != "function")
    throw new TypeError(ir);
  var e = function() {
    var t = arguments, F = D ? D.apply(this, t) : t[0], r = e.cache;
    if (r.has(F))
      return r.get(F);
    var n = u.apply(this, t);
    return e.cache = r.set(F, n) || r, n;
  };
  return e.cache = new (r0.Cache || K)(), e;
}
r0.Cache = K;
var or = 500;
function sr(u) {
  var D = r0(u, function(t) {
    return e.size === or && e.clear(), t;
  }), e = D.cache;
  return D;
}
var Br = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, lr = /\\(\\)?/g, fr = sr(function(u) {
  var D = [];
  return u.charCodeAt(0) === 46 && D.push(""), u.replace(Br, function(e, t, F, r) {
    D.push(F ? r.replace(lr, "$1") : t || e);
  }), D;
});
const cr = fr;
function dr(u) {
  return u == null ? "" : ne(u);
}
function le(u, D) {
  return R(u) ? u : F0(u, D) ? [u] : cr(dr(u));
}
var pr = 1 / 0;
function Wu(u) {
  if (typeof u == "string" || VD(u))
    return u;
  var D = u + "";
  return D == "0" && 1 / u == -pr ? "-0" : D;
}
function fe(u, D) {
  D = le(D, u);
  for (var e = 0, t = D.length; u != null && e < t; )
    u = u[Wu(D[e++])];
  return e && e == t ? u : void 0;
}
function ce(u, D, e) {
  var t = u == null ? void 0 : fe(u, D);
  return t === void 0 ? e : t;
}
function de(u, D) {
  for (var e = -1, t = D.length, F = u.length; ++e < t; )
    u[F + e] = D[e];
  return u;
}
var b0 = W ? W.isConcatSpreadable : void 0;
function hr(u) {
  return R(u) || Ru(u) || !!(b0 && u && u[b0]);
}
function pe(u, D, e, t, F) {
  var r = -1, n = u.length;
  for (e || (e = hr), F || (F = []); ++r < n; ) {
    var C = u[r];
    D > 0 && e(C) ? D > 1 ? pe(C, D - 1, e, t, F) : de(F, C) : t || (F[F.length] = C);
  }
  return F;
}
function mr() {
  this.__data__ = new Z(), this.size = 0;
}
function vr(u) {
  var D = this.__data__, e = D.delete(u);
  return this.size = D.size, e;
}
function gr(u) {
  return this.__data__.get(u);
}
function br(u) {
  return this.__data__.has(u);
}
var yr = 200;
function _r(u, D) {
  var e = this.__data__;
  if (e instanceof Z) {
    var t = e.__data__;
    if (!yu || t.length < yr - 1)
      return t.push([u, D]), this.size = ++e.size, this;
    e = this.__data__ = new K(t);
  }
  return e.set(u, D), this.size = e.size, this;
}
function q(u) {
  var D = this.__data__ = new Z(u);
  this.size = D.size;
}
q.prototype.clear = mr;
q.prototype.delete = vr;
q.prototype.get = gr;
q.prototype.has = br;
q.prototype.set = _r;
function wr(u, D) {
  for (var e = -1, t = u == null ? 0 : u.length, F = 0, r = []; ++e < t; ) {
    var n = u[e];
    D(n, e, u) && (r[F++] = n);
  }
  return r;
}
function xr() {
  return [];
}
var Or = Object.prototype, Tr = Or.propertyIsEnumerable, y0 = Object.getOwnPropertySymbols, Sr = y0 ? function(u) {
  return u == null ? [] : (u = Object(u), wr(y0(u), function(D) {
    return Tr.call(u, D);
  }));
} : xr;
const Pr = Sr;
function Mr(u, D, e) {
  var t = D(u);
  return R(u) ? t : de(t, e(u));
}
function _0(u) {
  return Mr(u, t0, Pr);
}
var $r = su(G, "DataView");
const CD = $r;
var Nr = su(G, "Promise");
const AD = Nr;
var Ir = su(G, "Set");
const Cu = Ir;
var w0 = "[object Map]", Ur = "[object Object]", x0 = "[object Promise]", O0 = "[object Set]", T0 = "[object WeakMap]", S0 = "[object DataView]", kr = eu(CD), jr = eu(yu), Rr = eu(AD), Yr = eu(Cu), Lr = eu(ED), V = ou;
(CD && V(new CD(new ArrayBuffer(1))) != S0 || yu && V(new yu()) != w0 || AD && V(AD.resolve()) != x0 || Cu && V(new Cu()) != O0 || ED && V(new ED()) != T0) && (V = function(u) {
  var D = ou(u), e = D == Ur ? u.constructor : void 0, t = e ? eu(e) : "";
  if (t)
    switch (t) {
      case kr:
        return S0;
      case jr:
        return w0;
      case Rr:
        return x0;
      case Yr:
        return O0;
      case Lr:
        return T0;
    }
  return D;
});
const iD = V;
var Wr = G.Uint8Array;
const P0 = Wr;
var zr = "__lodash_hash_undefined__";
function Hr(u) {
  return this.__data__.set(u, zr), this;
}
function qr(u) {
  return this.__data__.has(u);
}
function _u(u) {
  var D = -1, e = u == null ? 0 : u.length;
  for (this.__data__ = new K(); ++D < e; )
    this.add(u[D]);
}
_u.prototype.add = _u.prototype.push = Hr;
_u.prototype.has = qr;
function Gr(u, D) {
  for (var e = -1, t = u == null ? 0 : u.length; ++e < t; )
    if (D(u[e], e, u))
      return !0;
  return !1;
}
function he(u, D) {
  return u.has(D);
}
var Zr = 1, Kr = 2;
function me(u, D, e, t, F, r) {
  var n = e & Zr, C = u.length, E = D.length;
  if (C != E && !(n && E > C))
    return !1;
  var a = r.get(u), A = r.get(D);
  if (a && A)
    return a == D && A == u;
  var i = -1, l = !0, d = e & Kr ? new _u() : void 0;
  for (r.set(u, D), r.set(D, u); ++i < C; ) {
    var p = u[i], g = D[i];
    if (t)
      var c = n ? t(g, p, i, D, u, r) : t(p, g, i, u, D, r);
    if (c !== void 0) {
      if (c)
        continue;
      l = !1;
      break;
    }
    if (d) {
      if (!Gr(D, function(f, B) {
        if (!he(d, B) && (p === f || F(p, f, e, t, r)))
          return d.push(B);
      })) {
        l = !1;
        break;
      }
    } else if (!(p === g || F(p, g, e, t, r))) {
      l = !1;
      break;
    }
  }
  return r.delete(u), r.delete(D), l;
}
function Qr(u) {
  var D = -1, e = Array(u.size);
  return u.forEach(function(t, F) {
    e[++D] = [F, t];
  }), e;
}
function n0(u) {
  var D = -1, e = Array(u.size);
  return u.forEach(function(t) {
    e[++D] = t;
  }), e;
}
var Jr = 1, Xr = 2, Vr = "[object Boolean]", u1 = "[object Date]", D1 = "[object Error]", e1 = "[object Map]", t1 = "[object Number]", F1 = "[object RegExp]", r1 = "[object Set]", n1 = "[object String]", a1 = "[object Symbol]", E1 = "[object ArrayBuffer]", C1 = "[object DataView]", M0 = W ? W.prototype : void 0, eD = M0 ? M0.valueOf : void 0;
function A1(u, D, e, t, F, r, n) {
  switch (e) {
    case C1:
      if (u.byteLength != D.byteLength || u.byteOffset != D.byteOffset)
        return !1;
      u = u.buffer, D = D.buffer;
    case E1:
      return !(u.byteLength != D.byteLength || !r(new P0(u), new P0(D)));
    case Vr:
    case u1:
    case t1:
      return Ce(+u, +D);
    case D1:
      return u.name == D.name && u.message == D.message;
    case F1:
    case n1:
      return u == D + "";
    case e1:
      var C = Qr;
    case r1:
      var E = t & Jr;
      if (C || (C = n0), u.size != D.size && !E)
        return !1;
      var a = n.get(u);
      if (a)
        return a == D;
      t |= Xr, n.set(u, D);
      var A = me(C(u), C(D), t, F, r, n);
      return n.delete(u), A;
    case a1:
      if (eD)
        return eD.call(u) == eD.call(D);
  }
  return !1;
}
var i1 = 1, o1 = Object.prototype, s1 = o1.hasOwnProperty;
function B1(u, D, e, t, F, r) {
  var n = e & i1, C = _0(u), E = C.length, a = _0(D), A = a.length;
  if (E != A && !n)
    return !1;
  for (var i = E; i--; ) {
    var l = C[i];
    if (!(n ? l in D : s1.call(D, l)))
      return !1;
  }
  var d = r.get(u), p = r.get(D);
  if (d && p)
    return d == D && p == u;
  var g = !0;
  r.set(u, D), r.set(D, u);
  for (var c = n; ++i < E; ) {
    l = C[i];
    var f = u[l], B = D[l];
    if (t)
      var s = n ? t(B, f, l, D, u, r) : t(f, B, l, u, D, r);
    if (!(s === void 0 ? f === B || F(f, B, e, t, r) : s)) {
      g = !1;
      break;
    }
    c || (c = l == "constructor");
  }
  if (g && !c) {
    var o = u.constructor, h = D.constructor;
    o != h && "constructor" in u && "constructor" in D && !(typeof o == "function" && o instanceof o && typeof h == "function" && h instanceof h) && (g = !1);
  }
  return r.delete(u), r.delete(D), g;
}
var l1 = 1, $0 = "[object Arguments]", N0 = "[object Array]", $u = "[object Object]", f1 = Object.prototype, I0 = f1.hasOwnProperty;
function c1(u, D, e, t, F, r) {
  var n = R(u), C = R(D), E = n ? N0 : iD(u), a = C ? N0 : iD(D);
  E = E == $0 ? $u : E, a = a == $0 ? $u : a;
  var A = E == $u, i = a == $u, l = E == a;
  if (l && Iu(u)) {
    if (!Iu(D))
      return !1;
    n = !0, A = !1;
  }
  if (l && !A)
    return r || (r = new q()), n || e0(u) ? me(u, D, e, t, F, r) : A1(u, D, E, e, t, F, r);
  if (!(e & l1)) {
    var d = A && I0.call(u, "__wrapped__"), p = i && I0.call(D, "__wrapped__");
    if (d || p) {
      var g = d ? u.value() : u, c = p ? D.value() : D;
      return r || (r = new q()), F(g, c, e, t, r);
    }
  }
  return l ? (r || (r = new q()), B1(u, D, e, t, F, r)) : !1;
}
function a0(u, D, e, t, F) {
  return u === D ? !0 : u == null || D == null || !iu(u) && !iu(D) ? u !== u && D !== D : c1(u, D, e, t, a0, F);
}
var d1 = 1, p1 = 2;
function h1(u, D, e, t) {
  var F = e.length, r = F, n = !t;
  if (u == null)
    return !r;
  for (u = Object(u); F--; ) {
    var C = e[F];
    if (n && C[2] ? C[1] !== u[C[0]] : !(C[0] in u))
      return !1;
  }
  for (; ++F < r; ) {
    C = e[F];
    var E = C[0], a = u[E], A = C[1];
    if (n && C[2]) {
      if (a === void 0 && !(E in u))
        return !1;
    } else {
      var i = new q();
      if (t)
        var l = t(a, A, E, u, D, i);
      if (!(l === void 0 ? a0(A, a, d1 | p1, t, i) : l))
        return !1;
    }
  }
  return !0;
}
function ve(u) {
  return u === u && !u0(u);
}
function m1(u) {
  for (var D = t0(u), e = D.length; e--; ) {
    var t = D[e], F = u[t];
    D[e] = [t, F, ve(F)];
  }
  return D;
}
function ge(u, D) {
  return function(e) {
    return e == null ? !1 : e[u] === D && (D !== void 0 || u in Object(e));
  };
}
function v1(u) {
  var D = m1(u);
  return D.length == 1 && D[0][2] ? ge(D[0][0], D[0][1]) : function(e) {
    return e === u || h1(e, u, D);
  };
}
function g1(u, D) {
  return u != null && D in Object(u);
}
function b1(u, D, e) {
  D = le(D, u);
  for (var t = -1, F = D.length, r = !1; ++t < F; ) {
    var n = Wu(D[t]);
    if (!(r = u != null && e(u, n)))
      break;
    u = u[n];
  }
  return r || ++t != F ? r : (F = u == null ? 0 : u.length, !!F && D0(F) && Ee(n, F) && (R(u) || Ru(u)));
}
function y1(u, D) {
  return u != null && b1(u, D, g1);
}
var _1 = 1, w1 = 2;
function x1(u, D) {
  return F0(u) && ve(D) ? ge(Wu(u), D) : function(e) {
    var t = ce(e, u);
    return t === void 0 && t === D ? y1(e, u) : a0(D, t, _1 | w1);
  };
}
function O1(u) {
  return function(D) {
    return D == null ? void 0 : D[u];
  };
}
function T1(u) {
  return function(D) {
    return fe(D, u);
  };
}
function S1(u) {
  return F0(u) ? O1(Wu(u)) : T1(u);
}
function P1(u) {
  return typeof u == "function" ? u : u == null ? ft : typeof u == "object" ? R(u) ? x1(u[0], u[1]) : v1(u) : S1(u);
}
function M1(u) {
  return function(D, e, t) {
    for (var F = -1, r = Object(D), n = t(D), C = n.length; C--; ) {
      var E = n[u ? C : ++F];
      if (e(r[E], E, r) === !1)
        break;
    }
    return D;
  };
}
var $1 = M1();
const N1 = $1;
function I1(u, D) {
  return u && N1(u, D, t0);
}
function U1(u, D) {
  return function(e, t) {
    if (e == null)
      return e;
    if (!ju(e))
      return u(e, t);
    for (var F = e.length, r = D ? F : -1, n = Object(e); (D ? r-- : ++r < F) && t(n[r], r, n) !== !1; )
      ;
    return e;
  };
}
var k1 = U1(I1);
const j1 = k1;
function R1(u, D, e) {
  for (var t = -1, F = u == null ? 0 : u.length; ++t < F; )
    if (e(D, u[t]))
      return !0;
  return !1;
}
function U0(u) {
  var D = u == null ? 0 : u.length;
  return D ? u[D - 1] : void 0;
}
function Y1(u, D) {
  var e = -1, t = ju(u) ? Array(u.length) : [];
  return j1(u, function(F, r, n) {
    t[++e] = D(F, r, n);
  }), t;
}
function L1(u, D) {
  var e = R(u) ? re : Y1;
  return e(u, P1(D));
}
function W1(u, D) {
  return pe(L1(u, D), 1);
}
function oD(u) {
  for (var D = -1, e = u == null ? 0 : u.length, t = {}; ++D < e; ) {
    var F = u[D];
    t[F[0]] = F[1];
  }
  return t;
}
var z1 = "[object Map]", H1 = "[object Set]", q1 = Object.prototype, G1 = q1.hasOwnProperty;
function k0(u) {
  if (u == null)
    return !0;
  if (ju(u) && (R(u) || typeof u == "string" || typeof u.splice == "function" || Iu(u) || e0(u) || Ru(u)))
    return !u.length;
  var D = iD(u);
  if (D == z1 || D == H1)
    return !u.size;
  if (Ae(u))
    return !Be(u).length;
  for (var e in u)
    if (G1.call(u, e))
      return !1;
  return !0;
}
var Z1 = Array.prototype, K1 = Z1.join;
function Q1(u, D) {
  return u == null ? "" : K1.call(u, D);
}
var J1 = 1 / 0, X1 = Cu && 1 / n0(new Cu([, -0]))[1] == J1 ? function(u) {
  return new Cu(u);
} : Nt;
const V1 = X1;
var un = 200;
function Dn(u, D, e) {
  var t = -1, F = Rt, r = u.length, n = !0, C = [], E = C;
  if (e)
    n = !1, F = R1;
  else if (r >= un) {
    var a = D ? null : V1(u);
    if (a)
      return n0(a);
    n = !1, F = he, E = new _u();
  } else
    E = D ? [] : C;
  u:
    for (; ++t < r; ) {
      var A = u[t], i = D ? D(A) : A;
      if (A = e || A !== 0 ? A : 0, n && i === i) {
        for (var l = E.length; l--; )
          if (E[l] === i)
            continue u;
        D && E.push(i), C.push(A);
      } else
        F(E, i, e) || (E !== C && E.push(i), C.push(A));
    }
  return C;
}
function en(u) {
  return u && u.length ? Dn(u) : [];
}
const tn = 0.5522847498307935, Fn = (u, D, e, t = !1) => t ? u[e] - D[e] : Math.abs(u[e] - D[e]), rn = (u, D, e = !1) => {
  const t = Object.keys(u).map(
    (F) => Fn(u, D, F, e)
  );
  return e ? oD(
    t.map((F, r) => [Object.keys(u)[r], F])
  ) : Math.pow(
    t.reduce((F, r) => F + Math.pow(r, t.length), 0),
    1 / t.length
  );
}, nn = {
  get: (u, D, e) => /^delta/.test(D) ? (t, F, r) => D === "delta" ? rn(t, F, r) : Reflect.get(u, D, e) : D === "add" ? (t, F) => oD(
    Object.keys(t).map((r) => [r, t[r] + F[r]])
  ) : D === "minus" ? (t, F) => oD(
    Object.keys(t).map((r) => [r, t[r] - F[r]])
  ) : Reflect.get(u, D, e)
}, j0 = new Proxy(Math, {
  get(u, D, e) {
    return D === "ARC_BASE" ? tn : D === "Vector" ? new Proxy({}, nn) : D === "deg" ? (t) => t * (180 / Math.PI) : D === "rad" ? (t) => t * (Math.PI / 180) : D === "gcd" ? (t, F) => F ? j0.gcd(F, t % F) : t : D === "lcm" ? (t, F) => t * F / j0.gcd(t, F) : D === "clamp" ? (t, F, r) => Math.min(Math.max(t, F), r) : D === "round" ? (t, F = 0) => Math.round(t * 10 ** F) / 10 ** F : D === "cot" ? (t) => 1 / Math.tan(t) : D === "sec" ? (t) => 1 / Math.cos(t) : D === "csc" ? (t) => 1 / Math.sin(t) : Reflect.get(u, D, e);
  }
}), cE = new Proxy(String, {
  get(u, D, e) {
    return D === "toKebabCase" ? (t) => t.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, "-").toLowerCase() : D === "toUpperCase" || D === "toLocaleUpperCase" ? (t, F = "every") => {
      switch (F) {
        case "every":
          return t[D]();
        case "eachFirst":
          return t.split(" ").map((r) => r.charAt(0)[D]() + r.slice(1)).join(" ");
        case "onlyFirst":
          return t.charAt(0)[D]() + t.slice(1);
      }
    } : D === "humanizeByte" ? (t, F = 1024) => {
      const r = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], n = Math.floor(Math.log(t) / Math.log(F));
      return `${(t / Math.pow(F, n)).toFixed(2)} ${r[n]}`;
    } : Reflect.get(u, D, e);
  }
});
let Nu;
const an = new Uint8Array(16);
function En() {
  if (!Nu && (Nu = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Nu))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Nu(an);
}
const M = [];
for (let u = 0; u < 256; ++u)
  M.push((u + 256).toString(16).slice(1));
function Cn(u, D = 0) {
  return (M[u[D + 0]] + M[u[D + 1]] + M[u[D + 2]] + M[u[D + 3]] + "-" + M[u[D + 4]] + M[u[D + 5]] + "-" + M[u[D + 6]] + M[u[D + 7]] + "-" + M[u[D + 8]] + M[u[D + 9]] + "-" + M[u[D + 10]] + M[u[D + 11]] + M[u[D + 12]] + M[u[D + 13]] + M[u[D + 14]] + M[u[D + 15]]).toLowerCase();
}
const An = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), R0 = {
  randomUUID: An
};
function on(u, D, e) {
  if (R0.randomUUID && !D && !u)
    return R0.randomUUID();
  u = u || {};
  const t = u.random || (u.rng || En)();
  if (t[6] = t[6] & 15 | 64, t[8] = t[8] & 63 | 128, D) {
    e = e || 0;
    for (let F = 0; F < 16; ++F)
      D[e + F] = t[F];
    return D;
  }
  return Cn(t);
}
const sn = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i, Bn = /^[0-9a-f]{12}[0-5][0-9a-f]{3}[089ab][0-9a-f]{3}[0-9a-f]{12}$/i, E0 = (u, D) => {
  if (u) {
    if (sn.test(u) || D)
      return u;
    throw new Error(`Invalid UUID format: ${u}`);
  }
  return on();
}, dE = E0("00000000-0000-0000-0000-000000000000");
function pE(u, D = !1) {
  if (!D && !Bn.test(u))
    throw new Error(`Invalid HexUUID format: ${u}`);
  return E0(
    `${u.slice(0, 8)}-${u.slice(8, 12)}-${u.slice(12, 16)}-${u.slice(
      16,
      20
    )}-${u.slice(20, 32)}`,
    D
  );
}
function hE(u, D = !1) {
  return E0(u, D).replace(/-/gm, "");
}
function L(u) {
  "@babel/helpers - typeof";
  return L = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(D) {
    return typeof D;
  } : function(D) {
    return D && typeof Symbol == "function" && D.constructor === Symbol && D !== Symbol.prototype ? "symbol" : typeof D;
  }, L(u);
}
function be(u, D) {
  if (!(u instanceof D))
    throw new TypeError("Cannot call a class as a function");
}
function Y0(u, D) {
  for (var e = 0; e < D.length; e++) {
    var t = D[e];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(u, t.key, t);
  }
}
function ye(u, D, e) {
  return D && Y0(u.prototype, D), e && Y0(u, e), Object.defineProperty(u, "prototype", {
    writable: !1
  }), u;
}
function ln(u, D) {
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
  }), D && xu(u, D);
}
function wu(u) {
  return wu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
    return e.__proto__ || Object.getPrototypeOf(e);
  }, wu(u);
}
function xu(u, D) {
  return xu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, F) {
    return t.__proto__ = F, t;
  }, xu(u, D);
}
function _e() {
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
function gu(u, D, e) {
  return _e() ? gu = Reflect.construct.bind() : gu = function(F, r, n) {
    var C = [null];
    C.push.apply(C, r);
    var E = Function.bind.apply(F, C), a = new E();
    return n && xu(a, n.prototype), a;
  }, gu.apply(null, arguments);
}
function fn(u) {
  return Function.toString.call(u).indexOf("[native code]") !== -1;
}
function sD(u) {
  var D = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return sD = function(t) {
    if (t === null || !fn(t))
      return t;
    if (typeof t != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof D < "u") {
      if (D.has(t))
        return D.get(t);
      D.set(t, F);
    }
    function F() {
      return gu(t, arguments, wu(this).constructor);
    }
    return F.prototype = Object.create(t.prototype, {
      constructor: {
        value: F,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), xu(F, t);
  }, sD(u);
}
function cn(u) {
  if (u === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return u;
}
function dn(u, D) {
  if (D && (typeof D == "object" || typeof D == "function"))
    return D;
  if (D !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return cn(u);
}
function pn(u) {
  var D = _e();
  return function() {
    var t = wu(u), F;
    if (D) {
      var r = wu(this).constructor;
      F = Reflect.construct(t, arguments, r);
    } else
      F = t.apply(this, arguments);
    return dn(this, F);
  };
}
function hn(u) {
  return mn(u) || vn(u) || we(u) || gn();
}
function mn(u) {
  if (Array.isArray(u))
    return BD(u);
}
function vn(u) {
  if (typeof Symbol < "u" && u[Symbol.iterator] != null || u["@@iterator"] != null)
    return Array.from(u);
}
function we(u, D) {
  if (u) {
    if (typeof u == "string")
      return BD(u, D);
    var e = Object.prototype.toString.call(u).slice(8, -1);
    if (e === "Object" && u.constructor && (e = u.constructor.name), e === "Map" || e === "Set")
      return Array.from(u);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
      return BD(u, D);
  }
}
function BD(u, D) {
  (D == null || D > u.length) && (D = u.length);
  for (var e = 0, t = new Array(D); e < D; e++)
    t[e] = u[e];
  return t;
}
function gn() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bn(u, D) {
  var e = typeof Symbol < "u" && u[Symbol.iterator] || u["@@iterator"];
  if (!e) {
    if (Array.isArray(u) || (e = we(u)) || D && u && typeof u.length == "number") {
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
        e: function(E) {
          throw E;
        },
        f: F
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var r = !0, n = !1, C;
  return {
    s: function() {
      e = e.call(u);
    },
    n: function() {
      var E = e.next();
      return r = E.done, E;
    },
    e: function(E) {
      n = !0, C = E;
    },
    f: function() {
      try {
        !r && e.return != null && e.return();
      } finally {
        if (n)
          throw C;
      }
    }
  };
}
var U = Object.prototype.hasOwnProperty;
function X(u, D) {
  return u = u.slice(), u.push(D), u;
}
function lD(u, D) {
  return D = D.slice(), D.unshift(u), D;
}
var yn = /* @__PURE__ */ function(u) {
  ln(e, u);
  var D = pn(e);
  function e(t) {
    var F;
    return be(this, e), F = D.call(this, 'JSONPath should not be called with "new" (it prevents return of (unwrapped) scalar values)'), F.avoidNew = !0, F.value = t, F.name = "NewError", F;
  }
  return ye(e);
}(/* @__PURE__ */ sD(Error));
function _(u, D, e, t, F) {
  if (!(this instanceof _))
    try {
      return new _(u, D, e, t, F);
    } catch (E) {
      if (!E.avoidNew)
        throw E;
      return E.value;
    }
  typeof u == "string" && (F = t, t = e, e = D, D = u, u = null);
  var r = u && L(u) === "object";
  if (u = u || {}, this.json = u.json || e, this.path = u.path || D, this.resultType = u.resultType || "value", this.flatten = u.flatten || !1, this.wrap = U.call(u, "wrap") ? u.wrap : !0, this.sandbox = u.sandbox || {}, this.preventEval = u.preventEval || !1, this.parent = u.parent || null, this.parentProperty = u.parentProperty || null, this.callback = u.callback || t || null, this.otherTypeCallback = u.otherTypeCallback || F || function() {
    throw new TypeError("You must supply an otherTypeCallback callback option with the @other() operator.");
  }, u.autostart !== !1) {
    var n = {
      path: r ? u.path : D
    };
    r ? "json" in u && (n.json = u.json) : n.json = e;
    var C = this.evaluate(n);
    if (!C || L(C) !== "object")
      throw new yn(C);
    return C;
  }
}
_.prototype.evaluate = function(u, D, e, t) {
  var F = this, r = this.parent, n = this.parentProperty, C = this.flatten, E = this.wrap;
  if (this.currResultType = this.resultType, this.currPreventEval = this.preventEval, this.currSandbox = this.sandbox, e = e || this.callback, this.currOtherTypeCallback = t || this.otherTypeCallback, D = D || this.json, u = u || this.path, u && L(u) === "object" && !Array.isArray(u)) {
    if (!u.path && u.path !== "")
      throw new TypeError('You must supply a "path" property when providing an object argument to JSONPath.evaluate().');
    if (!U.call(u, "json"))
      throw new TypeError('You must supply a "json" property when providing an object argument to JSONPath.evaluate().');
    var a = u;
    D = a.json, C = U.call(u, "flatten") ? u.flatten : C, this.currResultType = U.call(u, "resultType") ? u.resultType : this.currResultType, this.currSandbox = U.call(u, "sandbox") ? u.sandbox : this.currSandbox, E = U.call(u, "wrap") ? u.wrap : E, this.currPreventEval = U.call(u, "preventEval") ? u.preventEval : this.currPreventEval, e = U.call(u, "callback") ? u.callback : e, this.currOtherTypeCallback = U.call(u, "otherTypeCallback") ? u.otherTypeCallback : this.currOtherTypeCallback, r = U.call(u, "parent") ? u.parent : r, n = U.call(u, "parentProperty") ? u.parentProperty : n, u = u.path;
  }
  if (r = r || null, n = n || null, Array.isArray(u) && (u = _.toPathString(u)), !(!u && u !== "" || !D)) {
    var A = _.toPathArray(u);
    A[0] === "$" && A.length > 1 && A.shift(), this._hasParentSelector = null;
    var i = this._trace(A, D, ["$"], r, n, e).filter(function(l) {
      return l && !l.isParentSelector;
    });
    return i.length ? !E && i.length === 1 && !i[0].hasArrExpr ? this._getPreferredOutput(i[0]) : i.reduce(function(l, d) {
      var p = F._getPreferredOutput(d);
      return C && Array.isArray(p) ? l = l.concat(p) : l.push(p), l;
    }, []) : E ? [] : void 0;
  }
};
_.prototype._getPreferredOutput = function(u) {
  var D = this.currResultType;
  switch (D) {
    case "all": {
      var e = Array.isArray(u.path) ? u.path : _.toPathArray(u.path);
      return u.pointer = _.toPointer(e), u.path = typeof u.path == "string" ? u.path : _.toPathString(u.path), u;
    }
    case "value":
    case "parent":
    case "parentProperty":
      return u[D];
    case "path":
      return _.toPathString(u[D]);
    case "pointer":
      return _.toPointer(u.path);
    default:
      throw new TypeError("Unknown result type");
  }
};
_.prototype._handleCallback = function(u, D, e) {
  if (D) {
    var t = this._getPreferredOutput(u);
    u.path = typeof u.path == "string" ? u.path : _.toPathString(u.path), D(t, e, u);
  }
};
_.prototype._trace = function(u, D, e, t, F, r, n, C) {
  var E = this, a;
  if (!u.length)
    return a = {
      path: e,
      value: D,
      parent: t,
      parentProperty: F,
      hasArrExpr: n
    }, this._handleCallback(a, r, "value"), a;
  var A = u[0], i = u.slice(1), l = [];
  function d(y) {
    Array.isArray(y) ? y.forEach(function(O) {
      l.push(O);
    }) : l.push(y);
  }
  if ((typeof A != "string" || C) && D && U.call(D, A))
    d(this._trace(i, D[A], X(e, A), D, A, r, n));
  else if (A === "*")
    this._walk(D, function(y) {
      d(E._trace(i, D[y], X(e, y), D, y, r, !0, !0));
    });
  else if (A === "..")
    d(this._trace(i, D, e, t, F, r, n)), this._walk(D, function(y) {
      L(D[y]) === "object" && d(E._trace(u.slice(), D[y], X(e, y), D, y, r, !0));
    });
  else {
    if (A === "^")
      return this._hasParentSelector = !0, {
        path: e.slice(0, -1),
        expr: i,
        isParentSelector: !0
      };
    if (A === "~")
      return a = {
        path: X(e, A),
        value: F,
        parent: t,
        parentProperty: null
      }, this._handleCallback(a, r, "property"), a;
    if (A === "$")
      d(this._trace(i, D, e, null, null, r, n));
    else if (/^(\x2D?[0-9]*):(\x2D?[0-9]*):?([0-9]*)$/.test(A))
      d(this._slice(A, i, D, e, t, F, r));
    else if (A.indexOf("?(") === 0) {
      if (this.currPreventEval)
        throw new Error("Eval [?(expr)] prevented in JSONPath expression.");
      var p = A.replace(/^\?\(((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?)\)$/, "$1");
      this._walk(D, function(y) {
        E._eval(p, D[y], y, e, t, F) && d(E._trace(i, D[y], X(e, y), D, y, r, !0));
      });
    } else if (A[0] === "(") {
      if (this.currPreventEval)
        throw new Error("Eval [(expr)] prevented in JSONPath expression.");
      d(this._trace(lD(this._eval(A, D, e[e.length - 1], e.slice(0, -1), t, F), i), D, e, t, F, r, n));
    } else if (A[0] === "@") {
      var g = !1, c = A.slice(1, -2);
      switch (c) {
        case "scalar":
          (!D || !["object", "function"].includes(L(D))) && (g = !0);
          break;
        case "boolean":
        case "string":
        case "undefined":
        case "function":
          L(D) === c && (g = !0);
          break;
        case "integer":
          Number.isFinite(D) && !(D % 1) && (g = !0);
          break;
        case "number":
          Number.isFinite(D) && (g = !0);
          break;
        case "nonFinite":
          typeof D == "number" && !Number.isFinite(D) && (g = !0);
          break;
        case "object":
          D && L(D) === c && (g = !0);
          break;
        case "array":
          Array.isArray(D) && (g = !0);
          break;
        case "other":
          g = this.currOtherTypeCallback(D, e, t, F);
          break;
        case "null":
          D === null && (g = !0);
          break;
        default:
          throw new TypeError("Unknown value type " + c);
      }
      if (g)
        return a = {
          path: e,
          value: D,
          parent: t,
          parentProperty: F
        }, this._handleCallback(a, r, "value"), a;
    } else if (A[0] === "`" && D && U.call(D, A.slice(1))) {
      var f = A.slice(1);
      d(this._trace(i, D[f], X(e, f), D, f, r, n, !0));
    } else if (A.includes(",")) {
      var B = A.split(","), s = bn(B), o;
      try {
        for (s.s(); !(o = s.n()).done; ) {
          var h = o.value;
          d(this._trace(lD(h, i), D, e, t, F, r, !0));
        }
      } catch (y) {
        s.e(y);
      } finally {
        s.f();
      }
    } else
      !C && D && U.call(D, A) && d(this._trace(i, D[A], X(e, A), D, A, r, n, !0));
  }
  if (this._hasParentSelector)
    for (var v = 0; v < l.length; v++) {
      var b = l[v];
      if (b && b.isParentSelector) {
        var P = this._trace(b.expr, D, b.path, t, F, r, n);
        if (Array.isArray(P)) {
          l[v] = P[0];
          for (var k = P.length, S = 1; S < k; S++)
            v++, l.splice(v, 0, P[S]);
        } else
          l[v] = P;
      }
    }
  return l;
};
_.prototype._walk = function(u, D) {
  if (Array.isArray(u))
    for (var e = u.length, t = 0; t < e; t++)
      D(t);
  else
    u && L(u) === "object" && Object.keys(u).forEach(function(F) {
      D(F);
    });
};
_.prototype._slice = function(u, D, e, t, F, r, n) {
  if (Array.isArray(e)) {
    var C = e.length, E = u.split(":"), a = E[2] && Number.parseInt(E[2]) || 1, A = E[0] && Number.parseInt(E[0]) || 0, i = E[1] && Number.parseInt(E[1]) || C;
    A = A < 0 ? Math.max(0, A + C) : Math.min(C, A), i = i < 0 ? Math.max(0, i + C) : Math.min(C, i);
    for (var l = [], d = A; d < i; d += a) {
      var p = this._trace(lD(d, D), e, t, F, r, n, !0);
      p.forEach(function(g) {
        l.push(g);
      });
    }
    return l;
  }
};
_.prototype._eval = function(u, D, e, t, F, r) {
  this.currSandbox._$_parentProperty = r, this.currSandbox._$_parent = F, this.currSandbox._$_property = e, this.currSandbox._$_root = this.json, this.currSandbox._$_v = D;
  var n = u.includes("@path");
  n && (this.currSandbox._$_path = _.toPathString(t.concat([e])));
  var C = "script:" + u;
  if (!_.cache[C]) {
    var E = u.replace(/@parentProperty/g, "_$_parentProperty").replace(/@parent/g, "_$_parent").replace(/@property/g, "_$_property").replace(/@root/g, "_$_root").replace(/@([\t-\r \)\.\[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])/g, "_$_v$1");
    n && (E = E.replace(/@path/g, "_$_path")), _.cache[C] = new this.vm.Script(E);
  }
  try {
    return _.cache[C].runInNewContext(this.currSandbox);
  } catch (a) {
    throw new Error("jsonPath: " + a.message + ": " + u);
  }
};
_.cache = {};
_.toPathString = function(u) {
  for (var D = u, e = D.length, t = "$", F = 1; F < e; F++)
    /^(~|\^|@(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\(\))$/.test(D[F]) || (t += /^[\*0-9]+$/.test(D[F]) ? "[" + D[F] + "]" : "['" + D[F] + "']");
  return t;
};
_.toPointer = function(u) {
  for (var D = u, e = D.length, t = "", F = 1; F < e; F++)
    /^(~|\^|@(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\(\))$/.test(D[F]) || (t += "/" + D[F].toString().replace(/~/g, "~0").replace(/\//g, "~1"));
  return t;
};
_.toPathArray = function(u) {
  var D = _.cache;
  if (D[u])
    return D[u].concat();
  var e = [], t = u.replace(/@(?:null|boolean|number|string|integer|undefined|nonFinite|scalar|array|object|function|other)\(\)/g, ";$&;").replace(/['\[](\??\((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\))['\]]/g, function(r, n) {
    return "[#" + (e.push(n) - 1) + "]";
  }).replace(/\[["']((?:(?!['\]])[\s\S])*)["']\]/g, function(r, n) {
    return "['" + n.replace(/\./g, "%@%").replace(/~/g, "%%@@%%") + "']";
  }).replace(/~/g, ";~;").replace(/["']?\.["']?(?!(?:(?!\[)[\s\S])*\])|\[["']?/g, ";").replace(/%@%/g, ".").replace(/%%@@%%/g, "~").replace(/(?:;)?(\^+)(?:;)?/g, function(r, n) {
    return ";" + n.split("").join(";") + ";";
  }).replace(/;;;|;;/g, ";..;").replace(/;$|'?\]|'$/g, ""), F = t.split(";").map(function(r) {
    var n = r.match(/#([0-9]+)/);
    return !n || !n[1] ? r : e[n[1]];
  });
  return D[u] = F, D[u].concat();
};
var _n = function(D, e, t) {
  for (var F = D.length, r = 0; r < F; r++) {
    var n = D[r];
    t(n) && e.push(D.splice(r--, 1)[0]);
  }
}, wn = /* @__PURE__ */ function() {
  function u(D) {
    be(this, u), this.code = D;
  }
  return ye(u, [{
    key: "runInNewContext",
    value: function(e) {
      var t = this.code, F = Object.keys(e), r = [];
      _n(F, r, function(A) {
        return typeof e[A] == "function";
      });
      var n = F.map(function(A, i) {
        return e[A];
      }), C = r.reduce(function(A, i) {
        var l = e[i].toString();
        return /function/.test(l) || (l = "function " + l), "var " + i + "=" + l + ";" + A;
      }, "");
      t = C + t, !/(["'])use strict\1/.test(t) && !F.includes("arguments") && (t = "var arguments = undefined;" + t), t = t.replace(/;[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*$/, "");
      var E = t.lastIndexOf(";"), a = E > -1 ? t.slice(0, E + 1) + " return " + t.slice(E + 1) : " return " + t;
      return gu(Function, F.concat([a])).apply(void 0, hn(n));
    }
  }]), u;
}();
_.prototype.vm = {
  Script: wn
};
const L0 = (u, D) => k0(u) || k0(D) ? null : (typeof D == "string" && /^\$\./.test(D) ? _({
  path: D,
  json: u
}) : ce(u, D)) ?? null;
function tu(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var fD = { exports: {} }, xe = { exports: {} };
(function(u) {
  function D(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  u.exports = D, u.exports.__esModule = !0, u.exports.default = u.exports;
})(xe);
var T = xe.exports, cD = { exports: {} }, dD = { exports: {} }, Oe = { exports: {} };
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
})(Oe);
var Te = Oe.exports, pD = { exports: {} };
(function(u, D) {
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = e;
  function e(t, F) {
    if (F.length < t)
      throw new TypeError(t + " argument" + (t > 1 ? "s" : "") + " required, but only " + F.length + " present");
  }
  u.exports = D.default;
})(pD, pD.exports);
var I = pD.exports;
(function(u, D) {
  var e = T.default;
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = r;
  var t = e(Te), F = e(I);
  function r(n) {
    return (0, F.default)(1, arguments), n instanceof Date || (0, t.default)(n) === "object" && Object.prototype.toString.call(n) === "[object Date]";
  }
  u.exports = D.default;
})(dD, dD.exports);
var xn = dD.exports, hD = { exports: {} };
(function(u, D) {
  var e = T.default;
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = r;
  var t = e(Te), F = e(I);
  function r(n) {
    (0, F.default)(1, arguments);
    var C = Object.prototype.toString.call(n);
    return n instanceof Date || (0, t.default)(n) === "object" && C === "[object Date]" ? new Date(n.getTime()) : typeof n == "number" || C === "[object Number]" ? new Date(n) : ((typeof n == "string" || C === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
  }
  u.exports = D.default;
})(hD, hD.exports);
var H = hD.exports;
(function(u, D) {
  var e = T.default;
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = n;
  var t = e(xn), F = e(H), r = e(I);
  function n(C) {
    if ((0, r.default)(1, arguments), !(0, t.default)(C) && typeof C != "number")
      return !1;
    var E = (0, F.default)(C);
    return !isNaN(Number(E));
  }
  u.exports = D.default;
})(cD, cD.exports);
var On = cD.exports, mD = { exports: {} }, vD = { exports: {} }, gD = { exports: {} };
(function(u, D) {
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = e;
  function e(t) {
    if (t === null || t === !0 || t === !1)
      return NaN;
    var F = Number(t);
    return isNaN(F) ? F : F < 0 ? Math.ceil(F) : Math.floor(F);
  }
  u.exports = D.default;
})(gD, gD.exports);
var Fu = gD.exports;
const Tn = /* @__PURE__ */ tu(Fu);
(function(u, D) {
  var e = T.default;
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = n;
  var t = e(Fu), F = e(H), r = e(I);
  function n(C, E) {
    (0, r.default)(2, arguments);
    var a = (0, F.default)(C).getTime(), A = (0, t.default)(E);
    return new Date(a + A);
  }
  u.exports = D.default;
})(vD, vD.exports);
var Sn = vD.exports;
(function(u, D) {
  var e = T.default;
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = n;
  var t = e(Sn), F = e(I), r = e(Fu);
  function n(C, E) {
    (0, F.default)(2, arguments);
    var a = (0, r.default)(E);
    return (0, t.default)(C, -a);
  }
  u.exports = D.default;
})(mD, mD.exports);
var Pn = mD.exports, bD = { exports: {} }, yD = { exports: {} };
(function(u, D) {
  var e = T.default;
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = n;
  var t = e(H), F = e(I), r = 864e5;
  function n(C) {
    (0, F.default)(1, arguments);
    var E = (0, t.default)(C), a = E.getTime();
    E.setUTCMonth(0, 1), E.setUTCHours(0, 0, 0, 0);
    var A = E.getTime(), i = a - A;
    return Math.floor(i / r) + 1;
  }
  u.exports = D.default;
})(yD, yD.exports);
var Mn = yD.exports, _D = { exports: {} }, wD = { exports: {} };
(function(u, D) {
  var e = T.default;
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = r;
  var t = e(H), F = e(I);
  function r(n) {
    (0, F.default)(1, arguments);
    var C = 1, E = (0, t.default)(n), a = E.getUTCDay(), A = (a < C ? 7 : 0) + a - C;
    return E.setUTCDate(E.getUTCDate() - A), E.setUTCHours(0, 0, 0, 0), E;
  }
  u.exports = D.default;
})(wD, wD.exports);
var C0 = wD.exports, xD = { exports: {} }, OD = { exports: {} };
(function(u, D) {
  var e = T.default;
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = n;
  var t = e(H), F = e(I), r = e(C0);
  function n(C) {
    (0, F.default)(1, arguments);
    var E = (0, t.default)(C), a = E.getUTCFullYear(), A = /* @__PURE__ */ new Date(0);
    A.setUTCFullYear(a + 1, 0, 4), A.setUTCHours(0, 0, 0, 0);
    var i = (0, r.default)(A), l = /* @__PURE__ */ new Date(0);
    l.setUTCFullYear(a, 0, 4), l.setUTCHours(0, 0, 0, 0);
    var d = (0, r.default)(l);
    return E.getTime() >= i.getTime() ? a + 1 : E.getTime() >= d.getTime() ? a : a - 1;
  }
  u.exports = D.default;
})(OD, OD.exports);
var Se = OD.exports;
(function(u, D) {
  var e = T.default;
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = n;
  var t = e(Se), F = e(C0), r = e(I);
  function n(C) {
    (0, r.default)(1, arguments);
    var E = (0, t.default)(C), a = /* @__PURE__ */ new Date(0);
    a.setUTCFullYear(E, 0, 4), a.setUTCHours(0, 0, 0, 0);
    var A = (0, F.default)(a);
    return A;
  }
  u.exports = D.default;
})(xD, xD.exports);
var $n = xD.exports;
(function(u, D) {
  var e = T.default;
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = E;
  var t = e(H), F = e(C0), r = e($n), n = e(I), C = 6048e5;
  function E(a) {
    (0, n.default)(1, arguments);
    var A = (0, t.default)(a), i = (0, F.default)(A).getTime() - (0, r.default)(A).getTime();
    return Math.round(i / C) + 1;
  }
  u.exports = D.default;
})(_D, _D.exports);
var Nn = _D.exports, TD = { exports: {} }, SD = { exports: {} }, ru = {};
Object.defineProperty(ru, "__esModule", {
  value: !0
});
ru.getDefaultOptions = In;
ru.setDefaultOptions = Un;
var Pe = {};
function In() {
  return Pe;
}
function Un(u) {
  Pe = u;
}
(function(u, D) {
  var e = T.default;
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = C;
  var t = e(H), F = e(I), r = e(Fu), n = ru;
  function C(E, a) {
    var A, i, l, d, p, g, c, f;
    (0, F.default)(1, arguments);
    var B = (0, n.getDefaultOptions)(), s = (0, r.default)((A = (i = (l = (d = a == null ? void 0 : a.weekStartsOn) !== null && d !== void 0 ? d : a == null || (p = a.locale) === null || p === void 0 || (g = p.options) === null || g === void 0 ? void 0 : g.weekStartsOn) !== null && l !== void 0 ? l : B.weekStartsOn) !== null && i !== void 0 ? i : (c = B.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && A !== void 0 ? A : 0);
    if (!(s >= 0 && s <= 6))
      throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var o = (0, t.default)(E), h = o.getUTCDay(), v = (h < s ? 7 : 0) + h - s;
    return o.setUTCDate(o.getUTCDate() - v), o.setUTCHours(0, 0, 0, 0), o;
  }
  u.exports = D.default;
})(SD, SD.exports);
var A0 = SD.exports, PD = { exports: {} }, MD = { exports: {} };
(function(u, D) {
  var e = T.default;
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = E;
  var t = e(H), F = e(I), r = e(A0), n = e(Fu), C = ru;
  function E(a, A) {
    var i, l, d, p, g, c, f, B;
    (0, F.default)(1, arguments);
    var s = (0, t.default)(a), o = s.getUTCFullYear(), h = (0, C.getDefaultOptions)(), v = (0, n.default)((i = (l = (d = (p = A == null ? void 0 : A.firstWeekContainsDate) !== null && p !== void 0 ? p : A == null || (g = A.locale) === null || g === void 0 || (c = g.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && d !== void 0 ? d : h.firstWeekContainsDate) !== null && l !== void 0 ? l : (f = h.locale) === null || f === void 0 || (B = f.options) === null || B === void 0 ? void 0 : B.firstWeekContainsDate) !== null && i !== void 0 ? i : 1);
    if (!(v >= 1 && v <= 7))
      throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var b = /* @__PURE__ */ new Date(0);
    b.setUTCFullYear(o + 1, 0, v), b.setUTCHours(0, 0, 0, 0);
    var P = (0, r.default)(b, A), k = /* @__PURE__ */ new Date(0);
    k.setUTCFullYear(o, 0, v), k.setUTCHours(0, 0, 0, 0);
    var S = (0, r.default)(k, A);
    return s.getTime() >= P.getTime() ? o + 1 : s.getTime() >= S.getTime() ? o : o - 1;
  }
  u.exports = D.default;
})(MD, MD.exports);
var Me = MD.exports;
(function(u, D) {
  var e = T.default;
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = E;
  var t = e(Me), F = e(I), r = e(A0), n = e(Fu), C = ru;
  function E(a, A) {
    var i, l, d, p, g, c, f, B;
    (0, F.default)(1, arguments);
    var s = (0, C.getDefaultOptions)(), o = (0, n.default)((i = (l = (d = (p = A == null ? void 0 : A.firstWeekContainsDate) !== null && p !== void 0 ? p : A == null || (g = A.locale) === null || g === void 0 || (c = g.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && d !== void 0 ? d : s.firstWeekContainsDate) !== null && l !== void 0 ? l : (f = s.locale) === null || f === void 0 || (B = f.options) === null || B === void 0 ? void 0 : B.firstWeekContainsDate) !== null && i !== void 0 ? i : 1), h = (0, t.default)(a, A), v = /* @__PURE__ */ new Date(0);
    v.setUTCFullYear(h, 0, o), v.setUTCHours(0, 0, 0, 0);
    var b = (0, r.default)(v, A);
    return b;
  }
  u.exports = D.default;
})(PD, PD.exports);
var kn = PD.exports;
(function(u, D) {
  var e = T.default;
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = E;
  var t = e(H), F = e(A0), r = e(kn), n = e(I), C = 6048e5;
  function E(a, A) {
    (0, n.default)(1, arguments);
    var i = (0, t.default)(a), l = (0, F.default)(i, A).getTime() - (0, r.default)(i, A).getTime();
    return Math.round(l / C) + 1;
  }
  u.exports = D.default;
})(TD, TD.exports);
var jn = TD.exports, $D = { exports: {} };
(function(u, D) {
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = e;
  function e(t, F) {
    for (var r = t < 0 ? "-" : "", n = Math.abs(t).toString(); n.length < F; )
      n = "0" + n;
    return r + n;
  }
  u.exports = D.default;
})($D, $D.exports);
var $e = $D.exports, ND = { exports: {} };
(function(u, D) {
  var e = T.default;
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = void 0;
  var t = e($e), F = {
    // Year
    y: function(C, E) {
      var a = C.getUTCFullYear(), A = a > 0 ? a : 1 - a;
      return (0, t.default)(E === "yy" ? A % 100 : A, E.length);
    },
    // Month
    M: function(C, E) {
      var a = C.getUTCMonth();
      return E === "M" ? String(a + 1) : (0, t.default)(a + 1, 2);
    },
    // Day of the month
    d: function(C, E) {
      return (0, t.default)(C.getUTCDate(), E.length);
    },
    // AM or PM
    a: function(C, E) {
      var a = C.getUTCHours() / 12 >= 1 ? "pm" : "am";
      switch (E) {
        case "a":
        case "aa":
          return a.toUpperCase();
        case "aaa":
          return a;
        case "aaaaa":
          return a[0];
        case "aaaa":
        default:
          return a === "am" ? "a.m." : "p.m.";
      }
    },
    // Hour [1-12]
    h: function(C, E) {
      return (0, t.default)(C.getUTCHours() % 12 || 12, E.length);
    },
    // Hour [0-23]
    H: function(C, E) {
      return (0, t.default)(C.getUTCHours(), E.length);
    },
    // Minute
    m: function(C, E) {
      return (0, t.default)(C.getUTCMinutes(), E.length);
    },
    // Second
    s: function(C, E) {
      return (0, t.default)(C.getUTCSeconds(), E.length);
    },
    // Fraction of second
    S: function(C, E) {
      var a = E.length, A = C.getUTCMilliseconds(), i = Math.floor(A * Math.pow(10, a - 3));
      return (0, t.default)(i, E.length);
    }
  }, r = F;
  D.default = r, u.exports = D.default;
})(ND, ND.exports);
var Rn = ND.exports;
(function(u, D) {
  var e = T.default;
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = void 0;
  var t = e(Mn), F = e(Nn), r = e(Se), n = e(jn), C = e(Me), E = e($e), a = e(Rn), A = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }, i = {
    // Era
    G: function(f, B, s) {
      var o = f.getUTCFullYear() > 0 ? 1 : 0;
      switch (B) {
        case "G":
        case "GG":
        case "GGG":
          return s.era(o, {
            width: "abbreviated"
          });
        case "GGGGG":
          return s.era(o, {
            width: "narrow"
          });
        case "GGGG":
        default:
          return s.era(o, {
            width: "wide"
          });
      }
    },
    // Year
    y: function(f, B, s) {
      if (B === "yo") {
        var o = f.getUTCFullYear(), h = o > 0 ? o : 1 - o;
        return s.ordinalNumber(h, {
          unit: "year"
        });
      }
      return a.default.y(f, B);
    },
    // Local week-numbering year
    Y: function(f, B, s, o) {
      var h = (0, C.default)(f, o), v = h > 0 ? h : 1 - h;
      if (B === "YY") {
        var b = v % 100;
        return (0, E.default)(b, 2);
      }
      return B === "Yo" ? s.ordinalNumber(v, {
        unit: "year"
      }) : (0, E.default)(v, B.length);
    },
    // ISO week-numbering year
    R: function(f, B) {
      var s = (0, r.default)(f);
      return (0, E.default)(s, B.length);
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
    u: function(f, B) {
      var s = f.getUTCFullYear();
      return (0, E.default)(s, B.length);
    },
    // Quarter
    Q: function(f, B, s) {
      var o = Math.ceil((f.getUTCMonth() + 1) / 3);
      switch (B) {
        case "Q":
          return String(o);
        case "QQ":
          return (0, E.default)(o, 2);
        case "Qo":
          return s.ordinalNumber(o, {
            unit: "quarter"
          });
        case "QQQ":
          return s.quarter(o, {
            width: "abbreviated",
            context: "formatting"
          });
        case "QQQQQ":
          return s.quarter(o, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQ":
        default:
          return s.quarter(o, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Stand-alone quarter
    q: function(f, B, s) {
      var o = Math.ceil((f.getUTCMonth() + 1) / 3);
      switch (B) {
        case "q":
          return String(o);
        case "qq":
          return (0, E.default)(o, 2);
        case "qo":
          return s.ordinalNumber(o, {
            unit: "quarter"
          });
        case "qqq":
          return s.quarter(o, {
            width: "abbreviated",
            context: "standalone"
          });
        case "qqqqq":
          return s.quarter(o, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqq":
        default:
          return s.quarter(o, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    // Month
    M: function(f, B, s) {
      var o = f.getUTCMonth();
      switch (B) {
        case "M":
        case "MM":
          return a.default.M(f, B);
        case "Mo":
          return s.ordinalNumber(o + 1, {
            unit: "month"
          });
        case "MMM":
          return s.month(o, {
            width: "abbreviated",
            context: "formatting"
          });
        case "MMMMM":
          return s.month(o, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMM":
        default:
          return s.month(o, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Stand-alone month
    L: function(f, B, s) {
      var o = f.getUTCMonth();
      switch (B) {
        case "L":
          return String(o + 1);
        case "LL":
          return (0, E.default)(o + 1, 2);
        case "Lo":
          return s.ordinalNumber(o + 1, {
            unit: "month"
          });
        case "LLL":
          return s.month(o, {
            width: "abbreviated",
            context: "standalone"
          });
        case "LLLLL":
          return s.month(o, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLL":
        default:
          return s.month(o, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    // Local week of year
    w: function(f, B, s, o) {
      var h = (0, n.default)(f, o);
      return B === "wo" ? s.ordinalNumber(h, {
        unit: "week"
      }) : (0, E.default)(h, B.length);
    },
    // ISO week of year
    I: function(f, B, s) {
      var o = (0, F.default)(f);
      return B === "Io" ? s.ordinalNumber(o, {
        unit: "week"
      }) : (0, E.default)(o, B.length);
    },
    // Day of the month
    d: function(f, B, s) {
      return B === "do" ? s.ordinalNumber(f.getUTCDate(), {
        unit: "date"
      }) : a.default.d(f, B);
    },
    // Day of year
    D: function(f, B, s) {
      var o = (0, t.default)(f);
      return B === "Do" ? s.ordinalNumber(o, {
        unit: "dayOfYear"
      }) : (0, E.default)(o, B.length);
    },
    // Day of week
    E: function(f, B, s) {
      var o = f.getUTCDay();
      switch (B) {
        case "E":
        case "EE":
        case "EEE":
          return s.day(o, {
            width: "abbreviated",
            context: "formatting"
          });
        case "EEEEE":
          return s.day(o, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEEE":
          return s.day(o, {
            width: "short",
            context: "formatting"
          });
        case "EEEE":
        default:
          return s.day(o, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Local day of week
    e: function(f, B, s, o) {
      var h = f.getUTCDay(), v = (h - o.weekStartsOn + 8) % 7 || 7;
      switch (B) {
        case "e":
          return String(v);
        case "ee":
          return (0, E.default)(v, 2);
        case "eo":
          return s.ordinalNumber(v, {
            unit: "day"
          });
        case "eee":
          return s.day(h, {
            width: "abbreviated",
            context: "formatting"
          });
        case "eeeee":
          return s.day(h, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeeee":
          return s.day(h, {
            width: "short",
            context: "formatting"
          });
        case "eeee":
        default:
          return s.day(h, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Stand-alone local day of week
    c: function(f, B, s, o) {
      var h = f.getUTCDay(), v = (h - o.weekStartsOn + 8) % 7 || 7;
      switch (B) {
        case "c":
          return String(v);
        case "cc":
          return (0, E.default)(v, B.length);
        case "co":
          return s.ordinalNumber(v, {
            unit: "day"
          });
        case "ccc":
          return s.day(h, {
            width: "abbreviated",
            context: "standalone"
          });
        case "ccccc":
          return s.day(h, {
            width: "narrow",
            context: "standalone"
          });
        case "cccccc":
          return s.day(h, {
            width: "short",
            context: "standalone"
          });
        case "cccc":
        default:
          return s.day(h, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    // ISO day of week
    i: function(f, B, s) {
      var o = f.getUTCDay(), h = o === 0 ? 7 : o;
      switch (B) {
        case "i":
          return String(h);
        case "ii":
          return (0, E.default)(h, B.length);
        case "io":
          return s.ordinalNumber(h, {
            unit: "day"
          });
        case "iii":
          return s.day(o, {
            width: "abbreviated",
            context: "formatting"
          });
        case "iiiii":
          return s.day(o, {
            width: "narrow",
            context: "formatting"
          });
        case "iiiiii":
          return s.day(o, {
            width: "short",
            context: "formatting"
          });
        case "iiii":
        default:
          return s.day(o, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // AM or PM
    a: function(f, B, s) {
      var o = f.getUTCHours(), h = o / 12 >= 1 ? "pm" : "am";
      switch (B) {
        case "a":
        case "aa":
          return s.dayPeriod(h, {
            width: "abbreviated",
            context: "formatting"
          });
        case "aaa":
          return s.dayPeriod(h, {
            width: "abbreviated",
            context: "formatting"
          }).toLowerCase();
        case "aaaaa":
          return s.dayPeriod(h, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaa":
        default:
          return s.dayPeriod(h, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // AM, PM, midnight, noon
    b: function(f, B, s) {
      var o = f.getUTCHours(), h;
      switch (o === 12 ? h = A.noon : o === 0 ? h = A.midnight : h = o / 12 >= 1 ? "pm" : "am", B) {
        case "b":
        case "bb":
          return s.dayPeriod(h, {
            width: "abbreviated",
            context: "formatting"
          });
        case "bbb":
          return s.dayPeriod(h, {
            width: "abbreviated",
            context: "formatting"
          }).toLowerCase();
        case "bbbbb":
          return s.dayPeriod(h, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbb":
        default:
          return s.dayPeriod(h, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // in the morning, in the afternoon, in the evening, at night
    B: function(f, B, s) {
      var o = f.getUTCHours(), h;
      switch (o >= 17 ? h = A.evening : o >= 12 ? h = A.afternoon : o >= 4 ? h = A.morning : h = A.night, B) {
        case "B":
        case "BB":
        case "BBB":
          return s.dayPeriod(h, {
            width: "abbreviated",
            context: "formatting"
          });
        case "BBBBB":
          return s.dayPeriod(h, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBB":
        default:
          return s.dayPeriod(h, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Hour [1-12]
    h: function(f, B, s) {
      if (B === "ho") {
        var o = f.getUTCHours() % 12;
        return o === 0 && (o = 12), s.ordinalNumber(o, {
          unit: "hour"
        });
      }
      return a.default.h(f, B);
    },
    // Hour [0-23]
    H: function(f, B, s) {
      return B === "Ho" ? s.ordinalNumber(f.getUTCHours(), {
        unit: "hour"
      }) : a.default.H(f, B);
    },
    // Hour [0-11]
    K: function(f, B, s) {
      var o = f.getUTCHours() % 12;
      return B === "Ko" ? s.ordinalNumber(o, {
        unit: "hour"
      }) : (0, E.default)(o, B.length);
    },
    // Hour [1-24]
    k: function(f, B, s) {
      var o = f.getUTCHours();
      return o === 0 && (o = 24), B === "ko" ? s.ordinalNumber(o, {
        unit: "hour"
      }) : (0, E.default)(o, B.length);
    },
    // Minute
    m: function(f, B, s) {
      return B === "mo" ? s.ordinalNumber(f.getUTCMinutes(), {
        unit: "minute"
      }) : a.default.m(f, B);
    },
    // Second
    s: function(f, B, s) {
      return B === "so" ? s.ordinalNumber(f.getUTCSeconds(), {
        unit: "second"
      }) : a.default.s(f, B);
    },
    // Fraction of second
    S: function(f, B) {
      return a.default.S(f, B);
    },
    // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
    X: function(f, B, s, o) {
      var h = o._originalDate || f, v = h.getTimezoneOffset();
      if (v === 0)
        return "Z";
      switch (B) {
        case "X":
          return d(v);
        case "XXXX":
        case "XX":
          return p(v);
        case "XXXXX":
        case "XXX":
        default:
          return p(v, ":");
      }
    },
    // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
    x: function(f, B, s, o) {
      var h = o._originalDate || f, v = h.getTimezoneOffset();
      switch (B) {
        case "x":
          return d(v);
        case "xxxx":
        case "xx":
          return p(v);
        case "xxxxx":
        case "xxx":
        default:
          return p(v, ":");
      }
    },
    // Timezone (GMT)
    O: function(f, B, s, o) {
      var h = o._originalDate || f, v = h.getTimezoneOffset();
      switch (B) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + l(v, ":");
        case "OOOO":
        default:
          return "GMT" + p(v, ":");
      }
    },
    // Timezone (specific non-location)
    z: function(f, B, s, o) {
      var h = o._originalDate || f, v = h.getTimezoneOffset();
      switch (B) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + l(v, ":");
        case "zzzz":
        default:
          return "GMT" + p(v, ":");
      }
    },
    // Seconds timestamp
    t: function(f, B, s, o) {
      var h = o._originalDate || f, v = Math.floor(h.getTime() / 1e3);
      return (0, E.default)(v, B.length);
    },
    // Milliseconds timestamp
    T: function(f, B, s, o) {
      var h = o._originalDate || f, v = h.getTime();
      return (0, E.default)(v, B.length);
    }
  };
  function l(c, f) {
    var B = c > 0 ? "-" : "+", s = Math.abs(c), o = Math.floor(s / 60), h = s % 60;
    if (h === 0)
      return B + String(o);
    var v = f || "";
    return B + String(o) + v + (0, E.default)(h, 2);
  }
  function d(c, f) {
    if (c % 60 === 0) {
      var B = c > 0 ? "-" : "+";
      return B + (0, E.default)(Math.abs(c) / 60, 2);
    }
    return p(c, f);
  }
  function p(c, f) {
    var B = f || "", s = c > 0 ? "-" : "+", o = Math.abs(c), h = (0, E.default)(Math.floor(o / 60), 2), v = (0, E.default)(o % 60, 2);
    return s + h + B + v;
  }
  var g = i;
  D.default = g, u.exports = D.default;
})(bD, bD.exports);
var Yn = bD.exports, ID = { exports: {} };
(function(u, D) {
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = void 0;
  var e = function(E, a) {
    switch (E) {
      case "P":
        return a.date({
          width: "short"
        });
      case "PP":
        return a.date({
          width: "medium"
        });
      case "PPP":
        return a.date({
          width: "long"
        });
      case "PPPP":
      default:
        return a.date({
          width: "full"
        });
    }
  }, t = function(E, a) {
    switch (E) {
      case "p":
        return a.time({
          width: "short"
        });
      case "pp":
        return a.time({
          width: "medium"
        });
      case "ppp":
        return a.time({
          width: "long"
        });
      case "pppp":
      default:
        return a.time({
          width: "full"
        });
    }
  }, F = function(E, a) {
    var A = E.match(/(P+)(p+)?/) || [], i = A[1], l = A[2];
    if (!l)
      return e(E, a);
    var d;
    switch (i) {
      case "P":
        d = a.dateTime({
          width: "short"
        });
        break;
      case "PP":
        d = a.dateTime({
          width: "medium"
        });
        break;
      case "PPP":
        d = a.dateTime({
          width: "long"
        });
        break;
      case "PPPP":
      default:
        d = a.dateTime({
          width: "full"
        });
        break;
    }
    return d.replace("{{date}}", e(i, a)).replace("{{time}}", t(l, a));
  }, r = {
    p: t,
    P: F
  }, n = r;
  D.default = n, u.exports = D.default;
})(ID, ID.exports);
var Ln = ID.exports, UD = { exports: {} };
(function(u, D) {
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = e;
  function e(t) {
    var F = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
    return F.setUTCFullYear(t.getFullYear()), t.getTime() - F.getTime();
  }
  u.exports = D.default;
})(UD, UD.exports);
var Ne = UD.exports;
const W0 = /* @__PURE__ */ tu(Ne);
var Tu = {};
Object.defineProperty(Tu, "__esModule", {
  value: !0
});
Tu.isProtectedDayOfYearToken = Hn;
Tu.isProtectedWeekYearToken = qn;
Tu.throwProtectedError = Gn;
var Wn = ["D", "DD"], zn = ["YY", "YYYY"];
function Hn(u) {
  return Wn.indexOf(u) !== -1;
}
function qn(u) {
  return zn.indexOf(u) !== -1;
}
function Gn(u, D, e) {
  if (u === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(D, "`) for formatting years to the input `").concat(e, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (u === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(D, "`) for formatting years to the input `").concat(e, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (u === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(D, "`) for formatting days of the month to the input `").concat(e, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (u === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(D, "`) for formatting days of the month to the input `").concat(e, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var kD = { exports: {} }, jD = { exports: {} }, RD = { exports: {} };
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
  }, t = function(n, C, E) {
    var a, A = e[n];
    return typeof A == "string" ? a = A : C === 1 ? a = A.one : a = A.other.replace("{{count}}", C.toString()), E != null && E.addSuffix ? E.comparison && E.comparison > 0 ? "in " + a : a + " ago" : a;
  }, F = t;
  D.default = F, u.exports = D.default;
})(RD, RD.exports);
var Zn = RD.exports, YD = { exports: {} }, LD = { exports: {} };
(function(u, D) {
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = e;
  function e(t) {
    return function() {
      var F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = F.width ? String(F.width) : t.defaultWidth, n = t.formats[r] || t.formats[t.defaultWidth];
      return n;
    };
  }
  u.exports = D.default;
})(LD, LD.exports);
var Kn = LD.exports;
(function(u, D) {
  var e = T.default;
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = void 0;
  var t = e(Kn), F = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
  }, r = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
  }, n = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
  }, C = {
    date: (0, t.default)({
      formats: F,
      defaultWidth: "full"
    }),
    time: (0, t.default)({
      formats: r,
      defaultWidth: "full"
    }),
    dateTime: (0, t.default)({
      formats: n,
      defaultWidth: "full"
    })
  }, E = C;
  D.default = E, u.exports = D.default;
})(YD, YD.exports);
var Qn = YD.exports, WD = { exports: {} };
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
  }, t = function(n, C, E, a) {
    return e[n];
  }, F = t;
  D.default = F, u.exports = D.default;
})(WD, WD.exports);
var Jn = WD.exports, zD = { exports: {} }, HD = { exports: {} };
(function(u, D) {
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = e;
  function e(t) {
    return function(F, r) {
      var n = r != null && r.context ? String(r.context) : "standalone", C;
      if (n === "formatting" && t.formattingValues) {
        var E = t.defaultFormattingWidth || t.defaultWidth, a = r != null && r.width ? String(r.width) : E;
        C = t.formattingValues[a] || t.formattingValues[E];
      } else {
        var A = t.defaultWidth, i = r != null && r.width ? String(r.width) : t.defaultWidth;
        C = t.values[i] || t.values[A];
      }
      var l = t.argumentCallback ? t.argumentCallback(F) : F;
      return C[l];
    };
  }
  u.exports = D.default;
})(HD, HD.exports);
var Xn = HD.exports;
(function(u, D) {
  var e = T.default;
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = void 0;
  var t = e(Xn), F = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"]
  }, r = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
  }, n = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  }, C = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  }, E = {
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
  }, a = {
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
  }, A = function(p, g) {
    var c = Number(p), f = c % 100;
    if (f > 20 || f < 10)
      switch (f % 10) {
        case 1:
          return c + "st";
        case 2:
          return c + "nd";
        case 3:
          return c + "rd";
      }
    return c + "th";
  }, i = {
    ordinalNumber: A,
    era: (0, t.default)({
      values: F,
      defaultWidth: "wide"
    }),
    quarter: (0, t.default)({
      values: r,
      defaultWidth: "wide",
      argumentCallback: function(p) {
        return p - 1;
      }
    }),
    month: (0, t.default)({
      values: n,
      defaultWidth: "wide"
    }),
    day: (0, t.default)({
      values: C,
      defaultWidth: "wide"
    }),
    dayPeriod: (0, t.default)({
      values: E,
      defaultWidth: "wide",
      formattingValues: a,
      defaultFormattingWidth: "wide"
    })
  }, l = i;
  D.default = l, u.exports = D.default;
})(zD, zD.exports);
var Vn = zD.exports, qD = { exports: {} }, GD = { exports: {} };
(function(u, D) {
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = e;
  function e(r) {
    return function(n) {
      var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, E = C.width, a = E && r.matchPatterns[E] || r.matchPatterns[r.defaultMatchWidth], A = n.match(a);
      if (!A)
        return null;
      var i = A[0], l = E && r.parsePatterns[E] || r.parsePatterns[r.defaultParseWidth], d = Array.isArray(l) ? F(l, function(c) {
        return c.test(i);
      }) : t(l, function(c) {
        return c.test(i);
      }), p;
      p = r.valueCallback ? r.valueCallback(d) : d, p = C.valueCallback ? C.valueCallback(p) : p;
      var g = n.slice(i.length);
      return {
        value: p,
        rest: g
      };
    };
  }
  function t(r, n) {
    for (var C in r)
      if (r.hasOwnProperty(C) && n(r[C]))
        return C;
  }
  function F(r, n) {
    for (var C = 0; C < r.length; C++)
      if (n(r[C]))
        return C;
  }
  u.exports = D.default;
})(GD, GD.exports);
var ua = GD.exports, ZD = { exports: {} };
(function(u, D) {
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = e;
  function e(t) {
    return function(F) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = F.match(t.matchPattern);
      if (!n)
        return null;
      var C = n[0], E = F.match(t.parsePattern);
      if (!E)
        return null;
      var a = t.valueCallback ? t.valueCallback(E[0]) : E[0];
      a = r.valueCallback ? r.valueCallback(a) : a;
      var A = F.slice(C.length);
      return {
        value: a,
        rest: A
      };
    };
  }
  u.exports = D.default;
})(ZD, ZD.exports);
var Da = ZD.exports;
(function(u, D) {
  var e = T.default;
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = void 0;
  var t = e(ua), F = e(Da), r = /^(\d+)(th|st|nd|rd)?/i, n = /\d+/i, C = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
  }, E = {
    any: [/^b/i, /^(a|c)/i]
  }, a = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
  }, A = {
    any: [/1/i, /2/i, /3/i, /4/i]
  }, i = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
  }, l = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
  }, d = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
  }, p = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
  }, g = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
  }, c = {
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
  }, f = {
    ordinalNumber: (0, F.default)({
      matchPattern: r,
      parsePattern: n,
      valueCallback: function(o) {
        return parseInt(o, 10);
      }
    }),
    era: (0, t.default)({
      matchPatterns: C,
      defaultMatchWidth: "wide",
      parsePatterns: E,
      defaultParseWidth: "any"
    }),
    quarter: (0, t.default)({
      matchPatterns: a,
      defaultMatchWidth: "wide",
      parsePatterns: A,
      defaultParseWidth: "any",
      valueCallback: function(o) {
        return o + 1;
      }
    }),
    month: (0, t.default)({
      matchPatterns: i,
      defaultMatchWidth: "wide",
      parsePatterns: l,
      defaultParseWidth: "any"
    }),
    day: (0, t.default)({
      matchPatterns: d,
      defaultMatchWidth: "wide",
      parsePatterns: p,
      defaultParseWidth: "any"
    }),
    dayPeriod: (0, t.default)({
      matchPatterns: g,
      defaultMatchWidth: "any",
      parsePatterns: c,
      defaultParseWidth: "any"
    })
  }, B = f;
  D.default = B, u.exports = D.default;
})(qD, qD.exports);
var ea = qD.exports;
(function(u, D) {
  var e = T.default;
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = void 0;
  var t = e(Zn), F = e(Qn), r = e(Jn), n = e(Vn), C = e(ea), E = {
    code: "en-US",
    formatDistance: t.default,
    formatLong: F.default,
    formatRelative: r.default,
    localize: n.default,
    match: C.default,
    options: {
      weekStartsOn: 0,
      firstWeekContainsDate: 1
    }
  }, a = E;
  D.default = a, u.exports = D.default;
})(jD, jD.exports);
var ta = jD.exports;
(function(u, D) {
  var e = T.default;
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = void 0;
  var t = e(ta), F = t.default;
  D.default = F, u.exports = D.default;
})(kD, kD.exports);
var Fa = kD.exports;
(function(u, D) {
  var e = T.default;
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = s;
  var t = e(On), F = e(Pn), r = e(H), n = e(Yn), C = e(Ln), E = e(Ne), a = Tu, A = e(Fu), i = e(I), l = ru, d = e(Fa), p = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, g = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, c = /^'([^]*?)'?$/, f = /''/g, B = /[a-zA-Z]/;
  function s(h, v, b) {
    var P, k, S, y, O, $, Y, lu, fu, cu, J, Hu, qu, Gu, Zu, Ku, Qu, Ju;
    (0, i.default)(2, arguments);
    var Ze = String(v), du = (0, l.getDefaultOptions)(), pu = (P = (k = b == null ? void 0 : b.locale) !== null && k !== void 0 ? k : du.locale) !== null && P !== void 0 ? P : d.default, Xu = (0, A.default)((S = (y = (O = ($ = b == null ? void 0 : b.firstWeekContainsDate) !== null && $ !== void 0 ? $ : b == null || (Y = b.locale) === null || Y === void 0 || (lu = Y.options) === null || lu === void 0 ? void 0 : lu.firstWeekContainsDate) !== null && O !== void 0 ? O : du.firstWeekContainsDate) !== null && y !== void 0 ? y : (fu = du.locale) === null || fu === void 0 || (cu = fu.options) === null || cu === void 0 ? void 0 : cu.firstWeekContainsDate) !== null && S !== void 0 ? S : 1);
    if (!(Xu >= 1 && Xu <= 7))
      throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var Vu = (0, A.default)((J = (Hu = (qu = (Gu = b == null ? void 0 : b.weekStartsOn) !== null && Gu !== void 0 ? Gu : b == null || (Zu = b.locale) === null || Zu === void 0 || (Ku = Zu.options) === null || Ku === void 0 ? void 0 : Ku.weekStartsOn) !== null && qu !== void 0 ? qu : du.weekStartsOn) !== null && Hu !== void 0 ? Hu : (Qu = du.locale) === null || Qu === void 0 || (Ju = Qu.options) === null || Ju === void 0 ? void 0 : Ju.weekStartsOn) !== null && J !== void 0 ? J : 0);
    if (!(Vu >= 0 && Vu <= 6))
      throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    if (!pu.localize)
      throw new RangeError("locale must contain localize property");
    if (!pu.formatLong)
      throw new RangeError("locale must contain formatLong property");
    var Pu = (0, r.default)(h);
    if (!(0, t.default)(Pu))
      throw new RangeError("Invalid time value");
    var Ke = (0, E.default)(Pu), Qe = (0, F.default)(Pu, Ke), Je = {
      firstWeekContainsDate: Xu,
      weekStartsOn: Vu,
      locale: pu,
      _originalDate: Pu
    }, Xe = Ze.match(g).map(function(j) {
      var Q = j[0];
      if (Q === "p" || Q === "P") {
        var Mu = C.default[Q];
        return Mu(j, pu.formatLong);
      }
      return j;
    }).join("").match(p).map(function(j) {
      if (j === "''")
        return "'";
      var Q = j[0];
      if (Q === "'")
        return o(j);
      var Mu = n.default[Q];
      if (Mu)
        return !(b != null && b.useAdditionalWeekYearTokens) && (0, a.isProtectedWeekYearToken)(j) && (0, a.throwProtectedError)(j, v, String(h)), !(b != null && b.useAdditionalDayOfYearTokens) && (0, a.isProtectedDayOfYearToken)(j) && (0, a.throwProtectedError)(j, v, String(h)), Mu(Qe, j, pu.localize, Je);
      if (Q.match(B))
        throw new RangeError("Format string contains an unescaped latin alphabet character `" + Q + "`");
      return j;
    }).join("");
    return Xe;
  }
  function o(h) {
    var v = h.match(c);
    return v ? v[1].replace(f, "'") : h;
  }
  u.exports = D.default;
})(fD, fD.exports);
var ra = fD.exports;
const na = /* @__PURE__ */ tu(ra);
function z0(u, D, e) {
  var t = Ca(u, e.timeZone, e.locale);
  return t.formatToParts ? aa(t, D) : Ea(t, D);
}
function aa(u, D) {
  for (var e = u.formatToParts(D), t = e.length - 1; t >= 0; --t)
    if (e[t].type === "timeZoneName")
      return e[t].value;
}
function Ea(u, D) {
  var e = u.format(D).replace(/\u200E/g, ""), t = / [\w-+ ]+$/.exec(e);
  return t ? t[0].substr(1) : "";
}
function Ca(u, D, e) {
  if (e && !e.code)
    throw new Error(
      "date-fns-tz error: Please set a language code on the locale object imported from date-fns, e.g. `locale.code = 'en-US'`"
    );
  return new Intl.DateTimeFormat(e ? [e.code, "en-US"] : void 0, {
    timeZone: D,
    timeZoneName: u
  });
}
function Aa(u, D) {
  var e = Ba(D);
  return e.formatToParts ? oa(e, u) : sa(e, u);
}
var ia = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function oa(u, D) {
  try {
    for (var e = u.formatToParts(D), t = [], F = 0; F < e.length; F++) {
      var r = ia[e[F].type];
      r >= 0 && (t[r] = parseInt(e[F].value, 10));
    }
    return t;
  } catch (n) {
    if (n instanceof RangeError)
      return [NaN];
    throw n;
  }
}
function sa(u, D) {
  var e = u.format(D).replace(/\u200E/g, ""), t = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(e);
  return [t[3], t[1], t[2], t[4], t[5], t[6]];
}
var tD = {};
function Ba(u) {
  if (!tD[u]) {
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
    tD[u] = e ? new Intl.DateTimeFormat("en-US", {
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
  return tD[u];
}
function Ie(u, D, e, t, F, r, n) {
  var C = /* @__PURE__ */ new Date(0);
  return C.setUTCFullYear(u, D, e), C.setUTCHours(t, F, r, n), C;
}
var H0 = 36e5, la = 6e4, FD = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
};
function zu(u, D, e) {
  var t, F;
  if (!u || (t = FD.timezoneZ.exec(u), t))
    return 0;
  var r;
  if (t = FD.timezoneHH.exec(u), t)
    return r = parseInt(t[1], 10), q0(r) ? -(r * H0) : NaN;
  if (t = FD.timezoneHHMM.exec(u), t) {
    r = parseInt(t[1], 10);
    var n = parseInt(t[2], 10);
    return q0(r, n) ? (F = Math.abs(r) * H0 + n * la, r > 0 ? -F : F) : NaN;
  }
  if (da(u)) {
    D = new Date(D || Date.now());
    var C = e ? D : fa(D), E = KD(C, u), a = e ? E : ca(D, E, u);
    return -a;
  }
  return NaN;
}
function fa(u) {
  return Ie(
    u.getFullYear(),
    u.getMonth(),
    u.getDate(),
    u.getHours(),
    u.getMinutes(),
    u.getSeconds(),
    u.getMilliseconds()
  );
}
function KD(u, D) {
  var e = Aa(u, D), t = Ie(
    e[0],
    e[1] - 1,
    e[2],
    e[3] % 24,
    e[4],
    e[5],
    0
  ).getTime(), F = u.getTime(), r = F % 1e3;
  return F -= r >= 0 ? r : 1e3 + r, t - F;
}
function ca(u, D, e) {
  var t = u.getTime(), F = t - D, r = KD(new Date(F), e);
  if (D === r)
    return D;
  F -= r - D;
  var n = KD(new Date(F), e);
  return r === n ? r : Math.max(r, n);
}
function q0(u, D) {
  return -23 <= u && u <= 23 && (D == null || 0 <= D && D <= 59);
}
var G0 = {};
function da(u) {
  if (G0[u])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: u }), G0[u] = !0, !0;
  } catch {
    return !1;
  }
}
var pa = 60 * 1e3, ha = {
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(u, D, e, t) {
    var F = rD(t.timeZone, t._originalDate || u);
    if (F === 0)
      return "Z";
    switch (D) {
      case "X":
        return Z0(F);
      case "XXXX":
      case "XX":
        return au(F);
      case "XXXXX":
      case "XXX":
      default:
        return au(F, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(u, D, e, t) {
    var F = rD(t.timeZone, t._originalDate || u);
    switch (D) {
      case "x":
        return Z0(F);
      case "xxxx":
      case "xx":
        return au(F);
      case "xxxxx":
      case "xxx":
      default:
        return au(F, ":");
    }
  },
  // Timezone (GMT)
  O: function(u, D, e, t) {
    var F = rD(t.timeZone, t._originalDate || u);
    switch (D) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + ma(F, ":");
      case "OOOO":
      default:
        return "GMT" + au(F, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(u, D, e, t) {
    var F = t._originalDate || u;
    switch (D) {
      case "z":
      case "zz":
      case "zzz":
        return z0("short", F, t);
      case "zzzz":
      default:
        return z0("long", F, t);
    }
  }
};
function rD(u, D) {
  var e = u ? zu(u, D, !0) / pa : D.getTimezoneOffset();
  if (Number.isNaN(e))
    throw new RangeError("Invalid time zone specified: " + u);
  return e;
}
function Uu(u, D) {
  for (var e = u < 0 ? "-" : "", t = Math.abs(u).toString(); t.length < D; )
    t = "0" + t;
  return e + t;
}
function au(u, D) {
  var e = D || "", t = u > 0 ? "-" : "+", F = Math.abs(u), r = Uu(Math.floor(F / 60), 2), n = Uu(Math.floor(F % 60), 2);
  return t + r + e + n;
}
function Z0(u, D) {
  if (u % 60 === 0) {
    var e = u > 0 ? "-" : "+";
    return e + Uu(Math.abs(u) / 60, 2);
  }
  return au(u, D);
}
function ma(u, D) {
  var e = u > 0 ? "-" : "+", t = Math.abs(u), F = Math.floor(t / 60), r = t % 60;
  if (r === 0)
    return e + String(F);
  var n = D || "";
  return e + String(F) + n + Uu(r, 2);
}
const va = ha;
var ga = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, nD = 36e5, K0 = 6e4, ba = 2, N = {
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
  timeZone: ga
};
function Ue(u, D) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (u === null)
    return /* @__PURE__ */ new Date(NaN);
  var e = D || {}, t = e.additionalDigits == null ? ba : Tn(e.additionalDigits);
  if (t !== 2 && t !== 1 && t !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (u instanceof Date || typeof u == "object" && Object.prototype.toString.call(u) === "[object Date]")
    return new Date(u.getTime());
  if (typeof u == "number" || Object.prototype.toString.call(u) === "[object Number]")
    return new Date(u);
  if (!(typeof u == "string" || Object.prototype.toString.call(u) === "[object String]"))
    return /* @__PURE__ */ new Date(NaN);
  var F = ya(u), r = _a(F.date, t), n = r.year, C = r.restDateString, E = wa(C, n);
  if (isNaN(E))
    return /* @__PURE__ */ new Date(NaN);
  if (E) {
    var a = E.getTime(), A = 0, i;
    if (F.time && (A = xa(F.time), isNaN(A)))
      return /* @__PURE__ */ new Date(NaN);
    if (F.timeZone || e.timeZone) {
      if (i = zu(F.timeZone || e.timeZone, new Date(a + A)), isNaN(i))
        return /* @__PURE__ */ new Date(NaN);
    } else
      i = W0(new Date(a + A)), i = W0(new Date(a + A + i));
    return new Date(a + A + i);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function ya(u) {
  var D = {}, e = N.dateTimePattern.exec(u), t;
  if (e ? (D.date = e[1], t = e[3]) : (e = N.datePattern.exec(u), e ? (D.date = e[1], t = e[2]) : (D.date = null, t = u)), t) {
    var F = N.timeZone.exec(t);
    F ? (D.time = t.replace(F[1], ""), D.timeZone = F[1].trim()) : D.time = t;
  }
  return D;
}
function _a(u, D) {
  var e = N.YYY[D], t = N.YYYYY[D], F;
  if (F = N.YYYY.exec(u) || t.exec(u), F) {
    var r = F[1];
    return {
      year: parseInt(r, 10),
      restDateString: u.slice(r.length)
    };
  }
  if (F = N.YY.exec(u) || e.exec(u), F) {
    var n = F[1];
    return {
      year: parseInt(n, 10) * 100,
      restDateString: u.slice(n.length)
    };
  }
  return {
    year: null
  };
}
function wa(u, D) {
  if (D === null)
    return null;
  var e, t, F, r;
  if (u.length === 0)
    return t = /* @__PURE__ */ new Date(0), t.setUTCFullYear(D), t;
  if (e = N.MM.exec(u), e)
    return t = /* @__PURE__ */ new Date(0), F = parseInt(e[1], 10) - 1, J0(D, F) ? (t.setUTCFullYear(D, F), t) : /* @__PURE__ */ new Date(NaN);
  if (e = N.DDD.exec(u), e) {
    t = /* @__PURE__ */ new Date(0);
    var n = parseInt(e[1], 10);
    return Sa(D, n) ? (t.setUTCFullYear(D, 0, n), t) : /* @__PURE__ */ new Date(NaN);
  }
  if (e = N.MMDD.exec(u), e) {
    t = /* @__PURE__ */ new Date(0), F = parseInt(e[1], 10) - 1;
    var C = parseInt(e[2], 10);
    return J0(D, F, C) ? (t.setUTCFullYear(D, F, C), t) : /* @__PURE__ */ new Date(NaN);
  }
  if (e = N.Www.exec(u), e)
    return r = parseInt(e[1], 10) - 1, X0(D, r) ? Q0(D, r) : /* @__PURE__ */ new Date(NaN);
  if (e = N.WwwD.exec(u), e) {
    r = parseInt(e[1], 10) - 1;
    var E = parseInt(e[2], 10) - 1;
    return X0(D, r, E) ? Q0(D, r, E) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function xa(u) {
  var D, e, t;
  if (D = N.HH.exec(u), D)
    return e = parseFloat(D[1].replace(",", ".")), aD(e) ? e % 24 * nD : NaN;
  if (D = N.HHMM.exec(u), D)
    return e = parseInt(D[1], 10), t = parseFloat(D[2].replace(",", ".")), aD(e, t) ? e % 24 * nD + t * K0 : NaN;
  if (D = N.HHMMSS.exec(u), D) {
    e = parseInt(D[1], 10), t = parseInt(D[2], 10);
    var F = parseFloat(D[3].replace(",", "."));
    return aD(e, t, F) ? e % 24 * nD + t * K0 + F * 1e3 : NaN;
  }
  return null;
}
function Q0(u, D, e) {
  D = D || 0, e = e || 0;
  var t = /* @__PURE__ */ new Date(0);
  t.setUTCFullYear(u, 0, 4);
  var F = t.getUTCDay() || 7, r = D * 7 + e + 1 - F;
  return t.setUTCDate(t.getUTCDate() + r), t;
}
var Oa = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Ta = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function ke(u) {
  return u % 400 === 0 || u % 4 === 0 && u % 100 !== 0;
}
function J0(u, D, e) {
  if (D < 0 || D > 11)
    return !1;
  if (e != null) {
    if (e < 1)
      return !1;
    var t = ke(u);
    if (t && e > Ta[D] || !t && e > Oa[D])
      return !1;
  }
  return !0;
}
function Sa(u, D) {
  if (D < 1)
    return !1;
  var e = ke(u);
  return !(e && D > 366 || !e && D > 365);
}
function X0(u, D, e) {
  return !(D < 0 || D > 52 || e != null && (e < 0 || e > 6));
}
function aD(u, D, e) {
  return !(u != null && (u < 0 || u >= 25) || D != null && (D < 0 || D >= 60) || e != null && (e < 0 || e >= 60));
}
var Pa = /([xXOz]+)|''|'(''|[^'])+('|$)/g;
function Ma(u, D, e) {
  var t = String(D), F = e || {}, r = t.match(Pa);
  if (r) {
    var n = Ue(u, F);
    t = r.reduce(function(C, E) {
      if (E[0] === "'")
        return C;
      var a = C.indexOf(E), A = C[a - 1] === "'", i = C.replace(
        E,
        "'" + va[E[0]](n, E, null, F) + "'"
      );
      return A ? i.substring(0, a - 1) + i.substring(a + 1) : i;
    }, t);
  }
  return na(u, t, F);
}
var QD = { exports: {} }, JD = { exports: {} };
(function(u, D) {
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = e;
  function e(t, F) {
    if (t == null)
      throw new TypeError("assign requires that input parameter not be null or undefined");
    for (var r in F)
      Object.prototype.hasOwnProperty.call(F, r) && (t[r] = F[r]);
    return t;
  }
  u.exports = D.default;
})(JD, JD.exports);
var $a = JD.exports;
(function(u, D) {
  var e = T.default;
  Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = F;
  var t = e($a);
  function F(r) {
    return (0, t.default)({}, r);
  }
  u.exports = D.default;
})(QD, QD.exports);
var Na = QD.exports;
const Ia = /* @__PURE__ */ tu(Na);
function Ua(u, D, e) {
  var t = Ue(u, e), F = zu(D, t, !0), r = new Date(t.getTime() - F), n = /* @__PURE__ */ new Date(0);
  return n.setFullYear(r.getUTCFullYear(), r.getUTCMonth(), r.getUTCDate()), n.setHours(r.getUTCHours(), r.getUTCMinutes(), r.getUTCSeconds(), r.getUTCMilliseconds()), n;
}
function ka(u, D, e, t) {
  var F = Ia(t);
  return F.timeZone = D, Ma(Ua(u, D), e, F);
}
function ja(u, D) {
  return -zu(u, D);
}
/*!
 * XRegExp 5.1.1
 * <xregexp.com>
 * Steven Levithan (c) 2007-present MIT License
 */
const x = "xregexp", Du = {
  astral: !1,
  namespacing: !0
}, z = {};
let mu = {}, Eu = {};
const XD = [], Au = "default", V0 = "class", Ra = {
  // Any native multicharacter token in default scope, or any single character
  default: /\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|\(\?(?:[:=!]|<[=!])|[?*+]\?|{\d+(?:,\d*)?}\??|[\s\S]/,
  // Any native multicharacter token in character class scope, or any single character
  class: /\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|[\s\S]/
}, Ya = /\$(?:\{([^\}]+)\}|<([^>]+)>|(\d\d?|[\s\S]?))/g, La = /()??/.exec("")[1] === void 0, Wa = /x/.flags !== void 0;
function Su(u) {
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
const za = Su("d"), i0 = Su("s"), je = Su("u"), o0 = Su("y"), Re = {
  d: za,
  g: !0,
  i: !0,
  m: !0,
  s: i0,
  u: je,
  y: o0
}, Ha = i0 ? /[^dgimsuy]+/g : /[^dgimuy]+/g;
function Ye(u, D, e, t, F) {
  if (u[x] = {
    captureNames: D
  }, F)
    return u;
  if (u.__proto__)
    u.__proto__ = m.prototype;
  else
    for (const r in m.prototype)
      u[r] = m.prototype[r];
  return u[x].source = e, u[x].flags = t && t.split("").sort().join(""), u;
}
function Ou(u) {
  return u.replace(/([\s\S])(?=[\s\S]*\1)/g, "");
}
function nu(u, D) {
  if (!m.isRegExp(u))
    throw new TypeError("Type RegExp expected");
  const e = u[x] || {};
  let t = qa(u), F = "", r = "", n = null, C = null;
  return D = D || {}, D.removeG && (r += "g"), D.removeY && (r += "y"), r && (t = t.replace(new RegExp(`[${r}]+`, "g"), "")), D.addG && (F += "g"), D.addY && (F += "y"), F && (t = Ou(t + F)), D.isInternalOnly || (e.source !== void 0 && (n = e.source), e.flags != null && (C = F ? Ou(e.flags + F) : e.flags)), u = Ye(
    new RegExp(D.source || u.source, t),
    Ga(u) ? e.captureNames.slice(0) : null,
    n,
    C,
    D.isInternalOnly
  ), u;
}
function Le(u) {
  return parseInt(u, 16);
}
function We(u, D, e) {
  const t = u.index + u[0].length, F = u.input[u.index - 1], r = u.input[t];
  return (
    // No need to separate tokens if at the beginning or end of a group, before or after a
    // group, or before or after a `|`
    /^[()|]$/.test(F) || /^[()|]$/.test(r) || // No need to separate tokens if at the beginning or end of the pattern
    u.index === 0 || t === u.input.length || // No need to separate tokens if at the beginning of a noncapturing group or lookaround.
    // Looks only at the last 4 chars (at most) for perf when constructing long regexes.
    /\(\?(?:[:=!]|<[=!])$/.test(u.input.substring(u.index - 4, u.index)) || // Avoid separating tokens when the following token is a quantifier
    Za(u.input, t, e) ? "" : "(?:)"
  );
}
function qa(u) {
  return Wa ? u.flags : (
    // Explicitly using `RegExp.prototype.toString` (rather than e.g. `String` or concatenation
    // with an empty string) allows this to continue working predictably when
    // `XRegExp.proptotype.toString` is overridden
    /\/([a-z]*)$/i.exec(RegExp.prototype.toString.call(u))[1]
  );
}
function Ga(u) {
  return !!(u[x] && u[x].captureNames);
}
function s0(u) {
  return parseInt(u, 10).toString(16);
}
function Za(u, D, e) {
  const t = "\\(\\?#[^)]*\\)", F = "#[^#\\n]*", r = "[?*+]|{\\d+(?:,\\d*)?}";
  return (e.includes("x") ? (
    // Ignore any leading whitespace, line comments, and inline comments
    new RegExp(`^(?:\\s|${F}|${t})*(?:${r})`)
  ) : (
    // Ignore any leading inline comments
    new RegExp(`^(?:${t})*(?:${r})`)
  )).test(u.slice(D));
}
function ku(u, D) {
  return Object.prototype.toString.call(u) === `[object ${D}]`;
}
function Bu(u) {
  if (u == null)
    throw new TypeError("Cannot convert null or undefined to object");
  return u;
}
function B0(u) {
  for (; u.length < 4; )
    u = `0${u}`;
  return u;
}
function Ka(u, D) {
  if (Ou(D) !== D)
    throw new SyntaxError(`Invalid duplicate regex flag ${D}`);
  u = u.replace(/^\(\?([\w$]+)\)/, (e, t) => {
    if (/[dgy]/.test(t))
      throw new SyntaxError(`Cannot use flags dgy in mode modifier ${e}`);
    return D = Ou(D + t), "";
  });
  for (const e of D)
    if (!Re[e])
      throw new SyntaxError(`Unknown regex flag ${e}`);
  return {
    pattern: u,
    flags: D
  };
}
function ze(u) {
  const D = {};
  return ku(u, "String") ? (m.forEach(u, /[^\s,]+/, (e) => {
    D[e] = !0;
  }), D) : u;
}
function ue(u) {
  if (!/^[\w$]$/.test(u))
    throw new Error("Flag must be a single character A-Za-z0-9_$");
  Re[u] = !0;
}
function Qa(u, D, e, t, F) {
  let r = XD.length;
  const n = u[e];
  let C = null, E, a;
  for (; r--; )
    if (a = XD[r], !(a.leadChar && a.leadChar !== n || a.scope !== t && a.scope !== "all" || a.flag && !D.includes(a.flag)) && (E = m.exec(u, a.regex, e, "sticky"), E)) {
      C = {
        matchLength: E[0].length,
        output: a.handler.call(F, E, t, D),
        reparse: a.reparse
      };
      break;
    }
  return C;
}
function He(u) {
  Du.astral = u;
}
function qe(u) {
  Du.namespacing = u;
}
function m(u, D) {
  if (m.isRegExp(u)) {
    if (D !== void 0)
      throw new TypeError("Cannot supply flags when copying a RegExp");
    return nu(u);
  }
  if (u = u === void 0 ? "" : String(u), D = D === void 0 ? "" : String(D), m.isInstalled("astral") && !D.includes("A") && (D += "A"), Eu[u] || (Eu[u] = {}), !Eu[u][D]) {
    const t = {
      hasNamedCapture: !1,
      captureNames: []
    };
    let F = Au, r = "", n = 0, C;
    const E = Ka(u, D);
    let a = E.pattern;
    const A = E.flags;
    for (; n < a.length; ) {
      do
        C = Qa(a, A, n, F, t), C && C.reparse && (a = a.slice(0, n) + C.output + a.slice(n + C.matchLength));
      while (C && C.reparse);
      if (C)
        r += C.output, n += C.matchLength || 1;
      else {
        const [i] = m.exec(a, Ra[F], n, "sticky");
        r += i, n += i.length, i === "[" && F === Au ? F = V0 : i === "]" && F === V0 && (F = Au);
      }
    }
    Eu[u][D] = {
      // Use basic cleanup to collapse repeated empty groups like `(?:)(?:)` to `(?:)`. Empty
      // groups are sometimes inserted during regex transpilation in order to keep tokens
      // separated. However, more than one empty group in a row is never needed.
      pattern: r.replace(/(?:\(\?:\))+/g, "(?:)"),
      // Strip all but native flags
      flags: A.replace(Ha, ""),
      // `context.captureNames` has an item for each capturing group, even if unnamed
      captures: t.hasNamedCapture ? t.captureNames : null
    };
  }
  const e = Eu[u][D];
  return Ye(
    new RegExp(e.pattern, e.flags),
    e.captures,
    u,
    D
  );
}
m.prototype = new RegExp();
m.version = "5.1.1";
m._clipDuplicates = Ou;
m._hasNativeFlag = Su;
m._dec = Le;
m._hex = s0;
m._pad4 = B0;
m.addToken = (u, D, e) => {
  e = e || {};
  let { optionalFlags: t } = e;
  if (e.flag && ue(e.flag), t) {
    t = t.split("");
    for (const F of t)
      ue(F);
  }
  XD.push({
    regex: nu(u, {
      addG: !0,
      addY: o0,
      isInternalOnly: !0
    }),
    handler: D,
    scope: e.scope || Au,
    flag: e.flag,
    reparse: e.reparse,
    leadChar: e.leadChar
  }), m.cache.flush("patterns");
};
m.cache = (u, D) => (mu[u] || (mu[u] = {}), mu[u][D] || (mu[u][D] = m(u, D)));
m.cache.flush = (u) => {
  u === "patterns" ? Eu = {} : mu = {};
};
m.escape = (u) => String(Bu(u)).replace(/[\\\[\]{}()*+?.^$|]/g, "\\$&").replace(/[\s#\-,]/g, (D) => `\\u${B0(s0(D.charCodeAt(0)))}`);
m.exec = (u, D, e, t) => {
  let F = "g", r = !1, n = !1, C;
  r = o0 && !!(t || D.sticky && t !== !1), r ? F += "y" : t && (n = !0, F += "FakeY"), D[x] = D[x] || {};
  const E = D[x][F] || (D[x][F] = nu(D, {
    addG: !0,
    addY: r,
    source: n ? `${D.source}|()` : void 0,
    removeY: t === !1,
    isInternalOnly: !0
  }));
  return e = e || 0, E.lastIndex = e, C = z.exec.call(E, u), n && C && C.pop() === "" && (C = null), D.global && (D.lastIndex = C ? E.lastIndex : 0), C;
};
m.forEach = (u, D, e) => {
  let t = 0, F = -1, r;
  for (; r = m.exec(u, D, t); )
    e(r, ++F, u, D), t = r.index + (r[0].length || 1);
};
m.globalize = (u) => nu(u, { addG: !0 });
m.install = (u) => {
  u = ze(u), !Du.astral && u.astral && He(!0), !Du.namespacing && u.namespacing && qe(!0);
};
m.isInstalled = (u) => !!Du[u];
m.isRegExp = (u) => Object.prototype.toString.call(u) === "[object RegExp]";
m.match = (u, D, e) => {
  const t = D.global && e !== "one" || e === "all", F = (t ? "g" : "") + (D.sticky ? "y" : "") || "noGY";
  D[x] = D[x] || {};
  const r = D[x][F] || (D[x][F] = nu(D, {
    addG: !!t,
    removeG: e === "one",
    isInternalOnly: !0
  })), n = String(Bu(u)).match(r);
  return D.global && (D.lastIndex = e === "one" && n ? (
    // Can't use `r2.lastIndex` since `r2` is nonglobal in this case
    n.index + n[0].length
  ) : 0), t ? n || [] : n && n[0];
};
m.matchChain = (u, D) => function e(t, F) {
  const r = D[F].regex ? D[F] : { regex: D[F] }, n = [];
  function C(E) {
    if (r.backref) {
      const a = `Backreference to undefined group: ${r.backref}`, A = isNaN(r.backref);
      if (A && m.isInstalled("namespacing")) {
        if (!(E.groups && r.backref in E.groups))
          throw new ReferenceError(a);
      } else if (!E.hasOwnProperty(r.backref))
        throw new ReferenceError(a);
      const i = A && m.isInstalled("namespacing") ? E.groups[r.backref] : E[r.backref];
      n.push(i || "");
    } else
      n.push(E[0]);
  }
  for (const E of t)
    m.forEach(E, r.regex, C);
  return F === D.length - 1 || !n.length ? n : e(n, F + 1);
}([u], 0);
m.replace = (u, D, e, t) => {
  const F = m.isRegExp(D), r = D.global && t !== "one" || t === "all", n = (r ? "g" : "") + (D.sticky ? "y" : "") || "noGY";
  let C = D;
  F ? (D[x] = D[x] || {}, C = D[x][n] || (D[x][n] = nu(D, {
    addG: !!r,
    removeG: t === "one",
    isInternalOnly: !0
  }))) : r && (C = new RegExp(m.escape(String(D)), "g"));
  const E = z.replace.call(Bu(u), C, e);
  return F && D.global && (D.lastIndex = 0), E;
};
m.replaceEach = (u, D) => {
  for (const e of D)
    u = m.replace(u, e[0], e[1], e[2]);
  return u;
};
m.split = (u, D, e) => z.split.call(Bu(u), D, e);
m.test = (u, D, e, t) => !!m.exec(u, D, e, t);
m.uninstall = (u) => {
  u = ze(u), Du.astral && u.astral && He(!1), Du.namespacing && u.namespacing && qe(!1);
};
m.union = (u, D, e) => {
  e = e || {};
  const t = e.conjunction || "or";
  let F = 0, r, n;
  function C(i, l, d) {
    const p = n[F - r];
    if (l) {
      if (++F, p)
        return `(?<${p}>`;
    } else if (d)
      return `\\${+d + r}`;
    return i;
  }
  if (!(ku(u, "Array") && u.length))
    throw new TypeError("Must provide a nonempty array of patterns to merge");
  const E = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g, a = [];
  for (const i of u)
    m.isRegExp(i) ? (r = F, n = i[x] && i[x].captureNames || [], a.push(m(i.source).source.replace(E, C))) : a.push(m.escape(i));
  const A = t === "none" ? "" : "|";
  return m(a.join(A), D);
};
z.exec = function(u) {
  const D = this.lastIndex, e = RegExp.prototype.exec.apply(this, arguments);
  if (e) {
    if (!La && e.length > 1 && e.includes("")) {
      const t = nu(this, {
        removeG: !0,
        isInternalOnly: !0
      });
      String(u).slice(e.index).replace(t, (...F) => {
        const r = F.length;
        for (let n = 1; n < r - 2; ++n)
          F[n] === void 0 && (e[n] = void 0);
      });
    }
    if (this[x] && this[x].captureNames) {
      let t = e;
      m.isInstalled("namespacing") && (e.groups = /* @__PURE__ */ Object.create(null), t = e.groups);
      for (let F = 1; F < e.length; ++F) {
        const r = this[x].captureNames[F - 1];
        r && (t[r] = e[F]);
      }
    } else
      !e.groups && m.isInstalled("namespacing") && (e.groups = void 0);
    this.global && !e[0].length && this.lastIndex > e.index && (this.lastIndex = e.index);
  }
  return this.global || (this.lastIndex = D), e;
};
z.test = function(u) {
  return !!z.exec.call(this, u);
};
z.match = function(u) {
  if (!m.isRegExp(u))
    u = new RegExp(u);
  else if (u.global) {
    const D = String.prototype.match.apply(this, arguments);
    return u.lastIndex = 0, D;
  }
  return z.exec.call(u, Bu(this));
};
z.replace = function(u, D) {
  const e = m.isRegExp(u);
  let t, F, r;
  return e ? (u[x] && ({ captureNames: F } = u[x]), t = u.lastIndex) : u += "", ku(D, "Function") ? r = String(this).replace(u, (...n) => {
    if (F) {
      let C;
      m.isInstalled("namespacing") ? (C = /* @__PURE__ */ Object.create(null), n.push(C)) : (n[0] = new String(n[0]), [C] = n);
      for (let E = 0; E < F.length; ++E)
        F[E] && (C[F[E]] = n[E + 1]);
    }
    return D(...n);
  }) : r = String(Bu(this)).replace(u, (...n) => {
    return String(D).replace(Ya, C);
    function C(E, a, A, i) {
      a = a || A;
      const l = ku(n[n.length - 1], "Object") ? 4 : 3, d = n.length - l;
      if (a) {
        if (/^\d+$/.test(a)) {
          const g = +a;
          if (g <= d)
            return n[g] || "";
        }
        const p = F ? F.indexOf(a) : -1;
        if (p < 0)
          throw new SyntaxError(`Backreference to undefined group ${E}`);
        return n[p + 1] || "";
      }
      if (i === "" || i === " ")
        throw new SyntaxError(`Invalid token ${E}`);
      if (i === "&" || +i == 0)
        return n[0];
      if (i === "$")
        return "$";
      if (i === "`")
        return n[n.length - 1].slice(0, n[n.length - 2]);
      if (i === "'")
        return n[n.length - 1].slice(n[n.length - 2] + n[0].length);
      if (i = +i, !isNaN(i)) {
        if (i > d)
          throw new SyntaxError(`Backreference to undefined group ${E}`);
        return n[i] || "";
      }
      throw new SyntaxError(`Invalid token ${E}`);
    }
  }), e && (u.global ? u.lastIndex = 0 : u.lastIndex = t), r;
};
z.split = function(u, D) {
  if (!m.isRegExp(u))
    return String.prototype.split.apply(this, arguments);
  const e = String(this), t = [], F = u.lastIndex;
  let r = 0, n;
  return D = (D === void 0 ? -1 : D) >>> 0, m.forEach(e, u, (C) => {
    C.index + C[0].length > r && (t.push(e.slice(r, C.index)), C.length > 1 && C.index < e.length && Array.prototype.push.apply(t, C.slice(1)), n = C[0].length, r = C.index + n);
  }), r === e.length ? (!u.test("") || n) && t.push("") : t.push(e.slice(r)), u.lastIndex = F, t.length > D ? t.slice(0, D) : t;
};
m.addToken(
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
m.addToken(
  /\\u{([\dA-Fa-f]+)}/,
  (u, D, e) => {
    const t = Le(u[1]);
    if (t > 1114111)
      throw new SyntaxError(`Invalid Unicode code point ${u[0]}`);
    if (t <= 65535)
      return `\\u${B0(s0(t))}`;
    if (je && e.includes("u"))
      return u[0];
    throw new SyntaxError("Cannot use Unicode code point above \\u{FFFF} without flag u");
  },
  {
    scope: "all",
    leadChar: "\\"
  }
);
m.addToken(
  /\(\?#[^)]*\)/,
  We,
  { leadChar: "(" }
);
m.addToken(
  /\s+|#[^\n]*\n?/,
  We,
  { flag: "x" }
);
i0 || m.addToken(
  /\./,
  () => "[\\s\\S]",
  {
    flag: "s",
    leadChar: "."
  }
);
m.addToken(
  /\\k<([^>]+)>/,
  function(u) {
    const D = isNaN(u[1]) ? this.captureNames.indexOf(u[1]) + 1 : +u[1], e = u.index + u[0].length;
    if (!D || D > this.captureNames.length)
      throw new SyntaxError(`Backreference to undefined group ${u[0]}`);
    return `\\${D}${e === u.input.length || isNaN(u.input[e]) ? "" : "(?:)"}`;
  },
  { leadChar: "\\" }
);
m.addToken(
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
m.addToken(
  /\(\?P?<([\p{ID_Start}$_][\p{ID_Continue}$_\u200C\u200D]*)>/u,
  function(u) {
    if (!m.isInstalled("namespacing") && (u[1] === "length" || u[1] === "__proto__"))
      throw new SyntaxError(`Cannot use reserved word as capture name ${u[0]}`);
    if (this.captureNames.includes(u[1]))
      throw new SyntaxError(`Cannot use same name for multiple groups ${u[0]}`);
    return this.captureNames.push(u[1]), this.hasNamedCapture = !0, "(";
  },
  { leadChar: "(" }
);
m.addToken(
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
const Ja = (u) => {
  const D = "xregexp", e = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g, t = u.union([/\({{([\w$]+)}}\)|{{([\w$]+)}}/, e], "g", {
    conjunction: "or"
  });
  function F(a) {
    const A = /^(?:\(\?:\))*\^/, i = /\$(?:\(\?:\))*$/;
    return A.test(a) && i.test(a) && // Ensure that the trailing `$` isn't escaped
    i.test(a.replace(/\\[\s\S]/g, "")) ? a.replace(A, "").replace(i, "") : a;
  }
  function r(a, A) {
    const i = A ? "x" : "";
    return u.isRegExp(a) ? a[D] && a[D].captureNames ? (
      // Don't recompile, to preserve capture names
      a
    ) : (
      // Recompile as XRegExp
      u(a.source, i)
    ) : (
      // Compile string as XRegExp
      u(a, i)
    );
  }
  function n(a) {
    return a instanceof RegExp ? a : u.escape(a);
  }
  function C(a, A, i) {
    return a[`subpattern${i}`] = A, a;
  }
  function E(a, A, i) {
    const l = A < i.length - 1;
    return a + (l ? `{{subpattern${A}}}` : "");
  }
  u.tag = (a) => (A, ...i) => {
    const l = i.map(n).reduce(C, {}), d = A.raw.map(E).join("");
    return u.build(d, l, a);
  }, u.build = (a, A, i) => {
    i = i || "";
    const l = i.includes("x"), d = /^\(\?([\w$]+)\)/.exec(a);
    d && (i = u._clipDuplicates(i + d[1]));
    const p = {};
    for (const v in A)
      if (A.hasOwnProperty(v)) {
        const b = r(A[v], l);
        p[v] = {
          // Deanchoring allows embedding independently useful anchored regexes. If you
          // really need to keep your anchors, double them (i.e., `^^...$$`).
          pattern: F(b.source),
          names: b[D].captureNames || []
        };
      }
    const g = r(a, l);
    let c = 0, f, B = 0;
    const s = [0], o = g[D].captureNames || [], h = g.source.replace(t, (v, b, P, k, S) => {
      const y = b || P;
      let O, $, Y;
      if (y) {
        if (!p.hasOwnProperty(y))
          throw new ReferenceError(`Undefined property ${v}`);
        b ? (O = o[B], s[++B] = ++c, $ = `(?<${O || y}>`) : $ = "(?:", f = c;
        const lu = p[y].pattern.replace(e, (fu, cu, J) => {
          if (cu) {
            if (O = p[y].names[c - f], ++c, O)
              return `(?<${O}>`;
          } else if (J)
            return Y = +J - 1, p[y].names[Y] ? (
              // Need to preserve the backreference name in case using flag `n`
              `\\k<${p[y].names[Y]}>`
            ) : `\\${+J + f}`;
          return fu;
        });
        return `${$}${lu})`;
      }
      if (k) {
        if (O = o[B], s[++B] = ++c, O)
          return `(?<${O}>`;
      } else if (S)
        return Y = +S - 1, o[Y] ? (
          // Need to preserve the backreference name in case using flag `n`
          `\\k<${o[Y]}>`
        ) : `\\${s[+S]}`;
      return v;
    });
    return u(h, i);
  };
};
/*!
 * XRegExp.matchRecursive 5.1.1
 * <xregexp.com>
 * Steven Levithan (c) 2009-present MIT License
 */
const Xa = (u) => {
  function D(e, t, F, r) {
    return {
      name: e,
      value: t,
      start: F,
      end: r
    };
  }
  u.matchRecursive = (e, t, F, r, n) => {
    r = r || "", n = n || {};
    const C = r.includes("g"), E = r.includes("y"), a = r.replace(/y/g, "");
    t = u(t, a), F = u(F, a);
    let A, { escapeChar: i } = n;
    if (i) {
      if (i.length > 1)
        throw new Error("Cannot use more than one escape character");
      i = u.escape(i), A = new RegExp(
        `(?:${i}[\\S\\s]|(?:(?!${// Using `XRegExp.union` safely rewrites backreferences in `left` and `right`.
        // Intentionally not passing `basicFlags` to `XRegExp.union` since any syntax
        // transformation resulting from those flags was already applied to `left` and
        // `right` when they were passed through the XRegExp constructor above.
        u.union([t, F], "", { conjunction: "or" }).source})[^${i}])+)+`,
        // Flags `dgy` not needed here
        r.replace(u._hasNativeFlag("s") ? /[^imsu]/g : /[^imu]/g, "")
      );
    }
    let l = 0, d = 0, p = 0, g = 0, c, f, B, s;
    const o = n.valueNames, h = [];
    for (; ; ) {
      if (i && (p += (u.exec(e, A, p, "sticky") || [""])[0].length), B = u.exec(e, t, p), s = u.exec(e, F, p), B && s && (B.index <= s.index ? s = null : B = null), B || s)
        d = (B || s).index, p = d + (B || s)[0].length;
      else if (!l)
        break;
      if (E && !l && d > g)
        break;
      if (B)
        l || (c = d, f = p), l += 1;
      else if (s && l) {
        if (l -= 1, !l && (o ? (o[0] && c > g && h.push(D(o[0], e.slice(g, c), g, c)), o[1] && h.push(D(o[1], e.slice(c, f), c, f)), o[2] && h.push(D(o[2], e.slice(f, d), f, d)), o[3] && h.push(D(o[3], e.slice(d, p), d, p))) : h.push(e.slice(f, d)), g = p, !C))
          break;
      } else {
        const v = n.unbalanced || "error";
        if (v === "skip" || v === "skip-lazy")
          if (s)
            s = null;
          else {
            if (v === "skip") {
              const b = u.exec(e, t, c, "sticky")[0].length;
              p = c + (b || 1);
            } else
              p = c + 1;
            l = 0;
          }
        else if (v === "error") {
          const b = s ? "right" : "left", P = s ? d : c;
          throw new Error(`Unbalanced ${b} delimiter found in string at position ${P}`);
        } else
          throw new Error(`Unsupported value for unbalanced: ${v}`);
      }
      d === p && (p += 1);
    }
    return C && h.length > 0 && !E && o && o[0] && e.length > g && h.push(D(o[0], e.slice(g), g, e.length)), h;
  };
};
/*!
 * XRegExp Unicode Base 5.1.1
 * <xregexp.com>
 * Steven Levithan (c) 2008-present MIT License
 */
const Va = (u) => {
  const D = {}, e = {}, t = u._dec, F = u._hex, r = u._pad4;
  function n(l) {
    return l.replace(/[- _]+/g, "").toLowerCase();
  }
  function C(l) {
    const d = /^\\[xu](.+)/.exec(l);
    return d ? t(d[1]) : l.charCodeAt(l[0] === "\\" ? 1 : 0);
  }
  function E(l) {
    let d = "", p = -1;
    return u.forEach(
      l,
      /(\\x..|\\u....|\\?[\s\S])(?:-(\\x..|\\u....|\\?[\s\S]))?/,
      (g) => {
        const c = C(g[1]);
        c > p + 1 && (d += `\\u${r(F(p + 1))}`, c > p + 2 && (d += `-\\u${r(F(c - 1))}`)), p = C(g[2] || g[1]);
      }
    ), p < 65535 && (d += `\\u${r(F(p + 1))}`, p < 65534 && (d += "-\\uFFFF")), d;
  }
  function a(l) {
    const d = "b!";
    return D[l][d] || (D[l][d] = E(D[l].bmp));
  }
  function A(l, d) {
    const p = D[l];
    let g = "";
    return p.bmp && !p.isBmpLast && (g = `[${p.bmp}]${p.astral ? "|" : ""}`), p.astral && (g += p.astral), p.isBmpLast && p.bmp && (g += `${p.astral ? "|" : ""}[${p.bmp}]`), d ? `(?:(?!${g})(?:[\uD800-\uDBFF][\uDC00-\uDFFF]|[\0-￿]))` : `(?:${g})`;
  }
  function i(l, d) {
    const p = d ? "a!" : "a=";
    return D[l][p] || (D[l][p] = A(l, d));
  }
  u.addToken(
    // Use `*` instead of `+` to avoid capturing `^` as the token name in `\p{^}`
    /\\([pP])(?:{(\^?)(?:(\w+)=)?([^}]*)}|([A-Za-z]))/,
    (l, d, p) => {
      const g = "Invalid double negation ", c = "Unknown Unicode token ", f = "Unicode token missing data ", B = "Astral mode required for Unicode token ", s = "Astral mode does not support Unicode tokens within character classes", [
        o,
        h,
        v,
        b,
        P,
        k
      ] = l;
      let S = h === "P" || !!v;
      const y = p.includes("A");
      let O = n(k || P), $ = D[O];
      if (h === "P" && v)
        throw new SyntaxError(g + o);
      if (!D.hasOwnProperty(O))
        throw new SyntaxError(c + o);
      if (b && !(e[b] && e[b][O]))
        throw new SyntaxError(c + o);
      if ($.inverseOf) {
        if (O = n($.inverseOf), !D.hasOwnProperty(O))
          throw new ReferenceError(`${f + o} -> ${$.inverseOf}`);
        $ = D[O], S = !S;
      }
      if (!($.bmp || y))
        throw new SyntaxError(B + o);
      if (y) {
        if (d === "class")
          throw new SyntaxError(s);
        return i(O, S);
      }
      return d === "class" ? S ? a(O) : $.bmp : `${(S ? "[^" : "[") + $.bmp}]`;
    },
    {
      scope: "all",
      optionalFlags: "A",
      leadChar: "\\"
    }
  ), u.addUnicodeData = (l, d) => {
    const p = "Unicode token requires name", g = "Unicode token has no character data ";
    d && (e[d] = {});
    for (const c of l) {
      if (!c.name)
        throw new Error(p);
      if (!(c.inverseOf || c.bmp || c.astral))
        throw new Error(g + c.name);
      const f = n(c.name);
      if (D[f] = c, d && (e[d][f] = !0), c.alias) {
        const B = n(c.alias);
        D[B] = c, d && (e[d][B] = !0);
      }
    }
    u.cache.flush("patterns");
  }, u._getUnicodeProperty = (l) => {
    const d = n(l);
    return D[d];
  };
};
var uE = [
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
const DE = /* @__PURE__ */ tu(uE);
/*!
 * XRegExp Unicode Categories 5.1.1
 * <xregexp.com>
 * Steven Levithan (c) 2010-present MIT License
 * Unicode data by Mathias Bynens <mathiasbynens.be>
 */
const eE = (u) => {
  if (!u.addUnicodeData)
    throw new ReferenceError("Unicode Base must be loaded before Unicode Categories");
  u.addUnicodeData(DE);
};
var tE = [
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
const FE = /* @__PURE__ */ tu(tE);
/*!
 * XRegExp Unicode Properties 5.1.1
 * <xregexp.com>
 * Steven Levithan (c) 2012-present MIT License
 * Unicode data by Mathias Bynens <mathiasbynens.be>
 */
const rE = (u) => {
  if (!u.addUnicodeData)
    throw new ReferenceError("Unicode Base must be loaded before Unicode Properties");
  const D = FE;
  D.push({
    name: "Assigned",
    // Since this is defined as the inverse of Unicode category Cn (Unassigned), the Unicode
    // Categories addon is required to use this property
    inverseOf: "Cn"
  }), u.addUnicodeData(D);
};
var nE = [
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
const aE = /* @__PURE__ */ tu(nE);
/*!
 * XRegExp Unicode Scripts 5.1.1
 * <xregexp.com>
 * Steven Levithan (c) 2010-present MIT License
 * Unicode data by Mathias Bynens <mathiasbynens.be>
 */
const EE = (u) => {
  if (!u.addUnicodeData)
    throw new ReferenceError("Unicode Base must be loaded before Unicode Scripts");
  u.addUnicodeData(aE, "Script");
};
Ja(m);
Xa(m);
Va(m);
eE(m);
rE(m);
EE(m);
const CE = ut(), Ge = m.build("[^\\{\\}]*", {}, "gmx"), AE = m.build("[^\\|\\(\\)\\{\\}: 	]+", {}, "gmx"), iE = m.build("[^\\|\\(\\)\\{\\}]+", {}, "gmx"), oE = m.build(
  `
    \\|[ 	]*
      ({{filter}})
      ([ 	]*:[ 	]*({{args}}))*
      ({{tailing}})
  `,
  {
    filter: AE,
    args: iE,
    tailing: Ge
  },
  "gmx"
), sE = m.build("[^\\:\\|\\(\\)\\{\\}\v 	]+", {}, "gmx"), BE = m.build(
  `
    [ \\(]*[ 	]*
      ({{selector}})
    ([ 	](?=\\))*)?[ \\)]*
    ({{tailing}})
  `,
  {
    selector: sE,
    tailing: Ge
  },
  "gmx"
), De = m.build(
  `
    (\\{\\{[ 	]*
      ({{operator}})
    [ 	](?=\\})*\\}\\})
  `,
  { operator: BE },
  "gmx"
), ee = (u, D) => D ? m.replace(
  D,
  De,
  (...e) => {
    var C;
    const t = U0(e), F = (C = m.exec((t == null ? void 0 : t.tailing) ?? "", oE)) == null ? void 0 : C.groups, r = L0(u, t == null ? void 0 : t.selector);
    let n = r;
    try {
      if (F) {
        const a = ((F == null ? void 0 : F.args) ?? "").trim().split(/\s:\s/);
        switch (F.filter) {
          case "date": {
            const A = a != null && a[1] ? L0(u, String(a == null ? void 0 : a[1])) ?? (a == null ? void 0 : a[1]) : CE.timeZone();
            n = ka(
              new Date(r),
              isNaN(ja(A)) ? Intl.DateTimeFormat().resolvedOptions().timeZone : A,
              String((a == null ? void 0 : a[0]) ?? "yyyy-MM-dd")
            );
            break;
          }
          case "number":
            n = Number(r ?? 0);
            break;
          case "json":
            n = JSON.parse(r);
            break;
          case "stringify":
            n = JSON.stringify(r);
            break;
          case "trim":
            n = r.trim();
            break;
          case "upper":
            n = r.toUpperCase();
            break;
          case "lower":
            n = r.toLowerCase();
            break;
          case "capitalize":
            n = r.replace(
              /\b\w/g,
              (A) => A.toUpperCase()
            );
            break;
          case "join":
            n = Q1(r, a == null ? void 0 : a[0]);
            break;
          case "last":
            n = U0(r);
            break;
          case "flat":
            n = W1(r);
            break;
          case "uniq":
            n = en(r);
            break;
          case "wrap":
            if (!(a != null && a[0]))
              break;
            n = r.map((A) => ({ [a[0]]: A }));
            break;
          default:
            break;
        }
      }
      const E = ((F == null ? void 0 : F.tailing) ?? (t == null ? void 0 : t.tailing) ?? "").replace(
        /^\)/,
        ""
      );
      E && (n = ee({ ...u, result: n }, `{{ result${E} }}`));
    } catch (E) {
      return E;
    }
    return De.test(n) && (n = ee(u, n)), n;
  },
  "all"
) : "";
export {
  Y1 as $,
  yF as A,
  R as B,
  Iu as C,
  q as D,
  _0 as E,
  j1 as F,
  P1 as G,
  pE as H,
  re as I,
  Qr as J,
  wr as K,
  _u as L,
  j0 as M,
  dE as N,
  he as O,
  R1 as P,
  Rt as Q,
  U0 as R,
  cE as S,
  fe as T,
  hE as U,
  a0 as V,
  h1 as W,
  m1 as X,
  le as Y,
  Wu as Z,
  Ee as _,
  E0 as a,
  y1 as a0,
  oD as a1,
  k0 as a2,
  en as a3,
  L1 as a4,
  W1 as a5,
  u0 as b,
  ft as c,
  Ae as d,
  Ce as e,
  ju as f,
  su as g,
  SF as h,
  VD as i,
  pe as j,
  iu as k,
  ou as l,
  t0 as m,
  Pr as n,
  PF as o,
  ee as p,
  xr as q,
  G as r,
  L0 as s,
  de as t,
  fE as u,
  Mr as v,
  P0 as w,
  W as x,
  iD as y,
  v0 as z
};
//# sourceMappingURL=parser-340d982d.js.map
