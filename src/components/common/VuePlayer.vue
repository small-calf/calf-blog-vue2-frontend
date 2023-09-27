<template>
    <div id="aplayer"></div>
</template>

<script>
import 'aplayer/dist/APlayer.min.css';
import APlayer from "aplayer";
export default {
  data() {
    return {
      audio: [
        // 歌曲列表
        {
          name: "Windy Hill", // 歌曲名字
          artist: "钢琴-羽肿", // 歌曲演唱者
          // 歌曲地址（这里用外链地址）
          url: "https://data.mp3-banana.pro/play-track/d33532303034b7303435b48c3733833000/54e7d980b0781aa72fede18248ba8c78/%E7%BE%BD%E5%A4%A9%20-%20%E6%99%B4%E5%A4%A9.mp3",
          cover:
            "http://imge.kugou.com/stdmusic/150/20170815/20170815070007812976.jpg", // 歌曲头像
          lrc: "", // 歌词
        },
        {
          name: "女儿情",
          artist: "古筝-付娜",
          url: "https://sharefs.ali.kugou.com/202110281338/150a7c708ed5e20a47e8a9b80cf1200a/G235/M00/0F/05/i4cBAF77vP2AFdNjAChBofqgQnw363.mp3",
          cover:
            "http://imge.kugou.com/stdmusic/150/20200606/20200606220631519630.jpg",
          lrc: "",
        },
        {
          name: "故郷の原風景",
          artist: "陶笛-犹豫的泥巴",
          url: "https://sharefs.ali.kugou.com/202110281310/bdb53444846cecd8d45a64e2aab3b6ca/G228/M0A/1B/13/xJQEAF9kx46AZ3IaAEjEvnEtWQw706.mp3",
          cover:
            "http://imge.kugou.com/stdmusic/150/20200812/20200812134914113741.jpg",
          lrc: "",
        },
        {
          name: "Windy Hill", // 歌曲名字
          artist: "钢琴-羽肿", // 歌曲演唱者
          // 歌曲地址（这里用外链地址）
          url: "https://sharefs.ali.kugou.com/202110281324/e793a5ebf43ef95bb75f64d07ef246e4/G167/M02/15/07/h5QEAF1KXo2ALzKrAEtAl_Oe_Fo659.mp3",
          cover:
            "http://imge.kugou.com/stdmusic/150/20170815/20170815070007812976.jpg", // 歌曲头像
          lrc: "", // 歌词
        },
        {
          name: "女儿情",
          artist: "古筝-付娜",
          url: "https://sharefs.ali.kugou.com/202110281338/150a7c708ed5e20a47e8a9b80cf1200a/G235/M00/0F/05/i4cBAF77vP2AFdNjAChBofqgQnw363.mp3",
          cover:
            "http://imge.kugou.com/stdmusic/150/20200606/20200606220631519630.jpg",
          lrc: "",
        },
        {
          name: "故郷の原風景",
          artist: "陶笛-犹豫的泥巴",
          url: "https://sharefs.ali.kugou.com/202110281310/bdb53444846cecd8d45a64e2aab3b6ca/G228/M0A/1B/13/xJQEAF9kx46AZ3IaAEjEvnEtWQw706.mp3",
          cover:
            "http://imge.kugou.com/stdmusic/150/20200812/20200812134914113741.jpg",
          lrc: "",
        },
        {
          name: "Windy Hill", // 歌曲名字
          artist: "钢琴-羽肿", // 歌曲演唱者
          // 歌曲地址（这里用外链地址）
          url: "https://sharefs.ali.kugou.com/202110281324/e793a5ebf43ef95bb75f64d07ef246e4/G167/M02/15/07/h5QEAF1KXo2ALzKrAEtAl_Oe_Fo659.mp3",
          cover:
            "http://imge.kugou.com/stdmusic/150/20170815/20170815070007812976.jpg", // 歌曲头像
          lrc: "", // 歌词
        },
        {
          name: "女儿情",
          artist: "古筝-付娜",
          url: "https://sharefs.ali.kugou.com/202110281338/150a7c708ed5e20a47e8a9b80cf1200a/G235/M00/0F/05/i4cBAF77vP2AFdNjAChBofqgQnw363.mp3",
          cover:
            "http://imge.kugou.com/stdmusic/150/20200606/20200606220631519630.jpg",
          lrc: "",
        },
        {
          name: "故郷の原風景",
          artist: "陶笛-犹豫的泥巴",
          url: "https://sharefs.ali.kugou.com/202110281310/bdb53444846cecd8d45a64e2aab3b6ca/G228/M0A/1B/13/xJQEAF9kx46AZ3IaAEjEvnEtWQw706.mp3",
          cover:
            "http://imge.kugou.com/stdmusic/150/20200812/20200812134914113741.jpg",
          lrc: "",
        },
        {
          name: "Windy Hill", // 歌曲名字
          artist: "钢琴-羽肿", // 歌曲演唱者
          // 歌曲地址（这里用外链地址）
          url: "https://sharefs.ali.kugou.com/202110281324/e793a5ebf43ef95bb75f64d07ef246e4/G167/M02/15/07/h5QEAF1KXo2ALzKrAEtAl_Oe_Fo659.mp3",
          cover:
            "http://imge.kugou.com/stdmusic/150/20170815/20170815070007812976.jpg", // 歌曲头像
          lrc: "", // 歌词
        },
        {
          name: "女儿情",
          artist: "古筝-付娜",
          url: "https://sharefs.ali.kugou.com/202110281338/150a7c708ed5e20a47e8a9b80cf1200a/G235/M00/0F/05/i4cBAF77vP2AFdNjAChBofqgQnw363.mp3",
          cover:
            "http://imge.kugou.com/stdmusic/150/20200606/20200606220631519630.jpg",
          lrc: "",
        },
        {
          name: "故郷の原風景",
          artist: "陶笛-犹豫的泥巴",
          url: "https://sharefs.ali.kugou.com/202110281310/bdb53444846cecd8d45a64e2aab3b6ca/G228/M0A/1B/13/xJQEAF9kx46AZ3IaAEjEvnEtWQw706.mp3",
          cover:
            "http://imge.kugou.com/stdmusic/150/20200812/20200812134914113741.jpg",
          lrc: "",
        },
      ],
      info: {
        fixed: false, // 不开启吸底模式
        listFolded: false, // 折叠歌曲列表
        autoplay: false, // 开启自动播放
        preload: "auto", // 自动预加载歌曲
        loop: "one", // 播放循环模式、all全部循环 one单曲循环 none只播放一次
        order: "list", //  播放模式，list列表播放, random随机播放
      },
    };
  },
  mounted() {
    // 初始化播放器
    this.initAudio();
  },
  methods: {
    initAudio() {
      // 创建一个音乐播放器实例，并挂载到DOM上，同时进行相关配置
      const ap = new APlayer({
        container: document.getElementById("aplayer"),
        audio: this.audio, // 音乐信息
        ...this.info, // 其他配置信息
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
