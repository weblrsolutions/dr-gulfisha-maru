(function () {
    'use strict';

    // Add loaded class to body for fade-in animations (clinic pattern)
    document.addEventListener('DOMContentLoaded', function () {
        document.body.classList.add('loaded');
    });

    // Navbar scroll effect (clinic pattern)
    window.addEventListener('scroll', function () {
        var navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            if (navbar) navbar.classList.add('scrolled');
        } else {
            if (navbar) navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle (clinic: .mobile-menu-btn, .nav-menu)
    var mobileBtn = document.querySelector('.mobile-menu-btn');
    var navMenu = document.querySelector('.nav-menu');
    if (mobileBtn && navMenu) {
        mobileBtn.addEventListener('click', function () {
            var isOpen = navMenu.style.display === 'flex';
            navMenu.style.display = isOpen ? 'none' : 'flex';
            if (!isOpen) {
                navMenu.style.animation = 'slideDown 0.3s ease-out';
            }
        });
    }

    // Smooth scrolling for in-page links + close mobile menu on link click
    document.querySelectorAll('.nav-menu a, a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var href = this.getAttribute('href');
            if (href === '#') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (href && href.charAt(0) === '#') {
                var targetId = href.slice(1);
                var target = document.getElementById(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
            if (window.innerWidth <= 768 && navMenu) {
                navMenu.style.display = 'none';
            }
        });
    });
})();
