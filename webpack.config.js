const path = require('path');
const dev = process.env.NODE_ENV == "development"
const LiveServer = require("live-server")
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

if (dev) {
    LiveServer.start({
        root: "./",
        file: "index.html"
    })
}

module.exports = {
    watch: dev,
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css?$/,
                use: ["style-loader", {
                    loader: "css-loader",
                    options: {
                        modules: true
                    }
                }],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx'],
        plugins: [new TsconfigPathsPlugin({/* options: see below */ })]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
};