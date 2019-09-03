// pages/middleman/middleman.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    middlemanlist: [{
      middleman_img:'img/lilai.jpg',
      man: '李 来',
      partment:'网络部',
      shou: 2,
      zu:10
    },
      {
        middleman_img: 'img/meiyoutupian.png',
        man: '王宏伟',
        partment: '一手部',
        shou: 1,
        zu: 0
      },
      {
        middleman_img: 'img/meiyoutupian.png',
        middleman_title: '我要买房',
        man: '张时兵',
        partment: '一手部',
        shou: 2,
        zu: 0
      },
      {
        middleman_img: 'img/lizhongnan.jpg',
        man: '李忠南',
        partment: '租赁部',
        shou: 0,
        zu: 10
      },
      {
        middleman_img: 'img/meiyoutupian.png',
        man: '左小东',
        partment: '租赁部',
        shou: 0,
        zu: 5
      },
    ]
  },
  middleman_del:function(){
    wx.navigateTo({
      url: '/pages/middleman_del/middleman_del',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //打电话给经纪人
  middleman_call: function () {
    //直接呼叫
    wx.makePhoneCall({
      phoneNumber: '13595799415',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 1000)
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