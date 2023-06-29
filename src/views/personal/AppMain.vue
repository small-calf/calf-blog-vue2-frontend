<template>
	<v-container>
		<v-row justify="center">
			<v-col cols="3">
				<v-card height="1000">
					<v-col>
						<v-avatar class="ma-2" size="60">
							<img
								large
								alt="Avatar"
								src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
							/>
						</v-avatar>
						<span class="mx-2 mt-2 text-h4 font-weight-bold">
							calf
						</span>
					</v-col>
					<v-divider></v-divider>
					<v-col>
						<v-btn
							block
							rounded
							color="primary"
							class="my-5 text-h6"
							height="50"
							dark
							@click="writeBlog"
						>
							浅浅说说
							<v-icon class="mx-2" size="40">
								mdi-credit-card-edit
							</v-icon>
						</v-btn>
					</v-col>
					<v-divider></v-divider>
					<v-col>
						<v-treeview
							class="text-subtitle-1"
							v-model="open"
							open-all
							activatable
							:items="items"
							@update:active="handleNodeSelection"
						></v-treeview>
					</v-col>
				</v-card>
			</v-col>
			<v-col cols="9">
				<slot></slot>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	components: {},
	data: () => ({
		value: '',
		active: [],
		avatar: null,
		open: [],
		items: [
			{
				id: '/appMain/creativeCenter',
				name: '首页',
			},
			{
				id: 'creativeCenter/articleManage11',
				name: '内容管理',
				children: [
					{ id: '/appMain/articleManage', name: '文章管理' },
					{ id: 4, name: '专栏管理' },
				],
			},
			{
				id: 5,
				name: '数据中心',
				children: [
					{ id: 6, name: '作品数据' },
					{ id: 7, name: '关注者数据' },
					// { id: 8, name: 'Tutorial : html' },
				],
			},
			{
				id: 9,
				name: '帮助中心',
			},
			{
				id: 10,
				name: '常见问题',
			},
		],
	}),
	methods: {
		writeBlog() {
			this.$router.push('/writeBlog');
		},
		handleNodeSelection(selected) {
			// 处理选中节点的逻辑
			this.$router.push(selected[0]);
			console.log('选中的节点：', selected[0]);
		},
		fetchUsers(item) {
			console.log(this.active);
		},
	},
};
</script>

<style lang="scss" scoped></style>
