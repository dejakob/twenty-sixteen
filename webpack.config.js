module.exports = {
    entry: './src/index.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                }
            },
            {
                test: /\.svg$/,
                loader: 'react-svg',
                query: {
                    jsx: true
                }
            }
        ]
    },
    output: {
        filename: './dist/twenty-sixteen.js'
    }
}
