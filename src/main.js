// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Detector from './utils/detector'

Vue.config.productionTip = false


if (Detector.webgl) {
  // Initiate function or other initializations here
  new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
  })

} else {
  var warning = Detector.getWebGLErrorMessage();
  window.document.getElementById('app').appendChild(warning);
}
