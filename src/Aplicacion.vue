<script setup>
import { ref } from 'vue';
import Menu from './componentes/Inicio/Menu.vue';
import Principal from './componentes/Inicio/Principal.vue';

const vista = ref('Sobre Mi');
const fondo = document.getElementsByTagName('body');

/*const date = new Date();
console.log(date.getHours());
console.log(date.getMinutes());
*/

function cambiarVista(nuevaVista) {
  console.log(nuevaVista);
  vista.value = nuevaVista;
}
</script>

<template>
  <Menu :cambiarVista="cambiarVista" />
  <Principal :vista="vista" />
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

html,
body,
h1,
ul {
  margin: 0;
  padding: 0;
}
</style>
