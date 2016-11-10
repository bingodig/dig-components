
const plugins 	  		= require('./webpack/plugins');		//插件配置 
const loaders 	  		= require('./webpack/loaders');
const AppsConfig 		= require('./apps.config');
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

var entry;
if (__DEV__) {

	//开发状态下的默认入口
	entry = [
		'webpack-dev-server/client?http://localhost:'+devServer.port,
		'webpack/hot/only-dev-server',
		PATHS.ENTRY_PATH
	];

}else{

	//配置依赖库性质的编译环境
	entry =	[PATHS.ENTRY_PATH];

}

module.exports = {
	//设置开发时源代码映射工具
	//devtool: __DEV__ ? 'cheap-module-eval-source-map' : 'hidden-source-map',
	devtool: __DEV__ ? 'eval-source-map' : 'eval-source-map',

	entry: entry,

	output: {
		publicPath: '',
		filename: __DEV__ ? '[name].js' : '[name].min.js',
		path: PATHS.BUILD_PATH
	},

	resolve: {
		extensions: ['.js', '.jsx', '.json', '.scss', '.css']
	},

	//配置插件
	plugins: __DEV__ ?
    	//开发环境下所需要的插件
    	[].concat(plugins.commonPlugins).concat(plugins.devPlugins) :
    	//生产环境下需要添加的插件
    	[].concat(plugins.commonPlugins).concat(plugins.prodPlugins),

	module: {
		loaders: [
			loaders.jsx,
			loaders.style,
			loaders.assets,
			loaders.json
		]
	},

    devServer: devServer
};
