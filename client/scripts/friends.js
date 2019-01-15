var Friends = {
  friendList: {},

  // initialize: function() {
  //   this.friendList = {};
  // },

  toggleStatus: function(name) {
    this.friendList[name] = true;
  }
};