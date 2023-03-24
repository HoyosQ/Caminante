<script setup>
import Aventura from '../componentes/Inicio/Aventura.vue';
</script>

<template>
  <div class="inicio">
    <h1 class="cabeza">Inicio de el camino...</h1>
    <Aventura />
  </div>
</template>

<style lang="scss" scoped>
@import '../../recursos/scss/constantes';

.cabeza {
  font-family: 'Alquimia';
  color: #cef8f5;
  position: absolute;
  bottom: 0;
  right: 1em;
  opacity: 50%;
}
</style>
