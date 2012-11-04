define(
['jquery', 'lodash', 'backbone', 'models/victim-memorial-model'],

function($, _, Backbone, VictimMemorial) {

	var VictimMemorialCollection = Backbone.Collection.extend({
		model: VictimMemorial,
		url: "victim_memorials/"
	});

	return VictimMemorialCollection;
});
