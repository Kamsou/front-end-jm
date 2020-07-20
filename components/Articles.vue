<template>
  <div v-if="!$apollo.queries.posts.loading">
    <div class="w_posts" v-for="post in posts.nodes" :key="post.id">
      <img v-if="post.acfArticles.image !== null" class="image" :src="post.acfArticles.image.mediaItemUrl"/>
      <div class="b_text">
        <p 
  
        class="title">
          {{post.title}}
        </p>
        <div 
        class="paragraph"
    
        v-html="post.acfArticles.text"></div>
      </div>
    </div>
  </div>
</template>

<script>

import posts from '~/queries/getPosts.gql';

  export default {
    apollo: {
      posts: {
        prefetch: true,
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

/*$$$$$$$$$$$$$$$$$$ MOBILE $$$$$$$$$$$$$$$$$$$*/
@media screen and (max-width: 768px) {

.w_posts {
  padding-top: 5.333vw;
  padding-left: 0;

  &:last-child {
    padding-bottom: 3.389vw;
  }

  .image {
    width: 100%;
  }
  .b_text {
    width: 100%;
    padding: 4vw 0;

    .title {
      padding-bottom: 0.694vw;
      font-size: 4vw !important;
    }
    .paragraph {
      font-size: 3vw !important;
    }
  }
}


}

</style>