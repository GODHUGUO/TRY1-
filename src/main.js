import { createApp } from 'vue'
import App from './App.vue'
import LaYout from '@/components/LaYout.vue';
import router from  './router/index';
const app = createApp(App);
app.use(router)
app.component('LaYout',LaYout);
app.mount('#app');












//  import{createRouter,createWebHashHistory} from 'vue-router';
//  import HoMe from './components/home.vue'
//  import ForMulaire from './components/formulaire.vue'






//  const routes = [
//     { path: '/', component: HoMe },
//     { path: '/formulaire', component: ForMulaire },
    
//   ]

  // const router = createRouter({
  //   history:createWebHashHistory(),
  //   routes
  // });

// const VueApp = createApp(App)
// VueApp.use(router)
// VueApp.mount('#app');
