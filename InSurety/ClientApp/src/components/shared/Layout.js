import React from "react";
import { Col, Grid, Row } from "react-bootstrap";

import Header from "./Header";
import Footer from "./Footer";

export default props => (
	<div>
		<Header />
		<Grid fluid>
			<Row>
				<Col sm={12}>{props.children}</Col>
			</Row>
		</Grid>
		<Footer />
	</div>
);
