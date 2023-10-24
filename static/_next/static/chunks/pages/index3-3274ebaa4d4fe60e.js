(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[4521], {
		8273: function(s, e, i) {
			"use strict";
			i.r(e), i.d(e, {
				CountUp: function() {
					return l
				}
			});
			var a = function() {
					return (a = Object.assign || function(s) {
						for (var e, i = 1, a = arguments.length; i < a; i++)
							for (var l in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, l) && (s[l] = e[l]);
						return s
					}).apply(this, arguments)
				},
				l = function() {
					function s(s, e, i) {
						var l = this;
						this.endVal = e, this.options = i, this.version = "2.4.2", this.defaults = {
							startVal: 0,
							decimalPlaces: 0,
							duration: 2,
							useEasing: !0,
							useGrouping: !0,
							useIndianSeparators: !1,
							smartEasingThreshold: 999,
							smartEasingAmount: 333,
							separator: ",",
							decimal: ".",
							prefix: "",
							suffix: "",
							enableScrollSpy: !1,
							scrollSpyDelay: 200,
							scrollSpyOnce: !1
						}, this.finalEndVal = null, this.useEasing = !0, this.countDown = !1, this.error = "", this.startVal = 0, this.paused = !0, this.once = !1, this.count = function(s) {
							l.startTime || (l.startTime = s);
							var e = s - l.startTime;
							l.remaining = l.duration - e, l.useEasing ? l.countDown ? l.frameVal = l.startVal - l.easingFn(e, 0, l.startVal - l.endVal, l.duration) : l.frameVal = l.easingFn(e, l.startVal, l.endVal - l.startVal, l.duration) : l.frameVal = l.startVal + (l.endVal - l.startVal) * (e / l.duration);
							var i = l.countDown ? l.frameVal < l.endVal : l.frameVal > l.endVal;
							l.frameVal = i ? l.endVal : l.frameVal, l.frameVal = Number(l.frameVal.toFixed(l.options.decimalPlaces)), l.printValue(l.frameVal), e < l.duration ? l.rAF = requestAnimationFrame(l.count) : null !== l.finalEndVal ? l.update(l.finalEndVal) : l.callback && l.callback()
						}, this.formatNumber = function(s) {
							var e, i, a, c = (Math.abs(s).toFixed(l.options.decimalPlaces) + "").split(".");
							if (e = c[0], i = c.length > 1 ? l.options.decimal + c[1] : "", l.options.useGrouping) {
								a = "";
								for (var n = 3, r = 0, d = 0, t = e.length; d < t; ++d) l.options.useIndianSeparators && 4 === d && (n = 2, r = 1), 0 !== d && r % n == 0 && (a = l.options.separator + a), r++, a = e[t - d - 1] + a;
								e = a
							}
							return l.options.numerals && l.options.numerals.length && (e = e.replace(/[0-9]/g, function(s) {
								return l.options.numerals[+s]
							}), i = i.replace(/[0-9]/g, function(s) {
								return l.options.numerals[+s]
							})), (s < 0 ? "-" : "") + l.options.prefix + e + i + l.options.suffix
						}, this.easeOutExpo = function(s, e, i, a) {
							return i * (1 - Math.pow(2, -10 * s / a)) * 1024 / 1023 + e
						}, this.options = a(a({}, this.defaults), i), this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber, this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(e), this.options.decimalPlaces = Math.max(this.options.decimalPlaces), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, "" === this.options.separator && (this.options.useGrouping = !1), this.el = "string" == typeof s ? document.getElementById(s) : s, this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined", "undefined" != typeof window && this.options.enableScrollSpy && (this.error ? console.error(this.error, s) : (window.onScrollFns = window.onScrollFns || [], window.onScrollFns.push(function() {
							return l.handleScroll(l)
						}), window.onscroll = function() {
							window.onScrollFns.forEach(function(s) {
								return s()
							})
						}, this.handleScroll(this)))
					}
					return s.prototype.handleScroll = function(s) {
						if (s && window && !s.once) {
							var e = window.innerHeight + window.scrollY,
								i = s.el.getBoundingClientRect(),
								a = i.top + window.pageYOffset,
								l = i.top + i.height + window.pageYOffset;
							l < e && l > window.scrollY && s.paused ? (s.paused = !1, setTimeout(function() {
								return s.start()
							}, s.options.scrollSpyDelay), s.options.scrollSpyOnce && (s.once = !0)) : (window.scrollY > l || a > e) && !s.paused && s.reset()
						}
					}, s.prototype.determineDirectionAndSmartEasing = function() {
						var s = this.finalEndVal ? this.finalEndVal : this.endVal;
						if (this.countDown = this.startVal > s, Math.abs(s - this.startVal) > this.options.smartEasingThreshold && this.options.useEasing) {
							this.finalEndVal = s;
							var e = this.countDown ? 1 : -1;
							this.endVal = s + e * this.options.smartEasingAmount, this.duration = this.duration / 2
						} else this.endVal = s, this.finalEndVal = null;
						null !== this.finalEndVal ? this.useEasing = !1 : this.useEasing = this.options.useEasing
					}, s.prototype.start = function(s) {
						this.error || (this.callback = s, this.duration > 0 ? (this.determineDirectionAndSmartEasing(), this.paused = !1, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal))
					}, s.prototype.pauseResume = function() {
						this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused
					}, s.prototype.reset = function() {
						cancelAnimationFrame(this.rAF), this.paused = !0, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal)
					}, s.prototype.update = function(s) {
						cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(s), this.endVal !== this.frameVal && (this.startVal = this.frameVal, null == this.finalEndVal && this.resetDuration(), this.finalEndVal = null, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count))
					}, s.prototype.printValue = function(s) {
						var e = this.formattingFn(s);
						this.el && ("INPUT" === this.el.tagName ? this.el.value = e : "text" === this.el.tagName || "tspan" === this.el.tagName ? this.el.textContent = e : this.el.innerHTML = e)
					}, s.prototype.ensureNumber = function(s) {
						return "number" == typeof s && !isNaN(s)
					}, s.prototype.validateValue = function(s) {
						var e = Number(s);
						return this.ensureNumber(e) ? e : (this.error = "[CountUp] invalid start or end value: ".concat(s), null)
					}, s.prototype.resetDuration = function() {
						this.startTime = null, this.duration = 1e3 * Number(this.options.duration), this.remaining = this.duration
					}, s
				}()
		},
		163: function(s, e, i) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/index3", function() {
				return i(6152)
			}])
		},
		763: function(s, e, i) {
			"use strict";
			var a = i(5893),
				l = i(1163),
				c = i(7294),
				n = i(8116),
				r = i(719);
			n.ZP.use([n.W_, n.pt, n.xW]), e.Z = function() {
				let s = (0, l.useRouter)().pathname,
					e = (0, c.useMemo)(() => ({
						slidesPerView: "auto",
						spaceBetween: 24,
						loop: !0,
						speed: 1500,
						autoplay: {
							delay: 2e3
						},
						breakpoints: {
							280: {
								slidesPerView: 2,
								spaceBetween: 15
							},
							480: {
								slidesPerView: 3
							},
							768: {
								slidesPerView: 4
							},
							992: {
								slidesPerView: 5
							},
							1200: {
								slidesPerView: 6
							},
							1400: {
								slidesPerView: 6
							},
							1600: {
								slidesPerView: 6
							}
						}
					}), []);
				return (0, a.jsx)("div", {
					className: "/index3" === s ? "home1-trusted-company two mt-120 mb-120" : "home1-trusted-company two mb-120",
					children: (0, a.jsx)("div", {
						className: "container",
						children: (0, a.jsx)("div", {
							className: "row",
							children: (0, a.jsxs)("div", {
								className: "col-lg-12",
								children: [(0, a.jsx)("div", {
									className: "section-title",
									children: (0, a.jsx)("h5", {
										children: "Our Trusted Company"
									})
								}), (0, a.jsx)(r.tq, { ...e,
									className: "swiper trusted-company-slider",
									children: (0, a.jsxs)("div", {
										className: "swiper-wrapper",
										children: [(0, a.jsx)(r.o5, {
											className: "swiper-slide",
											children: (0, a.jsx)("div", {
												className: "company-logo",
												children: (0, a.jsx)("img", {
													src: "assets/images/icon/trusted-company-01.svg",
													alt: ""
												})
											})
										}), (0, a.jsx)(r.o5, {
											className: "swiper-slide",
											children: (0, a.jsx)("div", {
												className: "company-logo",
												children: (0, a.jsx)("img", {
													src: "assets/images/icon/trusted-company-03.svg",
													alt: ""
												})
											})
										}), (0, a.jsx)(r.o5, {
											className: "swiper-slide",
											children: (0, a.jsx)("div", {
												className: "company-logo",
												children: (0, a.jsx)("img", {
													src: "assets/images/icon/trusted-company-02.svg",
													alt: ""
												})
											})
										}), (0, a.jsx)(r.o5, {
											className: "swiper-slide",
											children: (0, a.jsx)("div", {
												className: "company-logo",
												children: (0, a.jsx)("img", {
													src: "assets/images/icon/trusted-company-04.svg",
													alt: ""
												})
											})
										}), (0, a.jsx)(r.o5, {
											className: "swiper-slide",
											children: (0, a.jsx)("div", {
												className: "company-logo",
												children: (0, a.jsx)("img", {
													src: "assets/images/icon/trusted-company-05.svg",
													alt: ""
												})
											})
										}), (0, a.jsx)(r.o5, {
											className: "swiper-slide",
											children: (0, a.jsx)("div", {
												className: "company-logo",
												children: (0, a.jsx)("img", {
													src: "assets/images/icon/trusted-company-06.svg",
													alt: ""
												})
											})
										})]
									})
								})]
							})
						})
					})
				})
			}
		},
		6152: function(s, e, i) {
			"use strict";
			i.r(e), i.d(e, {
				default: function() {
					return L
				}
			});
			var a = i(5893),
				l = i(9008),
				c = i.n(l),
				n = i(1163),
				r = i(7294),
				d = function() {
					return (0, a.jsx)("div", {
						className: "home3-about-area mb-120",
						children: (0, a.jsx)("div", {
							className: "container",
							children: (0, a.jsxs)("div", {
								className: "row g-lg-4 gy-5 align-items-center",
								children: [(0, a.jsx)("div", {
									className: "col-lg-5",
									children: (0, a.jsxs)("div", {
										className: "about-left",
										children: [(0, a.jsxs)("div", {
											className: "section-title1 mb-60",
											children: [(0, a.jsxs)("h2", {
												children: ["To Know ", (0, a.jsx)("span", {
													children: "About"
												}), " JOBES"]
											}), (0, a.jsx)("p", {
												children: "To much valuable feed from our trusted users in world-wide."
											})]
										}), (0, a.jsx)("div", {
											className: "facility-area",
											children: (0, a.jsxs)("ul", {
												children: [(0, a.jsxs)("li", {
													children: [(0, a.jsx)("div", {
														className: "icon",
														children: (0, a.jsx)("img", {
															src: "assets/images/icon/facility-1.svg",
															alt: ""
														})
													}), (0, a.jsxs)("div", {
														className: "content",
														children: [(0, a.jsx)("h5", {
															children: "Highly Secured"
														}), (0, a.jsx)("p", {
															children: "Firstly, your account to be secured in login.html or sign up & don’t be upset, be confident."
														})]
													})]
												}), (0, a.jsxs)("li", {
													children: [(0, a.jsx)("div", {
														className: "icon",
														children: (0, a.jsx)("img", {
															src: "assets/images/icon/facility-2.svg",
															alt: ""
														})
													}), (0, a.jsxs)("div", {
														className: "content",
														children: [(0, a.jsx)("h5", {
															children: "Authentic Source"
														}), (0, a.jsx)("p", {
															children: "Secondly, Every job post to be secured in login.html or sign up & don’t be upset, be confident."
														})]
													})]
												}), (0, a.jsxs)("li", {
													children: [(0, a.jsx)("div", {
														className: "icon",
														children: (0, a.jsx)("img", {
															src: "assets/images/icon/facility-3.svg",
															alt: ""
														})
													}), (0, a.jsxs)("div", {
														className: "content",
														children: [(0, a.jsx)("h5", {
															children: "Cost Effective"
														}), (0, a.jsx)("p", {
															children: "Thirdly, Every job post to be secured in login.html or sign up & don’t be upset, be confident."
														})]
													})]
												})]
											})
										})]
									})
								}), (0, a.jsx)("div", {
									className: "col-lg-7",
									children: (0, a.jsxs)("div", {
										className: "about-right",
										children: [(0, a.jsx)("div", {
											className: "about-img1",
											children: (0, a.jsx)("img", {
												className: "img-fluid",
												src: "assets/images/bg/about-img-31.png",
												alt: ""
											})
										}), (0, a.jsxs)("div", {
											className: "about-img2",
											children: [(0, a.jsx)("img", {
												className: "img-fluid",
												src: "assets/images/bg/about-img-32.png",
												alt: ""
											}), (0, a.jsx)("div", {
												className: "ellipse"
											}), (0, a.jsxs)("div", {
												className: "best-quality-card",
												children: [(0, a.jsx)("div", {
													className: "quality-icon",
													children: (0, a.jsx)("img", {
														src: "assets/images/icon/best-quality-icon.svg",
														alt: ""
													})
												}), (0, a.jsxs)("div", {
													className: "content",
													children: [(0, a.jsxs)("h6", {
														children: [(0, a.jsx)("span", {
															children: "Best Quality"
														}), " For Jobs Site"]
													}), (0, a.jsx)("p", {
														children: "To Make Sure Your Job Opportunity."
													})]
												})]
											})]
										})]
									})
								})]
							})
						})
					})
				},
				t = i(1664),
				h = i.n(t),
				o = function() {
					return (0, a.jsx)("div", {
						className: "home3-recent-article-area mb-120",
						children: (0, a.jsxs)("div", {
							className: "container",
							children: [(0, a.jsx)("div", {
								className: "row mb-60",
								children: (0, a.jsx)("div", {
									className: "col-12 d-flex justify-content-center gap-3",
									children: (0, a.jsxs)("div", {
										className: "section-title1 text-center",
										children: [(0, a.jsxs)("h2", {
											children: ["Our Recent ", (0, a.jsx)("span", {
												children: "Article"
											})]
										}), (0, a.jsx)("p", {
											children: "To much valuable feed from our trusted users in world-wide."
										})]
									})
								})
							}), (0, a.jsxs)("div", {
								className: "row g-4 gy-5 justify-content-center",
								children: [(0, a.jsx)("div", {
									className: "col-lg-4 col-md-6",
									children: (0, a.jsxs)("div", {
										className: "recent-article-card3",
										children: [(0, a.jsx)("div", {
											className: "article-img",
											children: (0, a.jsx)("img", {
												className: "img-fluid",
												src: "assets/images/blog/blog-img-31.png",
												alt: ""
											})
										}), (0, a.jsxs)("div", {
											className: "article-content",
											children: [(0, a.jsx)("div", {
												className: "article-category.html",
												children: (0, a.jsx)(h(), {
													legacyBehavior: !0,
													href: "/blog-grid",
													children: (0, a.jsx)("a", {
														className: "primry-btn-2",
														children: "Marketing"
													})
												})
											}), (0, a.jsx)("h4", {
												children: (0, a.jsx)(h(), {
													legacyBehavior: !0,
													href: "/blog-details",
													children: (0, a.jsx)("a", {
														children: "How To Apply Your Dream Jobs In Digital Marketing, Easy Solution."
													})
												})
											}), (0, a.jsxs)("div", {
												className: "author-and-btn",
												children: [(0, a.jsxs)("div", {
													className: "author-area",
													children: [(0, a.jsx)("div", {
														className: "author-img",
														children: (0, a.jsx)("img", {
															src: "assets/images/blog/blog-author-31.png",
															alt: ""
														})
													}), (0, a.jsxs)("div", {
														className: "author-details",
														children: [(0, a.jsx)("h6", {
															children: (0, a.jsx)(h(), {
																legacyBehavior: !0,
																href: "/blog-grid",
																children: (0, a.jsx)("a", {
																	children: "Roland Khelcy"
																})
															})
														}), (0, a.jsx)("span", {
															children: "Admin"
														})]
													})]
												}), (0, a.jsx)("div", {
													className: "apply-btn",
													children: (0, a.jsx)(h(), {
														legacyBehavior: !0,
														href: "/blog-details",
														children: (0, a.jsxs)("a", {
															children: [(0, a.jsx)("span", {
																children: (0, a.jsx)("img", {
																	src: "assets/images/icon/apply-ellipse.svg",
																	alt: ""
																})
															}), "View Details"]
														})
													})
												})]
											})]
										})]
									})
								}), (0, a.jsx)("div", {
									className: "col-lg-4 col-md-6",
									children: (0, a.jsxs)("div", {
										className: "recent-article-card3",
										children: [(0, a.jsx)("div", {
											className: "article-img",
											children: (0, a.jsx)("img", {
												className: "img-fluid",
												src: "assets/images/blog/blog-img-32.png",
												alt: ""
											})
										}), (0, a.jsxs)("div", {
											className: "article-content",
											children: [(0, a.jsx)("div", {
												className: "article-category.html",
												children: (0, a.jsx)(h(), {
													legacyBehavior: !0,
													href: "/blog-grid",
													children: (0, a.jsx)("a", {
														className: "primry-btn-2",
														children: "Design"
													})
												})
											}), (0, a.jsx)("h4", {
												children: (0, a.jsx)(h(), {
													legacyBehavior: !0,
													href: "/blog-details",
													children: (0, a.jsx)("a", {
														children: "To Be Continue Redesign & Build Up Your Career Opportunity."
													})
												})
											}), (0, a.jsxs)("div", {
												className: "author-and-btn",
												children: [(0, a.jsxs)("div", {
													className: "author-area",
													children: [(0, a.jsx)("div", {
														className: "author-img",
														children: (0, a.jsx)("img", {
															src: "assets/images/blog/blog-author-32.png",
															alt: ""
														})
													}), (0, a.jsxs)("div", {
														className: "author-details",
														children: [(0, a.jsx)("h6", {
															children: (0, a.jsx)(h(), {
																legacyBehavior: !0,
																href: "/blog-grid",
																children: (0, a.jsx)("a", {
																	children: "Mrs. Rudhela Saley"
																})
															})
														}), (0, a.jsx)("span", {
															children: "Admin"
														})]
													})]
												}), (0, a.jsx)("div", {
													className: "apply-btn",
													children: (0, a.jsx)(h(), {
														legacyBehavior: !0,
														href: "/blog-details",
														children: (0, a.jsxs)("a", {
															children: [(0, a.jsx)("span", {
																children: (0, a.jsx)("img", {
																	src: "assets/images/icon/apply-ellipse.svg",
																	alt: ""
																})
															}), "View Details"]
														})
													})
												})]
											})]
										})]
									})
								}), (0, a.jsx)("div", {
									className: "col-lg-4 col-md-6",
									children: (0, a.jsxs)("div", {
										className: "recent-article-card3",
										children: [(0, a.jsx)("div", {
											className: "article-img",
											children: (0, a.jsx)("img", {
												className: "img-fluid",
												src: "assets/images/blog/blog-img-33.png",
												alt: ""
											})
										}), (0, a.jsxs)("div", {
											className: "article-content",
											children: [(0, a.jsx)("div", {
												className: "article-category.html",
												children: (0, a.jsx)(h(), {
													legacyBehavior: !0,
													href: "/blog-grid",
													children: (0, a.jsx)("a", {
														className: "primry-btn-2",
														children: "Technology"
													})
												})
											}), (0, a.jsx)("h4", {
												children: (0, a.jsx)(h(), {
													legacyBehavior: !0,
													href: "/blog-details",
													children: (0, a.jsx)("a", {
														children: "If You Are A talented People, Make Sure Your Technology Part."
													})
												})
											}), (0, a.jsxs)("div", {
												className: "author-and-btn",
												children: [(0, a.jsxs)("div", {
													className: "author-area",
													children: [(0, a.jsx)("div", {
														className: "author-img",
														children: (0, a.jsx)("img", {
															src: "assets/images/blog/blog-author-33.png",
															alt: ""
														})
													}), (0, a.jsxs)("div", {
														className: "author-details",
														children: [(0, a.jsx)("h6", {
															children: (0, a.jsx)(h(), {
																legacyBehavior: !0,
																href: "/blog-grid",
																children: (0, a.jsx)("a", {
																	children: "Martoniey Sekh"
																})
															})
														}), (0, a.jsx)("span", {
															children: "Admin"
														})]
													})]
												}), (0, a.jsx)("div", {
													className: "apply-btn",
													children: (0, a.jsx)(h(), {
														legacyBehavior: !0,
														href: "/blog-details",
														children: (0, a.jsxs)("a", {
															children: [(0, a.jsx)("span", {
																children: (0, a.jsx)("img", {
																	src: "assets/images/icon/apply-ellipse.svg",
																	alt: ""
																})
															}), "View Details"]
														})
													})
												})]
											})]
										})]
									})
								})]
							})]
						})
					})
				},
				j = function() {
					return (0, a.jsx)("div", {
						className: "hero3",
						children: (0, a.jsx)("div", {
							className: "hero-wapper",
							children: (0, a.jsx)("div", {
								className: "container-fluid",
								children: (0, a.jsxs)("div", {
									className: "row align-items-center",
									children: [(0, a.jsx)("div", {
										className: "col-lg-6",
										children: (0, a.jsxs)("div", {
											className: "hero-content",
											children: [(0, a.jsxs)("h1", {
												children: ["To Choose ", (0, a.jsx)("span", {
													children: "Right Jobs."
												})]
											}), (0, a.jsxs)("p", {
												children: [(0, a.jsx)("span", {
													children: "2400"
												}), " Peoples are daily search in this portal, \xa0", (0, a.jsx)("span", {
													children: "100"
												}), " user added job portal!"]
											}), (0, a.jsx)("div", {
												className: "job-search-area",
												children: (0, a.jsxs)("form", {
													children: [(0, a.jsxs)("div", {
														className: "form-inner job-title",
														children: [(0, a.jsx)("img", {
															src: "assets/images/icon/job3.svg",
															alt: ""
														}), (0, a.jsx)("input", {
															type: "text",
															placeholder: "What jobs are you looking for?"
														})]
													}), (0, a.jsx)("div", {
														className: "form-inner",
														children: (0, a.jsxs)("button", {
															type: "submit",
															className: "primry-btn-2",
															children: [(0, a.jsx)("img", {
																src: "assets/images/icon/search-icon.svg",
																alt: ""
															}), "Search"]
														})
													})]
												})
											}), (0, a.jsxs)("div", {
												className: "suggest-tag",
												children: [(0, a.jsxs)("h6", {
													children: [(0, a.jsx)("i", {
														className: "bi bi-bookmark.html-fill"
													}), "Suggested Tag:"]
												}), (0, a.jsxs)("ul", {
													children: [(0, a.jsx)("li", {
														children: (0, a.jsx)(h(), {
															legacyBehavior: !0,
															href: "/job-listing1",
															children: (0, a.jsx)("a", {
																children: "Engineering,"
															})
														})
													}), (0, a.jsx)("li", {
														children: (0, a.jsx)(h(), {
															legacyBehavior: !0,
															href: "/job-listing1",
															children: (0, a.jsx)("a", {
																children: "Marketing,"
															})
														})
													}), (0, a.jsx)("li", {
														children: (0, a.jsx)(h(), {
															legacyBehavior: !0,
															href: "/job-listing1",
															children: (0, a.jsx)("a", {
																children: "UI/UX Design,"
															})
														})
													}), (0, a.jsx)("li", {
														children: (0, a.jsx)(h(), {
															legacyBehavior: !0,
															href: "/job-listing1",
															children: (0, a.jsx)("a", {
																children: "Data Analyst,"
															})
														})
													}), (0, a.jsx)("li", {
														children: (0, a.jsx)(h(), {
															legacyBehavior: !0,
															href: "/job-listing1",
															children: (0, a.jsx)("a", {
																children: "Programming"
															})
														})
													})]
												})]
											}), (0, a.jsxs)("div", {
												className: "user-area",
												children: [(0, a.jsxs)("ul", {
													children: [(0, a.jsx)("li", {
														children: (0, a.jsx)("img", {
															src: "assets/images/bg/user31.png",
															alt: ""
														})
													}), (0, a.jsx)("li", {
														children: (0, a.jsx)("img", {
															src: "assets/images/bg/user32.png",
															alt: ""
														})
													}), (0, a.jsx)("li", {
														children: (0, a.jsx)("img", {
															src: "assets/images/bg/user33.png",
															alt: ""
														})
													}), (0, a.jsx)("li", {
														children: (0, a.jsx)("img", {
															src: "assets/images/bg/user34.png",
															alt: ""
														})
													}), (0, a.jsx)("li", {
														children: (0, a.jsx)("img", {
															src: "assets/images/bg/user35.png",
															alt: ""
														})
													}), (0, a.jsx)("li", {
														children: (0, a.jsxs)("div", {
															className: "total-user",
															children: [(0, a.jsx)("h6", {
																children: "21k"
															}), (0, a.jsx)("span", {
																children: "Users"
															})]
														})
													})]
												}), (0, a.jsx)("p", {
													children: "To Much People Have Connected With Us!"
												})]
											})]
										})
									}), (0, a.jsx)("div", {
										className: "col-lg-6",
										children: (0, a.jsx)("div", {
											className: "hero-img",
											children: (0, a.jsx)("img", {
												className: "img-fluid",
												src: "assets/images/bg/hero3-img-with-vec.png",
												alt: ""
											})
										})
									})]
								})
							})
						})
					})
				},
				x = i(8116),
				m = i(719);
			x.ZP.use([x.W_, x.pt, x.xW]);
			var p = function() {
					let s = (0, r.useMemo)(() => ({
						slidesPerView: "auto",
						spaceBetween: 20,
						loop: !0,
						speed: 1700,
						autoplay: {
							delay: 2200
						},
						navigation: {
							nextEl: "._next-5",
							prevEl: ".prev-5"
						},
						breakpoints: {
							280: {
								slidesPerView: 1
							},
							480: {
								slidesPerView: 2
							},
							768: {
								slidesPerView: 3
							},
							992: {
								slidesPerView: 3
							},
							1200: {
								slidesPerView: 4
							},
							1400: {
								slidesPerView: 4
							},
							1600: {
								slidesPerView: 4
							}
						}
					}), []);
					return (0, a.jsx)("div", {
						className: "home3-categor-area mb-120",
						children: (0, a.jsxs)("div", {
							className: "container",
							children: [(0, a.jsx)("div", {
								className: "row mb-60",
								children: (0, a.jsxs)("div", {
									className: "col-12 d-flex flex-wrap align-items-end justify-content-md-between justify-content-start gap-3",
									children: [(0, a.jsxs)("div", {
										className: "section-title1",
										children: [(0, a.jsxs)("h2", {
											children: ["Popular ", (0, a.jsx)("span", {
												children: "Category"
											}), " List"]
										}), (0, a.jsx)("p", {
											children: "To choose your trending job dream & to make future bright."
										})]
									}), (0, a.jsxs)("div", {
										className: "swiper-btn-2",
										children: [(0, a.jsx)("div", {
											className: "swiper-prev prev-5",
											children: (0, a.jsx)("i", {
												className: "bi bi-chevron-left"
											})
										}), (0, a.jsx)("div", {
											className: "swiper-_next _next-5",
											children: (0, a.jsx)("i", {
												className: "bi bi-chevron-right"
											})
										})]
									})]
								})
							}), (0, a.jsx)("div", {
								className: "row",
								children: (0, a.jsx)(m.tq, { ...s,
									className: "swiper category3-slider",
									children: (0, a.jsxs)("div", {
										className: "swiper-wrapper",
										children: [(0, a.jsx)(m.o5, {
											className: "swiper-slide",
											children: (0, a.jsxs)("div", {
												className: "category.html-card3",
												children: [(0, a.jsx)("img", {
													className: "img-fluid",
													src: "assets/images/bg/category.html-31.png",
													alt: ""
												}), (0, a.jsx)("div", {
													className: "category.html-tag",
													children: (0, a.jsx)("span", {
														children: "Popular"
													})
												}), (0, a.jsxs)("div", {
													className: "category.html-content",
													children: [(0, a.jsx)("div", {
														className: "category.html-icon",
														children: (0, a.jsxs)("svg", {
															width: 36,
															height: 30,
															viewBox: "0 0 36 30",
															xmlns: "http://www.w3.org/2000/svg",
															children: [(0, a.jsx)("path", {
																d: "M11.6157 22.2222H25.4353V23.5324H11.6157V22.2222Z"
															}), (0, a.jsx)("path", {
																d: "M35.3546 23.5324H31.6349V22.2222H34.7088V13.3837L27.6182 6.5513H21.309V18.6713C21.309 18.8451 21.2409 19.0117 21.1198 19.1346C20.9987 19.2574 20.8345 19.3265 20.6632 19.3265H3.38872V22.2222H5.41645V23.5324H2.74294C2.57167 23.5324 2.40742 23.4634 2.28631 23.3405C2.1652 23.2177 2.09717 23.051 2.09717 22.8773V18.6713C2.09717 18.4976 2.1652 18.3309 2.28631 18.2081C2.40742 18.0852 2.57167 18.0162 2.74294 18.0162H20.0174V5.89616C20.0174 5.72241 20.0855 5.55577 20.2066 5.43291C20.3277 5.31005 20.4919 5.24103 20.6632 5.24103H27.8765C28.0419 5.24115 28.2009 5.30564 28.3208 5.42119L35.7995 12.6277C35.863 12.6889 35.9135 12.7626 35.948 12.8442C35.9826 12.9259 36.0004 13.0138 36.0003 13.1027V22.8773C36.0003 23.051 35.9323 23.2177 35.8112 23.3405C35.6901 23.4634 35.5258 23.5324 35.3546 23.5324Z"
															}), (0, a.jsx)("path", {
																d: "M3.82944 19.0461L0.116239 13.6412C0.0406191 13.5313 4.80407e-05 13.4005 0 13.2665V5.89623C0 5.72247 0.0680367 5.55584 0.189143 5.43297C0.310249 5.31011 0.474505 5.24109 0.645775 5.24109H12.9697V0.655136C12.9697 0.481383 13.0378 0.314747 13.1589 0.191885C13.28 0.0690232 13.4442 0 13.6155 0H20.6648C20.8361 0 21.0003 0.0690232 21.1214 0.191885C21.2425 0.314747 21.3106 0.481383 21.3106 0.655136V5.89623H20.019V1.31027H14.2613V5.89623C14.2613 6.06998 14.1932 6.23662 14.0721 6.35948C13.951 6.48234 13.7868 6.55136 13.6155 6.55136H1.29155V13.0608L4.88658 18.2966L3.82944 19.0461Z"
															}), (0, a.jsx)("path", {
																d: "M31.5359 16.9791H23.8938C23.7226 16.9791 23.5583 16.9101 23.4372 16.7872C23.3161 16.6644 23.248 16.4977 23.248 16.324V9.22624C23.248 9.05249 23.3161 8.88585 23.4372 8.76299C23.5583 8.64013 23.7226 8.57111 23.8938 8.57111H27.2305C27.3409 8.57114 27.4495 8.59989 27.5458 8.6546C27.6421 8.70931 27.723 8.78815 27.7807 8.88361L32.0855 15.9807C32.1457 16.0799 32.1787 16.1937 32.1811 16.3101C32.1835 16.4266 32.1553 16.5417 32.0993 16.6434C32.0433 16.7451 31.9616 16.8299 31.8625 16.8889C31.7635 16.9479 31.6508 16.979 31.5359 16.9791ZM24.5396 15.6689H30.38L26.8696 9.88138H24.5396V15.6689Z"
															}), (0, a.jsx)("path", {
																d: "M8.51615 30C7.60933 30 6.72286 29.7272 5.96886 29.2161C5.21487 28.705 4.62719 27.9785 4.28017 27.1286C3.93314 26.2786 3.84234 25.3434 4.01925 24.4411C4.19617 23.5388 4.63285 22.71 5.27407 22.0595C5.91529 21.4089 6.73226 20.9659 7.62166 20.7865C8.51107 20.607 9.43296 20.6991 10.2708 21.0512C11.1086 21.4032 11.8246 21.9994 12.3284 22.7643C12.8322 23.5293 13.1012 24.4286 13.1012 25.3486C13.0989 26.5815 12.6152 27.7633 11.7558 28.6352C10.8964 29.507 9.73149 29.9978 8.51615 30ZM8.51615 22.0015C7.86491 22.0015 7.22828 22.1973 6.68675 22.5643C6.14521 22.9313 5.72308 23.4529 5.47371 24.0633C5.22434 24.6736 5.15893 25.3452 5.28575 25.9933C5.41257 26.6413 5.72592 27.2367 6.18619 27.7041C6.64647 28.1715 7.233 28.49 7.87166 28.6193C8.51031 28.7485 9.17241 28.6828 9.77427 28.4305C10.3761 28.1781 10.8907 27.7503 11.253 27.2013C11.6153 26.6523 11.809 26.0066 11.8096 25.3459C11.8088 24.4598 11.4616 23.6101 10.8442 22.9831C10.2269 22.3562 9.38967 22.0032 8.51615 22.0015Z"
															}), (0, a.jsx)("path", {
																d: "M8.51682 28.0346C7.99316 28.0346 7.48126 27.8771 7.04585 27.5819C6.61044 27.2868 6.27108 26.8673 6.07068 26.3764C5.87029 25.8856 5.81786 25.3456 5.92002 24.8245C6.02218 24.3035 6.27434 23.8249 6.64463 23.4492C7.01491 23.0736 7.48668 22.8177 8.00028 22.7141C8.51388 22.6104 9.04624 22.6636 9.53004 22.8669C10.0138 23.0702 10.4273 23.4145 10.7183 23.8562C11.0092 24.298 11.1645 24.8173 11.1645 25.3485C11.163 26.0604 10.8835 26.7427 10.3873 27.2461C9.89111 27.7495 9.21855 28.033 8.51682 28.0346ZM8.51682 23.9669C8.24874 23.9669 7.98667 24.0475 7.76373 24.1985C7.54079 24.3495 7.36697 24.5642 7.26423 24.8154C7.1615 25.0666 7.13445 25.3431 7.18652 25.6098C7.23858 25.8766 7.36742 26.1218 7.55676 26.3143C7.74609 26.5068 7.98743 26.6381 8.25028 26.6916C8.51313 26.745 8.7857 26.7183 9.03355 26.6146C9.28141 26.511 9.49343 26.3352 9.64283 26.1094C9.79223 25.8836 9.87231 25.6179 9.87294 25.3459C9.87277 24.9808 9.72995 24.6306 9.47575 24.3721C9.22156 24.1136 8.87673 23.9679 8.51682 23.9669Z"
															}), (0, a.jsx)("path", {
																d: "M28.5357 30C27.6289 30 26.7424 29.7272 25.9884 29.2161C25.2344 28.705 24.6467 27.9785 24.2997 27.1286C23.9527 26.2786 23.8619 25.3434 24.0388 24.4411C24.2157 23.5388 24.6524 22.71 25.2936 22.0595C25.9348 21.4089 26.7518 20.9659 27.6412 20.7865C28.5306 20.607 29.4525 20.6991 30.2903 21.0512C31.1281 21.4032 31.8442 21.9994 32.348 22.7643C32.8518 23.5293 33.1207 24.4286 33.1207 25.3486C33.1185 26.5815 32.6347 27.7633 31.7753 28.6352C30.9159 29.507 29.751 29.9978 28.5357 30ZM28.5357 22.0015C27.8844 22.0015 27.2478 22.1973 26.7063 22.5643C26.1647 22.9313 25.7426 23.4529 25.4932 24.0633C25.2439 24.6736 25.1785 25.3452 25.3053 25.9933C25.4321 26.6413 25.7455 27.2367 26.2057 27.7041C26.666 28.1715 27.2525 28.49 27.8912 28.6193C28.5298 28.7485 29.1919 28.6828 29.7938 28.4305C30.3957 28.1781 30.9102 27.7503 31.2725 27.2013C31.6348 26.6523 31.8285 26.0066 31.8291 25.3459C31.8283 24.4598 31.4811 23.6101 30.8638 22.9831C30.2464 22.3562 29.4092 22.0032 28.5357 22.0015Z"
															}), (0, a.jsx)("path", {
																d: "M28.5354 28.0346C28.0117 28.0346 27.4998 27.8771 27.0644 27.5819C26.629 27.2868 26.2896 26.8673 26.0892 26.3764C25.8888 25.8856 25.8364 25.3456 25.9386 24.8245C26.0407 24.3035 26.2929 23.8249 26.6632 23.4492C27.0335 23.0736 27.5052 22.8177 28.0188 22.7141C28.5324 22.6104 29.0648 22.6636 29.5486 22.8669C30.0324 23.0702 30.4459 23.4145 30.7368 23.8562C31.0278 24.298 31.183 24.8173 31.183 25.3485C31.1815 26.0604 30.9021 26.7427 30.4059 27.2461C29.9097 27.7495 29.2371 28.033 28.5354 28.0346ZM28.5354 23.9669C28.2673 23.9669 28.0052 24.0475 27.7823 24.1985C27.5593 24.3495 27.3855 24.5642 27.2828 24.8154C27.1801 25.0666 27.153 25.3431 27.2051 25.6098C27.2571 25.8766 27.386 26.1218 27.5753 26.3143C27.7646 26.5068 28.006 26.6381 28.2688 26.6916C28.5317 26.745 28.8043 26.7183 29.0521 26.6146C29.3 26.511 29.512 26.3352 29.6614 26.1094C29.8108 25.8836 29.8909 25.6179 29.8915 25.3459C29.8913 24.9808 29.7485 24.6306 29.4943 24.3721C29.2401 24.1136 28.8953 23.9679 28.5354 23.9669Z"
															}), (0, a.jsx)("path", {
																d: "M4.61569 26.5592H2.74294C2.57167 26.5592 2.40742 26.4902 2.28631 26.3673C2.1652 26.2444 2.09717 26.0778 2.09717 25.9041V22.6808H3.38872V25.2489H4.61569V26.5592Z"
															}), (0, a.jsx)("path", {
																d: "M35.354 26.5592H32.4351V25.2489H34.7082V22.8773H35.9997V25.9041C35.9997 26.0778 35.9317 26.2444 35.8106 26.3673C35.6895 26.4902 35.5252 26.5592 35.354 26.5592Z"
															}), (0, a.jsx)("path", {
																d: "M24.6346 26.5592H12.4617L12.4165 25.2489H24.6346V26.5592Z"
															}), (0, a.jsx)("path", {
																d: "M15.9293 10.646H6.51199C6.34072 10.646 6.17646 10.5769 6.05535 10.4541C5.93425 10.3312 5.86621 10.1646 5.86621 9.99083C5.86621 9.81708 5.93425 9.65044 6.05535 9.52758C6.17646 9.40472 6.34072 9.33569 6.51199 9.33569H15.9293C16.1006 9.33569 16.2648 9.40472 16.3859 9.52758C16.5071 9.65044 16.5751 9.81708 16.5751 9.99083C16.5751 10.1646 16.5071 10.3312 16.3859 10.4541C16.2648 10.5769 16.1006 10.646 15.9293 10.646Z"
															}), (0, a.jsx)("path", {
																d: "M15.9293 12.6114H6.51199C6.34072 12.6114 6.17646 12.5424 6.05535 12.4195C5.93425 12.2967 5.86621 12.13 5.86621 11.9563C5.86621 11.7825 5.93425 11.6159 6.05535 11.493C6.17646 11.3702 6.34072 11.3011 6.51199 11.3011H15.9293C16.1006 11.3011 16.2648 11.3702 16.3859 11.493C16.5071 11.6159 16.5751 11.7825 16.5751 11.9563C16.5751 12.13 16.5071 12.2967 16.3859 12.4195C16.2648 12.5424 16.1006 12.6114 15.9293 12.6114Z"
															}), (0, a.jsx)("path", {
																d: "M15.9293 14.5768H6.51199C6.34072 14.5768 6.17646 14.5077 6.05535 14.3849C5.93425 14.262 5.86621 14.0954 5.86621 13.9216C5.86621 13.7479 5.93425 13.5812 6.05535 13.4584C6.17646 13.3355 6.34072 13.2665 6.51199 13.2665H15.9293C16.1006 13.2665 16.2648 13.3355 16.3859 13.4584C16.5071 13.5812 16.5751 13.7479 16.5751 13.9216C16.5751 14.0954 16.5071 14.262 16.3859 14.3849C16.2648 14.5077 16.1006 14.5768 15.9293 14.5768Z"
															})]
														})
													}), (0, a.jsx)("h5", {
														children: (0, a.jsx)(h(), {
															legacyBehavior: !0,
															href: "/job-listing1",
															children: (0, a.jsx)("a", {
																children: "Transportation job"
															})
														})
													}), (0, a.jsxs)("p", {
														children: ["Open Post: ", (0, a.jsx)("span", {
															children: "223"
														})]
													})]
												})]
											})
										}), (0, a.jsx)(m.o5, {
											className: "swiper-slide",
											children: (0, a.jsxs)("div", {
												className: "category.html-card3",
												children: [(0, a.jsx)("img", {
													className: "img-fluid",
													src: "assets/images/bg/category.html-32.png",
													alt: ""
												}), (0, a.jsx)("div", {
													className: "category.html-tag",
													children: (0, a.jsx)("span", {
														children: "Trending"
													})
												}), (0, a.jsxs)("div", {
													className: "category.html-content",
													children: [(0, a.jsx)("div", {
														className: "category.html-icon",
														children: (0, a.jsxs)("svg", {
															width: 36,
															height: 38,
															viewBox: "0 0 36 38",
															xmlns: "http://www.w3.org/2000/svg",
															children: [(0, a.jsx)("path", {
																d: "M28.6035 15.6784C28.597 15.6784 28.5905 15.6784 28.5837 15.6781C27.7866 15.6529 26.9632 15.3992 26.0917 15.1304C24.4839 14.6346 22.6617 14.0726 20.6049 14.8917C20.2051 15.0502 19.752 14.7492 19.752 14.3232V8.58801C19.752 8.42559 19.8171 8.26991 19.9332 8.15499C23.1087 5.01478 25.9787 6.81978 28.7541 8.56502C30.7845 9.84201 32.8842 11.1631 35.2918 10.8153C35.7769 10.746 36.159 11.2621 35.9355 11.6985C35.4374 12.6702 34.7086 13.5194 32.9792 13.4949C33.2871 13.8712 33.6707 14.5408 32.9472 14.7762C31.8553 15.1311 30.8479 14.8209 29.8804 14.3542C29.9745 14.5485 30.0539 14.7618 30.0539 14.9981C30.0542 15.706 29.1017 15.6784 28.6035 15.6784ZM22.7747 13.2482C24.1534 13.2482 25.3893 13.6294 26.4616 13.9601C27.2155 14.1927 27.9294 14.4127 28.5396 14.4489C28.3549 14.0502 28.1994 13.5062 28.557 12.9252C28.7798 12.5633 29.2013 12.5881 29.525 12.7815C30.238 13.1688 30.8891 13.5222 31.5108 13.6506L31.0257 13.0579C30.6613 12.6126 31.0924 11.9424 31.6539 12.0767C32.8718 12.3666 33.5779 12.3043 34.0252 12.0803C31.7843 11.9237 29.8391 10.7004 28.0874 9.59838C25.1854 7.77346 23.2642 6.74868 20.9935 8.84696V13.4738C21.6105 13.3135 22.2048 13.2482 22.7747 13.2482Z"
															}), (0, a.jsx)("path", {
																d: "M7.37726 15.6649C7.00326 15.6649 6.44148 15.6462 6.14942 15.3836C5.84245 15.1077 5.94333 14.6707 6.09417 14.3422C5.14628 14.8151 4.11956 15.1142 3.02487 14.6986C2.33677 14.4375 2.71698 13.7992 3.02146 13.4275C1.29174 13.4514 0.563286 12.6031 0.0651337 11.6311C-0.157405 11.1968 0.223115 10.6755 0.709783 10.7482C3.07825 11.0932 5.15808 9.78162 7.17086 8.51352C9.95834 6.75694 12.8411 4.9403 16.0647 8.0848C16.1826 8.20002 16.249 8.35693 16.249 8.52088V14.2561C16.249 14.6836 15.7915 14.9858 15.3911 14.8227C13.4023 14.011 11.6853 14.5595 10.0254 15.0906C9.10822 15.3832 8.22676 15.6649 7.37726 15.6649ZM7.44368 12.8581C7.86331 13.4376 7.62959 14.0352 7.43437 14.4382C8.07467 14.4253 8.81802 14.1878 9.643 13.9239C11.1365 13.4465 12.951 12.8664 15.0075 13.403V8.78228C12.6937 6.67267 10.7591 7.70664 7.83848 9.54657C6.10472 10.6391 4.17978 11.8517 1.97363 12.012C2.42057 12.2366 3.12667 12.2997 4.34676 12.0092C4.90698 11.8753 5.34089 12.5434 4.97496 12.9905L4.44484 13.6377C5.06993 13.5301 5.7512 13.1523 6.59201 12.6512C6.69257 12.5915 7.17583 12.4879 7.44368 12.8581Z"
															}), (0, a.jsx)("path", {
																d: "M24.7006 24.8931C24.1261 22.9376 21.7896 22.2177 20.3935 21.7875L20.1278 21.705C19.6064 21.5408 19.1132 21.4415 18.6402 21.3784V7.11642C20.3677 6.82682 21.6878 5.35585 21.6878 3.58579C21.6878 1.60856 20.0422 0 18.0195 0C15.9967 0 14.3508 1.60856 14.3508 3.58579C14.3508 5.35585 15.6708 6.82682 17.3984 7.11642V21.2895C16.8506 21.2834 16.3332 21.3128 15.8434 21.3422C14.4874 21.424 13.4166 21.4887 12.3933 20.7128C11.9048 20.3426 11.0823 19.5571 11.0612 18.4573C11.0373 17.1932 12.1208 16.2943 12.338 16.127C12.6084 15.9189 12.6565 15.5337 12.4457 15.2668C12.235 14.9999 11.8449 14.9524 11.5745 15.1605C11.1543 15.4841 9.78582 16.6799 9.81996 18.4803C9.85069 20.0937 10.9715 21.1807 11.6369 21.6851C13.0286 22.7402 14.4328 22.656 15.9188 22.5659C16.4008 22.5368 16.8906 22.5095 17.3984 22.5156V27.5555C16.9992 27.5503 16.6231 27.5715 16.2674 27.5929C15.3133 27.6505 14.6236 27.6922 13.9554 27.1856C13.637 26.9438 13.1003 26.4339 13.087 25.734C13.0718 24.9277 13.7763 24.3439 13.9175 24.2351C14.1879 24.027 14.2363 23.6418 14.0255 23.3749C13.8151 23.108 13.4247 23.0599 13.1543 23.2683C12.8408 23.5094 11.8203 24.4018 11.8458 25.7563C11.8687 26.9696 12.7033 27.7814 13.1993 28.1574C14.2357 28.9428 15.3068 28.8785 16.3431 28.816C16.687 28.7951 17.0365 28.7758 17.3984 28.7816V33.0864C17.1122 33.0811 16.8472 33.0959 16.6076 33.1103C15.9399 33.1498 15.5743 33.1584 15.2084 32.881C15.0616 32.7701 14.7195 32.4692 14.7121 32.0741C14.7037 31.6258 15.1351 31.281 15.1842 31.243C15.4548 31.035 15.5032 30.6498 15.2928 30.3828C15.0821 30.1153 14.6922 30.0678 14.4216 30.2756C14.1938 30.4509 13.4517 31.0996 13.4709 32.0968C13.4877 32.9911 14.0935 33.5813 14.4526 33.8534C15.2037 34.4228 15.9561 34.3774 16.6836 34.3336C16.9167 34.3195 17.1535 34.3063 17.3987 34.3119V37.3871C17.3987 37.7254 17.6768 38 18.0195 38C18.3621 38 18.6402 37.7254 18.6402 37.3871V34.55C19.1225 34.702 19.7895 34.9428 19.9099 35.3532C20.0006 35.6624 19.7898 36.0399 19.6564 36.2376C19.2153 36.8891 20.243 37.5777 20.6884 36.9188C21.1328 36.2621 21.2759 35.6029 21.1024 35.0118C20.7833 33.9257 19.5335 33.5408 18.8618 33.3337L18.7392 33.2957C18.7054 33.2849 18.6731 33.2779 18.6399 33.2684V28.9312C18.7516 28.9581 18.8646 28.9885 18.9801 29.025L19.1737 29.085C19.9559 29.3259 21.2644 29.7292 21.5112 30.5695C21.6744 31.1248 21.3718 31.7386 21.0894 32.156C20.6486 32.8078 21.6757 33.4958 22.1217 32.8372C22.7368 31.9283 22.938 31.0261 22.7036 30.2281C22.271 28.7553 20.5636 28.2291 19.5434 27.915L19.3569 27.8574C19.1089 27.7792 18.8714 27.7238 18.6396 27.679V22.6149C18.9968 22.6707 19.3652 22.7519 19.7504 22.8729L20.0235 22.9578C21.1812 23.3145 23.1195 23.9115 23.5081 25.2348C23.767 26.1158 23.3076 27.06 22.8768 27.6968C22.4358 28.3483 23.4634 29.0363 23.9091 28.3777C24.7372 27.1538 25.0106 25.9491 24.7006 24.8931C24.1264 22.9376 25.0106 25.9491 24.7006 24.8931ZM15.5923 3.58579C15.5923 2.2846 16.6811 1.22581 18.0195 1.22581C19.3578 1.22581 20.4463 2.2846 20.4463 3.58579C20.4463 4.88698 19.3575 5.94608 18.0195 5.94608C16.6814 5.94608 15.5923 4.88729 15.5923 3.58579Z"
															}), (0, a.jsx)("path", {
																d: "M23.7244 21.614C23.0477 21.614 22.877 20.6518 23.5133 20.4247C24.4668 20.0845 25.0928 19.2951 25.1083 18.4137C25.1229 17.5781 24.5683 16.7908 23.6952 16.408C23.3817 16.2707 23.2405 15.9085 23.3795 15.599C23.5189 15.2898 23.8861 15.151 24.1989 15.2873C25.5286 15.8702 26.3725 17.1055 26.3495 18.4349C26.325 19.8292 25.3774 21.0627 23.9354 21.5772C23.8659 21.6021 23.7945 21.614 23.7244 21.614Z"
															}), (0, a.jsx)("path", {
																d: "M16.0345 37.5308C15.6779 37.5308 15.3281 37.4079 15.0509 37.1809C14.7334 36.9204 14.5388 36.545 14.5168 36.1509C14.4739 35.3808 15.09 34.6919 15.8895 34.6155C16.2294 34.5831 16.5342 34.8298 16.5671 35.1665C16.6 35.5033 16.3501 35.803 16.009 35.8355C15.7527 35.86 15.6794 36.1401 15.8948 36.271C16.1254 36.4114 16.3827 36.2557 16.6071 36.4959C17.0507 36.9709 16.5764 37.5308 16.0345 37.5308Z"
															})]
														})
													}), (0, a.jsx)("h5", {
														children: (0, a.jsx)(h(), {
															legacyBehavior: !0,
															href: "/job-listing1",
															children: (0, a.jsx)("a", {
																children: "Medical & Nurse"
															})
														})
													}), (0, a.jsxs)("p", {
														children: ["Open Post: ", (0, a.jsx)("span", {
															children: "5000"
														})]
													})]
												})]
											})
										}), (0, a.jsx)(m.o5, {
											className: "swiper-slide",
											children: (0, a.jsxs)("div", {
												className: "category.html-card3",
												children: [(0, a.jsx)("img", {
													className: "img-fluid",
													src: "assets/images/bg/category.html-33.png",
													alt: ""
												}), (0, a.jsxs)("div", {
													className: "category.html-content",
													children: [(0, a.jsx)("div", {
														className: "category.html-icon",
														children: (0, a.jsx)("svg", {
															width: 36,
															height: 40,
															viewBox: "0 0 36 40",
															xmlns: "http://www.w3.org/2000/svg",
															children: (0, a.jsxs)("g", {
																opacity: "0.8",
																children: [(0, a.jsx)("path", {
																	d: "M35.1653 20.8971C33.3357 19.0672 31.2206 20.7799 31.2206 20.7799V11.147C31.2206 10.8235 30.9597 10.561 30.6377 10.561C30.3154 10.561 30.0545 10.8235 30.0545 11.147V21.6042C30.0545 21.6042 27.2736 23.8066 26.0783 24.345V7.00051C26.0783 6.19423 26.731 5.5384 27.5336 5.5384H28.5992C29.4017 5.5384 30.0545 6.19423 30.0545 7.00051V8.74826C30.0545 9.07205 30.3154 9.3342 30.6377 9.3342C30.9597 9.3342 31.2206 9.07205 31.2206 8.74826V7.00051C31.2206 5.54816 30.0448 4.36682 28.5992 4.36682H27.5336C26.088 4.36682 24.9118 5.54816 24.9118 7.00051V24.8095C24.564 24.9074 24.2071 24.9739 23.8444 25.009V12.6564C23.8444 11.1967 22.6625 10.0093 21.2099 10.0093H20.1701C18.7175 10.0093 17.5356 11.1967 17.5356 12.6564V18.6263L16.4678 19.1957V17.209C16.4678 15.8949 15.4038 14.8259 14.0961 14.8259H12.5311C11.2231 14.8259 10.1593 15.8949 10.1593 17.209V22.56L8.25504 23.5753L2.90761 25.1107C1.97719 25.3777 1.20017 25.9899 0.720223 26.834C0.239976 27.6784 0.109662 28.6617 0.353279 29.6026L0.951386 31.9146C1.03219 32.2277 1.35053 32.4154 1.66249 32.3342C1.97415 32.2527 2.16127 31.9329 2.08017 31.6195L1.48206 29.3078C1.13516 27.9668 1.90216 26.6179 3.22839 26.2374L8.11743 24.8336L11.792 34.6865C12.0381 35.3463 11.9992 37.2287 10.0554 37.9223L6.36078 38.7655C5.07313 39.0591 3.80432 38.2837 3.472 36.9995L2.72201 34.1C2.64091 33.7869 2.32257 33.5989 2.01091 33.6801C1.69894 33.7615 1.51213 34.0814 1.59293 34.3948L2.34322 37.2946C2.76484 38.9236 4.20528 40 5.80884 40C6.98713 40 10.3139 39.0649 10.3139 39.0649C11.3264 38.8342 12.1897 38.175 12.6821 37.257C13.0885 36.4996 13.2091 35.628 13.0347 34.7976L25.817 31.6537C26.8741 31.3934 27.8777 30.8889 28.7186 30.1946L34.939 25.0597C36.8354 23.3699 35.723 21.4546 35.1653 20.8971ZM20.1701 11.1811H21.2099C22.0194 11.1811 22.678 11.8431 22.678 12.6564V25.0383L18.9979 25.0368C18.6598 25.0338 18.8937 24.8095 18.9122 24.7942L19.972 23.9318C20.9608 23.127 21.6066 22.0082 21.8912 20.6059C22.0719 19.7163 21.7342 18.8258 21.0103 18.282C20.3341 17.7742 19.4645 17.6765 18.702 18.0122V12.6564C18.702 11.8431 19.3606 11.1811 20.1701 11.1811ZM11.3258 17.209C11.3258 16.5413 11.8665 15.9978 12.5311 15.9978H14.0961C14.7607 15.9978 15.3017 16.5413 15.3017 17.209V19.8177L11.3255 21.938V17.209H11.3258ZM34.1987 24.1545L27.978 29.2895C27.2714 29.873 26.4282 30.2969 25.5397 30.5154L12.6632 33.6828L9.20034 24.3984L19.0878 19.1255C19.4897 18.911 19.9474 18.9467 20.3116 19.2204C20.6759 19.4942 20.8393 19.9245 20.7485 20.3719C20.5191 21.5007 20.0109 22.3921 19.2378 23.0211L18.178 23.8839C17.7436 24.2372 17.5836 24.8076 17.7701 25.3371C17.9566 25.8663 18.4383 26.2087 18.9973 26.2087L23.2466 26.2105H23.2496C24.7624 26.2105 26.2162 25.7485 27.4537 24.8742L32.2027 21.519C32.8676 21.0491 33.7628 21.1321 34.3309 21.7162C34.658 22.0519 35.2983 23.0495 34.1987 24.1545V24.1545Z"
																}), (0, a.jsx)("path", {
																	d: "M9.55817 35.0618C9.55817 33.7889 8.52752 32.7532 7.26053 32.7532C5.99355 32.7532 4.96289 33.7889 4.96289 35.0618C4.96289 36.3344 5.99355 37.3702 7.26053 37.3702C8.52752 37.3702 9.55817 36.3344 9.55817 35.0618V35.0618ZM6.12933 35.0618C6.12933 34.435 6.63661 33.925 7.26053 33.925C7.88415 33.925 8.39173 34.435 8.39173 35.0618C8.39173 35.6884 7.88446 36.1983 7.26053 36.1983C6.63661 36.1983 6.12933 35.6884 6.12933 35.0618V35.0618Z"
																}), (0, a.jsx)("path", {
																	d: "M3.06656 18.397L11.5446 9.81391L13.4516 10.8048C14.1347 11.1597 14.9661 11.0383 15.5202 10.5024L20.1349 6.03947C20.1349 6.03947 20.008 8.33166 21.9293 8.33166C22.9183 8.33166 23.7233 7.52294 23.7233 6.52897V1.80238C23.7233 1.79689 23.723 1.79109 23.723 1.78529C23.7166 0.552067 22.819 0 21.9293 0H17.2656C16.2763 0 15.4716 0.808721 15.4716 1.80238C15.4716 3.78359 17.4785 3.60476 17.4785 3.60476L13.9579 7.00932L12.0233 6.00407C11.3237 5.6403 10.4808 5.77366 9.92551 6.33519L0.519826 15.8576C-0.177004 16.5632 -0.172751 17.7067 0.529546 18.4068C0.867937 18.744 2.02345 19.445 3.06656 18.397ZM1.34758 16.6832L10.7533 7.16069C10.8748 7.03801 11.0698 6.82316 11.4875 7.04503L13.7933 8.24316C14.0154 8.35851 14.2857 8.31915 14.4658 8.14489L19.3297 3.44118C19.501 3.27547 19.5551 3.02156 19.4661 2.80001C19.3771 2.57814 19.1632 2.43318 18.9251 2.43318H17.2656C16.9196 2.43318 16.638 2.15028 16.638 1.80238C16.638 1.45478 16.9196 1.17188 17.2656 1.17188H21.9293C22.1009 1.17188 22.5565 1.17188 22.5565 1.79872C22.5565 1.80391 22.5568 1.80909 22.5568 1.81459V6.52897C22.5568 6.87657 22.2753 7.15947 21.9293 7.15947C21.583 7.15947 21.3014 6.87657 21.3014 6.52897V4.6622C21.3014 4.42721 21.1617 4.21481 20.9466 4.12295C20.7315 4.03079 20.4824 4.07717 20.3139 4.24014L14.7113 9.65827C14.5175 9.84564 14.2265 9.88837 13.9877 9.76416L11.7004 8.5755C11.4741 8.458 11.198 8.50164 11.0184 8.68322L2.23881 17.5715C1.85607 17.956 1.46939 17.693 1.35092 17.5749C1.10548 17.3298 1.10396 16.9297 1.34758 16.6832V16.6832Z"
																})]
															})
														})
													}), (0, a.jsx)("h5", {
														children: (0, a.jsx)(h(), {
															legacyBehavior: !0,
															href: "/job-listing1",
															children: (0, a.jsx)("a", {
																children: "Marketing & Sales"
															})
														})
													}), (0, a.jsxs)("p", {
														children: ["Open Post: ", (0, a.jsx)("span", {
															children: "345"
														})]
													})]
												})]
											})
										}), (0, a.jsx)(m.o5, {
											className: "swiper-slide",
											children: (0, a.jsxs)("div", {
												className: "category.html-card3",
												children: [(0, a.jsx)("img", {
													className: "img-fluid",
													src: "assets/images/bg/category.html-34.png",
													alt: ""
												}), (0, a.jsx)("div", {
													className: "category.html-tag",
													children: (0, a.jsx)("span", {
														children: "Popular"
													})
												}), (0, a.jsxs)("div", {
													className: "category.html-content",
													children: [(0, a.jsx)("div", {
														className: "category.html-icon",
														children: (0, a.jsx)("svg", {
															width: 36,
															height: 36,
															viewBox: "0 0 36 36",
															xmlns: "http://www.w3.org/2000/svg",
															children: (0, a.jsxs)("g", {
																opacity: "0.85",
																children: [(0, a.jsx)("path", {
																	d: "M32.5293 4.89417C33.2882 4.89417 33.9023 4.28884 33.9023 3.54074C33.9023 2.79265 33.2882 2.18732 32.5293 2.18732C31.7703 2.18732 31.1562 2.79265 31.1562 3.54074C31.1562 4.28884 31.7761 4.89417 32.5293 4.89417ZM32.5293 3.15242C32.7494 3.15242 32.929 3.32945 32.929 3.54645C32.929 3.76346 32.7494 3.94049 32.5293 3.94049C32.3033 3.94049 32.1295 3.76917 32.1295 3.54645C32.1295 3.32374 32.3091 3.15242 32.5293 3.15242Z"
																}), (0, a.jsx)("path", {
																	d: "M34.0534 0H5.82813C4.75636 0 3.88156 0.86231 3.88156 1.91878V4.84835H1.94657C0.874799 4.84835 0 5.71066 0 6.76713V30.8261C0 31.8826 0.874799 32.7449 1.94657 32.7449H14.8832V35.5203C14.8832 35.783 15.1033 36 15.3698 36H24.5117C24.7782 36 24.9984 35.783 24.9984 35.5203V32.7449H30.1719C31.2436 32.7449 32.1184 31.8826 32.1184 30.8261V27.8966H34.0534C35.1252 27.8966 36 27.0343 36 25.9778V1.91878C36 0.86231 35.1252 0 34.0534 0ZM4.85484 1.91878C4.85484 1.38769 5.29514 0.959391 5.82813 0.959391H34.0534C34.5922 0.959391 35.0267 1.3934 35.0267 1.91878V6.12754H16.5575L14.3849 3.90609C14.2169 3.73477 13.9852 3.63769 13.7477 3.63769H8.96234C8.4757 3.63769 8.07596 4.03173 8.07596 4.51142V6.12754H4.85484V1.91878ZM1.94657 31.7912C1.40779 31.7912 0.973286 31.3572 0.973286 30.8319V6.76713C0.973286 6.23604 1.41358 5.80774 1.94657 5.80774H3.88156V25.9835C3.88156 27.04 4.75636 27.9023 5.82813 27.9023H16.3952C16.5864 28.2678 16.6733 28.6789 16.6386 29.1015H15.8854C15.3293 29.1015 14.8832 29.547 14.8832 30.0895V31.7912H1.94657ZM19.4599 21.7462C19.5584 21.5749 19.738 21.4664 19.9408 21.4664C20.242 21.4664 20.4854 21.7062 20.4854 22.0032C20.4854 22.1973 20.3811 22.3744 20.2131 22.4714C20.0277 22.58 19.8075 22.5685 19.5816 22.4429C19.5526 22.4258 19.5237 22.4029 19.5121 22.3744C19.3267 22.0831 19.402 21.8547 19.4599 21.7462ZM19.4541 20.5984C19.1007 20.7183 18.7995 20.9524 18.6141 21.2836C18.336 21.7747 18.3708 22.3744 18.6952 22.8883C18.7995 23.0482 18.9385 23.1796 19.1065 23.2767C19.373 23.4251 19.6627 23.5051 19.9466 23.5051C20.2131 23.5051 20.4738 23.4366 20.7055 23.3052C21.169 23.0368 21.4586 22.54 21.4586 22.0089C21.4586 21.3522 21.0241 20.7982 20.4274 20.5984V18.1313L24.7319 25.7893C24.7261 25.7951 24.7203 25.8065 24.7029 25.8122C23.1793 26.2005 22.1828 27.6053 22.2639 29.1015H17.6234C17.7103 27.5996 16.7081 26.1948 15.1555 25.7665L19.4541 18.1313V20.5984ZM24.0251 35.0406H15.8565L15.8854 30.0552H23.9961C24.0135 30.0552 24.0251 30.0666 24.0251 30.0838V35.0406ZM31.1452 30.8261C31.1452 31.3572 30.7049 31.7855 30.1719 31.7855H24.9984V30.0838C24.9984 29.5355 24.5465 29.0958 23.9961 29.0958H23.243C23.2082 28.6732 23.3009 28.2621 23.4863 27.8966H31.1452V30.8261ZM34.0534 26.9429H24.4306C24.5871 26.8572 24.7551 26.783 24.9405 26.7373C25.2475 26.6574 25.4966 26.4461 25.6241 26.1605C25.7457 25.8807 25.7284 25.5666 25.5777 25.2982L20.5954 16.4524C20.468 16.2183 20.2189 16.0698 19.9466 16.0698C19.6685 16.0755 19.4194 16.2126 19.2861 16.4467L14.298 25.2982C14.1474 25.5666 14.1358 25.8864 14.2575 26.1662C14.3791 26.4518 14.6283 26.6574 14.9353 26.7373C15.1207 26.783 15.2829 26.8572 15.4451 26.9429H5.82813C5.28935 26.9429 4.85484 26.5089 4.85484 25.9835V7.08693H8.15707C8.64371 7.08693 9.04345 6.69289 9.04345 6.2132V4.59708H13.7071L15.8796 6.81853C16.0476 6.98985 16.2794 7.08693 16.5169 7.08693H35.0267V25.9778C35.0267 26.5089 34.5922 26.9429 34.0534 26.9429Z"
																}), (0, a.jsx)("path", {
																	d: "M29.2158 4.89417C29.9747 4.89417 30.5888 4.28884 30.5888 3.54074C30.5888 2.79265 29.9747 2.18732 29.2158 2.18732C28.4569 2.18732 27.8428 2.79265 27.8428 3.54074C27.8428 4.28884 28.4569 4.89417 29.2158 4.89417ZM29.2158 3.15242C29.4359 3.15242 29.6155 3.32945 29.6155 3.54645C29.6155 3.76346 29.4359 3.94049 29.2158 3.94049C28.9899 3.94049 28.8161 3.76917 28.8161 3.54645C28.8161 3.32374 28.9957 3.15242 29.2158 3.15242Z"
																}), (0, a.jsx)("path", {
																	d: "M25.8965 4.89417C26.6554 4.89417 27.2695 4.28884 27.2695 3.54074C27.2695 2.79265 26.6554 2.18732 25.8965 2.18732C25.1375 2.18732 24.5234 2.79265 24.5234 3.54074C24.5234 4.28884 25.1375 4.89417 25.8965 4.89417ZM25.8965 3.15242C26.1166 3.15242 26.2962 3.32945 26.2962 3.54645C26.2962 3.76346 26.1166 3.94049 25.8965 3.94049C25.6705 3.94049 25.4967 3.76917 25.4967 3.54645C25.4967 3.32374 25.6763 3.15242 25.8965 3.15242Z"
																}), (0, a.jsx)("path", {
																	d: "M29.3203 11.2672C29.0364 11.547 28.8568 11.9011 28.7873 12.278H21.9801V11.5242C21.9801 11.0102 21.5572 10.5933 21.0358 10.5933H18.8401C18.3187 10.5933 17.8957 11.0102 17.8957 11.5242V12.278H11.0943C11.0306 11.9068 10.851 11.5527 10.5613 11.2615C9.82558 10.5476 8.56842 10.5591 7.85004 11.2672C7.48506 11.627 7.28809 12.1009 7.28809 12.6035C7.28809 13.1117 7.49085 13.5914 7.85004 13.9398C8.21502 14.311 8.70167 14.4994 9.20569 14.4994C9.52433 14.4994 9.84875 14.4252 10.1558 14.271C10.486 14.1054 10.7583 13.8313 10.9205 13.4943C10.9611 13.4087 10.9958 13.323 11.0248 13.2374H15.7464C13.1799 14.4709 11.245 16.7894 10.5729 19.5876H9.81979C9.29838 19.5876 8.87547 20.0045 8.87547 20.5184V22.6828C8.87547 23.1967 9.29838 23.6136 9.81979 23.6136H12.0155C12.5369 23.6136 12.9598 23.1967 12.9598 22.6828V20.5184C12.9598 20.0045 12.5369 19.5876 12.0155 19.5876H11.5752C12.3863 16.5724 14.8368 14.2082 17.9131 13.4772V13.6828C17.9131 14.1967 18.336 14.6136 18.8574 14.6136H21.0531C21.5745 14.6136 21.9975 14.1967 21.9975 13.6828V13.4772C25.0679 14.2082 27.5185 16.5724 28.3354 19.5876H27.9357C27.4143 19.5876 26.9913 20.0045 26.9913 20.5184V22.6828C26.9913 23.1967 27.4143 23.6136 27.9357 23.6136H30.1313C30.6527 23.6136 31.0757 23.1967 31.0757 22.6828V20.5184C31.0757 20.0045 30.6527 19.5876 30.1313 19.5876H29.3377C28.6598 16.7894 26.7248 14.4651 24.1642 13.2374H28.8974C28.9901 13.5 29.1407 13.7399 29.3434 13.9398C29.7084 14.311 30.1951 14.4994 30.6991 14.4994C31.0177 14.4994 31.3422 14.4252 31.6492 14.271C31.9794 14.1054 32.2517 13.8313 32.4139 13.4943C32.7905 12.712 32.6573 11.8611 32.0605 11.2615C31.3016 10.5533 30.0444 10.5591 29.3203 11.2672ZM10.0341 13.0889C9.96462 13.2259 9.84876 13.3459 9.70971 13.4144C9.20569 13.6657 8.77119 13.5058 8.53366 13.2602C8.35407 13.0889 8.25558 12.8547 8.25558 12.6035C8.25558 12.3579 8.35407 12.1238 8.53366 11.941C8.71325 11.764 8.95078 11.6669 9.20569 11.6669C9.45481 11.6669 9.69813 11.764 9.87193 11.9353C10.1732 12.2437 10.2311 12.672 10.0341 13.0889ZM12.0039 22.6542L9.83717 22.6828L9.8082 20.547H11.9749L12.0039 22.6542ZM30.114 22.6542L27.9472 22.6828L27.9183 20.547H30.085L30.114 22.6542ZM18.8748 13.6885L18.8632 12.969C18.8748 12.9176 18.8748 12.8662 18.869 12.8091V12.8033C18.869 12.7862 18.8806 12.7748 18.8806 12.7577C18.8806 12.7291 18.869 12.7063 18.8632 12.6834L18.8459 11.5584H21.0126L21.03 12.6834C21.0242 12.712 21.0126 12.7348 21.0126 12.7634C21.0126 12.7805 21.0184 12.7919 21.0242 12.8091V12.8148C21.0126 12.889 21.0184 12.9575 21.0358 13.0204L21.0473 13.6657L18.8748 13.6885ZM31.5102 13.0889C31.4406 13.2259 31.3248 13.3459 31.1857 13.4144C30.6817 13.6657 30.2472 13.5058 30.0097 13.2602C29.8301 13.0889 29.7316 12.8547 29.7316 12.6035C29.7316 12.3579 29.8301 12.1238 30.0097 11.941C30.1893 11.764 30.4268 11.6669 30.6817 11.6669C30.9308 11.6669 31.1742 11.764 31.3479 11.9353C31.6492 12.2437 31.7071 12.672 31.5102 13.0889Z"
																})]
															})
														})
													}), (0, a.jsx)("h5", {
														children: (0, a.jsx)(h(), {
															legacyBehavior: !0,
															href: "/job-listing1",
															children: (0, a.jsx)("a", {
																children: "Designing Jobs"
															})
														})
													}), (0, a.jsxs)("p", {
														children: ["Open Post: ", (0, a.jsx)("span", {
															children: "223"
														})]
													})]
												})]
											})
										})]
									})
								})
							})]
						})
					})
				},
				g = function() {
					return (0, a.jsx)("div", {
						className: "home3-top-company mb-120",
						children: (0, a.jsxs)("div", {
							className: "container",
							children: [(0, a.jsx)("div", {
								className: "row mb-60",
								children: (0, a.jsxs)("div", {
									className: "col-12 d-flex flex-wrap align-items-end justify-content-md-between justify-content-start gap-3",
									children: [(0, a.jsxs)("div", {
										className: "section-title1",
										children: [(0, a.jsxs)("h2", {
											children: ["JOBES Top ", (0, a.jsx)("span", {
												children: "Companies"
											})]
										}), (0, a.jsx)("p", {
											children: "To much valuable feed from our trusted users in world-wide."
										})]
									}), (0, a.jsx)("div", {
										className: "explore-btn",
										children: (0, a.jsx)(h(), {
											legacyBehavior: !0,
											href: "/company-listing1",
											children: (0, a.jsxs)("a", {
												children: ["Explore More", (0, a.jsx)("span", {
													children: (0, a.jsx)("img", {
														src: "/assets/images/icon/explore-elliose.svg",
														alt: ""
													})
												})]
											})
										})
									})]
								})
							}), (0, a.jsxs)("div", {
								className: "row justify-content-center g-4",
								children: [(0, a.jsx)("div", {
									className: "col-lg-4 col-md-6 col-sm-10",
									children: (0, a.jsxs)("div", {
										className: "top-company-card",
										children: [(0, a.jsxs)("div", {
											className: "company-details.html",
											children: [(0, a.jsxs)("div", {
												className: "name-location",
												children: [(0, a.jsx)("h5", {
													children: (0, a.jsx)(h(), {
														legacyBehavior: !0,
														href: "/company-details",
														children: (0, a.jsx)("a", {
															children: "XYZ.UI Company"
														})
													})
												}), (0, a.jsxs)("p", {
													children: [(0, a.jsx)("img", {
														src: "/assets/images/icon/location.svg",
														alt: ""
													}), " Dhaka, Bangladesh"]
												})]
											}), (0, a.jsx)("div", {
												className: "bookmark.html",
												children: (0, a.jsx)("i", {
													className: "bi bi-bookmark.html"
												})
											})]
										}), (0, a.jsxs)("div", {
											className: "job-details.html-vacancies",
											children: [(0, a.jsx)("div", {
												className: "vacancies",
												children: (0, a.jsxs)("p", {
													children: ["Open Post: ", (0, a.jsx)("span", {
														children: "32"
													})]
												})
											}), (0, a.jsx)("div", {
												className: "apply-btn",
												children: (0, a.jsx)(h(), {
													legacyBehavior: !0,
													href: "/company-details",
													children: (0, a.jsxs)("a", {
														children: [(0, a.jsx)("span", {
															children: (0, a.jsx)("img", {
																src: "/assets/images/icon/apply-ellipse.svg",
																alt: ""
															})
														}), "View Details"]
													})
												})
											})]
										})]
									})
								}), (0, a.jsx)("div", {
									className: "col-lg-4 col-md-6 col-sm-10",
									children: (0, a.jsxs)("div", {
										className: "top-company-card",
										children: [(0, a.jsxs)("div", {
											className: "company-details.html",
											children: [(0, a.jsxs)("div", {
												className: "name-location",
												children: [(0, a.jsx)("h5", {
													children: (0, a.jsx)(h(), {
														legacyBehavior: !0,
														href: "/company-details",
														children: (0, a.jsx)("a", {
															children: "Germaine Company"
														})
													})
												}), (0, a.jsxs)("p", {
													children: [(0, a.jsx)("img", {
														src: "/assets/images/icon/location.svg",
														alt: ""
													}), " Dhaka, Bangladesh"]
												})]
											}), (0, a.jsx)("div", {
												className: "bookmark.html",
												children: (0, a.jsx)("i", {
													className: "bi bi-bookmark.html"
												})
											})]
										}), (0, a.jsxs)("div", {
											className: "job-details.html-vacancies",
											children: [(0, a.jsx)("div", {
												className: "vacancies",
												children: (0, a.jsxs)("p", {
													children: ["Open Post: ", (0, a.jsx)("span", {
														children: "22"
													})]
												})
											}), (0, a.jsx)("div", {
												className: "apply-btn",
												children: (0, a.jsx)(h(), {
													legacyBehavior: !0,
													href: "/company-details",
													children: (0, a.jsxs)("a", {
														children: [(0, a.jsx)("span", {
															children: (0, a.jsx)("img", {
																src: "/assets/images/icon/apply-ellipse.svg",
																alt: ""
															})
														}), "View Details"]
													})
												})
											})]
										})]
									})
								}), (0, a.jsx)("div", {
									className: "col-lg-4 col-md-6 col-sm-10",
									children: (0, a.jsxs)("div", {
										className: "top-company-card",
										children: [(0, a.jsxs)("div", {
											className: "company-details.html",
											children: [(0, a.jsxs)("div", {
												className: "name-location",
												children: [(0, a.jsx)("h5", {
													children: (0, a.jsx)(h(), {
														legacyBehavior: !0,
														href: "/company-details",
														children: (0, a.jsx)("a", {
															children: "Bistro-Tech Ltd"
														})
													})
												}), (0, a.jsxs)("p", {
													children: [(0, a.jsx)("img", {
														src: "/assets/images/icon/location.svg",
														alt: ""
													}), "Chicago, Australia"]
												})]
											}), (0, a.jsx)("div", {
												className: "bookmark.html",
												children: (0, a.jsx)("i", {
													className: "bi bi-bookmark.html"
												})
											})]
										}), (0, a.jsxs)("div", {
											className: "job-details.html-vacancies",
											children: [(0, a.jsx)("div", {
												className: "vacancies",
												children: (0, a.jsxs)("p", {
													children: ["Open Post: ", (0, a.jsx)("span", {
														children: "44"
													})]
												})
											}), (0, a.jsx)("div", {
												className: "apply-btn",
												children: (0, a.jsx)(h(), {
													legacyBehavior: !0,
													href: "/company-details",
													children: (0, a.jsxs)("a", {
														children: [(0, a.jsx)("span", {
															children: (0, a.jsx)("img", {
																src: "/assets/images/icon/apply-ellipse.svg",
																alt: ""
															})
														}), "View Details"]
													})
												})
											})]
										})]
									})
								}), (0, a.jsx)("div", {
									className: "col-lg-4 col-md-6 col-sm-10",
									children: (0, a.jsxs)("div", {
										className: "top-company-card",
										children: [(0, a.jsxs)("div", {
											className: "company-details.html",
											children: [(0, a.jsxs)("div", {
												className: "name-location",
												children: [(0, a.jsx)("h5", {
													children: (0, a.jsx)(h(), {
														legacyBehavior: !0,
														href: "/company-details",
														children: (0, a.jsx)("a", {
															children: "Tech-Man Hub"
														})
													})
												}), (0, a.jsxs)("p", {
													children: [(0, a.jsx)("img", {
														src: "/assets/images/icon/location.svg",
														alt: ""
													}), " ", "Sylhet, Bangladesh"]
												})]
											}), (0, a.jsx)("div", {
												className: "bookmark.html",
												children: (0, a.jsx)("i", {
													className: "bi bi-bookmark.html"
												})
											})]
										}), (0, a.jsxs)("div", {
											className: "job-details.html-vacancies",
											children: [(0, a.jsx)("div", {
												className: "vacancies",
												children: (0, a.jsxs)("p", {
													children: ["Open Post: ", (0, a.jsx)("span", {
														children: "22"
													})]
												})
											}), (0, a.jsx)("div", {
												className: "apply-btn",
												children: (0, a.jsx)(h(), {
													legacyBehavior: !0,
													href: "/company-details",
													children: (0, a.jsxs)("a", {
														children: [(0, a.jsx)("span", {
															children: (0, a.jsx)("img", {
																src: "/assets/images/icon/apply-ellipse.svg",
																alt: ""
															})
														}), "View Details"]
													})
												})
											})]
										})]
									})
								}), (0, a.jsx)("div", {
									className: "col-lg-4 col-md-6 col-sm-10",
									children: (0, a.jsxs)("div", {
										className: "top-company-card",
										children: [(0, a.jsxs)("div", {
											className: "company-details.html",
											children: [(0, a.jsxs)("div", {
												className: "name-location",
												children: [(0, a.jsx)("h5", {
													children: (0, a.jsx)(h(), {
														legacyBehavior: !0,
														href: "/company-details",
														children: (0, a.jsx)("a", {
															children: "Gangster.Hide"
														})
													})
												}), (0, a.jsxs)("p", {
													children: [(0, a.jsx)("img", {
														src: "/assets/images/icon/location.svg",
														alt: ""
													}), " West London, UK"]
												})]
											}), (0, a.jsx)("div", {
												className: "bookmark.html",
												children: (0, a.jsx)("i", {
													className: "bi bi-bookmark.html"
												})
											})]
										}), (0, a.jsxs)("div", {
											className: "job-details.html-vacancies",
											children: [(0, a.jsx)("div", {
												className: "vacancies",
												children: (0, a.jsxs)("p", {
													children: ["Open Post: ", (0, a.jsx)("span", {
														children: "77"
													})]
												})
											}), (0, a.jsx)("div", {
												className: "apply-btn",
												children: (0, a.jsx)(h(), {
													legacyBehavior: !0,
													href: "/company-details",
													children: (0, a.jsxs)("a", {
														children: [(0, a.jsx)("span", {
															children: (0, a.jsx)("img", {
																src: "/assets/images/icon/apply-ellipse.svg",
																alt: ""
															})
														}), "View Details"]
													})
												})
											})]
										})]
									})
								}), (0, a.jsx)("div", {
									className: "col-lg-4 col-md-6 col-sm-10",
									children: (0, a.jsxs)("div", {
										className: "top-company-card",
										children: [(0, a.jsxs)("div", {
											className: "company-details.html",
											children: [(0, a.jsxs)("div", {
												className: "name-location",
												children: [(0, a.jsx)("h5", {
													children: (0, a.jsx)(h(), {
														legacyBehavior: !0,
														href: "/company-details",
														children: (0, a.jsx)("a", {
															children: "Evalley.XYZ"
														})
													})
												}), (0, a.jsxs)("p", {
													children: [(0, a.jsx)("img", {
														src: "/assets/images/icon/location.svg",
														alt: ""
													}), " ", "Sylhet, Bangladesh"]
												})]
											}), (0, a.jsx)("div", {
												className: "bookmark.html",
												children: (0, a.jsx)("i", {
													className: "bi bi-bookmark.html"
												})
											})]
										}), (0, a.jsxs)("div", {
											className: "job-details.html-vacancies",
											children: [(0, a.jsx)("div", {
												className: "vacancies",
												children: (0, a.jsxs)("p", {
													children: ["Open Post: ", (0, a.jsx)("span", {
														children: "88"
													})]
												})
											}), (0, a.jsx)("div", {
												className: "apply-btn",
												children: (0, a.jsx)(h(), {
													legacyBehavior: !0,
													href: "/company-details",
													children: (0, a.jsxs)("a", {
														children: [(0, a.jsx)("span", {
															children: (0, a.jsx)("img", {
																src: "/assets/images/icon/apply-ellipse.svg",
																alt: ""
															})
														}), "View Details"]
													})
												})
											})]
										})]
									})
								})]
							})]
						})
					})
				},
				C = function() {
					return (0, a.jsx)("div", {
						className: "home3-featured-job-area mb-120",
						children: (0, a.jsxs)("div", {
							className: "container",
							children: [(0, a.jsx)("div", {
								className: "row mb-60",
								children: (0, a.jsx)("div", {
									className: "col-12 d-flex justify-content-center",
									children: (0, a.jsxs)("div", {
										className: "section-title1 text-center",
										children: [(0, a.jsxs)("h2", {
											children: ["Latest ", (0, a.jsx)("span", {
												children: "Featured"
											}), " Jobs"]
										}), (0, a.jsx)("p", {
											children: "To choose your trending job dream & to make future bright."
										})]
									})
								})
							}), (0, a.jsxs)("div", {
								className: "row",
								children: [(0, a.jsx)("div", {
									className: "col-lg-12 d-flex justify-content-center",
									children: (0, a.jsx)("div", {
										className: "tab-btn-area",
										children: (0, a.jsxs)("ul", {
											className: "nav nav-pills",
											id: "pills-tab",
											role: "tablist",
											children: [(0, a.jsx)("li", {
												className: "nav-item",
												role: "presentation",
												children: (0, a.jsx)("button", {
													className: "nav-link active",
													id: "pills-home-tab",
													"data-bs-toggle": "pill",
													"data-bs-target": "#pills-home",
													type: "button",
													role: "tab",
													"aria-controls": "pills-home",
													"aria-selected": "true",
													children: "Marketing & Sales"
												})
											}), (0, a.jsx)("li", {
												className: "nav-item",
												role: "presentation",
												children: (0, a.jsx)("button", {
													className: "nav-link",
													id: "pills-profile-tab",
													"data-bs-toggle": "pill",
													"data-bs-target": "#pills-profile",
													type: "button",
													role: "tab",
													"aria-controls": "pills-profile",
													"aria-selected": "false",
													children: "Development"
												})
											}), (0, a.jsx)("li", {
												className: "nav-item",
												role: "presentation",
												children: (0, a.jsx)("button", {
													className: "nav-link",
													id: "pills-contact.html-tab",
													"data-bs-toggle": "pill",
													"data-bs-target": "#pills-contact.html",
													type: "button",
													role: "tab",
													"aria-controls": "pills-contact.html",
													"aria-selected": "false",
													children: "Technology"
												})
											}), (0, a.jsx)("li", {
												className: "nav-item",
												role: "presentation",
												children: (0, a.jsx)("button", {
													className: "nav-link",
													id: "pills-technology-tab",
													"data-bs-toggle": "pill",
													"data-bs-target": "#pills-technology",
													type: "button",
													role: "tab",
													"aria-controls": "pills-technology",
													"aria-selected": "false",
													children: "Medical & Nurse"
												})
											})]
										})
									})
								}), (0, a.jsx)("div", {
									className: "col-lg-12",
									children: (0, a.jsxs)("div", {
										className: "tab-content",
										id: "pills-tabContent",
										children: [(0, a.jsx)("div", {
											className: "tab-pane fade show active",
											id: "pills-home",
											role: "tabpanel",
											"aria-labelledby": "pills-home-tab",
											children: (0, a.jsxs)("div", {
												className: "row g-4",
												children: [(0, a.jsx)("div", {
													className: "col-lg-4 col-md-6",
													children: (0, a.jsxs)("div", {
														className: "job-listing-card2",
														children: [(0, a.jsxs)("div", {
															className: "job-thumb",
															children: [(0, a.jsx)("img", {
																className: "img-fluid",
																src: "assets/images/bg/job-list-1.png",
																alt: ""
															}), (0, a.jsx)("div", {
																className: "bookmark.html",
																children: (0, a.jsx)("i", {
																	className: "bi bi-bookmark.html"
																})
															})]
														}), (0, a.jsxs)("div", {
															className: "job-content",
															children: [(0, a.jsxs)("div", {
																className: "company-area",
																children: [(0, a.jsx)("div", {
																	className: "logo",
																	children: (0, a.jsx)("img", {
																		src: "assets/images/bg/company-logo/company-01.png",
																		alt: ""
																	})
																}), (0, a.jsx)("div", {
																	className: "company-details.html",
																	children: (0, a.jsxs)("div", {
																		className: "name-location",
																		children: [(0, a.jsx)("h5", {
																			children: (0, a.jsx)(h(), {
																				legacyBehavior: !0,
																				href: "/job-details",
																				children: (0, a.jsx)("a", {
																					children: "WordPress Developer"
																				})
																			})
																		}), (0, a.jsxs)("ul", {
																			children: [(0, a.jsx)("li", {
																				children: (0, a.jsx)("p", {
																					children: (0, a.jsx)(h(), {
																						legacyBehavior: !0,
																						href: "/company-details",
																						children: (0, a.jsx)("a", {
																							children: "Bistro Tech Ltd"
																						})
																					})
																				})
																			}), (0, a.jsx)("li", {
																				children: (0, a.jsxs)("p", {
																					children: [(0, a.jsx)("span", {
																						className: "title",
																						children: "Deadline:"
																					}), " 2 April, 2023"]
																				})
																			})]
																		})]
																	})
																})]
															}), (0, a.jsx)("div", {
																className: "job-discription",
																children: (0, a.jsxs)("ul", {
																	children: [(0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Salary:"
																			}), " $60-$90 /", (0, a.jsx)("span", {
																				className: "time",
																				children: "Per Hour"
																			})]
																		})
																	}), (0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Experience:"
																			}), " 3-3.5 Years"]
																		})
																	}), (0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Location:"
																			}), " Dhaka, Bangladesh"]
																		})
																	})]
																})
															}), (0, a.jsxs)("div", {
																className: "job-type-apply",
																children: [(0, a.jsx)("div", {
																	className: "job-type",
																	children: (0, a.jsx)("span", {
																		className: "light-green",
																		children: "Full Time"
																	})
																}), (0, a.jsx)("div", {
																	className: "apply-btn",
																	children: (0, a.jsx)(h(), {
																		legacyBehavior: !0,
																		href: "/job-details",
																		children: (0, a.jsxs)("a", {
																			children: [(0, a.jsx)("span", {
																				children: (0, a.jsx)("img", {
																					src: "assets/images/icon/apply-ellipse.svg",
																					alt: ""
																				})
																			}), "Apply Now"]
																		})
																	})
																})]
															})]
														})]
													})
												}), (0, a.jsx)("div", {
													className: "col-lg-4 col-md-6",
													children: (0, a.jsxs)("div", {
														className: "job-listing-card2",
														children: [(0, a.jsxs)("div", {
															className: "job-thumb",
															children: [(0, a.jsx)("img", {
																className: "img-fluid",
																src: "assets/images/bg/job-list-2.png",
																alt: ""
															}), (0, a.jsx)("div", {
																className: "bookmark.html",
																children: (0, a.jsx)("i", {
																	className: "bi bi-bookmark.html"
																})
															})]
														}), (0, a.jsxs)("div", {
															className: "job-content",
															children: [(0, a.jsxs)("div", {
																className: "company-area",
																children: [(0, a.jsx)("div", {
																	className: "logo",
																	children: (0, a.jsx)("img", {
																		src: "assets/images/bg/company-logo/company-02.png",
																		alt: ""
																	})
																}), (0, a.jsx)("div", {
																	className: "company-details.html",
																	children: (0, a.jsxs)("div", {
																		className: "name-location",
																		children: [(0, a.jsx)("h5", {
																			children: (0, a.jsx)(h(), {
																				legacyBehavior: !0,
																				href: "/job-details",
																				children: "Assistant Manager"
																			})
																		}), (0, a.jsxs)("ul", {
																			children: [(0, a.jsx)("li", {
																				children: (0, a.jsx)("p", {
																					children: (0, a.jsx)(h(), {
																						legacyBehavior: !0,
																						href: "/company-details",
																						children: (0, a.jsx)("a", {
																							children: "Hangman Gold"
																						})
																					})
																				})
																			}), (0, a.jsx)("li", {
																				children: (0, a.jsxs)("p", {
																					children: [(0, a.jsx)("span", {
																						className: "title",
																						children: "Deadline:"
																					}), " 3 April, 2023"]
																				})
																			})]
																		})]
																	})
																})]
															}), (0, a.jsx)("div", {
																className: "job-discription",
																children: (0, a.jsxs)("ul", {
																	children: [(0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Salary:"
																			}), " $20k-$50k /", (0, a.jsx)("span", {
																				className: "time",
																				children: "Per Hour"
																			})]
																		})
																	}), (0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Experience:"
																			}), " 2-2.5 Years"]
																		})
																	}), (0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Location:"
																			}), " Sylhet, Bangladesh"]
																		})
																	})]
																})
															}), (0, a.jsxs)("div", {
																className: "job-type-apply",
																children: [(0, a.jsx)("div", {
																	className: "job-type",
																	children: (0, a.jsx)("span", {
																		className: "light-green",
																		children: "Full Time"
																	})
																}), (0, a.jsx)("div", {
																	className: "apply-btn",
																	children: (0, a.jsx)(h(), {
																		legacyBehavior: !0,
																		href: "/job-details",
																		children: (0, a.jsxs)("a", {
																			children: [(0, a.jsx)("span", {
																				children: (0, a.jsx)("img", {
																					src: "assets/images/icon/apply-ellipse.svg",
																					alt: ""
																				})
																			}), "Apply Now"]
																		})
																	})
																})]
															})]
														})]
													})
												}), (0, a.jsx)("div", {
													className: "col-lg-4 col-md-6",
													children: (0, a.jsxs)("div", {
														className: "job-listing-card2",
														children: [(0, a.jsxs)("div", {
															className: "job-thumb",
															children: [(0, a.jsx)("img", {
																className: "img-fluid",
																src: "assets/images/bg/job-list-3.png",
																alt: ""
															}), (0, a.jsx)("div", {
																className: "bookmark.html",
																children: (0, a.jsx)("i", {
																	className: "bi bi-bookmark.html"
																})
															})]
														}), (0, a.jsxs)("div", {
															className: "job-content",
															children: [(0, a.jsxs)("div", {
																className: "company-area",
																children: [(0, a.jsx)("div", {
																	className: "logo",
																	children: (0, a.jsx)("img", {
																		src: "assets/images/bg/company-logo/company-03.png",
																		alt: ""
																	})
																}), (0, a.jsx)("div", {
																	className: "company-details.html",
																	children: (0, a.jsxs)("div", {
																		className: "name-location",
																		children: [(0, a.jsx)("h5", {
																			children: (0, a.jsx)(h(), {
																				legacyBehavior: !0,
																				href: "/job-details",
																				children: "UI/UX Designer"
																			})
																		}), (0, a.jsxs)("ul", {
																			children: [(0, a.jsx)("li", {
																				children: (0, a.jsx)("p", {
																					children: (0, a.jsx)(h(), {
																						legacyBehavior: !0,
																						href: "/company-details",
																						children: (0, a.jsx)("a", {
																							children: "Tech-Bath IT Ltd"
																						})
																					})
																				})
																			}), (0, a.jsx)("li", {
																				children: (0, a.jsxs)("p", {
																					children: [(0, a.jsx)("span", {
																						className: "title",
																						children: "Deadline:"
																					}), " 5 April, 2023"]
																				})
																			})]
																		})]
																	})
																})]
															}), (0, a.jsx)("div", {
																className: "job-discription",
																children: (0, a.jsxs)("ul", {
																	children: [(0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Salary:"
																			}), " $50K-$90K /", (0, a.jsx)("span", {
																				className: "time",
																				children: "Per Month"
																			})]
																		})
																	}), (0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Experience:"
																			}), " 2-3 Years"]
																		})
																	}), (0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Location:"
																			}), " ", "Chicago, Australia"]
																		})
																	})]
																})
															}), (0, a.jsxs)("div", {
																className: "job-type-apply",
																children: [(0, a.jsx)("div", {
																	className: "job-type",
																	children: (0, a.jsx)("span", {
																		className: "light-blue",
																		children: "Part Time"
																	})
																}), (0, a.jsx)("div", {
																	className: "apply-btn",
																	children: (0, a.jsx)(h(), {
																		legacyBehavior: !0,
																		href: "/job-details",
																		children: (0, a.jsxs)("a", {
																			children: [(0, a.jsx)("span", {
																				children: (0, a.jsx)("img", {
																					src: "assets/images/icon/apply-ellipse.svg",
																					alt: ""
																				})
																			}), "Apply Now"]
																		})
																	})
																})]
															})]
														})]
													})
												}), (0, a.jsx)("div", {
													className: "col-lg-4 col-md-6",
													children: (0, a.jsxs)("div", {
														className: "job-listing-card2",
														children: [(0, a.jsxs)("div", {
															className: "job-thumb",
															children: [(0, a.jsx)("img", {
																className: "img-fluid",
																src: "assets/images/bg/job-list-4.png",
																alt: ""
															}), (0, a.jsx)("div", {
																className: "urgent-batch",
																children: (0, a.jsx)("span", {
																	children: "Urgent"
																})
															}), (0, a.jsx)("div", {
																className: "bookmark.html",
																children: (0, a.jsx)("i", {
																	className: "bi bi-bookmark.html"
																})
															})]
														}), (0, a.jsxs)("div", {
															className: "job-content",
															children: [(0, a.jsxs)("div", {
																className: "company-area",
																children: [(0, a.jsx)("div", {
																	className: "logo",
																	children: (0, a.jsx)("img", {
																		src: "assets/images/bg/company-logo/company-04.png",
																		alt: ""
																	})
																}), (0, a.jsx)("div", {
																	className: "company-details.html",
																	children: (0, a.jsxs)("div", {
																		className: "name-location",
																		children: [(0, a.jsx)("h5", {
																			children: (0, a.jsx)(h(), {
																				legacyBehavior: !0,
																				href: "/job-details",
																				children: (0, a.jsx)("a", {
																					children: "Junior Receptionist"
																				})
																			})
																		}), (0, a.jsxs)("ul", {
																			children: [(0, a.jsx)("li", {
																				children: (0, a.jsx)("p", {
																					children: (0, a.jsx)(h(), {
																						legacyBehavior: !0,
																						href: "/company-details",
																						children: (0, a.jsx)("a", {
																							children: "Gangster.Hide"
																						})
																					})
																				})
																			}), (0, a.jsx)("li", {
																				children: (0, a.jsxs)("p", {
																					children: [(0, a.jsx)("span", {
																						className: "title",
																						children: "Deadline:"
																					}), " 6 April, 2023"]
																				})
																			})]
																		})]
																	})
																})]
															}), (0, a.jsx)("div", {
																className: "job-discription",
																children: (0, a.jsxs)("ul", {
																	children: [(0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Salary:"
																			}), " $60-$80 /", (0, a.jsx)("span", {
																				className: "time",
																				children: "Per Hour"
																			})]
																		})
																	}), (0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Experience:"
																			}), " 1-1.5 Years"]
																		})
																	}), (0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Location:"
																			}), " Dhaka, Bangladesh"]
																		})
																	})]
																})
															}), (0, a.jsxs)("div", {
																className: "job-type-apply",
																children: [(0, a.jsx)("div", {
																	className: "job-type",
																	children: (0, a.jsx)("span", {
																		className: "light-blue",
																		children: "Part Time"
																	})
																}), (0, a.jsx)("div", {
																	className: "apply-btn",
																	children: (0, a.jsx)(h(), {
																		legacyBehavior: !0,
																		href: "/job-details",
																		children: (0, a.jsxs)("a", {
																			children: [(0, a.jsx)("span", {
																				children: (0, a.jsx)("img", {
																					src: "assets/images/icon/apply-ellipse.svg",
																					alt: ""
																				})
																			}), "Apply Now"]
																		})
																	})
																})]
															})]
														})]
													})
												}), (0, a.jsx)("div", {
													className: "col-lg-4 col-md-6",
													children: (0, a.jsxs)("div", {
														className: "job-listing-card2",
														children: [(0, a.jsxs)("div", {
															className: "job-thumb",
															children: [(0, a.jsx)("img", {
																className: "img-fluid",
																src: "assets/images/bg/job-list-5.png",
																alt: ""
															}), (0, a.jsx)("div", {
																className: "bookmark.html",
																children: (0, a.jsx)("i", {
																	className: "bi bi-bookmark.html"
																})
															})]
														}), (0, a.jsxs)("div", {
															className: "job-content",
															children: [(0, a.jsxs)("div", {
																className: "company-area",
																children: [(0, a.jsx)("div", {
																	className: "logo",
																	children: (0, a.jsx)("img", {
																		src: "assets/images/bg/company-logo/company-05.png",
																		alt: ""
																	})
																}), (0, a.jsx)("div", {
																	className: "company-details.html",
																	children: (0, a.jsxs)("div", {
																		className: "name-location",
																		children: [(0, a.jsx)("h5", {
																			children: (0, a.jsx)(h(), {
																				legacyBehavior: !0,
																				href: "/job-details",
																				children: (0, a.jsx)("a", {
																					children: "Senior Laboratoriest"
																				})
																			})
																		}), (0, a.jsxs)("ul", {
																			children: [(0, a.jsx)("li", {
																				children: (0, a.jsx)("p", {
																					children: (0, a.jsx)(h(), {
																						legacyBehavior: !0,
																						href: "/company-details",
																						children: (0, a.jsx)("a", {
																							children: "Laballo.Lab Ltd"
																						})
																					})
																				})
																			}), (0, a.jsx)("li", {
																				children: (0, a.jsxs)("p", {
																					children: [(0, a.jsx)("span", {
																						className: "title",
																						children: "Deadline:"
																					}), " 9 April, 2023"]
																				})
																			})]
																		})]
																	})
																})]
															}), (0, a.jsx)("div", {
																className: "job-discription",
																children: (0, a.jsxs)("ul", {
																	children: [(0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Salary:"
																			}), " $40K-$60K /", (0, a.jsx)("span", {
																				className: "time",
																				children: "Per Month"
																			})]
																		})
																	}), (0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Experience:"
																			}), " 3-4 Years"]
																		})
																	}), (0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Location:"
																			}), " ", "New-York, USA"]
																		})
																	})]
																})
															}), (0, a.jsxs)("div", {
																className: "job-type-apply",
																children: [(0, a.jsx)("div", {
																	className: "job-type",
																	children: (0, a.jsx)("span", {
																		className: "light-green",
																		children: "Full Time"
																	})
																}), (0, a.jsx)("div", {
																	className: "apply-btn",
																	children: (0, a.jsx)(h(), {
																		legacyBehavior: !0,
																		href: "/job-details",
																		children: (0, a.jsxs)("a", {
																			children: [(0, a.jsx)("span", {
																				children: (0, a.jsx)("img", {
																					src: "assets/images/icon/apply-ellipse.svg",
																					alt: ""
																				})
																			}), "Apply Now"]
																		})
																	})
																})]
															})]
														})]
													})
												}), (0, a.jsx)("div", {
													className: "col-lg-4 col-md-6",
													children: (0, a.jsxs)("div", {
														className: "job-listing-card2",
														children: [(0, a.jsxs)("div", {
															className: "job-thumb",
															children: [(0, a.jsx)("img", {
																className: "img-fluid",
																src: "assets/images/bg/job-list-6.png",
																alt: ""
															}), (0, a.jsx)("div", {
																className: "urgent-batch",
																children: (0, a.jsx)("span", {
																	children: "Urgent"
																})
															}), (0, a.jsx)("div", {
																className: "bookmark.html",
																children: (0, a.jsx)("i", {
																	className: "bi bi-bookmark.html"
																})
															})]
														}), (0, a.jsxs)("div", {
															className: "job-content",
															children: [(0, a.jsxs)("div", {
																className: "company-area",
																children: [(0, a.jsx)("div", {
																	className: "logo",
																	children: (0, a.jsx)("img", {
																		src: "assets/images/bg/company-logo/company-06.png",
																		alt: ""
																	})
																}), (0, a.jsx)("div", {
																	className: "company-details.html",
																	children: (0, a.jsxs)("div", {
																		className: "name-location",
																		children: [(0, a.jsx)("h5", {
																			children: (0, a.jsx)(h(), {
																				legacyBehavior: !0,
																				href: "/job-details",
																				children: (0, a.jsx)("a", {
																					children: "Medical Nurse"
																				})
																			})
																		}), (0, a.jsxs)("ul", {
																			children: [(0, a.jsx)("li", {
																				children: (0, a.jsx)("p", {
																					children: (0, a.jsx)(h(), {
																						legacyBehavior: !0,
																						href: "/company-details",
																						children: (0, a.jsx)("a", {
																							children: "Marko Company"
																						})
																					})
																				})
																			}), (0, a.jsx)("li", {
																				children: (0, a.jsxs)("p", {
																					children: [(0, a.jsx)("span", {
																						className: "title",
																						children: "Deadline:"
																					}), " 9 April, 2023"]
																				})
																			})]
																		})]
																	})
																})]
															}), (0, a.jsx)("div", {
																className: "job-discription",
																children: (0, a.jsxs)("ul", {
																	children: [(0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Salary:"
																			}), " $60-$90 /", (0, a.jsx)("span", {
																				className: "time",
																				children: "Per Hour"
																			})]
																		})
																	}), (0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Experience:"
																			}), " 3-3.5 Years"]
																		})
																	}), (0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Location:"
																			}), " Dhaka, Bangladesh"]
																		})
																	})]
																})
															}), (0, a.jsxs)("div", {
																className: "job-type-apply",
																children: [(0, a.jsx)("div", {
																	className: "job-type",
																	children: (0, a.jsx)("span", {
																		className: "light-green",
																		children: "Part Time"
																	})
																}), (0, a.jsx)("div", {
																	className: "apply-btn",
																	children: (0, a.jsx)(h(), {
																		legacyBehavior: !0,
																		href: "/job-details",
																		children: (0, a.jsxs)("a", {
																			children: [(0, a.jsx)("span", {
																				children: (0, a.jsx)("img", {
																					src: "assets/images/icon/apply-ellipse.svg",
																					alt: ""
																				})
																			}), "Apply Now"]
																		})
																	})
																})]
															})]
														})]
													})
												})]
											})
										}), (0, a.jsx)("div", {
											className: "tab-pane fade",
											id: "pills-profile",
											role: "tabpanel",
											"aria-labelledby": "pills-profile-tab",
											children: (0, a.jsxs)("div", {
												className: "row g-4",
												children: [(0, a.jsx)("div", {
													className: "col-lg-4 col-md-6",
													children: (0, a.jsxs)("div", {
														className: "job-listing-card2",
														children: [(0, a.jsxs)("div", {
															className: "job-thumb",
															children: [(0, a.jsx)("img", {
																className: "img-fluid",
																src: "assets/images/bg/job-list-1.png",
																alt: ""
															}), (0, a.jsx)("div", {
																className: "bookmark.html",
																children: (0, a.jsx)("i", {
																	className: "bi bi-bookmark.html"
																})
															})]
														}), (0, a.jsxs)("div", {
															className: "job-content",
															children: [(0, a.jsxs)("div", {
																className: "company-area",
																children: [(0, a.jsx)("div", {
																	className: "logo",
																	children: (0, a.jsx)("img", {
																		src: "assets/images/bg/company-logo/company-01.png",
																		alt: ""
																	})
																}), (0, a.jsx)("div", {
																	className: "company-details.html",
																	children: (0, a.jsxs)("div", {
																		className: "name-location",
																		children: [(0, a.jsx)("h5", {
																			children: (0, a.jsx)(h(), {
																				legacyBehavior: !0,
																				href: "/job-details",
																				children: (0, a.jsx)("a", {
																					children: "WordPress Developer"
																				})
																			})
																		}), (0, a.jsxs)("ul", {
																			children: [(0, a.jsx)("li", {
																				children: (0, a.jsx)("p", {
																					children: (0, a.jsx)(h(), {
																						legacyBehavior: !0,
																						href: "/company-details",
																						children: (0, a.jsx)("a", {
																							children: "Bistro Tech Ltd"
																						})
																					})
																				})
																			}), (0, a.jsx)("li", {
																				children: (0, a.jsxs)("p", {
																					children: [(0, a.jsx)("span", {
																						className: "title",
																						children: "Deadline:"
																					}), " 2 April, 2023"]
																				})
																			})]
																		})]
																	})
																})]
															}), (0, a.jsx)("div", {
																className: "job-discription",
																children: (0, a.jsxs)("ul", {
																	children: [(0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Salary:"
																			}), " $60-$90 /", (0, a.jsx)("span", {
																				className: "time",
																				children: "Per Hour"
																			})]
																		})
																	}), (0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Experience:"
																			}), " 3-3.5 Years"]
																		})
																	}), (0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Location:"
																			}), " Dhaka, Bangladesh"]
																		})
																	})]
																})
															}), (0, a.jsxs)("div", {
																className: "job-type-apply",
																children: [(0, a.jsx)("div", {
																	className: "job-type",
																	children: (0, a.jsx)("span", {
																		className: "light-green",
																		children: "Full Time"
																	})
																}), (0, a.jsx)("div", {
																	className: "apply-btn",
																	children: (0, a.jsx)(h(), {
																		legacyBehavior: !0,
																		href: "/job-details",
																		children: (0, a.jsxs)("a", {
																			children: [(0, a.jsx)("span", {
																				children: (0, a.jsx)("img", {
																					src: "assets/images/icon/apply-ellipse.svg",
																					alt: ""
																				})
																			}), "Apply Now"]
																		})
																	})
																})]
															})]
														})]
													})
												}), (0, a.jsx)("div", {
													className: "col-lg-4 col-md-6",
													children: (0, a.jsxs)("div", {
														className: "job-listing-card2",
														children: [(0, a.jsxs)("div", {
															className: "job-thumb",
															children: [(0, a.jsx)("img", {
																className: "img-fluid",
																src: "assets/images/bg/job-list-2.png",
																alt: ""
															}), (0, a.jsx)("div", {
																className: "bookmark.html",
																children: (0, a.jsx)("i", {
																	className: "bi bi-bookmark.html"
																})
															})]
														}), (0, a.jsxs)("div", {
															className: "job-content",
															children: [(0, a.jsxs)("div", {
																className: "company-area",
																children: [(0, a.jsx)("div", {
																	className: "logo",
																	children: (0, a.jsx)("img", {
																		src: "assets/images/bg/company-logo/company-02.png",
																		alt: ""
																	})
																}), (0, a.jsx)("div", {
																	className: "company-details.html",
																	children: (0, a.jsxs)("div", {
																		className: "name-location",
																		children: [(0, a.jsx)("h5", {
																			children: (0, a.jsx)(h(), {
																				legacyBehavior: !0,
																				href: "/job-details",
																				children: (0, a.jsx)("a", {
																					children: "Assistant Manager"
																				})
																			})
																		}), (0, a.jsxs)("ul", {
																			children: [(0, a.jsx)("li", {
																				children: (0, a.jsx)("p", {
																					children: (0, a.jsx)(h(), {
																						legacyBehavior: !0,
																						href: "/company-details",
																						children: (0, a.jsx)("a", {
																							children: "Hangman Gold"
																						})
																					})
																				})
																			}), (0, a.jsx)("li", {
																				children: (0, a.jsxs)("p", {
																					children: [(0, a.jsx)("span", {
																						className: "title",
																						children: "Deadline:"
																					}), " 3 April, 2023"]
																				})
																			})]
																		})]
																	})
																})]
															}), (0, a.jsx)("div", {
																className: "job-discription",
																children: (0, a.jsxs)("ul", {
																	children: [(0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Salary:"
																			}), " $20k-$50k /", (0, a.jsx)("span", {
																				className: "time",
																				children: "Per Hour"
																			})]
																		})
																	}), (0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Experience:"
																			}), " 2-2.5 Years"]
																		})
																	}), (0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Location:"
																			}), " Sylhet, Bangladesh"]
																		})
																	})]
																})
															}), (0, a.jsxs)("div", {
																className: "job-type-apply",
																children: [(0, a.jsx)("div", {
																	className: "job-type",
																	children: (0, a.jsx)("span", {
																		className: "light-green",
																		children: "Full Time"
																	})
																}), (0, a.jsx)("div", {
																	className: "apply-btn",
																	children: (0, a.jsx)(h(), {
																		legacyBehavior: !0,
																		href: "/job-details",
																		children: (0, a.jsxs)("a", {
																			children: [(0, a.jsx)("span", {
																				children: (0, a.jsx)("img", {
																					src: "assets/images/icon/apply-ellipse.svg",
																					alt: ""
																				})
																			}), "Apply Now"]
																		})
																	})
																})]
															})]
														})]
													})
												}), (0, a.jsx)("div", {
													className: "col-lg-4 col-md-6",
													children: (0, a.jsxs)("div", {
														className: "job-listing-card2",
														children: [(0, a.jsxs)("div", {
															className: "job-thumb",
															children: [(0, a.jsx)("img", {
																className: "img-fluid",
																src: "assets/images/bg/job-list-3.png",
																alt: ""
															}), (0, a.jsx)("div", {
																className: "bookmark.html",
																children: (0, a.jsx)("i", {
																	className: "bi bi-bookmark.html"
																})
															})]
														}), (0, a.jsxs)("div", {
															className: "job-content",
															children: [(0, a.jsxs)("div", {
																className: "company-area",
																children: [(0, a.jsx)("div", {
																	className: "logo",
																	children: (0, a.jsx)("img", {
																		src: "assets/images/bg/company-logo/company-03.png",
																		alt: ""
																	})
																}), (0, a.jsx)("div", {
																	className: "company-details.html",
																	children: (0, a.jsxs)("div", {
																		className: "name-location",
																		children: [(0, a.jsx)("h5", {
																			children: (0, a.jsx)(h(), {
																				legacyBehavior: !0,
																				href: "/job-details",
																				children: (0, a.jsx)("a", {
																					children: "UI/UX Designer"
																				})
																			})
																		}), (0, a.jsxs)("ul", {
																			children: [(0, a.jsx)("li", {
																				children: (0, a.jsx)("p", {
																					children: (0, a.jsx)(h(), {
																						legacyBehavior: !0,
																						href: "/company-details",
																						children: (0, a.jsx)("a", {
																							children: "Tech-Bath IT Ltd"
																						})
																					})
																				})
																			}), (0, a.jsx)("li", {
																				children: (0, a.jsxs)("p", {
																					children: [(0, a.jsx)("span", {
																						className: "title",
																						children: "Deadline:"
																					}), " 5 April, 2023"]
																				})
																			})]
																		})]
																	})
																})]
															}), (0, a.jsx)("div", {
																className: "job-discription",
																children: (0, a.jsxs)("ul", {
																	children: [(0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Salary:"
																			}), " $50K-$90K /", (0, a.jsx)("span", {
																				className: "time",
																				children: "Per Month"
																			})]
																		})
																	}), (0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Experience:"
																			}), " 2-3 Years"]
																		})
																	}), (0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Location:"
																			}), " ", "Chicago, Australia"]
																		})
																	})]
																})
															}), (0, a.jsxs)("div", {
																className: "job-type-apply",
																children: [(0, a.jsx)("div", {
																	className: "job-type",
																	children: (0, a.jsx)("span", {
																		className: "light-blue",
																		children: "Part Time"
																	})
																}), (0, a.jsx)("div", {
																	className: "apply-btn",
																	children: (0, a.jsx)(h(), {
																		legacyBehavior: !0,
																		href: "/job-details",
																		children: (0, a.jsxs)("a", {
																			children: [(0, a.jsx)("span", {
																				children: (0, a.jsx)("img", {
																					src: "assets/images/icon/apply-ellipse.svg",
																					alt: ""
																				})
																			}), "Apply Now"]
																		})
																	})
																})]
															})]
														})]
													})
												}), (0, a.jsx)("div", {
													className: "col-lg-4 col-md-6",
													children: (0, a.jsxs)("div", {
														className: "job-listing-card2",
														children: [(0, a.jsxs)("div", {
															className: "job-thumb",
															children: [(0, a.jsx)("img", {
																className: "img-fluid",
																src: "assets/images/bg/job-list-4.png",
																alt: ""
															}), (0, a.jsx)("div", {
																className: "urgent-batch",
																children: (0, a.jsx)("span", {
																	children: "Urgent"
																})
															}), (0, a.jsx)("div", {
																className: "bookmark.html",
																children: (0, a.jsx)("i", {
																	className: "bi bi-bookmark.html"
																})
															})]
														}), (0, a.jsxs)("div", {
															className: "job-content",
															children: [(0, a.jsxs)("div", {
																className: "company-area",
																children: [(0, a.jsx)("div", {
																	className: "logo",
																	children: (0, a.jsx)("img", {
																		src: "assets/images/bg/company-logo/company-04.png",
																		alt: ""
																	})
																}), (0, a.jsx)("div", {
																	className: "company-details.html",
																	children: (0, a.jsxs)("div", {
																		className: "name-location",
																		children: [(0, a.jsx)("h5", {
																			children: (0, a.jsx)(h(), {
																				legacyBehavior: !0,
																				href: "/job-details",
																				children: (0, a.jsx)("a", {
																					children: "Junior Receptionist"
																				})
																			})
																		}), (0, a.jsxs)("ul", {
																			children: [(0, a.jsx)("li", {
																				children: (0, a.jsx)("p", {
																					children: (0, a.jsx)(h(), {
																						legacyBehavior: !0,
																						href: "/company-details",
																						children: (0, a.jsx)("a", {
																							children: "Gangster.Hide"
																						})
																					})
																				})
																			}), (0, a.jsx)("li", {
																				children: (0, a.jsxs)("p", {
																					children: [(0, a.jsx)("span", {
																						className: "title",
																						children: "Deadline:"
																					}), " 6 April, 2023"]
																				})
																			})]
																		})]
																	})
																})]
															}), (0, a.jsx)("div", {
																className: "job-discription",
																children: (0, a.jsxs)("ul", {
																	children: [(0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Salary:"
																			}), " $60-$80 /", (0, a.jsx)("span", {
																				className: "time",
																				children: "Per Hour"
																			})]
																		})
																	}), (0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Experience:"
																			}), " 1-1.5 Years"]
																		})
																	}), (0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Location:"
																			}), " Dhaka, Bangladesh"]
																		})
																	})]
																})
															}), (0, a.jsxs)("div", {
																className: "job-type-apply",
																children: [(0, a.jsx)("div", {
																	className: "job-type",
																	children: (0, a.jsx)("span", {
																		className: "light-blue",
																		children: "Part Time"
																	})
																}), (0, a.jsx)("div", {
																	className: "apply-btn",
																	children: (0, a.jsx)(h(), {
																		legacyBehavior: !0,
																		href: "/job-details",
																		children: (0, a.jsxs)("a", {
																			children: [(0, a.jsx)("span", {
																				children: (0, a.jsx)("img", {
																					src: "assets/images/icon/apply-ellipse.svg",
																					alt: ""
																				})
																			}), "Apply Now"]
																		})
																	})
																})]
															})]
														})]
													})
												}), (0, a.jsx)("div", {
													className: "col-lg-4 col-md-6",
													children: (0, a.jsxs)("div", {
														className: "job-listing-card2",
														children: [(0, a.jsxs)("div", {
															className: "job-thumb",
															children: [(0, a.jsx)("img", {
																className: "img-fluid",
																src: "assets/images/bg/job-list-5.png",
																alt: ""
															}), (0, a.jsx)("div", {
																className: "bookmark.html",
																children: (0, a.jsx)("i", {
																	className: "bi bi-bookmark.html"
																})
															})]
														}), (0, a.jsxs)("div", {
															className: "job-content",
															children: [(0, a.jsxs)("div", {
																className: "company-area",
																children: [(0, a.jsx)("div", {
																	className: "logo",
																	children: (0, a.jsx)("img", {
																		src: "assets/images/bg/company-logo/company-05.png",
																		alt: ""
																	})
																}), (0, a.jsx)("div", {
																	className: "company-details.html",
																	children: (0, a.jsxs)("div", {
																		className: "name-location",
																		children: [(0, a.jsx)("h5", {
																			children: (0, a.jsx)(h(), {
																				legacyBehavior: !0,
																				href: "/job-details",
																				children: (0, a.jsx)("a", {
																					children: "Senior Laboratoriest"
																				})
																			})
																		}), (0, a.jsxs)("ul", {
																			children: [(0, a.jsx)("li", {
																				children: (0, a.jsx)("p", {
																					children: (0, a.jsx)(h(), {
																						legacyBehavior: !0,
																						href: "/company-details",
																						children: (0, a.jsx)("a", {
																							children: "Laballo.Lab Ltd"
																						})
																					})
																				})
																			}), (0, a.jsx)("li", {
																				children: (0, a.jsxs)("p", {
																					children: [(0, a.jsx)("span", {
																						className: "title",
																						children: "Deadline:"
																					}), " 9 April, 2023"]
																				})
																			})]
																		})]
																	})
																})]
															}), (0, a.jsx)("div", {
																className: "job-discription",
																children: (0, a.jsxs)("ul", {
																	children: [(0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Salary:"
																			}), " $40K-$60K /", (0, a.jsx)("span", {
																				className: "time",
																				children: "Per Month"
																			})]
																		})
																	}), (0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Experience:"
																			}), " 3-4 Years"]
																		})
																	}), (0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Location:"
																			}), " ", "New-York, USA"]
																		})
																	})]
																})
															}), (0, a.jsxs)("div", {
																className: "job-type-apply",
																children: [(0, a.jsx)("div", {
																	className: "job-type",
																	children: (0, a.jsx)("span", {
																		className: "light-green",
																		children: "Full Time"
																	})
																}), (0, a.jsx)("div", {
																	className: "apply-btn",
																	children: (0, a.jsx)(h(), {
																		legacyBehavior: !0,
																		href: "/job-details",
																		children: (0, a.jsxs)("a", {
																			children: [(0, a.jsx)("span", {
																				children: (0, a.jsx)("img", {
																					src: "assets/images/icon/apply-ellipse.svg",
																					alt: ""
																				})
																			}), "Apply Now"]
																		})
																	})
																})]
															})]
														})]
													})
												}), (0, a.jsx)("div", {
													className: "col-lg-4 col-md-6",
													children: (0, a.jsxs)("div", {
														className: "job-listing-card2",
														children: [(0, a.jsxs)("div", {
															className: "job-thumb",
															children: [(0, a.jsx)("img", {
																className: "img-fluid",
																src: "assets/images/bg/job-list-6.png",
																alt: ""
															}), (0, a.jsx)("div", {
																className: "urgent-batch",
																children: (0, a.jsx)("span", {
																	children: "Urgent"
																})
															}), (0, a.jsx)("div", {
																className: "bookmark.html",
																children: (0, a.jsx)("i", {
																	className: "bi bi-bookmark.html"
																})
															})]
														}), (0, a.jsxs)("div", {
															className: "job-content",
															children: [(0, a.jsxs)("div", {
																className: "company-area",
																children: [(0, a.jsx)("div", {
																	className: "logo",
																	children: (0, a.jsx)("img", {
																		src: "assets/images/bg/company-logo/company-06.png",
																		alt: ""
																	})
																}), (0, a.jsx)("div", {
																	className: "company-details.html",
																	children: (0, a.jsxs)("div", {
																		className: "name-location",
																		children: [(0, a.jsx)("h5", {
																			children: (0, a.jsx)(h(), {
																				legacyBehavior: !0,
																				href: "/job-details",
																				children: (0, a.jsx)("a", {
																					children: "Medical Nurse"
																				})
																			})
																		}), (0, a.jsxs)("ul", {
																			children: [(0, a.jsx)("li", {
																				children: (0, a.jsx)("p", {
																					children: (0, a.jsx)(h(), {
																						legacyBehavior: !0,
																						href: "/company-details",
																						children: (0, a.jsx)("a", {
																							children: "Marko Company"
																						})
																					})
																				})
																			}), (0, a.jsx)("li", {
																				children: (0, a.jsxs)("p", {
																					children: [(0, a.jsx)("span", {
																						className: "title",
																						children: "Deadline:"
																					}), " 9 April, 2023"]
																				})
																			})]
																		})]
																	})
																})]
															}), (0, a.jsx)("div", {
																className: "job-discription",
																children: (0, a.jsxs)("ul", {
																	children: [(0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Salary:"
																			}), " $60-$90 /", (0, a.jsx)("span", {
																				className: "time",
																				children: "Per Hour"
																			})]
																		})
																	}), (0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Experience:"
																			}), " 3-3.5 Years"]
																		})
																	}), (0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Location:"
																			}), " Dhaka, Bangladesh"]
																		})
																	})]
																})
															}), (0, a.jsxs)("div", {
																className: "job-type-apply",
																children: [(0, a.jsx)("div", {
																	className: "job-type",
																	children: (0, a.jsx)("span", {
																		className: "light-green",
																		children: "Part Time"
																	})
																}), (0, a.jsx)("div", {
																	className: "apply-btn",
																	children: (0, a.jsx)(h(), {
																		legacyBehavior: !0,
																		href: "/job-details",
																		children: (0, a.jsxs)("a", {
																			children: [(0, a.jsx)("span", {
																				children: (0, a.jsx)("img", {
																					src: "assets/images/icon/apply-ellipse.svg",
																					alt: ""
																				})
																			}), "Apply Now"]
																		})
																	})
																})]
															})]
														})]
													})
												})]
											})
										}), (0, a.jsx)("div", {
											className: "tab-pane fade",
											id: "pills-contact.html",
											role: "tabpanel",
											"aria-labelledby": "pills-contact.html-tab",
											children: (0, a.jsxs)("div", {
												className: "row g-4",
												children: [(0, a.jsx)("div", {
													className: "col-lg-4 col-md-6",
													children: (0, a.jsxs)("div", {
														className: "job-listing-card2",
														children: [(0, a.jsxs)("div", {
															className: "job-thumb",
															children: [(0, a.jsx)("img", {
																className: "img-fluid",
																src: "assets/images/bg/job-list-1.png",
																alt: ""
															}), (0, a.jsx)("div", {
																className: "bookmark.html",
																children: (0, a.jsx)("i", {
																	className: "bi bi-bookmark.html"
																})
															})]
														}), (0, a.jsxs)("div", {
															className: "job-content",
															children: [(0, a.jsxs)("div", {
																className: "company-area",
																children: [(0, a.jsx)("div", {
																	className: "logo",
																	children: (0, a.jsx)("img", {
																		src: "assets/images/bg/company-logo/company-01.png",
																		alt: ""
																	})
																}), (0, a.jsx)("div", {
																	className: "company-details.html",
																	children: (0, a.jsxs)("div", {
																		className: "name-location",
																		children: [(0, a.jsx)("h5", {
																			children: (0, a.jsx)(h(), {
																				legacyBehavior: !0,
																				href: "/job-details",
																				children: (0, a.jsx)("a", {
																					children: "WordPress Developer"
																				})
																			})
																		}), (0, a.jsxs)("ul", {
																			children: [(0, a.jsx)("li", {
																				children: (0, a.jsx)("p", {
																					children: (0, a.jsx)(h(), {
																						legacyBehavior: !0,
																						href: "/company-details",
																						children: (0, a.jsx)("a", {
																							children: "Bistro Tech Ltd"
																						})
																					})
																				})
																			}), (0, a.jsx)("li", {
																				children: (0, a.jsxs)("p", {
																					children: [(0, a.jsx)("span", {
																						className: "title",
																						children: "Deadline:"
																					}), " 2 April, 2023"]
																				})
																			})]
																		})]
																	})
																})]
															}), (0, a.jsx)("div", {
																className: "job-discription",
																children: (0, a.jsxs)("ul", {
																	children: [(0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Salary:"
																			}), " $60-$90 /", (0, a.jsx)("span", {
																				className: "time",
																				children: "Per Hour"
																			})]
																		})
																	}), (0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Experience:"
																			}), " 3-3.5 Years"]
																		})
																	}), (0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Location:"
																			}), " Dhaka, Bangladesh"]
																		})
																	})]
																})
															}), (0, a.jsxs)("div", {
																className: "job-type-apply",
																children: [(0, a.jsx)("div", {
																	className: "job-type",
																	children: (0, a.jsx)("span", {
																		className: "light-green",
																		children: "Full Time"
																	})
																}), (0, a.jsx)("div", {
																	className: "apply-btn",
																	children: (0, a.jsx)(h(), {
																		legacyBehavior: !0,
																		href: "/job-details",
																		children: (0, a.jsxs)("a", {
																			children: [(0, a.jsx)("span", {
																				children: (0, a.jsx)("img", {
																					src: "assets/images/icon/apply-ellipse.svg",
																					alt: ""
																				})
																			}), "Apply Now"]
																		})
																	})
																})]
															})]
														})]
													})
												}), (0, a.jsx)("div", {
													className: "col-lg-4 col-md-6",
													children: (0, a.jsxs)("div", {
														className: "job-listing-card2",
														children: [(0, a.jsxs)("div", {
															className: "job-thumb",
															children: [(0, a.jsx)("img", {
																className: "img-fluid",
																src: "assets/images/bg/job-list-2.png",
																alt: ""
															}), (0, a.jsx)("div", {
																className: "bookmark.html",
																children: (0, a.jsx)("i", {
																	className: "bi bi-bookmark.html"
																})
															})]
														}), (0, a.jsxs)("div", {
															className: "job-content",
															children: [(0, a.jsxs)("div", {
																className: "company-area",
																children: [(0, a.jsx)("div", {
																	className: "logo",
																	children: (0, a.jsx)("img", {
																		src: "assets/images/bg/company-logo/company-02.png",
																		alt: ""
																	})
																}), (0, a.jsx)("div", {
																	className: "company-details.html",
																	children: (0, a.jsxs)("div", {
																		className: "name-location",
																		children: [(0, a.jsx)("h5", {
																			children: (0, a.jsx)(h(), {
																				legacyBehavior: !0,
																				href: "/job-details",
																				children: (0, a.jsx)("a", {
																					children: "Assistant Manager"
																				})
																			})
																		}), (0, a.jsxs)("ul", {
																			children: [(0, a.jsx)("li", {
																				children: (0, a.jsx)("p", {
																					children: (0, a.jsx)(h(), {
																						legacyBehavior: !0,
																						href: "/company-details",
																						children: (0, a.jsx)("a", {
																							children: "Hangman Gold"
																						})
																					})
																				})
																			}), (0, a.jsx)("li", {
																				children: (0, a.jsxs)("p", {
																					children: [(0, a.jsx)("span", {
																						className: "title",
																						children: "Deadline:"
																					}), " 3 April, 2023"]
																				})
																			})]
																		})]
																	})
																})]
															}), (0, a.jsx)("div", {
																className: "job-discription",
																children: (0, a.jsxs)("ul", {
																	children: [(0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Salary:"
																			}), " $20k-$50k /", (0, a.jsx)("span", {
																				className: "time",
																				children: "Per Hour"
																			})]
																		})
																	}), (0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Experience:"
																			}), " 2-2.5 Years"]
																		})
																	}), (0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Location:"
																			}), " Sylhet, Bangladesh"]
																		})
																	})]
																})
															}), (0, a.jsxs)("div", {
																className: "job-type-apply",
																children: [(0, a.jsx)("div", {
																	className: "job-type",
																	children: (0, a.jsx)("span", {
																		className: "light-green",
																		children: "Full Time"
																	})
																}), (0, a.jsx)("div", {
																	className: "apply-btn",
																	children: (0, a.jsx)(h(), {
																		legacyBehavior: !0,
																		href: "/job-details",
																		children: (0, a.jsxs)("a", {
																			children: [(0, a.jsx)("span", {
																				children: (0, a.jsx)("img", {
																					src: "assets/images/icon/apply-ellipse.svg",
																					alt: ""
																				})
																			}), "Apply Now"]
																		})
																	})
																})]
															})]
														})]
													})
												}), (0, a.jsx)("div", {
													className: "col-lg-4 col-md-6",
													children: (0, a.jsxs)("div", {
														className: "job-listing-card2",
														children: [(0, a.jsxs)("div", {
															className: "job-thumb",
															children: [(0, a.jsx)("img", {
																className: "img-fluid",
																src: "assets/images/bg/job-list-3.png",
																alt: ""
															}), (0, a.jsx)("div", {
																className: "bookmark.html",
																children: (0, a.jsx)("i", {
																	className: "bi bi-bookmark.html"
																})
															})]
														}), (0, a.jsxs)("div", {
															className: "job-content",
															children: [(0, a.jsxs)("div", {
																className: "company-area",
																children: [(0, a.jsx)("div", {
																	className: "logo",
																	children: (0, a.jsx)("img", {
																		src: "assets/images/bg/company-logo/company-03.png",
																		alt: ""
																	})
																}), (0, a.jsx)("div", {
																	className: "company-details.html",
																	children: (0, a.jsxs)("div", {
																		className: "name-location",
																		children: [(0, a.jsx)("h5", {
																			children: (0, a.jsx)(h(), {
																				legacyBehavior: !0,
																				href: "/job-details",
																				children: (0, a.jsx)("a", {
																					children: "UI/UX Designer"
																				})
																			})
																		}), (0, a.jsxs)("ul", {
																			children: [(0, a.jsx)("li", {
																				children: (0, a.jsx)("p", {
																					children: (0, a.jsx)(h(), {
																						legacyBehavior: !0,
																						href: "/company-details",
																						children: (0, a.jsx)("a", {
																							children: "Tech-Bath IT Ltd"
																						})
																					})
																				})
																			}), (0, a.jsx)("li", {
																				children: (0, a.jsxs)("p", {
																					children: [(0, a.jsx)("span", {
																						className: "title",
																						children: "Deadline:"
																					}), " 5 April, 2023"]
																				})
																			})]
																		})]
																	})
																})]
															}), (0, a.jsx)("div", {
																className: "job-discription",
																children: (0, a.jsxs)("ul", {
																	children: [(0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Salary:"
																			}), " $50K-$90K /", (0, a.jsx)("span", {
																				className: "time",
																				children: "Per Month"
																			})]
																		})
																	}), (0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Experience:"
																			}), " 2-3 Years"]
																		})
																	}), (0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Location:"
																			}), " ", "Chicago, Australia"]
																		})
																	})]
																})
															}), (0, a.jsxs)("div", {
																className: "job-type-apply",
																children: [(0, a.jsx)("div", {
																	className: "job-type",
																	children: (0, a.jsx)("span", {
																		className: "light-blue",
																		children: "Part Time"
																	})
																}), (0, a.jsx)("div", {
																	className: "apply-btn",
																	children: (0, a.jsx)(h(), {
																		legacyBehavior: !0,
																		href: "/job-details",
																		children: (0, a.jsxs)("a", {
																			children: [(0, a.jsx)("span", {
																				children: (0, a.jsx)("img", {
																					src: "assets/images/icon/apply-ellipse.svg",
																					alt: ""
																				})
																			}), "Apply Now"]
																		})
																	})
																})]
															})]
														})]
													})
												}), (0, a.jsx)("div", {
													className: "col-lg-4 col-md-6",
													children: (0, a.jsxs)("div", {
														className: "job-listing-card2",
														children: [(0, a.jsxs)("div", {
															className: "job-thumb",
															children: [(0, a.jsx)("img", {
																className: "img-fluid",
																src: "assets/images/bg/job-list-4.png",
																alt: ""
															}), (0, a.jsx)("div", {
																className: "urgent-batch",
																children: (0, a.jsx)("span", {
																	children: "Urgent"
																})
															}), (0, a.jsx)("div", {
																className: "bookmark.html",
																children: (0, a.jsx)("i", {
																	className: "bi bi-bookmark.html"
																})
															})]
														}), (0, a.jsxs)("div", {
															className: "job-content",
															children: [(0, a.jsxs)("div", {
																className: "company-area",
																children: [(0, a.jsx)("div", {
																	className: "logo",
																	children: (0, a.jsx)("img", {
																		src: "assets/images/bg/company-logo/company-04.png",
																		alt: ""
																	})
																}), (0, a.jsx)("div", {
																	className: "company-details.html",
																	children: (0, a.jsxs)("div", {
																		className: "name-location",
																		children: [(0, a.jsx)("h5", {
																			children: (0, a.jsx)(h(), {
																				legacyBehavior: !0,
																				href: "/job-details",
																				children: (0, a.jsx)("a", {
																					children: "Junior Receptionist"
																				})
																			})
																		}), (0, a.jsxs)("ul", {
																			children: [(0, a.jsx)("li", {
																				children: (0, a.jsx)("p", {
																					children: (0, a.jsx)(h(), {
																						legacyBehavior: !0,
																						href: "/company-details",
																						children: (0, a.jsx)("a", {
																							children: " Gangster.Hide"
																						})
																					})
																				})
																			}), (0, a.jsx)("li", {
																				children: (0, a.jsxs)("p", {
																					children: [(0, a.jsx)("span", {
																						className: "title",
																						children: "Deadline:"
																					}), " 6 April, 2023"]
																				})
																			})]
																		})]
																	})
																})]
															}), (0, a.jsx)("div", {
																className: "job-discription",
																children: (0, a.jsxs)("ul", {
																	children: [(0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Salary:"
																			}), " $60-$80 /", (0, a.jsx)("span", {
																				className: "time",
																				children: "Per Hour"
																			})]
																		})
																	}), (0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Experience:"
																			}), " 1-1.5 Years"]
																		})
																	}), (0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Location:"
																			}), " Dhaka, Bangladesh"]
																		})
																	})]
																})
															}), (0, a.jsxs)("div", {
																className: "job-type-apply",
																children: [(0, a.jsx)("div", {
																	className: "job-type",
																	children: (0, a.jsx)("span", {
																		className: "light-blue",
																		children: "Part Time"
																	})
																}), (0, a.jsx)("div", {
																	className: "apply-btn",
																	children: (0, a.jsx)(h(), {
																		legacyBehavior: !0,
																		href: "/job-details",
																		children: (0, a.jsxs)("a", {
																			children: [(0, a.jsx)("span", {
																				children: (0, a.jsx)("img", {
																					src: "assets/images/icon/apply-ellipse.svg",
																					alt: ""
																				})
																			}), "Apply Now"]
																		})
																	})
																})]
															})]
														})]
													})
												}), (0, a.jsx)("div", {
													className: "col-lg-4 col-md-6",
													children: (0, a.jsxs)("div", {
														className: "job-listing-card2",
														children: [(0, a.jsxs)("div", {
															className: "job-thumb",
															children: [(0, a.jsx)("img", {
																className: "img-fluid",
																src: "assets/images/bg/job-list-5.png",
																alt: ""
															}), (0, a.jsx)("div", {
																className: "bookmark.html",
																children: (0, a.jsx)("i", {
																	className: "bi bi-bookmark.html"
																})
															})]
														}), (0, a.jsxs)("div", {
															className: "job-content",
															children: [(0, a.jsxs)("div", {
																className: "company-area",
																children: [(0, a.jsx)("div", {
																	className: "logo",
																	children: (0, a.jsx)("img", {
																		src: "assets/images/bg/company-logo/company-05.png",
																		alt: ""
																	})
																}), (0, a.jsx)("div", {
																	className: "company-details.html",
																	children: (0, a.jsxs)("div", {
																		className: "name-location",
																		children: [(0, a.jsx)("h5", {
																			children: (0, a.jsx)(h(), {
																				legacyBehavior: !0,
																				href: "/job-details",
																				children: (0, a.jsx)("a", {
																					children: "Senior Laboratoriest"
																				})
																			})
																		}), (0, a.jsxs)("ul", {
																			children: [(0, a.jsx)("li", {
																				children: (0, a.jsx)("p", {
																					children: (0, a.jsx)(h(), {
																						legacyBehavior: !0,
																						href: "/company-details",
																						children: (0, a.jsx)("a", {
																							children: "Laballo.Lab Ltd"
																						})
																					})
																				})
																			}), (0, a.jsx)("li", {
																				children: (0, a.jsxs)("p", {
																					children: [(0, a.jsx)("span", {
																						className: "title",
																						children: "Deadline:"
																					}), " 9 April, 2023"]
																				})
																			})]
																		})]
																	})
																})]
															}), (0, a.jsx)("div", {
																className: "job-discription",
																children: (0, a.jsxs)("ul", {
																	children: [(0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Salary:"
																			}), " $40K-$60K /", (0, a.jsx)("span", {
																				className: "time",
																				children: "Per Month"
																			})]
																		})
																	}), (0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Experience:"
																			}), " 3-4 Years"]
																		})
																	}), (0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Location:"
																			}), " ", "New-York, USA"]
																		})
																	})]
																})
															}), (0, a.jsxs)("div", {
																className: "job-type-apply",
																children: [(0, a.jsx)("div", {
																	className: "job-type",
																	children: (0, a.jsx)("span", {
																		className: "light-green",
																		children: "Full Time"
																	})
																}), (0, a.jsx)("div", {
																	className: "apply-btn",
																	children: (0, a.jsx)(h(), {
																		legacyBehavior: !0,
																		href: "/job-details",
																		children: (0, a.jsxs)("a", {
																			children: [(0, a.jsx)("span", {
																				children: (0, a.jsx)("img", {
																					src: "assets/images/icon/apply-ellipse.svg",
																					alt: ""
																				})
																			}), "Apply Now"]
																		})
																	})
																})]
															})]
														})]
													})
												}), (0, a.jsx)("div", {
													className: "col-lg-4 col-md-6",
													children: (0, a.jsxs)("div", {
														className: "job-listing-card2",
														children: [(0, a.jsxs)("div", {
															className: "job-thumb",
															children: [(0, a.jsx)("img", {
																className: "img-fluid",
																src: "assets/images/bg/job-list-6.png",
																alt: ""
															}), (0, a.jsx)("div", {
																className: "urgent-batch",
																children: (0, a.jsx)("span", {
																	children: "Urgent"
																})
															}), (0, a.jsx)("div", {
																className: "bookmark.html",
																children: (0, a.jsx)("i", {
																	className: "bi bi-bookmark.html"
																})
															})]
														}), (0, a.jsxs)("div", {
															className: "job-content",
															children: [(0, a.jsxs)("div", {
																className: "company-area",
																children: [(0, a.jsx)("div", {
																	className: "logo",
																	children: (0, a.jsx)("img", {
																		src: "assets/images/bg/company-logo/company-06.png",
																		alt: ""
																	})
																}), (0, a.jsx)("div", {
																	className: "company-details.html",
																	children: (0, a.jsxs)("div", {
																		className: "name-location",
																		children: [(0, a.jsx)("h5", {
																			children: (0, a.jsx)(h(), {
																				legacyBehavior: !0,
																				href: "/job-details",
																				children: (0, a.jsx)("a", {
																					children: "Medical Nurse"
																				})
																			})
																		}), (0, a.jsxs)("ul", {
																			children: [(0, a.jsx)("li", {
																				children: (0, a.jsx)("p", {
																					children: (0, a.jsx)(h(), {
																						legacyBehavior: !0,
																						href: "/company-details",
																						children: (0, a.jsx)("a", {
																							children: "Marko Company"
																						})
																					})
																				})
																			}), (0, a.jsx)("li", {
																				children: (0, a.jsxs)("p", {
																					children: [(0, a.jsx)("span", {
																						className: "title",
																						children: "Deadline:"
																					}), " 9 April, 2023"]
																				})
																			})]
																		})]
																	})
																})]
															}), (0, a.jsx)("div", {
																className: "job-discription",
																children: (0, a.jsxs)("ul", {
																	children: [(0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Salary:"
																			}), " $60-$90 /", (0, a.jsx)("span", {
																				className: "time",
																				children: "Per Hour"
																			})]
																		})
																	}), (0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Experience:"
																			}), " 3-3.5 Years"]
																		})
																	}), (0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Location:"
																			}), " Dhaka, Bangladesh"]
																		})
																	})]
																})
															}), (0, a.jsxs)("div", {
																className: "job-type-apply",
																children: [(0, a.jsx)("div", {
																	className: "job-type",
																	children: (0, a.jsx)("span", {
																		className: "light-green",
																		children: "Part Time"
																	})
																}), (0, a.jsx)("div", {
																	className: "apply-btn",
																	children: (0, a.jsx)(h(), {
																		legacyBehavior: !0,
																		href: "/job-details",
																		children: (0, a.jsxs)("a", {
																			children: [(0, a.jsx)("span", {
																				children: (0, a.jsx)("img", {
																					src: "assets/images/icon/apply-ellipse.svg",
																					alt: ""
																				})
																			}), "Apply Now"]
																		})
																	})
																})]
															})]
														})]
													})
												})]
											})
										}), (0, a.jsx)("div", {
											className: "tab-pane fade",
											id: "pills-technology",
											role: "tabpanel",
											"aria-labelledby": "pills-technology-tab",
											children: (0, a.jsxs)("div", {
												className: "row g-4",
												children: [(0, a.jsx)("div", {
													className: "col-lg-4 col-md-6",
													children: (0, a.jsxs)("div", {
														className: "job-listing-card2",
														children: [(0, a.jsxs)("div", {
															className: "job-thumb",
															children: [(0, a.jsx)("img", {
																className: "img-fluid",
																src: "assets/images/bg/job-list-1.png",
																alt: ""
															}), (0, a.jsx)("div", {
																className: "bookmark.html",
																children: (0, a.jsx)("i", {
																	className: "bi bi-bookmark.html"
																})
															})]
														}), (0, a.jsxs)("div", {
															className: "job-content",
															children: [(0, a.jsxs)("div", {
																className: "company-area",
																children: [(0, a.jsx)("div", {
																	className: "logo",
																	children: (0, a.jsx)("img", {
																		src: "assets/images/bg/company-logo/company-01.png",
																		alt: ""
																	})
																}), (0, a.jsx)("div", {
																	className: "company-details.html",
																	children: (0, a.jsxs)("div", {
																		className: "name-location",
																		children: [(0, a.jsx)("h5", {
																			children: (0, a.jsx)(h(), {
																				legacyBehavior: !0,
																				href: "/job-details",
																				children: "WordPress Developer"
																			})
																		}), (0, a.jsxs)("ul", {
																			children: [(0, a.jsx)("li", {
																				children: (0, a.jsx)("p", {
																					children: (0, a.jsx)(h(), {
																						legacyBehavior: !0,
																						href: "/company-details",
																						children: (0, a.jsx)("a", {
																							children: "Bistro Tech Ltd"
																						})
																					})
																				})
																			}), (0, a.jsx)("li", {
																				children: (0, a.jsxs)("p", {
																					children: [(0, a.jsx)("span", {
																						className: "title",
																						children: "Deadline:"
																					}), " 2 April, 2023"]
																				})
																			})]
																		})]
																	})
																})]
															}), (0, a.jsx)("div", {
																className: "job-discription",
																children: (0, a.jsxs)("ul", {
																	children: [(0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Salary:"
																			}), " $60-$90 /", (0, a.jsx)("span", {
																				className: "time",
																				children: "Per Hour"
																			})]
																		})
																	}), (0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Experience:"
																			}), " 3-3.5 Years"]
																		})
																	}), (0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Location:"
																			}), " Dhaka, Bangladesh"]
																		})
																	})]
																})
															}), (0, a.jsxs)("div", {
																className: "job-type-apply",
																children: [(0, a.jsx)("div", {
																	className: "job-type",
																	children: (0, a.jsx)("span", {
																		className: "light-green",
																		children: "Full Time"
																	})
																}), (0, a.jsx)("div", {
																	className: "apply-btn",
																	children: (0, a.jsx)(h(), {
																		legacyBehavior: !0,
																		href: "/job-details",
																		children: (0, a.jsxs)("a", {
																			children: [(0, a.jsx)("span", {
																				children: (0, a.jsx)("img", {
																					src: "assets/images/icon/apply-ellipse.svg",
																					alt: ""
																				})
																			}), "Apply Now"]
																		})
																	})
																})]
															})]
														})]
													})
												}), (0, a.jsx)("div", {
													className: "col-lg-4 col-md-6",
													children: (0, a.jsxs)("div", {
														className: "job-listing-card2",
														children: [(0, a.jsxs)("div", {
															className: "job-thumb",
															children: [(0, a.jsx)("img", {
																className: "img-fluid",
																src: "assets/images/bg/job-list-2.png",
																alt: ""
															}), (0, a.jsx)("div", {
																className: "bookmark.html",
																children: (0, a.jsx)("i", {
																	className: "bi bi-bookmark.html"
																})
															})]
														}), (0, a.jsxs)("div", {
															className: "job-content",
															children: [(0, a.jsxs)("div", {
																className: "company-area",
																children: [(0, a.jsx)("div", {
																	className: "logo",
																	children: (0, a.jsx)("img", {
																		src: "assets/images/bg/company-logo/company-02.png",
																		alt: ""
																	})
																}), (0, a.jsx)("div", {
																	className: "company-details.html",
																	children: (0, a.jsxs)("div", {
																		className: "name-location",
																		children: [(0, a.jsx)("h5", {
																			children: (0, a.jsx)(h(), {
																				legacyBehavior: !0,
																				href: "/job-details",
																				children: "Assistant Manager"
																			})
																		}), (0, a.jsxs)("ul", {
																			children: [(0, a.jsx)("li", {
																				children: (0, a.jsx)("p", {
																					children: (0, a.jsx)(h(), {
																						legacyBehavior: !0,
																						href: "/company-details",
																						children: (0, a.jsx)("a", {
																							children: "Hangman Gold"
																						})
																					})
																				})
																			}), (0, a.jsx)("li", {
																				children: (0, a.jsxs)("p", {
																					children: [(0, a.jsx)("span", {
																						className: "title",
																						children: "Deadline:"
																					}), " 3 April, 2023"]
																				})
																			})]
																		})]
																	})
																})]
															}), (0, a.jsx)("div", {
																className: "job-discription",
																children: (0, a.jsxs)("ul", {
																	children: [(0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Salary:"
																			}), " $20k-$50k /", (0, a.jsx)("span", {
																				className: "time",
																				children: "Per Hour"
																			})]
																		})
																	}), (0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Experience:"
																			}), " 2-2.5 Years"]
																		})
																	}), (0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Location:"
																			}), " Sylhet, Bangladesh"]
																		})
																	})]
																})
															}), (0, a.jsxs)("div", {
																className: "job-type-apply",
																children: [(0, a.jsx)("div", {
																	className: "job-type",
																	children: (0, a.jsx)("span", {
																		className: "light-green",
																		children: "Full Time"
																	})
																}), (0, a.jsx)("div", {
																	className: "apply-btn",
																	children: (0, a.jsx)(h(), {
																		legacyBehavior: !0,
																		href: "/job-details",
																		children: (0, a.jsxs)("a", {
																			children: [(0, a.jsx)("span", {
																				children: (0, a.jsx)("img", {
																					src: "assets/images/icon/apply-ellipse.svg",
																					alt: ""
																				})
																			}), "Apply Now"]
																		})
																	})
																})]
															})]
														})]
													})
												}), (0, a.jsx)("div", {
													className: "col-lg-4 col-md-6",
													children: (0, a.jsxs)("div", {
														className: "job-listing-card2",
														children: [(0, a.jsxs)("div", {
															className: "job-thumb",
															children: [(0, a.jsx)("img", {
																className: "img-fluid",
																src: "assets/images/bg/job-list-3.png",
																alt: ""
															}), (0, a.jsx)("div", {
																className: "bookmark.html",
																children: (0, a.jsx)("i", {
																	className: "bi bi-bookmark.html"
																})
															})]
														}), (0, a.jsxs)("div", {
															className: "job-content",
															children: [(0, a.jsxs)("div", {
																className: "company-area",
																children: [(0, a.jsx)("div", {
																	className: "logo",
																	children: (0, a.jsx)("img", {
																		src: "assets/images/bg/company-logo/company-03.png",
																		alt: ""
																	})
																}), (0, a.jsx)("div", {
																	className: "company-details.html",
																	children: (0, a.jsxs)("div", {
																		className: "name-location",
																		children: [(0, a.jsx)("h5", {
																			children: (0, a.jsx)(h(), {
																				legacyBehavior: !0,
																				href: "/job-details",
																				children: "UI/UX Designer"
																			})
																		}), (0, a.jsxs)("ul", {
																			children: [(0, a.jsx)("li", {
																				children: (0, a.jsx)("p", {
																					children: (0, a.jsx)(h(), {
																						legacyBehavior: !0,
																						href: "/company-details",
																						children: (0, a.jsx)("a", {
																							children: "Tech-Bath IT Ltd"
																						})
																					})
																				})
																			}), (0, a.jsx)("li", {
																				children: (0, a.jsxs)("p", {
																					children: [(0, a.jsx)("span", {
																						className: "title",
																						children: "Deadline:"
																					}), " 5 April, 2023"]
																				})
																			})]
																		})]
																	})
																})]
															}), (0, a.jsx)("div", {
																className: "job-discription",
																children: (0, a.jsxs)("ul", {
																	children: [(0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Salary:"
																			}), " $50K-$90K /", (0, a.jsx)("span", {
																				className: "time",
																				children: "Per Month"
																			})]
																		})
																	}), (0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Experience:"
																			}), " 2-3 Years"]
																		})
																	}), (0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Location:"
																			}), " ", "Chicago, Australia"]
																		})
																	})]
																})
															}), (0, a.jsxs)("div", {
																className: "job-type-apply",
																children: [(0, a.jsx)("div", {
																	className: "job-type",
																	children: (0, a.jsx)("span", {
																		className: "light-blue",
																		children: "Part Time"
																	})
																}), (0, a.jsx)("div", {
																	className: "apply-btn",
																	children: (0, a.jsx)(h(), {
																		legacyBehavior: !0,
																		href: "/job-details",
																		children: (0, a.jsxs)("a", {
																			children: [(0, a.jsx)("span", {
																				children: (0, a.jsx)("img", {
																					src: "assets/images/icon/apply-ellipse.svg",
																					alt: ""
																				})
																			}), "Apply Now"]
																		})
																	})
																})]
															})]
														})]
													})
												}), (0, a.jsx)("div", {
													className: "col-lg-4 col-md-6",
													children: (0, a.jsxs)("div", {
														className: "job-listing-card2",
														children: [(0, a.jsxs)("div", {
															className: "job-thumb",
															children: [(0, a.jsx)("img", {
																className: "img-fluid",
																src: "assets/images/bg/job-list-4.png",
																alt: ""
															}), (0, a.jsx)("div", {
																className: "urgent-batch",
																children: (0, a.jsx)("span", {
																	children: "Urgent"
																})
															}), (0, a.jsx)("div", {
																className: "bookmark.html",
																children: (0, a.jsx)("i", {
																	className: "bi bi-bookmark.html"
																})
															})]
														}), (0, a.jsxs)("div", {
															className: "job-content",
															children: [(0, a.jsxs)("div", {
																className: "company-area",
																children: [(0, a.jsx)("div", {
																	className: "logo",
																	children: (0, a.jsx)("img", {
																		src: "assets/images/bg/company-logo/company-04.png",
																		alt: ""
																	})
																}), (0, a.jsx)("div", {
																	className: "company-details.html",
																	children: (0, a.jsxs)("div", {
																		className: "name-location",
																		children: [(0, a.jsx)("h5", {
																			children: (0, a.jsx)(h(), {
																				legacyBehavior: !0,
																				href: "/job-details",
																				children: "Junior Receptionist"
																			})
																		}), (0, a.jsxs)("ul", {
																			children: [(0, a.jsx)("li", {
																				children: (0, a.jsx)("p", {
																					children: (0, a.jsx)(h(), {
																						legacyBehavior: !0,
																						href: "/company-details",
																						children: (0, a.jsx)("a", {
																							children: "Gangster.Hide"
																						})
																					})
																				})
																			}), (0, a.jsx)("li", {
																				children: (0, a.jsxs)("p", {
																					children: [(0, a.jsx)("span", {
																						className: "title",
																						children: "Deadline:"
																					}), " 6 April, 2023"]
																				})
																			})]
																		})]
																	})
																})]
															}), (0, a.jsx)("div", {
																className: "job-discription",
																children: (0, a.jsxs)("ul", {
																	children: [(0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Salary:"
																			}), " $60-$80 /", (0, a.jsx)("span", {
																				className: "time",
																				children: "Per Hour"
																			})]
																		})
																	}), (0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Experience:"
																			}), " 1-1.5 Years"]
																		})
																	}), (0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Location:"
																			}), " Dhaka, Bangladesh"]
																		})
																	})]
																})
															}), (0, a.jsxs)("div", {
																className: "job-type-apply",
																children: [(0, a.jsx)("div", {
																	className: "job-type",
																	children: (0, a.jsx)("span", {
																		className: "light-blue",
																		children: "Part Time"
																	})
																}), (0, a.jsx)("div", {
																	className: "apply-btn",
																	children: (0, a.jsx)(h(), {
																		legacyBehavior: !0,
																		href: "/job-details",
																		children: (0, a.jsxs)("a", {
																			children: [(0, a.jsx)("span", {
																				children: (0, a.jsx)("img", {
																					src: "assets/images/icon/apply-ellipse.svg",
																					alt: ""
																				})
																			}), "Apply Now"]
																		})
																	})
																})]
															})]
														})]
													})
												}), (0, a.jsx)("div", {
													className: "col-lg-4 col-md-6",
													children: (0, a.jsxs)("div", {
														className: "job-listing-card2",
														children: [(0, a.jsxs)("div", {
															className: "job-thumb",
															children: [(0, a.jsx)("img", {
																className: "img-fluid",
																src: "assets/images/bg/job-list-5.png",
																alt: ""
															}), (0, a.jsx)("div", {
																className: "bookmark.html",
																children: (0, a.jsx)("i", {
																	className: "bi bi-bookmark.html"
																})
															})]
														}), (0, a.jsxs)("div", {
															className: "job-content",
															children: [(0, a.jsxs)("div", {
																className: "company-area",
																children: [(0, a.jsx)("div", {
																	className: "logo",
																	children: (0, a.jsx)("img", {
																		src: "assets/images/bg/company-logo/company-05.png",
																		alt: ""
																	})
																}), (0, a.jsx)("div", {
																	className: "company-details.html",
																	children: (0, a.jsxs)("div", {
																		className: "name-location",
																		children: [(0, a.jsx)("h5", {
																			children: (0, a.jsx)(h(), {
																				legacyBehavior: !0,
																				href: "/job-details",
																				children: "Senior Laboratoriest"
																			})
																		}), (0, a.jsxs)("ul", {
																			children: [(0, a.jsx)("li", {
																				children: (0, a.jsx)("p", {
																					children: (0, a.jsx)(h(), {
																						legacyBehavior: !0,
																						href: "/company-details",
																						children: (0, a.jsx)("a", {
																							children: "Laballo.Lab Ltd"
																						})
																					})
																				})
																			}), (0, a.jsx)("li", {
																				children: (0, a.jsxs)("p", {
																					children: [(0, a.jsx)("span", {
																						className: "title",
																						children: "Deadline:"
																					}), " 9 April, 2023"]
																				})
																			})]
																		})]
																	})
																})]
															}), (0, a.jsx)("div", {
																className: "job-discription",
																children: (0, a.jsxs)("ul", {
																	children: [(0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Salary:"
																			}), " $40K-$60K /", (0, a.jsx)("span", {
																				className: "time",
																				children: "Per Month"
																			})]
																		})
																	}), (0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Experience:"
																			}), " 3-4 Years"]
																		})
																	}), (0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Location:"
																			}), " ", "New-York, USA"]
																		})
																	})]
																})
															}), (0, a.jsxs)("div", {
																className: "job-type-apply",
																children: [(0, a.jsx)("div", {
																	className: "job-type",
																	children: (0, a.jsx)("span", {
																		className: "light-green",
																		children: "Full Time"
																	})
																}), (0, a.jsx)("div", {
																	className: "apply-btn",
																	children: (0, a.jsx)(h(), {
																		legacyBehavior: !0,
																		href: "/job-details",
																		children: (0, a.jsxs)("a", {
																			children: [(0, a.jsx)("span", {
																				children: (0, a.jsx)("img", {
																					src: "assets/images/icon/apply-ellipse.svg",
																					alt: ""
																				})
																			}), "Apply Now"]
																		})
																	})
																})]
															})]
														})]
													})
												}), (0, a.jsx)("div", {
													className: "col-lg-4 col-md-6",
													children: (0, a.jsxs)("div", {
														className: "job-listing-card2",
														children: [(0, a.jsxs)("div", {
															className: "job-thumb",
															children: [(0, a.jsx)("img", {
																className: "img-fluid",
																src: "assets/images/bg/job-list-6.png",
																alt: ""
															}), (0, a.jsx)("div", {
																className: "urgent-batch",
																children: (0, a.jsx)("span", {
																	children: "Urgent"
																})
															}), (0, a.jsx)("div", {
																className: "bookmark.html",
																children: (0, a.jsx)("i", {
																	className: "bi bi-bookmark.html"
																})
															})]
														}), (0, a.jsxs)("div", {
															className: "job-content",
															children: [(0, a.jsxs)("div", {
																className: "company-area",
																children: [(0, a.jsx)("div", {
																	className: "logo",
																	children: (0, a.jsx)("img", {
																		src: "assets/images/bg/company-logo/company-06.png",
																		alt: ""
																	})
																}), (0, a.jsx)("div", {
																	className: "company-details.html",
																	children: (0, a.jsxs)("div", {
																		className: "name-location",
																		children: [(0, a.jsx)("h5", {
																			children: (0, a.jsx)(h(), {
																				legacyBehavior: !0,
																				href: "/job-details",
																				children: "Medical Nurse"
																			})
																		}), (0, a.jsxs)("ul", {
																			children: [(0, a.jsx)("li", {
																				children: (0, a.jsx)("p", {
																					children: (0, a.jsx)(h(), {
																						legacyBehavior: !0,
																						href: "/company-details",
																						children: (0, a.jsx)("a", {
																							children: "Marko Company"
																						})
																					})
																				})
																			}), (0, a.jsx)("li", {
																				children: (0, a.jsxs)("p", {
																					children: [(0, a.jsx)("span", {
																						className: "title",
																						children: "Deadline:"
																					}), " 9 April, 2023"]
																				})
																			})]
																		})]
																	})
																})]
															}), (0, a.jsx)("div", {
																className: "job-discription",
																children: (0, a.jsxs)("ul", {
																	children: [(0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Salary:"
																			}), " $60-$90 /", (0, a.jsx)("span", {
																				className: "time",
																				children: "Per Hour"
																			})]
																		})
																	}), (0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Experience:"
																			}), " 3-3.5 Years"]
																		})
																	}), (0, a.jsx)("li", {
																		children: (0, a.jsxs)("p", {
																			children: [(0, a.jsx)("span", {
																				className: "title",
																				children: "Location:"
																			}), " Dhaka, Bangladesh"]
																		})
																	})]
																})
															}), (0, a.jsxs)("div", {
																className: "job-type-apply",
																children: [(0, a.jsx)("div", {
																	className: "job-type",
																	children: (0, a.jsx)("span", {
																		className: "light-green",
																		children: "Part Time"
																	})
																}), (0, a.jsx)("div", {
																	className: "apply-btn",
																	children: (0, a.jsx)(h(), {
																		legacyBehavior: !0,
																		href: "/job-details",
																		children: (0, a.jsxs)("a", {
																			children: [(0, a.jsx)("span", {
																				children: (0, a.jsx)("img", {
																					src: "assets/images/icon/apply-ellipse.svg",
																					alt: ""
																				})
																			}), "Apply Now"]
																		})
																	})
																})]
															})]
														})]
													})
												})]
											})
										})]
									})
								})]
							})]
						})
					})
				},
				v = i(7857);
			x.ZP.use([x.W_, x.tl, x.pt, x.W_]);
			var N = function() {
					let s = (0, r.useMemo)(() => ({
						spaceBetween: 20,
						loop: !0,
						slidesPerView: "auto",
						speed: 2e3,
						effect: "fade",
						autoplay: {
							delay: 1500
						},
						navigation: {
							nextEl: "._next-6",
							prevEl: ".prev-6"
						},
						pagination: {
							el: ".swiper-pagination-g",
							type: "fraction"
						}
					}), []);
					return (0, a.jsx)("div", {
						className: "home3-user-feedback mb-120",
						children: (0, a.jsx)("div", {
							className: "container",
							children: (0, a.jsxs)("div", {
								className: "row g-4 gy-5",
								children: [(0, a.jsx)("div", {
									className: "col-lg-6",
									children: (0, a.jsxs)("div", {
										className: "user-feedback-left",
										children: [(0, a.jsxs)("div", {
											className: "section-title1",
											children: [(0, a.jsxs)("h2", {
												children: ["Our Users ", (0, a.jsx)("span", {
													children: "Feedback"
												})]
											}), (0, a.jsx)("p", {
												children: "To choose your trending job dream & to make future bright."
											})]
										}), (0, a.jsx)("div", {
											className: "counter-area",
											children: (0, a.jsxs)("div", {
												className: "row divider justify-content-center",
												children: [(0, a.jsx)("div", {
													className: "col-sm-6 mb-60",
													children: (0, a.jsxs)("div", {
														className: "counter-single",
														children: [(0, a.jsx)("div", {
															className: "counter-icon",
															children: (0, a.jsx)("img", {
																src: "assets/images/icon/job2.svg",
																alt: "image"
															})
														}), (0, a.jsxs)("div", {
															className: "coundown",
															children: [(0, a.jsx)("p", {
																children: "Live Jobs"
															}), (0, a.jsx)("div", {
																className: "d-flex align-items-center gap-2",
																children: (0, a.jsxs)("h3", {
																	className: "odometer",
																	children: [" ", (0, a.jsx)(v.ZP, {
																		start: 0,
																		end: 20223,
																		enableScrollSpy: !0,
																		duration: 3
																	})]
																})
															})]
														})]
													})
												}), (0, a.jsx)("div", {
													className: "col-sm-6 mb-60",
													children: (0, a.jsxs)("div", {
														className: "counter-single two",
														children: [(0, a.jsx)("div", {
															className: "counter-icon",
															children: (0, a.jsx)("img", {
																src: "assets/images/icon/companies.svg",
																alt: "image"
															})
														}), (0, a.jsxs)("div", {
															className: "coundown",
															children: [(0, a.jsx)("p", {
																children: "Companies"
															}), (0, a.jsxs)("div", {
																className: "d-flex align-items-center gap-2",
																children: [(0, a.jsxs)("h3", {
																	className: "odometer",
																	children: [" ", (0, a.jsx)(v.ZP, {
																		start: 0,
																		end: 803,
																		enableScrollSpy: !0,
																		duration: 3
																	})]
																}), (0, a.jsx)("span", {
																	children: "+"
																})]
															})]
														})]
													})
												}), (0, a.jsx)("div", {
													className: "col-sm-6 d-flex",
													children: (0, a.jsxs)("div", {
														className: "counter-single three",
														children: [(0, a.jsx)("div", {
															className: "counter-icon",
															children: (0, a.jsx)("img", {
																src: "assets/images/icon/candidates.svg",
																alt: "image"
															})
														}), (0, a.jsxs)("div", {
															className: "coundown",
															children: [(0, a.jsx)("p", {
																children: "Candidates"
															}), (0, a.jsxs)("div", {
																className: "d-flex align-items-center gap-2",
																children: [(0, a.jsxs)("h3", {
																	className: "odometer",
																	children: [" ", (0, a.jsx)(v.ZP, {
																		start: 0,
																		end: 500,
																		enableScrollSpy: !0,
																		duration: 3
																	})]
																}), (0, a.jsx)("span", {
																	children: "+"
																})]
															})]
														})]
													})
												}), (0, a.jsx)("div", {
													className: "col-sm-6",
													children: (0, a.jsxs)("div", {
														className: "counter-single four",
														children: [(0, a.jsx)("div", {
															className: "counter-icon",
															children: (0, a.jsx)("img", {
																src: "assets/images/icon/new-jobs.svg",
																alt: "image"
															})
														}), (0, a.jsxs)("div", {
															className: "coundown",
															children: [(0, a.jsx)("p", {
																children: "New Jobs"
															}), (0, a.jsxs)("div", {
																className: "d-flex align-items-center gap-2",
																children: [(0, a.jsxs)("h3", {
																	className: "odometer",
																	children: [" ", (0, a.jsx)(v.ZP, {
																		start: 0,
																		end: 120,
																		enableScrollSpy: !0,
																		duration: 3
																	})]
																}), (0, a.jsx)("span", {
																	children: "+"
																})]
															})]
														})]
													})
												})]
											})
										})]
									})
								}), (0, a.jsx)("div", {
									className: "col-lg-6",
									children: (0, a.jsxs)(m.tq, { ...s,
										className: "swiper user-feedback-slider3",
										children: [(0, a.jsxs)("div", {
											className: "swiper-wrapper",
											children: [(0, a.jsx)(m.o5, {
												className: "swiper-slide",
												children: (0, a.jsxs)("div", {
													className: "user-feedback-wrap",
													children: [(0, a.jsxs)("div", {
														className: "user-feedback-top",
														children: [(0, a.jsxs)("div", {
															className: "author-area",
															children: [(0, a.jsx)("div", {
																className: "author-img",
																children: (0, a.jsx)("img", {
																	src: "assets/images/bg/testimonial-author3.png",
																	alt: ""
																})
															}), (0, a.jsxs)("div", {
																className: "author-content",
																children: [(0, a.jsx)("h5", {
																	children: "Samuel Hungary"
																}), (0, a.jsx)("span", {
																	children: "PHP Developer"
																})]
															})]
														}), (0, a.jsx)("div", {
															className: "reviews",
															children: (0, a.jsxs)("ul", {
																children: [(0, a.jsx)("li", {
																	children: (0, a.jsx)("i", {
																		className: "bi bi-star-fill"
																	})
																}), (0, a.jsx)("li", {
																	children: (0, a.jsx)("i", {
																		className: "bi bi-star-fill"
																	})
																}), (0, a.jsx)("li", {
																	children: (0, a.jsx)("i", {
																		className: "bi bi-star-fill"
																	})
																}), (0, a.jsx)("li", {
																	children: (0, a.jsx)("i", {
																		className: "bi bi-star-fill"
																	})
																}), (0, a.jsx)("li", {
																	children: (0, a.jsx)("i", {
																		className: "bi bi-star-half"
																	})
																})]
															})
														})]
													}), (0, a.jsx)("p", {
														children: '"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire".'
													})]
												})
											}), (0, a.jsx)(m.o5, {
												className: "swiper-slide",
												children: (0, a.jsxs)("div", {
													className: "user-feedback-wrap",
													children: [(0, a.jsxs)("div", {
														className: "user-feedback-top",
														children: [(0, a.jsxs)("div", {
															className: "author-area",
															children: [(0, a.jsx)("div", {
																className: "author-img",
																children: (0, a.jsx)("img", {
																	src: "assets/images/bg/testimonial-author2.png",
																	alt: ""
																})
															}), (0, a.jsxs)("div", {
																className: "author-content",
																children: [(0, a.jsx)("h5", {
																	children: "David Williumson"
																}), (0, a.jsx)("span", {
																	children: "WordPress Developer"
																})]
															})]
														}), (0, a.jsx)("div", {
															className: "reviews",
															children: (0, a.jsxs)("ul", {
																children: [(0, a.jsx)("li", {
																	children: (0, a.jsx)("i", {
																		className: "bi bi-star-fill"
																	})
																}), (0, a.jsx)("li", {
																	children: (0, a.jsx)("i", {
																		className: "bi bi-star-fill"
																	})
																}), (0, a.jsx)("li", {
																	children: (0, a.jsx)("i", {
																		className: "bi bi-star-fill"
																	})
																}), (0, a.jsx)("li", {
																	children: (0, a.jsx)("i", {
																		className: "bi bi-star-fill"
																	})
																}), (0, a.jsx)("li", {
																	children: (0, a.jsx)("i", {
																		className: "bi bi-star-half"
																	})
																})]
															})
														})]
													}), (0, a.jsx)("p", {
														children: '"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire".'
													})]
												})
											}), (0, a.jsx)(m.o5, {
												className: "swiper-slide",
												children: (0, a.jsxs)("div", {
													className: "user-feedback-wrap",
													children: [(0, a.jsxs)("div", {
														className: "user-feedback-top",
														children: [(0, a.jsxs)("div", {
															className: "author-area",
															children: [(0, a.jsx)("div", {
																className: "author-img",
																children: (0, a.jsx)("img", {
																	src: "assets/images/bg/testimonial-author1.png",
																	alt: ""
																})
															}), (0, a.jsxs)("div", {
																className: "author-content",
																children: [(0, a.jsx)("h5", {
																	children: "Jacoline Frankly"
																}), (0, a.jsx)("span", {
																	children: "UI/UX Engineer"
																})]
															})]
														}), (0, a.jsx)("div", {
															className: "reviews",
															children: (0, a.jsxs)("ul", {
																children: [(0, a.jsx)("li", {
																	children: (0, a.jsx)("i", {
																		className: "bi bi-star-fill"
																	})
																}), (0, a.jsx)("li", {
																	children: (0, a.jsx)("i", {
																		className: "bi bi-star-fill"
																	})
																}), (0, a.jsx)("li", {
																	children: (0, a.jsx)("i", {
																		className: "bi bi-star-fill"
																	})
																}), (0, a.jsx)("li", {
																	children: (0, a.jsx)("i", {
																		className: "bi bi-star-fill"
																	})
																}), (0, a.jsx)("li", {
																	children: (0, a.jsx)("i", {
																		className: "bi bi-star-half"
																	})
																})]
															})
														})]
													}), (0, a.jsx)("p", {
														children: '"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire".'
													})]
												})
											})]
										}), (0, a.jsx)("div", {
											className: "swiper-pagination-g"
										}), (0, a.jsxs)("div", {
											className: "swiper-btn-2",
											children: [(0, a.jsx)("div", {
												className: "swiper-prev prev-6",
												children: (0, a.jsx)("i", {
													className: "bi bi-chevron-left"
												})
											}), (0, a.jsx)("div", {
												className: "swiper-_next _next-6",
												children: (0, a.jsx)("i", {
													className: "bi bi-chevron-right"
												})
											})]
										})]
									})
								})]
							})
						})
					})
				},
				b = i(8004);
			let u = {
				activeMenu: "",
				menuOpen: !1,
				scrollY: 0
			};

			function y(s, e) {
				switch (e.type) {
					case "TOGGLE":
						if (s.activeMenu === e.payload) return { ...s,
							activeMenu: "",
							menuOpen: !s.menuOpen
						};
						return { ...s,
							activeMenu: e.payload,
							menuOpen: !s.menuOpen
						};
					case "HOME_ONE":
						return { ...s,
							activeMenu: "home-one",
							menuOpen: !s.menuOpen
						};
					case "ABOUT":
						return { ...s,
							activeMenu: "company",
							menuOpen: !s.menuOpen
						};
					case "PORTFOLIO":
						return { ...s,
							activeMenu: "job-list",
							menuOpen: !s.menuOpen
						};
					case "BLOG":
						return { ...s,
							activeMenu: "blog",
							menuOpen: !s.menuOpen
						};
					case "PAGES":
						return { ...s,
							activeMenu: "pages",
							menuOpen: !s.menuOpen
						};
					case "CONTACT":
						return { ...s,
							activeMenu: "contact.html",
							menuOpen: !s.menuOpen
						};
					case "setScrollY":
						return { ...s,
							scrollY: e.payload
						};
					default:
						return { ...s
						}
				}
			}
			var f = function() {
					let [s, e] = (0, r.useReducer)(y, u), i = (0, r.useRef)(null), l = () => {
						let {
							scrollY: s
						} = window;
						e({
							type: "setScrollY",
							payload: s
						})
					}, c = (0, n.useRouter)().pathname;

					function d(s) {
						e({
							type: "TOGGLE",
							payload: s
						})
					}
					return (0, r.useEffect)(() => (window.addEventListener("scroll", l), () => {
						window.removeEventListener("scroll", l)
					}), []), (0, r.useEffect)(() => {
						let s = document.querySelector(".mobile-menu-btn"),
							e = document.querySelector(".main-menu"),
							i = document.querySelector(".menu-close-btn");
						s.addEventListener("click", () => {
							e.classList.add("show-menu")
						}), i.addEventListener("click", () => {
							e.classList.remove("show-menu")
						})
					}), (0, a.jsxs)(a.Fragment, {
						children: [(0, a.jsxs)("div", {
							className: "top-bar2",
							children: [(0, a.jsxs)("p", {
								children: ["Welcome Our Job Portal!", " ", (0, a.jsx)(h(), {
									legacyBehavior: !0,
									href: "/candidates-dashboard/bookmark",
									children: (0, a.jsx)("a", {
										children: "Save Jobs"
									})
								})]
							}), (0, a.jsxs)("div", {
								className: "top-bar-right",
								children: [(0, a.jsxs)("div", {
									className: "language-select",
									children: [(0, a.jsx)("img", {
										src: "/assets/images/icon/flag-eng.svg",
										alt: "image"
									}), (0, a.jsx)("span", {
										children: "Language"
									}), (0, a.jsxs)("ul", {
										className: "topbar-sublist",
										children: [(0, a.jsxs)("li", {
											children: [(0, a.jsx)("img", {
												src: "/assets/images/icon/flag-germeny.svg",
												alt: "image"
											}), (0, a.jsx)("span", {
												children: "Germeny"
											})]
										}), (0, a.jsxs)("li", {
											children: [(0, a.jsx)("img", {
												src: "/assets/images/icon/flag-french.svg",
												alt: "image"
											}), (0, a.jsx)("span", {
												children: "French"
											})]
										}), (0, a.jsxs)("li", {
											children: [(0, a.jsx)("img", {
												src: "/assets/images/icon/flag-bangla.svg",
												alt: "image"
											}), (0, a.jsx)("span", {
												children: "Bengali"
											})]
										})]
									})]
								}), (0, a.jsx)("div", {
									className: "social-area",
									children: (0, a.jsxs)("ul", {
										children: [(0, a.jsx)("li", {
											children: (0, a.jsx)("a", {
												href: "https://www.facebook.com/",
												children: (0, a.jsx)("i", {
													className: "bx bxl-facebook"
												})
											})
										}), (0, a.jsx)("li", {
											children: (0, a.jsx)("a", {
												href: "https://twitter.com/",
												children: (0, a.jsx)("i", {
													className: "bx bxl-twitter"
												})
											})
										}), (0, a.jsx)("li", {
											children: (0, a.jsx)("a", {
												href: "https://www.linkedin.com/",
												children: (0, a.jsx)("i", {
													className: "bx bxl-linkedin"
												})
											})
										}), (0, a.jsx)("li", {
											children: (0, a.jsx)("a", {
												href: "https://www.instagram.com/",
												children: (0, a.jsx)("i", {
													className: "bx bxl-instagram"
												})
											})
										})]
									})
								})]
							})]
						}), (0, a.jsx)("header", {
							ref: i,
							className: s.scrollY > 120 ? "header-area style-3 sticky" : "header-area style-3",
							children: (0, a.jsxs)("div", {
								className: "menu-area",
								children: [(0, a.jsx)("div", {
									className: "header-logo",
									children: (0, a.jsx)(h(), {
										legacyBehavior: !0,
										href: "/",
										children: (0, a.jsx)("a", {
											children: (0, a.jsx)("img", {
												alt: "image",
												className: "img-fluid",
												src: "/assets/images/header1-logo.svg"
											})
										})
									})
								}), (0, a.jsxs)("div", {
									className: "main-menu",
									children: [(0, a.jsxs)("div", {
										className: "mobile-logo-area d-lg-none d-flex justify-content-between align-items-center",
										children: [(0, a.jsx)("div", {
											className: "mobile-logo-wrap",
											children: (0, a.jsx)(h(), {
												legacyBehavior: !0,
												href: "/",
												children: (0, a.jsx)("a", {
													children: (0, a.jsx)("img", {
														alt: "image",
														src: "/assets/images/header1-logo.svg"
													})
												})
											})
										}), (0, a.jsx)("div", {
											className: "menu-close-btn",
											children: (0, a.jsx)("i", {
												className: "bi bi-x-lg"
											})
										})]
									}), (0, a.jsxs)("ul", {
										className: "menu-list",
										children: [(0, a.jsxs)("li", {
											className: "menu-item-has-children active",
											children: [(0, a.jsx)("a", {
												href: "#",
												className: "drop-down",
												children: "Home"
											}), (0, a.jsx)("i", {
												className: "home-one" === s.activeMenu ? "bi bi-dash active dropdown-icon" : "bi bi-plus dropdown-icon",
												onClick: () => d("home-one")
											}), (0, a.jsxs)("ul", {
												className: "home-one" === s.activeMenu ? "sub-menu d-block" : "sub-menu",
												children: [(0, a.jsx)("li", {
													children: (0, a.jsx)(h(), {
														legacyBehavior: !0,
														href: "/",
														children: (0, a.jsx)("a", {
															children: "Home One"
														})
													})
												}), (0, a.jsx)("li", {
													children: (0, a.jsx)(h(), {
														legacyBehavior: !0,
														className: "active",
														href: "/index2",
														children: (0, a.jsx)("a", {
															children: " Home Two"
														})
													})
												}), (0, a.jsx)("li", {
													children: (0, a.jsx)(h(), {
														legacyBehavior: !0,
														href: "/index3",
														children: (0, a.jsx)("a", {
															className: "/index3" === c ? "active" : "",
															children: "Home Three"
														})
													})
												}), (0, a.jsx)("li", {
													children: (0, a.jsx)(h(), {
														legacyBehavior: !0,
														href: "/index4",
														children: (0, a.jsx)("a", {
															children: "Home Four"
														})
													})
												}), (0, a.jsx)("li", {
													children: (0, a.jsx)(h(), {
														legacyBehavior: !0,
														href: "/index5",
														children: (0, a.jsx)("a", {
															children: "Home Five"
														})
													})
												}), (0, a.jsx)("li", {
													children: (0, a.jsx)(h(), {
														legacyBehavior: !0,
														href: "/index6",
														children: (0, a.jsx)("a", {
															children: "Home Six"
														})
													})
												})]
											})]
										}), (0, a.jsxs)("li", {
											className: "menu-item-has-children",
											children: [(0, a.jsx)("a", {
												href: "#",
												className: "drop-down",
												children: "Find Jobs"
											}), (0, a.jsx)("i", {
												className: "job-list" === s.activeMenu ? "bi bi-dash active dropdown-icon" : "bi bi-plus dropdown-icon",
												onClick: () => d("job-list")
											}), (0, a.jsxs)("ul", {
												className: "job-list" === s.activeMenu ? "sub-menu d-block" : "sub-menu",
												children: [(0, a.jsx)("li", {
													children: (0, a.jsx)(h(), {
														legacyBehavior: !0,
														href: "/category",
														children: (0, a.jsx)("a", {
															children: "Job Category"
														})
													})
												}), (0, a.jsx)("li", {
													children: (0, a.jsx)(h(), {
														legacyBehavior: !0,
														href: "/job-listing1",
														children: (0, a.jsx)("a", {
															children: "Job Listing"
														})
													})
												}), (0, a.jsx)("li", {
													children: (0, a.jsx)(h(), {
														legacyBehavior: !0,
														href: "/job-details",
														children: (0, a.jsx)("a", {
															children: "Job Details"
														})
													})
												})]
											})]
										}), (0, a.jsxs)("li", {
											className: "menu-item-has-children",
											children: [(0, a.jsx)("a", {
												href: "#",
												className: "drop-down",
												children: "Pages"
											}), (0, a.jsx)("i", {
												className: "pages" === s.activeMenu ? "bi bi-dash active dropdown-icon" : "bi bi-plus dropdown-icon",
												onClick: () => d("pages")
											}), (0, a.jsxs)("ul", {
												className: "pages" === s.activeMenu ? "sub-menu d-block" : "sub-menu",
												children: [(0, a.jsx)("li", {
													children: (0, a.jsx)(h(), {
														legacyBehavior: !0,
														href: "/candidates-dashboard/dashboard",
														children: (0, a.jsx)("a", {
															children: "Candidate Dashboard"
														})
													})
												}), (0, a.jsx)("li", {
													children: (0, a.jsx)(h(), {
														legacyBehavior: !0,
														href: "/job-post",
														children: (0, a.jsx)("a", {
															children: "Post A Jobs"
														})
													})
												}), (0, a.jsx)("li", {
													children: (0, a.jsx)(h(), {
														legacyBehavior: !0,
														href: "/pricing-plan",
														children: (0, a.jsx)("a", {
															children: "Pricing Plan"
														})
													})
												}), (0, a.jsx)("li", {
													children: (0, a.jsx)(h(), {
														legacyBehavior: !0,
														href: "/faq",
														children: (0, a.jsx)("a", {
															children: "FAQ"
														})
													})
												}), (0, a.jsx)("li", {
													children: (0, a.jsx)(h(), {
														legacyBehavior: !0,
														href: "/error",
														children: (0, a.jsx)("a", {
															children: "Error"
														})
													})
												}), (0, a.jsx)("li", {
													children: (0, a.jsx)(h(), {
														legacyBehavior: !0,
														href: "/login",
														children: (0, a.jsx)("a", {
															children: "Login"
														})
													})
												}), (0, a.jsx)("li", {
													children: (0, a.jsx)(h(), {
														legacyBehavior: !0,
														href: "/register",
														children: (0, a.jsx)("a", {
															children: "Register"
														})
													})
												})]
											})]
										}), (0, a.jsxs)("li", {
											className: "menu-item-has-children",
											children: [(0, a.jsx)("a", {
												href: "#",
												children: "Employers"
											}), (0, a.jsx)("i", {
												className: "company" === s.activeMenu ? "bi bi-dash active dropdown-icon" : "bi bi-plus dropdown-icon",
												onClick: () => d("company")
											}), (0, a.jsxs)("ul", {
												className: "company" === s.activeMenu ? "sub-menu d-block" : "sub-menu",
												children: [(0, a.jsx)("li", {
													children: (0, a.jsx)(h(), {
														legacyBehavior: !0,
														href: "/company-listing1",
														children: (0, a.jsx)("a", {
															children: "Company Listing"
														})
													})
												}), (0, a.jsx)("li", {
													children: (0, a.jsx)(h(), {
														legacyBehavior: !0,
														href: "/company-details",
														children: (0, a.jsx)("a", {
															children: "Company Details"
														})
													})
												}), (0, a.jsx)("li", {
													children: (0, a.jsx)(h(), {
														legacyBehavior: !0,
														href: "/company/company-dashboard",
														children: (0, a.jsx)("a", {
															children: "Company Dashboard"
														})
													})
												})]
											})]
										}), (0, a.jsxs)("li", {
											className: "menu-item-has-children",
											children: [(0, a.jsx)("a", {
												href: "#",
												children: "Blog"
											}), (0, a.jsx)("i", {
												className: "blog" === s.activeMenu ? "bi bi-dash active dropdown-icon" : "bi bi-plus dropdown-icon",
												onClick: () => d("blog")
											}), (0, a.jsxs)("ul", {
												className: "blog" === s.activeMenu ? "sub-menu d-block" : "sub-menu",
												children: [(0, a.jsx)("li", {
													children: (0, a.jsx)(h(), {
														legacyBehavior: !0,
														href: "/blog-grid",
														children: (0, a.jsx)("a", {
															children: "Blog Grid"
														})
													})
												}), (0, a.jsx)("li", {
													children: (0, a.jsx)(h(), {
														legacyBehavior: !0,
														href: "/blog-right-sidebar",
														children: (0, a.jsx)("a", {
															children: "Blog Right Sidebar"
														})
													})
												}), (0, a.jsx)("li", {
													children: (0, a.jsx)(h(), {
														legacyBehavior: !0,
														href: "/blog-details",
														children: (0, a.jsx)("a", {
															children: "Blog Details"
														})
													})
												})]
											})]
										}), (0, a.jsx)("li", {
											children: (0, a.jsx)(h(), {
												legacyBehavior: !0,
												href: "/contact",
												children: (0, a.jsx)("a", {
													children: "Contact"
												})
											})
										})]
									}), (0, a.jsxs)("div", {
										className: "for-mobile-menu d-lg-none d-block",
										children: [(0, a.jsx)("div", {
											className: "sign-in-btn mb-25",
											children: (0, a.jsx)(h(), {
												legacyBehavior: !0,
												href: "/login",
												children: (0, a.jsxs)("a", {
													className: "primry-btn-1 lg-btn",
													children: [(0, a.jsx)("svg", {
														width: 15,
														height: 15,
														viewBox: "0 0 15 15",
														xmlns: "http://www.w3.org/2000/svg",
														children: (0, a.jsx)("path", {
															d: "M12.8033 2.19669C11.3868 0.780144 9.50329 0 7.5 0C5.49671 0 3.61324 0.780144 2.19669 2.19669C0.780144 3.61324 0 5.49671 0 7.5C0 9.50329 0.780144 11.3868 2.19669 12.8033C3.61324 14.2199 5.49671 15 7.5 15C9.50329 15 11.3868 14.2199 12.8033 12.8033C14.2199 11.3868 15 9.50329 15 7.5C15 5.49671 14.2199 3.61324 12.8033 2.19669ZM3.25504 12.5771C3.50269 10.4462 5.33478 8.80096 7.5 8.80096C8.64143 8.80096 9.71478 9.24568 10.5222 10.0529C11.2042 10.7351 11.6344 11.6258 11.7451 12.5769C10.5949 13.5402 9.11407 14.1211 7.5 14.1211C5.88593 14.1211 4.40517 13.5403 3.25504 12.5771ZM7.5 7.89574C6.24401 7.89574 5.22205 6.87378 5.22205 5.61779C5.22205 4.36169 6.24401 3.33984 7.5 3.33984C8.75599 3.33984 9.77795 4.36169 9.77795 5.61779C9.77795 6.87378 8.75599 7.89574 7.5 7.89574ZM12.5015 11.834C12.2776 10.9311 11.8105 10.0985 11.1436 9.43153C10.6034 8.89137 9.96437 8.48614 9.26743 8.23219C10.1052 7.66399 10.6569 6.70406 10.6569 5.61779C10.6569 3.87714 9.24065 2.46094 7.5 2.46094C5.75935 2.46094 4.34315 3.87714 4.34315 5.61779C4.34315 6.70464 4.89521 7.66491 5.73372 8.23299C5.09251 8.46668 4.49913 8.82797 3.98861 9.30359C3.24932 9.99207 2.73594 10.8699 2.4979 11.8333C1.48979 10.6712 0.878906 9.15562 0.878906 7.5C0.878906 3.84911 3.84911 0.878906 7.5 0.878906C11.1509 0.878906 14.1211 3.84911 14.1211 7.5C14.1211 9.15596 13.51 10.6718 12.5015 11.834Z"
														})
													}), "Sign In"]
												})
											})
										}), (0, a.jsx)("div", {
											className: "post-job-btn mb-30",
											children: (0, a.jsx)(h(), {
												legacyBehavior: !0,
												href: "/job-post",
												children: (0, a.jsxs)("a", {
													className: "primry-btn-2 lg-btn",
													children: [(0, a.jsxs)("svg", {
														width: 15,
														height: 13,
														viewBox: "0 0 15 13",
														xmlns: "http://www.w3.org/2000/svg",
														children: ["j", (0, a.jsx)("path", {
															d: "M10.1367 0H4.86329C4.66914 0 4.51173 0.151188 4.51173 0.337662V1.79366H1.43168C0.642247 1.79363 0 2.41049 0 3.16868V11.6249C0 12.3831 0.642247 13 1.43168 13H13.5683C14.3578 13 15 12.3831 15 11.6249V3.16868C15 2.41049 14.3578 1.79363 13.5683 1.79363H10.4883V0.337662C10.4883 0.15116 10.3309 0 10.1367 0ZM5.21485 0.675325H9.78518V1.79366H5.21485V0.675325ZM13.5683 12.3247H1.43168C1.02996 12.3247 0.703126 12.0108 0.703126 11.625V5.31469L5.6836 7.11899V8.14608C5.6836 8.33255 5.84102 8.48374 6.03517 8.48374H8.96486C9.15901 8.48374 9.31642 8.33255 9.31642 8.14608V7.11899L14.2969 5.31472V11.625C14.2969 12.0108 13.9701 12.3247 13.5683 12.3247ZM6.38673 7.80841V6.79543H8.6133V7.80841H6.38673ZM14.2969 3.16868V4.59294L9.3108 6.39926C9.28191 6.24073 9.13821 6.1201 8.96486 6.1201H6.03517C5.86182 6.1201 5.71812 6.2407 5.68923 6.39926L0.703126 4.59297V3.16868C0.703126 2.78284 1.02993 2.46896 1.43168 2.46896H13.5683C13.9701 2.46896 14.2969 2.78284 14.2969 3.16868ZM13.4071 11.0443C13.4071 11.2308 13.2497 11.382 13.0555 11.382H10.1697C9.97558 11.382 9.81816 11.2308 9.81816 11.0443C9.81816 10.8578 9.97558 10.7067 10.1697 10.7067H13.0555C13.2497 10.7067 13.4071 10.8578 13.4071 11.0443ZM1.89337 3.67202C1.89337 3.48555 2.05079 3.33436 2.24494 3.33436H4.09064C4.28479 3.33436 4.44221 3.48555 4.44221 3.67202C4.44221 3.8585 4.28479 4.00968 4.09064 4.00968H2.24494C2.05079 4.00968 1.89337 3.8585 1.89337 3.67202Z"
														})]
													}), "Post Job"]
												})
											})
										}), (0, a.jsx)("div", {
											className: "social-area",
											children: (0, a.jsxs)("ul", {
												children: [(0, a.jsx)("li", {
													children: (0, a.jsx)("a", {
														href: "https://www.facebook.com/",
														children: (0, a.jsx)("i", {
															className: "bx bxl-facebook"
														})
													})
												}), (0, a.jsx)("li", {
													children: (0, a.jsx)("a", {
														href: "https://twitter.com/",
														children: (0, a.jsx)("i", {
															className: "bx bxl-twitter"
														})
													})
												}), (0, a.jsx)("li", {
													children: (0, a.jsx)("a", {
														href: "https://www.linkedin.com/",
														children: (0, a.jsx)("i", {
															className: "bx bxl-linkedin"
														})
													})
												}), (0, a.jsx)("li", {
													children: (0, a.jsx)("a", {
														href: "https://www.instagram.com/",
														children: (0, a.jsx)("i", {
															className: "bx bxl-instagram"
														})
													})
												})]
											})
										})]
									})]
								}), (0, a.jsxs)("div", {
									className: "nav-right d-flex jsutify-content-end align-items-center",
									children: [(0, a.jsxs)("ul", {
										children: [(0, a.jsx)("li", {
											children: (0, a.jsxs)("div", {
												className: "btn-group dropdown",
												children: [(0, a.jsxs)("div", {
													className: "notifications-area dropdown-toggle",
													role: "button",
													id: "dropdownMenuButton2",
													"data-bs-toggle": "dropdown",
													"aria-expanded": "false",
													children: [(0, a.jsx)("div", {
														className: "notifacation-icon",
														children: (0, a.jsxs)("svg", {
															width: 16,
															height: 18,
															viewBox: "0 0 16 18",
															xmlns: "http://www.w3.org/2000/svg",
															children: [(0, a.jsx)("path", {
																d: "M8.37408 0.0465755C8.67279 0.120485 8.89683 0.247189 9.12442 0.472435C9.4907 0.834944 9.60093 1.15874 9.60093 1.89079V2.33777L9.87831 2.43983C11.5497 3.05223 12.8263 4.40723 13.3028 6.08603C13.47 6.66323 13.4806 6.81809 13.5126 8.47929C13.5446 10.2109 13.5624 10.4326 13.7651 11.2597C13.9856 12.1501 14.3874 13.0546 14.9102 13.836C15.1378 14.1773 15.344 14.4378 15.8739 15.0431C16.0872 15.2895 16.009 15.6872 15.7174 15.835C15.5823 15.9019 15.5147 15.9054 13.093 15.9054H10.6038L10.5824 16.0251C10.49 16.5143 10.0561 17.1478 9.56537 17.5068C9.34845 17.6652 8.95728 17.8517 8.67635 17.9327C8.38831 18.0136 7.68776 18.0242 7.39616 17.9502C6.50002 17.7285 5.7568 17.0528 5.48654 16.2187L5.38696 15.9054H2.90481C0.490226 15.9054 0.419104 15.9019 0.283973 15.835C0.191514 15.7893 0.116836 15.7154 0.0706072 15.6239C-0.0645256 15.3634 -0.0111828 15.1769 0.280416 14.8672C1.18722 13.9063 1.90911 12.5795 2.23627 11.2597C2.43896 10.4432 2.4603 10.2144 2.48875 8.47929C2.52075 6.81457 2.53142 6.66675 2.69856 6.08251C3.17152 4.41075 4.50861 2.99943 6.15864 2.42224L6.40045 2.33777V1.89079C6.40045 1.16226 6.51069 0.834944 6.88052 0.468916C7.27881 0.0712128 7.83711 -0.0871639 8.37408 0.0465755ZM7.75177 1.12354C7.5384 1.23265 7.46728 1.39806 7.46728 1.79929V2.1266H8.00069H8.53411V1.79225C8.53055 1.39806 8.47721 1.26432 8.26384 1.13762C8.09315 1.03555 7.93668 1.03204 7.75177 1.12354ZM7.3606 3.21764C6.84852 3.29507 6.53203 3.39362 6.06262 3.61887C4.80732 4.22774 3.95742 5.30822 3.64448 6.68435C3.59469 6.89903 3.57691 7.25098 3.55558 8.54968C3.53068 9.88708 3.51646 10.225 3.45601 10.6086C3.22842 12.0375 2.74834 13.2799 1.98023 14.4167C1.84154 14.6243 1.71708 14.8073 1.71352 14.8214C1.70641 14.839 4.53706 14.8496 8.00069 14.8496C11.4643 14.8496 14.295 14.839 14.2879 14.8214C14.2808 14.8073 14.1598 14.6243 14.0212 14.4167C13.2566 13.2834 12.7694 12.0234 12.5454 10.6121C12.4849 10.2285 12.4707 9.88357 12.4458 8.54968C12.4245 7.25098 12.4067 6.89903 12.3569 6.68435C12.1578 5.80447 11.7595 5.08297 11.1336 4.46354C10.7389 4.0764 10.3762 3.82299 9.8712 3.58367C9.09241 3.21764 8.20695 3.08742 7.3606 3.21764ZM6.50713 15.9265C6.50713 16.0145 6.76673 16.3982 6.91609 16.5319C7.5384 17.095 8.44876 17.1021 9.07108 16.5495C9.23821 16.3982 9.43024 16.1307 9.47647 15.9829L9.49781 15.9054H8.00425C7.17924 15.9054 6.50713 15.916 6.50713 15.9265Z"
															}), (0, a.jsx)("path", {
																d: "M13.5626 1.8943C13.6764 1.97173 14.1102 2.4363 14.3485 2.7425C15.2411 3.88986 15.8314 5.3786 15.963 6.82511C16.0199 7.43751 16.0127 7.64868 15.931 7.81057C15.8492 7.96895 15.6465 8.09213 15.4687 8.09213C15.1557 8.09213 14.9352 7.83169 14.9352 7.46214C14.9352 7.14891 14.8712 6.56819 14.7894 6.17401C14.5654 5.07593 13.9787 3.90393 13.2425 3.08389C12.7874 2.5806 12.766 2.54541 12.766 2.34128C12.766 2.14067 12.8407 1.99989 13.0007 1.8943C13.1394 1.8028 13.4239 1.80631 13.5626 1.8943Z"
															}), (0, a.jsx)("path", {
																d: "M3.00065 1.8943C3.16067 1.99989 3.23535 2.14067 3.23535 2.3448C3.23535 2.54541 3.22824 2.55597 2.74461 3.10149C2.01206 3.92505 1.43241 5.08648 1.21194 6.17401C1.13014 6.56819 1.06614 7.14891 1.06614 7.46214C1.06614 7.83169 0.845657 8.09213 0.532721 8.09213C0.354917 8.09213 0.152219 7.96895 0.0704293 7.81057C-0.0113609 7.6522 -0.0184731 7.43399 0.0348682 6.84271C0.173556 5.36452 0.781648 3.84058 1.6849 2.70731C1.96583 2.35536 2.3001 1.99285 2.42456 1.90486C2.57392 1.8028 2.85129 1.79928 3.00065 1.8943Z"
															})]
														})
													}), (0, a.jsx)("span", {
														children: "5"
													})]
												}), (0, a.jsxs)("div", {
													className: "notifacion-card dropdown-menu",
													"aria-labelledby": "dropdownMenuButton2",
													children: [(0, a.jsx)("h6", {
														className: "title",
														children: "5 Notifications"
													}), (0, a.jsxs)("ul", {
														children: [(0, a.jsxs)("li", {
															children: [(0, a.jsx)("div", {
																className: "icon",
																children: (0, a.jsx)("img", {
																	src: "/assets/images/bg/company-logo/notifacion-1.png",
																	alt: ""
																})
															}), (0, a.jsxs)("div", {
																className: "content",
																children: [(0, a.jsx)("h6", {
																	children: (0, a.jsx)("a", {
																		href: "#",
																		children: "Your application has accepted in 5 vacancies."
																	})
																}), (0, a.jsxs)("span", {
																	children: [(0, a.jsx)("img", {
																		src: "/assets/images/icon/clock-1.svg",
																		alt: ""
																	}), " ", "10 min ago"]
																})]
															})]
														}), (0, a.jsxs)("li", {
															children: [(0, a.jsx)("div", {
																className: "icon",
																children: (0, a.jsx)("img", {
																	src: "/assets/images/bg/company-logo/notifacion-2.png",
																	alt: ""
																})
															}), (0, a.jsxs)("div", {
																className: "content",
																children: [(0, a.jsx)("h6", {
																	children: (0, a.jsx)("a", {
																		href: "#",
																		children: "Your application has accepted in 5 vacancies."
																	})
																}), (0, a.jsxs)("span", {
																	children: [(0, a.jsx)("img", {
																		src: "/assets/images/icon/clock-1.svg",
																		alt: ""
																	}), " ", "10 min ago"]
																})]
															})]
														}), (0, a.jsxs)("li", {
															children: [(0, a.jsx)("div", {
																className: "icon",
																children: (0, a.jsx)("img", {
																	src: "/assets/images/bg/company-logo/notifacion-3.png",
																	alt: ""
																})
															}), (0, a.jsxs)("div", {
																className: "content",
																children: [(0, a.jsx)("h6", {
																	children: (0, a.jsx)("a", {
																		href: "#",
																		children: "Your application has accepted in 5 vacancies."
																	})
																}), (0, a.jsxs)("span", {
																	children: [(0, a.jsx)("img", {
																		src: "/assets/images/icon/clock-1.svg",
																		alt: ""
																	}), " ", "10 min ago"]
																})]
															})]
														})]
													}), (0, a.jsx)("div", {
														className: "view-all",
														children: (0, a.jsx)("a", {
															href: "#",
															children: "See All Notifications"
														})
													})]
												})]
											})
										}), (0, a.jsx)("li", {
											className: "d-md-flex d-none",
											children: (0, a.jsx)("div", {
												className: "sign-in-btn",
												children: (0, a.jsx)(h(), {
													legacyBehavior: !0,
													href: "/login",
													children: (0, a.jsxs)("a", {
														className: "primry-btn-1 lg-btn",
														children: [(0, a.jsx)("svg", {
															width: 15,
															height: 15,
															viewBox: "0 0 15 15",
															xmlns: "http://www.w3.org/2000/svg",
															children: (0, a.jsx)("path", {
																d: "M12.8033 2.19669C11.3868 0.780144 9.50329 0 7.5 0C5.49671 0 3.61324 0.780144 2.19669 2.19669C0.780144 3.61324 0 5.49671 0 7.5C0 9.50329 0.780144 11.3868 2.19669 12.8033C3.61324 14.2199 5.49671 15 7.5 15C9.50329 15 11.3868 14.2199 12.8033 12.8033C14.2199 11.3868 15 9.50329 15 7.5C15 5.49671 14.2199 3.61324 12.8033 2.19669ZM3.25504 12.5771C3.50269 10.4462 5.33478 8.80096 7.5 8.80096C8.64143 8.80096 9.71478 9.24568 10.5222 10.0529C11.2042 10.7351 11.6344 11.6258 11.7451 12.5769C10.5949 13.5402 9.11407 14.1211 7.5 14.1211C5.88593 14.1211 4.40517 13.5403 3.25504 12.5771ZM7.5 7.89574C6.24401 7.89574 5.22205 6.87378 5.22205 5.61779C5.22205 4.36169 6.24401 3.33984 7.5 3.33984C8.75599 3.33984 9.77795 4.36169 9.77795 5.61779C9.77795 6.87378 8.75599 7.89574 7.5 7.89574ZM12.5015 11.834C12.2776 10.9311 11.8105 10.0985 11.1436 9.43153C10.6034 8.89137 9.96437 8.48614 9.26743 8.23219C10.1052 7.66399 10.6569 6.70406 10.6569 5.61779C10.6569 3.87714 9.24065 2.46094 7.5 2.46094C5.75935 2.46094 4.34315 3.87714 4.34315 5.61779C4.34315 6.70464 4.89521 7.66491 5.73372 8.23299C5.09251 8.46668 4.49913 8.82797 3.98861 9.30359C3.24932 9.99207 2.73594 10.8699 2.4979 11.8333C1.48979 10.6712 0.878906 9.15562 0.878906 7.5C0.878906 3.84911 3.84911 0.878906 7.5 0.878906C11.1509 0.878906 14.1211 3.84911 14.1211 7.5C14.1211 9.15596 13.51 10.6718 12.5015 11.834Z"
															})
														}), "Sign In"]
													})
												})
											})
										}), (0, a.jsx)("li", {
											className: "d-md-flex d-none",
											children: (0, a.jsx)("div", {
												className: "post-job-btn",
												children: (0, a.jsx)(h(), {
													legacyBehavior: !0,
													href: "/job-post",
													children: (0, a.jsxs)("a", {
														className: "primry-btn-2 lg-btn",
														children: ["Post Job", (0, a.jsx)("svg", {
															width: 15,
															height: 13,
															viewBox: "0 0 15 13",
															xmlns: "http://www.w3.org/2000/svg",
															children: (0, a.jsx)("path", {
																d: "M10.1367 0H4.86329C4.66914 0 4.51173 0.151188 4.51173 0.337662V1.79366H1.43168C0.642247 1.79363 0 2.41049 0 3.16868V11.6249C0 12.3831 0.642247 13 1.43168 13H13.5683C14.3578 13 15 12.3831 15 11.6249V3.16868C15 2.41049 14.3578 1.79363 13.5683 1.79363H10.4883V0.337662C10.4883 0.15116 10.3309 0 10.1367 0ZM5.21485 0.675325H9.78518V1.79366H5.21485V0.675325ZM13.5683 12.3247H1.43168C1.02996 12.3247 0.703126 12.0108 0.703126 11.625V5.31469L5.6836 7.11899V8.14608C5.6836 8.33255 5.84102 8.48374 6.03517 8.48374H8.96486C9.15901 8.48374 9.31642 8.33255 9.31642 8.14608V7.11899L14.2969 5.31472V11.625C14.2969 12.0108 13.9701 12.3247 13.5683 12.3247ZM6.38673 7.80841V6.79543H8.6133V7.80841H6.38673ZM14.2969 3.16868V4.59294L9.3108 6.39926C9.28191 6.24073 9.13821 6.1201 8.96486 6.1201H6.03517C5.86182 6.1201 5.71812 6.2407 5.68923 6.39926L0.703126 4.59297V3.16868C0.703126 2.78284 1.02993 2.46896 1.43168 2.46896H13.5683C13.9701 2.46896 14.2969 2.78284 14.2969 3.16868ZM13.4071 11.0443C13.4071 11.2308 13.2497 11.382 13.0555 11.382H10.1697C9.97558 11.382 9.81816 11.2308 9.81816 11.0443C9.81816 10.8578 9.97558 10.7067 10.1697 10.7067H13.0555C13.2497 10.7067 13.4071 10.8578 13.4071 11.0443ZM1.89337 3.67202C1.89337 3.48555 2.05079 3.33436 2.24494 3.33436H4.09064C4.28479 3.33436 4.44221 3.48555 4.44221 3.67202C4.44221 3.8585 4.28479 4.00968 4.09064 4.00968H2.24494C2.05079 4.00968 1.89337 3.8585 1.89337 3.67202Z"
															})
														})]
													})
												})
											})
										})]
									}), (0, a.jsx)("div", {
										className: "sidebar-button mobile-menu-btn ",
										children: (0, a.jsx)("i", {
											className: "bi bi-list"
										})
									})]
								})]
							})
						})]
					})
				},
				w = i(763),
				V = function() {
					return (0, a.jsx)("div", {
						className: "home3-work-area mb-120",
						children: (0, a.jsxs)("div", {
							className: "container",
							children: [(0, a.jsx)("div", {
								className: "row mb-60",
								children: (0, a.jsx)("div", {
									className: "col-12 d-flex justify-content-center",
									children: (0, a.jsxs)("div", {
										className: "section-title1 text-center",
										children: [(0, a.jsxs)("h2", {
											children: ["How It ", (0, a.jsx)("span", {
												children: "Works"
											})]
										}), (0, a.jsx)("p", {
											children: "To choose your trending job dream & to make future bright."
										})]
									})
								})
							}), (0, a.jsxs)("div", {
								className: "row g-4 justify-content-center",
								children: [(0, a.jsx)("div", {
									className: "col-lg-3 col-md-4 col-sm-6",
									children: (0, a.jsxs)("div", {
										className: "single-work-area",
										children: [(0, a.jsx)("div", {
											className: "work-icon",
											children: (0, a.jsxs)("svg", {
												width: 28,
												height: 28,
												viewBox: "0 0 28 28",
												xmlns: "http://www.w3.org/2000/svg",
												children: [(0, a.jsx)("path", {
													d: "M5.1811 24.8071C4.93126 24.8071 4.72949 24.6052 4.72949 24.3555V22.1782C4.72949 21.9286 4.93126 21.7266 5.1811 21.7266C5.43072 21.7266 5.6327 21.9286 5.6327 22.1782V24.3555C5.6327 24.6047 5.43028 24.8071 5.1811 24.8071Z"
												}), (0, a.jsx)("path", {
													d: "M14.6884 25.4714H0.451606C0.201767 25.4714 0 25.2696 0 25.0198V20.5967C0 16.5227 2.49839 12.8778 6.21642 11.5278C6.37033 11.4714 6.54145 11.5036 6.66427 11.6097C7.68987 12.488 8.98383 12.9722 10.3084 12.9722C11.6392 12.9722 12.9371 12.4853 13.9632 11.6006C14.0869 11.4945 14.2595 11.4624 14.4126 11.5184C15.3727 11.8677 16.2673 12.3757 17.0715 13.0291C17.1818 13.118 17.2437 13.254 17.2382 13.3958C17.2334 13.5372 17.1623 13.6686 17.0464 13.7495L16.9917 13.7879L16.7434 13.4337L16.5026 13.7306C15.8437 13.1954 15.1184 12.7685 14.3429 12.4586C13.1883 13.3742 11.7662 13.8759 10.3084 13.8759C8.85725 13.8759 7.43937 13.3777 6.28632 12.4681C3.05606 13.7557 0.903212 16.9893 0.903212 20.5967V24.5682H14.6884V25.4714Z"
												}), (0, a.jsx)("path", {
													d: "M10.3081 13.8754C6.63462 13.8754 3.64648 10.7629 3.64648 6.93782C3.64648 3.11256 6.63462 0 10.3081 0C13.9814 0 16.9702 3.11212 16.9702 6.93715C16.9702 10.7624 13.9814 13.8754 10.3081 13.8754ZM10.3081 0.903226C7.13276 0.903226 4.5497 3.61026 4.5497 6.93715C4.5497 10.2647 7.13276 12.9717 10.3081 12.9717C13.4832 12.9717 16.067 10.2647 16.067 6.93715C16.067 3.61026 13.4832 0.903226 10.3081 0.903226Z"
												}), (0, a.jsx)("path", {
													d: "M20.1447 23.2133C19.9564 23.2133 19.7672 23.1963 19.5789 23.1615C18.7502 23.0075 18.0263 22.5297 17.5394 21.8148C17.0554 21.1016 16.8715 20.2471 17.0218 19.4099C17.1731 18.5708 17.6432 17.8369 18.3456 17.3428C19.0505 16.8475 19.896 16.6609 20.7255 16.8131C21.5547 16.9672 22.2782 17.4453 22.7639 18.1602L22.7677 18.1653C23.2469 18.8905 23.4292 19.7433 23.2821 20.5647C23.1306 21.4033 22.6612 22.1372 21.9584 22.6313C21.4133 23.0142 20.7846 23.2133 20.1447 23.2133ZM20.1606 17.664C19.7044 17.664 19.2556 17.8067 18.8653 18.0817C18.3586 18.4376 18.0199 18.966 17.9116 19.5697C17.8031 20.1731 17.9367 20.7901 18.2874 21.3072C18.6369 21.821 19.1544 22.1639 19.7443 22.2737C20.3313 22.3819 20.9341 22.2474 21.4391 21.8924C21.9458 21.5365 22.2845 21.0081 22.3928 20.4048C22.4989 19.8136 22.3648 19.1957 22.0153 18.6652C21.6667 18.1527 21.15 17.8102 20.5606 17.7011C20.427 17.6766 20.2938 17.664 20.1606 17.664Z"
												}), (0, a.jsx)("path", {
													d: "M20.2588 28.0001C20.2014 28.0001 20.1432 27.9948 20.0854 27.9842L17.4384 27.4938C16.9328 27.3998 16.6084 26.9266 16.7002 26.4163L16.9114 25.2403C16.8821 25.2209 16.8541 25.2011 16.8281 25.1812L16.7941 25.159L15.8172 25.8459C15.6406 25.981 15.3941 26.0419 15.1548 26.0018C14.9076 25.9614 14.6856 25.8192 14.5447 25.6115L13.0192 23.3679C12.886 23.1869 12.8291 22.9457 12.8692 22.7027C12.9094 22.4574 13.0481 22.2356 13.2503 22.0938L14.2064 21.4038C14.1987 21.3668 14.1923 21.3315 14.1866 21.2986C14.1833 21.2819 14.1806 21.2647 14.178 21.247L13.0236 21.0331C12.787 20.9888 12.5742 20.847 12.4406 20.6433C12.3034 20.4338 12.2595 20.1835 12.316 19.9383L12.7956 17.2694C12.8403 17.02 12.9753 16.8063 13.1766 16.667C13.3768 16.5283 13.6216 16.4771 13.8664 16.5223L15.0122 16.7351C15.03 16.7067 15.0485 16.6795 15.0671 16.6542L15.0955 16.6081L14.4141 15.6061C14.2814 15.4259 14.2245 15.1851 14.2637 14.9421C14.3039 14.6969 14.4426 14.4748 14.6443 14.3324L16.8532 12.7797C17.0303 12.6452 17.2772 12.5857 17.5158 12.6241C17.7628 12.6642 17.9851 12.8064 18.126 13.0141L18.8038 14.0109C18.8164 14.0078 18.829 14.0043 18.8413 14.0009C18.8561 13.9965 18.8715 13.9928 18.8872 13.9901C18.9031 13.9871 18.9194 13.9842 18.9357 13.982L19.1474 12.8038C19.193 12.5535 19.328 12.3405 19.5295 12.2009C19.7291 12.0626 19.9734 12.0121 20.2186 12.0569L22.8529 12.5451C23.3587 12.6388 23.6829 13.1123 23.5911 13.6225L23.3794 14.7985C23.4092 14.8179 23.4372 14.8378 23.4634 14.8576L23.4972 14.8799L24.474 14.193C24.6511 14.0583 24.8981 13.9983 25.1367 14.0371C25.3837 14.0772 25.6059 14.2195 25.7468 14.4274L27.2604 16.67C27.3923 16.8489 27.4492 17.0897 27.4099 17.3325C27.3698 17.5777 27.2311 17.8 27.0293 17.9422L26.043 18.635C26.047 18.6531 26.0511 18.6708 26.0556 18.6873C26.0597 18.7019 26.0633 18.7162 26.0655 18.7316C26.0688 18.7493 26.0719 18.7669 26.0745 18.785L27.2284 18.9989C27.6909 19.0849 28.0148 19.5129 27.9994 20.0157C27.9985 20.0377 27.9963 20.0598 27.9921 20.0816L27.5085 22.7728C27.4633 23.0224 27.3283 23.2361 27.1264 23.3757C26.9259 23.5137 26.682 23.5631 26.4368 23.5192L25.2919 23.3064C25.2738 23.3349 25.2553 23.362 25.2368 23.3873L25.2083 23.433L25.8899 24.4355C26.0231 24.6167 26.08 24.8577 26.0399 25.1007C25.9995 25.346 25.8611 25.5678 25.6586 25.7096L23.4507 27.2618C23.2738 27.3967 23.0277 27.4572 22.7882 27.4179C22.5417 27.3773 22.3194 27.2355 22.1781 27.0283L21.5035 26.0355C21.474 26.0415 21.4451 26.047 21.4171 26.0523C21.401 26.0549 21.3851 26.0582 21.3684 26.0604L21.1567 27.2382C21.1119 27.4876 20.977 27.701 20.7754 27.8406C20.6224 27.9454 20.444 28.0001 20.2588 28.0001ZM16.7976 24.1528C16.9083 24.1528 17.0186 24.1935 17.1048 24.2734C17.1509 24.3159 17.2038 24.3479 17.2565 24.3827L17.3599 24.4513C17.4051 24.4848 17.472 24.5303 17.6029 24.5909C17.7895 24.6771 17.8947 24.8785 17.8581 25.0809L17.5895 26.5762L20.2502 27.096L20.5366 25.5821C20.5681 25.4059 20.7 25.2661 20.874 25.2231C20.9668 25.2006 21.0581 25.1883 21.1463 25.1775C21.1831 25.1726 21.2193 25.1684 21.2542 25.1623C21.3088 25.1521 21.4416 25.1274 21.5269 25.0935C21.7247 25.0145 21.9501 25.0835 22.0689 25.2584L22.9256 26.5189L25.1393 24.9693L24.2853 23.6822C24.1689 23.5106 24.1836 23.2817 24.3223 23.1271C24.3645 23.0802 24.396 23.0259 24.4304 22.9719L24.4981 22.8672C24.5309 22.8215 24.5761 22.7523 24.6372 22.6173C24.7221 22.4277 24.923 22.322 25.1316 22.358L26.602 22.6308L27.0957 19.9628C27.0915 19.9167 27.0721 19.8891 27.0635 19.8873L25.5931 19.6146C25.4176 19.5819 25.2776 19.4487 25.2364 19.2745C25.2139 19.181 25.2026 19.0897 25.1918 19.0022C25.1881 18.97 25.1845 18.938 25.1799 18.9078C25.1678 18.8613 25.157 18.8126 25.147 18.7623C25.1362 18.7109 25.1272 18.6571 25.1087 18.6088C25.0324 18.415 25.0992 18.1947 25.269 18.0745L26.5091 17.203L24.9984 14.9335L23.7534 15.8039C23.5786 15.9263 23.3428 15.9104 23.1865 15.7655C23.1406 15.7229 23.0877 15.691 23.0348 15.6561L22.9314 15.5875C22.8862 15.554 22.8189 15.5079 22.6884 15.448C22.5016 15.3626 22.3962 15.1602 22.4328 14.958L22.702 13.4627L20.0541 12.9451L19.7679 14.459C19.7364 14.6343 19.605 14.7745 19.4323 14.8175C19.3388 14.8404 19.2482 14.8528 19.16 14.8636C19.1293 14.8676 19.0991 14.8713 19.0702 14.8757C19.0237 14.8881 18.975 14.8993 18.9258 14.9097C18.8764 14.92 18.825 14.9291 18.7798 14.9472C18.5829 15.029 18.3562 14.9593 18.236 14.7831L17.3793 13.5226L15.1656 15.0718L16.0197 16.3589C16.1365 16.5309 16.1211 16.7605 15.9817 16.9148C15.9401 16.9613 15.909 17.0147 15.875 17.0683L15.8069 17.1741C15.774 17.2196 15.7288 17.2888 15.6677 17.4238C15.5828 17.6134 15.3833 17.719 15.1734 17.6831L13.7028 17.4103L13.202 20.12L14.6602 20.417C14.8355 20.4497 14.9751 20.5824 15.017 20.7557C15.0395 20.8501 15.0514 20.9418 15.0622 21.0303C15.0666 21.0682 15.0713 21.1052 15.077 21.141C15.0865 21.1948 15.1105 21.3324 15.1453 21.4223C15.2208 21.6142 15.1562 21.8325 14.989 21.9529L13.7747 22.8292L15.2924 25.1029L16.5385 24.2341C16.6166 24.1799 16.7074 24.1528 16.7976 24.1528Z"
												})]
											})
										}), (0, a.jsxs)("div", {
											className: "content",
											children: [(0, a.jsx)("h5", {
												children: (0, a.jsx)(h(), {
													legacyBehavior: !0,
													href: "/register",
													children: (0, a.jsx)("a", {
														children: "Account Create"
													})
												})
											}), (0, a.jsx)("p", {
												children: "To create your account be confident & safely."
											})]
										})]
									})
								}), (0, a.jsx)("div", {
									className: "col-lg-3 col-md-4 col-sm-6",
									children: (0, a.jsxs)("div", {
										className: "single-work-area",
										children: [(0, a.jsx)("div", {
											className: "work-icon",
											children: (0, a.jsxs)("svg", {
												width: 28,
												height: 28,
												viewBox: "0 0 28 28",
												xmlns: "http://www.w3.org/2000/svg",
												children: [(0, a.jsx)("path", {
													d: "M22.6412 8.13498C22.9432 8.13498 23.1881 7.89014 23.1881 7.5881V1.64067C23.1881 0.736004 22.4521 0 21.5475 0H1.64067C0.736004 0 0 0.736004 0 1.64067V26.3601C0 27.2648 0.736004 28.0008 1.64067 28.0008H21.5475C22.4521 28.0008 23.1881 27.2648 23.1881 26.3601V22.331C23.1881 22.029 22.9432 21.7842 22.6412 21.7842C22.3392 21.7842 22.0943 22.029 22.0943 22.331V26.3601C22.0943 26.6616 21.849 26.907 21.5475 26.907H1.64067C1.33911 26.907 1.09378 26.6616 1.09378 26.3601V1.64067C1.09378 1.33911 1.33911 1.09378 1.64067 1.09378H21.5475C21.849 1.09378 22.0943 1.33911 22.0943 1.64067V7.5881C22.0943 7.89014 22.3392 8.13498 22.6412 8.13498Z"
												}), (0, a.jsx)("path", {
													d: "M11.5939 2.95312C8.81957 2.95312 6.5625 5.21019 6.5625 7.98451C6.5625 9.42376 7.17009 10.7236 8.14203 11.6415C8.16024 11.661 8.1796 11.6794 8.20076 11.6962C9.09608 12.5154 10.2876 13.0158 11.5938 13.0158C12.9001 13.0158 14.0916 12.5153 14.9869 11.6962C15.0081 11.6794 15.0274 11.6609 15.0456 11.6415C16.0177 10.7236 16.6253 9.42376 16.6253 7.98451C16.6253 5.21019 14.3682 2.95312 11.5939 2.95312ZM11.5939 11.9221C10.7009 11.9221 9.87671 11.6229 9.21541 11.1199C9.69607 10.2676 10.593 9.73456 11.5939 9.73456C12.5947 9.73456 13.4917 10.2676 13.9724 11.1199C13.311 11.6229 12.4869 11.9221 11.5939 11.9221ZM10.7189 7.76575V7.41028C10.7189 6.92781 11.1114 6.53525 11.5939 6.53525C12.0764 6.53525 12.4689 6.92781 12.4689 7.41028V7.76575C12.4689 8.24822 12.0764 8.64078 11.5939 8.64078C11.1114 8.64078 10.7189 8.24822 10.7189 7.76575ZM14.7626 10.3188C14.3592 9.72061 13.8003 9.25537 13.1513 8.96815C13.4088 8.63525 13.5627 8.21825 13.5627 7.76575V7.41028C13.5627 6.32465 12.6795 5.44147 11.5939 5.44147C10.5083 5.44147 9.62508 6.32465 9.62508 7.41028V7.76575C9.62508 8.21825 9.77892 8.63525 10.0365 8.96815C9.38751 9.25537 8.82854 9.72061 8.42521 10.3188C7.94236 9.6651 7.65628 8.85773 7.65628 7.98451C7.65628 5.8133 9.42268 4.0469 11.5939 4.0469C13.7651 4.0469 15.5315 5.8133 15.5315 7.98451C15.5315 8.85773 15.2454 9.6651 14.7626 10.3188Z"
												}), (0, a.jsx)("path", {
													d: "M14.547 23.9539H11.5938C11.2918 23.9539 11.0469 24.1987 11.0469 24.5007C11.0469 24.8028 11.2918 25.0476 11.5938 25.0476H14.547C14.849 25.0476 15.0939 24.8028 15.0939 24.5007C15.0939 24.1987 14.849 23.9539 14.547 23.9539Z"
												}), (0, a.jsx)("path", {
													d: "M14.5471 20.8911H6.78126C6.47927 20.8911 6.23438 21.136 6.23438 21.438C6.23438 21.7401 6.47927 21.9849 6.78126 21.9849H14.5471C14.8491 21.9849 15.094 21.7401 15.094 21.438C15.094 21.136 14.8491 20.8911 14.5471 20.8911Z"
												}), (0, a.jsx)("path", {
													d: "M14.5471 17.8286H6.78126C6.47927 17.8286 6.23438 18.0735 6.23438 18.3755C6.23438 18.6776 6.47927 18.9224 6.78126 18.9224H14.5471C14.8491 18.9224 15.094 18.6776 15.094 18.3755C15.094 18.0735 14.8491 17.8286 14.5471 17.8286Z"
												}), (0, a.jsx)("path", {
													d: "M4.83247 14.9261C4.7308 14.8244 4.58971 14.7659 4.44533 14.7659C4.30144 14.7659 4.16034 14.8244 4.05868 14.9261C3.95695 15.0278 3.89844 15.1689 3.89844 15.3128C3.89844 15.4566 3.9569 15.5977 4.05868 15.6994C4.16094 15.8011 4.30144 15.8596 4.44533 15.8596C4.58971 15.8596 4.73026 15.8011 4.83247 15.6994C4.93419 15.5977 4.99276 15.4566 4.99276 15.3128C4.99276 15.1689 4.93425 15.0278 4.83247 14.9261Z"
												}), (0, a.jsx)("path", {
													d: "M4.83247 17.9889C4.73026 17.8871 4.58971 17.8286 4.44533 17.8286C4.30144 17.8286 4.16094 17.8871 4.05868 17.9889C3.95695 18.0906 3.89844 18.2317 3.89844 18.3755C3.89844 18.5193 3.9569 18.6604 4.05868 18.7622C4.16094 18.8639 4.30144 18.9224 4.44533 18.9224C4.58971 18.9224 4.73026 18.8639 4.83247 18.7622C4.93419 18.6604 4.99276 18.5193 4.99276 18.3755C4.99276 18.2317 4.93425 18.0906 4.83247 17.9889Z"
												}), (0, a.jsx)("path", {
													d: "M4.83247 21.0514C4.73026 20.9496 4.58971 20.8911 4.44533 20.8911C4.30144 20.8911 4.16094 20.9496 4.05868 21.0514C3.95695 21.1531 3.89844 21.2942 3.89844 21.438C3.89844 21.5818 3.9569 21.7229 4.05868 21.8247C4.16034 21.9264 4.30144 21.9849 4.44533 21.9849C4.58971 21.9849 4.7308 21.9264 4.83247 21.8247C4.93419 21.7229 4.99276 21.5818 4.99276 21.438C4.99276 21.2942 4.93425 21.1531 4.83247 21.0514Z"
												}), (0, a.jsx)("path", {
													d: "M14.5471 14.7659H6.78126C6.47927 14.7659 6.23438 15.0107 6.23438 15.3128C6.23438 15.6148 6.47927 15.8596 6.78126 15.8596H14.5471C14.8491 15.8596 15.094 15.6148 15.094 15.3128C15.094 15.0107 14.8491 14.7659 14.5471 14.7659Z"
												}), (0, a.jsx)("path", {
													d: "M26.852 7.12707C26.3207 6.82032 25.7017 6.73883 25.109 6.89759C24.5164 7.05641 24.021 7.4365 23.7143 7.9678L16.8321 19.888C16.7944 19.9533 16.7706 20.0258 16.7622 20.1008L16.2778 24.44C16.2537 24.6559 16.3597 24.8657 16.5478 24.9743C16.6328 25.0233 16.7271 25.0476 16.8212 25.0476C16.9356 25.0476 17.0496 25.0118 17.1456 24.9411L20.6612 22.3519C20.722 22.3071 20.7728 22.2503 20.8105 22.185L27.6926 10.2648C28.3259 9.16795 27.9488 7.76037 26.852 7.12707ZM17.5035 23.3191L17.7565 21.0532L19.3393 21.967L17.5035 23.3191ZM20.1368 21.1644L18.0528 19.9613L23.5756 10.3956L25.6595 11.5988L20.1368 21.1644ZM26.7454 9.71785L26.2064 10.6516L24.1224 9.4484L24.6615 8.51469C24.8222 8.23638 25.0816 8.03731 25.392 7.95413C25.7026 7.87089 26.0268 7.91366 26.305 8.07434C26.5833 8.23501 26.7824 8.49446 26.8656 8.80487C26.9488 9.11529 26.9061 9.43954 26.7454 9.71785Z"
												})]
											})
										}), (0, a.jsxs)("div", {
											className: "content",
											children: [(0, a.jsx)("h5", {
												children: (0, a.jsx)(h(), {
													legacyBehavior: !0,
													href: "/edit-profile.html",
													children: (0, a.jsx)("a", {
														children: "Create Resume"
													})
												})
											}), (0, a.jsx)("p", {
												children: "To create your account be confident & safely."
											})]
										})]
									})
								}), (0, a.jsx)("div", {
									className: "col-lg-3 col-md-4 col-sm-6",
									children: (0, a.jsxs)("div", {
										className: "single-work-area",
										children: [(0, a.jsx)("div", {
											className: "work-icon",
											children: (0, a.jsxs)("svg", {
												width: 28,
												height: 28,
												viewBox: "0 0 28 28",
												xmlns: "http://www.w3.org/2000/svg",
												children: [(0, a.jsx)("path", {
													d: "M24.5929 15.7577V14.6788C24.5929 13.9677 23.9453 13.3891 23.1492 13.3891H22.8067V6.35884C22.8067 6.1326 22.6013 5.94918 22.3481 5.94918C22.0948 5.94918 21.8895 6.1326 21.8895 6.35884V13.389H20.2353L19.9094 12.4999C19.7146 11.9686 19.1632 11.6116 18.5374 11.6116H12.1323C11.5064 11.6116 10.955 11.9686 10.7603 12.4999L10.6614 12.7696L10.5625 12.4999C10.3677 11.9686 9.81636 11.6116 9.19047 11.6116H2.70343V0.937016C2.70343 0.872156 2.7625 0.819383 2.83517 0.819383H21.7578C21.8304 0.819383 21.8895 0.872156 21.8895 0.937016V4.46152C21.8895 4.68776 22.0948 4.87118 22.3481 4.87118C22.6013 4.87118 22.8067 4.68776 22.8067 4.46152V0.937016C22.8067 0.420383 22.3362 0 21.7578 0H2.83511C2.25673 0 1.78621 0.420383 1.78621 0.937016V11.6116H1.44376C0.647682 11.6116 0 12.1902 0 12.9014V21.3107C0 21.537 0.205324 21.7204 0.458581 21.7204C0.711838 21.7204 0.917162 21.537 0.917162 21.3107V12.9013C0.917162 12.6419 1.15334 12.431 1.44369 12.431H9.19035C9.41863 12.431 9.61973 12.5612 9.6908 12.755L10.1202 13.9263C10.1819 14.0946 10.3577 14.2084 10.556 14.2084H23.1491C23.4395 14.2084 23.6757 14.4195 23.6757 14.6788V15.6661C23.6688 15.6661 23.662 15.6656 23.6551 15.6656C21.2593 15.6656 19.3103 17.4068 19.3103 19.547C19.3103 21.6871 21.2593 23.4283 23.6551 23.4283C23.662 23.4283 23.6688 23.4279 23.6757 23.4278V26.7102C23.6757 26.9696 23.4395 27.1806 23.1491 27.1806H1.44376C1.1534 27.1806 0.917223 26.9696 0.917223 26.7102V23.2386C0.917223 23.0123 0.711899 22.8289 0.458642 22.8289C0.205385 22.8289 6.11839e-05 23.0123 6.11839e-05 23.2386V26.7102C6.11839e-05 27.4214 0.647743 28 1.44382 28H23.1492C23.9453 28 24.593 27.4214 24.593 26.7102V23.3362C26.5393 22.952 28 21.3994 28 19.547C28 17.6945 26.5392 16.1419 24.5929 15.7577ZM11.3994 13.3891L11.6319 12.755C11.703 12.5612 11.904 12.431 12.1323 12.431H18.5373C18.7656 12.431 18.9667 12.5612 19.0377 12.755L19.2702 13.3891H11.3994ZM23.6551 22.6089C21.7652 22.6089 20.2276 21.2353 20.2276 19.547C20.2276 17.8586 21.7652 16.485 23.6551 16.485C25.5451 16.485 27.0827 17.8586 27.0827 19.547C27.0827 21.2353 25.5451 22.6089 23.6551 22.6089Z"
												}), (0, a.jsx)("path", {
													d: "M26.2611 18.7759C26.1715 18.5293 25.9374 18.3529 25.6501 18.3157L24.7407 18.1976L24.334 17.4614C24.2055 17.229 23.9455 17.0845 23.6552 17.0845C23.365 17.0845 23.105 17.2289 22.9765 17.4614L22.5698 18.1976L21.6603 18.3157C21.3732 18.3529 21.139 18.5293 21.0493 18.7758C20.9596 19.0224 21.033 19.288 21.2409 19.4689L21.899 20.042L21.7436 20.8512C21.6946 21.1067 21.81 21.3602 22.0448 21.5126C22.1774 21.5987 22.3327 21.6424 22.4889 21.6424C22.6092 21.6424 22.7301 21.6165 22.8418 21.564L23.6553 21.1819L24.4687 21.5639C24.7256 21.6846 25.031 21.6649 25.2658 21.5125C25.5006 21.3602 25.616 21.1067 25.5669 20.8512L25.4116 20.042L26.0696 19.469C26.2774 19.2881 26.3508 19.0225 26.2611 18.7759ZM24.7109 19.5079C24.5325 19.6633 24.4512 19.887 24.4933 20.1063L24.608 20.7037L24.0074 20.4217C23.7869 20.3181 23.5236 20.3181 23.3031 20.4217L22.7025 20.7037L22.8172 20.1063C22.8593 19.887 22.778 19.6633 22.5995 19.5078L22.1137 19.0848L22.7852 18.9976C23.0317 18.9656 23.2448 18.8273 23.355 18.6277L23.6553 18.0842L23.9555 18.6277C24.0658 18.8274 24.2788 18.9656 24.5254 18.9977L25.1968 19.0848L24.7109 19.5079Z"
												}), (0, a.jsx)("path", {
													d: "M19.9362 7.39624H4.65682C4.40357 7.39624 4.19824 7.57966 4.19824 7.8059C4.19824 8.03215 4.40357 8.21557 4.65682 8.21557H19.9362C20.1895 8.21557 20.3948 8.03215 20.3948 7.8059C20.3948 7.57966 20.1895 7.39624 19.9362 7.39624Z"
												}), (0, a.jsx)("path", {
													d: "M19.9362 9.37964H4.65682C4.40357 9.37964 4.19824 9.56306 4.19824 9.7893C4.19824 10.0155 4.40357 10.199 4.65682 10.199H19.9362C20.1895 10.199 20.3948 10.0155 20.3948 9.7893C20.3948 9.56306 20.1895 9.37964 19.9362 9.37964Z"
												}), (0, a.jsx)("path", {
													d: "M5.38624 6.12415C5.55214 6.12415 5.72845 6.08893 5.90684 6.0005C6.26918 5.8208 6.49434 5.47566 6.49434 5.0999V2.6592C6.49434 2.43307 6.28914 2.24976 6.03601 2.24976C5.78287 2.24976 5.57767 2.43307 5.57767 2.6592V5.0999C5.57767 5.17838 5.53329 5.24909 5.46191 5.28453C5.27544 5.37706 5.10342 5.13567 4.96464 5.06944C4.78392 4.9832 4.57652 4.99655 4.42715 5.12763C4.24704 5.28568 4.24392 5.5443 4.42047 5.70579C4.68065 5.94368 5.00082 6.12415 5.38624 6.12415Z"
												}), (0, a.jsx)("path", {
													d: "M13.7824 2.24976H12.7894C12.5363 2.24976 12.3311 2.43307 12.3311 2.6592V5.71301C12.3311 5.93914 12.5363 6.12245 12.7894 6.12245H13.9558C14.7158 6.12245 15.3342 5.56841 15.3342 4.88739C15.3342 4.50917 15.1422 4.17038 14.8409 3.9443C14.9583 3.77466 15.0273 3.5756 15.0273 3.36188C15.0273 2.74867 14.4688 2.24976 13.7824 2.24976ZM13.2478 3.0687H13.7824C13.9634 3.0687 14.1107 3.20028 14.1107 3.36194C14.1107 3.52359 13.9634 3.65517 13.7824 3.65517C13.7089 3.65517 13.2478 3.65599 13.2478 3.65599V3.0687ZM13.9558 5.30356H13.2478V4.47543C13.3056 4.47521 13.9558 4.47488 13.9558 4.47488C14.2104 4.47488 14.4176 4.65994 14.4176 4.88744C14.4176 5.11686 14.2105 5.30356 13.9558 5.30356Z"
												}), (0, a.jsx)("path", {
													d: "M11.6457 4.18608C11.6457 3.11836 10.6733 2.24976 9.47814 2.24976C8.28293 2.24976 7.31055 3.11841 7.31055 4.18608C7.31055 5.25374 8.28293 6.12245 9.47814 6.12245C10.6733 6.12245 11.6457 5.25379 11.6457 4.18608ZM8.22728 4.18608C8.22728 3.56991 8.7884 3.06865 9.47814 3.06865C10.1679 3.06865 10.729 3.56991 10.729 4.18608C10.729 4.80224 10.1679 5.30356 9.47814 5.30356C8.7884 5.30351 8.22728 4.80224 8.22728 4.18608Z"
												})]
											})
										}), (0, a.jsxs)("div", {
											className: "content",
											children: [(0, a.jsx)("h5", {
												children: (0, a.jsx)(h(), {
													legacyBehavior: !0,
													href: "/job-listing1",
													children: (0, a.jsx)("a", {
														children: "Find Jobs"
													})
												})
											}), (0, a.jsx)("p", {
												children: "To create your account be confident & safely."
											})]
										})]
									})
								}), (0, a.jsx)("div", {
									className: "col-lg-3 col-md-4 col-sm-6",
									children: (0, a.jsxs)("div", {
										className: "single-work-area",
										children: [(0, a.jsx)("div", {
											className: "work-icon",
											children: (0, a.jsxs)("svg", {
												width: 21,
												height: 28,
												viewBox: "0 0 21 28",
												xmlns: "http://www.w3.org/2000/svg",
												children: [(0, a.jsx)("path", {
													d: "M15.4828 5.49051H5.51995C5.27402 5.49051 5.07617 5.29546 5.07617 5.05301V2.61942C5.07617 1.89937 5.66973 1.31421 6.40011 1.31421H7.84794C8.09387 1.31421 8.29172 1.50926 8.29172 1.75171C8.29172 1.99416 8.09387 2.18921 7.84794 2.18921H6.40011C6.15973 2.18921 5.96373 2.38244 5.96373 2.61942V4.61369H15.039V2.61942C15.039 2.38244 14.843 2.18921 14.6026 2.18921H13.1548C12.9089 2.18921 12.711 1.99416 12.711 1.75171C12.711 1.50926 12.9089 1.31421 13.1548 1.31421H14.6026C15.333 1.31421 15.9266 1.89937 15.9266 2.61942V5.05119C15.9266 5.29364 15.7287 5.49051 15.4828 5.49051Z"
												}), (0, a.jsx)("path", {
													d: "M19.7537 28H1.24813C0.560271 28 0 27.4477 0 26.7695V4.12891C0 3.45078 0.560271 2.89844 1.24813 2.89844H5.5195C5.76543 2.89844 5.96328 3.09349 5.96328 3.33594C5.96328 3.57839 5.76543 3.77344 5.5195 3.77344H1.24813C1.04843 3.77344 0.887558 3.93385 0.887558 4.12891V26.7695C0.887558 26.9664 1.05028 27.125 1.24813 27.125H19.7519C19.9516 27.125 20.1124 26.9646 20.1124 26.7695V4.12891C20.1124 3.93203 19.9497 3.77344 19.7519 3.77344H15.4805C15.2346 3.77344 15.0367 3.57839 15.0367 3.33594C15.0367 3.09349 15.2346 2.89844 15.4805 2.89844H19.7519C20.4397 2.89844 21 3.45078 21 4.12891V26.7695C21.0018 27.4477 20.4416 28 19.7537 28Z"
												}), (0, a.jsx)("path", {
													d: "M13.154 3.22474H7.8471C7.60117 3.22474 7.40332 3.02969 7.40332 2.78724V0.802083C7.40332 0.359115 7.76759 0 8.21692 0H12.7841C13.2335 0 13.5977 0.359115 13.5977 0.802083V2.78724C13.5977 3.02969 13.398 3.22474 13.154 3.22474ZM8.29088 2.34974H12.7102V0.875H8.29088V2.34974Z"
												}), (0, a.jsx)("path", {
													d: "M17.8856 18.2893H7.13323C6.8873 18.2893 6.68945 18.0943 6.68945 17.8518C6.68945 17.6094 6.8873 17.4143 7.13323 17.4143H17.8856C18.1316 17.4143 18.3294 17.6094 18.3294 17.8518C18.3294 18.0943 18.1297 18.2893 17.8856 18.2893Z"
												}), (0, a.jsx)("path", {
													d: "M3.76278 18.6574C3.64999 18.6574 3.53534 18.6155 3.44844 18.5298L2.80126 17.8918C2.62745 17.7204 2.62745 17.4433 2.80126 17.2738C2.97507 17.1043 3.25613 17.1025 3.4281 17.2738L3.76093 17.6019L4.94619 16.4334C5.12 16.2621 5.40106 16.2621 5.57303 16.4334C5.74684 16.6048 5.74684 16.8819 5.57303 17.0514L4.07527 18.528C3.99022 18.6155 3.87557 18.6574 3.76278 18.6574Z"
												}), (0, a.jsx)("path", {
													d: "M17.8856 21.8657H7.13323C6.8873 21.8657 6.68945 21.6707 6.68945 21.4282C6.68945 21.1858 6.8873 20.9907 7.13323 20.9907H17.8856C18.1316 20.9907 18.3294 21.1858 18.3294 21.4282C18.3294 21.6707 18.1297 21.8657 17.8856 21.8657Z"
												}), (0, a.jsx)("path", {
													d: "M3.76278 22.2358C3.64444 22.2358 3.53164 22.1902 3.44844 22.1082L2.80126 21.4701C2.62745 21.2988 2.62745 21.0217 2.80126 20.8522C2.97507 20.6826 3.25613 20.6808 3.4281 20.8522L3.76093 21.1803L4.94434 20.0118C5.11815 19.8405 5.39921 19.8405 5.57118 20.0118C5.74499 20.1832 5.74499 20.4603 5.57118 20.6298L4.07342 22.1063C3.99391 22.1884 3.88112 22.2358 3.76278 22.2358Z"
												}), (0, a.jsx)("path", {
													d: "M17.8856 25.4424H7.13323C6.8873 25.4424 6.68945 25.2473 6.68945 25.0049C6.68945 24.7624 6.8873 24.5674 7.13323 24.5674H17.8856C18.1316 24.5674 18.3294 24.7624 18.3294 25.0049C18.3294 25.2473 18.1297 25.4424 17.8856 25.4424Z"
												}), (0, a.jsx)("path", {
													d: "M3.76278 25.8123C3.64999 25.8123 3.53534 25.7704 3.44844 25.6847L2.80126 25.0467C2.62745 24.8753 2.62745 24.5983 2.80126 24.4287C2.97507 24.2592 3.25613 24.2574 3.4281 24.4287L3.76093 24.7569L4.94434 23.5902C5.11815 23.4188 5.39921 23.4188 5.57118 23.5902C5.74499 23.7615 5.74499 24.0386 5.57118 24.2082L4.07342 25.6847C3.99022 25.7704 3.87557 25.8123 3.76278 25.8123Z"
												}), (0, a.jsx)("path", {
													d: "M13.4678 14.1643C13.2848 14.1643 13.1146 14.0531 13.0499 13.8744C12.6838 12.8645 11.7075 12.1846 10.6184 12.1846H10.3835C9.29444 12.1846 8.31813 12.8627 7.95201 13.8744C7.8688 14.1023 7.61548 14.2208 7.38434 14.1387C7.15321 14.0567 7.03302 13.807 7.11623 13.5791C7.60808 12.221 8.92093 11.3096 10.3835 11.3096H10.6184C12.081 11.3096 13.3939 12.221 13.8857 13.5791C13.9689 13.807 13.8469 14.0567 13.6176 14.1387C13.5677 14.1551 13.5177 14.1643 13.4678 14.1643Z"
												}), (0, a.jsx)("path", {
													d: "M10.5005 12.1846C9.33746 12.1846 8.39258 11.2512 8.39258 10.1064C8.39258 8.96165 9.33931 8.02832 10.5005 8.02832C11.6636 8.02832 12.6103 8.96165 12.6103 10.1064C12.6103 11.2512 11.6636 12.1846 10.5005 12.1846ZM10.5005 8.9015C9.82746 8.9015 9.28014 9.44108 9.28014 10.1046C9.28014 10.7682 9.82746 11.3077 10.5005 11.3077C11.1736 11.3077 11.7228 10.7682 11.7228 10.1046C11.7228 9.44108 11.1736 8.9015 10.5005 8.9015Z"
												}), (0, a.jsx)("path", {
													d: "M10.5001 15.4402C9.30005 15.4402 8.17211 14.979 7.32338 14.1423C6.47465 13.3055 6.00684 12.1936 6.00684 11.0105C6.00684 9.82743 6.47465 8.71545 7.32338 7.87873C8.17211 7.04201 9.30005 6.58081 10.5001 6.58081C11.7002 6.58081 12.8281 7.04201 13.6768 7.87873C14.5255 8.71545 14.9934 9.82743 14.9934 11.0105C14.9934 12.1936 14.5255 13.3055 13.6768 14.1423C12.8281 14.979 11.7002 15.4402 10.5001 15.4402ZM10.5001 7.45581C8.51234 7.45581 6.89439 9.05086 6.89439 11.0105C6.89439 12.9701 8.51234 14.5652 10.5001 14.5652C12.4879 14.5652 14.1058 12.9701 14.1058 11.0105C14.1058 9.05086 12.4879 7.45581 10.5001 7.45581Z"
												})]
											})
										}), (0, a.jsxs)("div", {
											className: "content",
											children: [(0, a.jsx)("h5", {
												children: (0, a.jsx)(h(), {
													legacyBehavior: !0,
													href: "/job-listing1",
													children: (0, a.jsx)("a", {
														children: "Apply Jobs"
													})
												})
											}), (0, a.jsx)("p", {
												children: "To create your account be confident & safely."
											})]
										})]
									})
								})]
							})]
						})
					})
				},
				L = function() {
					let s = (0, n.useRouter)().pathname;
					return (0, r.useEffect)(() => {
						document.body.className = "/index4" === s ? "bg-wight" : ""
					}), (0, a.jsxs)(a.Fragment, {
						children: [(0, a.jsxs)(c(), {
							children: [(0, a.jsx)("title", {
								children: "JOBES- Job Portal NextJs Template"
							}), (0, a.jsx)("meta", {
								charSet: "UTF-8"
							}), (0, a.jsx)("meta", {
								httpEquiv: "X-UA-Compatible",
								content: "IE=edge"
							}), (0, a.jsx)("meta", {
								name: "viewport",
								content: "width=device-width, initial-scale=1.0"
							}), (0, a.jsx)("meta", {
								name: "description",
								content: "Generated by create _next app"
							}), (0, a.jsx)("link", {
								rel: "icon",
								href: "assets/images/sm-logo.svg",
								type: "image/gif",
								sizes: "20x20"
							})]
						}), (0, a.jsx)(f, {}), (0, a.jsx)(j, {}), (0, a.jsx)(w.Z, {}), (0, a.jsx)(p, {}), (0, a.jsx)(C, {}), (0, a.jsx)(V, {}), (0, a.jsx)(N, {}), (0, a.jsx)(d, {}), (0, a.jsx)(g, {}), (0, a.jsx)(o, {}), (0, a.jsx)(b.Z, {})]
					})
				}
		},
		7857: function(s, e, i) {
			"use strict";
			var a = i(7294),
				l = i(8273);

			function c(s, e) {
				var i = Object.keys(s);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(s);
					e && (a = a.filter(function(e) {
						return Object.getOwnPropertyDescriptor(s, e).enumerable
					})), i.push.apply(i, a)
				}
				return i
			}

			function n(s) {
				for (var e = 1; e < arguments.length; e++) {
					var i = null != arguments[e] ? arguments[e] : {};
					e % 2 ? c(Object(i), !0).forEach(function(e) {
						var a, l, c;
						a = s, l = e, c = i[e], (l = function(s) {
							var e = function(s, e) {
								if ("object" != typeof s || null === s) return s;
								var i = s[Symbol.toPrimitive];
								if (void 0 !== i) {
									var a = i.call(s, e || "default");
									if ("object" != typeof a) return a;
									throw TypeError("@@toPrimitive must return a primitive value.")
								}
								return ("string" === e ? String : Number)(s)
							}(s, "string");
							return "symbol" == typeof e ? e : String(e)
						}(l)) in a ? Object.defineProperty(a, l, {
							value: c,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : a[l] = c
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(i)) : c(Object(i)).forEach(function(e) {
						Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(i, e))
					})
				}
				return s
			}

			function r() {
				return (r = Object.assign ? Object.assign.bind() : function(s) {
					for (var e = 1; e < arguments.length; e++) {
						var i = arguments[e];
						for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (s[a] = i[a])
					}
					return s
				}).apply(this, arguments)
			}

			function d(s, e) {
				if (null == s) return {};
				var i, a, l = function(s, e) {
					if (null == s) return {};
					var i, a, l = {},
						c = Object.keys(s);
					for (a = 0; a < c.length; a++) i = c[a], e.indexOf(i) >= 0 || (l[i] = s[i]);
					return l
				}(s, e);
				if (Object.getOwnPropertySymbols) {
					var c = Object.getOwnPropertySymbols(s);
					for (a = 0; a < c.length; a++) i = c[a], !(e.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(s, i) && (l[i] = s[i])
				}
				return l
			}
			var t = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? a.useLayoutEffect : a.useEffect;

			function h(s) {
				var e = a.useRef(s);
				return t(function() {
					e.current = s
				}), a.useCallback(function() {
					for (var s = arguments.length, i = Array(s), a = 0; a < s; a++) i[a] = arguments[a];
					return e.current.apply(void 0, i)
				}, [])
			}
			var o = function(s, e) {
					var i = e.decimal,
						a = e.decimals,
						c = e.duration,
						n = e.easingFn,
						r = e.end,
						d = e.formattingFn,
						t = e.numerals,
						h = e.prefix,
						o = e.separator,
						j = e.start,
						x = e.suffix,
						m = e.useEasing,
						p = e.enableScrollSpy,
						g = e.scrollSpyDelay,
						C = e.scrollSpyOnce;
					return new l.CountUp(s, r, {
						startVal: j,
						duration: c,
						decimal: i,
						decimalPlaces: a,
						easingFn: n,
						formattingFn: d,
						numerals: t,
						separator: o,
						prefix: h,
						suffix: x,
						useEasing: m,
						useGrouping: !!o,
						enableScrollSpy: p,
						scrollSpyDelay: g,
						scrollSpyOnce: C
					})
				},
				j = ["ref", "startOnMount", "enableReinitialize", "delay", "onEnd", "onStart", "onPauseResume", "onReset", "onUpdate"],
				x = {
					decimal: ".",
					delay: null,
					prefix: "",
					suffix: "",
					duration: 2,
					start: 0,
					startOnMount: !0,
					enableReinitialize: !0
				},
				m = function(s) {
					var e = a.useMemo(function() {
							return n(n({}, x), s)
						}, [s]),
						i = e.ref,
						l = e.startOnMount,
						c = e.enableReinitialize,
						r = e.delay,
						t = e.onEnd,
						m = e.onStart,
						p = e.onPauseResume,
						g = e.onReset,
						C = e.onUpdate,
						v = d(e, j),
						N = a.useRef(),
						b = a.useRef(),
						u = a.useRef(!1),
						y = h(function() {
							return o("string" == typeof i ? i : i.current, v)
						}),
						f = h(function(s) {
							var e = N.current;
							if (e && !s) return e;
							var i = y();
							return N.current = i, i
						}),
						w = h(function() {
							var s = function() {
								return f(!0).start(function() {
									null == t || t({
										pauseResume: V,
										reset: L,
										start: H,
										update: k
									})
								})
							};
							r && r > 0 ? b.current = setTimeout(s, 1e3 * r) : s(), null == m || m({
								pauseResume: V,
								reset: L,
								update: k
							})
						}),
						V = h(function() {
							f().pauseResume(), null == p || p({
								reset: L,
								start: H,
								update: k
							})
						}),
						L = h(function() {
							f().el && (b.current && clearTimeout(b.current), f().reset(), null == g || g({
								pauseResume: V,
								start: H,
								update: k
							}))
						}),
						k = h(function(s) {
							f().update(s), null == C || C({
								pauseResume: V,
								reset: L,
								start: H
							})
						}),
						H = h(function() {
							L(), w()
						}),
						M = h(function(s) {
							l && (s && L(), w())
						});
					return a.useEffect(function() {
						u.current ? c && M(!0) : (u.current = !0, M())
					}, [c, u, M, r, s.start, s.suffix, s.prefix, s.duration, s.separator, s.decimals, s.decimal, s.formattingFn]), a.useEffect(function() {
						return function() {
							L()
						}
					}, [L]), {
						start: H,
						pauseResume: V,
						reset: L,
						update: k,
						getCountUp: f
					}
				},
				p = ["className", "redraw", "containerProps", "children", "style"];
			e.ZP = function(s) {
				var e = s.className,
					i = s.redraw,
					l = s.containerProps,
					c = s.children,
					t = s.style,
					o = d(s, p),
					j = a.useRef(null),
					x = a.useRef(!1),
					g = m(n(n({}, o), {}, {
						ref: j,
						startOnMount: "function" != typeof c || 0 === s.delay,
						enableReinitialize: !1
					})),
					C = g.start,
					v = g.reset,
					N = g.update,
					b = g.pauseResume,
					u = g.getCountUp,
					y = h(function() {
						C()
					}),
					f = h(function(e) {
						s.preserveValue || v(), N(e)
					}),
					w = h(function() {
						if ("function" == typeof s.children && !(j.current instanceof Element)) {
							console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.');
							return
						}
						u()
					});
				return (a.useEffect(function() {
					w()
				}, [w]), a.useEffect(function() {
					x.current && f(s.end)
				}, [s.end, f]), a.useEffect(function() {
					i && x.current && y()
				}, [y, i, i && s]), a.useEffect(function() {
					!i && x.current && y()
				}, [y, i, s.start, s.suffix, s.prefix, s.duration, s.separator, s.decimals, s.decimal, s.className, s.formattingFn]), a.useEffect(function() {
					x.current = !0
				}, []), "function" == typeof c) ? c({
					countUpRef: j,
					start: C,
					reset: v,
					update: N,
					pauseResume: b,
					getCountUp: u
				}) : a.createElement("span", r({
					className: e,
					ref: j,
					style: t
				}, l), void 0 !== s.start ? u().formattingFn(s.start) : "")
			}
		}
	},
	function(s) {
		s.O(0, [3424, 717, 8004, 9774, 2888, 179], function() {
			return s(s.s = 163)
		}), _N_E = s.O()
	}
]);