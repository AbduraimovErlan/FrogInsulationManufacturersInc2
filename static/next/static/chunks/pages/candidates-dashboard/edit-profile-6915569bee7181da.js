(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[5104], {
		572: function(e, s, a) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/candidates-dashboard/edit-profile", function() {
				return a(2041)
			}])
		},
		2041: function(e, s, a) {
			"use strict";
			a.r(s), a.d(s, {
				default: function() {
					return x
				}
			});
			var i = a(5893),
				l = a(7294),
				n = a(9198),
				r = a.n(n);
			a(5828);
			var c = a(6346),
				t = function() {
					let [e, s] = (0, l.useState)(new Date), [a, n] = (0, l.useState)(new Date), [c, t] = (0, l.useState)([{
						value: ""
					}]), d = () => {
						let e = [...c, {
							value: ""
						}];
						t(e)
					}, o = (e, s) => {
						s.preventDefault();
						let a = [...c];
						a.splice(e, 1), t(a)
					};
					return (0, i.jsx)("div", {
						children: c.map((l, c) => (0, i.jsxs)("form", {
							className: "edit-profile.html-form profile-form",
							children: [(0, i.jsx)("div", {
								className: "section-title2",
								children: (0, i.jsx)("h5", {
									children: "Educational Qualification:"
								})
							}), (0, i.jsx)("div", {
								className: "education-row",
								children: (0, i.jsxs)("div", {
									className: "row",
									children: [(0, i.jsx)("div", {
										className: "col-lg-12",
										children: (0, i.jsxs)("div", {
											className: "info-title",
											children: [(0, i.jsx)("h6", {
												children: "Academic Information:"
											}), (0, i.jsx)("div", {
												className: "dash"
											})]
										})
									}), (0, i.jsx)("div", {
										className: "col-md-6",
										children: (0, i.jsxs)("div", {
											className: "form-inner mb-25",
											children: [(0, i.jsx)("label", {
												children: "Education Level*"
											}), (0, i.jsxs)("div", {
												className: "input-area",
												children: [(0, i.jsx)("img", {
													src: "/assets/images/icon/qualification-2.svg",
													alt: ""
												}), (0, i.jsxs)("select", {
													className: "select1",
													children: [(0, i.jsx)("option", {
														value: 0,
														children: "Bachelor Degree in CSE"
													}), (0, i.jsx)("option", {
														value: 1,
														children: "IGCSE"
													}), (0, i.jsx)("option", {
														value: 2,
														children: "AS"
													}), (0, i.jsx)("option", {
														value: 4,
														children: "A Level"
													}), (0, i.jsx)("option", {
														value: 5,
														children: "Matriculated"
													})]
												})]
											})]
										})
									}), (0, i.jsx)("div", {
										className: "col-md-6",
										children: (0, i.jsxs)("div", {
											className: "form-inner mb-25",
											children: [(0, i.jsx)("label", {
												children: "My Major*"
											}), (0, i.jsxs)("div", {
												className: "input-area",
												children: [(0, i.jsx)("img", {
													src: "/assets/images/icon/major.svg",
													alt: ""
												}), (0, i.jsxs)("select", {
													className: "select1",
													children: [(0, i.jsx)("option", {
														value: 0,
														children: "Science"
													}), (0, i.jsx)("option", {
														value: 1,
														children: "Arts"
													})]
												})]
											})]
										})
									}), (0, i.jsx)("div", {
										className: "col-md-6",
										children: (0, i.jsxs)("div", {
											className: "form-inner mb-25",
											children: [(0, i.jsx)("label", {
												htmlFor: "institute",
												children: "Institute/University*"
											}), (0, i.jsxs)("div", {
												className: "input-area",
												children: [(0, i.jsx)("img", {
													src: "/assets/images/icon/univercity.svg",
													alt: ""
												}), (0, i.jsx)("input", {
													type: "text",
													id: "institute",
													placeholder: "Type Your Institute Name..."
												})]
											})]
										})
									}), (0, i.jsx)("div", {
										className: "col-md-6",
										children: (0, i.jsxs)("div", {
											className: "form-inner mb-30",
											children: [(0, i.jsx)("label", {
												htmlFor: "gpa",
												children: "Result/GPA**"
											}), (0, i.jsxs)("div", {
												className: "input-area",
												children: [(0, i.jsx)("img", {
													src: "/assets/images/icon/gpa-2.svg",
													alt: ""
												}), (0, i.jsx)("input", {
													type: "text",
													id: "gpa",
													placeholder: "4.75/5"
												})]
											})]
										})
									}), (0, i.jsx)("div", {
										className: "col-md-6",
										children: (0, i.jsxs)("div", {
											className: "form-inner mb-20",
											children: [(0, i.jsx)("label", {
												htmlFor: "datepicker10",
												children: "Starting Period*"
											}), (0, i.jsxs)("div", {
												className: "input-area",
												children: [(0, i.jsx)("img", {
													src: "/assets/images/icon/calender2.svg",
													alt: ""
												}), (0, i.jsx)(r(), {
													selected: e,
													onChange: e => s(e),
													placeholderText: "Check In",
													className: "calendar"
												})]
											})]
										})
									}), (0, i.jsx)("div", {
										className: "col-md-6",
										children: (0, i.jsxs)("div", {
											className: "form-inner mb-20",
											children: [(0, i.jsx)("label", {
												htmlFor: "datepicker11",
												children: "Ending Period*"
											}), (0, i.jsxs)("div", {
												className: "input-area",
												children: [(0, i.jsx)("img", {
													src: "/assets/images/icon/calender2.svg",
													alt: ""
												}), (0, i.jsx)(r(), {
													selected: a,
													onChange: e => n(e),
													placeholderText: "Check In",
													className: "calendar"
												})]
											})]
										})
									})]
								})
							}), 0 !== c && (0, i.jsx)("div", {
								className: "add-row",
								children: (0, i.jsx)("button", {
									className: "remove-education-row remove",
									onClick: () => o(c, event),
									children: "Remove Education Area"
								})
							}), (0, i.jsx)("div", {
								className: "add-remove-btn d-flex align-items-center justify-content-between",
								children: (0, i.jsx)("div", {
									className: "add-row",
									children: (0, i.jsx)("button", {
										onClick: d,
										type: "button",
										className: "add-education-row",
										children: "Add Education+"
									})
								})
							})]
						}, c))
					})
				},
				d = function() {
					let [e, s] = (0, l.useState)(new Date), [a, n] = (0, l.useState)(new Date), [c, t] = (0, l.useState)([{
						value: ""
					}]), d = () => {
						let e = [...c, {
							value: ""
						}];
						t(e)
					}, o = (e, s) => {
						s.preventDefault();
						let a = [...c];
						a.splice(e, 1), t(a)
					};
					return (0, i.jsx)("div", {
						children: c.map((l, c) => (0, i.jsxs)("form", {
							className: "edit-profile.html-form profile-form",
							children: [(0, i.jsxs)("div", {
								children: [(0, i.jsx)("div", {
									className: "section-title2",
									children: (0, i.jsx)("h5", {
										children: "Employment Information:"
									})
								}), (0, i.jsx)("div", {
									className: "experiences-row",
									children: (0, i.jsxs)("div", {
										className: "row",
										children: [(0, i.jsx)("div", {
											className: "col-lg-12",
											children: (0, i.jsxs)("div", {
												className: "info-title",
												children: [(0, i.jsx)("h6", {
													children: "Add Your Experiences"
												}), (0, i.jsx)("div", {
													className: "dash"
												})]
											})
										}), (0, i.jsx)("div", {
											className: "col-md-6",
											children: (0, i.jsxs)("div", {
												className: "form-inner mb-25",
												children: [(0, i.jsx)("label", {
													htmlFor: "companies",
													children: "Company Name*"
												}), (0, i.jsxs)("div", {
													className: "input-area",
													children: [(0, i.jsx)("img", {
														src: "/assets/images/icon/company-2.svg ",
														alt: ""
													}), (0, i.jsx)("input", {
														type: "text",
														id: "companies",
														name: "companies",
														placeholder: "Egenstheme"
													})]
												})]
											})
										}), (0, i.jsx)("div", {
											className: "col-md-6",
											children: (0, i.jsxs)("div", {
												className: "form-inner mb-25",
												children: [(0, i.jsx)("label", {
													htmlFor: "desigation",
													children: "Designation*"
												}), (0, i.jsxs)("div", {
													className: "input-area",
													children: [(0, i.jsx)("img", {
														src: "/assets/images/icon/designation-2.svg",
														alt: ""
													}), (0, i.jsxs)("select", {
														className: "select1",
														children: [(0, i.jsx)("option", {
															value: 0,
															children: "Back-end developer"
														}), (0, i.jsx)("option", {
															value: 1,
															children: "Front-end developer"
														}), (0, i.jsx)("option", {
															value: 2,
															children: "Full-stack developer"
														})]
													})]
												})]
											})
										}), (0, i.jsx)("div", {
											className: "col-md-6",
											children: (0, i.jsxs)("div", {
												className: "form-inner mb-20",
												children: [(0, i.jsx)("label", {
													htmlFor: "datepicker6",
													children: "Starting Period*"
												}), (0, i.jsxs)("div", {
													className: "input-area",
													children: [(0, i.jsx)("img", {
														src: "/assets/images/icon/calender2.svg",
														alt: ""
													}), (0, i.jsx)(r(), {
														selected: e,
														onChange: e => s(e),
														placeholderText: "Check In",
														className: "calendar"
													})]
												})]
											})
										}), (0, i.jsx)("div", {
											className: "col-md-6",
											children: (0, i.jsxs)("div", {
												className: "form-inner mb-20",
												children: [(0, i.jsx)("label", {
													htmlFor: "datepicker7",
													children: "Ending Period*"
												}), (0, i.jsxs)("div", {
													className: "input-area",
													children: [(0, i.jsx)("img", {
														src: "/assets/images/icon/calender2.svg",
														alt: ""
													}), (0, i.jsx)(r(), {
														selected: a,
														onChange: e => n(e),
														placeholderText: "Check In",
														className: "calendar"
													})]
												})]
											})
										}), (0, i.jsx)("div", {
											className: "col-md-12",
											children: (0, i.jsx)("div", {
												className: "form-agreement employment-check form-inner d-flex justify-content-between flex-wrap p-0",
												children: (0, i.jsxs)("div", {
													className: "form-group two",
													children: [(0, i.jsx)("input", {
														type: "checkbox",
														id: l.value
													}), (0, i.jsx)("label", {
														htmlFor: l.value,
														children: "Continuing Working Here"
													})]
												})
											})
										}), (0, i.jsx)("div", {
											className: "col-md-12",
											children: (0, i.jsxs)("div", {
												className: "form-inner mb-20",
												children: [(0, i.jsx)("label", {
													htmlFor: "description1",
													children: "Responsibility**"
												}), (0, i.jsx)("textarea", {
													name: "description",
													id: "description1",
													placeholder: "Write Your Responsibility...",
													defaultValue: ""
												})]
											})
										})]
									})
								})]
							}), 0 !== c && (0, i.jsx)("div", {
								className: "add-row",
								children: (0, i.jsx)("button", {
									className: "remove-education-row remove",
									onClick: () => o(c, event),
									children: "Remove Experiences Area"
								})
							}), (0, i.jsx)("div", {
								className: "add-remove-btn d-flex align-items-center justify-content-between",
								children: (0, i.jsx)("div", {
									className: "add-row",
									children: (0, i.jsx)("button", {
										onClick: d,
										type: "button",
										className: "add-education-row",
										children: "Add New+"
									})
								})
							})]
						}, c))
					})
				},
				o = a(689);
			let m = {
					DropdownIndicator: null,
					IndicatorsContainer: () => null
				},
				h = e => ({
					label: e,
					value: e
				});
			var x = function() {
				let [e, s] = (0, l.useState)([]), [a, n] = l.useState(""), [x, j] = l.useState([]), [p, v] = l.useState(new Date), [u, N] = (0, l.useState)(""), b = (0, l.useRef)(null), g = e => {
					let s = e.target.files[0],
						a = new FileReader;
					a.onload = () => {
						N(a.result)
					}, a.readAsDataURL(s)
				}, f = () => {
					b.current.click()
				}, w = e => {
					e.preventDefault();
					let s = e.dataTransfer.files[0],
						a = new FileReader;
					a.onload = () => {
						N(a.result)
					}, a.readAsDataURL(s)
				}, y = e => {
					e.preventDefault()
				}, k = e => {
					if (a) switch (e.key) {
						case "Enter":
						case "Tab":
							j(e => [...e, h(a)]), n(""), e.preventDefault()
					}
				};
				return (0, i.jsx)(o.Z, {
					children: (0, i.jsx)("div", {
						className: "col-lg-9",
						children: (0, i.jsx)("div", {
							className: "edit-profile.html-inner",
							children: (0, i.jsxs)("div", {
								className: "form-wrapper",
								children: [(0, i.jsxs)("ul", {
									className: "nav nav-tabs",
									id: "myTab",
									role: "tablist",
									children: [(0, i.jsx)("li", {
										className: "nav-item",
										role: "presentation",
										children: (0, i.jsxs)("button", {
											className: "nav-link active",
											id: "home-tab",
											"data-bs-toggle": "tab",
											"data-bs-target": "#home",
											type: "button",
											role: "tab",
											"aria-controls": "home",
											"aria-selected": "true",
											children: [(0, i.jsx)("span", {}), "Basic Information:"]
										})
									}), (0, i.jsx)("li", {
										className: "nav-item",
										role: "presentation",
										children: (0, i.jsxs)("button", {
											className: "nav-link",
											id: "profile-tab",
											"data-bs-toggle": "tab",
											"data-bs-target": "#profile",
											type: "button",
											role: "tab",
											"aria-controls": "profile",
											"aria-selected": "false",
											children: [(0, i.jsx)("span", {}), "Profile"]
										})
									}), (0, i.jsx)("li", {
										className: "nav-item",
										role: "presentation",
										children: (0, i.jsxs)("button", {
											className: "nav-link",
											id: "contact.html-tab",
											"data-bs-toggle": "tab",
											"data-bs-target": "#contact.html",
											type: "button",
											role: "tab",
											"aria-controls": "contact.html",
											"aria-selected": "false",
											children: [(0, i.jsx)("span", {}), "Education"]
										})
									}), (0, i.jsx)("li", {
										className: "nav-item",
										role: "presentation",
										children: (0, i.jsxs)("button", {
											className: "nav-link",
											id: "professional-tab",
											"data-bs-toggle": "tab",
											"data-bs-target": "#professional",
											type: "button",
											role: "tab",
											"aria-controls": "professional",
											"aria-selected": "false",
											children: [(0, i.jsx)("span", {}), "Professional Info"]
										})
									})]
								}), (0, i.jsxs)("div", {
									className: "tab-content",
									id: "myTabContent",
									children: [(0, i.jsxs)("div", {
										className: "tab-pane fade show active",
										id: "home",
										role: "tabpanel",
										"aria-labelledby": "home-tab",
										children: [(0, i.jsx)("form", {
											className: "edit-profile.html-form profile-form mb-60",
											children: (0, i.jsxs)("div", {
												className: "row",
												children: [(0, i.jsx)("div", {
													className: "col-md-6",
													children: (0, i.jsxs)("div", {
														className: "form-inner mb-25",
														children: [(0, i.jsx)("label", {
															htmlFor: "firstname1",
															children: "First Name*"
														}), (0, i.jsxs)("div", {
															className: "input-area",
															children: [(0, i.jsx)("img", {
																src: "/assets/images/icon/user-2.svg",
																alt: ""
															}), (0, i.jsx)("input", {
																type: "text",
																id: "firstname1",
																name: "firstname",
																placeholder: "Mrs. Jacoline"
															})]
														})]
													})
												}), (0, i.jsx)("div", {
													className: "col-xxl-4 col-md-6",
													children: (0, i.jsxs)("div", {
														className: "form-inner mb-25",
														children: [(0, i.jsx)("label", {
															htmlFor: "lastname",
															children: "Last Name*"
														}), (0, i.jsxs)("div", {
															className: "input-area",
															children: [(0, i.jsx)("img", {
																src: "/assets/images/icon/user-2.svg ",
																alt: ""
															}), (0, i.jsx)("input", {
																type: "text",
																id: "lastname",
																name: "lastname",
																placeholder: "Frankly"
															})]
														})]
													})
												}), (0, i.jsx)("div", {
													className: "col-xxl-2 col-lg-12",
													children: (0, i.jsxs)("div", {
														title: "Drag and drop an image here",
														className: "image-uploader",
														children: [(0, i.jsx)("div", {
															className: "dropzone drag-area",
															onDrop: w,
															onDragOver: y,
															onClick: f,
															children: u ? (0, i.jsx)("img", {
																src: u,
																alt: "preview",
																className: "preview"
															}) : (0, i.jsx)("p", {
																children: "Upload Image"
															})
														}), (0, i.jsx)("input", {
															type: "file",
															accept: "image/*",
															onChange: g,
															ref: b,
															style: {
																display: "none"
															}
														})]
													})
												}), (0, i.jsx)("div", {
													className: "col-md-6",
													children: (0, i.jsxs)("div", {
														className: "form-inner mb-25",
														children: [(0, i.jsx)("label", {
															htmlFor: "jobplace",
															children: "Current Job Place*"
														}), (0, i.jsxs)("div", {
															className: "input-area",
															children: [(0, i.jsx)("img", {
																src: "/assets/images/icon/company-2.svg",
																alt: ""
															}), (0, i.jsx)("input", {
																type: "text",
																id: "jobplace",
																name: "jobplace",
																placeholder: "Company Name"
															})]
														})]
													})
												}), (0, i.jsx)("div", {
													className: "col-md-6",
													children: (0, i.jsxs)("div", {
														className: "form-inner mb-25",
														children: [(0, i.jsx)("label", {
															htmlFor: "desigation",
															children: "Designation*"
														}), (0, i.jsxs)("div", {
															className: "input-area",
															children: [(0, i.jsx)("img", {
																src: "/assets/images/icon/designation-2.svg",
																alt: ""
															}), (0, i.jsx)("input", {
																type: "text",
																id: "desigation",
																name: "desigation",
																placeholder: "UI/UX Engineer"
															})]
														})]
													})
												}), (0, i.jsx)("div", {
													className: "col-md-6",
													children: (0, i.jsxs)("div", {
														className: "form-inner mb-25",
														children: [(0, i.jsx)("label", {
															htmlFor: "experiences",
															children: "Year of Experiences*"
														}), (0, i.jsxs)("div", {
															className: "input-area",
															children: [(0, i.jsx)("img", {
																src: "/assets/images/icon/experiences-2.svg",
																alt: ""
															}), (0, i.jsx)("input", {
																type: "text",
																id: "experiences",
																name: "experiences",
																placeholder: "3.5 Years"
															})]
														})]
													})
												}), (0, i.jsx)("div", {
													className: "col-md-6",
													children: (0, i.jsxs)("div", {
														className: "form-inner mb-25",
														children: [(0, i.jsx)("label", {
															children: "Qualification*"
														}), (0, i.jsxs)("div", {
															className: "input-area",
															children: [(0, i.jsx)("img", {
																src: "/assets/images/icon/qualification-2.svg",
																alt: ""
															}), (0, i.jsxs)("select", {
																className: "select1",
																children: [(0, i.jsx)("option", {
																	value: 0,
																	children: "Bachelor Degree in CSE"
																}), (0, i.jsx)("option", {
																	value: 1,
																	children: "IGCSE"
																}), (0, i.jsx)("option", {
																	value: 2,
																	children: "AS"
																}), (0, i.jsx)("option", {
																	value: 4,
																	children: "A Level"
																}), (0, i.jsx)("option", {
																	value: 5,
																	children: "Matriculated"
																})]
															})]
														})]
													})
												}), (0, i.jsx)("div", {
													className: "col-md-6",
													children: (0, i.jsxs)("div", {
														className: "form-inner mb-25",
														children: [(0, i.jsx)("label", {
															htmlFor: "email1",
															children: "Email*"
														}), (0, i.jsxs)("div", {
															className: "input-area",
															children: [(0, i.jsx)("img", {
																src: "/assets/images/icon/email-2.svg",
																alt: ""
															}), (0, i.jsx)("input", {
																type: "text",
																id: "email1",
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
															htmlFor: "phonenumber",
															children: "Phone Number*"
														}), (0, i.jsxs)("div", {
															className: "input-area",
															children: [(0, i.jsx)("img", {
																src: "/assets/images/icon/phone-2.svg",
																alt: ""
															}), (0, i.jsx)("input", {
																type: "text",
																id: "phonenumber",
																name: "phonenumber",
																placeholder: "+880-17 *** *** **"
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
															htmlFor: "language",
															children: "Language*"
														}), (0, i.jsxs)("div", {
															className: "input-area",
															children: [(0, i.jsx)("img", {
																src: "/assets/images/icon/language-2.svg",
																alt: ""
															}), (0, i.jsx)("input", {
																type: "text",
																id: "language",
																name: "language",
																placeholder: "Bangla, English, Hindi"
															})]
														})]
													})
												}), (0, i.jsx)("div", {
													className: "col-md-12",
													children: (0, i.jsxs)("div", {
														className: "form-inner mb-50",
														children: [(0, i.jsx)("label", {
															htmlFor: "description",
															children: "Career Objective*"
														}), (0, i.jsx)("textarea", {
															name: "description",
															id: "description",
															placeholder: "Something Write Yourself....",
															defaultValue: ""
														})]
													})
												}), (0, i.jsx)("div", {
													className: "col-md-12",
													children: (0, i.jsx)("div", {
														className: "form-inner",
														children: (0, i.jsx)("button", {
															className: "primry-btn-2 lg-btn w-unset",
															type: "submit",
															children: "Update Resume"
														})
													})
												})]
											})
										}), (0, i.jsxs)("div", {
											className: "form-wrapper",
											children: [(0, i.jsx)("div", {
												className: "section-title",
												children: (0, i.jsx)("h5", {
													children: "Social Network:"
												})
											}), (0, i.jsx)("form", {
												className: "profile-form",
												children: (0, i.jsxs)("div", {
													className: "row",
													children: [(0, i.jsx)("div", {
														className: "col-md-6",
														children: (0, i.jsxs)("div", {
															className: "form-inner mb-25",
															children: [(0, i.jsx)("label", {
																htmlFor: "fecebook",
																children: "Facebook"
															}), (0, i.jsxs)("div", {
																className: "input-area",
																children: [(0, i.jsx)("img", {
																	src: "/assets/images/icon/facebook-2.svg",
																	alt: ""
																}), (0, i.jsx)("input", {
																	type: "text",
																	id: "fecebook",
																	name: "fecebook",
																	placeholder: "https://example-fecebook.com"
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
															className: "form-inner mb-50",
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
														className: "col-md-12",
														children: (0, i.jsx)("div", {
															className: "form-inner",
															children: (0, i.jsx)("button", {
																className: "primry-btn-2 lg-btn w-unset",
																type: "submit",
																children: "Update Social Link"
															})
														})
													})]
												})
											})]
										})]
									}), (0, i.jsx)("div", {
										className: "tab-pane fade",
										id: "profile",
										role: "tabpanel",
										"aria-labelledby": "profile-tab",
										children: (0, i.jsx)("form", {
											className: "edit-profile.html-form profile-form",
											children: (0, i.jsxs)("div", {
												className: "row",
												children: [(0, i.jsx)("div", {
													className: "col-md-6",
													children: (0, i.jsxs)("div", {
														className: "form-inner mb-25",
														children: [(0, i.jsx)("label", {
															htmlFor: "fathername",
															children: "Father’s Name*"
														}), (0, i.jsxs)("div", {
															className: "input-area",
															children: [(0, i.jsx)("img", {
																src: "/assets/images/icon/user-2.svg",
																alt: ""
															}), (0, i.jsx)("input", {
																type: "text",
																id: "fathername",
																name: "fathername",
																placeholder: "Mr. Norman Frankly"
															})]
														})]
													})
												}), (0, i.jsx)("div", {
													className: "col-md-6",
													children: (0, i.jsxs)("div", {
														className: "form-inner mb-25",
														children: [(0, i.jsx)("label", {
															htmlFor: "mothername",
															children: "Mother's Name*"
														}), (0, i.jsxs)("div", {
															className: "input-area",
															children: [(0, i.jsx)("img", {
																src: "/assets/images/icon/user-2.svg ",
																alt: ""
															}), (0, i.jsx)("input", {
																type: "text",
																id: "mothername",
																name: "mothername",
																placeholder: "Mrs. Marcoline Frankly"
															})]
														})]
													})
												}), (0, i.jsx)("div", {
													className: "col-md-6",
													children: (0, i.jsxs)("div", {
														className: "form-inner mb-25",
														children: [(0, i.jsx)("label", {
															htmlFor: "datepicker5",
															children: "Date of Birth*"
														}), (0, i.jsxs)("div", {
															className: "input-area",
															children: [(0, i.jsx)("img", {
																src: "/assets/images/icon/calender2.svg",
																alt: ""
															}), (0, i.jsx)(r(), {
																selected: p,
																onChange: e => v(e),
																placeholderText: "Date of Birth",
																className: "calendar"
															})]
														})]
													})
												}), (0, i.jsx)("div", {
													className: "col-md-6",
													children: (0, i.jsxs)("div", {
														className: "form-inner mb-25",
														children: [(0, i.jsx)("label", {
															htmlFor: "nid",
															children: "National Id*"
														}), (0, i.jsxs)("div", {
															className: "input-area",
															children: [(0, i.jsx)("img", {
																src: "/assets/images/icon/nid.svg",
																alt: ""
															}), (0, i.jsx)("input", {
																type: "text",
																id: "nid",
																name: "nid ",
																placeholder: "0988 *** *** *** **"
															})]
														})]
													})
												}), (0, i.jsx)("div", {
													className: "col-md-6",
													children: (0, i.jsxs)("div", {
														className: "form-inner mb-25",
														children: [(0, i.jsxs)("div", {
															className: "salary-wrap",
															children: [(0, i.jsx)("label", {
																className: "label",
																htmlFor: "preAddress",
																children: "Present Address*"
															}), (0, i.jsx)("div", {
																className: "checkbox-container",
																children: (0, i.jsx)("ul", {
																	children: (0, i.jsx)("li", {
																		children: (0, i.jsxs)("label", {
																			className: "containerss",
																			children: [(0, i.jsx)("input", {
																				type: "checkbox"
																			}), (0, i.jsx)("span", {
																				className: "checkmark"
																			}), (0, i.jsx)("span", {
																				className: "text",
																				children: "Same as permanent Address"
																			})]
																		})
																	})
																})
															})]
														}), (0, i.jsxs)("div", {
															className: "input-area",
															children: [(0, i.jsx)("img", {
																src: "/assets/images/icon/home-2.svg",
																alt: ""
															}), (0, i.jsx)("input", {
																type: "text",
																id: "preAddress",
																name: "preAddress ",
																placeholder: "Your Address Here..."
															})]
														})]
													})
												}), (0, i.jsx)("div", {
													className: "col-md-6",
													children: (0, i.jsxs)("div", {
														className: "form-inner mb-25",
														children: [(0, i.jsx)("label", {
															htmlFor: "perAddress",
															children: "Permanent Address*"
														}), (0, i.jsxs)("div", {
															className: "input-area",
															children: [(0, i.jsx)("img", {
																src: "/assets/images/icon/home-2.svg",
																alt: ""
															}), (0, i.jsx)("input", {
																type: "text",
																id: "perAddress",
																name: "perAddress",
																placeholder: "Your Address Here..."
															})]
														})]
													})
												}), (0, i.jsx)("div", {
													className: "col-md-6",
													children: (0, i.jsxs)("div", {
														className: "form-inner mb-25",
														children: [(0, i.jsx)("label", {
															children: "Marital Status*"
														}), (0, i.jsxs)("div", {
															className: "input-area",
															children: [(0, i.jsx)("img", {
																src: "/assets/images/icon/marital-2.svg",
																alt: ""
															}), (0, i.jsxs)("select", {
																className: "select1",
																children: [(0, i.jsx)("option", {
																	value: 0,
																	children: "Single"
																}), (0, i.jsx)("option", {
																	value: 1,
																	children: "Married"
																}), (0, i.jsx)("option", {
																	value: 2,
																	children: "Widowed"
																}), (0, i.jsx)("option", {
																	value: 4,
																	children: "Divorced"
																})]
															})]
														})]
													})
												}), (0, i.jsx)("div", {
													className: "col-md-6",
													children: (0, i.jsxs)("div", {
														className: "form-inner mb-25",
														children: [(0, i.jsx)("label", {
															children: "Gender*"
														}), (0, i.jsxs)("div", {
															className: "input-area",
															children: [(0, i.jsx)("img", {
																src: "/assets/images/icon/gender.svg ",
																alt: ""
															}), (0, i.jsxs)("select", {
																className: "select1",
																children: [(0, i.jsx)("option", {
																	value: 0,
																	children: "Female"
																}), (0, i.jsx)("option", {
																	value: 1,
																	children: "Male"
																}), (0, i.jsx)("option", {
																	value: 2,
																	children: "Custom"
																})]
															})]
														})]
													})
												}), (0, i.jsx)("div", {
													className: "col-md-6",
													children: (0, i.jsxs)("div", {
														className: "form-inner mb-25",
														children: [(0, i.jsx)("label", {
															children: "Religion*"
														}), (0, i.jsxs)("div", {
															className: "input-area",
															children: [(0, i.jsx)("img", {
																src: "/assets/images/icon/religion.svg",
																alt: ""
															}), (0, i.jsxs)("select", {
																className: "select1",
																children: [(0, i.jsx)("option", {
																	value: 0,
																	children: "Christianity"
																}), (0, i.jsx)("option", {
																	value: 1,
																	children: "Islam"
																}), (0, i.jsx)("option", {
																	value: 2,
																	children: "Buddhism"
																}), (0, i.jsx)("option", {
																	value: 3,
																	children: "Sikhism"
																}), (0, i.jsx)("option", {
																	value: 4,
																	children: "Judaism"
																})]
															})]
														})]
													})
												}), (0, i.jsx)("div", {
													className: "col-md-6",
													children: (0, i.jsxs)("div", {
														className: "form-inner mb-25",
														children: [(0, i.jsx)("label", {
															children: "Blood Group*"
														}), (0, i.jsxs)("div", {
															className: "input-area",
															children: [(0, i.jsx)("img", {
																src: "/assets/images/icon/blood.svg",
																alt: ""
															}), (0, i.jsxs)("select", {
																className: "select1",
																children: [(0, i.jsx)("option", {
																	value: 0,
																	children: "A+"
																}), (0, i.jsx)("option", {
																	value: 1,
																	children: "A-"
																}), (0, i.jsx)("option", {
																	value: 2,
																	children: "B+"
																}), (0, i.jsx)("option", {
																	value: 3,
																	children: "B-"
																}), (0, i.jsx)("option", {
																	value: 4,
																	children: "AB+"
																}), (0, i.jsx)("option", {
																	value: 5,
																	children: "AB-"
																}), (0, i.jsx)("option", {
																	value: 6,
																	children: "O+"
																}), (0, i.jsx)("option", {
																	value: 7,
																	children: "O-"
																})]
															})]
														})]
													})
												}), (0, i.jsx)("div", {
													className: "col-md-6",
													children: (0, i.jsxs)("div", {
														className: "form-inner mb-25",
														children: [(0, i.jsx)("label", {
															htmlFor: "hight",
															children: "Height*"
														}), (0, i.jsxs)("div", {
															className: "input-area",
															children: [(0, i.jsx)("img", {
																src: "/assets/images/icon/hight.svg",
																alt: ""
															}), (0, i.jsx)("input", {
																type: "text",
																id: "hight",
																name: "hight",
																placeholder: "5.6'"
															})]
														})]
													})
												}), (0, i.jsx)("div", {
													className: "col-md-6",
													children: (0, i.jsxs)("div", {
														className: "form-inner mb-25",
														children: [(0, i.jsx)("label", {
															htmlFor: "weight",
															children: "Weight*"
														}), (0, i.jsxs)("div", {
															className: "input-area",
															children: [(0, i.jsx)("img", {
																src: "/assets/images/icon/weight.svg",
																alt: ""
															}), (0, i.jsx)("input", {
																type: "text",
																id: "weight",
																name: "weight ",
																placeholder: 56
															})]
														})]
													})
												}), (0, i.jsx)("div", {
													className: "skills-row",
													children: (0, i.jsxs)("div", {
														className: "row",
														children: [(0, i.jsx)("div", {
															className: "col-lg-12",
															children: (0, i.jsx)("div", {
																className: "section-title2 mb-20",
																children: (0, i.jsx)("h5", {
																	children: "Your Skills:"
																})
															})
														}), (0, i.jsx)("div", {
															className: "col-md-12",
															children: (0, i.jsxs)("div", {
																className: "form-inner mb-25",
																children: [(0, i.jsx)("label", {
																	children: "Special Skills*"
																}), (0, i.jsx)(c.Z, {
																	components: m,
																	inputValue: a,
																	isClearable: !0,
																	isMulti: !0,
																	menuIsOpen: !1,
																	styles: {
																		control: (e, s) => ({ ...e,
																			border: "1px solid rgba(0, 167, 172, 0.12)",
																			backgroundColor: "transparent",
																			boxShadow: "none",
																			"&:hover": {
																				borderColor: "none"
																			}
																		}),
																		menu: (e, s) => ({ ...e,
																			zIndex: 9999
																		}),
																		multiValue: (e, s) => ({ ...e,
																			color: "white",
																			backgroundColor: "#00a7ac"
																		}),
																		multiValueLabel: (e, s) => ({ ...e,
																			color: "white"
																		}),
																		multiValueRemove: (e, s) => ({ ...e,
																			color: "white",
																			":hover": {
																				backgroundColor: "#dc3545",
																				color: "white"
																			}
																		}),
																		ValueContainer: (e, s) => ({ ...e,
																			display: "flex",
																			backgroundColor: "#343a40",
																			flexWrap: "nowrap"
																		})
																	},
																	onChange: e => j(e),
																	onInputChange: e => n(e),
																	onKeyDown: k,
																	placeholder: "Type Tag and press enter...",
																	value: x
																})]
															})
														})]
													})
												}), (0, i.jsx)("div", {
													className: "col-md-12",
													children: (0, i.jsx)("div", {
														className: "form-inner",
														children: (0, i.jsx)("button", {
															className: "primry-btn-2 lg-btn w-unset",
															type: "submit",
															children: "Update Change"
														})
													})
												})]
											})
										})
									}), (0, i.jsxs)("div", {
										className: "tab-pane fade",
										id: "contact.html",
										role: "tabpanel",
										"aria-labelledby": "contact.html-tab",
										children: [(0, i.jsx)(t, {}), (0, i.jsx)("div", {
											className: "row",
											children: (0, i.jsx)("div", {
												className: "col-md-12",
												children: (0, i.jsx)("div", {
													className: "form-inner pt-30",
													children: (0, i.jsx)("button", {
														className: "primry-btn-2 lg-btn w-unset",
														type: "submit",
														children: "Update Change"
													})
												})
											})
										})]
									}), (0, i.jsx)("div", {
										className: "tab-pane fade",
										id: "professional",
										role: "tabpanel",
										"aria-labelledby": "professional-tab",
										children: (0, i.jsx)(d, {})
									})]
								})]
							})
						})
					})
				})
			}
		},
		6346: function(e, s, a) {
			"use strict";
			a.d(s, {
				Z: function() {
					return j
				}
			});
			var i = a(7462),
				l = a(7294),
				n = a(3564),
				r = a(5342),
				c = a(1413),
				t = a(1451),
				d = a(2402),
				o = a(7003),
				m = ["allowCreateWhileLoading", "createOptionPosition", "formatCreateLabel", "isValidNewOption", "getNewOptionData", "onCreateOption", "options", "onChange"],
				h = function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						s = arguments.length > 1 ? arguments[1] : void 0,
						a = arguments.length > 2 ? arguments[2] : void 0,
						i = String(e).toLowerCase(),
						l = String(a.getOptionValue(s)).toLowerCase(),
						n = String(a.getOptionLabel(s)).toLowerCase();
					return l === i || n === i
				},
				x = {
					formatCreateLabel: function(e) {
						return 'Create "'.concat(e, '"')
					},
					isValidNewOption: function(e, s, a, i) {
						return !(!e || s.some(function(s) {
							return h(e, s, i)
						}) || a.some(function(s) {
							return h(e, s, i)
						}))
					},
					getNewOptionData: function(e, s) {
						return {
							label: s,
							value: e,
							__isNew__: !0
						}
					}
				};
			a(3935), a(3469);
			var j = (0, l.forwardRef)(function(e, s) {
				var a, h, j, p, v, u, N, b, g, f, w, y, k, C, F, S, A, D, E, O, I, L, M, P, _, T, V, B, R = (j = void 0 !== (h = (a = (0, r.u)(e)).allowCreateWhileLoading) && h, v = void 0 === (p = a.createOptionPosition) ? "last" : p, N = void 0 === (u = a.formatCreateLabel) ? x.formatCreateLabel : u, g = void 0 === (b = a.isValidNewOption) ? x.isValidNewOption : b, w = void 0 === (f = a.getNewOptionData) ? x.getNewOptionData : f, y = a.onCreateOption, C = void 0 === (k = a.options) ? [] : k, F = a.onChange, D = void 0 === (A = (S = (0, d.Z)(a, m)).getOptionValue) ? n.g : A, O = void 0 === (E = S.getOptionLabel) ? n.b : E, I = S.inputValue, L = S.isLoading, M = S.isMulti, P = S.value, _ = S.name, T = (0, l.useMemo)(function() {
					return g(I, (0, o.I)(P), C, {
						getOptionValue: D,
						getOptionLabel: O
					}) ? w(I, N(I)) : void 0
				}, [N, w, O, D, I, g, C, P]), V = (0, l.useMemo)(function() {
					return (j || !L) && T ? "first" === v ? [T].concat((0, t.Z)(C)) : [].concat((0, t.Z)(C), [T]) : C
				}, [j, v, L, T, C]), B = (0, l.useCallback)(function(e, s) {
					if ("select-option" !== s.action) return F(e, s);
					var a = Array.isArray(e) ? e : [e];
					if (a[a.length - 1] === T) {
						if (y) y(I);
						else {
							var i = w(I, I);
							F((0, o.D)(M, [].concat((0, t.Z)((0, o.I)(P)), [i]), i), {
								action: "create-option",
								name: _,
								option: i
							})
						}
						return
					}
					F(e, s)
				}, [w, I, M, _, T, y, F, P]), (0, c.Z)((0, c.Z)({}, S), {}, {
					options: V,
					onChange: B
				}));
				return l.createElement(n.S, (0, i.Z)({
					ref: s
				}, R))
			})
		}
	},
	function(e) {
		e.O(0, [3424, 717, 2008, 4661, 8960, 8004, 7052, 689, 9774, 2888, 179], function() {
			return e(e.s = 572)
		}), _N_E = e.O()
	}
]);