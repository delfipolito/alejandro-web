$( document ).ready(function(){

  $(".button-collapse").sideNav();

  $(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });
   
  // SLIDES
  $('.instalaciones-gallery').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      },
    ]
  });
  $('.estetica-gallery').slick({
    dots: false,
    infinite: true,
    speed: 500,
    centerMode: true,
    variableWidth: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      },
    ]
  });
  $('.reparadora-gallery').slick({
    dots: false,
    infinite: true,
    speed: 500,
    centerMode: true,
    variableWidth: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      },
    ]
  });

  $('.no-quirurgicos-gallery').slick({
    dots: false,
    infinite: true,
    speed: 500,
    centerMode: true,
    variableWidth: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      },
    ]
  });
})
