import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


const router = new VueRouter({
	
	routes:[
    	{ path: '', component: require('../components/login.vue') },
    	{ path: '/', component: require('../components/login.vue') },
    	{ path: '/login', component: require('../components/login.vue') },
    	{ path: '/home', component: require('../components/home.vue'),
    		children:[
    			{path: '/' ,component: require('../components/dashboard.vue')},
    			{path: 'dashboard' ,component: require('../components/dashboard.vue')},
                {path: 'toBeConfirmed' ,component: require('../components/toBeConfirmed.vue')}
    		]
    	}
  	]
})


export default router;
