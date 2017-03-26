import React from 'react';
import {Card, CardMedia, CardTitle, CardText, CardActions} from 'react-toolbox/lib/card';
import {Button} from 'react-toolbox/lib/button';
import {Row, Col} from 'react-flexbox-grid';

import css from 'css/projects.css';

const cardData = [{
	title: 'LiveCount.pro',
	subtitle: '2017 - now',
	img: 'https://i.imgur.com/ynb2dUZ.png',
	text: `LiveCount is a realtime follower/subscriber counter with support for multiple social networks and multiple channels at the same time. I created this just as a quick project over the course of one weekend.`,
	actions: <div>
		<a rel="noopener noreferrer" target="_blank" href="https://livecount.pro">
			<Button label="livecount.pro"/>
		</a>
		<a rel="noopener noreferrer" target="_blank" href="https://github.com/explodingcamera/livecount.pro">
			<Button label="Github"/>
		</a>
	</div>
}, {
	title: 'Musiqpad (discontinued)',
	subtitle: '2016',
	img: 'https://explodingcamera.xyz/i/chrome_2017-01-08_18-32-45.jpg',
	text: `Musiqpad was/is a social-music software platform for users to host their own rooms and enjoy music together with others. Our Team sadly doesn't have enought time for it anymore but I hope we can continue to work on it in the future.`,
	actions: <div>
		<a rel="noopener noreferrer" target="_blank" href="https://github.com/musiqpad">
			<Button label="Github"/>
		</a>
		<a rel="noopener noreferrer" target="_blank" href="https://musiqpad.com">
			<Button label="Project Website"/>
		</a>
	</div>
}, {
	title: 'Multitube (discontinued)',
	subtitle: '2014',
	img: 'https://explodingcamera.xyz/i/chrome_2017-01-11_15-29-29.png',
	text:
`My first Node.Js Project, Multitube is a website for viewing two youtube videos side-by-side. I was inspired by youtubemultiplier but their implementation was lacking features and ux was horrible so I build my own site.`,
	actions: <div>
		<a rel="noopener noreferrer" target="_blank" href="https://github.com/explodingcamera-old/multitube">
			<Button label="Github"/>
		</a>
	</div>
}, {
	title: 'Shattered Past (discontinued)',
	subtitle: '2014',
	img: 'https://explodingcamera.xyz/i/chrome_2017-01-11_15-02-49.png',
	text:
`One of my first huge coding projects, the RE-Engine, was supposed to become an easy-to-use text adventure engine with the ability to easily add a huge depth to your game.
Shattered Past was the first game made using it by a friend of mine and me but we sadly never finished it.`
}, {
	title: 'Waterfall.ga (discontinued)',
	subtitle: '2013',
	img: 'https://explodingcamera.xyz/i/chrome_2017-01-11_15-33-49.jpg',
	text:
	`My first website with more than actual plain html, it displays a random waterfall gif everytime you visit it and plays the sound of flowing water. I was inspired by a tv show or game (can't remember) where hackers used a website where they livestreamed waterfalls and hid secret messages in the video to communicate.`
}];

const CardComponent = props => <Col xs={12} sm={12} md={6} lg={4} style={{paddingBottom: 20}}>
	<Card className={css.card}>
		<CardTitle
			className={css.header}
			title={props.title}
			subtitle={props.subtitle}
			/>
		<CardMedia
			aspectRatio="wide"
			image={props.img}
			/>
		<CardText className={css.cardText}>{props.text}</CardText>
		<CardActions>
			{props.actions}
		</CardActions>
	</Card>
</Col>;

CardComponent.propTypes = {
	img: React.PropTypes.string.isRequired,
	title: React.PropTypes.string.isRequired,
	subtitle: React.PropTypes.string,
	text: React.PropTypes.string.isRequired,
	actions: React.PropTypes.element
};

CardComponent.defaultProps = {
	actions: '',
	subtitle: ''
};

const Cards = cardData.map((props, i) => <CardComponent key={i} {...props}/>); // eslint-disable-line react/no-array-index-key

class Projects extends React.Component {
	render() {
		return (
			<Row>
				{Cards}
			</Row>
		);
	}
}
Projects.propTypes = {
};
export default Projects;
