<template>
	<v-app>
		<v-app-bar app color="primary">
			<Header></Header>
		</v-app-bar>

		<v-main>
			<!-- 给应用提供合适的间距 -->
			<v-container fluid>
				<Main></Main>
				<Content></Content>
				<!-- 如果使用 vue-router -->
				<router-view></router-view>
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
import Header from '@comp/Header.vue';
import Main from '@comp/main/Main.vue';
import Content from '@views/content/Content.vue';
export default {
	name: 'App',
	components: {
		Header,
		Main,
		Content,
	},
	data: () => ({
		//
	}),
};
</script>
