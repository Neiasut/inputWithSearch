const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => {

    return {
        //target: 'web',
        entry: {
            inputWithSearch: path.resolve(__dirname, '../src/js/inputWithSearch.js')
        },
        output: {
            filename: '[name].js',
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
                },
                {
                    test: /\.(png|jpg|gif)$/i,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8192
                            }
                        }
                    ]
                }
            ]   
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '../css/inputWithSearch.css',
            })
        ]
    };
};