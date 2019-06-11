$(function () {
$('#dowebok').fullpage({
		sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
		'navigation': true,
	});

    //第二部分
    //获取3-8部分距离页面顶部的高度
    
    $('.page2 .page2-list a').click(function () {
        switch ($(this).parent().index()) {
            case 0: {
                $('#fp-nav ul li a, .fp-slidesNav ul li a')[2].click();
            }
                break;
            case 1: {
                $('#fp-nav ul li a, .fp-slidesNav ul li a')[3].click();
            }
                break;
            case 2: {
                $('#fp-nav ul li a, .fp-slidesNav ul li a')[4].click();
            }
                break;
            case 3: {
                $('#fp-nav ul li a, .fp-slidesNav ul li a')[5].click();
            }
                break;
            case 4: {
                $('#fp-nav ul li a, .fp-slidesNav ul li a')[6].click();
            }
                break;
            case 5: {
                $('#fp-nav ul li a, .fp-slidesNav ul li a')[7].click();
            }
                break;
        }
    })
    //第三部分效果  
    function lunbo3() {
        $('.page3 .page3-img').eq(0).fadeToggle(500).siblings('.page3-img').fadeToggle(500);
        $('.page3 .sico').toggleClass('active');
    }
    var timerID3 = setInterval(lunbo3, 2000);
    //需求1:点击sico实现换图片和sico高亮效果
    //需求2:点击右边的简洁切换介绍和上方按钮的图片
    //需求1
    $('.sico').click(function () {
        clearInterval(timerID3);
        $('.page3 .page3-img').eq($(this).index()).stop(true, false).fadeIn(500).siblings('.page3-img').stop(true, false).fadeOut(500);
        $(this).addClass('active').siblings('span').removeClass('active');
    })
    //需求2
    $('.page3 .page3cr-top li').click(function () {
        $(this).addClass('active').siblings('li').removeClass('active');
        if ($(this).index() == 0) {
            $('.page3 .page3cr-content p').remove();
            var $p = $('<p>羁绊战场是一个8人通过多轮战斗，逐步淘汰其他玩家并决出最终胜者的PVP玩法。期间玩家可以' + '招募新的忍者来就加强已有阵容。</p> ' +
                '<p>玩家在羁绊战场内忍者属性相同，公平竞技。</p>');
            $('.page3 .page3cr-content').append($p);
        } else {
            $('.page3 .page3cr-content p').remove();
            var $p = $('<p>羁绊战场内的忍者存在特殊升星机制，每招募3个同星级同名忍者，则该忍者星级+3且属性大量提' + '升。</p><p>忍者之间存在特殊的羁绊关系，上阵忍者触发羁绊关系可以为玩家带来额外的优势。</p><p>玩家' + '可以上阵最多7名忍者。</p>');
            $('.page3 .page3cr-content').append($p);
        }
    })
    //第四部分
    var skillDescription = ['<h6 class="skill-description">必杀·白秘技·三宝吸溃</h6>' +
        '<p class="text">对敌阵营[7到9]体造成[90%]伤害和[虚弱]，选定敌人附带[倒地]。｛必杀时伤害提升50%。｝</p>', '<h6 class="skill-description">白秘技·基转之攻</h6>' +
    '<p class="text">对正面敌人造成[70%]伤害，一定概率造成[大浮空]。</p>',
    '<h6 class="skill-description">白秘技·天基之攻</h6>' +
    '<p class="text">追打[大浮空]，造成[25%]伤害和[击退]，并恢复[20]查克拉。</p>',
    '<h6 class="skill-description">白秘技·地伏之攻</h6>' +
    '<p class="text">追打[击退]，造成[25%]伤害和[大浮空]，并成长[10%]连击率。</p>',
    '<h6 class="skill-description">白秘技·十机近松之集</h6>' +
    '<p class="text">回合结束时，此忍者每回合最大追打次数[+2]，最大为[5]。</p>'];
    $('.skill-list li').click(function () {
        $(this).addClass('active').siblings('li').removeClass('active');
        $('.skill-description').remove();
        $('.skill-page4>.text').remove();
        var $str = $(skillDescription[$(this).index()]);
        $('.skill-page4').append($str);

    })
    //第五部分
    //需求类似第三部分
    function lunbo5() {
        $('.page5 .page3-img').eq(0).fadeToggle(500).siblings('.page3-img').fadeToggle(500);
        $('.page5 .sico').toggleClass('active');
    }
    var timerID5 = setInterval(lunbo5, 2000);
    $('.sico').click(function () {
        clearInterval(timerID5);
        $('.page5 .page3-img').eq($(this).index()).stop(true, false).fadeIn(500).siblings('.page3-img').stop(true, false).fadeOut(500);
        $(this).addClass('active').siblings('span').removeClass('active');
    })
    //需求2
    $('.page5 .page3cr-top li').click(function () {
        $(this).addClass('active').siblings('li').removeClass('active');
        if ($(this).index() == 0) {
            $('.page5 .page3cr-content p').remove();
            var $p = $('<p>角色等级上限突破到90级！新主角，新觉醒解锁！</p> ');
            $('.page5 .page3cr-content').append($p);
        } else {
            $('.page5 .page3cr-content p').remove();
            var $p = $('<p>角色等级上限由当前的80级提高至90级，升级到90级后，即可解锁新的忍者觉醒，获得战力提升！同时还可以开启第五个主角的获取，五主这一次终于可以凑齐啦！同时还有新的80-90级的主线剧情内容：天地桥风波！</p>');
            $('.page5 .page3cr-content').append($p);
        }
    })
    //第六部分
    $('.page6 .page3cr-top li').click(function () {
        $(this).addClass('active').siblings('li').removeClass('active');
        if ($(this).index() == 0) {
            $('.page6 .page3cr-content p').remove();
            var $p = $('<p>无尽之域川之国新关卡，禁符机制待您挑战！！</p> ');
            $('.page6 .page3cr-content').append($p);
        } else {
            $('.page6 .page3cr-content p').remove();
            var $p = $('<p>无尽之域新增特殊关卡，将会挑战自己的镜像，敌人的阵容会和玩家一模一样，战力逐渐提升。全部通关会获得一套专属傀儡饰品！</p>');
            $('.page6 .page3cr-content').append($p);
        }
    })
    //第七部分
    $('.page7 .page3cr-top li').click(function () {
        $(this).addClass('active').siblings('li').removeClass('active');
        if ($(this).index() == 0) {
            $('.page7 .page3cr-content p').remove();
            var $p = $('<p>一共新增了5套饰品，全新的套装效果，等你来解锁更多组合黑科技！</p> ');
            $('.page7 .page3cr-content').append($p);
        } else {
            $('.page7 .page3cr-content p').remove();
            var $p = $('<p>新增封石、禁符、轻风、负重、上忍共5套饰品套装，分别会针对不同战斗属性有特殊的加成效果，其中上忍套装更是针对卡卡西定制的套装，套装属性将使卡卡西获得更高增益！</p>');
            $('.page7 .page3cr-content').append($p);
        }
    })
    //第八部分
    var deg = 0;
    /* Storing all the images into a variable */
    //将所有图像存储到一个变量中

    var images = $('#stage img').removeClass('default').addClass('animationReady');
    var dim = { width: images.width(), height: images.height() };

    var cnt = images.length;

    /* Finding the centers of the animation container: */
    //查找动画容器的中心
    var centerX = $('#stage').width() / 2;
    var centerY = $('#stage').height() / 2 - dim.height / 2;

    function rotate(step, total) {
        // This function loops through all the phone images, and rotates them
        //这个函数循环遍历所有的手机图像，并旋转它们

        // with "step" degrees (10 in this implementation) until total has reached 0
        //使用“step”度(在此实现中为10)，直到total达到0

        /* Increment the degrees: */
        //增加度:
        deg += step;

        var eSin, eCos, newWidth, newHeight, q;

        /* Loop through all the images: */
        // 循环遍历所有图像
        for (var i = 0; i < cnt; i++) {

            /* Calculate the sine and cosine for the i-th image */
            //计算第i个图像的正弦和余弦

            q = ((360 / cnt) * i + deg) * Math.PI / 180;
            eSin = Math.sin(q);
            eCos = Math.cos(q);

			/*
			/	With the sine value, we can calculate the vertical movement, and the cosine 
			/	will give us the horizontal movement.
			*/
            // 用正弦值，我们可以计算垂直运动，和余弦值
            // 将给出水平运动。

            q = (0.6 + eSin * 0.4);
            newWidth = q * dim.width;
            newHeight = q * dim.height;

			/*
			/	We are using the calculated sine value (which is in the range of -1 to 1)
			/	to calculate the opacity and z-index. The front image has a sine value
			/	of 1, while the backmost one has a sine value of -1.
			*/
            //我们使用的是计算出的正弦值(范围在-1到1之间)
            //计算不透明度和z指数。前面的图像有一个正弦值
            // 1，而最后面的sin值是-1。
            images.eq(i).css({
                top: 0,
                left: centerX + 500 * eCos,
                marginLeft: -newWidth / 2,
                zIndex: Math.round(80 + eSin * 20)
            }).width(newWidth).height(newHeight);
        }

        total -= Math.abs(step);
        if (total <= 0) return false;

        // Setting the function to be run again in 40 seconds (equals to 25 frames per second):
        //设置函数在40秒内再次运行(等于每秒25帧):
        setTimeout(function () { rotate(step, total) }, 40);

    }

    // Running the animation once at load time (and moving the iPhone into view):
    //加载时运行动画一次(并将iPhone移动到视图中):
    rotate(10, 360 / cnt);

    $('#phoneCarousel .previous').click(function () {
        // 360/cnt lets us distribute the phones evenly in a circle
        //// 360/cnt让我们把手机均匀地分成一圈
        rotate(-10, 360 / cnt);
    });

    $('#phoneCarousel .next').click(function () {
        rotate(10, 360 / cnt);
    });
    $('#phoneCarousel .previous,#phoneCarousel .next').hover(function () {
        clearInterval(timer);
    }, function () {
        timer = setInterval(function () { rotate(10, 360 / cnt); }, 4000);
    });
    var timer = null;

    timer = setInterval(function () { rotate(10, 360 / cnt); }, 4000);
    //推荐欢迎页右侧固定栏
    $('#cWelcomeSide .sideHide').click(function () {
        $(this).hide();
        $('#cWelcomeSide').animate({ right: -212 });
        $('#cWelcomeSide .sideShow').show();
    });


    $('#cWelcomeSide .sideShow').click(function () {
        $(this).hide();
        $('#cWelcomeSide').animate({ right: 20 });
        $('#cWelcomeSide .sideHide').show();
    });


    $('#cWelcomeSide .top').click(function () {
        $('#fp-nav ul li a, .fp-slidesNav ul li a')[0].click();
    });
    var page3H = document.querySelector('.page3').offsetTop;
    window.onscroll = function () {
        if (window.pageYOffset > 0 && window.pageYOffset < page3H) {
            $('#cWelcomeSide .sports').addClass('active');
        } else {
            $('#cWelcomeSide .sports').removeClass('active');
        }
        if (window.pageYOffset == 0) {
            $('#cWelcomeSide .top').addClass('active');
        } else {
            $('#cWelcomeSide .top').removeClass('active');
        }
    }
    $('.sports').click(function () {
        $('#fp-nav ul li a, .fp-slidesNav ul li a')[1].click();
    })
    $('#dowebok').fullpage({
        fixedElements:"#cWelcomeSide"
    })
})
