var app = app || {};

app.Message = Backbone.Model.extend({

  defaults: {
    body: '',
    timestamp: new Date()
  }

});
