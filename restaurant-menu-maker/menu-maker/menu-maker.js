var template = require('./menu-maker.handlebars');
var inherits = require('inherits')
var dom = require('dominus');
var morph = require('morphdom')
var appState = require('../../app-state');
var activator = require('../scripts/activator');

var MenuMaker = function(container, state){
  	this.container = container;
  	this.state = state;
    this.render(this.state.get());
    this.pageActions = require('./menu-maker-actions');
    window.setEventAction = activator.bind(this)
}

MenuMaker.prototype.render = function(state){
	var target = template(state);
    morph(this.container[0], target);
}

new MenuMaker(dom('.menu-maker'), appState);

