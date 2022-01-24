const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
        analytics: './src/analytics.js'
    },
    output: {
        filename: '[name].[contenthash].js', //naming pattern, unique bundle names
        path: path.resolve(__dirname, 'dist')
    }
}