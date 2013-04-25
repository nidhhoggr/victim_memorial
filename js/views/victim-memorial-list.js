define(
['jquery', 'lodash', 'backbone', 'utils/tpl'],

function($, _, Backbone, tpl) {

    var VictimMemorialListView = Backbone.View.extend({

        tagName: 'ul',

        initialize: function() {
            //this.model.bind("reset", this.render, this);
        },

        render: function(eventName) {
            _.each(this.model, function(victim_memorial) {
                this.appendNewVictimMemorial(victim_memorial);
            }, this);
            return this.el;
        },

        appendNewVictimMemorial: function(victim_memorial) {
            this.$el.append(new VictimMemorialListItemView({
                model: victim_memorial
            }).render());
        }
    });

    var VictimMemorialListItemView = Backbone.View.extend({

        tagName: "li",

        initialize: function() {
            this.template = _.template(tpl.get('victim-memorial-list-item'));
        },

        render: function(eventName) {
            this.$el.html(this.template(this.model.toJSON()));
            return this.el;
        }

    });

    return VictimMemorialListView;

});
