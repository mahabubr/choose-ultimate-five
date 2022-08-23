// common function for inpur values
function inputFieldValue(inputId) {
    const inputFieldElement = document.getElementById(inputId);
    const inputFieldString = inputFieldElement.value;
    const inputField = parseFloat(inputFieldString)
    return inputField;
}

// common function for alert inpur field
function isNanAlert(perPlayerValue, playerExpenceElement) {
    if (isNaN(perPlayerValue)) {
        alert('please input a number');
        playerExpenceElement.style.visibility = 'hidden'
    }
    else {
        playerExpenceElement.style.visibility = 'visible'
    }
}

// disabled button when it will added
function disabledBtn(disable) {
    disable.setAttribute('disabled', true);
    disable.style.backgroundColor = 'gray';
}

// names array
const titleName = [];

// this function works display the name from array
function displayName() {
    const addNameToCart = document.getElementById('name-cart');
    addNameToCart.innerText = '';
    // alert when length is five
    if (titleName.length > 5) {
        titleName.length--
        alert('not more the five players. please select five');
    }
    // get name array
    for (let i = 0; i < titleName.length; i++) {
        // create element on side box
        const span = document.createElement('div');
        span.innerHTML = `
        <div class="side-card-text-info">
        <h3 class="side-card-text-info-num">${i + 1}</h3>
        <h4 class="side-card-title-name">${titleName[i]}</h4>
        </div>
        `
        addNameToCart.appendChild(span);
    }
    // calculate value form player list
    document.getElementById('calculate-btn').addEventListener('click', function () {
        const perPlayerValue = inputFieldValue('per-player-field');
        const playerCalc = perPlayerValue * titleName.length;

        const playerExpenceElement = document.getElementById('player-expense-total');
        playerExpenceElement.innerText = playerCalc;

        isNanAlert(perPlayerValue, playerExpenceElement)
    })

    // calculate all value form player list
    document.getElementById('calculate-total-btn').addEventListener('click', function () {
        const managerField = inputFieldValue('manager-field');
        const coachField = inputFieldValue('coach-field');
        const perPlayerValue = inputFieldValue('per-player-field');

        const playerCalc = perPlayerValue * titleName.length;
        const managerAndCoach = managerField + coachField + playerCalc;

        const allExpenceTotal = document.getElementById('all-expence-total');
        allExpenceTotal.innerText = managerAndCoach;

        isNanAlert(managerField, allExpenceTotal)
        isNanAlert(coachField, allExpenceTotal)
    })
}
displayName()
// this function target on selected btn
function onCLickBtn(element) {
    const titleNameElement = element.parentNode.parentNode.children[0];
    const titleNameElementText = titleNameElement.innerText;
    titleName.push(titleNameElementText)

    disabledBtn(element)
    displayName()
}