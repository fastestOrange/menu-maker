var path = require('path');
var handlebars

module.exports = {
  entry: "./app.js",
  output: {
    filename: "bundle.js"
  },
  module: {
    loaders: [{ 
      test: /\.handlebars$/, 
      loader: "handlebars-loader" 
    }]
  },
  watch: true
}