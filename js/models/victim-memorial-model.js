define(
['jquery', 'lodash', 'backbone'],

function($, _, Backbone) {

    var VictimMemorial = Backbone.Model.extend({
        urlRoot: "victim_memorials/",
        defaults: {
          "id": null,
          "name": "",
          "description": "",
          "dob": "",
          "dod": "",
          "perp": ""
        }
    });

    return VictimMemorial;
});
