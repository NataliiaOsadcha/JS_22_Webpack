const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackDevConfig = require('./webpack.dev.js');
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});

const compiler = Webpack(webpackDevConfig);
const devServerOptions = { ...webpackDevConfig.devServer, open: true };
const server = new WebpackDevServer(devServerOptions, compiler);

const runServer = async () => {
  console.log('Starting server...');
  await server.start();
};

runServer();
