$(document).ready(function(){
    $('.carousel__inner').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 1400,
        cssEase: 'linear',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 2,
                focusOnSelect: true,
                autoplay: true,
                autoplaySpeed: 1400,
                cssEase: 'linear',
              }
            },
            {
                breakpoint: 475,
                settings: {
                  centerMode: true,
                  centerPadding: '0px',
                  slidesToShow: 1,
                  focusOnSelect: true,
                  autoplay: true,
                  autoplaySpeed: 1400,
                  cssEase: 'linear',
                }
              },
        ]
    });
});