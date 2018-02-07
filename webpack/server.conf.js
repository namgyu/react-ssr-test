var path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './server/index.js',
    output: {
        libraryTarget: 'commonjs',
        path: path.join(process.cwd(), 'dist'),
        filename: 'server.js',
    },
    target: 'node',
    externals: nodeExternals(),
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/es2015', '@babel/react']
                    }
                }       
            }
        ]
    }
};
