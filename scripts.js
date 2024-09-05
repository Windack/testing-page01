/* Script for Scrolling*/

window.addEventListener('scroll', function() {
    if (window.scrollY > 1700 & window.scrollY < 2250) {
        document.body.classList.add('change-color');
        document.getElementsByClassName('navbar')[0].classList.add('change-color');
    } else {
        document.body.classList.remove('change-color');
        document.getElementsByClassName('navbar')[0].classList.remove('change-color');
    }
});

window.addEventListener('scroll', function() {
    
});

function scrollToTop() {
  document.querySelector('#top').scrollIntoView({behavior: 'smooth'});
}

function scrollToGrid() {
  document.querySelector('#grid-3').scrollIntoView({behavior: 'smooth'});
}

function scrollToStatic() {
  document.querySelector('#static-bg').scrollIntoView({behavior: 'smooth'});
}
