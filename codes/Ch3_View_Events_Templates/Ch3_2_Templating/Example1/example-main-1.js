(function() {
	/**
	 * The goal of this file is to provide the basic understanding of
	 * 1. Setting DOM reference using `el`
	 * 2. Compiling Underscore template
	 * 3. Injecting data to template
	 * 4. Using this.$el to render template
	 */

	/**
	 * Creating a new view called MasterModel by extending Backbone.View class
	 * Syntax: Backbone.View.extend(properties, [classProperties])
	 */
	var MasterView = Backbone.View.extend({
		/**
		 * `initialize` is a constructor function which gets called automatically at
		 * the time of instance creation
		 */
		initialize: function() {
			this.render();
		},

		/**
		 * `el` is a DOM reference for the view
		 */
		el: "#directionApi",

		/**
		 * Using underscore _.template method to compile html template
		 */
		template: _.template($("#routesTable").html()),

		/**
		 * Render function can be used for data injection and rendering purpose;
		 * Also passing data to template;
		 */
		render: function() {
			this.$el.html(this.template({
				"ne_lat": "19.09192670",
				"ne_lng": "73.85839480",
				"sw_lat": "18.52064730",
				"sw_lng": "72.87766890"
			}));
		}

	});

	var masterView = new MasterView();
	console.log(masterView.el);

})();