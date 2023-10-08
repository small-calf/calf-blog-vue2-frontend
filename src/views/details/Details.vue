<template>
	<v-container>
		<v-row>
			<v-col cols="1">
				<Toolbar></Toolbar>
			</v-col>
			<v-col cols="8">
				<v-window v-model="window" class="elevation-1" vertical>
					<v-window-item v-for="n in length" :key="n">
						<v-card flat>
							<v-card-text>
								<div
									class="text-h3 mb-5 black--text font-weight-medium"
								>
									标题
								</div>
								<v-row class="mb-4" align="center">
									<v-avatar
										color="grey"
										class="mr-4"
									></v-avatar>
									<v-col>
										<strong class="text-h6">
											昵称{{ n }}
										</strong>
										<div
											class="text-caption text--disabled font-italic"
										>
											时间
										</div>
									</v-col>

									<v-spacer></v-spacer>

									<v-tooltip right>
										<template
											v-slot:activator="{ on, attrs }"
										>
											<v-btn
												v-bind="attrs"
												v-on="on"
												dark
												small
												color="primary"
												@click="followFlag"
											>
												<v-icon v-if="isFollow">
													mdi-plus
												</v-icon>
												<v-icon v-else>
													mdi-check
												</v-icon>
											</v-btn>
										</template>
										<span v-if="isFollow">关注</span>
										<span v-else>取消关注</span>
									</v-tooltip>
								</v-row>

								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip
									ex ea commodo consequat. Duis aute irure
									dolor in reprehenderit in voluptate velit
									esse cillum dolore eu fugiat nulla pariatur.
									Excepteur sint occaecat cupidatat non
									proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.
								</p>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip
									ex ea commodo consequat. Duis aute irure
									dolor in reprehenderit in voluptate velit
									esse cillum dolore eu fugiat nulla pariatur.
									Excepteur sint occaecat cupidatat non
									proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.
								</p>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip
									ex ea commodo consequat. Duis aute irure
									dolor in reprehenderit in voluptate velit
									esse cillum dolore eu fugiat nulla pariatur.
									Excepteur sint occaecat cupidatat non
									proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.
								</p>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip
									ex ea commodo consequat. Duis aute irure
									dolor in reprehenderit in voluptate velit
									esse cillum dolore eu fugiat nulla pariatur.
									Excepteur sint occaecat cupidatat non
									proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.
								</p>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip
									ex ea commodo consequat. Duis aute irure
									dolor in reprehenderit in voluptate velit
									esse cillum dolore eu fugiat nulla pariatur.
									Excepteur sint occaecat cupidatat non
									proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.
								</p>
								<v-row class="mt-10">
									<v-icon>mdi-label</v-icon>
									<v-chip
										class="mx-2 grey--text lighten-5"
										draggable
									>
										Default
									</v-chip>
									<v-chip
										class="mx-2 grey--text lighten-5"
										draggable
									>
										前端
									</v-chip>
									<v-chip
										class="mx-2 grey--text lighten-5"
										draggable
									>
										后端
									</v-chip>
								</v-row>
							</v-card-text>
						</v-card>
					</v-window-item>
				</v-window>
			</v-col>
			<v-col>
				<v-col>
					<v-row align="center">
						<v-avatar color="grey" class="mr-4"></v-avatar>
						<v-col>
							<strong class="text-h6"> 昵称 </strong>
							<div class="text-caption text--disabled">职位</div>
						</v-col>
						<v-btn color="primary" @click="privateLetter">
							<v-icon>mdi-email-outline</v-icon>
							私信</v-btn></v-btn>
					</v-row>
				</v-col>
				<v-divider></v-divider>
				<v-col>
					<v-btn class="" text icon color="primary">
						<v-icon>mdi-thumb-up</v-icon>
					</v-btn>
					<span>获得点赞111</span>
				</v-col>
				<v-col>
					<v-btn class="" text icon color="primary">
						<v-icon>mdi-eye</v-icon>
					</v-btn>
					<span>文章被阅读量111</span>
				</v-col>
				<v-divider></v-divider>
				<v-col>
					<CardList></CardList>
				</v-col>
			</v-col>
			<Chat :dialog.sync="dialog"></Chat>
		</v-row>
	</v-container>
</template>
<script>
import Toolbar from '@comp/common/Toolbar.vue';
import CardList from '@comp/common/CardList.vue';
import Chat from '@comp/common/Chat'
export default {
	components: {
		Toolbar,
		CardList,
		Chat,
	},
	data: () => ({
		dialog: false,
		length: 3,
		window: 0,
		isFollow: false,
	}),
	methods: {
		followFlag() {
			this.isFollow = !this.isFollow;
		},
		privateLetter() {
			this.dialog = !this.dialog
		}
	},
};
</script>
