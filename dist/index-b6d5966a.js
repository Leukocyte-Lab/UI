import { shallowRef as c, triggerRef as l, computed as i, getCurrentInstance as m, inject as d } from "vue";
const p = (t) => {
  const e = c(t), n = () => e.value;
  return n.set = (o) => {
    e.value = o;
  }, n.update = (o) => {
    e.value = o(e.value);
  }, n.mutate = (o) => {
    o(e.value), l(e);
  }, n;
}, $ = (t) => {
  const e = i(t);
  return () => e.value;
}, v = () => {
  var e;
  const t = m();
  return {
    app: (e = t == null ? void 0 : t.appContext) == null ? void 0 : e.app
  };
};
function f(t, e, n) {
  return (...o) => {
    var u, a;
    let s = d(t);
    if (s)
      return s;
    const { app: r } = v();
    return n ? s = n : s = e(...o), r ? r.provide(t, s) : (a = (u = o == null ? void 0 : o[0]) == null ? void 0 : u.app) == null || a.provide(t, s), s;
  };
}
const I = Symbol("I18n"), x = () => {
  const t = p(Intl.DateTimeFormat().resolvedOptions().locale), e = p(Intl.DateTimeFormat().resolvedOptions().timeZone);
  return {
    language: t,
    timeZone: e
  };
}, w = f(I, x);
export {
  $ as c,
  p as s,
  w as u
};
//# sourceMappingURL=index-b6d5966a.js.map
