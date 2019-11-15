const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin =
    require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
var devMode = process.env.NODE_ENV !== 'production';
module.exports = {
    entry: './src/index.js',
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'dist')
    },

    devServer: {
        port: 8001,
        hot: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: true
        }
    },

    devtool: 'inline-source-map',

    module: {
        rules: [
            {
                test:/\.s?[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {loader: 'style-loader'},
                    {loader: 'css-loader',
                        options: {
                            modules: true
                        }},
                    {loader: 'sass-loader'}
                ]
            },
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"],
                            plugins: [
                                "@babel/plugin-transform-runtime",
                                "@babel/plugin-syntax-dynamic-import"
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({filename:'style.css'}),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default',
                    { discardComments: { removeAll: true } }],
            },
            canPrint: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ],

    mode: devMode ? 'development' : 'development'
    // mode: 'production'
};
