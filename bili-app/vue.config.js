//vue-cli配置文件
module.exports = {
    devServer: {
        proxy: {
            //配置代理
            "/x": { //凡是以/x开头的请求进行配置代理
                target: "https://api.bilibili.com",
                onProxyReq(proxyReq, req, res) {
                    proxyReq.setHeader('origin', 'https://www.bilibili.com');
                    proxyReq.setHeader('referer', 'https://www.bilibili.com/');
                }
            }
        }
    }
}