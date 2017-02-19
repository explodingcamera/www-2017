import React from 'react';
import ImageGallery from 'react-image-gallery';
import css from './../css/photography.css';
import 'react-image-gallery/styles/css/image-gallery.css';

class Navbar extends React.Component {
	render() {
		const images = [
			{
				original: 'https://explodingcamera.xyz/img/6.jpg',
				thumbnail: 'https://explodingcamera.xyz/img/6-thumbnail.jpg'
			},
			{
				original: 'https://explodingcamera.xyz/img/7.jpg',
				thumbnail: 'https://explodingcamera.xyz/img/7-thumbnail.jpg'
			},
			{
				original: 'https://explodingcamera.xyz/img/5.jpg',
				thumbnail: 'https://explodingcamera.xyz/img/5-thumbnail.jpg'
			},
			{
				original: 'https://explodingcamera.xyz/img/8.jpg',
				thumbnail: 'https://explodingcamera.xyz/img/8-thumbnail.jpg'
			},
			{
				original: 'https://explodingcamera.xyz/img/1.jpg',
				thumbnail: 'https://explodingcamera.xyz/img/1-thumbnail.jpg'
			},
			{
				original: 'https://explodingcamera.xyz/img/2.jpg',
				thumbnail: 'https://explodingcamera.xyz/img/2-thumbnail.jpg'
			},
			{
				original: 'https://explodingcamera.xyz/img/3.jpg',
				thumbnail: 'https://explodingcamera.xyz/img/3-thumbnail.jpg'
			},
			{
				original: 'https://explodingcamera.xyz/img/4.jpg',
				thumbnail: 'https://explodingcamera.xyz/img/4-thumbnail.jpg'
			},
			{
				original: 'https://explodingcamera.xyz/img/9.jpg',
				thumbnail: 'https://explodingcamera.xyz/img/9-thumbnail.jpg'
			},
			{
				original: 'https://explodingcamera.xyz/img/10.jpg',
				thumbnail: 'https://explodingcamera.xyz/img/10-thumbnail.jpg'
			}
		];

		return (
			<div>
				<ImageGallery
					ref={i => this._imageGallery = i}
					items={images}
					showPlayButton={false}
					thumbnailPosition="left"
					onLoad={this.handleImageLoad}
					slideDuration={100}
					/>
			</div>

		);
	}
}
Navbar.propTypes = {
};
export default Navbar;
