<script setup>
//import Aventura from './Vistas/Aventura.vue';
import SobreMI from './Vistas/SobreMI.vue';
import Portafolio from './Vistas/Portafolio.vue';
import SobreAlma from './Vistas/SobreAlma.vue';
import Creditos from './Vistas/Creditos.vue';
import { defineProps } from 'vue';
defineProps({
  vista: String,
});
</script>

<template>
  <img id="fondoPrincipal" :class="vista" src="/recursos/imagenes/FondoDia.png" />
  <div id="contenedorPrincipal">
    <div id="contenedorTitulo" :class="vista">
      <h1 id="tituloPrincipal" :class="vista">{{ vista }}</h1>
      <img id="imagenTitulo" :class="vista" src="/recursos/imagenes/Boton4-0s.png" />
    </div>
    <SobreMI v-if="vista === 'Sobre Mi'" />
    <Portafolio v-else-if="vista === 'Portafolio'" />
    <SobreAlma v-else-if="vista === 'Sobre Alma'" />
    <Creditos v-else-if="vista === 'Creditos'" />
  </div>
</template>

<style lang="scss" scoped>
@import '../../../recursos/scss/constantes';

#fondoPrincipal {
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  /*&.Aventura {
    animation: bounce 4s infinite alternate;
    animation-name: loquera;

    animation-timing-function: ease-in-out;
  }
  */
  &.Portafolio {
    filter: hue-rotate(270deg);
  }

  &.Alma {
    filter: invert(100%);
  }

  &.Creditos {
    filter: sepia(100%);
  }
}
#contenedorPrincipal {
  margin-left: 30vw;
  width: 70vw;
  height: 100vh;
  display: flex;
  position: absolute;
  top: 0;
  flex-direction: column;
  align-items: center;
}

#contenedorTitulo {
  position: relative;
  margin-top: 2.5em;
  &.Alma {
    width: 20vw;
  }
}
#tituloPrincipal {
  font-family: 'Alquimia';
  font-size: 5em;
  top: 0.1em;
  left: 0.35em;
  position: absolute;

  &.Portafolio {
    left: 0.55em;
  }
  &.Creditos {
    left: 0.55em;
  }
}

#imagenTitulo {
  width: 18vw;
  height: 12vh;

  &.Portafolio {
    width: 20vw;
  }
  &.Alma {
    width: 20vw;
  }
}

@keyframes Atardecer {
  from {
    filter: hue-rotate(0);
  }
  to {
    filter: hue-rotate(1280);
  }
}
</style>
