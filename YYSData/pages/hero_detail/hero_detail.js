// var storage = require('../../utils/storage.js');
var zj = require('../../utils/zj.js');
var ss = require('../../utils/ss.js');
let interstitialAd = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hero_id: null,
    skill_index: 0,
    nav_index: 0,
    hero: {},
    type: {
      "zj": "主角",
      "2": "D",
      "3": "C",
      "4": "B",
      "5": "A",
      "6": "S",
      "7": "SS",
      "8": "SSR"
    },
    js: '',
    content: {}
  },
  onReady: function (){
    if(qq.createInterstitialAd){
      interstitialAd = qq.createInterstitialAd({ adUnitId: '18b4d0298a9615409bb10d9e1dc0bf0f' });
      interstitialAd.onLoad(() => {
        console.log('onLoad event emit')
      })
      interstitialAd.onError((err) => {
        console.log('onError event emit', err)
      })
      interstitialAd.onClose((res) => {
        console.log('onClose event emit', res)
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this,
        heroid = parseInt(options.id);
        if(options.js === 'zj'){
          this.setData({
            js: options.js,
            hero: zj.zjList[options.id]
          })
        }
        if(options.js === 'ss'){
          this.setData({
            js: options.js,
            hero: ss.ssList[options.fl][options.id]
          })
        }
        setTimeout(()=>{
          if (interstitialAd) {
            interstitialAd.show().catch((err) => {
              console.error('show', err)
            })
          }
        },30000)
        
        // console.log(options)
    // storage.queryHero(heroid, function(data) {
    //   var desData = [];

    //   for (var i in data['ming']) {
    //     var des = data['ming'][i].des;
    //     var obj = {};
    //     des = des.replace(/\<p\>/g, '').split('</p>');

    //     for (var j = 0; j < des.length - 1; j++) {
    //       obj[j] = des[j];
    //     }

    //     desData.push(obj);
    //     data['ming'][i].des = desData[i];
    //   }

    //   self.setData({
    //     hero: data
    //   })
    // });
  },

  onShareAppMessage: function () {
    if(this.data.js === 'zj'){
      return {
        title: '【主角详情】' + this.data.hero.hero_name,
        path: 'pages/hero_detail/hero_detail?id=' + this.data.hero.hero_id
      }
    }
    if(this.data.js === 'ss'){
      return {
        title: '【式神详情】' + this.data.hero.hero_name,
        path: 'pages/hero_detail/hero_detail?id=' + this.data.hero.hero_id
      }
    }
  },

  toggleNav: function (event) {
    var index = event.currentTarget.dataset.tabindex;
    this.setData({
      nav_index: index,
      skill_index: 0
    });
  },

  toggle: function (event) {
    if(this.data.js === 'zj'){
      var skill_id = event.currentTarget.dataset.id,
        skill_arr = this.data.hero.jnText;
      // var obj = skill_arr.filter(function(el,index) {
      //   console.log(el)
      //   return el.id == skill_id;
      // })[0];

      // var index = skill_arr.indexOf(obj);

      this.setData({
        skill_index: skill_id
      });
    }
    if(this.data.js === 'ss'){
      var skill_id = event.currentTarget.dataset.id;
      console.log(skill_id)
      this.setData({
        skill_index: skill_id
      });
    }
  }
})