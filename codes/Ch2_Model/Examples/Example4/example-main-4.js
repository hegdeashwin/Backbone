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
			console.log("attrs: ", attrs);
			console.log("options: ", options);

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

	masterModel.set({
		age: 15
	}, {
		validate: true
	});

	console.log(masterModel.toJSON());

})();