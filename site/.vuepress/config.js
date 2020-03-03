module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  plugins: [
    [
      'vuepress-plugin-clean-urls',
      {
        normalSuffix: '/',
        indexSuffix: '/',
        notFoundPath: '/404.html'
      }
    ]
  ]
}
