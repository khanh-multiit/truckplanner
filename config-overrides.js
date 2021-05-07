module.exports = {
  devServer(configFunction) {
    return (proxy, allowedHost) => {
      const config = configFunction(
        {
          ...proxy,
          '/api': {
            target: 'http://cargo.local',
            pathRewrite: {
              '^/api': '',
            },
            changeOrigin: true,
          },
        },
        allowedHost,
      );
      return config;
    };
  },
};
