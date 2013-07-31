(function() {
	/*
		The goal of this file is to provide the basic understanding
		1. Backbone's build-in events.
			=> change, request, sync.
		2. How these events play role in Backbone Model.

		How to run this example.
		1. Open Example-9.html in Google Chrome browser.
		2. Press F12, go to console tab.
		3. See the message get displayed on that console tab.
	*/

	var MasterModel = Backbone.Model.extend({
		defaults: {
			firstName: 'Ashwin',
			lastName: 'Hegde'
		},

		url: function() {
			return "http://maps.googleapis.com/maps/api/directions/json?origin=Pune&destination=Mumbai&sensor=false";
		}
	});

	var MasterView = Backbone.View.extend({

		el: '.workspace',

		initialize: function() {
			var self = this;

			this.model = new MasterModel();

			/*
				'Change' event gets automatically triggered when model's data is changed.
			*/
			this.model.on('change', this.changeAttr, this);

			/*
				Display model state in browser console.
			*/
			console.log(this.model);

			/*
				'request' event gets automatically triggered when a model has started a request to the server.
			*/
			//this.model.on('request', this.serverRequest, this);

			/*
				'sync' event gets automatically triggered when a model has been successfully synced with the server.
			*/
			//this.model.on('sync', this.serverConnected, this);

			// this.model.fetch({
			// 	success: function() {
			// 		console.log("Loading Data: ");
			// 		console.log(self.model.toJSON());
			// 	},
			// 	error: function() {
			// 		console.log("Some exception occured while fetching data from Google service api.");
			// 	}
			// });
		},

		events: {
			'click input[type=submit]': 'updateModelAttr',
			'click input[type=button]': 'cleanModelAttr'
		},

		updateModelAttr: function() {
			// this.model.set({age: '25'});
			// this.model.set({firstName: 'Vinayak'});
		},

		cleanModelAttr: function() {
			this.model.clear(); // This will automatically trigger model change event.
			// this.model.clear({silent: true}); This will not trigger model change event, as silent is pass as option.
			console.log(this.model);
		},

		changeAttr: function() {
			console.log("Change event got triggered.");
		},

		serverRequest: function() {
			console.log("A model has started a request to the server.");
		},

		serverConnected: function() {
			console.log("A model has been successfully synced with the server.");
		}

	});

	/*
		Creating an object from MasterView which calls initialize function.
	*/
	var masterView = new MasterView();

})();
