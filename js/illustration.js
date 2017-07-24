$(document).ready(function() {
	$(".illustration").addClass("animated fadeIn");
	$(".illustration .intro h1").addClass("animated fadeInLeft");
	$(".illustration").css("display","inline");
	    runLandscape();
});

var isFirefox = 
                  navigator.userAgent.toLowerCase().indexOf('firefox') > -1; //Positioning in Firefox is BUGGY
        if(isFirefox) {
          $(".menu").css("left","5%");
        };

//LANDSCAPE SVG
      var tmax_opts2 = {
        delay: 0.3,
        repeat: 0,
        repeatDelay: 0.5,
        yoyo: true
      };
      var tmax_t2 = new TimelineMax(tmax_opts2),
          shapes = $('.landscape path'),
          stagger = 0.0025,
          duration = 2;
      var staggerFrom = {
        scale: 0,
        opacity: 0,
        transformOrigin: 'center center',
      };
      var staggerTo = {
        opacity: 1,
        scale: 1,
        ease: Elastic.easeInOut
      };
      function runLandscape() {
          tmax_t2.staggerFromTo(shapes, duration, staggerFrom, staggerTo, stagger, 0);
        };

//ILLUSTRATION NAVIGATION
      var scene = document.getElementById('scene')

      var parallax = new Parallax(scene)

      $(".workContainer").on("click", function(){
        $(".work-master").css("height","0vh");
        $(".workContent").css("height","110vh");
        $(".absolute-bg").css("background-size","cover");
        $("#illustrationPage2 .ex").addClass("animated fadeIn block").css("top","8%");
        setTimeout(function() {
          $("#illustrationPage2 .ex").removeClass("animated fadeIn");
        }, 500)
      });
      $("#container1").on("click", function(){
        $("#illustrationCase1Content").addClass("block animated bounceInUp");
        $(".workContent").css("background-color","#4c5987");
      });
      $("#container2").on("click", function(){
        $("#illustrationCase2Content").addClass("block animated bounceInUp");
        $(".workContent").css("background-color","#4c5664");
      });
      $("#container3").on("click", function(){
        $("#illustrationCase3Content").addClass("block animated bounceInUp");
        $(".workContent").css("background-color","#6da089");
      });
      // $("#container4").on("click", function(){
      //   $("#illustrationCase4Content").addClass("block animated bounceInUp");
      //   $(".workContent").css("background-color","#d9c7d7");
      // });
      $("#container5").on("click", function(){
        $("#illustrationCase5Content").addClass("block animated bounceInUp");
        $(".workContent").css("background-color","#cf6d6d");
      });

      $("#illustrationPage2 .ex").on("click", function() {
        $(".work-master").css("height","100vh");
        $(".workContent").css("height","0vh");
        $(".absolute-bg").css("background-size","contain");
        $(".workContent").css("background-color","#f9ffd7");
        $("#illustrationPage2 .ex").removeClass("animated fadeIn block");
        $(".workContentContainer").addClass("animated bounceOutDown");
        setTimeout(function() {
          $(".workContentContainer").removeClass("block animated bounceOutDown");
        }, 1000);
      });
      $("#illustrationCase1Content #pic1, #illustrationCase3Content #pic1, #illustrationCase2Content #pic1, #illustrationCase2Content #pic2, #illustrationCase2Content #pic3, #illustrationCase2Content #pic4, #illustrationCase2Content #pic5, #illustrationCase2Content #pic6, #illustrationCase1Content #pic5, #illustrationCase3Content #pic5, #illustrationCase1Content #pic6, #illustrationCase3Content #pic6").on("click", function() {
        $(this).toggleClass("enlarged");
      });
      $("#illustrationCase2Content #pic8, #illustrationCase2Content #pic9, #illustrationCase2Content #pic10").on("click", function() {
        $(this).toggleClass("enlarged-bottom");
      });
      $("#illustrationCase2Content #pic7, #illustrationCase1Content #pic7, #illustrationCase1Content #pic8, #illustrationCase1Content #pic9, #illustrationCase1Content #pic10, #illustrationCase3Content #pic7, #illustrationCase3Content #pic8, #illustrationCase3Content #pic9, #illustrationCase3Content #pic10").on("click", function() {
        $(this).toggleClass("enlarged-bottom-no-right");
      });
      $("#illustrationCase1Content #pic2, #illustrationCase1Content #pic3, #illustrationCase1Content #pic4, #illustrationCase3Content #pic2, #illustrationCase3Content #pic3, #illustrationCase3Content #pic4").on("click", function() {
        $(this).toggleClass("enlarged-right");
      });
      
      // $("#illustrationCase1Content .row #pic1").on("click", function() {
      //   $("#illustrationCase1Content #pic1open").removeClass("hidden").addClass("block animated zoomIn");
      // });
      // $("#illustrationCase1Content .row #pic2").on("click", function() {
      //   $("#illustrationCase1Content #pic2open").removeClass("hidden").addClass("block animated zoomIn");
      // });
      // $("#illustrationCase1Content .row #pic3").on("click", function() {
      //   $("#illustrationCase1Content #pic3open").removeClass("hidden").addClass("block animated zoomIn");
      // });
      // $("#illustrationCase1Content .row #pic4").on("click", function() {
      //   $("#illustrationCase1Content #pic4open").removeClass("hidden").addClass("block animated zoomIn");
      // }); 
      // $("#illustrationCase2Content .row #pic1").on("click", function() {
      //   $("#illustrationCase2Content #pic1open").removeClass("hidden").addClass("block animated zoomIn");
      // });
      // $("#illustrationCase2Content .row #pic2").on("click", function() {
      //   $("#illustrationCase2Content #pic2open").removeClass("hidden").addClass("block animated zoomIn");
      // });
      // $("#illustrationCase2Content .row #pic3").on("click", function() {
      //   $("#illustrationCase2Content #pic3open").removeClass("hidden").addClass("block animated zoomIn");
      // });
      // $("#illustrationCase2Content .row #pic4").on("click", function() {
      //   $("#illustrationCase2Content #pic4open").removeClass("hidden").addClass("block animated zoomIn");
      // });
      // $("#illustrationCase3Content .row #pic1").on("click", function() {
      //   $("#illustrationCase3Content #pic1open").removeClass("hidden").addClass("block animated zoomIn");
      // });
      // $("#illustrationCase3Content .row #pic2").on("click", function() {
      //   $("#illustrationCase3Content #pic2open").removeClass("hidden").addClass("block animated zoomIn");
      // });
      // $("#illustrationCase3Content .row #pic3").on("click", function() {
      //   $("#illustrationCase3Content #pic3open").removeClass("hidden").addClass("block animated zoomIn");
      // });
      // $("#illustrationCase3Content .row #pic4").on("click", function() {
      //   $("#illustrationCase3Content #pic4open").removeClass("hidden").addClass("block animated zoomIn");
      // });
      // $("#illustrationCase4Content .row #pic1").on("click", function() {
      //   $("#illustrationCase4Content #pic1open").removeClass("hidden").addClass("block animated zoomIn");
      // });
      // $("#illustrationCase4Content .row #pic2").on("click", function() {
      //   $("#illustrationCase4Content #pic2open").removeClass("hidden").addClass("block animated zoomIn");
      // });
      // $("#illustrationCase4Content .row #pic3").on("click", function() {
      //   $("#illustrationCase4Content #pic3open").removeClass("hidden").addClass("block animated zoomIn");
      // });
      // $("#illustrationCase4Content .row #pic4").on("click", function() {
      //   $("#illustrationCase4Content #pic4open").removeClass("hidden").addClass("block animated zoomIn");
      // });
      // $("#illustrationCase5Content i.fa-chevron-right").on("click", function() {
      //   $("#illustrationCase5Content #vid").removeClass("hidden").addClass("block animated bounceInRight");
      //   $("#illustrationCase5Content .parallax").addClass("hidden");
      //   $("#illustrationCase5Content i.fa-chevron-right").addClass("hidden");
      // });
      $(".workContent i.fa-times").on("click", function() {
        $("#pic1open, #pic2open, #pic3open, #pic4open").addClass("hidden").removeClass("block animated zoomIn");
      });

      $("#illustrationContinue > #click").on("click", function(){
        // castParallax();
        $(".contentintro").removeClass("animated fadeIn");
        $(".contentintro").addClass("animated bounceOutUp");
        $("#illustrationPage2").addClass("block animated fadeIn");
      });

$("#scroll1").bind('mousewheel', function(e){
  if(e.originalEvent.wheelDelta < 0) {
    $(this).removeClass("animated fadeIn").addClass("animated bounceOutUp");
    $("#illustrationPage2").addClass("block animated fadeIn");
  }
});
$("#scroll1").on('mousewheel DOMMouseScroll', function(event){
  if(event.originalEvent.detail > 0) { //FIREFOX
    $(this).removeClass("animated fadeIn").addClass("animated bounceOutUp");
    $("#illustrationPage2").addClass("block animated fadeIn");
  }
});


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