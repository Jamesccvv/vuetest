const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// 启用自动打包的第二种方式
const webpack = require('webpack');

// 内存中生成HTML 插件
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, './src/main.js'),//入口
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    devServer: {
        open: true,
        port: 3000,
        hot: true,
        //contentBase: 'src'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         drop_debugger: true,
        //     }
        // }),
        new htmlWebpackPlugin({
            template: path.join(__dirname, 'index.html'),// 指定
            //filename:'index1.html' // 生成内存中的
            filename: 'index.html', // 生成内存中的
            hash:true,
        })
    ],
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']},// 从右到左调用  loader 根据webpack版本不同 1可以不带其余的必须带
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            {test: /\.(jpg|png)$/, use: 'url-loader?limit=200'}, // 处理图片路径
            // 支持参数 什么时候转base64  &[hash:8]-name=[name].[ext] 保持原有的图片名，防止重复,连接个hash值也可以防止重复

            {test: /\.(ttf|eot|woff|woff2)$/, use: 'url-loader'}, // 处理字体
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.vue$/,use:['vue-loader'],exclude:/node_modules/}
        ]
    }
};