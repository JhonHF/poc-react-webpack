const HtmlWebpackPlugin = require("html-webpack-plugin");

const styledComponentsBabelPlugin = [
  "babel-plugin-styled-components",
  {
    ssr: false,
    displayName: true,
    minify: true,
    transpileTemplateLiterals: true,
  },
];

const babelLoader = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  resolve: {
    extensions: [".js", ".jsx"],
  },
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-react"],
      plugins: [styledComponentsBabelPlugin],
    },
  },
};

const imageLoader = {
  test: /\.(png|jpg|gif)$/,
  type: "asset/resource",
};

module.exports = {
  output: {
    filename: "[contenthash].js",
    assetModuleFilename: "assets/[hash][ext][query]",
  },
  module: {
    rules: [babelLoader, imageLoader],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      minify: "auto",
    }),
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};
