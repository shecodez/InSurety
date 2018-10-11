import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="footer footer-default">
			<div className="container">
				<nav className="float-left">
					<ul>
						<li>
							<Link to={"/about"}>About Us</Link>
						</li>
						<li>
							<Link to={"/faq"}>FAQ</Link>
						</li>
						<li>
							<Link to={"/contact"}>Contact</Link>
						</li>
					</ul>
				</nav>
				<div className="copyright float-right">
					Privacy Policy | Terms &amp; Conditions
				</div>
			</div>
		</footer>
	);
};

export default Footer;
