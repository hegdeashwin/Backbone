(function() {
	/**
	 * The goal of this file is to provide the basic understanding of
	 * 1. Using model for data with id
	 */

	var MasterModel = Backbone.Model.extend({
		url: function() {
			var _apiUrl = 'http://jsonplaceholder.typicode.com/users/1';

			if (this.has('id')) {
				_apiUrl = 'http://jsonplaceholder.typicode.com/users/' + this.get('id');
			}
			return _apiUrl;
		}
	});

	var MasterView = Backbone.View.extend({

		initialize: function() {
			this.model = new MasterModel({
				"id": 9
			});
			this.render();
		},

		el: "#directionApi",

		template: _.template($("#routesTable").html()),

		render: function() {
			var self = this;

			this.model.fetch({
				success: function() {
					self.$el.html(self.template(self.model.toJSON()));
				},
				error: function() {
					console.log("Some error got triggered while accessing service api.");
				}
			});
		}

	});

	var masterView = new MasterView();
	console.log(masterView.el);

})();