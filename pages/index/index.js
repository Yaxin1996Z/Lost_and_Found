//index.js
//获取应用实例
const app = getApp()


Page({
  data: {
    currentTab: 0, //预设当前项的值

  },
  swichNav: function (e) {
    var cur = e.target.dataset.current;
    if (this.data.currentTab == cur) { return false; }
    else {
      this.setData({
        currentTab: cur
      })
    }
  },
  //事件处理函数
  bindViewTap: function() {
    
  },
  onLoad: function () {

  }
  
})
