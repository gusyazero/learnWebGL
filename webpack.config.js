var path = require('path');
var webpack = require('webpack');

module.exports = {
	cache: true,
	entry: {
		index: './src/ts/index.ts'
	},
	output: {
		path: path.join(__dirname, "www/js"),
		publicPath: "www/",
		filename: "[name].js",
		chunkFilename: "[chunkhash].js"
	},
	// �ˑ��֌W
	resolve: {
		root:[path.join(__dirname, 'bower_components')],
		extensions:['', '.webpack.js', 'web.js', '.js', '.ts']
	},
	// bower�Ŏ擾�������C�u�����̓ǂݍ��ݗp�v���O�C��
	plugins: [
		new webpack.ResolverPlugin(
			new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
		)
	],
// Add loader for .ts files.
	module: {
		loaders: [
			{ test: /\.ts$/, loader: 'awesome-typescript-loader' }
		]
	}
};
