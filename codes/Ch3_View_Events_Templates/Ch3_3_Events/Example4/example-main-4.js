(function() {
	/**
	 * The goal of this file is to provide the basic understanding of
	 * 1. New way to Subscribe/Unsubscribe a custom event
	 * 2. New way to Subscribe a custom event onces
	 * 3. Trigger a subscribed event
	 */

	var MasterView = Backbone.View.extend({
		initialize: function() {

			this.listenTo(this, 'alarm', this.doSomething);

			this.listenToOnce(this, 'greeting', this.doSomethingOnce);
		},

		el: '.workspace',

		events: {
			'click input[id=triggerOnAlarm]': 'triggerOnAlarm',
			'click input[id=triggerOffAlarm]': 'triggerOffAlarm',
			'click input[id=triggerOnce]': 'triggerOnce'
		},

		doSomething: function(name) {
			console.log("Wake up, " + name);
		},

		doSomethingOnce: function(name) {
			console.log("Good Morning, " + name);
		},

		triggerOnAlarm: function() {
			/**
			 * Trigger the event by specifing event name
			 */
			this.trigger('alarm', 'Ashwin');
		},

		triggerOffAlarm: function() {
			/**
			 * Unsubscribe the event
			 */
			this.stopListening(this, 'alarm');
		},

		triggerOnce: function() {
			this.trigger('greeting', 'Ashwin');
		}

	});

	new MasterView();

})();