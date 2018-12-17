// pages/userInfo/myInfo/myInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    todo:'insert'
  },
  
  submitUserInfo: function (event) {
   
    //将用户信息存入缓存区
    var userInfo = event.detail.value;
    wx.setStorage({
      key: 'userInfo',
      data: userInfo,
      success: function (res) {
        wx.navigateTo({
          url: '../userInfo',
        })
      }
    })
    console.log(this.data.todo);
    //访问数据库，若用户名已存在，返回illegel；若用户名合法，保存用户
    wx.request({
      url: 'http://zhang1996.xyz:8080/lost_and_found/user.php',
      //url:"../../../server.user.php",
      data:{
        todo:this.data.todo,
        userId:userInfo.userId,
        name:userInfo.name,
        phoneNum:userInfo.phoneNum,
        QQ:userInfo.QQ
      },
      success(res){
        console.log(res.data);
        if(res.data=="illegel"){
          console.log("用户名已存在");
        } else{    
          console.log("用户保存成功");
        }
      }
    })
  },

  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'userInfo',
      success: function (res) {
        that.setData({
          userInfo: res.data
        })
        console.log(res.data);
        //如果缓存区有用户id，就把todo设为update
        if ((res.data) && (res.data.userId != '')) {
          that.setData({
            todo: 'update',
          })
        }
      }
    });
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})