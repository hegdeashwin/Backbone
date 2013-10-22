(function() {
	/*
		The goal of this file is to provide the basic understanding
		creating a router,
		Initialize the router,
		Backbone history,
		Routes hash,
		Simple route,
		Route parameters,
		Getting currect route


		How to run this example.
		1. Open Example-1.html in Google Chrome browser.
		2. Press F12, go to console tab.
		3. See the message get displayed on that console tab.
	*/

	/*
		Creating a new view called MasterRouter by extending Backbone.Router class
	*/
	var MasterRouter = Backbone.Router.extend({

		/*
			This initialize function will get called when the router is first created.
		*/
		initialize: function() {
			/*
				This message in console.log will get displayed in JavaScript console of browser.
				When the page gets loaded.
			*/
			console.log("Router got initialize");

			/*
				During page load, after your application has finished creating all of its routers,
				be sure to call Backbone.history.start(), or
				Backbone.history.start({pushState: true}) to route the initial URL.
			*/
			Backbone.history.start();  // is same as // Backbone.history.start({pushState: false});

			/*
				Manually create a route for the router,
				The route argument may be a routing string or regular expression.
			*/
			// Matches #page/8, passing "8"
			this.route("page/:number", function(number){
				console.log("Route Callback: Page/{number}");
				console.log("Get @param{number}: " + number);
			});

			// Matches /117-a/b/c/open, passing /117-a/b/c to open function.
			this.route(/^(.*?)\/open$/, "open");

		},

		/*
			The routes hash maps URLs with parameters to functions on your router
			(or just direct function definitions, if you prefer).
		*/
		routes: {
			"":"home",    // #help
			"about": "about",   // #about
			"search/:query/p:page": "search",  // #search/book/p7
			"contact": function() {
				console.log("Route Callback: Contact Us");
				this.getCurrentRoutes();
			},
			"help": "help"
		},

		home: function() {
			console.log("Route Callback: Home");
			this.getCurrentRoutes();
		},

		about: function() {
			console.log("Route Callback: About Us");
			this.getCurrentRoutes();
		},

		search: function(query,page) {
			console.log("Route Callback: Search");
			console.log("	=> Search Query: " + query);
			console.log("	=> Page No: " + page);
		},

		open: function(id) {
			console.log("Route Callback: Open (Redirect to Help Callback)");
			console.log("Get @param {id}: " + id);

			/*
				Whenever you reach a point in your application that you'd like to save as a URL,
				call navigate in order to update the URL. If you wish to also call the route function,
				set the trigger option to true.
				To update the URL without creating an entry in the browser's history, set the replace option to true.
			*/
			this.navigate("help", {trigger: true, replace: true});
		},

		help: function() {
			console.log("Route Callback: Help");
			this.getCurrentRoutes();
		},

		getCurrentRoutes: function() {
			console.log("Backbone History Fragment (Current Route): " + Backbone.history.fragment);
		}
	});

	/*
		Creating an object from MasterRouter which calls initialize function.
	*/
	var masterRouter = new MasterRouter();

})();
