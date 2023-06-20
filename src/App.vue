<template>
	<v-app>
		<v-app-bar app color="primary">
			<Header></Header>
		</v-app-bar>

		<v-main>
			<!-- 给应用提供合适的间距 -->
			<v-container fluid>
				<router-view></router-view>
			</v-container>
			<Footer></Footer>
		</v-main>
	</v-app>
</template>

<script>
import Header from '@comp/Header.vue';
import Content from '@views/home/Content.vue';
import Footer from '@comp/Footer.vue';
export default {
	name: 'App',
	components: {
		Header,
		Content,
		Footer,
	},
	data: () => ({
		//
	}),
};
</script>
