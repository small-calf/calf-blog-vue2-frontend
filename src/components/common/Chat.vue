<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
    scrollable
  >
    <vue-advanced-chat
      height="calc(100vh - 20px)"
      :current-user-id="currentUserId"
      :rooms="JSON.stringify(rooms)"
      :rooms-loaded="true"
      :messages="JSON.stringify(messages)"
      :messages-loaded="messagesLoaded"
      @send-message="sendMessage($event.detail[0])"
      @fetch-messages="fetchMessages($event.detail[0])"
    />
  </v-dialog>
</template>

<script>
import { register } from "vue-advanced-chat";
register();

export default {
  props: {
    dialog: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dialog: false,
      currentUserId: "1234",
      rooms: [
        {
          roomId: "1",
          roomName: "Room 1",
          avatar: "https://66.media.tumblr.com/avatar_c6a8eae4303e_512.png",
          users: [
            { _id: "1234", username: "John Doe" },
            { _id: "4321", username: "John Snow" },
          ],
        },
        {
          roomId: "2",
          roomName: "Room 2",
          avatar: "https://66.media.tumblr.com/avatar_c6a8eae4303e_512.png",
          users: [
            { _id: "1234", username: "John Doe" },
            { _id: "4321", username: "John Snow" },
          ],
        },
        {
          roomId: "3",
          roomName: "Room 3",
          avatar: "https://66.media.tumblr.com/avatar_c6a8eae4303e_512.png",
          users: [
            { _id: "1234", username: "John Doe" },
            { _id: "4321", username: "John Snow" },
          ],
        },
      ],
      messages: [1],
      messagesLoaded: false,
    };
  },

  methods: {
    fetchMessages({ options = {} }) {
      setTimeout(() => {
        if (options.reset) {
          this.messages = this.addMessages(true);
        } else {
          this.messages = [...this.addMessages(), ...this.messages];
          this.messagesLoaded = true;
        }
        this.addNewMessage();
      });
    },

    addMessages(reset) {
      const messages = [];
      messages.push({
        _id: reset ? 1 : this.messages.length + 1,
        content: `${reset ? "你好啊" : "你还在吗"} `,
        senderId: "4321",
        username: "John Doe",
        date: this.$moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
        timestamp: this.$moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
      });
      return messages;
    },
    //初始化websocket
    initWebSocket() {
      const wsURL = "ws://192.168.3.128:8088/websocket";
      this.websocket = new WebSocket(wsURL);

      this.websocket.addEventListener("open", () => {
        console.log("websocket连接成功~");
      });

      this.websocket.addEventListener("message", (evt) => {
        console.log("websocket收到消息:", evt.data);
        const receivedMsg = evt.data;
      });
      this.websocket.addEventListener("close", () => {
        console.log("WebSocket 关闭连接~");
      });

      this.websocket.addEventListener("error", (error) => {
        console.error("WebSocket 发生错误", error);
      });
    },
    sendMessage(message) {
      if (!this.websocket || this.websocket.readyState !== WebSocket.OPEN) {
        console.warn("WebSocket 连接异常请检查");
        return;
      }
			//JS代码生成message元素
  // const b = document.createElement("div");
  //得到Icon组件的根元素DOM节点

  //message容器中增加相应的子元素
  // b.innerHTML = `<a href=${message.files[0].localUrl} target="_blank"></a>`

      let a;
      if (message.files && message.files.length > 0) {
        // Handle files
        a =`<a href=${message.files[0].localUrl} target="_blank"></a>`
      } else {
        // Handle other message types
        a = message.content;
      }

      console.log("Sending message:", message);
      this.messages.push({
        _id: message.roomId,
        content: (h)=> ( <a href={message.files[0].localUrl}>1</a> ),
        senderId: "1234",
        username: "calf",
        timestamp: this.$moment(new Date()).format("HH:mm:ss"),
        date: this.$moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
      });
      //websocket发送消息
      this.websocket.send(message);
    },

    addNewMessage() {
      setTimeout(() => {
        this.messages = [
          ...this.messages,
          {
            _id: this.messages.length,
            content: "NEW MESSAGE",
            senderId: "1234",
            username: "calf",
            timestamp: this.$moment(new Date()).format("HH:mm:ss"),
            date: this.$moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
          },
        ];
      }, 2000);
    },
    closeDialog() {
      this.$emit("update:dialog", false);
    },
  },
  mounted() {
    this.initWebSocket();
  },

  beforeDestroy() {
    if (this.websocket) {
      this.websocket.close();
    }
  },
};
</script>

<style lang="scss">
body {
  font-family: "Quicksand", sans-serif;
}
</style>
