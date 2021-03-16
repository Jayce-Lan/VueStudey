import Vue from 'vue';  //当我们不声明文件夹的前提下，它会从node_modules下找到该文件依赖
import App from './App.vue';  //vue组件文件
import ChannelService from "./services/channel.js";

//获取数据
async function test() {
  var channels = await ChannelService.getChannels();
  console.log(channels);
}

test();


new Vue({
  render: h => h(App),
}).$mount('#app');
