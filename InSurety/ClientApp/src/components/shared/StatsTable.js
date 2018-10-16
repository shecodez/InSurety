import React from "react";

class StatsTable extends React.Component {
	render() {
		const { data, size } = this.props;

		return (
			<div className="stats-table">
				<table className="table">
					<thead>
						<tr>
							<th>Date Submited</th>
							<th>Count</th>
						</tr>
					</thead>
					<tbody>
						{data.slice(0, size).map(claim => (
							<tr key={claim.DateSubmitted}>
								<td>{claim.DateSubmitted}</td>
								<td>{claim.Count}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
}

export default StatsTable;
