var path = require('path');

module.exports = {
    devtool: "inline-source-map",
    entry: "./src/react/index.js",
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            use: [{
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                }
            }]
        }]
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "index.js"
    }
};