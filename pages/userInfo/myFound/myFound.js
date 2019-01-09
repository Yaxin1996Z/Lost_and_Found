Page({

  /**
   * 页面的初始数据
   */
  data: {
    stuffs_found: [],
    typesec: ["钥匙", "手机", "一卡通", "身份证", "学生证", "水杯", "书本类", "U盘", "其他"],
    loading: true
  },
  askDelete: function (event) {
    var id = event.currentTarget.dataset.text;
    var index = event.currentTarget.dataset.index;
    var that = this;
    console.log(event.currentTarget.dataset);
    wx.showModal({
      title: '提示',
      content: '确定要删除吗？',
      success: function (sm) {
        if (sm.confirm) {
          // 用户点击了确定 可以调用删除方法了
          wx.request({
            url: 'https://zhang1996.xyz/lost_and_found/delete_stuff.php',
            data: {
              table: 0,
              id: id
            },
            success(res) {
              console.log("删除成功！");
              that.data.stuffs_found.splice(index, 1)
              that.setData({
                stuffs_found: that.data.stuffs_found
              })
            }
          });
        } else if (sm.cancel) {
          console.log('用户点击取消')
        }
      }
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
        console.log(res.data.userId)
        wx.request({
          url: 'https://zhang1996.xyz/lost_and_found/my_stuff.php',
          data: {
            table: 0,
            userId: res.data.userId
          },
          success(res) {
            console.log(res.data);
            that.setData({
              stuffs_found: res.data,
              loading: false
            })
          }
        });
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