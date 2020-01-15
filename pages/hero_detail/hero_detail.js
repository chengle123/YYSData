var storage = require('../../utils/storage.js');

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
      "1": "主角",
      "2": "D",
      "3": "C",
      "4": "B",
      "5": "A",
      "6": "S",
      "7": "SS",
      "8": "SSR"
    },
    js: '',
    content: {
      1: {
        hero_cover: '../../img/qm/role1-inception_1ac1df3.png',
        hero_name: '晴明',
        hero_type: 1,
        content: '京都城中极具盛名的天才阴阳师\n却不知为何失去了自己的记忆\n等待着他的是寻回记忆的喜悦\n还是不堪回首的残忍真相',
        skin: [
          {
            id:1,
            name:'森罗万象',
            img: '../../img/qm/role1-skin01_1c85f73.png'
          },
          {
            id:2,
            name:'黑晴明',
            img: '../../img/qm/role1-skin02_1d6ebae.png'
          },
          {
            id:3,
            name:'金月暗羽',
            img: '../../img/qm/role1-skin03_6f4c917.png'
          },
          {
            id:4,
            name:'月华流咏',
            img: '../../img/qm/role1-skin04_df1e8db.png'
          },
          {
            id:5,
            name:'金枫尽染',
            img: '../../img/qm/role1-skin05_3cc5db8.png'
          },
        ],
        skills:[
          {
            id: 1,
            img: '../../img/qm/1.png',
            name: '基础术式',
            value: '使用符咒攻击目标，造成攻击100%的伤害。',
            desc: [
              'LV2 有50%（+效果命中：0%）的概率为目标附加[符咒·乱]效果，使其造成的伤害减少20%，持续2回合',
              'LV3 [符咒·乱]效果的附加概率增至100%（+效果命中：0%）',
              'LV4 [符咒·乱]效果强化：造成的伤害降低40%',
              'LV5 技能伤害额外+20%',
            ]
          },
          {
            id: 2,
            img: '../../img/qm/2.png',
            name: '言灵·缚',
            value: '以结界束缚目标，使目标受到的伤害增加10%，并有50%（+效果命中）的概率束缚敌人，被束缚的单位可以通过使用普通攻击打破束缚解除控制。结界继承阴阳师5%的生命值，技能冷却2回合。',
            desc: [
              'LV2 [言灵·缚]效果强化：受到的伤害增加20%',
              'LV3 [言灵·缚]效果强化：受到的伤害增加30%',
              'LV4 [言灵·缚]效果强化：受到的伤害增加40%',
              'LV5 结界继承的生命值增至阴阳师的10%'
            ]
          },
          {
            id: 3,
            img: '../../img/qm/3.png',
            name: '言灵·守',
            value: '以灵力结成一个巨大的防守结界，使敌人无法伤害队友，结界在阴阳师行动2次或承受阴阳师生命上限10%的伤害后失效，技能冷却3回合。',
            desc: [
              'LV2 吸收量增至阴阳师生命上限的11%',
              'LV3 吸收量增至阴阳师生命上限的12%',
              'LV4 吸收量增至阴阳师生命上限的13%',
              'LV5 吸收量增至阴阳师生命上限的14%'
            ]
          },
          {
            id: 4,
            img: '../../img/qm/4.png',
            name: '言灵·一式',
            value: '引爆战场内所有符咒并清除其效果，每个队友身上的符咒会为其恢复自身生命的10%，每个敌军身上的符咒会对其造成晴明攻击10%的伤害。',
            desc: ['该技能无法升级']
          },
          {
            id: 5,
            img: '../../img/qm/5.png',
            name: '符咒·灭',
            value: '为敌方全体贴上[符咒·灭]，使目标受到的伤害增加15%，效果在目标行动2次后消失。',
            desc: [
              'LV2 [符咒·灭]效果强化：使目标受到的伤害增加20%',
              'LV3 [符咒·灭]效果强化：使目标受到的伤害增加25%',
              'LV4 [符咒·灭]效果强化：使目标受到的伤害增加30%',
              'LV5 [符咒·灭]持续回合数+1'
            ]
          },
          {
            id: 6,
            img: '../../img/qm/6.png',
            name: '符咒·生',
            value: '为其他队友贴上[符咒·生]，使其受到的伤害降低15%，持续2回合。',
            desc: [
              'LV2 [符咒·生]持续回合数+1',
              'LV3 [符咒·生]效果强化：受到的伤害降低20%',
              'LV4 [符咒·生]效果强化：受到的伤害降低30%',
              'LV5 [符咒·生]的效果同时作用于阴阳师'
            ]
          },
          {
            id: 7,
            img: '../../img/qm/7.png',
            name: '雷帝召来',
            value: '晴明受到攻击时有10%（+效果命中）的概率召唤神龙，神龙以灵力召来天雷攻击敌方全体，造成晴明攻击100%的伤害。',
            desc: [
              'LV2 有10%（+效果命中：0%）的概率晕眩敌人1回合',
              'LV3 技能伤害额外+10%',
              'LV4 眩晕概率增至20%（+效果命中：0%）',
              'LV5 技能伤害额外+10%'
            ]
          },
          {
            id: 8,
            img: '../../img/qm/8.png',
            name: '言灵·星',
            value: '以灵力划出五芒星结界，提升全体队友15%的伤害，持续2回合。',
            desc: [
              'LV2 [言灵·星]效果强化：造成的伤害增加20%',
              'LV3 [言灵·星]效果强化：造成的伤害增加25%',
              'LV4 [言灵·星]效果强化：造成的伤害增加30%',
              'LV5 [言灵·星]持续回合数+1'
            ]
          },
        ]
      },
      2: {
        hero_cover: '../../img/sy/role2-inception_8b82ee8.png',
        hero_name: '神乐',
        hero_type: 1,
        content: '善良而沉默的神秘少女\n失忆后便跟随在晴明身边\n拥有敏锐的直觉和强大的通灵能力\n以及不为人知的过去',
        skin: [
          {
            id:1,
            name:'凤之青羽',
            img: '../../img/sy/role2-skin01_ac76451.png'
          },
          {
            id:2,
            name:'莺燕鸣樱',
            img: '../../img/sy/role2-skin02_ac0a4f8.png'
          },
          {
            id:3,
            name:'樱色金鱼',
            img: '../../img/sy/role2-skin03_5969d22.png'
          },
          {
            id:4,
            name:'叠翠流金',
            img: '../../img/sy/role2-skin04_ab4eb65.png'
          },
        ],
        skills:[
          {
            id: 1,
            img: '../../img/sy/1.png',
            name: '伞击',
            value: '挥舞手中的纸伞，使用灵力攻击1名敌人，造成攻击100%的伤害。',
            desc: [
              'LV2 技能伤害额外+10%',
              'LV3 技能伤害额外+10%',
              'LV4 技能伤害额外+10%',
              'LV5 技能伤害额外+10%',
            ]
          },
          {
            id: 2,
            img: '../../img/sy/2.png',
            name: '召唤·鱼',
            value: '召唤持续3回合的灵鱼胖金，胖金继承神乐10%的生命和100%的攻击，技能冷却3回合。',
            desc: [
              'LV2 生命继承增至20%',
              'LV3 攻击继承增至110%',
              'LV4 生命继承增至30%',
              'LV5 攻击继承增至120%'
            ]
          },
          {
            id: 3,
            img: '../../img/sy/3.png',
            name: '通灵·疾风',
            value: '使用通灵术、将疾风之力赋予1名队友，使其立即获得1次行动机会，并增加10%的攻击，技能冷却2回合。',
            desc: [
              'LV2 [疾风]效果强化：增加15%的攻击',
              'LV3 [疾风]效果强化：增加20%的攻击',
              'LV4 [疾风]效果强化：增加25%的攻击',
              'LV5 [疾风]效果强化：增加30%的攻击',
            ]
          },
          {
            id: 4,
            img: '../../img/sy/4.png',
            name: '通灵·冥蝶',
            value: '以通灵之术召唤冥蝶群涌向敌方全体，使目标在之后的2回合中受到治疗的效果降低30%，并有10%（+效果命中）的概率使目标沉睡1回合，技能冷却2回合。',
            desc: [
              'LV2 [冥蝶·减疗]效果强化：受到治疗的效果降低40%',
              'LV3 沉睡概率增至15%（+效果命中：0%）',
              'LV4 [冥蝶·减疗]效果强化：受到治疗的效果降低50%',
              'LV5 [冥蝶·减疗]持续回合数+1'
            ]
          },
          {
            id: 5,
            img: '../../img/sy/5.png',
            name: '召唤·炼狱',
            value: '召唤亡魂，亡魂伸出鬼手攻击敌方全体3次，每次造成攻击36%的伤害，并有20%（+效果命中）的概率为其附加持续1回合的随机减益状态。',
            desc: [
              'LV2 技能伤害额外+10%',
              'LV3 技能伤害额外+10%',
              'LV4 敌人陷入减益状态的概率增加为30%（+效果命中：0）',
              'LV5 技能伤害额外+10%'
            ]
          },
          {
            id: 6,
            img: '../../img/sy/6.png',
            name: '召唤·伞',
            value: '召唤具有妖力的唐伞守护全体队友，使他们受到的伤害降低20%，技能冷却3回合。',
            desc: [
              'LV2 [唐伞守护]效果强化：受到的伤害降低25%',
              'LV3 [唐伞守护]效果强化：受到的伤害降低30%',
              'LV4 [唐伞守护]效果强化：受到的伤害降低35%',
              'LV5 [唐伞守护]持续回合数+1'
            ]
          },
          {
            id: 7,
            img: '../../img/sy/7.png',
            name: '召唤·续命',
            value: '召唤亡魂附身并保护目标，持续2回合。若宿主在附身期间阵亡，会以灵魂姿态继续存在2回合。技能冷却2回合。',
            desc: ['该技能无法升级']
          },
          {
            id: 8,
            img: '../../img/sy/8.png',
            name: '天狐神火',
            value: '神乐受到攻击时有12%的概率触发白藏主反击，白藏主释放天狐神火攻击敌方全体，造成神乐攻击100%的伤害。',
            desc: [
              'LV2 受到攻击时触发[天狐神火]效果：降低目标20%的防御，并在持续时间内造成目标生命5%的伤害',
              'LV3 技能伤害额外+10%',
              'LV4 [天狐神火]效果强化：降低目标40%的防御',
              'LV5 技能伤害额外+10%'
            ]
          },
        ]
      },
      3: {
        hero_cover: '../../img/yby/role3-inception_ff701dd.png',
        hero_name: '源博雅',
        hero_type: 1,
        content: '拥有皇室血统的贵族青年\n擅长弓术与结界之术\n性情孤傲爽直\n但似乎一直在寻找某个重要的人',
        skin: [
          {
            id:1,
            name:'锦衣华服',
            img: '../../img/yby/role3-skin01_aa6cce7.png'
          },
          {
            id:2,
            name:'雄姿英发',
            img: '../../img/yby/role3-skin02_a63ae42.png'
          },
          {
            id:3,
            name:'竹间清风',
            img: '../../img/yby/role3-skin03_ebd0790.png'
          },
          {
            id:4,
            name:'金云箭羽',
            img: '../../img/yby/role3-skin04_efe3441.png'
          },
        ],
        skills:[
          {
            id: 1,
            img: '../../img/yby/1.png',
            name: '破魔矢',
            value: '源博雅拉满弓弦，射出带有灵力的箭，攻击1名敌人，造成攻击100%的伤害。',
            desc: [
              'LV2 技能伤害额外+10%',
              'LV3 技能伤害额外+10%',
              'LV4 技能伤害额外+10%',
              'LV5 技能伤害额外+10%',
            ]
          },
          {
            id: 2,
            img: '../../img/yby/2.png',
            name: '多重箭',
            value: '源博雅拉满弓弦，同时射出带有灵力的2发箭，随机对2个敌人造成攻击100%的伤害，技能冷却1回合。',
            desc: [
              'LV2 技能伤害额外+10%',
              'LV3 技能伤害额外+10%',
              'LV4 技能伤害额外+10%',
              'LV5 对额外1个目标造成伤害'
            ]
          },
          {
            id: 3,
            img: '../../img/yby/3.png',
            name: '诛邪箭',
            value: '源博雅快速拉弓，连续射出3发箭，攻击1名敌人，每箭造成攻击80%的伤害，每箭伤害递增10%，技能冷却2回合。',
            desc: [
              'LV2 技能伤害额外+5%',
              'LV3 技能伤害额外+5%',
              'LV4 技能伤害额外+5%',
              'LV5 技能伤害额外+5%',
            ]
          },
          {
            id: 4,
            img: '../../img/yby/4.png',
            name: '秘术·豹眼',
            value: '黑豹协助作战，使用灵力增加己方全体15%的暴击伤害，持续2回合，拥有该增益的队友进行攻击时，黑豹有20%的概率对一个随机敌人释放[秘术·穷追]，技能冷却3回合。',
            desc: [
              'LV2 [秘术·豹眼]效果强化：增加20%的暴击伤害',
              'LV3 [秘术·豹眼]效果强化：[秘术·穷追]的触发概率增加为50%',
              'LV4 [秘术·豹眼]效果强化：增加30%的暴击伤害',
              'LV5 [秘术·豹眼]持续回合数+1'
            ]
          },
          {
            id: 5,
            img: '../../img/yby/5.png',
            name: '秘术·影分身',
            value: '制造出一个持续2回合不可被攻击的影分身，每个友方单位行动时影分身都会对随机目标使用【破魔矢】，造成源博雅攻击30%的伤害。',
            desc: [
              'LV2 技能伤害额外+5%',
              'LV3 技能伤害额外+5%',
              'LV4 技能伤害额外+5%',
              'LV5 技能伤害额外+5%',
            ]
          },
          {
            id: 6,
            img: '../../img/yby/6.png',
            name: '秘术·豹袭',
            value: '战斗开始时，黑豹会随机扑向1名敌人，对其造成源博雅攻击100%的伤害。',
            desc: [
              'LV2 技能伤害额外+10%',
              'LV3 技能伤害额外+10%',
              'LV4 技能伤害额外+10%',
              'LV5 技能伤害额外+10%',
            ]
          },
          {
            id: 7,
            img: '../../img/yby/7.png',
            name: '悲声哀嚎',
            value: '源博雅阵亡时，黑豹发出悲痛的怒吼，增加全体队友60%的攻击和20点速度，效果持续1回合。',
            desc: [
              'LV2 [悲声哀嚎]效果强化：增加30点速度',
              'LV3 [悲声哀嚎]效果强化：增加80%的攻击',
              'LV4 [悲声哀嚎]效果强化：增加40点速度',
              'LV5 [悲声哀嚎]持续回合数+1'
            ]
          },
          {
            id: 8,
            img: '../../img/yby/8.png',
            name: '秘术·穷追',
            value: '源博雅使用[破魔矢]造成伤害时，黑豹有30%的概率进行协同攻击，造成源博雅攻击100%的伤害。',
            desc: ['该技能无法升级']
          },
        ]
      },
      4: {
        hero_cover: '../../img/bbbqn/role4-inception_24c764b.png',
        hero_name: '八 百 比 丘 尼',
        hero_type: 1,
        content: '因误食人鱼肉而不老不死\n能力超凡的流浪占卜师\n一直在凤凰林中等待着\n占卜之梦预言的命运之人',
        skin: [
          {
            id:1,
            name:'森罗万象',
            img: '../../img/bbbqn/role4-skin01_c08fe7b.png'
          },
          {
            id:2,
            name:'黑晴明',
            img: '../../img/bbbqn/role4-skin02_c249654.png'
          },
          {
            id:3,
            name:'金月暗羽',
            img: '../../img/bbbqn/role4-skin03_6dfa67f.png'
          },
          {
            id:4,
            name:'月华流咏',
            img: '../../img/bbbqn/role4-skin04_9999191.png'
          },
          {
            id:5,
            name:'金枫尽染',
            img: '../../img/bbbqn/role4-skin05_b523bd1.png'
          },
        ],
        skills:[
          {
            id: 1,
            img: '../../img/bbbqn/1.png',
            name: '星之光',
            value: '八百比丘尼挥舞法杖，将星光的力量凝聚成飞鸟射出，造成攻击100%的伤害。',
            desc: [
              'LV2 技能伤害额外+5%',
              'LV3 技能伤害额外+5%',
              'LV4 技能伤害额外+5%',
              'LV5 技能伤害额外+10%'
            ]
          },
          {
            id: 2,
            img: '../../img/bbbqn/2.png',
            name: '预知',
            value: '八百比丘尼向孔雀祈祷，使用预知之力，为全体队友增加持续守护效果2回合，带有守护效果的队友暴击时有30%的概率回复自身生命的10%，技能冷却2回合。',
            desc: [
              'LV2 [预知]效果强化：回复比例增至15%',
              'LV3 [预知]效果强化：触发概率增至35%',
              'LV4 [预知]效果强化：回复比例增至20%',
              'LV5 [预知]效果强化：触发概率增至40%'
            ]
          },
          {
            id: 3,
            img: '../../img/bbbqn/3.png',
            name: '星之咒',
            value: '八百比丘尼向敌人施咒语，使用星光的力量封印敌方全体，有25%（+效果命中）的概率使目标式神的御魂效果和被动技能失效2回合，技能冷却2回合。',
            desc: [
              'LV2 封印概率增至30%',
              'LV3 封印概率增至35%',
              'LV4 封印概率增至40%',
              'LV5 封印概率增至45%'
            ]
          },
          {
            id: 4,
            img: '../../img/bbbqn/4.png',
            name: '星陨',
            value: '八百比丘尼托起手中的法阵，用坠下星光的力量对敌方全体造成伤害，造成攻击112%的伤害，并有40%的概率降低目标20%的生命上限，持续2回合，技能冷却2回合。',
            desc: [
              'LV2 技能伤害额外+5%',
              'LV3 技能伤害额外+5%',
              'LV4 技能伤害额外+5%',
              'LV5 技能伤害额外+5%',
            ]
          },
          {
            id: 5,
            img: '../../img/bbbqn/5.png',
            name: '净化',
            value: '八百比丘尼行动时触发孔雀净化目标，驱散一个随机友方单位所有的负面状态。',
            desc: ['该技能无法升级']
          },
          {
            id: 6,
            img: '../../img/bbbqn/6.png',
            name: '占卜之印',
            value: '八百比丘尼给目标队友刻上占卜之印，守护队友1回合，受到保护的目标死亡后立即复活，并回复自身14%的生命值，占卜之印不能叠加，技能冷却2回合。',
            desc: [
              'LV2 [占卜之印]效果强化：回复比例增至16%',
              'LV3 [占卜之印]效果强化：回复比例增至18%',
              'LV4 [占卜之印]效果强化：回复比例增至20%',
              'LV5 [占卜之印]持续回合数+1'
            ]
          },
          {
            id: 7,
            img: '../../img/bbbqn/6.png',
            name: '占卜之印',
            value: '八百比丘尼给目标队友刻上占卜之印，守护队友1回合，受到保护的目标受到直接单体攻击时，会反弹自身受到伤害的50%（范围攻击不会触发该效果），占卜之印不能叠加，技能冷却2回合。',
            desc: [
              'LV2 [占卜之印]效果强化：反弹比例增至60%',
              'LV3 [占卜之印]效果强化：反弹比例增至70%',
              'LV4 [占卜之印]效果强化：反弹比例增至80%',
              'LV5 [占卜之印]持续回合数+1'
            ]
          },
          {
            id: 8,
            img: '../../img/bbbqn/6.png',
            name: '占卜之印',
            value: '八百比丘尼给目标队友刻上占卜之印，守护队友1回合，受到保护的目标在一回合后回复自身已损失生命的15%，占卜之印不能叠加，技能冷却2回合。',
            desc: [
              'LV2 [占卜之印]效果强化：回复比例增至20%',
              'LV3 [占卜之印]效果强化：回复比例增至25%',
              'LV4 [占卜之印]效果强化：回复比例增至30%',
              'LV5 [占卜之印]持续回合数+1'
            ]
          },
        ]
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this,
        heroid = parseInt(options.id);
        this.setData({
          js: options.js,
          hero: this.data.content[options.id]
        })
        console.log(this.data.content[options.id])
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
      nav_index: index
    });
  },

  toggle: function (event) {
    var skill_id = event.currentTarget.dataset.id,
        skill_arr = this.data.hero.skills;

    var obj = skill_arr.filter(function(el) {
      return el.id == skill_id;
    })[0];

    var index = skill_arr.indexOf(obj);

    this.setData({
      skill_index: index
    });
  }
})