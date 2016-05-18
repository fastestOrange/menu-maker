var Firebase = require("firebase");



var State = function(initialState){
	this.state = initialState;
};


State.prototype.setState = function(state){
	// state = this.setComputedProperties(state);
    this.state = state;
}


State.prototype.getState = function(){
	return this.state
}

// State.prototype.setComputedProperties = function(state){
//   return state;
// }



module.exports = State;