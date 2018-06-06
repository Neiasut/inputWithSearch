const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = () => {

    return {
        //target: 'web',
        entry: path.resolve(__dirname, '../src/js/entry.js'),
        output: {
            filename: 'inputWithSearch.min.js',
            path: path.resolve(__dirname, '../dist/js/')
        },
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.s?[ac]ss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader',
                        'sass-loader',
                    ],
                }
            ]   
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '../css/inputWithSearch.min.css',
            }),
            new UglifyJsPlugin(),
            new OptimizeCssAssetsPlugin({})
        ]
    };
};