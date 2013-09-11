(function ($) {

    /*
        The goal of this file is to provide the basic understanding
        1. Understanding how to integrate Backbone's Collection, Model & View.
        2. Understanding how to use Underkscore's micro-templating feature.
        3. Perform read operation (CRUD, R = Read) on data.
    */

    /*
        This is JavaScript object holding some amount of data used for data-manipulation.
    */
    var people = [
        { name: "ABC", address: "Pune, India", tel: "0123456789", email: "abc@cybage.com", type: "family" },
        { name: "PQR", address: "Canada, USA", tel: "0123456987", email: "pqr@blackberry.com", type: "friend" },
        { name: "XYZ", address: "Mumbai, India", tel: "0123456584", email: "xyz@infosys.com", type: "family" },
        { name: "DEF", address: "New York, USA", tel: "0123465645", email: "def@wipro.com", type: "colleague" },
        { name: "GHI", address: "New York, USA", tel: "0123465645", email: "ghi@wipro.com", type: "family" }
    ];

    /*
        Creating a new model called Contact by extending Backbone.Model class.
    */
    var Contact = Backbone.Model.extend({
        /*
            These are various attributes that will be set by default when the model gets created.
        */
        defaults: {
            photo: "../../../img/placeholder.png",
            name: "",
            address: "",
            tel: "",
            email: "",
            type: ""
        }
    });

    /*
        Creating a new collection called Contacts by extending Backbone.Collection class.
    */
    var Contacts = Backbone.Collection.extend({
        /*
            Used to specify the model class that the collection contains.
        */
        model: Contact
    });

    /*
        Creating a new view called ContactView by extending Backbone.View class.
    */
    var ContactView = Backbone.View.extend({
        /*
            tagName & className property will create following HTML markup.
            <article className="contact-container"></article>
        */

        className: "contact-container",

        template: _.template($("#contactTemplate").html()),

        render: function () {
            console.log("Model data 1 by 1: ");
            console.log(this.model.toJSON());
            /*
                Passing the model data to template and then to this.$el.html which has article tag.
                Thus, the updated template with all the data rendered gets appended to article tag.
            */
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }

    });

    /*
        Creating a new view called DirectoryView by extending Backbone.View class.
    */
    var ContactsView = Backbone.View.extend({

        el: $("#contacts"),

        /*
            This initialize function will get called when the view is first created.
        */
        initialize: function () {
            /*
                Creating an object from Contacts which calls initialize function.
            */
            this.collection = new Contacts(people);

            this.render();

            this.collection.on("reset", this.render, this);
            this.collection.on("add", this.renderContact, this);
        },

        render: function () {
            _.each(this.collection.models, function (item) {
                this.renderContact(item);
            }, this);
        },

        renderContact: function (item) {
            /*
                Creating an object from ContactView which calls initialize function.

                Passing the model to ContactView.
            */
            var contactView = new ContactView({
                model: item
            });

            /*
                Calling the render function and getting the updated el content and
                append it to this.$el which content div#contacts.
            */
            this.$el.append(contactView.render().el);
        }

    });

    /*
        Creating an object from DirectoryView which calls initialize function.
    */
    var contacts = new ContactsView();

} (jQuery));