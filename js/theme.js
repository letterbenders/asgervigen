$(document).ready(function(){
	
	$(window).scroll(function() {
	    	
	        var styledDiv = $('.logo-contact'),
	           
	            targetScroll = $('#work').position().top+120,
	            currentScroll = $('html').scrollTop() || $('body').scrollTop();
	    		
	    		styledDiv.toggleClass('white animated flipInX', currentScroll >= targetScroll, true);
	    		
	    		
	    });
	
	$(".web").click(function(){
	    window.open($(this).find("a").attr("href"));
	    return false;
	});
	
	
	
	
});
