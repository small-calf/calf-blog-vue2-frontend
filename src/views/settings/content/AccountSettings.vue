<template>
  <v-expansion-panel>
    <v-expansion-panel-header v-slot="{ open }">
      <v-row no-gutters>
        <v-col cols="4"> 账号设置 </v-col>
        <v-col cols="4" class="text--secondary"> </v-col>
      </v-row>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-row no-gutters>
        <!-- <v-spacer></v-spacer> -->
        <v-col>
          <v-form class="userForm" ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="userInfo.phone"
              label="手机号"
              outlined
              disabled
            >
              <template v-slot:append>
                <v-btn
                  @click="changeBindingPhone('phone')"
                  depressed
                  color="primary"
                >
                  换绑
                </v-btn>
              </template>
            </v-text-field>
            <v-text-field
              v-model="userInfo.email"
              label="邮箱"
              outlined
              disabled
            >
              <template v-slot:append>
                <v-btn
                  @click="changeBindingPhone('email')"
                  depressed
                  color="primary"
                >
                  换绑
                </v-btn>
              </template>
            </v-text-field>

            <v-text-field
              v-model="userInfo.wechat"
              label="微信"
              outlined
              disabled
            >
              <template v-slot:append>
                <v-btn @click="textDialog()" depressed color="primary">
                  解绑
                </v-btn>
              </template>
            </v-text-field>

            <v-text-field
              v-model="userInfo.password"
              label="密码"
              outlined
              disabled
            >
              <template v-slot:append>
                <v-btn @click="textDialog()" depressed color="primary">
                  修改
                </v-btn>
              </template>
            </v-text-field>
          </v-form>
        </v-col>
        <v-col>
          <v-card class="mx-auto" max-width="434" tile>
            <v-img
              height="100%"
              src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
            >
              <v-row align="end" class="fill-height">
                <v-col align-self="start" class="pa-0" cols="12">
                  <v-avatar class="profile" color="grey" size="164" tile>
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
                    ></v-img>
                  </v-avatar>
                </v-col>
                <v-col class="py-0">
                  <v-list-item color="rgba(0, 0, 0, .4)" dark>
                    <v-list-item-content>
                      <v-list-item-title class="text-h6">
                        calf
                      </v-list-item-title>
                      <v-list-item-subtitle>开发者</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
      <Account-setting-dialog
        :dialog.sync="dialog"
        :dialogContent="dialogContent"
      ></Account-setting-dialog>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import AccountSettingDialog from "@comp/common/AccountSettingDialog.vue";
export default {
  components: {
    AccountSettingDialog,
  },
  data() {
    return {
      dialogContent: {
        title: "手机号换绑",
        sourcePhoneName: "原始手机号",
        sourcePhone: "123456",
      },
      dialog: false,
      date: null,
      valid: true,
      trip: {
        name: "",
        location: null,
        start: null,
        end: null,
      },
      userInfo: {
        phone: "123456789101",
        email: "1833415795@qq.com",
        wechat: "153111111111",
        password: "********",
      },
      locations: [
        "Australia",
        "Barbados",
        "Chile",
        "Denmark",
        "Ecuador",
        "France",
      ],
      dialog2: false,
      notifications: false,
      sound: true,
      widgets: false,
      items: [
        {
          title: "Click Me",
        },
        {
          title: "Click Me1",
        },
        {
          title: "Click Me2",
        },
        {
          title: "Click Me 3",
        },
      ],
      select: [
        { text: "State 1" },
        { text: "State 2" },
        { text: "State 3" },
        { text: "State 4" },
        { text: "State 5" },
        { text: "State 6" },
        { text: "State 7" },
      ],
      //用户form验证规则
      rules: {
        usernameRules: [
          (v) => !!v || "用户名不能为空",
          (v) => (v && v.length <= 50) || "用户名不能超过50个字符",
        ],
        positionRules: [(v) => (v && v.length <= 50) || "岗位不能超过50个字符"],
        companyRules: [
          (v) => (v && v.length <= 50) || "公司名称不能超过50个字符",
        ],
        signatureRules: [
          (v) => (v && v.length <= 100) || "用户签名不能超过100个字符",
        ],
        introduceRules: [(v) => v.length <= 300 || "个人介绍不能超过300个字符"],
      },
    };
  },
  methods: {
    //换绑手机号
    changeBindingPhone(type) {
      this.dialog = !this.dialog;
      if ("email" === type) {
        this.dialogContent = {
          title: "邮箱换绑",
          sourcePhoneName: "原始邮箱",
          sourcePhone: "123456@qq.com",
        };
      } else {
        this.dialogContent = {
          title: "手机号换绑",
          sourcePhoneName: "原始手机号",
          sourcePhone: "123456",
        };
      }
    },
    textDialog() {
      console.log("123");
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep
  .userForm
  .v-input
  .v-input__control
  .v-input__slot
  .v-input__append-inner {
  margin-top: 10px !important;
}
</style>
