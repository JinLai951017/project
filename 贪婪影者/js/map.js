// 头部导航
$(function () {
    // //logo跳转链接
    // $('.logo').click(function () {
    //     window.open('https://www.baidu.com')
    // });

})




// 人物创建

var a = [{
        namee: 'mingren',
        name: '旋涡鸣人',
        cv: '竹内顺子',
        leve: 'B',
        brday: '10月10日',
        character: '不认输、爱出风头',
        add: '火之国·木叶隐村',
        icon: '../img/nnp-img/character-mr.png'
    },
    {
        namee: 'zuozhu',
        name: '宇智波佐助',
        cv: '杉山纪彰',
        leve: 'A',
        brday: '7月23日',
        character: '冷酷、逞强',
        add: '火之国·木叶隐村',
        icon: '../img/nnp-img/character-zz.png'
    },
    {
        namee: 'xiaoying',
        name: '春野樱',
        cv: '中村千绘   ',
        leve: 'B',
        brday: '3月28日',
        character: '模范生、任性',
        add: '火之国·木叶隐村',
        icon: '../img/nnp-img/character-cyy.png'
    },
    {
        namee: 'yiluka',
        name: '海野伊鲁卡',
        cv: '关俊彦',
        leve: 'B',
        brday: '5月26日',
        character: '胸襟宽阔、待人友善、上进',
        add: '火之国·木叶隐村',
        icon: '../img/nnp-img/character-ylk.png'
    },
    {
        namee: 'sandaimu',
        name: '猿飞日斩',
        cv: '柴田秀胜',
        leve: 'SS',
        brday: '2月8日',
        character: '温厚、宽容、慈悲',
        add: '火之国·木叶隐村',
        icon: '../img/nnp-img/character-sdhy.png'
    },
    {
        namee: 'kakaxi',
        name: '旗木卡卡西',
        cv: '井上和彦',
        leve: 'S',
        brday: '9月15日',
        character: '温厚、宽容、慈悲',
        add: '火之国·木叶隐村',
        icon: '../img/nnp-img/character-kkx.png'
    },
    {
        namee: 'zaibuzan',
        name: '桃地再不斩',
        cv: '石冢运升',
        leve: 'SS',
        brday: '8月15日',
        character: '有野心、冷血',
        add: '水之国·雾隐村',
        icon: '../img/nnp-img/painting.png'
    },
    {
        namee: 'bai',
        name: '白',
        cv: '浅野麻由美',
        leve: 'A',
        brday: '1月9日',
        character: '温文、坦率、专一',
        add: '水之国·雾隐村',
        icon: '../img/nnp-img/painting1.png'
    },
    {
        namee: 'luwan',
        name: '奈良鹿丸',
        cv: '森久保祥太郎',
        leve: 'A',
        brday: '9月22日',
        character: '冷静、怕麻烦',
        add: '火之国·木叶隐村',
        icon: '../img/nnp-img/painting2.png'
    },
    {
        namee: 'dingci',
        name: '秋道丁次',
        cv: '伊藤健太郎',
        leve: 'B',
        brday: '5月1日',
        character: '好吃、悠闲',
        add: '火之国·木叶隐村',
        icon: '../img/nnp-img/character-dc.png'
    },
    {
        namee: 'jingye',
        name: '山中井野',
        cv: '柚木凉香',
        leve: 'B',
        brday: '9月23日',
        character: '任性、快活',
        add: '火之国·木叶隐村',
        icon: '../img/nnp-img/character-jy.png'
    },
    {
        namee: 'zhinai',
        name: '油女志乃',
        cv: '川田绅司',
        leve: 'A',
        brday: '1月23日',
        character: '严格、保密、扑克脸',
        add: '火之国·木叶隐村',
        icon: '../img/nnp-img/character-zn.png'
    },
    {
        namee: 'ya',
        name: '犬塚牙',
        cv: '鸟海浩辅',
        leve: 'A',
        brday: '7月7日',
        character: '行动派、性急、野性',
        add: '火之国·木叶隐村',
        icon: '../img/nnp-img/character-y.png'
    },
    {
        namee: 'chutian',
        name: '日向雏田',
        cv: '水树奈奈',
        leve: 'B',
        brday: '12月27日',
        character: '害羞、内向',
        add: '火之国·木叶隐村',
        icon: '../img/nnp-img/character-ct.png'
    },
    {
        namee: 'ningci',
        name: '日向宁次',
        cv: '远近孝一',
        leve: 'A',
        brday: '7月3日',
        character: '冷酷、现实主义',
        add: '火之国·木叶隐村',
        icon: '../img/nnp-img/character-lc.png'
    },
    {
        namee: 'xiaoli',
        name: '李洛克',
        cv: '增川洋一',
        leve: 'B',
        brday: '11月27日',
        character: '喜欢锻炼、热情',
        add: '火之国·木叶隐村',
        icon: '../img/nnp-img/character-xl.png'
    },
    {
        namee: 'tiantian',
        name: '天天',
        cv: '田村由加莉',
        leve: 'B',
        brday: '3月9日',
        character: '爱好研究',
        add: '火之国·木叶隐村',
        icon: '../img/nnp-img/character-tt.png'
    },
    {
        namee: 'asima',
        name: '猿飞阿斯玛',
        cv: '小杉十郎太',
        leve: 'S',
        brday: '10月18日',
        character: '乐天、粗鲁',
        add: '火之国·木叶隐村',
        icon: '../img/nnp-img/character-asm.png'
    },
    {
        namee: 'hong',
        name: '夕日红',
        cv: '落合留美',
        leve: 'S',
        brday: '6月11日',
        character: '巾帼不让须眉',
        add: '火之国·木叶隐村',
        icon: '../img/nnp-img/character-xyh.png'
    },
    {
        namee: 'kai',
        name: '迈特凯',
        cv: '江原正士',
        leve: 'S',
        brday: '1月1日',
        character: '热血、爱哭',
        add: '火之国·木叶隐村',
        icon: '../img/nnp-img/character-mtk.png'
    },
    {
        namee: 'dashewan',
        name: '大蛇丸',
        cv: '鲸',
        leve: 'SS',
        brday: '10月27日',
        character: '有野心、残忍、自我',
        add: '？',
        icon: '../img/nnp-img/character-dsw.png'
    },
    {
        namee: 'qianshou',
        name: '千手柱间',
        cv: '菅生隆之',
        leve: 'SS',
        brday: '10月23日',
        character: '深思熟虑、温厚',
        add: '火之国·木叶隐村',
        icon: '../img/nnp-img/painting3.png'
    },
    {
        namee: 'qianshoushou',
        name: '千手扉间',
        cv: '贤',
        leve: 'SS',
        brday: '2月19日',
        character: '豪气、热情',
        add: '火之国·木叶隐村',
        icon: '../img/nnp-img/painting4.png'
    },
    {
        namee: 'zilaiye',
        name: '自来也',
        cv: '大冢芳忠',
        leve: 'SS',
        brday: '11月11日',
        character: '好色、自由奔放',
        add: '火之国·木叶隐村',
        icon: '../img/nnp-img/painting5.png'
    },
    {
        namee: 'junmalv',
        name: '君麻吕',
        cv: '森川智之',
        leve: 'S',
        brday: '6月15日',
        character: '冷静、专情',
        add: '音隐村',
        icon: '../img/nnp-img/painting6.png'
    },
    // {
    //     namee: 'xirihong',
    //     name: '暗部忍者',
    //     cv: '？？？',
    //     leve: '？？？',
    //     brday: '6月15日',
    //     character: '？？？',
    //     add: '？？？',
    //     icon: '../img/nnp-img/xirihong'
    // },
]







//卷轴部分

// rjzx
$(function () {
    //获取样式函数
    function getCss(element, attr) {
        if (window.getComputedStyle) {
            return attr ? window.getComputedStyle(element, null)[attr] : window.getComputedStyle(element, null);
        }
        return attr ? element.currentStyle[attr] : element.currentStyle;
    }


    $('new1,new2').click(function () {
        $(this).css('background-image', 'url(../img/nnp-img/rjzx-bottom-tab-active.png)').siblings('li').css('background-image', '');
    })

    //关闭卷轴
    $('.close').click(function () {
        $('.mask').hide()
        $('.tongyong').hide();
        $('.r_navBar li').css('background', '');
    })
    // 点击人物打开对话框
    $('.ssss div').on('click', function () {
        var str = $(this)[0].className.replace('-model', '');
        str = 'talk-' + str
        $('.mask').show()
        $('.' + str).show();
    })
    // 关闭talk对话框
    $('.colse-talk').click(function () {
        $('.mask').hide()
        $(this).parent().parent().hide();
    })

    //返回列表
    $('.fanhuiliebiao').click(function () {
        $('.tongyong').hide();
        $('.rzzl').show();
    })


    //创建人物
    for (var i = 0; i < a.length; i++) {
        var strr = a[i].icon;
        // var str=document.createElement('li');
        // var 
        var str = ' <li class="' + a[i].namee + '"><div class="tou"><div class="xiangkuang"><div class="touxiang" style="background:url(' + strr + ') center center no-repeat/cover"></div></div></div><p class="name"> ' + a[i].name + '</p></li>';
        $('.person-all').append(str);
    }

    //创建各等级表格
    for (var i = 0; i < a.length; i++) {
        var strr = a[i].icon;
        var str = ' <li class="' + a[i].namee + '"><div class="tou"><div class="xiangkuang"><div class="touxiang" style="background:url(' + strr + ') center center no-repeat/cover"></div></div></div><p class="name"> ' + a[i].name + '</p></li>';
        if (a[i].leve == 'SS') {
            $('.person-ss').append(str);
        } else if (a[i].leve == 'S') {
            $('.person-s').append(str);
        } else if (a[i].leve == 'A') {
            $('.person-a').append(str);
        } else {
            $('.person-b').append(str);
        }
    }

    //点击nav高亮
    $('.r_navBar li ').click(function () {
        $(this).css('background', 'url("../img/nnp-img/rzzl-tab-active.png") no-repeat');
    })



    //打开忍者资料卷轴
    $('.r_navBar li:eq(1)').click(function () {
        $('.mask').show();
        $('.rzzl').show();

    })

    //忍者卷轴中点击头像查看资料卷轴
    $('.personbase li').click(function () {
        console.log('ss')
        $('.rzzl').hide();
        $('.rzzl-qb').show();
        var str = $(this)[0].className
        console.log(str)
        for (var i = 0; i < a.length; i++) {
            if (a[i].namee == str) {
                $('.qb-name').text(a[i].name);
                $('.cv span').text(a[i].cv);
                $('.leve span').text(a[i].leve);
                $('.qb-img').attr('style', 'background-image:url("' + a[i].icon + '")');
                $('.brday span').text(a[i].brday);
                $('.character span').text(a[i].character);
                $('.add span').text(a[i].add);
            }
        }
    })

    //忍者卷轴中点击忍者等级查看名单
    $('.chosse li').click(function () {
        var str = $(this).html();
        if (str == '全部') {
            $('.person-all').show().siblings('ul').hide();
            $(this).css('background', 'url(../img/nnp-img/rzzl-tab-active.png) center center no-repeat/cover').siblings().css('background', '')
        } else if (str == 'SS') {
            $('.person-ss').show().siblings('ul').hide();
            $(this).css('background', 'url(../img/nnp-img/rzzl-tab-active.png) center center no-repeat/cover').siblings().css('background', '')
        } else if (str == 'S') {
            $('.person-s').show().siblings('ul').hide();
            $(this).css('background', 'url(../img/nnp-img/rzzl-tab-active.png) center center no-repeat/cover').siblings().css('background', '')
        } else if (str == 'A') {
            $('.person-a').show().siblings('ul').hide();
            $(this).css('background', 'url(../img/nnp-img/rzzl-tab-active.png) center center no-repeat/cover').siblings().css('background', '')
        } else {
            $('.person-b').show().siblings('ul').hide();
            $(this).css('background', 'url(../img/nnp-img/rzzl-tab-active.png) center center no-repeat/cover').siblings().css('background', '')
        }
    })




    // 对话开启忍者资料卷轴
    $('.check').click(function () {
        var str = $(this).parent().parent()[0].className;
        $('.talk').hide()
        str = str.replace('talk talk-', '');
        $('.mask').show()
        $('.rzzl-qb').show();
        for (var i = 0; i < a.length; i++) {
            if (a[i].namee == str) {
                $('.qb-name').text(a[i].name);
                $('.cv span').text(a[i].cv);
                $('.leve span').text(a[i].leve);
                $('.qb-img').attr('style', 'background-image:url("' + a[i].icon + '")');
                $('.brday span').text(a[i].brday);
                $('.character span').text(a[i].character);
                $('.add span').text(a[i].add);
            }
        }
    })







    //开启忍界资讯卷轴
    $('.r_navBar li:eq(0)').click(function () {
        lunbo();
        $('.mask').show()
        $('.rjzx').show()
        return false;
    })
    //轮播图




    // 开启视频中心

    $('.r_navBar li').eq(2).click(function () {
        $('.mask').show()
        $('.spzx').show()
    })





    // 自动轮播
    function lunbo() {
        clearInterval(timeID);
        var idx = 0;
        var timeID = setInterval(function () {
            $('.swiper-click li').eq(idx).css('backgroundColor', 'red').siblings().css('backgroundColor', '#909090')
            $('.swiper-one li').eq(idx).stop().fadeIn(600).siblings().stop().fadeOut(600);
            $('.swiper-click li').stop().animate({
                width: '16px'
            });
            $('.swiper-click li').eq(idx).stop().animate({
                width: '26px'
            });
            if (idx < 3) {
                idx++;
            } else {
                idx = 0;
            }
            $('.swiper-click li').click(function () {
                $(this).css('backgroundColor', 'red').siblings().css('backgroundColor', '#909090')
                $('.swiper-click li').stop().animate({
                    width: '16px'
                });
                $(this).stop().animate({
                    width: '26px'
                });
                idx = $(this).index();
                $('.swiper-one li').eq(idx).stop().fadeIn(600).siblings().stop().fadeOut(600);
            })
        }, 1500);
    }
    // 最新盒子显示隐藏
    $('.new li').click(function () {
        var idx = $(this).index();
        $('.gonggaolan').children('div').eq(idx).show().siblings('div').hide();
        $('.gonggaolan').children('div').eq(idx).attr({
            background: 'url(".../img/nnp-img/glzx-bottom-tab-active.png")  center center no-repeat'
        }, {
            backgroundSize: 'cover'
        })
    })



    // 根据文字更改头顶文字宽度
    $('.ssss>div').mouseenter(function () {
        var txtlength = $(this).children().text();
        txtlength = txtlength.length
        $(this).children().attr('style', 'width:' + (txtlength * 15) + 'px').show()
    });
    $('.ssss>div').mouseout(function () {
        $(this).children().hide();
    });


    // 点击下方地图导航转到相应地图
    $('.guidepost li').click(function () {
        var idx = $(this).index();
        $('.mapmap>div').hide();
        $('.mapmap>div').eq(idx).show();
        // $(this).siblings('li').attr('style', ' background:url(../img/nnp-img/bottom-nav-tab.png)');
        // $(this).css('style', ' background:url(../img/nnp-img/bottom-nav-tab-active.png)').

    })


    //地图中点击传送
    $('.mycb-cs').click(function () {
        $('.mapmap>div').hide();
        $('.mycbbg').show();
    })
    $('.mycx-cs').click(function () {
        $('.mapmap>div').hide();
        $('.mycxbg').show();
    })
    $('.mygc-cs').click(function () {
        $('.mapmap>div').hide();
        $('.mygcbg').show();
    })
    $('.bgs-cs').click(function () {
        $('.mapmap>div').hide();
        $('.bgsbg').show();
    })


    //地图中点击打开卷轴
    $('.rzzl-jz').click(function () {
        $('.mask').show();
        $('.rzzl').show();
    })
    $('.rjzx-jz').click(function () {
        $('.mask').show();
        $('.rjzx').show();
    })
    $('.spzx-jz').click(function () {
        $('.mask').show();
        $('.spzx').show();
    })









    // 拖动木叶广场地图开始
    var mygcbg = document.getElementsByClassName('mygcbg')[0];
    var mapmap = document.getElementsByClassName('mapmap')[0];
    mygcbg.onmousedown = function (event) {
        event = event || window.event;
        var chushi_X = event.pageX;
        var chushi_Y = event.pageY;

        //获取鼠标拖动前的原始Top值
        var chushi_Top = getCss(mygcbg, "top");
        var chushi_Left = getCss(mygcbg, "left");

        chushi_Top = parseInt(chushi_Top.replace('px', ''));
        chushi_Left = parseInt(chushi_Left.replace('px', ''));
        mapmap.onmousemove = function (e) {
            var now_X = e.pageX;
            var now_Y = e.pageY;

            var change_X = now_X - chushi_X;
            var change_Y = now_Y - chushi_Y;

            var end_X = chushi_Left + change_X;
            var end_Y = chushi_Top + change_Y;
            if (end_X <= -346) {
                end_X = -346;
            };
            if (end_X >= 0) {
                end_X = 0;
            }
            if (end_Y <= -880) {
                end_Y = -880;
            };
            if (end_Y >= 0) {
                end_Y = 0;
            }
            $('.mygcbg').css('left', end_X);
            $('.mygcbg').css('top', end_Y);
        }
    }
    document.onmouseup = function () {
        //让文档没有移动事件
        mapmap.onmousemove = null;
    }
    // 拖动木叶广场地图结束




    // 拖动木叶村北地图开始
    var mycbbg = document.getElementsByClassName('mycbbg')[0];
    var mapmap = document.getElementsByClassName('mapmap')[0];
    mycbbg.onmousedown = function (event) {
        event = event || window.event;
        var chushi_X = event.pageX;
        var chushi_Y = event.pageY;

        //获取鼠标拖动前的原始Top值
        var chushi_Top = getCss(mycbbg, "top");
        var chushi_Left = getCss(mycbbg, "left");

        chushi_Top = parseInt(chushi_Top.replace('px', ''));
        chushi_Left = parseInt(chushi_Left.replace('px', ''));
        mapmap.onmousemove = function (e) {
            var now_X = e.pageX;
            var now_Y = e.pageY;

            var change_X = now_X - chushi_X;
            var change_Y = now_Y - chushi_Y;

            var end_X = chushi_Left + change_X;
            var end_Y = chushi_Top + change_Y;
            if (end_X <= -183) {
                end_X = -183;
            };
            if (end_X >= 0) {
                end_X = 0;
            }
            if (end_Y <= -526) {
                end_Y = -526;
            };
            if (end_Y >= 0) {
                end_Y = 0;
            }
            $('.mycbbg').css('left', end_X);
            $('.mycbbg').css('top', end_Y);
        }
    }
    document.onmouseup = function () {
        //让文档没有移动事件
        mapmap.onmousemove = null;
    }
    // 拖动木叶村北地图结束



    // 拖动木叶村西地图开始
    var mycxbg = document.getElementsByClassName('mycxbg')[0];
    var mapmap = document.getElementsByClassName('mapmap')[0];
    mycxbg.onmousedown = function (event) {
        event = event || window.event;
        var chushi_X = event.pageX;
        var chushi_Y = event.pageY;

        //获取鼠标拖动前的原始Top值
        var chushi_Top = getCss(mycxbg, "top");
        var chushi_Left = getCss(mycxbg, "left");

        chushi_Top = parseInt(chushi_Top.replace('px', ''));
        chushi_Left = parseInt(chushi_Left.replace('px', ''));
        mapmap.onmousemove = function (e) {
            var now_X = e.pageX;
            var now_Y = e.pageY;

            var change_X = now_X - chushi_X;
            var change_Y = now_Y - chushi_Y;

            var end_X = chushi_Left + change_X;
            var end_Y = chushi_Top + change_Y;
            if (end_X <= -183) {
                end_X = -183;
            };
            if (end_X >= 0) {
                end_X = 0;
            }
            if (end_Y <= -526) {
                end_Y = -526;
            };
            if (end_Y >= 0) {
                end_Y = 0;
            }
            $('.mycxbg').css('left', end_X);
            $('.mycxbg').css('top', end_Y);
        }
    }
    document.onmouseup = function () {
        //让文档没有移动事件
        mapmap.onmousemove = null;
    }
    // 拖动木叶村西地图结束



    // 拖动办公室地图开始
    var bgsbg = document.getElementsByClassName('bgsbg')[0];
    var mapmap = document.getElementsByClassName('mapmap')[0];
    bgsbg.onmousedown = function (event) {
        event = event || window.event;
        var chushi_X = event.pageX;
        var chushi_Y = event.pageY;

        //获取鼠标拖动前的原始Top值
        var chushi_Top = getCss(bgsbg, "top");
        var chushi_Left = getCss(bgsbg, "left");

        chushi_Top = parseInt(chushi_Top.replace('px', ''));
        chushi_Left = parseInt(chushi_Left.replace('px', ''));
        mapmap.onmousemove = function (e) {
            var now_X = e.pageX;
            var now_Y = e.pageY;

            var change_X = now_X - chushi_X;
            var change_Y = now_Y - chushi_Y;

            var end_X = chushi_Left + change_X;
            var end_Y = chushi_Top + change_Y;
            if (end_X <= -230) {
                end_X = -230;
            };
            if (end_X >= 0) {
                end_X = 0;
            }
            if (end_Y <= -17) {
                end_Y = -17;
            };
            if (end_Y >= 0) {
                end_Y = 0;
            }
            $('.bgsbg').css('left', end_X);
            $('.bgsbg').css('top', end_Y);
        }
    }
    document.onmouseup = function () {
        //让文档没有移动事件
        mapmap.onmousemove = null;
    }
    // 拖动办公室地图结束








    //获取鼠标拖动前的原始Top值
    // var chushi_Top = getCss(mygcbg, "top");
    // var chushi_Left = getCss(mygcbg, "left");

    // chushi_Top = parseInt(chushi_Top.replace('px', ''));
    // chushi_Left = parseInt(chushi_Left.replace('px', ''));

    // //获取鼠标拖动前的原始Left值

    // mygcbg.ondragstart = function (e) {
    //     //获取鼠标按下时的位置
    //     chushi_X = e.pageX;
    //     chushi_Y = e.pageY;
    // }
    // mygcbg.ondrag = function (e) {
    //     var now_X = e.pageX;
    //     var now_Y = e.pageY;

    //     var change_X = now_X - chushi_X;
    //     var change_Y = now_Y - chushi_Y;

    //     var end_X = chushi_Left + change_X;
    //     var end_Y = chushi_Top + change_Y;
    //     if (end_X <= -346) {
    //         end_X = -346;
    //     };
    //     if (end_X >= 0) {
    //         end_X = 0;
    //     }
    //     if (end_Y <= -880) {
    //         end_Y = -880;
    //     };
    //     if (end_Y >= 0) {
    //         end_Y = 0;
    //     }
    //     $('.mygcbg').css('left', end_X);
    //     $('.mygcbg').css('top', end_Y);
    //     console.log('top:' + getCss(mygcbg, "top"))
    //     console.log('left:' + getCss(mygcbg, "left"))
    //     console.log(chushi_X)
    //     console.log(chushi_Y)
    //     console.log(now_X)
    //     console.log(now_Y)
    // }
    // mygcbg.ondragend = function (e) {

    // }

})