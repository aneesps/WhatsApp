var Chat = Backbone.Model.extend({
	defaults:{
		'id':'',		
		'date':'',
		'last_message':''
	}
});

var Chats = Backbone.Collection.extend({
	model:Chat,
	url:'/app/get-chats'
});