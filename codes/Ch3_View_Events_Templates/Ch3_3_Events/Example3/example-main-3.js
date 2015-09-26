(function() {
	/**
	 * The goal of this file is to provide the basic understanding of
	 * 1. Old way to Subscribe/Unsubscribe a custom event
	 * 2. Old way to Subscribe a custom event onces
	 * 3. Trigger a subscribed event
	 */

	var MasterView = Backbone.View.extend({
		initialize: function() {

			/**
			 * Subscribe `alarm` event forever till it is manually off
			 */
			this.on('alarm', this.doSomething);

			/**
			 * Subscribe `greeting` event once
			 */
			this.once('greeting', this.doSomethingOnce);
		},

		doSomething: function(name) {
			console.log("Wake up, " + name);
		},

		doSomethingOnce: function(name) {
			console.log("Good Morning, " + name);
		},

		el: '.workspace',

		events: {
			'click input[id=triggerOnAlarm]': 'triggerOnAlarm',
			'click input[id=triggerOffAlarm]': 'triggerOffAlarm',
			'click input[id=triggerOnce]': 'triggerOnce'
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
			this.off('alarm');
		},

		triggerOnce: function() {
			this.trigger('greeting', 'Ashwin');
		}

	});

	new MasterView();

})();