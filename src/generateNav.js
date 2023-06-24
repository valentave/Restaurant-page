export function generateNav() {
    const element = document.createElement('nav');
    element.classList.add('nav');
    element.innerHTML = `
        <button class="nav__button nav__home button">Inicio</button>
        <button class="nav__button nav__menu button">Menú</button>
        <button class="nav__button nav__about-us button">Sobre nosotros</button>
    `;
    return element
}