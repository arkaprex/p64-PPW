document.addEventListener("DOMContentLoaded", function() {
    console.log("Página cargada y lista!");

    var enlaces = document.querySelectorAll('.caja-enlace');
    enlaces.forEach(function(enlace) {
        enlace.addEventListener('click', function(event) {
            event.preventDefault();
            var url = this.getAttribute('href');
            var confirmar = confirm('Has hecho clic en: ' + this.textContent + '. ¿Deseas cargar esta sección?');
            if (confirmar) {
                cargarContenido(url);
            }
        });
    });
    
    function cargarContenido(url) {
        fetch(url)
            .then(function(response) {
                if (response.ok) {
                    return response.text();
                } else {
                    throw new Error('Error al cargar el contenido');
                }
            })
            .then(function(data) {
                var main = document.querySelector('main');
                main.innerHTML = ''; // Limpiar contenido previo
                main.innerHTML = data;
            })
            .catch(function(error) {
                console.error('Error:', error);
                document.querySelector('main').innerHTML = '<p>Error al cargar el contenido</p>';
            });
    }
});
