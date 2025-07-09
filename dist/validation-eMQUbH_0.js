import { toRef as pe, computed as A, toValue as S } from "vue";
import { l as T, m as M, n as me, o as be, h as k, q as ee, r as he, v as de, w as Te, x as we, y as j, z as Ae, A as C, B as Se, C as re, D as Oe, E as Pe, F as $e, G as U, I as G, J as $, K as P, L as ne, O as xe, P as Ie, i as je, Q as Ce, R as E, T as Ee, V as te, W as Ne, X as x, Y as ae, Z as Le, _ as Be, g as oe, s as ie, p as _e, M as D } from "./uuid-D2x-G5RK.js";
var R = Object.create, Fe = /* @__PURE__ */ function() {
  function e() {
  }
  return function(r) {
    if (!T(r))
      return {};
    if (R)
      return R(r);
    e.prototype = r;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
function Me(e, r, n) {
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
function Ue(e, r) {
  var n = -1, t = e.length;
  for (r || (r = Array(t)); ++n < t; )
    r[n] = e[n];
  return r;
}
var Ge = 800, De = 16, Re = Date.now;
function Ke(e) {
  var r = 0, n = 0;
  return function() {
    var t = Re(), a = De - (t - n);
    if (n = t, a > 0) {
      if (++r >= Ge)
        return arguments[0];
    } else
      r = 0;
    return e.apply(void 0, arguments);
  };
}
function qe(e) {
  return function() {
    return e;
  };
}
var Ye = M ? function(e, r) {
  return M(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: qe(r),
    writable: !0
  });
} : me, He = Ke(Ye);
function We(e, r) {
  for (var n = -1, t = e == null ? 0 : e.length; ++n < t && r(e[n], n, e) !== !1; )
    ;
  return e;
}
var Xe = Object.prototype, Je = Xe.hasOwnProperty;
function N(e, r, n) {
  var t = e[r];
  (!(Je.call(e, r) && be(t, n)) || n === void 0 && !(r in e)) && k(e, r, n);
}
function w(e, r, n, t) {
  var a = !n;
  n || (n = {});
  for (var i = -1, s = r.length; ++i < s; ) {
    var o = r[i], g = void 0;
    g === void 0 && (g = e[o]), a ? k(n, o, g) : N(n, o, g);
  }
  return n;
}
var K = Math.max;
function Qe(e, r, n) {
  return r = K(r === void 0 ? e.length - 1 : r, 0), function() {
    for (var t = arguments, a = -1, i = K(t.length - r, 0), s = Array(i); ++a < i; )
      s[a] = t[r + a];
    a = -1;
    for (var o = Array(r + 1); ++a < r; )
      o[a] = t[a];
    return o[r] = n(s), Me(e, this, o);
  };
}
function Ze(e) {
  var r = [];
  if (e != null)
    for (var n in Object(e))
      r.push(n);
  return r;
}
var ze = Object.prototype, Ve = ze.hasOwnProperty;
function ke(e) {
  if (!T(e))
    return Ze(e);
  var r = ee(e), n = [];
  for (var t in e)
    t == "constructor" && (r || !Ve.call(e, t)) || n.push(t);
  return n;
}
function L(e) {
  return he(e) ? de(e, !0) : ke(e);
}
function er(e) {
  var r = e == null ? 0 : e.length;
  return r ? Te(e) : [];
}
function rr(e) {
  return He(Qe(e, void 0, er), e + "");
}
var B = we(Object.getPrototypeOf, Object), nr = "[object Object]", tr = Function.prototype, ar = Object.prototype, se = tr.toString, or = ar.hasOwnProperty, ir = se.call(Object);
function sr(e) {
  if (!j(e) || Ae(e) != nr)
    return !1;
  var r = B(e);
  if (r === null)
    return !0;
  var n = or.call(r, "constructor") && r.constructor;
  return typeof n == "function" && n instanceof n && se.call(n) == ir;
}
function ur(e, r) {
  return e && w(r, C(r), e);
}
function lr(e, r) {
  return e && w(r, L(r), e);
}
var ue = typeof exports == "object" && exports && !exports.nodeType && exports, q = ue && typeof module == "object" && module && !module.nodeType && module, cr = q && q.exports === ue, Y = cr ? Se.Buffer : void 0, H = Y ? Y.allocUnsafe : void 0;
function fr(e, r) {
  if (r)
    return e.slice();
  var n = e.length, t = H ? H(n) : new e.constructor(n);
  return e.copy(t), t;
}
function gr(e, r) {
  return w(e, re(e), r);
}
var yr = Object.getOwnPropertySymbols, le = yr ? function(e) {
  for (var r = []; e; )
    Pe(r, re(e)), e = B(e);
  return r;
} : Oe;
function vr(e, r) {
  return w(e, le(e), r);
}
function _(e) {
  return $e(e, L, le);
}
var pr = Object.prototype, mr = pr.hasOwnProperty;
function br(e) {
  var r = e.length, n = new e.constructor(r);
  return r && typeof e[0] == "string" && mr.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
function F(e) {
  var r = new e.constructor(e.byteLength);
  return new U(r).set(new U(e)), r;
}
function hr(e, r) {
  var n = r ? F(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var dr = /\w*$/;
function Tr(e) {
  var r = new e.constructor(e.source, dr.exec(e));
  return r.lastIndex = e.lastIndex, r;
}
var W = G ? G.prototype : void 0, X = W ? W.valueOf : void 0;
function wr(e) {
  return X ? Object(X.call(e)) : {};
}
function Ar(e, r) {
  var n = r ? F(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var Sr = "[object Boolean]", Or = "[object Date]", Pr = "[object Map]", $r = "[object Number]", xr = "[object RegExp]", Ir = "[object Set]", jr = "[object String]", Cr = "[object Symbol]", Er = "[object ArrayBuffer]", Nr = "[object DataView]", Lr = "[object Float32Array]", Br = "[object Float64Array]", _r = "[object Int8Array]", Fr = "[object Int16Array]", Mr = "[object Int32Array]", Ur = "[object Uint8Array]", Gr = "[object Uint8ClampedArray]", Dr = "[object Uint16Array]", Rr = "[object Uint32Array]";
function Kr(e, r, n) {
  var t = e.constructor;
  switch (r) {
    case Er:
      return F(e);
    case Sr:
    case Or:
      return new t(+e);
    case Nr:
      return hr(e, n);
    case Lr:
    case Br:
    case _r:
    case Fr:
    case Mr:
    case Ur:
    case Gr:
    case Dr:
    case Rr:
      return Ar(e, n);
    case Pr:
      return new t();
    case $r:
    case jr:
      return new t(e);
    case xr:
      return Tr(e);
    case Ir:
      return new t();
    case Cr:
      return wr(e);
  }
}
function qr(e) {
  return typeof e.constructor == "function" && !ee(e) ? Fe(B(e)) : {};
}
var Yr = "[object Map]";
function Hr(e) {
  return j(e) && $(e) == Yr;
}
var J = P && P.isMap, Wr = J ? ne(J) : Hr, Xr = "[object Set]";
function Jr(e) {
  return j(e) && $(e) == Xr;
}
var Q = P && P.isSet, Qr = Q ? ne(Q) : Jr, Zr = 1, zr = 2, Vr = 4, ce = "[object Arguments]", kr = "[object Array]", en = "[object Boolean]", rn = "[object Date]", nn = "[object Error]", fe = "[object Function]", tn = "[object GeneratorFunction]", an = "[object Map]", on = "[object Number]", ge = "[object Object]", sn = "[object RegExp]", un = "[object Set]", ln = "[object String]", cn = "[object Symbol]", fn = "[object WeakMap]", gn = "[object ArrayBuffer]", yn = "[object DataView]", vn = "[object Float32Array]", pn = "[object Float64Array]", mn = "[object Int8Array]", bn = "[object Int16Array]", hn = "[object Int32Array]", dn = "[object Uint8Array]", Tn = "[object Uint8ClampedArray]", wn = "[object Uint16Array]", An = "[object Uint32Array]", c = {};
c[ce] = c[kr] = c[gn] = c[yn] = c[en] = c[rn] = c[vn] = c[pn] = c[mn] = c[bn] = c[hn] = c[an] = c[on] = c[ge] = c[sn] = c[un] = c[ln] = c[cn] = c[dn] = c[Tn] = c[wn] = c[An] = !0;
c[nn] = c[fe] = c[fn] = !1;
function O(e, r, n, t, a, i) {
  var s, o = r & Zr, g = r & zr, p = r & Vr;
  if (n && (s = a ? n(e, t, a, i) : n(e)), s !== void 0)
    return s;
  if (!T(e))
    return e;
  var b = je(e);
  if (b) {
    if (s = br(e), !o)
      return Ue(e, s);
  } else {
    var h = $(e), y = h == fe || h == tn;
    if (xe(e))
      return fr(e, o);
    if (h == ge || h == ce || y && !a) {
      if (s = g || y ? {} : qr(e), !o)
        return g ? vr(e, lr(s, e)) : gr(e, ur(s, e));
    } else {
      if (!c[h])
        return a ? e : {};
      s = Kr(e, h, o);
    }
  }
  i || (i = new Ie());
  var m = i.get(e);
  if (m)
    return m;
  i.set(e, s), Qr(e) ? e.forEach(function(v) {
    s.add(O(v, r, n, v, e, i));
  }) : Wr(e) && e.forEach(function(v, f) {
    s.set(f, O(v, r, n, f, e, i));
  });
  var l = p ? g ? _ : Ce : g ? L : C, u = b ? void 0 : l(e);
  return We(u || e, function(v, f) {
    u && (f = v, v = e[f]), N(s, f, O(v, r, n, f, e, i));
  }), s;
}
function Sn(e, r) {
  return E(r, function(n) {
    return [n, e[n]];
  });
}
function On(e) {
  var r = -1, n = Array(e.size);
  return e.forEach(function(t) {
    n[++r] = [t, t];
  }), n;
}
var Pn = "[object Map]", $n = "[object Set]";
function xn(e) {
  return function(r) {
    var n = $(r);
    return n == Pn ? Ee(r) : n == $n ? On(r) : Sn(r, e(r));
  };
}
var In = xn(C);
function jn(e, r) {
  return r.length < 2 ? e : te(e, Ne(r, 0, -1));
}
function Cn(e) {
  return e === void 0;
}
var En = "Expected a function";
function Nn(e) {
  if (typeof e != "function")
    throw new TypeError(En);
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
function Ln(e, r) {
  return r = x(r, e), e = jn(e, r), e == null || delete e[ae(Le(r))];
}
function Bn(e) {
  return sr(e) ? void 0 : e;
}
var _n = 1, Fn = 2, Mn = 4, Un = rr(function(e, r) {
  var n = {};
  if (e == null)
    return n;
  var t = !1;
  r = E(r, function(i) {
    return i = x(i, e), t || (t = i.length > 1), i;
  }), w(e, _(e), n), t && (n = O(n, _n | Fn | Mn, Bn));
  for (var a = r.length; a--; )
    Ln(n, r[a]);
  return n;
});
function Gn(e, r, n, t) {
  if (!T(e))
    return e;
  r = x(r, e);
  for (var a = -1, i = r.length, s = i - 1, o = e; o != null && ++a < i; ) {
    var g = ae(r[a]), p = n;
    if (g === "__proto__" || g === "constructor" || g === "prototype")
      return e;
    if (a != s) {
      var b = o[g];
      p = void 0, p === void 0 && (p = T(b) ? b : Be(r[a + 1]) ? [] : {});
    }
    N(o, g, p), o = o[g];
  }
  return e;
}
function Dn(e, r, n) {
  for (var t = -1, a = r.length, i = {}; ++t < a; ) {
    var s = r[t], o = te(e, s);
    n(o, s) && Gn(i, x(s, e), o);
  }
  return i;
}
function Rn(e, r) {
  if (e == null)
    return {};
  var n = E(_(e), function(t) {
    return [t];
  });
  return r = oe(r), Dn(e, n, function(t, a) {
    return r(t, a[0]);
  });
}
function Kn(e, r) {
  return Rn(e, Nn(oe(r)));
}
const qn = ye(2);
ye(3);
function ye(e) {
  if (typeof e != "number" || Number.isNaN(e) || e < 1 || e === Number.POSITIVE_INFINITY)
    throw new Error("`" + e + "` is not a valid argument for `n-gram`");
  return r;
  function r(n) {
    const t = [];
    if (n == null)
      return t;
    const a = typeof n.slice == "function" ? n : String(n);
    let i = a.length - e + 1;
    if (i < 1)
      return t;
    for (; i--; )
      t[i] = a.slice(i, i + e);
    return t;
  }
}
function Z(e, r) {
  const n = z(e), t = z(r);
  let a = -1, i = 0;
  for (; ++a < n.length; ) {
    const s = n[a];
    let o = -1;
    for (; ++o < t.length; ) {
      const g = t[o];
      if (s === g) {
        i++, t[o] = "";
        break;
      }
    }
  }
  return 2 * i / (n.length + t.length);
}
function z(e) {
  if (Array.isArray(e))
    return e.map((n) => V(n));
  const r = V(e);
  return r.length === 1 ? [r] : qn(r);
}
function V(e) {
  return String(e).toLowerCase();
}
const Yn = (e, r, n) => {
  if (typeof r == "function") {
    const t = r(e);
    return t == null ? n ? t : "" : String(t);
  } else
    return typeof e == "object" && e !== null ? String([ie(e, r) || ""].flat(1 / 0).join(" ")) || String(_e(e, r) || "") : String(e ?? "");
}, Xn = (e, r, n) => {
  if (typeof r == "function") {
    const t = r(e);
    return t == null ? n ? t : "" : !!t;
  } else
    return typeof e == "object" && e !== null ? !!ie(e, r) : !!e;
};
function Jn(e, {
  query: r,
  getters: n,
  options: t
} = {}) {
  const a = pe(r || ""), i = A(() => S(e) ?? []), s = A(() => S(n) ?? [""]), o = A(() => {
    var y;
    return {
      caseSensitive: !1,
      phraseSearch: !1,
      relevanceSearch: !1,
      relevancePolicy: "max",
      threshold: Math.min(...[((y = S(t)) == null ? void 0 : y.relevancePolicy) ?? "0"].flat().filter(Boolean).map(Number)) || 0.5,
      sortBy: "default",
      limit: 1 / 0,
      strict: !1,
      segmentPattern: /-|_|\t|\v|\r|\\/gm,
      ...Kn(S(t), Cn)
    };
  }), g = A(() => {
    if (a.value) {
      const y = (Array.isArray(i.value) ? new D(i.value.map((l, u) => [u, l])) : new D(i.value)).map((l, u) => [
        u,
        {
          data: l,
          values: s.value.map((v) => Yn(l, v, !0))
        }
      ]).map(({ data: l, values: u }, v) => [
        v,
        {
          data: l,
          matched: u.filter((f) => f != null).map((f) => b(f)),
          relevance: u.filter((f) => f != null).map((f) => Z(f, a.value)).reduce((f, d) => f + d >= o.value.threshold ? d : 0, 0)
        }
      ]).filter(({ matched: l }) => o.value.relevanceSearch || l.some(Boolean)).map(({ data: l, matched: u, relevance: v }, f) => [
        f,
        {
          data: l,
          weight: o.value.relevanceSearch ? typeof o.value.relevancePolicy == "string" ? o.value.relevancePolicy === "average" ? u.map(Number).reduce((d, I) => d + I, 0) / Math.max(u.length, 1) : Math[o.value.relevancePolicy](...u.map(Number)) : u.map(Number).reduce(
            (d, I, ve) => d + I * (o.value.relevancePolicy[ve] ?? 0),
            0
          ) : u.map(Number).join(""),
          relevance: v
        }
      ]).filter(
        ({ weight: l }) => o.value.relevanceSearch ? (Number(l) || 0) >= o.value.threshold : !0
      ), m = (o.value.sortBy === "remain" ? Array.from(y) : o.value.sortBy === "relevance" ? Array.from(y).sort(([, l], [, u]) => u.relevance - l.relevance) : Array.from(y).sort(
        ([, l], [, u]) => typeof u.weight == "number" ? u.weight - (Number(l.weight) || 0) : u.weight.localeCompare(String(l.weight))
      )).filter((l, u) => u < o.value.limit);
      return Array.isArray(i.value) ? m.map(([, { data: l }]) => l) : new Map(m.map(([l, { data: u }]) => [l, u]));
    } else
      return i.value;
  }), p = (y) => {
    var m;
    return ((m = o.value) != null && m.caseSensitive ? y : y.toLocaleLowerCase()).trim();
  }, b = (y) => {
    if (o.value.phraseSearch) {
      const m = p(a.value).split(" "), l = [
        p(y),
        ...p(y).replace(o.value.segmentPattern, " ").split(" ")
      ];
      return m[o.value.strict ? "every" : "some"](
        (u) => l.some((v) => v.includes(u))
      );
    } else return o.value.relevanceSearch ? Z(y, a.value) : p(y).includes(p(a.value));
  };
  return {
    query: a,
    result: g,
    reset: () => {
      a.value = "";
    },
    search: b
  };
}
const Qn = (e, r) => {
  var n;
  if (r) {
    const t = (n = In(Un(e, "valid")).find(([a, i]) => i && r[a])) == null ? void 0 : n[0];
    return t ? r[t] ?? null : null;
  }
  return null;
};
export {
  Un as a,
  Dn as b,
  Xn as c,
  rr as f,
  Qe as o,
  Qn as p,
  He as s,
  In as t,
  Jn as u,
  Yn as v
};
//# sourceMappingURL=validation-eMQUbH_0.js.map
