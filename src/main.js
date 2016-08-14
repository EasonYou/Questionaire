import Vue from 'vue'
import App from './App'
import Mainpage from './components/Mainpage'
import Check from './components/Check'
import Edict from './components/Edict'
import Fillin from './components/Fillin'

import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(VueResource)
/* eslint-disable no-new */

const router=new VueRouter()

router.map({
	'/home':{
		component:Mainpage
	},
	'/new':{
		component:Edict
	},
	'/check':{
		component:Check
	},
	'/edict':{
		component:Edict
	},
	'/fillin':{
		component:Fillin
	}
})

router.redirect({
	'*':'/home'
})

router.start(App,'app')