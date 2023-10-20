(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[8798], {
		6335: function(s, e, i) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/company/company-setting", function() {
				return i(7206)
			}])
		},
		7206: function(s, e, i) {
			"use strict";
			i.r(e), i.d(e, {
				default: function() {
					return m
				}
			});
			var a = i(5893),
				l = i(7294);
			let c = {
				password: "",
				passwordVisible: !1,
				confirmPassword: "",
				confirmPasswordVisible: !1
			};

			function r(s, e) {
				switch (e.type) {
					case "SET_PASSWORD":
						return { ...s,
							password: e.payload
						};
					case "TOGGLE_PASSWORD_VISIBILITY":
						return { ...s,
							passwordVisible: !s.passwordVisible
						};
					case "SET_CONFIRM_PASSWORD":
						return { ...s,
							confirmPassword: e.payload
						};
					case "TOGGLE_CONFIRM_PASSWORD_VISIBILITY":
						return { ...s,
							confirmPasswordVisible: !s.confirmPasswordVisible
						};
					default:
						throw Error()
				}
			}
			var n = function() {
					let [s, e] = (0, l.useReducer)(r, c), i = () => {
						e({
							type: "TOGGLE_PASSWORD_VISIBILITY"
						})
					}, n = () => {
						e({
							type: "TOGGLE_CONFIRM_PASSWORD_VISIBILITY"
						})
					};
					return (0, a.jsx)("div", {
						className: "col-lg-12",
						children: (0, a.jsx)("div", {
							className: "form-wrapper",
							children: (0, a.jsxs)("form", {
								className: "profile-form",
								children: [(0, a.jsx)("div", {
									className: "section-title2",
									children: (0, a.jsxs)("h5", {
										className: "d-flex align-items-baseline gap-1",
										children: [(0, a.jsx)("img", {
											src: "/assets/images/icon/profile-settings_copy.html.svg",
											alt: ""
										}), " ", "Profile Settings", " "]
									})
								}), (0, a.jsx)("div", {
									className: "change-password-area mb-40",
									children: (0, a.jsxs)("div", {
										className: "row",
										children: [(0, a.jsx)("div", {
											className: "col-lg-12",
											children: (0, a.jsxs)("div", {
												className: "info-title",
												children: [(0, a.jsx)("h6", {
													children: "Change Your Password"
												}), (0, a.jsx)("div", {
													className: "dash"
												})]
											})
										}), (0, a.jsx)("div", {
											className: "col-md-6",
											children: (0, a.jsxs)("div", {
												className: "form-inner mb-25",
												children: [(0, a.jsx)("label", {
													htmlFor: "password",
													children: "New Password*"
												}), (0, a.jsxs)("div", {
													className: "input-area",
													children: [(0, a.jsx)("img", {
														src: "/assets/images/icon/lock-2.svg",
														alt: ""
													}), (0, a.jsx)("input", {
														type: s.passwordVisible ? "text" : "password",
														name: "password",
														id: "password",
														placeholder: "Password"
													}), (0, a.jsx)("i", {
														onClick: i,
														className: s.passwordVisible ? "bi bi-eye-slash  bi-eye" : "bi bi-eye-slash",
														id: "togglePassword"
													})]
												})]
											})
										}), (0, a.jsx)("div", {
											className: "col-md-6",
											children: (0, a.jsxs)("div", {
												className: "form-inner mb-25",
												children: [(0, a.jsx)("label", {
													htmlFor: "password2",
													children: "Confirm Password*"
												}), (0, a.jsxs)("div", {
													className: "input-area",
													children: [(0, a.jsx)("img", {
														src: "/assets/images/icon/lock-2.svg",
														alt: ""
													}), (0, a.jsx)("input", {
														type: s.confirmPasswordVisible ? "text" : "password",
														name: "confirmpassword",
														id: "password2",
														placeholder: "Confirm Password"
													}), (0, a.jsx)("i", {
														onClick: n,
														className: s.confirmPasswordVisible ? "bi bi-eye-slash  bi-eye" : "bi bi-eye-slash"
													})]
												})]
											})
										}), (0, a.jsx)("div", {
											className: "col-md-12 pt-10",
											children: (0, a.jsx)("div", {
												className: "form-inner",
												children: (0, a.jsx)("button", {
													className: "primry-btn-1 lg-btn w-unset",
													type: "submit",
													children: "Update Change"
												})
											})
										})]
									})
								}), (0, a.jsx)("div", {
									className: "phone-email-area",
									children: (0, a.jsxs)("div", {
										className: "row",
										children: [(0, a.jsx)("div", {
											className: "col-lg-12",
											children: (0, a.jsxs)("div", {
												className: "info-title",
												children: [(0, a.jsx)("h6", {
													children: "Phone & Email"
												}), (0, a.jsx)("div", {
													className: "dash"
												})]
											})
										}), (0, a.jsx)("div", {
											className: "col-md-6",
											children: (0, a.jsxs)("div", {
												className: "form-inner mb-25",
												children: [(0, a.jsx)("label", {
													htmlFor: "pphonenumber",
													children: "Primary Number*"
												}), (0, a.jsxs)("div", {
													className: "input-area",
													children: [(0, a.jsx)("img", {
														src: "/assets/images/icon/phone-2.svg",
														alt: ""
													}), (0, a.jsx)("input", {
														type: "text",
														id: "pphonenumber",
														name: "pphonenumber",
														placeholder: "+880-17 *** *** **"
													})]
												})]
											})
										}), (0, a.jsx)("div", {
											className: "col-md-6",
											children: (0, a.jsxs)("div", {
												className: "form-inner mb-25",
												children: [(0, a.jsx)("label", {
													htmlFor: "sphonenumber",
													children: "Secondary Number*"
												}), (0, a.jsxs)("div", {
													className: "input-area",
													children: [(0, a.jsx)("img", {
														src: "/assets/images/icon/phone-2.svg",
														alt: ""
													}), (0, a.jsx)("input", {
														type: "text",
														id: "sphonenumber",
														name: "sphonenumber",
														placeholder: "+880-17 *** *** **"
													})]
												})]
											})
										}), (0, a.jsx)("div", {
											className: "col-md-6",
											children: (0, a.jsxs)("div", {
												className: "form-inner mb-25",
												children: [(0, a.jsx)("label", {
													htmlFor: "pemail",
													children: "Primary Email*"
												}), (0, a.jsxs)("div", {
													className: "input-area",
													children: [(0, a.jsx)("img", {
														src: "/assets/images/icon/email-2.svg",
														alt: ""
													}), (0, a.jsx)("input", {
														type: "text",
														id: "pemail",
														name: "pemail",
														placeholder: "info@example.com"
													})]
												})]
											})
										}), (0, a.jsx)("div", {
											className: "col-md-6",
											children: (0, a.jsxs)("div", {
												className: "form-inner mb-35",
												children: [(0, a.jsx)("label", {
													htmlFor: "semail",
													children: "Secondary Email*"
												}), (0, a.jsxs)("div", {
													className: "input-area",
													children: [(0, a.jsx)("img", {
														src: "/assets/images/icon/email-2.svg",
														alt: ""
													}), (0, a.jsx)("input", {
														type: "text",
														id: "semail",
														name: "semail",
														placeholder: "info@example.com"
													})]
												})]
											})
										})]
									})
								}), (0, a.jsx)("div", {
									className: "change-area",
									children: (0, a.jsxs)("div", {
										className: "row",
										children: [(0, a.jsx)("div", {
											className: "col-lg-12",
											children: (0, a.jsxs)("div", {
												className: "info-title",
												children: [(0, a.jsx)("h6", {
													children: "Change Location"
												}), (0, a.jsx)("div", {
													className: "dash"
												})]
											})
										}), (0, a.jsx)("div", {
											className: "col-md-12",
											children: (0, a.jsxs)("div", {
												className: "form-inner mb-25",
												children: [(0, a.jsx)("label", {
													htmlFor: "location",
													children: "Get Location*"
												}), (0, a.jsxs)("div", {
													className: "input-area",
													children: [(0, a.jsx)("img", {
														src: "/assets/images/icon/map-2.svg",
														alt: ""
													}), (0, a.jsx)("input", {
														type: "text",
														id: "location",
														name: "location",
														placeholder: "Mirpur-12, Block-C, Road-3/20, Dhaka"
													})]
												})]
											})
										}), (0, a.jsx)("div", {
											className: "col-md-12",
											children: (0, a.jsx)("div", {
												className: "location-map mb-35",
												children: (0, a.jsx)("iframe", {
													src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116795.52186985579!2d90.31523677800563!3d23.82357482672597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c14c8682a473%3A0xa6c74743d52adb88!2sEgens%20Lab!5e0!3m2!1sen!2sbd!4v1673956671914!5m2!1sen!2sbd",
													style: {
														border: 0
													},
													allowFullScreen: !0,
													loading: "lazy",
													referrerPolicy: "no-referrer-when-downgrade"
												})
											})
										})]
									})
								}), (0, a.jsx)("div", {
									className: "privacy-security-area",
									children: (0, a.jsxs)("div", {
										className: "row",
										children: [(0, a.jsx)("div", {
											className: "col-lg-12",
											children: (0, a.jsxs)("div", {
												className: "info-title",
												children: [(0, a.jsx)("h6", {
													children: "Privacy & Security"
												}), (0, a.jsx)("div", {
													className: "dash"
												})]
											})
										}), (0, a.jsxs)("div", {
											className: "col-lg-12",
											children: [(0, a.jsxs)("div", {
												className: "single-permission mb-2",
												children: [(0, a.jsx)("div", {
													className: "title",
													children: (0, a.jsx)("h6", {
														children: "All Job Alert"
													})
												}), (0, a.jsx)("div", {
													className: "form-check form-switch",
													children: (0, a.jsx)("input", {
														className: "form-check-input",
														type: "checkbox",
														id: "flexSwitchCheckDefault1"
													})
												})]
											}), (0, a.jsxs)("div", {
												className: "single-permission mb-30",
												children: [(0, a.jsx)("div", {
													className: "title",
													children: (0, a.jsx)("h6", {
														children: "Resume Visibility"
													})
												}), (0, a.jsx)("div", {
													className: "form-check form-switch",
													children: (0, a.jsx)("input", {
														className: "form-check-input",
														type: "checkbox",
														id: "flexSwitchCheckDefault2"
													})
												})]
											}), (0, a.jsxs)("div", {
												className: "single-permission mb-3",
												children: [(0, a.jsxs)("div", {
													className: "title",
													children: [(0, a.jsx)("h6", {
														children: "Disable Account"
													}), (0, a.jsx)("p", {
														children: "If you log in again you will able to see all the match jobs and get all information."
													})]
												}), (0, a.jsx)("div", {
													className: "form-check form-switch",
													children: (0, a.jsx)("input", {
														className: "form-check-input",
														type: "checkbox",
														id: "flexSwitchCheckDefault3"
													})
												})]
											}), (0, a.jsxs)("div", {
												className: "single-permission align-items-start",
												children: [(0, a.jsxs)("div", {
													className: "title",
													children: [(0, a.jsx)("h6", {
														children: "Delete Account"
													}), (0, a.jsx)("p", {
														children: "If you delete your account, you will no longer be able to get information about the matched jobs."
													})]
												}), (0, a.jsx)("div", {
													className: "delete-btn",
													children: (0, a.jsx)("button", {
														type: "reset",
														children: "Delete Account"
													})
												})]
											})]
										})]
									})
								}), (0, a.jsx)("div", {
									className: "col-md-12 pt-50",
									children: (0, a.jsx)("div", {
										className: "form-inner",
										children: (0, a.jsx)("button", {
											className: "primry-btn-2 lg-btn w-unset",
											type: "submit",
											children: "Update Change"
										})
									})
								})]
							})
						})
					})
				},
				d = i(4532),
				m = function() {
					return (0, a.jsx)(d.Z, {
						children: (0, a.jsx)(n, {})
					})
				}
		}
	},
	function(s) {
		s.O(0, [3424, 8004, 7052, 4532, 9774, 2888, 179], function() {
			return s(s.s = 6335)
		}), _N_E = s.O()
	}
]);