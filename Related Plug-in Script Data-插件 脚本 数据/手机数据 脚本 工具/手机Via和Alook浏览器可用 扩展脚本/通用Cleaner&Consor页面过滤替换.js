/*轻度过滤，普适性常用扭曲偏歪，误导，极端，情绪化等单词提示*/

(function() {
    'use strict';

    // Your code here...
   

    walk(document.body);

    function walk(node)
{
    // I stole this function from here:
    // http://is.gd/mwZp7E

    var child, next;

    switch ( node.nodeType )
    {
        case 1:
        case 9:
        case 11:
            child = node.firstChild;
            while ( child )
            {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;

        case 3:
            handleText(node);
            break;
    }
}
    function handleText(textNode)
{

    var words = ["！！","？！","！？","啦！","震惊！","封建迷信","宗教","这种人","猪叫声","竟然","如果不","可怕","极度","恐怖","狗带","惊现","惊险","吓尿,","整天都","还能怎么","毁掉","驰名","史上最","终极","绝对","极品","独家","吓人","瞧不起","鄙视","美女","化妆","时尚","今天你","推广","励志","轰动","事关","重大","阴谋","翻天","性感","女人","老公","老婆","黑幕","天啊","死人","男女","惊天","男票","女票","女神","来得及","现在才","偶像","喜讯","谁都","注意了","再不","居然","最怕","抖音","微博","都不会","自拍","偷拍","杀死","越来越","直播","主播","炸天","了假","紧急","打响","好看","废了","陈安之","于丹","刘一秒","千万别","千万要","滴滴","最美","宫斗","热播","热搜","炒股","股票","币圈","比特币","营销","佛系","道系","谋杀","离婚","粉丝","脑残","傻逼","性侵","不爽","结婚","选股","网贷","p2p",,"刷爆","狼性","狼道","走红","火爆","阿里巴巴","能行吗","天挣","灵粮","基督","国际导师","灵修","奥修","上帝","骚操作","追星","什么样的体验","屌","惊艳","种怎样的体验？","种什么体验","如何评价","如何看待","大半夜的看哭了","大半夜的笑出声","蛤蛤蛤","一夜之间","我有一个朋友","一觉醒来破千赞","虐狗","爆照","你以为","路飞","该怎么办","妹纸","性欲","火山视频","西瓜视频","我有个","啊！","卧槽","我操","新鲜事","帝吧","李刚","偷看","表情包","求保佑","拜佛","婆婆","婆媳","逆袭","草根","受不了","素颜","情趣","了！","赠送","中奖","求你","不得了","值得拥有","沸腾","亿万","富翁","自杀","危机感","面膜","越早越好","老司机","凉凉","争端","引发的","天下第一","双修","小龙虾","火辣","赶紧","猝死","跳楼","什么都","杀人","扛把子","强奸","把话撂这了","奸尸","尸体","僵尸","邪术","吸血鬼","霸道总裁","少爷","公主","虐狗","单身狗","都市","重生","穿越","烂人","苦逼","狗逼","豪门","贱人","暖男","擦肩而过","斗气","异界","霸王","诱惑","无赖","痞子","盗墓","鬼吹灯","欧巴","恶搞","吸毒","致癌","身亡","不为人知","好结果","炒鸡","神操作","骚操作","自抱自泣","太tm","他妈","少在我面前","少跟我","骨灰","十八代","祖宗","坟","可恶","畜生","崽子","曝光","揭露","揭丑","熊孩子","女郎","脑浆","撩人","风骚","性感","火辣","大胸","女神","白皙","妖娆","热裤","挑逗","极品","喷血","湿身","丰满","模特","妩媚","靓丽"];

    // var fs = require("fs");
    // var text = fs.readFileSync("./badwords.txt");
    // var textByLine = text.split("\n");
    // chrome.extension.getBackgroundPage().console.log(textByLine);

    var v = textNode.nodeValue;
    console.log(v);

    words.forEach(function(e) {
        v = v.replace(e, "~");
});

    textNode.nodeValue = v;
}

    /*
    参考藏词隐藏方法代码：
    matches.forEach(function (match) {
        var id = match.split(anchor)[0];
        var node = nodes[id];
        console.log(node.data, options.strategy);
        if (options.strategy === 'hideMatchingWords') {
          node.data = node.data.replace(new RegExp(options.keywords.join('|'), 'ig'), '*~%');
        } else {
          node.data = '.'.repeat(node.data.length);
        }
      });

    */


})();