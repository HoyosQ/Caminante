<script setup>
import valle from '../recursos/imagenes/valle.jpg';
import Menu from './componentes/Inicio/Menu.vue';
const fondo = document.getElementsByTagName('body');

fondo.src = valle;

const date = new Date();
console.log(date.getHours());
console.log(date.getMinutes());
</script>

<template>
  <body>
    <Menu></Menu>
    <div id="principal"></div>
  </body>
</template>

<style lang="scss">
@font-face {
  font-family: Kiwi;
  src: url(/fuentes/KiwiSoda.ttf);
}

@font-face {
  font-family: Alquimia;
  src: url(/fuentes/Alkhemikal.ttf);
}
</style>
