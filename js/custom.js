$(window).scroll(function () {
    var sticky = $('.header'),
        scroll = $(window).scrollTop();
    if (scroll >= 70) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});

// Testimonial slides
$('.testimonialSlide').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    useTransform: true,
    autoplay: true,
    dots: false,
    autoplaySpeed: 2000,
    arrows: false,
    centerMode: true,
    margin: 10,
    responsive: [{
        breakpoint: 420,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        }
    }]
});

// FAQ
var accItem = document.getElementsByClassName('faqContainer--list');
var accHD = document.getElementsByClassName('faqContainer--list--title');
for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
    var itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'faqContainer--list closed';
    }
    if (itemClass == 'faqContainer--list closed') {
        this.parentNode.className = 'faqContainer--list open';
    }
}