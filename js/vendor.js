/*!For license information please see vendor.js.LICENSE.txt*/
(self.webpackChunk_locomotivemtl_boilerplate = self.webpackChunk_locomotivemtl_boilerplate || []).push([
    [121], {
        78: function(t, e, i) {
            "use strict";
            i.d(e, {
                K: function() {
                    return N
                }
            });
            var s = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"],
                r = s.join(","),
                n = "undefined" == typeof Element,
                a = n ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
                o = !n && Element.prototype.getRootNode ? function(t) {
                    var e;
                    return null == t || null === (e = t.getRootNode) || void 0 === e ? void 0 : e.call(t)
                } : function(t) {
                    return null == t ? void 0 : t.ownerDocument
                },
                h = function t(e, i) {
                    var s;
                    void 0 === i && (i = !0);
                    var r = null == e || null === (s = e.getAttribute) || void 0 === s ? void 0 : s.call(e, "inert");
                    return "" === r || "true" === r || i && e && t(e.parentNode)
                },
                l = function(t, e, i) {
                    if (h(t)) return [];
                    var s = Array.prototype.slice.apply(t.querySelectorAll(r));
                    return e && a.call(t, r) && s.unshift(t), s = s.filter(i)
                },
                u = function t(e, i, s) {
                    for (var n = [], o = Array.from(e); o.length;) {
                        var l = o.shift();
                        if (!h(l, !1))
                            if ("SLOT" === l.tagName) {
                                var u = l.assignedElements(),
                                    c = t(u.length ? u : l.children, !0, s);
                                s.flatten ? n.push.apply(n, c) : n.push({
                                    scopeParent: l,
                                    candidates: c
                                })
                            } else {
                                a.call(l, r) && s.filter(l) && (i || !e.includes(l)) && n.push(l);
                                var p = l.shadowRoot || "function" == typeof s.getShadowRoot && s.getShadowRoot(l),
                                    f = !h(p, !1) && (!s.shadowRootFilter || s.shadowRootFilter(l));
                                if (p && f) {
                                    var d = t(!0 === p ? l.children : p.children, !0, s);
                                    s.flatten ? n.push.apply(n, d) : n.push({
                                        scopeParent: l,
                                        candidates: d
                                    })
                                } else o.unshift.apply(o, l.children)
                            }
                    }
                    return n
                },
                c = function(t) {
                    return !isNaN(parseInt(t.getAttribute("tabindex"), 10))
                },
                p = function(t) {
                    if (!t) throw new Error("No node provided");
                    return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || function(t) {
                        var e, i = null == t || null === (e = t.getAttribute) || void 0 === e ? void 0 : e.call(t, "contenteditable");
                        return "" === i || "true" === i
                    }(t)) && !c(t) ? 0 : t.tabIndex
                },
                f = function(t, e) {
                    return t.tabIndex === e.tabIndex ? t.documentOrder - e.documentOrder : t.tabIndex - e.tabIndex
                },
                d = function(t) {
                    return "INPUT" === t.tagName
                },
                m = function(t) {
                    return function(t) {
                        return d(t) && "radio" === t.type
                    }(t) && ! function(t) {
                        if (!t.name) return !0;
                        var e, i = t.form || o(t),
                            s = function(t) {
                                return i.querySelectorAll('input[type="radio"][name="' + t + '"]')
                            };
                        if ("undefined" != typeof window && void 0 !== window.CSS && "function" == typeof window.CSS.escape) e = s(window.CSS.escape(t.name));
                        else try {
                            e = s(t.name)
                        } catch (t) {
                            return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", t.message), !1
                        }
                        var r = function(t, e) {
                            for (var i = 0; i < t.length; i++)
                                if (t[i].checked && t[i].form === e) return t[i]
                        }(e, t.form);
                        return !r || r === t
                    }(t)
                },
                g = function(t) {
                    var e = t.getBoundingClientRect(),
                        i = e.width,
                        s = e.height;
                    return 0 === i && 0 === s
                },
                v = function(t, e) {
                    var i = e.displayCheck,
                        s = e.getShadowRoot;
                    if ("hidden" === getComputedStyle(t).visibility) return !0;
                    var r = a.call(t, "details>summary:first-of-type") ? t.parentElement : t;
                    if (a.call(r, "details:not([open]) *")) return !0;
                    if (i && "full" !== i && "legacy-full" !== i) {
                        if ("non-zero-area" === i) return g(t)
                    } else {
                        if ("function" == typeof s) {
                            for (var n = t; t;) {
                                var h = t.parentElement,
                                    l = o(t);
                                if (h && !h.shadowRoot && !0 === s(h)) return g(t);
                                t = t.assignedSlot ? t.assignedSlot : h || l === t.ownerDocument ? h : l.host
                            }
                            t = n
                        }
                        if (function(t) {
                                var e, i, s, r, n = t && o(t),
                                    a = null === (e = n) || void 0 === e ? void 0 : e.host,
                                    h = !1;
                                if (n && n !== t)
                                    for (h = !!(null !== (i = a) && void 0 !== i && null !== (s = i.ownerDocument) && void 0 !== s && s.contains(a) || null != t && null !== (r = t.ownerDocument) && void 0 !== r && r.contains(t)); !h && a;) {
                                        var l, u, c;
                                        h = !(null === (u = a = null === (l = n = o(a)) || void 0 === l ? void 0 : l.host) || void 0 === u || null === (c = u.ownerDocument) || void 0 === c || !c.contains(a))
                                    }
                                return h
                            }(t)) return !t.getClientRects().length;
                        if ("legacy-full" !== i) return !0
                    }
                    return !1
                },
                y = function(t, e) {
                    return !(e.disabled || h(e) || function(t) {
                        return d(t) && "hidden" === t.type
                    }(e) || v(e, t) || function(t) {
                        return "DETAILS" === t.tagName && Array.prototype.slice.apply(t.children).some((function(t) {
                            return "SUMMARY" === t.tagName
                        }))
                    }(e) || function(t) {
                        if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
                            for (var e = t.parentElement; e;) {
                                if ("FIELDSET" === e.tagName && e.disabled) {
                                    for (var i = 0; i < e.children.length; i++) {
                                        var s = e.children.item(i);
                                        if ("LEGEND" === s.tagName) return !!a.call(e, "fieldset[disabled] *") || !s.contains(t)
                                    }
                                    return !0
                                }
                                e = e.parentElement
                            }
                        return !1
                    }(e))
                },
                D = function(t, e) {
                    return !(m(e) || p(e) < 0 || !y(t, e))
                },
                _ = function(t) {
                    var e = parseInt(t.getAttribute("tabindex"), 10);
                    return !!(isNaN(e) || e >= 0)
                },
                b = function t(e) {
                    var i = [],
                        s = [];
                    return e.forEach((function(e, r) {
                        var n = !!e.scopeParent,
                            a = n ? e.scopeParent : e,
                            o = function(t, e) {
                                var i = p(t);
                                return i < 0 && e && !c(t) ? 0 : i
                            }(a, n),
                            h = n ? t(e.candidates) : a;
                        0 === o ? n ? i.push.apply(i, h) : i.push(a) : s.push({
                            documentOrder: r,
                            tabIndex: o,
                            item: e,
                            isScope: n,
                            content: h
                        })
                    })), s.sort(f).reduce((function(t, e) {
                        return e.isScope ? t.push.apply(t, e.content) : t.push(e.content), t
                    }), []).concat(i)
                },
                C = function(t, e) {
                    if (e = e || {}, !t) throw new Error("No node provided");
                    return !1 !== a.call(t, r) && D(e, t)
                },
                w = s.concat("iframe").join(","),
                E = function(t, e) {
                    if (e = e || {}, !t) throw new Error("No node provided");
                    return !1 !== a.call(t, w) && y(e, t)
                };

            function x(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(t);
                    e && (s = s.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), i.push.apply(i, s)
                }
                return i
            }

            function S(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? x(Object(i), !0).forEach((function(e) {
                        F(t, e, i[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : x(Object(i)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                    }))
                }
                return t
            }

            function F(t, e, i) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" != typeof t || null === t) return t;
                        var i = t[Symbol.toPrimitive];
                        if (void 0 !== i) {
                            var s = i.call(t, e || "default");
                            if ("object" != typeof s) return s;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" == typeof e ? e : String(e)
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t
            }
            var k = function(t, e) {
                    if (t.length > 0) {
                        var i = t[t.length - 1];
                        i !== e && i.pause()
                    }
                    var s = t.indexOf(e); - 1 === s || t.splice(s, 1), t.push(e)
                },
                T = function(t, e) {
                    var i = t.indexOf(e); - 1 !== i && t.splice(i, 1), t.length > 0 && t[t.length - 1].unpause()
                },
                A = function(t) {
                    return "Tab" === (null == t ? void 0 : t.key) || 9 === (null == t ? void 0 : t.keyCode)
                },
                M = function(t) {
                    return A(t) && !t.shiftKey
                },
                P = function(t) {
                    return A(t) && t.shiftKey
                },
                I = function(t) {
                    return setTimeout(t, 0)
                },
                O = function(t, e) {
                    var i = -1;
                    return t.every((function(t, s) {
                        return !e(t) || (i = s, !1)
                    })), i
                },
                L = function(t) {
                    for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), s = 1; s < e; s++) i[s - 1] = arguments[s];
                    return "function" == typeof t ? t.apply(void 0, i) : t
                },
                R = function(t) {
                    return t.target.shadowRoot && "function" == typeof t.composedPath ? t.composedPath()[0] : t.target
                },
                B = [],
                N = function(t, e) {
                    var i, s = (null == e ? void 0 : e.document) || document,
                        r = (null == e ? void 0 : e.trapStack) || B,
                        n = S({
                            returnFocusOnDeactivate: !0,
                            escapeDeactivates: !0,
                            delayInitialFocus: !0,
                            isKeyForward: M,
                            isKeyBackward: P
                        }, e),
                        a = {
                            containers: [],
                            containerGroups: [],
                            tabbableGroups: [],
                            nodeFocusedBeforeActivation: null,
                            mostRecentlyFocusedNode: null,
                            active: !1,
                            paused: !1,
                            delayInitialFocusTimer: void 0,
                            recentNavEvent: void 0
                        },
                        o = function(t, e, i) {
                            return t && void 0 !== t[e] ? t[e] : n[i || e]
                        },
                        h = function(t, e) {
                            var i = "function" == typeof(null == e ? void 0 : e.composedPath) ? e.composedPath() : void 0;
                            return a.containerGroups.findIndex((function(e) {
                                var s = e.container,
                                    r = e.tabbableNodes;
                                return s.contains(t) || (null == i ? void 0 : i.includes(s)) || r.find((function(e) {
                                    return e === t
                                }))
                            }))
                        },
                        c = function(t) {
                            var e = n[t];
                            if ("function" == typeof e) {
                                for (var i = arguments.length, r = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) r[a - 1] = arguments[a];
                                e = e.apply(void 0, r)
                            }
                            if (!0 === e && (e = void 0), !e) {
                                if (void 0 === e || !1 === e) return e;
                                throw new Error("`".concat(t, "` was specified but was not a node, or did not return a node"))
                            }
                            var o = e;
                            if ("string" == typeof e && !(o = s.querySelector(e))) throw new Error("`".concat(t, "` as selector refers to no known node"));
                            return o
                        },
                        f = function() {
                            var t = c("initialFocus");
                            if (!1 === t) return !1;
                            if (void 0 === t || !E(t, n.tabbableOptions))
                                if (h(s.activeElement) >= 0) t = s.activeElement;
                                else {
                                    var e = a.tabbableGroups[0];
                                    t = e && e.firstTabbableNode || c("fallbackFocus")
                                } if (!t) throw new Error("Your focus-trap needs to have at least one focusable element");
                            return t
                        },
                        d = function() {
                            if (a.containerGroups = a.containers.map((function(t) {
                                    var e = function(t, e) {
                                            var i;
                                            return i = (e = e || {}).getShadowRoot ? u([t], e.includeContainer, {
                                                filter: D.bind(null, e),
                                                flatten: !1,
                                                getShadowRoot: e.getShadowRoot,
                                                shadowRootFilter: _
                                            }) : l(t, e.includeContainer, D.bind(null, e)), b(i)
                                        }(t, n.tabbableOptions),
                                        i = function(t, e) {
                                            return (e = e || {}).getShadowRoot ? u([t], e.includeContainer, {
                                                filter: y.bind(null, e),
                                                flatten: !0,
                                                getShadowRoot: e.getShadowRoot
                                            }) : l(t, e.includeContainer, y.bind(null, e))
                                        }(t, n.tabbableOptions),
                                        s = e.length > 0 ? e[0] : void 0,
                                        r = e.length > 0 ? e[e.length - 1] : void 0,
                                        a = i.find((function(t) {
                                            return C(t)
                                        })),
                                        o = i.slice().reverse().find((function(t) {
                                            return C(t)
                                        })),
                                        h = !!e.find((function(t) {
                                            return p(t) > 0
                                        }));
                                    return {
                                        container: t,
                                        tabbableNodes: e,
                                        focusableNodes: i,
                                        posTabIndexesFound: h,
                                        firstTabbableNode: s,
                                        lastTabbableNode: r,
                                        firstDomTabbableNode: a,
                                        lastDomTabbableNode: o,
                                        nextTabbableNode: function(t) {
                                            var s = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                                r = e.indexOf(t);
                                            return r < 0 ? s ? i.slice(i.indexOf(t) + 1).find((function(t) {
                                                return C(t)
                                            })) : i.slice(0, i.indexOf(t)).reverse().find((function(t) {
                                                return C(t)
                                            })) : e[r + (s ? 1 : -1)]
                                        }
                                    }
                                })), a.tabbableGroups = a.containerGroups.filter((function(t) {
                                    return t.tabbableNodes.length > 0
                                })), a.tabbableGroups.length <= 0 && !c("fallbackFocus")) throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
                            if (a.containerGroups.find((function(t) {
                                    return t.posTabIndexesFound
                                })) && a.containerGroups.length > 1) throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")
                        },
                        m = function t(e) {
                            var i = e.activeElement;
                            if (i) return i.shadowRoot && null !== i.shadowRoot.activeElement ? t(i.shadowRoot) : i
                        },
                        g = function t(e) {
                            !1 !== e && e !== m(document) && (e && e.focus ? (e.focus({
                                preventScroll: !!n.preventScroll
                            }), a.mostRecentlyFocusedNode = e, function(t) {
                                return t.tagName && "input" === t.tagName.toLowerCase() && "function" == typeof t.select
                            }(e) && e.select()) : t(f()))
                        },
                        v = function(t) {
                            var e = c("setReturnFocus", t);
                            return e || !1 !== e && t
                        },
                        w = function(t) {
                            var e = t.target,
                                i = t.event,
                                s = t.isBackward,
                                r = void 0 !== s && s;
                            e = e || R(i), d();
                            var o = null;
                            if (a.tabbableGroups.length > 0) {
                                var l = h(e, i),
                                    u = l >= 0 ? a.containerGroups[l] : void 0;
                                if (l < 0) o = r ? a.tabbableGroups[a.tabbableGroups.length - 1].lastTabbableNode : a.tabbableGroups[0].firstTabbableNode;
                                else if (r) {
                                    var f = O(a.tabbableGroups, (function(t) {
                                        var i = t.firstTabbableNode;
                                        return e === i
                                    }));
                                    if (f < 0 && (u.container === e || E(e, n.tabbableOptions) && !C(e, n.tabbableOptions) && !u.nextTabbableNode(e, !1)) && (f = l), f >= 0) {
                                        var m = 0 === f ? a.tabbableGroups.length - 1 : f - 1,
                                            g = a.tabbableGroups[m];
                                        o = p(e) >= 0 ? g.lastTabbableNode : g.lastDomTabbableNode
                                    } else A(i) || (o = u.nextTabbableNode(e, !1))
                                } else {
                                    var v = O(a.tabbableGroups, (function(t) {
                                        var i = t.lastTabbableNode;
                                        return e === i
                                    }));
                                    if (v < 0 && (u.container === e || E(e, n.tabbableOptions) && !C(e, n.tabbableOptions) && !u.nextTabbableNode(e)) && (v = l), v >= 0) {
                                        var y = v === a.tabbableGroups.length - 1 ? 0 : v + 1,
                                            D = a.tabbableGroups[y];
                                        o = p(e) >= 0 ? D.firstTabbableNode : D.firstDomTabbableNode
                                    } else A(i) || (o = u.nextTabbableNode(e))
                                }
                            } else o = c("fallbackFocus");
                            return o
                        },
                        x = function(t) {
                            var e = R(t);
                            h(e, t) >= 0 || (L(n.clickOutsideDeactivates, t) ? i.deactivate({
                                returnFocus: n.returnFocusOnDeactivate
                            }) : L(n.allowOutsideClick, t) || t.preventDefault())
                        },
                        F = function(t) {
                            var e = R(t),
                                i = h(e, t) >= 0;
                            if (i || e instanceof Document) i && (a.mostRecentlyFocusedNode = e);
                            else {
                                var s;
                                t.stopImmediatePropagation();
                                var r = !0;
                                if (a.mostRecentlyFocusedNode)
                                    if (p(a.mostRecentlyFocusedNode) > 0) {
                                        var o = h(a.mostRecentlyFocusedNode),
                                            l = a.containerGroups[o].tabbableNodes;
                                        if (l.length > 0) {
                                            var u = l.findIndex((function(t) {
                                                return t === a.mostRecentlyFocusedNode
                                            }));
                                            u >= 0 && (n.isKeyForward(a.recentNavEvent) ? u + 1 < l.length && (s = l[u + 1], r = !1) : u - 1 >= 0 && (s = l[u - 1], r = !1))
                                        }
                                    } else a.containerGroups.some((function(t) {
                                        return t.tabbableNodes.some((function(t) {
                                            return p(t) > 0
                                        }))
                                    })) || (r = !1);
                                else r = !1;
                                r && (s = w({
                                    target: a.mostRecentlyFocusedNode,
                                    isBackward: n.isKeyBackward(a.recentNavEvent)
                                })), g(s || (a.mostRecentlyFocusedNode || f()))
                            }
                            a.recentNavEvent = void 0
                        },
                        N = function(t) {
                            if (!(e = t, "Escape" !== (null == e ? void 0 : e.key) && "Esc" !== (null == e ? void 0 : e.key) && 27 !== (null == e ? void 0 : e.keyCode) || !1 === L(n.escapeDeactivates, t))) return t.preventDefault(), void i.deactivate();
                            var e;
                            (n.isKeyForward(t) || n.isKeyBackward(t)) && function(t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                a.recentNavEvent = t;
                                var i = w({
                                    event: t,
                                    isBackward: e
                                });
                                i && (A(t) && t.preventDefault(), g(i))
                            }(t, n.isKeyBackward(t))
                        },
                        z = function(t) {
                            var e = R(t);
                            h(e, t) >= 0 || L(n.clickOutsideDeactivates, t) || L(n.allowOutsideClick, t) || (t.preventDefault(), t.stopImmediatePropagation())
                        },
                        V = function() {
                            if (a.active) return k(r, i), a.delayInitialFocusTimer = n.delayInitialFocus ? I((function() {
                                g(f())
                            })) : g(f()), s.addEventListener("focusin", F, !0), s.addEventListener("mousedown", x, {
                                capture: !0,
                                passive: !1
                            }), s.addEventListener("touchstart", x, {
                                capture: !0,
                                passive: !1
                            }), s.addEventListener("click", z, {
                                capture: !0,
                                passive: !1
                            }), s.addEventListener("keydown", N, {
                                capture: !0,
                                passive: !1
                            }), i
                        },
                        j = function() {
                            if (a.active) return s.removeEventListener("focusin", F, !0), s.removeEventListener("mousedown", x, !0), s.removeEventListener("touchstart", x, !0), s.removeEventListener("click", z, !0), s.removeEventListener("keydown", N, !0), i
                        },
                        q = "undefined" != typeof window && "MutationObserver" in window ? new MutationObserver((function(t) {
                            t.some((function(t) {
                                return Array.from(t.removedNodes).some((function(t) {
                                    return t === a.mostRecentlyFocusedNode
                                }))
                            })) && g(f())
                        })) : void 0,
                        W = function() {
                            q && (q.disconnect(), a.active && !a.paused && a.containers.map((function(t) {
                                q.observe(t, {
                                    subtree: !0,
                                    childList: !0
                                })
                            })))
                        };
                    return (i = {
                        get active() {
                            return a.active
                        },
                        get paused() {
                            return a.paused
                        },
                        activate: function(t) {
                            if (a.active) return this;
                            var e = o(t, "onActivate"),
                                i = o(t, "onPostActivate"),
                                r = o(t, "checkCanFocusTrap");
                            r || d(), a.active = !0, a.paused = !1, a.nodeFocusedBeforeActivation = s.activeElement, null == e || e();
                            var n = function() {
                                r && d(), V(), W(), null == i || i()
                            };
                            return r ? (r(a.containers.concat()).then(n, n), this) : (n(), this)
                        },
                        deactivate: function(t) {
                            if (!a.active) return this;
                            var e = S({
                                onDeactivate: n.onDeactivate,
                                onPostDeactivate: n.onPostDeactivate,
                                checkCanReturnFocus: n.checkCanReturnFocus
                            }, t);
                            clearTimeout(a.delayInitialFocusTimer), a.delayInitialFocusTimer = void 0, j(), a.active = !1, a.paused = !1, W(), T(r, i);
                            var s = o(e, "onDeactivate"),
                                h = o(e, "onPostDeactivate"),
                                l = o(e, "checkCanReturnFocus"),
                                u = o(e, "returnFocus", "returnFocusOnDeactivate");
                            null == s || s();
                            var c = function() {
                                I((function() {
                                    u && g(v(a.nodeFocusedBeforeActivation)), null == h || h()
                                }))
                            };
                            return u && l ? (l(v(a.nodeFocusedBeforeActivation)).then(c, c), this) : (c(), this)
                        },
                        pause: function(t) {
                            if (a.paused || !a.active) return this;
                            var e = o(t, "onPause"),
                                i = o(t, "onPostPause");
                            return a.paused = !0, null == e || e(), j(), W(), null == i || i(), this
                        },
                        unpause: function(t) {
                            if (!a.paused || !a.active) return this;
                            var e = o(t, "onUnpause"),
                                i = o(t, "onPostUnpause");
                            return a.paused = !1, null == e || e(), d(), V(), W(), null == i || i(), this
                        },
                        updateContainerElements: function(t) {
                            var e = [].concat(t).filter(Boolean);
                            return a.containers = e.map((function(t) {
                                return "string" == typeof t ? s.querySelector(t) : t
                            })), a.active && d(), W(), this
                        }
                    }).updateContainerElements(t), i
                }
        },
        127: function(t, e, i) {
            "use strict";
            i.d(e, {
                C: function() {
                    return d
                }
            });
            var s, r, n = i(422),
                a = function() {
                    function t(t) {
                        this.chars = (0, n.K6)(t), this.sets = [], this.length = 50;
                        for (var e = 0; e < 20; e++) this.sets[e] = l(80, this.chars)
                    }
                    return t.prototype.grow = function(t) {
                        for (var e = 0; e < 20; e++) this.sets[e] += l(t - this.length, this.chars);
                        this.length = t
                    }, t
                }(),
                o = function() {
                    return s || "undefined" != typeof window && (s = window.gsap) && s.registerPlugin && s
                },
                h = /\s+/g,
                l = function(t, e) {
                    for (var i = e.length, s = ""; --t > -1;) s += e[~~(Math.random() * i)];
                    return s
                },
                u = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                c = u.toLowerCase(),
                p = {
                    upperCase: new a(u),
                    lowerCase: new a(c),
                    upperAndLowerCase: new a(u + c)
                },
                f = function() {
                    r = s = o()
                },
                d = {
                    version: "3.12.5",
                    name: "scrambleText",
                    register: function(t, e, i) {
                        s = t, f()
                    },
                    init: function(t, e, i, s, o) {
                        if (r || f(), this.prop = "innerHTML" in t ? "innerHTML" : "textContent" in t ? "textContent" : 0, this.prop) {
                            this.target = t, "object" != typeof e && (e = {
                                text: e
                            });
                            var l, u, c, d, m = e.text || e.value || "",
                                g = !1 !== e.trim,
                                v = this;
                            return v.delimiter = l = e.delimiter || "", v.original = (0, n.K6)((0, n.q4)(t).replace(h, " ").split("&nbsp;").join(""), l, g), "{original}" !== m && !0 !== m && null != m || (m = v.original.join(l)), v.text = (0, n.K6)((m || "").replace(h, " "), l, g), v.hasClass = !(!e.newClass && !e.oldClass), v.newClass = e.newClass, v.oldClass = e.oldClass, d = "" === l, v.textHasEmoji = d && !!v.text.emoji, v.charsHaveEmoji = !!e.chars && !!(0, n.K6)(e.chars).emoji, v.length = d ? v.original.length : v.original.join(l).length, v.lengthDif = (d ? v.text.length : v.text.join(l).length) - v.length, v.fillChar = e.fillChar || e.chars && ~e.chars.indexOf(" ") ? "&nbsp;" : "", v.charSet = c = p[e.chars || "upperCase"] || new a(e.chars), v.speed = .05 / (e.speed || 1), v.prevScrambleTime = 0, v.setIndex = 20 * Math.random() | 0, (u = v.length + Math.max(v.lengthDif, 0)) > c.length && c.grow(u), v.chars = c.sets[v.setIndex], v.revealDelay = e.revealDelay || 0, v.tweenLength = !1 !== e.tweenLength, v.tween = i, v.rightToLeft = !!e.rightToLeft, v._props.push("scrambleText", "text"), 1
                        }
                    },
                    render: function(t, e) {
                        var i, s, r, a, o, h, l, u, c, p, f, d = e.target,
                            m = e.prop,
                            g = e.text,
                            v = e.delimiter,
                            y = e.tween,
                            D = e.prevScrambleTime,
                            _ = e.revealDelay,
                            b = e.setIndex,
                            C = e.chars,
                            w = e.charSet,
                            E = e.length,
                            x = e.textHasEmoji,
                            S = e.charsHaveEmoji,
                            F = e.lengthDif,
                            k = e.tweenLength,
                            T = e.oldClass,
                            A = e.newClass,
                            M = e.rightToLeft,
                            P = e.fillChar,
                            I = e.speed,
                            O = e.original,
                            L = e.hasClass,
                            R = g.length,
                            B = y._time,
                            N = B - D;
                        _ && (y._from && (B = y._dur - B), t = 0 === B ? 0 : B < _ ? 1e-6 : B === y._dur ? 1 : y._ease((B - _) / (y._dur - _))), t < 0 ? t = 0 : t > 1 && (t = 1), M && (t = 1 - t), i = ~~(t * R + .5), t ? ((N > I || N < -I) && (e.setIndex = b = (b + (19 * Math.random() | 0)) % 20, e.chars = w.sets[b], e.prevScrambleTime += N), a = C) : a = O.join(v), f = y._from ? t : 1 - t, p = E + (k ? y._from ? f * f * f : 1 - f * f * f : 1) * F, M ? 1 !== t || !y._from && "isFromStart" !== y.data ? (l = g.slice(i).join(v), r = S ? (0, n.K6)(a).slice(0, p - (x ? (0, n.K6)(l) : l).length + .5 | 0).join("") : a.substr(0, p - (x ? (0, n.K6)(l) : l).length + .5 | 0), a = l) : (r = "", a = O.join(v)) : (r = g.slice(0, i).join(v), s = (x ? (0, n.K6)(r) : r).length, a = S ? (0, n.K6)(a).slice(s, p + .5 | 0).join("") : a.substr(s, p - s + .5 | 0)), l = L ? ((o = (u = M ? T : A) && 0 !== i) ? "<span class='" + u + "'>" : "") + r + (o ? "</span>" : "") + ((h = (c = M ? A : T) && i !== R) ? "<span class='" + c + "'>" : "") + v + a + (h ? "</span>" : "") : r + v + a, d[m] = "&nbsp;" === P && ~l.indexOf("  ") ? l.split("  ").join("&nbsp;&nbsp;") : l
                    }
                };
            d.emojiSafeSplit = n.K6, d.getText = n.q4, o() && s.registerPlugin(d)
        },
        575: function(t, e, i) {
            "use strict";

            function s(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var s = e[i];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
                }
            }
            i.d(e, {
                A: function() {
                    return hi
                }
            });
            var r, n, a, o, h, l, u, c, p, f, d, m, g, v = function() {
                    return r || "undefined" != typeof window && (r = window.gsap) && r.registerPlugin && r
                },
                y = 1,
                D = [],
                _ = [],
                b = [],
                C = Date.now,
                w = function(t, e) {
                    return e
                },
                E = function(t, e) {
                    return ~b.indexOf(t) && b[b.indexOf(t) + 1][e]
                },
                x = function(t) {
                    return !!~f.indexOf(t)
                },
                S = function(t, e, i, s, r) {
                    return t.addEventListener(e, i, {
                        passive: !1 !== s,
                        capture: !!r
                    })
                },
                F = function(t, e, i, s) {
                    return t.removeEventListener(e, i, !!s)
                },
                k = "scrollLeft",
                T = "scrollTop",
                A = function() {
                    return d && d.isPressed || _.cache++
                },
                M = function(t, e) {
                    var i = function i(s) {
                        if (s || 0 === s) {
                            y && (a.history.scrollRestoration = "manual");
                            var r = d && d.isPressed;
                            s = i.v = Math.round(s) || (d && d.iOS ? 1 : 0), t(s), i.cacheID = _.cache, r && w("ss", s)
                        } else(e || _.cache !== i.cacheID || w("ref")) && (i.cacheID = _.cache, i.v = t());
                        return i.v + i.offset
                    };
                    return i.offset = 0, t && i
                },
                P = {
                    s: k,
                    p: "left",
                    p2: "Left",
                    os: "right",
                    os2: "Right",
                    d: "width",
                    d2: "Width",
                    a: "x",
                    sc: M((function(t) {
                        return arguments.length ? a.scrollTo(t, I.sc()) : a.pageXOffset || o[k] || h[k] || l[k] || 0
                    }))
                },
                I = {
                    s: T,
                    p: "top",
                    p2: "Top",
                    os: "bottom",
                    os2: "Bottom",
                    d: "height",
                    d2: "Height",
                    a: "y",
                    op: P,
                    sc: M((function(t) {
                        return arguments.length ? a.scrollTo(P.sc(), t) : a.pageYOffset || o[T] || h[T] || l[T] || 0
                    }))
                },
                O = function(t, e) {
                    return (e && e._ctx && e._ctx.selector || r.utils.toArray)(t)[0] || ("string" == typeof t && !1 !== r.config().nullTargetWarn ? console.warn("Element not found:", t) : null)
                },
                L = function(t, e) {
                    var i = e.s,
                        s = e.sc;
                    x(t) && (t = o.scrollingElement || h);
                    var n = _.indexOf(t),
                        a = s === I.sc ? 1 : 2;
                    !~n && (n = _.push(t) - 1), _[n + a] || S(t, "scroll", A);
                    var l = _[n + a],
                        u = l || (_[n + a] = M(E(t, i), !0) || (x(t) ? s : M((function(e) {
                            return arguments.length ? t[i] = e : t[i]
                        }))));
                    return u.target = t, l || (u.smooth = "smooth" === r.getProperty(t, "scrollBehavior")), u
                },
                R = function(t, e, i) {
                    var s = t,
                        r = t,
                        n = C(),
                        a = n,
                        o = e || 50,
                        h = Math.max(500, 3 * o),
                        l = function(t, e) {
                            var h = C();
                            e || h - n > o ? (r = s, s = t, a = n, n = h) : i ? s += t : s = r + (t - r) / (h - a) * (n - a)
                        };
                    return {
                        update: l,
                        reset: function() {
                            r = s = i ? 0 : s, a = n = 0
                        },
                        getVelocity: function(t) {
                            var e = a,
                                o = r,
                                u = C();
                            return (t || 0 === t) && t !== s && l(t), n === a || u - a > h ? 0 : (s + (i ? o : -o)) / ((i ? u : n) - e) * 1e3
                        }
                    }
                },
                B = function(t, e) {
                    return e && !t._gsapAllow && t.preventDefault(), t.changedTouches ? t.changedTouches[0] : t
                },
                N = function(t) {
                    var e = Math.max.apply(Math, t),
                        i = Math.min.apply(Math, t);
                    return Math.abs(e) >= Math.abs(i) ? e : i
                },
                z = function() {
                    var t, e, i, s;
                    (p = r.core.globals().ScrollTrigger) && p.core && (t = p.core, e = t.bridge || {}, i = t._scrollers, s = t._proxies, i.push.apply(i, _), s.push.apply(s, b), _ = i, b = s, w = function(t, i) {
                        return e[t](i)
                    })
                },
                V = function(t) {
                    return r = t || v(), !n && r && "undefined" != typeof document && document.body && (a = window, o = document, h = o.documentElement, l = o.body, f = [a, o, h, l], r.utils.clamp, g = r.core.context || function() {}, c = "onpointerenter" in l ? "pointer" : "mouse", u = j.isTouch = a.matchMedia && a.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in a || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, m = j.eventTypes = ("ontouchstart" in h ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in h ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout((function() {
                        return y = 0
                    }), 500), z(), n = 1), n
                };
            P.op = I, _.cache = 0;
            var j = function() {
                function t(t) {
                    this.init(t)
                }
                var e, i, f;
                return t.prototype.init = function(t) {
                    n || V(r) || console.warn("Please gsap.registerPlugin(Observer)"), p || z();
                    var e = t.tolerance,
                        i = t.dragMinimum,
                        s = t.type,
                        f = t.target,
                        v = t.lineHeight,
                        y = t.debounce,
                        _ = t.preventDefault,
                        b = t.onStop,
                        w = t.onStopDelay,
                        E = t.ignore,
                        k = t.wheelSpeed,
                        T = t.event,
                        M = t.onDragStart,
                        j = t.onDragEnd,
                        q = t.onDrag,
                        W = t.onPress,
                        H = t.onRelease,
                        Y = t.onRight,
                        U = t.onLeft,
                        X = t.onUp,
                        G = t.onDown,
                        $ = t.onChangeX,
                        K = t.onChangeY,
                        J = t.onChange,
                        Z = t.onToggleX,
                        Q = t.onToggleY,
                        tt = t.onHover,
                        et = t.onHoverEnd,
                        it = t.onMove,
                        st = t.ignoreCheck,
                        rt = t.isNormalizer,
                        nt = t.onGestureStart,
                        at = t.onGestureEnd,
                        ot = t.onWheel,
                        ht = t.onEnable,
                        lt = t.onDisable,
                        ut = t.onClick,
                        ct = t.scrollSpeed,
                        pt = t.capture,
                        ft = t.allowClicks,
                        dt = t.lockAxis,
                        mt = t.onLockAxis;
                    this.target = f = O(f) || h, this.vars = t, E && (E = r.utils.toArray(E)), e = e || 1e-9, i = i || 0, k = k || 1, ct = ct || 1, s = s || "wheel,touch,pointer", y = !1 !== y, v || (v = parseFloat(a.getComputedStyle(l).lineHeight) || 22);
                    var gt, vt, yt, Dt, _t, bt, Ct, wt = this,
                        Et = 0,
                        xt = 0,
                        St = t.passive || !_,
                        Ft = L(f, P),
                        kt = L(f, I),
                        Tt = Ft(),
                        At = kt(),
                        Mt = ~s.indexOf("touch") && !~s.indexOf("pointer") && "pointerdown" === m[0],
                        Pt = x(f),
                        It = f.ownerDocument || o,
                        Ot = [0, 0, 0],
                        Lt = [0, 0, 0],
                        Rt = 0,
                        Bt = function() {
                            return Rt = C()
                        },
                        Nt = function(t, e) {
                            return (wt.event = t) && E && ~E.indexOf(t.target) || e && Mt && "touch" !== t.pointerType || st && st(t, e)
                        },
                        zt = function() {
                            var t = wt.deltaX = N(Ot),
                                i = wt.deltaY = N(Lt),
                                s = Math.abs(t) >= e,
                                r = Math.abs(i) >= e;
                            J && (s || r) && J(wt, t, i, Ot, Lt), s && (Y && wt.deltaX > 0 && Y(wt), U && wt.deltaX < 0 && U(wt), $ && $(wt), Z && wt.deltaX < 0 != Et < 0 && Z(wt), Et = wt.deltaX, Ot[0] = Ot[1] = Ot[2] = 0), r && (G && wt.deltaY > 0 && G(wt), X && wt.deltaY < 0 && X(wt), K && K(wt), Q && wt.deltaY < 0 != xt < 0 && Q(wt), xt = wt.deltaY, Lt[0] = Lt[1] = Lt[2] = 0), (Dt || yt) && (it && it(wt), yt && (q(wt), yt = !1), Dt = !1), bt && !(bt = !1) && mt && mt(wt), _t && (ot(wt), _t = !1), gt = 0
                        },
                        Vt = function(t, e, i) {
                            Ot[i] += t, Lt[i] += e, wt._vx.update(t), wt._vy.update(e), y ? gt || (gt = requestAnimationFrame(zt)) : zt()
                        },
                        jt = function(t, e) {
                            dt && !Ct && (wt.axis = Ct = Math.abs(t) > Math.abs(e) ? "x" : "y", bt = !0), "y" !== Ct && (Ot[2] += t, wt._vx.update(t, !0)), "x" !== Ct && (Lt[2] += e, wt._vy.update(e, !0)), y ? gt || (gt = requestAnimationFrame(zt)) : zt()
                        },
                        qt = function(t) {
                            if (!Nt(t, 1)) {
                                var e = (t = B(t, _)).clientX,
                                    s = t.clientY,
                                    r = e - wt.x,
                                    n = s - wt.y,
                                    a = wt.isDragging;
                                wt.x = e, wt.y = s, (a || Math.abs(wt.startX - e) >= i || Math.abs(wt.startY - s) >= i) && (q && (yt = !0), a || (wt.isDragging = !0), jt(r, n), a || M && M(wt))
                            }
                        },
                        Wt = wt.onPress = function(t) {
                            Nt(t, 1) || t && t.button || (wt.axis = Ct = null, vt.pause(), wt.isPressed = !0, t = B(t), Et = xt = 0, wt.startX = wt.x = t.clientX, wt.startY = wt.y = t.clientY, wt._vx.reset(), wt._vy.reset(), S(rt ? f : It, m[1], qt, St, !0), wt.deltaX = wt.deltaY = 0, W && W(wt))
                        },
                        Ht = wt.onRelease = function(t) {
                            if (!Nt(t, 1)) {
                                F(rt ? f : It, m[1], qt, !0);
                                var e = !isNaN(wt.y - wt.startY),
                                    i = wt.isDragging,
                                    s = i && (Math.abs(wt.x - wt.startX) > 3 || Math.abs(wt.y - wt.startY) > 3),
                                    n = B(t);
                                !s && e && (wt._vx.reset(), wt._vy.reset(), _ && ft && r.delayedCall(.08, (function() {
                                    if (C() - Rt > 300 && !t.defaultPrevented)
                                        if (t.target.click) t.target.click();
                                        else if (It.createEvent) {
                                        var e = It.createEvent("MouseEvents");
                                        e.initMouseEvent("click", !0, !0, a, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(e)
                                    }
                                }))), wt.isDragging = wt.isGesturing = wt.isPressed = !1, b && i && !rt && vt.restart(!0), j && i && j(wt), H && H(wt, s)
                            }
                        },
                        Yt = function(t) {
                            return t.touches && t.touches.length > 1 && (wt.isGesturing = !0) && nt(t, wt.isDragging)
                        },
                        Ut = function() {
                            return (wt.isGesturing = !1) || at(wt)
                        },
                        Xt = function(t) {
                            if (!Nt(t)) {
                                var e = Ft(),
                                    i = kt();
                                Vt((e - Tt) * ct, (i - At) * ct, 1), Tt = e, At = i, b && vt.restart(!0)
                            }
                        },
                        Gt = function(t) {
                            if (!Nt(t)) {
                                t = B(t, _), ot && (_t = !0);
                                var e = (1 === t.deltaMode ? v : 2 === t.deltaMode ? a.innerHeight : 1) * k;
                                Vt(t.deltaX * e, t.deltaY * e, 0), b && !rt && vt.restart(!0)
                            }
                        },
                        $t = function(t) {
                            if (!Nt(t)) {
                                var e = t.clientX,
                                    i = t.clientY,
                                    s = e - wt.x,
                                    r = i - wt.y;
                                wt.x = e, wt.y = i, Dt = !0, b && vt.restart(!0), (s || r) && jt(s, r)
                            }
                        },
                        Kt = function(t) {
                            wt.event = t, tt(wt)
                        },
                        Jt = function(t) {
                            wt.event = t, et(wt)
                        },
                        Zt = function(t) {
                            return Nt(t) || B(t, _) && ut(wt)
                        };
                    vt = wt._dc = r.delayedCall(w || .25, (function() {
                        wt._vx.reset(), wt._vy.reset(), vt.pause(), b && b(wt)
                    })).pause(), wt.deltaX = wt.deltaY = 0, wt._vx = R(0, 50, !0), wt._vy = R(0, 50, !0), wt.scrollX = Ft, wt.scrollY = kt, wt.isDragging = wt.isGesturing = wt.isPressed = !1, g(this), wt.enable = function(t) {
                        return wt.isEnabled || (S(Pt ? It : f, "scroll", A), s.indexOf("scroll") >= 0 && S(Pt ? It : f, "scroll", Xt, St, pt), s.indexOf("wheel") >= 0 && S(f, "wheel", Gt, St, pt), (s.indexOf("touch") >= 0 && u || s.indexOf("pointer") >= 0) && (S(f, m[0], Wt, St, pt), S(It, m[2], Ht), S(It, m[3], Ht), ft && S(f, "click", Bt, !0, !0), ut && S(f, "click", Zt), nt && S(It, "gesturestart", Yt), at && S(It, "gestureend", Ut), tt && S(f, c + "enter", Kt), et && S(f, c + "leave", Jt), it && S(f, c + "move", $t)), wt.isEnabled = !0, t && t.type && Wt(t), ht && ht(wt)), wt
                    }, wt.disable = function() {
                        wt.isEnabled && (D.filter((function(t) {
                            return t !== wt && x(t.target)
                        })).length || F(Pt ? It : f, "scroll", A), wt.isPressed && (wt._vx.reset(), wt._vy.reset(), F(rt ? f : It, m[1], qt, !0)), F(Pt ? It : f, "scroll", Xt, pt), F(f, "wheel", Gt, pt), F(f, m[0], Wt, pt), F(It, m[2], Ht), F(It, m[3], Ht), F(f, "click", Bt, !0), F(f, "click", Zt), F(It, "gesturestart", Yt), F(It, "gestureend", Ut), F(f, c + "enter", Kt), F(f, c + "leave", Jt), F(f, c + "move", $t), wt.isEnabled = wt.isPressed = wt.isDragging = !1, lt && lt(wt))
                    }, wt.kill = wt.revert = function() {
                        wt.disable();
                        var t = D.indexOf(wt);
                        t >= 0 && D.splice(t, 1), d === wt && (d = 0)
                    }, D.push(wt), rt && x(f) && (d = wt), wt.enable(T)
                }, e = t, (i = [{
                    key: "velocityX",
                    get: function() {
                        return this._vx.getVelocity()
                    }
                }, {
                    key: "velocityY",
                    get: function() {
                        return this._vy.getVelocity()
                    }
                }]) && s(e.prototype, i), f && s(e, f), t
            }();
            j.version = "3.12.5", j.create = function(t) {
                return new j(t)
            }, j.register = V, j.getAll = function() {
                return D.slice()
            }, j.getById = function(t) {
                return D.filter((function(e) {
                    return e.vars.id === t
                }))[0]
            }, v() && r.registerPlugin(j);
            var q, W, H, Y, U, X, G, $, K, J, Z, Q, tt, et, it, st, rt, nt, at, ot, ht, lt, ut, ct, pt, ft, dt, mt, gt, vt, yt, Dt, _t, bt, Ct, wt, Et, xt, St = 1,
                Ft = Date.now,
                kt = Ft(),
                Tt = 0,
                At = 0,
                Mt = function(t, e, i) {
                    var s = Yt(t) && ("clamp(" === t.substr(0, 6) || t.indexOf("max") > -1);
                    return i["_" + e + "Clamp"] = s, s ? t.substr(6, t.length - 7) : t
                },
                Pt = function(t, e) {
                    return !e || Yt(t) && "clamp(" === t.substr(0, 6) ? t : "clamp(" + t + ")"
                },
                It = function t() {
                    return At && requestAnimationFrame(t)
                },
                Ot = function() {
                    return et = 1
                },
                Lt = function() {
                    return et = 0
                },
                Rt = function(t) {
                    return t
                },
                Bt = function(t) {
                    return Math.round(1e5 * t) / 1e5 || 0
                },
                Nt = function() {
                    return "undefined" != typeof window
                },
                zt = function() {
                    return q || Nt() && (q = window.gsap) && q.registerPlugin && q
                },
                Vt = function(t) {
                    return !!~G.indexOf(t)
                },
                jt = function(t) {
                    return ("Height" === t ? yt : H["inner" + t]) || U["client" + t] || X["client" + t]
                },
                qt = function(t) {
                    return E(t, "getBoundingClientRect") || (Vt(t) ? function() {
                        return ei.width = H.innerWidth, ei.height = yt, ei
                    } : function() {
                        return de(t)
                    })
                },
                Wt = function(t, e) {
                    var i = e.s,
                        s = e.d2,
                        r = e.d,
                        n = e.a;
                    return Math.max(0, (i = "scroll" + s) && (n = E(t, i)) ? n() - qt(t)()[r] : Vt(t) ? (U[i] || X[i]) - jt(s) : t[i] - t["offset" + s])
                },
                Ht = function(t, e) {
                    for (var i = 0; i < at.length; i += 3)(!e || ~e.indexOf(at[i + 1])) && t(at[i], at[i + 1], at[i + 2])
                },
                Yt = function(t) {
                    return "string" == typeof t
                },
                Ut = function(t) {
                    return "function" == typeof t
                },
                Xt = function(t) {
                    return "number" == typeof t
                },
                Gt = function(t) {
                    return "object" == typeof t
                },
                $t = function(t, e, i) {
                    return t && t.progress(e ? 0 : 1) && i && t.pause()
                },
                Kt = function(t, e) {
                    if (t.enabled) {
                        var i = t._ctx ? t._ctx.add((function() {
                            return e(t)
                        })) : e(t);
                        i && i.totalTime && (t.callbackAnimation = i)
                    }
                },
                Jt = Math.abs,
                Zt = "left",
                Qt = "right",
                te = "bottom",
                ee = "width",
                ie = "height",
                se = "Right",
                re = "Left",
                ne = "Top",
                ae = "Bottom",
                oe = "padding",
                he = "margin",
                le = "Width",
                ue = "Height",
                ce = "px",
                pe = function(t) {
                    return H.getComputedStyle(t)
                },
                fe = function(t, e) {
                    for (var i in e) i in t || (t[i] = e[i]);
                    return t
                },
                de = function(t, e) {
                    var i = e && "matrix(1, 0, 0, 1, 0, 0)" !== pe(t)[it] && q.to(t, {
                            x: 0,
                            y: 0,
                            xPercent: 0,
                            yPercent: 0,
                            rotation: 0,
                            rotationX: 0,
                            rotationY: 0,
                            scale: 1,
                            skewX: 0,
                            skewY: 0
                        }).progress(1),
                        s = t.getBoundingClientRect();
                    return i && i.progress(0).kill(), s
                },
                me = function(t, e) {
                    var i = e.d2;
                    return t["offset" + i] || t["client" + i] || 0
                },
                ge = function(t) {
                    var e, i = [],
                        s = t.labels,
                        r = t.duration();
                    for (e in s) i.push(s[e] / r);
                    return i
                },
                ve = function(t) {
                    var e = q.utils.snap(t),
                        i = Array.isArray(t) && t.slice(0).sort((function(t, e) {
                            return t - e
                        }));
                    return i ? function(t, s, r) {
                        var n;
                        if (void 0 === r && (r = .001), !s) return e(t);
                        if (s > 0) {
                            for (t -= r, n = 0; n < i.length; n++)
                                if (i[n] >= t) return i[n];
                            return i[n - 1]
                        }
                        for (n = i.length, t += r; n--;)
                            if (i[n] <= t) return i[n];
                        return i[0]
                    } : function(i, s, r) {
                        void 0 === r && (r = .001);
                        var n = e(i);
                        return !s || Math.abs(n - i) < r || n - i < 0 == s < 0 ? n : e(s < 0 ? i - t : i + t)
                    }
                },
                ye = function(t, e, i, s) {
                    return i.split(",").forEach((function(i) {
                        return t(e, i, s)
                    }))
                },
                De = function(t, e, i, s, r) {
                    return t.addEventListener(e, i, {
                        passive: !s,
                        capture: !!r
                    })
                },
                _e = function(t, e, i, s) {
                    return t.removeEventListener(e, i, !!s)
                },
                be = function(t, e, i) {
                    (i = i && i.wheelHandler) && (t(e, "wheel", i), t(e, "touchmove", i))
                },
                Ce = {
                    startColor: "green",
                    endColor: "red",
                    indent: 0,
                    fontSize: "16px",
                    fontWeight: "normal"
                },
                we = {
                    toggleActions: "play",
                    anticipatePin: 0
                },
                Ee = {
                    top: 0,
                    left: 0,
                    center: .5,
                    bottom: 1,
                    right: 1
                },
                xe = function(t, e) {
                    if (Yt(t)) {
                        var i = t.indexOf("="),
                            s = ~i ? +(t.charAt(i - 1) + 1) * parseFloat(t.substr(i + 1)) : 0;
                        ~i && (t.indexOf("%") > i && (s *= e / 100), t = t.substr(0, i - 1)), t = s + (t in Ee ? Ee[t] * e : ~t.indexOf("%") ? parseFloat(t) * e / 100 : parseFloat(t) || 0)
                    }
                    return t
                },
                Se = function(t, e, i, s, r, n, a, o) {
                    var h = r.startColor,
                        l = r.endColor,
                        u = r.fontSize,
                        c = r.indent,
                        p = r.fontWeight,
                        f = Y.createElement("div"),
                        d = Vt(i) || "fixed" === E(i, "pinType"),
                        m = -1 !== t.indexOf("scroller"),
                        g = d ? X : i,
                        v = -1 !== t.indexOf("start"),
                        y = v ? h : l,
                        D = "border-color:" + y + ";font-size:" + u + ";color:" + y + ";font-weight:" + p + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
                    return D += "position:" + ((m || o) && d ? "fixed;" : "absolute;"), (m || o || !d) && (D += (s === I ? Qt : te) + ":" + (n + parseFloat(c)) + "px;"), a && (D += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), f._isStart = v, f.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")), f.style.cssText = D, f.innerText = e || 0 === e ? t + "-" + e : t, g.children[0] ? g.insertBefore(f, g.children[0]) : g.appendChild(f), f._offset = f["offset" + s.op.d2], Fe(f, 0, s, v), f
                },
                Fe = function(t, e, i, s) {
                    var r = {
                            display: "block"
                        },
                        n = i[s ? "os2" : "p2"],
                        a = i[s ? "p2" : "os2"];
                    t._isFlipped = s, r[i.a + "Percent"] = s ? -100 : 0, r[i.a] = s ? "1px" : 0, r["border" + n + le] = 1, r["border" + a + le] = 0, r[i.p] = e + "px", q.set(t, r)
                },
                ke = [],
                Te = {},
                Ae = function() {
                    return Ft() - Tt > 34 && (Ct || (Ct = requestAnimationFrame(Ge)))
                },
                Me = function() {
                    (!ut || !ut.isPressed || ut.startX > X.clientWidth) && (_.cache++, ut ? Ct || (Ct = requestAnimationFrame(Ge)) : Ge(), Tt || Be("scrollStart"), Tt = Ft())
                },
                Pe = function() {
                    ft = H.innerWidth, pt = H.innerHeight
                },
                Ie = function() {
                    _.cache++, !tt && !lt && !Y.fullscreenElement && !Y.webkitFullscreenElement && (!ct || ft !== H.innerWidth || Math.abs(H.innerHeight - pt) > .25 * H.innerHeight) && $.restart(!0)
                },
                Oe = {},
                Le = [],
                Re = function t() {
                    return _e(hi, "scrollEnd", t) || Ye(!0)
                },
                Be = function(t) {
                    return Oe[t] && Oe[t].map((function(t) {
                        return t()
                    })) || Le
                },
                Ne = [],
                ze = function(t) {
                    for (var e = 0; e < Ne.length; e += 5)(!t || Ne[e + 4] && Ne[e + 4].query === t) && (Ne[e].style.cssText = Ne[e + 1], Ne[e].getBBox && Ne[e].setAttribute("transform", Ne[e + 2] || ""), Ne[e + 3].uncache = 1)
                },
                Ve = function(t, e) {
                    var i;
                    for (st = 0; st < ke.length; st++) !(i = ke[st]) || e && i._ctx !== e || (t ? i.kill(1) : i.revert(!0, !0));
                    Dt = !0, e && ze(e), e || Be("revert")
                },
                je = function(t, e) {
                    _.cache++, (e || !wt) && _.forEach((function(t) {
                        return Ut(t) && t.cacheID++ && (t.rec = 0)
                    })), Yt(t) && (H.history.scrollRestoration = gt = t)
                },
                qe = 0,
                We = function() {
                    X.appendChild(vt), yt = !ut && vt.offsetHeight || H.innerHeight, X.removeChild(vt)
                },
                He = function(t) {
                    return K(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach((function(e) {
                        return e.style.display = t ? "none" : "block"
                    }))
                },
                Ye = function(t, e) {
                    if (!Tt || t || Dt) {
                        We(), wt = hi.isRefreshing = !0, _.forEach((function(t) {
                            return Ut(t) && ++t.cacheID && (t.rec = t())
                        }));
                        var i = Be("refreshInit");
                        ot && hi.sort(), e || Ve(), _.forEach((function(t) {
                            Ut(t) && (t.smooth && (t.target.style.scrollBehavior = "auto"), t(0))
                        })), ke.slice(0).forEach((function(t) {
                            return t.refresh()
                        })), Dt = !1, ke.forEach((function(t) {
                            if (t._subPinOffset && t.pin) {
                                var e = t.vars.horizontal ? "offsetWidth" : "offsetHeight",
                                    i = t.pin[e];
                                t.revert(!0, 1), t.adjustPinSpacing(t.pin[e] - i), t.refresh()
                            }
                        })), _t = 1, He(!0), ke.forEach((function(t) {
                            var e = Wt(t.scroller, t._dir),
                                i = "max" === t.vars.end || t._endClamp && t.end > e,
                                s = t._startClamp && t.start >= e;
                            (i || s) && t.setPositions(s ? e - 1 : t.start, i ? Math.max(s ? e : t.start + 1, e) : t.end, !0)
                        })), He(!1), _t = 0, i.forEach((function(t) {
                            return t && t.render && t.render(-1)
                        })), _.forEach((function(t) {
                            Ut(t) && (t.smooth && requestAnimationFrame((function() {
                                return t.target.style.scrollBehavior = "smooth"
                            })), t.rec && t(t.rec))
                        })), je(gt, 1), $.pause(), qe++, wt = 2, Ge(2), ke.forEach((function(t) {
                            return Ut(t.vars.onRefresh) && t.vars.onRefresh(t)
                        })), wt = hi.isRefreshing = !1, Be("refresh")
                    } else De(hi, "scrollEnd", Re)
                },
                Ue = 0,
                Xe = 1,
                Ge = function(t) {
                    if (2 === t || !wt && !Dt) {
                        hi.isUpdating = !0, xt && xt.update(0);
                        var e = ke.length,
                            i = Ft(),
                            s = i - kt >= 50,
                            r = e && ke[0].scroll();
                        if (Xe = Ue > r ? -1 : 1, wt || (Ue = r), s && (Tt && !et && i - Tt > 200 && (Tt = 0, Be("scrollEnd")), Z = kt, kt = i), Xe < 0) {
                            for (st = e; st-- > 0;) ke[st] && ke[st].update(0, s);
                            Xe = 1
                        } else
                            for (st = 0; st < e; st++) ke[st] && ke[st].update(0, s);
                        hi.isUpdating = !1
                    }
                    Ct = 0
                },
                $e = [Zt, "top", te, Qt, he + ae, he + se, he + ne, he + re, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
                Ke = $e.concat([ee, ie, "boxSizing", "max" + le, "max" + ue, "position", he, oe, oe + ne, oe + se, oe + ae, oe + re]),
                Je = function(t, e, i, s) {
                    if (!t._gsap.swappedIn) {
                        for (var r, n = $e.length, a = e.style, o = t.style; n--;) a[r = $e[n]] = i[r];
                        a.position = "absolute" === i.position ? "absolute" : "relative", "inline" === i.display && (a.display = "inline-block"), o[te] = o[Qt] = "auto", a.flexBasis = i.flexBasis || "auto", a.overflow = "visible", a.boxSizing = "border-box", a[ee] = me(t, P) + ce, a[ie] = me(t, I) + ce, a[oe] = o[he] = o.top = o[Zt] = "0", Qe(s), o[ee] = o["max" + le] = i[ee], o[ie] = o["max" + ue] = i[ie], o[oe] = i[oe], t.parentNode !== e && (t.parentNode.insertBefore(e, t), e.appendChild(t)), t._gsap.swappedIn = !0
                    }
                },
                Ze = /([A-Z])/g,
                Qe = function(t) {
                    if (t) {
                        var e, i, s = t.t.style,
                            r = t.length,
                            n = 0;
                        for ((t.t._gsap || q.core.getCache(t.t)).uncache = 1; n < r; n += 2) i = t[n + 1], e = t[n], i ? s[e] = i : s[e] && s.removeProperty(e.replace(Ze, "-$1").toLowerCase())
                    }
                },
                ti = function(t) {
                    for (var e = Ke.length, i = t.style, s = [], r = 0; r < e; r++) s.push(Ke[r], i[Ke[r]]);
                    return s.t = t, s
                },
                ei = {
                    left: 0,
                    top: 0
                },
                ii = function(t, e, i, s, r, n, a, o, h, l, u, c, p, f) {
                    Ut(t) && (t = t(o)), Yt(t) && "max" === t.substr(0, 3) && (t = c + ("=" === t.charAt(4) ? xe("0" + t.substr(3), i) : 0));
                    var d, m, g, v = p ? p.time() : 0;
                    if (p && p.seek(0), isNaN(t) || (t = +t), Xt(t)) p && (t = q.utils.mapRange(p.scrollTrigger.start, p.scrollTrigger.end, 0, c, t)), a && Fe(a, i, s, !0);
                    else {
                        Ut(e) && (e = e(o));
                        var y, D, _, b, C = (t || "0").split(" ");
                        g = O(e, o) || X, (y = de(g) || {}) && (y.left || y.top) || "none" !== pe(g).display || (b = g.style.display, g.style.display = "block", y = de(g), b ? g.style.display = b : g.style.removeProperty("display")), D = xe(C[0], y[s.d]), _ = xe(C[1] || "0", i), t = y[s.p] - h[s.p] - l + D + r - _, a && Fe(a, _, s, i - _ < 20 || a._isStart && _ > 20), i -= i - _
                    }
                    if (f && (o[f] = t || -.001, t < 0 && (t = 0)), n) {
                        var w = t + i,
                            E = n._isStart;
                        d = "scroll" + s.d2, Fe(n, w, s, E && w > 20 || !E && (u ? Math.max(X[d], U[d]) : n.parentNode[d]) <= w + 1), u && (h = de(a), u && (n.style[s.op.p] = h[s.op.p] - s.op.m - n._offset + ce))
                    }
                    return p && g && (d = de(g), p.seek(c), m = de(g), p._caScrollDist = d[s.p] - m[s.p], t = t / p._caScrollDist * c), p && p.seek(v), p ? t : Math.round(t)
                },
                si = /(webkit|moz|length|cssText|inset)/i,
                ri = function(t, e, i, s) {
                    if (t.parentNode !== e) {
                        var r, n, a = t.style;
                        if (e === X) {
                            for (r in t._stOrig = a.cssText, n = pe(t)) + r || si.test(r) || !n[r] || "string" != typeof a[r] || "0" === r || (a[r] = n[r]);
                            a.top = i, a.left = s
                        } else a.cssText = t._stOrig;
                        q.core.getCache(t).uncache = 1, e.appendChild(t)
                    }
                },
                ni = function(t, e, i) {
                    var s = e,
                        r = s;
                    return function(e) {
                        var n = Math.round(t());
                        return n !== s && n !== r && Math.abs(n - s) > 3 && Math.abs(n - r) > 3 && (e = n, i && i()), r = s, s = e, e
                    }
                },
                ai = function(t, e, i) {
                    var s = {};
                    s[e.p] = "+=" + i, q.set(t, s)
                },
                oi = function(t, e) {
                    var i = L(t, e),
                        s = "_scroll" + e.p2,
                        r = function e(r, n, a, o, h) {
                            var l = e.tween,
                                u = n.onComplete,
                                c = {};
                            a = a || i();
                            var p = ni(i, a, (function() {
                                l.kill(), e.tween = 0
                            }));
                            return h = o && h || 0, o = o || r - a, l && l.kill(), n[s] = r, n.inherit = !1, n.modifiers = c, c[s] = function() {
                                return p(a + o * l.ratio + h * l.ratio * l.ratio)
                            }, n.onUpdate = function() {
                                _.cache++, e.tween && Ge()
                            }, n.onComplete = function() {
                                e.tween = 0, u && u.call(l)
                            }, l = e.tween = q.to(t, n)
                        };
                    return t[s] = i, i.wheelHandler = function() {
                        return r.tween && r.tween.kill() && (r.tween = 0)
                    }, De(t, "wheel", i.wheelHandler), hi.isTouch && De(t, "touchmove", i.wheelHandler), r
                },
                hi = function() {
                    function t(e, i) {
                        W || t.register(q) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), mt(this), this.init(e, i)
                    }
                    return t.prototype.init = function(e, i) {
                        if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), At) {
                            var s, r, n, a, o, h, l, u, c, p, f, d, m, g, v, y, D, C, w, x, S, F, k, T, A, M, R, B, N, z, V, j, W, G, $, Q, it, rt, nt, at, lt, ut, ct = e = fe(Yt(e) || Xt(e) || e.nodeType ? {
                                    trigger: e
                                } : e, we),
                                pt = ct.onUpdate,
                                ft = ct.toggleClass,
                                dt = ct.id,
                                mt = ct.onToggle,
                                gt = ct.onRefresh,
                                vt = ct.scrub,
                                yt = ct.trigger,
                                Dt = ct.pin,
                                Ct = ct.pinSpacing,
                                kt = ct.invalidateOnRefresh,
                                It = ct.anticipatePin,
                                Ot = ct.onScrubComplete,
                                Lt = ct.onSnapComplete,
                                Nt = ct.once,
                                zt = ct.snap,
                                Ht = ct.pinReparent,
                                Zt = ct.pinSpacer,
                                Qt = ct.containerAnimation,
                                te = ct.fastScrollEnd,
                                ye = ct.preventOverlaps,
                                be = e.horizontal || e.containerAnimation && !1 !== e.horizontal ? P : I,
                                Ee = !vt && 0 !== vt,
                                Fe = O(e.scroller || H),
                                Ae = q.core.getCache(Fe),
                                Pe = Vt(Fe),
                                Oe = "fixed" === ("pinType" in e ? e.pinType : E(Fe, "pinType") || Pe && "fixed"),
                                Le = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
                                Be = Ee && e.toggleActions.split(" "),
                                Ne = "markers" in e ? e.markers : we.markers,
                                ze = Pe ? 0 : parseFloat(pe(Fe)["border" + be.p2 + le]) || 0,
                                Ve = this,
                                je = e.onRefreshInit && function() {
                                    return e.onRefreshInit(Ve)
                                },
                                We = function(t, e, i) {
                                    var s = i.d,
                                        r = i.d2,
                                        n = i.a;
                                    return (n = E(t, "getBoundingClientRect")) ? function() {
                                        return n()[s]
                                    } : function() {
                                        return (e ? jt(r) : t["client" + r]) || 0
                                    }
                                }(Fe, Pe, be),
                                He = function(t, e) {
                                    return !e || ~b.indexOf(t) ? qt(t) : function() {
                                        return ei
                                    }
                                }(Fe, Pe),
                                Ue = 0,
                                Ge = 0,
                                $e = 0,
                                Ke = L(Fe, be);
                            if (Ve._startClamp = Ve._endClamp = !1, Ve._dir = be, It *= 45, Ve.scroller = Fe, Ve.scroll = Qt ? Qt.time.bind(Qt) : Ke, a = Ke(), Ve.vars = e, i = i || e.animation, "refreshPriority" in e && (ot = 1, -9999 === e.refreshPriority && (xt = Ve)), Ae.tweenScroll = Ae.tweenScroll || {
                                    top: oi(Fe, I),
                                    left: oi(Fe, P)
                                }, Ve.tweenTo = s = Ae.tweenScroll[be.p], Ve.scrubDuration = function(t) {
                                    (W = Xt(t) && t) ? j ? j.duration(t) : j = q.to(i, {
                                        ease: "expo",
                                        totalProgress: "+=0",
                                        inherit: !1,
                                        duration: W,
                                        paused: !0,
                                        onComplete: function() {
                                            return Ot && Ot(Ve)
                                        }
                                    }): (j && j.progress(1).kill(), j = 0)
                                }, i && (i.vars.lazy = !1, i._initted && !Ve.isReverted || !1 !== i.vars.immediateRender && !1 !== e.immediateRender && i.duration() && i.render(0, !0, !0), Ve.animation = i.pause(), i.scrollTrigger = Ve, Ve.scrubDuration(vt), z = 0, dt || (dt = i.vars.id)), zt && (Gt(zt) && !zt.push || (zt = {
                                    snapTo: zt
                                }), "scrollBehavior" in X.style && q.set(Pe ? [X, U] : Fe, {
                                    scrollBehavior: "auto"
                                }), _.forEach((function(t) {
                                    return Ut(t) && t.target === (Pe ? Y.scrollingElement || U : Fe) && (t.smooth = !1)
                                })), n = Ut(zt.snapTo) ? zt.snapTo : "labels" === zt.snapTo ? function(t) {
                                    return function(e) {
                                        return q.utils.snap(ge(t), e)
                                    }
                                }(i) : "labelsDirectional" === zt.snapTo ? (at = i, function(t, e) {
                                    return ve(ge(at))(t, e.direction)
                                }) : !1 !== zt.directional ? function(t, e) {
                                    return ve(zt.snapTo)(t, Ft() - Ge < 500 ? 0 : e.direction)
                                } : q.utils.snap(zt.snapTo), G = zt.duration || {
                                    min: .1,
                                    max: 2
                                }, G = Gt(G) ? J(G.min, G.max) : J(G, G), $ = q.delayedCall(zt.delay || W / 2 || .1, (function() {
                                    var t = Ke(),
                                        e = Ft() - Ge < 500,
                                        r = s.tween;
                                    if (!(e || Math.abs(Ve.getVelocity()) < 10) || r || et || Ue === t) Ve.isActive && Ue !== t && $.restart(!0);
                                    else {
                                        var a, o, u = (t - h) / g,
                                            c = i && !Ee ? i.totalProgress() : u,
                                            p = e ? 0 : (c - V) / (Ft() - Z) * 1e3 || 0,
                                            f = q.utils.clamp(-u, 1 - u, Jt(p / 2) * p / .185),
                                            d = u + (!1 === zt.inertia ? 0 : f),
                                            m = zt,
                                            v = m.onStart,
                                            y = m.onInterrupt,
                                            D = m.onComplete;
                                        if (a = n(d, Ve), Xt(a) || (a = d), o = Math.round(h + a * g), t <= l && t >= h && o !== t) {
                                            if (r && !r._initted && r.data <= Jt(o - t)) return;
                                            !1 === zt.inertia && (f = a - u), s(o, {
                                                duration: G(Jt(.185 * Math.max(Jt(d - c), Jt(a - c)) / p / .05 || 0)),
                                                ease: zt.ease || "power3",
                                                data: Jt(o - t),
                                                onInterrupt: function() {
                                                    return $.restart(!0) && y && y(Ve)
                                                },
                                                onComplete: function() {
                                                    Ve.update(), Ue = Ke(), i && (j ? j.resetTo("totalProgress", a, i._tTime / i._tDur) : i.progress(a)), z = V = i && !Ee ? i.totalProgress() : Ve.progress, Lt && Lt(Ve), D && D(Ve)
                                                }
                                            }, t, f * g, o - t - f * g), v && v(Ve, s.tween)
                                        }
                                    }
                                })).pause()), dt && (Te[dt] = Ve), (nt = (yt = Ve.trigger = O(yt || !0 !== Dt && Dt)) && yt._gsap && yt._gsap.stRevert) && (nt = nt(Ve)), Dt = !0 === Dt ? yt : O(Dt), Yt(ft) && (ft = {
                                    targets: yt,
                                    className: ft
                                }), Dt && (!1 === Ct || Ct === he || (Ct = !(!Ct && Dt.parentNode && Dt.parentNode.style && "flex" === pe(Dt.parentNode).display) && oe), Ve.pin = Dt, (r = q.core.getCache(Dt)).spacer ? v = r.pinState : (Zt && ((Zt = O(Zt)) && !Zt.nodeType && (Zt = Zt.current || Zt.nativeElement), r.spacerIsNative = !!Zt, Zt && (r.spacerState = ti(Zt))), r.spacer = C = Zt || Y.createElement("div"), C.classList.add("pin-spacer"), dt && C.classList.add("pin-spacer-" + dt), r.pinState = v = ti(Dt)), !1 !== e.force3D && q.set(Dt, {
                                    force3D: !0
                                }), Ve.spacer = C = r.spacer, N = pe(Dt), T = N[Ct + be.os2], x = q.getProperty(Dt), S = q.quickSetter(Dt, be.a, ce), Je(Dt, C, N), D = ti(Dt)), Ne) {
                                d = Gt(Ne) ? fe(Ne, Ce) : Ce, p = Se("scroller-start", dt, Fe, be, d, 0), f = Se("scroller-end", dt, Fe, be, d, 0, p), w = p["offset" + be.op.d2];
                                var Ze = O(E(Fe, "content") || Fe);
                                u = this.markerStart = Se("start", dt, Ze, be, d, w, 0, Qt), c = this.markerEnd = Se("end", dt, Ze, be, d, w, 0, Qt), Qt && (rt = q.quickSetter([u, c], be.a, ce)), Oe || b.length && !0 === E(Fe, "fixedMarkers") || (ut = pe(lt = Pe ? X : Fe).position, lt.style.position = "absolute" === ut || "fixed" === ut ? ut : "relative", q.set([p, f], {
                                    force3D: !0
                                }), M = q.quickSetter(p, be.a, ce), B = q.quickSetter(f, be.a, ce))
                            }
                            if (Qt) {
                                var si = Qt.vars.onUpdate,
                                    ni = Qt.vars.onUpdateParams;
                                Qt.eventCallback("onUpdate", (function() {
                                    Ve.update(0, 0, 1), si && si.apply(Qt, ni || [])
                                }))
                            }
                            if (Ve.previous = function() {
                                    return ke[ke.indexOf(Ve) - 1]
                                }, Ve.next = function() {
                                    return ke[ke.indexOf(Ve) + 1]
                                }, Ve.revert = function(t, e) {
                                    if (!e) return Ve.kill(!0);
                                    var s = !1 !== t || !Ve.enabled,
                                        r = tt;
                                    s !== Ve.isReverted && (s && (Q = Math.max(Ke(), Ve.scroll.rec || 0), $e = Ve.progress, it = i && i.progress()), u && [u, c, p, f].forEach((function(t) {
                                        return t.style.display = s ? "none" : "block"
                                    })), s && (tt = Ve, Ve.update(s)), !Dt || Ht && Ve.isActive || (s ? function(t, e, i) {
                                        Qe(i);
                                        var s = t._gsap;
                                        if (s.spacerIsNative) Qe(s.spacerState);
                                        else if (t._gsap.swappedIn) {
                                            var r = e.parentNode;
                                            r && (r.insertBefore(t, e), r.removeChild(e))
                                        }
                                        t._gsap.swappedIn = !1
                                    }(Dt, C, v) : Je(Dt, C, pe(Dt), A)), s || Ve.update(s), tt = r, Ve.isReverted = s)
                                }, Ve.refresh = function(r, n, d, _) {
                                    if (!tt && Ve.enabled || n)
                                        if (Dt && r && Tt) De(t, "scrollEnd", Re);
                                        else {
                                            !wt && je && je(Ve), tt = Ve, s.tween && !d && (s.tween.kill(), s.tween = 0), j && j.pause(), kt && i && i.revert({
                                                kill: !1
                                            }).invalidate(), Ve.isReverted || Ve.revert(!0, !0), Ve._subPinOffset = !1;
                                            var b, w, E, S, T, M, B, N, z, V, W, H, G, K = We(),
                                                J = He(),
                                                Z = Qt ? Qt.duration() : Wt(Fe, be),
                                                et = g <= .01,
                                                st = 0,
                                                rt = _ || 0,
                                                nt = Gt(d) ? d.end : e.end,
                                                at = e.endTrigger || yt,
                                                ot = Gt(d) ? d.start : e.start || (0 !== e.start && yt ? Dt ? "0 0" : "0 100%" : 0),
                                                lt = Ve.pinnedContainer = e.pinnedContainer && O(e.pinnedContainer, Ve),
                                                ut = yt && Math.max(0, ke.indexOf(Ve)) || 0,
                                                ct = ut;
                                            for (Ne && Gt(d) && (H = q.getProperty(p, be.p), G = q.getProperty(f, be.p)); ct--;)(M = ke[ct]).end || M.refresh(0, 1) || (tt = Ve), !(B = M.pin) || B !== yt && B !== Dt && B !== lt || M.isReverted || (V || (V = []), V.unshift(M), M.revert(!0, !0)), M !== ke[ct] && (ut--, ct--);
                                            for (Ut(ot) && (ot = ot(Ve)), ot = Mt(ot, "start", Ve), h = ii(ot, yt, K, be, Ke(), u, p, Ve, J, ze, Oe, Z, Qt, Ve._startClamp && "_startClamp") || (Dt ? -.001 : 0), Ut(nt) && (nt = nt(Ve)), Yt(nt) && !nt.indexOf("+=") && (~nt.indexOf(" ") ? nt = (Yt(ot) ? ot.split(" ")[0] : "") + nt : (st = xe(nt.substr(2), K), nt = Yt(ot) ? ot : (Qt ? q.utils.mapRange(0, Qt.duration(), Qt.scrollTrigger.start, Qt.scrollTrigger.end, h) : h) + st, at = yt)), nt = Mt(nt, "end", Ve), l = Math.max(h, ii(nt || (at ? "100% 0" : Z), at, K, be, Ke() + st, c, f, Ve, J, ze, Oe, Z, Qt, Ve._endClamp && "_endClamp")) || -.001, st = 0, ct = ut; ct--;)(B = (M = ke[ct]).pin) && M.start - M._pinPush <= h && !Qt && M.end > 0 && (b = M.end - (Ve._startClamp ? Math.max(0, M.start) : M.start), (B === yt && M.start - M._pinPush < h || B === lt) && isNaN(ot) && (st += b * (1 - M.progress)), B === Dt && (rt += b));
                                            if (h += st, l += st, Ve._startClamp && (Ve._startClamp += st), Ve._endClamp && !wt && (Ve._endClamp = l || -.001, l = Math.min(l, Wt(Fe, be))), g = l - h || (h -= .01) && .001, et && ($e = q.utils.clamp(0, 1, q.utils.normalize(h, l, Q))), Ve._pinPush = rt, u && st && ((b = {})[be.a] = "+=" + st, lt && (b[be.p] = "-=" + Ke()), q.set([u, c], b)), !Dt || _t && Ve.end >= Wt(Fe, be)) {
                                                if (yt && Ke() && !Qt)
                                                    for (w = yt.parentNode; w && w !== X;) w._pinOffset && (h -= w._pinOffset, l -= w._pinOffset), w = w.parentNode
                                            } else b = pe(Dt), S = be === I, E = Ke(), F = parseFloat(x(be.a)) + rt, !Z && l > 1 && (W = {
                                                style: W = (Pe ? Y.scrollingElement || U : Fe).style,
                                                value: W["overflow" + be.a.toUpperCase()]
                                            }, Pe && "scroll" !== pe(X)["overflow" + be.a.toUpperCase()] && (W.style["overflow" + be.a.toUpperCase()] = "scroll")), Je(Dt, C, b), D = ti(Dt), w = de(Dt, !0), N = Oe && L(Fe, S ? P : I)(), Ct ? ((A = [Ct + be.os2, g + rt + ce]).t = C, (ct = Ct === oe ? me(Dt, be) + g + rt : 0) && (A.push(be.d, ct + ce), "auto" !== C.style.flexBasis && (C.style.flexBasis = ct + ce)), Qe(A), lt && ke.forEach((function(t) {
                                                t.pin === lt && !1 !== t.vars.pinSpacing && (t._subPinOffset = !0)
                                            })), Oe && Ke(Q)) : (ct = me(Dt, be)) && "auto" !== C.style.flexBasis && (C.style.flexBasis = ct + ce), Oe && ((T = {
                                                top: w.top + (S ? E - h : N) + ce,
                                                left: w.left + (S ? N : E - h) + ce,
                                                boxSizing: "border-box",
                                                position: "fixed"
                                            })[ee] = T["max" + le] = Math.ceil(w.width) + ce, T[ie] = T["max" + ue] = Math.ceil(w.height) + ce, T[he] = T[he + ne] = T[he + se] = T[he + ae] = T[he + re] = "0", T[oe] = b[oe], T[oe + ne] = b[oe + ne], T[oe + se] = b[oe + se], T[oe + ae] = b[oe + ae], T[oe + re] = b[oe + re], y = function(t, e, i) {
                                                for (var s, r = [], n = t.length, a = i ? 8 : 0; a < n; a += 2) s = t[a], r.push(s, s in e ? e[s] : t[a + 1]);
                                                return r.t = t.t, r
                                            }(v, T, Ht), wt && Ke(0)), i ? (z = i._initted, ht(1), i.render(i.duration(), !0, !0), k = x(be.a) - F + g + rt, R = Math.abs(g - k) > 1, Oe && R && y.splice(y.length - 2, 2), i.render(0, !0, !0), z || i.invalidate(!0), i.parent || i.totalTime(i.totalTime()), ht(0)) : k = g, W && (W.value ? W.style["overflow" + be.a.toUpperCase()] = W.value : W.style.removeProperty("overflow-" + be.a));
                                            V && V.forEach((function(t) {
                                                return t.revert(!1, !0)
                                            })), Ve.start = h, Ve.end = l, a = o = wt ? Q : Ke(), Qt || wt || (a < Q && Ke(Q), Ve.scroll.rec = 0), Ve.revert(!1, !0), Ge = Ft(), $ && (Ue = -1, $.restart(!0)), tt = 0, i && Ee && (i._initted || it) && i.progress() !== it && i.progress(it || 0, !0).render(i.time(), !0, !0), (et || $e !== Ve.progress || Qt || kt) && (i && !Ee && i.totalProgress(Qt && h < -.001 && !$e ? q.utils.normalize(h, l, 0) : $e, !0), Ve.progress = et || (a - h) / g === $e ? 0 : $e), Dt && Ct && (C._pinOffset = Math.round(Ve.progress * k)), j && j.invalidate(), isNaN(H) || (H -= q.getProperty(p, be.p), G -= q.getProperty(f, be.p), ai(p, be, H), ai(u, be, H - (_ || 0)), ai(f, be, G), ai(c, be, G - (_ || 0))), et && !wt && Ve.update(), !gt || wt || m || (m = !0, gt(Ve), m = !1)
                                        }
                                }, Ve.getVelocity = function() {
                                    return (Ke() - o) / (Ft() - Z) * 1e3 || 0
                                }, Ve.endAnimation = function() {
                                    $t(Ve.callbackAnimation), i && (j ? j.progress(1) : i.paused() ? Ee || $t(i, Ve.direction < 0, 1) : $t(i, i.reversed()))
                                }, Ve.labelToScroll = function(t) {
                                    return i && i.labels && (h || Ve.refresh() || h) + i.labels[t] / i.duration() * g || 0
                                }, Ve.getTrailing = function(t) {
                                    var e = ke.indexOf(Ve),
                                        i = Ve.direction > 0 ? ke.slice(0, e).reverse() : ke.slice(e + 1);
                                    return (Yt(t) ? i.filter((function(e) {
                                        return e.vars.preventOverlaps === t
                                    })) : i).filter((function(t) {
                                        return Ve.direction > 0 ? t.end <= h : t.start >= l
                                    }))
                                }, Ve.update = function(t, e, r) {
                                    if (!Qt || r || t) {
                                        var n, u, c, f, d, m, v, _ = !0 === wt ? Q : Ve.scroll(),
                                            b = t ? 0 : (_ - h) / g,
                                            w = b < 0 ? 0 : b > 1 ? 1 : b || 0,
                                            E = Ve.progress;
                                        if (e && (o = a, a = Qt ? Ke() : _, zt && (V = z, z = i && !Ee ? i.totalProgress() : w)), It && Dt && !tt && !St && Tt && (!w && h < _ + (_ - o) / (Ft() - Z) * It ? w = 1e-4 : 1 === w && l > _ + (_ - o) / (Ft() - Z) * It && (w = .9999)), w !== E && Ve.enabled) {
                                            if (f = (d = (n = Ve.isActive = !!w && w < 1) !== (!!E && E < 1)) || !!w != !!E, Ve.direction = w > E ? 1 : -1, Ve.progress = w, f && !tt && (u = w && !E ? 0 : 1 === w ? 1 : 1 === E ? 2 : 3, Ee && (c = !d && "none" !== Be[u + 1] && Be[u + 1] || Be[u], v = i && ("complete" === c || "reset" === c || c in i))), ye && (d || v) && (v || vt || !i) && (Ut(ye) ? ye(Ve) : Ve.getTrailing(ye).forEach((function(t) {
                                                    return t.endAnimation()
                                                }))), Ee || (!j || tt || St ? i && i.totalProgress(w, !(!tt || !Ge && !t)) : (j._dp._time - j._start !== j._time && j.render(j._dp._time - j._start), j.resetTo ? j.resetTo("totalProgress", w, i._tTime / i._tDur) : (j.vars.totalProgress = w, j.invalidate().restart()))), Dt)
                                                if (t && Ct && (C.style[Ct + be.os2] = T), Oe) {
                                                    if (f) {
                                                        if (m = !t && w > E && l + 1 > _ && _ + 1 >= Wt(Fe, be), Ht)
                                                            if (t || !n && !m) ri(Dt, C);
                                                            else {
                                                                var x = de(Dt, !0),
                                                                    A = _ - h;
                                                                ri(Dt, X, x.top + (be === I ? A : 0) + ce, x.left + (be === I ? 0 : A) + ce)
                                                            } Qe(n || m ? y : D), R && w < 1 && n || S(F + (1 !== w || m ? 0 : k))
                                                    }
                                                } else S(Bt(F + k * w));
                                            zt && !s.tween && !tt && !St && $.restart(!0), ft && (d || Nt && w && (w < 1 || !bt)) && K(ft.targets).forEach((function(t) {
                                                return t.classList[n || Nt ? "add" : "remove"](ft.className)
                                            })), pt && !Ee && !t && pt(Ve), f && !tt ? (Ee && (v && ("complete" === c ? i.pause().totalProgress(1) : "reset" === c ? i.restart(!0).pause() : "restart" === c ? i.restart(!0) : i[c]()), pt && pt(Ve)), !d && bt || (mt && d && Kt(Ve, mt), Le[u] && Kt(Ve, Le[u]), Nt && (1 === w ? Ve.kill(!1, 1) : Le[u] = 0), d || Le[u = 1 === w ? 1 : 3] && Kt(Ve, Le[u])), te && !n && Math.abs(Ve.getVelocity()) > (Xt(te) ? te : 2500) && ($t(Ve.callbackAnimation), j ? j.progress(1) : $t(i, "reverse" === c ? 1 : !w, 1))) : Ee && pt && !tt && pt(Ve)
                                        }
                                        if (B) {
                                            var P = Qt ? _ / Qt.duration() * (Qt._caScrollDist || 0) : _;
                                            M(P + (p._isFlipped ? 1 : 0)), B(P)
                                        }
                                        rt && rt(-_ / Qt.duration() * (Qt._caScrollDist || 0))
                                    }
                                }, Ve.enable = function(e, i) {
                                    Ve.enabled || (Ve.enabled = !0, De(Fe, "resize", Ie), Pe || De(Fe, "scroll", Me), je && De(t, "refreshInit", je), !1 !== e && (Ve.progress = $e = 0, a = o = Ue = Ke()), !1 !== i && Ve.refresh())
                                }, Ve.getTween = function(t) {
                                    return t && s ? s.tween : j
                                }, Ve.setPositions = function(t, e, i, s) {
                                    if (Qt) {
                                        var r = Qt.scrollTrigger,
                                            n = Qt.duration(),
                                            a = r.end - r.start;
                                        t = r.start + a * t / n, e = r.start + a * e / n
                                    }
                                    Ve.refresh(!1, !1, {
                                        start: Pt(t, i && !!Ve._startClamp),
                                        end: Pt(e, i && !!Ve._endClamp)
                                    }, s), Ve.update()
                                }, Ve.adjustPinSpacing = function(t) {
                                    if (A && t) {
                                        var e = A.indexOf(be.d) + 1;
                                        A[e] = parseFloat(A[e]) + t + ce, A[1] = parseFloat(A[1]) + t + ce, Qe(A)
                                    }
                                }, Ve.disable = function(e, i) {
                                    if (Ve.enabled && (!1 !== e && Ve.revert(!0, !0), Ve.enabled = Ve.isActive = !1, i || j && j.pause(), Q = 0, r && (r.uncache = 1), je && _e(t, "refreshInit", je), $ && ($.pause(), s.tween && s.tween.kill() && (s.tween = 0)), !Pe)) {
                                        for (var n = ke.length; n--;)
                                            if (ke[n].scroller === Fe && ke[n] !== Ve) return;
                                        _e(Fe, "resize", Ie), Pe || _e(Fe, "scroll", Me)
                                    }
                                }, Ve.kill = function(t, s) {
                                    Ve.disable(t, s), j && !s && j.kill(), dt && delete Te[dt];
                                    var n = ke.indexOf(Ve);
                                    n >= 0 && ke.splice(n, 1), n === st && Xe > 0 && st--, n = 0, ke.forEach((function(t) {
                                        return t.scroller === Ve.scroller && (n = 1)
                                    })), n || wt || (Ve.scroll.rec = 0), i && (i.scrollTrigger = null, t && i.revert({
                                        kill: !1
                                    }), s || i.kill()), u && [u, c, p, f].forEach((function(t) {
                                        return t.parentNode && t.parentNode.removeChild(t)
                                    })), xt === Ve && (xt = 0), Dt && (r && (r.uncache = 1), n = 0, ke.forEach((function(t) {
                                        return t.pin === Dt && n++
                                    })), n || (r.spacer = 0)), e.onKill && e.onKill(Ve)
                                }, ke.push(Ve), Ve.enable(!1, !1), nt && nt(Ve), i && i.add && !g) {
                                var hi = Ve.update;
                                Ve.update = function() {
                                    Ve.update = hi, h || l || Ve.refresh()
                                }, q.delayedCall(.01, Ve.update), g = .01, h = l = 0
                            } else Ve.refresh();
                            Dt && function() {
                                if (Et !== qe) {
                                    var t = Et = qe;
                                    requestAnimationFrame((function() {
                                        return t === qe && Ye(!0)
                                    }))
                                }
                            }()
                        } else this.update = this.refresh = this.kill = Rt
                    }, t.register = function(e) {
                        return W || (q = e || zt(), Nt() && window.document && t.enable(), W = At), W
                    }, t.defaults = function(t) {
                        if (t)
                            for (var e in t) we[e] = t[e];
                        return we
                    }, t.disable = function(t, e) {
                        At = 0, ke.forEach((function(i) {
                            return i[e ? "kill" : "disable"](t)
                        })), _e(H, "wheel", Me), _e(Y, "scroll", Me), clearInterval(Q), _e(Y, "touchcancel", Rt), _e(X, "touchstart", Rt), ye(_e, Y, "pointerdown,touchstart,mousedown", Ot), ye(_e, Y, "pointerup,touchend,mouseup", Lt), $.kill(), Ht(_e);
                        for (var i = 0; i < _.length; i += 3) be(_e, _[i], _[i + 1]), be(_e, _[i], _[i + 2])
                    }, t.enable = function() {
                        if (H = window, Y = document, U = Y.documentElement, X = Y.body, q && (K = q.utils.toArray, J = q.utils.clamp, mt = q.core.context || Rt, ht = q.core.suppressOverwrites || Rt, gt = H.history.scrollRestoration || "auto", Ue = H.pageYOffset, q.core.globals("ScrollTrigger", t), X)) {
                            At = 1, (vt = document.createElement("div")).style.height = "100vh", vt.style.position = "absolute", We(), It(), j.register(q), t.isTouch = j.isTouch, dt = j.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), ct = 1 === j.isTouch, De(H, "wheel", Me), G = [H, Y, U, X], q.matchMedia ? (t.matchMedia = function(t) {
                                var e, i = q.matchMedia();
                                for (e in t) i.add(e, t[e]);
                                return i
                            }, q.addEventListener("matchMediaInit", (function() {
                                return Ve()
                            })), q.addEventListener("matchMediaRevert", (function() {
                                return ze()
                            })), q.addEventListener("matchMedia", (function() {
                                Ye(0, 1), Be("matchMedia")
                            })), q.matchMedia("(orientation: portrait)", (function() {
                                return Pe(), Pe
                            }))) : console.warn("Requires GSAP 3.11.0 or later"), Pe(), De(Y, "scroll", Me);
                            var e, i, s = X.style,
                                r = s.borderTopStyle,
                                n = q.core.Animation.prototype;
                            for (n.revert || Object.defineProperty(n, "revert", {
                                    value: function() {
                                        return this.time(-.01, !0)
                                    }
                                }), s.borderTopStyle = "solid", e = de(X), I.m = Math.round(e.top + I.sc()) || 0, P.m = Math.round(e.left + P.sc()) || 0, r ? s.borderTopStyle = r : s.removeProperty("border-top-style"), Q = setInterval(Ae, 250), q.delayedCall(.5, (function() {
                                    return St = 0
                                })), De(Y, "touchcancel", Rt), De(X, "touchstart", Rt), ye(De, Y, "pointerdown,touchstart,mousedown", Ot), ye(De, Y, "pointerup,touchend,mouseup", Lt), it = q.utils.checkPrefix("transform"), Ke.push(it), W = Ft(), $ = q.delayedCall(.2, Ye).pause(), at = [Y, "visibilitychange", function() {
                                    var t = H.innerWidth,
                                        e = H.innerHeight;
                                    Y.hidden ? (rt = t, nt = e) : rt === t && nt === e || Ie()
                                }, Y, "DOMContentLoaded", Ye, H, "load", Ye, H, "resize", Ie], Ht(De), ke.forEach((function(t) {
                                    return t.enable(0, 1)
                                })), i = 0; i < _.length; i += 3) be(_e, _[i], _[i + 1]), be(_e, _[i], _[i + 2])
                        }
                    }, t.config = function(e) {
                        "limitCallbacks" in e && (bt = !!e.limitCallbacks);
                        var i = e.syncInterval;
                        i && clearInterval(Q) || (Q = i) && setInterval(Ae, i), "ignoreMobileResize" in e && (ct = 1 === t.isTouch && e.ignoreMobileResize), "autoRefreshEvents" in e && (Ht(_e) || Ht(De, e.autoRefreshEvents || "none"), lt = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
                    }, t.scrollerProxy = function(t, e) {
                        var i = O(t),
                            s = _.indexOf(i),
                            r = Vt(i);
                        ~s && _.splice(s, r ? 6 : 2), e && (r ? b.unshift(H, e, X, e, U, e) : b.unshift(i, e))
                    }, t.clearMatchMedia = function(t) {
                        ke.forEach((function(e) {
                            return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0)
                        }))
                    }, t.isInViewport = function(t, e, i) {
                        var s = (Yt(t) ? O(t) : t).getBoundingClientRect(),
                            r = s[i ? ee : ie] * e || 0;
                        return i ? s.right - r > 0 && s.left + r < H.innerWidth : s.bottom - r > 0 && s.top + r < H.innerHeight
                    }, t.positionInViewport = function(t, e, i) {
                        Yt(t) && (t = O(t));
                        var s = t.getBoundingClientRect(),
                            r = s[i ? ee : ie],
                            n = null == e ? r / 2 : e in Ee ? Ee[e] * r : ~e.indexOf("%") ? parseFloat(e) * r / 100 : parseFloat(e) || 0;
                        return i ? (s.left + n) / H.innerWidth : (s.top + n) / H.innerHeight
                    }, t.killAll = function(t) {
                        if (ke.slice(0).forEach((function(t) {
                                return "ScrollSmoother" !== t.vars.id && t.kill()
                            })), !0 !== t) {
                            var e = Oe.killAll || [];
                            Oe = {}, e.forEach((function(t) {
                                return t()
                            }))
                        }
                    }, t
                }();
            hi.version = "3.12.5", hi.saveStyles = function(t) {
                return t ? K(t).forEach((function(t) {
                    if (t && t.style) {
                        var e = Ne.indexOf(t);
                        e >= 0 && Ne.splice(e, 5), Ne.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), q.core.getCache(t), mt())
                    }
                })) : Ne
            }, hi.revert = function(t, e) {
                return Ve(!t, e)
            }, hi.create = function(t, e) {
                return new hi(t, e)
            }, hi.refresh = function(t) {
                return t ? Ie() : (W || hi.register()) && Ye(!0)
            }, hi.update = function(t) {
                return ++_.cache && Ge(!0 === t ? 2 : 0)
            }, hi.clearScrollMemory = je, hi.maxScroll = function(t, e) {
                return Wt(t, e ? P : I)
            }, hi.getScrollFunc = function(t, e) {
                return L(O(t), e ? P : I)
            }, hi.getById = function(t) {
                return Te[t]
            }, hi.getAll = function() {
                return ke.filter((function(t) {
                    return "ScrollSmoother" !== t.vars.id
                }))
            }, hi.isScrolling = function() {
                return !!Tt
            }, hi.snapDirectional = ve, hi.addEventListener = function(t, e) {
                var i = Oe[t] || (Oe[t] = []);
                ~i.indexOf(e) || i.push(e)
            }, hi.removeEventListener = function(t, e) {
                var i = Oe[t],
                    s = i && i.indexOf(e);
                s >= 0 && i.splice(s, 1)
            }, hi.batch = function(t, e) {
                var i, s = [],
                    r = {},
                    n = e.interval || .016,
                    a = e.batchMax || 1e9,
                    o = function(t, e) {
                        var i = [],
                            s = [],
                            r = q.delayedCall(n, (function() {
                                e(i, s), i = [], s = []
                            })).pause();
                        return function(t) {
                            i.length || r.restart(!0), i.push(t.trigger), s.push(t), a <= i.length && r.progress(1)
                        }
                    };
                for (i in e) r[i] = "on" === i.substr(0, 2) && Ut(e[i]) && "onRefreshInit" !== i ? o(0, e[i]) : e[i];
                return Ut(a) && (a = a(), De(hi, "refresh", (function() {
                    return a = e.batchMax()
                }))), K(t).forEach((function(t) {
                    var e = {};
                    for (i in r) e[i] = r[i];
                    e.trigger = t, s.push(hi.create(e))
                })), s
            };
            var li, ui = function(t, e, i, s) {
                    return e > s ? t(s) : e < 0 && t(0), i > s ? (s - e) / (i - e) : i < 0 ? e / (e - i) : 1
                },
                ci = function t(e, i) {
                    !0 === i ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === i ? "auto" : i ? "pan-" + i + (j.isTouch ? " pinch-zoom" : "") : "none", e === U && t(X, i)
                },
                pi = {
                    auto: 1,
                    scroll: 1
                },
                fi = function(t) {
                    var e, i = t.event,
                        s = t.target,
                        r = t.axis,
                        n = (i.changedTouches ? i.changedTouches[0] : i).target,
                        a = n._gsap || q.core.getCache(n),
                        o = Ft();
                    if (!a._isScrollT || o - a._isScrollT > 2e3) {
                        for (; n && n !== X && (n.scrollHeight <= n.clientHeight && n.scrollWidth <= n.clientWidth || !pi[(e = pe(n)).overflowY] && !pi[e.overflowX]);) n = n.parentNode;
                        a._isScroll = n && n !== s && !Vt(n) && (pi[(e = pe(n)).overflowY] || pi[e.overflowX]), a._isScrollT = o
                    }(a._isScroll || "x" === r) && (i.stopPropagation(), i._gsapAllow = !0)
                },
                di = function(t, e, i, s) {
                    return j.create({
                        target: t,
                        capture: !0,
                        debounce: !1,
                        lockAxis: !0,
                        type: e,
                        onWheel: s = s && fi,
                        onPress: s,
                        onDrag: s,
                        onScroll: s,
                        onEnable: function() {
                            return i && De(Y, j.eventTypes[0], gi, !1, !0)
                        },
                        onDisable: function() {
                            return _e(Y, j.eventTypes[0], gi, !0)
                        }
                    })
                },
                mi = /(input|label|select|textarea)/i,
                gi = function(t) {
                    var e = mi.test(t.target.tagName);
                    (e || li) && (t._gsapAllow = !0, li = e)
                },
                vi = function(t) {
                    Gt(t) || (t = {}), t.preventDefault = t.isNormalizer = t.allowClicks = !0, t.type || (t.type = "wheel,touch"), t.debounce = !!t.debounce, t.id = t.id || "normalizer";
                    var e, i, s, r, n, a, o, h, l = t,
                        u = l.normalizeScrollX,
                        c = l.momentum,
                        p = l.allowNestedScroll,
                        f = l.onRelease,
                        d = O(t.target) || U,
                        m = q.core.globals().ScrollSmoother,
                        g = m && m.get(),
                        v = dt && (t.content && O(t.content) || g && !1 !== t.content && !g.smooth() && g.content()),
                        y = L(d, I),
                        D = L(d, P),
                        b = 1,
                        C = (j.isTouch && H.visualViewport ? H.visualViewport.scale * H.visualViewport.width : H.outerWidth) / H.innerWidth,
                        w = 0,
                        E = Ut(c) ? function() {
                            return c(e)
                        } : function() {
                            return c || 2.8
                        },
                        x = di(d, t.type, !0, p),
                        S = function() {
                            return r = !1
                        },
                        F = Rt,
                        k = Rt,
                        T = function() {
                            i = Wt(d, I), k = J(dt ? 1 : 0, i), u && (F = J(0, Wt(d, P))), s = qe
                        },
                        A = function() {
                            v._gsap.y = Bt(parseFloat(v._gsap.y) + y.offset) + "px", v.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(v._gsap.y) + ", 0, 1)", y.offset = y.cacheID = 0
                        },
                        M = function() {
                            T(), n.isActive() && n.vars.scrollY > i && (y() > i ? n.progress(1) && y(i) : n.resetTo("scrollY", i))
                        };
                    return v && q.set(v, {
                        y: "+=0"
                    }), t.ignoreCheck = function(t) {
                        return dt && "touchmove" === t.type && function() {
                            if (r) {
                                requestAnimationFrame(S);
                                var t = Bt(e.deltaY / 2),
                                    i = k(y.v - t);
                                if (v && i !== y.v + y.offset) {
                                    y.offset = i - y.v;
                                    var s = Bt((parseFloat(v && v._gsap.y) || 0) - y.offset);
                                    v.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + s + ", 0, 1)", v._gsap.y = s + "px", y.cacheID = _.cache, Ge()
                                }
                                return !0
                            }
                            y.offset && A(), r = !0
                        }() || b > 1.05 && "touchstart" !== t.type || e.isGesturing || t.touches && t.touches.length > 1
                    }, t.onPress = function() {
                        r = !1;
                        var t = b;
                        b = Bt((H.visualViewport && H.visualViewport.scale || 1) / C), n.pause(), t !== b && ci(d, b > 1.01 || !u && "x"), a = D(), o = y(), T(), s = qe
                    }, t.onRelease = t.onGestureStart = function(t, e) {
                        if (y.offset && A(), e) {
                            _.cache++;
                            var s, r, a = E();
                            u && (r = (s = D()) + .05 * a * -t.velocityX / .227, a *= ui(D, s, r, Wt(d, P)), n.vars.scrollX = F(r)), r = (s = y()) + .05 * a * -t.velocityY / .227, a *= ui(y, s, r, Wt(d, I)), n.vars.scrollY = k(r), n.invalidate().duration(a).play(.01), (dt && n.vars.scrollY >= i || s >= i - 1) && q.to({}, {
                                onUpdate: M,
                                duration: a
                            })
                        } else h.restart(!0);
                        f && f(t)
                    }, t.onWheel = function() {
                        n._ts && n.pause(), Ft() - w > 1e3 && (s = 0, w = Ft())
                    }, t.onChange = function(t, e, i, r, n) {
                        if (qe !== s && T(), e && u && D(F(r[2] === e ? a + (t.startX - t.x) : D() + e - r[1])), i) {
                            y.offset && A();
                            var h = n[2] === i,
                                l = h ? o + t.startY - t.y : y() + i - n[1],
                                c = k(l);
                            h && l !== c && (o += c - l), y(c)
                        }(i || e) && Ge()
                    }, t.onEnable = function() {
                        ci(d, !u && "x"), hi.addEventListener("refresh", M), De(H, "resize", M), y.smooth && (y.target.style.scrollBehavior = "auto", y.smooth = D.smooth = !1), x.enable()
                    }, t.onDisable = function() {
                        ci(d, !0), _e(H, "resize", M), hi.removeEventListener("refresh", M), x.kill()
                    }, t.lockAxis = !1 !== t.lockAxis, (e = new j(t)).iOS = dt, dt && !y() && y(1), dt && q.ticker.add(Rt), h = e._dc, n = q.to(e, {
                        ease: "power4",
                        paused: !0,
                        inherit: !1,
                        scrollX: u ? "+=0.1" : "+=0",
                        scrollY: "+=0.1",
                        modifiers: {
                            scrollY: ni(y, y(), (function() {
                                return n.pause()
                            }))
                        },
                        onUpdate: Ge,
                        onComplete: h.vars.onComplete
                    }), e
                };
            hi.sort = function(t) {
                return ke.sort(t || function(t, e) {
                    return -1e6 * (t.vars.refreshPriority || 0) + t.start - (e.start + -1e6 * (e.vars.refreshPriority || 0))
                })
            }, hi.observe = function(t) {
                return new j(t)
            }, hi.normalizeScroll = function(t) {
                if (void 0 === t) return ut;
                if (!0 === t && ut) return ut.enable();
                if (!1 === t) return ut && ut.kill(), void(ut = t);
                var e = t instanceof j ? t : vi(t);
                return ut && ut.target === e.target && ut.kill(), Vt(e.target) && (ut = e), e
            }, hi.core = {
                _getVelocityProp: R,
                _inputObserver: di,
                _scrollers: _,
                _proxies: b,
                bridge: {
                    ss: function() {
                        Tt || Be("scrollStart"), Tt = Ft()
                    },
                    ref: function() {
                        return tt
                    }
                }
            }, zt() && q.registerPlugin(hi)
        },
        373: function(t, e, i) {
            "use strict";
            i.d(e, {
                A: function() {
                    return x
                }
            });
            var s, r, n, a, o, h, l = i(422),
                u = /(?:\r|\n|\t\t)/g,
                c = /(?:\s\s+)/g,
                p = String.fromCharCode(160),
                f = function(t) {
                    s = document, r = window, (a = a || t || r.gsap || console.warn("Please gsap.registerPlugin(SplitText)")) && (h = a.utils.toArray, o = a.core.context || function() {}, n = 1)
                },
                d = function(t) {
                    return r.getComputedStyle(t)
                },
                m = function(t) {
                    return "absolute" === t.position || !0 === t.absolute
                },
                g = function(t, e) {
                    for (var i, s = e.length; --s > -1;)
                        if (i = e[s], t.substr(0, i.length) === i) return i.length
                },
                v = function(t, e) {
                    void 0 === t && (t = "");
                    var i = ~t.indexOf("++"),
                        s = 1;
                    return i && (t = t.split("++").join("")),
                        function() {
                            return "<" + e + " style='position:relative;display:inline-block;'" + (t ? " class='" + t + (i ? s++ : "") + "'>" : ">")
                        }
                },
                y = function t(e, i, s) {
                    var r = e.nodeType;
                    if (1 === r || 9 === r || 11 === r)
                        for (e = e.firstChild; e; e = e.nextSibling) t(e, i, s);
                    else 3 !== r && 4 !== r || (e.nodeValue = e.nodeValue.split(i).join(s))
                },
                D = function(t, e) {
                    for (var i = e.length; --i > -1;) t.push(e[i])
                },
                _ = function(t, e, i) {
                    for (var s; t && t !== e;) {
                        if (s = t._next || t.nextSibling) return s.textContent.charAt(0) === i;
                        t = t.parentNode || t._parent
                    }
                },
                b = function t(e) {
                    var i, s, r = h(e.childNodes),
                        n = r.length;
                    for (i = 0; i < n; i++)(s = r[i])._isSplit ? t(s) : i && s.previousSibling && 3 === s.previousSibling.nodeType ? (s.previousSibling.nodeValue += 3 === s.nodeType ? s.nodeValue : s.firstChild.nodeValue, e.removeChild(s)) : 3 !== s.nodeType && (e.insertBefore(s.firstChild, s), e.removeChild(s))
                },
                C = function(t, e) {
                    return parseFloat(e[t]) || 0
                },
                w = function(t, e, i, r, n, a, o) {
                    var h, l, u, c, p, f, g, v, w, E, x, S, F = d(t),
                        k = C("paddingLeft", F),
                        T = -999,
                        A = C("borderBottomWidth", F) + C("borderTopWidth", F),
                        M = C("borderLeftWidth", F) + C("borderRightWidth", F),
                        P = C("paddingTop", F) + C("paddingBottom", F),
                        I = C("paddingLeft", F) + C("paddingRight", F),
                        O = C("fontSize", F) * (e.lineThreshold || .2),
                        L = F.textAlign,
                        R = [],
                        B = [],
                        N = [],
                        z = e.wordDelimiter || " ",
                        V = e.tag ? e.tag : e.span ? "span" : "div",
                        j = e.type || e.split || "chars,words,lines",
                        q = n && ~j.indexOf("lines") ? [] : null,
                        W = ~j.indexOf("words"),
                        H = ~j.indexOf("chars"),
                        Y = m(e),
                        U = e.linesClass,
                        X = ~(U || "").indexOf("++"),
                        G = [],
                        $ = "flex" === F.display,
                        K = t.style.display;
                    for (X && (U = U.split("++").join("")), $ && (t.style.display = "block"), u = (l = t.getElementsByTagName("*")).length, p = [], h = 0; h < u; h++) p[h] = l[h];
                    if (q || Y)
                        for (h = 0; h < u; h++)((f = (c = p[h]).parentNode === t) || Y || H && !W) && (S = c.offsetTop, q && f && Math.abs(S - T) > O && ("BR" !== c.nodeName || 0 === h) && (g = [], q.push(g), T = S), Y && (c._x = c.offsetLeft, c._y = S, c._w = c.offsetWidth, c._h = c.offsetHeight), q && ((c._isSplit && f || !H && f || W && f || !W && c.parentNode.parentNode === t && !c.parentNode._isSplit) && (g.push(c), c._x -= k, _(c, t, z) && (c._wordEnd = !0)), "BR" === c.nodeName && (c.nextSibling && "BR" === c.nextSibling.nodeName || 0 === h) && q.push([])));
                    for (h = 0; h < u; h++)
                        if (f = (c = p[h]).parentNode === t, "BR" !== c.nodeName)
                            if (Y && (w = c.style, W || f || (c._x += c.parentNode._x, c._y += c.parentNode._y), w.left = c._x + "px", w.top = c._y + "px", w.position = "absolute", w.display = "block", w.width = c._w + 1 + "px", w.height = c._h + "px"), !W && H)
                                if (c._isSplit)
                                    for (c._next = l = c.nextSibling, c.parentNode.appendChild(c); l && 3 === l.nodeType && " " === l.textContent;) c._next = l.nextSibling, c.parentNode.appendChild(l), l = l.nextSibling;
                                else c.parentNode._isSplit ? (c._parent = c.parentNode, !c.previousSibling && c.firstChild && (c.firstChild._isFirst = !0), c.nextSibling && " " === c.nextSibling.textContent && !c.nextSibling.nextSibling && G.push(c.nextSibling), c._next = c.nextSibling && c.nextSibling._isFirst ? null : c.nextSibling, c.parentNode.removeChild(c), p.splice(h--, 1), u--) : f || (S = !c.nextSibling && _(c.parentNode, t, z), c.parentNode._parent && c.parentNode._parent.appendChild(c), S && c.parentNode.appendChild(s.createTextNode(" ")), "span" === V && (c.style.display = "inline"), R.push(c));
                    else c.parentNode._isSplit && !c._isSplit && "" !== c.innerHTML ? B.push(c) : H && !c._isSplit && ("span" === V && (c.style.display = "inline"), R.push(c));
                    else q || Y ? (c.parentNode && c.parentNode.removeChild(c), p.splice(h--, 1), u--) : W || t.appendChild(c);
                    for (h = G.length; --h > -1;) G[h].parentNode.removeChild(G[h]);
                    if (q) {
                        for (Y && (E = s.createElement(V), t.appendChild(E), x = E.offsetWidth + "px", S = E.offsetParent === t ? 0 : t.offsetLeft, t.removeChild(E)), w = t.style.cssText, t.style.cssText = "display:none;"; t.firstChild;) t.removeChild(t.firstChild);
                        for (v = " " === z && (!Y || !W && !H), h = 0; h < q.length; h++) {
                            for (g = q[h], (E = s.createElement(V)).style.cssText = "display:block;text-align:" + L + ";position:" + (Y ? "absolute;" : "relative;"), U && (E.className = U + (X ? h + 1 : "")), N.push(E), u = g.length, l = 0; l < u; l++) "BR" !== g[l].nodeName && (c = g[l], E.appendChild(c), v && c._wordEnd && E.appendChild(s.createTextNode(" ")), Y && (0 === l && (E.style.top = c._y + "px", E.style.left = k + S + "px"), c.style.top = "0px", S && (c.style.left = c._x - S + "px")));
                            0 === u ? E.innerHTML = "&nbsp;" : W || H || (b(E), y(E, String.fromCharCode(160), " ")), Y && (E.style.width = x, E.style.height = c._h + "px"), t.appendChild(E)
                        }
                        t.style.cssText = w
                    }
                    Y && (o > t.clientHeight && (t.style.height = o - P + "px", t.clientHeight < o && (t.style.height = o + A + "px")), a > t.clientWidth && (t.style.width = a - I + "px", t.clientWidth < a && (t.style.width = a + M + "px"))), $ && (K ? t.style.display = K : t.style.removeProperty("display")), D(i, R), W && D(r, B), D(n, N)
                },
                E = function t(e, i, r, n) {
                    var a, o, f = h(e.childNodes),
                        v = f.length,
                        D = m(i);
                    if (3 !== e.nodeType || v > 1) {
                        for (i.absolute = !1, a = 0; a < v; a++)(o = f[a])._next = o._isFirst = o._parent = o._wordEnd = null, (3 !== o.nodeType || /\S+/.test(o.nodeValue)) && (D && 3 !== o.nodeType && "inline" === d(o).display && (o.style.display = "inline-block", o.style.position = "relative"), o._isSplit = !0, t(o, i, r, n));
                        return i.absolute = D, void(e._isSplit = !0)
                    }! function(t, e, i, r) {
                        var n, a, o, h, f, d, v, D, _ = e.tag ? e.tag : e.span ? "span" : "div",
                            b = ~(e.type || e.split || "chars,words,lines").indexOf("chars"),
                            C = m(e),
                            w = e.wordDelimiter || " ",
                            E = function(t) {
                                return t === w || t === p && " " === w
                            },
                            x = " " !== w ? "" : C ? "&#173; " : " ",
                            S = "</" + _ + ">",
                            F = 1,
                            k = e.specialChars ? "function" == typeof e.specialChars ? e.specialChars : g : null,
                            T = s.createElement("div"),
                            A = t.parentNode;
                        for (A.insertBefore(T, t), T.textContent = t.nodeValue, A.removeChild(t), t = T, v = -1 !== (n = (0, l.q4)(t)).indexOf("<"), !1 !== e.reduceWhiteSpace && (n = n.replace(c, " ").replace(u, "")), v && (n = n.split("<").join("{{LT}}")), f = n.length, a = (" " === n.charAt(0) ? x : "") + i(), o = 0; o < f; o++)
                            if (d = n.charAt(o), k && (D = k(n.substr(o), e.specialChars))) d = n.substr(o, D || 1), a += b && " " !== d ? r() + d + "</" + _ + ">" : d, o += D - 1;
                            else if (E(d) && !E(n.charAt(o - 1)) && o) {
                            for (a += F ? S : "", F = 0; E(n.charAt(o + 1));) a += x, o++;
                            o === f - 1 ? a += x : ")" !== n.charAt(o + 1) && (a += x + i(), F = 1)
                        } else "{" === d && "{{LT}}" === n.substr(o, 6) ? (a += b ? r() + "{{LT}}</" + _ + ">" : "{{LT}}", o += 5) : d.charCodeAt(0) >= 55296 && d.charCodeAt(0) <= 56319 || n.charCodeAt(o + 1) >= 65024 && n.charCodeAt(o + 1) <= 65039 ? (h = ((n.substr(o, 12).split(l.u6) || [])[1] || "").length || 2, a += b && " " !== d ? r() + n.substr(o, h) + "</" + _ + ">" : n.substr(o, h), o += h - 1) : a += b && " " !== d ? r() + d + "</" + _ + ">" : d;
                        t.outerHTML = a + (F ? S : ""), v && y(A, "{{LT}}", "<")
                    }(e, i, r, n)
                },
                x = function() {
                    function t(t, e) {
                        n || f(), this.elements = h(t), this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = e || {}, o(this), this.split(e)
                    }
                    var e = t.prototype;
                    return e.split = function(t) {
                        this.isSplit && this.revert(), this.vars = t = t || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
                        for (var e, i, s, r = this.elements.length, n = t.tag ? t.tag : t.span ? "span" : "div", a = v(t.wordsClass, n), o = v(t.charsClass, n); --r > -1;) s = this.elements[r], this._originals[r] = {
                            html: s.innerHTML,
                            style: s.getAttribute("style")
                        }, e = s.clientHeight, i = s.clientWidth, E(s, t, a, o), w(s, t, this.chars, this.words, this.lines, i, e);
                        return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
                    }, e.revert = function() {
                        var t = this._originals;
                        if (!t) throw "revert() call wasn't scoped properly.";
                        return this.elements.forEach((function(e, i) {
                            e.innerHTML = t[i].html, e.setAttribute("style", t[i].style)
                        })), this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
                    }, t.create = function(e, i) {
                        return new t(e, i)
                    }, t
                }();
            x.version = "3.12.5", x.register = f
        },
        880: function(t, e, i) {
            "use strict";

            function s(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function r(t, e) {
                t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
            }
            i.d(e, {
                Ay: function() {
                    return $s
                },
                os: function() {
                    return $s
                }
            });
            var n, a, o, h, l, u, c, p, f, d, m, g, v, y, D, _, b, C = {
                    autoSleep: 120,
                    force3D: "auto",
                    nullTargetWarn: 1,
                    units: {
                        lineHeight: ""
                    }
                },
                w = {
                    duration: .5,
                    overwrite: !1,
                    delay: 0
                },
                E = 1e8,
                x = 1e-8,
                S = 2 * Math.PI,
                F = S / 4,
                k = 0,
                T = Math.sqrt,
                A = Math.cos,
                M = Math.sin,
                P = function(t) {
                    return "string" == typeof t
                },
                I = function(t) {
                    return "function" == typeof t
                },
                O = function(t) {
                    return "number" == typeof t
                },
                L = function(t) {
                    return void 0 === t
                },
                R = function(t) {
                    return "object" == typeof t
                },
                B = function(t) {
                    return !1 !== t
                },
                N = function() {
                    return "undefined" != typeof window
                },
                z = function(t) {
                    return I(t) || P(t)
                },
                V = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
                j = Array.isArray,
                q = /(?:-?\.?\d|\.)+/gi,
                W = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
                H = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
                Y = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
                U = /[+-]=-?[.\d]+/,
                X = /[^,'"\[\]\s]+/gi,
                G = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
                $ = {},
                K = {},
                J = function(t) {
                    return (K = St(t, $)) && Fi
                },
                Z = function(t, e) {
                    return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
                },
                Q = function(t, e) {
                    return !e && console.warn(t)
                },
                tt = function(t, e) {
                    return t && ($[t] = e) && K && (K[t] = e) || $
                },
                et = function() {
                    return 0
                },
                it = {
                    suppressEvents: !0,
                    isStart: !0,
                    kill: !1
                },
                st = {
                    suppressEvents: !0,
                    kill: !1
                },
                rt = {
                    suppressEvents: !0
                },
                nt = {},
                at = [],
                ot = {},
                ht = {},
                lt = {},
                ut = 30,
                ct = [],
                pt = "",
                ft = function(t) {
                    var e, i, s = t[0];
                    if (R(s) || I(s) || (t = [t]), !(e = (s._gsap || {}).harness)) {
                        for (i = ct.length; i-- && !ct[i].targetTest(s););
                        e = ct[i]
                    }
                    for (i = t.length; i--;) t[i] && (t[i]._gsap || (t[i]._gsap = new je(t[i], e))) || t.splice(i, 1);
                    return t
                },
                dt = function(t) {
                    return t._gsap || ft(re(t))[0]._gsap
                },
                mt = function(t, e, i) {
                    return (i = t[e]) && I(i) ? t[e]() : L(i) && t.getAttribute && t.getAttribute(e) || i
                },
                gt = function(t, e) {
                    return (t = t.split(",")).forEach(e) || t
                },
                vt = function(t) {
                    return Math.round(1e5 * t) / 1e5 || 0
                },
                yt = function(t) {
                    return Math.round(1e7 * t) / 1e7 || 0
                },
                Dt = function(t, e) {
                    var i = e.charAt(0),
                        s = parseFloat(e.substr(2));
                    return t = parseFloat(t), "+" === i ? t + s : "-" === i ? t - s : "*" === i ? t * s : t / s
                },
                _t = function(t, e) {
                    for (var i = e.length, s = 0; t.indexOf(e[s]) < 0 && ++s < i;);
                    return s < i
                },
                bt = function() {
                    var t, e, i = at.length,
                        s = at.slice(0);
                    for (ot = {}, at.length = 0, t = 0; t < i; t++)(e = s[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
                },
                Ct = function(t, e, i, s) {
                    at.length && !a && bt(), t.render(e, i, s || a && e < 0 && (t._initted || t._startAt)), at.length && !a && bt()
                },
                wt = function(t) {
                    var e = parseFloat(t);
                    return (e || 0 === e) && (t + "").match(X).length < 2 ? e : P(t) ? t.trim() : t
                },
                Et = function(t) {
                    return t
                },
                xt = function(t, e) {
                    for (var i in e) i in t || (t[i] = e[i]);
                    return t
                },
                St = function(t, e) {
                    for (var i in e) t[i] = e[i];
                    return t
                },
                Ft = function t(e, i) {
                    for (var s in i) "__proto__" !== s && "constructor" !== s && "prototype" !== s && (e[s] = R(i[s]) ? t(e[s] || (e[s] = {}), i[s]) : i[s]);
                    return e
                },
                kt = function(t, e) {
                    var i, s = {};
                    for (i in t) i in e || (s[i] = t[i]);
                    return s
                },
                Tt = function(t) {
                    var e, i = t.parent || h,
                        s = t.keyframes ? (e = j(t.keyframes), function(t, i) {
                            for (var s in i) s in t || "duration" === s && e || "ease" === s || (t[s] = i[s])
                        }) : xt;
                    if (B(t.inherit))
                        for (; i;) s(t, i.vars.defaults), i = i.parent || i._dp;
                    return t
                },
                At = function(t, e, i, s, r) {
                    void 0 === i && (i = "_first"), void 0 === s && (s = "_last");
                    var n, a = t[s];
                    if (r)
                        for (n = e[r]; a && a[r] > n;) a = a._prev;
                    return a ? (e._next = a._next, a._next = e) : (e._next = t[i], t[i] = e), e._next ? e._next._prev = e : t[s] = e, e._prev = a, e.parent = e._dp = t, e
                },
                Mt = function(t, e, i, s) {
                    void 0 === i && (i = "_first"), void 0 === s && (s = "_last");
                    var r = e._prev,
                        n = e._next;
                    r ? r._next = n : t[i] === e && (t[i] = n), n ? n._prev = r : t[s] === e && (t[s] = r), e._next = e._prev = e.parent = null
                },
                Pt = function(t, e) {
                    t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0
                },
                It = function(t, e) {
                    if (t && (!e || e._end > t._dur || e._start < 0))
                        for (var i = t; i;) i._dirty = 1, i = i.parent;
                    return t
                },
                Ot = function(t, e, i, s) {
                    return t._startAt && (a ? t._startAt.revert(st) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, s))
                },
                Lt = function t(e) {
                    return !e || e._ts && t(e.parent)
                },
                Rt = function(t) {
                    return t._repeat ? Bt(t._tTime, t = t.duration() + t._rDelay) * t : 0
                },
                Bt = function(t, e) {
                    var i = Math.floor(t /= e);
                    return t && i === t ? i - 1 : i
                },
                Nt = function(t, e) {
                    return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
                },
                zt = function(t) {
                    return t._end = yt(t._start + (t._tDur / Math.abs(t._ts || t._rts || x) || 0))
                },
                Vt = function(t, e) {
                    var i = t._dp;
                    return i && i.smoothChildTiming && t._ts && (t._start = yt(i._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), zt(t), i._dirty || It(i, t)), t
                },
                jt = function(t, e) {
                    var i;
                    if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (i = Nt(t.rawTime(), e), (!e._dur || Qt(0, e.totalDuration(), i) - e._tTime > x) && e.render(i, !0)), It(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
                        if (t._dur < t.duration())
                            for (i = t; i._dp;) i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
                        t._zTime = -1e-8
                    }
                },
                qt = function(t, e, i, s) {
                    return e.parent && Pt(e), e._start = yt((O(i) ? i : i || t !== h ? Kt(t, i, e) : t._time) + e._delay), e._end = yt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), At(t, e, "_first", "_last", t._sort ? "_start" : 0), Ut(e) || (t._recent = e), s || jt(t, e), t._ts < 0 && Vt(t, t._tTime), t
                },
                Wt = function(t, e) {
                    return ($.ScrollTrigger || Z("scrollTrigger", e)) && $.ScrollTrigger.create(e, t)
                },
                Ht = function(t, e, i, s, r) {
                    return $e(t, e, r), t._initted ? !i && t._pt && !a && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && f !== ke.frame ? (at.push(t), t._lazy = [r, s], 1) : void 0 : 1
                },
                Yt = function t(e) {
                    var i = e.parent;
                    return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || t(i))
                },
                Ut = function(t) {
                    var e = t.data;
                    return "isFromStart" === e || "isStart" === e
                },
                Xt = function(t, e, i, s) {
                    var r = t._repeat,
                        n = yt(e) || 0,
                        a = t._tTime / t._tDur;
                    return a && !s && (t._time *= n / t._dur), t._dur = n, t._tDur = r ? r < 0 ? 1e10 : yt(n * (r + 1) + t._rDelay * r) : n, a > 0 && !s && Vt(t, t._tTime = t._tDur * a), t.parent && zt(t), i || It(t.parent, t), t
                },
                Gt = function(t) {
                    return t instanceof We ? It(t) : Xt(t, t._dur)
                },
                $t = {
                    _start: 0,
                    endTime: et,
                    totalDuration: et
                },
                Kt = function t(e, i, s) {
                    var r, n, a, o = e.labels,
                        h = e._recent || $t,
                        l = e.duration() >= E ? h.endTime(!1) : e._dur;
                    return P(i) && (isNaN(i) || i in o) ? (n = i.charAt(0), a = "%" === i.substr(-1), r = i.indexOf("="), "<" === n || ">" === n ? (r >= 0 && (i = i.replace(/=/, "")), ("<" === n ? h._start : h.endTime(h._repeat >= 0)) + (parseFloat(i.substr(1)) || 0) * (a ? (r < 0 ? h : s).totalDuration() / 100 : 1)) : r < 0 ? (i in o || (o[i] = l), o[i]) : (n = parseFloat(i.charAt(r - 1) + i.substr(r + 1)), a && s && (n = n / 100 * (j(s) ? s[0] : s).totalDuration()), r > 1 ? t(e, i.substr(0, r - 1), s) + n : l + n)) : null == i ? l : +i
                },
                Jt = function(t, e, i) {
                    var s, r, n = O(e[1]),
                        a = (n ? 2 : 1) + (t < 2 ? 0 : 1),
                        o = e[a];
                    if (n && (o.duration = e[1]), o.parent = i, t) {
                        for (s = o, r = i; r && !("immediateRender" in s);) s = r.vars.defaults || {}, r = B(r.vars.inherit) && r.parent;
                        o.immediateRender = B(s.immediateRender), t < 2 ? o.runBackwards = 1 : o.startAt = e[a - 1]
                    }
                    return new ti(e[0], o, e[a + 1])
                },
                Zt = function(t, e) {
                    return t || 0 === t ? e(t) : e
                },
                Qt = function(t, e, i) {
                    return i < t ? t : i > e ? e : i
                },
                te = function(t, e) {
                    return P(t) && (e = G.exec(t)) ? e[1] : ""
                },
                ee = [].slice,
                ie = function(t, e) {
                    return t && R(t) && "length" in t && (!e && !t.length || t.length - 1 in t && R(t[0])) && !t.nodeType && t !== l
                },
                se = function(t, e, i) {
                    return void 0 === i && (i = []), t.forEach((function(t) {
                        var s;
                        return P(t) && !e || ie(t, 1) ? (s = i).push.apply(s, re(t)) : i.push(t)
                    })) || i
                },
                re = function(t, e, i) {
                    return o && !e && o.selector ? o.selector(t) : !P(t) || i || !u && Te() ? j(t) ? se(t, i) : ie(t) ? ee.call(t, 0) : t ? [t] : [] : ee.call((e || c).querySelectorAll(t), 0)
                },
                ne = function(t) {
                    return t = re(t)[0] || Q("Invalid scope") || {},
                        function(e) {
                            var i = t.current || t.nativeElement || t;
                            return re(e, i.querySelectorAll ? i : i === t ? Q("Invalid scope") || c.createElement("div") : t)
                        }
                },
                ae = function(t) {
                    return t.sort((function() {
                        return .5 - Math.random()
                    }))
                },
                oe = function(t) {
                    if (I(t)) return t;
                    var e = R(t) ? t : {
                            each: t
                        },
                        i = Re(e.ease),
                        s = e.from || 0,
                        r = parseFloat(e.base) || 0,
                        n = {},
                        a = s > 0 && s < 1,
                        o = isNaN(s) || a,
                        h = e.axis,
                        l = s,
                        u = s;
                    return P(s) ? l = u = {
                            center: .5,
                            edges: .5,
                            end: 1
                        } [s] || 0 : !a && o && (l = s[0], u = s[1]),
                        function(t, a, c) {
                            var p, f, d, m, g, v, y, D, _, b = (c || e).length,
                                C = n[b];
                            if (!C) {
                                if (!(_ = "auto" === e.grid ? 0 : (e.grid || [1, E])[1])) {
                                    for (y = -E; y < (y = c[_++].getBoundingClientRect().left) && _ < b;);
                                    _ < b && _--
                                }
                                for (C = n[b] = [], p = o ? Math.min(_, b) * l - .5 : s % _, f = _ === E ? 0 : o ? b * u / _ - .5 : s / _ | 0, y = 0, D = E, v = 0; v < b; v++) d = v % _ - p, m = f - (v / _ | 0), C[v] = g = h ? Math.abs("y" === h ? m : d) : T(d * d + m * m), g > y && (y = g), g < D && (D = g);
                                "random" === s && ae(C), C.max = y - D, C.min = D, C.v = b = (parseFloat(e.amount) || parseFloat(e.each) * (_ > b ? b - 1 : h ? "y" === h ? b / _ : _ : Math.max(_, b / _)) || 0) * ("edges" === s ? -1 : 1), C.b = b < 0 ? r - b : r, C.u = te(e.amount || e.each) || 0, i = i && b < 0 ? Oe(i) : i
                            }
                            return b = (C[t] - C.min) / C.max || 0, yt(C.b + (i ? i(b) : b) * C.v) + C.u
                        }
                },
                he = function(t) {
                    var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
                    return function(i) {
                        var s = yt(Math.round(parseFloat(i) / t) * t * e);
                        return (s - s % 1) / e + (O(i) ? 0 : te(i))
                    }
                },
                le = function(t, e) {
                    var i, s, r = j(t);
                    return !r && R(t) && (i = r = t.radius || E, t.values ? (t = re(t.values), (s = !O(t[0])) && (i *= i)) : t = he(t.increment)), Zt(e, r ? I(t) ? function(e) {
                        return s = t(e), Math.abs(s - e) <= i ? s : e
                    } : function(e) {
                        for (var r, n, a = parseFloat(s ? e.x : e), o = parseFloat(s ? e.y : 0), h = E, l = 0, u = t.length; u--;)(r = s ? (r = t[u].x - a) * r + (n = t[u].y - o) * n : Math.abs(t[u] - a)) < h && (h = r, l = u);
                        return l = !i || h <= i ? t[l] : e, s || l === e || O(e) ? l : l + te(e)
                    } : he(t))
                },
                ue = function(t, e, i, s) {
                    return Zt(j(t) ? !e : !0 === i ? !!(i = 0) : !s, (function() {
                        return j(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (s = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + .99 * i)) / i) * i * s) / s
                    }))
                },
                ce = function(t, e, i) {
                    return Zt(i, (function(i) {
                        return t[~~e(i)]
                    }))
                },
                pe = function(t) {
                    for (var e, i, s, r, n = 0, a = ""; ~(e = t.indexOf("random(", n));) s = t.indexOf(")", e), r = "[" === t.charAt(e + 7), i = t.substr(e + 7, s - e - 7).match(r ? X : q), a += t.substr(n, e - n) + ue(r ? i : +i[0], r ? 0 : +i[1], +i[2] || 1e-5), n = s + 1;
                    return a + t.substr(n, t.length - n)
                },
                fe = function(t, e, i, s, r) {
                    var n = e - t,
                        a = s - i;
                    return Zt(r, (function(e) {
                        return i + ((e - t) / n * a || 0)
                    }))
                },
                de = function(t, e, i) {
                    var s, r, n, a = t.labels,
                        o = E;
                    for (s in a)(r = a[s] - e) < 0 == !!i && r && o > (r = Math.abs(r)) && (n = s, o = r);
                    return n
                },
                me = function(t, e, i) {
                    var s, r, n, a = t.vars,
                        h = a[e],
                        l = o,
                        u = t._ctx;
                    if (h) return s = a[e + "Params"], r = a.callbackScope || t, i && at.length && bt(), u && (o = u), n = s ? h.apply(r, s) : h.call(r), o = l, n
                },
                ge = function(t) {
                    return Pt(t), t.scrollTrigger && t.scrollTrigger.kill(!!a), t.progress() < 1 && me(t, "onInterrupt"), t
                },
                ve = [],
                ye = function(t) {
                    if (t)
                        if (t = !t.name && t.default || t, N() || t.headless) {
                            var e = t.name,
                                i = I(t),
                                s = e && !i && t.init ? function() {
                                    this._props = []
                                } : t,
                                r = {
                                    init: et,
                                    render: li,
                                    add: Xe,
                                    kill: ci,
                                    modifier: ui,
                                    rawVars: 0
                                },
                                n = {
                                    targetTest: 0,
                                    get: 0,
                                    getSetter: ni,
                                    aliases: {},
                                    register: 0
                                };
                            if (Te(), t !== s) {
                                if (ht[e]) return;
                                xt(s, xt(kt(t, r), n)), St(s.prototype, St(r, kt(t, n))), ht[s.prop = e] = s, t.targetTest && (ct.push(s), nt[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                            }
                            tt(e, s), t.register && t.register(Fi, s, di)
                        } else ve.push(t)
                },
                De = 255,
                _e = {
                    aqua: [0, De, De],
                    lime: [0, De, 0],
                    silver: [192, 192, 192],
                    black: [0, 0, 0],
                    maroon: [128, 0, 0],
                    teal: [0, 128, 128],
                    blue: [0, 0, De],
                    navy: [0, 0, 128],
                    white: [De, De, De],
                    olive: [128, 128, 0],
                    yellow: [De, De, 0],
                    orange: [De, 165, 0],
                    gray: [128, 128, 128],
                    purple: [128, 0, 128],
                    green: [0, 128, 0],
                    red: [De, 0, 0],
                    pink: [De, 192, 203],
                    cyan: [0, De, De],
                    transparent: [De, De, De, 0]
                },
                be = function(t, e, i) {
                    return (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * De + .5 | 0
                },
                Ce = function(t, e, i) {
                    var s, r, n, a, o, h, l, u, c, p, f = t ? O(t) ? [t >> 16, t >> 8 & De, t & De] : 0 : _e.black;
                    if (!f) {
                        if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), _e[t]) f = _e[t];
                        else if ("#" === t.charAt(0)) {
                            if (t.length < 6 && (s = t.charAt(1), r = t.charAt(2), n = t.charAt(3), t = "#" + s + s + r + r + n + n + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(f = parseInt(t.substr(1, 6), 16)) >> 16, f >> 8 & De, f & De, parseInt(t.substr(7), 16) / 255];
                            f = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & De, t & De]
                        } else if ("hsl" === t.substr(0, 3))
                            if (f = p = t.match(q), e) {
                                if (~t.indexOf("=")) return f = t.match(W), i && f.length < 4 && (f[3] = 1), f
                            } else a = +f[0] % 360 / 360, o = +f[1] / 100, s = 2 * (h = +f[2] / 100) - (r = h <= .5 ? h * (o + 1) : h + o - h * o), f.length > 3 && (f[3] *= 1), f[0] = be(a + 1 / 3, s, r), f[1] = be(a, s, r), f[2] = be(a - 1 / 3, s, r);
                        else f = t.match(q) || _e.transparent;
                        f = f.map(Number)
                    }
                    return e && !p && (s = f[0] / De, r = f[1] / De, n = f[2] / De, h = ((l = Math.max(s, r, n)) + (u = Math.min(s, r, n))) / 2, l === u ? a = o = 0 : (c = l - u, o = h > .5 ? c / (2 - l - u) : c / (l + u), a = l === s ? (r - n) / c + (r < n ? 6 : 0) : l === r ? (n - s) / c + 2 : (s - r) / c + 4, a *= 60), f[0] = ~~(a + .5), f[1] = ~~(100 * o + .5), f[2] = ~~(100 * h + .5)), i && f.length < 4 && (f[3] = 1), f
                },
                we = function(t) {
                    var e = [],
                        i = [],
                        s = -1;
                    return t.split(xe).forEach((function(t) {
                        var r = t.match(H) || [];
                        e.push.apply(e, r), i.push(s += r.length + 1)
                    })), e.c = i, e
                },
                Ee = function(t, e, i) {
                    var s, r, n, a, o = "",
                        h = (t + o).match(xe),
                        l = e ? "hsla(" : "rgba(",
                        u = 0;
                    if (!h) return t;
                    if (h = h.map((function(t) {
                            return (t = Ce(t, e, 1)) && l + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
                        })), i && (n = we(t), (s = i.c).join(o) !== n.c.join(o)))
                        for (a = (r = t.replace(xe, "1").split(H)).length - 1; u < a; u++) o += r[u] + (~s.indexOf(u) ? h.shift() || l + "0,0,0,0)" : (n.length ? n : h.length ? h : i).shift());
                    if (!r)
                        for (a = (r = t.split(xe)).length - 1; u < a; u++) o += r[u] + h[u];
                    return o + r[a]
                },
                xe = function() {
                    var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
                    for (t in _e) e += "|" + t + "\\b";
                    return new RegExp(e + ")", "gi")
                }(),
                Se = /hsl[a]?\(/,
                Fe = function(t) {
                    var e, i = t.join(" ");
                    if (xe.lastIndex = 0, xe.test(i)) return e = Se.test(i), t[1] = Ee(t[1], e), t[0] = Ee(t[0], e, we(t[1])), !0
                },
                ke = function() {
                    var t, e, i, s, r, n, a = Date.now,
                        o = 500,
                        h = 33,
                        f = a(),
                        d = f,
                        g = 1e3 / 240,
                        v = g,
                        y = [],
                        D = function i(l) {
                            var u, c, p, m, D = a() - d,
                                _ = !0 === l;
                            if ((D > o || D < 0) && (f += D - h), ((u = (p = (d += D) - f) - v) > 0 || _) && (m = ++s.frame, r = p - 1e3 * s.time, s.time = p /= 1e3, v += u + (u >= g ? 4 : g - u), c = 1), _ || (t = e(i)), c)
                                for (n = 0; n < y.length; n++) y[n](p, r, m, l)
                        };
                    return s = {
                        time: 0,
                        frame: 0,
                        tick: function() {
                            D(!0)
                        },
                        deltaRatio: function(t) {
                            return r / (1e3 / (t || 60))
                        },
                        wake: function() {
                            p && (!u && N() && (l = u = window, c = l.document || {}, $.gsap = Fi, (l.gsapVersions || (l.gsapVersions = [])).push(Fi.version), J(K || l.GreenSockGlobals || !l.gsap && l || {}), ve.forEach(ye)), i = "undefined" != typeof requestAnimationFrame && requestAnimationFrame, t && s.sleep(), e = i || function(t) {
                                return setTimeout(t, v - 1e3 * s.time + 1 | 0)
                            }, m = 1, D(2))
                        },
                        sleep: function() {
                            (i ? cancelAnimationFrame : clearTimeout)(t), m = 0, e = et
                        },
                        lagSmoothing: function(t, e) {
                            o = t || 1 / 0, h = Math.min(e || 33, o)
                        },
                        fps: function(t) {
                            g = 1e3 / (t || 240), v = 1e3 * s.time + g
                        },
                        add: function(t, e, i) {
                            var r = e ? function(e, i, n, a) {
                                t(e, i, n, a), s.remove(r)
                            } : t;
                            return s.remove(t), y[i ? "unshift" : "push"](r), Te(), r
                        },
                        remove: function(t, e) {
                            ~(e = y.indexOf(t)) && y.splice(e, 1) && n >= e && n--
                        },
                        _listeners: y
                    }
                }(),
                Te = function() {
                    return !m && ke.wake()
                },
                Ae = {},
                Me = /^[\d.\-M][\d.\-,\s]/,
                Pe = /["']/g,
                Ie = function(t) {
                    for (var e, i, s, r = {}, n = t.substr(1, t.length - 3).split(":"), a = n[0], o = 1, h = n.length; o < h; o++) i = n[o], e = o !== h - 1 ? i.lastIndexOf(",") : i.length, s = i.substr(0, e), r[a] = isNaN(s) ? s.replace(Pe, "").trim() : +s, a = i.substr(e + 1).trim();
                    return r
                },
                Oe = function(t) {
                    return function(e) {
                        return 1 - t(1 - e)
                    }
                },
                Le = function t(e, i) {
                    for (var s, r = e._first; r;) r instanceof We ? t(r, i) : !r.vars.yoyoEase || r._yoyo && r._repeat || r._yoyo === i || (r.timeline ? t(r.timeline, i) : (s = r._ease, r._ease = r._yEase, r._yEase = s, r._yoyo = i)), r = r._next
                },
                Re = function(t, e) {
                    return t && (I(t) ? t : Ae[t] || function(t) {
                        var e, i, s, r, n = (t + "").split("("),
                            a = Ae[n[0]];
                        return a && n.length > 1 && a.config ? a.config.apply(null, ~t.indexOf("{") ? [Ie(n[1])] : (e = t, i = e.indexOf("(") + 1, s = e.indexOf(")"), r = e.indexOf("(", i), e.substring(i, ~r && r < s ? e.indexOf(")", s + 1) : s)).split(",").map(wt)) : Ae._CE && Me.test(t) ? Ae._CE("", t) : a
                    }(t)) || e
                },
                Be = function(t, e, i, s) {
                    void 0 === i && (i = function(t) {
                        return 1 - e(1 - t)
                    }), void 0 === s && (s = function(t) {
                        return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
                    });
                    var r, n = {
                        easeIn: e,
                        easeOut: i,
                        easeInOut: s
                    };
                    return gt(t, (function(t) {
                        for (var e in Ae[t] = $[t] = n, Ae[r = t.toLowerCase()] = i, n) Ae[r + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Ae[t + "." + e] = n[e]
                    })), n
                },
                Ne = function(t) {
                    return function(e) {
                        return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
                    }
                },
                ze = function t(e, i, s) {
                    var r = i >= 1 ? i : 1,
                        n = (s || (e ? .3 : .45)) / (i < 1 ? i : 1),
                        a = n / S * (Math.asin(1 / r) || 0),
                        o = function(t) {
                            return 1 === t ? 1 : r * Math.pow(2, -10 * t) * M((t - a) * n) + 1
                        },
                        h = "out" === e ? o : "in" === e ? function(t) {
                            return 1 - o(1 - t)
                        } : Ne(o);
                    return n = S / n, h.config = function(i, s) {
                        return t(e, i, s)
                    }, h
                },
                Ve = function t(e, i) {
                    void 0 === i && (i = 1.70158);
                    var s = function(t) {
                            return t ? --t * t * ((i + 1) * t + i) + 1 : 0
                        },
                        r = "out" === e ? s : "in" === e ? function(t) {
                            return 1 - s(1 - t)
                        } : Ne(s);
                    return r.config = function(i) {
                        return t(e, i)
                    }, r
                };
            gt("Linear,Quad,Cubic,Quart,Quint,Strong", (function(t, e) {
                var i = e < 5 ? e + 1 : e;
                Be(t + ",Power" + (i - 1), e ? function(t) {
                    return Math.pow(t, i)
                } : function(t) {
                    return t
                }, (function(t) {
                    return 1 - Math.pow(1 - t, i)
                }), (function(t) {
                    return t < .5 ? Math.pow(2 * t, i) / 2 : 1 - Math.pow(2 * (1 - t), i) / 2
                }))
            })), Ae.Linear.easeNone = Ae.none = Ae.Linear.easeIn, Be("Elastic", ze("in"), ze("out"), ze()), g = 7.5625, D = 2 * (y = 1 / (v = 2.75)), _ = 2.5 * y, Be("Bounce", (function(t) {
                return 1 - b(1 - t)
            }), b = function(t) {
                return t < y ? g * t * t : t < D ? g * Math.pow(t - 1.5 / v, 2) + .75 : t < _ ? g * (t -= 2.25 / v) * t + .9375 : g * Math.pow(t - 2.625 / v, 2) + .984375
            }), Be("Expo", (function(t) {
                return t ? Math.pow(2, 10 * (t - 1)) : 0
            })), Be("Circ", (function(t) {
                return -(T(1 - t * t) - 1)
            })), Be("Sine", (function(t) {
                return 1 === t ? 1 : 1 - A(t * F)
            })), Be("Back", Ve("in"), Ve("out"), Ve()), Ae.SteppedEase = Ae.steps = $.SteppedEase = {
                config: function(t, e) {
                    void 0 === t && (t = 1);
                    var i = 1 / t,
                        s = t + (e ? 0 : 1),
                        r = e ? 1 : 0;
                    return function(t) {
                        return ((s * Qt(0, .99999999, t) | 0) + r) * i
                    }
                }
            }, w.ease = Ae["quad.out"], gt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function(t) {
                return pt += t + "," + t + "Params,"
            }));
            var je = function(t, e) {
                    this.id = k++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : mt, this.set = e ? e.getSetter : ni
                },
                qe = function() {
                    function t(t) {
                        this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Xt(this, +t.duration, 1, 1), this.data = t.data, o && (this._ctx = o, o.data.push(this)), m || ke.wake()
                    }
                    var e = t.prototype;
                    return e.delay = function(t) {
                        return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
                    }, e.duration = function(t) {
                        return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
                    }, e.totalDuration = function(t) {
                        return arguments.length ? (this._dirty = 0, Xt(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
                    }, e.totalTime = function(t, e) {
                        if (Te(), !arguments.length) return this._tTime;
                        var i = this._dp;
                        if (i && i.smoothChildTiming && this._ts) {
                            for (Vt(this, t), !i._dp || i.parent || jt(i, this); i && i.parent;) i.parent._time !== i._start + (i._ts >= 0 ? i._tTime / i._ts : (i.totalDuration() - i._tTime) / -i._ts) && i.totalTime(i._tTime, !0), i = i.parent;
                            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && qt(this._dp, this, this._start - this._delay)
                        }
                        return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === x || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), Ct(this, t, e)), this
                    }, e.time = function(t, e) {
                        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Rt(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
                    }, e.totalProgress = function(t, e) {
                        return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0
                    }, e.progress = function(t, e) {
                        return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Rt(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
                    }, e.iteration = function(t, e) {
                        var i = this.duration() + this._rDelay;
                        return arguments.length ? this.totalTime(this._time + (t - 1) * i, e) : this._repeat ? Bt(this._tTime, i) + 1 : 1
                    }, e.timeScale = function(t, e) {
                        if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
                        if (this._rts === t) return this;
                        var i = this.parent && this._ts ? Nt(this.parent._time, this) : this._tTime;
                        return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts, this.totalTime(Qt(-Math.abs(this._delay), this._tDur, i), !1 !== e), zt(this),
                            function(t) {
                                for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
                                return t
                            }(this)
                    }, e.paused = function(t) {
                        return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Te(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== x && (this._tTime -= x)))), this) : this._ps
                    }, e.startTime = function(t) {
                        if (arguments.length) {
                            this._start = t;
                            var e = this.parent || this._dp;
                            return e && (e._sort || !this.parent) && qt(e, this, t - this._delay), this
                        }
                        return this._start
                    }, e.endTime = function(t) {
                        return this._start + (B(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
                    }, e.rawTime = function(t) {
                        var e = this.parent || this._dp;
                        return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Nt(e.rawTime(t), this) : this._tTime : this._tTime
                    }, e.revert = function(t) {
                        void 0 === t && (t = rt);
                        var e = a;
                        return a = t, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t), this.totalTime(-.01, t.suppressEvents)), "nested" !== this.data && !1 !== t.kill && this.kill(), a = e, this
                    }, e.globalTime = function(t) {
                        for (var e = this, i = arguments.length ? t : e.rawTime(); e;) i = e._start + i / (Math.abs(e._ts) || 1), e = e._dp;
                        return !this.parent && this._sat ? this._sat.globalTime(t) : i
                    }, e.repeat = function(t) {
                        return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Gt(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
                    }, e.repeatDelay = function(t) {
                        if (arguments.length) {
                            var e = this._time;
                            return this._rDelay = t, Gt(this), e ? this.time(e) : this
                        }
                        return this._rDelay
                    }, e.yoyo = function(t) {
                        return arguments.length ? (this._yoyo = t, this) : this._yoyo
                    }, e.seek = function(t, e) {
                        return this.totalTime(Kt(this, t), B(e))
                    }, e.restart = function(t, e) {
                        return this.play().totalTime(t ? -this._delay : 0, B(e))
                    }, e.play = function(t, e) {
                        return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
                    }, e.reverse = function(t, e) {
                        return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
                    }, e.pause = function(t, e) {
                        return null != t && this.seek(t, e), this.paused(!0)
                    }, e.resume = function() {
                        return this.paused(!1)
                    }, e.reversed = function(t) {
                        return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0
                    }, e.invalidate = function() {
                        return this._initted = this._act = 0, this._zTime = -1e-8, this
                    }, e.isActive = function() {
                        var t, e = this.parent || this._dp,
                            i = this._start;
                        return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= i && t < this.endTime(!0) - x))
                    }, e.eventCallback = function(t, e, i) {
                        var s = this.vars;
                        return arguments.length > 1 ? (e ? (s[t] = e, i && (s[t + "Params"] = i), "onUpdate" === t && (this._onUpdate = e)) : delete s[t], this) : s[t]
                    }, e.then = function(t) {
                        var e = this;
                        return new Promise((function(i) {
                            var s = I(t) ? t : Et,
                                r = function() {
                                    var t = e.then;
                                    e.then = null, I(s) && (s = s(e)) && (s.then || s === e) && (e.then = t), i(s), e.then = t
                                };
                            e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? r() : e._prom = r
                        }))
                    }, e.kill = function() {
                        ge(this)
                    }, t
                }();
            xt(qe.prototype, {
                _time: 0,
                _start: 0,
                _end: 0,
                _tTime: 0,
                _tDur: 0,
                _dirty: 0,
                _repeat: 0,
                _yoyo: !1,
                parent: null,
                _initted: !1,
                _rDelay: 0,
                _ts: 1,
                _dp: 0,
                ratio: 0,
                _zTime: -1e-8,
                _prom: 0,
                _ps: !1,
                _rts: 1
            });
            var We = function(t) {
                function e(e, i) {
                    var r;
                    return void 0 === e && (e = {}), (r = t.call(this, e) || this).labels = {}, r.smoothChildTiming = !!e.smoothChildTiming, r.autoRemoveChildren = !!e.autoRemoveChildren, r._sort = B(e.sortChildren), h && qt(e.parent || h, s(r), i), e.reversed && r.reverse(), e.paused && r.paused(!0), e.scrollTrigger && Wt(s(r), e.scrollTrigger), r
                }
                r(e, t);
                var i = e.prototype;
                return i.to = function(t, e, i) {
                    return Jt(0, arguments, this), this
                }, i.from = function(t, e, i) {
                    return Jt(1, arguments, this), this
                }, i.fromTo = function(t, e, i, s) {
                    return Jt(2, arguments, this), this
                }, i.set = function(t, e, i) {
                    return e.duration = 0, e.parent = this, Tt(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new ti(t, e, Kt(this, i), 1), this
                }, i.call = function(t, e, i) {
                    return qt(this, ti.delayedCall(0, t, e), i)
                }, i.staggerTo = function(t, e, i, s, r, n, a) {
                    return i.duration = e, i.stagger = i.stagger || s, i.onComplete = n, i.onCompleteParams = a, i.parent = this, new ti(t, i, Kt(this, r)), this
                }, i.staggerFrom = function(t, e, i, s, r, n, a) {
                    return i.runBackwards = 1, Tt(i).immediateRender = B(i.immediateRender), this.staggerTo(t, e, i, s, r, n, a)
                }, i.staggerFromTo = function(t, e, i, s, r, n, a, o) {
                    return s.startAt = i, Tt(s).immediateRender = B(s.immediateRender), this.staggerTo(t, e, s, r, n, a, o)
                }, i.render = function(t, e, i) {
                    var s, r, n, o, l, u, c, p, f, d, m, g, v = this._time,
                        y = this._dirty ? this.totalDuration() : this._tDur,
                        D = this._dur,
                        _ = t <= 0 ? 0 : yt(t),
                        b = this._zTime < 0 != t < 0 && (this._initted || !D);
                    if (this !== h && _ > y && t >= 0 && (_ = y), _ !== this._tTime || i || b) {
                        if (v !== this._time && D && (_ += this._time - v, t += this._time - v), s = _, f = this._start, u = !(p = this._ts), b && (D || (v = this._zTime), (t || !e) && (this._zTime = t)), this._repeat) {
                            if (m = this._yoyo, l = D + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * l + t, e, i);
                            if (s = yt(_ % l), _ === y ? (o = this._repeat, s = D) : ((o = ~~(_ / l)) && o === _ / l && (s = D, o--), s > D && (s = D)), d = Bt(this._tTime, l), !v && this._tTime && d !== o && this._tTime - d * l - this._dur <= 0 && (d = o), m && 1 & o && (s = D - s, g = 1), o !== d && !this._lock) {
                                var C = m && 1 & d,
                                    w = C === (m && 1 & o);
                                if (o < d && (C = !C), v = C ? 0 : _ % D ? D : _, this._lock = 1, this.render(v || (g ? 0 : yt(o * l)), e, !D)._lock = 0, this._tTime = _, !e && this.parent && me(this, "onRepeat"), this.vars.repeatRefresh && !g && (this.invalidate()._lock = 1), v && v !== this._time || u !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                                if (D = this._dur, y = this._tDur, w && (this._lock = 2, v = C ? D : -1e-4, this.render(v, !0), this.vars.repeatRefresh && !g && this.invalidate()), this._lock = 0, !this._ts && !u) return this;
                                Le(this, g)
                            }
                        }
                        if (this._hasPause && !this._forcing && this._lock < 2 && (c = function(t, e, i) {
                                var s;
                                if (i > e)
                                    for (s = t._first; s && s._start <= i;) {
                                        if ("isPause" === s.data && s._start > e) return s;
                                        s = s._next
                                    } else
                                        for (s = t._last; s && s._start >= i;) {
                                            if ("isPause" === s.data && s._start < e) return s;
                                            s = s._prev
                                        }
                            }(this, yt(v), yt(s)), c && (_ -= s - (s = c._start))), this._tTime = _, this._time = s, this._act = !p, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, v = 0), !v && s && !e && !o && (me(this, "onStart"), this._tTime !== _)) return this;
                        if (s >= v && t >= 0)
                            for (r = this._first; r;) {
                                if (n = r._next, (r._act || s >= r._start) && r._ts && c !== r) {
                                    if (r.parent !== this) return this.render(t, e, i);
                                    if (r.render(r._ts > 0 ? (s - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (s - r._start) * r._ts, e, i), s !== this._time || !this._ts && !u) {
                                        c = 0, n && (_ += this._zTime = -1e-8);
                                        break
                                    }
                                }
                                r = n
                            } else {
                                r = this._last;
                                for (var E = t < 0 ? t : s; r;) {
                                    if (n = r._prev, (r._act || E <= r._end) && r._ts && c !== r) {
                                        if (r.parent !== this) return this.render(t, e, i);
                                        if (r.render(r._ts > 0 ? (E - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (E - r._start) * r._ts, e, i || a && (r._initted || r._startAt)), s !== this._time || !this._ts && !u) {
                                            c = 0, n && (_ += this._zTime = E ? -1e-8 : x);
                                            break
                                        }
                                    }
                                    r = n
                                }
                            }
                        if (c && !e && (this.pause(), c.render(s >= v ? 0 : -1e-8)._zTime = s >= v ? 1 : -1, this._ts)) return this._start = f, zt(this), this.render(t, e, i);
                        this._onUpdate && !e && me(this, "onUpdate", !0), (_ === y && this._tTime >= this.totalDuration() || !_ && v) && (f !== this._start && Math.abs(p) === Math.abs(this._ts) || this._lock || ((t || !D) && (_ === y && this._ts > 0 || !_ && this._ts < 0) && Pt(this, 1), e || t < 0 && !v || !_ && !v && y || (me(this, _ === y && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(_ < y && this.timeScale() > 0) && this._prom())))
                    }
                    return this
                }, i.add = function(t, e) {
                    var i = this;
                    if (O(e) || (e = Kt(this, e, t)), !(t instanceof qe)) {
                        if (j(t)) return t.forEach((function(t) {
                            return i.add(t, e)
                        })), this;
                        if (P(t)) return this.addLabel(t, e);
                        if (!I(t)) return this;
                        t = ti.delayedCall(0, t)
                    }
                    return this !== t ? qt(this, t, e) : this
                }, i.getChildren = function(t, e, i, s) {
                    void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === i && (i = !0), void 0 === s && (s = -E);
                    for (var r = [], n = this._first; n;) n._start >= s && (n instanceof ti ? e && r.push(n) : (i && r.push(n), t && r.push.apply(r, n.getChildren(!0, e, i)))), n = n._next;
                    return r
                }, i.getById = function(t) {
                    for (var e = this.getChildren(1, 1, 1), i = e.length; i--;)
                        if (e[i].vars.id === t) return e[i]
                }, i.remove = function(t) {
                    return P(t) ? this.removeLabel(t) : I(t) ? this.killTweensOf(t) : (Mt(this, t), t === this._recent && (this._recent = this._last), It(this))
                }, i.totalTime = function(e, i) {
                    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = yt(ke.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, i), this._forcing = 0, this) : this._tTime
                }, i.addLabel = function(t, e) {
                    return this.labels[t] = Kt(this, e), this
                }, i.removeLabel = function(t) {
                    return delete this.labels[t], this
                }, i.addPause = function(t, e, i) {
                    var s = ti.delayedCall(0, e || et, i);
                    return s.data = "isPause", this._hasPause = 1, qt(this, s, Kt(this, t))
                }, i.removePause = function(t) {
                    var e = this._first;
                    for (t = Kt(this, t); e;) e._start === t && "isPause" === e.data && Pt(e), e = e._next
                }, i.killTweensOf = function(t, e, i) {
                    for (var s = this.getTweensOf(t, i), r = s.length; r--;) He !== s[r] && s[r].kill(t, e);
                    return this
                }, i.getTweensOf = function(t, e) {
                    for (var i, s = [], r = re(t), n = this._first, a = O(e); n;) n instanceof ti ? _t(n._targets, r) && (a ? (!He || n._initted && n._ts) && n.globalTime(0) <= e && n.globalTime(n.totalDuration()) > e : !e || n.isActive()) && s.push(n) : (i = n.getTweensOf(r, e)).length && s.push.apply(s, i), n = n._next;
                    return s
                }, i.tweenTo = function(t, e) {
                    e = e || {};
                    var i, s = this,
                        r = Kt(s, t),
                        n = e,
                        a = n.startAt,
                        o = n.onStart,
                        h = n.onStartParams,
                        l = n.immediateRender,
                        u = ti.to(s, xt({
                            ease: e.ease || "none",
                            lazy: !1,
                            immediateRender: !1,
                            time: r,
                            overwrite: "auto",
                            duration: e.duration || Math.abs((r - (a && "time" in a ? a.time : s._time)) / s.timeScale()) || x,
                            onStart: function() {
                                if (s.pause(), !i) {
                                    var t = e.duration || Math.abs((r - (a && "time" in a ? a.time : s._time)) / s.timeScale());
                                    u._dur !== t && Xt(u, t, 0, 1).render(u._time, !0, !0), i = 1
                                }
                                o && o.apply(u, h || [])
                            }
                        }, e));
                    return l ? u.render(0) : u
                }, i.tweenFromTo = function(t, e, i) {
                    return this.tweenTo(e, xt({
                        startAt: {
                            time: Kt(this, t)
                        }
                    }, i))
                }, i.recent = function() {
                    return this._recent
                }, i.nextLabel = function(t) {
                    return void 0 === t && (t = this._time), de(this, Kt(this, t))
                }, i.previousLabel = function(t) {
                    return void 0 === t && (t = this._time), de(this, Kt(this, t), 1)
                }, i.currentLabel = function(t) {
                    return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + x)
                }, i.shiftChildren = function(t, e, i) {
                    void 0 === i && (i = 0);
                    for (var s, r = this._first, n = this.labels; r;) r._start >= i && (r._start += t, r._end += t), r = r._next;
                    if (e)
                        for (s in n) n[s] >= i && (n[s] += t);
                    return It(this)
                }, i.invalidate = function(e) {
                    var i = this._first;
                    for (this._lock = 0; i;) i.invalidate(e), i = i._next;
                    return t.prototype.invalidate.call(this, e)
                }, i.clear = function(t) {
                    void 0 === t && (t = !0);
                    for (var e, i = this._first; i;) e = i._next, this.remove(i), i = e;
                    return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), It(this)
                }, i.totalDuration = function(t) {
                    var e, i, s, r = 0,
                        n = this,
                        a = n._last,
                        o = E;
                    if (arguments.length) return n.timeScale((n._repeat < 0 ? n.duration() : n.totalDuration()) / (n.reversed() ? -t : t));
                    if (n._dirty) {
                        for (s = n.parent; a;) e = a._prev, a._dirty && a.totalDuration(), (i = a._start) > o && n._sort && a._ts && !n._lock ? (n._lock = 1, qt(n, a, i - a._delay, 1)._lock = 0) : o = i, i < 0 && a._ts && (r -= i, (!s && !n._dp || s && s.smoothChildTiming) && (n._start += i / n._ts, n._time -= i, n._tTime -= i), n.shiftChildren(-i, !1, -Infinity), o = 0), a._end > r && a._ts && (r = a._end), a = e;
                        Xt(n, n === h && n._time > r ? n._time : r, 1, 1), n._dirty = 0
                    }
                    return n._tDur
                }, e.updateRoot = function(t) {
                    if (h._ts && (Ct(h, Nt(t, h)), f = ke.frame), ke.frame >= ut) {
                        ut += C.autoSleep || 120;
                        var e = h._first;
                        if ((!e || !e._ts) && C.autoSleep && ke._listeners.length < 2) {
                            for (; e && !e._ts;) e = e._next;
                            e || ke.sleep()
                        }
                    }
                }, e
            }(qe);
            xt(We.prototype, {
                _lock: 0,
                _hasPause: 0,
                _forcing: 0
            });
            var He, Ye, Ue = function(t, e, i, s, r, n, a) {
                    var o, h, l, u, c, p, f, d, m = new di(this._pt, t, e, 0, 1, hi, null, r),
                        g = 0,
                        v = 0;
                    for (m.b = i, m.e = s, i += "", (f = ~(s += "").indexOf("random(")) && (s = pe(s)), n && (n(d = [i, s], t, e), i = d[0], s = d[1]), h = i.match(Y) || []; o = Y.exec(s);) u = o[0], c = s.substring(g, o.index), l ? l = (l + 1) % 5 : "rgba(" === c.substr(-5) && (l = 1), u !== h[v++] && (p = parseFloat(h[v - 1]) || 0, m._pt = {
                        _next: m._pt,
                        p: c || 1 === v ? c : ",",
                        s: p,
                        c: "=" === u.charAt(1) ? Dt(p, u) - p : parseFloat(u) - p,
                        m: l && l < 4 ? Math.round : 0
                    }, g = Y.lastIndex);
                    return m.c = g < s.length ? s.substring(g, s.length) : "", m.fp = a, (U.test(s) || f) && (m.e = 0), this._pt = m, m
                },
                Xe = function(t, e, i, s, r, n, a, o, h, l) {
                    I(s) && (s = s(r || 0, t, n));
                    var u, c = t[e],
                        p = "get" !== i ? i : I(c) ? h ? t[e.indexOf("set") || !I(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](h) : t[e]() : c,
                        f = I(c) ? h ? si : ii : ei;
                    if (P(s) && (~s.indexOf("random(") && (s = pe(s)), "=" === s.charAt(1) && ((u = Dt(p, s) + (te(p) || 0)) || 0 === u) && (s = u)), !l || p !== s || Ye) return isNaN(p * s) || "" === s ? (!c && !(e in t) && Z(e, s), Ue.call(this, t, e, p, s, f, o || C.stringFilter, h)) : (u = new di(this._pt, t, e, +p || 0, s - (p || 0), "boolean" == typeof c ? oi : ai, 0, f), h && (u.fp = h), a && u.modifier(a, this, t), this._pt = u)
                },
                Ge = function(t, e, i, s, r, n) {
                    var a, o, h, l;
                    if (ht[t] && !1 !== (a = new ht[t]).init(r, a.rawVars ? e[t] : function(t, e, i, s, r) {
                            if (I(t) && (t = Je(t, r, e, i, s)), !R(t) || t.style && t.nodeType || j(t) || V(t)) return P(t) ? Je(t, r, e, i, s) : t;
                            var n, a = {};
                            for (n in t) a[n] = Je(t[n], r, e, i, s);
                            return a
                        }(e[t], s, r, n, i), i, s, n) && (i._pt = o = new di(i._pt, r, t, 0, 1, a.render, a, 0, a.priority), i !== d))
                        for (h = i._ptLookup[i._targets.indexOf(r)], l = a._props.length; l--;) h[a._props[l]] = o;
                    return a
                },
                $e = function t(e, i, s) {
                    var r, o, l, u, c, p, f, d, m, g, v, y, D, _ = e.vars,
                        b = _.ease,
                        C = _.startAt,
                        S = _.immediateRender,
                        F = _.lazy,
                        k = _.onUpdate,
                        T = _.runBackwards,
                        A = _.yoyoEase,
                        M = _.keyframes,
                        P = _.autoRevert,
                        I = e._dur,
                        O = e._startAt,
                        L = e._targets,
                        R = e.parent,
                        N = R && "nested" === R.data ? R.vars.targets : L,
                        z = "auto" === e._overwrite && !n,
                        V = e.timeline;
                    if (V && (!M || !b) && (b = "none"), e._ease = Re(b, w.ease), e._yEase = A ? Oe(Re(!0 === A ? b : A, w.ease)) : 0, A && e._yoyo && !e._repeat && (A = e._yEase, e._yEase = e._ease, e._ease = A), e._from = !V && !!_.runBackwards, !V || M && !_.stagger) {
                        if (y = (d = L[0] ? dt(L[0]).harness : 0) && _[d.prop], r = kt(_, nt), O && (O._zTime < 0 && O.progress(1), i < 0 && T && S && !P ? O.render(-1, !0) : O.revert(T && I ? st : it), O._lazy = 0), C) {
                            if (Pt(e._startAt = ti.set(L, xt({
                                    data: "isStart",
                                    overwrite: !1,
                                    parent: R,
                                    immediateRender: !0,
                                    lazy: !O && B(F),
                                    startAt: null,
                                    delay: 0,
                                    onUpdate: k && function() {
                                        return me(e, "onUpdate")
                                    },
                                    stagger: 0
                                }, C))), e._startAt._dp = 0, e._startAt._sat = e, i < 0 && (a || !S && !P) && e._startAt.revert(st), S && I && i <= 0 && s <= 0) return void(i && (e._zTime = i))
                        } else if (T && I && !O)
                            if (i && (S = !1), l = xt({
                                    overwrite: !1,
                                    data: "isFromStart",
                                    lazy: S && !O && B(F),
                                    immediateRender: S,
                                    stagger: 0,
                                    parent: R
                                }, r), y && (l[d.prop] = y), Pt(e._startAt = ti.set(L, l)), e._startAt._dp = 0, e._startAt._sat = e, i < 0 && (a ? e._startAt.revert(st) : e._startAt.render(-1, !0)), e._zTime = i, S) {
                                if (!i) return
                            } else t(e._startAt, x, x);
                        for (e._pt = e._ptCache = 0, F = I && B(F) || F && !I, o = 0; o < L.length; o++) {
                            if (f = (c = L[o])._gsap || ft(L)[o]._gsap, e._ptLookup[o] = g = {}, ot[f.id] && at.length && bt(), v = N === L ? o : N.indexOf(c), d && !1 !== (m = new d).init(c, y || r, e, v, N) && (e._pt = u = new di(e._pt, c, m.name, 0, 1, m.render, m, 0, m.priority), m._props.forEach((function(t) {
                                    g[t] = u
                                })), m.priority && (p = 1)), !d || y)
                                for (l in r) ht[l] && (m = Ge(l, r, e, v, c, N)) ? m.priority && (p = 1) : g[l] = u = Xe.call(e, c, l, "get", r[l], v, N, 0, _.stringFilter);
                            e._op && e._op[o] && e.kill(c, e._op[o]), z && e._pt && (He = e, h.killTweensOf(c, g, e.globalTime(i)), D = !e.parent, He = 0), e._pt && F && (ot[f.id] = 1)
                        }
                        p && fi(e), e._onInit && e._onInit(e)
                    }
                    e._onUpdate = k, e._initted = (!e._op || e._pt) && !D, M && i <= 0 && V.render(E, !0, !0)
                },
                Ke = function(t, e, i, s) {
                    var r, n, a = e.ease || s || "power1.inOut";
                    if (j(e)) n = i[t] || (i[t] = []), e.forEach((function(t, i) {
                        return n.push({
                            t: i / (e.length - 1) * 100,
                            v: t,
                            e: a
                        })
                    }));
                    else
                        for (r in e) n = i[r] || (i[r] = []), "ease" === r || n.push({
                            t: parseFloat(t),
                            v: e[r],
                            e: a
                        })
                },
                Je = function(t, e, i, s, r) {
                    return I(t) ? t.call(e, i, s, r) : P(t) && ~t.indexOf("random(") ? pe(t) : t
                },
                Ze = pt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
                Qe = {};
            gt(Ze + ",id,stagger,delay,duration,paused,scrollTrigger", (function(t) {
                return Qe[t] = 1
            }));
            var ti = function(t) {
                function e(e, i, r, a) {
                    var o;
                    "number" == typeof i && (r.duration = i, i = r, r = null);
                    var l, u, c, p, f, d, m, g, v = (o = t.call(this, a ? i : Tt(i)) || this).vars,
                        y = v.duration,
                        D = v.delay,
                        _ = v.immediateRender,
                        b = v.stagger,
                        w = v.overwrite,
                        E = v.keyframes,
                        x = v.defaults,
                        S = v.scrollTrigger,
                        F = v.yoyoEase,
                        k = i.parent || h,
                        T = (j(e) || V(e) ? O(e[0]) : "length" in i) ? [e] : re(e);
                    if (o._targets = T.length ? ft(T) : Q("GSAP target " + e + " not found. https://gsap.com", !C.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = w, E || b || z(y) || z(D)) {
                        if (i = o.vars, (l = o.timeline = new We({
                                data: "nested",
                                defaults: x || {},
                                targets: k && "nested" === k.data ? k.vars.targets : T
                            })).kill(), l.parent = l._dp = s(o), l._start = 0, b || z(y) || z(D)) {
                            if (p = T.length, m = b && oe(b), R(b))
                                for (f in b) ~Ze.indexOf(f) && (g || (g = {}), g[f] = b[f]);
                            for (u = 0; u < p; u++)(c = kt(i, Qe)).stagger = 0, F && (c.yoyoEase = F), g && St(c, g), d = T[u], c.duration = +Je(y, s(o), u, d, T), c.delay = (+Je(D, s(o), u, d, T) || 0) - o._delay, !b && 1 === p && c.delay && (o._delay = D = c.delay, o._start += D, c.delay = 0), l.to(d, c, m ? m(u, d, T) : 0), l._ease = Ae.none;
                            l.duration() ? y = D = 0 : o.timeline = 0
                        } else if (E) {
                            Tt(xt(l.vars.defaults, {
                                ease: "none"
                            })), l._ease = Re(E.ease || i.ease || "none");
                            var A, M, P, I = 0;
                            if (j(E)) E.forEach((function(t) {
                                return l.to(T, t, ">")
                            })), l.duration();
                            else {
                                for (f in c = {}, E) "ease" === f || "easeEach" === f || Ke(f, E[f], c, E.easeEach);
                                for (f in c)
                                    for (A = c[f].sort((function(t, e) {
                                            return t.t - e.t
                                        })), I = 0, u = 0; u < A.length; u++)(P = {
                                        ease: (M = A[u]).e,
                                        duration: (M.t - (u ? A[u - 1].t : 0)) / 100 * y
                                    })[f] = M.v, l.to(T, P, I), I += P.duration;
                                l.duration() < y && l.to({}, {
                                    duration: y - l.duration()
                                })
                            }
                        }
                        y || o.duration(y = l.duration())
                    } else o.timeline = 0;
                    return !0 !== w || n || (He = s(o), h.killTweensOf(T), He = 0), qt(k, s(o), r), i.reversed && o.reverse(), i.paused && o.paused(!0), (_ || !y && !E && o._start === yt(k._time) && B(_) && Lt(s(o)) && "nested" !== k.data) && (o._tTime = -1e-8, o.render(Math.max(0, -D) || 0)), S && Wt(s(o), S), o
                }
                r(e, t);
                var i = e.prototype;
                return i.render = function(t, e, i) {
                    var s, r, n, o, h, l, u, c, p, f = this._time,
                        d = this._tDur,
                        m = this._dur,
                        g = t < 0,
                        v = t > d - x && !g ? d : t < x ? 0 : t;
                    if (m) {
                        if (v !== this._tTime || !t || i || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== g) {
                            if (s = v, c = this.timeline, this._repeat) {
                                if (o = m + this._rDelay, this._repeat < -1 && g) return this.totalTime(100 * o + t, e, i);
                                if (s = yt(v % o), v === d ? (n = this._repeat, s = m) : ((n = ~~(v / o)) && n === yt(v / o) && (s = m, n--), s > m && (s = m)), (l = this._yoyo && 1 & n) && (p = this._yEase, s = m - s), h = Bt(this._tTime, o), s === f && !i && this._initted && n === h) return this._tTime = v, this;
                                n !== h && (c && this._yEase && Le(c, l), this.vars.repeatRefresh && !l && !this._lock && this._time !== o && this._initted && (this._lock = i = 1, this.render(yt(o * n), !0).invalidate()._lock = 0))
                            }
                            if (!this._initted) {
                                if (Ht(this, g ? t : s, i, e, v)) return this._tTime = 0, this;
                                if (!(f === this._time || i && this.vars.repeatRefresh && n !== h)) return this;
                                if (m !== this._dur) return this.render(t, e, i)
                            }
                            if (this._tTime = v, this._time = s, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = u = (p || this._ease)(s / m), this._from && (this.ratio = u = 1 - u), s && !f && !e && !n && (me(this, "onStart"), this._tTime !== v)) return this;
                            for (r = this._pt; r;) r.r(u, r.d), r = r._next;
                            c && c.render(t < 0 ? t : c._dur * c._ease(s / this._dur), e, i) || this._startAt && (this._zTime = t), this._onUpdate && !e && (g && Ot(this, t, 0, i), me(this, "onUpdate")), this._repeat && n !== h && this.vars.onRepeat && !e && this.parent && me(this, "onRepeat"), v !== this._tDur && v || this._tTime !== v || (g && !this._onUpdate && Ot(this, t, 0, !0), (t || !m) && (v === this._tDur && this._ts > 0 || !v && this._ts < 0) && Pt(this, 1), e || g && !f || !(v || f || l) || (me(this, v === d ? "onComplete" : "onReverseComplete", !0), this._prom && !(v < d && this.timeScale() > 0) && this._prom()))
                        }
                    } else ! function(t, e, i, s) {
                        var r, n, o, h = t.ratio,
                            l = e < 0 || !e && (!t._start && Yt(t) && (t._initted || !Ut(t)) || (t._ts < 0 || t._dp._ts < 0) && !Ut(t)) ? 0 : 1,
                            u = t._rDelay,
                            c = 0;
                        if (u && t._repeat && (c = Qt(0, t._tDur, e), n = Bt(c, u), t._yoyo && 1 & n && (l = 1 - l), n !== Bt(t._tTime, u) && (h = 1 - l, t.vars.repeatRefresh && t._initted && t.invalidate())), l !== h || a || s || t._zTime === x || !e && t._zTime) {
                            if (!t._initted && Ht(t, e, s, i, c)) return;
                            for (o = t._zTime, t._zTime = e || (i ? x : 0), i || (i = e && !o), t.ratio = l, t._from && (l = 1 - l), t._time = 0, t._tTime = c, r = t._pt; r;) r.r(l, r.d), r = r._next;
                            e < 0 && Ot(t, e, 0, !0), t._onUpdate && !i && me(t, "onUpdate"), c && t._repeat && !i && t.parent && me(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === l && (l && Pt(t, 1), i || a || (me(t, l ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                        } else t._zTime || (t._zTime = e)
                    }(this, t, e, i);
                    return this
                }, i.targets = function() {
                    return this._targets
                }, i.invalidate = function(e) {
                    return (!e || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(e), t.prototype.invalidate.call(this, e)
                }, i.resetTo = function(t, e, i, s, r) {
                    m || ke.wake(), this._ts || this.play();
                    var n = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
                    return this._initted || $e(this, n),
                        function(t, e, i, s, r, n, a, o) {
                            var h, l, u, c, p = (t._pt && t._ptCache || (t._ptCache = {}))[e];
                            if (!p)
                                for (p = t._ptCache[e] = [], u = t._ptLookup, c = t._targets.length; c--;) {
                                    if ((h = u[c][e]) && h.d && h.d._pt)
                                        for (h = h.d._pt; h && h.p !== e && h.fp !== e;) h = h._next;
                                    if (!h) return Ye = 1, t.vars[e] = "+=0", $e(t, a), Ye = 0, o ? Q(e + " not eligible for reset") : 1;
                                    p.push(h)
                                }
                            for (c = p.length; c--;)(h = (l = p[c])._pt || l).s = !s && 0 !== s || r ? h.s + (s || 0) + n * h.c : s, h.c = i - h.s, l.e && (l.e = vt(i) + te(l.e)), l.b && (l.b = h.s + te(l.b))
                        }(this, t, e, i, s, this._ease(n / this._dur), n, r) ? this.resetTo(t, e, i, s, 1) : (Vt(this, 0), this.parent || At(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
                }, i.kill = function(t, e) {
                    if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? ge(this) : this;
                    if (this.timeline) {
                        var i = this.timeline.totalDuration();
                        return this.timeline.killTweensOf(t, e, He && !0 !== He.vars.overwrite)._first || ge(this), this.parent && i !== this.timeline.totalDuration() && Xt(this, this._dur * this.timeline._tDur / i, 0, 1), this
                    }
                    var s, r, n, a, o, h, l, u = this._targets,
                        c = t ? re(t) : u,
                        p = this._ptLookup,
                        f = this._pt;
                    if ((!e || "all" === e) && function(t, e) {
                            for (var i = t.length, s = i === e.length; s && i-- && t[i] === e[i];);
                            return i < 0
                        }(u, c)) return "all" === e && (this._pt = 0), ge(this);
                    for (s = this._op = this._op || [], "all" !== e && (P(e) && (o = {}, gt(e, (function(t) {
                            return o[t] = 1
                        })), e = o), e = function(t, e) {
                            var i, s, r, n, a = t[0] ? dt(t[0]).harness : 0,
                                o = a && a.aliases;
                            if (!o) return e;
                            for (s in i = St({}, e), o)
                                if (s in i)
                                    for (r = (n = o[s].split(",")).length; r--;) i[n[r]] = i[s];
                            return i
                        }(u, e)), l = u.length; l--;)
                        if (~c.indexOf(u[l]))
                            for (o in r = p[l], "all" === e ? (s[l] = e, a = r, n = {}) : (n = s[l] = s[l] || {}, a = e), a)(h = r && r[o]) && ("kill" in h.d && !0 !== h.d.kill(o) || Mt(this, h, "_pt"), delete r[o]), "all" !== n && (n[o] = 1);
                    return this._initted && !this._pt && f && ge(this), this
                }, e.to = function(t, i) {
                    return new e(t, i, arguments[2])
                }, e.from = function(t, e) {
                    return Jt(1, arguments)
                }, e.delayedCall = function(t, i, s, r) {
                    return new e(i, 0, {
                        immediateRender: !1,
                        lazy: !1,
                        overwrite: !1,
                        delay: t,
                        onComplete: i,
                        onReverseComplete: i,
                        onCompleteParams: s,
                        onReverseCompleteParams: s,
                        callbackScope: r
                    })
                }, e.fromTo = function(t, e, i) {
                    return Jt(2, arguments)
                }, e.set = function(t, i) {
                    return i.duration = 0, i.repeatDelay || (i.repeat = 0), new e(t, i)
                }, e.killTweensOf = function(t, e, i) {
                    return h.killTweensOf(t, e, i)
                }, e
            }(qe);
            xt(ti.prototype, {
                _targets: [],
                _lazy: 0,
                _startAt: 0,
                _op: 0,
                _onInit: 0
            }), gt("staggerTo,staggerFrom,staggerFromTo", (function(t) {
                ti[t] = function() {
                    var e = new We,
                        i = ee.call(arguments, 0);
                    return i.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, i)
                }
            }));
            var ei = function(t, e, i) {
                    return t[e] = i
                },
                ii = function(t, e, i) {
                    return t[e](i)
                },
                si = function(t, e, i, s) {
                    return t[e](s.fp, i)
                },
                ri = function(t, e, i) {
                    return t.setAttribute(e, i)
                },
                ni = function(t, e) {
                    return I(t[e]) ? ii : L(t[e]) && t.setAttribute ? ri : ei
                },
                ai = function(t, e) {
                    return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
                },
                oi = function(t, e) {
                    return e.set(e.t, e.p, !!(e.s + e.c * t), e)
                },
                hi = function(t, e) {
                    var i = e._pt,
                        s = "";
                    if (!t && e.b) s = e.b;
                    else if (1 === t && e.e) s = e.e;
                    else {
                        for (; i;) s = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round(1e4 * (i.s + i.c * t)) / 1e4) + s, i = i._next;
                        s += e.c
                    }
                    e.set(e.t, e.p, s, e)
                },
                li = function(t, e) {
                    for (var i = e._pt; i;) i.r(t, i.d), i = i._next
                },
                ui = function(t, e, i, s) {
                    for (var r, n = this._pt; n;) r = n._next, n.p === s && n.modifier(t, e, i), n = r
                },
                ci = function(t) {
                    for (var e, i, s = this._pt; s;) i = s._next, s.p === t && !s.op || s.op === t ? Mt(this, s, "_pt") : s.dep || (e = 1), s = i;
                    return !e
                },
                pi = function(t, e, i, s) {
                    s.mSet(t, e, s.m.call(s.tween, i, s.mt), s)
                },
                fi = function(t) {
                    for (var e, i, s, r, n = t._pt; n;) {
                        for (e = n._next, i = s; i && i.pr > n.pr;) i = i._next;
                        (n._prev = i ? i._prev : r) ? n._prev._next = n: s = n, (n._next = i) ? i._prev = n : r = n, n = e
                    }
                    t._pt = s
                },
                di = function() {
                    function t(t, e, i, s, r, n, a, o, h) {
                        this.t = e, this.s = s, this.c = r, this.p = i, this.r = n || ai, this.d = a || this, this.set = o || ei, this.pr = h || 0, this._next = t, t && (t._prev = this)
                    }
                    return t.prototype.modifier = function(t, e, i) {
                        this.mSet = this.mSet || this.set, this.set = pi, this.m = t, this.mt = i, this.tween = e
                    }, t
                }();
            gt(pt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function(t) {
                return nt[t] = 1
            })), $.TweenMax = $.TweenLite = ti, $.TimelineLite = $.TimelineMax = We, h = new We({
                sortChildren: !1,
                defaults: w,
                autoRemoveChildren: !0,
                id: "root",
                smoothChildTiming: !0
            }), C.stringFilter = Fe;
            var mi = [],
                gi = {},
                vi = [],
                yi = 0,
                Di = 0,
                _i = function(t) {
                    return (gi[t] || vi).map((function(t) {
                        return t()
                    }))
                },
                bi = function() {
                    var t = Date.now(),
                        e = [];
                    t - yi > 2 && (_i("matchMediaInit"), mi.forEach((function(t) {
                        var i, s, r, n, a = t.queries,
                            o = t.conditions;
                        for (s in a)(i = l.matchMedia(a[s]).matches) && (r = 1), i !== o[s] && (o[s] = i, n = 1);
                        n && (t.revert(), r && e.push(t))
                    })), _i("matchMediaRevert"), e.forEach((function(t) {
                        return t.onMatch(t, (function(e) {
                            return t.add(null, e)
                        }))
                    })), yi = t, _i("matchMedia"))
                },
                Ci = function() {
                    function t(t, e) {
                        this.selector = e && ne(e), this.data = [], this._r = [], this.isReverted = !1, this.id = Di++, t && this.add(t)
                    }
                    var e = t.prototype;
                    return e.add = function(t, e, i) {
                        I(t) && (i = e, e = t, t = I);
                        var s = this,
                            r = function() {
                                var t, r = o,
                                    n = s.selector;
                                return r && r !== s && r.data.push(s), i && (s.selector = ne(i)), o = s, t = e.apply(s, arguments), I(t) && s._r.push(t), o = r, s.selector = n, s.isReverted = !1, t
                            };
                        return s.last = r, t === I ? r(s, (function(t) {
                            return s.add(null, t)
                        })) : t ? s[t] = r : r
                    }, e.ignore = function(t) {
                        var e = o;
                        o = null, t(this), o = e
                    }, e.getTweens = function() {
                        var e = [];
                        return this.data.forEach((function(i) {
                            return i instanceof t ? e.push.apply(e, i.getTweens()) : i instanceof ti && !(i.parent && "nested" === i.parent.data) && e.push(i)
                        })), e
                    }, e.clear = function() {
                        this._r.length = this.data.length = 0
                    }, e.kill = function(t, e) {
                        var i = this;
                        if (t ? function() {
                                for (var e, s = i.getTweens(), r = i.data.length; r--;) "isFlip" === (e = i.data[r]).data && (e.revert(), e.getChildren(!0, !0, !1).forEach((function(t) {
                                    return s.splice(s.indexOf(t), 1)
                                })));
                                for (s.map((function(t) {
                                        return {
                                            g: t._dur || t._delay || t._sat && !t._sat.vars.immediateRender ? t.globalTime(0) : -1 / 0,
                                            t: t
                                        }
                                    })).sort((function(t, e) {
                                        return e.g - t.g || -1 / 0
                                    })).forEach((function(e) {
                                        return e.t.revert(t)
                                    })), r = i.data.length; r--;)(e = i.data[r]) instanceof We ? "nested" !== e.data && (e.scrollTrigger && e.scrollTrigger.revert(), e.kill()) : !(e instanceof ti) && e.revert && e.revert(t);
                                i._r.forEach((function(e) {
                                    return e(t, i)
                                })), i.isReverted = !0
                            }() : this.data.forEach((function(t) {
                                return t.kill && t.kill()
                            })), this.clear(), e)
                            for (var s = mi.length; s--;) mi[s].id === this.id && mi.splice(s, 1)
                    }, e.revert = function(t) {
                        this.kill(t || {})
                    }, t
                }(),
                wi = function() {
                    function t(t) {
                        this.contexts = [], this.scope = t, o && o.data.push(this)
                    }
                    var e = t.prototype;
                    return e.add = function(t, e, i) {
                        R(t) || (t = {
                            matches: t
                        });
                        var s, r, n, a = new Ci(0, i || this.scope),
                            h = a.conditions = {};
                        for (r in o && !a.selector && (a.selector = o.selector), this.contexts.push(a), e = a.add("onMatch", e), a.queries = t, t) "all" === r ? n = 1 : (s = l.matchMedia(t[r])) && (mi.indexOf(a) < 0 && mi.push(a), (h[r] = s.matches) && (n = 1), s.addListener ? s.addListener(bi) : s.addEventListener("change", bi));
                        return n && e(a, (function(t) {
                            return a.add(null, t)
                        })), this
                    }, e.revert = function(t) {
                        this.kill(t || {})
                    }, e.kill = function(t) {
                        this.contexts.forEach((function(e) {
                            return e.kill(t, !0)
                        }))
                    }, t
                }(),
                Ei = {
                    registerPlugin: function() {
                        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                        e.forEach((function(t) {
                            return ye(t)
                        }))
                    },
                    timeline: function(t) {
                        return new We(t)
                    },
                    getTweensOf: function(t, e) {
                        return h.getTweensOf(t, e)
                    },
                    getProperty: function(t, e, i, s) {
                        P(t) && (t = re(t)[0]);
                        var r = dt(t || {}).get,
                            n = i ? Et : wt;
                        return "native" === i && (i = ""), t ? e ? n((ht[e] && ht[e].get || r)(t, e, i, s)) : function(e, i, s) {
                            return n((ht[e] && ht[e].get || r)(t, e, i, s))
                        } : t
                    },
                    quickSetter: function(t, e, i) {
                        if ((t = re(t)).length > 1) {
                            var s = t.map((function(t) {
                                    return Fi.quickSetter(t, e, i)
                                })),
                                r = s.length;
                            return function(t) {
                                for (var e = r; e--;) s[e](t)
                            }
                        }
                        t = t[0] || {};
                        var n = ht[e],
                            a = dt(t),
                            o = a.harness && (a.harness.aliases || {})[e] || e,
                            h = n ? function(e) {
                                var s = new n;
                                d._pt = 0, s.init(t, i ? e + i : e, d, 0, [t]), s.render(1, s), d._pt && li(1, d)
                            } : a.set(t, o);
                        return n ? h : function(e) {
                            return h(t, o, i ? e + i : e, a, 1)
                        }
                    },
                    quickTo: function(t, e, i) {
                        var s, r = Fi.to(t, St(((s = {})[e] = "+=0.1", s.paused = !0, s), i || {})),
                            n = function(t, i, s) {
                                return r.resetTo(e, t, i, s)
                            };
                        return n.tween = r, n
                    },
                    isTweening: function(t) {
                        return h.getTweensOf(t, !0).length > 0
                    },
                    defaults: function(t) {
                        return t && t.ease && (t.ease = Re(t.ease, w.ease)), Ft(w, t || {})
                    },
                    config: function(t) {
                        return Ft(C, t || {})
                    },
                    registerEffect: function(t) {
                        var e = t.name,
                            i = t.effect,
                            s = t.plugins,
                            r = t.defaults,
                            n = t.extendTimeline;
                        (s || "").split(",").forEach((function(t) {
                            return t && !ht[t] && !$[t] && Q(e + " effect requires " + t + " plugin.")
                        })), lt[e] = function(t, e, s) {
                            return i(re(t), xt(e || {}, r), s)
                        }, n && (We.prototype[e] = function(t, i, s) {
                            return this.add(lt[e](t, R(i) ? i : (s = i) && {}, this), s)
                        })
                    },
                    registerEase: function(t, e) {
                        Ae[t] = Re(e)
                    },
                    parseEase: function(t, e) {
                        return arguments.length ? Re(t, e) : Ae
                    },
                    getById: function(t) {
                        return h.getById(t)
                    },
                    exportRoot: function(t, e) {
                        void 0 === t && (t = {});
                        var i, s, r = new We(t);
                        for (r.smoothChildTiming = B(t.smoothChildTiming), h.remove(r), r._dp = 0, r._time = r._tTime = h._time, i = h._first; i;) s = i._next, !e && !i._dur && i instanceof ti && i.vars.onComplete === i._targets[0] || qt(r, i, i._start - i._delay), i = s;
                        return qt(h, r, 0), r
                    },
                    context: function(t, e) {
                        return t ? new Ci(t, e) : o
                    },
                    matchMedia: function(t) {
                        return new wi(t)
                    },
                    matchMediaRefresh: function() {
                        return mi.forEach((function(t) {
                            var e, i, s = t.conditions;
                            for (i in s) s[i] && (s[i] = !1, e = 1);
                            e && t.revert()
                        })) || bi()
                    },
                    addEventListener: function(t, e) {
                        var i = gi[t] || (gi[t] = []);
                        ~i.indexOf(e) || i.push(e)
                    },
                    removeEventListener: function(t, e) {
                        var i = gi[t],
                            s = i && i.indexOf(e);
                        s >= 0 && i.splice(s, 1)
                    },
                    utils: {
                        wrap: function t(e, i, s) {
                            var r = i - e;
                            return j(e) ? ce(e, t(0, e.length), i) : Zt(s, (function(t) {
                                return (r + (t - e) % r) % r + e
                            }))
                        },
                        wrapYoyo: function t(e, i, s) {
                            var r = i - e,
                                n = 2 * r;
                            return j(e) ? ce(e, t(0, e.length - 1), i) : Zt(s, (function(t) {
                                return e + ((t = (n + (t - e) % n) % n || 0) > r ? n - t : t)
                            }))
                        },
                        distribute: oe,
                        random: ue,
                        snap: le,
                        normalize: function(t, e, i) {
                            return fe(t, e, 0, 1, i)
                        },
                        getUnit: te,
                        clamp: function(t, e, i) {
                            return Zt(i, (function(i) {
                                return Qt(t, e, i)
                            }))
                        },
                        splitColor: Ce,
                        toArray: re,
                        selector: ne,
                        mapRange: fe,
                        pipe: function() {
                            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                            return function(t) {
                                return e.reduce((function(t, e) {
                                    return e(t)
                                }), t)
                            }
                        },
                        unitize: function(t, e) {
                            return function(i) {
                                return t(parseFloat(i)) + (e || te(i))
                            }
                        },
                        interpolate: function t(e, i, s, r) {
                            var n = isNaN(e + i) ? 0 : function(t) {
                                return (1 - t) * e + t * i
                            };
                            if (!n) {
                                var a, o, h, l, u, c = P(e),
                                    p = {};
                                if (!0 === s && (r = 1) && (s = null), c) e = {
                                    p: e
                                }, i = {
                                    p: i
                                };
                                else if (j(e) && !j(i)) {
                                    for (h = [], l = e.length, u = l - 2, o = 1; o < l; o++) h.push(t(e[o - 1], e[o]));
                                    l--, n = function(t) {
                                        t *= l;
                                        var e = Math.min(u, ~~t);
                                        return h[e](t - e)
                                    }, s = i
                                } else r || (e = St(j(e) ? [] : {}, e));
                                if (!h) {
                                    for (a in i) Xe.call(p, e, a, "get", i[a]);
                                    n = function(t) {
                                        return li(t, p) || (c ? e.p : e)
                                    }
                                }
                            }
                            return Zt(s, n)
                        },
                        shuffle: ae
                    },
                    install: J,
                    effects: lt,
                    ticker: ke,
                    updateRoot: We.updateRoot,
                    plugins: ht,
                    globalTimeline: h,
                    core: {
                        PropTween: di,
                        globals: tt,
                        Tween: ti,
                        Timeline: We,
                        Animation: qe,
                        getCache: dt,
                        _removeLinkedListItem: Mt,
                        reverting: function() {
                            return a
                        },
                        context: function(t) {
                            return t && o && (o.data.push(t), t._ctx = o), o
                        },
                        suppressOverwrites: function(t) {
                            return n = t
                        }
                    }
                };
            gt("to,from,fromTo,delayedCall,set,killTweensOf", (function(t) {
                return Ei[t] = ti[t]
            })), ke.add(We.updateRoot), d = Ei.to({}, {
                duration: 0
            });
            var xi = function(t, e) {
                    for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e;) i = i._next;
                    return i
                },
                Si = function(t, e) {
                    return {
                        name: t,
                        rawVars: 1,
                        init: function(t, i, s) {
                            s._onInit = function(t) {
                                var s, r;
                                if (P(i) && (s = {}, gt(i, (function(t) {
                                        return s[t] = 1
                                    })), i = s), e) {
                                    for (r in s = {}, i) s[r] = e(i[r]);
                                    i = s
                                }! function(t, e) {
                                    var i, s, r, n = t._targets;
                                    for (i in e)
                                        for (s = n.length; s--;)(r = t._ptLookup[s][i]) && (r = r.d) && (r._pt && (r = xi(r, i)), r && r.modifier && r.modifier(e[i], t, n[s], i))
                                }(t, i)
                            }
                        }
                    }
                },
                Fi = Ei.registerPlugin({
                    name: "attr",
                    init: function(t, e, i, s, r) {
                        var n, a, o;
                        for (n in this.tween = i, e) o = t.getAttribute(n) || "", (a = this.add(t, "setAttribute", (o || 0) + "", e[n], s, r, 0, 0, n)).op = n, a.b = o, this._props.push(n)
                    },
                    render: function(t, e) {
                        for (var i = e._pt; i;) a ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), i = i._next
                    }
                }, {
                    name: "endArray",
                    init: function(t, e) {
                        for (var i = e.length; i--;) this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1)
                    }
                }, Si("roundProps", he), Si("modifiers"), Si("snap", le)) || Ei;
            ti.version = We.version = Fi.version = "3.12.5", p = 1, N() && Te();
            Ae.Power0, Ae.Power1, Ae.Power2, Ae.Power3, Ae.Power4, Ae.Linear, Ae.Quad, Ae.Cubic, Ae.Quart, Ae.Quint, Ae.Strong, Ae.Elastic, Ae.Back, Ae.SteppedEase, Ae.Bounce, Ae.Sine, Ae.Expo, Ae.Circ;
            var ki, Ti, Ai, Mi, Pi, Ii, Oi, Li, Ri = {},
                Bi = 180 / Math.PI,
                Ni = Math.PI / 180,
                zi = Math.atan2,
                Vi = /([A-Z])/g,
                ji = /(left|right|width|margin|padding|x)/i,
                qi = /[\s,\(]\S/,
                Wi = {
                    autoAlpha: "opacity,visibility",
                    scale: "scaleX,scaleY",
                    alpha: "opacity"
                },
                Hi = function(t, e) {
                    return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
                },
                Yi = function(t, e) {
                    return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
                },
                Ui = function(t, e) {
                    return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
                },
                Xi = function(t, e) {
                    var i = e.s + e.c * t;
                    e.set(e.t, e.p, ~~(i + (i < 0 ? -.5 : .5)) + e.u, e)
                },
                Gi = function(t, e) {
                    return e.set(e.t, e.p, t ? e.e : e.b, e)
                },
                $i = function(t, e) {
                    return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
                },
                Ki = function(t, e, i) {
                    return t.style[e] = i
                },
                Ji = function(t, e, i) {
                    return t.style.setProperty(e, i)
                },
                Zi = function(t, e, i) {
                    return t._gsap[e] = i
                },
                Qi = function(t, e, i) {
                    return t._gsap.scaleX = t._gsap.scaleY = i
                },
                ts = function(t, e, i, s, r) {
                    var n = t._gsap;
                    n.scaleX = n.scaleY = i, n.renderTransform(r, n)
                },
                es = function(t, e, i, s, r) {
                    var n = t._gsap;
                    n[e] = i, n.renderTransform(r, n)
                },
                is = "transform",
                ss = is + "Origin",
                rs = function t(e, i) {
                    var s = this,
                        r = this.target,
                        n = r.style,
                        a = r._gsap;
                    if (e in Ri && n) {
                        if (this.tfm = this.tfm || {}, "transform" === e) return Wi.transform.split(",").forEach((function(e) {
                            return t.call(s, e, i)
                        }));
                        if (~(e = Wi[e] || e).indexOf(",") ? e.split(",").forEach((function(t) {
                                return s.tfm[t] = Cs(r, t)
                            })) : this.tfm[e] = a.x ? a[e] : Cs(r, e), e === ss && (this.tfm.zOrigin = a.zOrigin), this.props.indexOf(is) >= 0) return;
                        a.svg && (this.svgo = r.getAttribute("data-svg-origin"), this.props.push(ss, i, "")), e = is
                    }(n || i) && this.props.push(e, i, n[e])
                },
                ns = function(t) {
                    t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"))
                },
                as = function() {
                    var t, e, i = this.props,
                        s = this.target,
                        r = s.style,
                        n = s._gsap;
                    for (t = 0; t < i.length; t += 3) i[t + 1] ? s[i[t]] = i[t + 2] : i[t + 2] ? r[i[t]] = i[t + 2] : r.removeProperty("--" === i[t].substr(0, 2) ? i[t] : i[t].replace(Vi, "-$1").toLowerCase());
                    if (this.tfm) {
                        for (e in this.tfm) n[e] = this.tfm[e];
                        n.svg && (n.renderTransform(), s.setAttribute("data-svg-origin", this.svgo || "")), (t = Oi()) && t.isStart || r[is] || (ns(r), n.zOrigin && r[ss] && (r[ss] += " " + n.zOrigin + "px", n.zOrigin = 0, n.renderTransform()), n.uncache = 1)
                    }
                },
                os = function(t, e) {
                    var i = {
                        target: t,
                        props: [],
                        revert: as,
                        save: rs
                    };
                    return t._gsap || Fi.core.getCache(t), e && e.split(",").forEach((function(t) {
                        return i.save(t)
                    })), i
                },
                hs = function(t, e) {
                    var i = Ti.createElementNS ? Ti.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Ti.createElement(t);
                    return i && i.style ? i : Ti.createElement(t)
                },
                ls = function t(e, i, s) {
                    var r = getComputedStyle(e);
                    return r[i] || r.getPropertyValue(i.replace(Vi, "-$1").toLowerCase()) || r.getPropertyValue(i) || !s && t(e, cs(i) || i, 1) || ""
                },
                us = "O,Moz,ms,Ms,Webkit".split(","),
                cs = function(t, e, i) {
                    var s = (e || Pi).style,
                        r = 5;
                    if (t in s && !i) return t;
                    for (t = t.charAt(0).toUpperCase() + t.substr(1); r-- && !(us[r] + t in s););
                    return r < 0 ? null : (3 === r ? "ms" : r >= 0 ? us[r] : "") + t
                },
                ps = function() {
                    "undefined" != typeof window && window.document && (ki = window, Ti = ki.document, Ai = Ti.documentElement, Pi = hs("div") || {
                        style: {}
                    }, hs("div"), is = cs(is), ss = is + "Origin", Pi.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Li = !!cs("perspective"), Oi = Fi.core.reverting, Mi = 1)
                },
                fs = function t(e) {
                    var i, s = hs("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                        r = this.parentNode,
                        n = this.nextSibling,
                        a = this.style.cssText;
                    if (Ai.appendChild(s), s.appendChild(this), this.style.display = "block", e) try {
                        i = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t
                    } catch (t) {} else this._gsapBBox && (i = this._gsapBBox());
                    return r && (n ? r.insertBefore(this, n) : r.appendChild(this)), Ai.removeChild(s), this.style.cssText = a, i
                },
                ds = function(t, e) {
                    for (var i = e.length; i--;)
                        if (t.hasAttribute(e[i])) return t.getAttribute(e[i])
                },
                ms = function(t) {
                    var e;
                    try {
                        e = t.getBBox()
                    } catch (i) {
                        e = fs.call(t, !0)
                    }
                    return e && (e.width || e.height) || t.getBBox === fs || (e = fs.call(t, !0)), !e || e.width || e.x || e.y ? e : {
                        x: +ds(t, ["x", "cx", "x1"]) || 0,
                        y: +ds(t, ["y", "cy", "y1"]) || 0,
                        width: 0,
                        height: 0
                    }
                },
                gs = function(t) {
                    return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !ms(t))
                },
                vs = function(t, e) {
                    if (e) {
                        var i, s = t.style;
                        e in Ri && e !== ss && (e = is), s.removeProperty ? ("ms" !== (i = e.substr(0, 2)) && "webkit" !== e.substr(0, 6) || (e = "-" + e), s.removeProperty("--" === i ? e : e.replace(Vi, "-$1").toLowerCase())) : s.removeAttribute(e)
                    }
                },
                ys = function(t, e, i, s, r, n) {
                    var a = new di(t._pt, e, i, 0, 1, n ? $i : Gi);
                    return t._pt = a, a.b = s, a.e = r, t._props.push(i), a
                },
                Ds = {
                    deg: 1,
                    rad: 1,
                    turn: 1
                },
                _s = {
                    grid: 1,
                    flex: 1
                },
                bs = function t(e, i, s, r) {
                    var n, a, o, h, l = parseFloat(s) || 0,
                        u = (s + "").trim().substr((l + "").length) || "px",
                        c = Pi.style,
                        p = ji.test(i),
                        f = "svg" === e.tagName.toLowerCase(),
                        d = (f ? "client" : "offset") + (p ? "Width" : "Height"),
                        m = 100,
                        g = "px" === r,
                        v = "%" === r;
                    if (r === u || !l || Ds[r] || Ds[u]) return l;
                    if ("px" !== u && !g && (l = t(e, i, s, "px")), h = e.getCTM && gs(e), (v || "%" === u) && (Ri[i] || ~i.indexOf("adius"))) return n = h ? e.getBBox()[p ? "width" : "height"] : e[d], vt(v ? l / n * m : l / 100 * n);
                    if (c[p ? "width" : "height"] = m + (g ? u : r), a = ~i.indexOf("adius") || "em" === r && e.appendChild && !f ? e : e.parentNode, h && (a = (e.ownerSVGElement || {}).parentNode), a && a !== Ti && a.appendChild || (a = Ti.body), (o = a._gsap) && v && o.width && p && o.time === ke.time && !o.uncache) return vt(l / o.width * m);
                    if (!v || "height" !== i && "width" !== i)(v || "%" === u) && !_s[ls(a, "display")] && (c.position = ls(e, "position")), a === e && (c.position = "static"), a.appendChild(Pi), n = Pi[d], a.removeChild(Pi), c.position = "absolute";
                    else {
                        var y = e.style[i];
                        e.style[i] = m + r, n = e[d], y ? e.style[i] = y : vs(e, i)
                    }
                    return p && v && ((o = dt(a)).time = ke.time, o.width = a[d]), vt(g ? n * l / m : n && l ? m / n * l : 0)
                },
                Cs = function(t, e, i, s) {
                    var r;
                    return Mi || ps(), e in Wi && "transform" !== e && ~(e = Wi[e]).indexOf(",") && (e = e.split(",")[0]), Ri[e] && "transform" !== e ? (r = Is(t, s), r = "transformOrigin" !== e ? r[e] : r.svg ? r.origin : Os(ls(t, ss)) + " " + r.zOrigin + "px") : (!(r = t.style[e]) || "auto" === r || s || ~(r + "").indexOf("calc(")) && (r = Ss[e] && Ss[e](t, e, i) || ls(t, e) || mt(t, e) || ("opacity" === e ? 1 : 0)), i && !~(r + "").trim().indexOf(" ") ? bs(t, e, r, i) + i : r
                },
                ws = function(t, e, i, s) {
                    if (!i || "none" === i) {
                        var r = cs(e, t, 1),
                            n = r && ls(t, r, 1);
                        n && n !== i ? (e = r, i = n) : "borderColor" === e && (i = ls(t, "borderTopColor"))
                    }
                    var a, o, h, l, u, c, p, f, d, m, g, v = new di(this._pt, t.style, e, 0, 1, hi),
                        y = 0,
                        D = 0;
                    if (v.b = i, v.e = s, i += "", "auto" === (s += "") && (c = t.style[e], t.style[e] = s, s = ls(t, e) || s, c ? t.style[e] = c : vs(t, e)), Fe(a = [i, s]), s = a[1], h = (i = a[0]).match(H) || [], (s.match(H) || []).length) {
                        for (; o = H.exec(s);) p = o[0], d = s.substring(y, o.index), u ? u = (u + 1) % 5 : "rgba(" !== d.substr(-5) && "hsla(" !== d.substr(-5) || (u = 1), p !== (c = h[D++] || "") && (l = parseFloat(c) || 0, g = c.substr((l + "").length), "=" === p.charAt(1) && (p = Dt(l, p) + g), f = parseFloat(p), m = p.substr((f + "").length), y = H.lastIndex - m.length, m || (m = m || C.units[e] || g, y === s.length && (s += m, v.e += m)), g !== m && (l = bs(t, e, c, m) || 0), v._pt = {
                            _next: v._pt,
                            p: d || 1 === D ? d : ",",
                            s: l,
                            c: f - l,
                            m: u && u < 4 || "zIndex" === e ? Math.round : 0
                        });
                        v.c = y < s.length ? s.substring(y, s.length) : ""
                    } else v.r = "display" === e && "none" === s ? $i : Gi;
                    return U.test(s) && (v.e = 0), this._pt = v, v
                },
                Es = {
                    top: "0%",
                    bottom: "100%",
                    left: "0%",
                    right: "100%",
                    center: "50%"
                },
                xs = function(t, e) {
                    if (e.tween && e.tween._time === e.tween._dur) {
                        var i, s, r, n = e.t,
                            a = n.style,
                            o = e.u,
                            h = n._gsap;
                        if ("all" === o || !0 === o) a.cssText = "", s = 1;
                        else
                            for (r = (o = o.split(",")).length; --r > -1;) i = o[r], Ri[i] && (s = 1, i = "transformOrigin" === i ? ss : is), vs(n, i);
                        s && (vs(n, is), h && (h.svg && n.removeAttribute("transform"), Is(n, 1), h.uncache = 1, ns(a)))
                    }
                },
                Ss = {
                    clearProps: function(t, e, i, s, r) {
                        if ("isFromStart" !== r.data) {
                            var n = t._pt = new di(t._pt, e, i, 0, 0, xs);
                            return n.u = s, n.pr = -10, n.tween = r, t._props.push(i), 1
                        }
                    }
                },
                Fs = [1, 0, 0, 1, 0, 0],
                ks = {},
                Ts = function(t) {
                    return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
                },
                As = function(t) {
                    var e = ls(t, is);
                    return Ts(e) ? Fs : e.substr(7).match(W).map(vt)
                },
                Ms = function(t, e) {
                    var i, s, r, n, a = t._gsap || dt(t),
                        o = t.style,
                        h = As(t);
                    return a.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (h = [(r = t.transform.baseVal.consolidate().matrix).a, r.b, r.c, r.d, r.e, r.f]).join(",") ? Fs : h : (h !== Fs || t.offsetParent || t === Ai || a.svg || (r = o.display, o.display = "block", (i = t.parentNode) && t.offsetParent || (n = 1, s = t.nextElementSibling, Ai.appendChild(t)), h = As(t), r ? o.display = r : vs(t, "display"), n && (s ? i.insertBefore(t, s) : i ? i.appendChild(t) : Ai.removeChild(t))), e && h.length > 6 ? [h[0], h[1], h[4], h[5], h[12], h[13]] : h)
                },
                Ps = function(t, e, i, s, r, n) {
                    var a, o, h, l = t._gsap,
                        u = r || Ms(t, !0),
                        c = l.xOrigin || 0,
                        p = l.yOrigin || 0,
                        f = l.xOffset || 0,
                        d = l.yOffset || 0,
                        m = u[0],
                        g = u[1],
                        v = u[2],
                        y = u[3],
                        D = u[4],
                        _ = u[5],
                        b = e.split(" "),
                        C = parseFloat(b[0]) || 0,
                        w = parseFloat(b[1]) || 0;
                    i ? u !== Fs && (o = m * y - g * v) && (h = C * (-g / o) + w * (m / o) - (m * _ - g * D) / o, C = C * (y / o) + w * (-v / o) + (v * _ - y * D) / o, w = h) : (C = (a = ms(t)).x + (~b[0].indexOf("%") ? C / 100 * a.width : C), w = a.y + (~(b[1] || b[0]).indexOf("%") ? w / 100 * a.height : w)), s || !1 !== s && l.smooth ? (D = C - c, _ = w - p, l.xOffset = f + (D * m + _ * v) - D, l.yOffset = d + (D * g + _ * y) - _) : l.xOffset = l.yOffset = 0, l.xOrigin = C, l.yOrigin = w, l.smooth = !!s, l.origin = e, l.originIsAbsolute = !!i, t.style[ss] = "0px 0px", n && (ys(n, l, "xOrigin", c, C), ys(n, l, "yOrigin", p, w), ys(n, l, "xOffset", f, l.xOffset), ys(n, l, "yOffset", d, l.yOffset)), t.setAttribute("data-svg-origin", C + " " + w)
                },
                Is = function(t, e) {
                    var i = t._gsap || new je(t);
                    if ("x" in i && !e && !i.uncache) return i;
                    var s, r, n, a, o, h, l, u, c, p, f, d, m, g, v, y, D, _, b, w, E, x, S, F, k, T, A, M, P, I, O, L, R = t.style,
                        B = i.scaleX < 0,
                        N = "px",
                        z = "deg",
                        V = getComputedStyle(t),
                        j = ls(t, ss) || "0";
                    return s = r = n = h = l = u = c = p = f = 0, a = o = 1, i.svg = !(!t.getCTM || !gs(t)), V.translate && ("none" === V.translate && "none" === V.scale && "none" === V.rotate || (R[is] = ("none" !== V.translate ? "translate3d(" + (V.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== V.rotate ? "rotate(" + V.rotate + ") " : "") + ("none" !== V.scale ? "scale(" + V.scale.split(" ").join(",") + ") " : "") + ("none" !== V[is] ? V[is] : "")), R.scale = R.rotate = R.translate = "none"), g = Ms(t, i.svg), i.svg && (i.uncache ? (k = t.getBBox(), j = i.xOrigin - k.x + "px " + (i.yOrigin - k.y) + "px", F = "") : F = !e && t.getAttribute("data-svg-origin"), Ps(t, F || j, !!F || i.originIsAbsolute, !1 !== i.smooth, g)), d = i.xOrigin || 0, m = i.yOrigin || 0, g !== Fs && (_ = g[0], b = g[1], w = g[2], E = g[3], s = x = g[4], r = S = g[5], 6 === g.length ? (a = Math.sqrt(_ * _ + b * b), o = Math.sqrt(E * E + w * w), h = _ || b ? zi(b, _) * Bi : 0, (c = w || E ? zi(w, E) * Bi + h : 0) && (o *= Math.abs(Math.cos(c * Ni))), i.svg && (s -= d - (d * _ + m * w), r -= m - (d * b + m * E))) : (L = g[6], I = g[7], A = g[8], M = g[9], P = g[10], O = g[11], s = g[12], r = g[13], n = g[14], l = (v = zi(L, P)) * Bi, v && (F = x * (y = Math.cos(-v)) + A * (D = Math.sin(-v)), k = S * y + M * D, T = L * y + P * D, A = x * -D + A * y, M = S * -D + M * y, P = L * -D + P * y, O = I * -D + O * y, x = F, S = k, L = T), u = (v = zi(-w, P)) * Bi, v && (y = Math.cos(-v), O = E * (D = Math.sin(-v)) + O * y, _ = F = _ * y - A * D, b = k = b * y - M * D, w = T = w * y - P * D), h = (v = zi(b, _)) * Bi, v && (F = _ * (y = Math.cos(v)) + b * (D = Math.sin(v)), k = x * y + S * D, b = b * y - _ * D, S = S * y - x * D, _ = F, x = k), l && Math.abs(l) + Math.abs(h) > 359.9 && (l = h = 0, u = 180 - u), a = vt(Math.sqrt(_ * _ + b * b + w * w)), o = vt(Math.sqrt(S * S + L * L)), v = zi(x, S), c = Math.abs(v) > 2e-4 ? v * Bi : 0, f = O ? 1 / (O < 0 ? -O : O) : 0), i.svg && (F = t.getAttribute("transform"), i.forceCSS = t.setAttribute("transform", "") || !Ts(ls(t, is)), F && t.setAttribute("transform", F))), Math.abs(c) > 90 && Math.abs(c) < 270 && (B ? (a *= -1, c += h <= 0 ? 180 : -180, h += h <= 0 ? 180 : -180) : (o *= -1, c += c <= 0 ? 180 : -180)), e = e || i.uncache, i.x = s - ((i.xPercent = s && (!e && i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-s) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + N, i.y = r - ((i.yPercent = r && (!e && i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-r) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + N, i.z = n + N, i.scaleX = vt(a), i.scaleY = vt(o), i.rotation = vt(h) + z, i.rotationX = vt(l) + z, i.rotationY = vt(u) + z, i.skewX = c + z, i.skewY = p + z, i.transformPerspective = f + N, (i.zOrigin = parseFloat(j.split(" ")[2]) || !e && i.zOrigin || 0) && (R[ss] = Os(j)), i.xOffset = i.yOffset = 0, i.force3D = C.force3D, i.renderTransform = i.svg ? js : Li ? Vs : Rs, i.uncache = 0, i
                },
                Os = function(t) {
                    return (t = t.split(" "))[0] + " " + t[1]
                },
                Ls = function(t, e, i) {
                    var s = te(e);
                    return vt(parseFloat(e) + parseFloat(bs(t, "x", i + "px", s))) + s
                },
                Rs = function(t, e) {
                    e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Vs(t, e)
                },
                Bs = "0deg",
                Ns = "0px",
                zs = ") ",
                Vs = function(t, e) {
                    var i = e || this,
                        s = i.xPercent,
                        r = i.yPercent,
                        n = i.x,
                        a = i.y,
                        o = i.z,
                        h = i.rotation,
                        l = i.rotationY,
                        u = i.rotationX,
                        c = i.skewX,
                        p = i.skewY,
                        f = i.scaleX,
                        d = i.scaleY,
                        m = i.transformPerspective,
                        g = i.force3D,
                        v = i.target,
                        y = i.zOrigin,
                        D = "",
                        _ = "auto" === g && t && 1 !== t || !0 === g;
                    if (y && (u !== Bs || l !== Bs)) {
                        var b, C = parseFloat(l) * Ni,
                            w = Math.sin(C),
                            E = Math.cos(C);
                        C = parseFloat(u) * Ni, b = Math.cos(C), n = Ls(v, n, w * b * -y), a = Ls(v, a, -Math.sin(C) * -y), o = Ls(v, o, E * b * -y + y)
                    }
                    m !== Ns && (D += "perspective(" + m + zs), (s || r) && (D += "translate(" + s + "%, " + r + "%) "), (_ || n !== Ns || a !== Ns || o !== Ns) && (D += o !== Ns || _ ? "translate3d(" + n + ", " + a + ", " + o + ") " : "translate(" + n + ", " + a + zs), h !== Bs && (D += "rotate(" + h + zs), l !== Bs && (D += "rotateY(" + l + zs), u !== Bs && (D += "rotateX(" + u + zs), c === Bs && p === Bs || (D += "skew(" + c + ", " + p + zs), 1 === f && 1 === d || (D += "scale(" + f + ", " + d + zs), v.style[is] = D || "translate(0, 0)"
                },
                js = function(t, e) {
                    var i, s, r, n, a, o = e || this,
                        h = o.xPercent,
                        l = o.yPercent,
                        u = o.x,
                        c = o.y,
                        p = o.rotation,
                        f = o.skewX,
                        d = o.skewY,
                        m = o.scaleX,
                        g = o.scaleY,
                        v = o.target,
                        y = o.xOrigin,
                        D = o.yOrigin,
                        _ = o.xOffset,
                        b = o.yOffset,
                        C = o.forceCSS,
                        w = parseFloat(u),
                        E = parseFloat(c);
                    p = parseFloat(p), f = parseFloat(f), (d = parseFloat(d)) && (f += d = parseFloat(d), p += d), p || f ? (p *= Ni, f *= Ni, i = Math.cos(p) * m, s = Math.sin(p) * m, r = Math.sin(p - f) * -g, n = Math.cos(p - f) * g, f && (d *= Ni, a = Math.tan(f - d), r *= a = Math.sqrt(1 + a * a), n *= a, d && (a = Math.tan(d), i *= a = Math.sqrt(1 + a * a), s *= a)), i = vt(i), s = vt(s), r = vt(r), n = vt(n)) : (i = m, n = g, s = r = 0), (w && !~(u + "").indexOf("px") || E && !~(c + "").indexOf("px")) && (w = bs(v, "x", u, "px"), E = bs(v, "y", c, "px")), (y || D || _ || b) && (w = vt(w + y - (y * i + D * r) + _), E = vt(E + D - (y * s + D * n) + b)), (h || l) && (a = v.getBBox(), w = vt(w + h / 100 * a.width), E = vt(E + l / 100 * a.height)), a = "matrix(" + i + "," + s + "," + r + "," + n + "," + w + "," + E + ")", v.setAttribute("transform", a), C && (v.style[is] = a)
                },
                qs = function(t, e, i, s, r) {
                    var n, a, o = 360,
                        h = P(r),
                        l = parseFloat(r) * (h && ~r.indexOf("rad") ? Bi : 1) - s,
                        u = s + l + "deg";
                    return h && ("short" === (n = r.split("_")[1]) && (l %= o) !== l % 180 && (l += l < 0 ? o : -360), "cw" === n && l < 0 ? l = (l + 36e9) % o - ~~(l / o) * o : "ccw" === n && l > 0 && (l = (l - 36e9) % o - ~~(l / o) * o)), t._pt = a = new di(t._pt, e, i, s, l, Yi), a.e = u, a.u = "deg", t._props.push(i), a
                },
                Ws = function(t, e) {
                    for (var i in e) t[i] = e[i];
                    return t
                },
                Hs = function(t, e, i) {
                    var s, r, n, a, o, h, l, u = Ws({}, i._gsap),
                        c = i.style;
                    for (r in u.svg ? (n = i.getAttribute("transform"), i.setAttribute("transform", ""), c[is] = e, s = Is(i, 1), vs(i, is), i.setAttribute("transform", n)) : (n = getComputedStyle(i)[is], c[is] = e, s = Is(i, 1), c[is] = n), Ri)(n = u[r]) !== (a = s[r]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) < 0 && (o = te(n) !== (l = te(a)) ? bs(i, r, n, l) : parseFloat(n), h = parseFloat(a), t._pt = new di(t._pt, s, r, o, h - o, Hi), t._pt.u = l || 0, t._props.push(r));
                    Ws(s, u)
                };
            gt("padding,margin,Width,Radius", (function(t, e) {
                var i = "Top",
                    s = "Right",
                    r = "Bottom",
                    n = "Left",
                    a = (e < 3 ? [i, s, r, n] : [i + n, i + s, r + s, r + n]).map((function(i) {
                        return e < 2 ? t + i : "border" + i + t
                    }));
                Ss[e > 1 ? "border" + t : t] = function(t, e, i, s, r) {
                    var n, o;
                    if (arguments.length < 4) return n = a.map((function(e) {
                        return Cs(t, e, i)
                    })), 5 === (o = n.join(" ")).split(n[0]).length ? n[0] : o;
                    n = (s + "").split(" "), o = {}, a.forEach((function(t, e) {
                        return o[t] = n[e] = n[e] || n[(e - 1) / 2 | 0]
                    })), t.init(e, o, r)
                }
            }));
            var Ys, Us, Xs, Gs = {
                name: "css",
                register: ps,
                targetTest: function(t) {
                    return t.style && t.nodeType
                },
                init: function(t, e, i, s, r) {
                    var n, a, o, h, l, u, c, p, f, d, m, g, v, y, D, _, b, w, E, x, S = this._props,
                        F = t.style,
                        k = i.vars.startAt;
                    for (c in Mi || ps(), this.styles = this.styles || os(t), _ = this.styles.props, this.tween = i, e)
                        if ("autoRound" !== c && (a = e[c], !ht[c] || !Ge(c, e, i, s, t, r)))
                            if (l = typeof a, u = Ss[c], "function" === l && (l = typeof(a = a.call(i, s, t, r))), "string" === l && ~a.indexOf("random(") && (a = pe(a)), u) u(this, t, c, a, i) && (D = 1);
                            else if ("--" === c.substr(0, 2)) n = (getComputedStyle(t).getPropertyValue(c) + "").trim(), a += "", xe.lastIndex = 0, xe.test(n) || (p = te(n), f = te(a)), f ? p !== f && (n = bs(t, c, n, f) + f) : p && (a += p), this.add(F, "setProperty", n, a, s, r, 0, 0, c), S.push(c), _.push(c, 0, F[c]);
                    else if ("undefined" !== l) {
                        if (k && c in k ? (n = "function" == typeof k[c] ? k[c].call(i, s, t, r) : k[c], P(n) && ~n.indexOf("random(") && (n = pe(n)), te(n + "") || "auto" === n || (n += C.units[c] || te(Cs(t, c)) || ""), "=" === (n + "").charAt(1) && (n = Cs(t, c))) : n = Cs(t, c), h = parseFloat(n), (d = "string" === l && "=" === a.charAt(1) && a.substr(0, 2)) && (a = a.substr(2)), o = parseFloat(a), c in Wi && ("autoAlpha" === c && (1 === h && "hidden" === Cs(t, "visibility") && o && (h = 0), _.push("visibility", 0, F.visibility), ys(this, F, "visibility", h ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== c && "transform" !== c && ~(c = Wi[c]).indexOf(",") && (c = c.split(",")[0])), m = c in Ri)
                            if (this.styles.save(c), g || ((v = t._gsap).renderTransform && !e.parseTransform || Is(t, e.parseTransform), y = !1 !== e.smoothOrigin && v.smooth, (g = this._pt = new di(this._pt, F, is, 0, 1, v.renderTransform, v, 0, -1)).dep = 1), "scale" === c) this._pt = new di(this._pt, v, "scaleY", v.scaleY, (d ? Dt(v.scaleY, d + o) : o) - v.scaleY || 0, Hi), this._pt.u = 0, S.push("scaleY", c), c += "X";
                            else {
                                if ("transformOrigin" === c) {
                                    _.push(ss, 0, F[ss]), w = void 0, E = void 0, x = void 0, w = (b = a).split(" "), E = w[0], x = w[1] || "50%", "top" !== E && "bottom" !== E && "left" !== x && "right" !== x || (b = E, E = x, x = b), w[0] = Es[E] || E, w[1] = Es[x] || x, a = w.join(" "), v.svg ? Ps(t, a, 0, y, 0, this) : ((f = parseFloat(a.split(" ")[2]) || 0) !== v.zOrigin && ys(this, v, "zOrigin", v.zOrigin, f), ys(this, F, c, Os(n), Os(a)));
                                    continue
                                }
                                if ("svgOrigin" === c) {
                                    Ps(t, a, 1, y, 0, this);
                                    continue
                                }
                                if (c in ks) {
                                    qs(this, v, c, h, d ? Dt(h, d + a) : a);
                                    continue
                                }
                                if ("smoothOrigin" === c) {
                                    ys(this, v, "smooth", v.smooth, a);
                                    continue
                                }
                                if ("force3D" === c) {
                                    v[c] = a;
                                    continue
                                }
                                if ("transform" === c) {
                                    Hs(this, a, t);
                                    continue
                                }
                            }
                        else c in F || (c = cs(c) || c);
                        if (m || (o || 0 === o) && (h || 0 === h) && !qi.test(a) && c in F) o || (o = 0), (p = (n + "").substr((h + "").length)) !== (f = te(a) || (c in C.units ? C.units[c] : p)) && (h = bs(t, c, n, f)), this._pt = new di(this._pt, m ? v : F, c, h, (d ? Dt(h, d + o) : o) - h, m || "px" !== f && "zIndex" !== c || !1 === e.autoRound ? Hi : Xi), this._pt.u = f || 0, p !== f && "%" !== f && (this._pt.b = n, this._pt.r = Ui);
                        else if (c in F) ws.call(this, t, c, n, d ? d + a : a);
                        else if (c in t) this.add(t, c, n || t[c], d ? d + a : a, s, r);
                        else if ("parseTransform" !== c) {
                            Z(c, a);
                            continue
                        }
                        m || (c in F ? _.push(c, 0, F[c]) : _.push(c, 1, n || t[c])), S.push(c)
                    }
                    D && fi(this)
                },
                render: function(t, e) {
                    if (e.tween._time || !Oi())
                        for (var i = e._pt; i;) i.r(t, i.d), i = i._next;
                    else e.styles.revert()
                },
                get: Cs,
                aliases: Wi,
                getSetter: function(t, e, i) {
                    var s = Wi[e];
                    return s && s.indexOf(",") < 0 && (e = s), e in Ri && e !== ss && (t._gsap.x || Cs(t, "x")) ? i && Ii === i ? "scale" === e ? Qi : Zi : (Ii = i || {}) && ("scale" === e ? ts : es) : t.style && !L(t.style[e]) ? Ki : ~e.indexOf("-") ? Ji : ni(t, e)
                },
                core: {
                    _removeProperty: vs,
                    _getMatrix: Ms
                }
            };
            Fi.utils.checkPrefix = cs, Fi.core.getStyleSaver = os, Xs = gt((Ys = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (Us = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function(t) {
                Ri[t] = 1
            })), gt(Us, (function(t) {
                C.units[t] = "deg", ks[t] = 1
            })), Wi[Xs[13]] = Ys + "," + Us, gt("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function(t) {
                var e = t.split(":");
                Wi[e[1]] = Xs[e[0]]
            })), gt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function(t) {
                C.units[t] = "px"
            })), Fi.registerPlugin(Gs);
            var $s = Fi.registerPlugin(Gs) || Fi;
            $s.core.Tween
        },
        422: function(t, e, i) {
            "use strict";
            i.d(e, {
                K6: function() {
                    return a
                },
                q4: function() {
                    return n
                },
                u6: function() {
                    return r
                }
            });
            var s = /(?:^\s+|\s+$)/g,
                r = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;

            function n(t) {
                var e = t.nodeType,
                    i = "";
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) i += n(t)
                } else if (3 === e || 4 === e) return t.nodeValue;
                return i
            }

            function a(t, e, i, n) {
                if (t += "", i && (t = t.trim ? t.trim() : t.replace(s, "")), e && "" !== e) return t.replace(/>/g, "&gt;").replace(/</g, "&lt;").split(e);
                for (var a, o, h = [], l = t.length, u = 0; u < l; u++)((o = t.charAt(u)).charCodeAt(0) >= 55296 && o.charCodeAt(0) <= 56319 || t.charCodeAt(u + 1) >= 65024 && t.charCodeAt(u + 1) <= 65039) && (a = ((t.substr(u, 12).split(r) || [])[1] || "").length || 2, o = t.substr(u, a), h.emoji = 1, u += a - 1), h.push(">" === o ? "&gt;" : "<" === o ? "&lt;" : !n || " " !== o || " " !== t.charAt(u - 1) && " " !== t.charAt(u + 1) ? o : "&nbsp;");
                return h
            }
        },
        816: function(t, e, i) {
            "undefined" != typeof navigator && (t.exports = function() {
                "use strict";
                var t = "http://www.w3.org/2000/svg",
                    s = "",
                    r = !1,
                    n = -999999,
                    a = function(t) {
                        r = !!t
                    },
                    o = function() {
                        return r
                    },
                    h = function(t) {
                        s = t
                    },
                    l = function() {
                        return s
                    };

                function u(t) {
                    return document.createElement(t)
                }

                function c(t, e) {
                    var i, s, r = t.length;
                    for (i = 0; i < r; i += 1)
                        for (var n in s = t[i].prototype) Object.prototype.hasOwnProperty.call(s, n) && (e.prototype[n] = s[n])
                }

                function p(t) {
                    function e() {}
                    return e.prototype = t, e
                }
                var f = function() {
                        function t(t) {
                            this.audios = [], this.audioFactory = t, this._volume = 1, this._isMuted = !1
                        }
                        return t.prototype = {
                                addAudio: function(t) {
                                    this.audios.push(t)
                                },
                                pause: function() {
                                    var t, e = this.audios.length;
                                    for (t = 0; t < e; t += 1) this.audios[t].pause()
                                },
                                resume: function() {
                                    var t, e = this.audios.length;
                                    for (t = 0; t < e; t += 1) this.audios[t].resume()
                                },
                                setRate: function(t) {
                                    var e, i = this.audios.length;
                                    for (e = 0; e < i; e += 1) this.audios[e].setRate(t)
                                },
                                createAudio: function(t) {
                                    return this.audioFactory ? this.audioFactory(t) : window.Howl ? new window.Howl({
                                        src: [t]
                                    }) : {
                                        isPlaying: !1,
                                        play: function() {
                                            this.isPlaying = !0
                                        },
                                        seek: function() {
                                            this.isPlaying = !1
                                        },
                                        playing: function() {},
                                        rate: function() {},
                                        setVolume: function() {}
                                    }
                                },
                                setAudioFactory: function(t) {
                                    this.audioFactory = t
                                },
                                setVolume: function(t) {
                                    this._volume = t, this._updateVolume()
                                },
                                mute: function() {
                                    this._isMuted = !0, this._updateVolume()
                                },
                                unmute: function() {
                                    this._isMuted = !1, this._updateVolume()
                                },
                                getVolume: function() {
                                    return this._volume
                                },
                                _updateVolume: function() {
                                    var t, e = this.audios.length;
                                    for (t = 0; t < e; t += 1) this.audios[t].volume(this._volume * (this._isMuted ? 0 : 1))
                                }
                            },
                            function() {
                                return new t
                            }
                    }(),
                    d = function() {
                        function t(t, e) {
                            var i, s = 0,
                                r = [];
                            switch (t) {
                                case "int16":
                                case "uint8c":
                                    i = 1;
                                    break;
                                default:
                                    i = 1.1
                            }
                            for (s = 0; s < e; s += 1) r.push(i);
                            return r
                        }

                        function e(e, i) {
                            return "float32" === e ? new Float32Array(i) : "int16" === e ? new Int16Array(i) : "uint8c" === e ? new Uint8ClampedArray(i) : t(e, i)
                        }
                        return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? e : t
                    }();

                function m(t) {
                    return Array.apply(null, {
                        length: t
                    })
                }

                function g(t) {
                    return g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }, g(t)
                }
                var v = !0,
                    y = null,
                    D = null,
                    _ = "",
                    b = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
                    C = Math.pow,
                    w = Math.sqrt,
                    E = Math.floor,
                    x = (Math.max, Math.min),
                    S = {};
                (function() {
                    var t, e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
                        i = e.length;
                    for (t = 0; t < i; t += 1) S[e[t]] = Math[e[t]]
                })(), S.random = Math.random, S.abs = function(t) {
                    if ("object" === g(t) && t.length) {
                        var e, i = m(t.length),
                            s = t.length;
                        for (e = 0; e < s; e += 1) i[e] = Math.abs(t[e]);
                        return i
                    }
                    return Math.abs(t)
                };
                var F = 150,
                    k = Math.PI / 180,
                    T = .5519;

                function A(t) {}

                function M(t, e, i, s) {
                    this.type = t, this.currentTime = e, this.totalTime = i, this.direction = s < 0 ? -1 : 1
                }

                function P(t, e) {
                    this.type = t, this.direction = e < 0 ? -1 : 1
                }

                function I(t, e, i, s) {
                    this.type = t, this.currentLoop = i, this.totalLoops = e, this.direction = s < 0 ? -1 : 1
                }

                function O(t, e, i) {
                    this.type = t, this.firstFrame = e, this.totalFrames = i
                }

                function L(t, e) {
                    this.type = t, this.target = e
                }

                function R(t, e) {
                    this.type = "renderFrameError", this.nativeError = t, this.currentTime = e
                }

                function B(t) {
                    this.type = "configError", this.nativeError = t
                }
                var N, z = (N = 0, function() {
                    return _ + "__lottie_element_" + (N += 1)
                });

                function V(t, e, i) {
                    var s, r, n, a, o, h, l, u;
                    switch (h = i * (1 - e), l = i * (1 - (o = 6 * t - (a = Math.floor(6 * t))) * e), u = i * (1 - (1 - o) * e), a % 6) {
                        case 0:
                            s = i, r = u, n = h;
                            break;
                        case 1:
                            s = l, r = i, n = h;
                            break;
                        case 2:
                            s = h, r = i, n = u;
                            break;
                        case 3:
                            s = h, r = l, n = i;
                            break;
                        case 4:
                            s = u, r = h, n = i;
                            break;
                        case 5:
                            s = i, r = h, n = l
                    }
                    return [s, r, n]
                }

                function j(t, e, i) {
                    var s, r = Math.max(t, e, i),
                        n = Math.min(t, e, i),
                        a = r - n,
                        o = 0 === r ? 0 : a / r,
                        h = r / 255;
                    switch (r) {
                        case n:
                            s = 0;
                            break;
                        case t:
                            s = e - i + a * (e < i ? 6 : 0), s /= 6 * a;
                            break;
                        case e:
                            s = i - t + 2 * a, s /= 6 * a;
                            break;
                        case i:
                            s = t - e + 4 * a, s /= 6 * a
                    }
                    return [s, o, h]
                }

                function q(t, e) {
                    var i = j(255 * t[0], 255 * t[1], 255 * t[2]);
                    return i[1] += e, i[1] > 1 ? i[1] = 1 : i[1] <= 0 && (i[1] = 0), V(i[0], i[1], i[2])
                }

                function W(t, e) {
                    var i = j(255 * t[0], 255 * t[1], 255 * t[2]);
                    return i[2] += e, i[2] > 1 ? i[2] = 1 : i[2] < 0 && (i[2] = 0), V(i[0], i[1], i[2])
                }

                function H(t, e) {
                    var i = j(255 * t[0], 255 * t[1], 255 * t[2]);
                    return i[0] += e / 360, i[0] > 1 ? i[0] -= 1 : i[0] < 0 && (i[0] += 1), V(i[0], i[1], i[2])
                }! function() {
                    var t, e, i = [];
                    for (t = 0; t < 256; t += 1) e = t.toString(16), i[t] = 1 === e.length ? "0" + e : e
                }();
                var Y = function(t) {
                        v = !!t
                    },
                    U = function() {
                        return v
                    },
                    X = function(t) {
                        y = t
                    },
                    G = function() {
                        return y
                    },
                    $ = function() {
                        return D
                    },
                    K = function(t) {
                        F = t
                    },
                    J = function() {
                        return F
                    },
                    Z = function(t) {
                        _ = t
                    };

                function Q(e) {
                    return document.createElementNS(t, e)
                }

                function tt(t) {
                    return tt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }, tt(t)
                }
                var et = function() {
                        var t, e, i = 1,
                            s = [],
                            r = {
                                onmessage: function() {},
                                postMessage: function(e) {
                                    t({
                                        data: e
                                    })
                                }
                            },
                            n = {
                                postMessage: function(t) {
                                    r.onmessage({
                                        data: t
                                    })
                                }
                            };

                        function a(e) {
                            if (window.Worker && window.Blob && o()) {
                                var i = new Blob(["var _workerSelf = self; self.onmessage = ", e.toString()], {
                                        type: "text/javascript"
                                    }),
                                    s = URL.createObjectURL(i);
                                return new Worker(s)
                            }
                            return t = e, r
                        }

                        function h() {
                            e || (e = a((function(t) {
                                function e() {
                                    function t(e, i) {
                                        var a, o, h, l, u, c, p = e.length;
                                        for (o = 0; o < p; o += 1)
                                            if ("ks" in (a = e[o]) && !a.completed) {
                                                if (a.completed = !0, a.hasMask) {
                                                    var f = a.masksProperties;
                                                    for (l = f.length, h = 0; h < l; h += 1)
                                                        if (f[h].pt.k.i) n(f[h].pt.k);
                                                        else
                                                            for (c = f[h].pt.k.length, u = 0; u < c; u += 1) f[h].pt.k[u].s && n(f[h].pt.k[u].s[0]), f[h].pt.k[u].e && n(f[h].pt.k[u].e[0])
                                                }
                                                0 === a.ty ? (a.layers = s(a.refId, i), t(a.layers, i)) : 4 === a.ty ? r(a.shapes) : 5 === a.ty && d(a)
                                            }
                                    }

                                    function e(e, i) {
                                        if (e) {
                                            var r = 0,
                                                n = e.length;
                                            for (r = 0; r < n; r += 1) 1 === e[r].t && (e[r].data.layers = s(e[r].data.refId, i), t(e[r].data.layers, i))
                                        }
                                    }

                                    function i(t, e) {
                                        for (var i = 0, s = e.length; i < s;) {
                                            if (e[i].id === t) return e[i];
                                            i += 1
                                        }
                                        return null
                                    }

                                    function s(t, e) {
                                        var s = i(t, e);
                                        return s ? s.layers.__used ? JSON.parse(JSON.stringify(s.layers)) : (s.layers.__used = !0, s.layers) : null
                                    }

                                    function r(t) {
                                        var e, i, s;
                                        for (e = t.length - 1; e >= 0; e -= 1)
                                            if ("sh" === t[e].ty)
                                                if (t[e].ks.k.i) n(t[e].ks.k);
                                                else
                                                    for (s = t[e].ks.k.length, i = 0; i < s; i += 1) t[e].ks.k[i].s && n(t[e].ks.k[i].s[0]), t[e].ks.k[i].e && n(t[e].ks.k[i].e[0]);
                                        else "gr" === t[e].ty && r(t[e].it)
                                    }

                                    function n(t) {
                                        var e, i = t.i.length;
                                        for (e = 0; e < i; e += 1) t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], t.o[e][1] += t.v[e][1]
                                    }

                                    function a(t, e) {
                                        var i = e ? e.split(".") : [100, 100, 100];
                                        return t[0] > i[0] || !(i[0] > t[0]) && (t[1] > i[1] || !(i[1] > t[1]) && (t[2] > i[2] || !(i[2] > t[2]) && null))
                                    }
                                    var o, h = function() {
                                            var t = [4, 4, 14];

                                            function e(t) {
                                                var e = t.t.d;
                                                t.t.d = {
                                                    k: [{
                                                        s: e,
                                                        t: 0
                                                    }]
                                                }
                                            }

                                            function i(t) {
                                                var i, s = t.length;
                                                for (i = 0; i < s; i += 1) 5 === t[i].ty && e(t[i])
                                            }
                                            return function(e) {
                                                if (a(t, e.v) && (i(e.layers), e.assets)) {
                                                    var s, r = e.assets.length;
                                                    for (s = 0; s < r; s += 1) e.assets[s].layers && i(e.assets[s].layers)
                                                }
                                            }
                                        }(),
                                        l = (o = [4, 7, 99], function(t) {
                                            if (t.chars && !a(o, t.v)) {
                                                var e, i = t.chars.length;
                                                for (e = 0; e < i; e += 1) {
                                                    var s = t.chars[e];
                                                    s.data && s.data.shapes && (r(s.data.shapes), s.data.ip = 0, s.data.op = 99999, s.data.st = 0, s.data.sr = 1, s.data.ks = {
                                                        p: {
                                                            k: [0, 0],
                                                            a: 0
                                                        },
                                                        s: {
                                                            k: [100, 100],
                                                            a: 0
                                                        },
                                                        a: {
                                                            k: [0, 0],
                                                            a: 0
                                                        },
                                                        r: {
                                                            k: 0,
                                                            a: 0
                                                        },
                                                        o: {
                                                            k: 100,
                                                            a: 0
                                                        }
                                                    }, t.chars[e].t || (s.data.shapes.push({
                                                        ty: "no"
                                                    }), s.data.shapes[0].it.push({
                                                        p: {
                                                            k: [0, 0],
                                                            a: 0
                                                        },
                                                        s: {
                                                            k: [100, 100],
                                                            a: 0
                                                        },
                                                        a: {
                                                            k: [0, 0],
                                                            a: 0
                                                        },
                                                        r: {
                                                            k: 0,
                                                            a: 0
                                                        },
                                                        o: {
                                                            k: 100,
                                                            a: 0
                                                        },
                                                        sk: {
                                                            k: 0,
                                                            a: 0
                                                        },
                                                        sa: {
                                                            k: 0,
                                                            a: 0
                                                        },
                                                        ty: "tr"
                                                    })))
                                                }
                                            }
                                        }),
                                        u = function() {
                                            var t = [5, 7, 15];

                                            function e(t) {
                                                var e = t.t.p;
                                                "number" == typeof e.a && (e.a = {
                                                    a: 0,
                                                    k: e.a
                                                }), "number" == typeof e.p && (e.p = {
                                                    a: 0,
                                                    k: e.p
                                                }), "number" == typeof e.r && (e.r = {
                                                    a: 0,
                                                    k: e.r
                                                })
                                            }

                                            function i(t) {
                                                var i, s = t.length;
                                                for (i = 0; i < s; i += 1) 5 === t[i].ty && e(t[i])
                                            }
                                            return function(e) {
                                                if (a(t, e.v) && (i(e.layers), e.assets)) {
                                                    var s, r = e.assets.length;
                                                    for (s = 0; s < r; s += 1) e.assets[s].layers && i(e.assets[s].layers)
                                                }
                                            }
                                        }(),
                                        c = function() {
                                            var t = [4, 1, 9];

                                            function e(t) {
                                                var i, s, r, n = t.length;
                                                for (i = 0; i < n; i += 1)
                                                    if ("gr" === t[i].ty) e(t[i].it);
                                                    else if ("fl" === t[i].ty || "st" === t[i].ty)
                                                    if (t[i].c.k && t[i].c.k[0].i)
                                                        for (r = t[i].c.k.length, s = 0; s < r; s += 1) t[i].c.k[s].s && (t[i].c.k[s].s[0] /= 255, t[i].c.k[s].s[1] /= 255, t[i].c.k[s].s[2] /= 255, t[i].c.k[s].s[3] /= 255), t[i].c.k[s].e && (t[i].c.k[s].e[0] /= 255, t[i].c.k[s].e[1] /= 255, t[i].c.k[s].e[2] /= 255, t[i].c.k[s].e[3] /= 255);
                                                    else t[i].c.k[0] /= 255, t[i].c.k[1] /= 255, t[i].c.k[2] /= 255, t[i].c.k[3] /= 255
                                            }

                                            function i(t) {
                                                var i, s = t.length;
                                                for (i = 0; i < s; i += 1) 4 === t[i].ty && e(t[i].shapes)
                                            }
                                            return function(e) {
                                                if (a(t, e.v) && (i(e.layers), e.assets)) {
                                                    var s, r = e.assets.length;
                                                    for (s = 0; s < r; s += 1) e.assets[s].layers && i(e.assets[s].layers)
                                                }
                                            }
                                        }(),
                                        p = function() {
                                            var t = [4, 4, 18];

                                            function e(t) {
                                                var i, s, r;
                                                for (i = t.length - 1; i >= 0; i -= 1)
                                                    if ("sh" === t[i].ty)
                                                        if (t[i].ks.k.i) t[i].ks.k.c = t[i].closed;
                                                        else
                                                            for (r = t[i].ks.k.length, s = 0; s < r; s += 1) t[i].ks.k[s].s && (t[i].ks.k[s].s[0].c = t[i].closed), t[i].ks.k[s].e && (t[i].ks.k[s].e[0].c = t[i].closed);
                                                else "gr" === t[i].ty && e(t[i].it)
                                            }

                                            function i(t) {
                                                var i, s, r, n, a, o, h = t.length;
                                                for (s = 0; s < h; s += 1) {
                                                    if ((i = t[s]).hasMask) {
                                                        var l = i.masksProperties;
                                                        for (n = l.length, r = 0; r < n; r += 1)
                                                            if (l[r].pt.k.i) l[r].pt.k.c = l[r].cl;
                                                            else
                                                                for (o = l[r].pt.k.length, a = 0; a < o; a += 1) l[r].pt.k[a].s && (l[r].pt.k[a].s[0].c = l[r].cl), l[r].pt.k[a].e && (l[r].pt.k[a].e[0].c = l[r].cl)
                                                    }
                                                    4 === i.ty && e(i.shapes)
                                                }
                                            }
                                            return function(e) {
                                                if (a(t, e.v) && (i(e.layers), e.assets)) {
                                                    var s, r = e.assets.length;
                                                    for (s = 0; s < r; s += 1) e.assets[s].layers && i(e.assets[s].layers)
                                                }
                                            }
                                        }();

                                    function f(i) {
                                        i.__complete || (c(i), h(i), l(i), u(i), p(i), t(i.layers, i.assets), e(i.chars, i.assets), i.__complete = !0)
                                    }

                                    function d(t) {
                                        0 === t.t.a.length && t.t.p
                                    }
                                    var m = {};
                                    return m.completeData = f, m.checkColors = c, m.checkChars = l, m.checkPathProperties = u, m.checkShapes = p, m.completeLayers = t, m
                                }
                                if (n.dataManager || (n.dataManager = e()), n.assetLoader || (n.assetLoader = function() {
                                        function t(t) {
                                            var e = t.getResponseHeader("content-type");
                                            return e && "json" === t.responseType && -1 !== e.indexOf("json") || t.response && "object" === tt(t.response) ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : null
                                        }

                                        function e(e, i, s, r) {
                                            var n, a = new XMLHttpRequest;
                                            try {
                                                a.responseType = "json"
                                            } catch (t) {}
                                            a.onreadystatechange = function() {
                                                if (4 === a.readyState)
                                                    if (200 === a.status) n = t(a), s(n);
                                                    else try {
                                                        n = t(a), s(n)
                                                    } catch (t) {
                                                        r && r(t)
                                                    }
                                            };
                                            try {
                                                a.open(["G", "E", "T"].join(""), e, !0)
                                            } catch (t) {
                                                a.open(["G", "E", "T"].join(""), i + "/" + e, !0)
                                            }
                                            a.send()
                                        }
                                        return {
                                            load: e
                                        }
                                    }()), "loadAnimation" === t.data.type) n.assetLoader.load(t.data.path, t.data.fullPath, (function(e) {
                                    n.dataManager.completeData(e), n.postMessage({
                                        id: t.data.id,
                                        payload: e,
                                        status: "success"
                                    })
                                }), (function() {
                                    n.postMessage({
                                        id: t.data.id,
                                        status: "error"
                                    })
                                }));
                                else if ("complete" === t.data.type) {
                                    var i = t.data.animation;
                                    n.dataManager.completeData(i), n.postMessage({
                                        id: t.data.id,
                                        payload: i,
                                        status: "success"
                                    })
                                } else "loadData" === t.data.type && n.assetLoader.load(t.data.path, t.data.fullPath, (function(e) {
                                    n.postMessage({
                                        id: t.data.id,
                                        payload: e,
                                        status: "success"
                                    })
                                }), (function() {
                                    n.postMessage({
                                        id: t.data.id,
                                        status: "error"
                                    })
                                }))
                            })), e.onmessage = function(t) {
                                var e = t.data,
                                    i = e.id,
                                    r = s[i];
                                s[i] = null, "success" === e.status ? r.onComplete(e.payload) : r.onError && r.onError()
                            })
                        }

                        function l(t, e) {
                            var r = "processId_" + (i += 1);
                            return s[r] = {
                                onComplete: t,
                                onError: e
                            }, r
                        }

                        function u(t, i, s) {
                            h();
                            var r = l(i, s);
                            e.postMessage({
                                type: "loadAnimation",
                                path: t,
                                fullPath: window.location.origin + window.location.pathname,
                                id: r
                            })
                        }

                        function c(t, i, s) {
                            h();
                            var r = l(i, s);
                            e.postMessage({
                                type: "loadData",
                                path: t,
                                fullPath: window.location.origin + window.location.pathname,
                                id: r
                            })
                        }

                        function p(t, i, s) {
                            h();
                            var r = l(i, s);
                            e.postMessage({
                                type: "complete",
                                animation: t,
                                id: r
                            })
                        }
                        return {
                            loadAnimation: u,
                            loadData: c,
                            completeAnimation: p
                        }
                    }(),
                    it = function() {
                        var t = function() {
                            var t = u("canvas");
                            t.width = 1, t.height = 1;
                            var e = t.getContext("2d");
                            return e.fillStyle = "rgba(0,0,0,0)", e.fillRect(0, 0, 1, 1), t
                        }();

                        function e() {
                            this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                        }

                        function i() {
                            this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                        }

                        function s(t, e, i) {
                            var s = "";
                            if (t.e) s = t.p;
                            else if (e) {
                                var r = t.p; - 1 !== r.indexOf("images/") && (r = r.split("/")[1]), s = e + r
                            } else s = i, s += t.u ? t.u : "", s += t.p;
                            return s
                        }

                        function r(t) {
                            var e = 0,
                                i = setInterval(function() {
                                    (t.getBBox().width || e > 500) && (this._imageLoaded(), clearInterval(i)), e += 1
                                }.bind(this), 50)
                        }

                        function n(e) {
                            var i = s(e, this.assetsPath, this.path),
                                r = Q("image");
                            b ? this.testImageLoaded(r) : r.addEventListener("load", this._imageLoaded, !1), r.addEventListener("error", function() {
                                n.img = t, this._imageLoaded()
                            }.bind(this), !1), r.setAttributeNS("http://www.w3.org/1999/xlink", "href", i), this._elementHelper.append ? this._elementHelper.append(r) : this._elementHelper.appendChild(r);
                            var n = {
                                img: r,
                                assetData: e
                            };
                            return n
                        }

                        function a(e) {
                            var i = s(e, this.assetsPath, this.path),
                                r = u("img");
                            r.crossOrigin = "anonymous", r.addEventListener("load", this._imageLoaded, !1), r.addEventListener("error", function() {
                                n.img = t, this._imageLoaded()
                            }.bind(this), !1), r.src = i;
                            var n = {
                                img: r,
                                assetData: e
                            };
                            return n
                        }

                        function o(t) {
                            var e = {
                                    assetData: t
                                },
                                i = s(t, this.assetsPath, this.path);
                            return et.loadData(i, function(t) {
                                e.img = t, this._footageLoaded()
                            }.bind(this), function() {
                                e.img = {}, this._footageLoaded()
                            }.bind(this)), e
                        }

                        function h(t, e) {
                            var i;
                            this.imagesLoadedCb = e;
                            var s = t.length;
                            for (i = 0; i < s; i += 1) t[i].layers || (t[i].t && "seq" !== t[i].t ? 3 === t[i].t && (this.totalFootages += 1, this.images.push(this.createFootageData(t[i]))) : (this.totalImages += 1, this.images.push(this._createImageData(t[i]))))
                        }

                        function l(t) {
                            this.path = t || ""
                        }

                        function c(t) {
                            this.assetsPath = t || ""
                        }

                        function p(t) {
                            for (var e = 0, i = this.images.length; e < i;) {
                                if (this.images[e].assetData === t) return this.images[e].img;
                                e += 1
                            }
                            return null
                        }

                        function f() {
                            this.imagesLoadedCb = null, this.images.length = 0
                        }

                        function d() {
                            return this.totalImages === this.loadedAssets
                        }

                        function m() {
                            return this.totalFootages === this.loadedFootagesCount
                        }

                        function g(t, e) {
                            "svg" === t ? (this._elementHelper = e, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
                        }

                        function v() {
                            this._imageLoaded = e.bind(this), this._footageLoaded = i.bind(this), this.testImageLoaded = r.bind(this), this.createFootageData = o.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
                        }
                        return v.prototype = {
                            loadAssets: h,
                            setAssetsPath: c,
                            setPath: l,
                            loadedImages: d,
                            loadedFootages: m,
                            destroy: f,
                            getAsset: p,
                            createImgData: a,
                            createImageData: n,
                            imageLoaded: e,
                            footageLoaded: i,
                            setCacheType: g
                        }, v
                    }();

                function st() {}
                st.prototype = {
                    triggerEvent: function(t, e) {
                        if (this._cbs[t])
                            for (var i = this._cbs[t], s = 0; s < i.length; s += 1) i[s](e)
                    },
                    addEventListener: function(t, e) {
                        return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e),
                            function() {
                                this.removeEventListener(t, e)
                            }.bind(this)
                    },
                    removeEventListener: function(t, e) {
                        if (e) {
                            if (this._cbs[t]) {
                                for (var i = 0, s = this._cbs[t].length; i < s;) this._cbs[t][i] === e && (this._cbs[t].splice(i, 1), i -= 1, s -= 1), i += 1;
                                this._cbs[t].length || (this._cbs[t] = null)
                            }
                        } else this._cbs[t] = null
                    }
                };
                var rt = function() {
                        function t(t) {
                            for (var e, i = t.split("\r\n"), s = {}, r = 0, n = 0; n < i.length; n += 1) 2 === (e = i[n].split(":")).length && (s[e[0]] = e[1].trim(), r += 1);
                            if (0 === r) throw new Error;
                            return s
                        }
                        return function(e) {
                            for (var i = [], s = 0; s < e.length; s += 1) {
                                var r = e[s],
                                    n = {
                                        time: r.tm,
                                        duration: r.dr
                                    };
                                try {
                                    n.payload = JSON.parse(e[s].cm)
                                } catch (i) {
                                    try {
                                        n.payload = t(e[s].cm)
                                    } catch (t) {
                                        n.payload = {
                                            name: e[s].cm
                                        }
                                    }
                                }
                                i.push(n)
                            }
                            return i
                        }
                    }(),
                    nt = function() {
                        function t(t) {
                            this.compositions.push(t)
                        }
                        return function() {
                            function e(t) {
                                for (var e = 0, i = this.compositions.length; e < i;) {
                                    if (this.compositions[e].data && this.compositions[e].data.nm === t) return this.compositions[e].prepareFrame && this.compositions[e].data.xt && this.compositions[e].prepareFrame(this.currentFrame), this.compositions[e].compInterface;
                                    e += 1
                                }
                                return null
                            }
                            return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e
                        }
                    }(),
                    at = {},
                    ot = function(t, e) {
                        at[t] = e
                    };

                function ht(t) {
                    return at[t]
                }

                function lt() {
                    if (at.canvas) return "canvas";
                    for (var t in at)
                        if (at[t]) return t;
                    return ""
                }

                function ut(t) {
                    return ut = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }, ut(t)
                }
                var ct = function() {
                    this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = z(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = U(), this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = nt(), this.imagePreloader = new it, this.audioController = f(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new M("drawnFrame", 0, 0, 0), this.expressionsPlugin = G()
                };
                c([st], ct), ct.prototype.setParams = function(t) {
                    (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
                    var e = "svg";
                    t.animType ? e = t.animType : t.renderer && (e = t.renderer);
                    var i = ht(e);
                    this.renderer = new i(this, t.rendererSettings), this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, "" === t.loop || null === t.loop || void 0 === t.loop || !0 === t.loop ? this.loop = !0 : !1 === t.loop ? this.loop = !1 : this.loop = parseInt(t.loop, 10), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.setupAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), et.loadAnimation(t.path, this.configAnimation, this.onSetupError))
                }, ct.prototype.onSetupError = function() {
                    this.trigger("data_failed")
                }, ct.prototype.setupAnimation = function(t) {
                    et.completeAnimation(t, this.configAnimation)
                }, ct.prototype.setData = function(t, e) {
                    e && "object" !== ut(e) && (e = JSON.parse(e));
                    var i = {
                            wrapper: t,
                            animationData: e
                        },
                        s = t.attributes;
                    i.path = s.getNamedItem("data-animation-path") ? s.getNamedItem("data-animation-path").value : s.getNamedItem("data-bm-path") ? s.getNamedItem("data-bm-path").value : s.getNamedItem("bm-path") ? s.getNamedItem("bm-path").value : "", i.animType = s.getNamedItem("data-anim-type") ? s.getNamedItem("data-anim-type").value : s.getNamedItem("data-bm-type") ? s.getNamedItem("data-bm-type").value : s.getNamedItem("bm-type") ? s.getNamedItem("bm-type").value : s.getNamedItem("data-bm-renderer") ? s.getNamedItem("data-bm-renderer").value : s.getNamedItem("bm-renderer") ? s.getNamedItem("bm-renderer").value : lt() || "canvas";
                    var r = s.getNamedItem("data-anim-loop") ? s.getNamedItem("data-anim-loop").value : s.getNamedItem("data-bm-loop") ? s.getNamedItem("data-bm-loop").value : s.getNamedItem("bm-loop") ? s.getNamedItem("bm-loop").value : "";
                    "false" === r ? i.loop = !1 : "true" === r ? i.loop = !0 : "" !== r && (i.loop = parseInt(r, 10));
                    var n = s.getNamedItem("data-anim-autoplay") ? s.getNamedItem("data-anim-autoplay").value : s.getNamedItem("data-bm-autoplay") ? s.getNamedItem("data-bm-autoplay").value : !s.getNamedItem("bm-autoplay") || s.getNamedItem("bm-autoplay").value;
                    i.autoplay = "false" !== n, i.name = s.getNamedItem("data-name") ? s.getNamedItem("data-name").value : s.getNamedItem("data-bm-name") ? s.getNamedItem("data-bm-name").value : s.getNamedItem("bm-name") ? s.getNamedItem("bm-name").value : "", "false" === (s.getNamedItem("data-anim-prerender") ? s.getNamedItem("data-anim-prerender").value : s.getNamedItem("data-bm-prerender") ? s.getNamedItem("data-bm-prerender").value : s.getNamedItem("bm-prerender") ? s.getNamedItem("bm-prerender").value : "") && (i.prerender = !1), i.path ? this.setParams(i) : this.trigger("destroy")
                }, ct.prototype.includeLayers = function(t) {
                    t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
                    var e, i, s = this.animationData.layers,
                        r = s.length,
                        n = t.layers,
                        a = n.length;
                    for (i = 0; i < a; i += 1)
                        for (e = 0; e < r;) {
                            if (s[e].id === n[i].id) {
                                s[e] = n[i];
                                break
                            }
                            e += 1
                        }
                    if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
                        for (r = t.assets.length, e = 0; e < r; e += 1) this.animationData.assets.push(t.assets[e]);
                    this.animationData.__complete = !1, et.completeAnimation(this.animationData, this.onSegmentComplete)
                }, ct.prototype.onSegmentComplete = function(t) {
                    this.animationData = t;
                    var e = G();
                    e && e.initExpressions(this), this.loadNextSegment()
                }, ct.prototype.loadNextSegment = function() {
                    var t = this.animationData.segments;
                    if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.totalFrames);
                    var e = t.shift();
                    this.timeCompleted = e.time * this.frameRate;
                    var i = this.path + this.fileName + "_" + this.segmentPos + ".json";
                    this.segmentPos += 1, et.loadData(i, this.includeLayers.bind(this), function() {
                        this.trigger("data_failed")
                    }.bind(this))
                }, ct.prototype.loadSegments = function() {
                    this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
                }, ct.prototype.imagesLoaded = function() {
                    this.trigger("loaded_images"), this.checkLoaded()
                }, ct.prototype.preloadImages = function() {
                    this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
                }, ct.prototype.configAnimation = function(t) {
                    if (this.renderer) try {
                        this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = rt(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause()
                    } catch (t) {
                        this.triggerConfigError(t)
                    }
                }, ct.prototype.waitForFontsLoaded = function() {
                    this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
                }, ct.prototype.checkLoaded = function() {
                    if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || "canvas" !== this.renderer.rendererType) && this.imagePreloader.loadedFootages()) {
                        this.isLoaded = !0;
                        var t = G();
                        t && t.initExpressions(this), this.renderer.initItems(), setTimeout(function() {
                            this.trigger("DOMLoaded")
                        }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play()
                    }
                }, ct.prototype.resize = function(t, e) {
                    var i = "number" == typeof t ? t : void 0,
                        s = "number" == typeof e ? e : void 0;
                    this.renderer.updateContainerSize(i, s)
                }, ct.prototype.setSubframe = function(t) {
                    this.isSubframeEnabled = !!t
                }, ct.prototype.gotoFrame = function() {
                    this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame")
                }, ct.prototype.renderFrame = function() {
                    if (!1 !== this.isLoaded && this.renderer) try {
                        this.expressionsPlugin && this.expressionsPlugin.resetFrame(), this.renderer.renderFrame(this.currentFrame + this.firstFrame)
                    } catch (t) {
                        this.triggerRenderFrameError(t)
                    }
                }, ct.prototype.play = function(t) {
                    t && this.name !== t || !0 === this.isPaused && (this.isPaused = !1, this.trigger("_play"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")))
                }, ct.prototype.pause = function(t) {
                    t && this.name !== t || !1 === this.isPaused && (this.isPaused = !0, this.trigger("_pause"), this._idle = !0, this.trigger("_idle"), this.audioController.pause())
                }, ct.prototype.togglePause = function(t) {
                    t && this.name !== t || (!0 === this.isPaused ? this.play() : this.pause())
                }, ct.prototype.stop = function(t) {
                    t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
                }, ct.prototype.getMarkerData = function(t) {
                    for (var e, i = 0; i < this.markers.length; i += 1)
                        if ((e = this.markers[i]).payload && e.payload.name === t) return e;
                    return null
                }, ct.prototype.goToAndStop = function(t, e, i) {
                    if (!i || this.name === i) {
                        var s = Number(t);
                        if (isNaN(s)) {
                            var r = this.getMarkerData(t);
                            r && this.goToAndStop(r.time, !0)
                        } else e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
                        this.pause()
                    }
                }, ct.prototype.goToAndPlay = function(t, e, i) {
                    if (!i || this.name === i) {
                        var s = Number(t);
                        if (isNaN(s)) {
                            var r = this.getMarkerData(t);
                            r && (r.duration ? this.playSegments([r.time, r.time + r.duration], !0) : this.goToAndStop(r.time, !0))
                        } else this.goToAndStop(s, e, i);
                        this.play()
                    }
                }, ct.prototype.advanceTime = function(t) {
                    if (!0 !== this.isPaused && !1 !== this.isLoaded) {
                        var e = this.currentRawFrame + t * this.frameModifier,
                            i = !1;
                        e >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (i = !0, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (i = !0, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e), i && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"))
                    }
                }, ct.prototype.adjustSegment = function(t, e) {
                    this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart")
                }, ct.prototype.setSegment = function(t, e) {
                    var i = -1;
                    this.isPaused && (this.currentRawFrame + this.firstFrame < t ? i = t : this.currentRawFrame + this.firstFrame > e && (i = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, -1 !== i && this.goToAndStop(i, !0)
                }, ct.prototype.playSegments = function(t, e) {
                    if (e && (this.segments.length = 0), "object" === ut(t[0])) {
                        var i, s = t.length;
                        for (i = 0; i < s; i += 1) this.segments.push(t[i])
                    } else this.segments.push(t);
                    this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
                }, ct.prototype.resetSegments = function(t) {
                    this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0)
                }, ct.prototype.checkSegments = function(t) {
                    return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0)
                }, ct.prototype.destroy = function(t) {
                    t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.expressionsPlugin = null, this.imagePreloader = null, this.projectInterface = null)
                }, ct.prototype.setCurrentRawFrameValue = function(t) {
                    this.currentRawFrame = t, this.gotoFrame()
                }, ct.prototype.setSpeed = function(t) {
                    this.playSpeed = t, this.updaFrameModifier()
                }, ct.prototype.setDirection = function(t) {
                    this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier()
                }, ct.prototype.setLoop = function(t) {
                    this.loop = t
                }, ct.prototype.setVolume = function(t, e) {
                    e && this.name !== e || this.audioController.setVolume(t)
                }, ct.prototype.getVolume = function() {
                    return this.audioController.getVolume()
                }, ct.prototype.mute = function(t) {
                    t && this.name !== t || this.audioController.mute()
                }, ct.prototype.unmute = function(t) {
                    t && this.name !== t || this.audioController.unmute()
                }, ct.prototype.updaFrameModifier = function() {
                    this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection)
                }, ct.prototype.getPath = function() {
                    return this.path
                }, ct.prototype.getAssetsPath = function(t) {
                    var e = "";
                    if (t.e) e = t.p;
                    else if (this.assetsPath) {
                        var i = t.p; - 1 !== i.indexOf("images/") && (i = i.split("/")[1]), e = this.assetsPath + i
                    } else e = this.path, e += t.u ? t.u : "", e += t.p;
                    return e
                }, ct.prototype.getAssetData = function(t) {
                    for (var e = 0, i = this.assets.length; e < i;) {
                        if (t === this.assets[e].id) return this.assets[e];
                        e += 1
                    }
                    return null
                }, ct.prototype.hide = function() {
                    this.renderer.hide()
                }, ct.prototype.show = function() {
                    this.renderer.show()
                }, ct.prototype.getDuration = function(t) {
                    return t ? this.totalFrames : this.totalFrames / this.frameRate
                }, ct.prototype.updateDocumentData = function(t, e, i) {
                    try {
                        this.renderer.getElementByPath(t).updateDocumentData(e, i)
                    } catch (t) {}
                }, ct.prototype.trigger = function(t) {
                    if (this._cbs && this._cbs[t]) switch (t) {
                        case "enterFrame":
                            this.triggerEvent(t, new M(t, this.currentFrame, this.totalFrames, this.frameModifier));
                            break;
                        case "drawnFrame":
                            this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(t, this.drawnFrameEvent);
                            break;
                        case "loopComplete":
                            this.triggerEvent(t, new I(t, this.loop, this.playCount, this.frameMult));
                            break;
                        case "complete":
                            this.triggerEvent(t, new P(t, this.frameMult));
                            break;
                        case "segmentStart":
                            this.triggerEvent(t, new O(t, this.firstFrame, this.totalFrames));
                            break;
                        case "destroy":
                            this.triggerEvent(t, new L(t, this));
                            break;
                        default:
                            this.triggerEvent(t)
                    }
                    "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new M(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new I(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new P(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new O(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new L(t, this))
                }, ct.prototype.triggerRenderFrameError = function(t) {
                    var e = new R(t, this.currentFrame);
                    this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
                }, ct.prototype.triggerConfigError = function(t) {
                    var e = new B(t, this.currentFrame);
                    this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
                };
                var pt = function() {
                        var t = {},
                            e = [],
                            i = 0,
                            s = 0,
                            r = 0,
                            n = !0,
                            a = !1;

                        function o(t) {
                            for (var i = 0, r = t.target; i < s;) e[i].animation === r && (e.splice(i, 1), i -= 1, s -= 1, r.isPaused || p()), i += 1
                        }

                        function h(t, i) {
                            if (!t) return null;
                            for (var r = 0; r < s;) {
                                if (e[r].elem === t && null !== e[r].elem) return e[r].animation;
                                r += 1
                            }
                            var n = new ct;
                            return f(n, t), n.setData(t, i), n
                        }

                        function l() {
                            var t, i = e.length,
                                s = [];
                            for (t = 0; t < i; t += 1) s.push(e[t].animation);
                            return s
                        }

                        function c() {
                            r += 1, F()
                        }

                        function p() {
                            r -= 1
                        }

                        function f(t, i) {
                            t.addEventListener("destroy", o), t.addEventListener("_active", c), t.addEventListener("_idle", p), e.push({
                                elem: i,
                                animation: t
                            }), s += 1
                        }

                        function d(t) {
                            var e = new ct;
                            return f(e, null), e.setParams(t), e
                        }

                        function m(t, i) {
                            var r;
                            for (r = 0; r < s; r += 1) e[r].animation.setSpeed(t, i)
                        }

                        function g(t, i) {
                            var r;
                            for (r = 0; r < s; r += 1) e[r].animation.setDirection(t, i)
                        }

                        function v(t) {
                            var i;
                            for (i = 0; i < s; i += 1) e[i].animation.play(t)
                        }

                        function y(t) {
                            var o, h = t - i;
                            for (o = 0; o < s; o += 1) e[o].animation.advanceTime(h);
                            i = t, r && !a ? window.requestAnimationFrame(y) : n = !0
                        }

                        function D(t) {
                            i = t, window.requestAnimationFrame(y)
                        }

                        function _(t) {
                            var i;
                            for (i = 0; i < s; i += 1) e[i].animation.pause(t)
                        }

                        function b(t, i, r) {
                            var n;
                            for (n = 0; n < s; n += 1) e[n].animation.goToAndStop(t, i, r)
                        }

                        function C(t) {
                            var i;
                            for (i = 0; i < s; i += 1) e[i].animation.stop(t)
                        }

                        function w(t) {
                            var i;
                            for (i = 0; i < s; i += 1) e[i].animation.togglePause(t)
                        }

                        function E(t) {
                            var i;
                            for (i = s - 1; i >= 0; i -= 1) e[i].animation.destroy(t)
                        }

                        function x(t, e, i) {
                            var s, r = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                                n = r.length;
                            for (s = 0; s < n; s += 1) i && r[s].setAttribute("data-bm-type", i), h(r[s], t);
                            if (e && 0 === n) {
                                i || (i = "svg");
                                var a = document.getElementsByTagName("body")[0];
                                a.innerText = "";
                                var o = u("div");
                                o.style.width = "100%", o.style.height = "100%", o.setAttribute("data-bm-type", i), a.appendChild(o), h(o, t)
                            }
                        }

                        function S() {
                            var t;
                            for (t = 0; t < s; t += 1) e[t].animation.resize()
                        }

                        function F() {
                            !a && r && n && (window.requestAnimationFrame(D), n = !1)
                        }

                        function k() {
                            a = !0
                        }

                        function T() {
                            a = !1, F()
                        }

                        function A(t, i) {
                            var r;
                            for (r = 0; r < s; r += 1) e[r].animation.setVolume(t, i)
                        }

                        function M(t) {
                            var i;
                            for (i = 0; i < s; i += 1) e[i].animation.mute(t)
                        }

                        function P(t) {
                            var i;
                            for (i = 0; i < s; i += 1) e[i].animation.unmute(t)
                        }
                        return t.registerAnimation = h, t.loadAnimation = d, t.setSpeed = m, t.setDirection = g, t.play = v, t.pause = _, t.stop = C, t.togglePause = w, t.searchAnimations = x, t.resize = S, t.goToAndStop = b, t.destroy = E, t.freeze = k, t.unfreeze = T, t.setVolume = A, t.mute = M, t.unmute = P, t.getRegisteredAnimations = l, t
                    }(),
                    ft = function() {
                        var t = {};
                        t.getBezierEasing = i;
                        var e = {};

                        function i(t, i, s, r, n) {
                            var a = n || ("bez_" + t + "_" + i + "_" + s + "_" + r).replace(/\./g, "p");
                            if (e[a]) return e[a];
                            var o = new v([t, i, s, r]);
                            return e[a] = o, o
                        }
                        var s = 4,
                            r = .001,
                            n = 1e-7,
                            a = 10,
                            o = 11,
                            h = 1 / (o - 1),
                            l = "function" == typeof Float32Array;

                        function u(t, e) {
                            return 1 - 3 * e + 3 * t
                        }

                        function c(t, e) {
                            return 3 * e - 6 * t
                        }

                        function p(t) {
                            return 3 * t
                        }

                        function f(t, e, i) {
                            return ((u(e, i) * t + c(e, i)) * t + p(e)) * t
                        }

                        function d(t, e, i) {
                            return 3 * u(e, i) * t * t + 2 * c(e, i) * t + p(e)
                        }

                        function m(t, e, i, s, r) {
                            var o, h, l = 0;
                            do {
                                (o = f(h = e + (i - e) / 2, s, r) - t) > 0 ? i = h : e = h
                            } while (Math.abs(o) > n && ++l < a);
                            return h
                        }

                        function g(t, e, i, r) {
                            for (var n = 0; n < s; ++n) {
                                var a = d(e, i, r);
                                if (0 === a) return e;
                                e -= (f(e, i, r) - t) / a
                            }
                            return e
                        }

                        function v(t) {
                            this._p = t, this._mSampleValues = l ? new Float32Array(o) : new Array(o), this._precomputed = !1, this.get = this.get.bind(this)
                        }
                        return v.prototype = {
                            get: function(t) {
                                var e = this._p[0],
                                    i = this._p[1],
                                    s = this._p[2],
                                    r = this._p[3];
                                return this._precomputed || this._precompute(), e === i && s === r ? t : 0 === t ? 0 : 1 === t ? 1 : f(this._getTForX(t), i, r)
                            },
                            _precompute: function() {
                                var t = this._p[0],
                                    e = this._p[1],
                                    i = this._p[2],
                                    s = this._p[3];
                                this._precomputed = !0, t === e && i === s || this._calcSampleValues()
                            },
                            _calcSampleValues: function() {
                                for (var t = this._p[0], e = this._p[2], i = 0; i < o; ++i) this._mSampleValues[i] = f(i * h, t, e)
                            },
                            _getTForX: function(t) {
                                for (var e = this._p[0], i = this._p[2], s = this._mSampleValues, n = 0, a = 1, l = o - 1; a !== l && s[a] <= t; ++a) n += h;
                                var u = n + (t - s[--a]) / (s[a + 1] - s[a]) * h,
                                    c = d(u, e, i);
                                return c >= r ? g(t, u, e, i) : 0 === c ? u : m(t, n, n + h, e, i)
                            }
                        }, t
                    }(),
                    dt = function() {
                        function t(t) {
                            return t.concat(m(t.length))
                        }
                        return {
                            double: t
                        }
                    }(),
                    mt = function(t, e, i) {
                        var s = 0,
                            r = t,
                            n = m(r);

                        function a() {
                            return s ? n[s -= 1] : e()
                        }

                        function o(t) {
                            s === r && (n = dt.double(n), r *= 2), i && i(t), n[s] = t, s += 1
                        }
                        return {
                            newElement: a,
                            release: o
                        }
                    },
                    gt = function() {
                        function t() {
                            return {
                                addedLength: 0,
                                percents: d("float32", J()),
                                lengths: d("float32", J())
                            }
                        }
                        return mt(8, t)
                    }(),
                    vt = function() {
                        function t() {
                            return {
                                lengths: [],
                                totalLength: 0
                            }
                        }

                        function e(t) {
                            var e, i = t.lengths.length;
                            for (e = 0; e < i; e += 1) gt.release(t.lengths[e]);
                            t.lengths.length = 0
                        }
                        return mt(8, t, e)
                    }();

                function yt() {
                    var t = Math;

                    function e(t, e, i, s, r, n) {
                        var a = t * s + e * r + i * n - r * s - n * t - i * e;
                        return a > -.001 && a < .001
                    }

                    function i(i, s, r, n, a, o, h, l, u) {
                        if (0 === r && 0 === o && 0 === u) return e(i, s, n, a, h, l);
                        var c, p = t.sqrt(t.pow(n - i, 2) + t.pow(a - s, 2) + t.pow(o - r, 2)),
                            f = t.sqrt(t.pow(h - i, 2) + t.pow(l - s, 2) + t.pow(u - r, 2)),
                            d = t.sqrt(t.pow(h - n, 2) + t.pow(l - a, 2) + t.pow(u - o, 2));
                        return (c = p > f ? p > d ? p - f - d : d - f - p : d > f ? d - f - p : f - p - d) > -1e-4 && c < 1e-4
                    }
                    var s = function(t, e, i, s) {
                        var r, n, a, o, h, l, u = J(),
                            c = 0,
                            p = [],
                            f = [],
                            d = gt.newElement();
                        for (a = i.length, r = 0; r < u; r += 1) {
                            for (h = r / (u - 1), l = 0, n = 0; n < a; n += 1) o = C(1 - h, 3) * t[n] + 3 * C(1 - h, 2) * h * i[n] + 3 * (1 - h) * C(h, 2) * s[n] + C(h, 3) * e[n], p[n] = o, null !== f[n] && (l += C(p[n] - f[n], 2)), f[n] = p[n];
                            l && (c += l = w(l)), d.percents[r] = h, d.lengths[r] = c
                        }
                        return d.addedLength = c, d
                    };

                    function r(t) {
                        var e, i = vt.newElement(),
                            r = t.c,
                            n = t.v,
                            a = t.o,
                            o = t.i,
                            h = t._length,
                            l = i.lengths,
                            u = 0;
                        for (e = 0; e < h - 1; e += 1) l[e] = s(n[e], n[e + 1], a[e], o[e + 1]), u += l[e].addedLength;
                        return r && h && (l[e] = s(n[e], n[0], a[e], o[0]), u += l[e].addedLength), i.totalLength = u, i
                    }

                    function n(t) {
                        this.segmentLength = 0, this.points = new Array(t)
                    }

                    function a(t, e) {
                        this.partialLength = t, this.point = e
                    }
                    var o, h = (o = {}, function(t, i, s, r) {
                        var h = (t[0] + "_" + t[1] + "_" + i[0] + "_" + i[1] + "_" + s[0] + "_" + s[1] + "_" + r[0] + "_" + r[1]).replace(/\./g, "p");
                        if (!o[h]) {
                            var l, u, c, p, f, d, g, v = J(),
                                y = 0,
                                D = null;
                            2 === t.length && (t[0] !== i[0] || t[1] !== i[1]) && e(t[0], t[1], i[0], i[1], t[0] + s[0], t[1] + s[1]) && e(t[0], t[1], i[0], i[1], i[0] + r[0], i[1] + r[1]) && (v = 2);
                            var _ = new n(v);
                            for (c = s.length, l = 0; l < v; l += 1) {
                                for (g = m(c), f = l / (v - 1), d = 0, u = 0; u < c; u += 1) p = C(1 - f, 3) * t[u] + 3 * C(1 - f, 2) * f * (t[u] + s[u]) + 3 * (1 - f) * C(f, 2) * (i[u] + r[u]) + C(f, 3) * i[u], g[u] = p, null !== D && (d += C(g[u] - D[u], 2));
                                y += d = w(d), _.points[l] = new a(d, g), D = g
                            }
                            _.segmentLength = y, o[h] = _
                        }
                        return o[h]
                    });

                    function l(t, e) {
                        var i = e.percents,
                            s = e.lengths,
                            r = i.length,
                            n = E((r - 1) * t),
                            a = t * e.addedLength,
                            o = 0;
                        if (n === r - 1 || 0 === n || a === s[n]) return i[n];
                        for (var h = s[n] > a ? -1 : 1, l = !0; l;)
                            if (s[n] <= a && s[n + 1] > a ? (o = (a - s[n]) / (s[n + 1] - s[n]), l = !1) : n += h, n < 0 || n >= r - 1) {
                                if (n === r - 1) return i[n];
                                l = !1
                            } return i[n] + (i[n + 1] - i[n]) * o
                    }

                    function u(e, i, s, r, n, a) {
                        var o = l(n, a),
                            h = 1 - o;
                        return [t.round(1e3 * (h * h * h * e[0] + (o * h * h + h * o * h + h * h * o) * s[0] + (o * o * h + h * o * o + o * h * o) * r[0] + o * o * o * i[0])) / 1e3, t.round(1e3 * (h * h * h * e[1] + (o * h * h + h * o * h + h * h * o) * s[1] + (o * o * h + h * o * o + o * h * o) * r[1] + o * o * o * i[1])) / 1e3]
                    }
                    var c = d("float32", 8);

                    function p(e, i, s, r, n, a, o) {
                        n < 0 ? n = 0 : n > 1 && (n = 1);
                        var h, u = l(n, o),
                            p = l(a = a > 1 ? 1 : a, o),
                            f = e.length,
                            d = 1 - u,
                            m = 1 - p,
                            g = d * d * d,
                            v = u * d * d * 3,
                            y = u * u * d * 3,
                            D = u * u * u,
                            _ = d * d * m,
                            b = u * d * m + d * u * m + d * d * p,
                            C = u * u * m + d * u * p + u * d * p,
                            w = u * u * p,
                            E = d * m * m,
                            x = u * m * m + d * p * m + d * m * p,
                            S = u * p * m + d * p * p + u * m * p,
                            F = u * p * p,
                            k = m * m * m,
                            T = p * m * m + m * p * m + m * m * p,
                            A = p * p * m + m * p * p + p * m * p,
                            M = p * p * p;
                        for (h = 0; h < f; h += 1) c[4 * h] = t.round(1e3 * (g * e[h] + v * s[h] + y * r[h] + D * i[h])) / 1e3, c[4 * h + 1] = t.round(1e3 * (_ * e[h] + b * s[h] + C * r[h] + w * i[h])) / 1e3, c[4 * h + 2] = t.round(1e3 * (E * e[h] + x * s[h] + S * r[h] + F * i[h])) / 1e3, c[4 * h + 3] = t.round(1e3 * (k * e[h] + T * s[h] + A * r[h] + M * i[h])) / 1e3;
                        return c
                    }
                    return {
                        getSegmentsLength: r,
                        getNewSegment: p,
                        getPointInSegment: u,
                        buildBezierData: h,
                        pointOnLine2D: e,
                        pointOnLine3D: i
                    }
                }
                var Dt = yt(),
                    _t = n,
                    bt = Math.abs;

                function Ct(t, e) {
                    var i, s = this.offsetTime;
                    "multidimensional" === this.propType && (i = d("float32", this.pv.length));
                    for (var r, n, a, o, h, l, u, c, p, f = e.lastIndex, m = f, g = this.keyframes.length - 1, v = !0; v;) {
                        if (r = this.keyframes[m], n = this.keyframes[m + 1], m === g - 1 && t >= n.t - s) {
                            r.h && (r = n), f = 0;
                            break
                        }
                        if (n.t - s > t) {
                            f = m;
                            break
                        }
                        m < g - 1 ? m += 1 : (f = 0, v = !1)
                    }
                    a = this.keyframesMetadata[m] || {};
                    var y, D = n.t - s,
                        _ = r.t - s;
                    if (r.to) {
                        a.bezierData || (a.bezierData = Dt.buildBezierData(r.s, n.s || r.e, r.to, r.ti));
                        var b = a.bezierData;
                        if (t >= D || t < _) {
                            var C = t >= D ? b.points.length - 1 : 0;
                            for (h = b.points[C].point.length, o = 0; o < h; o += 1) i[o] = b.points[C].point[o]
                        } else {
                            a.__fnct ? p = a.__fnct : (p = ft.getBezierEasing(r.o.x, r.o.y, r.i.x, r.i.y, r.n).get, a.__fnct = p), l = p((t - _) / (D - _));
                            var w, E = b.segmentLength * l,
                                x = e.lastFrame < t && e._lastKeyframeIndex === m ? e._lastAddedLength : 0;
                            for (c = e.lastFrame < t && e._lastKeyframeIndex === m ? e._lastPoint : 0, v = !0, u = b.points.length; v;) {
                                if (x += b.points[c].partialLength, 0 === E || 0 === l || c === b.points.length - 1) {
                                    for (h = b.points[c].point.length, o = 0; o < h; o += 1) i[o] = b.points[c].point[o];
                                    break
                                }
                                if (E >= x && E < x + b.points[c + 1].partialLength) {
                                    for (w = (E - x) / b.points[c + 1].partialLength, h = b.points[c].point.length, o = 0; o < h; o += 1) i[o] = b.points[c].point[o] + (b.points[c + 1].point[o] - b.points[c].point[o]) * w;
                                    break
                                }
                                c < u - 1 ? c += 1 : v = !1
                            }
                            e._lastPoint = c, e._lastAddedLength = x - b.points[c].partialLength, e._lastKeyframeIndex = m
                        }
                    } else {
                        var S, F, k, T, A;
                        if (g = r.s.length, y = n.s || r.e, this.sh && 1 !== r.h) t >= D ? (i[0] = y[0], i[1] = y[1], i[2] = y[2]) : t <= _ ? (i[0] = r.s[0], i[1] = r.s[1], i[2] = r.s[2]) : Et(i, wt(xt(r.s), xt(y), (t - _) / (D - _)));
                        else
                            for (m = 0; m < g; m += 1) 1 !== r.h && (t >= D ? l = 1 : t < _ ? l = 0 : (r.o.x.constructor === Array ? (a.__fnct || (a.__fnct = []), a.__fnct[m] ? p = a.__fnct[m] : (S = void 0 === r.o.x[m] ? r.o.x[0] : r.o.x[m], F = void 0 === r.o.y[m] ? r.o.y[0] : r.o.y[m], k = void 0 === r.i.x[m] ? r.i.x[0] : r.i.x[m], T = void 0 === r.i.y[m] ? r.i.y[0] : r.i.y[m], p = ft.getBezierEasing(S, F, k, T).get, a.__fnct[m] = p)) : a.__fnct ? p = a.__fnct : (S = r.o.x, F = r.o.y, k = r.i.x, T = r.i.y, p = ft.getBezierEasing(S, F, k, T).get, r.keyframeMetadata = p), l = p((t - _) / (D - _)))), y = n.s || r.e, A = 1 === r.h ? r.s[m] : r.s[m] + (y[m] - r.s[m]) * l, "multidimensional" === this.propType ? i[m] = A : i = A
                    }
                    return e.lastIndex = f, i
                }

                function wt(t, e, i) {
                    var s, r, n, a, o, h = [],
                        l = t[0],
                        u = t[1],
                        c = t[2],
                        p = t[3],
                        f = e[0],
                        d = e[1],
                        m = e[2],
                        g = e[3];
                    return (r = l * f + u * d + c * m + p * g) < 0 && (r = -r, f = -f, d = -d, m = -m, g = -g), 1 - r > 1e-6 ? (s = Math.acos(r), n = Math.sin(s), a = Math.sin((1 - i) * s) / n, o = Math.sin(i * s) / n) : (a = 1 - i, o = i), h[0] = a * l + o * f, h[1] = a * u + o * d, h[2] = a * c + o * m, h[3] = a * p + o * g, h
                }

                function Et(t, e) {
                    var i = e[0],
                        s = e[1],
                        r = e[2],
                        n = e[3],
                        a = Math.atan2(2 * s * n - 2 * i * r, 1 - 2 * s * s - 2 * r * r),
                        o = Math.asin(2 * i * s + 2 * r * n),
                        h = Math.atan2(2 * i * n - 2 * s * r, 1 - 2 * i * i - 2 * r * r);
                    t[0] = a / k, t[1] = o / k, t[2] = h / k
                }

                function xt(t) {
                    var e = t[0] * k,
                        i = t[1] * k,
                        s = t[2] * k,
                        r = Math.cos(e / 2),
                        n = Math.cos(i / 2),
                        a = Math.cos(s / 2),
                        o = Math.sin(e / 2),
                        h = Math.sin(i / 2),
                        l = Math.sin(s / 2);
                    return [o * h * a + r * n * l, o * n * a + r * h * l, r * h * a - o * n * l, r * n * a - o * h * l]
                }

                function St() {
                    var t = this.comp.renderedFrame - this.offsetTime,
                        e = this.keyframes[0].t - this.offsetTime,
                        i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
                    if (!(t === this._caching.lastFrame || this._caching.lastFrame !== _t && (this._caching.lastFrame >= i && t >= i || this._caching.lastFrame < e && t < e))) {
                        this._caching.lastFrame >= t && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                        var s = this.interpolateValue(t, this._caching);
                        this.pv = s
                    }
                    return this._caching.lastFrame = t, this.pv
                }

                function Ft(t) {
                    var e;
                    if ("unidimensional" === this.propType) e = t * this.mult, bt(this.v - e) > 1e-5 && (this.v = e, this._mdf = !0);
                    else
                        for (var i = 0, s = this.v.length; i < s;) e = t[i] * this.mult, bt(this.v[i] - e) > 1e-5 && (this.v[i] = e, this._mdf = !0), i += 1
                }

                function kt() {
                    if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
                        if (this.lock) this.setVValue(this.pv);
                        else {
                            var t;
                            this.lock = !0, this._mdf = this._isFirstFrame;
                            var e = this.effectsSequence.length,
                                i = this.kf ? this.pv : this.data.k;
                            for (t = 0; t < e; t += 1) i = this.effectsSequence[t](i);
                            this.setVValue(i), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
                        }
                }

                function Tt(t) {
                    this.effectsSequence.push(t), this.container.addDynamicProperty(this)
                }

                function At(t, e, i, s) {
                    this.propType = "unidimensional", this.mult = i || 1, this.data = e, this.v = i ? e.k * i : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = s, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = kt, this.setVValue = Ft, this.addEffect = Tt
                }

                function Mt(t, e, i, s) {
                    var r;
                    this.propType = "multidimensional", this.mult = i || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = s, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
                    var n = e.k.length;
                    for (this.v = d("float32", n), this.pv = d("float32", n), this.vel = d("float32", n), r = 0; r < n; r += 1) this.v[r] = e.k[r] * this.mult, this.pv[r] = e.k[r];
                    this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = kt, this.setVValue = Ft, this.addEffect = Tt
                }

                function Pt(t, e, i, s) {
                    this.propType = "unidimensional", this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.frameId = -1, this._caching = {
                        lastFrame: _t,
                        lastIndex: 0,
                        value: 0,
                        _lastKeyframeIndex: -1
                    }, this.k = !0, this.kf = !0, this.data = e, this.mult = i || 1, this.elem = t, this.container = s, this.comp = t.comp, this.v = _t, this.pv = _t, this._isFirstFrame = !0, this.getValue = kt, this.setVValue = Ft, this.interpolateValue = Ct, this.effectsSequence = [St.bind(this)], this.addEffect = Tt
                }

                function It(t, e, i, s) {
                    var r;
                    this.propType = "multidimensional";
                    var n, a, o, h, l = e.k.length;
                    for (r = 0; r < l - 1; r += 1) e.k[r].to && e.k[r].s && e.k[r + 1] && e.k[r + 1].s && (n = e.k[r].s, a = e.k[r + 1].s, o = e.k[r].to, h = e.k[r].ti, (2 === n.length && (n[0] !== a[0] || n[1] !== a[1]) && Dt.pointOnLine2D(n[0], n[1], a[0], a[1], n[0] + o[0], n[1] + o[1]) && Dt.pointOnLine2D(n[0], n[1], a[0], a[1], a[0] + h[0], a[1] + h[1]) || 3 === n.length && (n[0] !== a[0] || n[1] !== a[1] || n[2] !== a[2]) && Dt.pointOnLine3D(n[0], n[1], n[2], a[0], a[1], a[2], n[0] + o[0], n[1] + o[1], n[2] + o[2]) && Dt.pointOnLine3D(n[0], n[1], n[2], a[0], a[1], a[2], a[0] + h[0], a[1] + h[1], a[2] + h[2])) && (e.k[r].to = null, e.k[r].ti = null), n[0] === a[0] && n[1] === a[1] && 0 === o[0] && 0 === o[1] && 0 === h[0] && 0 === h[1] && (2 === n.length || n[2] === a[2] && 0 === o[2] && 0 === h[2]) && (e.k[r].to = null, e.k[r].ti = null));
                    this.effectsSequence = [St.bind(this)], this.data = e, this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = i || 1, this.elem = t, this.container = s, this.comp = t.comp, this.getValue = kt, this.setVValue = Ft, this.interpolateValue = Ct, this.frameId = -1;
                    var u = e.k[0].s.length;
                    for (this.v = d("float32", u), this.pv = d("float32", u), r = 0; r < u; r += 1) this.v[r] = _t, this.pv[r] = _t;
                    this._caching = {
                        lastFrame: _t,
                        lastIndex: 0,
                        value: d("float32", u)
                    }, this.addEffect = Tt
                }
                var Ot = function() {
                    function t(t, e, i, s, r) {
                        var n;
                        if (e.sid && (e = t.globalData.slotManager.getProp(e)), e.k.length)
                            if ("number" == typeof e.k[0]) n = new Mt(t, e, s, r);
                            else switch (i) {
                                case 0:
                                    n = new Pt(t, e, s, r);
                                    break;
                                case 1:
                                    n = new It(t, e, s, r)
                            } else n = new At(t, e, s, r);
                        return n.effectsSequence.length && r.addDynamicProperty(n), n
                    }
                    return {
                        getProp: t
                    }
                }();

                function Lt() {}
                Lt.prototype = {
                    addDynamicProperty: function(t) {
                        -1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0)
                    },
                    iterateDynamicProperties: function() {
                        var t;
                        this._mdf = !1;
                        var e = this.dynamicProperties.length;
                        for (t = 0; t < e; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0)
                    },
                    initDynamicPropertyContainer: function(t) {
                        this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
                    }
                };
                var Rt = function() {
                    function t() {
                        return d("float32", 2)
                    }
                    return mt(8, t)
                }();

                function Bt() {
                    this.c = !1, this._length = 0, this._maxLength = 8, this.v = m(this._maxLength), this.o = m(this._maxLength), this.i = m(this._maxLength)
                }
                Bt.prototype.setPathData = function(t, e) {
                    this.c = t, this.setLength(e);
                    for (var i = 0; i < e;) this.v[i] = Rt.newElement(), this.o[i] = Rt.newElement(), this.i[i] = Rt.newElement(), i += 1
                }, Bt.prototype.setLength = function(t) {
                    for (; this._maxLength < t;) this.doubleArrayLength();
                    this._length = t
                }, Bt.prototype.doubleArrayLength = function() {
                    this.v = this.v.concat(m(this._maxLength)), this.i = this.i.concat(m(this._maxLength)), this.o = this.o.concat(m(this._maxLength)), this._maxLength *= 2
                }, Bt.prototype.setXYAt = function(t, e, i, s, r) {
                    var n;
                    switch (this._length = Math.max(this._length, s + 1), this._length >= this._maxLength && this.doubleArrayLength(), i) {
                        case "v":
                            n = this.v;
                            break;
                        case "i":
                            n = this.i;
                            break;
                        case "o":
                            n = this.o;
                            break;
                        default:
                            n = []
                    }(!n[s] || n[s] && !r) && (n[s] = Rt.newElement()), n[s][0] = t, n[s][1] = e
                }, Bt.prototype.setTripleAt = function(t, e, i, s, r, n, a, o) {
                    this.setXYAt(t, e, "v", a, o), this.setXYAt(i, s, "o", a, o), this.setXYAt(r, n, "i", a, o)
                }, Bt.prototype.reverse = function() {
                    var t = new Bt;
                    t.setPathData(this.c, this._length);
                    var e = this.v,
                        i = this.o,
                        s = this.i,
                        r = 0;
                    this.c && (t.setTripleAt(e[0][0], e[0][1], s[0][0], s[0][1], i[0][0], i[0][1], 0, !1), r = 1);
                    var n, a = this._length - 1,
                        o = this._length;
                    for (n = r; n < o; n += 1) t.setTripleAt(e[a][0], e[a][1], s[a][0], s[a][1], i[a][0], i[a][1], n, !1), a -= 1;
                    return t
                }, Bt.prototype.length = function() {
                    return this._length
                };
                var Nt = function() {
                    function t() {
                        return new Bt
                    }

                    function e(t) {
                        var e, i = t._length;
                        for (e = 0; e < i; e += 1) Rt.release(t.v[e]), Rt.release(t.i[e]), Rt.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
                        t._length = 0, t.c = !1
                    }

                    function i(t) {
                        var e, i = s.newElement(),
                            r = void 0 === t._length ? t.v.length : t._length;
                        for (i.setLength(r), i.c = t.c, e = 0; e < r; e += 1) i.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
                        return i
                    }
                    var s = mt(4, t, e);
                    return s.clone = i, s
                }();

                function zt() {
                    this._length = 0, this._maxLength = 4, this.shapes = m(this._maxLength)
                }
                zt.prototype.addShape = function(t) {
                    this._length === this._maxLength && (this.shapes = this.shapes.concat(m(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1
                }, zt.prototype.releaseShapes = function() {
                    var t;
                    for (t = 0; t < this._length; t += 1) Nt.release(this.shapes[t]);
                    this._length = 0
                };
                var Vt = function() {
                        var t = {
                                newShapeCollection: r,
                                release: n
                            },
                            e = 0,
                            i = 4,
                            s = m(i);

                        function r() {
                            return e ? s[e -= 1] : new zt
                        }

                        function n(t) {
                            var r, n = t._length;
                            for (r = 0; r < n; r += 1) Nt.release(t.shapes[r]);
                            t._length = 0, e === i && (s = dt.double(s), i *= 2), s[e] = t, e += 1
                        }
                        return t
                    }(),
                    jt = function() {
                        var t = -999999;

                        function e(t, e, i) {
                            var s, r, n, a, o, h, l, u, c, p = i.lastIndex,
                                f = this.keyframes;
                            if (t < f[0].t - this.offsetTime) s = f[0].s[0], n = !0, p = 0;
                            else if (t >= f[f.length - 1].t - this.offsetTime) s = f[f.length - 1].s ? f[f.length - 1].s[0] : f[f.length - 2].e[0], n = !0;
                            else {
                                for (var d, m, g, v = p, y = f.length - 1, D = !0; D && (d = f[v], !((m = f[v + 1]).t - this.offsetTime > t));) v < y - 1 ? v += 1 : D = !1;
                                if (g = this.keyframesMetadata[v] || {}, p = v, !(n = 1 === d.h)) {
                                    if (t >= m.t - this.offsetTime) u = 1;
                                    else if (t < d.t - this.offsetTime) u = 0;
                                    else {
                                        var _;
                                        g.__fnct ? _ = g.__fnct : (_ = ft.getBezierEasing(d.o.x, d.o.y, d.i.x, d.i.y).get, g.__fnct = _), u = _((t - (d.t - this.offsetTime)) / (m.t - this.offsetTime - (d.t - this.offsetTime)))
                                    }
                                    r = m.s ? m.s[0] : d.e[0]
                                }
                                s = d.s[0]
                            }
                            for (h = e._length, l = s.i[0].length, i.lastIndex = p, a = 0; a < h; a += 1)
                                for (o = 0; o < l; o += 1) c = n ? s.i[a][o] : s.i[a][o] + (r.i[a][o] - s.i[a][o]) * u, e.i[a][o] = c, c = n ? s.o[a][o] : s.o[a][o] + (r.o[a][o] - s.o[a][o]) * u, e.o[a][o] = c, c = n ? s.v[a][o] : s.v[a][o] + (r.v[a][o] - s.v[a][o]) * u, e.v[a][o] = c
                        }

                        function i() {
                            var e = this.comp.renderedFrame - this.offsetTime,
                                i = this.keyframes[0].t - this.offsetTime,
                                s = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                                r = this._caching.lastFrame;
                            return r !== t && (r < i && e < i || r > s && e > s) || (this._caching.lastIndex = r < e ? this._caching.lastIndex : 0, this.interpolateShape(e, this.pv, this._caching)), this._caching.lastFrame = e, this.pv
                        }

                        function s() {
                            this.paths = this.localShapeCollection
                        }

                        function r(t, e) {
                            if (t._length !== e._length || t.c !== e.c) return !1;
                            var i, s = t._length;
                            for (i = 0; i < s; i += 1)
                                if (t.v[i][0] !== e.v[i][0] || t.v[i][1] !== e.v[i][1] || t.o[i][0] !== e.o[i][0] || t.o[i][1] !== e.o[i][1] || t.i[i][0] !== e.i[i][0] || t.i[i][1] !== e.i[i][1]) return !1;
                            return !0
                        }

                        function n(t) {
                            r(this.v, t) || (this.v = Nt.clone(t), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
                        }

                        function a() {
                            if (this.elem.globalData.frameId !== this.frameId)
                                if (this.effectsSequence.length)
                                    if (this.lock) this.setVValue(this.pv);
                                    else {
                                        var t, e;
                                        this.lock = !0, this._mdf = !1, t = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
                                        var i = this.effectsSequence.length;
                                        for (e = 0; e < i; e += 1) t = this.effectsSequence[e](t);
                                        this.setVValue(t), this.lock = !1, this.frameId = this.elem.globalData.frameId
                                    }
                            else this._mdf = !1
                        }

                        function o(t, e, i) {
                            this.propType = "shape", this.comp = t.comp, this.container = t, this.elem = t, this.data = e, this.k = !1, this.kf = !1, this._mdf = !1;
                            var r = 3 === i ? e.pt.k : e.ks.k;
                            this.v = Nt.clone(r), this.pv = Nt.clone(this.v), this.localShapeCollection = Vt.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = s, this.effectsSequence = []
                        }

                        function h(t) {
                            this.effectsSequence.push(t), this.container.addDynamicProperty(this)
                        }

                        function l(e, r, n) {
                            this.propType = "shape", this.comp = e.comp, this.elem = e, this.container = e, this.offsetTime = e.data.st, this.keyframes = 3 === n ? r.pt.k : r.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
                            var a = this.keyframes[0].s[0].i.length;
                            this.v = Nt.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, a), this.pv = Nt.clone(this.v), this.localShapeCollection = Vt.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = s, this._caching = {
                                lastFrame: t,
                                lastIndex: 0
                            }, this.effectsSequence = [i.bind(this)]
                        }
                        o.prototype.interpolateShape = e, o.prototype.getValue = a, o.prototype.setVValue = n, o.prototype.addEffect = h, l.prototype.getValue = a, l.prototype.interpolateShape = e, l.prototype.setVValue = n, l.prototype.addEffect = h;
                        var u = function() {
                                var t = T;

                                function e(t, e) {
                                    this.v = Nt.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = Vt.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = e.d, this.elem = t, this.comp = t.comp, this.frameId = -1, this.initDynamicPropertyContainer(t), this.p = Ot.getProp(t, e.p, 1, 0, this), this.s = Ot.getProp(t, e.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
                                }
                                return e.prototype = {
                                    reset: s,
                                    getValue: function() {
                                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                                    },
                                    convertEllToPath: function() {
                                        var e = this.p.v[0],
                                            i = this.p.v[1],
                                            s = this.s.v[0] / 2,
                                            r = this.s.v[1] / 2,
                                            n = 3 !== this.d,
                                            a = this.v;
                                        a.v[0][0] = e, a.v[0][1] = i - r, a.v[1][0] = n ? e + s : e - s, a.v[1][1] = i, a.v[2][0] = e, a.v[2][1] = i + r, a.v[3][0] = n ? e - s : e + s, a.v[3][1] = i, a.i[0][0] = n ? e - s * t : e + s * t, a.i[0][1] = i - r, a.i[1][0] = n ? e + s : e - s, a.i[1][1] = i - r * t, a.i[2][0] = n ? e + s * t : e - s * t, a.i[2][1] = i + r, a.i[3][0] = n ? e - s : e + s, a.i[3][1] = i + r * t, a.o[0][0] = n ? e + s * t : e - s * t, a.o[0][1] = i - r, a.o[1][0] = n ? e + s : e - s, a.o[1][1] = i + r * t, a.o[2][0] = n ? e - s * t : e + s * t, a.o[2][1] = i + r, a.o[3][0] = n ? e - s : e + s, a.o[3][1] = i - r * t
                                    }
                                }, c([Lt], e), e
                            }(),
                            p = function() {
                                function t(t, e) {
                                    this.v = Nt.newElement(), this.v.setPathData(!0, 0), this.elem = t, this.comp = t.comp, this.data = e, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), 1 === e.sy ? (this.ir = Ot.getProp(t, e.ir, 0, 0, this), this.is = Ot.getProp(t, e.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = Ot.getProp(t, e.pt, 0, 0, this), this.p = Ot.getProp(t, e.p, 1, 0, this), this.r = Ot.getProp(t, e.r, 0, k, this), this.or = Ot.getProp(t, e.or, 0, 0, this), this.os = Ot.getProp(t, e.os, 0, .01, this), this.localShapeCollection = Vt.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
                                }
                                return t.prototype = {
                                    reset: s,
                                    getValue: function() {
                                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                                    },
                                    convertStarToPath: function() {
                                        var t, e, i, s, r = 2 * Math.floor(this.pt.v),
                                            n = 2 * Math.PI / r,
                                            a = !0,
                                            o = this.or.v,
                                            h = this.ir.v,
                                            l = this.os.v,
                                            u = this.is.v,
                                            c = 2 * Math.PI * o / (2 * r),
                                            p = 2 * Math.PI * h / (2 * r),
                                            f = -Math.PI / 2;
                                        f += this.r.v;
                                        var d = 3 === this.data.d ? -1 : 1;
                                        for (this.v._length = 0, t = 0; t < r; t += 1) {
                                            i = a ? l : u, s = a ? c : p;
                                            var m = (e = a ? o : h) * Math.cos(f),
                                                g = e * Math.sin(f),
                                                v = 0 === m && 0 === g ? 0 : g / Math.sqrt(m * m + g * g),
                                                y = 0 === m && 0 === g ? 0 : -m / Math.sqrt(m * m + g * g);
                                            m += +this.p.v[0], g += +this.p.v[1], this.v.setTripleAt(m, g, m - v * s * i * d, g - y * s * i * d, m + v * s * i * d, g + y * s * i * d, t, !0), a = !a, f += n * d
                                        }
                                    },
                                    convertPolygonToPath: function() {
                                        var t, e = Math.floor(this.pt.v),
                                            i = 2 * Math.PI / e,
                                            s = this.or.v,
                                            r = this.os.v,
                                            n = 2 * Math.PI * s / (4 * e),
                                            a = .5 * -Math.PI,
                                            o = 3 === this.data.d ? -1 : 1;
                                        for (a += this.r.v, this.v._length = 0, t = 0; t < e; t += 1) {
                                            var h = s * Math.cos(a),
                                                l = s * Math.sin(a),
                                                u = 0 === h && 0 === l ? 0 : l / Math.sqrt(h * h + l * l),
                                                c = 0 === h && 0 === l ? 0 : -h / Math.sqrt(h * h + l * l);
                                            h += +this.p.v[0], l += +this.p.v[1], this.v.setTripleAt(h, l, h - u * n * r * o, l - c * n * r * o, h + u * n * r * o, l + c * n * r * o, t, !0), a += i * o
                                        }
                                        this.paths.length = 0, this.paths[0] = this.v
                                    }
                                }, c([Lt], t), t
                            }(),
                            f = function() {
                                function t(t, e) {
                                    this.v = Nt.newElement(), this.v.c = !0, this.localShapeCollection = Vt.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = t, this.comp = t.comp, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), this.p = Ot.getProp(t, e.p, 1, 0, this), this.s = Ot.getProp(t, e.s, 1, 0, this), this.r = Ot.getProp(t, e.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
                                }
                                return t.prototype = {
                                    convertRectToPath: function() {
                                        var t = this.p.v[0],
                                            e = this.p.v[1],
                                            i = this.s.v[0] / 2,
                                            s = this.s.v[1] / 2,
                                            r = x(i, s, this.r.v),
                                            n = r * (1 - T);
                                        this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + i, e - s + r, t + i, e - s + r, t + i, e - s + n, 0, !0), this.v.setTripleAt(t + i, e + s - r, t + i, e + s - n, t + i, e + s - r, 1, !0), 0 !== r ? (this.v.setTripleAt(t + i - r, e + s, t + i - r, e + s, t + i - n, e + s, 2, !0), this.v.setTripleAt(t - i + r, e + s, t - i + n, e + s, t - i + r, e + s, 3, !0), this.v.setTripleAt(t - i, e + s - r, t - i, e + s - r, t - i, e + s - n, 4, !0), this.v.setTripleAt(t - i, e - s + r, t - i, e - s + n, t - i, e - s + r, 5, !0), this.v.setTripleAt(t - i + r, e - s, t - i + r, e - s, t - i + n, e - s, 6, !0), this.v.setTripleAt(t + i - r, e - s, t + i - n, e - s, t + i - r, e - s, 7, !0)) : (this.v.setTripleAt(t - i, e + s, t - i + n, e + s, t - i, e + s, 2), this.v.setTripleAt(t - i, e - s, t - i, e - s + n, t - i, e - s, 3))) : (this.v.setTripleAt(t + i, e - s + r, t + i, e - s + n, t + i, e - s + r, 0, !0), 0 !== r ? (this.v.setTripleAt(t + i - r, e - s, t + i - r, e - s, t + i - n, e - s, 1, !0), this.v.setTripleAt(t - i + r, e - s, t - i + n, e - s, t - i + r, e - s, 2, !0), this.v.setTripleAt(t - i, e - s + r, t - i, e - s + r, t - i, e - s + n, 3, !0), this.v.setTripleAt(t - i, e + s - r, t - i, e + s - n, t - i, e + s - r, 4, !0), this.v.setTripleAt(t - i + r, e + s, t - i + r, e + s, t - i + n, e + s, 5, !0), this.v.setTripleAt(t + i - r, e + s, t + i - n, e + s, t + i - r, e + s, 6, !0), this.v.setTripleAt(t + i, e + s - r, t + i, e + s - r, t + i, e + s - n, 7, !0)) : (this.v.setTripleAt(t - i, e - s, t - i + n, e - s, t - i, e - s, 1, !0), this.v.setTripleAt(t - i, e + s, t - i, e + s - n, t - i, e + s, 2, !0), this.v.setTripleAt(t + i, e + s, t + i - n, e + s, t + i, e + s, 3, !0)))
                                    },
                                    getValue: function() {
                                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                                    },
                                    reset: s
                                }, c([Lt], t), t
                            }();

                        function d(t, e, i) {
                            var s;
                            return 3 === i || 4 === i ? s = (3 === i ? e.pt : e.ks).k.length ? new l(t, e, i) : new o(t, e, i) : 5 === i ? s = new f(t, e) : 6 === i ? s = new u(t, e) : 7 === i && (s = new p(t, e)), s.k && t.addDynamicProperty(s), s
                        }

                        function m() {
                            return o
                        }

                        function g() {
                            return l
                        }
                        var v = {};
                        return v.getShapeProp = d, v.getConstructorFunction = m, v.getKeyframedConstructorFunction = g, v
                    }(),
                    qt = function() {
                        var t = Math.cos,
                            e = Math.sin,
                            i = Math.tan,
                            s = Math.round;

                        function r() {
                            return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
                        }

                        function n(i) {
                            if (0 === i) return this;
                            var s = t(i),
                                r = e(i);
                            return this._t(s, -r, 0, 0, r, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                        }

                        function a(i) {
                            if (0 === i) return this;
                            var s = t(i),
                                r = e(i);
                            return this._t(1, 0, 0, 0, 0, s, -r, 0, 0, r, s, 0, 0, 0, 0, 1)
                        }

                        function o(i) {
                            if (0 === i) return this;
                            var s = t(i),
                                r = e(i);
                            return this._t(s, 0, r, 0, 0, 1, 0, 0, -r, 0, s, 0, 0, 0, 0, 1)
                        }

                        function h(i) {
                            if (0 === i) return this;
                            var s = t(i),
                                r = e(i);
                            return this._t(s, -r, 0, 0, r, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                        }

                        function l(t, e) {
                            return this._t(1, e, t, 1, 0, 0)
                        }

                        function u(t, e) {
                            return this.shear(i(t), i(e))
                        }

                        function c(s, r) {
                            var n = t(r),
                                a = e(r);
                            return this._t(n, a, 0, 0, -a, n, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, i(s), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(n, -a, 0, 0, a, n, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                        }

                        function p(t, e, i) {
                            return i || 0 === i || (i = 1), 1 === t && 1 === e && 1 === i ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1)
                        }

                        function f(t, e, i, s, r, n, a, o, h, l, u, c, p, f, d, m) {
                            return this.props[0] = t, this.props[1] = e, this.props[2] = i, this.props[3] = s, this.props[4] = r, this.props[5] = n, this.props[6] = a, this.props[7] = o, this.props[8] = h, this.props[9] = l, this.props[10] = u, this.props[11] = c, this.props[12] = p, this.props[13] = f, this.props[14] = d, this.props[15] = m, this
                        }

                        function m(t, e, i) {
                            return i = i || 0, 0 !== t || 0 !== e || 0 !== i ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, i, 1) : this
                        }

                        function g(t, e, i, s, r, n, a, o, h, l, u, c, p, f, d, m) {
                            var g = this.props;
                            if (1 === t && 0 === e && 0 === i && 0 === s && 0 === r && 1 === n && 0 === a && 0 === o && 0 === h && 0 === l && 1 === u && 0 === c) return g[12] = g[12] * t + g[15] * p, g[13] = g[13] * n + g[15] * f, g[14] = g[14] * u + g[15] * d, g[15] *= m, this._identityCalculated = !1, this;
                            var v = g[0],
                                y = g[1],
                                D = g[2],
                                _ = g[3],
                                b = g[4],
                                C = g[5],
                                w = g[6],
                                E = g[7],
                                x = g[8],
                                S = g[9],
                                F = g[10],
                                k = g[11],
                                T = g[12],
                                A = g[13],
                                M = g[14],
                                P = g[15];
                            return g[0] = v * t + y * r + D * h + _ * p, g[1] = v * e + y * n + D * l + _ * f, g[2] = v * i + y * a + D * u + _ * d, g[3] = v * s + y * o + D * c + _ * m, g[4] = b * t + C * r + w * h + E * p, g[5] = b * e + C * n + w * l + E * f, g[6] = b * i + C * a + w * u + E * d, g[7] = b * s + C * o + w * c + E * m, g[8] = x * t + S * r + F * h + k * p, g[9] = x * e + S * n + F * l + k * f, g[10] = x * i + S * a + F * u + k * d, g[11] = x * s + S * o + F * c + k * m, g[12] = T * t + A * r + M * h + P * p, g[13] = T * e + A * n + M * l + P * f, g[14] = T * i + A * a + M * u + P * d, g[15] = T * s + A * o + M * c + P * m, this._identityCalculated = !1, this
                        }

                        function v(t) {
                            var e = t.props;
                            return this.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15])
                        }

                        function y() {
                            return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity
                        }

                        function D(t) {
                            for (var e = 0; e < 16;) {
                                if (t.props[e] !== this.props[e]) return !1;
                                e += 1
                            }
                            return !0
                        }

                        function _(t) {
                            var e;
                            for (e = 0; e < 16; e += 1) t.props[e] = this.props[e];
                            return t
                        }

                        function b(t) {
                            var e;
                            for (e = 0; e < 16; e += 1) this.props[e] = t[e]
                        }

                        function C(t, e, i) {
                            return {
                                x: t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12],
                                y: t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13],
                                z: t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
                            }
                        }

                        function w(t, e, i) {
                            return t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12]
                        }

                        function E(t, e, i) {
                            return t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13]
                        }

                        function x(t, e, i) {
                            return t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
                        }

                        function S() {
                            var t = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                                e = this.props[5] / t,
                                i = -this.props[1] / t,
                                s = -this.props[4] / t,
                                r = this.props[0] / t,
                                n = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t,
                                a = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t,
                                o = new qt;
                            return o.props[0] = e, o.props[1] = i, o.props[4] = s, o.props[5] = r, o.props[12] = n, o.props[13] = a, o
                        }

                        function F(t) {
                            return this.getInverseMatrix().applyToPointArray(t[0], t[1], t[2] || 0)
                        }

                        function k(t) {
                            var e, i = t.length,
                                s = [];
                            for (e = 0; e < i; e += 1) s[e] = F(t[e]);
                            return s
                        }

                        function T(t, e, i) {
                            var s = d("float32", 6);
                            if (this.isIdentity()) s[0] = t[0], s[1] = t[1], s[2] = e[0], s[3] = e[1], s[4] = i[0], s[5] = i[1];
                            else {
                                var r = this.props[0],
                                    n = this.props[1],
                                    a = this.props[4],
                                    o = this.props[5],
                                    h = this.props[12],
                                    l = this.props[13];
                                s[0] = t[0] * r + t[1] * a + h, s[1] = t[0] * n + t[1] * o + l, s[2] = e[0] * r + e[1] * a + h, s[3] = e[0] * n + e[1] * o + l, s[4] = i[0] * r + i[1] * a + h, s[5] = i[0] * n + i[1] * o + l
                            }
                            return s
                        }

                        function A(t, e, i) {
                            return this.isIdentity() ? [t, e, i] : [t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]]
                        }

                        function M(t, e) {
                            if (this.isIdentity()) return t + "," + e;
                            var i = this.props;
                            return Math.round(100 * (t * i[0] + e * i[4] + i[12])) / 100 + "," + Math.round(100 * (t * i[1] + e * i[5] + i[13])) / 100
                        }

                        function P() {
                            for (var t = 0, e = this.props, i = "matrix3d(", r = 1e4; t < 16;) i += s(e[t] * r) / r, i += 15 === t ? ")" : ",", t += 1;
                            return i
                        }

                        function I(t) {
                            var e = 1e4;
                            return t < 1e-6 && t > 0 || t > -1e-6 && t < 0 ? s(t * e) / e : t
                        }

                        function O() {
                            var t = this.props;
                            return "matrix(" + I(t[0]) + "," + I(t[1]) + "," + I(t[4]) + "," + I(t[5]) + "," + I(t[12]) + "," + I(t[13]) + ")"
                        }
                        return function() {
                            this.reset = r, this.rotate = n, this.rotateX = a, this.rotateY = o, this.rotateZ = h, this.skew = u, this.skewFromAxis = c, this.shear = l, this.scale = p, this.setTransform = f, this.translate = m, this.transform = g, this.multiply = v, this.applyToPoint = C, this.applyToX = w, this.applyToY = E, this.applyToZ = x, this.applyToPointArray = A, this.applyToTriplePoints = T, this.applyToPointStringified = M, this.toCSS = P, this.to2dCSS = O, this.clone = _, this.cloneFromProps = b, this.equals = D, this.inversePoints = k, this.inversePoint = F, this.getInverseMatrix = S, this._t = this.transform, this.isIdentity = y, this._identity = !0, this._identityCalculated = !1, this.props = d("float32", 16), this.reset()
                        }
                    }();

                function Wt(t) {
                    return Wt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }, Wt(t)
                }
                var Ht = {},
                    Yt = "__[STANDALONE]__",
                    Ut = "__[ANIMATIONDATA]__",
                    Xt = "";

                function Gt(t) {
                    h(t)
                }

                function $t() {
                    !0 === Yt ? pt.searchAnimations(Ut, Yt, Xt) : pt.searchAnimations()
                }

                function Kt(t) {
                    Y(t)
                }

                function Jt(t) {
                    Z(t)
                }

                function Zt(t) {
                    return !0 === Yt && (t.animationData = JSON.parse(Ut)), pt.loadAnimation(t)
                }

                function Qt(t) {
                    if ("string" == typeof t) switch (t) {
                        case "high":
                            K(200);
                            break;
                        default:
                        case "medium":
                            K(50);
                            break;
                        case "low":
                            K(10)
                    } else !isNaN(t) && t > 1 && K(t);
                    J() >= 50 ? A(!1) : A(!0)
                }

                function te() {
                    return "undefined" != typeof navigator
                }

                function ee(t, e) {
                    "expressions" === t && X(e)
                }

                function ie(t) {
                    switch (t) {
                        case "propertyFactory":
                            return Ot;
                        case "shapePropertyFactory":
                            return jt;
                        case "matrix":
                            return qt;
                        default:
                            return null
                    }
                }

                function se() {
                    "complete" === document.readyState && (clearInterval(he), $t())
                }

                function re(t) {
                    for (var e = ne.split("&"), i = 0; i < e.length; i += 1) {
                        var s = e[i].split("=");
                        if (decodeURIComponent(s[0]) == t) return decodeURIComponent(s[1])
                    }
                    return null
                }
                Ht.play = pt.play, Ht.pause = pt.pause, Ht.setLocationHref = Gt, Ht.togglePause = pt.togglePause, Ht.setSpeed = pt.setSpeed, Ht.setDirection = pt.setDirection, Ht.stop = pt.stop, Ht.searchAnimations = $t, Ht.registerAnimation = pt.registerAnimation, Ht.loadAnimation = Zt, Ht.setSubframeRendering = Kt, Ht.resize = pt.resize, Ht.goToAndStop = pt.goToAndStop, Ht.destroy = pt.destroy, Ht.setQuality = Qt, Ht.inBrowser = te, Ht.installPlugin = ee, Ht.freeze = pt.freeze, Ht.unfreeze = pt.unfreeze, Ht.setVolume = pt.setVolume, Ht.mute = pt.mute, Ht.unmute = pt.unmute, Ht.getRegisteredAnimations = pt.getRegisteredAnimations, Ht.useWebWorker = a, Ht.setIDPrefix = Jt, Ht.__getFactory = ie, Ht.version = "5.12.2";
                var ne = "";
                if (Yt) {
                    var ae = document.getElementsByTagName("script"),
                        oe = ae[ae.length - 1] || {
                            src: ""
                        };
                    ne = oe.src ? oe.src.replace(/^[^\?]+\??/, "") : "", Xt = re("renderer")
                }
                var he = setInterval(se, 100);
                try {
                    "object" !== Wt(e) && i.amdO
                } catch (t) {}
                var le = function() {
                    var t = {},
                        e = {};

                    function i(t, i) {
                        e[t] || (e[t] = i)
                    }

                    function s(t, i, s) {
                        return new e[t](i, s)
                    }
                    return t.registerModifier = i, t.getModifier = s, t
                }();

                function ue() {}

                function ce() {}

                function pe() {}
                ue.prototype.initModifierProperties = function() {}, ue.prototype.addShapeToModifier = function() {}, ue.prototype.addShape = function(t) {
                    if (!this.closed) {
                        t.sh.container.addDynamicProperty(t.sh);
                        var e = {
                            shape: t.sh,
                            data: t,
                            localShapeCollection: Vt.newShapeCollection()
                        };
                        this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated()
                    }
                }, ue.prototype.init = function(t, e) {
                    this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = n, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
                }, ue.prototype.processKeys = function() {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
                }, c([Lt], ue), c([ue], ce), ce.prototype.initModifierProperties = function(t, e) {
                    this.s = Ot.getProp(t, e.s, 0, .01, this), this.e = Ot.getProp(t, e.e, 0, .01, this), this.o = Ot.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
                }, ce.prototype.addShapeToModifier = function(t) {
                    t.pathsData = []
                }, ce.prototype.calculateShapeEdges = function(t, e, i, s, r) {
                    var n = [];
                    e <= 1 ? n.push({
                        s: t,
                        e: e
                    }) : t >= 1 ? n.push({
                        s: t - 1,
                        e: e - 1
                    }) : (n.push({
                        s: t,
                        e: 1
                    }), n.push({
                        s: 0,
                        e: e - 1
                    }));
                    var a, o, h = [],
                        l = n.length;
                    for (a = 0; a < l; a += 1) {
                        var u, c;
                        (o = n[a]).e * r < s || o.s * r > s + i || (u = o.s * r <= s ? 0 : (o.s * r - s) / i, c = o.e * r >= s + i ? 1 : (o.e * r - s) / i, h.push([u, c]))
                    }
                    return h.length || h.push([0, 0]), h
                }, ce.prototype.releasePathsData = function(t) {
                    var e, i = t.length;
                    for (e = 0; e < i; e += 1) vt.release(t[e]);
                    return t.length = 0, t
                }, ce.prototype.processShapes = function(t) {
                    var e, i, s, r;
                    if (this._mdf || t) {
                        var n = this.o.v % 360 / 360;
                        if (n < 0 && (n += 1), (e = this.s.v > 1 ? 1 + n : this.s.v < 0 ? 0 + n : this.s.v + n) > (i = this.e.v > 1 ? 1 + n : this.e.v < 0 ? 0 + n : this.e.v + n)) {
                            var a = e;
                            e = i, i = a
                        }
                        e = 1e-4 * Math.round(1e4 * e), i = 1e-4 * Math.round(1e4 * i), this.sValue = e, this.eValue = i
                    } else e = this.sValue, i = this.eValue;
                    var o, h, l, u, c, p = this.shapes.length,
                        f = 0;
                    if (i === e)
                        for (r = 0; r < p; r += 1) this.shapes[r].localShapeCollection.releaseShapes(), this.shapes[r].shape._mdf = !0, this.shapes[r].shape.paths = this.shapes[r].localShapeCollection, this._mdf && (this.shapes[r].pathsData.length = 0);
                    else if (1 === i && 0 === e || 0 === i && 1 === e) {
                        if (this._mdf)
                            for (r = 0; r < p; r += 1) this.shapes[r].pathsData.length = 0, this.shapes[r].shape._mdf = !0
                    } else {
                        var d, m, g = [];
                        for (r = 0; r < p; r += 1)
                            if ((d = this.shapes[r]).shape._mdf || this._mdf || t || 2 === this.m) {
                                if (h = (s = d.shape.paths)._length, c = 0, !d.shape._mdf && d.pathsData.length) c = d.totalShapeLength;
                                else {
                                    for (l = this.releasePathsData(d.pathsData), o = 0; o < h; o += 1) u = Dt.getSegmentsLength(s.shapes[o]), l.push(u), c += u.totalLength;
                                    d.totalShapeLength = c, d.pathsData = l
                                }
                                f += c, d.shape._mdf = !0
                            } else d.shape.paths = d.localShapeCollection;
                        var v, y = e,
                            D = i,
                            _ = 0;
                        for (r = p - 1; r >= 0; r -= 1)
                            if ((d = this.shapes[r]).shape._mdf) {
                                for ((m = d.localShapeCollection).releaseShapes(), 2 === this.m && p > 1 ? (v = this.calculateShapeEdges(e, i, d.totalShapeLength, _, f), _ += d.totalShapeLength) : v = [
                                        [y, D]
                                    ], h = v.length, o = 0; o < h; o += 1) {
                                    y = v[o][0], D = v[o][1], g.length = 0, D <= 1 ? g.push({
                                        s: d.totalShapeLength * y,
                                        e: d.totalShapeLength * D
                                    }) : y >= 1 ? g.push({
                                        s: d.totalShapeLength * (y - 1),
                                        e: d.totalShapeLength * (D - 1)
                                    }) : (g.push({
                                        s: d.totalShapeLength * y,
                                        e: d.totalShapeLength
                                    }), g.push({
                                        s: 0,
                                        e: d.totalShapeLength * (D - 1)
                                    }));
                                    var b = this.addShapes(d, g[0]);
                                    if (g[0].s !== g[0].e) {
                                        if (g.length > 1)
                                            if (d.shape.paths.shapes[d.shape.paths._length - 1].c) {
                                                var C = b.pop();
                                                this.addPaths(b, m), b = this.addShapes(d, g[1], C)
                                            } else this.addPaths(b, m), b = this.addShapes(d, g[1]);
                                        this.addPaths(b, m)
                                    }
                                }
                                d.shape.paths = m
                            }
                    }
                }, ce.prototype.addPaths = function(t, e) {
                    var i, s = t.length;
                    for (i = 0; i < s; i += 1) e.addShape(t[i])
                }, ce.prototype.addSegment = function(t, e, i, s, r, n, a) {
                    r.setXYAt(e[0], e[1], "o", n), r.setXYAt(i[0], i[1], "i", n + 1), a && r.setXYAt(t[0], t[1], "v", n), r.setXYAt(s[0], s[1], "v", n + 1)
                }, ce.prototype.addSegmentFromArray = function(t, e, i, s) {
                    e.setXYAt(t[1], t[5], "o", i), e.setXYAt(t[2], t[6], "i", i + 1), s && e.setXYAt(t[0], t[4], "v", i), e.setXYAt(t[3], t[7], "v", i + 1)
                }, ce.prototype.addShapes = function(t, e, i) {
                    var s, r, n, a, o, h, l, u, c = t.pathsData,
                        p = t.shape.paths.shapes,
                        f = t.shape.paths._length,
                        d = 0,
                        m = [],
                        g = !0;
                    for (i ? (o = i._length, u = i._length) : (i = Nt.newElement(), o = 0, u = 0), m.push(i), s = 0; s < f; s += 1) {
                        for (h = c[s].lengths, i.c = p[s].c, n = p[s].c ? h.length : h.length + 1, r = 1; r < n; r += 1)
                            if (d + (a = h[r - 1]).addedLength < e.s) d += a.addedLength, i.c = !1;
                            else {
                                if (d > e.e) {
                                    i.c = !1;
                                    break
                                }
                                e.s <= d && e.e >= d + a.addedLength ? (this.addSegment(p[s].v[r - 1], p[s].o[r - 1], p[s].i[r], p[s].v[r], i, o, g), g = !1) : (l = Dt.getNewSegment(p[s].v[r - 1], p[s].v[r], p[s].o[r - 1], p[s].i[r], (e.s - d) / a.addedLength, (e.e - d) / a.addedLength, h[r - 1]), this.addSegmentFromArray(l, i, o, g), g = !1, i.c = !1), d += a.addedLength, o += 1
                            } if (p[s].c && h.length) {
                            if (a = h[r - 1], d <= e.e) {
                                var v = h[r - 1].addedLength;
                                e.s <= d && e.e >= d + v ? (this.addSegment(p[s].v[r - 1], p[s].o[r - 1], p[s].i[0], p[s].v[0], i, o, g), g = !1) : (l = Dt.getNewSegment(p[s].v[r - 1], p[s].v[0], p[s].o[r - 1], p[s].i[0], (e.s - d) / v, (e.e - d) / v, h[r - 1]), this.addSegmentFromArray(l, i, o, g), g = !1, i.c = !1)
                            } else i.c = !1;
                            d += a.addedLength, o += 1
                        }
                        if (i._length && (i.setXYAt(i.v[u][0], i.v[u][1], "i", u), i.setXYAt(i.v[i._length - 1][0], i.v[i._length - 1][1], "o", i._length - 1)), d > e.e) break;
                        s < f - 1 && (i = Nt.newElement(), g = !0, m.push(i), o = 0)
                    }
                    return m
                }, c([ue], pe), pe.prototype.initModifierProperties = function(t, e) {
                    this.getValue = this.processKeys, this.amount = Ot.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
                }, pe.prototype.processPath = function(t, e) {
                    var i = e / 100,
                        s = [0, 0],
                        r = t._length,
                        n = 0;
                    for (n = 0; n < r; n += 1) s[0] += t.v[n][0], s[1] += t.v[n][1];
                    s[0] /= r, s[1] /= r;
                    var a, o, h, l, u, c, p = Nt.newElement();
                    for (p.c = t.c, n = 0; n < r; n += 1) a = t.v[n][0] + (s[0] - t.v[n][0]) * i, o = t.v[n][1] + (s[1] - t.v[n][1]) * i, h = t.o[n][0] + (s[0] - t.o[n][0]) * -i, l = t.o[n][1] + (s[1] - t.o[n][1]) * -i, u = t.i[n][0] + (s[0] - t.i[n][0]) * -i, c = t.i[n][1] + (s[1] - t.i[n][1]) * -i, p.setTripleAt(a, o, h, l, u, c, n);
                    return p
                }, pe.prototype.processShapes = function(t) {
                    var e, i, s, r, n, a, o = this.shapes.length,
                        h = this.amount.v;
                    if (0 !== h)
                        for (i = 0; i < o; i += 1) {
                            if (a = (n = this.shapes[i]).localShapeCollection, n.shape._mdf || this._mdf || t)
                                for (a.releaseShapes(), n.shape._mdf = !0, e = n.shape.paths.shapes, r = n.shape.paths._length, s = 0; s < r; s += 1) a.addShape(this.processPath(e[s], h));
                            n.shape.paths = n.localShapeCollection
                        }
                    this.dynamicProperties.length || (this._mdf = !1)
                };
                var fe = function() {
                    var t = [0, 0];

                    function e(t) {
                        var e = this._mdf;
                        this.iterateDynamicProperties(), this._mdf = this._mdf || e, this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t.skewFromAxis(-this.sk.v, this.sa.v), this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                    }

                    function i(e) {
                        if (this.elem.globalData.frameId !== this.frameId) {
                            if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || e) {
                                var i;
                                if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                                    var s, r;
                                    if (i = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (s = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / i, 0), r = this.p.getValueAtTime(this.p.keyframes[0].t / i, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (s = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / i, 0), r = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / i, 0)) : (s = this.p.pv, r = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / i, this.p.offsetTime));
                                    else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                        s = [], r = [];
                                        var n = this.px,
                                            a = this.py;
                                        n._caching.lastFrame + n.offsetTime <= n.keyframes[0].t ? (s[0] = n.getValueAtTime((n.keyframes[0].t + .01) / i, 0), s[1] = a.getValueAtTime((a.keyframes[0].t + .01) / i, 0), r[0] = n.getValueAtTime(n.keyframes[0].t / i, 0), r[1] = a.getValueAtTime(a.keyframes[0].t / i, 0)) : n._caching.lastFrame + n.offsetTime >= n.keyframes[n.keyframes.length - 1].t ? (s[0] = n.getValueAtTime(n.keyframes[n.keyframes.length - 1].t / i, 0), s[1] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / i, 0), r[0] = n.getValueAtTime((n.keyframes[n.keyframes.length - 1].t - .01) / i, 0), r[1] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - .01) / i, 0)) : (s = [n.pv, a.pv], r[0] = n.getValueAtTime((n._caching.lastFrame + n.offsetTime - .01) / i, n.offsetTime), r[1] = a.getValueAtTime((a._caching.lastFrame + a.offsetTime - .01) / i, a.offsetTime))
                                    } else s = r = t;
                                    this.v.rotate(-Math.atan2(s[1] - r[1], s[0] - r[0]))
                                }
                                this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                            }
                            this.frameId = this.elem.globalData.frameId
                        }
                    }

                    function s() {
                        if (this.appliedTransformations = 0, this.pre.reset(), !this.a.effectsSequence.length && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
                            if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                                if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                                this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
                            }
                            this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
                        }
                    }

                    function r() {}

                    function n(t) {
                        this._addDynamicProperty(t), this.elem.addDynamicProperty(t), this._isDirty = !0
                    }

                    function a(t, e, i) {
                        if (this.elem = t, this.frameId = -1, this.propType = "transform", this.data = e, this.v = new qt, this.pre = new qt, this.appliedTransformations = 0, this.initDynamicPropertyContainer(i || t), e.p && e.p.s ? (this.px = Ot.getProp(t, e.p.x, 0, 0, this), this.py = Ot.getProp(t, e.p.y, 0, 0, this), e.p.z && (this.pz = Ot.getProp(t, e.p.z, 0, 0, this))) : this.p = Ot.getProp(t, e.p || {
                                k: [0, 0, 0]
                            }, 1, 0, this), e.rx) {
                            if (this.rx = Ot.getProp(t, e.rx, 0, k, this), this.ry = Ot.getProp(t, e.ry, 0, k, this), this.rz = Ot.getProp(t, e.rz, 0, k, this), e.or.k[0].ti) {
                                var s, r = e.or.k.length;
                                for (s = 0; s < r; s += 1) e.or.k[s].to = null, e.or.k[s].ti = null
                            }
                            this.or = Ot.getProp(t, e.or, 1, k, this), this.or.sh = !0
                        } else this.r = Ot.getProp(t, e.r || {
                            k: 0
                        }, 0, k, this);
                        e.sk && (this.sk = Ot.getProp(t, e.sk, 0, k, this), this.sa = Ot.getProp(t, e.sa, 0, k, this)), this.a = Ot.getProp(t, e.a || {
                            k: [0, 0, 0]
                        }, 1, 0, this), this.s = Ot.getProp(t, e.s || {
                            k: [100, 100, 100]
                        }, 1, .01, this), e.o ? this.o = Ot.getProp(t, e.o, 0, .01, t) : this.o = {
                            _mdf: !1,
                            v: 1
                        }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
                    }

                    function o(t, e, i) {
                        return new a(t, e, i)
                    }
                    return a.prototype = {
                        applyToMatrix: e,
                        getValue: i,
                        precalculateMatrix: s,
                        autoOrient: r
                    }, c([Lt], a), a.prototype.addDynamicProperty = n, a.prototype._addDynamicProperty = Lt.prototype.addDynamicProperty, {
                        getTransformProperty: o
                    }
                }();

                function de() {}

                function me() {}

                function ge(t, e) {
                    return 1e5 * Math.abs(t - e) <= Math.min(Math.abs(t), Math.abs(e))
                }

                function ve(t) {
                    return Math.abs(t) <= 1e-5
                }

                function ye(t, e, i) {
                    return t * (1 - i) + e * i
                }

                function De(t, e, i) {
                    return [ye(t[0], e[0], i), ye(t[1], e[1], i)]
                }

                function _e(t, e, i) {
                    if (0 === t) return [];
                    var s = e * e - 4 * t * i;
                    if (s < 0) return [];
                    var r = -e / (2 * t);
                    if (0 === s) return [r];
                    var n = Math.sqrt(s) / (2 * t);
                    return [r - n, r + n]
                }

                function be(t, e, i, s) {
                    return [3 * e - t - 3 * i + s, 3 * t - 6 * e + 3 * i, -3 * t + 3 * e, t]
                }

                function Ce(t) {
                    return new we(t, t, t, t, !1)
                }

                function we(t, e, i, s, r) {
                    r && Ie(t, e) && (e = De(t, s, 1 / 3)), r && Ie(i, s) && (i = De(t, s, 2 / 3));
                    var n = be(t[0], e[0], i[0], s[0]),
                        a = be(t[1], e[1], i[1], s[1]);
                    this.a = [n[0], a[0]], this.b = [n[1], a[1]], this.c = [n[2], a[2]], this.d = [n[3], a[3]], this.points = [t, e, i, s]
                }

                function Ee(t, e) {
                    var i = t.points[0][e],
                        s = t.points[t.points.length - 1][e];
                    if (i > s) {
                        var r = s;
                        s = i, i = r
                    }
                    for (var n = _e(3 * t.a[e], 2 * t.b[e], t.c[e]), a = 0; a < n.length; a += 1)
                        if (n[a] > 0 && n[a] < 1) {
                            var o = t.point(n[a])[e];
                            o < i ? i = o : o > s && (s = o)
                        } return {
                        min: i,
                        max: s
                    }
                }

                function xe(t, e, i) {
                    var s = t.boundingBox();
                    return {
                        cx: s.cx,
                        cy: s.cy,
                        width: s.width,
                        height: s.height,
                        bez: t,
                        t: (e + i) / 2,
                        t1: e,
                        t2: i
                    }
                }

                function Se(t) {
                    var e = t.bez.split(.5);
                    return [xe(e[0], t.t1, t.t), xe(e[1], t.t, t.t2)]
                }

                function Fe(t, e) {
                    return 2 * Math.abs(t.cx - e.cx) < t.width + e.width && 2 * Math.abs(t.cy - e.cy) < t.height + e.height
                }

                function ke(t, e, i, s, r, n) {
                    if (Fe(t, e))
                        if (i >= n || t.width <= s && t.height <= s && e.width <= s && e.height <= s) r.push([t.t, e.t]);
                        else {
                            var a = Se(t),
                                o = Se(e);
                            ke(a[0], o[0], i + 1, s, r, n), ke(a[0], o[1], i + 1, s, r, n), ke(a[1], o[0], i + 1, s, r, n), ke(a[1], o[1], i + 1, s, r, n)
                        }
                }

                function Te(t, e) {
                    return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]
                }

                function Ae(t, e, i, s) {
                    var r = [t[0], t[1], 1],
                        n = [e[0], e[1], 1],
                        a = [i[0], i[1], 1],
                        o = [s[0], s[1], 1],
                        h = Te(Te(r, n), Te(a, o));
                    return ve(h[2]) ? null : [h[0] / h[2], h[1] / h[2]]
                }

                function Me(t, e, i) {
                    return [t[0] + Math.cos(e) * i, t[1] - Math.sin(e) * i]
                }

                function Pe(t, e) {
                    return Math.hypot(t[0] - e[0], t[1] - e[1])
                }

                function Ie(t, e) {
                    return ge(t[0], e[0]) && ge(t[1], e[1])
                }

                function Oe() {}

                function Le(t, e, i, s, r, n, a) {
                    var o = i - Math.PI / 2,
                        h = i + Math.PI / 2,
                        l = e[0] + Math.cos(i) * s * r,
                        u = e[1] - Math.sin(i) * s * r;
                    t.setTripleAt(l, u, l + Math.cos(o) * n, u - Math.sin(o) * n, l + Math.cos(h) * a, u - Math.sin(h) * a, t.length())
                }

                function Re(t, e) {
                    var i = [e[0] - t[0], e[1] - t[1]],
                        s = .5 * -Math.PI;
                    return [Math.cos(s) * i[0] - Math.sin(s) * i[1], Math.sin(s) * i[0] + Math.cos(s) * i[1]]
                }

                function Be(t, e) {
                    var i = 0 === e ? t.length() - 1 : e - 1,
                        s = (e + 1) % t.length(),
                        r = Re(t.v[i], t.v[s]);
                    return Math.atan2(0, 1) - Math.atan2(r[1], r[0])
                }

                function Ne(t, e, i, s, r, n, a) {
                    var o = Be(e, i),
                        h = e.v[i % e._length],
                        l = e.v[0 === i ? e._length - 1 : i - 1],
                        u = e.v[(i + 1) % e._length],
                        c = 2 === n ? Math.sqrt(Math.pow(h[0] - l[0], 2) + Math.pow(h[1] - l[1], 2)) : 0,
                        p = 2 === n ? Math.sqrt(Math.pow(h[0] - u[0], 2) + Math.pow(h[1] - u[1], 2)) : 0;
                    Le(t, e.v[i % e._length], o, a, s, p / (2 * (r + 1)), c / (2 * (r + 1)), n)
                }

                function ze(t, e, i, s, r, n) {
                    for (var a = 0; a < s; a += 1) {
                        var o = (a + 1) / (s + 1),
                            h = 2 === r ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0,
                            l = e.normalAngle(o);
                        Le(t, e.point(o), l, n, i, h / (2 * (s + 1)), h / (2 * (s + 1)), r), n = -n
                    }
                    return n
                }

                function Ve(t, e, i) {
                    var s = Math.atan2(e[0] - t[0], e[1] - t[1]);
                    return [Me(t, s, i), Me(e, s, i)]
                }

                function je(t, e) {
                    var i, s, r, n, a, o, h;
                    i = (h = Ve(t.points[0], t.points[1], e))[0], s = h[1], r = (h = Ve(t.points[1], t.points[2], e))[0], n = h[1], a = (h = Ve(t.points[2], t.points[3], e))[0], o = h[1];
                    var l = Ae(i, s, r, n);
                    null === l && (l = s);
                    var u = Ae(a, o, r, n);
                    return null === u && (u = a), new we(i, l, u, o)
                }

                function qe(t, e, i, s, r) {
                    var n = e.points[3],
                        a = i.points[0];
                    if (3 === s) return n;
                    if (Ie(n, a)) return n;
                    if (2 === s) {
                        var o = -e.tangentAngle(1),
                            h = -i.tangentAngle(0) + Math.PI,
                            l = Ae(n, Me(n, o + Math.PI / 2, 100), a, Me(a, o + Math.PI / 2, 100)),
                            u = l ? Pe(l, n) : Pe(n, a) / 2,
                            c = Me(n, o, 2 * u * T);
                        return t.setXYAt(c[0], c[1], "o", t.length() - 1), c = Me(a, h, 2 * u * T), t.setTripleAt(a[0], a[1], a[0], a[1], c[0], c[1], t.length()), a
                    }
                    var p = Ae(Ie(n, e.points[2]) ? e.points[0] : e.points[2], n, a, Ie(a, i.points[1]) ? i.points[3] : i.points[1]);
                    return p && Pe(p, n) < r ? (t.setTripleAt(p[0], p[1], p[0], p[1], p[0], p[1], t.length()), p) : n
                }

                function We(t, e) {
                    var i = t.intersections(e);
                    return i.length && ge(i[0][0], 1) && i.shift(), i.length ? i[0] : null
                }

                function He(t, e) {
                    var i = t.slice(),
                        s = e.slice(),
                        r = We(t[t.length - 1], e[0]);
                    return r && (i[t.length - 1] = t[t.length - 1].split(r[0])[0], s[0] = e[0].split(r[1])[1]), t.length > 1 && e.length > 1 && (r = We(t[0], e[e.length - 1])) ? [
                        [t[0].split(r[0])[0]],
                        [e[e.length - 1].split(r[1])[1]]
                    ] : [i, s]
                }

                function Ye(t) {
                    for (var e, i = 1; i < t.length; i += 1) e = He(t[i - 1], t[i]), t[i - 1] = e[0], t[i] = e[1];
                    return t.length > 1 && (e = He(t[t.length - 1], t[0]), t[t.length - 1] = e[0], t[0] = e[1]), t
                }

                function Ue(t, e) {
                    var i, s, r, n, a = t.inflectionPoints();
                    if (0 === a.length) return [je(t, e)];
                    if (1 === a.length || ge(a[1], 1)) return i = (r = t.split(a[0]))[0], s = r[1], [je(i, e), je(s, e)];
                    i = (r = t.split(a[0]))[0];
                    var o = (a[1] - a[0]) / (1 - a[0]);
                    return n = (r = r[1].split(o))[0], s = r[1], [je(i, e), je(n, e), je(s, e)]
                }

                function Xe() {}

                function Ge(t) {
                    for (var e = t.fStyle ? t.fStyle.split(" ") : [], i = "normal", s = "normal", r = e.length, n = 0; n < r; n += 1) switch (e[n].toLowerCase()) {
                        case "italic":
                            s = "italic";
                            break;
                        case "bold":
                            i = "700";
                            break;
                        case "black":
                            i = "900";
                            break;
                        case "medium":
                            i = "500";
                            break;
                        case "regular":
                        case "normal":
                            i = "400";
                            break;
                        case "light":
                        case "thin":
                            i = "200"
                    }
                    return {
                        style: s,
                        weight: t.fWeight || i
                    }
                }
                c([ue], de), de.prototype.initModifierProperties = function(t, e) {
                    this.getValue = this.processKeys, this.c = Ot.getProp(t, e.c, 0, null, this), this.o = Ot.getProp(t, e.o, 0, null, this), this.tr = fe.getTransformProperty(t, e.tr, this), this.so = Ot.getProp(t, e.tr.so, 0, .01, this), this.eo = Ot.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new qt, this.rMatrix = new qt, this.sMatrix = new qt, this.tMatrix = new qt, this.matrix = new qt
                }, de.prototype.applyTransforms = function(t, e, i, s, r, n) {
                    var a = n ? -1 : 1,
                        o = s.s.v[0] + (1 - s.s.v[0]) * (1 - r),
                        h = s.s.v[1] + (1 - s.s.v[1]) * (1 - r);
                    t.translate(s.p.v[0] * a * r, s.p.v[1] * a * r, s.p.v[2]), e.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]), e.rotate(-s.r.v * a * r), e.translate(s.a.v[0], s.a.v[1], s.a.v[2]), i.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]), i.scale(n ? 1 / o : o, n ? 1 / h : h), i.translate(s.a.v[0], s.a.v[1], s.a.v[2])
                }, de.prototype.init = function(t, e, i, s) {
                    for (this.elem = t, this.arr = e, this.pos = i, this.elemsData = s, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[i]); i > 0;) i -= 1, this._elements.unshift(e[i]);
                    this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
                }, de.prototype.resetElements = function(t) {
                    var e, i = t.length;
                    for (e = 0; e < i; e += 1) t[e]._processed = !1, "gr" === t[e].ty && this.resetElements(t[e].it)
                }, de.prototype.cloneElements = function(t) {
                    var e = JSON.parse(JSON.stringify(t));
                    return this.resetElements(e), e
                }, de.prototype.changeGroupRender = function(t, e) {
                    var i, s = t.length;
                    for (i = 0; i < s; i += 1) t[i]._render = e, "gr" === t[i].ty && this.changeGroupRender(t[i].it, e)
                }, de.prototype.processShapes = function(t) {
                    var e, i, s, r, n, a = !1;
                    if (this._mdf || t) {
                        var o, h = Math.ceil(this.c.v);
                        if (this._groups.length < h) {
                            for (; this._groups.length < h;) {
                                var l = {
                                    it: this.cloneElements(this._elements),
                                    ty: "gr"
                                };
                                l.it.push({
                                    a: {
                                        a: 0,
                                        ix: 1,
                                        k: [0, 0]
                                    },
                                    nm: "Transform",
                                    o: {
                                        a: 0,
                                        ix: 7,
                                        k: 100
                                    },
                                    p: {
                                        a: 0,
                                        ix: 2,
                                        k: [0, 0]
                                    },
                                    r: {
                                        a: 1,
                                        ix: 6,
                                        k: [{
                                            s: 0,
                                            e: 0,
                                            t: 0
                                        }, {
                                            s: 0,
                                            e: 0,
                                            t: 1
                                        }]
                                    },
                                    s: {
                                        a: 0,
                                        ix: 3,
                                        k: [100, 100]
                                    },
                                    sa: {
                                        a: 0,
                                        ix: 5,
                                        k: 0
                                    },
                                    sk: {
                                        a: 0,
                                        ix: 4,
                                        k: 0
                                    },
                                    ty: "tr"
                                }), this.arr.splice(0, 0, l), this._groups.splice(0, 0, l), this._currentCopies += 1
                            }
                            this.elem.reloadShapes(), a = !0
                        }
                        for (n = 0, s = 0; s <= this._groups.length - 1; s += 1) {
                            if (o = n < h, this._groups[s]._render = o, this.changeGroupRender(this._groups[s].it, o), !o) {
                                var u = this.elemsData[s].it,
                                    c = u[u.length - 1];
                                0 !== c.transform.op.v ? (c.transform.op._mdf = !0, c.transform.op.v = 0) : c.transform.op._mdf = !1
                            }
                            n += 1
                        }
                        this._currentCopies = h;
                        var p = this.o.v,
                            f = p % 1,
                            d = p > 0 ? Math.floor(p) : Math.ceil(p),
                            m = this.pMatrix.props,
                            g = this.rMatrix.props,
                            v = this.sMatrix.props;
                        this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                        var y, D, _ = 0;
                        if (p > 0) {
                            for (; _ < d;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), _ += 1;
                            f && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, f, !1), _ += f)
                        } else if (p < 0) {
                            for (; _ > d;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), _ -= 1;
                            f && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -f, !0), _ -= f)
                        }
                        for (s = 1 === this.data.m ? 0 : this._currentCopies - 1, r = 1 === this.data.m ? 1 : -1, n = this._currentCopies; n;) {
                            if (D = (i = (e = this.elemsData[s].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (s / (this._currentCopies - 1)), 0 !== _) {
                                for ((0 !== s && 1 === r || s !== this._currentCopies - 1 && -1 === r) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9], g[10], g[11], g[12], g[13], g[14], g[15]), this.matrix.transform(v[0], v[1], v[2], v[3], v[4], v[5], v[6], v[7], v[8], v[9], v[10], v[11], v[12], v[13], v[14], v[15]), this.matrix.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), y = 0; y < D; y += 1) i[y] = this.matrix.props[y];
                                this.matrix.reset()
                            } else
                                for (this.matrix.reset(), y = 0; y < D; y += 1) i[y] = this.matrix.props[y];
                            _ += 1, n -= 1, s += r
                        }
                    } else
                        for (n = this._currentCopies, s = 0, r = 1; n;) i = (e = this.elemsData[s].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, n -= 1, s += r;
                    return a
                }, de.prototype.addShape = function() {}, c([ue], me), me.prototype.initModifierProperties = function(t, e) {
                    this.getValue = this.processKeys, this.rd = Ot.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
                }, me.prototype.processPath = function(t, e) {
                    var i, s = Nt.newElement();
                    s.c = t.c;
                    var r, n, a, o, h, l, u, c, p, f, d, m, g = t._length,
                        v = 0;
                    for (i = 0; i < g; i += 1) r = t.v[i], a = t.o[i], n = t.i[i], r[0] === a[0] && r[1] === a[1] && r[0] === n[0] && r[1] === n[1] ? 0 !== i && i !== g - 1 || t.c ? (o = 0 === i ? t.v[g - 1] : t.v[i - 1], l = (h = Math.sqrt(Math.pow(r[0] - o[0], 2) + Math.pow(r[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, u = d = r[0] + (o[0] - r[0]) * l, c = m = r[1] - (r[1] - o[1]) * l, p = u - (u - r[0]) * T, f = c - (c - r[1]) * T, s.setTripleAt(u, c, p, f, d, m, v), v += 1, o = i === g - 1 ? t.v[0] : t.v[i + 1], l = (h = Math.sqrt(Math.pow(r[0] - o[0], 2) + Math.pow(r[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, u = p = r[0] + (o[0] - r[0]) * l, c = f = r[1] + (o[1] - r[1]) * l, d = u - (u - r[0]) * T, m = c - (c - r[1]) * T, s.setTripleAt(u, c, p, f, d, m, v), v += 1) : (s.setTripleAt(r[0], r[1], a[0], a[1], n[0], n[1], v), v += 1) : (s.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], v), v += 1);
                    return s
                }, me.prototype.processShapes = function(t) {
                    var e, i, s, r, n, a, o = this.shapes.length,
                        h = this.rd.v;
                    if (0 !== h)
                        for (i = 0; i < o; i += 1) {
                            if (a = (n = this.shapes[i]).localShapeCollection, n.shape._mdf || this._mdf || t)
                                for (a.releaseShapes(), n.shape._mdf = !0, e = n.shape.paths.shapes, r = n.shape.paths._length, s = 0; s < r; s += 1) a.addShape(this.processPath(e[s], h));
                            n.shape.paths = n.localShapeCollection
                        }
                    this.dynamicProperties.length || (this._mdf = !1)
                }, we.prototype.point = function(t) {
                    return [((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0], ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1]]
                }, we.prototype.derivative = function(t) {
                    return [(3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0], (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1]]
                }, we.prototype.tangentAngle = function(t) {
                    var e = this.derivative(t);
                    return Math.atan2(e[1], e[0])
                }, we.prototype.normalAngle = function(t) {
                    var e = this.derivative(t);
                    return Math.atan2(e[0], e[1])
                }, we.prototype.inflectionPoints = function() {
                    var t = this.a[1] * this.b[0] - this.a[0] * this.b[1];
                    if (ve(t)) return [];
                    var e = -.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / t,
                        i = e * e - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / t;
                    if (i < 0) return [];
                    var s = Math.sqrt(i);
                    return ve(s) ? s > 0 && s < 1 ? [e] : [] : [e - s, e + s].filter((function(t) {
                        return t > 0 && t < 1
                    }))
                }, we.prototype.split = function(t) {
                    if (t <= 0) return [Ce(this.points[0]), this];
                    if (t >= 1) return [this, Ce(this.points[this.points.length - 1])];
                    var e = De(this.points[0], this.points[1], t),
                        i = De(this.points[1], this.points[2], t),
                        s = De(this.points[2], this.points[3], t),
                        r = De(e, i, t),
                        n = De(i, s, t),
                        a = De(r, n, t);
                    return [new we(this.points[0], e, r, a, !0), new we(a, n, s, this.points[3], !0)]
                }, we.prototype.bounds = function() {
                    return {
                        x: Ee(this, 0),
                        y: Ee(this, 1)
                    }
                }, we.prototype.boundingBox = function() {
                    var t = this.bounds();
                    return {
                        left: t.x.min,
                        right: t.x.max,
                        top: t.y.min,
                        bottom: t.y.max,
                        width: t.x.max - t.x.min,
                        height: t.y.max - t.y.min,
                        cx: (t.x.max + t.x.min) / 2,
                        cy: (t.y.max + t.y.min) / 2
                    }
                }, we.prototype.intersections = function(t, e, i) {
                    void 0 === e && (e = 2), void 0 === i && (i = 7);
                    var s = [];
                    return ke(xe(this, 0, 1), xe(t, 0, 1), 0, e, s, i), s
                }, we.shapeSegment = function(t, e) {
                    var i = (e + 1) % t.length();
                    return new we(t.v[e], t.o[e], t.i[i], t.v[i], !0)
                }, we.shapeSegmentInverted = function(t, e) {
                    var i = (e + 1) % t.length();
                    return new we(t.v[i], t.i[i], t.o[e], t.v[e], !0)
                }, c([ue], Oe), Oe.prototype.initModifierProperties = function(t, e) {
                    this.getValue = this.processKeys, this.amplitude = Ot.getProp(t, e.s, 0, null, this), this.frequency = Ot.getProp(t, e.r, 0, null, this), this.pointsType = Ot.getProp(t, e.pt, 0, null, this), this._isAnimated = 0 !== this.amplitude.effectsSequence.length || 0 !== this.frequency.effectsSequence.length || 0 !== this.pointsType.effectsSequence.length
                }, Oe.prototype.processPath = function(t, e, i, s) {
                    var r = t._length,
                        n = Nt.newElement();
                    if (n.c = t.c, t.c || (r -= 1), 0 === r) return n;
                    var a = -1,
                        o = we.shapeSegment(t, 0);
                    Ne(n, t, 0, e, i, s, a);
                    for (var h = 0; h < r; h += 1) a = ze(n, o, e, i, s, -a), o = h !== r - 1 || t.c ? we.shapeSegment(t, (h + 1) % r) : null, Ne(n, t, h + 1, e, i, s, a);
                    return n
                }, Oe.prototype.processShapes = function(t) {
                    var e, i, s, r, n, a, o = this.shapes.length,
                        h = this.amplitude.v,
                        l = Math.max(0, Math.round(this.frequency.v)),
                        u = this.pointsType.v;
                    if (0 !== h)
                        for (i = 0; i < o; i += 1) {
                            if (a = (n = this.shapes[i]).localShapeCollection, n.shape._mdf || this._mdf || t)
                                for (a.releaseShapes(), n.shape._mdf = !0, e = n.shape.paths.shapes, r = n.shape.paths._length, s = 0; s < r; s += 1) a.addShape(this.processPath(e[s], h, l, u));
                            n.shape.paths = n.localShapeCollection
                        }
                    this.dynamicProperties.length || (this._mdf = !1)
                }, c([ue], Xe), Xe.prototype.initModifierProperties = function(t, e) {
                    this.getValue = this.processKeys, this.amount = Ot.getProp(t, e.a, 0, null, this), this.miterLimit = Ot.getProp(t, e.ml, 0, null, this), this.lineJoin = e.lj, this._isAnimated = 0 !== this.amount.effectsSequence.length
                }, Xe.prototype.processPath = function(t, e, i, s) {
                    var r = Nt.newElement();
                    r.c = t.c;
                    var n, a, o, h = t.length();
                    t.c || (h -= 1);
                    var l = [];
                    for (n = 0; n < h; n += 1) o = we.shapeSegment(t, n), l.push(Ue(o, e));
                    if (!t.c)
                        for (n = h - 1; n >= 0; n -= 1) o = we.shapeSegmentInverted(t, n), l.push(Ue(o, e));
                    l = Ye(l);
                    var u = null,
                        c = null;
                    for (n = 0; n < l.length; n += 1) {
                        var p = l[n];
                        for (c && (u = qe(r, c, p[0], i, s)), c = p[p.length - 1], a = 0; a < p.length; a += 1) o = p[a], u && Ie(o.points[0], u) ? r.setXYAt(o.points[1][0], o.points[1][1], "o", r.length() - 1) : r.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], r.length()), r.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], r.length()), u = o.points[3]
                    }
                    return l.length && qe(r, c, l[0][0], i, s), r
                }, Xe.prototype.processShapes = function(t) {
                    var e, i, s, r, n, a, o = this.shapes.length,
                        h = this.amount.v,
                        l = this.miterLimit.v,
                        u = this.lineJoin;
                    if (0 !== h)
                        for (i = 0; i < o; i += 1) {
                            if (a = (n = this.shapes[i]).localShapeCollection, n.shape._mdf || this._mdf || t)
                                for (a.releaseShapes(), n.shape._mdf = !0, e = n.shape.paths.shapes, r = n.shape.paths._length, s = 0; s < r; s += 1) a.addShape(this.processPath(e[s], h, u, l));
                            n.shape.paths = n.localShapeCollection
                        }
                    this.dynamicProperties.length || (this._mdf = !1)
                };
                var $e = function() {
                    var t = 5e3,
                        e = {
                            w: 0,
                            size: 0,
                            shapes: [],
                            data: {
                                shapes: []
                            }
                        },
                        i = [];
                    i = i.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
                    var s = 127988,
                        r = 917631,
                        n = 917601,
                        a = 917626,
                        o = 65039,
                        h = 8205,
                        l = 127462,
                        c = 127487,
                        p = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];

                    function f(t) {
                        var e, i = t.split(","),
                            s = i.length,
                            r = [];
                        for (e = 0; e < s; e += 1) "sans-serif" !== i[e] && "monospace" !== i[e] && r.push(i[e]);
                        return r.join(",")
                    }

                    function d(t, e) {
                        var i = u("span");
                        i.setAttribute("aria-hidden", !0), i.style.fontFamily = e;
                        var s = u("span");
                        s.innerText = "giItT1WQy@!-/#", i.style.position = "absolute", i.style.left = "-10000px", i.style.top = "-10000px", i.style.fontSize = "300px", i.style.fontVariant = "normal", i.style.fontStyle = "normal", i.style.fontWeight = "normal", i.style.letterSpacing = "0", i.appendChild(s), document.body.appendChild(i);
                        var r = s.offsetWidth;
                        return s.style.fontFamily = f(t) + ", " + e, {
                            node: s,
                            w: r,
                            parent: i
                        }
                    }

                    function m() {
                        var e, i, s, r = this.fonts.length,
                            n = r;
                        for (e = 0; e < r; e += 1) this.fonts[e].loaded ? n -= 1 : "n" === this.fonts[e].fOrigin || 0 === this.fonts[e].origin ? this.fonts[e].loaded = !0 : (i = this.fonts[e].monoCase.node, s = this.fonts[e].monoCase.w, i.offsetWidth !== s ? (n -= 1, this.fonts[e].loaded = !0) : (i = this.fonts[e].sansCase.node, s = this.fonts[e].sansCase.w, i.offsetWidth !== s && (n -= 1, this.fonts[e].loaded = !0)), this.fonts[e].loaded && (this.fonts[e].sansCase.parent.parentNode.removeChild(this.fonts[e].sansCase.parent), this.fonts[e].monoCase.parent.parentNode.removeChild(this.fonts[e].monoCase.parent)));
                        0 !== n && Date.now() - this.initTime < t ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
                    }

                    function g(t, e) {
                        var i, s = document.body && e ? "svg" : "canvas",
                            r = Ge(t);
                        if ("svg" === s) {
                            var n = Q("text");
                            n.style.fontSize = "100px", n.setAttribute("font-family", t.fFamily), n.setAttribute("font-style", r.style), n.setAttribute("font-weight", r.weight), n.textContent = "1", t.fClass ? (n.style.fontFamily = "inherit", n.setAttribute("class", t.fClass)) : n.style.fontFamily = t.fFamily, e.appendChild(n), i = n
                        } else {
                            var a = new OffscreenCanvas(500, 500).getContext("2d");
                            a.font = r.style + " " + r.weight + " 100px " + t.fFamily, i = a
                        }

                        function o(t) {
                            return "svg" === s ? (i.textContent = t, i.getComputedTextLength()) : i.measureText(t).width
                        }
                        return {
                            measureText: o
                        }
                    }

                    function v(t, e) {
                        if (t) {
                            if (this.chars) return this.isLoaded = !0, void(this.fonts = t.list);
                            if (!document.body) return this.isLoaded = !0, t.list.forEach((function(t) {
                                t.helper = g(t), t.cache = {}
                            })), void(this.fonts = t.list);
                            var i, s = t.list,
                                r = s.length,
                                n = r;
                            for (i = 0; i < r; i += 1) {
                                var a, o, h = !0;
                                if (s[i].loaded = !1, s[i].monoCase = d(s[i].fFamily, "monospace"), s[i].sansCase = d(s[i].fFamily, "sans-serif"), s[i].fPath) {
                                    if ("p" === s[i].fOrigin || 3 === s[i].origin) {
                                        if ((a = document.querySelectorAll('style[f-forigin="p"][f-family="' + s[i].fFamily + '"], style[f-origin="3"][f-family="' + s[i].fFamily + '"]')).length > 0 && (h = !1), h) {
                                            var l = u("style");
                                            l.setAttribute("f-forigin", s[i].fOrigin), l.setAttribute("f-origin", s[i].origin), l.setAttribute("f-family", s[i].fFamily), l.type = "text/css", l.innerText = "@font-face {font-family: " + s[i].fFamily + "; font-style: normal; src: url('" + s[i].fPath + "');}", e.appendChild(l)
                                        }
                                    } else if ("g" === s[i].fOrigin || 1 === s[i].origin) {
                                        for (a = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), o = 0; o < a.length; o += 1) - 1 !== a[o].href.indexOf(s[i].fPath) && (h = !1);
                                        if (h) {
                                            var c = u("link");
                                            c.setAttribute("f-forigin", s[i].fOrigin), c.setAttribute("f-origin", s[i].origin), c.type = "text/css", c.rel = "stylesheet", c.href = s[i].fPath, document.body.appendChild(c)
                                        }
                                    } else if ("t" === s[i].fOrigin || 2 === s[i].origin) {
                                        for (a = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), o = 0; o < a.length; o += 1) s[i].fPath === a[o].src && (h = !1);
                                        if (h) {
                                            var p = u("link");
                                            p.setAttribute("f-forigin", s[i].fOrigin), p.setAttribute("f-origin", s[i].origin), p.setAttribute("rel", "stylesheet"), p.setAttribute("href", s[i].fPath), e.appendChild(p)
                                        }
                                    }
                                } else s[i].loaded = !0, n -= 1;
                                s[i].helper = g(s[i], e), s[i].cache = {}, this.fonts.push(s[i])
                            }
                            0 === n ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
                        } else this.isLoaded = !0
                    }

                    function y(t) {
                        if (t) {
                            var e;
                            this.chars || (this.chars = []);
                            var i, s, r = t.length,
                                n = this.chars.length;
                            for (e = 0; e < r; e += 1) {
                                for (i = 0, s = !1; i < n;) this.chars[i].style === t[e].style && this.chars[i].fFamily === t[e].fFamily && this.chars[i].ch === t[e].ch && (s = !0), i += 1;
                                s || (this.chars.push(t[e]), n += 1)
                            }
                        }
                    }

                    function D(t, i, s) {
                        for (var r = 0, n = this.chars.length; r < n;) {
                            if (this.chars[r].ch === t && this.chars[r].style === i && this.chars[r].fFamily === s) return this.chars[r];
                            r += 1
                        }
                        return ("string" == typeof t && 13 !== t.charCodeAt(0) || !t) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", t, i, s)), e
                    }

                    function _(t, e, i) {
                        var s = this.getFontByName(e),
                            r = t;
                        if (!s.cache[r]) {
                            var n = s.helper;
                            if (" " === t) {
                                var a = n.measureText("|" + t + "|"),
                                    o = n.measureText("||");
                                s.cache[r] = (a - o) / 100
                            } else s.cache[r] = n.measureText(t) / 100
                        }
                        return s.cache[r] * i
                    }

                    function b(t) {
                        for (var e = 0, i = this.fonts.length; e < i;) {
                            if (this.fonts[e].fName === t) return this.fonts[e];
                            e += 1
                        }
                        return this.fonts[0]
                    }

                    function C(t) {
                        var e = 0,
                            i = t.charCodeAt(0);
                        if (i >= 55296 && i <= 56319) {
                            var s = t.charCodeAt(1);
                            s >= 56320 && s <= 57343 && (e = 1024 * (i - 55296) + s - 56320 + 65536)
                        }
                        return e
                    }

                    function w(t, e) {
                        var i = t.toString(16) + e.toString(16);
                        return -1 !== p.indexOf(i)
                    }

                    function E(t) {
                        return t === h
                    }

                    function x(t) {
                        return t === o
                    }

                    function S(t) {
                        var e = C(t);
                        return e >= l && e <= c
                    }

                    function F(t) {
                        return S(t.substr(0, 2)) && S(t.substr(2, 2))
                    }

                    function k(t) {
                        return -1 !== i.indexOf(t)
                    }

                    function T(t, e) {
                        var i = C(t.substr(e, 2));
                        if (i !== s) return !1;
                        var o = 0;
                        for (e += 2; o < 5;) {
                            if ((i = C(t.substr(e, 2))) < n || i > a) return !1;
                            o += 1, e += 2
                        }
                        return C(t.substr(e, 2)) === r
                    }

                    function A() {
                        this.isLoaded = !0
                    }
                    var M = function() {
                        this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
                    };
                    M.isModifier = w, M.isZeroWidthJoiner = E, M.isFlagEmoji = F, M.isRegionalCode = S, M.isCombinedCharacter = k, M.isRegionalFlag = T, M.isVariationSelector = x, M.BLACK_FLAG_CODE_POINT = s;
                    var P = {
                        addChars: y,
                        addFonts: v,
                        getCharData: D,
                        getFontByName: b,
                        measureText: _,
                        checkLoadedFonts: m,
                        setIsLoaded: A
                    };
                    return M.prototype = P, M
                }();

                function Ke(t) {
                    this.animationData = t
                }

                function Je(t) {
                    return new Ke(t)
                }

                function Ze() {}
                Ke.prototype.getProp = function(t) {
                    return this.animationData.slots && this.animationData.slots[t.sid] ? Object.assign(t, this.animationData.slots[t.sid].p) : t
                }, Ze.prototype = {
                    initRenderable: function() {
                        this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
                    },
                    addRenderableComponent: function(t) {
                        -1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t)
                    },
                    removeRenderableComponent: function(t) {
                        -1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1)
                    },
                    prepareRenderableFrame: function(t) {
                        this.checkLayerLimits(t)
                    },
                    checkTransparency: function() {
                        this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
                    },
                    checkLayerLimits: function(t) {
                        this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
                    },
                    renderRenderable: function() {
                        var t, e = this.renderableComponents.length;
                        for (t = 0; t < e; t += 1) this.renderableComponents[t].renderFrame(this._isFirstFrame)
                    },
                    sourceRectAtTime: function() {
                        return {
                            top: 0,
                            left: 0,
                            width: 100,
                            height: 100
                        }
                    },
                    getLayerSize: function() {
                        return 5 === this.data.ty ? {
                            w: this.data.textData.width,
                            h: this.data.textData.height
                        } : {
                            w: this.data.width,
                            h: this.data.height
                        }
                    }
                };
                var Qe, ti = (Qe = {
                    0: "source-over",
                    1: "multiply",
                    2: "screen",
                    3: "overlay",
                    4: "darken",
                    5: "lighten",
                    6: "color-dodge",
                    7: "color-burn",
                    8: "hard-light",
                    9: "soft-light",
                    10: "difference",
                    11: "exclusion",
                    12: "hue",
                    13: "saturation",
                    14: "color",
                    15: "luminosity"
                }, function(t) {
                    return Qe[t] || ""
                });

                function ei(t, e, i) {
                    this.p = Ot.getProp(e, t.v, 0, 0, i)
                }

                function ii(t, e, i) {
                    this.p = Ot.getProp(e, t.v, 0, 0, i)
                }

                function si(t, e, i) {
                    this.p = Ot.getProp(e, t.v, 1, 0, i)
                }

                function ri(t, e, i) {
                    this.p = Ot.getProp(e, t.v, 1, 0, i)
                }

                function ni(t, e, i) {
                    this.p = Ot.getProp(e, t.v, 0, 0, i)
                }

                function ai(t, e, i) {
                    this.p = Ot.getProp(e, t.v, 0, 0, i)
                }

                function oi(t, e, i) {
                    this.p = Ot.getProp(e, t.v, 0, 0, i)
                }

                function hi() {
                    this.p = {}
                }

                function li(t, e) {
                    var i, s = t.ef || [];
                    this.effectElements = [];
                    var r, n = s.length;
                    for (i = 0; i < n; i += 1) r = new ui(s[i], e), this.effectElements.push(r)
                }

                function ui(t, e) {
                    this.init(t, e)
                }

                function ci() {}

                function pi() {}

                function fi(t, e, i) {
                    this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, i)
                }

                function di(t, e, i) {
                    this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, i), this._isPlaying = !1, this._canPlay = !1;
                    var s = this.globalData.getAssetsPath(this.assetData);
                    this.audio = this.globalData.audioController.createAudio(s), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = t.tm ? Ot.getProp(this, t.tm, 0, e.frameRate, this) : {
                        _placeholder: !0
                    }, this.lv = Ot.getProp(this, t.au && t.au.lv ? t.au.lv : {
                        k: [100]
                    }, 1, .01, this)
                }

                function mi() {}
                c([Lt], ui), ui.prototype.getValue = ui.prototype.iterateDynamicProperties, ui.prototype.init = function(t, e) {
                    var i;
                    this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
                    var s, r = this.data.ef.length,
                        n = this.data.ef;
                    for (i = 0; i < r; i += 1) {
                        switch (s = null, n[i].ty) {
                            case 0:
                                s = new ei(n[i], e, this);
                                break;
                            case 1:
                                s = new ii(n[i], e, this);
                                break;
                            case 2:
                                s = new si(n[i], e, this);
                                break;
                            case 3:
                                s = new ri(n[i], e, this);
                                break;
                            case 4:
                            case 7:
                                s = new oi(n[i], e, this);
                                break;
                            case 10:
                                s = new ni(n[i], e, this);
                                break;
                            case 11:
                                s = new ai(n[i], e, this);
                                break;
                            case 5:
                                s = new li(n[i], e, this);
                                break;
                            default:
                                s = new hi(n[i], e, this)
                        }
                        s && this.effectElements.push(s)
                    }
                }, ci.prototype = {
                    checkMasks: function() {
                        if (!this.data.hasMask) return !1;
                        for (var t = 0, e = this.data.masksProperties.length; t < e;) {
                            if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl) return !0;
                            t += 1
                        }
                        return !1
                    },
                    initExpressions: function() {
                        var t = $();
                        if (t) {
                            var e = t("layer"),
                                i = t("effects"),
                                s = t("shape"),
                                r = t("text"),
                                n = t("comp");
                            this.layerInterface = e(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                            var a = i.createEffectsInterface(this, this.layerInterface);
                            this.layerInterface.registerEffectsInterface(a), 0 === this.data.ty || this.data.xt ? this.compInterface = n(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = s(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = r(this), this.layerInterface.text = this.layerInterface.textInterface)
                        }
                    },
                    setBlendMode: function() {
                        var t = ti(this.data.bm);
                        (this.baseElement || this.layerElement).style["mix-blend-mode"] = t
                    },
                    initBaseData: function(t, e, i) {
                        this.globalData = e, this.comp = i, this.data = t, this.layerId = z(), this.data.sr || (this.data.sr = 1), this.effectsManager = new li(this.data, this, this.dynamicProperties)
                    },
                    getType: function() {
                        return this.type
                    },
                    sourceRectAtTime: function() {}
                }, pi.prototype = {
                    initFrame: function() {
                        this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
                    },
                    prepareProperties: function(t, e) {
                        var i, s = this.dynamicProperties.length;
                        for (i = 0; i < s; i += 1)(e || this._isParent && "transform" === this.dynamicProperties[i].propType) && (this.dynamicProperties[i].getValue(), this.dynamicProperties[i]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
                    },
                    addDynamicProperty: function(t) {
                        -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t)
                    }
                }, fi.prototype.prepareFrame = function() {}, c([Ze, ci, pi], fi), fi.prototype.getBaseElement = function() {
                    return null
                }, fi.prototype.renderFrame = function() {}, fi.prototype.destroy = function() {}, fi.prototype.initExpressions = function() {
                    var t = $();
                    if (t) {
                        var e = t("footage");
                        this.layerInterface = e(this)
                    }
                }, fi.prototype.getFootageData = function() {
                    return this.footageData
                }, di.prototype.prepareFrame = function(t) {
                    if (this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this.tm._placeholder) this._currentTime = t / this.data.sr;
                    else {
                        var e = this.tm.v;
                        this._currentTime = e
                    }
                    this._volume = this.lv.v[0];
                    var i = this._volume * this._volumeMultiplier;
                    this._previousVolume !== i && (this._previousVolume = i, this.audio.volume(i))
                }, c([Ze, ci, pi], di), di.prototype.renderFrame = function() {
                    this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0))
                }, di.prototype.show = function() {}, di.prototype.hide = function() {
                    this.audio.pause(), this._isPlaying = !1
                }, di.prototype.pause = function() {
                    this.audio.pause(), this._isPlaying = !1, this._canPlay = !1
                }, di.prototype.resume = function() {
                    this._canPlay = !0
                }, di.prototype.setRate = function(t) {
                    this.audio.rate(t)
                }, di.prototype.volume = function(t) {
                    this._volumeMultiplier = t, this._previousVolume = t * this._volume, this.audio.volume(this._previousVolume)
                }, di.prototype.getBaseElement = function() {
                    return null
                }, di.prototype.destroy = function() {}, di.prototype.sourceRectAtTime = function() {}, di.prototype.initExpressions = function() {}, mi.prototype.checkLayers = function(t) {
                    var e, i, s = this.layers.length;
                    for (this.completeLayers = !0, e = s - 1; e >= 0; e -= 1) this.elements[e] || (i = this.layers[e]).ip - i.st <= t - this.layers[e].st && i.op - i.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;
                    this.checkPendingElements()
                }, mi.prototype.createItem = function(t) {
                    switch (t.ty) {
                        case 2:
                            return this.createImage(t);
                        case 0:
                            return this.createComp(t);
                        case 1:
                            return this.createSolid(t);
                        case 3:
                        default:
                            return this.createNull(t);
                        case 4:
                            return this.createShape(t);
                        case 5:
                            return this.createText(t);
                        case 6:
                            return this.createAudio(t);
                        case 13:
                            return this.createCamera(t);
                        case 15:
                            return this.createFootage(t)
                    }
                }, mi.prototype.createCamera = function() {
                    throw new Error("You're using a 3d camera. Try the html renderer.")
                }, mi.prototype.createAudio = function(t) {
                    return new di(t, this.globalData, this)
                }, mi.prototype.createFootage = function(t) {
                    return new fi(t, this.globalData, this)
                }, mi.prototype.buildAllItems = function() {
                    var t, e = this.layers.length;
                    for (t = 0; t < e; t += 1) this.buildItem(t);
                    this.checkPendingElements()
                }, mi.prototype.includeLayers = function(t) {
                    var e;
                    this.completeLayers = !1;
                    var i, s = t.length,
                        r = this.layers.length;
                    for (e = 0; e < s; e += 1)
                        for (i = 0; i < r;) {
                            if (this.layers[i].id === t[e].id) {
                                this.layers[i] = t[e];
                                break
                            }
                            i += 1
                        }
                }, mi.prototype.setProjectInterface = function(t) {
                    this.globalData.projectInterface = t
                }, mi.prototype.initItems = function() {
                    this.globalData.progressiveLoad || this.buildAllItems()
                }, mi.prototype.buildElementParenting = function(t, e, i) {
                    for (var s = this.elements, r = this.layers, n = 0, a = r.length; n < a;) r[n].ind == e && (s[n] && !0 !== s[n] ? (i.push(s[n]), s[n].setAsParent(), void 0 !== r[n].parent ? this.buildElementParenting(t, r[n].parent, i) : t.setHierarchy(i)) : (this.buildItem(n), this.addPendingElement(t))), n += 1
                }, mi.prototype.addPendingElement = function(t) {
                    this.pendingElements.push(t)
                }, mi.prototype.searchExtraCompositions = function(t) {
                    var e, i = t.length;
                    for (e = 0; e < i; e += 1)
                        if (t[e].xt) {
                            var s = this.createComp(t[e]);
                            s.initExpressions(), this.globalData.projectInterface.registerComposition(s)
                        }
                }, mi.prototype.getElementById = function(t) {
                    var e, i = this.elements.length;
                    for (e = 0; e < i; e += 1)
                        if (this.elements[e].data.ind === t) return this.elements[e];
                    return null
                }, mi.prototype.getElementByPath = function(t) {
                    var e, i = t.shift();
                    if ("number" == typeof i) e = this.elements[i];
                    else {
                        var s, r = this.elements.length;
                        for (s = 0; s < r; s += 1)
                            if (this.elements[s].data.nm === i) {
                                e = this.elements[s];
                                break
                            }
                    }
                    return 0 === t.length ? e : e.getElementByPath(t)
                }, mi.prototype.setupGlobalData = function(t, e) {
                    this.globalData.fontManager = new $e, this.globalData.slotManager = Je(t), this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
                        w: t.w,
                        h: t.h
                    }
                };
                var gi = {
                    TRANSFORM_EFFECT: "transformEFfect"
                };

                function vi() {}

                function yi(t, e, i) {
                    this.data = t, this.element = e, this.globalData = i, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
                    var s, r, n = this.globalData.defs,
                        a = this.masksProperties ? this.masksProperties.length : 0;
                    this.viewData = m(a), this.solidPath = "";
                    var o, h, u, c, p, f, d = this.masksProperties,
                        g = 0,
                        v = [],
                        y = z(),
                        D = "clipPath",
                        _ = "clip-path";
                    for (s = 0; s < a; s += 1)
                        if (("a" !== d[s].mode && "n" !== d[s].mode || d[s].inv || 100 !== d[s].o.k || d[s].o.x) && (D = "mask", _ = "mask"), "s" !== d[s].mode && "i" !== d[s].mode || 0 !== g ? u = null : ((u = Q("rect")).setAttribute("fill", "#ffffff"), u.setAttribute("width", this.element.comp.data.w || 0), u.setAttribute("height", this.element.comp.data.h || 0), v.push(u)), r = Q("path"), "n" === d[s].mode) this.viewData[s] = {
                            op: Ot.getProp(this.element, d[s].o, 0, .01, this.element),
                            prop: jt.getShapeProp(this.element, d[s], 3),
                            elem: r,
                            lastPath: ""
                        }, n.appendChild(r);
                        else {
                            var b;
                            if (g += 1, r.setAttribute("fill", "s" === d[s].mode ? "#000000" : "#ffffff"), r.setAttribute("clip-rule", "nonzero"), 0 !== d[s].x.k ? (D = "mask", _ = "mask", f = Ot.getProp(this.element, d[s].x, 0, null, this.element), b = z(), (c = Q("filter")).setAttribute("id", b), (p = Q("feMorphology")).setAttribute("operator", "erode"), p.setAttribute("in", "SourceGraphic"), p.setAttribute("radius", "0"), c.appendChild(p), n.appendChild(c), r.setAttribute("stroke", "s" === d[s].mode ? "#000000" : "#ffffff")) : (p = null, f = null), this.storedData[s] = {
                                    elem: r,
                                    x: f,
                                    expan: p,
                                    lastPath: "",
                                    lastOperator: "",
                                    filterId: b,
                                    lastRadius: 0
                                }, "i" === d[s].mode) {
                                h = v.length;
                                var C = Q("g");
                                for (o = 0; o < h; o += 1) C.appendChild(v[o]);
                                var w = Q("mask");
                                w.setAttribute("mask-type", "alpha"), w.setAttribute("id", y + "_" + g), w.appendChild(r), n.appendChild(w), C.setAttribute("mask", "url(" + l() + "#" + y + "_" + g + ")"), v.length = 0, v.push(C)
                            } else v.push(r);
                            d[s].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[s] = {
                                elem: r,
                                lastPath: "",
                                op: Ot.getProp(this.element, d[s].o, 0, .01, this.element),
                                prop: jt.getShapeProp(this.element, d[s], 3),
                                invRect: u
                            }, this.viewData[s].prop.k || this.drawPath(d[s], this.viewData[s].prop.v, this.viewData[s])
                        } for (this.maskElement = Q(D), a = v.length, s = 0; s < a; s += 1) this.maskElement.appendChild(v[s]);
                    g > 0 && (this.maskElement.setAttribute("id", y), this.element.maskedElement.setAttribute(_, "url(" + l() + "#" + y + ")"), n.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
                }
                vi.prototype = {
                    initTransform: function() {
                        var t = new qt;
                        this.finalTransform = {
                            mProp: this.data.ks ? fe.getTransformProperty(this, this.data.ks, this) : {
                                o: 0
                            },
                            _matMdf: !1,
                            _localMatMdf: !1,
                            _opMdf: !1,
                            mat: t,
                            localMat: t,
                            localOpacity: 1
                        }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
                    },
                    renderTransform: function() {
                        if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
                            var t, e = this.finalTransform.mat,
                                i = 0,
                                s = this.hierarchy.length;
                            if (!this.finalTransform._matMdf)
                                for (; i < s;) {
                                    if (this.hierarchy[i].finalTransform.mProp._mdf) {
                                        this.finalTransform._matMdf = !0;
                                        break
                                    }
                                    i += 1
                                }
                            if (this.finalTransform._matMdf)
                                for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), i = 0; i < s; i += 1) e.multiply(this.hierarchy[i].finalTransform.mProp.v)
                        }
                        this.finalTransform._matMdf && (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v)
                    },
                    renderLocalTransform: function() {
                        if (this.localTransforms) {
                            var t = 0,
                                e = this.localTransforms.length;
                            if (this.finalTransform._localMatMdf = this.finalTransform._matMdf, !this.finalTransform._localMatMdf || !this.finalTransform._opMdf)
                                for (; t < e;) this.localTransforms[t]._mdf && (this.finalTransform._localMatMdf = !0), this.localTransforms[t]._opMdf && !this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v, this.finalTransform._opMdf = !0), t += 1;
                            if (this.finalTransform._localMatMdf) {
                                var i = this.finalTransform.localMat;
                                for (this.localTransforms[0].matrix.clone(i), t = 1; t < e; t += 1) {
                                    var s = this.localTransforms[t].matrix;
                                    i.multiply(s)
                                }
                                i.multiply(this.finalTransform.mat)
                            }
                            if (this.finalTransform._opMdf) {
                                var r = this.finalTransform.localOpacity;
                                for (t = 0; t < e; t += 1) r *= .01 * this.localTransforms[t].opacity;
                                this.finalTransform.localOpacity = r
                            }
                        }
                    },
                    searchEffectTransforms: function() {
                        if (this.renderableEffectsManager) {
                            var t = this.renderableEffectsManager.getEffects(gi.TRANSFORM_EFFECT);
                            if (t.length) {
                                this.localTransforms = [], this.finalTransform.localMat = new qt;
                                var e = 0,
                                    i = t.length;
                                for (e = 0; e < i; e += 1) this.localTransforms.push(t[e])
                            }
                        }
                    },
                    globalToLocal: function(t) {
                        var e = [];
                        e.push(this.finalTransform);
                        for (var i, s = !0, r = this.comp; s;) r.finalTransform ? (r.data.hasMask && e.splice(0, 0, r.finalTransform), r = r.comp) : s = !1;
                        var n, a = e.length;
                        for (i = 0; i < a; i += 1) n = e[i].mat.applyToPointArray(0, 0, 0), t = [t[0] - n[0], t[1] - n[1], 0];
                        return t
                    },
                    mHelper: new qt
                }, yi.prototype.getMaskProperty = function(t) {
                    return this.viewData[t].prop
                }, yi.prototype.renderFrame = function(t) {
                    var e, i = this.element.finalTransform.mat,
                        s = this.masksProperties.length;
                    for (e = 0; e < s; e += 1)
                        if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute("transform", i.getInverseMatrix().to2dCSS()), this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
                            var r = this.storedData[e].expan;
                            this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(" + l() + "#" + this.storedData[e].filterId + ")")), r.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v))
                        }
                }, yi.prototype.getMaskelement = function() {
                    return this.maskElement
                }, yi.prototype.createLayerSolidPath = function() {
                    var t = "M0,0 ";
                    return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " "
                }, yi.prototype.drawPath = function(t, e, i) {
                    var s, r, n = " M" + e.v[0][0] + "," + e.v[0][1];
                    for (r = e._length, s = 1; s < r; s += 1) n += " C" + e.o[s - 1][0] + "," + e.o[s - 1][1] + " " + e.i[s][0] + "," + e.i[s][1] + " " + e.v[s][0] + "," + e.v[s][1];
                    if (e.c && r > 1 && (n += " C" + e.o[s - 1][0] + "," + e.o[s - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), i.lastPath !== n) {
                        var a = "";
                        i.elem && (e.c && (a = t.inv ? this.solidPath + n : n), i.elem.setAttribute("d", a)), i.lastPath = n
                    }
                }, yi.prototype.destroy = function() {
                    this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
                };
                var Di, _i = function() {
                        var t = {};

                        function e(t, e) {
                            var i = Q("filter");
                            return i.setAttribute("id", t), !0 !== e && (i.setAttribute("filterUnits", "objectBoundingBox"), i.setAttribute("x", "0%"), i.setAttribute("y", "0%"), i.setAttribute("width", "100%"), i.setAttribute("height", "100%")), i
                        }

                        function i() {
                            var t = Q("feColorMatrix");
                            return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t
                        }
                        return t.createFilter = e, t.createAlphaToLuminanceFilter = i, t
                    }(),
                    bi = (Di = {
                        maskType: !0,
                        svgLumaHidden: !0,
                        offscreenCanvas: "undefined" != typeof OffscreenCanvas
                    }, (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (Di.maskType = !1), /firefox/i.test(navigator.userAgent) && (Di.svgLumaHidden = !1), Di),
                    Ci = {},
                    wi = "filter_result_";

                function Ei(t) {
                    var e, i, s = "SourceGraphic",
                        r = t.data.ef ? t.data.ef.length : 0,
                        n = z(),
                        a = _i.createFilter(n, !0),
                        o = 0;
                    for (this.filters = [], e = 0; e < r; e += 1) {
                        i = null;
                        var h = t.data.ef[e].ty;
                        Ci[h] && (i = new(0, Ci[h].effect)(a, t.effectsManager.effectElements[e], t, wi + o, s), s = wi + o, Ci[h].countsAsEffect && (o += 1)), i && this.filters.push(i)
                    }
                    o && (t.globalData.defs.appendChild(a), t.layerElement.setAttribute("filter", "url(" + l() + "#" + n + ")")), this.filters.length && t.addRenderableComponent(this)
                }

                function xi() {}

                function Si() {}

                function Fi() {}

                function ki(t, e, i) {
                    this.assetData = e.getAssetData(t.refId), this.assetData && this.assetData.sid && (this.assetData = e.slotManager.getProp(this.assetData)), this.initElement(t, e, i), this.sourceRect = {
                        top: 0,
                        left: 0,
                        width: this.assetData.w,
                        height: this.assetData.h
                    }
                }

                function Ti(t, e) {
                    this.elem = t, this.pos = e
                }

                function Ai() {}
                Ei.prototype.renderFrame = function(t) {
                    var e, i = this.filters.length;
                    for (e = 0; e < i; e += 1) this.filters[e].renderFrame(t)
                }, Ei.prototype.getEffects = function(t) {
                    var e, i = this.filters.length,
                        s = [];
                    for (e = 0; e < i; e += 1) this.filters[e].type === t && s.push(this.filters[e]);
                    return s
                }, xi.prototype = {
                    initRendererElement: function() {
                        this.layerElement = Q("g")
                    },
                    createContainerElements: function() {
                        this.matteElement = Q("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
                        var t = null;
                        if (this.data.td) {
                            this.matteMasks = {};
                            var e = Q("g");
                            e.setAttribute("id", this.layerId), e.appendChild(this.layerElement), t = e, this.globalData.defs.appendChild(e)
                        } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), t = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
                        if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
                            var i = Q("clipPath"),
                                s = Q("path");
                            s.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                            var r = z();
                            if (i.setAttribute("id", r), i.appendChild(s), this.globalData.defs.appendChild(i), this.checkMasks()) {
                                var n = Q("g");
                                n.setAttribute("clip-path", "url(" + l() + "#" + r + ")"), n.appendChild(this.layerElement), this.transformedElement = n, t ? t.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
                            } else this.layerElement.setAttribute("clip-path", "url(" + l() + "#" + r + ")")
                        }
                        0 !== this.data.bm && this.setBlendMode()
                    },
                    renderElement: function() {
                        this.finalTransform._localMatMdf && this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity)
                    },
                    destroyBaseElement: function() {
                        this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
                    },
                    getBaseElement: function() {
                        return this.data.hd ? null : this.baseElement
                    },
                    createRenderableComponents: function() {
                        this.maskManager = new yi(this.data, this, this.globalData), this.renderableEffectsManager = new Ei(this), this.searchEffectTransforms()
                    },
                    getMatte: function(t) {
                        if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[t]) {
                            var e, i, s, r, n = this.layerId + "_" + t;
                            if (1 === t || 3 === t) {
                                var a = Q("mask");
                                a.setAttribute("id", n), a.setAttribute("mask-type", 3 === t ? "luminance" : "alpha"), (s = Q("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), a.appendChild(s), this.globalData.defs.appendChild(a), bi.maskType || 1 !== t || (a.setAttribute("mask-type", "luminance"), e = z(), i = _i.createFilter(e), this.globalData.defs.appendChild(i), i.appendChild(_i.createAlphaToLuminanceFilter()), (r = Q("g")).appendChild(s), a.appendChild(r), r.setAttribute("filter", "url(" + l() + "#" + e + ")"))
                            } else if (2 === t) {
                                var o = Q("mask");
                                o.setAttribute("id", n), o.setAttribute("mask-type", "alpha");
                                var h = Q("g");
                                o.appendChild(h), e = z(), i = _i.createFilter(e);
                                var u = Q("feComponentTransfer");
                                u.setAttribute("in", "SourceGraphic"), i.appendChild(u);
                                var c = Q("feFuncA");
                                c.setAttribute("type", "table"), c.setAttribute("tableValues", "1.0 0.0"), u.appendChild(c), this.globalData.defs.appendChild(i);
                                var p = Q("rect");
                                p.setAttribute("width", this.comp.data.w), p.setAttribute("height", this.comp.data.h), p.setAttribute("x", "0"), p.setAttribute("y", "0"), p.setAttribute("fill", "#ffffff"), p.setAttribute("opacity", "0"), h.setAttribute("filter", "url(" + l() + "#" + e + ")"), h.appendChild(p), (s = Q("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), h.appendChild(s), bi.maskType || (o.setAttribute("mask-type", "luminance"), i.appendChild(_i.createAlphaToLuminanceFilter()), r = Q("g"), h.appendChild(p), r.appendChild(this.layerElement), h.appendChild(r)), this.globalData.defs.appendChild(o)
                            }
                            this.matteMasks[t] = n
                        }
                        return this.matteMasks[t]
                    },
                    setMatte: function(t) {
                        this.matteElement && this.matteElement.setAttribute("mask", "url(" + l() + "#" + t + ")")
                    }
                }, Si.prototype = {
                    initHierarchy: function() {
                        this.hierarchy = [], this._isParent = !1, this.checkParenting()
                    },
                    setHierarchy: function(t) {
                        this.hierarchy = t
                    },
                    setAsParent: function() {
                        this._isParent = !0
                    },
                    checkParenting: function() {
                        void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
                    }
                }, c([Ze, p({
                    initElement: function(t, e, i) {
                        this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
                    },
                    hide: function() {
                        this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0)
                    },
                    show: function() {
                        this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0)
                    },
                    renderFrame: function() {
                        this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
                    },
                    renderInnerContent: function() {},
                    prepareFrame: function(t) {
                        this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency()
                    },
                    destroy: function() {
                        this.innerElem = null, this.destroyBaseElement()
                    }
                })], Fi), c([ci, vi, xi, Si, pi, Fi], ki), ki.prototype.createContent = function() {
                    var t = this.globalData.getAssetsPath(this.assetData);
                    this.innerElem = Q("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem)
                }, ki.prototype.sourceRectAtTime = function() {
                    return this.sourceRect
                }, Ai.prototype = {
                    addShapeToModifiers: function(t) {
                        var e, i = this.shapeModifiers.length;
                        for (e = 0; e < i; e += 1) this.shapeModifiers[e].addShape(t)
                    },
                    isShapeInAnimatedModifiers: function(t) {
                        for (var e = 0, i = this.shapeModifiers.length; e < i;)
                            if (this.shapeModifiers[e].isAnimatedWithShape(t)) return !0;
                        return !1
                    },
                    renderModifiers: function() {
                        if (this.shapeModifiers.length) {
                            var t, e = this.shapes.length;
                            for (t = 0; t < e; t += 1) this.shapes[t].sh.reset();
                            for (t = (e = this.shapeModifiers.length) - 1; t >= 0 && !this.shapeModifiers[t].processShapes(this._isFirstFrame); t -= 1);
                        }
                    },
                    searchProcessedElement: function(t) {
                        for (var e = this.processedElements, i = 0, s = e.length; i < s;) {
                            if (e[i].elem === t) return e[i].pos;
                            i += 1
                        }
                        return 0
                    },
                    addProcessedElement: function(t, e) {
                        for (var i = this.processedElements, s = i.length; s;)
                            if (i[s -= 1].elem === t) return void(i[s].pos = e);
                        i.push(new Ti(t, e))
                    },
                    prepareFrame: function(t) {
                        this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
                    }
                };
                var Mi = {
                        1: "butt",
                        2: "round",
                        3: "square"
                    },
                    Pi = {
                        1: "miter",
                        2: "round",
                        3: "bevel"
                    };

                function Ii(t, e, i) {
                    this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = i, this.lvl = e, this._isAnimated = !!i.k;
                    for (var s = 0, r = t.length; s < r;) {
                        if (t[s].mProps.dynamicProperties.length) {
                            this._isAnimated = !0;
                            break
                        }
                        s += 1
                    }
                }

                function Oi(t, e) {
                    this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = !0 === t.hd, this.pElem = Q("path"), this.msElem = null
                }

                function Li(t, e, i, s) {
                    var r;
                    this.elem = t, this.frameId = -1, this.dataProps = m(e.length), this.renderer = i, this.k = !1, this.dashStr = "", this.dashArray = d("float32", e.length ? e.length - 1 : 0), this.dashoffset = d("float32", 1), this.initDynamicPropertyContainer(s);
                    var n, a = e.length || 0;
                    for (r = 0; r < a; r += 1) n = Ot.getProp(t, e[r].v, 0, 0, this), this.k = n.k || this.k, this.dataProps[r] = {
                        n: e[r].n,
                        p: n
                    };
                    this.k || this.getValue(!0), this._isAnimated = this.k
                }

                function Ri(t, e, i) {
                    this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = Ot.getProp(t, e.o, 0, .01, this), this.w = Ot.getProp(t, e.w, 0, null, this), this.d = new Li(t, e.d || {}, "svg", this), this.c = Ot.getProp(t, e.c, 1, 255, this), this.style = i, this._isAnimated = !!this._isAnimated
                }

                function Bi(t, e, i) {
                    this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = Ot.getProp(t, e.o, 0, .01, this), this.c = Ot.getProp(t, e.c, 1, 255, this), this.style = i
                }

                function Ni(t, e, i) {
                    this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.style = i
                }

                function zi(t, e, i) {
                    this.data = e, this.c = d("uint8c", 4 * e.p);
                    var s = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
                    this.o = d("float32", s), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = s, this.initDynamicPropertyContainer(i), this.prop = Ot.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
                }

                function Vi(t, e, i) {
                    this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, i)
                }

                function ji(t, e, i) {
                    this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = Ot.getProp(t, e.w, 0, null, this), this.d = new Li(t, e.d || {}, "svg", this), this.initGradientData(t, e, i), this._isAnimated = !!this._isAnimated
                }

                function qi() {
                    this.it = [], this.prevViewData = [], this.gr = Q("g")
                }

                function Wi(t, e, i) {
                    this.transform = {
                        mProps: t,
                        op: e,
                        container: i
                    }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
                }
                Ii.prototype.setAsAnimated = function() {
                    this._isAnimated = !0
                }, Oi.prototype.reset = function() {
                    this.d = "", this._mdf = !1
                }, Li.prototype.getValue = function(t) {
                    if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
                        var e = 0,
                            i = this.dataProps.length;
                        for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < i; e += 1) "o" !== this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
                    }
                }, c([Lt], Li), c([Lt], Ri), c([Lt], Bi), c([Lt], Ni), zi.prototype.comparePoints = function(t, e) {
                    for (var i = 0, s = this.o.length / 2; i < s;) {
                        if (Math.abs(t[4 * i] - t[4 * e + 2 * i]) > .01) return !1;
                        i += 1
                    }
                    return !0
                }, zi.prototype.checkCollapsable = function() {
                    if (this.o.length / 2 != this.c.length / 4) return !1;
                    if (this.data.k.k[0].s)
                        for (var t = 0, e = this.data.k.k.length; t < e;) {
                            if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
                            t += 1
                        } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
                    return !0
                }, zi.prototype.getValue = function(t) {
                    if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
                        var e, i, s, r = 4 * this.data.p;
                        for (e = 0; e < r; e += 1) i = e % 4 == 0 ? 100 : 255, s = Math.round(this.prop.v[e] * i), this.c[e] !== s && (this.c[e] = s, this._cmdf = !t);
                        if (this.o.length)
                            for (r = this.prop.v.length, e = 4 * this.data.p; e < r; e += 1) i = e % 2 == 0 ? 100 : 1, s = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== s && (this.o[e - 4 * this.data.p] = s, this._omdf = !t);
                        this._mdf = !t
                    }
                }, c([Lt], zi), Vi.prototype.initGradientData = function(t, e, i) {
                    this.o = Ot.getProp(t, e.o, 0, .01, this), this.s = Ot.getProp(t, e.s, 1, null, this), this.e = Ot.getProp(t, e.e, 1, null, this), this.h = Ot.getProp(t, e.h || {
                        k: 0
                    }, 0, .01, this), this.a = Ot.getProp(t, e.a || {
                        k: 0
                    }, 0, k, this), this.g = new zi(t, e.g, this), this.style = i, this.stops = [], this.setGradientData(i.pElem, e), this.setGradientOpacity(e, i), this._isAnimated = !!this._isAnimated
                }, Vi.prototype.setGradientData = function(t, e) {
                    var i = z(),
                        s = Q(1 === e.t ? "linearGradient" : "radialGradient");
                    s.setAttribute("id", i), s.setAttribute("spreadMethod", "pad"), s.setAttribute("gradientUnits", "userSpaceOnUse");
                    var r, n, a, o = [];
                    for (a = 4 * e.g.p, n = 0; n < a; n += 4) r = Q("stop"), s.appendChild(r), o.push(r);
                    t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + l() + "#" + i + ")"), this.gf = s, this.cst = o
                }, Vi.prototype.setGradientOpacity = function(t, e) {
                    if (this.g._hasOpacity && !this.g._collapsable) {
                        var i, s, r, n = Q("mask"),
                            a = Q("path");
                        n.appendChild(a);
                        var o = z(),
                            h = z();
                        n.setAttribute("id", h);
                        var u = Q(1 === t.t ? "linearGradient" : "radialGradient");
                        u.setAttribute("id", o), u.setAttribute("spreadMethod", "pad"), u.setAttribute("gradientUnits", "userSpaceOnUse"), r = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
                        var c = this.stops;
                        for (s = 4 * t.g.p; s < r; s += 2)(i = Q("stop")).setAttribute("stop-color", "rgb(255,255,255)"), u.appendChild(i), c.push(i);
                        a.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + l() + "#" + o + ")"), "gs" === t.ty && (a.setAttribute("stroke-linecap", Mi[t.lc || 2]), a.setAttribute("stroke-linejoin", Pi[t.lj || 2]), 1 === t.lj && a.setAttribute("stroke-miterlimit", t.ml)), this.of = u, this.ms = n, this.ost = c, this.maskId = h, e.msElem = a
                    }
                }, c([Lt], Vi), c([Vi, Lt], ji);
                var Hi = function(t, e, i, s) {
                        if (0 === e) return "";
                        var r, n = t.o,
                            a = t.i,
                            o = t.v,
                            h = " M" + s.applyToPointStringified(o[0][0], o[0][1]);
                        for (r = 1; r < e; r += 1) h += " C" + s.applyToPointStringified(n[r - 1][0], n[r - 1][1]) + " " + s.applyToPointStringified(a[r][0], a[r][1]) + " " + s.applyToPointStringified(o[r][0], o[r][1]);
                        return i && e && (h += " C" + s.applyToPointStringified(n[r - 1][0], n[r - 1][1]) + " " + s.applyToPointStringified(a[0][0], a[0][1]) + " " + s.applyToPointStringified(o[0][0], o[0][1]), h += "z"), h
                    },
                    Yi = function() {
                        var t = new qt,
                            e = new qt;

                        function i(t) {
                            switch (t.ty) {
                                case "fl":
                                    return a;
                                case "gf":
                                    return h;
                                case "gs":
                                    return o;
                                case "st":
                                    return l;
                                case "sh":
                                case "el":
                                case "rc":
                                case "sr":
                                    return n;
                                case "tr":
                                    return s;
                                case "no":
                                    return r;
                                default:
                                    return null
                            }
                        }

                        function s(t, e, i) {
                            (i || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v), (i || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS())
                        }

                        function r() {}

                        function n(i, s, r) {
                            var n, a, o, h, l, u, c, p, f, d, m = s.styles.length,
                                g = s.lvl;
                            for (u = 0; u < m; u += 1) {
                                if (h = s.sh._mdf || r, s.styles[u].lvl < g) {
                                    for (p = e.reset(), f = g - s.styles[u].lvl, d = s.transformers.length - 1; !h && f > 0;) h = s.transformers[d].mProps._mdf || h, f -= 1, d -= 1;
                                    if (h)
                                        for (f = g - s.styles[u].lvl, d = s.transformers.length - 1; f > 0;) p.multiply(s.transformers[d].mProps.v), f -= 1, d -= 1
                                } else p = t;
                                if (a = (c = s.sh.paths)._length, h) {
                                    for (o = "", n = 0; n < a; n += 1)(l = c.shapes[n]) && l._length && (o += Hi(l, l._length, l.c, p));
                                    s.caches[u] = o
                                } else o = s.caches[u];
                                s.styles[u].d += !0 === i.hd ? "" : o, s.styles[u]._mdf = h || s.styles[u]._mdf
                            }
                        }

                        function a(t, e, i) {
                            var s = e.style;
                            (e.c._mdf || i) && s.pElem.setAttribute("fill", "rgb(" + E(e.c.v[0]) + "," + E(e.c.v[1]) + "," + E(e.c.v[2]) + ")"), (e.o._mdf || i) && s.pElem.setAttribute("fill-opacity", e.o.v)
                        }

                        function o(t, e, i) {
                            h(t, e, i), l(t, e, i)
                        }

                        function h(t, e, i) {
                            var s, r, n, a, o, h = e.gf,
                                l = e.g._hasOpacity,
                                u = e.s.v,
                                c = e.e.v;
                            if (e.o._mdf || i) {
                                var p = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
                                e.style.pElem.setAttribute(p, e.o.v)
                            }
                            if (e.s._mdf || i) {
                                var f = 1 === t.t ? "x1" : "cx",
                                    d = "x1" === f ? "y1" : "cy";
                                h.setAttribute(f, u[0]), h.setAttribute(d, u[1]), l && !e.g._collapsable && (e.of.setAttribute(f, u[0]), e.of.setAttribute(d, u[1]))
                            }
                            if (e.g._cmdf || i) {
                                s = e.cst;
                                var m = e.g.c;
                                for (n = s.length, r = 0; r < n; r += 1)(a = s[r]).setAttribute("offset", m[4 * r] + "%"), a.setAttribute("stop-color", "rgb(" + m[4 * r + 1] + "," + m[4 * r + 2] + "," + m[4 * r + 3] + ")")
                            }
                            if (l && (e.g._omdf || i)) {
                                var g = e.g.o;
                                for (n = (s = e.g._collapsable ? e.cst : e.ost).length, r = 0; r < n; r += 1) a = s[r], e.g._collapsable || a.setAttribute("offset", g[2 * r] + "%"), a.setAttribute("stop-opacity", g[2 * r + 1])
                            }
                            if (1 === t.t)(e.e._mdf || i) && (h.setAttribute("x2", c[0]), h.setAttribute("y2", c[1]), l && !e.g._collapsable && (e.of.setAttribute("x2", c[0]), e.of.setAttribute("y2", c[1])));
                            else if ((e.s._mdf || e.e._mdf || i) && (o = Math.sqrt(Math.pow(u[0] - c[0], 2) + Math.pow(u[1] - c[1], 2)), h.setAttribute("r", o), l && !e.g._collapsable && e.of.setAttribute("r", o)), e.e._mdf || e.h._mdf || e.a._mdf || i) {
                                o || (o = Math.sqrt(Math.pow(u[0] - c[0], 2) + Math.pow(u[1] - c[1], 2)));
                                var v = Math.atan2(c[1] - u[1], c[0] - u[0]),
                                    y = e.h.v;
                                y >= 1 ? y = .99 : y <= -1 && (y = -.99);
                                var D = o * y,
                                    _ = Math.cos(v + e.a.v) * D + u[0],
                                    b = Math.sin(v + e.a.v) * D + u[1];
                                h.setAttribute("fx", _), h.setAttribute("fy", b), l && !e.g._collapsable && (e.of.setAttribute("fx", _), e.of.setAttribute("fy", b))
                            }
                        }

                        function l(t, e, i) {
                            var s = e.style,
                                r = e.d;
                            r && (r._mdf || i) && r.dashStr && (s.pElem.setAttribute("stroke-dasharray", r.dashStr), s.pElem.setAttribute("stroke-dashoffset", r.dashoffset[0])), e.c && (e.c._mdf || i) && s.pElem.setAttribute("stroke", "rgb(" + E(e.c.v[0]) + "," + E(e.c.v[1]) + "," + E(e.c.v[2]) + ")"), (e.o._mdf || i) && s.pElem.setAttribute("stroke-opacity", e.o.v), (e.w._mdf || i) && (s.pElem.setAttribute("stroke-width", e.w.v), s.msElem && s.msElem.setAttribute("stroke-width", e.w.v))
                        }
                        return {
                            createRenderFunction: i
                        }
                    }();

                function Ui(t, e, i) {
                    this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, i), this.prevViewData = []
                }

                function Xi(t, e, i, s, r, n) {
                    this.o = t, this.sw = e, this.sc = i, this.fc = s, this.m = r, this.p = n, this._mdf = {
                        o: !0,
                        sw: !!e,
                        sc: !!i,
                        fc: !!s,
                        m: !0,
                        p: !0
                    }
                }

                function Gi(t, e) {
                    this._frameId = n, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, e.d && e.d.sid && (e.d = t.globalData.slotManager.getProp(e.d)), this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
                        ascent: 0,
                        boxWidth: this.defaultBoxWidth,
                        f: "",
                        fStyle: "",
                        fWeight: "",
                        fc: "",
                        j: "",
                        justifyOffset: "",
                        l: [],
                        lh: 0,
                        lineWidths: [],
                        ls: "",
                        of: "",
                        s: "",
                        sc: "",
                        sw: 0,
                        t: 0,
                        tr: 0,
                        sz: 0,
                        ps: null,
                        fillColorAnim: !1,
                        strokeColorAnim: !1,
                        strokeWidthAnim: !1,
                        yOffset: 0,
                        finalSize: 0,
                        finalText: [],
                        finalLineHeight: 0,
                        __complete: !1
                    }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
                }
                c([ci, vi, xi, Ai, Si, pi, Fi], Ui), Ui.prototype.initSecondaryElement = function() {}, Ui.prototype.identityMatrix = new qt, Ui.prototype.buildExpressionInterface = function() {}, Ui.prototype.createContent = function() {
                    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
                }, Ui.prototype.filterUniqueShapes = function() {
                    var t, e, i, s, r = this.shapes.length,
                        n = this.stylesList.length,
                        a = [],
                        o = !1;
                    for (i = 0; i < n; i += 1) {
                        for (s = this.stylesList[i], o = !1, a.length = 0, t = 0; t < r; t += 1) - 1 !== (e = this.shapes[t]).styles.indexOf(s) && (a.push(e), o = e._isAnimated || o);
                        a.length > 1 && o && this.setShapesAsAnimated(a)
                    }
                }, Ui.prototype.setShapesAsAnimated = function(t) {
                    var e, i = t.length;
                    for (e = 0; e < i; e += 1) t[e].setAsAnimated()
                }, Ui.prototype.createStyleElement = function(t, e) {
                    var i, s = new Oi(t, e),
                        r = s.pElem;
                    return "st" === t.ty ? i = new Ri(this, t, s) : "fl" === t.ty ? i = new Bi(this, t, s) : "gf" === t.ty || "gs" === t.ty ? (i = new("gf" === t.ty ? Vi : ji)(this, t, s), this.globalData.defs.appendChild(i.gf), i.maskId && (this.globalData.defs.appendChild(i.ms), this.globalData.defs.appendChild(i.of), r.setAttribute("mask", "url(" + l() + "#" + i.maskId + ")"))) : "no" === t.ty && (i = new Ni(this, t, s)), "st" !== t.ty && "gs" !== t.ty || (r.setAttribute("stroke-linecap", Mi[t.lc || 2]), r.setAttribute("stroke-linejoin", Pi[t.lj || 2]), r.setAttribute("fill-opacity", "0"), 1 === t.lj && r.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && r.setAttribute("fill-rule", "evenodd"), t.ln && r.setAttribute("id", t.ln), t.cl && r.setAttribute("class", t.cl), t.bm && (r.style["mix-blend-mode"] = ti(t.bm)), this.stylesList.push(s), this.addToAnimatedContents(t, i), i
                }, Ui.prototype.createGroupElement = function(t) {
                    var e = new qi;
                    return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = ti(t.bm)), e
                }, Ui.prototype.createTransformElement = function(t, e) {
                    var i = fe.getTransformProperty(this, t, this),
                        s = new Wi(i, i.o, e);
                    return this.addToAnimatedContents(t, s), s
                }, Ui.prototype.createShapeElement = function(t, e, i) {
                    var s = 4;
                    "rc" === t.ty ? s = 5 : "el" === t.ty ? s = 6 : "sr" === t.ty && (s = 7);
                    var r = new Ii(e, i, jt.getShapeProp(this, t, s, this));
                    return this.shapes.push(r), this.addShapeToModifiers(r), this.addToAnimatedContents(t, r), r
                }, Ui.prototype.addToAnimatedContents = function(t, e) {
                    for (var i = 0, s = this.animatedContents.length; i < s;) {
                        if (this.animatedContents[i].element === e) return;
                        i += 1
                    }
                    this.animatedContents.push({
                        fn: Yi.createRenderFunction(t),
                        element: e,
                        data: t
                    })
                }, Ui.prototype.setElementStyles = function(t) {
                    var e, i = t.styles,
                        s = this.stylesList.length;
                    for (e = 0; e < s; e += 1) this.stylesList[e].closed || i.push(this.stylesList[e])
                }, Ui.prototype.reloadShapes = function() {
                    var t;
                    this._isFirstFrame = !0;
                    var e = this.itemsData.length;
                    for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
                    for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
                    this.renderModifiers()
                }, Ui.prototype.searchShapes = function(t, e, i, s, r, n, a) {
                    var o, h, l, u, c, p, f = [].concat(n),
                        d = t.length - 1,
                        m = [],
                        g = [];
                    for (o = d; o >= 0; o -= 1) {
                        if ((p = this.searchProcessedElement(t[o])) ? e[o] = i[p - 1] : t[o]._render = a, "fl" === t[o].ty || "st" === t[o].ty || "gf" === t[o].ty || "gs" === t[o].ty || "no" === t[o].ty) p ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], r), t[o]._render && e[o].style.pElem.parentNode !== s && s.appendChild(e[o].style.pElem), m.push(e[o].style);
                        else if ("gr" === t[o].ty) {
                            if (p)
                                for (l = e[o].it.length, h = 0; h < l; h += 1) e[o].prevViewData[h] = e[o].it[h];
                            else e[o] = this.createGroupElement(t[o]);
                            this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, r + 1, f, a), t[o]._render && e[o].gr.parentNode !== s && s.appendChild(e[o].gr)
                        } else "tr" === t[o].ty ? (p || (e[o] = this.createTransformElement(t[o], s)), u = e[o].transform, f.push(u)) : "sh" === t[o].ty || "rc" === t[o].ty || "el" === t[o].ty || "sr" === t[o].ty ? (p || (e[o] = this.createShapeElement(t[o], f, r)), this.setElementStyles(e[o])) : "tm" === t[o].ty || "rd" === t[o].ty || "ms" === t[o].ty || "pb" === t[o].ty || "zz" === t[o].ty || "op" === t[o].ty ? (p ? (c = e[o]).closed = !1 : ((c = le.getModifier(t[o].ty)).init(this, t[o]), e[o] = c, this.shapeModifiers.push(c)), g.push(c)) : "rp" === t[o].ty && (p ? (c = e[o]).closed = !0 : (c = le.getModifier(t[o].ty), e[o] = c, c.init(this, t, o, e), this.shapeModifiers.push(c), a = !1), g.push(c));
                        this.addProcessedElement(t[o], o + 1)
                    }
                    for (d = m.length, o = 0; o < d; o += 1) m[o].closed = !0;
                    for (d = g.length, o = 0; o < d; o += 1) g[o].closed = !0
                }, Ui.prototype.renderInnerContent = function() {
                    var t;
                    this.renderModifiers();
                    var e = this.stylesList.length;
                    for (t = 0; t < e; t += 1) this.stylesList[t].reset();
                    for (this.renderShape(), t = 0; t < e; t += 1)(this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"))
                }, Ui.prototype.renderShape = function() {
                    var t, e, i = this.animatedContents.length;
                    for (t = 0; t < i; t += 1) e = this.animatedContents[t], (this._isFirstFrame || e.element._isAnimated) && !0 !== e.data && e.fn(e.data, e.element, this._isFirstFrame)
                }, Ui.prototype.destroy = function() {
                    this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
                }, Xi.prototype.update = function(t, e, i, s, r, n) {
                    this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
                    var a = !1;
                    return this.o !== t && (this.o = t, this._mdf.o = !0, a = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, a = !0), this.sc !== i && (this.sc = i, this._mdf.sc = !0, a = !0), this.fc !== s && (this.fc = s, this._mdf.fc = !0, a = !0), this.m !== r && (this.m = r, this._mdf.m = !0, a = !0), !n.length || this.p[0] === n[0] && this.p[1] === n[1] && this.p[4] === n[4] && this.p[5] === n[5] && this.p[12] === n[12] && this.p[13] === n[13] || (this.p = n, this._mdf.p = !0, a = !0), a
                }, Gi.prototype.defaultBoxWidth = [0, 0], Gi.prototype.copyData = function(t, e) {
                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t
                }, Gi.prototype.setCurrentData = function(t) {
                    t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
                }, Gi.prototype.searchProperty = function() {
                    return this.searchKeyframes()
                }, Gi.prototype.searchKeyframes = function() {
                    return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
                }, Gi.prototype.addEffect = function(t) {
                    this.effectsSequence.push(t), this.elem.addDynamicProperty(this)
                }, Gi.prototype.getValue = function(t) {
                    if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
                        this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                        var e = this.currentData,
                            i = this.keysIndex;
                        if (this.lock) this.setCurrentData(this.currentData);
                        else {
                            var s;
                            this.lock = !0, this._mdf = !1;
                            var r = this.effectsSequence.length,
                                n = t || this.data.d.k[this.keysIndex].s;
                            for (s = 0; s < r; s += 1) n = i !== this.keysIndex ? this.effectsSequence[s](n, n.t) : this.effectsSequence[s](this.currentData, n.t);
                            e !== n && this.setCurrentData(n), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
                        }
                    }
                }, Gi.prototype.getKeyframeValue = function() {
                    for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, i = 0, s = t.length; i <= s - 1 && !(i === s - 1 || t[i + 1].t > e);) i += 1;
                    return this.keysIndex !== i && (this.keysIndex = i), this.data.d.k[this.keysIndex].s
                }, Gi.prototype.buildFinalText = function(t) {
                    for (var e, i, s = [], r = 0, n = t.length, a = !1, o = !1, h = ""; r < n;) a = o, o = !1, e = t.charCodeAt(r), h = t.charAt(r), $e.isCombinedCharacter(e) ? a = !0 : e >= 55296 && e <= 56319 ? $e.isRegionalFlag(t, r) ? h = t.substr(r, 14) : (i = t.charCodeAt(r + 1)) >= 56320 && i <= 57343 && ($e.isModifier(e, i) ? (h = t.substr(r, 2), a = !0) : h = $e.isFlagEmoji(t.substr(r, 4)) ? t.substr(r, 4) : t.substr(r, 2)) : e > 56319 ? (i = t.charCodeAt(r + 1), $e.isVariationSelector(e) && (a = !0)) : $e.isZeroWidthJoiner(e) && (a = !0, o = !0), a ? (s[s.length - 1] += h, a = !1) : s.push(h), r += h.length;
                    return s
                }, Gi.prototype.completeTextData = function(t) {
                    t.__complete = !0;
                    var e, i, s, r, n, a, o, h = this.elem.globalData.fontManager,
                        l = this.data,
                        u = [],
                        c = 0,
                        p = l.m.g,
                        f = 0,
                        d = 0,
                        m = 0,
                        g = [],
                        v = 0,
                        y = 0,
                        D = h.getFontByName(t.f),
                        _ = 0,
                        b = Ge(D);
                    t.fWeight = b.weight, t.fStyle = b.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), i = t.finalText.length, t.finalLineHeight = t.lh;
                    var C, w = t.tr / 1e3 * t.finalSize;
                    if (t.sz)
                        for (var E, x, S = !0, F = t.sz[0], k = t.sz[1]; S;) {
                            E = 0, v = 0, i = (x = this.buildFinalText(t.t)).length, w = t.tr / 1e3 * t.finalSize;
                            var T = -1;
                            for (e = 0; e < i; e += 1) C = x[e].charCodeAt(0), s = !1, " " === x[e] ? T = e : 13 !== C && 3 !== C || (v = 0, s = !0, E += t.finalLineHeight || 1.2 * t.finalSize), h.chars ? (o = h.getCharData(x[e], D.fStyle, D.fFamily), _ = s ? 0 : o.w * t.finalSize / 100) : _ = h.measureText(x[e], t.f, t.finalSize), v + _ > F && " " !== x[e] ? (-1 === T ? i += 1 : e = T, E += t.finalLineHeight || 1.2 * t.finalSize, x.splice(e, T === e ? 1 : 0, "\r"), T = -1, v = 0) : (v += _, v += w);
                            E += D.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && k < E ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = x, i = t.finalText.length, S = !1)
                        }
                    v = -w, _ = 0;
                    var A, M = 0;
                    for (e = 0; e < i; e += 1)
                        if (s = !1, 13 === (C = (A = t.finalText[e]).charCodeAt(0)) || 3 === C ? (M = 0, g.push(v), y = v > y ? v : y, v = -2 * w, r = "", s = !0, m += 1) : r = A, h.chars ? (o = h.getCharData(A, D.fStyle, h.getFontByName(t.f).fFamily), _ = s ? 0 : o.w * t.finalSize / 100) : _ = h.measureText(r, t.f, t.finalSize), " " === A ? M += _ + w : (v += _ + w + M, M = 0), u.push({
                                l: _,
                                an: _,
                                add: f,
                                n: s,
                                anIndexes: [],
                                val: r,
                                line: m,
                                animatorJustifyOffset: 0
                            }), 2 == p) {
                            if (f += _, "" === r || " " === r || e === i - 1) {
                                for ("" !== r && " " !== r || (f -= _); d <= e;) u[d].an = f, u[d].ind = c, u[d].extra = _, d += 1;
                                c += 1, f = 0
                            }
                        } else if (3 == p) {
                        if (f += _, "" === r || e === i - 1) {
                            for ("" === r && (f -= _); d <= e;) u[d].an = f, u[d].ind = c, u[d].extra = _, d += 1;
                            f = 0, c += 1
                        }
                    } else u[c].ind = c, u[c].extra = 0, c += 1;
                    if (t.l = u, y = v > y ? v : y, g.push(v), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
                    else switch (t.boxWidth = y, t.j) {
                        case 1:
                            t.justifyOffset = -t.boxWidth;
                            break;
                        case 2:
                            t.justifyOffset = -t.boxWidth / 2;
                            break;
                        default:
                            t.justifyOffset = 0
                    }
                    t.lineWidths = g;
                    var P, I, O, L, R = l.a;
                    a = R.length;
                    var B = [];
                    for (n = 0; n < a; n += 1) {
                        for ((P = R[n]).a.sc && (t.strokeColorAnim = !0), P.a.sw && (t.strokeWidthAnim = !0), (P.a.fc || P.a.fh || P.a.fs || P.a.fb) && (t.fillColorAnim = !0), L = 0, O = P.s.b, e = 0; e < i; e += 1)(I = u[e]).anIndexes[n] = L, (1 == O && "" !== I.val || 2 == O && "" !== I.val && " " !== I.val || 3 == O && (I.n || " " == I.val || e == i - 1) || 4 == O && (I.n || e == i - 1)) && (1 === P.s.rn && B.push(L), L += 1);
                        l.a[n].s.totalChars = L;
                        var N, z = -1;
                        if (1 === P.s.rn)
                            for (e = 0; e < i; e += 1) z != (I = u[e]).anIndexes[n] && (z = I.anIndexes[n], N = B.splice(Math.floor(Math.random() * B.length), 1)[0]), I.anIndexes[n] = N
                    }
                    t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = D.ascent * t.finalSize / 100
                }, Gi.prototype.updateDocumentData = function(t, e) {
                    e = void 0 === e ? this.keysIndex : e;
                    var i = this.copyData({}, this.data.d.k[e].s);
                    i = this.copyData(i, t), this.data.d.k[e].s = i, this.recalculate(e), this.setCurrentData(i), this.elem.addDynamicProperty(this)
                }, Gi.prototype.recalculate = function(t) {
                    var e = this.data.d.k[t].s;
                    e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e)
                }, Gi.prototype.canResizeFont = function(t) {
                    this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
                }, Gi.prototype.setMinimumFontSize = function(t) {
                    this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
                };
                var $i = function() {
                    var t = Math.max,
                        e = Math.min,
                        i = Math.floor;

                    function s(t, e) {
                        this._currentTextLength = -1, this.k = !1, this.data = e, this.elem = t, this.comp = t.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t), this.s = Ot.getProp(t, e.s || {
                            k: 0
                        }, 0, 0, this), this.e = "e" in e ? Ot.getProp(t, e.e, 0, 0, this) : {
                            v: 100
                        }, this.o = Ot.getProp(t, e.o || {
                            k: 0
                        }, 0, 0, this), this.xe = Ot.getProp(t, e.xe || {
                            k: 0
                        }, 0, 0, this), this.ne = Ot.getProp(t, e.ne || {
                            k: 0
                        }, 0, 0, this), this.sm = Ot.getProp(t, e.sm || {
                            k: 100
                        }, 0, 0, this), this.a = Ot.getProp(t, e.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
                    }

                    function r(t, e, i) {
                        return new s(t, e, i)
                    }
                    return s.prototype = {
                        getMult: function(s) {
                            this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                            var r = 0,
                                n = 0,
                                a = 1,
                                o = 1;
                            this.ne.v > 0 ? r = this.ne.v / 100 : n = -this.ne.v / 100, this.xe.v > 0 ? a = 1 - this.xe.v / 100 : o = 1 + this.xe.v / 100;
                            var h = ft.getBezierEasing(r, n, a, o).get,
                                l = 0,
                                u = this.finalS,
                                c = this.finalE,
                                p = this.data.sh;
                            if (2 === p) l = h(l = c === u ? s >= c ? 1 : 0 : t(0, e(.5 / (c - u) + (s - u) / (c - u), 1)));
                            else if (3 === p) l = h(l = c === u ? s >= c ? 0 : 1 : 1 - t(0, e(.5 / (c - u) + (s - u) / (c - u), 1)));
                            else if (4 === p) c === u ? l = 0 : (l = t(0, e(.5 / (c - u) + (s - u) / (c - u), 1))) < .5 ? l *= 2 : l = 1 - 2 * (l - .5), l = h(l);
                            else if (5 === p) {
                                if (c === u) l = 0;
                                else {
                                    var f = c - u,
                                        d = -f / 2 + (s = e(t(0, s + .5 - u), c - u)),
                                        m = f / 2;
                                    l = Math.sqrt(1 - d * d / (m * m))
                                }
                                l = h(l)
                            } else 6 === p ? (c === u ? l = 0 : (s = e(t(0, s + .5 - u), c - u), l = (1 + Math.cos(Math.PI + 2 * Math.PI * s / (c - u))) / 2), l = h(l)) : (s >= i(u) && (l = t(0, e(s - u < 0 ? e(c, 1) - (u - s) : c - s, 1))), l = h(l));
                            if (100 !== this.sm.v) {
                                var g = .01 * this.sm.v;
                                0 === g && (g = 1e-8);
                                var v = .5 - .5 * g;
                                l < v ? l = 0 : (l = (l - v) / g) > 1 && (l = 1)
                            }
                            return l * this.a.v
                        },
                        getValue: function(t) {
                            this.iterateDynamicProperties(), this._mdf = t || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, t && 2 === this.data.r && (this.e.v = this._currentTextLength);
                            var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                                i = this.o.v / e,
                                s = this.s.v / e + i,
                                r = this.e.v / e + i;
                            if (s > r) {
                                var n = s;
                                s = r, r = n
                            }
                            this.finalS = s, this.finalE = r
                        }
                    }, c([Lt], s), {
                        getTextSelectorProp: r
                    }
                }();

                function Ki(t, e, i) {
                    var s = {
                            propType: !1
                        },
                        r = Ot.getProp,
                        n = e.a;
                    this.a = {
                        r: n.r ? r(t, n.r, 0, k, i) : s,
                        rx: n.rx ? r(t, n.rx, 0, k, i) : s,
                        ry: n.ry ? r(t, n.ry, 0, k, i) : s,
                        sk: n.sk ? r(t, n.sk, 0, k, i) : s,
                        sa: n.sa ? r(t, n.sa, 0, k, i) : s,
                        s: n.s ? r(t, n.s, 1, .01, i) : s,
                        a: n.a ? r(t, n.a, 1, 0, i) : s,
                        o: n.o ? r(t, n.o, 0, .01, i) : s,
                        p: n.p ? r(t, n.p, 1, 0, i) : s,
                        sw: n.sw ? r(t, n.sw, 0, 0, i) : s,
                        sc: n.sc ? r(t, n.sc, 1, 0, i) : s,
                        fc: n.fc ? r(t, n.fc, 1, 0, i) : s,
                        fh: n.fh ? r(t, n.fh, 0, 0, i) : s,
                        fs: n.fs ? r(t, n.fs, 0, .01, i) : s,
                        fb: n.fb ? r(t, n.fb, 0, .01, i) : s,
                        t: n.t ? r(t, n.t, 0, 0, i) : s
                    }, this.s = $i.getTextSelectorProp(t, e.s, i), this.s.t = e.s.t
                }

                function Ji(t, e, i) {
                    this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = i, this._animatorsData = m(this._textData.a.length), this._pathData = {}, this._moreOptions = {
                        alignment: {}
                    }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(i)
                }

                function Zi() {}
                Ji.prototype.searchProperties = function() {
                    var t, e, i = this._textData.a.length,
                        s = Ot.getProp;
                    for (t = 0; t < i; t += 1) e = this._textData.a[t], this._animatorsData[t] = new Ki(this._elem, e, this);
                    this._textData.p && "m" in this._textData.p ? (this._pathData = {
                        a: s(this._elem, this._textData.p.a, 0, 0, this),
                        f: s(this._elem, this._textData.p.f, 0, 0, this),
                        l: s(this._elem, this._textData.p.l, 0, 0, this),
                        r: s(this._elem, this._textData.p.r, 0, 0, this),
                        p: s(this._elem, this._textData.p.p, 0, 0, this),
                        m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
                    }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = s(this._elem, this._textData.m.a, 1, 0, this)
                }, Ji.prototype.getMeasures = function(t, e) {
                    if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
                        this._isFirstFrame = !1;
                        var i, s, r, n, a, o, h, l, u, c, p, f, d, m, g, v, y, D, _, b = this._moreOptions.alignment.v,
                            C = this._animatorsData,
                            w = this._textData,
                            E = this.mHelper,
                            x = this._renderType,
                            S = this.renderedLetters.length,
                            F = t.l;
                        if (this._hasMaskedPath) {
                            if (_ = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                                var k, T = _.v;
                                for (this._pathData.r.v && (T = T.reverse()), a = {
                                        tLength: 0,
                                        segments: []
                                    }, n = T._length - 1, v = 0, r = 0; r < n; r += 1) k = Dt.buildBezierData(T.v[r], T.v[r + 1], [T.o[r][0] - T.v[r][0], T.o[r][1] - T.v[r][1]], [T.i[r + 1][0] - T.v[r + 1][0], T.i[r + 1][1] - T.v[r + 1][1]]), a.tLength += k.segmentLength, a.segments.push(k), v += k.segmentLength;
                                r = n, _.v.c && (k = Dt.buildBezierData(T.v[r], T.v[0], [T.o[r][0] - T.v[r][0], T.o[r][1] - T.v[r][1]], [T.i[0][0] - T.v[0][0], T.i[0][1] - T.v[0][1]]), a.tLength += k.segmentLength, a.segments.push(k), v += k.segmentLength), this._pathData.pi = a
                            }
                            if (a = this._pathData.pi, o = this._pathData.f.v, p = 0, c = 1, l = 0, u = !0, m = a.segments, o < 0 && _.v.c)
                                for (a.tLength < Math.abs(o) && (o = -Math.abs(o) % a.tLength), c = (d = m[p = m.length - 1].points).length - 1; o < 0;) o += d[c].partialLength, (c -= 1) < 0 && (c = (d = m[p -= 1].points).length - 1);
                            f = (d = m[p].points)[c - 1], g = (h = d[c]).partialLength
                        }
                        n = F.length, i = 0, s = 0;
                        var A, M, P, I, O, L = 1.2 * t.finalSize * .714,
                            R = !0;
                        P = C.length;
                        var B, N, z, V, j, Y, U, X, G, $, K, J, Z = -1,
                            Q = o,
                            tt = p,
                            et = c,
                            it = -1,
                            st = "",
                            rt = this.defaultPropsArray;
                        if (2 === t.j || 1 === t.j) {
                            var nt = 0,
                                at = 0,
                                ot = 2 === t.j ? -.5 : -1,
                                ht = 0,
                                lt = !0;
                            for (r = 0; r < n; r += 1)
                                if (F[r].n) {
                                    for (nt && (nt += at); ht < r;) F[ht].animatorJustifyOffset = nt, ht += 1;
                                    nt = 0, lt = !0
                                } else {
                                    for (M = 0; M < P; M += 1)(A = C[M].a).t.propType && (lt && 2 === t.j && (at += A.t.v * ot), (O = C[M].s.getMult(F[r].anIndexes[M], w.a[M].s.totalChars)).length ? nt += A.t.v * O[0] * ot : nt += A.t.v * O * ot);
                                    lt = !1
                                } for (nt && (nt += at); ht < r;) F[ht].animatorJustifyOffset = nt, ht += 1
                        }
                        for (r = 0; r < n; r += 1) {
                            if (E.reset(), V = 1, F[r].n) i = 0, s += t.yOffset, s += R ? 1 : 0, o = Q, R = !1, this._hasMaskedPath && (c = et, f = (d = m[p = tt].points)[c - 1], g = (h = d[c]).partialLength, l = 0), st = "", K = "", G = "", J = "", rt = this.defaultPropsArray;
                            else {
                                if (this._hasMaskedPath) {
                                    if (it !== F[r].line) {
                                        switch (t.j) {
                                            case 1:
                                                o += v - t.lineWidths[F[r].line];
                                                break;
                                            case 2:
                                                o += (v - t.lineWidths[F[r].line]) / 2
                                        }
                                        it = F[r].line
                                    }
                                    Z !== F[r].ind && (F[Z] && (o += F[Z].extra), o += F[r].an / 2, Z = F[r].ind), o += b[0] * F[r].an * .005;
                                    var ut = 0;
                                    for (M = 0; M < P; M += 1)(A = C[M].a).p.propType && ((O = C[M].s.getMult(F[r].anIndexes[M], w.a[M].s.totalChars)).length ? ut += A.p.v[0] * O[0] : ut += A.p.v[0] * O), A.a.propType && ((O = C[M].s.getMult(F[r].anIndexes[M], w.a[M].s.totalChars)).length ? ut += A.a.v[0] * O[0] : ut += A.a.v[0] * O);
                                    for (u = !0, this._pathData.a.v && (o = .5 * F[0].an + (v - this._pathData.f.v - .5 * F[0].an - .5 * F[F.length - 1].an) * Z / (n - 1), o += this._pathData.f.v); u;) l + g >= o + ut || !d ? (y = (o + ut - l) / h.partialLength, N = f.point[0] + (h.point[0] - f.point[0]) * y, z = f.point[1] + (h.point[1] - f.point[1]) * y, E.translate(-b[0] * F[r].an * .005, -b[1] * L * .01), u = !1) : d && (l += h.partialLength, (c += 1) >= d.length && (c = 0, m[p += 1] ? d = m[p].points : _.v.c ? (c = 0, d = m[p = 0].points) : (l -= h.partialLength, d = null)), d && (f = h, g = (h = d[c]).partialLength));
                                    B = F[r].an / 2 - F[r].add, E.translate(-B, 0, 0)
                                } else B = F[r].an / 2 - F[r].add, E.translate(-B, 0, 0), E.translate(-b[0] * F[r].an * .005, -b[1] * L * .01, 0);
                                for (M = 0; M < P; M += 1)(A = C[M].a).t.propType && (O = C[M].s.getMult(F[r].anIndexes[M], w.a[M].s.totalChars), 0 === i && 0 === t.j || (this._hasMaskedPath ? O.length ? o += A.t.v * O[0] : o += A.t.v * O : O.length ? i += A.t.v * O[0] : i += A.t.v * O));
                                for (t.strokeWidthAnim && (Y = t.sw || 0), t.strokeColorAnim && (j = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (U = [t.fc[0], t.fc[1], t.fc[2]]), M = 0; M < P; M += 1)(A = C[M].a).a.propType && ((O = C[M].s.getMult(F[r].anIndexes[M], w.a[M].s.totalChars)).length ? E.translate(-A.a.v[0] * O[0], -A.a.v[1] * O[1], A.a.v[2] * O[2]) : E.translate(-A.a.v[0] * O, -A.a.v[1] * O, A.a.v[2] * O));
                                for (M = 0; M < P; M += 1)(A = C[M].a).s.propType && ((O = C[M].s.getMult(F[r].anIndexes[M], w.a[M].s.totalChars)).length ? E.scale(1 + (A.s.v[0] - 1) * O[0], 1 + (A.s.v[1] - 1) * O[1], 1) : E.scale(1 + (A.s.v[0] - 1) * O, 1 + (A.s.v[1] - 1) * O, 1));
                                for (M = 0; M < P; M += 1) {
                                    if (A = C[M].a, O = C[M].s.getMult(F[r].anIndexes[M], w.a[M].s.totalChars), A.sk.propType && (O.length ? E.skewFromAxis(-A.sk.v * O[0], A.sa.v * O[1]) : E.skewFromAxis(-A.sk.v * O, A.sa.v * O)), A.r.propType && (O.length ? E.rotateZ(-A.r.v * O[2]) : E.rotateZ(-A.r.v * O)), A.ry.propType && (O.length ? E.rotateY(A.ry.v * O[1]) : E.rotateY(A.ry.v * O)), A.rx.propType && (O.length ? E.rotateX(A.rx.v * O[0]) : E.rotateX(A.rx.v * O)), A.o.propType && (O.length ? V += (A.o.v * O[0] - V) * O[0] : V += (A.o.v * O - V) * O), t.strokeWidthAnim && A.sw.propType && (O.length ? Y += A.sw.v * O[0] : Y += A.sw.v * O), t.strokeColorAnim && A.sc.propType)
                                        for (X = 0; X < 3; X += 1) O.length ? j[X] += (A.sc.v[X] - j[X]) * O[0] : j[X] += (A.sc.v[X] - j[X]) * O;
                                    if (t.fillColorAnim && t.fc) {
                                        if (A.fc.propType)
                                            for (X = 0; X < 3; X += 1) O.length ? U[X] += (A.fc.v[X] - U[X]) * O[0] : U[X] += (A.fc.v[X] - U[X]) * O;
                                        A.fh.propType && (U = O.length ? H(U, A.fh.v * O[0]) : H(U, A.fh.v * O)), A.fs.propType && (U = O.length ? q(U, A.fs.v * O[0]) : q(U, A.fs.v * O)), A.fb.propType && (U = O.length ? W(U, A.fb.v * O[0]) : W(U, A.fb.v * O))
                                    }
                                }
                                for (M = 0; M < P; M += 1)(A = C[M].a).p.propType && (O = C[M].s.getMult(F[r].anIndexes[M], w.a[M].s.totalChars), this._hasMaskedPath ? O.length ? E.translate(0, A.p.v[1] * O[0], -A.p.v[2] * O[1]) : E.translate(0, A.p.v[1] * O, -A.p.v[2] * O) : O.length ? E.translate(A.p.v[0] * O[0], A.p.v[1] * O[1], -A.p.v[2] * O[2]) : E.translate(A.p.v[0] * O, A.p.v[1] * O, -A.p.v[2] * O));
                                if (t.strokeWidthAnim && (G = Y < 0 ? 0 : Y), t.strokeColorAnim && ($ = "rgb(" + Math.round(255 * j[0]) + "," + Math.round(255 * j[1]) + "," + Math.round(255 * j[2]) + ")"), t.fillColorAnim && t.fc && (K = "rgb(" + Math.round(255 * U[0]) + "," + Math.round(255 * U[1]) + "," + Math.round(255 * U[2]) + ")"), this._hasMaskedPath) {
                                    if (E.translate(0, -t.ls), E.translate(0, b[1] * L * .01 + s, 0), this._pathData.p.v) {
                                        D = (h.point[1] - f.point[1]) / (h.point[0] - f.point[0]);
                                        var ct = 180 * Math.atan(D) / Math.PI;
                                        h.point[0] < f.point[0] && (ct += 180), E.rotate(-ct * Math.PI / 180)
                                    }
                                    E.translate(N, z, 0), o -= b[0] * F[r].an * .005, F[r + 1] && Z !== F[r + 1].ind && (o += F[r].an / 2, o += .001 * t.tr * t.finalSize)
                                } else {
                                    switch (E.translate(i, s, 0), t.ps && E.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                                        case 1:
                                            E.translate(F[r].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[F[r].line]), 0, 0);
                                            break;
                                        case 2:
                                            E.translate(F[r].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[F[r].line]) / 2, 0, 0)
                                    }
                                    E.translate(0, -t.ls), E.translate(B, 0, 0), E.translate(b[0] * F[r].an * .005, b[1] * L * .01, 0), i += F[r].l + .001 * t.tr * t.finalSize
                                }
                                "html" === x ? st = E.toCSS() : "svg" === x ? st = E.to2dCSS() : rt = [E.props[0], E.props[1], E.props[2], E.props[3], E.props[4], E.props[5], E.props[6], E.props[7], E.props[8], E.props[9], E.props[10], E.props[11], E.props[12], E.props[13], E.props[14], E.props[15]], J = V
                            }
                            S <= r ? (I = new Xi(J, G, $, K, st, rt), this.renderedLetters.push(I), S += 1, this.lettersChangedFlag = !0) : (I = this.renderedLetters[r], this.lettersChangedFlag = I.update(J, G, $, K, st, rt) || this.lettersChangedFlag)
                        }
                    }
                }, Ji.prototype.getValue = function() {
                    this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
                }, Ji.prototype.mHelper = new qt, Ji.prototype.defaultPropsArray = [], c([Lt], Ji), Zi.prototype.initElement = function(t, e, i) {
                    this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, i), this.textProperty = new Gi(this, t.t, this.dynamicProperties), this.textAnimator = new Ji(t.t, this.renderType, this), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
                }, Zi.prototype.prepareFrame = function(t) {
                    this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
                }, Zi.prototype.createPathShape = function(t, e) {
                    var i, s, r = e.length,
                        n = "";
                    for (i = 0; i < r; i += 1) "sh" === e[i].ty && (s = e[i].ks.k, n += Hi(s, s.i.length, !0, t));
                    return n
                }, Zi.prototype.updateDocumentData = function(t, e) {
                    this.textProperty.updateDocumentData(t, e)
                }, Zi.prototype.canResizeFont = function(t) {
                    this.textProperty.canResizeFont(t)
                }, Zi.prototype.setMinimumFontSize = function(t) {
                    this.textProperty.setMinimumFontSize(t)
                }, Zi.prototype.applyTextPropertiesToMatrix = function(t, e, i, s, r) {
                    switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
                        case 1:
                            e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]), 0, 0);
                            break;
                        case 2:
                            e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]) / 2, 0, 0)
                    }
                    e.translate(s, r, 0)
                }, Zi.prototype.buildColor = function(t) {
                    return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")"
                }, Zi.prototype.emptyProp = new Xi, Zi.prototype.destroy = function() {}, Zi.prototype.validateText = function() {
                    (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
                };
                var Qi = {
                    shapes: []
                };

                function ts(t, e, i) {
                    this.textSpans = [], this.renderType = "svg", this.initElement(t, e, i)
                }

                function es(t, e, i) {
                    this.initElement(t, e, i)
                }

                function is(t, e, i) {
                    this.initFrame(), this.initBaseData(t, e, i), this.initFrame(), this.initTransform(t, e, i), this.initHierarchy()
                }

                function ss() {}

                function rs() {}

                function ns(t, e, i) {
                    this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? m(this.layers.length) : [], this.initElement(t, e, i), this.tm = t.tm ? Ot.getProp(this, t.tm, 0, e.frameRate, this) : {
                        _placeholder: !0
                    }
                }

                function as(t, e) {
                    this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = Q("svg");
                    var i = "";
                    if (e && e.title) {
                        var s = Q("title"),
                            r = z();
                        s.setAttribute("id", r), s.textContent = e.title, this.svgElement.appendChild(s), i += r
                    }
                    if (e && e.description) {
                        var n = Q("desc"),
                            a = z();
                        n.setAttribute("id", a), n.textContent = e.description, this.svgElement.appendChild(n), i += " " + a
                    }
                    i && this.svgElement.setAttribute("aria-labelledby", i);
                    var o = Q("defs");
                    this.svgElement.appendChild(o);
                    var h = Q("g");
                    this.svgElement.appendChild(h), this.layerElement = h, this.renderConfig = {
                        preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                        imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                        contentVisibility: e && e.contentVisibility || "visible",
                        progressiveLoad: e && e.progressiveLoad || !1,
                        hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                        viewBoxOnly: e && e.viewBoxOnly || !1,
                        viewBoxSize: e && e.viewBoxSize || !1,
                        className: e && e.className || "",
                        id: e && e.id || "",
                        focusable: e && e.focusable,
                        filterSize: {
                            width: e && e.filterSize && e.filterSize.width || "100%",
                            height: e && e.filterSize && e.filterSize.height || "100%",
                            x: e && e.filterSize && e.filterSize.x || "0%",
                            y: e && e.filterSize && e.filterSize.y || "0%"
                        },
                        width: e && e.width,
                        height: e && e.height,
                        runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
                    }, this.globalData = {
                        _mdf: !1,
                        frameNum: -1,
                        defs: o,
                        renderConfig: this.renderConfig
                    }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
                }
                return c([ci, vi, xi, Si, pi, Fi, Zi], ts), ts.prototype.createContent = function() {
                    this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = Q("text"))
                }, ts.prototype.buildTextContents = function(t) {
                    for (var e = 0, i = t.length, s = [], r = ""; e < i;) t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (s.push(r), r = "") : r += t[e], e += 1;
                    return s.push(r), s
                }, ts.prototype.buildShapeData = function(t, e) {
                    if (t.shapes && t.shapes.length) {
                        var i = t.shapes[0];
                        if (i.it) {
                            var s = i.it[i.it.length - 1];
                            s.s && (s.s.k[0] = e, s.s.k[1] = e)
                        }
                    }
                    return t
                }, ts.prototype.buildNewText = function() {
                    var t, e;
                    this.addDynamicProperty(this);
                    var i = this.textProperty.currentData;
                    this.renderedLetters = m(i ? i.l.length : 0), i.fc ? this.layerElement.setAttribute("fill", this.buildColor(i.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), i.sc && (this.layerElement.setAttribute("stroke", this.buildColor(i.sc)), this.layerElement.setAttribute("stroke-width", i.sw)), this.layerElement.setAttribute("font-size", i.finalSize);
                    var s = this.globalData.fontManager.getFontByName(i.f);
                    if (s.fClass) this.layerElement.setAttribute("class", s.fClass);
                    else {
                        this.layerElement.setAttribute("font-family", s.fFamily);
                        var r = i.fWeight,
                            n = i.fStyle;
                        this.layerElement.setAttribute("font-style", n), this.layerElement.setAttribute("font-weight", r)
                    }
                    this.layerElement.setAttribute("aria-label", i.t);
                    var a, o = i.l || [],
                        h = !!this.globalData.fontManager.chars;
                    e = o.length;
                    var l = this.mHelper,
                        u = "",
                        c = this.data.singleShape,
                        p = 0,
                        f = 0,
                        d = !0,
                        g = .001 * i.tr * i.finalSize;
                    if (!c || h || i.sz) {
                        var v, y = this.textSpans.length;
                        for (t = 0; t < e; t += 1) {
                            if (this.textSpans[t] || (this.textSpans[t] = {
                                    span: null,
                                    childSpan: null,
                                    glyph: null
                                }), !h || !c || 0 === t) {
                                if (a = y > t ? this.textSpans[t].span : Q(h ? "g" : "text"), y <= t) {
                                    if (a.setAttribute("stroke-linecap", "butt"), a.setAttribute("stroke-linejoin", "round"), a.setAttribute("stroke-miterlimit", "4"), this.textSpans[t].span = a, h) {
                                        var D = Q("g");
                                        a.appendChild(D), this.textSpans[t].childSpan = D
                                    }
                                    this.textSpans[t].span = a, this.layerElement.appendChild(a)
                                }
                                a.style.display = "inherit"
                            }
                            if (l.reset(), c && (o[t].n && (p = -g, f += i.yOffset, f += d ? 1 : 0, d = !1), this.applyTextPropertiesToMatrix(i, l, o[t].line, p, f), p += o[t].l || 0, p += g), h) {
                                var _;
                                if (1 === (v = this.globalData.fontManager.getCharData(i.finalText[t], s.fStyle, this.globalData.fontManager.getFontByName(i.f).fFamily)).t) _ = new ns(v.data, this.globalData, this);
                                else {
                                    var b = Qi;
                                    v.data && v.data.shapes && (b = this.buildShapeData(v.data, i.finalSize)), _ = new Ui(b, this.globalData, this)
                                }
                                if (this.textSpans[t].glyph) {
                                    var C = this.textSpans[t].glyph;
                                    this.textSpans[t].childSpan.removeChild(C.layerElement), C.destroy()
                                }
                                this.textSpans[t].glyph = _, _._debug = !0, _.prepareFrame(0), _.renderFrame(), this.textSpans[t].childSpan.appendChild(_.layerElement), 1 === v.t && this.textSpans[t].childSpan.setAttribute("transform", "scale(" + i.finalSize / 100 + "," + i.finalSize / 100 + ")")
                            } else c && a.setAttribute("transform", "translate(" + l.props[12] + "," + l.props[13] + ")"), a.textContent = o[t].val, a.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
                        }
                        c && a && a.setAttribute("d", u)
                    } else {
                        var w = this.textContainer,
                            E = "start";
                        switch (i.j) {
                            case 1:
                                E = "end";
                                break;
                            case 2:
                                E = "middle";
                                break;
                            default:
                                E = "start"
                        }
                        w.setAttribute("text-anchor", E), w.setAttribute("letter-spacing", g);
                        var x = this.buildTextContents(i.finalText);
                        for (e = x.length, f = i.ps ? i.ps[1] + i.ascent : 0, t = 0; t < e; t += 1)(a = this.textSpans[t].span || Q("tspan")).textContent = x[t], a.setAttribute("x", 0), a.setAttribute("y", f), a.style.display = "inherit", w.appendChild(a), this.textSpans[t] || (this.textSpans[t] = {
                            span: null,
                            glyph: null
                        }), this.textSpans[t].span = a, f += i.finalLineHeight;
                        this.layerElement.appendChild(w)
                    }
                    for (; t < this.textSpans.length;) this.textSpans[t].span.style.display = "none", t += 1;
                    this._sizeChanged = !0
                }, ts.prototype.sourceRectAtTime = function() {
                    if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
                        this._sizeChanged = !1;
                        var t = this.layerElement.getBBox();
                        this.bbox = {
                            top: t.y,
                            left: t.x,
                            width: t.width,
                            height: t.height
                        }
                    }
                    return this.bbox
                }, ts.prototype.getValue = function() {
                    var t, e, i = this.textSpans.length;
                    for (this.renderedFrame = this.comp.renderedFrame, t = 0; t < i; t += 1)(e = this.textSpans[t].glyph) && (e.prepareFrame(this.comp.renderedFrame - this.data.st), e._mdf && (this._mdf = !0))
                }, ts.prototype.renderInnerContent = function() {
                    if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                        var t, e;
                        this._sizeChanged = !0;
                        var i, s, r, n = this.textAnimator.renderedLetters,
                            a = this.textProperty.currentData.l;
                        for (e = a.length, t = 0; t < e; t += 1) a[t].n || (i = n[t], s = this.textSpans[t].span, (r = this.textSpans[t].glyph) && r.renderFrame(), i._mdf.m && s.setAttribute("transform", i.m), i._mdf.o && s.setAttribute("opacity", i.o), i._mdf.sw && s.setAttribute("stroke-width", i.sw), i._mdf.sc && s.setAttribute("stroke", i.sc), i._mdf.fc && s.setAttribute("fill", i.fc))
                    }
                }, c([ki], es), es.prototype.createContent = function() {
                    var t = Q("rect");
                    t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t)
                }, is.prototype.prepareFrame = function(t) {
                    this.prepareProperties(t, !0)
                }, is.prototype.renderFrame = function() {}, is.prototype.getBaseElement = function() {
                    return null
                }, is.prototype.destroy = function() {}, is.prototype.sourceRectAtTime = function() {}, is.prototype.hide = function() {}, c([ci, vi, Si, pi], is), c([mi], ss), ss.prototype.createNull = function(t) {
                    return new is(t, this.globalData, this)
                }, ss.prototype.createShape = function(t) {
                    return new Ui(t, this.globalData, this)
                }, ss.prototype.createText = function(t) {
                    return new ts(t, this.globalData, this)
                }, ss.prototype.createImage = function(t) {
                    return new ki(t, this.globalData, this)
                }, ss.prototype.createSolid = function(t) {
                    return new es(t, this.globalData, this)
                }, ss.prototype.configAnimation = function(t) {
                    this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
                    var e = this.globalData.defs;
                    this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
                    var i = Q("clipPath"),
                        s = Q("rect");
                    s.setAttribute("width", t.w), s.setAttribute("height", t.h), s.setAttribute("x", 0), s.setAttribute("y", 0);
                    var r = z();
                    i.setAttribute("id", r), i.appendChild(s), this.layerElement.setAttribute("clip-path", "url(" + l() + "#" + r + ")"), e.appendChild(i), this.layers = t.layers, this.elements = m(t.layers.length)
                }, ss.prototype.destroy = function() {
                    var t;
                    this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
                    var e = this.layers ? this.layers.length : 0;
                    for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
                    this.elements.length = 0, this.destroyed = !0, this.animationItem = null
                }, ss.prototype.updateContainerSize = function() {}, ss.prototype.findIndexByInd = function(t) {
                    var e = 0,
                        i = this.layers.length;
                    for (e = 0; e < i; e += 1)
                        if (this.layers[e].ind === t) return e;
                    return -1
                }, ss.prototype.buildItem = function(t) {
                    var e = this.elements;
                    if (!e[t] && 99 !== this.layers[t].ty) {
                        e[t] = !0;
                        var i = this.createItem(this.layers[t]);
                        if (e[t] = i, G() && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(i), i.initExpressions()), this.appendElementInPos(i, t), this.layers[t].tt) {
                            var s = "tp" in this.layers[t] ? this.findIndexByInd(this.layers[t].tp) : t - 1;
                            if (-1 === s) return;
                            if (this.elements[s] && !0 !== this.elements[s]) {
                                var r = e[s].getMatte(this.layers[t].tt);
                                i.setMatte(r)
                            } else this.buildItem(s), this.addPendingElement(i)
                        }
                    }
                }, ss.prototype.checkPendingElements = function() {
                    for (; this.pendingElements.length;) {
                        var t = this.pendingElements.pop();
                        if (t.checkParenting(), t.data.tt)
                            for (var e = 0, i = this.elements.length; e < i;) {
                                if (this.elements[e] === t) {
                                    var s = "tp" in t.data ? this.findIndexByInd(t.data.tp) : e - 1,
                                        r = this.elements[s].getMatte(this.layers[e].tt);
                                    t.setMatte(r);
                                    break
                                }
                                e += 1
                            }
                    }
                }, ss.prototype.renderFrame = function(t) {
                    if (this.renderedFrame !== t && !this.destroyed) {
                        var e;
                        null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
                        var i = this.layers.length;
                        for (this.completeLayers || this.checkLayers(t), e = i - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
                        if (this.globalData._mdf)
                            for (e = 0; e < i; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
                    }
                }, ss.prototype.appendElementInPos = function(t, e) {
                    var i = t.getBaseElement();
                    if (i) {
                        for (var s, r = 0; r < e;) this.elements[r] && !0 !== this.elements[r] && this.elements[r].getBaseElement() && (s = this.elements[r].getBaseElement()), r += 1;
                        s ? this.layerElement.insertBefore(i, s) : this.layerElement.appendChild(i)
                    }
                }, ss.prototype.hide = function() {
                    this.layerElement.style.display = "none"
                }, ss.prototype.show = function() {
                    this.layerElement.style.display = "block"
                }, c([ci, vi, Si, pi, Fi], rs), rs.prototype.initElement = function(t, e, i) {
                    this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && e.progressiveLoad || this.buildAllItems(), this.hide()
                }, rs.prototype.prepareFrame = function(t) {
                    if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) {
                        if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
                        else {
                            var e = this.tm.v;
                            e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e
                        }
                        var i, s = this.elements.length;
                        for (this.completeLayers || this.checkLayers(this.renderedFrame), i = s - 1; i >= 0; i -= 1)(this.completeLayers || this.elements[i]) && (this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st), this.elements[i]._mdf && (this._mdf = !0))
                    }
                }, rs.prototype.renderInnerContent = function() {
                    var t, e = this.layers.length;
                    for (t = 0; t < e; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
                }, rs.prototype.setElements = function(t) {
                    this.elements = t
                }, rs.prototype.getElements = function() {
                    return this.elements
                }, rs.prototype.destroyElements = function() {
                    var t, e = this.layers.length;
                    for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy()
                }, rs.prototype.destroy = function() {
                    this.destroyElements(), this.destroyBaseElement()
                }, c([ss, rs, xi], ns), ns.prototype.createComp = function(t) {
                    return new ns(t, this.globalData, this)
                }, c([ss], as), as.prototype.createComp = function(t) {
                    return new ns(t, this.globalData, this)
                }, ot("svg", as), le.registerModifier("tm", ce), le.registerModifier("pb", pe), le.registerModifier("rp", de), le.registerModifier("rd", me), le.registerModifier("zz", Oe), le.registerModifier("op", Xe), Ht
            }())
        },
        652: function(t, e, i) {
            "use strict";

            function s(t) {
                return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, s(t)
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function n(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var s = e[i];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
                }
            }

            function a(t, e, i) {
                return e && n(t.prototype, e), i && n(t, i), t
            }

            function o(t, e, i) {
                return e in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t
            }

            function h(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
                    var i = [],
                        s = !0,
                        r = !1,
                        n = void 0;
                    try {
                        for (var a, o = t[Symbol.iterator](); !(s = (a = o.next()).done) && (i.push(a.value), !e || i.length !== e); s = !0);
                    } catch (t) {
                        r = !0, n = t
                    } finally {
                        try {
                            s || null == o.return || o.return()
                        } finally {
                            if (r) throw n
                        }
                    }
                    return i
                }(t, e) || u(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function l(t) {
                return function(t) {
                    if (Array.isArray(t)) return c(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
                }(t) || u(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function u(t, e) {
                if (t) {
                    if ("string" == typeof t) return c(t, e);
                    var i = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? c(t, e) : void 0
                }
            }

            function c(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, s = new Array(e); i < e; i++) s[i] = t[i];
                return s
            }
            i.d(e, {
                x: function() {
                    return p
                }
            });
            var p = function() {
                    function t(e) {
                        r(this, t), this.mAttr = "data-" + e.dataName, this.mCaptureEvents = ["mouseenter", "mouseleave"], this.el = e.el
                    }
                    return a(t, [{
                        key: "mInit",
                        value: function(t) {
                            var e = this;
                            this.modules = t, this.mCheckEventTarget = this.mCheckEventTarget.bind(this), this.events && Object.keys(this.events).forEach((function(t) {
                                return e.mAddEvent(t)
                            }))
                        }
                    }, {
                        key: "mUpdate",
                        value: function(t) {
                            this.modules = t
                        }
                    }, {
                        key: "mDestroy",
                        value: function() {
                            var t = this;
                            this.events && Object.keys(this.events).forEach((function(e) {
                                return t.mRemoveEvent(e)
                            }))
                        }
                    }, {
                        key: "mAddEvent",
                        value: function(t) {
                            var e = !!this.mCaptureEvents.includes(t);
                            this.el.addEventListener(t, this.mCheckEventTarget, e)
                        }
                    }, {
                        key: "mRemoveEvent",
                        value: function(t) {
                            var e = !!this.mCaptureEvents.includes(t);
                            this.el.removeEventListener(t, this.mCheckEventTarget, e)
                        }
                    }, {
                        key: "mCheckEventTarget",
                        value: function(t) {
                            var e = this.events[t.type];
                            if ("string" == typeof e) this[e](t);
                            else {
                                var i = "[" + this.mAttr + "]",
                                    s = t.target;
                                if (this.mCaptureEvents.includes(t.type)) s.matches(i) && this.mCallEventMethod(t, e, s);
                                else
                                    for (; s && s !== document && (!s.matches(i) || "undefined" == this.mCallEventMethod(t, e, s));) s = s.parentNode
                            }
                        }
                    }, {
                        key: "mCallEventMethod",
                        value: function(t, e, i) {
                            var s = i.getAttribute(this.mAttr);
                            if (e.hasOwnProperty(s)) {
                                var r = e[s];
                                t.hasOwnProperty("currentTarget") || Object.defineProperty(t, "currentTarget", {
                                    value: i
                                }), t.hasOwnProperty("curTarget") || Object.defineProperty(t, "curTarget", {
                                    value: i
                                }), this[r](t)
                            }
                        }
                    }, {
                        key: "$",
                        value: function(t, e) {
                            var i = [t.indexOf("."), t.indexOf("#"), t.indexOf("[")].filter((function(t) {
                                    return -1 != t
                                })),
                                r = !1,
                                n = t,
                                a = "",
                                o = this.el;
                            return i.length && (r = Math.min.apply(Math, l(i)), n = t.slice(0, r), a = t.slice(r)), "object" == s(e) && (o = e), o.querySelectorAll("[" + this.mAttr + "=" + n + "]" + a)
                        }
                    }, {
                        key: "parent",
                        value: function(t, e) {
                            for (var i = "[" + this.mAttr + "=" + t + "]", s = e.parentNode; s && s !== document;) {
                                if (s.matches(i)) return s;
                                s = s.parentNode
                            }
                        }
                    }, {
                        key: "getData",
                        value: function(t, e) {
                            return (e || this.el).getAttribute(this.mAttr + "-" + t)
                        }
                    }, {
                        key: "setData",
                        value: function(t, e, i) {
                            return (i || this.el).setAttribute(this.mAttr + "-" + t, e)
                        }
                    }, {
                        key: "call",
                        value: function(t, e, i, s) {
                            var r = this;
                            e && !i && (i = e, e = !1), this.modules[i] && (s ? this.modules[i][s] && this.modules[i][s][t](e) : Object.keys(this.modules[i]).forEach((function(s) {
                                r.modules[i][s][t](e)
                            })))
                        }
                    }, {
                        key: "on",
                        value: function(t, e, i, s) {
                            var r = this;
                            this.modules[e] && (s ? this.modules[e][s].el.addEventListener(t, (function(t) {
                                return i(t)
                            })) : Object.keys(this.modules[e]).forEach((function(s) {
                                r.modules[e][s].el.addEventListener(t, (function(t) {
                                    return i(t)
                                }))
                            })))
                        }
                    }, {
                        key: "init",
                        value: function() {}
                    }, {
                        key: "destroy",
                        value: function() {}
                    }]), t
                }(),
                f = function() {
                    function t(e) {
                        r(this, t), this.app, this.modules = e.modules, this.currentModules = {}, this.activeModules = {}, this.newModules = {}, this.moduleId = 0
                    }
                    return a(t, [{
                        key: "init",
                        value: function(t, e) {
                            var i = this,
                                s = (e || document).querySelectorAll("*");
                            t && !this.app && (this.app = t), this.activeModules.app = {
                                app: this.app
                            }, s.forEach((function(t) {
                                Array.from(t.attributes).forEach((function(s) {
                                    if (s.name.startsWith("data-module")) {
                                        var r = !1,
                                            n = s.name.split("-").splice(2),
                                            a = i.toCamel(n);
                                        if (i.modules[a] ? r = !0 : i.modules[i.toUpper(a)] && (a = i.toUpper(a), r = !0), r) {
                                            var o = {
                                                    el: t,
                                                    name: a,
                                                    dataName: n.join("-")
                                                },
                                                h = new i.modules[a](o),
                                                l = s.value;
                                            l || (i.moduleId++, l = "m" + i.moduleId, t.setAttribute(s.name, l)), i.addActiveModule(a, l, h);
                                            var u = a + "-" + l;
                                            e ? i.newModules[u] = h : i.currentModules[u] = h
                                        }
                                    }
                                }))
                            })), Object.entries(this.currentModules).forEach((function(t) {
                                var s = h(t, 2),
                                    r = s[0],
                                    n = s[1];
                                if (e) {
                                    var a = r.split("-"),
                                        o = a.shift(),
                                        l = a.pop();
                                    i.addActiveModule(o, l, n)
                                } else i.initModule(n)
                            }))
                        }
                    }, {
                        key: "initModule",
                        value: function(t) {
                            t.mInit(this.activeModules), t.init()
                        }
                    }, {
                        key: "addActiveModule",
                        value: function(t, e, i) {
                            this.activeModules[t] ? Object.assign(this.activeModules[t], o({}, e, i)) : this.activeModules[t] = o({}, e, i)
                        }
                    }, {
                        key: "update",
                        value: function(t) {
                            var e = this;
                            this.init(this.app, t), Object.entries(this.currentModules).forEach((function(t) {
                                var i = h(t, 2);
                                i[0];
                                i[1].mUpdate(e.activeModules)
                            })), Object.entries(this.newModules).forEach((function(t) {
                                var i = h(t, 2),
                                    s = (i[0], i[1]);
                                e.initModule(s)
                            })), Object.assign(this.currentModules, this.newModules)
                        }
                    }, {
                        key: "destroy",
                        value: function(t) {
                            t ? this.destroyScope(t) : this.destroyModules()
                        }
                    }, {
                        key: "destroyScope",
                        value: function(t) {
                            var e = this;
                            t.querySelectorAll("*").forEach((function(t) {
                                Array.from(t.attributes).forEach((function(t) {
                                    if (t.name.startsWith("data-module")) {
                                        var i = t.value,
                                            s = t.name.split("-").splice(2),
                                            r = e.toCamel(s) + "-" + i,
                                            n = !1;
                                        e.currentModules[r] ? n = !0 : e.currentModules[e.toUpper(r)] && (r = e.toUpper(r), n = !0), n && (e.destroyModule(e.currentModules[r]), delete e.currentModules[r])
                                    }
                                }))
                            })), this.activeModules = {}, this.newModules = {}
                        }
                    }, {
                        key: "destroyModules",
                        value: function() {
                            var t = this;
                            Object.entries(this.currentModules).forEach((function(e) {
                                var i = h(e, 2),
                                    s = (i[0], i[1]);
                                t.destroyModule(s)
                            })), this.currentModules = []
                        }
                    }, {
                        key: "destroyModule",
                        value: function(t) {
                            t.mDestroy(), t.destroy()
                        }
                    }, {
                        key: "toCamel",
                        value: function(t) {
                            var e = this;
                            return t.reduce((function(t, i) {
                                return t + e.toUpper(i)
                            }))
                        }
                    }, {
                        key: "toUpper",
                        value: function(t) {
                            return t.charAt(0).toUpperCase() + t.slice(1)
                        }
                    }]), t
                }();
            e.A = f
        },
        568: function(t, e) {
            "use strict";

            function i(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var s = e[i];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
                }
            }

            function s(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var i = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null == i) return;
                    var s, r, n = [],
                        a = !0,
                        o = !1;
                    try {
                        for (i = i.call(t); !(a = (s = i.next()).done) && (n.push(s.value), !e || n.length !== e); a = !0);
                    } catch (t) {
                        o = !0, r = t
                    } finally {
                        try {
                            a || null == i.return || i.return()
                        } finally {
                            if (o) throw r
                        }
                    }
                    return n
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return r(t, e);
                    var i = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === i && t.constructor && (i = t.constructor.name);
                    if ("Map" === i || "Set" === i) return Array.from(t);
                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return r(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function r(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, s = new Array(e); i < e; i++) s[i] = t[i];
                return s
            }
            var n = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.defaults = {
                        name: "load",
                        loadingClass: "is-loading",
                        loadedClass: "is-loaded",
                        readyClass: "is-ready",
                        transitionsPrefix: "is-",
                        transitionsHistory: !0,
                        enterDelay: 0,
                        exitDelay: 0,
                        loadedDelay: 0,
                        isLoaded: !1,
                        isEntered: !1,
                        isUrl: !1,
                        transitionContainer: null,
                        popstateIgnore: !1
                    }, Object.assign(this, this.defaults, e), this.options = e, this.namespace = "modular", this.html = document.documentElement, this.href = window.location.href, this.container = "data-" + this.name + "-container", this.subContainer = !1, this.prevTransition = null, this.loadAttributes = ["src", "srcset", "style", "href"], this.isInserted = !1, this.isLoading = !1, this.enterTimeout = !1, this.controller = new AbortController, this.classContainer = this.html, this.isChrome = -1 != navigator.userAgent.indexOf("Chrome"), this.init()
                }
                var e, r, n;
                return e = t, (r = [{
                    key: "init",
                    value: function() {
                        var t = this;
                        window.addEventListener("popstate", (function(e) {
                            return t.checkState(e)
                        }), !1), this.html.addEventListener("click", (function(e) {
                            return t.checkClick(e)
                        }), !1), this.loadEls(document)
                    }
                }, {
                    key: "checkClick",
                    value: function(t) {
                        if (!t.ctrlKey && !t.metaKey)
                            for (var e = t.target; e && e !== document;) {
                                if (e.matches("a") && null == e.getAttribute("download")) {
                                    var i = e.getAttribute("href");
                                    i.startsWith("#") || i.startsWith("mailto:") || i.startsWith("tel:") || (t.preventDefault(), this.reset(), this.getClickOptions(e));
                                    break
                                }
                                e = e.parentNode
                            }
                    }
                }, {
                    key: "checkState",
                    value: function() {
                        "string" == typeof this.popstateIgnore && window.location.href.indexOf(this.popstateIgnore) > -1 || (this.reset(), this.getStateOptions())
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this.isLoading && (this.controller.abort(), this.isLoading = !1, this.controller = new AbortController), window.clearTimeout(this.enterTimeout), this.isInserted && this.removeContainer(), this.classContainer = this.html, Object.assign(this, this.defaults, this.options)
                    }
                }, {
                    key: "getClickOptions",
                    value: function(t) {
                        this.transition = t.getAttribute("data-" + this.name), this.isUrl = t.getAttribute("data-" + this.name + "-url");
                        var e = t.getAttribute("href");
                        "_blank" != t.getAttribute("target") ? "false" != this.transition ? this.setOptions(e, !0) : window.location = e : window.open(e, "_blank")
                    }
                }, {
                    key: "getStateOptions",
                    value: function() {
                        this.transitionsHistory ? this.transition = history.state : this.transition = !1;
                        var t = window.location.href;
                        this.setOptions(t)
                    }
                }, {
                    key: "goTo",
                    value: function(t, e, i) {
                        this.reset(), this.transition = e, this.isUrl = i, this.setOptions(t, !0)
                    }
                }, {
                    key: "setOptions",
                    value: function(t, e) {
                        var i, s = "[" + this.container + "]";
                        this.transition && "true" != this.transition && (this.transitionContainer = "[" + this.container + '="' + this.transition + '"]', this.loadingClass = this.transitions[this.transition].loadingClass || this.loadingClass, this.loadedClass = this.transitions[this.transition].loadedClass || this.loadedClass, this.readyClass = this.transitions[this.transition].readyClass || this.readyClass, this.transitionsPrefix = this.transitions[this.transition].transitionsPrefix || this.transitionsPrefix, this.enterDelay = this.transitions[this.transition].enterDelay || this.enterDelay, this.exitDelay = this.transitions[this.transition].exitDelay || this.exitDelay, this.loadedDelay = this.transitions[this.transition].loadedDelay || this.loadedDelay, i = document.querySelector(this.transitionContainer)), i ? (s = this.transitionContainer, this.oldContainer = i, this.classContainer = this.oldContainer.parentNode, this.subContainer || history.replaceState(this.transition, null, this.href), this.subContainer = !0) : (this.oldContainer = document.querySelector(s), this.subContainer && history.replaceState(this.prevTransition, null, this.href), this.subContainer = !1), this.href = t, this.parentContainer = this.oldContainer.parentNode, "" === this.isUrl || null != this.isUrl && "false" != this.isUrl && 0 != this.isUrl ? history.pushState(this.transition, null, t) : (this.oldContainer.classList.add("is-old"), this.setLoading(), this.startEnterDelay(), this.loadHref(t, s, e))
                    }
                }, {
                    key: "setLoading",
                    value: function() {
                        this.classContainer.classList.remove(this.loadedClass, this.readyClass), this.classContainer.classList.add(this.loadingClass), this.classContainer.classList.remove(this.transitionsPrefix + this.prevTransition), this.transition && this.classContainer.classList.add(this.transitionsPrefix + this.transition), this.subContainer || (this.prevTransition = this.transition);
                        var t = new Event(this.namespace + "loading");
                        window.dispatchEvent(t)
                    }
                }, {
                    key: "startEnterDelay",
                    value: function() {
                        var t = this;
                        this.enterTimeout = window.setTimeout((function() {
                            t.isEntered = !0, t.isLoaded && t.transitionContainers()
                        }), this.enterDelay)
                    }
                }, {
                    key: "loadHref",
                    value: function(t, e, i) {
                        var s = this;
                        this.isLoading = !0;
                        var r = this.controller.signal;
                        fetch(t, {
                            signal: r
                        }).then((function(t) {
                            return t.text()
                        })).then((function(r) {
                            i && history.pushState(s.transition, null, t);
                            var n = new DOMParser;
                            s.data = n.parseFromString(r, "text/html"), s.newContainer = s.data.querySelector(e), s.newContainer.classList.add("is-new"), s.parentNewContainer = s.newContainer.parentNode, s.hideContainer(), s.parentContainer.insertBefore(s.newContainer, s.oldContainer), s.isInserted = !0, s.setSvgs(), s.isLoaded = !0, s.isEntered && s.transitionContainers(), s.loadEls(s.newContainer), s.isLoading = !1
                        })).catch((function(e) {
                            window.location = t
                        }))
                    }
                }, {
                    key: "transitionContainers",
                    value: function() {
                        var t = this;
                        this.setAttributes(), this.showContainer(), this.setLoaded(), setTimeout((function() {
                            t.removeContainer(), t.setReady()
                        }), this.exitDelay)
                    }
                }, {
                    key: "setSvgs",
                    value: function() {
                        if (this.isChrome) {
                            var t = this.newContainer.querySelectorAll("use");
                            t.length && t.forEach((function(t) {
                                var e = t.getAttribute("xlink:href");
                                if (e) t.parentNode.innerHTML = '<use xlink:href="' + e + '"></use>';
                                else {
                                    var i = t.getAttribute("href");
                                    i && (t.parentNode.innerHTML = '<use href="' + i + '"></use>')
                                }
                            }))
                        }
                    }
                }, {
                    key: "setAttributes",
                    value: function() {
                        var t, e, i = this,
                            r = this.data.getElementsByTagName("title")[0],
                            n = this.data.head.querySelector('meta[name="description"]'),
                            a = document.head.querySelector('meta[name="description"]');
                        this.subContainer ? (e = this.parentNewContainer, t = document.querySelector(this.transitionContainer).parentNode) : (e = this.data.querySelector("html"), t = document.querySelector("html"));
                        var o = Object.assign({}, e.dataset);
                        r && (document.title = r.innerText), a && n && a.setAttribute("content", n.getAttribute("content")), o && Object.entries(o).forEach((function(e) {
                            var r = s(e, 2),
                                n = r[0],
                                a = r[1];
                            t.setAttribute("data-" + i.toDash(n), a)
                        }))
                    }
                }, {
                    key: "toDash",
                    value: function(t) {
                        return t.split(/(?=[A-Z])/).join("-").toLowerCase()
                    }
                }, {
                    key: "hideContainer",
                    value: function() {
                        this.newContainer.style.visibility = "hidden", this.newContainer.style.height = 0, this.newContainer.style.overflow = "hidden"
                    }
                }, {
                    key: "showContainer",
                    value: function() {
                        this.newContainer.style.visibility = "", this.newContainer.style.height = "", this.newContainer.style.overflow = ""
                    }
                }, {
                    key: "loadEls",
                    value: function(t) {
                        var e = this,
                            i = [];
                        this.loadAttributes.forEach((function(s) {
                            var r = "data-" + e.name + "-" + s,
                                n = t.querySelectorAll("[" + r + "]");
                            n.length && n.forEach((function(t) {
                                var e = t.getAttribute(r);
                                if (t.setAttribute(s, e), "src" == s || "srcset" == s) {
                                    var n = new Promise((function(e) {
                                        t.onload = function() {
                                            return e(t)
                                        }
                                    }));
                                    i.push(n)
                                }
                            }))
                        })), Promise.all(i).then((function(t) {
                            var i = new Event(e.namespace + "images");
                            window.dispatchEvent(i)
                        }))
                    }
                }, {
                    key: "setLoaded",
                    value: function() {
                        var t = this;
                        this.classContainer.classList.remove(this.loadingClass), setTimeout((function() {
                            t.classContainer.classList.add(t.loadedClass)
                        }), this.loadedDelay);
                        var e = new Event(this.namespace + "loaded");
                        window.dispatchEvent(e)
                    }
                }, {
                    key: "removeContainer",
                    value: function() {
                        this.parentContainer.removeChild(this.oldContainer), this.newContainer.classList.remove("is-new"), this.isInserted = !1
                    }
                }, {
                    key: "setReady",
                    value: function() {
                        this.classContainer.classList.add(this.readyClass);
                        var t = new Event(this.namespace + "ready");
                        window.dispatchEvent(t)
                    }
                }, {
                    key: "on",
                    value: function(t, e) {
                        var i = this;
                        window.addEventListener(this.namespace + t, (function() {
                            switch (t) {
                                case "loading":
                                    return e(i.transition, i.oldContainer);
                                case "loaded":
                                    return e(i.transition, i.oldContainer, i.newContainer);
                                case "ready":
                                    return e(i.transition, i.newContainer);
                                default:
                                    return e()
                            }
                        }), !1)
                    }
                }]) && i(e.prototype, r), n && i(e, n), t
            }();
            e.A = n
        },
        338: function(t, e) {
            var i, s;
            s = this, void 0 === (i = function() {
                return s.svg4everybody = function() {
                    function t(t, e, i) {
                        if (i) {
                            var s = document.createDocumentFragment(),
                                r = !e.hasAttribute("viewBox") && i.getAttribute("viewBox");
                            r && e.setAttribute("viewBox", r);
                            for (var n = i.cloneNode(!0); n.childNodes.length;) s.appendChild(n.firstChild);
                            t.appendChild(s)
                        }
                    }

                    function e(e) {
                        e.onreadystatechange = function() {
                            if (4 === e.readyState) {
                                var i = e._cachedDocument;
                                i || ((i = e._cachedDocument = document.implementation.createHTMLDocument("")).body.innerHTML = e.responseText, e._cachedTarget = {}), e._embeds.splice(0).map((function(s) {
                                    var r = e._cachedTarget[s.id];
                                    r || (r = e._cachedTarget[s.id] = i.getElementById(s.id)), t(s.parent, s.svg, r)
                                }))
                            }
                        }, e.onreadystatechange()
                    }

                    function i(i) {
                        function r() {
                            for (var i = 0; i < d.length;) {
                                var o = d[i],
                                    h = o.parentNode,
                                    l = s(h),
                                    u = o.getAttribute("xlink:href") || o.getAttribute("href");
                                if (!u && a.attributeName && (u = o.getAttribute(a.attributeName)), l && u) {
                                    if (n)
                                        if (!a.validate || a.validate(u, l, o)) {
                                            h.removeChild(o);
                                            var c = u.split("#"),
                                                g = c.shift(),
                                                v = c.join("#");
                                            if (g.length) {
                                                var y = p[g];
                                                y || ((y = p[g] = new XMLHttpRequest).open("GET", g), y.send(), y._embeds = []), y._embeds.push({
                                                    parent: h,
                                                    svg: l,
                                                    id: v
                                                }), e(y)
                                            } else t(h, l, document.getElementById(v))
                                        } else ++i, ++m
                                } else ++i
                            }(!d.length || d.length - m > 0) && f(r, 67)
                        }
                        var n, a = Object(i),
                            o = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,
                            h = /\bAppleWebKit\/(\d+)\b/,
                            l = /\bEdge\/12\.(\d+)\b/,
                            u = /\bEdge\/.(\d+)\b/,
                            c = window.top !== window.self;
                        n = "polyfill" in a ? a.polyfill : o.test(navigator.userAgent) || (navigator.userAgent.match(l) || [])[1] < 10547 || (navigator.userAgent.match(h) || [])[1] < 537 || u.test(navigator.userAgent) && c;
                        var p = {},
                            f = window.requestAnimationFrame || setTimeout,
                            d = document.getElementsByTagName("use"),
                            m = 0;
                        n && r()
                    }

                    function s(t) {
                        for (var e = t;
                            "svg" !== e.nodeName.toLowerCase() && (e = e.parentNode););
                        return e
                    }
                    return i
                }()
            }.apply(e, [])) || (t.exports = i)
        },
        354: function(t, e, i) {
            "use strict";
            i.d(e, {
                A: function() {
                    return _
                }
            });
            var s = function() {
                return s = Object.assign || function(t) {
                    for (var e, i = 1, s = arguments.length; i < s; i++)
                        for (var r in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }, s.apply(this, arguments)
            };

            function r(t, e, i) {
                return Math.max(t, Math.min(e, i))
            }
            "function" == typeof SuppressedError && SuppressedError;
            class n {
                advance(t) {
                    if (!this.isRunning) return;
                    let e = !1;
                    if (this.lerp) this.value = function(t, e, i, s) {
                        return function(t, e, i) {
                            return (1 - i) * t + i * e
                        }(t, e, 1 - Math.exp(-i * s))
                    }(this.value, this.to, 60 * this.lerp, t), Math.round(this.value) === this.to && (this.value = this.to, e = !0);
                    else {
                        this.currentTime += t;
                        const i = r(0, this.currentTime / this.duration, 1);
                        e = i >= 1;
                        const s = e ? 1 : this.easing(i);
                        this.value = this.from + (this.to - this.from) * s
                    }
                    e && this.stop(), this.onUpdate?.(this.value, e)
                }
                stop() {
                    this.isRunning = !1
                }
                fromTo(t, e, {
                    lerp: i = .1,
                    duration: s = 1,
                    easing: r = (t => t),
                    onStart: n,
                    onUpdate: a
                }) {
                    this.from = this.value = t, this.to = e, this.lerp = i, this.duration = s, this.easing = r, this.currentTime = 0, this.isRunning = !0, n?.(), this.onUpdate = a
                }
            }
            class a {
                constructor({
                    wrapper: t,
                    content: e,
                    autoResize: i = !0,
                    debounce: s = 250
                } = {}) {
                    this.wrapper = t, this.content = e, i && (this.debouncedResize = function(t, e) {
                        let i;
                        return function() {
                            let s = arguments,
                                r = this;
                            clearTimeout(i), i = setTimeout((function() {
                                t.apply(r, s)
                            }), e)
                        }
                    }(this.resize, s), this.wrapper === window ? window.addEventListener("resize", this.debouncedResize, !1) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize()
                }
                destroy() {
                    this.wrapperResizeObserver?.disconnect(), this.contentResizeObserver?.disconnect(), window.removeEventListener("resize", this.debouncedResize, !1)
                }
                resize = () => {
                    this.onWrapperResize(), this.onContentResize()
                };
                onWrapperResize = () => {
                    this.wrapper === window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight)
                };
                onContentResize = () => {
                    this.wrapper === window ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth)
                };
                get limit() {
                    return {
                        x: this.scrollWidth - this.width,
                        y: this.scrollHeight - this.height
                    }
                }
            }
            class o {
                constructor() {
                    this.events = {}
                }
                emit(t, ...e) {
                    let i = this.events[t] || [];
                    for (let t = 0, s = i.length; t < s; t++) i[t](...e)
                }
                on(t, e) {
                    return this.events[t]?.push(e) || (this.events[t] = [e]), () => {
                        this.events[t] = this.events[t]?.filter((t => e !== t))
                    }
                }
                off(t, e) {
                    this.events[t] = this.events[t]?.filter((t => e !== t))
                }
                destroy() {
                    this.events = {}
                }
            }
            const h = 100 / 6;
            class l {
                constructor(t, {
                    wheelMultiplier: e = 1,
                    touchMultiplier: i = 1
                }) {
                    this.element = t, this.wheelMultiplier = e, this.touchMultiplier = i, this.touchStart = {
                        x: null,
                        y: null
                    }, this.emitter = new o, window.addEventListener("resize", this.onWindowResize, !1), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, {
                        passive: !1
                    }), this.element.addEventListener("touchstart", this.onTouchStart, {
                        passive: !1
                    }), this.element.addEventListener("touchmove", this.onTouchMove, {
                        passive: !1
                    }), this.element.addEventListener("touchend", this.onTouchEnd, {
                        passive: !1
                    })
                }
                on(t, e) {
                    return this.emitter.on(t, e)
                }
                destroy() {
                    this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize, !1), this.element.removeEventListener("wheel", this.onWheel, {
                        passive: !1
                    }), this.element.removeEventListener("touchstart", this.onTouchStart, {
                        passive: !1
                    }), this.element.removeEventListener("touchmove", this.onTouchMove, {
                        passive: !1
                    }), this.element.removeEventListener("touchend", this.onTouchEnd, {
                        passive: !1
                    })
                }
                onTouchStart = t => {
                    const {
                        clientX: e,
                        clientY: i
                    } = t.targetTouches ? t.targetTouches[0] : t;
                    this.touchStart.x = e, this.touchStart.y = i, this.lastDelta = {
                        x: 0,
                        y: 0
                    }, this.emitter.emit("scroll", {
                        deltaX: 0,
                        deltaY: 0,
                        event: t
                    })
                };
                onTouchMove = t => {
                    const {
                        clientX: e,
                        clientY: i
                    } = t.targetTouches ? t.targetTouches[0] : t, s = -(e - this.touchStart.x) * this.touchMultiplier, r = -(i - this.touchStart.y) * this.touchMultiplier;
                    this.touchStart.x = e, this.touchStart.y = i, this.lastDelta = {
                        x: s,
                        y: r
                    }, this.emitter.emit("scroll", {
                        deltaX: s,
                        deltaY: r,
                        event: t
                    })
                };
                onTouchEnd = t => {
                    this.emitter.emit("scroll", {
                        deltaX: this.lastDelta.x,
                        deltaY: this.lastDelta.y,
                        event: t
                    })
                };
                onWheel = t => {
                    let {
                        deltaX: e,
                        deltaY: i,
                        deltaMode: s
                    } = t;
                    e *= 1 === s ? h : 2 === s ? this.windowWidth : 1, i *= 1 === s ? h : 2 === s ? this.windowHeight : 1, e *= this.wheelMultiplier, i *= this.wheelMultiplier, this.emitter.emit("scroll", {
                        deltaX: e,
                        deltaY: i,
                        event: t
                    })
                };
                onWindowResize = () => {
                    this.windowWidth = window.innerWidth, this.windowHeight = window.innerHeight
                }
            }
            var u = function() {
                function t(t) {
                    var e = void 0 === t ? {} : t,
                        i = e.wrapper,
                        r = void 0 === i ? window : i,
                        h = e.content,
                        u = void 0 === h ? document.documentElement : h,
                        c = e.wheelEventsTarget,
                        p = void 0 === c ? r : c,
                        f = e.eventsTarget,
                        d = void 0 === f ? p : f,
                        m = e.smoothWheel,
                        g = void 0 === m || m,
                        v = e.syncTouch,
                        y = void 0 !== v && v,
                        D = e.syncTouchLerp,
                        _ = void 0 === D ? .075 : D,
                        b = e.touchInertiaMultiplier,
                        C = void 0 === b ? 35 : b,
                        w = e.duration,
                        E = e.easing,
                        x = void 0 === E ? function(t) {
                            return Math.min(1, 1.001 - Math.pow(2, -10 * t))
                        } : E,
                        S = e.lerp,
                        F = void 0 === S ? !w && .1 : S,
                        k = e.infinite,
                        T = void 0 !== k && k,
                        A = e.orientation,
                        M = void 0 === A ? "vertical" : A,
                        P = e.gestureOrientation,
                        I = void 0 === P ? "vertical" : P,
                        O = e.touchMultiplier,
                        L = void 0 === O ? 1 : O,
                        R = e.wheelMultiplier,
                        B = void 0 === R ? 1 : R,
                        N = e.autoResize,
                        z = void 0 === N || N,
                        V = e.__experimental__naiveDimensions,
                        j = void 0 !== V && V,
                        q = this;
                    this.__isSmooth = !1, this.__isScrolling = !1, this.__isStopped = !1, this.__isLocked = !1, this.onVirtualScroll = function(t) {
                        var e = t.deltaX,
                            i = t.deltaY,
                            r = t.event;
                        if (!r.ctrlKey) {
                            var n = r.type.includes("touch"),
                                a = r.type.includes("wheel");
                            if (q.options.syncTouch && n && "touchstart" === r.type && !q.isStopped && !q.isLocked) q.reset();
                            else {
                                var o = 0 === e && 0 === i,
                                    h = "vertical" === q.options.gestureOrientation && 0 === i || "horizontal" === q.options.gestureOrientation && 0 === e;
                                if (!o && !h) {
                                    var l = r.composedPath();
                                    if (!(l = l.slice(0, l.indexOf(q.rootElement))).find((function(t) {
                                            var e, i, s, r, o;
                                            return (null === (e = t.hasAttribute) || void 0 === e ? void 0 : e.call(t, "data-lenis-prevent")) || n && (null === (i = t.hasAttribute) || void 0 === i ? void 0 : i.call(t, "data-lenis-prevent-touch")) || a && (null === (s = t.hasAttribute) || void 0 === s ? void 0 : s.call(t, "data-lenis-prevent-wheel")) || (null === (r = t.classList) || void 0 === r ? void 0 : r.contains("lenis")) && !(null === (o = t.classList) || void 0 === o ? void 0 : o.contains("lenis-stopped"))
                                        })))
                                        if (q.isStopped || q.isLocked) r.preventDefault();
                                        else {
                                            if (q.isSmooth = q.options.syncTouch && n || q.options.smoothWheel && a, !q.isSmooth) return q.isScrolling = !1, void q.animate.stop();
                                            r.preventDefault();
                                            var u = i;
                                            "both" === q.options.gestureOrientation ? u = Math.abs(i) > Math.abs(e) ? i : e : "horizontal" === q.options.gestureOrientation && (u = e);
                                            var c = n && q.options.syncTouch,
                                                p = n && "touchend" === r.type && Math.abs(u) > 5;
                                            p && (u = q.velocity * q.options.touchInertiaMultiplier), q.scrollTo(q.targetScroll + u, s({
                                                programmatic: !1
                                            }, c ? {
                                                lerp: p ? q.options.syncTouchLerp : 1
                                            } : {
                                                lerp: q.options.lerp,
                                                duration: q.options.duration,
                                                easing: q.options.easing
                                            }))
                                        }
                                }
                            }
                        }
                    }, this.onNativeScroll = function() {
                        if (!q.__preventNextScrollEvent && !q.isScrolling) {
                            var t = q.animatedScroll;
                            q.animatedScroll = q.targetScroll = q.actualScroll, q.velocity = 0, q.direction = Math.sign(q.animatedScroll - t), q.emit()
                        }
                    }, window.lenisVersion = "1.0.45", r !== document.documentElement && r !== document.body || (r = window), this.options = {
                        wrapper: r,
                        content: u,
                        wheelEventsTarget: p,
                        eventsTarget: d,
                        smoothWheel: g,
                        syncTouch: y,
                        syncTouchLerp: _,
                        touchInertiaMultiplier: C,
                        duration: w,
                        easing: x,
                        lerp: F,
                        infinite: T,
                        gestureOrientation: I,
                        orientation: M,
                        touchMultiplier: L,
                        wheelMultiplier: B,
                        autoResize: z,
                        __experimental__naiveDimensions: j
                    }, this.animate = new n, this.emitter = new o, this.dimensions = new a({
                        wrapper: r,
                        content: u,
                        autoResize: z
                    }), this.toggleClassName("lenis", !0), this.velocity = 0, this.isLocked = !1, this.isStopped = !1, this.isSmooth = y || g, this.isScrolling = !1, this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll, !1), this.virtualScroll = new l(d, {
                        touchMultiplier: L,
                        wheelMultiplier: B
                    }), this.virtualScroll.on("scroll", this.onVirtualScroll)
                }
                return t.prototype.destroy = function() {
                    this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, !1), this.virtualScroll.destroy(), this.dimensions.destroy(), this.toggleClassName("lenis", !1), this.toggleClassName("lenis-smooth", !1), this.toggleClassName("lenis-scrolling", !1), this.toggleClassName("lenis-stopped", !1), this.toggleClassName("lenis-locked", !1)
                }, t.prototype.on = function(t, e) {
                    return this.emitter.on(t, e)
                }, t.prototype.off = function(t, e) {
                    return this.emitter.off(t, e)
                }, t.prototype.setScroll = function(t) {
                    this.isHorizontal ? this.rootElement.scrollLeft = t : this.rootElement.scrollTop = t
                }, t.prototype.resize = function() {
                    this.dimensions.resize()
                }, t.prototype.emit = function() {
                    this.emitter.emit("scroll", this)
                }, t.prototype.reset = function() {
                    this.isLocked = !1, this.isScrolling = !1, this.animatedScroll = this.targetScroll = this.actualScroll, this.velocity = 0, this.animate.stop()
                }, t.prototype.start = function() {
                    this.isStopped && (this.isStopped = !1, this.reset())
                }, t.prototype.stop = function() {
                    this.isStopped || (this.isStopped = !0, this.animate.stop(), this.reset())
                }, t.prototype.raf = function(t) {
                    var e = t - (this.time || t);
                    this.time = t, this.animate.advance(.001 * e)
                }, t.prototype.scrollTo = function(t, e) {
                    var i = this,
                        s = void 0 === e ? {} : e,
                        n = s.offset,
                        a = void 0 === n ? 0 : n,
                        o = s.immediate,
                        h = void 0 !== o && o,
                        l = s.lock,
                        u = void 0 !== l && l,
                        c = s.duration,
                        p = void 0 === c ? this.options.duration : c,
                        f = s.easing,
                        d = void 0 === f ? this.options.easing : f,
                        m = s.lerp,
                        g = void 0 === m ? !p && this.options.lerp : m,
                        v = s.onComplete,
                        y = s.force,
                        D = void 0 !== y && y,
                        _ = s.programmatic,
                        b = void 0 === _ || _;
                    if (!this.isStopped && !this.isLocked || D) {
                        if (["top", "left", "start"].includes(t)) t = 0;
                        else if (["bottom", "right", "end"].includes(t)) t = this.limit;
                        else {
                            var C = void 0;
                            if ("string" == typeof t ? C = document.querySelector(t) : (null == t ? void 0 : t.nodeType) && (C = t), C) {
                                if (this.options.wrapper !== window) {
                                    var w = this.options.wrapper.getBoundingClientRect();
                                    a -= this.isHorizontal ? w.left : w.top
                                }
                                var E = C.getBoundingClientRect();
                                t = (this.isHorizontal ? E.left : E.top) + this.animatedScroll
                            }
                        }
                        if ("number" == typeof t) {
                            if (t += a, t = Math.round(t), this.options.infinite ? b && (this.targetScroll = this.animatedScroll = this.scroll) : t = r(0, t, this.limit), h) return this.animatedScroll = this.targetScroll = t, this.setScroll(this.scroll), this.reset(), void(null == v || v(this));
                            if (!b) {
                                if (t === this.targetScroll) return;
                                this.targetScroll = t
                            }
                            this.animate.fromTo(this.animatedScroll, t, {
                                duration: p,
                                easing: d,
                                lerp: g,
                                onStart: function() {
                                    u && (i.isLocked = !0), i.isScrolling = !0
                                },
                                onUpdate: function(t, e) {
                                    i.isScrolling = !0, i.velocity = t - i.animatedScroll, i.direction = Math.sign(i.velocity), i.animatedScroll = t, i.setScroll(i.scroll), b && (i.targetScroll = t), e || i.emit(), e && (i.reset(), i.emit(), null == v || v(i), i.__preventNextScrollEvent = !0, requestAnimationFrame((function() {
                                        delete i.__preventNextScrollEvent
                                    })))
                                }
                            })
                        }
                    }
                }, Object.defineProperty(t.prototype, "rootElement", {
                    get: function() {
                        return this.options.wrapper === window ? document.documentElement : this.options.wrapper
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "limit", {
                    get: function() {
                        return this.options.__experimental__naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"]
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isHorizontal", {
                    get: function() {
                        return "horizontal" === this.options.orientation
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "actualScroll", {
                    get: function() {
                        return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "scroll", {
                    get: function() {
                        return this.options.infinite ? function(t, e) {
                            return (t % e + e) % e
                        }(this.animatedScroll, this.limit) : this.animatedScroll
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "progress", {
                    get: function() {
                        return 0 === this.limit ? 1 : this.scroll / this.limit
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isSmooth", {
                    get: function() {
                        return this.__isSmooth
                    },
                    set: function(t) {
                        this.__isSmooth !== t && (this.__isSmooth = t, this.toggleClassName("lenis-smooth", t))
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isScrolling", {
                    get: function() {
                        return this.__isScrolling
                    },
                    set: function(t) {
                        this.__isScrolling !== t && (this.__isScrolling = t, this.toggleClassName("lenis-scrolling", t))
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isStopped", {
                    get: function() {
                        return this.__isStopped
                    },
                    set: function(t) {
                        this.__isStopped !== t && (this.__isStopped = t, this.toggleClassName("lenis-stopped", t))
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isLocked", {
                    get: function() {
                        return this.__isLocked
                    },
                    set: function(t) {
                        this.__isLocked !== t && (this.__isLocked = t, this.toggleClassName("lenis-locked", t))
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "className", {
                    get: function() {
                        var t = "lenis";
                        return this.isStopped && (t += " lenis-stopped"), this.isLocked && (t += " lenis-locked"), this.isScrolling && (t += " lenis-scrolling"), this.isSmooth && (t += " lenis-smooth"), t
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.toggleClassName = function(t, e) {
                    this.rootElement.classList.toggle(t, e), this.emitter.emit("className change", this)
                }, t
            }();

            function c() {
                return c = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = arguments[e];
                        for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s])
                    }
                    return t
                }, c.apply(this, arguments)
            }
            class p {
                constructor({
                    scrollElements: t,
                    rootMargin: e = "-1px -1px -1px -1px",
                    IORaf: i
                }) {
                    this.scrollElements = void 0, this.rootMargin = void 0, this.IORaf = void 0, this.observer = void 0, this.scrollElements = t, this.rootMargin = e, this.IORaf = i, this._init()
                }
                _init() {
                    this.observer = new IntersectionObserver((t => {
                        t.forEach((t => {
                            const e = this.scrollElements.find((e => e.$el === t.target));
                            t.isIntersecting ? (e && (e.isAlreadyIntersected = !0), this._setInview(t)) : e && e.isAlreadyIntersected && this._setOutOfView(t)
                        }))
                    }), {
                        rootMargin: this.rootMargin
                    });
                    for (const t of this.scrollElements) this.observe(t.$el)
                }
                destroy() {
                    this.observer.disconnect()
                }
                observe(t) {
                    t && this.observer.observe(t)
                }
                unobserve(t) {
                    t && this.observer.unobserve(t)
                }
                _setInview(t) {
                    const e = this.scrollElements.find((e => e.$el === t.target));
                    this.IORaf && (null == e || e.setInteractivityOn()), !this.IORaf && (null == e || e.setInview())
                }
                _setOutOfView(t) {
                    const e = this.scrollElements.find((e => e.$el === t.target));
                    this.IORaf && (null == e || e.setInteractivityOff()), !this.IORaf && (null == e || e.setOutOfView()), null != e && e.attributes.scrollRepeat || this.IORaf || this.unobserve(t.target)
                }
            }

            function f(t, e, i, s, r) {
                return i + ((r - t) / (e - t) * (s - i) || 0)
            }

            function d(t, e) {
                return t.reduce(((t, i) => Math.abs(i - e) < Math.abs(t - e) ? i : t))
            }
            class m {
                constructor({
                    $el: t,
                    id: e,
                    modularInstance: i,
                    subscribeElementUpdateFn: s,
                    unsubscribeElementUpdateFn: r,
                    needRaf: n,
                    scrollOrientation: a
                }) {
                    var o, h, l, u, c;
                    this.$el = void 0, this.id = void 0, this.needRaf = void 0, this.attributes = void 0, this.scrollOrientation = void 0, this.isAlreadyIntersected = void 0, this.intersection = void 0, this.metrics = void 0, this.currentScroll = void 0, this.translateValue = void 0, this.progress = void 0, this.lastProgress = void 0, this.modularInstance = void 0, this.progressModularModules = void 0, this.isInview = void 0, this.isInteractive = void 0, this.isInFold = void 0, this.isFirstResize = void 0, this.subscribeElementUpdateFn = void 0, this.unsubscribeElementUpdateFn = void 0, this.$el = t, this.id = e, this.needRaf = n, this.scrollOrientation = a, this.modularInstance = i, this.subscribeElementUpdateFn = s, this.unsubscribeElementUpdateFn = r, this.attributes = {
                        scrollClass: null != (o = this.$el.dataset.scrollClass) ? o : "is-inview",
                        scrollOffset: null != (h = this.$el.dataset.scrollOffset) ? h : "0,0",
                        scrollPosition: null != (l = this.$el.dataset.scrollPosition) ? l : "start,end",
                        scrollModuleProgress: null != this.$el.dataset.scrollModuleProgress,
                        scrollCssProgress: null != this.$el.dataset.scrollCssProgress,
                        scrollEventProgress: null != (u = this.$el.dataset.scrollEventProgress) ? u : null,
                        scrollSpeed: null != this.$el.dataset.scrollSpeed ? parseFloat(this.$el.dataset.scrollSpeed) : null,
                        scrollRepeat: null != this.$el.dataset.scrollRepeat,
                        scrollCall: null != (c = this.$el.dataset.scrollCall) ? c : null,
                        scrollCallSelf: null != this.$el.dataset.scrollCallSelf,
                        scrollIgnoreFold: null != this.$el.dataset.scrollIgnoreFold,
                        scrollEnableTouchSpeed: null != this.$el.dataset.scrollEnableTouchSpeed
                    }, this.intersection = {
                        start: 0,
                        end: 0
                    }, this.metrics = {
                        offsetStart: 0,
                        offsetEnd: 0,
                        bcr: {}
                    }, this.currentScroll = "vertical" === this.scrollOrientation ? window.scrollY : window.scrollX, this.translateValue = 0, this.progress = 0, this.lastProgress = null, this.progressModularModules = [], this.isInview = !1, this.isInteractive = !1, this.isAlreadyIntersected = !1, this.isInFold = !1, this.isFirstResize = !0, this._init()
                }
                _init() {
                    this.needRaf && (this.modularInstance && this.attributes.scrollModuleProgress && this._getProgressModularModules(), this._resize())
                }
                onResize({
                    currentScroll: t
                }) {
                    this.currentScroll = t, this._resize()
                }
                onRender({
                    currentScroll: t,
                    smooth: e
                }) {
                    const i = "vertical" === this.scrollOrientation ? window.innerHeight : window.innerWidth;
                    if (this.currentScroll = t, this._computeProgress(), this.attributes.scrollSpeed && !isNaN(this.attributes.scrollSpeed))
                        if (this.attributes.scrollEnableTouchSpeed || e) {
                            if (this.isInFold) {
                                const t = Math.max(0, this.progress);
                                this.translateValue = t * i * this.attributes.scrollSpeed * -1
                            } else {
                                const t = f(0, 1, -1, 1, this.progress);
                                this.translateValue = t * i * this.attributes.scrollSpeed * -1
                            }
                            this.$el.style.transform = "vertical" === this.scrollOrientation ? `translate3d(0, ${this.translateValue}px, 0)` : `translate3d(${this.translateValue}px, 0, 0)`
                        } else this.translateValue && (this.$el.style.transform = "translate3d(0, 0, 0)"), this.translateValue = 0
                }
                setInview() {
                    if (this.isInview) return;
                    this.isInview = !0, this.$el.classList.add(this.attributes.scrollClass);
                    const t = this._getScrollCallFrom();
                    this.attributes.scrollCall && this._dispatchCall("enter", t)
                }
                setOutOfView() {
                    if (!this.isInview || !this.attributes.scrollRepeat) return;
                    this.isInview = !1, this.$el.classList.remove(this.attributes.scrollClass);
                    const t = this._getScrollCallFrom();
                    this.attributes.scrollCall && this._dispatchCall("leave", t)
                }
                setInteractivityOn() {
                    this.isInteractive || (this.isInteractive = !0, this.subscribeElementUpdateFn(this))
                }
                setInteractivityOff() {
                    this.isInteractive && (this.isInteractive = !1, this.unsubscribeElementUpdateFn(this), null != this.lastProgress && this._computeProgress(d([0, 1], this.lastProgress)))
                }
                _resize() {
                    this.metrics.bcr = this.$el.getBoundingClientRect(), this._computeMetrics(), this._computeIntersection(), this.isFirstResize && (this.isFirstResize = !1, this.isInFold && this.setInview())
                }
                _computeMetrics() {
                    const {
                        top: t,
                        left: e,
                        height: i,
                        width: s
                    } = this.metrics.bcr, r = "vertical" === this.scrollOrientation ? window.innerHeight : window.innerWidth, n = "vertical" === this.scrollOrientation ? i : s;
                    this.metrics.offsetStart = this.currentScroll + ("vertical" === this.scrollOrientation ? t : e) - this.translateValue, this.metrics.offsetEnd = this.metrics.offsetStart + n, this.isInFold = this.metrics.offsetStart < r && !this.attributes.scrollIgnoreFold
                }
                _computeIntersection() {
                    const t = "vertical" === this.scrollOrientation ? window.innerHeight : window.innerWidth,
                        e = "vertical" === this.scrollOrientation ? this.metrics.bcr.height : this.metrics.bcr.width,
                        i = this.attributes.scrollOffset.split(","),
                        s = null != i[0] ? i[0].trim() : "0",
                        r = null != i[1] ? i[1].trim() : "0",
                        n = this.attributes.scrollPosition.split(",");
                    let a = null != n[0] ? n[0].trim() : "start";
                    const o = null != n[1] ? n[1].trim() : "end",
                        h = s.includes("%") ? t * parseInt(s.replace("%", "").trim()) * .01 : parseInt(s),
                        l = r.includes("%") ? t * parseInt(r.replace("%", "").trim()) * .01 : parseInt(r);
                    switch (this.isInFold && (a = "fold"), a) {
                        case "start":
                        default:
                            this.intersection.start = this.metrics.offsetStart - t + h;
                            break;
                        case "middle":
                            this.intersection.start = this.metrics.offsetStart - t + h + .5 * e;
                            break;
                        case "end":
                            this.intersection.start = this.metrics.offsetStart - t + h + e;
                            break;
                        case "fold":
                            this.intersection.start = 0
                    }
                    switch (o) {
                        case "start":
                            this.intersection.end = this.metrics.offsetStart - l;
                            break;
                        case "middle":
                            this.intersection.end = this.metrics.offsetStart - l + .5 * e;
                            break;
                        default:
                            this.intersection.end = this.metrics.offsetStart - l + e
                    }
                    if (this.intersection.end <= this.intersection.start) switch (o) {
                        case "start":
                        default:
                            this.intersection.end = this.intersection.start + 1;
                            break;
                        case "middle":
                            this.intersection.end = this.intersection.start + .5 * e;
                            break;
                        case "end":
                            this.intersection.end = this.intersection.start + e
                    }
                }
                _computeProgress(t) {
                    const e = null != t ? t : (i = f(this.intersection.start, this.intersection.end, 0, 1, this.currentScroll)) < 0 ? 0 : i > 1 ? 1 : i;
                    var i;
                    if (this.progress = e, e != this.lastProgress) {
                        if (this.lastProgress = e, this.attributes.scrollCssProgress && this._setCssProgress(e), this.attributes.scrollEventProgress && this._setCustomEventProgress(e), this.attributes.scrollModuleProgress)
                            for (const t of this.progressModularModules) this.modularInstance && this.modularInstance.call("onScrollProgress", e, t.moduleName, t.moduleId);
                        e > 0 && e < 1 && this.setInview(), 0 === e && this.setOutOfView(), 1 === e && this.setOutOfView()
                    }
                }
                _setCssProgress(t = 0) {
                    this.$el.style.setProperty("--progress", t.toString())
                }
                _setCustomEventProgress(t = 0) {
                    const e = this.attributes.scrollEventProgress;
                    if (!e) return;
                    const i = new CustomEvent(e, {
                        detail: {
                            target: this.$el,
                            progress: t
                        }
                    });
                    window.dispatchEvent(i)
                }
                _getProgressModularModules() {
                    if (!this.modularInstance) return;
                    const t = Object.keys(this.$el.dataset).filter((t => t.includes("module"))),
                        e = Object.entries(this.modularInstance.modules);
                    if (t.length)
                        for (const i of t) {
                            const t = this.$el.dataset[i];
                            if (!t) return;
                            for (const i of e) {
                                const [e, s] = i;
                                t in s && this.progressModularModules.push({
                                    moduleName: e,
                                    moduleId: t
                                })
                            }
                        }
                }
                _getScrollCallFrom() {
                    const t = d([this.intersection.start, this.intersection.end], this.currentScroll);
                    return this.intersection.start === t ? "start" : "end"
                }
                _dispatchCall(t, e) {
                    var i, s;
                    const r = null == (i = this.attributes.scrollCall) ? void 0 : i.split(","),
                        n = null == (s = this.attributes) ? void 0 : s.scrollCallSelf;
                    if (r && r.length > 1) {
                        var a;
                        const [i, s, o] = r;
                        let h;
                        h = n ? this.$el.dataset[`module${s.trim()}`] : o, this.modularInstance && this.modularInstance.call(i.trim(), {
                            target: this.$el,
                            way: t,
                            from: e
                        }, s.trim(), null == (a = h) ? void 0 : a.trim())
                    } else if (r) {
                        const [i] = r, s = new CustomEvent(i, {
                            detail: {
                                target: this.$el,
                                way: t,
                                from: e
                            }
                        });
                        window.dispatchEvent(s)
                    }
                }
            }
            const g = ["scrollOffset", "scrollPosition", "scrollModuleProgress", "scrollCssProgress", "scrollEventProgress", "scrollSpeed"];
            class v {
                constructor({
                    $el: t,
                    modularInstance: e,
                    triggerRootMargin: i,
                    rafRootMargin: s,
                    scrollOrientation: r
                }) {
                    this.$scrollContainer = void 0, this.modularInstance = void 0, this.triggerRootMargin = void 0, this.rafRootMargin = void 0, this.scrollElements = void 0, this.triggeredScrollElements = void 0, this.RAFScrollElements = void 0, this.scrollElementsToUpdate = void 0, this.IOTriggerInstance = void 0, this.IORafInstance = void 0, this.scrollOrientation = void 0, t ? (this.$scrollContainer = t, this.modularInstance = e, this.scrollOrientation = r, this.triggerRootMargin = null != i ? i : "-1px -1px -1px -1px", this.rafRootMargin = null != s ? s : "100% 100% 100% 100%", this.scrollElements = [], this.triggeredScrollElements = [], this.RAFScrollElements = [], this.scrollElementsToUpdate = [], this._init()) : console.error("Please provide a DOM Element as scrollContainer")
                }
                _init() {
                    const t = this.$scrollContainer.querySelectorAll("[data-scroll]"),
                        e = Array.from(t);
                    this._subscribeScrollElements(e), this.IOTriggerInstance = new p({
                        scrollElements: [...this.triggeredScrollElements],
                        rootMargin: this.triggerRootMargin,
                        IORaf: !1
                    }), this.IORafInstance = new p({
                        scrollElements: [...this.RAFScrollElements],
                        rootMargin: this.rafRootMargin,
                        IORaf: !0
                    })
                }
                destroy() {
                    this.IOTriggerInstance.destroy(), this.IORafInstance.destroy(), this._unsubscribeAllScrollElements()
                }
                onResize({
                    currentScroll: t
                }) {
                    for (const e of this.RAFScrollElements) e.onResize({
                        currentScroll: t
                    })
                }
                onRender({
                    currentScroll: t,
                    smooth: e
                }) {
                    for (const i of this.scrollElementsToUpdate) i.onRender({
                        currentScroll: t,
                        smooth: e
                    })
                }
                removeScrollElements(t) {
                    const e = t.querySelectorAll("[data-scroll]");
                    if (e.length) {
                        for (let t = 0; t < this.triggeredScrollElements.length; t++) {
                            const i = this.triggeredScrollElements[t];
                            Array.from(e).indexOf(i.$el) > -1 && (this.IOTriggerInstance.unobserve(i.$el), this.triggeredScrollElements.splice(t, 1))
                        }
                        for (let t = 0; t < this.RAFScrollElements.length; t++) {
                            const i = this.RAFScrollElements[t];
                            Array.from(e).indexOf(i.$el) > -1 && (this.IORafInstance.unobserve(i.$el), this.RAFScrollElements.splice(t, 1))
                        }
                        e.forEach((t => {
                            const e = this.scrollElementsToUpdate.find((e => e.$el === t)),
                                i = this.scrollElements.find((e => e.$el === t));
                            e && this._unsubscribeElementUpdate(e), i && (this.scrollElements = this.scrollElements.filter((t => t.id != i.id)))
                        }))
                    }
                }
                addScrollElements(t) {
                    const e = t.querySelectorAll("[data-scroll]"),
                        i = [];
                    this.scrollElements.forEach((t => {
                        i.push(t.id)
                    }));
                    const s = Math.max(...i) + 1,
                        r = Array.from(e);
                    this._subscribeScrollElements(r, s, !0)
                }
                _subscribeScrollElements(t, e = 0, i = !1) {
                    for (let s = 0; s < t.length; s++) {
                        const r = t[s],
                            n = this._checkRafNeeded(r),
                            a = new m({
                                $el: r,
                                id: e + s,
                                scrollOrientation: this.scrollOrientation,
                                modularInstance: this.modularInstance,
                                subscribeElementUpdateFn: this._subscribeElementUpdate.bind(this),
                                unsubscribeElementUpdateFn: this._unsubscribeElementUpdate.bind(this),
                                needRaf: n
                            });
                        this.scrollElements.push(a), n ? (this.RAFScrollElements.push(a), i && (this.IORafInstance.scrollElements.push(a), this.IORafInstance.observe(a.$el))) : (this.triggeredScrollElements.push(a), i && (this.IOTriggerInstance.scrollElements.push(a), this.IOTriggerInstance.observe(a.$el)))
                    }
                }
                _unsubscribeAllScrollElements() {
                    this.scrollElements = [], this.RAFScrollElements = [], this.triggeredScrollElements = [], this.scrollElementsToUpdate = []
                }
                _subscribeElementUpdate(t) {
                    this.scrollElementsToUpdate.push(t)
                }
                _unsubscribeElementUpdate(t) {
                    this.scrollElementsToUpdate = this.scrollElementsToUpdate.filter((e => e.id != t.id))
                }
                _checkRafNeeded(t) {
                    let e = [...g];
                    const i = t => {
                        e = e.filter((e => e != t))
                    };
                    if (t.dataset.scrollOffset) {
                        if ("0,0" != t.dataset.scrollOffset.split(",").map((t => t.replace("%", "").trim())).join(",")) return !0;
                        i("scrollOffset")
                    } else i("scrollOffset");
                    if (t.dataset.scrollPosition) {
                        if ("top,bottom" != t.dataset.scrollPosition.trim()) return !0;
                        i("scrollPosition")
                    } else i("scrollPosition");
                    if (t.dataset.scrollSpeed && !isNaN(parseFloat(t.dataset.scrollSpeed))) return !0;
                    i("scrollSpeed");
                    for (const i of e)
                        if (i in t.dataset) return !0;
                    return !1
                }
            }
            class y {
                constructor({
                    resizeElements: t,
                    resizeCallback: e = (() => {})
                }) {
                    this.$resizeElements = void 0, this.isFirstObserve = void 0, this.observer = void 0, this.resizeCallback = void 0, this.$resizeElements = t, this.resizeCallback = e, this.isFirstObserve = !0, this._init()
                }
                _init() {
                    this.observer = new ResizeObserver((t => {
                        var e;
                        !this.isFirstObserve && (null == (e = this.resizeCallback) || e.call(this)), this.isFirstObserve = !1
                    }));
                    for (const t of this.$resizeElements) this.observer.observe(t)
                }
                destroy() {
                    this.observer.disconnect()
                }
            }
            const D = {
                wrapper: window,
                content: document.documentElement,
                wheelEventsTarget: window,
                eventsTarget: window,
                smoothWheel: !0,
                syncTouch: !1,
                syncTouchLerp: .075,
                touchInertiaMultiplier: 35,
                duration: .75,
                easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                lerp: .1,
                infinite: !1,
                orientation: "vertical",
                gestureOrientation: "vertical",
                touchMultiplier: 1,
                wheelMultiplier: 1,
                autoResize: !0
            };
            class _ {
                constructor({
                    lenisOptions: t = {},
                    modularInstance: e,
                    triggerRootMargin: i,
                    rafRootMargin: s,
                    autoResize: r = !0,
                    autoStart: n = !0,
                    scrollCallback: a = (() => {}),
                    initCustomTicker: o,
                    destroyCustomTicker: h
                } = {}) {
                    this.rafPlaying = void 0, this.lenisInstance = void 0, this.coreInstance = void 0, this.lenisOptions = void 0, this.modularInstance = void 0, this.triggerRootMargin = void 0, this.rafRootMargin = void 0, this.rafInstance = void 0, this.autoResize = void 0, this.autoStart = void 0, this.ROInstance = void 0, this.initCustomTicker = void 0, this.destroyCustomTicker = void 0, this._onRenderBind = void 0, this._onResizeBind = void 0, this._onScrollToBind = void 0, this.lenisOptions = c({}, D, t), Object.assign(this, {
                        lenisOptions: t,
                        modularInstance: e,
                        triggerRootMargin: i,
                        rafRootMargin: s,
                        autoResize: r,
                        autoStart: n,
                        scrollCallback: a,
                        initCustomTicker: o,
                        destroyCustomTicker: h
                    }), this._onRenderBind = this._onRender.bind(this), this._onScrollToBind = this._onScrollTo.bind(this), this._onResizeBind = this._onResize.bind(this), this.rafPlaying = !1, this._init()
                }
                _init() {
                    var t;
                    this.lenisInstance = new u({
                        wrapper: this.lenisOptions.wrapper,
                        content: this.lenisOptions.content,
                        eventsTarget: this.lenisOptions.eventsTarget,
                        lerp: this.lenisOptions.lerp,
                        duration: this.lenisOptions.duration,
                        orientation: this.lenisOptions.orientation,
                        gestureOrientation: this.lenisOptions.gestureOrientation,
                        smoothWheel: this.lenisOptions.smoothWheel,
                        syncTouch: this.lenisOptions.syncTouch,
                        syncTouchLerp: this.lenisOptions.syncTouchLerp,
                        touchInertiaMultiplier: this.lenisOptions.touchInertiaMultiplier,
                        wheelMultiplier: this.lenisOptions.wheelMultiplier,
                        touchMultiplier: this.lenisOptions.touchMultiplier,
                        easing: this.lenisOptions.easing
                    }), null == (t = this.lenisInstance) || t.on("scroll", this.scrollCallback), document.documentElement.setAttribute("data-scroll-orientation", this.lenisInstance.options.orientation), requestAnimationFrame((() => {
                        this.coreInstance = new v({
                            $el: this.lenisInstance.rootElement,
                            modularInstance: this.modularInstance,
                            triggerRootMargin: this.triggerRootMargin,
                            rafRootMargin: this.rafRootMargin,
                            scrollOrientation: this.lenisInstance.options.orientation
                        }), this._bindEvents(), this.initCustomTicker && !this.destroyCustomTicker ? console.warn("initCustomTicker callback is declared, but destroyCustomTicker is not. Please pay attention. It could cause trouble.") : !this.initCustomTicker && this.destroyCustomTicker && console.warn("destroyCustomTicker callback is declared, but initCustomTicker is not. Please pay attention. It could cause trouble."), this.autoStart && this.start()
                    }))
                }
                destroy() {
                    var t;
                    this.stop(), this._unbindEvents(), this.lenisInstance.destroy(), null == (t = this.coreInstance) || t.destroy(), requestAnimationFrame((() => {
                        var t;
                        null == (t = this.coreInstance) || t.destroy()
                    }))
                }
                _bindEvents() {
                    this._bindScrollToEvents(), this.autoResize && ("ResizeObserver" in window ? this.ROInstance = new y({
                        resizeElements: [document.body],
                        resizeCallback: this._onResizeBind
                    }) : window.addEventListener("resize", this._onResizeBind))
                }
                _unbindEvents() {
                    this._unbindScrollToEvents(), this.autoResize && ("ResizeObserver" in window ? this.ROInstance && this.ROInstance.destroy() : window.removeEventListener("resize", this._onResizeBind))
                }
                _bindScrollToEvents(t) {
                    const e = t || this.lenisInstance.rootElement,
                        i = null == e ? void 0 : e.querySelectorAll("[data-scroll-to]");
                    (null == i ? void 0 : i.length) && i.forEach((t => {
                        t.addEventListener("click", this._onScrollToBind, !1)
                    }))
                }
                _unbindScrollToEvents(t) {
                    const e = t || this.lenisInstance.rootElement,
                        i = null == e ? void 0 : e.querySelectorAll("[data-scroll-to]");
                    (null == i ? void 0 : i.length) && i.forEach((t => {
                        t.removeEventListener("click", this._onScrollToBind, !1)
                    }))
                }
                _onResize() {
                    requestAnimationFrame((() => {
                        var t;
                        null == (t = this.coreInstance) || t.onResize({
                            currentScroll: this.lenisInstance.scroll
                        })
                    }))
                }
                _onRender() {
                    var t, e;
                    null == (t = this.lenisInstance) || t.raf(Date.now()), null == (e = this.coreInstance) || e.onRender({
                        currentScroll: this.lenisInstance.scroll,
                        smooth: this.lenisInstance.isSmooth
                    })
                }
                _onScrollTo(t) {
                    var e;
                    t.preventDefault();
                    const i = null != (e = t.currentTarget) ? e : null;
                    if (!i) return;
                    const s = i.getAttribute("data-scroll-to-href") || i.getAttribute("href"),
                        r = i.getAttribute("data-scroll-to-offset") || 0,
                        n = i.getAttribute("data-scroll-to-duration") || this.lenisOptions.duration || D.duration;
                    s && this.scrollTo(s, {
                        offset: "string" == typeof r ? parseInt(r) : r,
                        duration: "string" == typeof n ? parseInt(n) : n
                    })
                }
                start() {
                    var t;
                    this.rafPlaying || (null == (t = this.lenisInstance) || t.start(), this.rafPlaying = !0, this.initCustomTicker ? this.initCustomTicker(this._onRenderBind) : this._raf())
                }
                stop() {
                    var t;
                    this.rafPlaying && (null == (t = this.lenisInstance) || t.stop(), this.rafPlaying = !1, this.destroyCustomTicker ? this.destroyCustomTicker(this._onRenderBind) : this.rafInstance && cancelAnimationFrame(this.rafInstance))
                }
                removeScrollElements(t) {
                    var e;
                    t ? (this._unbindScrollToEvents(t), null == (e = this.coreInstance) || e.removeScrollElements(t)) : console.error("Please provide a DOM Element as $oldContainer")
                }
                addScrollElements(t) {
                    var e;
                    t ? (null == (e = this.coreInstance) || e.addScrollElements(t), requestAnimationFrame((() => {
                        this._bindScrollToEvents(t)
                    }))) : console.error("Please provide a DOM Element as $newContainer")
                }
                resize() {
                    this._onResizeBind()
                }
                scrollTo(t, e) {
                    var i;
                    null == (i = this.lenisInstance) || i.scrollTo(t, {
                        offset: null == e ? void 0 : e.offset,
                        lerp: null == e ? void 0 : e.lerp,
                        duration: null == e ? void 0 : e.duration,
                        immediate: null == e ? void 0 : e.immediate,
                        lock: null == e ? void 0 : e.lock,
                        force: null == e ? void 0 : e.force,
                        easing: null == e ? void 0 : e.easing,
                        onComplete: null == e ? void 0 : e.onComplete
                    })
                }
                _raf() {
                    this._onRenderBind(), this.rafInstance = requestAnimationFrame((() => this._raf()))
                }
            }
        }
    }
]);
