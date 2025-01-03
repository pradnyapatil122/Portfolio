// ------ Animations Onscrolling ---------
AOS.init();

// navbar
sections = document.querySelectorAll('section');
navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelectorAll('header nav a[href*= ' + id + ']').classList.add('active');
      });
    };
  });
};

//----- Sticky Navbar -------

header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);


//------ nav icon --------

// Get references to the menu icon and navbar
mn = document.querySelector('#menu');
navbar = document.querySelector('.navbar');

// Set the navbar to display:none by default
navbar.style.display = 'none';

// Add a click event listener to the menu icon
mn.addEventListener('click', function () {

  // Check if the navbar is currently visible
  if (navbar.style.display === 'block') {

    // If it is, hide the navbar by setting the display property to "none"
    navbar.style.display = 'none';

    // Replace the "bx-x" class with "bx-menu" to show the menu icon
    mn.classList.replace('bx-x', 'bx-menu');

  } else {

    // If it isn't, show the navbar by setting the display property to "block"
    navbar.style.display = 'block';

    // Replace the "bx-menu" class with "bx-x" to show the close icon
    mn.classList.replace('bx-menu', 'bx-x');
  }

});

// Add a click event listener to all nav links
navLinks = document.querySelectorAll('header nav a');
navLinks.forEach(link => {
  link.addEventListener('click', function () {

    // Hide the navbar by setting the display property to "none"
    navbar.style.display = 'none';

    // Replace the "bx-x" class with "bx-menu" to show the menu icon
    mn.classList.replace('bx-x', 'bx-menu');

  });
});

// Add a media query that sets the display property of the navbar to "block" when the screen resolution is greater than or equal to 1200 pixels

window.onload = function() {
   mediaQuery = window.matchMedia('(min-width: 1100px)');
  mediaQuery.addListener(function() {
    if (mediaQuery.matches) {
      navbar.style.display = 'block';
    } else {
      navbar.style.display = 'none';
    }
  });
};

// ------------- Scroll reveal ---------------

ScrollReveal({ 
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
ScrollReveal().reveal('.home-img, .portfolio-box, .contact form', { origin:'bottom' });

ScrollReveal().reveal('.A1, .home-content h1, .skills h2, .about-content h3', { origin:'left' });

ScrollReveal().reveal('.A2, .skills h4, .home-content p, .about-content p', { origin:'right' });



// ------------ Typed js -----

typed = new Typed('.multi-text', {
     strings: ['Frontend Developer', 'Backend Developer'],
     typeSpeed: 100,
     backSpeed: 100,
     backDelay: 1000,
     loop: true
});

//  --------- Topper ---------

function Topper(){
  window.scrollTo({ top: 0, behavior: 'smooth' });
}