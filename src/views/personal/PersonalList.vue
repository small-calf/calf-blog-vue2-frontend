<template>
	<v-row justify="center" class="mt-2">
		<v-expansion-panels>
			<v-expansion-panel
				v-for="(message, i) in messages"
				:key="i"
				hide-actions
			>
				<v-expansion-panel-header>
					<v-row align="center" class="spacer" no-gutters>
						<v-col class="text-truncate" cols="4">
							<strong v-html="message.title"></strong>
						</v-col>

						<v-col
							v-if="message.excerpt"
							class="grey--text text-truncate hidden-sm-and-down"
						>
							&mdash;
							{{ message.excerpt }}
						</v-col>
						<v-col class="black--text text-center">
							<div class="count pa-1">1213</div>
							<div class="read">阅读量</div>
						</v-col>
						<v-col class="black--text text-center">
							<div class="count pa-1">1213</div>
							<div class="read">评论数</div>
						</v-col>
						<v-col class="black--text text-center">
							<div class="count pa-1">1213</div>
							<div class="read">点赞数</div>
						</v-col>
						<v-col class="black--texte text-center">
							<div class="count pa-1">1</div>
							<div class="read">收藏数</div>
						</v-col>
					</v-row>
				</v-expansion-panel-header>

				<v-expansion-panel-content>
					<v-divider></v-divider>
					<v-row>
						<v-col cols="8">
							<v-card-text @click="toDetails">
								{{ lorem }}
							</v-card-text>
						</v-col>
						<v-col cols="4">
							<v-img
								class="my-2"
								height="100"
								src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
							></v-img>
						</v-col>
					</v-row>

					<v-bottom-navigation :value="value" color="primary" grow>
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
</template>

<script>
export default {
	data() {
		return {
			value: '',
			tab: null,
			items: ['近期文章', '近期上传'],
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			messages: [
				{
					avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
					name: 'John Leider',
					title: 'Welcome to Vuetify!Welcome to Vuetify!Welcome to Vuetify!Welcome to Vuetify!Welcome to Vuetify!Welcome to Vuetify!Welcome to Vuetify!Welcome to Vuetify!',
					excerpt: '2023-06-19 12:00:00',
				},
				{
					color: 'red',
					icon: 'mdi-account-multiple',
					name: 'Social',
					new: 1,
					total: 3,
					title: 'Twitter',
					excerpt: '2023-06-19 12:00:00',
				},
				{
					color: 'teal',
					icon: 'mdi-tag',
					name: 'Promos',
					new: 2,
					total: 4,
					title: 'Shop your way',
					exceprt: 'New deals available, Join Today',
					excerpt: '2023-06-19 12:00:00',
				},
				{
					color: 'teal',
					icon: 'mdi-tag',
					name: 'Promos',
					new: 2,
					total: 4,
					title: 'Shop your way',
					excerpt: '2023-06-19 12:00:00',
				},
				{
					color: 'teal',
					icon: 'mdi-tag',
					name: 'Promos',
					new: 2,
					total: 4,
					title: 'Shop your way',
					excerpt: '2023-06-19 12:00:00',
				},
				{
					color: 'teal',
					icon: 'mdi-tag',
					name: 'Promos',
					new: 2,
					total: 4,
					title: 'Shop your way',
					excerpt: '2023-06-19 12:00:00',
				},
				{
					color: 'teal',
					icon: 'mdi-tag',
					name: 'Promos',
					new: 2,
					total: 4,
					title: 'Shop your way',
					excerpt: '2023-06-19 12:00:00',
				},
				{
					color: 'teal',
					icon: 'mdi-tag',
					name: 'Promos',
					new: 2,
					total: 4,
					title: 'Shop your way',
					excerpt: '2023-06-19 12:00:00',
				},
				{
					color: 'teal',
					icon: 'mdi-tag',
					name: 'Promos',
					new: 2,
					total: 4,
					title: 'Shop your way',
					excerpt: '2023-06-19 12:00:00',
				},
				{
					color: 'teal',
					icon: 'mdi-tag',
					name: 'Promos',
					new: 2,
					total: 4,
					title: 'Shop your way',
					excerpt: '2023-06-19 12:00:00',
				},
			],
			lorem: 'Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.',
		};
	},
	methods: {
		//查看文章详情信息
		toDetails() {
			this.$router.push('/details');
		},
	},
};
</script>

<style></style>
