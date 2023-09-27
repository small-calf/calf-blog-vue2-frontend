import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import tinymce from 'tinymce';
import VueTinymce from '@packy-tang/vue-tinymce';

Vue.prototype.$tinymce = tinymce; // 将全局tinymce对象指向给Vue作用域下
Vue.use(VueTinymce); // 安装vue的tinymce组件

Vue.config.productionTip = false;
tinymce.init({
	selector: '#tinydemo',
	language: 'zh_CN', //注意大小
});



new Vue({
	router,
	store,
	vuetify,
	render: (h) => h(App),
}).$mount('#app');
