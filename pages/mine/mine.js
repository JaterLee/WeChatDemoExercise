var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo:[],
    orderClassifyArray:[
      {"name":"代付款","img":"../../images/mine_noPay.png"},
      {"name":"代付款", "img":"../../images/mine_noGet.png"},
      {"name": "代付款","img":"../../images/mine_getted.png"}
    ],
    itemArray:[
      {"name":"钱包","img":"../../images/mine_item_wallet.png"},
      {"name":"优惠券","img":"../../images/mine_item_discount.png"},
      {"name":"我的储值卡","img":"../../images/mine_item_valueCart.png"},
      {"name":"帮助","img":"../../images/mine_item_help.png"},
      {"name":"客服","img":"../../images/mine_item_service.png"}
    ]
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    app.getUserInfo(function(res){
      that.setData({
        userInfo: res
      })
    })
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