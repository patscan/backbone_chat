var app = app || {};

  app.AppView = Backbone.View.extend({

    el: '#chatapp',

    events: {
      'click #submit-message' : 'createMessage',
      'keypress #new-message' : 'createMessageOnEnter'
    },

    initialize: function() {
      this.$input = this.$('#new-message');
      
      this.listenTo(app.Messages, "add", this.addMessage);
      this.listenTo(app.Messages, "reset", this.addAll);
      this.listenTo(app.Messages, "all", this.render);

      app.Messages.fetch();
    },

    createMessage: function() {
      if (!this.$input.val().trim()) {
        return
      }
      app.Messages.create({ body: this.$input.val().trim() });
      this.$input.val('');
    },

    createMessageOnEnter: function(e) {
      if (e.which !== ENTER_KEY || !this.$input.val().trim() ) {
        return;
      }
      this.createMessage();
    },

    addMessage: function( message ) {
      var view = new app.MessageView({ model: message });
      var rendered = view.render().el;
      $('#chat-window').append(rendered);
      $('#chat-window').scrollTop($('#chat-window').prop("scrollHeight"));
      $('#chat-window div:last-child').animate({
        opacity: 0.25
      }, 5000);
    },

    addAll: function() {
      $('#chat-window').html('');
      app.Messages.each(this.addMessage, this);
    }

  });
