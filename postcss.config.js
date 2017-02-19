module.exports = {
	plugins: [
		require('postcss-smart-import')(),
		require('postcss-cssnext')({warnForDuplicates: false}),
		require('cssnano')({zindex: false})
	]
};
