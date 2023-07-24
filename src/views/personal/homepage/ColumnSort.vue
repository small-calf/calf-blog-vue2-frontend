<template>
	<v-row>
		<v-col cols="8">
			<v-card color="basil">
				<v-card-title class="text-center justify-center py-6">
					<h1 class="font-weight-bold text-h2 basil--text">BASiL</h1>
				</v-card-title>

				<v-tabs
					v-model="tab"
					background-color="transparent"
					color="basil"
					grow
				>
					<v-tab v-for="item in itemss" :key="item">
						{{ item }}
					</v-tab>
				</v-tabs>

				<v-tabs-items v-model="tab">
					<v-tab-item v-for="item in items" :key="item.avatar">
						<v-card color="basil" flat>
							<v-select
								:items="itemss"
								label="分类选择"
							></v-select>
							<v-card-text>{{ text }}</v-card-text>
						</v-card>
					</v-tab-item>
				</v-tabs-items>
			</v-card>
		</v-col>
		<v-col cols="4">
			<v-row>
				<v-card>
					<v-list two-line>
						<template v-for="(item, index) in items.slice(0, 6)">
							<v-subheader
								v-if="item.header"
								:key="item.header"
								light
							>
								<template #default>
									<v-row class="d-flex">
										<v-col>{{ item.header }}</v-col>
									</v-row>
								</template>
							</v-subheader>
							<v-divider
								v-else-if="item.divider"
								:key="index"
								:inset="item.inset"
							></v-divider>
							<v-list-item v-else :key="item.title">
								<v-list-item-avatar>
									<img :src="item.avatar" />
								</v-list-item-avatar>
								<v-list-item-content>
									<v-list-item-title>
										{{ item.title }}
									</v-list-item-title>
									<v-list-item-subtitle>
										{{ item.subtitle }}
									</v-list-item-subtitle>
								</v-list-item-content>
							</v-list-item>
						</template>
					</v-list>
				</v-card>
			</v-row>
			<v-row class="mt-10">
				<v-card>
					<v-list two-line>
						<template v-for="(item, index) in items.slice(0, 6)">
							<v-subheader
								v-if="item.header"
								:key="item.header"
								light
							>
								<template #default>
									<v-row class="d-flex">
										<v-col>{{ item.header }}</v-col>
									</v-row>
								</template>
							</v-subheader>
							<v-divider
								v-else-if="item.divider"
								:key="index"
								:inset="item.inset"
							></v-divider>
							<v-list-item v-else :key="item.title">
								<v-list-item-avatar>
									<img :src="item.avatar" />
								</v-list-item-avatar>
								<v-list-item-content>
									<v-list-item-title>
										{{ item.title }}
									</v-list-item-title>
									<v-list-item-subtitle>
										{{ item.subtitle }}
									</v-list-item-subtitle>
								</v-list-item-content>
							</v-list-item>
						</template>
					</v-list>
				</v-card>
			</v-row>
		</v-col>
	</v-row>
</template>
<script>
export default {
	data() {
		return {
			tab: null,
			itemss: ['Appetizers', 'Entrees', 'Deserts', 'Cocktails'],
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			autorenew: 'mdi-autorenew',
			items: [
				{ header: '作者推荐' },
				{
					avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
					title: 'Brunch this weekend?',
					subtitle: `<span class="font-weight-bold">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
				},
				{ divider: true, inset: true },
				{
					avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
					title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
					subtitle: `<span class="font-weight-bold">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
				},
				{ divider: true, inset: true },
				{
					avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
					title: 'Oui oui',
					subtitle:
						'<span class="font-weight-bold">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
				},
			],
		};
	},
};
</script>
<style>
/* Helper classes */
.basil {
	background-color: #fffbe6 !important;
}
.basil--text {
	color: #356859 !important;
}
</style>
