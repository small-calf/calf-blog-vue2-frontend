const path = require('path');
function resolve(dir) {
	return path.join(__dirname, dir);
}

module.exports = {
	transpileDependencies: ['vuetify'],
	productionSourceMap: false,
	chainWebpack: (config) => {
		config.resolve.alias
			.set('@', resolve('src'))
			.set('@api', resolve('src/api'))
			.set('@assets', resolve('src/assets'))
			.set('@comp', resolve('src/components'))
			.set('@views', resolve('src/views'));
	},

	devServer: {
		port: 3000,
		// hot: true,
		// disableHostCheck: true,
		// overlay: {
		//     warnings: false,
		//     errors: true,
		// },
		// headers: {
		//     'Access-Control-Allow-Origin': '*',
		// },
		proxy: {
			/* '/api': {
        target: 'https://mock.ihx.me/mock/5baf3052f7da7e07e04a5116/antd-pro', //mock API接口系统
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '/jeecg-boot': ''  //默认所有请求都加了jeecg-boot前缀，需要去掉
        }
      },*/
			/* 注意：jeecgboot前端做了改造，此处不需要配置跨域和后台接口（只需要改.env相关配置文件即可）
          issues/3462 很多人此处做了配置，导致刷新前端404问题，请一定注意*/
			'/jeecg-boot': {
				target: 'http://localhost:8080',
				ws: false,
				changeOrigin: true,
			},
		},
	},

	lintOnSave: undefined,
};
