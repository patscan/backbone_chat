var app = app || {};

  app.AppView = Backbone.View.extend({

    el: '#chatapp',

    initialize: function() {
      this.$input = this.$('#new-message');
      this.listenTo(app.Messages, 'add', this.addOne);
    },

    render: function() {
      
    }
  });
