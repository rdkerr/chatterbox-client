var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.$chats.on('click', function(e) {
      if (e.target.className === 'username') {
        MessagesView.addFriend(e.target.innerHTML);
      }
    });
  },

  render: function(data) {
    data.forEach((message) => MessagesView.renderMessage(message));
  },

  renderMessage: function(message) {
    if (message.username && message.text && message.roomname) {
      for (var key in message) {
        message[key] = MessagesView.sanitize(message[key]);
      }
      RoomsView.createRoom(undefined, message.roomname);
      var rendered = MessageView.render(message);
      MessagesView.$chats.prepend(rendered);
    }
  },

  addFriend: function(name) {
    Friends.toggleStatus(name);
    $("[id='" + name +"']").addClass('friend');
  },

  sanitize: function(message) {
    var result = '';
    for (var i = 0; i < message.length; i++) {
      if (MessagesView.escape[message[i]]) {
        result += MessagesView.escape[message[i]];
      } else {
        result += message[i];
      }
    }
    return result;
  },

  escape: {
    '&' : '&amp',
    '<' : '&lt',
    '>' : '&gt',
    '"' : '&quot',
    "'": '&#x27',
    '/' : '&#x2F'
  },


};