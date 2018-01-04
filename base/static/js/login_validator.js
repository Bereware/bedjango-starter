$(document).ready(function () {
    $('#loginForm').submit(function () {
        console.log("Entro");
        $.ajax({
            type: "POST",
            url: "valid_login/",
            data: {'username': $('#id_email').val(), 'csrfmiddlewaretoken': '{{csrf_token}}'},
            dataType: "text",
            success: function (response) {

                var response = $.parseJSON(response);
                if (response.success) {
                    return true;
                }
                else {
                    alert(response.error);
                }
            },
            error: function (rs, e) {
                alert(rs.responseText);
            }
        });
    });
});

function send_data() {
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
    $.ajax({
        type: "POST",
        url: "valid_login/",
        data: {'username': $('#id_email').val(), 'csrfmiddlewaretoken': '{{csrf_token}}'},
        dataType: "text",
        success: function (response) {
            var response = $.parseJSON(response);
            if (response.success) {
                return true;
            }
            else {
                alert(response.error);
            }
        },
        error: function (rs, e) {
            alert(rs.responseText);
        }
    });
}
