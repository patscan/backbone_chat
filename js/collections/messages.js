var app = app || {};

var MessageList = Backbone.Collection.extend({
  model: app.Message,
  
  localStorage: new Backbone.LocalStorage('messages-backbone')
});

app.Messages = new MessageList();
