var app = app || {};
  
app.MessageView = Backbone.View.extend({

  template: _.template( $('#message-template').html() ),

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }

});  
