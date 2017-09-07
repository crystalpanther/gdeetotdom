$(document).ready(function () {
    var $window = $(window),
        $card1 = $('.ged_page__bottom-bar_other-sale'),
        $card2 = $('.slider-wrapper');

    toggleSlick = function () {
        if ($window.width() < 976) {
          $card1.not('.slick-initialized').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            adaptiveHeight: false
          });
          $card2.not('.slick-initialized').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            adaptiveHeight: false,
            responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '60px',
                    slidesToShow: 2
                  }
                },
                    {
                      breakpoint: 590,
                      settings: {
                        arrows: false,
                        centerMode: true,
                        slidesToShow: 1
                    }
                },
            ]
          });
        }
        else if ($card1.hasClass('slick-initialized')) {
          $card1.slick('unslick');
        }
        else if ($card2.hasClass('slick-initialized')) {
          $card2.slick('unslick');
        }
      }
      $window.resize(toggleSlick);
  toggleSlick();
});
