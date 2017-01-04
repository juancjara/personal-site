var Vue = require('vue/dist/vue.common.js');
var YAML = require('yamljs');

new Vue({
  el: "#two",
  data: {
    projects: YAML.load('../../data.yml')
  }
});
