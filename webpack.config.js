/*
 *webpack module so we can do some customization here
 * */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: './client/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: './client/index.js',
	output: {
		path: path.resolve('dist'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			//test for js files
			{test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            //test for jsx files...these two lines can be combined into one regex above
			{test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/}
		]
	},
	//line needed for html-webpack-plugin
	plugins: [HtmlWebpackPluginConfig]

};
