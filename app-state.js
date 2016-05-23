var objectPath = require('object-path');
var ee = require('events').EventEmitter; 
var inherits = require('inherits');
var _ = require('lodash');

var state = objectPath({ 
	menuInputs: [],
	editing: false
});

var State = function(initialState){
  this.state = initialState || {};
}

inherits(State, ee);

State.prototype.getState = function(propertyPath){
	return this.state.get(propertyPath);
}

State.prototype.setState = function(method, propertyPath, value){
	this.state[method](propertyPath, value);
	this.emit('state set', {method: method, propertyPath: propertyPath, value: value});
}

State.prototype.observe = function(observedPaths){
	this.on('state set', function(argObj){
		_.forEach(observedPaths, function(cb, path){ 
      if(argObj.propertyPath === path){
      	cb(argObj)
      }
	  });
	});
};

var appState = new State(state);

module.exports = appState