const app = getApp()
Page({
  data: {
    username: '',
    password: ''
  },
  getZh(e) {
    console.log(e.detail.value)
    this.setData({
      zh:e.detail.value
    })
  },

  getPassword(e) {
    console.log(e.detail.value)
    this.setData({
      ps1:e.detail.value
    })
  },
  login() {
    var that = this;
    wx.cloud.database().collection('chat_users').where({
        admin:that.data.zh,
        password:that.data.ps1
    }).get({
      success(res){
        console.log(res)
        if (res.data.length>0) {
          // 这里替换成实际的登录逻辑
          wx.showToast({
            title: '登录成功',
          })
          // 假设登录成功后跳转到首页
          wx.redirectTo({
            url: '/pages/home/home'
          });
        }else{
          wx.showToast({
            icon:'none',
            title: '账号密码错误',
          })
        }
      }
    })
    var userinfo = {
      admin : that.data.zh,
      password :  that.data.ps1,
      school : that.data.clo,
      profession : that.data.pro,
      No : that.data.stunum
    }
    wx.setStorageSync('userinfo', userinfo);

  },
  navigateToFindPassword() {
    // 跳转到找回密码页面
    wx.navigateTo({
      url: '/pages/find-password/find-password'
    });
  },
  navigateToSignUp() {
    // 跳转到注册页面
    wx.navigateTo({
      url: '/pages/index/index'
    });
  }
});