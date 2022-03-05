const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["css-loader"],
      },
    ],
  },
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "./src/"),
      "@core": path.resolve(__dirname, "./src/core/"),
      "@containers": path.resolve(__dirname, "./src/containers/"),
      "@components": path.resolve(__dirname, "./src/components/"),
      "@context": path.resolve(__dirname, "./src/context"),
      "@api": path.resolve(__dirname, "./src/core/api/"),
      "@data": path.resolve(__dirname, "./src/core/data/"),
      "@interface": path.resolve(__dirname, "./src/core/interface/"),
      "@hooks": path.resolve(__dirname, "./src/hooks/"),
      "@pages": path.resolve(__dirname, "./src/pagaes/"),
      "@css": path.resolve(__dirname, "./src/css/"),
      "@utils": path.resolve(__dirname, "./src/utils/"),
    },
    extensions: [".ts", ".js"],
  },
  // HthmlWebpackPlugin: generate index.html which is including bundle.js using template
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
  // webpack devserver config
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 9000,
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./public"),
    clean: true,
  },
};
