<template>
	<v-container class="lighten-5">
		<v-row justify="center" align="center">
			<v-col>
				<v-tabs background-color="primary" fixed-tabs>
					<v-tab
						v-for="n in title"
						:key="n.name"
						align="center"
						class="text-subtitle-1 font-weight-bold"
						:to="n.path"
					>
						{{ n.name }}
					</v-tab>
				</v-tabs>
			</v-col>
			<v-col cols="2">
				<v-toolbar dense floating rounded>
					<v-text-field
						hide-details
						prepend-icon="mdi-magnify"
						single-line
						:autofocus="true"
						clearable
					></v-text-field>
				</v-toolbar>
			</v-col>
			<v-col cols="2">
				<router-link to="/writeBlog">
					<v-btn icon>
						<v-icon color="#fff">mdi-pencil</v-icon>
					</v-btn>
				</router-link>
			</v-col>
			<v-col cols="1">
				<v-badge
					bordered
					color="red"
					icon="mdi-num-1"
					overlap
					content="123"
				>
					<v-menu open-on-hover offset-y>
						<template v-slot:activator="{ on, attrs }">
							<v-btn v-bind="attrs" v-on="on" icon>
								<v-icon color="#fff">mdi-message-text</v-icon>
							</v-btn>
						</template>
						<v-list>
							<v-list-item
								v-for="(item, index) in message"
								:key="index"
								@click="messageRouterPath(item.path)"
							>
								<v-list-item-title>
									{{ item.title }}</v-list-item-title
								>
							</v-list-item>
						</v-list>
					</v-menu>
				</v-badge>
			</v-col>
			<v-col cols="1">
				<v-menu offset-y>
					<template v-slot:activator="{ on, attrs }">
						<v-btn
							icon
							color="primary"
							dark
							v-bind="attrs"
							v-on="on"
						>
							<v-avatar>
								<img
									src="https://cdn.vuetifyjs.com/images/john.jpg"
									alt="John"
								/>
							</v-avatar>
						</v-btn>
					</template>
					<v-list>
						<v-list-item
							v-for="(item, index) in personCenter"
							:key="index"
							link
							@click="personalRouterPath(item.path)"
						>
							<v-list-item-title>
								{{ item.title }}
							</v-list-item-title>
						</v-list-item>
					</v-list>
				</v-menu>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	data() {
		return {
			title: [
				{ name: '首页', path: '/' },
				{ name: '分类', path: '/category' },
				{ name: '热点', path: '/hotspot' },
				{ name: '问答', path: '/question' },
				{ name: '关注', path: '/follow' },
			],
			message: [
				{ title: '评论', path: '/comment' },
				{ title: '新增粉丝', path: '/addFans' },
				{ title: '点赞', path: '/like' },
				{ title: '收藏', path: '/collect' },
				{ title: '私信', path: '/letter' },
				{ title: '系统通知', path: '/sysNotify' },
			],
			personCenter: [
				{ title: '我的主页', path: '/homePage' },
				{ title: '创作中心', path: '/appMain/creativeCenter' },
				{ title: '退出登录', path: '/logout' },
			],
		};
	},
	methods: {
		//菜单路由跳转
		menuRouterPath(path) {
			this.$router.push(path);
		},
		//个人主页路由跳转
		personalRouterPath(path) {
			this.$router.push(path);
		},
		//消息中心路由跳转
		messageRouterPath(path) {
			this.$router.push(path);
		},
	},
};
</script>

<style lang="scss" scoped></style>
