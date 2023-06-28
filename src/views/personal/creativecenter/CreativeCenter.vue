<template>
	<v-container>
		<App-main>
			<template #default>
				<v-card outlined>
					<v-subheader>创作活动</v-subheader>
					<v-carousel
						cycle
						height="200"
						hide-delimiter-background
						show-arrows-on-hover
						class="px-3"
					>
						<v-carousel-item v-for="(slide, i) in slides" :key="i">
							<v-sheet :color="colors[i]" height="100%">
								<v-row
									class="fill-height"
									align="center"
									justify="center"
								>
									<div class="text-h2">{{ slide }} Slide</div>
								</v-row>
							</v-sheet>
						</v-carousel-item>
					</v-carousel>
				</v-card>
				<v-card class="mt-5"> 123</v-card>
			</template>
		</App-main>
	</v-container>
</template>

<script>
import AppMain from '../AppMain.vue';
export default {
	components: {
		AppMain,
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
	}),
};
</script>

<style></style>
