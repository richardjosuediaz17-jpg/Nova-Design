document.querySelectorAll(".bloqueada").forEach(function(img){
    img.addEventListener("click", function(){

        let respuesta = confirm("Nova Design ha bloqueado esta pagina.");

        if(respuesta){
            console.log("Presionó OK");
        }

    });
});

