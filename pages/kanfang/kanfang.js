Page({

  /**
   * 页面的初始数据
   */
  data: {
    hiddenLoading: false,
    currentData: 0,
    navlist: [
      {
        name: '住房/租房'
      },
      {
        name: '新房'
      }
    ],
    content: [
      {
        prolist: [{
          tuijian_left: '../index/pic/slide1.jpg',
          adress: '花果园C区 16栋 1单元',
          mianji: '102平米',
          hu: '2室1厅',
          lei: '整租',
          tedian: '精装修',
          ted: '小户型',
          te: '环境优美',
          salary: 2000
        },
          {
            tuijian_left: '../index/pic/slide2.jpg',
            adress: '花果园M区 5栋 1单元',
            mianji: '64平米',
            hu: '3室2厅',
            lei: '整租',
            tedian: '简装修',
            ted: '地段好',
            te: '家具齐全',
            salary: 2100
          }
        ],
      },


      {
        newlist: [{
          tuijian_left: '../index/pic/3.jpg',
          adress: '观山湖区 俊发城',
          mianji: '78~100平米',
          hu: '两房/三房',
          lei: '公寓',
          tedian: '房开直售',
          ted: '户型好',
          te: '环境优美',
          salary: 7600
        }]
      },
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  //获取当前滑块的index
  bindchange: function (e) {
    const that = this;
    that.setData({
      currentData: e.detail.current
    })
  },
  //点击切换，滑块index赋值
  checkCurrent: function (e) {
    const that = this;

    if (that.data.currentData === e.target.dataset.current) {
      return false;
    } else {

      that.setData({
        currentData: e.target.dataset.current
      })
    }
  },
  onReady: function () {
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 1000)
  },
  onPullDownRefresh() {
    //定时两秒结束
    setTimeout(function () {
      wx.stopPullDownRefresh()
    }, 1000)
  } 
})
