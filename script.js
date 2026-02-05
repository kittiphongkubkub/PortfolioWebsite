// ===================================
// GSAP INITIALIZATION
// ===================================
gsap.registerPlugin(ScrollTrigger);

// ===================================
// MOBILE NAVIGATION
// ===================================
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = mobileToggle.querySelector('i');
    if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// ===================================
// NAVBAR SCROLL EFFECT
// ===================================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===================================
// SMOOTH SCROLLING
// ===================================
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// GSAP ANIMATIONS - HERO SECTION
// ===================================
const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

heroTimeline
    .from('.greeting', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.5
    })
    .from('.name', {
        opacity: 0,
        y: 30,
        duration: 1,
        scale: 0.8
    }, '-=0.5')
    .from('.hero-subtitle', {
        opacity: 0,
        y: 30,
        duration: 1
    }, '-=0.7')
    .from('.hero-description', {
        opacity: 0,
        y: 30,
        duration: 1
    }, '-=0.7')
    .from('.hero-buttons .btn', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2
    }, '-=0.5')
    .from('.social-links a', {
        opacity: 0,
        scale: 0,
        duration: 0.6,
        stagger: 0.1
    }, '-=0.5')
    .from('.scroll-indicator', {
        opacity: 0,
        y: 20,
        duration: 0.8
    }, '-=0.3');

// ===================================
// GSAP SCROLL ANIMATIONS - SECTIONS
// ===================================

// About Section - Simplified animations
gsap.from('.about-text h3', {
    scrollTrigger: {
        trigger: '.about-text',
        start: 'top 80%',
        toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 30,
    duration: 0.8
});

gsap.from('.image-card', {
    scrollTrigger: {
        trigger: '.about-image',
        start: 'top 80%',
        toggleActions: 'play none none none'
    },
    opacity: 0,
    scale: 0.9,
    duration: 0.8
});

// Projects Section
gsap.from('.projects .section-title', {
    scrollTrigger: {
        trigger: '.projects',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 30,
    duration: 1
});

gsap.from('.projects .section-subtitle', {
    scrollTrigger: {
        trigger: '.projects',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 0.2
});

// Disabled project card animation to fix opacity issue
// gsap.from('.project-card', {
//     scrollTrigger: {
//         trigger: '.projects-grid',
//         start: 'top 80%',
//         toggleActions: 'play none none none'
//     },
//     opacity: 0,
//     y: 50,
//     duration: 0.8,
//     stagger: 0.15,
//     ease: 'power2.out'
// });

// Skills Section - Simplified
gsap.from('.skills .section-title', {
    scrollTrigger: {
        trigger: '.skills',
        start: 'top 80%',
        toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 30,
    duration: 0.8
});

// Contact Section - Simplified
gsap.from('.contact .section-title', {
    scrollTrigger: {
        trigger: '.contact',
        start: 'top 80%',
        toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 30,
    duration: 0.8
});

gsap.from('.contact-info', {
    scrollTrigger: {
        trigger: '.contact-content',
        start: 'top 80%',
        toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 30,
    duration: 0.8
});

// ===================================
// PARALLAX EFFECT - REMOVED FOR PERFORMANCE
// ===================================
// Parallax effect removed to improve scroll performance

// ===================================
// CONTACT FORM HANDLING WITH EMAILJS
// ===================================
const contactForm = document.getElementById('contactForm');

// EmailJS Configuration
// IMPORTANT: Replace these with your actual EmailJS credentials
// Get them from https://www.emailjs.com/
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY_HERE';
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID_HERE';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID_HERE';

// Initialize EmailJS (only if credentials are provided)
if (EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY_HERE') {
    emailjs.init(EMAILJS_PUBLIC_KEY);
}

// Notification function
function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.className = `notification ${type} show`;

    // Auto hide after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
    }, 5000);
}

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;

    // Show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

    // Get form values
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Check if EmailJS is configured
    if (EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY_HERE') {
        // Simulate sending for demonstration
        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;

            // Show success message
            showNotification('Demo mode: Form submitted successfully! Configure EmailJS to enable real email sending.', 'warning');

            // Reset form
            contactForm.reset();

            // Show animation
            gsap.to('.contact-form-wrapper', {
                scale: 0.95,
                duration: 0.2,
                yoyo: true,
                repeat: 1
            });

            console.log('Form data:', formData);
        }, 1500);
    } else {
        // Send email using EmailJS
        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);

                // Reset button
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;

                // Show success notification
                showNotification('✅ ขอบคุณที่ติดต่อ! ฉันจะตอบกลับเร็วที่สุด', 'success');

                // Reset form
                contactForm.reset();

                // Show animation
                gsap.to('.contact-form-wrapper', {
                    scale: 0.95,
                    duration: 0.2,
                    yoyo: true,
                    repeat: 1
                });
            })
            .catch((error) => {
                console.error('FAILED...', error);

                // Reset button
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;

                // Show error notification
                showNotification('❌ เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง', 'error');
            });
    }
});

// ===================================
// CURSOR EFFECT - REMOVED FOR PERFORMANCE
// ===================================
// Custom cursor effect removed to improve performance
// It was using continuous requestAnimationFrame which consumed resources

// ===================================
// LOADING ANIMATION
// ===================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    // Refresh ScrollTrigger after page load
    ScrollTrigger.refresh();
});

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================
// Pause video when not in viewport
const video = document.querySelector('.video-background video');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            video.play();
        } else {
            video.pause();
        }
    });
}, { threshold: 0.25 });

observer.observe(video);

// ===================================
// STATS COUNTER ANIMATION
// ===================================
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.ceil(current) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    };

    updateCounter();
}

// Trigger counter animation when stats come into view
ScrollTrigger.create({
    trigger: '.about-stats',
    start: 'top 80%',
    onEnter: () => {
        const stats = document.querySelectorAll('.stat h4');
        animateCounter(stats[0], 10);
        animateCounter(stats[1], 3);
        animateCounter(stats[2], 10);
    },
    once: true
});

// ===================================
// CONSOLE MESSAGE
// ===================================
console.log('%c🚀 Portfolio Website', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with HTML, CSS, GSAP ✨', 'color: #764ba2; font-size: 14px;');
console.log('%cLooking for a developer? Let\'s connect! 💼', 'color: #4facfe; font-size: 14px;');

// ===================================
// FOOTER CURRENT YEAR
// ===================================
document.getElementById('currentYear').textContent = new Date().getFullYear();
