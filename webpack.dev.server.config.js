const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  // entry: {
  //   app: './server/main.ts'
  // },
  entry: ['webpack/hot/poll?100', './server/main.ts'],
  watch: true,
  mode: 'none',
  target: 'node',
  resolve: { extensions: ['.tsx', '.ts', '.js', '.json'] },
  externals: [
    nodeExternals({
      whitelist: [
        'webpack/hot/poll?100',
        /^(?!@nestjs\/(common|core|microservices)).*/
      ]
    })
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: 'ts-loader' },
      {
        // Mark files inside `@angular/core` as using SystemJS style dynamic imports.
        // Removing this will cause deprecation warnings to appear.
        test: /(\\|\/)@angular(\\|\/)core(\\|\/).+\.js$/,
        parser: { system: true }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.WatchIgnorePlugin([/\.js$/, /\.d\.ts$/]),
    new webpack.ContextReplacementPlugin(
      // fixes WARNING Critical dependency: the request of a dependency is an expression
      /((.+)?angular(\\|\/)core(.+)?|express(.+)?|(.+)?nestjs(\\|\/)(.+)?)?/,
      path.join(__dirname, 'src'), // location of your src
      {} // a map of your routes
    )
  ]
};
