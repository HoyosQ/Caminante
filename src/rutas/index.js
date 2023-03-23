import { createRouter, createWebHistory } from 'vue-router';
import Inicio from '../vistas/Inicio.vue';
import Transicion from '../vistas/Transicion.vue';
import MenuPrincipal from '../vistas/MenuPrincipal.vue';

const rutas = [
  { path: '/', name: 'Inicio', component: Inicio },
  { path: '/transicion', name: 'Transicion', component: Transicion },
  { path: '/menu-principal', name: 'Menu Principal', component: MenuPrincipal },
];

export default createRouter({
  history: createWebHistory(),
  routes: rutas,
});
