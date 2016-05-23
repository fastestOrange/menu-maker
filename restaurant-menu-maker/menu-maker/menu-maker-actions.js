var _ = require('lodash');
var r = require('../scripts/reducers')
var findLastIndex = require('lodash.findlastindex');
var dom = require('dominus');

module.exports = {
  addInput: function(state, event, type) {
  	var t = type[0];
    var inputs = state.getState('menuInputs');
    var index = findLastIndex(inputs, ['type', t])
    var lastOfType = inputs[index].index_of_type;
    var lastId = inputs[inputs.length-1].id;
    var nextOfType = lastOfType + 1;
    var nextId = lastId + 1;
    var name = t + '_' + nextOfType;
    var element = { id: nextId, name: name, type: type, text: "", index_of_type: nextOfType };
    if(state.getState('editing') === false){
      this.setToEdit(state);
    }
    state.setState('push','menuInputs', element);
    return state
  },
  setInputText: function(state, event) {
    var el = dom(event.target);
    var text = el.value();
    var id = el.attr('data-id');
  	var inputs = state.getState('menuInputs');
  	var index = _.findIndex(inputs, function(i){ 
  		return i.id === Number(id);
  	});
  	state.setState('set', 'menuInputs.'+id+'.text', text)
    return state
  },
  setToEdit: function(state) {
    return r.toggleState('editing', true, false, state);
  },
  removeInput: function(state, event, name) { 
    return r.deleteFromList(name, 'menuInputs', state);
  }
};

