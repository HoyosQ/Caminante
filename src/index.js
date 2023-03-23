import { createApp } from 'vue';

import Aplicacion from './Aplicacion.vue';
import rutas from './rutas';

createApp(Aplicacion).use(rutas).mount('#aplicacion');
