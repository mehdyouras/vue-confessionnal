import Vue from 'vue';
import Router from 'vue-router';

import index from '@/pages/index';
import confessionnal from '@/pages/confessionnal';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
    },
    {
      path: '/confessionnal/:id',
      name: 'confessionnal',
      component: confessionnal,
    },
  ],
});
