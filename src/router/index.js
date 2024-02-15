import { createRouter, createWebHistory } from "vue-router";
import Login from "../pages/loginPage.vue"
import Register from "../pages/registerPage.vue"
import Home from "../pages/homePage.vue"


const routes = [
  { 
    path:"/",
    name:"register",
    component: Register
  },
  {  
    path:"/login",
    name:"login",
    component: Login

  },
  {  
    path:"/home",
    name:"home",
    component: Home

  },
 ]

const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL), routes: routes
})

export default router