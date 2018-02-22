const htmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry:[
        __dirname + '/src/app,js'
    ],
    output:{
        path:__dirname + '/dist',
        filename:'js/[name].js',
        publicPath:''
    },
    module:{
        rules:[
            {test:/\.html$/,use:"vue-html"},

        ]
    },
    resolve:{
        moduleExtensions:['-loader'],
        alias:{
            'vue':"vue/dist/vue.js"
        }
    },
    plugins:[

    ]
}

module.exports = config;