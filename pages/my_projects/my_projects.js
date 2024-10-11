// pages/my_projects/my_projects.js
// pages/my_projects/my_projects.js
Page({
  data: {
    projects: []
  },
  onLoad: function() {
    const projects = wx.getStorageSync('projects') || [];
    this.setData({
      projects: projects
    });
  },
  goToCreateProject: function() {
    // 跳转到创建项目的页面
    wx.navigateTo({
      url: '/pages/create_project/create_project'
    });
  },
  viewDetails: function(e) {
    const index = e.currentTarget.dataset.index;
    const project = this.data.projects[index];
    
    wx.navigateTo({
      url: '/pages/project_details/project_details?project=' + encodeURIComponent(JSON.stringify(project))
    });
  },

    // 跳转到关于我页面
    navigateToAboutMe() {
      wx.redirectTo({
        url: '/pages/about_me/about_me'
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