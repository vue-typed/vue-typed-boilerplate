var path = require('path')
var webpack = require('webpack')
var outputFileName = 'bundle'

var config = {
  context: path.resolve(__dirname, './'),

  entry: ['./src/index.ts'],

  output: {
    // output to './dist' folder 
    path: './dist',

    // with filename
    filename: outputFileName + '.js',

    // mark /dist/ folder as a public path so index.html can reach it
    publicPath: '/dist/'
  },

  // webpack-dev-server config, see: https://webpack.github.io/docs/webpack-dev-server.html
  devServer: {
    contentBase: './',
    hot: true,
    inline: true,
    port: {{port}}
  },

  // http://webpack.github.io/docs/configuration.html#devtool
  devtool: '#eval-source-map',

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js'],
    alias: {
      'vue$': 'vue/dist/vue.js'
    }
  },

  module: {
    loaders: [
      { test: /\.html$/, loader: 'html' }
    ]
  },

  plugins: [
    // HMR issue, see: https://github.com/webpack/webpack/issues/1151
    new webpack.HotModuleReplacementPlugin()
  ]

}

// When use in production (npm run build)
if (process.env.NODE_ENV === 'production') {

  config.output.filename = outputFileName + '.min.js'
  
  // still need babel for production stage since uglifyJs not support es6
  config.module.loaders = (config.module.loaders || []).concat([
    { test: /\.ts(x?)$/, loader: 'babel?presets[]=es2015!ts' },
    { test: /\.js$/, loader: 'babel', query: { presets: ['es2015'] } }
  ])

  config.devtool = '#source-map'

  // https://vuejs.org/guide/deployment.html
  config.plugins = (config.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ])

} else {

  config.module.loaders = config.module.loaders.concat([
    { test: /\.ts(x?)$/, loader: 'ts' }
  ])

}


module.exports = config
