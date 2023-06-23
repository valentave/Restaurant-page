import gitHub from './github-mark.svg';

export function generateFooter() {
    const element = document.createElement('footer');
    element.classList.add('footer')
    const gitHubIcon =  new Image();
    gitHubIcon.src = gitHub;
    element.innerHTML = `
        <p>Desarrollado por</p>
        <a href="https://github.com/valentave"><img src="${gitHubIcon.src}"></a>
        <p>Valentín Taverna</p>
    `;
    return element
}