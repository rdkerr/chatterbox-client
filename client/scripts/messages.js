var Messages = {
  message: {
    username: '',
    text: '',
    roomname: ''
  },

  setName: function(name) {
    this.message.username = name;
  },

  setRoom: function(room) {
    this.message.roomname = room;
  },

  setMessage: function(text) {
    this.message.text = text;
  },

  getMessage: function() {
    return this.message;
  }
};

