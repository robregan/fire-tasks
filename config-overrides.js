// config-overrides.js
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
        {
          from: 'node_modules/pdfjs-dist/es5/build/pdf.worker.js',
          to: 'static/js/pdf.worker.js',
        },
        {
          from: 'node_modules/pdfjs-dist/es5/build/pdf.worker.min.js',
          to: 'static/js/pdf.worker.min.js',
        },
      ],
    })
  )

  return config
}
