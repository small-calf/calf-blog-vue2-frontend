<template>
	<v-container>
		<v-card outlined>
			<v-subheader>消息中心</v-subheader>
			<v-divider></v-divider>
			<v-tabs class="sort px-2">
				<v-tab
					class="num"
					v-for="item in articleDataSort"
					:key="item.name"
					:to="item.path"
				>
					{{ item.name }} （{{ item.count }}）
				</v-tab>
			</v-tabs>
			<slot></slot>
		</v-card>
	</v-container>
</template>

<script>
export default {
	data: () => ({
		//文章数据分类
		articleDataSort: [
			{
				name: '评论',
				count: 0,
				path: '/comment',
			},
			{
				name: '点赞',
				count: 0,
				path: '/like',
			},
			{
				name: '收藏',
				count: 0,
				path: '/collect',
			},
			{
				name: '新增粉丝',
				count: 0,
				path: '/addFans',
			},
			{
				name: '私信',
				count: 0,
				path: '/letter',
			},
			{
				name: '系统通知',
				count: 0,
				path: '/sysNotify',
			},
		],

		menuItems: [
			{ title: 'Click Me' },
			{ title: 'Click Me' },
			{ title: 'Click Me' },
			{ title: 'Click Me 2' },
		],
	}),
};
</script>

<style lang="scss" scoped></style>
