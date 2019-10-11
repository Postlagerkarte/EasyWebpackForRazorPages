const mode = process.env.NODE_ENV || "development";

const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const entry = {
    "index": "./src/js/index.js"
};

const output = {
    filename: "[name].bundle.js",
    path: __dirname + "/wwwroot/dist",
    publicPath: "/dist/"
};

const _plugins = [
      new MiniCssExtractPlugin({
        filename: 'styles.css'
        })
    ]
;

const _module = {
    rules: [
        {
            test: /\.css$/,
            use: [{ loader: MiniCssExtractPlugin.loader },
            {
                loader: "css-loader",
                options: {

                }
            }]

        },
        {
            test: /.(jpg|jpeg|png|svg)$/,
            loader: 'file-loader',
            options: {
                name: 'img/[name].[ext]'
            }
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            loader: 'file-loader',
            options: {
                name: 'fonts/[name].[ext]'
            }
        }
    ]
};

module.exports = {
    entry,
    mode,
    plugins: _plugins,
    module: _module,
    output
};