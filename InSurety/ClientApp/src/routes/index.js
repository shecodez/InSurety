import React from "react";
import { Route, Switch } from "react-router-dom";
// import { withRouter } from "react-router";

//import PrivateRoute from "./PrivateRoute";
//import GuestRoute from "./GuestRoute";

import HomePage from "../components/pages/HomePage";

import LoginPage from "../components/pages/LoginPage";
//import RegisterPage from "../components/pages/RegisterPage";

//import NotFound from "../components/pages/error/NotFound";

import Counter from "../components/Counter";
import FetchData from "../components/FetchData";

export default () => (
	<Switch>
		<Route exact path="/" component={HomePage} />
		<Route exact path="/login" component={LoginPage} />
		<Route path="/counter" component={Counter} />
		<Route path="/fetchdata/:startDateIndex?" component={FetchData} />
	</Switch>
);
