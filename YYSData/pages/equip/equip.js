// var storage = require('../../utils/storage.js');
var json = require('../../utils/ss.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentType: 'ld',
    equip: [],
    type: {
      "ld": "联动",
      "gt": "呱太",
      "SP": "SP",
      "SSR": "SSR",
      "SR": "SR",
      "R": "R",
      "N": "N",
    },
    data: {
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.fetchData();
  },

  onShareAppMessage: function () {
    return {
      title: '阴阳师式神大全',
      path: 'pages/equip/equip'
    }
  },

  fetchData: function() {
    var self = this;
    this.setData({
      data: json.ssList,
      equip: json.ssList[this.data.currentType]
    });
    
    // storage.queryEquipList(self.data.currentType, function (data) {
    //   // 请求失败
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

    //   // 请求成功
    //   var arr = [];
    //   for (var i in data.data) {
    //     var item = data.data[i].attributes;
    //     arr.push(item);
    //   }
    //   self.setData({
    //     equip: arr
    //   })
    // });
  },

  toggle: function(event) {
    // var type = parseInt(event.currentTarget.dataset.type);
    var type = event.currentTarget.dataset.type;
    this.setData({
      currentType: type,
      equip: this.data.data[type]
    });
    this.fetchData();
  }
})