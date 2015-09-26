(function() {
	/**
	 * The goal of this file is to provide the basic understanding of
	 * 1. Using model for data
	 * 2. Using model instance from within view constructor
	 * 3. Parsing data in model
	 * 4. Rendering underscore template
	 */

	var MasterModel = Backbone.Model.extend({

		url: function() {
			return 'http://jsonplaceholder.typicode.com/users';
		},

		parse: function(response) {
			var minInfo = [];

			_.each(response, function(data) {
				minInfo.push({
					"name": data.name,
					"email": data.email,
					"website": data.website
				});
			});

			console.log('Parsed Data: ', minInfo);

			return minInfo;
		}
	});

	var MasterView = Backbone.View.extend({

		initialize: function() {
			this.model = new MasterModel();
			this.render();
		},

		el: "#directionApi",

		template: _.template($("#routesTable").html()),

		render: function() {
			var self = this;

			this.model.fetch({
				success: function() {
					console.log(self.model.toJSON());

					/**
					 * Passing key:value data to template and template to DOM
					 */
					self.$el.html(self.template({
						data: self.model.toJSON()
					}));
				},
				error: function() {
					console.log("Some error got triggered while accessing service api.");
				}
			});

			return this;
		}

	});

	var masterView = new MasterView();
	console.log(masterView.el);

})();