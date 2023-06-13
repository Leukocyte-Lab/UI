import { shallowRef as m, triggerRef as f, computed as U } from "vue";
const y = (e) => {
  const t = m(e), u = () => t.value;
  return u.set = (n) => {
    t.value = n;
  }, u.update = (n) => {
    t.value = n(t.value);
  }, u.mutate = (n) => {
    n(t.value), f(t);
  }, u;
}, H = (e) => {
  const t = U(e);
  return () => t.value;
}, P = (e, { debounce: t = 300, flush: u = "pre" } = {}) => {
  const n = y(!1);
  let r;
  return {
    triggered: n,
    onTrigger: (c) => {
      !n() && u === "pre" || u === "sync" ? e == null || e.call({}, c) : (c.preventDefault(), c.stopPropagation()), n.set(!0), globalThis.clearTimeout(r), r = globalThis.setTimeout(() => {
        n.set(!1), (u === "post" || u === "sync") && (e == null || e.call({}, c));
      }, t);
    }
  };
};
function s(e) {
  for (var t = -1, u = e == null ? 0 : e.length, n = {}; ++t < u; ) {
    var r = e[t];
    n[r[0]] = r[1];
  }
  return n;
}
const h = 0.5522847498307935, w = (e, t, u, n = !1) => n ? e[u] - t[u] : Math.abs(e[u] - t[u]), D = (e, t, u = !1) => {
  const n = Object.keys(e).map(
    (r) => w(e, t, r, u)
  );
  return u ? s(
    n.map((r, a) => [Object.keys(e)[a], r])
  ) : Math.pow(
    n.reduce((r, a) => r + Math.pow(a, n.length), 0),
    1 / n.length
  );
}, I = {
  get: (e, t, u) => /^delta/.test(t) ? (n, r, a) => t === "delta" ? D(n, r, a) : Reflect.get(e, t, u) : t === "add" ? (n, r) => s(
    Object.keys(n).map((a) => [a, n[a] + r[a]])
  ) : t === "minus" ? (n, r) => s(
    Object.keys(n).map((a) => [a, n[a] - r[a]])
  ) : Reflect.get(e, t, u)
}, d = new Proxy(Math, {
  get(e, t, u) {
    return t === "ARC_BASE" ? h : t === "Vector" ? new Proxy({}, I) : t === "deg" ? (n) => n * (180 / Math.PI) : t === "rad" ? (n) => n * (Math.PI / 180) : t === "gcd" ? (n, r) => r ? d.gcd(r, n % r) : n : t === "lcm" ? (n, r) => n * r / d.gcd(n, r) : t === "clamp" ? (n, r, a) => Math.min(Math.max(n, r), a) : t === "round" ? (n, r = 0) => Math.round(n * 10 ** r) / 10 ** r : Reflect.get(e, t, u);
  }
}), V = new Proxy(String, {
  get(e, t, u) {
    return t === "toKebabCase" ? (n) => n.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, "-").toLowerCase() : Reflect.get(e, t, u);
  }
});
let i;
const $ = new Uint8Array(16);
function v() {
  if (!i && (i = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !i))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return i($);
}
const o = [];
for (let e = 0; e < 256; ++e)
  o.push((e + 256).toString(16).slice(1));
function R(e, t = 0) {
  return (o[e[t + 0]] + o[e[t + 1]] + o[e[t + 2]] + o[e[t + 3]] + "-" + o[e[t + 4]] + o[e[t + 5]] + "-" + o[e[t + 6]] + o[e[t + 7]] + "-" + o[e[t + 8]] + o[e[t + 9]] + "-" + o[e[t + 10]] + o[e[t + 11]] + o[e[t + 12]] + o[e[t + 13]] + o[e[t + 14]] + o[e[t + 15]]).toLowerCase();
}
const x = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), g = {
  randomUUID: x
};
function M(e, t, u) {
  if (g.randomUUID && !t && !e)
    return g.randomUUID();
  e = e || {};
  const n = e.random || (e.rng || v)();
  if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, t) {
    u = u || 0;
    for (let r = 0; r < 16; ++r)
      t[u + r] = n[r];
    return t;
  }
  return R(n);
}
const S = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i, T = /^[0-9a-f]{12}[0-5][0-9a-f]{3}[089ab][0-9a-f]{3}[0-9a-f]{12}$/i, l = (e, t) => {
  if (e) {
    if (S.test(e) || t)
      return e;
    throw new Error(`Invalid UUID format: ${e}`);
  }
  return M();
}, E = l("00000000-0000-0000-0000-000000000000");
function j(e, t = !1) {
  if (!t && !T.test(e))
    throw new Error(`Invalid HexUUID format: ${e}`);
  return l(
    `${e.slice(0, 8)}-${e.slice(8, 12)}-${e.slice(12, 16)}-${e.slice(
      16,
      20
    )}-${e.slice(20, 32)}`,
    t
  );
}
function C(e, t = !1) {
  return l(e, t).replace(/-/gm, "");
}
export {
  j as H,
  d as M,
  E as N,
  V as S,
  C as U,
  l as a,
  H as c,
  s as f,
  y as s,
  P as u
};
//# sourceMappingURL=uuid-80ab1d9a.js.map
