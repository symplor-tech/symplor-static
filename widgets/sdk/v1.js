(() => {
  var t = {
      757: (t, e, r) => {
        t.exports = r(666);
      },
      487: (t) => {
        t.exports = {
          LIBRARY_DOMAIN: "https://simple.symplor.com/widgets/library",
          FEED_END_POINT: "https://simple.symplor.com/widgets/feeds",
        };
      },
      666: (t) => {
        var e = (function (t) {
          "use strict";
          var e,
            r = Object.prototype,
            n = r.hasOwnProperty,
            o = "function" == typeof Symbol ? Symbol : {},
            i = o.iterator || "@@iterator",
            a = o.asyncIterator || "@@asyncIterator",
            c = o.toStringTag || "@@toStringTag";
          function u(t, e, r) {
            return (
              Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            u({}, "");
          } catch (t) {
            u = function (t, e, r) {
              return (t[e] = r);
            };
          }
          function s(t, e, r, n) {
            var o = e && e.prototype instanceof v ? e : v,
              i = Object.create(o.prototype),
              a = new k(n || []);
            return (
              (i._invoke = (function (t, e, r) {
                var n = f;
                return function (o, i) {
                  if (n === p) throw new Error("Generator is already running");
                  if (n === d) {
                    if ("throw" === o) throw i;
                    return P();
                  }
                  for (r.method = o, r.arg = i; ; ) {
                    var a = r.delegate;
                    if (a) {
                      var c = _(a, r);
                      if (c) {
                        if (c === y) continue;
                        return c;
                      }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                      if (n === f) throw ((n = d), r.arg);
                      r.dispatchException(r.arg);
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    n = p;
                    var u = l(t, e, r);
                    if ("normal" === u.type) {
                      if (((n = r.done ? d : h), u.arg === y)) continue;
                      return { value: u.arg, done: r.done };
                    }
                    "throw" === u.type &&
                      ((n = d), (r.method = "throw"), (r.arg = u.arg));
                  }
                };
              })(t, r, a)),
              i
            );
          }
          function l(t, e, r) {
            try {
              return { type: "normal", arg: t.call(e, r) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          t.wrap = s;
          var f = "suspendedStart",
            h = "suspendedYield",
            p = "executing",
            d = "completed",
            y = {};
          function v() {}
          function m() {}
          function g() {}
          var w = {};
          u(w, i, function () {
            return this;
          });
          var b = Object.getPrototypeOf,
            L = b && b(b(I([])));
          L && L !== r && n.call(L, i) && (w = L);
          var x = (g.prototype = v.prototype = Object.create(w));
          function E(t) {
            ["next", "throw", "return"].forEach(function (e) {
              u(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function S(t, e) {
            function r(o, i, a, c) {
              var u = l(t[o], t, i);
              if ("throw" !== u.type) {
                var s = u.arg,
                  f = s.value;
                return f && "object" == typeof f && n.call(f, "__await")
                  ? e.resolve(f.__await).then(
                      function (t) {
                        r("next", t, a, c);
                      },
                      function (t) {
                        r("throw", t, a, c);
                      }
                    )
                  : e.resolve(f).then(
                      function (t) {
                        (s.value = t), a(s);
                      },
                      function (t) {
                        return r("throw", t, a, c);
                      }
                    );
              }
              c(u.arg);
            }
            var o;
            this._invoke = function (t, n) {
              function i() {
                return new e(function (e, o) {
                  r(t, n, e, o);
                });
              }
              return (o = o ? o.then(i, i) : i());
            };
          }
          function _(t, r) {
            var n = t.iterator[r.method];
            if (n === e) {
              if (((r.delegate = null), "throw" === r.method)) {
                if (
                  t.iterator.return &&
                  ((r.method = "return"),
                  (r.arg = e),
                  _(t, r),
                  "throw" === r.method)
                )
                  return y;
                (r.method = "throw"),
                  (r.arg = new TypeError(
                    "The iterator does not provide a 'throw' method"
                  ));
              }
              return y;
            }
            var o = l(n, t.iterator, r.arg);
            if ("throw" === o.type)
              return (
                (r.method = "throw"), (r.arg = o.arg), (r.delegate = null), y
              );
            var i = o.arg;
            return i
              ? i.done
                ? ((r[t.resultName] = i.value),
                  (r.next = t.nextLoc),
                  "return" !== r.method && ((r.method = "next"), (r.arg = e)),
                  (r.delegate = null),
                  y)
                : i
              : ((r.method = "throw"),
                (r.arg = new TypeError("iterator result is not an object")),
                (r.delegate = null),
                y);
          }
          function O(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function j(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function k(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(O, this),
              this.reset(!0);
          }
          function I(t) {
            if (t) {
              var r = t[i];
              if (r) return r.call(t);
              if ("function" == typeof t.next) return t;
              if (!isNaN(t.length)) {
                var o = -1,
                  a = function r() {
                    for (; ++o < t.length; )
                      if (n.call(t, o))
                        return (r.value = t[o]), (r.done = !1), r;
                    return (r.value = e), (r.done = !0), r;
                  };
                return (a.next = a);
              }
            }
            return { next: P };
          }
          function P() {
            return { value: e, done: !0 };
          }
          return (
            (m.prototype = g),
            u(x, "constructor", g),
            u(g, "constructor", m),
            (m.displayName = u(g, c, "GeneratorFunction")),
            (t.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return (
                !!e &&
                (e === m || "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (t.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, g)
                  : ((t.__proto__ = g), u(t, c, "GeneratorFunction")),
                (t.prototype = Object.create(x)),
                t
              );
            }),
            (t.awrap = function (t) {
              return { __await: t };
            }),
            E(S.prototype),
            u(S.prototype, a, function () {
              return this;
            }),
            (t.AsyncIterator = S),
            (t.async = function (e, r, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new S(s(e, r, n, o), i);
              return t.isGeneratorFunction(r)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            E(x),
            u(x, c, "Generator"),
            u(x, i, function () {
              return this;
            }),
            u(x, "toString", function () {
              return "[object Generator]";
            }),
            (t.keys = function (t) {
              var e = [];
              for (var r in t) e.push(r);
              return (
                e.reverse(),
                function r() {
                  for (; e.length; ) {
                    var n = e.pop();
                    if (n in t) return (r.value = n), (r.done = !1), r;
                  }
                  return (r.done = !0), r;
                }
              );
            }),
            (t.values = I),
            (k.prototype = {
              constructor: k,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = e),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = e),
                  this.tryEntries.forEach(j),
                  !t)
                )
                  for (var r in this)
                    "t" === r.charAt(0) &&
                      n.call(this, r) &&
                      !isNaN(+r.slice(1)) &&
                      (this[r] = e);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (t) {
                if (this.done) throw t;
                var r = this;
                function o(n, o) {
                  return (
                    (c.type = "throw"),
                    (c.arg = t),
                    (r.next = n),
                    o && ((r.method = "next"), (r.arg = e)),
                    !!o
                  );
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var a = this.tryEntries[i],
                    c = a.completion;
                  if ("root" === a.tryLoc) return o("end");
                  if (a.tryLoc <= this.prev) {
                    var u = n.call(a, "catchLoc"),
                      s = n.call(a, "finallyLoc");
                    if (u && s) {
                      if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                      if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                    } else if (u) {
                      if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    } else {
                      if (!s)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r];
                  if (
                    o.tryLoc <= this.prev &&
                    n.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o;
                    break;
                  }
                }
                i &&
                  ("break" === t || "continue" === t) &&
                  i.tryLoc <= e &&
                  e <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), y)
                    : this.complete(a)
                );
              },
              complete: function (t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                  y
                );
              },
              finish: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.finallyLoc === t)
                    return this.complete(r.completion, r.afterLoc), j(r), y;
                }
              },
              catch: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var o = n.arg;
                      j(r);
                    }
                    return o;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (t, r, n) {
                return (
                  (this.delegate = {
                    iterator: I(t),
                    resultName: r,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = e),
                  y
                );
              },
            }),
            t
          );
        })(t.exports);
        try {
          regeneratorRuntime = e;
        } catch (t) {
          "object" == typeof globalThis
            ? (globalThis.regeneratorRuntime = e)
            : Function("r", "regeneratorRuntime = r")(e);
        }
      },
    },
    e = {};
  function r(n) {
    var o = e[n];
    if (void 0 !== o) return o.exports;
    var i = (e[n] = { exports: {} });
    return t[n](i, i.exports, r), i.exports;
  }
  (r.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return r.d(e, { a: e }), e;
  }),
    (r.d = (t, e) => {
      for (var n in e)
        r.o(e, n) &&
          !r.o(t, n) &&
          Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
    }),
    (r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (r.r = (t) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (() => {
      r.S = {};
      var t = {},
        e = {};
      r.I = (n, o) => {
        o || (o = []);
        var i = e[n];
        if ((i || (i = e[n] = {}), !(o.indexOf(i) >= 0))) {
          if ((o.push(i), t[n])) return t[n];
          r.o(r.S, n) || (r.S[n] = {}), r.S[n];
          var a = [];
          return (t[n] = a.length ? Promise.all(a).then(() => (t[n] = 1)) : 1);
        }
      };
    })();
  var n = {};
  (() => {
    "use strict";
    function t(t, e, r, n, o, i, a) {
      try {
        var c = t[i](a),
          u = c.value;
      } catch (t) {
        return void r(t);
      }
      c.done ? e(u) : Promise.resolve(u).then(n, o);
    }
    r.r(n), r.d(n, { initWidgets: () => m });
    var e = r(757),
      o = r.n(e);
    var i = r(487);
    function a(t, e, r) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    function c(t) {
      return (c =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    var u = function (t) {
      var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = arguments.length > 2 ? arguments[2] : void 0,
        n = arguments.length > 3 ? arguments[3] : void 0;
      if (!t) return !1;
      var o = n || document;
      return new Promise(function (n, i) {
        if (r || !o.getElementById(t)) {
          var a = o.createElement("script");
          (a.src = t),
            (a.id = t),
            e.defer && (a.defer = !0),
            e.async && (a.async = !0),
            a.addEventListener("load", function () {
              setTimeout(function () {
                n();
              });
            }),
            a.addEventListener("error", function (t) {
              i(t);
            }),
            o.head.appendChild(a);
        } else n("Script already added to page. Use forced parameter to load/execute the script ");
      });
    };
    function s(t) {
      return t && "object" === c(t) && !Array.isArray(t);
    }
    function l(t) {
      for (
        var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1;
        n < e;
        n++
      )
        r[n - 1] = arguments[n];
      if (!r.length) return t;
      var o = r.shift();
      return (
        s(t) &&
          s(o) &&
          Object.keys(o).forEach(function (e) {
            s(o[e])
              ? (t[e] || Object.assign(t, a({}, e, {})), l(t[e], o[e]))
              : Object.assign(t, a({}, e, o[e]));
          }),
        l.apply(void 0, [t].concat(r))
      );
    }
    const f = function (t, e) {
      return u(
        "".concat(i.LIBRARY_DOMAIN, "/").concat(t, ".js"),
        void 0,
        void 0,
        e
      );
    };
    var h = "SYMPLOR WIDGETS SDK :: ";
    const p = function () {
      for (var t, e = arguments.length, r = new Array(e), n = 0; n < e; n++)
        r[n] = arguments[n];
      (t = console).log.apply(t, [h].concat(r));
    };
    var d,
      y,
      v = function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = t.symplorSlot,
          r = t.symplorUser,
          n = ""
            .concat(i.FEED_END_POINT, "/")
            .concat(r, "/")
            .concat(e, ".json");
        return n;
      },
      m = function (e, r) {
        var n = e ? [e] : document.querySelectorAll("[data-symplor-widget]"),
          i = [];
        return (
          n.forEach(function (e) {
            var n,
              a,
              c = r || e.dataset;
            i.push(
              ((n = e),
              (a = c),
              new Promise(
                (function () {
                  var e,
                    r =
                      ((e = o().mark(function t(e, r) {
                        var i, c, s, h, d, y, m, g, w, b, L, x, E, S, _, O, j;
                        return o().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (
                                    ((i = a.props),
                                    (c = void 0 === i ? {} : i),
                                    (s = []),
                                    (h = a.widgetFeed),
                                    (y = v(a)),
                                    (t.prev = 4),
                                    h)
                                  ) {
                                    t.next = 8;
                                    break;
                                  }
                                  return (
                                    (t.next = 8),
                                    ((o = y),
                                    fetch(o).then(function (t) {
                                      return t.json();
                                    })).then(function (t) {
                                      h = t;
                                    })
                                  );
                                case 8:
                                  if (h.type) {
                                    t.next = 11;
                                    break;
                                  }
                                  return r(), t.abrupt("return");
                                case 11:
                                  return (
                                    (h.error || (h.data && h.data.error)) &&
                                      r(),
                                    l((g = {}), h, c),
                                    "yes" !== a.symplorSkipIframe &&
                                      (((w =
                                        document.createElement(
                                          "iframe"
                                        )).height = 250),
                                      (w.width = "100%"),
                                      (w.style = "border: none;"),
                                      n.append(w)),
                                    (b = window),
                                    (L = document),
                                    "yes" !== a.symplorSkipIframe && w
                                      ? ((b = w.contentWindow),
                                        (L = w.contentDocument))
                                      : (g.symplorSkipIframe = "yes"),
                                    s.push(
                                      f(h.type, L).then(function () {
                                        d = b.symplor.components[h.type];
                                      })
                                    ),
                                    (t.next = 21),
                                    Promise.all(s)
                                  );
                                case 21:
                                  (x = d(g)),
                                    (E = x.html),
                                    (S = x.styles),
                                    (_ = x.onLoad),
                                    L.querySelector(
                                      '[data-symplor-css-widget="'.concat(
                                        h.type,
                                        '"]'
                                      )
                                    ) ||
                                      ((O =
                                        L.createElement("style")).setAttribute(
                                        "data-symplor-css-widget",
                                        h.type
                                      ),
                                      (O.innerHTML = S),
                                      L.head.appendChild(O)),
                                    "yes" !== a.symplorSkipIframe
                                      ? (L.body.innerHTML =
                                          '<div id="symplor_widget">'.concat(
                                            E,
                                            "</div>"
                                          ))
                                      : (L.getElementById(
                                          "symplor_widget"
                                        ).innerHTML = E),
                                    u(
                                      "https://www.googletagmanager.com/gtag/js?id=G-M9SNMLX6QM",
                                      void 0,
                                      void 0,
                                      L
                                    ),
                                    ((j = L.createElement("script")).innerHTML =
                                      "window.dataLayer = window.dataLayer || [];\n      function gtag(){window.dataLayer.push(arguments);}\n      gtag('js', new Date());\n      gtag('config', 'G-M9SNMLX6QM');"),
                                    L.head.appendChild(j),
                                    b.gtag("event", "sdk", {
                                      action: "widget_loaded",
                                      label: "widgetFeed.type",
                                      pp_url:
                                        null === (m = window.location) ||
                                        void 0 === m
                                          ? void 0
                                          : m.href,
                                    }),
                                    setTimeout(function () {
                                      var t =
                                        L.getElementById("symplor_widget");
                                      "function" == typeof _ &&
                                        _(
                                          "yes" !== a.symplorSkipIframe ? w : t,
                                          y
                                        ),
                                        "yes" !== a.symplorSkipIframe &&
                                          setTimeout(function () {
                                            (w.height = t.scrollHeight),
                                              b.ResizeObserver &&
                                                new b.ResizeObserver(
                                                  function () {
                                                    w.height = t.scrollHeight;
                                                  }
                                                ).observe(t);
                                          }, 0);
                                    }, 0),
                                    e(g),
                                    (t.next = 37);
                                  break;
                                case 33:
                                  (t.prev = 33),
                                    (t.t0 = t.catch(4)),
                                    r(),
                                    p(
                                      "Error in fetching feed Url or in loading library component---\x3e".concat(
                                        t.t0
                                      )
                                    );
                                case 37:
                                case "end":
                                  return t.stop();
                              }
                            var o;
                          },
                          t,
                          null,
                          [[4, 33]]
                        );
                      })),
                      function () {
                        var r = this,
                          n = arguments;
                        return new Promise(function (o, i) {
                          var a = e.apply(r, n);
                          function c(e) {
                            t(a, o, i, c, u, "next", e);
                          }
                          function u(e) {
                            t(a, o, i, c, u, "throw", e);
                          }
                          c(void 0);
                        });
                      });
                  return function (t, e) {
                    return r.apply(this, arguments);
                  };
                })()
              ))
                .then(function () {
                  e.setAttribute("data-symplor-processed", "yes");
                })
                .catch(function (t) {
                  e.setAttribute("data-symplor-processed", "yes"),
                    e.setAttribute("data-symplor-error", "yes"),
                    p(t);
                })
            );
          }),
          i
        );
      },
      g = !1;
    ((null !== (d = window) &&
      void 0 !== d &&
      null !== (y = d.symplor_widgets) &&
      void 0 !== y &&
      y.skipAutoInit) ||
      "yes" ===
        document.body.getAttribute("data-symplor-widgets-skip-auto-init")) &&
      (g = !0),
      g || m();
  })(),
    (window.symplor_widgets = n);
})();
//# sourceMappingURL=v1.js.map
