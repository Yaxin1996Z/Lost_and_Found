// pages/tabLost/tabLost.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stufftype:["钥匙","手机","一卡通","身份证","学生证","水杯","书本类","U盘","其他"],
    index:0,
    date:'2018-09-01',
    stuff:{},
    userInfo:{},
    // mylostId:[]
  },
  bindPickerChange: function (e) {
    console.log('丢失物品类型的索引为', e.detail.value);
    this.setData({
      index: e.detail.value
    })
  },
  bindDateChange: function(e){
    console.log('丢失日期选择为',e.detail.value);
    this.setData({
      date:e.detail.value
    })
  },
  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    this.setData({
      stuff:e.detail.value
    })
    wx.request({
      url: 'http://zhang1996.xyz:8080/lost_and_found/add_stuff.php',
      //url:"../../../server.user.php",
      data: {
        table: 1,
        userId: this.data.userInfo.userId,
        type: this.data.stuff.type,
        name: this.data.stuff.name,
        date: this.data.stuff.date,
        position: this.data.stuff.position,
        description: this.data.stuff.description
      },
      success(res) {
        console.log(res.data);
        //判断失物id是否在数组中
        // if (this.data.mylostId.indexOf(res.data) != -1) {
        //   //是 不做任何操作
        //   return null;
        // } else {
        //   //否，把失物id push到mylostId中
        //   this.data.mylostId.push(res.data)
        // };
        // wx.setStorage({
        //   key: 'mylostId',
        //   data: this.data.mylostId,
        // })

        wx.showToast({
          title: '登记成功',
          icon: 'success',
          duration: 10000
        })

        setTimeout(function () {
          wx.hideToast()
          wx.switchTab({
            url: '../publish',
          })
        }, 5000)
      }
    })


  },

  formReset(e) {
    console.log('form发生了reset事件')
    this.setData({
      index: 0,
      date: '2018-09-01',
      stuff: {}
    })
  },
  /**
  * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'userInfo',
      success: function (res) {
        that.setData({
          userInfo: res.data
        })
        console.log(res.data);
      }
    });
    // wx.getStorage({
    //   key: 'mylostId',
    //   success: function (res) {
    //     for (let i in res.data) {
    //       that.data.mylostId.push(res.data[i])
    //     };
    //   }
    // })
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