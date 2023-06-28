<template>
	<div class="text-center">
		<div class="my-9">
			<v-btn color="grey lighten-2" fab dark>
				<v-icon>mdi-television</v-icon>
			</v-btn>
		</div>
		<div class="my-9">
			<v-btn color="grey lighten-2" fab dark>
				<v-icon>mdi-pencil</v-icon>
			</v-btn>
		</div>
		<div class="my-9">
			<v-btn color="grey lighten-2" fab dark>
				<v-icon>mdi-account-circle</v-icon>
			</v-btn>
		</div>
		<div class="my-9">
			<v-btn color="grey lighten-2" fab dark>
				<v-icon>mdi-alarm</v-icon>
			</v-btn>
		</div>
		<div class="my-9">
			<v-btn color="grey lighten-2" fab dark>
				<v-icon>mdi-domain</v-icon>
			</v-btn>
		</div>
	</div>
</template>
<script>
import ButToolTip from '@comp/common/ButToolTip.vue';
export default {
	components: {
		ButToolTip,
	},
	data: () => ({
		value: 1,
		tipName: 'dianzan',
	}),
};
</script>
