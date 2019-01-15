var MessageView = {

  render: (message) => `
      <div class="chat">
        <div class="username">${message.username}</div>
        <div>${message.text}</div>
      </div>
    `

};