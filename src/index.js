import {generateHeader} from './generateHeader.js';
import {generateHero} from './generateHero.js';
import {generateFooter, Branch} from './generateFooter.js';

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


// Initialize the footer
content.appendChild(generateFooter());