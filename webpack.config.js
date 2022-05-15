const path = require('path')
const MiniCssExtrctPlugin = require('mini-css-extract-plugin')

module.exports = (env) => {
    const isProduction = env.isProduction === 'production' ? true : false

    return {
        entry: './src/index.js',
        mode: isProduction ? 'production' : 'development',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'public')
        },
        plugins: [new MiniCssExtrctPlugin({
            filename: 'main.css'
        })],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react']
                        }
                    }
                },
                {
                    test: /\.s?css$/,
                    exclude: /node_modules/,
                    use: [
                        MiniCssExtrctPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                },
                {
                    test: /\.(jpe?g|png|gif|svg)$/i,
                    type: "asset",
                    exclude: /node_modules/,
                    use: [
                        'image-webpack-loader',
                        {
                            loader: 'image-webpack-loader',
                            options: {
                                gifsicle: {
                                    interlaced: false
                                },
                                optipng: {
                                    enabled: true
                                },
                                mozjpeg: {
                                    progressive: true
                                },
                                disable: true
                            }
                        }
                    ]
                }
            ]
        },
        devtool: isProduction ? 'source-map' : 'inline-cheap-source-map',
        devServer: {
            static: {
                directory: path.join(__dirname, 'public')
            },
            compress: true,
            historyApiFallback: true,
        }
    }
} 