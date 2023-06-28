<template>
	<v-container>
		<App-main>
			<template #default>
				<v-card outlined>
					<v-subheader>创作活动</v-subheader>
				</v-card>
				<v-card class="mt-5"> 45677777</v-card>
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
