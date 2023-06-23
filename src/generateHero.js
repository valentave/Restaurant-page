export function generateHero() {
    const element = document.createElement('section');
    element.classList.add('hero')
    element.innerHTML = `
        <section class="hero">
            <h2 class="hero__h2">¿Quiénes somos?</h2>
            <p class="hero__p">Somos un comedor familiar con más de 40 años de experiencia en el rubro. En <strong>El Bodegón Argentino</strong>, te ofrecemos platos tradicionales llenos de sabor y calidad, cuidadosamente preparados para transportarte a la esencia misma de Argentina. Disfrutá de jugosos cortes de carne a la parrilla, riquísimas empanadas y una variedad de opciones para todos los gustos.</p>
            <button class="hero__button">Mira nuestro Menú</button>
        </section>
    `;
    return element
}