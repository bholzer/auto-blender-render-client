var path = require('path');

module.exports = {
    mode: "development",
    entry: [
        path.join(path.join(__dirname), 'index.js')
    ],
    output: {
        path: path.join(path.join(__dirname) + '/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:
                {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.scss$/,
                use:
                [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader" }
                ]
            }
        ]
    }
}