$(document).ready(function() {
	$(".illustration").addClass("animated fadeIn");
	$(".illustration .intro h1").addClass("animated fadeInLeft");
	$(".illustration").css("display","inline");
	    runLandscape();
});

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
        $(".workContent").css("height","100vh");
        $(".absolute-bg").css("background-size","cover");
        $("#illustrationPage2 .ex").addClass("animated fadeIn block").css("top","4%");
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
        $(".workContent").css("background-color","#e1fcc4");
      });
      $("#container3").on("click", function(){
        $("#illustrationCase3Content").addClass("block animated bounceInUp");
        $(".workContent").css("background-color","#6da089");
      });
      $("#container4").on("click", function(){
        $("#illustrationCase4Content").addClass("block animated bounceInUp");
        $(".workContent").css("background-color","#73bdc8");
      });
      $("#container5").on("click", function(){
        $("#illustrationCase5Content").addClass("block animated bounceInUp");
        $(".workContent").css("background-color","#cf6d6d");
      });

      $("#illustrationPage2 .ex").on("click", function() {
        $(".work-master").css("height","80vh");
        $(".workContent").css("height","20vh");
        $(".absolute-bg").css("background-size","contain");
        $(".workContent").css("background-color","#f9ffd7");
        $("#illustrationPage2 .ex").removeClass("animated fadeIn block");
        $(".workContentContainer").addClass("animated bounceOutDown");
        setTimeout(function() {
          $(".workContentContainer").removeClass("block animated bounceOutDown");
        }, 1000);
      });
      $("#illustrationCase1Content .row #pic1").on("click", function() {
        $("#illustrationCase1Content #pic1open").removeClass("hidden").addClass("block animated zoomIn");
        $("#illustrationCase1Content #pic1open").backgroundDraggable();
      });
      $("#illustrationCase1Content .row #pic2").on("click", function() {
        $("#illustrationCase1Content #pic2open").removeClass("hidden").addClass("block animated zoomIn");
        $("#illustrationCase1Content #pic2open").backgroundDraggable();
      });
      $("#illustrationCase1Content .row #pic3").on("click", function() {
        $("#illustrationCase1Content #pic3open").removeClass("hidden").addClass("block animated zoomIn");
        $("#illustrationCase1Content #pic3open").backgroundDraggable();
      });
      $("#illustrationCase1Content .row #pic4").on("click", function() {
        $("#illustrationCase1Content #pic4open").removeClass("hidden").addClass("block animated zoomIn");
        $("#illustrationCase1Content #pic4open").backgroundDraggable();
      }); 
      $("#illustrationCase2Content .row #pic1").on("click", function() {
        $("#illustrationCase2Content #pic1open").removeClass("hidden").addClass("block animated zoomIn");
        $("#illustrationCase2Content #pic1open").backgroundDraggable();
      });
      $("#illustrationCase2Content .row #pic2").on("click", function() {
        $("#illustrationCase2Content #pic2open").removeClass("hidden").addClass("block animated zoomIn");
        $("#illustrationCase2Content #pic2open").backgroundDraggable();
      });
      $("#illustrationCase2Content .row #pic3").on("click", function() {
        $("#illustrationCase2Content #pic3open").removeClass("hidden").addClass("block animated zoomIn");
        $("#illustrationCase2Content #pic3open").backgroundDraggable();
      });
      $("#illustrationCase2Content .row #pic4").on("click", function() {
        $("#illustrationCase2Content #pic4open").removeClass("hidden").addClass("block animated zoomIn");
        $("#illustrationCase2Content #pic4open").backgroundDraggable();
      });
      $("#illustrationCase3Content .row #pic1").on("click", function() {
        $("#illustrationCase3Content #pic1open").removeClass("hidden").addClass("block animated zoomIn");
        $("#illustrationCase3Content #pic1open").backgroundDraggable();
      });
      $("#illustrationCase3Content .row #pic2").on("click", function() {
        $("#illustrationCase3Content #pic2open").removeClass("hidden").addClass("block animated zoomIn");
        $("#illustrationCase3Content #pic2open").backgroundDraggable();
      });
      $("#illustrationCase3Content .row #pic3").on("click", function() {
        $("#illustrationCase3Content #pic3open").removeClass("hidden").addClass("block animated zoomIn");
        $("#illustrationCase3Content #pic3open").backgroundDraggable();
      });
      $("#illustrationCase3Content .row #pic4").on("click", function() {
        $("#illustrationCase3Content #pic4open").removeClass("hidden").addClass("block animated zoomIn");
        $("#illustrationCase3Content #pic4open").backgroundDraggable();
      });
      $("#illustrationCase4Content .row #pic1").on("click", function() {
        $("#illustrationCase4Content #pic1open").removeClass("hidden").addClass("block animated zoomIn");
        $("#illustrationCase4Content #pic1open").backgroundDraggable();
      });
      $("#illustrationCase4Content .row #pic2").on("click", function() {
        $("#illustrationCase4Content #pic2open").removeClass("hidden").addClass("block animated zoomIn");
        $("#illustrationCase4Content #pic2open").backgroundDraggable();
      });
      $("#illustrationCase4Content .row #pic3").on("click", function() {
        $("#illustrationCase4Content #pic3open").removeClass("hidden").addClass("block animated zoomIn");
        $("#illustrationCase4Content #pic3open").backgroundDraggable();
      });
      $("#illustrationCase4Content .row #pic4").on("click", function() {
        $("#illustrationCase4Content #pic4open").removeClass("hidden").addClass("block animated zoomIn");
        $("#illustrationCase4Content #pic4open").backgroundDraggable();
      });
      $("#illustrationCase5Content i.fa-chevron-right").on("click", function() {
        $("#illustrationCase5Content #vid").removeClass("hidden").addClass("block animated bounceInRight");
        $("#illustrationCase5Content .parallax").addClass("hidden");
        $("#illustrationCase5Content i.fa-chevron-right").addClass("hidden");

//ILLUSTRATION VID
        var vid = document.getElementById("myVideo");
        vid.onplay = function() {
            TweenLite.ticker.addEventListener('tick',vidUpdate());
        };
        vid.onpause = function() {
              TweenLite.ticker.removeEventListener('tick',vidUpdate());
        }
        vid.onended = function() {
              TweenLite.ticker.removeEventListener('tick',vidUpdate());

        }; 
        var maxRX = 360 ,
            vidSpin = document.querySelector('#vidSpin') ,
            thumb = document.querySelector('#rail .thumb') ,
            prog = document.querySelector('#rail .prog') ;
        Draggable.create(vidSpin,{
          type:'rotation',
          bounds:{min:0,max:maxRX},
          onDrag:onDrag ,
          onRelease:function(){ vid.play()  }
        });
        Draggable.create(thumb,{
          type:'x',
          bounds:{minX:0,maxX:maxRX},
          onDrag:onDrag ,
          onRelease:function(){ vid.play()  }
        });
        function onDrag(){
          vid.currentTime = (this.x/maxRX)*vid.duration;
          if( this.target == spin ){
            TweenLite.set( thumb,{x:this.x}) ;
          }else{
            TweenLite.set( vidSpin,{ rotation : this.x }) ;
          }
          TweenLite.set( prog , { width : this.x }) ;
        };
        function vidUpdate(){
          TweenLite.set( vidSpin , {rotation:(vid.currentTime/vid.duration)*maxRX} ) ;
          TweenLite.set( thumb , {x:(vid.currentTime/vid.duration)*maxRX} ) ;
          TweenLite.set( prog , {width:(vid.currentTime/vid.duration)*maxRX} ) ;
        };
        });
      $(".workContent i.fa-times").on("click", function() {
        $("#pic1open, #pic2open, #pic3open, #pic4open").addClass("hidden").removeClass("block animated zoomIn");
      });

      $("#illustrationContinue > #click").on("click", function(){
        // castParallax();
        $(".contentintro").removeClass("animated fadeIn");
        $(".contentintro").addClass("animated bounceOutUp");
        $("#illustrationPage2").addClass("block animated fadeIn");
      });


var back = document.getElementsByClassName("btn-hamburger")[0];

      $('.back').hover(function(){
          $("#home").addClass("animated fadeInLeft");
        },
        function() {
          $("#home").removeClass("animated fadeInLeft");
        });
      back.addEventListener("click", function(){location.reload();});