<template>
	<v-app>
		<v-app-bar app color="primary" dark>
			<Header></Header>
		</v-app-bar>

		<v-main>
			<!-- 给应用提供合适的间距 -->
			<v-container fluid>
				<h1>哈哈</h1>
				嘿嘿
				<!-- 如果使用 vue-router -->
				<router-view></router-view>
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
import Header from '@comp/Header.vue';
export default {
	name: 'App',
	components: {
		Header,
	},
	data: () => ({
		//
	}),
};
</script>
