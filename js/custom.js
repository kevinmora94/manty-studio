
// ISOTOPE FILTER
jQuery(document).ready(function($){

  if ( $('.iso-box-wrapper').length > 0 ) { 

      var $container  = $('.iso-box-wrapper'), 
        $imgs     = $('.iso-box img');

      $container.imagesLoaded(function () {

        $container.isotope({
        layoutMode: 'fitRows',
        itemSelector: '.iso-box'
        });

        $imgs.load(function(){
          $container.isotope('reLayout');
        })

      });

      //filter items on button click

      $('.filter-wrapper li a').click(function(){

          var $this = $(this), filterValue = $this.attr('data-filter');

      $container.isotope({ 
        filter: filterValue,
        animationOptions: { 
            duration: 750, 
            easing: 'linear', 
            queue: false, 
        }                
      });             

      // don't proceed if already selected 

      if ( $this.hasClass('selected') ) { 
        return false; 
      }

      var filter_wrapper = $this.closest('.filter-wrapper');
      filter_wrapper.find('.selected').removeClass('selected');
      $this.addClass('selected');

        return false;
      }); 

  }

  // MESSAGE
  $(function(){$(".sendMsgBtn").click(function(){
    var data={
      name:$(".name-field").val(),
      email:$(".mail-field").val(),
      message:$("#messageEmail").val()
    };
      $('.errMsgContact').removeClass('animated bounceIn');
      $('.errMsgContact').addClass('hide');
      if(data.name==""){
        $('.errMsgContact').removeClass('hide');
        $('.errMsgContact').addClass('animated bounceIn')
      } else if(data.email==""){
        $('.errMsgContact').removeClass('hide');
        $('.errMsgContact').addClass('animated bounceIn')
      }else if(data.message==""){
        $('.errMsgContact').removeClass('hide');
        $('.errMsgContact').addClass('animated bounceIn')
      }else{$.ajax({
        type:"POST",
        url:"send-mail.php",
        data:data,
        success:function(){
          $('.success').removeClass('hide');
          $('.success').addClass('animated bounceIn')}
        })}
        return!1
      })
    });

});


// PRELOADER JS
// $(window).load(function(){
//     $('.preloader').fadeOut(1000); // set duration in brackets    
// });


// jQuery to collapse the navbar on scroll //
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").removeClass("nav-transparent");
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".navbar-fixed-top").addClass("nav-transparent");
    }
});


/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
$(function(){

  // ------- WOW ANIMATED ------ //
  wow = new WOW(
  {
    mobile: false
  });
  wow.init();


  // HIDE MOBILE MENU AFTER CLIKING ON A LINK
  $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });


  // NIVO LIGHTBOX
  $('.iso-box-section a').nivoLightbox({
        effect: 'fadeScale',
    });


  // HOME BACKGROUND SLIDESHOW
  $(function(){
    jQuery(document).ready(function() {
    $('#home').backstretch([
       "images/pine3.jpg",
        ],  {duration: 2000, fade: 750});
    });
  })

  // MENU SCROLL
  $('#up').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 960);
	});
  $('#solutions').click(function(){
		$('body, html').animate({
			scrollTop: $('#work').position().top
		}, 960);
  });
  $('#solutions2').click(function(){
		$('body, html').animate({
			scrollTop: $('#work').position().top
		}, 960);
  });
  $('#technologies').click(function(){
		$('body, html').animate({
			scrollTop: $('#tech').position().top
		}, 960);
  });
  $('#helpers').click(function(){
		$('body, html').animate({
			scrollTop: $('#team').position().top
		}, 960);
  });
  $('#message').click(function(){
		$('body, html').animate({
			scrollTop: $('#contact').position().top
		}, 960);
  });
  $('#message2').click(function(){
		$('body, html').animate({
			scrollTop: $('#contact').position().top
		}, 960);
	});

});

