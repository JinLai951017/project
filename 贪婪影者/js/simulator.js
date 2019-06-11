$(function () {
    $('.icon-find').click(function () {
        $('.icon-text').addClass('show');
    });
    $('.icon-img').click(function () {
        $('.icon-text').removeClass('show');
    });

    $('.txt').focus(function () {
        if (this.value == "请输入忍者名称") {
            this.value = "";
        }
    });
    $('.txt').blur(function () {
        if (this.value == "") {
            this.value = "请输入忍者名称";
        }
    });


    var titList1 = $('.rigmain-bg>ul>li');

    titList1.mouseenter(function () {
        var idx = $(this).index();
        $('.rigmain-xs>img').eq(idx).show().siblings('img').hide();
    });
    titList1.mouseleave(function () {
        var idx = $(this).index();
        $('.rigmain-xs>img').eq(idx).hide();
    });

    titList1.click(function () {
        var idx = $(this).index();
        $('.left-top>img').eq(idx).show().siblings('img').hide();
    });


    var titList = $('.rigmain-bg>ul>li>a');
    var flag = true;
    $('.txt').on('compositionstart', function () {
        flag = false;
    });
    $('.txt').on('compositionend', function () {
        flag = true;
    });
    $('.txt').on('input', function () {
        var _this = this;
        setTimeout(function () {
            if (flag) {
                if ($(_this).val() == '') {
                    $(titList).parent().removeClass('hide');
                    $('#shuJu').hide();
                    return
                };
                for (var i = 0; i < titList.length; i++) {
                    if (titList.eq(i).attr('title').indexOf($(_this).val()) != -1) {
                        titList.eq(i).parent().removeClass('hide');
                    } else {
                        titList.eq(i).parent().addClass('hide');
                    };
                };
            };
        }, 0)
    });
})





