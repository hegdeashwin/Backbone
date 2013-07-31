(function() {
	/*
		The goal of this file is to provide the basic understanding 
		1. Removing attributes.
		2. Operations on attributes & model.
		3. Model & attributes id.
		
		How to run this example.
		1. Open Example-2.html in Google Chrome browser.
		2. Press F12, go to console tab.
		3. See the message get displayed on that console tab.
	*/

	/*
		Creating a new model called MasterModel by extending Backbone.Model class.
		Syntax: Backbone.Model.extend(properties, [classProperties])
	*/	
	var MasterModel = Backbone.Model.extend({});

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
		Setting the bunch of attributes in the model.
	*/
	masterModel.set({
		'firstName': 'Ashwin',
		'lastName': 'Hegde',
		'designation': 'Web Developer'
	});

	/*
		Getting the newly set attributes values.
	*/
	console.log("Getting attributes: ");
	console.log(masterModel.toJSON());

	/*
		Check, if the attribute is already set or not
	*/
	if(masterModel.has('city')) {
		console.log("City attribute is already set");
	} else {
		console.log("City attribute is not set");
	}

	if(masterModel.has('lastName')) {
		console.log("Last name attribute is already set");
	} else {
		console.log("Last name attribute is not set");
	}

	/*
		Unset the `designation` attribute and then try get the data.
	*/
	masterModel.unset('designation');
	
	/*
		Getting the attribute.
	*/
	console.log("Getting the attributes after unset");
	console.log(masterModel.toJSON());

	/*
		Clear will remove all the attributes and then try get the data.
	*/
	masterModel.clear();
	/*
		Getting the attribute.
	*/
	console.log("Getting the attributes after clear");
	console.log(masterModel.toJSON());
	
	/*
		Get model client id.
	*/
	console.log("Model Client id: " + masterModel.cid);

	/*
		Creating a model & setting user id to it.
	*/
	var childModel = Backbone.Model.extend({
		idAttribute: "_id"
	});

	var childmodel = new childModel({ _id: 1, firstName: 'Vinayak', lastName: 'Patil'});
	console.log(childmodel.toJSON());
	console.log("Client id still remain: ");
	console.log(childmodel);
	console.log("Getting user id: " + childmodel.id);	
})();
