// pages/create_project/create_project.js
const app = getApp();

Page({
  data: {
    projectName: '',
    projectNumber: '',
    projectDescription: '',
    projectRequirements: ''
  },

  inputProjectName(e) {
    this.setData({
      projectName: e.detail.value
    });
  },

  inputProjectNumber(e) {
    this.setData({
      projectNumber: e.detail.value
    });
  },

  inputProjectDescription(e) {
    this.setData({
      projectDescription: e.detail.value
    });
  },

  inputProjectRequirements(e) {
    this.setData({
      projectRequirements: e.detail.value
    });
  },

  createProject() {
    const project = {
      name: this.data.projectName,
      number: this.data.projectNumber,
      description: this.data.projectDescription,
      requirements: this.data.projectRequirements
    };

    if (project.name && project.number && project.description && project.requirements) {
      // 将项目数据保存到本地存储
      wx.setStorageSync('projects', project);

      // 显示成功提示
      wx.showToast({
        title: '项目创建成功',
        icon: 'success',
        duration: 2000
      });

      // 跳转到项目列表页面或其他页面
      wx.redirectTo({
        url: '/pages/my_projects/my_projects'
      });
    } else {
      // 显示必填字段提示
      wx.showToast({
        title: '所有字段都是必填的',
        icon: 'none',
        duration: 2000
      });
    }
  }
});