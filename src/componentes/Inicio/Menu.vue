<script setup>
import { defineProps } from 'vue';
defineProps({
  cambiarVista: Function,
});
</script>

<template>
  <div id="contenedor">
    <div id="contenedorTitulo">
      <h1 id="titulo">El Camino</h1>
      <img id="imagenTitulo" src="/recursos/imagenes/Boton1-0s.png" />
    </div>
    <img id="fondo" src="/recursos/imagenes/Menu.png" />
    <ul id="menu">
      <!--<li class="botones" @click="cambiarVista('Aventura')">
        <span id="textoAv">Aventura</span>
        <img class="pergaminos" id="botonAv" src="/recursos/imagenes/Boton2-0s.png" />
      </li>-->
      <li class="botones" id="botonSMi" @click="cambiarVista('Sobre Mi')">
        <span id="textoSMi">Sobre Mi</span>
        <img class="pergaminos" id="botonSMi" src="/recursos/imagenes/Boton3-0s.png" />
      </li>
      <li class="botones" id="botonPor" @click="cambiarVista('Portafolio')">
        <span id="textoPor">Portafolio</span>
        <img class="pergaminos" id="botonPor" src="/recursos/imagenes/Boton2-0s.png" />
      </li>
      <li class="botones" id="botonSAl" @click="cambiarVista('Sobre Alma')">
        <span id="textoSAl">Sobre Alma</span>
        <img class="pergaminos" id="botonSAl" src="/recursos/imagenes/Boton1-0s.png" />
      </li>
      <li class="botones" id="botonSMi" @click="cambiarVista('Creditos')">
        <span id="textoCre">Créditos</span>
        <img class="pergaminos" id="botonCre" src="/recursos/imagenes/Boton4-0s.png" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import '../../../recursos/scss/constantes';

#contenedor {
  width: 30vw;
  height: 100vh;
  border: none;
  position: sticky;
}

#fondo {
  position: absolute;
  top: 0;
  left: 0;
  width: 30vw;
  height: 100vh;
  height: auto;
  z-index: 1;
}

#contenedorTitulo {
  position: relative;
  width: 12vw;
  left: 9.9vw;
  top: 5.5vw;
  z-index: 2;
}
#titulo {
  position: absolute;
  top: 0.35em;
  left: 0.2em;
  font-family: 'Alquimia';
  font-size: 2.5vw;
  color: var(--tinta);
  z-index: 3;
}
#imagenTitulo {
  width: 10.5vw;
  height: 4vw;
  z-index: 2;
}

.botones {
  font-family: 'Alquimia';
  color: var(--tinta);
  padding: 0;
  border: none;
  background: none;
  position: relative;
}

#menu {
  position: absolute;
  list-style-type: none;
  top: 13vw;
  left: 5vw;
  font-size: 4vw;
  z-index: 3;
  cursor: pointer;

  li {
    color: var(--tinta);

    &:hover {
      span {
        color: var(--alma1);
      }
      .pergaminos {
      }
    }
  }
}

/*#botonAv {
  width: 20vw;
  z-index: 2;
}
#textoAv {
  position: absolute;
  top: 0.65em;
  left: 0.7em;
}
*/

#botonSMi {
  width: 20vw;
  z-index: 2;
}
#textoSMi {
  position: absolute;
  top: 0.85em;
  left: 0.7em;
}

#botonPor {
  width: 20vw;
  z-index: 2;
}
#textoPor {
  position: absolute;
  top: 0.85em;
  left: 0.7em;
}

#botonSAl {
  width: 20vw;
  z-index: 2;
}
#textoSAl {
  position: absolute;
  top: 0.8em;
  left: 0.45em;
}

#botonCre {
  width: 20vw;
  z-index: 2;
}
#textoCre {
  position: absolute;
  top: 0.6em;
  left: 0.9em;
}
</style>
