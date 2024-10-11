Page({
  data: {

  },
  onLoad: function(options) {
    this.getAlluser();
  },

  getAlluser(){
    var that = this;
    wx.cloud.database().collection('chat_users').get({
      success(res){
        console.log(res)
        that.setData({
          userList: res.data
        })
      }
    })
  },
  chat(e) {
    
      data:{
        friend_status:null
      }
    
    console.log(e.currentTarget.dataset.index)
    var index = e.currentTarget.dataset.index
    var that = this;
    wx.cloud.database().collection('char_record').add({
      data: {
        useA_id: app.globalData.userInfo._id,
        useA_faceImg: app.globalData.userInfo.faceImg,
        useA_nickName: app.globalData.userInfo.nickName,

        useB_id: that.data.userList[index]._id,
        useB_faceImg: that.data.userList[index].faceImg,
        useB_nickName: that.data.userList[index].nickName,

        record:[],
        friend_status: 0
      },
      success(res){
        console.log(res)
      }
    })
  },

});