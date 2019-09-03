Page({

  /**
   * 页面的初始数据
   */
  data: {

    currentData: 0,
    navlist: [
      {
        name: '全部资讯'
      },
      {
        name: '银行政策'
      },
      {
        name: '楼市行情'
      },
    ],
    content: [
      {
        name:[{
          liebiao_title: '佛山租房和无房提取住房公积金标准不变 无房提取最高6930元/年',
          liebiao_time: '6-16 10:23',
          liulan: '522',
          liebiao_img: 'pic/slide3.jpg'
        },
          {
            liebiao_title: '房地产融资阀门收紧后，6.8万亿到期债务考验房企资金链',
            liebiao_time: '6-17 10:23',
            liulan: '22',
            liebiao_img: 'pic/slide2.jpg'
          }
        ]
      },
      {
        name: '分类1'
      },
      {
        name: '分类2'
      },
    ]
  },
  information_details:function(){
  wx.navigateTo({
    url: '/pages/information_details/information_details',
  })
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
  }
})
