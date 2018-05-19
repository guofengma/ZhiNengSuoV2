import cyurl from "./url";

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


// 获取openId
function getOpenId(code) {

  //先从缓存里面获取数据
  let openId = wx.getStorageSync('openId');
  if(openId){
    console.log("openId -->",openId);
    return
  }

  //发起网络请求
  wx.request({
    url: cyurl.getOpenId,
    data: {
      code: code
    },
    method: 'POST',
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    success: function (res) {
      console.log("getOpenId from Server: ", res.data);
      if (res.data.code == 0) {
        let wxOpenId = res.data.openId
        console.log("getOpenId: ", wxOpenId)
        wx.setStorageSync('openId', wxOpenId)
      } else {
        console.log('getOpenId失败')
      }
      console.log("getOpenId from  sdsadasd++++ Server: ", openId);
    },
    fail: function (res) {
      console.log(res)
    }
  })

}

//保存用户信息
function saveMember() {
  let userInfo = wx.getStorageSync("userInfo")
  let wxImg = userInfo.avatarUrl
  let mbName = userInfo.nickName
  let mbSex = userInfo.gender
  wx.request({
    url: cyurl.saveMember,
    method: 'POST',
    data: {
      openId: wx.getStorageSync('openId'),
      wxImg:wxImg,
      mbName:mbName,
      mbSex:mbSex
    },
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    success: function (res) {
      console.log('saveMember success,', res)
    },
    fail: function (rej) {
      console.log('saveMember fail ', rej)
    },
    complete: function (com) {
    }
  })
}


module.exports = {
  formatTime: formatTime,
  getOpenId:getOpenId,
  saveMember:saveMember,
}
