<script setup></script>

<template>
  <div id="contenedorSobreMi">
    <!--<p>componente dani para que sirven los copitos?</p>-->
    <div id="cuadro">
      <img id="avatar" src="/recursos/animaciones/Avatar-Enflujo.gif" />
    </div>
    <div id="miHistoria">
      <h2 id="losCopitos">Mi Historia</h2>
      <span id="lasOrejitas">
        Estudiante de narrativas digitales de la universidad de los Andes. Apasionado por la programación, los
        videojuegos, la literatura fantastica, el pixel art, viajar por carretera y la formula 1. <br />
        Miembro del Laboratorio EnFlujo
      </span>
      <img id="contenedorTexto" src="/recursos/imagenes/Test.png" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../../../recursos/scss/constantes';

#contenedorSobreMi {
  display: flex;
  position: relative;
  top: 0;
  flex-direction: column;
  align-items: center;
}
#cuadro {
  margin-top: 5vh;
  display: block;
  border-style: groove;
  border-color: #ebd78d;
  width: 15vw;
  height: 15vw;
  border: 15px groove #ebd78d;
}
#avatar {
  width: 15vw;
  height: 15vw;
  border-style: ridge;
  border-color: #ebd78d;
  border: 1em;
}

#miHistoria {
  margin-top: 5vh;
  width: 50vw;
  position: relative;
}
#losCopitos {
  font-family: 'Alquimia';
  font-size: 4em;
  color: #cef8f5;
  position: absolute;
  top: 0;
  left: 2.2em;
}

#lasOrejitas {
  font-family: 'kiwi';
  font-size: 2em;
  position: absolute;
  top: 2.5em;
}

#contenedorTexto {
  width: 55vw;
  height: 70vh;
  margin-left: -2em;
}
</style>
