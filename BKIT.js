/* show menu bar */
var menu = document.querySelector(".menu");
var navbar = document.querySelector(".nav-link");
menu.addEventListener('click', () => {
    if (navbar.style.display === "block") {
        navbar.style.display = "none";
        navbar.style.transition = '1s';

    }
    else {
        navbar.style.display = "block";
        navbar.style.transition = '1s';
    }
});

/* hide menu bar */
var menu = document.querySelector(".cr");
var navbar = document.querySelector(".nav-link");
menu.addEventListener('click', () => {
    if (navbar.style.display === "block") {
        navbar.style.display = "none";

    }
    else {
        navbar.style.display = "block";
    }
});

var cross = document.querySelector(".nav-link li");
cross.style.width = '0px';
