//头部登陆 
$(function(){
    $('#login').click(function(){

        $('.login-div').css('display','block');
        $('#j-mask').show();
        $('.login-div').css('zIndex',99);
    });
        $('.close').click(function(){
            $('.login-div').css('display','none');
            $('#j-mask').hide();  
        });
        $('.close').mouseenter(function(){
            $(this).css('cursor','pointer');
        })
        $('.login-qq').click(function(){
            alert('qq登录');
        })
        $('.login-wx').click(function(){
            alert('微信登录');
        })

})

//给密码框加点击事件 生成随机数
var kuang = document.getElementById('kuang');
var shuaxi = document.getElementById('shuaxi');
//封装成函数 
function yzm() {
    var rand = "";
    for (var i = 0; i < 3; i++) {
        var r = Math.floor(Math.random() * 10);

        rand += r;

    }
    kuang.innerHTML = rand;
}
//页面一打开就执行
yzm();
//点击事件  更换验证码
shuaxi.onclick = function () {
    yzm();

};

//拿到输入值
var verifCode = document.getElementById('verifCode')
//点击兑换按钮
var dh = document.querySelector('.btn-dh');
dh.onclick = function () {
    //判断 输入值 是不是等于随机数值
    if (verifCode.value == kuang.innerHTML) {
        verifCode.value='';
        yzm();
        alert('登录成功');
    } else {
        alert('验证失败');
        verifCode.value='';
        yzm();
    }
}




