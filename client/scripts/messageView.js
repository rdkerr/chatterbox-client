var MessageView = {

  render: (message) => `
      <div class="chat ${message.roomname}" id="${message.username}">
        <div class="username">${message.username}</div>
        <div>${message.text}</div>
      </div>
    `

};