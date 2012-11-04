define(
['jquery', 'lodash', 'backbone', 'models/victim-picture-model'],

function($, _, Backbone, VictimPicture) {

	var VictimPictureCollection = Backbone.Collection.extend({
		model: VictimPicture,
		url: "victim_pictures/"
	});

	return VictimPictureCollection;
});
