var findLastIndex = require('lodash.findlastindex');

function toggleState(propertyPath, a, b, state){
  if(state.getState(propertyPath) === a){
    state.setState('set', propertyPath, b);
  }else{
    state.setState('set', propertyPath, a);
  }
}

function getInputName(type, inputs){
	
	var index = findLastIndex(inputs, ['type', type])
	if(index > -1){
	  var last = inputs[index];
	  var l = last.name.split("_");
	  var count = Number(l[1]);
	  count++
	  count = count + "";
	  return [l[0], count].join("_");
	}else{
	  return [type, 1].join("_")	
	}
}

function setText(text, name, state){
	// var inputs = state.menuInputs;
	// var index = findLastIndex(inputs, ['name', name])
	// inputs[index].text = text;
	// return state
}

function deleteFromList(name, list, state){
  	name = name[0]
	var inputs = state.getState(list);
	var index = findLastIndex(inputs, ['name', name])
	inputs.splice(index, 1);
	return state;
}

module.exports = {
	toggleState: toggleState,
	deleteFromList: deleteFromList,
	getInputName: getInputName,
	setText: setText
}

