$(document).ready(function () {
    $('#loginForm').submit(function (){
        console.log("Entro");
        send_data();
        return false;
    });
});


function send_data() {
    $.ajax(
        {
            url: "valid_login/",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            type: "POST",
            data: $('#loginForm').serialize(),
        })
        .done(function (context) {

            alert("esto es ajax");
            return false;
        })
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
}