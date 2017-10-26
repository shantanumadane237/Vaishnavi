

$(function () {
    $('#submit').on('click', function () {
        var username = $('#emailid').val();
        var password = $('#pass').val();

        if (!username) {
            bootbox.alert({
                size: "small",
                title: "Login",
                message: "Please enter value for email"

            });
            return;
        }
        if (!password) {
            bootbox.alert({
                size: "small",
                title: "Login",
                message: "Please enter value for password"

            });
            return;
        }
        else {
            var logindata = {
                username, password
            };
            $.ajax({
                type: 'GET',
                url: config.host + config.port + '/admin/checklogin',
                data: logindata,
                success: function (data) {
                    if (data.status == true) {
                        bootbox.alert({
                            size: "small",
                            title: "Login",
                            message: data["msg"],
                            callback: function () {
                                window.location.replace("https://www.google.com")
                            }

                        });
                    }
                    else {
                        bootbox.alert({
                            size: "small",
                            title: "Login",
                            message: data["msg"]

                        });
                    }
                }
            });
        }

    });
});