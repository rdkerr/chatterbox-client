var Rooms = {
  roomList: {},

  add: function(name) {
    if (!this.roomList[name]) {
      this.roomList[name] = true;
    }
  },

  roomExists: function(name) {
    return this.roomList[name] ? true : false;
  }

};
