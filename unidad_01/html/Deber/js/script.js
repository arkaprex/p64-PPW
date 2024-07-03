document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".caja-enlace");
    const mainContent = document.querySelector("main");

    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            
            const page = this.getAttribute('href').replace('.html', '');

            switch (page) {
                case "index":
                    mainContent.innerHTML = `
                        <h2>Datos Personales</h2>
                        <ul>
                            <li>Nombre: Danilo Morocho</li>
                            <li>Fecha de Nacimiento: 01/01/1990</li>
                            <li>Hobbies: Música de los 80s, Videojuegos</li>
                        </ul>
                    `;
                    break;
                case "estudios":
                    mainContent.innerHTML = `
                        <h2>Estudios Realizados</h2>
                        <ul>
                            <li>Ingeniería en Ciencias de la Computación [2022 - 2025]</li>
                            <li>Universidad Politécnica Salesiana (Guayaquil, Ecuador)</li>
                        </ul>
                    `;
                    break;
                case "experiencias":
                    mainContent.innerHTML = `
                        <h2>Experiencia Profesional</h2>
                        <ul>
                            <li>Prácticas profesionales en Empresa X</li>
                        </ul>
                    `;
                    break;
                default:
                    mainContent.innerHTML = `<p>Seleccione una opción del menú.</p>`;
            }
        });
    });
});
