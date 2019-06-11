// 新闻公告切换部分
$(function(){
    $('.zwy-right>ul>li>span').click(function(){
        $(this).parent().siblings('li').children('span').removeClass('zwy-active');
        $(this).addClass('zwy-active');
        var a = $('.zwy-right>ul>li>span').index(this);
        $('.zwy-right>div>ul').eq(a).siblings('ul').addClass('zwy-hide');
        $('.zwy-right>div>ul').eq(a).removeClass('zwy-hide');
    });
})
//自动轮播功能 使用定时器
$(function(){

    var ul = document.getElementById('zwy-lbt');
    var screen = document.querySelector('.zwy-left-lbt-top');
    var index = 0;
    var timpId;
    timpId = setInterval(tuLeft,3000);
    var screenW = screen.offsetWidth;
    $('.zwy-left-lbt-top').mouseenter(function(){
        clearInterval(timpId);
    })
    $('.zwy-left-lbt-top').mouseleave(function(){
        timpId = setInterval(tuLeft,3000);
    })
    $('.zwy-left-lbt>ol').mouseenter(function(){
        clearInterval(timpId);
    })
    $('.zwy-left-lbt>ol').mouseleave(function(){
        timpId = setInterval(tuLeft,3000);
    })
  
    function tuLeft() {
        // 当下标 等于 最后一张图片时候(下标为图片长度-1) 要闪现到第一张图片
        if(index == ul.children.length - 1){
           index = 0;
           // 闪现到第一张
           ul.style.left = 0;
       }
       //每次 点击 index 加 一次
       index ++;
       // 调用 封装好的 移动动画 函数
       // index * screenW 就是 每次点击 要移动的距离 因为 图片左移动 所有取负值
       animate(ul,-index * screenW);
    //    console.log(index);
       var idx = index;
       if(idx == 3){
           idx = 0;
           $('.zwy-left-lbt>ol>li').eq(idx).addClass('zwy-index').siblings().removeClass('zwy-index');
       }
       
      $('.zwy-left-lbt>ol>li').eq(idx).addClass('zwy-index').siblings().removeClass('zwy-index');
      
    }
    $('.zwy-left-lbt>ol>li').click(function(){
        var olIndex = $(this).index();
        // console.log(olIndex);
        $('.zwy-left-lbt>ol>li').eq(olIndex).addClass('zwy-index').siblings().removeClass('zwy-index');
        index = olIndex;
        animate(ul,-index * screenW);
    })
    //动画
    function animate(obj, target) {
        // 每次先停止上一个计时器
        clearInterval(obj.timerID);
        obj.timerID = setInterval(function () {
            // 获得它当前位置
            var current = obj.offsetLeft;
            // console.log(current);
            // 判断距离够不够走这一步，够走就走，不够就直接到
            if (Math.abs(target - current) > 10) {
                // 走一步
                current += target > current ? 10 : -10;
                // 赋值给left
                obj.style.left = current + "px";
            } else {
                obj.style.left = target + "px";
            }

            if (current == target) {

                clearInterval(obj.timerID);
            }
        }, 10);
    }
})

// 忍者资料部分
$(function(){
    $('.zwy-bg2>.w>ul>li').click(function(){
        $(this).addClass('active').siblings('li').removeClass('active')
        var index = $(this).index();
        console.log(index);
        
        $('#zwy-sfq>ul').eq(index).removeClass('zwy-hide').siblings().addClass('zwy-hide');
        
      
    })
})

// 手风琴轮播图部分
$(function(){
    $('#zwy-sfq>ul>li.zwy-li1').click(function(){ 
        if(!$(this).hasClass('zwy-curr')){
                $('#zwy-sfq>ul>li.zwy-li1').removeClass('zwy-curr');
                $(this).addClass('zwy-curr');
                $('.zwy-curr').stop().animate({
                    width: 900
                }, 300, 'linear');
                $('#zwy-sfq>ul>li.zwy-li1').not('.zwy-curr').stop().animate({
                    width: 95
                }, 300, 'linear');
            }
        $(this).siblings().find('.zwy-content').removeClass('zwy-show');
        $(this).find('.zwy-content').addClass('zwy-show');

    });
    $('#zwy-sfq>ul>li.zwy-li2').click(function(){ 
        if(!$(this).hasClass('zwy-curr')){
                $('#zwy-sfq>ul>li.zwy-li2').removeClass('zwy-curr');
                $(this).addClass('zwy-curr');
                $('.zwy-curr').stop().animate({
                    width: 900
                }, 300, 'linear');
                $('#zwy-sfq>ul>li.zwy-li2').not('.zwy-curr').stop().animate({
                    width: 95
                }, 300, 'linear');
            }
           
        
        $(this).siblings().find('.zwy-content').removeClass('zwy-show');
        $(this).find('.zwy-content').addClass('zwy-show');

    });
})

// 图片轮播切换轮播图
$(function(){
    //定义Carousel类
	var Carousel = (function(){

		//定义Carousel的构造函数
		function Carousel(element,options){
			this.settings = $.extend(true,$.fn.Carousel.defaults,options||{});
			this.element = element;
			this.init();
		}

		//定义Carousel的方法
		Carousel.prototype = {
			/*说明：初始化插件*/
			init:function(){
				var me = this;
				me.poster = me.element;
				me.posterItemMain = me.poster.find("ul.poster-list");
				me.nextBtn = me.poster.find("div.poster-next-btn"); 
				me.prevBtn = me.poster.find("div.poster-prev-btn"); 
				me.posterItems = me.poster.find("li.poster-item");

				if(me.posterItems.size()%2 == 0){
					me.posterItemMain.append(me.posterItems.ep(0).clone());
					me.posterItems = me.posterItemMain.children;
				}
				
				me.posterFirstItem = me.posterItems.first();
				me.posterLastItem = me.posterItems.last();
				me.rotateFlag =true;

				//设置配置参数值
				me.setSettingValue();
				me.setPosterPost();

				me.nextBtn.click(function(){
					if(me.rotateFlag){
						me.rotateFlag = false;
						me.carouseRotate("left");
					};
				});

				me.prevBtn.click(function(){
					if(me.rotateFlag){
						me.rotateFlag = false;
						me.carouseRotate("right");
					};
				});

				// 是否开启自动播放
				if(me.settings.autoPlay){
					me.autoPlay();
					me.poster.hover(function(){
						window.clearInterval(me.timer);
					},function(){
						me.autoPlay();
					});
				}
			},

			//自动播放方法
			autoPlay:function(){
				var me = this;
				me.timer = window.setInterval(function(){
					me.nextBtn.click();
				},me.settings.delay);
			},

			//旋转方法
			carouseRotate:function(dir){
				var me = this;
				var zIndexArr = [];
				if(dir === "left"){
					me.posterItems.each(function(){
						var self = $(this),
							prev = self.prev().get(0)?self.prev():me.posterLastItem,
							width = prev.width(),
							height = prev.height(),
							zIndex = prev.css("zIndex"),
							opacity = prev.css("opacity"),
							left = prev.css("left"),
							top = prev.css("top");
							zIndexArr.push(zIndex);
							self.animate({
									width:width,
									height:height,
									opacity:opacity,
									left:left,
									top:top
							},me.settings.speed,function(){
								me.rotateFlag = true;
							});
					});
					me.posterItems.each(function(i){
						$(this).css("zIndex",zIndexArr[i]);
						if(zIndexArr[i]==Math.floor(me.posterItems.length/2)){
							$(this).find(".poster-item-title").slideDown("slow");
						}else{
							$(this).find(".poster-item-title").hide();
						}
					})
				}else if(dir === "right"){
					me.posterItems.each(function(){
						var self = $(this),
							next = self.next().get(0)?self.next():me.posterFirstItem,
							width = next.width(),
							height = next.height(),
							zIndex = next.css("zIndex"),
							opacity = next.css("opacity"),
							left = next.css("left"),
							top = next.css("top");
							zIndexArr.push(zIndex);
							self.animate({
									width:width,
									height:height,
									opacity:opacity,
									left:left,
									top:top
							},me.settings.speed,function(){
								me.rotateFlag = true;
							});
					});
					me.posterItems.each(function(i){
						$(this).css("zIndex",zIndexArr[i]);
						if(zIndexArr[i]==Math.floor(me.posterItems.length/2)){
							$(this).find(".poster-item-title").slideDown("slow");
						}else{
							$(this).find(".poster-item-title").hide();
						}
					})
				}
			},
			//设置剩余的帧的位置关系
			setPosterPost:function(){
				var me = this;
				var sliceItems = me.posterItems.slice(1),
					sliceSize  = sliceItems.size()/2,
					rightSlice = sliceItems.slice(0,sliceSize),
					level      = Math.floor(me.posterItems.size()/2),
					leftSlice  = sliceItems.slice(sliceSize);
				//设置右边帧的位置关系和宽度、高度、top...
				var rw = me.settings.posterWidth,
					rh = me.settings.posterHeight,
					//((容器宽-帧宽)/2)/层级 190
					gap = ((me.settings.width-me.settings.posterWidth)/2)/level;
				var firstLeft = (me.settings.width-me.settings.posterWidth)/2;
				var fixOffsetLeft = firstLeft + rw;
				//设置右边的位置关系
				rightSlice.each(function(i){
					$(this).find(".poster-item-title").hide();
					level--;
					rw = rw*me.settings.scale;
					rh = rh*me.settings.scale;
					var j=i;
					$(this).css({
							zIndex:level,
							width:rw,
							height:rh,
							opacity:1/(++j),
							left:fixOffsetLeft+(++i)*gap-rw,
							top:me.setVertucalAlign(rh)
					});

				});
				//设置左边的位置关系
				var lw = rightSlice.last().width(),
					lh = rightSlice.last().height(),
					oloop = Math.floor(me.posterItems.size()/2);
				leftSlice.each(function(i){
					$(this).find(".poster-item-title").hide();
					$(this).css({
							zIndex:i,
							width:lw,
							height:lh,
							opacity:1/oloop,
							left:i*gap,
							top:me.setVertucalAlign(lh)
					});
					lw = lw/me.settings.scale;
					lh = lh/me.settings.scale;
					oloop--;
				});
			},
			//设置垂直排列对齐
			setVertucalAlign:function(height){
				var me = this;
				var verticalType = me.settings.verticalAlign,
					top = 0;

				if(verticalType === "middle"){
					top = (me.settings.height - height)/2;
				}else if(verticalType === "top"){
					top = 0;
				}else if(verticalType === "bottom"){
					top = me.settings.height - height;
				}else{
					top = (me.settings.height-height)/2;
				};

				return top;
			},
			//配置左右按钮和第一帧位置
			setSettingValue:function(){
				var me = this;
				me.poster.css({
					width:me.settings.width,
					height:me.settings.height
				});
				me.posterItemMain.css({
					width:me.settings.width,
					height:me.settings.height
				});
				//计算左右切换按钮的宽度
				var w = (me.settings.width-me.settings.posterWidth)/2;
				me.nextBtn.css({
					width:w,
					height:me.settings.height,
					zIndex:Math.ceil(me.posterItems.size()/2)
				});
				me.prevBtn.css({
					width:w,
					height:me.settings.height,
					zIndex:Math.ceil(me.posterItems.size()/2)
				});
				me.posterFirstItem.css({
					width:me.settings.posterWidth,
					height:me.settings.posterHeight,
					top: me.setVertucalAlign(me.settings.posterHeight),
					left:w,
					zIndex:Math.floor(me.posterItems.size()/2)
				});
			}
		};
		return Carousel;
	})();
	//单例模式,添加Carousel方法
	$.fn.Carousel = function(options){
		return this.each(function(){
			var me = $(this),
				instance = me.data("Carousel");
			if(!instance){
				instance = new Carousel(me,options);
				me.data("Carousel",instance);
			}
		});
	}; 
	//可通过参数"width"控制容器宽度，
	//"height"控制容器高度"，
	//posterWidth"控制图片宽度，
	//"posterHeight"控制图片高度，
	//"scale"控制图片倍数，
	//"speed"控制切换效果的耗时，
	//"autoPlay"控制是否自动播放，
	//"delay"控制每次效果间隔，
	//"verticalAlign"控制图片对其方式。
	$(".poster-main").Carousel({
		"width":1000,		
		"height":520,		
		"posterWidth":800,	
		"posterHeight":438,
		"scale":0.9,		
		"speed": 500,	
		"autoPlay":true,	
		"delay":1500,	
		"verticalAlign":"middle"	
	});
                
})


// 侧边栏固定

$(function(){
	$('.zwy-gd>ul>li').click(function(){
		// $(this).addClass('active').siblings('li').removeClass('active');
		var index = $(this).index();
		// console.log(index);
		
		switch(index){
			case 0:{
				scrollTo('.cHeader', 500);
				break;
			}
			case 1:{
				scrollTo('.zwy-bg', 500);
				break;
			}
			case 2:{
				scrollTo('.zwy-bg2', 500);
				break;
			}
			case 3:{
				scrollTo('.zwy-bg3', 800);
				break;
			}
		}
	});
	
	var bj = $('.cHeader').offset().top - 300;
	var bg = $('.zwy-bg').offset().top - 300;
	var bg2 = $('.zwy-bg2').offset().top - 200;
	var bg3 = $('.zwy-bg3').offset().top - 300;
	$(window).scroll(function(){
		console.log('滚动的距离'+$(document).scrollTop());
		// console.log('顶部位置'+$('.zwy-bj').offset().top);
		// console.log('新闻位置'+$('.zwy-bg').offset().top);
		var $docTop = $(document).scrollTop();
		// console.log( $docTop);
		
		// console.log('顶部位置'+$('.cHeader').offset().top);
		// console.log('新闻位置'+$('.zwy-bg').offset().top);
		// console.log('忍者位置'+$('.zwy-bg2').offset().top);
		// console.log('游戏位置'+$('.zwy-bg3').offset().top);
		
		if($docTop < bg && $docTop >= bj ){
			$('.zwy-gd>ul>li').eq(0).addClass('active').siblings('li').removeClass('active');
			// console.log(0);		
		}else if($docTop < bg2 && bg ){
			$('.zwy-gd>ul>li').eq(1).addClass('active').siblings('li').removeClass('active');
			// console.log(1);
		}else if($docTop < bg3 && bg2){
			$('.zwy-gd>ul>li').eq(2).addClass('active').siblings('li').removeClass('active');
		}else{
			$('.zwy-gd>ul>li').eq(3).addClass('active').siblings('li').removeClass('active');
		}
	})
	
	
	// 滚动封装
	function scrollTo(ele, speed){
		if(!speed) speed = 300;
		if(!ele){
			$("html,body").stop(true,false).animate({
				scrollTop:0
			},speed);
		}else{
			if(ele.length>0) $("html,body").stop(true,false).animate({
				scrollTop:$(ele).offset().top
			},speed);
		}
		// 阻止跳转
		return false;
	}
})


