export function generateNav() {
    const element = document.createElement('nav');
    element.classList.add('nav')
    element.innerHTML = `
        <button class="nav__button nav__home">Inicio</button>
        <button class="nav__button nav__menu">Menú</button>
        <button class="nav__button nav__contact">Contacto</button>
    `;
    return element
}