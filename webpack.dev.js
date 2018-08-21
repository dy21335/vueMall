const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        open: true,
        // contentBase: path.join(__dirname, "./"),
        // contentBase: path.resolve(__dirname, '.'),
        inline: true,
        hot: true,
        host: '127.0.0.1',
        port:8088
        // publicPath: '/assests/'
},
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
});