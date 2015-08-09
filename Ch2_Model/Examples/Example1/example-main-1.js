(function() {
	/*
		The goal of this file is to provide the basic understanding
		1. Create a Model class.
		2. Setting default attributes for the Model.
		3. Getting & setting attributes.
		4. Removing attributes.

		How to run this example.
		1. Open Example-1.html in Google Chrome browser.
		2. Press F12, go to console tab.
		3. See the message get displayed on that console tab.
	*/

	/*
		Creating a new model called MasterModel by extending Backbone.Model class.
		Syntax: Backbone.Model.extend(properties, [classProperties])
	*/
	var MasterModel = Backbone.Model.extend({
		/*
			This initialize function will get called when the model is first created.
		*/
		initialize: function() {
			console.log("Your model have been initialize.");
		},

		/*
			These are various attributes that will be set when the model gets created.
		*/
		defaults: {
			companyName: 'Cybage Software Private Limited',
			country: 'India',
			city: 'Pune'
		}
	});

	/*
		Creating an object from MasterView which calls initialize function.
	*/
	var masterModel = new MasterModel();
	
	/*
		Getting information about Model object.
	*/
	console.log("Model data: ");
	console.log(masterModel);

	/*
		Getting the default values from attributes.
	*/
	console.log("Getting default attributes: ");
	console.log("Company Name: " + masterModel.get('companyName'));
	console.log("Country: " + masterModel.get('country'));
	console.log("City: " + masterModel.get('city'));

	/*
		Setting the attribute in the model using `set` property.
	*/
	console.log("Setting 1 attribute and then getting it: ");
	masterModel.set('totalEmployees','4000');
	/*
		Getting the newly set attribute value using `get` property.
	*/
	console.log("Total Employees: " + masterModel.get('totalEmployees'));

	/*
		Setting the bunch of attributes in the model.
	*/
	console.log("Setting bunch of attributes and the getting them all: ");
	masterModel.set({
		'CMMiLevel': '5',
		'totalDevelopmentBranches': '3'
	});

	/*
		Getting the newly set attributes values.
	*/
	console.log("CMMiLevel Standard: " + masterModel.get('CMMiLevel'));
	console.log("Total Development Centers in India: " + masterModel.get('totalDevelopmentBranches'));

	/*
		Getting information about object previous attributes.
	*/
	console.log("Explore Model Object Previous Attributes: ");
	console.log(masterModel._previousAttributes);

	/*
		Getting information about object either by attributes or toJSON
	*/
	console.log("Explore Model Object Attributes: ");
	console.log(masterModel.attributes);
	console.log(masterModel.toJSON());

})();
