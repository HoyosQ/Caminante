<script setup>
import valle from '../recursos/imagenes/valle.jpg';
const fondo = document.getElementsByTagName('body');

fondo.src = valle;
</script>

<template>
  <body>
    <div id="menuP"></div>
    <div id="principal"></div>
  </body>
</template>

<style lang="scss" scoped>
@font-face {
  font-family: kiwi;
  src: url(/fuentes/KiwiSoda.ttf);
}

body {
  font-family: kiwi;
  width: 100vw;
  height: 100vh;
}

#menuP {
  background-color: brown;
  width: 450px;
  height: 1080px;
}
</style>
