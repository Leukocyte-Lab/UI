import { b as wt, a as Ht, c as It, g as dt, _ as kt, d as G, u as Le, B as Ee, e as Ne, f as _t, h as le, i as Rt, j as qt, k as Lt, l as Et, m as Pt } from "./ButtonBox-CRi82xFz.js";
import { defineComponent as Z, openBlock as _, createElementBlock as b, Fragment as V, renderSlot as W, createCommentVNode as L, renderList as U, unref as c, useCssVars as Se, createBlock as K, normalizeClass as s, withCtx as F, toDisplayString as H, createTextVNode as St, computed as T, reactive as Ft, toValue as et, watch as oe, markRaw as Ye, ref as E, createVNode as O, createElementVNode as f, onMounted as Te, normalizeStyle as pt, mergeProps as ie, useSlots as $e, useModel as ze, mergeModels as Ve, nextTick as rt, withDirectives as nt, withKeys as je, createSlots as Ut, onUpdated as xt, Transition as Wt, normalizeProps as tt, guardReactiveProps as lt, useTemplateRef as Zt, shallowRef as Gt, triggerRef as Yt, onBeforeUpdate as Kt } from "vue";
import { m as Qe, z as Xt, v as Qt, $ as Jt, g as el, h as zt, i as Ke, a0 as tl, a1 as ll, a2 as ft, a3 as al, Z as sl, Q as Ue, a4 as ol, a5 as rl, l as mt, a6 as nl, V as il, K as cl, a7 as ul, a8 as it, e as ke, p as ye, a9 as Ie, aa as Mt, ab as Oe, a as q, s as xe, b as ae, M as Ce, t as dl, S as _l, ac as at, f as pl, u as vl } from "./uuid-CHU7iIvm.js";
import { s as fl, o as ml, b as yl, f as hl, t as We, p as Ct, u as Bt, a as gl, v as Me, c as $l, d as bl } from "./validation-BvhcInFO.js";
import { l as we, m as yt, n as Ze, o as ct, i as wl, d as Re, j as kl, t as Tt, p as Sl } from "./i18n.service-JsWnUUar.js";
import { Icon as ue } from "@iconify/vue/offline";
function At(r, t) {
  return fl(ml(r, t, Qe), r + "");
}
function zl(r) {
  return Xt(r) && Qt(r);
}
var Ml = "Expected a function";
function Cl(r, t, e) {
  if (typeof r != "function")
    throw new TypeError(Ml);
  return setTimeout(function() {
    r.apply(void 0, e);
  }, t);
}
var vt = At(function(r, t, e) {
  return Cl(r, Jt(t) || 0, e);
});
function Bl(r, t, e) {
  for (var l = -1, a = r == null ? 0 : r.length; ++l < a; )
    if (e(t, r[l]))
      return !0;
  return !1;
}
function Tl(r, t) {
  var e = [];
  return el(r, function(l, a, n) {
    t(l, a, n) && e.push(l);
  }), e;
}
function Al(r, t) {
  var e = Ke(r) ? tl : Tl;
  return e(r, zt(t));
}
function Dl(r) {
  return r && r.length ? r[0] : void 0;
}
var jl = Math.min;
function Vl(r, t, e) {
  for (var l = e ? Bl : al, a = r[0].length, n = r.length, i = n, p = Array(n), u = 1 / 0, h = []; i--; ) {
    var g = r[i];
    u = jl(g.length, u), p[i] = !e && a >= 120 && g.length >= 120 ? new ll(i && g) : void 0;
  }
  g = r[0];
  var v = -1, k = p[0];
  e:
    for (; ++v < a && h.length < u; ) {
      var m = g[v], B = m;
      if (m = e || m !== 0 ? m : 0, !(k ? ft(k, B) : l(h, B, e))) {
        for (i = n; --i; ) {
          var M = p[i];
          if (!(M ? ft(M, B) : l(r[i], B, e)))
            continue e;
        }
        k && k.push(B), h.push(m);
      }
    }
  return h;
}
function Ol(r) {
  return zl(r) ? r : [];
}
var Nl = At(function(r) {
  var t = sl(r), e = Ue(r, Ol);
  return t = typeof t == "function" ? t : void 0, t && e.pop(), e.length && e[0] === r[0] ? Vl(e, void 0, t) : [];
});
function Hl(r, t) {
  return r === t || ol(r, t, rl(t));
}
function Il(r) {
  return r && r.length ? wt(r, Qe, Ht) : void 0;
}
function Rl(r) {
  return r && r.length ? wt(r, Qe, It) : void 0;
}
function ql(r, t) {
  var e = r.length;
  for (r.sort(t); e--; )
    r[e] = r[e].value;
  return r;
}
function Ll(r, t) {
  if (r !== t) {
    var e = r !== void 0, l = r === null, a = r === r, n = mt(r), i = t !== void 0, p = t === null, u = t === t, h = mt(t);
    if (!p && !h && !n && r > t || n && i && u && !p && !h || l && i && u || !e && u || !a)
      return 1;
    if (!l && !n && !h && r < t || h && e && a && !l && !n || p && e && a || !i && a || !u)
      return -1;
  }
  return 0;
}
function El(r, t, e) {
  for (var l = -1, a = r.criteria, n = t.criteria, i = a.length, p = e.length; ++l < i; ) {
    var u = Ll(a[l], n[l]);
    if (u) {
      if (l >= p)
        return u;
      var h = e[l];
      return u * (h == "desc" ? -1 : 1);
    }
  }
  return r.index - t.index;
}
function Pl(r, t, e) {
  t.length ? t = Ue(t, function(n) {
    return Ke(n) ? function(i) {
      return il(i, n.length === 1 ? n[0] : n);
    } : n;
  }) : t = [Qe];
  var l = -1;
  t = Ue(t, cl(zt));
  var a = nl(r, function(n, i, p) {
    var u = Ue(t, function(h) {
      return h(n);
    });
    return { criteria: u, index: ++l, value: n };
  });
  return ql(a, function(n, i) {
    return El(n, i, e);
  });
}
function Dt(r, t, e, l) {
  return r == null ? [] : (Ke(t) || (t = t == null ? [] : [t]), e = e, Ke(e) || (e = e == null ? [] : [e]), Pl(r, t, e));
}
function Fl(r, t) {
  return yl(r, t, function(e, l) {
    return ul(r, l);
  });
}
var jt = hl(function(r, t) {
  return r == null ? {} : Fl(r, t);
});
const Ul = /* @__PURE__ */ Z({
  __name: "BaseList",
  props: {
    items: {},
    groupBy: {}
  },
  setup(r) {
    const t = r, e = we(
      () => it(
        We(dt(t.items, t.groupBy ?? "")).map(([l, a]) => [
          l === "undefined" ? "" : l,
          a
        ])
      )
    );
    return (l, a) => (_(), b(V, null, [
      !t.items || t.items.length === 0 ? W(l.$slots, "placeholder", { key: 0 }) : L("", !0),
      (_(!0), b(V, null, U(c(e), (n, i) => (_(), b(V, {
        key: `list-group-${i}`
      }, [
        i ? W(l.$slots, "group", {
          key: 0,
          group: i,
          items: n
        }) : L("", !0),
        (_(!0), b(V, null, U(n, (p, u) => W(l.$slots, "default", {
          key: `list-item-${u}`,
          index: u,
          item: p
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
  setup(r) {
    Se((e) => ({
      v701c0127: `"${t.delimiter}"`
    }));
    const t = r;
    return (e, l) => (_(), K(kt, {
      class: s([e.$style["badge-container"], e.$style[t.variant], e.$style[`color-${t.color}`]]),
      link: t.link
    }, {
      default: F(() => [
        t.label ? (_(), b("label", {
          key: 0,
          class: s([e.$style["badge-label"], e.$style.wrapper, e.$style.flex, e.$style.horizontal])
        }, [
          t.icon ? (_(), K(c(ue), {
            key: 0,
            class: s(e.$style.icon),
            icon: t.icon
          }, null, 8, ["class", "icon"])) : L("", !0),
          t.delimiter && t.variant === "capsule" ? (_(!0), b(V, { key: 1 }, U(t.label.split(t.delimiter), (a, n) => (_(), b("span", { key: n }, H(a), 1))), 128)) : (_(), b(V, { key: 2 }, [
            St(H(t.label), 1)
          ], 64))
        ], 2)) : L("", !0),
        t.content ? (_(), b("p", {
          key: 1,
          class: s(e.$style["badge-content"])
        }, H(t.content), 3)) : L("", !0)
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
}, Hu = /* @__PURE__ */ G(xl, [["__cssModules", la], ["__scopeId", "data-v-ffce24ce"]]), aa = /* @__PURE__ */ Z({
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
  setup(r) {
    Se((n) => ({
      v64737810: e.value
    }));
    const t = r, e = T(
      () => t.radius ?? `var(--agh-ref-border-radius-${t.purpose === "box" ? 300 : 500})`
    ), { triggered: l, onTrigger: a } = ke((n) => {
      t.clickable || n.stopPropagation();
    });
    return (n, i) => (_(), K(kt, {
      ref: "wrapperRef$",
      onClickPassive: c(a),
      class: s([
        n.$style["card-container"],
        n.$style.behavior,
        n.$style[t.variant],
        n.$style[`color-${t.color}`],
        n.$style[`stroke-${t.strokeWeight}`],
        n.$style[`purpose-${t.purpose}`],
        (t.link || t.clickable) && n.$style.clickable,
        t.hasStroke && n.$style["has-stroke"],
        (c(l)() && t.clickable || t.active) && n.$style.clicked
      ]),
      link: t.link
    }, {
      default: F(() => [
        W(n.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["onClickPassive", "class", "link"]));
  }
}), sa = "_behavior_1tc3j_1", oa = "_clickable_1tc3j_1", ra = "_disabled_1tc3j_4", na = "_draggable_1tc3j_7", ia = "_move_1tc3j_7", ca = "_loading_1tc3j_10", ua = "_metallic_1tc3j_14", da = "_flat_1tc3j_14", _a = "_clicked_1tc3j_22", pa = "_dash_1tc3j_105", va = "_purpose_1tc3j_477", fa = {
  behavior: sa,
  clickable: oa,
  disabled: ra,
  draggable: na,
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
}, ve = /* @__PURE__ */ G(aa, [["__cssModules", ma], ["__scopeId", "data-v-bcff545e"]]), Pe = ({
  type: r,
  axises: t,
  data: e
}) => {
  const l = Ft({
    datasets: [],
    axises: {}
  }), a = {
    datasets: T(() => l.datasets),
    axises: T(() => l.axises)
  }, n = T(() => et(e) ?? []), i = T(() => et(t) ?? []), p = T(() => et(r) ?? []), u = (v) => !Array.isArray(v) || v.length === 0 ? [] : Array.isArray(v) && v[0]?.label ? v : [
    {
      label: "Data",
      series: v
    }
  ], h = (v, k) => k.map((m) => ({
    data: m,
    ...it(
      We(v).filter(([, B]) => !Ie(B)).map(([B, M]) => {
        const w = M.selector ? xe(m, M.selector) : null, y = M.accessor ? ye(m, M.accessor) : w;
        return [
          B,
          {
            normalized: Number(
              M.type === "number" ? parseFloat(String(w)) : M.type === "date" ? new Date(Number(w)) : w
            ),
            value: y
          }
        ];
      })
    )
  })), g = (v, k, m) => {
    const B = u(m).map((y) => ({
      ...y,
      label: ye(y, y.label ?? ""),
      series: h(k, y.series)
    })), M = B.flatMap((y) => y.series), w = it(
      We(k).filter(([, y]) => !Ie(y)).map(([y, $]) => {
        const o = Mt(Oe(M, `${y}.${$.type === "string" ? "value" : "normalized"}`)), z = Number($.min === "auto" ? Rl(o) : $.min ?? 0), C = Number(
          $.max === "auto" ? Il(o) ?? 0 : $.max ?? o.length - (/radar|doughnut/.test(v ?? "") ? 0 : 1)
        );
        return [
          y,
          {
            ...$,
            min: z,
            max: C,
            metrics: $.type === "string" ? o.map((x, se) => ({
              normalized: se / (C - z),
              value: x
            })) : Array(q.clamp(q.ceil((C - z) / ($.step ?? 1)) + 1, 0, 1 / 0)).fill(0).map((x, se) => ({
              normalized: se / q.ceil((C - z) / ($.step ?? 1)),
              value: z + ($.step ?? 1) * se
            }))
          }
        ];
      })
    );
    return w && We(w).forEach(([y, $]) => {
      $.type === "string" ? B.forEach((o) => {
        o.series.forEach((z) => {
          z[y].normalized = Oe($.metrics, "value").indexOf(z[y].value) / (($.metrics ?? []).length - (/radar|doughnut/.test(v ?? "") ? 0 : 1));
        });
      }) : B.forEach((o) => {
        o.series.forEach((z) => {
          z[y].normalized = (Number(z[y].normalized ?? 0) - Number($.min)) / (Number($.max) - Number($.min));
        });
      });
    }), {
      datasets: B,
      axises: w
    };
  };
  return oe([p, n, i], () => {
    const v = g(p.value, i.value, n.value);
    l.datasets = Ye(v.datasets), l.axises = Ye(v.axises);
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
  setup(r) {
    const t = r, e = T(() => t.datasets), l = T(() => t.axises), a = E(), { width: n, height: i } = Le(a), { axises: p, datasets: u } = Pe({
      type: "doughnut",
      data: e,
      axises: l
    }), h = T(
      () => q.clamp(
        q.min(n.value - t.options.offset.x, i.value - t.options.offset.y) / 2,
        0,
        1 / 0
      )
    ), g = T(() => t.options.gap ?? (t.options.round ? 30 : 15)), v = T(() => h.value * 2 * q.PI), k = T(() => ({
      x: n.value / 2,
      y: i.value / 2
    })), m = T(
      () => u.value.map((M) => M.series.reduce((w, y) => w + y.y.normalized, 0))
    ), B = T(
      () => u.value.map((M, w) => ({
        ...M,
        series: M.series.map((y) => ({
          ...y,
          y: {
            ...y.y,
            normalized: q.clamp(
              y.y.normalized / (m.value[w] ?? 1) - g.value / v.value,
              0,
              1
            )
          }
        })).filter((y) => y.y.normalized > g.value / v.value / 2).map((y, $, o) => ({
          ...y,
          y: {
            ...y.y,
            normalized: y.y.normalized / o.reduce((z, C) => z + C.y.normalized, 0)
          }
        })).map((y, $, o) => ({
          ...y,
          y: {
            ...y.y,
            normalized: q.clamp(
              y.y.normalized / o.reduce((z, C) => z + C.y.normalized, 0) - g.value / v.value,
              0,
              1
            )
          }
        })).map((y, $, o) => ({
          ...y,
          y: {
            ...y.y,
            offset: o.slice(0, $).reduce((z, C) => z + C.y.normalized, 0)
          }
        })).map((y, $) => ({
          ...y,
          x: {
            ...y.x,
            label: q.cos(
              q.rad(
                (y.y.offset + y.y.normalized / 2 + g.value / v.value * $) * 360 - 90
              )
            )
          },
          y: {
            ...y.y,
            label: q.sin(
              q.rad(
                (y.y.offset + y.y.normalized / 2 + g.value / v.value * $) * 360 - 90
              )
            )
          }
        }))
      }))
    );
    return (M, w) => (_(), b("div", {
      ref_key: "wrapperRef$",
      ref: a,
      class: s(M.$style["chart-container"])
    }, [
      O(Ee, {
        height: c(i),
        width: c(n)
      }, {
        path: F(() => [
          f("g", {
            class: s([M.$style["chart-group-plots"]])
          }, [
            (_(!0), b(V, null, U(B.value, (y) => (_(), b(V, {
              key: y.label
            }, [
              (_(!0), b(V, null, U(y.series, ($, o) => (_(), b("g", {
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
                  r: h.value,
                  "stroke-dasharray": `${$.y.normalized * v.value} ${(1 - $.y.normalized) * v.value}`,
                  "stroke-dashoffset": $.y.offset * v.value * -1 - g.value * o + 0.25 * v.value,
                  "pointer-events": "visibleStroke"
                }, null, 10, ya),
                (_(), b("foreignObject", {
                  class: s([M.$style["chart-area"], M.$style["legend-container"]]),
                  x: k.value.x + h.value * $.x.label - 260 * +($.x.label < 0),
                  y: k.value.y + h.value * $.y.label - 240 * +($.y.label < 0),
                  height: "240",
                  width: "260"
                }, [
                  O(ve, {
                    class: s([M.$style["chart-area"], M.$style["legend-wrapper"]]),
                    radius: "var(--agh-ref-border-radius-500)"
                  }, {
                    default: F(() => [
                      t.options.title ? (_(), b(V, { key: 0 }, [
                        f("h1", {
                          class: s([M.$style["chart-area"], M.$style["legend-title"], M.$style.doughnut])
                        }, [
                          f("span", null, H($.x.value), 1)
                        ], 2),
                        w[0] || (w[0] = f("hr", null, null, -1))
                      ], 64)) : L("", !0),
                      (_(!0), b(V, null, U(c(p), (z, C) => (_(), b(V, { key: C }, [
                        !/(x)/.test(C) && z && $[C] ? (_(), b("div", {
                          key: 0,
                          class: s([
                            M.$style["chart-area"],
                            M.$style["legend-group"],
                            M.$style.doughnut
                          ])
                        }, [
                          f("label", {
                            class: s([M.$style["chart-area"], M.$style["legend-label"]])
                          }, H(z.label), 3),
                          f("p", {
                            class: s([M.$style["chart-area"], M.$style["legend-value"]])
                          }, H($[C].value), 3)
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
              r: h.value - 10
            }, null, 8, $a)
          ]),
          f("g", ba, [
            (_(), b("foreignObject", {
              class: s(M.$style["chart-content-wrapper"]),
              height: h.value * 2,
              width: h.value * 2,
              x: k.value.x - h.value,
              y: k.value.y - h.value
            }, [
              W(M.$slots, "default", {}, void 0, !0)
            ], 10, wa))
          ])
        ]),
        _: 3
      }, 8, ["height", "width"])
    ], 2));
  }
}), Sa = "_behavior_ag127_1", za = "_clickable_ag127_1", Ma = "_disabled_ag127_4", Ca = "_draggable_ag127_7", Ba = "_move_ag127_7", Ta = "_loading_ag127_10", Aa = "_path_ag127_24", Da = "_radar_ag127_29", ja = "_label_ag127_32", Va = "_plot_ag127_130", Oa = "_point_ag127_130", Na = "_doughnut_ag127_141", Ha = "_bg_ag127_150", Ia = "_round_ag127_154", Ra = "_line_ag127_167", qa = {
  behavior: Sa,
  clickable: za,
  disabled: Ma,
  draggable: Ca,
  move: Ba,
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
  doughnut: Na,
  "legend-container": "_legend-container_ag127_141",
  bg: Ha,
  round: Ia,
  line: Ra,
  "legend-wrapper": "_legend-wrapper_ag127_195",
  "legend-group": "_legend-group_ag127_206",
  "legend-value": "_legend-value_ag127_214",
  "legend-label": "_legend-label_ag127_217",
  "legend-title": "_legend-title_ag127_221"
}, La = {
  $style: qa
}, Iu = /* @__PURE__ */ G(ka, [["__cssModules", La], ["__scopeId", "data-v-076402e2"]]), Ea = ["d"], Pa = ["text-anchor", "x", "y"], Fa = ["dy", "x"], Ua = ["x", "y"], xa = ["dy", "x"], Wa = { key: 1 }, Za = ["d"], Ga = ["cx", "cy"], Ya = ["cx", "cy"], Ka = ["x", "y"], Xa = /* @__PURE__ */ Z({
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
  setup(r) {
    const t = r, e = T(() => t.datasets), l = T(() => t.axises), a = E(), { width: n, height: i } = Le(a), { axises: p, datasets: u } = Pe({
      type: "line",
      data: e,
      axises: l
    }), h = T(
      () => p.value?.x?.metrics && p.value?.y?.metrics && i.value && i.value - t.options.offset.y > 0 && n.value && n.value - t.options.offset.x > 0 ? `
  M ${t.options.offset.x} 0
  L ${t.options.offset.x} ${i.value - t.options.offset.y}
  L ${n.value} ${i.value - t.options.offset.y}
  ${t.options.grid?.includes("x") ? `${p.value.x.metrics.map(
        (v) => `
              M ${v.normalized * (n.value - t.options.offset.x) + t.options.offset.x} 0
              V ${i.value - t.options.offset.y}
            `
      ).join("")}` : ""}
  ${t.options.grid?.includes("y") ? `${p.value.y.metrics.map(
        (v) => `
              M ${t.options.offset.x} ${(1 - v.normalized) * (i.value - t.options.offset.y)}
              H ${n.value}
            `
      ).join(`
`)}` : ""}
` : ""
    ), g = T(
      () => h.value && u ? u.value.map((v) => ({
        ...v,
        path: `
            ${v.series.map(
          (k, m) => m === 0 ? `M ${k.x.normalized * (n.value - t.options.offset.x) + t.options.offset.x} ${(1 - k.y.normalized) * (i.value - t.options.offset.y)}` : t.options.curve === "smooth" ? m === 1 ? `C ${(v.series[m - 1]?.x.normalized ?? 0) * (n.value - t.options.offset.x) + t.options.offset.x + n.value / v.series.length * t.options.radius} ${(1 - (v.series[m - 1]?.y.normalized ?? 0)) * (i.value - t.options.offset.y)} ${k.x.normalized * (n.value - t.options.offset.x) + t.options.offset.x - n.value / v.series.length * t.options.radius} ${(1 - k.y.normalized) * (i.value - t.options.offset.y)} ${k.x.normalized * (n.value - t.options.offset.x) + t.options.offset.x} ${(1 - k.y.normalized) * (i.value - t.options.offset.y)}` : `S ${k.x.normalized * (n.value - t.options.offset.x) + t.options.offset.x - n.value / v.series.length * t.options.radius} ${(1 - k.y.normalized) * (i.value - t.options.offset.y)} ${k.x.normalized * (n.value - t.options.offset.x) + t.options.offset.x} ${(1 - k.y.normalized) * (i.value - t.options.offset.y)}` : `L ${k.x.normalized * (n.value - t.options.offset.x) + t.options.offset.x} ${(1 - k.y.normalized) * (i.value - t.options.offset.y)}`
        ).join(`
`)}`
      })) : []
    );
    return (v, k) => (_(), b("div", {
      ref_key: "wrapperRef$",
      ref: a,
      class: s(v.$style["chart-container"])
    }, [
      O(Ee, {
        height: c(i),
        width: c(n)
      }, {
        defs: F(() => [...k[0] || (k[0] = [])]),
        path: F(() => [
          f("g", {
            id: "chart-group-axises",
            class: s([v.$style["chart-group-axises"]])
          }, [
            f("path", {
              class: s([v.$style["chart-axis"], v.$style.line, v.$style.path]),
              d: h.value
            }, null, 10, Ea)
          ], 2),
          c(p) && c(n) && c(i) ? (_(), b("g", {
            key: 0,
            class: s([v.$style["chart-group-axises-label"]])
          }, [
            c(p).x && c(p).x.metrics ? (_(!0), b(V, { key: 0 }, U(c(p).x.metrics, (m, B) => (_(), b("text", {
              key: `axis-x--${B}`,
              class: s([v.$style["chart-axis"], v.$style.label]),
              "text-anchor": B === 0 ? "start" : B === c(p).x.metrics.length - 1 ? "end" : "middle",
              x: m.normalized * (c(n) - t.options.offset.x) + t.options.offset.x,
              y: c(i) - t.options.offset.y + 20
            }, [
              (_(!0), b(V, null, U((m.value ?? "").toString().split(`
`), (M, w) => (_(), b("tspan", {
                key: w,
                dy: `${w * 1.2}em`,
                x: m.normalized * (c(n) - t.options.offset.x) + t.options.offset.x
              }, H(M), 9, Fa))), 128))
            ], 10, Pa))), 128)) : L("", !0),
            c(p).y && c(p).y.metrics ? (_(!0), b(V, { key: 1 }, U(c(p).y.metrics, (m, B) => (_(), b("text", {
              key: `axis-y--${B}`,
              class: s([v.$style["chart-axis"], v.$style.label]),
              x: t.options.offset.x - 10,
              y: (1 - m.normalized) * (c(i) - t.options.offset.y) + 5,
              "text-anchor": "end"
            }, [
              (_(!0), b(V, null, U([(m.value ?? "").toString().split(`
`)], (M, w) => (_(), b(V, {
                key: `group-${w}`
              }, [
                M.length > 1 ? (_(!0), b(V, { key: 0 }, U(M, (y, $) => (_(), b("tspan", {
                  key: $,
                  dy: `${$ * 0.5 - 0.5}em`,
                  x: t.options.offset.x - 10
                }, H(y), 9, xa))), 128)) : (_(), b("tspan", Wa, H(m.value), 1))
              ], 64))), 128))
            ], 10, Ua))), 128)) : L("", !0)
          ], 2)) : L("", !0),
          f("g", {
            class: s([v.$style["chart-group-plots"]])
          }, [
            (_(!0), b(V, null, U(g.value, (m) => (_(), b("g", {
              key: m.label,
              class: s([v.$style["chart-area"], v.$style.line, v.$style.plot])
            }, [
              f("path", {
                d: m.path
              }, null, 8, Za)
            ], 2))), 128)),
            (_(!0), b(V, null, U(c(u), (m) => (_(), b(V, null, [
              (_(!0), b(V, null, U(m.series, (B, M) => (_(), b("g", {
                key: `chart-plot-${m.label}-plot-${M}`,
                class: s(v.$style["chart-area"])
              }, [
                f("circle", {
                  class: s([
                    v.$style.behavior,
                    v.$style["chart-area"],
                    v.$style.point,
                    v.$style.plot,
                    v.$style.clickable
                  ]),
                  cx: B.x.normalized * (c(n) - t.options.offset.x) + t.options.offset.x,
                  cy: (1 - B.y.normalized) * (c(i) - t.options.offset.y),
                  r: "50"
                }, null, 10, Ga),
                f("circle", {
                  class: s([v.$style["chart-area"], v.$style.point, v.$style.plot]),
                  cx: B.x.normalized * (c(n) - t.options.offset.x) + t.options.offset.x,
                  cy: (1 - B.y.normalized) * (c(i) - t.options.offset.y),
                  r: "5"
                }, null, 10, Ya),
                (_(), b("foreignObject", {
                  class: s([v.$style["chart-area"], v.$style["legend-container"]]),
                  x: B.x.normalized * (c(n) - t.options.offset.x) + t.options.offset.x + (M === 0 ? 0 : M === m.series.length - 1 ? -280 : -140),
                  y: (1 - B.y.normalized) * (c(i) - t.options.offset.y) - (B.y.normalized > 0.5 ? 0 : B.y.normalized < 0.5 ? 220 : 110),
                  height: "220",
                  width: "280"
                }, [
                  O(ve, {
                    class: s([v.$style["chart-area"], v.$style["legend-wrapper"]]),
                    radius: "var(--agh-ref-border-radius-500)"
                  }, {
                    default: F(() => [
                      t.options.title ? (_(), b(V, { key: 0 }, [
                        f("h1", {
                          class: s([v.$style["chart-area"], v.$style["legend-title"]])
                        }, H(c(ye)(B.data, t.options.title)), 3),
                        k[1] || (k[1] = f("hr", null, null, -1))
                      ], 64)) : L("", !0),
                      (_(!0), b(V, null, U(c(p), (w, y) => (_(), b(V, { key: y }, [
                        w && B[y] ? (_(), b("div", {
                          key: 0,
                          class: s([v.$style["chart-area"], v.$style["legend-group"]])
                        }, [
                          f("label", {
                            class: s([v.$style["chart-area"], v.$style["legend-label"]])
                          }, H(w.label), 3),
                          f("p", {
                            class: s([v.$style["chart-area"], v.$style["legend-value"]])
                          }, H(B[y].value), 3)
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
}), Qa = "_behavior_3alvm_1", Ja = "_clickable_3alvm_1", es = "_disabled_3alvm_4", ts = "_draggable_3alvm_7", ls = "_move_3alvm_7", as = "_loading_3alvm_10", ss = "_path_3alvm_24", os = "_radar_3alvm_29", rs = "_label_3alvm_32", ns = "_plot_3alvm_130", is = "_point_3alvm_130", cs = "_doughnut_3alvm_141", us = "_bg_3alvm_150", ds = "_round_3alvm_154", _s = "_line_3alvm_167", ps = {
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
  label: rs,
  "font-align--center": "_font-align--center_3alvm_45",
  "font-align--right": "_font-align--right_3alvm_48",
  "font-align--left": "_font-align--left_3alvm_51",
  "box-align--center": "_box-align--center_3alvm_54",
  "box-align--left": "_box-align--left_3alvm_57",
  "box-align--right": "_box-align--right_3alvm_60",
  "chart-group-plots": "_chart-group-plots_3alvm_67",
  "chart-area": "_chart-area_3alvm_67",
  plot: ns,
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
}, Ru = /* @__PURE__ */ G(Xa, [["__cssModules", vs], ["__scopeId", "data-v-fc0b2125"]]), fs = /* @__PURE__ */ Z({
  __name: "MatrixChart",
  props: {
    axises: {},
    datasets: {},
    options: {}
  },
  setup(r) {
    const t = r, e = T(() => t.datasets), l = T(() => t.axises), { axises: a, datasets: n } = Pe({
      type: "matrix",
      data: e,
      axises: l
    }), i = T(() => a.value.y.step), p = T(
      () => n.value[0]?.series.map((m) => ({
        ...m,
        y: {
          ...m.y,
          normalized: q.round(m.y.normalized * i.value)
        }
      }))
    ), u = E(), h = E(), g = ae(""), v = () => {
      if (u.value && u.value.firstElementChild) {
        const { firstElementChild: m, clientWidth: B } = u.value, M = B, w = m?.clientWidth;
        h.value = q.floor(M / w);
      }
    }, k = () => {
      u.value && (g.set(
        _t("--matrix-border-width", u, {
          observe: !0
        }).value
      ), g() || vt(k, 1));
    };
    return Ne(u, v, { window }), Te(() => {
      k(), v();
    }), (m, B) => (_(), b("div", {
      ref_key: "containerRef$",
      ref: u,
      class: s(m.$style["chart-container"])
    }, [
      (_(!0), b(V, null, U(p.value, (M, w) => (_(), b("div", {
        key: w,
        class: s([
          m.$style["matrix-container"],
          h.value && w % h.value !== 0 && m.$style["matrix-container-border"]
        ])
      }, [
        f("label", {
          class: s(m.$style.label)
        }, H(M.x.value), 3),
        f("div", {
          class: s(m.$style["box-container"])
        }, [
          (_(!0), b(V, null, U(i.value, (y) => (_(), b("div", {
            key: y,
            class: s([
              m.$style.square,
              y <= M.y.normalized ? m.$style["square-cyan"] : m.$style["square-grayscale"]
            ])
          }, null, 2))), 128))
        ], 2)
      ], 2))), 128))
    ], 2));
  }
}), ms = "_behavior_1i867_1", ys = "_clickable_1i867_1", hs = "_disabled_1i867_4", gs = "_draggable_1i867_7", $s = "_move_1i867_7", bs = "_loading_1i867_10", ws = "_path_1i867_24", ks = "_radar_1i867_29", Ss = "_label_1i867_32", zs = "_plot_1i867_130", Ms = "_point_1i867_130", Cs = "_doughnut_1i867_141", Bs = "_bg_1i867_150", Ts = "_round_1i867_154", As = "_line_1i867_167", Ds = "_square_1i867_290", js = {
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
  doughnut: Cs,
  "legend-container": "_legend-container_1i867_141",
  bg: Bs,
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
}, qu = /* @__PURE__ */ G(fs, [["__cssModules", Vs], ["__scopeId", "data-v-edb6b87f"]]), Os = ["id"], Ns = ["stdDeviation"], ht = /* @__PURE__ */ Z({
  __name: "RoundEffect",
  props: {
    id: {},
    radius: {}
  },
  setup(r) {
    const t = r;
    return (e, l) => (_(), b("filter", {
      id: t.id
    }, [
      f("feGaussianBlur", {
        stdDeviation: t.radius,
        in: "SourceGraphic",
        result: "blur"
      }, null, 8, Ns),
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
}), Hs = ["innerHTML"], Is = { id: "chart-area-bg-mask" }, Rs = ["d"], qs = ["d"], Ls = ["d"], Es = ["height", "width", "x", "y"], Ps = ["d"], Fs = ["cx", "cy"], Us = ["cx", "cy"], xs = ["x", "y"], Ws = /* @__PURE__ */ Z({
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
  setup(r) {
    const t = r, e = E(), { width: l, height: a } = Le(e), n = T(() => t.datasets), i = T(() => t.axises), { axises: p, datasets: u } = Pe({
      type: "radar",
      data: n,
      axises: i
    }), h = T(
      () => q.clamp(
        q.min(l.value - t.options.offset.x, a.value - t.options.offset.y) / 2,
        0,
        1 / 0
      )
    ), g = T(() => ({
      x: l.value / 2,
      y: a.value / 2
    })), v = T(
      () => h.value > 0 && p.value?.x?.metrics ? `
      ${p.value.x.metrics.map(
        (w, y) => `${y === 0 ? "M" : "L"} ${g.value.x + h.value * q.cos(q.rad(w.normalized * 360 - 90))} ${g.value.y + h.value * q.sin(q.rad(w.normalized * 360 - 90))}`
      ).join(" ")} Z
      ` : ""
    ), k = T(
      () => v.value && u.value ? u.value.map((w) => ({
        ...w,
        path: `${w.series.map(
          (y, $) => `${$ === 0 ? "M" : "L"} ${g.value.x + h.value * (0.1 + 0.8 * y.y.normalized) * q.cos(q.rad(y.x.normalized * 360 - 90))} ${g.value.y + h.value * (0.1 + 0.8 * y.y.normalized) * q.sin(q.rad(y.x.normalized * 360 - 90))}`
        ).join(" ")} Z`
      })) : []
    ), m = T(
      () => h.value > 0 && p.value.x.metrics ? `M ${g.value.x} ${g.value.y}
      ${p.value.x.metrics.map(
        (w) => `L ${g.value.x + h.value * q.cos(q.rad(w.normalized * 360 - 90))} ${g.value.y + h.value * q.sin(q.rad(w.normalized * 360 - 90))}
            M ${g.value.x} ${g.value.y}`
      ).join(`
`)}
      Z` : ""
    ), B = ae(""), M = () => {
      e.value && (B.set(
        _t("--chart-bg-fill-svg", e, {
          observe: !0
        }).value
      ), B() || vt(M, 1));
    };
    return Te(() => {
      M();
    }), (w, y) => (_(), b("div", {
      ref_key: "wrapperRef$",
      ref: e,
      class: s(w.$style["chart-container"])
    }, [
      O(Ee, {
        height: c(a),
        width: c(l)
      }, {
        defs: F(() => [
          O(ht, {
            id: "chart-area-bg-round",
            radius: 6
          }),
          O(ht, {
            id: "chart-area-plot-round",
            radius: 3
          }),
          f("g", {
            innerHTML: c(B)()
          }, null, 8, Hs),
          f("mask", Is, [
            f("path", {
              class: s([
                w.$style["chart-area"],
                w.$style.radar,
                w.$style.bg,
                t.options.round && w.$style.round
              ]),
              d: v.value,
              fill: "#fff"
            }, null, 10, Rs)
          ])
        ]),
        path: F(() => [
          f("path", {
            class: s([
              w.$style["chart-area"],
              w.$style.radar,
              w.$style.bg,
              t.options.round && w.$style.round
            ]),
            d: v.value
          }, null, 10, qs),
          f("g", {
            id: "chart-group-axises",
            class: s([w.$style["chart-group-axises"]]),
            mask: "url(#chart-area-bg-mask)"
          }, [
            f("path", {
              class: s([w.$style["chart-axis"], w.$style.radar, w.$style.path]),
              d: m.value
            }, null, 10, Ls)
          ], 2),
          c(p) ? (_(), b("g", {
            key: 0,
            class: s([w.$style["chart-group-axises-label"]])
          }, [
            (_(!0), b(V, null, U(c(p).x.metrics, ($) => (_(), b("foreignObject", {
              key: String($.value),
              class: s([w.$style["chart-axis"], w.$style.radar, w.$style["label-wrapper"]]),
              height: h.value / 3,
              width: h.value,
              x: g.value.x + h.value * c(q).cos(c(q).rad($.normalized * 360 - 90)) - ($.normalized % 0.5 === 0 ? h.value / 2 : $.normalized > 0.5 ? h.value : 0),
              y: g.value.y + h.value * 1.1 * c(q).sin(c(q).rad($.normalized * 360 - 90)) - h.value / 6
            }, [
              f("p", {
                class: s([[
                  w.$style["chart-axis"],
                  w.$style.radar,
                  w.$style.label,
                  $.normalized % 0.5 === 0 ? w.$style["font-align--center"] : $.normalized < 0.5 ? w.$style["font-align--left"] : w.$style["font-align--right"],
                  $.normalized % 0.5 === 0 ? w.$style["box-align--center"] : $.normalized < 0.5 ? w.$style["box-align--left"] : w.$style["box-align--right"]
                ], "font-bold"])
              }, H($.value), 3)
            ], 10, Es))), 128))
          ], 2)) : L("", !0),
          f("g", {
            class: s([w.$style["chart-group-plots"]])
          }, [
            (_(!0), b(V, null, U(k.value, ($) => (_(), b("g", {
              key: $.label,
              class: s([w.$style["chart-area"], w.$style.radar, w.$style.plot])
            }, [
              f("path", {
                class: s([t.options.round && w.$style.round]),
                d: $.path
              }, null, 10, Ps)
            ], 2))), 128))
          ], 2),
          (_(!0), b(V, null, U(c(u), ($) => (_(), b("g", {
            key: $.label,
            class: s([w.$style["chart-area-label"]])
          }, [
            (_(!0), b(V, null, U($.series, (o, z) => (_(), b("g", {
              key: `plot-${z}`,
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
                cx: g.value.x + h.value * (0.1 + 0.8 * o.y.normalized) * c(q).cos(c(q).rad(o.x.normalized * 360 - 90)),
                cy: g.value.y + h.value * (0.1 + 0.8 * o.y.normalized) * c(q).sin(c(q).rad(o.x.normalized * 360 - 90)),
                r: "10"
              }, null, 10, Fs),
              f("circle", {
                class: s([w.$style["chart-area"], w.$style.radar, w.$style.point, w.$style.plot]),
                cx: g.value.x + h.value * (0.1 + 0.8 * o.y.normalized) * c(q).cos(c(q).rad(o.x.normalized * 360 - 90)),
                cy: g.value.y + h.value * (0.1 + 0.8 * o.y.normalized) * c(q).sin(c(q).rad(o.x.normalized * 360 - 90)),
                r: "5"
              }, null, 10, Us),
              (_(), b("foreignObject", {
                class: s([w.$style["chart-area"], w.$style["legend-container"]]),
                x: g.value.x + h.value * (0.1 + 0.8 * o.y.normalized) * c(q).cos(c(q).rad(o.x.normalized * 360 - 90)) - 130,
                y: g.value.y + h.value * (0.1 + 0.8 * o.y.normalized) * c(q).sin(c(q).rad(o.x.normalized * 360 - 90)),
                height: "200",
                width: "260"
              }, [
                O(ve, {
                  class: s([w.$style["chart-area"], w.$style["legend-wrapper"]]),
                  radius: "var(--agh-ref-border-radius-500)"
                }, {
                  default: F(() => [
                    t.options.title ? (_(), b(V, { key: 0 }, [
                      f("h1", {
                        class: s([w.$style["chart-area"], w.$style["legend-title"], w.$style.radar])
                      }, [
                        f("span", null, H(o.x.value), 1),
                        f("span", {
                          class: s(w.$style["legend-value"])
                        }, H(o.y.value), 3)
                      ], 2),
                      y[0] || (y[0] = f("hr", null, null, -1))
                    ], 64)) : L("", !0),
                    (_(!0), b(V, null, U(c(p), (C, x) => (_(), b(V, { key: x }, [
                      !/(x|y)/.test(x) && C && o[x] ? (_(), b("div", {
                        key: 0,
                        class: s([w.$style["chart-area"], w.$style["legend-group"], w.$style.radar])
                      }, [
                        f("p", {
                          class: s([w.$style["chart-area"], w.$style["legend-value"]])
                        }, H(o[x].value), 3),
                        f("label", {
                          class: s([w.$style["chart-area"], w.$style["legend-label"]])
                        }, H(C.label), 3)
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
}), Zs = "_behavior_1ekpn_1", Gs = "_clickable_1ekpn_1", Ys = "_disabled_1ekpn_4", Ks = "_draggable_1ekpn_7", Xs = "_move_1ekpn_7", Qs = "_loading_1ekpn_10", Js = "_path_1ekpn_24", eo = "_radar_1ekpn_29", to = "_label_1ekpn_32", lo = "_plot_1ekpn_130", ao = "_point_1ekpn_130", so = "_doughnut_1ekpn_141", oo = "_bg_1ekpn_150", ro = "_round_1ekpn_154", no = "_line_1ekpn_167", io = {
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
  round: ro,
  line: no,
  "legend-wrapper": "_legend-wrapper_1ekpn_195",
  "legend-group": "_legend-group_1ekpn_206",
  "legend-value": "_legend-value_1ekpn_214",
  "legend-label": "_legend-label_1ekpn_217",
  "legend-title": "_legend-title_1ekpn_221"
}, co = {
  $style: io
}, Lu = /* @__PURE__ */ G(Ws, [["__cssModules", co], ["__scopeId", "data-v-403ac390"]]), uo = /* @__PURE__ */ Z({
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
  setup(r) {
    Se((p) => ({
      v3391a065: a.value
    }));
    const t = r, e = T(() => t.datasets), l = T(() => t.axises), a = T(
      () => t.options.gap ? `${t.options.gap}px` : "var(--agh-ref-spacing-25)"
    ), { datasets: n } = Pe({
      type: "doughnut",
      data: e,
      axises: l
    }), i = T(
      () => [...n.value[0]?.series ?? []].sort((p, u) => u.y.normalized - p.y.normalized)
    );
    return (p, u) => (_(), b("div", {
      class: s([p.$style["chart-container"], p.$style.wrapper, p.$style.flex, p.$style.vertical])
    }, [
      f("div", {
        class: s([p.$style["chart-instance"], p.$style.wrapper, p.$style.flex, p.$style.horizontal])
      }, [
        (_(!0), b(V, null, U(i.value, (h, g) => (_(), b("div", {
          key: `plot-${g}`,
          class: s([p.$style["chart-plot"], p.$style.behavior, p.$style.clickable]),
          style: pt({
            "--plot-value": h.y.normalized,
            "--anchor-name": `--plot-anchor-${g}`
          })
        }, [
          O(ve, {
            class: s([p.$style["chart-plot-tooltip"], p.$style.wrapper, p.$style.flex, p.$style.vertical]),
            purpose: "box",
            radius: "var(--agh-ref-border-radius-400)"
          }, {
            default: F(() => [
              f("h1", {
                class: s([p.$style.wrapper, p.$style.flex, p.$style.horizontal])
              }, [
                f("span", null, H(h.x.value), 1),
                f("span", null, H(String(h.y.value).padStart(3, "0")), 1)
              ], 2),
              u[0] || (u[0] = f("hr", null, null, -1)),
              f("ul", {
                class: s([p.$style.wrapper, p.$style.flex, p.$style.vertical])
              }, [
                (_(!0), b(V, null, U(r.axises, (v, k) => (_(), b(V, { key: k }, [
                  v && h[k] && !["x", "y"].includes(k) ? (_(), b("li", {
                    key: 0,
                    class: s([p.$style.wrapper, p.$style.flex, p.$style.horizontal])
                  }, [
                    f("p", {
                      class: s([p.$style["chart-area"], p.$style["legend-value"]])
                    }, H(String(h[k].value).split("/").map((m) => m.padStart(2, "0")).join("/")), 3),
                    f("label", {
                      class: s([p.$style["chart-area"], p.$style["legend-label"]])
                    }, H(v.label), 3)
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
          p.$style["chart-legend-wrapper"],
          p.$style.wrapper,
          p.$style.flex,
          p.$style.horizontal,
          p.$style.wrap
        ])
      }, [
        (_(!0), b(V, null, U(c(n)[0]?.series, (h, g) => (_(), b("label", {
          key: `plot-${g}`,
          class: s([p.$style["chart-legend"], p.$style.wrapper, p.$style.flex, p.$style.horizontal])
        }, [
          O(c(ue), {
            class: s(p.$style.icon),
            icon: "fa6-solid:square"
          }, null, 8, ["class"]),
          f("span", null, H(h.x.value), 1),
          f("span", null, H(String(h.y.value).padStart(3, "0")), 1)
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
}, Eu = /* @__PURE__ */ G(uo, [["__cssModules", Mo], ["__scopeId", "data-v-64f382b8"]]), Co = ["value"], Bo = /* @__PURE__ */ Z({
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
  setup(r, { expose: t, emit: e }) {
    const l = r, a = e, { onTrigger: n } = ke(
      (g) => {
        l.disabled ? (g.preventDefault(), g.stopPropagation()) : (u.set(!0), h(), a("update:modelValue", g.target.value));
      },
      l.eventSignalOptions ?? {
        flush: "post"
      }
    ), i = E(), p = ae(""), u = ae(l.modelValue !== ""), h = () => {
      p.set(
        i.value ? i.value?.validity.valid ? "" : Ct(i.value.validity, l.invalidMessage ?? {}) ?? i.value.validationMessage : ""
      ), i.value?.validity && a("validation", i.value.validity);
    };
    return Te(() => {
      h();
    }), t({
      checkValidity: h,
      focused: u,
      errMsg: p,
      inputRef$: i
    }), (g, v) => (_(), b("div", {
      class: s([
        g.$style["textfield-container"],
        (l.icon || r.type === "search") && [g.$style[`icon-align--${l.iconAlign}`]],
        !l.label && [g.$style["no-label"]]
      ])
    }, [
      l.label || l.required ? (_(), b("label", {
        key: 0,
        class: s([g.$style["textfield-label"]])
      }, [
        l.label ? (_(), b("p", {
          key: 0,
          class: s([g.$style["textfield-label--value"]])
        }, H(l.label), 3)) : L("", !0),
        r.required ? (_(), b("p", {
          key: 1,
          class: s([g.$style["textfield-label--notation"]])
        }, [
          O(c(ue), {
            class: s(g.$style.icon),
            icon: "fa6-solid:asterisk"
          }, null, 8, ["class"]),
          v[2] || (v[2] = f("span", null, "Required", -1))
        ], 2)) : L("", !0)
      ], 2)) : L("", !0),
      f("input", ie({
        ref_key: "inputRef$",
        ref: i,
        onInput: v[0] || (v[0] = //@ts-ignore
        (...k) => c(n) && c(n)(...k)),
        class: [
          g.$style["textfield-input"],
          c(u)() && g.$style.focused
        ]
      }, l, {
        value: l.modelValue
      }), null, 16, Co),
      r.type === "search" ? (_(), K(c(ue), {
        key: 1,
        class: s([g.$style["textfield-icon"], g.$style["textfield-icon-search"], g.$style.icon]),
        icon: r.type === "search" ? "fa6-solid:magnifying-glass" : ""
      }, null, 8, ["class", "icon"])) : L("", !0),
      l.icon ? (_(), b("div", {
        key: 2,
        onClick: v[1] || (v[1] = //@ts-ignore
        (...k) => l.iconClick && l.iconClick(...k)),
        class: s([g.$style["textfield-icon"], g.$style.icon])
      }, [
        O(c(ue), {
          icon: l.icon ?? ""
        }, null, 8, ["icon"])
      ], 2)) : L("", !0),
      c(p)() && c(u)() ? (_(), b("div", {
        key: 3,
        class: s([g.$style["textfield-msg"]])
      }, [
        O(c(ue), {
          class: s([g.$style["textfield-icon"]]),
          icon: "fa6-solid:circle-xmark"
        }, null, 8, ["class"]),
        f("span", {
          class: s([g.$style["textfield-msg--value"]])
        }, H(c(p)()), 3)
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
}, Fe = /* @__PURE__ */ G(Bo, [["__cssModules", jo], ["__scopeId", "data-v-36b7d687"]]), Vo = ["onMouseout", "onMouseover"], Oo = /* @__PURE__ */ Z({
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
  setup(r, { emit: t }) {
    const e = r, l = t, a = E({
      start: void 0,
      end: void 0
    }), n = E({
      start: void 0,
      end: void 0
    }), i = E(!1), p = E(!1), u = E(""), h = E(), g = (d) => {
      h.value === d ? h.value = void 0 : h.value = d;
    }, v = E(), k = E(), m = () => {
      h.value === "year" ? C.value.goToDate(C.value.month.monthNumber, v.value) : C.value.goToDate(k.value, C.value.year), h.value = void 0;
    }, B = () => {
      v.value = void 0, k.value = void 0, h.value = void 0;
    }, M = (d) => {
      const I = new Date(d.getFullYear(), 0, 1), N = (d.getTime() - I.getTime()) / 864e5;
      return Math.ceil((N + I.getDate() + 1) / 7);
    }, w = (d = /* @__PURE__ */ new Date()) => {
      const I = d.getDate(), N = d.toLocaleString(e.lang, { weekday: "long" }), X = d.getDay() + (e.weekStart === "Monday" ? 0 : 1), de = d.toLocaleString(e.lang, { weekday: "short" }), _e = d.getFullYear();
      v.value = _e;
      const be = Number(d.toLocaleString(e.lang, { year: "2-digit" })), he = d.toLocaleString(e.lang, { month: "long" }), Ae = d.toLocaleString(e.lang, { month: "short" }), A = Number(d.toLocaleString("en", { month: "2-digit" }));
      k.value = A;
      const D = d.getTime(), P = M(d);
      return {
        date: d,
        currentDate: I,
        day: N,
        dayNumber: X,
        dayShort: de,
        year: _e,
        yearShort: be,
        month: he,
        monthShort: Ae,
        monthNumber: A,
        timestamp: D,
        week: P
      };
    }, y = (d = /* @__PURE__ */ new Date()) => {
      const I = w(d), N = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], { monthNumber: X, year: de, monthShort: _e, month: be } = I;
      let he = N[X - 1] ?? 0;
      return X === 2 && (he += o(de) ? 1 : 0), {
        month: be,
        monthShort: _e,
        monthNumber: X,
        year: de,
        numberOfDays: he,
        getDay: (A) => w(new Date(de, X - 1, A))
      };
    }, $ = () => {
      const d = w(void 0), { year: I, monthNumber: N } = d, X = y(new Date(I, N - 1)), de = Array.from({ length: 12 }, (ne, te) => y(new Date(I, te))), _e = Array.from({ length: 7 });
      _e.forEach((ne, te) => {
        const pe = X.getDay(te - (e.weekStart === "Monday" ? 1 : 2));
        _e.includes(pe.dayShort) || (_e[te] = pe.dayShort);
      });
      const be = () => C.value.month.monthNumber === 1 ? y(new Date(C.value.year - 1, 11)) : y(
        new Date(C.value.year, C.value.month.monthNumber - 2)
      ), he = () => C.value.month.monthNumber === 12 ? y(new Date(C.value.year + 1, 0)) : y(new Date(C.value.year, C.value.month.monthNumber)), Ae = (ne, te) => {
        C.value.month = y(new Date(te, ne - 1)), C.value.year = te;
      }, A = () => {
        C.value.year += 1, C.value.month = y(new Date(I, 0));
      }, D = () => {
        C.value.year -= 1, C.value.month = y(new Date(I, 11));
      }, P = () => {
        if (C.value.month.monthNumber === 12)
          return A();
        C.value.month = y(
          new Date(C.value.year, C.value.month.monthNumber)
        );
      }, Q = () => {
        if (C.value.month.monthNumber === 1)
          return D();
        C.value.month = y(
          new Date(C.value.year, C.value.month.monthNumber - 2)
        );
      }, ee = () => {
        const ne = C.value.month.getDay(1), te = be(), pe = he(), ge = ne.dayNumber - 1 >= 0 ? ne.dayNumber - 1 : 6, me = C.value.month.numberOfDays + ge, De = Array.from({ length: me });
        for (let ce = ge; ce < me; ce++)
          De[ce] = C.value.month.getDay(ce + 1 - ge);
        for (let ce = 0; ce < ge; ce++) {
          const Nt = ge - (ce + 1);
          De[ce] = te.getDay(te.numberOfDays - Nt);
        }
        const Je = me % 7 > 0 ? 7 - me % 7 : 0;
        for (let ce = 0; ce < Je; ce++)
          De[me + ce] = pe.getDay(ce + 1);
        return De;
      }, fe = Array.from(
        { length: e.maxYear - e.minYear + 1 },
        (ne, te) => e.minYear + te
      );
      return {
        today: d,
        year: I,
        years: fe,
        month: X,
        months: de,
        weekDays: _e,
        goToNextMonth: P,
        goToPreviousMonth: Q,
        getMonthDays: ee,
        goToDate: Ae
      };
    }, o = (d) => d % 100 === 0 ? d % 400 === 0 : d % 4 === 0, z = T(() => C.value.getMonthDays()), C = E($()), x = (d, I) => d?.currentDate === I?.currentDate && d?.monthNumber === I?.monthNumber && d?.year === I?.year, se = (d, I) => I.start && I.end && d.timestamp > I.start?.timestamp && d.timestamp < I.end?.timestamp, S = (d, I) => {
      if (e.type === "single") {
        a.value.start = d;
        const [N = 0, X = 0] = u.value.split(":").map(Number);
        if (e.enableTime && !isNaN(N) && !isNaN(X)) {
          const de = d.date;
          de.setHours(N, X, 0, 0), l("update:modelValue", de);
        } else
          l("update:modelValue", d.date);
        l("update:start", new Date(d.year, d.monthNumber - 1, d.currentDate, 0, 0)), l("update:end", new Date(d.year, d.monthNumber - 1, d.currentDate, 23, 59));
      } else I.end ? p.value = !p.value : I.start ? i.value = !i.value : a.value.start && d?.timestamp > a.value.start?.timestamp ? (p.value = !1, i.value = !1, a.value.end = d, n.value.end = d, l("update:end", d.date)) : (a.value.start = d, n.value.start = d, i.value = !1, p.value = !1, l("update:start", d.date));
      C.value.goToDate(d?.monthNumber, d?.year);
    }, R = () => {
      l("confirm");
    }, j = (d) => {
      e.type === "single" || !a.value.start || (d?.timestamp > a.value.start?.timestamp && p.value ? a.value.end = d : d?.timestamp < a.value.start?.timestamp && !a.value.end ? (a.value.end = a.value.start, a.value.start = d) : i.value && (a.value.start = d));
    }, re = (d) => {
      e.type === "single" || !a.value.start || (a.value.end?.timestamp === d.timestamp ? a.value.end = n.value.end : a.value.start?.timestamp === d.timestamp && (a.value.start = n.value.start));
    };
    return oe(
      () => e.start,
      () => {
        e.start && (a.value.start = w(e.start), n.value.start = w(e.start));
      },
      {
        immediate: !0
      }
    ), oe(
      () => e.end,
      () => {
        e.end && (a.value.end = w(e.end), n.value.end = w(e.end));
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
          I < 10 && (I = `0${I}`), d < 10 && (d = `0${d}`), u.value = `${d}:${I}`;
        }
      },
      {
        immediate: !0
      }
    ), oe(
      u,
      (d) => {
        if (d && /([01]?[0-9]|2[0-3]):[0-5][0-9]/.test(d)) {
          const [I = 0, N = 0] = d.split(":").map(Number);
          if (!isNaN(I) && !isNaN(N)) {
            const X = a.value.start?.date ? new Date(a.value.start.date) : /* @__PURE__ */ new Date();
            X.setHours(I, N, 0, 0), l("update:modelValue", X);
          }
        }
      }
    ), (d, I) => (_(), K(ve, {
      class: s([d.$style["date-picker"], d.$style.wrapper, d.$style.flex, d.$style.vertical]),
      radius: "var(--agh-ref-border-radius-500)"
    }, {
      default: F(() => [
        f("header", {
          class: s([d.$style.wrapper, d.$style.flex, d.$style.horizontal])
        }, [
          O(le, {
            onClick: C.value.goToPreviousMonth,
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
              O(le, {
                onClick: I[0] || (I[0] = (N) => g("year")),
                class: s([d.$style.select, h.value === "year" && d.$style.selected]),
                icon: `fa6-solid:angle-${h.value === "year" ? "up" : "down"}`,
                label: String(C.value.year),
                variant: "text"
              }, null, 8, ["class", "icon", "label"])
            ], 2),
            f("div", {
              class: s([d.$style.item, d.$style.wrapper, d.$style.flex, d.$style.horizontal])
            }, [
              O(le, {
                onClick: I[1] || (I[1] = (N) => g("month")),
                class: s([d.$style.select, h.value === "month" && d.$style.selected]),
                icon: `fa6-solid:angle-${h.value === "month" ? "up" : "down"}`,
                label: C.value.month.monthShort,
                variant: "text"
              }, null, 8, ["class", "icon", "label"])
            ], 2)
          ], 2),
          O(le, {
            onClick: C.value.goToNextMonth,
            class: s(d.$style.button),
            icon: "fa6-solid:angle-right",
            variant: "text"
          }, null, 8, ["onClick", "class"])
        ], 2),
        h.value ? h.value === "month" ? (_(), b("div", {
          key: 1,
          class: s([d.$style["month-list"], d.$style.wrapper, d.$style.flex, d.$style.vertical])
        }, [
          (_(!0), b(V, null, U(C.value.months, (N) => (_(), K(le, {
            key: N.month,
            onClick: (X) => k.value = N.monthNumber,
            class: s([
              d.$style.item,
              d.$style.wrapper,
              d.$style.flex,
              d.$style.horizontal,
              N.monthNumber === k.value && d.$style["item-active"]
            ]),
            label: N.month,
            variant: "text"
          }, null, 8, ["onClick", "class", "label"]))), 128))
        ], 2)) : h.value === "year" ? (_(), b("div", {
          key: 2,
          class: s(d.$style["years-grid"])
        }, [
          (_(!0), b(V, null, U(C.value.years, (N) => (_(), b("div", {
            key: N,
            class: s([d.$style.container, d.$style.wrapper, d.$style.flex, d.$style.horizontal])
          }, [
            O(le, {
              onClick: (X) => v.value = N,
              class: s([
                d.$style.item,
                d.$style.wrapper,
                d.$style.flex,
                d.$style.horizontal,
                N === v.value && d.$style["item-active"]
              ]),
              label: String(N),
              variant: "text"
            }, null, 8, ["onClick", "class", "label"])
          ], 2))), 128))
        ], 2)) : L("", !0) : (_(), b(V, { key: 0 }, [
          f("div", {
            class: s(d.$style.calendar)
          }, [
            f("div", {
              class: s(d.$style.week)
            }, [
              (_(!0), b(V, null, U(C.value.weekDays, (N) => (_(), b("p", { key: N }, H(N), 1))), 128))
            ], 2),
            f("div", {
              class: s(d.$style["days-grid"])
            }, [
              (_(!0), b(V, null, U(z.value, (N) => (_(), b("div", {
                key: N?.timestamp,
                onMouseout: () => re(N),
                onMouseover: () => j(N),
                class: s([
                  d.$style.item,
                  d.$style.wrapper,
                  d.$style.flex,
                  d.$style.vertical,
                  r.type === "multiple" && a.value.start && a.value.end && a.value.start?.timestamp !== a.value.end.timestamp && x(N, a.value.start) && d.$style["item-start"],
                  r.type === "multiple" && a.value.end && a.value.start?.timestamp !== a.value.end.timestamp && x(N, a.value.end) && d.$style["item-end"],
                  r.type === "multiple" && se(N, a.value) && d.$style["item-duration"]
                ])
              }, [
                O(le, {
                  onClick: () => S(N, {
                    start: n.value.start ? x(N, n.value.start) : !1,
                    end: n.value.end ? x(N, n.value.end) : !1
                  }),
                  class: s([
                    d.$style.day,
                    N.monthNumber === C.value.month.monthNumber && d.$style["day-current"],
                    a.value.start && x(N, a.value.start) && d.$style["day-start"],
                    r.type === "multiple" && a.value.end && x(N, a.value.end) && d.$style["day-end"],
                    a.value.start && x(N, a.value.start) && r.type === "multiple" && d.$style["day-start"],
                    x(N, w()) && d.$style["day-today"]
                  ]),
                  label: String(N?.currentDate),
                  variant: "text"
                }, null, 8, ["onClick", "class", "label"])
              ], 42, Vo))), 128))
            ], 2)
          ], 2),
          r.enableTime && r.type === "single" ? (_(), b("div", {
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
            O(Fe, {
              modelValue: u.value,
              "onUpdate:modelValue": I[2] || (I[2] = (N) => u.value = N),
              class: s(d.$style.input),
              "invalid-message": {
                patternMismatch: "Invalid time format. Use HH:MM (24-hour format)."
              },
              pattern: "([01]?[0-9]|2[0-3]):[0-5][0-9]",
              placeholder: "Enter Time"
            }, null, 8, ["modelValue", "class"])
          ], 2)) : r.type === "multiple" && a.value.start ? (_(), b("div", {
            key: 1,
            class: s(d.$style["time-multiple"])
          }, [
            f("p", {
              class: s(d.$style.description)
            }, H(`Selected Date: ${c(ye)(
              { start: a.value.start?.date },
              "{{ start | date : yyyy/MM/dd }}"
            )}${a.value.end ? ` - ${c(ye)({ end: a.value.end?.date }, "{{ end | date : yyyy/MM/dd }}")}` : ""}`), 3)
          ], 2)) : L("", !0)
        ], 64)),
        h.value ? (_(), b("div", {
          key: 4,
          class: s([d.$style.footer, d.$style.wrapper, d.$style.flex, d.$style.horizontal])
        }, [
          O(le, {
            onClick: B,
            class: s(d.$style.button),
            label: "Cancel",
            level: "secondary",
            variant: "rect"
          }, null, 8, ["class"]),
          O(le, {
            onClick: m,
            class: s(d.$style.button),
            label: "Confirm",
            variant: "rect"
          }, null, 8, ["class"])
        ], 2)) : (_(), b("div", {
          key: 3,
          class: s([d.$style.footer, d.$style.wrapper, d.$style.flex, d.$style.horizontal])
        }, [
          O(le, {
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
}), No = "_wrapper_1mhvz_1", Ho = "_flex_1mhvz_12", Io = "_horizontal_1mhvz_48", Ro = "_wrap_1mhvz_1", qo = "_vertical_1mhvz_60", Lo = "_grid_1mhvz_72", Eo = "_button_1mhvz_90", Po = "_label_1mhvz_98", Fo = "_item_1mhvz_104", Uo = "_select_1mhvz_108", xo = "_selected_1mhvz_109", Wo = "_icon_1mhvz_119", Zo = "_calendar_1mhvz_122", Go = "_week_1mhvz_125", Yo = "_day_1mhvz_136", Ko = "_container_1mhvz_280", Xo = "_time_1mhvz_298", Qo = "_description_1mhvz_311", Jo = "_footer_1mhvz_322", er = {
  wrapper: No,
  flex: Ho,
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
  button: Eo,
  label: Po,
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
}, tr = {
  $style: er
}, Pu = /* @__PURE__ */ G(Oo, [["__cssModules", tr], ["__scopeId", "data-v-35852e98"]]);
function He(r) {
  var t;
  const e = Re(r);
  return (t = e?.$el) != null ? t : e;
}
const Vt = wl ? window : void 0;
function Ge(...r) {
  let t, e, l, a;
  if (typeof r[0] == "string" || Array.isArray(r[0]) ? ([e, l, a] = r, t = Vt) : [t, e, l, a] = r, !t)
    return Ze;
  Array.isArray(e) || (e = [e]), Array.isArray(l) || (l = [l]);
  const n = [], i = () => {
    n.forEach((g) => g()), n.length = 0;
  }, p = (g, v, k, m) => (g.addEventListener(v, k, m), () => g.removeEventListener(v, k, m)), u = oe(
    () => [He(t), Re(a)],
    ([g, v]) => {
      if (i(), !g)
        return;
      const k = kl(v) ? { ...v } : v;
      n.push(
        ...e.flatMap((m) => l.map((B) => p(g, m, B, k)))
      );
    },
    { immediate: !0, flush: "post" }
  ), h = () => {
    u(), i();
  };
  return Tt(h), h;
}
let gt = !1;
function $t(r, t, e = {}) {
  const { window: l = Vt, ignore: a = [], capture: n = !0, detectIframe: i = !1 } = e;
  if (!l)
    return Ze;
  ct && !gt && (gt = !0, Array.from(l.document.body.children).forEach((k) => k.addEventListener("click", Ze)), l.document.documentElement.addEventListener("click", Ze));
  let p = !0;
  const u = (k) => a.some((m) => {
    if (typeof m == "string")
      return Array.from(l.document.querySelectorAll(m)).some((B) => B === k.target || k.composedPath().includes(B));
    {
      const B = He(m);
      return B && (k.target === B || k.composedPath().includes(B));
    }
  }), g = [
    Ge(l, "click", (k) => {
      const m = He(r);
      if (!(!m || m === k.target || k.composedPath().includes(m))) {
        if (k.detail === 0 && (p = !u(k)), !p) {
          p = !0;
          return;
        }
        t(k);
      }
    }, { passive: !0, capture: n }),
    Ge(l, "pointerdown", (k) => {
      const m = He(r);
      p = !u(k) && !!(m && !k.composedPath().includes(m));
    }, { passive: !0 }),
    i && Ge(l, "blur", (k) => {
      setTimeout(() => {
        var m;
        const B = He(r);
        ((m = l.document.activeElement) == null ? void 0 : m.tagName) === "IFRAME" && !B?.contains(l.document.activeElement) && t(k);
      }, 0);
    })
  ].filter(Boolean);
  return () => g.forEach((k) => k());
}
const ut = {
  [yt.mounted](r, t) {
    const e = !t.modifiers.bubble;
    if (typeof t.value == "function")
      r.__onClickOutside_stop = $t(r, t.value, { capture: e });
    else {
      const [l, a] = t.value;
      r.__onClickOutside_stop = $t(r, l, Object.assign({ capture: e }, a));
    }
  },
  [yt.unmounted](r) {
    r.__onClickOutside_stop();
  }
};
function st(r) {
  return typeof Window < "u" && r instanceof Window ? r.document.documentElement : typeof Document < "u" && r instanceof Document ? r.documentElement : r;
}
function Ot(r) {
  const t = window.getComputedStyle(r);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && r.clientWidth < r.scrollWidth || t.overflowY === "auto" && r.clientHeight < r.scrollHeight)
    return !0;
  {
    const e = r.parentNode;
    return !e || e.tagName === "BODY" ? !1 : Ot(e);
  }
}
function lr(r) {
  const t = r || window.event, e = t.target;
  return Ot(e) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.preventDefault(), !1);
}
const ot = /* @__PURE__ */ new WeakMap();
function ar(r, t = !1) {
  const e = E(t);
  let l = null, a = "";
  oe(Sl(r), (p) => {
    const u = st(Re(p));
    if (u) {
      const h = u;
      if (ot.get(h) || ot.set(h, h.style.overflow), h.style.overflow !== "hidden" && (a = h.style.overflow), h.style.overflow === "hidden")
        return e.value = !0;
      if (e.value)
        return h.style.overflow = "hidden";
    }
  }, {
    immediate: !0
  });
  const n = () => {
    const p = st(Re(r));
    !p || e.value || (ct && (l = Ge(
      p,
      "touchmove",
      (u) => {
        lr(u);
      },
      { passive: !1 }
    )), p.style.overflow = "hidden", e.value = !0);
  }, i = () => {
    const p = st(Re(r));
    !p || !e.value || (ct && l?.(), p.style.overflow = a, ot.delete(p), e.value = !1);
  };
  return Tt(i), T({
    get() {
      return e.value;
    },
    set(p) {
      p ? n() : i();
    }
  });
}
function sr() {
  let r = !1;
  const t = E(!1);
  return (e, l) => {
    if (t.value = l.value, r)
      return;
    r = !0;
    const a = ar(e, l.value);
    oe(t, (n) => a.value = n);
  };
}
sr();
const or = ["onClick"], rr = /* @__PURE__ */ Z({
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
  setup(r, { expose: t }) {
    const e = $e(), l = r, a = ze(r, "modelValue"), n = ze(r, "query"), i = E(), p = T(
      () => new Ce(
        Array.isArray(l.options) ? l.options.map((o, z) => [z, o]) : l.options
      )
    ), u = T(
      () => l.multiple ? new Ce(
        Array.isArray(a.value) ? new Map(a.value.map((o, z) => [z, o])) : a.value instanceof Map ? new Map(a.value) : /* @__PURE__ */ new Map()
      ).map((o) => [w(o).key, p]) : w(a.value).key
    ), { result: h, reset: g } = Bt(p, {
      query: n,
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
    }), v = T(
      () => p.value.map((o, z) => [
        z,
        {
          payload: o,
          field: w(o)
        }
      ]).map(({ payload: o, field: z }, C) => [
        C,
        {
          payload: o,
          field: z,
          get selected() {
            return l.multiple && u.value instanceof Map ? u.value.has(z.key) : u.value === z.key;
          },
          get matched() {
            return h.value.has(C);
          }
        }
      ])
    ), k = T(
      () => dt(
        v.value.filter(({ matched: o }) => l.useSearch && l.showAll || o).toArray("entries"),
        "[1].field.group"
      )
    ), m = ae(!1), B = () => {
      if (i.value) {
        const { scrollHeight: o, clientHeight: z } = i.value;
        m.set(o > z + 1);
      }
    }, M = () => {
      l.multiple ? a.value = Array.isArray(l.options) ? [] : /* @__PURE__ */ new Map() : a.value = void 0;
    }, w = (o) => ({
      ...Object.fromEntries(
        Object.entries($l(l.fields, ["key", "searchKeys", "disabled"])).map(([z, C]) => [
          z,
          Me(o, C, !0)
        ])
      ),
      key: l.fields?.key ? Me(o, l.fields.key) : String(o),
      group: l.groupBy ? Me(o, l.groupBy, !0) ?? "" : "",
      disabled: l.fields?.disabled && (gl(o, l.fields.disabled, !0) ?? !1) || !1
    }), y = (o, z) => {
      l.multiple ? z.field.disabled || (l.options instanceof Map ? z.selected ? a.value.delete(z.field.key) : a.value.set(o, z.payload) : z.selected ? a.value = v.value.filter((C, x) => o !== x && C.selected).toArray("values").map(({ payload: C }) => C) : a.value = v.value.filter((C, x) => o === x || C.selected).toArray("values").map(({ payload: C }) => C)) : z.field.disabled || (a.value = z.payload);
    }, $ = () => {
      g(), M();
    };
    return Ne(i, B, {
      window
    }), Te(() => {
      B();
    }), t({
      reset: $,
      clearSearch: g,
      clearSelection: M
    }), (o, z) => (_(), K(ve, {
      class: s([
        o.$style["menu-container"],
        o.$style.wrapper,
        o.$style.flex,
        o.$style.vertical,
        l.groupBy && o.$style.classify
      ]),
      radius: "var(--agh-ref-border-radius-500)"
    }, {
      default: F(() => [
        l.label || l.multiple || l.useSearch || e.header ? (_(), b("header", {
          key: 0,
          class: s([
            o.$style["menu-header"],
            o.$style.wrapper,
            o.$style.flex,
            o.$style.horizontal,
            o.$style.wrap
          ])
        }, [
          W(o.$slots, "header", {
            clearSelection: M,
            label: l.label,
            multiple: l.multiple,
            result: c(h),
            searchQuery: n.value,
            selection: a.value,
            useSearch: l.useSearch
          }, () => [
            l.label || l.multiple ? (_(), b(V, { key: 0 }, [
              f("h1", {
                class: s(o.$style.title)
              }, H(l.label), 3),
              l.multiple || l.clearable ? W(o.$slots, "clear-selection", {
                key: 0,
                clearSelection: M
              }, () => [
                O(le, {
                  onClick: M,
                  class: s(o.$style.button),
                  icon: "fa6-solid:eraser",
                  label: l.alterStr?.clearSelection || "Clear Selection",
                  variant: "text"
                }, null, 8, ["class", "label"])
              ], !0) : L("", !0)
            ], 64)) : L("", !0),
            l.useSearch ? (_(), K(Fe, {
              key: 1,
              modelValue: n.value,
              "onUpdate:modelValue": z[0] || (z[0] = (C) => n.value = C),
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
            c(m)() && o.$style.overflowed
          ])
        }, [
          (_(!0), b(V, null, U(k.value, (C, x) => (_(), b("div", {
            key: x,
            class: s([
              o.$style["menu-group"],
              o.$style.wrapper,
              o.$style.flex,
              o.$style.vertical,
              l.groupBy && o.$style.classify
            ])
          }, [
            l.groupBy && x ? (_(), b("label", {
              key: 0,
              class: s(o.$style["menu-group-label"])
            }, H(x), 3)) : L("", !0),
            (_(!0), b(V, null, U(C, ([se, { selected: S, matched: R, field: j, payload: re }]) => (_(), b(V, {
              key: `option-${j.key}`
            }, [
              R ? (_(), b("div", {
                key: 0,
                onClick: (d) => !j.disabled && y(se, { selected: S, field: j, payload: re }),
                class: s([
                  o.$style["menu-option"],
                  o.$style.wrapper,
                  o.$style.flex,
                  o.$style.horizontal,
                  o.$style.behavior,
                  j.disabled ? [o.$style.disabled] : o.$style.clickable,
                  S && o.$style.selected,
                  l.multiple && o.$style.multiple
                ])
              }, [
                W(o.$slots, "default", {
                  clearSelection: M,
                  index: se,
                  multiple: l.multiple,
                  option: { selected: S, matched: R, field: j, payload: re }
                }, () => [
                  l.multiple ? (_(), K(c(ue), {
                    key: 0,
                    class: s(o.$style["menu-option-icon"]),
                    icon: S ? "fa6-solid:square-check" : "fa6-regular:square"
                  }, null, 8, ["class", "icon"])) : L("", !0),
                  l.fields?.icon ? (_(), K(c(ue), {
                    key: 1,
                    class: s(o.$style["menu-option-icon"]),
                    icon: j.icon ?? ""
                  }, null, 8, ["class", "icon"])) : L("", !0),
                  f("div", {
                    class: s(o.$style["menu-option-group"])
                  }, [
                    f("p", {
                      class: s(o.$style["menu-field"])
                    }, H(j.title || j.key), 3),
                    j.content ? (_(), b("p", {
                      key: 0,
                      class: s(o.$style["menu-field"])
                    }, H(j.content), 3)) : L("", !0)
                  ], 2)
                ], !0)
              ], 10, or)) : L("", !0)
            ], 64))), 128)),
            f("div", {
              class: s(o.$style["menu-group-placeholder"])
            }, [
              W(o.$slots, "no-match-placeholder", { groupName: x }, () => [
                f("p", null, H(l.alterStr?.noMatched || "No Matched Data"), 1)
              ], !0)
            ], 2)
          ], 2))), 128))
        ], 2),
        p.value.size === 0 ? (_(), b("div", {
          key: 1,
          class: s(o.$style["menu-placeholder"])
        }, [
          W(o.$slots, "empty-placeholder", {}, () => [
            f("p", null, H(l.alterStr?.noData || "No Data"), 1)
          ], !0)
        ], 2)) : l.useSearch && !l.showAll && c(h).size === 0 ? (_(), b("div", {
          key: 2,
          class: s(o.$style["menu-placeholder"])
        }, [
          W(o.$slots, "no-match-placeholder", {}, () => [
            f("p", null, H(l.alterStr?.noMatched || "No Matched Data"), 1)
          ], !0)
        ], 2)) : L("", !0),
        W(o.$slots, "footer", {
          clearSelection: M,
          label: l.label,
          multiple: l.multiple,
          result: c(h),
          searchQuery: n.value,
          selection: a.value,
          useSearch: l.useSearch
        }, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), nr = "_wrapper_cvtn7_1", ir = "_flex_cvtn7_12", cr = "_horizontal_cvtn7_48", ur = "_wrap_cvtn7_1", dr = "_vertical_cvtn7_60", _r = "_grid_cvtn7_72", pr = "_behavior_cvtn7_78", vr = "_clickable_cvtn7_78", fr = "_disabled_cvtn7_81", mr = "_draggable_cvtn7_84", yr = "_move_cvtn7_84", hr = "_loading_cvtn7_87", gr = "_classify_cvtn7_95", $r = "_title_cvtn7_111", br = "_button_cvtn7_137", wr = "_overflowed_cvtn7_178", kr = "_selected_cvtn7_201", Sr = "_hover_cvtn7_201", zr = "_multiple_cvtn7_209", Mr = {
  wrapper: nr,
  flex: ir,
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
  horizontal: cr,
  wrap: ur,
  vertical: dr,
  grid: _r,
  behavior: pr,
  clickable: vr,
  disabled: fr,
  draggable: mr,
  move: yr,
  loading: hr,
  "menu-container": "_menu-container_cvtn7_91",
  "menu-search": "_menu-search_cvtn7_95",
  classify: gr,
  "menu-header": "_menu-header_cvtn7_111",
  title: $r,
  button: br,
  "menu-placeholder": "_menu-placeholder_cvtn7_148",
  "menu-wrapper": "_menu-wrapper_cvtn7_153",
  overflowed: wr,
  "menu-option": "_menu-option_cvtn7_188",
  "menu-group-placeholder": "_menu-group-placeholder_cvtn7_195",
  selected: kr,
  hover: Sr,
  multiple: zr,
  "menu-field": "_menu-field_cvtn7_212",
  "menu-option-group": "_menu-option-group_cvtn7_218",
  "menu-group": "_menu-group_cvtn7_195",
  "menu-group-label": "_menu-group-label_cvtn7_249"
}, Cr = {
  $style: Mr
}, Xe = /* @__PURE__ */ G(rr, [["__cssModules", Cr], ["__scopeId", "data-v-62e98c8a"]]), Br = /* @__PURE__ */ Z({
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
  setup(r, { expose: t, emit: e }) {
    const l = $e(), a = r, n = e, i = ze(r, "modelValue"), p = ze(r, "query"), u = ze(r, "newOptionValue"), h = E(), g = E(), v = E(), k = ae(!1), m = ae(!1), B = ae(!1), M = T(
      () => a.multiple && i.value ? Array.isArray(i.value) ? i.value.length : i.value instanceof Map ? i.value.size : !1 : !1
    );
    T(
      () => Array.isArray(a.options) ? a.options.length : a.options instanceof Map ? a.options.size : 0
    );
    const w = T(
      () => a.labelShowAs === "icon" ? void 0 : (a.labelShowAs !== "auto" ? a[a.labelShowAs] : void 0) || (a.multiple ? (M.value || 0) > 0 ? a.label ?? a.placeholder : a.placeholder ?? a.label : (a.modelValue && (a.fields?.title ? Me(a.modelValue, a.fields.title, !0) : a.fields?.key ? Me(a.modelValue, a.fields.key, !0) : String(a.modelValue))) ?? a.label ?? a.placeholder)
    ), y = T(
      () => ((a.variant.includes("square") || a.labelShowAs === "icon") && !a.multiple && i.value && a.modelValue && a.fields?.icon ? Me(a.modelValue, a.fields.icon, !0) : void 0) || (k() ? "fa6-solid:chevron-up" : "fa6-solid:chevron-down")
    ), $ = () => {
      h.value?.clearSearch(), p.value = "";
    }, o = () => {
      h.value?.clearSelection(), i.value = a.multiple ? [] : void 0;
    }, z = () => {
      $(), o();
    }, C = () => {
      a.useCreate && !B() ? (k.set(!1), m.set(!1), u.value = "") : k.set(!1);
    }, x = () => {
      v.value?.valid && u.value !== "" && (B.set(!0), n(
        "create",
        u.value,
        // onFinish
        (S) => {
          z(), k.set(!1), m.set(!1), B.set(!1), u.value = "", i.value = S;
        },
        // onError
        () => {
          B.set(!1), setTimeout(() => {
            g.value?.inputRef$?.focus(), g.value?.inputRef$?.dispatchEvent(
              new Event("input", {
                bubbles: !0
              })
            );
          }, 100);
        }
      ));
    }, se = (S) => {
      v.value = S;
    };
    return oe([i, () => a.multiple], ([S, R]) => {
      !R && S && k.set(!1);
    }), oe(k, (S) => {
      S && !a.persist && $();
    }), oe(
      m,
      (S) => {
        S && ($(), k.set(!1), u.value = "", Promise.allSettled([
          rt(),
          new Promise((R) => {
            setTimeout(() => {
              R();
            }, 100);
          })
        ]).finally(() => {
          k.set(!1), rt(() => {
            g.value?.inputRef$?.focus();
          });
        }));
      },
      { immediate: !0, flush: "post" }
    ), oe(
      () => a.useCreate && a.createInProgress,
      (S) => {
        S !== void 0 && B.set(S);
      },
      {
        immediate: !0
      }
    ), t({
      reset: z,
      clearSearch: $,
      clearSelection: o,
      onShowMenu: k
    }), (S, R) => nt((_(), b("div", {
      class: s([
        S.$style["dropdown-container"],
        S.$style.wrapper,
        S.$style.behavior,
        S.$style.flex,
        S.$style[r.size],
        a.useCreate && S.$style.extend,
        a.useCreate && c(B)() && S.$style.loading,
        c(m)() ? S.$style.horizontal : S.$style.vertical
      ])
    }, [
      c(m)() && a.useCreate ? (_(), b(V, { key: 0 }, [
        O(Fe, ie(
          {
            ref_key: "textFieldRef$",
            ref: g,
            modelValue: u.value,
            "onUpdate:modelValue": R[0] || (R[0] = (j) => u.value = j)
          },
          c(jt)(a, [
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
            onKeydownCapture: je(x, ["enter"]),
            onKeydown: je(C, ["escape"]),
            onValidation: se,
            class: S.$style["dropdown-textfield"],
            disabled: a.disabled || c(B)(),
            "event-signal-options": a.eventSignalOptions ?? { flush: "sync", debounce: 100 },
            placeholder: a.createPlaceholder
          }
        ), null, 16, ["modelValue", "class", "disabled", "event-signal-options", "placeholder"]),
        f("div", {
          class: s([
            S.$style["dropdown-textfield-toolbox"],
            S.$style.wrapper,
            S.$style.flex,
            S.$style.horizontal
          ])
        }, [
          O(le, {
            onClick: C,
            class: s(S.$style.button),
            disabled: c(B)(),
            icon: "fa6-solid:xmark",
            level: "secondary",
            size: "small",
            variant: "square"
          }, null, 8, ["class", "disabled"]),
          O(le, {
            onClick: x,
            class: s(S.$style.button),
            clicked: c(B)(),
            disabled: v.value?.valid !== !0 || !u.value,
            icon: c(B)() ? "" : "fa6-solid:check",
            loading: c(B)(),
            size: "small",
            variant: "square"
          }, null, 8, ["class", "clicked", "disabled", "icon", "loading"])
        ], 2)
      ], 64)) : (_(), K(le, {
        key: 1,
        onClick: R[1] || (R[1] = (j) => c(dl)(c(k))),
        bobble: M.value,
        class: s([S.$style["dropdown-button"], S.$style[r.size], S.$style[a.variant]]),
        clicked: c(k)(),
        disabled: a.disabled,
        icon: y.value,
        label: w.value,
        level: a.level,
        size: a.size,
        variant: a.variant
      }, null, 8, ["bobble", "class", "clicked", "disabled", "icon", "label", "level", "size", "variant"])),
      c(k)() ? (_(), K(Xe, {
        key: 2,
        ref_key: "selectMenuRef$",
        ref: h,
        modelValue: i.value,
        "onUpdate:modelValue": R[3] || (R[3] = (j) => i.value = j),
        query: p.value,
        "onUpdate:query": R[4] || (R[4] = (j) => p.value = j),
        "onSelect:fields": R[5] || (R[5] = (j) => S.selectedFields = j),
        "alter-str": a.alterStr,
        "case-sensitive": a.caseSensitive,
        class: s([S.$style["dropdown-menu"], S.$style[a.menuPosition]]),
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
      }, Ut({ _: 2 }, [
        l["clear-selection"] ? {
          name: "clear-selection",
          fn: F(({ clearSelection: j }) => [
            W(S.$slots, "clear-selection", { clearSelection: j }, void 0, !0)
          ]),
          key: "0"
        } : void 0,
        l["empty-placeholder"] ? {
          name: "empty-placeholder",
          fn: F(({ groupName: j }) => [
            W(S.$slots, "empty-placeholder", { groupName: j }, void 0, !0)
          ]),
          key: "1"
        } : void 0,
        l["no-match-placeholder"] ? {
          name: "no-match-placeholder",
          fn: F(({ groupName: j }) => [
            W(S.$slots, "no-match-placeholder", { groupName: j }, void 0, !0)
          ]),
          key: "2"
        } : void 0,
        l.header ? {
          name: "header",
          fn: F(({ selection: j, multiple: re, useSearch: d, searchQuery: I, result: N, label: X }) => [
            W(S.$slots, "header", {
              clearSelection: o,
              label: X,
              multiple: re,
              result: N,
              searchQuery: I,
              selection: j,
              useSearch: d
            }, void 0, !0)
          ]),
          key: "3"
        } : void 0,
        l.default ? {
          name: "default",
          fn: F(({ index: j, multiple: re, option: d }) => [
            W(S.$slots, "default", {
              clearSelection: o,
              index: j,
              multiple: re,
              option: d
            }, void 0, !0)
          ]),
          key: "4"
        } : void 0,
        l.footer || a.useCreate ? {
          name: "footer",
          fn: F(({ selection: j, multiple: re, useSearch: d, searchQuery: I, result: N, label: X }) => [
            W(S.$slots, "footer", {
              clearSelection: o,
              label: X,
              multiple: re,
              result: N,
              searchQuery: I,
              selection: j,
              useSearch: d
            }, void 0, !0),
            a.useCreate ? (_(), K(le, {
              key: 0,
              onClick: R[2] || (R[2] = (de) => c(m).set(!0)),
              class: s([
                S.$style.button,
                c(m)() && S.$style.active
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
      [c(ut), C]
    ]);
  }
}), Tr = "_wrapper_1youd_1", Ar = "_flex_1youd_12", Dr = "_horizontal_1youd_48", jr = "_wrap_1youd_1", Vr = "_vertical_1youd_60", Or = "_grid_1youd_72", Nr = "_behavior_1youd_78", Hr = "_clickable_1youd_78", Ir = "_disabled_1youd_81", Rr = "_draggable_1youd_84", qr = "_move_1youd_84", Lr = "_loading_1youd_87", Er = "_large_1youd_97", Pr = "_extend_1youd_97", Fr = "_rect_1youd_114", Ur = "_button_1youd_145", xr = "_active_1youd_156", Wr = {
  wrapper: Tr,
  flex: Ar,
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
  horizontal: Dr,
  wrap: jr,
  vertical: Vr,
  grid: Or,
  behavior: Nr,
  clickable: Hr,
  disabled: Ir,
  draggable: Rr,
  move: qr,
  loading: Lr,
  "dropdown-container": "_dropdown-container_1youd_91",
  large: Er,
  extend: Pr,
  "dropdown-menu": "_dropdown-menu_1youd_101",
  "dropdown-button": "_dropdown-button_1youd_101",
  "dropdown-textfield": "_dropdown-textfield_1youd_101",
  rect: Fr,
  "dropdown-textfield-toolbox": "_dropdown-textfield-toolbox_1youd_124",
  "top-left": "_top-left_1youd_133",
  "top-right": "_top-right_1youd_133",
  "bottom-left": "_bottom-left_1youd_136",
  "bottom-right": "_bottom-right_1youd_136",
  button: Ur,
  active: xr
}, Zr = {
  $style: Wr
}, Fu = /* @__PURE__ */ G(Br, [["__cssModules", Zr], ["__scopeId", "data-v-68eaec6d"]]), Gr = /* @__PURE__ */ Z({
  __name: "ProgressBar",
  props: {
    value: { default: 0 },
    variant: { default: "concave" },
    thickness: { default: 12 }
  },
  setup(r) {
    const t = r;
    return (e, l) => (_(), b("div", {
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
}), Yr = "_concave_1hfbi_23", Kr = "_convex_1hfbi_55", Xr = {
  "progress-container": "_progress-container_1hfbi_1",
  "progress-groove": "_progress-groove_1hfbi_11",
  "progress-value": "_progress-value_1hfbi_11",
  concave: Yr,
  "progress-content-wrapper": "_progress-content-wrapper_1hfbi_35",
  convex: Kr
}, Qr = {
  $style: Xr
}, Jr = /* @__PURE__ */ G(Gr, [["__cssModules", Qr], ["__scopeId", "data-v-a260fe74"]]), en = /* @__PURE__ */ Z({
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
  setup(r, { emit: t }) {
    const e = r, l = t, a = E(/* @__PURE__ */ new Map()), n = E(), i = E(), p = ae(!1), u = we(
      () => e.accept === "*" || e.multiple === "directory" ? void 0 : Array.isArray(e.accept) ? Oe(e.accept, (y) => y.replace(/^\.?(.*)/, ".$1")).join(", ") : e.accept.replace(/^\.?(.*)/, ".$1")
    ), h = we(
      () => u.value ? u.value.split(", ").map((y) => y.toUpperCase().substring(1)).reduce((y, $, o, z) => `${y}${o < z.length - 1 ? ", " : " or "}${$}`) : "All Files"
    ), g = we(
      () => e.placeholder ?? `Drag ${e.multiple ? "files" : "a file"} here or click to browse`
    ), { open: v, onChange: k } = Rt({
      accept: u.value,
      multiple: !!e.multiple,
      reset: !0
    }), { isOverDropZone: m } = qt(n, (y) => {
      B(y ?? []);
    }), B = (y) => {
      y.map(($) => ({
        file: $,
        filename: $.name.replace(/\.[^/.]+$/, ""),
        type: $.name.split(".").pop()?.toUpperCase() ?? ($.type || "BINARY"),
        reader: new FileReader(),
        status: ae("pending"),
        progress: ae(0)
      })).map(($) => ({
        ...$,
        abort: () => {
          $.status() === "pending" || $.status() === "progressing" ? ($.status.set("aborted"), $.reader.abort(), l("abort", $.file.name)) : a.value.delete($.file.name);
        },
        delete: () => {
          a.value.delete($.file.name), l("delete", $.file.name);
        }
      })).forEach(($) => {
        e.readAs !== "formData" && e.readAs !== "stream" && ($.reader.onprogress = (o) => {
          $.status.set("progressing"), o.lengthComputable && $.progress.set(o.loaded / o.total);
        }, $.reader.onloadstart = () => {
          $.status.set("progressing");
        }, $.reader.onabort = () => {
          $.status.set("aborted");
        }, $.reader.onerror = () => {
          $.status.set("failed");
        }), a.value.set($.file.name, $);
      }), M();
    }, M = () => {
      const y = new FormData(), $ = {
        payload: /* @__PURE__ */ new Map(),
        files: Array()
      };
      a.value.forEach((o) => {
        const z = {
          ...jt(o.file, ["name", "lastModified", "webkitRelativePath", "size", "type"]),
          status: o.status,
          progress: o.progress,
          abort: o.abort,
          delete: o.delete
        };
        switch ($.files.push(z), e.readAs) {
          case "formData":
            y.append("file", o.file, o.file.name), e.multiple ? $.files.length === y.getAll("file").length && l("upload", y, $.files) : l("upload", y, z);
            break;
          case "stream":
            $.payload.set(o.file.name, o.file.stream()), e.multiple ? $.files.length === $.payload.size && l(
              "upload",
              $.payload,
              $.files
            ) : l(
              "upload",
              $.payload.get(o.file.name),
              z
            );
            break;
          default:
            switch (o.reader.onload = () => {
              switch (o.status.set("succeeded"), o.progress.set(1), $.payload.set(o.file.name, o.reader.result), e.multiple ? l("success", o.file.name) : l("success"), e.readAs) {
                case "buffer":
                  e.multiple ? $.files.length === $.payload.size && l("upload", $.payload, $.files) : l("upload", $.payload.get(o.file.name), z);
                  break;
                case "binary":
                  e.multiple ? $.files.length === $.payload.size && l("upload", $.payload, $.files) : l("upload", $.payload.get(o.file.name), z);
                  break;
                case "base64":
                  e.multiple ? $.files.length === $.payload.size && l("upload", $.payload, $.files) : l("upload", $.payload.get(o.file.name), z);
                  break;
                default:
                  e.multiple ? $.files.length === $.payload.size && l("upload", $.payload, $.files) : l("upload", $.payload.get(o.file.name), z);
                  break;
              }
            }, $.payload.set(o.file.name, o.reader.result), e.readAs) {
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
        const { scrollHeight: y, clientHeight: $ } = i.value;
        p.set(y > $ + 1);
      }
    };
    return k((y) => {
      B(Oe(y));
    }), Ne(i, w, {
      window
    }), (y, $) => (_(), b("div", {
      ref_key: "dropZoneRef$",
      ref: n,
      class: s([y.$style["uploader-container"], y.$style.wrapper, y.$style.flex, y.$style.vertical])
    }, [
      c(m) || a.value.size === 0 ? (_(), K(ve, {
        key: 0,
        onClick: c(v),
        class: s([
          y.$style["uploader-drop-area"],
          y.$style.wrapper,
          y.$style.flex,
          y.$style.vertical,
          y.$style.behavior,
          y.$style.clickable,
          c(m) && y.$style.active
        ]),
        radius: "var(--agh-ref-border-radius-300)",
        variant: "dash"
      }, {
        default: F(() => [
          O(c(ue), {
            class: s(y.$style.icon),
            icon: e.icon
          }, null, 8, ["class", "icon"]),
          f("h1", null, H(c(g)), 1),
          f("p", null, H(c(h)), 1)
        ]),
        _: 1
      }, 8, ["onClick", "class"])) : (_(), b("div", {
        key: 1,
        ref_key: "wrapperRef$",
        ref: i,
        class: s([
          y.$style["uploader-file-list"],
          y.$style.wrapper,
          y.$style.flex,
          y.$style.vertical,
          c(p)() && y.$style.overflowed
        ])
      }, [
        (_(!0), b(V, null, U(a.value, ([o, z]) => (_(), K(ve, {
          key: `file-${o}`,
          class: s([y.$style["uploader-file-card"], y.$style.wrapper, y.$style.flex, y.$style.horizontal]),
          "has-stroke": !1,
          radius: "var(--agh-ref-border-radius-400)",
          variant: "flat"
        }, {
          default: F(() => [
            f("div", {
              class: s([y.$style.icon, y.$style[z.status()]])
            }, [
              O(c(ue), {
                icon: z.status() === "progressing" ? "fa6-solid:upload" : z.status() === "failed" ? "fa6-solid:circle-xmark" : z.status() === "succeeded" ? "fa6-solid:circle-check" : z.status() === "aborted" ? "fa6-solid:circle-stop" : e.icon
              }, null, 8, ["icon"])
            ], 2),
            f("div", {
              class: s([
                y.$style["uploader-file-content"],
                y.$style.wrapper,
                y.$style.flex,
                y.$style.vertical
              ])
            }, [
              f("h1", null, H(z.filename), 1),
              f("p", null, H(z.type) + "・" + H(c(_l).humanizeByte(z.file.size)), 1)
            ], 2),
            z.status() === "progressing" ? (_(), b("div", {
              key: 0,
              class: s([
                y.$style["uploader-file-progress"],
                y.$style.wrapper,
                y.$style.flex,
                y.$style.horizontal
              ])
            }, [
              O(Jr, {
                class: s(y.$style["uploader-file-progress"]),
                value: z.progress()
              }, null, 8, ["class", "value"]),
              f("p", null, H((z.progress() * 100).toFixed(0)) + "%", 1)
            ], 2)) : L("", !0),
            z.status() === "succeeded" ? (_(), K(le, {
              key: 1,
              onClick: (C) => z.delete(),
              class: s(y.$style.button),
              icon: "fa6-solid:trash",
              variant: "text"
            }, null, 8, ["onClick", "class"])) : (_(), K(le, {
              key: 2,
              onClick: (C) => z.abort(),
              class: s(y.$style.button),
              icon: "fa6-solid:xmark",
              variant: "text"
            }, null, 8, ["onClick", "class"]))
          ]),
          _: 2
        }, 1032, ["class"]))), 128))
      ], 2))
    ], 2));
  }
}), tn = "_behavior_12os8_1", ln = "_clickable_12os8_1", an = "_disabled_12os8_4", sn = "_draggable_12os8_7", on = "_move_12os8_7", rn = "_loading_12os8_10", nn = "_wrapper_12os8_14", cn = "_flex_12os8_25", un = "_horizontal_12os8_61", dn = "_wrap_12os8_14", _n = "_vertical_12os8_73", pn = "_grid_12os8_85", vn = "_active_12os8_104", fn = "_icon_12os8_107", mn = "_overflowed_12os8_132", yn = "_succeeded_12os8_167", hn = "_failed_12os8_170", gn = "_aborted_12os8_173", $n = "_progressing_12os8_176", bn = "_pending_12os8_179", wn = "_button_12os8_182", kn = {
  behavior: tn,
  clickable: ln,
  disabled: an,
  draggable: sn,
  move: on,
  loading: rn,
  wrapper: nn,
  flex: cn,
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
  horizontal: un,
  wrap: dn,
  vertical: _n,
  grid: pn,
  "uploader-container": "_uploader-container_12os8_91",
  "uploader-drop-area": "_uploader-drop-area_12os8_98",
  active: vn,
  icon: fn,
  "uploader-file-list": "_uploader-file-list_12os8_124",
  overflowed: mn,
  "uploader-file-card": "_uploader-file-card_12os8_156",
  succeeded: yn,
  failed: hn,
  aborted: gn,
  progressing: $n,
  pending: bn,
  button: wn,
  "uploader-file-content": "_uploader-file-content_12os8_185",
  "uploader-file-progress": "_uploader-file-progress_12os8_199"
}, Sn = {
  $style: kn
}, Uu = /* @__PURE__ */ G(en, [["__cssModules", Sn], ["__scopeId", "data-v-5cb780e1"]]), zn = {
  key: 0,
  "clip-path": "url(#clip)"
}, Mn = {
  key: 1,
  d: "M19 36.5C12.5312 36.5 6.625 33.125 3.39062 27.5C0.15625 21.9453 0.15625 15.125 3.39062 9.5C6.625 3.94531 12.5312 0.5 19 0.5C25.3984 0.5 31.3047 3.94531 34.5391 9.5C37.7734 15.125 37.7734 21.9453 34.5391 27.5C31.3047 33.125 25.3984 36.5 19 36.5ZM13.3047 12.8047C12.6016 13.5078 12.6016 14.5625 13.3047 15.1953L16.6094 18.5L13.3047 21.8047C12.6016 22.5078 12.6016 23.5625 13.3047 24.1953C13.9375 24.8984 14.9922 24.8984 15.625 24.1953L18.9297 20.8906L22.2344 24.1953C22.9375 24.8984 23.9922 24.8984 24.625 24.1953C25.3281 23.5625 25.3281 22.5078 24.625 21.8047L21.3203 18.5L24.625 15.1953C25.3281 14.5625 25.3281 13.5078 24.625 12.8047C23.9922 12.1719 22.9375 12.1719 22.2344 12.8047L18.9297 16.1094L15.625 12.8047C14.9922 12.1719 13.9375 12.1719 13.3047 12.8047Z"
}, Cn = {
  key: 2,
  d: "M19 36.5c-6.469 0-12.375-3.375-15.61-9-3.234-5.555-3.234-12.375 0-18C6.626 3.945 12.532.5 19 .5c6.398 0 12.305 3.445 15.54 9 3.233 5.625 3.233 12.445 0 18a17.869 17.869 0 0 1-15.54 9Zm7.945-21.305h-.07c.703-.633.703-1.687 0-2.39a1.655 1.655 0 0 0-2.32 0L16.75 20.68l-3.305-3.305c-.703-.703-1.758-.703-2.39 0a1.54 1.54 0 0 0 0 2.32l4.5 4.5c.633.703 1.687.703 2.39 0l9-9Z"
}, Bn = /* @__PURE__ */ Z({
  __name: "LoadingIcon",
  props: {
    status: {}
  },
  setup(r) {
    const t = r;
    return (e, l) => (_(), b("div", {
      class: s(e.$style["icon-wrapper"])
    }, [
      O(Ee, {
        class: s([e.$style["icon-entity"], e.$style[t.status]]),
        "shape-rendering": "geometricPrecision",
        viewBox: "0 0 36 36"
      }, {
        defs: F(() => [...l[0] || (l[0] = [
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
        path: F(() => [
          t.status === "waiting" ? (_(), b("g", zn, [...l[1] || (l[1] = [
            f("path", { d: "M0.0703125 16.8125C0.421875 13.1562 1.82812 9.78125 4.07812 7.03906L7.3125 10.2734C5.83594 12.1016 4.85156 14.3516 4.57031 16.8125H0.0703125ZM9.70312 7.88281L6.46875 4.64844C9.21094 2.39844 12.5859 0.921875 16.3125 0.640625V5.14062C13.7812 5.42188 11.5312 6.40625 9.70312 7.88281ZM19.6875 31.9297C22.1484 31.6484 24.3984 30.6641 26.2266 29.1875L29.4609 32.4219C26.7188 34.6719 23.3438 36.0781 19.6875 36.4297V31.9297ZM28.6172 26.7969C30.0938 24.9688 31.0781 22.6484 31.3594 20.1875H35.8594C35.5781 23.9141 34.1016 27.2891 31.8516 30.0312L28.6172 26.7969ZM6.46875 32.4219L9.70312 29.1875C11.5312 30.6641 13.7812 31.6484 16.2422 31.9297V36.4297C12.5859 36.0781 9.21094 34.6719 6.46875 32.4219ZM4.07812 30.0312C1.82812 27.2891 0.421875 23.9141 0.0703125 20.1875H4.57031C4.85156 22.7188 5.83594 24.9688 7.3125 26.7969L4.07812 30.0312ZM29.4609 4.64844L26.2266 7.88281C24.3984 6.40625 22.1484 5.42188 19.6875 5.14062V0.640625C23.3438 0.921875 26.7188 2.39844 29.4609 4.64844ZM28.6172 10.2734L31.8516 7.03906C34.1016 9.78125 35.5781 13.1562 35.8594 16.8828H31.3594C31.0781 14.3516 30.0938 12.1016 28.6172 10.2734Z" }, null, -1),
            f("path", { d: "M0.0703125 16.8125C0.421875 13.1562 1.82812 9.78125 4.07812 7.03906L7.3125 10.2734C5.83594 12.1016 4.85156 14.3516 4.57031 16.8125H0.0703125Z" }, null, -1)
          ])])) : t.status === "failed" ? (_(), b("path", Mn)) : t.status === "succeeded" ? (_(), b("path", Cn)) : (_(), b(V, { key: 3 }, [
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
}), Tn = "_waiting_1w7k2_179", An = "_loading_1w7k2_182", Dn = "_failed_1w7k2_185", jn = "_succeeded_1w7k2_188", Vn = "_rotate_1w7k2_1", On = "_beat_1w7k2_1", Nn = "_bounce_1w7k2_1", Hn = "_fade_1w7k2_1", In = "_flip_1w7k2_1", Rn = "_shake_1w7k2_1", qn = "_spin_1w7k2_1", Ln = {
  "icon-wrapper": "_icon-wrapper_1w7k2_170",
  "icon-entity": "_icon-entity_1w7k2_173",
  "fade-in": "_fade-in_1w7k2_1",
  waiting: Tn,
  loading: An,
  failed: Dn,
  succeeded: jn,
  rotate: Vn,
  "step-rotate": "_step-rotate_1w7k2_1",
  "jump-in": "_jump-in_1w7k2_1",
  beat: On,
  bounce: Nn,
  fade: Hn,
  "beat-fade": "_beat-fade_1w7k2_1",
  flip: In,
  shake: Rn,
  spin: qn
}, En = {
  $style: Ln
}, xu = /* @__PURE__ */ G(Bn, [["__cssModules", En], ["__scopeId", "data-v-4ec8c9f8"]]), Pn = ["height", "width"], Fn = /* @__PURE__ */ Z({
  __name: "InnerShadowDeco",
  props: {
    height: {},
    width: {}
  },
  setup(r) {
    const t = r;
    return (e, l) => (_(), b("filter", {
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
    ])], 8, Pn));
  }
}), Un = ["innerHTML"], xn = ["cx", "cy", "r"], Wn = ["cx", "cy", "r"], Zn = ["cx", "cy", "r", "stroke-dasharray", "stroke-dashoffset", "stroke-width"], Gn = { "clip-path": "url(#progress-content-clip)" }, Yn = ["height", "width", "x", "y"], Kn = /* @__PURE__ */ Z({
  __name: "ProgressCircle",
  props: {
    value: { default: 0 },
    variant: { default: "concave" },
    thickness: { default: 12 }
  },
  setup(r) {
    const t = r, e = E(), { width: l, height: a } = Le(e), n = we(
      () => q.clamp(q.min(l.value, a.value) / 2 - t.thickness / 2, 0, 1 / 0)
    ), i = we(() => n.value * 2 * q.PI), p = we(() => ({
      x: l.value / 2,
      y: a.value / 2
    })), u = ae(""), h = () => {
      e.value && t.variant === "convex" && (u.set(
        _t("--progress-value-fill-gradient", e, {
          observe: !0
        }).value
      ), u() || vt(h, 1));
    };
    return Te(() => {
      h();
    }), (g, v) => (_(), b("div", {
      ref_key: "wrapperRef$",
      ref: e,
      class: s([g.$style["progress-container"], g.$style[t.variant]])
    }, [
      O(Ee, {
        height: c(a),
        width: c(l)
      }, {
        defs: F(() => [
          f("g", {
            innerHTML: c(u)()
          }, null, 8, Un),
          O(Fn, {
            height: c(a),
            width: c(l)
          }, null, 8, ["height", "width"]),
          f("circle", {
            id: "progress-groove-outer",
            cx: c(p).x,
            cy: c(p).y,
            r: c(n) + t.thickness / 2
          }, null, 8, xn),
          f("circle", {
            id: "progress-groove-inner",
            cx: c(p).x,
            cy: c(p).y,
            r: c(n) - t.thickness / 2
          }, null, 8, Wn),
          v[0] || (v[0] = f("mask", { id: "progress-groove-mask" }, [
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
        path: F(() => [
          f("g", {
            class: s(g.$style["progress-groove"])
          }, [...v[1] || (v[1] = [
            f("use", {
              href: "#progress-groove-outer",
              mask: "url(#progress-groove-mask)"
            }, null, -1)
          ])], 2),
          f("g", {
            class: s(g.$style["progress-value"])
          }, [
            f("circle", {
              cx: c(p).x,
              cy: c(p).y,
              r: c(n),
              "stroke-dasharray": `${t.value * c(i)} ${(1 - t.value) * c(i)}`,
              "stroke-dashoffset": (t.value + 0.25) * c(i),
              "stroke-width": t.thickness,
              fill: "transparent"
            }, null, 8, Zn)
          ], 2),
          v[2] || (v[2] = f("clipPath", { id: "progress-content-clip" }, [
            f("use", { href: "#progress-groove-inner" })
          ], -1)),
          f("g", Gn, [
            (_(), b("foreignObject", {
              height: c(n) * 2,
              width: c(n) * 2,
              x: c(p).x - c(n),
              y: c(p).y - c(n)
            }, [
              f("div", {
                class: s(g.$style["progress-content-wrapper"])
              }, [
                f("label", null, H((t.value * 100).toFixed(0)) + "%", 1)
              ], 2)
            ], 8, Yn))
          ])
        ]),
        _: 1
      }, 8, ["height", "width"])
    ], 2));
  }
}), Xn = "_concave_cq1o3_23", Qn = "_convex_cq1o3_55", Jn = {
  "progress-container": "_progress-container_cq1o3_1",
  "progress-groove": "_progress-groove_cq1o3_11",
  "progress-value": "_progress-value_cq1o3_11",
  concave: Xn,
  "progress-content-wrapper": "_progress-content-wrapper_cq1o3_35",
  convex: Qn
}, ei = {
  $style: Jn
}, Wu = /* @__PURE__ */ G(Kn, [["__cssModules", ei], ["__scopeId", "data-v-44ae6bab"]]), ti = ["value"], li = /* @__PURE__ */ Z({
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
  setup(r, { emit: t }) {
    Se((p) => ({
      v39cb2cc4: p.thumbColor
    }));
    const e = r, l = t, a = E(null), n = T(() => Number(e.modelValue) / Number(e.max) * 100), { onTrigger: i } = ke(
      (p) => {
        if (e.disabled)
          p.preventDefault(), p.stopPropagation();
        else {
          const u = Number(p.target.value);
          l("update:modelValue", u);
        }
      },
      e.eventSignalOptions ?? {
        flush: "post"
      }
    );
    return (p, u) => (_(), b("input", ie({
      ref_key: "inputRangeRef$",
      ref: a,
      onInput: u[0] || (u[0] = //@ts-ignore
      (...h) => c(i) && c(i)(...h))
    }, e, {
      style: {
        background: `linear-gradient(to right, ${e.progressColor} ${n.value}%,${e.trackColor} ${n.value}%)`
      },
      value: e.modelValue,
      type: "range"
    }), null, 16, ti));
  }
}), ai = {}, si = {
  $style: ai
}, Zu = /* @__PURE__ */ G(li, [["__cssModules", si], ["__scopeId", "data-v-b4e2c708"]]), oi = /* @__PURE__ */ Z({
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
  setup(r, { emit: t }) {
    const e = r, l = t, a = ze(r, "modelValue"), n = T(
      () => new Ce(
        Array.isArray(e.options) ? e.options.map((g, v) => [v, g]) : e.options
      )
    ), i = ae(!1), p = (g) => {
      g && (a.value = e.fields?.title ?? e.fields?.key ? Me(g, e.fields?.title ?? e.fields?.key ?? "", !0) ?? "" : String(g), l("select", g), i.set(!0));
    }, { result: u } = Bt(n, {
      query: a,
      getters: e.fields?.searchKeys ?? [e.fields?.key ?? "", e.fields?.title ?? ""].filter(Boolean) ?? ((g) => String(g)),
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
    }), h = E();
    return oe(u, (g) => {
      l("search", Array.isArray(e.options) ? [...g.values()] : g);
    }), (g, v) => (_(), b("div", {
      class: s(g.$style["search-bar--container"])
    }, [
      O(Fe, {
        modelValue: a.value,
        "onUpdate:modelValue": v[0] || (v[0] = (k) => a.value = k),
        onBlur: v[1] || (v[1] = (k) => c(i).set(!0)),
        onClick: v[2] || (v[2] = (k) => c(i).set(!1)),
        onFocus: v[3] || (v[3] = (k) => c(i).set(!1)),
        autofocus: e.autofocus,
        class: s(g.$style["search-bar--input"]),
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
      e.autocomplete && a.value && c(u).size > 0 && !c(i)() ? (_(), K(Xe, {
        key: 0,
        "onUpdate:modelValue": p,
        class: s(g.$style["search-bar--menu"]),
        fields: e.fields,
        "group-by": e.groupBy,
        "model-value": h.value,
        options: c(u)
      }, null, 8, ["class", "fields", "group-by", "model-value", "options"])) : L("", !0)
    ], 2));
  }
}), ri = {
  "search-bar--container": "_search-bar--container_1ggln_1",
  "search-bar--input": "_search-bar--input_1ggln_7",
  "search-bar--menu": "_search-bar--menu_1ggln_10"
}, ni = {
  $style: ri
}, ii = /* @__PURE__ */ G(oi, [["__cssModules", ni], ["__scopeId", "data-v-6fc8a816"]]), ci = /* @__PURE__ */ Z({
  __name: "SwitchButton",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 },
    eventSignalOptions: {}
  },
  emits: ["update:modelValue"],
  setup(r, { emit: t }) {
    const e = r, l = t, { onTrigger: a } = ke(
      (n) => {
        e.disabled ? (n.preventDefault(), n.stopPropagation()) : l("update:modelValue", !e.modelValue);
      },
      e.eventSignalOptions ?? {
        flush: "post"
      }
    );
    return (n, i) => (_(), b("div", {
      onClick: i[0] || (i[0] = //@ts-ignore
      (...p) => c(a) && c(a)(...p)),
      class: s([n.$style.switch, e.modelValue && n.$style.switch_active])
    }, [
      f("div", {
        class: s([n.$style.slider, e.modelValue && n.$style.slider_active])
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
}, Gu = /* @__PURE__ */ G(ci, [["__cssModules", vi], ["__scopeId", "data-v-81a8510a"]]), fi = ["value"], mi = ["for"], yi = /* @__PURE__ */ Z({
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
  setup(r, { emit: t }) {
    const e = r, l = t, { onTrigger: a } = ke(
      (u) => {
        e.disabled ? (u.preventDefault(), u.stopPropagation()) : (p(), l("update:modelValue", u.target.value));
      },
      e.eventSignalOptions ?? {
        flush: "post"
      }
    ), n = E(), i = ae(""), p = () => {
      i.set(
        n.value ? n.value?.validity.valid ? "" : Ct(n.value.validity, e.invalidMessage ?? {}) ?? n.value.validationMessage : ""
      ), n.value?.validity && l("validation", n.value.validity);
    };
    return Te(() => {
      p();
    }), (u, h) => (_(), K(ve, {
      class: s([u.$style["textarea-container"]]),
      radius: "var(--agh-ref-border-radius-400)",
      variant: "flat"
    }, {
      default: F(() => [
        f("textarea", ie({
          ref_key: "inputRef$",
          ref: n,
          onInput: h[0] || (h[0] = //@ts-ignore
          (...g) => c(a) && c(a)(...g)),
          class: [u.$style["textarea-input"]]
        }, e, {
          value: e.modelValue
        }), null, 16, fi),
        c(i)() ? (_(), b("label", {
          key: 0,
          class: s([u.$style["textarea-label"]]),
          for: e.name
        }, [
          O(c(ue), {
            class: s([u.$style["textarea-label--icon"]]),
            icon: "fa6-solid:circle-xmark"
          }, null, 8, ["class"]),
          f("span", {
            class: s([u.$style["textarea-label--value"]])
          }, H(c(i)()), 3)
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
}, Yu = /* @__PURE__ */ G(yi, [["__cssModules", gi], ["__scopeId", "data-v-1c80add8"]]), $i = /* @__PURE__ */ Z({
  __name: "AttackMatrix",
  props: {
    items: {},
    disabled: { type: Boolean, default: !1 },
    showDetected: { type: Boolean, default: !1 }
  },
  setup(r) {
    const t = r;
    return (e, l) => (_(), b("div", {
      class: s([e.$style.matrix, t.disabled && e.$style["matrix-disabled"]])
    }, [
      f("div", {
        class: s(e.$style.line)
      }, null, 2),
      f("div", {
        class: s(e.$style.container)
      }, [
        (_(!0), b(V, null, U(t.items, (a, n) => (_(), b("div", {
          key: n,
          class: s(e.$style.card)
        }, [
          f("div", {
            class: s(e.$style.body)
          }, [
            f("div", {
              class: s(e.$style.title)
            }, H(a.label), 3),
            f("div", {
              class: s(e.$style.description)
            }, H(a.description), 3)
          ], 2),
          t.showDetected ? (_(), b("div", {
            key: 0,
            class: s(e.$style.detected)
          }, [
            f("div", {
              class: s(e.$style.label)
            }, [
              O(c(ue), { icon: "fa6-solid:user" }),
              l[0] || (l[0] = St(" Detected ", -1))
            ], 2),
            f("div", {
              class: s(e.$style.fraction)
            }, [
              f("div", {
                class: s(e.$style.numerator)
              }, H(a.detected?.count), 3),
              f("div", {
                class: s(e.$style.denominator)
              }, " / ", 2),
              f("div", {
                class: s(e.$style.denominator)
              }, H(a.detected?.total), 3)
            ], 2)
          ], 2)) : L("", !0)
        ], 2))), 128))
      ], 2)
    ], 2));
  }
}), bi = "_matrix_1jtlz_1", wi = "_line_1jtlz_5", ki = "_container_1jtlz_10", Si = "_card_1jtlz_16", zi = "_body_1jtlz_25", Mi = "_title_1jtlz_30", Ci = "_description_1jtlz_34", Bi = "_detected_1jtlz_38", Ti = "_label_1jtlz_43", Ai = "_fraction_1jtlz_50", Di = "_denominator_1jtlz_55", ji = "_numerator_1jtlz_59", Vi = {
  matrix: bi,
  line: wi,
  container: ki,
  card: Si,
  body: zi,
  title: Mi,
  description: Ci,
  detected: Bi,
  label: Ti,
  fraction: Ai,
  denominator: Di,
  numerator: ji,
  "matrix-disabled": "_matrix-disabled_1jtlz_66"
}, Oi = {
  $style: Vi
}, Ku = /* @__PURE__ */ G($i, [["__cssModules", Oi], ["__scopeId", "data-v-f4de3057"]]), Ni = /* @__PURE__ */ Z({
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
  setup(r, { emit: t }) {
    const e = r, l = t, a = E(), n = {
      key: "detail",
      title: "{{ $.label }}",
      content: "{{ $.detail }}",
      icon: "icon"
    }, i = {
      key: "value",
      title: "{{ $.value }}"
    }, p = we(
      () => (e.filterOptions ?? []).map(
        (S) => Mt(S.multi ? S.options : Oe(e.items, S.field)).map((R) => ({
          ...S,
          value: R
        }))
      ).flat()
    ), u = E(e.modelValue ?? ""), h = T({
      get: () => e.modelValue ?? u.value,
      set: (S) => {
        l("update:modelValue", S ?? ""), e.modelValue || (u.value = S ?? "");
      }
    }), g = E(Dl(e.sortOptions)), v = T({
      get: () => e.sort ?? g.value,
      set: (S) => {
        S && ($.set(!0), l("update:sort", S), e.sort || (g.value = S));
      }
    }), k = E([]), m = T({
      get: () => e.filter ?? k.value,
      set: (S) => {
        l("update:filter", S ?? []), e.filter || (k.value = S ?? []);
      }
    }), B = E(), M = T({
      get: () => e.selected !== void 0 ? e.selected : B.value,
      set: (S) => {
        S && (l("update:selected", S), e.selected || (B.value = S));
      }
    }), w = E(e.items), y = ae(!0), $ = ae(!0), o = ae(!1), z = () => {
      if (a.value) {
        const { scrollHeight: S, clientHeight: R } = a.value;
        o.set(S > R + 1);
      }
    }, C = (S) => S.update((R) => !R), x = (S) => {
      M.value = S;
    }, se = () => {
      const S = e.items.map(
        (d) => ({
          ...d,
          selected: xe(d, e.fields.key) === xe(M.value, e.fields.key)
        })
      ), R = h.value ? Al(
        S,
        (d) => xe(d, e.fields.title ?? e.fields.key).includes(h.value)
      ) : S, j = Dt(
        R,
        at([v.value?.field ?? e.fields.key]),
        at([v.value?.direction ?? "asc"])
      ), re = Ie(m.value) ? j : Nl(
        ...Oe(
          dt(m.value, "field"),
          (d) => at(
            d.map(
              (I) => I.multi ? j.filter((N) => N[I.field]?.includes(I.value)) : j.filter((N) => Hl(N, { [I.field]: I.value }))
            )
          )
        ),
        Lt
      );
      w.value = re;
    };
    return Ne(a, z, {
      window
    }), Te(() => {
      se(), z();
    }), xt(() => {
      se(), z();
    }), oe([v, m, h, M], () => {
      se(), z();
    }), (S, R) => (_(), K(ve, {
      class: s(S.$style["list-container"]),
      purpose: "container",
      radius: "var(--agh-ref-border-radius-600)"
    }, {
      default: F(() => [
        f("div", {
          class: s(S.$style["list-toolbar"])
        }, [
          O(Fe, {
            modelValue: h.value,
            "onUpdate:modelValue": R[0] || (R[0] = (j) => h.value = j),
            class: s(S.$style["list-toolbar-search"]),
            type: "search"
          }, null, 8, ["modelValue", "class"]),
          e.filterOptions && !c(Ie)(e.filterOptions) ? nt((_(), b("div", {
            key: 0,
            onKeydown: [
              R[3] || (R[3] = je((j) => c(y).set(!0), ["enter"])),
              R[4] || (R[4] = je((j) => c(y).set(!0), ["esc"]))
            ],
            class: s(S.$style["list-toolbar-tool"])
          }, [
            O(le, {
              onClick: R[1] || (R[1] = (j) => C(c(y))),
              class: s(S.$style["list-toolbar-button"]),
              clicked: !c(y)(),
              icon: "fa6-solid:filter",
              variant: "text"
            }, null, 8, ["class", "clicked"]),
            m.value.length > 0 ? (_(), b("span", {
              key: 0,
              class: s(S.$style["list-toolbar-button-deco"])
            }, H(m.value.length), 3)) : L("", !0),
            c(y)() ? L("", !0) : (_(), K(Xe, {
              key: 1,
              modelValue: m.value,
              "onUpdate:modelValue": R[2] || (R[2] = (j) => m.value = j),
              class: s(S.$style["list-toolbar-menu"]),
              fields: i,
              options: c(p),
              "group-by": "label",
              label: "Filter",
              multiple: ""
            }, null, 8, ["modelValue", "class", "options"]))
          ], 34)), [
            [c(ut), () => c(y).set(!0)]
          ]) : L("", !0),
          e.sortOptions && !c(Ie)(e.sortOptions) ? nt((_(), b("div", {
            key: 1,
            onKeydown: [
              R[7] || (R[7] = je((j) => c($).set(!0), ["enter"])),
              R[8] || (R[8] = je((j) => c($).set(!0), ["esc"]))
            ],
            class: s(S.$style["list-toolbar-tool"])
          }, [
            O(le, {
              onClick: R[5] || (R[5] = (j) => C(c($))),
              class: s(S.$style["list-toolbar-button"]),
              clicked: !c($)(),
              icon: v.value?.icon ?? "fa6-solid:arrow-down-wide-short",
              variant: "text"
            }, null, 8, ["class", "clicked", "icon"]),
            c($)() ? L("", !0) : (_(), K(Xe, {
              key: 0,
              modelValue: v.value,
              "onUpdate:modelValue": R[6] || (R[6] = (j) => v.value = j),
              class: s(S.$style["list-toolbar-menu"]),
              fields: n,
              options: e.sortOptions
            }, null, 8, ["modelValue", "class", "options"]))
          ], 34)), [
            [c(ut), () => c($).set(!0)]
          ]) : L("", !0)
        ], 2),
        f("div", {
          ref_key: "wrapperRef$",
          ref: a,
          class: s([
            S.$style["list-wrapper"],
            c(o)() && S.$style.overflowed
          ])
        }, [
          O(Ul, {
            "group-by": e.groupBy,
            items: w.value
          }, {
            placeholder: F(() => [
              W(S.$slots, "placeholder", {}, void 0, !0)
            ]),
            group: F((j) => [
              f("label", {
                class: s(S.$style["list-item-label"])
              }, H(j.group), 3)
            ]),
            default: F((j) => [
              O(ve, {
                onClick: (re) => x(j.item),
                class: s(S.$style["list-item"]),
                clickable: !0,
                color: j.item.selected ? "blue" : "default",
                radius: "var(--agh-ref-border-radius-400)"
              }, {
                default: F(() => [
                  W(S.$slots, "default", {
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
        W(S.$slots, "footer", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Hi = "_overflowed_u0xfw_83", Ii = {
  "list-container": "_list-container_u0xfw_1",
  "list-toolbar": "_list-toolbar_u0xfw_11",
  "list-toolbar-search": "_list-toolbar-search_u0xfw_17",
  "list-toolbar-tool": "_list-toolbar-tool_u0xfw_20",
  "list-toolbar-button": "_list-toolbar-button_u0xfw_23",
  "list-toolbar-button-deco": "_list-toolbar-button-deco_u0xfw_26",
  "list-toolbar-menu": "_list-toolbar-menu_u0xfw_45",
  "list-wrapper": "_list-wrapper_u0xfw_51",
  overflowed: Hi,
  "list-item": "_list-item_u0xfw_86",
  "list-item-label": "_list-item-label_u0xfw_91"
}, Ri = {
  $style: Ii
}, Xu = /* @__PURE__ */ G(Ni, [["__cssModules", Ri], ["__scopeId", "data-v-8648bdd7"]]), qi = ["onClick"], Li = /* @__PURE__ */ Z({
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
  setup(r) {
    Se((m) => ({
      v75ac6018: h.value
    })), $e();
    const t = r, e = ze(r, "modelValue", {
      get() {
        return t.modelValue ?? n.value ?? v.value.values().next().value;
      },
      set(m) {
        return t.modelValue || (n.value = m), i.value !== u.value && (i.value = u.value), m;
      }
    }), l = E(), a = E([]), n = E(void 0), i = E(null), p = E(pl()), u = T(
      () => e.value ? [...v.value.keys()].indexOf(e.value.id) ?? 0 : 0
    ), h = T(() => `--tab-anchor--${p.value}--${u.value}`), g = T(
      () => (i.value ?? u.value) <= u.value ? "left" : "right"
    ), v = T(
      () => Array.isArray(t.tabs) ? new Map(t.tabs.map((m) => [m.id, m])) : t.tabs
    ), k = (m) => {
      m.disabled || (e.value = m);
    };
    return (m, B) => (_(), b("div", {
      class: s([m.$style["tab-group-container"], m.$style.wrapper, m.$style.flex, m.$style.vertical])
    }, [
      f("div", {
        ref_key: "tabWrapperRef$",
        ref: l,
        class: s([
          m.$style["tab-group-wrapper"],
          m.$style.wrapper,
          m.$style.flex,
          m.$style.horizontal,
          m.$style[t.level]
        ])
      }, [
        (_(!0), b(V, null, U(v.value, ([M, w]) => (_(), b("div", {
          key: M,
          ref_for: !0,
          ref_key: "tabRefs$",
          ref: a,
          onClick: (y) => k(w),
          class: s([
            m.$style["tab-group"],
            m.$style.wrapper,
            m.$style.flex,
            m.$style.horizontal,
            m.$style.behavior,
            w.disabled ? m.$style.disabled : m.$style.clickable,
            e.value?.id === M && m.$style.active
          ])
        }, [
          w.icon ? (_(), K(c(ue), {
            key: 0,
            class: s(m.$style.icon),
            icon: w.icon
          }, null, 8, ["class", "icon"])) : L("", !0),
          f("p", null, H(w.name), 1)
        ], 10, qi))), 128))
      ], 2),
      e.value ? (_(), K(Wt, {
        key: 0,
        class: s(m.$style.transition),
        "enter-active-class": m.$style[`slide-${g.value}-enter-active`],
        "enter-from-class": m.$style[`slide-${g.value}-enter-from`],
        "leave-active-class": m.$style[`slide-${g.value}-leave-active`],
        "leave-from-class": m.$style[`slide-${g.value}-leave-from`],
        mode: "out-in",
        appear: ""
      }, {
        default: F(() => [
          W(m.$slots, e.value.id, {
            id: e.value.id,
            index: u.value,
            tab: e.value
          }, void 0, !0)
        ]),
        _: 3
      }, 8, ["class", "enter-active-class", "enter-from-class", "leave-active-class", "leave-from-class"])) : L("", !0)
    ], 2));
  }
}), Ei = "_wrapper_1a95t_1", Pi = "_flex_1a95t_12", Fi = "_horizontal_1a95t_48", Ui = "_wrap_1a95t_1", xi = "_vertical_1a95t_60", Wi = "_grid_1a95t_72", Zi = "_behavior_1a95t_78", Gi = "_clickable_1a95t_78", Yi = "_disabled_1a95t_81", Ki = "_draggable_1a95t_84", Xi = "_move_1a95t_84", Qi = "_loading_1a95t_87", Ji = "_transition_1a95t_91", ec = "_primary_1a95t_126", tc = "_secondary_1a95t_132", lc = "_active_1a95t_163", ac = "_icon_1a95t_169", sc = {
  wrapper: Ei,
  flex: Pi,
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
}, Qu = /* @__PURE__ */ G(Li, [["__cssModules", oc], ["__scopeId", "data-v-aaed6900"]]), rc = /* @__PURE__ */ Z({
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
  setup(r, { emit: t }) {
    Se((i) => ({
      v1c7e3d72: a.value
    })), $e();
    const e = r, l = t, a = T(() => e.column.width || "auto"), n = () => {
      l("select:column", e.column), !e.isHeader && !e.isSelected && l("select:row", {
        item: e.item,
        rowIndex: e.rowIndex,
        rowKey: e.rowKey
      });
    };
    return (i, p) => (_(), b("div", {
      onClick: n,
      class: s([
        i.$style["table-cell"],
        i.$style.wrapper,
        i.$style.flex,
        i.$style.vertical,
        e.isSelected && i.$style.selected,
        e.isHeader && i.$style.header
      ])
    }, [
      f("p", null, H(e.value), 1)
    ], 2));
  }
}), nc = "_wrapper_1xs83_1", ic = "_flex_1xs83_12", cc = "_horizontal_1xs83_48", uc = "_wrap_1xs83_1", dc = "_vertical_1xs83_60", _c = "_grid_1xs83_72", pc = "_header_1xs83_82", vc = {
  wrapper: nc,
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
}, Be = /* @__PURE__ */ G(rc, [["__cssModules", fc], ["__scopeId", "data-v-1cbea5d9"]]), mc = /* @__PURE__ */ Z({
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
  setup(r, { emit: t }) {
    $e();
    const e = r, l = t, a = T(
      () => e.columns.map((i) => bl(e.item, i.valuesGetter))
    ), n = () => {
      e.isHeader || l("select:row", {
        item: e.item,
        rowIndex: e.rowIndex,
        rowKey: e.rowKey
      });
    };
    return (i, p) => (_(), b("div", {
      onClick: n,
      class: s([
        i.$style["table-row"],
        i.$style.wrapper,
        i.$style.flex,
        i.$style.horizontal,
        e.isSelected && i.$style.selected,
        e.isHeader && i.$style.header
      ])
    }, [
      (_(!0), b(V, null, U(r.columns, (u, h) => (_(), b(V, {
        key: `table-column-${h}`
      }, [
        e.isHeader ? W(i.$slots, "default", {
          key: 0,
          column: u,
          isHeader: !0,
          value: u.label
        }, () => [
          O(Be, {
            column: u,
            "is-header": !0,
            value: u.label
          }, null, 8, ["column", "value"])
        ], !0) : W(i.$slots, "default", {
          key: 1,
          column: u,
          isSelected: e.isSelected,
          item: e.item,
          rowIndex: e.rowIndex,
          rowKey: e.rowKey,
          value: a.value[h]
        }, () => [
          O(Be, {
            column: u,
            "is-selected": e.isSelected,
            item: e.item,
            "row-index": e.rowIndex,
            "row-key": e.rowKey,
            value: a.value[h]
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
}, qe = /* @__PURE__ */ G(mc, [["__cssModules", zc], ["__scopeId", "data-v-1c821afb"]]), Mc = /* @__PURE__ */ Z({
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
  setup(r, { emit: t }) {
    $e();
    const e = r, l = t, a = (n) => {
      l("select:column", n);
    };
    return (n, i) => (_(), b("header", {
      class: s([
        n.$style["table-header"],
        n.$style.wrapper,
        n.$style.flex,
        n.$style.vertical,
        r.overflowed && n.$style.overflowed
      ])
    }, [
      W(n.$slots, "toolbar", {}, () => [
        f("div", {
          class: s([n.$style.toolbar, n.$style.wrapper, n.$style.flex, n.$style.horizontal])
        }, [
          e.useSearch ? (_(), K(ii, { key: 0 })) : L("", !0)
        ], 2)
      ], !0),
      W(n.$slots, "row", {
        class: s(n.$style["table-row"]),
        columns: e.columns,
        isHeader: !0
      }, () => [
        O(qe, {
          class: s(n.$style["table-row"]),
          columns: e.columns,
          "is-header": !0
        }, {
          default: F((p) => [
            W(n.$slots, "cell", ie({ "onSelect:column": a }, p), () => [
              O(Be, ie({ "onSelect:column": a }, p), null, 16)
            ], !0)
          ]),
          _: 3
        }, 8, ["class", "columns"])
      ], !0)
    ], 2));
  }
}), Cc = "_wrapper_104n3_1", Bc = "_flex_104n3_12", Tc = "_horizontal_104n3_48", Ac = "_wrap_104n3_1", Dc = "_vertical_104n3_60", jc = "_grid_104n3_72", Vc = "_overflowed_104n3_81", Oc = {
  wrapper: Cc,
  flex: Bc,
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
}, Nc = {
  $style: Oc
}, Hc = /* @__PURE__ */ G(Mc, [["__cssModules", Nc], ["__scopeId", "data-v-143bc767"]]), Ic = /* @__PURE__ */ Z({
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
  setup(r, { emit: t }) {
    $e();
    const e = r, l = t, a = E(), n = T(
      () => new Ce(
        e.items instanceof Map ? e.items : new Map([...e.items].map((u, h) => [h, u]))
      ).mapWithIndex((u, h, g) => [
        h,
        {
          item: u,
          index: g,
          key: h
        }
      ])
    ), i = ae(!1);
    return Ne(a, () => {
      if (a.value) {
        const { scrollHeight: u, clientHeight: h } = a.value;
        i.set(u > h + 1);
      }
    }, {
      window
    }), oe(i, (u) => l("overflowed", u), {
      immediate: !0
    }), (u, h) => (_(), b("div", {
      ref_key: "wrapperRef$",
      ref: a,
      class: s([
        u.$style["table-wrapper"],
        u.$style.wrapper,
        u.$style.flex,
        u.$style.vertical,
        c(i)() && u.$style.overflowed
      ])
    }, [
      (_(!0), b(V, null, U(n.value, ([g, { item: v, index: k }]) => W(u.$slots, "row", {
        key: g,
        columns: e.columns,
        item: v,
        rowIndex: k,
        rowKey: g
      }, () => [
        O(qe, {
          "onSelect:row": h[0] || (h[0] = (m) => l("select:row", m)),
          columns: e.columns,
          item: v,
          "row-index": k,
          "row-key": g
        }, {
          default: F((m) => [
            W(u.$slots, "cell", ie({ ref_for: !0 }, m), () => [
              O(Be, ie({ ref_for: !0 }, m), null, 16)
            ], !0)
          ]),
          _: 3
        }, 8, ["columns", "item", "row-index", "row-key"])
      ], !0)), 128))
    ], 2));
  }
}), Rc = "_wrapper_16jbq_1", qc = "_flex_16jbq_12", Lc = "_horizontal_16jbq_48", Ec = "_wrap_16jbq_1", Pc = "_vertical_16jbq_60", Fc = "_grid_16jbq_72", Uc = "_overflowed_16jbq_105", xc = {
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
  wrap: Ec,
  vertical: Pc,
  grid: Fc,
  "table-wrapper": "_table-wrapper_16jbq_78",
  overflowed: Uc
}, Wc = {
  $style: xc
}, Zc = /* @__PURE__ */ G(Ic, [["__cssModules", Wc], ["__scopeId", "data-v-e0155006"]]), Gc = /* @__PURE__ */ Z({
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
  setup(r, { emit: t }) {
    $e();
    const e = r, l = t, a = ae(!1), n = (u) => {
      l("select:row", u), l("select:item", u.item);
    }, i = (u) => {
      l("select:column", u);
    }, p = (u) => {
      a.set(u);
    };
    return (u, h) => (_(), b("div", {
      class: s([u.$style["table-container"], u.$style.wrapper, u.$style.flex, u.$style.vertical])
    }, [
      e.hideHeader ? L("", !0) : W(u.$slots, "header", {
        key: 0,
        columns: e.columns,
        useSearch: e.useSearch
      }, () => [
        O(Hc, {
          columns: e.columns,
          overflowed: c(a)(),
          "use-search": e.useSearch
        }, {
          row: F((g) => [
            W(u.$slots, "row", tt(lt(g)), () => [
              O(qe, tt(lt(g)), {
                default: F((v) => [
                  W(u.$slots, "cell", ie({ "onSelect:column": i }, v), () => [
                    O(Be, ie({ "onSelect:column": i }, v), null, 16)
                  ], !0)
                ]),
                _: 3
              }, 16)
            ], !0)
          ]),
          _: 3
        }, 8, ["columns", "overflowed", "use-search"])
      ], !0),
      W(u.$slots, "wrapper", {
        onOverflowed: p,
        "onSelect:row": n,
        columns: e.columns,
        items: e.items,
        useSearch: e.useSearch
      }, () => [
        O(Zc, {
          onOverflowed: p,
          columns: e.columns,
          items: e.items,
          "use-search": e.useSearch
        }, {
          row: F((g) => [
            W(u.$slots, "row", ie({ "onSelect:row": n }, g), () => [
              O(qe, ie({ "onSelect:row": n }, g), {
                default: F((v) => [
                  W(u.$slots, "cell", tt(lt(v)), () => [
                    O(Be, ie({ "onSelect:column": i }, v), null, 16)
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
}, Ju = /* @__PURE__ */ G(Gc, [["__cssModules", lu], ["__scopeId", "data-v-dd3079ef"]]);
class J {
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
    const a = Math.round(t * J.PRECISION);
    if (a > e || a < 0) {
      if (process.env.NODE_ENV !== "production")
        throw new Error(
          `LargeDataTable.ItemCarrier ${l}=${t} is out of range (0 - ${e / J.PRECISION}) for ${e === J.MAX_INT_32_BITS ? "32" : "28"}-bit fixed-point field`
        );
      return Math.min(Math.max(a, 0), e) >>> 0;
    }
    return a >>> 0;
  }
  encodeHeight(t) {
    return this.encodeFixed(t, J.MAX_INT_28_BITS, "height") << J.HEIGHT_SHIFT >>> 0;
  }
  encodeTop(t) {
    return this.encodeFixed(t, J.MAX_INT_32_BITS, "top");
  }
  decodeHeight(t) {
    return ((t & J.ATTRS_MASK.height) >>> J.HEIGHT_SHIFT) / J.PRECISION;
  }
  decodeTop(t) {
    return t / J.PRECISION;
  }
  updateStatusBit(t, e, l) {
    let a = this.getLowerBitsOrThrow(t);
    const n = J.STATUS_MASK[e], i = (a & n) !== 0;
    a = l(i) ? a | n : a & ~n, this.setLowerBits(t, a);
  }
  getStatus(t) {
    const e = this.getLowerBitsOrThrow(t);
    return {
      inited: (e & J.STATUS_MASK.inited) !== 0,
      loaded: (e & J.STATUS_MASK.loaded) !== 0,
      measured: (e & J.STATUS_MASK.measured) !== 0,
      visible: (e & J.STATUS_MASK.visible) !== 0
    };
  }
  getAttrs(t) {
    const e = this.getLowerBitsOrThrow(t), l = this.getUpperBitsOrThrow(t), a = this.decodeHeight(e), n = this.decodeTop(l);
    return {
      height: a,
      top: n,
      bottom: n + a
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
      l = l & 15 | a & J.ATTRS_MASK.height, this.setLowerBits(t, l);
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
    return Math.round(t * J.PRECISION) / J.PRECISION;
  }
}
const bt = 8388608, au = /* @__PURE__ */ Z({
  __name: "LargeDataTableWrapper",
  props: {
    totalItems: {},
    visibleSize: {},
    defaultRowHeight: {},
    bufferSize: {},
    lazyUpdate: { type: Boolean },
    items: {},
    columns: {},
    useSearch: { type: Boolean },
    searchQuery: {},
    result: {},
    clearSelection: { type: Function }
  },
  emits: ["request:items", "select:row", "overflowed"],
  setup(r, { emit: t }) {
    Se((A) => ({
      v76159c16: o.value,
      e1fca918: z.value
    })), $e();
    const e = r, l = t, a = Zt("wrapperRef$"), n = E(0), i = E(0), p = E(/* @__PURE__ */ new Set()), u = Gt(new J()), h = E(-1), g = T(() => {
      if (p.value.size === 0)
        return e.defaultRowHeight ?? 32;
      const A = q.geoavg(...p.value);
      return Number.isFinite(A) ? A : e.defaultRowHeight ?? 32;
    }), v = T(() => e.visibleSize ?? 50), k = T(() => e.bufferSize ?? 10), m = T(
      () => new Ce(
        e.items instanceof Map ? e.items : new Map([...e.items].map((A, D) => [D, A]))
      ).mapWithIndex((A, D, P) => [
        P,
        Ye({
          index: P,
          item: A,
          key: D,
          get attrs() {
            return u.value.getAttrs(P);
          },
          get status() {
            return u.value.getStatus(P);
          }
        })
      ])
    ), B = T(() => e.totalItems ?? m.value.size), M = T(() => m.value.filter(({ status: A }) => A.visible)), w = T(() => {
      const A = new Ce();
      for (let D = n.value; D < Math.min(n.value + v.value, m.value.size); D++) {
        const P = m.value.get(D);
        P && A.set(D, P);
      }
      return Ye(A);
    }), y = T(() => {
      if (p.value.size > 1)
        return m.value.reduce(
          ({ prefix: A, subfix: D, active: P }, { status: Q, attrs: ee, index: Y }) => (Y < n.value ? Q.measured ? A += ee.height + i.value : A += g.value + i.value : Y >= n.value + v.value ? Q.measured ? D += ee.height + i.value : D += g.value + i.value : P += Q.measured ? ee.height : g.value, { prefix: A, subfix: D, active: P, total: A + D + P }),
          { prefix: 0, subfix: 0, active: 0, total: 0 }
        );
      {
        const A = Math.max(0, B.value - n.value - v.value);
        return {
          prefix: (g.value + i.value) * n.value,
          subfix: (g.value + i.value) * A,
          active: g.value * v.value,
          total: (g.value + i.value) * B.value
        };
      }
    }), $ = T(() => y.value.total > bt ? bt / (y.value.total - y.value.active) : 1), o = T(() => y.value.prefix * $.value), z = T(() => y.value.subfix * $.value), C = T(
      () => e.lazyUpdate && "requestIdleCallback" in globalThis ? (A) => globalThis.requestIdleCallback(A) : (A) => globalThis.requestAnimationFrame(A)
    ), x = ae(!1), se = () => {
      if (a.value) {
        const { scrollHeight: A, clientHeight: D } = a.value;
        x.set(A > D + 1);
      }
    }, S = () => {
      a.value && (i.value = parseFloat(globalThis.getComputedStyle(a.value).getPropertyValue("row-gap")) || 0);
    }, R = "onscrollend" in globalThis, j = (A) => {
      const D = A.target, P = D.clientHeight, Q = D.scrollTop, Y = Q - o.value + o.value / $.value, fe = Array.prototype.reduce.call(
        D.querySelectorAll(":scope > [data-table-row]"),
        (ne, te, pe, { length: ge }) => {
          const me = pe + n.value, De = d(te, me, pe, ge), Je = I(me, Y, P);
          return ne || De || Je;
        },
        !1
      );
      (fe || M.value.size <= k.value) && C.value(() => {
        N(Y, P);
      }), fe && C.value(() => {
        Yt(m);
      }), !R && M.value.size <= k.value && X(D, Q);
    }, re = (A) => {
      const D = A.target, P = D.scrollTop;
      M.value.size <= k.value && X(D, P);
    }, d = (A, D, P, Q) => {
      const ee = A.getBoundingClientRect(), { measured: Y } = u.value.getStatus(D), { height: fe } = u.value.getAttrs(D), ne = J.convertToSamePrecision(ee.height), te = Y && ne !== fe, pe = D > 0 && Y && h.value !== -1 && D >= h.value;
      if (!Y || te || pe) {
        if (u.value.setAttrs(D, {
          height: ne
        }), p.value.add(Math.round(ne)), D > 0) {
          const { measured: ge } = u.value.getStatus(D - 1), { bottom: me } = u.value.getAttrs(D - 1);
          u.value.setAttrs(D, {
            top: ge ? me : (g.value + i.value) * D * $.value
          });
        }
        u.value.setStatus(D, {
          measured: !0
        }), te && h.value === -1 && (h.value = D);
      }
      return h.value !== -1 && P === Q - 1 && (h.value = -1), !Y || te || pe;
    }, I = (A, D, P) => {
      const { visible: Q, measured: ee } = u.value.getStatus(A);
      if (!ee)
        return !1;
      const { top: Y, bottom: fe } = u.value.getAttrs(A);
      if (fe < D) {
        if (Q)
          return u.value.setStatus(A, { visible: !1 }), !0;
      } else if (Y > D + P) {
        if (Q)
          return u.value.setStatus(A, { visible: !1 }), !0;
      } else if (fe > D && Y < D + P) {
        if (!Q)
          return u.value.setStatus(A, { visible: !0 }), !0;
      } else if (!Q)
        return u.value.setStatus(A, { visible: !0 }), !0;
      return !1;
    }, N = (A, D) => {
      if (p.value.size > 1) {
        if (M.value.size <= v.value - k.value) {
          const P = m.value.reduce(
            ({ height: ee, index: Y }, { status: fe, attrs: ne, index: te }) => {
              const pe = fe.measured ? ne.height : g.value;
              return ee += pe + i.value, Y === 0 && ee >= A && ee < A + D ? { height: ee, index: te } : { height: ee, index: Y };
            },
            { height: 0, index: 0 }
          ).index, Q = Math.max(0, P - k.value);
          return Q !== n.value ? (he({
            cursor: n.value,
            direction: Q < n.value ? "before" : "after"
          }), n.value = Q, !0) : !1;
        }
      } else {
        const P = g.value + i.value, Q = Math.floor(A / P), ee = Math.max(0, B.value - v.value), Y = q.clamp(Q - k.value, 0, ee);
        if (Y !== n.value)
          return he({
            cursor: n.value,
            direction: Y < n.value ? "before" : "after"
          }), n.value = Y, !0;
      }
      return !1;
    }, X = (A, D = 0) => {
      rt(() => {
        D - A.scrollHeight < 10 ? A.scrollTo({ top: D - 1 }) : A.scrollTo({ top: D + 1 }), A.scrollTo({ top: D });
      });
    }, de = ({
      cursor: A,
      direction: D
    }) => {
      const P = q.clamp(
        D === "before" ? A + v.value - 1 : A,
        0,
        B.value - 1
      );
      l("request:items", {
        [D]: {
          index: P,
          key: m.value.get(P)?.key
        },
        size: v.value
      });
    }, { onTrigger: _e } = ke(j, {
      debounce: 10,
      flush: "post"
    }), { onTrigger: be } = ke(re, {
      debounce: 10,
      flush: "post"
    }), { onTrigger: he } = vl(de, {
      debounce: 1e3,
      flush: "sync",
      syncWithDebounce: !0
    });
    Ne(
      a,
      () => {
        S(), se();
      },
      {
        window
      }
    ), oe(
      [v, B],
      ([A, D]) => {
        u.value = new J({
          visibleSize: A,
          totalItems: D,
          bufferSize: e.bufferSize
        });
      },
      {
        immediate: !0
      }
    ), oe(x, (A) => l("overflowed", A), {
      immediate: !0
    });
    const Ae = oe(
      a,
      (A) => {
        A && (X(A), Ae.stop());
      },
      {
        immediate: !0,
        flush: "post"
      }
    );
    return (A, D) => (_(), b("div", {
      ref_key: "wrapperRef$",
      ref: a,
      onScrollCapture: D[1] || (D[1] = //@ts-ignore
      (...P) => c(_e) && c(_e)(...P)),
      onScrollendCapture: D[2] || (D[2] = //@ts-ignore
      (...P) => c(be) && c(be)(...P)),
      class: s([
        A.$style["table-wrapper"],
        A.$style.wrapper,
        A.$style.flex,
        A.$style.vertical,
        c(x)() && A.$style.overflowed
      ])
    }, [
      (_(!0), b(V, null, U(w.value, ([P, { item: Q, index: ee }]) => W(A.$slots, "row", {
        key: P,
        columns: e.columns,
        item: Q,
        rowIndex: ee,
        rowKey: P
      }, () => [
        O(qe, {
          "onSelect:row": D[0] || (D[0] = (Y) => l("select:row", Y)),
          columns: e.columns,
          item: Q,
          "row-index": ee,
          "row-key": P,
          "data-table-row": ""
        }, {
          default: F((Y) => [
            W(A.$slots, "cell", ie({ ref_for: !0 }, Y), () => [
              O(Be, ie({ ref_for: !0 }, Y), null, 16)
            ], !0)
          ]),
          _: 3
        }, 8, ["columns", "item", "row-index", "row-key"])
      ], !0)), 128))
    ], 34));
  }
}), su = "_wrapper_17474_1", ou = "_flex_17474_12", ru = "_horizontal_17474_48", nu = "_wrap_17474_1", iu = "_vertical_17474_60", cu = "_grid_17474_72", uu = "_overflowed_17474_108", du = {
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
  horizontal: ru,
  wrap: nu,
  vertical: iu,
  grid: cu,
  "table-wrapper": "_table-wrapper_17474_78",
  overflowed: uu
}, _u = {
  $style: du
}, ed = /* @__PURE__ */ G(au, [["__cssModules", _u], ["__scopeId", "data-v-6b293d24"]]), pu = ["textContent"], vu = ["textContent"], fu = ["textContent"], mu = ["textContent"], yu = ["id", "data-label"], hu = /* @__PURE__ */ Z({
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
  setup(r, { emit: t }) {
    Se((o) => ({
      ec453610: M.value
    }));
    const e = r, l = t, a = E(), { width: n } = Le(a), { timestamp: i, pause: p, resume: u } = Et({
      controls: !0,
      interval: 1e3,
      immediate: e.running
    }), { x: h } = Pt(a, {
      behavior: "smooth"
    }), g = T(
      () => new Ce(
        Dt(
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
    ), v = T(() => Number(e.start) || g.value.keys().next().value || 0), k = T(
      () => Number(e.end) || (e.running ? i.value : Math.max(
        ...[...g.value.values()].map(
          ({ event: o, duration: z }) => o.range.end?.getTime() ?? o.range.start.getTime() + z
        )
      ))
    ), m = T(() => Number(k.value - v.value) || 0), B = T(
      () => ((o) => o.duration === "justify" ? o.grow === "fill" && Math.abs(Number(o.basis) - m.value) <= Number(o.growThreshold ?? 0) ? m.value : Number(o.basis) : o.duration === "cover" ? m.value : Number(o.duration) || 0)(
        e
      )
    ), M = T(() => m.value / B.value * n.value), w = T(() => ({
      startTime: v.value + h.value / M.value * m.value,
      endTime: v.value + (h.value + n.value) / M.value * m.value
    })), y = () => {
      a.value?.scrollTo({
        left: M.value,
        behavior: "smooth"
      });
    }, { onTrigger: $ } = ke(
      () => {
        l("update:range", {
          start: new Date(w.value.startTime),
          end: new Date(w.value.endTime)
        }), l("update:duration", new Date(B.value));
        const o = g.value.filter(
          ({ event: z }) => !(Number(z.range.start ?? 0) <= Number(w.value.startTime ?? 0) && Number(z.range.end ?? 0) <= Number(w.value.startTime ?? 0)) && !(Number(z.range.start ?? 0) >= Number(w.value.endTime ?? 0) && Number(z.range.end ?? 0) >= Number(w.value.endTime ?? 0))
        ).map(({ event: z }) => [z.id, z]);
        l("update:focused", o), l("update:focused.array", o.toArray("values"));
      },
      e.eventSignalOptions ?? {
        flush: "post",
        debounce: 100
      }
    );
    return Kt(() => {
      e.running ? u() : p();
    }), (o, z) => (_(), K(ve, {
      class: s([o.$style["timeline-container"], o.$style.wrapper, o.$style.flex, o.$style.vertical]),
      "has-stroke": !1,
      purpose: "container",
      radius: "var(--agh-ref-border-radius-500)"
    }, {
      default: F(() => [
        f("header", {
          class: s([o.$style.wrapper, o.$style.flex, o.$style.horizontal])
        }, [
          f("h1", null, H(e.title), 1),
          f("div", {
            class: s([o.$style.wrapper, o.$style.flex, o.$style.horizontal])
          }, [
            f("p", {
              class: s([o.$style.wrapper, o.$style.flex, o.$style.vertical])
            }, [
              f("span", {
                textContent: H(c(ye)(w.value, "{{ startTime | date : yyyy/MM/dd }}")),
                "data-label": "date"
              }, null, 8, pu),
              f("span", {
                textContent: H(c(ye)(w.value, "{{ startTime | date : HH:mm:ss }}")),
                "data-label": "time"
              }, null, 8, vu)
            ], 2),
            O(c(ue), {
              class: s(o.$style.icon),
              icon: "fa6-solid:arrows-left-right"
            }, null, 8, ["class"]),
            f("p", {
              class: s([o.$style.wrapper, o.$style.flex, o.$style.vertical])
            }, [
              f("span", {
                textContent: H(c(ye)(w.value, "{{ endTime | date : yyyy/MM/dd }}")),
                "data-label": "date"
              }, null, 8, fu),
              f("span", {
                textContent: H(c(ye)(w.value, "{{ endTime | date : HH:mm:ss }}")),
                "data-label": "time"
              }, null, 8, mu)
            ], 2)
          ], 2),
          O(le, {
            onClick: z[0] || (z[0] = (C) => y()),
            class: s(o.$style.button),
            disabled: c(h) + c(n) >= M.value,
            icon: "fa6-solid:forward-step",
            level: "secondary",
            variant: "square"
          }, null, 8, ["class", "disabled"])
        ], 2),
        f("div", {
          ref_key: "wrapperRef$",
          ref: a,
          onScroll: z[1] || (z[1] = //@ts-ignore
          (...C) => c($) && c($)(...C)),
          class: s([o.$style["timeline-wrapper"], o.$style.wrapper, o.$style.flex, o.$style.horizontal])
        }, [
          f("div", {
            class: s([o.$style["timeline-axis"], o.$style.wrapper, o.$style.flex, o.$style.horizontal])
          }, null, 2),
          (_(!0), b(V, null, U(g.value, ([C, { event: x, duration: se }], S) => (_(), b("div", {
            key: `tick-${S}`,
            id: x.id,
            class: s(o.$style["timeline-tick"]),
            "data-label": `${c(ye)(x.range, "{{ start | date : yyyy/MM/dd HH:mm:ss }} - {{ end | date : yyyy/MM/dd HH:mm:ss }}")}`,
            style: pt({
              left: `${(C - v.value) / m.value * M.value}px`,
              width: `${se / m.value * M.value}px`
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
}), gu = "_wrapper_u9m49_1", $u = "_flex_u9m49_12", bu = "_horizontal_u9m49_48", wu = "_wrap_u9m49_1", ku = "_vertical_u9m49_60", Su = "_grid_u9m49_72", zu = "_icon_u9m49_101", Mu = "_button_u9m49_122", Cu = "_anchor_u9m49_152", Bu = {
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
  anchor: Cu,
  "timeline-axis": "_timeline-axis_u9m49_155",
  "timeline-tick": "_timeline-tick_u9m49_180"
}, Tu = {
  $style: Bu
}, td = /* @__PURE__ */ G(hu, [["__cssModules", Tu], ["__scopeId", "data-v-d3072355"]]);
export {
  Ku as AttackMatrix,
  Hu as BadgeBox,
  kt as BaseLink,
  Ul as BaseList,
  Ee as BasePoly,
  le as ButtonBox,
  ve as CardBox,
  Xu as CardList,
  Ju as DataTable,
  Be as DataTableCell,
  Hc as DataTableHeader,
  qe as DataTableRow,
  Zc as DataTableWrapper,
  Pu as DatetimePicker,
  Iu as DoughnutChart,
  Fu as DropDown,
  Uu as FileUploader,
  Fn as InnerShadowDeco,
  Zu as InputRange,
  ed as LargeDataTableWrapper,
  Ru as LineChart,
  xu as LoadingIcon,
  qu as MatrixChart,
  Jr as ProgressBar,
  Wu as ProgressCircle,
  Lu as RadarChart,
  ht as RoundEffect,
  ii as SearchBar,
  Xe as SelectMenu,
  Eu as StackBarChart,
  Gu as SwitchButton,
  Qu as TabGroup,
  Yu as TextArea,
  Fe as TextField,
  td as Timeline
};
//# sourceMappingURL=ui.component.es.js.map
