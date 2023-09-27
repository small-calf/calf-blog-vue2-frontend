<template>
	<v-container>
		<Main></Main>
		<v-row class="content">
			<v-col class="rotation" lg="8">
				<v-subheader class="justify-center"
					>Hot selling item</v-subheader
				>
				<List-item col></List-item>
			</v-col>
			<v-col class="rotation" lg="4">
				<Music-video></Music-video>
				<Weather></Weather>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import ListItem from './ListItem.vue';
import MusicVideo from './MusicVideo.vue';
import Main from '@comp/main/Main.vue';
import Weather from '@comp/common/Weather';
export default {
	components: {
		ListItem,
		MusicVideo,
		Main,
		Weather,
	},
};
</script>

<style></style>
