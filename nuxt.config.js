// import axios from "axios"
// let dynamicRoutes = () => {
//   const routes = axios
//     .get("http://front-jeanmarques.dendeaproduction.com/wp-json/wp/v2/albums")
//     .then(res => {
//       return res.data.map(album => `/${album.slug}`)
//     })
//   // console.log(routes)
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
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
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
      httpEndpoint: "https://front-jeanmarques.dendeaproduction.com/graphql",
      }
    }
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: 'https://front-jeanmarques.dendeaproduction.com/graphql',
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
    routes: function () {
      const uri = 'https://front-jeanmarques.dendeaproduction.com/graphql'
      const apolloFetch = createApolloFetch({ uri })
      const query = `
      {
        albums {
          edges {
            node {
              slug
            }
          }
        }
      }`
      return apolloFetch({ query }).then(result => {
        const { data } = result
        return data.posts.map(post => `work/${post.slug}`)
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
