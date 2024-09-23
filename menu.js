function toggleMenu() {
    var menu = document.getElementById('sideMenu');
    menu.style.width = menu.style.width === '250px' ? '0' : '250px';
}

function closeNav() {
    var menu = document.getElementById('sideMenu');
    menu.style.width = '0';
}
