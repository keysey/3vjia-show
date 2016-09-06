//原生形式代码
//window.onload = function(){
//	var minnav = document.getElementsByClassName('minnav')[0];
//	var minnavLi = minnav.getElementsByTagName('li');	
//	for (var i = 0; i < minnavLi.length; i++) {
//		minnavLi[i].index = i;
//		minnavLi[i].onmouseenter = function(){
//			for (var i = 0; i < minnavLi.length; i++) {
//				if (minnavLi[i].className == 'navFind') {
//					minnavLi[i].className = 'navFind';
//				}else{
//					minnavLi[i].className = '';
//				}
//			}
//			if (minnavLi[this.index].className == 'navFind') {
//				var minnavDiv = minnavLi[this.index].getElementsByTagName('div')[0];
//				minnavLi[this.index].className += ' active';
//				minnavDiv.style.display = 'block';
//			}else{
//				minnavLi[this.index].className = 'active';
//			}			
//		}
//		minnavLi[i].onmouseleave = function(){
//			minnavLi[0].className = 'active';
//			if (minnavLi[this.index].className == 'navFind active') {
//				var minnavDiv = minnavLi[this.index].getElementsByTagName('div')[0];
//				minnavLi[this.index].className = 'navFind';
//				minnavDiv.style.display = 'none';
//			}
//			for (var i = 0; i < minnavLi.length; i++) {
//				if (minnavLi[i].className == 'active') {
//					minnavLi[i].className = '';
//				}else if(minnavLi[i].className == 'navFind active'){
//					minnavLi[this.index].className = 'navFind';
//				}else{
//					minnavLi[0].className = 'active';
//				}
//			}			
//		}
//	}
//}
//jQuery形式代码
$(document).ready(function(){
	var minnav = $('.minnav');
	var minnavLi = $('.minnav li');
	for (var i = 0; i < minnavLi.length; i++) {
		minnavLi.eq(i).mouseenter(function(){
			for (var i = 0; i < minnavLi.length; i++) {
				if (minnavLi.eq(i).hasClass('navFind')) {
					minnavLi.eq(i).attr('class','navFind');
				}else{
					minnavLi.eq(i).attr('class','');
				}
			}			
			if ($(this).hasClass('navFind')) {
				var minnavDiv = $(this).find('div');
				$(this).attr('class','navFind active');
				minnavDiv.css("display","block");
			}else{
				$(this).attr('class','active');
			}		
		})
		minnavLi.eq(i).mouseleave(function(){
			minnavLi.eq(0).attr('class','active');
			if ($(this).hasClass('navFind active')) {
				var minnavDiv = $(this).find('div');
				$(this).attr('class','navFind');
				minnavDiv.css('display','none');
			}
			for (var i = 0; i < minnavLi.length; i++) {
				if (minnavLi.eq(i).hasClass('active')) {
					minnavLi.eq(i).attr('class','');
				}else if(minnavLi.eq(i).hasClass('navFind active')){
					$(this).attr('class','navFind');
				}else{
					minnavLi.eq(0).attr('class','active');
				}
			}			
		})
	}
	
})