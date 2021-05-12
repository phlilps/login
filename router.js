import VueRouter from 'vue-router'

import Login from './components/Login.vue'
import Register from './components/Register.vue'

var router = new VueRouter({
	routes:[
		{path:'/',redirect:'/login'},
		{path:'/login',component:Login,meta:{title:'登录'}},
		{path:'/register',component:Register,meta:{title:'注册'}}
	]
})

// 将路由导出到入口文件里
export default router