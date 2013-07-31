(function() {
	/*
		The goal of this file is to provide the basic understanding 
		1. Services URL.
		2. Operations on data.
		3. Server communication.
		
		How to run this example.
		1. Open Example-3.html in Google Chrome browser.
		2. Press F12, go to console tab.
		3. See the message get displayed on that console tab.
	*/

	/*
		Creating a new model called MasterModel by extending Backbone.Model class.
		Syntax: Backbone.Model.extend(properties, [classProperties])
	*/	
	var MasterModel = Backbone.Model.extend({
		url: function() {
			return 'http://maps.googleapis.com/maps/api/directions/json?origin=Pune&destination=Mumbai&sensor=false'
		},
		// urlRoot: function() {
		// 		return 'http://maps.googleapis.com/maps/api/directions/json?origin=Pune&destination=Mumbai&sensor=false'
		// }
		parse: function(response) {
			console.log("Parse response: ");
			console.log(response);

			return response; // This is require else response will be blank.
		}
	});

	var masterModel = new MasterModel();
	console.log(masterModel);

	/*
		Getting data from Google service api using Backbone Model fetch method.
	*/
	masterModel.fetch({
		success: function() {
			console.log("Data coming from fetch success: ");
			console.log(masterModel.toJSON());
		},
		error: function() {
			console.log("Some error triggered while accessing Google service api.");
		}
	});

	/*
		Save data from Google service api using Backbone Model save method.
		But, this won't work because Google service api is not supporting POST, PUT operations.
	*/
	// masterModel.save({});

	/*
		Delete data from Google service api using Backbone Model destroy method.
		But, this won't work because Google service api is not supporting DELETE operation.
	*/
	// masterModel.destroy({});

})();
