function bloquearAcceso(event) {
    event.preventDefault();  
    
    alert("Esta opcion esta bloqueada temporalmente. Nova design");
}




document.addEventListener('DOMContentLoaded', function() {

    // Seleccionar elementos
    const btnAbrir = document.getElementById('btnRegistro');
    const modal = document.getElementById('modalRegistro');
    const btnSalir = document.getElementById('btnSalir');
    const btnEnviar = document.getElementById('btnEnviar');
    const form = document.getElementById('formRegistro');
    const mensajeGracias = document.getElementById('mensajeGracias');

    
    if (!btnEnviar) {
        console.error(" No se encontró el botón Enviar. Revisa los IDs.");
        return;
    }

    console.log(" Script cargado correctamente");

    // Abrir modal
    if (btnAbrir) {
        btnAbrir.addEventListener('click', () => {
            modal.style.display = 'flex';
            mensajeGracias.style.display = 'none';
            form.style.display = 'block';
            form.reset();
            console.log("Modal abierto");
        });
    }

    // Cerrar con botón Salir
    if (btnSalir) {
        btnSalir.addEventListener('click', () => {
            modal.style.display = 'none';
            console.log("Modal cerrado");
        });
    }

    // Cerrar clic fuera
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // === BOTÓN ENVIAR ===
    btnEnviar.addEventListener('click', () => {
        console.log("✅ Botón Enviar fue clickeado");

        const nombre = document.getElementById('nombre').value.trim();
        const whatsapp = document.getElementById('whatsapp').value.trim();

        console.log("Datos ingresados:", { nombre, whatsapp });

        let esValido = true;

        // Validar nombre
        if (nombre === '') {
            document.getElementById('errorNombre').style.display = 'block';
            esValido = false;
            console.log("Error: Nombre vacío");
        } else {
            document.getElementById('errorNombre').style.display = 'none';
        }

        // Validar whatsapp
        if (whatsapp === '') {
            document.getElementById('errorWhatsapp').style.display = 'block';
            esValido = false;
            console.log("Error: WhatsApp vacío");
        } else {
            document.getElementById('errorWhatsapp').style.display = 'none';
        }

        if (esValido) {
            console.log(" Datos válidos - Mostrando mensaje de gracias");
            
            form.style.display = 'none';
            mensajeGracias.style.display = 'block';

            // Cerrar automáticamente después de 3 segundos
            setTimeout(() => {
                modal.style.display = 'none';
                console.log("Modal cerrado automáticamente");
            }, 3000);
        } else {
            console.log(" Validación falló");
        }
    });

});
