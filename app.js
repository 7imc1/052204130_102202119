// app.js
App({
  globalData: {
    userInfo: null ,// 或者初始化为一个对象
    id: null
  },
  onLaunch(){
    wx.cloud.init({
      env:"c7im-2gnu7m7pb31f1ba7"
    });
    if(wx.getStorageSync('userinfo') ){
      wx.navigateTo({
        url: './pages/home/home',
      })
    }else{
      wx.navigateTo({
        url: './pages/login/login',
      })
    }
  }


})
