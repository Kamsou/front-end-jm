<template>
  <div v-if="!$apollo.queries.posts.loading">
    <div class="w_posts" v-for="post in posts.nodes" :key="post.id">
      <img class="image" :src="post.acfArticles.image.mediaItemUrl"/>
      <div class="b_text">
        <p class="title">{{post.title}}</p>
        <div v-html="post.excerpt"></div>
      </div>
    </div>
  </div>
</template>

<script>

import posts from '~/queries/getPosts.gql';

  export default {
    apollo: {
      posts: {
        query: posts
      }
    },
  }
</script>

<style lang="scss" scoped>

.w_posts {
  padding-top: 3.389vw;
  padding-left: 2.083vw;

  &:last-child {
    padding-bottom: 3.389vw;
  }

  .image {
    width: 27.778vw;
  }
  .b_text {
    width: 27.778vw;
    padding: 1.389vw 0;

    .title {
      padding-bottom: 0.694vw;
    }
  }
}

</style>