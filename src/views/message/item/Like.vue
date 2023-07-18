<template>
	<Message>
		<template>
			<v-card>
				<v-list three-line>
					<template v-for="(item, index) in items">
						<v-subheader v-if="item.header" :key="item.header">{{
							item.header
						}}</v-subheader>

						<v-divider
							v-else-if="item.divider"
							:key="index"
							:inset="item.inset"
						></v-divider>

						<v-list-item v-else :key="item.title" class="ma-2">
							<!-- <v-list-item-avatar> -->
							<v-img
								:src="item.avatar"
								max-height="150"
								max-width="250"
							></v-img>
							<!-- </v-list-item-avatar> -->

							<v-list-item-content class="mx-4">
								<v-list-item-title>{{
									item.title
								}}</v-list-item-title>
								<v-list-item-subtitle>{{
									item.subtitle
								}}</v-list-item-subtitle>
								<v-list-item-subtitle
									>{{ item.time }}&mdash; 文章数：{{
										item.articleCount
									}}</v-list-item-subtitle
								>
							</v-list-item-content>
							<v-menu bottom right>
								<template v-slot:activator="{ on, attrs }">
									<v-btn icon v-bind="attrs" v-on="on">
										<v-icon>mdi-dots-horizontal</v-icon>
									</v-btn>
								</template>

								<v-list>
									<v-list-item
										v-for="(item, i) in menuItems"
										:key="i"
									>
										<v-list-item-title>{{
											item.title
										}}</v-list-item-title>
									</v-list-item>
								</v-list>
							</v-menu>
						</v-list-item>
					</template>
				</v-list>
			</v-card>
		</template>
	</Message>
</template>

<script>
import Message from '../Message.vue';
export default {
	components: {
		Message,
	},
	data() {
		return {
			items: [
				{
					avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
					title: 'Brunch this weekend?',
					subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
					time: '2022-02-02 12:08:32',
					articleCount: 0,
				},
				{ divider: true, inset: true },
				{
					avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
					title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
					subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
				},
				{ divider: true, inset: true },
				{
					avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
					title: 'Oui oui',
					subtitle:
						'<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
				},
				{ divider: true, inset: true },
				{
					avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
					title: 'Birthday gift',
					subtitle:
						'<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
				},
				{ divider: true, inset: true },
				{
					avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
					title: 'Recipe to try',
					subtitle:
						'<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
				},
			],
			menuItems: [
				{ title: 'Click Me' },
				{ title: 'Click Me' },
				{ title: 'Click Me' },
				{ title: 'Click Me 2' },
			],
		};
	},
};
</script>

<style></style>
