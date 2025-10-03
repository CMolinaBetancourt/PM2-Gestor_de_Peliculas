const path = require("path"); 
const webpack = require("webpack");

module.exports = {
  entry: "./scripts/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  mode: "production",

  plugins: [
    new webpack.DefinePlugin({

      "process.env.BACKDEPLOY": JSON.stringify(process.env.BACKDEPLOY || "")
    })
  ]
};