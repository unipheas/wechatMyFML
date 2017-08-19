//app.js
App({
  onLaunch: function() {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },

  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },

  globalData: {
    userInfo: null, 
    mock_data: [{ "id": 1, "username": "awolfenden0", "post": "Phasellus in felis. Donec semper sapien a libero. Nam dui.", "time": "9:30", "location": "Gabrovo" },
    { "id": 2, "username": "jform1", "post": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.", "time": "6:37", "location": "Serhetabat" },
    { "id": 3, "username": "cwimbridge2", "post": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.", "time": "2:30", "location": "Yuelai" },
    { "id": 4, "username": "estarkings3", "post": "In congue. Etiam justo. Etiam pretium iaculis justo.", "time": "2:17", "location": "Karsin" },
    { "id": 5, "username": "btomaselli4", "post": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.", "time": "7:43", "location": "Heshui" },
    { "id": 6, "username": "wjarman5", "post": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.", "time": "6:46", "location": "Alfenas" },
    { "id": 7, "username": "uoxton6", "post": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.", "time": "7:30", "location": "Santa Cruz do Rio Pardo" },
    { "id": 8, "username": "dpauletto7", "post": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.", "time": "5:40", "location": "Samannūd" },
    { "id": 9, "username": "dmccafferky8", "post": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.", "time": "7:40", "location": "Triánta" },
    { "id": 10, "username": "bmilhench9", "post": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.", "time": "20:44", "location": "Kendalngupuk" }]
  }
})
