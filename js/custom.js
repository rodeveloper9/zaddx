// Header Footer Include File
$(function () {
    $("#header").load("header");
    $("#footer").load("footer");
    $("#bottomRight").load("bottomRight");
});

// Mobile Menu
function openNav(type) {
    var bodyData = document.querySelector('html');
    if (type == 'open') {
        document.getElementById("sideNav").style.width = "100%";
    }

    if (type == 'close') {
        document.getElementById("sideNav").style.width = "0";
    }
    bodyData.classList.toggle("modalScroll");
}

//Function to show hide modal
function showModal(id, showClass) {
    var queryData = document.querySelector(id);
    var bodyData = document.querySelector('html');
    queryData.classList.toggle(showClass);
    bodyData.classList.toggle("modalScroll");
}

// Function to close modal
function hideModal(id, showClass) {
    var queryData = document.querySelector(id);
    var bodyData = document.querySelector('html');
    queryData.classList.toggle(showClass);
    bodyData.classList.toggle("modalScroll");
}

function showSubmenu () {
    document.getElementById('subMenu').style.display = 'block'
}

// To load offer form and check cookie
$(window).on("load", function () {
    var offer = getCookie("offer");
    if (offer === null) {
        showModal('#offerModal', 'staticmodal-on')
    }
});

// Close popup outside click 
$(document).click(function (event) {
    //if you click on anything except the modal itself or the "open modal" link, close the modal
    if (!$(event.target).closest(".staticmodal, .staticmodal-on").length) {
        $("body").find(".staticmodal").removeClass("staticmodal-on");
    }
});

// To set cookie once user submit form
function checkCookie() {
    var offer = document.getElementById('offerNumber').value;
    if (offer === '') { '' }
    else { setCookie("offer", true, 8589589); }
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

// Close FAQ outside click 
$(document).click(function (event) {
    if (!$(event.target).closest(".faqContainer--list, .open").length) {
        $("body").find(".faqContainer--list").removeClass("open");
        $("body").find(".faqContainer--list").addClass("closed");
    }
});

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

// function for show more and less
$(document).ready(function () {
    var showChar = 100;  // How many characters are shown by default
    var ellipsestext = "...";
    var moreText = "Read More";
    var lessText = "Read Less";

    $('.showMore').each(function () {
        var content = $(this).html();

        if (content.length > showChar) {
            var showText = content.substr(0, showChar);
            var hideText = content.substr(showChar, content.length - showChar);

            var html = showText + '<span class="moreEllipses">' + ellipsestext + '&nbsp;</span><span class="moreContent"><span>' + hideText + '</span><a href="" class="moreLink">' + moreText + '</a></span>';

            $(this).html(html);
        }

    });

    $(".moreLink").click(function () {
        if ($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moreText);
        } else {
            $(this).addClass("less");
            $(this).html(lessText);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});