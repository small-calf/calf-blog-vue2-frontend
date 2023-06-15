import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/es5/util/colors';
import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader

Vue.use(Vuetify);

export default new Vuetify({
	icons: {
		iconfont: 'mdi', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
	},
	theme: {
		themes: {
			light: {
				//绿色
				primary: '#4caf50',
				secondary: '#8bc34a',
				accent: '#cddc39',
				error: '#ffeb3b',
				warning: '#ffc107',
				info: '#ff9800',
				success: '#ff5722',
			},
			// light: {
			// 	//黄色
			// 	primary: '#ffeb3b',
			// 	secondary: '#ffc107',
			// 	accent: '#ff9800',
			// 	error: '#ff5722',
			// 	warning: '#795548',
			// 	info: '#f44336',
			// 	success: '#e91e63',
			// },
			// light: {
			// 	//浅绿色
			// 	primary: '#cddc39',
			// 	secondary: '#8bc34a',
			// 	accent: '#4caf50',
			// 	error: '#009688',
			// 	warning: '#00bcd4',
			// 	info: '#f44336',
			// 	success: '#e91e63',
			// },
			// light: {
			// 	//淡绿色
			// 	primary: '#8bc34a',
			// 	secondary: '#4caf50',
			// 	accent: '#009688',
			// 	error: '#00bcd4',
			// 	warning: '#f44336',
			// 	info: '#e91e63',
			// 	success: '#9c27b0',
			// },
			dark: {
				primary: '#1976D2',
				secondary: '#424242',
				accent: '#82B1FF',
				error: '#FF5252',
				info: '#2196F3',
				success: '#4CAF50',
				warning: '#FFC107',
			},
			primary: colors.blue.lighten3,
		},
	},
});
