$(document).ready(function () {
    $("form.contact__form--form").on("submit", function () {
        var form = $(this);
        var url = form.attr('action');

        $.ajax({
            type: "POST",
            url: url,
            data:  form.serialize(),
            success: function(data)
            {
                var message = data['message'];
                $(".contact__form").replaceWith(message);
            }
        });
        event.preventDefault();
    })
});
