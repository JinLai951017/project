
//滑动门动画开始-------------------------------------
setTimeout(function () {
  $('.couplet-left,.couplet-right').animate({ top: '1200px' }, 500, 'linear');
  $('.door-key').animate({
    top: '-1000px'
  }, 300, function () {
    $('.right-door,.left-door').animate({
      width: 0
    }, 500, 'linear', function () {
      //滑动门动画结束--------------------------------
      //这里开始云的动画入口函数开始-------------------
      $(function () {
        var timeID1;
        $(clearInterval(timeID1));
        $(timeID1 = setInterval(function () {
          $('.cloud-lt').animate({
            top: -30
          }, 1000, 'linear', function () {
            $('.cloud-lt').animate({
              top: -60
            }, 1000, 'linear')
          })
        }, 1500));

        var timeID2;
        $(clearInterval(timeID2));
        $(timeID2 = setInterval(function () {
          $('.cloud-rt').animate({
            top: -35
          }, 1000, 'linear', function () {
            $('.cloud-rt').animate({
              top: -65
            }, 1000, 'linear')
          })
        }, 1200));

        var timeIDbC;
        $(clearInterval(timeIDbC));
        $(timeIDbC = setInterval(function () {
          $('.cloud-bottomC').animate({
            bottom: -20
          }, 1000, 'linear', function () {
            $('.cloud-bottomC').animate({
              bottom: -30
            }, 1000, 'linear')
          })
        }, 500));

        var timeIDbc;
        $(clearInterval(timeIDbc));
        $(timeIDbc = setInterval(function () {
          $('.cloud-cb').animate({
            bottom: -15
          }, 1000, 'linear', function () {
            $('.cloud-cb').animate({
              bottom: -10
            }, 1000, 'linear')
          })
        }, 500));

        var timeIDlb;
        $(clearInterval(timeIDlb));
        $(timeIDlb = setInterval(function () {
          $('.cloud-lb').animate({
            bottom: -15
          }, 1000, 'linear', function () {
            $('.cloud-lb').animate({
              bottom: -10
            }, 1000, 'linear')
          })
        }, 500));

        var timeIDrb;
        $(clearInterval(timeIDrb));
        $(timeIDrb = setInterval(function () {
          $('.cloud-rb').animate({
            bottom: -15
          }, 700, 'linear', function () {
            $('.cloud-rb').animate({
              bottom: -10
            }, 1000, 'linear')
          })
        }, 800));

      });
      //这里是云动画的入口函数结尾----------------------------

      //这里是默认动画返回官网按钮淡入开始---------------------
      $(function () {
        $('.btn-toweb,#nav-box').fadeIn(1000);
      });
      //这里是默认动画返回官网按钮淡入开始----------------------

      //中间内容按钮淡入开始-----------------------------------
      $(function () {
        $('#content-text .tab-box').fadeIn(2800);
      });
      //中间内容按钮淡入结束-----------------------------------

      //这里是第一个活动许愿条淡入动画入口函数开始---------------
      $(function () {
        $('.content .tab-wish-one').fadeTo(3000, 0.5, function () {
          $('.content .tab-wish-one').fadeTo(1000, 0.7, function () {
            $('.content .tab-wish-one').fadeTo(1000, 1)
          });
        });
      });
      //这里是第一个活动许愿条插入动画入口函数结束----------------

      //这里是默认第一活动日期5.8-5.16人物插入动画的入口函数开始---------------
      $(function () {
        //人物飞入动画------------------------------------------
        $('.person-1>.person-one').animate({
          top: '-10px',
        }, 400, 'linear');
        $('.person-1 .person-two').animate({
          top: '150px',
          left: '0px'
        }, 600, 'linear');
        $('.person-1 .person-three').animate({
          top: '100px',
          left: '260px'
        }, 600, 'linear');
        $('.person-1 .person-four').animate({
          top: '40px',
          left: '50px'
        }, 800, 'linear');
        $('.content .tab-scroll-one').animate({
          width: 850 + 'px'
        }, 100, 'linear');
        $('.content .tab-scroll-right').fadeIn(3000);
      });
      //这里是默认第一活动日期5.8-5.16人物插入动画的入口函数结束----
    });
  });
}, 800);
//滑动门动画结束-----------------------------------------------

//给灯笼添加点击事件,切换灯笼-----------------------------------
$(function () {
  $('.nav-box li').click(function () {

    $(this).find('.bg-on').show().siblings('.bg-off').hide();
    $(this).siblings('li').find('.bg-off').show();

    // 灯笼图片切换同时, 中间内容也切换---------------------
    var idx = $(this).index();
    $('#content-text>div').eq(idx).show().siblings('div').hide();
    $('#content-person>div').eq(idx).show().siblings('div').hide();

    //进入页面后再分别点击其他活动页面时的动画-------------------
    $('#content-text .tab-box').hide();
    $('#content-text .tab-box').stop(true, false).fadeIn(2800);
    console.log(idx);

    if (idx == 0) {
      $('.tab-scroll-right').css('display', 'none');
      //第一个动画开始------------------------------------------
      $('.person-1>.person-one').animate({
        top: '-10px',
      }, 200, 'linear');
      //第二个人物飞入动画---------------
      $('.person-1 .person-two').animate({
        top: '150px',
        left: '0px'
      }, 300, 'linear');
      //第三个人物飞入动画---------------
      $('.person-1 .person-three').animate({
        top: '100px',
        left: '260px'
      }, 300, 'linear');
      //第四个人物飞入动画---------------
      $('.person-1 .person-four').animate({
        top: '40px',
        left: '50px'
      }, 500, 'linear');
      $('.cloud-lb,.cloud-rb').hide();
      //许愿条再次淡入动画---------------
      $('.content .tab-wish-one').fadeTo(3000, 0.5, function () {
        $('.content .tab-wish-one').fadeTo(1000, 0.7, function () {
          $('.content .tab-wish-one').fadeTo(1000, 1)
        });
      });
      $('.content .tab-scroll-one').animate({
        width: 850 + 'px'
      }, 100, 'linear');
      $('.content .tab-scroll-right').stop(true, false).fadeIn(2000);
    } else {
      //第二个动画返回到一开始的位置-----------------------------------
      $('.person-1>.person-one').css({
        top: '-800px',
      });
      $('.person-1 .person-two').css({
        top: '-450px',
        left: '-400px'
      });
      $('.person-1 .person-three').css({
        top: '-450px',
        left: '500px'
      });
      $('.person-1 .person-four').css({
        bottom: '600px',
        left: '50px'
      });
      $('.content .tab-wish-one').fadeOut();
      $('.content .tab-scroll-one').animate({
        width: 0 + 'px'
      }, 100, 'linear');
      $('.cloud-lb,.cloud-rb').show();
    };

    if (idx == 1) {
      $('.cloud-lb,.cloud-rb').hide();
      $('.tab-scroll-right').css('display', 'none');
      //第二个动画开始------------------------------------------
      $('.person-2>.person-one').animate({
        top: '-10px'
      }, 100, 'linear');
      $('.person-2 .person-two').animate({
        top: '20px'
      }, 300, 'linear');
      $('.person-2 .person-three').animate({
        top: '20px'
      }, 300, 'linear');
      $('.person-2 .person-four').animate({
        bottom: '100px',
      }, 700, 'linear');
      $('.content .tab-scroll-two').animate({
        width: 850 + 'px'
      }, 100, 'linear');
      $('.content .tab-scroll-right').fadeIn(2000);
    } else {
      //第二个动画返回到一开始的位置-----------------------------------
      $('.person-2>.person-one').css({
        top: '-800px'
      });
      $('.person-2 .person-two').css({
        top: '-800px'
      });
      $('.person-2 .person-three').css({
        top: '-800px'
      });
      $('.person-2 .person-four').css({
        bottom: '-400px',
      });
      $('.content .tab-scroll-two').animate({
        width: 0 + 'px'
      }, 100, 'linear');
    }

    if (idx == 2) {
      $('.cloud-lb,.cloud-rb').hide();
      $('.tab-scroll-right').css('display', 'none');
      //第三个动画开始------------------------------------------
      $('.person-3>.person-one').animate({
        top: '-10px'
      }, 300, 'linear');

      $('.tab-wish-two').fadeTo(3000, 0.5, function () {
        $('.tab-wish-two').fadeTo(1000, 0.7, function () {
          $('.tab-wish-two').fadeTo(1000, 1)
        });
      });
      $('.tab-scroll-three a').click(function () {
        var aNum = $(this).index();
        $(this).css('opacity', 1).siblings('a').css('opacity', 0.5);
        $('.tab-scroll-three p').eq(aNum).show().siblings('.tab-scroll-three p').hide();
        $('.tab-scroll-three h3').eq(aNum).show().siblings('.tab-scroll-three h3').hide();
      });
      $('.content .tab-scroll-three').animate({
        width: 850 + 'px'
      }, 100, 'linear');
      $('.content .tab-scroll-right').fadeIn(2000);
    } else {
      //第三个动画返回到一开始的位置-----------------------------------
      $('.person-3>.person-one').css({
        top: '800px',
        left: '158px'
      });
      $('.content .tab-scroll-three').animate({
        width: 0 + 'px'
      }, 100, 'linear');
    };

    if (idx == 3) {
      //把右边卷轴隐藏
      $('.tab-scroll-right').css('display', 'none');
      //第四个动画开始------------------------------------------
      $('.person-4>.person-one').animate({
        top: '-10px'
      }, 100, 'linear');
      $('.person-4 .person-two').animate({
        top: '-40px',
        left: '325px'
      }, 300, 'linear');
      $('.person-4 .person-three').animate({
        top: '-40px',
        left: '240px'
      }, 300, 'linear');
      $('.person-4 .person-four').animate({
        bottom: '-90px',
        left: '215px'
      }, 700, 'linear');
      $('.btn-more').fadeIn(3000);
    } else {
      //第四个动画返回到一开始的位置-----------------------------------
      $('.person-4>.person-one').css({
        top: '-800px'
      });
      $('.person-4 .person-two').css({
        top: '-450px',
        left: '-400px'
      });
      $('.person-4 .person-three').css({
        top: '-450px',
        right: '-550px'
      });
      $('.person-4 .person-four').css({
        bottom: '-1400px',
        left: '50px'
      });
      $('.btn-more').hide();
    }

    if (idx == 4) {
      $('.cloud-bottomC,.cloud-bottomCL,.cloud-bottomCR').hide();
      $('.tab-scroll-right').css('display', 'none');
      //第五个动画动画开始------------------------------------------
      $('.person-5 .person-one').animate({
        top: '-42px'
      }, 400, 'linear');
      $('.person-5 .person-two').animate({
        top: '90px'
      }, 300, 'linear');
      $('.person-5 .person-three').animate({
        top: '90px'
      }, 400, 'linear');
      $('.content .tab-scroll-five').animate({
        width: 850 + 'px'
      }, 100, 'linear');
      $('.content .tab-scroll-right').fadeIn(2000);
    } else {
      //第五个动画返回到一开始的位置-----------------------------------
      $('.person-5 .person-one').css({
        top: 800 + 'px',
      });
      $('.person-5 .person-two').css({
        top: -800 + 'px',
      });
      $('.person-5 .person-three').css({
        top: 800 + 'px',
      });
      $('.content .tab-scroll-five').animate({
        width: 0 + 'px'
      }, 100, 'linear');
    }
  });
});