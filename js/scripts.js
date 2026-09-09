/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*
* Local additions: poster lightbox with keyboard support.
*/

(() => {
    'use strict';

    /**
     * Highlight the nav entry for the section currently in view.
     */
    const initScrollSpy = () => {
        const sideNav = document.querySelector('#sideNav');
        if (!sideNav || typeof bootstrap === 'undefined') {
            return;
        }

        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    /**
     * On narrow screens the nav is a collapsible top bar; close it after a
     * link is tapped so the target section is not hidden behind it.
     */
    const initResponsiveNav = () => {
        const navbarToggler = document.querySelector('.navbar-toggler');
        if (!navbarToggler) {
            return;
        }

        document.querySelectorAll('#navbarResponsive .nav-link').forEach((navLink) => {
            navLink.addEventListener('click', () => {
                if (window.getComputedStyle(navbarToggler).display !== 'none') {
                    navbarToggler.click();
                }
            });
        });
    };

    /**
     * Modal PDF viewer for the conference poster.
     *
     * Closes on the close button, on a click outside the frame, and on Escape.
     * Focus moves into the dialog on open and returns to the trigger on close,
     * and the page behind is locked so it does not scroll under the overlay.
     */
    const initPosterOverlay = () => {
        const trigger = document.querySelector('#pdfButton');
        const overlay = document.querySelector('#overlay');
        const closeButton = document.querySelector('#closeBtn');

        if (!trigger || !overlay || !closeButton) {
            return;
        }

        const open = () => {
            overlay.hidden = false;
            overlay.classList.add('is-open');
            document.body.classList.add('overlay-open');
            closeButton.focus();
        };

        const close = () => {
            overlay.classList.remove('is-open');
            overlay.hidden = true;
            document.body.classList.remove('overlay-open');
            trigger.focus();
        };

        const isOpen = () => overlay.classList.contains('is-open');

        trigger.addEventListener('click', open);
        closeButton.addEventListener('click', close);

        // A click on the backdrop itself (not the iframe) dismisses the dialog.
        overlay.addEventListener('click', (event) => {
            if (event.target === overlay) {
                close();
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && isOpen()) {
                close();
            }
        });
    };

    window.addEventListener('DOMContentLoaded', () => {
        initScrollSpy();
        initResponsiveNav();
        initPosterOverlay();
    });
})();
