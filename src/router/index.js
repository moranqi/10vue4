import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from "../views/Index";
import Login from "../views/Login";
import Register from "../views/Register";
import ProductList from "../views/ProductList";
import Details from "../views/Details";
import Cart from "../views/Cart";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path:'/productlist',
    name:'productlist',
    component:ProductList
  },
  {
    path:'/details',
    name:'datails',
    component:Details
  },
  {
    path:'/cart',
    name:'cart',
    component:Cart
  }
]

const router = new VueRouter({
  routes
})

export default router
