<template>
	<v-tooltip :right="right" :left="left">
		<template v-slot:activator="{ on, attrs }">
			<v-btn v-bind="attrs" v-on="on" dark small :color="color">
				<slot></slot>
			</v-btn>
		</template>
		<span>{{ tipName }}</span>
	</v-tooltip>
</template>

<script>
export default {
	props: {
		color: {
			type: String,
			default: 'primary',
		},
		size: {
			type: String,
			default: 'small',
		},
		tipName: {
			type: String,
			default: '',
		},
		right: {
			type: Boolean,
			default: false,
		},
		left: {
			type: Boolean,
			default: true,
		},
	},
};
</script>

<style lang="scss" scoped></style>
