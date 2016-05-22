console.log('oh hai')

// var Container = require('./container');
// var AppState = require('./app-state');
// var actions = require('./actions')
// var dom = require('dominus')
// var ls  = require('local-storage');
// var initialState, computed;

// initialState = { 
//   	menuInputs: [
//       {
//       	name: "section_1",
//       	type: "section",
//       	text: "Appetizers"
//       },
//       {
//       	name: "item_1",
//       	type: "item",
//       	text: "Crostini"
//       },
//       {
//       	name: "item_2",
//       	type: "item",
//       	text: "Cucumber Sandwiches"
//       },
//   	],
//   	editing: false
//   };


// var appState= new AppState(initialState);

// var rootNode = dom('.menu-maker');
// var state = appState.getState()
// var c = new Container(rootNode, state);

// window.setEventAction = function(/*args*/){
// 	var args = Array.prototype.slice.apply(arguments)
// 	var actionName = args.shift();
// 	var oldState = appState.getState();
// 	var newState = actions[actionName](oldState, args); // and args
// 	// ls.set('menu-maker-app-state', newState)
// 	appState.setState(newState);
// 	c.render(newState)
// }