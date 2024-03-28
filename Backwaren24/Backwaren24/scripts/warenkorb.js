if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready()
}

function ready() {
    getItems();

    var removeCartItemButtons = document.getElementsByClassName('produkt-Löschen');

    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input');
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged)
    }
    updateCart();
}

function getItems() {
    for (i = 0; i < sessionStorage.length; i++) {
        let itemKey = sessionStorage.key(i);
        let itemString = sessionStorage.getItem(itemKey);
        let item = JSON.parse(itemString);
        addCartRow(item[0], item[1], item[2]);
    }
}

function addCartRow(title, price, imageSrc) {
    var cartRow = document.createElement('tr');
    cartRow.classList.add("cart-row");
    var cartItems = document.getElementsByClassName('cart-items')[0];
    var cartRowContents = `
        <td class="cart-info">
            <img src="${imageSrc}" alt="Bananenbrot" class="shop-item-image">
            <p class="shop-item-title">${title}</p>
        </td>
        <td class="cart-price">${price}</td>
        <td class="cart-quantity">
        <input class="cart-quantity-input" id="butterMilkMuffin" type="number" value="1">
        <button class="produkt-Löschen" type="button">Löschen</button>
        </td>
        <td class="cart-item-subtotal">€16.99</td>
    `;
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= -1) {
        input.value = 0;
    }
    updateCart()
}

function removeCartItem(event) {
    var buttonClicked = event.target;
    var itemRow = buttonClicked.parentElement.parentElement;
    var itemKey = itemRow.getElementsByClassName('shop-item-title')[0].innerText;
    sessionStorage.removeItem(itemKey);
    console.log("deleted " + itemKey);
    buttonClicked.parentElement.parentElement.remove();
    updateCart();
}

function updateCart() {
    updateItemSubtotal();
    updateCartTotal();
}

function buyCart() {
    sessionStorage.clear();
}

function updateItemSubtotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');
    var subtotal;
    for (var i = 0; i < cartRows.length; i++) {
        subtotal = 0;
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart-price')[0];
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        var price = parseFloat(priceElement.innerText.replace('€', ''));
        var quantity = quantityElement.value;
        subtotal = subtotal + price * quantity;
        subtotal = Math.round(subtotal * 100) / 100;
        cartRow.getElementsByClassName('cart-item-subtotal')[0].innerText = '€' + subtotal;
    }
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');
    var total = 0;
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var subtotalElement = cartRow.getElementsByClassName('cart-item-subtotal')[0];
        var subtotal = parseFloat(subtotalElement.innerText.replace('€', ''));
        total = total + subtotal;
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('cart-total-price')[0].innerText = '€' + total;
}