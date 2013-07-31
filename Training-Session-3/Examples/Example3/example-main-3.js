(function() {
	/*
		The goal of this file is to provide the basic understanding
		1. Underscore Micro-Templates.

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

		initialize: function() {
			this.render();
		},

		el: "#directionApi",

		template: _.template($("#routesTable").html()),

		/*
			This is the view's render function; Used to render data.
		*/
		render: function() {
			var self = this;

			this.$el.html(self.template({
				"ne_lat": "19.09192670",
				"ne_lng": "73.85839480",
				"sw_lat": "18.52064730",
				"sw_lng": "72.87766890"
			}));
		}

	});

	/*
		Creating an object from MasterView which calls initialize function.
	*/
	var masterView = new MasterView();

	console.log(masterView.el);

})();
