<template>
  <div class="w_menu" >
    <nuxt-link to="/">
      <h1>{{generalSettings.title}}</h1>
    </nuxt-link>
    <ul>
        <li v-for="menu in menus.edges[0].node.menuItems.nodes" :key="menu.id">
          <nuxt-link :to="`${menu.url}`">{{ menu.label }}</nuxt-link>
        </li>
    </ul>
  </div>
</template>

<script>
  import gql from 'graphql-tag';

  export default {


    
    apollo: {
      menus: gql`
        query MyQuery {
          menus {
            edges {
              node {
                id
                name
                menuItems {
                  nodes {
                    label
                    id
                    url
                  }
                }
              }
            }
          }
        },
      `,

      generalSettings: gql`
      query MyQuery {
        generalSettings {
          title
        }
      }
      `,
    }

  }
</script>

<style lang="scss" scoped>

.w_menu {
  display: flex;
  ul {
    display: flex;
    list-style: none;
    padding-left: 5vw;

    

    li {
      padding-right: 0.347vw;

      a {
        border-bottom: 1px solid transparent;
      }

      a:hover {
        border-color: #222222;
      }

      .nuxt-link-exact-active {
        border-color: #222222;
      }
    }
    li:not(:last-child) {
      &::after {
        content: '/';
        padding-left: 0.347vw;
      }
    }
  }
}

/*$$$$$$$$$$$$$$$$$$ MOBILE $$$$$$$$$$$$$$$$$$$*/
@media screen and (max-width: 768px) {
  .w_menu {
    display: block;
    ul {
      display: flex;
      list-style: none;
      padding-left: 0;
      padding-top: 8vw;

      

      li {
        padding-right: 0.347vw;

        a {
          border-bottom: 1px solid transparent;
        }

        a:hover {
          border-color: #222222;
        }

        .nuxt-link-exact-active {
          border-color: #222222;
        }
      }
      li:not(:last-child) {
        &::after {
          content: '/';
          padding-left: 0.347vw;
        }
      }
    }
  }
}
</style>