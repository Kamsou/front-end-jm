<template>
<div>

  <div v-if="!$apollo.queries.albums.loading" class="wrapper">
    <div class="carousel">
      <div class="w_albums" v-for="album in albums.nodes" :key="album.id">
        <div class="condition_if" v-if="slug === album.slug">
          <div class="carousel" v-for="p in album.acfAlbums.serieDimages" :key="p.id">
            <img :src="p.mediaItemUrl" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="flex_us numbers">
    <span>{{indexSlide + 1}}</span>
    <span>—</span>
    <span>{{albums.nodes.length}}</span>
  </div>

<div class="pagination">
  <div>
    <a class="prev" @click="prev" href="">
      <svg width="20px" height="40px" viewBox="0 0 50 80" xml:space="preserve">
        <polyline fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" points="
      45.63,75.8 0.375,38.087 45.63,0.375 "/>
      </svg>  
    </a>
    <a class="next" @click="next" href="">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="40px" viewBox="0 0 50 80" xml:space="preserve">
        <polyline fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" points="
      0.375,0.375 45.63,38.087 0.375,75.8 "/>
      </svg>
    </a>
  </div>
</div>

</div>
</template>

<script>

import gql from 'graphql-tag';
import albums from '~/queries/getAlbums.gql';

  export default {
    name: "Album",

    data() {
      return {
        slug: this.$route.params.slug,
        indexSlide: 0,
      };
    },

    methods: {
      prev() {
        if(this.indexSlide > 0) {
          this.indexSlide--

           
          // MOVE CAROUSEL
            if (window.matchMedia("(max-width: 768px)").matches) {
            let carousel = document.querySelector(".carousel");
            carousel.style.transform = `translateX(-${100.2 * this.indexSlide}%)`;
            } else {
              let carousel = document.querySelector(".carousel");
              carousel.style.transform = `translateX(-${99.93 * this.indexSlide}%)`;
            }

        } else if(this.indexSlide + 1 === 1) {
          this.indexSlide = this.albums.nodes.length - 1;

          // MOVE CAROUSEL
            if (window.matchMedia("(max-width: 768px)").matches) {
            let carousel = document.querySelector(".carousel");
            carousel.style.transform = `translateX(-${100.2 * this.indexSlide}%)`;
            } else {
              let carousel = document.querySelector(".carousel");
              carousel.style.transform = `translateX(-${99.93 * this.indexSlide}%)`;
            }
        }
        
      },

      next() {
        if( this.indexSlide + 1 === this.albums.nodes.length) {
          this.indexSlide = 0;

           // MOVE CAROUSEL
            if (window.matchMedia("(max-width: 768px)").matches) {
            let carousel = document.querySelector(".carousel");
            carousel.style.transform = `translateX(-${100.2 * this.indexSlide}%)`;
            } else {
              let carousel = document.querySelector(".carousel");
              carousel.style.transform = `translateX(-${99.93 * this.indexSlide}%)`;
            }

        } else {
          this.indexSlide++

            // MOVE CAROUSEL
            if (window.matchMedia("(max-width: 768px)").matches) {
            let carousel = document.querySelector(".carousel");
            carousel.style.transform = `translateX(-${100.2 * this.indexSlide}%)`;
            } else {
              let carousel = document.querySelector(".carousel");
              carousel.style.transform = `translateX(-${99.93 * this.indexSlide}%)`;
            }
        }
      }
    },
    

    apollo: {
      albums: {
        query: albums,
      }
    },
  }
</script>

<style lang="scss" scoped>

  .carousel {

    img {
      width: 34.722vw;
    }
  }

  .wrapper {
    overflow: hidden;
    max-width: 34.722vw;
    margin: 2.778vw auto;
  }

  .condition_if {
    display: flex;
  }

  .numbers {
    text-align: center;
  }

  .prev,
  .next {
    cursor: pointer;
    position: absolute;
    top: 20.833vw;
    width: auto;
    padding: 16px;
    color: black;
    font-weight: bold;
    font-size: 25px;
    /* transition: 0.7s ease; */
    border-radius: 0 4px 4px 0;
    text-decoration: none;

    svg {
      width: 1.389vw;
      height: 2.778vw;
    }
  }

  .next {
    right: 20.833vw;
  }
  .prev {
    left: 24.306vw;
  }

  .pagination {
  width: 70%;
}


</style>