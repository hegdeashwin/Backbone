(function ($) {

    /*** READ-ME
     * The goal of this file is to provide the basic understanding
     * 1. Form elements - input[Text, Password, Hidden, Number].
     * 2. Recommended way of using data property with schema property.
     */

    var form = new Backbone.Form({
        /*
            Schema property is used to create the form.
            Either you can include it in Backbone.Model or in Backbone.Form

            NOTE: data property does not works with Backbone.Model.
            Thus your form includes default values; Schema property needs to be defined in Backbone.Form.
        */
        schema: {
            /* Text Input */
            InputText: 'Text', // or { type:'Text' },

            /* Password Input */
            InputPassword: 'Password', // or { type:'Password' },

            /* TextArea */
            TextArea: 'TextArea',

            /* Hidden Input */
            InputHidden: 'Hidden',

            /* Number */
            InputNumber: 'Number'
        },

        data: {
            InputText: 'Default Text',
            InputPassword: 'Password',
            TextArea: 'Hello, Backbone-Form'
        }

    }).render();

    $('#form-container').append(form.el);


} (jQuery));