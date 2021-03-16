export default {
    /**
     * @async 异步获取数据
     * @returns {Promise<void>}
     */
    async getChannels() {
        //远程获取数据
        //await 表示请求数据需要等待
        var resp = await fetch("/x/web-interface/web/channel/category/list");
        var data = await resp.json();
        // console.log(data.data.categories);

        return data.data.categories;
    },
};