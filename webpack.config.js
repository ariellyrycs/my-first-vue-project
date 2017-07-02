var webpack = require('webpack');

module.exports = {
	entry: __dirname + '/src/main.js',
	output: {
		path: __dirname + '/dist',
		filename: 'build.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/
			},
			{
				test: /.vue$/,
				loader: 'vue-loader'
			}	
		]
	},
	vue: {
		loaders: {
			js: 'babel'
		}
	},
	plugins: [
		  new webpack.LoaderOptionsPlugin({
			      options: {
				            htmlLoader: {
						           whateverProp: true
								         }
							    }
				         })
	]
};
