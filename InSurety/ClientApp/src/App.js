import React from 'react';
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { fetchCurrentUser } from "./actions/users";

// import { IntlProvider } from "react-intl";
// import translations from "./i18n/translations";

import Routes from "./routes";

class App extends React.Component {

	/*componentDidMount() {
		if (this.props.isAuthenticated) {
			this.props.fetchCurrentUser();
		}
	}*/

	render() {
		return (
			<div className="App">
				<Routes />
			</div>
		);
	}
}

export default App;

/* App.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	fetchCurrentUser: PropTypes.func.isRequired
}; 

function mapStateToProps(state) {
	return {
		user: state.user,
		isAuthenticated: !!state.user.email,
		loaded: state.user.loaded,
		lang: state.locale.lang
	};
}

export default connect(mapStateToProps, {
	fetchCurrentUser
})(App); */
