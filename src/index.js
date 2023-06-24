import {generateHeader} from './generateHeader.js';
import {generateHero} from './generateHero.js';
import {generateFooter} from './generateFooter.js';
import {generateMenu} from './generateMenu.js';
import {generateAboutUs} from './generateAboutUs.js';
import icon from './Assets/favicon.svg'
import './style/style.css';
import './style/header.css';
import './style/hero.css';
import './style/footer.css';
import './style/menu.css';
import './style/aboutus.css';

var favicon = document.createElement("link");
favicon.rel = "icon";
favicon.href = icon;
document.head.appendChild(favicon);

const body = document.querySelector('body');
const content = document.createElement('div');
content.classList.add('content');
body.appendChild(content);

const main = document.createElement('main');
main.classList.add('main');

// Initialize the header
const header = generateHeader();
content.appendChild(header);  

// Initialize the hero
content.appendChild(main);

const hero = generateHero();
const menu = generateMenu();
const aboutUs = generateAboutUs();
main.appendChild(hero);
main.appendChild(menu);
main.appendChild(aboutUs);

// Initialize the footer
const footer = generateFooter();
content.appendChild(footer);

// Initialize buttons
const btnHome = header.lastChild.querySelector('.nav__home');
const btnMenu = header.lastChild.querySelector('.nav__menu');
const btnAboutUs = header.lastChild.querySelector('.nav__about-us');
const btnHeroMenu = hero.querySelector('.hero__button');

// Initialize events
btnHome.addEventListener('click', () => {
    if(hero.classList.contains('hidden')) {
        hero.classList.remove('hidden');
        if (!menu.classList.contains('hidden')) menu.classList.add('hidden');
        if (!aboutUs.classList.contains('hidden')) aboutUs.classList.add('hidden');
    }
})

btnMenu.addEventListener('click', () => {
    if(menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        if (!hero.classList.contains('hidden')) hero.classList.add('hidden');
        if (!aboutUs.classList.contains('hidden')) aboutUs.classList.add('hidden');
    }
})

btnAboutUs.addEventListener('click', () => {
    if(aboutUs.classList.contains('hidden')) {
        aboutUs.classList.remove('hidden');
        if (!hero.classList.contains('hidden')) hero.classList.add('hidden');
        if (!menu.classList.contains('hidden')) menu.classList.add('hidden');
    }
})

btnHeroMenu.addEventListener('click', () => {
    menu.classList.remove('hidden');
    hero.classList.add('hidden');
})