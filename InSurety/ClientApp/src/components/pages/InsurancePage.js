import React from "react";

import Layout from "../shared/Layout";

class InsurancePage extends React.Component {
	render() {
		return (
			<Layout>
				<div
					className="page-header header-filter"
					style={{
						backgroundImage: "url('../assets/img/bg2.jpg')",
						backgroundSize: "cover",
						backgroundPosition: "top center"
					}}
				>
					<div className="container">
						<div className="row">
							<div className="col-md-8 offset-md-2">
								<div className="card card-nav-tabs text-center">
									<div className="card-header card-header-primary">
										About
									</div>
									<div className="card-body">
										<h4 className="card-title">
											Special title treatment
										</h4>
										<p className="card-text">
											This Is an about page.
										</p>
										<a href="#" className="btn btn-primary">
											Go somewhere
										</a>
									</div>
									<div className="card-footer text-muted">
										2 days ago
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

export default InsurancePage;
