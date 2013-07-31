(function() {
	/*
		The goal of this file is to provide the basic understanding
		1. Operations on Data.

		How to run this example.
		1. Open Example-2.html in Google Chrome browser.
		2. Press F12, go to console tab.
		3. See the message get displayed on that console tab.
	*/

	var MasterModel = Backbone.Model.extend({});

	/*
		Creating a new collection called MasterCollection by extending Backbone.Collection class.
		Syntax: Backbone.Collection.extend(properties, [classProperties])
	*/
	var masterCollection = new Backbone.Collection([
		{name: "Ashwin Hegde", job: "Web Developer"},
		{name: "Vinayak Patil", job: "Sr. Web Developer"},
		{name: "Jerin John", job: 'Web Developer'},
		{name: "Saju Sasidharan", job: "WebDev Analyst"}
	]);

	/*
		Pluck an attribute from each model in the collection.
	*/
	var names = masterCollection.pluck("name");
	/*
		Data in Object format
	*/
	console.log("Data in Object format :: Pluck");
	console.log(names);

	/*
		Data in string format
	*/
	console.log("Data in String format :: Pluck")
	console.log(JSON.stringify(names));

	/*
		Return an array of all the models in a collection that match the passed attributes.
		Useful for simple cases of filter.
	*/
	console.log(masterCollection.where({job: "WebDev Analyst"}));
	console.log(masterCollection.where({job: "Sr. Web Developer"}));
	console.log(masterCollection.where({job: "Web Developer"}));

})();
