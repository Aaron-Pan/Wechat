// pages/details/details.js
const app = getApp()
Page({
  data: {
    ellipsis: true,
    name: '',
    address: '',
    latitude: '',
    longitude: '',
    imgArr: [],
    imgHuxingArr: [
      'http://pic2.to8to.com/home/a6/b1/a6b103eade4ff7f146ada6200a445c08_s.jpg',
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular: true,
    tit: '',
    zhuangtai: '急租',
    other_name: '',
    other: [],
    prices: '',
    leixing: '',
    xiangmu: '观山湖区 北二环',
    huxing: '',
    mianji: '',
    kfs: '中山市越秀地产开发有限公司',
    wygs: '广州市越秀物业管理有限公司',
    jzlx: '塔板结合',
    kprq: '',
    jlrq: '',
    cqnx: '',
    zdmj: '',
    rjl: '暂无数据',
    lhl: '暂无数据',
    wyzs: '',
    zwzs: '可协商',
    jianjie: '',
    collectData:'',
    bac: 'http://a3.qpic.cn/psb?/V14a5AtA1zaehb/AVslTQ*T7L*jRb9psfDGQxNU8QxXL8E00tInfVxptcc!/m/dLYAAAAAAAAAnull&bo=yADIAAAAAAADByI!&rf=photolist&t=5',
    soucang: '收藏',
    a: 0,
 


  },
  // shoucang: function () {

  //   if (this.data.a == 0) {
  //     this.setData({
  //       bac: "http://a3.qpic.cn/psb?/V14a5AtA1zaehb/AVslTQ*T7L*jRb9psfDGQxNU8QxXL8E00tInfVxptcc!/m/dLYAAAAAAAAAnull&bo=yADIAAAAAAADByI!&rf=photolist&t=5",
  //       soucang: '收藏',

  //     })
  //     this.data.a = 1;
  //     wx.showToast({
  //       title: '已取消收藏',
  //       duration: 2000
  //     })
  //   }
  //   else {
  //     this.setData({
  //       bac: "http://a3.qpic.cn/psb?/V14a5AtA1zaehb/e4f5BF6RQmMeJdBnKlpwwwQuMJDJy*dfL7WEO9j7CPw!/m/dL4AAAAAAAAAnull&bo=yADIAAAAAAADByI!&rf=photolist&t=5",
  //       soucang: '已收藏',

  //     })
  //     this.data.a = 0;
  //     wx.showToast({

  //       title: '收藏成功',

  //       icon: 'success',

  //       duration: 2000

  //     })
  //   }


  // },
  previewImg: function (e) {
    console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.imgArr;
    wx.previewImage({
      current: imgArr[index],     //当前图片地址
      urls: imgArr,               //所有要预览的图片的地址集合 数组形式
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  previewHuxingImg: function (e) {
    console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    var imgHuxingArr = this.data.imgHuxingArr;
    wx.previewImage({
      current: imgHuxingArr[index],     //当前图片地址
      urls: imgHuxingArr,               //所有要预览的图片的地址集合 数组形式
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  ellipsis: function () {
    var value = !this.data.ellipsis;
    this.setData({
      ellipsis: value
    })
  },
  zufang_detail: function () {
    //直接呼叫
    wx.makePhoneCall({
      phoneNumber: '13595799415',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var id = options.id;
    console.log(id)
    that.setData({
      collectData: id
    })
    that.getCollected();
    wx.request({
      url: "http://www.lonelypanson.top/query.php?iid=" + id,
      method: "GET",
      header: {
        "Content-Type": "application/x-www-form-urlencoded" // 默认值
      },
      data: {
      },
      success(res) {
        // console.log(res.data)
        that.setData({
          imgArr: [res.data.image, res.data.image1, res.data.image2, res.data.image3, res.data.image4, res.data.image5, res.data.image6, res.data.image7, res.data.image8],
          leixing: res.data.leixing,
          huxing: res.data.huxing,
          mianji: res.data.mianji,
          wyzs: res.data.shouzufangshi,
          tit: res.data.xiangqing,
          other: [res.data.tdone, res.data.tdtwo, res.data.tdthree],
          prices: res.data.prices,
          other_name: res.data.xiaoqu,
          cqnx: res.data.tdone,
          kprq: res.data.junjia,
          jlrq: res.data.quyu,
          zdmj: res.data.fangxiang,
          jianjie: res.data.fangyuanmiaoshu
        })

      }
    })

  },
  getCollected() {
    let CollectState = wx.getStorageSync("_collect");//获取全部文章缓存状态
    //这里我们做一个判断，如果缓存中有这个值，取到id对应在缓存中的状态，存到data中，
    //如果没有这个值，把id对应在缓存中的状态设置为false
    if (CollectState) {// 判断如果缓存中有这个值 
      // 获取当前文章对应在缓存中的状态
      let collcetState = CollectState[this.data.collectData];
      this.setData({
        isShow: collcetState//把这个状态存到data中
      })
    } else {
      let CollectState = {};
      CollectState[this.data.collectData] = false;//没有这个值，默认把点赞的这个状态设置为false，
      // 当然不设置false，它默认也是false，未选中的状态
      wx.setStorageSync("_collect", CollectState);
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  getLocation: function () {
    var _this = this;
    wx.chooseLocation({
      success: function (res) {
        var name = res.name
        var address = res.address
        var latitude = res.latitude
        var longitude = res.longitude
        _this.setData({
          name: name,
          address: address,
          latitude: latitude,
          longitude: longitude
        })
      }
    })
  },
  shoucang: function (e) {
    // 获取当前缓存中的所有状态
    let getSecCollect = wx.getStorageSync("_collect");
    // 获取当前页面的收藏按钮的状态 this.data.collectData就是当前的页面的id，在data中存储的
    let getSecCollectState = getSecCollect[this.data.collectData];

    // 然后当前收藏按钮的状态取反
    getSecCollectState = !getSecCollectState;
    // 把取反的值的状态 在赋给 当前按钮的状态
    getSecCollect[this.data.collectData] = getSecCollectState;
    wx.setStorageSync("_collect", getSecCollect)//在缓存中设置改变之后的状态
    this.setData({
      isShow: getSecCollectState//把更新过的收藏按钮的状态赋值给isShow
    })
    if (!this.data.isShow == true) {
      wx.showToast({

        title: '已收藏',

      });

    } else {
      wx.showToast({

        title: '已取消收藏',

      });
    }
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
