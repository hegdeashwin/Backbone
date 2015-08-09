(function ($) {

    /*** READ-ME
     * The goal of this file is to provide the basic understanding
     * 1. Understanding how to Backbone-Forms Plugins used.
     * 2. Using Schema property in Backbone.Model & Backbone.Form
     */

    var MasterModel = Backbone.Model.extend({
        /*
            Schema property is used to create the form.
            Either you can include it in model or in Backbone.Form

            NOTE: If <label> are in camelCased will leave 1 space &
            if all small letters are used there will be no space between labels.
            E.g. Firstname becomes Firstname.
            E.g. lastName becomes Last Name.
        */
        schema: {
            Firstname: 'Text',
            LastName: 'Text'
        }
    });

    /*
        Creating an object from MasterModel1 which calls initialize function.
    */
    var masterModel = new MasterModel();

    var form = new Backbone.Form({
        /*
            Setting model's object to get the model schema and build the form.
        */
        model: masterModel,

        /*
            If schema property defined in Backbone.Form will override the schema property defined in Model
            if model is specified.

            NOTE: uncomment below schema code and see the effects. Thus either toy can specify schama in our
            Backbone.Model or Backbone.Form
        */
        // schema: {
        //     MiddleName: 'Text'
        // }

    }).render();

    $('#form-container').append(form.el);


} (jQuery));