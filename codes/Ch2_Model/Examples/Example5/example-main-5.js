(function() {
	/**
	 * The goal of this file is to provide the basic understanding of
	 * 1. Access 3rd parth service data through URL method
	 * 2. Setting attributes to URL;
	 * 3. Access attributes from within model
	 */

	var MasterModel = Backbone.Model.extend({

		url: function() {
			var _apiUrl = 'http://jsonplaceholder.typicode.com/users';

			if (this.has('id')) {
				_apiUrl = 'http://jsonplaceholder.typicode.com/users/' + this.get('id');
			}
			return _apiUrl;
		}
	});

	var masterModel1 = new MasterModel();

	/**
	 * Getting data from Model fetch method.
	 */
	masterModel1.fetch({
		success: function() {
			console.log("Data coming from fetch success: ");
			console.log(masterModel1.toJSON());
		},
		error: function() {
			console.log("Some error triggered while accessing service api.");
		}
	});

	/**
	 * Setting id attribute
	 */
	var masterModel2 = new MasterModel({
		"id": 1
	});

	/**
	 * Getting data from Model fetch method.
	 */
	masterModel2.fetch({
		success: function() {
			console.log("Data coming from fetch success: ");
			console.log(masterModel2.toJSON());
		},
		error: function() {
			console.log("Some error triggered while accessing service api.");
		}
	});

})()