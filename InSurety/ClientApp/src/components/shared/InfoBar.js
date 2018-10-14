import React from "react";

const InfoBar = () => (
	<div
		className="info-bar"
		style={{
			position: "absolute",
			zIndex: "99",
			color: "white",
			padding: "5px 0px",
			left: "20px",
			right: "20px"
		}}
	>
		<ul className="list-inline" style={{ display: "inline-block" }}>
			<li className="list-inline-item">
				<i className="fa fa-phone" /> +1(123)456-7890
			</li>
			<li className="list-inline-item">
				<i className="fa fa-envelope-o" /> info@insurety.com
			</li>
		</ul>

		<ul
			className="list-inline"
			style={{ display: "inline-block", float: "right" }}
		>
			<li className="list-inline-item">
				<i className="fa fa-facebook" />
			</li>
			<li className="list-inline-item">
				<i className="fa fa-google-plus" />
			</li>
			<li className="list-inline-item">
				<i className="fa fa-twitter" />
			</li>
			<li className="list-inline-item">
				<i className="fa fa-search" />
			</li>
		</ul>
	</div>
);

export default InfoBar;
