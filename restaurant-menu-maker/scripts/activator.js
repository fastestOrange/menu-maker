module.exports = function(){
  return function(context, pageActions){
    return function(event, actionName /*, args*/){
    	var args = Array.prototype.slice.apply(arguments)
    	var event = args.shift();
    	var actionName = args.shift();
    	var oldState = context.state;
    	pageActions[actionName](oldState, event, args); // and args
    	context.render(context.state.getState())
    }  
  }
};
