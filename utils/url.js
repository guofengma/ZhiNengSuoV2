var zsLedUrl = "https://smarthome.yancloud.cn/cymall/m";

var zsUrl = "https://smarthome.yancloud.cn/cymall";

// var zsLedUrl = "http://wechatmp.bingosale.net:4902/cymall/m";

var oid = '1804130001';


export default {
  //获取openId
  getOpenId: zsLedUrl + "/member/getOpenId.do?oid=" + oid,
  //保存会员
  saveMember: zsLedUrl + "/member/updateWxInfo.do?oid=" + oid,

  //2.1 注册
  register:zsLedUrl+"/mall/user/useraccount/reg.do?oid="+oid,

  //2.2 短信验证码
  sendVerifyCode:zsUrl+"/smsApi/sendVerifyCode.do?oid="+oid,

  //2.3 登录
  login:zsLedUrl+"/mall/user/useraccount/login.do?oid="+oid,

  //2.5 设备列表
  deviceList:zsLedUrl+"/device/listByAccountId.do?oid="+oid,

  //2.6 关联设备
  beDeviceAndAccount:zsLedUrl+"/device/beDeviceAndAccount.do?oid="+oid,

  //2.7 更新设备
  updateDevice:zsLedUrl+"/device/updateBydeviceNo.do?oid="+oid,

  // 2.8 删除设备
  delete:zsLedUrl+"/device/delete.do?oid="+oid,

  //2.9 账号列表
  listByDeviceId:zsLedUrl+"/device/listByDeviceId.do?oid="+oid,

  // 2.10 账号授权
  accredit:zsLedUrl+"/deviceaccount/toGrant.do?oid="+oid,

  //2.11 删除账号
  deleteAccount:zsLedUrl+"/user/useraccount/deleteByDeviceAndAccount.do?oid="+oid,

  //2.12获取报警记录
  getBJList:zsLedUrl+"/devicealarm/list.do?oid="+oid,

  // 2.13保存报警记录
  saveBJJiLu:zsLedUrl+"/devicealarm/save.do?oid="+oid,

  // 2.14获取开锁记录
  getKaiSuoLog:zsLedUrl+"/deviceuselog/list.do?oid="+oid,

  // 2.15保存开锁记录
  saveKaiSuoLog:zsLedUrl+"/deviceUseLog/save.do?oid="+oid,

   //   7.2意见反馈
  // 重用信息发布模块：InfoDetail，增加busiType=feedback
  // 无图片：http://ip:端口/cymall/m/infodetail/saveNoImg.do
  saveFeedback:zsLedUrl+"/infodetail/saveNoImg.do?oid="+oid,

  // 2.17维护服务
  whfw:zsLedUrl+"/partnerinfo/list.do?oid="+oid,

  // 2.20帮助详情
  bzxq:zsLedUrl+"/helptip/getById.do?oid="+oid,

  // 2.21关于我们
  about:zsLedUrl+"/aboutus/getByCondition.do?oid="+oid,

}
