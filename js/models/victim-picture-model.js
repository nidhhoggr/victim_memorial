define(
['jquery', 'lodash', 'backbone'],

function($, _, Backbone) {

    var VictimPicture = Backbone.Model.extend({
        urlRoot: "victim_pictures/",
        defaults: {
          "id": null,
          "victim_memorial_id": null,
          "name": "",
          "type": "",
          "size": 0,
          "created": "",
          "modified": "",
          "title": "",
          "description": "",
          "default": 0,
          "featured": 0
        }
    });

    return VictimPicture;
});
