(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[1745], {
		8729: function(e, s, i) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/job-details", function() {
				return i(9961)
			}])
		},
		2796: function(e, s, i) {
			"use strict";
			var a = i(5893),
				l = i(1664),
				n = i.n(l);
			i(7294), s.Z = function(e) {
				let {
					pageTitle: s,
					pageName: i
				} = e;
				return (0, a.jsx)("div", {
					className: "inner-banner",
					children: (0, a.jsx)("div", {
						className: "container",
						children: (0, a.jsx)("div", {
							className: "row",
							children: (0, a.jsx)("div", {
								className: "col-lg-12",
								children: (0, a.jsxs)("div", {
									className: "banner-content text-center",
									children: [(0, a.jsx)("h1", {
										children: s
									}), (0, a.jsx)("span", {}), (0, a.jsx)("nav", {
										"aria-label": "breadcrumb",
										children: (0, a.jsxs)("ol", {
											className: "breadcrumb",
											children: [(0, a.jsx)("li", {
												className: "breadcrumb-item",
												children: (0, a.jsx)(n(), {
													legacyBehavior: !0,
													href: "/",
													children: "Home"
												})
											}), (0, a.jsx)("li", {
												className: "breadcrumb-item active",
												"aria-current": "page",
												children: i
											})]
										})
									})]
								})
							})
						})
					})
				})
			}
		},
		1988: function(e, s, i) {
			"use strict";
			var a = i(5893),
				l = i(9008),
				n = i.n(l);
			i(7294);
			var r = i(8004),
				c = i(7052);
			s.Z = function(e) {
				let {
					children: s
				} = e;
				return (0, a.jsxs)(a.Fragment, {
					children: [(0, a.jsxs)(n(), {
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
							href: "/assets/images/sm-logo.svg",
							type: "image/gif",
							sizes: "20x20"
						})]
					}), (0, a.jsx)(c.Z, {}), s, (0, a.jsx)(r.Z, {})]
				})
			}
		},
		9961: function(e, s, i) {
			"use strict";
			i.r(s), i.d(s, {
				default: function() {
					return p
				}
			});
			var a = i(5893),
				l = i(7294),
				n = i(2796),
				r = i(8116),
				c = i(719),
				d = i(2204),
				t = i(9178);
			i(5737);
			var m = JSON.parse('[{"id":1,"big_img":"assets/images/bg/company-gallery-big-01.png","small_img":"assets/images/bg/company-gallery-sm-01.png"},{"id":2,"big_img":"assets/images/bg/company-gallery-big-02.png","small_img":"assets/images/bg/company-gallery-sm-02.png"},{"id":3,"big_img":"assets/images/bg/company-gallery-big-03.png","small_img":"assets/images/bg/company-gallery-sm-03.png"},{"id":4,"big_img":"assets/images/bg/company-gallery-big-04.png","small_img":"assets/images/bg/company-gallery-sm-04.png"},{"id":5,"big_img":"assets/images/bg/company-gallery-big-05.png","small_img":"assets/images/bg/company-gallery-sm-05.png"}]');
			r.ZP.use([r.W_, r.tl, r.pt, r.W_]);
			var o = function() {
					let [e, s] = (0, l.useState)({
						openingState: !1,
						openingIndex: 0
					}), i = (0, l.useMemo)(() => ({
						slidesPerView: "auto",
						spaceBetween: 30,
						loop: !0,
						speed: 1500,
						autoplay: {
							delay: 2e3
						},
						navigation: {
							nextEl: "._next-3",
							prevEl: ".prev-3"
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
								slidesPerView: 4
							},
							1200: {
								slidesPerView: 5
							},
							1400: {
								slidesPerView: 5
							},
							1600: {
								slidesPerView: 5
							}
						}
					}), []);
					return (0, a.jsxs)("div", {
						className: "company-gallery",
						children: [(0, a.jsx)("div", {
							className: "title",
							children: (0, a.jsx)("h5", {
								children: "Company Gallery Viewsss"
							})
						}), (0, a.jsx)(c.tq, { ...i,
							className: "swiper company-gallery-slider",
							children: (0, a.jsx)("div", {
								className: "swiper-wrapper",
								children: m.map((e, i) => {
									let {
										id: l,
										small_img: n
									} = e;
									return (0, a.jsx)(c.o5, {
										className: "swiper-slide",
										children: (0, a.jsx)("div", {
											"data-fancybox": "gallery",
											className: "gallery2-img",
											children: (0, a.jsxs)("div", {
												className: "gallery-wrap",
												children: [(0, a.jsx)("img", {
													className: "img-fluid",
													src: n,
													alt: ""
												}), (0, a.jsx)("div", {
													className: "overlay d-flex align-items-center justify-content-center",
													children: (0, a.jsx)("div", {
														className: "items-content text-center",
														children: (0, a.jsx)("img", {
															style: {
																cursor: "pointer"
															},
															onClick: () => s({
																openingState: !0,
																openingIndex: i
															}),
															src: "assets/images/icon/eye.svg",
															alt: ""
														})
													})
												})]
											})
										})
									}, l)
								})
							})
						}), (0, a.jsx)(d.Z, {
							className: "img-fluid",
							open: e.openingState,
							plugins: [t.Z],
							index: e.openingIndex,
							close: () => s(!1),
							styles: {
								container: {
									backgroundColor: "rgba(0, 0, 0, .9)"
								}
							},
							slides: m.map(function(e) {
								return {
									src: e.big_img
								}
							})
						})]
					})
				},
				h = i(1664),
				x = i.n(h);
			r.ZP.use([r.W_, r.tl, r.pt, r.W_]);
			var j = function() {
					let e = (0, l.useMemo)(() => ({
						slidesPerView: "auto",
						spaceBetween: 30,
						loop: !0,
						speed: 1500,
						autoplay: {
							delay: 2e3
						},
						navigation: {
							nextEl: "._next-4",
							prevEl: ".prev-4"
						},
						breakpoints: {
							280: {
								slidesPerView: 1
							},
							480: {
								slidesPerView: 1
							},
							768: {
								slidesPerView: 2
							},
							992: {
								slidesPerView: 2
							},
							1200: {
								slidesPerView: 3
							},
							1400: {
								slidesPerView: 3
							},
							1600: {
								slidesPerView: 3
							}
						}
					}), []);
					return (0, a.jsxs)("div", {
						className: "related-jobs",
						children: [(0, a.jsxs)("div", {
							className: "section-title mb-40",
							children: [(0, a.jsx)("h3", {
								children: "Related Jobs:"
							}), (0, a.jsxs)("div", {
								className: "swiper-btn1 d-flex align-items-center",
								children: [(0, a.jsx)("div", {
									className: "left-btn prev-4",
									children: (0, a.jsx)("img", {
										src: "assets/images/icon/explore-elliose.svg",
										alt: ""
									})
								}), (0, a.jsx)("div", {
									className: "right-btn _next-4",
									children: (0, a.jsx)("img", {
										src: "assets/images/icon/explore-elliose.svg",
										alt: ""
									})
								})]
							})]
						}), (0, a.jsx)(c.tq, { ...e,
							className: "swiper related-job-slider",
							children: (0, a.jsxs)("div", {
								className: "swiper-wrapper",
								children: [(0, a.jsx)(c.o5, {
									className: "swiper-slide",
									children: (0, a.jsxs)("div", {
										className: "feature-card",
										children: [(0, a.jsxs)("div", {
											className: "company-area",
											children: [(0, a.jsx)("div", {
												className: "logo",
												children: (0, a.jsx)("img", {
													src: "assets/images/bg/company-logo/company-01.png",
													alt: ""
												})
											}), (0, a.jsxs)("div", {
												className: "view_cart.html",
												children: [(0, a.jsxs)("div", {
													className: "name-location",
													children: [(0, a.jsx)("h5", {
														children: (0, a.jsx)(x(), {
															legacyBehavior: !0,
															href: "/job-details",
															children: (0, a.jsx)("a", {
																children: " React JS Developer"
															})
														})
													}), (0, a.jsx)("p", {
														children: (0, a.jsx)(x(), {
															legacyBehavior: !0,
															href: "/company-details",
															children: (0, a.jsx)("a", {
																children: "Elite Hangstroman"
															})
														})
													})]
												}), (0, a.jsx)("div", {
													className: "bookmark.html",
													children: (0, a.jsx)("i", {
														className: "bi bi-bookmark.html"
													})
												})]
											})]
										}), (0, a.jsx)("div", {
											className: "job-discription",
											children: (0, a.jsxs)("ul", {
												children: [(0, a.jsxs)("li", {
													children: [(0, a.jsx)("img", {
														src: "assets/images/icon/arrow2.svg",
														alt: ""
													}), (0, a.jsxs)("p", {
														children: [(0, a.jsx)("span", {
															className: "title",
															children: "Salary:"
														}), " $80-$110 /", " ", (0, a.jsx)("span", {
															className: "time",
															children: "Per month"
														})]
													})]
												}), (0, a.jsxs)("li", {
													children: [(0, a.jsx)("img", {
														src: "assets/images/icon/arrow2.svg",
														alt: ""
													}), (0, a.jsx)("p", {
														children: (0, a.jsx)("span", {
															className: "title",
															children: "Deadline: 02 March, 2023 "
														})
													})]
												})]
											})
										}), (0, a.jsxs)("div", {
											className: "job-type-apply",
											children: [(0, a.jsx)("div", {
												className: "job-type",
												children: (0, a.jsx)("span", {
													className: "full-time",
													children: "Full Time"
												})
											}), (0, a.jsx)("div", {
												className: "apply-btn",
												children: (0, a.jsx)(x(), {
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
									})
								}), (0, a.jsx)(c.o5, {
									className: "swiper-slide",
									children: (0, a.jsxs)("div", {
										className: "feature-card",
										children: [(0, a.jsxs)("div", {
											className: "company-area",
											children: [(0, a.jsx)("div", {
												className: "logo",
												children: (0, a.jsx)("img", {
													src: "assets/images/bg/company-logo/company-02.png",
													alt: ""
												})
											}), (0, a.jsxs)("div", {
												className: "view_cart.html",
												children: [(0, a.jsxs)("div", {
													className: "name-location",
													children: [(0, a.jsx)("h5", {
														children: (0, a.jsx)(x(), {
															legacyBehavior: !0,
															href: "/job-details",
															children: (0, a.jsx)("a", {
																children: "Assistant Laboratorist"
															})
														})
													}), (0, a.jsx)("p", {
														children: (0, a.jsx)(x(), {
															legacyBehavior: !0,
															href: "/company-details",
															children: (0, a.jsx)("a", {
																children: "Norland Comapny"
															})
														})
													})]
												}), (0, a.jsx)("div", {
													className: "bookmark.html",
													children: (0, a.jsx)("i", {
														className: "bi bi-bookmark.html"
													})
												})]
											})]
										}), (0, a.jsx)("div", {
											className: "job-discription",
											children: (0, a.jsxs)("ul", {
												children: [(0, a.jsxs)("li", {
													children: [(0, a.jsx)("img", {
														src: "assets/images/icon/arrow2.svg",
														alt: ""
													}), (0, a.jsxs)("p", {
														children: [(0, a.jsx)("span", {
															className: "title",
															children: "Salary:"
														}), " $30-$40 /", " ", (0, a.jsx)("span", {
															className: "time",
															children: "Per month"
														})]
													})]
												}), (0, a.jsxs)("li", {
													children: [(0, a.jsx)("img", {
														src: "assets/images/icon/arrow2.svg",
														alt: ""
													}), (0, a.jsx)("p", {
														children: (0, a.jsx)("span", {
															className: "title",
															children: "Deadline: 02 March, 2023 "
														})
													})]
												})]
											})
										}), (0, a.jsxs)("div", {
											className: "job-type-apply",
											children: [(0, a.jsx)("div", {
												className: "job-type",
												children: (0, a.jsx)("span", {
													className: "full-time",
													children: "Full Time"
												})
											}), (0, a.jsx)("div", {
												className: "apply-btn",
												children: (0, a.jsx)(x(), {
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
									})
								}), (0, a.jsx)(c.o5, {
									className: "swiper-slide",
									children: (0, a.jsxs)("div", {
										className: "feature-card",
										children: [(0, a.jsxs)("div", {
											className: "company-area",
											children: [(0, a.jsx)("div", {
												className: "logo",
												children: (0, a.jsx)("img", {
													src: "assets/images/bg/company-logo/company-04.png",
													alt: ""
												})
											}), (0, a.jsxs)("div", {
												className: "view_cart.html",
												children: [(0, a.jsxs)("div", {
													className: "name-location",
													children: [(0, a.jsx)("h5", {
														children: (0, a.jsx)(x(), {
															legacyBehavior: !0,
															href: "/job-details",
															children: (0, a.jsx)("a", {
																children: "UI/UX Designer"
															})
														})
													}), (0, a.jsx)("p", {
														children: (0, a.jsx)(x(), {
															legacyBehavior: !0,
															href: "/company-details",
															children: (0, a.jsx)("a", {
																children: "Techman Digita"
															})
														})
													})]
												}), (0, a.jsx)("div", {
													className: "bookmark.html",
													children: (0, a.jsx)("i", {
														className: "bi bi-bookmark.html"
													})
												})]
											})]
										}), (0, a.jsx)("div", {
											className: "job-discription",
											children: (0, a.jsxs)("ul", {
												children: [(0, a.jsxs)("li", {
													children: [(0, a.jsx)("img", {
														src: "assets/images/icon/arrow2.svg",
														alt: ""
													}), (0, a.jsxs)("p", {
														children: [(0, a.jsx)("span", {
															className: "title",
															children: "Salary:"
														}), " $60-$70 /", " ", (0, a.jsx)("span", {
															className: "time",
															children: "Per month"
														})]
													})]
												}), (0, a.jsxs)("li", {
													children: [(0, a.jsx)("img", {
														src: "assets/images/icon/arrow2.svg",
														alt: ""
													}), (0, a.jsx)("p", {
														children: (0, a.jsx)("span", {
															className: "title",
															children: "Deadline: 02 March, 2023 "
														})
													})]
												})]
											})
										}), (0, a.jsxs)("div", {
											className: "job-type-apply",
											children: [(0, a.jsx)("div", {
												className: "job-type",
												children: (0, a.jsx)("span", {
													className: "full-time",
													children: "Full Time"
												})
											}), (0, a.jsx)("div", {
												className: "apply-btn",
												children: (0, a.jsx)(x(), {
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
									})
								})]
							})
						})]
					})
				},
				g = i(1988),
				p = function() {
					return (0, a.jsxs)(g.Z, {
						children: [(0, a.jsx)(n.Z, {
							pageName: "Job Details",
							pageTitle: "Job Details"
						}), (0, a.jsx)("div", {
							className: "product_detail.html-pages pt-120 mb-120",
							children: (0, a.jsx)("div", {
								className: "container",
								children: (0, a.jsxs)("div", {
									className: "row g-lg-4 gy-5",
									children: [(0, a.jsx)("div", {
										className: "col-lg-8",
										children: (0, a.jsxs)("div", {
											className: "product_detail.html-content",
											children: [(0, a.jsxs)("div", {
												className: "job-list-content",
												children: [(0, a.jsxs)("div", {
													className: "company-area",
													children: [(0, a.jsx)("div", {
														className: "logo",
														children: (0, a.jsx)("img", {
															src: "assets/images/bg/company-logo/company-01.png",
															alt: ""
														})
													}), (0, a.jsx)("div", {
														className: "view_cart.html",
														children: (0, a.jsxs)("div", {
															className: "name-location",
															children: [(0, a.jsx)("h5", {
																children: (0, a.jsx)("a", {
																	href: "#",
																	children: "Senior UI/UX Engineer"
																})
															}), (0, a.jsx)("p", {
																children: "Bistro.Tech Group Ltd"
															})]
														})
													})]
												}), (0, a.jsxs)("div", {
													className: "job-discription",
													children: [(0, a.jsxs)("ul", {
														className: "one",
														children: [(0, a.jsxs)("li", {
															children: [(0, a.jsx)("img", {
																src: "assets/images/icon/map-2.svg",
																alt: ""
															}), (0, a.jsxs)("p", {
																children: [(0, a.jsx)("span", {
																	className: "title",
																	children: "Location:"
																}), " Dhaka, Bangladesh"]
															})]
														}), (0, a.jsxs)("li", {
															children: [(0, a.jsx)("img", {
																src: "assets/images/icon/category.html-2.svg",
																alt: ""
															}), (0, a.jsxs)("p", {
																children: [(0, a.jsx)("span", {
																	className: "title",
																	children: "Category:"
																}), " Creative Design"]
															})]
														})]
													}), (0, a.jsxs)("ul", {
														children: [(0, a.jsxs)("li", {
															children: [(0, a.jsx)("img", {
																src: "assets/images/icon/company-2.svg",
																alt: ""
															}), (0, a.jsxs)("p", {
																children: [(0, a.jsx)("span", {
																	className: "title",
																	children: "Job Type:"
																}), " Full-Time"]
															})]
														}), (0, a.jsxs)("li", {
															children: [(0, a.jsx)("img", {
																src: "assets/images/icon/salary-2.svg",
																alt: ""
															}), (0, a.jsxs)("p", {
																children: [(0, a.jsx)("span", {
																	className: "title",
																	children: "Salary:"
																}), " $40K-$78K/Per Month"]
															})]
														})]
													})]
												})]
											}), (0, a.jsxs)("p", {
												children: [(0, a.jsx)("span", {
													children: "Job Description:"
												}), " A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface."]
											}), (0, a.jsx)("br", {}), (0, a.jsxs)("p", {
												children: [(0, a.jsx)("span", {
													children: "Job Responsibility:"
												}), " Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members."]
											}), (0, a.jsxs)("ul", {
												children: [(0, a.jsx)("li", {
													children: "Conducting user research and testing to understand user needs and behaviors."
												}), (0, a.jsx)("li", {
													children: "Designing wireframes, prototypes, and high-fidelity mockups."
												}), (0, a.jsx)("li", {
													children: "Developing and maintaining design systems and style guides."
												}), (0, a.jsx)("li", {
													children: "Collaborating with cross-functional teams, including product management, engineering, and marketing."
												}), (0, a.jsx)("li", {
													children: "Staying up-to-date with the latest design trends and technologies."
												}), (0, a.jsx)("li", {
													children: "Gathering and analyzing user requirements to inform the design of new software or web applications."
												})]
											}), (0, a.jsx)("h6", {
												children: "Educational Requirements:"
											}), (0, a.jsxs)("ul", {
												children: [(0, a.jsx)("li", {
													children: "Bachelor degree to complete any reputational university."
												}), (0, a.jsx)("li", {
													children: "Bachelor degree to complete any reputational university."
												})]
											}), (0, a.jsx)("h6", {
												children: "Experiences:"
											}), (0, a.jsx)("ul", {
												children: (0, a.jsx)("li", {
													children: "2-3 Years in this field."
												})
											}), (0, a.jsxs)("p", {
												children: [(0, a.jsx)("span", {
													children: "Main Duties:"
												}), " Some specific tasks that a UI/UX designer might be responsible for include:"]
											}), (0, a.jsxs)("ul", {
												children: [(0, a.jsx)("li", {
													children: "Gathering and analyzing user requirements to inform the design of new software or web applications."
												}), (0, a.jsx)("li", {
													children: "Designing the layout, visual design, and interactivity of the user interface."
												}), (0, a.jsx)("li", {
													children: "Developing and maintaining design systems and style guides to ensure consistency in theux"
												}), (0, a.jsx)("li", {
													children: "Collaborating with cross-functional teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements"
												})]
											}), (0, a.jsxs)("p", {
												children: [(0, a.jsx)("span", {
													children: "Extra Benefits:"
												}), " Some specific tasks that a UI/UX designer might be responsible for include:"]
											}), (0, a.jsxs)("ul", {
												children: [(0, a.jsx)("li", {
													children: "Any health care."
												}), (0, a.jsx)("li", {
													children: "Yearly performance bonus."
												}), (0, a.jsx)("li", {
													children: "Flexibility & remote working."
												}), (0, a.jsx)("li", {
													children: "Two days off weekly."
												})]
											})]
										})
									}), (0, a.jsx)("div", {
										className: "col-lg-4",
										children: (0, a.jsxs)("div", {
											className: "product_detail.html-sidebar",
											children: [(0, a.jsx)("div", {
												className: "save-apply-btn d-flex justify-content-end mb-50",
												children: (0, a.jsxs)("ul", {
													children: [(0, a.jsx)("li", {
														children: (0, a.jsxs)("a", {
															className: "save-btn",
															href: "#",
															children: ["Save Job", " ", (0, a.jsx)("span", {
																children: (0, a.jsx)("i", {
																	className: "bi bi-bookmark.html-fill"
																})
															})]
														})
													}), (0, a.jsx)("li", {
														children: (0, a.jsx)("a", {
															className: "primry-btn-2 lg-btn",
															href: "#",
															children: "Apply Position"
														})
													})]
												})
											}), (0, a.jsxs)("div", {
												className: "job-summary-area mb-50",
												children: [(0, a.jsx)("div", {
													className: "pin",
													children: (0, a.jsx)("img", {
														src: "assets/images/icon/pin.svg",
														alt: ""
													})
												}), (0, a.jsx)("div", {
													className: "job-summary-title",
													children: (0, a.jsx)("h6", {
														children: "Job Summary:"
													})
												}), (0, a.jsxs)("ul", {
													children: [(0, a.jsx)("li", {
														children: (0, a.jsxs)("p", {
															children: [(0, a.jsx)("span", {
																className: "title",
																children: "Job Title:"
															}), " Senior UI/UX Engineer"]
														})
													}), (0, a.jsx)("li", {
														children: (0, a.jsxs)("p", {
															children: [(0, a.jsx)("span", {
																className: "title",
																children: "Vacancy:"
															}), " 07 Person"]
														})
													}), (0, a.jsx)("li", {
														children: (0, a.jsxs)("p", {
															children: [(0, a.jsx)("span", {
																className: "title",
																children: "Experiences:"
															}), " 2-3 Years."]
														})
													}), (0, a.jsx)("li", {
														children: (0, a.jsxs)("p", {
															children: [(0, a.jsx)("span", {
																className: "title",
																children: "Job Category:"
															}), " Creative Design"]
														})
													}), (0, a.jsx)("li", {
														children: (0, a.jsxs)("p", {
															children: [(0, a.jsx)("span", {
																className: "title",
																children: "Job Type:"
															}), " Full-Time"]
														})
													}), (0, a.jsx)("li", {
														children: (0, a.jsxs)("p", {
															children: [(0, a.jsx)("span", {
																className: "title",
																children: "Salary:"
															}), " 40K-$78K/", (0, a.jsx)("span", {
																className: "time",
																children: "Per Month"
															})]
														})
													}), (0, a.jsx)("li", {
														children: (0, a.jsxs)("p", {
															children: [(0, a.jsx)("span", {
																className: "title",
																children: "Deadline:"
															}), " 02/02/2023"]
														})
													})]
												})]
											}), (0, a.jsx)("div", {
												className: "view-job-btn mb-30",
												children: (0, a.jsxs)("a", {
													href: "#",
													children: [(0, a.jsx)("img", {
														src: "assets/images/icon/company-2.svg",
														alt: ""
													}), "View All Jobs In This Company"]
												})
											}), (0, a.jsxs)("div", {
												className: "job-share-area mb-50",
												children: [(0, a.jsx)("h6", {
													children: "Job Link Share:"
												}), (0, a.jsxs)("ul", {
													children: [(0, a.jsx)("li", {
														children: (0, a.jsx)("a", {
															href: "#",
															children: (0, a.jsx)("i", {
																className: "bx bx-link"
															})
														})
													}), (0, a.jsx)("li", {
														children: (0, a.jsx)("a", {
															href: "#",
															children: (0, a.jsx)("i", {
																className: "bx bxl-facebook"
															})
														})
													}), (0, a.jsx)("li", {
														children: (0, a.jsx)("a", {
															href: "#",
															children: (0, a.jsx)("i", {
																className: "bx bxl-twitter"
															})
														})
													}), (0, a.jsx)("li", {
														children: (0, a.jsx)("a", {
															href: "#",
															children: (0, a.jsx)("i", {
																className: "bx bxl-linkedin"
															})
														})
													}), (0, a.jsx)("li", {
														children: (0, a.jsx)("a", {
															href: "#",
															children: (0, a.jsx)("i", {
																className: "bx bxl-instagram-alt"
															})
														})
													})]
												})]
											}), (0, a.jsxs)("div", {
												className: "email-area mb-50",
												children: [(0, a.jsx)("div", {
													className: "title",
													children: (0, a.jsxs)("h6", {
														children: [(0, a.jsx)("img", {
															src: "assets/images/icon/email-2.svg",
															alt: ""
														}), "Email Now"]
													})
												}), (0, a.jsxs)("p", {
													children: ["Send your resume at ", (0, a.jsx)("a", {
														href: "#",
														children: "info@example.com"
													})]
												})]
											}), (0, a.jsxs)("div", {
												className: "location-area",
												children: [(0, a.jsx)("h6", {
													children: "Get Location:"
												}), (0, a.jsx)("iframe", {
													src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.564763018799!2d90.36349791490355!3d23.834071191491947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c14c8682a473%3A0xa6c74743d52adb88!2sEgens%20Lab!5e0!3m2!1sen!2sbd!4v1674212581590!5m2!1sen!2sbd",
													style: {
														border: 0
													},
													allowFullScreen: !0,
													loading: "lazy",
													referrerPolicy: "no-referrer-when-downgrade"
												})]
											})]
										})
									}), (0, a.jsx)("div", {
										className: "col-lg-12 mb-100",
										children: (0, a.jsx)(o, {})
									}), (0, a.jsx)("div", {
										className: "col-lg-12",
										children: (0, a.jsx)(j, {})
									})]
								})
							})
						})]
					})
				}
		}
	},
	function(e) {
		e.O(0, [3424, 717, 8863, 8004, 7052, 9774, 2888, 179], function() {
			return e(e.s = 8729)
		}), _N_E = e.O()
	}
]);