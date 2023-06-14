<template>
	<v-container class="lighten-5">
		<v-row justify="center">
			<v-col v-for="n in title" :key="n" class="pa-2">
				{{ n }}
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	data() {
		return {
			title: ['首页', '分类', '热点', '问答', '关注'],
		};
	},
};
</script>

<style lang="scss" scoped></style>
