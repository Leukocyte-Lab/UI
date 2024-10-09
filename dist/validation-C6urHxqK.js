import { k as d, l as P, m as nr, n as er, g as N, o as D, q as tr, r as ar, t as or, v as ir, w as v, x as sr, y as A, z as ur, A as K, B as cr, C as fr, D as lr, E as x, F as C, G as T, I as p, J as R, K as gr, L as br, i as yr, O as pr, P as q, Q as Tr, R as dr, T as vr, V as H, W as Ar, X as Or } from "./uuid-64OgEaoj.js";
var L = Object.create, hr = /* @__PURE__ */ function() {
  function r() {
  }
  return function(n) {
    if (!d(n))
      return {};
    if (L)
      return L(n);
    r.prototype = n;
    var e = new r();
    return r.prototype = void 0, e;
  };
}();
function mr(r, n, e) {
  switch (e.length) {
    case 0:
      return r.call(n);
    case 1:
      return r.call(n, e[0]);
    case 2:
      return r.call(n, e[0], e[1]);
    case 3:
      return r.call(n, e[0], e[1], e[2]);
  }
  return r.apply(n, e);
}
function wr(r, n) {
  var e = -1, t = r.length;
  for (n || (n = Array(t)); ++e < t; )
    n[e] = r[e];
  return n;
}
var jr = 800, $r = 16, Sr = Date.now;
function Pr(r) {
  var n = 0, e = 0;
  return function() {
    var t = Sr(), o = $r - (t - e);
    if (e = t, o > 0) {
      if (++n >= jr)
        return arguments[0];
    } else
      n = 0;
    return r.apply(void 0, arguments);
  };
}
function xr(r) {
  return function() {
    return r;
  };
}
var Cr = P ? function(r, n) {
  return P(r, "toString", {
    configurable: !0,
    enumerable: !1,
    value: xr(n),
    writable: !0
  });
} : nr, Lr = Pr(Cr);
function Er(r, n) {
  for (var e = -1, t = r == null ? 0 : r.length; ++e < t && n(r[e], e, r) !== !1; )
    ;
  return r;
}
var Ir = Object.prototype, Fr = Ir.hasOwnProperty;
function W(r, n, e) {
  var t = r[n];
  (!(Fr.call(r, n) && er(t, e)) || e === void 0 && !(n in r)) && N(r, n, e);
}
function b(r, n, e, t) {
  var o = !e;
  e || (e = {});
  for (var i = -1, s = n.length; ++i < s; ) {
    var u = n[i], c = void 0;
    c === void 0 && (c = r[u]), o ? N(e, u, c) : W(e, u, c);
  }
  return e;
}
var E = Math.max;
function Mr(r, n, e) {
  return n = E(n === void 0 ? r.length - 1 : n, 0), function() {
    for (var t = arguments, o = -1, i = E(t.length - n, 0), s = Array(i); ++o < i; )
      s[o] = t[n + o];
    o = -1;
    for (var u = Array(n + 1); ++o < n; )
      u[o] = t[o];
    return u[n] = e(s), mr(r, this, u);
  };
}
function Ur(r) {
  var n = [];
  if (r != null)
    for (var e in Object(r))
      n.push(e);
  return n;
}
var _r = Object.prototype, Br = _r.hasOwnProperty;
function Gr(r) {
  if (!d(r))
    return Ur(r);
  var n = D(r), e = [];
  for (var t in r)
    t == "constructor" && (n || !Br.call(r, t)) || e.push(t);
  return e;
}
function O(r) {
  return tr(r) ? ar(r, !0) : Gr(r);
}
function Nr(r) {
  var n = r == null ? 0 : r.length;
  return n ? or(r) : [];
}
function Dr(r) {
  return Lr(Mr(r, void 0, Nr), r + "");
}
var h = ir(Object.getPrototypeOf, Object), Kr = "[object Object]", Rr = Function.prototype, qr = Object.prototype, Y = Rr.toString, Hr = qr.hasOwnProperty, Wr = Y.call(Object);
function Yr(r) {
  if (!v(r) || sr(r) != Kr)
    return !1;
  var n = h(r);
  if (n === null)
    return !0;
  var e = Hr.call(n, "constructor") && n.constructor;
  return typeof e == "function" && e instanceof e && Y.call(e) == Wr;
}
function Jr(r, n) {
  return r && b(n, A(n), r);
}
function Qr(r, n) {
  return r && b(n, O(n), r);
}
var J = typeof exports == "object" && exports && !exports.nodeType && exports, I = J && typeof module == "object" && module && !module.nodeType && module, Xr = I && I.exports === J, F = Xr ? ur.Buffer : void 0, M = F ? F.allocUnsafe : void 0;
function Vr(r, n) {
  if (n)
    return r.slice();
  var e = r.length, t = M ? M(e) : new r.constructor(e);
  return r.copy(t), t;
}
function Zr(r, n) {
  return b(r, K(r), n);
}
var zr = Object.getOwnPropertySymbols, Q = zr ? function(r) {
  for (var n = []; r; )
    fr(n, K(r)), r = h(r);
  return n;
} : cr;
function kr(r, n) {
  return b(r, Q(r), n);
}
function X(r) {
  return lr(r, O, Q);
}
var rn = Object.prototype, nn = rn.hasOwnProperty;
function en(r) {
  var n = r.length, e = new r.constructor(n);
  return n && typeof r[0] == "string" && nn.call(r, "index") && (e.index = r.index, e.input = r.input), e;
}
function m(r) {
  var n = new r.constructor(r.byteLength);
  return new x(n).set(new x(r)), n;
}
function tn(r, n) {
  var e = n ? m(r.buffer) : r.buffer;
  return new r.constructor(e, r.byteOffset, r.byteLength);
}
var an = /\w*$/;
function on(r) {
  var n = new r.constructor(r.source, an.exec(r));
  return n.lastIndex = r.lastIndex, n;
}
var U = C ? C.prototype : void 0, _ = U ? U.valueOf : void 0;
function sn(r) {
  return _ ? Object(_.call(r)) : {};
}
function un(r, n) {
  var e = n ? m(r.buffer) : r.buffer;
  return new r.constructor(e, r.byteOffset, r.length);
}
var cn = "[object Boolean]", fn = "[object Date]", ln = "[object Map]", gn = "[object Number]", bn = "[object RegExp]", yn = "[object Set]", pn = "[object String]", Tn = "[object Symbol]", dn = "[object ArrayBuffer]", vn = "[object DataView]", An = "[object Float32Array]", On = "[object Float64Array]", hn = "[object Int8Array]", mn = "[object Int16Array]", wn = "[object Int32Array]", jn = "[object Uint8Array]", $n = "[object Uint8ClampedArray]", Sn = "[object Uint16Array]", Pn = "[object Uint32Array]";
function xn(r, n, e) {
  var t = r.constructor;
  switch (n) {
    case dn:
      return m(r);
    case cn:
    case fn:
      return new t(+r);
    case vn:
      return tn(r, e);
    case An:
    case On:
    case hn:
    case mn:
    case wn:
    case jn:
    case $n:
    case Sn:
    case Pn:
      return un(r, e);
    case ln:
      return new t();
    case gn:
    case pn:
      return new t(r);
    case bn:
      return on(r);
    case yn:
      return new t();
    case Tn:
      return sn(r);
  }
}
function Cn(r) {
  return typeof r.constructor == "function" && !D(r) ? hr(h(r)) : {};
}
var Ln = "[object Map]";
function En(r) {
  return v(r) && T(r) == Ln;
}
var B = p && p.isMap, In = B ? R(B) : En, Fn = "[object Set]";
function Mn(r) {
  return v(r) && T(r) == Fn;
}
var G = p && p.isSet, Un = G ? R(G) : Mn, _n = 1, Bn = 2, Gn = 4, V = "[object Arguments]", Nn = "[object Array]", Dn = "[object Boolean]", Kn = "[object Date]", Rn = "[object Error]", Z = "[object Function]", qn = "[object GeneratorFunction]", Hn = "[object Map]", Wn = "[object Number]", z = "[object Object]", Yn = "[object RegExp]", Jn = "[object Set]", Qn = "[object String]", Xn = "[object Symbol]", Vn = "[object WeakMap]", Zn = "[object ArrayBuffer]", zn = "[object DataView]", kn = "[object Float32Array]", re = "[object Float64Array]", ne = "[object Int8Array]", ee = "[object Int16Array]", te = "[object Int32Array]", ae = "[object Uint8Array]", oe = "[object Uint8ClampedArray]", ie = "[object Uint16Array]", se = "[object Uint32Array]", a = {};
a[V] = a[Nn] = a[Zn] = a[zn] = a[Dn] = a[Kn] = a[kn] = a[re] = a[ne] = a[ee] = a[te] = a[Hn] = a[Wn] = a[z] = a[Yn] = a[Jn] = a[Qn] = a[Xn] = a[ae] = a[oe] = a[ie] = a[se] = !0;
a[Rn] = a[Z] = a[Vn] = !1;
function y(r, n, e, t, o, i) {
  var s, u = n & _n, c = n & Bn, k = n & Gn;
  if (e && (s = o ? e(r, t, o, i) : e(r)), s !== void 0)
    return s;
  if (!d(r))
    return r;
  var w = yr(r);
  if (w) {
    if (s = en(r), !u)
      return wr(r, s);
  } else {
    var g = T(r), j = g == Z || g == qn;
    if (gr(r))
      return Vr(r, u);
    if (g == z || g == V || j && !o) {
      if (s = c || j ? {} : Cn(r), !u)
        return c ? kr(r, Qr(s, r)) : Zr(r, Jr(s, r));
    } else {
      if (!a[g])
        return o ? r : {};
      s = xn(r, g, u);
    }
  }
  i || (i = new br());
  var $ = i.get(r);
  if ($)
    return $;
  i.set(r, s), Un(r) ? r.forEach(function(f) {
    s.add(y(f, n, e, f, r, i));
  }) : In(r) && r.forEach(function(f, l) {
    s.set(l, y(f, n, e, l, r, i));
  });
  var rr = k ? c ? X : pr : c ? O : A, S = w ? void 0 : rr(r);
  return Er(S || r, function(f, l) {
    S && (l = f, f = r[l]), W(s, l, y(f, n, e, l, r, i));
  }), s;
}
function ue(r, n) {
  return q(n, function(e) {
    return [e, r[e]];
  });
}
function ce(r) {
  var n = -1, e = Array(r.size);
  return r.forEach(function(t) {
    e[++n] = [t, t];
  }), e;
}
var fe = "[object Map]", le = "[object Set]";
function ge(r) {
  return function(n) {
    var e = T(n);
    return e == fe ? Tr(n) : e == le ? ce(n) : ue(n, r(n));
  };
}
var be = ge(A);
function ye(r, n) {
  return n.length < 2 ? r : dr(r, vr(n, 0, -1));
}
function pe(r, n) {
  return n = H(n, r), r = ye(r, n), r == null || delete r[Ar(Or(n))];
}
function Te(r) {
  return Yr(r) ? void 0 : r;
}
var de = 1, ve = 2, Ae = 4, Oe = Dr(function(r, n) {
  var e = {};
  if (r == null)
    return e;
  var t = !1;
  n = q(n, function(i) {
    return i = H(i, r), t || (t = i.length > 1), i;
  }), b(r, X(r), e), t && (e = y(e, de | ve | Ae, Te));
  for (var o = n.length; o--; )
    pe(e, n[o]);
  return e;
});
const me = (r, n) => {
  var e;
  if (n) {
    const t = (e = be(Oe(r, "valid")).find(([o, i]) => i && n[o])) == null ? void 0 : e[0];
    return t ? n[t] ?? null : null;
  }
  return null;
};
export {
  W as a,
  Oe as b,
  Dr as f,
  X as g,
  Mr as o,
  me as p,
  Lr as s,
  be as t
};
//# sourceMappingURL=validation-C6urHxqK.js.map
