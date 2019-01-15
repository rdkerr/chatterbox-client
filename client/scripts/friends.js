var Friends = {
  friendList: {},

  // initialize: function() {
  //   this.friendList = {};
  // },

  toggleStatus: function(name) {
    if (this.friendList[name]) {
      delete this.friendList[name];
    } else {
      this.friendList[name] = true;
    }
  }
};