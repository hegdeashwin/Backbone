(function() {
	/*
		The goal of this file is to provide the basic understanding 
		1. Templates.		
		
		How to run this example.
		1. Open Example-5.html in Google Chrome browser.
		2. Press F12, go to console tab.
		3. See the message get displayed on that console tab.
	*/

	/*
		Creating a new View called MasterView by extending Backbone.View class.
		Syntax: Backbone.View.extend(properties, [classProperties])
	*/	
	var MasterView = Backbone.View.extend({		
		/*
			This initialize function will get called when the view is first created.
		*/
		initialize: function() {
			/*
				Gets called if and only if the object triggers an `customEvent` event and 
				passes a message through it. If message is not passed; it will show `undefined.
			*/
			this.on('customEvent', this.doSomething, this);
		},

		/*
			Custom function which gets triggered with trigger event method.
			someData is optional, It related to the concept of passing data as function arguments.
		*/
		doSomething: function(someData) {
			console.log(someData);
		}
	});

	/*
		Creating an object from MasterView which calls initialize function.
	*/
	var masterView = new MasterView();

	/*
		Gets called when object triggers an `alert` event and passes a message through it.
		if message is not passed message will show `undefined.
	*/
	masterView.trigger('customEvent', "Hello, Backbone.JS");

})();
