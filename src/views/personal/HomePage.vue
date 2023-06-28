<template>
	<v-container>
		<v-fade-transition>
			<v-row>
				<v-col cols="12">
					<v-card>
						<v-img
							contain
							aspect-ratio
							src="https://picsum.photos/350/165?random"
							max-height="250"
							class="grey darken-4"
						></v-img>
						<v-card-title>
							<v-row>
								<v-col>
									<div class="d-flex">
										<v-avatar>
											<img
												v-if="message.avatar"
												alt="Avatar"
												src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
											/>
											<v-icon
												v-else
												:color="message.color"
												large
												>{{ message.icon }}</v-icon
											>
										</v-avatar>
										<div class="describe mx-5">
											<div class="title">
												<span
													class="text-h5 black--text font-weight-black"
													>calf</span
												>
												<span>
													<v-btn
														small
														class="mx-2"
														outlined
														color="primary"
														@click="a"
													>
														我的二维码
														<v-icon right dark>
															mdi-qrcode
														</v-icon>
													</v-btn>
												</span>
												<span>
													<v-btn
														small
														class="mx-2"
														outlined
														color="primary"
														@click="a"
													>
														修改个人资料
														<v-icon right dark>
															mdi-square-edit-outline
														</v-icon>
													</v-btn>
												</span>
											</div>
											<div class="time">
												<span
													class="text-subtitle-2 text-decoration-underline font-italic"
												>
													2023年12月23日加入</span
												>
												<span
													class="text-subtitle-2 font-weight-light"
													>&nbsp;|&nbsp;还未添加签名</span
												>
											</div>
											<div class="introduce text-caption">
												个人简介：暂无简介
											</div>
										</div>
									</div>
								</v-col>
								<v-col cols="1">
									<span class="ml-3 primary--text">10</span>
									<div
										class="title justify-center text-overline"
									>
										关注者
										<v-icon color="primary" light small>
											mdi-skip-next-outline
										</v-icon>
									</div>
								</v-col>
								<v-col cols="1">
									<span class="ml-3 primary--text">10</span>
									<div
										class="title justify-center text-overline"
									>
										关注了
										<v-icon color="primary" small>
											mdi-skip-next-outline
										</v-icon>
									</div>
								</v-col>
							</v-row>
						</v-card-title>
					</v-card>
				</v-col>
			</v-row>
		</v-fade-transition>
		<ColumnSort class="mt-10"></ColumnSort>
	</v-container>
</template>

<script>
import ColumnSort from './homepage/ColumnSort.vue';
export default {
	components: {
		ColumnSort,
	},
	data: () => ({
		message: {
			avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
			name: 'John Leider',
			title: 'Welcome to Vuetify!',
			excerpt: 'Thank you for joining our community...',
		},
	}),
	methods: {
		a() {},
	},
};
</script>

<style></style>
