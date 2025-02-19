import { createRouter, createWebHistory } from "vue-router";
import FormPage from '../pages/FormPage.vue';
import DisplayPage from "../pages/DisplaysPage.vue";
const routes = [
    {path: '/', component: FormPage},
    //locahost:5000/
    {path:'/display',component:DisplayPage}
    //locahost:5000/display
];
const router = createRouter({
    history:createWebHistory(),
    routes
});
export default router;