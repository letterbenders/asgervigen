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
	
	
	$('.case-tuborg').magnificPopup({
	    items: [
	      {
	        src: 'images/case_tuborg_poster.jpg',
	        title: 'Illustration til gavlmaleri'
	       
	      }
	    ]
	});
	
	$('.case-walldogs').magnificPopup({
	    items: [
	      {
	        src: 'images/case_walldogs_logo_poster.jpg',
	        title: 'Logo positiv/negativ'
	       
	      },
	      {
	        src: 'images/case_walldogs_skitse.jpg',
	        title: 'Proces'
	      },
	      {
	        src: 'images/case_walldogs_wall.jpg',
	        title: 'Vægmaleri'
	      },
	      {
	        src: 'images/case_walldogs_wall-2.jpg',
	        title: 'Vægmaleri'
	      }
	   ]
	});
	
	
	$('.case-fail').magnificPopup({
	    items: [
	      {
	        src: 'images/case_fail_poster.jpg',
	        title: 'Fail Copenhagen'
	       
	      }
	   ]
	});
	
	
		 
	$('.case-vuc').magnificPopup({
	    items: [
	      {
	        src: 'images/case_vuc_poster.jpg',
	        title: 'VUC Outdoor kampagne'
	       
	      },
	      {
	        src: 'images/case_vuc_skitse.jpg',
	         title: 'Proces'
	      },
	      {
	        src: 'images/case_vuc_station.jpg',
	         title: 'VUC Outdoor kampagne'
	      }
	   ]
	});
	
		 
	  
	  $('.case-ku').magnificPopup({
	      items: [
	        {
	          src: 'images/ku_case_large-1.jpg',
	          title: 'Illustration til KU science'
	         
	        },
	        {
	          src: 'images/ku_case_large-2.jpg',
	          title: 'Illustration til KU science'
	        }
	     ]
	  });
	
		
	$('.case-gefuhl').magnificPopup({
	    items: [
	      {
	        src: 'images/case_gefuhl_poster.jpg',
	        title: 'Digital illustration'
	       
	      },
	      {
	        src: 'images/case_gefuhl_skitse.jpg',
	        title: 'Proces'
	      },
	      
	      {
	        src: 'images/case_gefuhl_final.jpg',
	        title: 'Digital illustration'
	      }
	   ]
	});
	

		 
	  
	  $.extend(true, $.magnificPopup.defaults, {
	    tClose: 'Close (Esc)', // Alt text on close button
	    tLoading: 'Loading...', // Text that is displayed during loading. Can contain %curr% and %total% keys
	    gallery: {
	      tPrev: 'Previous (Left arrow key)', // Alt text on left arrow
	      tNext: 'Next (Right arrow key)', // Alt text on right arrow
	    },
	    image: {
	      tError: '<a href="%url%">Billedet</a> blev ikke fundet' // Error message when image could not be loaded
	    },
	    ajax: {
	      tError: '<a href="%url%">Indholdet</a> blev ikke fundet' // Error message when ajax request failed
	    },
	    
	    markup: '<div class="mfp-figure">'+
	               '<div class="mfp-close"></div>'+
	               '<div class="mfp-img"></div>'+
	              
	                 '<div class="mfp-title"></div>'+
	                 '<div class="mfp-counter"></div>'+
	             
	             '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button
	    
	    
	    gallery: {
	      enabled: true
	    },
	    type: 'image', // this is a default type
	    mainClass: 'mfp-fade',
	    removalDelay: 300,
	    showCloseBtn: false
	    
	    
	  });
	  
	

	
});
