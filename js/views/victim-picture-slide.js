define(
['jquery', 'lodash', 'backbone', 'utils/tpl'],

function($, _, Backbone, tpl) {

    var VictimPictureSlideView = Backbone.View.extend({

        tagName: 'ul',
        id: 'foo',

        initialize: function() {
        },

        render: function(eventName) {

            var model = this.collection.models;

            if(!model) 
               model = this.collection;
 
            _.each(model, function(victim_picture) {
                this.appendNewVictimPicture(victim_picture);
            }, this);

            return this.el;
        },
        appendNewVictimPicture: function(victim_picture) {
            this.$el.append(new VictimPictureSlideItemView({
                model: victim_picture
            }).render());
        }
    });

    var VictimPictureSlideItemView = Backbone.View.extend({
        
        tagName: 'li',

        initialize: function() {
            this.template = _.template(tpl.get('victim-picture-slide-item'));
        },

        render: function(eventName) {
            this.$el.html(this.template(this.model.toJSON()));
            return this.el;
        }

    });

    return VictimPictureSlideView;
});
