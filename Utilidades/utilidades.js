export function obtenerVariablesCSS(nombre) {
  const ele = window.getComputedStyle(document.body, '');
  return ele.getPropertyValue(nombre);
}
