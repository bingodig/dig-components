
const webpack        	= require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const AppsConfig 		= require('../apps.config');
//路径
const PATHS = AppsConfig.PATHS;
//插件
const control = AppsConfig.control;	
//环境变量
const NODE_ENV = AppsConfig.NODE_ENV;	
//是否为开发环境
const __DEV__ = AppsConfig.__DEV__;	


//基于Babel的JS/JSX Loader
exports.jsx = {
	test: /\.(js|jsx)$/,
	exclude: /(node_modules)/,
	loaders: ["babel"]
};


//CSS Loader和CSS分离
exports.style = {
	test: /\.(scss|sass|css)$/,
	loader: __DEV__ ? 
	'style-loader!css-loader!sass-loader' :
	ExtractTextPlugin.extract({
		fallbackLoader: 'style-loader',
		loader: [
			{
				loader: 'css-loader',
				query: {modules: false}
			},'sass-loader'
		]
	})
};


//对于图片与字体文件的导入工具,并且设置默认的dist中存放方式
// inline base64 URLs for <=8k images, direct URLs for the rest
exports.assets = {
	test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif|mp4|webm)(\?\S*)?$/,
	loader: 'url-loader?limit=8192&name=assets/imgs/[hash].[ext]'
};


//对于JSON文件的导入
exports.json = {
  test: /\.json$/,
  loader: 'json'
};