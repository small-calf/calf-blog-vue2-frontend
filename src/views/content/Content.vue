<template>
	<v-container>
		<v-row class="content">
			<v-col class="rotation" lg="8">
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
export default {
	components: {
		ListItem,
		AuthorRecommend,
	},
};
</script>

<style></style>
