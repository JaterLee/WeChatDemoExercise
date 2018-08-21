//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgurl: ['https://tphoto.bxapp.cn/upload/825F1976-E1E0-459A-9D96-E265CA906ACF.jpg',
      'https://tphoto.bxapp.cn/upload/F63011F4-D674-44F8-8A70-C19F66907249.jpg',
      'https://tphoto.bxapp.cn/upload/D651BF31-CBAD-42FA-A15C-DD9313C5BAEE.jpg',

    ],
    goodsArray: [
      1, 2, 4, 5, 6, 7, 8, 9, 0
    ],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {

  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})