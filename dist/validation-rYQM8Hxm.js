import { k as d, l as P, m as nr, n as tr, g as N, o as D, q as er, r as ar, t as or, v as ir, w as v, x as sr, y as A, z as ur, A as K, B as cr, C as fr, D as lr, E as x, F as C, G as T, I as p, J as R, K as gr, L as br, i as yr, O as pr, P as q, Q as Tr, R as dr, T as vr, V as H, W as Ar, X as Or } from "./parser-0frWFIqQ.js";
var I = Object.create, hr = /* @__PURE__ */ function() {
  function r() {
  }
  return function(n) {
    if (!d(n))
      return {};
    if (I)
      return I(n);
    r.prototype = n;
    var t = new r();
    return r.prototype = void 0, t;
  };
}();
function mr(r, n, t) {
  switch (t.length) {
    case 0:
      return r.call(n);
    case 1:
      return r.call(n, t[0]);
    case 2:
      return r.call(n, t[0], t[1]);
    case 3:
      return r.call(n, t[0], t[1], t[2]);
  }
  return r.apply(n, t);
}
function $r(r, n) {
  var t = -1, e = r.length;
  for (n || (n = Array(e)); ++t < e; )
    n[t] = r[t];
  return n;
}
var wr = 800, Sr = 16, jr = Date.now;
function Pr(r) {
  var n = 0, t = 0;
  return function() {
    var e = jr(), o = Sr - (e - t);
    if (t = e, o > 0) {
      if (++n >= wr)
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
} : nr;
const Ir = Cr;
var Lr = Pr(Ir);
function Er(r, n) {
  for (var t = -1, e = r == null ? 0 : r.length; ++t < e && n(r[t], t, r) !== !1; )
    ;
  return r;
}
var Fr = Object.prototype, Mr = Fr.hasOwnProperty;
function W(r, n, t) {
  var e = r[n];
  (!(Mr.call(r, n) && tr(e, t)) || t === void 0 && !(n in r)) && N(r, n, t);
}
function b(r, n, t, e) {
  var o = !t;
  t || (t = {});
  for (var i = -1, s = n.length; ++i < s; ) {
    var u = n[i], c = e ? e(t[u], r[u], u, t, r) : void 0;
    c === void 0 && (c = r[u]), o ? N(t, u, c) : W(t, u, c);
  }
  return t;
}
var L = Math.max;
function Ur(r, n, t) {
  return n = L(n === void 0 ? r.length - 1 : n, 0), function() {
    for (var e = arguments, o = -1, i = L(e.length - n, 0), s = Array(i); ++o < i; )
      s[o] = e[n + o];
    o = -1;
    for (var u = Array(n + 1); ++o < n; )
      u[o] = e[o];
    return u[n] = t(s), mr(r, this, u);
  };
}
function _r(r) {
  var n = [];
  if (r != null)
    for (var t in Object(r))
      n.push(t);
  return n;
}
var Br = Object.prototype, Gr = Br.hasOwnProperty;
function Nr(r) {
  if (!d(r))
    return _r(r);
  var n = D(r), t = [];
  for (var e in r)
    e == "constructor" && (n || !Gr.call(r, e)) || t.push(e);
  return t;
}
function O(r) {
  return er(r) ? ar(r, !0) : Nr(r);
}
function Dr(r) {
  var n = r == null ? 0 : r.length;
  return n ? or(r, 1) : [];
}
function Kr(r) {
  return Lr(Ur(r, void 0, Dr), r + "");
}
var h = ir(Object.getPrototypeOf, Object), Rr = "[object Object]", qr = Function.prototype, Hr = Object.prototype, Y = qr.toString, Wr = Hr.hasOwnProperty, Yr = Y.call(Object);
function Jr(r) {
  if (!v(r) || sr(r) != Rr)
    return !1;
  var n = h(r);
  if (n === null)
    return !0;
  var t = Wr.call(n, "constructor") && n.constructor;
  return typeof t == "function" && t instanceof t && Y.call(t) == Yr;
}
function Qr(r, n) {
  return r && b(n, A(n), r);
}
function Xr(r, n) {
  return r && b(n, O(n), r);
}
var J = typeof exports == "object" && exports && !exports.nodeType && exports, E = J && typeof module == "object" && module && !module.nodeType && module, Vr = E && E.exports === J, F = Vr ? ur.Buffer : void 0, M = F ? F.allocUnsafe : void 0;
function Zr(r, n) {
  if (n)
    return r.slice();
  var t = r.length, e = M ? M(t) : new r.constructor(t);
  return r.copy(e), e;
}
function zr(r, n) {
  return b(r, K(r), n);
}
var kr = Object.getOwnPropertySymbols, rn = kr ? function(r) {
  for (var n = []; r; )
    fr(n, K(r)), r = h(r);
  return n;
} : cr;
const Q = rn;
function nn(r, n) {
  return b(r, Q(r), n);
}
function X(r) {
  return lr(r, O, Q);
}
var tn = Object.prototype, en = tn.hasOwnProperty;
function an(r) {
  var n = r.length, t = new r.constructor(n);
  return n && typeof r[0] == "string" && en.call(r, "index") && (t.index = r.index, t.input = r.input), t;
}
function m(r) {
  var n = new r.constructor(r.byteLength);
  return new x(n).set(new x(r)), n;
}
function on(r, n) {
  var t = n ? m(r.buffer) : r.buffer;
  return new r.constructor(t, r.byteOffset, r.byteLength);
}
var sn = /\w*$/;
function un(r) {
  var n = new r.constructor(r.source, sn.exec(r));
  return n.lastIndex = r.lastIndex, n;
}
var U = C ? C.prototype : void 0, _ = U ? U.valueOf : void 0;
function cn(r) {
  return _ ? Object(_.call(r)) : {};
}
function fn(r, n) {
  var t = n ? m(r.buffer) : r.buffer;
  return new r.constructor(t, r.byteOffset, r.length);
}
var ln = "[object Boolean]", gn = "[object Date]", bn = "[object Map]", yn = "[object Number]", pn = "[object RegExp]", Tn = "[object Set]", dn = "[object String]", vn = "[object Symbol]", An = "[object ArrayBuffer]", On = "[object DataView]", hn = "[object Float32Array]", mn = "[object Float64Array]", $n = "[object Int8Array]", wn = "[object Int16Array]", Sn = "[object Int32Array]", jn = "[object Uint8Array]", Pn = "[object Uint8ClampedArray]", xn = "[object Uint16Array]", Cn = "[object Uint32Array]";
function In(r, n, t) {
  var e = r.constructor;
  switch (n) {
    case An:
      return m(r);
    case ln:
    case gn:
      return new e(+r);
    case On:
      return on(r, t);
    case hn:
    case mn:
    case $n:
    case wn:
    case Sn:
    case jn:
    case Pn:
    case xn:
    case Cn:
      return fn(r, t);
    case bn:
      return new e();
    case yn:
    case dn:
      return new e(r);
    case pn:
      return un(r);
    case Tn:
      return new e();
    case vn:
      return cn(r);
  }
}
function Ln(r) {
  return typeof r.constructor == "function" && !D(r) ? hr(h(r)) : {};
}
var En = "[object Map]";
function Fn(r) {
  return v(r) && T(r) == En;
}
var B = p && p.isMap, Mn = B ? R(B) : Fn, Un = "[object Set]";
function _n(r) {
  return v(r) && T(r) == Un;
}
var G = p && p.isSet, Bn = G ? R(G) : _n, Gn = 1, Nn = 2, Dn = 4, V = "[object Arguments]", Kn = "[object Array]", Rn = "[object Boolean]", qn = "[object Date]", Hn = "[object Error]", Z = "[object Function]", Wn = "[object GeneratorFunction]", Yn = "[object Map]", Jn = "[object Number]", z = "[object Object]", Qn = "[object RegExp]", Xn = "[object Set]", Vn = "[object String]", Zn = "[object Symbol]", zn = "[object WeakMap]", kn = "[object ArrayBuffer]", rt = "[object DataView]", nt = "[object Float32Array]", tt = "[object Float64Array]", et = "[object Int8Array]", at = "[object Int16Array]", ot = "[object Int32Array]", it = "[object Uint8Array]", st = "[object Uint8ClampedArray]", ut = "[object Uint16Array]", ct = "[object Uint32Array]", a = {};
a[V] = a[Kn] = a[kn] = a[rt] = a[Rn] = a[qn] = a[nt] = a[tt] = a[et] = a[at] = a[ot] = a[Yn] = a[Jn] = a[z] = a[Qn] = a[Xn] = a[Vn] = a[Zn] = a[it] = a[st] = a[ut] = a[ct] = !0;
a[Hn] = a[Z] = a[zn] = !1;
function y(r, n, t, e, o, i) {
  var s, u = n & Gn, c = n & Nn, k = n & Dn;
  if (t && (s = o ? t(r, e, o, i) : t(r)), s !== void 0)
    return s;
  if (!d(r))
    return r;
  var $ = yr(r);
  if ($) {
    if (s = an(r), !u)
      return $r(r, s);
  } else {
    var g = T(r), w = g == Z || g == Wn;
    if (gr(r))
      return Zr(r, u);
    if (g == z || g == V || w && !o) {
      if (s = c || w ? {} : Ln(r), !u)
        return c ? nn(r, Xr(s, r)) : zr(r, Qr(s, r));
    } else {
      if (!a[g])
        return o ? r : {};
      s = In(r, g, u);
    }
  }
  i || (i = new br());
  var S = i.get(r);
  if (S)
    return S;
  i.set(r, s), Bn(r) ? r.forEach(function(f) {
    s.add(y(f, n, t, f, r, i));
  }) : Mn(r) && r.forEach(function(f, l) {
    s.set(l, y(f, n, t, l, r, i));
  });
  var rr = k ? c ? X : pr : c ? O : A, j = $ ? void 0 : rr(r);
  return Er(j || r, function(f, l) {
    j && (l = f, f = r[l]), W(s, l, y(f, n, t, l, r, i));
  }), s;
}
function ft(r, n) {
  return q(n, function(t) {
    return [t, r[t]];
  });
}
function lt(r) {
  var n = -1, t = Array(r.size);
  return r.forEach(function(e) {
    t[++n] = [e, e];
  }), t;
}
var gt = "[object Map]", bt = "[object Set]";
function yt(r) {
  return function(n) {
    var t = T(n);
    return t == gt ? Tr(n) : t == bt ? lt(n) : ft(n, r(n));
  };
}
var pt = yt(A);
function Tt(r, n) {
  return n.length < 2 ? r : dr(r, vr(n, 0, -1));
}
function dt(r, n) {
  return n = H(n, r), r = Tt(r, n), r == null || delete r[Ar(Or(n))];
}
function vt(r) {
  return Jr(r) ? void 0 : r;
}
var At = 1, Ot = 2, ht = 4, mt = Kr(function(r, n) {
  var t = {};
  if (r == null)
    return t;
  var e = !1;
  n = q(n, function(i) {
    return i = H(i, r), e || (e = i.length > 1), i;
  }), b(r, X(r), t), e && (t = y(t, At | Ot | ht, vt));
  for (var o = n.length; o--; )
    dt(t, n[o]);
  return t;
});
const $t = mt, St = (r, n) => {
  var t;
  if (n) {
    const e = (t = pt($t(r, "valid")).find(([o, i]) => i && n[o])) == null ? void 0 : t[0];
    return e ? n[e] ?? null : null;
  }
  return null;
};
export {
  W as a,
  $t as b,
  Kr as f,
  Ur as o,
  St as p,
  Lr as s,
  pt as t
};
//# sourceMappingURL=validation-rYQM8Hxm.js.map
