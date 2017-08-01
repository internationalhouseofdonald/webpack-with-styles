const path = require('path')

module.exports = {
    entry: "./src/js/index",
    output: {
        filename: 'bundle.js',
    // options related to how webpack emits results

        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader', 
                    'css-loader'
                ]
            }
        ]
    }
}


