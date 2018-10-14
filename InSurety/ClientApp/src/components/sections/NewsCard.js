import React from "react";

const NewsCard = props => {
	return (
		<div className="card">
			<div className="card-body">
				<div class="card-header card-header-info">
					<img
						class="card-img-top"
						src="https://via.placeholder.com/550x350"
						alt="Card image cap"
					/>
				</div>
				<h4 class="card-title">{props.title}</h4>
				<h6 class="card-subtitle mb-2 text-muted">
					By: {props.author}
				</h6>
				<p class="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the card's content...
				</p>
				<small>{props.date}</small>
			</div>
		</div>
	);
};

export default NewsCard;
