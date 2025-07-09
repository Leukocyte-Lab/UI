import { b as vt, a as Tt, c as Ot, g as tt, _ as yt, d as Q, u as Be, B as Ve, e as Fe, f as lt, h as J, i as jt, j as Lt, k as Pt, l as Rt, m as It } from "./ButtonBox-yfjJj-gZ.js";
import { defineComponent as Y, openBlock as d, createElementBlock as g, Fragment as O, renderSlot as X, createCommentVNode as L, renderList as H, unref as i, useCssVars as $e, createBlock as G, normalizeClass as s, withCtx as U, toDisplayString as T, createTextVNode as mt, computed as q, reactive as Et, toValue as Ye, watch as te, markRaw as rt, ref as E, createVNode as R, createElementVNode as u, pushScopeId as de, popScopeId as pe, onMounted as _e, normalizeStyle as at, mergeProps as He, mergeModels as me, useSlots as st, useModel as ue, nextTick as it, withDirectives as Je, withKeys as ye, createSlots as Ft, onUpdated as Ht, Transition as Ut, onBeforeUpdate as Zt } from "vue";
import { n as Ue, y as Wt, r as Yt, $ as Gt, f as Qt, g as ht, i as Re, a0 as Xt, R as Me, L as $t, a1 as Jt, a2 as ut, a3 as xt, Z as Kt, a4 as el, a5 as tl, k as ct, a6 as ll, V as al, a7 as sl, a8 as xe, u as ge, p as oe, a9 as Ce, aa as gt, ab as he, a as j, s as Oe, b as K, M as Ie, t as ol, S as nl, ac as Ge, e as rl } from "./uuid-D2x-G5RK.js";
import { s as il, o as ul, b as cl, f as dl, t as je, p as bt, u as kt, a as pl, v as ce, c as _l } from "./validation-eMQUbH_0.js";
import { l as re, m as dt, n as Le, o as Ke, b as Se, g as fl, t as wt, p as vl, i as yl } from "./i18n.service-BLFX03nS.js";
import { Icon as le } from "@iconify/vue/offline";
function zt(o, t) {
  return il(ul(o, t, Ue), o + "");
}
function ml(o) {
  return Wt(o) && Yt(o);
}
var hl = "Expected a function";
function $l(o, t, e) {
  if (typeof o != "function")
    throw new TypeError(hl);
  return setTimeout(function() {
    o.apply(void 0, e);
  }, t);
}
var ot = zt(function(o, t, e) {
  return $l(o, Gt(t) || 0, e);
});
function gl(o, t, e) {
  for (var a = -1, l = o == null ? 0 : o.length; ++a < l; )
    if (e(t, o[a]))
      return !0;
  return !1;
}
function bl(o, t) {
  var e = [];
  return Qt(o, function(a, l, _) {
    t(a, l, _) && e.push(a);
  }), e;
}
function kl(o, t) {
  var e = Re(o) ? Xt : bl;
  return e(o, ht(t));
}
function wl(o) {
  return o && o.length ? o[0] : void 0;
}
var zl = Math.min;
function Ml(o, t, e) {
  for (var a = e ? gl : xt, l = o[0].length, _ = o.length, h = _, p = Array(_), w = 1 / 0, b = []; h--; ) {
    var k = o[h];
    h && t && (k = Me(k, $t(t))), w = zl(k.length, w), p[h] = !e && l >= 120 && k.length >= 120 ? new Jt(h && k) : void 0;
  }
  k = o[0];
  var m = -1, z = p[0];
  e:
    for (; ++m < l && b.length < w; ) {
      var c = k[m], C = c;
      if (c = e || c !== 0 ? c : 0, !(z ? ut(z, C) : a(b, C, e))) {
        for (h = _; --h; ) {
          var M = p[h];
          if (!(M ? ut(M, C) : a(o[h], C, e)))
            continue e;
        }
        z && z.push(C), b.push(c);
      }
    }
  return b;
}
function Cl(o) {
  return ml(o) ? o : [];
}
var Sl = zt(function(o) {
  var t = Kt(o), e = Me(o, Cl);
  return t = typeof t == "function" ? t : void 0, t && e.pop(), e.length && e[0] === o[0] ? Ml(e, void 0, t) : [];
});
function Bl(o, t) {
  return o === t || el(o, t, tl(t));
}
function Vl(o) {
  return o && o.length ? vt(o, Ue, Tt) : void 0;
}
function Al(o) {
  return o && o.length ? vt(o, Ue, Ot) : void 0;
}
function Dl(o, t) {
  var e = o.length;
  for (o.sort(t); e--; )
    o[e] = o[e].value;
  return o;
}
function ql(o, t) {
  if (o !== t) {
    var e = o !== void 0, a = o === null, l = o === o, _ = ct(o), h = t !== void 0, p = t === null, w = t === t, b = ct(t);
    if (!p && !b && !_ && o > t || _ && h && w && !p && !b || a && h && w || !e && w || !l)
      return 1;
    if (!a && !_ && !b && o < t || b && e && l && !a && !_ || p && e && l || !h && l || !w)
      return -1;
  }
  return 0;
}
function Nl(o, t, e) {
  for (var a = -1, l = o.criteria, _ = t.criteria, h = l.length, p = e.length; ++a < h; ) {
    var w = ql(l[a], _[a]);
    if (w) {
      if (a >= p)
        return w;
      var b = e[a];
      return w * (b == "desc" ? -1 : 1);
    }
  }
  return o.index - t.index;
}
function Tl(o, t, e) {
  t.length ? t = Me(t, function(_) {
    return Re(_) ? function(h) {
      return al(h, _.length === 1 ? _[0] : _);
    } : _;
  }) : t = [Ue];
  var a = -1;
  t = Me(t, $t(ht));
  var l = ll(o, function(_, h, p) {
    var w = Me(t, function(b) {
      return b(_);
    });
    return { criteria: w, index: ++a, value: _ };
  });
  return Dl(l, function(_, h) {
    return Nl(_, h, e);
  });
}
function Mt(o, t, e, a) {
  return o == null ? [] : (Re(t) || (t = t == null ? [] : [t]), e = e, Re(e) || (e = e == null ? [] : [e]), Tl(o, t, e));
}
function Ol(o, t) {
  return cl(o, t, function(e, a) {
    return sl(o, a);
  });
}
var Ct = dl(function(o, t) {
  return o == null ? {} : Ol(o, t);
});
const jl = /* @__PURE__ */ Y({
  __name: "BaseList",
  props: {
    items: {},
    groupBy: {}
  },
  setup(o) {
    const t = o, e = re(
      () => xe(
        je(tt(t.items, t.groupBy ?? "")).map(([a, l]) => [
          a === "undefined" ? "" : a,
          l
        ])
      )
    );
    return (a, l) => (d(), g(O, null, [
      !t.items || t.items.length === 0 ? X(a.$slots, "placeholder", { key: 0 }) : L("", !0),
      (d(!0), g(O, null, H(i(e), (_, h) => (d(), g(O, {
        key: `list-group-${h}`
      }, [
        h ? X(a.$slots, "group", {
          key: 0,
          group: h,
          items: _
        }) : L("", !0),
        (d(!0), g(O, null, H(_, (p, w) => X(a.$slots, "default", {
          key: `list-item-${w}`,
          index: w,
          item: p
        })), 128))
      ], 64))), 128))
    ], 64));
  }
}), Ll = /* @__PURE__ */ Y({
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
  setup(o) {
    $e((e) => ({
      "701c0127": `"${t.delimiter}"`
    }));
    const t = o;
    return (e, a) => (d(), G(yt, {
      class: s([e.$style["badge-container"], e.$style[t.variant], e.$style[`color-${t.color}`]]),
      link: t.link
    }, {
      default: U(() => [
        t.label ? (d(), g("label", {
          key: 0,
          class: s([e.$style["badge-label"], e.$style.wrapper, e.$style.flex, e.$style.horizontal])
        }, [
          t.icon ? (d(), G(i(le), {
            key: 0,
            class: s(e.$style.icon),
            icon: t.icon
          }, null, 8, ["class", "icon"])) : L("", !0),
          t.delimiter && t.variant === "capsule" ? (d(!0), g(O, { key: 1 }, H(t.label.split(t.delimiter), (l, _) => (d(), g("span", { key: _ }, T(l), 1))), 128)) : (d(), g(O, { key: 2 }, [
            mt(T(t.label), 1)
          ], 64))
        ], 2)) : L("", !0),
        t.content ? (d(), g("p", {
          key: 1,
          class: s(e.$style["badge-content"])
        }, T(t.content), 3)) : L("", !0)
      ]),
      _: 1
    }, 8, ["class", "link"]));
  }
}), Pl = "_wrapper_1xahr_1", Rl = "_flex_1xahr_12", Il = "_horizontal_1xahr_48", El = "_wrap_1xahr_1", Fl = "_vertical_1xahr_60", Hl = "_grid_1xahr_72", Ul = "_tab_1xahr_94", Zl = "_capsule_1xahr_199", Wl = "_icon_1xahr_214", Yl = {
  wrapper: Pl,
  flex: Rl,
  "col-1": "_col-1_1xahr_12",
  "col-2": "_col-2_1xahr_15",
  "col-3": "_col-3_1xahr_18",
  "col-4": "_col-4_1xahr_21",
  "col-5": "_col-5_1xahr_24",
  "col-6": "_col-6_1xahr_27",
  "col-7": "_col-7_1xahr_30",
  "col-8": "_col-8_1xahr_33",
  "col-9": "_col-9_1xahr_36",
  "col-10": "_col-10_1xahr_39",
  "col-11": "_col-11_1xahr_42",
  "col-12": "_col-12_1xahr_45",
  horizontal: Il,
  wrap: El,
  vertical: Fl,
  grid: Hl,
  "badge-container": "_badge-container_1xahr_78",
  "color-default": "_color-default_1xahr_86",
  tab: Ul,
  "color-cyan": "_color-cyan_1xahr_97",
  "color-blue": "_color-blue_1xahr_114",
  "color-green": "_color-green_1xahr_131",
  "color-orange": "_color-orange_1xahr_148",
  "color-red": "_color-red_1xahr_165",
  "color-purple": "_color-purple_1xahr_182",
  capsule: Zl,
  "badge-label": "_badge-label_1xahr_206",
  "badge-content": "_badge-content_1xahr_206",
  icon: Wl
}, Gl = {
  $style: Yl
}, mc = /* @__PURE__ */ Q(Ll, [["__cssModules", Gl], ["__scopeId", "data-v-ffce24ce"]]), Ql = /* @__PURE__ */ Y({
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
  setup(o) {
    $e((_) => ({
      cc614f5a: e.value
    }));
    const t = o, e = q(
      () => t.radius ?? `var(--agh-ref-border-radius-${t.purpose === "box" ? 300 : 500})`
    ), { triggered: a, onTrigger: l } = ge((_) => {
      t.clickable || _.stopPropagation();
    });
    return (_, h) => (d(), G(yt, {
      ref: "wrapperRef$",
      onClickPassive: i(l),
      class: s([
        _.$style["card-container"],
        _.$style.behavior,
        _.$style[t.variant],
        _.$style[`color-${t.color}`],
        _.$style[`stroke-${t.strokeWeight}`],
        _.$style[`purpose-${t.purpose}`],
        {
          [_.$style.clickable]: t.link || t.clickable,
          [_.$style["has-stroke"]]: t.hasStroke,
          [_.$style.clicked]: i(a)() && t.clickable || t.active
        }
      ]),
      link: t.link
    }, {
      default: U(() => [
        X(_.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["onClickPassive", "class", "link"]));
  }
}), Xl = "_behavior_pb9oa_1", Jl = "_clickable_pb9oa_1", xl = "_disabled_pb9oa_4", Kl = "_draggable_pb9oa_7", ea = "_move_pb9oa_7", ta = "_loading_pb9oa_10", la = "_metallic_pb9oa_14", aa = "_flat_pb9oa_14", sa = "_clicked_pb9oa_22", oa = "_dash_pb9oa_105", na = "_purpose_pb9oa_477", ra = {
  behavior: Xl,
  clickable: Jl,
  disabled: xl,
  draggable: Kl,
  move: ea,
  loading: ta,
  "card-container": "_card-container_pb9oa_14",
  "color-default": "_color-default_pb9oa_14",
  metallic: la,
  "has-stroke": "_has-stroke_pb9oa_14",
  flat: aa,
  "color-cyan": "_color-cyan_pb9oa_14",
  "color-blue": "_color-blue_pb9oa_14",
  "color-green": "_color-green_pb9oa_14",
  "color-orange": "_color-orange_pb9oa_14",
  "color-red": "_color-red_pb9oa_14",
  clicked: sa,
  dash: oa,
  "purpose-box": "_purpose-box_pb9oa_477",
  "purpose-container": "_purpose-container_pb9oa_480",
  "stroke-bold": "_stroke-bold_pb9oa_483",
  purpose: na,
  "stroke-normal": "_stroke-normal_pb9oa_493",
  "stroke-thin": "_stroke-thin_pb9oa_503"
}, ia = {
  $style: ra
}, se = /* @__PURE__ */ Q(Ql, [["__cssModules", ia], ["__scopeId", "data-v-7b0dc054"]]), Ae = ({
  type: o,
  axises: t,
  data: e
}) => {
  const a = Et({
    datasets: [],
    axises: {}
  }), l = {
    datasets: q(() => a.datasets),
    axises: q(() => a.axises)
  }, _ = q(() => Ye(e) ?? []), h = q(() => Ye(t) ?? []), p = q(() => Ye(o) ?? []), w = (m) => {
    var z;
    return !Array.isArray(m) || m.length === 0 ? [] : Array.isArray(m) && ((z = m[0]) != null && z.label) ? m : [
      {
        label: "Data",
        series: m
      }
    ];
  }, b = (m, z) => z.map((c) => ({
    data: c,
    ...xe(
      je(m).filter(([, C]) => !Ce(C)).map(([C, M]) => {
        const $ = M.selector ? Oe(c, M.selector) : null, f = M.accessor ? oe(c, M.accessor) : $;
        return [
          C,
          {
            normalized: Number(
              M.type === "number" ? parseFloat(String($)) : M.type === "date" ? new Date(Number($)) : $
            ),
            value: f
          }
        ];
      })
    )
  })), k = (m, z, c) => {
    const C = w(c).map((f) => ({
      ...f,
      label: oe(f, f.label ?? ""),
      series: b(z, f.series)
    })), M = C.flatMap((f) => f.series), $ = xe(
      je(z).filter(([, f]) => !Ce(f)).map(([f, v]) => {
        const y = gt(he(M, `${f}.${v.type === "string" ? "value" : "normalized"}`)), B = Number(v.min === "auto" ? Al(y) : v.min ?? 0), V = Number(
          v.max === "auto" ? Vl(y) ?? 0 : v.max ?? y.length - (/radar|doughnut/.test(m ?? "") ? 0 : 1)
        );
        return [
          f,
          {
            ...v,
            min: B,
            max: V,
            metrics: v.type === "string" ? y.map((Z, x) => ({
              normalized: x / (V - B),
              value: Z
            })) : Array(j.clamp(j.ceil((V - B) / (v.step ?? 1)) + 1, 0, 1 / 0)).fill(0).map((Z, x) => ({
              normalized: x / j.ceil((V - B) / (v.step ?? 1)),
              value: B + (v.step ?? 1) * x
            }))
          }
        ];
      })
    );
    return $ && je($).forEach(([f, v]) => {
      v.type === "string" ? C.forEach((y) => {
        y.series.forEach((B) => {
          B[f].normalized = he(v.metrics, "value").indexOf(B[f].value) / ((v.metrics ?? []).length - (/radar|doughnut/.test(m ?? "") ? 0 : 1));
        });
      }) : C.forEach((y) => {
        y.series.forEach((B) => {
          B[f].normalized = (Number(B[f].normalized ?? 0) - Number(v.min)) / (Number(v.max) - Number(v.min));
        });
      });
    }), {
      datasets: C,
      axises: $
    };
  };
  return te([p, _, h], () => {
    const m = k(p.value, h.value, _.value);
    a.datasets = rt(m.datasets), a.axises = rt(m.axises);
  }, {
    deep: !0,
    immediate: !0
  }), {
    ...l
  };
}, ua = (o) => (de("data-v-f2c530a7"), o = o(), pe(), o), ca = ["cx", "cy", "r", "stroke-dasharray", "stroke-dashoffset"], da = ["x", "y"], pa = /* @__PURE__ */ ua(() => /* @__PURE__ */ u("hr", null, null, -1)), _a = { id: "chart-content-clip" }, fa = ["cx", "cy", "r"], va = { "clip-path": "url(#chart-content-clip)" }, ya = ["height", "width", "x", "y"], ma = /* @__PURE__ */ Y({
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
  setup(o) {
    const t = o, e = q(() => t.datasets), a = q(() => t.axises), l = E(), { width: _, height: h } = Be(l), { axises: p, datasets: w } = Ae({
      type: "doughnut",
      data: e,
      axises: a
    }), b = q(
      () => j.clamp(
        j.min(_.value - t.options.offset.x, h.value - t.options.offset.y) / 2,
        0,
        1 / 0
      )
    ), k = q(() => t.options.gap ?? (t.options.round ? 30 : 15)), m = q(() => b.value * 2 * j.PI), z = q(() => ({
      x: _.value / 2,
      y: h.value / 2
    })), c = q(
      () => w.value.map((M) => M.series.reduce(($, f) => $ + f.y.normalized, 0))
    ), C = q(
      () => w.value.map((M, $) => ({
        ...M,
        series: M.series.map((f) => ({
          ...f,
          y: {
            ...f.y,
            normalized: j.clamp(
              f.y.normalized / c.value[$] - k.value / m.value,
              0,
              1
            )
          }
        })).filter((f) => f.y.normalized > k.value / m.value / 2).map((f, v, y) => ({
          ...f,
          y: {
            ...f.y,
            normalized: f.y.normalized / y.reduce((B, V) => B + V.y.normalized, 0)
          }
        })).map((f, v, y) => ({
          ...f,
          y: {
            ...f.y,
            normalized: j.clamp(
              f.y.normalized / y.reduce((B, V) => B + V.y.normalized, 0) - k.value / m.value,
              0,
              1
            )
          }
        })).map((f, v, y) => ({
          ...f,
          y: {
            ...f.y,
            offset: y.slice(0, v).reduce((B, V) => B + V.y.normalized, 0)
          }
        })).map((f, v) => ({
          ...f,
          x: {
            ...f.x,
            label: j.cos(
              j.rad(
                (f.y.offset + f.y.normalized / 2 + k.value / m.value * v) * 360 - 90
              )
            )
          },
          y: {
            ...f.y,
            label: j.sin(
              j.rad(
                (f.y.offset + f.y.normalized / 2 + k.value / m.value * v) * 360 - 90
              )
            )
          }
        }))
      }))
    );
    return (M, $) => (d(), g("div", {
      ref_key: "wrapperRef$",
      ref: l,
      class: s(M.$style["chart-container"])
    }, [
      R(Ve, {
        height: i(h),
        width: i(_)
      }, {
        path: U(() => [
          u("g", {
            class: s([M.$style["chart-group-plots"]])
          }, [
            (d(!0), g(O, null, H(C.value, (f) => (d(), g(O, {
              key: f.label
            }, [
              (d(!0), g(O, null, H(f.series, (v, y) => (d(), g("g", {
                key: `plot-${y}`,
                class: s(M.$style["chart-area"])
              }, [
                u("circle", {
                  class: s([
                    M.$style.behavior,
                    M.$style["chart-area"],
                    M.$style.doughnut,
                    M.$style.plot,
                    M.$style.clickable,
                    {
                      [M.$style.round]: t.options.round
                    }
                  ]),
                  cx: z.value.x,
                  cy: z.value.y,
                  r: b.value,
                  "stroke-dasharray": `${v.y.normalized * m.value} ${(1 - v.y.normalized) * m.value}`,
                  "stroke-dashoffset": v.y.offset * m.value * -1 - k.value * y + 0.25 * m.value,
                  "pointer-events": "visibleStroke"
                }, null, 10, ca),
                (d(), g("foreignObject", {
                  class: s([M.$style["chart-area"], M.$style["legend-container"]]),
                  x: z.value.x + b.value * v.x.label - 260 * +(v.x.label < 0),
                  y: z.value.y + b.value * v.y.label - 240 * +(v.y.label < 0),
                  height: "240",
                  width: "260"
                }, [
                  R(se, {
                    class: s([M.$style["chart-area"], M.$style["legend-wrapper"]]),
                    radius: "var(--agh-ref-border-radius-500)"
                  }, {
                    default: U(() => [
                      t.options.title ? (d(), g(O, { key: 0 }, [
                        u("h1", {
                          class: s([M.$style["chart-area"], M.$style["legend-title"], M.$style.doughnut])
                        }, [
                          u("span", null, T(v.x.value), 1)
                        ], 2),
                        pa
                      ], 64)) : L("", !0),
                      (d(!0), g(O, null, H(i(p), (B, V) => (d(), g(O, { key: V }, [
                        !/(x)/.test(V) && B && v[V] ? (d(), g("div", {
                          key: 0,
                          class: s([
                            M.$style["chart-area"],
                            M.$style["legend-group"],
                            M.$style.doughnut
                          ])
                        }, [
                          u("label", {
                            class: s([M.$style["chart-area"], M.$style["legend-label"]])
                          }, T(B.label), 3),
                          u("p", {
                            class: s([M.$style["chart-area"], M.$style["legend-value"]])
                          }, T(v[V].value), 3)
                        ], 2)) : L("", !0)
                      ], 64))), 128))
                    ]),
                    _: 2
                  }, 1032, ["class"])
                ], 10, da))
              ], 2))), 128))
            ], 64))), 128))
          ], 2),
          u("clipPath", _a, [
            u("circle", {
              cx: z.value.x,
              cy: z.value.y,
              r: b.value - 10
            }, null, 8, fa)
          ]),
          u("g", va, [
            (d(), g("foreignObject", {
              class: s(M.$style["chart-content-wrapper"]),
              height: b.value * 2,
              width: b.value * 2,
              x: z.value.x - b.value,
              y: z.value.y - b.value
            }, [
              X(M.$slots, "default", {}, void 0, !0)
            ], 10, ya))
          ])
        ]),
        _: 3
      }, 8, ["height", "width"])
    ], 2));
  }
}), ha = "_behavior_1kum8_1", $a = "_clickable_1kum8_1", ga = "_disabled_1kum8_4", ba = "_draggable_1kum8_7", ka = "_move_1kum8_7", wa = "_loading_1kum8_10", za = "_path_1kum8_24", Ma = "_radar_1kum8_29", Ca = "_label_1kum8_32", Sa = "_plot_1kum8_133", Ba = "_point_1kum8_133", Va = "_doughnut_1kum8_144", Aa = "_bg_1kum8_150", Da = "_round_1kum8_154", qa = "_line_1kum8_167", Na = {
  behavior: ha,
  clickable: $a,
  disabled: ga,
  draggable: ba,
  move: ka,
  loading: wa,
  "chart-container": "_chart-container_1kum8_14",
  "chart-axis": "_chart-axis_1kum8_24",
  path: za,
  radar: Ma,
  label: Ca,
  "font-align--center": "_font-align--center_1kum8_45",
  "font-align--right": "_font-align--right_1kum8_48",
  "font-align--left": "_font-align--left_1kum8_51",
  "box-align--center": "_box-align--center_1kum8_54",
  "box-align--left": "_box-align--left_1kum8_57",
  "box-align--right": "_box-align--right_1kum8_60",
  "chart-group-plots": "_chart-group-plots_1kum8_67",
  "chart-area": "_chart-area_1kum8_67",
  plot: Sa,
  point: Ba,
  doughnut: Va,
  "legend-container": "_legend-container_1kum8_144",
  bg: Aa,
  round: Da,
  line: qa,
  "legend-wrapper": "_legend-wrapper_1kum8_195",
  "legend-group": "_legend-group_1kum8_206",
  "legend-value": "_legend-value_1kum8_214",
  "legend-label": "_legend-label_1kum8_217",
  "legend-title": "_legend-title_1kum8_221"
}, Ta = {
  $style: Na
}, hc = /* @__PURE__ */ Q(ma, [["__cssModules", Ta], ["__scopeId", "data-v-f2c530a7"]]), Oa = (o) => (de("data-v-c26fb994"), o = o(), pe(), o), ja = ["d"], La = ["text-anchor", "x", "y"], Pa = ["dy", "x"], Ra = ["x", "y"], Ia = ["dy", "x"], Ea = { key: 1 }, Fa = ["d"], Ha = ["cx", "cy"], Ua = ["cx", "cy"], Za = ["x", "y"], Wa = /* @__PURE__ */ Oa(() => /* @__PURE__ */ u("hr", null, null, -1)), Ya = /* @__PURE__ */ Y({
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
  setup(o) {
    const t = o, e = q(() => t.datasets), a = q(() => t.axises), l = E(), { width: _, height: h } = Be(l), { axises: p, datasets: w } = Ae({
      type: "line",
      data: e,
      axises: a
    }), b = q(
      () => {
        var m, z, c, C, M, $;
        return (z = (m = p.value) == null ? void 0 : m.x) != null && z.metrics && ((C = (c = p.value) == null ? void 0 : c.y) != null && C.metrics) && h.value && h.value - t.options.offset.y > 0 && _.value && _.value - t.options.offset.x > 0 ? `
  M ${t.options.offset.x} 0
  L ${t.options.offset.x} ${h.value - t.options.offset.y}
  L ${_.value} ${h.value - t.options.offset.y}
  ${(M = t.options.grid) != null && M.includes("x") ? `${p.value.x.metrics.map(
          (f) => `
              M ${f.normalized * (_.value - t.options.offset.x) + t.options.offset.x} 0
              V ${h.value - t.options.offset.y}
            `
        ).join("")}` : ""}
  ${($ = t.options.grid) != null && $.includes("y") ? `${p.value.y.metrics.map(
          (f) => `
              M ${t.options.offset.x} ${(1 - f.normalized) * (h.value - t.options.offset.y)}
              H ${_.value}
            `
        ).join(`
`)}` : ""}
` : "";
      }
    ), k = q(
      () => b.value && w ? w.value.map((m) => ({
        ...m,
        path: `
            ${m.series.map(
          (z, c) => c === 0 ? `M ${z.x.normalized * (_.value - t.options.offset.x) + t.options.offset.x} ${(1 - z.y.normalized) * (h.value - t.options.offset.y)}` : t.options.curve === "smooth" ? c === 1 ? `C ${m.series[c - 1].x.normalized * (_.value - t.options.offset.x) + t.options.offset.x + _.value / m.series.length * t.options.radius} ${(1 - m.series[c - 1].y.normalized) * (h.value - t.options.offset.y)} ${z.x.normalized * (_.value - t.options.offset.x) + t.options.offset.x - _.value / m.series.length * t.options.radius} ${(1 - z.y.normalized) * (h.value - t.options.offset.y)} ${z.x.normalized * (_.value - t.options.offset.x) + t.options.offset.x} ${(1 - z.y.normalized) * (h.value - t.options.offset.y)}` : `S ${z.x.normalized * (_.value - t.options.offset.x) + t.options.offset.x - _.value / m.series.length * t.options.radius} ${(1 - z.y.normalized) * (h.value - t.options.offset.y)} ${z.x.normalized * (_.value - t.options.offset.x) + t.options.offset.x} ${(1 - z.y.normalized) * (h.value - t.options.offset.y)}` : `L ${z.x.normalized * (_.value - t.options.offset.x) + t.options.offset.x} ${(1 - z.y.normalized) * (h.value - t.options.offset.y)}`
        ).join(`
`)}`
      })) : []
    );
    return (m, z) => (d(), g("div", {
      ref_key: "wrapperRef$",
      ref: l,
      class: s(m.$style["chart-container"])
    }, [
      R(Ve, {
        height: i(h),
        width: i(_)
      }, {
        defs: U(() => []),
        path: U(() => [
          u("g", {
            id: "chart-group-axises",
            class: s([m.$style["chart-group-axises"]])
          }, [
            u("path", {
              class: s([m.$style["chart-axis"], m.$style.line, m.$style.path]),
              d: b.value
            }, null, 10, ja)
          ], 2),
          i(p) && i(_) && i(h) ? (d(), g("g", {
            key: 0,
            class: s([m.$style["chart-group-axises-label"]])
          }, [
            i(p).x && i(p).x.metrics ? (d(!0), g(O, { key: 0 }, H(i(p).x.metrics, (c, C) => (d(), g("text", {
              key: `axis-x--${C}`,
              class: s([m.$style["chart-axis"], m.$style.label]),
              "text-anchor": C === 0 ? "start" : C === i(p).x.metrics.length - 1 ? "end" : "middle",
              x: c.normalized * (i(_) - t.options.offset.x) + t.options.offset.x,
              y: i(h) - t.options.offset.y + 20
            }, [
              (d(!0), g(O, null, H((c.value ?? "").toString().split(`
`), (M, $) => (d(), g("tspan", {
                key: $,
                dy: `${$ * 1.2}em`,
                x: c.normalized * (i(_) - t.options.offset.x) + t.options.offset.x
              }, T(M), 9, Pa))), 128))
            ], 10, La))), 128)) : L("", !0),
            i(p).y && i(p).y.metrics ? (d(!0), g(O, { key: 1 }, H(i(p).y.metrics, (c, C) => (d(), g("text", {
              key: `axis-y--${C}`,
              class: s([m.$style["chart-axis"], m.$style.label]),
              x: t.options.offset.x - 10,
              y: (1 - c.normalized) * (i(h) - t.options.offset.y) + 5,
              "text-anchor": "end"
            }, [
              (d(!0), g(O, null, H([(c.value ?? "").toString().split(`
`)], (M, $) => (d(), g(O, {
                key: `group-${$}`
              }, [
                M.length > 1 ? (d(!0), g(O, { key: 0 }, H(M, (f, v) => (d(), g("tspan", {
                  key: v,
                  dy: `${v * 0.5 - 0.5}em`,
                  x: t.options.offset.x - 10
                }, T(f), 9, Ia))), 128)) : (d(), g("tspan", Ea, T(c.value), 1))
              ], 64))), 128))
            ], 10, Ra))), 128)) : L("", !0)
          ], 2)) : L("", !0),
          u("g", {
            class: s([m.$style["chart-group-plots"]])
          }, [
            (d(!0), g(O, null, H(k.value, (c) => (d(), g("g", {
              key: c.label,
              class: s([m.$style["chart-area"], m.$style.line, m.$style.plot])
            }, [
              u("path", {
                d: c.path
              }, null, 8, Fa)
            ], 2))), 128)),
            (d(!0), g(O, null, H(i(w), (c) => (d(), g(O, null, [
              (d(!0), g(O, null, H(c.series, (C, M) => (d(), g("g", {
                key: `chart-plot-${c.label}-plot-${M}`,
                class: s(m.$style["chart-area"])
              }, [
                u("circle", {
                  class: s([
                    m.$style.behavior,
                    m.$style["chart-area"],
                    m.$style.point,
                    m.$style.plot,
                    m.$style.clickable
                  ]),
                  cx: C.x.normalized * (i(_) - t.options.offset.x) + t.options.offset.x,
                  cy: (1 - C.y.normalized) * (i(h) - t.options.offset.y),
                  r: "50"
                }, null, 10, Ha),
                u("circle", {
                  class: s([m.$style["chart-area"], m.$style.point, m.$style.plot]),
                  cx: C.x.normalized * (i(_) - t.options.offset.x) + t.options.offset.x,
                  cy: (1 - C.y.normalized) * (i(h) - t.options.offset.y),
                  r: "5"
                }, null, 10, Ua),
                (d(), g("foreignObject", {
                  class: s([m.$style["chart-area"], m.$style["legend-container"]]),
                  x: C.x.normalized * (i(_) - t.options.offset.x) + t.options.offset.x + (M === 0 ? 0 : M === c.series.length - 1 ? -280 : -140),
                  y: (1 - C.y.normalized) * (i(h) - t.options.offset.y) - (C.y.normalized > 0.5 ? 0 : C.y.normalized < 0.5 ? 220 : 110),
                  height: "220",
                  width: "280"
                }, [
                  R(se, {
                    class: s([m.$style["chart-area"], m.$style["legend-wrapper"]]),
                    radius: "var(--agh-ref-border-radius-500)"
                  }, {
                    default: U(() => [
                      t.options.title ? (d(), g(O, { key: 0 }, [
                        u("h1", {
                          class: s([m.$style["chart-area"], m.$style["legend-title"]])
                        }, T(i(oe)(C.data, t.options.title)), 3),
                        Wa
                      ], 64)) : L("", !0),
                      (d(!0), g(O, null, H(i(p), ($, f) => (d(), g(O, { key: f }, [
                        $ && C[f] ? (d(), g("div", {
                          key: 0,
                          class: s([m.$style["chart-area"], m.$style["legend-group"]])
                        }, [
                          u("label", {
                            class: s([m.$style["chart-area"], m.$style["legend-label"]])
                          }, T($.label), 3),
                          u("p", {
                            class: s([m.$style["chart-area"], m.$style["legend-value"]])
                          }, T(C[f].value), 3)
                        ], 2)) : L("", !0)
                      ], 64))), 128))
                    ]),
                    _: 2
                  }, 1032, ["class"])
                ], 10, Za))
              ], 2))), 128))
            ], 64))), 256))
          ], 2)
        ]),
        _: 1
      }, 8, ["height", "width"])
    ], 2));
  }
}), Ga = "_behavior_dkrzv_1", Qa = "_clickable_dkrzv_1", Xa = "_disabled_dkrzv_4", Ja = "_draggable_dkrzv_7", xa = "_move_dkrzv_7", Ka = "_loading_dkrzv_10", es = "_path_dkrzv_24", ts = "_radar_dkrzv_29", ls = "_label_dkrzv_32", as = "_plot_dkrzv_133", ss = "_point_dkrzv_133", os = "_doughnut_dkrzv_144", ns = "_bg_dkrzv_150", rs = "_round_dkrzv_154", is = "_line_dkrzv_167", us = {
  behavior: Ga,
  clickable: Qa,
  disabled: Xa,
  draggable: Ja,
  move: xa,
  loading: Ka,
  "chart-container": "_chart-container_dkrzv_14",
  "chart-axis": "_chart-axis_dkrzv_24",
  path: es,
  radar: ts,
  label: ls,
  "font-align--center": "_font-align--center_dkrzv_45",
  "font-align--right": "_font-align--right_dkrzv_48",
  "font-align--left": "_font-align--left_dkrzv_51",
  "box-align--center": "_box-align--center_dkrzv_54",
  "box-align--left": "_box-align--left_dkrzv_57",
  "box-align--right": "_box-align--right_dkrzv_60",
  "chart-group-plots": "_chart-group-plots_dkrzv_67",
  "chart-area": "_chart-area_dkrzv_67",
  plot: as,
  point: ss,
  doughnut: os,
  "legend-container": "_legend-container_dkrzv_144",
  bg: ns,
  round: rs,
  line: is,
  "legend-wrapper": "_legend-wrapper_dkrzv_195",
  "legend-group": "_legend-group_dkrzv_206",
  "legend-value": "_legend-value_dkrzv_214",
  "legend-label": "_legend-label_dkrzv_217",
  "legend-title": "_legend-title_dkrzv_221"
}, cs = {
  $style: us
}, $c = /* @__PURE__ */ Q(Ya, [["__cssModules", cs], ["__scopeId", "data-v-c26fb994"]]), ds = /* @__PURE__ */ Y({
  __name: "MatrixChart",
  props: {
    axises: {},
    datasets: {},
    options: {}
  },
  setup(o) {
    const t = o, e = q(() => t.datasets), a = q(() => t.axises), { axises: l, datasets: _ } = Ae({
      type: "matrix",
      data: e,
      axises: a
    }), h = q(() => l.value.y.step), p = q(
      () => _.value[0].series.map((c) => ({
        ...c,
        y: {
          ...c.y,
          normalized: j.round(c.y.normalized * h.value)
        }
      }))
    ), w = E(), b = E(), k = K(""), m = () => {
      if (w.value && w.value.firstElementChild) {
        const { firstElementChild: c, clientWidth: C } = w.value, M = C, $ = c == null ? void 0 : c.clientWidth;
        b.value = j.floor(M / $);
      }
    }, z = () => {
      w.value && (k.set(
        lt("--matrix-border-width", w, {
          observe: !0
        }).value
      ), k() || ot(z, 1));
    };
    return Fe(w, m, { window }), _e(() => {
      z(), m();
    }), (c, C) => (d(), g("div", {
      ref_key: "containerRef$",
      ref: w,
      class: s(c.$style["chart-container"])
    }, [
      (d(!0), g(O, null, H(p.value, (M, $) => (d(), g("div", {
        key: $,
        class: s([
          c.$style["matrix-container"],
          b.value && $ % b.value !== 0 && c.$style["matrix-container-border"]
        ])
      }, [
        u("label", {
          class: s(c.$style.label)
        }, T(M.x.value), 3),
        u("div", {
          class: s(c.$style["box-container"])
        }, [
          (d(!0), g(O, null, H(h.value, (f) => (d(), g("div", {
            key: f,
            class: s([
              c.$style.square,
              f <= M.y.normalized ? c.$style["square-cyan"] : c.$style["square-grayscale"]
            ])
          }, null, 2))), 128))
        ], 2)
      ], 2))), 128))
    ], 2));
  }
}), ps = "_behavior_18t2d_1", _s = "_clickable_18t2d_1", fs = "_disabled_18t2d_4", vs = "_draggable_18t2d_7", ys = "_move_18t2d_7", ms = "_loading_18t2d_10", hs = "_path_18t2d_24", $s = "_radar_18t2d_29", gs = "_label_18t2d_32", bs = "_plot_18t2d_133", ks = "_point_18t2d_133", ws = "_doughnut_18t2d_144", zs = "_bg_18t2d_150", Ms = "_round_18t2d_154", Cs = "_line_18t2d_167", Ss = "_square_18t2d_290", Bs = {
  behavior: ps,
  clickable: _s,
  disabled: fs,
  draggable: vs,
  move: ys,
  loading: ms,
  "chart-container": "_chart-container_18t2d_14",
  "chart-axis": "_chart-axis_18t2d_24",
  path: hs,
  radar: $s,
  label: gs,
  "font-align--center": "_font-align--center_18t2d_45",
  "font-align--right": "_font-align--right_18t2d_48",
  "font-align--left": "_font-align--left_18t2d_51",
  "box-align--center": "_box-align--center_18t2d_54",
  "box-align--left": "_box-align--left_18t2d_57",
  "box-align--right": "_box-align--right_18t2d_60",
  "chart-group-plots": "_chart-group-plots_18t2d_67",
  "chart-area": "_chart-area_18t2d_67",
  plot: bs,
  point: ks,
  doughnut: ws,
  "legend-container": "_legend-container_18t2d_144",
  bg: zs,
  round: Ms,
  line: Cs,
  "legend-wrapper": "_legend-wrapper_18t2d_195",
  "legend-group": "_legend-group_18t2d_206",
  "legend-value": "_legend-value_18t2d_214",
  "legend-label": "_legend-label_18t2d_217",
  "legend-title": "_legend-title_18t2d_221",
  "matrix-container": "_matrix-container_18t2d_268",
  "matrix-container-border": "_matrix-container-border_18t2d_276",
  "box-container": "_box-container_18t2d_286",
  square: Ss,
  "square-cyan": "_square-cyan_18t2d_295",
  "square-grayscale": "_square-grayscale_18t2d_298"
}, Vs = {
  $style: Bs
}, gc = /* @__PURE__ */ Q(ds, [["__cssModules", Vs], ["__scopeId", "data-v-d24c269d"]]), As = ["id"], Ds = ["stdDeviation"], qs = /* @__PURE__ */ u("feColorMatrix", {
  in: "blur",
  mode: "matrix",
  result: "mask",
  values: "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10"
}, null, -1), Ns = /* @__PURE__ */ u("feComposite", {
  in: "SourceGraphic",
  in2: "mask",
  operator: "in"
}, null, -1), pt = /* @__PURE__ */ Y({
  __name: "RoundEffect",
  props: {
    id: {},
    radius: {}
  },
  setup(o) {
    const t = o;
    return (e, a) => (d(), g("filter", {
      id: t.id
    }, [
      u("feGaussianBlur", {
        stdDeviation: t.radius,
        in: "SourceGraphic",
        result: "blur"
      }, null, 8, Ds),
      qs,
      Ns
    ], 8, As));
  }
}), Ts = (o) => (de("data-v-bfc3c4dd"), o = o(), pe(), o), Os = ["innerHTML"], js = { id: "chart-area-bg-mask" }, Ls = ["d"], Ps = ["d"], Rs = ["d"], Is = ["height", "width", "x", "y"], Es = ["d"], Fs = ["cx", "cy"], Hs = ["cx", "cy"], Us = ["x", "y"], Zs = /* @__PURE__ */ Ts(() => /* @__PURE__ */ u("hr", null, null, -1)), Ws = /* @__PURE__ */ Y({
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
  setup(o) {
    const t = o, e = E(), { width: a, height: l } = Be(e), _ = q(() => t.datasets), h = q(() => t.axises), { axises: p, datasets: w } = Ae({
      type: "radar",
      data: _,
      axises: h
    }), b = q(
      () => j.clamp(
        j.min(a.value - t.options.offset.x, l.value - t.options.offset.y) / 2,
        0,
        1 / 0
      )
    ), k = q(() => ({
      x: a.value / 2,
      y: l.value / 2
    })), m = q(
      () => {
        var $, f;
        return b.value > 0 && ((f = ($ = p.value) == null ? void 0 : $.x) != null && f.metrics) ? `
      ${p.value.x.metrics.map(
          (v, y) => `${y === 0 ? "M" : "L"} ${k.value.x + b.value * j.cos(j.rad(v.normalized * 360 - 90))} ${k.value.y + b.value * j.sin(j.rad(v.normalized * 360 - 90))}`
        ).join(" ")} Z
      ` : "";
      }
    ), z = q(
      () => m.value && w.value ? w.value.map(($) => ({
        ...$,
        path: `${$.series.map(
          (f, v) => `${v === 0 ? "M" : "L"} ${k.value.x + b.value * (0.1 + 0.8 * f.y.normalized) * j.cos(j.rad(f.x.normalized * 360 - 90))} ${k.value.y + b.value * (0.1 + 0.8 * f.y.normalized) * j.sin(j.rad(f.x.normalized * 360 - 90))}`
        ).join(" ")} Z`
      })) : []
    ), c = q(
      () => b.value > 0 && p.value.x.metrics ? `M ${k.value.x} ${k.value.y}
      ${p.value.x.metrics.map(
        ($) => `L ${k.value.x + b.value * j.cos(j.rad($.normalized * 360 - 90))} ${k.value.y + b.value * j.sin(j.rad($.normalized * 360 - 90))}
            M ${k.value.x} ${k.value.y}`
      ).join(`
`)}
      Z` : ""
    ), C = K(""), M = () => {
      e.value && (C.set(
        lt("--chart-bg-fill-svg", e, {
          observe: !0
        }).value
      ), C() || ot(M, 1));
    };
    return _e(() => {
      M();
    }), ($, f) => (d(), g("div", {
      ref_key: "wrapperRef$",
      ref: e,
      class: s($.$style["chart-container"])
    }, [
      R(Ve, {
        height: i(l),
        width: i(a)
      }, {
        defs: U(() => [
          R(pt, {
            id: "chart-area-bg-round",
            radius: 6
          }),
          R(pt, {
            id: "chart-area-plot-round",
            radius: 3
          }),
          u("g", {
            innerHTML: i(C)()
          }, null, 8, Os),
          u("mask", js, [
            u("path", {
              class: s([
                $.$style["chart-area"],
                $.$style.radar,
                $.$style.bg,
                {
                  [$.$style.round]: t.options.round
                }
              ]),
              d: m.value,
              fill: "#fff"
            }, null, 10, Ls)
          ])
        ]),
        path: U(() => [
          u("path", {
            class: s([
              $.$style["chart-area"],
              $.$style.radar,
              $.$style.bg,
              {
                [$.$style.round]: t.options.round
              }
            ]),
            d: m.value
          }, null, 10, Ps),
          u("g", {
            id: "chart-group-axises",
            class: s([$.$style["chart-group-axises"]]),
            mask: "url(#chart-area-bg-mask)"
          }, [
            u("path", {
              class: s([$.$style["chart-axis"], $.$style.radar, $.$style.path]),
              d: c.value
            }, null, 10, Rs)
          ], 2),
          i(p) ? (d(), g("g", {
            key: 0,
            class: s([$.$style["chart-group-axises-label"]])
          }, [
            (d(!0), g(O, null, H(i(p).x.metrics, (v) => (d(), g("foreignObject", {
              key: v.value,
              class: s([$.$style["chart-axis"], $.$style.radar, $.$style["label-wrapper"]]),
              height: b.value / 3,
              width: b.value,
              x: k.value.x + b.value * i(j).cos(i(j).rad(v.normalized * 360 - 90)) - (v.normalized % 0.5 === 0 ? b.value / 2 : v.normalized > 0.5 ? b.value : 0),
              y: k.value.y + b.value * 1.1 * i(j).sin(i(j).rad(v.normalized * 360 - 90)) - b.value / 6
            }, [
              u("p", {
                class: s([[
                  $.$style["chart-axis"],
                  $.$style.radar,
                  $.$style.label,
                  v.normalized % 0.5 === 0 ? $.$style["font-align--center"] : v.normalized < 0.5 ? $.$style["font-align--left"] : $.$style["font-align--right"],
                  v.normalized % 0.5 === 0 ? $.$style["box-align--center"] : v.normalized < 0.5 ? $.$style["box-align--left"] : $.$style["box-align--right"]
                ], "font-bold"])
              }, T(v.value), 3)
            ], 10, Is))), 128))
          ], 2)) : L("", !0),
          u("g", {
            class: s([$.$style["chart-group-plots"]])
          }, [
            (d(!0), g(O, null, H(z.value, (v) => (d(), g("g", {
              key: v.label,
              class: s([$.$style["chart-area"], $.$style.radar, $.$style.plot])
            }, [
              u("path", {
                class: s([
                  {
                    [$.$style.round]: t.options.round
                  }
                ]),
                d: v.path
              }, null, 10, Es)
            ], 2))), 128))
          ], 2),
          (d(!0), g(O, null, H(i(w), (v) => (d(), g("g", {
            key: v.label,
            class: s([$.$style["chart-area-label"]])
          }, [
            (d(!0), g(O, null, H(v.series, (y, B) => (d(), g("g", {
              key: `plot-${B}`,
              class: s($.$style["chart-area"])
            }, [
              u("circle", {
                class: s([
                  $.$style.behavior,
                  $.$style["chart-area"],
                  $.$style.point,
                  $.$style.plot,
                  $.$style.clickable
                ]),
                cx: k.value.x + b.value * (0.1 + 0.8 * y.y.normalized) * i(j).cos(i(j).rad(y.x.normalized * 360 - 90)),
                cy: k.value.y + b.value * (0.1 + 0.8 * y.y.normalized) * i(j).sin(i(j).rad(y.x.normalized * 360 - 90)),
                r: "10"
              }, null, 10, Fs),
              u("circle", {
                class: s([$.$style["chart-area"], $.$style.radar, $.$style.point, $.$style.plot]),
                cx: k.value.x + b.value * (0.1 + 0.8 * y.y.normalized) * i(j).cos(i(j).rad(y.x.normalized * 360 - 90)),
                cy: k.value.y + b.value * (0.1 + 0.8 * y.y.normalized) * i(j).sin(i(j).rad(y.x.normalized * 360 - 90)),
                r: "5"
              }, null, 10, Hs),
              (d(), g("foreignObject", {
                class: s([$.$style["chart-area"], $.$style["legend-container"]]),
                x: k.value.x + b.value * (0.1 + 0.8 * y.y.normalized) * i(j).cos(i(j).rad(y.x.normalized * 360 - 90)) - 130,
                y: k.value.y + b.value * (0.1 + 0.8 * y.y.normalized) * i(j).sin(i(j).rad(y.x.normalized * 360 - 90)),
                height: "200",
                width: "260"
              }, [
                R(se, {
                  class: s([$.$style["chart-area"], $.$style["legend-wrapper"]]),
                  radius: "var(--agh-ref-border-radius-500)"
                }, {
                  default: U(() => [
                    t.options.title ? (d(), g(O, { key: 0 }, [
                      u("h1", {
                        class: s([$.$style["chart-area"], $.$style["legend-title"], $.$style.radar])
                      }, [
                        u("span", null, T(y.x.value), 1),
                        u("span", {
                          class: s($.$style["legend-value"])
                        }, T(y.y.value), 3)
                      ], 2),
                      Zs
                    ], 64)) : L("", !0),
                    (d(!0), g(O, null, H(i(p), (V, Z) => (d(), g(O, { key: Z }, [
                      !/(x|y)/.test(Z) && V && y[Z] ? (d(), g("div", {
                        key: 0,
                        class: s([$.$style["chart-area"], $.$style["legend-group"], $.$style.radar])
                      }, [
                        u("p", {
                          class: s([$.$style["chart-area"], $.$style["legend-value"]])
                        }, T(y[Z].value), 3),
                        u("label", {
                          class: s([$.$style["chart-area"], $.$style["legend-label"]])
                        }, T(V.label), 3)
                      ], 2)) : L("", !0)
                    ], 64))), 128))
                  ]),
                  _: 2
                }, 1032, ["class"])
              ], 10, Us))
            ], 2))), 128))
          ], 2))), 128))
        ]),
        _: 1
      }, 8, ["height", "width"])
    ], 2));
  }
}), Ys = "_behavior_tk25i_1", Gs = "_clickable_tk25i_1", Qs = "_disabled_tk25i_4", Xs = "_draggable_tk25i_7", Js = "_move_tk25i_7", xs = "_loading_tk25i_10", Ks = "_path_tk25i_24", eo = "_radar_tk25i_29", to = "_label_tk25i_32", lo = "_plot_tk25i_133", ao = "_point_tk25i_133", so = "_doughnut_tk25i_144", oo = "_bg_tk25i_150", no = "_round_tk25i_154", ro = "_line_tk25i_167", io = {
  behavior: Ys,
  clickable: Gs,
  disabled: Qs,
  draggable: Xs,
  move: Js,
  loading: xs,
  "chart-container": "_chart-container_tk25i_14",
  "chart-axis": "_chart-axis_tk25i_24",
  path: Ks,
  radar: eo,
  label: to,
  "font-align--center": "_font-align--center_tk25i_45",
  "font-align--right": "_font-align--right_tk25i_48",
  "font-align--left": "_font-align--left_tk25i_51",
  "box-align--center": "_box-align--center_tk25i_54",
  "box-align--left": "_box-align--left_tk25i_57",
  "box-align--right": "_box-align--right_tk25i_60",
  "chart-group-plots": "_chart-group-plots_tk25i_67",
  "chart-area": "_chart-area_tk25i_67",
  plot: lo,
  point: ao,
  doughnut: so,
  "legend-container": "_legend-container_tk25i_144",
  bg: oo,
  round: no,
  line: ro,
  "legend-wrapper": "_legend-wrapper_tk25i_195",
  "legend-group": "_legend-group_tk25i_206",
  "legend-value": "_legend-value_tk25i_214",
  "legend-label": "_legend-label_tk25i_217",
  "legend-title": "_legend-title_tk25i_221"
}, uo = {
  $style: io
}, bc = /* @__PURE__ */ Q(Ws, [["__cssModules", uo], ["__scopeId", "data-v-bfc3c4dd"]]), co = (o) => (de("data-v-1598efc3"), o = o(), pe(), o), po = /* @__PURE__ */ co(() => /* @__PURE__ */ u("hr", null, null, -1)), _o = /* @__PURE__ */ Y({
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
  setup(o) {
    $e((p) => ({
      "47fba568": l.value
    }));
    const t = o, e = q(() => t.datasets), a = q(() => t.axises), l = q(
      () => t.options.gap ? `${t.options.gap}px` : "var(--agh-ref-spacing-25)"
    ), { datasets: _ } = Ae({
      type: "doughnut",
      data: e,
      axises: a
    }), h = q(
      () => {
        var p;
        return [...((p = _.value[0]) == null ? void 0 : p.series) ?? []].sort((w, b) => b.y.normalized - w.y.normalized);
      }
    );
    return (p, w) => {
      var b;
      return d(), g("div", {
        class: s([p.$style["chart-container"], p.$style.wrapper, p.$style.flex, p.$style.vertical])
      }, [
        u("div", {
          class: s([p.$style["chart-instance"], p.$style.wrapper, p.$style.flex, p.$style.horizontal])
        }, [
          (d(!0), g(O, null, H(h.value, (k, m) => (d(), g("div", {
            key: `plot-${m}`,
            class: s([p.$style["chart-plot"], p.$style.behavior, p.$style.clickable]),
            style: at({
              "--plot-value": k.y.normalized,
              "--anchor-name": `--plot-anchor-${m}`
            })
          }, [
            R(se, {
              class: s([p.$style["chart-plot-tooltip"], p.$style.wrapper, p.$style.flex, p.$style.vertical]),
              purpose: "box",
              radius: "var(--agh-ref-border-radius-400)"
            }, {
              default: U(() => [
                u("h1", {
                  class: s([p.$style.wrapper, p.$style.flex, p.$style.horizontal])
                }, [
                  u("span", null, T(k.x.value), 1),
                  u("span", null, T(String(k.y.value).padStart(3, "0")), 1)
                ], 2),
                po,
                u("ul", {
                  class: s([p.$style.wrapper, p.$style.flex, p.$style.vertical])
                }, [
                  (d(!0), g(O, null, H(p.axises, (z, c) => (d(), g(O, { key: c }, [
                    z && k[c] && !["x", "y"].includes(c) ? (d(), g("li", {
                      key: 0,
                      class: s([p.$style.wrapper, p.$style.flex, p.$style.horizontal])
                    }, [
                      u("p", {
                        class: s([p.$style["chart-area"], p.$style["legend-value"]])
                      }, T(String(k[c].value).split("/").map((C) => C.padStart(2, "0")).join("/")), 3),
                      u("label", {
                        class: s([p.$style["chart-area"], p.$style["legend-label"]])
                      }, T(z.label), 3)
                    ], 2)) : L("", !0)
                  ], 64))), 128))
                ], 2)
              ]),
              _: 2
            }, 1032, ["class"])
          ], 6))), 128))
        ], 2),
        u("div", {
          class: s([
            p.$style["chart-legend-wrapper"],
            p.$style.wrapper,
            p.$style.flex,
            p.$style.horizontal,
            p.$style.wrap
          ])
        }, [
          (d(!0), g(O, null, H((b = i(_)[0]) == null ? void 0 : b.series, (k, m) => (d(), g("label", {
            key: `plot-${m}`,
            class: s([p.$style["chart-legend"], p.$style.wrapper, p.$style.flex, p.$style.horizontal])
          }, [
            R(i(le), {
              class: s(p.$style.icon),
              icon: "fa6-solid:square"
            }, null, 8, ["class"]),
            u("span", null, T(k.x.value), 1),
            u("span", null, T(String(k.y.value).padStart(3, "0")), 1)
          ], 2))), 128))
        ], 2)
      ], 2);
    };
  }
}), fo = "_behavior_1wzjg_1", vo = "_clickable_1wzjg_1", yo = "_disabled_1wzjg_4", mo = "_draggable_1wzjg_7", ho = "_move_1wzjg_7", $o = "_loading_1wzjg_10", go = "_wrapper_1wzjg_14", bo = "_flex_1wzjg_25", ko = "_horizontal_1wzjg_61", wo = "_wrap_1wzjg_14", zo = "_vertical_1wzjg_73", Mo = "_grid_1wzjg_85", Co = "_icon_1wzjg_267", So = {
  behavior: fo,
  clickable: vo,
  disabled: yo,
  draggable: mo,
  move: ho,
  loading: $o,
  wrapper: go,
  flex: bo,
  "col-1": "_col-1_1wzjg_25",
  "col-2": "_col-2_1wzjg_28",
  "col-3": "_col-3_1wzjg_31",
  "col-4": "_col-4_1wzjg_34",
  "col-5": "_col-5_1wzjg_37",
  "col-6": "_col-6_1wzjg_40",
  "col-7": "_col-7_1wzjg_43",
  "col-8": "_col-8_1wzjg_46",
  "col-9": "_col-9_1wzjg_49",
  "col-10": "_col-10_1wzjg_52",
  "col-11": "_col-11_1wzjg_55",
  "col-12": "_col-12_1wzjg_58",
  horizontal: ko,
  wrap: wo,
  vertical: zo,
  grid: Mo,
  "chart-container": "_chart-container_1wzjg_107",
  "chart-instance": "_chart-instance_1wzjg_110",
  "chart-plot": "_chart-plot_1wzjg_120",
  "chart-legend": "_chart-legend_1wzjg_120",
  "chart-plot-tooltip": "_chart-plot-tooltip_1wzjg_207",
  "chart-legend-wrapper": "_chart-legend-wrapper_1wzjg_252",
  icon: Co
}, Bo = {
  $style: So
}, kc = /* @__PURE__ */ Q(_o, [["__cssModules", Bo], ["__scopeId", "data-v-1598efc3"]]), Vo = (o) => (de("data-v-ef57b6d1"), o = o(), pe(), o), Ao = /* @__PURE__ */ Vo(() => /* @__PURE__ */ u("span", null, "Required", -1)), Do = ["value"], qo = /* @__PURE__ */ Y({
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
  setup(o, { expose: t, emit: e }) {
    const a = o, l = e, { onTrigger: _ } = ge(
      (k) => {
        a.disabled ? (k.preventDefault(), k.stopPropagation()) : (w.set(!0), b(), l("update:modelValue", k.target.value));
      },
      a.eventSignalOptions ?? {
        flush: "post"
      }
    ), h = E(), p = K(""), w = K(a.modelValue !== ""), b = () => {
      var k, m;
      p.set(
        h.value ? (k = h.value) != null && k.validity.valid ? "" : bt(h.value.validity, a.invalidMessage ?? {}) ?? h.value.validationMessage : ""
      ), (m = h.value) != null && m.validity && l("validation", h.value.validity);
    };
    return _e(() => {
      b();
    }), t({
      checkValidity: b,
      focused: w,
      errMsg: p,
      inputRef$: h
    }), (k, m) => (d(), g("div", {
      class: s([
        k.$style["textfield-container"],
        {
          [k.$style[`icon-align--${a.iconAlign}`]]: a.icon || k.type === "search",
          [k.$style["no-label"]]: !a.label
        }
      ])
    }, [
      a.label || a.required ? (d(), g("label", {
        key: 0,
        class: s([k.$style["textfield-label"]])
      }, [
        a.label ? (d(), g("p", {
          key: 0,
          class: s([k.$style["textfield-label--value"]])
        }, T(a.label), 3)) : L("", !0),
        k.required ? (d(), g("p", {
          key: 1,
          class: s([k.$style["textfield-label--notation"]])
        }, [
          R(i(le), {
            class: s(k.$style.icon),
            icon: "fa6-solid:asterisk"
          }, null, 8, ["class"]),
          Ao
        ], 2)) : L("", !0)
      ], 2)) : L("", !0),
      u("input", He({
        ref_key: "inputRef$",
        ref: h,
        onInput: m[0] || (m[0] = //@ts-ignore
        (...z) => i(_) && i(_)(...z)),
        class: [
          k.$style["textfield-input"],
          {
            [k.$style.focused]: i(w)()
          }
        ]
      }, a, {
        value: a.modelValue
      }), null, 16, Do),
      k.type === "search" ? (d(), G(i(le), {
        key: 1,
        class: s([k.$style["textfield-icon"], k.$style["textfield-icon-search"], k.$style.icon]),
        icon: k.type === "search" ? "fa6-solid:magnifying-glass" : ""
      }, null, 8, ["class", "icon"])) : L("", !0),
      a.icon ? (d(), g("div", {
        key: 2,
        onClick: m[1] || (m[1] = //@ts-ignore
        (...z) => a.iconClick && a.iconClick(...z)),
        class: s([k.$style["textfield-icon"], k.$style.icon])
      }, [
        R(i(le), {
          icon: a.icon ?? ""
        }, null, 8, ["icon"])
      ], 2)) : L("", !0),
      i(p)() && i(w)() ? (d(), g("div", {
        key: 3,
        class: s([k.$style["textfield-msg"]])
      }, [
        R(i(le), {
          class: s([k.$style["textfield-icon"]]),
          icon: "fa6-solid:circle-xmark"
        }, null, 8, ["class"]),
        u("span", {
          class: s([k.$style["textfield-msg--value"]])
        }, T(i(p)()), 3)
      ], 2)) : L("", !0)
    ], 2));
  }
}), No = "_icon_1sa06_16", To = "_focused_1sa06_88", Oo = {
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
  icon: No,
  focused: To,
  "textfield-msg": "_textfield-msg_1sa06_118"
}, jo = {
  $style: Oo
}, De = /* @__PURE__ */ Q(qo, [["__cssModules", jo], ["__scopeId", "data-v-ef57b6d1"]]), Lo = ["onMouseout", "onMouseover"], Po = /* @__PURE__ */ Y({
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
  setup(o, { emit: t }) {
    const e = o, a = t, l = E({
      start: void 0,
      end: void 0
    }), _ = E({
      start: void 0,
      end: void 0
    }), h = E(!1), p = E(!1), w = E(""), b = E(), k = (n) => {
      b.value === n ? b.value = void 0 : b.value = n;
    }, m = E(), z = E(), c = () => {
      b.value === "year" ? V.value.goToDate(V.value.month.monthNumber, m.value) : V.value.goToDate(z.value, V.value.year), b.value = void 0;
    }, C = () => {
      m.value = void 0, z.value = void 0, b.value = void 0;
    }, M = (n) => {
      const A = new Date(n.getFullYear(), 0, 1), F = (n.getTime() - A.getTime()) / 864e5;
      return Math.ceil((F + A.getDate() + 1) / 7);
    }, $ = (n = /* @__PURE__ */ new Date()) => {
      const A = n.getDate(), F = n.toLocaleString(e.lang, { weekday: "long" }), I = n.getDay() + (e.weekStart === "Monday" ? 0 : 1), D = n.toLocaleString(e.lang, { weekday: "short" }), W = n.getFullYear();
      m.value = W;
      const ne = Number(n.toLocaleString(e.lang, { year: "2-digit" })), fe = n.toLocaleString(e.lang, { month: "long" }), qe = n.toLocaleString(e.lang, { month: "short" }), ve = Number(n.toLocaleString("en", { month: "2-digit" }));
      z.value = ve;
      const Ze = n.getTime(), We = M(n);
      return {
        date: n,
        currentDate: A,
        day: F,
        dayNumber: I,
        dayShort: D,
        year: W,
        yearShort: ne,
        month: fe,
        monthShort: qe,
        monthNumber: ve,
        timestamp: Ze,
        week: We
      };
    }, f = (n = /* @__PURE__ */ new Date()) => {
      const A = $(n), F = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], { monthNumber: I, year: D, monthShort: W, month: ne } = A;
      let fe = F[I - 1];
      return I === 2 && (fe += y(D) ? 1 : 0), {
        month: ne,
        monthShort: W,
        monthNumber: I,
        year: D,
        numberOfDays: fe,
        getDay: (ve) => $(new Date(D, I - 1, ve))
      };
    }, v = () => {
      const n = $(void 0), { year: A, monthNumber: F } = n, I = f(new Date(A, F - 1)), D = Array.from({ length: 12 }, (ie, ae) => f(new Date(A, ae))), W = Array.from({ length: 7 });
      W.forEach((ie, ae) => {
        const Ne = I.getDay(ae - (e.weekStart === "Monday" ? 1 : 2));
        W.includes(Ne.dayShort) || (W[ae] = Ne.dayShort);
      });
      const ne = () => V.value.month.monthNumber === 1 ? f(new Date(V.value.year - 1, 11)) : f(
        new Date(V.value.year, V.value.month.monthNumber - 2)
      ), fe = () => V.value.month.monthNumber === 12 ? f(new Date(V.value.year + 1, 0)) : f(new Date(V.value.year, V.value.month.monthNumber)), qe = (ie, ae) => {
        V.value.month = f(new Date(ae, ie - 1)), V.value.year = ae;
      }, ve = () => {
        V.value.year += 1, V.value.month = f(new Date(A, 0));
      }, Ze = () => {
        V.value.year -= 1, V.value.month = f(new Date(A, 11));
      }, We = () => {
        if (V.value.month.monthNumber === 12)
          return ve();
        V.value.month = f(
          new Date(V.value.year, V.value.month.monthNumber)
        );
      }, Vt = () => {
        if (V.value.month.monthNumber === 1)
          return Ze();
        V.value.month = f(
          new Date(V.value.year, V.value.month.monthNumber - 2)
        );
      }, At = () => {
        const ie = V.value.month.getDay(1), ae = ne(), Ne = fe(), ke = ie.dayNumber - 1 >= 0 ? ie.dayNumber - 1 : 6, we = V.value.month.numberOfDays + ke, Te = Array.from({ length: we });
        for (let ee = ke; ee < we; ee++)
          Te[ee] = V.value.month.getDay(ee + 1 - ke);
        for (let ee = 0; ee < ke; ee++) {
          const Nt = ke - (ee + 1);
          Te[ee] = ae.getDay(ae.numberOfDays - Nt);
        }
        const qt = we % 7 > 0 ? 7 - we % 7 : 0;
        for (let ee = 0; ee < qt; ee++)
          Te[we + ee] = Ne.getDay(ee + 1);
        return Te;
      }, Dt = Array.from(
        { length: e.maxYear - e.minYear + 1 },
        (ie, ae) => e.minYear + ae
      );
      return {
        today: n,
        year: A,
        years: Dt,
        month: I,
        months: D,
        weekDays: W,
        goToNextMonth: We,
        goToPreviousMonth: Vt,
        getMonthDays: At,
        goToDate: qe
      };
    }, y = (n) => n % 100 === 0 ? n % 400 === 0 : n % 4 === 0, B = q(() => V.value.getMonthDays()), V = E(v()), Z = (n, A) => (n == null ? void 0 : n.currentDate) === (A == null ? void 0 : A.currentDate) && (n == null ? void 0 : n.monthNumber) === (A == null ? void 0 : A.monthNumber) && (n == null ? void 0 : n.year) === (A == null ? void 0 : A.year), x = (n, A) => {
      var F, I;
      return A.start && A.end && n.timestamp > ((F = A.start) == null ? void 0 : F.timestamp) && n.timestamp < ((I = A.end) == null ? void 0 : I.timestamp);
    }, r = (n, A) => {
      var F;
      if (e.type === "single") {
        l.value.start = n;
        const [I, D] = w.value.split(":").map(Number);
        if (e.enableTime && !isNaN(I) && !isNaN(D)) {
          const W = n.date;
          W.setHours(I, D, 0, 0), a("update:modelValue", W);
        } else
          a("update:modelValue", n.date);
        a("update:start", new Date(n.year, n.monthNumber - 1, n.currentDate, 0, 0)), a("update:end", new Date(n.year, n.monthNumber - 1, n.currentDate, 23, 59));
      } else A.end ? p.value = !p.value : A.start ? h.value = !h.value : l.value.start && (n == null ? void 0 : n.timestamp) > ((F = l.value.start) == null ? void 0 : F.timestamp) ? (p.value = !1, h.value = !1, l.value.end = n, _.value.end = n, a("update:end", n.date)) : (l.value.start = n, _.value.start = n, h.value = !1, p.value = !1, a("update:start", n.date));
      V.value.goToDate(n == null ? void 0 : n.monthNumber, n == null ? void 0 : n.year);
    }, S = () => {
      a("confirm");
    }, P = (n) => {
      var A, F;
      e.type === "single" || !l.value.start || ((n == null ? void 0 : n.timestamp) > ((A = l.value.start) == null ? void 0 : A.timestamp) && p.value ? l.value.end = n : (n == null ? void 0 : n.timestamp) < ((F = l.value.start) == null ? void 0 : F.timestamp) && !l.value.end ? (l.value.end = l.value.start, l.value.start = n) : h.value && (l.value.start = n));
    }, N = (n) => {
      var A, F;
      e.type === "single" || !l.value.start || (((A = l.value.end) == null ? void 0 : A.timestamp) === n.timestamp ? l.value.end = _.value.end : ((F = l.value.start) == null ? void 0 : F.timestamp) === n.timestamp && (l.value.start = _.value.start));
    };
    return te(
      () => e.start,
      () => {
        e.start && (l.value.start = $(e.start), _.value.start = $(e.start));
      },
      {
        immediate: !0
      }
    ), te(
      () => e.end,
      () => {
        e.end && (l.value.end = $(e.end), _.value.end = $(e.end));
      },
      {
        immediate: !0
      }
    ), te(
      () => e.modelValue,
      () => {
        if (e.modelValue) {
          l.value.start = $(e.modelValue);
          let n = e.modelValue.getHours(), A = e.modelValue.getMinutes();
          A < 10 && (A = `0${A}`), n < 10 && (n = `0${n}`), w.value = `${n}:${A}`;
        }
      },
      {
        immediate: !0
      }
    ), te(
      w,
      (n) => {
        var A;
        if (n && /([01]?[0-9]|2[0-3]):[0-5][0-9]/.test(n)) {
          const [F, I] = n.split(":").map(Number);
          if (!isNaN(F) && !isNaN(I)) {
            const D = (A = l.value.start) != null && A.date ? new Date(l.value.start.date) : /* @__PURE__ */ new Date();
            D.setHours(F, I, 0, 0), a("update:modelValue", D);
          }
        }
      }
    ), (n, A) => (d(), G(se, {
      class: s([n.$style["date-picker"], n.$style.wrapper, n.$style.flex, n.$style.vertical]),
      radius: "var(--agh-ref-border-radius-500)"
    }, {
      default: U(() => {
        var F, I;
        return [
          u("header", {
            class: s([n.$style.wrapper, n.$style.flex, n.$style.horizontal])
          }, [
            R(J, {
              onClick: V.value.goToPreviousMonth,
              class: s(n.$style.button),
              icon: "fa6-solid:angle-left",
              variant: "text"
            }, null, 8, ["onClick", "class"]),
            u("div", {
              class: s([n.$style.label, n.$style.wrapper, n.$style.flex, n.$style.horizontal])
            }, [
              u("div", {
                class: s([n.$style.item, n.$style.wrapper, n.$style.flex, n.$style.horizontal])
              }, [
                R(J, {
                  onClick: A[0] || (A[0] = (D) => k("year")),
                  class: s([n.$style.select, b.value === "year" && n.$style.selected]),
                  icon: `fa6-solid:angle-${b.value === "year" ? "up" : "down"}`,
                  label: String(V.value.year),
                  variant: "text"
                }, null, 8, ["class", "icon", "label"])
              ], 2),
              u("div", {
                class: s([n.$style.item, n.$style.wrapper, n.$style.flex, n.$style.horizontal])
              }, [
                R(J, {
                  onClick: A[1] || (A[1] = (D) => k("month")),
                  class: s([n.$style.select, b.value === "month" && n.$style.selected]),
                  icon: `fa6-solid:angle-${b.value === "month" ? "up" : "down"}`,
                  label: V.value.month.monthShort,
                  variant: "text"
                }, null, 8, ["class", "icon", "label"])
              ], 2)
            ], 2),
            R(J, {
              onClick: V.value.goToNextMonth,
              class: s(n.$style.button),
              icon: "fa6-solid:angle-right",
              variant: "text"
            }, null, 8, ["onClick", "class"])
          ], 2),
          b.value ? b.value === "month" ? (d(), g("div", {
            key: 1,
            class: s([n.$style["month-list"], n.$style.wrapper, n.$style.flex, n.$style.vertical])
          }, [
            (d(!0), g(O, null, H(V.value.months, (D) => (d(), G(J, {
              key: D.month,
              onClick: (W) => z.value = D.monthNumber,
              class: s([
                n.$style.item,
                n.$style.wrapper,
                n.$style.flex,
                n.$style.horizontal,
                D.monthNumber === z.value && n.$style["item-active"]
              ]),
              label: D.month,
              variant: "text"
            }, null, 8, ["onClick", "class", "label"]))), 128))
          ], 2)) : b.value === "year" ? (d(), g("div", {
            key: 2,
            class: s(n.$style["years-grid"])
          }, [
            (d(!0), g(O, null, H(V.value.years, (D) => (d(), g("div", {
              key: D,
              class: s([n.$style.container, n.$style.wrapper, n.$style.flex, n.$style.horizontal])
            }, [
              R(J, {
                onClick: (W) => m.value = D,
                class: s([
                  n.$style.item,
                  n.$style.wrapper,
                  n.$style.flex,
                  n.$style.horizontal,
                  D === m.value && n.$style["item-active"]
                ]),
                label: String(D),
                variant: "text"
              }, null, 8, ["onClick", "class", "label"])
            ], 2))), 128))
          ], 2)) : L("", !0) : (d(), g(O, { key: 0 }, [
            u("div", {
              class: s(n.$style.calendar)
            }, [
              u("div", {
                class: s(n.$style.week)
              }, [
                (d(!0), g(O, null, H(V.value.weekDays, (D) => (d(), g("p", { key: D }, T(D), 1))), 128))
              ], 2),
              u("div", {
                class: s(n.$style["days-grid"])
              }, [
                (d(!0), g(O, null, H(B.value, (D) => {
                  var W, ne;
                  return d(), g("div", {
                    key: D == null ? void 0 : D.timestamp,
                    onMouseout: () => N(D),
                    onMouseover: () => P(D),
                    class: s([
                      n.$style.item,
                      n.$style.wrapper,
                      n.$style.flex,
                      n.$style.vertical,
                      n.type === "multiple" && l.value.start && l.value.end && ((W = l.value.start) == null ? void 0 : W.timestamp) !== l.value.end.timestamp && Z(D, l.value.start) && n.$style["item-start"],
                      n.type === "multiple" && l.value.end && ((ne = l.value.start) == null ? void 0 : ne.timestamp) !== l.value.end.timestamp && Z(D, l.value.end) && n.$style["item-end"],
                      n.type === "multiple" && x(D, l.value) && n.$style["item-duration"]
                    ])
                  }, [
                    R(J, {
                      onClick: () => r(D, {
                        start: _.value.start ? Z(D, _.value.start) : !1,
                        end: _.value.end ? Z(D, _.value.end) : !1
                      }),
                      class: s([
                        n.$style.day,
                        D.monthNumber === V.value.month.monthNumber && n.$style["day-current"],
                        l.value.start && Z(D, l.value.start) && n.$style["day-start"],
                        n.type === "multiple" && l.value.end && Z(D, l.value.end) && n.$style["day-end"],
                        l.value.start && Z(D, l.value.start) && n.type === "multiple" && n.$style["day-start"],
                        Z(D, $()) && n.$style["day-today"]
                      ]),
                      label: String(D == null ? void 0 : D.currentDate),
                      variant: "text"
                    }, null, 8, ["onClick", "class", "label"])
                  ], 42, Lo);
                }), 128))
              ], 2)
            ], 2),
            n.enableTime && n.type === "single" ? (d(), g("div", {
              key: 0,
              class: s([n.$style.time, n.$style.wrapper, n.$style.flex, n.$style.horizontal])
            }, [
              u("div", {
                class: s([n.$style["label-container"], n.$style.wrapper, n.$style.flex, n.$style.horizontal])
              }, [
                u("p", {
                  class: s(n.$style.label)
                }, " Time ", 2),
                u("p", {
                  class: s(n.$style.description)
                }, " 24-hour format ", 2)
              ], 2),
              R(De, {
                modelValue: w.value,
                "onUpdate:modelValue": A[2] || (A[2] = (D) => w.value = D),
                class: s(n.$style.input),
                "invalid-message": {
                  patternMismatch: "Invalid time format. Use HH:MM (24-hour format)."
                },
                pattern: "([01]?[0-9]|2[0-3]):[0-5][0-9]",
                placeholder: "Enter Time"
              }, null, 8, ["modelValue", "class"])
            ], 2)) : n.type === "multiple" && l.value.start ? (d(), g("div", {
              key: 1,
              class: s(n.$style["time-multiple"])
            }, [
              u("p", {
                class: s(n.$style.description)
              }, T(`Selected Date: ${i(oe)(
                { start: (F = l.value.start) == null ? void 0 : F.date },
                "{{ start | date : yyyy/MM/dd }}"
              )}${l.value.end ? ` - ${i(oe)({ end: (I = l.value.end) == null ? void 0 : I.date }, "{{ end | date : yyyy/MM/dd }}")}` : ""}`), 3)
            ], 2)) : L("", !0)
          ], 64)),
          b.value ? (d(), g("div", {
            key: 4,
            class: s([n.$style.footer, n.$style.wrapper, n.$style.flex, n.$style.horizontal])
          }, [
            R(J, {
              onClick: C,
              class: s(n.$style.button),
              label: "Cancel",
              level: "secondary",
              variant: "rect"
            }, null, 8, ["class"]),
            R(J, {
              onClick: c,
              class: s(n.$style.button),
              label: "Confirm",
              variant: "rect"
            }, null, 8, ["class"])
          ], 2)) : (d(), g("div", {
            key: 3,
            class: s([n.$style.footer, n.$style.wrapper, n.$style.flex, n.$style.horizontal])
          }, [
            R(J, {
              onClick: S,
              class: s(n.$style.button),
              label: "Confirm",
              variant: "rect"
            }, null, 8, ["class"])
          ], 2))
        ];
      }),
      _: 1
    }, 8, ["class"]));
  }
}), Ro = "_wrapper_ip11f_1", Io = "_flex_ip11f_12", Eo = "_horizontal_ip11f_48", Fo = "_wrap_ip11f_1", Ho = "_vertical_ip11f_60", Uo = "_grid_ip11f_72", Zo = "_button_ip11f_90", Wo = "_label_ip11f_98", Yo = "_item_ip11f_104", Go = "_select_ip11f_108", Qo = "_selected_ip11f_109", Xo = "_icon_ip11f_119", Jo = "_calendar_ip11f_122", xo = "_week_ip11f_125", Ko = "_day_ip11f_136", en = "_container_ip11f_276", tn = "_time_ip11f_294", ln = "_description_ip11f_307", an = "_footer_ip11f_318", sn = {
  wrapper: Ro,
  flex: Io,
  "col-1": "_col-1_ip11f_12",
  "col-2": "_col-2_ip11f_15",
  "col-3": "_col-3_ip11f_18",
  "col-4": "_col-4_ip11f_21",
  "col-5": "_col-5_ip11f_24",
  "col-6": "_col-6_ip11f_27",
  "col-7": "_col-7_ip11f_30",
  "col-8": "_col-8_ip11f_33",
  "col-9": "_col-9_ip11f_36",
  "col-10": "_col-10_ip11f_39",
  "col-11": "_col-11_ip11f_42",
  "col-12": "_col-12_ip11f_45",
  horizontal: Eo,
  wrap: Fo,
  vertical: Ho,
  grid: Uo,
  "date-picker": "_date-picker_ip11f_78",
  button: Zo,
  label: Wo,
  item: Yo,
  select: Go,
  selected: Qo,
  icon: Xo,
  calendar: Jo,
  week: xo,
  "days-grid": "_days-grid_ip11f_136",
  "item-duration": "_item-duration_ip11f_147",
  "item-start": "_item-start_ip11f_157",
  "item-end": "_item-end_ip11f_167",
  day: Ko,
  "day-current": "_day-current_ip11f_184",
  "day-today": "_day-today_ip11f_187",
  "day-selected": "_day-selected_ip11f_195",
  "day-start": "_day-start_ip11f_199",
  "day-end": "_day-end_ip11f_203",
  "month-list": "_month-list_ip11f_207",
  "item-active": "_item-active_ip11f_245",
  "years-grid": "_years-grid_ip11f_249",
  container: en,
  time: tn,
  "label-container": "_label-container_ip11f_303",
  description: ln,
  "time-multiple": "_time-multiple_ip11f_311",
  footer: an
}, on = {
  $style: sn
}, wc = /* @__PURE__ */ Q(Po, [["__cssModules", on], ["__scopeId", "data-v-d26eca0e"]]);
function ze(o) {
  var t;
  const e = Se(o);
  return (t = e == null ? void 0 : e.$el) != null ? t : e;
}
const St = yl ? window : void 0;
function Pe(...o) {
  let t, e, a, l;
  if (typeof o[0] == "string" || Array.isArray(o[0]) ? ([e, a, l] = o, t = St) : [t, e, a, l] = o, !t)
    return Le;
  Array.isArray(e) || (e = [e]), Array.isArray(a) || (a = [a]);
  const _ = [], h = () => {
    _.forEach((k) => k()), _.length = 0;
  }, p = (k, m, z, c) => (k.addEventListener(m, z, c), () => k.removeEventListener(m, z, c)), w = te(
    () => [ze(t), Se(l)],
    ([k, m]) => {
      if (h(), !k)
        return;
      const z = fl(m) ? { ...m } : m;
      _.push(
        ...e.flatMap((c) => a.map((C) => p(k, c, C, z)))
      );
    },
    { immediate: !0, flush: "post" }
  ), b = () => {
    w(), h();
  };
  return wt(b), b;
}
let _t = !1;
function ft(o, t, e = {}) {
  const { window: a = St, ignore: l = [], capture: _ = !0, detectIframe: h = !1 } = e;
  if (!a)
    return Le;
  Ke && !_t && (_t = !0, Array.from(a.document.body.children).forEach((z) => z.addEventListener("click", Le)), a.document.documentElement.addEventListener("click", Le));
  let p = !0;
  const w = (z) => l.some((c) => {
    if (typeof c == "string")
      return Array.from(a.document.querySelectorAll(c)).some((C) => C === z.target || z.composedPath().includes(C));
    {
      const C = ze(c);
      return C && (z.target === C || z.composedPath().includes(C));
    }
  }), k = [
    Pe(a, "click", (z) => {
      const c = ze(o);
      if (!(!c || c === z.target || z.composedPath().includes(c))) {
        if (z.detail === 0 && (p = !w(z)), !p) {
          p = !0;
          return;
        }
        t(z);
      }
    }, { passive: !0, capture: _ }),
    Pe(a, "pointerdown", (z) => {
      const c = ze(o);
      p = !w(z) && !!(c && !z.composedPath().includes(c));
    }, { passive: !0 }),
    h && Pe(a, "blur", (z) => {
      setTimeout(() => {
        var c;
        const C = ze(o);
        ((c = a.document.activeElement) == null ? void 0 : c.tagName) === "IFRAME" && !(C != null && C.contains(a.document.activeElement)) && t(z);
      }, 0);
    })
  ].filter(Boolean);
  return () => k.forEach((z) => z());
}
const et = {
  [dt.mounted](o, t) {
    const e = !t.modifiers.bubble;
    if (typeof t.value == "function")
      o.__onClickOutside_stop = ft(o, t.value, { capture: e });
    else {
      const [a, l] = t.value;
      o.__onClickOutside_stop = ft(o, a, Object.assign({ capture: e }, l));
    }
  },
  [dt.unmounted](o) {
    o.__onClickOutside_stop();
  }
};
function Qe(o) {
  return typeof Window < "u" && o instanceof Window ? o.document.documentElement : typeof Document < "u" && o instanceof Document ? o.documentElement : o;
}
function Bt(o) {
  const t = window.getComputedStyle(o);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && o.clientWidth < o.scrollWidth || t.overflowY === "auto" && o.clientHeight < o.scrollHeight)
    return !0;
  {
    const e = o.parentNode;
    return !e || e.tagName === "BODY" ? !1 : Bt(e);
  }
}
function nn(o) {
  const t = o || window.event, e = t.target;
  return Bt(e) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.preventDefault(), !1);
}
const Xe = /* @__PURE__ */ new WeakMap();
function rn(o, t = !1) {
  const e = E(t);
  let a = null, l = "";
  te(vl(o), (p) => {
    const w = Qe(Se(p));
    if (w) {
      const b = w;
      if (Xe.get(b) || Xe.set(b, b.style.overflow), b.style.overflow !== "hidden" && (l = b.style.overflow), b.style.overflow === "hidden")
        return e.value = !0;
      if (e.value)
        return b.style.overflow = "hidden";
    }
  }, {
    immediate: !0
  });
  const _ = () => {
    const p = Qe(Se(o));
    !p || e.value || (Ke && (a = Pe(
      p,
      "touchmove",
      (w) => {
        nn(w);
      },
      { passive: !1 }
    )), p.style.overflow = "hidden", e.value = !0);
  }, h = () => {
    const p = Qe(Se(o));
    !p || !e.value || (Ke && (a == null || a()), p.style.overflow = l, Xe.delete(p), e.value = !1);
  };
  return wt(h), q({
    get() {
      return e.value;
    },
    set(p) {
      p ? _() : h();
    }
  });
}
function un() {
  let o = !1;
  const t = E(!1);
  return (e, a) => {
    if (t.value = a.value, o)
      return;
    o = !0;
    const l = rn(e, a.value);
    te(t, (_) => l.value = _);
  };
}
un();
const cn = ["onClick"], dn = /* @__PURE__ */ Y({
  __name: "SelectMenu",
  props: /* @__PURE__ */ me({
    fields: {},
    groupBy: {},
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
  setup(o, { expose: t }) {
    var y, B, V, Z, x;
    const e = st(), a = o, l = ue(o, "modelValue"), _ = ue(o, "query"), h = E(), p = q(
      () => new Ie(
        Array.isArray(a.options) ? a.options.map((r, S) => [S, r]) : a.options
      )
    ), w = q(
      () => a.multiple ? new Ie(
        Array.isArray(l.value) ? new Map(l.value.map((r, S) => [S, r])) : l.value instanceof Map ? new Map(l.value) : /* @__PURE__ */ new Map()
      ).map((r) => [$(r).key, p]) : $(l.value).key
    ), { result: b, reset: k } = kt(p, {
      query: _,
      getters: ((y = a.fields) == null ? void 0 : y.searchKeys) ?? (((B = a.fields) == null ? void 0 : B.key) ?? ((V = a.fields) == null ? void 0 : V.title) ? [((Z = a.fields) == null ? void 0 : Z.key) ?? "", ((x = a.fields) == null ? void 0 : x.title) ?? ""].filter(Boolean) : [(r) => String(r)]),
      options: a.useSearch ? {
        caseSensitive: a.caseSensitive,
        phraseSearch: a.phraseSearch,
        strict: a.strict,
        segmentPattern: a.segmentPattern,
        relevanceSearch: a.relevanceSearch,
        threshold: a.threshold,
        sortBy: a.sortBy,
        limit: a.limit
      } : void 0
    }), m = q(
      () => p.value.map((r, S) => [
        S,
        {
          payload: r,
          field: $(r)
        }
      ]).map(({ payload: r, field: S }, P) => [
        P,
        {
          payload: r,
          field: S,
          get selected() {
            return a.multiple && w.value instanceof Map ? w.value.has(S.key) : w.value === S.key;
          },
          get matched() {
            return b.value.has(P);
          }
        }
      ])
    ), z = q(
      () => tt(
        m.value.filter(({ matched: r }) => a.useSearch && a.showAll || r).toArray("entries"),
        "[1].field.group"
      )
    ), c = K(!1), C = () => {
      if (h.value) {
        const { scrollHeight: r, clientHeight: S } = h.value;
        c.set(r > S + 1);
      }
    }, M = () => {
      a.multiple ? l.value = Array.isArray(a.options) ? [] : /* @__PURE__ */ new Map() : l.value = void 0;
    }, $ = (r) => {
      var S, P;
      return {
        ...Object.fromEntries(
          Object.entries(pl(a.fields, ["key", "searchKeys", "disabled"])).map(([N, n]) => [
            N,
            ce(r, n, !0)
          ])
        ),
        key: (S = a.fields) != null && S.key ? ce(r, a.fields.key) : String(r),
        group: a.groupBy ? ce(r, a.groupBy, !0) ?? "" : "",
        disabled: (P = a.fields) != null && P.disabled && (_l(r, a.fields.disabled, !0) ?? !1) || !1
      };
    }, f = (r, S) => {
      a.multiple ? S.field.disabled || (a.options instanceof Map ? S.selected ? l.value.delete(S.field.key) : l.value.set(r, S.payload) : S.selected ? l.value = m.value.filter((P, N) => r !== N && P.selected).toArray("values").map(({ payload: P }) => P) : l.value = m.value.filter((P, N) => r === N || P.selected).toArray("values").map(({ payload: P }) => P)) : S.field.disabled || (l.value = S.payload);
    }, v = () => {
      k(), M();
    };
    return Fe(h, C, {
      window
    }), _e(() => {
      C();
    }), t({
      reset: v,
      clearSearch: k,
      clearSelection: M
    }), (r, S) => (d(), G(se, {
      class: s([
        r.$style["menu-container"],
        r.$style.wrapper,
        r.$style.flex,
        r.$style.vertical,
        {
          [r.$style.classify]: a.groupBy
        }
      ]),
      radius: "var(--agh-ref-border-radius-500)"
    }, {
      default: U(() => [
        a.label || a.multiple || a.useSearch || e.header ? (d(), g("header", {
          key: 0,
          class: s([
            r.$style["menu-header"],
            r.$style.wrapper,
            r.$style.flex,
            r.$style.horizontal,
            r.$style.wrap
          ])
        }, [
          X(r.$slots, "header", {
            clearSelection: M,
            label: a.label,
            multiple: a.multiple,
            result: i(b),
            searchQuery: _.value,
            selection: l.value,
            useSearch: a.useSearch
          }, () => [
            a.label || a.multiple ? (d(), g(O, { key: 0 }, [
              u("h1", {
                class: s(r.$style.title)
              }, T(a.label), 3),
              a.multiple || a.clearable ? X(r.$slots, "clear-selection", {
                key: 0,
                clearSelection: M
              }, () => {
                var P;
                return [
                  R(J, {
                    onClick: M,
                    class: s(r.$style.button),
                    icon: "fa6-solid:eraser",
                    label: ((P = a.alterStr) == null ? void 0 : P.clearSelection) || "Clear Selection",
                    variant: "text"
                  }, null, 8, ["class", "label"])
                ];
              }, !0) : L("", !0)
            ], 64)) : L("", !0),
            a.useSearch ? (d(), G(De, {
              key: 1,
              modelValue: _.value,
              "onUpdate:modelValue": S[0] || (S[0] = (P) => _.value = P),
              class: s(r.$style["menu-search"]),
              inputmode: "search",
              type: "search"
            }, null, 8, ["modelValue", "class"])) : L("", !0)
          ], !0)
        ], 2)) : L("", !0),
        u("div", {
          ref_key: "wrapperRef$",
          ref: h,
          class: s([
            r.$style["menu-wrapper"],
            r.$style.wrapper,
            r.$style.flex,
            r.$style.vertical,
            {
              [r.$style.overflowed]: i(c)()
            }
          ])
        }, [
          (d(!0), g(O, null, H(z.value, (P, N) => (d(), g("div", {
            key: P,
            class: s([
              r.$style["menu-group"],
              r.$style.wrapper,
              r.$style.flex,
              r.$style.vertical,
              {
                [r.$style.classify]: a.groupBy
              }
            ])
          }, [
            a.groupBy && N ? (d(), g("label", {
              key: 0,
              class: s(r.$style["menu-group-label"])
            }, T(N), 3)) : L("", !0),
            (d(!0), g(O, null, H(P, ([n, { selected: A, matched: F, field: I, payload: D }]) => (d(), g(O, {
              key: `option-${I.key}`
            }, [
              F ? (d(), g("div", {
                key: 0,
                onClick: (W) => !I.disabled && f(n, { selected: A, field: I, payload: D }),
                class: s([
                  r.$style["menu-option"],
                  r.$style.wrapper,
                  r.$style.flex,
                  r.$style.horizontal,
                  r.$style.behavior,
                  I.disabled ? [r.$style.disabled] : r.$style.clickable,
                  {
                    [r.$style.selected]: A,
                    [r.$style.multiple]: a.multiple
                  }
                ])
              }, [
                X(r.$slots, "default", {
                  clearSelection: M,
                  index: n,
                  multiple: a.multiple,
                  option: { selected: A, matched: F, field: I, payload: D }
                }, () => {
                  var W;
                  return [
                    a.multiple ? (d(), G(i(le), {
                      key: 0,
                      class: s(r.$style["menu-option-icon"]),
                      icon: A ? "fa6-solid:square-check" : "fa6-regular:square"
                    }, null, 8, ["class", "icon"])) : L("", !0),
                    (W = a.fields) != null && W.icon ? (d(), G(i(le), {
                      key: 1,
                      class: s(r.$style["menu-option-icon"]),
                      icon: I.icon ?? ""
                    }, null, 8, ["class", "icon"])) : L("", !0),
                    u("div", {
                      class: s(r.$style["menu-option-group"])
                    }, [
                      u("p", {
                        class: s(r.$style["menu-field"])
                      }, T(I.title || I.key), 3),
                      I.content ? (d(), g("p", {
                        key: 0,
                        class: s(r.$style["menu-field"])
                      }, T(I.content), 3)) : L("", !0)
                    ], 2)
                  ];
                }, !0)
              ], 10, cn)) : L("", !0)
            ], 64))), 128)),
            u("div", {
              class: s(r.$style["menu-group-placeholder"])
            }, [
              X(r.$slots, "no-match-placeholder", { groupName: N }, () => {
                var n;
                return [
                  u("p", null, T(((n = a.alterStr) == null ? void 0 : n.noMatched) || "No Matched Data"), 1)
                ];
              }, !0)
            ], 2)
          ], 2))), 128))
        ], 2),
        p.value.size === 0 ? (d(), g("div", {
          key: 1,
          class: s(r.$style["menu-placeholder"])
        }, [
          X(r.$slots, "empty-placeholder", {}, () => {
            var P;
            return [
              u("p", null, T(((P = a.alterStr) == null ? void 0 : P.noData) || "No Data"), 1)
            ];
          }, !0)
        ], 2)) : a.useSearch && !a.showAll && i(b).size === 0 ? (d(), g("div", {
          key: 2,
          class: s(r.$style["menu-placeholder"])
        }, [
          X(r.$slots, "no-match-placeholder", {}, () => {
            var P;
            return [
              u("p", null, T(((P = a.alterStr) == null ? void 0 : P.noMatched) || "No Matched Data"), 1)
            ];
          }, !0)
        ], 2)) : L("", !0),
        X(r.$slots, "footer", {
          clearSelection: M,
          label: a.label,
          multiple: a.multiple,
          result: i(b),
          searchQuery: _.value,
          selection: l.value,
          useSearch: a.useSearch
        }, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), pn = "_wrapper_1mayu_1", _n = "_flex_1mayu_12", fn = "_horizontal_1mayu_48", vn = "_wrap_1mayu_1", yn = "_vertical_1mayu_60", mn = "_grid_1mayu_72", hn = "_behavior_1mayu_78", $n = "_clickable_1mayu_78", gn = "_disabled_1mayu_81", bn = "_draggable_1mayu_84", kn = "_move_1mayu_84", wn = "_loading_1mayu_87", zn = "_classify_1mayu_100", Mn = "_title_1mayu_109", Cn = "_button_1mayu_135", Sn = "_overflowed_1mayu_174", Bn = "_selected_1mayu_197", Vn = "_hover_1mayu_197", An = "_multiple_1mayu_205", Dn = {
  wrapper: pn,
  flex: _n,
  "col-1": "_col-1_1mayu_12",
  "col-2": "_col-2_1mayu_15",
  "col-3": "_col-3_1mayu_18",
  "col-4": "_col-4_1mayu_21",
  "col-5": "_col-5_1mayu_24",
  "col-6": "_col-6_1mayu_27",
  "col-7": "_col-7_1mayu_30",
  "col-8": "_col-8_1mayu_33",
  "col-9": "_col-9_1mayu_36",
  "col-10": "_col-10_1mayu_39",
  "col-11": "_col-11_1mayu_42",
  "col-12": "_col-12_1mayu_45",
  horizontal: fn,
  wrap: vn,
  vertical: yn,
  grid: mn,
  behavior: hn,
  clickable: $n,
  disabled: gn,
  draggable: bn,
  move: kn,
  loading: wn,
  "menu-container": "_menu-container_1mayu_91",
  "menu-search": "_menu-search_1mayu_100",
  classify: zn,
  "menu-header": "_menu-header_1mayu_109",
  title: Mn,
  button: Cn,
  "menu-placeholder": "_menu-placeholder_1mayu_146",
  "menu-wrapper": "_menu-wrapper_1mayu_151",
  overflowed: Sn,
  "menu-option": "_menu-option_1mayu_184",
  "menu-group-placeholder": "_menu-group-placeholder_1mayu_191",
  selected: Bn,
  hover: Vn,
  multiple: An,
  "menu-field": "_menu-field_1mayu_208",
  "menu-option-group": "_menu-option-group_1mayu_214",
  "menu-group": "_menu-group_1mayu_191",
  "menu-group-label": "_menu-group-label_1mayu_245"
}, qn = {
  $style: Dn
}, Ee = /* @__PURE__ */ Q(dn, [["__cssModules", qn], ["__scopeId", "data-v-a9c2a45d"]]), Nn = /* @__PURE__ */ Y({
  __name: "DropDown",
  props: /* @__PURE__ */ me({
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
  emits: /* @__PURE__ */ me(["create"], ["update:modelValue", "update:query", "update:newOptionValue"]),
  setup(o, { expose: t, emit: e }) {
    const a = st(), l = o, _ = e, h = ue(o, "modelValue"), p = ue(o, "query"), w = ue(o, "newOptionValue"), b = E(), k = E(), m = E(), z = K(!1), c = K(!1), C = K(!1), M = q(
      () => l.multiple && h.value ? Array.isArray(h.value) ? h.value.length : h.value instanceof Map ? h.value.size : !1 : !1
    );
    q(
      () => Array.isArray(l.options) ? l.options.length : l.options instanceof Map ? l.options.size : 0
    );
    const $ = q(
      () => {
        var r, S;
        return l.labelShowAs === "icon" ? void 0 : (l.labelShowAs !== "auto" ? l[l.labelShowAs] : void 0) || (l.multiple ? (M.value || 0) > 0 ? l.label ?? l.placeholder : l.placeholder ?? l.label : (l.modelValue && ((r = l.fields) != null && r.title ? ce(l.modelValue, l.fields.title, !0) : (S = l.fields) != null && S.key ? ce(l.modelValue, l.fields.key, !0) : String(l.modelValue))) ?? l.label ?? l.placeholder);
      }
    ), f = q(
      () => {
        var r;
        return ((l.variant.includes("square") || l.labelShowAs === "icon") && !l.multiple && h.value && l.modelValue && (r = l.fields) != null && r.icon ? ce(l.modelValue, l.fields.icon, !0) : void 0) || (z() ? "fa6-solid:chevron-up" : "fa6-solid:chevron-down");
      }
    ), v = () => {
      var r;
      (r = b.value) == null || r.clearSearch(), p.value = "";
    }, y = () => {
      var r;
      (r = b.value) == null || r.clearSelection(), h.value = l.multiple ? [] : void 0;
    }, B = () => {
      v(), y();
    }, V = () => {
      l.useCreate && !C() ? (z.set(!1), c.set(!1), w.value = "") : z.set(!1);
    }, Z = () => {
      var r;
      (r = m.value) != null && r.valid && w.value !== "" && (C.set(!0), _(
        "create",
        w.value,
        // onFinish
        (S) => {
          B(), z.set(!1), c.set(!1), C.set(!1), w.value = "", h.value = S;
        },
        // onError
        () => {
          C.set(!1), setTimeout(() => {
            var S, P, N, n;
            (P = (S = k.value) == null ? void 0 : S.inputRef$) == null || P.focus(), (n = (N = k.value) == null ? void 0 : N.inputRef$) == null || n.dispatchEvent(
              new Event("input", {
                bubbles: !0
              })
            );
          }, 100);
        }
      ));
    }, x = (r) => {
      m.value = r;
    };
    return te([h, () => l.multiple], ([r, S]) => {
      !S && r && z.set(!1);
    }), te(z, (r) => {
      r && !l.persist && v();
    }), te(
      c,
      (r) => {
        r && (v(), z.set(!1), w.value = "", Promise.allSettled([
          it(),
          new Promise((S) => {
            setTimeout(() => {
              S();
            }, 100);
          })
        ]).finally(() => {
          z.set(!1), it(() => {
            var S, P;
            (P = (S = k.value) == null ? void 0 : S.inputRef$) == null || P.focus();
          });
        }));
      },
      { immediate: !0, flush: "post" }
    ), te(
      () => l.useCreate && l.createInProgress,
      (r) => {
        r !== void 0 && C.set(r);
      },
      {
        immediate: !0
      }
    ), t({
      reset: B,
      clearSearch: v,
      clearSelection: y,
      onShowMenu: z
    }), (r, S) => {
      var P;
      return Je((d(), g("div", {
        class: s([
          r.$style["dropdown-container"],
          r.$style.wrapper,
          r.$style.behavior,
          r.$style.flex,
          r.$style[r.size],
          {
            [r.$style.extend]: l.useCreate,
            [r.$style.loading]: l.useCreate && i(C)()
          },
          i(c)() ? r.$style.horizontal : r.$style.vertical
        ])
      }, [
        i(c)() && l.useCreate ? (d(), g(O, { key: 0 }, [
          R(De, He(
            {
              ref_key: "textFieldRef$",
              ref: k,
              modelValue: w.value,
              "onUpdate:modelValue": S[0] || (S[0] = (N) => w.value = N)
            },
            i(Ct)(l, [
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
              onKeydownCapture: ye(Z, ["enter"]),
              onKeydown: ye(V, ["escape"]),
              onValidation: x,
              class: r.$style["dropdown-textfield"],
              disabled: l.disabled || i(C)(),
              "event-signal-options": l.eventSignalOptions ?? { flush: "sync", debounce: 100 },
              placeholder: l.createPlaceholder
            }
          ), null, 16, ["modelValue", "class", "disabled", "event-signal-options", "placeholder"]),
          u("div", {
            class: s([
              r.$style["dropdown-textfield-toolbox"],
              r.$style.wrapper,
              r.$style.flex,
              r.$style.horizontal
            ])
          }, [
            R(J, {
              onClick: V,
              class: s(r.$style.button),
              disabled: i(C)(),
              icon: "fa6-solid:xmark",
              level: "secondary",
              size: "small",
              variant: "square"
            }, null, 8, ["class", "disabled"]),
            R(J, {
              onClick: Z,
              class: s(r.$style.button),
              clicked: i(C)(),
              disabled: ((P = m.value) == null ? void 0 : P.valid) !== !0 || !w.value,
              icon: i(C)() ? "" : "fa6-solid:check",
              loading: i(C)(),
              size: "small",
              variant: "square"
            }, null, 8, ["class", "clicked", "disabled", "icon", "loading"])
          ], 2)
        ], 64)) : (d(), G(J, {
          key: 1,
          onClick: S[1] || (S[1] = (N) => i(ol)(i(z))),
          bobble: M.value,
          class: s([r.$style["dropdown-button"], r.$style[r.size], r.$style[l.variant]]),
          clicked: i(z)(),
          disabled: l.disabled,
          icon: f.value,
          label: $.value,
          level: l.level,
          size: l.size,
          variant: l.variant
        }, null, 8, ["bobble", "class", "clicked", "disabled", "icon", "label", "level", "size", "variant"])),
        i(z)() ? (d(), G(Ee, {
          key: 2,
          ref_key: "selectMenuRef$",
          ref: b,
          modelValue: h.value,
          "onUpdate:modelValue": S[3] || (S[3] = (N) => h.value = N),
          query: p.value,
          "onUpdate:query": S[4] || (S[4] = (N) => p.value = N),
          "onSelect:fields": S[5] || (S[5] = (N) => r.selectedFields = N),
          "alter-str": l.alterStr,
          "case-sensitive": l.caseSensitive,
          class: s([r.$style["dropdown-menu"], r.$style[l.menuPosition]]),
          clearable: l.clearable,
          fields: l.fields,
          "group-by": l.groupBy,
          label: l.label,
          limit: l.limit,
          multiple: l.multiple,
          options: l.options,
          "phrase-search": l.phraseSearch,
          "relevant-search": l.relevantSearch,
          "segment-pattern": l.segmentPattern,
          "show-all": l.showAll,
          "sort-by": l.sortBy,
          strict: l.strict,
          threshold: l.threshold,
          "use-search": l.useSearch
        }, Ft({ _: 2 }, [
          a["clear-selection"] ? {
            name: "clear-selection",
            fn: U(({ clearSelection: N }) => [
              X(r.$slots, "clear-selection", { clearSelection: N }, void 0, !0)
            ]),
            key: "0"
          } : void 0,
          a["empty-placeholder"] ? {
            name: "empty-placeholder",
            fn: U(({ groupName: N }) => [
              X(r.$slots, "empty-placeholder", { groupName: N }, void 0, !0)
            ]),
            key: "1"
          } : void 0,
          a["no-match-placeholder"] ? {
            name: "no-match-placeholder",
            fn: U(({ groupName: N }) => [
              X(r.$slots, "no-match-placeholder", { groupName: N }, void 0, !0)
            ]),
            key: "2"
          } : void 0,
          a.header ? {
            name: "header",
            fn: U(({ selection: N, multiple: n, useSearch: A, searchQuery: F, result: I, label: D }) => [
              X(r.$slots, "header", {
                clearSelection: y,
                label: D,
                multiple: n,
                result: I,
                searchQuery: F,
                selection: N,
                useSearch: A
              }, void 0, !0)
            ]),
            key: "3"
          } : void 0,
          a.default ? {
            name: "default",
            fn: U(({ index: N, multiple: n, option: A }) => [
              X(r.$slots, "default", {
                clearSelection: y,
                index: N,
                multiple: n,
                option: A
              }, void 0, !0)
            ]),
            key: "4"
          } : void 0,
          a.footer || l.useCreate ? {
            name: "footer",
            fn: U(({ selection: N, multiple: n, useSearch: A, searchQuery: F, result: I, label: D }) => {
              var W;
              return [
                X(r.$slots, "footer", {
                  clearSelection: y,
                  label: D,
                  multiple: n,
                  result: I,
                  searchQuery: F,
                  selection: N,
                  useSearch: A
                }, void 0, !0),
                l.useCreate ? (d(), G(J, {
                  key: 0,
                  onClick: S[2] || (S[2] = (ne) => i(c).set(!0)),
                  class: s([
                    r.$style.button,
                    {
                      [r.$style.active]: i(c)()
                    }
                  ]),
                  label: ((W = l.alterStr) == null ? void 0 : W.create) || "Add New",
                  icon: "fa6-solid:plus",
                  variant: "text"
                }, null, 8, ["class", "label"])) : L("", !0)
              ];
            }),
            key: "5"
          } : void 0
        ]), 1032, ["modelValue", "query", "alter-str", "case-sensitive", "class", "clearable", "fields", "group-by", "label", "limit", "multiple", "options", "phrase-search", "relevant-search", "segment-pattern", "show-all", "sort-by", "strict", "threshold", "use-search"])) : L("", !0)
      ], 2)), [
        [i(et), V]
      ]);
    };
  }
}), Tn = "_wrapper_1youd_1", On = "_flex_1youd_12", jn = "_horizontal_1youd_48", Ln = "_wrap_1youd_1", Pn = "_vertical_1youd_60", Rn = "_grid_1youd_72", In = "_behavior_1youd_78", En = "_clickable_1youd_78", Fn = "_disabled_1youd_81", Hn = "_draggable_1youd_84", Un = "_move_1youd_84", Zn = "_loading_1youd_87", Wn = "_large_1youd_97", Yn = "_extend_1youd_97", Gn = "_rect_1youd_114", Qn = "_button_1youd_145", Xn = "_active_1youd_156", Jn = {
  wrapper: Tn,
  flex: On,
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
  wrap: Ln,
  vertical: Pn,
  grid: Rn,
  behavior: In,
  clickable: En,
  disabled: Fn,
  draggable: Hn,
  move: Un,
  loading: Zn,
  "dropdown-container": "_dropdown-container_1youd_91",
  large: Wn,
  extend: Yn,
  "dropdown-menu": "_dropdown-menu_1youd_101",
  "dropdown-button": "_dropdown-button_1youd_101",
  "dropdown-textfield": "_dropdown-textfield_1youd_101",
  rect: Gn,
  "dropdown-textfield-toolbox": "_dropdown-textfield-toolbox_1youd_124",
  "top-left": "_top-left_1youd_133",
  "top-right": "_top-right_1youd_133",
  "bottom-left": "_bottom-left_1youd_136",
  "bottom-right": "_bottom-right_1youd_136",
  button: Qn,
  active: Xn
}, xn = {
  $style: Jn
}, zc = /* @__PURE__ */ Q(Nn, [["__cssModules", xn], ["__scopeId", "data-v-d7a1cd46"]]), Kn = /* @__PURE__ */ Y({
  __name: "ProgressBar",
  props: {
    value: { default: 0 },
    variant: { default: "concave" },
    thickness: { default: 12 }
  },
  setup(o) {
    const t = o;
    return (e, a) => (d(), g("div", {
      class: s([e.$style["progress-container"], e.$style[t.variant]])
    }, [
      u("div", {
        class: s([e.$style["progress-groove"], e.$style[t.variant]])
      }, [
        u("div", {
          class: s(e.$style["progress-value"]),
          style: at({ width: `${t.value * 100}%` })
        }, null, 6)
      ], 2)
    ], 2));
  }
}), er = "_concave_1hfbi_23", tr = "_convex_1hfbi_55", lr = {
  "progress-container": "_progress-container_1hfbi_1",
  "progress-groove": "_progress-groove_1hfbi_11",
  "progress-value": "_progress-value_1hfbi_11",
  concave: er,
  "progress-content-wrapper": "_progress-content-wrapper_1hfbi_35",
  convex: tr
}, ar = {
  $style: lr
}, sr = /* @__PURE__ */ Q(Kn, [["__cssModules", ar], ["__scopeId", "data-v-a260fe74"]]), or = /* @__PURE__ */ Y({
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
  setup(o, { emit: t }) {
    const e = o, a = t, l = E(/* @__PURE__ */ new Map()), _ = E(), h = E(), p = K(!1), w = re(
      () => e.accept === "*" || e.multiple === "directory" ? void 0 : Array.isArray(e.accept) ? he(e.accept, (f) => f.replace(/^\.?(.*)/, ".$1")).join(", ") : e.accept.replace(/^\.?(.*)/, ".$1")
    ), b = re(
      () => w.value ? w.value.split(", ").map((f) => f.toUpperCase().substring(1)).reduce((f, v, y, B) => `${f}${y < B.length - 1 ? ", " : " or "}${v}`) : "All Files"
    ), k = re(
      () => e.placeholder ?? `Drag ${e.multiple ? "files" : "a file"} here or click to browse`
    ), { open: m, onChange: z } = jt({
      accept: w.value,
      multiple: !!e.multiple,
      reset: !0
    }), { isOverDropZone: c } = Lt(_, (f) => {
      C(f ?? []);
    }), C = (f) => {
      f.map((v) => {
        var y;
        return {
          file: v,
          filename: v.name.replace(/\.[^/.]+$/, ""),
          type: ((y = v.name.split(".").pop()) == null ? void 0 : y.toUpperCase()) ?? (v.type || "BINARY"),
          reader: new FileReader(),
          status: K("pending"),
          progress: K(0)
        };
      }).map((v) => ({
        ...v,
        abort: () => {
          v.status() === "pending" || v.status() === "progressing" ? (v.status.set("aborted"), v.reader.abort(), a("abort", v.file.name)) : l.value.delete(v.file.name);
        },
        delete: () => {
          l.value.delete(v.file.name), a("delete", v.file.name);
        }
      })).forEach((v) => {
        e.readAs !== "formData" && e.readAs !== "stream" && (v.reader.onprogress = (y) => {
          v.status.set("progressing"), y.lengthComputable && v.progress.set(y.loaded / y.total);
        }, v.reader.onloadstart = () => {
          v.status.set("progressing");
        }, v.reader.onabort = () => {
          v.status.set("aborted");
        }, v.reader.onerror = () => {
          v.status.set("failed");
        }), l.value.set(v.file.name, v);
      }), M();
    }, M = () => {
      const f = new FormData(), v = {
        payload: /* @__PURE__ */ new Map(),
        files: Array()
      };
      l.value.forEach((y) => {
        const B = {
          ...Ct(y.file, ["name", "lastModified", "webkitRelativePath", "size", "type"]),
          status: y.status,
          progress: y.progress,
          abort: y.abort,
          delete: y.delete
        };
        switch (v.files.push(B), e.readAs) {
          case "formData":
            f.append("file", y.file, y.file.name), e.multiple ? v.files.length === f.getAll("file").length && a("upload", f, v.files) : a("upload", f, B);
            break;
          case "stream":
            v.payload.set(y.file.name, y.file.stream()), e.multiple ? v.files.length === v.payload.size && a(
              "upload",
              v.payload,
              v.files
            ) : a(
              "upload",
              v.payload.get(y.file.name),
              B
            );
            break;
          default:
            switch (y.reader.onload = () => {
              switch (y.status.set("succeeded"), y.progress.set(1), v.payload.set(y.file.name, y.reader.result), e.multiple ? a("success", y.file.name) : a("success"), e.readAs) {
                case "buffer":
                  e.multiple ? v.files.length === v.payload.size && a("upload", v.payload, v.files) : a("upload", v.payload.get(y.file.name), B);
                  break;
                case "binary":
                  e.multiple ? v.files.length === v.payload.size && a("upload", v.payload, v.files) : a("upload", v.payload.get(y.file.name), B);
                  break;
                case "base64":
                  e.multiple ? v.files.length === v.payload.size && a("upload", v.payload, v.files) : a("upload", v.payload.get(y.file.name), B);
                  break;
                default:
                  e.multiple ? v.files.length === v.payload.size && a("upload", v.payload, v.files) : a("upload", v.payload.get(y.file.name), B);
                  break;
              }
            }, v.payload.set(y.file.name, y.reader.result), e.readAs) {
              case "buffer":
                y.reader.readAsArrayBuffer(y.file);
                break;
              case "binary":
                y.reader.readAsBinaryString(y.file);
                break;
              case "base64":
                y.reader.readAsDataURL(y.file);
                break;
              default:
                y.reader.readAsText(y.file);
                break;
            }
        }
      });
    }, $ = () => {
      if (h.value) {
        const { scrollHeight: f, clientHeight: v } = h.value;
        p.set(f > v + 1);
      }
    };
    return z((f) => {
      C(he(f));
    }), Fe(h, $, {
      window
    }), (f, v) => (d(), g("div", {
      ref_key: "dropZoneRef$",
      ref: _,
      class: s([f.$style["uploader-container"], f.$style.wrapper, f.$style.flex, f.$style.vertical])
    }, [
      i(c) || l.value.size === 0 ? (d(), G(se, {
        key: 0,
        onClick: i(m),
        class: s([
          f.$style["uploader-drop-area"],
          f.$style.wrapper,
          f.$style.flex,
          f.$style.vertical,
          f.$style.behavior,
          f.$style.clickable,
          {
            [f.$style.active]: i(c)
          }
        ]),
        radius: "var(--agh-ref-border-radius-300)",
        variant: "dash"
      }, {
        default: U(() => [
          R(i(le), {
            class: s(f.$style.icon),
            icon: e.icon
          }, null, 8, ["class", "icon"]),
          u("h1", null, T(i(k)), 1),
          u("p", null, T(i(b)), 1)
        ]),
        _: 1
      }, 8, ["onClick", "class"])) : (d(), g("div", {
        key: 1,
        ref_key: "wrapperRef$",
        ref: h,
        class: s([
          f.$style["uploader-file-list"],
          f.$style.wrapper,
          f.$style.flex,
          f.$style.vertical,
          {
            [f.$style.overflowed]: i(p)()
          }
        ])
      }, [
        (d(!0), g(O, null, H(l.value, ([y, B]) => (d(), G(se, {
          key: `file-${y}`,
          class: s([f.$style["uploader-file-card"], f.$style.wrapper, f.$style.flex, f.$style.horizontal]),
          "has-stroke": !1,
          radius: "var(--agh-ref-border-radius-400)",
          variant: "flat"
        }, {
          default: U(() => [
            u("div", {
              class: s([f.$style.icon, f.$style[B.status()]])
            }, [
              R(i(le), {
                icon: B.status() === "progressing" ? "fa6-solid:upload" : B.status() === "failed" ? "fa6-solid:circle-xmark" : B.status() === "succeeded" ? "fa6-solid:circle-check" : B.status() === "aborted" ? "fa6-solid:circle-stop" : e.icon
              }, null, 8, ["icon"])
            ], 2),
            u("div", {
              class: s([
                f.$style["uploader-file-content"],
                f.$style.wrapper,
                f.$style.flex,
                f.$style.vertical
              ])
            }, [
              u("h1", null, T(B.filename), 1),
              u("p", null, T(B.type) + "・" + T(i(nl).humanizeByte(B.file.size)), 1)
            ], 2),
            B.status() === "progressing" ? (d(), g("div", {
              key: 0,
              class: s([
                f.$style["uploader-file-progress"],
                f.$style.wrapper,
                f.$style.flex,
                f.$style.horizontal
              ])
            }, [
              R(sr, {
                class: s(f.$style["uploader-file-progress"]),
                value: B.progress()
              }, null, 8, ["class", "value"]),
              u("p", null, T((B.progress() * 100).toFixed(0)) + "%", 1)
            ], 2)) : L("", !0),
            B.status() === "succeeded" ? (d(), G(J, {
              key: 1,
              onClick: (V) => B.delete(),
              class: s(f.$style.button),
              icon: "fa6-solid:trash",
              variant: "text"
            }, null, 8, ["onClick", "class"])) : (d(), G(J, {
              key: 2,
              onClick: (V) => B.abort(),
              class: s(f.$style.button),
              icon: "fa6-solid:xmark",
              variant: "text"
            }, null, 8, ["onClick", "class"]))
          ]),
          _: 2
        }, 1032, ["class"]))), 128))
      ], 2))
    ], 2));
  }
}), nr = "_behavior_rzksq_1", rr = "_clickable_rzksq_1", ir = "_disabled_rzksq_4", ur = "_draggable_rzksq_7", cr = "_move_rzksq_7", dr = "_loading_rzksq_10", pr = "_wrapper_rzksq_14", _r = "_flex_rzksq_25", fr = "_horizontal_rzksq_61", vr = "_wrap_rzksq_14", yr = "_vertical_rzksq_73", mr = "_grid_rzksq_85", hr = "_active_rzksq_104", $r = "_icon_rzksq_107", gr = "_overflowed_rzksq_132", br = "_succeeded_rzksq_165", kr = "_failed_rzksq_168", wr = "_aborted_rzksq_171", zr = "_progressing_rzksq_174", Mr = "_pending_rzksq_177", Cr = "_button_rzksq_180", Sr = {
  behavior: nr,
  clickable: rr,
  disabled: ir,
  draggable: ur,
  move: cr,
  loading: dr,
  wrapper: pr,
  flex: _r,
  "col-1": "_col-1_rzksq_25",
  "col-2": "_col-2_rzksq_28",
  "col-3": "_col-3_rzksq_31",
  "col-4": "_col-4_rzksq_34",
  "col-5": "_col-5_rzksq_37",
  "col-6": "_col-6_rzksq_40",
  "col-7": "_col-7_rzksq_43",
  "col-8": "_col-8_rzksq_46",
  "col-9": "_col-9_rzksq_49",
  "col-10": "_col-10_rzksq_52",
  "col-11": "_col-11_rzksq_55",
  "col-12": "_col-12_rzksq_58",
  horizontal: fr,
  wrap: vr,
  vertical: yr,
  grid: mr,
  "uploader-container": "_uploader-container_rzksq_91",
  "uploader-drop-area": "_uploader-drop-area_rzksq_98",
  active: hr,
  icon: $r,
  "uploader-file-list": "_uploader-file-list_rzksq_124",
  overflowed: gr,
  "uploader-file-card": "_uploader-file-card_rzksq_154",
  succeeded: br,
  failed: kr,
  aborted: wr,
  progressing: zr,
  pending: Mr,
  button: Cr,
  "uploader-file-content": "_uploader-file-content_rzksq_183",
  "uploader-file-progress": "_uploader-file-progress_rzksq_197"
}, Br = {
  $style: Sr
}, Mc = /* @__PURE__ */ Q(or, [["__cssModules", Br], ["__scopeId", "data-v-5a5f061b"]]), be = (o) => (de("data-v-4ec8c9f8"), o = o(), pe(), o), Vr = /* @__PURE__ */ be(() => /* @__PURE__ */ u("linearGradient", {
  id: "loading-gradient",
  gradientUnits: "userSpaceOnUse",
  x1: "4.43603",
  x2: "31.564",
  y1: "1.76963e-07",
  y2: "36"
}, [
  /* @__PURE__ */ u("stop", {
    offset: "0.1003",
    "stop-color": "#CEF0F4"
  }),
  /* @__PURE__ */ u("stop", {
    offset: "0.8997",
    "stop-color": "#35BCCC"
  })
], -1)), Ar = /* @__PURE__ */ be(() => /* @__PURE__ */ u("clipPath", { id: "clip" }, [
  /* @__PURE__ */ u("rect", {
    fill: "white",
    height: "36",
    width: "36"
  })
], -1)), Dr = {
  key: 0,
  "clip-path": "url(#clip)"
}, qr = /* @__PURE__ */ be(() => /* @__PURE__ */ u("path", { d: "M0.0703125 16.8125C0.421875 13.1562 1.82812 9.78125 4.07812 7.03906L7.3125 10.2734C5.83594 12.1016 4.85156 14.3516 4.57031 16.8125H0.0703125ZM9.70312 7.88281L6.46875 4.64844C9.21094 2.39844 12.5859 0.921875 16.3125 0.640625V5.14062C13.7812 5.42188 11.5312 6.40625 9.70312 7.88281ZM19.6875 31.9297C22.1484 31.6484 24.3984 30.6641 26.2266 29.1875L29.4609 32.4219C26.7188 34.6719 23.3438 36.0781 19.6875 36.4297V31.9297ZM28.6172 26.7969C30.0938 24.9688 31.0781 22.6484 31.3594 20.1875H35.8594C35.5781 23.9141 34.1016 27.2891 31.8516 30.0312L28.6172 26.7969ZM6.46875 32.4219L9.70312 29.1875C11.5312 30.6641 13.7812 31.6484 16.2422 31.9297V36.4297C12.5859 36.0781 9.21094 34.6719 6.46875 32.4219ZM4.07812 30.0312C1.82812 27.2891 0.421875 23.9141 0.0703125 20.1875H4.57031C4.85156 22.7188 5.83594 24.9688 7.3125 26.7969L4.07812 30.0312ZM29.4609 4.64844L26.2266 7.88281C24.3984 6.40625 22.1484 5.42188 19.6875 5.14062V0.640625C23.3438 0.921875 26.7188 2.39844 29.4609 4.64844ZM28.6172 10.2734L31.8516 7.03906C34.1016 9.78125 35.5781 13.1562 35.8594 16.8828H31.3594C31.0781 14.3516 30.0938 12.1016 28.6172 10.2734Z" }, null, -1)), Nr = /* @__PURE__ */ be(() => /* @__PURE__ */ u("path", { d: "M0.0703125 16.8125C0.421875 13.1562 1.82812 9.78125 4.07812 7.03906L7.3125 10.2734C5.83594 12.1016 4.85156 14.3516 4.57031 16.8125H0.0703125Z" }, null, -1)), Tr = [
  qr,
  Nr
], Or = {
  key: 1,
  d: "M19 36.5C12.5312 36.5 6.625 33.125 3.39062 27.5C0.15625 21.9453 0.15625 15.125 3.39062 9.5C6.625 3.94531 12.5312 0.5 19 0.5C25.3984 0.5 31.3047 3.94531 34.5391 9.5C37.7734 15.125 37.7734 21.9453 34.5391 27.5C31.3047 33.125 25.3984 36.5 19 36.5ZM13.3047 12.8047C12.6016 13.5078 12.6016 14.5625 13.3047 15.1953L16.6094 18.5L13.3047 21.8047C12.6016 22.5078 12.6016 23.5625 13.3047 24.1953C13.9375 24.8984 14.9922 24.8984 15.625 24.1953L18.9297 20.8906L22.2344 24.1953C22.9375 24.8984 23.9922 24.8984 24.625 24.1953C25.3281 23.5625 25.3281 22.5078 24.625 21.8047L21.3203 18.5L24.625 15.1953C25.3281 14.5625 25.3281 13.5078 24.625 12.8047C23.9922 12.1719 22.9375 12.1719 22.2344 12.8047L18.9297 16.1094L15.625 12.8047C14.9922 12.1719 13.9375 12.1719 13.3047 12.8047Z"
}, jr = {
  key: 2,
  d: "M19 36.5c-6.469 0-12.375-3.375-15.61-9-3.234-5.555-3.234-12.375 0-18C6.626 3.945 12.532.5 19 .5c6.398 0 12.305 3.445 15.54 9 3.233 5.625 3.233 12.445 0 18a17.869 17.869 0 0 1-15.54 9Zm7.945-21.305h-.07c.703-.633.703-1.687 0-2.39a1.655 1.655 0 0 0-2.32 0L16.75 20.68l-3.305-3.305c-.703-.703-1.758-.703-2.39 0a1.54 1.54 0 0 0 0 2.32l4.5 4.5c.633.703 1.687.703 2.39 0l9-9Z"
}, Lr = /* @__PURE__ */ be(() => /* @__PURE__ */ u("path", { d: "M36 18C36 27.9411 27.9411 36 18 36C8.05887 36 0 27.9411 0 18C0 8.05887 8.05887 0 18 0C27.9411 0 36 8.05887 36 18ZM5.4 18C5.4 24.9588 11.0412 30.6 18 30.6C24.9588 30.6 30.6 24.9588 30.6 18C30.6 11.0412 24.9588 5.4 18 5.4C11.0412 5.4 5.4 11.0412 5.4 18Z" }, null, -1)), Pr = /* @__PURE__ */ be(() => /* @__PURE__ */ u("path", {
  d: "M18 2.7C18 1.20883 19.2155 -0.0207358 20.69 0.202112C23.5283 0.631112 26.2367 1.73508 28.5801 3.4377C31.6554 5.67201 33.9444 8.82252 35.119 12.4377C36.2937 16.0529 36.2937 19.9471 35.119 23.5623C34.2239 26.3172 32.6817 28.8023 30.6375 30.8177C29.5757 31.8646 27.8696 31.5844 26.9931 30.378C26.1166 29.1716 26.412 27.4985 27.4044 26.3855C28.5594 25.0902 29.441 23.5626 29.9833 21.8936C30.8056 19.363 30.8056 16.637 29.9833 14.1064C29.1611 11.5758 27.5588 9.3704 25.4061 7.80639C23.9863 6.77488 22.3753 6.05726 20.6794 5.68818C19.2224 5.37107 18 4.19117 18 2.7Z",
  fill: "url(#loading-gradient)"
}, null, -1)), Rr = /* @__PURE__ */ Y({
  __name: "LoadingIcon",
  props: {
    status: {}
  },
  setup(o) {
    const t = o;
    return (e, a) => (d(), g("div", {
      class: s(e.$style["icon-wrapper"])
    }, [
      R(Ve, {
        class: s([e.$style["icon-entity"], e.$style[t.status]]),
        "shape-rendering": "geometricPrecision",
        viewBox: "0 0 36 36"
      }, {
        defs: U(() => [
          Vr,
          Ar
        ]),
        path: U(() => [
          t.status === "waiting" ? (d(), g("g", Dr, Tr)) : t.status === "failed" ? (d(), g("path", Or)) : t.status === "succeeded" ? (d(), g("path", jr)) : (d(), g(O, { key: 3 }, [
            Lr,
            Pr
          ], 64))
        ]),
        _: 1
      }, 8, ["class"])
    ], 2));
  }
}), Ir = "_waiting_1w7k2_179", Er = "_loading_1w7k2_182", Fr = "_failed_1w7k2_185", Hr = "_succeeded_1w7k2_188", Ur = "_rotate_1w7k2_1", Zr = "_beat_1w7k2_1", Wr = "_bounce_1w7k2_1", Yr = "_fade_1w7k2_1", Gr = "_flip_1w7k2_1", Qr = "_shake_1w7k2_1", Xr = "_spin_1w7k2_1", Jr = {
  "icon-wrapper": "_icon-wrapper_1w7k2_170",
  "icon-entity": "_icon-entity_1w7k2_173",
  "fade-in": "_fade-in_1w7k2_1",
  waiting: Ir,
  loading: Er,
  failed: Fr,
  succeeded: Hr,
  rotate: Ur,
  "step-rotate": "_step-rotate_1w7k2_1",
  "jump-in": "_jump-in_1w7k2_1",
  beat: Zr,
  bounce: Wr,
  fade: Yr,
  "beat-fade": "_beat-fade_1w7k2_1",
  flip: Gr,
  shake: Qr,
  spin: Xr
}, xr = {
  $style: Jr
}, Cc = /* @__PURE__ */ Q(Rr, [["__cssModules", xr], ["__scopeId", "data-v-4ec8c9f8"]]), Kr = ["height", "width"], ei = /* @__PURE__ */ u("feFlood", {
  "flood-opacity": "0",
  result: "BackgroundImageFix"
}, null, -1), ti = /* @__PURE__ */ u("feBlend", {
  in: "SourceGraphic",
  in2: "BackgroundImageFix",
  result: "shape"
}, null, -1), li = /* @__PURE__ */ u("feColorMatrix", {
  in: "SourceAlpha",
  result: "hardAlpha",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}, null, -1), ai = /* @__PURE__ */ u("feOffset", {
  dx: "1",
  dy: "1"
}, null, -1), si = /* @__PURE__ */ u("feGaussianBlur", { stdDeviation: "1" }, null, -1), oi = /* @__PURE__ */ u("feComposite", {
  in2: "hardAlpha",
  k2: "-1",
  k3: "1",
  operator: "arithmetic"
}, null, -1), ni = /* @__PURE__ */ u("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" }, null, -1), ri = /* @__PURE__ */ u("feBlend", {
  in2: "shape",
  result: "effect-innerShadow-1"
}, null, -1), ii = /* @__PURE__ */ u("feColorMatrix", {
  in: "SourceAlpha",
  result: "hardAlpha",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}, null, -1), ui = /* @__PURE__ */ u("feOffset", {
  dx: "2",
  dy: "3"
}, null, -1), ci = /* @__PURE__ */ u("feGaussianBlur", { stdDeviation: "1.5" }, null, -1), di = /* @__PURE__ */ u("feComposite", {
  in2: "hardAlpha",
  k2: "-1",
  k3: "1",
  operator: "arithmetic"
}, null, -1), pi = /* @__PURE__ */ u("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.11 0" }, null, -1), _i = /* @__PURE__ */ u("feBlend", {
  in2: "effect-innerShadow-1",
  result: "effect-innerShadow2"
}, null, -1), fi = /* @__PURE__ */ u("feColorMatrix", {
  in: "SourceAlpha",
  result: "hardAlpha",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}, null, -1), vi = /* @__PURE__ */ u("feOffset", {
  dx: "5",
  dy: "6"
}, null, -1), yi = /* @__PURE__ */ u("feGaussianBlur", { stdDeviation: "2" }, null, -1), mi = /* @__PURE__ */ u("feComposite", {
  in2: "hardAlpha",
  k2: "-1",
  k3: "1",
  operator: "arithmetic"
}, null, -1), hi = /* @__PURE__ */ u("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" }, null, -1), $i = /* @__PURE__ */ u("feBlend", {
  in2: "effect-innerShadow2",
  result: "effect-innerShadow3"
}, null, -1), gi = /* @__PURE__ */ u("feColorMatrix", {
  in: "SourceAlpha",
  result: "hardAlpha",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}, null, -1), bi = /* @__PURE__ */ u("feOffset", {
  dx: "8",
  dy: "10"
}, null, -1), ki = /* @__PURE__ */ u("feGaussianBlur", { stdDeviation: "2.5" }, null, -1), wi = /* @__PURE__ */ u("feComposite", {
  in2: "hardAlpha",
  k2: "-1",
  k3: "1",
  operator: "arithmetic"
}, null, -1), zi = /* @__PURE__ */ u("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0" }, null, -1), Mi = /* @__PURE__ */ u("feBlend", {
  in2: "effect-innerShadow3",
  result: "effect-innerShadow4"
}, null, -1), Ci = [
  ei,
  ti,
  li,
  ai,
  si,
  oi,
  ni,
  ri,
  ii,
  ui,
  ci,
  di,
  pi,
  _i,
  fi,
  vi,
  yi,
  mi,
  hi,
  $i,
  gi,
  bi,
  ki,
  wi,
  zi,
  Mi
], Si = /* @__PURE__ */ Y({
  __name: "InnerShadowDeco",
  props: {
    height: {},
    width: {}
  },
  setup(o) {
    const t = o;
    return (e, a) => (d(), g("filter", {
      id: "effects--inner-shadow--deco",
      height: t.height,
      width: t.width,
      "color-interpolation-filters": "sRGB",
      filterUnits: "userSpaceOnUse",
      x: "0",
      y: "0"
    }, Ci, 8, Kr));
  }
}), nt = (o) => (de("data-v-44ae6bab"), o = o(), pe(), o), Bi = ["innerHTML"], Vi = ["cx", "cy", "r"], Ai = ["cx", "cy", "r"], Di = /* @__PURE__ */ nt(() => /* @__PURE__ */ u("mask", { id: "progress-groove-mask" }, [
  /* @__PURE__ */ u("use", {
    fill: "#fff",
    href: "#progress-groove-outer"
  }),
  /* @__PURE__ */ u("use", {
    fill: "#000",
    href: "#progress-groove-inner"
  })
], -1)), qi = /* @__PURE__ */ nt(() => /* @__PURE__ */ u("use", {
  href: "#progress-groove-outer",
  mask: "url(#progress-groove-mask)"
}, null, -1)), Ni = [
  qi
], Ti = ["cx", "cy", "r", "stroke-dasharray", "stroke-dashoffset", "stroke-width"], Oi = /* @__PURE__ */ nt(() => /* @__PURE__ */ u("clipPath", { id: "progress-content-clip" }, [
  /* @__PURE__ */ u("use", { href: "#progress-groove-inner" })
], -1)), ji = { "clip-path": "url(#progress-content-clip)" }, Li = ["height", "width", "x", "y"], Pi = /* @__PURE__ */ Y({
  __name: "ProgressCircle",
  props: {
    value: { default: 0 },
    variant: { default: "concave" },
    thickness: { default: 12 }
  },
  setup(o) {
    const t = o, e = E(), { width: a, height: l } = Be(e), _ = re(
      () => j.clamp(j.min(a.value, l.value) / 2 - t.thickness / 2, 0, 1 / 0)
    ), h = re(() => _.value * 2 * j.PI), p = re(() => ({
      x: a.value / 2,
      y: l.value / 2
    })), w = K(""), b = () => {
      e.value && t.variant === "convex" && (w.set(
        lt("--progress-value-fill-gradient", e, {
          observe: !0
        }).value
      ), w() || ot(b, 1));
    };
    return _e(() => {
      b();
    }), (k, m) => (d(), g("div", {
      ref_key: "wrapperRef$",
      ref: e,
      class: s([k.$style["progress-container"], k.$style[t.variant]])
    }, [
      R(Ve, {
        height: i(l),
        width: i(a)
      }, {
        defs: U(() => [
          u("g", {
            innerHTML: i(w)()
          }, null, 8, Bi),
          R(Si, {
            height: i(l),
            width: i(a)
          }, null, 8, ["height", "width"]),
          u("circle", {
            id: "progress-groove-outer",
            cx: i(p).x,
            cy: i(p).y,
            r: i(_) + t.thickness / 2
          }, null, 8, Vi),
          u("circle", {
            id: "progress-groove-inner",
            cx: i(p).x,
            cy: i(p).y,
            r: i(_) - t.thickness / 2
          }, null, 8, Ai),
          Di
        ]),
        path: U(() => [
          u("g", {
            class: s(k.$style["progress-groove"])
          }, Ni, 2),
          u("g", {
            class: s(k.$style["progress-value"])
          }, [
            u("circle", {
              cx: i(p).x,
              cy: i(p).y,
              r: i(_),
              "stroke-dasharray": `${t.value * i(h)} ${(1 - t.value) * i(h)}`,
              "stroke-dashoffset": (t.value + 0.25) * i(h),
              "stroke-width": t.thickness,
              fill: "transparent"
            }, null, 8, Ti)
          ], 2),
          Oi,
          u("g", ji, [
            (d(), g("foreignObject", {
              height: i(_) * 2,
              width: i(_) * 2,
              x: i(p).x - i(_),
              y: i(p).y - i(_)
            }, [
              u("div", {
                class: s(k.$style["progress-content-wrapper"])
              }, [
                u("label", null, T((t.value * 100).toFixed(0)) + "%", 1)
              ], 2)
            ], 8, Li))
          ])
        ]),
        _: 1
      }, 8, ["height", "width"])
    ], 2));
  }
}), Ri = "_concave_1k1hl_23", Ii = "_convex_1k1hl_55", Ei = {
  "progress-container": "_progress-container_1k1hl_1",
  "progress-groove": "_progress-groove_1k1hl_11",
  "progress-value": "_progress-value_1k1hl_11",
  concave: Ri,
  "progress-content-wrapper": "_progress-content-wrapper_1k1hl_35",
  convex: Ii
}, Fi = {
  $style: Ei
}, Sc = /* @__PURE__ */ Q(Pi, [["__cssModules", Fi], ["__scopeId", "data-v-44ae6bab"]]), Hi = ["value"], Ui = /* @__PURE__ */ Y({
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
  setup(o, { emit: t }) {
    $e((p) => ({
      "39cb2cc4": p.thumbColor
    }));
    const e = o, a = t, l = E(null), _ = q(() => Number(e.modelValue) / Number(e.max) * 100), { onTrigger: h } = ge(
      (p) => {
        if (e.disabled)
          p.preventDefault(), p.stopPropagation();
        else {
          const w = Number(p.target.value);
          a("update:modelValue", w);
        }
      },
      e.eventSignalOptions ?? {
        flush: "post"
      }
    );
    return (p, w) => (d(), g("input", He({
      ref_key: "inputRangeRef$",
      ref: l,
      onInput: w[0] || (w[0] = //@ts-ignore
      (...b) => i(h) && i(h)(...b))
    }, e, {
      style: {
        background: `linear-gradient(to right, ${e.progressColor} ${_.value}%,${e.trackColor} ${_.value}%)`
      },
      value: e.modelValue,
      type: "range"
    }), null, 16, Hi));
  }
}), Zi = {}, Wi = {
  $style: Zi
}, Bc = /* @__PURE__ */ Q(Ui, [["__cssModules", Wi], ["__scopeId", "data-v-b4e2c708"]]), Yi = /* @__PURE__ */ Y({
  __name: "SearchBar",
  props: /* @__PURE__ */ me({
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
    groupBy: {},
    modelValue: {},
    autocomplete: { type: Boolean },
    options: {}
  }, {
    modelValue: {
      default: ""
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ me(["select", "search"], ["update:modelValue"]),
  setup(o, { emit: t }) {
    var k, m, z;
    const e = o, a = t, l = ue(o, "modelValue"), _ = q(
      () => new Ie(
        Array.isArray(e.options) ? e.options.map((c, C) => [C, c]) : e.options
      )
    ), h = K(!1), p = (c) => {
      var C, M, $, f;
      c && (l.value = ((C = e.fields) == null ? void 0 : C.title) ?? ((M = e.fields) == null ? void 0 : M.key) ? ce(c, (($ = e.fields) == null ? void 0 : $.title) ?? ((f = e.fields) == null ? void 0 : f.key) ?? "", !0) ?? "" : String(c), a("select", c), h.set(!0));
    }, { result: w } = kt(_, {
      query: l,
      getters: ((k = e.fields) == null ? void 0 : k.searchKeys) ?? [((m = e.fields) == null ? void 0 : m.key) ?? "", ((z = e.fields) == null ? void 0 : z.title) ?? ""].filter(Boolean) ?? ((c) => String(c)),
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
    }), b = E();
    return te(w, (c) => {
      a("search", Array.isArray(e.options) ? [...c.values()] : c);
    }), (c, C) => (d(), g("div", {
      class: s(c.$style["search-bar--container"])
    }, [
      R(De, {
        modelValue: l.value,
        "onUpdate:modelValue": C[0] || (C[0] = (M) => l.value = M),
        onBlur: C[1] || (C[1] = (M) => i(h).set(!0)),
        onClick: C[2] || (C[2] = (M) => i(h).set(!1)),
        onFocus: C[3] || (C[3] = (M) => i(h).set(!1)),
        autofocus: e.autofocus,
        class: s(c.$style["search-bar--input"]),
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
      e.autocomplete && l.value && i(w).size > 0 && !i(h)() ? (d(), G(Ee, {
        key: 0,
        "onUpdate:modelValue": p,
        class: s(c.$style["search-bar--menu"]),
        fields: e.fields,
        "group-by": e.groupBy,
        "model-value": b.value,
        options: i(w)
      }, null, 8, ["class", "fields", "group-by", "model-value", "options"])) : L("", !0)
    ], 2));
  }
}), Gi = {
  "search-bar--container": "_search-bar--container_1ggln_1",
  "search-bar--input": "_search-bar--input_1ggln_7",
  "search-bar--menu": "_search-bar--menu_1ggln_10"
}, Qi = {
  $style: Gi
}, Vc = /* @__PURE__ */ Q(Yi, [["__cssModules", Qi], ["__scopeId", "data-v-6fc8a816"]]), Xi = /* @__PURE__ */ Y({
  __name: "SwitchButton",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 },
    eventSignalOptions: {}
  },
  emits: ["update:modelValue"],
  setup(o, { emit: t }) {
    const e = o, a = t, { onTrigger: l } = ge(
      (_) => {
        e.disabled ? (_.preventDefault(), _.stopPropagation()) : a("update:modelValue", !e.modelValue);
      },
      e.eventSignalOptions ?? {
        flush: "post"
      }
    );
    return (_, h) => (d(), g("div", {
      onClick: h[0] || (h[0] = //@ts-ignore
      (...p) => i(l) && i(l)(...p)),
      class: s([_.$style.switch, e.modelValue && _.$style.switch_active])
    }, [
      u("div", {
        class: s([_.$style.slider, e.modelValue && _.$style.slider_active])
      }, null, 2)
    ], 2));
  }
}), Ji = "_switch_active_13jol_9", xi = "_slider_13jol_12", Ki = "_slider_active_13jol_23", eu = {
  switch: "_switch_13jol_1",
  switch_active: Ji,
  slider: xi,
  slider_active: Ki
}, tu = {
  $style: eu
}, Ac = /* @__PURE__ */ Q(Xi, [["__cssModules", tu], ["__scopeId", "data-v-81a8510a"]]), lu = ["value"], au = ["for"], su = /* @__PURE__ */ Y({
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
  setup(o, { emit: t }) {
    const e = o, a = t, { onTrigger: l } = ge(
      (w) => {
        e.disabled ? (w.preventDefault(), w.stopPropagation()) : (p(), a("update:modelValue", w.target.value));
      },
      e.eventSignalOptions ?? {
        flush: "post"
      }
    ), _ = E(), h = K(""), p = () => {
      var w, b;
      h.set(
        _.value ? (w = _.value) != null && w.validity.valid ? "" : bt(_.value.validity, e.invalidMessage ?? {}) ?? _.value.validationMessage : ""
      ), (b = _.value) != null && b.validity && a("validation", _.value.validity);
    };
    return _e(() => {
      p();
    }), (w, b) => (d(), G(se, {
      class: s([w.$style["textarea-container"]]),
      radius: "var(--agh-ref-border-radius-400)",
      variant: "flat"
    }, {
      default: U(() => [
        u("textarea", He({
          ref_key: "inputRef$",
          ref: _,
          onInput: b[0] || (b[0] = //@ts-ignore
          (...k) => i(l) && i(l)(...k)),
          class: [w.$style["textarea-input"]]
        }, e, {
          value: e.modelValue
        }), null, 16, lu),
        i(h)() ? (d(), g("label", {
          key: 0,
          class: s([w.$style["textarea-label"]]),
          for: e.name
        }, [
          R(i(le), {
            class: s([w.$style["textarea-label--icon"]]),
            icon: "fa6-solid:circle-xmark"
          }, null, 8, ["class"]),
          u("span", {
            class: s([w.$style["textarea-label--value"]])
          }, T(i(h)()), 3)
        ], 10, au)) : L("", !0)
      ]),
      _: 1
    }, 8, ["class"]));
  }
}), ou = {
  "textarea-container": "_textarea-container_v6fbk_1",
  "textarea-input": "_textarea-input_v6fbk_12",
  "icon-align--left": "_icon-align--left_v6fbk_16",
  "icon-align--right": "_icon-align--right_v6fbk_16",
  "textarea-label--icon": "_textarea-label--icon_v6fbk_30",
  "textarea-label": "_textarea-label_v6fbk_30",
  "textarea-label--value": "_textarea-label--value_v6fbk_107"
}, nu = {
  $style: ou
}, Dc = /* @__PURE__ */ Q(su, [["__cssModules", nu], ["__scopeId", "data-v-1c80add8"]]), ru = /* @__PURE__ */ Y({
  __name: "AttackMatrix",
  props: {
    items: {},
    disabled: { type: Boolean, default: !1 },
    showDetected: { type: Boolean, default: !1 }
  },
  setup(o) {
    const t = o;
    return (e, a) => (d(), g("div", {
      class: s([e.$style.matrix, t.disabled && e.$style["matrix-disabled"]])
    }, [
      u("div", {
        class: s(e.$style.line)
      }, null, 2),
      u("div", {
        class: s(e.$style.container)
      }, [
        (d(!0), g(O, null, H(t.items, (l, _) => {
          var h, p;
          return d(), g("div", {
            key: _,
            class: s(e.$style.card)
          }, [
            u("div", {
              class: s(e.$style.body)
            }, [
              u("div", {
                class: s(e.$style.title)
              }, T(l.label), 3),
              u("div", {
                class: s(e.$style.description)
              }, T(l.description), 3)
            ], 2),
            t.showDetected ? (d(), g("div", {
              key: 0,
              class: s(e.$style.detected)
            }, [
              u("div", {
                class: s(e.$style.label)
              }, [
                R(i(le), { icon: "fa6-solid:user" }),
                mt(" Detected ")
              ], 2),
              u("div", {
                class: s(e.$style.fraction)
              }, [
                u("div", {
                  class: s(e.$style.numerator)
                }, T((h = l.detected) == null ? void 0 : h.count), 3),
                u("div", {
                  class: s(e.$style.denominator)
                }, " / ", 2),
                u("div", {
                  class: s(e.$style.denominator)
                }, T((p = l.detected) == null ? void 0 : p.total), 3)
              ], 2)
            ], 2)) : L("", !0)
          ], 2);
        }), 128))
      ], 2)
    ], 2));
  }
}), iu = "_matrix_1jtlz_1", uu = "_line_1jtlz_5", cu = "_container_1jtlz_10", du = "_card_1jtlz_16", pu = "_body_1jtlz_25", _u = "_title_1jtlz_30", fu = "_description_1jtlz_34", vu = "_detected_1jtlz_38", yu = "_label_1jtlz_43", mu = "_fraction_1jtlz_50", hu = "_denominator_1jtlz_55", $u = "_numerator_1jtlz_59", gu = {
  matrix: iu,
  line: uu,
  container: cu,
  card: du,
  body: pu,
  title: _u,
  description: fu,
  detected: vu,
  label: yu,
  fraction: mu,
  denominator: hu,
  numerator: $u,
  "matrix-disabled": "_matrix-disabled_1jtlz_66"
}, bu = {
  $style: gu
}, qc = /* @__PURE__ */ Q(ru, [["__cssModules", bu], ["__scopeId", "data-v-f4de3057"]]), ku = /* @__PURE__ */ Y({
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
  setup(o, { emit: t }) {
    const e = o, a = t, l = E(), _ = {
      key: "detail",
      title: "{{ $.label }}",
      content: "{{ $.detail }}",
      icon: "icon"
    }, h = {
      key: "value",
      title: "{{ $.value }}"
    }, p = re(
      () => (e.filterOptions ?? []).map(
        (r) => gt(r.multi ? r.options : he(e.items, r.field)).map((S) => ({
          ...r,
          value: S
        }))
      ).flat()
    ), w = E(e.modelValue ?? ""), b = q({
      get: () => e.modelValue ?? w.value,
      set: (r) => {
        a("update:modelValue", r ?? ""), e.modelValue || (w.value = r ?? "");
      }
    }), k = E(wl(e.sortOptions)), m = q({
      get: () => e.sort ?? k.value,
      set: (r) => {
        r && (v.set(!0), a("update:sort", r), e.sort || (k.value = r));
      }
    }), z = E([]), c = q({
      get: () => e.filter ?? z.value,
      set: (r) => {
        a("update:filter", r ?? []), e.filter || (z.value = r ?? []);
      }
    }), C = E(), M = q({
      get: () => e.selected !== void 0 ? e.selected : C.value,
      set: (r) => {
        r && (a("update:selected", r), e.selected || (C.value = r));
      }
    }), $ = E(e.items), f = K(!0), v = K(!0), y = K(!1), B = () => {
      if (l.value) {
        const { scrollHeight: r, clientHeight: S } = l.value;
        y.set(r > S + 1);
      }
    }, V = (r) => r.update((S) => !S), Z = (r) => {
      M.value = r;
    }, x = () => {
      var n, A;
      const r = e.items.map(
        (F) => ({
          ...F,
          selected: Oe(F, e.fields.key) === Oe(M.value, e.fields.key)
        })
      ), S = b.value ? kl(
        r,
        (F) => Oe(F, e.fields.title ?? e.fields.key).includes(b.value)
      ) : r, P = Mt(
        S,
        Ge([((n = m.value) == null ? void 0 : n.field) ?? e.fields.key]),
        Ge([((A = m.value) == null ? void 0 : A.direction) ?? "asc"])
      ), N = Ce(c.value) ? P : Sl(
        ...he(
          tt(c.value, "field"),
          (F) => Ge(
            F.map(
              (I) => I.multi ? P.filter((D) => {
                var W;
                return (W = D[I.field]) == null ? void 0 : W.includes(I.value);
              }) : P.filter((D) => Bl(D, { [I.field]: I.value }))
            )
          )
        ),
        Pt
      );
      $.value = N;
    };
    return Fe(l, B, {
      window
    }), _e(() => {
      x(), B();
    }), Ht(() => {
      x(), B();
    }), te([m, c, b, M], () => {
      x(), B();
    }), (r, S) => (d(), G(se, {
      class: s(r.$style["list-container"]),
      purpose: "container",
      radius: "var(--agh-ref-border-radius-600)"
    }, {
      default: U(() => {
        var P;
        return [
          u("div", {
            class: s(r.$style["list-toolbar"])
          }, [
            R(De, {
              modelValue: b.value,
              "onUpdate:modelValue": S[0] || (S[0] = (N) => b.value = N),
              class: s(r.$style["list-toolbar-search"]),
              type: "search"
            }, null, 8, ["modelValue", "class"]),
            e.filterOptions && !i(Ce)(e.filterOptions) ? Je((d(), g("div", {
              key: 0,
              onKeydown: [
                S[3] || (S[3] = ye((N) => i(f).set(!0), ["enter"])),
                S[4] || (S[4] = ye((N) => i(f).set(!0), ["esc"]))
              ],
              class: s(r.$style["list-toolbar-tool"])
            }, [
              R(J, {
                onClick: S[1] || (S[1] = (N) => V(i(f))),
                class: s(r.$style["list-toolbar-button"]),
                clicked: !i(f)(),
                icon: "fa6-solid:filter",
                variant: "text"
              }, null, 8, ["class", "clicked"]),
              c.value.length > 0 ? (d(), g("span", {
                key: 0,
                class: s(r.$style["list-toolbar-button-deco"])
              }, T(c.value.length), 3)) : L("", !0),
              i(f)() ? L("", !0) : (d(), G(Ee, {
                key: 1,
                modelValue: c.value,
                "onUpdate:modelValue": S[2] || (S[2] = (N) => c.value = N),
                class: s(r.$style["list-toolbar-menu"]),
                fields: h,
                options: i(p),
                "group-by": "label",
                label: "Filter",
                multiple: ""
              }, null, 8, ["modelValue", "class", "options"]))
            ], 34)), [
              [i(et), () => i(f).set(!0)]
            ]) : L("", !0),
            e.sortOptions && !i(Ce)(e.sortOptions) ? Je((d(), g("div", {
              key: 1,
              onKeydown: [
                S[7] || (S[7] = ye((N) => i(v).set(!0), ["enter"])),
                S[8] || (S[8] = ye((N) => i(v).set(!0), ["esc"]))
              ],
              class: s(r.$style["list-toolbar-tool"])
            }, [
              R(J, {
                onClick: S[5] || (S[5] = (N) => V(i(v))),
                class: s(r.$style["list-toolbar-button"]),
                clicked: !i(v)(),
                icon: ((P = m.value) == null ? void 0 : P.icon) ?? "fa6-solid:arrow-down-wide-short",
                variant: "text"
              }, null, 8, ["class", "clicked", "icon"]),
              i(v)() ? L("", !0) : (d(), G(Ee, {
                key: 0,
                modelValue: m.value,
                "onUpdate:modelValue": S[6] || (S[6] = (N) => m.value = N),
                class: s(r.$style["list-toolbar-menu"]),
                fields: _,
                options: e.sortOptions
              }, null, 8, ["modelValue", "class", "options"]))
            ], 34)), [
              [i(et), () => i(v).set(!0)]
            ]) : L("", !0)
          ], 2),
          u("div", {
            ref_key: "wrapperRef$",
            ref: l,
            class: s([
              r.$style["list-wrapper"],
              {
                [r.$style.overflowed]: i(y)()
              }
            ])
          }, [
            R(jl, {
              "group-by": e.groupBy,
              items: $.value
            }, {
              placeholder: U(() => [
                X(r.$slots, "placeholder", {}, void 0, !0)
              ]),
              group: U((N) => [
                u("label", {
                  class: s(r.$style["list-item-label"])
                }, T(N.group), 3)
              ]),
              default: U((N) => [
                R(se, {
                  onClick: (n) => Z(N.item),
                  class: s(r.$style["list-item"]),
                  clickable: !0,
                  color: N.item.selected ? "blue" : "default",
                  radius: "var(--agh-ref-border-radius-400)"
                }, {
                  default: U(() => [
                    X(r.$slots, "default", {
                      index: N.index,
                      item: N.item,
                      selected: N.item.selected
                    }, void 0, !0)
                  ]),
                  _: 2
                }, 1032, ["onClick", "class", "color"])
              ]),
              _: 3
            }, 8, ["group-by", "items"])
          ], 2),
          X(r.$slots, "footer", {}, void 0, !0)
        ];
      }),
      _: 3
    }, 8, ["class"]));
  }
}), wu = "_overflowed_10vs0_81", zu = {
  "list-container": "_list-container_10vs0_1",
  "list-toolbar": "_list-toolbar_10vs0_11",
  "list-toolbar-search": "_list-toolbar-search_10vs0_17",
  "list-toolbar-tool": "_list-toolbar-tool_10vs0_20",
  "list-toolbar-button": "_list-toolbar-button_10vs0_23",
  "list-toolbar-button-deco": "_list-toolbar-button-deco_10vs0_26",
  "list-toolbar-menu": "_list-toolbar-menu_10vs0_45",
  "list-wrapper": "_list-wrapper_10vs0_51",
  overflowed: wu,
  "list-item": "_list-item_10vs0_84",
  "list-item-label": "_list-item-label_10vs0_89"
}, Mu = {
  $style: zu
}, Nc = /* @__PURE__ */ Q(ku, [["__cssModules", Mu], ["__scopeId", "data-v-bb6b5036"]]), Cu = ["onClick"], Su = /* @__PURE__ */ Y({
  __name: "TabGroup",
  props: /* @__PURE__ */ me({
    tabs: {},
    modelValue: {},
    level: { default: "primary" }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(o) {
    $e((c) => ({
      "847bc8a0": b.value
    })), st();
    const t = o, e = ue(o, "modelValue", {
      get() {
        return t.modelValue ?? _.value ?? m.value.values().next().value;
      },
      set(c) {
        return t.modelValue || (_.value = c), h.value !== w.value && (h.value = w.value), c;
      }
    }), a = E(), l = E([]), _ = E(void 0), h = E(null), p = E(rl()), w = q(
      () => e.value ? [...m.value.keys()].indexOf(e.value.id) ?? 0 : 0
    ), b = q(() => `--tab-anchor--${p.value}--${w.value}`), k = q(
      () => (h.value ?? w.value) <= w.value ? "left" : "right"
    ), m = q(
      () => Array.isArray(t.tabs) ? new Map(t.tabs.map((c) => [c.id, c])) : t.tabs
    ), z = (c) => {
      e.value = c;
    };
    return (c, C) => (d(), g("div", {
      class: s([c.$style["tab-group-container"], c.$style.wrapper, c.$style.flex, c.$style.vertical])
    }, [
      u("div", {
        ref_key: "tabWrapperRef$",
        ref: a,
        class: s([
          c.$style["tab-group-wrapper"],
          c.$style.wrapper,
          c.$style.flex,
          c.$style.horizontal,
          c.$style[t.level]
        ])
      }, [
        (d(!0), g(O, null, H(m.value, ([M, $]) => {
          var f;
          return d(), g("div", {
            key: M,
            ref_for: !0,
            ref_key: "tabRefs$",
            ref: l,
            onClick: (v) => z($),
            class: s([
              c.$style["tab-group"],
              c.$style.wrapper,
              c.$style.flex,
              c.$style.horizontal,
              c.$style.behavior,
              c.$style.clickable,
              {
                [c.$style.active]: ((f = e.value) == null ? void 0 : f.id) === M
              }
            ])
          }, [
            $.icon ? (d(), G(i(le), {
              key: 0,
              class: s(c.$style.icon),
              icon: $.icon
            }, null, 8, ["class", "icon"])) : L("", !0),
            u("p", null, T($.name), 1)
          ], 10, Cu);
        }), 128))
      ], 2),
      e.value ? (d(), G(Ut, {
        key: 0,
        class: s(c.$style.transition),
        "enter-active-class": c.$style[`slide-${k.value}-enter-active`],
        "enter-from-class": c.$style[`slide-${k.value}-enter-from`],
        "leave-active-class": c.$style[`slide-${k.value}-leave-active`],
        "leave-from-class": c.$style[`slide-${k.value}-leave-from`],
        mode: "out-in",
        appear: ""
      }, {
        default: U(() => [
          X(c.$slots, e.value.id, {
            id: e.value.id,
            index: w.value,
            tab: e.value
          }, void 0, !0)
        ]),
        _: 3
      }, 8, ["class", "enter-active-class", "enter-from-class", "leave-active-class", "leave-from-class"])) : L("", !0)
    ], 2));
  }
}), Bu = "_wrapper_1spnc_1", Vu = "_flex_1spnc_12", Au = "_horizontal_1spnc_48", Du = "_wrap_1spnc_1", qu = "_vertical_1spnc_60", Nu = "_grid_1spnc_72", Tu = "_behavior_1spnc_78", Ou = "_clickable_1spnc_78", ju = "_disabled_1spnc_81", Lu = "_draggable_1spnc_84", Pu = "_move_1spnc_84", Ru = "_loading_1spnc_87", Iu = "_transition_1spnc_91", Eu = "_primary_1spnc_132", Fu = "_secondary_1spnc_138", Hu = "_active_1spnc_160", Uu = "_icon_1spnc_166", Zu = {
  wrapper: Bu,
  flex: Vu,
  "col-1": "_col-1_1spnc_12",
  "col-2": "_col-2_1spnc_15",
  "col-3": "_col-3_1spnc_18",
  "col-4": "_col-4_1spnc_21",
  "col-5": "_col-5_1spnc_24",
  "col-6": "_col-6_1spnc_27",
  "col-7": "_col-7_1spnc_30",
  "col-8": "_col-8_1spnc_33",
  "col-9": "_col-9_1spnc_36",
  "col-10": "_col-10_1spnc_39",
  "col-11": "_col-11_1spnc_42",
  "col-12": "_col-12_1spnc_45",
  horizontal: Au,
  wrap: Du,
  vertical: qu,
  grid: Nu,
  behavior: Tu,
  clickable: Ou,
  disabled: ju,
  draggable: Lu,
  move: Pu,
  loading: Ru,
  transition: Iu,
  "slide-left-enter-from": "_slide-left-enter-from_1spnc_91",
  "slide-left-enter-active": "_slide-left-enter-active_1spnc_91",
  "slide-left-leave-from": "_slide-left-leave-from_1spnc_91",
  "slide-left-leave-active": "_slide-left-leave-active_1spnc_91",
  "slide-right-enter-from": "_slide-right-enter-from_1spnc_91",
  "slide-right-enter-active": "_slide-right-enter-active_1spnc_91",
  "slide-right-leave-from": "_slide-right-leave-from_1spnc_91",
  "slide-right-leave-active": "_slide-right-leave-active_1spnc_91",
  "slide-down-enter-from": "_slide-down-enter-from_1spnc_94",
  "slide-down-enter-active": "_slide-down-enter-active_1spnc_94",
  "slide-down-leave-from": "_slide-down-leave-from_1spnc_94",
  "slide-down-leave-active": "_slide-down-leave-active_1spnc_94",
  "fade-enter-from": "_fade-enter-from_1spnc_97",
  "fade-enter-active": "_fade-enter-active_1spnc_97",
  "fade-leave-from": "_fade-leave-from_1spnc_97",
  "fade-leave-active": "_fade-leave-active_1spnc_97",
  "tab-group": "_tab-group_1spnc_117",
  "tab-group-container": "_tab-group-container_1spnc_123",
  "tab-group-wrapper": "_tab-group-wrapper_1spnc_128",
  primary: Eu,
  secondary: Fu,
  "tab-group-viewport-leaving": "_tab-group-viewport-leaving_1spnc_157",
  active: Hu,
  icon: Uu
}, Wu = {
  $style: Zu
}, Tc = /* @__PURE__ */ Q(Su, [["__cssModules", Wu], ["__scopeId", "data-v-78357064"]]), Yu = ["textContent"], Gu = ["textContent"], Qu = ["textContent"], Xu = ["textContent"], Ju = ["id", "data-label"], xu = /* @__PURE__ */ Y({
  __name: "Timeline",
  props: {
    events: {},
    follow: { type: Boolean, default: !1 },
    title: { default: "Timeline" },
    running: { type: Boolean, default: !1 },
    start: {},
    end: {},
    eventSignalOptions: {},
    duration: { default: 5 * 60 * 1e3 },
    basis: { default: 5 * 60 * 1e3 },
    grow: { type: [Boolean, String] },
    growThreshold: {},
    growPolicy: {},
    shrink: { type: [Boolean, String] },
    shrinkThreshold: {},
    shrinkPolicy: {}
  },
  emits: ["update:range", "update:duration", "update:focused", "update:focused.array"],
  setup(o, { emit: t }) {
    $e((y) => ({
      "2dcf19d9": M.value
    }));
    const e = o, a = t, l = E(), { width: _ } = Be(l), { timestamp: h, pause: p, resume: w } = Rt({
      controls: !0,
      interval: 1e3,
      immediate: e.running
    }), { x: b } = It(l, {
      behavior: "smooth"
    }), k = q(
      () => new Ie(
        Mt(
          Array.isArray(e.events) ? e.events : [...e.events.values()],
          ["range.start"],
          ["asc"]
        ).map((y) => {
          var B;
          return [
            y.range.start.getTime(),
            {
              event: y,
              duration: Math.max(
                (((B = y.range.end) == null ? void 0 : B.getTime()) ?? (e.running ? h.value : 0)) - y.range.start.getTime(),
                0
              )
            }
          ];
        })
      )
    ), m = q(() => Number(e.start) || k.value.keys().next().value), z = q(
      () => Number(e.end) || (e.running ? h.value : Math.max(
        ...[...k.value.values()].map(
          ({ event: y, duration: B }) => {
            var V;
            return ((V = y.range.end) == null ? void 0 : V.getTime()) ?? y.range.start.getTime() + B;
          }
        )
      ))
    ), c = q(() => Number(z.value - m.value) || 0), C = q(
      () => ((y) => y.duration === "justify" ? y.grow === "fill" && Math.abs(Number(y.basis) - c.value) <= Number(y.growThreshold ?? 0) ? c.value : Number(y.basis) : y.duration === "cover" ? c.value : Number(y.duration) || 0)(
        e
      )
    ), M = q(() => c.value / C.value * _.value), $ = q(() => ({
      startTime: m.value + b.value / M.value * c.value,
      endTime: m.value + (b.value + _.value) / M.value * c.value
    })), f = () => {
      var y;
      (y = l.value) == null || y.scrollTo({
        left: M.value,
        behavior: "smooth"
      });
    }, { onTrigger: v } = ge(
      () => {
        a("update:range", {
          start: new Date($.value.startTime),
          end: new Date($.value.endTime)
        }), a("update:duration", new Date(C.value));
        const y = k.value.filter(
          ({ event: B }) => !(Number(B.range.start ?? 0) <= Number($.value.startTime ?? 0) && Number(B.range.end ?? 0) <= Number($.value.startTime ?? 0)) && !(Number(B.range.start ?? 0) >= Number($.value.endTime ?? 0) && Number(B.range.end ?? 0) >= Number($.value.endTime ?? 0))
        ).map(({ event: B }) => [B.id, B]);
        a("update:focused", y), a("update:focused.array", y.toArray("values"));
      },
      e.eventSignalOptions ?? {
        flush: "post",
        debounce: 100
      }
    );
    return Zt(() => {
      e.running ? w() : p();
    }), (y, B) => (d(), G(se, {
      class: s([y.$style["timeline-container"], y.$style.wrapper, y.$style.flex, y.$style.vertical]),
      "has-stroke": !1,
      purpose: "container",
      radius: "var(--agh-ref-border-radius-500)"
    }, {
      default: U(() => [
        u("header", {
          class: s([y.$style.wrapper, y.$style.flex, y.$style.horizontal])
        }, [
          u("h1", null, T(e.title), 1),
          u("div", {
            class: s([y.$style.wrapper, y.$style.flex, y.$style.horizontal])
          }, [
            u("p", {
              class: s([y.$style.wrapper, y.$style.flex, y.$style.vertical])
            }, [
              u("span", {
                textContent: T(i(oe)($.value, "{{ startTime | date : yyyy/MM/dd }}")),
                "data-label": "date"
              }, null, 8, Yu),
              u("span", {
                textContent: T(i(oe)($.value, "{{ startTime | date : HH:mm:ss }}")),
                "data-label": "time"
              }, null, 8, Gu)
            ], 2),
            R(i(le), {
              class: s(y.$style.icon),
              icon: "fa6-solid:arrows-left-right"
            }, null, 8, ["class"]),
            u("p", {
              class: s([y.$style.wrapper, y.$style.flex, y.$style.vertical])
            }, [
              u("span", {
                textContent: T(i(oe)($.value, "{{ endTime | date : yyyy/MM/dd }}")),
                "data-label": "date"
              }, null, 8, Qu),
              u("span", {
                textContent: T(i(oe)($.value, "{{ endTime | date : HH:mm:ss }}")),
                "data-label": "time"
              }, null, 8, Xu)
            ], 2)
          ], 2),
          R(J, {
            onClick: B[0] || (B[0] = (V) => f()),
            class: s(y.$style.button),
            disabled: i(b) + i(_) >= M.value,
            icon: "fa6-solid:forward-step",
            level: "secondary",
            variant: "square"
          }, null, 8, ["class", "disabled"])
        ], 2),
        u("div", {
          ref_key: "wrapperRef$",
          ref: l,
          onScroll: B[1] || (B[1] = //@ts-ignore
          (...V) => i(v) && i(v)(...V)),
          class: s([y.$style["timeline-wrapper"], y.$style.wrapper, y.$style.flex, y.$style.horizontal])
        }, [
          u("div", {
            class: s([y.$style["timeline-axis"], y.$style.wrapper, y.$style.flex, y.$style.horizontal])
          }, null, 2),
          (d(!0), g(O, null, H(k.value, ([V, { event: Z, duration: x }], r) => (d(), g("div", {
            key: `tick-${r}`,
            id: Z.id,
            class: s(y.$style["timeline-tick"]),
            "data-label": `${i(oe)(Z.range, "{{ start | date : yyyy/MM/dd HH:mm:ss }} - {{ end | date : yyyy/MM/dd HH:mm:ss }}")}`,
            style: at({
              left: `${(V - m.value) / c.value * M.value}px`,
              width: `${x / c.value * M.value}px`
            })
          }, null, 14, Ju))), 128)),
          u("div", {
            class: s(y.$style.anchor)
          }, null, 2)
        ], 34)
      ]),
      _: 1
    }, 8, ["class"]));
  }
}), Ku = "_wrapper_n8d35_1", ec = "_flex_n8d35_12", tc = "_horizontal_n8d35_48", lc = "_wrap_n8d35_1", ac = "_vertical_n8d35_60", sc = "_grid_n8d35_72", oc = "_icon_n8d35_101", nc = "_button_n8d35_122", rc = "_anchor_n8d35_152", ic = {
  wrapper: Ku,
  flex: ec,
  "col-1": "_col-1_n8d35_12",
  "col-2": "_col-2_n8d35_15",
  "col-3": "_col-3_n8d35_18",
  "col-4": "_col-4_n8d35_21",
  "col-5": "_col-5_n8d35_24",
  "col-6": "_col-6_n8d35_27",
  "col-7": "_col-7_n8d35_30",
  "col-8": "_col-8_n8d35_33",
  "col-9": "_col-9_n8d35_36",
  "col-10": "_col-10_n8d35_39",
  "col-11": "_col-11_n8d35_42",
  "col-12": "_col-12_n8d35_45",
  horizontal: tc,
  wrap: lc,
  vertical: ac,
  grid: sc,
  "timeline-container": "_timeline-container_n8d35_78",
  icon: oc,
  button: nc,
  "timeline-wrapper": "_timeline-wrapper_n8d35_125",
  anchor: rc,
  "timeline-axis": "_timeline-axis_n8d35_155",
  "timeline-tick": "_timeline-tick_n8d35_180"
}, uc = {
  $style: ic
}, Oc = /* @__PURE__ */ Q(xu, [["__cssModules", uc], ["__scopeId", "data-v-76e439bd"]]);
export {
  qc as AttackMatrix,
  mc as BadgeBox,
  yt as BaseLink,
  jl as BaseList,
  Ve as BasePoly,
  J as ButtonBox,
  se as CardBox,
  Nc as CardList,
  wc as DatetimePicker,
  hc as DoughnutChart,
  zc as DropDown,
  Mc as FileUploader,
  Si as InnerShadowDeco,
  Bc as InputRange,
  $c as LineChart,
  Cc as LoadingIcon,
  gc as MatrixChart,
  sr as ProgressBar,
  Sc as ProgressCircle,
  bc as RadarChart,
  pt as RoundEffect,
  Vc as SearchBar,
  Ee as SelectMenu,
  kc as StackBarChart,
  Ac as SwitchButton,
  Tc as TabGroup,
  Dc as TextArea,
  De as TextField,
  Oc as Timeline
};
//# sourceMappingURL=ui.component.es.js.map
