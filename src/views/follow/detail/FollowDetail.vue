<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <Personal-lists></Personal-lists>
      </v-col>
      <v-col cols="4">
        <Personal-profile></Personal-profile>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PersonalLists from '../common/PersonalLists.vue'
import PersonalProfile from '../common/PersonalProfile.vue'
export default {
  components: {
    PersonalProfile,
    PersonalLists,
  }
}
</script>

<style lang="less" scoped>

</style>