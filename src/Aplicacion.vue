<script setup>
/*const date = new Date();
console.log(date.getHours());
console.log(date.getMinutes());

function cambiarVista(nuevaVista) {
  console.log(nuevaVista);
  vista.value = nuevaVista;
}
*/
</script>

<template>
  <RouterView></RouterView>
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
h2,
h3,
li,
ul {
  margin: 0;
  padding: 0;
}
</style>
