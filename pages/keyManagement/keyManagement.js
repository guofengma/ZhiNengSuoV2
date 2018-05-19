// pages/keyManagement/keyManagement.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showSetName:false,
    MiYueName:""
  },

  //同步密钥
  tongBuMiYue:function(){
    wx.showLoading({
      mask:true,
      title: '同步中',
    })
    setTimeout(()=>{
      wx.showToast({
        title:"同步成功"
      })
    },5000)
  },

  saveMiYueName:function(e){
    let value = e.detail.value;
    this.setData({
      MiYueName:value,
    })
  },

  //添加密钥
  addMiYue:function(e){
    this.setData({
      showSetName:true,
    })
  },

  //添加密钥下一步
  addMiYueNext:function(e){
    let MiYueName = this.data.MiYueName;
    if (MiYueName.trim() == '' || MiYueName == undefined){
      wx.showToast({
        icon:"none",
        title: '密钥名称为空',
      })
      return
    }
    wx.navigateTo({
      url: '/pages/chooseKeyType/chooseKeyType',
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