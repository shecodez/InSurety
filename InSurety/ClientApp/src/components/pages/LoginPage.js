import React from "react";
import { Link } from "react-router-dom";

// TODO: send image as prop to layout and allow childern
// import Layout from "../shared/Layout";
import NavMenu from "../shared/NavMenu";
import Footer from "../shared/Footer";

class Login extends React.Component {
	render() {
		return (
			<div className="login-page">
				<NavMenu />
				<div
					className="page-header header-filter"
					style={{
						backgroundImage: "url('../assets/img/bg7.jpg')",
						backgroundSize: "cover",
						backgroundPosition: "top center"
					}}
				>
					<div className="container">
						<div className="row">
							<div className="col-lg-4 col-md-6 ml-auto mr-auto">
								<div className="card card-login">
									<form className="form" method="" action="">
										<div className="card-header card-header-primary text-center">
											<h4 className="card-title">
												Log In
											</h4>
											<div className="social-line">
												<a
													href="#"
													className="btn btn-just-icon btn-link"
												>
													<i className="fa fa-facebook-square" />
												</a>
												<a
													href="#"
													className="btn btn-just-icon btn-link"
												>
													<i className="fa fa-twitter" />
												</a>
												<a
													href="#"
													className="btn btn-just-icon btn-link"
												>
													<i className="fa fa-google-plus" />
												</a>
											</div>
										</div>
										<p className="description text-center">
											Or Be Classical
										</p>
										<div className="card-body">
											<div className="input-group">
												<div className="input-group-prepend">
													<span className="input-group-text">
														<i className="material-icons">
															face
														</i>
													</span>
												</div>
												<input
													type="text"
													className="form-control"
													placeholder="Full Name"
												/>
											</div>

											<div className="input-group">
												<div className="input-group-prepend">
													<span className="input-group-text">
														<i className="material-icons">
															mail
														</i>
													</span>
												</div>
												<input
													type="email"
													className="form-control"
													placeholder="Email"
												/>
											</div>

											<div className="input-group">
												<div className="input-group-prepend">
													<span className="input-group-text">
														<i className="material-icons">
															lock_outline
														</i>
													</span>
												</div>

												<input
													type="password"
													className="form-control"
													placeholder="Password"
												/>
											</div>
										</div>
										<div className="footer text-center">
											<Link
												to={"/register"}
												className="btn btn-primary btn-link btn-wd btn-lg"
											>
												Need an Account? Register
											</Link>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
					<Footer />
				</div>
			</div>
		);
	}
}

export default Login;
