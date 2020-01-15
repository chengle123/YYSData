var storage = require('../../utils/storage.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentType: 1,
    equip: [],
    type: {
      "1": "联动",
      "2": "呱太",
      "3": "SP",
      "4": "SSR",
      "5": "SR",
      "6": "R",
      "7": "N",
    },
    data: {
      1:[
          {
            id:4,
            name: '黑崎一护',
            img: '../../img/ss/黑崎一护/1h.jpg'
          },
          {
            id: 5,
            name: '露琪亚'
          }
      ],
      2:[],
      3:[],
      4:[],
      5:[],
      6:[],
      7:[],
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
    console.log()
    this.setData({
      equip: this.data.data[this.data.currentType]
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
    var type = parseInt(event.currentTarget.dataset.type);
    this.setData({
      currentType: type,
      equip: this.data.data[type]
    });
    this.fetchData();
  }
})