$(function() {
  $('.multiple-items').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
    
  });

  $('.slick-dots li').on('mouseover', function() {
    $('.multiple-items').slick('goTo', $(this).index());
  });
});