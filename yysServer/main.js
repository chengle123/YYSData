var https = require('https');
const http = require('http');
const mysql = require('mysql');
var path = require('path');
// var express = require('express');
var bodyParser = require('body-parser');
// var router = express.Router();
// const zbp_category = require('./models/zbp_category');
// const zbp_post = require('./models/zbp_post');
// const zbp_tag = require('./models/zbp_tag');
// const zbp_module = require('./models/zbp_module');

var cheerio = require('cheerio');
const fs = require('fs');

// 本地服务======================================================================================

// var app = express();
// app.use(bodyParser.json({limit:'50mb'}));
// app.use(bodyParser.urlencoded({ limit:'50mb', extended: false }));
// app.use(express.static(path.join(__dirname, 'app')));
// var server = app.listen(9696, function() {
// 	console.log('Ready');
// });

// router.post('/setDB', function(req, res) {
//     var tagData = JSON.parse(req.body.tag);
//     try{
// 		zbp_post.create({
//             log_CateID: req.body.category,
//             log_AuthorID: 1,
//             log_Tag: req.body.tagText,
//             log_Title: req.body.title,
//             log_Intro: req.body.htmlText,
//             log_Content: req.body.html,
//             log_PostTime: req.body.time
//         }).then(function(rows){
//             res.json({
//                 result: 'success',
//                 data: '',
//                 msg: '数据插入成功'
//             })

//             try{
//                 zbp_category.find({where:{cate_ID:req.body.category}}).then(function(rows){
//                     var cate_Count = rows.cate_Count+1;
//                     try{
//                         zbp_category.update({cate_Count:cate_Count},{where:{cate_ID:req.body.category}}).then(function(rows){
//                             console.log('修改分类成功');
//                         })
//                     }catch(e) {
//                         console.log('修改分类失败');
//                     }
//                 })
//             }catch(e) {
//                 console.log('查询分类失败');
//             }
            
//             try{
//                 zbp_module.find({where:{mod_ID:'8'}}).then(function(rows){
//                     var mod_ContentA = rows.mod_Content.split('\r\n');
//                     var num = parseInt(mod_ContentA[0].split(':')[1]);
//                     mod_ContentA[0] = '<li>文章总数:'+(num+1)+'</li>';
//                     try{
//                         zbp_module.update({mod_Content: mod_ContentA.join("\r\n")},{where:{mod_ID:8}}).then(function(rows){
//                             console.log('修改站点信息成功');
//                         })
//                     }catch(e) {
//                         console.log('修改站点信息失败');
//                     }
//                 })
//             }catch(e) {
//                 console.log('查询站点信息失败');
//             }

//             for(var i=0;i<tagData.length;i++){
//                 updateTag(tagData[i]);
//             }
// 		})
// 	}catch(e) {
//         res.json({
//             result: 'error',
//             data: '',
//             msg: '数据插入失败'
//         })
//         console.log('数据插入失败');
// 	}
// })

// router.post('/getData', function(req, res) {
//     console.log('收到',req.body);
//     startRequest(req.body,res);
// })

// app.use('/', router);

// function updateTag(id){
//     try{
//         zbp_tag.find({where:{tag_ID: id}}).then(function(rows){
//             var tag_Count = rows.tag_Count+1;
//             try{
//                 zbp_tag.update({tag_Count: tag_Count},{where:{tag_ID: id}}).then(function(rows){
//                     console.log('修改标签成功');
//                 })
//             }catch(e) {
//                 console.log('修改标签失败');
//             }
//         })
//     }catch(e) {
//         console.log('查询标签失败');
//     }
// }


// 爬虫======================================================================================
// function startRequest(ops,resJson){
	// https.get('https://movie.douban.com/subject/' + ops.id + '/', function (res) {

	// 	var html = '';        //用来存储请求网页的整个html内容
	// 	var titles = [];        
	// 	res.setEncoding('utf-8'); //防止中文乱码
	// 	//监听data事件，每次取一块数据
	// 	res.on('data', function (chunk) {
	// 		html += chunk;
	// 	});
	// 	//监听end事件，如果整个网页内容的html都获取完毕，就执行回调函数
	// 	res.on('end', function () {
	// 		var labelHtml = ''
	// 		var $ = cheerio.load(html,{decodeEntities: false}); //采用cheerio模块解析html

    //         try{
    //             var img = $('#mainpic img').attr('src');
    //             if(img.indexOf("movie_poster_cover")!=-1){
    //                 img = img.replace('movie_poster_cover/lpst','photo/photo').replace('https','http');
    //             }
                
    //             labelHtml += '<p><img src="'+img+'"></p>';
    //             labelHtml += '<p>豆瓣评分:'+$('#interest_sectl .rating_num').text()+'</p>';
    //             var a = $('#info > span');
    //             a.each(function(){
    //                 if($(this).text() == '类型:'){
    //                     return false;
    //                 }else{
    //                     labelHtml += '<p>'+ $(this).text() +'</p>';
    //                 }
    //             })

    //             var c = $('#info > span[property="v:genre"]');
    //             var d = $('#info > span[property="v:initialReleaseDate"]');
    //             var e = $('#info > a');
    //             var text = ''
    //             c.each(function(i){
    //                 if(i == c.length-1){
    //                     text += $(this).text();
    //                 }else{
    //                     text += $(this).text()+'/';
    //                 }
    //             })

    //             var b = $('#info > .pl');
    //             b.each(function(){
    //                 if($(this).text() == '类型:'){
    //                     labelHtml += '<p id="returnTag">'+ $(this).text() +' '+ text +'</p>';
    //                 }else if($(this).next().text()){
    //                     labelHtml += '<p>'+ $(this).text() +' '+ $(this).next().text() +'</p>';
    //                 }else{
    //                     labelHtml += '<p>'+ $(this).text() +' '+ $(this).next()[0].prev.data +'</p>';
    //                 }
    //             })

    //             labelHtml += '<p>'+$('title').text()+'的剧情简介:</p>'
    //                         +'<p>'+$('#link-report > span').text()+'</p>'

    //             labelHtml += '<p>'
    //                         +'<span style="font-size: 16px;">百度云下载链接：</span>'
    //                         +'</p><p>'
    //                         +'<a href="'+ops.url+'" target="_blank" title="'+$('#content > h1').text()+'" style="font-size: 16px; text-decoration: underline;"><span style="font-size: 16px;">'+ops.url+'</span></a>'
    //                         +'</p>'
    //                         +'<p>'
    //                         +'<a href="'+ops.url+'" target="_blank" title="'+$('#content > h1').text()+'" style="font-size: 16px; text-decoration: underline;"><span style="font-size: 16px;">密码：'+ops.pasword+'</span></a>'
    //                         +'</p>';
    //             resJson.json({
    //                 result: 'success',
    //                 data: labelHtml,
    //                 msg: '采集成功'
    //             })
                        
    //         }catch(e) {
    //             resJson.json({
    //                 result: 'error',
    //                 data: '',
    //                 msg: '采集失败'
    //             })
    //         }
	// 	});

	// }).on('error', function (err) {
	// 	console.log(err);
    //     resJson.json({
    //         result: 'error',
    //         data: '',
    //         msg: '采集失败'
    //     })
	// });
// }

        var data = {
            zj:[],
            ss:[]
        }
function startRequest(url,type, dataId){
    http.get(url, function (res) {
        var html = '';        //用来存储请求网页的整个html内容
        
		res.setEncoding('utf-8'); //防止中文乱码
		//监听data事件，每次取一块数据
		res.on('data', function (chunk) {
			html += chunk;
		});
		//监听end事件，如果整个网页内容的html都获取完毕，就执行回调函数
		res.on('end', function () {
			var $ = cheerio.load(html,{decodeEntities: false}); //采用cheerio模块解析html

            try{
                if(type === 'zj'){
                    // 主角名字
                    var name = $('.role-name').text().replace(/\s/g,"");
                    // 主角介绍
                    var desc = $('.role-desc').text();
                    // 初始图片
                    var inception = $('.role-img01 img').attr('src').replace('https','http');
                    // 皮肤
                    var pfImg = $('.JsRoleImg02 img').map(function(i, el) {
                        return $(this).attr('src').replace('https','http');
                    }).get();
                    var pfName = $('.skin-source-swiper').map(function(i, el) {
                        // this === el
                        if($(this).attr('data-id')>=0){
                            return $(this).find('.p1 , .p2').text();
                        }
                    }).get();
                    var pf = pfImg.map((item,i)=>{
                        return {
                            name: pfName[i],
                            img: item
                        }
                    });

                    // 技能
                    var jnImg = $('.skill-btn img').map(function(i, el) {
                        return $(this).attr('src').replace('https','http');
                    }).get();
                    var jnText = $('.skill-cont').map((i, el)=>{
                        return {
                            name: $(el).children('span').text(),
                            desc: $(el).children('.skill-desc').text(),
                            lv: $(el).children('.skill-lv').map((j, cel)=>{
                                return $(cel).text();
                            }).get(),
                            img: jnImg[i]
                        }
                    }).get();
                    data.zj.push({
                        name: name,
                        desc: desc,
                        inception: inception,
                        pf:pf,
                        jnText: jnText
                    })
                    DB('./data/zj.json', JSON.stringify(data.zj));
                }else if(type === 'ssl'){
                    var json = JSON.parse(html);
                    var ssl = {};
                    json.map(item=>{
                        var fenlei,
                            beforeHImg,
                            afterHImg,
                            beforeImg,
                            afterImg;
                        // 分类
                        if(item.interactive){
                            fenlei = 'ld'
                        // }else if(item.material){
                        }else if(!item.interactive && item.name[item.name.length-1] === '呱'){
                            fenlei = 'gt'
                        }else{
                            fenlei = item.level
                        }
                        // 觉醒前后图片
                        // if(item.level === 'N' || (!item.interactive && item.name[item.name.length-1] === '呱')){
                            beforeHImg =   `http://yys.res.netease.com/pc/zt/20161108171335/data/before_awake/${item.id}.jpg`;  //觉醒前头像
                            afterHImg = '';  //觉醒后头像
                            beforeImg = `http://yys.res.netease.com/pc/zt/20161108171335/data/shishen_big_beforeAwake/${item.id}.png`;  //觉醒前图片
                            afterImg = '';   //觉醒后图片
                        // }else{
                        //     beforeHImg = `http://yys.res.netease.com/pc/zt/20161108171335/data/before_awake/${item.id}.jpg`  //觉醒前头像
                        //     afterHImg = `http://yys.res.netease.com/pc/zt/20161108171335/data/after_awake/${item.id}.jpg`  //觉醒后头像
                        //     beforeImg = `http://yys.res.netease.com/pc/zt/20161108171335/data/shishen_big_beforeAwake/${item.id}.png`  //觉醒前图片
                        //     afterImg = `http://yys.res.netease.com/pc/zt/20161108171335/data/shishen_big_afterAwake/${item.id}.png`   //觉醒后图片
                        // }
                        ssl[item.id] = {
                            id: item.id,
                            level: item.level,
                            name: item.name,
                            fenlei: fenlei,
                            headImg: `http://yys.res.netease.com/pc/zt/20161108171335/data/shishen/${item.id}.png`,
                            skin: item.skin ? item.skin.map((skinItem,i)=>{
                                    return {
                                        name: skinItem.name,
                                        img: `http://yys.res.netease.com/pc/zt/20161108171335/data/shishen_skin/${item.id}-${i+1}.png`
                                    }
                                }) : '',
                            beforeHImg: beforeHImg,
                            afterHImg: afterHImg,
                            beforeImg: beforeImg,
                            afterImg: afterImg,
                        };
                        // startRequest(`http://yys.163.com/shishen/${item.id}.html`, 'ss');
                    });
                    data.ss = ssl;
                    // fs.writeFile('./data/ss.json', JSON.stringify(ssl), function (err) {
                    //     if (err) {
                    //         console.log(err);
                    //     } else {
                    //         console.log('ok.');
                    //     }
                    // });
                    for(let key in ssl){
                        // console.log(`http://g37simulator.webapp.163.com/get_hero_story?heroid=${key}`, '传记', key)
                        startRequest(`http://g37simulator.webapp.163.com/get_hero_story?heroid=${key}`, '传记', key);
                        startRequest(`http://g37simulator.webapp.163.com/get_hero_skill?heroid=${key}&awake=0&level=0&star=1`, '技能', key);
                        startRequest(`http://g37simulator.webapp.163.com/get_hero_attr?heroid=${key}&awake=0&level=1&star=2`, '属性', key);
                        startRequest(`http://g37simulator.webapp.163.com/get_hero_skill?heroid=${key}&awake=1&level=0&star=2`, '觉醒技能', key);
                        startRequest(`http://g37simulator.webapp.163.com/get_hero_attr?heroid=${key}&awake=1&level=1&star=2`, '觉醒属性', key);
                    }
                    // console.log(ssl)
                }else if(type === '传记'){
                    var json = JSON.parse(html).data;
                    if(json.story){
                        data.ss[dataId].story = json.story;
                        DB('./data/ss.json', JSON.stringify(data.ss));
                    }
                }else if(type === '技能'){
                    var json = JSON.parse(html).data;
                    data.ss[dataId].skill = [];
                    for(let key in json){
                        if(key !== 'add' && key !== 'add_type'){
                            data.ss[dataId].skill.push({
                                desc: json[key].desc,
                                name: json[key].name,
                                normaldesc: json[key].normaldesc,
                                img: `http://yys.res.netease.com/pc/zt/20161108171335/data/skill/${json[key].icon}.png`
                            });
                        }
                    }
                    DB('./data/ss.json', JSON.stringify(data.ss));
                }else if(type === '觉醒技能'){
                    var json = JSON.parse(html).data;
                    data.ss[dataId].JXSkill = [];
                    var a = 0;
                    var b = 2;
                    if(json.add){
                        for(let key in json){
                            if(parseInt(key)>=0){
                                data.ss[dataId].JXSkill.push({
                                    desc: json[key].desc,
                                    name: json[key].name,
                                    normaldesc: json[key].normaldesc,
                                    img: `http://yys.res.netease.com/pc/zt/20161108171335/data/skill/${json[key].icon}.png`
                                });
                                data.ss[dataId].afterHImg = `http://yys.res.netease.com/pc/zt/20161108171335/data/after_awake/${dataId}.jpg`  //觉醒后头像
                                data.ss[dataId].afterImg = `http://yys.res.netease.com/pc/zt/20161108171335/data/shishen_big_afterAwake/${dataId}.png`   //觉醒后图片
                                a ++;
                            }
                        }
                        if(a===0){
                            data.ss[dataId].JXSkill = [{
                                desc: json.add,
                            }];
                            data.ss[dataId].afterHImg = `http://yys.res.netease.com/pc/zt/20161108171335/data/after_awake/${dataId}.jpg`  //觉醒后头像
                            data.ss[dataId].afterImg = `http://yys.res.netease.com/pc/zt/20161108171335/data/shishen_big_afterAwake/${dataId}.png`   //觉醒后图片
                        }
                    }else{
                        
                    }
                    DB('./data/ss.json', JSON.stringify(data.ss));
                }else if(type === '属性'){
                    var json = JSON.parse(html).data;
                    data.ss[dataId].attr = {
                        sx: [
                            {
                                key: 'attack',
                                name: '攻击',
                                value: json.attack ? Math.round(json.attack) : 0,
                            },
                            {
                                key: 'maxHp',
                                name: '生命',
                                value: json.maxHp ? Math.round(json.maxHp) : 0,
                            },
                            {
                                key: 'defense',
                                name: '防御',
                                value: json.defense ? Math.round(json.defense) : 0,
                            },
                            {
                                key: 'speed',
                                name: '速度',
                                value: json.speed ? Math.round(json.speed) : 0,
                            },
                            {
                                key: 'critRate',
                                name: '暴击',
                                value: json.critRate ? Math.round(100*json.critRate) : 0,
                            },
                            {
                                key: 'critPower',
                                name: '暴击伤害',
                                value: json.critPower ? Math.round(100*json.critPower+100) : 0,
                            },
                            {
                                key: 'debuffEnhance',
                                name: '效果命中',
                                value: json.debuffEnhance ? Math.round(100*json.debuffEnhance) : 0,
                            },
                            {
                                key: 'debuffResist',
                                name: '效果抵抗',
                                value: json.debuffResist ? Math.round(100*json.debuffResist) : 0,
                            },
                        ],
                        score: {
                            attack: json.score.attack || 0,
                            maxHp: json.score.maxHp || 0,
                            defense: json.score.defense || 0,
                            speed: json.score.speed || 0,
                            critRate: json.score.critRate || 0,
                        },                                
                    };
                    DB('./data/ss.json', JSON.stringify(data.ss));
                }else if(type === '觉醒属性'){
                    var json = JSON.parse(html).data;
                    console.log(dataId)
                    data.ss[dataId].JXattr = {};
                    try{
                        if(!json.attack){
                            data.ss[dataId].JXattr = {};
                        }else{
                            data.ss[dataId].JXattr = {
                                sx: [
                                    {
                                        key: 'attack',
                                        name: '攻击',
                                        value: json.attack ? Math.round(json.attack) : 0,
                                    },
                                    {
                                        key: 'maxHp',
                                        name: '生命',
                                        value: json.maxHp ? Math.round(json.maxHp) : 0,
                                    },
                                    {
                                        key: 'defense',
                                        name: '防御',
                                        value: json.defense ? Math.round(json.defense) : 0,
                                    },
                                    {
                                        key: 'speed',
                                        name: '速度',
                                        value: json.speed ? Math.round(json.speed) : 0,
                                    },
                                    {
                                        key: 'critRate',
                                        name: '暴击',
                                        value: json.critRate ? Math.round(100*json.critRate) : 0,
                                    },
                                    {
                                        key: 'critPower',
                                        name: '暴击伤害',
                                        value: json.critPower ? Math.round(100*json.critPower+100) : 0,
                                    },
                                    {
                                        key: 'debuffEnhance',
                                        name: '效果命中',
                                        value: json.debuffEnhance ? Math.round(100*json.debuffEnhance) : 0,
                                    },
                                    {
                                        key: 'debuffResist',
                                        name: '效果抵抗',
                                        value: json.debuffResist ? Math.round(100*json.debuffResist) : 0,
                                    },
                                ],
                                score: {
                                    attack: json.score.attack || 0,
                                    maxHp: json.score.maxHp || 0,
                                    defense: json.score.defense || 0,
                                    speed: json.score.speed || 0,
                                    critRate: json.score.critRate || 0,
                                },                                
                            };
                        }
                    }catch{
                        data.ss[dataId].JXattr = {};
                    }
                    DB('./data/ss.json', JSON.stringify(data.ss));
                }else{
                    $('.bigImg_item').map(function(i, el) {
                        // this === el
                        if($(el).attr('data-name')){
                            startRequest($(el).find('.item_name').attr('ref').replace('https','http'), 'zj');
                        }
                    }).get();
                }

                


                // resJson.json({
                //     result: 'success',
                //     data: labelHtml,
                //     msg: '采集成功'
                // })
                        
            }catch(e) {
                console.log(e)
                // resJson.json({
                //     result: 'error',
                //     data: '',
                //     msg: '采集失败'
                // })
            }
		});

	}).on('error', function (err) {
		console.log(err);
        // resJson.json({
        //     result: 'error',
        //     data: '',
        //     msg: '采集失败'
        // })
	});
}

function DB(url, data){
    fs.writeFile(url, data, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('ok.');
        }
    });
}

// 获取主角
// startRequest('http://yys.163.com');
// 获取式神
// startRequest('http://yys.res.netease.com/pc/zt/20161108171335/js/app/all_shishen.json', 'ssl');

// 修改数据格式
fs.readFile('./data/ss.json', 'utf-8', function (err, data) {
    var fl = {};
    if (err) {
        console.log(err);
    } else {
        var json = JSON.parse(data);
        for(var key in json){
            if(!fl[json[key].fenlei]){
                fl[json[key].fenlei] = [];
            }
            fl[json[key].fenlei].push(json[key]);
        }
        // console.log(fl);
        DB('./data/ss.json', JSON.stringify(fl))
    }
});