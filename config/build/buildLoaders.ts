import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    const styleLoader = {
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `styles` nodes from JS strings
                isDev ? MiniCssExtractPlugin.loader : 'styles-options',
                // "css-loader",
                {
                    loader: "css-loader",
                    options: {
                        modules: {
                            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:8]' : '[hash:base64:8]'
                        },
                    }
                },
                "sass-loader",
            ],
        }

    const typeLoaders = {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }

    return [
        fileLoader,
        svgLoader,
        typeLoaders,
        styleLoader,
    ]
}