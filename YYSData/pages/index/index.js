// var storage = require('../../utils/storage.js');
var BannerAd = null;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    freehero: [
        {
            "id": 0,
            "name": "晴明",
            "img": "../../img/role/btn_link1_e90222c.png"
        },
        {
            "id": 1,
            "name": "神乐",
            "img": "../../img/role/btn_link2_f1ea288.png"
        },
        {
            "id": 2,
            "name": "源博雅",
            "img": "../../img/role/btn_link3_3a68faa.png"
        },
        {
            "id": 3,
            "name": "八百比丘尼",
            "img": "../../img/role/btn_link4_d2d5cc0.png"
        }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    // this.fetchData();
  },

  onShareAppMessage: function () {
    return {
      title: '阴阳师百科图鉴，快来看看吧',
      path: 'pages/index/index'
    }
  },

  fetchData: function () {
    var self = this;
    // storage.init();
    // storage.queryFreehero(function (data) {
    //   if (data.status === 400) {
    //     wx.showModal({
    //       title: '网络错误',
    //       content: '数据获取失败，请重新尝试',
    //       success: function (res) {
    //         if (res.confirm) {
    //           self.fetchData();
    //         }
    //       }
    //     });
    //     return;
    //   }
      
    //   var freeheroData = data.data[0].attributes.freehero;
    //   self.setData({
    //     freehero: freeheroData
    //   })
    // });
  }
})