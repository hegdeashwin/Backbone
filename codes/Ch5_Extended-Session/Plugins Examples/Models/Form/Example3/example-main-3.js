(function ($) {

    /*** READ-ME
     * The goal of this file is to provide the basic understanding
     * 1. Using list.
     */

    var form = new Backbone.Form({
        schema: {
            todoList: {
                type: 'List',
                itemType: 'Text',
                confirmDelete: 'Are you sure you want to delete this item?'
            }
        }
    }).render();

    $('#form-container').append(form.el);


} (jQuery));