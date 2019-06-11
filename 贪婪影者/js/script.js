
$(document).ready(function(){
	var deg=0;
	/* Storing all the images into a variable */
	//将所有图像存储到一个变量中

	var images	= $('#stage img').removeClass('default').addClass('animationReady');
	var dim		= { width:images.width(),height:images.height()};
	
	var cnt = images.length;
	
	/* Finding the centers of the animation container: */
	//查找动画容器的中心
	var centerX = $('#stage').width()/2;
	var centerY = $('#stage').height()/2 - dim.height/2;

	function rotate(step,total){
		// This function loops through all the phone images, and rotates them
		//这个函数循环遍历所有的手机图像，并旋转它们

		// with "step" degrees (10 in this implementation) until total has reached 0
		//使用“step”度(在此实现中为10)，直到total达到0

		/* Increment the degrees: */
		//增加度:
		deg+=step;
		
		var eSin,eCos,newWidth,newHeight,q;
		
		/* Loop through all the images: */
		// 循环遍历所有图像
		for(var i=0;i<cnt;i++){
			
			/* Calculate the sine and cosine for the i-th image */
			//计算第i个图像的正弦和余弦
			
			q = ((360/cnt)*i+deg)*Math.PI/180;
			eSin		= Math.sin(q);
			eCos		= Math.cos(q);
			
			/*
			/	With the sine value, we can calculate the vertical movement, and the cosine 
			/	will give us the horizontal movement.
			*/
			// 用正弦值，我们可以计算垂直运动，和余弦值
			// 将给出水平运动。
			
			q = (0.6+eSin*0.4);
			newWidth	= q*dim.width;
			newHeight	= q*dim.height;
			
			/*
			/	We are using the calculated sine value (which is in the range of -1 to 1)
			/	to calculate the opacity and z-index. The front image has a sine value
			/	of 1, while the backmost one has a sine value of -1.
			*/
			//我们使用的是计算出的正弦值(范围在-1到1之间)
			//计算不透明度和z指数。前面的图像有一个正弦值
			// 1，而最后面的sin值是-1。
			images.eq(i).css({
				top			: 0,
				left		: centerX+500*eCos,
				marginLeft	: -newWidth/2,
				zIndex		: Math.round(80+eSin*20)
			}).width(newWidth).height(newHeight);
		}

		total-=Math.abs(step);
		if(total<=0) return false;
		
		// Setting the function to be run again in 40 seconds (equals to 25 frames per second):
		//设置函数在40秒内再次运行(等于每秒25帧):
		setTimeout(function(){rotate(step,total)},40);
	
	}
	
	// Running the animation once at load time (and moving the iPhone into view):
	//加载时运行动画一次(并将iPhone移动到视图中):
	rotate(10,360/cnt);
	
	$('#phoneCarousel .previous').click(function(){
		// 360/cnt lets us distribute the phones evenly in a circle
		//// 360/cnt让我们把手机均匀地分成一圈
		rotate(-10,360/cnt);
	});
	
	$('#phoneCarousel .next').click(function(){
		rotate(10,360/cnt);
	});
	$('#phoneCarousel .previous,#phoneCarousel .next').hover(function(){
		clearInterval(timer);
		},function(){
		timer=setInterval(function(){rotate(10,360/cnt);},4000);
		});
	var timer=null;
	
		timer=setInterval(function(){rotate(10,360/cnt);},4000);
}); 