module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-tech-book',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** modules
  */
  modules: [
    '@nuxtjs/axios'
  ],
  /*
  ** modules
  */
  plugins: [
    '~/plugins/axios',
    '~/plugins/logger'
  ],
  /*
  ** Middleware
  */
  router: {
    middleware: ['auth', 'redirector'],
  },
  /*
  ** Middleware
  */
  head: {
    title: 'HELLO, Nuxt Web APP :D',
    htmlAttrs: {
      lang: 'ja'
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
