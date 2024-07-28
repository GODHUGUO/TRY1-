import { createRouter,createWebHistory } from "vue-router";
import LaYout from '@/components/LaYout.vue'; 


const routes =[
{

path:'/',
component:LaYout,
children:[
{path: '',component:()=>import('@/components/home.vue')},
{path: 'contact',component:()=>import('@/components/formulaire.vue')},
],

},

];

const router = createRouter ({
    history : createWebHistory(),
    routes,
});
export default router