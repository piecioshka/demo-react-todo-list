const path = require('path');
const root = __dirname;

module.exports = {
    mode: "development",

    devtool: "inline-source-map",

    entry: path.join(root, 'src', 'scripts', 'main.jsx'),

    output: {
        filename: 'bundle.js',
        path: path.join(root, 'dist')
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
        rules: [
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            { test: /\.tsx?$/, loader: "ts-loader" },
            { test: /\.jsx?$/, loader: "babel-loader" },
            { test: /\.html$/, loader: "file-loader",
                options: { name: '[name].[ext]' }
            },
        ]
    }
};
