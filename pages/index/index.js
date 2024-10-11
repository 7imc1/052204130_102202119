// index.js
const app = getApp()
Page({
data:{
  },

onLoad: {

  },

  getUserProfile(e) {
    var that = this;
    wx.getUserProfile({
      desc: '展示用户信息',
      success: (res) => {
        console.log(res)
        that.setData({
          userInfo: res.userInfo
        })
      }
    })
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

  getPassword2(e) {
    console.log(e.detail.value)
    this.setData({
      ps2:e.detail.value
    })
  },

  getSchool(e) {
    console.log(e.detail.value)
    this.setData({
      clo:e.detail.value
    })
  },

  getProfession(e) {
    console.log(e.detail.value)
    this.setData({
      pro:e.detail.value
    })
  },

  getStunum(e) {
    console.log(e.detail.value)
    this.setData({
      stunum:e.detail.value
    })
  },

  zhuce(){
    if(this.data.ps1 != this.data.ps2){
      wx.showToast({
        title: '密码不相同',
      })
      return
    }
    console.log(Date.now())
    var that = this;
    wx.cloud.database().collection('chat_users').add({
      data: {
        num: Date.now(),//系统编号
        faceImg: that.data.userInfo.avatarUrl,
        nickName: that.data.userInfo.nickName,
        admin: that.data.zh,
        password: that.data.ps1,
        school:that.data.clo,
        profession:that.data.pro,
        No:that.data.stunum
      },
      success(res){
        console.log(res)
        wx.showToast({
          title: '注册成功',
        })

        wx.navigateTo({
          url: '/pages/login/login',
        })
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

  }

  
})
