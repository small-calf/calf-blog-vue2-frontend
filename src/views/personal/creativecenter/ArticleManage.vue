<template>
	<v-container>
		<App-main>
			<template #default>
				<v-card outlined>
					<v-subheader>文章管理</v-subheader>
					<v-divider class="mb-2"></v-divider>
					<v-tabs color="primary " left dark background-color="black">
						<v-tab>文章</v-tab>
						<v-tab>草稿箱</v-tab>
						<v-tab-item v-for="n in 3" :key="n" class="ma-2">
							<v-tabs class="sort" v-if="n === 1">
								<v-tab
									class="num"
									v-for="item in articleDataSort"
									:key="item.name"
								>
									{{ item.name }} （{{ item.count }}）
								</v-tab>

								<v-tab-item
									v-for="n in 5"
									:key="n"
									class="ma-2"
								>
									<personal-list></personal-list>
								</v-tab-item>
							</v-tabs>

							<div class="content" v-else>
								<personal-list></personal-list>
							</div>
						</v-tab-item>
					</v-tabs>
				</v-card>
				<!-- <v-card class="mt-5"> 45677777</v-card> -->
			</template>
		</App-main>
	</v-container>
</template>

<script>
import AppMain from '../AppMain.vue';
import PersonalList from '../PersonalList.vue';
export default {
	components: {
		AppMain,
		PersonalList,
	},
	data: () => ({
		colors: [
			'indigo',
			'warning',
			'pink darken-2',
			'red lighten-1',
			'deep-purple accent-4',
		],
		slides: ['First', 'Second', 'Third', 'Fourth', 'Fifth'],
		//文章数据分类
		articleDataSort: [
			{
				name: '全部',
				count: 0,
			},
			{
				name: '已发布',
				count: 0,
			},
			{
				name: '审核中',
				count: 0,
			},
			{
				name: '未通过',
				count: 0,
			},
		],
	}),
};
</script>

<style></style>
