if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready()
}

function ready() {
    var addToCartButtons = document.getElementsByClassName('produkt-Hinzufügen');
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i];
        button.addEventListener("click", addToCartClicked);
    }

    updateCurrentCakeColor();
    updateCakeText();
    updateFruitTopping();
    updateSprinkleTopping();
    updateChocolateTopping();
    updateDecorationTopping();
    updateExtraTopping();
}


function addToCartClicked(event) {
    var title = 'Wunschkuchen';
    var price = '€30.00';
    var imgSrc = 'image/wunschkuchen.jpeg';
    item = [title, price, imgSrc];
    sessionStorage.setItem(title, JSON.stringify(item));
}

function updateCurrentCakeColor() {
    var selectedColor = document.getElementById("colorSelect").value;
    var coloredCakes = document.querySelectorAll('.cakeColored');
    for (let i = 0; i < coloredCakes.length; i++) {
        if (coloredCakes[i].id == selectedColor) {
            coloredCakes[i].style.visibility = 'visible';
        } else {
            coloredCakes[i].style.visibility = 'hidden';
        }
    }
}

function updateCakeText() {
    document.getElementById("cakeText").textContent = document.getElementById('customText').value;
}

function updateFruitTopping() {
    if (document.getElementById('cbFruits').checked) {
        document.getElementById('strawberry').style.visibility = 'visible';
    } else {
        document.getElementById('strawberry').style.visibility = 'hidden';
    }
}

function updateSprinkleTopping() {
    if (document.getElementById('cbSprinkles').checked) {
        document.getElementById('sprinkles').style.visibility = 'visible';
    } else {
        document.getElementById('sprinkles').style.visibility = 'hidden';
    }
}

function updateChocolateTopping() {
    if (document.getElementById('cbChocolate').checked) {
        document.getElementById('chocolate').style.visibility = 'visible';
    } else {
        document.getElementById('chocolate').style.visibility = 'hidden';
    }
}

function updateDecorationTopping() {
    if (document.getElementById('cbDecoration').checked) {
        document.getElementById('decoration').style.visibility = 'visible';
    } else {
        document.getElementById('decoration').style.visibility = 'hidden';
    }
}

function updateExtraTopping() {
    var extraArray = document.getElementsByClassName('extraInput');
    if (document.getElementById('cbExtra').checked) {
        extraArray[0].style.visibility = 'visible';

    } else {
        extraArray[0].style.visibility = 'hidden';
    }
}