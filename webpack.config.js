var path = require('path');

module.exports = {
    entry: "./app/assets/scripts/app.js",
    output: {
        path: path.resolve(__dirname, "./app/temp/scripts"),
        filename: "App-bundeled.js"
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                },
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
}