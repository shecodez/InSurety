import React from "react";

export const brandLogos = [
	{ logo: "https://via.placeholder.com/150x150" },
	{
		logo: "https://via.placeholder.com/150x150"
	},
	{
		logo: "https://via.placeholder.com/150x150"
	},
	{
		logo: "https://via.placeholder.com/150x150"
	}
];

const Brands = props => {
	return (
		<section className="brands-section">
			<div className="container">
				<div className="row">
					{brandLogos.map((item, i) => (
						<div className="col-md-3" key={i}>
							<img src={item.logo} alt="brand Logo" />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Brands;
