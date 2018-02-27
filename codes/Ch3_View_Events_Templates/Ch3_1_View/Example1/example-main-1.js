(function() {

	/**
	 * The goal of this file is to provide the basic understanding of
	 * 1. Create Backbone View
	 * 2. Create instance of Backbone View
	 * 3. Setting default el reference
	 * 4. Setting classname, id and tagname
	 * 5. Setting custom el reference
	 */

	/**
	 * Creating a new View called MasterView by extending Backbone.View class
	 * Syntax: Backbone.View.extend(properties, [classProperties])
	 */
	var MasterView = Backbone.View.extend({
		/**
		 * `initialize` is a constructor function which gets called automatically at
		 * the time of instance creation
		 */
		initialize: function() {
			console.log("Your View have been initialize.");
		},

		/**
		 * if `tagName` is not specified then its default to `div`;
		 * This will set class name for the DOM element to which your view is refering to
		 * You can also set multiple classes like 'container mainpage centerPanel ...'
		 * This is optional property;
		 */
		className: 'container',

		/**
		 * This will set id for the DOM element to which your view is refering to
		 * This is optional property;
		 */
		id: 'master'

	});

	/**
	 * Creating an instance of MasterView.
	 */
	var masterView = new MasterView();
	console.log(masterView);

	/**
	 * masterView.el will display <div id="master" class="container"></div>
	 */
	console.log(masterView.el);

	/**
	 * Creating a new view called ChildView by extending Backbone.View class.
	 */
	var ChildView = Backbone.View.extend({

		/**
		 * tagName is specified as 'ul' will override the default
		 */
		tagName: 'ul',

		className: 'row',

		id: 'child'

	});

	/**
	 * Creating an instance of ChildView.
	 */
	var childView = new ChildView();

	/**
	 * childView.el will display <ul id="child" class="row"></ul>
	 */
	console.log(childView.el);

})();