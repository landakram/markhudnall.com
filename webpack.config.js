const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './resources/src/main.css',
  output: {
    path: __dirname + '/resources/public',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/main.css',
    }),
  ],
};

