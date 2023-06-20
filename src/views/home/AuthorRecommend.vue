<template>
	<v-row>
		<v-col cols="12">
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
									<v-col cols="10">{{ item.header }}</v-col>
									<v-col class="justify-end">
										<v-icon dense light>
											{{ autorenew }} </v-icon
										>换一批
									</v-col>
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
							<v-list-item-action>
								<v-tooltip right>
									<template #activator="{ on, attrs }">
										<v-btn
											class="mx-2"
											x-small
											fab
											dark
											color="primary"
											v-bind="attrs"
											v-on="on"
										>
											<v-icon dark> mdi-plus </v-icon>
										</v-btn>
									</template>
									<span>关注</span>
								</v-tooltip>
							</v-list-item-action>
						</v-list-item>
					</template>
				</v-list>
			</v-card>
		</v-col>
	</v-row>
</template>

<script>
export default {
	data: () => ({
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
	}),
};
</script>

<style></style>
