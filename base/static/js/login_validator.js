$(document).ready(function () {

    var flag_email = false;
    var flag_password = false;

    function change_to_valid(){
        if(flag_email && flag_password){
            $('#id_do_login').removeClass('disabled');
            $('#id_do_login').removeAttr('disabled');
        }else{
            $('#id_do_login').addClass('disabled');
            $('#id_do_login').attr('disabled', 'true');
        }
    }

    button_login_enable_disable();
    valid_login_ajax();

    $('#id_email').keyup(function(){
        if( $(this).val().length > 0 ){
            hiddenErrors($(this));
            $(this).siblings('.errorlist').remove();

            // $(this).after("<span class='msg ok'>"+gettext("Email valid")+"</span>");
            flag_email = true;
            change_to_valid();
        }else{
            showErrors($(this), gettext("Email is empty"));
            $(this).siblings('.errorlist').remove();

            // $(this).after(
            //     "<ul class='errorlist'>"
            //         +"<li>Email is not valid</li>"
            //     +"</ul>"
            // );
            flag_email = false;

            change_to_valid();
        }
    });

    $('#id_password').keyup(function(){
        if( $(this).val().length > 0 ){
            hiddenErrors($(this));
            $(this).siblings('.errorlist').remove();
            // $(this).siblings('span').each(function(){
            //     $(this).remove();
            // });
            // $(this).after("<span class='msg ok'>"+gettext("Email valid")+"</span>");
            flag_password = true;
            change_to_valid();
        }else{
            showErrors($(this), "Password is empty");
            $(this).siblings('.errorlist').remove();
            // $(this).after("<span class='msg wrong'>"+gettext("Email is not valid")+"</span>");
            flag_password = false;
            change_to_valid();
        }
    });

});

function showErrors(target_input, msg_error) {
    target_input.css(
        { 'border-color' : 'red'}
    );
    target_input.after(
        "<ul class='errorlist'>"
            +"<li>" + msg_error + "</li>"
        +"</ul>"
    );
}

function hiddenErrors(target_input) {
    target_input.css(
                { 'border-color' : 'green'}
            );
    $(this).next('.errorlist').remove();
}

function valid_login_ajax() {
    $('#loginForm').submit(function (event) {
        event.preventDefault();

        $.ajaxSetup({
            headers: {"X-CSRFToken": getCookie("csrftoken")}
        });
        $.ajax({
            type: "POST",
            url: "valid_login/",
            data: {
                'email': $('#id_email').val(),
                'password': $('#id_password').val(),
            },
            dataType: "text",
            success: function (response) {
                var resp = $.parseJSON(response);

                if (resp.success) {
                    $('#loginForm').submit();
                } else {
                    // $('#id_email').val('');
                    $('#id_password').val('');
                    showErrors($('#id_email'), gettext(resp.error));
                    showErrors($('#id_password'), gettext(resp.error));
                }
            },
            error: function (rs, e) {
            }
        });
    });
}

// Function that checks if can be login
function button_login_enable_disable() {
    $('#id_do_login').click(function () {
        if ($('#id_email').val() == '' || $('#id_password').val() == '') {
            $('#id_do_login').addClass('disabled');
            $('#id_do_login').attr('disabled', 'disabled');
        }
    });
    $("body").on("click", function (e) {
        $('#id_do_login').removeClass('disabled');
        $('#id_do_login').removeAttr('disabled', 'disabled');
        $('#id_email').css({ 'border-color' : 'none'});
        $('#id_password').css({ 'border-color' : 'none'});
    });
}

// function resetErrors() {
//     $('#loginForm').('form input, form select').removeClass('inputTxtError');
//     $('label.error').remove();
// }

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        var c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            var c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) c_end = document.cookie.length;
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}


// function send_data() {
// $.ajax(
// {
//     url: "valid_login/",
//     dataType: "text",
//     // contentType: "application/x-www-form-urlencoded",
//     type: "POST",
//     data: {'form': $('#loginForm').serialize(), 'csrfmiddlewaretoken': '{{csrf_token}}' },
// })
// .done(function (context) {
//
//     alert("esto es ajax");
//     return false;
// })
// /**
//  * jqXHR: Representa a la respuesta enviada del servidor.
//  * textStatus: Texto donde se muestra el mensaje de error enviado del servidor.
//  * errorThrown: Objeto que representa el error lanzado desde el servidor (Exception).
//  */
// .fail(function (jqXHR, textStatus, errorThrown) {
//     // proceso
// })
// /**
//  * jqXHR/data: si no hay error en vez del objeto jqXHR recibe la data enviada del servidor.
//  * textStatus: Siempre será éste parámetro.
//  * erorThrown/jqXHR: Si no hay error recibe el objeto jqXHR. Si hay error recibe errorThrown.
//  * @description Este método se ejecuta haya o no haya error. Puede ser útil a veces.
//  */
// .always(function (jqXHR, textStatus, errorThrown) {
//     // proceso
// });
//     $.ajax({
//         type: "POST",
//         url: "valid_login/",
//         data: {'username': $('#id_email').val(), 'csrfmiddlewaretoken': '{{csrf_token}}'},
//         dataType: "text",
//         success: function (response) {
//             var response = $.parseJSON(response);
//             if (response.success) {
//                 return true;
//             }
//             else {
//                 alert(response.error);
//             }
//         },
//         error: function (rs, e) {
//             alert(rs.responseText);
//         }
//     });
// }
