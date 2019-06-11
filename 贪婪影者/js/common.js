$(function () {

    /*头部区域js代码*/
    $('#cHeader .nav').mouseenter(function () {
        $('#cHeader .detail').stop(true, false).slideDown();
    });

    $('#cHeader').mouseleave(function () {
        $('#cHeader .detail').stop(true, false).slideUp();
    });


    //首页右测固定栏目
    $('#cRightnNav .nav-hide').click(function () {
        $('#cRightnNav').animate({ right: -184 }, 1000, function () {
            $('#cRightNavShow').show();
        });
    });

    $('#cRightNavShow').click(function () {
        $('#cRightNavShow').hide();
        $('#cRightnNav').animate({ right: 0 }, 1000);
    });


    $('#cRightnNav .side-nav').children('li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    $('#cRightnNav .toTop').click(function () {
        console.log(window.pageYOffset);

        $('html,body').animate({ scrollTop: 0 });
    });


    // 其它页面右侧固定栏
    $('#cRightSide .return-top').click(function () {
        $('html,body').animate({ scrollTop: 0 });
    });



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
        $('html,body').animate({ scrollTop: 0 });
    });


});