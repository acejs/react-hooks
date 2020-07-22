const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
  mode: 'production',
  devtool: 'none',
  entry: path.resolve(__dirname, '../../src/index.ts'),
  output: {
    libraryTarget: 'commonjs2',
  },
  externals: ['react'],
  optimization: {
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new CleanWebpackPlugin(),
    // 单独的进程进行类型检查
    new ForkTsCheckerWebpackPlugin({
      tsconfig: path.resolve(__dirname, '../tsconfig/tsconfig.prod.json'),
    }),
  ],
}
