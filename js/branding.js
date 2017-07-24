$(document).ready(function() {
	$(".branding").addClass("animated fadeIn");
	$(".branding .intro h1").addClass("animated fadeInLeft");
	$(".branding").css("display","inline");
});
var isFirefox = 
                  navigator.userAgent.toLowerCase().indexOf('firefox') > -1; //Positioning in Firefox is BUGGY
        if(isFirefox) {
          $(".menu").css("left","5%");
        };

// $("#scroll1").bind('mousewheel', function(e){
//   if(e.originalEvent.wheelDelta < 0) {
//     $(this).removeClass("animated fadeIn").addClass("animated bounceOutUp");
//     $("#brandingPage2").addClass("block animated fadeIn");
//   }
// });
// $("#scroll1").on('mousewheel DOMMouseScroll', function(event){
//   if(event.originalEvent.detail > 0) { //FIREFOX
//     $(this).removeClass("animated fadeIn").addClass("animated bounceOutUp");
//     $("#brandingPage2").addClass("block animated fadeIn");
//   }
// });

//ABOUT
      $("#menuAbout").on("click", function(){
        $("#aboutPage").removeClass("hidden").addClass("animated bounceInDown")
      });
      $("#aboutPage i.fa-times").on("click", function() {
        $("#aboutPage").addClass("animated bounceOutUp").removeClass("bounceInDown");
        setTimeout(function() {
          $("#aboutPage").removeClass("animated bounceOutUp").addClass("hidden");
        }, 1000);
      });
      $("#aboutPage i.fa-chevron-down").on("click", function() {
        $("#aboutPage").addClass("animated bounceOutUp").removeClass("bounceInDown");
        $("#aboutPage2").removeClass("hidden").addClass("animated bounceInUp")
        setTimeout(function() {
          $("#aboutPage").removeClass("animated bounceOutUp").addClass("hidden");
        }, 1000);
      });
      $("#aboutPage2 i.fa-times").on("click", function() {
        $("#aboutPage2").addClass("animated bounceOutDown").removeClass("bounceInIp");
        setTimeout(function() {
          $("#aboutPage2").removeClass("animated bounceOutDown").addClass("hidden");
        }, 1000);
      });

      //CONTACT FORM
      function resizeInput() {
        $(this).attr('size', $(this).val().length);
      }
      $('input[type="text"], input[type="email"]')
          .keyup(resizeInput)
          .each(resizeInput);
      console.clear();
      (function(){
      var textareas = document.querySelectorAll('.expanding'),
      resize = function(t) {
        t.style.height = 'auto';
        t.style.overflow = 'hidden'; // Ensure scrollbar doesn't interfere with the true height of the text.
        t.style.height = (t.scrollHeight + t.offset ) + 'px';
        t.style.overflow = '';
      },
      attachResize = function(t) {
        if ( t ) {
          console.log('t.className',t.className);
          t.offset = !window.opera ? (t.offsetHeight - t.clientHeight) : (t.offsetHeight + parseInt(window.getComputedStyle(t, null).getPropertyValue('border-top-width')));
          resize(t);
          if ( t.addEventListener ) {
            t.addEventListener('input', function() { resize(t); });
            t.addEventListener('mouseup', function() { resize(t); }); // set height after user resize
          }
          t['attachEvent'] && t.attachEvent('onkeyup', function() { resize(t); });
        }
      };
      })();