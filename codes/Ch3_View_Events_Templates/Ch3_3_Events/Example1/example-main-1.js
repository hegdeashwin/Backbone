(function() {
	/**
	 * The goal of this file is to provide the basic understanding of
	 * 1. Define events hash
	 * 2. Define event scope for View using el DOM reference
	 */

	var MasterView = Backbone.View.extend({
		/**
		 * All views have a DOM element at all times (the el property),
		 * whether they've already been inserted into the page or not.
		 *
		 * el also defines your view scope; You can not bind bind in events hash for DOM element out side this view
		 */
		el: '.workspace',

		/**
		 * Events hash.
		 */
		events: {
			'click input[type=submit]': 'submitForm',
			'click input[type=button]': 'buttonForm'
		},

		/**
		 * Custom function gets fired when specific event gets called.
		 */
		submitForm: function() {
			console.log("Submit Button got clicked. Time to validate form data.");
		},

		/**
		 * Won't able to access this function. The element is outside view scope
		 */
		buttonForm: function() {
			console.log("Won't able to access this function. This is out of view scope.");
		}

	});

	var masterView = new MasterView();

})();
