(function() {
	/**
	 * The goal of this file is to provide the basic understanding of
	 * 1. Create Backbone Model
	 * 2. Create instance of Backbone Model
	 * 3. Setting & getting default attributes
	 * 4. Initialize a constructor
	 * 5. Setting & getting attributes
	 * 6. Get the list of all attributes
	 */

	/**
	 * Creating a new model called MasterModel by extending Backbone.Model class
	 * Syntax: Backbone.Model.extend(properties, [classProperties])
	 */
	var MasterModel = Backbone.Model.extend({
		/**
		 * `initialize` is a constructor function which gets called automatically at
		 * the time of instance creation
		 */
		initialize: function() {
			console.log("Your model have been initialize.");
		},

		/**
		 * These are various attributes that will be set by default when the model gets created.
		 */
		defaults: {
			companyName: 'Cybage Software Private Limited',
			country: 'India',
			city: 'Pune'
		}
	});

	/**
	 * Creating an instance of MasterModel.
	 */
	var masterModel = new MasterModel();

	/**
	 * Getting information about Model instance.
	 */
	console.log("Model object: ", masterModel);

	/**
	 * Getting the default values from attributes using `get` method.
	 */
	console.log("Company Name: " + masterModel.get('companyName'));
	console.log("Country: " + masterModel.get('country'));
	console.log("City: " + masterModel.get('city'));

	/**
	 * Setting a single attribute in the model using `set` method.
	 */
	masterModel.set('totalEmployees', '4000');

	/**
	 * Getting the newly set attribute value using `get` method.
	 */
	console.log("Total Employees: ", masterModel.get('totalEmployees'));

	/**
	 * Setting multiple attributes in the model using `set` method.
	 */
	masterModel.set({
		'CMMiLevel': 5,
		'totalDevCenters': 4
	});

	/**
	 * Getting the newly set attributes values.
	 */
	console.log("CMMiLevel Standard: ", masterModel.get('CMMiLevel'));
	console.log("Total Development Centers in India: ", masterModel.get('totalDevCenters'));

	/**
	 * Getting information about object previous attributes.
	 */
	console.log("Previous attributes: ", masterModel._previousAttributes);

	/**
	 * Getting the list of all attributes toJSON
	 */
	console.log("1st Way: ", masterModel.attributes);
	console.log("2nd Way: ", masterModel.toJSON());

})();