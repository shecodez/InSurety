import React from "react";

class GetAQuote extends React.Component {
	render() {
		return (
			<form class="form" method="" action="">
				<div class="card-body">
					<div class="form-group bmd-form-group">
						<div class="input-group">
							<input
								type="text"
								class="form-control"
								placeholder="Zip Code"
							/>
						</div>
					</div>

					<div class="form-group bmd-form-group">
						<label for="exampleFormControlSelect1">
							Select Insurance Coverage...
						</label>
						<select
							className="form-control selectpicker"
							data-style="btn btn-link"
							id="formControlSelect"
						>
							<option>Home</option>
							<option>Life</option>
							<option>Farm</option>
							<option>Auto</option>
						</select>
					</div>
				</div>
			</form>
		);
	}
}

export default GetAQuote;
