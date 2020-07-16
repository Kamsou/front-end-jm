<template>
<div v-if="!$apollo.queries.page.loading">
    <div class="content_infos" v-html="page.content"></div>
</div>

</template>

<script>

  import page from '~/queries/getInfos.gql';
  export default {

    
    apollo: {
      page: {
        prefetch: true,
        query: page
      },
    },

  }
</script>

<style lang="scss" scoped>

.content_infos {
  padding-top: 2.917vw;
  font-size: 15px;
}

/*$$$$$$$$$$$$$$$$$$ MOBILE $$$$$$$$$$$$$$$$$$$*/
@media screen and (max-width: 768px) {
  .content_infos {
  padding-top: 9.917vw;
}
}

</style>