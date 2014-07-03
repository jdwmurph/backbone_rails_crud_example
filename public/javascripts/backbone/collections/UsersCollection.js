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

var UsersCollection = Backbone.Collection.extend({
  model: User
})
