module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    plugins: ['transform-regenerator'],
                    presets: ['react', 'es2015', 'stage-0']
                }
            },
            {
                test: /\.svg$/,
                loader: 'svg-loader'
            }
        ]
    },
    output: {
        filename: './dist/twenty-sixteen.js'
    }
};
