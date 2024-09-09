// script for bg-swap when scrolling

var staticBG = document.querySelector('#static-bg');

window.onscroll = function() {
	if (staticBG.getBoundingClientRect().top <= 0) {
		document.body.classList.add('change-color');
        document.getElementsByClassName('navbar')[0].classList.add('change-color');
	} else {
		document.body.classList.remove('change-color');
        document.getElementsByClassName('navbar')[0].classList.remove('change-color');
	}
}

// scripts for scroll-to events

function scrollToTop() {
  document.querySelector('#top').scrollIntoView({behavior: 'smooth'});
}

function scrollToGrid() {
  document.querySelector('#grid-3').scrollIntoView({behavior: 'smooth'});
}

function scrollToStatic() {
  document.querySelector('#static-bg').scrollIntoView({behavior: 'smooth'});
}

// script for burger menu

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".nav-item");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
	if (menu.classList.contains("showMenu")) {
		menu.classList.remove("showMenu");
		closeIcon.style.display = "none";
		menuIcon.style.display = "block";
	} else {
		menu.classList.add("showMenu");
		closeIcon.style.display = "block";
		menuIcon.style.display = "none";
	}
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(
	function(menuItem) {
		menuItem.addEventListener("click", toggleMenu);
	}
)