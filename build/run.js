const config = require('./webpack.config')
const webpack = require('webpack')
const compiler = webpack(config)

compiler.run()
