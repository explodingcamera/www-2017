import React from 'react';
import {Route, Switch} from 'react-router/es';
import asyncComponent from 'util/asyncComponent';

import App from 'components/app';
import Home from './home';

const routes = (
	<Switch>
		<Route>
			<App>
				<div>
					<Route exact path="/" component={Home}/>
					<Route exact path="/projects" component={asyncComponent(import('pages/projects'))}/>
					<Route exact path="/photography" component={asyncComponent(import('pages/photography'))}/>
				</div>
			</App>
		</Route>
	</Switch>
);

export default routes;
