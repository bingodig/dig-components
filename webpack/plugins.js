
const webpack        	= require('webpack');
const DefinePlugin 		= require('webpack/lib/DefinePlugin');
const CommonsChunkPlugin= require('webpack/lib/optimize/CommonsChunkPlugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AppsConfig 		= require('../apps.config');
//路径
const PATHS = AppsConfig.PATHS;
//插件
const control = AppsConfig.control;	
//服务器
const devServer = AppsConfig.devServer;	
//环境变量
const NODE_ENV = AppsConfig.NODE_ENV;	
//是否为开发环境
const __DEV__ = AppsConfig.__DEV__;	

//通用插件组
exports.commonPlugins = [

	//自动分割Vendor代码
	//new CommonsChunkPlugin({name: 'vendors', filename: 'vendors.bundle.js', minChunks: Infinity}),

	new HtmlWebpackPlugin({
		//filename: 'index.html',	Default index.html
		template: PATHS.TEMPLATE_PATH
	}),

	//定义环境变量
	new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify(__DEV__ ? 'development' : 'production')
	})
];


//开发环境下使用插件
exports.devPlugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new OpenBrowserPlugin({ url: 'http://localhost:'+devServer.port })
];


//生产环境下使用插件
exports.prodPlugins = [
  //提取出所有的CSS代码
  new ExtractTextPlugin(__DEV__ ? '[name].css' : '[name].min.css'),
  //代码压缩插件
  new webpack.optimize.UglifyJsPlugin({
    compress: {warnings: false}
  })
];



