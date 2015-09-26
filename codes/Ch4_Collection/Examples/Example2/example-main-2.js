(function() {
	/**
	 * The goal of this file is to provide the basic understanding of
	 * 1. Using pluck
	 * 2. Using where
	 */

	var MasterModel = Backbone.Model.extend({});

	var masterCollection = new Backbone.Collection([
		{name: "Ashwin Hegde", job: "Software Engineer"},
		{name: "Kumar Kundan", job: "Engineering Manager"},
		{name: "Saju Sasidharan", job: "Team Lead"}
	]);

	/**
	 * Pluck an attribute from each model in the collection.
	 */
	var names = masterCollection.pluck("name");
	/**
	 * Data in Object format
	 */
	console.log("Data in Object format :: Pluck");
	console.log(names);

	/**
	 * Data in string format
	 */
	console.log("Data in String format :: Pluck")
	console.log(JSON.stringify(names));

	/**
 	* Return an array of all the models in a collection that match the passed attributes.
 	* Useful for simple cases of filter.
	 */
	console.log(masterCollection.where({job: "Software Engineer"}));
	console.log(masterCollection.where({job: "Engineering Manager"}));
	console.log(masterCollection.where({job: "Team Lead"}));

})();
