export function generateMenu() {
    const element = document.createElement('section');
    element.classList.add('menu');
    element.classList.add('hidden');
    element.innerHTML = `
        <h2 class="menu__title">Nuestro Menú</h2>
        <div class="menu__section">
            <div class="menu__meals menu__entrada">
                <h3 class="menu__h3">Entradas</h3>
                <div class="menu__meal">${displayMeal('Empanada','Carne / Pollo / Jamón y Queso / Verdura','$200')}</div>
                <div class="menu__meal">${displayMeal('Provoleta','Queso provolone a la parrilla','$1300')}</div>
                <div class="menu__meal">${displayMeal('Chorizo criollo','100% cerdo','$500')}</div>
                <div class="menu__meal">${displayMeal('Morcilla criolla','Acompañada de pan crocante de campo','$500')}</div>
                <div class="menu__meal">${displayMeal('Revuelto gramajo','Papas fritas, jamón, huevo revuelto y cebolla','$1000')}</div>
            </div>
            <div class="menu__meals menu__guarniciones">
                <h3 class="menu__h3">Guarniciones</h3>
                <div class="menu__meal">${displayMeal('Ensalada Mixta','Lechuga, tomate, cebolla','$500')}</div>
                <div class="menu__meal">${displayMeal('Ensalada rusa','Papas, zanahoria, arvejas, mayonesa','$700')}</div>
                <div class="menu__meal">${displayMeal('Ensaladas varias','Cuatro ingredientes a elección','$900')}</div>
                <div class="menu__meal">${displayMeal('Papas fritas','Bastón / Cubos / Españolas','$700')}</div>
                <div class="menu__meal">${displayMeal('Camotes asados','Con queso y verdeo','$700')}</div>
                <div class="menu__meal">${displayMeal('Puré','Papa / calabaza / camote','$500')}</div>
            </div>
            <div class="menu__meals menu__pastas">
                <h3 class="menu__h3">Pastas caseras</h3>
                <div class="menu__meal">${displayMeal('Ravioles','Mozzarella y jamón / ricota y nuez / verdura. Salsa a elección','$1600')}</div>
                <div class="menu__meal">${displayMeal('Sorrentinos','Mozzarella y jamón / ricota y nuez / verdura. Salsa a elección','$1800')}</div>
                <div class="menu__meal">${displayMeal('Spaghetti','Salsa a elección.','$900')}</div>
                <div class="menu__meal">${displayMeal('Ñoquis','Salsa a elección','$1300')}</div>
            </div>
            <div class="menu__meals menu__minutas">
                <h3 class="menu__h3">Minutas</h3>
                <div class="menu__meal">${displayMeal('Milanesa de carne','Frita / al horno. Con guarnición','$1500')}</div>
                <div class="menu__meal">${displayMeal('Milanesa de soja','Al horno. Con guarnición','$1500')}</div>
                <div class="menu__meal">${displayMeal('Suprema de pollo','Frita / al horno. Con guarnición','$1300')}</div>
                <div class="menu__meal">${displayMeal('Pizza simple','Queso, paleta','$1800')}</div>
                <div class="menu__meal">${displayMeal('Pizza fugazza','Queso, cebolla, aceitunas','$2100')}</div>
                <div class="menu__meal">${displayMeal('Pizza de rúcula','Queso, rúcula, aceitunas','$2000')}</div>
                <div class="menu__meal">${displayMeal('Pizza especial','Queso, paleta, morrón, huevo','$2300')}</div>
                <div class="menu__meal">${displayMeal('Pizza completa','Queso, jamón, morrón, huevo, salame de Milán, aceitunas','$2500')}</div>
            </div>
            <div class="menu__meals menu__carnes">
                <h3 class="menu__h3">Carnes</h3>
                <div class="menu__meal">${displayMeal('Parrillada p/1 persona','Chinchulín, tripa, chorizo, morcilla, matambre, costilla','$2200')}</div>
                <div class="menu__meal">${displayMeal('Parrillada p/2 personas','Chinchulines, tripas, chorizos, morcillas, matambres, costillas','$3800')}</div>
                <div class="menu__meal">${displayMeal('Matambre a la pizza','Salsa de tomate, queso, jamón','$2000')}</div>
                <div class="menu__meal">${displayMeal('Costeletas de cerdo','2 unidades. Salsa de mostaza / tomate','$1700')}</div>
                <div class="menu__meal">${displayMeal('Bondiola de cerdo','Mechada con panceta ahumada','$1800')}</div>
                <div class="menu__meal">${displayMeal('Pollo a la mostaza','3 presas a elección','$1800')}</div>
                <div class="menu__meal">${displayMeal('Lomito','Al plato con papas / sanguche','$1800')}</div>
                <div class="menu__meal">${displayMeal('Mollejas','Para acompañar','$700')}</div>
            </div>
            <div class="menu__meals menu__infantil">
                <h3 class="menu__h3">Menú Infantil</h3>
                <div class="menu__meal">${displayMeal('Suprema de pollo','Al horno. Incluye postre (bocha de helado)','$1300')}</div> 
                <div class="menu__meal">${displayMeal('Spaghetti','Con crema. Incluye postre (bocha de helado)','$900')}</div>
                <div class="menu__meal">${displayMeal('Tostados','Paleta y queso. Incluye postre (bocha de helado)','$1000')}</div>
            </div>
            <div class="menu__meals menu__bebidas-sa">
                <h3 class="menu__h3">Bebidas sin alcohol</h3>
                <div class="menu__meal">${displayMeal('Agua sin gas','1.5 litros','$400')}</div>
                <div class="menu__meal">${displayMeal('Agua con gas','1.5 litros','$500')}</div>
                <div class="menu__meal">${displayMeal('Agua saborizada','1.5 litros','$700')}</div>
                <div class="menu__meal">${displayMeal('Gaseosa','500ml','$500')}</div>
            </div>
            <div class="menu__meals menu__bebidas-ca">
                <h3 class="menu__h3">Bebidas con alcohol</h3>
                <div class="menu__meal">${displayMeal('Vino tinto (tetra)','500ml','$700')}</div>
                <div class="menu__meal">${displayMeal('Vino tinto (botella)','Cabernet sauvingnon / malbec. 1 litro','$2000')}</div>
                <div class="menu__meal">${displayMeal('Vino blanco (botella)','1 litro','$1500')}</div>
                <div class="menu__meal">${displayMeal('Fernet con coca (jarra)','Preparación a gusto. 1.5 litros','$1500')}</div>
                <div class="menu__meal">${displayMeal('Vino espumante Chandon','750ml','$3500')}</div>
            </div>
            <div class="menu__meals menu__postres">
            <h3 class="menu__h3">Postres</h3>
                <div class="menu__meal">${displayMeal('Bocha de helado','Dulce de leche / chocolate / americana / frutilla','$300')}</div>
                <div class="menu__meal">${displayMeal('Flan casero','Con crema o dulce de leche','$500')}</div>
                <div class="menu__meal">${displayMeal('Queso y dulce','Dulce de batata o membrillo','$400')}</div>
                <div class="menu__meal">${displayMeal('Brownie','Bocha de helado a elección','$700')}</div>
                <div class="menu__meal">${displayMeal('Panqueques con dulce de leche','2 unidades','$500')}</div>
            </div>
        </div>
    `;

    return element
}

function displayMeal(meal, description, price) {
    return `
        <h4 class="menu__meal-name">${meal}</h4>
        <div class="menu__separator"></div>
        <p class="menu__meal-description">${description}</p>
        <p class="menu__meal-price">${price}</p>
    `
}