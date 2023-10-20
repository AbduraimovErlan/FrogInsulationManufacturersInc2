(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[7248], {
		8273: function(e, s, i) {
			"use strict";
			i.r(s), i.d(s, {
				CountUp: function() {
					return a
				}
			});
			var n = function() {
					return (n = Object.assign || function(e) {
						for (var s, i = 1, n = arguments.length; i < n; i++)
							for (var a in s = arguments[i]) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a]);
						return e
					}).apply(this, arguments)
				},
				a = function() {
					function e(e, s, i) {
						var a = this;
						this.endVal = s, this.options = i, this.version = "2.4.2", this.defaults = {
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
						}, this.finalEndVal = null, this.useEasing = !0, this.countDown = !1, this.error = "", this.startVal = 0, this.paused = !0, this.once = !1, this.count = function(e) {
							a.startTime || (a.startTime = e);
							var s = e - a.startTime;
							a.remaining = a.duration - s, a.useEasing ? a.countDown ? a.frameVal = a.startVal - a.easingFn(s, 0, a.startVal - a.endVal, a.duration) : a.frameVal = a.easingFn(s, a.startVal, a.endVal - a.startVal, a.duration) : a.frameVal = a.startVal + (a.endVal - a.startVal) * (s / a.duration);
							var i = a.countDown ? a.frameVal < a.endVal : a.frameVal > a.endVal;
							a.frameVal = i ? a.endVal : a.frameVal, a.frameVal = Number(a.frameVal.toFixed(a.options.decimalPlaces)), a.printValue(a.frameVal), s < a.duration ? a.rAF = requestAnimationFrame(a.count) : null !== a.finalEndVal ? a.update(a.finalEndVal) : a.callback && a.callback()
						}, this.formatNumber = function(e) {
							var s, i, n, t = (Math.abs(e).toFixed(a.options.decimalPlaces) + "").split(".");
							if (s = t[0], i = t.length > 1 ? a.options.decimal + t[1] : "", a.options.useGrouping) {
								n = "";
								for (var l = 3, r = 0, c = 0, o = s.length; c < o; ++c) a.options.useIndianSeparators && 4 === c && (l = 2, r = 1), 0 !== c && r % l == 0 && (n = a.options.separator + n), r++, n = s[o - c - 1] + n;
								s = n
							}
							return a.options.numerals && a.options.numerals.length && (s = s.replace(/[0-9]/g, function(e) {
								return a.options.numerals[+e]
							}), i = i.replace(/[0-9]/g, function(e) {
								return a.options.numerals[+e]
							})), (e < 0 ? "-" : "") + a.options.prefix + s + i + a.options.suffix
						}, this.easeOutExpo = function(e, s, i, n) {
							return i * (1 - Math.pow(2, -10 * e / n)) * 1024 / 1023 + s
						}, this.options = n(n({}, this.defaults), i), this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber, this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(s), this.options.decimalPlaces = Math.max(this.options.decimalPlaces), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, "" === this.options.separator && (this.options.useGrouping = !1), this.el = "string" == typeof e ? document.getElementById(e) : e, this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined", "undefined" != typeof window && this.options.enableScrollSpy && (this.error ? console.error(this.error, e) : (window.onScrollFns = window.onScrollFns || [], window.onScrollFns.push(function() {
							return a.handleScroll(a)
						}), window.onscroll = function() {
							window.onScrollFns.forEach(function(e) {
								return e()
							})
						}, this.handleScroll(this)))
					}
					return e.prototype.handleScroll = function(e) {
						if (e && window && !e.once) {
							var s = window.innerHeight + window.scrollY,
								i = e.el.getBoundingClientRect(),
								n = i.top + window.pageYOffset,
								a = i.top + i.height + window.pageYOffset;
							a < s && a > window.scrollY && e.paused ? (e.paused = !1, setTimeout(function() {
								return e.start()
							}, e.options.scrollSpyDelay), e.options.scrollSpyOnce && (e.once = !0)) : (window.scrollY > a || n > s) && !e.paused && e.reset()
						}
					}, e.prototype.determineDirectionAndSmartEasing = function() {
						var e = this.finalEndVal ? this.finalEndVal : this.endVal;
						if (this.countDown = this.startVal > e, Math.abs(e - this.startVal) > this.options.smartEasingThreshold && this.options.useEasing) {
							this.finalEndVal = e;
							var s = this.countDown ? 1 : -1;
							this.endVal = e + s * this.options.smartEasingAmount, this.duration = this.duration / 2
						} else this.endVal = e, this.finalEndVal = null;
						null !== this.finalEndVal ? this.useEasing = !1 : this.useEasing = this.options.useEasing
					}, e.prototype.start = function(e) {
						this.error || (this.callback = e, this.duration > 0 ? (this.determineDirectionAndSmartEasing(), this.paused = !1, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal))
					}, e.prototype.pauseResume = function() {
						this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused
					}, e.prototype.reset = function() {
						cancelAnimationFrame(this.rAF), this.paused = !0, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal)
					}, e.prototype.update = function(e) {
						cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(e), this.endVal !== this.frameVal && (this.startVal = this.frameVal, null == this.finalEndVal && this.resetDuration(), this.finalEndVal = null, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count))
					}, e.prototype.printValue = function(e) {
						var s = this.formattingFn(e);
						this.el && ("INPUT" === this.el.tagName ? this.el.value = s : "text" === this.el.tagName || "tspan" === this.el.tagName ? this.el.textContent = s : this.el.innerHTML = s)
					}, e.prototype.ensureNumber = function(e) {
						return "number" == typeof e && !isNaN(e)
					}, e.prototype.validateValue = function(e) {
						var s = Number(e);
						return this.ensureNumber(s) ? s : (this.error = "[CountUp] invalid start or end value: ".concat(e), null)
					}, e.prototype.resetDuration = function() {
						this.startTime = null, this.duration = 1e3 * Number(this.options.duration), this.remaining = this.duration
					}, e
				}()
		},
		680: function(e, s, i) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/company/company-dashboard", function() {
				return i(3939)
			}])
		},
		3939: function(e, s, i) {
			"use strict";
			i.r(s), i.d(s, {
				default: function() {
					return h
				}
			});
			var n = i(5893);
			i(7294);
			var a = i(1664),
				t = i.n(a),
				l = i(7857),
				r = JSON.parse('[{"id":1,"applicent_name":"Mr. Willium Jacson","applicent_img":"/assets/images/bg/employee-img1.png","applicent_university":"Internation Colliegate University","applicent_designation":"Teaching Assistant","applicent_exprience":" 2+ Years","applicent_salary":"$800/ Per Month","applicent_privious_compnay_name":"Colliegate Ltd","applied_date":"02 April, 2023"},{"id":2,"applicent_name":"Robert Williamson","applicent_img":"/assets/images/bg/employee-img2.png","applicent_university":"London University","applicent_designation":"UI/UX Designer","applicent_exprience":" 2+ Years","applicent_salary":"$800/ Per Month","applicent_privious_compnay_name":"UI/UX Company Ltd","applied_date":"02 April, 2023"},{"id":3,"applicent_name":"Robertson Harry","applicent_img":"/assets/images/bg/employee-img3.png","applicent_university":"Royals Republic University","applicent_designation":"Teaching Assistant","applicent_exprience":" 2+ Years","applicent_salary":"$800/ Per Month","applicent_privious_compnay_name":"Bistro.Tech Ltd","applied_date":"02 April, 2023"},{"id":4,"applicent_name":"Hari Jonson","applicent_img":"/assets/images/bg/employee-img4.png","applicent_university":"Bistro Mycol University","applicent_designation":"Teaching Assistant","applicent_exprience":" 2+ Years","applicent_salary":"$800/ Per Month","applicent_privious_compnay_name":"Elite Author ","applied_date":"02 April, 2023"},{"id":5,"applicent_name":"Mrs. Jordan Harry","applicent_img":"/assets/images/bg/employee-img5.png","applicent_university":"Internation Colliegate University","applicent_designation":"Teaching Assistant","applicent_exprience":" 2+ Years","applicent_salary":"$800/ Per Month","applicent_privious_compnay_name":"Colliegate Ltd","applied_date":"02 April, 2023"},{"id":6,"applicent_name":"Mr. Willium Jacson","applicent_img":"/assets/images/bg/employee-img6.png","applicent_university":"Internation Colliegate University","applicent_designation":"Teaching Assistant","applicent_exprience":" 2+ Years","applicent_salary":"$800/ Per Month","applicent_privious_compnay_name":"Colliegate Ltd","applied_date":"02 April, 2023"},{"id":7,"applicent_name":"Mr. Willium Jacson","applicent_img":"/assets/images/bg/employee-img1.png","applicent_university":"Internation Colliegate University","applicent_designation":"Teaching Assistant","applicent_exprience":" 2+ Years","applicent_salary":"$800/ Per Month","applicent_privious_compnay_name":"Colliegate Ltd","applied_date":"02 April, 2023"},{"id":8,"applicent_name":"Mr. Willium Jacson","applicent_img":"/assets/images/bg/employee-img1.png","applicent_university":"Internation Colliegate University","applicent_designation":"Teaching Assistant","applicent_exprience":" 2+ Years","applicent_salary":"$800/ Per Month","applicent_privious_compnay_name":"Colliegate Ltd","applied_date":"02 April, 2023"},{"id":9,"applicent_name":"Mr. Willium Jacson","applicent_img":"assets/images/bg/employee-img1.png","applicent_university":"Internation Colliegate University","applicent_designation":"Teaching Assistant","applicent_exprience":" 2+ Years","applicent_salary":"$800/ Per Month","applicent_privious_compnay_name":"Colliegate Ltd","applied_date":"02 April, 2023"},{"id":10,"applicent_name":"Mr. Willium Jacson","applicent_img":"assets/images/bg/employee-img1.png","applicent_university":"Internation Colliegate University","applicent_designation":"Teaching Assistant","applicent_exprience":" 2+ Years","applicent_salary":"$800/ Per Month","applicent_privious_compnay_name":"Colliegate Ltd","applied_date":"02 April, 2023"},{"id":11,"applicent_name":"Mr. Willium Jacson","applicent_img":"assets/images/bg/employee-img1.png","applicent_university":"Internation Colliegate University","applicent_designation":"Teaching Assistant","applicent_exprience":" 2+ Years","applicent_salary":"$800/ Per Month","applicent_privious_compnay_name":"Colliegate Ltd","applied_date":"02 April, 2023"}]'),
				c = function() {
					return (0, n.jsx)("div", {
						className: "modal fade",
						id: "exampleModal",
						tabIndex: -1,
						"aria-hidden": "true",
						children: (0, n.jsx)("div", {
							className: "modal-dialog",
							children: (0, n.jsxs)("div", {
								className: "modal-content",
								children: [(0, n.jsxs)("div", {
									className: "modal-header",
									children: [(0, n.jsx)("div", {
										className: "button-groups",
										children: (0, n.jsxs)("ul", {
											children: [(0, n.jsx)("li", {
												children: (0, n.jsxs)("button", {
													className: "primary-bg",
													children: [(0, n.jsx)("img", {
														src: "/assets/images/icon/pdf2.svg",
														alt: ""
													}), " ", "Download PDF"]
												})
											}), (0, n.jsx)("li", {
												children: (0, n.jsxs)("button", {
													children: [(0, n.jsx)("img", {
														src: "/assets/images/icon/shortlist2.svg",
														alt: ""
													}), " ", "Shortlist"]
												})
											}), (0, n.jsx)("li", {
												children: (0, n.jsxs)("button", {
													className: "red-bg",
													children: [(0, n.jsx)("img", {
														src: "/assets/images/icon/reject2.svg",
														alt: ""
													}), " ", "reject"]
												})
											})]
										})
									}), (0, n.jsx)("button", {
										type: "button",
										className: "btn-close",
										"data-bs-dismiss": "modal",
										"aria-label": "Close"
									})]
								}), (0, n.jsx)("div", {
									className: "modal-body",
									children: (0, n.jsx)("div", {
										className: "row justify-content-center",
										children: (0, n.jsx)("div", {
											className: "col-lg-12",
											children: (0, n.jsxs)("div", {
												className: "resume-area",
												children: [(0, n.jsxs)("div", {
													className: "row g-4 mb-40",
													children: [(0, n.jsx)("div", {
														className: "col-lg-6",
														children: (0, n.jsxs)("div", {
															className: "author-area",
															children: [(0, n.jsx)("div", {
																className: "author-img",
																children: (0, n.jsx)("img", {
																	src: "/assets/images/bg/resume-author.png",
																	alt: ""
																})
															}), (0, n.jsxs)("div", {
																className: "name-degination",
																children: [(0, n.jsx)("h4", {
																	children: "Mr. Jacoline Frankly"
																}), (0, n.jsx)("span", {
																	children: "UI/UX Engineer"
																})]
															})]
														})
													}), (0, n.jsx)("div", {
														className: "col-lg-6",
														children: (0, n.jsxs)("div", {
															className: "contact.html-area",
															children: [(0, n.jsx)("h4", {
																children: "Contact Info"
															}), (0, n.jsxs)("ul", {
																children: [(0, n.jsxs)("li", {
																	children: ["Phone:", (0, n.jsxs)("a", {
																		href: "#",
																		children: ["+880-177 443 5455", " ", (0, n.jsx)("span", {
																			children: (0, n.jsx)("img", {
																				src: "/assets/images/icon/phone-5.svg",
																				alt: ""
																			})
																		})]
																	})]
																}), (0, n.jsxs)("li", {
																	children: ["Email:", (0, n.jsxs)("a", {
																		href: "#",
																		children: ["info@example.com", " ", (0, n.jsx)("span", {
																			children: (0, n.jsx)("img", {
																				src: "/assets/images/icon/envlop-5.svg",
																				alt: ""
																			})
																		})]
																	})]
																}), (0, n.jsxs)("li", {
																	children: ["Website:", (0, n.jsxs)("a", {
																		href: "#",
																		children: ["www.infositeexample.com", " ", (0, n.jsx)("span", {
																			children: (0, n.jsx)("img", {
																				src: "/assets/images/icon/web-5.svg ",
																				alt: ""
																			})
																		})]
																	})]
																})]
															})]
														})
													})]
												}), (0, n.jsx)("div", {
													className: "col-lg-12",
													children: (0, n.jsxs)("div", {
														className: "single-information-area",
														children: [(0, n.jsxs)("div", {
															className: "section-title",
															children: [(0, n.jsx)("h6", {
																children: "Career Objective"
															}), (0, n.jsx)("div", {
																className: "dash"
															})]
														}), (0, n.jsx)("div", {
															className: "description",
															children: (0, n.jsx)("p", {
																children: "I'm a passionate UI/UX designer and can bring innovative ideas & concepts to life for client-based design projects. I have more than 3 years of design experience in digital/e-commerce. I experienced at tackle various needs from landing page designs, web app interfaces. I have skills in User Experience Design (UXD), user-centered Design, Interaction and Visual Design for websites, applications, web, and mobile products, wireframes, mock-ups, qualitative and quantitative user studies, usability analysis, and informal usability audits."
															})
														})]
													})
												}), (0, n.jsx)("div", {
													className: "col-lg-12",
													children: (0, n.jsxs)("div", {
														className: "single-information-area",
														children: [(0, n.jsxs)("div", {
															className: "section-title",
															children: [(0, n.jsx)("h6", {
																children: "Personal Information"
															}), (0, n.jsx)("div", {
																className: "dash"
															})]
														}), (0, n.jsxs)("div", {
															className: "row g-4",
															children: [(0, n.jsx)("div", {
																className: "col-lg-6 devaider1 position-relative",
																children: (0, n.jsx)("div", {
																	className: "informations",
																	children: (0, n.jsxs)("ul", {
																		children: [(0, n.jsxs)("li", {
																			children: [(0, n.jsx)("span", {
																				children: "Father’s Name:"
																			}), " ", "Mr. Norman Frankly"]
																		}), (0, n.jsxs)("li", {
																			children: [(0, n.jsx)("span", {
																				children: "Date of Birth:"
																			}), " ", "03 January,1998"]
																		}), (0, n.jsxs)("li", {
																			children: [(0, n.jsx)("span", {
																				children: "Nationality:"
																			}), " ", "Bangladeshi"]
																		}), (0, n.jsxs)("li", {
																			children: [(0, n.jsx)("span", {
																				children: "Marital Status:"
																			}), " ", "Unmarried"]
																		}), (0, n.jsxs)("li", {
																			children: [(0, n.jsx)("span", {
																				children: "Height:"
																			}), " 5’ 5’’"]
																		}), (0, n.jsxs)("li", {
																			children: [(0, n.jsx)("span", {
																				children: "Blood Group:"
																			}), " ", "O ve+"]
																		}), (0, n.jsxs)("li", {
																			children: [(0, n.jsx)("span", {
																				children: "Permanent Address:"
																			}), " ", "Village: Mirpur-12 Block-C, Thana: Pallavi, District: Dhaka, Division: Dhaka"]
																		})]
																	})
																})
															}), (0, n.jsx)("div", {
																className: "col-lg-6 pl-40",
																children: (0, n.jsx)("div", {
																	className: "informations d-flex justify-content-end",
																	children: (0, n.jsxs)("ul", {
																		children: [(0, n.jsxs)("li", {
																			children: [(0, n.jsx)("span", {
																				children: "Mother’s Name:"
																			}), " ", "Mrs. Macoline Frankly"]
																		}), (0, n.jsxs)("li", {
																			children: [(0, n.jsx)("span", {
																				children: "National ID:"
																			}), " ", "88 9919 6712 8762"]
																		}), (0, n.jsxs)("li", {
																			children: [(0, n.jsx)("span", {
																				children: "Religion:"
																			}), " ", "Islam"]
																		}), (0, n.jsxs)("li", {
																			children: [(0, n.jsx)("span", {
																				children: "Gender:"
																			}), " Male"]
																		}), (0, n.jsxs)("li", {
																			children: [(0, n.jsx)("span", {
																				children: "Weight:"
																			}), " 75 KG"]
																		}), (0, n.jsxs)("li", {
																			children: [(0, n.jsx)("span", {
																				children: "Height:"
																			}), " 5’ 5’’"]
																		}), (0, n.jsxs)("li", {
																			children: [(0, n.jsx)("span", {
																				children: "Present Address:"
																			}), " ", "Village: Mirpur DOSH, Block-C, Avenue-02, Thana: Pallavi, District: Dhaka, Division: Dhaka."]
																		})]
																	})
																})
															})]
														})]
													})
												}), (0, n.jsx)("div", {
													className: "col-lg-12",
													children: (0, n.jsxs)("div", {
														className: "single-information-area",
														children: [(0, n.jsxs)("div", {
															className: "section-title",
															children: [(0, n.jsx)("h6", {
																children: "Educational Qualification"
															}), (0, n.jsx)("div", {
																className: "dash"
															})]
														}), (0, n.jsxs)("div", {
															className: "educational-qualification mb-30",
															children: [(0, n.jsxs)("div", {
																className: "passing-year",
																children: [(0, n.jsxs)("p", {
																	children: [(0, n.jsx)("span", {
																		children: "01."
																	}), "April, 2016- May, 2020"]
																}), (0, n.jsx)("span", {})]
															}), (0, n.jsxs)("div", {
																className: "education-dt",
																children: [(0, n.jsx)("h6", {
																	children: "Royals Republic Science & Technology University"
																}), (0, n.jsxs)("ul", {
																	children: [(0, n.jsxs)("li", {
																		children: [(0, n.jsx)("span", {
																			children: "Education Level:"
																		}), " ", "Graduation"]
																	}), (0, n.jsxs)("li", {
																		children: [(0, n.jsx)("span", {
																			children: "My Major:"
																		}), " ", "Bachelor Degree In CSE"]
																	}), (0, n.jsxs)("li", {
																		children: [(0, n.jsx)("span", {
																			children: "Result/GPA:"
																		}), " ", "3.75/4.00"]
																	})]
																})]
															})]
														}), (0, n.jsxs)("div", {
															className: "educational-qualification",
															children: [(0, n.jsxs)("div", {
																className: "passing-year",
																children: [(0, n.jsxs)("p", {
																	children: [(0, n.jsx)("span", {
																		children: "02."
																	}), "June, 2014- April, 2016"]
																}), (0, n.jsx)("span", {})]
															}), (0, n.jsxs)("div", {
																className: "education-dt",
																children: [(0, n.jsx)("h6", {
																	children: "International Collegiate School & College"
																}), (0, n.jsxs)("ul", {
																	children: [(0, n.jsxs)("li", {
																		children: [(0, n.jsx)("span", {
																			children: "Education Level:"
																		}), " ", "HSC"]
																	}), (0, n.jsxs)("li", {
																		children: [(0, n.jsx)("span", {
																			children: "My Major:"
																		}), " ", "Science"]
																	}), (0, n.jsxs)("li", {
																		children: [(0, n.jsx)("span", {
																			children: "Result/GPA:"
																		}), " ", "4.96/5.00"]
																	})]
																})]
															})]
														})]
													})
												}), (0, n.jsx)("div", {
													className: "col-lg-12",
													children: (0, n.jsxs)("div", {
														className: "single-information-area",
														children: [(0, n.jsxs)("div", {
															className: "section-title",
															children: [(0, n.jsx)("h6", {
																children: "Career Application"
															}), (0, n.jsx)("div", {
																className: "dash"
															})]
														}), (0, n.jsxs)("div", {
															className: "row g-4 ",
															children: [(0, n.jsx)("div", {
																className: "col-lg-6 devaider1 position-relative",
																children: (0, n.jsx)("div", {
																	className: "informations",
																	children: (0, n.jsxs)("ul", {
																		children: [(0, n.jsxs)("li", {
																			children: [(0, n.jsx)("span", {
																				children: "Current Job Place:"
																			}), " ", "Norland Tech of Industry"]
																		}), (0, n.jsxs)("li", {
																			children: [(0, n.jsx)("span", {
																				children: "Position:"
																			}), " ", "UI/UX Engineer"]
																		}), (0, n.jsxs)("li", {
																			children: [(0, n.jsx)("span", {
																				children: "Experiences:"
																			}), " ", "3 Years"]
																		})]
																	})
																})
															}), (0, n.jsx)("div", {
																className: "col-lg-6 pl-40",
																children: (0, n.jsx)("div", {
																	className: "informations",
																	children: (0, n.jsxs)("ul", {
																		children: [(0, n.jsxs)("li", {
																			children: [(0, n.jsx)("span", {
																				children: "Current Salary:"
																			}), " ", "30000/="]
																		}), (0, n.jsxs)("li", {
																			children: [(0, n.jsx)("span", {
																				children: "Expected Salary:"
																			}), " ", "40000/="]
																		}), (0, n.jsxs)("li", {
																			children: [(0, n.jsx)("span", {
																				children: "Available:"
																			}), " ", "Full Time"]
																		})]
																	})
																})
															})]
														})]
													})
												}), (0, n.jsx)("div", {
													className: "col-lg-12",
													children: (0, n.jsxs)("div", {
														className: "single-information-area",
														children: [(0, n.jsxs)("div", {
															className: "section-title",
															children: [(0, n.jsx)("h6", {
																children: "Professionals Information"
															}), (0, n.jsx)("div", {
																className: "dash"
															})]
														}), (0, n.jsxs)("div", {
															className: "educational-qualification mb-30",
															children: [(0, n.jsxs)("div", {
																className: "passing-year",
																children: [(0, n.jsxs)("p", {
																	children: [(0, n.jsx)("span", {
																		children: "01."
																	}), "April, 2021- May, 2022"]
																}), (0, n.jsx)("span", {})]
															}), (0, n.jsxs)("div", {
																className: "education-dt",
																children: [(0, n.jsx)("h6", {
																	children: "Bistro.Tech Group of Industry"
																}), (0, n.jsxs)("p", {
																	className: "position",
																	children: [(0, n.jsx)("span", {
																		children: "Position:"
																	}), " UI/UX Engineer ( Full-Time)"]
																}), (0, n.jsxs)("div", {
																	className: "responsibility",
																	children: [(0, n.jsx)("h6", {
																		children: "Responsibility:"
																	}), (0, n.jsxs)("ul", {
																		children: [(0, n.jsx)("li", {
																			children: "Creating high quality landing pages optimized for client website brands."
																		}), (0, n.jsx)("li", {
																			children: "Creating e-commerce interfaces, design enhancements, and overall improved user experience of existing sites"
																		})]
																	})]
																})]
															})]
														}), (0, n.jsxs)("div", {
															className: "educational-qualification",
															children: [(0, n.jsxs)("div", {
																className: "passing-year",
																children: [(0, n.jsxs)("p", {
																	children: [(0, n.jsx)("span", {
																		children: "02."
																	}), "April, 2022- Continuing"]
																}), (0, n.jsx)("span", {})]
															}), (0, n.jsxs)("div", {
																className: "education-dt",
																children: [(0, n.jsx)("h6", {
																	children: "Norland Tech of Industry"
																}), (0, n.jsxs)("p", {
																	className: "position",
																	children: [(0, n.jsx)("span", {
																		children: "Position:"
																	}), " UI/UX Engineer ( Full-Time)"]
																}), (0, n.jsxs)("div", {
																	className: "responsibility",
																	children: [(0, n.jsx)("h6", {
																		children: "Responsibility:"
																	}), (0, n.jsxs)("ul", {
																		children: [(0, n.jsx)("li", {
																			children: "Creating high quality landing pages optimized for client website brands."
																		}), (0, n.jsx)("li", {
																			children: "Creating e-commerce interfaces, design enhancements, and overall improved user experience of existing sites"
																		})]
																	})]
																})]
															})]
														})]
													})
												}), (0, n.jsx)("div", {
													className: "col-lg-12",
													children: (0, n.jsxs)("div", {
														className: "single-information-area",
														children: [(0, n.jsxs)("div", {
															className: "section-title",
															children: [(0, n.jsx)("h6", {
																children: "Special Skills"
															}), (0, n.jsx)("div", {
																className: "dash"
															})]
														}), (0, n.jsx)("div", {
															className: "tag-area",
															children: (0, n.jsxs)("ul", {
																children: [(0, n.jsx)("li", {
																	children: "Web Development,"
																}), (0, n.jsx)("li", {
																	children: "UI/UX Designer,"
																}), (0, n.jsx)("li", {
																	children: "React Development."
																})]
															})
														})]
													})
												}), (0, n.jsx)("div", {
													className: "col-lg-12",
													children: (0, n.jsxs)("div", {
														className: "single-information-area",
														children: [(0, n.jsxs)("div", {
															className: "section-title",
															children: [(0, n.jsx)("h6", {
																children: "Social Network"
															}), (0, n.jsx)("div", {
																className: "dash"
															})]
														}), (0, n.jsx)("div", {
															className: "social-area",
															children: (0, n.jsxs)("ul", {
																children: [(0, n.jsx)("li", {
																	children: (0, n.jsx)("a", {
																		href: "https://www.facebook.com/",
																		children: "Facebook"
																	})
																}), (0, n.jsx)("li", {
																	children: (0, n.jsx)("a", {
																		href: "https://twitter.com/",
																		children: "Twitter"
																	})
																}), (0, n.jsx)("li", {
																	children: (0, n.jsx)("a", {
																		href: "https://www.linkedin.com/",
																		children: "Linkedin"
																	})
																}), (0, n.jsx)("li", {
																	children: (0, n.jsx)("a", {
																		href: "https://www.pinterest.com/",
																		children: "Pinterest"
																	})
																}), (0, n.jsx)("li", {
																	children: (0, n.jsx)("a", {
																		href: "https://dribbble.com/",
																		children: "Dribbble"
																	})
																}), (0, n.jsx)("li", {
																	children: (0, n.jsx)("a", {
																		href: "https://www.behance.net/",
																		children: "Behance"
																	})
																})]
															})
														})]
													})
												}), (0, n.jsxs)("div", {
													className: "col-lg-12",
													children: [(0, n.jsxs)("div", {
														className: "declaration-area",
														children: [(0, n.jsx)("h6", {
															children: "Declaration & Authentication-"
														}), (0, n.jsx)("p", {
															children: "I do hereby declare that the information given above is true of my knowledge."
														})]
													}), (0, n.jsxs)("div", {
														className: "gratitude-area",
														children: [(0, n.jsx)("span", {
															children: "Yours Faithful,"
														}), (0, n.jsx)("h6", {
															children: "Jacoline Frankly"
														})]
													})]
												})]
											})
										})
									})
								}), (0, n.jsx)("div", {
									className: "modal-footer",
									children: (0, n.jsx)("div", {
										className: "button-groups",
										children: (0, n.jsxs)("ul", {
											children: [(0, n.jsx)("li", {
												children: (0, n.jsxs)("button", {
													className: "primary-bg",
													children: [(0, n.jsx)("img", {
														src: "/assets/images/icon/pdf2.svg",
														alt: ""
													}), " ", "Download PDF"]
												})
											}), (0, n.jsx)("li", {
												children: (0, n.jsxs)("button", {
													children: [(0, n.jsx)("img", {
														src: "/assets/images/icon/shortlist2.svg",
														alt: ""
													}), " ", "Shortlist"]
												})
											}), (0, n.jsx)("li", {
												children: (0, n.jsxs)("button", {
													className: "red-bg",
													children: [(0, n.jsx)("img", {
														src: "/assets/images/icon/reject2.svg",
														alt: ""
													}), " ", "reject"]
												})
											})]
										})
									})
								})]
							})
						})
					})
				},
				o = function() {
					return (0, n.jsx)(n.Fragment, {
						children: (0, n.jsx)("div", {
							className: "col-lg-12",
							children: (0, n.jsxs)("div", {
								className: "dashboard.html-inner",
								children: [(0, n.jsxs)("div", {
									className: "author-and-action-btn-area two mb-40",
									children: [(0, n.jsxs)("div", {
										className: "author-area two",
										children: [(0, n.jsx)("div", {
											className: "author-img",
											children: (0, n.jsx)("img", {
												src: "/assets/images/bg/company-img2.png",
												alt: ""
											})
										}), (0, n.jsxs)("div", {
											className: "author-content",
											children: [(0, n.jsx)("span", {
												children: "Hello,"
											}), (0, n.jsx)("h4", {
												children: "Elite Hangstroman"
											})]
										})]
									}), (0, n.jsx)("div", {
										className: "action-btn-group",
										children: (0, n.jsx)("ul", {
											children: (0, n.jsx)("li", {
												children: (0, n.jsx)(t(), {
													legacyBehavior: !0,
													href: "/company/company-profile",
													children: (0, n.jsxs)("a", {
														children: [(0, n.jsx)("span", {
															children: (0, n.jsx)("img", {
																src: "/assets/images/icon/edit2.svg",
																alt: ""
															})
														}), "Edit Profile"]
													})
												})
											})
										})
									})]
								}), (0, n.jsxs)("div", {
									className: "counter-area",
									children: [(0, n.jsxs)("div", {
										className: "row g-4 justify-content-center mb-30",
										children: [(0, n.jsx)("div", {
											className: "col-lg-3 col-sm-6",
											children: (0, n.jsxs)("div", {
												className: "counter-single",
												children: [(0, n.jsx)("div", {
													className: "counter-icon",
													children: (0, n.jsx)("img", {
														src: "/assets/images/icon/tt-applied.svg",
														alt: "image"
													})
												}), (0, n.jsxs)("div", {
													className: "coundown",
													children: [(0, n.jsx)("p", {
														children: "Total Applied"
													}), (0, n.jsxs)("div", {
														className: "d-flex align-items-center",
														children: [(0, n.jsx)("h3", {
															className: "odometer",
															children: (0, n.jsx)(l.ZP, {
																start: 0,
																end: 30,
																duration: 3
															})
														}), (0, n.jsx)("span", {
															children: "+"
														})]
													})]
												})]
											})
										}), (0, n.jsx)("div", {
											className: "col-lg-3 col-sm-6",
											children: (0, n.jsxs)("div", {
												className: "counter-single two",
												children: [(0, n.jsx)("div", {
													className: "counter-icon",
													children: (0, n.jsx)("img", {
														src: "/assets/images/icon/save-job.svg",
														alt: "image"
													})
												}), (0, n.jsxs)("div", {
													className: "coundown",
													children: [(0, n.jsx)("p", {
														children: "Live Jobs"
													}), (0, n.jsxs)("div", {
														className: "d-flex align-items-center",
														children: [(0, n.jsxs)("h3", {
															className: "odometer",
															children: [" ", (0, n.jsx)(l.ZP, {
																start: 0,
																end: 80,
																duration: 3
															})]
														}), (0, n.jsx)("span", {
															children: "+"
														})]
													})]
												})]
											})
										}), (0, n.jsx)("div", {
											className: "col-lg-3 col-sm-6",
											children: (0, n.jsxs)("div", {
												className: "counter-single three",
												children: [(0, n.jsx)("div", {
													className: "counter-icon",
													children: (0, n.jsx)("img", {
														src: "/assets/images/icon/pending-icon.svg",
														alt: "image"
													})
												}), (0, n.jsxs)("div", {
													className: "coundown",
													children: [(0, n.jsx)("p", {
														children: "Pending Job"
													}), (0, n.jsxs)("div", {
														className: "d-flex align-items-center",
														children: [(0, n.jsxs)("h3", {
															className: "odometer",
															children: [" ", (0, n.jsx)(l.ZP, {
																start: 0,
																end: 120,
																duration: 3
															})]
														}), (0, n.jsx)("span", {
															children: "+"
														})]
													})]
												})]
											})
										}), (0, n.jsx)("div", {
											className: "col-lg-3 col-sm-6",
											children: (0, n.jsxs)("div", {
												className: "counter-single four",
												children: [(0, n.jsx)("div", {
													className: "counter-icon",
													children: (0, n.jsx)("img", {
														src: "/assets/images/icon/closed-icon.svg",
														alt: "image"
													})
												}), (0, n.jsxs)("div", {
													className: "coundown",
													children: [(0, n.jsx)("p", {
														children: "Closed Jobs"
													}), (0, n.jsxs)("div", {
														className: "d-flex align-items-center",
														children: [(0, n.jsxs)("h3", {
															className: "odometer",
															children: [" ", (0, n.jsx)(l.ZP, {
																start: 0,
																end: 900,
																duration: 3
															})]
														}), (0, n.jsx)("span", {
															children: "+"
														})]
													})]
												})]
											})
										})]
									}), (0, n.jsxs)("div", {
										className: "row g-4 justify-content-cente",
										children: [(0, n.jsx)("div", {
											className: "col-lg-3 col-sm-6",
											children: (0, n.jsxs)("div", {
												className: "counter-single",
												children: [(0, n.jsx)("div", {
													className: "counter-icon",
													children: (0, n.jsx)("img", {
														src: "/assets/images/icon/total-view-icon.svg",
														alt: "image"
													})
												}), (0, n.jsxs)("div", {
													className: "coundown",
													children: [(0, n.jsx)("p", {
														children: "Total View"
													}), (0, n.jsxs)("div", {
														className: "d-flex align-items-center",
														children: [(0, n.jsxs)("h3", {
															className: "odometer",
															children: [" ", (0, n.jsx)(l.ZP, {
																start: 0,
																end: 2500,
																duration: 3
															})]
														}), (0, n.jsx)("span", {
															children: "+"
														})]
													})]
												})]
											})
										}), (0, n.jsx)("div", {
											className: "col-lg-3 col-sm-6",
											children: (0, n.jsxs)("div", {
												className: "counter-single two",
												children: [(0, n.jsx)("div", {
													className: "counter-icon",
													children: (0, n.jsx)("img", {
														src: "/assets/images/icon/follow-icon.svg",
														alt: "image"
													})
												}), (0, n.jsxs)("div", {
													className: "coundown",
													children: [(0, n.jsx)("p", {
														children: "Our Followers"
													}), (0, n.jsxs)("div", {
														className: "d-flex align-items-center",
														children: [(0, n.jsxs)("h3", {
															className: "odometer",
															children: [" ", (0, n.jsx)(l.ZP, {
																start: 0,
																end: 250,
																duration: 3
															})]
														}), (0, n.jsx)("span", {
															children: "+"
														})]
													})]
												})]
											})
										}), (0, n.jsx)("div", {
											className: "col-lg-3 col-sm-6",
											children: (0, n.jsxs)("div", {
												className: "counter-single three",
												children: [(0, n.jsx)("div", {
													className: "counter-icon",
													children: (0, n.jsx)("img", {
														src: "/assets/images/icon/highlight-icon.svg",
														alt: "image"
													})
												}), (0, n.jsxs)("div", {
													className: "coundown",
													children: [(0, n.jsx)("p", {
														children: "Highlighted Jobs"
													}), (0, n.jsxs)("div", {
														className: "d-flex align-items-center",
														children: [(0, n.jsxs)("h3", {
															className: "odometer",
															children: [" ", (0, n.jsx)(l.ZP, {
																start: 0,
																end: 154,
																duration: 3
															})]
														}), (0, n.jsx)("span", {
															children: "+"
														})]
													})]
												})]
											})
										}), (0, n.jsx)("div", {
											className: "col-lg-3 col-sm-6",
											children: (0, n.jsxs)("div", {
												className: "counter-single five",
												children: [(0, n.jsx)("div", {
													className: "counter-icon",
													children: (0, n.jsx)("img", {
														src: "/assets/images/icon/featured-icon.svg",
														alt: "image"
													})
												}), (0, n.jsxs)("div", {
													className: "coundown",
													children: [(0, n.jsx)("p", {
														children: "Our Followers"
													}), (0, n.jsxs)("div", {
														className: "d-flex align-items-center",
														children: [(0, n.jsxs)("h3", {
															className: "odometer",
															children: [" ", (0, n.jsx)(l.ZP, {
																start: 0,
																end: 500,
																duration: 3
															})]
														}), (0, n.jsx)("span", {
															children: "+"
														})]
													})]
												})]
											})
										})]
									})]
								}), (0, n.jsxs)("div", {
									className: "new-applied-job.html-area",
									children: [(0, n.jsx)("h5", {
										children: "New Applied List:"
									}), (0, n.jsx)("div", {
										className: "table-wrapper2",
										children: (0, n.jsx)("table", {
											className: "eg-table table category.html-table mb-0",
											children: (0, n.jsx)("tbody", {
												children: r.slice(0, 6).map(e => {
													let {
														id: s,
														applicent_name: i,
														applicent_img: a,
														applicent_university: t,
														applicent_designation: l,
														applicent_exprience: r,
														applicent_salary: o,
														applicent_privious_compnay_name: d,
														applied_date: h
													} = e;
													return (0, n.jsxs)("tr", {
														children: [(0, n.jsx)("td", {
															"data-label": "Candidate Name",
															children: (0, n.jsxs)("div", {
																className: "employee-info",
																children: [(0, n.jsx)("div", {
																	className: "employee-img",
																	children: (0, n.jsx)("img", {
																		src: a,
																		alt: ""
																	})
																}), (0, n.jsxs)("div", {
																	className: "employee-content",
																	children: [(0, n.jsx)("button", {
																		type: "button",
																		className: "btn btn-primary",
																		"data-bs-toggle": "modal",
																		"data-bs-target": "#exampleModal",
																		children: i
																	}), (0, n.jsx)(c, {}), (0, n.jsxs)("span", {
																		children: [(0, n.jsx)("img", {
																			src: "/assets/images/icon/company-2.svg",
																			alt: ""
																		}), t]
																	}), (0, n.jsxs)("p", {
																		children: [(0, n.jsx)("span", {
																			children: "Applied On:"
																		}), " ", h]
																	})]
																})]
															})
														}), (0, n.jsx)("td", {
															"data-label": "Carrer Summary",
															children: (0, n.jsxs)("div", {
																className: "carrer-summary",
																children: [(0, n.jsxs)("h6", {
																	children: [d, " \xa0", " ", (0, n.jsxs)("span", {
																		children: ["(", l, ")"]
																	})]
																}), (0, n.jsxs)("ul", {
																	children: [(0, n.jsxs)("li", {
																		children: [(0, n.jsx)("span", {
																			children: "Experience:"
																		}), " ", r]
																	}), (0, n.jsxs)("li", {
																		children: [(0, n.jsx)("span", {
																			children: "Salary:"
																		}), " ", o]
																	})]
																})]
															})
														}), (0, n.jsx)("td", {
															"data-label": "Actions",
															children: (0, n.jsx)("div", {
																className: "action-btn-group",
																children: (0, n.jsxs)("ul", {
																	children: [(0, n.jsx)("li", {
																		children: (0, n.jsxs)("button", {
																			children: [(0, n.jsx)("img", {
																				src: "/assets/images/icon/shortlist-icon.svg",
																				alt: ""
																			}), " ", "Shortlist"]
																		})
																	}), (0, n.jsx)("li", {
																		children: (0, n.jsxs)("button", {
																			className: "reject",
																			children: [(0, n.jsx)("img", {
																				src: "/assets/images/icon/rejected-icon.svg",
																				alt: ""
																			}), " ", "Rejected"]
																		})
																	})]
																})
															})
														})]
													}, s)
												})
											})
										})
									})]
								})]
							})
						})
					})
				},
				d = i(4532),
				h = function() {
					return (0, n.jsx)(d.Z, {
						children: (0, n.jsx)(o, {})
					})
				}
		},
		7857: function(e, s, i) {
			"use strict";
			var n = i(7294),
				a = i(8273);

			function t(e, s) {
				var i = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(e);
					s && (n = n.filter(function(s) {
						return Object.getOwnPropertyDescriptor(e, s).enumerable
					})), i.push.apply(i, n)
				}
				return i
			}

			function l(e) {
				for (var s = 1; s < arguments.length; s++) {
					var i = null != arguments[s] ? arguments[s] : {};
					s % 2 ? t(Object(i), !0).forEach(function(s) {
						var n, a, t;
						n = e, a = s, t = i[s], (a = function(e) {
							var s = function(e, s) {
								if ("object" != typeof e || null === e) return e;
								var i = e[Symbol.toPrimitive];
								if (void 0 !== i) {
									var n = i.call(e, s || "default");
									if ("object" != typeof n) return n;
									throw TypeError("@@toPrimitive must return a primitive value.")
								}
								return ("string" === s ? String : Number)(e)
							}(e, "string");
							return "symbol" == typeof s ? s : String(s)
						}(a)) in n ? Object.defineProperty(n, a, {
							value: t,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : n[a] = t
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : t(Object(i)).forEach(function(s) {
						Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(i, s))
					})
				}
				return e
			}

			function r() {
				return (r = Object.assign ? Object.assign.bind() : function(e) {
					for (var s = 1; s < arguments.length; s++) {
						var i = arguments[s];
						for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
					}
					return e
				}).apply(this, arguments)
			}

			function c(e, s) {
				if (null == e) return {};
				var i, n, a = function(e, s) {
					if (null == e) return {};
					var i, n, a = {},
						t = Object.keys(e);
					for (n = 0; n < t.length; n++) i = t[n], s.indexOf(i) >= 0 || (a[i] = e[i]);
					return a
				}(e, s);
				if (Object.getOwnPropertySymbols) {
					var t = Object.getOwnPropertySymbols(e);
					for (n = 0; n < t.length; n++) i = t[n], !(s.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (a[i] = e[i])
				}
				return a
			}
			var o = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? n.useLayoutEffect : n.useEffect;

			function d(e) {
				var s = n.useRef(e);
				return o(function() {
					s.current = e
				}), n.useCallback(function() {
					for (var e = arguments.length, i = Array(e), n = 0; n < e; n++) i[n] = arguments[n];
					return s.current.apply(void 0, i)
				}, [])
			}
			var h = function(e, s) {
					var i = s.decimal,
						n = s.decimals,
						t = s.duration,
						l = s.easingFn,
						r = s.end,
						c = s.formattingFn,
						o = s.numerals,
						d = s.prefix,
						h = s.separator,
						p = s.start,
						m = s.suffix,
						u = s.useEasing,
						x = s.enableScrollSpy,
						j = s.scrollSpyDelay,
						g = s.scrollSpyOnce;
					return new a.CountUp(e, r, {
						startVal: p,
						duration: t,
						decimal: i,
						decimalPlaces: n,
						easingFn: l,
						formattingFn: c,
						numerals: o,
						separator: h,
						prefix: d,
						suffix: m,
						useEasing: u,
						useGrouping: !!h,
						enableScrollSpy: x,
						scrollSpyDelay: j,
						scrollSpyOnce: g
					})
				},
				p = ["ref", "startOnMount", "enableReinitialize", "delay", "onEnd", "onStart", "onPauseResume", "onReset", "onUpdate"],
				m = {
					decimal: ".",
					delay: null,
					prefix: "",
					suffix: "",
					duration: 2,
					start: 0,
					startOnMount: !0,
					enableReinitialize: !0
				},
				u = function(e) {
					var s = n.useMemo(function() {
							return l(l({}, m), e)
						}, [e]),
						i = s.ref,
						a = s.startOnMount,
						t = s.enableReinitialize,
						r = s.delay,
						o = s.onEnd,
						u = s.onStart,
						x = s.onPauseResume,
						j = s.onReset,
						g = s.onUpdate,
						f = c(s, p),
						v = n.useRef(),
						y = n.useRef(),
						N = n.useRef(!1),
						b = d(function() {
							return h("string" == typeof i ? i : i.current, f)
						}),
						_ = d(function(e) {
							var s = v.current;
							if (s && !e) return s;
							var i = b();
							return v.current = i, i
						}),
						w = d(function() {
							var e = function() {
								return _(!0).start(function() {
									null == o || o({
										pauseResume: V,
										reset: E,
										start: A,
										update: P
									})
								})
							};
							r && r > 0 ? y.current = setTimeout(e, 1e3 * r) : e(), null == u || u({
								pauseResume: V,
								reset: E,
								update: P
							})
						}),
						V = d(function() {
							_().pauseResume(), null == x || x({
								reset: E,
								start: A,
								update: P
							})
						}),
						E = d(function() {
							_().el && (y.current && clearTimeout(y.current), _().reset(), null == j || j({
								pauseResume: V,
								start: A,
								update: P
							}))
						}),
						P = d(function(e) {
							_().update(e), null == g || g({
								pauseResume: V,
								reset: E,
								start: A
							})
						}),
						A = d(function() {
							E(), w()
						}),
						S = d(function(e) {
							a && (e && E(), w())
						});
					return n.useEffect(function() {
						N.current ? t && S(!0) : (N.current = !0, S())
					}, [t, N, S, r, e.start, e.suffix, e.prefix, e.duration, e.separator, e.decimals, e.decimal, e.formattingFn]), n.useEffect(function() {
						return function() {
							E()
						}
					}, [E]), {
						start: A,
						pauseResume: V,
						reset: E,
						update: P,
						getCountUp: _
					}
				},
				x = ["className", "redraw", "containerProps", "children", "style"];
			s.ZP = function(e) {
				var s = e.className,
					i = e.redraw,
					a = e.containerProps,
					t = e.children,
					o = e.style,
					h = c(e, x),
					p = n.useRef(null),
					m = n.useRef(!1),
					j = u(l(l({}, h), {}, {
						ref: p,
						startOnMount: "function" != typeof t || 0 === e.delay,
						enableReinitialize: !1
					})),
					g = j.start,
					f = j.reset,
					v = j.update,
					y = j.pauseResume,
					N = j.getCountUp,
					b = d(function() {
						g()
					}),
					_ = d(function(s) {
						e.preserveValue || f(), v(s)
					}),
					w = d(function() {
						if ("function" == typeof e.children && !(p.current instanceof Element)) {
							console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.');
							return
						}
						N()
					});
				return (n.useEffect(function() {
					w()
				}, [w]), n.useEffect(function() {
					m.current && _(e.end)
				}, [e.end, _]), n.useEffect(function() {
					i && m.current && b()
				}, [b, i, i && e]), n.useEffect(function() {
					!i && m.current && b()
				}, [b, i, e.start, e.suffix, e.prefix, e.duration, e.separator, e.decimals, e.decimal, e.className, e.formattingFn]), n.useEffect(function() {
					m.current = !0
				}, []), "function" == typeof t) ? t({
					countUpRef: p,
					start: g,
					reset: f,
					update: v,
					pauseResume: y,
					getCountUp: N
				}) : n.createElement("span", r({
					className: s,
					ref: p,
					style: o
				}, a), void 0 !== e.start ? N().formattingFn(e.start) : "")
			}
		}
	},
	function(e) {
		e.O(0, [3424, 8004, 7052, 4532, 9774, 2888, 179], function() {
			return e(e.s = 680)
		}), _N_E = e.O()
	}
]);