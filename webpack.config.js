const path = require('path')

module.exports = {
    entry: "./src/js/index",
    output: {
        filename: 'bundle.js',
    // options related to how webpack emits results

        path: path.resolve(__dirname, "dist")
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader', 
                    'css-loader'
                ]
            },
            {
              test: /\.(woff|woff2|eot|ttf|otf)$/,
              use: [
                'file-loader'
              ]
            }
        ]
    }
}


