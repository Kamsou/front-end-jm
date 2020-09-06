<template>
<div class="b_img_texte">
  <!-- //////////// 1 ////////////-->
  <div class="wrapper">
    <div class="carousel">
      <div class="w_albums" v-for="album in albums.albums.edges[0].node" :key="album.id">
        <div class="condition_if">
          <div class="carousel" v-for="p in album.serieDimages" :key="p.id">
            <div class="container_img">
              <img @click="next" :src="p.sourceUrl" />
              <p>{{p.title}}</p>
              <div class="flex_mob_pag">
                  <div class="flex_us numbers">
                    <span>{{indexSlide + 1}}</span>
                    <span>—</span>
                    <span>{{albums.albums.edges[0].node.acfAlbums.serieDimages.length}}</span>
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
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- {{albums.albums.edges[0].node}} -->

  <!-- //////////// 2 ////////////-->
  <div  class="wrapper w_texte">
    <div class="carousel w_carousel">
      <div class="w_albums" v-for="album in albums.albums.edges[0].node" :key="album.id">
        <div class="condition_if">
          <div class="carousel w_l_carousel" v-for="p in album.serieDimages" :key="p.id">
              <div class="paragraph_description" v-html="p.description"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import gql from 'graphql-tag'

  export default {
    name: "Album",

    data() {
      return {
        slug: this.$route.params.slug,
        indexSlide: 0,
      };
    },

    mounted() {
      var self = this;
      window.addEventListener('keyup', function(event) {
        if (event.keyCode === 37) { 
          self.prev();
        } else if (event.keyCode === 39) {
          self.next();
        }
      })
    },
  
    methods: {
      prev() {
        if(this.indexSlide > 0) {
          this.indexSlide--

              let carousel = document.querySelector(".carousel");
              carousel.style.transform = `translateX(-${99.93 * this.indexSlide}%)`;
              let carousel2 = document.querySelector(".w_texte .w_carousel");
              carousel2.style.transform = `translateX(-${99.93 * this.indexSlide}%)`;


        } else {
          this.indexSlide = this.albums.albums.edges[0].node.acfAlbums.serieDimages.length - 1;
              let carousel = document.querySelector(".carousel");
              carousel.style.transform = `translateX(-${99.93 * this.indexSlide}%)`;
              let carousel2 = document.querySelector(".w_texte .w_carousel");
              carousel2.style.transform = `translateX(-${99.93 * this.indexSlide}%)`;

        }
        
      },

      next() {
        if( this.indexSlide + 1 === this.albums.albums.edges[0].node.acfAlbums.serieDimages.length) {
          this.indexSlide = 0;

              let carousel = document.querySelector(".carousel");
              carousel.style.transform = `translateX(-${99.93 * this.indexSlide}%)`;
              let carousel2 = document.querySelector(".w_texte .w_carousel");
              carousel2.style.transform = `translateX(-${99.93 * this.indexSlide}%)`;


        } else {
          this.indexSlide++
              let carousel = document.querySelector(".carousel");
              carousel.style.transform = `translateX(-${99.93 * this.indexSlide}%)`;
               let carousel2 = document.querySelector(".w_texte .w_carousel");
              carousel2.style.transform = `translateX(-${99.93 * this.indexSlide}%)`;

        }
      }
    },

  

    async asyncData({ $graphql, params }) {
      const query = /* GraphQL */ `
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
                    description
                  } 
                }
                }
              }
            }
        }
      `;
      const variables = { slug: params.slug };
      const albums = await $graphql.request(query, variables);
      return { albums };
    },
  }
</script>

<style lang="scss" scoped>

  .b_img_texte {
    display: flex;

    .wrapper, .writting {
      width: 50%;
    }
  }

  .carousel {
    display: grid;
    width: 35.8vw;
    height: 100%;
    left: -0.55vw;
    position: relative;
    touch-action: none;
    
    .container_img {
      img {
        width: 100%;
        height: auto;
        transform:scale(1); 
        -webkit-transform:scale(1); 
        -moz-transform:scale(1); 
        -ms-transform:scale(1);
        -o-transform:scale(1); 
      }
    }
    p {
      display: flex;
      justify-content: flex-end;
      margin: 1vw 10px 0 0;
    }
  }

  

  .wrapper {
    overflow: hidden;
    max-width: 34.6vw;
    margin: 2.778vw 2vw 1.778vw 11vw;
  }

  .writting {
    margin: 2.778vw 5vw 1.778vw 5vw;
  }

  .condition_if {
    display: flex;
  }

  /* .flex_mob_pag {
    max-width: 34.722vw;
    margin: 0 0 0 0.778vw;

    .title_picture {
      display: flex;
      justify-content: flex-end;
    }
  } */

  .flex_mob_pag {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
  }

  .numbers {
    font-size: 10px;
    margin-left: 20px;
  }

  /* .prev,
  .next {
    cursor: pointer;
    position: absolute;
    top: 20.833vw;
    width: auto;
    padding: 16px;
    color: black;
    font-weight: bold;
    font-size: 25px; */
    /* transition: 0.7s ease; */
    /* border-radius: 0 4px 4px 0;
    text-decoration: none;

    svg {
      width: 1.389vw;
      height: 2.778vw;
    }
  } */
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
    width: 1.389vw;
    height: 1.278vw;
    }
  }

 .next {
    right: 0;
  }
  .prev {
    left: 0;
  }
  /* .next {
    right: 20.833vw;
  }
  .prev {
    left: 24.306vw;
  } */

  .pagination {
    /* width: 70%; */
    /* display: none; */
    width: 55%;
    display: inherit;
  }

  .w_texte {
    margin: 2.778vw 2vw 1.778vw 5vw;
  }

  .w_carousel {
    display: flex;
  }

  .w_l_carousel {
    left: 0.6vw;
  }

  .paragraph_description {
    width: 90%;
  }

/*$$$$$$$$$$$$$$$$$$ MOBILE $$$$$$$$$$$$$$$$$$$*/
@media screen and (max-width: 768px) {

  .b_img_texte {
    display: block;

    .wrapper, .writting {
      width: 100%;
    }
  }

  .carousel {
    width: 82vw;
    left: -0.2vw;
    
    p {
      margin: 1vw 3.5vw 0 0;
    }
    .container_img {
      width: 100%;

      img {
        width: 94%;
      }
    }
  }

  .wrapper {
    padding-top: 13.333vw;
    overflow: hidden;
    max-width: 83.722vw;
    height: auto;
    margin: 0 auto;
    /* margin: 2.778vw auto; */
  }


  .numbers {
    text-align: right;
    margin-left: 10px;
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

  .w_l_carousel {
    left: 2vw;
  }

}

/*$$$$$$$$$$$$$$$$$$ MOBILE $$$$$$$$$$$$$$$$$$$*/
@media screen and (max-width: 320px) {
  .carousel {
    left: -0.2vw;
    .container_img {
      width: 100%;
    }
  }
}

</style>