<script setup>
import Escena from '../componentes/Transición/Escena.vue';
</script>

<template>
  <div class="transicion">
    <h1 class="cabeza">El camino sigue...</h1>
    <RouterLink to="/menu-principal">
      <img id="botonContinuar" src="/recursos/imagenes/Boton2-0s.png" />
      <span id="textoBoton"> Adentrarse </span>
    </RouterLink>
  </div>
  <Escena />
</template>

<style lang="scss" scoped>
@import '../../recursos/scss/constantes';

.transicion {
  background-color: #2b2d42;
  position: absolute;
  width: 100vw;
  height: 100vh;
}

.cabeza {
  font-family: 'Alquimia';
  color: #cef8f5;
  position: absolute;
  bottom: 0;
  right: 1em;
  opacity: 50%;
}

#textoBoton {
  font-family: 'Alquimia';
  font-size: 3em;
  color: #cef8f5;
  position: absolute;
  top: 0.75em;
  left: 0.25em;
}
</style>
