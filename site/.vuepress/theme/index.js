const path = require('path')
const merge = require('lodash/merge')

const defaultOptions = {
  purgecss: {
    enabled: true
  },
  config: path.join(__dirname, 'tailwind.config.js'),
  subDir: 'site'
}

// Theme API.
module.exports = (options, ctx) => {
  const { siteConfig, cwd, isProd } = ctx
  const { config, purgecss, subDir } = merge(defaultOptions, options)

  const plugins = [require('tailwindcss')(config), require('autoprefixer')]

  const workingDir = subDir ? `${cwd}/${subDir}` : cwd

  /**
   * Only run purge css in production.
   */
  if (isProd && purgecss.enabled) {
    const purgecss = require('@fullhuman/postcss-purgecss')({
      content: [
        `${workingDir}/.vuepresss/**/*.{vue,js,html,css,styl}`,
        `${workingDir}/**/*.md`
      ],

      // Include any special characters you're using in this regular expression
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    })
    plugins.push(purgecss)
  }

  /**
   * Merge in the site's purgecss config
   */
  siteConfig.postcss = merge(siteConfig.postcss || {}, { plugins })

  return {
    plugins: []
  }
}
