(function ($) {

    /*** READ-ME
     * The goal of this file is to provide the basic understanding
     * 1. Understanding how to Backbone-Deep-Model Plugins used.
     * 2. Get and set nested attributes with path syntax.
     * 3. Triggers change events for changes on nested attributes.
     */

    /*** NOTE
     * Creating a new model called MasterModel by extending Backbone.Model class.
     * Syntax: Backbone.DeepModel.extend(properties, [classProperties])
     *
     * As our models has nested attributes; we are going to use Deep-Model plugin for
     * improved support for models with nested attributes,
     * allows you to get and set nested attributes with path syntax, e.g. email.to, email.form etc.
     * triggers change events for changes on nested attributes.
     */
    var MasterModel = Backbone.DeepModel.extend({
        /*
            This initialize function will get called when the model is first created.
        */
        initialize: function() {
            console.log("Your deep-model has been initialize.");
            this.on('change:contacts.mobile', this.updates());
        },

        /*
            These are various attributes that will be set when the model gets created.
        */
        defaults: {
            name: {
                firstname:'Ashwin',
                lastname:'Hegde'
            },
            companyname: 'Cybage Software Private Limited',
            contacts: {
                mobile: '9822769479',
                ext: '8621',
                email: {
                    'company': 'ashwinh@cybage.com',
                    'personal': 'ashwin.hegde3@gmail.com',
                }
            },
            networks: [
                { name: 'Bhavik', company: 'Blackberry' },
                { name: 'Nakool', company: 'Infosys' }
            ]
        },

        /*
            This event gets fired when contacts.mobile value get changed.
        */
        updates: function() {
            console.log("Change event get called.");
        }
    });

    /*
        Creating an object from MasterModel which calls initialize function.
    */
    var masterModel = new MasterModel();
    console.log("Model class object: ");
    console.log(masterModel);

    console.log("Get nested attributes level 1:");
    console.log(masterModel.get('name'));
    console.log(masterModel.get('companyname'));
    console.log(masterModel.get('contacts'));

    console.log("Get nested attributes level 2:")
    console.log(masterModel.get('name.firstname'));
    console.log(masterModel.get('contacts.ext'));

    console.log("Get nested attributes level 3:")
    console.log(masterModel.get('contacts.email.personal'));

    console.log("Get nested attrbutes array level 3: ")
    console.log(masterModel.get('networks.1.name'));

    console.log("Set nested attributes at level 3");
    masterModel.set({
        'contacts.email.personal': 'ashwinh.cybage@gmail.com',
        'contacts.email.webmail': 'ashwinh@yahoo.com'
    });
    console.log("Get new nested attributes array level 3:")
    console.log(masterModel.get('contacts.email.personal'));
    console.log(masterModel.get('contacts.email.webmail'));

    console.log("Set nested attrbutes array level 3: ")
    masterModel.set({
        'networks.1.name': 'Nakul',
        'networks.2.name': 'Yogi',
        'networks.2.company': 'Wipro'
    });

    console.log("Get nested attrbutes array level 3: ")
    console.log(masterModel.get('networks.1.name'));
    console.log(masterModel.get('networks.2.name'));

    masterModel.set({
        'contacts.mobile': '9822256473'
    });
} (jQuery));