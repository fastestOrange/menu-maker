var template = require('./menu-maker.handlebars');
var dom = require('dominus');
var morph = require('morphdom')
var appState = require('../../app-state');
var Activator = require('../scripts/activator');
var activator = Activator();
var actions = require('./menu-maker-actions');

//load seed data into state
require('./seedData').map(function(i){
	appState.setState('push', 'menuInputs', i)
});

appState.observe('menuInputs', function(args){
  // console.log('menumaker',args)
});

var MenuMaker = function(container, state){
  this.container = container;
  this.state = state;
  this.render(this.state.getState());
  window.setEventAction = activator(this, actions);
}

MenuMaker.prototype.render = function(state){
	var target = template(state);
  morph(this.container[0], target);
}

new MenuMaker(dom('.menu-maker'), appState);

