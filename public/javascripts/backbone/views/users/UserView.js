var CrudExampleApp = CrudExampleApp || {
  Models: {},
  Views: {},
  Collections: {},
  Router: null,
  initialize: function(){
    this.ViewManager = new CrudExampleApp.Views.ViewManager({el: $('body')});
    this.router = new CrudExampleApp.Router();
    Backbone.history.start();
  }
};

CrudExampleApp.Views.UserView = Backbone.View.extend({
  initialize: function(){
      this.listenTo(this.model, 'all', this.render)
  },
  tagName: 'li',
  template: _.template($('.user-template').html()),
  editTemplate: _.template($('.edit-template').html()),
  render: function(){
    this.$el.html(this.template({user: this.model.toJSON()}));
    lichard = {user: this.model.toJSON()}
    return this;
  },
  events: {
    'click [class="delete-button"]': 'deleteUser',
    'click [class="edit-button"]': 'editUser'
  },
  deleteUser: function(){
    this.model.destroy()
    this.$el.remove()
  },
  editUser: function(){
    var that = this
    this.$el.html(this.editTemplate({user: this.model.toJSON()}))
    this.$el.find('form').on('submit', function(e){
      e.preventDefault();
      that.model.set('email', that.$el.find('.email').val())
      lichard = that.model
      that.model.save()
    })
  }
})
