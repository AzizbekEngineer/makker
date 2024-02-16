let navBar = document.getElementById('header__nav__hamburger--btn');
let navList = document.getElementById('header__nav--list');
let bactop = document.getElementById('bactop');
let navShrink = document.getElementById('navshrink')
let body = document.getElementById('body')
let darkMode = document.getElementById("dark-mode");
let darkModeIcon = document.getElementById("dark-mode__icon");


window.addEventListener('scroll', function () {
    showBactop()
    showNavShrink()
})

navBar.addEventListener('click', function () {
    navList.classList.toggle('show-header__nav-list')
})

darkMode.addEventListener("click", function () {
    darkModeIcon.classList.toggle("fa-moon");
    darkModeIcon.classList.toggle("fa-sun");
    body.classList.toggle("light");
});

function showBactop() {
    if (scrollY > 200) {
        bactop.classList.add('show-bactop')
    }
    else {
        bactop.classList.remove('show-bactop')
    }
}

function showNavShrink() {
    if (scrollY > 0) {
        navShrink.classList.add('show-shrink')
    }
    else {
        navShrink.classList.remove('show-shrink')
    }
}