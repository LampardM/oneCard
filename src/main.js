// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import NutUI from '@nutui/nutui'
import '@nutui/nutui/dist/nutui.css'
import '@ztree/ztree_v3/js/jquery.ztree.core.min.js'
import '@ztree/ztree_v3/js/jquery.ztree.excheck.min.js'
import '@ztree/ztree_v3/css/metroStyle/metroStyle.css'

NutUI.install(Vue)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
