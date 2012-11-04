define(
['jquery', 'lodash', 'backbone', 'utils/tpl'],

function($, _, Backbone, tpl) {

	var VictimView = Backbone.View.extend({

		initialize: function() {
			this.template = _.template(tpl.get('victim'));
		},

		render: function() {
			this.$el.html(this.template());
			return this.el;
		}

	});
	return VictimView;
});
