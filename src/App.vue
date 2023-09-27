<template>
  <div class="calf">
    <v-app v-if="!isActive">
      <v-app-bar app color="primary">
        <Header></Header>
      </v-app-bar>

      <v-main class="grey lighten-5">
        <!-- 给应用提供合适的间距 -->
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-main>
      <Footer></Footer>
    </v-app>
    <Speak v-else></Speak>
  </div>
</template>

<script>
import Header from "@comp/Header.vue";
import Content from "@views/home/Content.vue";
import Footer from "@comp/Footer.vue";
import Speak from "@views/speak/Index.vue";
export default {
  name: "App",
  watch: {
    $route: {
      handler: function (route) {
        this.path = route.path;
        if (this.path === '/speak') {
          //获取当前路由
          this.isActive = true;
        } else {
          this.isActive = false;
        }
      },
      immediate: true,
    },
  },
  components: {
    Header,
    Content,
    Footer,
    Speak,
  },
  data: () => ({
    path: "",
    isActive: false,
  }),
  updated() {},
};
</script>
<style lang="scss" scoped>
.active {
  // opacity: .1;
  display: none;
}
</style>
