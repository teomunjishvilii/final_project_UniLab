// Burger Button - the navigation appears by clicking on the burger button.
let nav = document.getElementById('nav');
let burgerButton = document.getElementById('burgerButton');

burgerButton.addEventListener ('click', function () {
    nav.classList.toggle('active');
});

// Slider
$ (document).ready(function() {
    $('.slider').slick ({
        infinite: true,
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000
    });
});