(function ($) {

    /*
        The goal of this file is to provide the basic understanding
        1. Understanding how Backbone Router works.
    */

    /*
        This is JavaScript object holding some amount of data used for data-manipulation.
    */
    var people = [
        { name: "Contact 1", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" },
        { name: "Contact 2", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" },
        { name: "Contact 3", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "friend" },
        { name: "Contact 4", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "colleague" },
        { name: "Contact 5", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" },
        { name: "Contact 6", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "colleague" },
        { name: "Contact 7", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "friend" },
        { name: "Contact 8", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" }
    ];

    /*
        Creating a new model called Contact by extending Backbone.Model class.
    */
    var Contact = Backbone.Model.extend({
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
        model: Contact
    });

    /*
        Creating a new view called ContactView by extending Backbone.View class.
    */
    var ContactView = Backbone.View.extend({
        tagName: "article",
        className: "contact-container",
        template: _.template($("#contactTemplate").html()),

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    /*
        Creating a new view called ContactsView by extending Backbone.View class.
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
            this.$el.find("#filter").append(this.createSelect());

            this.on("change:filterType", this.filterByType, this);
            this.collection.on("reset", this.render, this);
            this.collection.on("add", this.renderContact, this);

        },

        render: function () {
            this.$el.find("article").remove();

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
        },

        // Pluck the type from the object people.
        getTypes: function () {
            return _.uniq(this.collection.pluck("type"), false, function (type) {
                return type.toLowerCase();
            });
        },

        /*
            Create a select html tag and fillup it with options & values.
        */
        createSelect: function () {
            var filter = this.$el.find("#filter"),
                select = $("<select/>", {
                    html: "<option value='all'>All</option>"
                });

            _.each(this.getTypes(), function (item) {
                var option = $("<option/>", {
                    value: item.toLowerCase(),
                    text: item.toLowerCase()
                }).appendTo(select);
            });

            return select;
        },

        /*
            Event hash
        */
        events: {
            "change #filter select": "setFilter"
        },

        // Set filter property and fire change event
        setFilter: function (e) {
            this.filterType = e.currentTarget.value;
            this.trigger("change:filterType");
        },

        // Filter the view
        filterByType: function () {
            if (this.filterType === "all") {
                this.collection.reset(people);
                contactsRouter.navigate("filter/all");
            } else {
                this.collection.reset(people, { silent: true });

                var filterType = this.filterType,
                    filtered = _.filter(this.collection.models, function (item) {
                        return item.get("type").toLowerCase() === filterType;
                    });

                this.collection.reset(filtered);

                contactsRouter.navigate("filter/" + filterType);
            }
        }

    });

    /*
        Creating a new router called ContactsRouter by extending Backbone.Router class.
    */
    var ContactsRouter = Backbone.Router.extend({
        routes: {
            "filter/:type": "urlFilter"
        },

        urlFilter: function (type) {
            contacts.filterType = type;
            contacts.trigger("change:filterType");
        }
    });

    /*
        Creating an object from ContactsView which calls initialize function.
    */
    var contacts = new ContactsView();

    /*
        Creating an object from ContactsRouter which calls initialize function.
    */
    var contactsRouter = new ContactsRouter();

    //start history service
    Backbone.history.start();

} (jQuery));