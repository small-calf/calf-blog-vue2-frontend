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
				<Author-recommend></Author-recommend>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import ListItem from './ListItem.vue';
import AuthorRecommend from './AuthorRecommend.vue';
import Main from '@comp/main/Main.vue';
export default {
	components: {
		ListItem,
		AuthorRecommend,
		Main,
	},
};
</script>

<style></style>
