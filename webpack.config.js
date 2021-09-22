const webpack = require("webpack");
const path = require("path");

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    resolve: {
        extensions: ['.js', '.json'],
        enforceExtension: false,
    },
    target: 'node',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        library: "FastlyApi"
      },
    plugins: [
        new webpack.DefinePlugin({ "global.GENTLY": false })
    ],
};