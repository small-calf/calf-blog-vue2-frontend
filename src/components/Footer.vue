<template>
	<v-footer dark padless fixed app>
		<v-card class="flex" flat>
			<v-card-title class="primary">
				<strong class="subheading">calf 个人博客平台!</strong>

				<v-spacer></v-spacer>

				<v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
					<v-icon size="24px">
						{{ icon }}
					</v-icon>
				</v-btn>
			</v-card-title>

			<v-card-text class="py-2 white--text text-center">
				{{ new Date().getFullYear() }} — <strong>calf</strong>
			</v-card-text>
		</v-card>
	</v-footer>
</template>
<script>
export default {
	data: () => ({
		icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
	}),
};
</script>
<style lang="scss" scoped></style>
