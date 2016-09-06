$(document).ready(function(){
	var autonum = 0;
	var i = 0;
	/*防止$符号污染的Jquery插件 主屏轮播图*/
	$(".bannerInner").fadeImages({
      arrows: true,
      complete: function() {
//      console.log("Fade Images Complete");
      }
    });
    /*轮播图下的小提示语*/
    var timer = null;
    function turnfn(elementid){
    	var liTop=parseFloat($('.little-list li:eq(0)').height())   //定义li的高度
		var $top  = parseInt($(elementid).css('top'));
		var pic=$(elementid).find('li:first');		
		$(elementid).find('li:last').after(pic.clone());
		$top -= liTop;
		$top += 'px';
		//动画改变ul的left的值，同时移除ul第一个li，并设置当前ul的left值为0
		$(elementid).animate({ top:$top,},1000,function(){
			pic.remove();
			$(elementid).css('top', 0);
		});
	}
    /*定时器自动轮播图片*/
	timer = setInterval(function(){
		turnfn('.little-list');
	},3000);
	$('.tempWrap').mouseenter(function(){
		clearInterval(timer);
	})
	$('.tempWrap').mouseleave(function(){
		timer = setInterval(function(){
			turnfn('.little-list');
		},3000);		
	})
	/**主页第三部分自动换图和点击换图片**/
	thidPic(0);
	function thidPic(picnum){
		if ($('.advantagesCon p')) {
			$('.advantagesCon p').remove();
		}		
		$('.advantagesImg').attr("src",picDatas[picnum].src);
		$('.advantagesCon').append("<p>"+picDatas[picnum].inf[0]+"<br>"+picDatas[picnum].inf[1]+"</p>");		
		//获取当前循环或者点击的标签类名
		var nowName = $('.advantagesItem li:eq('+autonum+')').attr('class');
		//把所有的标签类名改为数组一样的名字（还原所有的名字）
		for (var j = 0; j < $('.advantagesItem li').length; j++) {
			$('.advantagesItem li:eq('+j+')').attr('class',picDatas[j].name);
		}
		//给当前循环或者点击的标签加类名
        $('.advantagesItem li:eq('+autonum+')').attr('class',''+nowName+' active');
	}
	/**主页第三部分点击换图片事件**/
	$(this).on("click", ".advantagesItem li", function(event) {
        event.preventDefault();
		i = $(this).index();
		autonum = i;
        thidPic(i);
    });
	var sett = null;
	/*定时器自动轮播图片*/
	autoplay();
	function autoplay(){
		sett = setInterval(function(){			
			autonum++;
			autonum %= $('.advantagesItem li').length;
			thidPic(autonum);
		},3000);
	}	
	$('.advantagesList').mouseenter(function(){
		clearInterval(sett);
	})
	$('.advantagesList').mouseleave(function(){
		autoplay();		
	})
	/**主页第四部分点击换相册*/
	/*初始化：显示当前页码**/
	var beginnum = $('.worksCon .worksItem').filter('.active').find('ul').children().length;
	$('.worksCon .worksItem').filter('.active').find('.pages').append("<span>1</span>/"+beginnum);
	/**主页第四部分点击换相册，相册内点击左右按钮图片淡入淡出，相册点击切换给当前的div加class名为active，css的transtion改变宽度即可，淡入淡出可以直接调用封装的fadeimage插件**/
	$(this).on("mouseenter", ".worksCon .worksItem", function(event) {
		//找到所有div里的active元素，清除掉当前的active，相当于大清洗//$('.worksCon .worksItem').filter('.active')  过滤出来带有active的那一项，然后清除
		$('.worksCon .worksItem').removeClass('active');
		$(this).addClass('active');
		//清除pages的标签内容显示
		$(this).find('.pages').empty();
		var beginnum = $('.worksCon .worksItem').filter('.active').find('ul').children().length;
		//判断当前是否有属性attr，如果没有默认显示1/
		if ($(this).attr('num') == undefined) {
			$(this).find('.pages').append("<span>"+1+"</span>/"+beginnum);
		}else{
			$(this).find('.pages').append("<span>"+$(this).attr('num')+"</span>/"+beginnum);
		}		
		//点击左右按钮切换图片  因为每次鼠标移入事件触发的时候都会调用fadeImagesfor事件，给左右按钮绑定了很多事件，所以重复移入再点击的时候会多次响应:解决：给当前移入对象加判断，如果移入过直接return，没有移入的话在当前元素上存取a=true
		if($(this).data("a")) return;
    	$(this).fadeImagesfor({	
	      	complete: function() {
//	        console.log("Complete");	        
	       	}
	    });	    
	    $(this).data("a",true);		
    });
    	/**主页第六部分tab切换 active*/
    $(this).on("click", ".argumentNav li", function(event) {
    	$('.argumentNav .active').removeClass('active');
    	$(this).addClass('active');
    	$('.argumentCon .argumentItem').css('display','none');
    	$('.argumentCon .argumentItem').eq($(this).index()).css('display','block');   	
    })
	$(".kehuItem").fadeImages1({
      arrows: true,
      complete: function() {
//      console.log("Fade Images Complete");
      }
    });
    /**第一小部分点击后自动轮播li active（display：block）显示*/
   	
})
