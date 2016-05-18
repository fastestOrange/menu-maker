var r = require('./reducers');
var dom = require('dominus')


module.exports = {
  showHomePage: function(state) {
    return r.changePage("showHomePage", state)

  },
  showMenuMaker: function(state) {
  	return r.changePage("showMenuMaker", state)
  },
  showAccount: function(state) {
  	return r.changePage("showAccount", state)
  },
  addSectionInput: function(state) {
    var name = r.getInputName('section', state)
    var sectionElement = {
        name: name,
        type: "section",
        text: ""
    }
    var interimState = state;
    if(state.editing === false){
      interimState = this.setToEdit(state);
    }
    return r.push("menuInputs", sectionElement, interimState)
  },
  addItemInput: function(state) {
    var name = r.getInputName('item', state)
    var sectionElement = {
        name: name,
        type: "item",
        text: ""
    }
    var interimState = state;
    if(state.editing === false){
      interimState = this.setToEdit(state);
    }
    return r.push("menuInputs", sectionElement, state)
  },
  setInputText: function(state, name) {
    var text = dom('[name="'+ name + '"]').value();
    r.setText(text, name, state)
    return state
  },
  setToEdit: function(state) {
    return r.toggleState('editing', true, false, state);
  },
  removeInput: function(state, name) { 
    return r.deleteFromList(name, state);
  }
};