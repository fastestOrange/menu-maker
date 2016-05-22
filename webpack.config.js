var path = require('path');

console.log(__dirname)

module.exports = {
  entry: {
    "menu-maker": "./restaurant-menu-maker/menu-maker/menu-maker.js",
    "home-page": "./restaurant-menu-maker/home-page/index.js"
  },
  output: {
    path: path.join(__dirname, "restaurant-menu-maker", "scripts"),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [{ 
      test: /\.handlebars$/, 
      loader: "handlebars-loader" 
    }]
  },
  watch: true
}