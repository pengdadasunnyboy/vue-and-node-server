import Vue from 'vue'
import Router from 'vue-router'
import Number from '@/components/Number'
import Missing from '@/components/Missing'

Vue.use(Router)

export default new Router({
	//mode: 'history',
	mode: 'hash',
  routes: [
    {
      path: '/',
      redirect:'/number'
    },
		{
			path:'/number',
			name:'number',
			components:{
				number:Number,
				missing:Missing
			}
		},
		{
			 path:'/missing',
			 name:'missing',
			 components:{
				 missing:Missing
			 }
		}
  ]
})
