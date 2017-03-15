import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import 'css/main.css';
import 'react-image-gallery/build/image-gallery.css';

import Router from 'pages/Router';
import routes from 'pages/routes';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

require('offline-plugin/runtime').install();

const AppContainer = document.createElement('div');
AppContainer.id = 'app';
document.body.appendChild(AppContainer);

ReactDOM.render(
	<Router>
		{routes}
	</Router>,
	AppContainer
);
