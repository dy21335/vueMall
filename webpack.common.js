const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var getHtmlConfig = function (name) {
    return {
        template : './src/view/' + name + '.html',
        filename : 'view/' + name + '.html',
        inject :true,
        hash : true,
        chunks : [name]
    }
}

module.exports = {
    optimization: {
        minimize:false,
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "common",
                    chunks: "all"
                }
            }
        }
    },
    entry: {
        'common': ['./src/common/index.js'],
        'index': ['./src/page/index/index.js'],
        'login': ['./src/page/login/index.js']
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/assests/'    //publicPath表示发布以后的文件存放路径，比如webpack-dev-server打包以后的文件存放路径，以及这文件里面html路径，以及html请求js，css等等资源的路径开头
    },
    plugins: [
        //html模版的处理
        new HtmlWebpackPlugin(getHtmlConfig('index')),
        new HtmlWebpackPlugin(getHtmlConfig('login'))
    ]
};