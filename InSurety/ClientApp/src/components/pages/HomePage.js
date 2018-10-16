import React from "react";

import Layout from "../shared/Layout";
import Services from "../sections/Services";
import Intro from "../sections/Intro";
import About from "../sections/About";
import HomeStats from "../sections/HomeStats";
import News from "../sections/News";
import Carousel from "../sections/Carousel";
import Brands from "../sections/Brands";

const HomePage = () => {
	return (
		<Layout>
			<Intro />
			<div className="main main-raised">
				<div className="container">
					<Services />
				</div>
			</div>
			<About />
			<HomeStats />
			<News />
			<Carousel />
		</Layout>
	);
};

export default HomePage;
