// pages/projects_detail/detail.js
// pages/project_details/project_details.js
Page({
  data: {
    projects: []
  },
  onLoad: function(options) {
    // 获取本地存储的项目数据
    const projects = wx.getStorageSync('projects') || [];
    this.setData({
      projects: projects
    });
    // 打印项目数据
    console.log(projects);
  },
  goBack: function() {
    // 返回上一个页面
    wx.navigateBack({
      delta: 1 // 返回的页面数，如果 delta 大于现有页面数，则返回到首页
    });
  }

});