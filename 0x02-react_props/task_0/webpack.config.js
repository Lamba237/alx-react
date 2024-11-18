const path = require('path');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './dashboard/src/index.js'),
    },

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dashboard/dist'),
    },
    devServer: {
        static: './dashboard/dist',
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[text]',
                            outputPath: 'images',
                        },
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                           mozjpeg: {
                            progressive: true,
                            quality: 65
                           },
                           optipng: {
                            enabled: false
                           },
                           pngquant: {
                            quality: [0.65, 0.90],
                            speed: 4
                           },
                           gifsicle: {
                            interlaced: false,
                           },
                           webp: {
                            quality: 75
                           }
                        }
                    }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            },
        ]
    },
    devtool: 'inline-source-map',
    mode: 'development'
};