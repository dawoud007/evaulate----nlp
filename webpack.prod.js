const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const HtmlWebPackPlugin = require("html-webpack-plugin")
const WorkboxPlugin = require('workbox-webpack-plugin');


module.exports = {
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",

            filename: "./index.html",


        }),
        new MiniCssExtractPlugin({ filename: "[name].css" }),
        new WorkboxPlugin.GenerateSW()
        
        
    ],

    output: {

        libraryTarget: 'var',


        library: 'Client'
    },
    mode: 'production',
    entry: './src/client/index.js',
   



    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,


                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            }
        ]
    },
    
}
