var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    this.$chats.on('click', function(e) {
      if (e.target.className === 'username') {
        MessagesView.addFriend(e.target.innerHTML);
      }
    });
  },

  render: function(data) {
    console.log(data);
    data.forEach((message) => MessagesView.renderMessage(message));
  },

  renderMessage: function(message) {
    var rendered = MessageView.render(message);
    this.$chats.prepend(rendered);
  },

  addFriend: function(name) {
    Friends.toggleStatus(name);
  }

};