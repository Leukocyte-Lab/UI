import { g as F, d as V, e as W, i as G, f as H, u as U } from "./parser-DcmpGuup.js";
import { i as z, t as T, a as Y, b as y, n as J, c as K, d as B, e as Q, h as X, f as I } from "./i18n.service-CTxaRhXo.js";
import { ref as x, shallowRef as ee, computed as w, watch as $, readonly as te, inject as M, unref as v, getCurrentInstance as ne, onMounted as oe, defineComponent as L, openBlock as m, createBlock as D, resolveDynamicComponent as se, normalizeProps as re, guardReactiveProps as ae, withCtx as P, renderSlot as S, createElementBlock as O, normalizeClass as g, createElementVNode as R, mergeProps as le, toDisplayString as N, createCommentVNode as A, Fragment as ie, createTextVNode as ce, createVNode as ue } from "vue";
import { Icon as de } from "@iconify/vue/offline";
var q = function() {
  try {
    var n = F(Object, "defineProperty");
    return n({}, "", {}), n;
  } catch {
  }
}();
function pe(n, e, t) {
  e == "__proto__" && q ? q(n, e, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : n[e] = t;
}
function _e(n, e, t, r) {
  for (var l = -1, s = n == null ? 0 : n.length; ++l < s; ) {
    var a = n[l];
    e(r, a, t(a), n);
  }
  return r;
}
function fe(n, e, t, r) {
  return V(n, function(l, s, a) {
    e(r, l, t(l), a);
  }), r;
}
function be(n, e) {
  return function(t, r) {
    var l = G(t) ? _e : fe, s = e ? e() : {};
    return l(t, n, W(r), s);
  };
}
var me = Object.prototype, ve = me.hasOwnProperty, ge = be(function(n, e, t) {
  ve.call(n, t) ? n[t].push(e) : pe(n, t, [e]);
});
const mt = ge;
function vt(n, e) {
  return n > e;
}
function gt(n, e) {
  return n < e;
}
function yt(n, e, t) {
  for (var r = -1, l = n.length; ++r < l; ) {
    var s = n[r], a = e(s);
    if (a != null && (o === void 0 ? a === a && !H(a) : t(a, o)))
      var o = a, u = s;
  }
  return u;
}
function ht(n, e, t, r) {
  let l = M(n);
  return t && (l = M(n, t)), r && (l = M(n, t, r)), typeof e == "function" ? w((s) => e(l, s)) : w({
    get: (s) => e.get(l, s),
    set: e.set
  });
}
function f(n) {
  var e;
  const t = y(n);
  return (e = t == null ? void 0 : t.$el) != null ? e : t;
}
const C = z ? window : void 0, ye = z ? window.document : void 0;
function h(...n) {
  let e, t, r, l;
  if (typeof n[0] == "string" || Array.isArray(n[0]) ? ([t, r, l] = n, e = C) : [e, t, r, l] = n, !e)
    return J;
  Array.isArray(t) || (t = [t]), Array.isArray(r) || (r = [r]);
  const s = [], a = () => {
    s.forEach((p) => p()), s.length = 0;
  }, o = (p, c, d, _) => (p.addEventListener(c, d, _), () => p.removeEventListener(c, d, _)), u = $(
    () => [f(e), y(l)],
    ([p, c]) => {
      if (a(), !p)
        return;
      const d = K(c) ? { ...c } : c;
      s.push(
        ...t.flatMap((_) => r.map((b) => o(p, _, b, d)))
      );
    },
    { immediate: !0, flush: "post" }
  ), i = () => {
    u(), a();
  };
  return T(i), i;
}
function he() {
  const n = x(!1), e = ne();
  return e && oe(() => {
    n.value = !0;
  }, e), n;
}
function j(n) {
  const e = he();
  return w(() => (e.value, !!n()));
}
function xe(n, e, t = {}) {
  const { window: r = C, ...l } = t;
  let s;
  const a = j(() => r && "MutationObserver" in r), o = () => {
    s && (s.disconnect(), s = void 0);
  }, u = w(() => {
    const d = y(n), _ = (Array.isArray(d) ? d : [d]).map(f).filter(B);
    return new Set(_);
  }), i = $(
    () => u.value,
    (d) => {
      o(), a.value && r && d.size && (s = new MutationObserver(e), d.forEach((_) => s.observe(_, l)));
    },
    { immediate: !0, flush: "post" }
  ), p = () => s == null ? void 0 : s.takeRecords(), c = () => {
    o(), i();
  };
  return T(c), {
    isSupported: a,
    stop: c,
    takeRecords: p
  };
}
function xt(n, e, t = {}) {
  const { window: r = C, initialValue: l = "", observe: s = !1 } = t, a = x(l), o = w(() => {
    var i;
    return f(e) || ((i = r == null ? void 0 : r.document) == null ? void 0 : i.documentElement);
  });
  function u() {
    var i;
    const p = y(n), c = y(o);
    if (c && r) {
      const d = (i = r.getComputedStyle(c).getPropertyValue(p)) == null ? void 0 : i.trim();
      a.value = d || l;
    }
  }
  return s && xe(o, u, {
    attributeFilter: ["style", "class"],
    window: r
  }), $(
    [o, () => y(n)],
    u,
    { immediate: !0 }
  ), $(
    a,
    (i) => {
      var p;
      (p = o.value) != null && p.style && o.value.style.setProperty(y(n), i);
    }
  ), a;
}
function wt(n, e = {}) {
  const t = x(!1), r = ee(null);
  let l = 0, s = !0;
  if (z) {
    const a = typeof e == "function" ? { onDrop: e } : e, o = (u) => {
      var i, p;
      const c = Array.from((p = (i = u.dataTransfer) == null ? void 0 : i.files) != null ? p : []);
      return r.value = c.length === 0 ? null : c;
    };
    h(n, "dragenter", (u) => {
      var i, p;
      const c = Array.from(((i = u == null ? void 0 : u.dataTransfer) == null ? void 0 : i.items) || []).map((d) => d.kind === "file" ? d.type : null).filter(B);
      if (a.dataTypes && u.dataTransfer) {
        const d = v(a.dataTypes);
        if (s = typeof d == "function" ? d(c) : d ? d.some((_) => c.includes(_)) : !0, !s)
          return;
      }
      u.preventDefault(), l += 1, t.value = !0, (p = a.onEnter) == null || p.call(a, o(u), u);
    }), h(n, "dragover", (u) => {
      var i;
      s && (u.preventDefault(), (i = a.onOver) == null || i.call(a, o(u), u));
    }), h(n, "dragleave", (u) => {
      var i;
      s && (u.preventDefault(), l -= 1, l === 0 && (t.value = !1), (i = a.onLeave) == null || i.call(a, o(u), u));
    }), h(n, "drop", (u) => {
      var i;
      u.preventDefault(), l = 0, t.value = !1, (i = a.onDrop) == null || i.call(a, o(u), u);
    });
  }
  return {
    files: r,
    isOverDropZone: t
  };
}
function we(n, e, t = {}) {
  const { window: r = C, ...l } = t;
  let s;
  const a = j(() => r && "ResizeObserver" in r), o = () => {
    s && (s.disconnect(), s = void 0);
  }, u = w(() => Array.isArray(n) ? n.map((c) => f(c)) : [f(n)]), i = $(
    u,
    (c) => {
      if (o(), a.value && r) {
        s = new ResizeObserver(e);
        for (const d of c)
          d && s.observe(d, l);
      }
    },
    { immediate: !0, flush: "post" }
  ), p = () => {
    o(), i();
  };
  return T(p), {
    isSupported: a,
    stop: p
  };
}
function kt(n, e = { width: 0, height: 0 }, t = {}) {
  const { window: r = C, box: l = "content-box" } = t, s = w(() => {
    var c, d;
    return (d = (c = f(n)) == null ? void 0 : c.namespaceURI) == null ? void 0 : d.includes("svg");
  }), a = x(e.width), o = x(e.height), { stop: u } = we(
    n,
    ([c]) => {
      const d = l === "border-box" ? c.borderBoxSize : l === "content-box" ? c.contentBoxSize : c.devicePixelContentBoxSize;
      if (r && s.value) {
        const _ = f(n);
        if (_) {
          const b = r.getComputedStyle(_);
          a.value = Number.parseFloat(b.width), o.value = Number.parseFloat(b.height);
        }
      } else if (d) {
        const _ = Array.isArray(d) ? d : [d];
        a.value = _.reduce((b, { inlineSize: E }) => b + E, 0), o.value = _.reduce((b, { blockSize: E }) => b + E, 0);
      } else
        a.value = c.contentRect.width, o.value = c.contentRect.height;
    },
    t
  );
  Y(() => {
    const c = f(n);
    c && (a.value = "offsetWidth" in c ? c.offsetWidth : e.width, o.value = "offsetHeight" in c ? c.offsetHeight : e.height);
  });
  const i = $(
    () => f(n),
    (c) => {
      a.value = c ? e.width : 0, o.value = c ? e.height : 0;
    }
  );
  function p() {
    u(), i();
  }
  return {
    width: a,
    height: o,
    stop: p
  };
}
const ke = {
  multiple: !0,
  accept: "*",
  reset: !1,
  directory: !1
};
function $t(n = {}) {
  const {
    document: e = ye
  } = n, t = x(null), { on: r, trigger: l } = Q();
  let s;
  e && (s = e.createElement("input"), s.type = "file", s.onchange = (u) => {
    const i = u.target;
    t.value = i.files, l(t.value);
  });
  const a = () => {
    t.value = null, s && (s.value = "", l(null));
  }, o = (u) => {
    if (!s)
      return;
    const i = {
      ...ke,
      ...n,
      ...u
    };
    s.multiple = i.multiple, s.accept = i.accept, s.webkitdirectory = i.directory, X(i, "capture") && (s.capture = i.capture), i.reset && a(), s.click();
  };
  return {
    files: te(t),
    open: o,
    reset: a,
    onChange: r
  };
}
function Ct(n = {}) {
  const { window: e = C } = n, t = x(!1), r = (l) => {
    if (!e)
      return;
    l = l || e.event;
    const s = l.relatedTarget || l.toElement;
    t.value = !s;
  };
  return e && (h(e, "mouseout", r, { passive: !0 }), h(e.document, "mouseleave", r, { passive: !0 }), h(e.document, "mouseenter", r, { passive: !0 })), t;
}
const $e = /* @__PURE__ */ L({
  __name: "BaseLink",
  props: {
    link: {},
    external: { type: Boolean, default: void 0 }
  },
  setup(n) {
    const e = n, t = I(
      () => e.external ?? /^(https?:\/\/)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&//=]*)$/.test(e.link || "")
    );
    return (r, l) => (m(), D(se(e.link ? v(t) ? "a" : "RouterLink" : "div"), re(ae(
      e.link ? {
        [v(t) ? "href" : "to"]: e.link,
        ...v(t) ? {
          target: "_blank",
          rel: "noopener noreferrer"
        } : {}
      } : {}
    )), {
      default: P(() => [
        S(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ce = ["width", "height"], Ae = /* @__PURE__ */ L({
  __name: "BasePoly",
  props: {
    height: {},
    width: {}
  },
  setup(n) {
    const e = n;
    return (t, r) => (m(), O("svg", {
      class: g(t.$style["poly-wrapper"]),
      width: e.width,
      height: e.height,
      preserveAspectRatio: "xMinYMin",
      "color-profile": "sRGB",
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      R("defs", null, [
        S(t.$slots, "defs", {}, void 0, !0)
      ]),
      S(t.$slots, "path", {}, void 0, !0)
    ], 10, Ce));
  }
}), Oe = {
  "poly-wrapper": "_poly-wrapper_14erz_1"
}, Z = (n, e) => {
  const t = n.__vccOpts || n;
  for (const [r, l] of e)
    t[r] = l;
  return t;
}, Ee = {
  $style: Oe
}, Me = /* @__PURE__ */ Z(Ae, [["__cssModules", Ee], ["__scopeId", "data-v-ac9d4bad"]]);
var k;
((n) => {
  ((e) => {
    e.rounded = "rounded", e.square = "square", e["text-square"] = "text-square", e.circle = "circle", e.rect = "rect", e["extendable-rect"] = "extendable-rect", e.text = "text", e.file = "file";
  })(n.Variant || (n.Variant = {})), ((e) => {
    e.primary = "primary", e.secondary = "secondary", e.tertiary = "tertiary";
  })(n.Level || (n.Level = {})), ((e) => {
    e.small = "small", e.medium = "medium", e.large = "large", e.huge = "huge";
  })(n.Size || (n.Size = {})), ((e) => {
    e.purple = "purple", e.blue = "blue", e.cyan = "cyan", e.green = "green", e.orange = "orange", e.red = "red";
  })(n.Color || (n.Color = {})), ((e) => {
    e.normal = "normal", e.danger = "danger";
  })(n.Mode || (n.Mode = {}));
})(k || (k = {}));
const De = /* @__PURE__ */ L({
  __name: "ButtonBox",
  props: {
    label: {},
    icon: {},
    link: {},
    disabled: { type: Boolean, default: !1 },
    clicked: { type: Boolean },
    bobble: { type: [Boolean, Number, String], default: !1 },
    color: { default: "blue" },
    variant: { default: "rounded" },
    level: { default: "primary" },
    size: { default: "medium" },
    mode: { default: "normal" },
    loading: { type: Boolean, default: !1 },
    eventSignalOptions: {}
  },
  emits: ["click"],
  setup(n, { emit: e }) {
    const t = n, r = e, l = I(
      () => t.mode === k.Mode.danger ? k.Color.red : k.Color[t.color] ?? k.Color.blue
    ), { triggered: s, onTrigger: a } = U(
      (o) => {
        t.disabled || t.loading ? (o.preventDefault(), o.stopPropagation()) : r("click", o);
      },
      t.eventSignalOptions ?? {
        flush: "pre"
      }
    );
    return (o, u) => (m(), D($e, le({
      link: t.link,
      class: [
        o.$style["button-container"],
        o.$style.behavior,
        o.$style[t.variant],
        o.$style[t.level],
        o.$style[t.size],
        o.$style[t.mode],
        o.$style[v(l)],
        t.disabled ? [o.$style.disabled] : [o.$style.clickable],
        {
          [o.$style.clicked]: t.clicked || v(s)()
        }
      ],
      "aria-disabled": t.disabled,
      "aria-label": t.label,
      onClick: v(a)
    }, t.disabled ? { disabled: "", ...o.$attrs } : o.$attrs, {
      role: "button",
      tabindex: "0"
    }), {
      default: P(() => [
        t.label ? (m(), O("span", {
          key: 0,
          class: g([o.$style["button-content"]])
        }, N(t.label), 3)) : A("", !0),
        t.bobble ? (m(), O("span", {
          key: 1,
          class: g([
            o.$style["button-bobble"],
            o.$style[typeof t.bobble],
            {
              [o.$style.capsule]: typeof t.bobble != "boolean" && String(t.bobble).length > 2
            },
            o.$style[typeof t.bobble == "boolean" || !["rounded", "rect", "text"].includes(t.variant) ? "dot" : "badge"]
          ])
        }, [
          t.bobble !== !0 ? (m(), O(ie, { key: 0 }, [
            ce(N(t.bobble), 1)
          ], 64)) : A("", !0)
        ], 2)) : A("", !0),
        t.icon ? (m(), O("span", {
          key: 2,
          class: g([o.$style["button-icon"]])
        }, [
          ue(v(de), {
            icon: t.icon
          }, null, 8, ["icon"])
        ], 2)) : A("", !0),
        t.loading ? (m(), D(Me, {
          key: 3,
          class: g([o.$style["loading-icon"], o.$style[t.size]]),
          viewBox: "0 0 16 16"
        }, {
          path: P(() => [
            R("path", {
              class: g(o.$style["main-progress"]),
              d: "M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM2.4 8C2.4 11.0928 4.90721 13.6 8 13.6C11.0928 13.6 13.6 11.0928 13.6 8C13.6 4.90721 11.0928 2.4 8 2.4C4.90721 2.4 2.4 4.90721 2.4 8Z"
            }, null, 2),
            R("path", {
              d: "M8 1.2C8 0.537258 8.54024 -0.00921593 9.19554 0.0898279C10.457 0.280494 11.6608 0.771147 12.7023 1.52787C14.0691 2.52089 15.0864 3.92112 15.6085 5.52787C16.1305 7.13462 16.1305 8.8654 15.6084 10.4721C15.2106 11.6965 14.5252 12.801 13.6167 13.6968C13.1448 14.1621 12.3865 14.0375 11.9969 13.5013C11.6074 12.9652 11.7387 12.2216 12.1797 11.7269C12.6931 11.1512 13.0849 10.4723 13.3259 9.7305C13.6914 8.60578 13.6914 7.39423 13.3259 6.26951C12.9605 5.14478 12.2483 4.16462 11.2916 3.46951C10.6606 3.01106 9.94456 2.69212 9.19086 2.52808C8.54328 2.38714 8 1.86274 8 1.2Z",
              class: g(o.$style["sub-progress"])
            }, null, 2)
          ]),
          _: 1
        }, 8, ["class"])) : A("", !0)
      ]),
      _: 1
    }, 16, ["link", "class", "aria-disabled", "aria-label", "onClick"]));
  }
}), Pe = "_behavior_15p2x_1", Se = "_clickable_15p2x_1", Re = "_disabled_15p2x_4", ze = "_draggable_15p2x_7", Te = "_move_15p2x_7", Le = "_loading_15p2x_10", Ne = "_rounded_15p2x_14", qe = "_circle_15p2x_14", Be = "_square_15p2x_14", Ie = "_rect_15p2x_14", je = "_purple_15p2x_14", Ze = "_secondary_15p2x_14", Fe = "_text_15p2x_14", Ve = "_tertiary_15p2x_14", We = "_blue_15p2x_14", Ge = "_cyan_15p2x_14", He = "_green_15p2x_14", Ue = "_orange_15p2x_14", Ye = "_red_15p2x_14", Je = "_clicked_15p2x_22", Ke = "_small_15p2x_153", Qe = "_medium_15p2x_156", Xe = "_large_15p2x_159", et = "_huge_15p2x_162", tt = "_dot_15p2x_300", nt = "_badge_15p2x_375", ot = "_primary_15p2x_551", st = "_rotate_15p2x_1", rt = "_active_15p2x_835", at = "_capsule_15p2x_1929", lt = "_boolean_15p2x_1932", it = "_string_15p2x_1941", ct = "_number_15p2x_1941", ut = {
  behavior: Pe,
  clickable: Se,
  disabled: Re,
  draggable: ze,
  move: Te,
  loading: Le,
  "button-container": "_button-container_15p2x_14",
  rounded: Ne,
  circle: qe,
  square: Be,
  "text-square": "_text-square_15p2x_14",
  rect: Ie,
  "extendable-rect": "_extendable-rect_15p2x_14",
  purple: je,
  secondary: Ze,
  text: Fe,
  tertiary: Ve,
  blue: We,
  cyan: Ge,
  green: He,
  orange: Ue,
  red: Ye,
  clicked: Je,
  "button-icon": "_button-icon_15p2x_148",
  small: Ke,
  medium: Qe,
  large: Xe,
  huge: et,
  "button-content": "_button-content_15p2x_197",
  "button-bobble": "_button-bobble_15p2x_300",
  dot: tt,
  badge: nt,
  primary: ot,
  "loading-icon": "_loading-icon_15p2x_578",
  rotate: st,
  "main-progress": "_main-progress_15p2x_582",
  "sub-progress": "_sub-progress_15p2x_585",
  active: rt,
  capsule: at,
  boolean: lt,
  string: it,
  number: ct,
  "fade-in": "_fade-in_15p2x_1",
  "jump-in": "_jump-in_15p2x_1",
  "step-rotate": "_step-rotate_15p2x_1"
}, dt = {
  $style: ut
}, At = /* @__PURE__ */ Z(De, [["__cssModules", dt], ["__scopeId", "data-v-91889466"]]);
export {
  Me as B,
  $e as _,
  yt as a,
  pe as b,
  vt as c,
  q as d,
  gt as e,
  Z as f,
  mt as g,
  we as h,
  xt as i,
  At as j,
  $t as k,
  wt as l,
  Ct as m,
  ht as n,
  xe as o,
  kt as u
};
//# sourceMappingURL=ButtonBox-Dpzzh7Qh.js.map
