var path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
	devtool: 'inline-source-map',
	context: path.resolve(__dirname, 'src'),
	entry: path.resolve(__dirname, 'src/app.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.bundle.js'
	},
	target: 'node',
	node: {
	  __dirname: false,
	  __filename: false,
	},
  	externals: [nodeExternals()],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					presets: ['es2015']
				}
			}
		]
	}
};
