import React from "react";

class About extends React.Component {
	render() {
		return (
			<section className="about-section" style={{ margin: "100px 0" }}>
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<img
								src="https://via.placeholder.com/550x350"
								style={{ margin: "auto" }}
								alt="Card image cap"
							/>
						</div>
						<div className="col-md-5 offset-md-1">
							<h2 className="title">Insurance</h2>
							<h4>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Suspendisse id leo massa. Sed
								dignissim sapien non maximus condimentum.
							</h4>

							<ul className="row" style={{ paddingLeft: "15px" }}>
								<div className="col-md-6">
									<li>Affordable Prices</li>
									<li>24/7 Friendly Support</li>
								</div>
								<div className="col-md-6">
									<li>Competent Professionals</li>
									<li>Payment Without Delay</li>
								</div>
							</ul>
							<a
								href="#"
								target="_blank"
								class="btn btn-danger btn-raised btn-lg"
							>
								Talk to an Agent
							</a>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default About;
