var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        main: [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            './src/index'
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public'),
        publicPath: 'http://localhost:8080/public/'
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:9090/',
                secure: false
            }
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: path.join(__dirname, 'src'),
                loader: 'react-hot!babel-loader'
            },
            {
                test:   /\.css$/,
                include: path.join(__dirname, 'src/styles'),
                loader: "style-loader!css-loader!postcss-loader"
            },
            {
                test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    }
};
