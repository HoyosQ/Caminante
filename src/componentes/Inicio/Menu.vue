<script setup></script>

<template>
  <body>
    <div id="contenedor">
      <h1>El Camino</h1>
      <div id="menu">
        <button class="botones" id="botonAv"><a>Aventura</a></button>
        <button class="botones" id="botonSMi"><a>Sobre Mi</a></button>
        <button class="botones"><a>Sobre Alma</a></button>
        <button class="botones"><a>Creditos</a></button>
      </div>
    </div>
  </body>
</template>

<style lang="scss">
body {
  width: (128px, 20vw, 450px);
}

h1 {
  font-family: 'Alquimia';
  font-size: 5em;
  color: var(--tinta);
}

#menu {
  display: flex;
  width: 20vw;
}

.botones {
  font-family: 'Alquimia';
  color: var(--tinta);
  padding: 0;
  border: none;
  background: none;
}
</style>
