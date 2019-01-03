import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login  from '../components/login/Login'
import Logout from '../components/login/Logout'
import Signup from '../components/login/signup'
import Forum  from '../components/forum/Forum'
import Read   from '../components/forum/Read'
import Create from '../components/forum/Create'

const routes = [
    { path: '/login',  component: Login  },
    { path: '/logout', component: Logout },
    { path: '/signup', component: Signup },
    { path: '/forum',  component: Forum  , name:'forum'},
    { path: '/ask',    component: Create },
    { path: '/question/:slug', component: Read , name:'read' }
  ]

const router = new VueRouter({
    routes,
    hashbang: false,
    mode:'history'
})

export default router
