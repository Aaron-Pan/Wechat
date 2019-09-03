const years = ["毛坯","普装","简装","中装","精装","豪装"]
const months = []
const days = []

for (let i = 1; i <= 10; i++) {
  months.push(i+"房")
}

for (let i = 1; i <= 10; i++) {
  days.push(i+"厅")
}

Page({
  data: {
    years:years,
    year:"请选择>",
    months: months,
    month: '请选择>',
    days: days,
    day: '',
    tee:false,
    te:false,
    items: [
      { name: '冰箱', value: '冰箱' },
      { name: '电视', value: '电视'},
      { name: '空调', value: '空调' },
      { name: '宽带', value: '宽带' },
      { name: '家具', value: '家具' },
      { name: '床', value: '床' },
      { name: '热水器', value: '热水器' },
      { name: '洗衣机', value: '洗衣机' },
      { name: '油烟机', value: '油烟机' },
      { name: '炉灶', value: '炉灶' },
      { name: '煤气', value: '煤气' }
    ]
  
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
  
  bindChange: function (e) {
    const val = e.detail.value
    this.setData({
      month: this.data.months[val[0]],
      day: this.data.days[val[1]],
    })
    
   
  },
  bindChange1: function (e) {
    const vall = e.detail.value
    this.setData({
      year: this.data.years[vall[0]]
    })


  },
  clickMe: function () {
    this.setData({
      tee: !this.data.tee,
      te:false
    })
  },
  clickMe1: function () {
    this.setData({
      te: !this.data.te,
      tee:false
    })
  },
  close:function(){
    this.setData({
      tee: false,
      te:false
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