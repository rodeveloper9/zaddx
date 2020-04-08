// Email Validation
function emailCheck(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase());
};

// Mobile Validation
function mobileCheck(mobile) {
    var re = /^[0-9]*$/;
    var regTest = re.test(mobile);
    if ((mobile.length <= 15 && mobile.length >= 10) || !regTest) {
        return true;
    }
    return false;
};

$(document).ready(function () {
    $("body").on("click", "input", function (event) {
        var name = $(this).attr("name");
        $("." + name).css("display", "none");
    })

    var name, email, skype, number, comment;
    $("#send_email").click(function () {
        name = $("#name").val();
        email = $("#email").val();
        skype = $("#skype").val();
        number = $("#number").val();
        comment = $("#comment").val();

        console.log('Name', name)
        if (name == '') {
            $(".name").css("display", "block");
            return false;
        }

        if (email == '' || !emailCheck(email)) {
            $(".email").css("display", "block");
            return false;
        }

        if (number == '' || !mobileCheck(number)) {
            $(".number").css("display", "block");
            return false;
        }

        $("#send_email").css("display", "none");
        $("#btnLoader").css("display", "inline-block");
        var url = "//" + window.location.hostname;
        $.get(`${url}/send`, { name, email, skype, number, comment }, function (data) {
            if (data == "sent") {
                $("#seccess_message").css("display", "block")
                $("#seccess_message").html("Email has been sent " + "We will get back to you");
                setTimeout(function () {
                    $('#seccess_message').fadeOut('slow');
                }, 3000);
                $("#enquiryForm")[0].reset();
                $("#send_email").css("display", "inline-block");
                $("#btnLoader").css("display", "none");
                getInTouch();
            }
            if (data == "error") {
                $("#error_message").css("display", "block")
                $("#error_message").html("Please try again");
                setTimeout(function () {
                    $('#error_message').fadeOut('slow');
                }, 3000);
                $("#send_email").css("display", "inline-block");
                $("#btnLoader").css("display", "none");
            }
        });
    });
});