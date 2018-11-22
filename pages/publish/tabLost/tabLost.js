// pages/tabLost/tabLost.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stufftype:["钥匙","手机","一卡通","身份证","学生证","水杯","书本类","U盘","其他"],
    stuff:{
      index:0,
      name:'',
      date:'2018-09-01',
      position:''
    }

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
    this.data.name = e.detail.value.name;
    this.data.position = e.detail.value.position;
    console.log(this.data.stuff)
  },

  formReset(e) {
    console.log('form发生了reset事件')
    this.setData({
      index: 0,
      stuffname: '',
      date: '2018-09-01',
      position: ''
    })
  },
  /**
T
  * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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