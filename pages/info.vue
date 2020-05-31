<template>
<div v-if="!$apollo.queries.page.loading">
    <div class="content_infos" v-html="page.content"></div>
    
</div>

</template>

<script>

  import page from '~/queries/getInfos.gql';
  export default {

    data() {
        return {
          page: null
        }
      },
    
    apollo: {
      page: {
        query: page
      },
      
    },

  }
</script>

<style lang="scss" scoped>

.content_infos {
  padding-top: 2.917vw;
  font-size: 1.111vw;
}

</style>