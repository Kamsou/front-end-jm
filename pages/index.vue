<template>
<div>
    <!-- <Articles /> -->
</div>
  
</template>

<script>
  import gql from 'graphql-tag';
  import page from '~/queries/getNav.gql';
  export default {


    
    apollo: {
  
      page: {
        query: page
      },


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
.test-enter-active, .test-leave-active {
  transition: opacity 2s ease-in-out;
}

.test-enter, .test-leave-to {
  opacity: 0;
}

.test-enter-to, .test-leave {
  opacity: 1;
}

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

  .logo_instagram {
    width: 10px;
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