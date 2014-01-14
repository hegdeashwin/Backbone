(function() {
	/*
		The goal of this file is to provide the basic understanding
		1. Data validation.

		How to run this example.
		1. Open Example-10.html in Google Chrome browser.
		2. Press F12, go to console tab.
		3. See the message get displayed on that console tab.
	*/

	/*
		Creating a new model called MasterModel by extending Backbone.Model class.
		Syntax: Backbone.Model.extend(properties, [classProperties])
	*/
	var MasterModel = Backbone.Model.extend({
		/*
			model's validate method for attributes validation.
		*/
		validate: function(attrs, options) {
		    console.log("Validation is active in set opeation: ")
		    console.log(options);

		    if (attrs.age < 18) {
		      	console.log("Your age must be more then 18 years.");
				return true;
		    }
		}
	});

	var masterModel = new MasterModel({
		firstName: 'Ashwin',
		lastName: 'Hegde'
	});

	console.log(masterModel.toJSON());
	
	/*
		This `invalid` event gets triggered automatically; When your model is not in valid state.
	*/
	masterModel.on('invalid', function() {
		console.log('The age which you are setting in the model is not valid. Please retry!');
	});
	
	masterModel.set({
		age: 15
	}, {
		validate: true
	});
	
	// masterModel.save({
	// 	age: 25
	// });

	console.log(masterModel.toJSON());

})();
