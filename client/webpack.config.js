const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");
const { InjectManifest } = require("workbox-webpack-plugin");

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: "development",
    entry: {
      main: "./src/js/index.js",
      install: "./src/js/install.js",
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "index.html",
      }),

      // Configure WebpackPwaManifest plugin for manifest file
      new WebpackPwaManifest({
        name: "Text Editor",
        short_name: "TE",
        description: "Text Editor App",
        background_color: "#ffffff",
        theme_color: "#000000",
        icons: [
          {
            src: path.resolve("./src/images/logo.png"), // Replace with your icon path
            sizes: [96, 128, 192, 256, 384, 512],
          },
        ],
      }),

      // Configure InjectManifest plugin for service worker
      new InjectManifest({
        swSrc: "./src-sw.js", // Replace with your service worker script path
        swDest: "src-sw.js",
      }),
    ],

    module: {
      rules: [],
    },
  };
};