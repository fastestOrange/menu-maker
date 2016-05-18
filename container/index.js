var template = require('./container.handlebars');
var morph = require('morphdom');
var each = require('lodash.foreach')


var Container = function(container, initialState){
	var self = this;
	this.container = container;
	this.initPages()
    this.render(initialState);
}

Container.prototype.render = function(state) {
	var self = this;
	var target = template(state);
	morph(this.container[0], target);
}


Container.prototype.initPages = function(){
  require('../home-page')()
  // require('../menu-maker')()
  // require('../account')()
}

module.exports = Container;