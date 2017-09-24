const path = require('path')

require('dotenv').config({
  silent: true,
  path: process.env.NODE_ENV === 'production' ? '.prod.env' : '.dev.env'
})

module.exports = {
  build: {
    vendor: ['vuetify', 'jwt-decode', 'axios']
  },
  buildDir: 'dist/client',
  cache: true,
  css: [
    'normalize.css',
    { src: '~assets/style/app.styl', lang: 'styl' }
  ],
  env: {
    HOST: process.env.HOST,
    PORT: process.env.PORT
  },
  head: {
    title: 'muxi-resume',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: 'A online resume generation tool' }
    ]
  },
  loading: {
    color: '#a6a6a6'
  },
  plugins: ['~plugins/vuetify.js', '~plugins/vue-validator.js'],
  render: {
    static: {
      maxAge: '1y',
      setHeaders (res, path) {
        if (path.includes('sw.js')) {
          res.setHeader('Cache-Control', 'public, max-age=0')
        }
      }
    }
  },
  router: {
    middleware: ['ssr-cookie', 'https']
  },
  srcDir: path.resolve(__dirname, 'src', 'client')
}
