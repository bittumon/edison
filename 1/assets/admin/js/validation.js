function ajaxValidation(form, url) {
    $(form).on('submit', function (e) {
        e.preventDefault();
        $.ajax({
            context: this,
            type: "POST",
            url: url,
            data: $(form).serialize(),
            beforeSend: function () {
                $('.ajax-loader').show();
            },
            success: function (response) {
                response = JSON.parse(response);
                if (response.errors) {
                    e.preventDefault();
                    $(form + ' .form-error').html('');
                    var errrors = response.errors;
                    $.each(errrors, function (name, message) {
                         $(form + ' #error_' + name).html(message);
                        $(form + ' #'+name).addClass('is-invalid');
                        $(form + ' #'+name).parent('.form-group').append('<div class="invalid-feedback">'+message+'</div>');
                    });
                    $('.ajax-loader').hide();
                    jQuery.NotificationApp.send("Oh snap!", "Please check the form carefully for errors!", "bottom-right", "#bf441d", "error");
                    return false;
                } else {
                    this.submit();
                }
            }
        });
    });
}