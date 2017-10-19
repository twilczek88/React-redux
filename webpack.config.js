const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require("path");

module.exports = {
    entry: ['whatwg-fetch', './scss/main.scss', './src/index.jsx'],
    output: {
        path: path.resolve("dist"),
        filename: 'index.js',
        publicPath: '/'
    },
    devServer:	{
        inline:	true,
        contentBase: './',
        historyApiFallback: true,
        port: 3001
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,

                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    query: {
                        presets: ['env', 'stage-0', 'react']
                    }
                }],
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [

                        {
                            loader: 'css-loader',
                            options: {
                                minimize: false,
                                modules: true,
                                importLoaders: 2,
                                localIdentName: '[name]__[local]___[hash:base64:6]',
                            }
                        },
                        // { loader: 'postcss-loader'},
                        { loader: 'autoprefixer-loader' },
                        { loader: 'sass-loader' }
                    ],
                }),
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin({
            filename: 'style.css',
            allChunks: true
        })
    ]
};
