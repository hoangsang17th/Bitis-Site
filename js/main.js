/** First Slider */
$(".slider-one")
.not(".slick-intialized")
.slick({
    autoplay:true,
    autoplaySpeed:3000,
    dots:true,
    prevArrow: ".site-slider .slider-btn .prev",
    nextArrow: ".site-slider .slider-btn .next",
});
// Khi cửa sổ được load sẽ tự gọi hàm alert ra
$(window).on('load', function () {
    alert("Chào các tình yêu, mua sắm vui vẻ nhé! \nNhập mã HoàngSang để được giảm 90% nhé!");
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});
    $('#myCollapsible').collapse({
        toggle: false
});
    $('.carousel').carousel();
