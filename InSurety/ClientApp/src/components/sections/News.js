import React from "react";

import NewsCard from "./NewsCard";

export const LatestNews = [
	{
		title: "A Look into Nonprofit Risk Management",
		date: "October 12, 2018",
		author: "Ryuu Tanaka"
	},
	{
		title: "What 25 Years in Insurance Has Taught Me!",
		date: "October 18, 2018",
		author: "Sam Banks"
	},
	{
		title: "How to Properly Extend Insured Status",
		date: "October 24, 2018",
		author: "Kimmy Waters"
	}
];

class News extends React.Component {
	render() {
		return (
			<section
				className="news-section"
				style={{
					padding: "80px 0"
				}}
			>
				<h2 className="title text-center">Latest News</h2>
				<div className="container">
					<div className="row">
						{LatestNews.map((item, i) => (
							<div className="col-md-4" key={i}>
								<NewsCard {...item} />
							</div>
						))}
					</div>
				</div>
			</section>
		);
	}
}

export default News;
