(function() {
	/**
	 * The goal of this file is to provide the basic understanding of
	 * 1. Sorting data & respected events
	 */

	var MasterModel = Backbone.Model.extend({});

	var MasterCollection = Backbone.Collection.extend({
		initialize: function() {
			console.log("Your collection have been initialize.");
		},

		model: MasterModel,

		comparator: function(sortby) {
			return (this._order_by === 'offers') ? sortby.get('offers') : sortby.id;
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

	var masterCollection = new MasterCollection();
	console.log(masterCollection);

	/**
	 * This function will only display id & Offers in different sorted order.
	 */
	function dump(masterCollection) {
		masterCollection.each(function(object) {
			console.log("id:" + object.id + ' ' + "Offers:" + object.get('offers'));
		});
	}

	masterCollection.add([{
		id: 1,
		offers: 6
	}, {
		id: 2,
		offers: 11
	}, {
		id: 3,
		offers: 1
	}]);

	/*
		Passing object to dump file
	*/
	console.log("No Sorting: ");
	dump(masterCollection);

	console.log("\nSort by Offers: ");
	masterCollection.order_by_offers();
	dump(masterCollection);

	console.log("\nSort by id (Default): ");
	masterCollection.order_by_default();
	dump(masterCollection);

})();