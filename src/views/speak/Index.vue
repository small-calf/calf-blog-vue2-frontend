<template>
  <div class="speak">
    <vue-danmaku
      v-model="danmus"
      :loop="true"
      ref="danmaku"
      :channels="50"
      useSlot
      loop
      style="height: 950px; width: 100%"
    >
      <!-- 弹幕插槽（vue 2.6.0 及以上版本可使用 v-slot:dm="{ index, danmu }"语法） -->
      <template slot="dm" slot-scope="{ index, danmu }">
        <div>
          <v-avatar>
            <img :src="danmu.name" alt="John" /> </v-avatar
          >:{{ danmu.text }}
        </div>
      </template>
      <!-- 容器插槽 -->
    </vue-danmaku>
    <div class="fixed">
      <v-chip class="chip" color="green" large label>
        <v-icon left> mdi-message-text </v-icon>
        快释放你自己
      </v-chip>
      <v-text-field
        v-model="message"
        outlined
        clearable
        label="说点什么..."
        type="text"
        @keydown.enter="send()"
      >
        <template v-slot:append>
          <v-icon left style="cursor: pointer" @click="send"> mdi-send </v-icon>
        </template>
      </v-text-field>
    </div>
  </div>
</template>

<script>
import vueDanmaku from "vue-danmaku";

export default {
  components: {
    vueDanmaku,
  },
  data() {
    return {
      danmus: [
        {
          name: "https://cdn.vuetifyjs.com/images/john.jpg",
          text: "烦烦烦",
        },
      ],
      message: "",
    };
  },
  methods: {
    aa() {
      this.$refs.danmaku.init("aaaa");
    },
    send() {
      this.$refs.danmaku.add(this.message);
      setTimeout(() => {
        this.message = "";
      }, 100);
    },
  },
};
</script>

<style lang="scss" scoped>
.speak {
  ::v-deep .vue-danmaku .danmus {
    background-image: url("../../assets/speak.jpg");
    opacity: 0.7;
  }
  .fixed {
    display: flex;
    position: absolute;
    top: 50%;
    left: 45%;
    flex-direction: column;
    align-items: center;
    .chip {
      margin-bottom: 10px;
    }
    ::v-deep .v-input {
      .v-input__control {
        flex-grow: 0 !important;
      }
    }
  }
}
</style>
