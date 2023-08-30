function openNav() {
    const content = document.getElementById('content');
    content.classList.add('opened')
}

function closeNav() {
    const content = document.getElementById('content');
    content.classList.remove('opened')
}

window.addEventListener('DOMContentLoaded', function() {
    const openMenu = document.getElementById('menu')
    const closeMenu = document.getElementById('close-button')

    openMenu.addEventListener('click', openNav);
    closeMenu.addEventListener('click', closeNav);
})