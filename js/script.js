let nav = document.getElementById('nav');
let burgerButton = document.getElementById('burgerButton');

burgerButton.addEventListener ('click', function () {
    nav.classList.toggle('active');
});