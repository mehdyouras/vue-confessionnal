// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import { VueApollo, apolloClient } from './plugins/vue-apollo';
import BootstrapVue from './plugins/bootstrap-vue';

Vue.use(VueApollo);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  provide: apolloProvider.provide(),
  components: { App },
  template: '<App/>',
});
