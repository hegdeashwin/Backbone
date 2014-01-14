(function() {
	/*
		The goal of this file is to provide the basic understanding
		1. Passing data to Services URL.

		How to run this example.
		1. Open Example-5.html in Google Chrome browser.
		2. Press F12, go to console tab.
		3. See the message get displayed on that console tab.
	*/

	/*
		Creating a new model called MasterModel by extending Backbone.Model class.
		Syntax: Backbone.Model.extend(properties, [classProperties])
	*/
	var MasterModel = Backbone.Model.extend({

		url: function() {
			/*
    			Can't use following Service URI
   				http://maps.googleapis.com/maps/api/directions/json?origin=Pune&destination=Mumbai&sensor=false
    			directly. As this got updated from Google Map API v3.
    		*/
			return 'http://maps.googleapis.com/maps/api/directions/' + this.get('dataFormat') + '?origin=' + this.get('origin') + '&destination=' + this.get('destination') + '&sensor=' + this.get('sensor');
		},

		parse: function(response) {
			console.log("Parse response: ");
			console.log(response);

			return response; // This is require else response will be blank.
		}
	});

	var masterModel = new MasterModel({
		"dataFormat": "json",
		"origin": "Pune",
		"destination": "Mumbai",
		"sensor": "false"
	});
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

})();