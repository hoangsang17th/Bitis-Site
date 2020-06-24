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
    var con= confirm("Đăng kí nhận bản tin Hoàng Sang\nĐừng bỏ lỡ hàng ngàn sản phẩm và chương trình siêu hấp dẫn");
    if(con==true){
        location.href = "#footer"
    }
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});
    $('#myCollapsible').collapse({
        toggle: false
});
    $('.carousel').carousel();
