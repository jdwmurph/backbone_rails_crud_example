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

CrudExampleApp.initialize = function(){
    this.ViewManager = new CrudExampleApp.Views.ViewManager({el: $('body')});
    this.router = new CrudExampleApp.Router();
    Backbone.history.start();

    $('.user-form').on('submit', function(e){
      e.preventDefault();
      var email = $('.email-submit').val();
      var password = $('.password-submit').val();
      var newUser = {email: email, password: password}
      $('.email-submit').val('');
      $('.password-submit').val('');
      $.ajax({
        url: '/users',
        method: 'post',
        dataType: 'json',
        data: {user: newUser},
        success: function(newuserJSON){
          console.log(newuserJSON)
          CrudExampleApp.router.collection.add(newuserJSON)
        }
      });
    })
};

CrudExampleApp.Router = Backbone.Router.extend({
  initialize: function(){
    this.collection = new CrudExampleApp.Collections.UserCollection();
    this.collection.fetch({async:false});
  },
  routes : {
    ''                         : 'index'
  },
  index: function(){

    userListView = new CrudExampleApp.Views.UserListView({
      collection: CrudExampleApp.router.collection
    });
    CrudExampleApp.ViewManager.display(userListView);
    return this;
  }
})

CrudExampleApp.Views.ViewManager = Backbone.View.extend({
  initialize: function(){
  },
  display: function(view){
    var previousView = this.currentView || null;
    var nextView = view;
    if (previousView) {
      previousView.remove();
    };
    nextView.render().$el.appendTo(this.$el);
    this.currentView = nextView;
  }
})


$(function(){

  CrudExampleApp.initialize();

})

