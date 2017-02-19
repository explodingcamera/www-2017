/* eslint-disable */

import React from 'react';
import {Route, IndexRoute, Router, browserHistory} from 'react-router/es';

import App from './../containers/app';
import Home from 'pages/home.js'

function errorLoading(err) {
	console.error('Dynamic page loading failed', err);
}

function loadRoute(cb) {
	return module => cb(null, module.default);
}

export default () => <Router history={browserHistory}>
	<Route component={App}>
		<Route path="/" component={Home}/>
		<Route path="photography" getComponent={(location, cb) => {
				System.import(`./../pages/photography`).then(loadRoute(cb));
			}}
		/>
		<Route path="projects" getComponent={(location, cb) => {
				System.import(`./../pages/projects`).then(loadRoute(cb));
			}}
		/>
	</Route>
	{/* <Route path="marsmission" getComponent={(location, cb) => {
			System.import(`./../pages/marsmission`).then(loadRoute(cb));
		}}
	/> */}
</Router>;
