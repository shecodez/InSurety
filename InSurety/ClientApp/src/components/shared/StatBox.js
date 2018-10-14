import React from "react";
import CountUp from "react-countup";

const StatBox = props => (
	<div className="stat-box text-center">
		<i
			class="material-icons"
			style={{ fontSize: "48px", color: props.color }}
		>
			{props.icon}
		</i>
		<div className="content">
			<h2
				className="number"
				style={{ color: "white", fontWeight: "800" }}
			>
				<CountUp
					start={0}
					end={props.number}
					duration={2.75}
					useEasing
					useGrouping
					separator=","
				/>
			</h2>
			<h3 className="title" style={{ color: "white", margin: "0" }}>
				{props.title || "???"}
			</h3>
		</div>
	</div>
);

export default StatBox;
