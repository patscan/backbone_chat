var app = app || {};
var date = new Date();
app.Message = Backbone.Model.extend({
  
  defaults: function() {
    return { 
      body: '',
      timestamp: moment().format("h:mm:ss")
    }
  }

});
