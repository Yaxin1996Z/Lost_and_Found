//index.js
//获取应用实例
const app = getApp()


Page({
  data: {
    currentTab: 0, //预设当前项的值
    stuffs_lost:[],
    stuffs_found: [],
    search_content:9,
    loading:true,
    typesec:["钥匙", "手机", "一卡通", "身份证", "学生证", "水杯", "书本类", "U盘", "其他"]
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
  getOwnerInfo:function(event){
    var userId=event.currentTarget.dataset.text;
    console.log(userId);
    wx.request({
      url: 'https://zhang1996.xyz/lost_and_found/publisher_info.php',
      data: {
        userId:userId
      },
      success(res) {
        console.log(res.data);
        var publisher_info=res.data[0];
        
        wx.showModal({
          title: '联系信息',
          content: '电话：'+publisher_info.phoneNum+'\r\nQQ:'+publisher_info.QQ,
          success: function (res) {
            if (res.confirm) {
            }
          }
        })
      }
    });
  },
  inputName: function (e) {
    var search_content;
    var that = this;
    switch (e.detail.value) {
      case "钥匙":
        search_content = 0;
        break;
      case "手机":
        search_content = 1;
        break;
      case "一卡通":
        search_content = 2;
        break;
      case "身份证":
        search_content = 3;
        break;
      case "学生证":
        search_content = 4;
        break;
      case "水杯":
        search_content = 5;
        break;
      case "书本类":
        search_content = 6;
        break;
      case "U盘":
        search_content = 7;
        break;
      case "其他":
        search_content = 8;
        break;
      default:
        search_content = 9;
    }
    that.setData({
      search_content: search_content
    })
  },
  findSomething:function(){
    var that = this;

    wx.request({
      url: 'https://zhang1996.xyz/lost_and_found/search_stuff_list.php',
      data: {
        table: 1,
        stuff_type:that.data.search_content
      },
      success(res) {
        console.log(res.data);
        that.setData({
          stuffs_lost: res.data,
          loading: false
        })
      }
    });
    wx.request({
      url: 'https://zhang1996.xyz/lost_and_found/search_stuff_list.php',
      data: {
        table: 0,
        stuff_type: that.data.search_content
      },
      success(res) {
        console.log(res.data);
        that.setData({
          stuffs_found: res.data,
          loading: false
        })
      }
    });
  },
  //事件处理函数
  bindViewTap: function() {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.request({
      url: 'https://zhang1996.xyz/lost_and_found/stuff_list.php',
      data: {
        table:1
      },
      success(res) {
        console.log(res.data);
        that.setData({
          stuffs_lost: res.data,
          loading:false
        })
      }
    });
    wx.request({
      url: 'https://zhang1996.xyz/lost_and_found/stuff_list.php',
      data: {
        table: 0
      },
      success(res) {
        console.log(res.data);
        that.setData({
          stuffs_found: res.data,
          loading: false
        })
      }
    });
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
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
      // 显示顶部刷新图标
      wx.showNavigationBarLoading();
      var that = this;
    wx.request({
      url: 'https://zhang1996.xyz/lost_and_found/stuff_list.php',
      data: {
        table: 1
      },
      success(res) {
        console.log(res.data);
        that.setData({
          stuffs_lost: res.data,
          loading: false
        })
        wx.hideNavigationBarLoading();
          // 停止下拉动作
        wx.stopPullDownRefresh();
      }
    });
    wx.request({
      url: 'https://zhang1996.xyz/lost_and_found/stuff_list.php',
      data: {
        table: 0
      },
      success(res) {
        console.log(res.data);
        that.setData({
          stuffs_found: res.data,
          loading: false
        })
        wx.hideNavigationBarLoading();
        // 停止下拉动作
        wx.stopPullDownRefresh();
      }
    });

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
