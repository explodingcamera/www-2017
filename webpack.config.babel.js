import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlWebpackHarddiskPlugin from 'html-webpack-harddisk-plugin';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import combineLoaders from 'webpack-combine-loaders';

export default {
	entry: {
		js: ['./app'],
		vendor: [
			'babel-polyfill', 'react', 'react-dom'
		]
	},
	output: {
		path: './build',
		filename: '[name].[chunkhash].js'
	},
	bail: true,
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			include: [
				path.resolve(__dirname, './app'),
				path.resolve(__dirname, './node_modules/react-router')
			],
			enforce: 'pre',
			loader: 'babel-loader',
			options: {
				presets: [['env', {
					targets: {
						chrome: 56,
						firefox: 45,
						edge: 14
					},
					modules: false
				}], 'react', 'stage-0'],
				plugins: ['transform-decorators-legacy']
			}
		},
		{
			test: /\.css$/,
			exclude: [/react-image-gallery/],
			loader:	ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: 'css-loader?modules&importLoaders=1&localIdentName="[path][name]__[local]--[hash:base64:5]"!postcss-loader'
			})
		}, {
			test: /\.css$/,
			include: [/react-image-gallery/],
			loader:	ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: 'css-loader?importLoaders=1!postcss-loader'
			})
		}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': '"production"'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: Infinity
			// filename: 'vendor.[chunkhash].js'
		}),
		new HtmlWebpackHarddiskPlugin(),
		new HtmlWebpackPlugin({
			alwaysWriteToDisk: true,
			hash: false,
			title: 'explodingcamera.com',
			filename: `${__dirname}/build/index.html`
		}),
		// new webpack.optimize.UglifyJsPlugin(),
		new ExtractTextPlugin({filename: '[name].[chunkhash].css', allChunks: true})
	],
	externals: {
		parallax: 'Parallax'
	},
	resolve: {
		modules: [
			'node_modules',
			path.resolve(__dirname, 'app')
		],
		extensions: ['.js', '.json', '.jsx', '.css']
	},
	// devtool: 'source-map',
	context: __dirname,
	target: 'web'
};
