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

			var _apiUrl = 'http://jsonplaceholder.typicode.com/users';
			if (this.has('id')) {
				_apiUrl = 'http://jsonplaceholder.typicode.com/users/' + this.get('id');
			}
			return _apiUrl;
		},

		parse: function(response) {
			console.log("Parse response: ");
			console.log(response);

			return response; // This is require else response will be blank.
		}
	});

	var masterModel1 = new MasterModel();

	/*
		Getting data using Backbone Model fetch method.
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

	var masterModel2 = new MasterModel({
		"id": 1
	});

	/*
		Getting data using Backbone Model fetch method.
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