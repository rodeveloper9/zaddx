// To load offer form and check cookie
$(window).on("load", function () {
    var offer = getCookie("offer");
    if (offer === null) {
        var queryData = document.querySelector('#offerModal');
        var bodyData = document.querySelector('html');
        queryData.classList.toggle("staticmodal-on");
        bodyData.classList.toggle("modalScroll");
    }
});

// To close Offer form 
function modalDelete() {
    var queryData = document.querySelector('#offerModal');
    var bodyData = document.querySelector('html');
    queryData.classList.toggle("staticmodal-on");
    bodyData.classList.toggle("modalScroll");
};
// To set cookie once user submit form
function checkCookie() {
    // Get cookie using our custom function
    var offer = document.getElementById('offerNumber').value;
    if (offer === '') { console.log('Offer Value') }
    else { setCookie("offer", true, 1); }
};

// On scroll header fixed
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

// Countdown Timer
setInterval(function time() {
    var dateTime = new Date();
    var hours = 24 - dateTime.getHours() - 1;
    var min = 60 - dateTime.getMinutes();
    if ((min + '').length == 1) {
        min = '0' + min;
    }
    var sec = 60 - dateTime.getSeconds();
    if ((sec + '').length == 1) {
        sec = '0' + sec;
    }
    $('#timer').html(hours + ':' + min + ':' + sec)
}, 1000);