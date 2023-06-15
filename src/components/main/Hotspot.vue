<template>
	<v-card class="mx-auto" max-width="600" tile>
		<v-list shaped>
			<v-subheader>热点</v-subheader>
			<v-list-item-group v-model="selectedItem" color="primary">
				<v-list-item v-for="(item, i) in items" :key="i">
					<v-list-item-icon>
						<v-icon :class="item.class">{{ item.icon }}</v-icon>
					</v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title>
							{{ item.text }}
						</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list-item-group>
		</v-list>
	</v-card>
</template>

<script>
export default {
	data: () => ({
		selectedItem: 1,
		items: [
			{
				text: 'Real-Time',
				icon: 'mdi-numeric-1-box-multiple-outline',
			},
			{
				text: 'Audience',
				icon: 'mdi-numeric-2-box-multiple-outline',
			},
			{
				text: 'Conversions',
				icon: 'mdi-numeric-3-box-multiple-outline',
			},
			{ text: 'Real-Time', icon: 'mdi-numeric-4-box-multiple-outline' },
			{ text: 'Audience', icon: 'mdi-numeric-5-box-multiple-outline' },
			{ text: 'Conversions', icon: 'mdi-numeric-6-box-multiple-outline' },
			{ text: 'Conversions', icon: 'mdi-numeric-7-box-multiple-outline' },
		],
	}),
};
</script>

<style></style>
