//卷轴动画效果
$(function () {
    
    var img = document.getElementById('cont-center');

    var position = 3795;
    setInterval(function () {
        position += 253;
        img.style.backgroundPositionX = -position + 'px';
        if (position == 7590) {
            position = 0;
            img.style.backgroundPositionX = -position + 'px';
        }
    }, 60)
    //"解锁我的回忆录点击事件"
    document.getElementById('btn1').onclick = function () {
        alert('活动已结束')
    }
    $('.denglu>a').click(function () {
        alert('活动已结束')
    })
    //jQuery动画
    //页面加载动画
    $(function () {
        $('#loading-line-in').animate({ width: 536 }, 5000, 'swing', function () {
            $($('.loading')).css('display', 'none');
            $('.cont-title-img').fadeIn(1000);
            $('.cont-center').fadeIn(1000);
            $('.btn-1').fadeIn(1000);
            $('.denglu').fadeIn(1000);
            $('#audio')[0].play();
        });
        $('.loading-icon').animate({ left: 443 }, 5000, 'swing')
        $('.loading-num').animate({ left: 443 }, 5000, 'swing')

        //背景音乐点击事件3
        $('.mp3').click(function () {
            $(this).css('display', 'none');
            $('.mp3-stop').css('display', 'block');
            $('#audio')[0].pause();

        })
        $('.mp3-stop').click(function () {
            $(this).css('display', 'none');
            $('.mp3').css('display', 'block');
            $('#audio')[0].play();
        })
    })
})