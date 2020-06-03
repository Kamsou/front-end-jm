<template>
  <div v-if="!$apollo.queries.albums.loading" class="w_bloc_albums">
    <div class="w_albums" v-for="album in albums.nodes" :key="album.id">
      <nuxt-link :to="'/work/'+ album.slug">
      <div class="c_imgTitle">
        <img class="image" :src="album.acfAlbums.imageDeCouverture.mediaItemUrl"/>
        <p class="title">{{album.title}}</p>
      </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>

import albums from '~/queries/getAlbums.gql';

  export default {
    apollo: {
      albums: {
        query: albums,
      }
    },
  }
</script>

<style lang="scss" scoped>

.w_bloc_albums {
  display: flex;

  .w_albums {
    padding-top: 3.389vw;
    /* padding-left: 2.083vw; */
    width: 25%;

    .image {
      width: 14.583vw;
    }
    .c_imgTitle {
      text-align: center;

      .title {
        padding-top: 1.042vw;
      }
    }
  }
}

/*$$$$$$$$$$$$$$$$$$ MOBILE $$$$$$$$$$$$$$$$$$$*/
@media screen and (max-width: 768px) {

.w_bloc_albums {
  display: block;

  .w_albums {
    padding-top: 13.333vw;
    /* padding-left: 2.083vw; */
    width: 100%;

    .image {
      width:100%;
    }
    .c_imgTitle {
      text-align: center;

      .title {
        padding-top: 4vw;
      }
    }
  }
}

}

</style>