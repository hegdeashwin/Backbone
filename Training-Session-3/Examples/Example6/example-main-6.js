(function() {
	/*
		The goal of this file is to provide the basic understanding
		1. Remove view from DOM.

		How to run this example.
		1. Open Example-6.html in Google Chrome browser.
		2. Press F12, go to console tab.
		3. See the message get displayed on that console tab.
	*/

	/*
		Creating a new View called MasterView by extending Backbone.View class.
		Syntax: Backbone.View.extend(properties, [classProperties])
	*/
	var MasterView = Backbone.View.extend({

		el: '.workspace',

		events: {
			'click input[type=submit]': 'removeView'
		},

		removeView: function() {
			console.log("This function will remove the current view from DOM.");
			
			this.remove();
		}
	});

	/*
		Creating an object from MasterView which calls initialize function.
	*/
	var masterView = new MasterView();

})();
