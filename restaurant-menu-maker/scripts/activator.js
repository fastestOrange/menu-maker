module.exports = function(){
	var args = Array.prototype.slice.apply(arguments)
	var event = args.shift();
	var actionName = args.shift();
	var oldState = this.state.getState();
	this.pageActions[actionName](oldState, event, args); // and args
	this.render(this.state.getState())
};