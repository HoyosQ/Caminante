<script setup>
const amanecerI = 5;
const amanecerF = 6;
const diaI = 6;
const diaF = 15;
const atardecerI = 15;
const atardecerF = 16;
const tardeI = 16;
const tardeF = 19;
const anochecerI = 19;
const anochecerF = 20;
const noche1I = 20;
const noche1F = 23;
const noche2I = 0;
const noche2F = 5;

const ruta = '';

const fondosInicio = [
  'fondoInicioAmanecer1.',
  'fondoInicioAmanecer2.',
  'fondoInicioDia.',
  'fondoInicioAtardecer1.',
  'fondoInicioAtardecer2.',
  'fondoInicioTarde.',
  'fondoInicioAnochecher1.',
  'fondoInicioAnochecher2.',
  'fondoInicioNoche.',
];

const fondosVisuales = [
  'fondoVisualAmanecer1.',
  'fondoVisualAmanecer2.',
  'fondoVisualDia.',
  'fondoVisualAtardecer1.',
  'fondoVisualAtardecer2.',
  'fondoVisualTarde.',
  'fondoVisualAnochecher1.',
  'fondoVisualAnochecher2.',
  'fondoVisualNoche.',
];

let horaActual = 0;
let minutoActual = 0;

function determinarHoraActual() {
  const fecha = new Date();
  horaActual = fecha.getHours;
  console.log(horaActual);
}

function determinarMinutoActual() {
  const fecha = new Date();
  horaActual = fecha.getMinutes;
  console.log(horaActual);
}

const fondoI = document.getElementById();
const fondoV = document.getElementById();

function determinarFondos() {
  setInterval();
  if (horaActual >= amanecerI && horaActual < amanecerF) {
    if (minutoActual >= 0 && minutoActual < 30) {
      fondoInicio = fondosInicio[0];
      fondoVisual = fondosVisuales[0];
    } else {
      fondoInicio = fondosInicio[1];
      fondoVisual = fondosVisuales[1];
    }
  } else if (horaActual >= diaI && horaActual < diaF) {
    fondoInicio = fondosInicio[2];
    fondoVisual = fondosVisuales[2];
  } else if (horaActual >= atardecerI && horaActual < atardecerF) {
    if (minutoActual >= 0 && minutoActual < 30) {
      fondoInicio = fondosInicio[3];
      fondoVisual = fondosVisuales[3];
    } else {
      fondoInicio = fondosInicio[4];
      fondoVisual = fondosVisuales[4];
    }
  } else if (horaActual >= tardeI && horaActual < tardeF) {
    fondoInicio = fondosInicio[5];
    fondoVisual = fondosVisuales[5];
  } else if (horaActual >= anochecerI && horaActual < anochecerF) {
    if (minutoActual >= 0 && minutoActual < 30) {
      fondoInicio = fondosInicio[6];
      fondoVisual = fondosVisuales[6];
    } else {
      fondoInicio = fondosInicio[7];
      fondoVisual = fondosVisuales[7];
    }
  } else if (horaActual >= noche1I && horaActual <= noche1F) {
    fondoInicio = fondosInicio[8];
    fondoVisual = fondosVisuales[8];
  } else if (horaActual >= noche2I && horaActual < noche2F) {
    fondoInicio = fondosInicio[8];
    fondoVisual = fondosVisuales[8];
  } else {
    fondoInicio = fondosInicio[2];
    fondoVisual = fondosVisuales[2];
  }

  fondoI.src = `${ruta}${fondoInicio}`;
  fondoV.src = `${ruta}${fondoVisual}`;
}
</script>

<template></template>

<style></style>
