const titleName = [];

function displayName() {
    const addNameToCart = document.getElementById('name-cart');
    addNameToCart.innerText = '';

    for (let i = 0; i < titleName.length; i++) {
        const span = document.createElement('span');
        span.innerHTML = `
        <h3>${i + 1}</h3>
        <span class="side-card-title-name">${titleName[i]}</span>
        `
        addNameToCart.appendChild(span);
    }

}

function onCLickBtn(element) {
    const titleNameElement = element.parentNode.parentNode.children[0];
    const titleNameElementText = titleNameElement.innerText;
    titleName.push(titleNameElementText)

    displayName()
}