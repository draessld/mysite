/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

const pdfButton = document.getElementById('pdfButton');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');

// Open the PDF in fullscreen when the button is clicked
pdfButton.addEventListener('click', function() {
    overlay.style.display = 'flex'; // Show overlay
});

// Close the overlay when the close button is clicked
closeBtn.addEventListener('click', function() {
    overlay.style.display = 'none'; // Hide overlay
});

// Close the overlay when clicking outside the iframe
overlay.addEventListener('click', function(event) {
    if (event.target === overlay) {
        overlay.style.display = 'none'; // Hide overlay
    }
});