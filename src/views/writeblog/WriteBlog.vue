<!-- # src/App.vue -->
<template>
  <v-container>
    <v-card>
      <v-row class="d-flex">
        <v-col>
          <v-dialog transition="dialog-bottom-transition" max-width="600">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                class="ma-2 white--text"
                v-bind="attrs"
                v-on="on"
                @click="publishBlog"
              >
                发布
                <v-icon dark> mdi-publish </v-icon>
              </v-btn>
            </template>
            <template v-slot:default="dialog">
              <v-card>
                <v-toolbar color="primary" dark
                  >发布博客</v-toolbar
                >
                <v-card-text>
                  <div class="text-h2 pa-12">
                    <Publish></Publish>
                  </div>
                </v-card-text>
                <v-card-actions class="justify-end">
                  <v-btn text @click="dialog.value = false">Close</v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
          <v-btn
            outlined
            color="primary"
            class="ma-2 white--text"
          >
            存草稿
            <v-icon dark> mdi-semantic-web </v-icon>
          </v-btn>
        </v-col>
        <v-col
          class="d-flex align-center justify-end mr-5 text-capitalize text--disabled font-weight-thin"
        >
          <span class="deep-orange--text"
            >Believe in yourself, shine brightly, always shine.</span
          >
        </v-col>
      </v-row>
    </v-card>
    <div id="app" class="my-5">
      <div style="border: 1px solid #ccc">
        <Toolbar
          style="border-bottom: 1px solid #ccc"
          :editor="editor"
          :defaultConfig="toolbarConfig"
          :mode="mode"
        />
        <Editor
          style="height: 600px; overflow-y: hidden"
          v-model="html"
          :defaultConfig="editorConfig"
          :mode="mode"
          @onCreated="onCreated"
        />
      </div>
    </div>
  </v-container>
</template>

<script>
import Publish from "./Publish.vue";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import { DomEditor } from '@wangeditor/editor'
import "@wangeditor/editor/dist/css/style.css";
export default {
  components: {
    Publish,
    Editor,
    Toolbar,
  },
  data() {
    return {
      publish: false,
      content: "",
      editor: null,
      html: "<p>hello</p>",
      toolbarConfig: {
		excludeKeys : [''
	]
	  },
      editorConfig: { placeholder: "请输入内容..." },
      mode: "default", // or 'simple'
    };
  },
  methods: {
    publishBlog() {
      this.publish = !this.publish;
    },
    onCreated(editor) {
      this.editor = Object.seal(editor); // 一定要用 Object.seal() ，否则会报错
	  
    },
  },
  mounted() {
	
    // 模拟 ajax 请求，异步渲染编辑器
    setTimeout(() => {
      this.html = "<p>模拟 Ajax 异步设置内容 HTML</p>";
    }, 1500);
  },
  updated() {
	const toolbar = DomEditor.getToolbar(this.editor)
	console.log(toolbar);
	  const curToolbarConfig = toolbar.getConfig()
	  console.log( curToolbarConfig.toolbarKeys )
  },
  beforeDestroy() {
    const editor = this.editor;
    if (editor == null) return;
    editor.destroy(); // 组件销毁时，及时销毁编辑器
  },
};
</script>
<style lang="scss" scoped>

</style>
