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
				primary: colors.yellow.base,
				secondary: colors.amber.base,
				accent: colors.blue.base,
				error: colors.indigo.base,
				warning: colors.deep,
				info: colors.purple.base,
				success: colors.teal.base,
			},
			primary: colors.blue.lighten3,
		},
	},
});
