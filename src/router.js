import {createRouter, createWebHistory} from "vue-router";

import Home from "./views/Home.vue"
import Contact from "./views/Contact.vue"
import Careers from "./views/Careers.vue"

const routes = [
  { path: '/', component: Home },
  { path: '/careers', component: Careers },
  { path: '/contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
