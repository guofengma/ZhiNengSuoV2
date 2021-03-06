// pages/lockAccredit/lockAccredit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:"",
    name:"",
    pwd:"",
  },

  //保存输入
  saveInput:function(e){
    let name = e.currentTarget.dataset.name;
    let value = e.detail.value;
    let obj = {
      [name]:value
    }
    this.setData(obj)
    // console.log("obj",obj)
  },

  //授权
  shouQuan:function(e){
    let that = this;
    let phone = that.data.phone;
    let name = that.data.name;
    let pwd = that.data.pwd;
    if(phone == '' || phone == undefined || name== "" || name == undefined || pwd == '' || pwd == undefined){
      wx.showToast({
        icon:"none",
        title: '请填写正确的信息',
      })
      return
    }
  },

  //授权记录
  toSqjl:function(e){
    wx.navigateTo({
      url: '/pages/myLockAccredit/myLockAccredit',
    })
  },

  /**
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