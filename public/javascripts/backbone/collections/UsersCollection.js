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

CrudExampleApp.Collections.UserCollection = Backbone.Collection.extend({
  model: CrudExampleApp.Models.User,
  url: 'users'
})
