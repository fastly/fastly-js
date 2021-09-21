const webpack = require("webpack");

module.exports = {
    mode: 'production',
    resolve: {
        extensions: ['.js', '.json'],
        enforceExtension: false,
    },
    target: 'node',
    plugins: [
        new webpack.DefinePlugin({ "global.GENTLY": false })
    ],
};