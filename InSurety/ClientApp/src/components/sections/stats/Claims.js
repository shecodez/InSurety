import React from "react";
// import moment from "moment";
import axios from "axios";
import { claimsData } from "../../../utils/mock";

import StatsTable from "../../shared/StatsTable";

const API_QUERY = "https://api.insurety.com/stats/claims";
class Claims extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			claims: [],
			isLoading: false,
			error: null
		};
	}

	componentDidMount() {
		this.setState({ claims: claimsData });
		// getClaims();
	}

	getClaims = () => {
		this.setState({ isLoading: true });

		//TODO: make sure current data is on top
		axios
			.get(API_QUERY)
			.then(result =>
				this.setState({
					claims: result.data.claims,
					isLoading: false
				})
			)
			.catch(error =>
				this.setState({
					error,
					isLoading: false
				})
			);
	};

	render() {
		const { claims, isLoading, error } = this.state;

		if (error) {
			return <p>{error.message}</p>;
		}

		return isLoading ? this.renderLoading() : this.renderData(claims);
	}

	renderData(claims) {
		if (claims && claims.length) {
			return (
				<div className="claims-table">
					<h2 className="title">Claims</h2>

					<StatsTable data={claims} size={7} />
				</div>
			);
		} else {
			return <div>No claims found.</div>;
		}
	}

	renderLoading() {
		return <div>Loading...</div>;
	}
}

export default Claims;
