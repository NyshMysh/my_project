import {BuildOptions} from "./types/config";
import webpack from "webpack";
import path from "path";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {

    const {build, entry, html} = options.paths

    return {
        mode: options.mode,
        entry: entry,
        output: {
            filename: "[name].[contenthash].js",
            path: build,
            clean: true
        },
        plugins: buildPlugins(html),
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(),
        devtool: options.isDev ? 'inline-source-map' : undefined,
        devServer: options.isDev ? buildDevServer(options) : undefined,
    }
}