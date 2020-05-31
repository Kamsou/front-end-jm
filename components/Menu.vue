<template>
  <div class="w_menu" >
      <h1>{{generalSettings.title}}</h1>
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

    data() {
      return {
        menus: null,
        generalSettings: null,
      }
    },

    
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
    }
    li:not(:last-child) {
      &::after {
        content: '/';
      }
    }
  }
}

</style>