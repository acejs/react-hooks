const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = function (mode) {
  return {
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, '../../dist'),
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json', '.less', '.css'],
    },
    module: {
      rules: [
        // less
        {
          test: /\.less$/,
          use: [
            mode === 'production'
              ? MiniCssExtractPlugin.loader
              : 'style-loader',
            'css-loader',
            'postcss-loader',
            {
              loader: 'less-loader',
            },
          ],
          exclude: /node_modules/,
        },
        // css
        {
          test: /\.css$/,
          use: [
            mode === 'production'
              ? MiniCssExtractPlugin.loader
              : 'style-loader',
            'css-loader',
          ],
        },
        {
          test: /\.tsx?$/,
          use: {
            loader: 'ts-loader',
            options: {
              happyPackMode: true, // 编译时 不进行类型检查
              configFile:
                mode === 'production'
                  ? path.resolve(__dirname, '../tsconfig/tsconfig.prod.json')
                  : path.resolve(__dirname, '../tsconfig/tsconfig.dev.json'),
            },
          },
          exclude: /node_modules/,
        },
        // img font
        {
          test: /\.(woff2?|eot|ttf|otf|png|jpe?g|gif|webp)(\?.*)?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10240,
                fallback: {
                  loader: 'file-loader',
                  options: {
                    name: 'img/[name].[hash:8].[ext]',
                  },
                },
              },
            },
          ],
        },
        // svg
        {
          test: /\.(svg)(\?.*)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'img/[name].[hash:8].[ext]',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '/css/[name].css',
      }),
    ],
  }
}
