var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', RoomsView.createRoom);
    RoomsView.$select.on('change', RoomsView.changeRoom);
  },

  render: function() {
    Object.keys(Rooms.roomList).forEach((room) => this.renderRoom(room));
  },

  renderRoom: function(room) {
    var rendered = '<option>' + room + '</option>';
    RoomsView.$select.append(rendered);
  },

  createRoom: function(event, roomName) {
    roomName = roomName === undefined ? prompt('Enter a room name:') : MessagesView.sanitize(roomName);
    if (!Rooms.roomExists(roomName)) {
      Rooms.add(roomName);
      RoomsView.renderRoom(roomName);
    }
  },

  changeRoom: function(event) {
    debugger;
    $('.chat').hide();
    console.log(event.target.value.substr(10));
    $('.'+ event.target.value).show();
  }

};
