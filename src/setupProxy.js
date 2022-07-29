const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/account/',
    createProxyMiddleware({
      target: 'https://moodpalette.b-cdn.net/',
      changeOrigin: true,
    }),
  );
};
