var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', RoomsView.createRoom);
  },

  render: function() {
  },

  renderRoom: function(room) {
    var rendered = '<option>' + room + '</option>';
    this.$select.append(rendered);
  },

  createRoom: function(event) {
    var roomName = prompt('Enter a room name:');
    if (!Rooms.roomExists(roomName)) {
      Rooms.add(roomName);
      RoomsView.renderRoom(roomName);
    }

  }

};
