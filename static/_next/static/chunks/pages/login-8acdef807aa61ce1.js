(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[3459], {
		6429: function(e, s, i) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/login", function() {
				return i(8332)
			}])
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
							content: "Generated by create next app"
						}), (0, a.jsx)("link", {
							rel: "icon",
							href: "assets/images/sm-logo.svg",
							type: "image/gif",
							sizes: "20x20"
						})]
					}), (0, a.jsx)(c.Z, {}), s, (0, a.jsx)(r.Z, {})]
				})
			}
		},
		8332: function(e, s, i) {
			"use strict";
			i.r(s);
			var a = i(5893),
				l = i(1664),
				n = i.n(l),
				r = i(7294),
				c = i(1988);
			s.default = function() {
				let [e, s] = (0, r.useState)(!1), i = () => {
					s(e => !e)
				};
				return (0, a.jsx)(c.Z, {
					children: (0, a.jsx)("div", {
						className: "login.html-area pt-120 mb-120",
						children: (0, a.jsx)("div", {
							className: "container",
							children: (0, a.jsx)("div", {
								className: "row",
								children: (0, a.jsx)("div", {
									className: "col-lg-12",
									children: (0, a.jsxs)("div", {
										className: "form-wrapper",
										children: [(0, a.jsxs)("div", {
											className: "form-title",
											children: [(0, a.jsx)("h3", {
												children: "Log In Here!"
											}), (0, a.jsx)("span", {})]
										}), (0, a.jsx)("form", {
											children: (0, a.jsxs)("div", {
												className: "row",
												children: [(0, a.jsx)("div", {
													className: "col-lg-12",
													children: (0, a.jsxs)("div", {
														className: "form-inner mb-25",
														children: [(0, a.jsx)("label", {
															htmlFor: "email",
															children: "Email*"
														}), (0, a.jsxs)("div", {
															className: "input-area",
															children: [(0, a.jsx)("img", {
																src: "assets/images/icon/email-2.svg",
																alt: ""
															}), (0, a.jsx)("input", {
																type: "email",
																id: "email",
																name: "email",
																placeholder: "info@example.com"
															})]
														})]
													})
												}), (0, a.jsx)("div", {
													className: "col-lg-12",
													children: (0, a.jsxs)("div", {
														className: "form-inner",
														children: [(0, a.jsx)("label", {
															htmlFor: "email",
															children: "Password*"
														}), (0, a.jsx)("input", {
															type: e ? "text" : "password",
															name: "password",
															id: "password",
															placeholder: "Password"
														}), (0, a.jsx)("i", {
															onClick: () => i(),
															className: e ? "bi bi-eye-slash  bi-eye" : "bi bi-eye-slash",
															id: "togglePassword"
														})]
													})
												}), (0, a.jsx)("div", {
													className: "col-lg-12",
													children: (0, a.jsxs)("div", {
														className: "form-agreement form-inner d-flex justify-content-between flex-wrap",
														children: [(0, a.jsxs)("div", {
															className: "form-group",
															children: [(0, a.jsx)("input", {
																type: "checkbox",
																id: "html"
															}), (0, a.jsx)("label", {
																htmlFor: "html",
																children: "Remember Me"
															})]
														}), (0, a.jsx)("a", {
															href: "#",
															className: "forgot-pass",
															children: "Forget Password?"
														})]
													})
												}), (0, a.jsx)("div", {
													className: "col-lg-12",
													children: (0, a.jsx)("div", {
														className: "form-inner",
														children: (0, a.jsx)("button", {
															className: "primry-btn-2",
															type: "submit",
															children: "LogIn"
														})
													})
												}), (0, a.jsxs)("h6", {
													children: ["Don’t have an account?", (0, a.jsx)(n(), {
														legacyBehavior: !0,
														href: "/register",
														children: (0, a.jsx)("a", {
															children: "Sign Up"
														})
													})]
												})]
											})
										})]
									})
								})
							})
						})
					})
				})
			}
		},
		9008: function(e, s, i) {
			e.exports = i(3121)
		}
	},
	function(e) {
		e.O(0, [3424, 8004, 7052, 9774, 2888, 179], function() {
			return e(e.s = 6429)
		}), _N_E = e.O()
	}
]);