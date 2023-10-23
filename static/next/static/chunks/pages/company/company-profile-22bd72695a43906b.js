(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[1542], {
		4432: function(e, s, a) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/company/company-profile", function() {
				return a(7033)
			}])
		},
		7033: function(e, s, a) {
			"use strict";
			a.r(s), a.d(s, {
				default: function() {
					return t
				}
			});
			var i = a(5893),
				l = a(7294);
			a(5828);
			var n = function() {
					let [e, s] = (0, l.useState)(new Date), [a, n] = (0, l.useState)(new Date), [r, c] = (0, l.useState)([{
						value: ""
					}]), t = () => {
						let e = [...r, {
							value: ""
						}];
						c(e)
					}, d = (e, s) => {
						s.preventDefault();
						let a = [...r];
						a.splice(e, 1), c(a)
					};
					return (0, i.jsx)(i.Fragment, {
						children: r.map((e, s) => (0, i.jsxs)("div", {
							className: "edit-profile.html-form profile-form mt-30",
							children: [(0, i.jsx)("div", {
								className: "section-title2",
								children: (0, i.jsx)("h5", {
									children: "Working Area:"
								})
							}), (0, i.jsx)("div", {
								className: "education-row",
								children: (0, i.jsxs)("div", {
									className: "row",
									children: [(0, i.jsx)("div", {
										className: "col-md-6",
										children: (0, i.jsxs)("div", {
											className: "form-inner mb-25",
											children: [(0, i.jsx)("label", {
												htmlFor: "working-field",
												children: "Working Field*"
											}), (0, i.jsxs)("div", {
												className: "input-area",
												children: [(0, i.jsx)("img", {
													src: "/assets/images/icon/company-2.svg",
													alt: ""
												}), (0, i.jsx)("input", {
													type: "text",
													id: "working-field",
													name: "working-field",
													placeholder: "Frontend Developer"
												})]
											})]
										})
									}), (0, i.jsx)("div", {
										className: "col-md-6",
										children: (0, i.jsxs)("div", {
											className: "form-inner mb-25",
											children: [(0, i.jsx)("label", {
												children: "Add Icon*"
											}), (0, i.jsxs)("div", {
												className: "input-area",
												children: [(0, i.jsx)("img", {
													src: "/assets/images/icon/company-2.svg",
													alt: ""
												}), (0, i.jsx)("input", {
													type: "file"
												})]
											})]
										})
									}), (0, i.jsx)("div", {
										className: "col-md-12",
										children: (0, i.jsxs)("div", {
											className: "form-inner mb-40",
											children: [(0, i.jsx)("label", {
												htmlFor: "description",
												children: "Short Description*"
											}), (0, i.jsx)("textarea", {
												name: "description",
												id: "description",
												placeholder: "Company Details*",
												defaultValue: ""
											})]
										})
									})]
								})
							}), 0 !== s && (0, i.jsx)("div", {
								className: "add-row",
								children: (0, i.jsx)("button", {
									className: "remove-education-row remove",
									onClick: () => d(s, event),
									children: "Remove Education Area"
								})
							}), (0, i.jsx)("div", {
								className: "add-remove-btn d-flex align-items-center justify-content-between",
								children: (0, i.jsx)("div", {
									className: "add-row",
									children: (0, i.jsx)("button", {
										onClick: t,
										type: "button",
										className: "add-education-row",
										children: "Add Education+"
									})
								})
							})]
						}, s))
					})
				},
				r = function() {
					let [e, s] = (0, l.useState)(""), [a, r] = (0, l.useState)(""), c = (0, l.useRef)(null), t = (0, l.useRef)(null), d = e => {
						let a = e.target.files[0],
							i = new FileReader;
						i.onload = () => {
							s(i.result)
						}, i.readAsDataURL(a)
					}, m = e => {
						let s = e.target.files[0],
							a = new FileReader;
						a.onload = () => {
							r(a.result)
						}, a.readAsDataURL(s)
					}, o = e => {
						e.preventDefault();
						let a = e.dataTransfer.files[0],
							i = new FileReader;
						i.onload = () => {
							s(i.result)
						}, i.readAsDataURL(a)
					}, x = e => {
						e.preventDefault();
						let s = e.dataTransfer.files[0],
							a = new FileReader;
						a.onload = () => {
							r(a.result)
						}, a.readAsDataURL(s)
					}, h = e => {
						e.preventDefault()
					}, p = e => {
						e.preventDefault()
					};
					return (0, i.jsx)("div", {
						className: "col-lg-12",
						children: (0, i.jsx)("div", {
							className: "my-profile.html-inner ",
							children: (0, i.jsxs)("div", {
								className: "form-wrapper",
								children: [(0, i.jsxs)("div", {
									className: "section-title two",
									children: [(0, i.jsx)("h5", {
										children: "My Profile"
									}), (0, i.jsx)("div", {
										className: "dash"
									})]
								}), (0, i.jsxs)("form", {
									className: "profile-form",
									children: [(0, i.jsx)("div", {
										className: "section-title2",
										children: (0, i.jsx)("h5", {
											children: "Company Information:"
										})
									}), (0, i.jsxs)("div", {
										className: "row",
										children: [(0, i.jsx)("div", {
											className: "col-md-6",
											children: (0, i.jsxs)("div", {
												className: "form-inner mb-25",
												children: [(0, i.jsx)("label", {
													htmlFor: "companyname",
													children: "Company Name*"
												}), (0, i.jsxs)("div", {
													className: "input-area",
													children: [(0, i.jsx)("img", {
														src: "/assets/images/icon/company-2.svg",
														alt: ""
													}), (0, i.jsx)("input", {
														type: "text",
														id: "companyname",
														name: "companyname",
														placeholder: "Elite Hangstroman"
													})]
												})]
											})
										}), (0, i.jsx)("div", {
											className: "col-md-6",
											children: (0, i.jsxs)("div", {
												className: "form-inner mb-25",
												children: [(0, i.jsx)("label", {
													children: "Company Type*"
												}), (0, i.jsxs)("div", {
													className: "input-area",
													children: [(0, i.jsx)("img", {
														src: "/assets/images/icon/category.html-2.svg",
														alt: ""
													}), (0, i.jsxs)("select", {
														className: "select1",
														children: [(0, i.jsx)("option", {
															value: 0,
															children: "Digital Agency"
														}), (0, i.jsx)("option", {
															value: 1,
															children: "Digital Marketing Agency"
														}), (0, i.jsx)("option", {
															value: 2,
															children: "Software Company"
														})]
													})]
												})]
											})
										}), (0, i.jsx)("div", {
											className: "col-md-6",
											children: (0, i.jsxs)("div", {
												className: "form-inner mb-25",
												children: [(0, i.jsx)("label", {
													htmlFor: "company",
													children: "Company Size*"
												}), (0, i.jsxs)("div", {
													className: "input-area",
													children: [(0, i.jsx)("img", {
														src: "/assets/images/icon/person-2.svg",
														alt: ""
													}), (0, i.jsx)("input", {
														type: "text",
														id: "company",
														name: "company",
														placeholder: "40 Person"
													})]
												})]
											})
										}), (0, i.jsx)("div", {
											className: "col-md-6",
											children: (0, i.jsxs)("div", {
												className: "form-inner mb-25",
												children: [(0, i.jsx)("label", {
													htmlFor: "email",
													children: "Email*"
												}), (0, i.jsxs)("div", {
													className: "input-area",
													children: [(0, i.jsx)("img", {
														src: "/assets/images/icon/email-2.svg",
														alt: ""
													}), (0, i.jsx)("input", {
														type: "text",
														id: "email",
														name: "email",
														placeholder: "info@example.com"
													})]
												})]
											})
										}), (0, i.jsx)("div", {
											className: "col-md-6",
											children: (0, i.jsxs)("div", {
												className: "form-inner mb-25",
												children: [(0, i.jsx)("label", {
													htmlFor: "location",
													children: "Location*"
												}), (0, i.jsxs)("div", {
													className: "input-area",
													children: [(0, i.jsx)("img", {
														src: "/assets/images/icon/map-2.svg",
														alt: ""
													}), (0, i.jsx)("input", {
														type: "text",
														id: "location",
														name: "location",
														placeholder: "Type Location"
													})]
												})]
											})
										}), (0, i.jsx)("div", {
											className: "col-md-6",
											children: (0, i.jsxs)("div", {
												className: "form-inner mb-25",
												children: [(0, i.jsx)("label", {
													htmlFor: "website",
													children: "Website Link*"
												}), (0, i.jsxs)("div", {
													className: "input-area",
													children: [(0, i.jsx)("img", {
														src: "/assets/images/icon/website-2.svg",
														alt: ""
													}), (0, i.jsx)("input", {
														type: "text",
														id: "website",
														name: "website",
														placeholder: "https://example.com"
													})]
												})]
											})
										}), (0, i.jsx)("div", {
											className: "col-md-6",
											children: (0, i.jsxs)("div", {
												className: "form-inner mb-25",
												children: [(0, i.jsx)("label", {
													htmlFor: "facebook",
													children: "Facebook"
												}), (0, i.jsxs)("div", {
													className: "input-area",
													children: [(0, i.jsx)("img", {
														src: "/assets/images/icon/facebook-2.svg",
														alt: ""
													}), (0, i.jsx)("input", {
														type: "text",
														id: "facebook",
														name: "facebook",
														placeholder: "https://example-facebook.com"
													})]
												})]
											})
										}), (0, i.jsx)("div", {
											className: "col-md-6",
											children: (0, i.jsxs)("div", {
												className: "form-inner mb-25",
												children: [(0, i.jsx)("label", {
													htmlFor: "twitter",
													children: "Twitter"
												}), (0, i.jsxs)("div", {
													className: "input-area",
													children: [(0, i.jsx)("img", {
														src: "/assets/images/icon/twiter-2.svg",
														alt: ""
													}), (0, i.jsx)("input", {
														type: "text",
														id: "twitter",
														name: "twitter",
														placeholder: "https://example-twitter.com"
													})]
												})]
											})
										}), (0, i.jsx)("div", {
											className: "col-md-6",
											children: (0, i.jsxs)("div", {
												className: "form-inner mb-25",
												children: [(0, i.jsx)("label", {
													htmlFor: "linkedin",
													children: "LinkedIn"
												}), (0, i.jsxs)("div", {
													className: "input-area",
													children: [(0, i.jsx)("img", {
														src: "/assets/images/icon/linkedin-2.svg",
														alt: ""
													}), (0, i.jsx)("input", {
														type: "text",
														id: "linkedin",
														name: "linkedin",
														placeholder: "https://example-linkedin.com"
													})]
												})]
											})
										}), (0, i.jsx)("div", {
											className: "col-md-6",
											children: (0, i.jsxs)("div", {
												className: "form-inner mb-25",
												children: [(0, i.jsx)("label", {
													htmlFor: "pinterest",
													children: "Pinterest"
												}), (0, i.jsxs)("div", {
													className: "input-area",
													children: [(0, i.jsx)("img", {
														src: "/assets/images/icon/pinterest-2.svg",
														alt: ""
													}), (0, i.jsx)("input", {
														type: "text",
														id: "pinterest",
														name: "pinterest",
														placeholder: "https://example-pinterest.com"
													})]
												})]
											})
										}), (0, i.jsx)("div", {
											className: "col-md-6",
											children: (0, i.jsxs)("div", {
												className: "form-inner mb-25",
												children: [(0, i.jsx)("label", {
													htmlFor: "dribble",
													children: "Dribbble"
												}), (0, i.jsxs)("div", {
													className: "input-area",
													children: [(0, i.jsx)("img", {
														src: "/assets/images/icon/dribble-2.svg",
														alt: ""
													}), (0, i.jsx)("input", {
														type: "text",
														id: "dribble",
														name: "dribble",
														placeholder: "https://example-dribbble.com"
													})]
												})]
											})
										}), (0, i.jsx)("div", {
											className: "col-md-6",
											children: (0, i.jsxs)("div", {
												className: "form-inner mb-25",
												children: [(0, i.jsx)("label", {
													htmlFor: "behance",
													children: "Behance"
												}), (0, i.jsxs)("div", {
													className: "input-area",
													children: [(0, i.jsx)("img", {
														src: "/assets/images/icon/behance-2.svg",
														alt: ""
													}), (0, i.jsx)("input", {
														type: "text",
														id: "behance",
														name: "behance",
														placeholder: "https://example-behance.com"
													})]
												})]
											})
										}), (0, i.jsx)("div", {
											className: "col-lg-12",
											children: (0, i.jsx)("div", {
												className: "company-images-area mb-50",
												children: (0, i.jsxs)("div", {
													className: "row g-lg-4 gy-5",
													children: [(0, i.jsx)("div", {
														className: "col-lg-6 devaider1 position-relative",
														children: (0, i.jsxs)("div", {
															className: "company-logo-area",
															children: [(0, i.jsx)("h5", {
																children: "Company Logo: "
															}), (0, i.jsxs)("div", {
																title: "Drag and drop an image here",
																className: "image-uploader drag-area",
																children: [(0, i.jsx)("div", {
																	className: "dropzone",
																	onDrop: o,
																	onDragOver: h,
																	onClick: () => c.current.click(),
																	children: e ? (0, i.jsx)("img", {
																		src: e,
																		alt: "preview",
																		className: "preview"
																	}) : (0, i.jsx)("p", {
																		children: "Upload Logo Image"
																	})
																}), (0, i.jsx)("input", {
																	type: "file",
																	accept: "image/*",
																	onChange: d,
																	ref: c,
																	style: {
																		display: "none"
																	}
																})]
															}), (0, i.jsx)("span", {
																children: "Maximum File Upload: 2 MB"
															})]
														})
													}), (0, i.jsx)("div", {
														className: "col-lg-6",
														children: (0, i.jsxs)("div", {
															className: "company-cover-photo-area",
															children: [(0, i.jsx)("h5", {
																children: "Company Cover Photo: "
															}), (0, i.jsxs)("div", {
																title: "Drag and drop an image here",
																className: "image-uploader drag-area",
																children: [(0, i.jsx)("div", {
																	className: "dropzone ",
																	onDrop: x,
																	onDragOver: p,
																	onClick: () => t.current.click(),
																	children: a ? (0, i.jsx)("img", {
																		src: a,
																		alt: "preview",
																		className: "preview"
																	}) : (0, i.jsx)("p", {
																		children: "Upload Cover Image"
																	})
																}), (0, i.jsx)("input", {
																	type: "file",
																	accept: "image/*",
																	onChange: m,
																	ref: t,
																	style: {
																		display: "none"
																	}
																})]
															}), (0, i.jsx)("span", {
																children: "Maximum File Upload: 5 MB"
															})]
														})
													})]
												})
											})
										}), (0, i.jsx)(n, {}), (0, i.jsx)("div", {
											className: "col-md-12 pt-30",
											children: (0, i.jsx)("div", {
												className: "form-inner",
												children: (0, i.jsx)("button", {
													className: "primry-btn-2 lg-btn w-unset",
													type: "submit",
													children: "Update Change"
												})
											})
										})]
									})]
								})]
							})
						})
					})
				},
				c = a(4532),
				t = function() {
					return (0, i.jsx)(c.Z, {
						children: (0, i.jsx)(r, {})
					})
				}
		},
		5828: function() {}
	},
	function(e) {
		e.O(0, [3424, 4661, 8004, 7052, 4532, 9774, 2888, 179], function() {
			return e(e.s = 4432)
		}), _N_E = e.O()
	}
]);