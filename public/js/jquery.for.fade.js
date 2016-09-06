(function($) {
  $.fn.fadeImagesfor = function(options) {
    var opt = $.extend({
      time: 2000, //动画间隔时间
      fade: 1000, //淡入淡出的动画时间
      dots: false, //是否启用图片按钮
      arrows: true, //上一张，下一张
      complete: function() {} //淡入完成后的回调函数
    }, options);
    var t = parseInt(opt.time),
	    f = parseInt(opt.fade),
	    d = opt.dots,
	    i = 0,
	    j = 0,
	    l, m, set, me, cb = opt.complete,
	    a = opt.arrows;
	    m = $(this).find("ul li");	    
	    me = $(this);
	    m.hide();
	    $(this).find("ul li").first().css('display','block');	    
	    l = m.length;
    // 如果没有一张图片
    if (l <= 0) {
      return false;
    }
    // 如果开启ARROW
    if (a) {
      $(this).on("click", ".leftBtn", function(event) {
	        event.preventDefault();
	        i = me.find(".active").index() - 1;
	        if (i <= -1) {
	          i = l - 1;
	        }
	        $(this).parent().find('.pages').empty();
	        var beginnum = $('.worksCon .worksItem').filter('.active').find('ul').children().length;
	        $(this).parent().find('.pages').append("<span>"+(i+1)+"</span>/"+beginnum);
	        show(i);        
	      });
	      $(this).on("click", ".rightBtn", function(event) {
	        event.preventDefault();
	        i = me.find(".active").index() + 1; 
	        if (i >= l) {
	          i = 0;
	        }
	        $(this).parent().find('.pages').empty();
	        var beginnum = $('.worksCon .worksItem').filter('.active').find('ul').children().length;
	        $(this).parent().find('.pages').append("<span>"+(i+1)+"</span>/"+beginnum);
	        show(i);
	        //找到所在父级加自定义属性
	        $(this).parents('.worksItem').attr({'num':i+1});
	        i = $(this).parents('.worksItem').attr('num');
	      });
    }
    // 图片切换
    function show(i) {
      m.eq(i).addClass("active").css("z-index", 2).stop(true, true).fadeIn(f, cb);
      m.eq(i).siblings().removeClass("active").css("z-index", 1).stop(true, true).fadeOut(f);
    }
   }
}(jQuery));	