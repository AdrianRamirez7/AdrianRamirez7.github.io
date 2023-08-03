let navBar = document.getElementById("nav-text");
let navBarTwo = document.getElementById("nav-text2");
let navBarThree = document.getElementById("nav-text3");
let navBarFour = document.getElementById("nav-text4");

function adjustWidth() {
    navBar.style.fontSize = '35px';
    navBar.style.color = 'goldenrod';
    navBarTwo.style.fontSize = '35px';
    navBarTwo.style.color = 'goldenrod';
};


navBar.addEventListener('mouseover', adjustWidth);
navBarTwo.addEventListener('mouseover', adjustWidth);

function resetWidth() {
    navBar.style.fontSize = '25px';
    navBar.style.color = 'white';
    navBarTwo.style.fontSize = '25px';
    navBarTwo.style.color = 'white';
};

navBar.addEventListener('mouseout', resetWidth);
navBarTwo.addEventListener('mouseout', resetWidth);