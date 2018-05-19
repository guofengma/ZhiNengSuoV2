// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    accountPhone:"",
    accountPwd:"",
  },

    //保存输入
  saveInput: function (e) {
    let that = this;
    let value = e.detail.value;
    let name = e.currentTarget.dataset.name;
    let obj = {
      [name]: value
    };
    console.log(name + '的值为：', value);
    console.log("obj", obj);
    that.setData(obj)
  },

  //登录
  login:function(e){
    wx.setStorageSync("isLogin", true);
    wx.switchTab({
      url: '/pages/index/index',
    })
  },


  //登录
  login1:function(e){
    let that = this;
    let accountPhone = that.data.accountPhone;
    let accountPwd = that.data.accountPwd;
    let openId = wx.getStorageSync("openId");
    if (accountPhone == '' || accountPhone == undefined || accountPwd.trim() == '' || accountPwd == undefined) {
      wx.showToast({
        image: "/images/hint.png",
        title: '账号或密码为空',
      })
      return
    }
    wx.showLoading({
      mask:"true",
      title: '加载中',
    })
    wx.request({
      url: cyurl.login,
      header: {
        'content-type': 'application/json'
      },
      data: {
        accountPhone: accountPhone,
        accountPwd: accountPwd,
        openId: openId
      },
      success: function (res) {
        wx.hideLoading()
        console.log("登录 res -->", res)
        if (res.data.code == 0) {
          wx.switchTab({
             url: '/pages/index/index',
          })
        } else {
          wx.showToast({
            icon:"none",
            title: res.data.msg,
          })
        }
      },
      fail: function (res) {
        wx.showToast({
          icon:"none",
          title:"登录失败"
        })
        console.log("登录 Err-->", res)
      },
    })
  },

  //跳转注册
  loLink:function(e){
    wx.navigateTo({
      url: '/pages/register/register',
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