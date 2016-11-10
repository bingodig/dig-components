
const path = require('path');

module.exports = {

	//路径
	PATHS: {
	    BUILD_PATH: _('./dist'),      						//打包路径
	    APP_PATH: _('./frontend'),      					//调用组件路径
	    TEMPLATE_PATH: _('./frontend/template.html'),  		//模板路径
	    ENTRY_PATH: _('./frontend/app.jsx')                 //入口文件
	},

	//控制
	control: {
      //是否开启按需加载功能[已失效]
      //proxy: false,
      //是否开启分离css功能[已失效]
      //extractcss: true,	//生产环境[分离css] 开发环境[内嵌css]
      //是否开启压缩代码功能[已失效]
      //uglify: true,		//生产环境[压缩] 开发环境[不压缩] 压缩后js/css相应生成文件为x.min.js/x.min.css
	},


    //服务器配置[开发环境]
    devServer: {
    	port: 4000, 			//监听的Server端口
    	noInfo: false,			//是否关闭日志
    	stats: {colors: true}	
    },

	//获取命令行NODE_ENV环境变量
	NODE_ENV: process.env.NODE_ENV || "development",	//production || development,默认为development

	//判断当前是否处于开发状态下
	__DEV__: (process.env.NODE_ENV || "development") === "development"
};

//获取绝对路径下文件
function _(p){
	return path.resolve(__dirname,p);
}