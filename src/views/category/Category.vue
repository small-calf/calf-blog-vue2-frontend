<template>
	<v-container>
		<v-row>
			<v-col cols="2">
				<v-list shaped>
					<v-subheader>专栏分类</v-subheader>
					<v-list-item-group v-model="selectedItem" color="primary">
						<v-list-item v-for="(item, i) in items" :key="i">
							<v-list-item-icon>
								<v-icon>{{ item.icon }}</v-icon>
							</v-list-item-icon>
							<v-list-item-content>
								<v-list-item-title>
									{{ item.text }}
								</v-list-item-title>
							</v-list-item-content>
						</v-list-item>
					</v-list-item-group>
				</v-list>
			</v-col>
			<v-col>
				<v-col>
					<List-item></List-item>
				</v-col>
			</v-col>
		</v-row>
	</v-container>
</template>
<script>
import ListItem from '@views/home/ListItem.vue';
export default {
	components: {
		ListItem,
	},
	data: () => ({
		selectedItem: 1,
		items: [
			{ text: '前端', icon: 'mdi-clock' },
			{ text: '后端', icon: 'mdi-account' },
			{ text: 'Java', icon: 'mdi-flag' },
			{ text: 'PHP', icon: 'mdi-flag' },
		],
	}),
};
</script>
