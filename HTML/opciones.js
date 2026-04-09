document.querySelectorAll(".bloqueada").forEach(function(img){
    img.addEventListener("click", function(){

        let respuesta = confirm("Nova Design ha bloqueado esta pagina.");

        if(respuesta){
            // si el usuario le da OK (puedes hacer algo aquí si quieres)
            console.log("Presionó OK");
        }

    });
});