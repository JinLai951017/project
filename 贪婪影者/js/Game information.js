$(function () {



    var nestAList = [
        { 0: '5月23日不停机更新公告-忍者考试关卡更新', 1: '《火影忍者OL-忍者新世代》新服开启预告5月20日', 2: '庆典助力，小游戏[卡卡西的试炼]今日开启！', 3: '《火影忍者OL-忍者新世代》新服开启预告5月13日', 4: '5月9日不停机公告“晓”组织成员-阿飞出场', 5: 'S1赛季成绩单发榜！', 6: '【 羁绊战场玩法体验测试活动】中奖名单公布', 7: '《火影忍者OL-忍者新世代》新服开启预告5月6日', 8: '4月30日更新公告 羁绊战场全服开启！', 9: '羁绊战场玩法调整公告' },
        { 0: '羁绊战场玩法调整公告', 1: '《火影忍者OL-忍者新世代》新服开启预告4月29日', 2: '4月25日更新公告 羁绊战场，八人混战！', 3: '4月25日开服时间延后的公告', 4: '羁绊战场抢先体验开启公告', 5: '《火影忍者OL-忍者新世代》新服开启预告4月22日', 6: '4月22日更新公告', 7: '羁绊战场八人混战 《火影忍者OL-忍者新世代》S2全新赛季将至', 8: '4月18日更新公告 风过券3倍速启动！', 9: '《火影忍者OL-忍者新世代》新服开启预告4月16日' },
        // { 0:'幻术“别天神” 《火影忍者OL-忍者新世代》宇智波止水正式登场',1:'4月11日更新公告 SS忍者宇智波止水',2:'《火影忍者OL-忍者新世代》新服开启预告4月9日',3:'4月4日BUG修复公告',4:'4月4日更新公告 千代登场！',5:'樱花祭福利集结《火影忍者OL-忍者新世代》“强忍”来袭'}
    ];

    var newsAList = [
        { 0: '羁绊战场八人混战 《火影忍者OL-忍者新世代》S2全新赛季将至', 1: '樱花祭福利集结《火影忍者OL-忍者新世代》“强忍”来袭', 2: '为女神庆生 《火影忍者OL》手游邀你参与春野樱生日会', 3: '解锁通行证送全新SS忍者 《火影忍者OL-忍者新世代》“忍界·无禁季”正式解禁', 4: '预约即送2880元宝大礼 《火影忍者OL-忍者新世代》“忍界', 5: '元月之约 《火影忍者OL-忍者新世代》和服系列忍者正式上线', 6: '不容忽视的强大实力 《火影忍者OL-忍者新世代》旗木卡卡西【暗部】登场！', 7: '暗影来袭 《火影忍者OL-忍者新世代》暗部系列活动正式上线', 8: '《火影忍者OL-忍者新世代》手游今日面世！赖美云带千万火影粉丝跑进木叶村', 9: '火箭少女101赖美云领跑 《火影忍者OL-忍者新世代》11月15日面世！' },
        { 0: '《火影忍者OL-忍者新世代》火箭少女101赖美云神秘任务发布！', 1: '博人传新生代助力 《火影忍者OL-忍者新世代》即将面世！', 2: '《火影忍者OL》积分中心多重福利集结', 3: '《火影忍者OL》手游预约开启 预约即领专属大礼包！', 3: '忍道传承·羁绊新生！《火影忍者OL》手游精英首测今日开启', 4: '立体呈现火影忍者《火影忍者OL》手游正式发布' }


    ];
    var ntcAList = [
        { 0: '《火影忍者OL-忍者新世代》新服开启预告5月27日', 1: '5月23日不停机更新公告-忍者考试关卡更新', 2: '《火影忍者OL-忍者新世代》新服开启预告5月20日', 3: '火影忍者OL手游 庆典宝库概率公示', 4: '5月16日停机更新公告-半周年狂欢庆典', 5: '《火影忍者OL-忍者新世代》新服开启预告5月13日', 6: '5月9日不停机公告“晓”组织成员-阿飞出场', 7: 'S1赛季成绩单发榜！', 8: '【 羁绊战场玩法体验测试活动】中奖名单公布', 9: '《火影忍者OL-忍者新世代》新服开启预告5月6日' },
        { 0: '4月30日更新公告 羁绊战场全服开启！', 1: '羁绊战场玩法调整公告', 2: '《火影忍者OL-忍者新世代》新服开启预告4月29日', 3: '4月25日更新公告 羁绊战场，八人混战！', 4: '4月25日开服时间延后的公告', 5: '羁绊战场抢先体验开启公告', 6: '《火影忍者OL-忍者新世代》新服开启预告4月22日', 7: '4月22日更新公告', 8: '4月18日更新公告 风过券3倍速启动！', 9: '《火影忍者OL-忍者新世代》新服开启预告4月16日' }

    ]

    var indx = 0;

    createLi(nestAList[indx], $('.newests'));
    createLi(newsAList[indx], $('.news'));
    createLi(ntcAList[indx], $('.notice'));

    function createLi(liList, newUl) {
        var num = 30;
        for (var i = 0; i < 10; i++) {
            if (liList[i] == undefined) {
                return;
            }
            var $li = $('<li>' +
                '<a href="javascript:" >' + liList[i] + '</a>' +
                '<span>' + '05-' + num + '</span>' +
                +'</li>');
            newUl.append($li);
            num--;
        }
    }

    //1. 给每一个a添加点击事件
    $('.zyy-nav>li>a').click(function () {
        // var list = ['/3','/2','/2'];

        //点击加下划线
        $(this).children('span').addClass('zyy-u');
        //排它思想
        $(this).parent().siblings('li').children('a').children('span').removeClass('zyy-u');
        //找到此时这个a标签的索引
        var idx = $('.zyy-nav>li>a').index(this);
        console.log('idx:'+idx);

        $('.zyy-newest>ul').eq(idx).removeClass('zyy-hide');

        $('.zyy-newest>ul').eq(idx).siblings('ul').addClass('zyy-hide');
        $('.zyy-switchover span').text(1);
        // $('#page').text(list[idx]);
        // console.log($('.zyy-switchover #page').text(list[idx]));

    });

    //2.点击右键换页功能
    $('.btnRight').click(function () {


        if ($('.newests').css('display') == 'block') {//(1)判断显示最新板块
            // console.log(indx);
            // console.log(nestAList.length);
            if (indx == nestAList.length - 1) {//判断数组内容添加完了就停止点击换页加内容
                return;
            }
            indx++;
            // console.log(idx);
            $('.newests').empty();//创建新的前先清空ul
            createLi(nestAList[indx], $('.newests'));
            $('.zyy-switchover>span').text(indx + 1);//修改左边页码数字

        } else if ($('.news').css('display') == 'block') {//(2)判断显示新闻板块
            if (indx == newsAList.length - 1) {
                return;
            }
            indx++;
            $('.news').empty();
            createLi(newsAList[indx], $('.news'));
            $('.zyy-switchover>span').text(indx + 1);

        } else if ($('.notice').css('display') == 'block') {
            if (indx == ntcAList.length - 1) {
                return;
            }
            indx++;
            $('.notice').empty();
            createLi(ntcAList[indx], $('.notice'));
            $('.zyy-switchover>span').text(indx + 1);
        }
    });

    //3.点击左键换页功能
    $('.btnLeft').click(function () {
        if (indx == 0) {//判断取的数组下标为0,就是页码为1的时候不能再点了
                return;
            }
        if ($('.newests').css('display') == 'block') {//(1)判断显示最新板块
            
            indx--;
            $('.newests').empty();
            createLi(nestAList[indx], $('.newests'));
            $('.zyy-switchover>span').text(indx + 1);


        } else if ($('.news').css('display') == 'block') {//(2)判断显示新闻板块
            if (indx >= 0 && indx < newsAList.length) {
                indx--;
                $('.news').empty();
                createLi(nestAList[indx], $('.news'));
                $('.zyy-switchover>span').text(indx + 1);
            }
        } else if ($('.notice').css('display') == 'block') {//(3)判断显示公告板块
            if (indx >= 0 && indx < ntcAList.length) {
                indx--;
                $('.notice').empty();
                createLi(ntcAList[indx], $('.notice'));
                $('.zyy-switchover>span').text(indx + 1);
            }
        }
    });
   
    //4. 点击删除键隐藏侧边栏
    $('#zyy-del').click(function(){
        $('.zyy-side').hide();
    });

    //5.点击回到顶部
    $('.zyy-backTop').click(function(){
        $('html').animate({scrollTop:0},600);
    })

})