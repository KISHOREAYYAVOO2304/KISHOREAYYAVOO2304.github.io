// 1. REFINED PARTICLES CONFIG
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 25, "density": { "enable": true, "value_area": 900 } }, 
        "color": { "value": ["#812de2", "#c471ff", "#00f3ff"] },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.4, "random": true, "anim": { "enable": true, "speed": 0.5, "opacity_min": 0.1, "sync": false } },
        "size": { "value": 3, "random": true }, 
        "line_linked": { "enable": false }, 
        "move": { "enable": true, "speed": 1, "direction": "top", "random": true, "straight": false, "out_mode": "out", "bounce": false } 
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": { "onhover": { "enable": true, "mode": "bubble" }, "onclick": { "enable": true, "mode": "repulse" }, "resize": true },
        "modes": {
            "bubble": { "distance": 200, "size": 6, "duration": 2, "opacity": 0.6, "speed": 3 },
            "repulse": { "distance": 200, "duration": 0.4 }
        }
    },
    "retina_detect": true
});

// 2. MOBILE MENU TOGGLE
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');

hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    const icon = hamburger.querySelector('i');
    if (mobileNav.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
});

// Remove Active Class from all nav links and add to clicked
const navLinksDesktop = document.querySelectorAll('.desktop-nav .nav-links a');
const navLinksMobile = document.querySelectorAll('.mobile-nav-links a');

function handleNavClick(linksArray, e) {
    linksArray.forEach(l => l.classList.remove('active'));
    e.target.classList.add('active');
}

navLinksDesktop.forEach(link => {
    link.addEventListener('click', (e) => handleNavClick(navLinksDesktop, e));
});

navLinksMobile.forEach(link => {
    link.addEventListener('click', (e) => {
        handleNavClick(navLinksMobile, e);
        // Close Mobile Menu
        mobileNav.classList.remove('active');
        const icon = hamburger.querySelector('i');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    });
});

// 3. ENHANCED MODAL LOGIC
const modalOverlay = document.getElementById('modal-overlay');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.getElementById('close-modal');

window.openModal = function(id) {
    const content = document.getElementById(id);
    if (content) {
        modalBody.innerHTML = content.innerHTML;
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; 
    }
}

closeBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
    // Delay restoring overflow to allow smooth CSS exit animation
    setTimeout(() => { document.body.style.overflow = 'auto'; }, 300);
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
        setTimeout(() => { document.body.style.overflow = 'auto'; }, 300);
    }
});
