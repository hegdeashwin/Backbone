(function() {
	/**
	 * The goal of this file is to provide the basic understanding of
	 * 1. Create a Collection
	 * 2. Passing Model to Collection
	 * 3. Setting build-in Collection events
	 * 4. Add/Remove Model from collection at the end
	 * 5. Add/Remove Model from collection at the start
	 * 6. Get the length of collection
	 */

	var MasterModel = Backbone.Model.extend({
		/**
		 * `initialize` is a constructor function which gets called automatically at
		 * the time of instance creation
		 */
		initialize: function() {
			console.log("Your model have been initialize");
		}
	});

	var MasterCollection = Backbone.Collection.extend({
		initialize: function() {
			console.log("Your collection have been initialize.");

			/**
			 * Subscribe collection events
			 */
			this.listenTo(this, 'add', this.onModelAdded);
			this.listenTo(this, 'remove', this.onModelRemoved);
		},

		/**
		 * Used to specify the model class that the collection contains.
		 */
		model: MasterModel,

		onModelAdded: function() {
			console.log("Add model event got fired");
		},

		onModelRemoved: function() {
			console.log("Remove model event got fired");
		}
	});

	var masterCollection = new MasterCollection();

	/**
	 * Add a model (or an array of models) to the collection.
	 * Firing an "add" event.
	 */
	masterCollection.add(new MasterModel({
		name: 'Ashwin Hegde'
	}));
	masterCollection.add(new MasterModel({
		name: 'Vinayak Patil'
	}));
	masterCollection.add(new MasterModel({
		name: 'Pavan Solanki'
	}));

	/**
	 * Display the data currently added in the collection.
	 */
	console.log("Data in Collection :: Add ")
	console.log(masterCollection.toJSON());

	/**
	 * Remove a model (or an array of models) from the collection. Fires a "remove" event,
	 * 
	 * `at` is used to get a model from a collection, specified by index.
	 *	Note: index starts from 0
	 */
	masterCollection.remove(masterCollection.at(1));

	/**
	 * Display the data after removing model from the collection.
	 */
	console.log("Remove data from Collection :: Remove ")
	console.log(masterCollection.toJSON());

	/**
	 * Collection maintains a length property, counting the number of models it contains.
	 */
	console.log("Collection length: " + masterCollection.length);

	/**
	 * Add a model at the end of a collection.
	 */
	masterCollection.push(new MasterModel({
		name: 'Kumar Kundan'
	}));

	/**
	 * Display the data currently added in the collection.
	 */
	console.log("Data in Collection :: Push");
	console.log(masterCollection.toJSON());

	/**
	 * Remove and return the last model from a collection
	 */
	masterCollection.pop();

	/**
	 * Display the data after removing last model from the collection.
	 */
	console.log("Data in Collection :: POP");
	console.log(masterCollection.toJSON());

	/**
	 * Add a model at the beginning of a collection.
	 */
	masterCollection.unshift(new MasterModel({
		name: 'Ajay Sajwan'
	}));

	/**
	 * Display the data currently added in the collection.
	 */
	console.log("Data in Collection :: unshift");
	console.log(masterCollection.toJSON());

	/**
	 * Remove and return the first model from a collection.
	 */
	masterCollection.shift();

	/**
	 * Display the data after removing first model from the collection.
	 */
	console.log("Data in Collection :: Shift");
	console.log(masterCollection.toJSON());

})();