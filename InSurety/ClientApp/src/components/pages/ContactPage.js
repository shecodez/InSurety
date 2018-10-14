import React from "react";
import Layout from "../shared/Layout";

class ContactPage extends React.Component {
	render() {
		return (
			<Layout>
				<div
					className="page-header header-filter"
					data-parallax="true"
					style={{
						backgroundImage:
							"url('../assets/img/profile_city.jpg')",
						maxHeight: "300px"
					}}
				/>
				<div className="main main-raised">
					<div className="contact-content">
						<div className="container">
							<div style={{ padding: "40px 0" }}>
								<h2 className="title">Send us a message</h2>
								<div className="row">
									<div className="col-md-6">
										<p className="description">
											You can contact us with anything
											related to our Products. We&apos;ll
											get in touch with you as soon as
											possible.
											<br />
											<br />
										</p>
										<form
											role="form"
											id="contact-form"
											method="post"
										>
											<div className="form-group">
												<label
													for="name"
													className="bmd-label-floating"
												>
													Your name
												</label>
												<input
													type="text"
													className="form-control"
													id="name"
												/>
											</div>
											<div className="form-group">
												<label
													for="exampleInputEmails"
													className="bmd-label-floating"
												>
													Email address
												</label>
												<input
													type="email"
													className="form-control"
													id="exampleInputEmails"
												/>
												<span className="bmd-help">
													We'll never share your email
													with anyone else.
												</span>
											</div>

											<div className="form-group label-floating">
												<label
													className="form-control-label bmd-label-floating"
													for="message"
												>
													{" "}
													Your message
												</label>
												<textarea
													className="form-control"
													rows="6"
													id="message"
												/>
											</div>
											<div className="submit text-center">
												<input
													type="submit"
													className="btn btn-primary btn-raised btn-round"
													value="Contact Us"
												/>
											</div>
										</form>
									</div>
									<div className="col-md-4 ml-auto">
										<div className="info-horizontal">
											<div className="icon icon-primary">
												<i className="material-icons">
													pin_drop
												</i>
											</div>
											<div className="description">
												<h4 className="info-title">
													Find us at the office
												</h4>
												<p>
													123 Some Street,
													<br />
													City State, USA
												</p>
											</div>
										</div>
										<div
											className="info-horizontal"
											style={{ margin: "40px 0" }}
										>
											<div className="icon icon-primary">
												<i className="material-icons">
													phone
												</i>
											</div>
											<div className="description">
												<h4 className="info-title">
													Give us a ring
												</h4>
												<p>
													+1(123)456-7890
													<br />
													Mon - Fri, 8:00-22:00
												</p>
											</div>
										</div>
										<div className="info-horizontal">
											<div className="icon icon-primary">
												<i className="material-icons">
													business_center
												</i>
											</div>
											<div className="description">
												<h4 className="info-title">
													Legal Information
												</h4>
												<p>
													InSurety Inc.
													<br />
													VAT &#xB7; US2341241
													<br />
													IBAN &#xB7;
													US8732USAB2300099123
													<br />
													Bank &#xB7; Some big bank
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		);
	}
}

export default ContactPage;
