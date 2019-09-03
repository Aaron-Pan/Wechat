const years = ["毛坯", "普装", "简装", "中装", "精装", "豪装"]
const months = []
const days = []

for (let i = 1; i <= 10; i++) {
  months.push(i + "房")
}

for (let i = 1; i <= 10; i++) {
  days.push(i + "厅")
}

Page({
  data: {
    years: years,
    year: "请选择>",
    months: months,
    month: '请选择>',
    days: days,
    day: '',
    tee: false,
    te: false,
  },
  bindChange: function(e) {
    const val = e.detail.value
    this.setData({
      month: this.data.months[val[0]],
      day: this.data.days[val[1]],
    })


  },
  bindChange1: function(e) {
    const vall = e.detail.value
    this.setData({
      year: this.data.years[vall[0]]
    })


  },
  addpic:function(){
    // 选择图片
    wx.chooseImage({
      count: 9,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {

        wx.showLoading({
          title: '上传中',
        })

        const filePath = res.tempFilePaths[0]

        // 上传图片
        const cloudPath = 'my-image' + filePath.match(/\.[^.]+?$/)[0]
        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          success: res => {
            console.log('[上传文件] 成功：', res)

            app.globalData.fileID = res.fileID
            app.globalData.cloudPath = cloudPath
            app.globalData.imagePath = filePath

            wx.navigateTo({
              url: '../storageConsole/storageConsole'
            })
          },
          fail: e => {
            console.error('[上传文件] 失败：', e)
            wx.showToast({
              icon: 'none',
              title: '上传失败',
            })
          },
          complete: () => {
            wx.hideLoading()
          }
        })

      },
      fail: e => {
        console.error(e)
      }
    })
  },
  clickMe: function() {
    this.setData({
      tee: !this.data.tee,
      te: false
    })
  },
  clickMe1: function() {
    this.setData({
      te: !this.data.te,
      tee: false
    })
  },
  close: function() {
    this.setData({
      tee: false,
      te: false
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})