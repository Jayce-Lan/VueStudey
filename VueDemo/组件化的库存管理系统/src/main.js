import App from "./App.js"; //导入组件

new Vue({
    components: {
        App,    //注册组件
    },
    /*template: `<App/>`*/
    //可以写成如下形式
    render: (h) => h(App),
}).$mount("#app");          //.$mount() 挂载