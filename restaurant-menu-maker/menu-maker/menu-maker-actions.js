// var _ = require('lodash');
// var r = require('../scripts/reducers')
// var globalActions = require('../../global-actions')(r);

// var pageActions = {
// 	runTest: function(){
// 		console.log('ugly cunt')
// 	}
// }

// module.exports = _.assign({}, pageActions, globalActions);

module.exports = {
	test: function(){
		console.log(arguments)
	}
}