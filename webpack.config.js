const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require("terser-webpack-plugin")

//const isDev = process.env.NODE_ENV === 'development'

const babelOptions = preset => {

    const opts = {
        presets: [
            '@babel/preset-env',
        ],
        plugins: [
            '@babel/plugin-proposal-class-properties'
        ]
    }
    if(preset) {
        opts.presets.push(preset)
    }
    return opts
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: ['@babel/polyfill', './index.jsx',],
        analytics: './analytics.ts'
    },
    output: {
        filename: '[name].[contenthash].js', //naming pattern, unique bundle names
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js', '.json', '.png'],
        alias: {
            '@models': path.resolve(__dirname, 'src/models'),
            '@': path.resolve(__dirname, 'src'),
        }
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        minimize: true, //минимизируются все файлы в дист
        minimizer: [new TerserPlugin()]
    },
    devServer: {
        historyApiFallback: true,
        port: 4848,
        open: true,
    },
    devtool: 'source-map',
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            minify: {
                collapseWhitespace: true
            }
        }),
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [{
                from: path.resolve(__dirname, 'src/assets/favicon.ico'),
                to: path.resolve(__dirname, 'dist'),
            }]
        }),
        new MiniCSSExtractPlugin({
            filename: '[name].[contenthash].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCSSExtractPlugin.loader,
                        options: {}
                    }, 'css-loader'
                ]
            },
            {
                test: /\.less$/i,
                use: [
                    {
                        loader: MiniCSSExtractPlugin.loader,
                        options: {}
                    }, 'css-loader',
                    'less-loader',
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCSSExtractPlugin.loader,
                        options: {}
                    }, 'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.xml$/,
                use: ['xml-loader']
            },
            {
                test: /\.csv$/,
                use: ['csv-loader']
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: babelOptions()
                }
            },
            {
                test: /\.m?ts$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: babelOptions('@babel/preset-typescript')
                }
            },
            {
                test: /\.m?jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: babelOptions('@babel/preset-react')
                }
            }
        ]
    }
}