var findLastIndex = require('lodash.findlastindex');

function changePage(nextPage, state){
    for(var page in state.currentPage){
    	if(page === nextPage){
    		state.currentPage[page] = true;
    	}else{
    	    state.currentPage[page] = false;
    	}
    }
    return state
}

function toggleState(stateProp, a, b, state){
  if(state[stateProp] === a){
    state[stateProp] = b;
  }else{
    state[stateProp] = a;
  }
  return state;
}

function push(stateProp, element, state) {
	state[stateProp].push(element);
	return state;
}

function getInputName(type, state){
	var inputs = state.menuInputs;
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
	name = name[0]
	var inputs = state.menuInputs;
	var index = findLastIndex(inputs, ['name', name])
	inputs[index].text = text;
	return state
}

function deleteFromList(name, state){
  	name = name[0]
	var inputs = state.menuInputs;
	var index = findLastIndex(inputs, ['name', name])
	inputs.splice(index, 1);
	return state;
}

module.exports = {
	changePage : changePage,
	toggleState: toggleState,
	push: push,
	deleteFromList: deleteFromList,
	getInputName: getInputName,
	setText: setText
}

