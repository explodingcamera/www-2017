import React from 'react';
import css from 'css/app.css';
import 'parallax/index';

import Navbar from 'components/navbar';

class App extends React.Component {
	componentDidMount() {
		const scene = document.getElementById('scene');
		const parallax = new window.Parallax(scene, {
		});
		parallax.enable();
	}
	render() {
		// let currentPage = JSON.stringify(this.props.location.pathname).replace(/"|\//g, '');
		// currentPage = currentPage ? currentPage : 'home';
		return (
			<div>
				<ul id="scene" className={`${css.scene}`}>
					<li className="layer" data-depth="0.3">
						{/* <div className={`${css.background}`}/> */}
						<div className={css.backgroundVideo}>
							<video autoPlay loop muted src="/bg1.webm"/>
						</div>
					</li>
				</ul>
				<div className={css.app}>
					{/* <div className={`${css.container} ${css.light}`}> */}
					<Navbar/>
					<div className={css.content}>
						{this.props.children}
					</div>
					{/* </div> */}
				</div>
			</div>
		);
	}
}
App.propTypes = {
	children: React.PropTypes.element
	// location: React.PropTypes.shape({
	// 	pathname: React.PropTypes.string
	// })
};
export default App;
