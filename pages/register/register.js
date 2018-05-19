// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sendHint:"获取验证码",
    phone:"",
    code:"",
    pwd:"",
    kdj:true, //可点击
    secend:60,
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

  //发送验证码
  sendCode:function(){
    let that = this;
    let kdj = that.data.kdj;
    if(!kdj){
      return
    }
    kdj = false;
    that.setData({
      kdj:kdj
    });
    let phone = that.data.phone;
    let pattern = /(^1[3456789][0-9]{9}$)/;
    let secend = that.data.secend;
    let sendHint = that.data.sendHint;
    if (pattern.test(phone)) {
      console.log("发送验证码的请求")
      that.getCode()
      let timmer = setInterval(function(){
        if(secend > 1){
          secend -=1;
          sendHint = "重新发送"+secend
        }else{
          secend = 60;
          kdj = true;
          sendHint = "获取验证码"
          clearInterval(timmer);
        }
        that.setData({
          secend: secend,
          kdj: kdj,
          sendHint: sendHint
        })
      },1000)
    } else {
      that.setData({
        kdj: true
      });
      wx.showToast({
        icon:"none",
        title: '手机号错误',
      })
    }

  },

  //请求验证码
  getCode:function(){
    let that = this;
    let phone = that.data.phone;
    wx.showLoading({
      title: '加载中',
    });
    wx.request({
      url: cyurl.sendVerifyCode,
      header: {
        'content-type': 'application/json'
      },
      data:{
        phone: phone
      },
      success: function (res) {
        console.log("请求验证码 res -->", res)
        if (res.data.code == 0) {
          wx.showToast({
            title: "发送成功",
          })
        } else {
          wx.showToast({
            icon:"none",
            title: res.data.msg,
          })
        }
      },
      fail: function (res) {
        console.log("请求验证码 Err-->", res)
      },
      complete: function (res) {
        setTimeout(function(){          
          wx.hideLoading()
        },2000)
      }
    })
  },

  //注册
  register: function (e) {
    let that = this;
    let accountPhone = that.data.phone;
    let smsCode = that.data.smsCode;
    let accountPwd = that.data.pwd;
    let openId = wx.getStorageSync("openId");
    if ( accountPhone == '' || accountPhone == undefined || smsCode.trim() == '' || smsCode == undefined ||accountPwd == '' || accountPwd == undefined) {
      wx.showToast({
        icon:"none",
        title: '必填字段为空',
      })
      return
    }
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: cyurl.register,
      header: {
        'content-type': 'application/json'
      },
      data: {
        accountPhone:accountPhone,
        accountPwd: accountPwd,
        openId: openId,
        smsCode: smsCode,
      },
      success: function (res) {
        wx.hideLoading()
        console.log("注册 res -->", res)
        if (res.data.code == 0) {
          wx.showToast({
            title: "注册成功",
          })
          setTimeout(function(){
            wx.switchTab({
               url: '/pages/index/index',
            })
          },1500)
        } else {
          wx.showToast({
            icon:"none",
            title: res.data.msg,
          })
        }
      },
      fail: function (res) {
        wx.hideLoading()
        wx.showToast({
          icon:"none",
          title: "注册失败",
        })
        console.log("注册 Err-->", res)
      },
    })
  },


  //跳转登录
  loLink: function (e) {
    wx.navigateTo({
      url: '/pages/login/login',
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