import gitHub from './github-mark.svg';

export function generateFooter() {
    const element = document.createElement('footer');
    element.classList.add('footer')
    const gitHubIcon =  new Image();
    gitHubIcon.src = gitHub;
    const casilda = new Branch('Casilda','Calle Falsa 333', '+54 9 3464 999 999');
    const capital = new Branch('Capital Federal', 'Avenida Siempreviva 123', '+54 9 11 9999 9999');
    const rosario = new Branch('Rosario','Bv. Lionel Messi 1987', '+54 9 341 999 9999');
    element.innerHTML = `
        <div class="branch-container">
            <div class="branch">
                <p class="branch__city">${capital.locality}</p>
                <p class="branch__address">${capital.address}</p>
                <a href="tel: ${capital.phone}">${capital.phone}</a>
            </div>
            <div class="branch">
                <p class="branch__city">${casilda.locality}</p>
                <p class="branch__address">${casilda.address}</p>
                <a href="tel: ${casilda.phone}">${casilda.phone}</a>
            </div>
            <div class="branch">
                <p class="branch__city">${rosario.locality}</p>
                <p class="branch__address">${rosario.address}</p>
                <a href="tel: ${rosario.phone}">${rosario.phone}</a>
            </div>
        </div>
        <p>Desarrollado por</p>
        <a href="https://github.com/valentave"><img src="${gitHubIcon.src}"></a>
        <p>Valentín Taverna</p>
    `;
    return element
}

export class Branch {
    constructor(locality,address, phone) {
        this._locality = locality;
        this._address = address;
        this._phone = phone;
    }

    get locality () {
        return this._locality;
    }
    get address () {
        return this._address;
    }
    get phone () {
        return this._phone;
    }
}