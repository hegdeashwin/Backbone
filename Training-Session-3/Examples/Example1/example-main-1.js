(function() {
	/*
		The goal of this file is to provide the basic understanding
		1. Create a View class.
		2. Reference with DOM using tabName, className, id.

		How to run this example.
		1. Open Example-1.html in Google Chrome browser.
		2. Press F12, go to console tab.
		3. See the message get displayed on that console tab.
	*/

	/*
		Creating a new View called MasterView by extending Backbone.View class.
		Syntax: Backbone.View.extend(properties, [classProperties])
	*/
	var MasterView = Backbone.View.extend({
		/*
			This initialize function will get called when the View is first created.
		*/
		initialize: function() {
			console.log("Your View have been initialize.");
		}

		/*
			Optional property, this property will let you set tagName's class name.
			You can also set multiple classes like so 'container mainpage centerPanel ...'
		*/
		className: 'container',

		/*
			Optional property, this property will let you set tagName's id.
		*/
		id: 'master'

	});

	/*
		Creating an object from MasterView which calls initialize function.
	*/
	var masterView = new MasterView();
	console.log(masterView);

	/*
		In master view, tabName is not set. So, <div> is the default.
		masterView.el will display <div id="master" class="container"></div>
	*/
	console.log("'el' from master view: Here tabName is not set. So, <div> is the default.");
	console.log(masterView.el);


	/*
		Creating a new view called ChildView by extending Backbone.View class.
	*/
	var ChildView = Backbone.View.extend({

		/*
		 	Required property, if not set Backbone will set the defaults to 'div'.
		 	Here, tagName is specified as 'ul'.
		*/
		tagName: 'ul',

		/*
			Optional property, this property will let you set tagName's class name.
			You can also set multiple classes like so 'container mainpage centerPanel ...'
		*/
		className: 'container',

		/*
			Optional property, this property will let you set tagName's id.
		*/
		id: 'child'

	});

	/*
		Creating an object from ChildView.
	*/
	var childView = new ChildView();

	/*
		In child view, tabName is set to 'ul'. Thus override the default value for 'el'.
		childView.el will display <ul id="master" class="container"></ul>
	*/
	console.log("'el' from child view: Here tabName is set to 'ul'. Thus override the default value for 'el'.");
	console.log(childView.el);


})();
