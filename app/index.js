import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import 'react-image-gallery/build/image-gallery.css';
import 'css/main.css';

import Routes from './pages/routes';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const AppContainer = document.createElement('div');
AppContainer.id = 'app';
document.body.appendChild(AppContainer);

ReactDOM.render(
	<Routes/>,
	AppContainer
);
