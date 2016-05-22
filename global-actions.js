var findLastIndex = require('lodash.findlastindex');

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

module.exports = function(r){
  return {
    addSectionInput: function(state) {
      var inputs = state.get('menuMaker.menuInputs');
      console.log(inputs)
      var index = findLastIndex(inputs, ['type', type])
      var name = getInputName('section', inputs)
      var sectionElement = {
          name: name,
          type: "section",
          text: ""
      }

      if(state.editing === false){
        this.setToEdit(state);
      }
      inputs.push(sectionElement);
      state.set('menuMaker.menuInputs', inputs);

    },
    addItemInput: function(state) {
      var inputs = state.get('menuMaker.menuInputs');
      var index = findLastIndex(inputs, ['type', type])
      var name = getInputName('section', inputs)
      var sectionElement = {
          name: name,
          type: "section",
          text: ""
      }

      if(state.editing === false){
        this.setToEdit(state);
      }
      inputs.push(sectionElement);
      state.set('menuMaker.menuInputs', inputs);
    },
    setInputText: function(state, event) {
      var text = event.target.value;
      r.setText(text, event.target.name, state)
      return state
    },
    setToEdit: function(state) {
      return r.toggleState('menuMaker.editing', true, false, state);
    },
    removeInput: function(state, event, name) { 
      return r.deleteFromList(name, state);
    }
  }

};