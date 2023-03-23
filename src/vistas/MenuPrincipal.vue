<script setup>
import { ref } from 'vue';
import Menu from '../componentes/MenuPrincipal/Menu.vue';
import Principal from '../componentes/MenuPrincipal/Principal.vue';
import GuardaEscobas from '../componentes/GuardaEscobas.vue';

const vista = ref('Sobre Mi');
</script>

<template>
  <div class="MenuPrincipal">
    <h1>El Camino se divide...</h1>
    <Menu :cambiarVista="cambiarVista" />
    <Principal :vista="vista" />
    <GuardaEscobas />
  </div>
</template>

<style lang="scss" scoped>
@import '../../recursos/scss/constantes';
</style>
