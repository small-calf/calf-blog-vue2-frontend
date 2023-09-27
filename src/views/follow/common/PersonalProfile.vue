<template>
  <v-card class="mx-auto" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">calf</div>
        <v-list-item-title class="text-h5 mb-1"> 软件工程师 </v-list-item-title>
        <v-list-item-subtitle>简介</v-list-item-subtitle>
      </v-list-item-content>

      <v-avatar size="100">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>
    </v-list-item>

    <v-card-actions>
      <v-row class="d-flex align-content">
        <v-col
          ><v-btn rounded color="primary"> 关注 </v-btn>
          <v-btn outlined rounded text> 私信 </v-btn></v-col
        >
        <v-col class="ml-2 text-end">入驻时间：2023年1月1日</v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {};
</script>

<style></style>
