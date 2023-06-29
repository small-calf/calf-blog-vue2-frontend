<!-- # src/App.vue -->
<template>
	<v-container>
		<v-card>
			<v-row class="d-flex">
				<v-col>
					<v-dialog
						transition="dialog-bottom-transition"
						max-width="600"
					>
						<template v-slot:activator="{ on, attrs }">
							<v-btn
								:loading="loading5"
								:disabled="loading5"
								color="primary"
								class="ma-2 white--text"
								v-bind="attrs"
								v-on="on"
								@click="publish"
							>
								发布
								<v-icon dark> mdi-publish </v-icon>
							</v-btn>
						</template>
						<template v-slot:default="dialog">
							<v-card>
								<v-toolbar color="primary" dark
									>Opening from the bottom</v-toolbar
								>
								<v-card-text>
									<div class="text-h2 pa-12">
										<publish></publish>
									</div>
								</v-card-text>
								<v-card-actions class="justify-end">
									<v-btn text @click="dialog.value = false"
										>Close</v-btn
									>
								</v-card-actions>
							</v-card>
						</template>
					</v-dialog>
					<!-- <v-btn
						:loading="loading5"
						:disabled="loading5"
						color="primary"
						class="ma-2 white--text"
						@click="publish"
					>
						发布
						<v-icon dark> mdi-publish </v-icon>
					</v-btn> -->
					<v-btn
						outlined
						:loading="loading5"
						:disabled="loading5"
						color="primary"
						class="ma-2 white--text"
					>
						存草稿
						<v-icon dark> mdi-semantic-web </v-icon>
					</v-btn>
				</v-col>
				<v-col
					class="d-flex align-center justify-end mr-5 text-capitalize text--disabled font-weight-thin"
				>
					<span class="deep-orange--text"
						>Believe in yourself, shine brightly, always
						shine.</span
					>
				</v-col>
			</v-row>
		</v-card>
		<div id="app" class="my-5">
			<vue-tinymce v-model="content" :setting="setting" />
		</div>
	</v-container>
</template>

<script>
import Publish from './Publish.vue';
export default {
	components: {
		Publish,
	},
	data() {
		return {
			publish: false,
			content: '',
			setting: {
				menubar: false,
				toolbar:
					'undo redo | fullscreen | formatselect alignleft aligncenter alignright alignjustify | link unlink | numlist bullist | image media table | fontselect fontsizeselect forecolor backcolor | bold italic underline strikethrough | indent outdent | superscript subscript | removeformat | emoticons |',
				toolbar_drawer: 'sliding',
				quickbars_selection_toolbar:
					'removeformat | bold italic underline strikethrough | fontsizeselect forecolor backcolor',
				plugins:
					'link image media table lists fullscreen quickbars emoticons',
				language: 'zh_CN',
				height: 600,
			},
		};
	},
	methods: {
		publish() {
			this.publish = !this.publish;
		},
	},
};
</script>
