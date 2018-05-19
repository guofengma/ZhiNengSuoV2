//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    //是否登录
    isLogin:false,
    lockName:"广州的家",
    lockId:"23456723#ssfFFAVSD",
   //菜单
   lockHandle:[
	   {
	   	name:"智能锁报警",
	   	image:"/images/ld.png",
      handle:"bjjl",
	   },
	   {
	   	name:"授权临时密钥",
	   	image:"/images/ws.png",
       handle:"lsmy"
	   },
	   {
	   	name:"智能锁授权",
	   	image:"/images/sq.png",
       handle:"znssq"
	   },
	   {
	   	name:"开锁记录",
	   	image:"/images/file.png",
       handle:"ksjl"
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

  //跳转对应的锁操作
  lockHandle:function(e){
    let handle = e.currentTarget.dataset.handle;
    if (handle == "bjjl"){
      wx.navigateTo({
        url: '/pages/baoJingJiLu/baoJingJiLu',
      })
    }
    if(handle == 'znssq'){
      wx.navigateTo({
        url: '/pages/lockAccredit/lockAccredit',
      })
    }
    if(handle == 'lsmy'){
      wx.navigateTo({
        url: '/pages/addTemporaryKey/addTemporaryKey',
      })
    }
    if (handle == 'ksjl') {
      wx.navigateTo({
        url: '/pages/kaiSuoJiLu/kaiSuoJiLu',
      })
    }
  },

  //跳转链接 登录注册
  toLink:function(e){
    let link = e.currentTarget.dataset.link;
    wx.navigateTo({
      url: link,
    })
  },

  //跳转密钥管理
  tokeyManagement:function(e){
    wx.navigateTo({
      url: '/pages/keyManagement/keyManagement',
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
      },
    })
  },

  //初始化成功的回调
  initSuccess:function(msg){
    console.log("成功的回调11",msg)
  },

  //初始化失败的回调
  initErr:function(msg){
    console.log("失败啦", msg)
  },
 
  onLoad: function () {
    let that = this;
    that.initBlue().then(that.getBluetoothAdapterState).catch(that.initErr)
  },

  onShow:function(e){
    let isLogin = wx.getStorageSync("isLogin");
    this.setData({
      isLogin: isLogin
    })
  },
  
})
