$(document).ready(function(){
	$(".development").addClass("animated fadeIn");
	$(".development .intro h1").addClass("animated fadeInRight");
	$(".development").css("display","inline");
    runMobile();
});


var collage_tl = new TimelineMax({repeat:-1, yoyo:true, repeatDelay:0});

      $("#developmentContinue > #click").on("click", function(){
        $(".contentintro").removeClass("animated fadeIn");
        $(".contentintro").addClass("animated bounceOutDown");
        $("#developmentPage2").addClass("block animated fadeIn");

        setTimeout("typewriter1()", 1000);

//COLLAGE
        setTimeout(function() {
          TweenMax.staggerFrom("#collage path", 1, {scale:0, opacity:0, transformOrigin: "0% 100%", ease:Elastic.easeOut}, 0.15)
          collage_tl.staggerTo("#collage path", 1.25, {y:-50, x:50, ease:Power2.easeInOut}, 0.1)
          .staggerTo("#collage path", 1.25, {rotation:5, ease:Power2.easeInOut}, 0.1, 0.5)
          , 1500});

     });

      $("#menuitem1").on("click", function() {
        collage_tl.pause();
        modular_tl.pause();
        modular2_tl.pause();
        $("#devContent2, #devContent3, #devContent4").addClass("hidden")
        $(".devContent").removeClass("hidden").addClass("animated fadeIn");
        $("#devContent1").removeClass("hidden").addClass("animated fadeIn");
        $(".devContent #devContent1 i.fa-times").on("click", function() {
          collage_tl.play();
          $(".devContent").addClass("animated fadeOut");
          $("#devContent1").addClass("animated fadeOut");
          setTimeout(function() {
            $(".devContent").addClass("hidden").removeClass("animated fadeIn fadeOut");
            $("#devContent1").addClass("hidden").removeClass("animated fadeIn fadeOut");
          }, 1000)
        })
      });
      $("#menuitem2").on("click", function() {
        // cube_tl.pause();
        // TweenMax.to(cube_tl, 0.1, {progress:2.4, ease:Bounce.easeOut});
        collage_tl.pause();
        modular_tl.pause();
        modular2_tl.pause();
        $("#devContent1, #devContent3, #devContent4").addClass("hidden")
        $(".devContent").removeClass("hidden").addClass("animated fadeIn");
        $("#devContent2").removeClass("hidden").addClass("animated fadeIn");
          var vid = document.getElementById("wtfdvid");
          vid.autoplay = true;
          vid.load();
        $(".devContent #devContent2 i.fa-times").on("click", function() {
          collage_tl.play();
          $(".devContent").addClass("animated fadeOut");
          $("#devContent2").addClass("animated fadeOut");
          setTimeout(function() {
            $(".devContent").addClass("hidden").removeClass("animated fadeIn fadeOut");
            $("#devContent2").addClass("hidden").removeClass("animated fadeIn fadeOut");
          }, 1000)
        })
      });
      var modular_tl = new TimelineMax({ repeat:-1, yoyo: true, repeatDelay:1.5 });
        modular_tl.to("#A", 0.5, {fill: "#a9ccff", ease:Power4.easeInOut}, 0)
        modular_tl.to("#B", 0.5, {y:-450, ease:Power4.easeInOut}, 0)
        modular_tl.to("#L, #M, #N, #O", 0.5, {y:315, ease:Power4.easeInOut}, 0)
        modular_tl.to("#D", 0.5, {y:150, scaleY:2, ease:Power4.easeInOut}, 0)
        modular_tl.to("#H", 0.5, {y:150, x:-250, ease:Power4.easeInOut}, 0)
        modular_tl.to("#P", 0.5, {scaleY:0.4, scaleX:0.8, x:65, ease:Power4.easeInOut}, 0)
        modular_tl.to("#C", 0.5, {y:300, x:-100, scaleX:1.5, scaleY:2, ease:Power4.easeInOut}, 0)
        modular_tl.to("#E", 0.5, {x:125, scaleY:4, scaleX:2, transformOrigin:"100% 0%", ease:Power4.easeInOut}, 0)
        modular_tl.to("#I", 0.5, {y:82, x:-90, scale:0.75, ease:Power4.easeInOut}, 0)
        modular_tl.to("#J", 0.5, {y:100, x:-50, scale:0.75, ease:Power4.easeInOut}, 0)
        modular_tl.to("#K", 0.5, {y:0, x:-150, scale:0.75, ease:Power4.easeInOut}, 0)
        modular_tl.to("#F", 0.5, {y:-665, x:-75, scaleY: 0.45, scaleX:0.3, ease:Power4.easeInOut}, 0)
        modular_tl.to("#G", 0.5, {y:140, x:-110, scaleY:0.35, scaleX:2, ease:Power4.easeInOut}, 0)
        modular_tl.to("#W", 0.5, {scaleY:30, scaleX:2.5, y:-100, x:-50, ease:Power4.easeInOut}, 0)
        modular_tl.to("#X", 0.5, {scaleY:30, scaleX:2.5, y:-50, ease:Power4.easeInOut}, 0)
        modular_tl.to("#S", 0.5, {scaleY:0.2, scaleX:2, y:-110, x:80, ease:Power4.easeInOut}, 0)
        modular_tl.to("#T", 0.5, {scaleY:0.2, scaleX:2, y:10, x:-180, ease:Power4.easeInOut}, 0)
        modular_tl.to("#U", 0.5, {y:-140, x:70, ease:Power4.easeInOut}, 0)
        modular_tl.to("#V", 0.5, {y:-65, x:-70, ease:Power4.easeInOut}, 0)
      modular_tl.pause();

      var modular2_tl = new TimelineMax({ repeat:-1 });
        modular2_tl.add( TweenMax.from("#wire1", 0.5, { y:400, scale:0, opacity: 0, transformOrigin: "50% 50%", repeat:1,  repeatDelay: 0.75, yoyo: true, ease:Power4.easeInOut}));
        modular2_tl.add( TweenMax.from("#wire2", 0.5, { y:-400, scale:0, opacity: 0, transformOrigin: "50% 50%", repeat:1, repeatDelay: 1.5, yoyo: true, ease:Power4.easeInOut}), "-=0.5");
        modular2_tl.to("#pie", 1, { rotation: 360, transformOrigin: "50% 50%", repeat: 1, repeatDelay: 0.5, ease:Expo.easeInOut}, 0)
        modular2_tl.add( TweenMax.to("#barRed", 1, { scaleX: 2.5, transformOrigin: "0% 50%", repeat:1, yoyo: true, ease:Power2.easeInOut}), 0);
        modular2_tl.add( TweenMax.to("#barPurple", 1.5, { scaleX: 3, transformOrigin: "0% 50%", repeat:1, yoyo: true, ease:Power2.easeInOut}), 0);
        modular2_tl.add( TweenMax.to("#meterRed", 1.25, { scaleY: 10, transformOrigin: "50% 100%", repeat:1, yoyo: true, ease:Expo.easeInOut}), 0);
        modular2_tl.add( TweenMax.to("#circ1", 1.5, { y:250, scale: 0.5, repeat:1, yoyo: true, ease:Elastic.easeInOut}), 0);
        modular2_tl.add( TweenMax.to("#circ2", 1.5, { y:125, scale: 0.75, repeat:1, yoyo: true, ease:Elastic.easeInOut}), 0.25);

      modular2_tl.pause();

      $("#menuitem3").on("click", function() {
        // cube_tl.pause();
        collage_tl.pause();
        // TweenMax.to(cube_tl, 0.1, {progress:4.8, ease:Bounce.easeOut});
        $("#devContent1, #devContent2, #devContent4").addClass("hidden")
        $(".devContent").removeClass("hidden").addClass("animated fadeIn");
        $("#devContent3").removeClass("hidden").addClass("animated fadeIn");
        modular_tl.play();
        modular2_tl.play();
        $(".devContent #devContent3 i.fa-times").on("click", function() {
          collage_tl.play();
          modular_tl.pause();
          modular2_tl.pause();
          $(".devContent").addClass("animated fadeOut");
          $("#devContent3").addClass("animated fadeOut");
          setTimeout(function() {
            $(".devContent").addClass("hidden").removeClass("animated fadeIn fadeOut");
            $("#devContent3").addClass("hidden").removeClass("animated fadeIn fadeOut");
          }, 1000)
        })
      });
      $("#menuitem4").on("click", function() {
        // cube_tl.pause();
        collage_tl.pause();
        // TweenMax.to(cube_tl, 0.1, {progress:7.2, ease:Bounce.easeOut});
        modular_tl.pause();
        modular2_tl.pause();
        $("#devContent1, #devContent2, #devContent3").addClass("hidden")
        $(".devContent").removeClass("hidden").addClass("animated fadeIn");
        $("#devContent4").removeClass("hidden").addClass("animated fadeIn");
        $(".devContent #devContent4 i.fa-times").on("click", function() {
          collage_tl.play();
          $(".devContent").addClass("animated fadeOut");
          $("#devContent4").addClass("animated fadeOut");
          setTimeout(function() {
            $(".devContent").addClass("hidden").removeClass("animated fadeIn fadeOut");
            $("#devContent4").addClass("hidden").removeClass("animated fadeIn fadeOut");
          }, 1000)
        })
      });

//Knight
      $("#armorPurple").on("click", function() {
        $("#armor > path").css("fill", "#A05A85");
        $("#armor #armorShadow path").css("fill", "#722852");
      });
      $("#armorOrange").on("click", function() {
        $("#armor > path").css("fill", "#CC8348");
        $("#armor #armorShadow path").css("fill", "#995526");
      });
      $("#armorGrey").on("click", function() {
        $("#armor > path").css("fill", "#91939B");
        $("#armor #armorShadow path").css("fill", "#727B8E");
      });
      $("#tunicYellow").on("click", function() {
        $("#tunic .knight45").css("fill", "#FFF799");
        $("#tunic .knight48").css("fill", "#DDC578");
        $("#knight #tunic2").css("fill", "#DDC578");
      });
      $("#tunicGreen").on("click", function() {
        $("#tunic .knight45").css("fill", "#C0F4A2");
        $("#tunic .knight48").css("fill", "#478652");
        $("#knight #tunic2").css("fill", "#478652");
      });
      $("#tunicBlue").on("click", function() {
        $("#tunic .knight45").css("fill", "#85D5E8");
        $("#tunic .knight48").css("fill", "#7DADB5");
        $("#knight #tunic2").css("fill", "#7DADB5");
      });
      $("#plumageBlue").on("click", function() {
        $("#plumage path:nth-child(1)").css("fill", "#216AC1");
        $("#plumage path:nth-child(2)").css("fill", "#9DCBFC");//highlight
        $("#plumage path:nth-child(3)").css("fill", "#284E8C");//core
      });
      $("#plumageRed").on("click", function() {
        $("#plumage path:nth-child(1)").css("fill", "#C11B1B");
        $("#plumage path:nth-child(2)").css("fill", "#eeadc3");
        $("#plumage path:nth-child(3)").css("fill", "#891B3D");
      });
      $("#plumagePurple").on("click", function() {
        $("#plumage path:nth-child(1)").css("fill", "#9C6BAF");
        $("#plumage path:nth-child(2)").css("fill", "#F4C5F9");
        $("#plumage path:nth-child(3)").css("fill", "#775C96");
      });
      var knight_tl = new TimelineMax({repeat: -1, repeatDelay: 3});
        knight_tl.add(TweenMax.fromTo("#mustachio path", 0.075, {scaley:1, scalex:1}, {scaleY:1.4, scaleX:0.5, y:-35, transformOrigin: "50% 50%", yoyo: true, repeat: 1, ease:Power0.easeInOut}));

      $("#knight #colors g g").hover(function() {
        TweenMax.to(this, 0.1, {x:-10, y:-10, scale:1.2})
        $(this).children("path:nth-child(1)").css("fill", "#FFF");
      },
      function() {
        TweenMax.to(this, 0.1, {x:0, y:0, scale:1})
        $(this).children("path:nth-child(1)").css("fill", "#7f497c");
      });

//MOBILE
      var tmax_opts3 = {
        delay: 0.5,
        repeat: 0,
        repeatDelay: 0.25,
        yoyo: true
      };

      var tmax_t3           = new TimelineMax(tmax_opts3),
          mobile_shapes   = $('#mobile').children(),
          mobile_stagger  = 0.00475,
          mobile_duration = 1.5;

      var mobile_staggerFrom = {
        scale: 0,
        opacity: 0,
        transformOrigin: 'center center',
      };

      var mobile_staggerTo = {
        opacity: 1,
        scale: 1,
        ease: Elastic.easeInOut
      };
      function runMobile() {
      tmax_t3.staggerFromTo(mobile_shapes, mobile_duration, mobile_staggerFrom, mobile_staggerTo, mobile_stagger, 0);
    };


var back = document.getElementsByClassName("btn-hamburger")[0];

      $('.back').hover(function(){
          $("#home").addClass("animated fadeInLeft");
        },
        function() {
          $("#home").removeClass("animated fadeInLeft");
        });
      back.addEventListener("click", function(){location.reload();});