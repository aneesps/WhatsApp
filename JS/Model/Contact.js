var Contact = Backbone.Model.extend({
	defaults:{
		'id':'',
		'name':'',
		'phone_number':'',
		'in_mind':'',
		'device':'',
		'url':''
	}
});

var Contacts = Backbone.Collection.extend({
		model:Contact,
		url:'/app/get-contacts'
});