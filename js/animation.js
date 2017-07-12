$(document).ready(function(){
	$(".animation").addClass("animated fadeIn");
	$(".animation .intro h1").addClass("animated fadeInLeft");
	$("#octopusSpin").addClass("animated rotateInDownRight");
	$(".animation").css("display","inline");
	        runAnimationText();
})

//ANIMATION NAVIGATION
      // $("#webAnim .gifChange").hover(function() {
      //   var src = $(this).attr("src");
      //   $(this).attr("src", src.replace(/\.png$/i, ".gif"));
      // },
      // function() {
      //   var src = $(this).attr("src");
      //   $(this).attr("src", src.replace(/\.gif$/i, ".png"));
      // });

      $("#animationPage2 > .pageRight ul li").hover(function() {
        $(this).parent().css("padding-top","15%");
        $(this).css("font-size","4vw");
        $(this).next().css("font-size","2.5vw");
        $(this).prev().css("font-size","2.5vw");
      },
      function () {
        $(this).parent().css("padding-top","20%");
        $(this).css("font-size","3vw");
        $(this).next().css("font-size","3vw");
        $(this).prev().css("font-size","3vw");
      })
      $(".pageRight ul li:first-child").on("click", function() {
        $("#animationContent1").addClass("block animated bounceInDown")
        $(".pageLeft").css("width","90vw");
        $(".pageRight").css("width","10vw");
        $(".pageRight ul").hide();
        $("#animationPage2 .ex").addClass("block");
      })
      $(".pageRight ul li:nth-child(2)").on("click", function() {
        $("#animationContent2").addClass("block animated bounceInDown")
        $(".pageLeft").css({"width":"90vw","background-color":"#660058"});
        $(".pageRight").css("width","10vw");
        $(".pageRight ul").hide();
        $("#animationPage2 .ex").addClass("block");


        var spin_tl = new TimelineMax({}),
        progressSlider = document.getElementById("progressSlider");

        spin_tl.addPause(0);
        spin_tl.to("#fan", 0, {y: 45, x: 52, ease:Linear.easeNone}, 0)
          .to("#fan_1", 0, {y: 72, x: 68, ease:Linear.easeNone}, 0)
          .to("#fan_2", 0, {y: 100, x: 100, ease:Linear.easeNone}, 0)
          .to("#bear", 0, {y: -200, x: 200, ease:Linear.easeNone}, 0)
          .from("#planet", 1, {scale: 0, ease:Elastic.easeOut}, 0)
          .to("#bear", 18, {x: -2000, y: 950, repeat: -1, yoyo: true, repeatDelay: 4, ease:Linear.easeNone}, 0)
          .to("#bear", 18, {rotation: 30, repeat: -1, yoyo: true, repeatDelay: 4, ease:Linear.easeNone}, 0)
          .from("#eyes circle", 0.2, {repeat: -1, scaleY: 0, repeatDelay: 4, ease:Power4.easeInOut}, 0)
          .to("#hose", 18, {scaleY: 2, rotation: -25, transformOrigin: "0% 100%", repeat: -1, yoyo: true, repeatDelay: 4, ease:Linear.easeNone}, 0)
          // .to("#eyes circle", 0.5, {repeat: 1, yoyo: true, scaleY: 0, ease:Power4.easeInOut}, 3)
          // .to("#eyes circle", 0.5, {repeat: 1, yoyo: true, scaleY: 0, ease:Power4.easeInOut}, 7)
          // .to("#eyes circle", 0.5, {repeat: 1, yoyo: true, scaleY: 0, ease:Power4.easeInOut}, 14)
          .staggerFrom("#planetinterior path", 1, {scale: 0, ease:Elastic.easeOut}, 0.02, 0)
          .staggerFrom("#moon circle, #moon ellipse", 1, {scale: 0, ease:Elastic.easeOut}, 0.035, 0.5)
          .staggerFrom("#stars circle", 1, {scale: 0, ease:Elastic.easeOut}, 0.025, 0.35)
          .staggerFrom("#structures polygon, #structures path, #tweens", 1, {scale: 0, ease:Elastic.easeOut}, 0.02, 0)
          .to("#structures", 22, {repeat: -1, rotation: 360, transformOrigin: "49% 60.5%", ease:Linear.easeNone}, 0)
          .to("#fan", 1.5, {repeat: -1, rotation: 360, transformOrigin: "55% 45%", ease:Linear.easeNone}, 0)
          .to("#fan_1", 1.75, {repeat: -1, rotation: 360, transformOrigin: "50% 53%", ease:Linear.easeNone}, 0)
          .to("#fan_2", 2, {repeat: -1, rotation: 360, transformOrigin: "50% 53%", ease:Linear.easeNone}, 0)
          .to("#planetinterior", 18, {repeat: -1, rotation: 360, transformOrigin: "65% 60%", ease:Linear.easeNone}, 0)
          .staggerFromTo("#tweens circle", 1, {repeat: -1, opacity: 1, scale: 0.4}, {repeat: -1, opacity: 0, scale: 1, ease:Circ.easeOut}, 0.1, 0)
   
          $("#animationContent2 button").on("click", function() {
            spin_tl.paused(!spin_tl.paused());
          })

        //CITYANIMATION
          
          // var house = document.getElementById("housewalls")
          // var houseBound = house.getBBox();
          // var newBox = "" + (houseBound.x - 150) + " " + (houseBound.y - 200) + " " + 800 + " " + 700;

          // var city_tl = new TimelineLite({ onUpdate:adjustUI }),
          //     progressSlider = document.getElementById("progressSlider");
          // city_tl.addPause(0);
          // city_tl.from("#housewalls", 1, {scaleX: 0.5, transformOrigin: "50% 100%", ease:Elastic.easeOut})
          //   .from("#housewalls", 1, {scaleY: 0.7, transformOrigin: "50% 100%", ease:Elastic.easeOut}, "-=0.5")
          //   .from("#door, #doorway, #doorwindow", 1, {y: 40, ease:Power4.easeOut}, "-=1")
          //   .from("#stair, #stair-2", 1, {scale: 0, opacity: 0, ease:Elastic.easeOut}, "-=0.5")
          //   .staggerFrom("#window-2", 1, {scale: 0.5, x: -50, transformOrigin: "0% 50%", ease:Elastic.easeOut}, 0.02, "-=1" )
          //   .staggerFrom("#window", 1, {scale: 0.5, x: 50, transformOrigin: "100% 50%", ease:Elastic.easeOut}, 0.02, "-=1" )
          //   .from("#window-3, #window-5, #window-4", 1, {scale: 0, opacity: 0, ease:Elastic.easeOut}, "-=1")
          //   .from("#roof", 1, {scaleX: 0.6, scaleY: 0.4, y: 80, transformOrigin: "50% 100%", ease:Elastic.easeOut}, "-=1.5")
          //   .from("#roofwindow, #roofwindow-2, #attic, #attic-2", 1, {scale: 0, opacity: 0, transformOrigin: "50% 50%", ease:Elastic.easeOut}, "-=0.5")
          //   .from("#houseshadow", 1, {scale: 0, opacity: 0, transformOrigin: "50% 50%", ease:Elastic.easeOut}, "-=1.5")
          //   .from("#city", 2, {attr: { viewBox: newBox}})
          //   .staggerTo("#cranetop7, #cranetop6, #cranetop5", 1, {rotation:25, stagger: 0.002, transformOrigin: "18% 100%"}, 0.3)
          //   .staggerTo("#cranetop1, #cranetop2, #cranetop3, #cranetop4", 1, {rotation:-25, stagger: 0.002, transformOrigin: "82% 100%", ease:Expo.easeInOut}, 0.3, "-=1")
          //   .to("#wood", 0.75, {scaleY:0, transformOrigin: "50% 100%", ease:Elastic.easeIn}, "-=0.5")
          //   .staggerFrom("#cityBG", 0.75, {top:0, opacity:0, scale: 0, delay: 0.5, transformOrigin:"50% 100%", ease:Elastic.easeOut})
          //   .from("#cityMG", 0.75, {top:0, opacity:0, scale: 0, delay: 0.5, transformOrigin:"50% 100%", ease:Elastic.easeOut})
          //   .from("#cityFG", 0.75, {top:0, opacity:0, scale: 0, delay: 0.5, transformOrigin:"50% 100%", ease:Elastic.easeOut})
          //   .to("#cityBackdrop", 1, {backgroundColor: "rgba(43,41,64,1)"}, "-=1")
          //   .to("#cityBackdropInner", 1, {backgroundColor: "#544479"}, "-=1")
          //   .to("#cityBackdropInner2", 1, {backgroundColor: "#9b7566"}, "-=1")
          //   .staggerFrom("#BGLights", 0.1, {opacity: 0}, 0.2)
          //   .staggerFrom("#MGLights", 0.1, {opacity: 0}, 0.2)
          //   .staggerFrom("#FGLights", 0.1, {opacity: 0}, 0.2)
          //   .to("#cranes, #cranetops", 1.5, {top:0, opacity:0, scaleY: 0, transformOrigin:"50% 100%", ease:Elastic.easeIn}, "-=2.5")
          //   .staggerTo("#flowers path", 1.5, {top:0, opacity:0, scale: 0, transformOrigin:"50% 50%", ease:Elastic.easeIn}, 0.04, "-=2")
          //   .to("#ground", 1.5, {fill: "#7a725d"}, "-=1")
          //   .to("#stones path", 1, {fill: "#4F3D38"}, "-=1")
          //   .staggerFrom("#city #window, #window-2, #window-3, #window-4, #window-5", 0.1, {fill: "#5e5e5e", delay:0.5, ease:Elastic.easeInOut}, 0.1)
          //   .staggerFrom("#city #doorwindow, #roofwindow, #roofwindow-2", 0.1, {fill: "#3B3642", delay:0.5, ease:Elastic.easeInOut}, "-=0.1")
          //   .from("#city #rooflight, #rooflight-2", 0.5, {opacity:0, delay:0, ease:Linear.easeNone}, "-=0.2")
          //   .staggerFromTo("#smoke circle", 1, {scale: 0}, {scale: 1.5}, 0.04, 5)
          //   .staggerFromTo("#smoke circle", 1, {opacity: 1, y: 0}, {opacity: 0, y: -700, repeat: 4, repeatDelay: 0, ease: Circ.easeOut}, 0.04, 5)
          // function update(){
          //   city_tl.progress(progressSlider.value).pause();
          //   city_tl.pause();
          // }
          // function adjustUI() {
          //   progressSlider.value = city_tl.progress();
          // }
          // progressSlider.addEventListener("input", update);
          // $("#animationContent2 button").on("click", function() {
          //   city_tl.paused(!city_tl.paused());
          // })
        });
      $(".pageRight ul li:nth-child(3)").on("click", function() {
        $("#animationContent3").addClass("block animated bounceInDown")
        $(".pageLeft").css("width","90vw");
        $(".pageRight").css("width","10vw");
        $(".pageRight ul").hide();
        $("#animationPage2 .ex").addClass("block");
      })
      $(".pageRight ul li:nth-child(4)").on("click", function() {
        $("#animationContent4").addClass("block animated bounceInDown")
        $(".pageLeft").css("width","90vw");
        $(".pageRight").css("width","10vw");
        $(".pageRight ul").hide();
        $("#animationPage2 .ex").addClass("block");
      })
      $("#animationPage2 .ex").on("click", function() {
        $(".pageLeft").css({"width":"60vw","background-color":"#ffaea5"});
        $(".pageRight").css("width","40vw");
        $(".pageRight ul").show();
        $("#animationPage2 .ex").removeClass("block");
        $("#animationPage2 .flex-box").addClass("animated bounceOutUp");
        setTimeout(function() {
          $("#animationPage2 .flex-box").removeClass("block animated bounceOutUp");
        }, 1000);
      });

      $("#film").hover(function() {
        var src = $("#panda").attr("src");
        $("#panda").attr("src", src.replace(/\.png$/i, ".gif"));
      },
      function() {
        var src = $("#panda").attr("src");
        $("#panda").attr("src", src.replace(/\.gif$/i, ".png"));
      });

//ANIMATIONTEXT
      var tmax_opts4 = {
        delay: 0,
        repeat: -1,
        repeatDelay: 0,
        yoyo: true
      };

      var tmax_t4           = new TimelineMax(tmax_opts4),
          AnimationText_shapes   = $('#animationText path'),
          AnimationText_stagger  = 0.1,
          AnimationText_duration = 0.9;

      var AnimationText_staggerFrom = {
        scaleY: 1,
        transformOrigin: 'center center',
      };

      var AnimationText_staggerTo = {
        scaleY: 1.4,
        ease: Elastic.easeInOut
      };
      function runAnimationText() {
      tmax_t4.staggerFromTo(AnimationText_shapes, AnimationText_duration, AnimationText_staggerFrom, AnimationText_staggerTo, AnimationText_stagger, 0);
    };



    //SVGAnimationText
    var tmax_opts5 = {
      delay: 0.25,
      //makes it repeat
      repeat: -1,
      repeatDelay: 0.25,
      //makes it run in reverse
      yoyo: true
    };

    var tmax_t5           = new TimelineMax(tmax_opts5),
        SVGpath   = $('#SVGAnimation path'),
        //staggers the individual animations
        SVGpath_stagger  = 0.05,
        SVGpath_duration = 1.5;

    var SVGpath_staggerFrom = {
      scale: 0,
      opacity: 0,
      transformOrigin: 'center center',
    };

    var SVGpath_staggerTo = {
      opacity: 1,
      scale: 1,
      ease: Elastic.easeInOut
    };
    tmax_t5.staggerFromTo(SVGpath, SVGpath_duration, SVGpath_staggerFrom, SVGpath_staggerTo, SVGpath_stagger, 0);


$("#animationContinue > #click").on("click", function(){
        // castParallax();
        $(".contentintro").removeClass("animated fadeIn");
        $(".contentintro").addClass("animated bounceOutLeft");
        $("#animationPage2").addClass("block animated fadeIn");
      });


var back = document.getElementsByClassName("btn-hamburger")[0];

      $('.back').hover(function(){
          $("#home").addClass("animated fadeInLeft");
        },
        function() {
          $("#home").removeClass("animated fadeInLeft");
        });
      back.addEventListener("click", function(){location.reload();});


var back = document.getElementsByClassName("btn-hamburger")[0];

      $('.back').hover(function(){
          $("#home").addClass("animated fadeInLeft");
        },
        function() {
          $("#home").removeClass("animated fadeInLeft");
        });
      back.addEventListener("click", function(){location.reload();});