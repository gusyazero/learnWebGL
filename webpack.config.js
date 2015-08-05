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
	resolve: {
		root:[path.join(__dirname, 'bower_components')],
		extensions:['', '.webpack.js', 'web.js', '.js', '.ts'],
		modulesDirectories: ["web_modules", "node_modules", "bower_components"],
		alias:{}		// @see package.json "browser"
	},
	plugins: [
		new webpack.ResolverPlugin(
			new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
		),
		new webpack.ProvidePlugin({
			THREE: "three"
		})
	],
	module: {
		loaders: [
			{ test: /\.ts$/, loader: 'awesome-typescript-loader?emitRequireType=false' }
			//{ test: /\.ts$/, loader: 'awesome-typescript-loader' }
			//{ test: /zepto\.js$/, loader: 'exports?Zepto' },
		]
	}
};
