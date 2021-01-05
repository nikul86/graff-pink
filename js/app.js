const header = document.querySelector('.header');
let navToggle = document.querySelector('#navToggle');
let nav = document.querySelector('#nav')

window.addEventListener('scroll', () => {
    checkScroll()
});

document.addEventListener('DOMContentLoaded', () => {
    checkScroll()
});

navToggle.addEventListener('click', () => {
    nav.classList.toggle("show")
    
});

function checkScroll () {
    let scrollPos = window.scrollY;


    if(scrollPos > 799) {
        header.classList.add('color', 'fixed')
    } else {
        header.classList.remove('color', 'fixed')
  } 

}



