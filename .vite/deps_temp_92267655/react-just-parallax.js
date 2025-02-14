import {
  require_react
} from "./chunk-32E4H3EV.js";
import {
  __toESM
} from "./chunk-G3PMV62Z.js";

// node_modules/react-just-parallax/dist/esm/index.js
var import_react = __toESM(require_react());
var u = "undefined" != typeof performance ? () => performance.now() : () => Date.now();
var c = "undefined" != typeof window ? (e2) => window.requestAnimationFrame(e2) : (e2) => setTimeout(() => e2(u()), 16.666666666666668);
var l = true;
var a = false;
var d = false;
var h = { delta: 0, timestamp: 0 };
var f = ["read", "update", "preRender", "render", "postRender"];
var v = f.reduce((e2, t2) => (e2[t2] = /* @__PURE__ */ function(e3) {
  let t3 = [], n2 = [], r2 = 0, i2 = false, s2 = false;
  const o2 = /* @__PURE__ */ new WeakSet(), u2 = { schedule: (e4, s3 = false, u3 = false) => {
    const c2 = u3 && i2, l2 = c2 ? t3 : n2;
    return s3 && o2.add(e4), -1 === l2.indexOf(e4) && (l2.push(e4), c2 && i2 && (r2 = t3.length)), e4;
  }, cancel: (e4) => {
    const t4 = n2.indexOf(e4);
    -1 !== t4 && n2.splice(t4, 1), o2.delete(e4);
  }, process: (c2) => {
    if (i2) s2 = true;
    else {
      if (i2 = true, [t3, n2] = [n2, t3], n2.length = 0, r2 = t3.length, r2) for (let n3 = 0; n3 < r2; n3++) {
        const r3 = t3[n3];
        r3(c2), o2.has(r3) && (u2.schedule(r3), e3());
      }
      i2 = false, s2 && (s2 = false, u2.process(c2));
    }
  } };
  return u2;
}(() => a = true), e2), {});
var p = f.reduce((e2, t2) => {
  const n2 = v[t2];
  return e2[t2] = (e3, t3 = false, r2 = false) => (a || E(), n2.schedule(e3, t3, r2)), e2;
}, {});
var w = f.reduce((e2, t2) => (e2[t2] = v[t2].cancel, e2), {});
f.reduce((e2, t2) => (e2[t2] = () => v[t2].process(h), e2), {});
var m = (e2) => v[e2].process(h);
var y = (e2) => {
  a = false, h.delta = l ? 16.666666666666668 : Math.max(Math.min(e2 - h.timestamp, 40), 1), h.timestamp = e2, d = true, f.forEach(m), d = false, a && (l = false, c(y));
};
var E = () => {
  a = true, l = true, d || c(y);
};
var g = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
var _ = /^\s+|\s+$/g;
var x = /^[-+]0x[0-9a-f]+$/i;
var L = /^0b[01]+$/i;
var b = /^0o[0-7]+$/i;
var O = parseInt;
var T = "object" == typeof g && g && g.Object === Object && g;
var M = "object" == typeof self && self && self.Object === Object && self;
var W = T || M || Function("return this")();
var z = Object.prototype.toString;
var U = Math.max;
var S = Math.min;
var H = function() {
  return W.Date.now();
};
function R(e2) {
  var t2 = typeof e2;
  return !!e2 && ("object" == t2 || "function" == t2);
}
function C(e2) {
  if ("number" == typeof e2) return e2;
  if (function(e3) {
    return "symbol" == typeof e3 || /* @__PURE__ */ function(e4) {
      return !!e4 && "object" == typeof e4;
    }(e3) && "[object Symbol]" == z.call(e3);
  }(e2)) return NaN;
  if (R(e2)) {
    var t2 = "function" == typeof e2.valueOf ? e2.valueOf() : e2;
    e2 = R(t2) ? t2 + "" : t2;
  }
  if ("string" != typeof e2) return 0 === e2 ? e2 : +e2;
  e2 = e2.replace(_, "");
  var n2 = L.test(e2);
  return n2 || b.test(e2) ? O(e2.slice(2), n2 ? 2 : 8) : x.test(e2) ? NaN : +e2;
}
var j = function(e2, t2, n2) {
  var r2, i2, s2, o2, u2, c2, l2 = 0, a2 = false, d2 = false, h2 = true;
  if ("function" != typeof e2) throw new TypeError("Expected a function");
  function f2(t3) {
    var n3 = r2, s3 = i2;
    return r2 = i2 = void 0, l2 = t3, o2 = e2.apply(s3, n3);
  }
  function v2(e3) {
    return l2 = e3, u2 = setTimeout(w2, t2), a2 ? f2(e3) : o2;
  }
  function p2(e3) {
    var n3 = e3 - c2;
    return void 0 === c2 || n3 >= t2 || n3 < 0 || d2 && e3 - l2 >= s2;
  }
  function w2() {
    var e3 = H();
    if (p2(e3)) return m2(e3);
    u2 = setTimeout(w2, function(e4) {
      var n3 = t2 - (e4 - c2);
      return d2 ? S(n3, s2 - (e4 - l2)) : n3;
    }(e3));
  }
  function m2(e3) {
    return u2 = void 0, h2 && r2 ? f2(e3) : (r2 = i2 = void 0, o2);
  }
  function y2() {
    var e3 = H(), n3 = p2(e3);
    if (r2 = arguments, i2 = this, c2 = e3, n3) {
      if (void 0 === u2) return v2(c2);
      if (d2) return u2 = setTimeout(w2, t2), f2(c2);
    }
    return void 0 === u2 && (u2 = setTimeout(w2, t2)), o2;
  }
  return t2 = C(t2) || 0, R(n2) && (a2 = !!n2.leading, s2 = (d2 = "maxWait" in n2) ? U(C(n2.maxWait) || 0, t2) : s2, h2 = "trailing" in n2 ? !!n2.trailing : h2), y2.cancel = function() {
    void 0 !== u2 && clearTimeout(u2), l2 = 0, r2 = c2 = i2 = u2 = void 0;
  }, y2.flush = function() {
    return void 0 === u2 ? o2 : m2(H());
  }, y2;
};
var D = { exports: {} };
var $ = "undefined" != typeof document ? document.createElement("p").style : {};
var k = ["O", "ms", "Moz", "Webkit"];
var I = /([A-Z])/g;
var X = {};
function Y(e2) {
  if (e2 = e2.replace(/-([a-z])/g, function(e3, t3) {
    return t3.toUpperCase();
  }), void 0 !== $[e2]) return e2;
  for (var t2 = e2.charAt(0).toUpperCase() + e2.slice(1), n2 = k.length; n2--; ) {
    var r2 = k[n2] + t2;
    if (void 0 !== $[r2]) return r2;
  }
  return e2;
}
D.exports = function(e2) {
  return e2 in X ? X[e2] : X[e2] = Y(e2);
}, D.exports.dash = function(e2) {
  return e2 = Y(e2), I.test(e2) && (e2 = "-" + e2.replace(I, "-$1"), I.lastIndex = 0), e2.toLowerCase();
};
var P = { isReady: false, scrollbarWidth: 0, windowHeight: 0, windowWidth: 0 };
var A = () => {
  const [e2, s2] = (0, import_react.useState)(P), o2 = (0, import_react.useRef)(P), u2 = (0, import_react.useCallback)(() => {
    const e3 = { isReady: true, scrollbarWidth: window.innerWidth - document.documentElement.clientWidth, windowHeight: window.innerHeight, windowWidth: window.innerWidth };
    s2(e3), o2.current = e3;
  }, []);
  return (0, import_react.useEffect)(() => {
    const e3 = j(u2, 100);
    return window.addEventListener("resize", e3), u2(), () => {
      window.removeEventListener("resize", e3);
    };
  }, [u2]), { windowSize: e2, windowSizeRef: o2 };
};
var F = (e2, t2, n2) => e2 + (t2 - e2) * n2;
var N = class extends class {
  addEventListener(e2, t2) {
    void 0 === this._listeners && (this._listeners = {});
    const n2 = this._listeners;
    void 0 === n2[e2] && (n2[e2] = []), -1 === n2[e2].indexOf(t2) && n2[e2].push(t2);
  }
  hasEventListener(e2, t2) {
    if (void 0 === this._listeners) return false;
    const n2 = this._listeners;
    return void 0 !== n2[e2] && -1 !== n2[e2].indexOf(t2);
  }
  removeEventListener(e2, t2) {
    if (void 0 === this._listeners) return;
    const n2 = this._listeners[e2];
    if (void 0 !== n2) {
      const e3 = n2.indexOf(t2);
      -1 !== e3 && n2.splice(e3, 1);
    }
  }
  dispatchEvent(e2) {
    if (void 0 === this._listeners) return;
    const t2 = this._listeners[e2.type];
    if (void 0 !== t2) {
      e2.target = this;
      const n2 = t2.slice(0);
      for (let t3 = 0, r2 = n2.length; t3 < r2; t3++) n2[t3].call(this, e2);
      e2.target = null;
    }
  }
} {
  constructor() {
    super(), this._mouseLast = { x: 0, y: 0 }, this._isTouching = false, this.mouse = { x: 0, y: 0 }, this._shouldUpdate = false, this._onTouchDown = (e2) => {
      this._shouldUpdate && (this._isTouching = true, this._mouseLast.x = "touches" in e2 ? e2.touches[0].clientX : e2.clientX, this._mouseLast.y = "touches" in e2 ? e2.touches[0].clientY : e2.clientY, this.mouse.x = this._mouseLast.x, this.mouse.y = this._mouseLast.y, this.dispatchEvent({ type: "down" }), this.dispatchEvent({ type: "mousemove" }));
    }, this._onTouchMove = (e2) => {
      if (!this._shouldUpdate) return;
      const t2 = "touches" in e2 ? e2.touches[0].clientX : e2.clientX, n2 = "touches" in e2 ? e2.touches[0].clientY : e2.clientY, r2 = t2 - this._mouseLast.x, i2 = n2 - this._mouseLast.y;
      this._mouseLast.x = t2, this._mouseLast.y = n2, this.mouse.x += r2, this.mouse.y += i2, this.dispatchEvent({ type: "mousemove" });
    }, this._onTouchUp = () => {
      this._shouldUpdate && (this._isTouching = false, this.dispatchEvent({ type: "up" }), this.dispatchEvent({ type: "mousemove" }));
    }, this._onMouseLeave = () => {
      this.dispatchEvent({ type: "left" });
    };
  }
  _addEvents() {
    this._targetEl.addEventListener("mousedown", this._onTouchDown), this._targetEl.addEventListener("mousemove", this._onTouchMove, { passive: true }), this._targetEl.addEventListener("mouseup", this._onTouchUp), this._targetEl.addEventListener("touchstart", this._onTouchDown, { passive: true }), this._targetEl.addEventListener("touchmove", this._onTouchMove, { passive: true }), this._targetEl.addEventListener("touchend", this._onTouchUp), this._targetEl.addEventListener("mouseout", this._onMouseLeave);
  }
  _removeEvents() {
    this._targetEl.removeEventListener("mousedown", this._onTouchDown), this._targetEl.removeEventListener("mousemove", this._onTouchMove), this._targetEl.removeEventListener("mouseup", this._onTouchUp), this._targetEl.removeEventListener("touchstart", this._onTouchDown), this._targetEl.removeEventListener("touchmove", this._onTouchMove), this._targetEl.removeEventListener("touchend", this._onTouchUp), this._targetEl.removeEventListener("mouseout", this._onMouseLeave);
  }
  init(e2) {
    this._targetEl = window, e2 && e2.current && (this._targetEl = e2.current), this._addEvents();
  }
  destroy() {
    this._removeEvents();
  }
  setShouldUpdate(e2) {
    this._shouldUpdate = e2;
  }
  update() {
    this._mouseLast.x = this.mouse.x, this._mouseLast.y = this.mouse.y;
  }
};
var V = () => "undefined" != typeof window && ("ontouchstart" in window || "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0);
var B = { height: 1, width: 1, x: 1, y: 1 };
var q = (t2) => {
  const { children: r2, strength: s2 = 0.14, parallaxContainerRef: o2 = null, scrollContainerRef: u2 = null, shouldResetPosition: c2 = false, enableOnTouchDevice: l2 = false, isAbsolutelyPositioned: a2 = false, lerpEase: d2 = 0.06, zIndex: h2 = null, shouldPause: f2 = true } = t2, { windowSizeRef: v2 } = A(), m2 = (0, import_react.useRef)(null), y2 = (0, import_react.useRef)(null), E2 = (0, import_react.useRef)(0), g2 = (0, import_react.useRef)(0), _2 = (0, import_react.useRef)(0), x2 = (0, import_react.useRef)(0), L2 = (0, import_react.useRef)(null), b2 = (0, import_react.useRef)(null), O2 = (0, import_react.useRef)(true), T2 = (0, import_react.useRef)(B), M2 = (0, import_react.useRef)(new N()), W2 = (0, import_react.useRef)(null), z2 = (0, import_react.useRef)(D.exports("transform")), U2 = () => {
    O2.current && m2.current && (m2.current.style.willChange = "transform", L2.current = p.render(H2, true), b2.current = p.update(R2, true));
  }, S2 = () => {
    m2.current && (m2.current.style.willChange = "auto", L2.current && w.render(L2.current), b2.current && w.update(b2.current));
  }, H2 = () => {
    if (!m2.current) return;
    let e2 = v2.current.windowWidth, t3 = v2.current.windowHeight;
    o2 && o2.current && (e2 = T2.current.width, t3 = T2.current.height), e2 *= 0.5, t3 *= 0.5, e2 *= s2, t3 *= s2, m2.current.style[z2.current] = `translate3d(${E2.current * e2}px, ${g2.current * t3}px, 0px)`;
  }, R2 = ({ delta: e2 }) => {
    const t3 = Math.abs(_2.current - E2.current), n2 = Math.abs(x2.current - g2.current);
    if (t3 < 1e-3 && n2 < 1e-3) return;
    let r3 = e2 / 16.666666666666668;
    M2.current.update();
    const i2 = Math.round(r3);
    i2 >= 1 && (r3 = i2);
    const s3 = F(E2.current, _2.current, d2 * r3);
    E2.current = s3;
    const o3 = F(g2.current, x2.current, d2 * r3);
    g2.current = o3;
  }, C2 = () => {
    document.hidden ? S2() : U2();
  }, $2 = (e2, t3) => {
    let n2 = v2.current.windowWidth, r3 = v2.current.windowHeight, i2 = e2, s3 = t3;
    return o2 && o2.current && (n2 = T2.current.width, r3 = T2.current.height, i2 = e2 - T2.current.x, s3 = t3 - T2.current.y), { x: i2 / n2 * 2 - 1, y: s3 / r3 * 2 - 1 };
  }, k2 = (e2) => {
    const t3 = e2.target.mouse.x, n2 = e2.target.mouse.y, { x: r3, y: i2 } = $2(t3, n2);
    _2.current = r3, x2.current = i2;
  }, I2 = () => {
    c2 && (_2.current = 0, x2.current = 0);
  }, X2 = (e2) => {
    const t3 = "touches" in e2 ? e2.touches[0].clientX : e2.clientX, n2 = "touches" in e2 ? e2.touches[0].clientY : e2.clientY, { x: r3, y: i2 } = $2(t3, n2);
    (r3 <= -1 || r3 >= 1 || i2 >= 1 || i2 <= -1) && I2();
  }, Y2 = () => {
    if (!o2 || !o2.current) return;
    const e2 = o2.current.getBoundingClientRect();
    T2.current = { x: e2.x, y: e2.y, width: o2.current.clientWidth, height: o2.current.clientHeight };
  }, P2 = j(Y2, 150), q2 = (e2) => {
    if (e2[0].isIntersecting) O2.current = true, U2(), M2.current.setShouldUpdate(true);
    else {
      if (!f2) return;
      O2.current = false, S2(), M2.current.setShouldUpdate(false);
    }
  };
  return (0, import_react.useEffect)(() => {
    if (!l2 && V()) return;
    M2.current.init(o2), U2();
    let e2 = window, t3 = window;
    return u2 && u2.current && (t3 = u2.current), o2 && o2.current && (Y2(), e2 = o2.current, t3.addEventListener("scroll", P2, { passive: true }), window.addEventListener("resize", P2, { passive: true })), M2.current.addEventListener("mousemove", k2), window.addEventListener("visibilitychange", C2), window.addEventListener("touchstart", X2, { passive: true }), e2.addEventListener("mouseout", I2), W2.current = new IntersectionObserver(q2, { threshold: 0.5 }), y2.current && W2.current.observe(y2.current), () => {
      S2(), o2 && o2.current && (t3.removeEventListener("scroll", P2), window.removeEventListener("resize", P2)), M2.current.removeEventListener("mousemove", k2), window.removeEventListener("visibilitychange", C2), window.removeEventListener("touchstart", X2), e2.removeEventListener("mouseout", I2), y2.current && W2.current && W2.current.unobserve(y2.current), M2.current.destroy();
    };
  }, []), import_react.default.createElement(import_react.default.Fragment, null, import_react.default.createElement("span", { ref: y2, style: { width: "100%", height: "100%", display: "inline-block", userSelect: "none", pointerEvents: "none", position: a2 ? "absolute" : "relative", top: 0, left: 0, zIndex: h2 || "initial" } }, import_react.default.createElement("span", { ref: m2, style: { backfaceVisibility: "hidden", position: "relative", width: "100%", height: "100%", display: "inline-block", userSelect: "initial", pointerEvents: "initial" } }, r2)));
};
var Z = { xMaxOffset: 1, xOffset: 1, yMaxOffset: 1, yOffset: 1 };
var G = (0, import_react.forwardRef)((t2, r2) => {
  (0, import_react.useImperativeHandle)(r2, () => ({ updateValues: k2 }));
  const { children: s2, strength: u2 = 0.14, scrollContainerRef: c2 = null, enableOnTouchDevice: l2 = true, lerpEase: a2 = 0.06, isHorizontal: d2 = false, isAbsolutelyPositioned: h2 = false, zIndex: f2 = null, shouldPause: v2 = true } = t2, m2 = (0, import_react.useRef)(null), y2 = (0, import_react.useRef)(null), E2 = (0, import_react.useRef)(1), g2 = (0, import_react.useRef)(1), _2 = (0, import_react.useRef)(1), x2 = (0, import_react.useRef)(1), L2 = (0, import_react.useRef)(null), b2 = (0, import_react.useRef)(null), O2 = (0, import_react.useRef)(true), T2 = (0, import_react.useRef)(Z), M2 = (0, import_react.useRef)(1), W2 = (0, import_react.useRef)(1), { windowSizeRef: z2 } = A(), U2 = (0, import_react.useRef)(D.exports("transform")), S2 = () => {
    m2.current && (m2.current.style.willChange = "transform", L2.current = p.render(R2, true), b2.current = p.update(C2, true));
  }, H2 = () => {
    m2.current && (m2.current.style.willChange = "auto", L2.current && w.render(L2.current), b2.current && w.update(b2.current));
  }, R2 = () => {
    if (!O2.current) return;
    if (!m2.current) return;
    let e2 = d2 ? 1 : 0;
    m2.current.style[U2.current] = `translate3d(${E2.current * u2 * e2}px, ${g2.current * u2 * (1 - e2)}px, 0px)`;
  }, C2 = ({ delta: e2 }) => {
    if (!O2.current) return;
    const t3 = Math.abs(_2.current - E2.current), n2 = Math.abs(x2.current - g2.current);
    if (t3 < 1e-3 && n2 < 1e-3) return;
    let r3 = e2 / 16.666666666666668;
    const i2 = Math.round(r3);
    i2 >= 1 && (r3 = i2);
    const s3 = F(E2.current, _2.current, a2 * r3);
    E2.current = s3;
    const o2 = F(g2.current, x2.current, a2 * r3);
    g2.current = o2;
  }, $2 = () => {
    document.hidden ? H2() : S2();
  }, k2 = () => {
    (() => {
      if (!y2 || !y2.current) return;
      X2();
      const e2 = y2.current.getBoundingClientRect();
      M2.current = T2.current.xOffset + e2.x + 0.5 * e2.width, W2.current = T2.current.yOffset + e2.y + 0.5 * e2.height;
    })(), Y2();
  }, I2 = j(k2, 150), X2 = () => {
    var e2;
    c2 && c2.current ? T2.current = { xOffset: (e2 = c2.current).scrollLeft, yOffset: e2.scrollTop, xMaxOffset: e2.scrollWidth - e2.offsetWidth, yMaxOffset: e2.scrollHeight - e2.offsetHeight } : T2.current = { xOffset: window.pageXOffset, yOffset: window.pageYOffset, xMaxOffset: document.body.clientWidth - window.innerWidth, yMaxOffset: document.body.clientHeight - window.innerHeight };
  }, Y2 = () => {
    X2();
    let e2 = T2.current.xOffset - M2.current, t3 = T2.current.yOffset - W2.current;
    if (e2 += 0.5 * z2.current.windowWidth, t3 += 0.5 * z2.current.windowHeight, _2.current = e2, x2.current = t3, Math.abs(x2.current) > 1.5 * z2.current.windowHeight || Math.abs(_2.current) > 1.5 * z2.current.windowWidth) {
      if (!v2) return;
      O2.current = false;
    } else O2.current = true;
  };
  return (0, import_react.useEffect)(() => {
    if (!l2 && V()) return;
    S2();
    let e2 = window;
    return c2 && c2.current && (e2 = c2.current), e2.addEventListener("scroll", Y2, { passive: true }), window.addEventListener("visibilitychange", $2), window.addEventListener("resize", I2), k2(), () => {
      H2(), e2.removeEventListener("scroll", Y2), window.removeEventListener("visibilitychange", $2), window.removeEventListener("resize", I2);
    };
  }, []), import_react.default.createElement(import_react.default.Fragment, null, import_react.default.createElement("span", { ref: y2, style: { width: "100%", height: "100%", display: "inline-block", userSelect: "none", pointerEvents: "none", position: h2 ? "absolute" : "relative", top: 0, left: 0, zIndex: f2 || "initial" } }, import_react.default.createElement("span", { ref: m2, style: { backfaceVisibility: "hidden", position: "relative", width: "100%", height: "100%", display: "inline-block", userSelect: "initial", pointerEvents: "initial" } }, s2)));
});
export {
  q as MouseParallax,
  G as ScrollParallax
};
//# sourceMappingURL=react-just-parallax.js.map
