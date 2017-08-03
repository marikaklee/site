$(document).ready(function() {
	/*
	fr = new FilmRoll({
		container: '#film_roll',
		height: 430
	});	
	*/
	
	if ($(window).width() < 767){  
		$('#foo2').carouFredSel({
			auto: 7000,
			prev: '#prev2',
			next: '#next2',
//			responsive: true,
	//		pagination: "#pager2",
			mousewheel: true,
			items: 1,
			swipe: {
				onMouse: true,
				onTouch: true
			}
		});	
	} else {
		$('#foo2').carouFredSel({
			auto: 7000,
			prev: '#prev2',
			next: '#next2',
//			responsive: true,
	//		pagination: "#pager2",
			mousewheel: true,
			items: 3,
			swipe: {
				onMouse: true,
				onTouch: true
			}
		});			
	}
	
        $('.header_menu li').hover(
            function () {
                $('ul:first', this).css('display','block');
            }, 
            function () {
                $('ul:first', this).css('display','none');         
            }
        );               				
	    
	$('.archive_box_media').hover(
		function() {
			$(this).find('.archive_box_hover').css('display','block');
		},
		function() {
			$(this).find('.archive_box_hover').css('display','none');
		}
	);
	    
	$('.header_spacing').css('height', $('#header').outerHeight() + 'px');
	    
	$('#main_header_menu').slicknav();
	    
	if($('#header').css('position') == 'absolute')
		$('#header').css('top', $('.slicknav_menu').outerHeight() + 'px');
	else
		$('#header').css('top', '0px');
	    
});
$(window).load(function() {
	$('.header_spacing').css('height', $('#header').outerHeight() + 'px');
});
$(window).scroll(function() {
	$('.header_spacing').css('height', $('#header').outerHeight() + 'px');
	if($('#header').css('position') == 'absolute')
		$('#header').css('top', $('.slicknav_menu').outerHeight() + 'px');
	else
		$('#header').css('top', '0px');
	
});
$(window).resize(function() {
	if($('#header').css('position') == 'absolute')
		$('#header').css('top', $('.slicknav_menu').outerHeight() + 'px');
	else
		$('#header').css('top', '0px');
	
	if ($(window).width() < 755){  
		$('#foo2').carouFredSel({
			auto: 7000,
			prev: '#prev2',
			next: '#next2',
//			responsive: true,
	//		pagination: "#pager2",
			mousewheel: true,
			items: 1,
			swipe: {
				onMouse: true,
				onTouch: true
			}
		});	
	} else {
		$('#foo2').carouFredSel({
			auto: 7000,
			prev: '#prev2',
			next: '#next2',
//			responsive: true,
	//		pagination: "#pager2",
			mousewheel: true,
			items: 3,
			swipe: {
				onMouse: true,
				onTouch: true
			}
		});			
	}
	
});