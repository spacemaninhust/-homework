// 此文件用于配置proxy
const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target : 'http://localhost:3001',
            changeOrigin : true,
        })
    );
};
