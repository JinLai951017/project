

/**
 * 
 * 全部 SS S A B 中定义一个样式 style="display: block;" 通过改变 display 的值影响全部图片显示和隐藏
 * 
 * 功能1:
 * 给全部的ul中的li添加点击事件
 * 获取点击的类,添加 active(主动) 类 样式(颜色 color: #2d1a07; 背景图片  background: url(img/ninja-tab-active.png) no-repeat center;)
 * siblings() (获取兄弟元素不包裹自己) removeClass('active'); (移除active (主动) 类)
 * 
 * 功能2:
 * 找到div 叫 cen-list(全部图片) 类 匹配 ninja-tab (全部中对应的类索引从0开始) 类 show() (显示) siblings() (获取兄弟元素不包裹自己) hide() (隐藏)
 * 
 */
$('.ninja-tab').on('click', 'li', function () {
    $(this).addClass('active').siblings().removeClass('active');
    $('.ninja-cen .cen-list').eq($(this).index()).show().siblings().hide();
});

$('.ninja-tab1').on('click', 'li', function () {
    $(this).addClass('active1').siblings().removeClass('active1');
    $('.ninja-cen .cen-list1').eq($(this).index()).show().siblings().hide();
});