import { toRef as se, computed as h, toValue as T } from "vue";
import { l as ue, m as N, n as le, h as X, o as P, q as ce, r as fe, v as ge, w as ve, x as ye, y as j, z as pe, A as me, B as be, C as de, D as he, E as Te, F as E, G as M, I as A, J, K as S, L as we, O as Pe, i as Se, P as x, Q as Ae, R as Oe, T as Q, V as $e, W as O, X as Z, Y as je, Z as xe, g as z, s as V, p as Ie, M as F } from "./uuid-BJoTr7bh.js";
function _e(e, r, n) {
  switch (n.length) {
    case 0:
      return e.call(r);
    case 1:
      return e.call(r, n[0]);
    case 2:
      return e.call(r, n[0], n[1]);
    case 3:
      return e.call(r, n[0], n[1], n[2]);
  }
  return e.apply(r, n);
}
var Be = 800, Ce = 16, Ne = Date.now;
function Ee(e) {
  var r = 0, n = 0;
  return function() {
    var t = Ne(), a = Ce - (t - n);
    if (n = t, a > 0) {
      if (++r >= Be)
        return arguments[0];
    } else
      r = 0;
    return e.apply(void 0, arguments);
  };
}
function Me(e) {
  return function() {
    return e;
  };
}
var Fe = N ? function(e, r) {
  return N(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Me(r),
    writable: !0
  });
} : ue, Le = Ee(Fe);
function Ue(e, r) {
  for (var n = -1, t = e == null ? 0 : e.length; ++n < t && r(e[n], n, e) !== !1; )
    ;
  return e;
}
var De = Object.prototype, Ge = De.hasOwnProperty;
function I(e, r, n) {
  var t = e[r];
  (!(Ge.call(e, r) && le(t, n)) || n === void 0 && !(r in e)) && X(e, r, n);
}
function Re(e, r, n, t) {
  var a = !n;
  n || (n = {});
  for (var o = -1, u = r.length; ++o < u; ) {
    var i = r[o], f = void 0;
    f === void 0 && (f = e[i]), a ? X(n, i, f) : I(n, i, f);
  }
  return n;
}
var L = Math.max;
function Ke(e, r, n) {
  return r = L(r === void 0 ? e.length - 1 : r, 0), function() {
    for (var t = arguments, a = -1, o = L(t.length - r, 0), u = Array(o); ++a < o; )
      u[a] = t[r + a];
    a = -1;
    for (var i = Array(r + 1); ++a < r; )
      i[a] = t[a];
    return i[r] = n(u), _e(e, this, i);
  };
}
function qe(e) {
  var r = [];
  if (e != null)
    for (var n in Object(e))
      r.push(n);
  return r;
}
var Ye = Object.prototype, He = Ye.hasOwnProperty;
function We(e) {
  if (!P(e))
    return qe(e);
  var r = ce(e), n = [];
  for (var t in e)
    t == "constructor" && (r || !He.call(e, t)) || n.push(t);
  return n;
}
function Xe(e) {
  return fe(e) ? ge(e, !0) : We(e);
}
function Je(e) {
  var r = e == null ? 0 : e.length;
  return r ? ve(e) : [];
}
function Qe(e) {
  return Le(Ke(e, void 0, Je), e + "");
}
var k = ye(Object.getPrototypeOf, Object), Ze = "[object Object]", ze = Function.prototype, Ve = Object.prototype, ee = ze.toString, ke = Ve.hasOwnProperty, er = ee.call(Object);
function rr(e) {
  if (!j(e) || pe(e) != Ze)
    return !1;
  var r = k(e);
  if (r === null)
    return !0;
  var n = ke.call(r, "constructor") && r.constructor;
  return typeof n == "function" && n instanceof n && ee.call(n) == er;
}
var re = typeof exports == "object" && exports && !exports.nodeType && exports, U = re && typeof module == "object" && module && !module.nodeType && module, nr = U && U.exports === re, D = nr ? me.Buffer : void 0;
D && D.allocUnsafe;
function tr(e, r) {
  return e.slice();
}
var ar = Object.getOwnPropertySymbols, or = ar ? function(e) {
  for (var r = []; e; )
    de(r, he(e)), e = k(e);
  return r;
} : be;
function _(e) {
  return Te(e, Xe, or);
}
var ir = Object.prototype, sr = ir.hasOwnProperty;
function ur(e) {
  var r = e.length, n = new e.constructor(r);
  return r && typeof e[0] == "string" && sr.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
function B(e) {
  var r = new e.constructor(e.byteLength);
  return new E(r).set(new E(e)), r;
}
function lr(e, r) {
  var n = B(e.buffer);
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var cr = /\w*$/;
function fr(e) {
  var r = new e.constructor(e.source, cr.exec(e));
  return r.lastIndex = e.lastIndex, r;
}
var G = M ? M.prototype : void 0, R = G ? G.valueOf : void 0;
function gr(e) {
  return R ? Object(R.call(e)) : {};
}
function vr(e, r) {
  var n = B(e.buffer);
  return new e.constructor(n, e.byteOffset, e.length);
}
var yr = "[object Boolean]", pr = "[object Date]", mr = "[object Map]", br = "[object Number]", dr = "[object RegExp]", hr = "[object Set]", Tr = "[object String]", wr = "[object Symbol]", Pr = "[object ArrayBuffer]", Sr = "[object DataView]", Ar = "[object Float32Array]", Or = "[object Float64Array]", $r = "[object Int8Array]", jr = "[object Int16Array]", xr = "[object Int32Array]", Ir = "[object Uint8Array]", _r = "[object Uint8ClampedArray]", Br = "[object Uint16Array]", Cr = "[object Uint32Array]";
function Nr(e, r, n) {
  var t = e.constructor;
  switch (r) {
    case Pr:
      return B(e);
    case yr:
    case pr:
      return new t(+e);
    case Sr:
      return lr(e);
    case Ar:
    case Or:
    case $r:
    case jr:
    case xr:
    case Ir:
    case _r:
    case Br:
    case Cr:
      return vr(e);
    case mr:
      return new t();
    case br:
    case Tr:
      return new t(e);
    case dr:
      return fr(e);
    case hr:
      return new t();
    case wr:
      return gr(e);
  }
}
var Er = "[object Map]";
function Mr(e) {
  return j(e) && A(e) == Er;
}
var K = S && S.isMap, Fr = K ? J(K) : Mr, Lr = "[object Set]";
function Ur(e) {
  return j(e) && A(e) == Lr;
}
var q = S && S.isSet, Dr = q ? J(q) : Ur, ne = "[object Arguments]", Gr = "[object Array]", Rr = "[object Boolean]", Kr = "[object Date]", qr = "[object Error]", te = "[object Function]", Yr = "[object GeneratorFunction]", Hr = "[object Map]", Wr = "[object Number]", ae = "[object Object]", Xr = "[object RegExp]", Jr = "[object Set]", Qr = "[object String]", Zr = "[object Symbol]", zr = "[object WeakMap]", Vr = "[object ArrayBuffer]", kr = "[object DataView]", en = "[object Float32Array]", rn = "[object Float64Array]", nn = "[object Int8Array]", tn = "[object Int16Array]", an = "[object Int32Array]", on = "[object Uint8Array]", sn = "[object Uint8ClampedArray]", un = "[object Uint16Array]", ln = "[object Uint32Array]", l = {};
l[ne] = l[Gr] = l[Vr] = l[kr] = l[Rr] = l[Kr] = l[en] = l[rn] = l[nn] = l[tn] = l[an] = l[Hr] = l[Wr] = l[ae] = l[Xr] = l[Jr] = l[Qr] = l[Zr] = l[on] = l[sn] = l[un] = l[ln] = !0;
l[qr] = l[te] = l[zr] = !1;
function w(e, r, n, t, a, o) {
  var u;
  if (n && (u = a ? n(e, t, a, o) : n(e)), u !== void 0)
    return u;
  if (!P(e))
    return e;
  var i = Se(e);
  if (i)
    u = ur(e);
  else {
    var f = A(e), p = f == te || f == Yr;
    if (we(e))
      return tr(e);
    if (f == ae || f == ne || p && !a)
      u = {};
    else {
      if (!l[f])
        return a ? e : {};
      u = Nr(e, f);
    }
  }
  o || (o = new Pe());
  var m = o.get(e);
  if (m)
    return m;
  o.set(e, u), Dr(e) ? e.forEach(function(v) {
    u.add(w(v, r, n, v, e, o));
  }) : Fr(e) && e.forEach(function(v, s) {
    u.set(s, w(v, r, n, s, e, o));
  });
  var C = _, g = i ? void 0 : C(e);
  return Ue(g || e, function(v, s) {
    g && (s = v, v = e[s]), I(u, s, w(v, r, n, s, e, o));
  }), u;
}
function cn(e, r) {
  return x(r, function(n) {
    return [n, e[n]];
  });
}
function fn(e) {
  var r = -1, n = Array(e.size);
  return e.forEach(function(t) {
    n[++r] = [t, t];
  }), n;
}
var gn = "[object Map]", vn = "[object Set]";
function yn(e) {
  return function(r) {
    var n = A(r);
    return n == gn ? Ae(r) : n == vn ? fn(r) : cn(r, e(r));
  };
}
var pn = yn(Oe);
function mn(e, r) {
  return r.length < 2 ? e : Q(e, $e(r, 0, -1));
}
function bn(e) {
  return e === void 0;
}
var dn = "Expected a function";
function hn(e) {
  if (typeof e != "function")
    throw new TypeError(dn);
  return function() {
    var r = arguments;
    switch (r.length) {
      case 0:
        return !e.call(this);
      case 1:
        return !e.call(this, r[0]);
      case 2:
        return !e.call(this, r[0], r[1]);
      case 3:
        return !e.call(this, r[0], r[1], r[2]);
    }
    return !e.apply(this, r);
  };
}
var Tn = Object.prototype, wn = Tn.hasOwnProperty;
function Pn(e, r) {
  r = O(r, e);
  var n = -1, t = r.length;
  if (!t)
    return !0;
  for (var a = e == null || typeof e != "object" && typeof e != "function"; ++n < t; ) {
    var o = r[n];
    if (typeof o == "string") {
      if (o === "__proto__" && !wn.call(e, "__proto__"))
        return !1;
      if (o === "constructor" && n + 1 < t && typeof r[n + 1] == "string" && r[n + 1] === "prototype") {
        if (a && n === 0)
          continue;
        return !1;
      }
    }
  }
  var u = mn(e, r);
  return u == null || delete u[Z(je(r))];
}
function Sn(e) {
  return rr(e) ? void 0 : e;
}
var An = 1, On = 2, $n = 4, jn = Qe(function(e, r) {
  var n = {};
  if (e == null)
    return n;
  var t = !1;
  r = x(r, function(o) {
    return o = O(o, e), t || (t = o.length > 1), o;
  }), Re(e, _(e), n), t && (n = w(n, An | On | $n, Sn));
  for (var a = r.length; a--; )
    Pn(n, r[a]);
  return n;
});
function xn(e, r, n, t) {
  if (!P(e))
    return e;
  r = O(r, e);
  for (var a = -1, o = r.length, u = o - 1, i = e; i != null && ++a < o; ) {
    var f = Z(r[a]), p = n;
    if (f === "__proto__" || f === "constructor" || f === "prototype")
      return e;
    if (a != u) {
      var m = i[f];
      p = void 0, p === void 0 && (p = P(m) ? m : xe(r[a + 1]) ? [] : {});
    }
    I(i, f, p), i = i[f];
  }
  return e;
}
function In(e, r, n) {
  for (var t = -1, a = r.length, o = {}; ++t < a; ) {
    var u = r[t], i = Q(e, u);
    n(i, u) && xn(o, O(u, e), i);
  }
  return o;
}
function _n(e, r) {
  if (e == null)
    return {};
  var n = x(_(e), function(t) {
    return [t];
  });
  return r = z(r), In(e, n, function(t, a) {
    return r(t, a[0]);
  });
}
function Bn(e, r) {
  return _n(e, hn(z(r)));
}
const Cn = oe(2);
oe(3);
function oe(e) {
  if (typeof e != "number" || Number.isNaN(e) || e < 1 || e === Number.POSITIVE_INFINITY)
    throw new Error("`" + e + "` is not a valid argument for `n-gram`");
  return r;
  function r(n) {
    const t = [];
    if (n == null)
      return t;
    const a = typeof n.slice == "function" ? n : String(n);
    let o = a.length - e + 1;
    if (o < 1)
      return t;
    for (; o--; )
      t[o] = a.slice(o, o + e);
    return t;
  }
}
function Y(e, r) {
  const n = H(e), t = H(r);
  let a = -1, o = 0;
  for (; ++a < n.length; ) {
    const u = n[a];
    let i = -1;
    for (; ++i < t.length; ) {
      const f = t[i];
      if (u === f) {
        o++, t[i] = "";
        break;
      }
    }
  }
  return 2 * o / (n.length + t.length);
}
function H(e) {
  if (Array.isArray(e))
    return e.map((n) => W(n));
  const r = W(e);
  return r.length === 1 ? [r] : Cn(r);
}
function W(e) {
  return String(e).toLowerCase();
}
const Nn = (e, r, n) => {
  if (typeof r == "function") {
    const t = r(e);
    return t == null ? n ? t : "" : String(t);
  } else
    return typeof e == "object" && e !== null ? String([V(e, r) || ""].flat(1 / 0).join(" ")) || String(Ie(e, r) || "") : String(e ?? "");
}, Fn = (e, r, n) => {
  if (typeof r == "function") {
    const t = r(e);
    return t == null ? n ? t : "" : !!t;
  } else
    return typeof e == "object" && e !== null ? !!V(e, r) : !!e;
};
function Ln(e, {
  query: r,
  getters: n,
  options: t
} = {}) {
  const a = se(r || ""), o = h(() => T(e) ?? []), u = h(() => T(n) ?? [""]), i = h(() => ({
    caseSensitive: !1,
    phraseSearch: !1,
    relevanceSearch: !1,
    relevancePolicy: "max",
    threshold: Math.min(...[T(t)?.relevancePolicy ?? "0"].flat().filter(Boolean).map(Number)) || 0.5,
    sortBy: "default",
    limit: 1 / 0,
    strict: !1,
    segmentPattern: /-|_|\t|\v|\r|\\/gm,
    ...Bn(T(t), bn)
  })), f = h(() => {
    if (a.value) {
      const g = (Array.isArray(o.value) ? new F(o.value.map((s, c) => [c, s])) : new F(o.value)).map((s, c) => [
        c,
        {
          data: s,
          values: u.value.map((b) => Nn(s, b, !0))
        }
      ]).map(({ data: s, values: c }, b) => [
        b,
        {
          data: s,
          matched: c.filter((y) => y != null).map((y) => m(y)),
          relevance: c.filter((y) => y != null).map((y) => Y(y, a.value)).reduce((y, d) => y + d >= i.value.threshold ? d : 0, 0)
        }
      ]).filter(({ matched: s }) => i.value.relevanceSearch || s.some(Boolean)).map(({ data: s, matched: c, relevance: b }, y) => [
        y,
        {
          data: s,
          weight: i.value.relevanceSearch ? typeof i.value.relevancePolicy == "string" ? i.value.relevancePolicy === "average" ? c.map(Number).reduce((d, $) => d + $, 0) / Math.max(c.length, 1) : Math[i.value.relevancePolicy](...c.map(Number)) : c.map(Number).reduce(
            (d, $, ie) => d + $ * (i.value.relevancePolicy[ie] ?? 0),
            0
          ) : c.map(Number).join(""),
          relevance: b
        }
      ]).filter(
        ({ weight: s }) => i.value.relevanceSearch ? (Number(s) || 0) >= i.value.threshold : !0
      ), v = (i.value.sortBy === "remain" ? Array.from(g) : i.value.sortBy === "relevance" ? Array.from(g).sort(([, s], [, c]) => c.relevance - s.relevance) : Array.from(g).sort(
        ([, s], [, c]) => typeof c.weight == "number" ? c.weight - (Number(s.weight) || 0) : c.weight.localeCompare(String(s.weight))
      )).filter((s, c) => c < i.value.limit);
      return Array.isArray(o.value) ? v.map(([, { data: s }]) => s) : new Map(v.map(([s, { data: c }]) => [s, c]));
    } else
      return o.value;
  }), p = (g) => (i.value?.caseSensitive ? g : g.toLocaleLowerCase()).trim(), m = (g) => {
    if (i.value.phraseSearch) {
      const v = p(a.value).split(" "), s = [
        p(g),
        ...p(g).replace(i.value.segmentPattern, " ").split(" ")
      ];
      return v[i.value.strict ? "every" : "some"](
        (c) => s.some((b) => b.includes(c))
      );
    } else return i.value.relevanceSearch ? Y(g, a.value) : p(g).includes(p(a.value));
  };
  return {
    query: a,
    result: f,
    reset: () => {
      a.value = "";
    },
    search: m
  };
}
const Un = (e, r) => {
  if (r) {
    const n = pn(jn(e, "valid")).find(([t, a]) => a && r[t])?.[0];
    return n ? r[n] ?? null : null;
  }
  return null;
};
export {
  Fn as a,
  In as b,
  jn as c,
  Qe as f,
  Ke as o,
  Un as p,
  Le as s,
  pn as t,
  Ln as u,
  Nn as v
};
//# sourceMappingURL=validation-Du82I0HT.js.map
