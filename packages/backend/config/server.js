var nodemon = require('nodemon')
var path = require('path')
var webpack = require('webpack')
var webpackConfig = require("./webpack.config.dev.js")

// compile with webpack on the server
webpackConfig.watch = true
webpack(webpackConfig, () => {
  console.log('webpack compiled')
})

// @TODO: use an argument for this
// exit it automatically if you forget
setTimeout(function() {
  process.exit(1)
}, 1000000)

// wait until after webpack builds for the first time
// @TODO: should do file check, setInterval, clearInterval
setTimeout(function() {
  var dir = path.resolve(__dirname, "../")
  var bundle = path.join(dir, 'dist/main.bundle.js')
  console.log('connecting to built')
  nodemon(`-e "js json" ${bundle}`)
}, 5000)
