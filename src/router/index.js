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
	{
		path: '/category',
		name: 'Category',
		component: () => import('@views/category/Category.vue'),
	},
	{
		path: '/hotspot',
		name: 'Hotspot',
		component: () => import('@views/hotspot/Hotspot.vue'),
	},
	/**
	 * 关注页
	 */
	{
		path: '/follow',
		name: 'Follow',
		component: () => import('@views/follow/Follow.vue'),
	},
	/**
	 * 关注页详情
	 */
	{
		path: '/followDetail/:userId',
		name: 'FollowDetail',
		component: () => import('@views/follow/detail/FollowDetail.vue'),
	},
	/**
	 * 留言板
	 */
	{
		path: '/speak',
		name: 'Content',
		component: Content,
	},
	{
		path: '/appMain',
		name: 'Index',
		component: () => import('@views/personal/creativecenter/Index.vue'),
		children: [
			{
				path: 'creativeCenter',
				name: 'CreativeCenter',
				component: () =>
					import('@views/personal/creativecenter/CreativeCenter.vue'),
			},
			{
				path: 'articleManage',
				name: 'ArticleManage',
				component: () =>
					import('@views/personal/creativecenter/ArticleManage.vue'),
			},
			{
				path: 'specialColumnManage',
				name: 'SpecialColumnManage',
				component: () =>
					import(
						'@views/personal/creativecenter/SpecialColumnManage.vue'
					),
			},
		],
	},
	{
		path: '/homePage',
		name: 'HomePage',
		component: () => import('@views/personal/HomePage.vue'),
	},
	{
		path: '/writeBlog',
		name: 'WriteBlog',
		component: () => import('@views/writeblog/WriteBlog.vue'),
	},
	/**
	 * 消息中心
	 */
	/**
	 * 评论
	 */
	{
		path: '/comment',
		name: 'Comment',
		component: () => import('@views/message/item/Comment.vue'),
	},
	/**
	 * 新增粉丝
	 */
	{
		path: '/addFans',
		name: 'AddFans',
		component: () => import('@views/message/item/AddFans.vue'),
	},
	/**
	 * 点赞
	 */
	{
		path: '/like',
		name: 'Like',
		component: () => import('@views/message/item/Like.vue'),
	},
	/**
	 * 收藏
	 */
	{
		path: '/collect',
		name: 'Collect',
		component: () => import('@views/message/item/Collect.vue'),
	},
	/**
	 * 私信
	 */
	{
		path: '/letter',
		name: 'Letter',
		component: () => import('@views/message/item/Letter.vue'),
	},
	/**
	 * 私信
	 */
	{
		path: '/sysNotify',
		name: 'SysNotify',
		component: () => import('@views/message/item/SysNotify.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

// // 保存当前路由到localStorage
// function saveCurrentRoute(to) {
//   const currentRoute = router.currentRoute.fullPath;
// 	console.log(to);
//   localStorage.setItem('currentRoute', JSON.stringify(to.path));
// }

// // 从localStorage加载并导航到保存的当前路由
// function loadAndNavigateToSavedRoute() {
//   const savedRoute = localStorage.getItem('currentRoute');
//   if (savedRoute) {
//     router.push(JSON.parse(savedRoute));
//     localStorage.removeItem('currentRoute'); // Remove the saved route after using it
//   }
// }

// router.beforeEach((to, from, next) => {
//   // Save the current route before navigating
//   saveCurrentRoute(to);
//   next();
// });

// // Load and navigate to the saved route after the application is initialized
// router.onReady(() => {
//   loadAndNavigateToSavedRoute();
// });

export default router;
