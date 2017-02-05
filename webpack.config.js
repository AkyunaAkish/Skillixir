const webpack = require('webpack');
const ENV = process.env.NODE_ENV;
const DEV = ENV === 'development';

const config = {
    entry: [
        './client/index.js'
    ],
    output: {
        path: `${__dirname}/dist/`,
        filename: 'bundle.js'
    },
    devtool: DEV ? 'source-map' : false,
    plugins: [],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules | bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-1']
            }
        }, {
            test: /\.s?css/,
            loaders: ['style-loader', 'css-loader', 'sass-loader'],
            exclude: /(node_modules | bower_components)/,
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './dist'
    }
};

if (!DEV) {
    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            mangle: false,
            compressor: {
                drop_console: true,
                warnings: false
            }
        })
    );
} else {
    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    );
};

module.exports = config;
