module.exports = {
  devServer: {
    proxy: {
      "/api/": {
        target: "http://18.179.180.74:3000",
      }
    }
  }
};