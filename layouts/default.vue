<template>
  <div class="w_app">
      <Menu/>
      <nuxt />
  </div>
</template>

<script>
  import Menu from '@/components/Menu.vue';

  export default {
    components: {
      Menu
    }
  }
</script>

<style>
html {
  font-family: serif, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  /* font-size: 0.972vw; */
  color: #222222;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  touch-action: none;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

h1 {
  font-size: 0.972vw;
  font-weight: normal;
  color: #222222;
}

.w_app {
  padding: 2.778vw 0 0 4.167vw;
}

a {
  text-decoration: none;
  color: #000;
}
/*$$$$$$$$$$$$$$$$$$ MOBILE $$$$$$$$$$$$$$$$$$$*/
@media screen and (max-width: 768px) {

  html, h1 {
    font-size: 3.733vw;
  }

  .w_app {
    padding: 10%;
  }

}
</style>
