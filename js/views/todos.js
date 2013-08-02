var app = app || {};

app.TodoView = Backbone.View.extend({

  tagname: 'li',

  template: _.template( $('#item-template').html() ),

  events: {
    'dblclick label': 'edit',
    'keypress .edit': 'updateOnEnter',
    'blur .edit': 'close'
  },

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    this.$el.html( this.template(this.model.toJSON() ));
    this.$input = this.$('.edit');
    return this;
  },

  edit: function() {
    var value = this.$input.val().trim();

    if (value) {
      this.model.save({ title: value });
    }

    this.$el.removeClass('editing');
  },

  updateOnEnter: function(e) {
    if (e.which === ENTER_KEY) {
      this.close();
    } 
  }

});
