import React from "react";
import ServiceInfo from "./ServiceInfo";

const Services = () => {
	return (
		<div
			className="row"
			style={{
				display: "flex",
				alignItems: "center",
				padding: "100px 0"
			}}
		>
			<div className="col-md-8">
				<div className="tab-content">
					<div className="tab-pane active" id="tab1">
						<div
							className="row"
							style={{
								display: "flex",
								alignItems: "center"
							}}
						>
							<div className="col-md-6">
								<ServiceInfo title={"Home & Property"} />
							</div>
							<div className="col-md-6">
								<img
									src="https://via.placeholder.com/350x350"
									style={{ margin: "auto" }}
									alt="Card image cap"
								/>
							</div>
						</div>
					</div>
					<div className="tab-pane" id="tab2">
						<div
							className="row"
							style={{
								display: "flex",
								alignItems: "center"
							}}
						>
							<div className="col-md-6">
								<ServiceInfo
									title={"Life, Health & Disability"}
								/>
							</div>
							<div className="col-md-6">
								<img
									src="https://via.placeholder.com/350x350"
									style={{ margin: "auto" }}
									alt="Card image cap"
								/>
							</div>
						</div>
					</div>
					<div className="tab-pane" id="tab3">
						<div
							className="row"
							style={{
								display: "flex",
								alignItems: "center"
							}}
						>
							<div className="col-md-6">
								<ServiceInfo title={"Farm & Livestock"} />
							</div>
							<div className="col-md-6">
								<img
									src="https://via.placeholder.com/350x350"
									style={{ margin: "auto" }}
									alt="Card image cap"
								/>
							</div>
						</div>
					</div>
					<div className="tab-pane" id="tab4">
						<div
							className="row"
							style={{
								display: "flex",
								alignItems: "center"
							}}
						>
							<div className="col-md-6">
								<ServiceInfo title={"Automobiles"} />
							</div>
							<div className="col-md-6">
								<img
									src="https://via.placeholder.com/350x350"
									style={{ margin: "auto" }}
									alt="Card image cap"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-4">
				<ul className="nav nav-pills nav-pills-danger nav-pills-icons flex-column">
					<li className="nav-item">
						<a
							className="nav-link active"
							href="#tab1"
							data-toggle="tab"
						>
							<i class="material-icons" style={{ padding: "0" }}>
								home
							</i>{" "}
							Home Insurance
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#tab2" data-toggle="tab">
							<i class="material-icons" style={{ padding: "0" }}>
								favorite
							</i>{" "}
							Life Insurance
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#tab3" data-toggle="tab">
							<i class="material-icons" style={{ padding: "0" }}>
								dashboard
							</i>{" "}
							Farm Insurance
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#tab4" data-toggle="tab">
							<i class="material-icons" style={{ padding: "0" }}>
								drive_eta
							</i>{" "}
							Auto Insurance
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Services;
