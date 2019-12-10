const HtmlWebPackPlugin=require("html-webpack-plugin");
const MomentLocalesPlugin=require('moment-locales-webpack-plugin');

module.exports={
    module:{
        rules:[
            {
                test: /\.html$/,
                use:[
                    {
                        loader:"html-loader",
                        options:{minimize:true}
                    }
                ]
            },
        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            template:"./src/index.html",
            filename:"./index.html",
        }),
        new MomentLocalesPlugin(),
        new MomentLocalesPlugin({
            localesToKeep:['es-us','ru'],
        }),
    ]
}
