$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/posts",
        dataType: "json",
        success: function (response) {
            response.forEach(element => {
                //Generamos un elemento li con los datos de cada post
                const li = $("<li>").text(element.title)

                //Agregamos el elemento li a html ul
                $("#posts").append(li);
            });
        },
        error: function (data) {  
            console.log(`Ha ocurrido un error con el código ${data}`)
        },
        async: true
    });

})