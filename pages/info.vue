<template>
  
    <div class="content_infos" v-html="page.content"></div>
    
</template>

<script>

  import page from '~/queries/getInfos.gql';
  export default {
    
    apollo: {
      page: {
        query: page
      }
    },

  }
</script>

<style lang="scss" scoped>

.content_infos {
  padding-top: 2.917vw;
  font-size: 1.111vw;
}

</style>