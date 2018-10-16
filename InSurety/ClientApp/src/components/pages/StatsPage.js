import React from "react";
import moment from "moment";
//import axios from "axios";

import Claims from "../sections/stats/Claims";

//const API_QUERY = "https://api.insurety.com/stats";

class StatsPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
			isLoading: false,
			error: null
		};
	}

	//componentDidMount(){}

	render() {
		return (
			<div className="stats-page container">
				<div className="row">
					<div className="col-md-8 offset-md-2">
						<Claims />

						<p className="font-italic">
							Data last updated:{" "}
							{moment(Date.now()).format("YYYY-MM-DD")}
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default StatsPage;
