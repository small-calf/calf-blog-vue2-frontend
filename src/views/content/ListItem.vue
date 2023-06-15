<template>
	<v-sheet
		:color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
		class="pa-3"
	>
		<v-skeleton-loader class="mx-auto" max-width="300" type="card-avatar">
			<v-img
				width="50"
				height="50"
				src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
			></v-img
		></v-skeleton-loader>
	</v-sheet>
</template>

<script>
export default {
	// Vuetify components provide
	// a theme variable that is
	// used to determine dark
	inject: {
		theme: {
			default: { isDark: false },
		},
	},
};
</script>

<style></style>
