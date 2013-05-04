define(
['jquery', 'lodash', 'backbone', 'utils/tpl'],

function($, _, Backbone, tpl) {

    var VictimMemorialView = Backbone.View.extend({

        routeUrl: "#victim_memorials/",
        // Not required since 'div' is the default if no el or tagName specified

        events: {
            "click .rev": "viewPrevVic",
            "click .fwd": "viewNextVic"
        },
        initialize: function(options) {
            this.template = _.template(tpl.get('victim-memorial-details'));
            this.paginator = options.paginator; 
        },
        render: function(eventName) {
 
            //craziness
            if(typeof this.model === "undefined") return;

            this.$el.html(this.template(this.model.toJSON()));
            return this.el;
        },
        viewPrevVic: function(e) {
            e.preventDefault();

            var back_id = parseInt(this.model.id) - 1;
            if(back_id== 0) 
                back_id = this.model.collection.length;

            Backbone.history.navigate(
                this.routeUrl + back_id, 
                {trigger: true, replace: true}
            );
        },
        viewNextVic: function(e) {
            e.preventDefault();

            var next_id = parseInt(this.model.id) + 1;

            if(next_id > this.model.collection.length)
                next_id = 1;

            console.log(this.routeUrl + next_id);

            Backbone.history.navigate(
                this.routeUrl + next_id,
                {trigger: true, replace: true}
            );
 
        }
    });

    return VictimMemorialView;

});
