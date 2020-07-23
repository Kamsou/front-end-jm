<template>
<div>
  <div v-if="$apollo.queries.albums.loading">
    <div class="loader">
      <div class="inner one"></div>
      <div class="inner two"></div>
      <div class="inner three"></div>
    </div>
  </div>
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
</div>
</template>

<script>

import albums from '~/queries/getAlbums.gql';

  export default {
    apollo: {
      albums: {
        prefetch: true,
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

.loader {
  position: absolute;
  top: calc(50% - 32px);
  left: calc(50% - 32px);
  width: 34px;
  height: 34px;
  border-radius: 50%;
  perspective: 800px;
}

.inner {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;  
}

.inner.one {
  left: 0%;
  top: 0%;
  animation: rotate-one 1s linear infinite;
  border-bottom: 3px solid #000;
}

.inner.two {
  right: 0%;
  top: 0%;
  animation: rotate-two 1s linear infinite;
  border-right: 3px solid #000;
}

.inner.three {
  right: 0%;
  bottom: 0%;
  animation: rotate-three 1s linear infinite;
  border-top: 3px solid #000;
}

@keyframes rotate-one {
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
}

@keyframes rotate-two {
  0% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
}

@keyframes rotate-three {
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
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