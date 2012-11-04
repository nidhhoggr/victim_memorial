define(
['jquery', 'lodash', 'backbone', 'utils/tpl'],

function($, _, Backbone, tpl) {

    var VictimMemorialView = Backbone.View.extend({

        tagName: "div",
        // Not required since 'div' is the default if no el or tagName specified
        initialize: function() {
            this.template = _.template(tpl.get('victim-memorial-details'));
        },

        render: function(eventName) {
            this.$el.html(this.template(this.model.toJSON()));
            return this.el;
        },
    });

    return VictimMemorialView;

});
