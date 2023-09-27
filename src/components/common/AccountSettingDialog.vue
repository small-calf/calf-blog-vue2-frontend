<template>
  <v-row justify="center">
    <v-dialog v-model="copyDialog" max-width="490" @click:outside="updateDialog()">
      <v-card>
        <v-card-title class="text-h5"> {{copyDialogContent.title}} </v-card-title>

        <v-card-text> {{copyDialogContent.sourcePhoneName}}：{{copyDialogContent.sourcePhone}} </v-card-text>
        <v-card-text>
          <v-text-field
            label="验证码"
            value="123456"
            hint="请输入6位数字验证码"
            outlined
          >
            <template v-slot:append>
              <v-btn @click="sendCaptch()" depressed color="primary">
                发送验证码
              </v-btn>
            </template>
          </v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="nextStep()">
            下一步
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  props: {
    dialog: {
      type: Boolean,
      default: false,
    },
    dialogContent: {
      type: Object,
      default: {

      }
    }
  },
  watch: {
    dialogContent: {
      handler(value) {
        this.copyDialogContent = Object.assign({}, value);
      },
      deep: true,
      immediate: true
    },
    dialog: {
      handler(value) {
        this.copyDialog = value
      },
      immediate: true
      
    }
  },
  data() {
    return {
      copyDialogContent:{},
      copyDialog: false,
    };
  },
  methods: {
    updateDialog() {
      this.$emit("update:dialog", !this.copyDialog);
    },
    //下一步
    nextStep() {

    },
    //发送验证码
    sendCaptch() {

    },
    //清空属性
    clearDialogContent() {
      this.copyDialogContent = {}
    }
  },
  mounted() {
    
  }
};
</script>

<style lang="scss" scoped>
::v-deep .v-input .v-input__control .v-input__slot .v-input__append-inner {
  margin-top: 10px!important;
          
}
</style>
