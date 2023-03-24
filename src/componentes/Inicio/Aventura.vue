<script setup></script>

<template>
  <img id="fondoPrincipal" src="/recursos/imagenes/Inicio.jpg" />
  <div id="contenedorPrincipal">
    <div id="contenedorTitulo">
      <img id="tituloPrincipal" src="/recursos/imagenes/Boton4-0s.png" />
      <h2 id="textoTitulo">El Camino</h2>
    </div>
    <div id="contenedorBoton">
      <RouterLink to="/Transicion">
        <img id="botonInicio" src="/recursos/imagenes/Boton3-0s.png" />
        <span id="textoBoton"> Iniciar trayecto </span>
      </RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../../recursos/scss/constantes';

html,
body,
h1,
h2,
h3,
div,
span {
  padding: 0;
  margin: 0;
}

#fondoPrincipal {
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

#contenedorPrincipal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#contenedorTitulo {
  position: relative;
  top: 1em;

  :hover {
    #textoTitulo {
      color: #cef8f5;
    }
  }
}

#tituloPrincipal {
  width: 45em;
  height: 15em;
}
#textoTitulo {
  font-family: 'Alquimia';
  font-size: 10em;
  position: absolute;
  top: 0.25em;
  left: 0.4em;
  color: #00aaaa;
}

#contenedorBoton {
  position: relative;
  top: 0.5em;
  :hover {
    #textoBoton {
      color: #676768;
    }
  }
}

#botonInicio {
  position: relative;
  width: 15em;
  height: 5em;
}

#textoBoton {
  font-family: 'Alquimia';
  font-size: 2em;
  color: #2b2d42;
  position: absolute;
  top: 1em;
  left: 1em;
}
</style>
