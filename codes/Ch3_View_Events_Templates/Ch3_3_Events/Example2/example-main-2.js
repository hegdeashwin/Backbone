(function() {
	/**
	 * The goal of this file is to provide the basic understanding of
	 * 1. Remove view from DOM.
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

	/**
	 * Don't save your instance; Just create it
	 */
	new MasterView();

})();
