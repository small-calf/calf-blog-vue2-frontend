/* *设置——个人资料页 */
<template>
  <v-expansion-panel>
    <v-expansion-panel-header>
      <template v-slot:default="{ open }">
        <v-row no-gutters>
          <v-col cols="4"> 个人资料 </v-col>
          <v-col cols="8" class="text--secondary">
            <v-fade-transition leave-absolute>
              <span v-if="open" key="0"> 个体资料修改 </span>
              <span v-else key="1">
                {{ trip.name }}
              </span>
            </v-fade-transition>
          </v-col>
        </v-row>
      </template>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-form class="userForm" ref="form" v-model="valid" lazy-validation>
        <v-row>
          <v-col>
            <v-text-field
              v-model="userInfo.username"
              filled
			  counter="50"
              label="用户名"
              :rules="rules.usernameRules"
              clearable
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-model="userInfo.position"
              filled
              label="职位"
              :rules="rules.positionRules"
              clearable
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="userInfo.company"
              filled
              label="公司"
              :rules="rules.companyRules"
              clearable
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-model="userInfo.signature"
              filled
              label="签名"
              :rules="rules.signatureRules"
              clearable
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="userInfo.introduce"
              filled
              label="个人介绍"
              :rules="rules.introduceRules"
              clearable
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-model="userInfo.avatar"
              filled
              label="头像"
              clearable
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row justify="center" class="ma-2">
          <v-btn color="primary" @click="save"> 保存修改 </v-btn>
        </v-row>
      </v-form>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  data() {
    return {
	  valid: true,
      userInfo: {
        username: "calf",
        position: "java开发",
        company: "calf公司",
        signature: "calf签名",
        introduce: "哈哈哈哈啊哈哈哈",
        avatar: "头像",
      },
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
        introduceRules: [
          (v) => (v && v.length <= 300) || "个人介绍不能超过300个字符",
        ],
      },
      date: null,
      trip: {
        name: "",
        location: null,
        start: null,
        end: null,
      },
      locations: [
        "Australia",
        "Barbados",
        "Chile",
        "Denmark",
        "Ecuador",
        "France",
      ],
    };
  },
  methods: {
    save() {
      console.log("修改成功");
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .userForm {
	  .error--text {
    color: red !important;
	caret-color: red !important;
  }
}

</style>
