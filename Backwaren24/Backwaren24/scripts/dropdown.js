function toggleDropdownMenu() {
    var menuArray = document.getElementsByClassName("dropdown");
    if (menuArray[0].style.visibility == 'visible') {
        for (let i = 0; i < menuArray.length; i++) {
            menuArray[i].style.visibility = 'hidden';
        }

    } else {
        for (let i = 0; i < menuArray.length; i++) {
            menuArray[i].style.visibility = 'visible';
        }
    }
}