import {generateNav} from './generateNav.js';

export function generateHeader() {
    const element = document.createElement('header');
    element.classList.add('header');
    element.innerHTML = `
        <h1 class="header__logo">El Bodegón Argentino</h1>
    `;    
    const nav = generateNav();
    element.appendChild(nav);
    return element
}