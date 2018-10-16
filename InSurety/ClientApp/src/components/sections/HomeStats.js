import React from "react";

import StatBox from "../shared/StatBox";

export const StatBoxData = [
	{ title: "Happy Clients", icon: "mood", color: "#95c9e1", number: 1352 },
	{
		title: "Counties Covered",
		icon: "security",
		color: "#86dbd4",
		number: 64
	},
	{
		title: "Years of Experience",
		icon: "show_chart",
		color: "#fee4a7",
		number: 126
	},
	{
		title: "Professional Agents",
		icon: "work",
		color: "#f6a9bd",
		number: 756
	}
];

class HomeStats extends React.Component {
	render() {
		return (
			<section
				className="HomeStats-section"
				style={{
					padding: "80px 0",
					background: "linear-gradient(60deg, #F2C14E, #F78154)"
				}}
			>
				<div className="container">
					<div className="row">
						{StatBoxData.map((item, i) => (
							<div className="col-md-3" key={i}>
								<StatBox {...item} />
							</div>
						))}
					</div>
				</div>
			</section>
		);
	}
}

export default HomeStats;
