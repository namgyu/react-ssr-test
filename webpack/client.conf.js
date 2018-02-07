const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(process.cwd(), 'dist/build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                include: path.join(process.cwd(), 'src'),
                test: /\.js?$/,
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
