// pages/middleman_del/middleman_del.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected: 0,
    navbar: ['找租房', '买新房','二手房'],
    middlemanlist: [{
      id:1,
      middleman_img: '../middleman/img/lilai.jpg',
      man: '李 来',
      partment: '网络部',
      shou: 2,
      zu: 10
    },
    /*{
      middleman_img: '../middleman/img/meiyoutupian.png',
      man: '王宏伟',
      partment: '一手部',
      shou: 1,
      zu: 0
    },
    {
      middleman_img: '../middleman/img/meiyoutupian.png',
      middleman_title: '我要买房',
      man: '张时兵',
      partment: '一手部',
      shou: 2,
      zu: 0
    },
    {
      middleman_img: '../middleman/img/lizhongnan.jpg',
      man: '李忠南',
      partment: '租赁部',
      shou: 0,
      zu: 10
    },
    {
      middleman_img: '../middleman/img/meiyoutupian.png',
      man: '左小东',
      partment: '租赁部',
      shou: 0,
      zu: 5
    },*/
    ],
    prolist: [{
      tuijian_left: '../index/pic/slide1.jpg',
      adress: '花果园C区 精装两房，家具齐全拎包入住，采光好',
      mianji: '102㎡',
      hu: '2室1厅',
      lei: '整租',
      tedian: '精装修',
      ted: '小户型',
      te: '配套齐全',
      salary: 2000
    },
    {
      tuijian_left: '../index/pic/slide2.jpg',
      adress: '花果园M区 精装三房，采光好，交通方便',
      mianji: '64㎡',
      hu: '3室2厅',
      lei: '整租',
      tedian: '简装修',
      ted: '地段好',
      te: '家具齐全',
      salary: 2100
    },
    {
      tuijian_left: '../index/pic/slide3.jpg',
      adress: '花果园J区 精装两房 环境优美随时看房',
      mianji: '100㎡',
      hu: '2室2厅',
      lei: '整租',
      tedian: '精装修',
      ted: '户型好',
      te: '家电齐全',
      salary: 1800
    },
    {
      tuijian_left: '../index/pic/slide2.jpg',
      adress: '花果园一期房源 南北通透，采光好',
      mianji: '65㎡',
      hu: '3室1厅',
      lei: '整租',
      tedian: '简装修',
      ted: '低总价',
      te: '环境优美',
      salary: 2500
    },
    {
      tuijian_left: '../index/pic/slide3.jpg',
      adress: '花果园V区 精装两房，家具齐全拎包入住，采光好，视野开阔',
      mianji: '89.04㎡',
      hu: '3室1厅',
      lei: '整租',
      tedian: '精装修',
      ted: '小户型',
      te: '交通方便',
      salary: 1800
    }],
    newlist: [{
      tuijian_left: '../index/pic/3.jpg',
      adress: '观山湖区 俊发城 享受环境优美舒适 空气清新',
      mianji: '102㎡',
      hu: '2室1厅',
      lei: '公寓',
      tedian: '房开直售',
      ted: '小户型',
      te: '适合居住',
      salary: 8000
    },
    {
      tuijian_left: '../index/pic/3.jpg',
      adress: '观山湖区 俊发城 环境优美舒适 适宜居住',
      mianji: '64㎡',
      hu: '3室2厅',
      lei: '公寓',
      tedian: '房开直售',
      ted: '地段好',
      te: '环境好',
      salary: 7100
    },
    {
      tuijian_left: '../index/pic/3.jpg',
      adress: '观山湖区 俊发城 环境舒适 空气新鲜',
      mianji: '100㎡',
      hu: '2室2厅',
      lei: '住房',
      tedian: '房开直售',
      ted: '户型好',
      te: '环境优美',
      salary: 7800
    },
    {
      tuijian_left: '../index/pic/3.jpg',
      adress: '观山湖区 俊发城 享受环境优美舒适 空气清新',
      mianji: '65㎡',
      hu: '3室1厅',
      lei: '公寓',
      tedian: '房开直售',
      ted: '低总价',
      te: '环境优美',
      salary: 8500
    },
    {
      tuijian_left: '../index/pic/3.jpg',
      adress: '观山湖区 俊发城 享受环境优美舒适 空气清新',
      mianji: '89.04㎡',
      hu: '3室1厅',
      lei: '公寓',
      tedian: '房开直售',
      ted: '小户型',
      te: '交通方便',
      salary: 7800
    }],
  },
  //tab框
  selected: function (e) {
    console.log(e)
    let that = this
    let index = e.currentTarget.dataset.index
    console.log(index)
    if (index == 0) {
      that.setData({
        selected: 0
      })
    } else if (index == 1) {
      that.setData({
        selected: 1
      })
    } else if (index == 2) {
      that.setData({
        selected: 2
      })
    } else {
      that.setData({
        selected: 3
      })
    }
  },
  //打电话给经纪人
  middleman_del: function () {
          //直接呼叫
      wx.makePhoneCall({
        phoneNumber: '13595799415',
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