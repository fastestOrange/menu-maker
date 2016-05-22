var objectPath = require('object-path');

var state = objectPath({ 
	menuInputs: [],
	editing: false
});

[
  {
  	name: "section_1",
  	type: "section",
  	text: "Appetizers"
  },
  {
  	name: "item_1",
  	type: "item",
  	text: "Crostini"
  },
  {
  	name: "item_2",
  	type: "item",
  	text: "Cucumber Sandwiches"
  },
].map(function(i){
   state.push('menuInputs', i);
});

module.exports = state