var Vue = require('vue');
var YAML = require('yamljs');

new Vue({
  el: "#two",
  data: {
    projects: YAML.load('../../data.yml')
  }
});
