const titleName = [];

function displayName() {
    const addNameToCart = document.getElementById('name-cart');
    addNameToCart.innerText = '';

    for (let i = 0; i < titleName.length; i++) {

        if (i > 4) {
            alert('not more the five players. please select five');
            break
        }

        const span = document.createElement('div');
        span.innerHTML = `
        <div class="side-card-text-info">
        <h3 class="side-card-text-info-num">${i + 1}</h3>
        <h4 class="side-card-title-name">${titleName[i]}</h4>
        </div>
        `
        addNameToCart.appendChild(span);
    }
}

function onCLickBtn(element) {
    const titleNameElement = element.parentNode.parentNode.children[0];
    const titleNameElementText = titleNameElement.innerText;
    titleName.push(titleNameElementText)

    element.setAttribute('disabled', true);
    element.style.backgroundColor = 'gray'

    displayName()
}