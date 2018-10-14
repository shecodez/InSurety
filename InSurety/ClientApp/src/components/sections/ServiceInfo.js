import React from "react";

const ServiceInfo = props => {
	return (
		<div>
			<div className="card-body text-center">
				<h4 className="card-title">{props.title}</h4>
				<p className="card-text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Suspendisse id leo massa. Sed dignissim sapien non maximus
					condimentum. Ut molestie eros et neque efficitur blandit. In
					hendrerit ultrices justo a pulvinar.
				</p>

				<button
					type="button"
					className="btn btn-info"
					data-toggle="modal"
					data-target="#InSuretyModal"
					style={{ fontWeight: "bold" }}
				>
					Get A Quote
				</button>
			</div>
		</div>
	);
};

export default ServiceInfo;
