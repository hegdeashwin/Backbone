(function() {
	/*
		The goal of this file is to provide the basic understanding
		1. Create a View class.
		2. Reference with DOM using el & this.$el
		3. DOM events hash.
		4. Scope of DOM event.

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
			All views have a DOM element at all times (the el property),
			whether they've already been inserted into the page or not.
		*/
		el: '.workspace',

		/*
			Events hash.
		*/
		events: {
			'click input[type=submit]': 'submitForm',
			'click input[type=reset]': 'resetForm',
			'click input[type=button]': 'buttonForm'
		},

		/*
			Custom function gets fired when specific event gets called.
		*/
		submitForm: function() {
			console.log("Submit Button got clicked. Time to validate form data.");
		},

		resetForm: function() {
			console.log("Reset Button got clicked. Time to reset form data.");
		},

		buttonForm: function() {
			console.log("Won't able to access this function. This is out of view scope.");
		},

		/*
			This is the view's render function; Used to render data.
		*/
		render: function() {
			console.log("View render function.");
		}

	});

	/*
		Creating an object from MasterView which calls initialize function.
	*/
	var masterView = new MasterView();

	console.log(masterView.el);

})();
