import path from "node:path";
import {fileURLToPath} from "node:url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    mode: 'development',
    entry: './src/app.js',
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        static: path.resolve(__dirname, 'public'),
        port: 8080,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new CopyPlugin({
            patterns: [
                {from: './src/templates', to: 'templates'},
                {from: './node_modules/@fortawesome/fontawesome-free/webfonts', to: 'webfonts'},
                {from: './src/images', to: 'images'},
                {from: './node_modules/@fortawesome/fontawesome-free/css/all.css', to: 'css'},
                {from: './node_modules/bootstrap/dist/css/bootstrap.css', to: 'css'},
                {from: './node_modules/bootstrap/dist/js/bootstrap.bundle.js', to: 'js'},
                {from: './node_modules/chart.js/dist/chart.js', to: 'js'},

            ],
        })
    ],
}





