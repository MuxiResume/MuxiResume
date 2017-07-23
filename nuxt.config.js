module.exports = {
  head: {
    title: 'Muxi云简历',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '云端简历生成工具' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/icon?family=Material+Icons' }
    ]
  },

  css: [
    'muse-ui/dist/muse-ui.css',
    'muse-ui/dist/theme-carbon.css',
    '~assets/css/main.css'
  ],

  loading: { color: '#3B8070' },

  plugins: ['~plugins/muse-ui']
}
