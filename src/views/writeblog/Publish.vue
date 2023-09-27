<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-card-text>
      <span class="ml--10"> 选择标签： </span>
      <v-chip-group
        active-class="primary--text"
        v-model="chip"
        @change="chipChange"
        column
        mandatory
      >
        <v-chip v-for="tag in tags" :key="tag">
          {{ tag }}
        </v-chip>
      </v-chip-group>
    </v-card-text>
    <v-select
      :items="sortItems"
      label="选择分类"
      required
      :rules="rules.sortRules"
    ></v-select>
    <v-file-input
      :rules="fileRules"
      accept="image/png, image/jpeg, image/bmp"
      placeholder="请选择文章封面"
      append-outer-icon="mdi-camera"
      label="封面"
      @click:append-outer="upload"
    ></v-file-input>
    <v-text-field
      v-model="title"
      label="标题"
      placeholder="请输入标题"
      outlined
      dense
      :rules="rules.titleRules"
      required
    ></v-text-field>

    <v-textarea
      outlined
      placeholder="请输入摘要"
      label="摘要"
      v-model="abstract"
      required
      :rules="rules.abstractRules"
      clear-icon
    ></v-textarea>

    <div class="btn-bottom" align="end">
      <v-btn class="mr-4" @click="reset()"> 重置 </v-btn>
      <v-btn color="primary" class="mr-4" :disabled="!valid" @click="submit()">
        提交
      </v-btn>
    </div>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    chip: "JAVA",
    name: "分类",
    abstract: "",
    title: "",
    sortItems: ["后端", "前端", "Java", "MYSQL", "微服务", "容器"],
    tags: [
      "JAVA",
      "Spring Boot",
      "Vue",
      "Docker",
      "微服务",
      "MYSQL",
      "公有云",
      "Redis",
      "MQ",
    ],
    rules: {
      titleRules: [
        (v) => !!v || "请输入标题",
        (v) => (!!v && v.length <= 50) || "文章标题不能超过50个字符",
      ],
      sortRules: [(v) => !!v || "请选择所属分类"],
      abstractRules: [
        (v) => !!v || "请输入摘要",
        (v) => (!!v && v.length <= 50) || "文章标题不能超过300个字符",
      ],
    },
    fileRules: [
      (value) => !value || value.size < 2000000 || "图片大小不能超过2M",
    ],
  }),

  methods: {
    chipChange(value) {
      console.log(value);
    },
    //上传图片
    upload() {
      console.log('上传');
    },
    //提交
    submit(value) {
      var valid = this.$refs.form.validate();
      if (valid) {
        //提交
        console.log("success");
        //清空表单
        this.reset();
      }
    },
    //清空表单
    reset() {
      this.$refs.form.reset();
    },
    //重置表单验证
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>

<style lang="scss" scoped>
.v-application .error--text {
  color: red !important;
  caret-color: red !important;
  ::v-deep .v-text-field__slot .error--text {
    color: red !important;
  }
  ::v-deep .v-select__slot .error--text {
    color: red !important;
  }
  ::v-deep .v-messages__message {
    color: red !important;
  }
}
</style>
