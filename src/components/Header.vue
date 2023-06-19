<template>
	<v-container class="lighten-5">
		<v-row justify="center" align="center">
			<v-col v-for="n in title" :key="n" align="center">
				{{ n }}
			</v-col>
			<v-col cols="2">
				<v-toolbar dense floating rounded>
					<v-text-field
						hide-details
						prepend-icon="mdi-magnify"
						single-line
						autofocus="true"
						clearable
					></v-text-field>
				</v-toolbar>
			</v-col>
			<v-col cols="2">
				<v-btn icon>
					<v-icon color="#fff">mdi-pencil</v-icon>
				</v-btn>
			</v-col>
			<v-col cols="1">
				<v-btn icon>
					<v-icon color="#fff">mdi-message-text</v-icon>
				</v-btn>
			</v-col>
			<v-col cols="1">
				<v-btn icon>
					<v-avatar>
						<img
							src="https://cdn.vuetifyjs.com/images/john.jpg"
							alt="John"
						/>
					</v-avatar>
				</v-btn>
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
