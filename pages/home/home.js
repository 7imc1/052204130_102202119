// pages/home/home.js
const app = getApp()
Page({
  data: {
    projects: [
      { name: '项目名称', leader: '负责人' },
      { name: '项目名称', leader: '负责人' },
      { name: '项目名称', leader: '负责人' }
    ],
    partners: [
      { username: '用户名', major: '专业', grade: '年级' },
      { username: '用户名', major: '专业', grade: '年级' },
      { username: '用户名', major: '专业', grade: '年级' }
    ]
  },
    // 跳转到关于我页面
  navigateToAboutMe() {
    wx.redirectTo({
      url: '/pages/about_me/about_me'
    });
  },
  
  // 跳转到我的项目页面
  navigateToMyProjects() {
    wx.redirectTo({
      url: '/pages/my_projects/my_projects'
    });
  },

  // 跳转到会话页面
  navigateToConversations() {
    wx.redirectTo({
      url: '/pages/conversations/conversations'
    });
  }
  
});