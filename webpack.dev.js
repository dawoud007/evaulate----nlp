const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


module.exports = {plugins: [
    new HtmlWebPackPlugin({
        template: "./src/client/views/index.html",
        filename: "./index.html",
    })



    ,
    new CleanWebpackPlugin({
      
        dry: true,
    
        verbose: true,
 
        cleanStaleWebpackAssets: true,



        protectWebpackAssets: false
    }),
   
],
    
    mode: 'development',

    devtool: 'source-map',
    output: {
        libraryTarget: 'var',

        
        library: 'Client'

    },
    entry: './src/client/index.js',
   




    stats: 'verbose',
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },



            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }
        ]
    },


    
}
