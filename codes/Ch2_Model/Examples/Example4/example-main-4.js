(function() {
	/**
	 * The goal of this file is to provide the basic understanding of
	 * 1. Attributes validation
	 */

	/**
	 * Creating a new model called MasterModel by extending Backbone.Model class
	 * Syntax: Backbone.Model.extend(properties, [classProperties])
	 */
	var MasterModel = Backbone.Model.extend({
		/**
		 * model's validate method for attributes validation.
		 */
		validate: function(attrs, options) {
			if (attrs.age < 18) {
				this.trigger('error', "Your age must be more then 18 years.");
				return true;
			}
		}
	});

	var masterModel = new MasterModel({
		name: 'Ashwin Hegde'
	});

	masterModel.on('error', function(error) {
		console.log("Error: ", error);
	});

	/**
	 * This will not set age in the model, due to not passing validation '< 18'
	 */
	masterModel.set({
		age: 15
	}, {
		validate: true
	});


	/**
	 * This will set age in the model, due to passing validation '< 18';
	 * Uncomment below to see the model changes
	 */
		//
		// masterModel.set({
		// 	age: 20
		// }, {
		// 	validate: true
		// });


	/**
	 * Let verify if age got set or not
	 */
	console.log('Master Model: ', masterModel.toJSON());

})();
