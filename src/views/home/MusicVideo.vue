<template>
  <v-row>
    <v-col cols="12">
      <v-card>
        <v-subheader light> 热歌列表 </v-subheader>
        <Vue-player></Vue-player>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import VuePlayer from "@comp/common/VuePlayer";
export default {
  components: {
    VuePlayer,
  },
  data: () => ({}),
};
</script>

<style></style>
