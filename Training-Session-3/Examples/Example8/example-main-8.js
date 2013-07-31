(function() {
	/*
		The goal of this file is to provide the basic understanding
		1. Backbone's build-in events methods new way.

		How to run this example.
		1. Open Example-8.html in Google Chrome browser.
		2. Press F12, go to console tab.
		3. See the message get displayed on that console tab.
	*/

	var MasterView = Backbone.View.extend({
		el: '.workspace',

		events: {
			'click input[type=submit]': 'eventsHubMultiple',
			'click input[type=button]': 'eventsHubSingle'
		},

		eventsHubMultiple: function() {
			/*
				Gets called when object triggers an `customEvent` event
				and passes a message through it. If message is not passed
				message will show `undefined.

				Syntax:
					object.trigger(event, [*args]);

			*/
			this.trigger('customEvent','Ashwin');

			/*
				Syntax:
					object.stopListening([other], [event], [callback]);
			*/
			this.stopListening(this, 'customEvent');
		},

		eventsHubSingle: function() {
			this.trigger('customEventOnce', 'Vinayak');
		},

		initialize: function() {
			/*
				Syntax:
					object.listenTo(other, event, callback)
			*/
			this.listenTo(this, 'customEvent', this.doSomething);

			/*
				Syntax:
					object.listenToOnce(other, event, callback)
			*/
			this.listenToOnce(this, 'customEventOnce', this.doSomethingOnce);
		},

		/*
			Custom function which gets triggered with trigger event method.
			name is optional, It related to the concept of passing data as function arguments.
		*/
		doSomething: function(name) {
			console.log("Hello, " + name);
		},

		doSomethingOnce: function(name) {
			console.log("Good Evening, " + name);
		}
	});

	/*
		Creating an object from MasterView which calls initialize function.
	*/
	var masterView = new MasterView();

})();
