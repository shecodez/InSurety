import React from "react";

const Intro = () => {
	return (
		<section className="intro-section">
			<div
				className="page-header header-filter"
				data-parallax="true"
				style={{ backgroundImage: "url('assets/img/bg3.jpg')" }}
			>
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<h1 className="title">
								Sure Coverage Starts With Us.
							</h1>
							<h4>
								Every landing page needs a small description
								after the big bold title, that's why we added
								this text here. Add here all the information
								that can make you or your product create the
								first impression.
							</h4>
							<br />
							<button
								type="button"
								className="btn btn-info btn-raised btn-lg"
								data-toggle="modal"
								data-target="#InSuretyModal"
								style={{ fontWeight: "bold" }}
							>
								Get A Quote
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Intro;
