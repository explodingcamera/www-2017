import React from 'react';
import {BrowserRouter} from 'react-router-dom';

export default class Router extends React.Component {
	render() {
		return (
			<BrowserRouter>
				{this.props.children}
			</BrowserRouter>
		);
	}
}

Router.propTypes = {
	children: React.PropTypes.element.isRequired
};
