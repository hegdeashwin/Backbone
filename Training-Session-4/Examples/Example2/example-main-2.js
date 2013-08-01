(function() {
	/*
		The goal of this file is to provide the basic understanding 
		1. Create a View class.
		2. Reference with DOM with tabName, className, id.	
		
		How to run this example.
		1. Open Example-2.html in Google Chrome browser.
		2. Press F12, go to console tab.
		3. See the message get displayed on that console tab.
	*/

	/*
		Creating a new View called MasterView by extending Backbone.View class.
		Syntax: Backbone.View.extend(properties, [classProperties])
	*/	
	var MasterView = Backbone.View.extend({		
				
	});

	/*
		Creating an object from MasterView which calls initialize function.
	*/
	var masterView = new MasterView();

})();
