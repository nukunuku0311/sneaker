$(function(){



  $(".btn").on("click",function () {
    if($(".btn").hasClass("active")) {
      $(".btn").removeClass("active");
    } else {
      $(".btn").addClass("active");
    }
  });

  $(".btn").on("click",function () {
    if($("#navj").hasClass("active")) {
      $("#navj").removeClass("active");
    } else {
      $("#navj").addClass("active");
    }
  });

  $(".btn").on("click",function () {
    if($(".cover").hasClass("active")) {
      $(".cover").removeClass("active");
    } else {
      $(".cover").addClass("active");
    }
  });
 
  $(".cover").on("click",function () {
    $(".btn").removeClass("active");
    $("#navj").removeClass("active");
    $(".cover").removeClass("active");
  });

  $(".slider").slick({
    arrows: false,
    centerMode: true,
    centerPadding: "100px",
    slidesToShow: 3,
    responsive:[
      {
        breakpoint: 768,
        settings: {
          centerPadding: "50px",
          slidesToShow: 1
        }
      }
    ]
  });



  $(window).scroll(function(){
    $(".animation").each(function(){
      let scroll = $(window).scrollTop();

      let target = $(this).offset().top;

      let windowHeight = $(window).height();

      if(scroll > target - windowHeight + 200) {
        $(this).css("opacity","1");
        $(this).css("tranceform","translateY(0)");
      }
    });
  });

  $("a[href^='#']").click(function(){
    let speed = 800;
    let type = "swing";
    let href = $(this).attr("href");
    let target = $(href == "#index" ? "html" : href);
    let position = target.offset().top;
    $(".btn").removeClass("active");
      $("#navj").removeClass("active");
      $(".cover").removeClass("active");
    $("bode,html").animate({
      scrollTop:position
    },speed,type);
    return false;
  });

 });
