(function () {
    $(document).ready(function () {
        $("#danceBtn").on('click tap', function (event) {
            if (event.target.textContent === "I can dance") {
                dance();
                event.target.textContent = "Stop";
            } else {
                clearTimeout(clearout);
                event.target.textContent = "I can dance";
                return;
            }
        })
    });
    var a = 0;
    var clearout;

    function dance() {
        clearout = setTimeout(function () {
            $(".dance").css('background-position', a + 'px 0');
            a = a + 75;
            dance();

        }, 250);
    }
}());


$(document).ready(function () {
    $("#contactForm").validate({
        onfocusout: function (element) {
            $(element).valid();
        },
        highlight: function (element, errorClass) {
            $(element).css('border-color', 'red');
            $(element).parent().siblings().css('color', 'red');
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).css('border-color', 'inherit');
            $(element).parent().siblings().css('color', 'inherit');
        },

        rules: {
            name: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            companyName: {
                required: true
            },
            title: {
                required: true
            },
            phNo: {
                required: true,
                phoneUS: true
            },
            mobNo: {
                phoneUS: true
            },
            faxNo: {
                phoneUS: true
            }
        },
        messages: {
            name: {
                required: "<span class='red padLeft'>Please enter your name</span>",
                minlength: "<span class='red padLeft'>Name should be atleast 3 characters</span>"
            },
            email: {
                required: "<span class='red padLeft'>We need your email address to contact you</span>",
                email: "<span class='red padLeft'>Please enter a valid email address.</span>"
            },
            companyName: {
                required: "<span class='red padLeft'>Please enter your company name</span>"
            },
            title: {
                required: "<span class='red padLeft'>Please enter your title</span>"
            },
            phNo: {
                phoneUS: "<span class='red padLeft'>Phone Number should be valid.</span>",
                required: "<span class='red padLeft'>Please enter your phone number to contact you</span>"
            },
            mobNo: {
                phoneUS: "<span class='red padLeft'>Please enter a valid mobile number.</span>"
            },
            faxNo: {
                phoneUS: "<span class='red padLeft'>Please enter a vaild Fax number.</span>",
            }
        }

    });
});
