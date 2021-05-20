const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: [
        path.resolve('assets', 'scripts', 'app.js'),
        path.resolve('assets', 'sass', 'main.css'),
    ],
    output: {
        path: path.resolve('static', 'assets'),
        filename: 'bundle.js',
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [{
                    loader: 'file-loader',
                }, ],
            },
        ],
    },
    plugins: [new MiniCssExtractPlugin()],
};