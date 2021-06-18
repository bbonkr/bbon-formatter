const webpack = require('webpack');
const path = require('path');

const environmentName = process.env.NODE_ENV || 'development';

const isDevelpoment = () => {
    return environmentName !== 'production';
};

module.exports = {
    mode: isDevelpoment() ? 'development' : environmentName,
    devtool: isDevelpoment() ? 'inline-source-map' : 'hidden-source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    entry: {
        index: path.resolve('src/index'),
    },
    module: {
        rules: [
            {
                test: /\.m?js/,
                resolve: {
                    fullySpecified: false,
                },
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: ['ts-loader'],
            },
        ],
    },
    plugins: [new webpack.LoaderOptionsPlugin({ dev: isDevelpoment() })],
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
    },
};
