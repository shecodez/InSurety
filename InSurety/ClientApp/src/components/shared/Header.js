import React from "react";

import NavMenu from "./NavMenu";
const HomePage = () => {
	return (
		<header>
			<NavMenu />

			<div
				className="page-header header-filter"
				data-parallax="true"
				style={{ backgroundImage: "url('assets/img/bg3.jpg')" }}
			>
				<div className="container">
					<div className="row">
						<div className="col-md-8 ml-auto mr-auto">
							<div className="brand text-center">
								<h1>Insuring Your Coverage</h1>
								<h3 className="title text-center">
									Comprehensivly
								</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default HomePage;
