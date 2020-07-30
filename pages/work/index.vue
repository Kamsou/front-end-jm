<template>
<div>
  <div class="w_bloc_albums">
    <div class="w_albums" v-for="album in albums.albums.nodes" :key="album.id">
    
      <nuxt-link :to="'/work/'+ album.slug">
      <div class="c_imgTitle" v-if="album.acfAlbums.imageDeCouverture !== null">
        <img class="image"  :src="album.acfAlbums.imageDeCouverture.mediaItemUrl"/>
        <p class="title">{{album.title}}</p>
      </div>
      </nuxt-link>
    </div>
  </div>
</div>
</template>

<script>


  export default {
    async asyncData({ $graphql, params }) {
      const query = /* GraphQL */ `
        query albums {
          albums {
            nodes {
              id
              title
              slug
              acfAlbums {
                imageDeCouverture {
                  mediaItemUrl
                }
              }
            }
          }
        }
      `;
      const albums = await $graphql.request(query);
      console.log(albums);
      return { albums };
    }
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
    padding-top: 5.333vw;
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