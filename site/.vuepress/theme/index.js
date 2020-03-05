const path = require('path')

// Theme API.
module.exports = (options, ctx) => {
  // const { themeConfig, siteConfig } = ctx

  return {
    plugins: [
      [
        '@silvanite/tailwind',
        {
          config: path.join(__dirname, 'tailwind.config.js')
        }
      ]
    ]
  }
}
