<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="text-h5"> 手机号换绑 </v-card-title>

        <v-card-text> 原手机号：123456478910 </v-card-text>
        <v-card-text>
          <v-text-field
            label="验证码"
            value="123456"
            hint="请输入6位数字验证码"
            outlined
          >
            <template v-slot:append>
              <v-btn @click="textDialog" depressed color="primary">
                换绑
              </v-btn>
            </template>
          </v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="updateDialog">
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
  },
  data() {
    return {};
  },
  methods: {
    updateDialog() {
      this.$emit("update:dialog", !this.dialog);
    },
  },
};
</script>

<style lang="scss" scoped></style>
