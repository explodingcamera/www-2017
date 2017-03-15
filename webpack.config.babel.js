import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import SriPlugin from 'webpack-subresource-integrity';
import HtmlWebpackHarddiskPlugin from 'html-webpack-harddisk-plugin';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import ManifestPlugin from 'webpack-manifest-plugin';
import OfflinePlugin from 'offline-plugin';

const prod = process.env.NODE_ENV === 'production';

const plugins = [
	new webpack.optimize.CommonsChunkPlugin({
		name: 'vendor',
		minChunks: Infinity
	}),
	new HtmlWebpackPlugin({
		template: 'app/index.ejs',
		alwaysWriteToDisk: true,
		hash: false,
		title: 'explodingcamera',
		filename: `${__dirname}/build/index.html`
	}),
	new HtmlWebpackHarddiskPlugin(),
	new ManifestPlugin(),
	new OfflinePlugin({
		external: ['bg1.webm']
	})
];

if (prod) {
	plugins.push(...[
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin(),
		new ExtractTextPlugin({filename: '[name].[hash].css', allChunks: true}),
		new SriPlugin({
			hashFuncNames: ['sha256', 'sha384', 'sha512'],
			enabled: true
		})
	]);
}

export default {
	entry: {
		js: ['./app'],
		vendor: [
			'babel-polyfill', 'react', 'react-dom'
		]
	},
	output: {
		path: path.join(__dirname, 'build'),
		filename: '[name].[chunkhash].js',
		crossOriginLoading: 'anonymous'
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
			loader:	prod ? ExtractTextPlugin.extract({
				fallback: 'style-loader!css-loader?modules&importLoaders=1!postcss-loader',
				use: 'css-loader?modules&importLoaders=1!postcss-loader'
			}) : 'style-loader!css-loader?modules&importLoaders=1&localIdentName="[path][name]__[local]--[hash:base64:5]"!postcss-loader'
		}, {
			test: /\.css$/,
			include: [/react-image-gallery/],
			loader:	prod ? ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: 'css-loader?importLoaders=1!postcss-loader'
			}) : 'style-loader!css-loader?importLoaders=1&localIdentName="[path][name]__[local]--[hash:base64:5]"!postcss-loader'
		}]
	},
	devtool: 'inline-source-map',
	devServer: {
		inline: true,
		contentBase: path.join(__dirname, 'build'),
		compress: true,
		port: 8081,
		historyApiFallback: true,
		clientLogLevel: 'warning'
	},
	plugins,
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
