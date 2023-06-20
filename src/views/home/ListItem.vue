<template>
	<v-container>
		<v-row justify="center">
			<v-subheader>Hot selling item</v-subheader>

			<v-expansion-panels>
				<v-expansion-panel
					v-for="(message, i) in messages"
					:key="i"
					hide-actions
				>
					<v-expansion-panel-header>
						<v-row align="center" class="spacer" no-gutters>
							<v-col cols="4" sm="2" md="1">
								<v-avatar size="36px">
									<img
										v-if="message.avatar"
										alt="Avatar"
										src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
									/>
									<v-icon v-else :color="message.color">
										{{ message.icon }}
									</v-icon>
								</v-avatar>
							</v-col>

							<v-col class="hidden-xs-only" sm="5" md="3">
								<strong v-html="message.name"></strong>
								<span v-if="message.total" class="grey--text">
									&nbsp;({{ message.total }})
								</span>
							</v-col>

							<v-col class="text-no-wrap" cols="5" sm="3">
								<v-chip
									v-if="message.new"
									:color="`${message.color} lighten-4`"
									class="ml-0 mr-2 black--text"
									label
									small
								>
									{{ message.new }} new
								</v-chip>
								<strong v-html="message.title"></strong>
							</v-col>

							<v-col
								v-if="message.excerpt"
								class="grey--text text-truncate hidden-sm-and-down"
							>
								&mdash;
								{{ message.excerpt }}
							</v-col>
						</v-row>
					</v-expansion-panel-header>

					<v-expansion-panel-content>
						<v-divider></v-divider>
						<v-card-text @click="toDetails">{{
							lorem
						}}</v-card-text>
						<v-bottom-navigation
							:value="value"
							color="primary"
							grow
						>
							<v-btn>
								<span>浏览量</span>

								<v-icon>mdi-history</v-icon>
							</v-btn>

							<v-btn>
								<span>点赞</span>

								<v-icon>mdi-heart</v-icon>
							</v-btn>

							<v-btn>
								<span>评论</span>

								<v-icon>mdi-map-marker</v-icon>
							</v-btn>
						</v-bottom-navigation>
					</v-expansion-panel-content>
				</v-expansion-panel>
			</v-expansion-panels>
		</v-row>
		<Pagination></Pagination>
	</v-container>
</template>

<script>
import Pagination from '@comp/page/Pagination.vue';
export default {
	components: {
		Pagination,
	},
	data: () => ({
		value: '',
		messages: [
			{
				avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
				name: 'John Leider',
				title: 'Welcome to Vuetify!',
				excerpt: '2023-06-19 12:00:00',
			},
			{
				color: 'red',
				icon: 'mdi-account-multiple',
				name: 'Social',
				new: 1,
				total: 3,
				title: 'Twitter',
			},
			{
				color: 'teal',
				icon: 'mdi-tag',
				name: 'Promos',
				new: 2,
				total: 4,
				title: 'Shop your way',
				exceprt: 'New deals available, Join Today',
			},
			{
				color: 'teal',
				icon: 'mdi-tag',
				name: 'Promos',
				new: 2,
				total: 4,
				title: 'Shop your way',
				exceprt: 'New deals available, Join Today',
			},
			{
				color: 'teal',
				icon: 'mdi-tag',
				name: 'Promos',
				new: 2,
				total: 4,
				title: 'Shop your way',
				exceprt: 'New deals available, Join Today',
			},
			{
				color: 'teal',
				icon: 'mdi-tag',
				name: 'Promos',
				new: 2,
				total: 4,
				title: 'Shop your way',
				exceprt: 'New deals available, Join Today',
			},
			{
				color: 'teal',
				icon: 'mdi-tag',
				name: 'Promos',
				new: 2,
				total: 4,
				title: 'Shop your way',
				exceprt: 'New deals available, Join Today',
			},
			{
				color: 'teal',
				icon: 'mdi-tag',
				name: 'Promos',
				new: 2,
				total: 4,
				title: 'Shop your way',
				exceprt: 'New deals available, Join Today',
			},
			{
				color: 'teal',
				icon: 'mdi-tag',
				name: 'Promos',
				new: 2,
				total: 4,
				title: 'Shop your way',
				exceprt: 'New deals available, Join Today',
			},
			{
				color: 'teal',
				icon: 'mdi-tag',
				name: 'Promos',
				new: 2,
				total: 4,
				title: 'Shop your way',
				exceprt: 'New deals available, Join Today',
			},
		],
		lorem: 'Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.',
	}),
	methods: {
		//查看文章详情信息
		toDetails() {
			this.$router.push('/details');
		},
	},
};
</script>

<style></style>
