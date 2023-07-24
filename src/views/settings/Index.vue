/** 设置页 */
<template>
	<v-container>
		<v-dialog
			v-model="dialog"
			fullscreen
			hide-overlay
			transition="dialog-bottom-transition"
			scrollable
		>
			<v-card tile>
				<v-toolbar flat dark color="primary">
					<v-btn icon dark @click="closeDialog()">
						<v-icon>mdi-close</v-icon>
					</v-btn>
					<v-toolbar-title>Settings</v-toolbar-title>
					<v-spacer></v-spacer>
				</v-toolbar>
				<v-row justify="center">
					<v-col cols="8">
						<v-card-text>
							<v-btn
								color="primary"
								dark
								class="ma-2"
								@click="dialog2 = !dialog2"
							>
								Open Dialog 2
							</v-btn>
							<v-tooltip right>
								<template v-slot:activator="{ on, attrs }">
									<v-btn
										class="ma-2"
										v-bind="attrs"
										v-on="on"
									>
										Tool Tip Activator
									</v-btn>
								</template>
								Tool Tip
							</v-tooltip>
							<v-divider></v-divider>
							<v-expansion-panels>
								<PersonalData></PersonalData>
								<v-expansion-panel>
									<v-expansion-panel-header v-slot="{ open }">
										<v-row no-gutters>
											<v-col cols="4"> Location </v-col>
											<v-col
												cols="8"
												class="text--secondary"
											>
												<v-fade-transition
													leave-absolute
												>
													<span v-if="open" key="0">
														Select trip destination
													</span>
													<span v-else key="1">
														{{ trip.location }}
													</span>
												</v-fade-transition>
											</v-col>
										</v-row>
									</v-expansion-panel-header>
									<v-expansion-panel-content>
										<v-row no-gutters>
											<v-spacer></v-spacer>
											<v-col cols="5">
												<v-select
													v-model="trip.location"
													:items="locations"
													chips
													flat
													solo
												></v-select>
											</v-col>

											<v-divider
												vertical
												class="mx-4"
											></v-divider>

											<v-col cols="3">
												Select your destination of
												choice
												<br />
												<a href="#">Learn more</a>
											</v-col>
										</v-row>

										<v-card-actions>
											<v-spacer></v-spacer>
											<v-btn text color="secondary">
												Cancel
											</v-btn>
											<v-btn text color="primary">
												Save
											</v-btn>
										</v-card-actions>
									</v-expansion-panel-content>
								</v-expansion-panel>

								<v-expansion-panel>
									<v-expansion-panel-header v-slot="{ open }">
										<v-row no-gutters>
											<v-col cols="4">
												Start and end dates
											</v-col>
											<v-col
												cols="8"
												class="text--secondary"
											>
												<v-fade-transition
													leave-absolute
												>
													<span v-if="open"
														>When do you want to
														travel?</span
													>
													<v-row
														v-else
														no-gutters
														style="width: 100%"
													>
														<v-col cols="6">
															Start date:
															{{
																trip.start ||
																'Not set'
															}}
														</v-col>
														<v-col cols="6">
															End date:
															{{
																trip.end ||
																'Not set'
															}}
														</v-col>
													</v-row>
												</v-fade-transition>
											</v-col>
										</v-row>
									</v-expansion-panel-header>
									<v-expansion-panel-content>
										<v-row
											justify="space-around"
											no-gutters
										>
											<v-col cols="3">
												<v-menu
													ref="startMenu"
													:close-on-content-click="
														false
													"
													:return-value.sync="
														trip.start
													"
													offset-y
													min-width="290px"
												>
													<template
														v-slot:activator="{
															on,
															attrs,
														}"
													>
														<v-text-field
															v-model="trip.start"
															label="Start date"
															prepend-icon="mdi-calendar"
															readonly
															v-bind="attrs"
															v-on="on"
														></v-text-field>
													</template>
													<v-date-picker
														v-model="date"
														no-title
														scrollable
													>
														<v-spacer></v-spacer>
														<v-btn
															text
															color="primary"
															@click="
																$refs.startMenu.isActive = false
															"
														>
															Cancel
														</v-btn>
														<v-btn
															text
															color="primary"
															@click="
																$refs.startMenu.save(
																	date
																)
															"
														>
															OK
														</v-btn>
													</v-date-picker>
												</v-menu>
											</v-col>

											<v-col cols="3">
												<v-menu
													ref="endMenu"
													:close-on-content-click="
														false
													"
													:return-value.sync="
														trip.end
													"
													offset-y
													min-width="290px"
												>
													<template
														v-slot:activator="{
															on,
															attrs,
														}"
													>
														<v-text-field
															v-model="trip.end"
															label="End date"
															prepend-icon="mdi-calendar"
															readonly
															v-bind="attrs"
															v-on="on"
														></v-text-field>
													</template>
													<v-date-picker
														v-model="date"
														no-title
														scrollable
													>
														<v-spacer></v-spacer>
														<v-btn
															text
															color="primary"
															@click="
																$refs.endMenu.isActive = false
															"
														>
															Cancel
														</v-btn>
														<v-btn
															text
															color="primary"
															@click="
																$refs.endMenu.save(
																	date
																)
															"
														>
															OK
														</v-btn>
													</v-date-picker>
												</v-menu>
											</v-col>
										</v-row>
									</v-expansion-panel-content>
								</v-expansion-panel>
							</v-expansion-panels>
						</v-card-text>
					</v-col>
				</v-row>
				<div style="flex: 1 1 auto"></div>
			</v-card>
		</v-dialog>
		<v-dialog v-model="dialog2" max-width="500px">
			<v-card>
				<v-card-title> Dialog 2 </v-card-title>
				<v-card-text>
					<v-btn color="primary" dark @click="dialog3 = !dialog3">
						Open Dialog 3
					</v-btn>
					<v-select
						:items="select"
						label="A Select List"
						item-value="text"
					></v-select>
				</v-card-text>
				<v-card-actions>
					<v-btn color="primary" text @click="closeDialog()">
						Close
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</v-container>
</template>

<script>
import PersonalData from './content/PersonalData.vue';
export default {
	components: {
		PersonalData,
	},
	props: {
		dialog: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			date: null,
			trip: {
				name: '',
				location: null,
				start: null,
				end: null,
			},
			locations: [
				'Australia',
				'Barbados',
				'Chile',
				'Denmark',
				'Ecuador',
				'France',
			],
			dialog2: false,
			notifications: false,
			sound: true,
			widgets: false,
			items: [
				{
					title: 'Click Me',
				},
				{
					title: 'Click Me1',
				},
				{
					title: 'Click Me2',
				},
				{
					title: 'Click Me 3',
				},
			],
			select: [
				{ text: 'State 1' },
				{ text: 'State 2' },
				{ text: 'State 3' },
				{ text: 'State 4' },
				{ text: 'State 5' },
				{ text: 'State 6' },
				{ text: 'State 7' },
			],
		};
	},
	methods: {
		/**
		 * 关闭对话框
		 */
		closeDialog() {
			this.$emit('update:dialog', false);
		},
	},
};
</script>

<style></style>
