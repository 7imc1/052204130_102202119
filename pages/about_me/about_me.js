const app = getApp()


Page({
  data: {
    userInfo: null,
     targetId :null

  },



  onLoad: function() {
    var storedUserInfo = wx.getStorageSync('userinfo');
    this.setData({
      userInfo: storedUserInfo
    })
    /*
    wx.cloud.database().collection('chat_users').where({
      admin:userInfo.admin
    }).get({
      success: function(res) {
        // res.data 是包含上面查询结果的数组
      targetId :res.data
      },
      fail: function(err) {
        // 查询失败的处理
        console.error(err);
      }
    });
  },
  onShow: async function() {
     const db = wx.cloud.database();

     try {
       const res = await db.collection('chat_users').doc(targetId).get();
       this.setData({
         userInfo: res.data
       });
     } catch (e) {
       console.error(e);
     }*/
   },

  toLogin() {
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },

      // 跳转到关于我页面
      navigateToMyProjects() {
        wx.redirectTo({
          url: '/pages/my_projects/my_projects'
        });
      },
      
      // 跳转到我的项目页面
      navigateToHome() {
        wx.redirectTo({
          url: '/pages/home/home'
        });
      },
    // 跳转到会话页面
     navigateToConversations() {
      wx.redirectTo({
        url: '/pages/conversations/conversations'
      });
    }
});