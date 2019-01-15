var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  room: 'lobby',

  initialize: function() {
    App.username = window.location.search.substr(10);
    Messages.setName(App.username);
    Messages.setRoom(App.room);
    Rooms.add(App.room);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    RoomsView.render();
    App.fetch(MessagesView.render);
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      callback(data.results);
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
