<template>
<div>
    <Articles />
</div>
  
</template>

<script>
  import gql from 'graphql-tag';
  import page from '~/queries/getNav.gql';
  import Articles from '@/components/Articles.vue';

  export default {

    components: {
      Articles
    },

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



</style>