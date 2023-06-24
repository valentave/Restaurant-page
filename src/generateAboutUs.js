export function generateAboutUs() {
    const element = document.createElement('section');
    element.classList.add('about-us');
    element.classList.add('hidden');
    element.innerHTML = `
        <h2 class="about-us__h2">¡Bienvenidos a El Bodegón Argentino!</h2>
        <p class="about-us__p">
            Somos un comedor familiar con una trayectoria de más de 40 años en el rubro, y nos enorgullece ofrecerte una experiencia culinaria única. Nuestro objetivo es deleitar tus sentidos y transportarte directamente a la esencia misma de Argentina a través de nuestros platos tradicionales.
            <br><br>
            En El Bodegón Argentino, encontrarás una amplia selección de delicias gastronómicas cuidadosamente preparadas para satisfacer hasta los paladares más exigentes. Nuestro principal protagonista es el fuego de la parrilla, donde nuestros talentosos chefs dan vida a jugosos cortes de carne que te harán salivar de antemano. Cada bocado es una explosión de sabores que te llevará a descubrir el auténtico sabor de la carne argentina.
            <br><br>
            Además de nuestras especialidades en carne a la parrilla, también ofrecemos una amplia variedad de opciones que seguramente complacerán todos los gustos. Nuestras empanadas, famosas por su masa crujiente y su relleno jugoso y sabroso, son una verdadera delicia para los amantes de los sabores tradicionales argentinos. Además, nuestra carta incluye exquisitas pizzas, con una selección de sabores y coberturas que te sorprenderán, así como pastas frescas preparadas al dente, con una variedad de salsas que harán que cada bocado sea una experiencia única.
            <br><br>
            En El Bodegón Argentino, nos enorgullece la calidad de nuestros ingredientes y el amor con el que preparamos cada plato. Cada detalle es importante para nosotros, desde la selección de las mejores materias primas hasta la presentación final en tu mesa. Queremos que te sientas como en casa y que disfrutes de una experiencia gastronómica auténtica y memorable.
            <br><br>
            Ya sea que estés buscando un lugar para una cena familiar, una reunión de amigos o simplemente quieras disfrutar de una comida deliciosa y reconfortante, te invitamos a que nos visites. En El Bodegón Argentino te esperamos con los brazos abiertos, listos para brindarte una experiencia única llena de sabor, tradición y calidad.
        </p>
    `;
    return element
}