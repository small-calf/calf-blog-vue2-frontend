import Vue from 'vue';
import VueRouter from 'vue-router';
import Content from '@views/home/Content.vue';

Vue.use(VueRouter);

// 获取原型对象push函数
const originalPush = VueRouter.prototype.push;

// 修改原型对象中的push函数
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch((err) => err);
};

const routes = [
	{
		path: '/',
		name: 'Content',
		component: Content,
	},
	{
		path: '/details',
		name: 'Details',
		component: () => import('@views/details/Details.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
