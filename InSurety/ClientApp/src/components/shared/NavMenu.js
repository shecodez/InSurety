import React from "react";
import { Link } from "react-router-dom";

import GetAQuote from "../sections/GetAQuote";
import Modal from "../shared/Modal";

class NavMenu extends React.Component {
	render() {
		return (
			<div>
				<nav
					className="navbar navbar-color-on-scroll navbar-transparent fixed-top navbar-expand-lg"
					color-on-scroll="100"
				>
					<div className="container">
						<div className="navbar-translate">
							<Link to={"/"} className="navbar-brand">
								InSurety
							</Link>

							<button
								className="navbar-toggler"
								type="button"
								data-toggle="collapse"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span className="sr-only">
									Toggle navigation
								</span>
								<span className="navbar-toggler-icon" />
								<span className="navbar-toggler-icon" />
								<span className="navbar-toggler-icon" />
							</button>
						</div>

						<div className="collapse navbar-collapse">
							<ul className="navbar-nav">
								<li className="nav-item">
									<Link
										to={"/insurance"}
										className="nav-link"
									>
										Insurance
									</Link>
								</li>
								<li className="nav-item">
									<Link to={"/claims"} className="nav-link">
										Claims
									</Link>
								</li>
								<li className="nav-item">
									<button
										type="button"
										className="btn btn-info btn-link"
										data-toggle="modal"
										data-target="#InSuretyModal"
										style={{ fontWeight: "bold" }}
									>
										Get A Quote
									</button>
								</li>
								<li className="nav-item">
									<Link to={"/blog"} className="nav-link">
										Blog
									</Link>
								</li>
								<li className="nav-item">
									<Link to={"/contact"} className="nav-link">
										Contact
									</Link>
								</li>
							</ul>
							<ul className="navbar-nav ml-auto">
								<li className="nav-item">
									<Link to={"/login"} className="nav-link">
										<i className="material-icons">lock</i>{" "}
										Log In
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
				<Modal>
					<GetAQuote />
				</Modal>
			</div>
		);
	}
}

export default NavMenu;
