// import cyurl from "../../utils/url";
// pages/feedback/feedback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    infoContentStr:""
  },

  //保存输入
  saveInput:function(e){
    let that = this;
    let value = e.detail.value;
    console.log("value -->",value);
    that.setData({
      infoContentStr: value
    })
  },

  //提交意见反馈
  saveFeedback:function(e){
    let that = this;
    let infoContentStr = that.data.infoContentStr;
    if (infoContentStr == '' || infoContentStr.length == 0 || !infoContentStr){
      wx.showToast({
        image:"/images/hint.png",
        title: '反馈内容为空'
      })
      return false
    }
    let openId = wx.getStorageSync("openId");
    wx.showNavigationBarLoading()
    wx.request({
      url: cyurl.saveFeedback,
      data:{
        busiType:"feedback",
        openId: openId,
        infoContentStr: infoContentStr
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log("提交意见反馈 -->", res)
        if (res.data.code == 0) {
          wx.showToast({
            title:"提交成功"
          })
          setTimeout(function(){
            wx.navigateBack({
              delta:1
            })
          },1500)
        } else {
          wx.showToast({
            image:"/images/hint.png",
            title: res.data.msg
          })
        }
      },
      fail: function (res) {
        wx.showToast({
          title: "提交失败",
        })
        console.log("提交意见反馈 Err-->", res)
      },
      complete: function () {
        wx.hideNavigationBarLoading()
      }
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