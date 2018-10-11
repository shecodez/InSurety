﻿import React from "react";

import Layout from "../shared/Layout";
import Services from "../Services";

const HomePage = () => {
	return (
		<Layout>
			<div className="main main-raised">
				<div className="container">
					<div className="section text-center">
						<h2 className="title">The main content goes here</h2>
						<div
							id="carouselExampleIndicators"
							className="carousel slide"
							data-ride="carousel"
						>
							<ol className="carousel-indicators">
								<li
									data-target="#carouselExampleIndicators"
									data-slide-to="0"
									className="active"
								/>
								<li
									data-target="#carouselExampleIndicators"
									data-slide-to="1"
								/>
								<li
									data-target="#carouselExampleIndicators"
									data-slide-to="2"
								/>
							</ol>
							<div className="carousel-inner">
								<div className="carousel-item active">
									<img
										className="d-block w-100"
										src="../../../assets/img/bg2.jpg"
										alt="First slide"
									/>
								</div>
								<div className="carousel-item">
									<img
										className="d-block w-100"
										src="../../../assets/img/bg3.jpg"
										alt="Second slide"
									/>
								</div>
								<div className="carousel-item">
									<img
										className="d-block w-100"
										src="../../../assets/img/bg.jpg"
										alt="Third slide"
									/>
								</div>
							</div>
							<a
								className="carousel-control-prev"
								href="#carouselExampleIndicators"
								role="button"
								data-slide="prev"
							>
								<span
									className="carousel-control-prev-icon"
									aria-hidden="true"
								/>
								<span className="sr-only">Previous</span>
							</a>
							<a
								className="carousel-control-next"
								href="#carouselExampleIndicators"
								role="button"
								data-slide="next"
							>
								<span
									className="carousel-control-next-icon"
									aria-hidden="true"
								/>
								<span className="sr-only">Next</span>
							</a>
						</div>
					</div>

					<Services />
					<br />
				</div>
			</div>
		</Layout>
	);
};

export default HomePage;
