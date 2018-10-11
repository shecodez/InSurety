import React from "react";
import { Link } from "react-router-dom";

class NavMenu extends React.Component {
	render() {
		return (
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
							<span className="sr-only">Toggle navigation</span>
							<span className="navbar-toggler-icon" />
							<span className="navbar-toggler-icon" />
							<span className="navbar-toggler-icon" />
						</button>
					</div>

					<div className="collapse navbar-collapse">
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link to={"/insurance"} className="nav-link">
									Insurance
								</Link>
							</li>
							<li className="nav-item">
								<Link to={"/quotes"} className="nav-link">
									Get a Quote
								</Link>
							</li>
							<li className="nav-item">
								<Link to={"/claims"} className="nav-link">
									Claims
								</Link>
							</li>
							<li className="nav-item">
								<Link to={"/membership"} className="nav-link">
									Membership
								</Link>
							</li>
						</ul>
						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<Link to={"/login"} className="nav-link">
									<i className="material-icons">lock</i> Log
									In
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default NavMenu;
