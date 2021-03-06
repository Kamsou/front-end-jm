// import axios from "axios"
// let dynamicRoutes = () => {
//   const routes = axios
//     .get("https://front-jeanmarques.dendeaproduction.com/wp-json/wp/v2/albums")
//     .then(res => {
//       return res.data.map(album => `work/${album.slug}`)
//     })
//   console.log(routes)
//   return routes
// }



export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Jean Marquès',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#000',
    height: '2px'
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/apollo',
    '@nuxt/components'
  ],

  apollo: {
    clientConfigs: {
      default: {
      httpEndpoint: `https://api.jeanmarques.fr/graphql`,
      }
    }
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    ['nuxt-graphql-request'],
    
  ],
  graphql: {
    /**
     * Your GraphQL endpoint (required)
     */
    endpoint: 'https://api.jeanmarques.fr/graphql',
 
    /**
     * Enable support for AST
     * default: false
     */
    AST: false,
 
    /**
     * Options
     * See: https://github.com/prisma-labs/graphql-request
     */
    options: {},
  },
  axios: {
    baseURL: `https://api.jeanmarques.fr/graphql`,
    debug: true
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  generate: {
    routes: [
      '/',
      '/work',
      '/info',
    ],
    // dynamicRoutes
  },
  publicRuntimeConfig: {},
  privateRuntimeConfig: {
    apiUrl: process.env.API_URL,
  }
}
