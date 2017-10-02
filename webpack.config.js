/*
 *webpack module so we can do some customization here
 * */

const path = require('path');
module.exports = {
	entry: './index.js',
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
	}
};
