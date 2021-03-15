import Vue from 'vue';  //当我们不声明文件夹的前提下，它会从node_modules下找到该文件依赖
import App from './App.vue';  //vue组件文件

new Vue({
  render: h => h(App),
}).$mount('#app');
