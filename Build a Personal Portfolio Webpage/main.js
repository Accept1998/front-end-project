var arrOffsetTop =[$('.about').offset().top,$('.portfolio').offset().top,
$('.contact').offset().top];  //获取元素上边框相当于文档顶端的偏移量





var fTotalHgt = 0;
	for(var i=0; i<$('.boxs').length; i++){
	    fTotalHgt += $('.boxs').eq(i).outerHeight();
	   console.log(fTotalHgt)
	  }
	  var fAverageHgt = (fTotalHgt / $('.boxs').length); // 滚动事件(每次滚动都做一次循环判断)
	      $(window).scroll(function() {
	    for(var i = 0; i < $('.boxs').length; i++) {
	        if($(this).scrollTop() > arrOffsetTop[i] - fAverageHgt/2) { // 减去一个固定值，是定位准确点
	  $('.real_ul li').eq(i).addClass('active').siblings().removeClass('active');
	          }
	         }
	  }); 


 /* 点击事件 */

  $('.real_ul li').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
         $('body, html').animate({
       scrollTop: arrOffsetTop[$(this).index()]-81	
            }, 500);
            });