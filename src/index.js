import {generateHeader} from './generateHeader.js';
import {generateHero} from './generateHero.js';
import {generateFooter} from './generateFooter.js';
import {generateMenu} from './generateMenu.js';
import {generateAboutUs} from './generateAboutUs.js';
import './style.css';
import './nav.css';

const body = document.querySelector('body');
const content = document.createElement('div');
content.classList.add('content');
body.appendChild(content);

const main = document.createElement('main');
main.classList.add('main');

// Initialize the header
content.appendChild(generateHeader());  

// Initialize the hero
content.appendChild(main);

main.appendChild(generateHero());
main.appendChild(generateMenu());
main.appendChild(generateAboutUs());

// Initialize the footer
content.appendChild(generateFooter());