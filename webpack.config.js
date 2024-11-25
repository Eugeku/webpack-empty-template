const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: path.resolve(__dirname, './src/index.js')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist',
        clean: true
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, './public'),
        },
        client: {
            overlay: true
        },
        open: true, // Automatically opens the browser
        hot: true, // Enables hot module replacement
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
            inject: 'head', // Ensures scripts are injected in the heaD
        })
    ],
    mode: 'development', // Explicitly specify development mode
};
