<script setup>
const imagenes = [
  'Enflujo1.png',
  'Enflujo2.png',
  'Enflujo3.png',
  'Enflujo4.png',
  'Enflujo5.png',
  'Enflujo6.png',
  'Enflujo7.png',
  'Enflujo8.png',
  'Enflujo9.png',
  'Enflujo10.png',
];

const titulos = [
  'EnFlujo es...',
  'Vivir con flujo es:',
  '¿Qué es Enflujo?',
  'La RAE define EnFlujo como:',
  'El laboratorio EnFlujo, qué es esa vaina?',
];
const tipoPalabras = ['[Sustantivo.]', '[Pronombre.]', '[Verbo.]', '[Adverbo.]', '[Adjetivo.]'];
const frases1 = [
  'El lugar donde exploramos formas narrativas, ritmos, tiempos y contenidos que se inscriben en el presente digital',
  'Un espacio donde nos interesan los datos, el tiempo real o hiperreal',
  'Un refugio para aquellos que admiran la mediación técnica, la experimentación, las interfaces y los usos y problemas políticos y creativos del código',
  'El hogar de las preguntas no respondidas y aquellas personas lo suficientemente curiosas para hacerlas',
  'Un espacio de aprendizaje para aquellos que quieren',
  'Una caja de herramientas, conceptos y estrategias',
  'Donde trabajamos en la construcción de otros presentes digitales',
];

const frases2 = [
  'una forma de ser, nada que perder! Sin preocuparse, asi es como hay que vivir! A vivir asi, yo ya aprendi!',
  'un grupo de coleccionistas de pines',
  'un grupo de apoyo para Juan Camilo y su problema con la correcta identificación de los colores..',
  'el lugar donde nace Mama Quiero ser Hacker',
  'un grupo de personas que ven una pantalla como la posibilidad de tener una ventana',
  'un grupo que simplemente, existe mejor',
  'no confirmados pa bobos hijueputas',
  'descolonizadores del lenguaje de programación',
];

let indicesElegidos = [];

const imagen = document.getElementById('foto');
const poema = document.getElementById('poema1');
const titulo = document.getElementById('titulo1');
const boton = document.getElementById('boton');
const musica = document.getElementById('audio');

function numeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function imagenesAleatorias() {
  let imagenAleatoria = numeroRandom(0, imagenes.length - 1);
  imagen.src = `${ruta}${imagenes[imagenAleatoria]}`;
}
function generarTipo() {
  let tipoAleatorio = numeroRandom(0, tipoPalabras.length - 1);
  return tipoPalabras[tipoAleatorio];
}

function generarDefinicion1() {
  const random = numeroRandom(0, frases1.length - 1);

  if (!indicesElegidos.includes(random)) {
    indicesElegidos.push(random);
    if (frases1[random]) {
      return frases1[random];
    }
  } else {
    return frases1[0];
  }
}

function generarDefinicion2() {
  const random = numeroRandom(0, frases2.length - 1);

  if (!indicesElegidos.includes(random)) {
    indicesElegidos.push(random);
    if (frases2[random]) {
      return frases2[random];
    }
  } else {
    return frases2[0];
  }
}

function generarPoema() {
  indicesElegidos = [];
  imagenesAleatorias();
  const indiceTitulo = numeroRandom(0, titulos.length - 1);
  const tipoPalabra = generarTipo();
  const parte1 = generarDefinicion1();
  const parte2 = generarDefinicion2();
  titulo.innerText = titulos[indiceTitulo];
  if (indiceTitulo === 3 && parte2 !== frases2[0]) {
    poema.innerText = tipoPalabra + ' ' + parte1 + '. Segun otras personas Enflujo es en realidad, ' + parte2 + '.';
    musica.src = '';
  } else if (indiceTitulo === 3 && parte2 === frases2[0]) {
    poema.innerText = tipoPalabra + ' ' + parte1 + '. Segun otras personas Enflujo es en realidad, ' + parte2;
    musica.src = `${ruta}${'HakunaMatata.mp3'}`;
  } else if (parte2 === frases2[0]) {
    poema.innerText = parte1 + '. Segun otras personas Enflujo es en realidad, ' + parte2;
    musica.src = `${ruta}${'HakunaMatata.mp3'}`;
  } else {
    poema.innerText = parte1 + '. Segun otras personas Enflujo es en realidad, ' + parte2 + '.';
    musica.src = '';
  }
}

boton.addEventListener('click', function () {
  generarPoema();
});

generarPoema();
imagenesAleatorias();
</script>

<template>
  <div id="contenedor">
    <h1 id="tituloPagina">Bot Enflujo</h1>
    <img id="foto" src="https://cdn.glitch.global/6bc87ad7-8502-48e9-afc5-9243ca96d613/EnflugoOG.png?v=1677253822967" />
    <h3 class="tituloPoema" id="titulo1">Título</h3>
    <p class="poema" id="poema1">Miau</p>
    <button id="boton">Ponme en flujo</button>
    <audio id="audio" autoplay src="null"></audio>
  </div>
</template>
<style lang="scss" scoped>
#contenedor {
  margin: auto 1em;
  text-align: center;
}

#tituloPagina {
  margin-top: 1em;
  margin-bottom: 0;
}

#foto {
  height: 300px;
  width: 300px;
  border: #5757f7 solid 5px;
  margin-top: 15px;
}

.tituloPoema {
  font-size: 2em;
}

.poema {
  font-size: 1.5em;
  text-align: center;
}

.poema::first-letter {
  text-transform: uppercase;
}

#boton {
  font-size: 0.9em;
  background-color: #3d00fdb5;
  color: white;
  margin-bottom: 2em;
}
</style>
