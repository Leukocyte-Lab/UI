import { defineComponent as Yt, getCurrentInstance as Ba, ref as lt, watch as jh, onMounted as mi, onUnmounted as Yh, h as Da, inject as Ps, onBeforeUnmount as qh, renderSlot as Fr, BaseTransition as fc, useTransitionState as pc, getTransitionRawChildren as mc, createVNode as nr, Fragment as Ue, createRenderer as gc, warn as Fa, markRaw as Kh, createApp as yc, resolveTransitionHooks as _c, setTransitionHooks as vc, camelize as Dn, effectScope as Zh, watchEffect as Qh, computed as Xt, nextTick as Jh, reactive as tl, openBlock as It, createElementBlock as Bt, unref as Mt, normalizeClass as os, withCtx as Fn, createBlock as io, createCommentVNode as Te, provide as ze, createElementVNode as ge, toRef as Ei, onBeforeUpdate as xc, renderList as bc, normalizeStyle as Tc } from "vue";
import { a as el, c as Ec, e as wc, u as rl, f as Oa, p as Ac, g as Sc, m as Cc, j as so, q as Er, r as Ic } from "./ButtonBox-55MHD3CR.js";
import { f as il, ab as sl, ac as qi, ad as Pc, s as nl, b as Rc, a9 as Mc, M as Q, a as Bc } from "./parser-81rB9sCH.js";
import { i as Dc, w as no } from "./i18n.service-4W5HT8k4.js";
function Vs(i, t) {
  return i && i.length ? el(i, il(t), Ec) : void 0;
}
function zs(i, t) {
  return i && i.length ? el(i, il(t), wc) : void 0;
}
var Fc = Object.defineProperty, Oc = (i, t, e) => t in i ? Fc(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e, Xs = (i, t, e) => (Oc(i, typeof t != "symbol" ? t + "" : t, e), e), ao = [
  "container",
  "sprite",
  "graphics",
  "text",
  "bitmap-text",
  "tiling-sprite",
  "animated-sprite",
  "mesh",
  "simple-plane",
  "nine-slice-plane",
  "simple-rope",
  "filter",
  "blur-filter",
  "alpha-filter",
  "displacement-filter",
  "color-matrix-filter",
  "f-x-a-a-filter"
], oo = "pixi-";
function Nc(i) {
  let t = i.replace(/[A-Z]/g, (s) => `-${s.toLowerCase()}`);
  t.startsWith("-") && (t = t.slice(1));
  const e = ao.includes(t), r = t.startsWith(oo) && ao.includes(t.slice(oo.length));
  return e || r;
}
var hr = /* @__PURE__ */ ((i) => (i[i.WEBGL_LEGACY = 0] = "WEBGL_LEGACY", i[i.WEBGL = 1] = "WEBGL", i[i.WEBGL2 = 2] = "WEBGL2", i))(hr || {}), al = /* @__PURE__ */ ((i) => (i[i.UNKNOWN = 0] = "UNKNOWN", i[i.WEBGL = 1] = "WEBGL", i[i.CANVAS = 2] = "CANVAS", i))(al || {}), On = /* @__PURE__ */ ((i) => (i[i.COLOR = 16384] = "COLOR", i[i.DEPTH = 256] = "DEPTH", i[i.STENCIL = 1024] = "STENCIL", i))(On || {}), X = /* @__PURE__ */ ((i) => (i[i.NORMAL = 0] = "NORMAL", i[i.ADD = 1] = "ADD", i[i.MULTIPLY = 2] = "MULTIPLY", i[i.SCREEN = 3] = "SCREEN", i[i.OVERLAY = 4] = "OVERLAY", i[i.DARKEN = 5] = "DARKEN", i[i.LIGHTEN = 6] = "LIGHTEN", i[i.COLOR_DODGE = 7] = "COLOR_DODGE", i[i.COLOR_BURN = 8] = "COLOR_BURN", i[i.HARD_LIGHT = 9] = "HARD_LIGHT", i[i.SOFT_LIGHT = 10] = "SOFT_LIGHT", i[i.DIFFERENCE = 11] = "DIFFERENCE", i[i.EXCLUSION = 12] = "EXCLUSION", i[i.HUE = 13] = "HUE", i[i.SATURATION = 14] = "SATURATION", i[i.COLOR = 15] = "COLOR", i[i.LUMINOSITY = 16] = "LUMINOSITY", i[i.NORMAL_NPM = 17] = "NORMAL_NPM", i[i.ADD_NPM = 18] = "ADD_NPM", i[i.SCREEN_NPM = 19] = "SCREEN_NPM", i[i.NONE = 20] = "NONE", i[i.SRC_OVER = 0] = "SRC_OVER", i[i.SRC_IN = 21] = "SRC_IN", i[i.SRC_OUT = 22] = "SRC_OUT", i[i.SRC_ATOP = 23] = "SRC_ATOP", i[i.DST_OVER = 24] = "DST_OVER", i[i.DST_IN = 25] = "DST_IN", i[i.DST_OUT = 26] = "DST_OUT", i[i.DST_ATOP = 27] = "DST_ATOP", i[i.ERASE = 26] = "ERASE", i[i.SUBTRACT = 28] = "SUBTRACT", i[i.XOR = 29] = "XOR", i))(X || {}), oe = /* @__PURE__ */ ((i) => (i[i.POINTS = 0] = "POINTS", i[i.LINES = 1] = "LINES", i[i.LINE_LOOP = 2] = "LINE_LOOP", i[i.LINE_STRIP = 3] = "LINE_STRIP", i[i.TRIANGLES = 4] = "TRIANGLES", i[i.TRIANGLE_STRIP = 5] = "TRIANGLE_STRIP", i[i.TRIANGLE_FAN = 6] = "TRIANGLE_FAN", i))(oe || {}), P = /* @__PURE__ */ ((i) => (i[i.RGBA = 6408] = "RGBA", i[i.RGB = 6407] = "RGB", i[i.RG = 33319] = "RG", i[i.RED = 6403] = "RED", i[i.RGBA_INTEGER = 36249] = "RGBA_INTEGER", i[i.RGB_INTEGER = 36248] = "RGB_INTEGER", i[i.RG_INTEGER = 33320] = "RG_INTEGER", i[i.RED_INTEGER = 36244] = "RED_INTEGER", i[i.ALPHA = 6406] = "ALPHA", i[i.LUMINANCE = 6409] = "LUMINANCE", i[i.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA", i[i.DEPTH_COMPONENT = 6402] = "DEPTH_COMPONENT", i[i.DEPTH_STENCIL = 34041] = "DEPTH_STENCIL", i))(P || {}), Sr = /* @__PURE__ */ ((i) => (i[i.TEXTURE_2D = 3553] = "TEXTURE_2D", i[i.TEXTURE_CUBE_MAP = 34067] = "TEXTURE_CUBE_MAP", i[i.TEXTURE_2D_ARRAY = 35866] = "TEXTURE_2D_ARRAY", i[i.TEXTURE_CUBE_MAP_POSITIVE_X = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X", i[i.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X", i[i.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y", i[i.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y", i[i.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z", i[i.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z", i))(Sr || {}), V = /* @__PURE__ */ ((i) => (i[i.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE", i[i.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT", i[i.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5", i[i.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4", i[i.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1", i[i.UNSIGNED_INT = 5125] = "UNSIGNED_INT", i[i.UNSIGNED_INT_10F_11F_11F_REV = 35899] = "UNSIGNED_INT_10F_11F_11F_REV", i[i.UNSIGNED_INT_2_10_10_10_REV = 33640] = "UNSIGNED_INT_2_10_10_10_REV", i[i.UNSIGNED_INT_24_8 = 34042] = "UNSIGNED_INT_24_8", i[i.UNSIGNED_INT_5_9_9_9_REV = 35902] = "UNSIGNED_INT_5_9_9_9_REV", i[i.BYTE = 5120] = "BYTE", i[i.SHORT = 5122] = "SHORT", i[i.INT = 5124] = "INT", i[i.FLOAT = 5126] = "FLOAT", i[i.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV", i[i.HALF_FLOAT = 36193] = "HALF_FLOAT", i))(V || {}), N = /* @__PURE__ */ ((i) => (i[i.FLOAT = 0] = "FLOAT", i[i.INT = 1] = "INT", i[i.UINT = 2] = "UINT", i))(N || {}), ye = /* @__PURE__ */ ((i) => (i[i.NEAREST = 0] = "NEAREST", i[i.LINEAR = 1] = "LINEAR", i))(ye || {}), Ee = /* @__PURE__ */ ((i) => (i[i.CLAMP = 33071] = "CLAMP", i[i.REPEAT = 10497] = "REPEAT", i[i.MIRRORED_REPEAT = 33648] = "MIRRORED_REPEAT", i))(Ee || {}), ue = /* @__PURE__ */ ((i) => (i[i.OFF = 0] = "OFF", i[i.POW2 = 1] = "POW2", i[i.ON = 2] = "ON", i[i.ON_MANUAL = 3] = "ON_MANUAL", i))(ue || {}), Dt = /* @__PURE__ */ ((i) => (i[i.NPM = 0] = "NPM", i[i.UNPACK = 1] = "UNPACK", i[i.PMA = 2] = "PMA", i[i.NO_PREMULTIPLIED_ALPHA = 0] = "NO_PREMULTIPLIED_ALPHA", i[i.PREMULTIPLY_ON_UPLOAD = 1] = "PREMULTIPLY_ON_UPLOAD", i[i.PREMULTIPLIED_ALPHA = 2] = "PREMULTIPLIED_ALPHA", i))(Dt || {}), ne = /* @__PURE__ */ ((i) => (i[i.NO = 0] = "NO", i[i.YES = 1] = "YES", i[i.AUTO = 2] = "AUTO", i[i.BLEND = 0] = "BLEND", i[i.CLEAR = 1] = "CLEAR", i[i.BLIT = 2] = "BLIT", i))(ne || {}), Na = /* @__PURE__ */ ((i) => (i[i.AUTO = 0] = "AUTO", i[i.MANUAL = 1] = "MANUAL", i))(Na || {}), Ut = /* @__PURE__ */ ((i) => (i.LOW = "lowp", i.MEDIUM = "mediump", i.HIGH = "highp", i))(Ut || {}), mt = /* @__PURE__ */ ((i) => (i[i.NONE = 0] = "NONE", i[i.SCISSOR = 1] = "SCISSOR", i[i.STENCIL = 2] = "STENCIL", i[i.SPRITE = 3] = "SPRITE", i[i.COLOR = 4] = "COLOR", i))(mt || {}), ft = /* @__PURE__ */ ((i) => (i[i.NONE = 0] = "NONE", i[i.LOW = 2] = "LOW", i[i.MEDIUM = 4] = "MEDIUM", i[i.HIGH = 8] = "HIGH", i))(ft || {}), he = /* @__PURE__ */ ((i) => (i[i.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER", i[i.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER", i[i.UNIFORM_BUFFER = 35345] = "UNIFORM_BUFFER", i))(he || {});
const Lc = {
  /**
   * Creates a canvas element of the given size.
   * This canvas is created using the browser's native canvas element.
   * @param width - width of the canvas
   * @param height - height of the canvas
   */
  createCanvas: (i, t) => {
    const e = document.createElement("canvas");
    return e.width = i, e.height = t, e;
  },
  getCanvasRenderingContext2D: () => CanvasRenderingContext2D,
  getWebGLRenderingContext: () => WebGLRenderingContext,
  getNavigator: () => navigator,
  getBaseUrl: () => document.baseURI ?? window.location.href,
  getFontFaceSet: () => document.fonts,
  fetch: (i, t) => fetch(i, t),
  parseXML: (i) => new DOMParser().parseFromString(i, "text/xml")
}, L = {
  /**
   * This adapter is used to call methods that are platform dependent.
   * For example `document.createElement` only runs on the web but fails in node environments.
   * This allows us to support more platforms by abstracting away specific implementations per platform.
   *
   * By default the adapter is set to work in the browser. However you can create your own
   * by implementing the `IAdapter` interface. See `IAdapter` for more information.
   * @name ADAPTER
   * @memberof PIXI.settings
   * @type {PIXI.IAdapter}
   * @default PIXI.BrowserAdapter
   */
  ADAPTER: Lc,
  /**
   * Default resolution / device pixel ratio of the renderer.
   * @static
   * @name RESOLUTION
   * @memberof PIXI.settings
   * @type {number}
   * @default 1
   */
  RESOLUTION: 1,
  /**
   * Enables bitmap creation before image load. This feature is experimental.
   * @static
   * @name CREATE_IMAGE_BITMAP
   * @memberof PIXI.settings
   * @type {boolean}
   * @default false
   */
  CREATE_IMAGE_BITMAP: !1,
  /**
   * If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.
   * Advantages can include sharper image quality (like text) and faster rendering on canvas.
   * The main disadvantage is movement of objects may appear less smooth.
   * @static
   * @memberof PIXI.settings
   * @type {boolean}
   * @default false
   */
  ROUND_PIXELS: !1
};
var Ws = /iPhone/i, ho = /iPod/i, lo = /iPad/i, uo = /\biOS-universal(?:.+)Mac\b/i, js = /\bAndroid(?:.+)Mobile\b/i, co = /Android/i, ur = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i, wi = /Silk/i, fe = /Windows Phone/i, fo = /\bWindows(?:.+)ARM\b/i, po = /BlackBerry/i, mo = /BB10/i, go = /Opera Mini/i, yo = /\b(CriOS|Chrome)(?:.+)Mobile/i, _o = /Mobile(?:.+)Firefox\b/i, vo = function(i) {
  return typeof i < "u" && i.platform === "MacIntel" && typeof i.maxTouchPoints == "number" && i.maxTouchPoints > 1 && typeof MSStream > "u";
};
function Uc(i) {
  return function(t) {
    return t.test(i);
  };
}
function xo(i) {
  var t = {
    userAgent: "",
    platform: "",
    maxTouchPoints: 0
  };
  !i && typeof navigator < "u" ? t = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    maxTouchPoints: navigator.maxTouchPoints || 0
  } : typeof i == "string" ? t.userAgent = i : i && i.userAgent && (t = {
    userAgent: i.userAgent,
    platform: i.platform,
    maxTouchPoints: i.maxTouchPoints || 0
  });
  var e = t.userAgent, r = e.split("[FBAN");
  typeof r[1] < "u" && (e = r[0]), r = e.split("Twitter"), typeof r[1] < "u" && (e = r[0]);
  var s = Uc(e), n = {
    apple: {
      phone: s(Ws) && !s(fe),
      ipod: s(ho),
      tablet: !s(Ws) && (s(lo) || vo(t)) && !s(fe),
      universal: s(uo),
      device: (s(Ws) || s(ho) || s(lo) || s(uo) || vo(t)) && !s(fe)
    },
    amazon: {
      phone: s(ur),
      tablet: !s(ur) && s(wi),
      device: s(ur) || s(wi)
    },
    android: {
      phone: !s(fe) && s(ur) || !s(fe) && s(js),
      tablet: !s(fe) && !s(ur) && !s(js) && (s(wi) || s(co)),
      device: !s(fe) && (s(ur) || s(wi) || s(js) || s(co)) || s(/\bokhttp\b/i)
    },
    windows: {
      phone: s(fe),
      tablet: s(fo),
      device: s(fe) || s(fo)
    },
    other: {
      blackberry: s(po),
      blackberry10: s(mo),
      opera: s(go),
      firefox: s(_o),
      chrome: s(yo),
      device: s(po) || s(mo) || s(go) || s(_o) || s(yo)
    },
    any: !1,
    phone: !1,
    tablet: !1
  };
  return n.any = n.apple.device || n.android.device || n.windows.device || n.other.device, n.phone = n.apple.phone || n.android.phone || n.windows.phone, n.tablet = n.apple.tablet || n.android.tablet || n.windows.tablet, n;
}
const kc = xo.default ?? xo, _e = kc(globalThis.navigator);
L.RETINA_PREFIX = /@([0-9\.]+)x/;
L.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = !1;
var ol = { exports: {} };
(function(i) {
  var t = Object.prototype.hasOwnProperty, e = "~";
  function r() {
  }
  Object.create && (r.prototype = /* @__PURE__ */ Object.create(null), new r().__proto__ || (e = !1));
  function s(h, l, u) {
    this.fn = h, this.context = l, this.once = u || !1;
  }
  function n(h, l, u, c, d) {
    if (typeof u != "function")
      throw new TypeError("The listener must be a function");
    var f = new s(u, c || h, d), p = e ? e + l : l;
    return h._events[p] ? h._events[p].fn ? h._events[p] = [h._events[p], f] : h._events[p].push(f) : (h._events[p] = f, h._eventsCount++), h;
  }
  function a(h, l) {
    --h._eventsCount === 0 ? h._events = new r() : delete h._events[l];
  }
  function o() {
    this._events = new r(), this._eventsCount = 0;
  }
  o.prototype.eventNames = function() {
    var l = [], u, c;
    if (this._eventsCount === 0)
      return l;
    for (c in u = this._events)
      t.call(u, c) && l.push(e ? c.slice(1) : c);
    return Object.getOwnPropertySymbols ? l.concat(Object.getOwnPropertySymbols(u)) : l;
  }, o.prototype.listeners = function(l) {
    var u = e ? e + l : l, c = this._events[u];
    if (!c)
      return [];
    if (c.fn)
      return [c.fn];
    for (var d = 0, f = c.length, p = new Array(f); d < f; d++)
      p[d] = c[d].fn;
    return p;
  }, o.prototype.listenerCount = function(l) {
    var u = e ? e + l : l, c = this._events[u];
    return c ? c.fn ? 1 : c.length : 0;
  }, o.prototype.emit = function(l, u, c, d, f, p) {
    var m = e ? e + l : l;
    if (!this._events[m])
      return !1;
    var y = this._events[m], v = arguments.length, b, _;
    if (y.fn) {
      switch (y.once && this.removeListener(l, y.fn, void 0, !0), v) {
        case 1:
          return y.fn.call(y.context), !0;
        case 2:
          return y.fn.call(y.context, u), !0;
        case 3:
          return y.fn.call(y.context, u, c), !0;
        case 4:
          return y.fn.call(y.context, u, c, d), !0;
        case 5:
          return y.fn.call(y.context, u, c, d, f), !0;
        case 6:
          return y.fn.call(y.context, u, c, d, f, p), !0;
      }
      for (_ = 1, b = new Array(v - 1); _ < v; _++)
        b[_ - 1] = arguments[_];
      y.fn.apply(y.context, b);
    } else {
      var g = y.length, w;
      for (_ = 0; _ < g; _++)
        switch (y[_].once && this.removeListener(l, y[_].fn, void 0, !0), v) {
          case 1:
            y[_].fn.call(y[_].context);
            break;
          case 2:
            y[_].fn.call(y[_].context, u);
            break;
          case 3:
            y[_].fn.call(y[_].context, u, c);
            break;
          case 4:
            y[_].fn.call(y[_].context, u, c, d);
            break;
          default:
            if (!b)
              for (w = 1, b = new Array(v - 1); w < v; w++)
                b[w - 1] = arguments[w];
            y[_].fn.apply(y[_].context, b);
        }
    }
    return !0;
  }, o.prototype.on = function(l, u, c) {
    return n(this, l, u, c, !1);
  }, o.prototype.once = function(l, u, c) {
    return n(this, l, u, c, !0);
  }, o.prototype.removeListener = function(l, u, c, d) {
    var f = e ? e + l : l;
    if (!this._events[f])
      return this;
    if (!u)
      return a(this, f), this;
    var p = this._events[f];
    if (p.fn)
      p.fn === u && (!d || p.once) && (!c || p.context === c) && a(this, f);
    else {
      for (var m = 0, y = [], v = p.length; m < v; m++)
        (p[m].fn !== u || d && !p[m].once || c && p[m].context !== c) && y.push(p[m]);
      y.length ? this._events[f] = y.length === 1 ? y[0] : y : a(this, f);
    }
    return this;
  }, o.prototype.removeAllListeners = function(l) {
    var u;
    return l ? (u = e ? e + l : l, this._events[u] && a(this, u)) : (this._events = new r(), this._eventsCount = 0), this;
  }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prefixed = e, o.EventEmitter = o, i.exports = o;
})(ol);
var Gc = ol.exports;
const gi = /* @__PURE__ */ sl(Gc);
var La = { exports: {} };
La.exports = Rs;
La.exports.default = Rs;
function Rs(i, t, e) {
  e = e || 2;
  var r = t && t.length, s = r ? t[0] * e : i.length, n = hl(i, 0, s, e, !0), a = [];
  if (!n || n.next === n.prev)
    return a;
  var o, h, l, u, c, d, f;
  if (r && (n = Xc(i, t, n, e)), i.length > 80 * e) {
    o = l = i[0], h = u = i[1];
    for (var p = e; p < s; p += e)
      c = i[p], d = i[p + 1], c < o && (o = c), d < h && (h = d), c > l && (l = c), d > u && (u = d);
    f = Math.max(l - o, u - h), f = f !== 0 ? 32767 / f : 0;
  }
  return li(n, a, e, o, h, f, 0), a;
}
function hl(i, t, e, r, s) {
  var n, a;
  if (s === Un(i, t, e, r) > 0)
    for (n = t; n < e; n += r)
      a = bo(n, i[n], i[n + 1], a);
  else
    for (n = e - r; n >= t; n -= r)
      a = bo(n, i[n], i[n + 1], a);
  return a && Ms(a, a.next) && (ci(a), a = a.next), a;
}
function ar(i, t) {
  if (!i)
    return i;
  t || (t = i);
  var e = i, r;
  do
    if (r = !1, !e.steiner && (Ms(e, e.next) || at(e.prev, e, e.next) === 0)) {
      if (ci(e), e = t = e.prev, e === e.next)
        break;
      r = !0;
    } else
      e = e.next;
  while (r || e !== t);
  return t;
}
function li(i, t, e, r, s, n, a) {
  if (i) {
    !a && n && Kc(i, r, s, n);
    for (var o = i, h, l; i.prev !== i.next; ) {
      if (h = i.prev, l = i.next, n ? $c(i, r, s, n) : Hc(i)) {
        t.push(h.i / e | 0), t.push(i.i / e | 0), t.push(l.i / e | 0), ci(i), i = l.next, o = l.next;
        continue;
      }
      if (i = l, i === o) {
        a ? a === 1 ? (i = Vc(ar(i), t, e), li(i, t, e, r, s, n, 2)) : a === 2 && zc(i, t, e, r, s, n) : li(ar(i), t, e, r, s, n, 1);
        break;
      }
    }
  }
}
function Hc(i) {
  var t = i.prev, e = i, r = i.next;
  if (at(t, e, r) >= 0)
    return !1;
  for (var s = t.x, n = e.x, a = r.x, o = t.y, h = e.y, l = r.y, u = s < n ? s < a ? s : a : n < a ? n : a, c = o < h ? o < l ? o : l : h < l ? h : l, d = s > n ? s > a ? s : a : n > a ? n : a, f = o > h ? o > l ? o : l : h > l ? h : l, p = r.next; p !== t; ) {
    if (p.x >= u && p.x <= d && p.y >= c && p.y <= f && wr(s, o, n, h, a, l, p.x, p.y) && at(p.prev, p, p.next) >= 0)
      return !1;
    p = p.next;
  }
  return !0;
}
function $c(i, t, e, r) {
  var s = i.prev, n = i, a = i.next;
  if (at(s, n, a) >= 0)
    return !1;
  for (var o = s.x, h = n.x, l = a.x, u = s.y, c = n.y, d = a.y, f = o < h ? o < l ? o : l : h < l ? h : l, p = u < c ? u < d ? u : d : c < d ? c : d, m = o > h ? o > l ? o : l : h > l ? h : l, y = u > c ? u > d ? u : d : c > d ? c : d, v = Nn(f, p, t, e, r), b = Nn(m, y, t, e, r), _ = i.prevZ, g = i.nextZ; _ && _.z >= v && g && g.z <= b; ) {
    if (_.x >= f && _.x <= m && _.y >= p && _.y <= y && _ !== s && _ !== a && wr(o, u, h, c, l, d, _.x, _.y) && at(_.prev, _, _.next) >= 0 || (_ = _.prevZ, g.x >= f && g.x <= m && g.y >= p && g.y <= y && g !== s && g !== a && wr(o, u, h, c, l, d, g.x, g.y) && at(g.prev, g, g.next) >= 0))
      return !1;
    g = g.nextZ;
  }
  for (; _ && _.z >= v; ) {
    if (_.x >= f && _.x <= m && _.y >= p && _.y <= y && _ !== s && _ !== a && wr(o, u, h, c, l, d, _.x, _.y) && at(_.prev, _, _.next) >= 0)
      return !1;
    _ = _.prevZ;
  }
  for (; g && g.z <= b; ) {
    if (g.x >= f && g.x <= m && g.y >= p && g.y <= y && g !== s && g !== a && wr(o, u, h, c, l, d, g.x, g.y) && at(g.prev, g, g.next) >= 0)
      return !1;
    g = g.nextZ;
  }
  return !0;
}
function Vc(i, t, e) {
  var r = i;
  do {
    var s = r.prev, n = r.next.next;
    !Ms(s, n) && ll(s, r, r.next, n) && ui(s, n) && ui(n, s) && (t.push(s.i / e | 0), t.push(r.i / e | 0), t.push(n.i / e | 0), ci(r), ci(r.next), r = i = n), r = r.next;
  } while (r !== i);
  return ar(r);
}
function zc(i, t, e, r, s, n) {
  var a = i;
  do {
    for (var o = a.next.next; o !== a.prev; ) {
      if (a.i !== o.i && Jc(a, o)) {
        var h = ul(a, o);
        a = ar(a, a.next), h = ar(h, h.next), li(a, t, e, r, s, n, 0), li(h, t, e, r, s, n, 0);
        return;
      }
      o = o.next;
    }
    a = a.next;
  } while (a !== i);
}
function Xc(i, t, e, r) {
  var s = [], n, a, o, h, l;
  for (n = 0, a = t.length; n < a; n++)
    o = t[n] * r, h = n < a - 1 ? t[n + 1] * r : i.length, l = hl(i, o, h, r, !1), l === l.next && (l.steiner = !0), s.push(Qc(l));
  for (s.sort(Wc), n = 0; n < s.length; n++)
    e = jc(s[n], e);
  return e;
}
function Wc(i, t) {
  return i.x - t.x;
}
function jc(i, t) {
  var e = Yc(i, t);
  if (!e)
    return t;
  var r = ul(e, i);
  return ar(r, r.next), ar(e, e.next);
}
function Yc(i, t) {
  var e = t, r = i.x, s = i.y, n = -1 / 0, a;
  do {
    if (s <= e.y && s >= e.next.y && e.next.y !== e.y) {
      var o = e.x + (s - e.y) * (e.next.x - e.x) / (e.next.y - e.y);
      if (o <= r && o > n && (n = o, a = e.x < e.next.x ? e : e.next, o === r))
        return a;
    }
    e = e.next;
  } while (e !== t);
  if (!a)
    return null;
  var h = a, l = a.x, u = a.y, c = 1 / 0, d;
  e = a;
  do
    r >= e.x && e.x >= l && r !== e.x && wr(s < u ? r : n, s, l, u, s < u ? n : r, s, e.x, e.y) && (d = Math.abs(s - e.y) / (r - e.x), ui(e, i) && (d < c || d === c && (e.x > a.x || e.x === a.x && qc(a, e))) && (a = e, c = d)), e = e.next;
  while (e !== h);
  return a;
}
function qc(i, t) {
  return at(i.prev, i, t.prev) < 0 && at(t.next, i, i.next) < 0;
}
function Kc(i, t, e, r) {
  var s = i;
  do
    s.z === 0 && (s.z = Nn(s.x, s.y, t, e, r)), s.prevZ = s.prev, s.nextZ = s.next, s = s.next;
  while (s !== i);
  s.prevZ.nextZ = null, s.prevZ = null, Zc(s);
}
function Zc(i) {
  var t, e, r, s, n, a, o, h, l = 1;
  do {
    for (e = i, i = null, n = null, a = 0; e; ) {
      for (a++, r = e, o = 0, t = 0; t < l && (o++, r = r.nextZ, !!r); t++)
        ;
      for (h = l; o > 0 || h > 0 && r; )
        o !== 0 && (h === 0 || !r || e.z <= r.z) ? (s = e, e = e.nextZ, o--) : (s = r, r = r.nextZ, h--), n ? n.nextZ = s : i = s, s.prevZ = n, n = s;
      e = r;
    }
    n.nextZ = null, l *= 2;
  } while (a > 1);
  return i;
}
function Nn(i, t, e, r, s) {
  return i = (i - e) * s | 0, t = (t - r) * s | 0, i = (i | i << 8) & 16711935, i = (i | i << 4) & 252645135, i = (i | i << 2) & 858993459, i = (i | i << 1) & 1431655765, t = (t | t << 8) & 16711935, t = (t | t << 4) & 252645135, t = (t | t << 2) & 858993459, t = (t | t << 1) & 1431655765, i | t << 1;
}
function Qc(i) {
  var t = i, e = i;
  do
    (t.x < e.x || t.x === e.x && t.y < e.y) && (e = t), t = t.next;
  while (t !== i);
  return e;
}
function wr(i, t, e, r, s, n, a, o) {
  return (s - a) * (t - o) >= (i - a) * (n - o) && (i - a) * (r - o) >= (e - a) * (t - o) && (e - a) * (n - o) >= (s - a) * (r - o);
}
function Jc(i, t) {
  return i.next.i !== t.i && i.prev.i !== t.i && !td(i, t) && // dones't intersect other edges
  (ui(i, t) && ui(t, i) && ed(i, t) && // locally visible
  (at(i.prev, i, t.prev) || at(i, t.prev, t)) || // does not create opposite-facing sectors
  Ms(i, t) && at(i.prev, i, i.next) > 0 && at(t.prev, t, t.next) > 0);
}
function at(i, t, e) {
  return (t.y - i.y) * (e.x - t.x) - (t.x - i.x) * (e.y - t.y);
}
function Ms(i, t) {
  return i.x === t.x && i.y === t.y;
}
function ll(i, t, e, r) {
  var s = Si(at(i, t, e)), n = Si(at(i, t, r)), a = Si(at(e, r, i)), o = Si(at(e, r, t));
  return !!(s !== n && a !== o || s === 0 && Ai(i, e, t) || n === 0 && Ai(i, r, t) || a === 0 && Ai(e, i, r) || o === 0 && Ai(e, t, r));
}
function Ai(i, t, e) {
  return t.x <= Math.max(i.x, e.x) && t.x >= Math.min(i.x, e.x) && t.y <= Math.max(i.y, e.y) && t.y >= Math.min(i.y, e.y);
}
function Si(i) {
  return i > 0 ? 1 : i < 0 ? -1 : 0;
}
function td(i, t) {
  var e = i;
  do {
    if (e.i !== i.i && e.next.i !== i.i && e.i !== t.i && e.next.i !== t.i && ll(e, e.next, i, t))
      return !0;
    e = e.next;
  } while (e !== i);
  return !1;
}
function ui(i, t) {
  return at(i.prev, i, i.next) < 0 ? at(i, t, i.next) >= 0 && at(i, i.prev, t) >= 0 : at(i, t, i.prev) < 0 || at(i, i.next, t) < 0;
}
function ed(i, t) {
  var e = i, r = !1, s = (i.x + t.x) / 2, n = (i.y + t.y) / 2;
  do
    e.y > n != e.next.y > n && e.next.y !== e.y && s < (e.next.x - e.x) * (n - e.y) / (e.next.y - e.y) + e.x && (r = !r), e = e.next;
  while (e !== i);
  return r;
}
function ul(i, t) {
  var e = new Ln(i.i, i.x, i.y), r = new Ln(t.i, t.x, t.y), s = i.next, n = t.prev;
  return i.next = t, t.prev = i, e.next = s, s.prev = e, r.next = e, e.prev = r, n.next = r, r.prev = n, r;
}
function bo(i, t, e, r) {
  var s = new Ln(i, t, e);
  return r ? (s.next = r.next, s.prev = r, r.next.prev = s, r.next = s) : (s.prev = s, s.next = s), s;
}
function ci(i) {
  i.next.prev = i.prev, i.prev.next = i.next, i.prevZ && (i.prevZ.nextZ = i.nextZ), i.nextZ && (i.nextZ.prevZ = i.prevZ);
}
function Ln(i, t, e) {
  this.i = i, this.x = t, this.y = e, this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = !1;
}
Rs.deviation = function(i, t, e, r) {
  var s = t && t.length, n = s ? t[0] * e : i.length, a = Math.abs(Un(i, 0, n, e));
  if (s)
    for (var o = 0, h = t.length; o < h; o++) {
      var l = t[o] * e, u = o < h - 1 ? t[o + 1] * e : i.length;
      a -= Math.abs(Un(i, l, u, e));
    }
  var c = 0;
  for (o = 0; o < r.length; o += 3) {
    var d = r[o] * e, f = r[o + 1] * e, p = r[o + 2] * e;
    c += Math.abs(
      (i[d] - i[p]) * (i[f + 1] - i[d + 1]) - (i[d] - i[f]) * (i[p + 1] - i[d + 1])
    );
  }
  return a === 0 && c === 0 ? 0 : Math.abs((c - a) / a);
};
function Un(i, t, e, r) {
  for (var s = 0, n = t, a = e - r; n < e; n += r)
    s += (i[a] - i[n]) * (i[n + 1] + i[a + 1]), a = n;
  return s;
}
Rs.flatten = function(i) {
  for (var t = i[0][0].length, e = { vertices: [], holes: [], dimensions: t }, r = 0, s = 0; s < i.length; s++) {
    for (var n = 0; n < i[s].length; n++)
      for (var a = 0; a < t; a++)
        e.vertices.push(i[s][n][a]);
    s > 0 && (r += i[s - 1].length, e.holes.push(r));
  }
  return e;
};
var rd = La.exports;
const id = /* @__PURE__ */ sl(rd);
var hs = { exports: {} };
/*! https://mths.be/punycode v1.4.1 by @mathias */
hs.exports;
(function(i, t) {
  (function(e) {
    var r = t && !t.nodeType && t, s = i && !i.nodeType && i, n = typeof qi == "object" && qi;
    (n.global === n || n.window === n || n.self === n) && (e = n);
    var a, o = 2147483647, h = 36, l = 1, u = 26, c = 38, d = 700, f = 72, p = 128, m = "-", y = /^xn--/, v = /[^\x20-\x7E]/, b = /[\x2E\u3002\uFF0E\uFF61]/g, _ = {
      overflow: "Overflow: input needs wider integers to process",
      "not-basic": "Illegal input >= 0x80 (not a basic code point)",
      "invalid-input": "Invalid input"
    }, g = h - l, w = Math.floor, R = String.fromCharCode, A;
    function x(D) {
      throw new RangeError(_[D]);
    }
    function T(D, B) {
      for (var Z = D.length, J = []; Z--; )
        J[Z] = B(D[Z]);
      return J;
    }
    function S(D, B) {
      var Z = D.split("@"), J = "";
      Z.length > 1 && (J = Z[0] + "@", D = Z[1]), D = D.replace(b, ".");
      var et = D.split("."), yt = T(et, B).join(".");
      return J + yt;
    }
    function M(D) {
      for (var B = [], Z = 0, J = D.length, et, yt; Z < J; )
        et = D.charCodeAt(Z++), et >= 55296 && et <= 56319 && Z < J ? (yt = D.charCodeAt(Z++), (yt & 64512) == 56320 ? B.push(((et & 1023) << 10) + (yt & 1023) + 65536) : (B.push(et), Z--)) : B.push(et);
      return B;
    }
    function C(D) {
      return T(D, function(B) {
        var Z = "";
        return B > 65535 && (B -= 65536, Z += R(B >>> 10 & 1023 | 55296), B = 56320 | B & 1023), Z += R(B), Z;
      }).join("");
    }
    function E(D) {
      return D - 48 < 10 ? D - 22 : D - 65 < 26 ? D - 65 : D - 97 < 26 ? D - 97 : h;
    }
    function I(D, B) {
      return D + 22 + 75 * (D < 26) - ((B != 0) << 5);
    }
    function G(D, B, Z) {
      var J = 0;
      for (D = Z ? w(D / d) : D >> 1, D += w(D / B); D > g * u >> 1; J += h)
        D = w(D / g);
      return w(J + (g + 1) * D / (D + c));
    }
    function U(D) {
      var B = [], Z = D.length, J, et = 0, yt = p, ct = f, _t, St, Ot, Tt, it, dt, pt, Zt, Qt;
      for (_t = D.lastIndexOf(m), _t < 0 && (_t = 0), St = 0; St < _t; ++St)
        D.charCodeAt(St) >= 128 && x("not-basic"), B.push(D.charCodeAt(St));
      for (Ot = _t > 0 ? _t + 1 : 0; Ot < Z; ) {
        for (Tt = et, it = 1, dt = h; Ot >= Z && x("invalid-input"), pt = E(D.charCodeAt(Ot++)), (pt >= h || pt > w((o - et) / it)) && x("overflow"), et += pt * it, Zt = dt <= ct ? l : dt >= ct + u ? u : dt - ct, !(pt < Zt); dt += h)
          Qt = h - Zt, it > w(o / Qt) && x("overflow"), it *= Qt;
        J = B.length + 1, ct = G(et - Tt, J, Tt == 0), w(et / J) > o - yt && x("overflow"), yt += w(et / J), et %= J, B.splice(et++, 0, yt);
      }
      return C(B);
    }
    function $(D) {
      var B, Z, J, et, yt, ct, _t, St, Ot, Tt, it, dt = [], pt, Zt, Qt, Xr;
      for (D = M(D), pt = D.length, B = p, Z = 0, yt = f, ct = 0; ct < pt; ++ct)
        it = D[ct], it < 128 && dt.push(R(it));
      for (J = et = dt.length, et && dt.push(m); J < pt; ) {
        for (_t = o, ct = 0; ct < pt; ++ct)
          it = D[ct], it >= B && it < _t && (_t = it);
        for (Zt = J + 1, _t - B > w((o - Z) / Zt) && x("overflow"), Z += (_t - B) * Zt, B = _t, ct = 0; ct < pt; ++ct)
          if (it = D[ct], it < B && ++Z > o && x("overflow"), it == B) {
            for (St = Z, Ot = h; Tt = Ot <= yt ? l : Ot >= yt + u ? u : Ot - yt, !(St < Tt); Ot += h)
              Xr = St - Tt, Qt = h - Tt, dt.push(
                R(I(Tt + Xr % Qt, 0))
              ), St = w(Xr / Qt);
            dt.push(R(I(St, 0))), yt = G(Z, Zt, J == et), Z = 0, ++J;
          }
        ++Z, ++B;
      }
      return dt.join("");
    }
    function z(D) {
      return S(D, function(B) {
        return y.test(B) ? U(B.slice(4).toLowerCase()) : B;
      });
    }
    function ht(D) {
      return S(D, function(B) {
        return v.test(B) ? "xn--" + $(B) : B;
      });
    }
    if (a = {
      /**
       * A string representing the current Punycode.js version number.
       * @memberOf punycode
       * @type String
       */
      version: "1.4.1",
      /**
       * An object of methods to convert from JavaScript's internal character
       * representation (UCS-2) to Unicode code points, and back.
       * @see <https://mathiasbynens.be/notes/javascript-encoding>
       * @memberOf punycode
       * @type Object
       */
      ucs2: {
        decode: M,
        encode: C
      },
      decode: U,
      encode: $,
      toASCII: ht,
      toUnicode: z
    }, r && s)
      if (i.exports == r)
        s.exports = a;
      else
        for (A in a)
          a.hasOwnProperty(A) && (r[A] = a[A]);
    else
      e.punycode = a;
  })(qi);
})(hs, hs.exports);
var sd = hs.exports, nd = Error, ad = EvalError, od = RangeError, hd = ReferenceError, cl = SyntaxError, yi = TypeError, ld = URIError, ud = function() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return !1;
  if (typeof Symbol.iterator == "symbol")
    return !0;
  var t = {}, e = Symbol("test"), r = Object(e);
  if (typeof e == "string" || Object.prototype.toString.call(e) !== "[object Symbol]" || Object.prototype.toString.call(r) !== "[object Symbol]")
    return !1;
  var s = 42;
  t[e] = s;
  for (e in t)
    return !1;
  if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
    return !1;
  var n = Object.getOwnPropertySymbols(t);
  if (n.length !== 1 || n[0] !== e || !Object.prototype.propertyIsEnumerable.call(t, e))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var a = Object.getOwnPropertyDescriptor(t, e);
    if (a.value !== s || a.enumerable !== !0)
      return !1;
  }
  return !0;
}, To = typeof Symbol < "u" && Symbol, cd = ud, dd = function() {
  return typeof To != "function" || typeof Symbol != "function" || typeof To("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : cd();
}, Ys = {
  __proto__: null,
  foo: {}
}, fd = Object, pd = function() {
  return { __proto__: Ys }.foo === Ys.foo && !(Ys instanceof fd);
}, md = "Function.prototype.bind called on incompatible ", gd = Object.prototype.toString, yd = Math.max, _d = "[object Function]", Eo = function(t, e) {
  for (var r = [], s = 0; s < t.length; s += 1)
    r[s] = t[s];
  for (var n = 0; n < e.length; n += 1)
    r[n + t.length] = e[n];
  return r;
}, vd = function(t, e) {
  for (var r = [], s = e || 0, n = 0; s < t.length; s += 1, n += 1)
    r[n] = t[s];
  return r;
}, xd = function(i, t) {
  for (var e = "", r = 0; r < i.length; r += 1)
    e += i[r], r + 1 < i.length && (e += t);
  return e;
}, bd = function(t) {
  var e = this;
  if (typeof e != "function" || gd.apply(e) !== _d)
    throw new TypeError(md + e);
  for (var r = vd(arguments, 1), s, n = function() {
    if (this instanceof s) {
      var u = e.apply(
        this,
        Eo(r, arguments)
      );
      return Object(u) === u ? u : this;
    }
    return e.apply(
      t,
      Eo(r, arguments)
    );
  }, a = yd(0, e.length - r.length), o = [], h = 0; h < a; h++)
    o[h] = "$" + h;
  if (s = Function("binder", "return function (" + xd(o, ",") + "){ return binder.apply(this,arguments); }")(n), e.prototype) {
    var l = function() {
    };
    l.prototype = e.prototype, s.prototype = new l(), l.prototype = null;
  }
  return s;
}, Td = bd, Ua = Function.prototype.bind || Td, Ed = Function.prototype.call, wd = Object.prototype.hasOwnProperty, Ad = Ua, Sd = Ad.call(Ed, wd), q, Cd = nd, Id = ad, Pd = od, Rd = hd, Or = cl, Cr = yi, Md = ld, dl = Function, qs = function(i) {
  try {
    return dl('"use strict"; return (' + i + ").constructor;")();
  } catch {
  }
}, er = Object.getOwnPropertyDescriptor;
if (er)
  try {
    er({}, "");
  } catch {
    er = null;
  }
var Ks = function() {
  throw new Cr();
}, Bd = er ? function() {
  try {
    return arguments.callee, Ks;
  } catch {
    try {
      return er(arguments, "callee").get;
    } catch {
      return Ks;
    }
  }
}() : Ks, cr = dd(), Dd = pd(), xt = Object.getPrototypeOf || (Dd ? function(i) {
  return i.__proto__;
} : null), mr = {}, Fd = typeof Uint8Array > "u" || !xt ? q : xt(Uint8Array), rr = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? q : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? q : ArrayBuffer,
  "%ArrayIteratorPrototype%": cr && xt ? xt([][Symbol.iterator]()) : q,
  "%AsyncFromSyncIteratorPrototype%": q,
  "%AsyncFunction%": mr,
  "%AsyncGenerator%": mr,
  "%AsyncGeneratorFunction%": mr,
  "%AsyncIteratorPrototype%": mr,
  "%Atomics%": typeof Atomics > "u" ? q : Atomics,
  "%BigInt%": typeof BigInt > "u" ? q : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? q : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? q : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? q : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Cd,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": Id,
  "%Float32Array%": typeof Float32Array > "u" ? q : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? q : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? q : FinalizationRegistry,
  "%Function%": dl,
  "%GeneratorFunction%": mr,
  "%Int8Array%": typeof Int8Array > "u" ? q : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? q : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? q : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": cr && xt ? xt(xt([][Symbol.iterator]())) : q,
  "%JSON%": typeof JSON == "object" ? JSON : q,
  "%Map%": typeof Map > "u" ? q : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !cr || !xt ? q : xt((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? q : Promise,
  "%Proxy%": typeof Proxy > "u" ? q : Proxy,
  "%RangeError%": Pd,
  "%ReferenceError%": Rd,
  "%Reflect%": typeof Reflect > "u" ? q : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? q : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !cr || !xt ? q : xt((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? q : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": cr && xt ? xt(""[Symbol.iterator]()) : q,
  "%Symbol%": cr ? Symbol : q,
  "%SyntaxError%": Or,
  "%ThrowTypeError%": Bd,
  "%TypedArray%": Fd,
  "%TypeError%": Cr,
  "%Uint8Array%": typeof Uint8Array > "u" ? q : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? q : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? q : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? q : Uint32Array,
  "%URIError%": Md,
  "%WeakMap%": typeof WeakMap > "u" ? q : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? q : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? q : WeakSet
};
if (xt)
  try {
    null.error;
  } catch (i) {
    var Od = xt(xt(i));
    rr["%Error.prototype%"] = Od;
  }
var Nd = function i(t) {
  var e;
  if (t === "%AsyncFunction%")
    e = qs("async function () {}");
  else if (t === "%GeneratorFunction%")
    e = qs("function* () {}");
  else if (t === "%AsyncGeneratorFunction%")
    e = qs("async function* () {}");
  else if (t === "%AsyncGenerator%") {
    var r = i("%AsyncGeneratorFunction%");
    r && (e = r.prototype);
  } else if (t === "%AsyncIteratorPrototype%") {
    var s = i("%AsyncGenerator%");
    s && xt && (e = xt(s.prototype));
  }
  return rr[t] = e, e;
}, wo = {
  __proto__: null,
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, _i = Ua, ls = Sd, Ld = _i.call(Function.call, Array.prototype.concat), Ud = _i.call(Function.apply, Array.prototype.splice), Ao = _i.call(Function.call, String.prototype.replace), us = _i.call(Function.call, String.prototype.slice), kd = _i.call(Function.call, RegExp.prototype.exec), Gd = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Hd = /\\(\\)?/g, $d = function(t) {
  var e = us(t, 0, 1), r = us(t, -1);
  if (e === "%" && r !== "%")
    throw new Or("invalid intrinsic syntax, expected closing `%`");
  if (r === "%" && e !== "%")
    throw new Or("invalid intrinsic syntax, expected opening `%`");
  var s = [];
  return Ao(t, Gd, function(n, a, o, h) {
    s[s.length] = o ? Ao(h, Hd, "$1") : a || n;
  }), s;
}, Vd = function(t, e) {
  var r = t, s;
  if (ls(wo, r) && (s = wo[r], r = "%" + s[0] + "%"), ls(rr, r)) {
    var n = rr[r];
    if (n === mr && (n = Nd(r)), typeof n > "u" && !e)
      throw new Cr("intrinsic " + t + " exists, but is not available. Please file an issue!");
    return {
      alias: s,
      name: r,
      value: n
    };
  }
  throw new Or("intrinsic " + t + " does not exist!");
}, Hr = function(t, e) {
  if (typeof t != "string" || t.length === 0)
    throw new Cr("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof e != "boolean")
    throw new Cr('"allowMissing" argument must be a boolean');
  if (kd(/^%?[^%]*%?$/, t) === null)
    throw new Or("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var r = $d(t), s = r.length > 0 ? r[0] : "", n = Vd("%" + s + "%", e), a = n.name, o = n.value, h = !1, l = n.alias;
  l && (s = l[0], Ud(r, Ld([0, 1], l)));
  for (var u = 1, c = !0; u < r.length; u += 1) {
    var d = r[u], f = us(d, 0, 1), p = us(d, -1);
    if ((f === '"' || f === "'" || f === "`" || p === '"' || p === "'" || p === "`") && f !== p)
      throw new Or("property names with quotes must have matching quotes");
    if ((d === "constructor" || !c) && (h = !0), s += "." + d, a = "%" + s + "%", ls(rr, a))
      o = rr[a];
    else if (o != null) {
      if (!(d in o)) {
        if (!e)
          throw new Cr("base intrinsic for " + t + " exists, but the property is not available.");
        return;
      }
      if (er && u + 1 >= r.length) {
        var m = er(o, d);
        c = !!m, c && "get" in m && !("originalValue" in m.get) ? o = m.get : o = o[d];
      } else
        c = ls(o, d), o = o[d];
      c && !h && (rr[a] = o);
    }
  }
  return o;
}, fl = { exports: {} }, Zs, So;
function ka() {
  if (So)
    return Zs;
  So = 1;
  var i = Hr, t = i("%Object.defineProperty%", !0) || !1;
  if (t)
    try {
      t({}, "a", { value: 1 });
    } catch {
      t = !1;
    }
  return Zs = t, Zs;
}
var zd = Hr, Ki = zd("%Object.getOwnPropertyDescriptor%", !0);
if (Ki)
  try {
    Ki([], "length");
  } catch {
    Ki = null;
  }
var pl = Ki, Co = ka(), Xd = cl, dr = yi, Io = pl, Wd = function(t, e, r) {
  if (!t || typeof t != "object" && typeof t != "function")
    throw new dr("`obj` must be an object or a function`");
  if (typeof e != "string" && typeof e != "symbol")
    throw new dr("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new dr("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new dr("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new dr("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new dr("`loose`, if provided, must be a boolean");
  var s = arguments.length > 3 ? arguments[3] : null, n = arguments.length > 4 ? arguments[4] : null, a = arguments.length > 5 ? arguments[5] : null, o = arguments.length > 6 ? arguments[6] : !1, h = !!Io && Io(t, e);
  if (Co)
    Co(t, e, {
      configurable: a === null && h ? h.configurable : !a,
      enumerable: s === null && h ? h.enumerable : !s,
      value: r,
      writable: n === null && h ? h.writable : !n
    });
  else if (o || !s && !n && !a)
    t[e] = r;
  else
    throw new Xd("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, kn = ka(), ml = function() {
  return !!kn;
};
ml.hasArrayLengthDefineBug = function() {
  if (!kn)
    return null;
  try {
    return kn([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var jd = ml, Yd = Hr, Po = Wd, qd = jd(), Ro = pl, Mo = yi, Kd = Yd("%Math.floor%"), Zd = function(t, e) {
  if (typeof t != "function")
    throw new Mo("`fn` is not a function");
  if (typeof e != "number" || e < 0 || e > 4294967295 || Kd(e) !== e)
    throw new Mo("`length` must be a positive 32-bit integer");
  var r = arguments.length > 2 && !!arguments[2], s = !0, n = !0;
  if ("length" in t && Ro) {
    var a = Ro(t, "length");
    a && !a.configurable && (s = !1), a && !a.writable && (n = !1);
  }
  return (s || n || !r) && (qd ? Po(
    /** @type {Parameters<define>[0]} */
    t,
    "length",
    e,
    !0,
    !0
  ) : Po(
    /** @type {Parameters<define>[0]} */
    t,
    "length",
    e
  )), t;
};
(function(i) {
  var t = Ua, e = Hr, r = Zd, s = yi, n = e("%Function.prototype.apply%"), a = e("%Function.prototype.call%"), o = e("%Reflect.apply%", !0) || t.call(a, n), h = ka(), l = e("%Math.max%");
  i.exports = function(d) {
    if (typeof d != "function")
      throw new s("a function is required");
    var f = o(t, a, arguments);
    return r(
      f,
      1 + l(0, d.length - (arguments.length - 1)),
      !0
    );
  };
  var u = function() {
    return o(t, n, arguments);
  };
  h ? h(i.exports, "apply", { value: u }) : i.exports.apply = u;
})(fl);
var Qd = fl.exports, gl = Hr, yl = Qd, Jd = yl(gl("String.prototype.indexOf")), tf = function(t, e) {
  var r = gl(t, !!e);
  return typeof r == "function" && Jd(t, ".prototype.") > -1 ? yl(r) : r;
};
const ef = {}, rf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ef
}, Symbol.toStringTag, { value: "Module" })), sf = /* @__PURE__ */ Pc(rf);
var Ga = typeof Map == "function" && Map.prototype, Qs = Object.getOwnPropertyDescriptor && Ga ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, cs = Ga && Qs && typeof Qs.get == "function" ? Qs.get : null, Bo = Ga && Map.prototype.forEach, Ha = typeof Set == "function" && Set.prototype, Js = Object.getOwnPropertyDescriptor && Ha ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, ds = Ha && Js && typeof Js.get == "function" ? Js.get : null, Do = Ha && Set.prototype.forEach, nf = typeof WeakMap == "function" && WeakMap.prototype, ni = nf ? WeakMap.prototype.has : null, af = typeof WeakSet == "function" && WeakSet.prototype, ai = af ? WeakSet.prototype.has : null, of = typeof WeakRef == "function" && WeakRef.prototype, Fo = of ? WeakRef.prototype.deref : null, hf = Boolean.prototype.valueOf, lf = Object.prototype.toString, uf = Function.prototype.toString, cf = String.prototype.match, $a = String.prototype.slice, Oe = String.prototype.replace, df = String.prototype.toUpperCase, Oo = String.prototype.toLowerCase, _l = RegExp.prototype.test, No = Array.prototype.concat, ae = Array.prototype.join, ff = Array.prototype.slice, Lo = Math.floor, Gn = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, tn = Object.getOwnPropertySymbols, Hn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, Nr = typeof Symbol == "function" && typeof Symbol.iterator == "object", Rt = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Nr || !0) ? Symbol.toStringTag : null, vl = Object.prototype.propertyIsEnumerable, Uo = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(i) {
  return i.__proto__;
} : null);
function ko(i, t) {
  if (i === 1 / 0 || i === -1 / 0 || i !== i || i && i > -1e3 && i < 1e3 || _l.call(/e/, t))
    return t;
  var e = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof i == "number") {
    var r = i < 0 ? -Lo(-i) : Lo(i);
    if (r !== i) {
      var s = String(r), n = $a.call(t, s.length + 1);
      return Oe.call(s, e, "$&_") + "." + Oe.call(Oe.call(n, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return Oe.call(t, e, "$&_");
}
var $n = sf, Go = $n.custom, Ho = bl(Go) ? Go : null, pf = function i(t, e, r, s) {
  var n = e || {};
  if (Be(n, "quoteStyle") && n.quoteStyle !== "single" && n.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (Be(n, "maxStringLength") && (typeof n.maxStringLength == "number" ? n.maxStringLength < 0 && n.maxStringLength !== 1 / 0 : n.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var a = Be(n, "customInspect") ? n.customInspect : !0;
  if (typeof a != "boolean" && a !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (Be(n, "indent") && n.indent !== null && n.indent !== "	" && !(parseInt(n.indent, 10) === n.indent && n.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (Be(n, "numericSeparator") && typeof n.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var o = n.numericSeparator;
  if (typeof t > "u")
    return "undefined";
  if (t === null)
    return "null";
  if (typeof t == "boolean")
    return t ? "true" : "false";
  if (typeof t == "string")
    return El(t, n);
  if (typeof t == "number") {
    if (t === 0)
      return 1 / 0 / t > 0 ? "0" : "-0";
    var h = String(t);
    return o ? ko(t, h) : h;
  }
  if (typeof t == "bigint") {
    var l = String(t) + "n";
    return o ? ko(t, l) : l;
  }
  var u = typeof n.depth > "u" ? 5 : n.depth;
  if (typeof r > "u" && (r = 0), r >= u && u > 0 && typeof t == "object")
    return Vn(t) ? "[Array]" : "[Object]";
  var c = Bf(n, r);
  if (typeof s > "u")
    s = [];
  else if (Tl(s, t) >= 0)
    return "[Circular]";
  function d(E, I, G) {
    if (I && (s = ff.call(s), s.push(I)), G) {
      var U = {
        depth: n.depth
      };
      return Be(n, "quoteStyle") && (U.quoteStyle = n.quoteStyle), i(E, U, r + 1, s);
    }
    return i(E, n, r + 1, s);
  }
  if (typeof t == "function" && !$o(t)) {
    var f = Ef(t), p = Ci(t, d);
    return "[Function" + (f ? ": " + f : " (anonymous)") + "]" + (p.length > 0 ? " { " + ae.call(p, ", ") + " }" : "");
  }
  if (bl(t)) {
    var m = Nr ? Oe.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : Hn.call(t);
    return typeof t == "object" && !Nr ? Wr(m) : m;
  }
  if (Pf(t)) {
    for (var y = "<" + Oo.call(String(t.nodeName)), v = t.attributes || [], b = 0; b < v.length; b++)
      y += " " + v[b].name + "=" + xl(mf(v[b].value), "double", n);
    return y += ">", t.childNodes && t.childNodes.length && (y += "..."), y += "</" + Oo.call(String(t.nodeName)) + ">", y;
  }
  if (Vn(t)) {
    if (t.length === 0)
      return "[]";
    var _ = Ci(t, d);
    return c && !Mf(_) ? "[" + zn(_, c) + "]" : "[ " + ae.call(_, ", ") + " ]";
  }
  if (yf(t)) {
    var g = Ci(t, d);
    return !("cause" in Error.prototype) && "cause" in t && !vl.call(t, "cause") ? "{ [" + String(t) + "] " + ae.call(No.call("[cause]: " + d(t.cause), g), ", ") + " }" : g.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + ae.call(g, ", ") + " }";
  }
  if (typeof t == "object" && a) {
    if (Ho && typeof t[Ho] == "function" && $n)
      return $n(t, { depth: u - r });
    if (a !== "symbol" && typeof t.inspect == "function")
      return t.inspect();
  }
  if (wf(t)) {
    var w = [];
    return Bo && Bo.call(t, function(E, I) {
      w.push(d(I, t, !0) + " => " + d(E, t));
    }), Vo("Map", cs.call(t), w, c);
  }
  if (Cf(t)) {
    var R = [];
    return Do && Do.call(t, function(E) {
      R.push(d(E, t));
    }), Vo("Set", ds.call(t), R, c);
  }
  if (Af(t))
    return en("WeakMap");
  if (If(t))
    return en("WeakSet");
  if (Sf(t))
    return en("WeakRef");
  if (vf(t))
    return Wr(d(Number(t)));
  if (bf(t))
    return Wr(d(Gn.call(t)));
  if (xf(t))
    return Wr(hf.call(t));
  if (_f(t))
    return Wr(d(String(t)));
  if (typeof window < "u" && t === window)
    return "{ [object Window] }";
  if (t === qi)
    return "{ [object globalThis] }";
  if (!gf(t) && !$o(t)) {
    var A = Ci(t, d), x = Uo ? Uo(t) === Object.prototype : t instanceof Object || t.constructor === Object, T = t instanceof Object ? "" : "null prototype", S = !x && Rt && Object(t) === t && Rt in t ? $a.call($e(t), 8, -1) : T ? "Object" : "", M = x || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "", C = M + (S || T ? "[" + ae.call(No.call([], S || [], T || []), ": ") + "] " : "");
    return A.length === 0 ? C + "{}" : c ? C + "{" + zn(A, c) + "}" : C + "{ " + ae.call(A, ", ") + " }";
  }
  return String(t);
};
function xl(i, t, e) {
  var r = (e.quoteStyle || t) === "double" ? '"' : "'";
  return r + i + r;
}
function mf(i) {
  return Oe.call(String(i), /"/g, "&quot;");
}
function Vn(i) {
  return $e(i) === "[object Array]" && (!Rt || !(typeof i == "object" && Rt in i));
}
function gf(i) {
  return $e(i) === "[object Date]" && (!Rt || !(typeof i == "object" && Rt in i));
}
function $o(i) {
  return $e(i) === "[object RegExp]" && (!Rt || !(typeof i == "object" && Rt in i));
}
function yf(i) {
  return $e(i) === "[object Error]" && (!Rt || !(typeof i == "object" && Rt in i));
}
function _f(i) {
  return $e(i) === "[object String]" && (!Rt || !(typeof i == "object" && Rt in i));
}
function vf(i) {
  return $e(i) === "[object Number]" && (!Rt || !(typeof i == "object" && Rt in i));
}
function xf(i) {
  return $e(i) === "[object Boolean]" && (!Rt || !(typeof i == "object" && Rt in i));
}
function bl(i) {
  if (Nr)
    return i && typeof i == "object" && i instanceof Symbol;
  if (typeof i == "symbol")
    return !0;
  if (!i || typeof i != "object" || !Hn)
    return !1;
  try {
    return Hn.call(i), !0;
  } catch {
  }
  return !1;
}
function bf(i) {
  if (!i || typeof i != "object" || !Gn)
    return !1;
  try {
    return Gn.call(i), !0;
  } catch {
  }
  return !1;
}
var Tf = Object.prototype.hasOwnProperty || function(i) {
  return i in this;
};
function Be(i, t) {
  return Tf.call(i, t);
}
function $e(i) {
  return lf.call(i);
}
function Ef(i) {
  if (i.name)
    return i.name;
  var t = cf.call(uf.call(i), /^function\s*([\w$]+)/);
  return t ? t[1] : null;
}
function Tl(i, t) {
  if (i.indexOf)
    return i.indexOf(t);
  for (var e = 0, r = i.length; e < r; e++)
    if (i[e] === t)
      return e;
  return -1;
}
function wf(i) {
  if (!cs || !i || typeof i != "object")
    return !1;
  try {
    cs.call(i);
    try {
      ds.call(i);
    } catch {
      return !0;
    }
    return i instanceof Map;
  } catch {
  }
  return !1;
}
function Af(i) {
  if (!ni || !i || typeof i != "object")
    return !1;
  try {
    ni.call(i, ni);
    try {
      ai.call(i, ai);
    } catch {
      return !0;
    }
    return i instanceof WeakMap;
  } catch {
  }
  return !1;
}
function Sf(i) {
  if (!Fo || !i || typeof i != "object")
    return !1;
  try {
    return Fo.call(i), !0;
  } catch {
  }
  return !1;
}
function Cf(i) {
  if (!ds || !i || typeof i != "object")
    return !1;
  try {
    ds.call(i);
    try {
      cs.call(i);
    } catch {
      return !0;
    }
    return i instanceof Set;
  } catch {
  }
  return !1;
}
function If(i) {
  if (!ai || !i || typeof i != "object")
    return !1;
  try {
    ai.call(i, ai);
    try {
      ni.call(i, ni);
    } catch {
      return !0;
    }
    return i instanceof WeakSet;
  } catch {
  }
  return !1;
}
function Pf(i) {
  return !i || typeof i != "object" ? !1 : typeof HTMLElement < "u" && i instanceof HTMLElement ? !0 : typeof i.nodeName == "string" && typeof i.getAttribute == "function";
}
function El(i, t) {
  if (i.length > t.maxStringLength) {
    var e = i.length - t.maxStringLength, r = "... " + e + " more character" + (e > 1 ? "s" : "");
    return El($a.call(i, 0, t.maxStringLength), t) + r;
  }
  var s = Oe.call(Oe.call(i, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, Rf);
  return xl(s, "single", t);
}
function Rf(i) {
  var t = i.charCodeAt(0), e = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[t];
  return e ? "\\" + e : "\\x" + (t < 16 ? "0" : "") + df.call(t.toString(16));
}
function Wr(i) {
  return "Object(" + i + ")";
}
function en(i) {
  return i + " { ? }";
}
function Vo(i, t, e, r) {
  var s = r ? zn(e, r) : ae.call(e, ", ");
  return i + " (" + t + ") {" + s + "}";
}
function Mf(i) {
  for (var t = 0; t < i.length; t++)
    if (Tl(i[t], `
`) >= 0)
      return !1;
  return !0;
}
function Bf(i, t) {
  var e;
  if (i.indent === "	")
    e = "	";
  else if (typeof i.indent == "number" && i.indent > 0)
    e = ae.call(Array(i.indent + 1), " ");
  else
    return null;
  return {
    base: e,
    prev: ae.call(Array(t + 1), e)
  };
}
function zn(i, t) {
  if (i.length === 0)
    return "";
  var e = `
` + t.prev + t.base;
  return e + ae.call(i, "," + e) + `
` + t.prev;
}
function Ci(i, t) {
  var e = Vn(i), r = [];
  if (e) {
    r.length = i.length;
    for (var s = 0; s < i.length; s++)
      r[s] = Be(i, s) ? t(i[s], i) : "";
  }
  var n = typeof tn == "function" ? tn(i) : [], a;
  if (Nr) {
    a = {};
    for (var o = 0; o < n.length; o++)
      a["$" + n[o]] = n[o];
  }
  for (var h in i)
    Be(i, h) && (e && String(Number(h)) === h && h < i.length || Nr && a["$" + h] instanceof Symbol || (_l.call(/[^\w$]/, h) ? r.push(t(h, i) + ": " + t(i[h], i)) : r.push(h + ": " + t(i[h], i))));
  if (typeof tn == "function")
    for (var l = 0; l < n.length; l++)
      vl.call(i, n[l]) && r.push("[" + t(n[l]) + "]: " + t(i[n[l]], i));
  return r;
}
var wl = Hr, $r = tf, Df = pf, Ff = yi, Ii = wl("%WeakMap%", !0), Pi = wl("%Map%", !0), Of = $r("WeakMap.prototype.get", !0), Nf = $r("WeakMap.prototype.set", !0), Lf = $r("WeakMap.prototype.has", !0), Uf = $r("Map.prototype.get", !0), kf = $r("Map.prototype.set", !0), Gf = $r("Map.prototype.has", !0), Va = function(i, t) {
  for (var e = i, r; (r = e.next) !== null; e = r)
    if (r.key === t)
      return e.next = r.next, r.next = i.next, i.next = r, r;
}, Hf = function(i, t) {
  var e = Va(i, t);
  return e && e.value;
}, $f = function(i, t, e) {
  var r = Va(i, t);
  r ? r.value = e : i.next = {
    // eslint-disable-line no-param-reassign
    key: t,
    next: i.next,
    value: e
  };
}, Vf = function(i, t) {
  return !!Va(i, t);
}, zf = function() {
  var t, e, r, s = {
    assert: function(n) {
      if (!s.has(n))
        throw new Ff("Side channel does not contain " + Df(n));
    },
    get: function(n) {
      if (Ii && n && (typeof n == "object" || typeof n == "function")) {
        if (t)
          return Of(t, n);
      } else if (Pi) {
        if (e)
          return Uf(e, n);
      } else if (r)
        return Hf(r, n);
    },
    has: function(n) {
      if (Ii && n && (typeof n == "object" || typeof n == "function")) {
        if (t)
          return Lf(t, n);
      } else if (Pi) {
        if (e)
          return Gf(e, n);
      } else if (r)
        return Vf(r, n);
      return !1;
    },
    set: function(n, a) {
      Ii && n && (typeof n == "object" || typeof n == "function") ? (t || (t = new Ii()), Nf(t, n, a)) : Pi ? (e || (e = new Pi()), kf(e, n, a)) : (r || (r = { key: {}, next: null }), $f(r, n, a));
    }
  };
  return s;
}, Xf = String.prototype.replace, Wf = /%20/g, rn = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, za = {
  default: rn.RFC3986,
  formatters: {
    RFC1738: function(i) {
      return Xf.call(i, Wf, "+");
    },
    RFC3986: function(i) {
      return String(i);
    }
  },
  RFC1738: rn.RFC1738,
  RFC3986: rn.RFC3986
}, jf = za, sn = Object.prototype.hasOwnProperty, Je = Array.isArray, Jt = function() {
  for (var i = [], t = 0; t < 256; ++t)
    i.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
  return i;
}(), Yf = function(t) {
  for (; t.length > 1; ) {
    var e = t.pop(), r = e.obj[e.prop];
    if (Je(r)) {
      for (var s = [], n = 0; n < r.length; ++n)
        typeof r[n] < "u" && s.push(r[n]);
      e.obj[e.prop] = s;
    }
  }
}, Al = function(t, e) {
  for (var r = e && e.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, s = 0; s < t.length; ++s)
    typeof t[s] < "u" && (r[s] = t[s]);
  return r;
}, qf = function i(t, e, r) {
  if (!e)
    return t;
  if (typeof e != "object") {
    if (Je(t))
      t.push(e);
    else if (t && typeof t == "object")
      (r && (r.plainObjects || r.allowPrototypes) || !sn.call(Object.prototype, e)) && (t[e] = !0);
    else
      return [t, e];
    return t;
  }
  if (!t || typeof t != "object")
    return [t].concat(e);
  var s = t;
  return Je(t) && !Je(e) && (s = Al(t, r)), Je(t) && Je(e) ? (e.forEach(function(n, a) {
    if (sn.call(t, a)) {
      var o = t[a];
      o && typeof o == "object" && n && typeof n == "object" ? t[a] = i(o, n, r) : t.push(n);
    } else
      t[a] = n;
  }), t) : Object.keys(e).reduce(function(n, a) {
    var o = e[a];
    return sn.call(n, a) ? n[a] = i(n[a], o, r) : n[a] = o, n;
  }, s);
}, Kf = function(t, e) {
  return Object.keys(e).reduce(function(r, s) {
    return r[s] = e[s], r;
  }, t);
}, Zf = function(i, t, e) {
  var r = i.replace(/\+/g, " ");
  if (e === "iso-8859-1")
    return r.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(r);
  } catch {
    return r;
  }
}, Qf = function(t, e, r, s, n) {
  if (t.length === 0)
    return t;
  var a = t;
  if (typeof t == "symbol" ? a = Symbol.prototype.toString.call(t) : typeof t != "string" && (a = String(t)), r === "iso-8859-1")
    return escape(a).replace(/%u[0-9a-f]{4}/gi, function(u) {
      return "%26%23" + parseInt(u.slice(2), 16) + "%3B";
    });
  for (var o = "", h = 0; h < a.length; ++h) {
    var l = a.charCodeAt(h);
    if (l === 45 || l === 46 || l === 95 || l === 126 || l >= 48 && l <= 57 || l >= 65 && l <= 90 || l >= 97 && l <= 122 || n === jf.RFC1738 && (l === 40 || l === 41)) {
      o += a.charAt(h);
      continue;
    }
    if (l < 128) {
      o = o + Jt[l];
      continue;
    }
    if (l < 2048) {
      o = o + (Jt[192 | l >> 6] + Jt[128 | l & 63]);
      continue;
    }
    if (l < 55296 || l >= 57344) {
      o = o + (Jt[224 | l >> 12] + Jt[128 | l >> 6 & 63] + Jt[128 | l & 63]);
      continue;
    }
    h += 1, l = 65536 + ((l & 1023) << 10 | a.charCodeAt(h) & 1023), o += Jt[240 | l >> 18] + Jt[128 | l >> 12 & 63] + Jt[128 | l >> 6 & 63] + Jt[128 | l & 63];
  }
  return o;
}, Jf = function(t) {
  for (var e = [{ obj: { o: t }, prop: "o" }], r = [], s = 0; s < e.length; ++s)
    for (var n = e[s], a = n.obj[n.prop], o = Object.keys(a), h = 0; h < o.length; ++h) {
      var l = o[h], u = a[l];
      typeof u == "object" && u !== null && r.indexOf(u) === -1 && (e.push({ obj: a, prop: l }), r.push(u));
    }
  return Yf(e), t;
}, tp = function(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}, ep = function(t) {
  return !t || typeof t != "object" ? !1 : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t));
}, rp = function(t, e) {
  return [].concat(t, e);
}, ip = function(t, e) {
  if (Je(t)) {
    for (var r = [], s = 0; s < t.length; s += 1)
      r.push(e(t[s]));
    return r;
  }
  return e(t);
}, Sl = {
  arrayToObject: Al,
  assign: Kf,
  combine: rp,
  compact: Jf,
  decode: Zf,
  encode: Qf,
  isBuffer: ep,
  isRegExp: tp,
  maybeMap: ip,
  merge: qf
}, Cl = zf, Zi = Sl, oi = za, sp = Object.prototype.hasOwnProperty, zo = {
  brackets: function(t) {
    return t + "[]";
  },
  comma: "comma",
  indices: function(t, e) {
    return t + "[" + e + "]";
  },
  repeat: function(t) {
    return t;
  }
}, me = Array.isArray, np = Array.prototype.push, Il = function(i, t) {
  np.apply(i, me(t) ? t : [t]);
}, ap = Date.prototype.toISOString, Xo = oi.default, Ct = {
  addQueryPrefix: !1,
  allowDots: !1,
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encoder: Zi.encode,
  encodeValuesOnly: !1,
  format: Xo,
  formatter: oi.formatters[Xo],
  // deprecated
  indices: !1,
  serializeDate: function(t) {
    return ap.call(t);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, op = function(t) {
  return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint";
}, nn = {}, hp = function i(t, e, r, s, n, a, o, h, l, u, c, d, f, p, m, y) {
  for (var v = t, b = y, _ = 0, g = !1; (b = b.get(nn)) !== void 0 && !g; ) {
    var w = b.get(t);
    if (_ += 1, typeof w < "u") {
      if (w === _)
        throw new RangeError("Cyclic object value");
      g = !0;
    }
    typeof b.get(nn) > "u" && (_ = 0);
  }
  if (typeof h == "function" ? v = h(e, v) : v instanceof Date ? v = c(v) : r === "comma" && me(v) && (v = Zi.maybeMap(v, function(U) {
    return U instanceof Date ? c(U) : U;
  })), v === null) {
    if (n)
      return o && !p ? o(e, Ct.encoder, m, "key", d) : e;
    v = "";
  }
  if (op(v) || Zi.isBuffer(v)) {
    if (o) {
      var R = p ? e : o(e, Ct.encoder, m, "key", d);
      return [f(R) + "=" + f(o(v, Ct.encoder, m, "value", d))];
    }
    return [f(e) + "=" + f(String(v))];
  }
  var A = [];
  if (typeof v > "u")
    return A;
  var x;
  if (r === "comma" && me(v))
    p && o && (v = Zi.maybeMap(v, o)), x = [{ value: v.length > 0 ? v.join(",") || null : void 0 }];
  else if (me(h))
    x = h;
  else {
    var T = Object.keys(v);
    x = l ? T.sort(l) : T;
  }
  for (var S = s && me(v) && v.length === 1 ? e + "[]" : e, M = 0; M < x.length; ++M) {
    var C = x[M], E = typeof C == "object" && typeof C.value < "u" ? C.value : v[C];
    if (!(a && E === null)) {
      var I = me(v) ? typeof r == "function" ? r(S, C) : S : S + (u ? "." + C : "[" + C + "]");
      y.set(t, _);
      var G = Cl();
      G.set(nn, y), Il(A, i(
        E,
        I,
        r,
        s,
        n,
        a,
        r === "comma" && p && me(v) ? null : o,
        h,
        l,
        u,
        c,
        d,
        f,
        p,
        m,
        G
      ));
    }
  }
  return A;
}, lp = function(t) {
  if (!t)
    return Ct;
  if (t.encoder !== null && typeof t.encoder < "u" && typeof t.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var e = t.charset || Ct.charset;
  if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var r = oi.default;
  if (typeof t.format < "u") {
    if (!sp.call(oi.formatters, t.format))
      throw new TypeError("Unknown format option provided.");
    r = t.format;
  }
  var s = oi.formatters[r], n = Ct.filter;
  return (typeof t.filter == "function" || me(t.filter)) && (n = t.filter), {
    addQueryPrefix: typeof t.addQueryPrefix == "boolean" ? t.addQueryPrefix : Ct.addQueryPrefix,
    allowDots: typeof t.allowDots > "u" ? Ct.allowDots : !!t.allowDots,
    charset: e,
    charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : Ct.charsetSentinel,
    delimiter: typeof t.delimiter > "u" ? Ct.delimiter : t.delimiter,
    encode: typeof t.encode == "boolean" ? t.encode : Ct.encode,
    encoder: typeof t.encoder == "function" ? t.encoder : Ct.encoder,
    encodeValuesOnly: typeof t.encodeValuesOnly == "boolean" ? t.encodeValuesOnly : Ct.encodeValuesOnly,
    filter: n,
    format: r,
    formatter: s,
    serializeDate: typeof t.serializeDate == "function" ? t.serializeDate : Ct.serializeDate,
    skipNulls: typeof t.skipNulls == "boolean" ? t.skipNulls : Ct.skipNulls,
    sort: typeof t.sort == "function" ? t.sort : null,
    strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : Ct.strictNullHandling
  };
}, up = function(i, t) {
  var e = i, r = lp(t), s, n;
  typeof r.filter == "function" ? (n = r.filter, e = n("", e)) : me(r.filter) && (n = r.filter, s = n);
  var a = [];
  if (typeof e != "object" || e === null)
    return "";
  var o;
  t && t.arrayFormat in zo ? o = t.arrayFormat : t && "indices" in t ? o = t.indices ? "indices" : "repeat" : o = "indices";
  var h = zo[o];
  if (t && "commaRoundTrip" in t && typeof t.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var l = h === "comma" && t && t.commaRoundTrip;
  s || (s = Object.keys(e)), r.sort && s.sort(r.sort);
  for (var u = Cl(), c = 0; c < s.length; ++c) {
    var d = s[c];
    r.skipNulls && e[d] === null || Il(a, hp(
      e[d],
      d,
      h,
      l,
      r.strictNullHandling,
      r.skipNulls,
      r.encode ? r.encoder : null,
      r.filter,
      r.sort,
      r.allowDots,
      r.serializeDate,
      r.format,
      r.formatter,
      r.encodeValuesOnly,
      r.charset,
      u
    ));
  }
  var f = a.join(r.delimiter), p = r.addQueryPrefix === !0 ? "?" : "";
  return r.charsetSentinel && (r.charset === "iso-8859-1" ? p += "utf8=%26%2310003%3B&" : p += "utf8=%E2%9C%93&"), f.length > 0 ? p + f : "";
}, Lr = Sl, Xn = Object.prototype.hasOwnProperty, cp = Array.isArray, vt = {
  allowDots: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decoder: Lr.decode,
  delimiter: "&",
  depth: 5,
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictNullHandling: !1
}, dp = function(i) {
  return i.replace(/&#(\d+);/g, function(t, e) {
    return String.fromCharCode(parseInt(e, 10));
  });
}, Pl = function(i, t) {
  return i && typeof i == "string" && t.comma && i.indexOf(",") > -1 ? i.split(",") : i;
}, fp = "utf8=%26%2310003%3B", pp = "utf8=%E2%9C%93", mp = function(t, e) {
  var r = { __proto__: null }, s = e.ignoreQueryPrefix ? t.replace(/^\?/, "") : t, n = e.parameterLimit === 1 / 0 ? void 0 : e.parameterLimit, a = s.split(e.delimiter, n), o = -1, h, l = e.charset;
  if (e.charsetSentinel)
    for (h = 0; h < a.length; ++h)
      a[h].indexOf("utf8=") === 0 && (a[h] === pp ? l = "utf-8" : a[h] === fp && (l = "iso-8859-1"), o = h, h = a.length);
  for (h = 0; h < a.length; ++h)
    if (h !== o) {
      var u = a[h], c = u.indexOf("]="), d = c === -1 ? u.indexOf("=") : c + 1, f, p;
      d === -1 ? (f = e.decoder(u, vt.decoder, l, "key"), p = e.strictNullHandling ? null : "") : (f = e.decoder(u.slice(0, d), vt.decoder, l, "key"), p = Lr.maybeMap(
        Pl(u.slice(d + 1), e),
        function(m) {
          return e.decoder(m, vt.decoder, l, "value");
        }
      )), p && e.interpretNumericEntities && l === "iso-8859-1" && (p = dp(p)), u.indexOf("[]=") > -1 && (p = cp(p) ? [p] : p), Xn.call(r, f) ? r[f] = Lr.combine(r[f], p) : r[f] = p;
    }
  return r;
}, gp = function(i, t, e, r) {
  for (var s = r ? t : Pl(t, e), n = i.length - 1; n >= 0; --n) {
    var a, o = i[n];
    if (o === "[]" && e.parseArrays)
      a = [].concat(s);
    else {
      a = e.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var h = o.charAt(0) === "[" && o.charAt(o.length - 1) === "]" ? o.slice(1, -1) : o, l = parseInt(h, 10);
      !e.parseArrays && h === "" ? a = { 0: s } : !isNaN(l) && o !== h && String(l) === h && l >= 0 && e.parseArrays && l <= e.arrayLimit ? (a = [], a[l] = s) : h !== "__proto__" && (a[h] = s);
    }
    s = a;
  }
  return s;
}, yp = function(t, e, r, s) {
  if (t) {
    var n = r.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t, a = /(\[[^[\]]*])/, o = /(\[[^[\]]*])/g, h = r.depth > 0 && a.exec(n), l = h ? n.slice(0, h.index) : n, u = [];
    if (l) {
      if (!r.plainObjects && Xn.call(Object.prototype, l) && !r.allowPrototypes)
        return;
      u.push(l);
    }
    for (var c = 0; r.depth > 0 && (h = o.exec(n)) !== null && c < r.depth; ) {
      if (c += 1, !r.plainObjects && Xn.call(Object.prototype, h[1].slice(1, -1)) && !r.allowPrototypes)
        return;
      u.push(h[1]);
    }
    return h && u.push("[" + n.slice(h.index) + "]"), gp(u, e, r, s);
  }
}, _p = function(t) {
  if (!t)
    return vt;
  if (t.decoder !== null && t.decoder !== void 0 && typeof t.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var e = typeof t.charset > "u" ? vt.charset : t.charset;
  return {
    allowDots: typeof t.allowDots > "u" ? vt.allowDots : !!t.allowDots,
    allowPrototypes: typeof t.allowPrototypes == "boolean" ? t.allowPrototypes : vt.allowPrototypes,
    allowSparse: typeof t.allowSparse == "boolean" ? t.allowSparse : vt.allowSparse,
    arrayLimit: typeof t.arrayLimit == "number" ? t.arrayLimit : vt.arrayLimit,
    charset: e,
    charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : vt.charsetSentinel,
    comma: typeof t.comma == "boolean" ? t.comma : vt.comma,
    decoder: typeof t.decoder == "function" ? t.decoder : vt.decoder,
    delimiter: typeof t.delimiter == "string" || Lr.isRegExp(t.delimiter) ? t.delimiter : vt.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof t.depth == "number" || t.depth === !1 ? +t.depth : vt.depth,
    ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof t.interpretNumericEntities == "boolean" ? t.interpretNumericEntities : vt.interpretNumericEntities,
    parameterLimit: typeof t.parameterLimit == "number" ? t.parameterLimit : vt.parameterLimit,
    parseArrays: t.parseArrays !== !1,
    plainObjects: typeof t.plainObjects == "boolean" ? t.plainObjects : vt.plainObjects,
    strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : vt.strictNullHandling
  };
}, vp = function(i, t) {
  var e = _p(t);
  if (i === "" || i === null || typeof i > "u")
    return e.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var r = typeof i == "string" ? mp(i, e) : i, s = e.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, n = Object.keys(r), a = 0; a < n.length; ++a) {
    var o = n[a], h = yp(o, r[o], e, typeof i == "string");
    s = Lr.merge(s, h, e);
  }
  return e.allowSparse === !0 ? s : Lr.compact(s);
}, xp = up, bp = vp, Tp = za, Ep = {
  formats: Tp,
  parse: bp,
  stringify: xp
}, wp = sd;
function we() {
  this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
}
var Ap = /^([a-z0-9.+-]+:)/i, Sp = /:[0-9]*$/, Cp = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/, Ip = [
  "<",
  ">",
  '"',
  "`",
  " ",
  "\r",
  `
`,
  "	"
], Pp = [
  "{",
  "}",
  "|",
  "\\",
  "^",
  "`"
].concat(Ip), Wn = ["'"].concat(Pp), Wo = [
  "%",
  "/",
  "?",
  ";",
  "#"
].concat(Wn), jo = [
  "/",
  "?",
  "#"
], Rp = 255, Yo = /^[+a-z0-9A-Z_-]{0,63}$/, Mp = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, Bp = {
  javascript: !0,
  "javascript:": !0
}, jn = {
  javascript: !0,
  "javascript:": !0
}, Ir = {
  http: !0,
  https: !0,
  ftp: !0,
  gopher: !0,
  file: !0,
  "http:": !0,
  "https:": !0,
  "ftp:": !0,
  "gopher:": !0,
  "file:": !0
}, Yn = Ep;
function Dp(i, t, e) {
  if (i && typeof i == "object" && i instanceof we)
    return i;
  var r = new we();
  return r.parse(i, t, e), r;
}
we.prototype.parse = function(i, t, e) {
  if (typeof i != "string")
    throw new TypeError("Parameter 'url' must be a string, not " + typeof i);
  var r = i.indexOf("?"), s = r !== -1 && r < i.indexOf("#") ? "?" : "#", n = i.split(s), a = /\\/g;
  n[0] = n[0].replace(a, "/"), i = n.join(s);
  var o = i;
  if (o = o.trim(), !e && i.split("#").length === 1) {
    var h = Cp.exec(o);
    if (h)
      return this.path = o, this.href = o, this.pathname = h[1], h[2] ? (this.search = h[2], t ? this.query = Yn.parse(this.search.substr(1)) : this.query = this.search.substr(1)) : t && (this.search = "", this.query = {}), this;
  }
  var l = Ap.exec(o);
  if (l) {
    l = l[0];
    var u = l.toLowerCase();
    this.protocol = u, o = o.substr(l.length);
  }
  if (e || l || o.match(/^\/\/[^@/]+@[^@/]+/)) {
    var c = o.substr(0, 2) === "//";
    c && !(l && jn[l]) && (o = o.substr(2), this.slashes = !0);
  }
  if (!jn[l] && (c || l && !Ir[l])) {
    for (var d = -1, f = 0; f < jo.length; f++) {
      var p = o.indexOf(jo[f]);
      p !== -1 && (d === -1 || p < d) && (d = p);
    }
    var m, y;
    d === -1 ? y = o.lastIndexOf("@") : y = o.lastIndexOf("@", d), y !== -1 && (m = o.slice(0, y), o = o.slice(y + 1), this.auth = decodeURIComponent(m)), d = -1;
    for (var f = 0; f < Wo.length; f++) {
      var p = o.indexOf(Wo[f]);
      p !== -1 && (d === -1 || p < d) && (d = p);
    }
    d === -1 && (d = o.length), this.host = o.slice(0, d), o = o.slice(d), this.parseHost(), this.hostname = this.hostname || "";
    var v = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!v)
      for (var b = this.hostname.split(/\./), f = 0, _ = b.length; f < _; f++) {
        var g = b[f];
        if (g && !g.match(Yo)) {
          for (var w = "", R = 0, A = g.length; R < A; R++)
            g.charCodeAt(R) > 127 ? w += "x" : w += g[R];
          if (!w.match(Yo)) {
            var x = b.slice(0, f), T = b.slice(f + 1), S = g.match(Mp);
            S && (x.push(S[1]), T.unshift(S[2])), T.length && (o = "/" + T.join(".") + o), this.hostname = x.join(".");
            break;
          }
        }
      }
    this.hostname.length > Rp ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), v || (this.hostname = wp.toASCII(this.hostname));
    var M = this.port ? ":" + this.port : "", C = this.hostname || "";
    this.host = C + M, this.href += this.host, v && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), o[0] !== "/" && (o = "/" + o));
  }
  if (!Bp[u])
    for (var f = 0, _ = Wn.length; f < _; f++) {
      var E = Wn[f];
      if (o.indexOf(E) !== -1) {
        var I = encodeURIComponent(E);
        I === E && (I = escape(E)), o = o.split(E).join(I);
      }
    }
  var G = o.indexOf("#");
  G !== -1 && (this.hash = o.substr(G), o = o.slice(0, G));
  var U = o.indexOf("?");
  if (U !== -1 ? (this.search = o.substr(U), this.query = o.substr(U + 1), t && (this.query = Yn.parse(this.query)), o = o.slice(0, U)) : t && (this.search = "", this.query = {}), o && (this.pathname = o), Ir[u] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
    var M = this.pathname || "", $ = this.search || "";
    this.path = M + $;
  }
  return this.href = this.format(), this;
};
we.prototype.format = function() {
  var i = this.auth || "";
  i && (i = encodeURIComponent(i), i = i.replace(/%3A/i, ":"), i += "@");
  var t = this.protocol || "", e = this.pathname || "", r = this.hash || "", s = !1, n = "";
  this.host ? s = i + this.host : this.hostname && (s = i + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"), this.port && (s += ":" + this.port)), this.query && typeof this.query == "object" && Object.keys(this.query).length && (n = Yn.stringify(this.query, {
    arrayFormat: "repeat",
    addQueryPrefix: !1
  }));
  var a = this.search || n && "?" + n || "";
  return t && t.substr(-1) !== ":" && (t += ":"), this.slashes || (!t || Ir[t]) && s !== !1 ? (s = "//" + (s || ""), e && e.charAt(0) !== "/" && (e = "/" + e)) : s || (s = ""), r && r.charAt(0) !== "#" && (r = "#" + r), a && a.charAt(0) !== "?" && (a = "?" + a), e = e.replace(/[?#]/g, function(o) {
    return encodeURIComponent(o);
  }), a = a.replace("#", "%23"), t + s + e + a + r;
};
we.prototype.resolve = function(i) {
  return this.resolveObject(Dp(i, !1, !0)).format();
};
we.prototype.resolveObject = function(i) {
  if (typeof i == "string") {
    var t = new we();
    t.parse(i, !1, !0), i = t;
  }
  for (var e = new we(), r = Object.keys(this), s = 0; s < r.length; s++) {
    var n = r[s];
    e[n] = this[n];
  }
  if (e.hash = i.hash, i.href === "")
    return e.href = e.format(), e;
  if (i.slashes && !i.protocol) {
    for (var a = Object.keys(i), o = 0; o < a.length; o++) {
      var h = a[o];
      h !== "protocol" && (e[h] = i[h]);
    }
    return Ir[e.protocol] && e.hostname && !e.pathname && (e.pathname = "/", e.path = e.pathname), e.href = e.format(), e;
  }
  if (i.protocol && i.protocol !== e.protocol) {
    if (!Ir[i.protocol]) {
      for (var l = Object.keys(i), u = 0; u < l.length; u++) {
        var c = l[u];
        e[c] = i[c];
      }
      return e.href = e.format(), e;
    }
    if (e.protocol = i.protocol, !i.host && !jn[i.protocol]) {
      for (var _ = (i.pathname || "").split("/"); _.length && !(i.host = _.shift()); )
        ;
      i.host || (i.host = ""), i.hostname || (i.hostname = ""), _[0] !== "" && _.unshift(""), _.length < 2 && _.unshift(""), e.pathname = _.join("/");
    } else
      e.pathname = i.pathname;
    if (e.search = i.search, e.query = i.query, e.host = i.host || "", e.auth = i.auth, e.hostname = i.hostname || i.host, e.port = i.port, e.pathname || e.search) {
      var d = e.pathname || "", f = e.search || "";
      e.path = d + f;
    }
    return e.slashes = e.slashes || i.slashes, e.href = e.format(), e;
  }
  var p = e.pathname && e.pathname.charAt(0) === "/", m = i.host || i.pathname && i.pathname.charAt(0) === "/", y = m || p || e.host && i.pathname, v = y, b = e.pathname && e.pathname.split("/") || [], _ = i.pathname && i.pathname.split("/") || [], g = e.protocol && !Ir[e.protocol];
  if (g && (e.hostname = "", e.port = null, e.host && (b[0] === "" ? b[0] = e.host : b.unshift(e.host)), e.host = "", i.protocol && (i.hostname = null, i.port = null, i.host && (_[0] === "" ? _[0] = i.host : _.unshift(i.host)), i.host = null), y = y && (_[0] === "" || b[0] === "")), m)
    e.host = i.host || i.host === "" ? i.host : e.host, e.hostname = i.hostname || i.hostname === "" ? i.hostname : e.hostname, e.search = i.search, e.query = i.query, b = _;
  else if (_.length)
    b || (b = []), b.pop(), b = b.concat(_), e.search = i.search, e.query = i.query;
  else if (i.search != null) {
    if (g) {
      e.host = b.shift(), e.hostname = e.host;
      var w = e.host && e.host.indexOf("@") > 0 ? e.host.split("@") : !1;
      w && (e.auth = w.shift(), e.hostname = w.shift(), e.host = e.hostname);
    }
    return e.search = i.search, e.query = i.query, (e.pathname !== null || e.search !== null) && (e.path = (e.pathname ? e.pathname : "") + (e.search ? e.search : "")), e.href = e.format(), e;
  }
  if (!b.length)
    return e.pathname = null, e.search ? e.path = "/" + e.search : e.path = null, e.href = e.format(), e;
  for (var R = b.slice(-1)[0], A = (e.host || i.host || b.length > 1) && (R === "." || R === "..") || R === "", x = 0, T = b.length; T >= 0; T--)
    R = b[T], R === "." ? b.splice(T, 1) : R === ".." ? (b.splice(T, 1), x++) : x && (b.splice(T, 1), x--);
  if (!y && !v)
    for (; x--; x)
      b.unshift("..");
  y && b[0] !== "" && (!b[0] || b[0].charAt(0) !== "/") && b.unshift(""), A && b.join("/").substr(-1) !== "/" && b.push("");
  var S = b[0] === "" || b[0] && b[0].charAt(0) === "/";
  if (g) {
    e.hostname = S ? "" : b.length ? b.shift() : "", e.host = e.hostname;
    var w = e.host && e.host.indexOf("@") > 0 ? e.host.split("@") : !1;
    w && (e.auth = w.shift(), e.hostname = w.shift(), e.host = e.hostname);
  }
  return y = y || e.host && b.length, y && !S && b.unshift(""), b.length > 0 ? e.pathname = b.join("/") : (e.pathname = null, e.path = null), (e.pathname !== null || e.search !== null) && (e.path = (e.pathname ? e.pathname : "") + (e.search ? e.search : "")), e.auth = i.auth || e.auth, e.slashes = e.slashes || i.slashes, e.href = e.format(), e;
};
we.prototype.parseHost = function() {
  var i = this.host, t = Sp.exec(i);
  t && (t = t[0], t !== ":" && (this.port = t.substr(1)), i = i.substr(0, i.length - t.length)), i && (this.hostname = i);
};
const qo = {};
function Y(i, t, e = 3) {
  if (qo[t])
    return;
  let r = new Error().stack;
  typeof r > "u" ? console.warn("PixiJS Deprecation Warning: ", `${t}
Deprecated since v${i}`) : (r = r.split(`
`).splice(e).join(`
`), console.groupCollapsed ? (console.groupCollapsed(
    "%cPixiJS Deprecation Warning: %c%s",
    "color:#614108;background:#fffbe6",
    "font-weight:normal;color:#614108;background:#fffbe6",
    `${t}
Deprecated since v${i}`
  ), console.warn(r), console.groupEnd()) : (console.warn("PixiJS Deprecation Warning: ", `${t}
Deprecated since v${i}`), console.warn(r))), qo[t] = !0;
}
function Gt(i) {
  if (typeof i != "string")
    throw new TypeError(`Path must be a string. Received ${JSON.stringify(i)}`);
}
function jr(i) {
  return i.split("?")[0].split("#")[0];
}
function Fp(i) {
  return i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Op(i, t, e) {
  return i.replace(new RegExp(Fp(t), "g"), e);
}
function Np(i, t) {
  let e = "", r = 0, s = -1, n = 0, a = -1;
  for (let o = 0; o <= i.length; ++o) {
    if (o < i.length)
      a = i.charCodeAt(o);
    else {
      if (a === 47)
        break;
      a = 47;
    }
    if (a === 47) {
      if (!(s === o - 1 || n === 1))
        if (s !== o - 1 && n === 2) {
          if (e.length < 2 || r !== 2 || e.charCodeAt(e.length - 1) !== 46 || e.charCodeAt(e.length - 2) !== 46) {
            if (e.length > 2) {
              const h = e.lastIndexOf("/");
              if (h !== e.length - 1) {
                h === -1 ? (e = "", r = 0) : (e = e.slice(0, h), r = e.length - 1 - e.lastIndexOf("/")), s = o, n = 0;
                continue;
              }
            } else if (e.length === 2 || e.length === 1) {
              e = "", r = 0, s = o, n = 0;
              continue;
            }
          }
          t && (e.length > 0 ? e += "/.." : e = "..", r = 2);
        } else
          e.length > 0 ? e += `/${i.slice(s + 1, o)}` : e = i.slice(s + 1, o), r = o - s - 1;
      s = o, n = 0;
    } else
      a === 46 && n !== -1 ? ++n : n = -1;
  }
  return e;
}
const gt = {
  /**
   * Converts a path to posix format.
   * @param path - The path to convert to posix
   */
  toPosix(i) {
    return Op(i, "\\", "/");
  },
  /**
   * Checks if the path is a URL e.g. http://, https://
   * @param path - The path to check
   */
  isUrl(i) {
    return /^https?:/.test(this.toPosix(i));
  },
  /**
   * Checks if the path is a data URL
   * @param path - The path to check
   */
  isDataUrl(i) {
    return /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(i);
  },
  /**
   * Checks if the path is a blob URL
   * @param path - The path to check
   */
  isBlobUrl(i) {
    return i.startsWith("blob:");
  },
  /**
   * Checks if the path has a protocol e.g. http://, https://, file:///, data:, blob:, C:/
   * This will return true for windows file paths
   * @param path - The path to check
   */
  hasProtocol(i) {
    return /^[^/:]+:/.test(this.toPosix(i));
  },
  /**
   * Returns the protocol of the path e.g. http://, https://, file:///, data:, blob:, C:/
   * @param path - The path to get the protocol from
   */
  getProtocol(i) {
    Gt(i), i = this.toPosix(i);
    const t = /^file:\/\/\//.exec(i);
    if (t)
      return t[0];
    const e = /^[^/:]+:\/{0,2}/.exec(i);
    return e ? e[0] : "";
  },
  /**
   * Converts URL to an absolute path.
   * When loading from a Web Worker, we must use absolute paths.
   * If the URL is already absolute we return it as is
   * If it's not, we convert it
   * @param url - The URL to test
   * @param customBaseUrl - The base URL to use
   * @param customRootUrl - The root URL to use
   */
  toAbsolute(i, t, e) {
    if (Gt(i), this.isDataUrl(i) || this.isBlobUrl(i))
      return i;
    const r = jr(this.toPosix(t ?? L.ADAPTER.getBaseUrl())), s = jr(this.toPosix(e ?? this.rootname(r)));
    return i = this.toPosix(i), i.startsWith("/") ? gt.join(s, i.slice(1)) : this.isAbsolute(i) ? i : this.join(r, i);
  },
  /**
   * Normalizes the given path, resolving '..' and '.' segments
   * @param path - The path to normalize
   */
  normalize(i) {
    if (Gt(i), i.length === 0)
      return ".";
    if (this.isDataUrl(i) || this.isBlobUrl(i))
      return i;
    i = this.toPosix(i);
    let t = "";
    const e = i.startsWith("/");
    this.hasProtocol(i) && (t = this.rootname(i), i = i.slice(t.length));
    const r = i.endsWith("/");
    return i = Np(i, !1), i.length > 0 && r && (i += "/"), e ? `/${i}` : t + i;
  },
  /**
   * Determines if path is an absolute path.
   * Absolute paths can be urls, data urls, or paths on disk
   * @param path - The path to test
   */
  isAbsolute(i) {
    return Gt(i), i = this.toPosix(i), this.hasProtocol(i) ? !0 : i.startsWith("/");
  },
  /**
   * Joins all given path segments together using the platform-specific separator as a delimiter,
   * then normalizes the resulting path
   * @param segments - The segments of the path to join
   */
  join(...i) {
    if (i.length === 0)
      return ".";
    let t;
    for (let e = 0; e < i.length; ++e) {
      const r = i[e];
      if (Gt(r), r.length > 0)
        if (t === void 0)
          t = r;
        else {
          const s = i[e - 1] ?? "";
          this.joinExtensions.includes(this.extname(s).toLowerCase()) ? t += `/../${r}` : t += `/${r}`;
        }
    }
    return t === void 0 ? "." : this.normalize(t);
  },
  /**
   * Returns the directory name of a path
   * @param path - The path to parse
   */
  dirname(i) {
    if (Gt(i), i.length === 0)
      return ".";
    i = this.toPosix(i);
    let t = i.charCodeAt(0);
    const e = t === 47;
    let r = -1, s = !0;
    const n = this.getProtocol(i), a = i;
    i = i.slice(n.length);
    for (let o = i.length - 1; o >= 1; --o)
      if (t = i.charCodeAt(o), t === 47) {
        if (!s) {
          r = o;
          break;
        }
      } else
        s = !1;
    return r === -1 ? e ? "/" : this.isUrl(a) ? n + i : n : e && r === 1 ? "//" : n + i.slice(0, r);
  },
  /**
   * Returns the root of the path e.g. /, C:/, file:///, http://domain.com/
   * @param path - The path to parse
   */
  rootname(i) {
    Gt(i), i = this.toPosix(i);
    let t = "";
    if (i.startsWith("/") ? t = "/" : t = this.getProtocol(i), this.isUrl(i)) {
      const e = i.indexOf("/", t.length);
      e !== -1 ? t = i.slice(0, e) : t = i, t.endsWith("/") || (t += "/");
    }
    return t;
  },
  /**
   * Returns the last portion of a path
   * @param path - The path to test
   * @param ext - Optional extension to remove
   */
  basename(i, t) {
    Gt(i), t && Gt(t), i = jr(this.toPosix(i));
    let e = 0, r = -1, s = !0, n;
    if (t !== void 0 && t.length > 0 && t.length <= i.length) {
      if (t.length === i.length && t === i)
        return "";
      let a = t.length - 1, o = -1;
      for (n = i.length - 1; n >= 0; --n) {
        const h = i.charCodeAt(n);
        if (h === 47) {
          if (!s) {
            e = n + 1;
            break;
          }
        } else
          o === -1 && (s = !1, o = n + 1), a >= 0 && (h === t.charCodeAt(a) ? --a === -1 && (r = n) : (a = -1, r = o));
      }
      return e === r ? r = o : r === -1 && (r = i.length), i.slice(e, r);
    }
    for (n = i.length - 1; n >= 0; --n)
      if (i.charCodeAt(n) === 47) {
        if (!s) {
          e = n + 1;
          break;
        }
      } else
        r === -1 && (s = !1, r = n + 1);
    return r === -1 ? "" : i.slice(e, r);
  },
  /**
   * Returns the extension of the path, from the last occurrence of the . (period) character to end of string in the last
   * portion of the path. If there is no . in the last portion of the path, or if there are no . characters other than
   * the first character of the basename of path, an empty string is returned.
   * @param path - The path to parse
   */
  extname(i) {
    Gt(i), i = jr(this.toPosix(i));
    let t = -1, e = 0, r = -1, s = !0, n = 0;
    for (let a = i.length - 1; a >= 0; --a) {
      const o = i.charCodeAt(a);
      if (o === 47) {
        if (!s) {
          e = a + 1;
          break;
        }
        continue;
      }
      r === -1 && (s = !1, r = a + 1), o === 46 ? t === -1 ? t = a : n !== 1 && (n = 1) : t !== -1 && (n = -1);
    }
    return t === -1 || r === -1 || n === 0 || n === 1 && t === r - 1 && t === e + 1 ? "" : i.slice(t, r);
  },
  /**
   * Parses a path into an object containing the 'root', `dir`, `base`, `ext`, and `name` properties.
   * @param path - The path to parse
   */
  parse(i) {
    Gt(i);
    const t = { root: "", dir: "", base: "", ext: "", name: "" };
    if (i.length === 0)
      return t;
    i = jr(this.toPosix(i));
    let e = i.charCodeAt(0);
    const r = this.isAbsolute(i);
    let s;
    t.root = this.rootname(i), r || this.hasProtocol(i) ? s = 1 : s = 0;
    let n = -1, a = 0, o = -1, h = !0, l = i.length - 1, u = 0;
    for (; l >= s; --l) {
      if (e = i.charCodeAt(l), e === 47) {
        if (!h) {
          a = l + 1;
          break;
        }
        continue;
      }
      o === -1 && (h = !1, o = l + 1), e === 46 ? n === -1 ? n = l : u !== 1 && (u = 1) : n !== -1 && (u = -1);
    }
    return n === -1 || o === -1 || u === 0 || u === 1 && n === o - 1 && n === a + 1 ? o !== -1 && (a === 0 && r ? t.base = t.name = i.slice(1, o) : t.base = t.name = i.slice(a, o)) : (a === 0 && r ? (t.name = i.slice(1, n), t.base = i.slice(1, o)) : (t.name = i.slice(a, n), t.base = i.slice(a, o)), t.ext = i.slice(n, o)), t.dir = this.dirname(i), t;
  },
  sep: "/",
  delimiter: ":",
  joinExtensions: [".html"]
};
let an;
async function Lp() {
  return an ?? (an = (async () => {
    var n;
    const i = document.createElement("canvas").getContext("webgl");
    if (!i)
      return Dt.UNPACK;
    const t = await new Promise((a) => {
      const o = document.createElement("video");
      o.onloadeddata = () => a(o), o.onerror = () => a(null), o.autoplay = !1, o.crossOrigin = "anonymous", o.preload = "auto", o.src = "data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=", o.load();
    });
    if (!t)
      return Dt.UNPACK;
    const e = i.createTexture();
    i.bindTexture(i.TEXTURE_2D, e);
    const r = i.createFramebuffer();
    i.bindFramebuffer(i.FRAMEBUFFER, r), i.framebufferTexture2D(
      i.FRAMEBUFFER,
      i.COLOR_ATTACHMENT0,
      i.TEXTURE_2D,
      e,
      0
    ), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, i.NONE), i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, i.RGBA, i.UNSIGNED_BYTE, t);
    const s = new Uint8Array(4);
    return i.readPixels(0, 0, 1, 1, i.RGBA, i.UNSIGNED_BYTE, s), i.deleteFramebuffer(r), i.deleteTexture(e), (n = i.getExtension("WEBGL_lose_context")) == null || n.loseContext(), s[0] <= s[3] ? Dt.PMA : Dt.UNPACK;
  })()), an;
}
let on;
function Up() {
  return typeof on > "u" && (on = function() {
    var t;
    const i = {
      stencil: !0,
      failIfMajorPerformanceCaveat: L.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT
    };
    try {
      if (!L.ADAPTER.getWebGLRenderingContext())
        return !1;
      const e = L.ADAPTER.createCanvas();
      let r = e.getContext("webgl", i) || e.getContext("experimental-webgl", i);
      const s = !!((t = r == null ? void 0 : r.getContextAttributes()) != null && t.stencil);
      if (r) {
        const n = r.getExtension("WEBGL_lose_context");
        n && n.loseContext();
      }
      return r = null, s;
    } catch {
      return !1;
    }
  }()), on;
}
var kp = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) }, pe = function(i) {
  return typeof i == "string" ? i.length > 0 : typeof i == "number";
}, bt = function(i, t, e) {
  return t === void 0 && (t = 0), e === void 0 && (e = Math.pow(10, t)), Math.round(e * i) / e + 0;
}, kt = function(i, t, e) {
  return t === void 0 && (t = 0), e === void 0 && (e = 1), i > e ? e : i > t ? i : t;
}, Rl = function(i) {
  return (i = isFinite(i) ? i % 360 : 0) > 0 ? i : i + 360;
}, Ko = function(i) {
  return { r: kt(i.r, 0, 255), g: kt(i.g, 0, 255), b: kt(i.b, 0, 255), a: kt(i.a) };
}, hn = function(i) {
  return { r: bt(i.r), g: bt(i.g), b: bt(i.b), a: bt(i.a, 3) };
}, Gp = /^#([0-9a-f]{3,8})$/i, Ri = function(i) {
  var t = i.toString(16);
  return t.length < 2 ? "0" + t : t;
}, Ml = function(i) {
  var t = i.r, e = i.g, r = i.b, s = i.a, n = Math.max(t, e, r), a = n - Math.min(t, e, r), o = a ? n === t ? (e - r) / a : n === e ? 2 + (r - t) / a : 4 + (t - e) / a : 0;
  return { h: 60 * (o < 0 ? o + 6 : o), s: n ? a / n * 100 : 0, v: n / 255 * 100, a: s };
}, Bl = function(i) {
  var t = i.h, e = i.s, r = i.v, s = i.a;
  t = t / 360 * 6, e /= 100, r /= 100;
  var n = Math.floor(t), a = r * (1 - e), o = r * (1 - (t - n) * e), h = r * (1 - (1 - t + n) * e), l = n % 6;
  return { r: 255 * [r, o, a, a, h, r][l], g: 255 * [h, r, r, o, a, a][l], b: 255 * [a, a, h, r, r, o][l], a: s };
}, Zo = function(i) {
  return { h: Rl(i.h), s: kt(i.s, 0, 100), l: kt(i.l, 0, 100), a: kt(i.a) };
}, Qo = function(i) {
  return { h: bt(i.h), s: bt(i.s), l: bt(i.l), a: bt(i.a, 3) };
}, Jo = function(i) {
  return Bl((e = (t = i).s, { h: t.h, s: (e *= ((r = t.l) < 50 ? r : 100 - r) / 100) > 0 ? 2 * e / (r + e) * 100 : 0, v: r + e, a: t.a }));
  var t, e, r;
}, hi = function(i) {
  return { h: (t = Ml(i)).h, s: (s = (200 - (e = t.s)) * (r = t.v) / 100) > 0 && s < 200 ? e * r / 100 / (s <= 100 ? s : 200 - s) * 100 : 0, l: s / 2, a: t.a };
  var t, e, r, s;
}, Hp = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, $p = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, Vp = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, zp = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, qn = { string: [[function(i) {
  var t = Gp.exec(i);
  return t ? (i = t[1]).length <= 4 ? { r: parseInt(i[0] + i[0], 16), g: parseInt(i[1] + i[1], 16), b: parseInt(i[2] + i[2], 16), a: i.length === 4 ? bt(parseInt(i[3] + i[3], 16) / 255, 2) : 1 } : i.length === 6 || i.length === 8 ? { r: parseInt(i.substr(0, 2), 16), g: parseInt(i.substr(2, 2), 16), b: parseInt(i.substr(4, 2), 16), a: i.length === 8 ? bt(parseInt(i.substr(6, 2), 16) / 255, 2) : 1 } : null : null;
}, "hex"], [function(i) {
  var t = Vp.exec(i) || zp.exec(i);
  return t ? t[2] !== t[4] || t[4] !== t[6] ? null : Ko({ r: Number(t[1]) / (t[2] ? 100 / 255 : 1), g: Number(t[3]) / (t[4] ? 100 / 255 : 1), b: Number(t[5]) / (t[6] ? 100 / 255 : 1), a: t[7] === void 0 ? 1 : Number(t[7]) / (t[8] ? 100 : 1) }) : null;
}, "rgb"], [function(i) {
  var t = Hp.exec(i) || $p.exec(i);
  if (!t)
    return null;
  var e, r, s = Zo({ h: (e = t[1], r = t[2], r === void 0 && (r = "deg"), Number(e) * (kp[r] || 1)), s: Number(t[3]), l: Number(t[4]), a: t[5] === void 0 ? 1 : Number(t[5]) / (t[6] ? 100 : 1) });
  return Jo(s);
}, "hsl"]], object: [[function(i) {
  var t = i.r, e = i.g, r = i.b, s = i.a, n = s === void 0 ? 1 : s;
  return pe(t) && pe(e) && pe(r) ? Ko({ r: Number(t), g: Number(e), b: Number(r), a: Number(n) }) : null;
}, "rgb"], [function(i) {
  var t = i.h, e = i.s, r = i.l, s = i.a, n = s === void 0 ? 1 : s;
  if (!pe(t) || !pe(e) || !pe(r))
    return null;
  var a = Zo({ h: Number(t), s: Number(e), l: Number(r), a: Number(n) });
  return Jo(a);
}, "hsl"], [function(i) {
  var t = i.h, e = i.s, r = i.v, s = i.a, n = s === void 0 ? 1 : s;
  if (!pe(t) || !pe(e) || !pe(r))
    return null;
  var a = function(o) {
    return { h: Rl(o.h), s: kt(o.s, 0, 100), v: kt(o.v, 0, 100), a: kt(o.a) };
  }({ h: Number(t), s: Number(e), v: Number(r), a: Number(n) });
  return Bl(a);
}, "hsv"]] }, th = function(i, t) {
  for (var e = 0; e < t.length; e++) {
    var r = t[e][0](i);
    if (r)
      return [r, t[e][1]];
  }
  return [null, void 0];
}, Xp = function(i) {
  return typeof i == "string" ? th(i.trim(), qn.string) : typeof i == "object" && i !== null ? th(i, qn.object) : [null, void 0];
}, ln = function(i, t) {
  var e = hi(i);
  return { h: e.h, s: kt(e.s + 100 * t, 0, 100), l: e.l, a: e.a };
}, un = function(i) {
  return (299 * i.r + 587 * i.g + 114 * i.b) / 1e3 / 255;
}, eh = function(i, t) {
  var e = hi(i);
  return { h: e.h, s: e.s, l: kt(e.l + 100 * t, 0, 100), a: e.a };
}, Kn = function() {
  function i(t) {
    this.parsed = Xp(t)[0], this.rgba = this.parsed || { r: 0, g: 0, b: 0, a: 1 };
  }
  return i.prototype.isValid = function() {
    return this.parsed !== null;
  }, i.prototype.brightness = function() {
    return bt(un(this.rgba), 2);
  }, i.prototype.isDark = function() {
    return un(this.rgba) < 0.5;
  }, i.prototype.isLight = function() {
    return un(this.rgba) >= 0.5;
  }, i.prototype.toHex = function() {
    return t = hn(this.rgba), e = t.r, r = t.g, s = t.b, a = (n = t.a) < 1 ? Ri(bt(255 * n)) : "", "#" + Ri(e) + Ri(r) + Ri(s) + a;
    var t, e, r, s, n, a;
  }, i.prototype.toRgb = function() {
    return hn(this.rgba);
  }, i.prototype.toRgbString = function() {
    return t = hn(this.rgba), e = t.r, r = t.g, s = t.b, (n = t.a) < 1 ? "rgba(" + e + ", " + r + ", " + s + ", " + n + ")" : "rgb(" + e + ", " + r + ", " + s + ")";
    var t, e, r, s, n;
  }, i.prototype.toHsl = function() {
    return Qo(hi(this.rgba));
  }, i.prototype.toHslString = function() {
    return t = Qo(hi(this.rgba)), e = t.h, r = t.s, s = t.l, (n = t.a) < 1 ? "hsla(" + e + ", " + r + "%, " + s + "%, " + n + ")" : "hsl(" + e + ", " + r + "%, " + s + "%)";
    var t, e, r, s, n;
  }, i.prototype.toHsv = function() {
    return t = Ml(this.rgba), { h: bt(t.h), s: bt(t.s), v: bt(t.v), a: bt(t.a, 3) };
    var t;
  }, i.prototype.invert = function() {
    return te({ r: 255 - (t = this.rgba).r, g: 255 - t.g, b: 255 - t.b, a: t.a });
    var t;
  }, i.prototype.saturate = function(t) {
    return t === void 0 && (t = 0.1), te(ln(this.rgba, t));
  }, i.prototype.desaturate = function(t) {
    return t === void 0 && (t = 0.1), te(ln(this.rgba, -t));
  }, i.prototype.grayscale = function() {
    return te(ln(this.rgba, -1));
  }, i.prototype.lighten = function(t) {
    return t === void 0 && (t = 0.1), te(eh(this.rgba, t));
  }, i.prototype.darken = function(t) {
    return t === void 0 && (t = 0.1), te(eh(this.rgba, -t));
  }, i.prototype.rotate = function(t) {
    return t === void 0 && (t = 15), this.hue(this.hue() + t);
  }, i.prototype.alpha = function(t) {
    return typeof t == "number" ? te({ r: (e = this.rgba).r, g: e.g, b: e.b, a: t }) : bt(this.rgba.a, 3);
    var e;
  }, i.prototype.hue = function(t) {
    var e = hi(this.rgba);
    return typeof t == "number" ? te({ h: t, s: e.s, l: e.l, a: e.a }) : bt(e.h);
  }, i.prototype.isEqual = function(t) {
    return this.toHex() === te(t).toHex();
  }, i;
}(), te = function(i) {
  return i instanceof Kn ? i : new Kn(i);
}, rh = [], Wp = function(i) {
  i.forEach(function(t) {
    rh.indexOf(t) < 0 && (t(Kn, qn), rh.push(t));
  });
};
function jp(i, t) {
  var e = { white: "#ffffff", bisque: "#ffe4c4", blue: "#0000ff", cadetblue: "#5f9ea0", chartreuse: "#7fff00", chocolate: "#d2691e", coral: "#ff7f50", antiquewhite: "#faebd7", aqua: "#00ffff", azure: "#f0ffff", whitesmoke: "#f5f5f5", papayawhip: "#ffefd5", plum: "#dda0dd", blanchedalmond: "#ffebcd", black: "#000000", gold: "#ffd700", goldenrod: "#daa520", gainsboro: "#dcdcdc", cornsilk: "#fff8dc", cornflowerblue: "#6495ed", burlywood: "#deb887", aquamarine: "#7fffd4", beige: "#f5f5dc", crimson: "#dc143c", cyan: "#00ffff", darkblue: "#00008b", darkcyan: "#008b8b", darkgoldenrod: "#b8860b", darkkhaki: "#bdb76b", darkgray: "#a9a9a9", darkgreen: "#006400", darkgrey: "#a9a9a9", peachpuff: "#ffdab9", darkmagenta: "#8b008b", darkred: "#8b0000", darkorchid: "#9932cc", darkorange: "#ff8c00", darkslateblue: "#483d8b", gray: "#808080", darkslategray: "#2f4f4f", darkslategrey: "#2f4f4f", deeppink: "#ff1493", deepskyblue: "#00bfff", wheat: "#f5deb3", firebrick: "#b22222", floralwhite: "#fffaf0", ghostwhite: "#f8f8ff", darkviolet: "#9400d3", magenta: "#ff00ff", green: "#008000", dodgerblue: "#1e90ff", grey: "#808080", honeydew: "#f0fff0", hotpink: "#ff69b4", blueviolet: "#8a2be2", forestgreen: "#228b22", lawngreen: "#7cfc00", indianred: "#cd5c5c", indigo: "#4b0082", fuchsia: "#ff00ff", brown: "#a52a2a", maroon: "#800000", mediumblue: "#0000cd", lightcoral: "#f08080", darkturquoise: "#00ced1", lightcyan: "#e0ffff", ivory: "#fffff0", lightyellow: "#ffffe0", lightsalmon: "#ffa07a", lightseagreen: "#20b2aa", linen: "#faf0e6", mediumaquamarine: "#66cdaa", lemonchiffon: "#fffacd", lime: "#00ff00", khaki: "#f0e68c", mediumseagreen: "#3cb371", limegreen: "#32cd32", mediumspringgreen: "#00fa9a", lightskyblue: "#87cefa", lightblue: "#add8e6", midnightblue: "#191970", lightpink: "#ffb6c1", mistyrose: "#ffe4e1", moccasin: "#ffe4b5", mintcream: "#f5fffa", lightslategray: "#778899", lightslategrey: "#778899", navajowhite: "#ffdead", navy: "#000080", mediumvioletred: "#c71585", powderblue: "#b0e0e6", palegoldenrod: "#eee8aa", oldlace: "#fdf5e6", paleturquoise: "#afeeee", mediumturquoise: "#48d1cc", mediumorchid: "#ba55d3", rebeccapurple: "#663399", lightsteelblue: "#b0c4de", mediumslateblue: "#7b68ee", thistle: "#d8bfd8", tan: "#d2b48c", orchid: "#da70d6", mediumpurple: "#9370db", purple: "#800080", pink: "#ffc0cb", skyblue: "#87ceeb", springgreen: "#00ff7f", palegreen: "#98fb98", red: "#ff0000", yellow: "#ffff00", slateblue: "#6a5acd", lavenderblush: "#fff0f5", peru: "#cd853f", palevioletred: "#db7093", violet: "#ee82ee", teal: "#008080", slategray: "#708090", slategrey: "#708090", aliceblue: "#f0f8ff", darkseagreen: "#8fbc8f", darkolivegreen: "#556b2f", greenyellow: "#adff2f", seagreen: "#2e8b57", seashell: "#fff5ee", tomato: "#ff6347", silver: "#c0c0c0", sienna: "#a0522d", lavender: "#e6e6fa", lightgreen: "#90ee90", orange: "#ffa500", orangered: "#ff4500", steelblue: "#4682b4", royalblue: "#4169e1", turquoise: "#40e0d0", yellowgreen: "#9acd32", salmon: "#fa8072", saddlebrown: "#8b4513", sandybrown: "#f4a460", rosybrown: "#bc8f8f", darksalmon: "#e9967a", lightgoldenrodyellow: "#fafad2", snow: "#fffafa", lightgrey: "#d3d3d3", lightgray: "#d3d3d3", dimgray: "#696969", dimgrey: "#696969", olivedrab: "#6b8e23", olive: "#808000" }, r = {};
  for (var s in e)
    r[e[s]] = s;
  var n = {};
  i.prototype.toName = function(a) {
    if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b))
      return "transparent";
    var o, h, l = r[this.toHex()];
    if (l)
      return l;
    if (a != null && a.closest) {
      var u = this.toRgb(), c = 1 / 0, d = "black";
      if (!n.length)
        for (var f in e)
          n[f] = new i(e[f]).toRgb();
      for (var p in e) {
        var m = (o = u, h = n[p], Math.pow(o.r - h.r, 2) + Math.pow(o.g - h.g, 2) + Math.pow(o.b - h.b, 2));
        m < c && (c = m, d = p);
      }
      return d;
    }
  }, t.string.push([function(a) {
    var o = a.toLowerCase(), h = o === "transparent" ? "#0000" : e[o];
    return h ? new i(h).toRgb() : null;
  }, "name"]);
}
Wp([jp]);
const gr = class Qi {
  /**
   * @param {PIXI.ColorSource} value - Optional value to use, if not provided, white is used.
   */
  constructor(t = 16777215) {
    this._value = null, this._components = new Float32Array(4), this._components.fill(1), this._int = 16777215, this.value = t;
  }
  /** Get red component (0 - 1) */
  get red() {
    return this._components[0];
  }
  /** Get green component (0 - 1) */
  get green() {
    return this._components[1];
  }
  /** Get blue component (0 - 1) */
  get blue() {
    return this._components[2];
  }
  /** Get alpha component (0 - 1) */
  get alpha() {
    return this._components[3];
  }
  /**
   * Set the value, suitable for chaining
   * @param value
   * @see PIXI.Color.value
   */
  setValue(t) {
    return this.value = t, this;
  }
  /**
   * The current color source.
   *
   * When setting:
   * - Setting to an instance of `Color` will copy its color source and components.
   * - Otherwise, `Color` will try to normalize the color source and set the components.
   *   If the color source is invalid, an `Error` will be thrown and the `Color` will left unchanged.
   *
   * Note: The `null` in the setter's parameter type is added to match the TypeScript rule: return type of getter
   * must be assignable to its setter's parameter type. Setting `value` to `null` will throw an `Error`.
   *
   * When getting:
   * - A return value of `null` means the previous value was overridden (e.g., {@link PIXI.Color.multiply multiply},
   *   {@link PIXI.Color.premultiply premultiply} or {@link PIXI.Color.round round}).
   * - Otherwise, the color source used when setting is returned.
   * @type {PIXI.ColorSource}
   */
  set value(t) {
    if (t instanceof Qi)
      this._value = this.cloneSource(t._value), this._int = t._int, this._components.set(t._components);
    else {
      if (t === null)
        throw new Error("Cannot set PIXI.Color#value to null");
      (this._value === null || !this.isSourceEqual(this._value, t)) && (this.normalize(t), this._value = this.cloneSource(t));
    }
  }
  get value() {
    return this._value;
  }
  /**
   * Copy a color source internally.
   * @param value - Color source
   */
  cloneSource(t) {
    return typeof t == "string" || typeof t == "number" || t instanceof Number || t === null ? t : Array.isArray(t) || ArrayBuffer.isView(t) ? t.slice(0) : typeof t == "object" && t !== null ? { ...t } : t;
  }
  /**
   * Equality check for color sources.
   * @param value1 - First color source
   * @param value2 - Second color source
   * @returns `true` if the color sources are equal, `false` otherwise.
   */
  isSourceEqual(t, e) {
    const r = typeof t;
    if (r !== typeof e)
      return !1;
    if (r === "number" || r === "string" || t instanceof Number)
      return t === e;
    if (Array.isArray(t) && Array.isArray(e) || ArrayBuffer.isView(t) && ArrayBuffer.isView(e))
      return t.length !== e.length ? !1 : t.every((s, n) => s === e[n]);
    if (t !== null && e !== null) {
      const s = Object.keys(t), n = Object.keys(e);
      return s.length !== n.length ? !1 : s.every((a) => t[a] === e[a]);
    }
    return t === e;
  }
  /**
   * Convert to a RGBA color object.
   * @example
   * import { Color } from 'pixi.js';
   * new Color('white').toRgb(); // returns { r: 1, g: 1, b: 1, a: 1 }
   */
  toRgba() {
    const [t, e, r, s] = this._components;
    return { r: t, g: e, b: r, a: s };
  }
  /**
   * Convert to a RGB color object.
   * @example
   * import { Color } from 'pixi.js';
   * new Color('white').toRgb(); // returns { r: 1, g: 1, b: 1 }
   */
  toRgb() {
    const [t, e, r] = this._components;
    return { r: t, g: e, b: r };
  }
  /** Convert to a CSS-style rgba string: `rgba(255,255,255,1.0)`. */
  toRgbaString() {
    const [t, e, r] = this.toUint8RgbArray();
    return `rgba(${t},${e},${r},${this.alpha})`;
  }
  toUint8RgbArray(t) {
    const [e, r, s] = this._components;
    return t = t ?? [], t[0] = Math.round(e * 255), t[1] = Math.round(r * 255), t[2] = Math.round(s * 255), t;
  }
  toRgbArray(t) {
    t = t ?? [];
    const [e, r, s] = this._components;
    return t[0] = e, t[1] = r, t[2] = s, t;
  }
  /**
   * Convert to a hexadecimal number.
   * @example
   * import { Color } from 'pixi.js';
   * new Color('white').toNumber(); // returns 16777215
   */
  toNumber() {
    return this._int;
  }
  /**
   * Convert to a hexadecimal number in little endian format (e.g., BBGGRR).
   * @example
   * import { Color } from 'pixi.js';
   * new Color(0xffcc99).toLittleEndianNumber(); // returns 0x99ccff
   * @returns {number} - The color as a number in little endian format.
   */
  toLittleEndianNumber() {
    const t = this._int;
    return (t >> 16) + (t & 65280) + ((t & 255) << 16);
  }
  /**
   * Multiply with another color. This action is destructive, and will
   * override the previous `value` property to be `null`.
   * @param {PIXI.ColorSource} value - The color to multiply by.
   */
  multiply(t) {
    const [e, r, s, n] = Qi.temp.setValue(t)._components;
    return this._components[0] *= e, this._components[1] *= r, this._components[2] *= s, this._components[3] *= n, this.refreshInt(), this._value = null, this;
  }
  /**
   * Converts color to a premultiplied alpha format. This action is destructive, and will
   * override the previous `value` property to be `null`.
   * @param alpha - The alpha to multiply by.
   * @param {boolean} [applyToRGB=true] - Whether to premultiply RGB channels.
   * @returns {PIXI.Color} - Itself.
   */
  premultiply(t, e = !0) {
    return e && (this._components[0] *= t, this._components[1] *= t, this._components[2] *= t), this._components[3] = t, this.refreshInt(), this._value = null, this;
  }
  /**
   * Premultiplies alpha with current color.
   * @param {number} alpha - The alpha to multiply by.
   * @param {boolean} [applyToRGB=true] - Whether to premultiply RGB channels.
   * @returns {number} tint multiplied by alpha
   */
  toPremultiplied(t, e = !0) {
    if (t === 1)
      return (255 << 24) + this._int;
    if (t === 0)
      return e ? 0 : this._int;
    let r = this._int >> 16 & 255, s = this._int >> 8 & 255, n = this._int & 255;
    return e && (r = r * t + 0.5 | 0, s = s * t + 0.5 | 0, n = n * t + 0.5 | 0), (t * 255 << 24) + (r << 16) + (s << 8) + n;
  }
  /**
   * Convert to a hexidecimal string.
   * @example
   * import { Color } from 'pixi.js';
   * new Color('white').toHex(); // returns "#ffffff"
   */
  toHex() {
    const t = this._int.toString(16);
    return `#${"000000".substring(0, 6 - t.length) + t}`;
  }
  /**
   * Convert to a hexidecimal string with alpha.
   * @example
   * import { Color } from 'pixi.js';
   * new Color('white').toHexa(); // returns "#ffffffff"
   */
  toHexa() {
    const t = Math.round(this._components[3] * 255).toString(16);
    return this.toHex() + "00".substring(0, 2 - t.length) + t;
  }
  /**
   * Set alpha, suitable for chaining.
   * @param alpha
   */
  setAlpha(t) {
    return this._components[3] = this._clamp(t), this;
  }
  /**
   * Rounds the specified color according to the step. This action is destructive, and will
   * override the previous `value` property to be `null`. The alpha component is not rounded.
   * @param steps - Number of steps which will be used as a cap when rounding colors
   * @deprecated since 7.3.0
   */
  round(t) {
    const [e, r, s] = this._components;
    return this._components[0] = Math.round(e * t) / t, this._components[1] = Math.round(r * t) / t, this._components[2] = Math.round(s * t) / t, this.refreshInt(), this._value = null, this;
  }
  toArray(t) {
    t = t ?? [];
    const [e, r, s, n] = this._components;
    return t[0] = e, t[1] = r, t[2] = s, t[3] = n, t;
  }
  /**
   * Normalize the input value into rgba
   * @param value - Input value
   */
  normalize(t) {
    let e, r, s, n;
    if ((typeof t == "number" || t instanceof Number) && t >= 0 && t <= 16777215) {
      const a = t;
      e = (a >> 16 & 255) / 255, r = (a >> 8 & 255) / 255, s = (a & 255) / 255, n = 1;
    } else if ((Array.isArray(t) || t instanceof Float32Array) && t.length >= 3 && t.length <= 4)
      t = this._clamp(t), [e, r, s, n = 1] = t;
    else if ((t instanceof Uint8Array || t instanceof Uint8ClampedArray) && t.length >= 3 && t.length <= 4)
      t = this._clamp(t, 0, 255), [e, r, s, n = 255] = t, e /= 255, r /= 255, s /= 255, n /= 255;
    else if (typeof t == "string" || typeof t == "object") {
      if (typeof t == "string") {
        const o = Qi.HEX_PATTERN.exec(t);
        o && (t = `#${o[2]}`);
      }
      const a = te(t);
      a.isValid() && ({ r: e, g: r, b: s, a: n } = a.rgba, e /= 255, r /= 255, s /= 255);
    }
    if (e !== void 0)
      this._components[0] = e, this._components[1] = r, this._components[2] = s, this._components[3] = n, this.refreshInt();
    else
      throw new Error(`Unable to convert color ${t}`);
  }
  /** Refresh the internal color rgb number */
  refreshInt() {
    this._clamp(this._components);
    const [t, e, r] = this._components;
    this._int = (t * 255 << 16) + (e * 255 << 8) + (r * 255 | 0);
  }
  /**
   * Clamps values to a range. Will override original values
   * @param value - Value(s) to clamp
   * @param min - Minimum value
   * @param max - Maximum value
   */
  _clamp(t, e = 0, r = 1) {
    return typeof t == "number" ? Math.min(Math.max(t, e), r) : (t.forEach((s, n) => {
      t[n] = Math.min(Math.max(s, e), r);
    }), t);
  }
};
gr.shared = new gr(), /**
* Temporary Color object for static uses internally.
* As to not conflict with Color.shared.
* @ignore
*/
gr.temp = new gr(), /** Pattern for hex strings */
gr.HEX_PATTERN = /^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;
let tt = gr;
function Yp(i) {
  return Y("7.2.0", "utils.hex2string is deprecated, use Color#toHex instead"), tt.shared.setValue(i).toHex();
}
function qp(i) {
  return Y("7.2.0", "utils.rgb2hex is deprecated, use Color#toNumber instead"), tt.shared.setValue(i).toNumber();
}
function Kp() {
  const i = [], t = [];
  for (let r = 0; r < 32; r++)
    i[r] = r, t[r] = r;
  i[X.NORMAL_NPM] = X.NORMAL, i[X.ADD_NPM] = X.ADD, i[X.SCREEN_NPM] = X.SCREEN, t[X.NORMAL] = X.NORMAL_NPM, t[X.ADD] = X.ADD_NPM, t[X.SCREEN] = X.SCREEN_NPM;
  const e = [];
  return e.push(t), e.push(i), e;
}
const Dl = Kp();
function Fl(i, t) {
  return Dl[t ? 1 : 0][i];
}
function Zp(i, t = null) {
  const e = i * 6;
  if (t = t || new Uint16Array(e), t.length !== e)
    throw new Error(`Out buffer length is incorrect, got ${t.length} and expected ${e}`);
  for (let r = 0, s = 0; r < e; r += 6, s += 4)
    t[r + 0] = s + 0, t[r + 1] = s + 1, t[r + 2] = s + 2, t[r + 3] = s + 0, t[r + 4] = s + 2, t[r + 5] = s + 3;
  return t;
}
function Ol(i) {
  if (i.BYTES_PER_ELEMENT === 4)
    return i instanceof Float32Array ? "Float32Array" : i instanceof Uint32Array ? "Uint32Array" : "Int32Array";
  if (i.BYTES_PER_ELEMENT === 2) {
    if (i instanceof Uint16Array)
      return "Uint16Array";
  } else if (i.BYTES_PER_ELEMENT === 1 && i instanceof Uint8Array)
    return "Uint8Array";
  return null;
}
function fs(i) {
  return i += i === 0 ? 1 : 0, --i, i |= i >>> 1, i |= i >>> 2, i |= i >>> 4, i |= i >>> 8, i |= i >>> 16, i + 1;
}
function ih(i) {
  return !(i & i - 1) && !!i;
}
function sh(i) {
  let t = (i > 65535 ? 1 : 0) << 4;
  i >>>= t;
  let e = (i > 255 ? 1 : 0) << 3;
  return i >>>= e, t |= e, e = (i > 15 ? 1 : 0) << 2, i >>>= e, t |= e, e = (i > 3 ? 1 : 0) << 1, i >>>= e, t |= e, t | i >> 1;
}
function Pr(i, t, e) {
  const r = i.length;
  let s;
  if (t >= r || e === 0)
    return;
  e = t + e > r ? r - t : e;
  const n = r - e;
  for (s = t; s < n; ++s)
    i[s] = i[s + e];
  i.length = n;
}
function Ne(i) {
  return i === 0 ? 0 : i < 0 ? -1 : 1;
}
let Qp = 0;
function or() {
  return ++Qp;
}
const Zn = class {
  /**
   * @param left - The left coordinate value of the bounding box.
   * @param top - The top coordinate value of the bounding box.
   * @param right - The right coordinate value of the bounding box.
   * @param bottom - The bottom coordinate value of the bounding box.
   */
  constructor(i, t, e, r) {
    this.left = i, this.top = t, this.right = e, this.bottom = r;
  }
  /** The width of the bounding box. */
  get width() {
    return this.right - this.left;
  }
  /** The height of the bounding box. */
  get height() {
    return this.bottom - this.top;
  }
  /** Determines whether the BoundingBox is empty. */
  isEmpty() {
    return this.left === this.right || this.top === this.bottom;
  }
};
Zn.EMPTY = new Zn(0, 0, 0, 0);
let nh = Zn;
const ah = {}, ee = /* @__PURE__ */ Object.create(null), Pe = /* @__PURE__ */ Object.create(null);
class Jp {
  /**
   * @param width - the width for the newly created canvas
   * @param height - the height for the newly created canvas
   * @param {number} [resolution=PIXI.settings.RESOLUTION] - The resolution / device pixel ratio of the canvas
   */
  constructor(t, e, r) {
    this._canvas = L.ADAPTER.createCanvas(), this._context = this._canvas.getContext("2d"), this.resolution = r || L.RESOLUTION, this.resize(t, e);
  }
  /**
   * Clears the canvas that was created by the CanvasRenderTarget class.
   * @private
   */
  clear() {
    this._checkDestroyed(), this._context.setTransform(1, 0, 0, 1, 0, 0), this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
  }
  /**
   * Resizes the canvas to the specified width and height.
   * @param desiredWidth - the desired width of the canvas
   * @param desiredHeight - the desired height of the canvas
   */
  resize(t, e) {
    this._checkDestroyed(), this._canvas.width = Math.round(t * this.resolution), this._canvas.height = Math.round(e * this.resolution);
  }
  /** Destroys this canvas. */
  destroy() {
    this._context = null, this._canvas = null;
  }
  /**
   * The width of the canvas buffer in pixels.
   * @member {number}
   */
  get width() {
    return this._checkDestroyed(), this._canvas.width;
  }
  set width(t) {
    this._checkDestroyed(), this._canvas.width = Math.round(t);
  }
  /**
   * The height of the canvas buffer in pixels.
   * @member {number}
   */
  get height() {
    return this._checkDestroyed(), this._canvas.height;
  }
  set height(t) {
    this._checkDestroyed(), this._canvas.height = Math.round(t);
  }
  /** The Canvas object that belongs to this CanvasRenderTarget. */
  get canvas() {
    return this._checkDestroyed(), this._canvas;
  }
  /** A CanvasRenderingContext2D object representing a two-dimensional rendering context. */
  get context() {
    return this._checkDestroyed(), this._context;
  }
  _checkDestroyed() {
    if (this._canvas === null)
      throw new TypeError("The CanvasRenderTarget has already been destroyed");
  }
}
function oh(i, t, e) {
  for (let r = 0, s = 4 * e * t; r < t; ++r, s += 4)
    if (i[s + 3] !== 0)
      return !1;
  return !0;
}
function hh(i, t, e, r, s) {
  const n = 4 * t;
  for (let a = r, o = r * n + 4 * e; a <= s; ++a, o += n)
    if (i[o + 3] !== 0)
      return !1;
  return !0;
}
function tm(i) {
  const { width: t, height: e } = i, r = i.getContext("2d", {
    willReadFrequently: !0
  });
  if (r === null)
    throw new TypeError("Failed to get canvas 2D context");
  const s = r.getImageData(0, 0, t, e).data;
  let n = 0, a = 0, o = t - 1, h = e - 1;
  for (; a < e && oh(s, t, a); )
    ++a;
  if (a === e)
    return nh.EMPTY;
  for (; oh(s, t, h); )
    --h;
  for (; hh(s, t, n, a, h); )
    ++n;
  for (; hh(s, t, o, a, h); )
    --o;
  return ++o, ++h, new nh(n, a, o, h);
}
function em(i) {
  const t = tm(i), { width: e, height: r } = t;
  let s = null;
  if (!t.isEmpty()) {
    const n = i.getContext("2d");
    if (n === null)
      throw new TypeError("Failed to get canvas 2D context");
    s = n.getImageData(
      t.left,
      t.top,
      e,
      r
    );
  }
  return { width: e, height: r, data: s };
}
function rm(i, t = globalThis.location) {
  if (i.startsWith("data:"))
    return "";
  t = t || globalThis.location;
  const e = new URL(i, document.baseURI);
  return e.hostname !== t.hostname || e.port !== t.port || e.protocol !== t.protocol ? "anonymous" : "";
}
function Ae(i, t = 1) {
  var r;
  const e = (r = L.RETINA_PREFIX) == null ? void 0 : r.exec(i);
  return e ? parseFloat(e[1]) : t;
}
var F = /* @__PURE__ */ ((i) => (i.Renderer = "renderer", i.Application = "application", i.RendererSystem = "renderer-webgl-system", i.RendererPlugin = "renderer-webgl-plugin", i.CanvasRendererSystem = "renderer-canvas-system", i.CanvasRendererPlugin = "renderer-canvas-plugin", i.Asset = "asset", i.LoadParser = "load-parser", i.ResolveParser = "resolve-parser", i.CacheParser = "cache-parser", i.DetectionParser = "detection-parser", i))(F || {});
const Qn = (i) => {
  if (typeof i == "function" || typeof i == "object" && i.extension) {
    if (!i.extension)
      throw new Error("Extension class must have an extension object");
    i = { ...typeof i.extension != "object" ? { type: i.extension } : i.extension, ref: i };
  }
  if (typeof i == "object")
    i = { ...i };
  else
    throw new Error("Invalid extension type");
  return typeof i.type == "string" && (i.type = [i.type]), i;
}, lh = (i, t) => Qn(i).priority ?? t, k = {
  /** @ignore */
  _addHandlers: {},
  /** @ignore */
  _removeHandlers: {},
  /** @ignore */
  _queue: {},
  /**
   * Remove extensions from PixiJS.
   * @param extensions - Extensions to be removed.
   * @returns {PIXI.extensions} For chaining.
   */
  remove(...i) {
    return i.map(Qn).forEach((t) => {
      t.type.forEach((e) => {
        var r, s;
        return (s = (r = this._removeHandlers)[e]) == null ? void 0 : s.call(r, t);
      });
    }), this;
  },
  /**
   * Register new extensions with PixiJS.
   * @param extensions - The spread of extensions to add to PixiJS.
   * @returns {PIXI.extensions} For chaining.
   */
  add(...i) {
    return i.map(Qn).forEach((t) => {
      t.type.forEach((e) => {
        var n, a;
        const r = this._addHandlers, s = this._queue;
        r[e] ? (n = r[e]) == null || n.call(r, t) : (s[e] = s[e] || [], (a = s[e]) == null || a.push(t));
      });
    }), this;
  },
  /**
   * Internal method to handle extensions by name.
   * @param type - The extension type.
   * @param onAdd  - Function for handling when extensions are added/registered passes {@link PIXI.ExtensionFormat}.
   * @param onRemove  - Function for handling when extensions are removed/unregistered passes {@link PIXI.ExtensionFormat}.
   * @returns {PIXI.extensions} For chaining.
   */
  handle(i, t, e) {
    var a;
    const r = this._addHandlers, s = this._removeHandlers;
    if (r[i] || s[i])
      throw new Error(`Extension type ${i} already has a handler`);
    r[i] = t, s[i] = e;
    const n = this._queue;
    return n[i] && ((a = n[i]) == null || a.forEach((o) => t(o)), delete n[i]), this;
  },
  /**
   * Handle a type, but using a map by `name` property.
   * @param type - Type of extension to handle.
   * @param map - The object map of named extensions.
   * @returns {PIXI.extensions} For chaining.
   */
  handleByMap(i, t) {
    return this.handle(
      i,
      (e) => {
        e.name && (t[e.name] = e.ref);
      },
      (e) => {
        e.name && delete t[e.name];
      }
    );
  },
  /**
   * Handle a type, but using a list of extensions.
   * @param type - Type of extension to handle.
   * @param list - The list of extensions.
   * @param defaultPriority - The default priority to use if none is specified.
   * @returns {PIXI.extensions} For chaining.
   */
  handleByList(i, t, e = -1) {
    return this.handle(
      i,
      (r) => {
        t.includes(r.ref) || (t.push(r.ref), t.sort((s, n) => lh(n, e) - lh(s, e)));
      },
      (r) => {
        const s = t.indexOf(r.ref);
        s !== -1 && t.splice(s, 1);
      }
    );
  }
};
class Jn {
  constructor(t) {
    typeof t == "number" ? this.rawBinaryData = new ArrayBuffer(t) : t instanceof Uint8Array ? this.rawBinaryData = t.buffer : this.rawBinaryData = t, this.uint32View = new Uint32Array(this.rawBinaryData), this.float32View = new Float32Array(this.rawBinaryData);
  }
  /** View on the raw binary data as a `Int8Array`. */
  get int8View() {
    return this._int8View || (this._int8View = new Int8Array(this.rawBinaryData)), this._int8View;
  }
  /** View on the raw binary data as a `Uint8Array`. */
  get uint8View() {
    return this._uint8View || (this._uint8View = new Uint8Array(this.rawBinaryData)), this._uint8View;
  }
  /**  View on the raw binary data as a `Int16Array`. */
  get int16View() {
    return this._int16View || (this._int16View = new Int16Array(this.rawBinaryData)), this._int16View;
  }
  /** View on the raw binary data as a `Uint16Array`. */
  get uint16View() {
    return this._uint16View || (this._uint16View = new Uint16Array(this.rawBinaryData)), this._uint16View;
  }
  /** View on the raw binary data as a `Int32Array`. */
  get int32View() {
    return this._int32View || (this._int32View = new Int32Array(this.rawBinaryData)), this._int32View;
  }
  /**
   * Returns the view of the given type.
   * @param type - One of `int8`, `uint8`, `int16`,
   *    `uint16`, `int32`, `uint32`, and `float32`.
   * @returns - typed array of given type
   */
  view(t) {
    return this[`${t}View`];
  }
  /** Destroys all buffer references. Do not use after calling this. */
  destroy() {
    this.rawBinaryData = null, this._int8View = null, this._uint8View = null, this._int16View = null, this._uint16View = null, this._int32View = null, this.uint32View = null, this.float32View = null;
  }
  static sizeOf(t) {
    switch (t) {
      case "int8":
      case "uint8":
        return 1;
      case "int16":
      case "uint16":
        return 2;
      case "int32":
      case "uint32":
      case "float32":
        return 4;
      default:
        throw new Error(`${t} isn't a valid view type`);
    }
  }
}
const im = [
  "precision mediump float;",
  "void main(void){",
  "float test = 0.1;",
  "%forloop%",
  "gl_FragColor = vec4(0.0);",
  "}"
].join(`
`);
function sm(i) {
  let t = "";
  for (let e = 0; e < i; ++e)
    e > 0 && (t += `
else `), e < i - 1 && (t += `if(test == ${e}.0){}`);
  return t;
}
function nm(i, t) {
  if (i === 0)
    throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");
  const e = t.createShader(t.FRAGMENT_SHADER);
  for (; ; ) {
    const r = im.replace(/%forloop%/gi, sm(i));
    if (t.shaderSource(e, r), t.compileShader(e), !t.getShaderParameter(e, t.COMPILE_STATUS))
      i = i / 2 | 0;
    else
      break;
  }
  return i;
}
const cn = 0, dn = 1, fn = 2, pn = 3, mn = 4, gn = 5;
class ce {
  constructor() {
    this.data = 0, this.blendMode = X.NORMAL, this.polygonOffset = 0, this.blend = !0, this.depthMask = !0;
  }
  /**
   * Activates blending of the computed fragment color values.
   * @default true
   */
  get blend() {
    return !!(this.data & 1 << cn);
  }
  set blend(t) {
    !!(this.data & 1 << cn) !== t && (this.data ^= 1 << cn);
  }
  /**
   * Activates adding an offset to depth values of polygon's fragments
   * @default false
   */
  get offsets() {
    return !!(this.data & 1 << dn);
  }
  set offsets(t) {
    !!(this.data & 1 << dn) !== t && (this.data ^= 1 << dn);
  }
  /**
   * Activates culling of polygons.
   * @default false
   */
  get culling() {
    return !!(this.data & 1 << fn);
  }
  set culling(t) {
    !!(this.data & 1 << fn) !== t && (this.data ^= 1 << fn);
  }
  /**
   * Activates depth comparisons and updates to the depth buffer.
   * @default false
   */
  get depthTest() {
    return !!(this.data & 1 << pn);
  }
  set depthTest(t) {
    !!(this.data & 1 << pn) !== t && (this.data ^= 1 << pn);
  }
  /**
   * Enables or disables writing to the depth buffer.
   * @default true
   */
  get depthMask() {
    return !!(this.data & 1 << gn);
  }
  set depthMask(t) {
    !!(this.data & 1 << gn) !== t && (this.data ^= 1 << gn);
  }
  /**
   * Specifies whether or not front or back-facing polygons can be culled.
   * @default false
   */
  get clockwiseFrontFace() {
    return !!(this.data & 1 << mn);
  }
  set clockwiseFrontFace(t) {
    !!(this.data & 1 << mn) !== t && (this.data ^= 1 << mn);
  }
  /**
   * The blend mode to be applied when this state is set. Apply a value of `PIXI.BLEND_MODES.NORMAL` to reset the blend mode.
   * Setting this mode to anything other than NO_BLEND will automatically switch blending on.
   * @default PIXI.BLEND_MODES.NORMAL
   */
  get blendMode() {
    return this._blendMode;
  }
  set blendMode(t) {
    this.blend = t !== X.NONE, this._blendMode = t;
  }
  /**
   * The polygon offset. Setting this property to anything other than 0 will automatically enable polygon offset fill.
   * @default 0
   */
  get polygonOffset() {
    return this._polygonOffset;
  }
  set polygonOffset(t) {
    this.offsets = !!t, this._polygonOffset = t;
  }
  static for2d() {
    const t = new ce();
    return t.depthTest = !1, t.blend = !0, t;
  }
}
ce.prototype.toString = function() {
  return `[@pixi/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`;
};
const ta = [];
function Nl(i, t) {
  if (!i)
    return null;
  let e = "";
  if (typeof i == "string") {
    const r = /\.(\w{3,4})(?:$|\?|#)/i.exec(i);
    r && (e = r[1].toLowerCase());
  }
  for (let r = ta.length - 1; r >= 0; --r) {
    const s = ta[r];
    if (s.test && s.test(i, e))
      return new s(i, t);
  }
  throw new Error("Unrecognized source type to auto-detect Resource");
}
class Wt {
  /**
   * @param {string} name - The function name that will be executed on the listeners added to this Runner.
   */
  constructor(t) {
    this.items = [], this._name = t, this._aliasCount = 0;
  }
  /* eslint-disable jsdoc/require-param, jsdoc/check-param-names */
  /**
   * Dispatch/Broadcast Runner to all listeners added to the queue.
   * @param {...any} params - (optional) parameters to pass to each listener
   */
  /*  eslint-enable jsdoc/require-param, jsdoc/check-param-names */
  emit(t, e, r, s, n, a, o, h) {
    if (arguments.length > 8)
      throw new Error("max arguments reached");
    const { name: l, items: u } = this;
    this._aliasCount++;
    for (let c = 0, d = u.length; c < d; c++)
      u[c][l](t, e, r, s, n, a, o, h);
    return u === this.items && this._aliasCount--, this;
  }
  ensureNonAliasedItems() {
    this._aliasCount > 0 && this.items.length > 1 && (this._aliasCount = 0, this.items = this.items.slice(0));
  }
  /**
   * Add a listener to the Runner
   *
   * Runners do not need to have scope or functions passed to them.
   * All that is required is to pass the listening object and ensure that it has contains a function that has the same name
   * as the name provided to the Runner when it was created.
   *
   * E.g. A listener passed to this Runner will require a 'complete' function.
   *
   * ```js
   * import { Runner } from '@pixi/runner';
   *
   * const complete = new Runner('complete');
   * ```
   *
   * The scope used will be the object itself.
   * @param {any} item - The object that will be listening.
   */
  add(t) {
    return t[this._name] && (this.ensureNonAliasedItems(), this.remove(t), this.items.push(t)), this;
  }
  /**
   * Remove a single listener from the dispatch queue.
   * @param {any} item - The listener that you would like to remove.
   */
  remove(t) {
    const e = this.items.indexOf(t);
    return e !== -1 && (this.ensureNonAliasedItems(), this.items.splice(e, 1)), this;
  }
  /**
   * Check to see if the listener is already in the Runner
   * @param {any} item - The listener that you would like to check.
   */
  contains(t) {
    return this.items.includes(t);
  }
  /** Remove all listeners from the Runner */
  removeAll() {
    return this.ensureNonAliasedItems(), this.items.length = 0, this;
  }
  /** Remove all references, don't use after this. */
  destroy() {
    this.removeAll(), this.items.length = 0, this._name = "";
  }
  /**
   * `true` if there are no this Runner contains no listeners
   * @readonly
   */
  get empty() {
    return this.items.length === 0;
  }
  /**
   * The name of the runner.
   * @type {string}
   */
  get name() {
    return this._name;
  }
}
Object.defineProperties(Wt.prototype, {
  /**
   * Alias for `emit`
   * @memberof PIXI.Runner#
   * @method dispatch
   * @see PIXI.Runner#emit
   */
  dispatch: { value: Wt.prototype.emit },
  /**
   * Alias for `emit`
   * @memberof PIXI.Runner#
   * @method run
   * @see PIXI.Runner#emit
   */
  run: { value: Wt.prototype.emit }
});
class di {
  /**
   * @param width - Width of the resource
   * @param height - Height of the resource
   */
  constructor(t = 0, e = 0) {
    this._width = t, this._height = e, this.destroyed = !1, this.internal = !1, this.onResize = new Wt("setRealSize"), this.onUpdate = new Wt("update"), this.onError = new Wt("onError");
  }
  /**
   * Bind to a parent BaseTexture
   * @param baseTexture - Parent texture
   */
  bind(t) {
    this.onResize.add(t), this.onUpdate.add(t), this.onError.add(t), (this._width || this._height) && this.onResize.emit(this._width, this._height);
  }
  /**
   * Unbind to a parent BaseTexture
   * @param baseTexture - Parent texture
   */
  unbind(t) {
    this.onResize.remove(t), this.onUpdate.remove(t), this.onError.remove(t);
  }
  /**
   * Trigger a resize event
   * @param width - X dimension
   * @param height - Y dimension
   */
  resize(t, e) {
    (t !== this._width || e !== this._height) && (this._width = t, this._height = e, this.onResize.emit(t, e));
  }
  /**
   * Has been validated
   * @readonly
   */
  get valid() {
    return !!this._width && !!this._height;
  }
  /** Has been updated trigger event. */
  update() {
    this.destroyed || this.onUpdate.emit();
  }
  /**
   * This can be overridden to start preloading a resource
   * or do any other prepare step.
   * @protected
   * @returns Handle the validate event
   */
  load() {
    return Promise.resolve(this);
  }
  /**
   * The width of the resource.
   * @readonly
   */
  get width() {
    return this._width;
  }
  /**
   * The height of the resource.
   * @readonly
   */
  get height() {
    return this._height;
  }
  /**
   * Set the style, optional to override
   * @param _renderer - yeah, renderer!
   * @param _baseTexture - the texture
   * @param _glTexture - texture instance for this webgl context
   * @returns - `true` is success
   */
  style(t, e, r) {
    return !1;
  }
  /** Clean up anything, this happens when destroying is ready. */
  dispose() {
  }
  /**
   * Call when destroying resource, unbind any BaseTexture object
   * before calling this method, as reference counts are maintained
   * internally.
   */
  destroy() {
    this.destroyed || (this.destroyed = !0, this.dispose(), this.onError.removeAll(), this.onError = null, this.onResize.removeAll(), this.onResize = null, this.onUpdate.removeAll(), this.onUpdate = null);
  }
  /**
   * Abstract, used to auto-detect resource type.
   * @param {*} _source - The source object
   * @param {string} _extension - The extension of source, if set
   */
  static test(t, e) {
    return !1;
  }
}
class Bs extends di {
  /**
   * @param source - Source buffer
   * @param options - Options
   * @param {number} options.width - Width of the texture
   * @param {number} options.height - Height of the texture
   * @param {1|2|4|8} [options.unpackAlignment=4] - The alignment of the pixel rows.
   */
  constructor(t, e) {
    const { width: r, height: s } = e || {};
    if (!r || !s)
      throw new Error("BufferResource width or height invalid");
    super(r, s), this.data = t, this.unpackAlignment = e.unpackAlignment ?? 4;
  }
  /**
   * Upload the texture to the GPU.
   * @param renderer - Upload to the renderer
   * @param baseTexture - Reference to parent texture
   * @param glTexture - glTexture
   * @returns - true is success
   */
  upload(t, e, r) {
    const s = t.gl;
    s.pixelStorei(s.UNPACK_ALIGNMENT, this.unpackAlignment), s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.alphaMode === Dt.UNPACK);
    const n = e.realWidth, a = e.realHeight;
    return r.width === n && r.height === a ? s.texSubImage2D(
      e.target,
      0,
      0,
      0,
      n,
      a,
      e.format,
      r.type,
      this.data
    ) : (r.width = n, r.height = a, s.texImage2D(
      e.target,
      0,
      r.internalFormat,
      n,
      a,
      0,
      e.format,
      r.type,
      this.data
    )), !0;
  }
  /** Destroy and don't use after this. */
  dispose() {
    this.data = null;
  }
  /**
   * Used to auto-detect the type of resource.
   * @param {*} source - The source object
   * @returns {boolean} `true` if buffer source
   */
  static test(t) {
    return t === null || t instanceof Int8Array || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array;
  }
}
const am = {
  scaleMode: ye.NEAREST,
  alphaMode: Dt.NPM
}, ea = class yr extends gi {
  /**
   * @param {PIXI.Resource|PIXI.ImageSource|string} [resource=null] -
   *        The current resource to use, for things that aren't Resource objects, will be converted
   *        into a Resource.
   * @param options - Collection of options, default options inherited from {@link PIXI.BaseTexture.defaultOptions}.
   * @param {PIXI.MIPMAP_MODES} [options.mipmap] - If mipmapping is enabled for texture
   * @param {number} [options.anisotropicLevel] - Anisotropic filtering level of texture
   * @param {PIXI.WRAP_MODES} [options.wrapMode] - Wrap mode for textures
   * @param {PIXI.SCALE_MODES} [options.scaleMode] - Default scale mode, linear, nearest
   * @param {PIXI.FORMATS} [options.format] - GL format type
   * @param {PIXI.TYPES} [options.type] - GL data type
   * @param {PIXI.TARGETS} [options.target] - GL texture target
   * @param {PIXI.ALPHA_MODES} [options.alphaMode] - Pre multiply the image alpha
   * @param {number} [options.width=0] - Width of the texture
   * @param {number} [options.height=0] - Height of the texture
   * @param {number} [options.resolution=PIXI.settings.RESOLUTION] - Resolution of the base texture
   * @param {object} [options.resourceOptions] - Optional resource options,
   *        see {@link PIXI.autoDetectResource autoDetectResource}
   */
  constructor(t = null, e = null) {
    super(), e = Object.assign({}, yr.defaultOptions, e);
    const {
      alphaMode: r,
      mipmap: s,
      anisotropicLevel: n,
      scaleMode: a,
      width: o,
      height: h,
      wrapMode: l,
      format: u,
      type: c,
      target: d,
      resolution: f,
      resourceOptions: p
    } = e;
    t && !(t instanceof di) && (t = Nl(t, p), t.internal = !0), this.resolution = f || L.RESOLUTION, this.width = Math.round((o || 0) * this.resolution) / this.resolution, this.height = Math.round((h || 0) * this.resolution) / this.resolution, this._mipmap = s, this.anisotropicLevel = n, this._wrapMode = l, this._scaleMode = a, this.format = u, this.type = c, this.target = d, this.alphaMode = r, this.uid = or(), this.touched = 0, this.isPowerOfTwo = !1, this._refreshPOT(), this._glTextures = {}, this.dirtyId = 0, this.dirtyStyleId = 0, this.cacheId = null, this.valid = o > 0 && h > 0, this.textureCacheIds = [], this.destroyed = !1, this.resource = null, this._batchEnabled = 0, this._batchLocation = 0, this.parentTextureArray = null, this.setResource(t);
  }
  /**
   * Pixel width of the source of this texture
   * @readonly
   */
  get realWidth() {
    return Math.round(this.width * this.resolution);
  }
  /**
   * Pixel height of the source of this texture
   * @readonly
   */
  get realHeight() {
    return Math.round(this.height * this.resolution);
  }
  /**
   * Mipmap mode of the texture, affects downscaled images
   * @default PIXI.MIPMAP_MODES.POW2
   */
  get mipmap() {
    return this._mipmap;
  }
  set mipmap(t) {
    this._mipmap !== t && (this._mipmap = t, this.dirtyStyleId++);
  }
  /**
   * The scale mode to apply when scaling this texture
   * @default PIXI.SCALE_MODES.LINEAR
   */
  get scaleMode() {
    return this._scaleMode;
  }
  set scaleMode(t) {
    this._scaleMode !== t && (this._scaleMode = t, this.dirtyStyleId++);
  }
  /**
   * How the texture wraps
   * @default PIXI.WRAP_MODES.CLAMP
   */
  get wrapMode() {
    return this._wrapMode;
  }
  set wrapMode(t) {
    this._wrapMode !== t && (this._wrapMode = t, this.dirtyStyleId++);
  }
  /**
   * Changes style options of BaseTexture
   * @param scaleMode - Pixi scalemode
   * @param mipmap - enable mipmaps
   * @returns - this
   */
  setStyle(t, e) {
    let r;
    return t !== void 0 && t !== this.scaleMode && (this.scaleMode = t, r = !0), e !== void 0 && e !== this.mipmap && (this.mipmap = e, r = !0), r && this.dirtyStyleId++, this;
  }
  /**
   * Changes w/h/resolution. Texture becomes valid if width and height are greater than zero.
   * @param desiredWidth - Desired visual width
   * @param desiredHeight - Desired visual height
   * @param resolution - Optionally set resolution
   * @returns - this
   */
  setSize(t, e, r) {
    return r = r || this.resolution, this.setRealSize(t * r, e * r, r);
  }
  /**
   * Sets real size of baseTexture, preserves current resolution.
   * @param realWidth - Full rendered width
   * @param realHeight - Full rendered height
   * @param resolution - Optionally set resolution
   * @returns - this
   */
  setRealSize(t, e, r) {
    return this.resolution = r || this.resolution, this.width = Math.round(t) / this.resolution, this.height = Math.round(e) / this.resolution, this._refreshPOT(), this.update(), this;
  }
  /**
   * Refresh check for isPowerOfTwo texture based on size
   * @private
   */
  _refreshPOT() {
    this.isPowerOfTwo = ih(this.realWidth) && ih(this.realHeight);
  }
  /**
   * Changes resolution
   * @param resolution - res
   * @returns - this
   */
  setResolution(t) {
    const e = this.resolution;
    return e === t ? this : (this.resolution = t, this.valid && (this.width = Math.round(this.width * e) / t, this.height = Math.round(this.height * e) / t, this.emit("update", this)), this._refreshPOT(), this);
  }
  /**
   * Sets the resource if it wasn't set. Throws error if resource already present
   * @param resource - that is managing this BaseTexture
   * @returns - this
   */
  setResource(t) {
    if (this.resource === t)
      return this;
    if (this.resource)
      throw new Error("Resource can be set only once");
    return t.bind(this), this.resource = t, this;
  }
  /** Invalidates the object. Texture becomes valid if width and height are greater than zero. */
  update() {
    this.valid ? (this.dirtyId++, this.dirtyStyleId++, this.emit("update", this)) : this.width > 0 && this.height > 0 && (this.valid = !0, this.emit("loaded", this), this.emit("update", this));
  }
  /**
   * Handle errors with resources.
   * @private
   * @param event - Error event emitted.
   */
  onError(t) {
    this.emit("error", this, t);
  }
  /**
   * Destroys this base texture.
   * The method stops if resource doesn't want this texture to be destroyed.
   * Removes texture from all caches.
   * @fires PIXI.BaseTexture#destroyed
   */
  destroy() {
    this.resource && (this.resource.unbind(this), this.resource.internal && this.resource.destroy(), this.resource = null), this.cacheId && (delete Pe[this.cacheId], delete ee[this.cacheId], this.cacheId = null), this.valid = !1, this.dispose(), yr.removeFromCache(this), this.textureCacheIds = null, this.destroyed = !0, this.emit("destroyed", this), this.removeAllListeners();
  }
  /**
   * Frees the texture from WebGL memory without destroying this texture object.
   * This means you can still use the texture later which will upload it to GPU
   * memory again.
   * @fires PIXI.BaseTexture#dispose
   */
  dispose() {
    this.emit("dispose", this);
  }
  /** Utility function for BaseTexture|Texture cast. */
  castToBaseTexture() {
    return this;
  }
  /**
   * Helper function that creates a base texture based on the source you provide.
   * The source can be - image url, image element, canvas element. If the
   * source is an image url or an image element and not in the base texture
   * cache, it will be created and loaded.
   * @static
   * @param {PIXI.ImageSource|string|string[]} source - The
   *        source to create base texture from.
   * @param options - See {@link PIXI.BaseTexture}'s constructor for options.
   * @param {string} [options.pixiIdPrefix=pixiid] - If a source has no id, this is the prefix of the generated id
   * @param {boolean} [strict] - Enforce strict-mode, see {@link PIXI.settings.STRICT_TEXTURE_CACHE}.
   * @returns {PIXI.BaseTexture} The new base texture.
   */
  static from(t, e, r = L.STRICT_TEXTURE_CACHE) {
    const s = typeof t == "string";
    let n = null;
    if (s)
      n = t;
    else {
      if (!t._pixiId) {
        const o = (e == null ? void 0 : e.pixiIdPrefix) || "pixiid";
        t._pixiId = `${o}_${or()}`;
      }
      n = t._pixiId;
    }
    let a = Pe[n];
    if (s && r && !a)
      throw new Error(`The cacheId "${n}" does not exist in BaseTextureCache.`);
    return a || (a = new yr(t, e), a.cacheId = n, yr.addToCache(a, n)), a;
  }
  /**
   * Create a new Texture with a BufferResource from a typed array.
   * @param buffer - The optional array to use. If no data is provided, a new Float32Array is created.
   * @param width - Width of the resource
   * @param height - Height of the resource
   * @param options - See {@link PIXI.BaseTexture}'s constructor for options.
   *        Default properties are different from the constructor's defaults.
   * @param {PIXI.FORMATS} [options.format] - The format is not given, the type is inferred from the
   *        type of the buffer: `RGBA` if Float32Array, Int8Array, Uint8Array, or Uint8ClampedArray,
   *        otherwise `RGBA_INTEGER`.
   * @param {PIXI.TYPES} [options.type] - The type is not given, the type is inferred from the
   *        type of the buffer. Maps Float32Array to `FLOAT`, Int32Array to `INT`, Uint32Array to
   *        `UNSIGNED_INT`, Int16Array to `SHORT`, Uint16Array to `UNSIGNED_SHORT`, Int8Array to `BYTE`,
   *        Uint8Array/Uint8ClampedArray to `UNSIGNED_BYTE`.
   * @param {PIXI.ALPHA_MODES} [options.alphaMode=PIXI.ALPHA_MODES.NPM]
   * @param {PIXI.SCALE_MODES} [options.scaleMode=PIXI.SCALE_MODES.NEAREST]
   * @returns - The resulting new BaseTexture
   */
  static fromBuffer(t, e, r, s) {
    t = t || new Float32Array(e * r * 4);
    const n = new Bs(t, { width: e, height: r, ...s == null ? void 0 : s.resourceOptions });
    let a, o;
    return t instanceof Float32Array ? (a = P.RGBA, o = V.FLOAT) : t instanceof Int32Array ? (a = P.RGBA_INTEGER, o = V.INT) : t instanceof Uint32Array ? (a = P.RGBA_INTEGER, o = V.UNSIGNED_INT) : t instanceof Int16Array ? (a = P.RGBA_INTEGER, o = V.SHORT) : t instanceof Uint16Array ? (a = P.RGBA_INTEGER, o = V.UNSIGNED_SHORT) : t instanceof Int8Array ? (a = P.RGBA, o = V.BYTE) : (a = P.RGBA, o = V.UNSIGNED_BYTE), n.internal = !0, new yr(n, Object.assign({}, am, { type: o, format: a }, s));
  }
  /**
   * Adds a BaseTexture to the global BaseTextureCache. This cache is shared across the whole PIXI object.
   * @param {PIXI.BaseTexture} baseTexture - The BaseTexture to add to the cache.
   * @param {string} id - The id that the BaseTexture will be stored against.
   */
  static addToCache(t, e) {
    e && (t.textureCacheIds.includes(e) || t.textureCacheIds.push(e), Pe[e] && Pe[e] !== t && console.warn(`BaseTexture added to the cache with an id [${e}] that already had an entry`), Pe[e] = t);
  }
  /**
   * Remove a BaseTexture from the global BaseTextureCache.
   * @param {string|PIXI.BaseTexture} baseTexture - id of a BaseTexture to be removed, or a BaseTexture instance itself.
   * @returns {PIXI.BaseTexture|null} The BaseTexture that was removed.
   */
  static removeFromCache(t) {
    if (typeof t == "string") {
      const e = Pe[t];
      if (e) {
        const r = e.textureCacheIds.indexOf(t);
        return r > -1 && e.textureCacheIds.splice(r, 1), delete Pe[t], e;
      }
    } else if (t != null && t.textureCacheIds) {
      for (let e = 0; e < t.textureCacheIds.length; ++e)
        delete Pe[t.textureCacheIds[e]];
      return t.textureCacheIds.length = 0, t;
    }
    return null;
  }
};
ea.defaultOptions = {
  /**
   * If mipmapping is enabled for texture.
   * @type {PIXI.MIPMAP_MODES}
   * @default PIXI.MIPMAP_MODES.POW2
   */
  mipmap: ue.POW2,
  /** Anisotropic filtering level of texture */
  anisotropicLevel: 0,
  /**
   * Default scale mode, linear, nearest.
   * @type {PIXI.SCALE_MODES}
   * @default PIXI.SCALE_MODES.LINEAR
   */
  scaleMode: ye.LINEAR,
  /**
   * Wrap mode for textures.
   * @type {PIXI.WRAP_MODES}
   * @default PIXI.WRAP_MODES.CLAMP
   */
  wrapMode: Ee.CLAMP,
  /**
   * Pre multiply the image alpha
   * @type {PIXI.ALPHA_MODES}
   * @default PIXI.ALPHA_MODES.UNPACK
   */
  alphaMode: Dt.UNPACK,
  /**
   * GL texture target
   * @type {PIXI.TARGETS}
   * @default PIXI.TARGETS.TEXTURE_2D
   */
  target: Sr.TEXTURE_2D,
  /**
   * GL format type
   * @type {PIXI.FORMATS}
   * @default PIXI.FORMATS.RGBA
   */
  format: P.RGBA,
  /**
   * GL data type
   * @type {PIXI.TYPES}
   * @default PIXI.TYPES.UNSIGNED_BYTE
   */
  type: V.UNSIGNED_BYTE
}, /** Global number of the texture batch, used by multi-texture renderers. */
ea._globalBatch = 0;
let W = ea;
class ra {
  constructor() {
    this.texArray = null, this.blend = 0, this.type = oe.TRIANGLES, this.start = 0, this.size = 0, this.data = null;
  }
}
let om = 0;
class ut {
  /**
   * @param {PIXI.IArrayBuffer} data - the data to store in the buffer.
   * @param _static - `true` for static buffer
   * @param index - `true` for index buffer
   */
  constructor(t, e = !0, r = !1) {
    this.data = t || new Float32Array(1), this._glBuffers = {}, this._updateID = 0, this.index = r, this.static = e, this.id = om++, this.disposeRunner = new Wt("disposeBuffer");
  }
  // TODO could explore flagging only a partial upload?
  /**
   * Flags this buffer as requiring an upload to the GPU.
   * @param {PIXI.IArrayBuffer|number[]} [data] - the data to update in the buffer.
   */
  update(t) {
    t instanceof Array && (t = new Float32Array(t)), this.data = t || this.data, this._updateID++;
  }
  /** Disposes WebGL resources that are connected to this geometry. */
  dispose() {
    this.disposeRunner.emit(this, !1);
  }
  /** Destroys the buffer. */
  destroy() {
    this.dispose(), this.data = null;
  }
  /**
   * Flags whether this is an index buffer.
   *
   * Index buffers are of type `ELEMENT_ARRAY_BUFFER`. Note that setting this property to false will make
   * the buffer of type `ARRAY_BUFFER`.
   *
   * For backwards compatibility.
   */
  set index(t) {
    this.type = t ? he.ELEMENT_ARRAY_BUFFER : he.ARRAY_BUFFER;
  }
  get index() {
    return this.type === he.ELEMENT_ARRAY_BUFFER;
  }
  /**
   * Helper function that creates a buffer based on an array or TypedArray
   * @param {ArrayBufferView | number[]} data - the TypedArray that the buffer will store. If this is a regular Array it will be converted to a Float32Array.
   * @returns - A new Buffer based on the data provided.
   */
  static from(t) {
    return t instanceof Array && (t = new Float32Array(t)), new ut(t);
  }
}
class ps {
  /**
   * @param buffer - the id of the buffer that this attribute will look for
   * @param size - the size of the attribute. If you have 2 floats per vertex (eg position x and y) this would be 2.
   * @param normalized - should the data be normalized.
   * @param {PIXI.TYPES} [type=PIXI.TYPES.FLOAT] - what type of number is the attribute. Check {@link PIXI.TYPES} to see the ones available
   * @param [stride=0] - How far apart, in bytes, the start of each value is. (used for interleaving data)
   * @param [start=0] - How far into the array to start reading values (used for interleaving data)
   * @param [instance=false] - Whether the geometry is instanced.
   * @param [divisor=1] - Divisor to use when doing instanced rendering
   */
  constructor(t, e = 0, r = !1, s = V.FLOAT, n, a, o, h = 1) {
    this.buffer = t, this.size = e, this.normalized = r, this.type = s, this.stride = n, this.start = a, this.instance = o, this.divisor = h;
  }
  /** Destroys the Attribute. */
  destroy() {
    this.buffer = null;
  }
  /**
   * Helper function that creates an Attribute based on the information provided
   * @param buffer - the id of the buffer that this attribute will look for
   * @param [size=0] - the size of the attribute. If you have 2 floats per vertex (eg position x and y) this would be 2
   * @param [normalized=false] - should the data be normalized.
   * @param [type=PIXI.TYPES.FLOAT] - what type of number is the attribute. Check {@link PIXI.TYPES} to see the ones available
   * @param [stride=0] - How far apart, in bytes, the start of each value is. (used for interleaving data)
   * @returns - A new {@link PIXI.Attribute} based on the information provided
   */
  static from(t, e, r, s, n) {
    return new ps(t, e, r, s, n);
  }
}
const hm = {
  Float32Array,
  Uint32Array,
  Int32Array,
  Uint8Array
};
function lm(i, t) {
  let e = 0, r = 0;
  const s = {};
  for (let h = 0; h < i.length; h++)
    r += t[h], e += i[h].length;
  const n = new ArrayBuffer(e * 4);
  let a = null, o = 0;
  for (let h = 0; h < i.length; h++) {
    const l = t[h], u = i[h], c = Ol(u);
    s[c] || (s[c] = new hm[c](n)), a = s[c];
    for (let d = 0; d < u.length; d++) {
      const f = (d / l | 0) * r + o, p = d % l;
      a[f + p] = u[d];
    }
    o += l;
  }
  return new Float32Array(n);
}
const uh = { 5126: 4, 5123: 2, 5121: 1 };
let um = 0;
const cm = {
  Float32Array,
  Uint32Array,
  Int32Array,
  Uint8Array,
  Uint16Array
};
class ke {
  /**
   * @param buffers - An array of buffers. optional.
   * @param attributes - Of the geometry, optional structure of the attributes layout
   */
  constructor(t = [], e = {}) {
    this.buffers = t, this.indexBuffer = null, this.attributes = e, this.glVertexArrayObjects = {}, this.id = um++, this.instanced = !1, this.instanceCount = 1, this.disposeRunner = new Wt("disposeGeometry"), this.refCount = 0;
  }
  /**
   *
   * Adds an attribute to the geometry
   * Note: `stride` and `start` should be `undefined` if you dont know them, not 0!
   * @param id - the name of the attribute (matching up to a shader)
   * @param {PIXI.Buffer|number[]} buffer - the buffer that holds the data of the attribute . You can also provide an Array and a buffer will be created from it.
   * @param size - the size of the attribute. If you have 2 floats per vertex (eg position x and y) this would be 2
   * @param normalized - should the data be normalized.
   * @param [type=PIXI.TYPES.FLOAT] - what type of number is the attribute. Check {@link PIXI.TYPES} to see the ones available
   * @param [stride=0] - How far apart, in bytes, the start of each value is. (used for interleaving data)
   * @param [start=0] - How far into the array to start reading values (used for interleaving data)
   * @param instance - Instancing flag
   * @returns - Returns self, useful for chaining.
   */
  addAttribute(t, e, r = 0, s = !1, n, a, o, h = !1) {
    if (!e)
      throw new Error("You must pass a buffer when creating an attribute");
    e instanceof ut || (e instanceof Array && (e = new Float32Array(e)), e = new ut(e));
    const l = t.split("|");
    if (l.length > 1) {
      for (let c = 0; c < l.length; c++)
        this.addAttribute(l[c], e, r, s, n);
      return this;
    }
    let u = this.buffers.indexOf(e);
    return u === -1 && (this.buffers.push(e), u = this.buffers.length - 1), this.attributes[t] = new ps(u, r, s, n, a, o, h), this.instanced = this.instanced || h, this;
  }
  /**
   * Returns the requested attribute.
   * @param id - The name of the attribute required
   * @returns - The attribute requested.
   */
  getAttribute(t) {
    return this.attributes[t];
  }
  /**
   * Returns the requested buffer.
   * @param id - The name of the buffer required.
   * @returns - The buffer requested.
   */
  getBuffer(t) {
    return this.buffers[this.getAttribute(t).buffer];
  }
  /**
   *
   * Adds an index buffer to the geometry
   * The index buffer contains integers, three for each triangle in the geometry, which reference the various attribute buffers (position, colour, UV coordinates, other UV coordinates, normal, …). There is only ONE index buffer.
   * @param {PIXI.Buffer|number[]} [buffer] - The buffer that holds the data of the index buffer. You can also provide an Array and a buffer will be created from it.
   * @returns - Returns self, useful for chaining.
   */
  addIndex(t) {
    return t instanceof ut || (t instanceof Array && (t = new Uint16Array(t)), t = new ut(t)), t.type = he.ELEMENT_ARRAY_BUFFER, this.indexBuffer = t, this.buffers.includes(t) || this.buffers.push(t), this;
  }
  /**
   * Returns the index buffer
   * @returns - The index buffer.
   */
  getIndex() {
    return this.indexBuffer;
  }
  /**
   * This function modifies the structure so that all current attributes become interleaved into a single buffer
   * This can be useful if your model remains static as it offers a little performance boost
   * @returns - Returns self, useful for chaining.
   */
  interleave() {
    if (this.buffers.length === 1 || this.buffers.length === 2 && this.indexBuffer)
      return this;
    const t = [], e = [], r = new ut();
    let s;
    for (s in this.attributes) {
      const n = this.attributes[s], a = this.buffers[n.buffer];
      t.push(a.data), e.push(n.size * uh[n.type] / 4), n.buffer = 0;
    }
    for (r.data = lm(t, e), s = 0; s < this.buffers.length; s++)
      this.buffers[s] !== this.indexBuffer && this.buffers[s].destroy();
    return this.buffers = [r], this.indexBuffer && this.buffers.push(this.indexBuffer), this;
  }
  /** Get the size of the geometries, in vertices. */
  getSize() {
    for (const t in this.attributes) {
      const e = this.attributes[t];
      return this.buffers[e.buffer].data.length / (e.stride / 4 || e.size);
    }
    return 0;
  }
  /** Disposes WebGL resources that are connected to this geometry. */
  dispose() {
    this.disposeRunner.emit(this, !1);
  }
  /** Destroys the geometry. */
  destroy() {
    this.dispose(), this.buffers = null, this.indexBuffer = null, this.attributes = null;
  }
  /**
   * Returns a clone of the geometry.
   * @returns - A new clone of this geometry.
   */
  clone() {
    const t = new ke();
    for (let e = 0; e < this.buffers.length; e++)
      t.buffers[e] = new ut(this.buffers[e].data.slice(0));
    for (const e in this.attributes) {
      const r = this.attributes[e];
      t.attributes[e] = new ps(
        r.buffer,
        r.size,
        r.normalized,
        r.type,
        r.stride,
        r.start,
        r.instance
      );
    }
    return this.indexBuffer && (t.indexBuffer = t.buffers[this.buffers.indexOf(this.indexBuffer)], t.indexBuffer.type = he.ELEMENT_ARRAY_BUFFER), t;
  }
  /**
   * Merges an array of geometries into a new single one.
   *
   * Geometry attribute styles must match for this operation to work.
   * @param geometries - array of geometries to merge
   * @returns - Shiny new geometry!
   */
  static merge(t) {
    const e = new ke(), r = [], s = [], n = [];
    let a;
    for (let o = 0; o < t.length; o++) {
      a = t[o];
      for (let h = 0; h < a.buffers.length; h++)
        s[h] = s[h] || 0, s[h] += a.buffers[h].data.length, n[h] = 0;
    }
    for (let o = 0; o < a.buffers.length; o++)
      r[o] = new cm[Ol(a.buffers[o].data)](s[o]), e.buffers[o] = new ut(r[o]);
    for (let o = 0; o < t.length; o++) {
      a = t[o];
      for (let h = 0; h < a.buffers.length; h++)
        r[h].set(a.buffers[h].data, n[h]), n[h] += a.buffers[h].data.length;
    }
    if (e.attributes = a.attributes, a.indexBuffer) {
      e.indexBuffer = e.buffers[a.buffers.indexOf(a.indexBuffer)], e.indexBuffer.type = he.ELEMENT_ARRAY_BUFFER;
      let o = 0, h = 0, l = 0, u = 0;
      for (let c = 0; c < a.buffers.length; c++)
        if (a.buffers[c] !== a.indexBuffer) {
          u = c;
          break;
        }
      for (const c in a.attributes) {
        const d = a.attributes[c];
        (d.buffer | 0) === u && (h += d.size * uh[d.type] / 4);
      }
      for (let c = 0; c < t.length; c++) {
        const d = t[c].indexBuffer.data;
        for (let f = 0; f < d.length; f++)
          e.indexBuffer.data[f + l] += o;
        o += t[c].buffers[u].data.length / h, l += d.length;
      }
    }
    return e;
  }
}
class Ll extends ke {
  /**
   * @param {boolean} [_static=false] - Optimization flag, where `false`
   *        is updated every frame, `true` doesn't change frame-to-frame.
   */
  constructor(t = !1) {
    super(), this._buffer = new ut(null, t, !1), this._indexBuffer = new ut(null, t, !0), this.addAttribute("aVertexPosition", this._buffer, 2, !1, V.FLOAT).addAttribute("aTextureCoord", this._buffer, 2, !1, V.FLOAT).addAttribute("aColor", this._buffer, 4, !0, V.UNSIGNED_BYTE).addAttribute("aTextureId", this._buffer, 1, !0, V.FLOAT).addIndex(this._indexBuffer);
  }
}
const ms = Math.PI * 2, dm = 180 / Math.PI, fm = Math.PI / 180;
var At = /* @__PURE__ */ ((i) => (i[i.POLY = 0] = "POLY", i[i.RECT = 1] = "RECT", i[i.CIRC = 2] = "CIRC", i[i.ELIP = 3] = "ELIP", i[i.RREC = 4] = "RREC", i))(At || {});
class K {
  /**
   * Creates a new `Point`
   * @param {number} [x=0] - position of the point on the x axis
   * @param {number} [y=0] - position of the point on the y axis
   */
  constructor(t = 0, e = 0) {
    this.x = 0, this.y = 0, this.x = t, this.y = e;
  }
  /**
   * Creates a clone of this point
   * @returns A clone of this point
   */
  clone() {
    return new K(this.x, this.y);
  }
  /**
   * Copies `x` and `y` from the given point into this point
   * @param p - The point to copy from
   * @returns The point instance itself
   */
  copyFrom(t) {
    return this.set(t.x, t.y), this;
  }
  /**
   * Copies this point's x and y into the given point (`p`).
   * @param p - The point to copy to. Can be any of type that is or extends `IPointData`
   * @returns The point (`p`) with values updated
   */
  copyTo(t) {
    return t.set(this.x, this.y), t;
  }
  /**
   * Accepts another point (`p`) and returns `true` if the given point is equal to this point
   * @param p - The point to check
   * @returns Returns `true` if both `x` and `y` are equal
   */
  equals(t) {
    return t.x === this.x && t.y === this.y;
  }
  /**
   * Sets the point to a new `x` and `y` position.
   * If `y` is omitted, both `x` and `y` will be set to `x`.
   * @param {number} [x=0] - position of the point on the `x` axis
   * @param {number} [y=x] - position of the point on the `y` axis
   * @returns The point instance itself
   */
  set(t = 0, e = t) {
    return this.x = t, this.y = e, this;
  }
}
K.prototype.toString = function() {
  return `[@pixi/math:Point x=${this.x} y=${this.y}]`;
};
const Mi = [new K(), new K(), new K(), new K()];
class j {
  /**
   * @param x - The X coordinate of the upper-left corner of the rectangle
   * @param y - The Y coordinate of the upper-left corner of the rectangle
   * @param width - The overall width of the rectangle
   * @param height - The overall height of the rectangle
   */
  constructor(t = 0, e = 0, r = 0, s = 0) {
    this.x = Number(t), this.y = Number(e), this.width = Number(r), this.height = Number(s), this.type = At.RECT;
  }
  /** Returns the left edge of the rectangle. */
  get left() {
    return this.x;
  }
  /** Returns the right edge of the rectangle. */
  get right() {
    return this.x + this.width;
  }
  /** Returns the top edge of the rectangle. */
  get top() {
    return this.y;
  }
  /** Returns the bottom edge of the rectangle. */
  get bottom() {
    return this.y + this.height;
  }
  /** A constant empty rectangle. */
  static get EMPTY() {
    return new j(0, 0, 0, 0);
  }
  /**
   * Creates a clone of this Rectangle
   * @returns a copy of the rectangle
   */
  clone() {
    return new j(this.x, this.y, this.width, this.height);
  }
  /**
   * Copies another rectangle to this one.
   * @param rectangle - The rectangle to copy from.
   * @returns Returns itself.
   */
  copyFrom(t) {
    return this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height, this;
  }
  /**
   * Copies this rectangle to another one.
   * @param rectangle - The rectangle to copy to.
   * @returns Returns given parameter.
   */
  copyTo(t) {
    return t.x = this.x, t.y = this.y, t.width = this.width, t.height = this.height, t;
  }
  /**
   * Checks whether the x and y coordinates given are contained within this Rectangle
   * @param x - The X coordinate of the point to test
   * @param y - The Y coordinate of the point to test
   * @returns Whether the x/y coordinates are within this Rectangle
   */
  contains(t, e) {
    return this.width <= 0 || this.height <= 0 ? !1 : t >= this.x && t < this.x + this.width && e >= this.y && e < this.y + this.height;
  }
  /**
   * Determines whether the `other` Rectangle transformed by `transform` intersects with `this` Rectangle object.
   * Returns true only if the area of the intersection is >0, this means that Rectangles
   * sharing a side are not overlapping. Another side effect is that an arealess rectangle
   * (width or height equal to zero) can't intersect any other rectangle.
   * @param {Rectangle} other - The Rectangle to intersect with `this`.
   * @param {Matrix} transform - The transformation matrix of `other`.
   * @returns {boolean} A value of `true` if the transformed `other` Rectangle intersects with `this`; otherwise `false`.
   */
  intersects(t, e) {
    if (!e) {
      const x = this.x < t.x ? t.x : this.x;
      if ((this.right > t.right ? t.right : this.right) <= x)
        return !1;
      const T = this.y < t.y ? t.y : this.y;
      return (this.bottom > t.bottom ? t.bottom : this.bottom) > T;
    }
    const r = this.left, s = this.right, n = this.top, a = this.bottom;
    if (s <= r || a <= n)
      return !1;
    const o = Mi[0].set(t.left, t.top), h = Mi[1].set(t.left, t.bottom), l = Mi[2].set(t.right, t.top), u = Mi[3].set(t.right, t.bottom);
    if (l.x <= o.x || h.y <= o.y)
      return !1;
    const c = Math.sign(e.a * e.d - e.b * e.c);
    if (c === 0 || (e.apply(o, o), e.apply(h, h), e.apply(l, l), e.apply(u, u), Math.max(o.x, h.x, l.x, u.x) <= r || Math.min(o.x, h.x, l.x, u.x) >= s || Math.max(o.y, h.y, l.y, u.y) <= n || Math.min(o.y, h.y, l.y, u.y) >= a))
      return !1;
    const d = c * (h.y - o.y), f = c * (o.x - h.x), p = d * r + f * n, m = d * s + f * n, y = d * r + f * a, v = d * s + f * a;
    if (Math.max(p, m, y, v) <= d * o.x + f * o.y || Math.min(p, m, y, v) >= d * u.x + f * u.y)
      return !1;
    const b = c * (o.y - l.y), _ = c * (l.x - o.x), g = b * r + _ * n, w = b * s + _ * n, R = b * r + _ * a, A = b * s + _ * a;
    return !(Math.max(g, w, R, A) <= b * o.x + _ * o.y || Math.min(g, w, R, A) >= b * u.x + _ * u.y);
  }
  /**
   * Pads the rectangle making it grow in all directions.
   * If paddingY is omitted, both paddingX and paddingY will be set to paddingX.
   * @param paddingX - The horizontal padding amount.
   * @param paddingY - The vertical padding amount.
   * @returns Returns itself.
   */
  pad(t = 0, e = t) {
    return this.x -= t, this.y -= e, this.width += t * 2, this.height += e * 2, this;
  }
  /**
   * Fits this rectangle around the passed one.
   * @param rectangle - The rectangle to fit.
   * @returns Returns itself.
   */
  fit(t) {
    const e = Math.max(this.x, t.x), r = Math.min(this.x + this.width, t.x + t.width), s = Math.max(this.y, t.y), n = Math.min(this.y + this.height, t.y + t.height);
    return this.x = e, this.width = Math.max(r - e, 0), this.y = s, this.height = Math.max(n - s, 0), this;
  }
  /**
   * Enlarges rectangle that way its corners lie on grid
   * @param resolution - resolution
   * @param eps - precision
   * @returns Returns itself.
   */
  ceil(t = 1, e = 1e-3) {
    const r = Math.ceil((this.x + this.width - e) * t) / t, s = Math.ceil((this.y + this.height - e) * t) / t;
    return this.x = Math.floor((this.x + e) * t) / t, this.y = Math.floor((this.y + e) * t) / t, this.width = r - this.x, this.height = s - this.y, this;
  }
  /**
   * Enlarges this rectangle to include the passed rectangle.
   * @param rectangle - The rectangle to include.
   * @returns Returns itself.
   */
  enlarge(t) {
    const e = Math.min(this.x, t.x), r = Math.max(this.x + this.width, t.x + t.width), s = Math.min(this.y, t.y), n = Math.max(this.y + this.height, t.y + t.height);
    return this.x = e, this.width = r - e, this.y = s, this.height = n - s, this;
  }
}
j.prototype.toString = function() {
  return `[@pixi/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`;
};
class Ds {
  /**
   * @param x - The X coordinate of the center of this circle
   * @param y - The Y coordinate of the center of this circle
   * @param radius - The radius of the circle
   */
  constructor(t = 0, e = 0, r = 0) {
    this.x = t, this.y = e, this.radius = r, this.type = At.CIRC;
  }
  /**
   * Creates a clone of this Circle instance
   * @returns A copy of the Circle
   */
  clone() {
    return new Ds(this.x, this.y, this.radius);
  }
  /**
   * Checks whether the x and y coordinates given are contained within this circle
   * @param x - The X coordinate of the point to test
   * @param y - The Y coordinate of the point to test
   * @returns Whether the x/y coordinates are within this Circle
   */
  contains(t, e) {
    if (this.radius <= 0)
      return !1;
    const r = this.radius * this.radius;
    let s = this.x - t, n = this.y - e;
    return s *= s, n *= n, s + n <= r;
  }
  /**
   * Returns the framing rectangle of the circle as a Rectangle object
   * @returns The framing rectangle
   */
  getBounds() {
    return new j(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
  }
}
Ds.prototype.toString = function() {
  return `[@pixi/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`;
};
class Fs {
  /**
   * @param x - The X coordinate of the center of this ellipse
   * @param y - The Y coordinate of the center of this ellipse
   * @param halfWidth - The half width of this ellipse
   * @param halfHeight - The half height of this ellipse
   */
  constructor(t = 0, e = 0, r = 0, s = 0) {
    this.x = t, this.y = e, this.width = r, this.height = s, this.type = At.ELIP;
  }
  /**
   * Creates a clone of this Ellipse instance
   * @returns {PIXI.Ellipse} A copy of the ellipse
   */
  clone() {
    return new Fs(this.x, this.y, this.width, this.height);
  }
  /**
   * Checks whether the x and y coordinates given are contained within this ellipse
   * @param x - The X coordinate of the point to test
   * @param y - The Y coordinate of the point to test
   * @returns Whether the x/y coords are within this ellipse
   */
  contains(t, e) {
    if (this.width <= 0 || this.height <= 0)
      return !1;
    let r = (t - this.x) / this.width, s = (e - this.y) / this.height;
    return r *= r, s *= s, r + s <= 1;
  }
  /**
   * Returns the framing rectangle of the ellipse as a Rectangle object
   * @returns The framing rectangle
   */
  getBounds() {
    return new j(this.x - this.width, this.y - this.height, this.width, this.height);
  }
}
Fs.prototype.toString = function() {
  return `[@pixi/math:Ellipse x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`;
};
class ir {
  /**
   * @param {PIXI.IPointData[]|number[]} points - This can be an array of Points
   *  that form the polygon, a flat array of numbers that will be interpreted as [x,y, x,y, ...], or
   *  the arguments passed can be all the points of the polygon e.g.
   *  `new Polygon(new Point(), new Point(), ...)`, or the arguments passed can be flat
   *  x,y values e.g. `new Polygon(x,y, x,y, x,y, ...)` where `x` and `y` are Numbers.
   */
  constructor(...t) {
    let e = Array.isArray(t[0]) ? t[0] : t;
    if (typeof e[0] != "number") {
      const r = [];
      for (let s = 0, n = e.length; s < n; s++)
        r.push(e[s].x, e[s].y);
      e = r;
    }
    this.points = e, this.type = At.POLY, this.closeStroke = !0;
  }
  /**
   * Creates a clone of this polygon.
   * @returns - A copy of the polygon.
   */
  clone() {
    const t = this.points.slice(), e = new ir(t);
    return e.closeStroke = this.closeStroke, e;
  }
  /**
   * Checks whether the x and y coordinates passed to this function are contained within this polygon.
   * @param x - The X coordinate of the point to test.
   * @param y - The Y coordinate of the point to test.
   * @returns - Whether the x/y coordinates are within this polygon.
   */
  contains(t, e) {
    let r = !1;
    const s = this.points.length / 2;
    for (let n = 0, a = s - 1; n < s; a = n++) {
      const o = this.points[n * 2], h = this.points[n * 2 + 1], l = this.points[a * 2], u = this.points[a * 2 + 1];
      h > e != u > e && t < (l - o) * ((e - h) / (u - h)) + o && (r = !r);
    }
    return r;
  }
}
ir.prototype.toString = function() {
  return `[@pixi/math:PolygoncloseStroke=${this.closeStroke}points=${this.points.reduce((i, t) => `${i}, ${t}`, "")}]`;
};
class Os {
  /**
   * @param x - The X coordinate of the upper-left corner of the rounded rectangle
   * @param y - The Y coordinate of the upper-left corner of the rounded rectangle
   * @param width - The overall width of this rounded rectangle
   * @param height - The overall height of this rounded rectangle
   * @param radius - Controls the radius of the rounded corners
   */
  constructor(t = 0, e = 0, r = 0, s = 0, n = 20) {
    this.x = t, this.y = e, this.width = r, this.height = s, this.radius = n, this.type = At.RREC;
  }
  /**
   * Creates a clone of this Rounded Rectangle.
   * @returns - A copy of the rounded rectangle.
   */
  clone() {
    return new Os(this.x, this.y, this.width, this.height, this.radius);
  }
  /**
   * Checks whether the x and y coordinates given are contained within this Rounded Rectangle
   * @param x - The X coordinate of the point to test.
   * @param y - The Y coordinate of the point to test.
   * @returns - Whether the x/y coordinates are within this Rounded Rectangle.
   */
  contains(t, e) {
    if (this.width <= 0 || this.height <= 0)
      return !1;
    if (t >= this.x && t <= this.x + this.width && e >= this.y && e <= this.y + this.height) {
      const r = Math.max(0, Math.min(this.radius, Math.min(this.width, this.height) / 2));
      if (e >= this.y + r && e <= this.y + this.height - r || t >= this.x + r && t <= this.x + this.width - r)
        return !0;
      let s = t - (this.x + r), n = e - (this.y + r);
      const a = r * r;
      if (s * s + n * n <= a || (s = t - (this.x + this.width - r), s * s + n * n <= a) || (n = e - (this.y + this.height - r), s * s + n * n <= a) || (s = t - (this.x + r), s * s + n * n <= a))
        return !0;
    }
    return !1;
  }
}
Os.prototype.toString = function() {
  return `[@pixi/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`;
};
class rt {
  /**
   * @param a - x scale
   * @param b - y skew
   * @param c - x skew
   * @param d - y scale
   * @param tx - x translation
   * @param ty - y translation
   */
  constructor(t = 1, e = 0, r = 0, s = 1, n = 0, a = 0) {
    this.array = null, this.a = t, this.b = e, this.c = r, this.d = s, this.tx = n, this.ty = a;
  }
  /**
   * Creates a Matrix object based on the given array. The Element to Matrix mapping order is as follows:
   *
   * a = array[0]
   * b = array[1]
   * c = array[3]
   * d = array[4]
   * tx = array[2]
   * ty = array[5]
   * @param array - The array that the matrix will be populated from.
   */
  fromArray(t) {
    this.a = t[0], this.b = t[1], this.c = t[3], this.d = t[4], this.tx = t[2], this.ty = t[5];
  }
  /**
   * Sets the matrix properties.
   * @param a - Matrix component
   * @param b - Matrix component
   * @param c - Matrix component
   * @param d - Matrix component
   * @param tx - Matrix component
   * @param ty - Matrix component
   * @returns This matrix. Good for chaining method calls.
   */
  set(t, e, r, s, n, a) {
    return this.a = t, this.b = e, this.c = r, this.d = s, this.tx = n, this.ty = a, this;
  }
  /**
   * Creates an array from the current Matrix object.
   * @param transpose - Whether we need to transpose the matrix or not
   * @param [out=new Float32Array(9)] - If provided the array will be assigned to out
   * @returns The newly created array which contains the matrix
   */
  toArray(t, e) {
    this.array || (this.array = new Float32Array(9));
    const r = e || this.array;
    return t ? (r[0] = this.a, r[1] = this.b, r[2] = 0, r[3] = this.c, r[4] = this.d, r[5] = 0, r[6] = this.tx, r[7] = this.ty, r[8] = 1) : (r[0] = this.a, r[1] = this.c, r[2] = this.tx, r[3] = this.b, r[4] = this.d, r[5] = this.ty, r[6] = 0, r[7] = 0, r[8] = 1), r;
  }
  /**
   * Get a new position with the current transformation applied.
   * Can be used to go from a child's coordinate space to the world coordinate space. (e.g. rendering)
   * @param pos - The origin
   * @param {PIXI.Point} [newPos] - The point that the new position is assigned to (allowed to be same as input)
   * @returns {PIXI.Point} The new point, transformed through this matrix
   */
  apply(t, e) {
    e = e || new K();
    const r = t.x, s = t.y;
    return e.x = this.a * r + this.c * s + this.tx, e.y = this.b * r + this.d * s + this.ty, e;
  }
  /**
   * Get a new position with the inverse of the current transformation applied.
   * Can be used to go from the world coordinate space to a child's coordinate space. (e.g. input)
   * @param pos - The origin
   * @param {PIXI.Point} [newPos] - The point that the new position is assigned to (allowed to be same as input)
   * @returns {PIXI.Point} The new point, inverse-transformed through this matrix
   */
  applyInverse(t, e) {
    e = e || new K();
    const r = 1 / (this.a * this.d + this.c * -this.b), s = t.x, n = t.y;
    return e.x = this.d * r * s + -this.c * r * n + (this.ty * this.c - this.tx * this.d) * r, e.y = this.a * r * n + -this.b * r * s + (-this.ty * this.a + this.tx * this.b) * r, e;
  }
  /**
   * Translates the matrix on the x and y.
   * @param x - How much to translate x by
   * @param y - How much to translate y by
   * @returns This matrix. Good for chaining method calls.
   */
  translate(t, e) {
    return this.tx += t, this.ty += e, this;
  }
  /**
   * Applies a scale transformation to the matrix.
   * @param x - The amount to scale horizontally
   * @param y - The amount to scale vertically
   * @returns This matrix. Good for chaining method calls.
   */
  scale(t, e) {
    return this.a *= t, this.d *= e, this.c *= t, this.b *= e, this.tx *= t, this.ty *= e, this;
  }
  /**
   * Applies a rotation transformation to the matrix.
   * @param angle - The angle in radians.
   * @returns This matrix. Good for chaining method calls.
   */
  rotate(t) {
    const e = Math.cos(t), r = Math.sin(t), s = this.a, n = this.c, a = this.tx;
    return this.a = s * e - this.b * r, this.b = s * r + this.b * e, this.c = n * e - this.d * r, this.d = n * r + this.d * e, this.tx = a * e - this.ty * r, this.ty = a * r + this.ty * e, this;
  }
  /**
   * Appends the given Matrix to this Matrix.
   * @param matrix - The matrix to append.
   * @returns This matrix. Good for chaining method calls.
   */
  append(t) {
    const e = this.a, r = this.b, s = this.c, n = this.d;
    return this.a = t.a * e + t.b * s, this.b = t.a * r + t.b * n, this.c = t.c * e + t.d * s, this.d = t.c * r + t.d * n, this.tx = t.tx * e + t.ty * s + this.tx, this.ty = t.tx * r + t.ty * n + this.ty, this;
  }
  /**
   * Sets the matrix based on all the available properties
   * @param x - Position on the x axis
   * @param y - Position on the y axis
   * @param pivotX - Pivot on the x axis
   * @param pivotY - Pivot on the y axis
   * @param scaleX - Scale on the x axis
   * @param scaleY - Scale on the y axis
   * @param rotation - Rotation in radians
   * @param skewX - Skew on the x axis
   * @param skewY - Skew on the y axis
   * @returns This matrix. Good for chaining method calls.
   */
  setTransform(t, e, r, s, n, a, o, h, l) {
    return this.a = Math.cos(o + l) * n, this.b = Math.sin(o + l) * n, this.c = -Math.sin(o - h) * a, this.d = Math.cos(o - h) * a, this.tx = t - (r * this.a + s * this.c), this.ty = e - (r * this.b + s * this.d), this;
  }
  /**
   * Prepends the given Matrix to this Matrix.
   * @param matrix - The matrix to prepend
   * @returns This matrix. Good for chaining method calls.
   */
  prepend(t) {
    const e = this.tx;
    if (t.a !== 1 || t.b !== 0 || t.c !== 0 || t.d !== 1) {
      const r = this.a, s = this.c;
      this.a = r * t.a + this.b * t.c, this.b = r * t.b + this.b * t.d, this.c = s * t.a + this.d * t.c, this.d = s * t.b + this.d * t.d;
    }
    return this.tx = e * t.a + this.ty * t.c + t.tx, this.ty = e * t.b + this.ty * t.d + t.ty, this;
  }
  /**
   * Decomposes the matrix (x, y, scaleX, scaleY, and rotation) and sets the properties on to a transform.
   * @param transform - The transform to apply the properties to.
   * @returns The transform with the newly applied properties
   */
  decompose(t) {
    const e = this.a, r = this.b, s = this.c, n = this.d, a = t.pivot, o = -Math.atan2(-s, n), h = Math.atan2(r, e), l = Math.abs(o + h);
    return l < 1e-5 || Math.abs(ms - l) < 1e-5 ? (t.rotation = h, t.skew.x = t.skew.y = 0) : (t.rotation = 0, t.skew.x = o, t.skew.y = h), t.scale.x = Math.sqrt(e * e + r * r), t.scale.y = Math.sqrt(s * s + n * n), t.position.x = this.tx + (a.x * e + a.y * s), t.position.y = this.ty + (a.x * r + a.y * n), t;
  }
  /**
   * Inverts this matrix
   * @returns This matrix. Good for chaining method calls.
   */
  invert() {
    const t = this.a, e = this.b, r = this.c, s = this.d, n = this.tx, a = t * s - e * r;
    return this.a = s / a, this.b = -e / a, this.c = -r / a, this.d = t / a, this.tx = (r * this.ty - s * n) / a, this.ty = -(t * this.ty - e * n) / a, this;
  }
  /**
   * Resets this Matrix to an identity (default) matrix.
   * @returns This matrix. Good for chaining method calls.
   */
  identity() {
    return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this;
  }
  /**
   * Creates a new Matrix object with the same values as this one.
   * @returns A copy of this matrix. Good for chaining method calls.
   */
  clone() {
    const t = new rt();
    return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t;
  }
  /**
   * Changes the values of the given matrix to be the same as the ones in this matrix
   * @param matrix - The matrix to copy to.
   * @returns The matrix given in parameter with its values updated.
   */
  copyTo(t) {
    return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t;
  }
  /**
   * Changes the values of the matrix to be the same as the ones in given matrix
   * @param {PIXI.Matrix} matrix - The matrix to copy from.
   * @returns {PIXI.Matrix} this
   */
  copyFrom(t) {
    return this.a = t.a, this.b = t.b, this.c = t.c, this.d = t.d, this.tx = t.tx, this.ty = t.ty, this;
  }
  /**
   * A default (identity) matrix
   * @readonly
   */
  static get IDENTITY() {
    return new rt();
  }
  /**
   * A temp matrix
   * @readonly
   */
  static get TEMP_MATRIX() {
    return new rt();
  }
}
rt.prototype.toString = function() {
  return `[@pixi/math:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`;
};
const je = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1], Ye = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1], qe = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1], Ke = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1], ia = [], Ul = [], Bi = Math.sign;
function pm() {
  for (let i = 0; i < 16; i++) {
    const t = [];
    ia.push(t);
    for (let e = 0; e < 16; e++) {
      const r = Bi(je[i] * je[e] + qe[i] * Ye[e]), s = Bi(Ye[i] * je[e] + Ke[i] * Ye[e]), n = Bi(je[i] * qe[e] + qe[i] * Ke[e]), a = Bi(Ye[i] * qe[e] + Ke[i] * Ke[e]);
      for (let o = 0; o < 16; o++)
        if (je[o] === r && Ye[o] === s && qe[o] === n && Ke[o] === a) {
          t.push(o);
          break;
        }
    }
  }
  for (let i = 0; i < 16; i++) {
    const t = new rt();
    t.set(je[i], Ye[i], qe[i], Ke[i], 0, 0), Ul.push(t);
  }
}
pm();
const nt = {
  /**
   * | Rotation | Direction |
   * |----------|-----------|
   * | 0°       | East      |
   * @readonly
   */
  E: 0,
  /**
   * | Rotation | Direction |
   * |----------|-----------|
   * | 45°↻     | Southeast |
   * @readonly
   */
  SE: 1,
  /**
   * | Rotation | Direction |
   * |----------|-----------|
   * | 90°↻     | South     |
   * @readonly
   */
  S: 2,
  /**
   * | Rotation | Direction |
   * |----------|-----------|
   * | 135°↻    | Southwest |
   * @readonly
   */
  SW: 3,
  /**
   * | Rotation | Direction |
   * |----------|-----------|
   * | 180°     | West      |
   * @readonly
   */
  W: 4,
  /**
   * | Rotation    | Direction    |
   * |-------------|--------------|
   * | -135°/225°↻ | Northwest    |
   * @readonly
   */
  NW: 5,
  /**
   * | Rotation    | Direction    |
   * |-------------|--------------|
   * | -90°/270°↻  | North        |
   * @readonly
   */
  N: 6,
  /**
   * | Rotation    | Direction    |
   * |-------------|--------------|
   * | -45°/315°↻  | Northeast    |
   * @readonly
   */
  NE: 7,
  /**
   * Reflection about Y-axis.
   * @readonly
   */
  MIRROR_VERTICAL: 8,
  /**
   * Reflection about the main diagonal.
   * @readonly
   */
  MAIN_DIAGONAL: 10,
  /**
   * Reflection about X-axis.
   * @readonly
   */
  MIRROR_HORIZONTAL: 12,
  /**
   * Reflection about reverse diagonal.
   * @readonly
   */
  REVERSE_DIAGONAL: 14,
  /**
   * @param {PIXI.GD8Symmetry} ind - sprite rotation angle.
   * @returns {PIXI.GD8Symmetry} The X-component of the U-axis
   *    after rotating the axes.
   */
  uX: (i) => je[i],
  /**
   * @param {PIXI.GD8Symmetry} ind - sprite rotation angle.
   * @returns {PIXI.GD8Symmetry} The Y-component of the U-axis
   *    after rotating the axes.
   */
  uY: (i) => Ye[i],
  /**
   * @param {PIXI.GD8Symmetry} ind - sprite rotation angle.
   * @returns {PIXI.GD8Symmetry} The X-component of the V-axis
   *    after rotating the axes.
   */
  vX: (i) => qe[i],
  /**
   * @param {PIXI.GD8Symmetry} ind - sprite rotation angle.
   * @returns {PIXI.GD8Symmetry} The Y-component of the V-axis
   *    after rotating the axes.
   */
  vY: (i) => Ke[i],
  /**
   * @param {PIXI.GD8Symmetry} rotation - symmetry whose opposite
   *   is needed. Only rotations have opposite symmetries while
   *   reflections don't.
   * @returns {PIXI.GD8Symmetry} The opposite symmetry of `rotation`
   */
  inv: (i) => i & 8 ? i & 15 : -i & 7,
  /**
   * Composes the two D8 operations.
   *
   * Taking `^` as reflection:
   *
   * |       | E=0 | S=2 | W=4 | N=6 | E^=8 | S^=10 | W^=12 | N^=14 |
   * |-------|-----|-----|-----|-----|------|-------|-------|-------|
   * | E=0   | E   | S   | W   | N   | E^   | S^    | W^    | N^    |
   * | S=2   | S   | W   | N   | E   | S^   | W^    | N^    | E^    |
   * | W=4   | W   | N   | E   | S   | W^   | N^    | E^    | S^    |
   * | N=6   | N   | E   | S   | W   | N^   | E^    | S^    | W^    |
   * | E^=8  | E^  | N^  | W^  | S^  | E    | N     | W     | S     |
   * | S^=10 | S^  | E^  | N^  | W^  | S    | E     | N     | W     |
   * | W^=12 | W^  | S^  | E^  | N^  | W    | S     | E     | N     |
   * | N^=14 | N^  | W^  | S^  | E^  | N    | W     | S     | E     |
   *
   * [This is a Cayley table]{@link https://en.wikipedia.org/wiki/Cayley_table}
   * @param {PIXI.GD8Symmetry} rotationSecond - Second operation, which
   *   is the row in the above cayley table.
   * @param {PIXI.GD8Symmetry} rotationFirst - First operation, which
   *   is the column in the above cayley table.
   * @returns {PIXI.GD8Symmetry} Composed operation
   */
  add: (i, t) => ia[i][t],
  /**
   * Reverse of `add`.
   * @param {PIXI.GD8Symmetry} rotationSecond - Second operation
   * @param {PIXI.GD8Symmetry} rotationFirst - First operation
   * @returns {PIXI.GD8Symmetry} Result
   */
  sub: (i, t) => ia[i][nt.inv(t)],
  /**
   * Adds 180 degrees to rotation, which is a commutative
   * operation.
   * @param {number} rotation - The number to rotate.
   * @returns {number} Rotated number
   */
  rotate180: (i) => i ^ 4,
  /**
   * Checks if the rotation angle is vertical, i.e. south
   * or north. It doesn't work for reflections.
   * @param {PIXI.GD8Symmetry} rotation - The number to check.
   * @returns {boolean} Whether or not the direction is vertical
   */
  isVertical: (i) => (i & 3) === 2,
  // rotation % 4 === 2
  /**
   * Approximates the vector `V(dx,dy)` into one of the
   * eight directions provided by `groupD8`.
   * @param {number} dx - X-component of the vector
   * @param {number} dy - Y-component of the vector
   * @returns {PIXI.GD8Symmetry} Approximation of the vector into
   *  one of the eight symmetries.
   */
  byDirection: (i, t) => Math.abs(i) * 2 <= Math.abs(t) ? t >= 0 ? nt.S : nt.N : Math.abs(t) * 2 <= Math.abs(i) ? i > 0 ? nt.E : nt.W : t > 0 ? i > 0 ? nt.SE : nt.SW : i > 0 ? nt.NE : nt.NW,
  /**
   * Helps sprite to compensate texture packer rotation.
   * @param {PIXI.Matrix} matrix - sprite world matrix
   * @param {PIXI.GD8Symmetry} rotation - The rotation factor to use.
   * @param {number} tx - sprite anchoring
   * @param {number} ty - sprite anchoring
   */
  matrixAppendRotationInv: (i, t, e = 0, r = 0) => {
    const s = Ul[nt.inv(t)];
    s.tx = e, s.ty = r, i.append(s);
  }
};
class ve {
  /**
   * Creates a new `ObservablePoint`
   * @param cb - callback function triggered when `x` and/or `y` are changed
   * @param scope - owner of callback
   * @param {number} [x=0] - position of the point on the x axis
   * @param {number} [y=0] - position of the point on the y axis
   */
  constructor(t, e, r = 0, s = 0) {
    this._x = r, this._y = s, this.cb = t, this.scope = e;
  }
  /**
   * Creates a clone of this point.
   * The callback and scope params can be overridden otherwise they will default
   * to the clone object's values.
   * @override
   * @param cb - The callback function triggered when `x` and/or `y` are changed
   * @param scope - The owner of the callback
   * @returns a copy of this observable point
   */
  clone(t = this.cb, e = this.scope) {
    return new ve(t, e, this._x, this._y);
  }
  /**
   * Sets the point to a new `x` and `y` position.
   * If `y` is omitted, both `x` and `y` will be set to `x`.
   * @param {number} [x=0] - position of the point on the x axis
   * @param {number} [y=x] - position of the point on the y axis
   * @returns The observable point instance itself
   */
  set(t = 0, e = t) {
    return (this._x !== t || this._y !== e) && (this._x = t, this._y = e, this.cb.call(this.scope)), this;
  }
  /**
   * Copies x and y from the given point (`p`)
   * @param p - The point to copy from. Can be any of type that is or extends `IPointData`
   * @returns The observable point instance itself
   */
  copyFrom(t) {
    return (this._x !== t.x || this._y !== t.y) && (this._x = t.x, this._y = t.y, this.cb.call(this.scope)), this;
  }
  /**
   * Copies this point's x and y into that of the given point (`p`)
   * @param p - The point to copy to. Can be any of type that is or extends `IPointData`
   * @returns The point (`p`) with values updated
   */
  copyTo(t) {
    return t.set(this._x, this._y), t;
  }
  /**
   * Accepts another point (`p`) and returns `true` if the given point is equal to this point
   * @param p - The point to check
   * @returns Returns `true` if both `x` and `y` are equal
   */
  equals(t) {
    return t.x === this._x && t.y === this._y;
  }
  /** Position of the observable point on the x axis. */
  get x() {
    return this._x;
  }
  set x(t) {
    this._x !== t && (this._x = t, this.cb.call(this.scope));
  }
  /** Position of the observable point on the y axis. */
  get y() {
    return this._y;
  }
  set y(t) {
    this._y !== t && (this._y = t, this.cb.call(this.scope));
  }
}
ve.prototype.toString = function() {
  return `[@pixi/math:ObservablePoint x=${this.x} y=${this.y} scope=${this.scope}]`;
};
const sa = class {
  constructor() {
    this.worldTransform = new rt(), this.localTransform = new rt(), this.position = new ve(this.onChange, this, 0, 0), this.scale = new ve(this.onChange, this, 1, 1), this.pivot = new ve(this.onChange, this, 0, 0), this.skew = new ve(this.updateSkew, this, 0, 0), this._rotation = 0, this._cx = 1, this._sx = 0, this._cy = 0, this._sy = 1, this._localID = 0, this._currentLocalID = 0, this._worldID = 0, this._parentID = 0;
  }
  /** Called when a value changes. */
  onChange() {
    this._localID++;
  }
  /** Called when the skew or the rotation changes. */
  updateSkew() {
    this._cx = Math.cos(this._rotation + this.skew.y), this._sx = Math.sin(this._rotation + this.skew.y), this._cy = -Math.sin(this._rotation - this.skew.x), this._sy = Math.cos(this._rotation - this.skew.x), this._localID++;
  }
  /** Updates the local transformation matrix. */
  updateLocalTransform() {
    const i = this.localTransform;
    this._localID !== this._currentLocalID && (i.a = this._cx * this.scale.x, i.b = this._sx * this.scale.x, i.c = this._cy * this.scale.y, i.d = this._sy * this.scale.y, i.tx = this.position.x - (this.pivot.x * i.a + this.pivot.y * i.c), i.ty = this.position.y - (this.pivot.x * i.b + this.pivot.y * i.d), this._currentLocalID = this._localID, this._parentID = -1);
  }
  /**
   * Updates the local and the world transformation matrices.
   * @param parentTransform - The parent transform
   */
  updateTransform(i) {
    const t = this.localTransform;
    if (this._localID !== this._currentLocalID && (t.a = this._cx * this.scale.x, t.b = this._sx * this.scale.x, t.c = this._cy * this.scale.y, t.d = this._sy * this.scale.y, t.tx = this.position.x - (this.pivot.x * t.a + this.pivot.y * t.c), t.ty = this.position.y - (this.pivot.x * t.b + this.pivot.y * t.d), this._currentLocalID = this._localID, this._parentID = -1), this._parentID !== i._worldID) {
      const e = i.worldTransform, r = this.worldTransform;
      r.a = t.a * e.a + t.b * e.c, r.b = t.a * e.b + t.b * e.d, r.c = t.c * e.a + t.d * e.c, r.d = t.c * e.b + t.d * e.d, r.tx = t.tx * e.a + t.ty * e.c + e.tx, r.ty = t.tx * e.b + t.ty * e.d + e.ty, this._parentID = i._worldID, this._worldID++;
    }
  }
  /**
   * Decomposes a matrix and sets the transforms properties based on it.
   * @param matrix - The matrix to decompose
   */
  setFromMatrix(i) {
    i.decompose(this), this._localID++;
  }
  /** The rotation of the object in radians. */
  get rotation() {
    return this._rotation;
  }
  set rotation(i) {
    this._rotation !== i && (this._rotation = i, this.updateSkew());
  }
};
sa.IDENTITY = new sa();
let Ns = sa;
Ns.prototype.toString = function() {
  return `[@pixi/math:Transform position=(${this.position.x}, ${this.position.y}) rotation=${this.rotation} scale=(${this.scale.x}, ${this.scale.y}) skew=(${this.skew.x}, ${this.skew.y}) ]`;
};
var mm = `varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor *= texture2D(uSampler, vTextureCoord);
}`, gm = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void){
   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
   vTextureCoord = aTextureCoord;
}
`;
function ch(i, t, e) {
  const r = i.createShader(t);
  return i.shaderSource(r, e), i.compileShader(r), r;
}
function yn(i) {
  const t = new Array(i);
  for (let e = 0; e < t.length; e++)
    t[e] = !1;
  return t;
}
function kl(i, t) {
  switch (i) {
    case "float":
      return 0;
    case "vec2":
      return new Float32Array(2 * t);
    case "vec3":
      return new Float32Array(3 * t);
    case "vec4":
      return new Float32Array(4 * t);
    case "int":
    case "uint":
    case "sampler2D":
    case "sampler2DArray":
      return 0;
    case "ivec2":
      return new Int32Array(2 * t);
    case "ivec3":
      return new Int32Array(3 * t);
    case "ivec4":
      return new Int32Array(4 * t);
    case "uvec2":
      return new Uint32Array(2 * t);
    case "uvec3":
      return new Uint32Array(3 * t);
    case "uvec4":
      return new Uint32Array(4 * t);
    case "bool":
      return !1;
    case "bvec2":
      return yn(2 * t);
    case "bvec3":
      return yn(3 * t);
    case "bvec4":
      return yn(4 * t);
    case "mat2":
      return new Float32Array([
        1,
        0,
        0,
        1
      ]);
    case "mat3":
      return new Float32Array([
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1
      ]);
    case "mat4":
      return new Float32Array([
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      ]);
  }
  return null;
}
const Rr = [
  // a float cache layer
  {
    test: (i) => i.type === "float" && i.size === 1 && !i.isArray,
    code: (i) => `
            if(uv["${i}"] !== ud["${i}"].value)
            {
                ud["${i}"].value = uv["${i}"]
                gl.uniform1f(ud["${i}"].location, uv["${i}"])
            }
            `
  },
  // handling samplers
  {
    test: (i, t) => (
      // eslint-disable-next-line max-len,no-eq-null,eqeqeq
      (i.type === "sampler2D" || i.type === "samplerCube" || i.type === "sampler2DArray") && i.size === 1 && !i.isArray && (t == null || t.castToBaseTexture !== void 0)
    ),
    code: (i) => `t = syncData.textureCount++;

            renderer.texture.bind(uv["${i}"], t);

            if(ud["${i}"].value !== t)
            {
                ud["${i}"].value = t;
                gl.uniform1i(ud["${i}"].location, t);
; // eslint-disable-line max-len
            }`
  },
  // uploading pixi matrix object to mat3
  {
    test: (i, t) => i.type === "mat3" && i.size === 1 && !i.isArray && t.a !== void 0,
    code: (i) => (
      // TODO and some smart caching dirty ids here!
      `
            gl.uniformMatrix3fv(ud["${i}"].location, false, uv["${i}"].toArray(true));
            `
    ),
    codeUbo: (i) => `
                var ${i}_matrix = uv.${i}.toArray(true);

                data[offset] = ${i}_matrix[0];
                data[offset+1] = ${i}_matrix[1];
                data[offset+2] = ${i}_matrix[2];
        
                data[offset + 4] = ${i}_matrix[3];
                data[offset + 5] = ${i}_matrix[4];
                data[offset + 6] = ${i}_matrix[5];
        
                data[offset + 8] = ${i}_matrix[6];
                data[offset + 9] = ${i}_matrix[7];
                data[offset + 10] = ${i}_matrix[8];
            `
  },
  // uploading a pixi point as a vec2 with caching layer
  {
    test: (i, t) => i.type === "vec2" && i.size === 1 && !i.isArray && t.x !== void 0,
    code: (i) => `
                cv = ud["${i}"].value;
                v = uv["${i}"];

                if(cv[0] !== v.x || cv[1] !== v.y)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    gl.uniform2f(ud["${i}"].location, v.x, v.y);
                }`,
    codeUbo: (i) => `
                v = uv.${i};

                data[offset] = v.x;
                data[offset+1] = v.y;
            `
  },
  // caching layer for a vec2
  {
    test: (i) => i.type === "vec2" && i.size === 1 && !i.isArray,
    code: (i) => `
                cv = ud["${i}"].value;
                v = uv["${i}"];

                if(cv[0] !== v[0] || cv[1] !== v[1])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    gl.uniform2f(ud["${i}"].location, v[0], v[1]);
                }
            `
  },
  // upload a pixi rectangle as a vec4 with caching layer
  {
    test: (i, t) => i.type === "vec4" && i.size === 1 && !i.isArray && t.width !== void 0,
    code: (i) => `
                cv = ud["${i}"].value;
                v = uv["${i}"];

                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    cv[2] = v.width;
                    cv[3] = v.height;
                    gl.uniform4f(ud["${i}"].location, v.x, v.y, v.width, v.height)
                }`,
    codeUbo: (i) => `
                    v = uv.${i};

                    data[offset] = v.x;
                    data[offset+1] = v.y;
                    data[offset+2] = v.width;
                    data[offset+3] = v.height;
                `
  },
  // upload a pixi color as vec4 with caching layer
  {
    test: (i, t) => i.type === "vec4" && i.size === 1 && !i.isArray && t.red !== void 0,
    code: (i) => `
                cv = ud["${i}"].value;
                v = uv["${i}"];

                if(cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.alpha)
                {
                    cv[0] = v.red;
                    cv[1] = v.green;
                    cv[2] = v.blue;
                    cv[3] = v.alpha;
                    gl.uniform4f(ud["${i}"].location, v.red, v.green, v.blue, v.alpha)
                }`,
    codeUbo: (i) => `
                    v = uv.${i};

                    data[offset] = v.red;
                    data[offset+1] = v.green;
                    data[offset+2] = v.blue;
                    data[offset+3] = v.alpha;
                `
  },
  // upload a pixi color as a vec3 with caching layer
  {
    test: (i, t) => i.type === "vec3" && i.size === 1 && !i.isArray && t.red !== void 0,
    code: (i) => `
                cv = ud["${i}"].value;
                v = uv["${i}"];

                if(cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.a)
                {
                    cv[0] = v.red;
                    cv[1] = v.green;
                    cv[2] = v.blue;
    
                    gl.uniform3f(ud["${i}"].location, v.red, v.green, v.blue)
                }`,
    codeUbo: (i) => `
                    v = uv.${i};

                    data[offset] = v.red;
                    data[offset+1] = v.green;
                    data[offset+2] = v.blue;
                `
  },
  // a caching layer for vec4 uploading
  {
    test: (i) => i.type === "vec4" && i.size === 1 && !i.isArray,
    code: (i) => `
                cv = ud["${i}"].value;
                v = uv["${i}"];

                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    cv[2] = v[2];
                    cv[3] = v[3];

                    gl.uniform4f(ud["${i}"].location, v[0], v[1], v[2], v[3])
                }`
  }
], ym = {
  float: `
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1f(location, v);
    }`,
  vec2: `
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2f(location, v[0], v[1])
    }`,
  vec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3f(location, v[0], v[1], v[2])
    }`,
  vec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4f(location, v[0], v[1], v[2], v[3]);
    }`,
  int: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,
  ivec2: `
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,
  ivec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,
  ivec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,
  uint: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1ui(location, v);
    }`,
  uvec2: `
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2ui(location, v[0], v[1]);
    }`,
  uvec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3ui(location, v[0], v[1], v[2]);
    }`,
  uvec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4ui(location, v[0], v[1], v[2], v[3]);
    }`,
  bool: `
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1i(location, v);
    }`,
  bvec2: `
    if (cv[0] != v[0] || cv[1] != v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,
  bvec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,
  bvec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,
  mat2: "gl.uniformMatrix2fv(location, false, v)",
  mat3: "gl.uniformMatrix3fv(location, false, v)",
  mat4: "gl.uniformMatrix4fv(location, false, v)",
  sampler2D: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,
  samplerCube: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,
  sampler2DArray: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`
}, _m = {
  float: "gl.uniform1fv(location, v)",
  vec2: "gl.uniform2fv(location, v)",
  vec3: "gl.uniform3fv(location, v)",
  vec4: "gl.uniform4fv(location, v)",
  mat4: "gl.uniformMatrix4fv(location, false, v)",
  mat3: "gl.uniformMatrix3fv(location, false, v)",
  mat2: "gl.uniformMatrix2fv(location, false, v)",
  int: "gl.uniform1iv(location, v)",
  ivec2: "gl.uniform2iv(location, v)",
  ivec3: "gl.uniform3iv(location, v)",
  ivec4: "gl.uniform4iv(location, v)",
  uint: "gl.uniform1uiv(location, v)",
  uvec2: "gl.uniform2uiv(location, v)",
  uvec3: "gl.uniform3uiv(location, v)",
  uvec4: "gl.uniform4uiv(location, v)",
  bool: "gl.uniform1iv(location, v)",
  bvec2: "gl.uniform2iv(location, v)",
  bvec3: "gl.uniform3iv(location, v)",
  bvec4: "gl.uniform4iv(location, v)",
  sampler2D: "gl.uniform1iv(location, v)",
  samplerCube: "gl.uniform1iv(location, v)",
  sampler2DArray: "gl.uniform1iv(location, v)"
};
function vm(i, t) {
  var r;
  const e = [`
        var v = null;
        var cv = null;
        var cu = null;
        var t = 0;
        var gl = renderer.gl;
    `];
  for (const s in i.uniforms) {
    const n = t[s];
    if (!n) {
      ((r = i.uniforms[s]) == null ? void 0 : r.group) === !0 && (i.uniforms[s].ubo ? e.push(`
                        renderer.shader.syncUniformBufferGroup(uv.${s}, '${s}');
                    `) : e.push(`
                        renderer.shader.syncUniformGroup(uv.${s}, syncData);
                    `));
      continue;
    }
    const a = i.uniforms[s];
    let o = !1;
    for (let h = 0; h < Rr.length; h++)
      if (Rr[h].test(n, a)) {
        e.push(Rr[h].code(s, a)), o = !0;
        break;
      }
    if (!o) {
      const h = (n.size === 1 && !n.isArray ? ym : _m)[n.type].replace("location", `ud["${s}"].location`);
      e.push(`
            cu = ud["${s}"];
            cv = cu.value;
            v = uv["${s}"];
            ${h};`);
    }
  }
  return new Function("ud", "uv", "renderer", "syncData", e.join(`
`));
}
const Gl = {};
let fr = Gl;
function xm() {
  if (fr === Gl || fr != null && fr.isContextLost()) {
    const i = L.ADAPTER.createCanvas();
    let t;
    L.PREFER_ENV >= hr.WEBGL2 && (t = i.getContext("webgl2", {})), t || (t = i.getContext("webgl", {}) || i.getContext("experimental-webgl", {}), t ? t.getExtension("WEBGL_draw_buffers") : t = null), fr = t;
  }
  return fr;
}
let Di;
function bm() {
  if (!Di) {
    Di = Ut.MEDIUM;
    const i = xm();
    if (i && i.getShaderPrecisionFormat) {
      const t = i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT);
      t && (Di = t.precision ? Ut.HIGH : Ut.MEDIUM);
    }
  }
  return Di;
}
function dh(i, t) {
  const e = i.getShaderSource(t).split(`
`).map((l, u) => `${u}: ${l}`), r = i.getShaderInfoLog(t), s = r.split(`
`), n = {}, a = s.map((l) => parseFloat(l.replace(/^ERROR\: 0\:([\d]+)\:.*$/, "$1"))).filter((l) => l && !n[l] ? (n[l] = !0, !0) : !1), o = [""];
  a.forEach((l) => {
    e[l - 1] = `%c${e[l - 1]}%c`, o.push("background: #FF0000; color:#FFFFFF; font-size: 10px", "font-size: 10px");
  });
  const h = e.join(`
`);
  o[0] = h, console.error(r), console.groupCollapsed("click to view full shader code"), console.warn(...o), console.groupEnd();
}
function Tm(i, t, e, r) {
  i.getProgramParameter(t, i.LINK_STATUS) || (i.getShaderParameter(e, i.COMPILE_STATUS) || dh(i, e), i.getShaderParameter(r, i.COMPILE_STATUS) || dh(i, r), console.error("PixiJS Error: Could not initialize shader."), i.getProgramInfoLog(t) !== "" && console.warn("PixiJS Warning: gl.getProgramInfoLog()", i.getProgramInfoLog(t)));
}
const Em = {
  float: 1,
  vec2: 2,
  vec3: 3,
  vec4: 4,
  int: 1,
  ivec2: 2,
  ivec3: 3,
  ivec4: 4,
  uint: 1,
  uvec2: 2,
  uvec3: 3,
  uvec4: 4,
  bool: 1,
  bvec2: 2,
  bvec3: 3,
  bvec4: 4,
  mat2: 4,
  mat3: 9,
  mat4: 16,
  sampler2D: 1
};
function Hl(i) {
  return Em[i];
}
let Fi = null;
const fh = {
  FLOAT: "float",
  FLOAT_VEC2: "vec2",
  FLOAT_VEC3: "vec3",
  FLOAT_VEC4: "vec4",
  INT: "int",
  INT_VEC2: "ivec2",
  INT_VEC3: "ivec3",
  INT_VEC4: "ivec4",
  UNSIGNED_INT: "uint",
  UNSIGNED_INT_VEC2: "uvec2",
  UNSIGNED_INT_VEC3: "uvec3",
  UNSIGNED_INT_VEC4: "uvec4",
  BOOL: "bool",
  BOOL_VEC2: "bvec2",
  BOOL_VEC3: "bvec3",
  BOOL_VEC4: "bvec4",
  FLOAT_MAT2: "mat2",
  FLOAT_MAT3: "mat3",
  FLOAT_MAT4: "mat4",
  SAMPLER_2D: "sampler2D",
  INT_SAMPLER_2D: "sampler2D",
  UNSIGNED_INT_SAMPLER_2D: "sampler2D",
  SAMPLER_CUBE: "samplerCube",
  INT_SAMPLER_CUBE: "samplerCube",
  UNSIGNED_INT_SAMPLER_CUBE: "samplerCube",
  SAMPLER_2D_ARRAY: "sampler2DArray",
  INT_SAMPLER_2D_ARRAY: "sampler2DArray",
  UNSIGNED_INT_SAMPLER_2D_ARRAY: "sampler2DArray"
};
function $l(i, t) {
  if (!Fi) {
    const e = Object.keys(fh);
    Fi = {};
    for (let r = 0; r < e.length; ++r) {
      const s = e[r];
      Fi[i[s]] = fh[s];
    }
  }
  return Fi[t];
}
function ph(i, t, e) {
  if (i.substring(0, 9) !== "precision") {
    let r = t;
    return t === Ut.HIGH && e !== Ut.HIGH && (r = Ut.MEDIUM), `precision ${r} float;
${i}`;
  } else if (e !== Ut.HIGH && i.substring(0, 15) === "precision highp")
    return i.replace("precision highp", "precision mediump");
  return i;
}
let Yr;
function wm() {
  if (typeof Yr == "boolean")
    return Yr;
  try {
    Yr = new Function("param1", "param2", "param3", "return param1[param2] === param3;")({ a: "b" }, "a", "b") === !0;
  } catch {
    Yr = !1;
  }
  return Yr;
}
let Am = 0;
const Oi = {}, na = class _r {
  /**
   * @param vertexSrc - The source of the vertex shader.
   * @param fragmentSrc - The source of the fragment shader.
   * @param name - Name for shader
   * @param extra - Extra data for shader
   */
  constructor(t, e, r = "pixi-shader", s = {}) {
    this.extra = {}, this.id = Am++, this.vertexSrc = t || _r.defaultVertexSrc, this.fragmentSrc = e || _r.defaultFragmentSrc, this.vertexSrc = this.vertexSrc.trim(), this.fragmentSrc = this.fragmentSrc.trim(), this.extra = s, this.vertexSrc.substring(0, 8) !== "#version" && (r = r.replace(/\s+/g, "-"), Oi[r] ? (Oi[r]++, r += `-${Oi[r]}`) : Oi[r] = 1, this.vertexSrc = `#define SHADER_NAME ${r}
${this.vertexSrc}`, this.fragmentSrc = `#define SHADER_NAME ${r}
${this.fragmentSrc}`, this.vertexSrc = ph(
      this.vertexSrc,
      _r.defaultVertexPrecision,
      Ut.HIGH
    ), this.fragmentSrc = ph(
      this.fragmentSrc,
      _r.defaultFragmentPrecision,
      bm()
    )), this.glPrograms = {}, this.syncUniforms = null;
  }
  /**
   * The default vertex shader source.
   * @readonly
   */
  static get defaultVertexSrc() {
    return gm;
  }
  /**
   * The default fragment shader source.
   * @readonly
   */
  static get defaultFragmentSrc() {
    return mm;
  }
  /**
   * A short hand function to create a program based of a vertex and fragment shader.
   *
   * This method will also check to see if there is a cached program.
   * @param vertexSrc - The source of the vertex shader.
   * @param fragmentSrc - The source of the fragment shader.
   * @param name - Name for shader
   * @returns A shiny new PixiJS shader program!
   */
  static from(t, e, r) {
    const s = t + e;
    let n = ah[s];
    return n || (ah[s] = n = new _r(t, e, r)), n;
  }
};
na.defaultVertexPrecision = Ut.HIGH, /**
* Default specify float precision in fragment shader.
* iOS is best set at highp due to https://github.com/pixijs/pixijs/issues/3742
* @static
* @type {PIXI.PRECISION}
* @default PIXI.PRECISION.MEDIUM
*/
na.defaultFragmentPrecision = _e.apple.device ? Ut.HIGH : Ut.MEDIUM;
let xe = na, Sm = 0;
class jt {
  /**
   * @param {object | Buffer} [uniforms] - Custom uniforms to use to augment the built-in ones. Or a pixi buffer.
   * @param isStatic - Uniforms wont be changed after creation.
   * @param isUbo - If true, will treat this uniform group as a uniform buffer object.
   */
  constructor(t, e, r) {
    this.group = !0, this.syncUniforms = {}, this.dirtyId = 0, this.id = Sm++, this.static = !!e, this.ubo = !!r, t instanceof ut ? (this.buffer = t, this.buffer.type = he.UNIFORM_BUFFER, this.autoManage = !1, this.ubo = !0) : (this.uniforms = t, this.ubo && (this.buffer = new ut(new Float32Array(1)), this.buffer.type = he.UNIFORM_BUFFER, this.autoManage = !0));
  }
  update() {
    this.dirtyId++, !this.autoManage && this.buffer && this.buffer.update();
  }
  add(t, e, r) {
    if (!this.ubo)
      this.uniforms[t] = new jt(e, r);
    else
      throw new Error("[UniformGroup] uniform groups in ubo mode cannot be modified, or have uniform groups nested in them");
  }
  static from(t, e, r) {
    return new jt(t, e, r);
  }
  /**
   * A short hand function for creating a static UBO UniformGroup.
   * @param uniforms - the ubo item
   * @param _static - should this be updated each time it is used? defaults to true here!
   */
  static uboFrom(t, e) {
    return new jt(t, e ?? !0, !0);
  }
}
class le {
  /**
   * @param program - The program the shader will use.
   * @param uniforms - Custom uniforms to use to augment the built-in ones.
   */
  constructor(t, e) {
    this.uniformBindCount = 0, this.program = t, e ? e instanceof jt ? this.uniformGroup = e : this.uniformGroup = new jt(e) : this.uniformGroup = new jt({}), this.disposeRunner = new Wt("disposeShader");
  }
  // TODO move to shader system..
  checkUniformExists(t, e) {
    if (e.uniforms[t])
      return !0;
    for (const r in e.uniforms) {
      const s = e.uniforms[r];
      if (s.group === !0 && this.checkUniformExists(t, s))
        return !0;
    }
    return !1;
  }
  destroy() {
    this.uniformGroup = null, this.disposeRunner.emit(this), this.disposeRunner.destroy();
  }
  /**
   * Shader uniform values, shortcut for `uniformGroup.uniforms`.
   * @readonly
   */
  get uniforms() {
    return this.uniformGroup.uniforms;
  }
  /**
   * A short hand function to create a shader based of a vertex and fragment shader.
   * @param vertexSrc - The source of the vertex shader.
   * @param fragmentSrc - The source of the fragment shader.
   * @param uniforms - Custom uniforms to use to augment the built-in ones.
   * @returns A shiny new PixiJS shader!
   */
  static from(t, e, r) {
    const s = xe.from(t, e);
    return new le(s, r);
  }
}
class Cm {
  /**
   * @param vertexSrc - Vertex shader
   * @param fragTemplate - Fragment shader template
   */
  constructor(t, e) {
    if (this.vertexSrc = t, this.fragTemplate = e, this.programCache = {}, this.defaultGroupCache = {}, !e.includes("%count%"))
      throw new Error('Fragment template must contain "%count%".');
    if (!e.includes("%forloop%"))
      throw new Error('Fragment template must contain "%forloop%".');
  }
  generateShader(t) {
    if (!this.programCache[t]) {
      const r = new Int32Array(t);
      for (let n = 0; n < t; n++)
        r[n] = n;
      this.defaultGroupCache[t] = jt.from({ uSamplers: r }, !0);
      let s = this.fragTemplate;
      s = s.replace(/%count%/gi, `${t}`), s = s.replace(/%forloop%/gi, this.generateSampleSrc(t)), this.programCache[t] = new xe(this.vertexSrc, s);
    }
    const e = {
      tint: new Float32Array([1, 1, 1, 1]),
      translationMatrix: new rt(),
      default: this.defaultGroupCache[t]
    };
    return new le(this.programCache[t], e);
  }
  generateSampleSrc(t) {
    let e = "";
    e += `
`, e += `
`;
    for (let r = 0; r < t; r++)
      r > 0 && (e += `
else `), r < t - 1 && (e += `if(vTextureId < ${r}.5)`), e += `
{`, e += `
	color = texture2D(uSamplers[${r}], vTextureCoord);`, e += `
}`;
    return e += `
`, e += `
`, e;
  }
}
class aa {
  constructor() {
    this.elements = [], this.ids = [], this.count = 0;
  }
  clear() {
    for (let t = 0; t < this.count; t++)
      this.elements[t] = null;
    this.count = 0;
  }
}
function Im() {
  return !_e.apple.device;
}
function Pm(i) {
  let t = !0;
  const e = L.ADAPTER.getNavigator();
  if (_e.tablet || _e.phone) {
    if (_e.apple.device) {
      const r = e.userAgent.match(/OS (\d+)_(\d+)?/);
      r && parseInt(r[1], 10) < 11 && (t = !1);
    }
    if (_e.android.device) {
      const r = e.userAgent.match(/Android\s([0-9.]*)/);
      r && parseInt(r[1], 10) < 7 && (t = !1);
    }
  }
  return t ? i : 4;
}
class Ls {
  /**
   * @param renderer - The renderer this manager works for.
   */
  constructor(t) {
    this.renderer = t;
  }
  /** Stub method that should be used to empty the current batch by rendering objects now. */
  flush() {
  }
  /** Generic destruction method that frees all resources. This should be called by subclasses. */
  destroy() {
    this.renderer = null;
  }
  /**
   * Stub method that initializes any state required before
   * rendering starts. It is different from the `prerender`
   * signal, which occurs every frame, in that it is called
   * whenever an object requests _this_ renderer specifically.
   */
  start() {
  }
  /** Stops the renderer. It should free up any state and become dormant. */
  stop() {
    this.flush();
  }
  /**
   * Keeps the object to render. It doesn't have to be
   * rendered immediately.
   * @param {PIXI.DisplayObject} _object - The object to render.
   */
  render(t) {
  }
}
var Rm = `varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;
uniform sampler2D uSamplers[%count%];

void main(void){
    vec4 color;
    %forloop%
    gl_FragColor = color * vColor;
}
`, Mm = `precision highp float;
attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;
attribute float aTextureId;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform vec4 tint;

varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;

void main(void){
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vTextureId = aTextureId;
    vColor = aColor * tint;
}
`;
const Qr = class $t extends Ls {
  /**
   * This will hook onto the renderer's `contextChange`
   * and `prerender` signals.
   * @param {PIXI.Renderer} renderer - The renderer this works for.
   */
  constructor(t) {
    super(t), this.setShaderGenerator(), this.geometryClass = Ll, this.vertexSize = 6, this.state = ce.for2d(), this.size = $t.defaultBatchSize * 4, this._vertexCount = 0, this._indexCount = 0, this._bufferedElements = [], this._bufferedTextures = [], this._bufferSize = 0, this._shader = null, this._packedGeometries = [], this._packedGeometryPoolSize = 2, this._flushId = 0, this._aBuffers = {}, this._iBuffers = {}, this.maxTextures = 1, this.renderer.on("prerender", this.onPrerender, this), t.runners.contextChange.add(this), this._dcIndex = 0, this._aIndex = 0, this._iIndex = 0, this._attributeBuffer = null, this._indexBuffer = null, this._tempBoundTextures = [];
  }
  /**
   * The maximum textures that this device supports.
   * @static
   * @default 32
   */
  static get defaultMaxTextures() {
    return this._defaultMaxTextures = this._defaultMaxTextures ?? Pm(32), this._defaultMaxTextures;
  }
  static set defaultMaxTextures(t) {
    this._defaultMaxTextures = t;
  }
  /**
   * Can we upload the same buffer in a single frame?
   * @static
   */
  static get canUploadSameBuffer() {
    return this._canUploadSameBuffer = this._canUploadSameBuffer ?? Im(), this._canUploadSameBuffer;
  }
  static set canUploadSameBuffer(t) {
    this._canUploadSameBuffer = t;
  }
  /**
   * @see PIXI.BatchRenderer#maxTextures
   * @deprecated since 7.1.0
   * @readonly
   */
  get MAX_TEXTURES() {
    return Y("7.1.0", "BatchRenderer#MAX_TEXTURES renamed to BatchRenderer#maxTextures"), this.maxTextures;
  }
  /**
   * The default vertex shader source
   * @readonly
   */
  static get defaultVertexSrc() {
    return Mm;
  }
  /**
   * The default fragment shader source
   * @readonly
   */
  static get defaultFragmentTemplate() {
    return Rm;
  }
  /**
   * Set the shader generator.
   * @param {object} [options]
   * @param {string} [options.vertex=PIXI.BatchRenderer.defaultVertexSrc] - Vertex shader source
   * @param {string} [options.fragment=PIXI.BatchRenderer.defaultFragmentTemplate] - Fragment shader template
   */
  setShaderGenerator({
    vertex: t = $t.defaultVertexSrc,
    fragment: e = $t.defaultFragmentTemplate
  } = {}) {
    this.shaderGenerator = new Cm(t, e);
  }
  /**
   * Handles the `contextChange` signal.
   *
   * It calculates `this.maxTextures` and allocating the packed-geometry object pool.
   */
  contextChange() {
    const t = this.renderer.gl;
    L.PREFER_ENV === hr.WEBGL_LEGACY ? this.maxTextures = 1 : (this.maxTextures = Math.min(
      t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),
      $t.defaultMaxTextures
    ), this.maxTextures = nm(
      this.maxTextures,
      t
    )), this._shader = this.shaderGenerator.generateShader(this.maxTextures);
    for (let e = 0; e < this._packedGeometryPoolSize; e++)
      this._packedGeometries[e] = new this.geometryClass();
    this.initFlushBuffers();
  }
  /** Makes sure that static and dynamic flush pooled objects have correct dimensions. */
  initFlushBuffers() {
    const {
      _drawCallPool: t,
      _textureArrayPool: e
    } = $t, r = this.size / 4, s = Math.floor(r / this.maxTextures) + 1;
    for (; t.length < r; )
      t.push(new ra());
    for (; e.length < s; )
      e.push(new aa());
    for (let n = 0; n < this.maxTextures; n++)
      this._tempBoundTextures[n] = null;
  }
  /** Handles the `prerender` signal. It ensures that flushes start from the first geometry object again. */
  onPrerender() {
    this._flushId = 0;
  }
  /**
   * Buffers the "batchable" object. It need not be rendered immediately.
   * @param {PIXI.DisplayObject} element - the element to render when
   *    using this renderer
   */
  render(t) {
    t._texture.valid && (this._vertexCount + t.vertexData.length / 2 > this.size && this.flush(), this._vertexCount += t.vertexData.length / 2, this._indexCount += t.indices.length, this._bufferedTextures[this._bufferSize] = t._texture.baseTexture, this._bufferedElements[this._bufferSize++] = t);
  }
  buildTexturesAndDrawCalls() {
    const {
      _bufferedTextures: t,
      maxTextures: e
    } = this, r = $t._textureArrayPool, s = this.renderer.batch, n = this._tempBoundTextures, a = this.renderer.textureGC.count;
    let o = ++W._globalBatch, h = 0, l = r[0], u = 0;
    s.copyBoundTextures(n, e);
    for (let c = 0; c < this._bufferSize; ++c) {
      const d = t[c];
      t[c] = null, d._batchEnabled !== o && (l.count >= e && (s.boundArray(l, n, o, e), this.buildDrawCalls(l, u, c), u = c, l = r[++h], ++o), d._batchEnabled = o, d.touched = a, l.elements[l.count++] = d);
    }
    l.count > 0 && (s.boundArray(l, n, o, e), this.buildDrawCalls(l, u, this._bufferSize), ++h, ++o);
    for (let c = 0; c < n.length; c++)
      n[c] = null;
    W._globalBatch = o;
  }
  /**
   * Populating drawcalls for rendering
   * @param texArray
   * @param start
   * @param finish
   */
  buildDrawCalls(t, e, r) {
    const {
      _bufferedElements: s,
      _attributeBuffer: n,
      _indexBuffer: a,
      vertexSize: o
    } = this, h = $t._drawCallPool;
    let l = this._dcIndex, u = this._aIndex, c = this._iIndex, d = h[l];
    d.start = this._iIndex, d.texArray = t;
    for (let f = e; f < r; ++f) {
      const p = s[f], m = p._texture.baseTexture, y = Dl[m.alphaMode ? 1 : 0][p.blendMode];
      s[f] = null, e < f && d.blend !== y && (d.size = c - d.start, e = f, d = h[++l], d.texArray = t, d.start = c), this.packInterleavedGeometry(p, n, a, u, c), u += p.vertexData.length / 2 * o, c += p.indices.length, d.blend = y;
    }
    e < r && (d.size = c - d.start, ++l), this._dcIndex = l, this._aIndex = u, this._iIndex = c;
  }
  /**
   * Bind textures for current rendering
   * @param texArray
   */
  bindAndClearTexArray(t) {
    const e = this.renderer.texture;
    for (let r = 0; r < t.count; r++)
      e.bind(t.elements[r], t.ids[r]), t.elements[r] = null;
    t.count = 0;
  }
  updateGeometry() {
    const {
      _packedGeometries: t,
      _attributeBuffer: e,
      _indexBuffer: r
    } = this;
    $t.canUploadSameBuffer ? (t[this._flushId]._buffer.update(e.rawBinaryData), t[this._flushId]._indexBuffer.update(r), this.renderer.geometry.updateBuffers()) : (this._packedGeometryPoolSize <= this._flushId && (this._packedGeometryPoolSize++, t[this._flushId] = new this.geometryClass()), t[this._flushId]._buffer.update(e.rawBinaryData), t[this._flushId]._indexBuffer.update(r), this.renderer.geometry.bind(t[this._flushId]), this.renderer.geometry.updateBuffers(), this._flushId++);
  }
  drawBatches() {
    const t = this._dcIndex, { gl: e, state: r } = this.renderer, s = $t._drawCallPool;
    let n = null;
    for (let a = 0; a < t; a++) {
      const { texArray: o, type: h, size: l, start: u, blend: c } = s[a];
      n !== o && (n = o, this.bindAndClearTexArray(o)), this.state.blendMode = c, r.set(this.state), e.drawElements(h, l, e.UNSIGNED_SHORT, u * 2);
    }
  }
  /** Renders the content _now_ and empties the current batch. */
  flush() {
    this._vertexCount !== 0 && (this._attributeBuffer = this.getAttributeBuffer(this._vertexCount), this._indexBuffer = this.getIndexBuffer(this._indexCount), this._aIndex = 0, this._iIndex = 0, this._dcIndex = 0, this.buildTexturesAndDrawCalls(), this.updateGeometry(), this.drawBatches(), this._bufferSize = 0, this._vertexCount = 0, this._indexCount = 0);
  }
  /** Starts a new sprite batch. */
  start() {
    this.renderer.state.set(this.state), this.renderer.texture.ensureSamplerType(this.maxTextures), this.renderer.shader.bind(this._shader), $t.canUploadSameBuffer && this.renderer.geometry.bind(this._packedGeometries[this._flushId]);
  }
  /** Stops and flushes the current batch. */
  stop() {
    this.flush();
  }
  /** Destroys this `BatchRenderer`. It cannot be used again. */
  destroy() {
    for (let t = 0; t < this._packedGeometryPoolSize; t++)
      this._packedGeometries[t] && this._packedGeometries[t].destroy();
    this.renderer.off("prerender", this.onPrerender, this), this._aBuffers = null, this._iBuffers = null, this._packedGeometries = null, this._attributeBuffer = null, this._indexBuffer = null, this._shader && (this._shader.destroy(), this._shader = null), super.destroy();
  }
  /**
   * Fetches an attribute buffer from `this._aBuffers` that can hold atleast `size` floats.
   * @param size - minimum capacity required
   * @returns - buffer than can hold atleast `size` floats
   */
  getAttributeBuffer(t) {
    const e = fs(Math.ceil(t / 8)), r = sh(e), s = e * 8;
    this._aBuffers.length <= r && (this._iBuffers.length = r + 1);
    let n = this._aBuffers[s];
    return n || (this._aBuffers[s] = n = new Jn(s * this.vertexSize * 4)), n;
  }
  /**
   * Fetches an index buffer from `this._iBuffers` that can
   * have at least `size` capacity.
   * @param size - minimum required capacity
   * @returns - buffer that can fit `size` indices.
   */
  getIndexBuffer(t) {
    const e = fs(Math.ceil(t / 12)), r = sh(e), s = e * 12;
    this._iBuffers.length <= r && (this._iBuffers.length = r + 1);
    let n = this._iBuffers[r];
    return n || (this._iBuffers[r] = n = new Uint16Array(s)), n;
  }
  /**
   * Takes the four batching parameters of `element`, interleaves
   * and pushes them into the batching attribute/index buffers given.
   *
   * It uses these properties: `vertexData` `uvs`, `textureId` and
   * `indicies`. It also uses the "tint" of the base-texture, if
   * present.
   * @param {PIXI.DisplayObject} element - element being rendered
   * @param attributeBuffer - attribute buffer.
   * @param indexBuffer - index buffer
   * @param aIndex - number of floats already in the attribute buffer
   * @param iIndex - number of indices already in `indexBuffer`
   */
  packInterleavedGeometry(t, e, r, s, n) {
    const {
      uint32View: a,
      float32View: o
    } = e, h = s / this.vertexSize, l = t.uvs, u = t.indices, c = t.vertexData, d = t._texture.baseTexture._batchLocation, f = Math.min(t.worldAlpha, 1), p = tt.shared.setValue(t._tintRGB).toPremultiplied(f, t._texture.baseTexture.alphaMode > 0);
    for (let m = 0; m < c.length; m += 2)
      o[s++] = c[m], o[s++] = c[m + 1], o[s++] = l[m], o[s++] = l[m + 1], a[s++] = p, o[s++] = d;
    for (let m = 0; m < u.length; m++)
      r[n++] = h + u[m];
  }
};
Qr.defaultBatchSize = 4096, /** @ignore */
Qr.extension = {
  name: "batch",
  type: F.RendererPlugin
}, /**
* Pool of `BatchDrawCall` objects that `flush` used
* to create "batches" of the objects being rendered.
*
* These are never re-allocated again.
* Shared between all batch renderers because it can be only one "flush" working at the moment.
* @member {PIXI.BatchDrawCall[]}
*/
Qr._drawCallPool = [], /**
* Pool of `BatchDrawCall` objects that `flush` used
* to create "batches" of the objects being rendered.
*
* These are never re-allocated again.
* Shared between all batch renderers because it can be only one "flush" working at the moment.
* @member {PIXI.BatchTextureArray[]}
*/
Qr._textureArrayPool = [];
let Ze = Qr;
k.add(Ze);
var Bm = `varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor = texture2D(uSampler, vTextureCoord);
}
`, Dm = `attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`;
const oa = class Jr extends le {
  /**
   * @param vertexSrc - The source of the vertex shader.
   * @param fragmentSrc - The source of the fragment shader.
   * @param uniforms - Custom uniforms to use to augment the built-in ones.
   */
  constructor(t, e, r) {
    const s = xe.from(
      t || Jr.defaultVertexSrc,
      e || Jr.defaultFragmentSrc
    );
    super(s, r), this.padding = 0, this.resolution = Jr.defaultResolution, this.multisample = Jr.defaultMultisample, this.enabled = !0, this.autoFit = !0, this.state = new ce();
  }
  /**
   * Applies the filter
   * @param {PIXI.FilterSystem} filterManager - The renderer to retrieve the filter from
   * @param {PIXI.RenderTexture} input - The input render target.
   * @param {PIXI.RenderTexture} output - The target to output to.
   * @param {PIXI.CLEAR_MODES} [clearMode] - Should the output be cleared before rendering to it.
   * @param {object} [_currentState] - It's current state of filter.
   *        There are some useful properties in the currentState :
   *        target, filters, sourceFrame, destinationFrame, renderTarget, resolution
   */
  apply(t, e, r, s, n) {
    t.applyFilter(this, e, r, s);
  }
  /**
   * Sets the blend mode of the filter.
   * @default PIXI.BLEND_MODES.NORMAL
   */
  get blendMode() {
    return this.state.blendMode;
  }
  set blendMode(t) {
    this.state.blendMode = t;
  }
  /**
   * The resolution of the filter. Setting this to be lower will lower the quality but
   * increase the performance of the filter.
   * If set to `null` or `0`, the resolution of the current render target is used.
   * @default PIXI.Filter.defaultResolution
   */
  get resolution() {
    return this._resolution;
  }
  set resolution(t) {
    this._resolution = t;
  }
  /**
   * The default vertex shader source
   * @readonly
   */
  static get defaultVertexSrc() {
    return Dm;
  }
  /**
   * The default fragment shader source
   * @readonly
   */
  static get defaultFragmentSrc() {
    return Bm;
  }
};
oa.defaultResolution = 1, /**
* Default filter samples for any filter.
* @static
* @type {PIXI.MSAA_QUALITY|null}
* @default PIXI.MSAA_QUALITY.NONE
*/
oa.defaultMultisample = ft.NONE;
let Pt = oa;
class gs {
  constructor() {
    this.clearBeforeRender = !0, this._backgroundColor = new tt(0), this.alpha = 1;
  }
  /**
   * initiates the background system
   * @param {PIXI.IRendererOptions} options - the options for the background colors
   */
  init(t) {
    this.clearBeforeRender = t.clearBeforeRender;
    const { backgroundColor: e, background: r, backgroundAlpha: s } = t, n = r ?? e;
    n !== void 0 && (this.color = n), this.alpha = s;
  }
  /**
   * The background color to fill if not transparent.
   * @member {PIXI.ColorSource}
   */
  get color() {
    return this._backgroundColor.value;
  }
  set color(t) {
    this._backgroundColor.setValue(t);
  }
  /**
   * The background color alpha. Setting this to 0 will make the canvas transparent.
   * @member {number}
   */
  get alpha() {
    return this._backgroundColor.alpha;
  }
  set alpha(t) {
    this._backgroundColor.setAlpha(t);
  }
  /** The background color object. */
  get backgroundColor() {
    return this._backgroundColor;
  }
  destroy() {
  }
}
gs.defaultOptions = {
  /**
   * {@link PIXI.IRendererOptions.backgroundAlpha}
   * @default 1
   * @memberof PIXI.settings.RENDER_OPTIONS
   */
  backgroundAlpha: 1,
  /**
   * {@link PIXI.IRendererOptions.backgroundColor}
   * @default 0x000000
   * @memberof PIXI.settings.RENDER_OPTIONS
   */
  backgroundColor: 0,
  /**
   * {@link PIXI.IRendererOptions.clearBeforeRender}
   * @default true
   * @memberof PIXI.settings.RENDER_OPTIONS
   */
  clearBeforeRender: !0
}, /** @ignore */
gs.extension = {
  type: [
    F.RendererSystem,
    F.CanvasRendererSystem
  ],
  name: "background"
};
k.add(gs);
class Vl {
  /**
   * @param renderer - The renderer this System works for.
   */
  constructor(t) {
    this.renderer = t, this.emptyRenderer = new Ls(t), this.currentRenderer = this.emptyRenderer;
  }
  /**
   * Changes the current renderer to the one given in parameter
   * @param objectRenderer - The object renderer to use.
   */
  setObjectRenderer(t) {
    this.currentRenderer !== t && (this.currentRenderer.stop(), this.currentRenderer = t, this.currentRenderer.start());
  }
  /**
   * This should be called if you wish to do some custom rendering
   * It will basically render anything that may be batched up such as sprites
   */
  flush() {
    this.setObjectRenderer(this.emptyRenderer);
  }
  /** Reset the system to an empty renderer */
  reset() {
    this.setObjectRenderer(this.emptyRenderer);
  }
  /**
   * Handy function for batch renderers: copies bound textures in first maxTextures locations to array
   * sets actual _batchLocation for them
   * @param arr - arr copy destination
   * @param maxTextures - number of copied elements
   */
  copyBoundTextures(t, e) {
    const { boundTextures: r } = this.renderer.texture;
    for (let s = e - 1; s >= 0; --s)
      t[s] = r[s] || null, t[s] && (t[s]._batchLocation = s);
  }
  /**
   * Assigns batch locations to textures in array based on boundTextures state.
   * All textures in texArray should have `_batchEnabled = _batchId`,
   * and their count should be less than `maxTextures`.
   * @param texArray - textures to bound
   * @param boundTextures - current state of bound textures
   * @param batchId - marker for _batchEnabled param of textures in texArray
   * @param maxTextures - number of texture locations to manipulate
   */
  boundArray(t, e, r, s) {
    const { elements: n, ids: a, count: o } = t;
    let h = 0;
    for (let l = 0; l < o; l++) {
      const u = n[l], c = u._batchLocation;
      if (c >= 0 && c < s && e[c] === u) {
        a[l] = c;
        continue;
      }
      for (; h < s; ) {
        const d = e[h];
        if (d && d._batchEnabled === r && d._batchLocation === h) {
          h++;
          continue;
        }
        a[l] = h, u._batchLocation = h, e[h] = u;
        break;
      }
    }
  }
  /**
   * @ignore
   */
  destroy() {
    this.renderer = null;
  }
}
Vl.extension = {
  type: F.RendererSystem,
  name: "batch"
};
k.add(Vl);
let mh = 0;
class ys {
  /** @param renderer - The renderer this System works for. */
  constructor(t) {
    this.renderer = t, this.webGLVersion = 1, this.extensions = {}, this.supports = {
      uint32Indices: !1
    }, this.handleContextLost = this.handleContextLost.bind(this), this.handleContextRestored = this.handleContextRestored.bind(this);
  }
  /**
   * `true` if the context is lost
   * @readonly
   */
  get isLost() {
    return !this.gl || this.gl.isContextLost();
  }
  /**
   * Handles the context change event.
   * @param {WebGLRenderingContext} gl - New WebGL context.
   */
  contextChange(t) {
    this.gl = t, this.renderer.gl = t, this.renderer.CONTEXT_UID = mh++;
  }
  init(t) {
    if (t.context)
      this.initFromContext(t.context);
    else {
      const e = this.renderer.background.alpha < 1, r = t.premultipliedAlpha;
      this.preserveDrawingBuffer = t.preserveDrawingBuffer, this.useContextAlpha = t.useContextAlpha, this.powerPreference = t.powerPreference, this.initFromOptions({
        alpha: e,
        premultipliedAlpha: r,
        antialias: t.antialias,
        stencil: !0,
        preserveDrawingBuffer: t.preserveDrawingBuffer,
        powerPreference: t.powerPreference
      });
    }
  }
  /**
   * Initializes the context.
   * @protected
   * @param {WebGLRenderingContext} gl - WebGL context
   */
  initFromContext(t) {
    this.gl = t, this.validateContext(t), this.renderer.gl = t, this.renderer.CONTEXT_UID = mh++, this.renderer.runners.contextChange.emit(t);
    const e = this.renderer.view;
    e.addEventListener !== void 0 && (e.addEventListener("webglcontextlost", this.handleContextLost, !1), e.addEventListener("webglcontextrestored", this.handleContextRestored, !1));
  }
  /**
   * Initialize from context options
   * @protected
   * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext
   * @param {object} options - context attributes
   */
  initFromOptions(t) {
    const e = this.createContext(this.renderer.view, t);
    this.initFromContext(e);
  }
  /**
   * Helper class to create a WebGL Context
   * @param canvas - the canvas element that we will get the context from
   * @param options - An options object that gets passed in to the canvas element containing the
   *    context attributes
   * @see https://developer.mozilla.org/en/docs/Web/API/HTMLCanvasElement/getContext
   * @returns {WebGLRenderingContext} the WebGL context
   */
  createContext(t, e) {
    let r;
    if (L.PREFER_ENV >= hr.WEBGL2 && (r = t.getContext("webgl2", e)), r)
      this.webGLVersion = 2;
    else if (this.webGLVersion = 1, r = t.getContext("webgl", e) || t.getContext("experimental-webgl", e), !r)
      throw new Error("This browser does not support WebGL. Try using the canvas renderer");
    return this.gl = r, this.getExtensions(), this.gl;
  }
  /** Auto-populate the {@link PIXI.ContextSystem.extensions extensions}. */
  getExtensions() {
    const { gl: t } = this, e = {
      loseContext: t.getExtension("WEBGL_lose_context"),
      anisotropicFiltering: t.getExtension("EXT_texture_filter_anisotropic"),
      floatTextureLinear: t.getExtension("OES_texture_float_linear"),
      s3tc: t.getExtension("WEBGL_compressed_texture_s3tc"),
      s3tc_sRGB: t.getExtension("WEBGL_compressed_texture_s3tc_srgb"),
      // eslint-disable-line camelcase
      etc: t.getExtension("WEBGL_compressed_texture_etc"),
      etc1: t.getExtension("WEBGL_compressed_texture_etc1"),
      pvrtc: t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
      atc: t.getExtension("WEBGL_compressed_texture_atc"),
      astc: t.getExtension("WEBGL_compressed_texture_astc"),
      bptc: t.getExtension("EXT_texture_compression_bptc")
    };
    this.webGLVersion === 1 ? Object.assign(this.extensions, e, {
      drawBuffers: t.getExtension("WEBGL_draw_buffers"),
      depthTexture: t.getExtension("WEBGL_depth_texture"),
      vertexArrayObject: t.getExtension("OES_vertex_array_object") || t.getExtension("MOZ_OES_vertex_array_object") || t.getExtension("WEBKIT_OES_vertex_array_object"),
      uint32ElementIndex: t.getExtension("OES_element_index_uint"),
      // Floats and half-floats
      floatTexture: t.getExtension("OES_texture_float"),
      floatTextureLinear: t.getExtension("OES_texture_float_linear"),
      textureHalfFloat: t.getExtension("OES_texture_half_float"),
      textureHalfFloatLinear: t.getExtension("OES_texture_half_float_linear")
    }) : this.webGLVersion === 2 && Object.assign(this.extensions, e, {
      // Floats and half-floats
      colorBufferFloat: t.getExtension("EXT_color_buffer_float")
    });
  }
  /**
   * Handles a lost webgl context
   * @param {WebGLContextEvent} event - The context lost event.
   */
  handleContextLost(t) {
    t.preventDefault(), setTimeout(() => {
      this.gl.isContextLost() && this.extensions.loseContext && this.extensions.loseContext.restoreContext();
    }, 0);
  }
  /** Handles a restored webgl context. */
  handleContextRestored() {
    this.renderer.runners.contextChange.emit(this.gl);
  }
  destroy() {
    const t = this.renderer.view;
    this.renderer = null, t.removeEventListener !== void 0 && (t.removeEventListener("webglcontextlost", this.handleContextLost), t.removeEventListener("webglcontextrestored", this.handleContextRestored)), this.gl.useProgram(null), this.extensions.loseContext && this.extensions.loseContext.loseContext();
  }
  /** Handle the post-render runner event. */
  postrender() {
    this.renderer.objectRenderer.renderingToScreen && this.gl.flush();
  }
  /**
   * Validate context.
   * @param {WebGLRenderingContext} gl - Render context.
   */
  validateContext(t) {
    const e = t.getContextAttributes(), r = "WebGL2RenderingContext" in globalThis && t instanceof globalThis.WebGL2RenderingContext;
    r && (this.webGLVersion = 2), e && !e.stencil && console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly");
    const s = r || !!t.getExtension("OES_element_index_uint");
    this.supports.uint32Indices = s, s || console.warn("Provided WebGL context does not support 32 index buffer, complex graphics may not render correctly");
  }
}
ys.defaultOptions = {
  /**
   * {@link PIXI.IRendererOptions.context}
   * @default null
   * @memberof PIXI.settings.RENDER_OPTIONS
   */
  context: null,
  /**
   * {@link PIXI.IRendererOptions.antialias}
   * @default false
   * @memberof PIXI.settings.RENDER_OPTIONS
   */
  antialias: !1,
  /**
   * {@link PIXI.IRendererOptions.premultipliedAlpha}
   * @default true
   * @memberof PIXI.settings.RENDER_OPTIONS
   */
  premultipliedAlpha: !0,
  /**
   * {@link PIXI.IRendererOptions.preserveDrawingBuffer}
   * @default false
   * @memberof PIXI.settings.RENDER_OPTIONS
   */
  preserveDrawingBuffer: !1,
  /**
   * {@link PIXI.IRendererOptions.powerPreference}
   * @default default
   * @memberof PIXI.settings.RENDER_OPTIONS
   */
  powerPreference: "default"
}, /** @ignore */
ys.extension = {
  type: F.RendererSystem,
  name: "context"
};
k.add(ys);
class ha {
  /**
   * @param width - Width of the frame buffer
   * @param height - Height of the frame buffer
   */
  constructor(t, e) {
    if (this.width = Math.round(t), this.height = Math.round(e), !this.width || !this.height)
      throw new Error("Framebuffer width or height is zero");
    this.stencil = !1, this.depth = !1, this.dirtyId = 0, this.dirtyFormat = 0, this.dirtySize = 0, this.depthTexture = null, this.colorTextures = [], this.glFramebuffers = {}, this.disposeRunner = new Wt("disposeFramebuffer"), this.multisample = ft.NONE;
  }
  /**
   * Reference to the colorTexture.
   * @readonly
   */
  get colorTexture() {
    return this.colorTextures[0];
  }
  /**
   * Add texture to the colorTexture array.
   * @param index - Index of the array to add the texture to
   * @param texture - Texture to add to the array
   */
  addColorTexture(t = 0, e) {
    return this.colorTextures[t] = e || new W(null, {
      scaleMode: ye.NEAREST,
      resolution: 1,
      mipmap: ue.OFF,
      width: this.width,
      height: this.height
    }), this.dirtyId++, this.dirtyFormat++, this;
  }
  /**
   * Add a depth texture to the frame buffer.
   * @param texture - Texture to add.
   */
  addDepthTexture(t) {
    return this.depthTexture = t || new W(null, {
      scaleMode: ye.NEAREST,
      resolution: 1,
      width: this.width,
      height: this.height,
      mipmap: ue.OFF,
      format: P.DEPTH_COMPONENT,
      type: V.UNSIGNED_SHORT
    }), this.dirtyId++, this.dirtyFormat++, this;
  }
  /** Enable depth on the frame buffer. */
  enableDepth() {
    return this.depth = !0, this.dirtyId++, this.dirtyFormat++, this;
  }
  /** Enable stencil on the frame buffer. */
  enableStencil() {
    return this.stencil = !0, this.dirtyId++, this.dirtyFormat++, this;
  }
  /**
   * Resize the frame buffer
   * @param width - Width of the frame buffer to resize to
   * @param height - Height of the frame buffer to resize to
   */
  resize(t, e) {
    if (t = Math.round(t), e = Math.round(e), !t || !e)
      throw new Error("Framebuffer width and height must not be zero");
    if (!(t === this.width && e === this.height)) {
      this.width = t, this.height = e, this.dirtyId++, this.dirtySize++;
      for (let r = 0; r < this.colorTextures.length; r++) {
        const s = this.colorTextures[r], n = s.resolution;
        s.setSize(t / n, e / n);
      }
      if (this.depthTexture) {
        const r = this.depthTexture.resolution;
        this.depthTexture.setSize(t / r, e / r);
      }
    }
  }
  /** Disposes WebGL resources that are connected to this geometry. */
  dispose() {
    this.disposeRunner.emit(this, !1);
  }
  /** Destroys and removes the depth texture added to this framebuffer. */
  destroyDepthTexture() {
    this.depthTexture && (this.depthTexture.destroy(), this.depthTexture = null, ++this.dirtyId, ++this.dirtyFormat);
  }
}
class zl extends W {
  /**
   * @param options
   * @param {number} [options.width=100] - The width of the base render texture.
   * @param {number} [options.height=100] - The height of the base render texture.
   * @param {PIXI.SCALE_MODES} [options.scaleMode=PIXI.BaseTexture.defaultOptions.scaleMode] - See {@link PIXI.SCALE_MODES}
   *   for possible values.
   * @param {number} [options.resolution=PIXI.settings.RESOLUTION] - The resolution / device pixel ratio
   *   of the texture being generated.
   * @param {PIXI.MSAA_QUALITY} [options.multisample=PIXI.MSAA_QUALITY.NONE] - The number of samples of the frame buffer.
   */
  constructor(t = {}) {
    if (typeof t == "number") {
      const e = arguments[0], r = arguments[1], s = arguments[2], n = arguments[3];
      t = { width: e, height: r, scaleMode: s, resolution: n };
    }
    t.width = t.width ?? 100, t.height = t.height ?? 100, t.multisample ?? (t.multisample = ft.NONE), super(null, t), this.mipmap = ue.OFF, this.valid = !0, this._clear = new tt([0, 0, 0, 0]), this.framebuffer = new ha(this.realWidth, this.realHeight).addColorTexture(0, this), this.framebuffer.multisample = t.multisample, this.maskStack = [], this.filterStack = [{}];
  }
  /** Color when clearning the texture. */
  set clearColor(t) {
    this._clear.setValue(t);
  }
  get clearColor() {
    return this._clear.value;
  }
  /**
   * Color object when clearning the texture.
   * @readonly
   * @since 7.2.0
   */
  get clear() {
    return this._clear;
  }
  /**
   * Shortcut to `this.framebuffer.multisample`.
   * @default PIXI.MSAA_QUALITY.NONE
   */
  get multisample() {
    return this.framebuffer.multisample;
  }
  set multisample(t) {
    this.framebuffer.multisample = t;
  }
  /**
   * Resizes the BaseRenderTexture.
   * @param desiredWidth - The desired width to resize to.
   * @param desiredHeight - The desired height to resize to.
   */
  resize(t, e) {
    this.framebuffer.resize(t * this.resolution, e * this.resolution), this.setRealSize(this.framebuffer.width, this.framebuffer.height);
  }
  /**
   * Frees the texture and framebuffer from WebGL memory without destroying this texture object.
   * This means you can still use the texture later which will upload it to GPU
   * memory again.
   * @fires PIXI.BaseTexture#dispose
   */
  dispose() {
    this.framebuffer.dispose(), super.dispose();
  }
  /** Destroys this texture. */
  destroy() {
    super.destroy(), this.framebuffer.destroyDepthTexture(), this.framebuffer = null;
  }
}
class Se extends di {
  /**
   * @param {PIXI.ImageSourcee} source
   */
  constructor(t) {
    const e = t, r = e.naturalWidth || e.videoWidth || e.displayWidth || e.width, s = e.naturalHeight || e.videoHeight || e.displayHeight || e.height;
    super(r, s), this.source = t, this.noSubImage = !1;
  }
  /**
   * Set cross origin based detecting the url and the crossorigin
   * @param element - Element to apply crossOrigin
   * @param url - URL to check
   * @param crossorigin - Cross origin value to use
   */
  static crossOrigin(t, e, r) {
    r === void 0 && !e.startsWith("data:") ? t.crossOrigin = rm(e) : r !== !1 && (t.crossOrigin = typeof r == "string" ? r : "anonymous");
  }
  /**
   * Upload the texture to the GPU.
   * @param renderer - Upload to the renderer
   * @param baseTexture - Reference to parent texture
   * @param glTexture
   * @param {PIXI.ImageSourcee} [source] - (optional)
   * @returns - true is success
   */
  upload(t, e, r, s) {
    const n = t.gl, a = e.realWidth, o = e.realHeight;
    if (s = s || this.source, typeof HTMLImageElement < "u" && s instanceof HTMLImageElement) {
      if (!s.complete || s.naturalWidth === 0)
        return !1;
    } else if (typeof HTMLVideoElement < "u" && s instanceof HTMLVideoElement && s.readyState <= 1)
      return !1;
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.alphaMode === Dt.UNPACK), !this.noSubImage && e.target === n.TEXTURE_2D && r.width === a && r.height === o ? n.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, e.format, r.type, s) : (r.width = a, r.height = o, n.texImage2D(e.target, 0, r.internalFormat, e.format, r.type, s)), !0;
  }
  /**
   * Checks if source width/height was changed, resize can cause extra baseTexture update.
   * Triggers one update in any case.
   */
  update() {
    if (this.destroyed)
      return;
    const t = this.source, e = t.naturalWidth || t.videoWidth || t.width, r = t.naturalHeight || t.videoHeight || t.height;
    this.resize(e, r), super.update();
  }
  /** Destroy this {@link PIXI.BaseImageResource} */
  dispose() {
    this.source = null;
  }
}
class Xl extends Se {
  /**
   * @param source - image source or URL
   * @param options
   * @param {boolean} [options.autoLoad=true] - start loading process
   * @param {boolean} [options.createBitmap=PIXI.settings.CREATE_IMAGE_BITMAP] - whether its required to create
   *        a bitmap before upload
   * @param {boolean} [options.crossorigin=true] - Load image using cross origin
   * @param {PIXI.ALPHA_MODES} [options.alphaMode=PIXI.ALPHA_MODES.UNPACK] - Premultiply image alpha in bitmap
   */
  constructor(t, e) {
    if (e = e || {}, typeof t == "string") {
      const r = new Image();
      Se.crossOrigin(r, t, e.crossorigin), r.src = t, t = r;
    }
    super(t), !t.complete && this._width && this._height && (this._width = 0, this._height = 0), this.url = t.src, this._process = null, this.preserveBitmap = !1, this.createBitmap = (e.createBitmap ?? L.CREATE_IMAGE_BITMAP) && !!globalThis.createImageBitmap, this.alphaMode = typeof e.alphaMode == "number" ? e.alphaMode : null, this.bitmap = null, this._load = null, e.autoLoad !== !1 && this.load();
  }
  /**
   * Returns a promise when image will be loaded and processed.
   * @param createBitmap - whether process image into bitmap
   */
  load(t) {
    return this._load ? this._load : (t !== void 0 && (this.createBitmap = t), this._load = new Promise((e, r) => {
      const s = this.source;
      this.url = s.src;
      const n = () => {
        this.destroyed || (s.onload = null, s.onerror = null, this.update(), this._load = null, this.createBitmap ? e(this.process()) : e(this));
      };
      s.complete && s.src ? n() : (s.onload = n, s.onerror = (a) => {
        r(a), this.onError.emit(a);
      });
    }), this._load);
  }
  /**
   * Called when we need to convert image into BitmapImage.
   * Can be called multiple times, real promise is cached inside.
   * @returns - Cached promise to fill that bitmap
   */
  process() {
    const t = this.source;
    if (this._process !== null)
      return this._process;
    if (this.bitmap !== null || !globalThis.createImageBitmap)
      return Promise.resolve(this);
    const e = globalThis.createImageBitmap, r = !t.crossOrigin || t.crossOrigin === "anonymous";
    return this._process = fetch(
      t.src,
      {
        mode: r ? "cors" : "no-cors"
      }
    ).then((s) => s.blob()).then((s) => e(
      s,
      0,
      0,
      t.width,
      t.height,
      {
        premultiplyAlpha: this.alphaMode === null || this.alphaMode === Dt.UNPACK ? "premultiply" : "none"
      }
    )).then((s) => this.destroyed ? Promise.reject() : (this.bitmap = s, this.update(), this._process = null, Promise.resolve(this))), this._process;
  }
  /**
   * Upload the image resource to GPU.
   * @param renderer - Renderer to upload to
   * @param baseTexture - BaseTexture for this resource
   * @param glTexture - GLTexture to use
   * @returns {boolean} true is success
   */
  upload(t, e, r) {
    if (typeof this.alphaMode == "number" && (e.alphaMode = this.alphaMode), !this.createBitmap)
      return super.upload(t, e, r);
    if (!this.bitmap && (this.process(), !this.bitmap))
      return !1;
    if (super.upload(t, e, r, this.bitmap), !this.preserveBitmap) {
      let s = !0;
      const n = e._glTextures;
      for (const a in n) {
        const o = n[a];
        if (o !== r && o.dirtyId !== e.dirtyId) {
          s = !1;
          break;
        }
      }
      s && (this.bitmap.close && this.bitmap.close(), this.bitmap = null);
    }
    return !0;
  }
  /** Destroys this resource. */
  dispose() {
    this.source.onload = null, this.source.onerror = null, super.dispose(), this.bitmap && (this.bitmap.close(), this.bitmap = null), this._process = null, this._load = null;
  }
  /**
   * Used to auto-detect the type of resource.
   * @param {*} source - The source object
   * @returns {boolean} `true` if current environment support HTMLImageElement, and source is string or HTMLImageElement
   */
  static test(t) {
    return typeof HTMLImageElement < "u" && (typeof t == "string" || t instanceof HTMLImageElement);
  }
}
class Xa {
  constructor() {
    this.x0 = 0, this.y0 = 0, this.x1 = 1, this.y1 = 0, this.x2 = 1, this.y2 = 1, this.x3 = 0, this.y3 = 1, this.uvsFloat32 = new Float32Array(8);
  }
  /**
   * Sets the texture Uvs based on the given frame information.
   * @protected
   * @param frame - The frame of the texture
   * @param baseFrame - The base frame of the texture
   * @param rotate - Rotation of frame, see {@link PIXI.groupD8}
   */
  set(t, e, r) {
    const s = e.width, n = e.height;
    if (r) {
      const a = t.width / 2 / s, o = t.height / 2 / n, h = t.x / s + a, l = t.y / n + o;
      r = nt.add(r, nt.NW), this.x0 = h + a * nt.uX(r), this.y0 = l + o * nt.uY(r), r = nt.add(r, 2), this.x1 = h + a * nt.uX(r), this.y1 = l + o * nt.uY(r), r = nt.add(r, 2), this.x2 = h + a * nt.uX(r), this.y2 = l + o * nt.uY(r), r = nt.add(r, 2), this.x3 = h + a * nt.uX(r), this.y3 = l + o * nt.uY(r);
    } else
      this.x0 = t.x / s, this.y0 = t.y / n, this.x1 = (t.x + t.width) / s, this.y1 = t.y / n, this.x2 = (t.x + t.width) / s, this.y2 = (t.y + t.height) / n, this.x3 = t.x / s, this.y3 = (t.y + t.height) / n;
    this.uvsFloat32[0] = this.x0, this.uvsFloat32[1] = this.y0, this.uvsFloat32[2] = this.x1, this.uvsFloat32[3] = this.y1, this.uvsFloat32[4] = this.x2, this.uvsFloat32[5] = this.y2, this.uvsFloat32[6] = this.x3, this.uvsFloat32[7] = this.y3;
  }
}
Xa.prototype.toString = function() {
  return `[@pixi/core:TextureUvs x0=${this.x0} y0=${this.y0} x1=${this.x1} y1=${this.y1} x2=${this.x2} y2=${this.y2} x3=${this.x3} y3=${this.y3}]`;
};
const gh = new Xa();
function Ni(i) {
  i.destroy = function() {
  }, i.on = function() {
  }, i.once = function() {
  }, i.emit = function() {
  };
}
class O extends gi {
  /**
   * @param baseTexture - The base texture source to create the texture from
   * @param frame - The rectangle frame of the texture to show
   * @param orig - The area of original texture
   * @param trim - Trimmed rectangle of original texture
   * @param rotate - indicates how the texture was rotated by texture packer. See {@link PIXI.groupD8}
   * @param anchor - Default anchor point used for sprite placement / rotation
   * @param borders - Default borders used for 9-slice scaling. See {@link PIXI.NineSlicePlane}
   */
  constructor(t, e, r, s, n, a, o) {
    if (super(), this.noFrame = !1, e || (this.noFrame = !0, e = new j(0, 0, 1, 1)), t instanceof O && (t = t.baseTexture), this.baseTexture = t, this._frame = e, this.trim = s, this.valid = !1, this.destroyed = !1, this._uvs = gh, this.uvMatrix = null, this.orig = r || e, this._rotate = Number(n || 0), n === !0)
      this._rotate = 2;
    else if (this._rotate % 2 !== 0)
      throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");
    this.defaultAnchor = a ? new K(a.x, a.y) : new K(0, 0), this.defaultBorders = o, this._updateID = 0, this.textureCacheIds = [], t.valid ? this.noFrame ? t.valid && this.onBaseTextureUpdated(t) : this.frame = e : t.once("loaded", this.onBaseTextureUpdated, this), this.noFrame && t.on("update", this.onBaseTextureUpdated, this);
  }
  /**
   * Updates this texture on the gpu.
   *
   * Calls the TextureResource update.
   *
   * If you adjusted `frame` manually, please call `updateUvs()` instead.
   */
  update() {
    this.baseTexture.resource && this.baseTexture.resource.update();
  }
  /**
   * Called when the base texture is updated
   * @protected
   * @param baseTexture - The base texture.
   */
  onBaseTextureUpdated(t) {
    if (this.noFrame) {
      if (!this.baseTexture.valid)
        return;
      this._frame.width = t.width, this._frame.height = t.height, this.valid = !0, this.updateUvs();
    } else
      this.frame = this._frame;
    this.emit("update", this);
  }
  /**
   * Destroys this texture
   * @param [destroyBase=false] - Whether to destroy the base texture as well
   * @fires PIXI.Texture#destroyed
   */
  destroy(t) {
    if (this.baseTexture) {
      if (t) {
        const { resource: e } = this.baseTexture;
        e != null && e.url && ee[e.url] && O.removeFromCache(e.url), this.baseTexture.destroy();
      }
      this.baseTexture.off("loaded", this.onBaseTextureUpdated, this), this.baseTexture.off("update", this.onBaseTextureUpdated, this), this.baseTexture = null;
    }
    this._frame = null, this._uvs = null, this.trim = null, this.orig = null, this.valid = !1, O.removeFromCache(this), this.textureCacheIds = null, this.destroyed = !0, this.emit("destroyed", this), this.removeAllListeners();
  }
  /**
   * Creates a new texture object that acts the same as this one.
   * @returns - The new texture
   */
  clone() {
    var s;
    const t = this._frame.clone(), e = this._frame === this.orig ? t : this.orig.clone(), r = new O(
      this.baseTexture,
      !this.noFrame && t,
      e,
      (s = this.trim) == null ? void 0 : s.clone(),
      this.rotate,
      this.defaultAnchor,
      this.defaultBorders
    );
    return this.noFrame && (r._frame = t), r;
  }
  /**
   * Updates the internal WebGL UV cache. Use it after you change `frame` or `trim` of the texture.
   * Call it after changing the frame
   */
  updateUvs() {
    this._uvs === gh && (this._uvs = new Xa()), this._uvs.set(this._frame, this.baseTexture, this.rotate), this._updateID++;
  }
  /**
   * Helper function that creates a new Texture based on the source you provide.
   * The source can be - frame id, image url, video url, canvas element, video element, base texture
   * @param {string|PIXI.BaseTexture|HTMLImageElement|HTMLVideoElement|ImageBitmap|PIXI.ICanvas} source -
   *        Source or array of sources to create texture from
   * @param options - See {@link PIXI.BaseTexture}'s constructor for options.
   * @param {string} [options.pixiIdPrefix=pixiid] - If a source has no id, this is the prefix of the generated id
   * @param {boolean} [strict] - Enforce strict-mode, see {@link PIXI.settings.STRICT_TEXTURE_CACHE}.
   * @returns {PIXI.Texture} The newly created texture
   */
  static from(t, e = {}, r = L.STRICT_TEXTURE_CACHE) {
    const s = typeof t == "string";
    let n = null;
    if (s)
      n = t;
    else if (t instanceof W) {
      if (!t.cacheId) {
        const o = (e == null ? void 0 : e.pixiIdPrefix) || "pixiid";
        t.cacheId = `${o}-${or()}`, W.addToCache(t, t.cacheId);
      }
      n = t.cacheId;
    } else {
      if (!t._pixiId) {
        const o = (e == null ? void 0 : e.pixiIdPrefix) || "pixiid";
        t._pixiId = `${o}_${or()}`;
      }
      n = t._pixiId;
    }
    let a = ee[n];
    if (s && r && !a)
      throw new Error(`The cacheId "${n}" does not exist in TextureCache.`);
    return !a && !(t instanceof W) ? (e.resolution || (e.resolution = Ae(t)), a = new O(new W(t, e)), a.baseTexture.cacheId = n, W.addToCache(a.baseTexture, n), O.addToCache(a, n)) : !a && t instanceof W && (a = new O(t), O.addToCache(a, n)), a;
  }
  /**
   * Useful for loading textures via URLs. Use instead of `Texture.from` because
   * it does a better job of handling failed URLs more effectively. This also ignores
   * `PIXI.settings.STRICT_TEXTURE_CACHE`. Works for Videos, SVGs, Images.
   * @param url - The remote URL or array of URLs to load.
   * @param options - Optional options to include
   * @returns - A Promise that resolves to a Texture.
   */
  static fromURL(t, e) {
    const r = Object.assign({ autoLoad: !1 }, e == null ? void 0 : e.resourceOptions), s = O.from(t, Object.assign({ resourceOptions: r }, e), !1), n = s.baseTexture.resource;
    return s.baseTexture.valid ? Promise.resolve(s) : n.load().then(() => Promise.resolve(s));
  }
  /**
   * Create a new Texture with a BufferResource from a typed array.
   * @param buffer - The optional array to use. If no data is provided, a new Float32Array is created.
   * @param width - Width of the resource
   * @param height - Height of the resource
   * @param options - See {@link PIXI.BaseTexture}'s constructor for options.
   *        Default properties are different from the constructor's defaults.
   * @param {PIXI.FORMATS} [options.format] - The format is not given, the type is inferred from the
   *        type of the buffer: `RGBA` if Float32Array, Int8Array, Uint8Array, or Uint8ClampedArray,
   *        otherwise `RGBA_INTEGER`.
   * @param {PIXI.TYPES} [options.type] - The type is not given, the type is inferred from the
   *        type of the buffer. Maps Float32Array to `FLOAT`, Int32Array to `INT`, Uint32Array to
   *        `UNSIGNED_INT`, Int16Array to `SHORT`, Uint16Array to `UNSIGNED_SHORT`, Int8Array to `BYTE`,
   *        Uint8Array/Uint8ClampedArray to `UNSIGNED_BYTE`.
   * @param {PIXI.ALPHA_MODES} [options.alphaMode=PIXI.ALPHA_MODES.NPM]
   * @param {PIXI.SCALE_MODES} [options.scaleMode=PIXI.SCALE_MODES.NEAREST]
   * @returns - The resulting new BaseTexture
   */
  static fromBuffer(t, e, r, s) {
    return new O(W.fromBuffer(t, e, r, s));
  }
  /**
   * Create a texture from a source and add to the cache.
   * @param {HTMLImageElement|HTMLVideoElement|ImageBitmap|PIXI.ICanvas|string} source - The input source.
   * @param imageUrl - File name of texture, for cache and resolving resolution.
   * @param name - Human readable name for the texture cache. If no name is
   *        specified, only `imageUrl` will be used as the cache ID.
   * @param options
   * @returns - Output texture
   */
  static fromLoader(t, e, r, s) {
    const n = new W(t, Object.assign({
      scaleMode: W.defaultOptions.scaleMode,
      resolution: Ae(e)
    }, s)), { resource: a } = n;
    a instanceof Xl && (a.url = e);
    const o = new O(n);
    return r || (r = e), W.addToCache(o.baseTexture, r), O.addToCache(o, r), r !== e && (W.addToCache(o.baseTexture, e), O.addToCache(o, e)), o.baseTexture.valid ? Promise.resolve(o) : new Promise((h) => {
      o.baseTexture.once("loaded", () => h(o));
    });
  }
  /**
   * Adds a Texture to the global TextureCache. This cache is shared across the whole PIXI object.
   * @param texture - The Texture to add to the cache.
   * @param id - The id that the Texture will be stored against.
   */
  static addToCache(t, e) {
    e && (t.textureCacheIds.includes(e) || t.textureCacheIds.push(e), ee[e] && ee[e] !== t && console.warn(`Texture added to the cache with an id [${e}] that already had an entry`), ee[e] = t);
  }
  /**
   * Remove a Texture from the global TextureCache.
   * @param texture - id of a Texture to be removed, or a Texture instance itself
   * @returns - The Texture that was removed
   */
  static removeFromCache(t) {
    if (typeof t == "string") {
      const e = ee[t];
      if (e) {
        const r = e.textureCacheIds.indexOf(t);
        return r > -1 && e.textureCacheIds.splice(r, 1), delete ee[t], e;
      }
    } else if (t != null && t.textureCacheIds) {
      for (let e = 0; e < t.textureCacheIds.length; ++e)
        ee[t.textureCacheIds[e]] === t && delete ee[t.textureCacheIds[e]];
      return t.textureCacheIds.length = 0, t;
    }
    return null;
  }
  /**
   * Returns resolution of baseTexture
   * @readonly
   */
  get resolution() {
    return this.baseTexture.resolution;
  }
  /**
   * The frame specifies the region of the base texture that this texture uses.
   * Please call `updateUvs()` after you change coordinates of `frame` manually.
   */
  get frame() {
    return this._frame;
  }
  set frame(t) {
    this._frame = t, this.noFrame = !1;
    const { x: e, y: r, width: s, height: n } = t, a = e + s > this.baseTexture.width, o = r + n > this.baseTexture.height;
    if (a || o) {
      const h = a && o ? "and" : "or", l = `X: ${e} + ${s} = ${e + s} > ${this.baseTexture.width}`, u = `Y: ${r} + ${n} = ${r + n} > ${this.baseTexture.height}`;
      throw new Error(`Texture Error: frame does not fit inside the base Texture dimensions: ${l} ${h} ${u}`);
    }
    this.valid = s && n && this.baseTexture.valid, !this.trim && !this.rotate && (this.orig = t), this.valid && this.updateUvs();
  }
  /**
   * Indicates whether the texture is rotated inside the atlas
   * set to 2 to compensate for texture packer rotation
   * set to 6 to compensate for spine packer rotation
   * can be used to rotate or mirror sprites
   * See {@link PIXI.groupD8} for explanation
   */
  get rotate() {
    return this._rotate;
  }
  set rotate(t) {
    this._rotate = t, this.valid && this.updateUvs();
  }
  /** The width of the Texture in pixels. */
  get width() {
    return this.orig.width;
  }
  /** The height of the Texture in pixels. */
  get height() {
    return this.orig.height;
  }
  /** Utility function for BaseTexture|Texture cast. */
  castToBaseTexture() {
    return this.baseTexture;
  }
  /** An empty texture, used often to not have to create multiple empty textures. Can not be destroyed. */
  static get EMPTY() {
    return O._EMPTY || (O._EMPTY = new O(new W()), Ni(O._EMPTY), Ni(O._EMPTY.baseTexture)), O._EMPTY;
  }
  /** A white texture of 16x16 size, used for graphics and other things Can not be destroyed. */
  static get WHITE() {
    if (!O._WHITE) {
      const t = L.ADAPTER.createCanvas(16, 16), e = t.getContext("2d");
      t.width = 16, t.height = 16, e.fillStyle = "white", e.fillRect(0, 0, 16, 16), O._WHITE = new O(W.from(t)), Ni(O._WHITE), Ni(O._WHITE.baseTexture);
    }
    return O._WHITE;
  }
}
class lr extends O {
  /**
   * @param baseRenderTexture - The base texture object that this texture uses.
   * @param frame - The rectangle frame of the texture to show.
   */
  constructor(t, e) {
    super(t, e), this.valid = !0, this.filterFrame = null, this.filterPoolKey = null, this.updateUvs();
  }
  /**
   * Shortcut to `this.baseTexture.framebuffer`, saves baseTexture cast.
   * @readonly
   */
  get framebuffer() {
    return this.baseTexture.framebuffer;
  }
  /**
   * Shortcut to `this.framebuffer.multisample`.
   * @default PIXI.MSAA_QUALITY.NONE
   */
  get multisample() {
    return this.framebuffer.multisample;
  }
  set multisample(t) {
    this.framebuffer.multisample = t;
  }
  /**
   * Resizes the RenderTexture.
   * @param desiredWidth - The desired width to resize to.
   * @param desiredHeight - The desired height to resize to.
   * @param resizeBaseTexture - Should the baseTexture.width and height values be resized as well?
   */
  resize(t, e, r = !0) {
    const s = this.baseTexture.resolution, n = Math.round(t * s) / s, a = Math.round(e * s) / s;
    this.valid = n > 0 && a > 0, this._frame.width = this.orig.width = n, this._frame.height = this.orig.height = a, r && this.baseTexture.resize(n, a), this.updateUvs();
  }
  /**
   * Changes the resolution of baseTexture, but does not change framebuffer size.
   * @param resolution - The new resolution to apply to RenderTexture
   */
  setResolution(t) {
    const { baseTexture: e } = this;
    e.resolution !== t && (e.setResolution(t), this.resize(e.width, e.height, !1));
  }
  /**
   * A short hand way of creating a render texture.
   * @param options - Options
   * @param {number} [options.width=100] - The width of the render texture
   * @param {number} [options.height=100] - The height of the render texture
   * @param {PIXI.SCALE_MODES} [options.scaleMode=PIXI.BaseTexture.defaultOptions.scaleMode] - See {@link PIXI.SCALE_MODES}
   *    for possible values
   * @param {number} [options.resolution=PIXI.settings.RESOLUTION] - The resolution / device pixel ratio of the texture
   *    being generated
   * @param {PIXI.MSAA_QUALITY} [options.multisample=PIXI.MSAA_QUALITY.NONE] - The number of samples of the frame buffer
   * @returns The new render texture
   */
  static create(t) {
    return new lr(new zl(t));
  }
}
class Wl {
  /**
   * @param textureOptions - options that will be passed to BaseRenderTexture constructor
   * @param {PIXI.SCALE_MODES} [textureOptions.scaleMode] - See {@link PIXI.SCALE_MODES} for possible values.
   */
  constructor(t) {
    this.texturePool = {}, this.textureOptions = t || {}, this.enableFullScreen = !1, this._pixelsWidth = 0, this._pixelsHeight = 0;
  }
  /**
   * Creates texture with params that were specified in pool constructor.
   * @param realWidth - Width of texture in pixels.
   * @param realHeight - Height of texture in pixels.
   * @param multisample - Number of samples of the framebuffer.
   */
  createTexture(t, e, r = ft.NONE) {
    const s = new zl(Object.assign({
      width: t,
      height: e,
      resolution: 1,
      multisample: r
    }, this.textureOptions));
    return new lr(s);
  }
  /**
   * Gets a Power-of-Two render texture or fullScreen texture
   * @param minWidth - The minimum width of the render texture.
   * @param minHeight - The minimum height of the render texture.
   * @param resolution - The resolution of the render texture.
   * @param multisample - Number of samples of the render texture.
   * @returns The new render texture.
   */
  getOptimalTexture(t, e, r = 1, s = ft.NONE) {
    let n;
    t = Math.max(Math.ceil(t * r - 1e-6), 1), e = Math.max(Math.ceil(e * r - 1e-6), 1), !this.enableFullScreen || t !== this._pixelsWidth || e !== this._pixelsHeight ? (t = fs(t), e = fs(e), n = ((t & 65535) << 16 | e & 65535) >>> 0, s > 1 && (n += s * 4294967296)) : n = s > 1 ? -s : -1, this.texturePool[n] || (this.texturePool[n] = []);
    let a = this.texturePool[n].pop();
    return a || (a = this.createTexture(t, e, s)), a.filterPoolKey = n, a.setResolution(r), a;
  }
  /**
   * Gets extra texture of the same size as input renderTexture
   *
   * `getFilterTexture(input, 0.5)` or `getFilterTexture(0.5, input)`
   * @param input - renderTexture from which size and resolution will be copied
   * @param resolution - override resolution of the renderTexture
   *  It overrides, it does not multiply
   * @param multisample - number of samples of the renderTexture
   */
  getFilterTexture(t, e, r) {
    const s = this.getOptimalTexture(
      t.width,
      t.height,
      e || t.resolution,
      r || ft.NONE
    );
    return s.filterFrame = t.filterFrame, s;
  }
  /**
   * Place a render texture back into the pool.
   * @param renderTexture - The renderTexture to free
   */
  returnTexture(t) {
    const e = t.filterPoolKey;
    t.filterFrame = null, this.texturePool[e].push(t);
  }
  /**
   * Alias for returnTexture, to be compliant with FilterSystem interface.
   * @param renderTexture - The renderTexture to free
   */
  returnFilterTexture(t) {
    this.returnTexture(t);
  }
  /**
   * Clears the pool.
   * @param destroyTextures - Destroy all stored textures.
   */
  clear(t) {
    if (t = t !== !1, t)
      for (const e in this.texturePool) {
        const r = this.texturePool[e];
        if (r)
          for (let s = 0; s < r.length; s++)
            r[s].destroy(!0);
      }
    this.texturePool = {};
  }
  /**
   * If screen size was changed, drops all screen-sized textures,
   * sets new screen size, sets `enableFullScreen` to true
   *
   * Size is measured in pixels, `renderer.view` can be passed here, not `renderer.screen`
   * @param size - Initial size of screen.
   */
  setScreenSize(t) {
    if (!(t.width === this._pixelsWidth && t.height === this._pixelsHeight)) {
      this.enableFullScreen = t.width > 0 && t.height > 0;
      for (const e in this.texturePool) {
        if (!(Number(e) < 0))
          continue;
        const r = this.texturePool[e];
        if (r)
          for (let s = 0; s < r.length; s++)
            r[s].destroy(!0);
        this.texturePool[e] = [];
      }
      this._pixelsWidth = t.width, this._pixelsHeight = t.height;
    }
  }
}
Wl.SCREEN_KEY = -1;
class Fm extends ke {
  constructor() {
    super(), this.addAttribute("aVertexPosition", new Float32Array([
      0,
      0,
      1,
      0,
      1,
      1,
      0,
      1
    ])).addIndex([0, 1, 3, 2]);
  }
}
class jl extends ke {
  constructor() {
    super(), this.vertices = new Float32Array([
      -1,
      -1,
      1,
      -1,
      1,
      1,
      -1,
      1
    ]), this.uvs = new Float32Array([
      0,
      0,
      1,
      0,
      1,
      1,
      0,
      1
    ]), this.vertexBuffer = new ut(this.vertices), this.uvBuffer = new ut(this.uvs), this.addAttribute("aVertexPosition", this.vertexBuffer).addAttribute("aTextureCoord", this.uvBuffer).addIndex([0, 1, 2, 0, 2, 3]);
  }
  /**
   * Maps two Rectangle to the quad.
   * @param targetTextureFrame - The first rectangle
   * @param destinationFrame - The second rectangle
   * @returns - Returns itself.
   */
  map(t, e) {
    let r = 0, s = 0;
    return this.uvs[0] = r, this.uvs[1] = s, this.uvs[2] = r + e.width / t.width, this.uvs[3] = s, this.uvs[4] = r + e.width / t.width, this.uvs[5] = s + e.height / t.height, this.uvs[6] = r, this.uvs[7] = s + e.height / t.height, r = e.x, s = e.y, this.vertices[0] = r, this.vertices[1] = s, this.vertices[2] = r + e.width, this.vertices[3] = s, this.vertices[4] = r + e.width, this.vertices[5] = s + e.height, this.vertices[6] = r, this.vertices[7] = s + e.height, this.invalidate(), this;
  }
  /**
   * Legacy upload method, just marks buffers dirty.
   * @returns - Returns itself.
   */
  invalidate() {
    return this.vertexBuffer._updateID++, this.uvBuffer._updateID++, this;
  }
}
class Om {
  constructor() {
    this.renderTexture = null, this.target = null, this.legacy = !1, this.resolution = 1, this.multisample = ft.NONE, this.sourceFrame = new j(), this.destinationFrame = new j(), this.bindingSourceFrame = new j(), this.bindingDestinationFrame = new j(), this.filters = [], this.transform = null;
  }
  /** Clears the state */
  clear() {
    this.target = null, this.filters = null, this.renderTexture = null;
  }
}
const Li = [new K(), new K(), new K(), new K()], _n = new rt();
class Yl {
  /**
   * @param renderer - The renderer this System works for.
   */
  constructor(t) {
    this.renderer = t, this.defaultFilterStack = [{}], this.texturePool = new Wl(), this.statePool = [], this.quad = new Fm(), this.quadUv = new jl(), this.tempRect = new j(), this.activeState = {}, this.globalUniforms = new jt({
      outputFrame: new j(),
      inputSize: new Float32Array(4),
      inputPixel: new Float32Array(4),
      inputClamp: new Float32Array(4),
      resolution: 1,
      // legacy variables
      filterArea: new Float32Array(4),
      filterClamp: new Float32Array(4)
    }, !0), this.forceClear = !1, this.useMaxPadding = !1;
  }
  init() {
    this.texturePool.setScreenSize(this.renderer.view);
  }
  /**
   * Pushes a set of filters to be applied later to the system. This will redirect further rendering into an
   * input render-texture for the rest of the filtering pipeline.
   * @param {PIXI.DisplayObject} target - The target of the filter to render.
   * @param filters - The filters to apply.
   */
  push(t, e) {
    const r = this.renderer, s = this.defaultFilterStack, n = this.statePool.pop() || new Om(), a = r.renderTexture;
    let o, h;
    if (a.current) {
      const y = a.current;
      o = y.resolution, h = y.multisample;
    } else
      o = r.resolution, h = r.multisample;
    let l = e[0].resolution || o, u = e[0].multisample ?? h, c = e[0].padding, d = e[0].autoFit, f = e[0].legacy ?? !0;
    for (let y = 1; y < e.length; y++) {
      const v = e[y];
      l = Math.min(l, v.resolution || o), u = Math.min(u, v.multisample ?? h), c = this.useMaxPadding ? Math.max(c, v.padding) : c + v.padding, d = d && v.autoFit, f = f || (v.legacy ?? !0);
    }
    s.length === 1 && (this.defaultFilterStack[0].renderTexture = a.current), s.push(n), n.resolution = l, n.multisample = u, n.legacy = f, n.target = t, n.sourceFrame.copyFrom(t.filterArea || t.getBounds(!0)), n.sourceFrame.pad(c);
    const p = this.tempRect.copyFrom(a.sourceFrame);
    r.projection.transform && this.transformAABB(
      _n.copyFrom(r.projection.transform).invert(),
      p
    ), d ? (n.sourceFrame.fit(p), (n.sourceFrame.width <= 0 || n.sourceFrame.height <= 0) && (n.sourceFrame.width = 0, n.sourceFrame.height = 0)) : n.sourceFrame.intersects(p) || (n.sourceFrame.width = 0, n.sourceFrame.height = 0), this.roundFrame(
      n.sourceFrame,
      a.current ? a.current.resolution : r.resolution,
      a.sourceFrame,
      a.destinationFrame,
      r.projection.transform
    ), n.renderTexture = this.getOptimalFilterTexture(
      n.sourceFrame.width,
      n.sourceFrame.height,
      l,
      u
    ), n.filters = e, n.destinationFrame.width = n.renderTexture.width, n.destinationFrame.height = n.renderTexture.height;
    const m = this.tempRect;
    m.x = 0, m.y = 0, m.width = n.sourceFrame.width, m.height = n.sourceFrame.height, n.renderTexture.filterFrame = n.sourceFrame, n.bindingSourceFrame.copyFrom(a.sourceFrame), n.bindingDestinationFrame.copyFrom(a.destinationFrame), n.transform = r.projection.transform, r.projection.transform = null, a.bind(n.renderTexture, n.sourceFrame, m), r.framebuffer.clear(0, 0, 0, 0);
  }
  /** Pops off the filter and applies it. */
  pop() {
    const t = this.defaultFilterStack, e = t.pop(), r = e.filters;
    this.activeState = e;
    const s = this.globalUniforms.uniforms;
    s.outputFrame = e.sourceFrame, s.resolution = e.resolution;
    const n = s.inputSize, a = s.inputPixel, o = s.inputClamp;
    if (n[0] = e.destinationFrame.width, n[1] = e.destinationFrame.height, n[2] = 1 / n[0], n[3] = 1 / n[1], a[0] = Math.round(n[0] * e.resolution), a[1] = Math.round(n[1] * e.resolution), a[2] = 1 / a[0], a[3] = 1 / a[1], o[0] = 0.5 * a[2], o[1] = 0.5 * a[3], o[2] = e.sourceFrame.width * n[2] - 0.5 * a[2], o[3] = e.sourceFrame.height * n[3] - 0.5 * a[3], e.legacy) {
      const l = s.filterArea;
      l[0] = e.destinationFrame.width, l[1] = e.destinationFrame.height, l[2] = e.sourceFrame.x, l[3] = e.sourceFrame.y, s.filterClamp = s.inputClamp;
    }
    this.globalUniforms.update();
    const h = t[t.length - 1];
    if (this.renderer.framebuffer.blit(), r.length === 1)
      r[0].apply(this, e.renderTexture, h.renderTexture, ne.BLEND, e), this.returnFilterTexture(e.renderTexture);
    else {
      let l = e.renderTexture, u = this.getOptimalFilterTexture(
        l.width,
        l.height,
        e.resolution
      );
      u.filterFrame = l.filterFrame;
      let c = 0;
      for (c = 0; c < r.length - 1; ++c) {
        c === 1 && e.multisample > 1 && (u = this.getOptimalFilterTexture(
          l.width,
          l.height,
          e.resolution
        ), u.filterFrame = l.filterFrame), r[c].apply(this, l, u, ne.CLEAR, e);
        const d = l;
        l = u, u = d;
      }
      r[c].apply(this, l, h.renderTexture, ne.BLEND, e), c > 1 && e.multisample > 1 && this.returnFilterTexture(e.renderTexture), this.returnFilterTexture(l), this.returnFilterTexture(u);
    }
    e.clear(), this.statePool.push(e);
  }
  /**
   * Binds a renderTexture with corresponding `filterFrame`, clears it if mode corresponds.
   * @param filterTexture - renderTexture to bind, should belong to filter pool or filter stack
   * @param clearMode - clearMode, by default its CLEAR/YES. See {@link PIXI.CLEAR_MODES}
   */
  bindAndClear(t, e = ne.CLEAR) {
    const {
      renderTexture: r,
      state: s
    } = this.renderer;
    if (t === this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture ? this.renderer.projection.transform = this.activeState.transform : this.renderer.projection.transform = null, t == null ? void 0 : t.filterFrame) {
      const a = this.tempRect;
      a.x = 0, a.y = 0, a.width = t.filterFrame.width, a.height = t.filterFrame.height, r.bind(t, t.filterFrame, a);
    } else
      t !== this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture ? r.bind(t) : this.renderer.renderTexture.bind(
        t,
        this.activeState.bindingSourceFrame,
        this.activeState.bindingDestinationFrame
      );
    const n = s.stateId & 1 || this.forceClear;
    (e === ne.CLEAR || e === ne.BLIT && n) && this.renderer.framebuffer.clear(0, 0, 0, 0);
  }
  /**
   * Draws a filter using the default rendering process.
   *
   * This should be called only by {@link PIXI.Filter#apply}.
   * @param filter - The filter to draw.
   * @param input - The input render target.
   * @param output - The target to output to.
   * @param clearMode - Should the output be cleared before rendering to it
   */
  applyFilter(t, e, r, s) {
    const n = this.renderer;
    n.state.set(t.state), this.bindAndClear(r, s), t.uniforms.uSampler = e, t.uniforms.filterGlobals = this.globalUniforms, n.shader.bind(t), t.legacy = !!t.program.attributeData.aTextureCoord, t.legacy ? (this.quadUv.map(e._frame, e.filterFrame), n.geometry.bind(this.quadUv), n.geometry.draw(oe.TRIANGLES)) : (n.geometry.bind(this.quad), n.geometry.draw(oe.TRIANGLE_STRIP));
  }
  /**
   * Multiply _input normalized coordinates_ to this matrix to get _sprite texture normalized coordinates_.
   *
   * Use `outputMatrix * vTextureCoord` in the shader.
   * @param outputMatrix - The matrix to output to.
   * @param {PIXI.Sprite} sprite - The sprite to map to.
   * @returns The mapped matrix.
   */
  calculateSpriteMatrix(t, e) {
    const { sourceFrame: r, destinationFrame: s } = this.activeState, { orig: n } = e._texture, a = t.set(
      s.width,
      0,
      0,
      s.height,
      r.x,
      r.y
    ), o = e.worldTransform.copyTo(rt.TEMP_MATRIX);
    return o.invert(), a.prepend(o), a.scale(1 / n.width, 1 / n.height), a.translate(e.anchor.x, e.anchor.y), a;
  }
  /** Destroys this Filter System. */
  destroy() {
    this.renderer = null, this.texturePool.clear(!1);
  }
  /**
   * Gets a Power-of-Two render texture or fullScreen texture
   * @param minWidth - The minimum width of the render texture in real pixels.
   * @param minHeight - The minimum height of the render texture in real pixels.
   * @param resolution - The resolution of the render texture.
   * @param multisample - Number of samples of the render texture.
   * @returns - The new render texture.
   */
  getOptimalFilterTexture(t, e, r = 1, s = ft.NONE) {
    return this.texturePool.getOptimalTexture(t, e, r, s);
  }
  /**
   * Gets extra render texture to use inside current filter
   * To be compliant with older filters, you can use params in any order
   * @param input - renderTexture from which size and resolution will be copied
   * @param resolution - override resolution of the renderTexture
   * @param multisample - number of samples of the renderTexture
   */
  getFilterTexture(t, e, r) {
    if (typeof t == "number") {
      const n = t;
      t = e, e = n;
    }
    t = t || this.activeState.renderTexture;
    const s = this.texturePool.getOptimalTexture(
      t.width,
      t.height,
      e || t.resolution,
      r || ft.NONE
    );
    return s.filterFrame = t.filterFrame, s;
  }
  /**
   * Frees a render texture back into the pool.
   * @param renderTexture - The renderTarget to free
   */
  returnFilterTexture(t) {
    this.texturePool.returnTexture(t);
  }
  /** Empties the texture pool. */
  emptyPool() {
    this.texturePool.clear(!0);
  }
  /** Calls `texturePool.resize()`, affects fullScreen renderTextures. */
  resize() {
    this.texturePool.setScreenSize(this.renderer.view);
  }
  /**
   * @param matrix - first param
   * @param rect - second param
   */
  transformAABB(t, e) {
    const r = Li[0], s = Li[1], n = Li[2], a = Li[3];
    r.set(e.left, e.top), s.set(e.left, e.bottom), n.set(e.right, e.top), a.set(e.right, e.bottom), t.apply(r, r), t.apply(s, s), t.apply(n, n), t.apply(a, a);
    const o = Math.min(r.x, s.x, n.x, a.x), h = Math.min(r.y, s.y, n.y, a.y), l = Math.max(r.x, s.x, n.x, a.x), u = Math.max(r.y, s.y, n.y, a.y);
    e.x = o, e.y = h, e.width = l - o, e.height = u - h;
  }
  roundFrame(t, e, r, s, n) {
    if (!(t.width <= 0 || t.height <= 0 || r.width <= 0 || r.height <= 0)) {
      if (n) {
        const { a, b: o, c: h, d: l } = n;
        if ((Math.abs(o) > 1e-4 || Math.abs(h) > 1e-4) && (Math.abs(a) > 1e-4 || Math.abs(l) > 1e-4))
          return;
      }
      n = n ? _n.copyFrom(n) : _n.identity(), n.translate(-r.x, -r.y).scale(
        s.width / r.width,
        s.height / r.height
      ).translate(s.x, s.y), this.transformAABB(n, t), t.ceil(e), this.transformAABB(n.invert(), t);
    }
  }
}
Yl.extension = {
  type: F.RendererSystem,
  name: "filter"
};
k.add(Yl);
class Nm {
  constructor(t) {
    this.framebuffer = t, this.stencil = null, this.dirtyId = -1, this.dirtyFormat = -1, this.dirtySize = -1, this.multisample = ft.NONE, this.msaaBuffer = null, this.blitFramebuffer = null, this.mipLevel = 0;
  }
}
const Lm = new j();
class ql {
  /**
   * @param renderer - The renderer this System works for.
   */
  constructor(t) {
    this.renderer = t, this.managedFramebuffers = [], this.unknownFramebuffer = new ha(10, 10), this.msaaSamples = null;
  }
  /** Sets up the renderer context and necessary buffers. */
  contextChange() {
    this.disposeAll(!0);
    const t = this.gl = this.renderer.gl;
    if (this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.current = this.unknownFramebuffer, this.viewport = new j(), this.hasMRT = !0, this.writeDepthTexture = !0, this.renderer.context.webGLVersion === 1) {
      let e = this.renderer.context.extensions.drawBuffers, r = this.renderer.context.extensions.depthTexture;
      L.PREFER_ENV === hr.WEBGL_LEGACY && (e = null, r = null), e ? t.drawBuffers = (s) => e.drawBuffersWEBGL(s) : (this.hasMRT = !1, t.drawBuffers = () => {
      }), r || (this.writeDepthTexture = !1);
    } else
      this.msaaSamples = t.getInternalformatParameter(t.RENDERBUFFER, t.RGBA8, t.SAMPLES);
  }
  /**
   * Bind a framebuffer.
   * @param framebuffer
   * @param frame - frame, default is framebuffer size
   * @param mipLevel - optional mip level to set on the framebuffer - defaults to 0
   */
  bind(t, e, r = 0) {
    const { gl: s } = this;
    if (t) {
      const n = t.glFramebuffers[this.CONTEXT_UID] || this.initFramebuffer(t);
      this.current !== t && (this.current = t, s.bindFramebuffer(s.FRAMEBUFFER, n.framebuffer)), n.mipLevel !== r && (t.dirtyId++, t.dirtyFormat++, n.mipLevel = r), n.dirtyId !== t.dirtyId && (n.dirtyId = t.dirtyId, n.dirtyFormat !== t.dirtyFormat ? (n.dirtyFormat = t.dirtyFormat, n.dirtySize = t.dirtySize, this.updateFramebuffer(t, r)) : n.dirtySize !== t.dirtySize && (n.dirtySize = t.dirtySize, this.resizeFramebuffer(t)));
      for (let a = 0; a < t.colorTextures.length; a++) {
        const o = t.colorTextures[a];
        this.renderer.texture.unbind(o.parentTextureArray || o);
      }
      if (t.depthTexture && this.renderer.texture.unbind(t.depthTexture), e) {
        const a = e.width >> r, o = e.height >> r, h = a / e.width;
        this.setViewport(
          e.x * h,
          e.y * h,
          a,
          o
        );
      } else {
        const a = t.width >> r, o = t.height >> r;
        this.setViewport(0, 0, a, o);
      }
    } else
      this.current && (this.current = null, s.bindFramebuffer(s.FRAMEBUFFER, null)), e ? this.setViewport(e.x, e.y, e.width, e.height) : this.setViewport(0, 0, this.renderer.width, this.renderer.height);
  }
  /**
   * Set the WebGLRenderingContext's viewport.
   * @param x - X position of viewport
   * @param y - Y position of viewport
   * @param width - Width of viewport
   * @param height - Height of viewport
   */
  setViewport(t, e, r, s) {
    const n = this.viewport;
    t = Math.round(t), e = Math.round(e), r = Math.round(r), s = Math.round(s), (n.width !== r || n.height !== s || n.x !== t || n.y !== e) && (n.x = t, n.y = e, n.width = r, n.height = s, this.gl.viewport(t, e, r, s));
  }
  /**
   * Get the size of the current width and height. Returns object with `width` and `height` values.
   * @readonly
   */
  get size() {
    return this.current ? { x: 0, y: 0, width: this.current.width, height: this.current.height } : { x: 0, y: 0, width: this.renderer.width, height: this.renderer.height };
  }
  /**
   * Clear the color of the context
   * @param r - Red value from 0 to 1
   * @param g - Green value from 0 to 1
   * @param b - Blue value from 0 to 1
   * @param a - Alpha value from 0 to 1
   * @param {PIXI.BUFFER_BITS} [mask=BUFFER_BITS.COLOR | BUFFER_BITS.DEPTH] - Bitwise OR of masks
   *  that indicate the buffers to be cleared, by default COLOR and DEPTH buffers.
   */
  clear(t, e, r, s, n = On.COLOR | On.DEPTH) {
    const { gl: a } = this;
    a.clearColor(t, e, r, s), a.clear(n);
  }
  /**
   * Initialize framebuffer for this context
   * @protected
   * @param framebuffer
   * @returns - created GLFramebuffer
   */
  initFramebuffer(t) {
    const { gl: e } = this, r = new Nm(e.createFramebuffer());
    return r.multisample = this.detectSamples(t.multisample), t.glFramebuffers[this.CONTEXT_UID] = r, this.managedFramebuffers.push(t), t.disposeRunner.add(this), r;
  }
  /**
   * Resize the framebuffer
   * @param framebuffer
   * @protected
   */
  resizeFramebuffer(t) {
    const { gl: e } = this, r = t.glFramebuffers[this.CONTEXT_UID];
    if (r.stencil) {
      e.bindRenderbuffer(e.RENDERBUFFER, r.stencil);
      let a;
      this.renderer.context.webGLVersion === 1 ? a = e.DEPTH_STENCIL : t.depth && t.stencil ? a = e.DEPTH24_STENCIL8 : t.depth ? a = e.DEPTH_COMPONENT24 : a = e.STENCIL_INDEX8, r.msaaBuffer ? e.renderbufferStorageMultisample(
        e.RENDERBUFFER,
        r.multisample,
        a,
        t.width,
        t.height
      ) : e.renderbufferStorage(e.RENDERBUFFER, a, t.width, t.height);
    }
    const s = t.colorTextures;
    let n = s.length;
    e.drawBuffers || (n = Math.min(n, 1));
    for (let a = 0; a < n; a++) {
      const o = s[a], h = o.parentTextureArray || o;
      this.renderer.texture.bind(h, 0), a === 0 && r.msaaBuffer && (e.bindRenderbuffer(e.RENDERBUFFER, r.msaaBuffer), e.renderbufferStorageMultisample(
        e.RENDERBUFFER,
        r.multisample,
        h._glTextures[this.CONTEXT_UID].internalFormat,
        t.width,
        t.height
      ));
    }
    t.depthTexture && this.writeDepthTexture && this.renderer.texture.bind(t.depthTexture, 0);
  }
  /**
   * Update the framebuffer
   * @param framebuffer
   * @param mipLevel
   * @protected
   */
  updateFramebuffer(t, e) {
    const { gl: r } = this, s = t.glFramebuffers[this.CONTEXT_UID], n = t.colorTextures;
    let a = n.length;
    r.drawBuffers || (a = Math.min(a, 1)), s.multisample > 1 && this.canMultisampleFramebuffer(t) ? s.msaaBuffer = s.msaaBuffer || r.createRenderbuffer() : s.msaaBuffer && (r.deleteRenderbuffer(s.msaaBuffer), s.msaaBuffer = null, s.blitFramebuffer && (s.blitFramebuffer.dispose(), s.blitFramebuffer = null));
    const o = [];
    for (let h = 0; h < a; h++) {
      const l = n[h], u = l.parentTextureArray || l;
      this.renderer.texture.bind(u, 0), h === 0 && s.msaaBuffer ? (r.bindRenderbuffer(r.RENDERBUFFER, s.msaaBuffer), r.renderbufferStorageMultisample(
        r.RENDERBUFFER,
        s.multisample,
        u._glTextures[this.CONTEXT_UID].internalFormat,
        t.width,
        t.height
      ), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.RENDERBUFFER, s.msaaBuffer)) : (r.framebufferTexture2D(
        r.FRAMEBUFFER,
        r.COLOR_ATTACHMENT0 + h,
        l.target,
        u._glTextures[this.CONTEXT_UID].texture,
        e
      ), o.push(r.COLOR_ATTACHMENT0 + h));
    }
    if (o.length > 1 && r.drawBuffers(o), t.depthTexture && this.writeDepthTexture) {
      const h = t.depthTexture;
      this.renderer.texture.bind(h, 0), r.framebufferTexture2D(
        r.FRAMEBUFFER,
        r.DEPTH_ATTACHMENT,
        r.TEXTURE_2D,
        h._glTextures[this.CONTEXT_UID].texture,
        e
      );
    }
    if ((t.stencil || t.depth) && !(t.depthTexture && this.writeDepthTexture)) {
      s.stencil = s.stencil || r.createRenderbuffer();
      let h, l;
      this.renderer.context.webGLVersion === 1 ? (h = r.DEPTH_STENCIL_ATTACHMENT, l = r.DEPTH_STENCIL) : t.depth && t.stencil ? (h = r.DEPTH_STENCIL_ATTACHMENT, l = r.DEPTH24_STENCIL8) : t.depth ? (h = r.DEPTH_ATTACHMENT, l = r.DEPTH_COMPONENT24) : (h = r.STENCIL_ATTACHMENT, l = r.STENCIL_INDEX8), r.bindRenderbuffer(r.RENDERBUFFER, s.stencil), s.msaaBuffer ? r.renderbufferStorageMultisample(
        r.RENDERBUFFER,
        s.multisample,
        l,
        t.width,
        t.height
      ) : r.renderbufferStorage(r.RENDERBUFFER, l, t.width, t.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, h, r.RENDERBUFFER, s.stencil);
    } else
      s.stencil && (r.deleteRenderbuffer(s.stencil), s.stencil = null);
  }
  /**
   * Returns true if the frame buffer can be multisampled.
   * @param framebuffer
   */
  canMultisampleFramebuffer(t) {
    return this.renderer.context.webGLVersion !== 1 && t.colorTextures.length <= 1 && !t.depthTexture;
  }
  /**
   * Detects number of samples that is not more than a param but as close to it as possible
   * @param samples - number of samples
   * @returns - recommended number of samples
   */
  detectSamples(t) {
    const { msaaSamples: e } = this;
    let r = ft.NONE;
    if (t <= 1 || e === null)
      return r;
    for (let s = 0; s < e.length; s++)
      if (e[s] <= t) {
        r = e[s];
        break;
      }
    return r === 1 && (r = ft.NONE), r;
  }
  /**
   * Only works with WebGL2
   *
   * blits framebuffer to another of the same or bigger size
   * after that target framebuffer is bound
   *
   * Fails with WebGL warning if blits multisample framebuffer to different size
   * @param framebuffer - by default it blits "into itself", from renderBuffer to texture.
   * @param sourcePixels - source rectangle in pixels
   * @param destPixels - dest rectangle in pixels, assumed to be the same as sourcePixels
   */
  blit(t, e, r) {
    const { current: s, renderer: n, gl: a, CONTEXT_UID: o } = this;
    if (n.context.webGLVersion !== 2 || !s)
      return;
    const h = s.glFramebuffers[o];
    if (!h)
      return;
    if (!t) {
      if (!h.msaaBuffer)
        return;
      const u = s.colorTextures[0];
      if (!u)
        return;
      h.blitFramebuffer || (h.blitFramebuffer = new ha(s.width, s.height), h.blitFramebuffer.addColorTexture(0, u)), t = h.blitFramebuffer, t.colorTextures[0] !== u && (t.colorTextures[0] = u, t.dirtyId++, t.dirtyFormat++), (t.width !== s.width || t.height !== s.height) && (t.width = s.width, t.height = s.height, t.dirtyId++, t.dirtySize++);
    }
    e || (e = Lm, e.width = s.width, e.height = s.height), r || (r = e);
    const l = e.width === r.width && e.height === r.height;
    this.bind(t), a.bindFramebuffer(a.READ_FRAMEBUFFER, h.framebuffer), a.blitFramebuffer(
      e.left,
      e.top,
      e.right,
      e.bottom,
      r.left,
      r.top,
      r.right,
      r.bottom,
      a.COLOR_BUFFER_BIT,
      l ? a.NEAREST : a.LINEAR
    ), a.bindFramebuffer(a.READ_FRAMEBUFFER, t.glFramebuffers[this.CONTEXT_UID].framebuffer);
  }
  /**
   * Disposes framebuffer.
   * @param framebuffer - framebuffer that has to be disposed of
   * @param contextLost - If context was lost, we suppress all delete function calls
   */
  disposeFramebuffer(t, e) {
    const r = t.glFramebuffers[this.CONTEXT_UID], s = this.gl;
    if (!r)
      return;
    delete t.glFramebuffers[this.CONTEXT_UID];
    const n = this.managedFramebuffers.indexOf(t);
    n >= 0 && this.managedFramebuffers.splice(n, 1), t.disposeRunner.remove(this), e || (s.deleteFramebuffer(r.framebuffer), r.msaaBuffer && s.deleteRenderbuffer(r.msaaBuffer), r.stencil && s.deleteRenderbuffer(r.stencil)), r.blitFramebuffer && this.disposeFramebuffer(r.blitFramebuffer, e);
  }
  /**
   * Disposes all framebuffers, but not textures bound to them.
   * @param [contextLost=false] - If context was lost, we suppress all delete function calls
   */
  disposeAll(t) {
    const e = this.managedFramebuffers;
    this.managedFramebuffers = [];
    for (let r = 0; r < e.length; r++)
      this.disposeFramebuffer(e[r], t);
  }
  /**
   * Forcing creation of stencil buffer for current framebuffer, if it wasn't done before.
   * Used by MaskSystem, when its time to use stencil mask for Graphics element.
   *
   * Its an alternative for public lazy `framebuffer.enableStencil`, in case we need stencil without rebind.
   * @private
   */
  forceStencil() {
    const t = this.current;
    if (!t)
      return;
    const e = t.glFramebuffers[this.CONTEXT_UID];
    if (!e || e.stencil && t.stencil)
      return;
    t.stencil = !0;
    const r = t.width, s = t.height, n = this.gl, a = e.stencil = n.createRenderbuffer();
    n.bindRenderbuffer(n.RENDERBUFFER, a);
    let o, h;
    this.renderer.context.webGLVersion === 1 ? (o = n.DEPTH_STENCIL_ATTACHMENT, h = n.DEPTH_STENCIL) : t.depth ? (o = n.DEPTH_STENCIL_ATTACHMENT, h = n.DEPTH24_STENCIL8) : (o = n.STENCIL_ATTACHMENT, h = n.STENCIL_INDEX8), e.msaaBuffer ? n.renderbufferStorageMultisample(n.RENDERBUFFER, e.multisample, h, r, s) : n.renderbufferStorage(n.RENDERBUFFER, h, r, s), n.framebufferRenderbuffer(n.FRAMEBUFFER, o, n.RENDERBUFFER, a);
  }
  /** Resets framebuffer stored state, binds screen framebuffer. Should be called before renderTexture reset(). */
  reset() {
    this.current = this.unknownFramebuffer, this.viewport = new j();
  }
  destroy() {
    this.renderer = null;
  }
}
ql.extension = {
  type: F.RendererSystem,
  name: "framebuffer"
};
k.add(ql);
const vn = { 5126: 4, 5123: 2, 5121: 1 };
class Kl {
  /** @param renderer - The renderer this System works for. */
  constructor(t) {
    this.renderer = t, this._activeGeometry = null, this._activeVao = null, this.hasVao = !0, this.hasInstance = !0, this.canUseUInt32ElementIndex = !1, this.managedGeometries = {};
  }
  /** Sets up the renderer context and necessary buffers. */
  contextChange() {
    this.disposeAll(!0);
    const t = this.gl = this.renderer.gl, e = this.renderer.context;
    if (this.CONTEXT_UID = this.renderer.CONTEXT_UID, e.webGLVersion !== 2) {
      let r = this.renderer.context.extensions.vertexArrayObject;
      L.PREFER_ENV === hr.WEBGL_LEGACY && (r = null), r ? (t.createVertexArray = () => r.createVertexArrayOES(), t.bindVertexArray = (s) => r.bindVertexArrayOES(s), t.deleteVertexArray = (s) => r.deleteVertexArrayOES(s)) : (this.hasVao = !1, t.createVertexArray = () => null, t.bindVertexArray = () => null, t.deleteVertexArray = () => null);
    }
    if (e.webGLVersion !== 2) {
      const r = t.getExtension("ANGLE_instanced_arrays");
      r ? (t.vertexAttribDivisor = (s, n) => r.vertexAttribDivisorANGLE(s, n), t.drawElementsInstanced = (s, n, a, o, h) => r.drawElementsInstancedANGLE(s, n, a, o, h), t.drawArraysInstanced = (s, n, a, o) => r.drawArraysInstancedANGLE(s, n, a, o)) : this.hasInstance = !1;
    }
    this.canUseUInt32ElementIndex = e.webGLVersion === 2 || !!e.extensions.uint32ElementIndex;
  }
  /**
   * Binds geometry so that is can be drawn. Creating a Vao if required
   * @param geometry - Instance of geometry to bind.
   * @param shader - Instance of shader to use vao for.
   */
  bind(t, e) {
    e = e || this.renderer.shader.shader;
    const { gl: r } = this;
    let s = t.glVertexArrayObjects[this.CONTEXT_UID], n = !1;
    s || (this.managedGeometries[t.id] = t, t.disposeRunner.add(this), t.glVertexArrayObjects[this.CONTEXT_UID] = s = {}, n = !0);
    const a = s[e.program.id] || this.initGeometryVao(t, e, n);
    this._activeGeometry = t, this._activeVao !== a && (this._activeVao = a, this.hasVao ? r.bindVertexArray(a) : this.activateVao(t, e.program)), this.updateBuffers();
  }
  /** Reset and unbind any active VAO and geometry. */
  reset() {
    this.unbind();
  }
  /** Update buffers of the currently bound geometry. */
  updateBuffers() {
    const t = this._activeGeometry, e = this.renderer.buffer;
    for (let r = 0; r < t.buffers.length; r++) {
      const s = t.buffers[r];
      e.update(s);
    }
  }
  /**
   * Check compatibility between a geometry and a program
   * @param geometry - Geometry instance.
   * @param program - Program instance.
   */
  checkCompatibility(t, e) {
    const r = t.attributes, s = e.attributeData;
    for (const n in s)
      if (!r[n])
        throw new Error(`shader and geometry incompatible, geometry missing the "${n}" attribute`);
  }
  /**
   * Takes a geometry and program and generates a unique signature for them.
   * @param geometry - To get signature from.
   * @param program - To test geometry against.
   * @returns - Unique signature of the geometry and program
   */
  getSignature(t, e) {
    const r = t.attributes, s = e.attributeData, n = ["g", t.id];
    for (const a in r)
      s[a] && n.push(a, s[a].location);
    return n.join("-");
  }
  /**
   * Creates or gets Vao with the same structure as the geometry and stores it on the geometry.
   * If vao is created, it is bound automatically. We use a shader to infer what and how to set up the
   * attribute locations.
   * @param geometry - Instance of geometry to to generate Vao for.
   * @param shader - Instance of the shader.
   * @param incRefCount - Increment refCount of all geometry buffers.
   */
  initGeometryVao(t, e, r = !0) {
    const s = this.gl, n = this.CONTEXT_UID, a = this.renderer.buffer, o = e.program;
    o.glPrograms[n] || this.renderer.shader.generateProgram(e), this.checkCompatibility(t, o);
    const h = this.getSignature(t, o), l = t.glVertexArrayObjects[this.CONTEXT_UID];
    let u = l[h];
    if (u)
      return l[o.id] = u, u;
    const c = t.buffers, d = t.attributes, f = {}, p = {};
    for (const m in c)
      f[m] = 0, p[m] = 0;
    for (const m in d)
      !d[m].size && o.attributeData[m] ? d[m].size = o.attributeData[m].size : d[m].size || console.warn(`PIXI Geometry attribute '${m}' size cannot be determined (likely the bound shader does not have the attribute)`), f[d[m].buffer] += d[m].size * vn[d[m].type];
    for (const m in d) {
      const y = d[m], v = y.size;
      y.stride === void 0 && (f[y.buffer] === v * vn[y.type] ? y.stride = 0 : y.stride = f[y.buffer]), y.start === void 0 && (y.start = p[y.buffer], p[y.buffer] += v * vn[y.type]);
    }
    u = s.createVertexArray(), s.bindVertexArray(u);
    for (let m = 0; m < c.length; m++) {
      const y = c[m];
      a.bind(y), r && y._glBuffers[n].refCount++;
    }
    return this.activateVao(t, o), l[o.id] = u, l[h] = u, s.bindVertexArray(null), a.unbind(he.ARRAY_BUFFER), u;
  }
  /**
   * Disposes geometry.
   * @param geometry - Geometry with buffers. Only VAO will be disposed
   * @param [contextLost=false] - If context was lost, we suppress deleteVertexArray
   */
  disposeGeometry(t, e) {
    var o;
    if (!this.managedGeometries[t.id])
      return;
    delete this.managedGeometries[t.id];
    const r = t.glVertexArrayObjects[this.CONTEXT_UID], s = this.gl, n = t.buffers, a = (o = this.renderer) == null ? void 0 : o.buffer;
    if (t.disposeRunner.remove(this), !!r) {
      if (a)
        for (let h = 0; h < n.length; h++) {
          const l = n[h]._glBuffers[this.CONTEXT_UID];
          l && (l.refCount--, l.refCount === 0 && !e && a.dispose(n[h], e));
        }
      if (!e) {
        for (const h in r)
          if (h[0] === "g") {
            const l = r[h];
            this._activeVao === l && this.unbind(), s.deleteVertexArray(l);
          }
      }
      delete t.glVertexArrayObjects[this.CONTEXT_UID];
    }
  }
  /**
   * Dispose all WebGL resources of all managed geometries.
   * @param [contextLost=false] - If context was lost, we suppress `gl.delete` calls
   */
  disposeAll(t) {
    const e = Object.keys(this.managedGeometries);
    for (let r = 0; r < e.length; r++)
      this.disposeGeometry(this.managedGeometries[e[r]], t);
  }
  /**
   * Activate vertex array object.
   * @param geometry - Geometry instance.
   * @param program - Shader program instance.
   */
  activateVao(t, e) {
    const r = this.gl, s = this.CONTEXT_UID, n = this.renderer.buffer, a = t.buffers, o = t.attributes;
    t.indexBuffer && n.bind(t.indexBuffer);
    let h = null;
    for (const l in o) {
      const u = o[l], c = a[u.buffer], d = c._glBuffers[s];
      if (e.attributeData[l]) {
        h !== d && (n.bind(c), h = d);
        const f = e.attributeData[l].location;
        if (r.enableVertexAttribArray(f), r.vertexAttribPointer(
          f,
          u.size,
          u.type || r.FLOAT,
          u.normalized,
          u.stride,
          u.start
        ), u.instance)
          if (this.hasInstance)
            r.vertexAttribDivisor(f, u.divisor);
          else
            throw new Error("geometry error, GPU Instancing is not supported on this device");
      }
    }
  }
  /**
   * Draws the currently bound geometry.
   * @param type - The type primitive to render.
   * @param size - The number of elements to be rendered. If not specified, all vertices after the
   *  starting vertex will be drawn.
   * @param start - The starting vertex in the geometry to start drawing from. If not specified,
   *  drawing will start from the first vertex.
   * @param instanceCount - The number of instances of the set of elements to execute. If not specified,
   *  all instances will be drawn.
   */
  draw(t, e, r, s) {
    const { gl: n } = this, a = this._activeGeometry;
    if (a.indexBuffer) {
      const o = a.indexBuffer.data.BYTES_PER_ELEMENT, h = o === 2 ? n.UNSIGNED_SHORT : n.UNSIGNED_INT;
      o === 2 || o === 4 && this.canUseUInt32ElementIndex ? a.instanced ? n.drawElementsInstanced(t, e || a.indexBuffer.data.length, h, (r || 0) * o, s || 1) : n.drawElements(t, e || a.indexBuffer.data.length, h, (r || 0) * o) : console.warn("unsupported index buffer type: uint32");
    } else
      a.instanced ? n.drawArraysInstanced(t, r, e || a.getSize(), s || 1) : n.drawArrays(t, r, e || a.getSize());
    return this;
  }
  /** Unbind/reset everything. */
  unbind() {
    this.gl.bindVertexArray(null), this._activeVao = null, this._activeGeometry = null;
  }
  destroy() {
    this.renderer = null;
  }
}
Kl.extension = {
  type: F.RendererSystem,
  name: "geometry"
};
k.add(Kl);
const yh = new rt();
class Wa {
  /**
   * @param texture - observed texture
   * @param clampMargin - Changes frame clamping, 0.5 by default. Use -0.5 for extra border.
   */
  constructor(t, e) {
    this._texture = t, this.mapCoord = new rt(), this.uClampFrame = new Float32Array(4), this.uClampOffset = new Float32Array(2), this._textureID = -1, this._updateID = 0, this.clampOffset = 0, this.clampMargin = typeof e > "u" ? 0.5 : e, this.isSimple = !1;
  }
  /** Texture property. */
  get texture() {
    return this._texture;
  }
  set texture(t) {
    this._texture = t, this._textureID = -1;
  }
  /**
   * Multiplies uvs array to transform
   * @param uvs - mesh uvs
   * @param [out=uvs] - output
   * @returns - output
   */
  multiplyUvs(t, e) {
    e === void 0 && (e = t);
    const r = this.mapCoord;
    for (let s = 0; s < t.length; s += 2) {
      const n = t[s], a = t[s + 1];
      e[s] = n * r.a + a * r.c + r.tx, e[s + 1] = n * r.b + a * r.d + r.ty;
    }
    return e;
  }
  /**
   * Updates matrices if texture was changed.
   * @param [forceUpdate=false] - if true, matrices will be updated any case
   * @returns - Whether or not it was updated
   */
  update(t) {
    const e = this._texture;
    if (!e || !e.valid || !t && this._textureID === e._updateID)
      return !1;
    this._textureID = e._updateID, this._updateID++;
    const r = e._uvs;
    this.mapCoord.set(r.x1 - r.x0, r.y1 - r.y0, r.x3 - r.x0, r.y3 - r.y0, r.x0, r.y0);
    const s = e.orig, n = e.trim;
    n && (yh.set(
      s.width / n.width,
      0,
      0,
      s.height / n.height,
      -n.x / n.width,
      -n.y / n.height
    ), this.mapCoord.append(yh));
    const a = e.baseTexture, o = this.uClampFrame, h = this.clampMargin / a.resolution, l = this.clampOffset;
    return o[0] = (e._frame.x + h + l) / a.width, o[1] = (e._frame.y + h + l) / a.height, o[2] = (e._frame.x + e._frame.width - h + l) / a.width, o[3] = (e._frame.y + e._frame.height - h + l) / a.height, this.uClampOffset[0] = l / a.realWidth, this.uClampOffset[1] = l / a.realHeight, this.isSimple = e._frame.width === a.width && e._frame.height === a.height && e.rotate === 0, !0;
  }
}
var Um = `varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D mask;
uniform float alpha;
uniform float npmAlpha;
uniform vec4 maskClamp;

void main(void)
{
    float clip = step(3.5,
        step(maskClamp.x, vMaskCoord.x) +
        step(maskClamp.y, vMaskCoord.y) +
        step(vMaskCoord.x, maskClamp.z) +
        step(vMaskCoord.y, maskClamp.w));

    vec4 original = texture2D(uSampler, vTextureCoord);
    vec4 masky = texture2D(mask, vMaskCoord);
    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);

    original *= (alphaMul * masky.r * alpha * clip);

    gl_FragColor = original;
}
`, km = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 otherMatrix;

varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;
}
`;
class Gm extends Pt {
  /** @ignore */
  constructor(t, e, r) {
    let s = null;
    typeof t != "string" && e === void 0 && r === void 0 && (s = t, t = void 0, e = void 0, r = void 0), super(t || km, e || Um, r), this.maskSprite = s, this.maskMatrix = new rt();
  }
  /**
   * Sprite mask
   * @type {PIXI.DisplayObject}
   */
  get maskSprite() {
    return this._maskSprite;
  }
  set maskSprite(t) {
    this._maskSprite = t, this._maskSprite && (this._maskSprite.renderable = !1);
  }
  /**
   * Applies the filter
   * @param filterManager - The renderer to retrieve the filter from
   * @param input - The input render target.
   * @param output - The target to output to.
   * @param clearMode - Should the output be cleared before rendering to it.
   */
  apply(t, e, r, s) {
    const n = this._maskSprite, a = n._texture;
    a.valid && (a.uvMatrix || (a.uvMatrix = new Wa(a, 0)), a.uvMatrix.update(), this.uniforms.npmAlpha = a.baseTexture.alphaMode ? 0 : 1, this.uniforms.mask = a, this.uniforms.otherMatrix = t.calculateSpriteMatrix(this.maskMatrix, n).prepend(a.uvMatrix.mapCoord), this.uniforms.alpha = n.worldAlpha, this.uniforms.maskClamp = a.uvMatrix.uClampFrame, t.applyFilter(this, e, r, s));
  }
}
class Hm {
  /**
   * Create MaskData
   * @param {PIXI.DisplayObject} [maskObject=null] - object that describes the mask
   */
  constructor(t = null) {
    this.type = mt.NONE, this.autoDetect = !0, this.maskObject = t || null, this.pooled = !1, this.isMaskData = !0, this.resolution = null, this.multisample = Pt.defaultMultisample, this.enabled = !0, this.colorMask = 15, this._filters = null, this._stencilCounter = 0, this._scissorCounter = 0, this._scissorRect = null, this._scissorRectLocal = null, this._colorMask = 15, this._target = null;
  }
  /**
   * The sprite mask filter.
   * If set to `null`, the default sprite mask filter is used.
   * @default null
   */
  get filter() {
    return this._filters ? this._filters[0] : null;
  }
  set filter(t) {
    t ? this._filters ? this._filters[0] = t : this._filters = [t] : this._filters = null;
  }
  /** Resets the mask data after popMask(). */
  reset() {
    this.pooled && (this.maskObject = null, this.type = mt.NONE, this.autoDetect = !0), this._target = null, this._scissorRectLocal = null;
  }
  /**
   * Copies counters from maskData above, called from pushMask().
   * @param maskAbove
   */
  copyCountersOrReset(t) {
    t ? (this._stencilCounter = t._stencilCounter, this._scissorCounter = t._scissorCounter, this._scissorRect = t._scissorRect) : (this._stencilCounter = 0, this._scissorCounter = 0, this._scissorRect = null);
  }
}
class Zl {
  /**
   * @param renderer - The renderer this System works for.
   */
  constructor(t) {
    this.renderer = t, this.enableScissor = !0, this.alphaMaskPool = [], this.maskDataPool = [], this.maskStack = [], this.alphaMaskIndex = 0;
  }
  /**
   * Changes the mask stack that is used by this System.
   * @param maskStack - The mask stack
   */
  setMaskStack(t) {
    this.maskStack = t, this.renderer.scissor.setMaskStack(t), this.renderer.stencil.setMaskStack(t);
  }
  /**
   * Enables the mask and appends it to the current mask stack.
   *
   * NOTE: The batch renderer should be flushed beforehand to prevent pending renders from being masked.
   * @param {PIXI.DisplayObject} target - Display Object to push the mask to
   * @param {PIXI.MaskData|PIXI.Sprite|PIXI.Graphics|PIXI.DisplayObject} maskDataOrTarget - The masking data.
   */
  push(t, e) {
    let r = e;
    if (!r.isMaskData) {
      const n = this.maskDataPool.pop() || new Hm();
      n.pooled = !0, n.maskObject = e, r = n;
    }
    const s = this.maskStack.length !== 0 ? this.maskStack[this.maskStack.length - 1] : null;
    if (r.copyCountersOrReset(s), r._colorMask = s ? s._colorMask : 15, r.autoDetect && this.detect(r), r._target = t, r.type !== mt.SPRITE && this.maskStack.push(r), r.enabled)
      switch (r.type) {
        case mt.SCISSOR:
          this.renderer.scissor.push(r);
          break;
        case mt.STENCIL:
          this.renderer.stencil.push(r);
          break;
        case mt.SPRITE:
          r.copyCountersOrReset(null), this.pushSpriteMask(r);
          break;
        case mt.COLOR:
          this.pushColorMask(r);
          break;
      }
    r.type === mt.SPRITE && this.maskStack.push(r);
  }
  /**
   * Removes the last mask from the mask stack and doesn't return it.
   *
   * NOTE: The batch renderer should be flushed beforehand to render the masked contents before the mask is removed.
   * @param {PIXI.IMaskTarget} target - Display Object to pop the mask from
   */
  pop(t) {
    const e = this.maskStack.pop();
    if (!(!e || e._target !== t)) {
      if (e.enabled)
        switch (e.type) {
          case mt.SCISSOR:
            this.renderer.scissor.pop(e);
            break;
          case mt.STENCIL:
            this.renderer.stencil.pop(e.maskObject);
            break;
          case mt.SPRITE:
            this.popSpriteMask(e);
            break;
          case mt.COLOR:
            this.popColorMask(e);
            break;
        }
      if (e.reset(), e.pooled && this.maskDataPool.push(e), this.maskStack.length !== 0) {
        const r = this.maskStack[this.maskStack.length - 1];
        r.type === mt.SPRITE && r._filters && (r._filters[0].maskSprite = r.maskObject);
      }
    }
  }
  /**
   * Sets type of MaskData based on its maskObject.
   * @param maskData
   */
  detect(t) {
    const e = t.maskObject;
    e ? e.isSprite ? t.type = mt.SPRITE : this.enableScissor && this.renderer.scissor.testScissor(t) ? t.type = mt.SCISSOR : t.type = mt.STENCIL : t.type = mt.COLOR;
  }
  /**
   * Applies the Mask and adds it to the current filter stack.
   * @param maskData - Sprite to be used as the mask.
   */
  pushSpriteMask(t) {
    const { maskObject: e } = t, r = t._target;
    let s = t._filters;
    s || (s = this.alphaMaskPool[this.alphaMaskIndex], s || (s = this.alphaMaskPool[this.alphaMaskIndex] = [new Gm()])), s[0].resolution = t.resolution, s[0].multisample = t.multisample, s[0].maskSprite = e;
    const n = r.filterArea;
    r.filterArea = e.getBounds(!0), this.renderer.filter.push(r, s), r.filterArea = n, t._filters || this.alphaMaskIndex++;
  }
  /**
   * Removes the last filter from the filter stack and doesn't return it.
   * @param maskData - Sprite to be used as the mask.
   */
  popSpriteMask(t) {
    this.renderer.filter.pop(), t._filters ? t._filters[0].maskSprite = null : (this.alphaMaskIndex--, this.alphaMaskPool[this.alphaMaskIndex][0].maskSprite = null);
  }
  /**
   * Pushes the color mask.
   * @param maskData - The mask data
   */
  pushColorMask(t) {
    const e = t._colorMask, r = t._colorMask = e & t.colorMask;
    r !== e && this.renderer.gl.colorMask(
      (r & 1) !== 0,
      (r & 2) !== 0,
      (r & 4) !== 0,
      (r & 8) !== 0
    );
  }
  /**
   * Pops the color mask.
   * @param maskData - The mask data
   */
  popColorMask(t) {
    const e = t._colorMask, r = this.maskStack.length > 0 ? this.maskStack[this.maskStack.length - 1]._colorMask : 15;
    r !== e && this.renderer.gl.colorMask(
      (r & 1) !== 0,
      (r & 2) !== 0,
      (r & 4) !== 0,
      (r & 8) !== 0
    );
  }
  destroy() {
    this.renderer = null;
  }
}
Zl.extension = {
  type: F.RendererSystem,
  name: "mask"
};
k.add(Zl);
class Ql {
  /**
   * @param renderer - The renderer this System works for.
   */
  constructor(t) {
    this.renderer = t, this.maskStack = [], this.glConst = 0;
  }
  /** Gets count of masks of certain type. */
  getStackLength() {
    return this.maskStack.length;
  }
  /**
   * Changes the mask stack that is used by this System.
   * @param {PIXI.MaskData[]} maskStack - The mask stack
   */
  setMaskStack(t) {
    const { gl: e } = this.renderer, r = this.getStackLength();
    this.maskStack = t;
    const s = this.getStackLength();
    s !== r && (s === 0 ? e.disable(this.glConst) : (e.enable(this.glConst), this._useCurrent()));
  }
  /**
   * Setup renderer to use the current mask data.
   * @private
   */
  _useCurrent() {
  }
  /** Destroys the mask stack. */
  destroy() {
    this.renderer = null, this.maskStack = null;
  }
}
const _h = new rt(), vh = [], Jl = class Ji extends Ql {
  /**
   * @param {PIXI.Renderer} renderer - The renderer this System works for.
   */
  constructor(t) {
    super(t), this.glConst = L.ADAPTER.getWebGLRenderingContext().SCISSOR_TEST;
  }
  getStackLength() {
    const t = this.maskStack[this.maskStack.length - 1];
    return t ? t._scissorCounter : 0;
  }
  /**
   * evaluates _boundsTransformed, _scissorRect for MaskData
   * @param maskData
   */
  calcScissorRect(t) {
    if (t._scissorRectLocal)
      return;
    const e = t._scissorRect, { maskObject: r } = t, { renderer: s } = this, n = s.renderTexture, a = r.getBounds(!0, vh.pop() ?? new j());
    this.roundFrameToPixels(
      a,
      n.current ? n.current.resolution : s.resolution,
      n.sourceFrame,
      n.destinationFrame,
      s.projection.transform
    ), e && a.fit(e), t._scissorRectLocal = a;
  }
  static isMatrixRotated(t) {
    if (!t)
      return !1;
    const { a: e, b: r, c: s, d: n } = t;
    return (Math.abs(r) > 1e-4 || Math.abs(s) > 1e-4) && (Math.abs(e) > 1e-4 || Math.abs(n) > 1e-4);
  }
  /**
   * Test, whether the object can be scissor mask with current renderer projection.
   * Calls "calcScissorRect()" if its true.
   * @param maskData - mask data
   * @returns whether Whether the object can be scissor mask
   */
  testScissor(t) {
    const { maskObject: e } = t;
    if (!e.isFastRect || !e.isFastRect() || Ji.isMatrixRotated(e.worldTransform) || Ji.isMatrixRotated(this.renderer.projection.transform))
      return !1;
    this.calcScissorRect(t);
    const r = t._scissorRectLocal;
    return r.width > 0 && r.height > 0;
  }
  roundFrameToPixels(t, e, r, s, n) {
    Ji.isMatrixRotated(n) || (n = n ? _h.copyFrom(n) : _h.identity(), n.translate(-r.x, -r.y).scale(
      s.width / r.width,
      s.height / r.height
    ).translate(s.x, s.y), this.renderer.filter.transformAABB(n, t), t.fit(s), t.x = Math.round(t.x * e), t.y = Math.round(t.y * e), t.width = Math.round(t.width * e), t.height = Math.round(t.height * e));
  }
  /**
   * Applies the Mask and adds it to the current stencil stack.
   * @author alvin
   * @param maskData - The mask data.
   */
  push(t) {
    t._scissorRectLocal || this.calcScissorRect(t);
    const { gl: e } = this.renderer;
    t._scissorRect || e.enable(e.SCISSOR_TEST), t._scissorCounter++, t._scissorRect = t._scissorRectLocal, this._useCurrent();
  }
  /**
   * This should be called after a mask is popped off the mask stack. It will rebind the scissor box to be latest with the
   * last mask in the stack.
   *
   * This can also be called when you directly modify the scissor box and want to restore PixiJS state.
   * @param maskData - The mask data.
   */
  pop(t) {
    const { gl: e } = this.renderer;
    t && vh.push(t._scissorRectLocal), this.getStackLength() > 0 ? this._useCurrent() : e.disable(e.SCISSOR_TEST);
  }
  /**
   * Setup renderer to use the current scissor data.
   * @private
   */
  _useCurrent() {
    const t = this.maskStack[this.maskStack.length - 1]._scissorRect;
    let e;
    this.renderer.renderTexture.current ? e = t.y : e = this.renderer.height - t.height - t.y, this.renderer.gl.scissor(t.x, e, t.width, t.height);
  }
};
Jl.extension = {
  type: F.RendererSystem,
  name: "scissor"
};
let $m = Jl;
k.add($m);
class tu extends Ql {
  /**
   * @param renderer - The renderer this System works for.
   */
  constructor(t) {
    super(t), this.glConst = L.ADAPTER.getWebGLRenderingContext().STENCIL_TEST;
  }
  getStackLength() {
    const t = this.maskStack[this.maskStack.length - 1];
    return t ? t._stencilCounter : 0;
  }
  /**
   * Applies the Mask and adds it to the current stencil stack.
   * @param maskData - The mask data
   */
  push(t) {
    const e = t.maskObject, { gl: r } = this.renderer, s = t._stencilCounter;
    s === 0 && (this.renderer.framebuffer.forceStencil(), r.clearStencil(0), r.clear(r.STENCIL_BUFFER_BIT), r.enable(r.STENCIL_TEST)), t._stencilCounter++;
    const n = t._colorMask;
    n !== 0 && (t._colorMask = 0, r.colorMask(!1, !1, !1, !1)), r.stencilFunc(r.EQUAL, s, 4294967295), r.stencilOp(r.KEEP, r.KEEP, r.INCR), e.renderable = !0, e.render(this.renderer), this.renderer.batch.flush(), e.renderable = !1, n !== 0 && (t._colorMask = n, r.colorMask(
      (n & 1) !== 0,
      (n & 2) !== 0,
      (n & 4) !== 0,
      (n & 8) !== 0
    )), this._useCurrent();
  }
  /**
   * Pops stencil mask. MaskData is already removed from stack
   * @param {PIXI.DisplayObject} maskObject - object of popped mask data
   */
  pop(t) {
    const e = this.renderer.gl;
    if (this.getStackLength() === 0)
      e.disable(e.STENCIL_TEST);
    else {
      const r = this.maskStack.length !== 0 ? this.maskStack[this.maskStack.length - 1] : null, s = r ? r._colorMask : 15;
      s !== 0 && (r._colorMask = 0, e.colorMask(!1, !1, !1, !1)), e.stencilOp(e.KEEP, e.KEEP, e.DECR), t.renderable = !0, t.render(this.renderer), this.renderer.batch.flush(), t.renderable = !1, s !== 0 && (r._colorMask = s, e.colorMask(
        (s & 1) !== 0,
        (s & 2) !== 0,
        (s & 4) !== 0,
        (s & 8) !== 0
      )), this._useCurrent();
    }
  }
  /**
   * Setup renderer to use the current stencil data.
   * @private
   */
  _useCurrent() {
    const t = this.renderer.gl;
    t.stencilFunc(t.EQUAL, this.getStackLength(), 4294967295), t.stencilOp(t.KEEP, t.KEEP, t.KEEP);
  }
}
tu.extension = {
  type: F.RendererSystem,
  name: "stencil"
};
k.add(tu);
class eu {
  constructor(t) {
    this.renderer = t, this.plugins = {}, Object.defineProperties(this.plugins, {
      extract: {
        enumerable: !1,
        get() {
          return Y("7.0.0", "renderer.plugins.extract has moved to renderer.extract"), t.extract;
        }
      },
      prepare: {
        enumerable: !1,
        get() {
          return Y("7.0.0", "renderer.plugins.prepare has moved to renderer.prepare"), t.prepare;
        }
      },
      interaction: {
        enumerable: !1,
        get() {
          return Y("7.0.0", "renderer.plugins.interaction has been deprecated, use renderer.events"), t.events;
        }
      }
    });
  }
  /**
   * Initialize the plugins.
   * @protected
   */
  init() {
    const t = this.rendererPlugins;
    for (const e in t)
      this.plugins[e] = new t[e](this.renderer);
  }
  destroy() {
    for (const t in this.plugins)
      this.plugins[t].destroy(), this.plugins[t] = null;
  }
}
eu.extension = {
  type: [
    F.RendererSystem,
    F.CanvasRendererSystem
  ],
  name: "_plugin"
};
k.add(eu);
class ru {
  /** @param renderer - The renderer this System works for. */
  constructor(t) {
    this.renderer = t, this.destinationFrame = null, this.sourceFrame = null, this.defaultFrame = null, this.projectionMatrix = new rt(), this.transform = null;
  }
  /**
   * Updates the projection-matrix based on the sourceFrame → destinationFrame mapping provided.
   *
   * NOTE: It is expected you call `renderer.framebuffer.setViewport(destinationFrame)` after this. This is because
   * the framebuffer viewport converts shader vertex output in normalized device coordinates to window coordinates.
   *
   * NOTE-2: {@link PIXI.RenderTextureSystem#bind} updates the projection-matrix when you bind a render-texture.
   * It is expected
   * that you dirty the current bindings when calling this manually.
   * @param destinationFrame - The rectangle in the render-target to render the contents into. If rendering to the canvas,
   *  the origin is on the top-left; if rendering to a render-texture, the origin is on the bottom-left.
   * @param sourceFrame - The rectangle in world space that contains the contents being rendered.
   * @param resolution - The resolution of the render-target, which is the ratio of
   *  world-space (or CSS) pixels to physical pixels.
   * @param root - Whether the render-target is the screen. This is required because rendering to textures
   *  is y-flipped (i.e. upside down relative to the screen).
   */
  update(t, e, r, s) {
    this.destinationFrame = t || this.destinationFrame || this.defaultFrame, this.sourceFrame = e || this.sourceFrame || t, this.calculateProjection(this.destinationFrame, this.sourceFrame, r, s), this.transform && this.projectionMatrix.append(this.transform);
    const n = this.renderer;
    n.globalUniforms.uniforms.projectionMatrix = this.projectionMatrix, n.globalUniforms.update(), n.shader.shader && n.shader.syncUniformGroup(n.shader.shader.uniforms.globals);
  }
  /**
   * Calculates the `projectionMatrix` to map points inside `sourceFrame` to inside `destinationFrame`.
   * @param _destinationFrame - The destination frame in the render-target.
   * @param sourceFrame - The source frame in world space.
   * @param _resolution - The render-target's resolution, i.e. ratio of CSS to physical pixels.
   * @param root - Whether rendering into the screen. Otherwise, if rendering to a framebuffer, the projection
   *  is y-flipped.
   */
  calculateProjection(t, e, r, s) {
    const n = this.projectionMatrix, a = s ? -1 : 1;
    n.identity(), n.a = 1 / e.width * 2, n.d = a * (1 / e.height * 2), n.tx = -1 - e.x * n.a, n.ty = -a - e.y * n.d;
  }
  /**
   * Sets the transform of the active render target to the given matrix.
   * @param _matrix - The transformation matrix
   */
  setTransform(t) {
  }
  destroy() {
    this.renderer = null;
  }
}
ru.extension = {
  type: F.RendererSystem,
  name: "projection"
};
k.add(ru);
const Vm = new Ns(), xh = new j();
class iu {
  constructor(t) {
    this.renderer = t, this._tempMatrix = new rt();
  }
  /**
   * A Useful function that returns a texture of the display object that can then be used to create sprites
   * This can be quite useful if your displayObject is complicated and needs to be reused multiple times.
   * @param displayObject - The displayObject the object will be generated from.
   * @param {IGenerateTextureOptions} options - Generate texture options.
   * @param {PIXI.Rectangle} options.region - The region of the displayObject, that shall be rendered,
   *        if no region is specified, defaults to the local bounds of the displayObject.
   * @param {number} [options.resolution] - If not given, the renderer's resolution is used.
   * @param {PIXI.MSAA_QUALITY} [options.multisample] - If not given, the renderer's multisample is used.
   * @returns a shiny new texture of the display object passed in
   */
  generateTexture(t, e) {
    const { region: r, ...s } = e || {}, n = (r == null ? void 0 : r.copyTo(xh)) || t.getLocalBounds(xh, !0), a = s.resolution || this.renderer.resolution;
    n.width = Math.max(n.width, 1 / a), n.height = Math.max(n.height, 1 / a), s.width = n.width, s.height = n.height, s.resolution = a, s.multisample ?? (s.multisample = this.renderer.multisample);
    const o = lr.create(s);
    this._tempMatrix.tx = -n.x, this._tempMatrix.ty = -n.y;
    const h = t.transform;
    return t.transform = Vm, this.renderer.render(t, {
      renderTexture: o,
      transform: this._tempMatrix,
      skipUpdateTransform: !!t.parent,
      blit: !0
    }), t.transform = h, o;
  }
  destroy() {
  }
}
iu.extension = {
  type: [
    F.RendererSystem,
    F.CanvasRendererSystem
  ],
  name: "textureGenerator"
};
k.add(iu);
const Xe = new j(), qr = new j();
class su {
  /**
   * @param renderer - The renderer this System works for.
   */
  constructor(t) {
    this.renderer = t, this.defaultMaskStack = [], this.current = null, this.sourceFrame = new j(), this.destinationFrame = new j(), this.viewportFrame = new j();
  }
  contextChange() {
    var e;
    const t = (e = this.renderer) == null ? void 0 : e.gl.getContextAttributes();
    this._rendererPremultipliedAlpha = !!(t && t.alpha && t.premultipliedAlpha);
  }
  /**
   * Bind the current render texture.
   * @param renderTexture - RenderTexture to bind, by default its `null` - the screen.
   * @param sourceFrame - Part of world that is mapped to the renderTexture.
   * @param destinationFrame - Part of renderTexture, by default it has the same size as sourceFrame.
   */
  bind(t = null, e, r) {
    const s = this.renderer;
    this.current = t;
    let n, a, o;
    t ? (n = t.baseTexture, o = n.resolution, e || (Xe.width = t.frame.width, Xe.height = t.frame.height, e = Xe), r || (qr.x = t.frame.x, qr.y = t.frame.y, qr.width = e.width, qr.height = e.height, r = qr), a = n.framebuffer) : (o = s.resolution, e || (Xe.width = s._view.screen.width, Xe.height = s._view.screen.height, e = Xe), r || (r = Xe, r.width = e.width, r.height = e.height));
    const h = this.viewportFrame;
    h.x = r.x * o, h.y = r.y * o, h.width = r.width * o, h.height = r.height * o, t || (h.y = s.view.height - (h.y + h.height)), h.ceil(), this.renderer.framebuffer.bind(a, h), this.renderer.projection.update(r, e, o, !a), t ? this.renderer.mask.setMaskStack(n.maskStack) : this.renderer.mask.setMaskStack(this.defaultMaskStack), this.sourceFrame.copyFrom(e), this.destinationFrame.copyFrom(r);
  }
  /**
   * Erases the render texture and fills the drawing area with a colour.
   * @param clearColor - The color as rgba, default to use the renderer backgroundColor
   * @param [mask=BUFFER_BITS.COLOR | BUFFER_BITS.DEPTH] - Bitwise OR of masks
   *  that indicate the buffers to be cleared, by default COLOR and DEPTH buffers.
   */
  clear(t, e) {
    const r = this.current ? this.current.baseTexture.clear : this.renderer.background.backgroundColor, s = tt.shared.setValue(t || r);
    (this.current && this.current.baseTexture.alphaMode > 0 || !this.current && this._rendererPremultipliedAlpha) && s.premultiply(s.alpha);
    const n = this.destinationFrame, a = this.current ? this.current.baseTexture : this.renderer._view.screen, o = n.width !== a.width || n.height !== a.height;
    if (o) {
      let { x: h, y: l, width: u, height: c } = this.viewportFrame;
      h = Math.round(h), l = Math.round(l), u = Math.round(u), c = Math.round(c), this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST), this.renderer.gl.scissor(h, l, u, c);
    }
    this.renderer.framebuffer.clear(s.red, s.green, s.blue, s.alpha, e), o && this.renderer.scissor.pop();
  }
  resize() {
    this.bind(null);
  }
  /** Resets render-texture state. */
  reset() {
    this.bind(null);
  }
  destroy() {
    this.renderer = null;
  }
}
su.extension = {
  type: F.RendererSystem,
  name: "renderTexture"
};
k.add(su);
class zm {
  /**
   * Makes a new Pixi program.
   * @param program - webgl program
   * @param uniformData - uniforms
   */
  constructor(t, e) {
    this.program = t, this.uniformData = e, this.uniformGroups = {}, this.uniformDirtyGroups = {}, this.uniformBufferBindings = {};
  }
  /** Destroys this program. */
  destroy() {
    this.uniformData = null, this.uniformGroups = null, this.uniformDirtyGroups = null, this.uniformBufferBindings = null, this.program = null;
  }
}
function Xm(i, t) {
  const e = {}, r = t.getProgramParameter(i, t.ACTIVE_ATTRIBUTES);
  for (let s = 0; s < r; s++) {
    const n = t.getActiveAttrib(i, s);
    if (n.name.startsWith("gl_"))
      continue;
    const a = $l(t, n.type), o = {
      type: a,
      name: n.name,
      size: Hl(a),
      location: t.getAttribLocation(i, n.name)
    };
    e[n.name] = o;
  }
  return e;
}
function Wm(i, t) {
  const e = {}, r = t.getProgramParameter(i, t.ACTIVE_UNIFORMS);
  for (let s = 0; s < r; s++) {
    const n = t.getActiveUniform(i, s), a = n.name.replace(/\[.*?\]$/, ""), o = !!n.name.match(/\[.*?\]$/), h = $l(t, n.type);
    e[a] = {
      name: a,
      index: s,
      type: h,
      size: n.size,
      isArray: o,
      value: kl(h, n.size)
    };
  }
  return e;
}
function jm(i, t) {
  var o;
  const e = ch(i, i.VERTEX_SHADER, t.vertexSrc), r = ch(i, i.FRAGMENT_SHADER, t.fragmentSrc), s = i.createProgram();
  i.attachShader(s, e), i.attachShader(s, r);
  const n = (o = t.extra) == null ? void 0 : o.transformFeedbackVaryings;
  if (n && (typeof i.transformFeedbackVaryings != "function" ? console.warn("TransformFeedback is not supported but TransformFeedbackVaryings are given.") : i.transformFeedbackVaryings(
    s,
    n.names,
    n.bufferMode === "separate" ? i.SEPARATE_ATTRIBS : i.INTERLEAVED_ATTRIBS
  )), i.linkProgram(s), i.getProgramParameter(s, i.LINK_STATUS) || Tm(i, s, e, r), t.attributeData = Xm(s, i), t.uniformData = Wm(s, i), !/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(t.vertexSrc)) {
    const h = Object.keys(t.attributeData);
    h.sort((l, u) => l > u ? 1 : -1);
    for (let l = 0; l < h.length; l++)
      t.attributeData[h[l]].location = l, i.bindAttribLocation(s, l, h[l]);
    i.linkProgram(s);
  }
  i.deleteShader(e), i.deleteShader(r);
  const a = {};
  for (const h in t.uniformData) {
    const l = t.uniformData[h];
    a[h] = {
      location: i.getUniformLocation(s, h),
      value: kl(l.type, l.size)
    };
  }
  return new zm(s, a);
}
function Ym(i, t, e, r, s) {
  e.buffer.update(s);
}
const qm = {
  float: `
        data[offset] = v;
    `,
  vec2: `
        data[offset] = v[0];
        data[offset+1] = v[1];
    `,
  vec3: `
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

    `,
  vec4: `
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];
        data[offset+3] = v[3];
    `,
  mat2: `
        data[offset] = v[0];
        data[offset+1] = v[1];

        data[offset+4] = v[2];
        data[offset+5] = v[3];
    `,
  mat3: `
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

        data[offset + 4] = v[3];
        data[offset + 5] = v[4];
        data[offset + 6] = v[5];

        data[offset + 8] = v[6];
        data[offset + 9] = v[7];
        data[offset + 10] = v[8];
    `,
  mat4: `
        for(var i = 0; i < 16; i++)
        {
            data[offset + i] = v[i];
        }
    `
}, nu = {
  float: 4,
  vec2: 8,
  vec3: 12,
  vec4: 16,
  int: 4,
  ivec2: 8,
  ivec3: 12,
  ivec4: 16,
  uint: 4,
  uvec2: 8,
  uvec3: 12,
  uvec4: 16,
  bool: 4,
  bvec2: 8,
  bvec3: 12,
  bvec4: 16,
  mat2: 16 * 2,
  mat3: 16 * 3,
  mat4: 16 * 4
};
function Km(i) {
  const t = i.map((n) => ({
    data: n,
    offset: 0,
    dataLen: 0,
    dirty: 0
  }));
  let e = 0, r = 0, s = 0;
  for (let n = 0; n < t.length; n++) {
    const a = t[n];
    if (e = nu[a.data.type], a.data.size > 1 && (e = Math.max(e, 16) * a.data.size), a.dataLen = e, r % e !== 0 && r < 16) {
      const o = r % e % 16;
      r += o, s += o;
    }
    r + e > 16 ? (s = Math.ceil(s / 16) * 16, a.offset = s, s += e, r = e) : (a.offset = s, r += e, s += e);
  }
  return s = Math.ceil(s / 16) * 16, { uboElements: t, size: s };
}
function Zm(i, t) {
  const e = [];
  for (const r in i)
    t[r] && e.push(t[r]);
  return e.sort((r, s) => r.index - s.index), e;
}
function Qm(i, t) {
  if (!i.autoManage)
    return { size: 0, syncFunc: Ym };
  const e = Zm(i.uniforms, t), { uboElements: r, size: s } = Km(e), n = [`
    var v = null;
    var v2 = null;
    var cv = null;
    var t = 0;
    var gl = renderer.gl
    var index = 0;
    var data = buffer.data;
    `];
  for (let a = 0; a < r.length; a++) {
    const o = r[a], h = i.uniforms[o.data.name], l = o.data.name;
    let u = !1;
    for (let c = 0; c < Rr.length; c++) {
      const d = Rr[c];
      if (d.codeUbo && d.test(o.data, h)) {
        n.push(
          `offset = ${o.offset / 4};`,
          Rr[c].codeUbo(o.data.name, h)
        ), u = !0;
        break;
      }
    }
    if (!u)
      if (o.data.size > 1) {
        const c = Hl(o.data.type), d = Math.max(nu[o.data.type] / 16, 1), f = c / d, p = (4 - f % 4) % 4;
        n.push(`
                cv = ud.${l}.value;
                v = uv.${l};
                offset = ${o.offset / 4};

                t = 0;

                for(var i=0; i < ${o.data.size * d}; i++)
                {
                    for(var j = 0; j < ${f}; j++)
                    {
                        data[offset++] = v[t++];
                    }
                    offset += ${p};
                }

                `);
      } else {
        const c = qm[o.data.type];
        n.push(`
                cv = ud.${l}.value;
                v = uv.${l};
                offset = ${o.offset / 4};
                ${c};
                `);
      }
  }
  return n.push(`
       renderer.buffer.update(buffer);
    `), {
    size: s,
    // eslint-disable-next-line no-new-func
    syncFunc: new Function(
      "ud",
      "uv",
      "renderer",
      "syncData",
      "buffer",
      n.join(`
`)
    )
  };
}
let Jm = 0;
const Ui = { textureCount: 0, uboCount: 0 };
class au {
  /** @param renderer - The renderer this System works for. */
  constructor(t) {
    this.destroyed = !1, this.renderer = t, this.systemCheck(), this.gl = null, this.shader = null, this.program = null, this.cache = {}, this._uboCache = {}, this.id = Jm++;
  }
  /**
   * Overrideable function by `@pixi/unsafe-eval` to silence
   * throwing an error if platform doesn't support unsafe-evals.
   * @private
   */
  systemCheck() {
    if (!wm())
      throw new Error("Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support.");
  }
  contextChange(t) {
    this.gl = t, this.reset();
  }
  /**
   * Changes the current shader to the one given in parameter.
   * @param shader - the new shader
   * @param dontSync - false if the shader should automatically sync its uniforms.
   * @returns the glProgram that belongs to the shader.
   */
  bind(t, e) {
    t.disposeRunner.add(this), t.uniforms.globals = this.renderer.globalUniforms;
    const r = t.program, s = r.glPrograms[this.renderer.CONTEXT_UID] || this.generateProgram(t);
    return this.shader = t, this.program !== r && (this.program = r, this.gl.useProgram(s.program)), e || (Ui.textureCount = 0, Ui.uboCount = 0, this.syncUniformGroup(t.uniformGroup, Ui)), s;
  }
  /**
   * Uploads the uniforms values to the currently bound shader.
   * @param uniforms - the uniforms values that be applied to the current shader
   */
  setUniforms(t) {
    const e = this.shader.program, r = e.glPrograms[this.renderer.CONTEXT_UID];
    e.syncUniforms(r.uniformData, t, this.renderer);
  }
  /* eslint-disable @typescript-eslint/explicit-module-boundary-types */
  /**
   * Syncs uniforms on the group
   * @param group - the uniform group to sync
   * @param syncData - this is data that is passed to the sync function and any nested sync functions
   */
  syncUniformGroup(t, e) {
    const r = this.getGlProgram();
    (!t.static || t.dirtyId !== r.uniformDirtyGroups[t.id]) && (r.uniformDirtyGroups[t.id] = t.dirtyId, this.syncUniforms(t, r, e));
  }
  /**
   * Overrideable by the @pixi/unsafe-eval package to use static syncUniforms instead.
   * @param group
   * @param glProgram
   * @param syncData
   */
  syncUniforms(t, e, r) {
    (t.syncUniforms[this.shader.program.id] || this.createSyncGroups(t))(e.uniformData, t.uniforms, this.renderer, r);
  }
  createSyncGroups(t) {
    const e = this.getSignature(t, this.shader.program.uniformData, "u");
    return this.cache[e] || (this.cache[e] = vm(t, this.shader.program.uniformData)), t.syncUniforms[this.shader.program.id] = this.cache[e], t.syncUniforms[this.shader.program.id];
  }
  /**
   * Syncs uniform buffers
   * @param group - the uniform buffer group to sync
   * @param name - the name of the uniform buffer
   */
  syncUniformBufferGroup(t, e) {
    const r = this.getGlProgram();
    if (!t.static || t.dirtyId !== 0 || !r.uniformGroups[t.id]) {
      t.dirtyId = 0;
      const s = r.uniformGroups[t.id] || this.createSyncBufferGroup(t, r, e);
      t.buffer.update(), s(
        r.uniformData,
        t.uniforms,
        this.renderer,
        Ui,
        t.buffer
      );
    }
    this.renderer.buffer.bindBufferBase(t.buffer, r.uniformBufferBindings[e]);
  }
  /**
   * Will create a function that uploads a uniform buffer using the STD140 standard.
   * The upload function will then be cached for future calls
   * If a group is manually managed, then a simple upload function is generated
   * @param group - the uniform buffer group to sync
   * @param glProgram - the gl program to attach the uniform bindings to
   * @param name - the name of the uniform buffer (must exist on the shader)
   */
  createSyncBufferGroup(t, e, r) {
    const { gl: s } = this.renderer;
    this.renderer.buffer.bind(t.buffer);
    const n = this.gl.getUniformBlockIndex(e.program, r);
    e.uniformBufferBindings[r] = this.shader.uniformBindCount, s.uniformBlockBinding(e.program, n, this.shader.uniformBindCount), this.shader.uniformBindCount++;
    const a = this.getSignature(t, this.shader.program.uniformData, "ubo");
    let o = this._uboCache[a];
    if (o || (o = this._uboCache[a] = Qm(t, this.shader.program.uniformData)), t.autoManage) {
      const h = new Float32Array(o.size / 4);
      t.buffer.update(h);
    }
    return e.uniformGroups[t.id] = o.syncFunc, e.uniformGroups[t.id];
  }
  /**
   * Takes a uniform group and data and generates a unique signature for them.
   * @param group - The uniform group to get signature of
   * @param group.uniforms
   * @param uniformData - Uniform information generated by the shader
   * @param preFix
   * @returns Unique signature of the uniform group
   */
  getSignature(t, e, r) {
    const s = t.uniforms, n = [`${r}-`];
    for (const a in s)
      n.push(a), e[a] && n.push(e[a].type);
    return n.join("-");
  }
  /**
   * Returns the underlying GLShade rof the currently bound shader.
   *
   * This can be handy for when you to have a little more control over the setting of your uniforms.
   * @returns The glProgram for the currently bound Shader for this context
   */
  getGlProgram() {
    return this.shader ? this.shader.program.glPrograms[this.renderer.CONTEXT_UID] : null;
  }
  /**
   * Generates a glProgram version of the Shader provided.
   * @param shader - The shader that the glProgram will be based on.
   * @returns A shiny new glProgram!
   */
  generateProgram(t) {
    const e = this.gl, r = t.program, s = jm(e, r);
    return r.glPrograms[this.renderer.CONTEXT_UID] = s, s;
  }
  /** Resets ShaderSystem state, does not affect WebGL state. */
  reset() {
    this.program = null, this.shader = null;
  }
  /**
   * Disposes shader.
   * If disposing one equals with current shader, set current as null.
   * @param shader - Shader object
   */
  disposeShader(t) {
    this.shader === t && (this.shader = null);
  }
  /** Destroys this System and removes all its textures. */
  destroy() {
    this.renderer = null, this.destroyed = !0;
  }
}
au.extension = {
  type: F.RendererSystem,
  name: "shader"
};
k.add(au);
class _s {
  constructor(t) {
    this.renderer = t;
  }
  /**
   * It all starts here! This initiates every system, passing in the options for any system by name.
   * @param options - the config for the renderer and all its systems
   */
  run(t) {
    const { renderer: e } = this;
    e.runners.init.emit(e.options), t.hello && console.log(`PixiJS 7.4.0 - ${e.rendererLogId} - https://pixijs.com`), e.resize(e.screen.width, e.screen.height);
  }
  destroy() {
  }
}
_s.defaultOptions = {
  /**
   * {@link PIXI.IRendererOptions.hello}
   * @default false
   * @memberof PIXI.settings.RENDER_OPTIONS
   */
  hello: !1
}, /** @ignore */
_s.extension = {
  type: [
    F.RendererSystem,
    F.CanvasRendererSystem
  ],
  name: "startup"
};
k.add(_s);
function tg(i, t = []) {
  return t[X.NORMAL] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], t[X.ADD] = [i.ONE, i.ONE], t[X.MULTIPLY] = [i.DST_COLOR, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA], t[X.SCREEN] = [i.ONE, i.ONE_MINUS_SRC_COLOR, i.ONE, i.ONE_MINUS_SRC_ALPHA], t[X.OVERLAY] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], t[X.DARKEN] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], t[X.LIGHTEN] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], t[X.COLOR_DODGE] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], t[X.COLOR_BURN] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], t[X.HARD_LIGHT] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], t[X.SOFT_LIGHT] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], t[X.DIFFERENCE] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], t[X.EXCLUSION] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], t[X.HUE] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], t[X.SATURATION] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], t[X.COLOR] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], t[X.LUMINOSITY] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], t[X.NONE] = [0, 0], t[X.NORMAL_NPM] = [i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA], t[X.ADD_NPM] = [i.SRC_ALPHA, i.ONE, i.ONE, i.ONE], t[X.SCREEN_NPM] = [i.SRC_ALPHA, i.ONE_MINUS_SRC_COLOR, i.ONE, i.ONE_MINUS_SRC_ALPHA], t[X.SRC_IN] = [i.DST_ALPHA, i.ZERO], t[X.SRC_OUT] = [i.ONE_MINUS_DST_ALPHA, i.ZERO], t[X.SRC_ATOP] = [i.DST_ALPHA, i.ONE_MINUS_SRC_ALPHA], t[X.DST_OVER] = [i.ONE_MINUS_DST_ALPHA, i.ONE], t[X.DST_IN] = [i.ZERO, i.SRC_ALPHA], t[X.DST_OUT] = [i.ZERO, i.ONE_MINUS_SRC_ALPHA], t[X.DST_ATOP] = [i.ONE_MINUS_DST_ALPHA, i.SRC_ALPHA], t[X.XOR] = [i.ONE_MINUS_DST_ALPHA, i.ONE_MINUS_SRC_ALPHA], t[X.SUBTRACT] = [i.ONE, i.ONE, i.ONE, i.ONE, i.FUNC_REVERSE_SUBTRACT, i.FUNC_ADD], t;
}
const eg = 0, rg = 1, ig = 2, sg = 3, ng = 4, ag = 5, ou = class la {
  constructor() {
    this.gl = null, this.stateId = 0, this.polygonOffset = 0, this.blendMode = X.NONE, this._blendEq = !1, this.map = [], this.map[eg] = this.setBlend, this.map[rg] = this.setOffset, this.map[ig] = this.setCullFace, this.map[sg] = this.setDepthTest, this.map[ng] = this.setFrontFace, this.map[ag] = this.setDepthMask, this.checks = [], this.defaultState = new ce(), this.defaultState.blend = !0;
  }
  contextChange(t) {
    this.gl = t, this.blendModes = tg(t), this.set(this.defaultState), this.reset();
  }
  /**
   * Sets the current state
   * @param {*} state - The state to set.
   */
  set(t) {
    if (t = t || this.defaultState, this.stateId !== t.data) {
      let e = this.stateId ^ t.data, r = 0;
      for (; e; )
        e & 1 && this.map[r].call(this, !!(t.data & 1 << r)), e = e >> 1, r++;
      this.stateId = t.data;
    }
    for (let e = 0; e < this.checks.length; e++)
      this.checks[e](this, t);
  }
  /**
   * Sets the state, when previous state is unknown.
   * @param {*} state - The state to set
   */
  forceState(t) {
    t = t || this.defaultState;
    for (let e = 0; e < this.map.length; e++)
      this.map[e].call(this, !!(t.data & 1 << e));
    for (let e = 0; e < this.checks.length; e++)
      this.checks[e](this, t);
    this.stateId = t.data;
  }
  /**
   * Sets whether to enable or disable blending.
   * @param value - Turn on or off WebGl blending.
   */
  setBlend(t) {
    this.updateCheck(la.checkBlendMode, t), this.gl[t ? "enable" : "disable"](this.gl.BLEND);
  }
  /**
   * Sets whether to enable or disable polygon offset fill.
   * @param value - Turn on or off webgl polygon offset testing.
   */
  setOffset(t) {
    this.updateCheck(la.checkPolygonOffset, t), this.gl[t ? "enable" : "disable"](this.gl.POLYGON_OFFSET_FILL);
  }
  /**
   * Sets whether to enable or disable depth test.
   * @param value - Turn on or off webgl depth testing.
   */
  setDepthTest(t) {
    this.gl[t ? "enable" : "disable"](this.gl.DEPTH_TEST);
  }
  /**
   * Sets whether to enable or disable depth mask.
   * @param value - Turn on or off webgl depth mask.
   */
  setDepthMask(t) {
    this.gl.depthMask(t);
  }
  /**
   * Sets whether to enable or disable cull face.
   * @param {boolean} value - Turn on or off webgl cull face.
   */
  setCullFace(t) {
    this.gl[t ? "enable" : "disable"](this.gl.CULL_FACE);
  }
  /**
   * Sets the gl front face.
   * @param {boolean} value - true is clockwise and false is counter-clockwise
   */
  setFrontFace(t) {
    this.gl.frontFace(this.gl[t ? "CW" : "CCW"]);
  }
  /**
   * Sets the blend mode.
   * @param {number} value - The blend mode to set to.
   */
  setBlendMode(t) {
    if (t === this.blendMode)
      return;
    this.blendMode = t;
    const e = this.blendModes[t], r = this.gl;
    e.length === 2 ? r.blendFunc(e[0], e[1]) : r.blendFuncSeparate(e[0], e[1], e[2], e[3]), e.length === 6 ? (this._blendEq = !0, r.blendEquationSeparate(e[4], e[5])) : this._blendEq && (this._blendEq = !1, r.blendEquationSeparate(r.FUNC_ADD, r.FUNC_ADD));
  }
  /**
   * Sets the polygon offset.
   * @param {number} value - the polygon offset
   * @param {number} scale - the polygon offset scale
   */
  setPolygonOffset(t, e) {
    this.gl.polygonOffset(t, e);
  }
  // used
  /** Resets all the logic and disables the VAOs. */
  reset() {
    this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !1), this.forceState(this.defaultState), this._blendEq = !0, this.blendMode = -1, this.setBlendMode(0);
  }
  /**
   * Checks to see which updates should be checked based on which settings have been activated.
   *
   * For example, if blend is enabled then we should check the blend modes each time the state is changed
   * or if polygon fill is activated then we need to check if the polygon offset changes.
   * The idea is that we only check what we have too.
   * @param func - the checking function to add or remove
   * @param value - should the check function be added or removed.
   */
  updateCheck(t, e) {
    const r = this.checks.indexOf(t);
    e && r === -1 ? this.checks.push(t) : !e && r !== -1 && this.checks.splice(r, 1);
  }
  /**
   * A private little wrapper function that we call to check the blend mode.
   * @param system - the System to perform the state check on
   * @param state - the state that the blendMode will pulled from
   */
  static checkBlendMode(t, e) {
    t.setBlendMode(e.blendMode);
  }
  /**
   * A private little wrapper function that we call to check the polygon offset.
   * @param system - the System to perform the state check on
   * @param state - the state that the blendMode will pulled from
   */
  static checkPolygonOffset(t, e) {
    t.setPolygonOffset(1, e.polygonOffset);
  }
  /**
   * @ignore
   */
  destroy() {
    this.gl = null;
  }
};
ou.extension = {
  type: F.RendererSystem,
  name: "state"
};
let og = ou;
k.add(og);
class hg extends gi {
  constructor() {
    super(...arguments), this.runners = {}, this._systemsHash = {};
  }
  /**
   * Set up a system with a collection of SystemClasses and runners.
   * Systems are attached dynamically to this class when added.
   * @param config - the config for the system manager
   */
  setup(t) {
    this.addRunners(...t.runners);
    const e = (t.priority ?? []).filter((s) => t.systems[s]), r = [
      ...e,
      ...Object.keys(t.systems).filter((s) => !e.includes(s))
    ];
    for (const s of r)
      this.addSystem(t.systems[s], s);
  }
  /**
   * Create a bunch of runners based of a collection of ids
   * @param runnerIds - the runner ids to add
   */
  addRunners(...t) {
    t.forEach((e) => {
      this.runners[e] = new Wt(e);
    });
  }
  /**
   * Add a new system to the renderer.
   * @param ClassRef - Class reference
   * @param name - Property name for system, if not specified
   *        will use a static `name` property on the class itself. This
   *        name will be assigned as s property on the Renderer so make
   *        sure it doesn't collide with properties on Renderer.
   * @returns Return instance of renderer
   */
  addSystem(t, e) {
    const r = new t(this);
    if (this[e])
      throw new Error(`Whoops! The name "${e}" is already in use`);
    this[e] = r, this._systemsHash[e] = r;
    for (const s in this.runners)
      this.runners[s].add(r);
    return this;
  }
  /**
   * A function that will run a runner and call the runners function but pass in different options
   * to each system based on there name.
   *
   * E.g. If you have two systems added called `systemA` and `systemB` you could call do the following:
   *
   * ```js
   * system.emitWithCustomOptions(init, {
   *     systemA: {...optionsForA},
   *     systemB: {...optionsForB},
   * });
   * ```
   *
   * `init` would be called on system A passing `optionsForA` and on system B passing `optionsForB`.
   * @param runner - the runner to target
   * @param options - key value options for each system
   */
  emitWithCustomOptions(t, e) {
    const r = Object.keys(this._systemsHash);
    t.items.forEach((s) => {
      const n = r.find((a) => this._systemsHash[a] === s);
      s[t.name](e[n]);
    });
  }
  /** destroy the all runners and systems. Its apps job to */
  destroy() {
    Object.values(this.runners).forEach((t) => {
      t.destroy();
    }), this._systemsHash = {};
  }
  // TODO implement!
  // removeSystem(ClassRef: ISystemConstructor, name: string): void
  // {
  // }
}
const ti = class ts {
  /** @param renderer - The renderer this System works for. */
  constructor(t) {
    this.renderer = t, this.count = 0, this.checkCount = 0, this.maxIdle = ts.defaultMaxIdle, this.checkCountMax = ts.defaultCheckCountMax, this.mode = ts.defaultMode;
  }
  /**
   * Checks to see when the last time a texture was used.
   * If the texture has not been used for a specified amount of time, it will be removed from the GPU.
   */
  postrender() {
    this.renderer.objectRenderer.renderingToScreen && (this.count++, this.mode !== Na.MANUAL && (this.checkCount++, this.checkCount > this.checkCountMax && (this.checkCount = 0, this.run())));
  }
  /**
   * Checks to see when the last time a texture was used.
   * If the texture has not been used for a specified amount of time, it will be removed from the GPU.
   */
  run() {
    const t = this.renderer.texture, e = t.managedTextures;
    let r = !1;
    for (let s = 0; s < e.length; s++) {
      const n = e[s];
      n.resource && this.count - n.touched > this.maxIdle && (t.destroyTexture(n, !0), e[s] = null, r = !0);
    }
    if (r) {
      let s = 0;
      for (let n = 0; n < e.length; n++)
        e[n] !== null && (e[s++] = e[n]);
      e.length = s;
    }
  }
  /**
   * Removes all the textures within the specified displayObject and its children from the GPU.
   * @param {PIXI.DisplayObject} displayObject - the displayObject to remove the textures from.
   */
  unload(t) {
    const e = this.renderer.texture, r = t._texture;
    r && !r.framebuffer && e.destroyTexture(r);
    for (let s = t.children.length - 1; s >= 0; s--)
      this.unload(t.children[s]);
  }
  destroy() {
    this.renderer = null;
  }
};
ti.defaultMode = Na.AUTO, /**
* Default maximum idle frames before a texture is destroyed by garbage collection.
* @static
* @default 3600
* @see PIXI.TextureGCSystem#maxIdle
*/
ti.defaultMaxIdle = 60 * 60, /**
* Default frames between two garbage collections.
* @static
* @default 600
* @see PIXI.TextureGCSystem#checkCountMax
*/
ti.defaultCheckCountMax = 60 * 10, /** @ignore */
ti.extension = {
  type: F.RendererSystem,
  name: "textureGC"
};
let Qe = ti;
k.add(Qe);
class xn {
  constructor(t) {
    this.texture = t, this.width = -1, this.height = -1, this.dirtyId = -1, this.dirtyStyleId = -1, this.mipmap = !1, this.wrapMode = 33071, this.type = V.UNSIGNED_BYTE, this.internalFormat = P.RGBA, this.samplerType = 0;
  }
}
function lg(i) {
  let t;
  return "WebGL2RenderingContext" in globalThis && i instanceof globalThis.WebGL2RenderingContext ? t = {
    [i.RGB]: N.FLOAT,
    [i.RGBA]: N.FLOAT,
    [i.ALPHA]: N.FLOAT,
    [i.LUMINANCE]: N.FLOAT,
    [i.LUMINANCE_ALPHA]: N.FLOAT,
    [i.R8]: N.FLOAT,
    [i.R8_SNORM]: N.FLOAT,
    [i.RG8]: N.FLOAT,
    [i.RG8_SNORM]: N.FLOAT,
    [i.RGB8]: N.FLOAT,
    [i.RGB8_SNORM]: N.FLOAT,
    [i.RGB565]: N.FLOAT,
    [i.RGBA4]: N.FLOAT,
    [i.RGB5_A1]: N.FLOAT,
    [i.RGBA8]: N.FLOAT,
    [i.RGBA8_SNORM]: N.FLOAT,
    [i.RGB10_A2]: N.FLOAT,
    [i.RGB10_A2UI]: N.FLOAT,
    [i.SRGB8]: N.FLOAT,
    [i.SRGB8_ALPHA8]: N.FLOAT,
    [i.R16F]: N.FLOAT,
    [i.RG16F]: N.FLOAT,
    [i.RGB16F]: N.FLOAT,
    [i.RGBA16F]: N.FLOAT,
    [i.R32F]: N.FLOAT,
    [i.RG32F]: N.FLOAT,
    [i.RGB32F]: N.FLOAT,
    [i.RGBA32F]: N.FLOAT,
    [i.R11F_G11F_B10F]: N.FLOAT,
    [i.RGB9_E5]: N.FLOAT,
    [i.R8I]: N.INT,
    [i.R8UI]: N.UINT,
    [i.R16I]: N.INT,
    [i.R16UI]: N.UINT,
    [i.R32I]: N.INT,
    [i.R32UI]: N.UINT,
    [i.RG8I]: N.INT,
    [i.RG8UI]: N.UINT,
    [i.RG16I]: N.INT,
    [i.RG16UI]: N.UINT,
    [i.RG32I]: N.INT,
    [i.RG32UI]: N.UINT,
    [i.RGB8I]: N.INT,
    [i.RGB8UI]: N.UINT,
    [i.RGB16I]: N.INT,
    [i.RGB16UI]: N.UINT,
    [i.RGB32I]: N.INT,
    [i.RGB32UI]: N.UINT,
    [i.RGBA8I]: N.INT,
    [i.RGBA8UI]: N.UINT,
    [i.RGBA16I]: N.INT,
    [i.RGBA16UI]: N.UINT,
    [i.RGBA32I]: N.INT,
    [i.RGBA32UI]: N.UINT,
    [i.DEPTH_COMPONENT16]: N.FLOAT,
    [i.DEPTH_COMPONENT24]: N.FLOAT,
    [i.DEPTH_COMPONENT32F]: N.FLOAT,
    [i.DEPTH_STENCIL]: N.FLOAT,
    [i.DEPTH24_STENCIL8]: N.FLOAT,
    [i.DEPTH32F_STENCIL8]: N.FLOAT
  } : t = {
    [i.RGB]: N.FLOAT,
    [i.RGBA]: N.FLOAT,
    [i.ALPHA]: N.FLOAT,
    [i.LUMINANCE]: N.FLOAT,
    [i.LUMINANCE_ALPHA]: N.FLOAT,
    [i.DEPTH_STENCIL]: N.FLOAT
  }, t;
}
function ug(i) {
  let t;
  return "WebGL2RenderingContext" in globalThis && i instanceof globalThis.WebGL2RenderingContext ? t = {
    [V.UNSIGNED_BYTE]: {
      [P.RGBA]: i.RGBA8,
      [P.RGB]: i.RGB8,
      [P.RG]: i.RG8,
      [P.RED]: i.R8,
      [P.RGBA_INTEGER]: i.RGBA8UI,
      [P.RGB_INTEGER]: i.RGB8UI,
      [P.RG_INTEGER]: i.RG8UI,
      [P.RED_INTEGER]: i.R8UI,
      [P.ALPHA]: i.ALPHA,
      [P.LUMINANCE]: i.LUMINANCE,
      [P.LUMINANCE_ALPHA]: i.LUMINANCE_ALPHA
    },
    [V.BYTE]: {
      [P.RGBA]: i.RGBA8_SNORM,
      [P.RGB]: i.RGB8_SNORM,
      [P.RG]: i.RG8_SNORM,
      [P.RED]: i.R8_SNORM,
      [P.RGBA_INTEGER]: i.RGBA8I,
      [P.RGB_INTEGER]: i.RGB8I,
      [P.RG_INTEGER]: i.RG8I,
      [P.RED_INTEGER]: i.R8I
    },
    [V.UNSIGNED_SHORT]: {
      [P.RGBA_INTEGER]: i.RGBA16UI,
      [P.RGB_INTEGER]: i.RGB16UI,
      [P.RG_INTEGER]: i.RG16UI,
      [P.RED_INTEGER]: i.R16UI,
      [P.DEPTH_COMPONENT]: i.DEPTH_COMPONENT16
    },
    [V.SHORT]: {
      [P.RGBA_INTEGER]: i.RGBA16I,
      [P.RGB_INTEGER]: i.RGB16I,
      [P.RG_INTEGER]: i.RG16I,
      [P.RED_INTEGER]: i.R16I
    },
    [V.UNSIGNED_INT]: {
      [P.RGBA_INTEGER]: i.RGBA32UI,
      [P.RGB_INTEGER]: i.RGB32UI,
      [P.RG_INTEGER]: i.RG32UI,
      [P.RED_INTEGER]: i.R32UI,
      [P.DEPTH_COMPONENT]: i.DEPTH_COMPONENT24
    },
    [V.INT]: {
      [P.RGBA_INTEGER]: i.RGBA32I,
      [P.RGB_INTEGER]: i.RGB32I,
      [P.RG_INTEGER]: i.RG32I,
      [P.RED_INTEGER]: i.R32I
    },
    [V.FLOAT]: {
      [P.RGBA]: i.RGBA32F,
      [P.RGB]: i.RGB32F,
      [P.RG]: i.RG32F,
      [P.RED]: i.R32F,
      [P.DEPTH_COMPONENT]: i.DEPTH_COMPONENT32F
    },
    [V.HALF_FLOAT]: {
      [P.RGBA]: i.RGBA16F,
      [P.RGB]: i.RGB16F,
      [P.RG]: i.RG16F,
      [P.RED]: i.R16F
    },
    [V.UNSIGNED_SHORT_5_6_5]: {
      [P.RGB]: i.RGB565
    },
    [V.UNSIGNED_SHORT_4_4_4_4]: {
      [P.RGBA]: i.RGBA4
    },
    [V.UNSIGNED_SHORT_5_5_5_1]: {
      [P.RGBA]: i.RGB5_A1
    },
    [V.UNSIGNED_INT_2_10_10_10_REV]: {
      [P.RGBA]: i.RGB10_A2,
      [P.RGBA_INTEGER]: i.RGB10_A2UI
    },
    [V.UNSIGNED_INT_10F_11F_11F_REV]: {
      [P.RGB]: i.R11F_G11F_B10F
    },
    [V.UNSIGNED_INT_5_9_9_9_REV]: {
      [P.RGB]: i.RGB9_E5
    },
    [V.UNSIGNED_INT_24_8]: {
      [P.DEPTH_STENCIL]: i.DEPTH24_STENCIL8
    },
    [V.FLOAT_32_UNSIGNED_INT_24_8_REV]: {
      [P.DEPTH_STENCIL]: i.DEPTH32F_STENCIL8
    }
  } : t = {
    [V.UNSIGNED_BYTE]: {
      [P.RGBA]: i.RGBA,
      [P.RGB]: i.RGB,
      [P.ALPHA]: i.ALPHA,
      [P.LUMINANCE]: i.LUMINANCE,
      [P.LUMINANCE_ALPHA]: i.LUMINANCE_ALPHA
    },
    [V.UNSIGNED_SHORT_5_6_5]: {
      [P.RGB]: i.RGB
    },
    [V.UNSIGNED_SHORT_4_4_4_4]: {
      [P.RGBA]: i.RGBA
    },
    [V.UNSIGNED_SHORT_5_5_5_1]: {
      [P.RGBA]: i.RGBA
    }
  }, t;
}
class hu {
  /**
   * @param renderer - The renderer this system works for.
   */
  constructor(t) {
    this.renderer = t, this.boundTextures = [], this.currentLocation = -1, this.managedTextures = [], this._unknownBoundTextures = !1, this.unknownTexture = new W(), this.hasIntegerTextures = !1;
  }
  /** Sets up the renderer context and necessary buffers. */
  contextChange() {
    const t = this.gl = this.renderer.gl;
    this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.webGLVersion = this.renderer.context.webGLVersion, this.internalFormats = ug(t), this.samplerTypes = lg(t);
    const e = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS);
    this.boundTextures.length = e;
    for (let s = 0; s < e; s++)
      this.boundTextures[s] = null;
    this.emptyTextures = {};
    const r = new xn(t.createTexture());
    t.bindTexture(t.TEXTURE_2D, r.texture), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, new Uint8Array(4)), this.emptyTextures[t.TEXTURE_2D] = r, this.emptyTextures[t.TEXTURE_CUBE_MAP] = new xn(t.createTexture()), t.bindTexture(t.TEXTURE_CUBE_MAP, this.emptyTextures[t.TEXTURE_CUBE_MAP].texture);
    for (let s = 0; s < 6; s++)
      t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + s, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, null);
    t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MIN_FILTER, t.LINEAR);
    for (let s = 0; s < this.boundTextures.length; s++)
      this.bind(null, s);
  }
  /**
   * Bind a texture to a specific location
   *
   * If you want to unbind something, please use `unbind(texture)` instead of `bind(null, textureLocation)`
   * @param texture - Texture to bind
   * @param [location=0] - Location to bind at
   */
  bind(t, e = 0) {
    const { gl: r } = this;
    if (t = t == null ? void 0 : t.castToBaseTexture(), (t == null ? void 0 : t.valid) && !t.parentTextureArray) {
      t.touched = this.renderer.textureGC.count;
      const s = t._glTextures[this.CONTEXT_UID] || this.initTexture(t);
      this.boundTextures[e] !== t && (this.currentLocation !== e && (this.currentLocation = e, r.activeTexture(r.TEXTURE0 + e)), r.bindTexture(t.target, s.texture)), s.dirtyId !== t.dirtyId ? (this.currentLocation !== e && (this.currentLocation = e, r.activeTexture(r.TEXTURE0 + e)), this.updateTexture(t)) : s.dirtyStyleId !== t.dirtyStyleId && this.updateTextureStyle(t), this.boundTextures[e] = t;
    } else
      this.currentLocation !== e && (this.currentLocation = e, r.activeTexture(r.TEXTURE0 + e)), r.bindTexture(r.TEXTURE_2D, this.emptyTextures[r.TEXTURE_2D].texture), this.boundTextures[e] = null;
  }
  /** Resets texture location and bound textures Actual `bind(null, i)` calls will be performed at next `unbind()` call */
  reset() {
    this._unknownBoundTextures = !0, this.hasIntegerTextures = !1, this.currentLocation = -1;
    for (let t = 0; t < this.boundTextures.length; t++)
      this.boundTextures[t] = this.unknownTexture;
  }
  /**
   * Unbind a texture.
   * @param texture - Texture to bind
   */
  unbind(t) {
    const { gl: e, boundTextures: r } = this;
    if (this._unknownBoundTextures) {
      this._unknownBoundTextures = !1;
      for (let s = 0; s < r.length; s++)
        r[s] === this.unknownTexture && this.bind(null, s);
    }
    for (let s = 0; s < r.length; s++)
      r[s] === t && (this.currentLocation !== s && (e.activeTexture(e.TEXTURE0 + s), this.currentLocation = s), e.bindTexture(t.target, this.emptyTextures[t.target].texture), r[s] = null);
  }
  /**
   * Ensures that current boundTextures all have FLOAT sampler type,
   * see {@link PIXI.SAMPLER_TYPES} for explanation.
   * @param maxTextures - number of locations to check
   */
  ensureSamplerType(t) {
    const { boundTextures: e, hasIntegerTextures: r, CONTEXT_UID: s } = this;
    if (r)
      for (let n = t - 1; n >= 0; --n) {
        const a = e[n];
        a && a._glTextures[s].samplerType !== N.FLOAT && this.renderer.texture.unbind(a);
      }
  }
  /**
   * Initialize a texture
   * @private
   * @param texture - Texture to initialize
   */
  initTexture(t) {
    const e = new xn(this.gl.createTexture());
    return e.dirtyId = -1, t._glTextures[this.CONTEXT_UID] = e, this.managedTextures.push(t), t.on("dispose", this.destroyTexture, this), e;
  }
  initTextureType(t, e) {
    var r;
    e.internalFormat = ((r = this.internalFormats[t.type]) == null ? void 0 : r[t.format]) ?? t.format, e.samplerType = this.samplerTypes[e.internalFormat] ?? N.FLOAT, this.webGLVersion === 2 && t.type === V.HALF_FLOAT ? e.type = this.gl.HALF_FLOAT : e.type = t.type;
  }
  /**
   * Update a texture
   * @private
   * @param {PIXI.BaseTexture} texture - Texture to initialize
   */
  updateTexture(t) {
    var s;
    const e = t._glTextures[this.CONTEXT_UID];
    if (!e)
      return;
    const r = this.renderer;
    if (this.initTextureType(t, e), (s = t.resource) == null ? void 0 : s.upload(r, t, e))
      e.samplerType !== N.FLOAT && (this.hasIntegerTextures = !0);
    else {
      const n = t.realWidth, a = t.realHeight, o = r.gl;
      (e.width !== n || e.height !== a || e.dirtyId < 0) && (e.width = n, e.height = a, o.texImage2D(
        t.target,
        0,
        e.internalFormat,
        n,
        a,
        0,
        t.format,
        e.type,
        null
      ));
    }
    t.dirtyStyleId !== e.dirtyStyleId && this.updateTextureStyle(t), e.dirtyId = t.dirtyId;
  }
  /**
   * Deletes the texture from WebGL
   * @private
   * @param texture - the texture to destroy
   * @param [skipRemove=false] - Whether to skip removing the texture from the TextureManager.
   */
  destroyTexture(t, e) {
    const { gl: r } = this;
    if (t = t.castToBaseTexture(), t._glTextures[this.CONTEXT_UID] && (this.unbind(t), r.deleteTexture(t._glTextures[this.CONTEXT_UID].texture), t.off("dispose", this.destroyTexture, this), delete t._glTextures[this.CONTEXT_UID], !e)) {
      const s = this.managedTextures.indexOf(t);
      s !== -1 && Pr(this.managedTextures, s, 1);
    }
  }
  /**
   * Update texture style such as mipmap flag
   * @private
   * @param {PIXI.BaseTexture} texture - Texture to update
   */
  updateTextureStyle(t) {
    var r;
    const e = t._glTextures[this.CONTEXT_UID];
    e && ((t.mipmap === ue.POW2 || this.webGLVersion !== 2) && !t.isPowerOfTwo ? e.mipmap = !1 : e.mipmap = t.mipmap >= 1, this.webGLVersion !== 2 && !t.isPowerOfTwo ? e.wrapMode = Ee.CLAMP : e.wrapMode = t.wrapMode, (r = t.resource) != null && r.style(this.renderer, t, e) || this.setStyle(t, e), e.dirtyStyleId = t.dirtyStyleId);
  }
  /**
   * Set style for texture
   * @private
   * @param texture - Texture to update
   * @param glTexture
   */
  setStyle(t, e) {
    const r = this.gl;
    if (e.mipmap && t.mipmap !== ue.ON_MANUAL && r.generateMipmap(t.target), r.texParameteri(t.target, r.TEXTURE_WRAP_S, e.wrapMode), r.texParameteri(t.target, r.TEXTURE_WRAP_T, e.wrapMode), e.mipmap) {
      r.texParameteri(t.target, r.TEXTURE_MIN_FILTER, t.scaleMode === ye.LINEAR ? r.LINEAR_MIPMAP_LINEAR : r.NEAREST_MIPMAP_NEAREST);
      const s = this.renderer.context.extensions.anisotropicFiltering;
      if (s && t.anisotropicLevel > 0 && t.scaleMode === ye.LINEAR) {
        const n = Math.min(t.anisotropicLevel, r.getParameter(s.MAX_TEXTURE_MAX_ANISOTROPY_EXT));
        r.texParameterf(t.target, s.TEXTURE_MAX_ANISOTROPY_EXT, n);
      }
    } else
      r.texParameteri(t.target, r.TEXTURE_MIN_FILTER, t.scaleMode === ye.LINEAR ? r.LINEAR : r.NEAREST);
    r.texParameteri(t.target, r.TEXTURE_MAG_FILTER, t.scaleMode === ye.LINEAR ? r.LINEAR : r.NEAREST);
  }
  destroy() {
    this.renderer = null;
  }
}
hu.extension = {
  type: F.RendererSystem,
  name: "texture"
};
k.add(hu);
class lu {
  /**
   * @param renderer - The renderer this System works for.
   */
  constructor(t) {
    this.renderer = t;
  }
  /** Sets up the renderer context and necessary buffers. */
  contextChange() {
    this.gl = this.renderer.gl, this.CONTEXT_UID = this.renderer.CONTEXT_UID;
  }
  /**
   * Bind TransformFeedback and buffers
   * @param transformFeedback - TransformFeedback to bind
   */
  bind(t) {
    const { gl: e, CONTEXT_UID: r } = this, s = t._glTransformFeedbacks[r] || this.createGLTransformFeedback(t);
    e.bindTransformFeedback(e.TRANSFORM_FEEDBACK, s);
  }
  /** Unbind TransformFeedback */
  unbind() {
    const { gl: t } = this;
    t.bindTransformFeedback(t.TRANSFORM_FEEDBACK, null);
  }
  /**
   * Begin TransformFeedback
   * @param drawMode - DrawMode for TransformFeedback
   * @param shader - A Shader used by TransformFeedback. Current bound shader will be used if not provided.
   */
  beginTransformFeedback(t, e) {
    const { gl: r, renderer: s } = this;
    e && s.shader.bind(e), r.beginTransformFeedback(t);
  }
  /** End TransformFeedback */
  endTransformFeedback() {
    const { gl: t } = this;
    t.endTransformFeedback();
  }
  /**
   * Create TransformFeedback and bind buffers
   * @param tf - TransformFeedback
   * @returns WebGLTransformFeedback
   */
  createGLTransformFeedback(t) {
    const { gl: e, renderer: r, CONTEXT_UID: s } = this, n = e.createTransformFeedback();
    t._glTransformFeedbacks[s] = n, e.bindTransformFeedback(e.TRANSFORM_FEEDBACK, n);
    for (let a = 0; a < t.buffers.length; a++) {
      const o = t.buffers[a];
      o && (r.buffer.update(o), o._glBuffers[s].refCount++, e.bindBufferBase(e.TRANSFORM_FEEDBACK_BUFFER, a, o._glBuffers[s].buffer || null));
    }
    return e.bindTransformFeedback(e.TRANSFORM_FEEDBACK, null), t.disposeRunner.add(this), n;
  }
  /**
   * Disposes TransfromFeedback
   * @param {PIXI.TransformFeedback} tf - TransformFeedback
   * @param {boolean} [contextLost=false] - If context was lost, we suppress delete TransformFeedback
   */
  disposeTransformFeedback(t, e) {
    const r = t._glTransformFeedbacks[this.CONTEXT_UID], s = this.gl;
    t.disposeRunner.remove(this);
    const n = this.renderer.buffer;
    if (n)
      for (let a = 0; a < t.buffers.length; a++) {
        const o = t.buffers[a];
        if (!o)
          continue;
        const h = o._glBuffers[this.CONTEXT_UID];
        h && (h.refCount--, h.refCount === 0 && !e && n.dispose(o, e));
      }
    r && (e || s.deleteTransformFeedback(r), delete t._glTransformFeedbacks[this.CONTEXT_UID]);
  }
  destroy() {
    this.renderer = null;
  }
}
lu.extension = {
  type: F.RendererSystem,
  name: "transformFeedback"
};
k.add(lu);
class vs {
  constructor(t) {
    this.renderer = t;
  }
  /**
   * initiates the view system
   * @param {PIXI.ViewOptions} options - the options for the view
   */
  init(t) {
    this.screen = new j(0, 0, t.width, t.height), this.element = t.view || L.ADAPTER.createCanvas(), this.resolution = t.resolution || L.RESOLUTION, this.autoDensity = !!t.autoDensity;
  }
  /**
   * Resizes the screen and canvas to the specified dimensions.
   * @param desiredScreenWidth - The new width of the screen.
   * @param desiredScreenHeight - The new height of the screen.
   */
  resizeView(t, e) {
    this.element.width = Math.round(t * this.resolution), this.element.height = Math.round(e * this.resolution);
    const r = this.element.width / this.resolution, s = this.element.height / this.resolution;
    this.screen.width = r, this.screen.height = s, this.autoDensity && (this.element.style.width = `${r}px`, this.element.style.height = `${s}px`), this.renderer.emit("resize", r, s), this.renderer.runners.resize.emit(this.screen.width, this.screen.height);
  }
  /**
   * Destroys this System and optionally removes the canvas from the dom.
   * @param {boolean} [removeView=false] - Whether to remove the canvas from the DOM.
   */
  destroy(t) {
    var e;
    t && ((e = this.element.parentNode) == null || e.removeChild(this.element)), this.renderer = null, this.element = null, this.screen = null;
  }
}
vs.defaultOptions = {
  /**
   * {@link PIXI.IRendererOptions.width}
   * @default 800
   * @memberof PIXI.settings.RENDER_OPTIONS
   */
  width: 800,
  /**
   * {@link PIXI.IRendererOptions.height}
   * @default 600
   * @memberof PIXI.settings.RENDER_OPTIONS
   */
  height: 600,
  /**
   * {@link PIXI.IRendererOptions.resolution}
   * @type {number}
   * @default PIXI.settings.RESOLUTION
   * @memberof PIXI.settings.RENDER_OPTIONS
   */
  resolution: void 0,
  /**
   * {@link PIXI.IRendererOptions.autoDensity}
   * @default false
   * @memberof PIXI.settings.RENDER_OPTIONS
   */
  autoDensity: !1
}, /** @ignore */
vs.extension = {
  type: [
    F.RendererSystem,
    F.CanvasRendererSystem
  ],
  name: "_view"
};
k.add(vs);
L.PREFER_ENV = hr.WEBGL2;
L.STRICT_TEXTURE_CACHE = !1;
L.RENDER_OPTIONS = {
  ...ys.defaultOptions,
  ...gs.defaultOptions,
  ...vs.defaultOptions,
  ..._s.defaultOptions
};
Object.defineProperties(L, {
  /**
   * @static
   * @name WRAP_MODE
   * @memberof PIXI.settings
   * @type {PIXI.WRAP_MODES}
   * @deprecated since 7.1.0
   * @see PIXI.BaseTexture.defaultOptions.wrapMode
   */
  WRAP_MODE: {
    get() {
      return W.defaultOptions.wrapMode;
    },
    set(i) {
      Y("7.1.0", "settings.WRAP_MODE is deprecated, use BaseTexture.defaultOptions.wrapMode"), W.defaultOptions.wrapMode = i;
    }
  },
  /**
   * @static
   * @name SCALE_MODE
   * @memberof PIXI.settings
   * @type {PIXI.SCALE_MODES}
   * @deprecated since 7.1.0
   * @see PIXI.BaseTexture.defaultOptions.scaleMode
   */
  SCALE_MODE: {
    get() {
      return W.defaultOptions.scaleMode;
    },
    set(i) {
      Y("7.1.0", "settings.SCALE_MODE is deprecated, use BaseTexture.defaultOptions.scaleMode"), W.defaultOptions.scaleMode = i;
    }
  },
  /**
   * @static
   * @name MIPMAP_TEXTURES
   * @memberof PIXI.settings
   * @type {PIXI.MIPMAP_MODES}
   * @deprecated since 7.1.0
   * @see PIXI.BaseTexture.defaultOptions.mipmap
   */
  MIPMAP_TEXTURES: {
    get() {
      return W.defaultOptions.mipmap;
    },
    set(i) {
      Y("7.1.0", "settings.MIPMAP_TEXTURES is deprecated, use BaseTexture.defaultOptions.mipmap"), W.defaultOptions.mipmap = i;
    }
    // MIPMAP_MODES.POW2,
  },
  /**
   * @static
   * @name ANISOTROPIC_LEVEL
   * @memberof PIXI.settings
   * @type {number}
   * @deprecated since 7.1.0
   * @see PIXI.BaseTexture.defaultOptions.anisotropicLevel
   */
  ANISOTROPIC_LEVEL: {
    get() {
      return W.defaultOptions.anisotropicLevel;
    },
    set(i) {
      Y(
        "7.1.0",
        "settings.ANISOTROPIC_LEVEL is deprecated, use BaseTexture.defaultOptions.anisotropicLevel"
      ), W.defaultOptions.anisotropicLevel = i;
    }
  },
  /**
   * Default filter resolution.
   * @static
   * @name FILTER_RESOLUTION
   * @memberof PIXI.settings
   * @deprecated since 7.1.0
   * @type {number|null}
   * @see PIXI.Filter.defaultResolution
   */
  FILTER_RESOLUTION: {
    get() {
      return Y("7.1.0", "settings.FILTER_RESOLUTION is deprecated, use Filter.defaultResolution"), Pt.defaultResolution;
    },
    set(i) {
      Pt.defaultResolution = i;
    }
  },
  /**
   * Default filter samples.
   * @static
   * @name FILTER_MULTISAMPLE
   * @memberof PIXI.settings
   * @deprecated since 7.1.0
   * @type {PIXI.MSAA_QUALITY}
   * @see PIXI.Filter.defaultMultisample
   */
  FILTER_MULTISAMPLE: {
    get() {
      return Y("7.1.0", "settings.FILTER_MULTISAMPLE is deprecated, use Filter.defaultMultisample"), Pt.defaultMultisample;
    },
    set(i) {
      Pt.defaultMultisample = i;
    }
  },
  /**
   * The maximum textures that this device supports.
   * @static
   * @name SPRITE_MAX_TEXTURES
   * @memberof PIXI.settings
   * @deprecated since 7.1.0
   * @see PIXI.BatchRenderer.defaultMaxTextures
   * @type {number}
   */
  SPRITE_MAX_TEXTURES: {
    get() {
      return Ze.defaultMaxTextures;
    },
    set(i) {
      Y("7.1.0", "settings.SPRITE_MAX_TEXTURES is deprecated, use BatchRenderer.defaultMaxTextures"), Ze.defaultMaxTextures = i;
    }
  },
  /**
   * The default sprite batch size.
   *
   * The default aims to balance desktop and mobile devices.
   * @static
   * @name SPRITE_BATCH_SIZE
   * @memberof PIXI.settings
   * @see PIXI.BatchRenderer.defaultBatchSize
   * @deprecated since 7.1.0
   * @type {number}
   */
  SPRITE_BATCH_SIZE: {
    get() {
      return Ze.defaultBatchSize;
    },
    set(i) {
      Y("7.1.0", "settings.SPRITE_BATCH_SIZE is deprecated, use BatchRenderer.defaultBatchSize"), Ze.defaultBatchSize = i;
    }
  },
  /**
   * Can we upload the same buffer in a single frame?
   * @static
   * @name CAN_UPLOAD_SAME_BUFFER
   * @memberof PIXI.settings
   * @see PIXI.BatchRenderer.canUploadSameBuffer
   * @deprecated since 7.1.0
   * @type {boolean}
   */
  CAN_UPLOAD_SAME_BUFFER: {
    get() {
      return Ze.canUploadSameBuffer;
    },
    set(i) {
      Y("7.1.0", "settings.CAN_UPLOAD_SAME_BUFFER is deprecated, use BatchRenderer.canUploadSameBuffer"), Ze.canUploadSameBuffer = i;
    }
  },
  /**
   * Default Garbage Collection mode.
   * @static
   * @name GC_MODE
   * @memberof PIXI.settings
   * @type {PIXI.GC_MODES}
   * @deprecated since 7.1.0
   * @see PIXI.TextureGCSystem.defaultMode
   */
  GC_MODE: {
    get() {
      return Qe.defaultMode;
    },
    set(i) {
      Y("7.1.0", "settings.GC_MODE is deprecated, use TextureGCSystem.defaultMode"), Qe.defaultMode = i;
    }
  },
  /**
   * Default Garbage Collection max idle.
   * @static
   * @name GC_MAX_IDLE
   * @memberof PIXI.settings
   * @type {number}
   * @deprecated since 7.1.0
   * @see PIXI.TextureGCSystem.defaultMaxIdle
   */
  GC_MAX_IDLE: {
    get() {
      return Qe.defaultMaxIdle;
    },
    set(i) {
      Y("7.1.0", "settings.GC_MAX_IDLE is deprecated, use TextureGCSystem.defaultMaxIdle"), Qe.defaultMaxIdle = i;
    }
  },
  /**
   * Default Garbage Collection maximum check count.
   * @static
   * @name GC_MAX_CHECK_COUNT
   * @memberof PIXI.settings
   * @type {number}
   * @deprecated since 7.1.0
   * @see PIXI.TextureGCSystem.defaultCheckCountMax
   */
  GC_MAX_CHECK_COUNT: {
    get() {
      return Qe.defaultCheckCountMax;
    },
    set(i) {
      Y("7.1.0", "settings.GC_MAX_CHECK_COUNT is deprecated, use TextureGCSystem.defaultCheckCountMax"), Qe.defaultCheckCountMax = i;
    }
  },
  /**
   * Default specify float precision in vertex shader.
   * @static
   * @name PRECISION_VERTEX
   * @memberof PIXI.settings
   * @type {PIXI.PRECISION}
   * @deprecated since 7.1.0
   * @see PIXI.Program.defaultVertexPrecision
   */
  PRECISION_VERTEX: {
    get() {
      return xe.defaultVertexPrecision;
    },
    set(i) {
      Y("7.1.0", "settings.PRECISION_VERTEX is deprecated, use Program.defaultVertexPrecision"), xe.defaultVertexPrecision = i;
    }
  },
  /**
   * Default specify float precision in fragment shader.
   * @static
   * @name PRECISION_FRAGMENT
   * @memberof PIXI.settings
   * @type {PIXI.PRECISION}
   * @deprecated since 7.1.0
   * @see PIXI.Program.defaultFragmentPrecision
   */
  PRECISION_FRAGMENT: {
    get() {
      return xe.defaultFragmentPrecision;
    },
    set(i) {
      Y("7.1.0", "settings.PRECISION_FRAGMENT is deprecated, use Program.defaultFragmentPrecision"), xe.defaultFragmentPrecision = i;
    }
  }
});
var Ge = /* @__PURE__ */ ((i) => (i[i.INTERACTION = 50] = "INTERACTION", i[i.HIGH = 25] = "HIGH", i[i.NORMAL = 0] = "NORMAL", i[i.LOW = -25] = "LOW", i[i.UTILITY = -50] = "UTILITY", i))(Ge || {});
class bn {
  /**
   * Constructor
   * @private
   * @param fn - The listener function to be added for one update
   * @param context - The listener context
   * @param priority - The priority for emitting
   * @param once - If the handler should fire once
   */
  constructor(t, e = null, r = 0, s = !1) {
    this.next = null, this.previous = null, this._destroyed = !1, this.fn = t, this.context = e, this.priority = r, this.once = s;
  }
  /**
   * Simple compare function to figure out if a function and context match.
   * @private
   * @param fn - The listener function to be added for one update
   * @param context - The listener context
   * @returns `true` if the listener match the arguments
   */
  match(t, e = null) {
    return this.fn === t && this.context === e;
  }
  /**
   * Emit by calling the current function.
   * @private
   * @param deltaTime - time since the last emit.
   * @returns Next ticker
   */
  emit(t) {
    this.fn && (this.context ? this.fn.call(this.context, t) : this.fn(t));
    const e = this.next;
    return this.once && this.destroy(!0), this._destroyed && (this.next = null), e;
  }
  /**
   * Connect to the list.
   * @private
   * @param previous - Input node, previous listener
   */
  connect(t) {
    this.previous = t, t.next && (t.next.previous = this), this.next = t.next, t.next = this;
  }
  /**
   * Destroy and don't use after this.
   * @private
   * @param hard - `true` to remove the `next` reference, this
   *        is considered a hard destroy. Soft destroy maintains the next reference.
   * @returns The listener to redirect while emitting or removing.
   */
  destroy(t = !1) {
    this._destroyed = !0, this.fn = null, this.context = null, this.previous && (this.previous.next = this.next), this.next && (this.next.previous = this.previous);
    const e = this.next;
    return this.next = t ? null : e, this.previous = null, e;
  }
}
const uu = class Nt {
  constructor() {
    this.autoStart = !1, this.deltaTime = 1, this.lastTime = -1, this.speed = 1, this.started = !1, this._requestId = null, this._maxElapsedMS = 100, this._minElapsedMS = 0, this._protected = !1, this._lastFrame = -1, this._head = new bn(null, null, 1 / 0), this.deltaMS = 1 / Nt.targetFPMS, this.elapsedMS = 1 / Nt.targetFPMS, this._tick = (t) => {
      this._requestId = null, this.started && (this.update(t), this.started && this._requestId === null && this._head.next && (this._requestId = requestAnimationFrame(this._tick)));
    };
  }
  /**
   * Conditionally requests a new animation frame.
   * If a frame has not already been requested, and if the internal
   * emitter has listeners, a new frame is requested.
   * @private
   */
  _requestIfNeeded() {
    this._requestId === null && this._head.next && (this.lastTime = performance.now(), this._lastFrame = this.lastTime, this._requestId = requestAnimationFrame(this._tick));
  }
  /**
   * Conditionally cancels a pending animation frame.
   * @private
   */
  _cancelIfNeeded() {
    this._requestId !== null && (cancelAnimationFrame(this._requestId), this._requestId = null);
  }
  /**
   * Conditionally requests a new animation frame.
   * If the ticker has been started it checks if a frame has not already
   * been requested, and if the internal emitter has listeners. If these
   * conditions are met, a new frame is requested. If the ticker has not
   * been started, but autoStart is `true`, then the ticker starts now,
   * and continues with the previous conditions to request a new frame.
   * @private
   */
  _startIfPossible() {
    this.started ? this._requestIfNeeded() : this.autoStart && this.start();
  }
  /**
   * Register a handler for tick events. Calls continuously unless
   * it is removed or the ticker is stopped.
   * @param fn - The listener function to be added for updates
   * @param context - The listener context
   * @param {number} [priority=PIXI.UPDATE_PRIORITY.NORMAL] - The priority for emitting
   * @returns This instance of a ticker
   */
  add(t, e, r = Ge.NORMAL) {
    return this._addListener(new bn(t, e, r));
  }
  /**
   * Add a handler for the tick event which is only execute once.
   * @param fn - The listener function to be added for one update
   * @param context - The listener context
   * @param {number} [priority=PIXI.UPDATE_PRIORITY.NORMAL] - The priority for emitting
   * @returns This instance of a ticker
   */
  addOnce(t, e, r = Ge.NORMAL) {
    return this._addListener(new bn(t, e, r, !0));
  }
  /**
   * Internally adds the event handler so that it can be sorted by priority.
   * Priority allows certain handler (user, AnimatedSprite, Interaction) to be run
   * before the rendering.
   * @private
   * @param listener - Current listener being added.
   * @returns This instance of a ticker
   */
  _addListener(t) {
    let e = this._head.next, r = this._head;
    if (!e)
      t.connect(r);
    else {
      for (; e; ) {
        if (t.priority > e.priority) {
          t.connect(r);
          break;
        }
        r = e, e = e.next;
      }
      t.previous || t.connect(r);
    }
    return this._startIfPossible(), this;
  }
  /**
   * Removes any handlers matching the function and context parameters.
   * If no handlers are left after removing, then it cancels the animation frame.
   * @param fn - The listener function to be removed
   * @param context - The listener context to be removed
   * @returns This instance of a ticker
   */
  remove(t, e) {
    let r = this._head.next;
    for (; r; )
      r.match(t, e) ? r = r.destroy() : r = r.next;
    return this._head.next || this._cancelIfNeeded(), this;
  }
  /**
   * The number of listeners on this ticker, calculated by walking through linked list
   * @readonly
   * @member {number}
   */
  get count() {
    if (!this._head)
      return 0;
    let t = 0, e = this._head;
    for (; e = e.next; )
      t++;
    return t;
  }
  /** Starts the ticker. If the ticker has listeners a new animation frame is requested at this point. */
  start() {
    this.started || (this.started = !0, this._requestIfNeeded());
  }
  /** Stops the ticker. If the ticker has requested an animation frame it is canceled at this point. */
  stop() {
    this.started && (this.started = !1, this._cancelIfNeeded());
  }
  /** Destroy the ticker and don't use after this. Calling this method removes all references to internal events. */
  destroy() {
    if (!this._protected) {
      this.stop();
      let t = this._head.next;
      for (; t; )
        t = t.destroy(!0);
      this._head.destroy(), this._head = null;
    }
  }
  /**
   * Triggers an update. An update entails setting the
   * current {@link PIXI.Ticker#elapsedMS},
   * the current {@link PIXI.Ticker#deltaTime},
   * invoking all listeners with current deltaTime,
   * and then finally setting {@link PIXI.Ticker#lastTime}
   * with the value of currentTime that was provided.
   * This method will be called automatically by animation
   * frame callbacks if the ticker instance has been started
   * and listeners are added.
   * @param {number} [currentTime=performance.now()] - the current time of execution
   */
  update(t = performance.now()) {
    let e;
    if (t > this.lastTime) {
      if (e = this.elapsedMS = t - this.lastTime, e > this._maxElapsedMS && (e = this._maxElapsedMS), e *= this.speed, this._minElapsedMS) {
        const n = t - this._lastFrame | 0;
        if (n < this._minElapsedMS)
          return;
        this._lastFrame = t - n % this._minElapsedMS;
      }
      this.deltaMS = e, this.deltaTime = this.deltaMS * Nt.targetFPMS;
      const r = this._head;
      let s = r.next;
      for (; s; )
        s = s.emit(this.deltaTime);
      r.next || this._cancelIfNeeded();
    } else
      this.deltaTime = this.deltaMS = this.elapsedMS = 0;
    this.lastTime = t;
  }
  /**
   * The frames per second at which this ticker is running.
   * The default is approximately 60 in most modern browsers.
   * **Note:** This does not factor in the value of
   * {@link PIXI.Ticker#speed}, which is specific
   * to scaling {@link PIXI.Ticker#deltaTime}.
   * @member {number}
   * @readonly
   */
  get FPS() {
    return 1e3 / this.elapsedMS;
  }
  /**
   * Manages the maximum amount of milliseconds allowed to
   * elapse between invoking {@link PIXI.Ticker#update}.
   * This value is used to cap {@link PIXI.Ticker#deltaTime},
   * but does not effect the measured value of {@link PIXI.Ticker#FPS}.
   * When setting this property it is clamped to a value between
   * `0` and `Ticker.targetFPMS * 1000`.
   * @member {number}
   * @default 10
   */
  get minFPS() {
    return 1e3 / this._maxElapsedMS;
  }
  set minFPS(t) {
    const e = Math.min(this.maxFPS, t), r = Math.min(Math.max(0, e) / 1e3, Nt.targetFPMS);
    this._maxElapsedMS = 1 / r;
  }
  /**
   * Manages the minimum amount of milliseconds required to
   * elapse between invoking {@link PIXI.Ticker#update}.
   * This will effect the measured value of {@link PIXI.Ticker#FPS}.
   * If it is set to `0`, then there is no limit; PixiJS will render as many frames as it can.
   * Otherwise it will be at least `minFPS`
   * @member {number}
   * @default 0
   */
  get maxFPS() {
    return this._minElapsedMS ? Math.round(1e3 / this._minElapsedMS) : 0;
  }
  set maxFPS(t) {
    if (t === 0)
      this._minElapsedMS = 0;
    else {
      const e = Math.max(this.minFPS, t);
      this._minElapsedMS = 1 / (e / 1e3);
    }
  }
  /**
   * The shared ticker instance used by {@link PIXI.AnimatedSprite} and by
   * {@link PIXI.VideoResource} to update animation frames / video textures.
   *
   * It may also be used by {@link PIXI.Application} if created with the `sharedTicker` option property set to true.
   *
   * The property {@link PIXI.Ticker#autoStart} is set to `true` for this instance.
   * Please follow the examples for usage, including how to opt-out of auto-starting the shared ticker.
   * @example
   * import { Ticker } from 'pixi.js';
   *
   * const ticker = Ticker.shared;
   * // Set this to prevent starting this ticker when listeners are added.
   * // By default this is true only for the PIXI.Ticker.shared instance.
   * ticker.autoStart = false;
   *
   * // FYI, call this to ensure the ticker is stopped. It should be stopped
   * // if you have not attempted to render anything yet.
   * ticker.stop();
   *
   * // Call this when you are ready for a running shared ticker.
   * ticker.start();
   * @example
   * import { autoDetectRenderer, Container } from 'pixi.js';
   *
   * // You may use the shared ticker to render...
   * const renderer = autoDetectRenderer();
   * const stage = new Container();
   * document.body.appendChild(renderer.view);
   * ticker.add((time) => renderer.render(stage));
   *
   * // Or you can just update it manually.
   * ticker.autoStart = false;
   * ticker.stop();
   * const animate = (time) => {
   *     ticker.update(time);
   *     renderer.render(stage);
   *     requestAnimationFrame(animate);
   * };
   * animate(performance.now());
   * @member {PIXI.Ticker}
   * @static
   */
  static get shared() {
    if (!Nt._shared) {
      const t = Nt._shared = new Nt();
      t.autoStart = !0, t._protected = !0;
    }
    return Nt._shared;
  }
  /**
   * The system ticker instance used by {@link PIXI.BasePrepare} for core timing
   * functionality that shouldn't usually need to be paused, unlike the `shared`
   * ticker which drives visual animations and rendering which may want to be paused.
   *
   * The property {@link PIXI.Ticker#autoStart} is set to `true` for this instance.
   * @member {PIXI.Ticker}
   * @static
   */
  static get system() {
    if (!Nt._system) {
      const t = Nt._system = new Nt();
      t.autoStart = !0, t._protected = !0;
    }
    return Nt._system;
  }
};
uu.targetFPMS = 0.06;
let ot = uu;
Object.defineProperties(L, {
  /**
   * Target frames per millisecond.
   * @static
   * @name TARGET_FPMS
   * @memberof PIXI.settings
   * @type {number}
   * @deprecated since 7.1.0
   * @see PIXI.Ticker.targetFPMS
   */
  TARGET_FPMS: {
    get() {
      return ot.targetFPMS;
    },
    set(i) {
      Y("7.1.0", "settings.TARGET_FPMS is deprecated, use Ticker.targetFPMS"), ot.targetFPMS = i;
    }
  }
});
class cu {
  /**
   * Initialize the plugin with scope of application instance
   * @static
   * @private
   * @param {object} [options] - See application options
   */
  static init(t) {
    t = Object.assign({
      autoStart: !0,
      sharedTicker: !1
    }, t), Object.defineProperty(
      this,
      "ticker",
      {
        set(e) {
          this._ticker && this._ticker.remove(this.render, this), this._ticker = e, e && e.add(this.render, this, Ge.LOW);
        },
        get() {
          return this._ticker;
        }
      }
    ), this.stop = () => {
      this._ticker.stop();
    }, this.start = () => {
      this._ticker.start();
    }, this._ticker = null, this.ticker = t.sharedTicker ? ot.shared : new ot(), t.autoStart && this.start();
  }
  /**
   * Clean up the ticker, scoped to application.
   * @static
   * @private
   */
  static destroy() {
    if (this._ticker) {
      const t = this._ticker;
      this.ticker = null, t.destroy();
    }
  }
}
cu.extension = F.Application;
k.add(cu);
const du = [];
k.handleByList(F.Renderer, du);
function cg(i) {
  for (const t of du)
    if (t.test(i))
      return new t(i);
  throw new Error("Unable to auto-detect a suitable renderer.");
}
var dg = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`, fg = `attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`;
const pg = dg, fu = fg;
class pu {
  constructor(t) {
    this.renderer = t;
  }
  contextChange(t) {
    let e;
    if (this.renderer.context.webGLVersion === 1) {
      const r = t.getParameter(t.FRAMEBUFFER_BINDING);
      t.bindFramebuffer(t.FRAMEBUFFER, null), e = t.getParameter(t.SAMPLES), t.bindFramebuffer(t.FRAMEBUFFER, r);
    } else {
      const r = t.getParameter(t.DRAW_FRAMEBUFFER_BINDING);
      t.bindFramebuffer(t.DRAW_FRAMEBUFFER, null), e = t.getParameter(t.SAMPLES), t.bindFramebuffer(t.DRAW_FRAMEBUFFER, r);
    }
    e >= ft.HIGH ? this.multisample = ft.HIGH : e >= ft.MEDIUM ? this.multisample = ft.MEDIUM : e >= ft.LOW ? this.multisample = ft.LOW : this.multisample = ft.NONE;
  }
  destroy() {
  }
}
pu.extension = {
  type: F.RendererSystem,
  name: "_multisample"
};
k.add(pu);
class mg {
  constructor(t) {
    this.buffer = t || null, this.updateID = -1, this.byteLength = -1, this.refCount = 0;
  }
}
class mu {
  /**
   * @param {PIXI.Renderer} renderer - The renderer this System works for.
   */
  constructor(t) {
    this.renderer = t, this.managedBuffers = {}, this.boundBufferBases = {};
  }
  /**
   * @ignore
   */
  destroy() {
    this.renderer = null;
  }
  /** Sets up the renderer context and necessary buffers. */
  contextChange() {
    this.disposeAll(!0), this.gl = this.renderer.gl, this.CONTEXT_UID = this.renderer.CONTEXT_UID;
  }
  /**
   * This binds specified buffer. On first run, it will create the webGL buffers for the context too
   * @param buffer - the buffer to bind to the renderer
   */
  bind(t) {
    const { gl: e, CONTEXT_UID: r } = this, s = t._glBuffers[r] || this.createGLBuffer(t);
    e.bindBuffer(t.type, s.buffer);
  }
  unbind(t) {
    const { gl: e } = this;
    e.bindBuffer(t, null);
  }
  /**
   * Binds an uniform buffer to at the given index.
   *
   * A cache is used so a buffer will not be bound again if already bound.
   * @param buffer - the buffer to bind
   * @param index - the base index to bind it to.
   */
  bindBufferBase(t, e) {
    const { gl: r, CONTEXT_UID: s } = this;
    if (this.boundBufferBases[e] !== t) {
      const n = t._glBuffers[s] || this.createGLBuffer(t);
      this.boundBufferBases[e] = t, r.bindBufferBase(r.UNIFORM_BUFFER, e, n.buffer);
    }
  }
  /**
   * Binds a buffer whilst also binding its range.
   * This will make the buffer start from the offset supplied rather than 0 when it is read.
   * @param buffer - the buffer to bind
   * @param index - the base index to bind at, defaults to 0
   * @param offset - the offset to bind at (this is blocks of 256). 0 = 0, 1 = 256, 2 = 512 etc
   */
  bindBufferRange(t, e, r) {
    const { gl: s, CONTEXT_UID: n } = this;
    r = r || 0;
    const a = t._glBuffers[n] || this.createGLBuffer(t);
    s.bindBufferRange(s.UNIFORM_BUFFER, e || 0, a.buffer, r * 256, 256);
  }
  /**
   * Will ensure the data in the buffer is uploaded to the GPU.
   * @param {PIXI.Buffer} buffer - the buffer to update
   */
  update(t) {
    const { gl: e, CONTEXT_UID: r } = this, s = t._glBuffers[r] || this.createGLBuffer(t);
    if (t._updateID !== s.updateID)
      if (s.updateID = t._updateID, e.bindBuffer(t.type, s.buffer), s.byteLength >= t.data.byteLength)
        e.bufferSubData(t.type, 0, t.data);
      else {
        const n = t.static ? e.STATIC_DRAW : e.DYNAMIC_DRAW;
        s.byteLength = t.data.byteLength, e.bufferData(t.type, t.data, n);
      }
  }
  /**
   * Disposes buffer
   * @param {PIXI.Buffer} buffer - buffer with data
   * @param {boolean} [contextLost=false] - If context was lost, we suppress deleteVertexArray
   */
  dispose(t, e) {
    if (!this.managedBuffers[t.id])
      return;
    delete this.managedBuffers[t.id];
    const r = t._glBuffers[this.CONTEXT_UID], s = this.gl;
    t.disposeRunner.remove(this), r && (e || s.deleteBuffer(r.buffer), delete t._glBuffers[this.CONTEXT_UID]);
  }
  /**
   * dispose all WebGL resources of all managed buffers
   * @param {boolean} [contextLost=false] - If context was lost, we suppress `gl.delete` calls
   */
  disposeAll(t) {
    const e = Object.keys(this.managedBuffers);
    for (let r = 0; r < e.length; r++)
      this.dispose(this.managedBuffers[e[r]], t);
  }
  /**
   * creates and attaches a GLBuffer object tied to the current context.
   * @param buffer
   * @protected
   */
  createGLBuffer(t) {
    const { CONTEXT_UID: e, gl: r } = this;
    return t._glBuffers[e] = new mg(r.createBuffer()), this.managedBuffers[t.id] = t, t.disposeRunner.add(this), t._glBuffers[e];
  }
}
mu.extension = {
  type: F.RendererSystem,
  name: "buffer"
};
k.add(mu);
class gu {
  // renderers scene graph!
  constructor(t) {
    this.renderer = t;
  }
  /**
   * Renders the object to its WebGL view.
   * @param displayObject - The object to be rendered.
   * @param options - the options to be passed to the renderer
   */
  render(t, e) {
    const r = this.renderer;
    let s, n, a, o;
    if (e && (s = e.renderTexture, n = e.clear, a = e.transform, o = e.skipUpdateTransform), this.renderingToScreen = !s, r.runners.prerender.emit(), r.emit("prerender"), r.projection.transform = a, !r.context.isLost) {
      if (s || (this.lastObjectRendered = t), !o) {
        const h = t.enableTempParent();
        t.updateTransform(), t.disableTempParent(h);
      }
      r.renderTexture.bind(s), r.batch.currentRenderer.start(), (n ?? r.background.clearBeforeRender) && r.renderTexture.clear(), t.render(r), r.batch.currentRenderer.flush(), s && (e.blit && r.framebuffer.blit(), s.baseTexture.update()), r.runners.postrender.emit(), r.projection.transform = null, r.emit("postrender");
    }
  }
  destroy() {
    this.renderer = null, this.lastObjectRendered = null;
  }
}
gu.extension = {
  type: F.RendererSystem,
  name: "objectRenderer"
};
k.add(gu);
const es = class ua extends hg {
  /**
   * @param {PIXI.IRendererOptions} [options] - See {@link PIXI.settings.RENDER_OPTIONS} for defaults.
   */
  constructor(t) {
    super(), this.type = al.WEBGL, t = Object.assign({}, L.RENDER_OPTIONS, t), this.gl = null, this.CONTEXT_UID = 0, this.globalUniforms = new jt({
      projectionMatrix: new rt()
    }, !0);
    const e = {
      runners: [
        "init",
        "destroy",
        "contextChange",
        "resolutionChange",
        "reset",
        "update",
        "postrender",
        "prerender",
        "resize"
      ],
      systems: ua.__systems,
      priority: [
        "_view",
        "textureGenerator",
        "background",
        "_plugin",
        "startup",
        // low level WebGL systems
        "context",
        "state",
        "texture",
        "buffer",
        "geometry",
        "framebuffer",
        "transformFeedback",
        // high level pixi specific rendering
        "mask",
        "scissor",
        "stencil",
        "projection",
        "textureGC",
        "filter",
        "renderTexture",
        "batch",
        "objectRenderer",
        "_multisample"
      ]
    };
    this.setup(e), "useContextAlpha" in t && (Y("7.0.0", "options.useContextAlpha is deprecated, use options.premultipliedAlpha and options.backgroundAlpha instead"), t.premultipliedAlpha = t.useContextAlpha && t.useContextAlpha !== "notMultiplied", t.backgroundAlpha = t.useContextAlpha === !1 ? 1 : t.backgroundAlpha), this._plugin.rendererPlugins = ua.__plugins, this.options = t, this.startup.run(this.options);
  }
  /**
   * Create renderer if WebGL is available. Overrideable
   * by the **@pixi/canvas-renderer** package to allow fallback.
   * throws error if WebGL is not available.
   * @param options
   * @private
   */
  static test(t) {
    return t != null && t.forceCanvas ? !1 : Up();
  }
  /**
   * Renders the object to its WebGL view.
   * @param displayObject - The object to be rendered.
   * @param {object} [options] - Object to use for render options.
   * @param {PIXI.RenderTexture} [options.renderTexture] - The render texture to render to.
   * @param {boolean} [options.clear=true] - Should the canvas be cleared before the new render.
   * @param {PIXI.Matrix} [options.transform] - A transform to apply to the render texture before rendering.
   * @param {boolean} [options.skipUpdateTransform=false] - Should we skip the update transform pass?
   */
  render(t, e) {
    this.objectRenderer.render(t, e);
  }
  /**
   * Resizes the WebGL view to the specified width and height.
   * @param desiredScreenWidth - The desired width of the screen.
   * @param desiredScreenHeight - The desired height of the screen.
   */
  resize(t, e) {
    this._view.resizeView(t, e);
  }
  /**
   * Resets the WebGL state so you can render things however you fancy!
   * @returns Returns itself.
   */
  reset() {
    return this.runners.reset.emit(), this;
  }
  /** Clear the frame buffer. */
  clear() {
    this.renderTexture.bind(), this.renderTexture.clear();
  }
  /**
   * Removes everything from the renderer (event listeners, spritebatch, etc...)
   * @param [removeView=false] - Removes the Canvas element from the DOM.
   *  See: https://github.com/pixijs/pixijs/issues/2233
   */
  destroy(t = !1) {
    this.runners.destroy.items.reverse(), this.emitWithCustomOptions(this.runners.destroy, {
      _view: t
    }), super.destroy();
  }
  /** Collection of plugins */
  get plugins() {
    return this._plugin.plugins;
  }
  /** The number of msaa samples of the canvas. */
  get multisample() {
    return this._multisample.multisample;
  }
  /**
   * Same as view.width, actual number of pixels in the canvas by horizontal.
   * @member {number}
   * @readonly
   * @default 800
   */
  get width() {
    return this._view.element.width;
  }
  /**
   * Same as view.height, actual number of pixels in the canvas by vertical.
   * @default 600
   */
  get height() {
    return this._view.element.height;
  }
  /** The resolution / device pixel ratio of the renderer. */
  get resolution() {
    return this._view.resolution;
  }
  set resolution(t) {
    this._view.resolution = t, this.runners.resolutionChange.emit(t);
  }
  /** Whether CSS dimensions of canvas view should be resized to screen dimensions automatically. */
  get autoDensity() {
    return this._view.autoDensity;
  }
  /** The canvas element that everything is drawn to.*/
  get view() {
    return this._view.element;
  }
  /**
   * Measurements of the screen. (0, 0, screenWidth, screenHeight).
   *
   * Its safe to use as filterArea or hitArea for the whole stage.
   * @member {PIXI.Rectangle}
   */
  get screen() {
    return this._view.screen;
  }
  /** the last object rendered by the renderer. Useful for other plugins like interaction managers */
  get lastObjectRendered() {
    return this.objectRenderer.lastObjectRendered;
  }
  /** Flag if we are rendering to the screen vs renderTexture */
  get renderingToScreen() {
    return this.objectRenderer.renderingToScreen;
  }
  /** When logging Pixi to the console, this is the name we will show */
  get rendererLogId() {
    return `WebGL ${this.context.webGLVersion}`;
  }
  /**
   * This sets weather the screen is totally cleared between each frame withthe background color and alpha
   * @deprecated since 7.0.0
   */
  get clearBeforeRender() {
    return Y("7.0.0", "renderer.clearBeforeRender has been deprecated, please use renderer.background.clearBeforeRender instead."), this.background.clearBeforeRender;
  }
  /**
   * Pass-thru setting for the canvas' context `alpha` property. This is typically
   * not something you need to fiddle with. If you want transparency, use `backgroundAlpha`.
   * @deprecated since 7.0.0
   * @member {boolean}
   */
  get useContextAlpha() {
    return Y("7.0.0", "renderer.useContextAlpha has been deprecated, please use renderer.context.premultipliedAlpha instead."), this.context.useContextAlpha;
  }
  /**
   * readonly drawing buffer preservation
   * we can only know this if Pixi created the context
   * @deprecated since 7.0.0
   */
  get preserveDrawingBuffer() {
    return Y("7.0.0", "renderer.preserveDrawingBuffer has been deprecated, we cannot truly know this unless pixi created the context"), this.context.preserveDrawingBuffer;
  }
  /**
   * The background color to fill if not transparent
   * @member {number}
   * @deprecated since 7.0.0
   */
  get backgroundColor() {
    return Y("7.0.0", "renderer.backgroundColor has been deprecated, use renderer.background.color instead."), this.background.color;
  }
  set backgroundColor(t) {
    Y("7.0.0", "renderer.backgroundColor has been deprecated, use renderer.background.color instead."), this.background.color = t;
  }
  /**
   * The background color alpha. Setting this to 0 will make the canvas transparent.
   * @member {number}
   * @deprecated since 7.0.0
   */
  get backgroundAlpha() {
    return Y("7.0.0", "renderer.backgroundAlpha has been deprecated, use renderer.background.alpha instead."), this.background.alpha;
  }
  /**
   * @deprecated since 7.0.0
   */
  set backgroundAlpha(t) {
    Y("7.0.0", "renderer.backgroundAlpha has been deprecated, use renderer.background.alpha instead."), this.background.alpha = t;
  }
  /**
   * @deprecated since 7.0.0
   */
  get powerPreference() {
    return Y("7.0.0", "renderer.powerPreference has been deprecated, we can only know this if pixi creates the context"), this.context.powerPreference;
  }
  /**
   * Useful function that returns a texture of the display object that can then be used to create sprites
   * This can be quite useful if your displayObject is complicated and needs to be reused multiple times.
   * @param displayObject - The displayObject the object will be generated from.
   * @param {IGenerateTextureOptions} options - Generate texture options.
   * @param {PIXI.Rectangle} options.region - The region of the displayObject, that shall be rendered,
   *        if no region is specified, defaults to the local bounds of the displayObject.
   * @param {number} [options.resolution] - If not given, the renderer's resolution is used.
   * @param {PIXI.MSAA_QUALITY} [options.multisample] - If not given, the renderer's multisample is used.
   * @returns A texture of the graphics object.
   */
  generateTexture(t, e) {
    return this.textureGenerator.generateTexture(t, e);
  }
};
es.extension = {
  type: F.Renderer,
  priority: 1
}, /**
* Collection of installed plugins. These are included by default in PIXI, but can be excluded
* by creating a custom build. Consult the README for more information about creating custom
* builds and excluding plugins.
* @private
*/
es.__plugins = {}, /**
* The collection of installed systems.
* @private
*/
es.__systems = {};
let ja = es;
k.handleByMap(F.RendererPlugin, ja.__plugins);
k.handleByMap(F.RendererSystem, ja.__systems);
k.add(ja);
class yu extends di {
  /**
   * @param length
   * @param options - Options to for Resource constructor
   * @param {number} [options.width] - Width of the resource
   * @param {number} [options.height] - Height of the resource
   */
  constructor(t, e) {
    const { width: r, height: s } = e || {};
    super(r, s), this.items = [], this.itemDirtyIds = [];
    for (let n = 0; n < t; n++) {
      const a = new W();
      this.items.push(a), this.itemDirtyIds.push(-2);
    }
    this.length = t, this._load = null, this.baseTexture = null;
  }
  /**
   * Used from ArrayResource and CubeResource constructors.
   * @param resources - Can be resources, image elements, canvas, etc. ,
   *  length should be same as constructor length
   * @param options - Detect options for resources
   */
  initFromArray(t, e) {
    for (let r = 0; r < this.length; r++)
      t[r] && (t[r].castToBaseTexture ? this.addBaseTextureAt(t[r].castToBaseTexture(), r) : t[r] instanceof di ? this.addResourceAt(t[r], r) : this.addResourceAt(Nl(t[r], e), r));
  }
  /** Destroy this BaseImageResource. */
  dispose() {
    for (let t = 0, e = this.length; t < e; t++)
      this.items[t].destroy();
    this.items = null, this.itemDirtyIds = null, this._load = null;
  }
  /**
   * Set a resource by ID
   * @param resource
   * @param index - Zero-based index of resource to set
   * @returns - Instance for chaining
   */
  addResourceAt(t, e) {
    if (!this.items[e])
      throw new Error(`Index ${e} is out of bounds`);
    return t.valid && !this.valid && this.resize(t.width, t.height), this.items[e].setResource(t), this;
  }
  /**
   * Set the parent base texture.
   * @param baseTexture
   */
  bind(t) {
    if (this.baseTexture !== null)
      throw new Error("Only one base texture per TextureArray is allowed");
    super.bind(t);
    for (let e = 0; e < this.length; e++)
      this.items[e].parentTextureArray = t, this.items[e].on("update", t.update, t);
  }
  /**
   * Unset the parent base texture.
   * @param baseTexture
   */
  unbind(t) {
    super.unbind(t);
    for (let e = 0; e < this.length; e++)
      this.items[e].parentTextureArray = null, this.items[e].off("update", t.update, t);
  }
  /**
   * Load all the resources simultaneously
   * @returns - When load is resolved
   */
  load() {
    if (this._load)
      return this._load;
    const t = this.items.map((e) => e.resource).filter((e) => e).map((e) => e.load());
    return this._load = Promise.all(t).then(
      () => {
        const { realWidth: e, realHeight: r } = this.items[0];
        return this.resize(e, r), this.update(), Promise.resolve(this);
      }
    ), this._load;
  }
}
class gg extends yu {
  /**
   * @param source - Number of items in array or the collection
   *        of image URLs to use. Can also be resources, image elements, canvas, etc.
   * @param options - Options to apply to {@link PIXI.autoDetectResource}
   * @param {number} [options.width] - Width of the resource
   * @param {number} [options.height] - Height of the resource
   */
  constructor(t, e) {
    const { width: r, height: s } = e || {};
    let n, a;
    Array.isArray(t) ? (n = t, a = t.length) : a = t, super(a, { width: r, height: s }), n && this.initFromArray(n, e);
  }
  /**
   * Set a baseTexture by ID,
   * ArrayResource just takes resource from it, nothing more
   * @param baseTexture
   * @param index - Zero-based index of resource to set
   * @returns - Instance for chaining
   */
  addBaseTextureAt(t, e) {
    if (t.resource)
      this.addResourceAt(t.resource, e);
    else
      throw new Error("ArrayResource does not support RenderTexture");
    return this;
  }
  /**
   * Add binding
   * @param baseTexture
   */
  bind(t) {
    super.bind(t), t.target = Sr.TEXTURE_2D_ARRAY;
  }
  /**
   * Upload the resources to the GPU.
   * @param renderer
   * @param texture
   * @param glTexture
   * @returns - whether texture was uploaded
   */
  upload(t, e, r) {
    const { length: s, itemDirtyIds: n, items: a } = this, { gl: o } = t;
    r.dirtyId < 0 && o.texImage3D(
      o.TEXTURE_2D_ARRAY,
      0,
      r.internalFormat,
      this._width,
      this._height,
      s,
      0,
      e.format,
      r.type,
      null
    );
    for (let h = 0; h < s; h++) {
      const l = a[h];
      n[h] < l.dirtyId && (n[h] = l.dirtyId, l.valid && o.texSubImage3D(
        o.TEXTURE_2D_ARRAY,
        0,
        0,
        // xoffset
        0,
        // yoffset
        h,
        // zoffset
        l.resource.width,
        l.resource.height,
        1,
        e.format,
        r.type,
        l.resource.source
      ));
    }
    return !0;
  }
}
class yg extends Se {
  /**
   * @param source - Canvas element to use
   */
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(t) {
    super(t);
  }
  /**
   * Used to auto-detect the type of resource.
   * @param {*} source - The source object
   * @returns {boolean} `true` if source is HTMLCanvasElement or OffscreenCanvas
   */
  static test(t) {
    const { OffscreenCanvas: e } = globalThis;
    return e && t instanceof e ? !0 : globalThis.HTMLCanvasElement && t instanceof HTMLCanvasElement;
  }
}
const _u = class ei extends yu {
  /**
   * @param {Array<string|PIXI.Resource>} [source] - Collection of URLs or resources
   *        to use as the sides of the cube.
   * @param options - ImageResource options
   * @param {number} [options.width] - Width of resource
   * @param {number} [options.height] - Height of resource
   * @param {number} [options.autoLoad=true] - Whether to auto-load resources
   * @param {number} [options.linkBaseTexture=true] - In case BaseTextures are supplied,
   *   whether to copy them or use
   */
  constructor(t, e) {
    const { width: r, height: s, autoLoad: n, linkBaseTexture: a } = e || {};
    if (t && t.length !== ei.SIDES)
      throw new Error(`Invalid length. Got ${t.length}, expected 6`);
    super(6, { width: r, height: s });
    for (let o = 0; o < ei.SIDES; o++)
      this.items[o].target = Sr.TEXTURE_CUBE_MAP_POSITIVE_X + o;
    this.linkBaseTexture = a !== !1, t && this.initFromArray(t, e), n !== !1 && this.load();
  }
  /**
   * Add binding.
   * @param baseTexture - parent base texture
   */
  bind(t) {
    super.bind(t), t.target = Sr.TEXTURE_CUBE_MAP;
  }
  addBaseTextureAt(t, e, r) {
    if (r === void 0 && (r = this.linkBaseTexture), !this.items[e])
      throw new Error(`Index ${e} is out of bounds`);
    if (!this.linkBaseTexture || t.parentTextureArray || Object.keys(t._glTextures).length > 0)
      if (t.resource)
        this.addResourceAt(t.resource, e);
      else
        throw new Error("CubeResource does not support copying of renderTexture.");
    else
      t.target = Sr.TEXTURE_CUBE_MAP_POSITIVE_X + e, t.parentTextureArray = this.baseTexture, this.items[e] = t;
    return t.valid && !this.valid && this.resize(t.realWidth, t.realHeight), this.items[e] = t, this;
  }
  /**
   * Upload the resource
   * @param renderer
   * @param _baseTexture
   * @param glTexture
   * @returns {boolean} true is success
   */
  upload(t, e, r) {
    const s = this.itemDirtyIds;
    for (let n = 0; n < ei.SIDES; n++) {
      const a = this.items[n];
      (s[n] < a.dirtyId || r.dirtyId < e.dirtyId) && (a.valid && a.resource ? (a.resource.upload(t, a, r), s[n] = a.dirtyId) : s[n] < -1 && (t.gl.texImage2D(
        a.target,
        0,
        r.internalFormat,
        e.realWidth,
        e.realHeight,
        0,
        e.format,
        r.type,
        null
      ), s[n] = -1));
    }
    return !0;
  }
  /**
   * Used to auto-detect the type of resource.
   * @param {*} source - The source object
   * @returns {boolean} `true` if source is an array of 6 elements
   */
  static test(t) {
    return Array.isArray(t) && t.length === ei.SIDES;
  }
};
_u.SIDES = 6;
let _g = _u;
class Ar extends Se {
  /**
   * @param source - ImageBitmap or URL to use.
   * @param options - Options to use.
   */
  constructor(t, e) {
    e = e || {};
    let r, s, n;
    typeof t == "string" ? (r = Ar.EMPTY, s = t, n = !0) : (r = t, s = null, n = !1), super(r), this.url = s, this.crossOrigin = e.crossOrigin ?? !0, this.alphaMode = typeof e.alphaMode == "number" ? e.alphaMode : null, this.ownsImageBitmap = e.ownsImageBitmap ?? n, this._load = null, e.autoLoad !== !1 && this.load();
  }
  load() {
    return this._load ? this._load : (this._load = new Promise(async (t, e) => {
      if (this.url === null) {
        t(this);
        return;
      }
      try {
        const r = await L.ADAPTER.fetch(this.url, {
          mode: this.crossOrigin ? "cors" : "no-cors"
        });
        if (this.destroyed)
          return;
        const s = await r.blob();
        if (this.destroyed)
          return;
        const n = await createImageBitmap(s, {
          premultiplyAlpha: this.alphaMode === null || this.alphaMode === Dt.UNPACK ? "premultiply" : "none"
        });
        if (this.destroyed) {
          n.close();
          return;
        }
        this.source = n, this.update(), t(this);
      } catch (r) {
        if (this.destroyed)
          return;
        e(r), this.onError.emit(r);
      }
    }), this._load);
  }
  /**
   * Upload the image bitmap resource to GPU.
   * @param renderer - Renderer to upload to
   * @param baseTexture - BaseTexture for this resource
   * @param glTexture - GLTexture to use
   * @returns {boolean} true is success
   */
  upload(t, e, r) {
    return this.source instanceof ImageBitmap ? (typeof this.alphaMode == "number" && (e.alphaMode = this.alphaMode), super.upload(t, e, r)) : (this.load(), !1);
  }
  /** Destroys this resource. */
  dispose() {
    this.ownsImageBitmap && this.source instanceof ImageBitmap && this.source.close(), super.dispose(), this._load = null;
  }
  /**
   * Used to auto-detect the type of resource.
   * @param {*} source - The source object
   * @returns {boolean} `true` if current environment support ImageBitmap, and source is string or ImageBitmap
   */
  static test(t) {
    return !!globalThis.createImageBitmap && typeof ImageBitmap < "u" && (typeof t == "string" || t instanceof ImageBitmap);
  }
  /**
   * ImageBitmap cannot be created synchronously, so a empty placeholder canvas is needed when loading from URLs.
   * Only for internal usage.
   * @returns The cached placeholder canvas.
   */
  static get EMPTY() {
    return Ar._EMPTY = Ar._EMPTY ?? L.ADAPTER.createCanvas(0, 0), Ar._EMPTY;
  }
}
const ca = class rs extends Se {
  /**
   * @param sourceBase64 - Base64 encoded SVG element or URL for SVG file.
   * @param {object} [options] - Options to use
   * @param {number} [options.scale=1] - Scale to apply to SVG. Overridden by...
   * @param {number} [options.width] - Rasterize SVG this wide. Aspect ratio preserved if height not specified.
   * @param {number} [options.height] - Rasterize SVG this high. Aspect ratio preserved if width not specified.
   * @param {boolean} [options.autoLoad=true] - Start loading right away.
   */
  constructor(t, e) {
    e = e || {}, super(L.ADAPTER.createCanvas()), this._width = 0, this._height = 0, this.svg = t, this.scale = e.scale || 1, this._overrideWidth = e.width, this._overrideHeight = e.height, this._resolve = null, this._crossorigin = e.crossorigin, this._load = null, e.autoLoad !== !1 && this.load();
  }
  load() {
    return this._load ? this._load : (this._load = new Promise((t) => {
      if (this._resolve = () => {
        this.update(), t(this);
      }, rs.SVG_XML.test(this.svg.trim())) {
        if (!btoa)
          throw new Error("Your browser doesn't support base64 conversions.");
        this.svg = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(this.svg)))}`;
      }
      this._loadSvg();
    }), this._load);
  }
  /** Loads an SVG image from `imageUrl` or `data URL`. */
  _loadSvg() {
    const t = new Image();
    Se.crossOrigin(t, this.svg, this._crossorigin), t.src = this.svg, t.onerror = (e) => {
      this._resolve && (t.onerror = null, this.onError.emit(e));
    }, t.onload = () => {
      if (!this._resolve)
        return;
      const e = t.width, r = t.height;
      if (!e || !r)
        throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");
      let s = e * this.scale, n = r * this.scale;
      (this._overrideWidth || this._overrideHeight) && (s = this._overrideWidth || this._overrideHeight / r * e, n = this._overrideHeight || this._overrideWidth / e * r), s = Math.round(s), n = Math.round(n);
      const a = this.source;
      a.width = s, a.height = n, a._pixiId = `canvas_${or()}`, a.getContext("2d").drawImage(t, 0, 0, e, r, 0, 0, s, n), this._resolve(), this._resolve = null;
    };
  }
  /**
   * Get size from an svg string using a regular expression.
   * @param svgString - a serialized svg element
   * @returns - image extension
   */
  static getSize(t) {
    const e = rs.SVG_SIZE.exec(t), r = {};
    return e && (r[e[1]] = Math.round(parseFloat(e[3])), r[e[5]] = Math.round(parseFloat(e[7]))), r;
  }
  /** Destroys this texture. */
  dispose() {
    super.dispose(), this._resolve = null, this._crossorigin = null;
  }
  /**
   * Used to auto-detect the type of resource.
   * @param {*} source - The source object
   * @param {string} extension - The extension of source, if set
   * @returns {boolean} - If the source is a SVG source or data file
   */
  static test(t, e) {
    return e === "svg" || typeof t == "string" && t.startsWith("data:image/svg+xml") || typeof t == "string" && rs.SVG_XML.test(t);
  }
  // eslint-disable-line max-len
};
ca.SVG_XML = /^(<\?xml[^?]+\?>)?\s*(<!--[^(-->)]*-->)?\s*\<svg/m, /**
* Regular expression for SVG size.
* @example &lt;svg width="100" height="100"&gt;&lt;/svg&gt;
* @readonly
*/
ca.SVG_SIZE = /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i;
let da = ca;
class vg extends Se {
  /**
   * @param source - Image element to use
   */
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(t) {
    super(t);
  }
  /**
   * Used to auto-detect the type of resource.
   * @param {*} source - The source object
   * @returns {boolean} `true` if source is an VideoFrame
   */
  static test(t) {
    return !!globalThis.VideoFrame && t instanceof globalThis.VideoFrame;
  }
}
const fa = class pa extends Se {
  /**
   * @param {HTMLVideoElement|object|string|Array<string|object>} source - Video element to use.
   * @param {object} [options] - Options to use
   * @param {boolean} [options.autoLoad=true] - Start loading the video immediately
   * @param {boolean} [options.autoPlay=true] - Start playing video immediately
   * @param {number} [options.updateFPS=0] - How many times a second to update the texture from the video.
   * If 0, `requestVideoFrameCallback` is used to update the texture.
   * If `requestVideoFrameCallback` is not available, the texture is updated every render.
   * @param {boolean} [options.crossorigin=true] - Load image using cross origin
   * @param {boolean} [options.loop=false] - Loops the video
   * @param {boolean} [options.muted=false] - Mutes the video audio, useful for autoplay
   * @param {boolean} [options.playsinline=true] - Prevents opening the video on mobile devices
   */
  constructor(t, e) {
    if (e = e || {}, !(t instanceof HTMLVideoElement)) {
      const r = document.createElement("video");
      e.autoLoad !== !1 && r.setAttribute("preload", "auto"), e.playsinline !== !1 && (r.setAttribute("webkit-playsinline", ""), r.setAttribute("playsinline", "")), e.muted === !0 && (r.setAttribute("muted", ""), r.muted = !0), e.loop === !0 && r.setAttribute("loop", ""), e.autoPlay !== !1 && r.setAttribute("autoplay", ""), typeof t == "string" && (t = [t]);
      const s = t[0].src || t[0];
      Se.crossOrigin(r, s, e.crossorigin);
      for (let n = 0; n < t.length; ++n) {
        const a = document.createElement("source");
        let { src: o, mime: h } = t[n];
        if (o = o || t[n], o.startsWith("data:"))
          h = o.slice(5, o.indexOf(";"));
        else if (!o.startsWith("blob:")) {
          const l = o.split("?").shift().toLowerCase(), u = l.slice(l.lastIndexOf(".") + 1);
          h = h || pa.MIME_TYPES[u] || `video/${u}`;
        }
        a.src = o, h && (a.type = h), r.appendChild(a);
      }
      t = r;
    }
    super(t), this.noSubImage = !0, this._autoUpdate = !0, this._isConnectedToTicker = !1, this._updateFPS = e.updateFPS || 0, this._msToNextUpdate = 0, this.autoPlay = e.autoPlay !== !1, this._videoFrameRequestCallback = this._videoFrameRequestCallback.bind(this), this._videoFrameRequestCallbackHandle = null, this._load = null, this._resolve = null, this._reject = null, this._onCanPlay = this._onCanPlay.bind(this), this._onError = this._onError.bind(this), this._onPlayStart = this._onPlayStart.bind(this), this._onPlayStop = this._onPlayStop.bind(this), this._onSeeked = this._onSeeked.bind(this), e.autoLoad !== !1 && this.load();
  }
  /**
   * Trigger updating of the texture.
   * @param _deltaTime - time delta since last tick
   */
  update(t = 0) {
    if (!this.destroyed) {
      if (this._updateFPS) {
        const e = ot.shared.elapsedMS * this.source.playbackRate;
        this._msToNextUpdate = Math.floor(this._msToNextUpdate - e);
      }
      (!this._updateFPS || this._msToNextUpdate <= 0) && (super.update(
        /* deltaTime*/
      ), this._msToNextUpdate = this._updateFPS ? Math.floor(1e3 / this._updateFPS) : 0);
    }
  }
  _videoFrameRequestCallback() {
    this.update(), this.destroyed ? this._videoFrameRequestCallbackHandle = null : this._videoFrameRequestCallbackHandle = this.source.requestVideoFrameCallback(
      this._videoFrameRequestCallback
    );
  }
  /**
   * Start preloading the video resource.
   * @returns {Promise<void>} Handle the validate event
   */
  load() {
    if (this._load)
      return this._load;
    const t = this.source;
    return (t.readyState === t.HAVE_ENOUGH_DATA || t.readyState === t.HAVE_FUTURE_DATA) && t.width && t.height && (t.complete = !0), t.addEventListener("play", this._onPlayStart), t.addEventListener("pause", this._onPlayStop), t.addEventListener("seeked", this._onSeeked), this._isSourceReady() ? this._onCanPlay() : (t.addEventListener("canplay", this._onCanPlay), t.addEventListener("canplaythrough", this._onCanPlay), t.addEventListener("error", this._onError, !0)), this._load = new Promise((e, r) => {
      this.valid ? e(this) : (this._resolve = e, this._reject = r, t.load());
    }), this._load;
  }
  /**
   * Handle video error events.
   * @param event
   */
  _onError(t) {
    this.source.removeEventListener("error", this._onError, !0), this.onError.emit(t), this._reject && (this._reject(t), this._reject = null, this._resolve = null);
  }
  /**
   * Returns true if the underlying source is playing.
   * @returns - True if playing.
   */
  _isSourcePlaying() {
    const t = this.source;
    return !t.paused && !t.ended;
  }
  /**
   * Returns true if the underlying source is ready for playing.
   * @returns - True if ready.
   */
  _isSourceReady() {
    return this.source.readyState > 2;
  }
  /** Runs the update loop when the video is ready to play. */
  _onPlayStart() {
    this.valid || this._onCanPlay(), this._configureAutoUpdate();
  }
  /** Fired when a pause event is triggered, stops the update loop. */
  _onPlayStop() {
    this._configureAutoUpdate();
  }
  /** Fired when the video is completed seeking to the current playback position. */
  _onSeeked() {
    this._autoUpdate && !this._isSourcePlaying() && (this._msToNextUpdate = 0, this.update(), this._msToNextUpdate = 0);
  }
  /** Fired when the video is loaded and ready to play. */
  _onCanPlay() {
    const t = this.source;
    t.removeEventListener("canplay", this._onCanPlay), t.removeEventListener("canplaythrough", this._onCanPlay);
    const e = this.valid;
    this._msToNextUpdate = 0, this.update(), this._msToNextUpdate = 0, !e && this._resolve && (this._resolve(this), this._resolve = null, this._reject = null), this._isSourcePlaying() ? this._onPlayStart() : this.autoPlay && t.play();
  }
  /** Destroys this texture. */
  dispose() {
    this._configureAutoUpdate();
    const t = this.source;
    t && (t.removeEventListener("play", this._onPlayStart), t.removeEventListener("pause", this._onPlayStop), t.removeEventListener("seeked", this._onSeeked), t.removeEventListener("canplay", this._onCanPlay), t.removeEventListener("canplaythrough", this._onCanPlay), t.removeEventListener("error", this._onError, !0), t.pause(), t.src = "", t.load()), super.dispose();
  }
  /** Should the base texture automatically update itself, set to true by default. */
  get autoUpdate() {
    return this._autoUpdate;
  }
  set autoUpdate(t) {
    t !== this._autoUpdate && (this._autoUpdate = t, this._configureAutoUpdate());
  }
  /**
   * How many times a second to update the texture from the video. If 0, `requestVideoFrameCallback` is used to
   * update the texture. If `requestVideoFrameCallback` is not available, the texture is updated every render.
   * A lower fps can help performance, as updating the texture at 60fps on a 30ps video may not be efficient.
   */
  get updateFPS() {
    return this._updateFPS;
  }
  set updateFPS(t) {
    t !== this._updateFPS && (this._updateFPS = t, this._configureAutoUpdate());
  }
  _configureAutoUpdate() {
    this._autoUpdate && this._isSourcePlaying() ? !this._updateFPS && this.source.requestVideoFrameCallback ? (this._isConnectedToTicker && (ot.shared.remove(this.update, this), this._isConnectedToTicker = !1, this._msToNextUpdate = 0), this._videoFrameRequestCallbackHandle === null && (this._videoFrameRequestCallbackHandle = this.source.requestVideoFrameCallback(
      this._videoFrameRequestCallback
    ))) : (this._videoFrameRequestCallbackHandle !== null && (this.source.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle), this._videoFrameRequestCallbackHandle = null), this._isConnectedToTicker || (ot.shared.add(this.update, this), this._isConnectedToTicker = !0, this._msToNextUpdate = 0)) : (this._videoFrameRequestCallbackHandle !== null && (this.source.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle), this._videoFrameRequestCallbackHandle = null), this._isConnectedToTicker && (ot.shared.remove(this.update, this), this._isConnectedToTicker = !1, this._msToNextUpdate = 0));
  }
  /**
   * Used to auto-detect the type of resource.
   * @param {*} source - The source object
   * @param {string} extension - The extension of source, if set
   * @returns {boolean} `true` if video source
   */
  static test(t, e) {
    return globalThis.HTMLVideoElement && t instanceof HTMLVideoElement || pa.TYPES.includes(e);
  }
};
fa.TYPES = ["mp4", "m4v", "webm", "ogg", "ogv", "h264", "avi", "mov"], /**
* Map of video MIME types that can't be directly derived from file extensions.
* @readonly
*/
fa.MIME_TYPES = {
  ogv: "video/ogg",
  mov: "video/quicktime",
  m4v: "video/mp4"
};
let vu = fa;
ta.push(
  Ar,
  Xl,
  yg,
  vu,
  vg,
  da,
  Bs,
  _g,
  gg
);
class xs {
  constructor() {
    this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0, this.rect = null, this.updateID = -1;
  }
  /**
   * Checks if bounds are empty.
   * @returns - True if empty.
   */
  isEmpty() {
    return this.minX > this.maxX || this.minY > this.maxY;
  }
  /** Clears the bounds and resets. */
  clear() {
    this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0;
  }
  /**
   * Can return Rectangle.EMPTY constant, either construct new rectangle, either use your rectangle
   * It is not guaranteed that it will return tempRect
   * @param rect - Temporary object will be used if AABB is not empty
   * @returns - A rectangle of the bounds
   */
  getRectangle(t) {
    return this.minX > this.maxX || this.minY > this.maxY ? j.EMPTY : (t = t || new j(0, 0, 1, 1), t.x = this.minX, t.y = this.minY, t.width = this.maxX - this.minX, t.height = this.maxY - this.minY, t);
  }
  /**
   * This function should be inlined when its possible.
   * @param point - The point to add.
   */
  addPoint(t) {
    this.minX = Math.min(this.minX, t.x), this.maxX = Math.max(this.maxX, t.x), this.minY = Math.min(this.minY, t.y), this.maxY = Math.max(this.maxY, t.y);
  }
  /**
   * Adds a point, after transformed. This should be inlined when its possible.
   * @param matrix
   * @param point
   */
  addPointMatrix(t, e) {
    const { a: r, b: s, c: n, d: a, tx: o, ty: h } = t, l = r * e.x + n * e.y + o, u = s * e.x + a * e.y + h;
    this.minX = Math.min(this.minX, l), this.maxX = Math.max(this.maxX, l), this.minY = Math.min(this.minY, u), this.maxY = Math.max(this.maxY, u);
  }
  /**
   * Adds a quad, not transformed
   * @param vertices - The verts to add.
   */
  addQuad(t) {
    let e = this.minX, r = this.minY, s = this.maxX, n = this.maxY, a = t[0], o = t[1];
    e = a < e ? a : e, r = o < r ? o : r, s = a > s ? a : s, n = o > n ? o : n, a = t[2], o = t[3], e = a < e ? a : e, r = o < r ? o : r, s = a > s ? a : s, n = o > n ? o : n, a = t[4], o = t[5], e = a < e ? a : e, r = o < r ? o : r, s = a > s ? a : s, n = o > n ? o : n, a = t[6], o = t[7], e = a < e ? a : e, r = o < r ? o : r, s = a > s ? a : s, n = o > n ? o : n, this.minX = e, this.minY = r, this.maxX = s, this.maxY = n;
  }
  /**
   * Adds sprite frame, transformed.
   * @param transform - transform to apply
   * @param x0 - left X of frame
   * @param y0 - top Y of frame
   * @param x1 - right X of frame
   * @param y1 - bottom Y of frame
   */
  addFrame(t, e, r, s, n) {
    this.addFrameMatrix(t.worldTransform, e, r, s, n);
  }
  /**
   * Adds sprite frame, multiplied by matrix
   * @param matrix - matrix to apply
   * @param x0 - left X of frame
   * @param y0 - top Y of frame
   * @param x1 - right X of frame
   * @param y1 - bottom Y of frame
   */
  addFrameMatrix(t, e, r, s, n) {
    const a = t.a, o = t.b, h = t.c, l = t.d, u = t.tx, c = t.ty;
    let d = this.minX, f = this.minY, p = this.maxX, m = this.maxY, y = a * e + h * r + u, v = o * e + l * r + c;
    d = y < d ? y : d, f = v < f ? v : f, p = y > p ? y : p, m = v > m ? v : m, y = a * s + h * r + u, v = o * s + l * r + c, d = y < d ? y : d, f = v < f ? v : f, p = y > p ? y : p, m = v > m ? v : m, y = a * e + h * n + u, v = o * e + l * n + c, d = y < d ? y : d, f = v < f ? v : f, p = y > p ? y : p, m = v > m ? v : m, y = a * s + h * n + u, v = o * s + l * n + c, d = y < d ? y : d, f = v < f ? v : f, p = y > p ? y : p, m = v > m ? v : m, this.minX = d, this.minY = f, this.maxX = p, this.maxY = m;
  }
  /**
   * Adds screen vertices from array
   * @param vertexData - calculated vertices
   * @param beginOffset - begin offset
   * @param endOffset - end offset, excluded
   */
  addVertexData(t, e, r) {
    let s = this.minX, n = this.minY, a = this.maxX, o = this.maxY;
    for (let h = e; h < r; h += 2) {
      const l = t[h], u = t[h + 1];
      s = l < s ? l : s, n = u < n ? u : n, a = l > a ? l : a, o = u > o ? u : o;
    }
    this.minX = s, this.minY = n, this.maxX = a, this.maxY = o;
  }
  /**
   * Add an array of mesh vertices
   * @param transform - mesh transform
   * @param vertices - mesh coordinates in array
   * @param beginOffset - begin offset
   * @param endOffset - end offset, excluded
   */
  addVertices(t, e, r, s) {
    this.addVerticesMatrix(t.worldTransform, e, r, s);
  }
  /**
   * Add an array of mesh vertices.
   * @param matrix - mesh matrix
   * @param vertices - mesh coordinates in array
   * @param beginOffset - begin offset
   * @param endOffset - end offset, excluded
   * @param padX - x padding
   * @param padY - y padding
   */
  addVerticesMatrix(t, e, r, s, n = 0, a = n) {
    const o = t.a, h = t.b, l = t.c, u = t.d, c = t.tx, d = t.ty;
    let f = this.minX, p = this.minY, m = this.maxX, y = this.maxY;
    for (let v = r; v < s; v += 2) {
      const b = e[v], _ = e[v + 1], g = o * b + l * _ + c, w = u * _ + h * b + d;
      f = Math.min(f, g - n), m = Math.max(m, g + n), p = Math.min(p, w - a), y = Math.max(y, w + a);
    }
    this.minX = f, this.minY = p, this.maxX = m, this.maxY = y;
  }
  /**
   * Adds other {@link PIXI.Bounds}.
   * @param bounds - The Bounds to be added
   */
  addBounds(t) {
    const e = this.minX, r = this.minY, s = this.maxX, n = this.maxY;
    this.minX = t.minX < e ? t.minX : e, this.minY = t.minY < r ? t.minY : r, this.maxX = t.maxX > s ? t.maxX : s, this.maxY = t.maxY > n ? t.maxY : n;
  }
  /**
   * Adds other Bounds, masked with Bounds.
   * @param bounds - The Bounds to be added.
   * @param mask - TODO
   */
  addBoundsMask(t, e) {
    const r = t.minX > e.minX ? t.minX : e.minX, s = t.minY > e.minY ? t.minY : e.minY, n = t.maxX < e.maxX ? t.maxX : e.maxX, a = t.maxY < e.maxY ? t.maxY : e.maxY;
    if (r <= n && s <= a) {
      const o = this.minX, h = this.minY, l = this.maxX, u = this.maxY;
      this.minX = r < o ? r : o, this.minY = s < h ? s : h, this.maxX = n > l ? n : l, this.maxY = a > u ? a : u;
    }
  }
  /**
   * Adds other Bounds, multiplied by matrix. Bounds shouldn't be empty.
   * @param bounds - other bounds
   * @param matrix - multiplicator
   */
  addBoundsMatrix(t, e) {
    this.addFrameMatrix(e, t.minX, t.minY, t.maxX, t.maxY);
  }
  /**
   * Adds other Bounds, masked with Rectangle.
   * @param bounds - TODO
   * @param area - TODO
   */
  addBoundsArea(t, e) {
    const r = t.minX > e.x ? t.minX : e.x, s = t.minY > e.y ? t.minY : e.y, n = t.maxX < e.x + e.width ? t.maxX : e.x + e.width, a = t.maxY < e.y + e.height ? t.maxY : e.y + e.height;
    if (r <= n && s <= a) {
      const o = this.minX, h = this.minY, l = this.maxX, u = this.maxY;
      this.minX = r < o ? r : o, this.minY = s < h ? s : h, this.maxX = n > l ? n : l, this.maxY = a > u ? a : u;
    }
  }
  /**
   * Pads bounds object, making it grow in all directions.
   * If paddingY is omitted, both paddingX and paddingY will be set to paddingX.
   * @param paddingX - The horizontal padding amount.
   * @param paddingY - The vertical padding amount.
   */
  pad(t = 0, e = t) {
    this.isEmpty() || (this.minX -= t, this.maxX += t, this.minY -= e, this.maxY += e);
  }
  /**
   * Adds padded frame. (x0, y0) should be strictly less than (x1, y1)
   * @param x0 - left X of frame
   * @param y0 - top Y of frame
   * @param x1 - right X of frame
   * @param y1 - bottom Y of frame
   * @param padX - padding X
   * @param padY - padding Y
   */
  addFramePad(t, e, r, s, n, a) {
    t -= n, e -= a, r += n, s += a, this.minX = this.minX < t ? this.minX : t, this.maxX = this.maxX > r ? this.maxX : r, this.minY = this.minY < e ? this.minY : e, this.maxY = this.maxY > s ? this.maxY : s;
  }
}
class st extends gi {
  constructor() {
    super(), this.tempDisplayObjectParent = null, this.transform = new Ns(), this.alpha = 1, this.visible = !0, this.renderable = !0, this.cullable = !1, this.cullArea = null, this.parent = null, this.worldAlpha = 1, this._lastSortedIndex = 0, this._zIndex = 0, this.filterArea = null, this.filters = null, this._enabledFilters = null, this._bounds = new xs(), this._localBounds = null, this._boundsID = 0, this._boundsRect = null, this._localBoundsRect = null, this._mask = null, this._maskRefCount = 0, this._destroyed = !1, this.isSprite = !1, this.isMask = !1;
  }
  /**
   * Mixes all enumerable properties and methods from a source object to DisplayObject.
   * @param source - The source of properties and methods to mix in.
   */
  static mixin(t) {
    const e = Object.keys(t);
    for (let r = 0; r < e.length; ++r) {
      const s = e[r];
      Object.defineProperty(
        st.prototype,
        s,
        Object.getOwnPropertyDescriptor(t, s)
      );
    }
  }
  /**
   * Fired when this DisplayObject is added to a Container.
   * @instance
   * @event added
   * @param {PIXI.Container} container - The container added to.
   */
  /**
   * Fired when this DisplayObject is removed from a Container.
   * @instance
   * @event removed
   * @param {PIXI.Container} container - The container removed from.
   */
  /**
   * Fired when this DisplayObject is destroyed. This event is emitted once
   * destroy is finished.
   * @instance
   * @event destroyed
   */
  /** Readonly flag for destroyed display objects. */
  get destroyed() {
    return this._destroyed;
  }
  /** Recursively updates transform of all objects from the root to this one internal function for toLocal() */
  _recursivePostUpdateTransform() {
    this.parent ? (this.parent._recursivePostUpdateTransform(), this.transform.updateTransform(this.parent.transform)) : this.transform.updateTransform(this._tempDisplayObjectParent.transform);
  }
  /** Updates the object transform for rendering. TODO - Optimization pass! */
  updateTransform() {
    this._boundsID++, this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha;
  }
  /**
   * Calculates and returns the (world) bounds of the display object as a [Rectangle]{@link PIXI.Rectangle}.
   *
   * This method is expensive on containers with a large subtree (like the stage). This is because the bounds
   * of a container depend on its children's bounds, which recursively causes all bounds in the subtree to
   * be recalculated. The upside, however, is that calling `getBounds` once on a container will indeed update
   * the bounds of all children (the whole subtree, in fact). This side effect should be exploited by using
   * `displayObject._bounds.getRectangle()` when traversing through all the bounds in a scene graph. Otherwise,
   * calling `getBounds` on each object in a subtree will cause the total cost to increase quadratically as
   * its height increases.
   *
   * The transforms of all objects in a container's **subtree** and of all **ancestors** are updated.
   * The world bounds of all display objects in a container's **subtree** will also be recalculated.
   *
   * The `_bounds` object stores the last calculation of the bounds. You can use to entirely skip bounds
   * calculation if needed.
   *
   * ```js
   * const lastCalculatedBounds = displayObject._bounds.getRectangle(optionalRect);
   * ```
   *
   * Do know that usage of `getLocalBounds` can corrupt the `_bounds` of children (the whole subtree, actually). This
   * is a known issue that has not been solved. See [getLocalBounds]{@link PIXI.DisplayObject#getLocalBounds} for more
   * details.
   *
   * `getBounds` should be called with `skipUpdate` equal to `true` in a render() call. This is because the transforms
   * are guaranteed to be update-to-date. In fact, recalculating inside a render() call may cause corruption in certain
   * cases.
   * @param skipUpdate - Setting to `true` will stop the transforms of the scene graph from
   *  being updated. This means the calculation returned MAY be out of date BUT will give you a
   *  nice performance boost.
   * @param rect - Optional rectangle to store the result of the bounds calculation.
   * @returns - The minimum axis-aligned rectangle in world space that fits around this object.
   */
  getBounds(t, e) {
    return t || (this.parent ? (this._recursivePostUpdateTransform(), this.updateTransform()) : (this.parent = this._tempDisplayObjectParent, this.updateTransform(), this.parent = null)), this._bounds.updateID !== this._boundsID && (this.calculateBounds(), this._bounds.updateID = this._boundsID), e || (this._boundsRect || (this._boundsRect = new j()), e = this._boundsRect), this._bounds.getRectangle(e);
  }
  /**
   * Retrieves the local bounds of the displayObject as a rectangle object.
   * @param rect - Optional rectangle to store the result of the bounds calculation.
   * @returns - The rectangular bounding area.
   */
  getLocalBounds(t) {
    t || (this._localBoundsRect || (this._localBoundsRect = new j()), t = this._localBoundsRect), this._localBounds || (this._localBounds = new xs());
    const e = this.transform, r = this.parent;
    this.parent = null, this._tempDisplayObjectParent.worldAlpha = (r == null ? void 0 : r.worldAlpha) ?? 1, this.transform = this._tempDisplayObjectParent.transform;
    const s = this._bounds, n = this._boundsID;
    this._bounds = this._localBounds;
    const a = this.getBounds(!1, t);
    return this.parent = r, this.transform = e, this._bounds = s, this._bounds.updateID += this._boundsID - n, a;
  }
  /**
   * Calculates the global position of the display object.
   * @param position - The world origin to calculate from.
   * @param point - A Point object in which to store the value, optional
   *  (otherwise will create a new Point).
   * @param skipUpdate - Should we skip the update transform.
   * @returns - A point object representing the position of this object.
   */
  toGlobal(t, e, r = !1) {
    return r || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.apply(t, e);
  }
  /**
   * Calculates the local position of the display object relative to another point.
   * @param position - The world origin to calculate from.
   * @param from - The DisplayObject to calculate the global position from.
   * @param point - A Point object in which to store the value, optional
   *  (otherwise will create a new Point).
   * @param skipUpdate - Should we skip the update transform
   * @returns - A point object representing the position of this object
   */
  toLocal(t, e, r, s) {
    return e && (t = e.toGlobal(t, r, s)), s || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.applyInverse(t, r);
  }
  /**
   * Set the parent Container of this DisplayObject.
   * @param container - The Container to add this DisplayObject to.
   * @returns - The Container that this DisplayObject was added to.
   */
  setParent(t) {
    if (!t || !t.addChild)
      throw new Error("setParent: Argument must be a Container");
    return t.addChild(this), t;
  }
  /** Remove the DisplayObject from its parent Container. If the DisplayObject has no parent, do nothing. */
  removeFromParent() {
    var t;
    (t = this.parent) == null || t.removeChild(this);
  }
  /**
   * Convenience function to set the position, scale, skew and pivot at once.
   * @param x - The X position
   * @param y - The Y position
   * @param scaleX - The X scale value
   * @param scaleY - The Y scale value
   * @param rotation - The rotation
   * @param skewX - The X skew value
   * @param skewY - The Y skew value
   * @param pivotX - The X pivot value
   * @param pivotY - The Y pivot value
   * @returns - The DisplayObject instance
   */
  setTransform(t = 0, e = 0, r = 1, s = 1, n = 0, a = 0, o = 0, h = 0, l = 0) {
    return this.position.x = t, this.position.y = e, this.scale.x = r || 1, this.scale.y = s || 1, this.rotation = n, this.skew.x = a, this.skew.y = o, this.pivot.x = h, this.pivot.y = l, this;
  }
  /**
   * Base destroy method for generic display objects. This will automatically
   * remove the display object from its parent Container as well as remove
   * all current event listeners and internal references. Do not use a DisplayObject
   * after calling `destroy()`.
   * @param _options
   */
  destroy(t) {
    this.removeFromParent(), this._destroyed = !0, this.transform = null, this.parent = null, this._bounds = null, this.mask = null, this.cullArea = null, this.filters = null, this.filterArea = null, this.hitArea = null, this.eventMode = "auto", this.interactiveChildren = !1, this.emit("destroyed"), this.removeAllListeners();
  }
  /**
   * @protected
   * @member {PIXI.Container}
   */
  get _tempDisplayObjectParent() {
    return this.tempDisplayObjectParent === null && (this.tempDisplayObjectParent = new xg()), this.tempDisplayObjectParent;
  }
  /**
   * Used in Renderer, cacheAsBitmap and other places where you call an `updateTransform` on root.
   *
   * ```js
   * const cacheParent = elem.enableTempParent();
   * elem.updateTransform();
   * elem.disableTempParent(cacheParent);
   * ```
   * @returns - Current parent
   */
  enableTempParent() {
    const t = this.parent;
    return this.parent = this._tempDisplayObjectParent, t;
  }
  /**
   * Pair method for `enableTempParent`
   * @param cacheParent - Actual parent of element
   */
  disableTempParent(t) {
    this.parent = t;
  }
  /**
   * The position of the displayObject on the x axis relative to the local coordinates of the parent.
   * An alias to position.x
   */
  get x() {
    return this.position.x;
  }
  set x(t) {
    this.transform.position.x = t;
  }
  /**
   * The position of the displayObject on the y axis relative to the local coordinates of the parent.
   * An alias to position.y
   */
  get y() {
    return this.position.y;
  }
  set y(t) {
    this.transform.position.y = t;
  }
  /**
   * Current transform of the object based on world (parent) factors.
   * @readonly
   */
  get worldTransform() {
    return this.transform.worldTransform;
  }
  /**
   * Current transform of the object based on local factors: position, scale, other stuff.
   * @readonly
   */
  get localTransform() {
    return this.transform.localTransform;
  }
  /**
   * The coordinate of the object relative to the local coordinates of the parent.
   * @since 4.0.0
   */
  get position() {
    return this.transform.position;
  }
  set position(t) {
    this.transform.position.copyFrom(t);
  }
  /**
   * The scale factors of this object along the local coordinate axes.
   *
   * The default scale is (1, 1).
   * @since 4.0.0
   */
  get scale() {
    return this.transform.scale;
  }
  set scale(t) {
    this.transform.scale.copyFrom(t);
  }
  /**
   * The center of rotation, scaling, and skewing for this display object in its local space. The `position`
   * is the projection of `pivot` in the parent's local space.
   *
   * By default, the pivot is the origin (0, 0).
   * @since 4.0.0
   */
  get pivot() {
    return this.transform.pivot;
  }
  set pivot(t) {
    this.transform.pivot.copyFrom(t);
  }
  /**
   * The skew factor for the object in radians.
   * @since 4.0.0
   */
  get skew() {
    return this.transform.skew;
  }
  set skew(t) {
    this.transform.skew.copyFrom(t);
  }
  /**
   * The rotation of the object in radians.
   * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
   */
  get rotation() {
    return this.transform.rotation;
  }
  set rotation(t) {
    this.transform.rotation = t;
  }
  /**
   * The angle of the object in degrees.
   * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
   */
  get angle() {
    return this.transform.rotation * dm;
  }
  set angle(t) {
    this.transform.rotation = t * fm;
  }
  /**
   * The zIndex of the displayObject.
   *
   * If a container has the sortableChildren property set to true, children will be automatically
   * sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
   * and thus rendered on top of other display objects within the same container.
   * @see PIXI.Container#sortableChildren
   */
  get zIndex() {
    return this._zIndex;
  }
  set zIndex(t) {
    this._zIndex !== t && (this._zIndex = t, this.parent && (this.parent.sortDirty = !0));
  }
  /**
   * Indicates if the object is globally visible.
   * @readonly
   */
  get worldVisible() {
    let t = this;
    do {
      if (!t.visible)
        return !1;
      t = t.parent;
    } while (t);
    return !0;
  }
  /**
   * Sets a mask for the displayObject. A mask is an object that limits the visibility of an
   * object to the shape of the mask applied to it. In PixiJS a regular mask must be a
   * {@link PIXI.Graphics} or a {@link PIXI.Sprite} object. This allows for much faster masking in canvas as it
   * utilities shape clipping. Furthermore, a mask of an object must be in the subtree of its parent.
   * Otherwise, `getLocalBounds` may calculate incorrect bounds, which makes the container's width and height wrong.
   * To remove a mask, set this property to `null`.
   *
   * For sprite mask both alpha and red channel are used. Black mask is the same as transparent mask.
   * @example
   * import { Graphics, Sprite } from 'pixi.js';
   *
   * const graphics = new Graphics();
   * graphics.beginFill(0xFF3300);
   * graphics.drawRect(50, 250, 100, 100);
   * graphics.endFill();
   *
   * const sprite = new Sprite(texture);
   * sprite.mask = graphics;
   * @todo At the moment, CanvasRenderer doesn't support Sprite as mask.
   */
  get mask() {
    return this._mask;
  }
  set mask(t) {
    if (this._mask !== t) {
      if (this._mask) {
        const e = this._mask.isMaskData ? this._mask.maskObject : this._mask;
        e && (e._maskRefCount--, e._maskRefCount === 0 && (e.renderable = !0, e.isMask = !1));
      }
      if (this._mask = t, this._mask) {
        const e = this._mask.isMaskData ? this._mask.maskObject : this._mask;
        e && (e._maskRefCount === 0 && (e.renderable = !1, e.isMask = !0), e._maskRefCount++);
      }
    }
  }
}
class xg extends st {
  constructor() {
    super(...arguments), this.sortDirty = null;
  }
}
st.prototype.displayObjectUpdateTransform = st.prototype.updateTransform;
const bg = new rt();
function Tg(i, t) {
  return i.zIndex === t.zIndex ? i._lastSortedIndex - t._lastSortedIndex : i.zIndex - t.zIndex;
}
const xu = class ma extends st {
  constructor() {
    super(), this.children = [], this.sortableChildren = ma.defaultSortableChildren, this.sortDirty = !1;
  }
  /**
   * Overridable method that can be used by Container subclasses whenever the children array is modified.
   * @param _length
   */
  onChildrenChange(t) {
  }
  /**
   * Adds one or more children to the container.
   *
   * Multiple items can be added like so: `myContainer.addChild(thingOne, thingTwo, thingThree)`
   * @param {...PIXI.DisplayObject} children - The DisplayObject(s) to add to the container
   * @returns {PIXI.DisplayObject} - The first child that was added.
   */
  addChild(...t) {
    if (t.length > 1)
      for (let e = 0; e < t.length; e++)
        this.addChild(t[e]);
    else {
      const e = t[0];
      e.parent && e.parent.removeChild(e), e.parent = this, this.sortDirty = !0, e.transform._parentID = -1, this.children.push(e), this._boundsID++, this.onChildrenChange(this.children.length - 1), this.emit("childAdded", e, this, this.children.length - 1), e.emit("added", this);
    }
    return t[0];
  }
  /**
   * Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown.
   * If the child is already in this container, it will be moved to the specified index.
   * @param {PIXI.DisplayObject} child - The child to add.
   * @param {number} index - The absolute index where the child will be positioned at the end of the operation.
   * @returns {PIXI.DisplayObject} The child that was added.
   */
  addChildAt(t, e) {
    if (e < 0 || e > this.children.length)
      throw new Error(`${t}addChildAt: The index ${e} supplied is out of bounds ${this.children.length}`);
    return t.parent && t.parent.removeChild(t), t.parent = this, this.sortDirty = !0, t.transform._parentID = -1, this.children.splice(e, 0, t), this._boundsID++, this.onChildrenChange(e), t.emit("added", this), this.emit("childAdded", t, this, e), t;
  }
  /**
   * Swaps the position of 2 Display Objects within this container.
   * @param child - First display object to swap
   * @param child2 - Second display object to swap
   */
  swapChildren(t, e) {
    if (t === e)
      return;
    const r = this.getChildIndex(t), s = this.getChildIndex(e);
    this.children[r] = e, this.children[s] = t, this.onChildrenChange(r < s ? r : s);
  }
  /**
   * Returns the index position of a child DisplayObject instance
   * @param child - The DisplayObject instance to identify
   * @returns - The index position of the child display object to identify
   */
  getChildIndex(t) {
    const e = this.children.indexOf(t);
    if (e === -1)
      throw new Error("The supplied DisplayObject must be a child of the caller");
    return e;
  }
  /**
   * Changes the position of an existing child in the display object container
   * @param child - The child DisplayObject instance for which you want to change the index number
   * @param index - The resulting index number for the child display object
   */
  setChildIndex(t, e) {
    if (e < 0 || e >= this.children.length)
      throw new Error(`The index ${e} supplied is out of bounds ${this.children.length}`);
    const r = this.getChildIndex(t);
    Pr(this.children, r, 1), this.children.splice(e, 0, t), this.onChildrenChange(e);
  }
  /**
   * Returns the child at the specified index
   * @param index - The index to get the child at
   * @returns - The child at the given index, if any.
   */
  getChildAt(t) {
    if (t < 0 || t >= this.children.length)
      throw new Error(`getChildAt: Index (${t}) does not exist.`);
    return this.children[t];
  }
  /**
   * Removes one or more children from the container.
   * @param {...PIXI.DisplayObject} children - The DisplayObject(s) to remove
   * @returns {PIXI.DisplayObject} The first child that was removed.
   */
  removeChild(...t) {
    if (t.length > 1)
      for (let e = 0; e < t.length; e++)
        this.removeChild(t[e]);
    else {
      const e = t[0], r = this.children.indexOf(e);
      if (r === -1)
        return null;
      e.parent = null, e.transform._parentID = -1, Pr(this.children, r, 1), this._boundsID++, this.onChildrenChange(r), e.emit("removed", this), this.emit("childRemoved", e, this, r);
    }
    return t[0];
  }
  /**
   * Removes a child from the specified index position.
   * @param index - The index to get the child from
   * @returns The child that was removed.
   */
  removeChildAt(t) {
    const e = this.getChildAt(t);
    return e.parent = null, e.transform._parentID = -1, Pr(this.children, t, 1), this._boundsID++, this.onChildrenChange(t), e.emit("removed", this), this.emit("childRemoved", e, this, t), e;
  }
  /**
   * Removes all children from this container that are within the begin and end indexes.
   * @param beginIndex - The beginning position.
   * @param endIndex - The ending position. Default value is size of the container.
   * @returns - List of removed children
   */
  removeChildren(t = 0, e = this.children.length) {
    const r = t, s = e, n = s - r;
    let a;
    if (n > 0 && n <= s) {
      a = this.children.splice(r, n);
      for (let o = 0; o < a.length; ++o)
        a[o].parent = null, a[o].transform && (a[o].transform._parentID = -1);
      this._boundsID++, this.onChildrenChange(t);
      for (let o = 0; o < a.length; ++o)
        a[o].emit("removed", this), this.emit("childRemoved", a[o], this, o);
      return a;
    } else if (n === 0 && this.children.length === 0)
      return [];
    throw new RangeError("removeChildren: numeric values are outside the acceptable range.");
  }
  /** Sorts children by zIndex. Previous order is maintained for 2 children with the same zIndex. */
  sortChildren() {
    let t = !1;
    for (let e = 0, r = this.children.length; e < r; ++e) {
      const s = this.children[e];
      s._lastSortedIndex = e, !t && s.zIndex !== 0 && (t = !0);
    }
    t && this.children.length > 1 && this.children.sort(Tg), this.sortDirty = !1;
  }
  /** Updates the transform on all children of this container for rendering. */
  updateTransform() {
    this.sortableChildren && this.sortDirty && this.sortChildren(), this._boundsID++, this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha;
    for (let t = 0, e = this.children.length; t < e; ++t) {
      const r = this.children[t];
      r.visible && r.updateTransform();
    }
  }
  /**
   * Recalculates the bounds of the container.
   *
   * This implementation will automatically fit the children's bounds into the calculation. Each child's bounds
   * is limited to its mask's bounds or filterArea, if any is applied.
   */
  calculateBounds() {
    this._bounds.clear(), this._calculateBounds();
    for (let t = 0; t < this.children.length; t++) {
      const e = this.children[t];
      if (!(!e.visible || !e.renderable))
        if (e.calculateBounds(), e._mask) {
          const r = e._mask.isMaskData ? e._mask.maskObject : e._mask;
          r ? (r.calculateBounds(), this._bounds.addBoundsMask(e._bounds, r._bounds)) : this._bounds.addBounds(e._bounds);
        } else
          e.filterArea ? this._bounds.addBoundsArea(e._bounds, e.filterArea) : this._bounds.addBounds(e._bounds);
    }
    this._bounds.updateID = this._boundsID;
  }
  /**
   * Retrieves the local bounds of the displayObject as a rectangle object.
   *
   * Calling `getLocalBounds` may invalidate the `_bounds` of the whole subtree below. If using it inside a render()
   * call, it is advised to call `getBounds()` immediately after to recalculate the world bounds of the subtree.
   * @param rect - Optional rectangle to store the result of the bounds calculation.
   * @param skipChildrenUpdate - Setting to `true` will stop re-calculation of children transforms,
   *  it was default behaviour of pixi 4.0-5.2 and caused many problems to users.
   * @returns - The rectangular bounding area.
   */
  getLocalBounds(t, e = !1) {
    const r = super.getLocalBounds(t);
    if (!e)
      for (let s = 0, n = this.children.length; s < n; ++s) {
        const a = this.children[s];
        a.visible && a.updateTransform();
      }
    return r;
  }
  /**
   * Recalculates the content bounds of this object. This should be overriden to
   * calculate the bounds of this specific object (not including children).
   * @protected
   */
  _calculateBounds() {
  }
  /**
   * Renders this object and its children with culling.
   * @protected
   * @param {PIXI.Renderer} renderer - The renderer
   */
  _renderWithCulling(t) {
    const e = t.renderTexture.sourceFrame;
    if (!(e.width > 0 && e.height > 0))
      return;
    let r, s;
    this.cullArea ? (r = this.cullArea, s = this.worldTransform) : this._render !== ma.prototype._render && (r = this.getBounds(!0));
    const n = t.projection.transform;
    if (n && (s ? (s = bg.copyFrom(s), s.prepend(n)) : s = n), r && e.intersects(r, s))
      this._render(t);
    else if (this.cullArea)
      return;
    for (let a = 0, o = this.children.length; a < o; ++a) {
      const h = this.children[a], l = h.cullable;
      h.cullable = l || !this.cullArea, h.render(t), h.cullable = l;
    }
  }
  /**
   * Renders the object using the WebGL renderer.
   *
   * The [_render]{@link PIXI.Container#_render} method is be overriden for rendering the contents of the
   * container itself. This `render` method will invoke it, and also invoke the `render` methods of all
   * children afterward.
   *
   * If `renderable` or `visible` is false or if `worldAlpha` is not positive or if `cullable` is true and
   * the bounds of this object are out of frame, this implementation will entirely skip rendering.
   * See {@link PIXI.DisplayObject} for choosing between `renderable` or `visible`. Generally,
   * setting alpha to zero is not recommended for purely skipping rendering.
   *
   * When your scene becomes large (especially when it is larger than can be viewed in a single screen), it is
   * advised to employ **culling** to automatically skip rendering objects outside of the current screen.
   * See [cullable]{@link PIXI.DisplayObject#cullable} and [cullArea]{@link PIXI.DisplayObject#cullArea}.
   * Other culling methods might be better suited for a large number static objects; see
   * [@pixi-essentials/cull]{@link https://www.npmjs.com/package/@pixi-essentials/cull} and
   * [pixi-cull]{@link https://www.npmjs.com/package/pixi-cull}.
   *
   * The [renderAdvanced]{@link PIXI.Container#renderAdvanced} method is internally used when when masking or
   * filtering is applied on a container. This does, however, break batching and can affect performance when
   * masking and filtering is applied extensively throughout the scene graph.
   * @param renderer - The renderer
   */
  render(t) {
    var e;
    if (!(!this.visible || this.worldAlpha <= 0 || !this.renderable))
      if (this._mask || (e = this.filters) != null && e.length)
        this.renderAdvanced(t);
      else if (this.cullable)
        this._renderWithCulling(t);
      else {
        this._render(t);
        for (let r = 0, s = this.children.length; r < s; ++r)
          this.children[r].render(t);
      }
  }
  /**
   * Render the object using the WebGL renderer and advanced features.
   * @param renderer - The renderer
   */
  renderAdvanced(t) {
    var n, a, o;
    const e = this.filters, r = this._mask;
    if (e) {
      this._enabledFilters || (this._enabledFilters = []), this._enabledFilters.length = 0;
      for (let h = 0; h < e.length; h++)
        e[h].enabled && this._enabledFilters.push(e[h]);
    }
    const s = e && ((n = this._enabledFilters) == null ? void 0 : n.length) || r && (!r.isMaskData || r.enabled && (r.autoDetect || r.type !== mt.NONE));
    if (s && t.batch.flush(), e && ((a = this._enabledFilters) != null && a.length) && t.filter.push(this, this._enabledFilters), r && t.mask.push(this, this._mask), this.cullable)
      this._renderWithCulling(t);
    else {
      this._render(t);
      for (let h = 0, l = this.children.length; h < l; ++h)
        this.children[h].render(t);
    }
    s && t.batch.flush(), r && t.mask.pop(this), e && ((o = this._enabledFilters) != null && o.length) && t.filter.pop();
  }
  /**
   * To be overridden by the subclasses.
   * @param _renderer - The renderer
   */
  _render(t) {
  }
  /**
   * Removes all internal references and listeners as well as removes children from the display list.
   * Do not use a Container after calling `destroy`.
   * @param options - Options parameter. A boolean will act as if all options
   *  have been set to that value
   * @param {boolean} [options.children=false] - if set to true, all the children will have their destroy
   *  method called as well. 'options' will be passed on to those calls.
   * @param {boolean} [options.texture=false] - Only used for child Sprites if options.children is set to true
   *  Should it destroy the texture of the child sprite
   * @param {boolean} [options.baseTexture=false] - Only used for child Sprites if options.children is set to true
   *  Should it destroy the base texture of the child sprite
   */
  destroy(t) {
    super.destroy(), this.sortDirty = !1;
    const e = typeof t == "boolean" ? t : t == null ? void 0 : t.children, r = this.removeChildren(0, this.children.length);
    if (e)
      for (let s = 0; s < r.length; ++s)
        r[s].destroy(t);
  }
  /** The width of the Container, setting this will actually modify the scale to achieve the value set. */
  get width() {
    return this.scale.x * this.getLocalBounds().width;
  }
  set width(t) {
    const e = this.getLocalBounds().width;
    e !== 0 ? this.scale.x = t / e : this.scale.x = 1, this._width = t;
  }
  /** The height of the Container, setting this will actually modify the scale to achieve the value set. */
  get height() {
    return this.scale.y * this.getLocalBounds().height;
  }
  set height(t) {
    const e = this.getLocalBounds().height;
    e !== 0 ? this.scale.y = t / e : this.scale.y = 1, this._height = t;
  }
};
xu.defaultSortableChildren = !1;
let Ft = xu;
Ft.prototype.containerUpdateTransform = Ft.prototype.updateTransform;
Object.defineProperties(L, {
  /**
   * Sets the default value for the container property 'sortableChildren'.
   * @static
   * @name SORTABLE_CHILDREN
   * @memberof PIXI.settings
   * @deprecated since 7.1.0
   * @type {boolean}
   * @see PIXI.Container.defaultSortableChildren
   */
  SORTABLE_CHILDREN: {
    get() {
      return Ft.defaultSortableChildren;
    },
    set(i) {
      Y("7.1.0", "settings.SORTABLE_CHILDREN is deprecated, use Container.defaultSortableChildren"), Ft.defaultSortableChildren = i;
    }
  }
});
const Kr = new K(), Eg = new Uint16Array([0, 1, 2, 0, 2, 3]);
class de extends Ft {
  /** @param texture - The texture for this sprite. */
  constructor(t) {
    super(), this._anchor = new ve(
      this._onAnchorUpdate,
      this,
      t ? t.defaultAnchor.x : 0,
      t ? t.defaultAnchor.y : 0
    ), this._texture = null, this._width = 0, this._height = 0, this._tintColor = new tt(16777215), this._tintRGB = null, this.tint = 16777215, this.blendMode = X.NORMAL, this._cachedTint = 16777215, this.uvs = null, this.texture = t || O.EMPTY, this.vertexData = new Float32Array(8), this.vertexTrimmedData = null, this._transformID = -1, this._textureID = -1, this._transformTrimmedID = -1, this._textureTrimmedID = -1, this.indices = Eg, this.pluginName = "batch", this.isSprite = !0, this._roundPixels = L.ROUND_PIXELS;
  }
  /** When the texture is updated, this event will fire to update the scale and frame. */
  _onTextureUpdate() {
    this._textureID = -1, this._textureTrimmedID = -1, this._cachedTint = 16777215, this._width && (this.scale.x = Ne(this.scale.x) * this._width / this._texture.orig.width), this._height && (this.scale.y = Ne(this.scale.y) * this._height / this._texture.orig.height);
  }
  /** Called when the anchor position updates. */
  _onAnchorUpdate() {
    this._transformID = -1, this._transformTrimmedID = -1;
  }
  /** Calculates worldTransform * vertices, store it in vertexData. */
  calculateVertices() {
    const t = this._texture;
    if (this._transformID === this.transform._worldID && this._textureID === t._updateID)
      return;
    this._textureID !== t._updateID && (this.uvs = this._texture._uvs.uvsFloat32), this._transformID = this.transform._worldID, this._textureID = t._updateID;
    const e = this.transform.worldTransform, r = e.a, s = e.b, n = e.c, a = e.d, o = e.tx, h = e.ty, l = this.vertexData, u = t.trim, c = t.orig, d = this._anchor;
    let f = 0, p = 0, m = 0, y = 0;
    if (u ? (p = u.x - d._x * c.width, f = p + u.width, y = u.y - d._y * c.height, m = y + u.height) : (p = -d._x * c.width, f = p + c.width, y = -d._y * c.height, m = y + c.height), l[0] = r * p + n * y + o, l[1] = a * y + s * p + h, l[2] = r * f + n * y + o, l[3] = a * y + s * f + h, l[4] = r * f + n * m + o, l[5] = a * m + s * f + h, l[6] = r * p + n * m + o, l[7] = a * m + s * p + h, this._roundPixels) {
      const v = L.RESOLUTION;
      for (let b = 0; b < l.length; ++b)
        l[b] = Math.round(l[b] * v) / v;
    }
  }
  /**
   * Calculates worldTransform * vertices for a non texture with a trim. store it in vertexTrimmedData.
   *
   * This is used to ensure that the true width and height of a trimmed texture is respected.
   */
  calculateTrimmedVertices() {
    if (!this.vertexTrimmedData)
      this.vertexTrimmedData = new Float32Array(8);
    else if (this._transformTrimmedID === this.transform._worldID && this._textureTrimmedID === this._texture._updateID)
      return;
    this._transformTrimmedID = this.transform._worldID, this._textureTrimmedID = this._texture._updateID;
    const t = this._texture, e = this.vertexTrimmedData, r = t.orig, s = this._anchor, n = this.transform.worldTransform, a = n.a, o = n.b, h = n.c, l = n.d, u = n.tx, c = n.ty, d = -s._x * r.width, f = d + r.width, p = -s._y * r.height, m = p + r.height;
    if (e[0] = a * d + h * p + u, e[1] = l * p + o * d + c, e[2] = a * f + h * p + u, e[3] = l * p + o * f + c, e[4] = a * f + h * m + u, e[5] = l * m + o * f + c, e[6] = a * d + h * m + u, e[7] = l * m + o * d + c, this._roundPixels) {
      const y = L.RESOLUTION;
      for (let v = 0; v < e.length; ++v)
        e[v] = Math.round(e[v] * y) / y;
    }
  }
  /**
   *
   * Renders the object using the WebGL renderer
   * @param renderer - The webgl renderer to use.
   */
  _render(t) {
    this.calculateVertices(), t.batch.setObjectRenderer(t.plugins[this.pluginName]), t.plugins[this.pluginName].render(this);
  }
  /** Updates the bounds of the sprite. */
  _calculateBounds() {
    const t = this._texture.trim, e = this._texture.orig;
    !t || t.width === e.width && t.height === e.height ? (this.calculateVertices(), this._bounds.addQuad(this.vertexData)) : (this.calculateTrimmedVertices(), this._bounds.addQuad(this.vertexTrimmedData));
  }
  /**
   * Gets the local bounds of the sprite object.
   * @param rect - Optional output rectangle.
   * @returns The bounds.
   */
  getLocalBounds(t) {
    return this.children.length === 0 ? (this._localBounds || (this._localBounds = new xs()), this._localBounds.minX = this._texture.orig.width * -this._anchor._x, this._localBounds.minY = this._texture.orig.height * -this._anchor._y, this._localBounds.maxX = this._texture.orig.width * (1 - this._anchor._x), this._localBounds.maxY = this._texture.orig.height * (1 - this._anchor._y), t || (this._localBoundsRect || (this._localBoundsRect = new j()), t = this._localBoundsRect), this._localBounds.getRectangle(t)) : super.getLocalBounds.call(this, t);
  }
  /**
   * Tests if a point is inside this sprite
   * @param point - the point to test
   * @returns The result of the test
   */
  containsPoint(t) {
    this.worldTransform.applyInverse(t, Kr);
    const e = this._texture.orig.width, r = this._texture.orig.height, s = -e * this.anchor.x;
    let n = 0;
    return Kr.x >= s && Kr.x < s + e && (n = -r * this.anchor.y, Kr.y >= n && Kr.y < n + r);
  }
  /**
   * Destroys this sprite and optionally its texture and children.
   * @param options - Options parameter. A boolean will act as if all options
   *  have been set to that value
   * @param [options.children=false] - if set to true, all the children will have their destroy
   *      method called as well. 'options' will be passed on to those calls.
   * @param [options.texture=false] - Should it destroy the current texture of the sprite as well
   * @param [options.baseTexture=false] - Should it destroy the base texture of the sprite as well
   */
  destroy(t) {
    if (super.destroy(t), this._texture.off("update", this._onTextureUpdate, this), this._anchor = null, typeof t == "boolean" ? t : t == null ? void 0 : t.texture) {
      const e = typeof t == "boolean" ? t : t == null ? void 0 : t.baseTexture;
      this._texture.destroy(!!e);
    }
    this._texture = null;
  }
  // some helper functions..
  /**
   * Helper function that creates a new sprite based on the source you provide.
   * The source can be - frame id, image url, video url, canvas element, video element, base texture
   * @param {string|PIXI.Texture|HTMLImageElement|HTMLVideoElement|ImageBitmap|PIXI.ICanvas} source
   *     - Source to create texture from
   * @param {object} [options] - See {@link PIXI.BaseTexture}'s constructor for options.
   * @returns The newly created sprite
   */
  static from(t, e) {
    const r = t instanceof O ? t : O.from(t, e);
    return new de(r);
  }
  /**
   * If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.
   *
   * Advantages can include sharper image quality (like text) and faster rendering on canvas.
   * The main disadvantage is movement of objects may appear less smooth.
   *
   * To set the global default, change {@link PIXI.settings.ROUND_PIXELS}.
   * @default false
   */
  set roundPixels(t) {
    this._roundPixels !== t && (this._transformID = -1, this._transformTrimmedID = -1), this._roundPixels = t;
  }
  get roundPixels() {
    return this._roundPixels;
  }
  /** The width of the sprite, setting this will actually modify the scale to achieve the value set. */
  get width() {
    return Math.abs(this.scale.x) * this._texture.orig.width;
  }
  set width(t) {
    const e = Ne(this.scale.x) || 1;
    this.scale.x = e * t / this._texture.orig.width, this._width = t;
  }
  /** The height of the sprite, setting this will actually modify the scale to achieve the value set. */
  get height() {
    return Math.abs(this.scale.y) * this._texture.orig.height;
  }
  set height(t) {
    const e = Ne(this.scale.y) || 1;
    this.scale.y = e * t / this._texture.orig.height, this._height = t;
  }
  /**
   * The anchor sets the origin point of the sprite. The default value is taken from the {@link PIXI.Texture|Texture}
   * and passed to the constructor.
   *
   * The default is `(0,0)`, this means the sprite's origin is the top left.
   *
   * Setting the anchor to `(0.5,0.5)` means the sprite's origin is centered.
   *
   * Setting the anchor to `(1,1)` would mean the sprite's origin point will be the bottom right corner.
   *
   * If you pass only single parameter, it will set both x and y to the same value as shown in the example below.
   * @example
   * import { Sprite } from 'pixi.js';
   *
   * const sprite = new Sprite(Texture.WHITE);
   * sprite.anchor.set(0.5); // This will set the origin to center. (0.5) is same as (0.5, 0.5).
   */
  get anchor() {
    return this._anchor;
  }
  set anchor(t) {
    this._anchor.copyFrom(t);
  }
  /**
   * The tint applied to the sprite. This is a hex value.
   *
   * A value of 0xFFFFFF will remove any tint effect.
   * @default 0xFFFFFF
   */
  get tint() {
    return this._tintColor.value;
  }
  set tint(t) {
    this._tintColor.setValue(t), this._tintRGB = this._tintColor.toLittleEndianNumber();
  }
  /**
   * Get the tint as a RGB integer.
   * @ignore
   */
  get tintValue() {
    return this._tintColor.toNumber();
  }
  /** The texture that the sprite is using. */
  get texture() {
    return this._texture;
  }
  set texture(t) {
    this._texture !== t && (this._texture && this._texture.off("update", this._onTextureUpdate, this), this._texture = t || O.EMPTY, this._cachedTint = 16777215, this._textureID = -1, this._textureTrimmedID = -1, t && (t.baseTexture.valid ? this._onTextureUpdate() : t.once("update", this._onTextureUpdate, this)));
  }
}
const bu = new rt();
st.prototype._cacheAsBitmap = !1;
st.prototype._cacheData = null;
st.prototype._cacheAsBitmapResolution = null;
st.prototype._cacheAsBitmapMultisample = null;
class wg {
  constructor() {
    this.textureCacheId = null, this.originalRender = null, this.originalRenderCanvas = null, this.originalCalculateBounds = null, this.originalGetLocalBounds = null, this.originalUpdateTransform = null, this.originalDestroy = null, this.originalMask = null, this.originalFilterArea = null, this.originalContainsPoint = null, this.sprite = null;
  }
}
Object.defineProperties(st.prototype, {
  /**
   * The resolution to use for cacheAsBitmap. By default this will use the renderer's resolution
   * but can be overriden for performance. Lower values will reduce memory usage at the expense
   * of render quality. A falsey value of `null` or `0` will default to the renderer's resolution.
   * If `cacheAsBitmap` is set to `true`, this will re-render with the new resolution.
   * @member {number|null} cacheAsBitmapResolution
   * @memberof PIXI.DisplayObject#
   * @default null
   */
  cacheAsBitmapResolution: {
    get() {
      return this._cacheAsBitmapResolution;
    },
    set(i) {
      i !== this._cacheAsBitmapResolution && (this._cacheAsBitmapResolution = i, this.cacheAsBitmap && (this.cacheAsBitmap = !1, this.cacheAsBitmap = !0));
    }
  },
  /**
   * The number of samples to use for cacheAsBitmap. If set to `null`, the renderer's
   * sample count is used.
   * If `cacheAsBitmap` is set to `true`, this will re-render with the new number of samples.
   * @member {number|null} cacheAsBitmapMultisample
   * @memberof PIXI.DisplayObject#
   * @default null
   */
  cacheAsBitmapMultisample: {
    get() {
      return this._cacheAsBitmapMultisample;
    },
    set(i) {
      i !== this._cacheAsBitmapMultisample && (this._cacheAsBitmapMultisample = i, this.cacheAsBitmap && (this.cacheAsBitmap = !1, this.cacheAsBitmap = !0));
    }
  },
  /**
   * Set this to true if you want this display object to be cached as a bitmap.
   * This basically takes a snapshot of the display object as it is at that moment. It can
   * provide a performance benefit for complex static displayObjects.
   * To remove simply set this property to `false`
   *
   * IMPORTANT GOTCHA - Make sure that all your textures are preloaded BEFORE setting this property to true
   * as it will take a snapshot of what is currently there. If the textures have not loaded then they will not appear.
   * @member {boolean}
   * @memberof PIXI.DisplayObject#
   */
  cacheAsBitmap: {
    get() {
      return this._cacheAsBitmap;
    },
    set(i) {
      if (this._cacheAsBitmap === i)
        return;
      this._cacheAsBitmap = i;
      let t;
      i ? (this._cacheData || (this._cacheData = new wg()), t = this._cacheData, t.originalRender = this.render, t.originalRenderCanvas = this.renderCanvas, t.originalUpdateTransform = this.updateTransform, t.originalCalculateBounds = this.calculateBounds, t.originalGetLocalBounds = this.getLocalBounds, t.originalDestroy = this.destroy, t.originalContainsPoint = this.containsPoint, t.originalMask = this._mask, t.originalFilterArea = this.filterArea, this.render = this._renderCached, this.renderCanvas = this._renderCachedCanvas, this.destroy = this._cacheAsBitmapDestroy) : (t = this._cacheData, t.sprite && this._destroyCachedDisplayObject(), this.render = t.originalRender, this.renderCanvas = t.originalRenderCanvas, this.calculateBounds = t.originalCalculateBounds, this.getLocalBounds = t.originalGetLocalBounds, this.destroy = t.originalDestroy, this.updateTransform = t.originalUpdateTransform, this.containsPoint = t.originalContainsPoint, this._mask = t.originalMask, this.filterArea = t.originalFilterArea);
    }
  }
});
st.prototype._renderCached = function(i) {
  !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObject(i), this._cacheData.sprite.transform._worldID = this.transform._worldID, this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite._render(i));
};
st.prototype._initCachedDisplayObject = function(i) {
  var d, f;
  if ((d = this._cacheData) != null && d.sprite)
    return;
  const t = this.alpha;
  this.alpha = 1, i.batch.flush();
  const e = this.getLocalBounds(new j(), !0);
  if ((f = this.filters) != null && f.length) {
    const p = this.filters[0].padding;
    e.pad(p);
  }
  const r = this.cacheAsBitmapResolution || i.resolution;
  e.ceil(r), e.width = Math.max(e.width, 1 / r), e.height = Math.max(e.height, 1 / r);
  const s = i.renderTexture.current, n = i.renderTexture.sourceFrame.clone(), a = i.renderTexture.destinationFrame.clone(), o = i.projection.transform, h = lr.create({
    width: e.width,
    height: e.height,
    resolution: r,
    multisample: this.cacheAsBitmapMultisample ?? i.multisample
  }), l = `cacheAsBitmap_${or()}`;
  this._cacheData.textureCacheId = l, W.addToCache(h.baseTexture, l), O.addToCache(h, l);
  const u = this.transform.localTransform.copyTo(bu).invert().translate(-e.x, -e.y);
  this.render = this._cacheData.originalRender, i.render(this, { renderTexture: h, clear: !0, transform: u, skipUpdateTransform: !1 }), i.framebuffer.blit(), i.projection.transform = o, i.renderTexture.bind(s, n, a), this.render = this._renderCached, this.updateTransform = this.displayObjectUpdateTransform, this.calculateBounds = this._calculateCachedBounds, this.getLocalBounds = this._getCachedLocalBounds, this._mask = null, this.filterArea = null, this.alpha = t;
  const c = new de(h);
  c.transform.worldTransform = this.transform.worldTransform, c.anchor.x = -(e.x / e.width), c.anchor.y = -(e.y / e.height), c.alpha = t, c._bounds = this._bounds, this._cacheData.sprite = c, this.transform._parentID = -1, this.parent ? this.updateTransform() : (this.enableTempParent(), this.updateTransform(), this.disableTempParent(null)), this.containsPoint = c.containsPoint.bind(c);
};
st.prototype._renderCachedCanvas = function(i) {
  !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObjectCanvas(i), this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite._renderCanvas(i));
};
st.prototype._initCachedDisplayObjectCanvas = function(i) {
  var u;
  if ((u = this._cacheData) != null && u.sprite)
    return;
  const t = this.getLocalBounds(new j(), !0), e = this.alpha;
  this.alpha = 1;
  const r = i.canvasContext.activeContext, s = i._projTransform, n = this.cacheAsBitmapResolution || i.resolution;
  t.ceil(n), t.width = Math.max(t.width, 1 / n), t.height = Math.max(t.height, 1 / n);
  const a = lr.create({
    width: t.width,
    height: t.height,
    resolution: n
  }), o = `cacheAsBitmap_${or()}`;
  this._cacheData.textureCacheId = o, W.addToCache(a.baseTexture, o), O.addToCache(a, o);
  const h = bu;
  this.transform.localTransform.copyTo(h), h.invert(), h.tx -= t.x, h.ty -= t.y, this.renderCanvas = this._cacheData.originalRenderCanvas, i.render(this, { renderTexture: a, clear: !0, transform: h, skipUpdateTransform: !1 }), i.canvasContext.activeContext = r, i._projTransform = s, this.renderCanvas = this._renderCachedCanvas, this.updateTransform = this.displayObjectUpdateTransform, this.calculateBounds = this._calculateCachedBounds, this.getLocalBounds = this._getCachedLocalBounds, this._mask = null, this.filterArea = null, this.alpha = e;
  const l = new de(a);
  l.transform.worldTransform = this.transform.worldTransform, l.anchor.x = -(t.x / t.width), l.anchor.y = -(t.y / t.height), l.alpha = e, l._bounds = this._bounds, this._cacheData.sprite = l, this.transform._parentID = -1, this.parent ? this.updateTransform() : (this.parent = i._tempDisplayObjectParent, this.updateTransform(), this.parent = null), this.containsPoint = l.containsPoint.bind(l);
};
st.prototype._calculateCachedBounds = function() {
  this._bounds.clear(), this._cacheData.sprite.transform._worldID = this.transform._worldID, this._cacheData.sprite._calculateBounds(), this._bounds.updateID = this._boundsID;
};
st.prototype._getCachedLocalBounds = function() {
  return this._cacheData.sprite.getLocalBounds(null);
};
st.prototype._destroyCachedDisplayObject = function() {
  this._cacheData.sprite._texture.destroy(!0), this._cacheData.sprite = null, W.removeFromCache(this._cacheData.textureCacheId), O.removeFromCache(this._cacheData.textureCacheId), this._cacheData.textureCacheId = null;
};
st.prototype._cacheAsBitmapDestroy = function(i) {
  this.cacheAsBitmap = !1, this.destroy(i);
};
st.prototype.name = null;
Ft.prototype.getChildByName = function(i, t) {
  for (let e = 0, r = this.children.length; e < r; e++)
    if (this.children[e].name === i)
      return this.children[e];
  if (t)
    for (let e = 0, r = this.children.length; e < r; e++) {
      const s = this.children[e];
      if (!s.getChildByName)
        continue;
      const n = s.getChildByName(i, !0);
      if (n)
        return n;
    }
  return null;
};
st.prototype.getGlobalPosition = function(i = new K(), t = !1) {
  return this.parent ? this.parent.toGlobal(this.position, i, t) : (i.x = this.position.x, i.y = this.position.y), i;
};
var Ag = `varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float uAlpha;

void main(void)
{
   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;
}
`;
class Tu extends Pt {
  /**
   * @param alpha - Amount of alpha from 0 to 1, where 0 is transparent
   */
  constructor(t = 1) {
    super(pg, Ag, { uAlpha: 1 }), this.alpha = t;
  }
  /**
   * Coefficient for alpha multiplication
   * @default 1
   */
  get alpha() {
    return this.uniforms.uAlpha;
  }
  set alpha(t) {
    this.uniforms.uAlpha = t;
  }
}
const Sg = {
  5: [0.153388, 0.221461, 0.250301],
  7: [0.071303, 0.131514, 0.189879, 0.214607],
  9: [0.028532, 0.067234, 0.124009, 0.179044, 0.20236],
  11: [93e-4, 0.028002, 0.065984, 0.121703, 0.175713, 0.198596],
  13: [2406e-6, 9255e-6, 0.027867, 0.065666, 0.121117, 0.174868, 0.197641],
  15: [489e-6, 2403e-6, 9246e-6, 0.02784, 0.065602, 0.120999, 0.174697, 0.197448]
}, Cg = [
  "varying vec2 vBlurTexCoords[%size%];",
  "uniform sampler2D uSampler;",
  "void main(void)",
  "{",
  "    gl_FragColor = vec4(0.0);",
  "    %blur%",
  "}"
].join(`
`);
function Ig(i) {
  const t = Sg[i], e = t.length;
  let r = Cg, s = "";
  const n = "gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;";
  let a;
  for (let o = 0; o < i; o++) {
    let h = n.replace("%index%", o.toString());
    a = o, o >= e && (a = i - o - 1), h = h.replace("%value%", t[a].toString()), s += h, s += `
`;
  }
  return r = r.replace("%blur%", s), r = r.replace("%size%", i.toString()), r;
}
const Pg = `
    attribute vec2 aVertexPosition;

    uniform mat3 projectionMatrix;

    uniform float strength;

    varying vec2 vBlurTexCoords[%size%];

    uniform vec4 inputSize;
    uniform vec4 outputFrame;

    vec4 filterVertexPosition( void )
    {
        vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

        return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
    }

    vec2 filterTextureCoord( void )
    {
        return aVertexPosition * (outputFrame.zw * inputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;
function Rg(i, t) {
  const e = Math.ceil(i / 2);
  let r = Pg, s = "", n;
  t ? n = "vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);" : n = "vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);";
  for (let a = 0; a < i; a++) {
    let o = n.replace("%index%", a.toString());
    o = o.replace("%sampleIndex%", `${a - (e - 1)}.0`), s += o, s += `
`;
  }
  return r = r.replace("%blur%", s), r = r.replace("%size%", i.toString()), r;
}
class ga extends Pt {
  /**
   * @param horizontal - Do pass along the x-axis (`true`) or y-axis (`false`).
   * @param strength - The strength of the blur filter.
   * @param quality - The quality of the blur filter.
   * @param {number|null} [resolution=PIXI.Filter.defaultResolution] - The resolution of the blur filter.
   * @param kernelSize - The kernelSize of the blur filter.Options: 5, 7, 9, 11, 13, 15.
   */
  constructor(t, e = 8, r = 4, s = Pt.defaultResolution, n = 5) {
    const a = Rg(n, t), o = Ig(n);
    super(
      // vertex shader
      a,
      // fragment shader
      o
    ), this.horizontal = t, this.resolution = s, this._quality = 0, this.quality = r, this.blur = e;
  }
  /**
   * Applies the filter.
   * @param filterManager - The manager.
   * @param input - The input target.
   * @param output - The output target.
   * @param clearMode - How to clear
   */
  apply(t, e, r, s) {
    if (r ? this.horizontal ? this.uniforms.strength = 1 / r.width * (r.width / e.width) : this.uniforms.strength = 1 / r.height * (r.height / e.height) : this.horizontal ? this.uniforms.strength = 1 / t.renderer.width * (t.renderer.width / e.width) : this.uniforms.strength = 1 / t.renderer.height * (t.renderer.height / e.height), this.uniforms.strength *= this.strength, this.uniforms.strength /= this.passes, this.passes === 1)
      t.applyFilter(this, e, r, s);
    else {
      const n = t.getFilterTexture(), a = t.renderer;
      let o = e, h = n;
      this.state.blend = !1, t.applyFilter(this, o, h, ne.CLEAR);
      for (let l = 1; l < this.passes - 1; l++) {
        t.bindAndClear(o, ne.BLIT), this.uniforms.uSampler = h;
        const u = h;
        h = o, o = u, a.shader.bind(this), a.geometry.draw(5);
      }
      this.state.blend = !0, t.applyFilter(this, h, r, s), t.returnFilterTexture(n);
    }
  }
  /**
   * Sets the strength of both the blur.
   * @default 16
   */
  get blur() {
    return this.strength;
  }
  set blur(t) {
    this.padding = 1 + Math.abs(t) * 2, this.strength = t;
  }
  /**
   * Sets the quality of the blur by modifying the number of passes. More passes means higher
   * quality bluring but the lower the performance.
   * @default 4
   */
  get quality() {
    return this._quality;
  }
  set quality(t) {
    this._quality = t, this.passes = t;
  }
}
class Eu extends Pt {
  /**
   * @param strength - The strength of the blur filter.
   * @param quality - The quality of the blur filter.
   * @param {number|null} [resolution=PIXI.Filter.defaultResolution] - The resolution of the blur filter.
   * @param kernelSize - The kernelSize of the blur filter.Options: 5, 7, 9, 11, 13, 15.
   */
  constructor(t = 8, e = 4, r = Pt.defaultResolution, s = 5) {
    super(), this._repeatEdgePixels = !1, this.blurXFilter = new ga(!0, t, e, r, s), this.blurYFilter = new ga(!1, t, e, r, s), this.resolution = r, this.quality = e, this.blur = t, this.repeatEdgePixels = !1;
  }
  /**
   * Applies the filter.
   * @param filterManager - The manager.
   * @param input - The input target.
   * @param output - The output target.
   * @param clearMode - How to clear
   */
  apply(t, e, r, s) {
    const n = Math.abs(this.blurXFilter.strength), a = Math.abs(this.blurYFilter.strength);
    if (n && a) {
      const o = t.getFilterTexture();
      this.blurXFilter.apply(t, e, o, ne.CLEAR), this.blurYFilter.apply(t, o, r, s), t.returnFilterTexture(o);
    } else
      a ? this.blurYFilter.apply(t, e, r, s) : this.blurXFilter.apply(t, e, r, s);
  }
  updatePadding() {
    this._repeatEdgePixels ? this.padding = 0 : this.padding = Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength)) * 2;
  }
  /**
   * Sets the strength of both the blurX and blurY properties simultaneously
   * @default 2
   */
  get blur() {
    return this.blurXFilter.blur;
  }
  set blur(t) {
    this.blurXFilter.blur = this.blurYFilter.blur = t, this.updatePadding();
  }
  /**
   * Sets the number of passes for blur. More passes means higher quality bluring.
   * @default 1
   */
  get quality() {
    return this.blurXFilter.quality;
  }
  set quality(t) {
    this.blurXFilter.quality = this.blurYFilter.quality = t;
  }
  /**
   * Sets the strength of the blurX property
   * @default 2
   */
  get blurX() {
    return this.blurXFilter.blur;
  }
  set blurX(t) {
    this.blurXFilter.blur = t, this.updatePadding();
  }
  /**
   * Sets the strength of the blurY property
   * @default 2
   */
  get blurY() {
    return this.blurYFilter.blur;
  }
  set blurY(t) {
    this.blurYFilter.blur = t, this.updatePadding();
  }
  /**
   * Sets the blendmode of the filter
   * @default PIXI.BLEND_MODES.NORMAL
   */
  get blendMode() {
    return this.blurYFilter.blendMode;
  }
  set blendMode(t) {
    this.blurYFilter.blendMode = t;
  }
  /**
   * If set to true the edge of the target will be clamped
   * @default false
   */
  get repeatEdgePixels() {
    return this._repeatEdgePixels;
  }
  set repeatEdgePixels(t) {
    this._repeatEdgePixels = t, this.updatePadding();
  }
}
var Mg = `varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float m[20];
uniform float uAlpha;

void main(void)
{
    vec4 c = texture2D(uSampler, vTextureCoord);

    if (uAlpha == 0.0) {
        gl_FragColor = c;
        return;
    }

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (c.a > 0.0) {
      c.rgb /= c.a;
    }

    vec4 result;

    result.r = (m[0] * c.r);
        result.r += (m[1] * c.g);
        result.r += (m[2] * c.b);
        result.r += (m[3] * c.a);
        result.r += m[4];

    result.g = (m[5] * c.r);
        result.g += (m[6] * c.g);
        result.g += (m[7] * c.b);
        result.g += (m[8] * c.a);
        result.g += m[9];

    result.b = (m[10] * c.r);
       result.b += (m[11] * c.g);
       result.b += (m[12] * c.b);
       result.b += (m[13] * c.a);
       result.b += m[14];

    result.a = (m[15] * c.r);
       result.a += (m[16] * c.g);
       result.a += (m[17] * c.b);
       result.a += (m[18] * c.a);
       result.a += m[19];

    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);

    // Premultiply alpha again.
    rgb *= result.a;

    gl_FragColor = vec4(rgb, result.a);
}
`;
class bs extends Pt {
  constructor() {
    const t = {
      m: new Float32Array([
        1,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        1,
        0
      ]),
      uAlpha: 1
    };
    super(fu, Mg, t), this.alpha = 1;
  }
  /**
   * Transforms current matrix and set the new one
   * @param {number[]} matrix - 5x4 matrix
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  _loadMatrix(t, e = !1) {
    let r = t;
    e && (this._multiply(r, this.uniforms.m, t), r = this._colorMatrix(r)), this.uniforms.m = r;
  }
  /**
   * Multiplies two mat5's
   * @private
   * @param out - 5x4 matrix the receiving matrix
   * @param a - 5x4 matrix the first operand
   * @param b - 5x4 matrix the second operand
   * @returns {number[]} 5x4 matrix
   */
  _multiply(t, e, r) {
    return t[0] = e[0] * r[0] + e[1] * r[5] + e[2] * r[10] + e[3] * r[15], t[1] = e[0] * r[1] + e[1] * r[6] + e[2] * r[11] + e[3] * r[16], t[2] = e[0] * r[2] + e[1] * r[7] + e[2] * r[12] + e[3] * r[17], t[3] = e[0] * r[3] + e[1] * r[8] + e[2] * r[13] + e[3] * r[18], t[4] = e[0] * r[4] + e[1] * r[9] + e[2] * r[14] + e[3] * r[19] + e[4], t[5] = e[5] * r[0] + e[6] * r[5] + e[7] * r[10] + e[8] * r[15], t[6] = e[5] * r[1] + e[6] * r[6] + e[7] * r[11] + e[8] * r[16], t[7] = e[5] * r[2] + e[6] * r[7] + e[7] * r[12] + e[8] * r[17], t[8] = e[5] * r[3] + e[6] * r[8] + e[7] * r[13] + e[8] * r[18], t[9] = e[5] * r[4] + e[6] * r[9] + e[7] * r[14] + e[8] * r[19] + e[9], t[10] = e[10] * r[0] + e[11] * r[5] + e[12] * r[10] + e[13] * r[15], t[11] = e[10] * r[1] + e[11] * r[6] + e[12] * r[11] + e[13] * r[16], t[12] = e[10] * r[2] + e[11] * r[7] + e[12] * r[12] + e[13] * r[17], t[13] = e[10] * r[3] + e[11] * r[8] + e[12] * r[13] + e[13] * r[18], t[14] = e[10] * r[4] + e[11] * r[9] + e[12] * r[14] + e[13] * r[19] + e[14], t[15] = e[15] * r[0] + e[16] * r[5] + e[17] * r[10] + e[18] * r[15], t[16] = e[15] * r[1] + e[16] * r[6] + e[17] * r[11] + e[18] * r[16], t[17] = e[15] * r[2] + e[16] * r[7] + e[17] * r[12] + e[18] * r[17], t[18] = e[15] * r[3] + e[16] * r[8] + e[17] * r[13] + e[18] * r[18], t[19] = e[15] * r[4] + e[16] * r[9] + e[17] * r[14] + e[18] * r[19] + e[19], t;
  }
  /**
   * Create a Float32 Array and normalize the offset component to 0-1
   * @param {number[]} matrix - 5x4 matrix
   * @returns {number[]} 5x4 matrix with all values between 0-1
   */
  _colorMatrix(t) {
    const e = new Float32Array(t);
    return e[4] /= 255, e[9] /= 255, e[14] /= 255, e[19] /= 255, e;
  }
  /**
   * Adjusts brightness
   * @param b - value of the brigthness (0-1, where 0 is black)
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  brightness(t, e) {
    const r = [
      t,
      0,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(r, e);
  }
  /**
   * Sets each channel on the diagonal of the color matrix.
   * This can be used to achieve a tinting effect on Containers similar to the tint field of some
   * display objects like Sprite, Text, Graphics, and Mesh.
   * @param color - Color of the tint. This is a hex value.
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  tint(t, e) {
    const [r, s, n] = tt.shared.setValue(t).toArray(), a = [
      r,
      0,
      0,
      0,
      0,
      0,
      s,
      0,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(a, e);
  }
  /**
   * Set the matrices in grey scales
   * @param scale - value of the grey (0-1, where 0 is black)
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  greyscale(t, e) {
    const r = [
      t,
      t,
      t,
      0,
      0,
      t,
      t,
      t,
      0,
      0,
      t,
      t,
      t,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(r, e);
  }
  /**
   * Set the black and white matrice.
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  blackAndWhite(t) {
    const e = [
      0.3,
      0.6,
      0.1,
      0,
      0,
      0.3,
      0.6,
      0.1,
      0,
      0,
      0.3,
      0.6,
      0.1,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(e, t);
  }
  /**
   * Set the hue property of the color
   * @param rotation - in degrees
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  hue(t, e) {
    t = (t || 0) / 180 * Math.PI;
    const r = Math.cos(t), s = Math.sin(t), n = Math.sqrt, a = 1 / 3, o = n(a), h = r + (1 - r) * a, l = a * (1 - r) - o * s, u = a * (1 - r) + o * s, c = a * (1 - r) + o * s, d = r + a * (1 - r), f = a * (1 - r) - o * s, p = a * (1 - r) - o * s, m = a * (1 - r) + o * s, y = r + a * (1 - r), v = [
      h,
      l,
      u,
      0,
      0,
      c,
      d,
      f,
      0,
      0,
      p,
      m,
      y,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(v, e);
  }
  /**
   * Set the contrast matrix, increase the separation between dark and bright
   * Increase contrast : shadows darker and highlights brighter
   * Decrease contrast : bring the shadows up and the highlights down
   * @param amount - value of the contrast (0-1)
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  contrast(t, e) {
    const r = (t || 0) + 1, s = -0.5 * (r - 1), n = [
      r,
      0,
      0,
      0,
      s,
      0,
      r,
      0,
      0,
      s,
      0,
      0,
      r,
      0,
      s,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(n, e);
  }
  /**
   * Set the saturation matrix, increase the separation between colors
   * Increase saturation : increase contrast, brightness, and sharpness
   * @param amount - The saturation amount (0-1)
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  saturate(t = 0, e) {
    const r = t * 2 / 3 + 1, s = (r - 1) * -0.5, n = [
      r,
      s,
      s,
      0,
      0,
      s,
      r,
      s,
      0,
      0,
      s,
      s,
      r,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(n, e);
  }
  /** Desaturate image (remove color) Call the saturate function */
  desaturate() {
    this.saturate(-1);
  }
  /**
   * Negative image (inverse of classic rgb matrix)
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  negative(t) {
    const e = [
      -1,
      0,
      0,
      1,
      0,
      0,
      -1,
      0,
      1,
      0,
      0,
      0,
      -1,
      1,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(e, t);
  }
  /**
   * Sepia image
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  sepia(t) {
    const e = [
      0.393,
      0.7689999,
      0.18899999,
      0,
      0,
      0.349,
      0.6859999,
      0.16799999,
      0,
      0,
      0.272,
      0.5339999,
      0.13099999,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(e, t);
  }
  /**
   * Color motion picture process invented in 1916 (thanks Dominic Szablewski)
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  technicolor(t) {
    const e = [
      1.9125277891456083,
      -0.8545344976951645,
      -0.09155508482755585,
      0,
      11.793603434377337,
      -0.3087833385928097,
      1.7658908555458428,
      -0.10601743074722245,
      0,
      -70.35205161461398,
      -0.231103377548616,
      -0.7501899197440212,
      1.847597816108189,
      0,
      30.950940869491138,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(e, t);
  }
  /**
   * Polaroid filter
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  polaroid(t) {
    const e = [
      1.438,
      -0.062,
      -0.062,
      0,
      0,
      -0.122,
      1.378,
      -0.122,
      0,
      0,
      -0.016,
      -0.016,
      1.483,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(e, t);
  }
  /**
   * Filter who transforms : Red -> Blue and Blue -> Red
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  toBGR(t) {
    const e = [
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(e, t);
  }
  /**
   * Color reversal film introduced by Eastman Kodak in 1935. (thanks Dominic Szablewski)
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  kodachrome(t) {
    const e = [
      1.1285582396593525,
      -0.3967382283601348,
      -0.03992559172921793,
      0,
      63.72958762196502,
      -0.16404339962244616,
      1.0835251566291304,
      -0.05498805115633132,
      0,
      24.732407896706203,
      -0.16786010706155763,
      -0.5603416277695248,
      1.6014850761964943,
      0,
      35.62982807460946,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(e, t);
  }
  /**
   * Brown delicious browni filter (thanks Dominic Szablewski)
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  browni(t) {
    const e = [
      0.5997023498159715,
      0.34553243048391263,
      -0.2708298674538042,
      0,
      47.43192855600873,
      -0.037703249837783157,
      0.8609577587992641,
      0.15059552388459913,
      0,
      -36.96841498319127,
      0.24113635128153335,
      -0.07441037908422492,
      0.44972182064877153,
      0,
      -7.562075277591283,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(e, t);
  }
  /**
   * Vintage filter (thanks Dominic Szablewski)
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  vintage(t) {
    const e = [
      0.6279345635605994,
      0.3202183420819367,
      -0.03965408211312453,
      0,
      9.651285835294123,
      0.02578397704808868,
      0.6441188644374771,
      0.03259127616149294,
      0,
      7.462829176470591,
      0.0466055556782719,
      -0.0851232987247891,
      0.5241648018700465,
      0,
      5.159190588235296,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(e, t);
  }
  /**
   * We don't know exactly what it does, kind of gradient map, but funny to play with!
   * @param desaturation - Tone values.
   * @param toned - Tone values.
   * @param lightColor - Tone values, example: `0xFFE580`
   * @param darkColor - Tone values, example: `0xFFE580`
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  colorTone(t, e, r, s, n) {
    t = t || 0.2, e = e || 0.15, r = r || 16770432, s = s || 3375104;
    const a = tt.shared, [o, h, l] = a.setValue(r).toArray(), [u, c, d] = a.setValue(s).toArray(), f = [
      0.3,
      0.59,
      0.11,
      0,
      0,
      o,
      h,
      l,
      t,
      0,
      u,
      c,
      d,
      e,
      0,
      o - u,
      h - c,
      l - d,
      0,
      0
    ];
    this._loadMatrix(f, n);
  }
  /**
   * Night effect
   * @param intensity - The intensity of the night effect.
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  night(t, e) {
    t = t || 0.1;
    const r = [
      t * -2,
      -t,
      0,
      0,
      0,
      -t,
      0,
      t,
      0,
      0,
      0,
      t,
      t * 2,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(r, e);
  }
  /**
   * Predator effect
   *
   * Erase the current matrix by setting a new indepent one
   * @param amount - how much the predator feels his future victim
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  predator(t, e) {
    const r = [
      // row 1
      11.224130630493164 * t,
      -4.794486999511719 * t,
      -2.8746118545532227 * t,
      0 * t,
      0.40342438220977783 * t,
      // row 2
      -3.6330697536468506 * t,
      9.193157196044922 * t,
      -2.951810836791992 * t,
      0 * t,
      -1.316135048866272 * t,
      // row 3
      -3.2184197902679443 * t,
      -4.2375030517578125 * t,
      7.476448059082031 * t,
      0 * t,
      0.8044459223747253 * t,
      // row 4
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(r, e);
  }
  /**
   * LSD effect
   *
   * Multiply the current matrix
   * @param multiply - if true, current matrix and matrix are multiplied. If false,
   *  just set the current matrix with @param matrix
   */
  lsd(t) {
    const e = [
      2,
      -0.4,
      0.5,
      0,
      0,
      -0.5,
      2,
      -0.4,
      0,
      0,
      -0.4,
      -0.5,
      3,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(e, t);
  }
  /** Erase the current matrix by setting the default one. */
  reset() {
    const t = [
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ];
    this._loadMatrix(t, !1);
  }
  /**
   * The matrix of the color matrix filter
   * @member {number[]}
   * @default [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]
   */
  get matrix() {
    return this.uniforms.m;
  }
  set matrix(t) {
    this.uniforms.m = t;
  }
  /**
   * The opacity value to use when mixing the original and resultant colors.
   *
   * When the value is 0, the original color is used without modification.
   * When the value is 1, the result color is used.
   * When in the range (0, 1) the color is interpolated between the original and result by this amount.
   * @default 1
   */
  get alpha() {
    return this.uniforms.uAlpha;
  }
  set alpha(t) {
    this.uniforms.uAlpha = t;
  }
}
bs.prototype.grayscale = bs.prototype.greyscale;
var Bg = `varying vec2 vFilterCoord;
varying vec2 vTextureCoord;

uniform vec2 scale;
uniform mat2 rotation;
uniform sampler2D uSampler;
uniform sampler2D mapSampler;

uniform highp vec4 inputSize;
uniform vec4 inputClamp;

void main(void)
{
  vec4 map =  texture2D(mapSampler, vFilterCoord);

  map -= 0.5;
  map.xy = scale * inputSize.zw * (rotation * map.xy);

  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), inputClamp.xy, inputClamp.zw));
}
`, Dg = `attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;
uniform mat3 filterMatrix;

varying vec2 vTextureCoord;
varying vec2 vFilterCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
	gl_Position = filterVertexPosition();
	vTextureCoord = filterTextureCoord();
	vFilterCoord = ( filterMatrix * vec3( vTextureCoord, 1.0)  ).xy;
}
`;
class wu extends Pt {
  /**
   * @param {PIXI.Sprite} sprite - The sprite used for the displacement map. (make sure its added to the scene!)
   * @param scale - The scale of the displacement
   */
  constructor(t, e) {
    const r = new rt();
    t.renderable = !1, super(Dg, Bg, {
      mapSampler: t._texture,
      filterMatrix: r,
      scale: { x: 1, y: 1 },
      rotation: new Float32Array([1, 0, 0, 1])
    }), this.maskSprite = t, this.maskMatrix = r, e == null && (e = 20), this.scale = new K(e, e);
  }
  /**
   * Applies the filter.
   * @param filterManager - The manager.
   * @param input - The input target.
   * @param output - The output target.
   * @param clearMode - clearMode.
   */
  apply(t, e, r, s) {
    this.uniforms.filterMatrix = t.calculateSpriteMatrix(this.maskMatrix, this.maskSprite), this.uniforms.scale.x = this.scale.x, this.uniforms.scale.y = this.scale.y;
    const n = this.maskSprite.worldTransform, a = Math.sqrt(n.a * n.a + n.b * n.b), o = Math.sqrt(n.c * n.c + n.d * n.d);
    a !== 0 && o !== 0 && (this.uniforms.rotation[0] = n.a / a, this.uniforms.rotation[1] = n.b / a, this.uniforms.rotation[2] = n.c / o, this.uniforms.rotation[3] = n.d / o), t.applyFilter(this, e, r, s);
  }
  /** The texture used for the displacement map. Must be power of 2 sized texture. */
  get map() {
    return this.uniforms.mapSampler;
  }
  set map(t) {
    this.uniforms.mapSampler = t;
  }
}
var Fg = `varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;
uniform sampler2D uSampler;
uniform highp vec4 inputSize;


/**
 Basic FXAA implementation based on the code on geeks3d.com with the
 modification that the texture2DLod stuff was removed since it's
 unsupported by WebGL.

 --

 From:
 https://github.com/mitsuhiko/webgl-meincraft

 Copyright (c) 2011 by Armin Ronacher.

 Some rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are
 met:

 * Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.

 * Redistributions in binary form must reproduce the above
 copyright notice, this list of conditions and the following
 disclaimer in the documentation and/or other materials provided
 with the distribution.

 * The names of the contributors may not be used to endorse or
 promote products derived from this software without specific
 prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

#ifndef FXAA_REDUCE_MIN
#define FXAA_REDUCE_MIN   (1.0/ 128.0)
#endif
#ifndef FXAA_REDUCE_MUL
#define FXAA_REDUCE_MUL   (1.0 / 8.0)
#endif
#ifndef FXAA_SPAN_MAX
#define FXAA_SPAN_MAX     8.0
#endif

//optimized version for mobile, where dependent
//texture reads can be a bottleneck
vec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 inverseVP,
          vec2 v_rgbNW, vec2 v_rgbNE,
          vec2 v_rgbSW, vec2 v_rgbSE,
          vec2 v_rgbM) {
    vec4 color;
    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;
    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;
    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;
    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;
    vec4 texColor = texture2D(tex, v_rgbM);
    vec3 rgbM  = texColor.xyz;
    vec3 luma = vec3(0.299, 0.587, 0.114);
    float lumaNW = dot(rgbNW, luma);
    float lumaNE = dot(rgbNE, luma);
    float lumaSW = dot(rgbSW, luma);
    float lumaSE = dot(rgbSE, luma);
    float lumaM  = dot(rgbM,  luma);
    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));
    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));

    mediump vec2 dir;
    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));

    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *
                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);

    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);
    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),
              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
                  dir * rcpDirMin)) * inverseVP;

    vec3 rgbA = 0.5 * (
                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +
                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);
    vec3 rgbB = rgbA * 0.5 + 0.25 * (
                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +
                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);

    float lumaB = dot(rgbB, luma);
    if ((lumaB < lumaMin) || (lumaB > lumaMax))
        color = vec4(rgbA, texColor.a);
    else
        color = vec4(rgbB, texColor.a);
    return color;
}

void main() {

      vec4 color;

      color = fxaa(uSampler, vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);

      gl_FragColor = color;
}
`, Og = `
attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

void texcoords(vec2 fragCoord, vec2 inverseVP,
               out vec2 v_rgbNW, out vec2 v_rgbNE,
               out vec2 v_rgbSW, out vec2 v_rgbSE,
               out vec2 v_rgbM) {
    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;
    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;
    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;
    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;
    v_rgbM = vec2(fragCoord * inverseVP);
}

void main(void) {

   gl_Position = filterVertexPosition();

   vFragCoord = aVertexPosition * outputFrame.zw;

   texcoords(vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);
}
`;
class Au extends Pt {
  constructor() {
    super(Og, Fg);
  }
}
var Ng = `precision highp float;

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform float uNoise;
uniform float uSeed;
uniform sampler2D uSampler;

float rand(vec2 co)
{
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main()
{
    vec4 color = texture2D(uSampler, vTextureCoord);
    float randomValue = rand(gl_FragCoord.xy * uSeed);
    float diff = (randomValue - 0.5) * uNoise;

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (color.a > 0.0) {
        color.rgb /= color.a;
    }

    color.r += diff;
    color.g += diff;
    color.b += diff;

    // Premultiply alpha again.
    color.rgb *= color.a;

    gl_FragColor = color;
}
`;
class Su extends Pt {
  /**
   * @param {number} [noise=0.5] - The noise intensity, should be a normalized value in the range [0, 1].
   * @param {number} [seed] - A random seed for the noise generation. Default is `Math.random()`.
   */
  constructor(t = 0.5, e = Math.random()) {
    super(fu, Ng, {
      uNoise: 0,
      uSeed: 0
    }), this.noise = t, this.seed = e;
  }
  /**
   * The amount of noise to apply, this value should be in the range (0, 1].
   * @default 0.5
   */
  get noise() {
    return this.uniforms.uNoise;
  }
  set noise(t) {
    this.uniforms.uNoise = t;
  }
  /** A seed value to apply to the random noise generation. `Math.random()` is a good value to use. */
  get seed() {
    return this.uniforms.uSeed;
  }
  set seed(t) {
    this.uniforms.uSeed = t;
  }
}
const bh = {
  /**
   * @class
   * @memberof PIXI.filters
   * @deprecated since 7.1.0
   * @see PIXI.AlphaFilter
   */
  AlphaFilter: Tu,
  /**
   * @class
   * @memberof PIXI.filters
   * @deprecated since 7.1.0
   * @see PIXI.BlurFilter
   */
  BlurFilter: Eu,
  /**
   * @class
   * @memberof PIXI.filters
   * @deprecated since 7.1.0
   * @see PIXI.BlurFilterPass
   */
  BlurFilterPass: ga,
  /**
   * @class
   * @memberof PIXI.filters
   * @deprecated since 7.1.0
   * @see PIXI.ColorMatrixFilter
   */
  ColorMatrixFilter: bs,
  /**
   * @class
   * @memberof PIXI.filters
   * @deprecated since 7.1.0
   * @see PIXI.DisplacementFilter
   */
  DisplacementFilter: wu,
  /**
   * @class
   * @memberof PIXI.filters
   * @deprecated since 7.1.0
   * @see PIXI.FXAAFilter
   */
  FXAAFilter: Au,
  /**
   * @class
   * @memberof PIXI.filters
   * @deprecated since 7.1.0
   * @see PIXI.NoiseFilter
   */
  NoiseFilter: Su
};
Object.entries(bh).forEach(([i, t]) => {
  Object.defineProperty(bh, i, {
    get() {
      return Y("7.1.0", `filters.${i} has moved to ${i}`), t;
    }
  });
});
class Lg {
  constructor() {
    this.interactionFrequency = 10, this._deltaTime = 0, this._didMove = !1, this.tickerAdded = !1, this._pauseUpdate = !0;
  }
  /**
   * Initializes the event ticker.
   * @param events - The event system.
   */
  init(t) {
    this.removeTickerListener(), this.events = t, this.interactionFrequency = 10, this._deltaTime = 0, this._didMove = !1, this.tickerAdded = !1, this._pauseUpdate = !0;
  }
  /** Whether to pause the update checks or not. */
  get pauseUpdate() {
    return this._pauseUpdate;
  }
  set pauseUpdate(t) {
    this._pauseUpdate = t;
  }
  /** Adds the ticker listener. */
  addTickerListener() {
    this.tickerAdded || !this.domElement || (ot.system.add(this.tickerUpdate, this, Ge.INTERACTION), this.tickerAdded = !0);
  }
  /** Removes the ticker listener. */
  removeTickerListener() {
    this.tickerAdded && (ot.system.remove(this.tickerUpdate, this), this.tickerAdded = !1);
  }
  /** Sets flag to not fire extra events when the user has already moved there mouse */
  pointerMoved() {
    this._didMove = !0;
  }
  /** Updates the state of interactive objects. */
  update() {
    if (!this.domElement || this._pauseUpdate)
      return;
    if (this._didMove) {
      this._didMove = !1;
      return;
    }
    const t = this.events.rootPointerEvent;
    this.events.supportsTouchEvents && t.pointerType === "touch" || globalThis.document.dispatchEvent(new PointerEvent("pointermove", {
      clientX: t.clientX,
      clientY: t.clientY
    }));
  }
  /**
   * Updates the state of interactive objects if at least {@link PIXI.EventsTicker#interactionFrequency}
   * milliseconds have passed since the last invocation.
   *
   * Invoked by a throttled ticker update from {@link PIXI.Ticker.system}.
   * @param deltaTime - time delta since the last call
   */
  tickerUpdate(t) {
    this._deltaTime += t, !(this._deltaTime < this.interactionFrequency) && (this._deltaTime = 0, this.update());
  }
}
const Fe = new Lg();
class vi {
  /**
   * @param manager - The event boundary which manages this event. Propagation can only occur
   *  within the boundary's jurisdiction.
   */
  constructor(t) {
    this.bubbles = !0, this.cancelBubble = !0, this.cancelable = !1, this.composed = !1, this.defaultPrevented = !1, this.eventPhase = vi.prototype.NONE, this.propagationStopped = !1, this.propagationImmediatelyStopped = !1, this.layer = new K(), this.page = new K(), this.NONE = 0, this.CAPTURING_PHASE = 1, this.AT_TARGET = 2, this.BUBBLING_PHASE = 3, this.manager = t;
  }
  /** @readonly */
  get layerX() {
    return this.layer.x;
  }
  /** @readonly */
  get layerY() {
    return this.layer.y;
  }
  /** @readonly */
  get pageX() {
    return this.page.x;
  }
  /** @readonly */
  get pageY() {
    return this.page.y;
  }
  /**
   * Fallback for the deprecated @code{PIXI.InteractionEvent.data}.
   * @deprecated since 7.0.0
   */
  get data() {
    return this;
  }
  /** The propagation path for this event. Alias for {@link PIXI.EventBoundary.propagationPath}. */
  composedPath() {
    return this.manager && (!this.path || this.path[this.path.length - 1] !== this.target) && (this.path = this.target ? this.manager.propagationPath(this.target) : []), this.path;
  }
  /**
   * Unimplemented method included for implementing the DOM interface {@code Event}. It will throw an {@code Error}.
   * @deprecated
   * @param _type
   * @param _bubbles
   * @param _cancelable
   */
  initEvent(t, e, r) {
    throw new Error("initEvent() is a legacy DOM API. It is not implemented in the Federated Events API.");
  }
  /**
   * Unimplemented method included for implementing the DOM interface {@code UIEvent}. It will throw an {@code Error}.
   * @deprecated
   * @param _typeArg
   * @param _bubblesArg
   * @param _cancelableArg
   * @param _viewArg
   * @param _detailArg
   */
  initUIEvent(t, e, r, s, n) {
    throw new Error("initUIEvent() is a legacy DOM API. It is not implemented in the Federated Events API.");
  }
  /** Prevent default behavior of PixiJS and the user agent. */
  preventDefault() {
    this.nativeEvent instanceof Event && this.nativeEvent.cancelable && this.nativeEvent.preventDefault(), this.defaultPrevented = !0;
  }
  /**
   * Stop this event from propagating to any addition listeners, including on the
   * {@link PIXI.FederatedEventTarget.currentTarget currentTarget} and also the following
   * event targets on the propagation path.
   */
  stopImmediatePropagation() {
    this.propagationImmediatelyStopped = !0;
  }
  /**
   * Stop this event from propagating to the next {@link PIXI.FederatedEventTarget}. The rest of the listeners
   * on the {@link PIXI.FederatedEventTarget.currentTarget currentTarget} will still be notified.
   */
  stopPropagation() {
    this.propagationStopped = !0;
  }
}
class Ts extends vi {
  constructor() {
    super(...arguments), this.client = new K(), this.movement = new K(), this.offset = new K(), this.global = new K(), this.screen = new K();
  }
  /** @readonly */
  get clientX() {
    return this.client.x;
  }
  /** @readonly */
  get clientY() {
    return this.client.y;
  }
  /**
   * Alias for {@link PIXI.FederatedMouseEvent.clientX this.clientX}.
   * @readonly
   */
  get x() {
    return this.clientX;
  }
  /**
   * Alias for {@link PIXI.FederatedMouseEvent.clientY this.clientY}.
   * @readonly
   */
  get y() {
    return this.clientY;
  }
  /** @readonly */
  get movementX() {
    return this.movement.x;
  }
  /** @readonly */
  get movementY() {
    return this.movement.y;
  }
  /** @readonly */
  get offsetX() {
    return this.offset.x;
  }
  /** @readonly */
  get offsetY() {
    return this.offset.y;
  }
  /** @readonly */
  get globalX() {
    return this.global.x;
  }
  /** @readonly */
  get globalY() {
    return this.global.y;
  }
  /**
   * The pointer coordinates in the renderer's screen. Alias for {@code screen.x}.
   * @readonly
   */
  get screenX() {
    return this.screen.x;
  }
  /**
   * The pointer coordinates in the renderer's screen. Alias for {@code screen.y}.
   * @readonly
   */
  get screenY() {
    return this.screen.y;
  }
  /**
   * This will return the local coordinates of the specified displayObject for this InteractionData
   * @param {PIXI.DisplayObject} displayObject - The DisplayObject that you would like the local
   *  coords off
   * @param {PIXI.IPointData} point - A Point object in which to store the value, optional (otherwise
   *  will create a new point)
   * @param {PIXI.IPointData} globalPos - A Point object containing your custom global coords, optional
   *  (otherwise will use the current global coords)
   * @returns - A point containing the coordinates of the InteractionData position relative
   *  to the DisplayObject
   */
  getLocalPosition(t, e, r) {
    return t.worldTransform.applyInverse(r || this.global, e);
  }
  /**
   * Whether the modifier key was pressed when this event natively occurred.
   * @param key - The modifier key.
   */
  getModifierState(t) {
    return "getModifierState" in this.nativeEvent && this.nativeEvent.getModifierState(t);
  }
  /**
   * Not supported.
   * @param _typeArg
   * @param _canBubbleArg
   * @param _cancelableArg
   * @param _viewArg
   * @param _detailArg
   * @param _screenXArg
   * @param _screenYArg
   * @param _clientXArg
   * @param _clientYArg
   * @param _ctrlKeyArg
   * @param _altKeyArg
   * @param _shiftKeyArg
   * @param _metaKeyArg
   * @param _buttonArg
   * @param _relatedTargetArg
   * @deprecated since 7.0.0
   */
  // eslint-disable-next-line max-params
  initMouseEvent(t, e, r, s, n, a, o, h, l, u, c, d, f, p, m) {
    throw new Error("Method not implemented.");
  }
}
class Vt extends Ts {
  constructor() {
    super(...arguments), this.width = 0, this.height = 0, this.isPrimary = !1;
  }
  // Only included for completeness for now
  getCoalescedEvents() {
    return this.type === "pointermove" || this.type === "mousemove" || this.type === "touchmove" ? [this] : [];
  }
  // Only included for completeness for now
  getPredictedEvents() {
    throw new Error("getPredictedEvents is not supported!");
  }
}
class Mr extends Ts {
  constructor() {
    super(...arguments), this.DOM_DELTA_PIXEL = 0, this.DOM_DELTA_LINE = 1, this.DOM_DELTA_PAGE = 2;
  }
}
Mr.DOM_DELTA_PIXEL = 0, /** Units specified in lines. */
Mr.DOM_DELTA_LINE = 1, /** Units specified in pages. */
Mr.DOM_DELTA_PAGE = 2;
const Ug = 2048, kg = new K(), Tn = new K();
class Gg {
  /**
   * @param rootTarget - The holder of the event boundary.
   */
  constructor(t) {
    this.dispatch = new gi(), this.moveOnAll = !1, this.enableGlobalMoveEvents = !0, this.mappingState = {
      trackingData: {}
    }, this.eventPool = /* @__PURE__ */ new Map(), this._allInteractiveElements = [], this._hitElements = [], this._isPointerMoveEvent = !1, this.rootTarget = t, this.hitPruneFn = this.hitPruneFn.bind(this), this.hitTestFn = this.hitTestFn.bind(this), this.mapPointerDown = this.mapPointerDown.bind(this), this.mapPointerMove = this.mapPointerMove.bind(this), this.mapPointerOut = this.mapPointerOut.bind(this), this.mapPointerOver = this.mapPointerOver.bind(this), this.mapPointerUp = this.mapPointerUp.bind(this), this.mapPointerUpOutside = this.mapPointerUpOutside.bind(this), this.mapWheel = this.mapWheel.bind(this), this.mappingTable = {}, this.addEventMapping("pointerdown", this.mapPointerDown), this.addEventMapping("pointermove", this.mapPointerMove), this.addEventMapping("pointerout", this.mapPointerOut), this.addEventMapping("pointerleave", this.mapPointerOut), this.addEventMapping("pointerover", this.mapPointerOver), this.addEventMapping("pointerup", this.mapPointerUp), this.addEventMapping("pointerupoutside", this.mapPointerUpOutside), this.addEventMapping("wheel", this.mapWheel);
  }
  /**
   * Adds an event mapping for the event `type` handled by `fn`.
   *
   * Event mappings can be used to implement additional or custom events. They take an event
   * coming from the upstream scene (or directly from the {@link PIXI.EventSystem}) and dispatch new downstream events
   * generally trickling down and bubbling up to {@link PIXI.EventBoundary.rootTarget this.rootTarget}.
   *
   * To modify the semantics of existing events, the built-in mapping methods of EventBoundary should be overridden
   * instead.
   * @param type - The type of upstream event to map.
   * @param fn - The mapping method. The context of this function must be bound manually, if desired.
   */
  addEventMapping(t, e) {
    this.mappingTable[t] || (this.mappingTable[t] = []), this.mappingTable[t].push({
      fn: e,
      priority: 0
    }), this.mappingTable[t].sort((r, s) => r.priority - s.priority);
  }
  /**
   * Dispatches the given event
   * @param e
   * @param type
   */
  dispatchEvent(t, e) {
    t.propagationStopped = !1, t.propagationImmediatelyStopped = !1, this.propagate(t, e), this.dispatch.emit(e || t.type, t);
  }
  /**
   * Maps the given upstream event through the event boundary and propagates it downstream.
   * @param e
   */
  mapEvent(t) {
    if (!this.rootTarget)
      return;
    const e = this.mappingTable[t.type];
    if (e)
      for (let r = 0, s = e.length; r < s; r++)
        e[r].fn(t);
    else
      console.warn(`[EventBoundary]: Event mapping not defined for ${t.type}`);
  }
  /**
   * Finds the DisplayObject that is the target of a event at the given coordinates.
   *
   * The passed (x,y) coordinates are in the world space above this event boundary.
   * @param x
   * @param y
   */
  hitTest(t, e) {
    Fe.pauseUpdate = !0;
    const r = this._isPointerMoveEvent && this.enableGlobalMoveEvents ? "hitTestMoveRecursive" : "hitTestRecursive", s = this[r](
      this.rootTarget,
      this.rootTarget.eventMode,
      kg.set(t, e),
      this.hitTestFn,
      this.hitPruneFn
    );
    return s && s[0];
  }
  /**
   * Propagate the passed event from from {@link PIXI.EventBoundary.rootTarget this.rootTarget} to its
   * target {@code e.target}.
   * @param e - The event to propagate.
   * @param type
   */
  propagate(t, e) {
    if (!t.target)
      return;
    const r = t.composedPath();
    t.eventPhase = t.CAPTURING_PHASE;
    for (let s = 0, n = r.length - 1; s < n; s++)
      if (t.currentTarget = r[s], this.notifyTarget(t, e), t.propagationStopped || t.propagationImmediatelyStopped)
        return;
    if (t.eventPhase = t.AT_TARGET, t.currentTarget = t.target, this.notifyTarget(t, e), !(t.propagationStopped || t.propagationImmediatelyStopped)) {
      t.eventPhase = t.BUBBLING_PHASE;
      for (let s = r.length - 2; s >= 0; s--)
        if (t.currentTarget = r[s], this.notifyTarget(t, e), t.propagationStopped || t.propagationImmediatelyStopped)
          return;
    }
  }
  /**
   * Emits the event {@code e} to all interactive display objects. The event is propagated in the bubbling phase always.
   *
   * This is used in the `globalpointermove` event.
   * @param e - The emitted event.
   * @param type - The listeners to notify.
   * @param targets - The targets to notify.
   */
  all(t, e, r = this._allInteractiveElements) {
    if (r.length === 0)
      return;
    t.eventPhase = t.BUBBLING_PHASE;
    const s = Array.isArray(e) ? e : [e];
    for (let n = r.length - 1; n >= 0; n--)
      s.forEach((a) => {
        t.currentTarget = r[n], this.notifyTarget(t, a);
      });
  }
  /**
   * Finds the propagation path from {@link PIXI.EventBoundary.rootTarget rootTarget} to the passed
   * {@code target}. The last element in the path is {@code target}.
   * @param target
   */
  propagationPath(t) {
    const e = [t];
    for (let r = 0; r < Ug && t !== this.rootTarget; r++) {
      if (!t.parent)
        throw new Error("Cannot find propagation path to disconnected target");
      e.push(t.parent), t = t.parent;
    }
    return e.reverse(), e;
  }
  hitTestMoveRecursive(t, e, r, s, n, a = !1) {
    let o = !1;
    if (this._interactivePrune(t))
      return null;
    if ((t.eventMode === "dynamic" || e === "dynamic") && (Fe.pauseUpdate = !1), t.interactiveChildren && t.children) {
      const u = t.children;
      for (let c = u.length - 1; c >= 0; c--) {
        const d = u[c], f = this.hitTestMoveRecursive(
          d,
          this._isInteractive(e) ? e : d.eventMode,
          r,
          s,
          n,
          a || n(t, r)
        );
        if (f) {
          if (f.length > 0 && !f[f.length - 1].parent)
            continue;
          const p = t.isInteractive();
          (f.length > 0 || p) && (p && this._allInteractiveElements.push(t), f.push(t)), this._hitElements.length === 0 && (this._hitElements = f), o = !0;
        }
      }
    }
    const h = this._isInteractive(e), l = t.isInteractive();
    return h && l && this._allInteractiveElements.push(t), a || this._hitElements.length > 0 ? null : o ? this._hitElements : h && !n(t, r) && s(t, r) ? l ? [t] : [] : null;
  }
  /**
   * Recursive implementation for {@link PIXI.EventBoundary.hitTest hitTest}.
   * @param currentTarget - The DisplayObject that is to be hit tested.
   * @param eventMode - The event mode for the `currentTarget` or one of its parents.
   * @param location - The location that is being tested for overlap.
   * @param testFn - Callback that determines whether the target passes hit testing. This callback
   *  can assume that `pruneFn` failed to prune the display object.
   * @param pruneFn - Callback that determiness whether the target and all of its children
   *  cannot pass the hit test. It is used as a preliminary optimization to prune entire subtrees
   *  of the scene graph.
   * @returns An array holding the hit testing target and all its ancestors in order. The first element
   *  is the target itself and the last is {@link PIXI.EventBoundary.rootTarget rootTarget}. This is the opposite
   *  order w.r.t. the propagation path. If no hit testing target is found, null is returned.
   */
  hitTestRecursive(t, e, r, s, n) {
    if (this._interactivePrune(t) || n(t, r))
      return null;
    if ((t.eventMode === "dynamic" || e === "dynamic") && (Fe.pauseUpdate = !1), t.interactiveChildren && t.children) {
      const h = t.children;
      for (let l = h.length - 1; l >= 0; l--) {
        const u = h[l], c = this.hitTestRecursive(
          u,
          this._isInteractive(e) ? e : u.eventMode,
          r,
          s,
          n
        );
        if (c) {
          if (c.length > 0 && !c[c.length - 1].parent)
            continue;
          const d = t.isInteractive();
          return (c.length > 0 || d) && c.push(t), c;
        }
      }
    }
    const a = this._isInteractive(e), o = t.isInteractive();
    return a && s(t, r) ? o ? [t] : [] : null;
  }
  _isInteractive(t) {
    return t === "static" || t === "dynamic";
  }
  _interactivePrune(t) {
    return !!(!t || t.isMask || !t.visible || !t.renderable || t.eventMode === "none" || t.eventMode === "passive" && !t.interactiveChildren || t.isMask);
  }
  /**
   * Checks whether the display object or any of its children cannot pass the hit test at all.
   *
   * {@link PIXI.EventBoundary}'s implementation uses the {@link PIXI.DisplayObject.hitArea hitArea}
   * and {@link PIXI.DisplayObject._mask} for pruning.
   * @param displayObject
   * @param location
   */
  hitPruneFn(t, e) {
    var r;
    if (t.hitArea && (t.worldTransform.applyInverse(e, Tn), !t.hitArea.contains(Tn.x, Tn.y)))
      return !0;
    if (t._mask) {
      const s = t._mask.isMaskData ? t._mask.maskObject : t._mask;
      if (s && !((r = s.containsPoint) != null && r.call(s, e)))
        return !0;
    }
    return !1;
  }
  /**
   * Checks whether the display object passes hit testing for the given location.
   * @param displayObject
   * @param location
   * @returns - Whether `displayObject` passes hit testing for `location`.
   */
  hitTestFn(t, e) {
    return t.eventMode === "passive" ? !1 : t.hitArea ? !0 : t.containsPoint ? t.containsPoint(e) : !1;
  }
  /**
   * Notify all the listeners to the event's `currentTarget`.
   *
   * If the `currentTarget` contains the property `on<type>`, then it is called here,
   * simulating the behavior from version 6.x and prior.
   * @param e - The event passed to the target.
   * @param type
   */
  notifyTarget(t, e) {
    var n, a;
    e = e ?? t.type;
    const r = `on${e}`;
    (a = (n = t.currentTarget)[r]) == null || a.call(n, t);
    const s = t.eventPhase === t.CAPTURING_PHASE || t.eventPhase === t.AT_TARGET ? `${e}capture` : e;
    this.notifyListeners(t, s), t.eventPhase === t.AT_TARGET && this.notifyListeners(t, e);
  }
  /**
   * Maps the upstream `pointerdown` events to a downstream `pointerdown` event.
   *
   * `touchstart`, `rightdown`, `mousedown` events are also dispatched for specific pointer types.
   * @param from
   */
  mapPointerDown(t) {
    if (!(t instanceof Vt)) {
      console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
      return;
    }
    const e = this.createPointerEvent(t);
    if (this.dispatchEvent(e, "pointerdown"), e.pointerType === "touch")
      this.dispatchEvent(e, "touchstart");
    else if (e.pointerType === "mouse" || e.pointerType === "pen") {
      const s = e.button === 2;
      this.dispatchEvent(e, s ? "rightdown" : "mousedown");
    }
    const r = this.trackingData(t.pointerId);
    r.pressTargetsByButton[t.button] = e.composedPath(), this.freeEvent(e);
  }
  /**
   * Maps the upstream `pointermove` to downstream `pointerout`, `pointerover`, and `pointermove` events, in that order.
   *
   * The tracking data for the specific pointer has an updated `overTarget`. `mouseout`, `mouseover`,
   * `mousemove`, and `touchmove` events are fired as well for specific pointer types.
   * @param from - The upstream `pointermove` event.
   */
  mapPointerMove(t) {
    var h, l;
    if (!(t instanceof Vt)) {
      console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
      return;
    }
    this._allInteractiveElements.length = 0, this._hitElements.length = 0, this._isPointerMoveEvent = !0;
    const e = this.createPointerEvent(t);
    this._isPointerMoveEvent = !1;
    const r = e.pointerType === "mouse" || e.pointerType === "pen", s = this.trackingData(t.pointerId), n = this.findMountedTarget(s.overTargets);
    if (((h = s.overTargets) == null ? void 0 : h.length) > 0 && n !== e.target) {
      const u = t.type === "mousemove" ? "mouseout" : "pointerout", c = this.createPointerEvent(t, u, n);
      if (this.dispatchEvent(c, "pointerout"), r && this.dispatchEvent(c, "mouseout"), !e.composedPath().includes(n)) {
        const d = this.createPointerEvent(t, "pointerleave", n);
        for (d.eventPhase = d.AT_TARGET; d.target && !e.composedPath().includes(d.target); )
          d.currentTarget = d.target, this.notifyTarget(d), r && this.notifyTarget(d, "mouseleave"), d.target = d.target.parent;
        this.freeEvent(d);
      }
      this.freeEvent(c);
    }
    if (n !== e.target) {
      const u = t.type === "mousemove" ? "mouseover" : "pointerover", c = this.clonePointerEvent(e, u);
      this.dispatchEvent(c, "pointerover"), r && this.dispatchEvent(c, "mouseover");
      let d = n == null ? void 0 : n.parent;
      for (; d && d !== this.rootTarget.parent && d !== e.target; )
        d = d.parent;
      if (!d || d === this.rootTarget.parent) {
        const f = this.clonePointerEvent(e, "pointerenter");
        for (f.eventPhase = f.AT_TARGET; f.target && f.target !== n && f.target !== this.rootTarget.parent; )
          f.currentTarget = f.target, this.notifyTarget(f), r && this.notifyTarget(f, "mouseenter"), f.target = f.target.parent;
        this.freeEvent(f);
      }
      this.freeEvent(c);
    }
    const a = [], o = this.enableGlobalMoveEvents ?? !0;
    this.moveOnAll ? a.push("pointermove") : this.dispatchEvent(e, "pointermove"), o && a.push("globalpointermove"), e.pointerType === "touch" && (this.moveOnAll ? a.splice(1, 0, "touchmove") : this.dispatchEvent(e, "touchmove"), o && a.push("globaltouchmove")), r && (this.moveOnAll ? a.splice(1, 0, "mousemove") : this.dispatchEvent(e, "mousemove"), o && a.push("globalmousemove"), this.cursor = (l = e.target) == null ? void 0 : l.cursor), a.length > 0 && this.all(e, a), this._allInteractiveElements.length = 0, this._hitElements.length = 0, s.overTargets = e.composedPath(), this.freeEvent(e);
  }
  /**
   * Maps the upstream `pointerover` to downstream `pointerover` and `pointerenter` events, in that order.
   *
   * The tracking data for the specific pointer gets a new `overTarget`.
   * @param from - The upstream `pointerover` event.
   */
  mapPointerOver(t) {
    var a;
    if (!(t instanceof Vt)) {
      console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
      return;
    }
    const e = this.trackingData(t.pointerId), r = this.createPointerEvent(t), s = r.pointerType === "mouse" || r.pointerType === "pen";
    this.dispatchEvent(r, "pointerover"), s && this.dispatchEvent(r, "mouseover"), r.pointerType === "mouse" && (this.cursor = (a = r.target) == null ? void 0 : a.cursor);
    const n = this.clonePointerEvent(r, "pointerenter");
    for (n.eventPhase = n.AT_TARGET; n.target && n.target !== this.rootTarget.parent; )
      n.currentTarget = n.target, this.notifyTarget(n), s && this.notifyTarget(n, "mouseenter"), n.target = n.target.parent;
    e.overTargets = r.composedPath(), this.freeEvent(r), this.freeEvent(n);
  }
  /**
   * Maps the upstream `pointerout` to downstream `pointerout`, `pointerleave` events, in that order.
   *
   * The tracking data for the specific pointer is cleared of a `overTarget`.
   * @param from - The upstream `pointerout` event.
   */
  mapPointerOut(t) {
    if (!(t instanceof Vt)) {
      console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
      return;
    }
    const e = this.trackingData(t.pointerId);
    if (e.overTargets) {
      const r = t.pointerType === "mouse" || t.pointerType === "pen", s = this.findMountedTarget(e.overTargets), n = this.createPointerEvent(t, "pointerout", s);
      this.dispatchEvent(n), r && this.dispatchEvent(n, "mouseout");
      const a = this.createPointerEvent(t, "pointerleave", s);
      for (a.eventPhase = a.AT_TARGET; a.target && a.target !== this.rootTarget.parent; )
        a.currentTarget = a.target, this.notifyTarget(a), r && this.notifyTarget(a, "mouseleave"), a.target = a.target.parent;
      e.overTargets = null, this.freeEvent(n), this.freeEvent(a);
    }
    this.cursor = null;
  }
  /**
   * Maps the upstream `pointerup` event to downstream `pointerup`, `pointerupoutside`,
   * and `click`/`rightclick`/`pointertap` events, in that order.
   *
   * The `pointerupoutside` event bubbles from the original `pointerdown` target to the most specific
   * ancestor of the `pointerdown` and `pointerup` targets, which is also the `click` event's target. `touchend`,
   * `rightup`, `mouseup`, `touchendoutside`, `rightupoutside`, `mouseupoutside`, and `tap` are fired as well for
   * specific pointer types.
   * @param from - The upstream `pointerup` event.
   */
  mapPointerUp(t) {
    if (!(t instanceof Vt)) {
      console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
      return;
    }
    const e = performance.now(), r = this.createPointerEvent(t);
    if (this.dispatchEvent(r, "pointerup"), r.pointerType === "touch")
      this.dispatchEvent(r, "touchend");
    else if (r.pointerType === "mouse" || r.pointerType === "pen") {
      const o = r.button === 2;
      this.dispatchEvent(r, o ? "rightup" : "mouseup");
    }
    const s = this.trackingData(t.pointerId), n = this.findMountedTarget(s.pressTargetsByButton[t.button]);
    let a = n;
    if (n && !r.composedPath().includes(n)) {
      let o = n;
      for (; o && !r.composedPath().includes(o); ) {
        if (r.currentTarget = o, this.notifyTarget(r, "pointerupoutside"), r.pointerType === "touch")
          this.notifyTarget(r, "touchendoutside");
        else if (r.pointerType === "mouse" || r.pointerType === "pen") {
          const h = r.button === 2;
          this.notifyTarget(r, h ? "rightupoutside" : "mouseupoutside");
        }
        o = o.parent;
      }
      delete s.pressTargetsByButton[t.button], a = o;
    }
    if (a) {
      const o = this.clonePointerEvent(r, "click");
      o.target = a, o.path = null, s.clicksByButton[t.button] || (s.clicksByButton[t.button] = {
        clickCount: 0,
        target: o.target,
        timeStamp: e
      });
      const h = s.clicksByButton[t.button];
      if (h.target === o.target && e - h.timeStamp < 200 ? ++h.clickCount : h.clickCount = 1, h.target = o.target, h.timeStamp = e, o.detail = h.clickCount, o.pointerType === "mouse") {
        const l = o.button === 2;
        this.dispatchEvent(o, l ? "rightclick" : "click");
      } else
        o.pointerType === "touch" && this.dispatchEvent(o, "tap");
      this.dispatchEvent(o, "pointertap"), this.freeEvent(o);
    }
    this.freeEvent(r);
  }
  /**
   * Maps the upstream `pointerupoutside` event to a downstream `pointerupoutside` event, bubbling from the original
   * `pointerdown` target to `rootTarget`.
   *
   * (The most specific ancestor of the `pointerdown` event and the `pointerup` event must the
   * `{@link PIXI.EventBoundary}'s root because the `pointerup` event occurred outside of the boundary.)
   *
   * `touchendoutside`, `mouseupoutside`, and `rightupoutside` events are fired as well for specific pointer
   * types. The tracking data for the specific pointer is cleared of a `pressTarget`.
   * @param from - The upstream `pointerupoutside` event.
   */
  mapPointerUpOutside(t) {
    if (!(t instanceof Vt)) {
      console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
      return;
    }
    const e = this.trackingData(t.pointerId), r = this.findMountedTarget(e.pressTargetsByButton[t.button]), s = this.createPointerEvent(t);
    if (r) {
      let n = r;
      for (; n; )
        s.currentTarget = n, this.notifyTarget(s, "pointerupoutside"), s.pointerType === "touch" ? this.notifyTarget(s, "touchendoutside") : (s.pointerType === "mouse" || s.pointerType === "pen") && this.notifyTarget(s, s.button === 2 ? "rightupoutside" : "mouseupoutside"), n = n.parent;
      delete e.pressTargetsByButton[t.button];
    }
    this.freeEvent(s);
  }
  /**
   * Maps the upstream `wheel` event to a downstream `wheel` event.
   * @param from - The upstream `wheel` event.
   */
  mapWheel(t) {
    if (!(t instanceof Mr)) {
      console.warn("EventBoundary cannot map a non-wheel event as a wheel event");
      return;
    }
    const e = this.createWheelEvent(t);
    this.dispatchEvent(e), this.freeEvent(e);
  }
  /**
   * Finds the most specific event-target in the given propagation path that is still mounted in the scene graph.
   *
   * This is used to find the correct `pointerup` and `pointerout` target in the case that the original `pointerdown`
   * or `pointerover` target was unmounted from the scene graph.
   * @param propagationPath - The propagation path was valid in the past.
   * @returns - The most specific event-target still mounted at the same location in the scene graph.
   */
  findMountedTarget(t) {
    if (!t)
      return null;
    let e = t[0];
    for (let r = 1; r < t.length && t[r].parent === e; r++)
      e = t[r];
    return e;
  }
  /**
   * Creates an event whose {@code originalEvent} is {@code from}, with an optional `type` and `target` override.
   *
   * The event is allocated using {@link PIXI.EventBoundary#allocateEvent this.allocateEvent}.
   * @param from - The {@code originalEvent} for the returned event.
   * @param [type=from.type] - The type of the returned event.
   * @param target - The target of the returned event.
   */
  createPointerEvent(t, e, r) {
    const s = this.allocateEvent(Vt);
    return this.copyPointerData(t, s), this.copyMouseData(t, s), this.copyData(t, s), s.nativeEvent = t.nativeEvent, s.originalEvent = t, s.target = r ?? this.hitTest(s.global.x, s.global.y) ?? this._hitElements[0], typeof e == "string" && (s.type = e), s;
  }
  /**
   * Creates a wheel event whose {@code originalEvent} is {@code from}.
   *
   * The event is allocated using {@link PIXI.EventBoundary#allocateEvent this.allocateEvent}.
   * @param from - The upstream wheel event.
   */
  createWheelEvent(t) {
    const e = this.allocateEvent(Mr);
    return this.copyWheelData(t, e), this.copyMouseData(t, e), this.copyData(t, e), e.nativeEvent = t.nativeEvent, e.originalEvent = t, e.target = this.hitTest(e.global.x, e.global.y), e;
  }
  /**
   * Clones the event {@code from}, with an optional {@code type} override.
   *
   * The event is allocated using {@link PIXI.EventBoundary#allocateEvent this.allocateEvent}.
   * @param from - The event to clone.
   * @param [type=from.type] - The type of the returned event.
   */
  clonePointerEvent(t, e) {
    const r = this.allocateEvent(Vt);
    return r.nativeEvent = t.nativeEvent, r.originalEvent = t.originalEvent, this.copyPointerData(t, r), this.copyMouseData(t, r), this.copyData(t, r), r.target = t.target, r.path = t.composedPath().slice(), r.type = e ?? r.type, r;
  }
  /**
   * Copies wheel {@link PIXI.FederatedWheelEvent} data from {@code from} into {@code to}.
   *
   * The following properties are copied:
   * + deltaMode
   * + deltaX
   * + deltaY
   * + deltaZ
   * @param from
   * @param to
   */
  copyWheelData(t, e) {
    e.deltaMode = t.deltaMode, e.deltaX = t.deltaX, e.deltaY = t.deltaY, e.deltaZ = t.deltaZ;
  }
  /**
   * Copies pointer {@link PIXI.FederatedPointerEvent} data from {@code from} into {@code to}.
   *
   * The following properties are copied:
   * + pointerId
   * + width
   * + height
   * + isPrimary
   * + pointerType
   * + pressure
   * + tangentialPressure
   * + tiltX
   * + tiltY
   * @param from
   * @param to
   */
  copyPointerData(t, e) {
    t instanceof Vt && e instanceof Vt && (e.pointerId = t.pointerId, e.width = t.width, e.height = t.height, e.isPrimary = t.isPrimary, e.pointerType = t.pointerType, e.pressure = t.pressure, e.tangentialPressure = t.tangentialPressure, e.tiltX = t.tiltX, e.tiltY = t.tiltY, e.twist = t.twist);
  }
  /**
   * Copies mouse {@link PIXI.FederatedMouseEvent} data from {@code from} to {@code to}.
   *
   * The following properties are copied:
   * + altKey
   * + button
   * + buttons
   * + clientX
   * + clientY
   * + metaKey
   * + movementX
   * + movementY
   * + pageX
   * + pageY
   * + x
   * + y
   * + screen
   * + shiftKey
   * + global
   * @param from
   * @param to
   */
  copyMouseData(t, e) {
    t instanceof Ts && e instanceof Ts && (e.altKey = t.altKey, e.button = t.button, e.buttons = t.buttons, e.client.copyFrom(t.client), e.ctrlKey = t.ctrlKey, e.metaKey = t.metaKey, e.movement.copyFrom(t.movement), e.screen.copyFrom(t.screen), e.shiftKey = t.shiftKey, e.global.copyFrom(t.global));
  }
  /**
   * Copies base {@link PIXI.FederatedEvent} data from {@code from} into {@code to}.
   *
   * The following properties are copied:
   * + isTrusted
   * + srcElement
   * + timeStamp
   * + type
   * @param from - The event to copy data from.
   * @param to - The event to copy data into.
   */
  copyData(t, e) {
    e.isTrusted = t.isTrusted, e.srcElement = t.srcElement, e.timeStamp = performance.now(), e.type = t.type, e.detail = t.detail, e.view = t.view, e.which = t.which, e.layer.copyFrom(t.layer), e.page.copyFrom(t.page);
  }
  /**
   * @param id - The pointer ID.
   * @returns The tracking data stored for the given pointer. If no data exists, a blank
   *  state will be created.
   */
  trackingData(t) {
    return this.mappingState.trackingData[t] || (this.mappingState.trackingData[t] = {
      pressTargetsByButton: {},
      clicksByButton: {},
      overTarget: null
    }), this.mappingState.trackingData[t];
  }
  /**
   * Allocate a specific type of event from {@link PIXI.EventBoundary#eventPool this.eventPool}.
   *
   * This allocation is constructor-agnostic, as long as it only takes one argument - this event
   * boundary.
   * @param constructor - The event's constructor.
   */
  allocateEvent(t) {
    this.eventPool.has(t) || this.eventPool.set(t, []);
    const e = this.eventPool.get(t).pop() || new t(this);
    return e.eventPhase = e.NONE, e.currentTarget = null, e.path = null, e.target = null, e;
  }
  /**
   * Frees the event and puts it back into the event pool.
   *
   * It is illegal to reuse the event until it is allocated again, using `this.allocateEvent`.
   *
   * It is also advised that events not allocated from {@link PIXI.EventBoundary#allocateEvent this.allocateEvent}
   * not be freed. This is because of the possibility that the same event is freed twice, which can cause
   * it to be allocated twice & result in overwriting.
   * @param event - The event to be freed.
   * @throws Error if the event is managed by another event boundary.
   */
  freeEvent(t) {
    if (t.manager !== this)
      throw new Error("It is illegal to free an event not managed by this EventBoundary!");
    const e = t.constructor;
    this.eventPool.has(e) || this.eventPool.set(e, []), this.eventPool.get(e).push(t);
  }
  /**
   * Similar to {@link PIXI.EventEmitter.emit}, except it stops if the `propagationImmediatelyStopped` flag
   * is set on the event.
   * @param e - The event to call each listener with.
   * @param type - The event key.
   */
  notifyListeners(t, e) {
    const r = t.currentTarget._events[e];
    if (r && t.currentTarget.isInteractive())
      if ("fn" in r)
        r.once && t.currentTarget.removeListener(e, r.fn, void 0, !0), r.fn.call(r.context, t);
      else
        for (let s = 0, n = r.length; s < n && !t.propagationImmediatelyStopped; s++)
          r[s].once && t.currentTarget.removeListener(e, r[s].fn, void 0, !0), r[s].fn.call(r[s].context, t);
  }
}
const Hg = 1, $g = {
  touchstart: "pointerdown",
  touchend: "pointerup",
  touchendoutside: "pointerupoutside",
  touchmove: "pointermove",
  touchcancel: "pointercancel"
}, ya = class _a {
  /**
   * @param {PIXI.Renderer} renderer
   */
  constructor(t) {
    this.supportsTouchEvents = "ontouchstart" in globalThis, this.supportsPointerEvents = !!globalThis.PointerEvent, this.domElement = null, this.resolution = 1, this.renderer = t, this.rootBoundary = new Gg(null), Fe.init(this), this.autoPreventDefault = !0, this.eventsAdded = !1, this.rootPointerEvent = new Vt(null), this.rootWheelEvent = new Mr(null), this.cursorStyles = {
      default: "inherit",
      pointer: "pointer"
    }, this.features = new Proxy({ ..._a.defaultEventFeatures }, {
      set: (e, r, s) => (r === "globalMove" && (this.rootBoundary.enableGlobalMoveEvents = s), e[r] = s, !0)
    }), this.onPointerDown = this.onPointerDown.bind(this), this.onPointerMove = this.onPointerMove.bind(this), this.onPointerUp = this.onPointerUp.bind(this), this.onPointerOverOut = this.onPointerOverOut.bind(this), this.onWheel = this.onWheel.bind(this);
  }
  /**
   * The default interaction mode for all display objects.
   * @see PIXI.DisplayObject.eventMode
   * @type {PIXI.EventMode}
   * @readonly
   * @since 7.2.0
   */
  static get defaultEventMode() {
    return this._defaultEventMode;
  }
  /**
   * Runner init called, view is available at this point.
   * @ignore
   */
  init(t) {
    const { view: e, resolution: r } = this.renderer;
    this.setTargetElement(e), this.resolution = r, _a._defaultEventMode = t.eventMode ?? "auto", Object.assign(this.features, t.eventFeatures ?? {}), this.rootBoundary.enableGlobalMoveEvents = this.features.globalMove;
  }
  /**
   * Handle changing resolution.
   * @ignore
   */
  resolutionChange(t) {
    this.resolution = t;
  }
  /** Destroys all event listeners and detaches the renderer. */
  destroy() {
    this.setTargetElement(null), this.renderer = null;
  }
  /**
   * Sets the current cursor mode, handling any callbacks or CSS style changes.
   * @param mode - cursor mode, a key from the cursorStyles dictionary
   */
  setCursor(t) {
    t = t || "default";
    let e = !0;
    if (globalThis.OffscreenCanvas && this.domElement instanceof OffscreenCanvas && (e = !1), this.currentCursor === t)
      return;
    this.currentCursor = t;
    const r = this.cursorStyles[t];
    if (r)
      switch (typeof r) {
        case "string":
          e && (this.domElement.style.cursor = r);
          break;
        case "function":
          r(t);
          break;
        case "object":
          e && Object.assign(this.domElement.style, r);
          break;
      }
    else
      e && typeof t == "string" && !Object.prototype.hasOwnProperty.call(this.cursorStyles, t) && (this.domElement.style.cursor = t);
  }
  /**
   * The global pointer event.
   * Useful for getting the pointer position without listening to events.
   * @since 7.2.0
   */
  get pointer() {
    return this.rootPointerEvent;
  }
  /**
   * Event handler for pointer down events on {@link PIXI.EventSystem#domElement this.domElement}.
   * @param nativeEvent - The native mouse/pointer/touch event.
   */
  onPointerDown(t) {
    if (!this.features.click)
      return;
    this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
    const e = this.normalizeToPointerData(t);
    this.autoPreventDefault && e[0].isNormalized && (t.cancelable || !("cancelable" in t)) && t.preventDefault();
    for (let r = 0, s = e.length; r < s; r++) {
      const n = e[r], a = this.bootstrapEvent(this.rootPointerEvent, n);
      this.rootBoundary.mapEvent(a);
    }
    this.setCursor(this.rootBoundary.cursor);
  }
  /**
   * Event handler for pointer move events on on {@link PIXI.EventSystem#domElement this.domElement}.
   * @param nativeEvent - The native mouse/pointer/touch events.
   */
  onPointerMove(t) {
    if (!this.features.move)
      return;
    this.rootBoundary.rootTarget = this.renderer.lastObjectRendered, Fe.pointerMoved();
    const e = this.normalizeToPointerData(t);
    for (let r = 0, s = e.length; r < s; r++) {
      const n = this.bootstrapEvent(this.rootPointerEvent, e[r]);
      this.rootBoundary.mapEvent(n);
    }
    this.setCursor(this.rootBoundary.cursor);
  }
  /**
   * Event handler for pointer up events on {@link PIXI.EventSystem#domElement this.domElement}.
   * @param nativeEvent - The native mouse/pointer/touch event.
   */
  onPointerUp(t) {
    if (!this.features.click)
      return;
    this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
    let e = t.target;
    t.composedPath && t.composedPath().length > 0 && (e = t.composedPath()[0]);
    const r = e !== this.domElement ? "outside" : "", s = this.normalizeToPointerData(t);
    for (let n = 0, a = s.length; n < a; n++) {
      const o = this.bootstrapEvent(this.rootPointerEvent, s[n]);
      o.type += r, this.rootBoundary.mapEvent(o);
    }
    this.setCursor(this.rootBoundary.cursor);
  }
  /**
   * Event handler for pointer over & out events on {@link PIXI.EventSystem#domElement this.domElement}.
   * @param nativeEvent - The native mouse/pointer/touch event.
   */
  onPointerOverOut(t) {
    if (!this.features.click)
      return;
    this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
    const e = this.normalizeToPointerData(t);
    for (let r = 0, s = e.length; r < s; r++) {
      const n = this.bootstrapEvent(this.rootPointerEvent, e[r]);
      this.rootBoundary.mapEvent(n);
    }
    this.setCursor(this.rootBoundary.cursor);
  }
  /**
   * Passive handler for `wheel` events on {@link PIXI.EventSystem.domElement this.domElement}.
   * @param nativeEvent - The native wheel event.
   */
  onWheel(t) {
    if (!this.features.wheel)
      return;
    const e = this.normalizeWheelEvent(t);
    this.rootBoundary.rootTarget = this.renderer.lastObjectRendered, this.rootBoundary.mapEvent(e);
  }
  /**
   * Sets the {@link PIXI.EventSystem#domElement domElement} and binds event listeners.
   *
   * To deregister the current DOM element without setting a new one, pass {@code null}.
   * @param element - The new DOM element.
   */
  setTargetElement(t) {
    this.removeEvents(), this.domElement = t, Fe.domElement = t, this.addEvents();
  }
  /** Register event listeners on {@link PIXI.Renderer#domElement this.domElement}. */
  addEvents() {
    if (this.eventsAdded || !this.domElement)
      return;
    Fe.addTickerListener();
    const t = this.domElement.style;
    t && (globalThis.navigator.msPointerEnabled ? (t.msContentZooming = "none", t.msTouchAction = "none") : this.supportsPointerEvents && (t.touchAction = "none")), this.supportsPointerEvents ? (globalThis.document.addEventListener("pointermove", this.onPointerMove, !0), this.domElement.addEventListener("pointerdown", this.onPointerDown, !0), this.domElement.addEventListener("pointerleave", this.onPointerOverOut, !0), this.domElement.addEventListener("pointerover", this.onPointerOverOut, !0), globalThis.addEventListener("pointerup", this.onPointerUp, !0)) : (globalThis.document.addEventListener("mousemove", this.onPointerMove, !0), this.domElement.addEventListener("mousedown", this.onPointerDown, !0), this.domElement.addEventListener("mouseout", this.onPointerOverOut, !0), this.domElement.addEventListener("mouseover", this.onPointerOverOut, !0), globalThis.addEventListener("mouseup", this.onPointerUp, !0), this.supportsTouchEvents && (this.domElement.addEventListener("touchstart", this.onPointerDown, !0), this.domElement.addEventListener("touchend", this.onPointerUp, !0), this.domElement.addEventListener("touchmove", this.onPointerMove, !0))), this.domElement.addEventListener("wheel", this.onWheel, {
      passive: !0,
      capture: !0
    }), this.eventsAdded = !0;
  }
  /** Unregister event listeners on {@link PIXI.EventSystem#domElement this.domElement}. */
  removeEvents() {
    if (!this.eventsAdded || !this.domElement)
      return;
    Fe.removeTickerListener();
    const t = this.domElement.style;
    globalThis.navigator.msPointerEnabled ? (t.msContentZooming = "", t.msTouchAction = "") : this.supportsPointerEvents && (t.touchAction = ""), this.supportsPointerEvents ? (globalThis.document.removeEventListener("pointermove", this.onPointerMove, !0), this.domElement.removeEventListener("pointerdown", this.onPointerDown, !0), this.domElement.removeEventListener("pointerleave", this.onPointerOverOut, !0), this.domElement.removeEventListener("pointerover", this.onPointerOverOut, !0), globalThis.removeEventListener("pointerup", this.onPointerUp, !0)) : (globalThis.document.removeEventListener("mousemove", this.onPointerMove, !0), this.domElement.removeEventListener("mousedown", this.onPointerDown, !0), this.domElement.removeEventListener("mouseout", this.onPointerOverOut, !0), this.domElement.removeEventListener("mouseover", this.onPointerOverOut, !0), globalThis.removeEventListener("mouseup", this.onPointerUp, !0), this.supportsTouchEvents && (this.domElement.removeEventListener("touchstart", this.onPointerDown, !0), this.domElement.removeEventListener("touchend", this.onPointerUp, !0), this.domElement.removeEventListener("touchmove", this.onPointerMove, !0))), this.domElement.removeEventListener("wheel", this.onWheel, !0), this.domElement = null, this.eventsAdded = !1;
  }
  /**
   * Maps x and y coords from a DOM object and maps them correctly to the PixiJS view. The
   * resulting value is stored in the point. This takes into account the fact that the DOM
   * element could be scaled and positioned anywhere on the screen.
   * @param  {PIXI.IPointData} point - the point that the result will be stored in
   * @param  {number} x - the x coord of the position to map
   * @param  {number} y - the y coord of the position to map
   */
  mapPositionToPoint(t, e, r) {
    const s = this.domElement.isConnected ? this.domElement.getBoundingClientRect() : {
      x: 0,
      y: 0,
      width: this.domElement.width,
      height: this.domElement.height,
      left: 0,
      top: 0
    }, n = 1 / this.resolution;
    t.x = (e - s.left) * (this.domElement.width / s.width) * n, t.y = (r - s.top) * (this.domElement.height / s.height) * n;
  }
  /**
   * Ensures that the original event object contains all data that a regular pointer event would have
   * @param event - The original event data from a touch or mouse event
   * @returns An array containing a single normalized pointer event, in the case of a pointer
   *  or mouse event, or a multiple normalized pointer events if there are multiple changed touches
   */
  normalizeToPointerData(t) {
    const e = [];
    if (this.supportsTouchEvents && t instanceof TouchEvent)
      for (let r = 0, s = t.changedTouches.length; r < s; r++) {
        const n = t.changedTouches[r];
        typeof n.button > "u" && (n.button = 0), typeof n.buttons > "u" && (n.buttons = 1), typeof n.isPrimary > "u" && (n.isPrimary = t.touches.length === 1 && t.type === "touchstart"), typeof n.width > "u" && (n.width = n.radiusX || 1), typeof n.height > "u" && (n.height = n.radiusY || 1), typeof n.tiltX > "u" && (n.tiltX = 0), typeof n.tiltY > "u" && (n.tiltY = 0), typeof n.pointerType > "u" && (n.pointerType = "touch"), typeof n.pointerId > "u" && (n.pointerId = n.identifier || 0), typeof n.pressure > "u" && (n.pressure = n.force || 0.5), typeof n.twist > "u" && (n.twist = 0), typeof n.tangentialPressure > "u" && (n.tangentialPressure = 0), typeof n.layerX > "u" && (n.layerX = n.offsetX = n.clientX), typeof n.layerY > "u" && (n.layerY = n.offsetY = n.clientY), n.isNormalized = !0, n.type = t.type, e.push(n);
      }
    else if (!globalThis.MouseEvent || t instanceof MouseEvent && (!this.supportsPointerEvents || !(t instanceof globalThis.PointerEvent))) {
      const r = t;
      typeof r.isPrimary > "u" && (r.isPrimary = !0), typeof r.width > "u" && (r.width = 1), typeof r.height > "u" && (r.height = 1), typeof r.tiltX > "u" && (r.tiltX = 0), typeof r.tiltY > "u" && (r.tiltY = 0), typeof r.pointerType > "u" && (r.pointerType = "mouse"), typeof r.pointerId > "u" && (r.pointerId = Hg), typeof r.pressure > "u" && (r.pressure = 0.5), typeof r.twist > "u" && (r.twist = 0), typeof r.tangentialPressure > "u" && (r.tangentialPressure = 0), r.isNormalized = !0, e.push(r);
    } else
      e.push(t);
    return e;
  }
  /**
   * Normalizes the native {@link https://w3c.github.io/uievents/#interface-wheelevent WheelEvent}.
   *
   * The returned {@link PIXI.FederatedWheelEvent} is a shared instance. It will not persist across
   * multiple native wheel events.
   * @param nativeEvent - The native wheel event that occurred on the canvas.
   * @returns A federated wheel event.
   */
  normalizeWheelEvent(t) {
    const e = this.rootWheelEvent;
    return this.transferMouseData(e, t), e.deltaX = t.deltaX, e.deltaY = t.deltaY, e.deltaZ = t.deltaZ, e.deltaMode = t.deltaMode, this.mapPositionToPoint(e.screen, t.clientX, t.clientY), e.global.copyFrom(e.screen), e.offset.copyFrom(e.screen), e.nativeEvent = t, e.type = t.type, e;
  }
  /**
   * Normalizes the `nativeEvent` into a federateed {@link PIXI.FederatedPointerEvent}.
   * @param event
   * @param nativeEvent
   */
  bootstrapEvent(t, e) {
    return t.originalEvent = null, t.nativeEvent = e, t.pointerId = e.pointerId, t.width = e.width, t.height = e.height, t.isPrimary = e.isPrimary, t.pointerType = e.pointerType, t.pressure = e.pressure, t.tangentialPressure = e.tangentialPressure, t.tiltX = e.tiltX, t.tiltY = e.tiltY, t.twist = e.twist, this.transferMouseData(t, e), this.mapPositionToPoint(t.screen, e.clientX, e.clientY), t.global.copyFrom(t.screen), t.offset.copyFrom(t.screen), t.isTrusted = e.isTrusted, t.type === "pointerleave" && (t.type = "pointerout"), t.type.startsWith("mouse") && (t.type = t.type.replace("mouse", "pointer")), t.type.startsWith("touch") && (t.type = $g[t.type] || t.type), t;
  }
  /**
   * Transfers base & mouse event data from the {@code nativeEvent} to the federated event.
   * @param event
   * @param nativeEvent
   */
  transferMouseData(t, e) {
    t.isTrusted = e.isTrusted, t.srcElement = e.srcElement, t.timeStamp = performance.now(), t.type = e.type, t.altKey = e.altKey, t.button = e.button, t.buttons = e.buttons, t.client.x = e.clientX, t.client.y = e.clientY, t.ctrlKey = e.ctrlKey, t.metaKey = e.metaKey, t.movement.x = e.movementX, t.movement.y = e.movementY, t.page.x = e.pageX, t.page.y = e.pageY, t.relatedTarget = null, t.shiftKey = e.shiftKey;
  }
};
ya.extension = {
  name: "events",
  type: [
    F.RendererSystem,
    F.CanvasRendererSystem
  ]
}, /**
* The event features that are enabled by the EventSystem
* This option only is available when using **@pixi/events** package
* (included in the **pixi.js** and **pixi.js-legacy** bundle), otherwise it will be ignored.
* @since 7.2.0
*/
ya.defaultEventFeatures = {
  move: !0,
  globalMove: !0,
  click: !0,
  wheel: !0
};
let va = ya;
k.add(va);
function Th(i) {
  return i === "dynamic" || i === "static";
}
const Vg = {
  /**
   * Property-based event handler for the `click` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onclick = (event) => {
   *  //some function here that happens on click
   * }
   */
  onclick: null,
  /**
   * Property-based event handler for the `mousedown` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onmousedown = (event) => {
   *  //some function here that happens on mousedown
   * }
   */
  onmousedown: null,
  /**
   * Property-based event handler for the `mouseenter` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onmouseenter = (event) => {
   *  //some function here that happens on mouseenter
   * }
   */
  onmouseenter: null,
  /**
   * Property-based event handler for the `mouseleave` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onmouseleave = (event) => {
   *  //some function here that happens on mouseleave
   * }
   */
  onmouseleave: null,
  /**
   * Property-based event handler for the `mousemove` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onmousemove = (event) => {
   *  //some function here that happens on mousemove
   * }
   */
  onmousemove: null,
  /**
   * Property-based event handler for the `globalmousemove` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onglobalmousemove = (event) => {
   *  //some function here that happens on globalmousemove
   * }
   */
  onglobalmousemove: null,
  /**
   * Property-based event handler for the `mouseout` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onmouseout = (event) => {
   *  //some function here that happens on mouseout
   * }
   */
  onmouseout: null,
  /**
   * Property-based event handler for the `mouseover` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onmouseover = (event) => {
   *  //some function here that happens on mouseover
   * }
   */
  onmouseover: null,
  /**
   * Property-based event handler for the `mouseup` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onmouseup = (event) => {
   *  //some function here that happens on mouseup
   * }
   */
  onmouseup: null,
  /**
   * Property-based event handler for the `mouseupoutside` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onmouseupoutside = (event) => {
   *  //some function here that happens on mouseupoutside
   * }
   */
  onmouseupoutside: null,
  /**
   * Property-based event handler for the `pointercancel` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onpointercancel = (event) => {
   *  //some function here that happens on pointercancel
   * }
   */
  onpointercancel: null,
  /**
   * Property-based event handler for the `pointerdown` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onpointerdown = (event) => {
   *  //some function here that happens on pointerdown
   * }
   */
  onpointerdown: null,
  /**
   * Property-based event handler for the `pointerenter` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onpointerenter = (event) => {
   *  //some function here that happens on pointerenter
   * }
   */
  onpointerenter: null,
  /**
   * Property-based event handler for the `pointerleave` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onpointerleave = (event) => {
   *  //some function here that happens on pointerleave
   * }
   */
  onpointerleave: null,
  /**
   * Property-based event handler for the `pointermove` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onpointermove = (event) => {
   *  //some function here that happens on pointermove
   * }
   */
  onpointermove: null,
  /**
   * Property-based event handler for the `globalpointermove` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onglobalpointermove = (event) => {
   *  //some function here that happens on globalpointermove
   * }
   */
  onglobalpointermove: null,
  /**
   * Property-based event handler for the `pointerout` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onpointerout = (event) => {
   *  //some function here that happens on pointerout
   * }
   */
  onpointerout: null,
  /**
   * Property-based event handler for the `pointerover` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onpointerover = (event) => {
   *  //some function here that happens on pointerover
   * }
   */
  onpointerover: null,
  /**
   * Property-based event handler for the `pointertap` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onpointertap = (event) => {
   *  //some function here that happens on pointertap
   * }
   */
  onpointertap: null,
  /**
   * Property-based event handler for the `pointerup` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onpointerup = (event) => {
   *  //some function here that happens on pointerup
   * }
   */
  onpointerup: null,
  /**
   * Property-based event handler for the `pointerupoutside` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onpointerupoutside = (event) => {
   *  //some function here that happens on pointerupoutside
   * }
   */
  onpointerupoutside: null,
  /**
   * Property-based event handler for the `rightclick` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onrightclick = (event) => {
   *  //some function here that happens on rightclick
   * }
   */
  onrightclick: null,
  /**
   * Property-based event handler for the `rightdown` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onrightdown = (event) => {
   *  //some function here that happens on rightdown
   * }
   */
  onrightdown: null,
  /**
   * Property-based event handler for the `rightup` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onrightup = (event) => {
   *  //some function here that happens on rightup
   * }
   */
  onrightup: null,
  /**
   * Property-based event handler for the `rightupoutside` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onrightupoutside = (event) => {
   *  //some function here that happens on rightupoutside
   * }
   */
  onrightupoutside: null,
  /**
   * Property-based event handler for the `tap` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.ontap = (event) => {
   *  //some function here that happens on tap
   * }
   */
  ontap: null,
  /**
   * Property-based event handler for the `touchcancel` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.ontouchcancel = (event) => {
   *  //some function here that happens on touchcancel
   * }
   */
  ontouchcancel: null,
  /**
   * Property-based event handler for the `touchend` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.ontouchend = (event) => {
   *  //some function here that happens on touchend
   * }
   */
  ontouchend: null,
  /**
   * Property-based event handler for the `touchendoutside` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.ontouchendoutside = (event) => {
   *  //some function here that happens on touchendoutside
   * }
   */
  ontouchendoutside: null,
  /**
   * Property-based event handler for the `touchmove` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.ontouchmove = (event) => {
   *  //some function here that happens on touchmove
   * }
   */
  ontouchmove: null,
  /**
   * Property-based event handler for the `globaltouchmove` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onglobaltouchmove = (event) => {
   *  //some function here that happens on globaltouchmove
   * }
   */
  onglobaltouchmove: null,
  /**
   * Property-based event handler for the `touchstart` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.ontouchstart = (event) => {
   *  //some function here that happens on touchstart
   * }
   */
  ontouchstart: null,
  /**
   * Property-based event handler for the `wheel` event.
   * @memberof PIXI.DisplayObject#
   * @default null
   * @example
   * this.onwheel = (event) => {
   *  //some function here that happens on wheel
   * }
   */
  onwheel: null,
  /**
   * @ignore
   */
  _internalInteractive: void 0,
  /**
   * Enable interaction events for the DisplayObject. Touch, pointer and mouse
   * @memberof PIXI.DisplayObject#
   */
  get interactive() {
    return this._internalInteractive ?? Th(va.defaultEventMode);
  },
  set interactive(i) {
    Y(
      "7.2.0",
      // eslint-disable-next-line max-len
      "Setting interactive is deprecated, use eventMode = 'none'/'passive'/'auto'/'static'/'dynamic' instead."
    ), this._internalInteractive = i, this.eventMode = i ? "static" : "auto";
  },
  /**
   * @ignore
   */
  _internalEventMode: void 0,
  /**
   * Enable interaction events for the DisplayObject. Touch, pointer and mouse.
   * This now replaces the `interactive` property.
   * There are 5 types of interaction settings:
   * - `'none'`: Ignores all interaction events, even on its children.
   * - `'passive'`: Does not emit events and ignores all hit testing on itself and non-interactive children.
   * Interactive children will still emit events.
   * - `'auto'`: Does not emit events but is hit tested if parent is interactive. Same as `interactive = false` in v7
   * - `'static'`: Emit events and is hit tested. Same as `interaction = true` in v7
   * - `'dynamic'`: Emits events and is hit tested but will also receive mock interaction events fired from a ticker to
   * allow for interaction when the mouse isn't moving
   * @example
   * import { Sprite } from 'pixi.js';
   *
   * const sprite = new Sprite(texture);
   * sprite.eventMode = 'static';
   * sprite.on('tap', (event) => {
   *     // Handle event
   * });
   * @memberof PIXI.DisplayObject#
   * @since 7.2.0
   */
  get eventMode() {
    return this._internalEventMode ?? va.defaultEventMode;
  },
  set eventMode(i) {
    this._internalInteractive = Th(i), this._internalEventMode = i;
  },
  /**
   * Determines if the displayObject is interactive or not
   * @returns {boolean} Whether the displayObject is interactive or not
   * @memberof PIXI.DisplayObject#
   * @since 7.2.0
   * @example
   * import { Sprite } from 'pixi.js';
   * const sprite = new Sprite(texture);
   * sprite.eventMode = 'static';
   * sprite.isInteractive(); // true
   *
   * sprite.eventMode = 'dynamic';
   * sprite.isInteractive(); // true
   *
   * sprite.eventMode = 'none';
   * sprite.isInteractive(); // false
   *
   * sprite.eventMode = 'passive';
   * sprite.isInteractive(); // false
   *
   * sprite.eventMode = 'auto';
   * sprite.isInteractive(); // false
   */
  isInteractive() {
    return this.eventMode === "static" || this.eventMode === "dynamic";
  },
  /**
   * Determines if the children to the displayObject can be clicked/touched
   * Setting this to false allows PixiJS to bypass a recursive `hitTest` function
   * @memberof PIXI.Container#
   */
  interactiveChildren: !0,
  /**
   * Interaction shape. Children will be hit first, then this shape will be checked.
   * Setting this will cause this shape to be checked in hit tests rather than the displayObject's bounds.
   * @example
   * import { Rectangle, Sprite } from 'pixi.js';
   *
   * const sprite = new Sprite(texture);
   * sprite.interactive = true;
   * sprite.hitArea = new Rectangle(0, 0, 100, 100);
   * @member {PIXI.IHitArea}
   * @memberof PIXI.DisplayObject#
   */
  hitArea: null,
  /**
   * Unlike `on` or `addListener` which are methods from EventEmitter, `addEventListener`
   * seeks to be compatible with the DOM's `addEventListener` with support for options.
   * **IMPORTANT:** _Only_ available if using the `@pixi/events` package.
   * @memberof PIXI.DisplayObject
   * @param type - The type of event to listen to.
   * @param listener - The listener callback or object.
   * @param options - Listener options, used for capture phase.
   * @example
   * // Tell the user whether they did a single, double, triple, or nth click.
   * button.addEventListener('click', {
   *     handleEvent(e): {
   *         let prefix;
   *
   *         switch (e.detail) {
   *             case 1: prefix = 'single'; break;
   *             case 2: prefix = 'double'; break;
   *             case 3: prefix = 'triple'; break;
   *             default: prefix = e.detail + 'th'; break;
   *         }
   *
   *         console.log('That was a ' + prefix + 'click');
   *     }
   * });
   *
   * // But skip the first click!
   * button.parent.addEventListener('click', function blockClickOnce(e) {
   *     e.stopImmediatePropagation();
   *     button.parent.removeEventListener('click', blockClickOnce, true);
   * }, {
   *     capture: true,
   * });
   */
  addEventListener(i, t, e) {
    const r = typeof e == "boolean" && e || typeof e == "object" && e.capture, s = typeof e == "object" ? e.signal : void 0, n = typeof e == "object" ? e.once === !0 : !1, a = typeof t == "function" ? void 0 : t;
    i = r ? `${i}capture` : i;
    const o = typeof t == "function" ? t : t.handleEvent, h = this;
    s && s.addEventListener("abort", () => {
      h.off(i, o, a);
    }), n ? h.once(i, o, a) : h.on(i, o, a);
  },
  /**
   * Unlike `off` or `removeListener` which are methods from EventEmitter, `removeEventListener`
   * seeks to be compatible with the DOM's `removeEventListener` with support for options.
   * **IMPORTANT:** _Only_ available if using the `@pixi/events` package.
   * @memberof PIXI.DisplayObject
   * @param type - The type of event the listener is bound to.
   * @param listener - The listener callback or object.
   * @param options - The original listener options. This is required to deregister a capture phase listener.
   */
  removeEventListener(i, t, e) {
    const r = typeof e == "boolean" && e || typeof e == "object" && e.capture, s = typeof t == "function" ? void 0 : t;
    i = r ? `${i}capture` : i, t = typeof t == "function" ? t : t.handleEvent, this.off(i, t, s);
  },
  /**
   * Dispatch the event on this {@link PIXI.DisplayObject} using the event's {@link PIXI.EventBoundary}.
   *
   * The target of the event is set to `this` and the `defaultPrevented` flag is cleared before dispatch.
   *
   * **IMPORTANT:** _Only_ available if using the `@pixi/events` package.
   * @memberof PIXI.DisplayObject
   * @param e - The event to dispatch.
   * @returns Whether the {@link PIXI.FederatedEvent.preventDefault preventDefault}() method was not invoked.
   * @example
   * // Reuse a click event!
   * button.dispatchEvent(clickEvent);
   */
  dispatchEvent(i) {
    if (!(i instanceof vi))
      throw new Error("DisplayObject cannot propagate events outside of the Federated Events API");
    return i.defaultPrevented = !1, i.path = null, i.target = this, i.manager.dispatchEvent(i), !i.defaultPrevented;
  }
};
st.mixin(Vg);
const zg = {
  /**
   *  Flag for if the object is accessible. If true AccessibilityManager will overlay a
   *   shadow div with attributes set
   * @member {boolean}
   * @memberof PIXI.DisplayObject#
   */
  accessible: !1,
  /**
   * Sets the title attribute of the shadow div
   * If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'
   * @member {?string}
   * @memberof PIXI.DisplayObject#
   */
  accessibleTitle: null,
  /**
   * Sets the aria-label attribute of the shadow div
   * @member {string}
   * @memberof PIXI.DisplayObject#
   */
  accessibleHint: null,
  /**
   * @member {number}
   * @memberof PIXI.DisplayObject#
   * @private
   * @todo Needs docs.
   */
  tabIndex: 0,
  /**
   * @member {boolean}
   * @memberof PIXI.DisplayObject#
   * @todo Needs docs.
   */
  _accessibleActive: !1,
  /**
   * @member {boolean}
   * @memberof PIXI.DisplayObject#
   * @todo Needs docs.
   */
  _accessibleDiv: null,
  /**
   * Specify the type of div the accessible layer is. Screen readers treat the element differently
   * depending on this type. Defaults to button.
   * @member {string}
   * @memberof PIXI.DisplayObject#
   * @default 'button'
   */
  accessibleType: "button",
  /**
   * Specify the pointer-events the accessible div will use
   * Defaults to auto.
   * @member {string}
   * @memberof PIXI.DisplayObject#
   * @default 'auto'
   */
  accessiblePointerEvents: "auto",
  /**
   * Setting to false will prevent any children inside this container to
   * be accessible. Defaults to true.
   * @member {boolean}
   * @memberof PIXI.DisplayObject#
   * @default true
   */
  accessibleChildren: !0,
  renderId: -1
};
st.mixin(zg);
const Xg = 9, ki = 100, Wg = 0, jg = 0, Eh = 2, wh = 1, Yg = -1e3, qg = -1e3, Kg = 2;
class Cu {
  // 2fps
  /**
   * @param {PIXI.CanvasRenderer|PIXI.Renderer} renderer - A reference to the current renderer
   */
  constructor(t) {
    this.debug = !1, this._isActive = !1, this._isMobileAccessibility = !1, this.pool = [], this.renderId = 0, this.children = [], this.androidUpdateCount = 0, this.androidUpdateFrequency = 500, this._hookDiv = null, (_e.tablet || _e.phone) && this.createTouchHook();
    const e = document.createElement("div");
    e.style.width = `${ki}px`, e.style.height = `${ki}px`, e.style.position = "absolute", e.style.top = `${Wg}px`, e.style.left = `${jg}px`, e.style.zIndex = Eh.toString(), this.div = e, this.renderer = t, this._onKeyDown = this._onKeyDown.bind(this), this._onMouseMove = this._onMouseMove.bind(this), globalThis.addEventListener("keydown", this._onKeyDown, !1);
  }
  /**
   * Value of `true` if accessibility is currently active and accessibility layers are showing.
   * @member {boolean}
   * @readonly
   */
  get isActive() {
    return this._isActive;
  }
  /**
   * Value of `true` if accessibility is enabled for touch devices.
   * @member {boolean}
   * @readonly
   */
  get isMobileAccessibility() {
    return this._isMobileAccessibility;
  }
  /**
   * Creates the touch hooks.
   * @private
   */
  createTouchHook() {
    const t = document.createElement("button");
    t.style.width = `${wh}px`, t.style.height = `${wh}px`, t.style.position = "absolute", t.style.top = `${Yg}px`, t.style.left = `${qg}px`, t.style.zIndex = Kg.toString(), t.style.backgroundColor = "#FF0000", t.title = "select to enable accessibility for this content", t.addEventListener("focus", () => {
      this._isMobileAccessibility = !0, this.activate(), this.destroyTouchHook();
    }), document.body.appendChild(t), this._hookDiv = t;
  }
  /**
   * Destroys the touch hooks.
   * @private
   */
  destroyTouchHook() {
    this._hookDiv && (document.body.removeChild(this._hookDiv), this._hookDiv = null);
  }
  /**
   * Activating will cause the Accessibility layer to be shown.
   * This is called when a user presses the tab key.
   * @private
   */
  activate() {
    var t;
    this._isActive || (this._isActive = !0, globalThis.document.addEventListener("mousemove", this._onMouseMove, !0), globalThis.removeEventListener("keydown", this._onKeyDown, !1), this.renderer.on("postrender", this.update, this), (t = this.renderer.view.parentNode) == null || t.appendChild(this.div));
  }
  /**
   * Deactivating will cause the Accessibility layer to be hidden.
   * This is called when a user moves the mouse.
   * @private
   */
  deactivate() {
    var t;
    !this._isActive || this._isMobileAccessibility || (this._isActive = !1, globalThis.document.removeEventListener("mousemove", this._onMouseMove, !0), globalThis.addEventListener("keydown", this._onKeyDown, !1), this.renderer.off("postrender", this.update), (t = this.div.parentNode) == null || t.removeChild(this.div));
  }
  /**
   * This recursive function will run through the scene graph and add any new accessible objects to the DOM layer.
   * @private
   * @param {PIXI.Container} displayObject - The DisplayObject to check.
   */
  updateAccessibleObjects(t) {
    if (!t.visible || !t.accessibleChildren)
      return;
    t.accessible && t.isInteractive() && (t._accessibleActive || this.addChild(t), t.renderId = this.renderId);
    const e = t.children;
    if (e)
      for (let r = 0; r < e.length; r++)
        this.updateAccessibleObjects(e[r]);
  }
  /**
   * Before each render this function will ensure that all divs are mapped correctly to their DisplayObjects.
   * @private
   */
  update() {
    const t = performance.now();
    if (_e.android.device && t < this.androidUpdateCount || (this.androidUpdateCount = t + this.androidUpdateFrequency, !this.renderer.renderingToScreen))
      return;
    this.renderer.lastObjectRendered && this.updateAccessibleObjects(this.renderer.lastObjectRendered);
    const { x: e, y: r, width: s, height: n } = this.renderer.view.getBoundingClientRect(), { width: a, height: o, resolution: h } = this.renderer, l = s / a * h, u = n / o * h;
    let c = this.div;
    c.style.left = `${e}px`, c.style.top = `${r}px`, c.style.width = `${a}px`, c.style.height = `${o}px`;
    for (let d = 0; d < this.children.length; d++) {
      const f = this.children[d];
      if (f.renderId !== this.renderId)
        f._accessibleActive = !1, Pr(this.children, d, 1), this.div.removeChild(f._accessibleDiv), this.pool.push(f._accessibleDiv), f._accessibleDiv = null, d--;
      else {
        c = f._accessibleDiv;
        let p = f.hitArea;
        const m = f.worldTransform;
        f.hitArea ? (c.style.left = `${(m.tx + p.x * m.a) * l}px`, c.style.top = `${(m.ty + p.y * m.d) * u}px`, c.style.width = `${p.width * m.a * l}px`, c.style.height = `${p.height * m.d * u}px`) : (p = f.getBounds(), this.capHitArea(p), c.style.left = `${p.x * l}px`, c.style.top = `${p.y * u}px`, c.style.width = `${p.width * l}px`, c.style.height = `${p.height * u}px`, c.title !== f.accessibleTitle && f.accessibleTitle !== null && (c.title = f.accessibleTitle), c.getAttribute("aria-label") !== f.accessibleHint && f.accessibleHint !== null && c.setAttribute("aria-label", f.accessibleHint)), (f.accessibleTitle !== c.title || f.tabIndex !== c.tabIndex) && (c.title = f.accessibleTitle, c.tabIndex = f.tabIndex, this.debug && this.updateDebugHTML(c));
      }
    }
    this.renderId++;
  }
  /**
   * private function that will visually add the information to the
   * accessability div
   * @param {HTMLElement} div -
   */
  updateDebugHTML(t) {
    t.innerHTML = `type: ${t.type}</br> title : ${t.title}</br> tabIndex: ${t.tabIndex}`;
  }
  /**
   * Adjust the hit area based on the bounds of a display object
   * @param {PIXI.Rectangle} hitArea - Bounds of the child
   */
  capHitArea(t) {
    t.x < 0 && (t.width += t.x, t.x = 0), t.y < 0 && (t.height += t.y, t.y = 0);
    const { width: e, height: r } = this.renderer;
    t.x + t.width > e && (t.width = e - t.x), t.y + t.height > r && (t.height = r - t.y);
  }
  /**
   * Adds a DisplayObject to the accessibility manager
   * @private
   * @param {PIXI.DisplayObject} displayObject - The child to make accessible.
   */
  addChild(t) {
    let e = this.pool.pop();
    e || (e = document.createElement("button"), e.style.width = `${ki}px`, e.style.height = `${ki}px`, e.style.backgroundColor = this.debug ? "rgba(255,255,255,0.5)" : "transparent", e.style.position = "absolute", e.style.zIndex = Eh.toString(), e.style.borderStyle = "none", navigator.userAgent.toLowerCase().includes("chrome") ? e.setAttribute("aria-live", "off") : e.setAttribute("aria-live", "polite"), navigator.userAgent.match(/rv:.*Gecko\//) ? e.setAttribute("aria-relevant", "additions") : e.setAttribute("aria-relevant", "text"), e.addEventListener("click", this._onClick.bind(this)), e.addEventListener("focus", this._onFocus.bind(this)), e.addEventListener("focusout", this._onFocusOut.bind(this))), e.style.pointerEvents = t.accessiblePointerEvents, e.type = t.accessibleType, t.accessibleTitle && t.accessibleTitle !== null ? e.title = t.accessibleTitle : (!t.accessibleHint || t.accessibleHint === null) && (e.title = `displayObject ${t.tabIndex}`), t.accessibleHint && t.accessibleHint !== null && e.setAttribute("aria-label", t.accessibleHint), this.debug && this.updateDebugHTML(e), t._accessibleActive = !0, t._accessibleDiv = e, e.displayObject = t, this.children.push(t), this.div.appendChild(t._accessibleDiv), t._accessibleDiv.tabIndex = t.tabIndex;
  }
  /**
   * Dispatch events with the EventSystem.
   * @param e
   * @param type
   * @private
   */
  _dispatchEvent(t, e) {
    const { displayObject: r } = t.target, s = this.renderer.events.rootBoundary, n = Object.assign(new vi(s), { target: r });
    s.rootTarget = this.renderer.lastObjectRendered, e.forEach((a) => s.dispatchEvent(n, a));
  }
  /**
   * Maps the div button press to pixi's EventSystem (click)
   * @private
   * @param {MouseEvent} e - The click event.
   */
  _onClick(t) {
    this._dispatchEvent(t, ["click", "pointertap", "tap"]);
  }
  /**
   * Maps the div focus events to pixi's EventSystem (mouseover)
   * @private
   * @param {FocusEvent} e - The focus event.
   */
  _onFocus(t) {
    t.target.getAttribute("aria-live") || t.target.setAttribute("aria-live", "assertive"), this._dispatchEvent(t, ["mouseover"]);
  }
  /**
   * Maps the div focus events to pixi's EventSystem (mouseout)
   * @private
   * @param {FocusEvent} e - The focusout event.
   */
  _onFocusOut(t) {
    t.target.getAttribute("aria-live") || t.target.setAttribute("aria-live", "polite"), this._dispatchEvent(t, ["mouseout"]);
  }
  /**
   * Is called when a key is pressed
   * @private
   * @param {KeyboardEvent} e - The keydown event.
   */
  _onKeyDown(t) {
    t.keyCode === Xg && this.activate();
  }
  /**
   * Is called when the mouse moves across the renderer element
   * @private
   * @param {MouseEvent} e - The mouse event.
   */
  _onMouseMove(t) {
    t.movementX === 0 && t.movementY === 0 || this.deactivate();
  }
  /** Destroys the accessibility manager */
  destroy() {
    this.destroyTouchHook(), this.div = null, globalThis.document.removeEventListener("mousemove", this._onMouseMove, !0), globalThis.removeEventListener("keydown", this._onKeyDown), this.pool = null, this.children = null, this.renderer = null;
  }
}
Cu.extension = {
  name: "accessibility",
  type: [
    F.RendererPlugin,
    F.CanvasRendererPlugin
  ]
};
k.add(Cu);
const Iu = class xa {
  /**
   * @param options - The optional application and renderer parameters.
   */
  constructor(t) {
    this.stage = new Ft(), t = Object.assign({
      forceCanvas: !1
    }, t), this.renderer = cg(t), xa._plugins.forEach((e) => {
      e.init.call(this, t);
    });
  }
  /** Render the current stage. */
  render() {
    this.renderer.render(this.stage);
  }
  /**
   * Reference to the renderer's canvas element.
   * @member {PIXI.ICanvas}
   * @readonly
   */
  get view() {
    var t;
    return (t = this.renderer) == null ? void 0 : t.view;
  }
  /**
   * Reference to the renderer's screen rectangle. Its safe to use as `filterArea` or `hitArea` for the whole screen.
   * @member {PIXI.Rectangle}
   * @readonly
   */
  get screen() {
    var t;
    return (t = this.renderer) == null ? void 0 : t.screen;
  }
  /**
   * Destroy and don't use after this.
   * @param {boolean} [removeView=false] - Automatically remove canvas from DOM.
   * @param {object|boolean} [stageOptions] - Options parameter. A boolean will act as if all options
   *  have been set to that value
   * @param {boolean} [stageOptions.children=false] - if set to true, all the children will have their destroy
   *  method called as well. 'stageOptions' will be passed on to those calls.
   * @param {boolean} [stageOptions.texture=false] - Only used for child Sprites if stageOptions.children is set
   *  to true. Should it destroy the texture of the child sprite
   * @param {boolean} [stageOptions.baseTexture=false] - Only used for child Sprites if stageOptions.children is set
   *  to true. Should it destroy the base texture of the child sprite
   */
  destroy(t, e) {
    const r = xa._plugins.slice(0);
    r.reverse(), r.forEach((s) => {
      s.destroy.call(this);
    }), this.stage.destroy(e), this.stage = null, this.renderer.destroy(t), this.renderer = null;
  }
};
Iu._plugins = [];
let Pu = Iu;
k.handleByList(F.Application, Pu._plugins);
class Ru {
  /**
   * Initialize the plugin with scope of application instance
   * @static
   * @private
   * @param {object} [options] - See application options
   */
  static init(t) {
    Object.defineProperty(
      this,
      "resizeTo",
      /**
       * The HTML element or window to automatically resize the
       * renderer's view element to match width and height.
       * @member {Window|HTMLElement}
       * @name resizeTo
       * @memberof PIXI.Application#
       */
      {
        set(e) {
          globalThis.removeEventListener("resize", this.queueResize), this._resizeTo = e, e && (globalThis.addEventListener("resize", this.queueResize), this.resize());
        },
        get() {
          return this._resizeTo;
        }
      }
    ), this.queueResize = () => {
      this._resizeTo && (this.cancelResize(), this._resizeId = requestAnimationFrame(() => this.resize()));
    }, this.cancelResize = () => {
      this._resizeId && (cancelAnimationFrame(this._resizeId), this._resizeId = null);
    }, this.resize = () => {
      if (!this._resizeTo)
        return;
      this.cancelResize();
      let e, r;
      if (this._resizeTo === globalThis.window)
        e = globalThis.innerWidth, r = globalThis.innerHeight;
      else {
        const { clientWidth: s, clientHeight: n } = this._resizeTo;
        e = s, r = n;
      }
      this.renderer.resize(e, r), this.render();
    }, this._resizeId = null, this._resizeTo = null, this.resizeTo = t.resizeTo || null;
  }
  /**
   * Clean up the ticker, scoped to application
   * @static
   * @private
   */
  static destroy() {
    globalThis.removeEventListener("resize", this.queueResize), this.cancelResize(), this.cancelResize = null, this.queueResize = null, this.resizeTo = null, this.resize = null;
  }
}
Ru.extension = F.Application;
k.add(Ru);
const Ah = {
  loader: F.LoadParser,
  resolver: F.ResolveParser,
  cache: F.CacheParser,
  detection: F.DetectionParser
};
k.handle(F.Asset, (i) => {
  const t = i.ref;
  Object.entries(Ah).filter(([e]) => !!t[e]).forEach(([e, r]) => k.add(Object.assign(
    t[e],
    // Allow the function to optionally define it's own
    // ExtensionMetadata, the use cases here is priority for LoaderParsers
    { extension: t[e].extension ?? r }
  )));
}, (i) => {
  const t = i.ref;
  Object.keys(Ah).filter((e) => !!t[e]).forEach((e) => k.remove(t[e]));
});
class Zg {
  /**
   * @param loader
   * @param verbose - should the loader log to the console
   */
  constructor(t, e = !1) {
    this._loader = t, this._assetList = [], this._isLoading = !1, this._maxConcurrent = 1, this.verbose = e;
  }
  /**
   * Adds an array of assets to load.
   * @param assetUrls - assets to load
   */
  add(t) {
    t.forEach((e) => {
      this._assetList.push(e);
    }), this.verbose && console.log("[BackgroundLoader] assets: ", this._assetList), this._isActive && !this._isLoading && this._next();
  }
  /**
   * Loads the next set of assets. Will try to load as many assets as it can at the same time.
   *
   * The max assets it will try to load at one time will be 4.
   */
  async _next() {
    if (this._assetList.length && this._isActive) {
      this._isLoading = !0;
      const t = [], e = Math.min(this._assetList.length, this._maxConcurrent);
      for (let r = 0; r < e; r++)
        t.push(this._assetList.pop());
      await this._loader.load(t), this._isLoading = !1, this._next();
    }
  }
  /**
   * Activate/Deactivate the loading. If set to true then it will immediately continue to load the next asset.
   * @returns whether the class is active
   */
  get active() {
    return this._isActive;
  }
  set active(t) {
    this._isActive !== t && (this._isActive = t, t && !this._isLoading && this._next());
  }
}
function Vr(i, t) {
  if (Array.isArray(t)) {
    for (const e of t)
      if (i.startsWith(`data:${e}`))
        return !0;
    return !1;
  }
  return i.startsWith(`data:${t}`);
}
function Ve(i, t) {
  const e = i.split("?")[0], r = gt.extname(e).toLowerCase();
  return Array.isArray(t) ? t.includes(r) : r === t;
}
const zt = (i, t, e = !1) => (Array.isArray(i) || (i = [i]), t ? i.map((r) => typeof r == "string" || e ? t(r) : r) : i), ba = (i, t) => {
  const e = t.split("?")[1];
  return e && (i += `?${e}`), i;
};
function Mu(i, t, e, r, s) {
  const n = t[e];
  for (let a = 0; a < n.length; a++) {
    const o = n[a];
    e < t.length - 1 ? Mu(i.replace(r[e], o), t, e + 1, r, s) : s.push(i.replace(r[e], o));
  }
}
function Qg(i) {
  const t = /\{(.*?)\}/g, e = i.match(t), r = [];
  if (e) {
    const s = [];
    e.forEach((n) => {
      const a = n.substring(1, n.length - 1).split(",");
      s.push(a);
    }), Mu(i, s, 0, e, r);
  } else
    r.push(i);
  return r;
}
const Es = (i) => !Array.isArray(i);
class Jg {
  constructor() {
    this._parsers = [], this._cache = /* @__PURE__ */ new Map(), this._cacheMap = /* @__PURE__ */ new Map();
  }
  /** Clear all entries. */
  reset() {
    this._cacheMap.clear(), this._cache.clear();
  }
  /**
   * Check if the key exists
   * @param key - The key to check
   */
  has(t) {
    return this._cache.has(t);
  }
  /**
   * Fetch entry by key
   * @param key - The key of the entry to get
   */
  get(t) {
    const e = this._cache.get(t);
    return e || console.warn(`[Assets] Asset id ${t} was not found in the Cache`), e;
  }
  /**
   * Set a value by key or keys name
   * @param key - The key or keys to set
   * @param value - The value to store in the cache or from which cacheable assets will be derived.
   */
  set(t, e) {
    const r = zt(t);
    let s;
    for (let o = 0; o < this.parsers.length; o++) {
      const h = this.parsers[o];
      if (h.test(e)) {
        s = h.getCacheableAssets(r, e);
        break;
      }
    }
    s || (s = {}, r.forEach((o) => {
      s[o] = e;
    }));
    const n = Object.keys(s), a = {
      cacheKeys: n,
      keys: r
    };
    if (r.forEach((o) => {
      this._cacheMap.set(o, a);
    }), n.forEach((o) => {
      this._cache.has(o) && this._cache.get(o) !== e && console.warn("[Cache] already has key:", o), this._cache.set(o, s[o]);
    }), e instanceof O) {
      const o = e;
      r.forEach((h) => {
        o.baseTexture !== O.EMPTY.baseTexture && W.addToCache(o.baseTexture, h), O.addToCache(o, h);
      });
    }
  }
  /**
   * Remove entry by key
   *
   * This function will also remove any associated alias from the cache also.
   * @param key - The key of the entry to remove
   */
  remove(t) {
    if (!this._cacheMap.has(t)) {
      console.warn(`[Assets] Asset id ${t} was not found in the Cache`);
      return;
    }
    const e = this._cacheMap.get(t);
    e.cacheKeys.forEach((r) => {
      this._cache.delete(r);
    }), e.keys.forEach((r) => {
      this._cacheMap.delete(r);
    });
  }
  /** All loader parsers registered */
  get parsers() {
    return this._parsers;
  }
}
const tr = new Jg();
class ty {
  constructor() {
    this._parsers = [], this._parsersValidated = !1, this.parsers = new Proxy(this._parsers, {
      set: (t, e, r) => (this._parsersValidated = !1, t[e] = r, !0)
    }), this.promiseCache = {};
  }
  /** function used for testing */
  reset() {
    this._parsersValidated = !1, this.promiseCache = {};
  }
  /**
   * Used internally to generate a promise for the asset to be loaded.
   * @param url - The URL to be loaded
   * @param data - any custom additional information relevant to the asset being loaded
   * @returns - a promise that will resolve to an Asset for example a Texture of a JSON object
   */
  _getLoadPromiseAndParser(t, e) {
    const r = {
      promise: null,
      parser: null
    };
    return r.promise = (async () => {
      var a, o;
      let s = null, n = null;
      if (e.loadParser && (n = this._parserHash[e.loadParser], n || console.warn(`[Assets] specified load parser "${e.loadParser}" not found while loading ${t}`)), !n) {
        for (let h = 0; h < this.parsers.length; h++) {
          const l = this.parsers[h];
          if (l.load && ((a = l.test) != null && a.call(l, t, e, this))) {
            n = l;
            break;
          }
        }
        if (!n)
          return console.warn(`[Assets] ${t} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`), null;
      }
      s = await n.load(t, e, this), r.parser = n;
      for (let h = 0; h < this.parsers.length; h++) {
        const l = this.parsers[h];
        l.parse && l.parse && await ((o = l.testParse) == null ? void 0 : o.call(l, s, e, this)) && (s = await l.parse(s, e, this) || s, r.parser = l);
      }
      return s;
    })(), r;
  }
  async load(t, e) {
    this._parsersValidated || this._validateParsers();
    let r = 0;
    const s = {}, n = Es(t), a = zt(t, (l) => ({
      alias: [l],
      src: l
    })), o = a.length, h = a.map(async (l) => {
      const u = gt.toAbsolute(l.src);
      if (!s[l.src])
        try {
          this.promiseCache[u] || (this.promiseCache[u] = this._getLoadPromiseAndParser(u, l)), s[l.src] = await this.promiseCache[u].promise, e && e(++r / o);
        } catch (c) {
          throw delete this.promiseCache[u], delete s[l.src], new Error(`[Loader.load] Failed to load ${u}.
${c}`);
        }
    });
    return await Promise.all(h), n ? s[a[0].src] : s;
  }
  /**
   * Unloads one or more assets. Any unloaded assets will be destroyed, freeing up memory for your app.
   * The parser that created the asset, will be the one that unloads it.
   * @example
   * // Single asset:
   * const asset = await Loader.load('cool.png');
   *
   * await Loader.unload('cool.png');
   *
   * console.log(asset.destroyed); // true
   * @param assetsToUnloadIn - urls that you want to unload, or a single one!
   */
  async unload(t) {
    const e = zt(t, (r) => ({
      alias: [r],
      src: r
    })).map(async (r) => {
      var a, o;
      const s = gt.toAbsolute(r.src), n = this.promiseCache[s];
      if (n) {
        const h = await n.promise;
        delete this.promiseCache[s], (o = (a = n.parser) == null ? void 0 : a.unload) == null || o.call(a, h, r, this);
      }
    });
    await Promise.all(e);
  }
  /** validates our parsers, right now it only checks for name conflicts but we can add more here as required! */
  _validateParsers() {
    this._parsersValidated = !0, this._parserHash = this._parsers.filter((t) => t.name).reduce((t, e) => (t[e.name] && console.warn(`[Assets] loadParser name conflict "${e.name}"`), { ...t, [e.name]: e }), {});
  }
}
var qt = /* @__PURE__ */ ((i) => (i[i.Low = 0] = "Low", i[i.Normal = 1] = "Normal", i[i.High = 2] = "High", i))(qt || {});
const ey = ".json", ry = "application/json", iy = {
  extension: {
    type: F.LoadParser,
    priority: qt.Low
  },
  name: "loadJson",
  test(i) {
    return Vr(i, ry) || Ve(i, ey);
  },
  async load(i) {
    return await (await L.ADAPTER.fetch(i)).json();
  }
};
k.add(iy);
const sy = ".txt", ny = "text/plain", ay = {
  name: "loadTxt",
  extension: {
    type: F.LoadParser,
    priority: qt.Low
  },
  test(i) {
    return Vr(i, ny) || Ve(i, sy);
  },
  async load(i) {
    return await (await L.ADAPTER.fetch(i)).text();
  }
};
k.add(ay);
const oy = [
  "normal",
  "bold",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900"
], hy = [".ttf", ".otf", ".woff", ".woff2"], ly = [
  "font/ttf",
  "font/otf",
  "font/woff",
  "font/woff2"
], uy = /^(--|-?[A-Z_])[0-9A-Z_-]*$/i;
function cy(i) {
  const t = gt.extname(i), e = gt.basename(i, t).replace(/(-|_)/g, " ").toLowerCase().split(" ").map((n) => n.charAt(0).toUpperCase() + n.slice(1));
  let r = e.length > 0;
  for (const n of e)
    if (!n.match(uy)) {
      r = !1;
      break;
    }
  let s = e.join(" ");
  return r || (s = `"${s.replace(/[\\"]/g, "\\$&")}"`), s;
}
const dy = /^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;
function fy(i) {
  return dy.test(i) ? i : encodeURI(i);
}
const py = {
  extension: {
    type: F.LoadParser,
    priority: qt.Low
  },
  name: "loadWebFont",
  test(i) {
    return Vr(i, ly) || Ve(i, hy);
  },
  async load(i, t) {
    var r, s, n;
    const e = L.ADAPTER.getFontFaceSet();
    if (e) {
      const a = [], o = ((r = t.data) == null ? void 0 : r.family) ?? cy(i), h = ((n = (s = t.data) == null ? void 0 : s.weights) == null ? void 0 : n.filter((u) => oy.includes(u))) ?? ["normal"], l = t.data ?? {};
      for (let u = 0; u < h.length; u++) {
        const c = h[u], d = new FontFace(o, `url(${fy(i)})`, {
          ...l,
          weight: c
        });
        await d.load(), e.add(d), a.push(d);
      }
      return a.length === 1 ? a[0] : a;
    }
    return console.warn("[loadWebFont] FontFace API is not supported. Skipping loading font"), null;
  },
  unload(i) {
    (Array.isArray(i) ? i : [i]).forEach((t) => L.ADAPTER.getFontFaceSet().delete(t));
  }
};
k.add(py);
const my = `(function() {
  "use strict";
  const WHITE_PNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";
  async function checkImageBitmap() {
    try {
      if (typeof createImageBitmap != "function")
        return !1;
      const imageBlob = await (await fetch(WHITE_PNG)).blob(), imageBitmap = await createImageBitmap(imageBlob);
      return imageBitmap.width === 1 && imageBitmap.height === 1;
    } catch {
      return !1;
    }
  }
  checkImageBitmap().then((result) => {
    self.postMessage(result);
  });
})();
`;
let Br = null, Ta = class extends Worker {
  constructor() {
    Br || (Br = URL.createObjectURL(new Blob([my], { type: "application/javascript" }))), super(Br);
  }
};
Ta.revokeObjectURL = function() {
  Br && (URL.revokeObjectURL(Br), Br = null);
};
const gy = `(function() {
  "use strict";
  async function loadImageBitmap(url) {
    const response = await fetch(url);
    if (!response.ok)
      throw new Error(\`[WorkerManager.loadImageBitmap] Failed to fetch \${url}: \${response.status} \${response.statusText}\`);
    const imageBlob = await response.blob();
    return await createImageBitmap(imageBlob);
  }
  self.onmessage = async (event) => {
    try {
      const imageBitmap = await loadImageBitmap(event.data.data[0]);
      self.postMessage({
        data: imageBitmap,
        uuid: event.data.uuid,
        id: event.data.id
      }, [imageBitmap]);
    } catch (e) {
      self.postMessage({
        error: e,
        uuid: event.data.uuid,
        id: event.data.id
      });
    }
  };
})();
`;
let Dr = null;
class Bu extends Worker {
  constructor() {
    Dr || (Dr = URL.createObjectURL(new Blob([gy], { type: "application/javascript" }))), super(Dr);
  }
}
Bu.revokeObjectURL = function() {
  Dr && (URL.revokeObjectURL(Dr), Dr = null);
};
let Sh = 0, En;
class yy {
  constructor() {
    this._initialized = !1, this._createdWorkers = 0, this.workerPool = [], this.queue = [], this.resolveHash = {};
  }
  isImageBitmapSupported() {
    return this._isImageBitmapSupported !== void 0 ? this._isImageBitmapSupported : (this._isImageBitmapSupported = new Promise((t) => {
      const e = new Ta();
      e.addEventListener("message", (r) => {
        e.terminate(), Ta.revokeObjectURL(), t(r.data);
      });
    }), this._isImageBitmapSupported);
  }
  loadImageBitmap(t) {
    return this._run("loadImageBitmap", [t]);
  }
  async _initWorkers() {
    this._initialized || (this._initialized = !0);
  }
  getWorker() {
    En === void 0 && (En = navigator.hardwareConcurrency || 4);
    let t = this.workerPool.pop();
    return !t && this._createdWorkers < En && (this._createdWorkers++, t = new Bu(), t.addEventListener("message", (e) => {
      this.complete(e.data), this.returnWorker(e.target), this.next();
    })), t;
  }
  returnWorker(t) {
    this.workerPool.push(t);
  }
  complete(t) {
    t.error !== void 0 ? this.resolveHash[t.uuid].reject(t.error) : this.resolveHash[t.uuid].resolve(t.data), this.resolveHash[t.uuid] = null;
  }
  async _run(t, e) {
    await this._initWorkers();
    const r = new Promise((s, n) => {
      this.queue.push({ id: t, arguments: e, resolve: s, reject: n });
    });
    return this.next(), r;
  }
  next() {
    if (!this.queue.length)
      return;
    const t = this.getWorker();
    if (!t)
      return;
    const e = this.queue.pop(), r = e.id;
    this.resolveHash[Sh] = { resolve: e.resolve, reject: e.reject }, t.postMessage({
      data: e.arguments,
      uuid: Sh++,
      id: r
    });
  }
}
const Ch = new yy();
function xi(i, t, e) {
  i.resource.internal = !0;
  const r = new O(i), s = () => {
    delete t.promiseCache[e], tr.has(e) && tr.remove(e);
  };
  return r.baseTexture.once("destroyed", () => {
    e in t.promiseCache && (console.warn("[Assets] A BaseTexture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the BaseTexture."), s());
  }), r.once("destroyed", () => {
    i.destroyed || (console.warn("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."), s());
  }), r;
}
const _y = [".jpeg", ".jpg", ".png", ".webp", ".avif"], vy = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/avif"
];
async function xy(i) {
  const t = await L.ADAPTER.fetch(i);
  if (!t.ok)
    throw new Error(`[loadImageBitmap] Failed to fetch ${i}: ${t.status} ${t.statusText}`);
  const e = await t.blob();
  return await createImageBitmap(e);
}
const Us = {
  name: "loadTextures",
  extension: {
    type: F.LoadParser,
    priority: qt.High
  },
  config: {
    preferWorkers: !0,
    preferCreateImageBitmap: !0,
    crossOrigin: "anonymous"
  },
  test(i) {
    return Vr(i, vy) || Ve(i, _y);
  },
  async load(i, t, e) {
    var o;
    const r = globalThis.createImageBitmap && this.config.preferCreateImageBitmap;
    let s;
    r ? this.config.preferWorkers && await Ch.isImageBitmapSupported() ? s = await Ch.loadImageBitmap(i) : s = await xy(i) : s = await new Promise((h, l) => {
      const u = new Image();
      u.crossOrigin = this.config.crossOrigin, u.src = i, u.complete ? h(u) : (u.onload = () => h(u), u.onerror = (c) => l(c));
    });
    const n = { ...t.data };
    n.resolution ?? (n.resolution = Ae(i)), r && ((o = n.resourceOptions) == null ? void 0 : o.ownsImageBitmap) === void 0 && (n.resourceOptions = { ...n.resourceOptions }, n.resourceOptions.ownsImageBitmap = !0);
    const a = new W(s, n);
    return a.resource.src = i, xi(a, e, i);
  },
  unload(i) {
    i.destroy(!0);
  }
};
k.add(Us);
const by = ".svg", Ty = "image/svg+xml", Ey = {
  extension: {
    type: F.LoadParser,
    priority: qt.High
  },
  name: "loadSVG",
  test(i) {
    return Vr(i, Ty) || Ve(i, by);
  },
  async testParse(i) {
    return da.test(i);
  },
  async parse(i, t, e) {
    var n;
    const r = new da(i, (n = t == null ? void 0 : t.data) == null ? void 0 : n.resourceOptions);
    await r.load();
    const s = new W(r, {
      resolution: Ae(i),
      ...t == null ? void 0 : t.data
    });
    return s.resource.src = t.src, xi(s, e, t.src);
  },
  async load(i, t) {
    return (await L.ADAPTER.fetch(i)).text();
  },
  unload: Us.unload
};
k.add(Ey);
const wy = [".mp4", ".m4v", ".webm", ".ogv"], Ay = [
  "video/mp4",
  "video/webm",
  "video/ogg"
], Sy = {
  name: "loadVideo",
  extension: {
    type: F.LoadParser,
    priority: qt.High
  },
  config: {
    defaultAutoPlay: !0,
    defaultUpdateFPS: 0,
    defaultLoop: !1,
    defaultMuted: !1,
    defaultPlaysinline: !0
  },
  test(i) {
    return Vr(i, Ay) || Ve(i, wy);
  },
  async load(i, t, e) {
    var a;
    let r;
    const s = await (await L.ADAPTER.fetch(i)).blob(), n = URL.createObjectURL(s);
    try {
      const o = {
        autoPlay: this.config.defaultAutoPlay,
        updateFPS: this.config.defaultUpdateFPS,
        loop: this.config.defaultLoop,
        muted: this.config.defaultMuted,
        playsinline: this.config.defaultPlaysinline,
        ...(a = t == null ? void 0 : t.data) == null ? void 0 : a.resourceOptions,
        autoLoad: !0
      }, h = new vu(n, o);
      await h.load();
      const l = new W(h, {
        alphaMode: await Lp(),
        resolution: Ae(i),
        ...t == null ? void 0 : t.data
      });
      l.resource.src = i, r = xi(l, e, i), r.baseTexture.once("destroyed", () => {
        URL.revokeObjectURL(n);
      });
    } catch (o) {
      throw URL.revokeObjectURL(n), o;
    }
    return r;
  },
  unload(i) {
    i.destroy(!0);
  }
};
k.add(Sy);
class Cy {
  constructor() {
    this._defaultBundleIdentifierOptions = {
      connector: "-",
      createBundleAssetId: (t, e) => `${t}${this._bundleIdConnector}${e}`,
      extractAssetIdFromBundle: (t, e) => e.replace(`${t}${this._bundleIdConnector}`, "")
    }, this._bundleIdConnector = this._defaultBundleIdentifierOptions.connector, this._createBundleAssetId = this._defaultBundleIdentifierOptions.createBundleAssetId, this._extractAssetIdFromBundle = this._defaultBundleIdentifierOptions.extractAssetIdFromBundle, this._assetMap = {}, this._preferredOrder = [], this._parsers = [], this._resolverHash = {}, this._bundles = {};
  }
  /**
   * Override how the resolver deals with generating bundle ids.
   * must be called before any bundles are added
   * @param bundleIdentifier - the bundle identifier options
   */
  setBundleIdentifier(t) {
    if (this._bundleIdConnector = t.connector ?? this._bundleIdConnector, this._createBundleAssetId = t.createBundleAssetId ?? this._createBundleAssetId, this._extractAssetIdFromBundle = t.extractAssetIdFromBundle ?? this._extractAssetIdFromBundle, this._extractAssetIdFromBundle("foo", this._createBundleAssetId("foo", "bar")) !== "bar")
      throw new Error("[Resolver] GenerateBundleAssetId are not working correctly");
  }
  /**
   * Let the resolver know which assets you prefer to use when resolving assets.
   * Multiple prefer user defined rules can be added.
   * @example
   * resolver.prefer({
   *     // first look for something with the correct format, and then then correct resolution
   *     priority: ['format', 'resolution'],
   *     params:{
   *         format:'webp', // prefer webp images
   *         resolution: 2, // prefer a resolution of 2
   *     }
   * })
   * resolver.add('foo', ['bar@2x.webp', 'bar@2x.png', 'bar.webp', 'bar.png']);
   * resolver.resolveUrl('foo') // => 'bar@2x.webp'
   * @param preferOrders - the prefer options
   */
  prefer(...t) {
    t.forEach((e) => {
      this._preferredOrder.push(e), e.priority || (e.priority = Object.keys(e.params));
    }), this._resolverHash = {};
  }
  /**
   * Set the base path to prepend to all urls when resolving
   * @example
   * resolver.basePath = 'https://home.com/';
   * resolver.add('foo', 'bar.ong');
   * resolver.resolveUrl('foo', 'bar.png'); // => 'https://home.com/bar.png'
   * @param basePath - the base path to use
   */
  set basePath(t) {
    this._basePath = t;
  }
  get basePath() {
    return this._basePath;
  }
  /**
   * Set the root path for root-relative URLs. By default the `basePath`'s root is used. If no `basePath` is set, then the
   * default value for browsers is `window.location.origin`
   * @example
   * // Application hosted on https://home.com/some-path/index.html
   * resolver.basePath = 'https://home.com/some-path/';
   * resolver.rootPath = 'https://home.com/';
   * resolver.add('foo', '/bar.png');
   * resolver.resolveUrl('foo', '/bar.png'); // => 'https://home.com/bar.png'
   * @param rootPath - the root path to use
   */
  set rootPath(t) {
    this._rootPath = t;
  }
  get rootPath() {
    return this._rootPath;
  }
  /**
   * All the active URL parsers that help the parser to extract information and create
   * an asset object-based on parsing the URL itself.
   *
   * Can be added using the extensions API
   * @example
   * resolver.add('foo', [
   *     {
   *         resolution: 2,
   *         format: 'png',
   *         src: 'image@2x.png',
   *     },
   *     {
   *         resolution:1,
   *         format:'png',
   *         src: 'image.png',
   *     },
   * ]);
   *
   * // With a url parser the information such as resolution and file format could extracted from the url itself:
   * extensions.add({
   *     extension: ExtensionType.ResolveParser,
   *     test: loadTextures.test, // test if url ends in an image
   *     parse: (value: string) =>
   *     ({
   *         resolution: parseFloat(settings.RETINA_PREFIX.exec(value)?.[1] ?? '1'),
   *         format: value.split('.').pop(),
   *         src: value,
   *     }),
   * });
   *
   * // Now resolution and format can be extracted from the url
   * resolver.add('foo', [
   *     'image@2x.png',
   *     'image.png',
   * ]);
   */
  get parsers() {
    return this._parsers;
  }
  /** Used for testing, this resets the resolver to its initial state */
  reset() {
    this.setBundleIdentifier(this._defaultBundleIdentifierOptions), this._assetMap = {}, this._preferredOrder = [], this._resolverHash = {}, this._rootPath = null, this._basePath = null, this._manifest = null, this._bundles = {}, this._defaultSearchParams = null;
  }
  /**
   * Sets the default URL search parameters for the URL resolver. The urls can be specified as a string or an object.
   * @param searchParams - the default url parameters to append when resolving urls
   */
  setDefaultSearchParams(t) {
    if (typeof t == "string")
      this._defaultSearchParams = t;
    else {
      const e = t;
      this._defaultSearchParams = Object.keys(e).map((r) => `${encodeURIComponent(r)}=${encodeURIComponent(e[r])}`).join("&");
    }
  }
  /**
   * Returns the aliases for a given asset
   * @param asset - the asset to get the aliases for
   */
  getAlias(t) {
    const { alias: e, name: r, src: s, srcs: n } = t;
    return zt(
      e || r || s || n,
      (a) => typeof a == "string" ? a : Array.isArray(a) ? a.map((o) => (o == null ? void 0 : o.src) ?? (o == null ? void 0 : o.srcs) ?? o) : a != null && a.src || a != null && a.srcs ? a.src ?? a.srcs : a,
      !0
    );
  }
  /**
   * Add a manifest to the asset resolver. This is a nice way to add all the asset information in one go.
   * generally a manifest would be built using a tool.
   * @param manifest - the manifest to add to the resolver
   */
  addManifest(t) {
    this._manifest && console.warn("[Resolver] Manifest already exists, this will be overwritten"), this._manifest = t, t.bundles.forEach((e) => {
      this.addBundle(e.name, e.assets);
    });
  }
  /**
   * This adds a bundle of assets in one go so that you can resolve them as a group.
   * For example you could add a bundle for each screen in you pixi app
   * @example
   * resolver.addBundle('animals', {
   *     bunny: 'bunny.png',
   *     chicken: 'chicken.png',
   *     thumper: 'thumper.png',
   * });
   *
   * const resolvedAssets = await resolver.resolveBundle('animals');
   * @param bundleId - The id of the bundle to add
   * @param assets - A record of the asset or assets that will be chosen from when loading via the specified key
   */
  addBundle(t, e) {
    const r = [];
    Array.isArray(e) ? e.forEach((s) => {
      const n = s.src ?? s.srcs, a = s.alias ?? s.name;
      let o;
      if (typeof a == "string") {
        const h = this._createBundleAssetId(t, a);
        r.push(h), o = [a, h];
      } else {
        const h = a.map((l) => this._createBundleAssetId(t, l));
        r.push(...h), o = [...a, ...h];
      }
      this.add({
        ...s,
        alias: o,
        src: n
      });
    }) : Object.keys(e).forEach((s) => {
      const n = [s, this._createBundleAssetId(t, s)];
      if (typeof e[s] == "string")
        this.add({
          alias: n,
          src: e[s]
        });
      else if (Array.isArray(e[s]))
        this.add({
          alias: n,
          src: e[s]
        });
      else {
        const a = e[s], o = a.src ?? a.srcs;
        this.add({
          ...a,
          alias: n,
          src: Array.isArray(o) ? o : [o]
        });
      }
      r.push(...n);
    }), this._bundles[t] = r;
  }
  add(t, e, r, s, n) {
    const a = [];
    typeof t == "string" || Array.isArray(t) && typeof t[0] == "string" ? (Y("7.2.0", `Assets.add now uses an object instead of individual parameters.
Please use Assets.add({ alias, src, data, format, loadParser }) instead.`), a.push({ alias: t, src: e, data: r, format: s, loadParser: n })) : Array.isArray(t) ? a.push(...t) : a.push(t);
    let o;
    o = (h) => {
      this.hasKey(h) && console.warn(`[Resolver] already has key: ${h} overwriting`);
    }, zt(a).forEach((h) => {
      const { src: l, srcs: u } = h;
      let { data: c, format: d, loadParser: f } = h;
      const p = zt(l || u).map((v) => typeof v == "string" ? Qg(v) : Array.isArray(v) ? v : [v]), m = this.getAlias(h);
      Array.isArray(m) ? m.forEach(o) : o(m);
      const y = [];
      p.forEach((v) => {
        v.forEach((b) => {
          let _ = {};
          if (typeof b != "object") {
            _.src = b;
            for (let g = 0; g < this._parsers.length; g++) {
              const w = this._parsers[g];
              if (w.test(b)) {
                _ = w.parse(b);
                break;
              }
            }
          } else
            c = b.data ?? c, d = b.format ?? d, f = b.loadParser ?? f, _ = {
              ..._,
              ...b
            };
          if (!m)
            throw new Error(`[Resolver] alias is undefined for this asset: ${_.src}`);
          _ = this.buildResolvedAsset(_, {
            aliases: m,
            data: c,
            format: d,
            loadParser: f
          }), y.push(_);
        });
      }), m.forEach((v) => {
        this._assetMap[v] = y;
      });
    });
  }
  // TODO: this needs an overload like load did in Assets
  /**
   * If the resolver has had a manifest set via setManifest, this will return the assets urls for
   * a given bundleId or bundleIds.
   * @example
   * // Manifest Example
   * const manifest = {
   *     bundles: [
   *         {
   *             name: 'load-screen',
   *             assets: [
   *                 {
   *                     alias: 'background',
   *                     src: 'sunset.png',
   *                 },
   *                 {
   *                     alias: 'bar',
   *                     src: 'load-bar.{png,webp}',
   *                 },
   *             ],
   *         },
   *         {
   *             name: 'game-screen',
   *             assets: [
   *                 {
   *                     alias: 'character',
   *                     src: 'robot.png',
   *                 },
   *                 {
   *                     alias: 'enemy',
   *                     src: 'bad-guy.png',
   *                 },
   *             ],
   *         },
   *     ]
   * };
   *
   * resolver.setManifest(manifest);
   * const resolved = resolver.resolveBundle('load-screen');
   * @param bundleIds - The bundle ids to resolve
   * @returns All the bundles assets or a hash of assets for each bundle specified
   */
  resolveBundle(t) {
    const e = Es(t);
    t = zt(t);
    const r = {};
    return t.forEach((s) => {
      const n = this._bundles[s];
      if (n) {
        const a = this.resolve(n), o = {};
        for (const h in a) {
          const l = a[h];
          o[this._extractAssetIdFromBundle(s, h)] = l;
        }
        r[s] = o;
      }
    }), e ? r[t[0]] : r;
  }
  /**
   * Does exactly what resolve does, but returns just the URL rather than the whole asset object
   * @param key - The key or keys to resolve
   * @returns - The URLs associated with the key(s)
   */
  resolveUrl(t) {
    const e = this.resolve(t);
    if (typeof t != "string") {
      const r = {};
      for (const s in e)
        r[s] = e[s].src;
      return r;
    }
    return e.src;
  }
  resolve(t) {
    const e = Es(t);
    t = zt(t);
    const r = {};
    return t.forEach((s) => {
      if (!this._resolverHash[s])
        if (this._assetMap[s]) {
          let n = this._assetMap[s];
          const a = n[0], o = this._getPreferredOrder(n);
          o == null || o.priority.forEach((h) => {
            o.params[h].forEach((l) => {
              const u = n.filter((c) => c[h] ? c[h] === l : !1);
              u.length && (n = u);
            });
          }), this._resolverHash[s] = n[0] ?? a;
        } else
          this._resolverHash[s] = this.buildResolvedAsset({
            alias: [s],
            src: s
          }, {});
      r[s] = this._resolverHash[s];
    }), e ? r[t[0]] : r;
  }
  /**
   * Checks if an asset with a given key exists in the resolver
   * @param key - The key of the asset
   */
  hasKey(t) {
    return !!this._assetMap[t];
  }
  /**
   * Checks if a bundle with the given key exists in the resolver
   * @param key - The key of the bundle
   */
  hasBundle(t) {
    return !!this._bundles[t];
  }
  /**
   * Internal function for figuring out what prefer criteria an asset should use.
   * @param assets
   */
  _getPreferredOrder(t) {
    for (let e = 0; e < t.length; e++) {
      const r = t[0], s = this._preferredOrder.find((n) => n.params.format.includes(r.format));
      if (s)
        return s;
    }
    return this._preferredOrder[0];
  }
  /**
   * Appends the default url parameters to the url
   * @param url - The url to append the default parameters to
   * @returns - The url with the default parameters appended
   */
  _appendDefaultSearchParams(t) {
    if (!this._defaultSearchParams)
      return t;
    const e = /\?/.test(t) ? "&" : "?";
    return `${t}${e}${this._defaultSearchParams}`;
  }
  buildResolvedAsset(t, e) {
    const { aliases: r, data: s, loadParser: n, format: a } = e;
    return (this._basePath || this._rootPath) && (t.src = gt.toAbsolute(t.src, this._basePath, this._rootPath)), t.alias = r ?? t.alias ?? [t.src], t.src = this._appendDefaultSearchParams(t.src), t.data = { ...s || {}, ...t.data }, t.loadParser = n ?? t.loadParser, t.format = a ?? gt.extname(t.src).slice(1), t.srcs = t.src, t.name = t.alias, t;
  }
}
class Iy {
  constructor() {
    this._detections = [], this._initialized = !1, this.resolver = new Cy(), this.loader = new ty(), this.cache = tr, this._backgroundLoader = new Zg(this.loader), this._backgroundLoader.active = !0, this.reset();
  }
  /**
   * Best practice is to call this function before any loading commences
   * Initiating is the best time to add any customization to the way things are loaded.
   *
   * you do not need to call this for the Asset class to work, only if you want to set any initial properties
   * @param options - options to initialize the Asset manager with
   */
  async init(t = {}) {
    var n, a;
    if (this._initialized) {
      console.warn("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");
      return;
    }
    if (this._initialized = !0, t.defaultSearchParams && this.resolver.setDefaultSearchParams(t.defaultSearchParams), t.basePath && (this.resolver.basePath = t.basePath), t.bundleIdentifier && this.resolver.setBundleIdentifier(t.bundleIdentifier), t.manifest) {
      let o = t.manifest;
      typeof o == "string" && (o = await this.load(o)), this.resolver.addManifest(o);
    }
    const e = ((n = t.texturePreference) == null ? void 0 : n.resolution) ?? 1, r = typeof e == "number" ? [e] : e, s = await this._detectFormats({
      preferredFormats: (a = t.texturePreference) == null ? void 0 : a.format,
      skipDetections: t.skipDetections,
      detections: this._detections
    });
    this.resolver.prefer({
      params: {
        format: s,
        resolution: r
      }
    }), t.preferences && this.setPreferences(t.preferences);
  }
  add(t, e, r, s, n) {
    this.resolver.add(t, e, r, s, n);
  }
  async load(t, e) {
    this._initialized || await this.init();
    const r = Es(t), s = zt(t).map((o) => {
      if (typeof o != "string") {
        const h = this.resolver.getAlias(o);
        return h.some((l) => !this.resolver.hasKey(l)) && this.add(o), Array.isArray(h) ? h[0] : h;
      }
      return this.resolver.hasKey(o) || this.add({ alias: o, src: o }), o;
    }), n = this.resolver.resolve(s), a = await this._mapLoadToResolve(n, e);
    return r ? a[s[0]] : a;
  }
  /**
   * This adds a bundle of assets in one go so that you can load them as a group.
   * For example you could add a bundle for each screen in you pixi app
   * @example
   * import { Assets } from 'pixi.js';
   *
   * Assets.addBundle('animals', {
   *     bunny: 'bunny.png',
   *     chicken: 'chicken.png',
   *     thumper: 'thumper.png',
   * });
   *
   * const assets = await Assets.loadBundle('animals');
   * @param bundleId - the id of the bundle to add
   * @param assets - a record of the asset or assets that will be chosen from when loading via the specified key
   */
  addBundle(t, e) {
    this.resolver.addBundle(t, e);
  }
  /**
   * Bundles are a way to load multiple assets at once.
   * If a manifest has been provided to the init function then you can load a bundle, or bundles.
   * you can also add bundles via `addBundle`
   * @example
   * import { Assets } from 'pixi.js';
   *
   * // Manifest Example
   * const manifest = {
   *     bundles: [
   *         {
   *             name: 'load-screen',
   *             assets: [
   *                 {
   *                     alias: 'background',
   *                     src: 'sunset.png',
   *                 },
   *                 {
   *                     alias: 'bar',
   *                     src: 'load-bar.{png,webp}',
   *                 },
   *             ],
   *         },
   *         {
   *             name: 'game-screen',
   *             assets: [
   *                 {
   *                     alias: 'character',
   *                     src: 'robot.png',
   *                 },
   *                 {
   *                     alias: 'enemy',
   *                     src: 'bad-guy.png',
   *                 },
   *             ],
   *         },
   *     ]
   * };
   *
   * await Assets.init({ manifest });
   *
   * // Load a bundle...
   * loadScreenAssets = await Assets.loadBundle('load-screen');
   * // Load another bundle...
   * gameScreenAssets = await Assets.loadBundle('game-screen');
   * @param bundleIds - the bundle id or ids to load
   * @param onProgress - Optional function that is called when progress on asset loading is made.
   * The function is passed a single parameter, `progress`, which represents the percentage (0.0 - 1.0)
   * of the assets loaded. Do not use this function to detect when assets are complete and available,
   * instead use the Promise returned by this function.
   * @returns all the bundles assets or a hash of assets for each bundle specified
   */
  async loadBundle(t, e) {
    this._initialized || await this.init();
    let r = !1;
    typeof t == "string" && (r = !0, t = [t]);
    const s = this.resolver.resolveBundle(t), n = {}, a = Object.keys(s);
    let o = 0, h = 0;
    const l = () => {
      e == null || e(++o / h);
    }, u = a.map((c) => {
      const d = s[c];
      return h += Object.keys(d).length, this._mapLoadToResolve(d, l).then((f) => {
        n[c] = f;
      });
    });
    return await Promise.all(u), r ? n[t[0]] : n;
  }
  /**
   * Initiate a background load of some assets. It will passively begin to load these assets in the background.
   * So when you actually come to loading them you will get a promise that resolves to the loaded assets immediately
   *
   * An example of this might be that you would background load game assets after your inital load.
   * then when you got to actually load your game screen assets when a player goes to the game - the loading
   * would already have stared or may even be complete, saving you having to show an interim load bar.
   * @example
   * import { Assets } from 'pixi.js';
   *
   * Assets.backgroundLoad('bunny.png');
   *
   * // later on in your app...
   * await Assets.loadBundle('bunny.png'); // Will resolve quicker as loading may have completed!
   * @param urls - the url / urls you want to background load
   */
  async backgroundLoad(t) {
    this._initialized || await this.init(), typeof t == "string" && (t = [t]);
    const e = this.resolver.resolve(t);
    this._backgroundLoader.add(Object.values(e));
  }
  /**
   * Initiate a background of a bundle, works exactly like backgroundLoad but for bundles.
   * this can only be used if the loader has been initiated with a manifest
   * @example
   * import { Assets } from 'pixi.js';
   *
   * await Assets.init({
   *     manifest: {
   *         bundles: [
   *             {
   *                 name: 'load-screen',
   *                 assets: [...],
   *             },
   *             ...
   *         ],
   *     },
   * });
   *
   * Assets.backgroundLoadBundle('load-screen');
   *
   * // Later on in your app...
   * await Assets.loadBundle('load-screen'); // Will resolve quicker as loading may have completed!
   * @param bundleIds - the bundleId / bundleIds you want to background load
   */
  async backgroundLoadBundle(t) {
    this._initialized || await this.init(), typeof t == "string" && (t = [t]);
    const e = this.resolver.resolveBundle(t);
    Object.values(e).forEach((r) => {
      this._backgroundLoader.add(Object.values(r));
    });
  }
  /**
   * Only intended for development purposes.
   * This will wipe the resolver and caches.
   * You will need to reinitialize the Asset
   */
  reset() {
    this.resolver.reset(), this.loader.reset(), this.cache.reset(), this._initialized = !1;
  }
  get(t) {
    if (typeof t == "string")
      return tr.get(t);
    const e = {};
    for (let r = 0; r < t.length; r++)
      e[r] = tr.get(t[r]);
    return e;
  }
  /**
   * helper function to map resolved assets back to loaded assets
   * @param resolveResults - the resolve results from the resolver
   * @param onProgress - the progress callback
   */
  async _mapLoadToResolve(t, e) {
    const r = Object.values(t), s = Object.keys(t);
    this._backgroundLoader.active = !1;
    const n = await this.loader.load(r, e);
    this._backgroundLoader.active = !0;
    const a = {};
    return r.forEach((o, h) => {
      const l = n[o.src], u = [o.src];
      o.alias && u.push(...o.alias), a[s[h]] = l, tr.set(u, l);
    }), a;
  }
  /**
   * Unload an asset or assets. As the Assets class is responsible for creating the assets via the `load` function
   * this will make sure to destroy any assets and release them from memory.
   * Once unloaded, you will need to load the asset again.
   *
   * Use this to help manage assets if you find that you have a large app and you want to free up memory.
   *
   * - it's up to you as the developer to make sure that textures are not actively being used when you unload them,
   * Pixi won't break but you will end up with missing assets. Not a good look for the user!
   * @example
   * import { Assets } from 'pixi.js';
   *
   * // Load a URL:
   * const myImageTexture = await Assets.load('http://some.url.com/image.png'); // => returns a texture
   *
   * await Assets.unload('http://some.url.com/image.png')
   *
   * // myImageTexture will be destroyed now.
   *
   * // Unload multiple assets:
   * const textures = await Assets.unload(['thumper', 'chicko']);
   * @param urls - the urls to unload
   */
  async unload(t) {
    this._initialized || await this.init();
    const e = zt(t).map((s) => typeof s != "string" ? s.src : s), r = this.resolver.resolve(e);
    await this._unloadFromResolved(r);
  }
  /**
   * Bundles are a way to manage multiple assets at once.
   * this will unload all files in a bundle.
   *
   * once a bundle has been unloaded, you need to load it again to have access to the assets.
   * @example
   * import { Assets } from 'pixi.js';
   *
   * Assets.addBundle({
   *     'thumper': 'http://some.url.com/thumper.png',
   * })
   *
   * const assets = await Assets.loadBundle('thumper');
   *
   * // Now to unload...
   *
   * await Assets.unloadBundle('thumper');
   *
   * // All assets in the assets object will now have been destroyed and purged from the cache
   * @param bundleIds - the bundle id or ids to unload
   */
  async unloadBundle(t) {
    this._initialized || await this.init(), t = zt(t);
    const e = this.resolver.resolveBundle(t), r = Object.keys(e).map((s) => this._unloadFromResolved(e[s]));
    await Promise.all(r);
  }
  async _unloadFromResolved(t) {
    const e = Object.values(t);
    e.forEach((r) => {
      tr.remove(r.src);
    }), await this.loader.unload(e);
  }
  /**
   * Detects the supported formats for the browser, and returns an array of supported formats, respecting
   * the users preferred formats order.
   * @param options - the options to use when detecting formats
   * @param options.preferredFormats - the preferred formats to use
   * @param options.skipDetections - if we should skip the detections altogether
   * @param options.detections - the detections to use
   * @returns - the detected formats
   */
  async _detectFormats(t) {
    let e = [];
    t.preferredFormats && (e = Array.isArray(t.preferredFormats) ? t.preferredFormats : [t.preferredFormats]);
    for (const r of t.detections)
      t.skipDetections || await r.test() ? e = await r.add(e) : t.skipDetections || (e = await r.remove(e));
    return e = e.filter((r, s) => e.indexOf(r) === s), e;
  }
  /** All the detection parsers currently added to the Assets class. */
  get detections() {
    return this._detections;
  }
  /**
   * @deprecated since 7.2.0
   * @see {@link Assets.setPreferences}
   */
  get preferWorkers() {
    return Us.config.preferWorkers;
  }
  set preferWorkers(t) {
    Y("7.2.0", "Assets.prefersWorkers is deprecated, use Assets.setPreferences({ preferWorkers: true }) instead."), this.setPreferences({ preferWorkers: t });
  }
  /**
   * General setter for preferences. This is a helper function to set preferences on all parsers.
   * @param preferences - the preferences to set
   */
  setPreferences(t) {
    this.loader.parsers.forEach((e) => {
      e.config && Object.keys(e.config).filter((r) => r in t).forEach((r) => {
        e.config[r] = t[r];
      });
    });
  }
}
const Le = new Iy();
k.handleByList(F.LoadParser, Le.loader.parsers).handleByList(F.ResolveParser, Le.resolver.parsers).handleByList(F.CacheParser, Le.cache.parsers).handleByList(F.DetectionParser, Le.detections);
const Py = {
  extension: F.CacheParser,
  test: (i) => Array.isArray(i) && i.every((t) => t instanceof O),
  getCacheableAssets: (i, t) => {
    const e = {};
    return i.forEach((r) => {
      t.forEach((s, n) => {
        e[r + (n === 0 ? "" : n + 1)] = s;
      });
    }), e;
  }
};
k.add(Py);
async function Du(i) {
  if ("Image" in globalThis)
    return new Promise((t) => {
      const e = new Image();
      e.onload = () => {
        t(!0);
      }, e.onerror = () => {
        t(!1);
      }, e.src = i;
    });
  if ("createImageBitmap" in globalThis && "fetch" in globalThis) {
    try {
      const t = await (await fetch(i)).blob();
      await createImageBitmap(t);
    } catch {
      return !1;
    }
    return !0;
  }
  return !1;
}
const Ry = {
  extension: {
    type: F.DetectionParser,
    priority: 1
  },
  test: async () => Du(
    // eslint-disable-next-line max-len
    "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="
  ),
  add: async (i) => [...i, "avif"],
  remove: async (i) => i.filter((t) => t !== "avif")
};
k.add(Ry);
const My = {
  extension: {
    type: F.DetectionParser,
    priority: 0
  },
  test: async () => Du(
    "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="
  ),
  add: async (i) => [...i, "webp"],
  remove: async (i) => i.filter((t) => t !== "webp")
};
k.add(My);
const Ih = ["png", "jpg", "jpeg"], By = {
  extension: {
    type: F.DetectionParser,
    priority: -1
  },
  test: () => Promise.resolve(!0),
  add: async (i) => [...i, ...Ih],
  remove: async (i) => i.filter((t) => !Ih.includes(t))
};
k.add(By);
const Dy = "WorkerGlobalScope" in globalThis && globalThis instanceof globalThis.WorkerGlobalScope;
function Ya(i) {
  return Dy ? !1 : document.createElement("video").canPlayType(i) !== "";
}
const Fy = {
  extension: {
    type: F.DetectionParser,
    priority: 0
  },
  test: async () => Ya("video/webm"),
  add: async (i) => [...i, "webm"],
  remove: async (i) => i.filter((t) => t !== "webm")
};
k.add(Fy);
const Oy = {
  extension: {
    type: F.DetectionParser,
    priority: 0
  },
  test: async () => Ya("video/mp4"),
  add: async (i) => [...i, "mp4", "m4v"],
  remove: async (i) => i.filter((t) => t !== "mp4" && t !== "m4v")
};
k.add(Oy);
const Ny = {
  extension: {
    type: F.DetectionParser,
    priority: 0
  },
  test: async () => Ya("video/ogg"),
  add: async (i) => [...i, "ogv"],
  remove: async (i) => i.filter((t) => t !== "ogv")
};
k.add(Ny);
const Ly = {
  extension: F.ResolveParser,
  test: Us.test,
  parse: (i) => {
    var t;
    return {
      resolution: parseFloat(((t = L.RETINA_PREFIX.exec(i)) == null ? void 0 : t[1]) ?? "1"),
      format: gt.extname(i).slice(1),
      src: i
    };
  }
};
k.add(Ly);
var Et = /* @__PURE__ */ ((i) => (i[i.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", i[i.COMPRESSED_RGBA_S3TC_DXT1_EXT = 33777] = "COMPRESSED_RGBA_S3TC_DXT1_EXT", i[i.COMPRESSED_RGBA_S3TC_DXT3_EXT = 33778] = "COMPRESSED_RGBA_S3TC_DXT3_EXT", i[i.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", i[i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT", i[i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT", i[i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT", i[i.COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916] = "COMPRESSED_SRGB_S3TC_DXT1_EXT", i[i.COMPRESSED_R11_EAC = 37488] = "COMPRESSED_R11_EAC", i[i.COMPRESSED_SIGNED_R11_EAC = 37489] = "COMPRESSED_SIGNED_R11_EAC", i[i.COMPRESSED_RG11_EAC = 37490] = "COMPRESSED_RG11_EAC", i[i.COMPRESSED_SIGNED_RG11_EAC = 37491] = "COMPRESSED_SIGNED_RG11_EAC", i[i.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", i[i.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", i[i.COMPRESSED_SRGB8_ETC2 = 37493] = "COMPRESSED_SRGB8_ETC2", i[i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497] = "COMPRESSED_SRGB8_ALPHA8_ETC2_EAC", i[i.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494] = "COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2", i[i.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495] = "COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2", i[i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", i[i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", i[i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG = 35841] = "COMPRESSED_RGB_PVRTC_2BPPV1_IMG", i[i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG = 35843] = "COMPRESSED_RGBA_PVRTC_2BPPV1_IMG", i[i.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", i[i.COMPRESSED_RGB_ATC_WEBGL = 35986] = "COMPRESSED_RGB_ATC_WEBGL", i[i.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL = 35987] = "COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL", i[i.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL = 34798] = "COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL", i[i.COMPRESSED_RGBA_ASTC_4x4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4x4_KHR", i[i.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", i[i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = 36493] = "COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT", i[i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT = 36494] = "COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT", i[i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT = 36495] = "COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT", i))(Et || {});
const ws = {
  // WEBGL_compressed_texture_s3tc
  33776: 0.5,
  33777: 0.5,
  33778: 1,
  33779: 1,
  // WEBGL_compressed_texture_s3tc
  35916: 0.5,
  35917: 0.5,
  35918: 1,
  35919: 1,
  // WEBGL_compressed_texture_etc
  37488: 0.5,
  37489: 0.5,
  37490: 1,
  37491: 1,
  37492: 0.5,
  37496: 1,
  37493: 0.5,
  37497: 1,
  37494: 0.5,
  // ~~
  37495: 0.5,
  // ~~
  // WEBGL_compressed_texture_pvrtc
  35840: 0.5,
  35842: 0.5,
  35841: 0.25,
  35843: 0.25,
  // WEBGL_compressed_texture_etc1
  36196: 0.5,
  // @see https://www.khronos.org/registry/OpenGL/extensions/AMD/AMD_compressed_ATC_texture.txt
  // WEBGL_compressed_texture_atc
  35986: 0.5,
  35987: 1,
  34798: 1,
  // @see https://registry.khronos.org/OpenGL/extensions/KHR/KHR_texture_compression_astc_hdr.txt
  // WEBGL_compressed_texture_astc
  /* eslint-disable-next-line camelcase */
  37808: 1,
  // @see https://registry.khronos.org/OpenGL/extensions/EXT/EXT_texture_compression_bptc.txt
  // EXT_texture_compression_bptc
  36492: 1,
  36493: 1,
  36494: 1,
  36495: 1
};
let re, vr;
function Ph() {
  vr = {
    s3tc: re.getExtension("WEBGL_compressed_texture_s3tc"),
    s3tc_sRGB: re.getExtension("WEBGL_compressed_texture_s3tc_srgb"),
    /* eslint-disable-line camelcase */
    etc: re.getExtension("WEBGL_compressed_texture_etc"),
    etc1: re.getExtension("WEBGL_compressed_texture_etc1"),
    pvrtc: re.getExtension("WEBGL_compressed_texture_pvrtc") || re.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
    atc: re.getExtension("WEBGL_compressed_texture_atc"),
    astc: re.getExtension("WEBGL_compressed_texture_astc"),
    bptc: re.getExtension("EXT_texture_compression_bptc")
  };
}
const Uy = {
  extension: {
    type: F.DetectionParser,
    priority: 2
  },
  test: async () => {
    const i = L.ADAPTER.createCanvas().getContext("webgl");
    return i ? (re = i, !0) : (console.warn("WebGL not available for compressed textures."), !1);
  },
  add: async (i) => {
    vr || Ph();
    const t = [];
    for (const e in vr)
      vr[e] && t.push(e);
    return [...t, ...i];
  },
  remove: async (i) => (vr || Ph(), i.filter((t) => !(t in vr)))
};
k.add(Uy);
class ky extends Bs {
  /**
   * @param source - The buffer/URL of the texture file.
   * @param {PIXI.IBlobResourceOptions} [options]
   * @param {boolean} [options.autoLoad=false] - Whether to fetch the data immediately;
   *  you can fetch it later via {@link PIXI.BlobResource#load}.
   * @param {number} [options.width=1] - The width in pixels.
   * @param {number} [options.height=1] - The height in pixels.
   * @param {1|2|4|8} [options.unpackAlignment=4] - The alignment of the pixel rows.
   */
  constructor(t, e = { width: 1, height: 1, autoLoad: !0 }) {
    let r, s;
    typeof t == "string" ? (r = t, s = new Uint8Array()) : (r = null, s = t), super(s, e), this.origin = r, this.buffer = s ? new Jn(s) : null, this._load = null, this.loaded = !1, this.origin !== null && e.autoLoad !== !1 && this.load(), this.origin === null && this.buffer && (this._load = Promise.resolve(this), this.loaded = !0, this.onBlobLoaded(this.buffer.rawBinaryData));
  }
  onBlobLoaded(t) {
  }
  /** Loads the blob */
  load() {
    return this._load ? this._load : (this._load = fetch(this.origin).then((t) => t.blob()).then((t) => t.arrayBuffer()).then((t) => (this.data = new Uint32Array(t), this.buffer = new Jn(t), this.loaded = !0, this.onBlobLoaded(t), this.update(), this)), this._load);
  }
}
class sr extends ky {
  /**
   * @param source - the buffer/URL holding the compressed texture data
   * @param options
   * @param {PIXI.INTERNAL_FORMATS} options.format - the compression format
   * @param {number} options.width - the image width in pixels.
   * @param {number} options.height - the image height in pixels.
   * @param {number} [options.level=1] - the mipmap levels stored in the compressed texture, including level 0.
   * @param {number} [options.levelBuffers] - the buffers for each mipmap level. `CompressedTextureResource` can allows you
   *      to pass `null` for `source`, for cases where each level is stored in non-contiguous memory.
   */
  constructor(t, e) {
    super(t, e), this.format = e.format, this.levels = e.levels || 1, this._width = e.width, this._height = e.height, this._extension = sr._formatToExtension(this.format), (e.levelBuffers || this.buffer) && (this._levelBuffers = e.levelBuffers || sr._createLevelBuffers(
      t instanceof Uint8Array ? t : this.buffer.uint8View,
      this.format,
      this.levels,
      4,
      4,
      // PVRTC has 8x4 blocks in 2bpp mode
      this.width,
      this.height
    ));
  }
  /**
   * @override
   * @param renderer - A reference to the current renderer
   * @param _texture - the texture
   * @param _glTexture - texture instance for this webgl context
   */
  upload(t, e, r) {
    const s = t.gl;
    if (!t.context.extensions[this._extension])
      throw new Error(`${this._extension} textures are not supported on the current machine`);
    if (!this._levelBuffers)
      return !1;
    s.pixelStorei(s.UNPACK_ALIGNMENT, 4);
    for (let n = 0, a = this.levels; n < a; n++) {
      const { levelID: o, levelWidth: h, levelHeight: l, levelBuffer: u } = this._levelBuffers[n];
      s.compressedTexImage2D(s.TEXTURE_2D, o, this.format, h, l, 0, u);
    }
    return !0;
  }
  /** @protected */
  onBlobLoaded() {
    this._levelBuffers = sr._createLevelBuffers(
      this.buffer.uint8View,
      this.format,
      this.levels,
      4,
      4,
      // PVRTC has 8x4 blocks in 2bpp mode
      this.width,
      this.height
    );
  }
  /**
   * Returns the key (to ContextSystem#extensions) for the WebGL extension supporting the compression format
   * @private
   * @param format - the compression format to get the extension for.
   */
  static _formatToExtension(t) {
    if (t >= 33776 && t <= 33779)
      return "s3tc";
    if (t >= 35916 && t <= 35919)
      return "s3tc_sRGB";
    if (t >= 37488 && t <= 37497)
      return "etc";
    if (t >= 35840 && t <= 35843)
      return "pvrtc";
    if (t === 36196)
      return "etc1";
    if (t === 35986 || t === 35987 || t === 34798)
      return "atc";
    if (t >= 36492 && t <= 36495)
      return "bptc";
    if (t === 37808)
      return "astc";
    throw new Error(`Invalid (compressed) texture format given: ${t}`);
  }
  /**
   * Pre-creates buffer views for each mipmap level
   * @private
   * @param buffer -
   * @param format - compression formats
   * @param levels - mipmap levels
   * @param blockWidth -
   * @param blockHeight -
   * @param imageWidth - width of the image in pixels
   * @param imageHeight - height of the image in pixels
   */
  static _createLevelBuffers(t, e, r, s, n, a, o) {
    const h = new Array(r);
    let l = t.byteOffset, u = a, c = o, d = u + s - 1 & ~(s - 1), f = c + n - 1 & ~(n - 1), p = d * f * ws[e];
    for (let m = 0; m < r; m++)
      h[m] = {
        levelID: m,
        levelWidth: r > 1 ? u : d,
        levelHeight: r > 1 ? c : f,
        levelBuffer: new Uint8Array(t.buffer, l, p)
      }, l += p, u = u >> 1 || 1, c = c >> 1 || 1, d = u + s - 1 & ~(s - 1), f = c + n - 1 & ~(n - 1), p = d * f * ws[e];
    return h;
  }
}
const wn = 4, Gi = 124, Gy = 32, Rh = 20, Hy = 542327876, Hi = {
  SIZE: 1,
  FLAGS: 2,
  HEIGHT: 3,
  WIDTH: 4,
  MIPMAP_COUNT: 7,
  PIXEL_FORMAT: 19
}, $y = {
  SIZE: 0,
  FLAGS: 1,
  FOURCC: 2,
  RGB_BITCOUNT: 3,
  R_BIT_MASK: 4,
  G_BIT_MASK: 5,
  B_BIT_MASK: 6,
  A_BIT_MASK: 7
}, $i = {
  DXGI_FORMAT: 0,
  RESOURCE_DIMENSION: 1,
  MISC_FLAG: 2,
  ARRAY_SIZE: 3,
  MISC_FLAGS2: 4
}, Vy = 1, zy = 2, Xy = 4, Wy = 64, jy = 512, Yy = 131072, qy = 827611204, Ky = 861165636, Zy = 894720068, Qy = 808540228, Jy = 4, t_ = {
  [qy]: Et.COMPRESSED_RGBA_S3TC_DXT1_EXT,
  [Ky]: Et.COMPRESSED_RGBA_S3TC_DXT3_EXT,
  [Zy]: Et.COMPRESSED_RGBA_S3TC_DXT5_EXT
}, e_ = {
  // WEBGL_compressed_texture_s3tc
  70: Et.COMPRESSED_RGBA_S3TC_DXT1_EXT,
  71: Et.COMPRESSED_RGBA_S3TC_DXT1_EXT,
  73: Et.COMPRESSED_RGBA_S3TC_DXT3_EXT,
  74: Et.COMPRESSED_RGBA_S3TC_DXT3_EXT,
  76: Et.COMPRESSED_RGBA_S3TC_DXT5_EXT,
  77: Et.COMPRESSED_RGBA_S3TC_DXT5_EXT,
  // WEBGL_compressed_texture_s3tc_srgb
  72: Et.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT,
  75: Et.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT,
  78: Et.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT,
  // EXT_texture_compression_bptc
  // BC6H
  96: Et.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT,
  95: Et.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT,
  // BC7
  98: Et.COMPRESSED_RGBA_BPTC_UNORM_EXT,
  99: Et.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
};
function r_(i) {
  const t = new Uint32Array(i);
  if (t[0] !== Hy)
    throw new Error("Invalid DDS file magic word");
  const e = new Uint32Array(i, 0, Gi / Uint32Array.BYTES_PER_ELEMENT), r = e[Hi.HEIGHT], s = e[Hi.WIDTH], n = e[Hi.MIPMAP_COUNT], a = new Uint32Array(
    i,
    Hi.PIXEL_FORMAT * Uint32Array.BYTES_PER_ELEMENT,
    Gy / Uint32Array.BYTES_PER_ELEMENT
  ), o = a[Vy];
  if (o & Xy) {
    const h = a[$y.FOURCC];
    if (h !== Qy) {
      const b = t_[h], _ = wn + Gi, g = new Uint8Array(i, _);
      return [new sr(g, {
        format: b,
        width: s,
        height: r,
        levels: n
        // CompressedTextureResource will separate the levelBuffers for us!
      })];
    }
    const l = wn + Gi, u = new Uint32Array(
      t.buffer,
      l,
      Rh / Uint32Array.BYTES_PER_ELEMENT
    ), c = u[$i.DXGI_FORMAT], d = u[$i.RESOURCE_DIMENSION], f = u[$i.MISC_FLAG], p = u[$i.ARRAY_SIZE], m = e_[c];
    if (m === void 0)
      throw new Error(`DDSParser cannot parse texture data with DXGI format ${c}`);
    if (f === Jy)
      throw new Error("DDSParser does not support cubemap textures");
    if (d === 6)
      throw new Error("DDSParser does not supported 3D texture data");
    const y = new Array(), v = wn + Gi + Rh;
    if (p === 1)
      y.push(new Uint8Array(i, v));
    else {
      const b = ws[m];
      let _ = 0, g = s, w = r;
      for (let A = 0; A < n; A++) {
        const x = Math.max(1, g + 3 & -4), T = Math.max(1, w + 3 & -4), S = x * T * b;
        _ += S, g = g >>> 1, w = w >>> 1;
      }
      let R = v;
      for (let A = 0; A < p; A++)
        y.push(new Uint8Array(i, R, _)), R += _;
    }
    return y.map((b) => new sr(b, {
      format: m,
      width: s,
      height: r,
      levels: n
    }));
  }
  throw o & Wy ? new Error("DDSParser does not support uncompressed texture data.") : o & jy ? new Error("DDSParser does not supported YUV uncompressed texture data.") : o & Yy ? new Error("DDSParser does not support single-channel (lumninance) texture data!") : o & zy ? new Error("DDSParser does not support single-channel (alpha) texture data!") : new Error("DDSParser failed to load a texture file due to an unknown reason!");
}
const Mh = [171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10], i_ = 67305985, Ht = {
  FILE_IDENTIFIER: 0,
  ENDIANNESS: 12,
  GL_TYPE: 16,
  GL_TYPE_SIZE: 20,
  GL_FORMAT: 24,
  GL_INTERNAL_FORMAT: 28,
  GL_BASE_INTERNAL_FORMAT: 32,
  PIXEL_WIDTH: 36,
  PIXEL_HEIGHT: 40,
  PIXEL_DEPTH: 44,
  NUMBER_OF_ARRAY_ELEMENTS: 48,
  NUMBER_OF_FACES: 52,
  NUMBER_OF_MIPMAP_LEVELS: 56,
  BYTES_OF_KEY_VALUE_DATA: 60
}, Ea = 64, Bh = {
  [V.UNSIGNED_BYTE]: 1,
  [V.UNSIGNED_SHORT]: 2,
  [V.INT]: 4,
  [V.UNSIGNED_INT]: 4,
  [V.FLOAT]: 4,
  [V.HALF_FLOAT]: 8
}, s_ = {
  [P.RGBA]: 4,
  [P.RGB]: 3,
  [P.RG]: 2,
  [P.RED]: 1,
  [P.LUMINANCE]: 1,
  [P.LUMINANCE_ALPHA]: 2,
  [P.ALPHA]: 1
}, n_ = {
  [V.UNSIGNED_SHORT_4_4_4_4]: 2,
  [V.UNSIGNED_SHORT_5_5_5_1]: 2,
  [V.UNSIGNED_SHORT_5_6_5]: 2
};
function a_(i, t, e = !1) {
  const r = new DataView(t);
  if (!o_(i, r))
    return null;
  const s = r.getUint32(Ht.ENDIANNESS, !0) === i_, n = r.getUint32(Ht.GL_TYPE, s), a = r.getUint32(Ht.GL_FORMAT, s), o = r.getUint32(Ht.GL_INTERNAL_FORMAT, s), h = r.getUint32(Ht.PIXEL_WIDTH, s), l = r.getUint32(Ht.PIXEL_HEIGHT, s) || 1, u = r.getUint32(Ht.PIXEL_DEPTH, s) || 1, c = r.getUint32(Ht.NUMBER_OF_ARRAY_ELEMENTS, s) || 1, d = r.getUint32(Ht.NUMBER_OF_FACES, s), f = r.getUint32(Ht.NUMBER_OF_MIPMAP_LEVELS, s), p = r.getUint32(Ht.BYTES_OF_KEY_VALUE_DATA, s);
  if (l === 0 || u !== 1)
    throw new Error("Only 2D textures are supported");
  if (d !== 1)
    throw new Error("CubeTextures are not supported by KTXLoader yet!");
  if (c !== 1)
    throw new Error("WebGL does not support array textures");
  const m = 4, y = 4, v = h + 3 & -4, b = l + 3 & -4, _ = new Array(c);
  let g = h * l;
  n === 0 && (g = v * b);
  let w;
  if (n !== 0 ? Bh[n] ? w = Bh[n] * s_[a] : w = n_[n] : w = ws[o], w === void 0)
    throw new Error("Unable to resolve the pixel format stored in the *.ktx file!");
  const R = e ? l_(r, p, s) : null;
  let A = g * w, x = h, T = l, S = v, M = b, C = Ea + p;
  for (let E = 0; E < f; E++) {
    const I = r.getUint32(C, s);
    let G = C + 4;
    for (let U = 0; U < c; U++) {
      let $ = _[U];
      $ || ($ = _[U] = new Array(f)), $[E] = {
        levelID: E,
        // don't align mipWidth when texture not compressed! (glType not zero)
        levelWidth: f > 1 || n !== 0 ? x : S,
        levelHeight: f > 1 || n !== 0 ? T : M,
        levelBuffer: new Uint8Array(t, G, A)
      }, G += A;
    }
    C += I + 4, C = C % 4 !== 0 ? C + 4 - C % 4 : C, x = x >> 1 || 1, T = T >> 1 || 1, S = x + m - 1 & ~(m - 1), M = T + y - 1 & ~(y - 1), A = S * M * w;
  }
  return n !== 0 ? {
    uncompressed: _.map((E) => {
      let I = E[0].levelBuffer, G = !1;
      return n === V.FLOAT ? I = new Float32Array(
        E[0].levelBuffer.buffer,
        E[0].levelBuffer.byteOffset,
        E[0].levelBuffer.byteLength / 4
      ) : n === V.UNSIGNED_INT ? (G = !0, I = new Uint32Array(
        E[0].levelBuffer.buffer,
        E[0].levelBuffer.byteOffset,
        E[0].levelBuffer.byteLength / 4
      )) : n === V.INT && (G = !0, I = new Int32Array(
        E[0].levelBuffer.buffer,
        E[0].levelBuffer.byteOffset,
        E[0].levelBuffer.byteLength / 4
      )), {
        resource: new Bs(
          I,
          {
            width: E[0].levelWidth,
            height: E[0].levelHeight
          }
        ),
        type: n,
        format: G ? h_(a) : a
      };
    }),
    kvData: R
  } : {
    compressed: _.map((E) => new sr(null, {
      format: o,
      width: h,
      height: l,
      levels: f,
      levelBuffers: E
    })),
    kvData: R
  };
}
function o_(i, t) {
  for (let e = 0; e < Mh.length; e++)
    if (t.getUint8(e) !== Mh[e])
      return console.error(`${i} is not a valid *.ktx file!`), !1;
  return !0;
}
function h_(i) {
  switch (i) {
    case P.RGBA:
      return P.RGBA_INTEGER;
    case P.RGB:
      return P.RGB_INTEGER;
    case P.RG:
      return P.RG_INTEGER;
    case P.RED:
      return P.RED_INTEGER;
    default:
      return i;
  }
}
function l_(i, t, e) {
  const r = /* @__PURE__ */ new Map();
  let s = 0;
  for (; s < t; ) {
    const n = i.getUint32(Ea + s, e), a = Ea + s + 4, o = 3 - (n + 3) % 4;
    if (n === 0 || n > t - s) {
      console.error("KTXLoader: keyAndValueByteSize out of bounds");
      break;
    }
    let h = 0;
    for (; h < n && i.getUint8(a + h) !== 0; h++)
      ;
    if (h === -1) {
      console.error("KTXLoader: Failed to find null byte terminating kvData key");
      break;
    }
    const l = new TextDecoder().decode(
      new Uint8Array(i.buffer, a, h)
    ), u = new DataView(
      i.buffer,
      a + h + 1,
      n - h - 1
    );
    r.set(l, u), s += 4 + n + o;
  }
  return r;
}
const u_ = {
  extension: {
    type: F.LoadParser,
    priority: qt.High
  },
  name: "loadDDS",
  test(i) {
    return Ve(i, ".dds");
  },
  async load(i, t, e) {
    const r = await (await L.ADAPTER.fetch(i)).arrayBuffer(), s = r_(r).map((n) => {
      const a = new W(n, {
        mipmap: ue.OFF,
        alphaMode: Dt.NO_PREMULTIPLIED_ALPHA,
        resolution: Ae(i),
        ...t.data
      });
      return xi(a, e, i);
    });
    return s.length === 1 ? s[0] : s;
  },
  unload(i) {
    Array.isArray(i) ? i.forEach((t) => t.destroy(!0)) : i.destroy(!0);
  }
};
k.add(u_);
const c_ = {
  extension: {
    type: F.LoadParser,
    priority: qt.High
  },
  name: "loadKTX",
  test(i) {
    return Ve(i, ".ktx");
  },
  async load(i, t, e) {
    const r = await (await L.ADAPTER.fetch(i)).arrayBuffer(), { compressed: s, uncompressed: n, kvData: a } = a_(i, r), o = s ?? n, h = {
      mipmap: ue.OFF,
      alphaMode: Dt.NO_PREMULTIPLIED_ALPHA,
      resolution: Ae(i),
      ...t.data
    }, l = o.map((u) => {
      o === n && Object.assign(h, {
        type: u.type,
        format: u.format
      });
      const c = u.resource ?? u, d = new W(c, h);
      return d.ktxKeyValueData = a, xi(d, e, i);
    });
    return l.length === 1 ? l[0] : l;
  },
  unload(i) {
    Array.isArray(i) ? i.forEach((t) => t.destroy(!0)) : i.destroy(!0);
  }
};
k.add(c_);
const d_ = {
  extension: F.ResolveParser,
  test: (i) => {
    const t = gt.extname(i).slice(1);
    return ["basis", "ktx", "dds"].includes(t);
  },
  parse: (i) => {
    var e, r;
    const t = gt.extname(i).slice(1);
    if (t === "ktx") {
      const s = [
        ".s3tc.ktx",
        ".s3tc_sRGB.ktx",
        ".etc.ktx",
        ".etc1.ktx",
        ".pvrt.ktx",
        ".atc.ktx",
        ".astc.ktx",
        ".bptc.ktx"
      ];
      if (s.some((n) => i.endsWith(n)))
        return {
          resolution: parseFloat(((e = L.RETINA_PREFIX.exec(i)) == null ? void 0 : e[1]) ?? "1"),
          format: s.find((n) => i.endsWith(n)),
          src: i
        };
    }
    return {
      resolution: parseFloat(((r = L.RETINA_PREFIX.exec(i)) == null ? void 0 : r[1]) ?? "1"),
      format: t,
      src: i
    };
  }
};
k.add(d_);
const Vi = new j(), f_ = 4, Fu = class ri {
  /**
   * @param renderer - A reference to the current renderer
   */
  constructor(t) {
    this.renderer = t, this._rendererPremultipliedAlpha = !1;
  }
  contextChange() {
    var e;
    const t = (e = this.renderer) == null ? void 0 : e.gl.getContextAttributes();
    this._rendererPremultipliedAlpha = !!(t && t.alpha && t.premultipliedAlpha);
  }
  /**
   * Will return a HTML Image of the target
   * @param target - A displayObject or renderTexture
   *  to convert. If left empty will use the main renderer
   * @param format - Image format, e.g. "image/jpeg" or "image/webp".
   * @param quality - JPEG or Webp compression from 0 to 1. Default is 0.92.
   * @param frame - The frame the extraction is restricted to.
   * @returns - HTML Image of the target
   */
  async image(t, e, r, s) {
    const n = new Image();
    return n.src = await this.base64(t, e, r, s), n;
  }
  /**
   * Will return a base64 encoded string of this target. It works by calling
   *  `Extract.canvas` and then running toDataURL on that.
   * @param target - A displayObject or renderTexture
   *  to convert. If left empty will use the main renderer
   * @param format - Image format, e.g. "image/jpeg" or "image/webp".
   * @param quality - JPEG or Webp compression from 0 to 1. Default is 0.92.
   * @param frame - The frame the extraction is restricted to.
   * @returns - A base64 encoded string of the texture.
   */
  async base64(t, e, r, s) {
    const n = this.canvas(t, s);
    if (n.toBlob !== void 0)
      return new Promise((a, o) => {
        n.toBlob((h) => {
          if (!h) {
            o(new Error("ICanvas.toBlob failed!"));
            return;
          }
          const l = new FileReader();
          l.onload = () => a(l.result), l.onerror = o, l.readAsDataURL(h);
        }, e, r);
      });
    if (n.toDataURL !== void 0)
      return n.toDataURL(e, r);
    if (n.convertToBlob !== void 0) {
      const a = await n.convertToBlob({ type: e, quality: r });
      return new Promise((o, h) => {
        const l = new FileReader();
        l.onload = () => o(l.result), l.onerror = h, l.readAsDataURL(a);
      });
    }
    throw new Error("Extract.base64() requires ICanvas.toDataURL, ICanvas.toBlob, or ICanvas.convertToBlob to be implemented");
  }
  /**
   * Creates a Canvas element, renders this target to it and then returns it.
   * @param target - A displayObject or renderTexture
   *  to convert. If left empty will use the main renderer
   * @param frame - The frame the extraction is restricted to.
   * @returns - A Canvas element with the texture rendered on.
   */
  canvas(t, e) {
    const { pixels: r, width: s, height: n, flipY: a, premultipliedAlpha: o } = this._rawPixels(t, e);
    a && ri._flipY(r, s, n), o && ri._unpremultiplyAlpha(r);
    const h = new Jp(s, n, 1), l = new ImageData(new Uint8ClampedArray(r.buffer), s, n);
    return h.context.putImageData(l, 0, 0), h.canvas;
  }
  /**
   * Will return a one-dimensional array containing the pixel data of the entire texture in RGBA
   * order, with integer values between 0 and 255 (included).
   * @param target - A displayObject or renderTexture
   *  to convert. If left empty will use the main renderer
   * @param frame - The frame the extraction is restricted to.
   * @returns - One-dimensional array containing the pixel data of the entire texture
   */
  pixels(t, e) {
    const { pixels: r, width: s, height: n, flipY: a, premultipliedAlpha: o } = this._rawPixels(t, e);
    return a && ri._flipY(r, s, n), o && ri._unpremultiplyAlpha(r), r;
  }
  _rawPixels(t, e) {
    const r = this.renderer;
    if (!r)
      throw new Error("The Extract has already been destroyed");
    let s, n = !1, a = !1, o, h = !1;
    t && (t instanceof lr ? o = t : (o = r.generateTexture(t, {
      region: e,
      resolution: r.resolution,
      multisample: r.multisample
    }), h = !0, e && (Vi.width = e.width, Vi.height = e.height, e = Vi)));
    const l = r.gl;
    if (o) {
      if (s = o.baseTexture.resolution, e = e ?? o.frame, n = !1, a = o.baseTexture.alphaMode > 0 && o.baseTexture.format === P.RGBA, !h) {
        r.renderTexture.bind(o);
        const f = o.framebuffer.glFramebuffers[r.CONTEXT_UID];
        f.blitFramebuffer && r.framebuffer.bind(f.blitFramebuffer);
      }
    } else
      s = r.resolution, e || (e = Vi, e.width = r.width / s, e.height = r.height / s), n = !0, a = this._rendererPremultipliedAlpha, r.renderTexture.bind();
    const u = Math.max(Math.round(e.width * s), 1), c = Math.max(Math.round(e.height * s), 1), d = new Uint8Array(f_ * u * c);
    return l.readPixels(
      Math.round(e.x * s),
      Math.round(e.y * s),
      u,
      c,
      l.RGBA,
      l.UNSIGNED_BYTE,
      d
    ), h && (o == null || o.destroy(!0)), { pixels: d, width: u, height: c, flipY: n, premultipliedAlpha: a };
  }
  /** Destroys the extract. */
  destroy() {
    this.renderer = null;
  }
  static _flipY(t, e, r) {
    const s = e << 2, n = r >> 1, a = new Uint8Array(s);
    for (let o = 0; o < n; o++) {
      const h = o * s, l = (r - o - 1) * s;
      a.set(t.subarray(h, h + s)), t.copyWithin(h, l, l + s), t.set(a, l);
    }
  }
  static _unpremultiplyAlpha(t) {
    t instanceof Uint8ClampedArray && (t = new Uint8Array(t.buffer));
    const e = t.length;
    for (let r = 0; r < e; r += 4) {
      const s = t[r + 3];
      if (s !== 0) {
        const n = 255.001 / s;
        t[r] = t[r] * n + 0.5, t[r + 1] = t[r + 1] * n + 0.5, t[r + 2] = t[r + 2] * n + 0.5;
      }
    }
  }
};
Fu.extension = {
  name: "extract",
  type: F.RendererSystem
};
let p_ = Fu;
k.add(p_);
const As = {
  build(i) {
    const t = i.points;
    let e, r, s, n, a, o;
    if (i.type === At.CIRC) {
      const p = i.shape;
      e = p.x, r = p.y, a = o = p.radius, s = n = 0;
    } else if (i.type === At.ELIP) {
      const p = i.shape;
      e = p.x, r = p.y, a = p.width, o = p.height, s = n = 0;
    } else {
      const p = i.shape, m = p.width / 2, y = p.height / 2;
      e = p.x + m, r = p.y + y, a = o = Math.max(0, Math.min(p.radius, Math.min(m, y))), s = m - a, n = y - o;
    }
    if (!(a >= 0 && o >= 0 && s >= 0 && n >= 0)) {
      t.length = 0;
      return;
    }
    const h = Math.ceil(2.3 * Math.sqrt(a + o)), l = h * 8 + (s ? 4 : 0) + (n ? 4 : 0);
    if (t.length = l, l === 0)
      return;
    if (h === 0) {
      t.length = 8, t[0] = t[6] = e + s, t[1] = t[3] = r + n, t[2] = t[4] = e - s, t[5] = t[7] = r - n;
      return;
    }
    let u = 0, c = h * 4 + (s ? 2 : 0) + 2, d = c, f = l;
    {
      const p = s + a, m = n, y = e + p, v = e - p, b = r + m;
      if (t[u++] = y, t[u++] = b, t[--c] = b, t[--c] = v, n) {
        const _ = r - m;
        t[d++] = v, t[d++] = _, t[--f] = _, t[--f] = y;
      }
    }
    for (let p = 1; p < h; p++) {
      const m = Math.PI / 2 * (p / h), y = s + Math.cos(m) * a, v = n + Math.sin(m) * o, b = e + y, _ = e - y, g = r + v, w = r - v;
      t[u++] = b, t[u++] = g, t[--c] = g, t[--c] = _, t[d++] = _, t[d++] = w, t[--f] = w, t[--f] = b;
    }
    {
      const p = s, m = n + o, y = e + p, v = e - p, b = r + m, _ = r - m;
      t[u++] = y, t[u++] = b, t[--f] = _, t[--f] = y, s && (t[u++] = v, t[u++] = b, t[--f] = _, t[--f] = v);
    }
  },
  triangulate(i, t) {
    const e = i.points, r = t.points, s = t.indices;
    if (e.length === 0)
      return;
    let n = r.length / 2;
    const a = n;
    let o, h;
    if (i.type !== At.RREC) {
      const u = i.shape;
      o = u.x, h = u.y;
    } else {
      const u = i.shape;
      o = u.x + u.width / 2, h = u.y + u.height / 2;
    }
    const l = i.matrix;
    r.push(
      i.matrix ? l.a * o + l.c * h + l.tx : o,
      i.matrix ? l.b * o + l.d * h + l.ty : h
    ), n++, r.push(e[0], e[1]);
    for (let u = 2; u < e.length; u += 2)
      r.push(e[u], e[u + 1]), s.push(n++, a, n);
    s.push(a + 1, a, n);
  }
};
function Dh(i, t = !1) {
  const e = i.length;
  if (e < 6)
    return;
  let r = 0;
  for (let s = 0, n = i[e - 2], a = i[e - 1]; s < e; s += 2) {
    const o = i[s], h = i[s + 1];
    r += (o - n) * (h + a), n = o, a = h;
  }
  if (!t && r > 0 || t && r <= 0) {
    const s = e / 2;
    for (let n = s + s % 2; n < e; n += 2) {
      const a = e - n - 2, o = e - n - 1, h = n, l = n + 1;
      [i[a], i[h]] = [i[h], i[a]], [i[o], i[l]] = [i[l], i[o]];
    }
  }
}
const Ou = {
  build(i) {
    i.points = i.shape.points.slice();
  },
  triangulate(i, t) {
    let e = i.points;
    const r = i.holes, s = t.points, n = t.indices;
    if (e.length >= 6) {
      Dh(e, !1);
      const a = [];
      for (let l = 0; l < r.length; l++) {
        const u = r[l];
        Dh(u.points, !0), a.push(e.length / 2), e = e.concat(u.points);
      }
      const o = id(e, a, 2);
      if (!o)
        return;
      const h = s.length / 2;
      for (let l = 0; l < o.length; l += 3)
        n.push(o[l] + h), n.push(o[l + 1] + h), n.push(o[l + 2] + h);
      for (let l = 0; l < e.length; l++)
        s.push(e[l]);
    }
  }
}, m_ = {
  build(i) {
    const t = i.shape, e = t.x, r = t.y, s = t.width, n = t.height, a = i.points;
    a.length = 0, s >= 0 && n >= 0 && a.push(
      e,
      r,
      e + s,
      r,
      e + s,
      r + n,
      e,
      r + n
    );
  },
  triangulate(i, t) {
    const e = i.points, r = t.points;
    if (e.length === 0)
      return;
    const s = r.length / 2;
    r.push(
      e[0],
      e[1],
      e[2],
      e[3],
      e[6],
      e[7],
      e[4],
      e[5]
    ), t.indices.push(
      s,
      s + 1,
      s + 2,
      s + 1,
      s + 2,
      s + 3
    );
  }
}, g_ = {
  build(i) {
    As.build(i);
  },
  triangulate(i, t) {
    As.triangulate(i, t);
  }
};
var Lt = /* @__PURE__ */ ((i) => (i.MITER = "miter", i.BEVEL = "bevel", i.ROUND = "round", i))(Lt || {}), be = /* @__PURE__ */ ((i) => (i.BUTT = "butt", i.ROUND = "round", i.SQUARE = "square", i))(be || {});
const Ur = {
  adaptive: !0,
  maxLength: 10,
  minSegments: 8,
  maxSegments: 2048,
  epsilon: 1e-4,
  _segmentsCount(i, t = 20) {
    if (!this.adaptive || !i || isNaN(i))
      return t;
    let e = Math.ceil(i / this.maxLength);
    return e < this.minSegments ? e = this.minSegments : e > this.maxSegments && (e = this.maxSegments), e;
  }
};
class Fh {
  /**
   * Calculate information of the arc for {@link PIXI.Graphics.arcTo}.
   * @private
   * @param x1 - The x-coordinate of the first control point of the arc
   * @param y1 - The y-coordinate of the first control point of the arc
   * @param x2 - The x-coordinate of the second control point of the arc
   * @param y2 - The y-coordinate of the second control point of the arc
   * @param radius - The radius of the arc
   * @param points - Collection of points to add to
   * @returns - If the arc length is valid, return center of circle, radius and other info otherwise `null`.
   */
  static curveTo(t, e, r, s, n, a) {
    const o = a[a.length - 2], h = a[a.length - 1] - e, l = o - t, u = s - e, c = r - t, d = Math.abs(h * c - l * u);
    if (d < 1e-8 || n === 0)
      return (a[a.length - 2] !== t || a[a.length - 1] !== e) && a.push(t, e), null;
    const f = h * h + l * l, p = u * u + c * c, m = h * u + l * c, y = n * Math.sqrt(f) / d, v = n * Math.sqrt(p) / d, b = y * m / f, _ = v * m / p, g = y * c + v * l, w = y * u + v * h, R = l * (v + b), A = h * (v + b), x = c * (y + _), T = u * (y + _), S = Math.atan2(A - w, R - g), M = Math.atan2(T - w, x - g);
    return {
      cx: g + t,
      cy: w + e,
      radius: n,
      startAngle: S,
      endAngle: M,
      anticlockwise: l * u > c * h
    };
  }
  /**
   * The arc method creates an arc/curve (used to create circles, or parts of circles).
   * @private
   * @param _startX - Start x location of arc
   * @param _startY - Start y location of arc
   * @param cx - The x-coordinate of the center of the circle
   * @param cy - The y-coordinate of the center of the circle
   * @param radius - The radius of the circle
   * @param startAngle - The starting angle, in radians (0 is at the 3 o'clock position
   *  of the arc's circle)
   * @param endAngle - The ending angle, in radians
   * @param _anticlockwise - Specifies whether the drawing should be
   *  counter-clockwise or clockwise. False is default, and indicates clockwise, while true
   *  indicates counter-clockwise.
   * @param points - Collection of points to add to
   */
  static arc(t, e, r, s, n, a, o, h, l) {
    const u = o - a, c = Ur._segmentsCount(
      Math.abs(u) * n,
      Math.ceil(Math.abs(u) / ms) * 40
    ), d = u / (c * 2), f = d * 2, p = Math.cos(d), m = Math.sin(d), y = c - 1, v = y % 1 / y;
    for (let b = 0; b <= y; ++b) {
      const _ = b + v * b, g = d + a + f * _, w = Math.cos(g), R = -Math.sin(g);
      l.push(
        (p * w + m * R) * n + r,
        (p * -R + m * w) * n + s
      );
    }
  }
}
class y_ {
  constructor() {
    this.reset();
  }
  /**
   * Begin batch part.
   * @param style
   * @param startIndex
   * @param attribStart
   */
  begin(t, e, r) {
    this.reset(), this.style = t, this.start = e, this.attribStart = r;
  }
  /**
   * End batch part.
   * @param endIndex
   * @param endAttrib
   */
  end(t, e) {
    this.attribSize = e - this.attribStart, this.size = t - this.start;
  }
  reset() {
    this.style = null, this.size = 0, this.start = 0, this.attribStart = 0, this.attribSize = 0;
  }
}
class qa {
  /**
   * Calculate length of bezier curve.
   * Analytical solution is impossible, since it involves an integral that does not integrate in general.
   * Therefore numerical solution is used.
   * @private
   * @param fromX - Starting point x
   * @param fromY - Starting point y
   * @param cpX - Control point x
   * @param cpY - Control point y
   * @param cpX2 - Second Control point x
   * @param cpY2 - Second Control point y
   * @param toX - Destination point x
   * @param toY - Destination point y
   * @returns - Length of bezier curve
   */
  static curveLength(t, e, r, s, n, a, o, h) {
    let l = 0, u = 0, c = 0, d = 0, f = 0, p = 0, m = 0, y = 0, v = 0, b = 0, _ = 0, g = t, w = e;
    for (let R = 1; R <= 10; ++R)
      u = R / 10, c = u * u, d = c * u, f = 1 - u, p = f * f, m = p * f, y = m * t + 3 * p * u * r + 3 * f * c * n + d * o, v = m * e + 3 * p * u * s + 3 * f * c * a + d * h, b = g - y, _ = w - v, g = y, w = v, l += Math.sqrt(b * b + _ * _);
    return l;
  }
  /**
   * Calculate the points for a bezier curve and then draws it.
   *
   * Ignored from docs since it is not directly exposed.
   * @ignore
   * @param cpX - Control point x
   * @param cpY - Control point y
   * @param cpX2 - Second Control point x
   * @param cpY2 - Second Control point y
   * @param toX - Destination point x
   * @param toY - Destination point y
   * @param points - Path array to push points into
   */
  static curveTo(t, e, r, s, n, a, o) {
    const h = o[o.length - 2], l = o[o.length - 1];
    o.length -= 2;
    const u = Ur._segmentsCount(
      qa.curveLength(h, l, t, e, r, s, n, a)
    );
    let c = 0, d = 0, f = 0, p = 0, m = 0;
    o.push(h, l);
    for (let y = 1, v = 0; y <= u; ++y)
      v = y / u, c = 1 - v, d = c * c, f = d * c, p = v * v, m = p * v, o.push(
        f * h + 3 * d * v * t + 3 * c * p * r + m * n,
        f * l + 3 * d * v * e + 3 * c * p * s + m * a
      );
  }
}
function Oh(i, t, e, r, s, n, a, o) {
  const h = i - e * s, l = t - r * s, u = i + e * n, c = t + r * n;
  let d, f;
  a ? (d = r, f = -e) : (d = -r, f = e);
  const p = h + d, m = l + f, y = u + d, v = c + f;
  return o.push(
    p,
    m,
    y,
    v
  ), 2;
}
function We(i, t, e, r, s, n, a, o) {
  const h = e - i, l = r - t;
  let u = Math.atan2(h, l), c = Math.atan2(s - i, n - t);
  o && u < c ? u += Math.PI * 2 : !o && u > c && (c += Math.PI * 2);
  let d = u;
  const f = c - u, p = Math.abs(f), m = Math.sqrt(h * h + l * l), y = (15 * p * Math.sqrt(m) / Math.PI >> 0) + 1, v = f / y;
  if (d += v, o) {
    a.push(
      i,
      t,
      e,
      r
    );
    for (let b = 1, _ = d; b < y; b++, _ += v)
      a.push(
        i,
        t,
        i + Math.sin(_) * m,
        t + Math.cos(_) * m
      );
    a.push(
      i,
      t,
      s,
      n
    );
  } else {
    a.push(
      e,
      r,
      i,
      t
    );
    for (let b = 1, _ = d; b < y; b++, _ += v)
      a.push(
        i + Math.sin(_) * m,
        t + Math.cos(_) * m,
        i,
        t
      );
    a.push(
      s,
      n,
      i,
      t
    );
  }
  return y * 2;
}
function __(i, t) {
  const e = i.shape;
  let r = i.points || e.points.slice();
  const s = t.closePointEps;
  if (r.length === 0)
    return;
  const n = i.lineStyle, a = new K(r[0], r[1]), o = new K(r[r.length - 2], r[r.length - 1]), h = e.type !== At.POLY || e.closeStroke, l = Math.abs(a.x - o.x) < s && Math.abs(a.y - o.y) < s;
  if (h) {
    r = r.slice(), l && (r.pop(), r.pop(), o.set(r[r.length - 2], r[r.length - 1]));
    const $ = (a.x + o.x) * 0.5, z = (o.y + a.y) * 0.5;
    r.unshift($, z), r.push($, z);
  }
  const u = t.points, c = r.length / 2;
  let d = r.length;
  const f = u.length / 2, p = n.width / 2, m = p * p, y = n.miterLimit * n.miterLimit;
  let v = r[0], b = r[1], _ = r[2], g = r[3], w = 0, R = 0, A = -(b - g), x = v - _, T = 0, S = 0, M = Math.sqrt(A * A + x * x);
  A /= M, x /= M, A *= p, x *= p;
  const C = n.alignment, E = (1 - C) * 2, I = C * 2;
  h || (n.cap === be.ROUND ? d += We(
    v - A * (E - I) * 0.5,
    b - x * (E - I) * 0.5,
    v - A * E,
    b - x * E,
    v + A * I,
    b + x * I,
    u,
    !0
  ) + 2 : n.cap === be.SQUARE && (d += Oh(v, b, A, x, E, I, !0, u))), u.push(
    v - A * E,
    b - x * E,
    v + A * I,
    b + x * I
  );
  for (let $ = 1; $ < c - 1; ++$) {
    v = r[($ - 1) * 2], b = r[($ - 1) * 2 + 1], _ = r[$ * 2], g = r[$ * 2 + 1], w = r[($ + 1) * 2], R = r[($ + 1) * 2 + 1], A = -(b - g), x = v - _, M = Math.sqrt(A * A + x * x), A /= M, x /= M, A *= p, x *= p, T = -(g - R), S = _ - w, M = Math.sqrt(T * T + S * S), T /= M, S /= M, T *= p, S *= p;
    const z = _ - v, ht = b - g, D = _ - w, B = R - g, Z = z * D + ht * B, J = ht * D - B * z, et = J < 0;
    if (Math.abs(J) < 1e-3 * Math.abs(Z)) {
      u.push(
        _ - A * E,
        g - x * E,
        _ + A * I,
        g + x * I
      ), Z >= 0 && (n.join === Lt.ROUND ? d += We(
        _,
        g,
        _ - A * E,
        g - x * E,
        _ - T * E,
        g - S * E,
        u,
        !1
      ) + 4 : d += 2, u.push(
        _ - T * I,
        g - S * I,
        _ + T * E,
        g + S * E
      ));
      continue;
    }
    const yt = (-A + v) * (-x + g) - (-A + _) * (-x + b), ct = (-T + w) * (-S + g) - (-T + _) * (-S + R), _t = (z * ct - D * yt) / J, St = (B * yt - ht * ct) / J, Ot = (_t - _) * (_t - _) + (St - g) * (St - g), Tt = _ + (_t - _) * E, it = g + (St - g) * E, dt = _ - (_t - _) * I, pt = g - (St - g) * I, Zt = Math.min(z * z + ht * ht, D * D + B * B), Qt = et ? E : I, Xr = Zt + Qt * Qt * m, dc = Ot <= Xr;
    let Ti = n.join;
    if (Ti === Lt.MITER && Ot / m > y && (Ti = Lt.BEVEL), dc)
      switch (Ti) {
        case Lt.MITER: {
          u.push(
            Tt,
            it,
            dt,
            pt
          );
          break;
        }
        case Lt.BEVEL: {
          et ? u.push(
            Tt,
            it,
            // inner miter point
            _ + A * I,
            g + x * I,
            // first segment's outer vertex
            Tt,
            it,
            // inner miter point
            _ + T * I,
            g + S * I
          ) : u.push(
            _ - A * E,
            g - x * E,
            // first segment's inner vertex
            dt,
            pt,
            // outer miter point
            _ - T * E,
            g - S * E,
            // second segment's outer vertex
            dt,
            pt
          ), d += 2;
          break;
        }
        case Lt.ROUND: {
          et ? (u.push(
            Tt,
            it,
            _ + A * I,
            g + x * I
          ), d += We(
            _,
            g,
            _ + A * I,
            g + x * I,
            _ + T * I,
            g + S * I,
            u,
            !0
          ) + 4, u.push(
            Tt,
            it,
            _ + T * I,
            g + S * I
          )) : (u.push(
            _ - A * E,
            g - x * E,
            dt,
            pt
          ), d += We(
            _,
            g,
            _ - A * E,
            g - x * E,
            _ - T * E,
            g - S * E,
            u,
            !1
          ) + 4, u.push(
            _ - T * E,
            g - S * E,
            dt,
            pt
          ));
          break;
        }
      }
    else {
      switch (u.push(
        _ - A * E,
        g - x * E,
        // first segment's inner vertex
        _ + A * I,
        g + x * I
      ), Ti) {
        case Lt.MITER: {
          et ? u.push(
            dt,
            pt,
            // inner miter point
            dt,
            pt
          ) : u.push(
            Tt,
            it,
            // outer miter point
            Tt,
            it
          ), d += 2;
          break;
        }
        case Lt.ROUND: {
          et ? d += We(
            _,
            g,
            _ + A * I,
            g + x * I,
            _ + T * I,
            g + S * I,
            u,
            !0
          ) + 2 : d += We(
            _,
            g,
            _ - A * E,
            g - x * E,
            _ - T * E,
            g - S * E,
            u,
            !1
          ) + 2;
          break;
        }
      }
      u.push(
        _ - T * E,
        g - S * E,
        // second segment's inner vertex
        _ + T * I,
        g + S * I
      ), d += 2;
    }
  }
  v = r[(c - 2) * 2], b = r[(c - 2) * 2 + 1], _ = r[(c - 1) * 2], g = r[(c - 1) * 2 + 1], A = -(b - g), x = v - _, M = Math.sqrt(A * A + x * x), A /= M, x /= M, A *= p, x *= p, u.push(
    _ - A * E,
    g - x * E,
    _ + A * I,
    g + x * I
  ), h || (n.cap === be.ROUND ? d += We(
    _ - A * (E - I) * 0.5,
    g - x * (E - I) * 0.5,
    _ - A * E,
    g - x * E,
    _ + A * I,
    g + x * I,
    u,
    !1
  ) + 2 : n.cap === be.SQUARE && (d += Oh(_, g, A, x, E, I, !1, u)));
  const G = t.indices, U = Ur.epsilon * Ur.epsilon;
  for (let $ = f; $ < d + f - 2; ++$)
    v = u[$ * 2], b = u[$ * 2 + 1], _ = u[($ + 1) * 2], g = u[($ + 1) * 2 + 1], w = u[($ + 2) * 2], R = u[($ + 2) * 2 + 1], !(Math.abs(v * (g - R) + _ * (R - b) + w * (b - g)) < U) && G.push($, $ + 1, $ + 2);
}
function v_(i, t) {
  let e = 0;
  const r = i.shape, s = i.points || r.points, n = r.type !== At.POLY || r.closeStroke;
  if (s.length === 0)
    return;
  const a = t.points, o = t.indices, h = s.length / 2, l = a.length / 2;
  let u = l;
  for (a.push(s[0], s[1]), e = 1; e < h; e++)
    a.push(s[e * 2], s[e * 2 + 1]), o.push(u, u + 1), u++;
  n && o.push(u, l);
}
function Nh(i, t) {
  i.lineStyle.native ? v_(i, t) : __(i, t);
}
class Ka {
  /**
   * Calculate length of quadratic curve
   * @see {@link http://www.malczak.linuxpl.com/blog/quadratic-bezier-curve-length/}
   * for the detailed explanation of math behind this.
   * @private
   * @param fromX - x-coordinate of curve start point
   * @param fromY - y-coordinate of curve start point
   * @param cpX - x-coordinate of curve control point
   * @param cpY - y-coordinate of curve control point
   * @param toX - x-coordinate of curve end point
   * @param toY - y-coordinate of curve end point
   * @returns - Length of quadratic curve
   */
  static curveLength(t, e, r, s, n, a) {
    const o = t - 2 * r + n, h = e - 2 * s + a, l = 2 * r - 2 * t, u = 2 * s - 2 * e, c = 4 * (o * o + h * h), d = 4 * (o * l + h * u), f = l * l + u * u, p = 2 * Math.sqrt(c + d + f), m = Math.sqrt(c), y = 2 * c * m, v = 2 * Math.sqrt(f), b = d / m;
    return (y * p + m * d * (p - v) + (4 * f * c - d * d) * Math.log((2 * m + b + p) / (b + v))) / (4 * y);
  }
  /**
   * Calculate the points for a quadratic bezier curve and then draws it.
   * Based on: https://stackoverflow.com/questions/785097/how-do-i-implement-a-bezier-curve-in-c
   * @private
   * @param cpX - Control point x
   * @param cpY - Control point y
   * @param toX - Destination point x
   * @param toY - Destination point y
   * @param points - Points to add segments to.
   */
  static curveTo(t, e, r, s, n) {
    const a = n[n.length - 2], o = n[n.length - 1], h = Ur._segmentsCount(
      Ka.curveLength(a, o, t, e, r, s)
    );
    let l = 0, u = 0;
    for (let c = 1; c <= h; ++c) {
      const d = c / h;
      l = a + (t - a) * d, u = o + (e - o) * d, n.push(
        l + (t + (r - t) * d - l) * d,
        u + (e + (s - e) * d - u) * d
      );
    }
  }
}
const An = {
  [At.POLY]: Ou,
  [At.CIRC]: As,
  [At.ELIP]: As,
  [At.RECT]: m_,
  [At.RREC]: g_
}, Lh = [], zi = [];
class Ss {
  /**
   * @param {PIXI.Circle|PIXI.Ellipse|PIXI.Polygon|PIXI.Rectangle|PIXI.RoundedRectangle} shape - The shape object to draw.
   * @param fillStyle - the width of the line to draw
   * @param lineStyle - the color of the line to draw
   * @param matrix - Transform matrix
   */
  constructor(t, e = null, r = null, s = null) {
    this.points = [], this.holes = [], this.shape = t, this.lineStyle = r, this.fillStyle = e, this.matrix = s, this.type = t.type;
  }
  /**
   * Creates a new GraphicsData object with the same values as this one.
   * @returns - Cloned GraphicsData object
   */
  clone() {
    return new Ss(
      this.shape,
      this.fillStyle,
      this.lineStyle,
      this.matrix
    );
  }
  /** Destroys the Graphics data. */
  destroy() {
    this.shape = null, this.holes.length = 0, this.holes = null, this.points.length = 0, this.points = null, this.lineStyle = null, this.fillStyle = null;
  }
}
const pr = new K(), Nu = class Lu extends Ll {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super(), this.closePointEps = 1e-4, this.boundsPadding = 0, this.uvsFloat32 = null, this.indicesUint16 = null, this.batchable = !1, this.points = [], this.colors = [], this.uvs = [], this.indices = [], this.textureIds = [], this.graphicsData = [], this.drawCalls = [], this.batchDirty = -1, this.batches = [], this.dirty = 0, this.cacheDirty = -1, this.clearDirty = 0, this.shapeIndex = 0, this._bounds = new xs(), this.boundsDirty = -1;
  }
  /**
   * Get the current bounds of the graphic geometry.
   *
   * Since 6.5.0, bounds of the graphics geometry are calculated based on the vertices of generated geometry.
   * Since shapes or strokes with full transparency (`alpha: 0`) will not generate geometry, they are not considered
   * when calculating bounds for the graphics geometry. See PR [#8343]{@link https://github.com/pixijs/pixijs/pull/8343}
   * and issue [#8623]{@link https://github.com/pixijs/pixijs/pull/8623}.
   * @readonly
   */
  get bounds() {
    return this.updateBatches(), this.boundsDirty !== this.dirty && (this.boundsDirty = this.dirty, this.calculateBounds()), this._bounds;
  }
  /** Call if you changed graphicsData manually. Empties all batch buffers. */
  invalidate() {
    this.boundsDirty = -1, this.dirty++, this.batchDirty++, this.shapeIndex = 0, this.points.length = 0, this.colors.length = 0, this.uvs.length = 0, this.indices.length = 0, this.textureIds.length = 0;
    for (let t = 0; t < this.drawCalls.length; t++)
      this.drawCalls[t].texArray.clear(), zi.push(this.drawCalls[t]);
    this.drawCalls.length = 0;
    for (let t = 0; t < this.batches.length; t++) {
      const e = this.batches[t];
      e.reset(), Lh.push(e);
    }
    this.batches.length = 0;
  }
  /**
   * Clears the graphics that were drawn to this Graphics object, and resets fill and line style settings.
   * @returns - This GraphicsGeometry object. Good for chaining method calls
   */
  clear() {
    return this.graphicsData.length > 0 && (this.invalidate(), this.clearDirty++, this.graphicsData.length = 0), this;
  }
  /**
   * Draws the given shape to this Graphics object. Can be any of Circle, Rectangle, Ellipse, Line or Polygon.
   * @param {PIXI.Circle|PIXI.Ellipse|PIXI.Polygon|PIXI.Rectangle|PIXI.RoundedRectangle} shape - The shape object to draw.
   * @param fillStyle - Defines style of the fill.
   * @param lineStyle - Defines style of the lines.
   * @param matrix - Transform applied to the points of the shape.
   * @returns - Returns geometry for chaining.
   */
  drawShape(t, e = null, r = null, s = null) {
    const n = new Ss(t, e, r, s);
    return this.graphicsData.push(n), this.dirty++, this;
  }
  /**
   * Draws the given shape to this Graphics object. Can be any of Circle, Rectangle, Ellipse, Line or Polygon.
   * @param {PIXI.Circle|PIXI.Ellipse|PIXI.Polygon|PIXI.Rectangle|PIXI.RoundedRectangle} shape - The shape object to draw.
   * @param matrix - Transform applied to the points of the shape.
   * @returns - Returns geometry for chaining.
   */
  drawHole(t, e = null) {
    if (!this.graphicsData.length)
      return null;
    const r = new Ss(t, null, null, e), s = this.graphicsData[this.graphicsData.length - 1];
    return r.lineStyle = s.lineStyle, s.holes.push(r), this.dirty++, this;
  }
  /** Destroys the GraphicsGeometry object. */
  destroy() {
    super.destroy();
    for (let t = 0; t < this.graphicsData.length; ++t)
      this.graphicsData[t].destroy();
    this.points.length = 0, this.points = null, this.colors.length = 0, this.colors = null, this.uvs.length = 0, this.uvs = null, this.indices.length = 0, this.indices = null, this.indexBuffer.destroy(), this.indexBuffer = null, this.graphicsData.length = 0, this.graphicsData = null, this.drawCalls.length = 0, this.drawCalls = null, this.batches.length = 0, this.batches = null, this._bounds = null;
  }
  /**
   * Check to see if a point is contained within this geometry.
   * @param point - Point to check if it's contained.
   * @returns {boolean} `true` if the point is contained within geometry.
   */
  containsPoint(t) {
    const e = this.graphicsData;
    for (let r = 0; r < e.length; ++r) {
      const s = e[r];
      if (s.fillStyle.visible && s.shape && (s.matrix ? s.matrix.applyInverse(t, pr) : pr.copyFrom(t), s.shape.contains(pr.x, pr.y))) {
        let n = !1;
        if (s.holes) {
          for (let a = 0; a < s.holes.length; a++)
            if (s.holes[a].shape.contains(pr.x, pr.y)) {
              n = !0;
              break;
            }
        }
        if (!n)
          return !0;
      }
    }
    return !1;
  }
  /**
   * Generates intermediate batch data. Either gets converted to drawCalls
   * or used to convert to batch objects directly by the Graphics object.
   */
  updateBatches() {
    if (!this.graphicsData.length) {
      this.batchable = !0;
      return;
    }
    if (!this.validateBatching())
      return;
    this.cacheDirty = this.dirty;
    const t = this.uvs, e = this.graphicsData;
    let r = null, s = null;
    this.batches.length > 0 && (r = this.batches[this.batches.length - 1], s = r.style);
    for (let h = this.shapeIndex; h < e.length; h++) {
      this.shapeIndex++;
      const l = e[h], u = l.fillStyle, c = l.lineStyle;
      An[l.type].build(l), l.matrix && this.transformPoints(l.points, l.matrix), (u.visible || c.visible) && this.processHoles(l.holes);
      for (let d = 0; d < 2; d++) {
        const f = d === 0 ? u : c;
        if (!f.visible)
          continue;
        const p = f.texture.baseTexture, m = this.indices.length, y = this.points.length / 2;
        p.wrapMode = Ee.REPEAT, d === 0 ? this.processFill(l) : this.processLine(l);
        const v = this.points.length / 2 - y;
        v !== 0 && (r && !this._compareStyles(s, f) && (r.end(m, y), r = null), r || (r = Lh.pop() || new y_(), r.begin(f, m, y), this.batches.push(r), s = f), this.addUvs(this.points, t, f.texture, y, v, f.matrix));
      }
    }
    const n = this.indices.length, a = this.points.length / 2;
    if (r && r.end(n, a), this.batches.length === 0) {
      this.batchable = !0;
      return;
    }
    const o = a > 65535;
    this.indicesUint16 && this.indices.length === this.indicesUint16.length && o === this.indicesUint16.BYTES_PER_ELEMENT > 2 ? this.indicesUint16.set(this.indices) : this.indicesUint16 = o ? new Uint32Array(this.indices) : new Uint16Array(this.indices), this.batchable = this.isBatchable(), this.batchable ? this.packBatches() : this.buildDrawCalls();
  }
  /**
   * Affinity check
   * @param styleA
   * @param styleB
   */
  _compareStyles(t, e) {
    return !(!t || !e || t.texture.baseTexture !== e.texture.baseTexture || t.color + t.alpha !== e.color + e.alpha || !!t.native != !!e.native);
  }
  /** Test geometry for batching process. */
  validateBatching() {
    if (this.dirty === this.cacheDirty || !this.graphicsData.length)
      return !1;
    for (let t = 0, e = this.graphicsData.length; t < e; t++) {
      const r = this.graphicsData[t], s = r.fillStyle, n = r.lineStyle;
      if (s && !s.texture.baseTexture.valid || n && !n.texture.baseTexture.valid)
        return !1;
    }
    return !0;
  }
  /** Offset the indices so that it works with the batcher. */
  packBatches() {
    this.batchDirty++, this.uvsFloat32 = new Float32Array(this.uvs);
    const t = this.batches;
    for (let e = 0, r = t.length; e < r; e++) {
      const s = t[e];
      for (let n = 0; n < s.size; n++) {
        const a = s.start + n;
        this.indicesUint16[a] = this.indicesUint16[a] - s.attribStart;
      }
    }
  }
  /**
   * Checks to see if this graphics geometry can be batched.
   * Currently it needs to be small enough and not contain any native lines.
   */
  isBatchable() {
    if (this.points.length > 65535 * 2)
      return !1;
    const t = this.batches;
    for (let e = 0; e < t.length; e++)
      if (t[e].style.native)
        return !1;
    return this.points.length < Lu.BATCHABLE_SIZE * 2;
  }
  /** Converts intermediate batches data to drawCalls. */
  buildDrawCalls() {
    let t = ++W._globalBatch;
    for (let c = 0; c < this.drawCalls.length; c++)
      this.drawCalls[c].texArray.clear(), zi.push(this.drawCalls[c]);
    this.drawCalls.length = 0;
    const e = this.colors, r = this.textureIds;
    let s = zi.pop();
    s || (s = new ra(), s.texArray = new aa()), s.texArray.count = 0, s.start = 0, s.size = 0, s.type = oe.TRIANGLES;
    let n = 0, a = null, o = 0, h = !1, l = oe.TRIANGLES, u = 0;
    this.drawCalls.push(s);
    for (let c = 0; c < this.batches.length; c++) {
      const d = this.batches[c], f = 8, p = d.style, m = p.texture.baseTexture;
      h !== !!p.native && (h = !!p.native, l = h ? oe.LINES : oe.TRIANGLES, a = null, n = f, t++), a !== m && (a = m, m._batchEnabled !== t && (n === f && (t++, n = 0, s.size > 0 && (s = zi.pop(), s || (s = new ra(), s.texArray = new aa()), this.drawCalls.push(s)), s.start = u, s.size = 0, s.texArray.count = 0, s.type = l), m.touched = 1, m._batchEnabled = t, m._batchLocation = n, m.wrapMode = Ee.REPEAT, s.texArray.elements[s.texArray.count++] = m, n++)), s.size += d.size, u += d.size, o = m._batchLocation, this.addColors(e, p.color, p.alpha, d.attribSize, d.attribStart), this.addTextureIds(r, o, d.attribSize, d.attribStart);
    }
    W._globalBatch = t, this.packAttributes();
  }
  /** Packs attributes to single buffer. */
  packAttributes() {
    const t = this.points, e = this.uvs, r = this.colors, s = this.textureIds, n = new ArrayBuffer(t.length * 3 * 4), a = new Float32Array(n), o = new Uint32Array(n);
    let h = 0;
    for (let l = 0; l < t.length / 2; l++)
      a[h++] = t[l * 2], a[h++] = t[l * 2 + 1], a[h++] = e[l * 2], a[h++] = e[l * 2 + 1], o[h++] = r[l], a[h++] = s[l];
    this._buffer.update(n), this._indexBuffer.update(this.indicesUint16);
  }
  /**
   * Process fill part of Graphics.
   * @param data
   */
  processFill(t) {
    t.holes.length ? Ou.triangulate(t, this) : An[t.type].triangulate(t, this);
  }
  /**
   * Process line part of Graphics.
   * @param data
   */
  processLine(t) {
    Nh(t, this);
    for (let e = 0; e < t.holes.length; e++)
      Nh(t.holes[e], this);
  }
  /**
   * Process the holes data.
   * @param holes
   */
  processHoles(t) {
    for (let e = 0; e < t.length; e++) {
      const r = t[e];
      An[r.type].build(r), r.matrix && this.transformPoints(r.points, r.matrix);
    }
  }
  /** Update the local bounds of the object. Expensive to use performance-wise. */
  calculateBounds() {
    const t = this._bounds;
    t.clear(), t.addVertexData(this.points, 0, this.points.length), t.pad(this.boundsPadding, this.boundsPadding);
  }
  /**
   * Transform points using matrix.
   * @param points - Points to transform
   * @param matrix - Transform matrix
   */
  transformPoints(t, e) {
    for (let r = 0; r < t.length / 2; r++) {
      const s = t[r * 2], n = t[r * 2 + 1];
      t[r * 2] = e.a * s + e.c * n + e.tx, t[r * 2 + 1] = e.b * s + e.d * n + e.ty;
    }
  }
  /**
   * Add colors.
   * @param colors - List of colors to add to
   * @param color - Color to add
   * @param alpha - Alpha to use
   * @param size - Number of colors to add
   * @param offset
   */
  addColors(t, e, r, s, n = 0) {
    const a = tt.shared.setValue(e).toLittleEndianNumber(), o = tt.shared.setValue(a).toPremultiplied(r);
    t.length = Math.max(t.length, n + s);
    for (let h = 0; h < s; h++)
      t[n + h] = o;
  }
  /**
   * Add texture id that the shader/fragment wants to use.
   * @param textureIds
   * @param id
   * @param size
   * @param offset
   */
  addTextureIds(t, e, r, s = 0) {
    t.length = Math.max(t.length, s + r);
    for (let n = 0; n < r; n++)
      t[s + n] = e;
  }
  /**
   * Generates the UVs for a shape.
   * @param verts - Vertices
   * @param uvs - UVs
   * @param texture - Reference to Texture
   * @param start - Index buffer start index.
   * @param size - The size/length for index buffer.
   * @param matrix - Optional transform for all points.
   */
  addUvs(t, e, r, s, n, a = null) {
    let o = 0;
    const h = e.length, l = r.frame;
    for (; o < n; ) {
      let c = t[(s + o) * 2], d = t[(s + o) * 2 + 1];
      if (a) {
        const f = a.a * c + a.c * d + a.tx;
        d = a.b * c + a.d * d + a.ty, c = f;
      }
      o++, e.push(c / l.width, d / l.height);
    }
    const u = r.baseTexture;
    (l.width < u.width || l.height < u.height) && this.adjustUvs(e, r, h, n);
  }
  /**
   * Modify uvs array according to position of texture region
   * Does not work with rotated or trimmed textures
   * @param uvs - array
   * @param texture - region
   * @param start - starting index for uvs
   * @param size - how many points to adjust
   */
  adjustUvs(t, e, r, s) {
    const n = e.baseTexture, a = 1e-6, o = r + s * 2, h = e.frame, l = h.width / n.width, u = h.height / n.height;
    let c = h.x / h.width, d = h.y / h.height, f = Math.floor(t[r] + a), p = Math.floor(t[r + 1] + a);
    for (let m = r + 2; m < o; m += 2)
      f = Math.min(f, Math.floor(t[m] + a)), p = Math.min(p, Math.floor(t[m + 1] + a));
    c -= f, d -= p;
    for (let m = r; m < o; m += 2)
      t[m] = (t[m] + c) * l, t[m + 1] = (t[m + 1] + d) * u;
  }
};
Nu.BATCHABLE_SIZE = 100;
let x_ = Nu;
class ks {
  constructor() {
    this.color = 16777215, this.alpha = 1, this.texture = O.WHITE, this.matrix = null, this.visible = !1, this.reset();
  }
  /** Clones the object */
  clone() {
    const t = new ks();
    return t.color = this.color, t.alpha = this.alpha, t.texture = this.texture, t.matrix = this.matrix, t.visible = this.visible, t;
  }
  /** Reset */
  reset() {
    this.color = 16777215, this.alpha = 1, this.texture = O.WHITE, this.matrix = null, this.visible = !1;
  }
  /** Destroy and don't use after this. */
  destroy() {
    this.texture = null, this.matrix = null;
  }
}
class Za extends ks {
  constructor() {
    super(...arguments), this.width = 0, this.alignment = 0.5, this.native = !1, this.cap = be.BUTT, this.join = Lt.MITER, this.miterLimit = 10;
  }
  /** Clones the object. */
  clone() {
    const t = new Za();
    return t.color = this.color, t.alpha = this.alpha, t.texture = this.texture, t.matrix = this.matrix, t.visible = this.visible, t.width = this.width, t.alignment = this.alignment, t.native = this.native, t.cap = this.cap, t.join = this.join, t.miterLimit = this.miterLimit, t;
  }
  /** Reset the line style to default. */
  reset() {
    super.reset(), this.color = 0, this.alignment = 0.5, this.width = 0, this.native = !1, this.cap = be.BUTT, this.join = Lt.MITER, this.miterLimit = 10;
  }
}
const Sn = {}, wa = class is extends Ft {
  /**
   * @param geometry - Geometry to use, if omitted will create a new GraphicsGeometry instance.
   */
  constructor(t = null) {
    super(), this.shader = null, this.pluginName = "batch", this.currentPath = null, this.batches = [], this.batchTint = -1, this.batchDirty = -1, this.vertexData = null, this._fillStyle = new ks(), this._lineStyle = new Za(), this._matrix = null, this._holeMode = !1, this.state = ce.for2d(), this._geometry = t || new x_(), this._geometry.refCount++, this._transformID = -1, this._tintColor = new tt(16777215), this.blendMode = X.NORMAL;
  }
  /**
   * Includes vertex positions, face indices, normals, colors, UVs, and
   * custom attributes within buffers, reducing the cost of passing all
   * this data to the GPU. Can be shared between multiple Mesh or Graphics objects.
   * @readonly
   */
  get geometry() {
    return this._geometry;
  }
  /**
   * Creates a new Graphics object with the same values as this one.
   * Note that only the geometry of the object is cloned, not its transform (position,scale,etc)
   * @returns - A clone of the graphics object
   */
  clone() {
    return this.finishPoly(), new is(this._geometry);
  }
  /**
   * The blend mode to be applied to the graphic shape. Apply a value of
   * `PIXI.BLEND_MODES.NORMAL` to reset the blend mode.  Note that, since each
   * primitive in the GraphicsGeometry list is rendered sequentially, modes
   * such as `PIXI.BLEND_MODES.ADD` and `PIXI.BLEND_MODES.MULTIPLY` will
   * be applied per-primitive.
   * @default PIXI.BLEND_MODES.NORMAL
   */
  set blendMode(t) {
    this.state.blendMode = t;
  }
  get blendMode() {
    return this.state.blendMode;
  }
  /**
   * The tint applied to each graphic shape. This is a hex value. A value of
   * 0xFFFFFF will remove any tint effect.
   * @default 0xFFFFFF
   */
  get tint() {
    return this._tintColor.value;
  }
  set tint(t) {
    this._tintColor.setValue(t);
  }
  /**
   * The current fill style.
   * @readonly
   */
  get fill() {
    return this._fillStyle;
  }
  /**
   * The current line style.
   * @readonly
   */
  get line() {
    return this._lineStyle;
  }
  lineStyle(t = null, e = 0, r, s = 0.5, n = !1) {
    return typeof t == "number" && (t = { width: t, color: e, alpha: r, alignment: s, native: n }), this.lineTextureStyle(t);
  }
  /**
   * Like line style but support texture for line fill.
   * @param [options] - Collection of options for setting line style.
   * @param {number} [options.width=0] - width of the line to draw, will update the objects stored style
   * @param {PIXI.Texture} [options.texture=PIXI.Texture.WHITE] - Texture to use
   * @param {PIXI.ColorSource} [options.color=0x0] - color of the line to draw, will update the objects stored style.
   *  Default 0xFFFFFF if texture present.
   * @param {number} [options.alpha=1] - alpha of the line to draw, will update the objects stored style
   * @param {PIXI.Matrix} [options.matrix=null] - Texture matrix to transform texture
   * @param {number} [options.alignment=0.5] - alignment of the line to draw, (0 = inner, 0.5 = middle, 1 = outer).
   *        WebGL only.
   * @param {boolean} [options.native=false] - If true the lines will be draw using LINES instead of TRIANGLE_STRIP
   * @param {PIXI.LINE_CAP}[options.cap=PIXI.LINE_CAP.BUTT] - line cap style
   * @param {PIXI.LINE_JOIN}[options.join=PIXI.LINE_JOIN.MITER] - line join style
   * @param {number}[options.miterLimit=10] - miter limit ratio
   * @returns {PIXI.Graphics} This Graphics object. Good for chaining method calls
   */
  lineTextureStyle(t) {
    const e = {
      width: 0,
      texture: O.WHITE,
      color: t != null && t.texture ? 16777215 : 0,
      matrix: null,
      alignment: 0.5,
      native: !1,
      cap: be.BUTT,
      join: Lt.MITER,
      miterLimit: 10
    };
    t = Object.assign(e, t), this.normalizeColor(t), this.currentPath && this.startPoly();
    const r = t.width > 0 && t.alpha > 0;
    return r ? (t.matrix && (t.matrix = t.matrix.clone(), t.matrix.invert()), Object.assign(this._lineStyle, { visible: r }, t)) : this._lineStyle.reset(), this;
  }
  /**
   * Start a polygon object internally.
   * @protected
   */
  startPoly() {
    if (this.currentPath) {
      const t = this.currentPath.points, e = this.currentPath.points.length;
      e > 2 && (this.drawShape(this.currentPath), this.currentPath = new ir(), this.currentPath.closeStroke = !1, this.currentPath.points.push(t[e - 2], t[e - 1]));
    } else
      this.currentPath = new ir(), this.currentPath.closeStroke = !1;
  }
  /**
   * Finish the polygon object.
   * @protected
   */
  finishPoly() {
    this.currentPath && (this.currentPath.points.length > 2 ? (this.drawShape(this.currentPath), this.currentPath = null) : this.currentPath.points.length = 0);
  }
  /**
   * Moves the current drawing position to x, y.
   * @param x - the X coordinate to move to
   * @param y - the Y coordinate to move to
   * @returns - This Graphics object. Good for chaining method calls
   */
  moveTo(t, e) {
    return this.startPoly(), this.currentPath.points[0] = t, this.currentPath.points[1] = e, this;
  }
  /**
   * Draws a line using the current line style from the current drawing position to (x, y);
   * The current drawing position is then set to (x, y).
   * @param x - the X coordinate to draw to
   * @param y - the Y coordinate to draw to
   * @returns - This Graphics object. Good for chaining method calls
   */
  lineTo(t, e) {
    this.currentPath || this.moveTo(0, 0);
    const r = this.currentPath.points, s = r[r.length - 2], n = r[r.length - 1];
    return (s !== t || n !== e) && r.push(t, e), this;
  }
  /**
   * Initialize the curve
   * @param x
   * @param y
   */
  _initCurve(t = 0, e = 0) {
    this.currentPath ? this.currentPath.points.length === 0 && (this.currentPath.points = [t, e]) : this.moveTo(t, e);
  }
  /**
   * Calculate the points for a quadratic bezier curve and then draws it.
   * Based on: https://stackoverflow.com/questions/785097/how-do-i-implement-a-bezier-curve-in-c
   * @param cpX - Control point x
   * @param cpY - Control point y
   * @param toX - Destination point x
   * @param toY - Destination point y
   * @returns - This Graphics object. Good for chaining method calls
   */
  quadraticCurveTo(t, e, r, s) {
    this._initCurve();
    const n = this.currentPath.points;
    return n.length === 0 && this.moveTo(0, 0), Ka.curveTo(t, e, r, s, n), this;
  }
  /**
   * Calculate the points for a bezier curve and then draws it.
   * @param cpX - Control point x
   * @param cpY - Control point y
   * @param cpX2 - Second Control point x
   * @param cpY2 - Second Control point y
   * @param toX - Destination point x
   * @param toY - Destination point y
   * @returns This Graphics object. Good for chaining method calls
   */
  bezierCurveTo(t, e, r, s, n, a) {
    return this._initCurve(), qa.curveTo(t, e, r, s, n, a, this.currentPath.points), this;
  }
  /**
   * The `arcTo` method creates an arc/curve between two tangents on the canvas.
   * The first tangent is from the start point to the first control point,
   * and the second tangent is from the first control point to the second control point.
   * Note that the second control point is not necessarily the end point of the arc.
   *
   * "borrowed" from https://code.google.com/p/fxcanvas/ - thanks google!
   * @param x1 - The x-coordinate of the first control point of the arc
   * @param y1 - The y-coordinate of the first control point of the arc
   * @param x2 - The x-coordinate of the second control point of the arc
   * @param y2 - The y-coordinate of the second control point of the arc
   * @param radius - The radius of the arc
   * @returns - This Graphics object. Good for chaining method calls
   */
  arcTo(t, e, r, s, n) {
    this._initCurve(t, e);
    const a = this.currentPath.points, o = Fh.curveTo(t, e, r, s, n, a);
    if (o) {
      const { cx: h, cy: l, radius: u, startAngle: c, endAngle: d, anticlockwise: f } = o;
      this.arc(h, l, u, c, d, f);
    }
    return this;
  }
  /**
   * The arc method creates an arc/curve (used to create circles, or parts of circles).
   * @param cx - The x-coordinate of the center of the circle
   * @param cy - The y-coordinate of the center of the circle
   * @param radius - The radius of the circle
   * @param startAngle - The starting angle, in radians (0 is at the 3 o'clock position
   *  of the arc's circle)
   * @param endAngle - The ending angle, in radians
   * @param anticlockwise - Specifies whether the drawing should be
   *  counter-clockwise or clockwise. False is default, and indicates clockwise, while true
   *  indicates counter-clockwise.
   * @returns - This Graphics object. Good for chaining method calls
   */
  arc(t, e, r, s, n, a = !1) {
    if (s === n)
      return this;
    if (!a && n <= s ? n += ms : a && s <= n && (s += ms), n - s === 0)
      return this;
    const o = t + Math.cos(s) * r, h = e + Math.sin(s) * r, l = this._geometry.closePointEps;
    let u = this.currentPath ? this.currentPath.points : null;
    if (u) {
      const c = Math.abs(u[u.length - 2] - o), d = Math.abs(u[u.length - 1] - h);
      c < l && d < l || u.push(o, h);
    } else
      this.moveTo(o, h), u = this.currentPath.points;
    return Fh.arc(o, h, t, e, r, s, n, a, u), this;
  }
  /**
   * Specifies a simple one-color fill that subsequent calls to other Graphics methods
   * (such as lineTo() or drawCircle()) use when drawing.
   * @param {PIXI.ColorSource} color - the color of the fill
   * @param alpha - the alpha of the fill, will override the color's alpha
   * @returns - This Graphics object. Suitable for chaining method calls
   */
  beginFill(t = 0, e) {
    return this.beginTextureFill({ texture: O.WHITE, color: t, alpha: e });
  }
  /**
   * Normalize the color input from options for line style or fill
   * @param {PIXI.IFillStyleOptions} options - Fill style object.
   */
  normalizeColor(t) {
    const e = tt.shared.setValue(t.color ?? 0);
    t.color = e.toNumber(), t.alpha ?? (t.alpha = e.alpha);
  }
  /**
   * Begin the texture fill.
   * Note: The wrap mode of the texture is forced to REPEAT on render.
   * @param options - Fill style object.
   * @param {PIXI.Texture} [options.texture=PIXI.Texture.WHITE] - Texture to fill
   * @param {PIXI.ColorSource} [options.color=0xffffff] - Background to fill behind texture
   * @param {number} [options.alpha] - Alpha of fill, overrides the color's alpha
   * @param {PIXI.Matrix} [options.matrix=null] - Transform matrix
   * @returns {PIXI.Graphics} This Graphics object. Good for chaining method calls
   */
  beginTextureFill(t) {
    const e = {
      texture: O.WHITE,
      color: 16777215,
      matrix: null
    };
    t = Object.assign(e, t), this.normalizeColor(t), this.currentPath && this.startPoly();
    const r = t.alpha > 0;
    return r ? (t.matrix && (t.matrix = t.matrix.clone(), t.matrix.invert()), Object.assign(this._fillStyle, { visible: r }, t)) : this._fillStyle.reset(), this;
  }
  /**
   * Applies a fill to the lines and shapes that were added since the last call to the beginFill() method.
   * @returns - This Graphics object. Good for chaining method calls
   */
  endFill() {
    return this.finishPoly(), this._fillStyle.reset(), this;
  }
  /**
   * Draws a rectangle shape.
   * @param x - The X coord of the top-left of the rectangle
   * @param y - The Y coord of the top-left of the rectangle
   * @param width - The width of the rectangle
   * @param height - The height of the rectangle
   * @returns - This Graphics object. Good for chaining method calls
   */
  drawRect(t, e, r, s) {
    return this.drawShape(new j(t, e, r, s));
  }
  /**
   * Draw a rectangle shape with rounded/beveled corners.
   * @param x - The X coord of the top-left of the rectangle
   * @param y - The Y coord of the top-left of the rectangle
   * @param width - The width of the rectangle
   * @param height - The height of the rectangle
   * @param radius - Radius of the rectangle corners
   * @returns - This Graphics object. Good for chaining method calls
   */
  drawRoundedRect(t, e, r, s, n) {
    return this.drawShape(new Os(t, e, r, s, n));
  }
  /**
   * Draws a circle.
   * @param x - The X coordinate of the center of the circle
   * @param y - The Y coordinate of the center of the circle
   * @param radius - The radius of the circle
   * @returns - This Graphics object. Good for chaining method calls
   */
  drawCircle(t, e, r) {
    return this.drawShape(new Ds(t, e, r));
  }
  /**
   * Draws an ellipse.
   * @param x - The X coordinate of the center of the ellipse
   * @param y - The Y coordinate of the center of the ellipse
   * @param width - The half width of the ellipse
   * @param height - The half height of the ellipse
   * @returns - This Graphics object. Good for chaining method calls
   */
  drawEllipse(t, e, r, s) {
    return this.drawShape(new Fs(t, e, r, s));
  }
  /**
   * Draws a polygon using the given path.
   * @param {number[]|PIXI.IPointData[]|PIXI.Polygon} path - The path data used to construct the polygon.
   * @returns - This Graphics object. Good for chaining method calls
   */
  drawPolygon(...t) {
    let e, r = !0;
    const s = t[0];
    s.points ? (r = s.closeStroke, e = s.points) : Array.isArray(t[0]) ? e = t[0] : e = t;
    const n = new ir(e);
    return n.closeStroke = r, this.drawShape(n), this;
  }
  /**
   * Draw any shape.
   * @param {PIXI.Circle|PIXI.Ellipse|PIXI.Polygon|PIXI.Rectangle|PIXI.RoundedRectangle} shape - Shape to draw
   * @returns - This Graphics object. Good for chaining method calls
   */
  drawShape(t) {
    return this._holeMode ? this._geometry.drawHole(t, this._matrix) : this._geometry.drawShape(
      t,
      this._fillStyle.clone(),
      this._lineStyle.clone(),
      this._matrix
    ), this;
  }
  /**
   * Clears the graphics that were drawn to this Graphics object, and resets fill and line style settings.
   * @returns - This Graphics object. Good for chaining method calls
   */
  clear() {
    return this._geometry.clear(), this._lineStyle.reset(), this._fillStyle.reset(), this._boundsID++, this._matrix = null, this._holeMode = !1, this.currentPath = null, this;
  }
  /**
   * True if graphics consists of one rectangle, and thus, can be drawn like a Sprite and
   * masked with gl.scissor.
   * @returns - True if only 1 rect.
   */
  isFastRect() {
    const t = this._geometry.graphicsData;
    return t.length === 1 && t[0].shape.type === At.RECT && !t[0].matrix && !t[0].holes.length && !(t[0].lineStyle.visible && t[0].lineStyle.width);
  }
  /**
   * Renders the object using the WebGL renderer
   * @param renderer - The renderer
   */
  _render(t) {
    this.finishPoly();
    const e = this._geometry;
    e.updateBatches(), e.batchable ? (this.batchDirty !== e.batchDirty && this._populateBatches(), this._renderBatched(t)) : (t.batch.flush(), this._renderDirect(t));
  }
  /** Populating batches for rendering. */
  _populateBatches() {
    const t = this._geometry, e = this.blendMode, r = t.batches.length;
    this.batchTint = -1, this._transformID = -1, this.batchDirty = t.batchDirty, this.batches.length = r, this.vertexData = new Float32Array(t.points);
    for (let s = 0; s < r; s++) {
      const n = t.batches[s], a = n.style.color, o = new Float32Array(
        this.vertexData.buffer,
        n.attribStart * 4 * 2,
        n.attribSize * 2
      ), h = new Float32Array(
        t.uvsFloat32.buffer,
        n.attribStart * 4 * 2,
        n.attribSize * 2
      ), l = new Uint16Array(
        t.indicesUint16.buffer,
        n.start * 2,
        n.size
      ), u = {
        vertexData: o,
        blendMode: e,
        indices: l,
        uvs: h,
        _batchRGB: tt.shared.setValue(a).toRgbArray(),
        _tintRGB: a,
        _texture: n.style.texture,
        alpha: n.style.alpha,
        worldAlpha: 1
      };
      this.batches[s] = u;
    }
  }
  /**
   * Renders the batches using the BathedRenderer plugin
   * @param renderer - The renderer
   */
  _renderBatched(t) {
    if (this.batches.length) {
      t.batch.setObjectRenderer(t.plugins[this.pluginName]), this.calculateVertices(), this.calculateTints();
      for (let e = 0, r = this.batches.length; e < r; e++) {
        const s = this.batches[e];
        s.worldAlpha = this.worldAlpha * s.alpha, t.plugins[this.pluginName].render(s);
      }
    }
  }
  /**
   * Renders the graphics direct
   * @param renderer - The renderer
   */
  _renderDirect(t) {
    const e = this._resolveDirectShader(t), r = this._geometry, s = this.worldAlpha, n = e.uniforms, a = r.drawCalls;
    n.translationMatrix = this.transform.worldTransform, tt.shared.setValue(this._tintColor).premultiply(s).toArray(n.tint), t.shader.bind(e), t.geometry.bind(r, e), t.state.set(this.state);
    for (let o = 0, h = a.length; o < h; o++)
      this._renderDrawCallDirect(t, r.drawCalls[o]);
  }
  /**
   * Renders specific DrawCall
   * @param renderer
   * @param drawCall
   */
  _renderDrawCallDirect(t, e) {
    const { texArray: r, type: s, size: n, start: a } = e, o = r.count;
    for (let h = 0; h < o; h++)
      t.texture.bind(r.elements[h], h);
    t.geometry.draw(s, n, a);
  }
  /**
   * Resolves shader for direct rendering
   * @param renderer - The renderer
   */
  _resolveDirectShader(t) {
    let e = this.shader;
    const r = this.pluginName;
    if (!e) {
      if (!Sn[r]) {
        const { maxTextures: s } = t.plugins[r], n = new Int32Array(s);
        for (let h = 0; h < s; h++)
          n[h] = h;
        const a = {
          tint: new Float32Array([1, 1, 1, 1]),
          translationMatrix: new rt(),
          default: jt.from({ uSamplers: n }, !0)
        }, o = t.plugins[r]._shader.program;
        Sn[r] = new le(o, a);
      }
      e = Sn[r];
    }
    return e;
  }
  /**
   * Retrieves the bounds of the graphic shape as a rectangle object.
   * @see PIXI.GraphicsGeometry#bounds
   */
  _calculateBounds() {
    this.finishPoly();
    const t = this._geometry;
    if (!t.graphicsData.length)
      return;
    const { minX: e, minY: r, maxX: s, maxY: n } = t.bounds;
    this._bounds.addFrame(this.transform, e, r, s, n);
  }
  /**
   * Tests if a point is inside this graphics object
   * @param point - the point to test
   * @returns - the result of the test
   */
  containsPoint(t) {
    return this.worldTransform.applyInverse(t, is._TEMP_POINT), this._geometry.containsPoint(is._TEMP_POINT);
  }
  /** Recalculate the tint by applying tint to batches using Graphics tint. */
  calculateTints() {
    if (this.batchTint !== this.tint) {
      this.batchTint = this._tintColor.toNumber();
      for (let t = 0; t < this.batches.length; t++) {
        const e = this.batches[t];
        e._tintRGB = tt.shared.setValue(this._tintColor).multiply(e._batchRGB).toLittleEndianNumber();
      }
    }
  }
  /** If there's a transform update or a change to the shape of the geometry, recalculate the vertices. */
  calculateVertices() {
    const t = this.transform._worldID;
    if (this._transformID === t)
      return;
    this._transformID = t;
    const e = this.transform.worldTransform, r = e.a, s = e.b, n = e.c, a = e.d, o = e.tx, h = e.ty, l = this._geometry.points, u = this.vertexData;
    let c = 0;
    for (let d = 0; d < l.length; d += 2) {
      const f = l[d], p = l[d + 1];
      u[c++] = r * f + n * p + o, u[c++] = a * p + s * f + h;
    }
  }
  /**
   * Closes the current path.
   * @returns - Returns itself.
   */
  closePath() {
    const t = this.currentPath;
    return t && (t.closeStroke = !0, this.finishPoly()), this;
  }
  /**
   * Apply a matrix to the positional data.
   * @param matrix - Matrix to use for transform current shape.
   * @returns - Returns itself.
   */
  setMatrix(t) {
    return this._matrix = t, this;
  }
  /**
   * Begin adding holes to the last draw shape
   * IMPORTANT: holes must be fully inside a shape to work
   * Also weirdness ensues if holes overlap!
   * Ellipses, Circles, Rectangles and Rounded Rectangles cannot be holes or host for holes in CanvasRenderer,
   * please use `moveTo` `lineTo`, `quadraticCurveTo` if you rely on pixi-legacy bundle.
   * @returns - Returns itself.
   */
  beginHole() {
    return this.finishPoly(), this._holeMode = !0, this;
  }
  /**
   * End adding holes to the last draw shape.
   * @returns - Returns itself.
   */
  endHole() {
    return this.finishPoly(), this._holeMode = !1, this;
  }
  /**
   * Destroys the Graphics object.
   * @param options - Options parameter. A boolean will act as if all
   *  options have been set to that value
   * @param {boolean} [options.children=false] - if set to true, all the children will have
   *  their destroy method called as well. 'options' will be passed on to those calls.
   * @param {boolean} [options.texture=false] - Only used for child Sprites if options.children is set to true
   *  Should it destroy the texture of the child sprite
   * @param {boolean} [options.baseTexture=false] - Only used for child Sprites if options.children is set to true
   *  Should it destroy the base texture of the child sprite
   */
  destroy(t) {
    this._geometry.refCount--, this._geometry.refCount === 0 && this._geometry.dispose(), this._matrix = null, this.currentPath = null, this._lineStyle.destroy(), this._lineStyle = null, this._fillStyle.destroy(), this._fillStyle = null, this._geometry = null, this.shader = null, this.vertexData = null, this.batches.length = 0, this.batches = null, super.destroy(t);
  }
};
wa.curves = Ur, /**
* Temporary point to use for containsPoint.
* @private
*/
wa._TEMP_POINT = new K();
let Qa = wa;
class b_ {
  /**
   * @param uvBuffer - Buffer with normalized uv's
   * @param uvMatrix - Material UV matrix
   */
  constructor(t, e) {
    this.uvBuffer = t, this.uvMatrix = e, this.data = null, this._bufferUpdateId = -1, this._textureUpdateId = -1, this._updateID = 0;
  }
  /**
   * Updates
   * @param forceUpdate - force the update
   */
  update(t) {
    if (!t && this._bufferUpdateId === this.uvBuffer._updateID && this._textureUpdateId === this.uvMatrix._updateID)
      return;
    this._bufferUpdateId = this.uvBuffer._updateID, this._textureUpdateId = this.uvMatrix._updateID;
    const e = this.uvBuffer.data;
    (!this.data || this.data.length !== e.length) && (this.data = new Float32Array(e.length)), this.uvMatrix.multiplyUvs(e, this.data), this._updateID++;
  }
}
const Cn = new K(), Uh = new ir(), Uu = class ku extends Ft {
  /**
   * @param geometry - The geometry the mesh will use.
   * @param {PIXI.MeshMaterial} shader - The shader the mesh will use.
   * @param state - The state that the WebGL context is required to be in to render the mesh
   *        if no state is provided, uses {@link PIXI.State.for2d} to create a 2D state for PixiJS.
   * @param drawMode - The drawMode, can be any of the {@link PIXI.DRAW_MODES} constants.
   */
  constructor(t, e, r, s = oe.TRIANGLES) {
    super(), this.geometry = t, this.shader = e, this.state = r || ce.for2d(), this.drawMode = s, this.start = 0, this.size = 0, this.uvs = null, this.indices = null, this.vertexData = new Float32Array(1), this.vertexDirty = -1, this._transformID = -1, this._roundPixels = L.ROUND_PIXELS, this.batchUvs = null;
  }
  /**
   * Includes vertex positions, face indices, normals, colors, UVs, and
   * custom attributes within buffers, reducing the cost of passing all
   * this data to the GPU. Can be shared between multiple Mesh objects.
   */
  get geometry() {
    return this._geometry;
  }
  set geometry(t) {
    this._geometry !== t && (this._geometry && (this._geometry.refCount--, this._geometry.refCount === 0 && this._geometry.dispose()), this._geometry = t, this._geometry && this._geometry.refCount++, this.vertexDirty = -1);
  }
  /**
   * To change mesh uv's, change its uvBuffer data and increment its _updateID.
   * @readonly
   */
  get uvBuffer() {
    return this.geometry.buffers[1];
  }
  /**
   * To change mesh vertices, change its uvBuffer data and increment its _updateID.
   * Incrementing _updateID is optional because most of Mesh objects do it anyway.
   * @readonly
   */
  get verticesBuffer() {
    return this.geometry.buffers[0];
  }
  /** Alias for {@link PIXI.Mesh#shader}. */
  set material(t) {
    this.shader = t;
  }
  get material() {
    return this.shader;
  }
  /**
   * The blend mode to be applied to the Mesh. Apply a value of
   * `PIXI.BLEND_MODES.NORMAL` to reset the blend mode.
   * @default PIXI.BLEND_MODES.NORMAL;
   */
  set blendMode(t) {
    this.state.blendMode = t;
  }
  get blendMode() {
    return this.state.blendMode;
  }
  /**
   * If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.
   * Advantages can include sharper image quality (like text) and faster rendering on canvas.
   * The main disadvantage is movement of objects may appear less smooth.
   * To set the global default, change {@link PIXI.settings.ROUND_PIXELS}
   * @default false
   */
  set roundPixels(t) {
    this._roundPixels !== t && (this._transformID = -1), this._roundPixels = t;
  }
  get roundPixels() {
    return this._roundPixels;
  }
  /**
   * The multiply tint applied to the Mesh. This is a hex value. A value of
   * `0xFFFFFF` will remove any tint effect.
   *
   * Null for non-MeshMaterial shaders
   * @default 0xFFFFFF
   */
  get tint() {
    return "tint" in this.shader ? this.shader.tint : null;
  }
  set tint(t) {
    this.shader.tint = t;
  }
  /**
   * The tint color as a RGB integer
   * @ignore
   */
  get tintValue() {
    return this.shader.tintValue;
  }
  /** The texture that the Mesh uses. Null for non-MeshMaterial shaders */
  get texture() {
    return "texture" in this.shader ? this.shader.texture : null;
  }
  set texture(t) {
    this.shader.texture = t;
  }
  /**
   * Standard renderer draw.
   * @param renderer - Instance to renderer.
   */
  _render(t) {
    const e = this.geometry.buffers[0].data;
    this.shader.batchable && this.drawMode === oe.TRIANGLES && e.length < ku.BATCHABLE_SIZE * 2 ? this._renderToBatch(t) : this._renderDefault(t);
  }
  /**
   * Standard non-batching way of rendering.
   * @param renderer - Instance to renderer.
   */
  _renderDefault(t) {
    const e = this.shader;
    e.alpha = this.worldAlpha, e.update && e.update(), t.batch.flush(), e.uniforms.translationMatrix = this.transform.worldTransform.toArray(!0), t.shader.bind(e), t.state.set(this.state), t.geometry.bind(this.geometry, e), t.geometry.draw(this.drawMode, this.size, this.start, this.geometry.instanceCount);
  }
  /**
   * Rendering by using the Batch system.
   * @param renderer - Instance to renderer.
   */
  _renderToBatch(t) {
    const e = this.geometry, r = this.shader;
    r.uvMatrix && (r.uvMatrix.update(), this.calculateUvs()), this.calculateVertices(), this.indices = e.indexBuffer.data, this._tintRGB = r._tintRGB, this._texture = r.texture;
    const s = this.material.pluginName;
    t.batch.setObjectRenderer(t.plugins[s]), t.plugins[s].render(this);
  }
  /** Updates vertexData field based on transform and vertices. */
  calculateVertices() {
    const t = this.geometry.buffers[0], e = t.data, r = t._updateID;
    if (r === this.vertexDirty && this._transformID === this.transform._worldID)
      return;
    this._transformID = this.transform._worldID, this.vertexData.length !== e.length && (this.vertexData = new Float32Array(e.length));
    const s = this.transform.worldTransform, n = s.a, a = s.b, o = s.c, h = s.d, l = s.tx, u = s.ty, c = this.vertexData;
    for (let d = 0; d < c.length / 2; d++) {
      const f = e[d * 2], p = e[d * 2 + 1];
      c[d * 2] = n * f + o * p + l, c[d * 2 + 1] = a * f + h * p + u;
    }
    if (this._roundPixels) {
      const d = L.RESOLUTION;
      for (let f = 0; f < c.length; ++f)
        c[f] = Math.round(c[f] * d) / d;
    }
    this.vertexDirty = r;
  }
  /** Updates uv field based on from geometry uv's or batchUvs. */
  calculateUvs() {
    const t = this.geometry.buffers[1], e = this.shader;
    e.uvMatrix.isSimple ? this.uvs = t.data : (this.batchUvs || (this.batchUvs = new b_(t, e.uvMatrix)), this.batchUvs.update(), this.uvs = this.batchUvs.data);
  }
  /**
   * Updates the bounds of the mesh as a rectangle. The bounds calculation takes the worldTransform into account.
   * there must be a aVertexPosition attribute present in the geometry for bounds to be calculated correctly.
   */
  _calculateBounds() {
    this.calculateVertices(), this._bounds.addVertexData(this.vertexData, 0, this.vertexData.length);
  }
  /**
   * Tests if a point is inside this mesh. Works only for PIXI.DRAW_MODES.TRIANGLES.
   * @param point - The point to test.
   * @returns - The result of the test.
   */
  containsPoint(t) {
    if (!this.getBounds().contains(t.x, t.y))
      return !1;
    this.worldTransform.applyInverse(t, Cn);
    const e = this.geometry.getBuffer("aVertexPosition").data, r = Uh.points, s = this.geometry.getIndex().data, n = s.length, a = this.drawMode === 4 ? 3 : 1;
    for (let o = 0; o + 2 < n; o += a) {
      const h = s[o] * 2, l = s[o + 1] * 2, u = s[o + 2] * 2;
      if (r[0] = e[h], r[1] = e[h + 1], r[2] = e[l], r[3] = e[l + 1], r[4] = e[u], r[5] = e[u + 1], Uh.contains(Cn.x, Cn.y))
        return !0;
    }
    return !1;
  }
  destroy(t) {
    super.destroy(t), this._cachedTexture && (this._cachedTexture.destroy(), this._cachedTexture = null), this.geometry = null, this.shader = null, this.state = null, this.uvs = null, this.indices = null, this.vertexData = null;
  }
};
Uu.BATCHABLE_SIZE = 100;
let kr = Uu;
class Gs extends ke {
  /**
   * @param {Float32Array|number[]} [vertices] - Positional data on geometry.
   * @param {Float32Array|number[]} [uvs] - Texture UVs.
   * @param {Uint16Array|number[]} [index] - IndexBuffer
   */
  constructor(t, e, r) {
    super();
    const s = new ut(t), n = new ut(e, !0), a = new ut(r, !0, !0);
    this.addAttribute("aVertexPosition", s, 2, !1, V.FLOAT).addAttribute("aTextureCoord", n, 2, !1, V.FLOAT).addIndex(a), this._updateId = -1;
  }
  /**
   * If the vertex position is updated.
   * @readonly
   * @private
   */
  get vertexDirtyId() {
    return this.buffers[0]._updateID;
  }
}
var T_ = `varying vec2 vTextureCoord;
uniform vec4 uColor;

uniform sampler2D uSampler;

void main(void)
{
    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;
}
`, E_ = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTextureMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;
}
`;
class fi extends le {
  /**
   * @param uSampler - Texture that material uses to render.
   * @param options - Additional options
   * @param {number} [options.alpha=1] - Default alpha.
   * @param {PIXI.ColorSource} [options.tint=0xFFFFFF] - Default tint.
   * @param {string} [options.pluginName='batch'] - Renderer plugin for batching.
   * @param {PIXI.Program} [options.program=0xFFFFFF] - Custom program.
   * @param {object} [options.uniforms] - Custom uniforms.
   */
  constructor(t, e) {
    const r = {
      uSampler: t,
      alpha: 1,
      uTextureMatrix: rt.IDENTITY,
      uColor: new Float32Array([1, 1, 1, 1])
    };
    e = Object.assign({
      tint: 16777215,
      alpha: 1,
      pluginName: "batch"
    }, e), e.uniforms && Object.assign(r, e.uniforms), super(e.program || xe.from(E_, T_), r), this._colorDirty = !1, this.uvMatrix = new Wa(t), this.batchable = e.program === void 0, this.pluginName = e.pluginName, this._tintColor = new tt(e.tint), this._tintRGB = this._tintColor.toLittleEndianNumber(), this._colorDirty = !0, this.alpha = e.alpha;
  }
  /** Reference to the texture being rendered. */
  get texture() {
    return this.uniforms.uSampler;
  }
  set texture(t) {
    this.uniforms.uSampler !== t && (!this.uniforms.uSampler.baseTexture.alphaMode != !t.baseTexture.alphaMode && (this._colorDirty = !0), this.uniforms.uSampler = t, this.uvMatrix.texture = t);
  }
  /**
   * This gets automatically set by the object using this.
   * @default 1
   */
  set alpha(t) {
    t !== this._alpha && (this._alpha = t, this._colorDirty = !0);
  }
  get alpha() {
    return this._alpha;
  }
  /**
   * Multiply tint for the material.
   * @default 0xFFFFFF
   */
  set tint(t) {
    t !== this.tint && (this._tintColor.setValue(t), this._tintRGB = this._tintColor.toLittleEndianNumber(), this._colorDirty = !0);
  }
  get tint() {
    return this._tintColor.value;
  }
  /**
   * Get the internal number from tint color
   * @ignore
   */
  get tintValue() {
    return this._tintColor.toNumber();
  }
  /** Gets called automatically by the Mesh. Intended to be overridden for custom {@link PIXI.MeshMaterial} objects. */
  update() {
    if (this._colorDirty) {
      this._colorDirty = !1;
      const t = this.texture.baseTexture.alphaMode;
      tt.shared.setValue(this._tintColor).premultiply(this._alpha, t).toArray(this.uniforms.uColor);
    }
    this.uvMatrix.update() && (this.uniforms.uTextureMatrix = this.uvMatrix.mapCoord);
  }
}
class w_ extends Gs {
  /**
   * @param width - The width of the plane.
   * @param height - The height of the plane.
   * @param segWidth - Number of horizontal segments.
   * @param segHeight - Number of vertical segments.
   */
  constructor(t = 100, e = 100, r = 10, s = 10) {
    super(), this.segWidth = r, this.segHeight = s, this.width = t, this.height = e, this.build();
  }
  /**
   * Refreshes plane coordinates
   * @private
   */
  build() {
    const t = this.segWidth * this.segHeight, e = [], r = [], s = [], n = this.segWidth - 1, a = this.segHeight - 1, o = this.width / n, h = this.height / a;
    for (let u = 0; u < t; u++) {
      const c = u % this.segWidth, d = u / this.segWidth | 0;
      e.push(c * o, d * h), r.push(c / n, d / a);
    }
    const l = n * a;
    for (let u = 0; u < l; u++) {
      const c = u % n, d = u / n | 0, f = d * this.segWidth + c, p = d * this.segWidth + c + 1, m = (d + 1) * this.segWidth + c, y = (d + 1) * this.segWidth + c + 1;
      s.push(
        f,
        p,
        m,
        p,
        y,
        m
      );
    }
    this.buffers[0].data = new Float32Array(e), this.buffers[1].data = new Float32Array(r), this.indexBuffer.data = new Uint16Array(s), this.buffers[0].update(), this.buffers[1].update(), this.indexBuffer.update();
  }
}
class A_ extends Gs {
  /**
   * @param width - The width (i.e., thickness) of the rope.
   * @param points - An array of {@link PIXI.Point} objects to construct this rope.
   * @param textureScale - By default the rope texture will be stretched to match
   *     rope length. If textureScale is positive this value will be treated as a scaling
   *     factor and the texture will preserve its aspect ratio instead. To create a tiling rope
   *     set baseTexture.wrapMode to {@link PIXI.WRAP_MODES.REPEAT} and use a power of two texture,
   *     then set textureScale=1 to keep the original texture pixel size.
   *     In order to reduce alpha channel artifacts provide a larger texture and downsample -
   *     i.e. set textureScale=0.5 to scale it down twice.
   */
  constructor(t = 200, e, r = 0) {
    super(
      new Float32Array(e.length * 4),
      new Float32Array(e.length * 4),
      new Uint16Array((e.length - 1) * 6)
    ), this.points = e, this._width = t, this.textureScale = r, this.build();
  }
  /**
   * The width (i.e., thickness) of the rope.
   * @readonly
   */
  get width() {
    return this._width;
  }
  /** Refreshes Rope indices and uvs */
  build() {
    const t = this.points;
    if (!t)
      return;
    const e = this.getBuffer("aVertexPosition"), r = this.getBuffer("aTextureCoord"), s = this.getIndex();
    if (t.length < 1)
      return;
    e.data.length / 4 !== t.length && (e.data = new Float32Array(t.length * 4), r.data = new Float32Array(t.length * 4), s.data = new Uint16Array((t.length - 1) * 6));
    const n = r.data, a = s.data;
    n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 1;
    let o = 0, h = t[0];
    const l = this._width * this.textureScale, u = t.length;
    for (let d = 0; d < u; d++) {
      const f = d * 4;
      if (this.textureScale > 0) {
        const p = h.x - t[d].x, m = h.y - t[d].y, y = Math.sqrt(p * p + m * m);
        h = t[d], o += y / l;
      } else
        o = d / (u - 1);
      n[f] = o, n[f + 1] = 0, n[f + 2] = o, n[f + 3] = 1;
    }
    let c = 0;
    for (let d = 0; d < u - 1; d++) {
      const f = d * 2;
      a[c++] = f, a[c++] = f + 1, a[c++] = f + 2, a[c++] = f + 2, a[c++] = f + 1, a[c++] = f + 3;
    }
    r.update(), s.update(), this.updateVertices();
  }
  /** refreshes vertices of Rope mesh */
  updateVertices() {
    const t = this.points;
    if (t.length < 1)
      return;
    let e = t[0], r, s = 0, n = 0;
    const a = this.buffers[0].data, o = t.length, h = this.textureScale > 0 ? this.textureScale * this._width / 2 : this._width / 2;
    for (let l = 0; l < o; l++) {
      const u = t[l], c = l * 4;
      l < t.length - 1 ? r = t[l + 1] : r = u, n = -(r.x - e.x), s = r.y - e.y;
      const d = Math.sqrt(s * s + n * n);
      d < 1e-6 ? (s = 0, n = 0) : (s /= d, n /= d, s *= h, n *= h), a[c] = u.x + s, a[c + 1] = u.y + n, a[c + 2] = u.x - s, a[c + 3] = u.y - n, e = u;
    }
    this.buffers[0].update();
  }
  update() {
    this.textureScale > 0 ? this.build() : this.updateVertices();
  }
}
class Gu extends kr {
  /**
   * @param texture - The texture to use on the SimplePlane.
   * @param verticesX - The number of vertices in the x-axis
   * @param verticesY - The number of vertices in the y-axis
   */
  constructor(t, e, r) {
    const s = new w_(t.width, t.height, e, r), n = new fi(O.WHITE);
    super(s, n), this.texture = t, this.autoResize = !0;
  }
  /**
   * Method used for overrides, to do something in case texture frame was changed.
   * Meshes based on plane can override it and change more details based on texture.
   */
  textureUpdated() {
    this._textureID = this.shader.texture._updateID;
    const t = this.geometry, { width: e, height: r } = this.shader.texture;
    this.autoResize && (t.width !== e || t.height !== r) && (t.width = this.shader.texture.width, t.height = this.shader.texture.height, t.build());
  }
  set texture(t) {
    this.shader.texture !== t && (this.shader.texture = t, this._textureID = -1, t.baseTexture.valid ? this.textureUpdated() : t.once("update", this.textureUpdated, this));
  }
  get texture() {
    return this.shader.texture;
  }
  _render(t) {
    this._textureID !== this.shader.texture._updateID && this.textureUpdated(), super._render(t);
  }
  destroy(t) {
    this.shader.texture.off("update", this.textureUpdated, this), super.destroy(t);
  }
}
const Xi = 10;
class S_ extends Gu {
  /**
   * @param texture - The texture to use on the NineSlicePlane.
   * @param {number} [leftWidth=10] - size of the left vertical bar (A)
   * @param {number} [topHeight=10] - size of the top horizontal bar (C)
   * @param {number} [rightWidth=10] - size of the right vertical bar (B)
   * @param {number} [bottomHeight=10] - size of the bottom horizontal bar (D)
   */
  constructor(t, e, r, s, n) {
    var a, o, h, l;
    super(O.WHITE, 4, 4), this._origWidth = t.orig.width, this._origHeight = t.orig.height, this._width = this._origWidth, this._height = this._origHeight, this._leftWidth = e ?? ((a = t.defaultBorders) == null ? void 0 : a.left) ?? Xi, this._rightWidth = s ?? ((o = t.defaultBorders) == null ? void 0 : o.right) ?? Xi, this._topHeight = r ?? ((h = t.defaultBorders) == null ? void 0 : h.top) ?? Xi, this._bottomHeight = n ?? ((l = t.defaultBorders) == null ? void 0 : l.bottom) ?? Xi, this.texture = t;
  }
  textureUpdated() {
    this._textureID = this.shader.texture._updateID, this._refresh();
  }
  get vertices() {
    return this.geometry.getBuffer("aVertexPosition").data;
  }
  set vertices(t) {
    this.geometry.getBuffer("aVertexPosition").data = t;
  }
  /** Updates the horizontal vertices. */
  updateHorizontalVertices() {
    const t = this.vertices, e = this._getMinScale();
    t[9] = t[11] = t[13] = t[15] = this._topHeight * e, t[17] = t[19] = t[21] = t[23] = this._height - this._bottomHeight * e, t[25] = t[27] = t[29] = t[31] = this._height;
  }
  /** Updates the vertical vertices. */
  updateVerticalVertices() {
    const t = this.vertices, e = this._getMinScale();
    t[2] = t[10] = t[18] = t[26] = this._leftWidth * e, t[4] = t[12] = t[20] = t[28] = this._width - this._rightWidth * e, t[6] = t[14] = t[22] = t[30] = this._width;
  }
  /**
   * Returns the smaller of a set of vertical and horizontal scale of nine slice corners.
   * @returns Smaller number of vertical and horizontal scale.
   */
  _getMinScale() {
    const t = this._leftWidth + this._rightWidth, e = this._width > t ? 1 : this._width / t, r = this._topHeight + this._bottomHeight, s = this._height > r ? 1 : this._height / r;
    return Math.min(e, s);
  }
  /** The width of the NineSlicePlane, setting this will actually modify the vertices and UV's of this plane. */
  get width() {
    return this._width;
  }
  set width(t) {
    this._width = t, this._refresh();
  }
  /** The height of the NineSlicePlane, setting this will actually modify the vertices and UV's of this plane. */
  get height() {
    return this._height;
  }
  set height(t) {
    this._height = t, this._refresh();
  }
  /** The width of the left column. */
  get leftWidth() {
    return this._leftWidth;
  }
  set leftWidth(t) {
    this._leftWidth = t, this._refresh();
  }
  /** The width of the right column. */
  get rightWidth() {
    return this._rightWidth;
  }
  set rightWidth(t) {
    this._rightWidth = t, this._refresh();
  }
  /** The height of the top row. */
  get topHeight() {
    return this._topHeight;
  }
  set topHeight(t) {
    this._topHeight = t, this._refresh();
  }
  /** The height of the bottom row. */
  get bottomHeight() {
    return this._bottomHeight;
  }
  set bottomHeight(t) {
    this._bottomHeight = t, this._refresh();
  }
  /** Refreshes NineSlicePlane coords. All of them. */
  _refresh() {
    const t = this.texture, e = this.geometry.buffers[1].data;
    this._origWidth = t.orig.width, this._origHeight = t.orig.height;
    const r = 1 / this._origWidth, s = 1 / this._origHeight;
    e[0] = e[8] = e[16] = e[24] = 0, e[1] = e[3] = e[5] = e[7] = 0, e[6] = e[14] = e[22] = e[30] = 1, e[25] = e[27] = e[29] = e[31] = 1, e[2] = e[10] = e[18] = e[26] = r * this._leftWidth, e[4] = e[12] = e[20] = e[28] = 1 - r * this._rightWidth, e[9] = e[11] = e[13] = e[15] = s * this._topHeight, e[17] = e[19] = e[21] = e[23] = 1 - s * this._bottomHeight, this.updateHorizontalVertices(), this.updateVerticalVertices(), this.geometry.buffers[0].update(), this.geometry.buffers[1].update();
  }
}
class C_ extends kr {
  /**
   * @param texture - The texture to use
   * @param {Float32Array} [vertices] - if you want to specify the vertices
   * @param {Float32Array} [uvs] - if you want to specify the uvs
   * @param {Uint16Array} [indices] - if you want to specify the indices
   * @param drawMode - the drawMode, can be any of the Mesh.DRAW_MODES consts
   */
  constructor(t = O.EMPTY, e, r, s, n) {
    const a = new Gs(e, r, s);
    a.getBuffer("aVertexPosition").static = !1;
    const o = new fi(t);
    super(a, o, null, n), this.autoUpdate = !0;
  }
  /**
   * Collection of vertices data.
   * @type {Float32Array}
   */
  get vertices() {
    return this.geometry.getBuffer("aVertexPosition").data;
  }
  set vertices(t) {
    this.geometry.getBuffer("aVertexPosition").data = t;
  }
  _render(t) {
    this.autoUpdate && this.geometry.getBuffer("aVertexPosition").update(), super._render(t);
  }
}
class I_ extends kr {
  /**
   * Note: The wrap mode of the texture is set to REPEAT if `textureScale` is positive.
   * @param texture - The texture to use on the rope.
   * @param points - An array of {@link PIXI.Point} objects to construct this rope.
   * @param {number} textureScale - Optional. Positive values scale rope texture
   * keeping its aspect ratio. You can reduce alpha channel artifacts by providing a larger texture
   * and downsampling here. If set to zero, texture will be stretched instead.
   */
  constructor(t, e, r = 0) {
    const s = new A_(t.height, e, r), n = new fi(t);
    r > 0 && (t.baseTexture.wrapMode = Ee.REPEAT), super(s, n), this.autoUpdate = !0;
  }
  _render(t) {
    const e = this.geometry;
    (this.autoUpdate || e._width !== this.shader.texture.height) && (e._width = this.shader.texture.height, e.update()), super._render(t);
  }
}
class P_ extends Ft {
  /**
   * @param maxSize - The maximum number of particles that can be rendered by the container.
   *  Affects size of allocated buffers.
   * @param properties - The properties of children that should be uploaded to the gpu and applied.
   * @param {boolean} [properties.vertices=false] - When true, vertices be uploaded and applied.
   *                  if sprite's ` scale/anchor/trim/frame/orig` is dynamic, please set `true`.
   * @param {boolean} [properties.position=true] - When true, position be uploaded and applied.
   * @param {boolean} [properties.rotation=false] - When true, rotation be uploaded and applied.
   * @param {boolean} [properties.uvs=false] - When true, uvs be uploaded and applied.
   * @param {boolean} [properties.tint=false] - When true, alpha and tint be uploaded and applied.
   * @param {number} [batchSize=16384] - Number of particles per batch. If less than maxSize, it uses maxSize instead.
   * @param {boolean} [autoResize=false] - If true, container allocates more batches in case
   *  there are more than `maxSize` particles.
   */
  constructor(t = 1500, e, r = 16384, s = !1) {
    super();
    const n = 16384;
    r > n && (r = n), this._properties = [!1, !0, !1, !1, !1], this._maxSize = t, this._batchSize = r, this._buffers = null, this._bufferUpdateIDs = [], this._updateID = 0, this.interactiveChildren = !1, this.blendMode = X.NORMAL, this.autoResize = s, this.roundPixels = !0, this.baseTexture = null, this.setProperties(e), this._tintColor = new tt(0), this.tintRgb = new Float32Array(3), this.tint = 16777215;
  }
  /**
   * Sets the private properties array to dynamic / static based on the passed properties object
   * @param properties - The properties to be uploaded
   */
  setProperties(t) {
    t && (this._properties[0] = "vertices" in t || "scale" in t ? !!t.vertices || !!t.scale : this._properties[0], this._properties[1] = "position" in t ? !!t.position : this._properties[1], this._properties[2] = "rotation" in t ? !!t.rotation : this._properties[2], this._properties[3] = "uvs" in t ? !!t.uvs : this._properties[3], this._properties[4] = "tint" in t || "alpha" in t ? !!t.tint || !!t.alpha : this._properties[4]);
  }
  updateTransform() {
    this.displayObjectUpdateTransform();
  }
  /**
   * The tint applied to the container. This is a hex value.
   * A value of 0xFFFFFF will remove any tint effect.
   * IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
   * @default 0xFFFFFF
   */
  get tint() {
    return this._tintColor.value;
  }
  set tint(t) {
    this._tintColor.setValue(t), this._tintColor.toRgbArray(this.tintRgb);
  }
  /**
   * Renders the container using the WebGL renderer.
   * @param renderer - The WebGL renderer.
   */
  render(t) {
    !this.visible || this.worldAlpha <= 0 || !this.children.length || !this.renderable || (this.baseTexture || (this.baseTexture = this.children[0]._texture.baseTexture, this.baseTexture.valid || this.baseTexture.once("update", () => this.onChildrenChange(0))), t.batch.setObjectRenderer(t.plugins.particle), t.plugins.particle.render(this));
  }
  /**
   * Set the flag that static data should be updated to true
   * @param smallestChildIndex - The smallest child index.
   */
  onChildrenChange(t) {
    const e = Math.floor(t / this._batchSize);
    for (; this._bufferUpdateIDs.length < e; )
      this._bufferUpdateIDs.push(0);
    this._bufferUpdateIDs[e] = ++this._updateID;
  }
  dispose() {
    if (this._buffers) {
      for (let t = 0; t < this._buffers.length; ++t)
        this._buffers[t].destroy();
      this._buffers = null;
    }
  }
  /**
   * Destroys the container
   * @param options - Options parameter. A boolean will act as if all options
   *  have been set to that value
   * @param {boolean} [options.children=false] - if set to true, all the children will have their
   *  destroy method called as well. 'options' will be passed on to those calls.
   * @param {boolean} [options.texture=false] - Only used for child Sprites if options.children is set to true
   *  Should it destroy the texture of the child sprite
   * @param {boolean} [options.baseTexture=false] - Only used for child Sprites if options.children is set to true
   *  Should it destroy the base texture of the child sprite
   */
  destroy(t) {
    super.destroy(t), this.dispose(), this._properties = null, this._buffers = null, this._bufferUpdateIDs = null;
  }
}
class kh {
  /**
   * @param {object} properties - The properties to upload.
   * @param {boolean[]} dynamicPropertyFlags - Flags for which properties are dynamic.
   * @param {number} size - The size of the batch.
   */
  constructor(t, e, r) {
    this.geometry = new ke(), this.indexBuffer = null, this.size = r, this.dynamicProperties = [], this.staticProperties = [];
    for (let s = 0; s < t.length; ++s) {
      let n = t[s];
      n = {
        attributeName: n.attributeName,
        size: n.size,
        uploadFunction: n.uploadFunction,
        type: n.type || V.FLOAT,
        offset: n.offset
      }, e[s] ? this.dynamicProperties.push(n) : this.staticProperties.push(n);
    }
    this.staticStride = 0, this.staticBuffer = null, this.staticData = null, this.staticDataUint32 = null, this.dynamicStride = 0, this.dynamicBuffer = null, this.dynamicData = null, this.dynamicDataUint32 = null, this._updateID = 0, this.initBuffers();
  }
  /** Sets up the renderer context and necessary buffers. */
  initBuffers() {
    const t = this.geometry;
    let e = 0;
    this.indexBuffer = new ut(Zp(this.size), !0, !0), t.addIndex(this.indexBuffer), this.dynamicStride = 0;
    for (let a = 0; a < this.dynamicProperties.length; ++a) {
      const o = this.dynamicProperties[a];
      o.offset = e, e += o.size, this.dynamicStride += o.size;
    }
    const r = new ArrayBuffer(this.size * this.dynamicStride * 4 * 4);
    this.dynamicData = new Float32Array(r), this.dynamicDataUint32 = new Uint32Array(r), this.dynamicBuffer = new ut(this.dynamicData, !1, !1);
    let s = 0;
    this.staticStride = 0;
    for (let a = 0; a < this.staticProperties.length; ++a) {
      const o = this.staticProperties[a];
      o.offset = s, s += o.size, this.staticStride += o.size;
    }
    const n = new ArrayBuffer(this.size * this.staticStride * 4 * 4);
    this.staticData = new Float32Array(n), this.staticDataUint32 = new Uint32Array(n), this.staticBuffer = new ut(this.staticData, !0, !1);
    for (let a = 0; a < this.dynamicProperties.length; ++a) {
      const o = this.dynamicProperties[a];
      t.addAttribute(
        o.attributeName,
        this.dynamicBuffer,
        0,
        o.type === V.UNSIGNED_BYTE,
        o.type,
        this.dynamicStride * 4,
        o.offset * 4
      );
    }
    for (let a = 0; a < this.staticProperties.length; ++a) {
      const o = this.staticProperties[a];
      t.addAttribute(
        o.attributeName,
        this.staticBuffer,
        0,
        o.type === V.UNSIGNED_BYTE,
        o.type,
        this.staticStride * 4,
        o.offset * 4
      );
    }
  }
  /**
   * Uploads the dynamic properties.
   * @param children - The children to upload.
   * @param startIndex - The index to start at.
   * @param amount - The number to upload.
   */
  uploadDynamic(t, e, r) {
    for (let s = 0; s < this.dynamicProperties.length; s++) {
      const n = this.dynamicProperties[s];
      n.uploadFunction(
        t,
        e,
        r,
        n.type === V.UNSIGNED_BYTE ? this.dynamicDataUint32 : this.dynamicData,
        this.dynamicStride,
        n.offset
      );
    }
    this.dynamicBuffer._updateID++;
  }
  /**
   * Uploads the static properties.
   * @param children - The children to upload.
   * @param startIndex - The index to start at.
   * @param amount - The number to upload.
   */
  uploadStatic(t, e, r) {
    for (let s = 0; s < this.staticProperties.length; s++) {
      const n = this.staticProperties[s];
      n.uploadFunction(
        t,
        e,
        r,
        n.type === V.UNSIGNED_BYTE ? this.staticDataUint32 : this.staticData,
        this.staticStride,
        n.offset
      );
    }
    this.staticBuffer._updateID++;
  }
  /** Destroys the ParticleBuffer. */
  destroy() {
    this.indexBuffer = null, this.dynamicProperties = null, this.dynamicBuffer = null, this.dynamicData = null, this.dynamicDataUint32 = null, this.staticProperties = null, this.staticBuffer = null, this.staticData = null, this.staticDataUint32 = null, this.geometry.destroy();
  }
}
var R_ = `varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;

void main(void){
    vec4 color = texture2D(uSampler, vTextureCoord) * vColor;
    gl_FragColor = color;
}`, M_ = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;

attribute vec2 aPositionCoord;
attribute float aRotation;

uniform mat3 translationMatrix;
uniform vec4 uColor;

varying vec2 vTextureCoord;
varying vec4 vColor;

void main(void){
    float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);
    float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);

    vec2 v = vec2(x, y);
    v = v + aPositionCoord;

    gl_Position = vec4((translationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vColor = aColor * uColor;
}
`;
class Hu extends Ls {
  /**
   * @param renderer - The renderer this sprite batch works for.
   */
  constructor(t) {
    super(t), this.shader = null, this.properties = null, this.tempMatrix = new rt(), this.properties = [
      // verticesData
      {
        attributeName: "aVertexPosition",
        size: 2,
        uploadFunction: this.uploadVertices,
        offset: 0
      },
      // positionData
      {
        attributeName: "aPositionCoord",
        size: 2,
        uploadFunction: this.uploadPosition,
        offset: 0
      },
      // rotationData
      {
        attributeName: "aRotation",
        size: 1,
        uploadFunction: this.uploadRotation,
        offset: 0
      },
      // uvsData
      {
        attributeName: "aTextureCoord",
        size: 2,
        uploadFunction: this.uploadUvs,
        offset: 0
      },
      // tintData
      {
        attributeName: "aColor",
        size: 1,
        type: V.UNSIGNED_BYTE,
        uploadFunction: this.uploadTint,
        offset: 0
      }
    ], this.shader = le.from(M_, R_, {}), this.state = ce.for2d();
  }
  /**
   * Renders the particle container object.
   * @param container - The container to render using this ParticleRenderer.
   */
  render(t) {
    const e = t.children, r = t._maxSize, s = t._batchSize, n = this.renderer;
    let a = e.length;
    if (a === 0)
      return;
    a > r && !t.autoResize && (a = r);
    let o = t._buffers;
    o || (o = t._buffers = this.generateBuffers(t));
    const h = e[0]._texture.baseTexture, l = h.alphaMode > 0;
    this.state.blendMode = Fl(t.blendMode, l), n.state.set(this.state);
    const u = n.gl, c = t.worldTransform.copyTo(this.tempMatrix);
    c.prepend(n.globalUniforms.uniforms.projectionMatrix), this.shader.uniforms.translationMatrix = c.toArray(!0), this.shader.uniforms.uColor = tt.shared.setValue(t.tintRgb).premultiply(t.worldAlpha, l).toArray(this.shader.uniforms.uColor), this.shader.uniforms.uSampler = h, this.renderer.shader.bind(this.shader);
    let d = !1;
    for (let f = 0, p = 0; f < a; f += s, p += 1) {
      let m = a - f;
      m > s && (m = s), p >= o.length && o.push(this._generateOneMoreBuffer(t));
      const y = o[p];
      y.uploadDynamic(e, f, m);
      const v = t._bufferUpdateIDs[p] || 0;
      d = d || y._updateID < v, d && (y._updateID = t._updateID, y.uploadStatic(e, f, m)), n.geometry.bind(y.geometry), u.drawElements(u.TRIANGLES, m * 6, u.UNSIGNED_SHORT, 0);
    }
  }
  /**
   * Creates one particle buffer for each child in the container we want to render and updates internal properties.
   * @param container - The container to render using this ParticleRenderer
   * @returns - The buffers
   */
  generateBuffers(t) {
    const e = [], r = t._maxSize, s = t._batchSize, n = t._properties;
    for (let a = 0; a < r; a += s)
      e.push(new kh(this.properties, n, s));
    return e;
  }
  /**
   * Creates one more particle buffer, because container has autoResize feature.
   * @param container - The container to render using this ParticleRenderer
   * @returns - The generated buffer
   */
  _generateOneMoreBuffer(t) {
    const e = t._batchSize, r = t._properties;
    return new kh(this.properties, r, e);
  }
  /**
   * Uploads the vertices.
   * @param children - the array of sprites to render
   * @param startIndex - the index to start from in the children array
   * @param amount - the amount of children that will have their vertices uploaded
   * @param array - The vertices to upload.
   * @param stride - Stride to use for iteration.
   * @param offset - Offset to start at.
   */
  uploadVertices(t, e, r, s, n, a) {
    let o = 0, h = 0, l = 0, u = 0;
    for (let c = 0; c < r; ++c) {
      const d = t[e + c], f = d._texture, p = d.scale.x, m = d.scale.y, y = f.trim, v = f.orig;
      y ? (h = y.x - d.anchor.x * v.width, o = h + y.width, u = y.y - d.anchor.y * v.height, l = u + y.height) : (o = v.width * (1 - d.anchor.x), h = v.width * -d.anchor.x, l = v.height * (1 - d.anchor.y), u = v.height * -d.anchor.y), s[a] = h * p, s[a + 1] = u * m, s[a + n] = o * p, s[a + n + 1] = u * m, s[a + n * 2] = o * p, s[a + n * 2 + 1] = l * m, s[a + n * 3] = h * p, s[a + n * 3 + 1] = l * m, a += n * 4;
    }
  }
  /**
   * Uploads the position.
   * @param children - the array of sprites to render
   * @param startIndex - the index to start from in the children array
   * @param amount - the amount of children that will have their positions uploaded
   * @param array - The vertices to upload.
   * @param stride - Stride to use for iteration.
   * @param offset - Offset to start at.
   */
  uploadPosition(t, e, r, s, n, a) {
    for (let o = 0; o < r; o++) {
      const h = t[e + o].position;
      s[a] = h.x, s[a + 1] = h.y, s[a + n] = h.x, s[a + n + 1] = h.y, s[a + n * 2] = h.x, s[a + n * 2 + 1] = h.y, s[a + n * 3] = h.x, s[a + n * 3 + 1] = h.y, a += n * 4;
    }
  }
  /**
   * Uploads the rotation.
   * @param children - the array of sprites to render
   * @param startIndex - the index to start from in the children array
   * @param amount - the amount of children that will have their rotation uploaded
   * @param array - The vertices to upload.
   * @param stride - Stride to use for iteration.
   * @param offset - Offset to start at.
   */
  uploadRotation(t, e, r, s, n, a) {
    for (let o = 0; o < r; o++) {
      const h = t[e + o].rotation;
      s[a] = h, s[a + n] = h, s[a + n * 2] = h, s[a + n * 3] = h, a += n * 4;
    }
  }
  /**
   * Uploads the UVs.
   * @param children - the array of sprites to render
   * @param startIndex - the index to start from in the children array
   * @param amount - the amount of children that will have their rotation uploaded
   * @param array - The vertices to upload.
   * @param stride - Stride to use for iteration.
   * @param offset - Offset to start at.
   */
  uploadUvs(t, e, r, s, n, a) {
    for (let o = 0; o < r; ++o) {
      const h = t[e + o]._texture._uvs;
      h ? (s[a] = h.x0, s[a + 1] = h.y0, s[a + n] = h.x1, s[a + n + 1] = h.y1, s[a + n * 2] = h.x2, s[a + n * 2 + 1] = h.y2, s[a + n * 3] = h.x3, s[a + n * 3 + 1] = h.y3, a += n * 4) : (s[a] = 0, s[a + 1] = 0, s[a + n] = 0, s[a + n + 1] = 0, s[a + n * 2] = 0, s[a + n * 2 + 1] = 0, s[a + n * 3] = 0, s[a + n * 3 + 1] = 0, a += n * 4);
    }
  }
  /**
   * Uploads the tint.
   * @param children - the array of sprites to render
   * @param startIndex - the index to start from in the children array
   * @param amount - the amount of children that will have their rotation uploaded
   * @param array - The vertices to upload.
   * @param stride - Stride to use for iteration.
   * @param offset - Offset to start at.
   */
  uploadTint(t, e, r, s, n, a) {
    for (let o = 0; o < r; ++o) {
      const h = t[e + o], l = tt.shared.setValue(h._tintRGB).toPremultiplied(h.alpha, h.texture.baseTexture.alphaMode > 0);
      s[a] = l, s[a + n] = l, s[a + n * 2] = l, s[a + n * 3] = l, a += n * 4;
    }
  }
  /** Destroys the ParticleRenderer. */
  destroy() {
    super.destroy(), this.shader && (this.shader.destroy(), this.shader = null), this.tempMatrix = null;
  }
}
Hu.extension = {
  name: "particle",
  type: F.RendererPlugin
};
k.add(Hu);
var Hs = /* @__PURE__ */ ((i) => (i[i.LINEAR_VERTICAL = 0] = "LINEAR_VERTICAL", i[i.LINEAR_HORIZONTAL = 1] = "LINEAR_HORIZONTAL", i))(Hs || {});
const Wi = {
  // TextMetrics requires getImageData readback for measuring fonts.
  willReadFrequently: !0
}, ie = class H {
  /**
   * Checking that we can use modern canvas 2D API.
   *
   * Note: This is an unstable API, Chrome < 94 use `textLetterSpacing`, later versions use `letterSpacing`.
   * @see PIXI.TextMetrics.experimentalLetterSpacing
   * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/letterSpacing
   * @see https://developer.chrome.com/origintrials/#/view_trial/3585991203293757441
   */
  static get experimentalLetterSpacingSupported() {
    let t = H._experimentalLetterSpacingSupported;
    if (t !== void 0) {
      const e = L.ADAPTER.getCanvasRenderingContext2D().prototype;
      t = H._experimentalLetterSpacingSupported = "letterSpacing" in e || "textLetterSpacing" in e;
    }
    return t;
  }
  /**
   * @param text - the text that was measured
   * @param style - the style that was measured
   * @param width - the measured width of the text
   * @param height - the measured height of the text
   * @param lines - an array of the lines of text broken by new lines and wrapping if specified in style
   * @param lineWidths - an array of the line widths for each line matched to `lines`
   * @param lineHeight - the measured line height for this style
   * @param maxLineWidth - the maximum line width for all measured lines
   * @param {PIXI.IFontMetrics} fontProperties - the font properties object from TextMetrics.measureFont
   */
  constructor(t, e, r, s, n, a, o, h, l) {
    this.text = t, this.style = e, this.width = r, this.height = s, this.lines = n, this.lineWidths = a, this.lineHeight = o, this.maxLineWidth = h, this.fontProperties = l;
  }
  /**
   * Measures the supplied string of text and returns a Rectangle.
   * @param text - The text to measure.
   * @param style - The text style to use for measuring
   * @param wordWrap - Override for if word-wrap should be applied to the text.
   * @param canvas - optional specification of the canvas to use for measuring.
   * @returns Measured width and height of the text.
   */
  static measureText(t, e, r, s = H._canvas) {
    r = r ?? e.wordWrap;
    const n = e.toFontString(), a = H.measureFont(n);
    a.fontSize === 0 && (a.fontSize = e.fontSize, a.ascent = e.fontSize);
    const o = s.getContext("2d", Wi);
    o.font = n;
    const h = (r ? H.wordWrap(t, e, s) : t).split(/(?:\r\n|\r|\n)/), l = new Array(h.length);
    let u = 0;
    for (let p = 0; p < h.length; p++) {
      const m = H._measureText(h[p], e.letterSpacing, o);
      l[p] = m, u = Math.max(u, m);
    }
    let c = u + e.strokeThickness;
    e.dropShadow && (c += e.dropShadowDistance);
    const d = e.lineHeight || a.fontSize + e.strokeThickness;
    let f = Math.max(d, a.fontSize + e.strokeThickness * 2) + e.leading + (h.length - 1) * (d + e.leading);
    return e.dropShadow && (f += e.dropShadowDistance), new H(
      t,
      e,
      c,
      f,
      h,
      l,
      d + e.leading,
      u,
      a
    );
  }
  static _measureText(t, e, r) {
    let s = !1;
    H.experimentalLetterSpacingSupported && (H.experimentalLetterSpacing ? (r.letterSpacing = `${e}px`, r.textLetterSpacing = `${e}px`, s = !0) : (r.letterSpacing = "0px", r.textLetterSpacing = "0px"));
    let n = r.measureText(t).width;
    return n > 0 && (s ? n -= e : n += (H.graphemeSegmenter(t).length - 1) * e), n;
  }
  /**
   * Applies newlines to a string to have it optimally fit into the horizontal
   * bounds set by the Text object's wordWrapWidth property.
   * @param text - String to apply word wrapping to
   * @param style - the style to use when wrapping
   * @param canvas - optional specification of the canvas to use for measuring.
   * @returns New string with new lines applied where required
   */
  static wordWrap(t, e, r = H._canvas) {
    const s = r.getContext("2d", Wi);
    let n = 0, a = "", o = "";
    const h = /* @__PURE__ */ Object.create(null), { letterSpacing: l, whiteSpace: u } = e, c = H.collapseSpaces(u), d = H.collapseNewlines(u);
    let f = !c;
    const p = e.wordWrapWidth + l, m = H.tokenize(t);
    for (let y = 0; y < m.length; y++) {
      let v = m[y];
      if (H.isNewline(v)) {
        if (!d) {
          o += H.addLine(a), f = !c, a = "", n = 0;
          continue;
        }
        v = " ";
      }
      if (c) {
        const _ = H.isBreakingSpace(v), g = H.isBreakingSpace(a[a.length - 1]);
        if (_ && g)
          continue;
      }
      const b = H.getFromCache(v, l, h, s);
      if (b > p)
        if (a !== "" && (o += H.addLine(a), a = "", n = 0), H.canBreakWords(v, e.breakWords)) {
          const _ = H.wordWrapSplit(v);
          for (let g = 0; g < _.length; g++) {
            let w = _[g], R = w, A = 1;
            for (; _[g + A]; ) {
              const T = _[g + A];
              if (!H.canBreakChars(R, T, v, g, e.breakWords))
                w += T;
              else
                break;
              R = T, A++;
            }
            g += A - 1;
            const x = H.getFromCache(w, l, h, s);
            x + n > p && (o += H.addLine(a), f = !1, a = "", n = 0), a += w, n += x;
          }
        } else {
          a.length > 0 && (o += H.addLine(a), a = "", n = 0);
          const _ = y === m.length - 1;
          o += H.addLine(v, !_), f = !1, a = "", n = 0;
        }
      else
        b + n > p && (f = !1, o += H.addLine(a), a = "", n = 0), (a.length > 0 || !H.isBreakingSpace(v) || f) && (a += v, n += b);
    }
    return o += H.addLine(a, !1), o;
  }
  /**
   * Convienience function for logging each line added during the wordWrap method.
   * @param line    - The line of text to add
   * @param newLine - Add new line character to end
   * @returns A formatted line
   */
  static addLine(t, e = !0) {
    return t = H.trimRight(t), t = e ? `${t}
` : t, t;
  }
  /**
   * Gets & sets the widths of calculated characters in a cache object
   * @param key            - The key
   * @param letterSpacing  - The letter spacing
   * @param cache          - The cache
   * @param context        - The canvas context
   * @returns The from cache.
   */
  static getFromCache(t, e, r, s) {
    let n = r[t];
    return typeof n != "number" && (n = H._measureText(t, e, s) + e, r[t] = n), n;
  }
  /**
   * Determines whether we should collapse breaking spaces.
   * @param whiteSpace - The TextStyle property whiteSpace
   * @returns Should collapse
   */
  static collapseSpaces(t) {
    return t === "normal" || t === "pre-line";
  }
  /**
   * Determines whether we should collapse newLine chars.
   * @param whiteSpace - The white space
   * @returns should collapse
   */
  static collapseNewlines(t) {
    return t === "normal";
  }
  /**
   * Trims breaking whitespaces from string.
   * @param text - The text
   * @returns Trimmed string
   */
  static trimRight(t) {
    if (typeof t != "string")
      return "";
    for (let e = t.length - 1; e >= 0; e--) {
      const r = t[e];
      if (!H.isBreakingSpace(r))
        break;
      t = t.slice(0, -1);
    }
    return t;
  }
  /**
   * Determines if char is a newline.
   * @param char - The character
   * @returns True if newline, False otherwise.
   */
  static isNewline(t) {
    return typeof t != "string" ? !1 : H._newlines.includes(t.charCodeAt(0));
  }
  /**
   * Determines if char is a breaking whitespace.
   *
   * It allows one to determine whether char should be a breaking whitespace
   * For example certain characters in CJK langs or numbers.
   * It must return a boolean.
   * @param char - The character
   * @param [_nextChar] - The next character
   * @returns True if whitespace, False otherwise.
   */
  static isBreakingSpace(t, e) {
    return typeof t != "string" ? !1 : H._breakingSpaces.includes(t.charCodeAt(0));
  }
  /**
   * Splits a string into words, breaking-spaces and newLine characters
   * @param text - The text
   * @returns A tokenized array
   */
  static tokenize(t) {
    const e = [];
    let r = "";
    if (typeof t != "string")
      return e;
    for (let s = 0; s < t.length; s++) {
      const n = t[s], a = t[s + 1];
      if (H.isBreakingSpace(n, a) || H.isNewline(n)) {
        r !== "" && (e.push(r), r = ""), e.push(n);
        continue;
      }
      r += n;
    }
    return r !== "" && e.push(r), e;
  }
  /**
   * Overridable helper method used internally by TextMetrics, exposed to allow customizing the class's behavior.
   *
   * It allows one to customise which words should break
   * Examples are if the token is CJK or numbers.
   * It must return a boolean.
   * @param _token - The token
   * @param breakWords - The style attr break words
   * @returns Whether to break word or not
   */
  static canBreakWords(t, e) {
    return e;
  }
  /**
   * Overridable helper method used internally by TextMetrics, exposed to allow customizing the class's behavior.
   *
   * It allows one to determine whether a pair of characters
   * should be broken by newlines
   * For example certain characters in CJK langs or numbers.
   * It must return a boolean.
   * @param _char - The character
   * @param _nextChar - The next character
   * @param _token - The token/word the characters are from
   * @param _index - The index in the token of the char
   * @param _breakWords - The style attr break words
   * @returns whether to break word or not
   */
  static canBreakChars(t, e, r, s, n) {
    return !0;
  }
  /**
   * Overridable helper method used internally by TextMetrics, exposed to allow customizing the class's behavior.
   *
   * It is called when a token (usually a word) has to be split into separate pieces
   * in order to determine the point to break a word.
   * It must return an array of characters.
   * @param token - The token to split
   * @returns The characters of the token
   * @see TextMetrics.graphemeSegmenter
   */
  static wordWrapSplit(t) {
    return H.graphemeSegmenter(t);
  }
  /**
   * Calculates the ascent, descent and fontSize of a given font-style
   * @param font - String representing the style of the font
   * @returns Font properties object
   */
  static measureFont(t) {
    if (H._fonts[t])
      return H._fonts[t];
    const e = {
      ascent: 0,
      descent: 0,
      fontSize: 0
    }, r = H._canvas, s = H._context;
    s.font = t;
    const n = H.METRICS_STRING + H.BASELINE_SYMBOL, a = Math.ceil(s.measureText(n).width);
    let o = Math.ceil(s.measureText(H.BASELINE_SYMBOL).width);
    const h = Math.ceil(H.HEIGHT_MULTIPLIER * o);
    if (o = o * H.BASELINE_MULTIPLIER | 0, a === 0 || h === 0)
      return H._fonts[t] = e, e;
    r.width = a, r.height = h, s.fillStyle = "#f00", s.fillRect(0, 0, a, h), s.font = t, s.textBaseline = "alphabetic", s.fillStyle = "#000", s.fillText(n, 0, o);
    const l = s.getImageData(0, 0, a, h).data, u = l.length, c = a * 4;
    let d = 0, f = 0, p = !1;
    for (d = 0; d < o; ++d) {
      for (let m = 0; m < c; m += 4)
        if (l[f + m] !== 255) {
          p = !0;
          break;
        }
      if (!p)
        f += c;
      else
        break;
    }
    for (e.ascent = o - d, f = u - c, p = !1, d = h; d > o; --d) {
      for (let m = 0; m < c; m += 4)
        if (l[f + m] !== 255) {
          p = !0;
          break;
        }
      if (!p)
        f -= c;
      else
        break;
    }
    return e.descent = d - o, e.fontSize = e.ascent + e.descent, H._fonts[t] = e, e;
  }
  /**
   * Clear font metrics in metrics cache.
   * @param {string} [font] - font name. If font name not set then clear cache for all fonts.
   */
  static clearMetrics(t = "") {
    t ? delete H._fonts[t] : H._fonts = {};
  }
  /**
   * Cached canvas element for measuring text
   * TODO: this should be private, but isn't because of backward compat, will fix later.
   * @ignore
   */
  static get _canvas() {
    var t;
    if (!H.__canvas) {
      let e;
      try {
        const r = new OffscreenCanvas(0, 0);
        if ((t = r.getContext("2d", Wi)) != null && t.measureText)
          return H.__canvas = r, r;
        e = L.ADAPTER.createCanvas();
      } catch {
        e = L.ADAPTER.createCanvas();
      }
      e.width = e.height = 10, H.__canvas = e;
    }
    return H.__canvas;
  }
  /**
   * TODO: this should be private, but isn't because of backward compat, will fix later.
   * @ignore
   */
  static get _context() {
    return H.__context || (H.__context = H._canvas.getContext("2d", Wi)), H.__context;
  }
};
ie.METRICS_STRING = "|ÉqÅ", /** Baseline symbol for calculate font metrics. */
ie.BASELINE_SYMBOL = "M", /** Baseline multiplier for calculate font metrics. */
ie.BASELINE_MULTIPLIER = 1.4, /** Height multiplier for setting height of canvas to calculate font metrics. */
ie.HEIGHT_MULTIPLIER = 2, /**
* A Unicode "character", or "grapheme cluster", can be composed of multiple Unicode code points,
* such as letters with diacritical marks (e.g. `'\u0065\u0301'`, letter e with acute)
* or emojis with modifiers (e.g. `'\uD83E\uDDD1\u200D\uD83D\uDCBB'`, technologist).
* The new `Intl.Segmenter` API in ES2022 can split the string into grapheme clusters correctly. If it is not available,
* PixiJS will fallback to use the iterator of String, which can only spilt the string into code points.
* If you want to get full functionality in environments that don't support `Intl.Segmenter` (such as Firefox),
* you can use other libraries such as [grapheme-splitter]{@link https://www.npmjs.com/package/grapheme-splitter}
* or [graphemer]{@link https://www.npmjs.com/package/graphemer} to create a polyfill. Since these libraries can be
* relatively large in size to handle various Unicode grapheme clusters properly, PixiJS won't use them directly.
*/
ie.graphemeSegmenter = (() => {
  if (typeof (Intl == null ? void 0 : Intl.Segmenter) == "function") {
    const i = new Intl.Segmenter();
    return (t) => [...i.segment(t)].map((e) => e.segment);
  }
  return (i) => [...i];
})(), /**
* New rendering behavior for letter-spacing which uses Chrome's new native API. This will
* lead to more accurate letter-spacing results because it does not try to manually draw
* each character. However, this Chrome API is experimental and may not serve all cases yet.
* @see PIXI.TextMetrics.experimentalLetterSpacingSupported
*/
ie.experimentalLetterSpacing = !1, /** Cache of {@see PIXI.TextMetrics.FontMetrics} objects. */
ie._fonts = {}, /** Cache of new line chars. */
ie._newlines = [
  10,
  // line feed
  13
  // carriage return
], /** Cache of breaking spaces. */
ie._breakingSpaces = [
  9,
  // character tabulation
  32,
  // space
  8192,
  // en quad
  8193,
  // em quad
  8194,
  // en space
  8195,
  // em space
  8196,
  // three-per-em space
  8197,
  // four-per-em space
  8198,
  // six-per-em space
  8200,
  // punctuation space
  8201,
  // thin space
  8202,
  // hair space
  8287,
  // medium mathematical space
  12288
  // ideographic space
];
let De = ie;
const B_ = [
  "serif",
  "sans-serif",
  "monospace",
  "cursive",
  "fantasy",
  "system-ui"
], $u = class ii {
  /**
   * @param style - TextStyle properties to be set on the text. See {@link PIXI.TextStyle.defaultStyle}
   *       for the default values.
   */
  constructor(t) {
    this.styleID = 0, this.reset(), Pn(this, t, t);
  }
  /**
   * Creates a new TextStyle object with the same values as this one.
   * Note that the only the properties of the object are cloned.
   *
   * @return New cloned TextStyle object
   */
  clone() {
    const t = {};
    return Pn(t, this, ii.defaultStyle), new ii(t);
  }
  /** Resets all properties to the defaults specified in TextStyle.prototype._default */
  reset() {
    Pn(this, ii.defaultStyle, ii.defaultStyle);
  }
  /**
   * Alignment for multiline text, does not affect single line text.
   *
   * @member {'left'|'center'|'right'|'justify'}
   */
  get align() {
    return this._align;
  }
  set align(t) {
    this._align !== t && (this._align = t, this.styleID++);
  }
  /** Indicates if lines can be wrapped within words, it needs wordWrap to be set to true. */
  get breakWords() {
    return this._breakWords;
  }
  set breakWords(t) {
    this._breakWords !== t && (this._breakWords = t, this.styleID++);
  }
  /** Set a drop shadow for the text. */
  get dropShadow() {
    return this._dropShadow;
  }
  set dropShadow(t) {
    this._dropShadow !== t && (this._dropShadow = t, this.styleID++);
  }
  /** Set alpha for the drop shadow. */
  get dropShadowAlpha() {
    return this._dropShadowAlpha;
  }
  set dropShadowAlpha(t) {
    this._dropShadowAlpha !== t && (this._dropShadowAlpha = t, this.styleID++);
  }
  /** Set a angle of the drop shadow. */
  get dropShadowAngle() {
    return this._dropShadowAngle;
  }
  set dropShadowAngle(t) {
    this._dropShadowAngle !== t && (this._dropShadowAngle = t, this.styleID++);
  }
  /** Set a shadow blur radius. */
  get dropShadowBlur() {
    return this._dropShadowBlur;
  }
  set dropShadowBlur(t) {
    this._dropShadowBlur !== t && (this._dropShadowBlur = t, this.styleID++);
  }
  /** A fill style to be used on the dropshadow e.g., 'red', '#00FF00'. */
  get dropShadowColor() {
    return this._dropShadowColor;
  }
  set dropShadowColor(t) {
    const e = In(t);
    this._dropShadowColor !== e && (this._dropShadowColor = e, this.styleID++);
  }
  /** Set a distance of the drop shadow. */
  get dropShadowDistance() {
    return this._dropShadowDistance;
  }
  set dropShadowDistance(t) {
    this._dropShadowDistance !== t && (this._dropShadowDistance = t, this.styleID++);
  }
  /**
   * A canvas fillstyle that will be used on the text e.g., 'red', '#00FF00'.
   *
   * Can be an array to create a gradient e.g., `['#000000','#FFFFFF']`
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle|MDN}
   *
   * @member {string|string[]|number|number[]|CanvasGradient|CanvasPattern}
   */
  get fill() {
    return this._fill;
  }
  set fill(t) {
    const e = In(t);
    this._fill !== e && (this._fill = e, this.styleID++);
  }
  /**
   * If fill is an array of colours to create a gradient, this can change the type/direction of the gradient.
   *
   * @type {PIXI.TEXT_GRADIENT}
   */
  get fillGradientType() {
    return this._fillGradientType;
  }
  set fillGradientType(t) {
    this._fillGradientType !== t && (this._fillGradientType = t, this.styleID++);
  }
  /**
   * If fill is an array of colours to create a gradient, this array can set the stop points
   * (numbers between 0 and 1) for the color, overriding the default behaviour of evenly spacing them.
   */
  get fillGradientStops() {
    return this._fillGradientStops;
  }
  set fillGradientStops(t) {
    D_(this._fillGradientStops, t) || (this._fillGradientStops = t, this.styleID++);
  }
  /**
   * The font family, can be a single font name, or a list of names where the first
   * is the preferred font.
   */
  get fontFamily() {
    return this._fontFamily;
  }
  set fontFamily(t) {
    this.fontFamily !== t && (this._fontFamily = t, this.styleID++);
  }
  /**
   * The font size
   * (as a number it converts to px, but as a string, equivalents are '26px','20pt','160%' or '1.6em')
   */
  get fontSize() {
    return this._fontSize;
  }
  set fontSize(t) {
    this._fontSize !== t && (this._fontSize = t, this.styleID++);
  }
  /**
   * The font style.
   *
   * @member {'normal'|'italic'|'oblique'}
   */
  get fontStyle() {
    return this._fontStyle;
  }
  set fontStyle(t) {
    this._fontStyle !== t && (this._fontStyle = t, this.styleID++);
  }
  /**
   * The font variant.
   *
   * @member {'normal'|'small-caps'}
   */
  get fontVariant() {
    return this._fontVariant;
  }
  set fontVariant(t) {
    this._fontVariant !== t && (this._fontVariant = t, this.styleID++);
  }
  /**
   * The font weight.
   *
   * @member {'normal'|'bold'|'bolder'|'lighter'|'100'|'200'|'300'|'400'|'500'|'600'|'700'|'800'|'900'}
   */
  get fontWeight() {
    return this._fontWeight;
  }
  set fontWeight(t) {
    this._fontWeight !== t && (this._fontWeight = t, this.styleID++);
  }
  /** The amount of spacing between letters, default is 0. */
  get letterSpacing() {
    return this._letterSpacing;
  }
  set letterSpacing(t) {
    this._letterSpacing !== t && (this._letterSpacing = t, this.styleID++);
  }
  /** The line height, a number that represents the vertical space that a letter uses. */
  get lineHeight() {
    return this._lineHeight;
  }
  set lineHeight(t) {
    this._lineHeight !== t && (this._lineHeight = t, this.styleID++);
  }
  /** The space between lines. */
  get leading() {
    return this._leading;
  }
  set leading(t) {
    this._leading !== t && (this._leading = t, this.styleID++);
  }
  /**
   * The lineJoin property sets the type of corner created, it can resolve spiked text issues.
   * Default is 'miter' (creates a sharp corner).
   *
   * @member {'miter'|'round'|'bevel'}
   */
  get lineJoin() {
    return this._lineJoin;
  }
  set lineJoin(t) {
    this._lineJoin !== t && (this._lineJoin = t, this.styleID++);
  }
  /**
   * The miter limit to use when using the 'miter' lineJoin mode.
   *
   * This can reduce or increase the spikiness of rendered text.
   */
  get miterLimit() {
    return this._miterLimit;
  }
  set miterLimit(t) {
    this._miterLimit !== t && (this._miterLimit = t, this.styleID++);
  }
  /**
   * Occasionally some fonts are cropped. Adding some padding will prevent this from happening
   * by adding padding to all sides of the text.
   */
  get padding() {
    return this._padding;
  }
  set padding(t) {
    this._padding !== t && (this._padding = t, this.styleID++);
  }
  /**
   * A canvas fillstyle that will be used on the text stroke, e.g., 'blue', '#FCFF00'
   */
  get stroke() {
    return this._stroke;
  }
  set stroke(t) {
    const e = In(t);
    this._stroke !== e && (this._stroke = e, this.styleID++);
  }
  /**
   * A number that represents the thickness of the stroke.
   *
   * @default 0
   */
  get strokeThickness() {
    return this._strokeThickness;
  }
  set strokeThickness(t) {
    this._strokeThickness !== t && (this._strokeThickness = t, this.styleID++);
  }
  /**
   * The baseline of the text that is rendered.
   *
   * @member {'alphabetic'|'top'|'hanging'|'middle'|'ideographic'|'bottom'}
   */
  get textBaseline() {
    return this._textBaseline;
  }
  set textBaseline(t) {
    this._textBaseline !== t && (this._textBaseline = t, this.styleID++);
  }
  /** Trim transparent borders. */
  get trim() {
    return this._trim;
  }
  set trim(t) {
    this._trim !== t && (this._trim = t, this.styleID++);
  }
  /**
   * How newlines and spaces should be handled.
   * Default is 'pre' (preserve, preserve).
   *
   *  value       | New lines     |   Spaces
   *  ---         | ---           |   ---
   * 'normal'     | Collapse      |   Collapse
   * 'pre'        | Preserve      |   Preserve
   * 'pre-line'   | Preserve      |   Collapse
   *
   * @member {'normal'|'pre'|'pre-line'}
   */
  get whiteSpace() {
    return this._whiteSpace;
  }
  set whiteSpace(t) {
    this._whiteSpace !== t && (this._whiteSpace = t, this.styleID++);
  }
  /** Indicates if word wrap should be used. */
  get wordWrap() {
    return this._wordWrap;
  }
  set wordWrap(t) {
    this._wordWrap !== t && (this._wordWrap = t, this.styleID++);
  }
  /** The width at which text will wrap, it needs wordWrap to be set to true. */
  get wordWrapWidth() {
    return this._wordWrapWidth;
  }
  set wordWrapWidth(t) {
    this._wordWrapWidth !== t && (this._wordWrapWidth = t, this.styleID++);
  }
  /**
   * Generates a font style string to use for `TextMetrics.measureFont()`.
   *
   * @return Font style string, for passing to `TextMetrics.measureFont()`
   */
  toFontString() {
    const t = typeof this.fontSize == "number" ? `${this.fontSize}px` : this.fontSize;
    let e = this.fontFamily;
    Array.isArray(this.fontFamily) || (e = this.fontFamily.split(","));
    for (let r = e.length - 1; r >= 0; r--) {
      let s = e[r].trim();
      !/([\"\'])[^\'\"]+\1/.test(s) && !B_.includes(s) && (s = `"${s}"`), e[r] = s;
    }
    return `${this.fontStyle} ${this.fontVariant} ${this.fontWeight} ${t} ${e.join(",")}`;
  }
};
$u.defaultStyle = {
  /**
   * See {@link PIXI.TextStyle.align}
   * @type {'left'|'center'|'right'|'justify'}
   */
  align: "left",
  /** See {@link PIXI.TextStyle.breakWords} */
  breakWords: !1,
  /** See {@link PIXI.TextStyle.dropShadow} */
  dropShadow: !1,
  /** See {@link PIXI.TextStyle.dropShadowAlpha} */
  dropShadowAlpha: 1,
  /**
   * See {@link PIXI.TextStyle.dropShadowAngle}
   * @type {number}
   * @default Math.PI / 6
   */
  dropShadowAngle: Math.PI / 6,
  /** See {@link PIXI.TextStyle.dropShadowBlur} */
  dropShadowBlur: 0,
  /**
   * See {@link PIXI.TextStyle.dropShadowColor}
   * @type {string|number}
   */
  dropShadowColor: "black",
  /** See {@link PIXI.TextStyle.dropShadowDistance} */
  dropShadowDistance: 5,
  /**
   * See {@link PIXI.TextStyle.fill}
   * @type {string|string[]|number|number[]|CanvasGradient|CanvasPattern}
   */
  fill: "black",
  /**
   * See {@link PIXI.TextStyle.fillGradientType}
   * @type {PIXI.TEXT_GRADIENT}
   * @default PIXI.TEXT_GRADIENT.LINEAR_VERTICAL
   */
  fillGradientType: Hs.LINEAR_VERTICAL,
  /**
   * See {@link PIXI.TextStyle.fillGradientStops}
   * @type {number[]}
   * @default []
   */
  fillGradientStops: [],
  /**
   * See {@link PIXI.TextStyle.fontFamily}
   * @type {string|string[]}
   */
  fontFamily: "Arial",
  /**
   * See {@link PIXI.TextStyle.fontSize}
   * @type {number|string} 
   */
  fontSize: 26,
  /**
   * See {@link PIXI.TextStyle.fontStyle}
   * @type {'normal'|'italic'|'oblique'}
   */
  fontStyle: "normal",
  /**
   * See {@link PIXI.TextStyle.fontVariant}
   * @type {'normal'|'small-caps'}
   */
  fontVariant: "normal",
  /**
   * See {@link PIXI.TextStyle.fontWeight}
   * @type {'normal'|'bold'|'bolder'|'lighter'|'100'|'200'|'300'|'400'|'500'|'600'|'700'|'800'|'900'}
   */
  fontWeight: "normal",
  /** See {@link PIXI.TextStyle.leading} */
  leading: 0,
  /** See {@link PIXI.TextStyle.letterSpacing} */
  letterSpacing: 0,
  /** See {@link PIXI.TextStyle.lineHeight} */
  lineHeight: 0,
  /**
   * See {@link PIXI.TextStyle.lineJoin}
   * @type {'miter'|'round'|'bevel'}
   */
  lineJoin: "miter",
  /** See {@link PIXI.TextStyle.miterLimit} */
  miterLimit: 10,
  /** See {@link PIXI.TextStyle.padding} */
  padding: 0,
  /**
   * See {@link PIXI.TextStyle.stroke}
   * @type {string|number}
   */
  stroke: "black",
  /** See {@link PIXI.TextStyle.strokeThickness} */
  strokeThickness: 0,
  /**
   * See {@link PIXI.TextStyle.textBaseline} 
   * @type {'alphabetic'|'top'|'hanging'|'middle'|'ideographic'|'bottom'}
   */
  textBaseline: "alphabetic",
  /** See {@link PIXI.TextStyle.trim} */
  trim: !1,
  /**
   * See {@link PIXI.TextStyle.whiteSpace}
   * @type {'normal'|'pre'|'pre-line'}
   */
  whiteSpace: "pre",
  /** See {@link PIXI.TextStyle.wordWrap} */
  wordWrap: !1,
  /** See {@link PIXI.TextStyle.wordWrapWidth} */
  wordWrapWidth: 100
};
let He = $u;
function In(i) {
  const t = tt.shared, e = (r) => {
    const s = t.setValue(r);
    return s.alpha === 1 ? s.toHex() : s.toRgbaString();
  };
  return Array.isArray(i) ? i.map(e) : e(i);
}
function D_(i, t) {
  if (!Array.isArray(i) || !Array.isArray(t) || i.length !== t.length)
    return !1;
  for (let e = 0; e < i.length; ++e)
    if (i[e] !== t[e])
      return !1;
  return !0;
}
function Pn(i, t, e) {
  for (const r in e)
    Array.isArray(t[r]) ? i[r] = t[r].slice() : i[r] = t[r];
}
const F_ = {
  texture: !0,
  children: !1,
  baseTexture: !0
}, Vu = class Aa extends de {
  /**
   * @param text - The string that you would like the text to display
   * @param style - The style parameters
   * @param canvas - The canvas element for drawing text
   */
  constructor(t, e, r) {
    let s = !1;
    r || (r = L.ADAPTER.createCanvas(), s = !0), r.width = 3, r.height = 3;
    const n = O.from(r);
    n.orig = new j(), n.trim = new j(), super(n), this._ownCanvas = s, this.canvas = r, this.context = r.getContext("2d", {
      // required for trimming to work without warnings
      willReadFrequently: !0
    }), this._resolution = Aa.defaultResolution ?? L.RESOLUTION, this._autoResolution = Aa.defaultAutoResolution, this._text = null, this._style = null, this._styleListener = null, this._font = "", this.text = t, this.style = e, this.localStyleID = -1;
  }
  /**
   * @see PIXI.TextMetrics.experimentalLetterSpacing
   * @deprecated since 7.1.0
   */
  static get experimentalLetterSpacing() {
    return De.experimentalLetterSpacing;
  }
  static set experimentalLetterSpacing(t) {
    Y(
      "7.1.0",
      "Text.experimentalLetterSpacing is deprecated, use TextMetrics.experimentalLetterSpacing"
    ), De.experimentalLetterSpacing = t;
  }
  /**
   * Renders text to its canvas, and updates its texture.
   *
   * By default this is used internally to ensure the texture is correct before rendering,
   * but it can be used called externally, for example from this class to 'pre-generate' the texture from a piece of text,
   * and then shared across multiple Sprites.
   * @param respectDirty - Whether to abort updating the text if the Text isn't dirty and the function is called.
   */
  updateText(t) {
    const e = this._style;
    if (this.localStyleID !== e.styleID && (this.dirty = !0, this.localStyleID = e.styleID), !this.dirty && t)
      return;
    this._font = this._style.toFontString();
    const r = this.context, s = De.measureText(this._text || " ", this._style, this._style.wordWrap, this.canvas), n = s.width, a = s.height, o = s.lines, h = s.lineHeight, l = s.lineWidths, u = s.maxLineWidth, c = s.fontProperties;
    this.canvas.width = Math.ceil(Math.ceil(Math.max(1, n) + e.padding * 2) * this._resolution), this.canvas.height = Math.ceil(Math.ceil(Math.max(1, a) + e.padding * 2) * this._resolution), r.scale(this._resolution, this._resolution), r.clearRect(0, 0, this.canvas.width, this.canvas.height), r.font = this._font, r.lineWidth = e.strokeThickness, r.textBaseline = e.textBaseline, r.lineJoin = e.lineJoin, r.miterLimit = e.miterLimit;
    let d, f;
    const p = e.dropShadow ? 2 : 1;
    for (let m = 0; m < p; ++m) {
      const y = e.dropShadow && m === 0, v = y ? Math.ceil(Math.max(1, a) + e.padding * 2) : 0, b = v * this._resolution;
      if (y) {
        r.fillStyle = "black", r.strokeStyle = "black";
        const g = e.dropShadowColor, w = e.dropShadowBlur * this._resolution, R = e.dropShadowDistance * this._resolution;
        r.shadowColor = tt.shared.setValue(g).setAlpha(e.dropShadowAlpha).toRgbaString(), r.shadowBlur = w, r.shadowOffsetX = Math.cos(e.dropShadowAngle) * R, r.shadowOffsetY = Math.sin(e.dropShadowAngle) * R + b;
      } else
        r.fillStyle = this._generateFillStyle(e, o, s), r.strokeStyle = e.stroke, r.shadowColor = "black", r.shadowBlur = 0, r.shadowOffsetX = 0, r.shadowOffsetY = 0;
      let _ = (h - c.fontSize) / 2;
      h - c.fontSize < 0 && (_ = 0);
      for (let g = 0; g < o.length; g++)
        d = e.strokeThickness / 2, f = e.strokeThickness / 2 + g * h + c.ascent + _, e.align === "right" ? d += u - l[g] : e.align === "center" && (d += (u - l[g]) / 2), e.stroke && e.strokeThickness && this.drawLetterSpacing(
          o[g],
          d + e.padding,
          f + e.padding - v,
          !0
        ), e.fill && this.drawLetterSpacing(
          o[g],
          d + e.padding,
          f + e.padding - v
        );
    }
    this.updateTexture();
  }
  /**
   * Render the text with letter-spacing.
   * @param text - The text to draw
   * @param x - Horizontal position to draw the text
   * @param y - Vertical position to draw the text
   * @param isStroke - Is this drawing for the outside stroke of the
   *  text? If not, it's for the inside fill
   */
  drawLetterSpacing(t, e, r, s = !1) {
    const n = this._style.letterSpacing;
    let a = !1;
    if (De.experimentalLetterSpacingSupported && (De.experimentalLetterSpacing ? (this.context.letterSpacing = `${n}px`, this.context.textLetterSpacing = `${n}px`, a = !0) : (this.context.letterSpacing = "0px", this.context.textLetterSpacing = "0px")), n === 0 || a) {
      s ? this.context.strokeText(t, e, r) : this.context.fillText(t, e, r);
      return;
    }
    let o = e;
    const h = De.graphemeSegmenter(t);
    let l = this.context.measureText(t).width, u = 0;
    for (let c = 0; c < h.length; ++c) {
      const d = h[c];
      s ? this.context.strokeText(d, o, r) : this.context.fillText(d, o, r);
      let f = "";
      for (let p = c + 1; p < h.length; ++p)
        f += h[p];
      u = this.context.measureText(f).width, o += l - u + n, l = u;
    }
  }
  /** Updates texture size based on canvas size. */
  updateTexture() {
    const t = this.canvas;
    if (this._style.trim) {
      const a = em(t);
      a.data && (t.width = a.width, t.height = a.height, this.context.putImageData(a.data, 0, 0));
    }
    const e = this._texture, r = this._style, s = r.trim ? 0 : r.padding, n = e.baseTexture;
    e.trim.width = e._frame.width = t.width / this._resolution, e.trim.height = e._frame.height = t.height / this._resolution, e.trim.x = -s, e.trim.y = -s, e.orig.width = e._frame.width - s * 2, e.orig.height = e._frame.height - s * 2, this._onTextureUpdate(), n.setRealSize(t.width, t.height, this._resolution), e.updateUvs(), this.dirty = !1;
  }
  /**
   * Renders the object using the WebGL renderer
   * @param renderer - The renderer
   */
  _render(t) {
    this._autoResolution && this._resolution !== t.resolution && (this._resolution = t.resolution, this.dirty = !0), this.updateText(!0), super._render(t);
  }
  /** Updates the transform on all children of this container for rendering. */
  updateTransform() {
    this.updateText(!0), super.updateTransform();
  }
  getBounds(t, e) {
    return this.updateText(!0), this._textureID === -1 && (t = !1), super.getBounds(t, e);
  }
  /**
   * Gets the local bounds of the text object.
   * @param rect - The output rectangle.
   * @returns The bounds.
   */
  getLocalBounds(t) {
    return this.updateText(!0), super.getLocalBounds.call(this, t);
  }
  /** Calculates the bounds of the Text as a rectangle. The bounds calculation takes the worldTransform into account. */
  _calculateBounds() {
    this.calculateVertices(), this._bounds.addQuad(this.vertexData);
  }
  /**
   * Generates the fill style. Can automatically generate a gradient based on the fill style being an array
   * @param style - The style.
   * @param lines - The lines of text.
   * @param metrics
   * @returns The fill style
   */
  _generateFillStyle(t, e, r) {
    const s = t.fill;
    if (Array.isArray(s)) {
      if (s.length === 1)
        return s[0];
    } else
      return s;
    let n;
    const a = t.dropShadow ? t.dropShadowDistance : 0, o = t.padding || 0, h = this.canvas.width / this._resolution - a - o * 2, l = this.canvas.height / this._resolution - a - o * 2, u = s.slice(), c = t.fillGradientStops.slice();
    if (!c.length) {
      const d = u.length + 1;
      for (let f = 1; f < d; ++f)
        c.push(f / d);
    }
    if (u.unshift(s[0]), c.unshift(0), u.push(s[s.length - 1]), c.push(1), t.fillGradientType === Hs.LINEAR_VERTICAL) {
      n = this.context.createLinearGradient(h / 2, o, h / 2, l + o);
      const d = r.fontProperties.fontSize + t.strokeThickness;
      for (let f = 0; f < e.length; f++) {
        const p = r.lineHeight * (f - 1) + d, m = r.lineHeight * f;
        let y = m;
        f > 0 && p > m && (y = (m + p) / 2);
        const v = m + d, b = r.lineHeight * (f + 1);
        let _ = v;
        f + 1 < e.length && b < v && (_ = (v + b) / 2);
        const g = (_ - y) / l;
        for (let w = 0; w < u.length; w++) {
          let R = 0;
          typeof c[w] == "number" ? R = c[w] : R = w / u.length;
          let A = Math.min(1, Math.max(
            0,
            y / l + R * g
          ));
          A = Number(A.toFixed(5)), n.addColorStop(A, u[w]);
        }
      }
    } else {
      n = this.context.createLinearGradient(o, l / 2, h + o, l / 2);
      const d = u.length + 1;
      let f = 1;
      for (let p = 0; p < u.length; p++) {
        let m;
        typeof c[p] == "number" ? m = c[p] : m = f / d, n.addColorStop(m, u[p]), f++;
      }
    }
    return n;
  }
  /**
   * Destroys this text object.
   *
   * Note* Unlike a Sprite, a Text object will automatically destroy its baseTexture and texture as
   * the majority of the time the texture will not be shared with any other Sprites.
   * @param options - Options parameter. A boolean will act as if all options
   *  have been set to that value
   * @param {boolean} [options.children=false] - if set to true, all the children will have their
   *  destroy method called as well. 'options' will be passed on to those calls.
   * @param {boolean} [options.texture=true] - Should it destroy the current texture of the sprite as well
   * @param {boolean} [options.baseTexture=true] - Should it destroy the base texture of the sprite as well
   */
  destroy(t) {
    typeof t == "boolean" && (t = { children: t }), t = Object.assign({}, F_, t), super.destroy(t), this._ownCanvas && (this.canvas.height = this.canvas.width = 0), this.context = null, this.canvas = null, this._style = null;
  }
  /** The width of the Text, setting this will actually modify the scale to achieve the value set. */
  get width() {
    return this.updateText(!0), Math.abs(this.scale.x) * this._texture.orig.width;
  }
  set width(t) {
    this.updateText(!0);
    const e = Ne(this.scale.x) || 1;
    this.scale.x = e * t / this._texture.orig.width, this._width = t;
  }
  /** The height of the Text, setting this will actually modify the scale to achieve the value set. */
  get height() {
    return this.updateText(!0), Math.abs(this.scale.y) * this._texture.orig.height;
  }
  set height(t) {
    this.updateText(!0);
    const e = Ne(this.scale.y) || 1;
    this.scale.y = e * t / this._texture.orig.height, this._height = t;
  }
  /**
   * Set the style of the text.
   *
   * Set up an event listener to listen for changes on the style object and mark the text as dirty.
   *
   * If setting the `style` can also be partial {@link PIXI.ITextStyle}.
   */
  get style() {
    return this._style;
  }
  set style(t) {
    t = t || {}, t instanceof He ? this._style = t : this._style = new He(t), this.localStyleID = -1, this.dirty = !0;
  }
  /** Set the copy for the text object. To split a line you can use '\n'. */
  get text() {
    return this._text;
  }
  set text(t) {
    t = String(t ?? ""), this._text !== t && (this._text = t, this.dirty = !0);
  }
  /**
   * The resolution / device pixel ratio of the canvas.
   *
   * This is set to automatically match the renderer resolution by default, but can be overridden by setting manually.
   * @default 1
   */
  get resolution() {
    return this._resolution;
  }
  set resolution(t) {
    this._autoResolution = !1, this._resolution !== t && (this._resolution = t, this.dirty = !0);
  }
};
Vu.defaultAutoResolution = !0;
let bi = Vu;
class O_ {
  /**
   * @param maxItemsPerFrame - The maximum number of items that can be prepared each frame.
   */
  constructor(t) {
    this.maxItemsPerFrame = t, this.itemsLeft = 0;
  }
  /** Resets any counting properties to start fresh on a new frame. */
  beginFrame() {
    this.itemsLeft = this.maxItemsPerFrame;
  }
  /**
   * Checks to see if another item can be uploaded. This should only be called once per item.
   * @returns If the item is allowed to be uploaded.
   */
  allowedToUpload() {
    return this.itemsLeft-- > 0;
  }
}
function N_(i, t) {
  var r;
  let e = !1;
  if ((r = i == null ? void 0 : i._textures) != null && r.length) {
    for (let s = 0; s < i._textures.length; s++)
      if (i._textures[s] instanceof O) {
        const n = i._textures[s].baseTexture;
        t.includes(n) || (t.push(n), e = !0);
      }
  }
  return e;
}
function L_(i, t) {
  if (i.baseTexture instanceof W) {
    const e = i.baseTexture;
    return t.includes(e) || t.push(e), !0;
  }
  return !1;
}
function U_(i, t) {
  if (i._texture && i._texture instanceof O) {
    const e = i._texture.baseTexture;
    return t.includes(e) || t.push(e), !0;
  }
  return !1;
}
function k_(i, t) {
  return t instanceof bi ? (t.updateText(!0), !0) : !1;
}
function G_(i, t) {
  if (t instanceof He) {
    const e = t.toFontString();
    return De.measureFont(e), !0;
  }
  return !1;
}
function H_(i, t) {
  if (i instanceof bi) {
    t.includes(i.style) || t.push(i.style), t.includes(i) || t.push(i);
    const e = i._texture.baseTexture;
    return t.includes(e) || t.push(e), !0;
  }
  return !1;
}
function $_(i, t) {
  return i instanceof He ? (t.includes(i) || t.push(i), !0) : !1;
}
const zu = class Xu {
  /**
   * @param {PIXI.IRenderer} renderer - A reference to the current renderer
   */
  constructor(t) {
    this.limiter = new O_(Xu.uploadsPerFrame), this.renderer = t, this.uploadHookHelper = null, this.queue = [], this.addHooks = [], this.uploadHooks = [], this.completes = [], this.ticking = !1, this.delayedTick = () => {
      this.queue && this.prepareItems();
    }, this.registerFindHook(H_), this.registerFindHook($_), this.registerFindHook(N_), this.registerFindHook(L_), this.registerFindHook(U_), this.registerUploadHook(k_), this.registerUploadHook(G_);
  }
  /**
   * Upload all the textures and graphics to the GPU.
   * @method PIXI.BasePrepare#upload
   * @param {PIXI.DisplayObject|PIXI.Container|PIXI.BaseTexture|PIXI.Texture|PIXI.Graphics|PIXI.Text} [item] -
   *        Container or display object to search for items to upload or the items to upload themselves,
   *        or optionally ommitted, if items have been added using {@link PIXI.BasePrepare#add `prepare.add`}.
   */
  upload(t) {
    return new Promise((e) => {
      t && this.add(t), this.queue.length ? (this.completes.push(e), this.ticking || (this.ticking = !0, ot.system.addOnce(this.tick, this, Ge.UTILITY))) : e();
    });
  }
  /**
   * Handle tick update
   * @private
   */
  tick() {
    setTimeout(this.delayedTick, 0);
  }
  /**
   * Actually prepare items. This is handled outside of the tick because it will take a while
   * and we do NOT want to block the current animation frame from rendering.
   * @private
   */
  prepareItems() {
    for (this.limiter.beginFrame(); this.queue.length && this.limiter.allowedToUpload(); ) {
      const t = this.queue[0];
      let e = !1;
      if (t && !t._destroyed) {
        for (let r = 0, s = this.uploadHooks.length; r < s; r++)
          if (this.uploadHooks[r](this.uploadHookHelper, t)) {
            this.queue.shift(), e = !0;
            break;
          }
      }
      e || this.queue.shift();
    }
    if (this.queue.length)
      ot.system.addOnce(this.tick, this, Ge.UTILITY);
    else {
      this.ticking = !1;
      const t = this.completes.slice(0);
      this.completes.length = 0;
      for (let e = 0, r = t.length; e < r; e++)
        t[e]();
    }
  }
  /**
   * Adds hooks for finding items.
   * @param {Function} addHook - Function call that takes two parameters: `item:*, queue:Array`
   *          function must return `true` if it was able to add item to the queue.
   * @returns Instance of plugin for chaining.
   */
  registerFindHook(t) {
    return t && this.addHooks.push(t), this;
  }
  /**
   * Adds hooks for uploading items.
   * @param {Function} uploadHook - Function call that takes two parameters: `prepare:CanvasPrepare, item:*` and
   *          function must return `true` if it was able to handle upload of item.
   * @returns Instance of plugin for chaining.
   */
  registerUploadHook(t) {
    return t && this.uploadHooks.push(t), this;
  }
  /**
   * Manually add an item to the uploading queue.
   * @param {PIXI.DisplayObject|PIXI.Container|PIXI.BaseTexture|PIXI.Texture|PIXI.Graphics|PIXI.Text|*} item - Object to
   *        add to the queue
   * @returns Instance of plugin for chaining.
   */
  add(t) {
    for (let e = 0, r = this.addHooks.length; e < r && !this.addHooks[e](t, this.queue); e++)
      ;
    if (t instanceof Ft)
      for (let e = t.children.length - 1; e >= 0; e--)
        this.add(t.children[e]);
    return this;
  }
  /** Destroys the plugin, don't use after this. */
  destroy() {
    this.ticking && ot.system.remove(this.tick, this), this.ticking = !1, this.addHooks = null, this.uploadHooks = null, this.renderer = null, this.completes = null, this.queue = null, this.limiter = null, this.uploadHookHelper = null;
  }
};
zu.uploadsPerFrame = 4;
let Sa = zu;
Object.defineProperties(L, {
  /**
   * Default number of uploads per frame using prepare plugin.
   * @static
   * @memberof PIXI.settings
   * @name UPLOADS_PER_FRAME
   * @deprecated since 7.1.0
   * @see PIXI.BasePrepare.uploadsPerFrame
   * @type {number}
   */
  UPLOADS_PER_FRAME: {
    get() {
      return Sa.uploadsPerFrame;
    },
    set(i) {
      Y("7.1.0", "settings.UPLOADS_PER_FRAME is deprecated, use prepare.BasePrepare.uploadsPerFrame"), Sa.uploadsPerFrame = i;
    }
  }
});
function Wu(i, t) {
  return t instanceof W ? (t._glTextures[i.CONTEXT_UID] || i.texture.bind(t), !0) : !1;
}
function V_(i, t) {
  if (!(t instanceof Qa))
    return !1;
  const { geometry: e } = t;
  t.finishPoly(), e.updateBatches();
  const { batches: r } = e;
  for (let s = 0; s < r.length; s++) {
    const { texture: n } = r[s].style;
    n && Wu(i, n.baseTexture);
  }
  return e.batchable || i.geometry.bind(e, t._resolveDirectShader(i)), !0;
}
function z_(i, t) {
  return i instanceof Qa ? (t.push(i), !0) : !1;
}
class ju extends Sa {
  /**
   * @param {PIXI.Renderer} renderer - A reference to the current renderer
   */
  constructor(t) {
    super(t), this.uploadHookHelper = this.renderer, this.registerFindHook(z_), this.registerUploadHook(Wu), this.registerUploadHook(V_);
  }
}
ju.extension = {
  name: "prepare",
  type: F.RendererSystem
};
k.add(ju);
class Cs extends de {
  /**
   * @param textures - An array of {@link PIXI.Texture} or frame
   *  objects that make up the animation.
   * @param {boolean} [autoUpdate=true] - Whether to use Ticker.shared to auto update animation time.
   */
  constructor(t, e = !0) {
    super(t[0] instanceof O ? t[0] : t[0].texture), this._textures = null, this._durations = null, this._autoUpdate = e, this._isConnectedToTicker = !1, this.animationSpeed = 1, this.loop = !0, this.updateAnchor = !1, this.onComplete = null, this.onFrameChange = null, this.onLoop = null, this._currentTime = 0, this._playing = !1, this._previousFrame = null, this.textures = t;
  }
  /** Stops the AnimatedSprite. */
  stop() {
    this._playing && (this._playing = !1, this._autoUpdate && this._isConnectedToTicker && (ot.shared.remove(this.update, this), this._isConnectedToTicker = !1));
  }
  /** Plays the AnimatedSprite. */
  play() {
    this._playing || (this._playing = !0, this._autoUpdate && !this._isConnectedToTicker && (ot.shared.add(this.update, this, Ge.HIGH), this._isConnectedToTicker = !0));
  }
  /**
   * Stops the AnimatedSprite and goes to a specific frame.
   * @param frameNumber - Frame index to stop at.
   */
  gotoAndStop(t) {
    this.stop(), this.currentFrame = t;
  }
  /**
   * Goes to a specific frame and begins playing the AnimatedSprite.
   * @param frameNumber - Frame index to start at.
   */
  gotoAndPlay(t) {
    this.currentFrame = t, this.play();
  }
  /**
   * Updates the object transform for rendering.
   * @param deltaTime - Time since last tick.
   */
  update(t) {
    if (!this._playing)
      return;
    const e = this.animationSpeed * t, r = this.currentFrame;
    if (this._durations !== null) {
      let s = this._currentTime % 1 * this._durations[this.currentFrame];
      for (s += e / 60 * 1e3; s < 0; )
        this._currentTime--, s += this._durations[this.currentFrame];
      const n = Math.sign(this.animationSpeed * t);
      for (this._currentTime = Math.floor(this._currentTime); s >= this._durations[this.currentFrame]; )
        s -= this._durations[this.currentFrame] * n, this._currentTime += n;
      this._currentTime += s / this._durations[this.currentFrame];
    } else
      this._currentTime += e;
    this._currentTime < 0 && !this.loop ? (this.gotoAndStop(0), this.onComplete && this.onComplete()) : this._currentTime >= this._textures.length && !this.loop ? (this.gotoAndStop(this._textures.length - 1), this.onComplete && this.onComplete()) : r !== this.currentFrame && (this.loop && this.onLoop && (this.animationSpeed > 0 && this.currentFrame < r || this.animationSpeed < 0 && this.currentFrame > r) && this.onLoop(), this.updateTexture());
  }
  /** Updates the displayed texture to match the current frame index. */
  updateTexture() {
    const t = this.currentFrame;
    this._previousFrame !== t && (this._previousFrame = t, this._texture = this._textures[t], this._textureID = -1, this._textureTrimmedID = -1, this._cachedTint = 16777215, this.uvs = this._texture._uvs.uvsFloat32, this.updateAnchor && this._anchor.copyFrom(this._texture.defaultAnchor), this.onFrameChange && this.onFrameChange(this.currentFrame));
  }
  /**
   * Stops the AnimatedSprite and destroys it.
   * @param {object|boolean} [options] - Options parameter. A boolean will act as if all options
   *  have been set to that value.
   * @param {boolean} [options.children=false] - If set to true, all the children will have their destroy
   *      method called as well. 'options' will be passed on to those calls.
   * @param {boolean} [options.texture=false] - Should it destroy the current texture of the sprite as well.
   * @param {boolean} [options.baseTexture=false] - Should it destroy the base texture of the sprite as well.
   */
  destroy(t) {
    this.stop(), super.destroy(t), this.onComplete = null, this.onFrameChange = null, this.onLoop = null;
  }
  /**
   * A short hand way of creating an AnimatedSprite from an array of frame ids.
   * @param frames - The array of frames ids the AnimatedSprite will use as its texture frames.
   * @returns - The new animated sprite with the specified frames.
   */
  static fromFrames(t) {
    const e = [];
    for (let r = 0; r < t.length; ++r)
      e.push(O.from(t[r]));
    return new Cs(e);
  }
  /**
   * A short hand way of creating an AnimatedSprite from an array of image ids.
   * @param images - The array of image urls the AnimatedSprite will use as its texture frames.
   * @returns The new animate sprite with the specified images as frames.
   */
  static fromImages(t) {
    const e = [];
    for (let r = 0; r < t.length; ++r)
      e.push(O.from(t[r]));
    return new Cs(e);
  }
  /**
   * The total number of frames in the AnimatedSprite. This is the same as number of textures
   * assigned to the AnimatedSprite.
   * @readonly
   * @default 0
   */
  get totalFrames() {
    return this._textures.length;
  }
  /** The array of textures used for this AnimatedSprite. */
  get textures() {
    return this._textures;
  }
  set textures(t) {
    if (t[0] instanceof O)
      this._textures = t, this._durations = null;
    else {
      this._textures = [], this._durations = [];
      for (let e = 0; e < t.length; e++)
        this._textures.push(t[e].texture), this._durations.push(t[e].time);
    }
    this._previousFrame = null, this.gotoAndStop(0), this.updateTexture();
  }
  /** The AnimatedSprite's current frame index. */
  get currentFrame() {
    let t = Math.floor(this._currentTime) % this._textures.length;
    return t < 0 && (t += this._textures.length), t;
  }
  set currentFrame(t) {
    if (t < 0 || t > this.totalFrames - 1)
      throw new Error(`[AnimatedSprite]: Invalid frame index value ${t}, expected to be between 0 and totalFrames ${this.totalFrames}.`);
    const e = this.currentFrame;
    this._currentTime = t, e !== this.currentFrame && this.updateTexture();
  }
  /**
   * Indicates if the AnimatedSprite is currently playing.
   * @readonly
   */
  get playing() {
    return this._playing;
  }
  /** Whether to use Ticker.shared to auto update animation time. */
  get autoUpdate() {
    return this._autoUpdate;
  }
  set autoUpdate(t) {
    t !== this._autoUpdate && (this._autoUpdate = t, !this._autoUpdate && this._isConnectedToTicker ? (ot.shared.remove(this.update, this), this._isConnectedToTicker = !1) : this._autoUpdate && !this._isConnectedToTicker && this._playing && (ot.shared.add(this.update, this), this._isConnectedToTicker = !0));
  }
}
const Zr = new K();
class Ja extends de {
  /**
   * Note: The wrap mode of the texture is forced to REPEAT on render if the size of the texture
   * is a power of two, the texture's wrap mode is CLAMP, and the texture hasn't been bound yet.
   * @param texture - The texture of the tiling sprite.
   * @param width - The width of the tiling sprite.
   * @param height - The height of the tiling sprite.
   */
  constructor(t, e = 100, r = 100) {
    super(t), this.tileTransform = new Ns(), this._width = e, this._height = r, this.uvMatrix = this.texture.uvMatrix || new Wa(t), this.pluginName = "tilingSprite", this.uvRespectAnchor = !1;
  }
  /**
   * Changes frame clamping in corresponding textureTransform, shortcut
   * Change to -0.5 to add a pixel to the edge, recommended for transparent trimmed textures in atlas
   * @default 0.5
   * @member {number}
   */
  get clampMargin() {
    return this.uvMatrix.clampMargin;
  }
  set clampMargin(t) {
    this.uvMatrix.clampMargin = t, this.uvMatrix.update(!0);
  }
  /** The scaling of the image that is being tiled. */
  get tileScale() {
    return this.tileTransform.scale;
  }
  set tileScale(t) {
    this.tileTransform.scale.copyFrom(t);
  }
  /** The offset of the image that is being tiled. */
  get tilePosition() {
    return this.tileTransform.position;
  }
  set tilePosition(t) {
    this.tileTransform.position.copyFrom(t);
  }
  /**
   * @protected
   */
  _onTextureUpdate() {
    this.uvMatrix && (this.uvMatrix.texture = this._texture), this._cachedTint = 16777215;
  }
  /**
   * Renders the object using the WebGL renderer
   * @param renderer - The renderer
   */
  _render(t) {
    const e = this._texture;
    !e || !e.valid || (this.tileTransform.updateLocalTransform(), this.uvMatrix.update(), t.batch.setObjectRenderer(t.plugins[this.pluginName]), t.plugins[this.pluginName].render(this));
  }
  /** Updates the bounds of the tiling sprite. */
  _calculateBounds() {
    const t = this._width * -this._anchor._x, e = this._height * -this._anchor._y, r = this._width * (1 - this._anchor._x), s = this._height * (1 - this._anchor._y);
    this._bounds.addFrame(this.transform, t, e, r, s);
  }
  /**
   * Gets the local bounds of the sprite object.
   * @param rect - Optional output rectangle.
   * @returns The bounds.
   */
  getLocalBounds(t) {
    return this.children.length === 0 ? (this._bounds.minX = this._width * -this._anchor._x, this._bounds.minY = this._height * -this._anchor._y, this._bounds.maxX = this._width * (1 - this._anchor._x), this._bounds.maxY = this._height * (1 - this._anchor._y), t || (this._localBoundsRect || (this._localBoundsRect = new j()), t = this._localBoundsRect), this._bounds.getRectangle(t)) : super.getLocalBounds.call(this, t);
  }
  /**
   * Checks if a point is inside this tiling sprite.
   * @param point - The point to check.
   * @returns Whether or not the sprite contains the point.
   */
  containsPoint(t) {
    this.worldTransform.applyInverse(t, Zr);
    const e = this._width, r = this._height, s = -e * this.anchor._x;
    if (Zr.x >= s && Zr.x < s + e) {
      const n = -r * this.anchor._y;
      if (Zr.y >= n && Zr.y < n + r)
        return !0;
    }
    return !1;
  }
  /**
   * Destroys this sprite and optionally its texture and children
   * @param {object|boolean} [options] - Options parameter. A boolean will act as if all options
   *  have been set to that value
   * @param {boolean} [options.children=false] - if set to true, all the children will have their destroy
   *      method called as well. 'options' will be passed on to those calls.
   * @param {boolean} [options.texture=false] - Should it destroy the current texture of the sprite as well
   * @param {boolean} [options.baseTexture=false] - Should it destroy the base texture of the sprite as well
   */
  destroy(t) {
    super.destroy(t), this.tileTransform = null, this.uvMatrix = null;
  }
  /**
   * Helper function that creates a new tiling sprite based on the source you provide.
   * The source can be - frame id, image url, video url, canvas element, video element, base texture
   * @static
   * @param {string|PIXI.Texture|HTMLCanvasElement|HTMLVideoElement} source - Source to create texture from
   * @param {object} options - See {@link PIXI.BaseTexture}'s constructor for options.
   * @param {number} options.width - required width of the tiling sprite
   * @param {number} options.height - required height of the tiling sprite
   * @returns {PIXI.TilingSprite} The newly created texture
   */
  static from(t, e) {
    const r = t instanceof O ? t : O.from(t, e);
    return new Ja(
      r,
      e.width,
      e.height
    );
  }
  /** The width of the sprite, setting this will actually modify the scale to achieve the value set. */
  get width() {
    return this._width;
  }
  set width(t) {
    this._width = t;
  }
  /** The height of the TilingSprite, setting this will actually modify the scale to achieve the value set. */
  get height() {
    return this._height;
  }
  set height(t) {
    this._height = t;
  }
}
var X_ = `#version 300 es
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

in vec2 vTextureCoord;

out vec4 fragmentColor;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    vec4 texSample = texture(uSampler, coord, unclamped == coord ? 0.0f : -32.0f);// lod-bias very negative to force lod 0

    fragmentColor = texSample * uColor;
}
`, W_ = `#version 300 es
#define SHADER_NAME Tiling-Sprite-300

precision lowp float;

in vec2 aVertexPosition;
in vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

out vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`, j_ = `#version 100
#ifdef GL_EXT_shader_texture_lod
    #extension GL_EXT_shader_texture_lod : enable
#endif
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    #ifdef GL_EXT_shader_texture_lod
        vec4 texSample = unclamped == coord
            ? texture2D(uSampler, coord) 
            : texture2DLodEXT(uSampler, coord, 0);
    #else
        vec4 texSample = texture2D(uSampler, coord);
    #endif

    gl_FragColor = texSample * uColor;
}
`, Gh = `#version 100
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`, Y_ = `#version 100
#define SHADER_NAME Tiling-Sprite-Simple-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;

void main(void)
{
    vec4 texSample = texture2D(uSampler, vTextureCoord);
    gl_FragColor = texSample * uColor;
}
`;
const ji = new rt();
class Yu extends Ls {
  /**
   * constructor for renderer
   * @param {PIXI.Renderer} renderer - The renderer this tiling awesomeness works for.
   */
  constructor(t) {
    super(t), t.runners.contextChange.add(this), this.quad = new jl(), this.state = ce.for2d();
  }
  /** Creates shaders when context is initialized. */
  contextChange() {
    const t = this.renderer, e = { globals: t.globalUniforms };
    this.simpleShader = le.from(Gh, Y_, e), this.shader = t.context.webGLVersion > 1 ? le.from(W_, X_, e) : le.from(Gh, j_, e);
  }
  /**
   * @param {PIXI.TilingSprite} ts - tilingSprite to be rendered
   */
  render(t) {
    const e = this.renderer, r = this.quad;
    let s = r.vertices;
    s[0] = s[6] = t._width * -t.anchor.x, s[1] = s[3] = t._height * -t.anchor.y, s[2] = s[4] = t._width * (1 - t.anchor.x), s[5] = s[7] = t._height * (1 - t.anchor.y);
    const n = t.uvRespectAnchor ? t.anchor.x : 0, a = t.uvRespectAnchor ? t.anchor.y : 0;
    s = r.uvs, s[0] = s[6] = -n, s[1] = s[3] = -a, s[2] = s[4] = 1 - n, s[5] = s[7] = 1 - a, r.invalidate();
    const o = t._texture, h = o.baseTexture, l = h.alphaMode > 0, u = t.tileTransform.localTransform, c = t.uvMatrix;
    let d = h.isPowerOfTwo && o.frame.width === h.width && o.frame.height === h.height;
    d && (h._glTextures[e.CONTEXT_UID] ? d = h.wrapMode !== Ee.CLAMP : h.wrapMode === Ee.CLAMP && (h.wrapMode = Ee.REPEAT));
    const f = d ? this.simpleShader : this.shader, p = o.width, m = o.height, y = t._width, v = t._height;
    ji.set(
      u.a * p / y,
      u.b * p / v,
      u.c * m / y,
      u.d * m / v,
      u.tx / y,
      u.ty / v
    ), ji.invert(), d ? ji.prepend(c.mapCoord) : (f.uniforms.uMapCoord = c.mapCoord.toArray(!0), f.uniforms.uClampFrame = c.uClampFrame, f.uniforms.uClampOffset = c.uClampOffset), f.uniforms.uTransform = ji.toArray(!0), f.uniforms.uColor = tt.shared.setValue(t.tint).premultiply(t.worldAlpha, l).toArray(f.uniforms.uColor), f.uniforms.translationMatrix = t.transform.worldTransform.toArray(!0), f.uniforms.uSampler = o, e.shader.bind(f), e.geometry.bind(r), this.state.blendMode = Fl(t.blendMode, l), e.state.set(this.state), e.geometry.draw(this.renderer.gl.TRIANGLES, 6, 0);
  }
}
Yu.extension = {
  name: "tilingSprite",
  type: F.RendererPlugin
};
k.add(Yu);
const qu = class si {
  /** @ignore */
  constructor(t, e, r) {
    this.linkedSheets = [], (t instanceof W || t instanceof O) && (t = { texture: t, data: e, resolutionFilename: r });
    const { texture: s, data: n, resolutionFilename: a = null, cachePrefix: o = "" } = t;
    this.cachePrefix = o, this._texture = s instanceof O ? s : null, this.baseTexture = s instanceof W ? s : this._texture.baseTexture, this.textures = {}, this.animations = {}, this.data = n;
    const h = this.baseTexture.resource;
    this.resolution = this._updateResolution(a || (h ? h.url : null)), this._frames = this.data.frames, this._frameKeys = Object.keys(this._frames), this._batchIndex = 0, this._callback = null;
  }
  /**
   * Generate the resolution from the filename or fallback
   * to the meta.scale field of the JSON data.
   * @param resolutionFilename - The filename to use for resolving
   *        the default resolution.
   * @returns Resolution to use for spritesheet.
   */
  _updateResolution(t = null) {
    const { scale: e } = this.data.meta;
    let r = Ae(t, null);
    return r === null && (r = typeof e == "number" ? e : parseFloat(e ?? "1")), r !== 1 && this.baseTexture.setResolution(r), r;
  }
  /**
   * Parser spritesheet from loaded data. This is done asynchronously
   * to prevent creating too many Texture within a single process.
   * @method PIXI.Spritesheet#parse
   */
  parse() {
    return new Promise((t) => {
      this._callback = t, this._batchIndex = 0, this._frameKeys.length <= si.BATCH_SIZE ? (this._processFrames(0), this._processAnimations(), this._parseComplete()) : this._nextBatch();
    });
  }
  /**
   * Process a batch of frames
   * @param initialFrameIndex - The index of frame to start.
   */
  _processFrames(t) {
    let e = t;
    const r = si.BATCH_SIZE;
    for (; e - t < r && e < this._frameKeys.length; ) {
      const s = this._frameKeys[e], n = this._frames[s], a = n.frame;
      if (a) {
        let o = null, h = null;
        const l = n.trimmed !== !1 && n.sourceSize ? n.sourceSize : n.frame, u = new j(
          0,
          0,
          Math.floor(l.w) / this.resolution,
          Math.floor(l.h) / this.resolution
        );
        n.rotated ? o = new j(
          Math.floor(a.x) / this.resolution,
          Math.floor(a.y) / this.resolution,
          Math.floor(a.h) / this.resolution,
          Math.floor(a.w) / this.resolution
        ) : o = new j(
          Math.floor(a.x) / this.resolution,
          Math.floor(a.y) / this.resolution,
          Math.floor(a.w) / this.resolution,
          Math.floor(a.h) / this.resolution
        ), n.trimmed !== !1 && n.spriteSourceSize && (h = new j(
          Math.floor(n.spriteSourceSize.x) / this.resolution,
          Math.floor(n.spriteSourceSize.y) / this.resolution,
          Math.floor(a.w) / this.resolution,
          Math.floor(a.h) / this.resolution
        )), this.textures[s] = new O(
          this.baseTexture,
          o,
          u,
          h,
          n.rotated ? 2 : 0,
          n.anchor,
          n.borders
        ), O.addToCache(this.textures[s], this.cachePrefix + s.toString());
      }
      e++;
    }
  }
  /** Parse animations config. */
  _processAnimations() {
    const t = this.data.animations || {};
    for (const e in t) {
      this.animations[e] = [];
      for (let r = 0; r < t[e].length; r++) {
        const s = t[e][r];
        this.animations[e].push(this.textures[s]);
      }
    }
  }
  /** The parse has completed. */
  _parseComplete() {
    const t = this._callback;
    this._callback = null, this._batchIndex = 0, t.call(this, this.textures);
  }
  /** Begin the next batch of textures. */
  _nextBatch() {
    this._processFrames(this._batchIndex * si.BATCH_SIZE), this._batchIndex++, setTimeout(() => {
      this._batchIndex * si.BATCH_SIZE < this._frameKeys.length ? this._nextBatch() : (this._processAnimations(), this._parseComplete());
    }, 0);
  }
  /**
   * Destroy Spritesheet and don't use after this.
   * @param {boolean} [destroyBase=false] - Whether to destroy the base texture as well
   */
  destroy(t = !1) {
    var e;
    for (const r in this.textures)
      this.textures[r].destroy();
    this._frames = null, this._frameKeys = null, this.data = null, this.textures = null, t && ((e = this._texture) == null || e.destroy(), this.baseTexture.destroy()), this._texture = null, this.baseTexture = null, this.linkedSheets = [];
  }
};
qu.BATCH_SIZE = 1e3;
let Hh = qu;
const q_ = ["jpg", "png", "jpeg", "avif", "webp"];
function Ku(i, t, e) {
  const r = {};
  if (i.forEach((s) => {
    r[s] = t;
  }), Object.keys(t.textures).forEach((s) => {
    r[`${t.cachePrefix}${s}`] = t.textures[s];
  }), !e) {
    const s = gt.dirname(i[0]);
    t.linkedSheets.forEach((n, a) => {
      Object.assign(r, Ku(
        [`${s}/${t.data.meta.related_multi_packs[a]}`],
        n,
        !0
      ));
    });
  }
  return r;
}
const K_ = {
  extension: F.Asset,
  /** Handle the caching of the related Spritesheet Textures */
  cache: {
    test: (i) => i instanceof Hh,
    getCacheableAssets: (i, t) => Ku(i, t, !1)
  },
  /** Resolve the the resolution of the asset. */
  resolver: {
    test: (i) => {
      const t = i.split("?")[0].split("."), e = t.pop(), r = t.pop();
      return e === "json" && q_.includes(r);
    },
    parse: (i) => {
      var e;
      const t = i.split(".");
      return {
        resolution: parseFloat(((e = L.RETINA_PREFIX.exec(i)) == null ? void 0 : e[1]) ?? "1"),
        format: t[t.length - 2],
        src: i
      };
    }
  },
  /**
   * Loader plugin that parses sprite sheets!
   * once the JSON has been loaded this checks to see if the JSON is spritesheet data.
   * If it is, we load the spritesheets image and parse the data into PIXI.Spritesheet
   * All textures in the sprite sheet are then added to the cache
   * @ignore
   */
  loader: {
    name: "spritesheetLoader",
    extension: {
      type: F.LoadParser,
      priority: qt.Normal
    },
    async testParse(i, t) {
      return gt.extname(t.src).toLowerCase() === ".json" && !!i.frames;
    },
    async parse(i, t, e) {
      var u, c;
      const {
        texture: r,
        // if user need to use preloaded texture
        imageFilename: s,
        // if user need to use custom filename (not from jsonFile.meta.image)
        cachePrefix: n
        // if user need to use custom cache prefix
      } = (t == null ? void 0 : t.data) ?? {};
      let a = gt.dirname(t.src);
      a && a.lastIndexOf("/") !== a.length - 1 && (a += "/");
      let o;
      if (r && r.baseTexture)
        o = r;
      else {
        const d = ba(a + (s ?? i.meta.image), t.src);
        o = (await e.load([d]))[d];
      }
      const h = new Hh({
        texture: o.baseTexture,
        data: i,
        resolutionFilename: t.src,
        cachePrefix: n
      });
      await h.parse();
      const l = (u = i == null ? void 0 : i.meta) == null ? void 0 : u.related_multi_packs;
      if (Array.isArray(l)) {
        const d = [];
        for (const p of l) {
          if (typeof p != "string")
            continue;
          let m = a + p;
          (c = t.data) != null && c.ignoreMultiPack || (m = ba(m, t.src), d.push(e.load({
            src: m,
            data: {
              ignoreMultiPack: !0
            }
          })));
        }
        const f = await Promise.all(d);
        h.linkedSheets = f, f.forEach((p) => {
          p.linkedSheets = [h].concat(h.linkedSheets.filter((m) => m !== p));
        });
      }
      return h;
    },
    unload(i) {
      i.destroy(!0);
    }
  }
};
k.add(K_);
class Is {
  constructor() {
    this.info = [], this.common = [], this.page = [], this.char = [], this.kerning = [], this.distanceField = [];
  }
}
class ss {
  /**
   * Check if resource refers to txt font data.
   * @param data
   * @returns - True if resource could be treated as font data, false otherwise.
   */
  static test(t) {
    return typeof t == "string" && t.startsWith("info face=");
  }
  /**
   * Convert text font data to a javascript object.
   * @param txt - Raw string data to be converted
   * @returns - Parsed font data
   */
  static parse(t) {
    const e = t.match(/^[a-z]+\s+.+$/gm), r = {
      info: [],
      common: [],
      page: [],
      char: [],
      chars: [],
      kerning: [],
      kernings: [],
      distanceField: []
    };
    for (const n in e) {
      const a = e[n].match(/^[a-z]+/gm)[0], o = e[n].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm), h = {};
      for (const l in o) {
        const u = o[l].split("="), c = u[0], d = u[1].replace(/"/gm, ""), f = parseFloat(d), p = isNaN(f) ? d : f;
        h[c] = p;
      }
      r[a].push(h);
    }
    const s = new Is();
    return r.info.forEach((n) => s.info.push({
      face: n.face,
      size: parseInt(n.size, 10)
    })), r.common.forEach((n) => s.common.push({
      lineHeight: parseInt(n.lineHeight, 10)
    })), r.page.forEach((n) => s.page.push({
      id: parseInt(n.id, 10),
      file: n.file
    })), r.char.forEach((n) => s.char.push({
      id: parseInt(n.id, 10),
      page: parseInt(n.page, 10),
      x: parseInt(n.x, 10),
      y: parseInt(n.y, 10),
      width: parseInt(n.width, 10),
      height: parseInt(n.height, 10),
      xoffset: parseInt(n.xoffset, 10),
      yoffset: parseInt(n.yoffset, 10),
      xadvance: parseInt(n.xadvance, 10)
    })), r.kerning.forEach((n) => s.kerning.push({
      first: parseInt(n.first, 10),
      second: parseInt(n.second, 10),
      amount: parseInt(n.amount, 10)
    })), r.distanceField.forEach((n) => s.distanceField.push({
      distanceRange: parseInt(n.distanceRange, 10),
      fieldType: n.fieldType
    })), s;
  }
}
class Ca {
  /**
   * Check if resource refers to xml font data.
   * @param data
   * @returns - True if resource could be treated as font data, false otherwise.
   */
  static test(t) {
    const e = t;
    return typeof t != "string" && "getElementsByTagName" in t && e.getElementsByTagName("page").length && e.getElementsByTagName("info")[0].getAttribute("face") !== null;
  }
  /**
   * Convert the XML into BitmapFontData that we can use.
   * @param xml
   * @returns - Data to use for BitmapFont
   */
  static parse(t) {
    const e = new Is(), r = t.getElementsByTagName("info"), s = t.getElementsByTagName("common"), n = t.getElementsByTagName("page"), a = t.getElementsByTagName("char"), o = t.getElementsByTagName("kerning"), h = t.getElementsByTagName("distanceField");
    for (let l = 0; l < r.length; l++)
      e.info.push({
        face: r[l].getAttribute("face"),
        size: parseInt(r[l].getAttribute("size"), 10)
      });
    for (let l = 0; l < s.length; l++)
      e.common.push({
        lineHeight: parseInt(s[l].getAttribute("lineHeight"), 10)
      });
    for (let l = 0; l < n.length; l++)
      e.page.push({
        id: parseInt(n[l].getAttribute("id"), 10) || 0,
        file: n[l].getAttribute("file")
      });
    for (let l = 0; l < a.length; l++) {
      const u = a[l];
      e.char.push({
        id: parseInt(u.getAttribute("id"), 10),
        page: parseInt(u.getAttribute("page"), 10) || 0,
        x: parseInt(u.getAttribute("x"), 10),
        y: parseInt(u.getAttribute("y"), 10),
        width: parseInt(u.getAttribute("width"), 10),
        height: parseInt(u.getAttribute("height"), 10),
        xoffset: parseInt(u.getAttribute("xoffset"), 10),
        yoffset: parseInt(u.getAttribute("yoffset"), 10),
        xadvance: parseInt(u.getAttribute("xadvance"), 10)
      });
    }
    for (let l = 0; l < o.length; l++)
      e.kerning.push({
        first: parseInt(o[l].getAttribute("first"), 10),
        second: parseInt(o[l].getAttribute("second"), 10),
        amount: parseInt(o[l].getAttribute("amount"), 10)
      });
    for (let l = 0; l < h.length; l++)
      e.distanceField.push({
        fieldType: h[l].getAttribute("fieldType"),
        distanceRange: parseInt(h[l].getAttribute("distanceRange"), 10)
      });
    return e;
  }
}
class Ia {
  /**
   * Check if resource refers to text xml font data.
   * @param data
   * @returns - True if resource could be treated as font data, false otherwise.
   */
  static test(t) {
    return typeof t == "string" && t.includes("<font>") ? Ca.test(L.ADAPTER.parseXML(t)) : !1;
  }
  /**
   * Convert the text XML into BitmapFontData that we can use.
   * @param xmlTxt
   * @returns - Data to use for BitmapFont
   */
  static parse(t) {
    return Ca.parse(L.ADAPTER.parseXML(t));
  }
}
const Rn = [
  ss,
  Ca,
  Ia
];
function Z_(i) {
  for (let t = 0; t < Rn.length; t++)
    if (Rn[t].test(i))
      return Rn[t];
  return null;
}
function Q_(i, t, e, r, s, n) {
  const a = e.fill;
  if (Array.isArray(a)) {
    if (a.length === 1)
      return a[0];
  } else
    return a;
  let o;
  const h = e.dropShadow ? e.dropShadowDistance : 0, l = e.padding || 0, u = i.width / r - h - l * 2, c = i.height / r - h - l * 2, d = a.slice(), f = e.fillGradientStops.slice();
  if (!f.length) {
    const p = d.length + 1;
    for (let m = 1; m < p; ++m)
      f.push(m / p);
  }
  if (d.unshift(a[0]), f.unshift(0), d.push(a[a.length - 1]), f.push(1), e.fillGradientType === Hs.LINEAR_VERTICAL) {
    o = t.createLinearGradient(u / 2, l, u / 2, c + l);
    let p = 0;
    const m = (n.fontProperties.fontSize + e.strokeThickness) / c;
    for (let y = 0; y < s.length; y++) {
      const v = n.lineHeight * y;
      for (let b = 0; b < d.length; b++) {
        let _ = 0;
        typeof f[b] == "number" ? _ = f[b] : _ = b / d.length;
        const g = v / c + _ * m;
        let w = Math.max(p, g);
        w = Math.min(w, 1), o.addColorStop(w, d[b]), p = w;
      }
    }
  } else {
    o = t.createLinearGradient(l, c / 2, u + l, c / 2);
    const p = d.length + 1;
    let m = 1;
    for (let y = 0; y < d.length; y++) {
      let v;
      typeof f[y] == "number" ? v = f[y] : v = m / p, o.addColorStop(v, d[y]), m++;
    }
  }
  return o;
}
function J_(i, t, e, r, s, n, a) {
  const o = e.text, h = e.fontProperties;
  t.translate(r, s), t.scale(n, n);
  const l = a.strokeThickness / 2, u = -(a.strokeThickness / 2);
  if (t.font = a.toFontString(), t.lineWidth = a.strokeThickness, t.textBaseline = a.textBaseline, t.lineJoin = a.lineJoin, t.miterLimit = a.miterLimit, t.fillStyle = Q_(i, t, a, n, [o], e), t.strokeStyle = a.stroke, a.dropShadow) {
    const c = a.dropShadowColor, d = a.dropShadowBlur * n, f = a.dropShadowDistance * n;
    t.shadowColor = tt.shared.setValue(c).setAlpha(a.dropShadowAlpha).toRgbaString(), t.shadowBlur = d, t.shadowOffsetX = Math.cos(a.dropShadowAngle) * f, t.shadowOffsetY = Math.sin(a.dropShadowAngle) * f;
  } else
    t.shadowColor = "black", t.shadowBlur = 0, t.shadowOffsetX = 0, t.shadowOffsetY = 0;
  a.stroke && a.strokeThickness && t.strokeText(o, l, u + e.lineHeight - h.descent), a.fill && t.fillText(o, l, u + e.lineHeight - h.descent), t.setTransform(1, 0, 0, 1, 0, 0), t.fillStyle = "rgba(0, 0, 0, 0)";
}
function ns(i) {
  return i.codePointAt ? i.codePointAt(0) : i.charCodeAt(0);
}
function Zu(i) {
  return Array.from ? Array.from(i) : i.split("");
}
function t0(i) {
  typeof i == "string" && (i = [i]);
  const t = [];
  for (let e = 0, r = i.length; e < r; e++) {
    const s = i[e];
    if (Array.isArray(s)) {
      if (s.length !== 2)
        throw new Error(`[BitmapFont]: Invalid character range length, expecting 2 got ${s.length}.`);
      const n = s[0].charCodeAt(0), a = s[1].charCodeAt(0);
      if (a < n)
        throw new Error("[BitmapFont]: Invalid character range.");
      for (let o = n, h = a; o <= h; o++)
        t.push(String.fromCharCode(o));
    } else
      t.push(...Zu(s));
  }
  if (t.length === 0)
    throw new Error("[BitmapFont]: Empty set when resolving characters.");
  return t;
}
const Re = class se {
  /**
   * @param data
   * @param textures
   * @param ownsTextures - Setting to `true` will destroy page textures
   *        when the font is uninstalled.
   */
  constructor(t, e, r) {
    var u;
    const [s] = t.info, [n] = t.common, [a] = t.page, [o] = t.distanceField, h = Ae(a.file), l = {};
    this._ownsTextures = r, this.font = s.face, this.size = s.size, this.lineHeight = n.lineHeight / h, this.chars = {}, this.pageTextures = l;
    for (let c = 0; c < t.page.length; c++) {
      const { id: d, file: f } = t.page[c];
      l[d] = e instanceof Array ? e[c] : e[f], o != null && o.fieldType && o.fieldType !== "none" && (l[d].baseTexture.alphaMode = Dt.NO_PREMULTIPLIED_ALPHA, l[d].baseTexture.mipmap = ue.OFF);
    }
    for (let c = 0; c < t.char.length; c++) {
      const { id: d, page: f } = t.char[c];
      let { x: p, y: m, width: y, height: v, xoffset: b, yoffset: _, xadvance: g } = t.char[c];
      p /= h, m /= h, y /= h, v /= h, b /= h, _ /= h, g /= h;
      const w = new j(
        p + l[f].frame.x / h,
        m + l[f].frame.y / h,
        y,
        v
      );
      this.chars[d] = {
        xOffset: b,
        yOffset: _,
        xAdvance: g,
        kerning: {},
        texture: new O(
          l[f].baseTexture,
          w
        ),
        page: f
      };
    }
    for (let c = 0; c < t.kerning.length; c++) {
      let { first: d, second: f, amount: p } = t.kerning[c];
      d /= h, f /= h, p /= h, this.chars[f] && (this.chars[f].kerning[d] = p);
    }
    this.distanceFieldRange = o == null ? void 0 : o.distanceRange, this.distanceFieldType = ((u = o == null ? void 0 : o.fieldType) == null ? void 0 : u.toLowerCase()) ?? "none";
  }
  /** Remove references to created glyph textures. */
  destroy() {
    for (const t in this.chars)
      this.chars[t].texture.destroy(), this.chars[t].texture = null;
    for (const t in this.pageTextures)
      this._ownsTextures && this.pageTextures[t].destroy(!0), this.pageTextures[t] = null;
    this.chars = null, this.pageTextures = null;
  }
  /**
   * Register a new bitmap font.
   * @param data - The
   *        characters map that could be provided as xml or raw string.
   * @param textures - List of textures for each page.
   * @param ownsTextures - Set to `true` to destroy page textures
   *        when the font is uninstalled. By default fonts created with
   *        `BitmapFont.from` or from the `BitmapFontLoader` are `true`.
   * @returns {PIXI.BitmapFont} Result font object with font, size, lineHeight
   *         and char fields.
   */
  static install(t, e, r) {
    let s;
    if (t instanceof Is)
      s = t;
    else {
      const a = Z_(t);
      if (!a)
        throw new Error("Unrecognized data format for font.");
      s = a.parse(t);
    }
    e instanceof O && (e = [e]);
    const n = new se(s, e, r);
    return se.available[n.font] = n, n;
  }
  /**
   * Remove bitmap font by name.
   * @param name - Name of the font to uninstall.
   */
  static uninstall(t) {
    const e = se.available[t];
    if (!e)
      throw new Error(`No font found named '${t}'`);
    e.destroy(), delete se.available[t];
  }
  /**
   * Generates a bitmap-font for the given style and character set. This does not support
   * kernings yet. With `style` properties, only the following non-layout properties are used:
   *
   * - {@link PIXI.TextStyle#dropShadow|dropShadow}
   * - {@link PIXI.TextStyle#dropShadowDistance|dropShadowDistance}
   * - {@link PIXI.TextStyle#dropShadowColor|dropShadowColor}
   * - {@link PIXI.TextStyle#dropShadowBlur|dropShadowBlur}
   * - {@link PIXI.TextStyle#dropShadowAngle|dropShadowAngle}
   * - {@link PIXI.TextStyle#fill|fill}
   * - {@link PIXI.TextStyle#fillGradientStops|fillGradientStops}
   * - {@link PIXI.TextStyle#fillGradientType|fillGradientType}
   * - {@link PIXI.TextStyle#fontFamily|fontFamily}
   * - {@link PIXI.TextStyle#fontSize|fontSize}
   * - {@link PIXI.TextStyle#fontVariant|fontVariant}
   * - {@link PIXI.TextStyle#fontWeight|fontWeight}
   * - {@link PIXI.TextStyle#lineJoin|lineJoin}
   * - {@link PIXI.TextStyle#miterLimit|miterLimit}
   * - {@link PIXI.TextStyle#stroke|stroke}
   * - {@link PIXI.TextStyle#strokeThickness|strokeThickness}
   * - {@link PIXI.TextStyle#textBaseline|textBaseline}
   * @param name - The name of the custom font to use with BitmapText.
   * @param textStyle - Style options to render with BitmapFont.
   * @param options - Setup options for font or name of the font.
   * @returns Font generated by style options.
   * @example
   * import { BitmapFont, BitmapText } from 'pixi.js';
   *
   * BitmapFont.from('TitleFont', {
   *     fontFamily: 'Arial',
   *     fontSize: 12,
   *     strokeThickness: 2,
   *     fill: 'purple',
   * });
   *
   * const title = new BitmapText('This is the title', { fontName: 'TitleFont' });
   */
  static from(t, e, r) {
    if (!t)
      throw new Error("[BitmapFont] Property `name` is required.");
    const {
      chars: s,
      padding: n,
      resolution: a,
      textureWidth: o,
      textureHeight: h,
      ...l
    } = Object.assign({}, se.defaultOptions, r), u = t0(s), c = e instanceof He ? e : new He(e), d = o, f = new Is();
    f.info[0] = {
      face: c.fontFamily,
      size: c.fontSize
    }, f.common[0] = {
      lineHeight: c.fontSize
    };
    let p = 0, m = 0, y, v, b, _ = 0;
    const g = [];
    for (let R = 0; R < u.length; R++) {
      y || (y = L.ADAPTER.createCanvas(), y.width = o, y.height = h, v = y.getContext("2d"), b = new W(y, { resolution: a, ...l }), g.push(new O(b)), f.page.push({
        id: g.length - 1,
        file: ""
      }));
      const A = u[R], x = De.measureText(A, c, !1, y), T = x.width, S = Math.ceil(x.height), M = Math.ceil((c.fontStyle === "italic" ? 2 : 1) * T);
      if (m >= h - S * a) {
        if (m === 0)
          throw new Error(`[BitmapFont] textureHeight ${h}px is too small (fontFamily: '${c.fontFamily}', fontSize: ${c.fontSize}px, char: '${A}')`);
        --R, y = null, v = null, b = null, m = 0, p = 0, _ = 0;
        continue;
      }
      if (_ = Math.max(S + x.fontProperties.descent, _), M * a + p >= d) {
        if (p === 0)
          throw new Error(`[BitmapFont] textureWidth ${o}px is too small (fontFamily: '${c.fontFamily}', fontSize: ${c.fontSize}px, char: '${A}')`);
        --R, m += _ * a, m = Math.ceil(m), p = 0, _ = 0;
        continue;
      }
      J_(y, v, x, p, m, a, c);
      const C = ns(x.text);
      f.char.push({
        id: C,
        page: g.length - 1,
        x: p / a,
        y: m / a,
        width: M,
        height: S,
        xoffset: 0,
        yoffset: 0,
        xadvance: T - (c.dropShadow ? c.dropShadowDistance : 0) - (c.stroke ? c.strokeThickness : 0)
      }), p += (M + 2 * n) * a, p = Math.ceil(p);
    }
    if (!(r != null && r.skipKerning))
      for (let R = 0, A = u.length; R < A; R++) {
        const x = u[R];
        for (let T = 0; T < A; T++) {
          const S = u[T], M = v.measureText(x).width, C = v.measureText(S).width, E = v.measureText(x + S).width - (M + C);
          E && f.kerning.push({
            first: ns(x),
            second: ns(S),
            amount: E
          });
        }
      }
    const w = new se(f, g, !0);
    return se.available[t] !== void 0 && se.uninstall(t), se.available[t] = w, w;
  }
};
Re.ALPHA = [["a", "z"], ["A", "Z"], " "], /**
* This character set includes all decimal digits (from 0 to 9).
* @type {string[][]}
* @example
* BitmapFont.from('ExampleFont', style, { chars: BitmapFont.NUMERIC })
*/
Re.NUMERIC = [["0", "9"]], /**
* This character set is the union of `BitmapFont.ALPHA` and `BitmapFont.NUMERIC`.
* @type {string[][]}
*/
Re.ALPHANUMERIC = [["a", "z"], ["A", "Z"], ["0", "9"], " "], /**
* This character set consists of all the ASCII table.
* @member {string[][]}
* @see http://www.asciitable.com/
*/
Re.ASCII = [[" ", "~"]], /**
* Collection of default options when using `BitmapFont.from`.
* @property {number} [resolution=1] -
* @property {number} [textureWidth=512] -
* @property {number} [textureHeight=512] -
* @property {number} [padding=4] -
* @property {string|string[]|string[][]} chars = PIXI.BitmapFont.ALPHANUMERIC
*/
Re.defaultOptions = {
  resolution: 1,
  textureWidth: 512,
  textureHeight: 512,
  padding: 4,
  chars: Re.ALPHANUMERIC
}, /** Collection of available/installed fonts. */
Re.available = {};
let Me = Re;
var e0 = `// Pixi texture info\r
varying vec2 vTextureCoord;\r
uniform sampler2D uSampler;\r
\r
// Tint\r
uniform vec4 uColor;\r
\r
// on 2D applications fwidth is screenScale / glyphAtlasScale * distanceFieldRange\r
uniform float uFWidth;\r
\r
void main(void) {\r
\r
  // To stack MSDF and SDF we need a non-pre-multiplied-alpha texture.\r
  vec4 texColor = texture2D(uSampler, vTextureCoord);\r
\r
  // MSDF\r
  float median = texColor.r + texColor.g + texColor.b -\r
                  min(texColor.r, min(texColor.g, texColor.b)) -\r
                  max(texColor.r, max(texColor.g, texColor.b));\r
  // SDF\r
  median = min(median, texColor.a);\r
\r
  float screenPxDistance = uFWidth * (median - 0.5);\r
  float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);\r
  if (median < 0.01) {\r
    alpha = 0.0;\r
  } else if (median > 0.99) {\r
    alpha = 1.0;\r
  }\r
\r
  // Gamma correction for coverage-like alpha\r
  float luma = dot(uColor.rgb, vec3(0.299, 0.587, 0.114));\r
  float gamma = mix(1.0, 1.0 / 2.2, luma);\r
  float coverage = pow(uColor.a * alpha, gamma);  \r
\r
  // NPM Textures, NPM outputs\r
  gl_FragColor = vec4(uColor.rgb, coverage);\r
}\r
`, r0 = `// Mesh material default fragment\r
attribute vec2 aVertexPosition;\r
attribute vec2 aTextureCoord;\r
\r
uniform mat3 projectionMatrix;\r
uniform mat3 translationMatrix;\r
uniform mat3 uTextureMatrix;\r
\r
varying vec2 vTextureCoord;\r
\r
void main(void)\r
{\r
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\r
\r
    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\r
}\r
`;
const $h = [], Vh = [], zh = [], Qu = class Ju extends Ft {
  /**
   * @param text - A string that you would like the text to display.
   * @param style - The style parameters.
   * @param {string} style.fontName - The installed BitmapFont name.
   * @param {number} [style.fontSize] - The size of the font in pixels, e.g. 24. If undefined,
   *.     this will default to the BitmapFont size.
   * @param {string} [style.align='left'] - Alignment for multiline text ('left', 'center', 'right' or 'justify'),
   *      does not affect single line text.
   * @param {PIXI.ColorSource} [style.tint=0xFFFFFF] - The tint color.
   * @param {number} [style.letterSpacing=0] - The amount of spacing between letters.
   * @param {number} [style.maxWidth=0] - The max width of the text before line wrapping.
   */
  constructor(t, e = {}) {
    super();
    const { align: r, tint: s, maxWidth: n, letterSpacing: a, fontName: o, fontSize: h } = Object.assign(
      {},
      Ju.styleDefaults,
      e
    );
    if (!Me.available[o])
      throw new Error(`Missing BitmapFont "${o}"`);
    this._activePagesMeshData = [], this._textWidth = 0, this._textHeight = 0, this._align = r, this._tintColor = new tt(s), this._font = void 0, this._fontName = o, this._fontSize = h, this.text = t, this._maxWidth = n, this._maxLineHeight = 0, this._letterSpacing = a, this._anchor = new ve(() => {
      this.dirty = !0;
    }, this, 0, 0), this._roundPixels = L.ROUND_PIXELS, this.dirty = !0, this._resolution = L.RESOLUTION, this._autoResolution = !0, this._textureCache = {};
  }
  /** Renders text and updates it when needed. This should only be called if the BitmapFont is regenerated. */
  updateText() {
    var M;
    const t = Me.available[this._fontName], e = this.fontSize, r = e / t.size, s = new K(), n = [], a = [], o = [], h = this._text.replace(/(?:\r\n|\r)/g, `
`) || " ", l = Zu(h), u = this._maxWidth * t.size / e, c = t.distanceFieldType === "none" ? $h : Vh;
    let d = null, f = 0, p = 0, m = 0, y = -1, v = 0, b = 0, _ = 0, g = 0;
    for (let C = 0; C < l.length; C++) {
      const E = l[C], I = ns(E);
      if (/(?:\s)/.test(E) && (y = C, v = f, g++), E === "\r" || E === `
`) {
        a.push(f), o.push(-1), p = Math.max(p, f), ++m, ++b, s.x = 0, s.y += t.lineHeight, d = null, g = 0;
        continue;
      }
      const G = t.chars[I];
      if (!G)
        continue;
      d && G.kerning[d] && (s.x += G.kerning[d]);
      const U = zh.pop() || {
        texture: O.EMPTY,
        line: 0,
        charCode: 0,
        prevSpaces: 0,
        position: new K()
      };
      U.texture = G.texture, U.line = m, U.charCode = I, U.position.x = Math.round(s.x + G.xOffset + this._letterSpacing / 2), U.position.y = Math.round(s.y + G.yOffset), U.prevSpaces = g, n.push(U), f = U.position.x + Math.max(G.xAdvance - G.xOffset, G.texture.orig.width), s.x += G.xAdvance + this._letterSpacing, _ = Math.max(_, G.yOffset + G.texture.height), d = I, y !== -1 && u > 0 && s.x > u && (++b, Pr(n, 1 + y - b, 1 + C - y), C = y, y = -1, a.push(v), o.push(n.length > 0 ? n[n.length - 1].prevSpaces : 0), p = Math.max(p, v), m++, s.x = 0, s.y += t.lineHeight, d = null, g = 0);
    }
    const w = l[l.length - 1];
    w !== "\r" && w !== `
` && (/(?:\s)/.test(w) && (f = v), a.push(f), p = Math.max(p, f), o.push(-1));
    const R = [];
    for (let C = 0; C <= m; C++) {
      let E = 0;
      this._align === "right" ? E = p - a[C] : this._align === "center" ? E = (p - a[C]) / 2 : this._align === "justify" && (E = o[C] < 0 ? 0 : (p - a[C]) / o[C]), R.push(E);
    }
    const A = n.length, x = {}, T = [], S = this._activePagesMeshData;
    c.push(...S);
    for (let C = 0; C < A; C++) {
      const E = n[C].texture, I = E.baseTexture.uid;
      if (!x[I]) {
        let G = c.pop();
        if (!G) {
          const $ = new Gs();
          let z, ht;
          t.distanceFieldType === "none" ? (z = new fi(O.EMPTY), ht = X.NORMAL) : (z = new fi(
            O.EMPTY,
            { program: xe.from(r0, e0), uniforms: { uFWidth: 0 } }
          ), ht = X.NORMAL_NPM);
          const D = new kr($, z);
          D.blendMode = ht, G = {
            index: 0,
            indexCount: 0,
            vertexCount: 0,
            uvsCount: 0,
            total: 0,
            mesh: D,
            vertices: null,
            uvs: null,
            indices: null
          };
        }
        G.index = 0, G.indexCount = 0, G.vertexCount = 0, G.uvsCount = 0, G.total = 0;
        const { _textureCache: U } = this;
        U[I] = U[I] || new O(E.baseTexture), G.mesh.texture = U[I], G.mesh.tint = this._tintColor.value, T.push(G), x[I] = G;
      }
      x[I].total++;
    }
    for (let C = 0; C < S.length; C++)
      T.includes(S[C]) || this.removeChild(S[C].mesh);
    for (let C = 0; C < T.length; C++)
      T[C].mesh.parent !== this && this.addChild(T[C].mesh);
    this._activePagesMeshData = T;
    for (const C in x) {
      const E = x[C], I = E.total;
      if (!(((M = E.indices) == null ? void 0 : M.length) > 6 * I) || E.vertices.length < kr.BATCHABLE_SIZE * 2)
        E.vertices = new Float32Array(4 * 2 * I), E.uvs = new Float32Array(4 * 2 * I), E.indices = new Uint16Array(6 * I);
      else {
        const G = E.total, U = E.vertices;
        for (let $ = G * 4 * 2; $ < U.length; $++)
          U[$] = 0;
      }
      E.mesh.size = 6 * I;
    }
    for (let C = 0; C < A; C++) {
      const E = n[C];
      let I = E.position.x + R[E.line] * (this._align === "justify" ? E.prevSpaces : 1);
      this._roundPixels && (I = Math.round(I));
      const G = I * r, U = E.position.y * r, $ = E.texture, z = x[$.baseTexture.uid], ht = $.frame, D = $._uvs, B = z.index++;
      z.indices[B * 6 + 0] = 0 + B * 4, z.indices[B * 6 + 1] = 1 + B * 4, z.indices[B * 6 + 2] = 2 + B * 4, z.indices[B * 6 + 3] = 0 + B * 4, z.indices[B * 6 + 4] = 2 + B * 4, z.indices[B * 6 + 5] = 3 + B * 4, z.vertices[B * 8 + 0] = G, z.vertices[B * 8 + 1] = U, z.vertices[B * 8 + 2] = G + ht.width * r, z.vertices[B * 8 + 3] = U, z.vertices[B * 8 + 4] = G + ht.width * r, z.vertices[B * 8 + 5] = U + ht.height * r, z.vertices[B * 8 + 6] = G, z.vertices[B * 8 + 7] = U + ht.height * r, z.uvs[B * 8 + 0] = D.x0, z.uvs[B * 8 + 1] = D.y0, z.uvs[B * 8 + 2] = D.x1, z.uvs[B * 8 + 3] = D.y1, z.uvs[B * 8 + 4] = D.x2, z.uvs[B * 8 + 5] = D.y2, z.uvs[B * 8 + 6] = D.x3, z.uvs[B * 8 + 7] = D.y3;
    }
    this._textWidth = p * r, this._textHeight = (s.y + t.lineHeight) * r;
    for (const C in x) {
      const E = x[C];
      if (this.anchor.x !== 0 || this.anchor.y !== 0) {
        let $ = 0;
        const z = this._textWidth * this.anchor.x, ht = this._textHeight * this.anchor.y;
        for (let D = 0; D < E.total; D++)
          E.vertices[$++] -= z, E.vertices[$++] -= ht, E.vertices[$++] -= z, E.vertices[$++] -= ht, E.vertices[$++] -= z, E.vertices[$++] -= ht, E.vertices[$++] -= z, E.vertices[$++] -= ht;
      }
      this._maxLineHeight = _ * r;
      const I = E.mesh.geometry.getBuffer("aVertexPosition"), G = E.mesh.geometry.getBuffer("aTextureCoord"), U = E.mesh.geometry.getIndex();
      I.data = E.vertices, G.data = E.uvs, U.data = E.indices, I.update(), G.update(), U.update();
    }
    for (let C = 0; C < n.length; C++)
      zh.push(n[C]);
    this._font = t, this.dirty = !1;
  }
  updateTransform() {
    this.validate(), this.containerUpdateTransform();
  }
  _render(t) {
    this._autoResolution && this._resolution !== t.resolution && (this._resolution = t.resolution, this.dirty = !0);
    const { distanceFieldRange: e, distanceFieldType: r, size: s } = Me.available[this._fontName];
    if (r !== "none") {
      const { a: n, b: a, c: o, d: h } = this.worldTransform, l = Math.sqrt(n * n + a * a), u = Math.sqrt(o * o + h * h), c = (Math.abs(l) + Math.abs(u)) / 2, d = this.fontSize / s, f = t._view.resolution;
      for (const p of this._activePagesMeshData)
        p.mesh.shader.uniforms.uFWidth = c * e * d * f;
    }
    super._render(t);
  }
  /**
   * Validates text before calling parent's getLocalBounds
   * @returns - The rectangular bounding area
   */
  getLocalBounds() {
    return this.validate(), super.getLocalBounds();
  }
  /**
   * Updates text when needed
   * @private
   */
  validate() {
    const t = Me.available[this._fontName];
    if (!t)
      throw new Error(`Missing BitmapFont "${this._fontName}"`);
    this._font !== t && (this.dirty = !0), this.dirty && this.updateText();
  }
  /**
   * The tint of the BitmapText object.
   * @default 0xffffff
   */
  get tint() {
    return this._tintColor.value;
  }
  set tint(t) {
    if (this.tint !== t) {
      this._tintColor.setValue(t);
      for (let e = 0; e < this._activePagesMeshData.length; e++)
        this._activePagesMeshData[e].mesh.tint = t;
    }
  }
  /**
   * The alignment of the BitmapText object.
   * @member {string}
   * @default 'left'
   */
  get align() {
    return this._align;
  }
  set align(t) {
    this._align !== t && (this._align = t, this.dirty = !0);
  }
  /** The name of the BitmapFont. */
  get fontName() {
    return this._fontName;
  }
  set fontName(t) {
    if (!Me.available[t])
      throw new Error(`Missing BitmapFont "${t}"`);
    this._fontName !== t && (this._fontName = t, this.dirty = !0);
  }
  /** The size of the font to display. */
  get fontSize() {
    return this._fontSize ?? Me.available[this._fontName].size;
  }
  set fontSize(t) {
    this._fontSize !== t && (this._fontSize = t, this.dirty = !0);
  }
  /**
   * The anchor sets the origin point of the text.
   *
   * The default is `(0,0)`, this means the text's origin is the top left.
   *
   * Setting the anchor to `(0.5,0.5)` means the text's origin is centered.
   *
   * Setting the anchor to `(1,1)` would mean the text's origin point will be the bottom right corner.
   */
  get anchor() {
    return this._anchor;
  }
  set anchor(t) {
    typeof t == "number" ? this._anchor.set(t) : this._anchor.copyFrom(t);
  }
  /** The text of the BitmapText object. */
  get text() {
    return this._text;
  }
  set text(t) {
    t = String(t ?? ""), this._text !== t && (this._text = t, this.dirty = !0);
  }
  /**
   * The max width of this bitmap text in pixels. If the text provided is longer than the
   * value provided, line breaks will be automatically inserted in the last whitespace.
   * Disable by setting the value to 0.
   */
  get maxWidth() {
    return this._maxWidth;
  }
  set maxWidth(t) {
    this._maxWidth !== t && (this._maxWidth = t, this.dirty = !0);
  }
  /**
   * The max line height. This is useful when trying to use the total height of the Text,
   * i.e. when trying to vertically align.
   * @readonly
   */
  get maxLineHeight() {
    return this.validate(), this._maxLineHeight;
  }
  /**
   * The width of the overall text, different from fontSize,
   * which is defined in the style object.
   * @readonly
   */
  get textWidth() {
    return this.validate(), this._textWidth;
  }
  /** Additional space between characters. */
  get letterSpacing() {
    return this._letterSpacing;
  }
  set letterSpacing(t) {
    this._letterSpacing !== t && (this._letterSpacing = t, this.dirty = !0);
  }
  /**
   * If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.
   * Advantages can include sharper image quality (like text) and faster rendering on canvas.
   * The main disadvantage is movement of objects may appear less smooth.
   * To set the global default, change {@link PIXI.settings.ROUND_PIXELS}
   * @default PIXI.settings.ROUND_PIXELS
   */
  get roundPixels() {
    return this._roundPixels;
  }
  set roundPixels(t) {
    t !== this._roundPixels && (this._roundPixels = t, this.dirty = !0);
  }
  /**
   * The height of the overall text, different from fontSize,
   * which is defined in the style object.
   * @readonly
   */
  get textHeight() {
    return this.validate(), this._textHeight;
  }
  /**
   * The resolution / device pixel ratio of the canvas.
   *
   * This is set to automatically match the renderer resolution by default, but can be overridden by setting manually.
   * @default 1
   */
  get resolution() {
    return this._resolution;
  }
  set resolution(t) {
    this._autoResolution = !1, this._resolution !== t && (this._resolution = t, this.dirty = !0);
  }
  destroy(t) {
    const { _textureCache: e } = this, r = Me.available[this._fontName].distanceFieldType === "none" ? $h : Vh;
    r.push(...this._activePagesMeshData);
    for (const s of this._activePagesMeshData)
      this.removeChild(s.mesh);
    this._activePagesMeshData = [], r.filter((s) => e[s.mesh.texture.baseTexture.uid]).forEach((s) => {
      s.mesh.texture = O.EMPTY;
    });
    for (const s in e)
      e[s].destroy(), delete e[s];
    this._font = null, this._tintColor = null, this._textureCache = null, super.destroy(t);
  }
};
Qu.styleDefaults = {
  align: "left",
  tint: 16777215,
  maxWidth: 0,
  letterSpacing: 0
};
let tc = Qu;
const i0 = [".xml", ".fnt"], s0 = {
  extension: {
    type: F.LoadParser,
    priority: qt.Normal
  },
  name: "loadBitmapFont",
  test(i) {
    return i0.includes(gt.extname(i).toLowerCase());
  },
  async testParse(i) {
    return ss.test(i) || Ia.test(i);
  },
  async parse(i, t, e) {
    const r = ss.test(i) ? ss.parse(i) : Ia.parse(i), { src: s } = t, { page: n } = r, a = [];
    for (let l = 0; l < n.length; ++l) {
      const u = n[l].file;
      let c = gt.join(gt.dirname(s), u);
      c = ba(c, s), a.push(c);
    }
    const o = await e.load(a), h = a.map((l) => o[l]);
    return Me.install(r, h, !0);
  },
  async load(i, t) {
    return (await L.ADAPTER.fetch(i)).text();
  },
  unload(i) {
    i.destroy();
  }
};
k.add(s0);
const Pa = class xr extends He {
  constructor() {
    super(...arguments), this._fonts = [], this._overrides = [], this._stylesheet = "", this.fontsDirty = !1;
  }
  /**
   * Convert a TextStyle to HTMLTextStyle
   * @param originalStyle
   * @example
   * import {TextStyle } from 'pixi.js';
   * import {HTMLTextStyle} from '@pixi/text-html';
   * const style = new TextStyle();
   * const htmlStyle = HTMLTextStyle.from(style);
   */
  static from(t) {
    return new xr(
      Object.keys(xr.defaultOptions).reduce((e, r) => ({ ...e, [r]: t[r] }), {})
    );
  }
  /** Clear the current font */
  cleanFonts() {
    this._fonts.length > 0 && (this._fonts.forEach((t) => {
      URL.revokeObjectURL(t.src), t.refs--, t.refs === 0 && (t.fontFace && document.fonts.delete(t.fontFace), delete xr.availableFonts[t.originalUrl]);
    }), this.fontFamily = "Arial", this._fonts.length = 0, this.styleID++, this.fontsDirty = !0);
  }
  /**
   * Because of how HTMLText renders, fonts need to be imported
   * @param url
   * @param options
   */
  loadFont(t, e = {}) {
    const { availableFonts: r } = xr;
    if (r[t]) {
      const s = r[t];
      return this._fonts.push(s), s.refs++, this.styleID++, this.fontsDirty = !0, Promise.resolve();
    }
    return L.ADAPTER.fetch(t).then((s) => s.blob()).then(async (s) => new Promise((n, a) => {
      const o = URL.createObjectURL(s), h = new FileReader();
      h.onload = () => n([o, h.result]), h.onerror = a, h.readAsDataURL(s);
    })).then(async ([s, n]) => {
      const a = Object.assign({
        family: gt.basename(t, gt.extname(t)),
        weight: "normal",
        style: "normal",
        display: "auto",
        src: s,
        dataSrc: n,
        refs: 1,
        originalUrl: t,
        fontFace: null
      }, e);
      r[t] = a, this._fonts.push(a), this.styleID++;
      const o = new FontFace(a.family, `url(${a.src})`, {
        weight: a.weight,
        style: a.style,
        display: a.display
      });
      a.fontFace = o, await o.load(), document.fonts.add(o), await document.fonts.ready, this.styleID++, this.fontsDirty = !0;
    });
  }
  /**
   * Add a style override, this can be any CSS property
   * it will override any built-in style. This is the
   * property and the value as a string (e.g., `color: red`).
   * This will override any other internal style.
   * @param {string} value - CSS style(s) to add.
   * @example
   * style.addOverride('background-color: red');
   */
  addOverride(...t) {
    const e = t.filter((r) => !this._overrides.includes(r));
    e.length > 0 && (this._overrides.push(...e), this.styleID++);
  }
  /**
   * Remove any overrides that match the value.
   * @param {string} value - CSS style to remove.
   * @example
   * style.removeOverride('background-color: red');
   */
  removeOverride(...t) {
    const e = t.filter((r) => this._overrides.includes(r));
    e.length > 0 && (this._overrides = this._overrides.filter((r) => !e.includes(r)), this.styleID++);
  }
  /**
   * Internally converts all of the style properties into CSS equivalents.
   * @param scale
   * @returns The CSS style string, for setting `style` property of root HTMLElement.
   */
  toCSS(t) {
    return [
      `transform: scale(${t})`,
      "transform-origin: top left",
      "display: inline-block",
      `color: ${this.normalizeColor(this.fill)}`,
      `font-size: ${this.fontSize}px`,
      `font-family: ${this.fontFamily}`,
      `font-weight: ${this.fontWeight}`,
      `font-style: ${this.fontStyle}`,
      `font-variant: ${this.fontVariant}`,
      `letter-spacing: ${this.letterSpacing}px`,
      `text-align: ${this.align}`,
      `padding: ${this.padding}px`,
      `white-space: ${this.whiteSpace}`,
      ...this.lineHeight ? [`line-height: ${this.lineHeight}px`] : [],
      ...this.wordWrap ? [
        `word-wrap: ${this.breakWords ? "break-all" : "break-word"}`,
        `max-width: ${this.wordWrapWidth}px`
      ] : [],
      ...this.strokeThickness ? [
        `-webkit-text-stroke-width: ${this.strokeThickness}px`,
        `-webkit-text-stroke-color: ${this.normalizeColor(this.stroke)}`,
        `text-stroke-width: ${this.strokeThickness}px`,
        `text-stroke-color: ${this.normalizeColor(this.stroke)}`,
        "paint-order: stroke"
      ] : [],
      ...this.dropShadow ? [this.dropShadowToCSS()] : [],
      ...this._overrides
    ].join(";");
  }
  /** Get the font CSS styles from the loaded font, If available. */
  toGlobalCSS() {
    return this._fonts.reduce((t, e) => `${t}
            @font-face {
                font-family: "${e.family}";
                src: url('${e.dataSrc}');
                font-weight: ${e.weight};
                font-style: ${e.style};
                font-display: ${e.display};
            }`, this._stylesheet);
  }
  /** Internal stylesheet contents, useful for creating rules for rendering */
  get stylesheet() {
    return this._stylesheet;
  }
  set stylesheet(t) {
    this._stylesheet !== t && (this._stylesheet = t, this.styleID++);
  }
  /**
   * Convert numerical colors into hex-strings
   * @param color
   */
  normalizeColor(t) {
    return Array.isArray(t) && (t = qp(t)), typeof t == "number" ? Yp(t) : t;
  }
  /** Convert the internal drop-shadow settings to CSS text-shadow */
  dropShadowToCSS() {
    let t = this.normalizeColor(this.dropShadowColor);
    const e = this.dropShadowAlpha, r = Math.round(Math.cos(this.dropShadowAngle) * this.dropShadowDistance), s = Math.round(Math.sin(this.dropShadowAngle) * this.dropShadowDistance);
    t.startsWith("#") && e < 1 && (t += (e * 255 | 0).toString(16).padStart(2, "0"));
    const n = `${r}px ${s}px`;
    return this.dropShadowBlur > 0 ? `text-shadow: ${n} ${this.dropShadowBlur}px ${t}` : `text-shadow: ${n} ${t}`;
  }
  /** Resets all properties to the defaults specified in TextStyle.prototype._default */
  reset() {
    Object.assign(this, xr.defaultOptions);
  }
  /**
   * Called after the image is loaded but before drawing to the canvas.
   * Mostly used to handle Safari's font loading bug.
   * @ignore
   */
  onBeforeDraw() {
    const { fontsDirty: t } = this;
    return this.fontsDirty = !1, this.isSafari && this._fonts.length > 0 && t ? new Promise((e) => setTimeout(e, 100)) : Promise.resolve();
  }
  /**
   * Proving that Safari is the new IE
   * @ignore
   */
  get isSafari() {
    const { userAgent: t } = L.ADAPTER.getNavigator();
    return /^((?!chrome|android).)*safari/i.test(t);
  }
  set fillGradientStops(t) {
    console.warn("[HTMLTextStyle] fillGradientStops is not supported by HTMLText");
  }
  get fillGradientStops() {
    return super.fillGradientStops;
  }
  set fillGradientType(t) {
    console.warn("[HTMLTextStyle] fillGradientType is not supported by HTMLText");
  }
  get fillGradientType() {
    return super.fillGradientType;
  }
  set miterLimit(t) {
    console.warn("[HTMLTextStyle] miterLimit is not supported by HTMLText");
  }
  get miterLimit() {
    return super.miterLimit;
  }
  set trim(t) {
    console.warn("[HTMLTextStyle] trim is not supported by HTMLText");
  }
  get trim() {
    return super.trim;
  }
  set textBaseline(t) {
    console.warn("[HTMLTextStyle] textBaseline is not supported by HTMLText");
  }
  get textBaseline() {
    return super.textBaseline;
  }
  set leading(t) {
    console.warn("[HTMLTextStyle] leading is not supported by HTMLText");
  }
  get leading() {
    return super.leading;
  }
  set lineJoin(t) {
    console.warn("[HTMLTextStyle] lineJoin is not supported by HTMLText");
  }
  get lineJoin() {
    return super.lineJoin;
  }
};
Pa.availableFonts = {}, /**
* List of default options, these are largely the same as TextStyle,
* with the exception of whiteSpace, which is set to 'normal' by default.
*/
Pa.defaultOptions = {
  /** Align */
  align: "left",
  /** Break words */
  breakWords: !1,
  /** Drop shadow */
  dropShadow: !1,
  /** Drop shadow alpha */
  dropShadowAlpha: 1,
  /**
   * Drop shadow angle
   * @type {number}
   * @default Math.PI / 6
   */
  dropShadowAngle: Math.PI / 6,
  /** Drop shadow blur */
  dropShadowBlur: 0,
  /** Drop shadow color */
  dropShadowColor: "black",
  /** Drop shadow distance */
  dropShadowDistance: 5,
  /** Fill */
  fill: "black",
  /** Font family */
  fontFamily: "Arial",
  /** Font size */
  fontSize: 26,
  /** Font style */
  fontStyle: "normal",
  /** Font variant */
  fontVariant: "normal",
  /** Font weight */
  fontWeight: "normal",
  /** Letter spacing */
  letterSpacing: 0,
  /** Line height */
  lineHeight: 0,
  /** Padding */
  padding: 0,
  /** Stroke */
  stroke: "black",
  /** Stroke thickness */
  strokeThickness: 0,
  /** White space */
  whiteSpace: "normal",
  /** Word wrap */
  wordWrap: !1,
  /** Word wrap width */
  wordWrapWidth: 100
};
let Mn = Pa;
const Yi = class br extends de {
  /**
   * @param {string} [text] - Text contents
   * @param {PIXI.HTMLTextStyle|PIXI.TextStyle|PIXI.ITextStyle} [style] - Style setting to use.
   *        Strongly recommend using an HTMLTextStyle object. Providing a PIXI.TextStyle
   *        will convert the TextStyle to an HTMLTextStyle and will no longer be linked.
   */
  constructor(t = "", e = {}) {
    super(O.EMPTY), this._text = null, this._style = null, this._autoResolution = !0, this.localStyleID = -1, this.dirty = !1, this._updateID = 0, this.ownsStyle = !1;
    const r = new Image(), s = O.from(r, {
      scaleMode: L.SCALE_MODE,
      resourceOptions: {
        autoLoad: !1
      }
    });
    s.orig = new j(), s.trim = new j(), this.texture = s;
    const n = "http://www.w3.org/2000/svg", a = "http://www.w3.org/1999/xhtml", o = document.createElementNS(n, "svg"), h = document.createElementNS(n, "foreignObject"), l = document.createElementNS(a, "div"), u = document.createElementNS(a, "style");
    h.setAttribute("width", "10000"), h.setAttribute("height", "10000"), h.style.overflow = "hidden", o.appendChild(h), this.maxWidth = br.defaultMaxWidth, this.maxHeight = br.defaultMaxHeight, this._domElement = l, this._styleElement = u, this._svgRoot = o, this._foreignObject = h, this._foreignObject.appendChild(u), this._foreignObject.appendChild(l), this._image = r, this._loadImage = new Image(), this._autoResolution = br.defaultAutoResolution, this._resolution = br.defaultResolution ?? L.RESOLUTION, this.text = t, this.style = e;
  }
  /**
   * Calculate the size of the output text without actually drawing it.
   * This includes the `padding` in the `style` object.
   * This can be used as a fast-pass to do things like text-fitting.
   * @param {object} [overrides] - Overrides for the text, style, and resolution.
   * @param {string} [overrides.text] - The text to measure, if not specified, the current text is used.
   * @param {PIXI.HTMLTextStyle} [overrides.style] - The style to measure, if not specified, the current style is used.
   * @param {number} [overrides.resolution] - The resolution to measure, if not specified, the current resolution is used.
   * @returns {PIXI.ISize} Width and height of the measured text.
   */
  measureText(t) {
    var u, c;
    const { text: e, style: r, resolution: s } = Object.assign({
      text: this._text,
      style: this._style,
      resolution: this._resolution
    }, t);
    Object.assign(this._domElement, {
      innerHTML: e,
      style: r.toCSS(s)
    }), this._styleElement.textContent = r.toGlobalCSS(), document.body.appendChild(this._svgRoot);
    const n = this._domElement.getBoundingClientRect();
    this._svgRoot.remove();
    const { width: a, height: o } = n;
    (a > this.maxWidth || o > this.maxHeight) && console.warn("[HTMLText] Large expanse of text, increase HTMLText.maxWidth or HTMLText.maxHeight property.");
    const h = Math.min(this.maxWidth, Math.ceil(a)), l = Math.min(this.maxHeight, Math.ceil(o));
    return this._svgRoot.setAttribute("width", h.toString()), this._svgRoot.setAttribute("height", l.toString()), e !== this._text && (this._domElement.innerHTML = this._text), r !== this._style && (Object.assign(this._domElement, { style: (u = this._style) == null ? void 0 : u.toCSS(s) }), this._styleElement.textContent = (c = this._style) == null ? void 0 : c.toGlobalCSS()), {
      width: h + r.padding * 2,
      height: l + r.padding * 2
    };
  }
  /**
   * Manually refresh the text.
   * @public
   * @param {boolean} respectDirty - Whether to abort updating the
   *        text if the Text isn't dirty and the function is called.
   */
  async updateText(t = !0) {
    const { style: e, _image: r, _loadImage: s } = this;
    if (this.localStyleID !== e.styleID && (this.dirty = !0, this.localStyleID = e.styleID), !this.dirty && t)
      return;
    const { width: n, height: a } = this.measureText();
    r.width = s.width = Math.ceil(Math.max(1, n)), r.height = s.height = Math.ceil(Math.max(1, a)), this._updateID++;
    const o = this._updateID;
    await new Promise((h) => {
      s.onload = async () => {
        if (o < this._updateID) {
          h();
          return;
        }
        await e.onBeforeDraw(), r.src = s.src, s.onload = null, s.src = "", this.updateTexture(), h();
      };
      const l = new XMLSerializer().serializeToString(this._svgRoot);
      s.src = `data:image/svg+xml;charset=utf8,${encodeURIComponent(l)}`;
    });
  }
  /** The raw image element that is rendered under-the-hood. */
  get source() {
    return this._image;
  }
  /**
   * Update the texture resource.
   * @private
   */
  updateTexture() {
    const { style: t, texture: e, _image: r, resolution: s } = this, { padding: n } = t, { baseTexture: a } = e;
    e.trim.width = e._frame.width = r.width / s, e.trim.height = e._frame.height = r.height / s, e.trim.x = -n, e.trim.y = -n, e.orig.width = e._frame.width - n * 2, e.orig.height = e._frame.height - n * 2, this._onTextureUpdate(), a.setRealSize(r.width, r.height, s), this.dirty = !1;
  }
  /**
   * Renders the object using the WebGL renderer
   * @param {PIXI.Renderer} renderer - The renderer
   * @private
   */
  _render(t) {
    this._autoResolution && this._resolution !== t.resolution && (this._resolution = t.resolution, this.dirty = !0), this.updateText(!0), super._render(t);
  }
  /**
   * Renders the object using the Canvas Renderer.
   * @private
   * @param {PIXI.CanvasRenderer} renderer - The renderer
   */
  _renderCanvas(t) {
    this._autoResolution && this._resolution !== t.resolution && (this._resolution = t.resolution, this.dirty = !0), this.updateText(!0), super._renderCanvas(t);
  }
  /**
   * Get the local bounds.
   * @param {PIXI.Rectangle} rect - Input rectangle.
   * @returns {PIXI.Rectangle} Local bounds
   */
  getLocalBounds(t) {
    return this.updateText(!0), super.getLocalBounds(t);
  }
  _calculateBounds() {
    this.updateText(!0), this.calculateVertices(), this._bounds.addQuad(this.vertexData);
  }
  /**
   * Handle dirty style changes
   * @private
   */
  _onStyleChange() {
    this.dirty = !0;
  }
  /**
   * Destroy this Text object. Don't use after calling.
   * @param {boolean|object} options - Same as Sprite destroy options.
   */
  destroy(t) {
    var r, s, n, a, o;
    typeof t == "boolean" && (t = { children: t }), t = Object.assign({}, br.defaultDestroyOptions, t), super.destroy(t);
    const e = null;
    this.ownsStyle && ((r = this._style) == null || r.cleanFonts()), this._style = e, (s = this._svgRoot) == null || s.remove(), this._svgRoot = e, (n = this._domElement) == null || n.remove(), this._domElement = e, (a = this._foreignObject) == null || a.remove(), this._foreignObject = e, (o = this._styleElement) == null || o.remove(), this._styleElement = e, this._loadImage.src = "", this._loadImage.onload = null, this._loadImage = e, this._image.src = "", this._image = e;
  }
  /**
   * Get the width in pixels.
   * @member {number}
   */
  get width() {
    return this.updateText(!0), Math.abs(this.scale.x) * this._image.width / this.resolution;
  }
  set width(t) {
    this.updateText(!0);
    const e = Ne(this.scale.x) || 1;
    this.scale.x = e * t / this._image.width / this.resolution, this._width = t;
  }
  /**
   * Get the height in pixels.
   * @member {number}
   */
  get height() {
    return this.updateText(!0), Math.abs(this.scale.y) * this._image.height / this.resolution;
  }
  set height(t) {
    this.updateText(!0);
    const e = Ne(this.scale.y) || 1;
    this.scale.y = e * t / this._image.height / this.resolution, this._height = t;
  }
  /** The base style to render with text. */
  get style() {
    return this._style;
  }
  set style(t) {
    this._style !== t && (t = t || {}, t instanceof Mn ? (this.ownsStyle = !1, this._style = t) : t instanceof He ? (console.warn("[HTMLText] Cloning TextStyle, if this is not what you want, use HTMLTextStyle"), this.ownsStyle = !0, this._style = Mn.from(t)) : (this.ownsStyle = !0, this._style = new Mn(t)), this.localStyleID = -1, this.dirty = !0);
  }
  /**
   * Contents of text. This can be HTML text and include tags.
   * @example
   * const text = new HTMLText('This is a <em>styled</em> text!');
   * @member {string}
   */
  get text() {
    return this._text;
  }
  set text(t) {
    t = String(t === "" || t === null || t === void 0 ? " " : t), t = this.sanitiseText(t), this._text !== t && (this._text = t, this.dirty = !0);
  }
  /**
   * The resolution / device pixel ratio of the canvas.
   * This is set to automatically match the renderer resolution by default, but can be overridden by setting manually.
   * @member {number}
   * @default 1
   */
  get resolution() {
    return this._resolution;
  }
  set resolution(t) {
    this._autoResolution = !1, this._resolution !== t && (this._resolution = t, this.dirty = !0);
  }
  /**
   * Sanitise text - replace `<br>` with `<br/>`, `&nbsp;` with `&#160;`
   * @param text
   * @see https://www.sitepoint.com/community/t/xhtml-1-0-transitional-xml-parsing-error-entity-nbsp-not-defined/3392/3
   */
  sanitiseText(t) {
    return t.replace(/<br>/gi, "<br/>").replace(/<hr>/gi, "<hr/>").replace(/&nbsp;/gi, "&#160;");
  }
};
Yi.defaultDestroyOptions = {
  texture: !0,
  children: !1,
  baseTexture: !0
}, /** Default maxWidth, set at construction */
Yi.defaultMaxWidth = 2024, /** Default maxHeight, set at construction */
Yi.defaultMaxHeight = 2024, /** Default autoResolution for all HTMLText objects */
Yi.defaultAutoResolution = !0;
function ec(i) {
  return i = i ?? [], Array.isArray(i) ? i : [i];
}
const rc = (i) => Object.prototype.toString.call(i);
function n0() {
}
const $s = (i) => typeof i == "function", a0 = (i) => typeof i == "string", ic = (i) => rc(i) === "[object Object]", o0 = (i) => rc(i) === "[object Undefined]";
function h0(i, t, e) {
  var r = e || {}, s = r.noTrailing, n = s === void 0 ? !1 : s, a = r.noLeading, o = a === void 0 ? !1 : a, h = r.debounceMode, l = h === void 0 ? void 0 : h, u, c = !1, d = 0;
  function f() {
    u && clearTimeout(u);
  }
  function p(y) {
    var v = y || {}, b = v.upcomingOnly, _ = b === void 0 ? !1 : b;
    f(), c = !_;
  }
  function m() {
    for (var y = arguments.length, v = new Array(y), b = 0; b < y; b++)
      v[b] = arguments[b];
    var _ = this, g = Date.now() - d;
    if (c)
      return;
    function w() {
      d = Date.now(), t.apply(_, v);
    }
    function R() {
      u = void 0;
    }
    !o && l && !u && w(), f(), l === void 0 && g > i ? o ? (d = Date.now(), n || (u = setTimeout(l ? R : w, i))) : w() : n !== !0 && (u = setTimeout(l ? R : w, l === void 0 ? i - g : i));
  }
  return m.cancel = p, m;
}
let l0 = (i = 21) => crypto.getRandomValues(new Uint8Array(i)).reduce((t, e) => (e &= 63, e < 36 ? t += e.toString(36) : e < 62 ? t += (e - 26).toString(36).toUpperCase() : e > 62 ? t += "-" : t += "_", t), "");
function sc(i, t = {}) {
  for (const e in t)
    i.baseTexture[e] = t[e];
}
function Ce(i) {
  return typeof i == "string" ? O.from(i) : i;
}
function u0(i) {
  return Object.keys(i || {}).some((t) => t.startsWith("on"));
}
var pi = {};
function nc(i, t, e, r) {
  var a;
  const s = Zh();
  function n() {
    var o;
    e && r !== e && ((o = i[`__vp_scope_${t}`]) == null || o.stop());
    for (const [h, l] of Object.entries(r))
      i[t][h] = l;
  }
  return s.run(() => {
    Qh(n), Jh(n);
  }), (a = i.on) == null || a.call(i, "destroyed", () => s.stop()), i[`__vp_scope_${t}`] = s, !0;
}
function c0(i, t, e, r, s) {
  switch (e) {
    case t:
      return ic(s) ? nc(i, t, r, s) : d0(i, t, s);
    case `${t}X`:
      return Gr(i[t], "x", () => i[t].x = s);
    case `${t}Y`:
      return Gr(i[t], "y", () => i[t].y = s);
  }
  return !1;
}
function Gr(i, t, e) {
  const r = `_vp_initkey_${t}`;
  function s() {
    e();
  }
  return i[r] ? s() : (Reflect.set(i, r, !0), Jh(s)), !0;
}
function d0(i, t, e) {
  const [r, s, n] = Array.isArray(e) ? e : [e, e, e];
  return Gr(i[t], t, () => {
    var a;
    return (a = i[t]) == null ? void 0 : a.set(r, s, n);
  }), !0;
}
function Ie(i, t, e) {
  return i[`_vp_skip_first_set_${t}`] ? Gr(i, t, e) : i[`_vp_skip_first_set_${t}`] = !0, !0;
}
var f0 = {
  name: "Container",
  createElement: () => new Ft()
}, p0 = {
  name: "ParticleContainer",
  createElement: (i) => new P_(
    i["max-size"] || i.maxSize,
    i.properties
  ),
  patchProp(i, t, e, r) {
    switch (t) {
      case "max-size":
      case "properties":
        break;
      default:
        Kt(i, t, e, r);
    }
  }
}, m0 = {
  name: "Sprite",
  createElement: (i) => new de(Ce(i.texture)),
  remove(i) {
    const t = i.texture;
    t == null || t.baseTexture.destroy(), i.destroy();
  }
}, g0 = {
  name: "SimpleMesh",
  createElement: (i) => new C_(Ce(i.texture))
}, y0 = {
  name: "Graphics",
  createElement: (i) => new Qa(i.geometry)
}, _0 = {
  name: "Text",
  createElement: (i) => new bi(
    i.text,
    i.style,
    i.canvas
  ),
  patchProp(i, t, e, r) {
    switch (t) {
      case "text":
        Ie(i, t, () => i.text = r);
        break;
      case "style":
        Ie(i, t, () => nc(i, t, e, r));
        break;
      default:
        Kt(i, t, e, r);
    }
  }
}, v0 = {
  name: "BitmapText",
  createElement: (i) => new tc(
    i.text,
    i.style
  ),
  patchProp(i, t, e, r) {
    switch (t) {
      case "text":
        Ie(i, t, () => i.text = r);
        break;
      case "style":
        break;
      case "dirty":
      case "roundPixels":
        zr(i, t, e, r);
        break;
      default:
        Kt(i, t, e, r);
    }
  }
}, x0 = {
  name: "TilingSprite",
  createElement: (i) => new Ja(
    Ce(i.texture),
    i.width,
    i.height
  ),
  patchProp(i, t, e, r) {
    switch (t) {
      case "width":
      case "height":
        Ie(i, t, () => i[t] = r);
        break;
      case "uvRespectAnchor":
        zr(i, t, e, r);
        break;
      default:
        Kt(i, t, e, r);
    }
  }
}, b0 = {
  name: "AnimatedSprite",
  createElement: (i) => new Cs(
    i.textures.map(Ce),
    i["auto-update"] || i.autoUpdate
  ),
  patchProp(i, t, e, r) {
    switch (t) {
      case "textures":
        Ie(i, t, () => {
          i.textures = r.map(Ce), i.loop && i.gotoAndPlay(0);
        });
        break;
      case "playing":
        const s = r === "" || !!r;
        Gr(i, t, () => s ? i.play() : i.stop());
        break;
      case "gotoAndPlay":
        Gr(i, t, () => i.gotoAndPlay(r));
        break;
      case "loop":
      case "updateAnchor":
        zr(i, t, e, r);
        break;
      case "onComplete":
      case "onFrameChange":
      case "onLoop":
        Reflect.set(i, t, r);
        break;
      default:
        Kt(i, t, e, r);
    }
  }
}, T0 = {
  name: "Mesh",
  createElement: (i) => new kr(
    i.geometry,
    i.shader,
    i.state,
    i.drawMode
  ),
  patchProp(i, t, e, r) {
    switch (t) {
      case "geometry":
      case "shader":
      case "state":
      case "drawMode":
        Ie(i, t, () => i[t] = r);
        break;
      case "roundPixels":
        zr(i, t, e, r);
        break;
      default:
        Kt(i, t, e, r);
    }
  }
}, E0 = {
  name: "NineSlicePlane",
  createElement: (i) => new S_(
    Ce(i.texture)
  ),
  patchProp(i, t, e, r) {
    switch (t) {
      case "roundPixels":
      case "autoResize":
        zr(i, t, e, r);
        break;
      default:
        Kt(i, t, e, r);
    }
  }
}, w0 = {
  name: "SimplePlane",
  createElement: (i) => new Gu(
    Ce(i.texture),
    i.width,
    i.height
  )
}, A0 = {
  name: "SimpleRope",
  createElement: (i) => new I_(
    Ce(i.texture),
    i.points
  ),
  patchProp(i, t, e, r) {
    switch (t) {
      case "texture":
      case "points":
        break;
      default:
        Kt(i, t, e, r);
    }
  }
}, S0 = {
  name: "BlurFilter",
  createElement: (i) => new Eu(
    i.blur,
    i.quality,
    i.resolution
  )
}, C0 = {
  name: "AlphaFilter",
  createElement: (i) => new Tu(i.alpha)
}, I0 = {
  name: "DisplacementFilter",
  createElement: (i) => new wu(
    i.sprite,
    i.scale
  ),
  patchProp(i, t, e, r) {
    switch (t) {
      case "sprite":
      case "scale":
        Ie(i, t, () => i.scale = r);
        break;
      default:
        Kt(i, t, e, r);
    }
  }
}, P0 = {
  name: "ColorMatrixFilter",
  createElement: () => new bs()
}, R0 = {
  name: "NoiseFilter",
  createElement: (i) => new Su(
    i.noise,
    i.seed
  ),
  patchProp(i, t, e, r) {
    switch (t) {
      case "noise":
      case "seed":
        Ie(i, t, () => i[t] = r);
        break;
      default:
        Kt(i, t, e, r);
    }
  }
}, M0 = {
  name: "FXAAFilter",
  createElement: () => new Au()
}, B0 = [
  f0,
  p0,
  m0,
  g0,
  y0,
  _0,
  v0,
  x0,
  b0,
  T0,
  E0,
  w0,
  A0,
  S0,
  C0,
  I0,
  P0,
  R0,
  M0
];
function Xh(i) {
  const { createElement: t, name: e } = i;
  function r(...s) {
    const n = t(...s);
    return n._vp_name = e, n;
  }
  i.createElement = r, pi[e] = i;
}
function Wh(i) {
  Array.isArray(i) ? i.forEach(Xh) : Xh(i);
}
function D0(i) {
  const t = ["createComment", "insertStaticContent", "createText", "querySelector", "createElement"];
  for (const e in i) {
    if (t.includes(e))
      continue;
    const r = i[e];
    if (e === "patchProp") {
      i[e] = (s, n, ...a) => {
        var h;
        const o = (h = pi[s._vp_name]) == null ? void 0 : h[e];
        return n = Dn(n), o ? o(s, n, ...a) : r(s, n, ...a);
      };
      continue;
    }
    i[e] = (s, ...n) => {
      var o;
      const a = (o = pi[s._vp_name]) == null ? void 0 : o[e];
      return a ? a == null ? void 0 : a(s, ...n) : r(s, ...n);
    };
  }
  return i;
}
function F0(i) {
  const t = i.createApp, e = i.render;
  function r(...n) {
    const a = t(...n);
    return Object.assign(a.config.compilerOptions, {
      isCustomElement: Nc
    }), a;
  }
  function s(...n) {
    return e(...n);
  }
  Wh(B0), Object.assign(i, { createApp: r, render: s, use: Wh });
}
var ac = class extends de {
  constructor() {
    super(...arguments), Xs(this, "visible", !1), Xs(this, "renderable", !1), Xs(this, "_vp_empty", !0);
  }
  render() {
  }
};
function O0(i, t, e) {
  t.filters ?? (t.filters = []);
  function r() {
    var n;
    const s = t.filters.indexOf(i);
    (n = t.filters) == null || n.splice(s >>> 0, 1);
  }
  i.parent = t, i.destroy = r, t.filters.push(i);
}
function N0(i) {
  var e;
  const t = i.parent.filters.indexOf(i);
  return i.parent.filters.length <= t + 1 ? null : (e = i.parent.filters) == null ? void 0 : e[t + 1];
}
function L0(i, t, e) {
  e ? t == null || t.addChildAt(i, t.getChildIndex(e)) : i && t.addChild(i);
}
function U0(i) {
  const t = i.parent.getChildIndex(i);
  return i.parent.children.length <= t + 1 ? null : i.parent.getChildAt(t + 1) ?? null;
}
var k0 = ["accessible", "cullable", "renderable", "visible", "isMask"], G0 = ["position", "scale", "pivot", "skew", "anchor", "tilePosition", "tileScale"];
function Kt(i, t, e, r) {
  $0(i, t, e, r) || H0(i, t, e, r) || k0.includes(t) && zr(i, t, e, r) || V0(i, t, e, r) || z0(i, t, e, r) || Reflect.set(i, t, r);
}
function H0(i, t, e, r) {
  return t === "texture" ? Ie(i, t, () => i.texture = Ce(r)) : t === "textureOptions" ? (sc(i.texture, r), !0) : !1;
}
function $0(i, t, e, r) {
  if (t === "onRender" && !e && $s(r)) {
    const s = Zh();
    return s.run(() => Qh(() => r(i))), i.on("destroyed", () => s.stop()), !0;
  }
  return !1;
}
function V0(i, t, e, r) {
  for (const s of G0)
    if (t.startsWith(s))
      return c0(i, s, t, e, r);
  return !1;
}
function z0(i, t, e, r) {
  if (!t.startsWith("on"))
    return !1;
  const s = t.slice(2).toLowerCase();
  return e && i.off(s, e), r && (i == null || i.on(s, r)), !0;
}
function zr(i, t, e, r) {
  return i[t] = r === "" || !!r, !0;
}
function X0(i, t, e, r, s) {
  let n;
  t.startsWith(i) ? (t = Dn(t), n = pi[t.slice(i.length)].createElement) : (t = Dn(t), t = t.charAt(0).toUpperCase() + t.slice(1), n = pi[t].createElement), n || (Fa(`Unknown element ${t}`), n = () => new Ft());
  const a = n(s ?? {});
  return a instanceof st && u0(s) && a.eventMode === "auto" && (a.eventMode = "static"), a instanceof Pt && (a._vp_filter = !0), Kh(a), a;
}
function W0(i) {
  return i == null ? void 0 : i.parent;
}
function j0(i) {
  return i = i.replace(/\\n/g, `
`), i ? new bi(i) : new ac(O.EMPTY);
}
function Y0() {
  return new ac(O.EMPTY);
}
function q0(i) {
  i.destroy();
}
function K0(i, t, e) {
  Reflect.get(i, "_vp_filter") ? O0(i, t) : L0(i, t, e);
}
function Z0(i) {
  return Reflect.get(i, "_vp_filter") ? N0(i) : U0(i);
}
function Q0(i, t, e) {
  e = e.replace(/\\n/g, `
`), t instanceof bi || t instanceof tc ? t.text = e.trim() : Fa(`Text is only supported with ${i}-text element`);
}
var J0 = {
  createElement: X0,
  parentNode: W0,
  createText: j0,
  createComment: Y0,
  remove: q0,
  insert: K0,
  nextSibling: Z0,
  setText: Q0
};
function tv(i = {}) {
  const { createElement: t, setText: e, ...r } = J0, { prefix: s = "pixi" } = i, n = D0({
    // @ts-expect-error
    createElement: (...a) => t(s, ...a),
    setElementText: (...a) => e(s, ...a),
    setText: (...a) => e(s, ...a),
    patchProp: Kt,
    ...r
  });
  return gc(n);
}
var to = tv();
F0(to);
var ev = to.createApp;
to.render;
var eo = Symbol("pixi_application");
function rv() {
  const i = lt(Ps(eo, void 0)), t = Xt({
    get: () => i.value,
    set: (e) => {
      e.app && (i.value = e.app);
    }
  });
  return mi(() => {
    i.value || console.warn("not found <Application />, you can use ref for referencing or create a new component to be used as a child element of <Application /> with PIXI composition API.");
  }), t;
}
function oc(i, t) {
  const e = t == null ? void 0 : t.app;
  e && (i.config.globalProperties = e.config.globalProperties, Object.assign(i._context, e._context));
}
var iv = Yt({
  props: {
    antialias: { type: Boolean, default: !0 },
    autoDensity: { type: Boolean, default: !0 },
    autoStart: { type: Boolean, default: !0 },
    background: [Number, String, Array],
    backgroundColor: [Number, String, Array],
    backgroundAlpha: { type: Number, default: 1 },
    clearBeforeRender: { type: Boolean, default: !0 },
    forceCanvas: Boolean,
    alpha: Number,
    depth: Boolean,
    desynchronized: Boolean,
    failIfMajorPerformanceCaveat: Boolean,
    powerPreference: String,
    premultipliedAlpha: Boolean,
    preserveDrawingBuffer: Boolean,
    stencil: { type: Boolean, default: !0 },
    width: Number,
    height: Number,
    resolution: Number,
    resizeTo: Object
  },
  setup(i, { slots: t, expose: e }) {
    const { appContext: r } = Ba(), s = lt(), n = lt();
    let a;
    function o() {
      var d;
      ((d = s.value) == null ? void 0 : d.getContext("webgl", {
        alpha: i.alpha,
        antialias: i.antialias,
        depth: i.depth,
        desynchronized: i.desynchronized,
        failIfMajorPerformanceCaveat: i.failIfMajorPerformanceCaveat,
        powerPreference: i.powerPreference,
        premultipliedAlpha: i.premultipliedAlpha,
        preserveDrawingBuffer: i.preserveDrawingBuffer,
        stencil: i.stencil
      })) || Fa("could not crate webgl context");
      const c = new Pu({ view: s.value, ...i });
      n.value = Kh(c), a = ev({
        render: () => Fr(t, "default")
      }), oc(a, r), a.provide(eo, n), a.mount(n.value.stage);
    }
    function h() {
      var u;
      a == null || a.unmount(), a = void 0, (u = n.value) == null || u.destroy(), n.value = void 0;
    }
    function l() {
      if (!n.value)
        return;
      const u = i.width || n.value.renderer.width, c = i.height || n.value.renderer.height;
      n.value.renderer.resize(u, c);
    }
    return jh(
      () => [i.width, i.height],
      h0(50, l)
    ), mi(o), Yh(h), e({ canvas: s, app: n }), () => Da("canvas", { ref: s });
  }
}), sv = Yt({
  props: {
    tag: String,
    root: Object
  },
  setup(i, { slots: t, attrs: e }) {
    const { appContext: r } = Ba(), s = document.createElement("div"), n = lt(Ps(eo)), a = lt(), o = i.root || n.value.view.parentNode;
    function h() {
      if (!o)
        throw new Error("could not find root");
      const u = yc({
        render: () => Da(i.tag || "div", e, t)
      });
      oc(u, r), u.mount(s), o.appendChild(s.firstChild), a.value = u;
    }
    function l() {
      a.value && (a.value.unmount(), a.value = void 0);
    }
    return mi(h), Yh(l), () => null;
  }
}), nv = {
  onResolved: Function,
  onProgress: Function,
  resources: {
    type: [Object, Array],
    required: !0
  },
  options: {
    type: Object,
    default: () => ({})
  },
  bundleIds: String
};
Yt({
  props: nv,
  setup(i, { slots: t }) {
    const e = lt(!1), r = lt(), s = lt(0), n = i.bundleIds || l0(5);
    function a(l) {
      var u;
      s.value = l, (u = i.onProgress) == null || u.call(i, l);
    }
    async function o() {
      var u;
      Le.addBundle(n, await av(i.resources));
      const l = await Le.loadBundle(n, a);
      for (const c in l)
        sc(l[c], i.options);
      r.value = l, (u = i.onResolved) == null || u.call(i, l);
    }
    async function h() {
      const l = Le.resolver._assetMap;
      for (const u in r.value)
        delete l[u], delete l[`${n}-${u}`];
      await Le.unloadBundle(n);
    }
    return jh(
      () => [i.resources, i.bundleIds],
      () => {
        e.value = !0, o().finally(() => e.value = !1);
      },
      { deep: !0, immediate: !0 }
    ), qh(h), () => e.value ? Fr(t, "fallback", { progress: s.value }) : Fr(t, "default", { textures: r.value });
  }
});
async function Bn(i) {
  const t = await i;
  return a0(t) ? t : t.default;
}
async function av(i) {
  const t = {};
  for (const e in i) {
    let r = i[e];
    if (r = r.default || r, Array.isArray(r)) {
      t[r[0]] = await Bn(r[1]);
      continue;
    }
    Array.isArray(i) ? t[r] = await Bn(r) : t[e] = await Bn(r);
  }
  return t;
}
function ov([i, t, e, r]) {
  const s = (u, c) => 1 - 3 * c + 3 * u, n = (u, c) => 3 * c - 6 * u, a = (u) => 3 * u, o = (u, c, d) => ((s(c, d) * u + n(c, d)) * u + a(c)) * u, h = (u, c, d) => 3 * s(c, d) * u * u + 2 * n(c, d) * u + a(c), l = (u) => {
    let c = u;
    for (let d = 0; d < 4; ++d) {
      const f = h(c, i, e);
      if (f === 0)
        return c;
      const p = o(c, i, e) - u;
      c -= p / f;
    }
    return c;
  };
  return (u) => i === t && e === r ? u : o(l(u), t, r);
}
function hv(i) {
  return new Promise((t) => setTimeout(t, i));
}
function lv(i) {
  return i;
}
function uv(i, t, e) {
  return i + e * (t - i);
}
function cv(i) {
  try {
    return i();
  } catch {
  }
}
function ro() {
  let i, t;
  const e = new Promise((r, s) => {
    i = r, t = s;
  });
  return e.resolve = (r) => {
    i(r);
  }, e.reject = t, e;
}
var hc = [
  "pivot",
  "anchor",
  "position",
  "scale",
  "tileScale",
  "tilePosition",
  "skew",
  "tile"
];
function lc(i, t, e) {
  const r = hc.find((s) => t.startsWith(s));
  if (!r) {
    i[t] = e;
    return;
  }
  switch (t) {
    case r:
      return typeof e == "object" ? dv(i, r, e) : fv(i, r, e);
    case `${r}X`:
      return Ra(i[r], "x", e);
    case `${r}Y`:
      return Ra(i[r], "y", e);
  }
}
function dv(i, t, e) {
  for (const r in e)
    Ra(i[t], r, e[r]);
}
function Ra(i, t, e) {
  i[t] !== void 0 && Reflect.set(i, t, e);
}
function fv(i, t, e) {
  i[t].set(e, e);
}
function pv(i, t) {
  const e = ["delay", "duration", "ease"];
  for (const r of t) {
    const s = Object.keys(r).filter((n) => !e.includes(n));
    for (const n of s)
      lc(i, n, r[n]);
  }
}
function mv(i, t) {
  const e = hc.find((r) => t.startsWith(r));
  if (!e)
    return i[t];
  switch (t) {
    case e:
      return i[e].x || i[e].y;
    case `${e}X`:
      return i[e].x;
    case `${e}Y`:
      return i[e].y;
  }
}
async function Tr(i, t, e) {
  const r = `on${e[0].toLocaleUpperCase()}${e.slice(1)}`, s = t[e] || t[r], n = i.filters || [];
  if (s) {
    if ($s(s)) {
      s(i);
      return;
    }
    n.forEach((a) => Tr(a, a, e)), pv(i, ec(s));
  }
}
async function Ma(i, t, e, r, s) {
  const n = `on${e[0].toLocaleUpperCase()}${e.slice(1)}`, a = t[e] || t[n];
  for (const c of i.filters || [])
    Ma(c, c, e, n0);
  if (!a)
    return;
  s = s || (i._v_t_context ?? (i._v_t_context = { id: 0, time: 0 }));
  const o = ++s.id, h = () => o !== s.id;
  if ($s(a))
    return e === "enter" ? yv(a(i, r), r, h, s) : _v(a(i, r), r, h, s);
  const u = ec(a).filter(Boolean).map((c) => {
    var f;
    const d = t.duration || c.duration;
    return gv(
      i,
      ((f = vv(d)) == null ? void 0 : f[e]) ?? 1e3,
      c,
      h
    );
  });
  await Promise.all(u), r();
}
async function gv(i, t, e, r) {
  e.delay && await hv(e.delay);
  const s = ["delay", "duration", "ease"], n = Object.keys(e).filter((u) => !s.includes(u)), a = Date.now(), o = Date.now() + t;
  e.ease ?? (e.ease = lv);
  const h = $s(e.ease) ? e.ease : ov(e.ease);
  function l(u) {
    const c = mv(i, u), d = Number(e[u]), f = ro();
    if (isNaN(d) || o0(c))
      throw new Error(`Transition - {${u}} not valid field`);
    function p() {
      if (r != null && r())
        return f.resolve();
      const m = Date.now(), y = h((m - a) / t);
      cv(() => lc(i, u, uv(c, d, y))), m > o && f.resolve();
    }
    return ot.shared.add(p), f.then(() => ot.shared.remove(p)), f;
  }
  await Promise.all(n.map(l));
}
async function yv(i, t, e, r) {
  if (!i)
    return;
  const { duration: s, tick: n } = i, a = Date.now() - r.time, o = Date.now() + s - r.time, h = ro();
  function l() {
    if (e())
      return h.resolve();
    const u = Date.now(), c = (u - a) / s;
    r.time = u - a, n(c), o > u ? requestAnimationFrame(l) : h.resolve();
  }
  return l(), ot.shared.add(l), h.then(() => ot.shared.remove(l)), h.then(() => t()), h;
}
async function _v(i, t, e, r) {
  if (!i)
    return;
  const { duration: s, tick: n } = i, a = Date.now() + s, o = ro();
  function h() {
    if (e != null && e())
      return o.resolve();
    const l = Date.now(), u = (a - l) / s;
    r.time = a - l, n(u), a > l ? requestAnimationFrame(h) : o.resolve();
  }
  return ot.shared.add(h), o.then(() => ot.shared.remove(h)), o.then(() => t()), o;
}
function vv(i) {
  if (i == null)
    return null;
  if (ic(i))
    return i;
  {
    const t = Number(i);
    return { enter: t, leave: t };
  }
}
var uc = {
  duration: [Number, Object],
  beforeEnter: [Function, Object, Array],
  enter: [Function, Object, Array],
  afterEnter: [Function, Object, Array],
  enterCancelled: [Function, Object, Array],
  beforeLeave: [Function, Object, Array],
  leave: [Function, Object, Array],
  afterLeave: [Function, Object, Array],
  onBeforeEnter: Function,
  onEnter: Function,
  onAfterEnter: Function,
  onEnterCancelled: Function,
  onBeforeLeave: Function,
  onLeave: Function,
  onAfterLeave: Function,
  appear: Boolean
};
Yt({
  name: "PTransition",
  props: uc,
  setup(i, { slots: t }) {
    const e = cc(i, { id: 0, time: 0 });
    return () => Da(fc, e, t);
  }
});
function cc(i, t) {
  function e(l) {
    Tr(l, i, "beforeEnter");
  }
  function r(l, u) {
    Ma(l, i, "enter", u, t);
  }
  function s(l) {
    Tr(l, i, "afterEnter");
  }
  function n(l) {
    Tr(l, i, "afterEnter");
  }
  function a(l) {
    Tr(l, i, "beforeLeave");
  }
  async function o(l, u) {
    Ma(l, i, "leave", u, t);
  }
  function h(l) {
    Tr(l, i, "afterLeave");
  }
  return {
    css: !1,
    onBeforeEnter: e,
    onEnter: r,
    onAfterEnter: s,
    onEnterCancelled: n,
    onBeforeLeave: a,
    onLeave: o,
    onAfterLeave: h,
    appear: i.appear
  };
}
Yt({
  name: "PTransitionGroup",
  props: uc,
  setup(i, { slots: t }) {
    const e = Ba(), r = pc(), s = {};
    let n, a;
    function o(h, l) {
      if (l == null)
        return;
      s[l] ?? (s[l] = { id: 0, time: 0 });
      const u = cc(i, s[l]), c = _c(h, u, r, e);
      vc(h, c);
    }
    return () => {
      n = a, a = t.default ? mc(t.default()) : [];
      for (let h = 0; h < a.length; h++) {
        const l = a[h];
        o(l, l.key);
      }
      if (n)
        for (let h = 0; h < n.length; h++) {
          const l = n[h];
          o(l, l.key);
        }
      return nr(Ue, null, a);
    };
  }
});
var wt;
((i) => {
  ((t) => {
    ((e) => {
      e.InjectionKey = Symbol("Flow.Entity.Node");
    })(t.Node || (t.Node = {})), ((e) => {
      e.InjectionKey = Symbol("Flow.Entity.Edge");
    })(t.Edge || (t.Edge = {}));
  })(i.Entity || (i.Entity = {})), ((t) => {
    ((e) => {
      e.InjectionKey = Symbol("Flow.UI.Debugger");
    })(t.Debugger || (t.Debugger = {})), ((e) => {
      ((r) => {
        r.Size = Symbol(
          "Flow.UI.Screen.Viewport.Size"
        ), r.NodeBoundary = Symbol(
          "Flow.UI.Screen.Viewport.NodeBoundary"
        ), r.Gap = Symbol(
          "Flow.UI.Screen.Viewport.Gap"
        ), r.Offset = Symbol(
          "Flow.UI.Screen.Viewport.Offset"
        );
      })(e.Viewport || (e.Viewport = {}));
    })(t.Screen || (t.Screen = {}));
  })(i.UI || (i.UI = {}));
})(wt || (wt = {}));
const xv = ["id"], bv = /* @__PURE__ */ Yt({
  __name: "Window",
  props: {
    devtools: { type: Boolean, default: !1 },
    toolbar: { type: Boolean, default: !0 },
    zoomable: { type: Boolean, default: !0 },
    autoLayout: { type: Boolean, default: !0 },
    toolbarPosition: { default: "bottom-right" },
    toolbarDirection: { default: "horizontal" },
    initialScale: { default: 1 },
    acceleration: { default: "default" },
    debugOptions: {}
  },
  setup(i) {
    const t = i, e = lt(), r = lt(), s = nl("default"), n = tl(rl(e)), a = Xt({
      get() {
        return Number(t.initialScale) || 1;
      },
      set(o) {
        a.value = o;
      }
    });
    return (o, h) => {
      var l;
      return It(), Bt("div", {
        id: `flow-${Mt(Rc)()}`,
        ref_key: "wrapperRef$",
        ref: e,
        class: os([o.$style["flow-container"], o.$style.behavior, o.$style[Mt(s)()]])
      }, [
        nr(Mt(iv), {
          class: os(o.$style["flow-viewport"]),
          width: n.width,
          height: n.height,
          "background-alpha": 0,
          resolution: 4,
          antialias: !0,
          "power-preference": o.acceleration,
          "resize-to": e.value
        }, {
          default: Fn(() => [
            t.devtools && Mt(Dc) ? (It(), io(Mt(as).Helper.DevTool, { key: 0 })) : Te("", !0),
            nr(Mt(as).Screen.Viewport, {
              ref_key: "viewportRef$",
              ref: r,
              width: n.width,
              height: n.height,
              scale: a.value,
              "debug-options": t.debugOptions,
              "auto-layout": t.autoLayout,
              "initial-scale": t.initialScale,
              "cursor-mode": Mt(s)
            }, {
              default: Fn(() => [
                Fr(o.$slots, "default", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["width", "height", "scale", "debug-options", "auto-layout", "initial-scale", "cursor-mode"])
          ]),
          _: 3
        }, 8, ["class", "width", "height", "power-preference", "resize-to"]),
        t.toolbar ? (It(), io(Mt(as).Layout.Toolbar, {
          key: 0,
          disabled: ((l = r.value) == null ? void 0 : l.isPanning) === !0
        }, null, 8, ["disabled"])) : Te("", !0)
      ], 10, xv);
    };
  }
}), Tv = "_behavior_1wvd5_1", Ev = "_clickable_1wvd5_1", wv = "_disabled_1wvd5_4", Av = "_draggable_1wvd5_7", Sv = "_move_1wvd5_7", Cv = "_loading_1wvd5_10", Iv = {
  behavior: Tv,
  clickable: Ev,
  disabled: wv,
  draggable: Av,
  move: Sv,
  loading: Cv,
  "flow-container": "_flow-container_1wvd5_14",
  "flow-viewport": "_flow-viewport_1wvd5_21"
}, Pv = {
  $style: Iv
}, Rv = /* @__PURE__ */ Oa(bv, [["__cssModules", Pv], ["__scopeId", "data-v-382da9eb"]]), Mv = ["width", "height"], Bv = ["x", "y", "text"], Dv = /* @__PURE__ */ Yt({
  __name: "Viewport",
  props: {
    width: {},
    height: {},
    scale: { default: 1 },
    cursorMode: {},
    gap: { default: () => ({
      x: 120,
      y: 48
    }) },
    autoLayout: { type: Boolean },
    initialScale: {},
    debugOptions: {}
  },
  setup(i, { expose: t }) {
    const e = i, r = Ac(), s = lt(/* @__PURE__ */ new Map()), n = lt(/* @__PURE__ */ new Map()), a = lt(!1), o = lt({ x: 0, y: 0 }), h = lt(), l = lt({
      x: 0,
      y: 0
    }), u = lt({
      x: 0,
      y: 0
    }), c = Xt(() => ({
      x: e.initialScale === "cover" ? (e.width - m.value.width) / 2 : 0,
      y: e.initialScale !== "contain" ? (e.height - m.value.height) / 2 : 0
    })), d = Xt(() => ({
      x: Number(e.gap) || e.gap.x,
      y: Number(e.gap) || e.gap.y
    })), f = (x) => {
      var T;
      return Math.max(
        ((S, M) => x === "width" ? S.reduce(
          (C, E, I) => C + Math.max(...Mc(E, `boundingBox.${x}`)) + (I === 0 ? 2 : 1) * d.value[M],
          0
        ) : Math.max(
          ...S.map(
            (C) => C.reduce(
              (E, I, G) => E + I.boundingBox[x] + (G === 0 ? 2 : 1) * d.value[M],
              x === "height" ? 2 * d.value[M] : 0
            )
          )
        ))(
          Object.values(Sc([...((T = s.value) == null ? void 0 : T.values()) ?? []], "relativePosition.x")),
          x === "width" ? "x" : "y"
        ),
        e[x]
      );
    }, p = (x) => {
      var T;
      return Math.max(
        Math.abs(
          ((S, M) => ((C) => ((C == null ? void 0 : C.position[M]) ?? 0) + ((C == null ? void 0 : C.boundingBox[x]) ?? 0))(
            Vs(S, `position.${M}`)
          ) - ((C) => ((C == null ? void 0 : C.position[M]) ?? 0) + ((C == null ? void 0 : C.boundingBox[x]) ?? 0))(
            zs(S, `position.${M}`)
          ))([...((T = s.value) == null ? void 0 : T.values()) ?? []], x === "width" ? "x" : "y")
        ),
        e[x]
      );
    }, m = Xt(
      () => Object.fromEntries(
        ["width", "height"].map((x) => [
          x,
          e.autoLayout ? f(x) : p(x)
        ])
      )
    ), y = Xt(
      () => {
        var x;
        return ((T) => {
          var S, M, C, E;
          return {
            min: {
              x: ((S = zs(T, "x")) == null ? void 0 : S.x) ?? 0,
              y: ((M = zs(T, "y")) == null ? void 0 : M.y) ?? 0
            },
            max: {
              x: ((C = Vs(T, "x")) == null ? void 0 : C.x) ?? 0,
              y: ((E = Vs(T, "y")) == null ? void 0 : E.y) ?? 0
            }
          };
        })([...((x = s.value) == null ? void 0 : x.values()) ?? []].map((T) => T.position));
      }
    ), v = (x) => {
      var T, S, M, C, E;
      return {
        x: (e.autoLayout ? (((T = x.relativePosition) == null ? void 0 : T.x) ?? x.position.x) * (x.boundingBox.width + d.value.x) : x.position.x) + x.boundingBox.width / 2 + (((S = c.value) == null ? void 0 : S.x) ?? 0),
        y: (e.autoLayout ? (((M = m.value) == null ? void 0 : M.height) ?? 0) / 2 + (((C = x.relativePosition) == null ? void 0 : C.y) ?? x.position.y) * (x.boundingBox.height + d.value.y) : x.position.y) - x.boundingBox.height / 2 + (((E = c.value) == null ? void 0 : E.y) ?? 0)
      };
    }, b = () => {
      const x = h.value;
      x && (x.scale.x = Number(e.initialScale) || 1, x.scale.y = Number(e.initialScale) || 1);
    }, _ = (x) => {
      if (x.type === "pointerup" || x.type === "mouseup" || x.type === "pointerout" || x.type === "mouseout")
        Q.Vector.delta(
          Q.Vector.ORIGIN_2D,
          o.value
        ) > 1 && w(), a.value = !1, e.cursorMode.set("default");
      else if (x.type === "pointerdown" || x.type === "mousedown")
        a.value = "ready", e.cursorMode.set("move");
      else if (x.type === "pointermove" || x.type === "mousemove") {
        const T = h.value, S = {
          x: x.movementX * (e.width / document.documentElement.clientWidth),
          y: x.movementY * (e.height / document.documentElement.clientHeight)
        };
        if (a.value === "ready") {
          const M = Q.Vector.delta(Q.Vector.ORIGIN_2D, S), C = Q.Vector.delta(
            Q.Vector.ORIGIN_2D,
            o.value
          );
          M > 5 || C > 5 ? (a.value = !0, o.value = Q.Vector.ORIGIN_2D) : o.value = Q.Vector.add(o.value, S);
        }
        a.value === !0 && T && (o.value = S, g(S));
      }
    }, g = (x) => {
      const T = h.value, S = 50;
      if (T) {
        const M = {
          x: T.position.x + x.x,
          y: T.position.y + x.y
        }, C = {
          x: Q.clamp(M.x, e.width - m.value.width, 0),
          y: Q.clamp(
            M.y,
            (e.height - m.value.height) / 2,
            (m.value.height - e.height) / 2
          )
        };
        Q.Vector.delta(M, C) > 0.01 ? o.value = Q.Vector.clamp(
          Q.Vector.delta(C, M, !0),
          {
            x: -S,
            y: -S
          },
          {
            x: S,
            y: S
          }
        ) : o.value = Q.Vector.times(x, 9), Q.Vector.delta(M, C) > S ? T.position = {
          x: Q.clamp(
            M.x,
            e.width - m.value.width - S,
            S
          ),
          y: Q.clamp(
            M.y,
            (e.height - m.value.height) / 2 - S,
            (m.value.height - e.height) / 2 + S
          )
        } : T.position = M, u.value = T.position, l.value = {
          x: T.position.x,
          y: T.position.y
        };
      }
    }, w = () => {
      Q.Vector.delta(
        Q.Vector.ORIGIN_2D,
        o.value
      ) > 0.01 ? (o.value = {
        x: o.value.x * 0.1,
        y: o.value.y * 0.1
      }, h.value && g(o.value), requestAnimationFrame(w)) : (g(o.value), o.value = Q.Vector.ORIGIN_2D);
    }, R = () => {
      document.addEventListener("mouseup", _), document.addEventListener("pointerup", _), document.addEventListener("mousemove", _), document.addEventListener("pointermove", _);
    }, A = () => {
      s.value.forEach((x) => {
        const T = v(x);
        (a.value || Q.Vector.delta(Q.Vector.ORIGIN_2D, o.value) > 0 || !Cc(x.position, T)) && (s.value.get(x.id).position = T, b()), x.isPanning !== a.value && (s.value.get(x.id).isPanning = !!a.value);
      }), requestAnimationFrame(A);
    };
    return mi(() => {
      b(), A(), R();
    }), no(
      u,
      (x) => {
        var T;
        (T = s.value) == null || T.forEach((S) => s.value.get(S.id).offset = x);
      },
      { deep: !0, debounce: 10, maxWait: 500 }
    ), no(
      r,
      (x) => {
        x && (a.value = !1);
      },
      { debounce: 10, maxWait: 500 }
    ), t({
      nodes: s,
      edges: n,
      isPanning: a
    }), ze(wt.Entity.Node.InjectionKey, s), ze(wt.Entity.Edge.InjectionKey, n), ze(wt.UI.Screen.Viewport.Gap, d), ze(wt.UI.Screen.Viewport.Size, m), ze(wt.UI.Screen.Viewport.Offset, c), ze(wt.UI.Screen.Viewport.NodeBoundary, y), ze(wt.UI.Debugger.InjectionKey, e.debugOptions ?? {}), (x, T) => {
      var S;
      return It(), Bt("Container", {
        ref_key: "viewportRef$",
        ref: h,
        "sortable-children": !0,
        "sort-dirty": !0,
        width: m.value.width,
        height: m.value.height,
        onMousedown: _,
        onPointerdown: _
      }, [
        h.value ? (It(), Bt(Ue, { key: 0 }, [
          ge("Graphics", {
            onRender: T[0] || (T[0] = (M) => {
              var C, E;
              M.clear(), M.beginFill(
                (C = x.debugOptions) != null && C.showBoundingBox ? "0x56f071" : "0xffffff",
                (E = x.debugOptions) != null && E.showBoundingBox ? 1 : 1e-4
              ), M.drawRect(
                l.value.x * -1,
                l.value.y * -1,
                e.width,
                e.height
              ), M.endFill();
            })
          }, null, 32),
          (S = x.debugOptions) != null && S.showBoundingBox ? (It(), Bt("Text", {
            key: 0,
            x: l.value.x * -1,
            y: l.value.y * -1,
            style: {
              fontSize: 10,
              fontFamily: "monospace",
              whiteSpace: "pre",
              padding: 10,
              leading: 1.2,
              breakWords: !0,
              trim: !0
            },
            text: `
          #stage-interactive-area

          offset-x: ${c.value.x}
          offset-y: ${c.value.y}
          stage-offset-x: ${l.value.x}
          stage-offset-y: ${l.value.y}
          width: ${e.width}
          height: ${e.height}
        `
          }, null, 8, Bv)) : Te("", !0)
        ], 64)) : Te("", !0),
        Fr(x.$slots, "default")
      ], 40, Mv);
    };
  }
}), Fv = /* @__PURE__ */ Yt({
  __name: "Toolbar",
  props: {
    position: { default: "bottom-right" },
    direction: { default: "horizontal" },
    disabled: { type: Boolean }
  },
  setup(i) {
    const t = i;
    return (e, r) => (It(), Bt("div", {
      class: os([
        e.$style["flow-toolbar"],
        e.$style.wrapper,
        e.$style.flex,
        e.$style[t.direction],
        e.$style[t.position],
        {
          [e.$style.disabled]: t.disabled
        }
      ])
    }, [
      nr(so, {
        icon: "fa6-solid:arrows-up-down-left-right",
        variant: "square",
        level: "secondary"
      }),
      nr(so, {
        icon: "fa6-solid:expand",
        variant: "square",
        level: "secondary"
      })
    ], 2));
  }
}), Ov = "_wrapper_hrn7z_1", Nv = "_flex_hrn7z_12", Lv = "_horizontal_hrn7z_48", Uv = "_wrap_hrn7z_1", kv = "_vertical_hrn7z_60", Gv = "_grid_hrn7z_72", Hv = "_disabled_hrn7z_89", $v = {
  wrapper: Ov,
  flex: Nv,
  "col-1": "_col-1_hrn7z_12",
  "col-2": "_col-2_hrn7z_15",
  "col-3": "_col-3_hrn7z_18",
  "col-4": "_col-4_hrn7z_21",
  "col-5": "_col-5_hrn7z_24",
  "col-6": "_col-6_hrn7z_27",
  "col-7": "_col-7_hrn7z_30",
  "col-8": "_col-8_hrn7z_33",
  "col-9": "_col-9_hrn7z_36",
  "col-10": "_col-10_hrn7z_39",
  "col-11": "_col-11_hrn7z_42",
  "col-12": "_col-12_hrn7z_45",
  horizontal: Lv,
  wrap: Uv,
  vertical: kv,
  grid: Gv,
  "flow-toolbar": "_flow-toolbar_hrn7z_78",
  disabled: Hv,
  "top-left": "_top-left_hrn7z_94",
  "top-center": "_top-center_hrn7z_98",
  "top-right": "_top-right_hrn7z_103",
  "center-left": "_center-left_hrn7z_107",
  "center-center": "_center-center_hrn7z_111",
  "center-right": "_center-right_hrn7z_116",
  "bottom-left": "_bottom-left_hrn7z_120",
  "bottom-center": "_bottom-center_hrn7z_124",
  "bottom-right": "_bottom-right_hrn7z_129"
}, Vv = {
  $style: $v
}, zv = /* @__PURE__ */ Oa(Fv, [["__cssModules", Vv], ["__scopeId", "data-v-eed46fa1"]]), Xv = ["position"], Wv = ["position", "text"], jv = ["position"], Yv = ["position", "text"], qv = ["position", "text"], Kv = /* @__PURE__ */ Yt({
  __name: "Edge",
  props: {
    edge: {},
    radius: { default: 16 },
    arrowSize: { default: 5 },
    active: { type: Boolean },
    blur: { type: Boolean },
    priority: {},
    strokeWidth: {},
    strokeColor: {},
    strokeOpacity: {}
  },
  setup(i) {
    const t = Ps(wt.UI.Debugger.InjectionKey), e = Er(
      wt.UI.Screen.Viewport.Gap,
      (g) => g == null ? void 0 : g.value,
      Ei(Q.Vector.ORIGIN_2D)
    ), r = Er(
      wt.UI.Screen.Viewport.Size,
      (g) => g == null ? void 0 : g.value,
      Ei({
        width: 0,
        height: 0
      })
    ), s = Er(
      wt.UI.Screen.Viewport.Offset,
      (g) => g == null ? void 0 : g.value,
      Ei(Q.Vector.ORIGIN_2D)
    ), n = Er(
      wt.UI.Screen.Viewport.NodeBoundary,
      (g) => g == null ? void 0 : g.value,
      Ei({
        min: { x: 0, y: 0 },
        max: { x: 0, y: 0 }
      })
    ), a = i, o = lt(new tt(0)), h = lt(1), l = lt(1), u = nl(!1), c = Xt(
      () => {
        var g;
        return Q.Vector.delta(((g = a.edge.to) == null ? void 0 : g.position) ?? { x: 0, y: 0 }, a.edge.from.position, !0);
      }
    ), d = Xt(() => ({
      x: a.edge.from.boundingBox.width,
      y: a.edge.from.boundingBox.height / 2
    })), f = Xt(() => {
      var g;
      return {
        x: (c.value.x ?? 0) - a.radius / 4,
        y: (c.value.y ?? 0) + (((g = a.edge.to) == null ? void 0 : g.boundingBox.height) ?? 0) / 2
      };
    }), p = (g) => ((w) => Array.isArray(w) ? a.priority === "blur-first" ? a.blur ? w[2] : a.active ? w[1] : w[0] : a.active ? w[1] : a.blur ? w[2] : w[0] : w)(a[g]), m = () => {
      const g = {
        strokeColor: p("strokeColor"),
        strokeOpacity: p("strokeOpacity"),
        strokeWidth: p("strokeWidth")
      };
      o.value = new tt(
        `${g.strokeColor}`.startsWith("var(--") ? globalThis.getComputedStyle(document.documentElement).getPropertyValue(`${g.strokeColor}`.replace(/^var\((.+)\)$/, "$1")) || 0 : g.strokeColor || o.value.toHex()
      ), h.value = Number(
        `${g.strokeOpacity}`.startsWith("var(--") ? globalThis.getComputedStyle(document.documentElement).getPropertyValue(`${g.strokeOpacity}`.replace(/^var\((.+)\)$/, "$1")) : g.strokeOpacity ?? o.value.alpha
      ), l.value = parseFloat(
        String(
          `${g.strokeWidth}`.startsWith("var(--") ? globalThis.getComputedStyle(document.documentElement).getPropertyValue(`${g.strokeWidth}`.replace(/^var\((.+)\)$/, "$1")) : g.strokeWidth ?? 1
        )
      );
    }, y = (g) => {
      var C, E, I, G;
      g.clear(), g.lineStyle({
        width: l.value,
        color: o.value.toHex(),
        alpha: h.value,
        alignment: 0.5,
        cap: be.ROUND,
        join: Lt.ROUND
      }), g.moveTo(d.value.x, d.value.y);
      const w = Q.Vector.middle(f.value, d.value), R = Q.Vector.delta(n.value.min, n.value.max, !0), A = Q.Vector.minus(
        { x: 1, y: 1 },
        Q.Vector.divide(
          Q.Vector.delta(a.edge.from.position ?? { x: 0, y: 0 }, n.value.min, !0),
          R,
          !0
        )
      ), x = Q.Vector.minus(
        { x: 1, y: 1 },
        Q.Vector.divide(
          Q.Vector.delta(((C = a.edge.to) == null ? void 0 : C.position) ?? { x: 0, y: 0 }, n.value.min, !0),
          R,
          !0
        )
      ), T = {
        x: ((U) => Math.abs(U) < e.value.x ? c.value.y > 0 ? 1 : -1 : U > 0 ? 1 : -1)(
          a.edge.from.position.x + d.value.x - r.value.width / 2
        ),
        y: ((U) => Math.abs(U) < e.value.y ? c.value.y > 0 ? 1 : -1 : U > 0 ? 1 : -1)(
          a.edge.from.position.y + d.value.y - r.value.height / 2
        )
      }, S = {
        x: ((U) => Math.abs(U) < e.value.x ? c.value.y > 0 ? 1 : -1 : U > 0 ? 1 : -1)(
          ((E = a.edge.to) == null ? void 0 : E.position.x) ?? 0 - r.value.width / 2
        ),
        y: ((U) => Math.abs(U) < e.value.y ? c.value.y > 0 ? 1 : -1 : U > 0 ? 1 : -1)(
          ((I = a.edge.to) == null ? void 0 : I.position.y) ?? 0 + (((G = a.edge.to) == null ? void 0 : G.boundingBox.height) ?? 0 / 2) - r.value.height / 2
        )
      }, M = {
        x: d.value.x - a.edge.from.boundingBox.width / 2 + r.value.width / 2 - a.edge.from.position.x,
        y: d.value.y - a.edge.from.boundingBox.height / 2 + r.value.height / 2 - (a.edge.from.position.y - s.value.y)
      };
      if (c.value.x > 0) {
        if (c.value.x - a.edge.from.boundingBox.width > e.value.x) {
          const U = {
            x: d.value.x + e.value.x / 2 - a.radius / 8 - a.radius * ((0.5 - A.y) * -Math.E),
            y: d.value.y
          };
          g.lineTo(U.x - a.radius, d.value.y), g.quadraticCurveTo(
            U.x,
            d.value.y,
            U.x,
            d.value.y + a.radius * T.y
          ), g.lineTo(
            U.x,
            M.y + (r.value.height / 2 - e.value.y) * T.y - a.radius * (4 - (-1.5 + (A.x + (A.y > 0.5 ? A.y - 0.5 : A.y) * S.y * T.y) * Math.PI / Math.LOG2E)) * T.y
          ), g.quadraticCurveTo(
            U.x,
            M.y + (r.value.height / 2 - e.value.y) * T.y - a.radius * (3 - (-1.5 + (A.x + (A.y > 0.5 ? A.y - 0.5 : A.y) * S.y * T.y) * Math.PI / Math.LOG2E)) * T.y,
            U.x + a.radius,
            M.y + (r.value.height / 2 - e.value.y) * T.y - a.radius * (3 - (-1.5 + (A.x + (A.y > 0.5 ? A.y - 0.5 : A.y) * S.y * T.y) * Math.PI / Math.LOG2E)) * T.y
          ), g.lineTo(
            f.value.x - a.radius * (2 + (1 - x.y * T.y) * x.x),
            M.y + (r.value.height / 2 - e.value.y) * T.y - a.radius * (3 - (-1.5 + (A.x + (A.y > 0.5 ? A.y - 0.5 : A.y) * S.y * T.y) * Math.PI / Math.LOG2E)) * T.y
          ), g.quadraticCurveTo(
            f.value.x - a.radius * 1.5,
            M.y + (r.value.height / 2 - e.value.y) * T.y - a.radius * (3 - (-1.5 + (A.x + (A.y > 0.5 ? A.y - 0.5 : A.y) * S.y * T.y) * Math.PI / Math.LOG2E)) * T.y,
            f.value.x - a.radius * 1.5,
            M.y + (r.value.height / 2 - e.value.y) * T.y - a.radius * (3 - (-2.5 + (A.x + (A.y > 0.5 ? A.y - 0.5 : A.y) * S.y * T.y) * Math.PI / Math.LOG2E)) * T.y
          ), g.lineTo(
            f.value.x - a.radius * 1.5,
            f.value.y + a.radius * (T.y > 0 ? 1 : -1)
          ), g.quadraticCurveTo(
            f.value.x - a.radius * 1.5,
            f.value.y,
            f.value.x - a.radius * 0.5,
            f.value.y
          ), g.lineTo(f.value.x, f.value.y);
        } else {
          const U = Q.Vector.delta(f.value, d.value, !0);
          if (U.y !== 0) {
            const $ = Math.min(Math.abs(U.y) / 2, a.radius), z = {
              x: Math.max(w.x, 0) - $ * ((0.5 - A.y) * -Math.E) - (a.radius - $),
              y: d.value.y
            };
            g.lineTo(z.x - $, z.y), g.quadraticCurveTo(
              z.x,
              z.y,
              z.x,
              d.value.y + $ * (U.y > 0 ? 1 : -1)
            ), g.lineTo(z.x, f.value.y - $ * (U.y > 0 ? 1 : -1)), g.quadraticCurveTo(
              z.x,
              f.value.y,
              z.x + $,
              f.value.y
            ), g.lineTo(f.value.x, f.value.y);
          } else
            g.lineTo(f.value.x, f.value.y);
        }
        v(g, f.value);
      } else
        c.value.x < 0 ? (g.lineTo(
          d.value.x + a.radius * (-0.5 + (x.x + (x.y > 0.5 ? x.y - 0.5 : x.y) * S.y * T.y) * Math.PI / Math.LOG2E),
          d.value.y
        ), g.quadraticCurveTo(
          d.value.x + a.radius * (0.5 + (x.x + (x.y > 0.5 ? x.y - 0.5 : x.y) * S.y * T.y) * Math.PI / Math.LOG2E),
          d.value.y,
          d.value.x + a.radius * (0.5 + (x.x + (x.y > 0.5 ? x.y - 0.5 : x.y) * S.y * T.y) * Math.PI / Math.LOG2E),
          d.value.y + a.radius * T.y
        ), g.lineTo(
          d.value.x + a.radius * (0.5 + (x.x + (x.y > 0.5 ? x.y - 0.5 : x.y) * S.y * T.y) * Math.PI / Math.LOG2E),
          M.y + (r.value.height / 2 - e.value.y) * T.y - a.radius * (2 - (-1.5 + (x.x + (x.y > 0.5 ? x.y - 0.5 : x.y) * S.y * T.y) * Math.PI / Math.LOG2E)) * T.y
        ), g.quadraticCurveTo(
          d.value.x + a.radius * (0.5 + (x.x + (x.y > 0.5 ? x.y - 0.5 : x.y) * S.y * T.y) * Math.PI / Math.LOG2E),
          M.y + (r.value.height / 2 - e.value.y) * T.y - a.radius * (1 - (-1.5 + (x.x + (x.y > 0.5 ? x.y - 0.5 : x.y) * S.y * T.y) * Math.PI / Math.LOG2E)) * T.y,
          d.value.x + a.radius * (-0.5 + (x.x + (x.y > 0.5 ? x.y - 0.5 : x.y) * S.y * T.y) * Math.PI / Math.LOG2E),
          M.y + (r.value.height / 2 - e.value.y) * T.y - a.radius * (1 - (-1.5 + (x.x + (x.y > 0.5 ? x.y - 0.5 : x.y) * S.y * T.y) * Math.PI / Math.LOG2E)) * T.y
        ), g.lineTo(
          f.value.x - a.radius * (1 + (1 - x.y * T.y) * x.x),
          M.y + (r.value.height / 2 - e.value.y) * T.y - a.radius * (1 - (-1.5 + (x.x + (x.y > 0.5 ? x.y - 0.5 : x.y) * S.y * T.y) * Math.PI / Math.LOG2E)) * T.y
        ), g.quadraticCurveTo(
          f.value.x - a.radius * (2 + (1 - x.y * T.y) * x.x),
          M.y + (r.value.height / 2 - e.value.y) * T.y - a.radius * (1 - (-1.5 + (x.x + (x.y > 0.5 ? x.y - 0.5 : x.y) * S.y * T.y) * Math.PI / Math.LOG2E)) * T.y,
          f.value.x - a.radius * (2 + (1 - x.y * T.y) * x.x),
          M.y + (r.value.height / 2 - e.value.y) * T.y - a.radius * (1 - (-2.5 + (x.x + (x.y > 0.5 ? x.y - 0.5 : x.y) * S.y * T.y) * Math.PI / Math.LOG2E)) * T.y
        ), g.lineTo(
          f.value.x - a.radius * (2 + (1 - x.y * T.y) * x.x),
          f.value.y + a.radius * (T.y > 0 ? 1 : -1)
        ), g.quadraticCurveTo(
          f.value.x - a.radius * (2 + (1 - x.y * T.y) * x.x),
          f.value.y,
          f.value.x - a.radius * (1 + (1 - x.y * T.y) * x.x),
          f.value.y
        ), g.lineTo(f.value.x, f.value.y), v(g, f.value)) : (g.lineTo(d.value.x + a.radius * (0.25 - 1 / Math.E), d.value.y), g.quadraticCurveTo(
          d.value.x + a.radius * (1.25 - 1 / Math.E),
          d.value.y,
          d.value.x + a.radius * (1.25 - 1 / Math.E),
          d.value.y + a.radius * (c.value.y > 0 ? 1 : -1)
        ), g.lineTo(
          d.value.x + a.radius * (1.25 - 1 / Math.E),
          d.value.y + a.edge.from.boundingBox.height / 2 * (c.value.y > 0 ? 1 : -1)
        ), g.quadraticCurveTo(
          d.value.x + a.radius * (1.25 - 1 / Math.E),
          d.value.y + (a.edge.from.boundingBox.height / 2 + a.radius) * (c.value.y > 0 ? 1 : -1),
          d.value.x + a.radius * (0.25 - 1 / Math.E),
          d.value.y + (a.edge.from.boundingBox.height / 2 + a.radius) * (c.value.y > 0 ? 1 : -1)
        ), g.lineTo(
          f.value.x - a.radius * (0.75 - x.y * 2 / Math.E),
          d.value.y + (a.edge.from.boundingBox.height / 2 + a.radius) * (c.value.y > 0 ? 1 : -1)
        ), g.quadraticCurveTo(
          f.value.x - a.radius * (1.75 - x.y * 2 / Math.E),
          d.value.y + (a.edge.from.boundingBox.height / 2 + a.radius) * (c.value.y > 0 ? 1 : -1),
          f.value.x - a.radius * (1.75 - x.y * 2 / Math.E),
          d.value.y + (a.edge.from.boundingBox.height / 2 + a.radius * 2) * (c.value.y > 0 ? 1 : -1)
        ), g.lineTo(
          f.value.x - a.radius * (1.75 - x.y * 2 / Math.E),
          f.value.y - a.radius * (c.value.y > 0 ? 1 : -1)
        ), g.quadraticCurveTo(
          f.value.x - a.radius * (1.75 - x.y * 2 / Math.E),
          f.value.y,
          f.value.x,
          f.value.y
        ), v(g, f.value));
      g.endFill();
    }, v = (g, w) => {
      g.moveTo(w.x, w.y), g.lineTo(w.x - a.arrowSize, w.y - a.arrowSize), g.moveTo(w.x, w.y), g.lineTo(w.x - a.arrowSize, w.y + a.arrowSize);
    }, b = (g) => {
      g.type === "mouseover" || g.type === "pointerover" ? u.set(!0) : (g.type === "mouseleave" || g.type === "pointerleave") && u.set(!1);
    }, _ = Ic(document.head, m, {
      childList: !0
    });
    return xc(() => {
      m();
    }), qh(() => {
      _.stop();
    }), (g, w) => {
      var R;
      return It(), Bt(Ue, null, [
        (R = Mt(t)) != null && R.showControlPoint ? (It(), Bt(Ue, { key: 0 }, [
          ge("Graphics", {
            position: d.value,
            onRender: w[0] || (w[0] = (A) => {
              A.clear(), A.beginFill(3295710), A.drawCircle(0, 0, 5), A.endFill();
            })
          }, null, 40, Xv),
          ge("Text", {
            position: d.value,
            "anchor-y": 1,
            style: {
              fontSize: 8,
              fontFamily: "monospace",
              whiteSpace: "pre",
              padding: 10,
              leading: 1.2,
              breakWords: !0,
              trim: !0,
              fill: "#3249de"
            },
            text: `
          #${a.edge.id}

          offset-x: ${d.value.x}
          offset-y: ${d.value.y}
        `
          }, null, 8, Wv),
          a.edge.to ? (It(), Bt(Ue, { key: 0 }, [
            ge("Graphics", {
              position: f.value,
              onRender: w[1] || (w[1] = (A) => {
                A.clear(), A.beginFill(16375346), A.drawCircle(0, 0, 5), A.endFill();
              })
            }, null, 40, jv),
            ge("Text", {
              position: f.value,
              "anchor-x": 1,
              style: {
                fontSize: 8,
                fontFamily: "monospace",
                whiteSpace: "pre",
                padding: 10,
                leading: 1.2,
                breakWords: !0,
                trim: !0,
                align: "right",
                fill: "#f9de32"
              },
              text: `
          #${a.edge.id}

          offset-x: ${f.value.x}
          offset-y: ${f.value.y}
        `
            }, null, 8, Yv)
          ], 64)) : Te("", !0),
          Mt(u)() ? (It(), Bt("Text", {
            key: 1,
            position: d.value,
            style: {
              fontSize: 10,
              fontFamily: "monospace",
              whiteSpace: "pre",
              padding: 10,
              leading: 1.2,
              breakWords: !0,
              trim: !0,
              fill: "#ffffff"
            },
            text: a.edge.id
          }, null, 8, qv)) : Te("", !0)
        ], 64)) : Te("", !0),
        ge("Graphics", {
          onRender: y,
          onMouseover: b,
          onMouseleave: b
        }, null, 32)
      ], 64);
    };
  }
}), Zv = ["position"], Qv = ["text"], Jv = ["position", "z-index"], tx = /* @__PURE__ */ Yt({
  __name: "Node",
  props: {
    id: {},
    name: {},
    to: {},
    position: {},
    positionX: {},
    positionY: {},
    relative: { type: Boolean },
    activeEdgesOn: { default: "from" },
    activeNodeId: {},
    radius: {},
    arrowSize: {},
    strokeWidth: {},
    strokeColor: {},
    strokeOpacity: {},
    active: { type: Boolean, default: !1 },
    blur: { type: Boolean, default: !1 },
    priority: {}
  },
  setup(i) {
    const t = Ps(wt.UI.Debugger.InjectionKey), e = i, r = Er(wt.Entity.Edge.InjectionKey, (u) => u == null ? void 0 : u.value), s = Er(wt.Entity.Node.InjectionKey, (u) => u == null ? void 0 : u.value), n = lt(), a = tl(rl(n)), o = Xt(() => {
      var u;
      return (u = s.value) == null ? void 0 : u.get(e.id);
    }), h = Xt(
      () => {
        var u;
        return new Bc(
          [...((u = o.value) == null ? void 0 : u.edges) ?? []].map(([c, d]) => {
            var f;
            return [
              c,
              {
                ...d,
                active: e.activeEdgesOn === "to" || e.activeEdgesOn === "both" ? e.activeNodeId !== void 0 && ((f = d.to) == null ? void 0 : f.id) === e.activeNodeId || (e.activeEdgesOn === "both" ? e.active : !1) : e.active
              }
            ];
          })
        );
      }
    ), l = () => {
      var c, d;
      const u = {
        id: e.id,
        position: e.relative ? {
          x: 0,
          y: 0
        } : e.position ?? {
          x: e.positionX ?? 0,
          y: e.positionY ?? 0
        },
        offset: {
          x: 0,
          y: 0
        },
        relativePosition: e.relative ? e.position ?? {
          x: e.positionX ?? 0,
          y: e.positionY ?? 0
        } : void 0,
        boundingBox: a,
        get edges() {
          return new Map(
            [...r.value ?? []].filter(
              ([, f]) => {
                var p;
                return f.from.id === e.id || ((p = f.to) == null ? void 0 : p.id) === e.id;
              }
            )
          );
        }
      };
      (c = s.value) == null || c.set(e.id, u), (d = e.to) == null || d.forEach((f) => {
        var m;
        const p = {
          id: `${e.id}->${f}`,
          from: u,
          get to() {
            var y;
            return (y = s.value) == null ? void 0 : y.get(f);
          }
        };
        (m = r.value) == null || m.set(p.id, p);
      });
    };
    return mi(() => {
      l();
    }), (u, c) => {
      var d, f, p, m, y, v;
      return It(), Bt(Ue, null, [
        (d = Mt(t)) != null && d.showBoundingBox ? (It(), Bt("Container", {
          key: 0,
          position: (f = o.value) == null ? void 0 : f.position
        }, [
          ge("Graphics", {
            onRender: c[0] || (c[0] = (b) => {
              b.clear(), b.beginFill(14561865), b.drawRect(0, 0, a.width, a.height), b.endFill();
            })
          }, null, 32),
          ge("Text", {
            style: {
              fontSize: 10,
              fontFamily: "monospace",
              whiteSpace: "pre",
              padding: 10,
              leading: 1.2,
              breakWords: !0,
              trim: !0
            },
            text: `
          #${e.id}

          x: ${(p = o.value) == null ? void 0 : p.position.x}
          y: ${(m = o.value) == null ? void 0 : m.position.y}
          offset-x: ${(y = o.value) == null ? void 0 : y.offset.x}
          offset-y: ${(v = o.value) == null ? void 0 : v.offset.y}
          width: ${a.width}
          height: ${a.height}
        `
          }, null, 8, Qv)
        ], 8, Zv)) : Te("", !0),
        (It(!0), Bt(Ue, null, bc(h.value, ([b, _]) => {
          var g, w;
          return It(), Bt(Ue, { key: b }, [
            _.from.id === ((g = o.value) == null ? void 0 : g.id) ? (It(), Bt("Container", {
              key: 0,
              position: (w = o.value) == null ? void 0 : w.position,
              "z-index": _.active ? 1e4 : 0
            }, [
              nr(Mt(as).Layout.Edge, {
                edge: _,
                radius: e.radius,
                "arrow-size": e.arrowSize,
                active: _.active,
                blur: e.blur,
                priority: e.priority,
                "stroke-width": e.strokeWidth,
                "stroke-color": e.strokeColor,
                "stroke-opacity": e.strokeOpacity
              }, null, 8, ["edge", "radius", "arrow-size", "active", "blur", "priority", "stroke-width", "stroke-color", "stroke-opacity"])
            ], 8, Jv)) : Te("", !0)
          ], 64);
        }), 128)),
        nr(Mt(sv), null, {
          default: Fn(() => {
            var b, _, g, w, R, A;
            return [
              ge("div", {
                ref_key: "wrapperRef$",
                ref: n,
                class: os([
                  u.$style["flow-node-container"],
                  u.$style.wrapper,
                  u.$style.flex,
                  u.$style.vertical,
                  {
                    [u.$style.panning]: (b = o.value) == null ? void 0 : b.isPanning,
                    [u.$style["debugger--show-bounding-box"]]: (_ = Mt(t)) == null ? void 0 : _.showBoundingBox
                  }
                ]),
                style: Tc({
                  transform: `translate3d(${(((g = o.value) == null ? void 0 : g.position.x) ?? 0) + (((w = o.value) == null ? void 0 : w.offset.x) ?? 0)}px, ${(((R = o.value) == null ? void 0 : R.position.y) ?? 0) + (((A = o.value) == null ? void 0 : A.offset.y) ?? 0)}px, 0.000001px)`
                })
              }, [
                Fr(u.$slots, "default")
              ], 6)
            ];
          }),
          _: 3
        })
      ], 64);
    };
  }
}), ex = "_wrapper_1d7if_1", rx = "_flex_1d7if_12", ix = "_horizontal_1d7if_48", sx = "_wrap_1d7if_1", nx = "_vertical_1d7if_60", ax = "_grid_1d7if_72", ox = "_panning_1d7if_83", hx = {
  wrapper: ex,
  flex: rx,
  "col-1": "_col-1_1d7if_12",
  "col-2": "_col-2_1d7if_15",
  "col-3": "_col-3_1d7if_18",
  "col-4": "_col-4_1d7if_21",
  "col-5": "_col-5_1d7if_24",
  "col-6": "_col-6_1d7if_27",
  "col-7": "_col-7_1d7if_30",
  "col-8": "_col-8_1d7if_33",
  "col-9": "_col-9_1d7if_36",
  "col-10": "_col-10_1d7if_39",
  "col-11": "_col-11_1d7if_42",
  "col-12": "_col-12_1d7if_45",
  horizontal: ix,
  wrap: sx,
  vertical: nx,
  grid: ax,
  "flow-node-container": "_flow-node-container_1d7if_78",
  panning: ox,
  "debugger--show-bounding-box": "_debugger--show-bounding-box_1d7if_86"
}, lx = {
  $style: hx
}, ux = /* @__PURE__ */ Oa(tx, [["__cssModules", lx]]), cx = /* @__PURE__ */ Yt({
  __name: "DevTool",
  setup(i) {
    const t = rv();
    return window.__PIXI_APP__ = t.value, (e, r) => null;
  }
}), as = {
  Screen: {
    Window: Rv,
    Viewport: Dv
  },
  Layout: {
    Toolbar: zv,
    Edge: Kv,
    Node: ux
  },
  Helper: {
    DevTool: cx
  }
};
export {
  as as FlowKit
};
//# sourceMappingURL=ui.flow.es.js.map
