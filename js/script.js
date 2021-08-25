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


// Countdown
(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    let event = "Sep 10, 2021 23:00:00",
        countDown = new Date(event).getTime(),
        x = setInterval(function() {    
  
          let now = new Date().getTime(),
              distance = countDown - now;
  
            document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
        }, 0)
}());

