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
 
  onLoad: function () {
   
  },
  
})
