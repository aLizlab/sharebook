import { resolve } from 'path'

export default {
  alias: {
    '~': resolve(__dirname, ''),
    '@': resolve(__dirname, 'src'),
    '@@types': resolve(__dirname, 'src/@types'),
    '@@utils': resolve(__dirname, 'src/@utils'),
    '@assets': resolve(__dirname, 'src/assets'),
    '@components': resolve(__dirname, 'src/components'),
    '@content': resolve(__dirname, 'src/content'),
    '@layouts': resolve(__dirname, 'src/layouts'),
    '@pages': resolve(__dirname, 'src/pages'),
    '@plugins': resolve(__dirname, 'src/plugins'),
    '@static': resolve(__dirname, 'src/static'),
    '@store': resolve(__dirname, 'src/store'),
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })

    return {
      htmlAttrs: i18nHead.htmlAttrs,
      title: 'ShareBook',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'msapplication-square70x70logo',
          content: '/imgs/icons/site-tile-70x70.png',
        },
        {
          name: 'msapplication-square150x150logo',
          content: '/imgs/icons/site-tile-150x150.png',
        },
        {
          name: 'msapplication-wide310x310logo',
          content: '/imgs/icons/site-tile-310x150.png',
        },
        {
          name: 'msapplication-square310x310logo',
          content: '/imgs/icons/site-tile-310x310.png',
        },
        { name: 'msapplication-TileColor', content: '#ffffff' },

        {
          hid: 'description',
          name: 'description',
          content: 'Share our study for everyone!',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://sharebook.app/',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'ShareBook | aLiz',
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: 'https://sharebook.app/ogp.png',
        },
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: 'ShareBook',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Share our study for everyone!',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: true,
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap',
        },

        {
          rel: 'shortcut icon',
          type: 'image/vnd.microsoft.icon',
          href: '/favicon.ico',
        },
        { rel: 'icon', type: 'image/vnd.microsoft.icon', href: '/favicon.ico' },
        {
          rel: 'apple-touch-icon',
          size: '57x57',
          href: '/img/icon/apple-touch-icon-57x57.png',
        },
        {
          rel: 'apple-touch-icon',
          size: '60x60',
          href: '/img/icon/apple-touch-icon-60x60.png',
        },
        {
          rel: 'apple-touch-icon',
          size: '72x72',
          href: '/img/icon/apple-touch-icon-72x72.png',
        },
        {
          rel: 'apple-touch-icon',
          size: '76x76',
          href: '/img/icon/apple-touch-icon-76x76.png',
        },
        {
          rel: 'apple-touch-icon',
          size: '114x114',
          href: '/img/icon/apple-touch-icon-114x114.png',
        },
        {
          rel: 'apple-touch-icon',
          size: '120x120',
          href: '/img/icon/apple-touch-icon-120x120.png',
        },
        {
          rel: 'apple-touch-icon',
          size: '144x144',
          href: '/img/icon/apple-touch-icon-144x144.png',
        },
        {
          rel: 'apple-touch-icon',
          size: '152x152',
          href: '/img/icon/apple-touch-icon-152x152.png',
        },
        {
          rel: 'apple-touch-icon',
          size: '180x180',
          href: '/img/icon/apple-touch-icon-180x180.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          size: '36x36',
          href: '/img/icon/android-chrome-36x36.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          size: '48x48',
          href: '/img/icon/android-chrome-48x48.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          size: '72x72',
          href: '/img/icon/android-chrome-72x72.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          size: '96x96',
          href: '/img/icon/android-chrome-96x96.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          size: '128x128',
          href: '/img/icon/android-chrome-128x128.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          size: '144x144',
          href: '/img/icon/android-chrome-144x144.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          size: '152x152',
          href: '/img/icon/android-chrome-152x152.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          size: '192x192',
          href: '/img/icon/android-chrome-192x192.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          size: '256x256',
          href: '/img/icon/android-chrome-256x256.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          size: '384x384',
          href: '/img/icon/android-chrome-384x384.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          size: '512x512',
          href: '/img/icon/android-chrome-512x512.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          size: '36x36',
          href: '/img/icon/icon-36x36.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          size: '48x48',
          href: '/img/icon/icon-48x48.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          size: '72x72',
          href: '/img/icon/icon-72x72.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          size: '96x96',
          href: '/img/icon/icon-96x96.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          size: '128x128',
          href: '/img/icon/icon-128x128.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          size: '144x144',
          href: '/img/icon/icon-144x144.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          size: '152x152',
          href: '/img/icon/icon-152x152.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          size: '160x160',
          href: '/img/icon/icon-160x160.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          size: '192x192',
          href: '/img/icon/icon-192x192.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          size: '196x196',
          href: '/img/icon/icon-196x196.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          size: '256x256',
          href: '/img/icon/icon-256x256.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          size: '384x384',
          href: '/img/icon/icon-384x384.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          size: '512x512',
          href: '/img/icon/icon-512x512.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          size: '16x16',
          href: '/img/icon/icon-16x16.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          size: '24x24',
          href: '/img/icon/icon-24x24.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          size: '32x32',
          href: '/img/icon/icon-32x32.png',
        },
        { rel: 'manifest', href: '/manifest.json' },
      ],
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['destyle.css', '@assets/scss/common/index.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [{ path: '@components/parts', extensions: ['vue'] }],

  env: {
    npm_package_homepage:
      process.env.npm_package_homepage ||
      'https://github.com/aLizlab/sharebook',
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxt/content',
  ],

  styleResources: {
    scss: ['@assets/scss/mixin/index.scss', '@assets/scss/variable/index.scss'],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'ja',
    },
  },

  i18n: {
    locales: [
      { code: 'ja', name: '日本語', iso: 'ja-JP' },
      // { code: 'en', name: 'English', iso: 'en-US' },
    ],
    defaultLocale: 'ja',
  },

  image: {
    domains: ['https://sharebook.app', 'https://nuxtjs.org'],
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  srcDir: 'src/',

  router: {
    trailingSlash: true,
  },
}
