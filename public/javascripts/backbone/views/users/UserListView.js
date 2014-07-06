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

CrudExampleApp.Views.UserListView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.collection, 'all', this.render);
  },
  render: function(){
    var that = this;
    that.$el.html('')
    _.each(this.collection.models, function(model){
      var newUserView = new CrudExampleApp.Views.UserView({
        model: model
      });
      that.$el.append(newUserView.render().$el)
    });
    return this;
  }
})
