<script setup>
import F1 from './Proyectos/F1.vue';
</script>
<template>
  <div id="componentePortafolio">
    <ul id="contenidoPortafolio">
      <li class="textoPortafolio">
        <h2>Glitch</h2>
      </li>
      <li class="textoPortafolio">
        <h2>DataBending</h2>
      </li>
      <li class="textoPortafolio">
        <h2></h2>
      </li>
    </ul>
    <img id="contenedorPortafolio" src="/recursos/imagenes/Test.png" />
  </div>
</template>
<style lang="scss" scoped>
ul {
  list-style-type: none;
}
#componentePortafolio {
  position: relative;
}

#contenidoPortafolio {
  position: absolute;
  top: 0;
  left: 0.5em;
}
#contenedorPortafolio {
  width: 75em;
  height: 60em;
}
</style>
