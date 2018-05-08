//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   lockName:"广州的家",
   lockId:"23456723#ssfFFAVSD",
   //菜单
   lockHandle:[
	   {
	   	name:"智能锁报警",
	   	image:"/images/ld.png"
	   },
	   {
	   	name:"授权临时密钥",
	   	image:"/images/ws.png"
	   },
	   {
	   	name:"智能锁授权",
	   	image:"/images/sq.png"
	   },
	   {
	   	name:"开锁记录",
	   	image:"/images/file.png"
	   }
   ],
   //数字键盘
   numericKeyboard:[
	{number:1},
	{number:2},
	{number:3},
	{number:4},
	{number:5},
	{number:6},
	{number:7},
	{number:8},
	{number:9},
	{number:'*'},
	{number:0},
	{number:'#'},
   ]
  },

  //跳转链接 登录注册
  toLink:function(e){
    let link = e.currentTarget.dataset.link;
    wx.navigateTo({
      url: link,
    })
  },

  //初始化小程序蓝牙模块
  initBlue:function(e){
    let that = this;
    let promise = new Promise(function(resolve,jeject){
      wx.openBluetoothAdapter({
        success: function (res) {
          console.log("success res -->", res);
          resolve(res.errMsg);
        },
        fail: function (res) {
          console.log("fail res -->", res);
          jeject(res)
        },
      })
    })
    return promise;
  },

  // 获取本机蓝牙适配器状态
  getBluetoothAdapterState:function(){
    wx.getBluetoothAdapterState({
      success: function (res) {
        console.log("获取本机蓝牙适配器状态 suc->",res)
      },
      fail: function (res) {
        console.log("获取本机蓝牙适配器状态fail -->", res);
        jeject(res)
      },
    })
  },

  //初始化成功的回调
  initSuccess:function(msg){
    console.log("成功的回调",msg)
  },

  //初始化失败的回调
  initErr:function(msg){
    console.log("失败啦", msg)
  },
 
  onLoad: function () {
    let that = this;
    that.initBlue().then(that.getBluetoothAdapterState).catch(that.initErr)
  },
  
})
