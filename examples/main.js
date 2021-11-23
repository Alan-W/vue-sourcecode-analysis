import Vue from '../src/platforms/web/entry-runtime-with-compiler.js'
import App from './App.vue'
var app = new Vue({
  el: '#app',
  render: h => h(App)
});