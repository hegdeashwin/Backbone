(function() {
	/*
		The goal of this file is to provide the basic understanding
		1. Sorting data & respected events.
		2. Get method.

		How to run this example.
		1. Open Example-3.html in Google Chrome browser.
		2. Press F12, go to console tab.
		3. See the message get displayed on that console tab.
	*/


	var MasterModel = Backbone.Model.extend({});

	/*
		Creating a new Collection called MasterCollection by extending Backbone.Collection class.
		Syntax: Backbone.Collection.extend(properties, [classProperties])
	*/
	var MasterCollection = Backbone.Collection.extend({
		/*
			This initialize function will get called when the collection is first created.
		*/
		initialize: function() {
			console.log("Your collection have been initialize.");
		},

		/*
			Used to specify the model class that the collection contains.
		*/
		model: MasterModel,

		comparator: function(ab) {
	        return this._order_by == 'offers' ? ab.get('offers') : -ab.id;
	    },

	    order_by_offers: function() {
	        this._order_by = 'offers';
	        this.sort();
	    },

	    order_by_default: function() {
	        this._order_by = 'id';
	        this.sort();
	    },
	    _order_by: 'id'

	});

	/*
		Creating an object from MasterCollection which calls initialize function.
	*/
	var masterCollection = new MasterCollection();
	console.log(masterCollection);

	/*
		This function will only display id & Offers in different sorted order.
	*/
	function dump(masterCollection) {
	    console.log('---------------------------------------------------------');
	    masterCollection.each(function(object) {
	        console.log("id:" + object.id + ' ' + "Offers:" + object.get('offers'));
	    });
	}

	/*
		Add a model (or an array of models) to the collection.
		Firing an "add" event.
	*/
	masterCollection.add({ id: 1, offers:  6 });
	masterCollection.add({ id: 2, offers: 11 });
	masterCollection.add({ id: 3, offers:  1 });

	/*
		Passing object to dump file
	*/
	dump(masterCollection);

	masterCollection.order_by_offers();
	dump(masterCollection);

	masterCollection.order_by_default();
	dump(masterCollection);

})();
