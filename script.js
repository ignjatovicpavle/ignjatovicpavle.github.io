// Preloader
window.addEventListener('load', function() {
    const preloader = document.getElementById('preload');
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
            document.querySelector('main').style.opacity = '1';
            document.querySelector('main').style.display = 'block';
        }, 500);
    }, 1000);
});

document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Create simple particles
function createParticles() {
    const container = document.getElementById('heroParticles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('hero-particle');
        
        // Random properties
        const size = Math.random() * 5 + 2;
        const posX = Math.random() * 100;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 5;
        const opacity = Math.random() * 0.5 + 0.1;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.opacity = opacity;
        
        container.appendChild(particle);
    }
}

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const closeMenu = document.getElementById('closeMenu');

hamburger.addEventListener('click', () => {
    navLinks.classList.add('active');
    hamburger.style.display = "none";
    closeMenu.style.display = "block";
});

closeMenu.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.style.display = "block"
    closeMenu.style.display = "none";
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains("active")){
            closeMenu.click();
        }
        
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll animations
function checkVisibility() {
    const cards = document.querySelectorAll('.interest-card');
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (cardTop < windowHeight - 100) {
            card.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typewriter effect for hero text
const heroText = "Student • Developer • Cyclist • Photographer";
let i = 0;
const speed = 100;
const heroParagraph = document.querySelector('.hero p');

function typeWriter() {
    if (i < heroText.length) {
        heroParagraph.textContent += heroText.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    
    // Start typewriter effect after preloader
    setTimeout(() => {
        heroParagraph.textContent = '';
        typeWriter();
    }, 1500);
});