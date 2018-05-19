// pages/setKey/setKey.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array:['指纹密码','ID卡密钥','数字密钥'],
    index:0,
    syzq:[
        {name: "周一",},
        {name: "周二",},
        {name: "周三",},
        {name: "周四",},
        {name: "周五",},
        {name: "周六",},
        {name:"周日",},
    ],
    items: [
      { name: 'USA', value: '开锁记录是否上报' },
    ]
  },

  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },

  //标记 使用周期
  bjItem:function(e){
    let that = this;
    let syzq = that.data.syzq;
    let index = e.currentTarget.dataset.index;
    if(syzq[index].act && syzq[index].act == 1){
      syzq[index].act = 0;
    }else{
      syzq[index].act = 1;
    }
    that.setData({
      syzq:syzq
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