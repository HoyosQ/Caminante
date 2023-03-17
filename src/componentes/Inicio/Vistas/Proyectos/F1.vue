<script setup>
import { ref, onMounted } from 'vue';
const carro1 = ref(null);

onMounted(() => {});
</script>
<template>
  <div id="cabeza">
    <h1 id="titulo">Formula 1</h1>
  </div>
  <h2>Mercedes AMG</h2>
  <div class="contenedor1">
    <img id="carro1" ref="carro1" class="carros" src="." />
    <img id="piloto1" class="pilotos1" src="." />
    <img id="piloto2" class="pilotos2" src="." />
  </div>
  <h2>Red Bull Racing</h2>
  <div class="contenedor1">
    <img id="carro2" class="carros" src="." />
    <img id="piloto3" class="pilotos1" src="." />
    <img id="piloto4" class="pilotos2" src="." />
  </div>
  <h2>Scuderia Ferrari</h2>
  <div class="contenedor1">
    <img id="carro3" class="carros" src="." />
    <img id="piloto5" class="pilotos1" src="." />
    <img id="piloto6" class="pilotos2" src="." />
  </div>
  <h2>Aston Martin</h2>
  <div class="contenedor1">
    <img id="carro4" class="carros" src="." />
    <img id="piloto7" class="pilotos1" src="." />
    <img id="piloto8" class="pilotos2" src="." />
  </div>
</template>

<style lang="scss" scoped>
html {
  background: #343a40;
}

body {
  font-family: sans-serif;
  background-color: #660708;
  display: block;
  width: vw;
}
h1 {
  background-color: #540b0e;
  color: white;
  font-size: 30px;
}

h2 {
  background-color: #540b0e;
  color: #b1a7a6;
  font-size: 25px;
  padding-left: 5vw;
}

#titulo {
  color: white;
  display: block;
  margin: 2.5vw;
}

#cabeza {
  background-color: #540b0e;
}

.parrafo {
  color: gray;
}

.contenedor1 {
  background-color: black;
  width: 60vw;
  height: 60vw;
  margin-left: 5vw;
  position: grid;
}

.carros {
  width: 50vw;
  height: 25vw;
  margin: 5vw;
}
.pilotos1 {
  width: 20vw;
  height: 20vw;
  margin-top: 3vw;
  margin-left: 5vw;
}
.pilotos2 {
  width: 20vw;
  height: 20vw;
  margin-left: 10vw;
}
</style>
