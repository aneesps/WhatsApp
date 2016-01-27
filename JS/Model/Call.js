var Call = Backbone.Model.extend({
	defaults: {
		'id':'',
		'date':''
	}
});

var Calls = Backbone.Collection.extend({
	model:Call,
	url:'/app/get-calls'
});