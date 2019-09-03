Page({
  data: {
    // 下拉菜单
    first: '区域',
    second: '租价',
    thirds: '户型',
    fours: '筛选',
    _num: 0,
    _res: 0,

    // 筛选
    array: [{ name: '不限' }, { name: '50以下' }, { name: '50-70' }, { name: '70-90' }, { name: '90-110' }, { name: '110以上' }],
    chaoxiang: [{ name: '不限' }, { name: '南北' }, { name: '南' }, { name: '东南' }],
    louceng: [{ name: '不限' }, { name: '5层以下' }, { name: '5-10层' }, { name: '10-15层' }, { name: '15-20层' }, { name: '20-25层' }, { name: '25-30层' }, { name: '30-35层' }, { name: '35-40层' }, { name: '40层以上' }],
    zhuangxiu: [{ name: '不限' }, { name: '精装修' }, { name: '中装修' }, { name: '简单装修' }],
    leibei: [{ name: '不限' }, { name: '住宅' }, { name: '写字楼' }, { name: '商铺' }, { name: '别墅' }, { name: '其它' }],
    //tese: [{ name: '不限' }, { name: '亲子套餐' }, { name: '活动套餐' }, { name: '女王套餐' }],
    //paixu: [{ name: '不限' }, { name: '亲子套餐' }, { name: '活动套餐' }, { name: '女王套餐' }],
    one: 0,
    two: 0,
    third: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    yi:'',
    er:'',
    san:'',
    // 小区街道
    rowLise: {
      row_huaguoyuan: { id: 0, name: ['花果园A南区', '花果园A北区', '花果园B南区', '花果园B北区', '花果园C区', '花果园E区', '花果园F区', '花果园G区', '花果园J区', '花果园K区', '花果园L区', '花果园M区', '花果园N区', '花果园Q区', '花果园R区', '花果园S区', '花果园T区', '花果园U区', '花果园V区', '花果园W区', '花果园X区'] },
      row_yunyan: { id: 1, name: ['大营坡', '喷水池', '三桥', '万科城', '黔灵山公园', '新添大道', '宅吉', '东山公园'] },
      row_baiyun: { id: 2, name: ['白云公园', '天鹅湖', '艳山红', '龚家寨', '同心路', '大山洞', '龚北路', '南湖新区'] },
      row_wudang: { id: 3, name: ['新添寨', '新添大道', '乌当', '保利公园'] },
      row_huaxi: { id: 4, name: ['湿地公园', '花溪公园', '金竹', '花溪大学城', '黄河路', '小河', '孟关大道'] },
      row_guanshanhu: { id: 5, name: ['中铁逸都', '会展城A区', '会展城B区', '碧海花园', '高新区', '世纪城', '西南商贸城'] },
    },
  },
  isShow: true,
  currentTab: 0,
  // 下拉切换
  hideNav: function () {
    this.setData({
      displays: "none"
    })
  },
  // 区域
  tabNav: function (e) {
    this.setData({
      displays: "block"
    })
    this.setData({
      selected1: false,
      selected2: false,
      selected: true
    })
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {

      var showMode = e.target.dataset.current == 0;

      this.setData({
        currentTab: e.target.dataset.current,
        isShow: showMode
      })
    }
  },
  // 下拉切换中的切换
  // 区域
  selected: function (e) {
    this.setData({
      selected1: false,
      selected2: false,
      selected3: false,
      selected4: false,
      selected5: false,
      selected: true
    })
  },
  selected1: function (e) {
    this.setData({
      selected: false,
      selected2: false,
      selected1: true,
      selected3: false,
      selected4: false,
      selected5: false
    })
  },
  selected2: function (e) {
    this.setData({
      selected: false,
      selected1: false,
      selected2: true,
      selected3: false,
      selected4: false,
      selected5: false
    })
  },
  selected3: function (e) {
    this.setData({
      selected: false,
      selected1: false,
      selected2: false,
      selected3: true,
      selected4: false,
      selected5: false,
    })
  },
  selected4: function (e) {
    this.setData({
      selected: false,
      selected1: false,
      selected2: false,
      selected3: false,
      selected4: true,
      selected5: false,
    })
  },
  selected5: function (e) {
    this.setData({
      selected: false,
      selected1: false,
      selected2: false,
      selected3: false,
      selected4: false,
      selected5: true,
    })
  },
  // 下拉菜单1 2 3 4
  // 区域
  clickSum: function (e) {
    // console.log(e.target.dataset.num)
    this.setData({
      first: e.target.dataset.name,
      yi: e.target.dataset.name
    })

    this.setData({
      displays: "none"
    })
    var text = this.data.name
    // console.log(text)
    var that = this;
    var quyu = that.data.first;
    var jiage = that.data.er;
    var huxing = that.data.san;
    console.log(that.data.first)
    console.log(quyu)
    console.log(jiage)
    console.log(huxing)
    wx.request({
      url: 'http://www.lonelypanson.top/queryfsj.php?first=' + quyu + '&second=' + jiage + '&thirds=' + huxing,//此处填写你后台请求地址
      method: 'GET',
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
  },
  clickMum: function (e) {
    console.log(e.target.dataset.num)
    this.setData({
      _mum: e.target.dataset.num
    })
    this.setData({
      first: e.target.dataset.name,
      yi: e.target.dataset.name
    })
    this.setData({
      displays: "none"
    })
    var text = this.data.name
    // console.log(text)
    var that = this;
    var quyu = that.data.first;
    var jiage = that.data.er;
    var huxing = that.data.san;
    console.log(quyu)
    console.log(jiage)
    console.log(huxing)
    wx.request({
      url: 'http://www.lonelypanson.top/queryfsj.php?first=' + quyu + '&second=' + jiage + '&thirds=' + huxing,//此处填写你后台请求地址
      method: 'GET',
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
  },
  clickCum: function (e) {
    console.log(e.target.dataset.num)
    this.setData({
      _cum: e.target.dataset.num
    })
    this.setData({
      first: e.target.dataset.name,
      yi: e.target.dataset.name
    })
    this.setData({
      displays: "none"
    })
    var text = this.data.name
    // console.log(text)
    var that = this;
    var quyu = that.data.first;
    var jiage = that.data.er;
    var huxing = that.data.san;
    console.log(quyu)
    console.log(jiage)
    console.log(huxing)
    wx.request({
      url: 'http://www.lonelypanson.top/queryfsj.php?first=' + quyu + '&second=' + jiage + '&thirds=' + huxing,//此处填写你后台请求地址
      method: 'GET',
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
  },
  clickWum: function (e) {
    console.log(e.target.dataset.num)
    this.setData({
      _wum: e.target.dataset.num
    })
    this.setData({
      first: e.target.dataset.name,
      yi: e.target.dataset.name
    })
    this.setData({
      displays: "none"
    })
    var text = this.data.name
    // console.log(text)
    var that = this;
    var quyu = that.data.first;
    var jiage = that.data.er;
    var huxing = that.data.san;
    console.log(quyu)
    console.log(jiage)
    console.log(huxing)
    wx.request({
      url: 'http://www.lonelypanson.top/queryfsj.php?first=' + quyu + '&second=' + jiage + '&thirds=' + huxing,//此处填写你后台请求地址
      method: 'GET',
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
  },
  clickHum: function (e) {
    console.log(e.target.dataset.num)
    this.setData({
      _wum: e.target.dataset.num
    })
    this.setData({
      first: e.target.dataset.name,
      yi: e.target.dataset.name
    })
    this.setData({
      displays: "none"
    })
    var text = this.data.name
    // console.log(text)
    var that = this;
    var quyu = that.data.first;
    var jiage = that.data.er;
    var huxing = that.data.san;
    console.log(quyu)
    console.log(jiage)
    console.log(huxing)
    wx.request({
      url: 'http://www.lonelypanson.top/queryfsj.php?first=' + quyu + '&second=' + jiage + '&thirds=' + huxing,//此处填写你后台请求地址
      method: 'GET',
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
  },
  clickGum: function (e) {
    console.log(e.target.dataset.num)
    this.setData({
      _wum: e.target.dataset.num
    })
    this.setData({
      first: e.target.dataset.name,
      yi: e.target.dataset.name
    })
    this.setData({
      displays: "none"
    })
    var text = this.data.name
    console.log(text)
    var that = this;
    var quyu = that.data.first;
    var jiage = that.data.er;
    var huxing = that.data.san;
    console.log(quyu)
    console.log(jiage)
    console.log(huxing)
    wx.request({
      url: 'http://www.lonelypanson.top/queryfsj.php?first=' + quyu + '&second=' + jiage + '&thirds=' + huxing,//此处填写你后台请求地址
      method: 'GET',
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
  },
  
  // 区域模块市区街道隐藏/显示
  rowShow: [
    { isShows: true },
    { isShows: true },
    { isShows: true },
    { isShows: true },
    { isShows: true },
    { isShows: true },
    { isShows: true },
    { isShows: true },
  ],
  // 售价
  clickNum: function (e) {
    // console.log(e.target.dataset.num)
    this.setData({
      _num: e.target.dataset.num
    })
    this.setData({
      second: e.target.dataset.name,
      er: e.target.dataset.name
      
    })
    // console.log(this.data.second)
    this.setData({
      displays: "none"
    })
    var text = this.data.name
    // console.log(text)
    var that = this;
    var quyu = that.data.yi;
    var jiage = that.data.second;
    var huxing = that.data.san;
    console.log(quyu)
    console.log(jiage)
    console.log(huxing)
    wx.request({
      url: 'http://www.lonelypanson.top/queryfsj.php?first=' + quyu + '&second=' + jiage + '&thirds=' + huxing,//此处填写你后台请求地址
      method: 'GET',
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
  },
  
  // 房型
  clickHouse: function (e) {
    console.log(e.target.dataset.num)
    this.setData({
      _res: e.target.dataset.num
    })
    this.setData({
      thirds: e.target.dataset.name,
      san: e.target.dataset.name
    })
    this.setData({
      displays: "none"
    })
    var that = this;
    var quyu = that.data.yi;
    var jiage = that.data.er;
    var huxing = that.data.thirds;
    console.log(quyu)
    console.log(jiage)
    console.log(huxing)
    wx.request({
      url: 'http://www.lonelypanson.top/queryfsj.php?first=' + quyu + '&second=' + jiage + '&thirds=' + huxing,//此处填写你后台请求地址
      method: 'GET',
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
  },
  onLoad: function (options) {
    var that = this;
    var quyu = that.data.yi;
    var jiage = that.data.er;
    var huxing = that.data.san;
    wx.request({
      url: 'http://www.lonelypanson.top/queryfsj.php?first='+quyu+'&second='+jiage+'&thirds='+huxing,//此处填写你后台请求地址
      method: 'GET',
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
  },

  // 筛选
  choseTxtColor: function (e) {
    var id = e.currentTarget.dataset.id;  //获取自定义的ID值  
    console.log(e.currentTarget.dataset.id)
    this.setData({
      one: id
    })
  },
  chaoxiang: function (e) {
    var id = e.currentTarget.dataset.id;  //获取自定义的ID值  
    this.setData({
      two: id
    })
  },
  louceng: function (e) {
    var id = e.currentTarget.dataset.id;  //获取自定义的ID值  
    this.setData({
      third: id
    })
  },
  zhuangxiu: function (e) {
    var id = e.currentTarget.dataset.id;  //获取自定义的ID值  
    this.setData({
      four: id
    })
  },
  leibei: function (e) {
    var id = e.currentTarget.dataset.id;  //获取自定义的ID值  
    this.setData({
      five: id
    })
  },
  tese: function (e) {
    var id = e.currentTarget.dataset.id;  //获取自定义的ID值  
    this.setData({
      six: id
    })
  },
  paixu: function (e) {
    var id = e.currentTarget.dataset.id;  //获取自定义的ID值  
    this.setData({
      seven: id
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
  /**
* 生命周期函数--监听页面显示
*/
  onShow: function () {
  },
  onPullDownRefresh() {
    //定时两秒结束
    setTimeout(function () {
      wx.stopPullDownRefresh()
    }, 1000)
  } ,
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

})
