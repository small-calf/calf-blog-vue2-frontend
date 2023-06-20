<template>
	<div class="text-center">
		<v-container>
			<v-row justify="end">
				<v-col cols="8">
					<v-container class="max-width">
						<v-pagination
							v-model="page"
							class="my-4"
							:length="25"
						></v-pagination>
					</v-container>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>
<script>
export default {
	data() {
		return {
			page: 1,
		};
	},
};
</script>
