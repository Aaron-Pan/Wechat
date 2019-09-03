//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    hiddenLoading: false,
    selected:0,
    navbar: ['找租房','买新房'],

    salelist: [{
      sale_title: '我要买房',
      sale_describel: '专业评估报价',
      sale_pic: 'images/cuzu.png'
    },
    {
      sale_title: '我要卖房',
      sale_describel: '为你快速匹配',
      sale_pic: 'images/sale.png'
    },
    {
      sale_title: '我要出租',
      sale_describel: '平台快速上架',
      sale_pic: 'images/zufang.png'
    },
    {
      sale_title: '我要租房',
      sale_describel: '好房等你来租',
      sale_pic: 'images/yishou.png'
    }
    ],
    imgUrls: [
      'images/new_house.png',
      'images/ershou_house.png',
      'images/xiezilou.png',
      'images/chuzu.png',
      'images/zixun.png',
      'images/chafangjia.png',
      'images/tuijiankehu.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    circular:true,
    descs: [
      '买新房',
      '二手房',
      '租房',
      '找顾问',
      '资讯',
      '推荐客户',
      '购房计算器'
    ],
    binding: [
      'new_house',
      'ershou_house',
      'chuzu',
      'middleman',
      'information',
      'logs',
      'goufangjisuanqi'
    ],
    zushou: [
      'woyaomaifang',
      'sellHouse',
      'zufang',
      'woyaozufang'
    ],
    slider: [
      'images/slide1.jpg',
      'images/slide2.jpg' ,
      'images/slide3.jpg' 
    ],
    msgList: [
      { url: "url", title: "佛山租房和无房提取住房公积金标准不变 无房提取最高6930元/年" },
      { url: "url", title: "房地产融资阀门收紧后，6.8万亿到期债务考验房企资金链" },
      { url: "url", title: "北大资源合唱团出国演出遇尴尬:被要求给他人伴唱" }],
    swiperCurrent: 0,
  },
  swiperChange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
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
  new_house: function () {
    wx.navigateTo({
      url: "/pages/new_house/new_house"
    })
  },
  ershou_house: function () {
    wx.navigateTo({
      url: "/pages/ershou_house/ershou_house"
    })
  },
  xiezilou: function () {
    wx.navigateTo({
      url: "/pages/xiezilou/xiezilou"
    })
  },
  chuzu: function () {
    wx.navigateTo({
      url: "/pages/chuzu/chuzu"
    })
  },
  information: function () {
    wx.navigateTo({
      url: "/pages/information/information"
    })
  },
  middleman: function () {
    wx.navigateTo({
      url: "/pages/middleman/middleman"
    })
  },
  woyaozufang: function () {
    wx.navigateTo({
      url: "/pages/woyaozufang/woyaozufang"
    })
  },
  zufang: function () {
    wx.navigateTo({
      url: "/pages/zufang/zufang"
    })
  },
  sellHouse: function () {
    wx.navigateTo({
      url: "/pages/sellHouse/sellHouse"
    })
  },

  woyaomaifang: function () {
    wx.navigateTo({
      url: "/pages/woyaomaifang/woyaomaifang"
    })
  },
  details: function () {
    wx.navigateTo({
      url: "/pages/details/details"
    })
  },
  zufang_detail: function (e) {
    var that = this
    var id = e.currentTarget.dataset.id;
    console.log(id)
    wx.navigateTo({
      url: "/pages/zufang_detail/zufang_detail?id=" + id,
    })
  },
  weituo: function () {
    wx.navigateTo({
      url: "/pages/weituoguanli/weituoguanli"
    })
  },
  logs: function () {
    wx.navigateTo({
      url: "/pages/logs/logs"
    })
  },
  goufangjisuanqi: function () {
    wx.navigateTo({
      url: "/pages/goufangjisuanqi/goufangjisuanqi"
    })
  },
  information_details: function () {
    wx.navigateTo({
      url: "/pages/information_details/information_details"
    })
  },
  onLoad:function(){
    var that = this;
    wx.request({
      url: 'http://www.lonelypanson.top/xuanranceshi.php',//此处填写你后台请求地址
      method: 'POST',
      header: { 'Content-Type': 'application/json' },
      data: {},
      success: function (res) {
        // success
        console.log(res.data);//打印请求返回的结果
        that.setData({
          prolist: res.data
        })
      },
      fail: function (res) {
        // fail
      },
      complete: function (res) {
        // complete
      }
    })
    wx.request({
      url: 'http://127.0.0.1/fangshijia/fangshijia_newHouse.php',//此处填写你后台请求地址
      method: 'POST',
      header: { 'Content-Type': 'application/json' },
      data: {},
      success: function (res) {
        // success
        console.log(res.data);//打印请求返回的结果
        that.setData({
          newlist: res.data
        })
      },
      fail: function (res) {
        // fail
      },
      complete: function (res) {
        // complete
      }
    })
  },
  onReady: function () {
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
  },
  onPullDownRefresh() {
    //定时两秒结束
    setTimeout(function () {
      wx.stopPullDownRefresh()
    }, 1000)
  } 
})
