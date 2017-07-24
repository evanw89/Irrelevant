
var classes_to_remove = ["hair-look-left", "hair2-look-left", "head-look-left", "ear1-look-left", "ear2-look-left", "hairfront-look-left", "hairfront2-look-left", "hairfront3-look-left", "eye1-look-left", "eye2-look-left", "mouth-look-left", "nose-look-left", "neck-look-left",
"hair-look-right", "hair2-look-right", "head-look-right", "ear1-look-right", "ear2-look-right", "hairfront-look-right", "hairfront2-look-right", "hairfront3-look-right", "eye1-look-right", "eye2-look-right", "mouth-look-right", "nose-look-right", "neck-look-right",
"hair-look-down", "hair2-look-down", "head-look-down", "ear1-look-down", "ear2-look-down", "hairfront-look-down", "hairfront2-look-down", "hairfront3-look-down", "eye1-look-down", "eye2-look-down", "mouth-look-down", "nose-look-down", "neck-look-down", 
"hair-look-up", "hair2-look-up", "head-look-up", "ear1-look-up", "ear2-look-up", "hairfront-look-up", "hairfront2-look-up", "hairfront3-look-up", "eye1-look-up", "eye2-look-up", "mouth-look-up", "nose-look-up", "neck-look-up",
"hair-look-up-right", "hair2-look-up-right", "head-look-up-right", "ear1-look-up-right", "ear2-look-up-right", "hairfront-look-up-right", "hairfront2-look-up-right", "hairfront3-look-up-right", "eye1-look-up-right", "eye2-look-up-right", "mouth-look-up-right", "nose-look-up-right", "neck-look-up-right",
"hair-look-up-left", "hair2-look-up-left", "head-look-up-left", "ear1-look-up-left", "ear2-look-up-left", "hairfront-look-up-left", "hairfront2-look-up-left", "hairfront3-look-up-left", "eye1-look-up-left", "eye2-look-up-left", "mouth-look-up-left", "nose-look-up-left", "neck-look-up-left",
"hair-look-down-right", "hair2-look-down-right", "head-look-down-right", "ear1-look-down-right", "ear2-look-down-right", "hairfront-look-down-right", "hairfront2-look-down-right", "hairfront3-look-down-right", "eye1-look-down-right", "eye2-look-down-right", "mouth-look-down-right", "nose-look-down-right", "neck-look-down-right",
"hair-look-down-left", "hair2-look-down-left", "head-look-down-left", "ear1-look-down-left", "ear2-look-down-left", "hairfront-look-down-left", "hairfront2-look-down-left", "hairfront3-look-down-left", "eye1-look-down-left", "eye2-look-down-left", "mouth-look-down-left", "nose-look-down-left", "neck-look-down-left",
"avatarBG-look-up", "avatarBG-look-up-left", "avatarBG-look-up-right", "avatarBG-look-left", "avatarBG-look-right", "avatarBG-look-down", "avatarBG-look-down-left", "avatarBG-look-down-right"
];

$(document).ready(function() {
      runSplash();
      removeClasses();
      loadHome();

      function loadHome() {
        setTimeout(function(){ 
          $(".home").removeClass("hidden");
          $(".home").addClass("animated fadeIn"); }, 4000);
      }

      function runSplash() {
        setTimeout(function(){ 
          $(".splashScreen").removeClass("animated fadeIn");
          $(".splashScreen").addClass("animated fadeOut"); }, 3500);
      setTimeout(function(){ 
          $(".splashScreen").addClass("hidden"); }, 4500);
      }

      if(window.attachEvent) {
        window.attachEvent('onresize', function() {
          var windowWidth = $(window).width();
          var rows = $(".home .row");
          rows.css("width", windowWidth + "px");
        })
      }
                    
      function removeClasses () {
        for(var x = 0;x<classes_to_remove.length;x++) {
        $(".head").removeClass(classes_to_remove[x]);
        $(".hair").removeClass(classes_to_remove[x]);
        $(".hair2").removeClass(classes_to_remove[x]);
          $(".ear1").removeClass(classes_to_remove[x]);
          $(".ear2").removeClass(classes_to_remove[x]);
          $(".hairfront").removeClass(classes_to_remove[x]);
          $(".hairfront2").removeClass(classes_to_remove[x]);
          $(".hairfront3").removeClass(classes_to_remove[x]);
          $(".eye1").removeClass(classes_to_remove[x]);
          $(".eye2").removeClass(classes_to_remove[x]);
          $(".nose").removeClass(classes_to_remove[x]);
          $(".mouth").removeClass(classes_to_remove[x]);
          $(".neck").removeClass(classes_to_remove[x]);
          $(".avatarBG").removeClass(classes_to_remove[x]);
        };
      };

      function direction(e) {
        //look left
        if( e.clientX<= window.innerWidth/2) { 
          removeClasses();

        $(".head").addClass("head-look-left");
        $(".hair").addClass("hair-look-left");
        $(".hair2").addClass("hair2-look-left");
          $(".ear1").addClass("ear1-look-left");
          $(".ear2").addClass("ear2-look-left");
          $(".hairfront").addClass("hairfront-look-left");
          $(".hairfront2").addClass("hairfront2-look-left");
          $(".hairfront3").addClass("hairfront3-look-left");
          $(".eye1").addClass("eye1-look-left");
          $(".eye2").addClass("eye2-look-left");
          $(".nose").addClass("nose-look-left");
          $(".mouth").addClass("mouth-look-left");
          $(".neck").addClass("neck-look-left");
          $(".avatarBG").addClass("avatarBG-look-left");

          $("#avatarcontainer .avatarBG:first-child").css("box-shadow","12px 0px 50px #86ffef");
        }
        //look right
        if( e.clientX >= (window.innerWidth-(window.innerWidth/2))) { 
          removeClasses();

        $(".head").addClass("head-look-right");
        $(".hair").addClass("hair-look-right");
        $(".hair2").addClass("hair2-look-right");
          $(".ear1").addClass("ear1-look-right");
          $(".ear2").addClass("ear2-look-right");
          $(".hairfront").addClass("hairfront-look-right");
          $(".hairfront2").addClass("hairfront2-look-right");
          $(".hairfront3").addClass("hairfront3-look-right");
          $(".eye1").addClass("eye1-look-right");
          $(".eye2").addClass("eye2-look-right");
          $(".nose").addClass("nose-look-right");
          $(".mouth").addClass("mouth-look-right");
          $(".neck").addClass("neck-look-right");
          $(".avatarBG").addClass("avatarBG-look-right");

          $("#avatarcontainer .avatarBG:first-child").css("box-shadow","-12px 0px 50px #86ffef");
        }
          //look down
        if( e.clientY >= (window.innerHeight -(window.innerHeight/2.5))) {
          removeClasses();

          $(".head").addClass("head-look-down");
          $(".hair").addClass("hair-look-down");
          $(".hair2").addClass("hair2-look-down");
          $(".ear1").addClass("ear1-look-down");
          $(".ear2").addClass("ear2-look-down");
          $(".hairfront").addClass("hairfront-look-down");
          $(".hairfront2").addClass("hairfront2-look-down");
          $(".hairfront3").addClass("hairfront3-look-down");
          $(".eye1").addClass("eye1-look-down");
          $(".eye2").addClass("eye2-look-down");
          $(".nose").addClass("nose-look-down");
          $(".mouth").addClass("mouth-look-down");
          $(".neck").addClass("neck-look-down");
          $(".avatarBG").addClass("avatarBG-look-down");

          $("#avatarcontainer .avatarBG:first-child").css("box-shadow","0px -12px 50px #86ffef");
        }

        // look up  
        if( e.clientY <= ((window.innerHeight/2.5))) { 
          removeClasses();

          $(".head").addClass("head-look-up");
          $(".hair").addClass("hair-look-up");
          $(".hair2").addClass("hair2-look-up");
          $(".ear1").addClass("ear1-look-up");
          $(".ear2").addClass("ear2-look-up");
          $(".hairfront").addClass("hairfront-look-up");
          $(".hairfront2").addClass("hairfront2-look-up");
          $(".hairfront3").addClass("hairfront3-look-up");
          $(".eye1").addClass("eye1-look-up");
          $(".eye2").addClass("eye2-look-up");
          $(".nose").addClass("nose-look-up");
          $(".mouth").addClass("mouth-look-up");
          $(".neck").addClass("neck-look-up");
          $(".avatarBG").addClass("avatarBG-look-up");

          $("#avatarcontainer .avatarBG:first-child").css("box-shadow","0px 12px 50px #86ffef");
        }

        // look down right 
        if( e.clientY >= (window.innerHeight -(window.innerHeight/2.5)) && e.clientX >= (window.innerWidth-(window.innerWidth/3))) { 
          removeClasses();
          
          $(".head").addClass("head-look-down-right");
          $(".hair").addClass("hair-look-down-right");
          $(".hair2").addClass("hair2-look-down-right");
          $(".ear1").addClass("ear1-look-down-right");
          $(".ear2").addClass("ear2-look-down-right");
          $(".hairfront").addClass("hairfront-look-down-right");
          $(".hairfront2").addClass("hairfront2-look-down-right");
          $(".hairfront3").addClass("hairfront3-look-down-right");
          $(".eye1").addClass("eye1-look-down-right");
          $(".eye2").addClass("eye2-look-down-right");
          $(".nose").addClass("nose-look-down-right");
          $(".mouth").addClass("mouth-look-down-right");
          $(".neck").addClass("neck-look-down-right");
          $(".avatarBG").addClass("avatarBG-look-down-right");

          $("#avatarcontainer .avatarBG:first-child").css("box-shadow","-12px -12px 50px #86ffef");
        }

        // look down left
        if( e.clientY >= (window.innerHeight -(window.innerHeight/2.5)) &&  e.clientX<= window.innerWidth/3) {
          removeClasses();
          
          $(".head").addClass("head-look-down-left");
          $(".hair").addClass("hair-look-down-left");
          $(".hair2").addClass("hair2-look-down-left");
          $(".ear1").addClass("ear1-look-down-left");
          $(".ear2").addClass("ear2-look-down-left");
          $(".hairfront").addClass("hairfront-look-down-left");
          $(".hairfront2").addClass("hairfront2-look-down-left");
          $(".hairfront3").addClass("hairfront3-look-down-left");
          $(".eye1").addClass("eye1-look-down-left");
          $(".eye2").addClass("eye2-look-down-left");
          $(".nose").addClass("nose-look-down-left");
          $(".mouth").addClass("mouth-look-down-left");
          $(".neck").addClass("neck-look-down-left");
          $(".avatarBG").addClass("avatarBG-look-down-left");

          $("#avatarcontainer .avatarBG:first-child").css("box-shadow","12px -12px 50px #86ffef");
        }

        //  look up right 
        if( e.clientY <= ((window.innerHeight/2.5)) && e.clientX >= (window.innerWidth-(window.innerWidth/3))) { 
          removeClasses();
          
          $(".head").addClass("head-look-up-right");
          $(".hair").addClass("hair-look-up-right");
          $(".hair2").addClass("hair2-look-up-right");
          $(".ear1").addClass("ear1-look-up-right");
          $(".ear2").addClass("ear2-look-up-right");
          $(".hairfront").addClass("hairfront-look-up-right");
          $(".hairfront2").addClass("hairfront2-look-up-right");
          $(".hairfront3").addClass("hairfront3-look-up-right");
          $(".eye1").addClass("eye1-look-up-right");
          $(".eye2").addClass("eye2-look-up-right");
          $(".nose").addClass("nose-look-up-right");
          $(".mouth").addClass("mouth-look-up-right");
          $(".neck").addClass("neck-look-up-right");
          $(".avatarBG").addClass("avatarBG-look-up-right");

          $("#avatarcontainer .avatarBG:first-child").css("box-shadow","-12px 12px 50px #86ffef");
        }

        // look up left
        if( e.clientY <= ((window.innerHeight/2.5)) &&  e.clientX<= window.innerWidth/3) {
          removeClasses();
          
          $(".head").addClass("head-look-up-left");
          $(".hair").addClass("hair-look-up-left");
          $(".hair2").addClass("hair2-look-up-left");
          $(".ear1").addClass("ear1-look-up-left");
          $(".ear2").addClass("ear2-look-up-left");
          $(".hairfront").addClass("hairfront-look-up-left");
          $(".hairfront2").addClass("hairfront2-look-up-left");
          $(".hairfront3").addClass("hairfront3-look-up-left");
          $(".eye1").addClass("eye1-look-up-left");
          $(".eye2").addClass("eye2-look-up-left");
          $(".nose").addClass("nose-look-up-left");
          $(".mouth").addClass("mouth-look-up-left");
          $(".neck").addClass("neck-look-up-left");
          $(".avatarBG").addClass("avatarBG-look-up-left");

          $("#avatarcontainer .avatarBG:first-child").css("box-shadow","12px 12px 50px #86ffef");
        }

        if( e.clientX >  window.innerWidth/3 &&  e.clientX < (window.innerWidth - (window.innerWidth/3)) && 
         e.clientY >  window.innerHeight/2.5 &&  e.clientY < (window.innerHeight - (window.innerHeight/2.5)) ) {
          removeClasses();
          $("#avatarcontainer .avatarBG:first-child").css("box-shadow","none");
        }
      }
      window.addEventListener("mousemove", function (e) {
          direction(e);
      })

      window.addEventListener("click", function (e) {
          direction(e);
      });
      })


      //ABOUT
      $("#about").on("click", function(){
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

    

     


      // $("#menuitem5").on("click", function() {
      //   cube_tl.pause();
      //   TweenMax.to(cube_tl, 0.1, {progress:9.6, ease:Bounce.easeOut});
      // })
      
      // var click = document.getElementById("click");
      // // click.addEventListener("hover", function(){$("#click").addClass("animated pulse");}, false);
      // click.addEventListener("click", function(){$(".contentintro").addClass("animated fadeOutUp");}, false);

      $(".resizable").resizable();




      