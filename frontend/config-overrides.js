const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = function override(config, env) {
  // Add the copy-webpack-plugin to the plugins array
  config.plugins.push(
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'node_modules/pdfjs-dist/cmaps/',
          to: 'static/js/cmaps/',
        },
      ],
    })
  )

  return config
}
