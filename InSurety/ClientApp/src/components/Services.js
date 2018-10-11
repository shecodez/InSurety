import React from "react";
import { Col, Row } from "react-bootstrap";

const Services = () => {
	return (
		<Row>
			<Col md={4}>
				<div className="card">
					<div className="card-header card-header-info">
						<h4 className="card-title">Contact an Agent</h4>
					</div>
					<div className="card-body">
						<p>
							The place is close to Barceloneta Beach and bus stop
							just 2 min by walk and near to "Naviglio" where you
							can enjoy the main night life in Barcelona...
						</p>
						<button className="btn btn-info btn-link">
							Learn More
						</button>
					</div>
				</div>
			</Col>

			<Col md={4}>
				<div className="card">
					<div className="card-header card-header-info">
						<h4 className="card-title">View our Products</h4>
					</div>
					<div className="card-body">
						<p>
							The place is close to Barceloneta Beach and bus stop
							just 2 min by walk and near to "Naviglio" where you
							can enjoy the main night life in Barcelona...
						</p>
						<button className="btn btn-info btn-link">
							Learn More
						</button>
					</div>
				</div>
			</Col>

			<Col md={4}>
				<div className="card">
					<div className="card-header card-header-info">
						<h4 className="card-title">Report a Claim</h4>
					</div>
					<div className="card-body">
						<p>
							The place is close to Barceloneta Beach and bus stop
							just 2 min by walk and near to "Naviglio" where you
							can enjoy the main night life in Barcelona...
						</p>
						<button className="btn btn-info btn-link">
							Learn More
						</button>
					</div>
				</div>
			</Col>
		</Row>
	);
};

export default Services;
