<template>
	<v-container>
		<v-row class="main">
			<v-col class="rotation" lg="8">
				<Rotation></Rotation>
			</v-col>
			<v-col class="hotspot" lg="4">
				<Hotspot></Hotspot>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import Hotspot from './Hotspot.vue';
import Rotation from './Rotation.vue';
export default {
	components: {
		Hotspot,
		Rotation,
	},
};
</script>

<style lang="sass" scoped>

</style>
