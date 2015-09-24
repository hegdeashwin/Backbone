(function() {
	/**
	 * The goal of this file is to provide the basic understanding of
	 * 1. Access JSON data through URL method
	 * 2. Parse data
	 * 3. REST operations on JSON data
	 */

	/**
	 * Creating a new model called MasterModel by extending Backbone.Model class
	 * Syntax: Backbone.Model.extend(properties, [classProperties])
	 */
	var MasterModel = Backbone.Model.extend({

		/**
		 * Whenever 'fetch | save | destroy' is called URL function is needed else it will through error.
		 */
		url: function() {
			return "../../../js/google-map-api.json";
		},

		/**
		 * This function gets called automatically if its present in the model; this function helps to parse the
		 * data and return it to model instance; it takes response as argument and it needs to be return else
		 * it will return undefined
		 */
		parse: function(response) {
			console.log("Parse response: ");
			console.log(response);

			return response;
		}
	});

	var masterModel = new MasterModel();
	console.log(masterModel);

	/**
	 * Getting data from Model fetch method.
	 */
	masterModel.fetch({
		success: function() {
			console.log("Data coming from fetch success: ");
			console.log(masterModel.toJSON());
		},
		error: function() {
			console.log("Some error triggered while accessing data service api.");
		}
	});

	masterModel.set({
		firstName: 'Ashwin',
		lastName: 'Hegde'
	});

	/**
	 * Save data to your Model; execute REST POST, PUT operations
	 * Below is only to show 'save' syntax;
	 */
	// masterModel.save(masterModel.toJSON(), {
	// 	success: function() {
	// 		console.log("Data coming from fetch success: ");
	// 		console.log(masterModel.toJSON());
	// 	},
	// 	error: function() {
	// 		console.log("Some error triggered while accessing Google service api.");
	// 	}
	// });

	/**
	 * Delete data from your Model; execute REST DELETE operation
	 * Below is only to show 'destroy' syntax;
	 */
	// masterModel.destroy(masterModel.toJSON(), {
	// 	success: function() {
	// 		console.log("Data coming from fetch success: ");
	// 		console.log(masterModel.toJSON());
	// 	},
	// 	error: function() {
	// 		console.log("Some error triggered while accessing Google service api.");
	// 	}
	// });

})();