<script setup>
import { ref } from 'vue';
import Menu from '../componentes/MenuPrincipal/Menu.vue';
import Principal from '../componentes/MenuPrincipal/Principal.vue';
import GuardaEscobas from '../componentes/GuardaEscobas.vue';

function cambiarVista(nuevaVista) {
  //console.log(nuevaVista);
  vista.value = nuevaVista;
}

const vista = ref('Sobre Mi');
</script>

<template>
  <div class="MenuPrincipal">
    <!--<h1 class="cabeza">El Camino se divide...</h1>-->
    <Menu :cambiarVista="cambiarVista" />
    <Principal :vista="vista" />
    <GuardaEscobas />
  </div>
</template>

<style lang="scss" scoped>
@import '../../recursos/scss/constantes';

.cabeza {
  font-family: 'Alquimia';
  color: #cef8f5;
  position: absolute;
  bottom: 0;
  right: 0em;
  opacity: 50%;
}
</style>
