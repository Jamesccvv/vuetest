const path = require('path');

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
        contentBase:'src'
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),

        new htmlWebpackPlugin({
            template:path.join(__dirname,'index.html'),// 指定
            //filename:'index1.html' // 生成内存中的
            filename:'index.html' // 生成内存中的
        })
    ]
};