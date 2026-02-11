import { b as kt, a as It, c as Rt, g as dt, _ as St, d as Y, u as Pe, B as Ee, e as He, f as _t, h as ae, i as qt, j as Lt, k as Pt, l as Et, m as Ft } from "./ButtonBox-CezsrWZB.js";
import { defineComponent as Z, openBlock as _, createElementBlock as $, Fragment as V, renderSlot as x, createCommentVNode as L, renderList as F, unref as u, useCssVars as Se, createBlock as X, normalizeClass as s, withCtx as E, toDisplayString as N, createTextVNode as zt, computed as A, reactive as Ut, toValue as tt, watch as oe, markRaw as Ke, ref as P, createVNode as O, createElementVNode as f, onMounted as Ae, normalizeStyle as pt, mergeProps as ce, useSlots as $e, useModel as Me, mergeModels as Ve, nextTick as Ie, withDirectives as rt, withKeys as je, createSlots as xt, onUpdated as Wt, Transition as Zt, normalizeProps as lt, guardReactiveProps as at, useTemplateRef as Gt, shallowRef as Yt, triggerRef as ft, onBeforeUpdate as Kt } from "vue";
import { m as Je, z as Xt, v as Qt, $ as Jt, g as el, h as Mt, i as Xe, a0 as tl, a1 as ll, a2 as mt, a3 as al, Z as sl, Q as xe, a4 as ol, a5 as nl, l as yt, a6 as rl, V as il, K as cl, a7 as ul, a8 as it, e as De, p as me, a9 as Re, aa as Bt, ab as Oe, a as q, s as We, b as se, M as Ce, t as dl, S as _l, ac as st, f as pl, u as vl } from "./uuid-CPqcbMOg.js";
import { s as fl, o as ml, b as yl, f as hl, t as Ze, p as Ct, u as Tt, a as gl, v as Be, c as $l, d as bl } from "./validation-BTRWt2wE.js";
import { l as ke, m as ht, n as Ge, o as ct, i as wl, d as qe, j as kl, t as At, p as Sl } from "./i18n.service-JsWnUUar.js";
import { Icon as de } from "@iconify/vue/offline";
function Dt(n, t) {
  return fl(ml(n, t, Je), n + "");
}
function zl(n) {
  return Xt(n) && Qt(n);
}
var Ml = "Expected a function";
function Bl(n, t, e) {
  if (typeof n != "function")
    throw new TypeError(Ml);
  return setTimeout(function() {
    n.apply(void 0, e);
  }, t);
}
var vt = Dt(function(n, t, e) {
  return Bl(n, Jt(t) || 0, e);
});
function Cl(n, t, e) {
  for (var l = -1, a = n == null ? 0 : n.length; ++l < a; )
    if (e(t, n[l]))
      return !0;
  return !1;
}
function Tl(n, t) {
  var e = [];
  return el(n, function(l, a, r) {
    t(l, a, r) && e.push(l);
  }), e;
}
function Al(n, t) {
  var e = Xe(n) ? tl : Tl;
  return e(n, Mt(t));
}
function Dl(n) {
  return n && n.length ? n[0] : void 0;
}
var jl = Math.min;
function Vl(n, t, e) {
  for (var l = e ? Cl : al, a = n[0].length, r = n.length, i = r, v = Array(r), c = 1 / 0, y = []; i--; ) {
    var b = n[i];
    c = jl(b.length, c), v[i] = !e && a >= 120 && b.length >= 120 ? new ll(i && b) : void 0;
  }
  b = n[0];
  var p = -1, k = v[0];
  e:
    for (; ++p < a && y.length < c; ) {
      var g = b[p], C = g;
      if (g = e || g !== 0 ? g : 0, !(k ? mt(k, C) : l(y, C, e))) {
        for (i = r; --i; ) {
          var M = v[i];
          if (!(M ? mt(M, C) : l(n[i], C, e)))
            continue e;
        }
        k && k.push(C), y.push(g);
      }
    }
  return y;
}
function Ol(n) {
  return zl(n) ? n : [];
}
var Hl = Dt(function(n) {
  var t = sl(n), e = xe(n, Ol);
  return t = typeof t == "function" ? t : void 0, t && e.pop(), e.length && e[0] === n[0] ? Vl(e, void 0, t) : [];
});
function Nl(n, t) {
  return n === t || ol(n, t, nl(t));
}
function Il(n) {
  return n && n.length ? kt(n, Je, It) : void 0;
}
function Rl(n) {
  return n && n.length ? kt(n, Je, Rt) : void 0;
}
function ql(n, t) {
  var e = n.length;
  for (n.sort(t); e--; )
    n[e] = n[e].value;
  return n;
}
function Ll(n, t) {
  if (n !== t) {
    var e = n !== void 0, l = n === null, a = n === n, r = yt(n), i = t !== void 0, v = t === null, c = t === t, y = yt(t);
    if (!v && !y && !r && n > t || r && i && c && !v && !y || l && i && c || !e && c || !a)
      return 1;
    if (!l && !r && !y && n < t || y && e && a && !l && !r || v && e && a || !i && a || !c)
      return -1;
  }
  return 0;
}
function Pl(n, t, e) {
  for (var l = -1, a = n.criteria, r = t.criteria, i = a.length, v = e.length; ++l < i; ) {
    var c = Ll(a[l], r[l]);
    if (c) {
      if (l >= v)
        return c;
      var y = e[l];
      return c * (y == "desc" ? -1 : 1);
    }
  }
  return n.index - t.index;
}
function El(n, t, e) {
  t.length ? t = xe(t, function(r) {
    return Xe(r) ? function(i) {
      return il(i, r.length === 1 ? r[0] : r);
    } : r;
  }) : t = [Je];
  var l = -1;
  t = xe(t, cl(Mt));
  var a = rl(n, function(r, i, v) {
    var c = xe(t, function(y) {
      return y(r);
    });
    return { criteria: c, index: ++l, value: r };
  });
  return ql(a, function(r, i) {
    return Pl(r, i, e);
  });
}
function jt(n, t, e, l) {
  return n == null ? [] : (Xe(t) || (t = t == null ? [] : [t]), e = e, Xe(e) || (e = e == null ? [] : [e]), El(n, t, e));
}
function Fl(n, t) {
  return yl(n, t, function(e, l) {
    return ul(n, l);
  });
}
var Vt = hl(function(n, t) {
  return n == null ? {} : Fl(n, t);
});
const Ul = /* @__PURE__ */ Z({
  __name: "BaseList",
  props: {
    items: {},
    groupBy: {}
  },
  setup(n) {
    const t = n, e = ke(
      () => it(
        Ze(dt(t.items, t.groupBy ?? "")).map(([l, a]) => [
          l === "undefined" ? "" : l,
          a
        ])
      )
    );
    return (l, a) => (_(), $(V, null, [
      !t.items || t.items.length === 0 ? x(l.$slots, "placeholder", { key: 0 }) : L("", !0),
      (_(!0), $(V, null, F(u(e), (r, i) => (_(), $(V, {
        key: `list-group-${i}`
      }, [
        i ? x(l.$slots, "group", {
          key: 0,
          group: i,
          items: r
        }) : L("", !0),
        (_(!0), $(V, null, F(r, (v, c) => x(l.$slots, "default", {
          key: `list-item-${c}`,
          index: c,
          item: v
        })), 128))
      ], 64))), 128))
    ], 64));
  }
}), xl = /* @__PURE__ */ Z({
  __name: "BadgeBox",
  props: {
    label: {},
    content: {},
    icon: {},
    delimiter: {},
    color: { default: "default" },
    variant: { default: "capsule" },
    link: {}
  },
  setup(n) {
    Se((e) => ({
      v701c0127: `"${t.delimiter}"`
    }));
    const t = n;
    return (e, l) => (_(), X(St, {
      class: s([e.$style["badge-container"], e.$style[t.variant], e.$style[`color-${t.color}`]]),
      link: t.link
    }, {
      default: E(() => [
        t.label ? (_(), $("label", {
          key: 0,
          class: s([e.$style["badge-label"], e.$style.wrapper, e.$style.flex, e.$style.horizontal])
        }, [
          t.icon ? (_(), X(u(de), {
            key: 0,
            class: s(e.$style.icon),
            icon: t.icon
          }, null, 8, ["class", "icon"])) : L("", !0),
          t.delimiter && t.variant === "capsule" ? (_(!0), $(V, { key: 1 }, F(t.label.split(t.delimiter), (a, r) => (_(), $("span", { key: r }, N(a), 1))), 128)) : (_(), $(V, { key: 2 }, [
            zt(N(t.label), 1)
          ], 64))
        ], 2)) : L("", !0),
        t.content ? (_(), $("p", {
          key: 1,
          class: s(e.$style["badge-content"])
        }, N(t.content), 3)) : L("", !0)
      ]),
      _: 1
    }, 8, ["class", "link"]));
  }
}), Wl = "_wrapper_1f8j3_1", Zl = "_flex_1f8j3_12", Gl = "_horizontal_1f8j3_48", Yl = "_wrap_1f8j3_1", Kl = "_vertical_1f8j3_60", Xl = "_grid_1f8j3_72", Ql = "_tab_1f8j3_92", Jl = "_capsule_1f8j3_225", ea = "_icon_1f8j3_240", ta = {
  wrapper: Wl,
  flex: Zl,
  "col-1": "_col-1_1f8j3_12",
  "col-2": "_col-2_1f8j3_15",
  "col-3": "_col-3_1f8j3_18",
  "col-4": "_col-4_1f8j3_21",
  "col-5": "_col-5_1f8j3_24",
  "col-6": "_col-6_1f8j3_27",
  "col-7": "_col-7_1f8j3_30",
  "col-8": "_col-8_1f8j3_33",
  "col-9": "_col-9_1f8j3_36",
  "col-10": "_col-10_1f8j3_39",
  "col-11": "_col-11_1f8j3_42",
  "col-12": "_col-12_1f8j3_45",
  horizontal: Gl,
  wrap: Yl,
  vertical: Kl,
  grid: Xl,
  "badge-container": "_badge-container_1f8j3_78",
  "color-default": "_color-default_1f8j3_86",
  tab: Ql,
  "color-cyan": "_color-cyan_1f8j3_99",
  "color-blue": "_color-blue_1f8j3_120",
  "color-green": "_color-green_1f8j3_141",
  "color-orange": "_color-orange_1f8j3_162",
  "color-red": "_color-red_1f8j3_183",
  "color-purple": "_color-purple_1f8j3_204",
  capsule: Jl,
  "badge-label": "_badge-label_1f8j3_232",
  "badge-content": "_badge-content_1f8j3_232",
  icon: ea
}, la = {
  $style: ta
}, Nu = /* @__PURE__ */ Y(xl, [["__cssModules", la], ["__scopeId", "data-v-ffce24ce"]]), aa = /* @__PURE__ */ Z({
  __name: "CardBox",
  props: {
    link: {},
    variant: { default: "metallic" },
    color: { default: "default" },
    hasStroke: { type: Boolean, default: !0 },
    strokeWeight: { default: "normal" },
    purpose: { default: "box" },
    radius: {},
    clickable: { type: Boolean, default: !1 },
    active: { type: Boolean, default: !1 }
  },
  setup(n) {
    Se((r) => ({
      v64737810: e.value
    }));
    const t = n, e = A(
      () => t.radius ?? `var(--agh-ref-border-radius-${t.purpose === "box" ? 300 : 500})`
    ), { triggered: l, onTrigger: a } = De((r) => {
      t.clickable || r.stopPropagation();
    });
    return (r, i) => (_(), X(St, {
      ref: "wrapperRef$",
      onClickPassive: u(a),
      class: s([
        r.$style["card-container"],
        r.$style.behavior,
        r.$style[t.variant],
        r.$style[`color-${t.color}`],
        r.$style[`stroke-${t.strokeWeight}`],
        r.$style[`purpose-${t.purpose}`],
        (t.link || t.clickable) && r.$style.clickable,
        t.hasStroke && r.$style["has-stroke"],
        (u(l)() && t.clickable || t.active) && r.$style.clicked
      ]),
      link: t.link
    }, {
      default: E(() => [
        x(r.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["onClickPassive", "class", "link"]));
  }
}), sa = "_behavior_1tc3j_1", oa = "_clickable_1tc3j_1", na = "_disabled_1tc3j_4", ra = "_draggable_1tc3j_7", ia = "_move_1tc3j_7", ca = "_loading_1tc3j_10", ua = "_metallic_1tc3j_14", da = "_flat_1tc3j_14", _a = "_clicked_1tc3j_22", pa = "_dash_1tc3j_105", va = "_purpose_1tc3j_477", fa = {
  behavior: sa,
  clickable: oa,
  disabled: na,
  draggable: ra,
  move: ia,
  loading: ca,
  "card-container": "_card-container_1tc3j_14",
  "color-default": "_color-default_1tc3j_14",
  metallic: ua,
  "has-stroke": "_has-stroke_1tc3j_14",
  flat: da,
  "color-cyan": "_color-cyan_1tc3j_14",
  "color-blue": "_color-blue_1tc3j_14",
  "color-green": "_color-green_1tc3j_14",
  "color-orange": "_color-orange_1tc3j_14",
  "color-red": "_color-red_1tc3j_14",
  clicked: _a,
  dash: pa,
  "purpose-box": "_purpose-box_1tc3j_477",
  "purpose-container": "_purpose-container_1tc3j_480",
  "stroke-bold": "_stroke-bold_1tc3j_483",
  purpose: va,
  "stroke-normal": "_stroke-normal_1tc3j_495",
  "stroke-thin": "_stroke-thin_1tc3j_507"
}, ma = {
  $style: fa
}, fe = /* @__PURE__ */ Y(aa, [["__cssModules", ma], ["__scopeId", "data-v-bcff545e"]]), Fe = ({
  type: n,
  axises: t,
  data: e
}) => {
  const l = Ut({
    datasets: [],
    axises: {}
  }), a = {
    datasets: A(() => l.datasets),
    axises: A(() => l.axises)
  }, r = A(() => tt(e) ?? []), i = A(() => tt(t) ?? []), v = A(() => tt(n) ?? []), c = (p) => !Array.isArray(p) || p.length === 0 ? [] : Array.isArray(p) && p[0]?.label ? p : [
    {
      label: "Data",
      series: p
    }
  ], y = (p, k) => k.map((g) => ({
    data: g,
    ...it(
      Ze(p).filter(([, C]) => !Re(C)).map(([C, M]) => {
        const w = M.selector ? We(g, M.selector) : null, h = M.accessor ? me(g, M.accessor) : w;
        return [
          C,
          {
            normalized: Number(
              M.type === "number" ? parseFloat(String(w)) : M.type === "date" ? new Date(Number(w)) : w
            ),
            value: h
          }
        ];
      })
    )
  })), b = (p, k, g) => {
    const C = c(g).map((h) => ({
      ...h,
      label: me(h, h.label ?? ""),
      series: y(k, h.series)
    })), M = C.flatMap((h) => h.series), w = it(
      Ze(k).filter(([, h]) => !Re(h)).map(([h, m]) => {
        const o = Bt(Oe(M, `${h}.${m.type === "string" ? "value" : "normalized"}`)), S = Number(m.min === "auto" ? Rl(o) : m.min ?? 0), B = Number(
          m.max === "auto" ? Il(o) ?? 0 : m.max ?? o.length - (/radar|doughnut/.test(p ?? "") ? 0 : 1)
        );
        return [
          h,
          {
            ...m,
            min: S,
            max: B,
            metrics: m.type === "string" ? o.map((U, te) => ({
              normalized: te / (B - S),
              value: U
            })) : Array(q.clamp(q.ceil((B - S) / (m.step ?? 1)) + 1, 0, 1 / 0)).fill(0).map((U, te) => ({
              normalized: te / q.ceil((B - S) / (m.step ?? 1)),
              value: S + (m.step ?? 1) * te
            }))
          }
        ];
      })
    );
    return w && Ze(w).forEach(([h, m]) => {
      m.type === "string" ? C.forEach((o) => {
        o.series.forEach((S) => {
          S[h].normalized = Oe(m.metrics, "value").indexOf(S[h].value) / ((m.metrics ?? []).length - (/radar|doughnut/.test(p ?? "") ? 0 : 1));
        });
      }) : C.forEach((o) => {
        o.series.forEach((S) => {
          S[h].normalized = (Number(S[h].normalized ?? 0) - Number(m.min)) / (Number(m.max) - Number(m.min));
        });
      });
    }), {
      datasets: C,
      axises: w
    };
  };
  return oe([v, r, i], () => {
    const p = b(v.value, i.value, r.value);
    l.datasets = Ke(p.datasets), l.axises = Ke(p.axises);
  }, {
    deep: !0,
    immediate: !0
  }), {
    ...a
  };
}, ya = ["cx", "cy", "r", "stroke-dasharray", "stroke-dashoffset"], ha = ["x", "y"], ga = { id: "chart-content-clip" }, $a = ["cx", "cy", "r"], ba = { "clip-path": "url(#chart-content-clip)" }, wa = ["height", "width", "x", "y"], ka = /* @__PURE__ */ Z({
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
  setup(n) {
    const t = n, e = A(() => t.datasets), l = A(() => t.axises), a = P(), { width: r, height: i } = Pe(a), { axises: v, datasets: c } = Fe({
      type: "doughnut",
      data: e,
      axises: l
    }), y = A(
      () => q.clamp(
        q.min(r.value - t.options.offset.x, i.value - t.options.offset.y) / 2,
        0,
        1 / 0
      )
    ), b = A(() => t.options.gap ?? (t.options.round ? 30 : 15)), p = A(() => y.value * 2 * q.PI), k = A(() => ({
      x: r.value / 2,
      y: i.value / 2
    })), g = A(
      () => c.value.map((M) => M.series.reduce((w, h) => w + h.y.normalized, 0))
    ), C = A(
      () => c.value.map((M, w) => ({
        ...M,
        series: M.series.map((h) => ({
          ...h,
          y: {
            ...h.y,
            normalized: q.clamp(
              h.y.normalized / (g.value[w] ?? 1) - b.value / p.value,
              0,
              1
            )
          }
        })).filter((h) => h.y.normalized > b.value / p.value / 2).map((h, m, o) => ({
          ...h,
          y: {
            ...h.y,
            normalized: h.y.normalized / o.reduce((S, B) => S + B.y.normalized, 0)
          }
        })).map((h, m, o) => ({
          ...h,
          y: {
            ...h.y,
            normalized: q.clamp(
              h.y.normalized / o.reduce((S, B) => S + B.y.normalized, 0) - b.value / p.value,
              0,
              1
            )
          }
        })).map((h, m, o) => ({
          ...h,
          y: {
            ...h.y,
            offset: o.slice(0, m).reduce((S, B) => S + B.y.normalized, 0)
          }
        })).map((h, m) => ({
          ...h,
          x: {
            ...h.x,
            label: q.cos(
              q.rad(
                (h.y.offset + h.y.normalized / 2 + b.value / p.value * m) * 360 - 90
              )
            )
          },
          y: {
            ...h.y,
            label: q.sin(
              q.rad(
                (h.y.offset + h.y.normalized / 2 + b.value / p.value * m) * 360 - 90
              )
            )
          }
        }))
      }))
    );
    return (M, w) => (_(), $("div", {
      ref_key: "wrapperRef$",
      ref: a,
      class: s(M.$style["chart-container"])
    }, [
      O(Ee, {
        height: u(i),
        width: u(r)
      }, {
        path: E(() => [
          f("g", {
            class: s([M.$style["chart-group-plots"]])
          }, [
            (_(!0), $(V, null, F(C.value, (h) => (_(), $(V, {
              key: h.label
            }, [
              (_(!0), $(V, null, F(h.series, (m, o) => (_(), $("g", {
                key: `plot-${o}`,
                class: s(M.$style["chart-area"])
              }, [
                f("circle", {
                  class: s([
                    M.$style.behavior,
                    M.$style["chart-area"],
                    M.$style.doughnut,
                    M.$style.plot,
                    M.$style.clickable,
                    t.options.round && M.$style.round
                  ]),
                  cx: k.value.x,
                  cy: k.value.y,
                  r: y.value,
                  "stroke-dasharray": `${m.y.normalized * p.value} ${(1 - m.y.normalized) * p.value}`,
                  "stroke-dashoffset": m.y.offset * p.value * -1 - b.value * o + 0.25 * p.value,
                  "pointer-events": "visibleStroke"
                }, null, 10, ya),
                (_(), $("foreignObject", {
                  class: s([M.$style["chart-area"], M.$style["legend-container"]]),
                  x: k.value.x + y.value * m.x.label - 260 * +(m.x.label < 0),
                  y: k.value.y + y.value * m.y.label - 240 * +(m.y.label < 0),
                  height: "240",
                  width: "260"
                }, [
                  O(fe, {
                    class: s([M.$style["chart-area"], M.$style["legend-wrapper"]]),
                    radius: "var(--agh-ref-border-radius-500)"
                  }, {
                    default: E(() => [
                      t.options.title ? (_(), $(V, { key: 0 }, [
                        f("h1", {
                          class: s([M.$style["chart-area"], M.$style["legend-title"], M.$style.doughnut])
                        }, [
                          f("span", null, N(m.x.value), 1)
                        ], 2),
                        w[0] || (w[0] = f("hr", null, null, -1))
                      ], 64)) : L("", !0),
                      (_(!0), $(V, null, F(u(v), (S, B) => (_(), $(V, { key: B }, [
                        !/(x)/.test(B) && S && m[B] ? (_(), $("div", {
                          key: 0,
                          class: s([
                            M.$style["chart-area"],
                            M.$style["legend-group"],
                            M.$style.doughnut
                          ])
                        }, [
                          f("label", {
                            class: s([M.$style["chart-area"], M.$style["legend-label"]])
                          }, N(S.label), 3),
                          f("p", {
                            class: s([M.$style["chart-area"], M.$style["legend-value"]])
                          }, N(m[B].value), 3)
                        ], 2)) : L("", !0)
                      ], 64))), 128))
                    ]),
                    _: 2
                  }, 1032, ["class"])
                ], 10, ha))
              ], 2))), 128))
            ], 64))), 128))
          ], 2),
          f("clipPath", ga, [
            f("circle", {
              cx: k.value.x,
              cy: k.value.y,
              r: y.value - 10
            }, null, 8, $a)
          ]),
          f("g", ba, [
            (_(), $("foreignObject", {
              class: s(M.$style["chart-content-wrapper"]),
              height: y.value * 2,
              width: y.value * 2,
              x: k.value.x - y.value,
              y: k.value.y - y.value
            }, [
              x(M.$slots, "default", {}, void 0, !0)
            ], 10, wa))
          ])
        ]),
        _: 3
      }, 8, ["height", "width"])
    ], 2));
  }
}), Sa = "_behavior_ag127_1", za = "_clickable_ag127_1", Ma = "_disabled_ag127_4", Ba = "_draggable_ag127_7", Ca = "_move_ag127_7", Ta = "_loading_ag127_10", Aa = "_path_ag127_24", Da = "_radar_ag127_29", ja = "_label_ag127_32", Va = "_plot_ag127_130", Oa = "_point_ag127_130", Ha = "_doughnut_ag127_141", Na = "_bg_ag127_150", Ia = "_round_ag127_154", Ra = "_line_ag127_167", qa = {
  behavior: Sa,
  clickable: za,
  disabled: Ma,
  draggable: Ba,
  move: Ca,
  loading: Ta,
  "chart-container": "_chart-container_ag127_14",
  "chart-axis": "_chart-axis_ag127_24",
  path: Aa,
  radar: Da,
  label: ja,
  "font-align--center": "_font-align--center_ag127_45",
  "font-align--right": "_font-align--right_ag127_48",
  "font-align--left": "_font-align--left_ag127_51",
  "box-align--center": "_box-align--center_ag127_54",
  "box-align--left": "_box-align--left_ag127_57",
  "box-align--right": "_box-align--right_ag127_60",
  "chart-group-plots": "_chart-group-plots_ag127_67",
  "chart-area": "_chart-area_ag127_67",
  plot: Va,
  point: Oa,
  doughnut: Ha,
  "legend-container": "_legend-container_ag127_141",
  bg: Na,
  round: Ia,
  line: Ra,
  "legend-wrapper": "_legend-wrapper_ag127_195",
  "legend-group": "_legend-group_ag127_206",
  "legend-value": "_legend-value_ag127_214",
  "legend-label": "_legend-label_ag127_217",
  "legend-title": "_legend-title_ag127_221"
}, La = {
  $style: qa
}, Iu = /* @__PURE__ */ Y(ka, [["__cssModules", La], ["__scopeId", "data-v-076402e2"]]), Pa = ["d"], Ea = ["text-anchor", "x", "y"], Fa = ["dy", "x"], Ua = ["x", "y"], xa = ["dy", "x"], Wa = { key: 1 }, Za = ["d"], Ga = ["cx", "cy"], Ya = ["cx", "cy"], Ka = ["x", "y"], Xa = /* @__PURE__ */ Z({
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
  setup(n) {
    const t = n, e = A(() => t.datasets), l = A(() => t.axises), a = P(), { width: r, height: i } = Pe(a), { axises: v, datasets: c } = Fe({
      type: "line",
      data: e,
      axises: l
    }), y = A(
      () => v.value?.x?.metrics && v.value?.y?.metrics && i.value && i.value - t.options.offset.y > 0 && r.value && r.value - t.options.offset.x > 0 ? `
  M ${t.options.offset.x} 0
  L ${t.options.offset.x} ${i.value - t.options.offset.y}
  L ${r.value} ${i.value - t.options.offset.y}
  ${t.options.grid?.includes("x") ? `${v.value.x.metrics.map(
        (p) => `
              M ${p.normalized * (r.value - t.options.offset.x) + t.options.offset.x} 0
              V ${i.value - t.options.offset.y}
            `
      ).join("")}` : ""}
  ${t.options.grid?.includes("y") ? `${v.value.y.metrics.map(
        (p) => `
              M ${t.options.offset.x} ${(1 - p.normalized) * (i.value - t.options.offset.y)}
              H ${r.value}
            `
      ).join(`
`)}` : ""}
` : ""
    ), b = A(
      () => y.value && c ? c.value.map((p) => ({
        ...p,
        path: `
            ${p.series.map(
          (k, g) => g === 0 ? `M ${k.x.normalized * (r.value - t.options.offset.x) + t.options.offset.x} ${(1 - k.y.normalized) * (i.value - t.options.offset.y)}` : t.options.curve === "smooth" ? g === 1 ? `C ${(p.series[g - 1]?.x.normalized ?? 0) * (r.value - t.options.offset.x) + t.options.offset.x + r.value / p.series.length * t.options.radius} ${(1 - (p.series[g - 1]?.y.normalized ?? 0)) * (i.value - t.options.offset.y)} ${k.x.normalized * (r.value - t.options.offset.x) + t.options.offset.x - r.value / p.series.length * t.options.radius} ${(1 - k.y.normalized) * (i.value - t.options.offset.y)} ${k.x.normalized * (r.value - t.options.offset.x) + t.options.offset.x} ${(1 - k.y.normalized) * (i.value - t.options.offset.y)}` : `S ${k.x.normalized * (r.value - t.options.offset.x) + t.options.offset.x - r.value / p.series.length * t.options.radius} ${(1 - k.y.normalized) * (i.value - t.options.offset.y)} ${k.x.normalized * (r.value - t.options.offset.x) + t.options.offset.x} ${(1 - k.y.normalized) * (i.value - t.options.offset.y)}` : `L ${k.x.normalized * (r.value - t.options.offset.x) + t.options.offset.x} ${(1 - k.y.normalized) * (i.value - t.options.offset.y)}`
        ).join(`
`)}`
      })) : []
    );
    return (p, k) => (_(), $("div", {
      ref_key: "wrapperRef$",
      ref: a,
      class: s(p.$style["chart-container"])
    }, [
      O(Ee, {
        height: u(i),
        width: u(r)
      }, {
        defs: E(() => [...k[0] || (k[0] = [])]),
        path: E(() => [
          f("g", {
            id: "chart-group-axises",
            class: s([p.$style["chart-group-axises"]])
          }, [
            f("path", {
              class: s([p.$style["chart-axis"], p.$style.line, p.$style.path]),
              d: y.value
            }, null, 10, Pa)
          ], 2),
          u(v) && u(r) && u(i) ? (_(), $("g", {
            key: 0,
            class: s([p.$style["chart-group-axises-label"]])
          }, [
            u(v).x && u(v).x.metrics ? (_(!0), $(V, { key: 0 }, F(u(v).x.metrics, (g, C) => (_(), $("text", {
              key: `axis-x--${C}`,
              class: s([p.$style["chart-axis"], p.$style.label]),
              "text-anchor": C === 0 ? "start" : C === u(v).x.metrics.length - 1 ? "end" : "middle",
              x: g.normalized * (u(r) - t.options.offset.x) + t.options.offset.x,
              y: u(i) - t.options.offset.y + 20
            }, [
              (_(!0), $(V, null, F((g.value ?? "").toString().split(`
`), (M, w) => (_(), $("tspan", {
                key: w,
                dy: `${w * 1.2}em`,
                x: g.normalized * (u(r) - t.options.offset.x) + t.options.offset.x
              }, N(M), 9, Fa))), 128))
            ], 10, Ea))), 128)) : L("", !0),
            u(v).y && u(v).y.metrics ? (_(!0), $(V, { key: 1 }, F(u(v).y.metrics, (g, C) => (_(), $("text", {
              key: `axis-y--${C}`,
              class: s([p.$style["chart-axis"], p.$style.label]),
              x: t.options.offset.x - 10,
              y: (1 - g.normalized) * (u(i) - t.options.offset.y) + 5,
              "text-anchor": "end"
            }, [
              (_(!0), $(V, null, F([(g.value ?? "").toString().split(`
`)], (M, w) => (_(), $(V, {
                key: `group-${w}`
              }, [
                M.length > 1 ? (_(!0), $(V, { key: 0 }, F(M, (h, m) => (_(), $("tspan", {
                  key: m,
                  dy: `${m * 0.5 - 0.5}em`,
                  x: t.options.offset.x - 10
                }, N(h), 9, xa))), 128)) : (_(), $("tspan", Wa, N(g.value), 1))
              ], 64))), 128))
            ], 10, Ua))), 128)) : L("", !0)
          ], 2)) : L("", !0),
          f("g", {
            class: s([p.$style["chart-group-plots"]])
          }, [
            (_(!0), $(V, null, F(b.value, (g) => (_(), $("g", {
              key: g.label,
              class: s([p.$style["chart-area"], p.$style.line, p.$style.plot])
            }, [
              f("path", {
                d: g.path
              }, null, 8, Za)
            ], 2))), 128)),
            (_(!0), $(V, null, F(u(c), (g) => (_(), $(V, null, [
              (_(!0), $(V, null, F(g.series, (C, M) => (_(), $("g", {
                key: `chart-plot-${g.label}-plot-${M}`,
                class: s(p.$style["chart-area"])
              }, [
                f("circle", {
                  class: s([
                    p.$style.behavior,
                    p.$style["chart-area"],
                    p.$style.point,
                    p.$style.plot,
                    p.$style.clickable
                  ]),
                  cx: C.x.normalized * (u(r) - t.options.offset.x) + t.options.offset.x,
                  cy: (1 - C.y.normalized) * (u(i) - t.options.offset.y),
                  r: "50"
                }, null, 10, Ga),
                f("circle", {
                  class: s([p.$style["chart-area"], p.$style.point, p.$style.plot]),
                  cx: C.x.normalized * (u(r) - t.options.offset.x) + t.options.offset.x,
                  cy: (1 - C.y.normalized) * (u(i) - t.options.offset.y),
                  r: "5"
                }, null, 10, Ya),
                (_(), $("foreignObject", {
                  class: s([p.$style["chart-area"], p.$style["legend-container"]]),
                  x: C.x.normalized * (u(r) - t.options.offset.x) + t.options.offset.x + (M === 0 ? 0 : M === g.series.length - 1 ? -280 : -140),
                  y: (1 - C.y.normalized) * (u(i) - t.options.offset.y) - (C.y.normalized > 0.5 ? 0 : C.y.normalized < 0.5 ? 220 : 110),
                  height: "220",
                  width: "280"
                }, [
                  O(fe, {
                    class: s([p.$style["chart-area"], p.$style["legend-wrapper"]]),
                    radius: "var(--agh-ref-border-radius-500)"
                  }, {
                    default: E(() => [
                      t.options.title ? (_(), $(V, { key: 0 }, [
                        f("h1", {
                          class: s([p.$style["chart-area"], p.$style["legend-title"]])
                        }, N(u(me)(C.data, t.options.title)), 3),
                        k[1] || (k[1] = f("hr", null, null, -1))
                      ], 64)) : L("", !0),
                      (_(!0), $(V, null, F(u(v), (w, h) => (_(), $(V, { key: h }, [
                        w && C[h] ? (_(), $("div", {
                          key: 0,
                          class: s([p.$style["chart-area"], p.$style["legend-group"]])
                        }, [
                          f("label", {
                            class: s([p.$style["chart-area"], p.$style["legend-label"]])
                          }, N(w.label), 3),
                          f("p", {
                            class: s([p.$style["chart-area"], p.$style["legend-value"]])
                          }, N(C[h].value), 3)
                        ], 2)) : L("", !0)
                      ], 64))), 128))
                    ]),
                    _: 2
                  }, 1032, ["class"])
                ], 10, Ka))
              ], 2))), 128))
            ], 64))), 256))
          ], 2)
        ]),
        _: 1
      }, 8, ["height", "width"])
    ], 2));
  }
}), Qa = "_behavior_3alvm_1", Ja = "_clickable_3alvm_1", es = "_disabled_3alvm_4", ts = "_draggable_3alvm_7", ls = "_move_3alvm_7", as = "_loading_3alvm_10", ss = "_path_3alvm_24", os = "_radar_3alvm_29", ns = "_label_3alvm_32", rs = "_plot_3alvm_130", is = "_point_3alvm_130", cs = "_doughnut_3alvm_141", us = "_bg_3alvm_150", ds = "_round_3alvm_154", _s = "_line_3alvm_167", ps = {
  behavior: Qa,
  clickable: Ja,
  disabled: es,
  draggable: ts,
  move: ls,
  loading: as,
  "chart-container": "_chart-container_3alvm_14",
  "chart-axis": "_chart-axis_3alvm_24",
  path: ss,
  radar: os,
  label: ns,
  "font-align--center": "_font-align--center_3alvm_45",
  "font-align--right": "_font-align--right_3alvm_48",
  "font-align--left": "_font-align--left_3alvm_51",
  "box-align--center": "_box-align--center_3alvm_54",
  "box-align--left": "_box-align--left_3alvm_57",
  "box-align--right": "_box-align--right_3alvm_60",
  "chart-group-plots": "_chart-group-plots_3alvm_67",
  "chart-area": "_chart-area_3alvm_67",
  plot: rs,
  point: is,
  doughnut: cs,
  "legend-container": "_legend-container_3alvm_141",
  bg: us,
  round: ds,
  line: _s,
  "legend-wrapper": "_legend-wrapper_3alvm_195",
  "legend-group": "_legend-group_3alvm_206",
  "legend-value": "_legend-value_3alvm_214",
  "legend-label": "_legend-label_3alvm_217",
  "legend-title": "_legend-title_3alvm_221"
}, vs = {
  $style: ps
}, Ru = /* @__PURE__ */ Y(Xa, [["__cssModules", vs], ["__scopeId", "data-v-fc0b2125"]]), fs = /* @__PURE__ */ Z({
  __name: "MatrixChart",
  props: {
    axises: {},
    datasets: {},
    options: {}
  },
  setup(n) {
    const t = n, e = A(() => t.datasets), l = A(() => t.axises), { axises: a, datasets: r } = Fe({
      type: "matrix",
      data: e,
      axises: l
    }), i = A(() => a.value.y.step), v = A(
      () => r.value[0]?.series.map((g) => ({
        ...g,
        y: {
          ...g.y,
          normalized: q.round(g.y.normalized * i.value)
        }
      }))
    ), c = P(), y = P(), b = se(""), p = () => {
      if (c.value && c.value.firstElementChild) {
        const { firstElementChild: g, clientWidth: C } = c.value, M = C, w = g?.clientWidth;
        y.value = q.floor(M / w);
      }
    }, k = () => {
      c.value && (b.set(
        _t("--matrix-border-width", c, {
          observe: !0
        }).value
      ), b() || vt(k, 1));
    };
    return He(c, p, { window }), Ae(() => {
      k(), p();
    }), (g, C) => (_(), $("div", {
      ref_key: "containerRef$",
      ref: c,
      class: s(g.$style["chart-container"])
    }, [
      (_(!0), $(V, null, F(v.value, (M, w) => (_(), $("div", {
        key: w,
        class: s([
          g.$style["matrix-container"],
          y.value && w % y.value !== 0 && g.$style["matrix-container-border"]
        ])
      }, [
        f("label", {
          class: s(g.$style.label)
        }, N(M.x.value), 3),
        f("div", {
          class: s(g.$style["box-container"])
        }, [
          (_(!0), $(V, null, F(i.value, (h) => (_(), $("div", {
            key: h,
            class: s([
              g.$style.square,
              h <= M.y.normalized ? g.$style["square-cyan"] : g.$style["square-grayscale"]
            ])
          }, null, 2))), 128))
        ], 2)
      ], 2))), 128))
    ], 2));
  }
}), ms = "_behavior_1i867_1", ys = "_clickable_1i867_1", hs = "_disabled_1i867_4", gs = "_draggable_1i867_7", $s = "_move_1i867_7", bs = "_loading_1i867_10", ws = "_path_1i867_24", ks = "_radar_1i867_29", Ss = "_label_1i867_32", zs = "_plot_1i867_130", Ms = "_point_1i867_130", Bs = "_doughnut_1i867_141", Cs = "_bg_1i867_150", Ts = "_round_1i867_154", As = "_line_1i867_167", Ds = "_square_1i867_290", js = {
  behavior: ms,
  clickable: ys,
  disabled: hs,
  draggable: gs,
  move: $s,
  loading: bs,
  "chart-container": "_chart-container_1i867_14",
  "chart-axis": "_chart-axis_1i867_24",
  path: ws,
  radar: ks,
  label: Ss,
  "font-align--center": "_font-align--center_1i867_45",
  "font-align--right": "_font-align--right_1i867_48",
  "font-align--left": "_font-align--left_1i867_51",
  "box-align--center": "_box-align--center_1i867_54",
  "box-align--left": "_box-align--left_1i867_57",
  "box-align--right": "_box-align--right_1i867_60",
  "chart-group-plots": "_chart-group-plots_1i867_67",
  "chart-area": "_chart-area_1i867_67",
  plot: zs,
  point: Ms,
  doughnut: Bs,
  "legend-container": "_legend-container_1i867_141",
  bg: Cs,
  round: Ts,
  line: As,
  "legend-wrapper": "_legend-wrapper_1i867_195",
  "legend-group": "_legend-group_1i867_206",
  "legend-value": "_legend-value_1i867_214",
  "legend-label": "_legend-label_1i867_217",
  "legend-title": "_legend-title_1i867_221",
  "matrix-container": "_matrix-container_1i867_268",
  "matrix-container-border": "_matrix-container-border_1i867_276",
  "box-container": "_box-container_1i867_286",
  square: Ds,
  "square-cyan": "_square-cyan_1i867_295",
  "square-grayscale": "_square-grayscale_1i867_298"
}, Vs = {
  $style: js
}, qu = /* @__PURE__ */ Y(fs, [["__cssModules", Vs], ["__scopeId", "data-v-edb6b87f"]]), Os = ["id"], Hs = ["stdDeviation"], gt = /* @__PURE__ */ Z({
  __name: "RoundEffect",
  props: {
    id: {},
    radius: {}
  },
  setup(n) {
    const t = n;
    return (e, l) => (_(), $("filter", {
      id: t.id
    }, [
      f("feGaussianBlur", {
        stdDeviation: t.radius,
        in: "SourceGraphic",
        result: "blur"
      }, null, 8, Hs),
      l[0] || (l[0] = f("feColorMatrix", {
        in: "blur",
        mode: "matrix",
        result: "mask",
        values: "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10"
      }, null, -1)),
      l[1] || (l[1] = f("feComposite", {
        in: "SourceGraphic",
        in2: "mask",
        operator: "in"
      }, null, -1))
    ], 8, Os));
  }
}), Ns = ["innerHTML"], Is = { id: "chart-area-bg-mask" }, Rs = ["d"], qs = ["d"], Ls = ["d"], Ps = ["height", "width", "x", "y"], Es = ["d"], Fs = ["cx", "cy"], Us = ["cx", "cy"], xs = ["x", "y"], Ws = /* @__PURE__ */ Z({
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
  setup(n) {
    const t = n, e = P(), { width: l, height: a } = Pe(e), r = A(() => t.datasets), i = A(() => t.axises), { axises: v, datasets: c } = Fe({
      type: "radar",
      data: r,
      axises: i
    }), y = A(
      () => q.clamp(
        q.min(l.value - t.options.offset.x, a.value - t.options.offset.y) / 2,
        0,
        1 / 0
      )
    ), b = A(() => ({
      x: l.value / 2,
      y: a.value / 2
    })), p = A(
      () => y.value > 0 && v.value?.x?.metrics ? `
      ${v.value.x.metrics.map(
        (w, h) => `${h === 0 ? "M" : "L"} ${b.value.x + y.value * q.cos(q.rad(w.normalized * 360 - 90))} ${b.value.y + y.value * q.sin(q.rad(w.normalized * 360 - 90))}`
      ).join(" ")} Z
      ` : ""
    ), k = A(
      () => p.value && c.value ? c.value.map((w) => ({
        ...w,
        path: `${w.series.map(
          (h, m) => `${m === 0 ? "M" : "L"} ${b.value.x + y.value * (0.1 + 0.8 * h.y.normalized) * q.cos(q.rad(h.x.normalized * 360 - 90))} ${b.value.y + y.value * (0.1 + 0.8 * h.y.normalized) * q.sin(q.rad(h.x.normalized * 360 - 90))}`
        ).join(" ")} Z`
      })) : []
    ), g = A(
      () => y.value > 0 && v.value.x.metrics ? `M ${b.value.x} ${b.value.y}
      ${v.value.x.metrics.map(
        (w) => `L ${b.value.x + y.value * q.cos(q.rad(w.normalized * 360 - 90))} ${b.value.y + y.value * q.sin(q.rad(w.normalized * 360 - 90))}
            M ${b.value.x} ${b.value.y}`
      ).join(`
`)}
      Z` : ""
    ), C = se(""), M = () => {
      e.value && (C.set(
        _t("--chart-bg-fill-svg", e, {
          observe: !0
        }).value
      ), C() || vt(M, 1));
    };
    return Ae(() => {
      M();
    }), (w, h) => (_(), $("div", {
      ref_key: "wrapperRef$",
      ref: e,
      class: s(w.$style["chart-container"])
    }, [
      O(Ee, {
        height: u(a),
        width: u(l)
      }, {
        defs: E(() => [
          O(gt, {
            id: "chart-area-bg-round",
            radius: 6
          }),
          O(gt, {
            id: "chart-area-plot-round",
            radius: 3
          }),
          f("g", {
            innerHTML: u(C)()
          }, null, 8, Ns),
          f("mask", Is, [
            f("path", {
              class: s([
                w.$style["chart-area"],
                w.$style.radar,
                w.$style.bg,
                t.options.round && w.$style.round
              ]),
              d: p.value,
              fill: "#fff"
            }, null, 10, Rs)
          ])
        ]),
        path: E(() => [
          f("path", {
            class: s([
              w.$style["chart-area"],
              w.$style.radar,
              w.$style.bg,
              t.options.round && w.$style.round
            ]),
            d: p.value
          }, null, 10, qs),
          f("g", {
            id: "chart-group-axises",
            class: s([w.$style["chart-group-axises"]]),
            mask: "url(#chart-area-bg-mask)"
          }, [
            f("path", {
              class: s([w.$style["chart-axis"], w.$style.radar, w.$style.path]),
              d: g.value
            }, null, 10, Ls)
          ], 2),
          u(v) ? (_(), $("g", {
            key: 0,
            class: s([w.$style["chart-group-axises-label"]])
          }, [
            (_(!0), $(V, null, F(u(v).x.metrics, (m) => (_(), $("foreignObject", {
              key: String(m.value),
              class: s([w.$style["chart-axis"], w.$style.radar, w.$style["label-wrapper"]]),
              height: y.value / 3,
              width: y.value,
              x: b.value.x + y.value * u(q).cos(u(q).rad(m.normalized * 360 - 90)) - (m.normalized % 0.5 === 0 ? y.value / 2 : m.normalized > 0.5 ? y.value : 0),
              y: b.value.y + y.value * 1.1 * u(q).sin(u(q).rad(m.normalized * 360 - 90)) - y.value / 6
            }, [
              f("p", {
                class: s([[
                  w.$style["chart-axis"],
                  w.$style.radar,
                  w.$style.label,
                  m.normalized % 0.5 === 0 ? w.$style["font-align--center"] : m.normalized < 0.5 ? w.$style["font-align--left"] : w.$style["font-align--right"],
                  m.normalized % 0.5 === 0 ? w.$style["box-align--center"] : m.normalized < 0.5 ? w.$style["box-align--left"] : w.$style["box-align--right"]
                ], "font-bold"])
              }, N(m.value), 3)
            ], 10, Ps))), 128))
          ], 2)) : L("", !0),
          f("g", {
            class: s([w.$style["chart-group-plots"]])
          }, [
            (_(!0), $(V, null, F(k.value, (m) => (_(), $("g", {
              key: m.label,
              class: s([w.$style["chart-area"], w.$style.radar, w.$style.plot])
            }, [
              f("path", {
                class: s([t.options.round && w.$style.round]),
                d: m.path
              }, null, 10, Es)
            ], 2))), 128))
          ], 2),
          (_(!0), $(V, null, F(u(c), (m) => (_(), $("g", {
            key: m.label,
            class: s([w.$style["chart-area-label"]])
          }, [
            (_(!0), $(V, null, F(m.series, (o, S) => (_(), $("g", {
              key: `plot-${S}`,
              class: s(w.$style["chart-area"])
            }, [
              f("circle", {
                class: s([
                  w.$style.behavior,
                  w.$style["chart-area"],
                  w.$style.point,
                  w.$style.plot,
                  w.$style.clickable
                ]),
                cx: b.value.x + y.value * (0.1 + 0.8 * o.y.normalized) * u(q).cos(u(q).rad(o.x.normalized * 360 - 90)),
                cy: b.value.y + y.value * (0.1 + 0.8 * o.y.normalized) * u(q).sin(u(q).rad(o.x.normalized * 360 - 90)),
                r: "10"
              }, null, 10, Fs),
              f("circle", {
                class: s([w.$style["chart-area"], w.$style.radar, w.$style.point, w.$style.plot]),
                cx: b.value.x + y.value * (0.1 + 0.8 * o.y.normalized) * u(q).cos(u(q).rad(o.x.normalized * 360 - 90)),
                cy: b.value.y + y.value * (0.1 + 0.8 * o.y.normalized) * u(q).sin(u(q).rad(o.x.normalized * 360 - 90)),
                r: "5"
              }, null, 10, Us),
              (_(), $("foreignObject", {
                class: s([w.$style["chart-area"], w.$style["legend-container"]]),
                x: b.value.x + y.value * (0.1 + 0.8 * o.y.normalized) * u(q).cos(u(q).rad(o.x.normalized * 360 - 90)) - 130,
                y: b.value.y + y.value * (0.1 + 0.8 * o.y.normalized) * u(q).sin(u(q).rad(o.x.normalized * 360 - 90)),
                height: "200",
                width: "260"
              }, [
                O(fe, {
                  class: s([w.$style["chart-area"], w.$style["legend-wrapper"]]),
                  radius: "var(--agh-ref-border-radius-500)"
                }, {
                  default: E(() => [
                    t.options.title ? (_(), $(V, { key: 0 }, [
                      f("h1", {
                        class: s([w.$style["chart-area"], w.$style["legend-title"], w.$style.radar])
                      }, [
                        f("span", null, N(o.x.value), 1),
                        f("span", {
                          class: s(w.$style["legend-value"])
                        }, N(o.y.value), 3)
                      ], 2),
                      h[0] || (h[0] = f("hr", null, null, -1))
                    ], 64)) : L("", !0),
                    (_(!0), $(V, null, F(u(v), (B, U) => (_(), $(V, { key: U }, [
                      !/(x|y)/.test(U) && B && o[U] ? (_(), $("div", {
                        key: 0,
                        class: s([w.$style["chart-area"], w.$style["legend-group"], w.$style.radar])
                      }, [
                        f("p", {
                          class: s([w.$style["chart-area"], w.$style["legend-value"]])
                        }, N(o[U].value), 3),
                        f("label", {
                          class: s([w.$style["chart-area"], w.$style["legend-label"]])
                        }, N(B.label), 3)
                      ], 2)) : L("", !0)
                    ], 64))), 128))
                  ]),
                  _: 2
                }, 1032, ["class"])
              ], 10, xs))
            ], 2))), 128))
          ], 2))), 128))
        ]),
        _: 1
      }, 8, ["height", "width"])
    ], 2));
  }
}), Zs = "_behavior_1ekpn_1", Gs = "_clickable_1ekpn_1", Ys = "_disabled_1ekpn_4", Ks = "_draggable_1ekpn_7", Xs = "_move_1ekpn_7", Qs = "_loading_1ekpn_10", Js = "_path_1ekpn_24", eo = "_radar_1ekpn_29", to = "_label_1ekpn_32", lo = "_plot_1ekpn_130", ao = "_point_1ekpn_130", so = "_doughnut_1ekpn_141", oo = "_bg_1ekpn_150", no = "_round_1ekpn_154", ro = "_line_1ekpn_167", io = {
  behavior: Zs,
  clickable: Gs,
  disabled: Ys,
  draggable: Ks,
  move: Xs,
  loading: Qs,
  "chart-container": "_chart-container_1ekpn_14",
  "chart-axis": "_chart-axis_1ekpn_24",
  path: Js,
  radar: eo,
  label: to,
  "font-align--center": "_font-align--center_1ekpn_45",
  "font-align--right": "_font-align--right_1ekpn_48",
  "font-align--left": "_font-align--left_1ekpn_51",
  "box-align--center": "_box-align--center_1ekpn_54",
  "box-align--left": "_box-align--left_1ekpn_57",
  "box-align--right": "_box-align--right_1ekpn_60",
  "chart-group-plots": "_chart-group-plots_1ekpn_67",
  "chart-area": "_chart-area_1ekpn_67",
  plot: lo,
  point: ao,
  doughnut: so,
  "legend-container": "_legend-container_1ekpn_141",
  bg: oo,
  round: no,
  line: ro,
  "legend-wrapper": "_legend-wrapper_1ekpn_195",
  "legend-group": "_legend-group_1ekpn_206",
  "legend-value": "_legend-value_1ekpn_214",
  "legend-label": "_legend-label_1ekpn_217",
  "legend-title": "_legend-title_1ekpn_221"
}, co = {
  $style: io
}, Lu = /* @__PURE__ */ Y(Ws, [["__cssModules", co], ["__scopeId", "data-v-403ac390"]]), uo = /* @__PURE__ */ Z({
  __name: "StackBarChart",
  props: {
    axises: {},
    datasets: {},
    options: { default: () => ({
      offset: {
        x: 0,
        y: 0
      }
    }) }
  },
  setup(n) {
    Se((v) => ({
      v3391a065: a.value
    }));
    const t = n, e = A(() => t.datasets), l = A(() => t.axises), a = A(
      () => t.options.gap ? `${t.options.gap}px` : "var(--agh-ref-spacing-25)"
    ), { datasets: r } = Fe({
      type: "doughnut",
      data: e,
      axises: l
    }), i = A(
      () => [...r.value[0]?.series ?? []].sort((v, c) => c.y.normalized - v.y.normalized)
    );
    return (v, c) => (_(), $("div", {
      class: s([v.$style["chart-container"], v.$style.wrapper, v.$style.flex, v.$style.vertical])
    }, [
      f("div", {
        class: s([v.$style["chart-instance"], v.$style.wrapper, v.$style.flex, v.$style.horizontal])
      }, [
        (_(!0), $(V, null, F(i.value, (y, b) => (_(), $("div", {
          key: `plot-${b}`,
          class: s([v.$style["chart-plot"], v.$style.behavior, v.$style.clickable]),
          style: pt({
            "--plot-value": y.y.normalized,
            "--anchor-name": `--plot-anchor-${b}`
          })
        }, [
          O(fe, {
            class: s([v.$style["chart-plot-tooltip"], v.$style.wrapper, v.$style.flex, v.$style.vertical]),
            purpose: "box",
            radius: "var(--agh-ref-border-radius-400)"
          }, {
            default: E(() => [
              f("h1", {
                class: s([v.$style.wrapper, v.$style.flex, v.$style.horizontal])
              }, [
                f("span", null, N(y.x.value), 1),
                f("span", null, N(String(y.y.value).padStart(3, "0")), 1)
              ], 2),
              c[0] || (c[0] = f("hr", null, null, -1)),
              f("ul", {
                class: s([v.$style.wrapper, v.$style.flex, v.$style.vertical])
              }, [
                (_(!0), $(V, null, F(n.axises, (p, k) => (_(), $(V, { key: k }, [
                  p && y[k] && !["x", "y"].includes(k) ? (_(), $("li", {
                    key: 0,
                    class: s([v.$style.wrapper, v.$style.flex, v.$style.horizontal])
                  }, [
                    f("p", {
                      class: s([v.$style["chart-area"], v.$style["legend-value"]])
                    }, N(String(y[k].value).split("/").map((g) => g.padStart(2, "0")).join("/")), 3),
                    f("label", {
                      class: s([v.$style["chart-area"], v.$style["legend-label"]])
                    }, N(p.label), 3)
                  ], 2)) : L("", !0)
                ], 64))), 128))
              ], 2)
            ]),
            _: 2
          }, 1032, ["class"])
        ], 6))), 128))
      ], 2),
      f("div", {
        class: s([
          v.$style["chart-legend-wrapper"],
          v.$style.wrapper,
          v.$style.flex,
          v.$style.horizontal,
          v.$style.wrap
        ])
      }, [
        (_(!0), $(V, null, F(u(r)[0]?.series, (y, b) => (_(), $("label", {
          key: `plot-${b}`,
          class: s([v.$style["chart-legend"], v.$style.wrapper, v.$style.flex, v.$style.horizontal])
        }, [
          O(u(de), {
            class: s(v.$style.icon),
            icon: "fa6-solid:square"
          }, null, 8, ["class"]),
          f("span", null, N(y.x.value), 1),
          f("span", null, N(String(y.y.value).padStart(3, "0")), 1)
        ], 2))), 128))
      ], 2)
    ], 2));
  }
}), _o = "_behavior_bbuxe_1", po = "_clickable_bbuxe_1", vo = "_disabled_bbuxe_4", fo = "_draggable_bbuxe_7", mo = "_move_bbuxe_7", yo = "_loading_bbuxe_10", ho = "_wrapper_bbuxe_14", go = "_flex_bbuxe_25", $o = "_horizontal_bbuxe_61", bo = "_wrap_bbuxe_14", wo = "_vertical_bbuxe_73", ko = "_grid_bbuxe_85", So = "_icon_bbuxe_267", zo = {
  behavior: _o,
  clickable: po,
  disabled: vo,
  draggable: fo,
  move: mo,
  loading: yo,
  wrapper: ho,
  flex: go,
  "col-1": "_col-1_bbuxe_25",
  "col-2": "_col-2_bbuxe_28",
  "col-3": "_col-3_bbuxe_31",
  "col-4": "_col-4_bbuxe_34",
  "col-5": "_col-5_bbuxe_37",
  "col-6": "_col-6_bbuxe_40",
  "col-7": "_col-7_bbuxe_43",
  "col-8": "_col-8_bbuxe_46",
  "col-9": "_col-9_bbuxe_49",
  "col-10": "_col-10_bbuxe_52",
  "col-11": "_col-11_bbuxe_55",
  "col-12": "_col-12_bbuxe_58",
  horizontal: $o,
  wrap: bo,
  vertical: wo,
  grid: ko,
  "chart-container": "_chart-container_bbuxe_107",
  "chart-instance": "_chart-instance_bbuxe_110",
  "chart-plot": "_chart-plot_bbuxe_120",
  "chart-legend": "_chart-legend_bbuxe_120",
  "chart-plot-tooltip": "_chart-plot-tooltip_bbuxe_207",
  "chart-legend-wrapper": "_chart-legend-wrapper_bbuxe_248",
  icon: So
}, Mo = {
  $style: zo
}, Pu = /* @__PURE__ */ Y(uo, [["__cssModules", Mo], ["__scopeId", "data-v-64f382b8"]]), Bo = ["value"], Co = /* @__PURE__ */ Z({
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
    min: {},
    max: {},
    pattern: {},
    size: {},
    step: {},
    spellcheck: { type: Boolean, default: !1 },
    tabindex: {},
    inputmode: {},
    invalidMessage: {},
    eventSignalOptions: {},
    icon: {},
    iconAlign: { default: "right" },
    iconClick: {}
  },
  emits: ["update:modelValue", "validation"],
  setup(n, { expose: t, emit: e }) {
    const l = n, a = e, { onTrigger: r } = De(
      (b) => {
        l.disabled ? (b.preventDefault(), b.stopPropagation()) : (c.set(!0), y(), a("update:modelValue", b.target.value));
      },
      l.eventSignalOptions ?? {
        flush: "post"
      }
    ), i = P(), v = se(""), c = se(l.modelValue !== ""), y = () => {
      v.set(
        i.value ? i.value?.validity.valid ? "" : Ct(i.value.validity, l.invalidMessage ?? {}) ?? i.value.validationMessage : ""
      ), i.value?.validity && a("validation", i.value.validity);
    };
    return Ae(() => {
      y();
    }), t({
      checkValidity: y,
      focused: c,
      errMsg: v,
      inputRef$: i
    }), (b, p) => (_(), $("div", {
      class: s([
        b.$style["textfield-container"],
        (l.icon || n.type === "search") && [b.$style[`icon-align--${l.iconAlign}`]],
        !l.label && [b.$style["no-label"]]
      ])
    }, [
      l.label || l.required ? (_(), $("label", {
        key: 0,
        class: s([b.$style["textfield-label"]])
      }, [
        l.label ? (_(), $("p", {
          key: 0,
          class: s([b.$style["textfield-label--value"]])
        }, N(l.label), 3)) : L("", !0),
        n.required ? (_(), $("p", {
          key: 1,
          class: s([b.$style["textfield-label--notation"]])
        }, [
          O(u(de), {
            class: s(b.$style.icon),
            icon: "fa6-solid:asterisk"
          }, null, 8, ["class"]),
          p[2] || (p[2] = f("span", null, "Required", -1))
        ], 2)) : L("", !0)
      ], 2)) : L("", !0),
      f("input", ce({
        ref_key: "inputRef$",
        ref: i,
        onInput: p[0] || (p[0] = //@ts-ignore
        (...k) => u(r) && u(r)(...k)),
        class: [
          b.$style["textfield-input"],
          u(c)() && b.$style.focused
        ]
      }, l, {
        value: l.modelValue
      }), null, 16, Bo),
      n.type === "search" ? (_(), X(u(de), {
        key: 1,
        class: s([b.$style["textfield-icon"], b.$style["textfield-icon-search"], b.$style.icon]),
        icon: n.type === "search" ? "fa6-solid:magnifying-glass" : ""
      }, null, 8, ["class", "icon"])) : L("", !0),
      l.icon ? (_(), $("div", {
        key: 2,
        onClick: p[1] || (p[1] = //@ts-ignore
        (...k) => l.iconClick && l.iconClick(...k)),
        class: s([b.$style["textfield-icon"], b.$style.icon])
      }, [
        O(u(de), {
          icon: l.icon ?? ""
        }, null, 8, ["icon"])
      ], 2)) : L("", !0),
      u(v)() && u(c)() ? (_(), $("div", {
        key: 3,
        class: s([b.$style["textfield-msg"]])
      }, [
        O(u(de), {
          class: s([b.$style["textfield-icon"]]),
          icon: "fa6-solid:circle-xmark"
        }, null, 8, ["class"]),
        f("span", {
          class: s([b.$style["textfield-msg--value"]])
        }, N(u(v)()), 3)
      ], 2)) : L("", !0)
    ], 2));
  }
}), To = "_icon_1sa06_16", Ao = "_focused_1sa06_88", Do = {
  "textfield-container": "_textfield-container_1sa06_1",
  "no-label": "_no-label_1sa06_10",
  "icon-align--left": "_icon-align--left_1sa06_16",
  "icon-align--right": "_icon-align--right_1sa06_16",
  "textfield-input": "_textfield-input_1sa06_21",
  "textfield-icon": "_textfield-icon_1sa06_24",
  "textfield-icon-search": "_textfield-icon-search_1sa06_37",
  "textfield-label": "_textfield-label_1sa06_40",
  "textfield-label--value": "_textfield-label--value_1sa06_48",
  "textfield-label--notation": "_textfield-label--notation_1sa06_52",
  icon: To,
  focused: Ao,
  "textfield-msg": "_textfield-msg_1sa06_118"
}, jo = {
  $style: Do
}, Ue = /* @__PURE__ */ Y(Co, [["__cssModules", jo], ["__scopeId", "data-v-36b7d687"]]), Vo = ["onMouseout", "onMouseover"], Oo = /* @__PURE__ */ Z({
  __name: "DatetimePicker",
  props: {
    modelValue: {},
    type: { default: "single" },
    enableTime: { type: Boolean, default: !0 },
    weekStart: { default: "Sunday" },
    start: {},
    end: {},
    lang: { default: "en" },
    minYear: { default: 1900 },
    maxYear: { default: 2100 }
  },
  emits: ["update:modelValue", "update:start", "update:end", "confirm"],
  setup(n, { emit: t }) {
    const e = n, l = t, a = P({
      start: void 0,
      end: void 0
    }), r = P({
      start: void 0,
      end: void 0
    }), i = P(!1), v = P(!1), c = P(""), y = P(), b = (d) => {
      y.value === d ? y.value = void 0 : y.value = d;
    }, p = P(), k = P(), g = () => {
      y.value === "year" ? B.value.goToDate(B.value.month.monthNumber, p.value) : B.value.goToDate(k.value, B.value.year), y.value = void 0;
    }, C = () => {
      p.value = void 0, k.value = void 0, y.value = void 0;
    }, M = (d) => {
      const I = new Date(d.getFullYear(), 0, 1), H = (d.getTime() - I.getTime()) / 864e5;
      return Math.ceil((H + I.getDate() + 1) / 7);
    }, w = (d = /* @__PURE__ */ new Date()) => {
      const I = d.getDate(), H = d.toLocaleString(e.lang, { weekday: "long" }), J = d.getDay() + (e.weekStart === "Monday" ? 0 : 1), ue = d.toLocaleString(e.lang, { weekday: "short" }), pe = d.getFullYear();
      p.value = pe;
      const ze = Number(d.toLocaleString(e.lang, { year: "2-digit" })), ye = d.toLocaleString(e.lang, { month: "long" }), be = d.toLocaleString(e.lang, { month: "short" }), we = Number(d.toLocaleString("en", { month: "2-digit" }));
      k.value = we;
      const T = d.getTime(), D = M(d);
      return {
        date: d,
        currentDate: I,
        day: H,
        dayNumber: J,
        dayShort: ue,
        year: pe,
        yearShort: ze,
        month: ye,
        monthShort: be,
        monthNumber: we,
        timestamp: T,
        week: D
      };
    }, h = (d = /* @__PURE__ */ new Date()) => {
      const I = w(d), H = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], { monthNumber: J, year: ue, monthShort: pe, month: ze } = I;
      let ye = H[J - 1] ?? 0;
      return J === 2 && (ye += o(ue) ? 1 : 0), {
        month: ze,
        monthShort: pe,
        monthNumber: J,
        year: ue,
        numberOfDays: ye,
        getDay: (we) => w(new Date(ue, J - 1, we))
      };
    }, m = () => {
      const d = w(void 0), { year: I, monthNumber: H } = d, J = h(new Date(I, H - 1)), ue = Array.from({ length: 12 }, (ne, le) => h(new Date(I, le))), pe = Array.from({ length: 7 });
      pe.forEach((ne, le) => {
        const ve = J.getDay(le - (e.weekStart === "Monday" ? 1 : 2));
        pe.includes(ve.dayShort) || (pe[le] = ve.dayShort);
      });
      const ze = () => B.value.month.monthNumber === 1 ? h(new Date(B.value.year - 1, 11)) : h(
        new Date(B.value.year, B.value.month.monthNumber - 2)
      ), ye = () => B.value.month.monthNumber === 12 ? h(new Date(B.value.year + 1, 0)) : h(new Date(B.value.year, B.value.month.monthNumber)), be = (ne, le) => {
        B.value.month = h(new Date(le, ne - 1)), B.value.year = le;
      }, we = () => {
        B.value.year += 1, B.value.month = h(new Date(I, 0));
      }, T = () => {
        B.value.year -= 1, B.value.month = h(new Date(I, 11));
      }, D = () => {
        if (B.value.month.monthNumber === 12)
          return we();
        B.value.month = h(
          new Date(B.value.year, B.value.month.monthNumber)
        );
      }, W = () => {
        if (B.value.month.monthNumber === 1)
          return T();
        B.value.month = h(
          new Date(B.value.year, B.value.month.monthNumber - 2)
        );
      }, K = () => {
        const ne = B.value.month.getDay(1), le = ze(), ve = ye(), _e = ne.dayNumber - 1 >= 0 ? ne.dayNumber - 1 : 6, he = B.value.month.numberOfDays + _e, ge = Array.from({ length: he });
        for (let re = _e; re < he; re++)
          ge[re] = B.value.month.getDay(re + 1 - _e);
        for (let re = 0; re < _e; re++) {
          const Nt = _e - (re + 1);
          ge[re] = le.getDay(le.numberOfDays - Nt);
        }
        const et = he % 7 > 0 ? 7 - he % 7 : 0;
        for (let re = 0; re < et; re++)
          ge[he + re] = ve.getDay(re + 1);
        return ge;
      }, G = Array.from(
        { length: e.maxYear - e.minYear + 1 },
        (ne, le) => e.minYear + le
      );
      return {
        today: d,
        year: I,
        years: G,
        month: J,
        months: ue,
        weekDays: pe,
        goToNextMonth: D,
        goToPreviousMonth: W,
        getMonthDays: K,
        goToDate: be
      };
    }, o = (d) => d % 100 === 0 ? d % 400 === 0 : d % 4 === 0, S = A(() => B.value.getMonthDays()), B = P(m()), U = (d, I) => d?.currentDate === I?.currentDate && d?.monthNumber === I?.monthNumber && d?.year === I?.year, te = (d, I) => I.start && I.end && d.timestamp > I.start?.timestamp && d.timestamp < I.end?.timestamp, z = (d, I) => {
      if (e.type === "single") {
        a.value.start = d;
        const [H = 0, J = 0] = c.value.split(":").map(Number);
        if (e.enableTime && !isNaN(H) && !isNaN(J)) {
          const ue = d.date;
          ue.setHours(H, J, 0, 0), l("update:modelValue", ue);
        } else
          l("update:modelValue", d.date);
        l("update:start", new Date(d.year, d.monthNumber - 1, d.currentDate, 0, 0)), l("update:end", new Date(d.year, d.monthNumber - 1, d.currentDate, 23, 59));
      } else I.end ? v.value = !v.value : I.start ? i.value = !i.value : a.value.start && d?.timestamp > a.value.start?.timestamp ? (v.value = !1, i.value = !1, a.value.end = d, r.value.end = d, l("update:end", d.date)) : (a.value.start = d, r.value.start = d, i.value = !1, v.value = !1, l("update:start", d.date));
      B.value.goToDate(d?.monthNumber, d?.year);
    }, R = () => {
      l("confirm");
    }, j = (d) => {
      e.type === "single" || !a.value.start || (d?.timestamp > a.value.start?.timestamp && v.value ? a.value.end = d : d?.timestamp < a.value.start?.timestamp && !a.value.end ? (a.value.end = a.value.start, a.value.start = d) : i.value && (a.value.start = d));
    }, ie = (d) => {
      e.type === "single" || !a.value.start || (a.value.end?.timestamp === d.timestamp ? a.value.end = r.value.end : a.value.start?.timestamp === d.timestamp && (a.value.start = r.value.start));
    };
    return oe(
      () => e.start,
      () => {
        e.start && (a.value.start = w(e.start), r.value.start = w(e.start));
      },
      {
        immediate: !0
      }
    ), oe(
      () => e.end,
      () => {
        e.end && (a.value.end = w(e.end), r.value.end = w(e.end));
      },
      {
        immediate: !0
      }
    ), oe(
      () => e.modelValue,
      () => {
        if (e.modelValue) {
          a.value.start = w(e.modelValue);
          let d = e.modelValue.getHours(), I = e.modelValue.getMinutes();
          I < 10 && (I = `0${I}`), d < 10 && (d = `0${d}`), c.value = `${d}:${I}`;
        }
      },
      {
        immediate: !0
      }
    ), oe(
      c,
      (d) => {
        if (d && /([01]?[0-9]|2[0-3]):[0-5][0-9]/.test(d)) {
          const [I = 0, H = 0] = d.split(":").map(Number);
          if (!isNaN(I) && !isNaN(H)) {
            const J = a.value.start?.date ? new Date(a.value.start.date) : /* @__PURE__ */ new Date();
            J.setHours(I, H, 0, 0), l("update:modelValue", J);
          }
        }
      }
    ), (d, I) => (_(), X(fe, {
      class: s([d.$style["date-picker"], d.$style.wrapper, d.$style.flex, d.$style.vertical]),
      radius: "var(--agh-ref-border-radius-500)"
    }, {
      default: E(() => [
        f("header", {
          class: s([d.$style.wrapper, d.$style.flex, d.$style.horizontal])
        }, [
          O(ae, {
            onClick: B.value.goToPreviousMonth,
            class: s(d.$style.button),
            icon: "fa6-solid:angle-left",
            variant: "text"
          }, null, 8, ["onClick", "class"]),
          f("div", {
            class: s([d.$style.label, d.$style.wrapper, d.$style.flex, d.$style.horizontal])
          }, [
            f("div", {
              class: s([d.$style.item, d.$style.wrapper, d.$style.flex, d.$style.horizontal])
            }, [
              O(ae, {
                onClick: I[0] || (I[0] = (H) => b("year")),
                class: s([d.$style.select, y.value === "year" && d.$style.selected]),
                icon: `fa6-solid:angle-${y.value === "year" ? "up" : "down"}`,
                label: String(B.value.year),
                variant: "text"
              }, null, 8, ["class", "icon", "label"])
            ], 2),
            f("div", {
              class: s([d.$style.item, d.$style.wrapper, d.$style.flex, d.$style.horizontal])
            }, [
              O(ae, {
                onClick: I[1] || (I[1] = (H) => b("month")),
                class: s([d.$style.select, y.value === "month" && d.$style.selected]),
                icon: `fa6-solid:angle-${y.value === "month" ? "up" : "down"}`,
                label: B.value.month.monthShort,
                variant: "text"
              }, null, 8, ["class", "icon", "label"])
            ], 2)
          ], 2),
          O(ae, {
            onClick: B.value.goToNextMonth,
            class: s(d.$style.button),
            icon: "fa6-solid:angle-right",
            variant: "text"
          }, null, 8, ["onClick", "class"])
        ], 2),
        y.value ? y.value === "month" ? (_(), $("div", {
          key: 1,
          class: s([d.$style["month-list"], d.$style.wrapper, d.$style.flex, d.$style.vertical])
        }, [
          (_(!0), $(V, null, F(B.value.months, (H) => (_(), X(ae, {
            key: H.month,
            onClick: (J) => k.value = H.monthNumber,
            class: s([
              d.$style.item,
              d.$style.wrapper,
              d.$style.flex,
              d.$style.horizontal,
              H.monthNumber === k.value && d.$style["item-active"]
            ]),
            label: H.month,
            variant: "text"
          }, null, 8, ["onClick", "class", "label"]))), 128))
        ], 2)) : y.value === "year" ? (_(), $("div", {
          key: 2,
          class: s(d.$style["years-grid"])
        }, [
          (_(!0), $(V, null, F(B.value.years, (H) => (_(), $("div", {
            key: H,
            class: s([d.$style.container, d.$style.wrapper, d.$style.flex, d.$style.horizontal])
          }, [
            O(ae, {
              onClick: (J) => p.value = H,
              class: s([
                d.$style.item,
                d.$style.wrapper,
                d.$style.flex,
                d.$style.horizontal,
                H === p.value && d.$style["item-active"]
              ]),
              label: String(H),
              variant: "text"
            }, null, 8, ["onClick", "class", "label"])
          ], 2))), 128))
        ], 2)) : L("", !0) : (_(), $(V, { key: 0 }, [
          f("div", {
            class: s(d.$style.calendar)
          }, [
            f("div", {
              class: s(d.$style.week)
            }, [
              (_(!0), $(V, null, F(B.value.weekDays, (H) => (_(), $("p", { key: H }, N(H), 1))), 128))
            ], 2),
            f("div", {
              class: s(d.$style["days-grid"])
            }, [
              (_(!0), $(V, null, F(S.value, (H) => (_(), $("div", {
                key: H?.timestamp,
                onMouseout: () => ie(H),
                onMouseover: () => j(H),
                class: s([
                  d.$style.item,
                  d.$style.wrapper,
                  d.$style.flex,
                  d.$style.vertical,
                  n.type === "multiple" && a.value.start && a.value.end && a.value.start?.timestamp !== a.value.end.timestamp && U(H, a.value.start) && d.$style["item-start"],
                  n.type === "multiple" && a.value.end && a.value.start?.timestamp !== a.value.end.timestamp && U(H, a.value.end) && d.$style["item-end"],
                  n.type === "multiple" && te(H, a.value) && d.$style["item-duration"]
                ])
              }, [
                O(ae, {
                  onClick: () => z(H, {
                    start: r.value.start ? U(H, r.value.start) : !1,
                    end: r.value.end ? U(H, r.value.end) : !1
                  }),
                  class: s([
                    d.$style.day,
                    H.monthNumber === B.value.month.monthNumber && d.$style["day-current"],
                    a.value.start && U(H, a.value.start) && d.$style["day-start"],
                    n.type === "multiple" && a.value.end && U(H, a.value.end) && d.$style["day-end"],
                    a.value.start && U(H, a.value.start) && n.type === "multiple" && d.$style["day-start"],
                    U(H, w()) && d.$style["day-today"]
                  ]),
                  label: String(H?.currentDate),
                  variant: "text"
                }, null, 8, ["onClick", "class", "label"])
              ], 42, Vo))), 128))
            ], 2)
          ], 2),
          n.enableTime && n.type === "single" ? (_(), $("div", {
            key: 0,
            class: s([d.$style.time, d.$style.wrapper, d.$style.flex, d.$style.horizontal])
          }, [
            f("div", {
              class: s([d.$style["label-container"], d.$style.wrapper, d.$style.flex, d.$style.horizontal])
            }, [
              f("p", {
                class: s(d.$style.label)
              }, " Time ", 2),
              f("p", {
                class: s(d.$style.description)
              }, " 24-hour format ", 2)
            ], 2),
            O(Ue, {
              modelValue: c.value,
              "onUpdate:modelValue": I[2] || (I[2] = (H) => c.value = H),
              class: s(d.$style.input),
              "invalid-message": {
                patternMismatch: "Invalid time format. Use HH:MM (24-hour format)."
              },
              pattern: "([01]?[0-9]|2[0-3]):[0-5][0-9]",
              placeholder: "Enter Time"
            }, null, 8, ["modelValue", "class"])
          ], 2)) : n.type === "multiple" && a.value.start ? (_(), $("div", {
            key: 1,
            class: s(d.$style["time-multiple"])
          }, [
            f("p", {
              class: s(d.$style.description)
            }, N(`Selected Date: ${u(me)(
              { start: a.value.start?.date },
              "{{ start | date : yyyy/MM/dd }}"
            )}${a.value.end ? ` - ${u(me)({ end: a.value.end?.date }, "{{ end | date : yyyy/MM/dd }}")}` : ""}`), 3)
          ], 2)) : L("", !0)
        ], 64)),
        y.value ? (_(), $("div", {
          key: 4,
          class: s([d.$style.footer, d.$style.wrapper, d.$style.flex, d.$style.horizontal])
        }, [
          O(ae, {
            onClick: C,
            class: s(d.$style.button),
            label: "Cancel",
            level: "secondary",
            variant: "rect"
          }, null, 8, ["class"]),
          O(ae, {
            onClick: g,
            class: s(d.$style.button),
            label: "Confirm",
            variant: "rect"
          }, null, 8, ["class"])
        ], 2)) : (_(), $("div", {
          key: 3,
          class: s([d.$style.footer, d.$style.wrapper, d.$style.flex, d.$style.horizontal])
        }, [
          O(ae, {
            onClick: R,
            class: s(d.$style.button),
            label: "Confirm",
            variant: "rect"
          }, null, 8, ["class"])
        ], 2))
      ]),
      _: 1
    }, 8, ["class"]));
  }
}), Ho = "_wrapper_1mhvz_1", No = "_flex_1mhvz_12", Io = "_horizontal_1mhvz_48", Ro = "_wrap_1mhvz_1", qo = "_vertical_1mhvz_60", Lo = "_grid_1mhvz_72", Po = "_button_1mhvz_90", Eo = "_label_1mhvz_98", Fo = "_item_1mhvz_104", Uo = "_select_1mhvz_108", xo = "_selected_1mhvz_109", Wo = "_icon_1mhvz_119", Zo = "_calendar_1mhvz_122", Go = "_week_1mhvz_125", Yo = "_day_1mhvz_136", Ko = "_container_1mhvz_280", Xo = "_time_1mhvz_298", Qo = "_description_1mhvz_311", Jo = "_footer_1mhvz_322", en = {
  wrapper: Ho,
  flex: No,
  "col-1": "_col-1_1mhvz_12",
  "col-2": "_col-2_1mhvz_15",
  "col-3": "_col-3_1mhvz_18",
  "col-4": "_col-4_1mhvz_21",
  "col-5": "_col-5_1mhvz_24",
  "col-6": "_col-6_1mhvz_27",
  "col-7": "_col-7_1mhvz_30",
  "col-8": "_col-8_1mhvz_33",
  "col-9": "_col-9_1mhvz_36",
  "col-10": "_col-10_1mhvz_39",
  "col-11": "_col-11_1mhvz_42",
  "col-12": "_col-12_1mhvz_45",
  horizontal: Io,
  wrap: Ro,
  vertical: qo,
  grid: Lo,
  "date-picker": "_date-picker_1mhvz_78",
  button: Po,
  label: Eo,
  item: Fo,
  select: Uo,
  selected: xo,
  icon: Wo,
  calendar: Zo,
  week: Go,
  "days-grid": "_days-grid_1mhvz_136",
  "item-duration": "_item-duration_1mhvz_147",
  "item-start": "_item-start_1mhvz_157",
  "item-end": "_item-end_1mhvz_167",
  day: Yo,
  "day-current": "_day-current_1mhvz_184",
  "day-today": "_day-today_1mhvz_187",
  "day-selected": "_day-selected_1mhvz_195",
  "day-start": "_day-start_1mhvz_199",
  "day-end": "_day-end_1mhvz_203",
  "month-list": "_month-list_1mhvz_207",
  "item-active": "_item-active_1mhvz_247",
  "years-grid": "_years-grid_1mhvz_251",
  container: Ko,
  time: Xo,
  "label-container": "_label-container_1mhvz_307",
  description: Qo,
  "time-multiple": "_time-multiple_1mhvz_315",
  footer: Jo
}, tn = {
  $style: en
}, Eu = /* @__PURE__ */ Y(Oo, [["__cssModules", tn], ["__scopeId", "data-v-35852e98"]]);
function Ne(n) {
  var t;
  const e = qe(n);
  return (t = e?.$el) != null ? t : e;
}
const Ot = wl ? window : void 0;
function Ye(...n) {
  let t, e, l, a;
  if (typeof n[0] == "string" || Array.isArray(n[0]) ? ([e, l, a] = n, t = Ot) : [t, e, l, a] = n, !t)
    return Ge;
  Array.isArray(e) || (e = [e]), Array.isArray(l) || (l = [l]);
  const r = [], i = () => {
    r.forEach((b) => b()), r.length = 0;
  }, v = (b, p, k, g) => (b.addEventListener(p, k, g), () => b.removeEventListener(p, k, g)), c = oe(
    () => [Ne(t), qe(a)],
    ([b, p]) => {
      if (i(), !b)
        return;
      const k = kl(p) ? { ...p } : p;
      r.push(
        ...e.flatMap((g) => l.map((C) => v(b, g, C, k)))
      );
    },
    { immediate: !0, flush: "post" }
  ), y = () => {
    c(), i();
  };
  return At(y), y;
}
let $t = !1;
function bt(n, t, e = {}) {
  const { window: l = Ot, ignore: a = [], capture: r = !0, detectIframe: i = !1 } = e;
  if (!l)
    return Ge;
  ct && !$t && ($t = !0, Array.from(l.document.body.children).forEach((k) => k.addEventListener("click", Ge)), l.document.documentElement.addEventListener("click", Ge));
  let v = !0;
  const c = (k) => a.some((g) => {
    if (typeof g == "string")
      return Array.from(l.document.querySelectorAll(g)).some((C) => C === k.target || k.composedPath().includes(C));
    {
      const C = Ne(g);
      return C && (k.target === C || k.composedPath().includes(C));
    }
  }), b = [
    Ye(l, "click", (k) => {
      const g = Ne(n);
      if (!(!g || g === k.target || k.composedPath().includes(g))) {
        if (k.detail === 0 && (v = !c(k)), !v) {
          v = !0;
          return;
        }
        t(k);
      }
    }, { passive: !0, capture: r }),
    Ye(l, "pointerdown", (k) => {
      const g = Ne(n);
      v = !c(k) && !!(g && !k.composedPath().includes(g));
    }, { passive: !0 }),
    i && Ye(l, "blur", (k) => {
      setTimeout(() => {
        var g;
        const C = Ne(n);
        ((g = l.document.activeElement) == null ? void 0 : g.tagName) === "IFRAME" && !C?.contains(l.document.activeElement) && t(k);
      }, 0);
    })
  ].filter(Boolean);
  return () => b.forEach((k) => k());
}
const ut = {
  [ht.mounted](n, t) {
    const e = !t.modifiers.bubble;
    if (typeof t.value == "function")
      n.__onClickOutside_stop = bt(n, t.value, { capture: e });
    else {
      const [l, a] = t.value;
      n.__onClickOutside_stop = bt(n, l, Object.assign({ capture: e }, a));
    }
  },
  [ht.unmounted](n) {
    n.__onClickOutside_stop();
  }
};
function ot(n) {
  return typeof Window < "u" && n instanceof Window ? n.document.documentElement : typeof Document < "u" && n instanceof Document ? n.documentElement : n;
}
function Ht(n) {
  const t = window.getComputedStyle(n);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && n.clientWidth < n.scrollWidth || t.overflowY === "auto" && n.clientHeight < n.scrollHeight)
    return !0;
  {
    const e = n.parentNode;
    return !e || e.tagName === "BODY" ? !1 : Ht(e);
  }
}
function ln(n) {
  const t = n || window.event, e = t.target;
  return Ht(e) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.preventDefault(), !1);
}
const nt = /* @__PURE__ */ new WeakMap();
function an(n, t = !1) {
  const e = P(t);
  let l = null, a = "";
  oe(Sl(n), (v) => {
    const c = ot(qe(v));
    if (c) {
      const y = c;
      if (nt.get(y) || nt.set(y, y.style.overflow), y.style.overflow !== "hidden" && (a = y.style.overflow), y.style.overflow === "hidden")
        return e.value = !0;
      if (e.value)
        return y.style.overflow = "hidden";
    }
  }, {
    immediate: !0
  });
  const r = () => {
    const v = ot(qe(n));
    !v || e.value || (ct && (l = Ye(
      v,
      "touchmove",
      (c) => {
        ln(c);
      },
      { passive: !1 }
    )), v.style.overflow = "hidden", e.value = !0);
  }, i = () => {
    const v = ot(qe(n));
    !v || !e.value || (ct && l?.(), v.style.overflow = a, nt.delete(v), e.value = !1);
  };
  return At(i), A({
    get() {
      return e.value;
    },
    set(v) {
      v ? r() : i();
    }
  });
}
function sn() {
  let n = !1;
  const t = P(!1);
  return (e, l) => {
    if (t.value = l.value, n)
      return;
    n = !0;
    const a = an(e, l.value);
    oe(t, (r) => a.value = r);
  };
}
sn();
const on = ["onClick"], nn = /* @__PURE__ */ Z({
  __name: "SelectMenu",
  props: /* @__PURE__ */ Ve({
    fields: {},
    groupBy: { type: [Function, String] },
    label: {},
    alterStr: {},
    clearable: { type: Boolean },
    useSearch: { type: Boolean },
    showAll: { type: Boolean },
    query: {},
    caseSensitive: { type: Boolean },
    limit: {},
    sortBy: {},
    phraseSearch: { type: Boolean },
    strict: { type: Boolean },
    segmentPattern: {},
    relevanceSearch: { type: Boolean },
    relevancePolicy: {},
    threshold: {},
    options: {},
    modelValue: {},
    multiple: { type: Boolean }
  }, {
    modelValue: {
      required: !0
    },
    modelModifiers: {},
    query: {
      default: ""
    },
    queryModifiers: {}
  }),
  emits: ["update:modelValue", "update:query"],
  setup(n, { expose: t }) {
    const e = $e(), l = n, a = Me(n, "modelValue"), r = Me(n, "query"), i = P(), v = A(
      () => new Ce(
        Array.isArray(l.options) ? l.options.map((o, S) => [S, o]) : l.options
      )
    ), c = A(
      () => l.multiple ? new Ce(
        Array.isArray(a.value) ? new Map(a.value.map((o, S) => [S, o])) : a.value instanceof Map ? new Map(a.value) : /* @__PURE__ */ new Map()
      ).map((o) => [w(o).key, v]) : w(a.value).key
    ), { result: y, reset: b } = Tt(v, {
      query: r,
      getters: l.fields?.searchKeys ?? (l.fields?.key ?? l.fields?.title ? [l.fields?.key ?? "", l.fields?.title ?? ""].filter(Boolean) : [(o) => String(o)]),
      options: l.useSearch ? {
        caseSensitive: l.caseSensitive,
        phraseSearch: l.phraseSearch,
        strict: l.strict,
        segmentPattern: l.segmentPattern,
        relevanceSearch: l.relevanceSearch,
        threshold: l.threshold,
        sortBy: l.sortBy,
        limit: l.limit
      } : void 0
    }), p = A(
      () => v.value.map((o, S) => [
        S,
        {
          payload: o,
          field: w(o)
        }
      ]).map(({ payload: o, field: S }, B) => [
        B,
        {
          payload: o,
          field: S,
          get selected() {
            return l.multiple && c.value instanceof Map ? c.value.has(S.key) : c.value === S.key;
          },
          get matched() {
            return y.value.has(B);
          }
        }
      ])
    ), k = A(
      () => dt(
        p.value.filter(({ matched: o }) => l.useSearch && l.showAll || o).toArray("entries"),
        "[1].field.group"
      )
    ), g = se(!1), C = () => {
      if (i.value) {
        const { scrollHeight: o, clientHeight: S } = i.value;
        g.set(o > S + 1);
      }
    }, M = () => {
      l.multiple ? a.value = Array.isArray(l.options) ? [] : /* @__PURE__ */ new Map() : a.value = void 0;
    }, w = (o) => ({
      ...Object.fromEntries(
        Object.entries($l(l.fields, ["key", "searchKeys", "disabled"])).map(([S, B]) => [
          S,
          Be(o, B, !0)
        ])
      ),
      key: l.fields?.key ? Be(o, l.fields.key) : String(o),
      group: l.groupBy ? Be(o, l.groupBy, !0) ?? "" : "",
      disabled: l.fields?.disabled && (gl(o, l.fields.disabled, !0) ?? !1) || !1
    }), h = (o, S) => {
      l.multiple ? S.field.disabled || (l.options instanceof Map ? S.selected ? a.value.delete(S.field.key) : a.value.set(o, S.payload) : S.selected ? a.value = p.value.filter((B, U) => o !== U && B.selected).toArray("values").map(({ payload: B }) => B) : a.value = p.value.filter((B, U) => o === U || B.selected).toArray("values").map(({ payload: B }) => B)) : S.field.disabled || (a.value = S.payload);
    }, m = () => {
      b(), M();
    };
    return He(i, C, {
      window
    }), Ae(() => {
      C();
    }), t({
      reset: m,
      clearSearch: b,
      clearSelection: M
    }), (o, S) => (_(), X(fe, {
      class: s([
        o.$style["menu-container"],
        o.$style.wrapper,
        o.$style.flex,
        o.$style.vertical,
        l.groupBy && o.$style.classify
      ]),
      radius: "var(--agh-ref-border-radius-500)"
    }, {
      default: E(() => [
        l.label || l.multiple || l.useSearch || e.header ? (_(), $("header", {
          key: 0,
          class: s([
            o.$style["menu-header"],
            o.$style.wrapper,
            o.$style.flex,
            o.$style.horizontal,
            o.$style.wrap
          ])
        }, [
          x(o.$slots, "header", {
            clearSelection: M,
            label: l.label,
            multiple: l.multiple,
            result: u(y),
            searchQuery: r.value,
            selection: a.value,
            useSearch: l.useSearch
          }, () => [
            l.label || l.multiple ? (_(), $(V, { key: 0 }, [
              f("h1", {
                class: s(o.$style.title)
              }, N(l.label), 3),
              l.multiple || l.clearable ? x(o.$slots, "clear-selection", {
                key: 0,
                clearSelection: M
              }, () => [
                O(ae, {
                  onClick: M,
                  class: s(o.$style.button),
                  icon: "fa6-solid:eraser",
                  label: l.alterStr?.clearSelection || "Clear Selection",
                  variant: "text"
                }, null, 8, ["class", "label"])
              ], !0) : L("", !0)
            ], 64)) : L("", !0),
            l.useSearch ? (_(), X(Ue, {
              key: 1,
              modelValue: r.value,
              "onUpdate:modelValue": S[0] || (S[0] = (B) => r.value = B),
              class: s(o.$style["menu-search"]),
              inputmode: "search",
              type: "search"
            }, null, 8, ["modelValue", "class"])) : L("", !0)
          ], !0)
        ], 2)) : L("", !0),
        f("div", {
          ref_key: "wrapperRef$",
          ref: i,
          class: s([
            o.$style["menu-wrapper"],
            o.$style.wrapper,
            o.$style.flex,
            o.$style.vertical,
            u(g)() && o.$style.overflowed
          ])
        }, [
          (_(!0), $(V, null, F(k.value, (B, U) => (_(), $("div", {
            key: U,
            class: s([
              o.$style["menu-group"],
              o.$style.wrapper,
              o.$style.flex,
              o.$style.vertical,
              l.groupBy && o.$style.classify
            ])
          }, [
            l.groupBy && U ? (_(), $("label", {
              key: 0,
              class: s(o.$style["menu-group-label"])
            }, N(U), 3)) : L("", !0),
            (_(!0), $(V, null, F(B, ([te, { selected: z, matched: R, field: j, payload: ie }]) => (_(), $(V, {
              key: `option-${j.key}`
            }, [
              R ? (_(), $("div", {
                key: 0,
                onClick: (d) => !j.disabled && h(te, { selected: z, field: j, payload: ie }),
                class: s([
                  o.$style["menu-option"],
                  o.$style.wrapper,
                  o.$style.flex,
                  o.$style.horizontal,
                  o.$style.behavior,
                  j.disabled ? [o.$style.disabled] : o.$style.clickable,
                  z && o.$style.selected,
                  l.multiple && o.$style.multiple
                ])
              }, [
                x(o.$slots, "default", {
                  clearSelection: M,
                  index: te,
                  multiple: l.multiple,
                  option: { selected: z, matched: R, field: j, payload: ie }
                }, () => [
                  l.multiple ? (_(), X(u(de), {
                    key: 0,
                    class: s(o.$style["menu-option-icon"]),
                    icon: z ? "fa6-solid:square-check" : "fa6-regular:square"
                  }, null, 8, ["class", "icon"])) : L("", !0),
                  l.fields?.icon ? (_(), X(u(de), {
                    key: 1,
                    class: s(o.$style["menu-option-icon"]),
                    icon: j.icon ?? ""
                  }, null, 8, ["class", "icon"])) : L("", !0),
                  f("div", {
                    class: s(o.$style["menu-option-group"])
                  }, [
                    f("p", {
                      class: s(o.$style["menu-field"])
                    }, N(j.title || j.key), 3),
                    j.content ? (_(), $("p", {
                      key: 0,
                      class: s(o.$style["menu-field"])
                    }, N(j.content), 3)) : L("", !0)
                  ], 2)
                ], !0)
              ], 10, on)) : L("", !0)
            ], 64))), 128)),
            f("div", {
              class: s(o.$style["menu-group-placeholder"])
            }, [
              x(o.$slots, "no-match-placeholder", { groupName: U }, () => [
                f("p", null, N(l.alterStr?.noMatched || "No Matched Data"), 1)
              ], !0)
            ], 2)
          ], 2))), 128))
        ], 2),
        v.value.size === 0 ? (_(), $("div", {
          key: 1,
          class: s(o.$style["menu-placeholder"])
        }, [
          x(o.$slots, "empty-placeholder", {}, () => [
            f("p", null, N(l.alterStr?.noData || "No Data"), 1)
          ], !0)
        ], 2)) : l.useSearch && !l.showAll && u(y).size === 0 ? (_(), $("div", {
          key: 2,
          class: s(o.$style["menu-placeholder"])
        }, [
          x(o.$slots, "no-match-placeholder", {}, () => [
            f("p", null, N(l.alterStr?.noMatched || "No Matched Data"), 1)
          ], !0)
        ], 2)) : L("", !0),
        x(o.$slots, "footer", {
          clearSelection: M,
          label: l.label,
          multiple: l.multiple,
          result: u(y),
          searchQuery: r.value,
          selection: a.value,
          useSearch: l.useSearch
        }, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), rn = "_wrapper_cvtn7_1", cn = "_flex_cvtn7_12", un = "_horizontal_cvtn7_48", dn = "_wrap_cvtn7_1", _n = "_vertical_cvtn7_60", pn = "_grid_cvtn7_72", vn = "_behavior_cvtn7_78", fn = "_clickable_cvtn7_78", mn = "_disabled_cvtn7_81", yn = "_draggable_cvtn7_84", hn = "_move_cvtn7_84", gn = "_loading_cvtn7_87", $n = "_classify_cvtn7_95", bn = "_title_cvtn7_111", wn = "_button_cvtn7_137", kn = "_overflowed_cvtn7_178", Sn = "_selected_cvtn7_201", zn = "_hover_cvtn7_201", Mn = "_multiple_cvtn7_209", Bn = {
  wrapper: rn,
  flex: cn,
  "col-1": "_col-1_cvtn7_12",
  "col-2": "_col-2_cvtn7_15",
  "col-3": "_col-3_cvtn7_18",
  "col-4": "_col-4_cvtn7_21",
  "col-5": "_col-5_cvtn7_24",
  "col-6": "_col-6_cvtn7_27",
  "col-7": "_col-7_cvtn7_30",
  "col-8": "_col-8_cvtn7_33",
  "col-9": "_col-9_cvtn7_36",
  "col-10": "_col-10_cvtn7_39",
  "col-11": "_col-11_cvtn7_42",
  "col-12": "_col-12_cvtn7_45",
  horizontal: un,
  wrap: dn,
  vertical: _n,
  grid: pn,
  behavior: vn,
  clickable: fn,
  disabled: mn,
  draggable: yn,
  move: hn,
  loading: gn,
  "menu-container": "_menu-container_cvtn7_91",
  "menu-search": "_menu-search_cvtn7_95",
  classify: $n,
  "menu-header": "_menu-header_cvtn7_111",
  title: bn,
  button: wn,
  "menu-placeholder": "_menu-placeholder_cvtn7_148",
  "menu-wrapper": "_menu-wrapper_cvtn7_153",
  overflowed: kn,
  "menu-option": "_menu-option_cvtn7_188",
  "menu-group-placeholder": "_menu-group-placeholder_cvtn7_195",
  selected: Sn,
  hover: zn,
  multiple: Mn,
  "menu-field": "_menu-field_cvtn7_212",
  "menu-option-group": "_menu-option-group_cvtn7_218",
  "menu-group": "_menu-group_cvtn7_195",
  "menu-group-label": "_menu-group-label_cvtn7_249"
}, Cn = {
  $style: Bn
}, Qe = /* @__PURE__ */ Y(nn, [["__cssModules", Cn], ["__scopeId", "data-v-62e98c8a"]]), Tn = /* @__PURE__ */ Z({
  __name: "DropDown",
  props: /* @__PURE__ */ Ve({
    level: { default: "primary" },
    size: { default: "medium" },
    variant: { default: "rounded" },
    placeholder: {},
    disabled: { type: Boolean },
    fields: {},
    groupBy: {},
    label: {},
    persist: { type: Boolean },
    alterStr: {},
    labelShowAs: { default: "auto" },
    menuPosition: { default: "bottom-right" },
    clearable: { type: Boolean },
    useSearch: { type: Boolean },
    showAll: { type: Boolean },
    query: {},
    caseSensitive: { type: Boolean },
    limit: {},
    sortBy: {},
    phraseSearch: { type: Boolean },
    strict: { type: Boolean },
    segmentPattern: {},
    relevanceSearch: { type: Boolean },
    relevancePolicy: {},
    threshold: {},
    useCreate: { type: Boolean },
    createPlaceholder: {},
    type: {},
    createInProgress: { type: Boolean },
    autocomplete: {},
    autofocus: { type: Boolean },
    maxlength: {},
    minlength: {},
    min: {},
    max: {},
    pattern: {},
    step: {},
    spellcheck: { type: Boolean },
    tabindex: {},
    inputmode: {},
    invalidMessage: {},
    eventSignalOptions: {},
    iconAlign: {},
    iconClick: {},
    options: {},
    modelValue: {},
    multiple: { type: Boolean, default: !1 }
  }, {
    modelValue: {
      required: !0
    },
    modelModifiers: {},
    query: {
      default: ""
    },
    queryModifiers: {},
    newOptionValue: {
      default: ""
    },
    newOptionValueModifiers: {}
  }),
  emits: /* @__PURE__ */ Ve(["create"], ["update:modelValue", "update:query", "update:newOptionValue"]),
  setup(n, { expose: t, emit: e }) {
    const l = $e(), a = n, r = e, i = Me(n, "modelValue"), v = Me(n, "query"), c = Me(n, "newOptionValue"), y = P(), b = P(), p = P(), k = se(!1), g = se(!1), C = se(!1), M = A(
      () => a.multiple && i.value ? Array.isArray(i.value) ? i.value.length : i.value instanceof Map ? i.value.size : !1 : !1
    );
    A(
      () => Array.isArray(a.options) ? a.options.length : a.options instanceof Map ? a.options.size : 0
    );
    const w = A(
      () => a.labelShowAs === "icon" ? void 0 : (a.labelShowAs !== "auto" ? a[a.labelShowAs] : void 0) || (a.multiple ? (M.value || 0) > 0 ? a.label ?? a.placeholder : a.placeholder ?? a.label : (a.modelValue && (a.fields?.title ? Be(a.modelValue, a.fields.title, !0) : a.fields?.key ? Be(a.modelValue, a.fields.key, !0) : String(a.modelValue))) ?? a.label ?? a.placeholder)
    ), h = A(
      () => ((a.variant.includes("square") || a.labelShowAs === "icon") && !a.multiple && i.value && a.modelValue && a.fields?.icon ? Be(a.modelValue, a.fields.icon, !0) : void 0) || (k() ? "fa6-solid:chevron-up" : "fa6-solid:chevron-down")
    ), m = () => {
      y.value?.clearSearch(), v.value = "";
    }, o = () => {
      y.value?.clearSelection(), i.value = a.multiple ? [] : void 0;
    }, S = () => {
      m(), o();
    }, B = () => {
      a.useCreate && !C() ? (k.set(!1), g.set(!1), c.value = "") : k.set(!1);
    }, U = () => {
      p.value?.valid && c.value !== "" && (C.set(!0), r(
        "create",
        c.value,
        // onFinish
        (z) => {
          S(), k.set(!1), g.set(!1), C.set(!1), c.value = "", i.value = z;
        },
        // onError
        () => {
          C.set(!1), setTimeout(() => {
            b.value?.inputRef$?.focus(), b.value?.inputRef$?.dispatchEvent(
              new Event("input", {
                bubbles: !0
              })
            );
          }, 100);
        }
      ));
    }, te = (z) => {
      p.value = z;
    };
    return oe([i, () => a.multiple], ([z, R]) => {
      !R && z && k.set(!1);
    }), oe(k, (z) => {
      z && !a.persist && m();
    }), oe(
      g,
      (z) => {
        z && (m(), k.set(!1), c.value = "", Promise.allSettled([
          Ie(),
          new Promise((R) => {
            setTimeout(() => {
              R();
            }, 100);
          })
        ]).finally(() => {
          k.set(!1), Ie(() => {
            b.value?.inputRef$?.focus();
          });
        }));
      },
      { immediate: !0, flush: "post" }
    ), oe(
      () => a.useCreate && a.createInProgress,
      (z) => {
        z !== void 0 && C.set(z);
      },
      {
        immediate: !0
      }
    ), t({
      reset: S,
      clearSearch: m,
      clearSelection: o,
      onShowMenu: k
    }), (z, R) => rt((_(), $("div", {
      class: s([
        z.$style["dropdown-container"],
        z.$style.wrapper,
        z.$style.behavior,
        z.$style.flex,
        z.$style[n.size],
        a.useCreate && z.$style.extend,
        a.useCreate && u(C)() && z.$style.loading,
        u(g)() ? z.$style.horizontal : z.$style.vertical
      ])
    }, [
      u(g)() && a.useCreate ? (_(), $(V, { key: 0 }, [
        O(Ue, ce(
          {
            ref_key: "textFieldRef$",
            ref: b,
            modelValue: c.value,
            "onUpdate:modelValue": R[0] || (R[0] = (j) => c.value = j)
          },
          u(Vt)(a, [
            "type",
            "autocomplete",
            "autofocus",
            "maxlength",
            "minlength",
            "pattern",
            "max",
            "min",
            "spellcheck",
            "invalidMessage"
          ]),
          {
            onKeydownCapture: je(U, ["enter"]),
            onKeydown: je(B, ["escape"]),
            onValidation: te,
            class: z.$style["dropdown-textfield"],
            disabled: a.disabled || u(C)(),
            "event-signal-options": a.eventSignalOptions ?? { flush: "sync", debounce: 100 },
            placeholder: a.createPlaceholder
          }
        ), null, 16, ["modelValue", "class", "disabled", "event-signal-options", "placeholder"]),
        f("div", {
          class: s([
            z.$style["dropdown-textfield-toolbox"],
            z.$style.wrapper,
            z.$style.flex,
            z.$style.horizontal
          ])
        }, [
          O(ae, {
            onClick: B,
            class: s(z.$style.button),
            disabled: u(C)(),
            icon: "fa6-solid:xmark",
            level: "secondary",
            size: "small",
            variant: "square"
          }, null, 8, ["class", "disabled"]),
          O(ae, {
            onClick: U,
            class: s(z.$style.button),
            clicked: u(C)(),
            disabled: p.value?.valid !== !0 || !c.value,
            icon: u(C)() ? "" : "fa6-solid:check",
            loading: u(C)(),
            size: "small",
            variant: "square"
          }, null, 8, ["class", "clicked", "disabled", "icon", "loading"])
        ], 2)
      ], 64)) : (_(), X(ae, {
        key: 1,
        onClick: R[1] || (R[1] = (j) => u(dl)(u(k))),
        bobble: M.value,
        class: s([z.$style["dropdown-button"], z.$style[n.size], z.$style[a.variant]]),
        clicked: u(k)(),
        disabled: a.disabled,
        icon: h.value,
        label: w.value,
        level: a.level,
        size: a.size,
        variant: a.variant
      }, null, 8, ["bobble", "class", "clicked", "disabled", "icon", "label", "level", "size", "variant"])),
      u(k)() ? (_(), X(Qe, {
        key: 2,
        ref_key: "selectMenuRef$",
        ref: y,
        modelValue: i.value,
        "onUpdate:modelValue": R[3] || (R[3] = (j) => i.value = j),
        query: v.value,
        "onUpdate:query": R[4] || (R[4] = (j) => v.value = j),
        "onSelect:fields": R[5] || (R[5] = (j) => z.selectedFields = j),
        "alter-str": a.alterStr,
        "case-sensitive": a.caseSensitive,
        class: s([z.$style["dropdown-menu"], z.$style[a.menuPosition]]),
        clearable: a.clearable,
        fields: a.fields,
        "group-by": a.groupBy,
        label: a.label,
        limit: a.limit,
        multiple: a.multiple,
        options: a.options,
        "phrase-search": a.phraseSearch,
        "relevant-search": a.relevantSearch,
        "segment-pattern": a.segmentPattern,
        "show-all": a.showAll,
        "sort-by": a.sortBy,
        strict: a.strict,
        threshold: a.threshold,
        "use-search": a.useSearch
      }, xt({ _: 2 }, [
        l["clear-selection"] ? {
          name: "clear-selection",
          fn: E(({ clearSelection: j }) => [
            x(z.$slots, "clear-selection", { clearSelection: j }, void 0, !0)
          ]),
          key: "0"
        } : void 0,
        l["empty-placeholder"] ? {
          name: "empty-placeholder",
          fn: E(({ groupName: j }) => [
            x(z.$slots, "empty-placeholder", { groupName: j }, void 0, !0)
          ]),
          key: "1"
        } : void 0,
        l["no-match-placeholder"] ? {
          name: "no-match-placeholder",
          fn: E(({ groupName: j }) => [
            x(z.$slots, "no-match-placeholder", { groupName: j }, void 0, !0)
          ]),
          key: "2"
        } : void 0,
        l.header ? {
          name: "header",
          fn: E(({ selection: j, multiple: ie, useSearch: d, searchQuery: I, result: H, label: J }) => [
            x(z.$slots, "header", {
              clearSelection: o,
              label: J,
              multiple: ie,
              result: H,
              searchQuery: I,
              selection: j,
              useSearch: d
            }, void 0, !0)
          ]),
          key: "3"
        } : void 0,
        l.default ? {
          name: "default",
          fn: E(({ index: j, multiple: ie, option: d }) => [
            x(z.$slots, "default", {
              clearSelection: o,
              index: j,
              multiple: ie,
              option: d
            }, void 0, !0)
          ]),
          key: "4"
        } : void 0,
        l.footer || a.useCreate ? {
          name: "footer",
          fn: E(({ selection: j, multiple: ie, useSearch: d, searchQuery: I, result: H, label: J }) => [
            x(z.$slots, "footer", {
              clearSelection: o,
              label: J,
              multiple: ie,
              result: H,
              searchQuery: I,
              selection: j,
              useSearch: d
            }, void 0, !0),
            a.useCreate ? (_(), X(ae, {
              key: 0,
              onClick: R[2] || (R[2] = (ue) => u(g).set(!0)),
              class: s([
                z.$style.button,
                u(g)() && z.$style.active
              ]),
              label: a.alterStr?.create || "Add New",
              icon: "fa6-solid:plus",
              variant: "text"
            }, null, 8, ["class", "label"])) : L("", !0)
          ]),
          key: "5"
        } : void 0
      ]), 1032, ["modelValue", "query", "alter-str", "case-sensitive", "class", "clearable", "fields", "group-by", "label", "limit", "multiple", "options", "phrase-search", "relevant-search", "segment-pattern", "show-all", "sort-by", "strict", "threshold", "use-search"])) : L("", !0)
    ], 2)), [
      [u(ut), B]
    ]);
  }
}), An = "_wrapper_1youd_1", Dn = "_flex_1youd_12", jn = "_horizontal_1youd_48", Vn = "_wrap_1youd_1", On = "_vertical_1youd_60", Hn = "_grid_1youd_72", Nn = "_behavior_1youd_78", In = "_clickable_1youd_78", Rn = "_disabled_1youd_81", qn = "_draggable_1youd_84", Ln = "_move_1youd_84", Pn = "_loading_1youd_87", En = "_large_1youd_97", Fn = "_extend_1youd_97", Un = "_rect_1youd_114", xn = "_button_1youd_145", Wn = "_active_1youd_156", Zn = {
  wrapper: An,
  flex: Dn,
  "col-1": "_col-1_1youd_12",
  "col-2": "_col-2_1youd_15",
  "col-3": "_col-3_1youd_18",
  "col-4": "_col-4_1youd_21",
  "col-5": "_col-5_1youd_24",
  "col-6": "_col-6_1youd_27",
  "col-7": "_col-7_1youd_30",
  "col-8": "_col-8_1youd_33",
  "col-9": "_col-9_1youd_36",
  "col-10": "_col-10_1youd_39",
  "col-11": "_col-11_1youd_42",
  "col-12": "_col-12_1youd_45",
  horizontal: jn,
  wrap: Vn,
  vertical: On,
  grid: Hn,
  behavior: Nn,
  clickable: In,
  disabled: Rn,
  draggable: qn,
  move: Ln,
  loading: Pn,
  "dropdown-container": "_dropdown-container_1youd_91",
  large: En,
  extend: Fn,
  "dropdown-menu": "_dropdown-menu_1youd_101",
  "dropdown-button": "_dropdown-button_1youd_101",
  "dropdown-textfield": "_dropdown-textfield_1youd_101",
  rect: Un,
  "dropdown-textfield-toolbox": "_dropdown-textfield-toolbox_1youd_124",
  "top-left": "_top-left_1youd_133",
  "top-right": "_top-right_1youd_133",
  "bottom-left": "_bottom-left_1youd_136",
  "bottom-right": "_bottom-right_1youd_136",
  button: xn,
  active: Wn
}, Gn = {
  $style: Zn
}, Fu = /* @__PURE__ */ Y(Tn, [["__cssModules", Gn], ["__scopeId", "data-v-68eaec6d"]]), Yn = /* @__PURE__ */ Z({
  __name: "ProgressBar",
  props: {
    value: { default: 0 },
    variant: { default: "concave" },
    thickness: { default: 12 }
  },
  setup(n) {
    const t = n;
    return (e, l) => (_(), $("div", {
      class: s([e.$style["progress-container"], e.$style[t.variant]])
    }, [
      f("div", {
        class: s([e.$style["progress-groove"], e.$style[t.variant]])
      }, [
        f("div", {
          class: s(e.$style["progress-value"]),
          style: pt({ width: `${t.value * 100}%` })
        }, null, 6)
      ], 2)
    ], 2));
  }
}), Kn = "_concave_1hfbi_23", Xn = "_convex_1hfbi_55", Qn = {
  "progress-container": "_progress-container_1hfbi_1",
  "progress-groove": "_progress-groove_1hfbi_11",
  "progress-value": "_progress-value_1hfbi_11",
  concave: Kn,
  "progress-content-wrapper": "_progress-content-wrapper_1hfbi_35",
  convex: Xn
}, Jn = {
  $style: Qn
}, er = /* @__PURE__ */ Y(Yn, [["__cssModules", Jn], ["__scopeId", "data-v-a260fe74"]]), tr = /* @__PURE__ */ Z({
  __name: "FileUploader",
  props: {
    placeholder: {},
    icon: { default: "fa6-solid:file-arrow-up" },
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    accept: { default: "*" },
    multiple: { type: [Boolean, String], default: !1 },
    readAs: { default: "formData" }
  },
  emits: ["upload", "success", "error", "abort", "delete"],
  setup(n, { emit: t }) {
    const e = n, l = t, a = P(/* @__PURE__ */ new Map()), r = P(), i = P(), v = se(!1), c = ke(
      () => e.accept === "*" || e.multiple === "directory" ? void 0 : Array.isArray(e.accept) ? Oe(e.accept, (h) => h.replace(/^\.?(.*)/, ".$1")).join(", ") : e.accept.replace(/^\.?(.*)/, ".$1")
    ), y = ke(
      () => c.value ? c.value.split(", ").map((h) => h.toUpperCase().substring(1)).reduce((h, m, o, S) => `${h}${o < S.length - 1 ? ", " : " or "}${m}`) : "All Files"
    ), b = ke(
      () => e.placeholder ?? `Drag ${e.multiple ? "files" : "a file"} here or click to browse`
    ), { open: p, onChange: k } = qt({
      accept: c.value,
      multiple: !!e.multiple,
      reset: !0
    }), { isOverDropZone: g } = Lt(r, (h) => {
      C(h ?? []);
    }), C = (h) => {
      h.map((m) => ({
        file: m,
        filename: m.name.replace(/\.[^/.]+$/, ""),
        type: m.name.split(".").pop()?.toUpperCase() ?? (m.type || "BINARY"),
        reader: new FileReader(),
        status: se("pending"),
        progress: se(0)
      })).map((m) => ({
        ...m,
        abort: () => {
          m.status() === "pending" || m.status() === "progressing" ? (m.status.set("aborted"), m.reader.abort(), l("abort", m.file.name)) : a.value.delete(m.file.name);
        },
        delete: () => {
          a.value.delete(m.file.name), l("delete", m.file.name);
        }
      })).forEach((m) => {
        e.readAs !== "formData" && e.readAs !== "stream" && (m.reader.onprogress = (o) => {
          m.status.set("progressing"), o.lengthComputable && m.progress.set(o.loaded / o.total);
        }, m.reader.onloadstart = () => {
          m.status.set("progressing");
        }, m.reader.onabort = () => {
          m.status.set("aborted");
        }, m.reader.onerror = () => {
          m.status.set("failed");
        }), a.value.set(m.file.name, m);
      }), M();
    }, M = () => {
      const h = new FormData(), m = {
        payload: /* @__PURE__ */ new Map(),
        files: Array()
      };
      a.value.forEach((o) => {
        const S = {
          ...Vt(o.file, ["name", "lastModified", "webkitRelativePath", "size", "type"]),
          status: o.status,
          progress: o.progress,
          abort: o.abort,
          delete: o.delete
        };
        switch (m.files.push(S), e.readAs) {
          case "formData":
            h.append("file", o.file, o.file.name), e.multiple ? m.files.length === h.getAll("file").length && l("upload", h, m.files) : l("upload", h, S);
            break;
          case "stream":
            m.payload.set(o.file.name, o.file.stream()), e.multiple ? m.files.length === m.payload.size && l(
              "upload",
              m.payload,
              m.files
            ) : l(
              "upload",
              m.payload.get(o.file.name),
              S
            );
            break;
          default:
            switch (o.reader.onload = () => {
              switch (o.status.set("succeeded"), o.progress.set(1), m.payload.set(o.file.name, o.reader.result), e.multiple ? l("success", o.file.name) : l("success"), e.readAs) {
                case "buffer":
                  e.multiple ? m.files.length === m.payload.size && l("upload", m.payload, m.files) : l("upload", m.payload.get(o.file.name), S);
                  break;
                case "binary":
                  e.multiple ? m.files.length === m.payload.size && l("upload", m.payload, m.files) : l("upload", m.payload.get(o.file.name), S);
                  break;
                case "base64":
                  e.multiple ? m.files.length === m.payload.size && l("upload", m.payload, m.files) : l("upload", m.payload.get(o.file.name), S);
                  break;
                default:
                  e.multiple ? m.files.length === m.payload.size && l("upload", m.payload, m.files) : l("upload", m.payload.get(o.file.name), S);
                  break;
              }
            }, m.payload.set(o.file.name, o.reader.result), e.readAs) {
              case "buffer":
                o.reader.readAsArrayBuffer(o.file);
                break;
              case "binary":
                o.reader.readAsBinaryString(o.file);
                break;
              case "base64":
                o.reader.readAsDataURL(o.file);
                break;
              default:
                o.reader.readAsText(o.file);
                break;
            }
        }
      });
    }, w = () => {
      if (i.value) {
        const { scrollHeight: h, clientHeight: m } = i.value;
        v.set(h > m + 1);
      }
    };
    return k((h) => {
      C(Oe(h));
    }), He(i, w, {
      window
    }), (h, m) => (_(), $("div", {
      ref_key: "dropZoneRef$",
      ref: r,
      class: s([h.$style["uploader-container"], h.$style.wrapper, h.$style.flex, h.$style.vertical])
    }, [
      u(g) || a.value.size === 0 ? (_(), X(fe, {
        key: 0,
        onClick: u(p),
        class: s([
          h.$style["uploader-drop-area"],
          h.$style.wrapper,
          h.$style.flex,
          h.$style.vertical,
          h.$style.behavior,
          h.$style.clickable,
          u(g) && h.$style.active
        ]),
        radius: "var(--agh-ref-border-radius-300)",
        variant: "dash"
      }, {
        default: E(() => [
          O(u(de), {
            class: s(h.$style.icon),
            icon: e.icon
          }, null, 8, ["class", "icon"]),
          f("h1", null, N(u(b)), 1),
          f("p", null, N(u(y)), 1)
        ]),
        _: 1
      }, 8, ["onClick", "class"])) : (_(), $("div", {
        key: 1,
        ref_key: "wrapperRef$",
        ref: i,
        class: s([
          h.$style["uploader-file-list"],
          h.$style.wrapper,
          h.$style.flex,
          h.$style.vertical,
          u(v)() && h.$style.overflowed
        ])
      }, [
        (_(!0), $(V, null, F(a.value, ([o, S]) => (_(), X(fe, {
          key: `file-${o}`,
          class: s([h.$style["uploader-file-card"], h.$style.wrapper, h.$style.flex, h.$style.horizontal]),
          "has-stroke": !1,
          radius: "var(--agh-ref-border-radius-400)",
          variant: "flat"
        }, {
          default: E(() => [
            f("div", {
              class: s([h.$style.icon, h.$style[S.status()]])
            }, [
              O(u(de), {
                icon: S.status() === "progressing" ? "fa6-solid:upload" : S.status() === "failed" ? "fa6-solid:circle-xmark" : S.status() === "succeeded" ? "fa6-solid:circle-check" : S.status() === "aborted" ? "fa6-solid:circle-stop" : e.icon
              }, null, 8, ["icon"])
            ], 2),
            f("div", {
              class: s([
                h.$style["uploader-file-content"],
                h.$style.wrapper,
                h.$style.flex,
                h.$style.vertical
              ])
            }, [
              f("h1", null, N(S.filename), 1),
              f("p", null, N(S.type) + "・" + N(u(_l).humanizeByte(S.file.size)), 1)
            ], 2),
            S.status() === "progressing" ? (_(), $("div", {
              key: 0,
              class: s([
                h.$style["uploader-file-progress"],
                h.$style.wrapper,
                h.$style.flex,
                h.$style.horizontal
              ])
            }, [
              O(er, {
                class: s(h.$style["uploader-file-progress"]),
                value: S.progress()
              }, null, 8, ["class", "value"]),
              f("p", null, N((S.progress() * 100).toFixed(0)) + "%", 1)
            ], 2)) : L("", !0),
            S.status() === "succeeded" ? (_(), X(ae, {
              key: 1,
              onClick: (B) => S.delete(),
              class: s(h.$style.button),
              icon: "fa6-solid:trash",
              variant: "text"
            }, null, 8, ["onClick", "class"])) : (_(), X(ae, {
              key: 2,
              onClick: (B) => S.abort(),
              class: s(h.$style.button),
              icon: "fa6-solid:xmark",
              variant: "text"
            }, null, 8, ["onClick", "class"]))
          ]),
          _: 2
        }, 1032, ["class"]))), 128))
      ], 2))
    ], 2));
  }
}), lr = "_behavior_12os8_1", ar = "_clickable_12os8_1", sr = "_disabled_12os8_4", or = "_draggable_12os8_7", nr = "_move_12os8_7", rr = "_loading_12os8_10", ir = "_wrapper_12os8_14", cr = "_flex_12os8_25", ur = "_horizontal_12os8_61", dr = "_wrap_12os8_14", _r = "_vertical_12os8_73", pr = "_grid_12os8_85", vr = "_active_12os8_104", fr = "_icon_12os8_107", mr = "_overflowed_12os8_132", yr = "_succeeded_12os8_167", hr = "_failed_12os8_170", gr = "_aborted_12os8_173", $r = "_progressing_12os8_176", br = "_pending_12os8_179", wr = "_button_12os8_182", kr = {
  behavior: lr,
  clickable: ar,
  disabled: sr,
  draggable: or,
  move: nr,
  loading: rr,
  wrapper: ir,
  flex: cr,
  "col-1": "_col-1_12os8_25",
  "col-2": "_col-2_12os8_28",
  "col-3": "_col-3_12os8_31",
  "col-4": "_col-4_12os8_34",
  "col-5": "_col-5_12os8_37",
  "col-6": "_col-6_12os8_40",
  "col-7": "_col-7_12os8_43",
  "col-8": "_col-8_12os8_46",
  "col-9": "_col-9_12os8_49",
  "col-10": "_col-10_12os8_52",
  "col-11": "_col-11_12os8_55",
  "col-12": "_col-12_12os8_58",
  horizontal: ur,
  wrap: dr,
  vertical: _r,
  grid: pr,
  "uploader-container": "_uploader-container_12os8_91",
  "uploader-drop-area": "_uploader-drop-area_12os8_98",
  active: vr,
  icon: fr,
  "uploader-file-list": "_uploader-file-list_12os8_124",
  overflowed: mr,
  "uploader-file-card": "_uploader-file-card_12os8_156",
  succeeded: yr,
  failed: hr,
  aborted: gr,
  progressing: $r,
  pending: br,
  button: wr,
  "uploader-file-content": "_uploader-file-content_12os8_185",
  "uploader-file-progress": "_uploader-file-progress_12os8_199"
}, Sr = {
  $style: kr
}, Uu = /* @__PURE__ */ Y(tr, [["__cssModules", Sr], ["__scopeId", "data-v-5cb780e1"]]), zr = {
  key: 0,
  "clip-path": "url(#clip)"
}, Mr = {
  key: 1,
  d: "M19 36.5C12.5312 36.5 6.625 33.125 3.39062 27.5C0.15625 21.9453 0.15625 15.125 3.39062 9.5C6.625 3.94531 12.5312 0.5 19 0.5C25.3984 0.5 31.3047 3.94531 34.5391 9.5C37.7734 15.125 37.7734 21.9453 34.5391 27.5C31.3047 33.125 25.3984 36.5 19 36.5ZM13.3047 12.8047C12.6016 13.5078 12.6016 14.5625 13.3047 15.1953L16.6094 18.5L13.3047 21.8047C12.6016 22.5078 12.6016 23.5625 13.3047 24.1953C13.9375 24.8984 14.9922 24.8984 15.625 24.1953L18.9297 20.8906L22.2344 24.1953C22.9375 24.8984 23.9922 24.8984 24.625 24.1953C25.3281 23.5625 25.3281 22.5078 24.625 21.8047L21.3203 18.5L24.625 15.1953C25.3281 14.5625 25.3281 13.5078 24.625 12.8047C23.9922 12.1719 22.9375 12.1719 22.2344 12.8047L18.9297 16.1094L15.625 12.8047C14.9922 12.1719 13.9375 12.1719 13.3047 12.8047Z"
}, Br = {
  key: 2,
  d: "M19 36.5c-6.469 0-12.375-3.375-15.61-9-3.234-5.555-3.234-12.375 0-18C6.626 3.945 12.532.5 19 .5c6.398 0 12.305 3.445 15.54 9 3.233 5.625 3.233 12.445 0 18a17.869 17.869 0 0 1-15.54 9Zm7.945-21.305h-.07c.703-.633.703-1.687 0-2.39a1.655 1.655 0 0 0-2.32 0L16.75 20.68l-3.305-3.305c-.703-.703-1.758-.703-2.39 0a1.54 1.54 0 0 0 0 2.32l4.5 4.5c.633.703 1.687.703 2.39 0l9-9Z"
}, Cr = /* @__PURE__ */ Z({
  __name: "LoadingIcon",
  props: {
    status: {}
  },
  setup(n) {
    const t = n;
    return (e, l) => (_(), $("div", {
      class: s(e.$style["icon-wrapper"])
    }, [
      O(Ee, {
        class: s([e.$style["icon-entity"], e.$style[t.status]]),
        "shape-rendering": "geometricPrecision",
        viewBox: "0 0 36 36"
      }, {
        defs: E(() => [...l[0] || (l[0] = [
          f("linearGradient", {
            id: "loading-gradient",
            gradientUnits: "userSpaceOnUse",
            x1: "4.43603",
            x2: "31.564",
            y1: "1.76963e-07",
            y2: "36"
          }, [
            f("stop", {
              offset: "0.1003",
              "stop-color": "#CEF0F4"
            }),
            f("stop", {
              offset: "0.8997",
              "stop-color": "#35BCCC"
            })
          ], -1),
          f("clipPath", { id: "clip" }, [
            f("rect", {
              fill: "white",
              height: "36",
              width: "36"
            })
          ], -1)
        ])]),
        path: E(() => [
          t.status === "waiting" ? (_(), $("g", zr, [...l[1] || (l[1] = [
            f("path", { d: "M0.0703125 16.8125C0.421875 13.1562 1.82812 9.78125 4.07812 7.03906L7.3125 10.2734C5.83594 12.1016 4.85156 14.3516 4.57031 16.8125H0.0703125ZM9.70312 7.88281L6.46875 4.64844C9.21094 2.39844 12.5859 0.921875 16.3125 0.640625V5.14062C13.7812 5.42188 11.5312 6.40625 9.70312 7.88281ZM19.6875 31.9297C22.1484 31.6484 24.3984 30.6641 26.2266 29.1875L29.4609 32.4219C26.7188 34.6719 23.3438 36.0781 19.6875 36.4297V31.9297ZM28.6172 26.7969C30.0938 24.9688 31.0781 22.6484 31.3594 20.1875H35.8594C35.5781 23.9141 34.1016 27.2891 31.8516 30.0312L28.6172 26.7969ZM6.46875 32.4219L9.70312 29.1875C11.5312 30.6641 13.7812 31.6484 16.2422 31.9297V36.4297C12.5859 36.0781 9.21094 34.6719 6.46875 32.4219ZM4.07812 30.0312C1.82812 27.2891 0.421875 23.9141 0.0703125 20.1875H4.57031C4.85156 22.7188 5.83594 24.9688 7.3125 26.7969L4.07812 30.0312ZM29.4609 4.64844L26.2266 7.88281C24.3984 6.40625 22.1484 5.42188 19.6875 5.14062V0.640625C23.3438 0.921875 26.7188 2.39844 29.4609 4.64844ZM28.6172 10.2734L31.8516 7.03906C34.1016 9.78125 35.5781 13.1562 35.8594 16.8828H31.3594C31.0781 14.3516 30.0938 12.1016 28.6172 10.2734Z" }, null, -1),
            f("path", { d: "M0.0703125 16.8125C0.421875 13.1562 1.82812 9.78125 4.07812 7.03906L7.3125 10.2734C5.83594 12.1016 4.85156 14.3516 4.57031 16.8125H0.0703125Z" }, null, -1)
          ])])) : t.status === "failed" ? (_(), $("path", Mr)) : t.status === "succeeded" ? (_(), $("path", Br)) : (_(), $(V, { key: 3 }, [
            l[2] || (l[2] = f("path", { d: "M36 18C36 27.9411 27.9411 36 18 36C8.05887 36 0 27.9411 0 18C0 8.05887 8.05887 0 18 0C27.9411 0 36 8.05887 36 18ZM5.4 18C5.4 24.9588 11.0412 30.6 18 30.6C24.9588 30.6 30.6 24.9588 30.6 18C30.6 11.0412 24.9588 5.4 18 5.4C11.0412 5.4 5.4 11.0412 5.4 18Z" }, null, -1)),
            l[3] || (l[3] = f("path", {
              d: "M18 2.7C18 1.20883 19.2155 -0.0207358 20.69 0.202112C23.5283 0.631112 26.2367 1.73508 28.5801 3.4377C31.6554 5.67201 33.9444 8.82252 35.119 12.4377C36.2937 16.0529 36.2937 19.9471 35.119 23.5623C34.2239 26.3172 32.6817 28.8023 30.6375 30.8177C29.5757 31.8646 27.8696 31.5844 26.9931 30.378C26.1166 29.1716 26.412 27.4985 27.4044 26.3855C28.5594 25.0902 29.441 23.5626 29.9833 21.8936C30.8056 19.363 30.8056 16.637 29.9833 14.1064C29.1611 11.5758 27.5588 9.3704 25.4061 7.80639C23.9863 6.77488 22.3753 6.05726 20.6794 5.68818C19.2224 5.37107 18 4.19117 18 2.7Z",
              fill: "url(#loading-gradient)"
            }, null, -1))
          ], 64))
        ]),
        _: 1
      }, 8, ["class"])
    ], 2));
  }
}), Tr = "_waiting_1w7k2_179", Ar = "_loading_1w7k2_182", Dr = "_failed_1w7k2_185", jr = "_succeeded_1w7k2_188", Vr = "_rotate_1w7k2_1", Or = "_beat_1w7k2_1", Hr = "_bounce_1w7k2_1", Nr = "_fade_1w7k2_1", Ir = "_flip_1w7k2_1", Rr = "_shake_1w7k2_1", qr = "_spin_1w7k2_1", Lr = {
  "icon-wrapper": "_icon-wrapper_1w7k2_170",
  "icon-entity": "_icon-entity_1w7k2_173",
  "fade-in": "_fade-in_1w7k2_1",
  waiting: Tr,
  loading: Ar,
  failed: Dr,
  succeeded: jr,
  rotate: Vr,
  "step-rotate": "_step-rotate_1w7k2_1",
  "jump-in": "_jump-in_1w7k2_1",
  beat: Or,
  bounce: Hr,
  fade: Nr,
  "beat-fade": "_beat-fade_1w7k2_1",
  flip: Ir,
  shake: Rr,
  spin: qr
}, Pr = {
  $style: Lr
}, xu = /* @__PURE__ */ Y(Cr, [["__cssModules", Pr], ["__scopeId", "data-v-4ec8c9f8"]]), Er = ["height", "width"], Fr = /* @__PURE__ */ Z({
  __name: "InnerShadowDeco",
  props: {
    height: {},
    width: {}
  },
  setup(n) {
    const t = n;
    return (e, l) => (_(), $("filter", {
      id: "effects--inner-shadow--deco",
      height: t.height,
      width: t.width,
      "color-interpolation-filters": "sRGB",
      filterUnits: "userSpaceOnUse",
      x: "0",
      y: "0"
    }, [...l[0] || (l[0] = [
      f("feFlood", {
        "flood-opacity": "0",
        result: "BackgroundImageFix"
      }, null, -1),
      f("feBlend", {
        in: "SourceGraphic",
        in2: "BackgroundImageFix",
        result: "shape"
      }, null, -1),
      f("feColorMatrix", {
        in: "SourceAlpha",
        result: "hardAlpha",
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
      }, null, -1),
      f("feOffset", {
        dx: "1",
        dy: "1"
      }, null, -1),
      f("feGaussianBlur", { stdDeviation: "1" }, null, -1),
      f("feComposite", {
        in2: "hardAlpha",
        k2: "-1",
        k3: "1",
        operator: "arithmetic"
      }, null, -1),
      f("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" }, null, -1),
      f("feBlend", {
        in2: "shape",
        result: "effect-innerShadow-1"
      }, null, -1),
      f("feColorMatrix", {
        in: "SourceAlpha",
        result: "hardAlpha",
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
      }, null, -1),
      f("feOffset", {
        dx: "2",
        dy: "3"
      }, null, -1),
      f("feGaussianBlur", { stdDeviation: "1.5" }, null, -1),
      f("feComposite", {
        in2: "hardAlpha",
        k2: "-1",
        k3: "1",
        operator: "arithmetic"
      }, null, -1),
      f("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.11 0" }, null, -1),
      f("feBlend", {
        in2: "effect-innerShadow-1",
        result: "effect-innerShadow2"
      }, null, -1),
      f("feColorMatrix", {
        in: "SourceAlpha",
        result: "hardAlpha",
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
      }, null, -1),
      f("feOffset", {
        dx: "5",
        dy: "6"
      }, null, -1),
      f("feGaussianBlur", { stdDeviation: "2" }, null, -1),
      f("feComposite", {
        in2: "hardAlpha",
        k2: "-1",
        k3: "1",
        operator: "arithmetic"
      }, null, -1),
      f("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" }, null, -1),
      f("feBlend", {
        in2: "effect-innerShadow2",
        result: "effect-innerShadow3"
      }, null, -1),
      f("feColorMatrix", {
        in: "SourceAlpha",
        result: "hardAlpha",
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
      }, null, -1),
      f("feOffset", {
        dx: "8",
        dy: "10"
      }, null, -1),
      f("feGaussianBlur", { stdDeviation: "2.5" }, null, -1),
      f("feComposite", {
        in2: "hardAlpha",
        k2: "-1",
        k3: "1",
        operator: "arithmetic"
      }, null, -1),
      f("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0" }, null, -1),
      f("feBlend", {
        in2: "effect-innerShadow3",
        result: "effect-innerShadow4"
      }, null, -1)
    ])], 8, Er));
  }
}), Ur = ["innerHTML"], xr = ["cx", "cy", "r"], Wr = ["cx", "cy", "r"], Zr = ["cx", "cy", "r", "stroke-dasharray", "stroke-dashoffset", "stroke-width"], Gr = { "clip-path": "url(#progress-content-clip)" }, Yr = ["height", "width", "x", "y"], Kr = /* @__PURE__ */ Z({
  __name: "ProgressCircle",
  props: {
    value: { default: 0 },
    variant: { default: "concave" },
    thickness: { default: 12 }
  },
  setup(n) {
    const t = n, e = P(), { width: l, height: a } = Pe(e), r = ke(
      () => q.clamp(q.min(l.value, a.value) / 2 - t.thickness / 2, 0, 1 / 0)
    ), i = ke(() => r.value * 2 * q.PI), v = ke(() => ({
      x: l.value / 2,
      y: a.value / 2
    })), c = se(""), y = () => {
      e.value && t.variant === "convex" && (c.set(
        _t("--progress-value-fill-gradient", e, {
          observe: !0
        }).value
      ), c() || vt(y, 1));
    };
    return Ae(() => {
      y();
    }), (b, p) => (_(), $("div", {
      ref_key: "wrapperRef$",
      ref: e,
      class: s([b.$style["progress-container"], b.$style[t.variant]])
    }, [
      O(Ee, {
        height: u(a),
        width: u(l)
      }, {
        defs: E(() => [
          f("g", {
            innerHTML: u(c)()
          }, null, 8, Ur),
          O(Fr, {
            height: u(a),
            width: u(l)
          }, null, 8, ["height", "width"]),
          f("circle", {
            id: "progress-groove-outer",
            cx: u(v).x,
            cy: u(v).y,
            r: u(r) + t.thickness / 2
          }, null, 8, xr),
          f("circle", {
            id: "progress-groove-inner",
            cx: u(v).x,
            cy: u(v).y,
            r: u(r) - t.thickness / 2
          }, null, 8, Wr),
          p[0] || (p[0] = f("mask", { id: "progress-groove-mask" }, [
            f("use", {
              fill: "#fff",
              href: "#progress-groove-outer"
            }),
            f("use", {
              fill: "#000",
              href: "#progress-groove-inner"
            })
          ], -1))
        ]),
        path: E(() => [
          f("g", {
            class: s(b.$style["progress-groove"])
          }, [...p[1] || (p[1] = [
            f("use", {
              href: "#progress-groove-outer",
              mask: "url(#progress-groove-mask)"
            }, null, -1)
          ])], 2),
          f("g", {
            class: s(b.$style["progress-value"])
          }, [
            f("circle", {
              cx: u(v).x,
              cy: u(v).y,
              r: u(r),
              "stroke-dasharray": `${t.value * u(i)} ${(1 - t.value) * u(i)}`,
              "stroke-dashoffset": (t.value + 0.25) * u(i),
              "stroke-width": t.thickness,
              fill: "transparent"
            }, null, 8, Zr)
          ], 2),
          p[2] || (p[2] = f("clipPath", { id: "progress-content-clip" }, [
            f("use", { href: "#progress-groove-inner" })
          ], -1)),
          f("g", Gr, [
            (_(), $("foreignObject", {
              height: u(r) * 2,
              width: u(r) * 2,
              x: u(v).x - u(r),
              y: u(v).y - u(r)
            }, [
              f("div", {
                class: s(b.$style["progress-content-wrapper"])
              }, [
                f("label", null, N((t.value * 100).toFixed(0)) + "%", 1)
              ], 2)
            ], 8, Yr))
          ])
        ]),
        _: 1
      }, 8, ["height", "width"])
    ], 2));
  }
}), Xr = "_concave_cq1o3_23", Qr = "_convex_cq1o3_55", Jr = {
  "progress-container": "_progress-container_cq1o3_1",
  "progress-groove": "_progress-groove_cq1o3_11",
  "progress-value": "_progress-value_cq1o3_11",
  concave: Xr,
  "progress-content-wrapper": "_progress-content-wrapper_cq1o3_35",
  convex: Qr
}, ei = {
  $style: Jr
}, Wu = /* @__PURE__ */ Y(Kr, [["__cssModules", ei], ["__scopeId", "data-v-44ae6bab"]]), ti = ["value"], li = /* @__PURE__ */ Z({
  __name: "InputRange",
  props: {
    min: { default: 0 },
    max: { default: 100 },
    step: { default: 1 },
    modelValue: {},
    disabled: { type: Boolean },
    eventSignalOptions: {},
    thumbColor: { default: "var(--agh-ref-color-cyan-600)" },
    trackColor: { default: "var(--agh-sys-color-cyan-surface-dim)" },
    progressColor: { default: "var(--agh-ref-color-cyan-400)" }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: t }) {
    Se((v) => ({
      v39cb2cc4: v.thumbColor
    }));
    const e = n, l = t, a = P(null), r = A(() => Number(e.modelValue) / Number(e.max) * 100), { onTrigger: i } = De(
      (v) => {
        if (e.disabled)
          v.preventDefault(), v.stopPropagation();
        else {
          const c = Number(v.target.value);
          l("update:modelValue", c);
        }
      },
      e.eventSignalOptions ?? {
        flush: "post"
      }
    );
    return (v, c) => (_(), $("input", ce({
      ref_key: "inputRangeRef$",
      ref: a,
      onInput: c[0] || (c[0] = //@ts-ignore
      (...y) => u(i) && u(i)(...y))
    }, e, {
      style: {
        background: `linear-gradient(to right, ${e.progressColor} ${r.value}%,${e.trackColor} ${r.value}%)`
      },
      value: e.modelValue,
      type: "range"
    }), null, 16, ti));
  }
}), ai = {}, si = {
  $style: ai
}, Zu = /* @__PURE__ */ Y(li, [["__cssModules", si], ["__scopeId", "data-v-b4e2c708"]]), oi = /* @__PURE__ */ Z({
  __name: "SearchBar",
  props: /* @__PURE__ */ Ve({
    autofocus: { type: Boolean },
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    placeholder: {},
    spellcheck: { type: Boolean },
    eventSignalOptions: {},
    icon: {},
    iconAlign: {},
    tabindex: {},
    caseSensitive: { type: Boolean },
    limit: {},
    sortBy: {},
    phraseSearch: { type: Boolean },
    strict: { type: Boolean },
    segmentPattern: {},
    relevanceSearch: { type: Boolean },
    relevancePolicy: {},
    threshold: {},
    fields: {},
    groupBy: { type: [Function, String] },
    modelValue: {},
    autocomplete: { type: Boolean },
    options: {}
  }, {
    modelValue: {
      default: ""
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Ve(["select", "search"], ["update:modelValue"]),
  setup(n, { emit: t }) {
    const e = n, l = t, a = Me(n, "modelValue"), r = A(
      () => new Ce(
        Array.isArray(e.options) ? e.options.map((b, p) => [p, b]) : e.options
      )
    ), i = se(!1), v = (b) => {
      b && (a.value = e.fields?.title ?? e.fields?.key ? Be(b, e.fields?.title ?? e.fields?.key ?? "", !0) ?? "" : String(b), l("select", b), i.set(!0));
    }, { result: c } = Tt(r, {
      query: a,
      getters: e.fields?.searchKeys ?? [e.fields?.key ?? "", e.fields?.title ?? ""].filter(Boolean) ?? ((b) => String(b)),
      options: {
        caseSensitive: e.caseSensitive,
        phraseSearch: e.phraseSearch,
        strict: e.strict,
        segmentPattern: e.segmentPattern,
        relevanceSearch: e.relevanceSearch,
        threshold: e.threshold,
        sortBy: e.sortBy,
        limit: e.limit
      }
    }), y = P();
    return oe(c, (b) => {
      l("search", Array.isArray(e.options) ? [...b.values()] : b);
    }), (b, p) => (_(), $("div", {
      class: s(b.$style["search-bar--container"])
    }, [
      O(Ue, {
        modelValue: a.value,
        "onUpdate:modelValue": p[0] || (p[0] = (k) => a.value = k),
        onBlur: p[1] || (p[1] = (k) => u(i).set(!0)),
        onClick: p[2] || (p[2] = (k) => u(i).set(!1)),
        onFocus: p[3] || (p[3] = (k) => u(i).set(!1)),
        autofocus: e.autofocus,
        class: s(b.$style["search-bar--input"]),
        disabled: e.disabled,
        "event-signal-options": e.eventSignalOptions,
        icon: e.icon,
        "icon-align": e.iconAlign,
        placeholder: e.placeholder,
        readonly: e.readonly,
        spellcheck: e.spellcheck,
        tabindex: e.tabindex,
        inputmode: "search",
        type: "search"
      }, null, 8, ["modelValue", "autofocus", "class", "disabled", "event-signal-options", "icon", "icon-align", "placeholder", "readonly", "spellcheck", "tabindex"]),
      e.autocomplete && a.value && u(c).size > 0 && !u(i)() ? (_(), X(Qe, {
        key: 0,
        "onUpdate:modelValue": v,
        class: s(b.$style["search-bar--menu"]),
        fields: e.fields,
        "group-by": e.groupBy,
        "model-value": y.value,
        options: u(c)
      }, null, 8, ["class", "fields", "group-by", "model-value", "options"])) : L("", !0)
    ], 2));
  }
}), ni = {
  "search-bar--container": "_search-bar--container_1ggln_1",
  "search-bar--input": "_search-bar--input_1ggln_7",
  "search-bar--menu": "_search-bar--menu_1ggln_10"
}, ri = {
  $style: ni
}, ii = /* @__PURE__ */ Y(oi, [["__cssModules", ri], ["__scopeId", "data-v-6fc8a816"]]), ci = /* @__PURE__ */ Z({
  __name: "SwitchButton",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 },
    eventSignalOptions: {}
  },
  emits: ["update:modelValue"],
  setup(n, { emit: t }) {
    const e = n, l = t, { onTrigger: a } = De(
      (r) => {
        e.disabled ? (r.preventDefault(), r.stopPropagation()) : l("update:modelValue", !e.modelValue);
      },
      e.eventSignalOptions ?? {
        flush: "post"
      }
    );
    return (r, i) => (_(), $("div", {
      onClick: i[0] || (i[0] = //@ts-ignore
      (...v) => u(a) && u(a)(...v)),
      class: s([r.$style.switch, e.modelValue && r.$style.switch_active])
    }, [
      f("div", {
        class: s([r.$style.slider, e.modelValue && r.$style.slider_active])
      }, null, 2)
    ], 2));
  }
}), ui = "_switch_active_13jol_9", di = "_slider_13jol_12", _i = "_slider_active_13jol_23", pi = {
  switch: "_switch_13jol_1",
  switch_active: ui,
  slider: di,
  slider_active: _i
}, vi = {
  $style: pi
}, Gu = /* @__PURE__ */ Y(ci, [["__cssModules", vi], ["__scopeId", "data-v-81a8510a"]]), fi = ["value"], mi = ["for"], yi = /* @__PURE__ */ Z({
  __name: "TextArea",
  props: {
    modelValue: {},
    placeholder: {},
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    name: {},
    autocomplete: { default: "off" },
    autofocus: { type: Boolean },
    maxlength: {},
    minlength: {},
    size: {},
    spellcheck: { type: Boolean, default: !1 },
    tabindex: {},
    cols: {},
    rows: {},
    invalidMessage: {},
    eventSignalOptions: {}
  },
  emits: ["update:modelValue", "validation"],
  setup(n, { emit: t }) {
    const e = n, l = t, { onTrigger: a } = De(
      (c) => {
        e.disabled ? (c.preventDefault(), c.stopPropagation()) : (v(), l("update:modelValue", c.target.value));
      },
      e.eventSignalOptions ?? {
        flush: "post"
      }
    ), r = P(), i = se(""), v = () => {
      i.set(
        r.value ? r.value?.validity.valid ? "" : Ct(r.value.validity, e.invalidMessage ?? {}) ?? r.value.validationMessage : ""
      ), r.value?.validity && l("validation", r.value.validity);
    };
    return Ae(() => {
      v();
    }), (c, y) => (_(), X(fe, {
      class: s([c.$style["textarea-container"]]),
      radius: "var(--agh-ref-border-radius-400)",
      variant: "flat"
    }, {
      default: E(() => [
        f("textarea", ce({
          ref_key: "inputRef$",
          ref: r,
          onInput: y[0] || (y[0] = //@ts-ignore
          (...b) => u(a) && u(a)(...b)),
          class: [c.$style["textarea-input"]]
        }, e, {
          value: e.modelValue
        }), null, 16, fi),
        u(i)() ? (_(), $("label", {
          key: 0,
          class: s([c.$style["textarea-label"]]),
          for: e.name
        }, [
          O(u(de), {
            class: s([c.$style["textarea-label--icon"]]),
            icon: "fa6-solid:circle-xmark"
          }, null, 8, ["class"]),
          f("span", {
            class: s([c.$style["textarea-label--value"]])
          }, N(u(i)()), 3)
        ], 10, mi)) : L("", !0)
      ]),
      _: 1
    }, 8, ["class"]));
  }
}), hi = {
  "textarea-container": "_textarea-container_1o9tt_1",
  "textarea-input": "_textarea-input_1o9tt_12",
  "icon-align--left": "_icon-align--left_1o9tt_16",
  "icon-align--right": "_icon-align--right_1o9tt_16",
  "textarea-label--icon": "_textarea-label--icon_1o9tt_30",
  "textarea-label": "_textarea-label_1o9tt_30",
  "textarea-label--value": "_textarea-label--value_1o9tt_109"
}, gi = {
  $style: hi
}, Yu = /* @__PURE__ */ Y(yi, [["__cssModules", gi], ["__scopeId", "data-v-1c80add8"]]), $i = /* @__PURE__ */ Z({
  __name: "AttackMatrix",
  props: {
    items: {},
    disabled: { type: Boolean, default: !1 },
    showDetected: { type: Boolean, default: !1 }
  },
  setup(n) {
    const t = n;
    return (e, l) => (_(), $("div", {
      class: s([e.$style.matrix, t.disabled && e.$style["matrix-disabled"]])
    }, [
      f("div", {
        class: s(e.$style.line)
      }, null, 2),
      f("div", {
        class: s(e.$style.container)
      }, [
        (_(!0), $(V, null, F(t.items, (a, r) => (_(), $("div", {
          key: r,
          class: s(e.$style.card)
        }, [
          f("div", {
            class: s(e.$style.body)
          }, [
            f("div", {
              class: s(e.$style.title)
            }, N(a.label), 3),
            f("div", {
              class: s(e.$style.description)
            }, N(a.description), 3)
          ], 2),
          t.showDetected ? (_(), $("div", {
            key: 0,
            class: s(e.$style.detected)
          }, [
            f("div", {
              class: s(e.$style.label)
            }, [
              O(u(de), { icon: "fa6-solid:user" }),
              l[0] || (l[0] = zt(" Detected ", -1))
            ], 2),
            f("div", {
              class: s(e.$style.fraction)
            }, [
              f("div", {
                class: s(e.$style.numerator)
              }, N(a.detected?.count), 3),
              f("div", {
                class: s(e.$style.denominator)
              }, " / ", 2),
              f("div", {
                class: s(e.$style.denominator)
              }, N(a.detected?.total), 3)
            ], 2)
          ], 2)) : L("", !0)
        ], 2))), 128))
      ], 2)
    ], 2));
  }
}), bi = "_matrix_1jtlz_1", wi = "_line_1jtlz_5", ki = "_container_1jtlz_10", Si = "_card_1jtlz_16", zi = "_body_1jtlz_25", Mi = "_title_1jtlz_30", Bi = "_description_1jtlz_34", Ci = "_detected_1jtlz_38", Ti = "_label_1jtlz_43", Ai = "_fraction_1jtlz_50", Di = "_denominator_1jtlz_55", ji = "_numerator_1jtlz_59", Vi = {
  matrix: bi,
  line: wi,
  container: ki,
  card: Si,
  body: zi,
  title: Mi,
  description: Bi,
  detected: Ci,
  label: Ti,
  fraction: Ai,
  denominator: Di,
  numerator: ji,
  "matrix-disabled": "_matrix-disabled_1jtlz_66"
}, Oi = {
  $style: Vi
}, Ku = /* @__PURE__ */ Y($i, [["__cssModules", Oi], ["__scopeId", "data-v-f4de3057"]]), Hi = /* @__PURE__ */ Z({
  __name: "CardList",
  props: {
    items: { default: () => [] },
    groupBy: {},
    fields: {},
    selected: {},
    modelValue: { default: "" },
    sort: {},
    filter: {},
    sortOptions: {},
    filterOptions: {}
  },
  emits: ["update:modelValue", "update:sort", "update:filter", "update:selected"],
  setup(n, { emit: t }) {
    const e = n, l = t, a = P(), r = {
      key: "detail",
      title: "{{ $.label }}",
      content: "{{ $.detail }}",
      icon: "icon"
    }, i = {
      key: "value",
      title: "{{ $.value }}"
    }, v = ke(
      () => (e.filterOptions ?? []).map(
        (z) => Bt(z.multi ? z.options : Oe(e.items, z.field)).map((R) => ({
          ...z,
          value: R
        }))
      ).flat()
    ), c = P(e.modelValue ?? ""), y = A({
      get: () => e.modelValue ?? c.value,
      set: (z) => {
        l("update:modelValue", z ?? ""), e.modelValue || (c.value = z ?? "");
      }
    }), b = P(Dl(e.sortOptions)), p = A({
      get: () => e.sort ?? b.value,
      set: (z) => {
        z && (m.set(!0), l("update:sort", z), e.sort || (b.value = z));
      }
    }), k = P([]), g = A({
      get: () => e.filter ?? k.value,
      set: (z) => {
        l("update:filter", z ?? []), e.filter || (k.value = z ?? []);
      }
    }), C = P(), M = A({
      get: () => e.selected !== void 0 ? e.selected : C.value,
      set: (z) => {
        z && (l("update:selected", z), e.selected || (C.value = z));
      }
    }), w = P(e.items), h = se(!0), m = se(!0), o = se(!1), S = () => {
      if (a.value) {
        const { scrollHeight: z, clientHeight: R } = a.value;
        o.set(z > R + 1);
      }
    }, B = (z) => z.update((R) => !R), U = (z) => {
      M.value = z;
    }, te = () => {
      const z = e.items.map(
        (d) => ({
          ...d,
          selected: We(d, e.fields.key) === We(M.value, e.fields.key)
        })
      ), R = y.value ? Al(
        z,
        (d) => We(d, e.fields.title ?? e.fields.key).includes(y.value)
      ) : z, j = jt(
        R,
        st([p.value?.field ?? e.fields.key]),
        st([p.value?.direction ?? "asc"])
      ), ie = Re(g.value) ? j : Hl(
        ...Oe(
          dt(g.value, "field"),
          (d) => st(
            d.map(
              (I) => I.multi ? j.filter((H) => H[I.field]?.includes(I.value)) : j.filter((H) => Nl(H, { [I.field]: I.value }))
            )
          )
        ),
        Pt
      );
      w.value = ie;
    };
    return He(a, S, {
      window
    }), Ae(() => {
      te(), S();
    }), Wt(() => {
      te(), S();
    }), oe([p, g, y, M], () => {
      te(), S();
    }), (z, R) => (_(), X(fe, {
      class: s(z.$style["list-container"]),
      purpose: "container",
      radius: "var(--agh-ref-border-radius-600)"
    }, {
      default: E(() => [
        f("div", {
          class: s(z.$style["list-toolbar"])
        }, [
          O(Ue, {
            modelValue: y.value,
            "onUpdate:modelValue": R[0] || (R[0] = (j) => y.value = j),
            class: s(z.$style["list-toolbar-search"]),
            type: "search"
          }, null, 8, ["modelValue", "class"]),
          e.filterOptions && !u(Re)(e.filterOptions) ? rt((_(), $("div", {
            key: 0,
            onKeydown: [
              R[3] || (R[3] = je((j) => u(h).set(!0), ["enter"])),
              R[4] || (R[4] = je((j) => u(h).set(!0), ["esc"]))
            ],
            class: s(z.$style["list-toolbar-tool"])
          }, [
            O(ae, {
              onClick: R[1] || (R[1] = (j) => B(u(h))),
              class: s(z.$style["list-toolbar-button"]),
              clicked: !u(h)(),
              icon: "fa6-solid:filter",
              variant: "text"
            }, null, 8, ["class", "clicked"]),
            g.value.length > 0 ? (_(), $("span", {
              key: 0,
              class: s(z.$style["list-toolbar-button-deco"])
            }, N(g.value.length), 3)) : L("", !0),
            u(h)() ? L("", !0) : (_(), X(Qe, {
              key: 1,
              modelValue: g.value,
              "onUpdate:modelValue": R[2] || (R[2] = (j) => g.value = j),
              class: s(z.$style["list-toolbar-menu"]),
              fields: i,
              options: u(v),
              "group-by": "label",
              label: "Filter",
              multiple: ""
            }, null, 8, ["modelValue", "class", "options"]))
          ], 34)), [
            [u(ut), () => u(h).set(!0)]
          ]) : L("", !0),
          e.sortOptions && !u(Re)(e.sortOptions) ? rt((_(), $("div", {
            key: 1,
            onKeydown: [
              R[7] || (R[7] = je((j) => u(m).set(!0), ["enter"])),
              R[8] || (R[8] = je((j) => u(m).set(!0), ["esc"]))
            ],
            class: s(z.$style["list-toolbar-tool"])
          }, [
            O(ae, {
              onClick: R[5] || (R[5] = (j) => B(u(m))),
              class: s(z.$style["list-toolbar-button"]),
              clicked: !u(m)(),
              icon: p.value?.icon ?? "fa6-solid:arrow-down-wide-short",
              variant: "text"
            }, null, 8, ["class", "clicked", "icon"]),
            u(m)() ? L("", !0) : (_(), X(Qe, {
              key: 0,
              modelValue: p.value,
              "onUpdate:modelValue": R[6] || (R[6] = (j) => p.value = j),
              class: s(z.$style["list-toolbar-menu"]),
              fields: r,
              options: e.sortOptions
            }, null, 8, ["modelValue", "class", "options"]))
          ], 34)), [
            [u(ut), () => u(m).set(!0)]
          ]) : L("", !0)
        ], 2),
        f("div", {
          ref_key: "wrapperRef$",
          ref: a,
          class: s([
            z.$style["list-wrapper"],
            u(o)() && z.$style.overflowed
          ])
        }, [
          O(Ul, {
            "group-by": e.groupBy,
            items: w.value
          }, {
            placeholder: E(() => [
              x(z.$slots, "placeholder", {}, void 0, !0)
            ]),
            group: E((j) => [
              f("label", {
                class: s(z.$style["list-item-label"])
              }, N(j.group), 3)
            ]),
            default: E((j) => [
              O(fe, {
                onClick: (ie) => U(j.item),
                class: s(z.$style["list-item"]),
                clickable: !0,
                color: j.item.selected ? "blue" : "default",
                radius: "var(--agh-ref-border-radius-400)"
              }, {
                default: E(() => [
                  x(z.$slots, "default", {
                    index: j.index,
                    item: j.item,
                    selected: j.item.selected
                  }, void 0, !0)
                ]),
                _: 2
              }, 1032, ["onClick", "class", "color"])
            ]),
            _: 3
          }, 8, ["group-by", "items"])
        ], 2),
        x(z.$slots, "footer", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ni = "_overflowed_u0xfw_83", Ii = {
  "list-container": "_list-container_u0xfw_1",
  "list-toolbar": "_list-toolbar_u0xfw_11",
  "list-toolbar-search": "_list-toolbar-search_u0xfw_17",
  "list-toolbar-tool": "_list-toolbar-tool_u0xfw_20",
  "list-toolbar-button": "_list-toolbar-button_u0xfw_23",
  "list-toolbar-button-deco": "_list-toolbar-button-deco_u0xfw_26",
  "list-toolbar-menu": "_list-toolbar-menu_u0xfw_45",
  "list-wrapper": "_list-wrapper_u0xfw_51",
  overflowed: Ni,
  "list-item": "_list-item_u0xfw_86",
  "list-item-label": "_list-item-label_u0xfw_91"
}, Ri = {
  $style: Ii
}, Xu = /* @__PURE__ */ Y(Hi, [["__cssModules", Ri], ["__scopeId", "data-v-8648bdd7"]]), qi = ["onClick"], Li = /* @__PURE__ */ Z({
  __name: "TabGroup",
  props: /* @__PURE__ */ Ve({
    tabs: {},
    modelValue: {},
    level: { default: "primary" }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(n) {
    Se((g) => ({
      v75ac6018: y.value
    })), $e();
    const t = n, e = Me(n, "modelValue", {
      get() {
        return t.modelValue ?? r.value ?? p.value.values().next().value;
      },
      set(g) {
        return t.modelValue || (r.value = g), i.value !== c.value && (i.value = c.value), g;
      }
    }), l = P(), a = P([]), r = P(void 0), i = P(null), v = P(pl()), c = A(
      () => e.value ? [...p.value.keys()].indexOf(e.value.id) ?? 0 : 0
    ), y = A(() => `--tab-anchor--${v.value}--${c.value}`), b = A(
      () => (i.value ?? c.value) <= c.value ? "left" : "right"
    ), p = A(
      () => Array.isArray(t.tabs) ? new Map(t.tabs.map((g) => [g.id, g])) : t.tabs
    ), k = (g) => {
      g.disabled || (e.value = g);
    };
    return (g, C) => (_(), $("div", {
      class: s([g.$style["tab-group-container"], g.$style.wrapper, g.$style.flex, g.$style.vertical])
    }, [
      f("div", {
        ref_key: "tabWrapperRef$",
        ref: l,
        class: s([
          g.$style["tab-group-wrapper"],
          g.$style.wrapper,
          g.$style.flex,
          g.$style.horizontal,
          g.$style[t.level]
        ])
      }, [
        (_(!0), $(V, null, F(p.value, ([M, w]) => (_(), $("div", {
          key: M,
          ref_for: !0,
          ref_key: "tabRefs$",
          ref: a,
          onClick: (h) => k(w),
          class: s([
            g.$style["tab-group"],
            g.$style.wrapper,
            g.$style.flex,
            g.$style.horizontal,
            g.$style.behavior,
            w.disabled ? g.$style.disabled : g.$style.clickable,
            e.value?.id === M && g.$style.active
          ])
        }, [
          w.icon ? (_(), X(u(de), {
            key: 0,
            class: s(g.$style.icon),
            icon: w.icon
          }, null, 8, ["class", "icon"])) : L("", !0),
          f("p", null, N(w.name), 1)
        ], 10, qi))), 128))
      ], 2),
      e.value ? (_(), X(Zt, {
        key: 0,
        class: s(g.$style.transition),
        "enter-active-class": g.$style[`slide-${b.value}-enter-active`],
        "enter-from-class": g.$style[`slide-${b.value}-enter-from`],
        "leave-active-class": g.$style[`slide-${b.value}-leave-active`],
        "leave-from-class": g.$style[`slide-${b.value}-leave-from`],
        mode: "out-in",
        appear: ""
      }, {
        default: E(() => [
          x(g.$slots, e.value.id, {
            id: e.value.id,
            index: c.value,
            tab: e.value
          }, void 0, !0)
        ]),
        _: 3
      }, 8, ["class", "enter-active-class", "enter-from-class", "leave-active-class", "leave-from-class"])) : L("", !0)
    ], 2));
  }
}), Pi = "_wrapper_1a95t_1", Ei = "_flex_1a95t_12", Fi = "_horizontal_1a95t_48", Ui = "_wrap_1a95t_1", xi = "_vertical_1a95t_60", Wi = "_grid_1a95t_72", Zi = "_behavior_1a95t_78", Gi = "_clickable_1a95t_78", Yi = "_disabled_1a95t_81", Ki = "_draggable_1a95t_84", Xi = "_move_1a95t_84", Qi = "_loading_1a95t_87", Ji = "_transition_1a95t_91", ec = "_primary_1a95t_126", tc = "_secondary_1a95t_132", lc = "_active_1a95t_163", ac = "_icon_1a95t_169", sc = {
  wrapper: Pi,
  flex: Ei,
  "col-1": "_col-1_1a95t_12",
  "col-2": "_col-2_1a95t_15",
  "col-3": "_col-3_1a95t_18",
  "col-4": "_col-4_1a95t_21",
  "col-5": "_col-5_1a95t_24",
  "col-6": "_col-6_1a95t_27",
  "col-7": "_col-7_1a95t_30",
  "col-8": "_col-8_1a95t_33",
  "col-9": "_col-9_1a95t_36",
  "col-10": "_col-10_1a95t_39",
  "col-11": "_col-11_1a95t_42",
  "col-12": "_col-12_1a95t_45",
  horizontal: Fi,
  wrap: Ui,
  vertical: xi,
  grid: Wi,
  behavior: Zi,
  clickable: Gi,
  disabled: Yi,
  draggable: Ki,
  move: Xi,
  loading: Qi,
  transition: Ji,
  "slide-left-enter-from": "_slide-left-enter-from_1a95t_91",
  "slide-left-enter-active": "_slide-left-enter-active_1a95t_91",
  "slide-left-leave-from": "_slide-left-leave-from_1a95t_91",
  "slide-left-leave-active": "_slide-left-leave-active_1a95t_91",
  "slide-right-enter-from": "_slide-right-enter-from_1a95t_91",
  "slide-right-enter-active": "_slide-right-enter-active_1a95t_91",
  "slide-right-leave-from": "_slide-right-leave-from_1a95t_91",
  "slide-right-leave-active": "_slide-right-leave-active_1a95t_91",
  "slide-down-enter-from": "_slide-down-enter-from_1a95t_94",
  "slide-down-enter-active": "_slide-down-enter-active_1a95t_94",
  "slide-down-leave-from": "_slide-down-leave-from_1a95t_94",
  "slide-down-leave-active": "_slide-down-leave-active_1a95t_94",
  "fade-enter-from": "_fade-enter-from_1a95t_97",
  "fade-enter-active": "_fade-enter-active_1a95t_97",
  "fade-leave-from": "_fade-leave-from_1a95t_97",
  "fade-leave-active": "_fade-leave-active_1a95t_97",
  "tab-group-container": "_tab-group-container_1a95t_117",
  "tab-group-wrapper": "_tab-group-wrapper_1a95t_122",
  primary: ec,
  secondary: tc,
  "tab-group-viewport-leaving": "_tab-group-viewport-leaving_1a95t_151",
  "tab-group": "_tab-group_1a95t_117",
  active: lc,
  icon: ac
}, oc = {
  $style: sc
}, Qu = /* @__PURE__ */ Y(Li, [["__cssModules", oc], ["__scopeId", "data-v-aaed6900"]]), nc = /* @__PURE__ */ Z({
  __name: "DataTableCell",
  props: {
    value: {},
    column: {},
    item: {},
    rowIndex: {},
    rowKey: {},
    isHeader: { type: Boolean },
    isSelected: { type: Boolean }
  },
  emits: ["select:row", "select:column"],
  setup(n, { emit: t }) {
    Se((i) => ({
      v1c7e3d72: a.value
    })), $e();
    const e = n, l = t, a = A(() => e.column.width || "auto"), r = () => {
      l("select:column", e.column), !e.isHeader && !e.isSelected && l("select:row", {
        item: e.item,
        rowIndex: e.rowIndex,
        rowKey: e.rowKey
      });
    };
    return (i, v) => (_(), $("div", {
      onClick: r,
      class: s([
        i.$style["table-cell"],
        i.$style.wrapper,
        i.$style.flex,
        i.$style.vertical,
        e.isSelected && i.$style.selected,
        e.isHeader && i.$style.header
      ])
    }, [
      f("p", null, N(e.value), 1)
    ], 2));
  }
}), rc = "_wrapper_1xs83_1", ic = "_flex_1xs83_12", cc = "_horizontal_1xs83_48", uc = "_wrap_1xs83_1", dc = "_vertical_1xs83_60", _c = "_grid_1xs83_72", pc = "_header_1xs83_82", vc = {
  wrapper: rc,
  flex: ic,
  "col-1": "_col-1_1xs83_12",
  "col-2": "_col-2_1xs83_15",
  "col-3": "_col-3_1xs83_18",
  "col-4": "_col-4_1xs83_21",
  "col-5": "_col-5_1xs83_24",
  "col-6": "_col-6_1xs83_27",
  "col-7": "_col-7_1xs83_30",
  "col-8": "_col-8_1xs83_33",
  "col-9": "_col-9_1xs83_36",
  "col-10": "_col-10_1xs83_39",
  "col-11": "_col-11_1xs83_42",
  "col-12": "_col-12_1xs83_45",
  horizontal: cc,
  wrap: uc,
  vertical: dc,
  grid: _c,
  "table-cell": "_table-cell_1xs83_78",
  header: pc
}, fc = {
  $style: vc
}, Te = /* @__PURE__ */ Y(nc, [["__cssModules", fc], ["__scopeId", "data-v-1cbea5d9"]]), mc = /* @__PURE__ */ Z({
  __name: "DataTableRow",
  props: {
    columns: {},
    isSelected: { type: Boolean },
    item: {},
    rowIndex: {},
    rowKey: {},
    isHeader: { type: Boolean }
  },
  emits: ["select:row"],
  setup(n, { emit: t }) {
    $e();
    const e = n, l = t, a = A(
      () => e.columns.map((i) => bl(e.item, i.valuesGetter))
    ), r = () => {
      e.isHeader || l("select:row", {
        item: e.item,
        rowIndex: e.rowIndex,
        rowKey: e.rowKey
      });
    };
    return (i, v) => (_(), $("div", {
      onClick: r,
      class: s([
        i.$style["table-row"],
        i.$style.wrapper,
        i.$style.flex,
        i.$style.horizontal,
        e.isSelected && i.$style.selected,
        e.isHeader && i.$style.header
      ])
    }, [
      (_(!0), $(V, null, F(n.columns, (c, y) => (_(), $(V, {
        key: `table-column-${y}`
      }, [
        e.isHeader ? x(i.$slots, "default", {
          key: 0,
          column: c,
          isHeader: !0,
          value: c.label
        }, () => [
          O(Te, {
            column: c,
            "is-header": !0,
            value: c.label
          }, null, 8, ["column", "value"])
        ], !0) : x(i.$slots, "default", {
          key: 1,
          column: c,
          isSelected: e.isSelected,
          item: e.item,
          rowIndex: e.rowIndex,
          rowKey: e.rowKey,
          value: a.value[y]
        }, () => [
          O(Te, {
            column: c,
            "is-selected": e.isSelected,
            item: e.item,
            "row-index": e.rowIndex,
            "row-key": e.rowKey,
            value: a.value[y]
          }, null, 8, ["column", "is-selected", "item", "row-index", "row-key", "value"])
        ], !0)
      ], 64))), 128))
    ], 2));
  }
}), yc = "_wrapper_1c9p1_1", hc = "_flex_1c9p1_12", gc = "_horizontal_1c9p1_48", $c = "_wrap_1c9p1_1", bc = "_vertical_1c9p1_60", wc = "_grid_1c9p1_72", kc = "_header_1c9p1_84", Sc = {
  wrapper: yc,
  flex: hc,
  "col-1": "_col-1_1c9p1_12",
  "col-2": "_col-2_1c9p1_15",
  "col-3": "_col-3_1c9p1_18",
  "col-4": "_col-4_1c9p1_21",
  "col-5": "_col-5_1c9p1_24",
  "col-6": "_col-6_1c9p1_27",
  "col-7": "_col-7_1c9p1_30",
  "col-8": "_col-8_1c9p1_33",
  "col-9": "_col-9_1c9p1_36",
  "col-10": "_col-10_1c9p1_39",
  "col-11": "_col-11_1c9p1_42",
  "col-12": "_col-12_1c9p1_45",
  horizontal: gc,
  wrap: $c,
  vertical: bc,
  grid: wc,
  "table-row": "_table-row_1c9p1_78",
  header: kc
}, zc = {
  $style: Sc
}, Le = /* @__PURE__ */ Y(mc, [["__cssModules", zc], ["__scopeId", "data-v-1c821afb"]]), Mc = /* @__PURE__ */ Z({
  __name: "DataTableHeader",
  props: {
    columns: {},
    useSearch: { type: Boolean },
    searchQuery: {},
    overflowed: { type: Boolean },
    result: {},
    clearSelection: { type: Function }
  },
  emits: ["select:column"],
  setup(n, { emit: t }) {
    $e();
    const e = n, l = t, a = (r) => {
      l("select:column", r);
    };
    return (r, i) => (_(), $("header", {
      class: s([
        r.$style["table-header"],
        r.$style.wrapper,
        r.$style.flex,
        r.$style.vertical,
        n.overflowed && r.$style.overflowed
      ])
    }, [
      x(r.$slots, "toolbar", {}, () => [
        f("div", {
          class: s([r.$style.toolbar, r.$style.wrapper, r.$style.flex, r.$style.horizontal])
        }, [
          e.useSearch ? (_(), X(ii, { key: 0 })) : L("", !0)
        ], 2)
      ], !0),
      x(r.$slots, "row", {
        class: s(r.$style["table-row"]),
        columns: e.columns,
        isHeader: !0
      }, () => [
        O(Le, {
          class: s(r.$style["table-row"]),
          columns: e.columns,
          "is-header": !0
        }, {
          default: E((v) => [
            x(r.$slots, "cell", ce({ "onSelect:column": a }, v), () => [
              O(Te, ce({ "onSelect:column": a }, v), null, 16)
            ], !0)
          ]),
          _: 3
        }, 8, ["class", "columns"])
      ], !0)
    ], 2));
  }
}), Bc = "_wrapper_104n3_1", Cc = "_flex_104n3_12", Tc = "_horizontal_104n3_48", Ac = "_wrap_104n3_1", Dc = "_vertical_104n3_60", jc = "_grid_104n3_72", Vc = "_overflowed_104n3_81", Oc = {
  wrapper: Bc,
  flex: Cc,
  "col-1": "_col-1_104n3_12",
  "col-2": "_col-2_104n3_15",
  "col-3": "_col-3_104n3_18",
  "col-4": "_col-4_104n3_21",
  "col-5": "_col-5_104n3_24",
  "col-6": "_col-6_104n3_27",
  "col-7": "_col-7_104n3_30",
  "col-8": "_col-8_104n3_33",
  "col-9": "_col-9_104n3_36",
  "col-10": "_col-10_104n3_39",
  "col-11": "_col-11_104n3_42",
  "col-12": "_col-12_104n3_45",
  horizontal: Tc,
  wrap: Ac,
  vertical: Dc,
  grid: jc,
  "table-header": "_table-header_104n3_78",
  overflowed: Vc,
  "table-row": "_table-row_104n3_81"
}, Hc = {
  $style: Oc
}, Nc = /* @__PURE__ */ Y(Mc, [["__cssModules", Hc], ["__scopeId", "data-v-143bc767"]]), Ic = /* @__PURE__ */ Z({
  __name: "DataTableWrapper",
  props: {
    items: {},
    columns: {},
    useSearch: { type: Boolean },
    searchQuery: {},
    result: {},
    clearSelection: { type: Function }
  },
  emits: ["select:row", "overflowed"],
  setup(n, { emit: t }) {
    $e();
    const e = n, l = t, a = P(), r = A(
      () => new Ce(
        e.items instanceof Map ? e.items : new Map([...e.items].map((c, y) => [y, c]))
      ).mapWithIndex((c, y, b) => [
        y,
        {
          item: c,
          index: b,
          key: y
        }
      ])
    ), i = se(!1);
    return He(a, () => {
      if (a.value) {
        const { scrollHeight: c, clientHeight: y } = a.value;
        i.set(c > y + 1);
      }
    }, {
      window
    }), oe(i, (c) => l("overflowed", c), {
      immediate: !0
    }), (c, y) => (_(), $("div", {
      ref_key: "wrapperRef$",
      ref: a,
      class: s([
        c.$style["table-wrapper"],
        c.$style.wrapper,
        c.$style.flex,
        c.$style.vertical,
        u(i)() && c.$style.overflowed
      ])
    }, [
      (_(!0), $(V, null, F(r.value, ([b, { item: p, index: k }]) => x(c.$slots, "row", {
        key: b,
        columns: e.columns,
        item: p,
        rowIndex: k,
        rowKey: b
      }, () => [
        O(Le, {
          "onSelect:row": y[0] || (y[0] = (g) => l("select:row", g)),
          columns: e.columns,
          item: p,
          "row-index": k,
          "row-key": b
        }, {
          default: E((g) => [
            x(c.$slots, "cell", ce({ ref_for: !0 }, g), () => [
              O(Te, ce({ ref_for: !0 }, g), null, 16)
            ], !0)
          ]),
          _: 3
        }, 8, ["columns", "item", "row-index", "row-key"])
      ], !0)), 128))
    ], 2));
  }
}), Rc = "_wrapper_16jbq_1", qc = "_flex_16jbq_12", Lc = "_horizontal_16jbq_48", Pc = "_wrap_16jbq_1", Ec = "_vertical_16jbq_60", Fc = "_grid_16jbq_72", Uc = "_overflowed_16jbq_105", xc = {
  wrapper: Rc,
  flex: qc,
  "col-1": "_col-1_16jbq_12",
  "col-2": "_col-2_16jbq_15",
  "col-3": "_col-3_16jbq_18",
  "col-4": "_col-4_16jbq_21",
  "col-5": "_col-5_16jbq_24",
  "col-6": "_col-6_16jbq_27",
  "col-7": "_col-7_16jbq_30",
  "col-8": "_col-8_16jbq_33",
  "col-9": "_col-9_16jbq_36",
  "col-10": "_col-10_16jbq_39",
  "col-11": "_col-11_16jbq_42",
  "col-12": "_col-12_16jbq_45",
  horizontal: Lc,
  wrap: Pc,
  vertical: Ec,
  grid: Fc,
  "table-wrapper": "_table-wrapper_16jbq_78",
  overflowed: Uc
}, Wc = {
  $style: xc
}, Zc = /* @__PURE__ */ Y(Ic, [["__cssModules", Wc], ["__scopeId", "data-v-e0155006"]]), Gc = /* @__PURE__ */ Z({
  __name: "DataTable",
  props: {
    items: {},
    columns: {},
    useSearch: { type: Boolean },
    query: {},
    caseSensitive: { type: Boolean },
    limit: {},
    sortBy: {},
    phraseSearch: { type: Boolean },
    strict: { type: Boolean },
    segmentPattern: {},
    relevanceSearch: { type: Boolean },
    relevancePolicy: {},
    threshold: {},
    hideHeader: { type: Boolean }
  },
  emits: ["select:item", "select:row", "select:column"],
  setup(n, { emit: t }) {
    $e();
    const e = n, l = t, a = se(!1), r = (c) => {
      l("select:row", c), l("select:item", c.item);
    }, i = (c) => {
      l("select:column", c);
    }, v = (c) => {
      a.set(c);
    };
    return (c, y) => (_(), $("div", {
      class: s([c.$style["table-container"], c.$style.wrapper, c.$style.flex, c.$style.vertical])
    }, [
      e.hideHeader ? L("", !0) : x(c.$slots, "header", {
        key: 0,
        columns: e.columns,
        useSearch: e.useSearch
      }, () => [
        O(Nc, {
          columns: e.columns,
          overflowed: u(a)(),
          "use-search": e.useSearch
        }, {
          row: E((b) => [
            x(c.$slots, "row", lt(at(b)), () => [
              O(Le, lt(at(b)), {
                default: E((p) => [
                  x(c.$slots, "cell", ce({ "onSelect:column": i }, p), () => [
                    O(Te, ce({ "onSelect:column": i }, p), null, 16)
                  ], !0)
                ]),
                _: 3
              }, 16)
            ], !0)
          ]),
          _: 3
        }, 8, ["columns", "overflowed", "use-search"])
      ], !0),
      x(c.$slots, "wrapper", {
        onOverflowed: v,
        "onSelect:row": r,
        columns: e.columns,
        items: e.items,
        useSearch: e.useSearch
      }, () => [
        O(Zc, {
          onOverflowed: v,
          columns: e.columns,
          items: e.items,
          "use-search": e.useSearch
        }, {
          row: E((b) => [
            x(c.$slots, "row", ce({ "onSelect:row": r }, b), () => [
              O(Le, ce({ "onSelect:row": r }, b), {
                default: E((p) => [
                  x(c.$slots, "cell", lt(at(p)), () => [
                    O(Te, ce({ "onSelect:column": i }, p), null, 16)
                  ], !0)
                ]),
                _: 3
              }, 16)
            ], !0)
          ]),
          _: 3
        }, 8, ["columns", "items", "use-search"])
      ], !0)
    ], 2));
  }
}), Yc = "_wrapper_16ew7_1", Kc = "_flex_16ew7_12", Xc = "_horizontal_16ew7_48", Qc = "_wrap_16ew7_1", Jc = "_vertical_16ew7_60", eu = "_grid_16ew7_72", tu = {
  wrapper: Yc,
  flex: Kc,
  "col-1": "_col-1_16ew7_12",
  "col-2": "_col-2_16ew7_15",
  "col-3": "_col-3_16ew7_18",
  "col-4": "_col-4_16ew7_21",
  "col-5": "_col-5_16ew7_24",
  "col-6": "_col-6_16ew7_27",
  "col-7": "_col-7_16ew7_30",
  "col-8": "_col-8_16ew7_33",
  "col-9": "_col-9_16ew7_36",
  "col-10": "_col-10_16ew7_39",
  "col-11": "_col-11_16ew7_42",
  "col-12": "_col-12_16ew7_45",
  horizontal: Xc,
  wrap: Qc,
  vertical: Jc,
  grid: eu,
  "table-container": "_table-container_16ew7_78"
}, lu = {
  $style: tu
}, Ju = /* @__PURE__ */ Y(Gc, [["__cssModules", lu], ["__scopeId", "data-v-dd3079ef"]]);
class ee {
  /**
   * The bitmap layout for each item uses TWO consecutive Uint32 values (64 bits total):
   * 
   * Lower 32 bits (index * 2):
   * - bits 0-3: status flags (inited, loaded, measured, visible)
   * - bits 4-31: height (28 bits, max 268435455), stored as a value multiplied by 100 to preserve two decimal places
   * 
   * Upper 32 bits (index * 2 + 1):
   * - bits 0-31: top position (32 bits, max 4294967295), stored as a value multiplied by 100 to preserve two decimal places
   *
   * This layout uses Uint32Array instead of BigUint64Array for significantly faster bitwise operations,
   * while maintaining the same bitmap concept to optimize memory usage and access speed.
   *
   * The status flags are defined as follows:
   * - inited: indicates whether the item has been initialized
   * - loaded: indicates whether the item data has been loaded
   * - measured: indicates whether the item height has been measured
   * - visible: indicates whether the item is currently visible in the viewport
   *
   * Layout visualization:
   * | Upper 32 bits (idx*2+1) | Lower 32 bits (idx*2)           |
   * | ----------------------- | ------------------------------- |
   * | top (32 bits)           | height (28 bits) | flags (4)    |
   *
   */
  static PRECISION = 100;
  static HEIGHT_SHIFT = 4;
  static MAX_INT_28_BITS = (1 << 28) - 1;
  static MAX_INT_32_BITS = 4294967295;
  static STATUS_MASK = {
    inited: 1,
    loaded: 2,
    measured: 4,
    visible: 8
  };
  static ATTRS_MASK = {
    height: 4294967280,
    // 28 bits for height (bits 4-31)
    top: 4294967295
    // 32 bits for top
  };
  itemDataBitmap;
  visibleSize = 0;
  /**
   * Creates an instance of ItemCarrier.
   *  @param props.totalItems - Total number of items to be managed.
   *  @param props.visibleSize - Number of items visible in the viewport. default is `0`.
   *  @param props.bufferSize - Size of the buffer to allocate for item data. Default is based on totalItems with a minimum of 1,000. Set it to `-1` to use totalItems exactly.
   */
  constructor(t) {
    const e = t?.totalItems ?? 0, l = t?.bufferSize, a = l !== void 0 && l >= 0 ? l : Math.max(e, 1e3);
    this.itemDataBitmap = new Uint32Array(a * 2), this.visibleSize = t?.visibleSize ?? 50, this.initialize();
  }
  initialize() {
    this.itemDataBitmap.fill(0);
    for (let t = 0; t < this.visibleSize; t++)
      this.setStatus(t, { visible: !0 });
  }
  getBaseSlotOrThrow(t) {
    const e = t * 2;
    if (e + 1 >= this.itemDataBitmap.length)
      throw new Error(
        `Item at index ${t} is out of range. Buffer size: ${this.itemDataBitmap.length / 2}`
      );
    return e;
  }
  getLowerBitsOrThrow(t) {
    const e = this.getBaseSlotOrThrow(t);
    return this.itemDataBitmap[e];
  }
  getUpperBitsOrThrow(t) {
    const e = this.getBaseSlotOrThrow(t);
    return this.itemDataBitmap[e + 1];
  }
  setLowerBits(t, e) {
    const l = this.getBaseSlotOrThrow(t);
    this.itemDataBitmap[l] = e >>> 0;
  }
  setUpperBits(t, e) {
    const l = this.getBaseSlotOrThrow(t);
    this.itemDataBitmap[l + 1] = e >>> 0;
  }
  encodeFixed(t, e, l) {
    const a = Math.round(t * ee.PRECISION);
    if (a > e || a < 0) {
      if (process.env.NODE_ENV !== "production")
        throw new Error(
          `LargeDataTable.ItemCarrier ${l}=${t} is out of range (0 - ${e / ee.PRECISION}) for ${e === ee.MAX_INT_32_BITS ? "32" : "28"}-bit fixed-point field`
        );
      return Math.min(Math.max(a, 0), e) >>> 0;
    }
    return a >>> 0;
  }
  encodeHeight(t) {
    return this.encodeFixed(t, ee.MAX_INT_28_BITS, "height") << ee.HEIGHT_SHIFT >>> 0;
  }
  encodeTop(t) {
    return this.encodeFixed(t, ee.MAX_INT_32_BITS, "top");
  }
  decodeHeight(t) {
    return ((t & ee.ATTRS_MASK.height) >>> ee.HEIGHT_SHIFT) / ee.PRECISION;
  }
  decodeTop(t) {
    return t / ee.PRECISION;
  }
  updateStatusBit(t, e, l) {
    let a = this.getLowerBitsOrThrow(t);
    const r = ee.STATUS_MASK[e], i = (a & r) !== 0;
    a = l(i) ? a | r : a & ~r, this.setLowerBits(t, a);
  }
  getStatus(t) {
    const e = this.getLowerBitsOrThrow(t);
    return {
      inited: (e & ee.STATUS_MASK.inited) !== 0,
      loaded: (e & ee.STATUS_MASK.loaded) !== 0,
      measured: (e & ee.STATUS_MASK.measured) !== 0,
      visible: (e & ee.STATUS_MASK.visible) !== 0
    };
  }
  getAttrs(t) {
    const e = this.getLowerBitsOrThrow(t), l = this.getUpperBitsOrThrow(t), a = this.decodeHeight(e), r = this.decodeTop(l);
    return {
      height: a,
      top: r,
      bottom: r + a
    };
  }
  get(t) {
    return {
      index: t,
      attrs: this.getAttrs(t),
      status: this.getStatus(t)
      // key and item would be retrieved from a separate Map based on index, not stored in the bitmap
    };
  }
  setStatus(t, e) {
    Object.keys(e).forEach(
      (l) => {
        const a = e[l];
        a !== void 0 && this.updateStatusBit(t, l, () => a);
      }
    );
  }
  setAttrs(t, e) {
    if (e.height !== void 0) {
      let l = this.getLowerBitsOrThrow(t);
      const a = this.encodeHeight(e.height);
      l = l & 15 | a & ee.ATTRS_MASK.height, this.setLowerBits(t, l);
    }
    if (e.top !== void 0) {
      const l = this.encodeTop(e.top);
      this.setUpperBits(t, l);
    }
  }
  toggleStatus(t, e) {
    this.updateStatusBit(t, e, (l) => !l);
  }
  setStatusByAttr(t, e, l) {
    this.updateStatusBit(t, e, () => l);
  }
  resetItem(t) {
    const e = this.getBaseSlotOrThrow(t);
    this.itemDataBitmap[e] = 0, this.itemDataBitmap[e + 1] = 0;
  }
  // Utility method to convert a number to a fixed precision (2 decimal places)
  // Used externally for comparing measured heights with stored heights
  static convertToSamePrecision(t) {
    return Math.round(t * ee.PRECISION) / ee.PRECISION;
  }
}
const wt = 8388608, au = /* @__PURE__ */ Z({
  __name: "LargeDataTableWrapper",
  props: {
    totalItems: {},
    visibleSize: {},
    defaultRowHeight: {},
    bufferSize: {},
    lazyUpdate: { type: Boolean },
    variantHeightMode: { type: Boolean },
    items: {},
    columns: {},
    useSearch: { type: Boolean },
    searchQuery: {},
    result: {},
    clearSelection: { type: Function }
  },
  emits: ["request:items", "select:row", "overflowed"],
  setup(n, { emit: t }) {
    Se((T) => ({
      v1d48105a: S.value,
      v3156ec4e: B.value
    })), $e();
    const e = n, l = t, a = Gt("wrapperRef$"), r = P(0), i = P(0), v = P(/* @__PURE__ */ new Set()), c = Yt(new ee()), y = P(-1), b = A(() => e.variantHeightMode ?? v.value.size > 1), p = A(() => {
      if (v.value.size === 0)
        return e.defaultRowHeight ?? 32;
      const T = ee.convertToSamePrecision(q.geoavg(...v.value));
      return Number.isFinite(T) ? T : e.defaultRowHeight ?? 32;
    }), k = A(() => e.visibleSize ?? 50), g = A(() => e.bufferSize ?? 10), C = A(
      () => new Ce(
        e.items instanceof Map ? e.items : new Map([...e.items].map((T, D) => [D, T]))
      ).mapWithIndex((T, D, W) => [
        W,
        Ke({
          index: W,
          item: T,
          key: D,
          get attrs() {
            return c.value.getAttrs(W);
          },
          get status() {
            return c.value.getStatus(W);
          }
        })
      ])
    ), M = A(() => e.totalItems ?? C.value.size), w = A(() => C.value.filter(({ status: T }) => T.visible)), h = A(() => {
      const T = new Ce();
      for (let D = r.value; D < Math.min(r.value + k.value, C.value.size); D++) {
        const W = C.value.get(D);
        W && T.set(D, W);
      }
      return Ke(T);
    }), m = A(() => {
      if (b.value)
        return C.value.reduce(
          ({ prefix: T, subfix: D, active: W }, { status: K, attrs: Q, index: G }) => (G < r.value ? K.measured ? T += Q.height + i.value : T += p.value + i.value : G >= r.value + k.value ? K.measured ? D += Q.height + i.value : D += p.value + i.value : W += K.measured ? Q.height : p.value, { prefix: T, subfix: D, active: W, total: T + D + W }),
          { prefix: 0, subfix: 0, active: 0, total: 0 }
        );
      {
        const T = Math.max(0, M.value - r.value - k.value);
        return {
          prefix: (p.value + i.value) * r.value,
          subfix: (p.value + i.value) * T,
          active: p.value * k.value,
          total: (p.value + i.value) * M.value
        };
      }
    }), o = A(() => m.value.total > wt ? wt / (m.value.total - m.value.active) : 1), S = A(() => m.value.prefix * o.value), B = A(() => m.value.subfix * o.value), U = A(
      () => e.lazyUpdate && "requestIdleCallback" in globalThis ? (T) => globalThis.requestIdleCallback(T) : (T) => globalThis.requestAnimationFrame(T)
    ), te = se(!1), z = () => {
      if (a.value) {
        const { scrollHeight: T, clientHeight: D } = a.value;
        te.set(T > D + 1);
      }
    }, R = () => {
      a.value && (i.value = parseFloat(globalThis.getComputedStyle(a.value).getPropertyValue("row-gap")) || 0);
    }, j = (T) => {
      const D = T.target;
      pe(D) && U.value(() => {
        ft(C);
      });
    }, ie = (T) => {
      Ie(() => {
        const D = T.target;
        pe(D) && U.value(() => {
          ft(C), be("after");
        });
      });
    }, d = (T, D, W, K) => {
      const Q = T.getBoundingClientRect(), { measured: G } = c.value.getStatus(D), { height: ne } = c.value.getAttrs(D), le = ee.convertToSamePrecision(Q.height), ve = G && le !== ne, _e = D > 0 && G && y.value !== -1 && D >= y.value;
      if (!G || ve || _e) {
        if (c.value.setAttrs(D, {
          height: le
        }), v.value.add(Math.round(le)), D > 0) {
          const { measured: he } = c.value.getStatus(D - 1), { bottom: ge } = c.value.getAttrs(D - 1);
          c.value.setAttrs(D, {
            top: he ? ge : (p.value + i.value) * D
          });
        }
        c.value.setStatus(D, {
          measured: !0
        }), ve && y.value === -1 && (y.value = D);
      }
      return y.value !== -1 && W === K - 1 && (y.value = -1), !G || ve || _e;
    }, I = (T, D, W) => {
      const { visible: K, measured: Q } = c.value.getStatus(T);
      if (!Q)
        return !1;
      const { top: G, bottom: ne } = c.value.getAttrs(T);
      if (ne < D && G < D) {
        if (K)
          return c.value.setStatus(T, { visible: !1 }), !0;
      } else if (G > D + W && ne > D + W) {
        if (K)
          return c.value.setStatus(T, { visible: !1 }), !0;
      } else if (!K)
        return c.value.setStatus(T, { visible: !0 }), !0;
      return !1;
    }, H = (T, D) => {
      if (b.value) {
        if (w.value.size <= k.value) {
          const W = C.value.reduce(
            ({ height: Q, index: G }, { status: ne, attrs: le, index: ve }) => {
              const _e = ne.measured ? le.height : p.value;
              return Q += _e + i.value, G === 0 && Q >= T && Q < T + D ? { height: Q, index: ve } : { height: Q, index: G };
            },
            { height: 0, index: 0 }
          ).index, K = Math.max(0, W);
          return K !== r.value ? (be(K < r.value ? "before" : "after"), r.value = K, !0) : !1;
        }
      } else {
        const W = p.value + i.value, K = Math.floor(T / W), Q = Math.max(0, M.value - k.value), G = q.clamp(K - g.value, 0, Q);
        if (G !== r.value)
          return be(G < r.value ? "before" : "after"), r.value = G, !0;
      }
      return !1;
    }, J = (T, D = 0) => {
      Ie(() => {
        D - T.scrollHeight < 10 ? T.scrollTo({ top: D - 1 }) : T.scrollTo({ top: D + 1 }), T.scrollTo({ top: D });
      });
    }, ue = (T) => {
      const D = o.value;
      if (D === 1) return T;
      const W = S.value, K = m.value.active, Q = W, G = W + K;
      return T <= Q ? T / D : T <= G ? m.value.prefix + (T - Q) : m.value.prefix + K + (T - G) / D;
    }, pe = (T) => {
      if (T) {
        const D = T.clientHeight, W = T.scrollTop, K = ue(W), Q = ue(W + D), G = Math.max(0, Q - K), ne = Array.from(T.querySelectorAll(":scope > [data-table-row]")).reduce(
          (le, ve, _e, { length: he }) => {
            const ge = _e + r.value, et = d(
              ve,
              ge,
              _e,
              he
            ), re = I(ge, K, G);
            return le || et || re;
          },
          !1
        );
        return (ne || w.value.size <= g.value) && U.value(() => {
          H(K, G);
        }), ne;
      }
      return !1;
    }, ze = (T) => {
      Ie(() => {
        const D = q.clamp(
          T === "before" ? r.value + k.value - 1 : r.value + g.value,
          0,
          M.value - 1
        );
        l("request:items", {
          [T]: {
            index: D,
            key: C.value.get(D)?.key
          },
          size: k.value
        });
      });
    }, { onTrigger: ye } = De(j, {
      debounce: 100,
      flush: "sync",
      syncWithDebounce: !0
    }), { onTrigger: be } = vl(
      ze,
      {
        debounce: 1e3,
        flush: "sync",
        syncWithDebounce: !0
      }
    );
    He(
      a,
      () => {
        R(), z();
      },
      {
        window
      }
    ), oe(
      [k, M],
      ([T, D]) => {
        c.value = new ee({
          visibleSize: T,
          totalItems: D,
          bufferSize: e.bufferSize
        });
      },
      {
        immediate: !0
      }
    ), oe(te, (T) => l("overflowed", T), {
      immediate: !0
    });
    const we = oe(
      a,
      (T) => {
        T && (J(T), we.stop());
      },
      {
        immediate: !0,
        flush: "post"
      }
    );
    return (T, D) => (_(), $("div", {
      ref_key: "wrapperRef$",
      ref: a,
      onScrollCapture: D[1] || (D[1] = //@ts-ignore
      (...W) => u(ye) && u(ye)(...W)),
      onScrollendCapture: ie,
      class: s([
        T.$style["table-wrapper"],
        T.$style.wrapper,
        T.$style.flex,
        T.$style.vertical,
        u(te)() && T.$style.overflowed
      ])
    }, [
      (_(!0), $(V, null, F(h.value, ([W, { item: K, index: Q }]) => x(T.$slots, "row", {
        key: W,
        columns: e.columns,
        item: K,
        rowIndex: Q,
        rowKey: W
      }, () => [
        O(Le, {
          "onSelect:row": D[0] || (D[0] = (G) => l("select:row", G)),
          columns: e.columns,
          item: K,
          "row-index": Q,
          "row-key": W,
          "data-table-row": ""
        }, {
          default: E((G) => [
            x(T.$slots, "cell", ce({ ref_for: !0 }, G), () => [
              O(Te, ce({ ref_for: !0 }, G), null, 16)
            ], !0)
          ]),
          _: 3
        }, 8, ["columns", "item", "row-index", "row-key"])
      ], !0)), 128))
    ], 34));
  }
}), su = "_wrapper_17474_1", ou = "_flex_17474_12", nu = "_horizontal_17474_48", ru = "_wrap_17474_1", iu = "_vertical_17474_60", cu = "_grid_17474_72", uu = "_overflowed_17474_108", du = {
  wrapper: su,
  flex: ou,
  "col-1": "_col-1_17474_12",
  "col-2": "_col-2_17474_15",
  "col-3": "_col-3_17474_18",
  "col-4": "_col-4_17474_21",
  "col-5": "_col-5_17474_24",
  "col-6": "_col-6_17474_27",
  "col-7": "_col-7_17474_30",
  "col-8": "_col-8_17474_33",
  "col-9": "_col-9_17474_36",
  "col-10": "_col-10_17474_39",
  "col-11": "_col-11_17474_42",
  "col-12": "_col-12_17474_45",
  horizontal: nu,
  wrap: ru,
  vertical: iu,
  grid: cu,
  "table-wrapper": "_table-wrapper_17474_78",
  overflowed: uu
}, _u = {
  $style: du
}, ed = /* @__PURE__ */ Y(au, [["__cssModules", _u], ["__scopeId", "data-v-73f671af"]]), pu = ["textContent"], vu = ["textContent"], fu = ["textContent"], mu = ["textContent"], yu = ["id", "data-label"], hu = /* @__PURE__ */ Z({
  __name: "Timeline",
  props: {
    events: {},
    follow: { type: Boolean, default: !1 },
    title: { default: "Timeline" },
    running: { type: Boolean, default: !1 },
    start: {},
    end: {},
    eventSignalOptions: {},
    duration: { default: 300 * 1e3 },
    basis: { default: 300 * 1e3 },
    grow: { type: [Boolean, String] },
    growThreshold: {},
    growPolicy: {},
    shrink: { type: [Boolean, String] },
    shrinkThreshold: {},
    shrinkPolicy: {}
  },
  emits: ["update:range", "update:duration", "update:focused", "update:focused.array"],
  setup(n, { emit: t }) {
    Se((o) => ({
      ec453610: M.value
    }));
    const e = n, l = t, a = P(), { width: r } = Pe(a), { timestamp: i, pause: v, resume: c } = Et({
      controls: !0,
      interval: 1e3,
      immediate: e.running
    }), { x: y } = Ft(a, {
      behavior: "smooth"
    }), b = A(
      () => new Ce(
        jt(
          Array.isArray(e.events) ? e.events : [...e.events.values()],
          ["range.start"],
          ["asc"]
        ).map((o) => [
          o.range.start.getTime(),
          {
            event: o,
            duration: Math.max(
              (o.range.end?.getTime() ?? (e.running ? i.value : 0)) - o.range.start.getTime(),
              0
            )
          }
        ])
      )
    ), p = A(() => Number(e.start) || b.value.keys().next().value || 0), k = A(
      () => Number(e.end) || (e.running ? i.value : Math.max(
        ...[...b.value.values()].map(
          ({ event: o, duration: S }) => o.range.end?.getTime() ?? o.range.start.getTime() + S
        )
      ))
    ), g = A(() => Number(k.value - p.value) || 0), C = A(
      () => ((o) => o.duration === "justify" ? o.grow === "fill" && Math.abs(Number(o.basis) - g.value) <= Number(o.growThreshold ?? 0) ? g.value : Number(o.basis) : o.duration === "cover" ? g.value : Number(o.duration) || 0)(
        e
      )
    ), M = A(() => g.value / C.value * r.value), w = A(() => ({
      startTime: p.value + y.value / M.value * g.value,
      endTime: p.value + (y.value + r.value) / M.value * g.value
    })), h = () => {
      a.value?.scrollTo({
        left: M.value,
        behavior: "smooth"
      });
    }, { onTrigger: m } = De(
      () => {
        l("update:range", {
          start: new Date(w.value.startTime),
          end: new Date(w.value.endTime)
        }), l("update:duration", new Date(C.value));
        const o = b.value.filter(
          ({ event: S }) => !(Number(S.range.start ?? 0) <= Number(w.value.startTime ?? 0) && Number(S.range.end ?? 0) <= Number(w.value.startTime ?? 0)) && !(Number(S.range.start ?? 0) >= Number(w.value.endTime ?? 0) && Number(S.range.end ?? 0) >= Number(w.value.endTime ?? 0))
        ).map(({ event: S }) => [S.id, S]);
        l("update:focused", o), l("update:focused.array", o.toArray("values"));
      },
      e.eventSignalOptions ?? {
        flush: "post",
        debounce: 100
      }
    );
    return Kt(() => {
      e.running ? c() : v();
    }), (o, S) => (_(), X(fe, {
      class: s([o.$style["timeline-container"], o.$style.wrapper, o.$style.flex, o.$style.vertical]),
      "has-stroke": !1,
      purpose: "container",
      radius: "var(--agh-ref-border-radius-500)"
    }, {
      default: E(() => [
        f("header", {
          class: s([o.$style.wrapper, o.$style.flex, o.$style.horizontal])
        }, [
          f("h1", null, N(e.title), 1),
          f("div", {
            class: s([o.$style.wrapper, o.$style.flex, o.$style.horizontal])
          }, [
            f("p", {
              class: s([o.$style.wrapper, o.$style.flex, o.$style.vertical])
            }, [
              f("span", {
                textContent: N(u(me)(w.value, "{{ startTime | date : yyyy/MM/dd }}")),
                "data-label": "date"
              }, null, 8, pu),
              f("span", {
                textContent: N(u(me)(w.value, "{{ startTime | date : HH:mm:ss }}")),
                "data-label": "time"
              }, null, 8, vu)
            ], 2),
            O(u(de), {
              class: s(o.$style.icon),
              icon: "fa6-solid:arrows-left-right"
            }, null, 8, ["class"]),
            f("p", {
              class: s([o.$style.wrapper, o.$style.flex, o.$style.vertical])
            }, [
              f("span", {
                textContent: N(u(me)(w.value, "{{ endTime | date : yyyy/MM/dd }}")),
                "data-label": "date"
              }, null, 8, fu),
              f("span", {
                textContent: N(u(me)(w.value, "{{ endTime | date : HH:mm:ss }}")),
                "data-label": "time"
              }, null, 8, mu)
            ], 2)
          ], 2),
          O(ae, {
            onClick: S[0] || (S[0] = (B) => h()),
            class: s(o.$style.button),
            disabled: u(y) + u(r) >= M.value,
            icon: "fa6-solid:forward-step",
            level: "secondary",
            variant: "square"
          }, null, 8, ["class", "disabled"])
        ], 2),
        f("div", {
          ref_key: "wrapperRef$",
          ref: a,
          onScroll: S[1] || (S[1] = //@ts-ignore
          (...B) => u(m) && u(m)(...B)),
          class: s([o.$style["timeline-wrapper"], o.$style.wrapper, o.$style.flex, o.$style.horizontal])
        }, [
          f("div", {
            class: s([o.$style["timeline-axis"], o.$style.wrapper, o.$style.flex, o.$style.horizontal])
          }, null, 2),
          (_(!0), $(V, null, F(b.value, ([B, { event: U, duration: te }], z) => (_(), $("div", {
            key: `tick-${z}`,
            id: U.id,
            class: s(o.$style["timeline-tick"]),
            "data-label": `${u(me)(U.range, "{{ start | date : yyyy/MM/dd HH:mm:ss }} - {{ end | date : yyyy/MM/dd HH:mm:ss }}")}`,
            style: pt({
              left: `${(B - p.value) / g.value * M.value}px`,
              width: `${te / g.value * M.value}px`
            })
          }, null, 14, yu))), 128)),
          f("div", {
            class: s(o.$style.anchor)
          }, null, 2)
        ], 34)
      ]),
      _: 1
    }, 8, ["class"]));
  }
}), gu = "_wrapper_u9m49_1", $u = "_flex_u9m49_12", bu = "_horizontal_u9m49_48", wu = "_wrap_u9m49_1", ku = "_vertical_u9m49_60", Su = "_grid_u9m49_72", zu = "_icon_u9m49_101", Mu = "_button_u9m49_122", Bu = "_anchor_u9m49_152", Cu = {
  wrapper: gu,
  flex: $u,
  "col-1": "_col-1_u9m49_12",
  "col-2": "_col-2_u9m49_15",
  "col-3": "_col-3_u9m49_18",
  "col-4": "_col-4_u9m49_21",
  "col-5": "_col-5_u9m49_24",
  "col-6": "_col-6_u9m49_27",
  "col-7": "_col-7_u9m49_30",
  "col-8": "_col-8_u9m49_33",
  "col-9": "_col-9_u9m49_36",
  "col-10": "_col-10_u9m49_39",
  "col-11": "_col-11_u9m49_42",
  "col-12": "_col-12_u9m49_45",
  horizontal: bu,
  wrap: wu,
  vertical: ku,
  grid: Su,
  "timeline-container": "_timeline-container_u9m49_78",
  icon: zu,
  button: Mu,
  "timeline-wrapper": "_timeline-wrapper_u9m49_125",
  anchor: Bu,
  "timeline-axis": "_timeline-axis_u9m49_155",
  "timeline-tick": "_timeline-tick_u9m49_180"
}, Tu = {
  $style: Cu
}, td = /* @__PURE__ */ Y(hu, [["__cssModules", Tu], ["__scopeId", "data-v-d3072355"]]);
export {
  Ku as AttackMatrix,
  Nu as BadgeBox,
  St as BaseLink,
  Ul as BaseList,
  Ee as BasePoly,
  ae as ButtonBox,
  fe as CardBox,
  Xu as CardList,
  Ju as DataTable,
  Te as DataTableCell,
  Nc as DataTableHeader,
  Le as DataTableRow,
  Zc as DataTableWrapper,
  Eu as DatetimePicker,
  Iu as DoughnutChart,
  Fu as DropDown,
  Uu as FileUploader,
  Fr as InnerShadowDeco,
  Zu as InputRange,
  ed as LargeDataTableWrapper,
  Ru as LineChart,
  xu as LoadingIcon,
  qu as MatrixChart,
  er as ProgressBar,
  Wu as ProgressCircle,
  Lu as RadarChart,
  gt as RoundEffect,
  ii as SearchBar,
  Qe as SelectMenu,
  Pu as StackBarChart,
  Gu as SwitchButton,
  Qu as TabGroup,
  Yu as TextArea,
  Ue as TextField,
  td as Timeline
};
//# sourceMappingURL=ui.component.es.js.map
