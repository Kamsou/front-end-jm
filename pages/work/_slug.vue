<template>
<div >

  <div  class="wrapper">
    <div class="carousel">
      <div class="w_albums" v-for="album in albums" :key="album.id">
        <div class="condition_if">
          <div class="carousel" v-for="p in album.serieDimages" :key="p.id">
            <img @click="next" :src="p.sourceUrl" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="flex_mob_pag">
    <div class="flex_us numbers">
      <span>{{indexSlide + 1}}</span>
      <span>—</span>
      <span>{{albums.acfAlbums.serieDimages.length}}</span>
    </div>

    <div class="pagination">
      <div>
        <a class="prev" @click="prev">
          <svg width="20px" height="40px" viewBox="0 0 50 80" xml:space="preserve">
            <polyline fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" points="
          45.63,75.8 0.375,38.087 45.63,0.375 "/>
          </svg>  
        </a>
        <a class="next" @click="next">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="40px" viewBox="0 0 50 80" xml:space="preserve">
            <polyline fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" points="
          0.375,0.375 45.63,38.087 0.375,75.8 "/>
          </svg>
        </a>
      </div>
    </div>
  </div>
  <!-- {{albums.edges[0].node.acfAlbums.serieDimages.length}} -->

</div>
</template>

<script>
import gql from 'graphql-tag'
// import albums from '~/queries/getSerie.gql';

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

              let carousel = document.querySelector(".carousel");
              carousel.style.transform = `translateX(-${99.93 * this.indexSlide}%)`;


        } else {
          this.indexSlide = this.albums.acfAlbums.serieDimages.length - 1;
              let carousel = document.querySelector(".carousel");
              carousel.style.transform = `translateX(-${99.93 * this.indexSlide}%)`;

        }
        
      },

      next() {
        if( this.indexSlide + 1 === this.albums.acfAlbums.serieDimages.length) {
          this.indexSlide = 0;

              let carousel = document.querySelector(".carousel");
              carousel.style.transform = `translateX(-${99.93 * this.indexSlide}%)`;


        } else {
          this.indexSlide++
              let carousel = document.querySelector(".carousel");
              carousel.style.transform = `translateX(-${99.93 * this.indexSlide}%)`;

        }
      }
    },
    

    apollo: {
      albums: {
        query: gql`
        query albums($slug: String!) {
          albums(where: {name: $slug }) {
              edges {
                node {
                  id
                  slug
                  acfAlbums {
                  serieDimages {
                    id
                    sourceUrl(size: MEDIUM_LARGE)
                    title
                  } 
                }
                }
              }
            }
        }
        `,
        prefetch: ({ route }) => {
          return {
            slug: route.params.slug
          }
        },
        variables() {
          return {
            slug: this.slug
          }
        },
        update(data) {
          console.log(data);
          return data.albums.edges[0].node
        }
      }
    },
  }
</script>

<style lang="scss" scoped>

  .carousel {
    display: flex;
    width: 36vw;
    height: 35vw;
    left: -0.3vw;
    position: relative;
    img {
      width: 100%;
      height: auto;
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

  .flex_mob_pag {
    max-width: 34.722vw;
    margin: 2.778vw auto;
  }

  .numbers {
    font-size: 10px;
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
    display: none;
  }

/*$$$$$$$$$$$$$$$$$$ MOBILE $$$$$$$$$$$$$$$$$$$*/
@media screen and (max-width: 768px) {

  .carousel {
    width: 86vw;
    height: 85vw;
  }

  .wrapper {
    padding-top: 13.333vw;
    overflow: hidden;
    max-width: 83.722vw;
    height: auto;
    /* margin: 2.778vw auto; */
  }


  .numbers {
    text-align: right;
    padding-right: 10px;
  }

  .prev,
  .next {
    cursor: pointer;
    position: relative;
    top: 0;
    width: auto;
    padding: 0px;
    color: black;
    font-weight: bold;
    font-size: 25px;
    /* transition: 0.7s ease; */
    border-radius: 0 4px 4px 0;
    text-decoration: none;

    svg {
    width: 5.389vw;
    height: 3.778vw;
    }
  }

  .next {
    right: 0;
  }
  .prev {
    left: 0;
  }

  .pagination {
    width: 50%;
    display: inherit;
  }

  .flex_mob_pag {
    display: flex;
    align-items: center;
    margin: 0;
  }

}


</style>