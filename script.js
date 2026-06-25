// ===========================
// TYPING ANIMATION
// ===========================

new Typed(".typing", {
    strings: [
        "Cloud Computing Solutions",
        "Artificial Intelligence",
        "Cybersecurity Services",
        "Software Engineering",
        "Digital Transformation",
        "Innovative Technology"
    ],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
});

// ===========================
// ANIMATED COUNTERS
// ===========================

function animateCounter(id, target) {

    let count = 0;

    let increment = target / 100;

    const interval = setInterval(() => {

        count += increment;

        if (count >= target) {

            count = target;

            clearInterval(interval);
        }

        document.getElementById(id).textContent =
            Math.floor(count);

    }, 20);
}

animateCounter("clients", 500);
animateCounter("projectsCounter", 1200);
animateCounter("uptime", 99);
animateCounter("countries", 35);

// ===========================
// PARTICLES JS
// ===========================

particlesJS("particles-js", {

    particles: {

        number: {
            value: 90
        },

        color: {
            value: "#00e5ff"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.5
        },

        size: {
            value: 3
        },

        line_linked: {
            enable: true,
            distance: 150,
            color: "#7b61ff",
            opacity: 0.3,
            width: 1
        },

        move: {
            enable: true,
            speed: 2
        }
    },

    interactivity: {

        detect_on: "canvas",

        events: {

            onhover: {
                enable: true,
                mode: "grab"
            },

            onclick: {
                enable: true,
                mode: "push"
            }

        }

    }

});

// ===========================
// SCROLL REVEAL ANIMATIONS
// ===========================

ScrollReveal().reveal(

    ".hero-content",

    {
        distance: "100px",
        duration: 1500,
        origin: "left"
    }

);

ScrollReveal().reveal(

    ".hero-image",

    {
        distance: "100px",
        duration: 1500,
        origin: "right"
    }

);

ScrollReveal().reveal(

    ".service-card",

    {
        interval: 200,
        distance: "60px",
        duration: 1000,
        origin: "bottom"
    }

);

ScrollReveal().reveal(

    ".tech-card",

    {
        interval: 100,
        distance: "50px",
        duration: 1000
    }

);

ScrollReveal().reveal(

    ".metric-card",

    {
        interval: 150,
        distance: "50px",
        duration: 1000
    }

);

ScrollReveal().reveal(

    ".gallery-grid img",

    {
        interval: 100,
        distance: "60px",
        duration: 1000
    }

);

ScrollReveal().reveal(

    ".testimonial-card",

    {
        interval: 200,
        distance: "50px",
        duration: 1000
    }

);

// ===========================
// CURSOR GLOW EFFECT
// ===========================

const cursorGlow =
    document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    cursorGlow.style.left =
        e.clientX + "px";

    cursorGlow.style.top =
        e.clientY + "px";

});

// ===========================
// MOBILE MENU
// ===========================

const menuBtn =
    document.querySelector(".menu-btn");

const navLinks =
    document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    if (navLinks.style.display === "flex") {

        navLinks.style.display = "none";

    } else {

        navLinks.style.display = "flex";

        navLinks.style.flexDirection = "column";

        navLinks.style.position = "absolute";

        navLinks.style.top = "80px";

        navLinks.style.right = "20px";

        navLinks.style.background =
            "rgba(5,8,22,.95)";

        navLinks.style.padding = "20px";

        navLinks.style.borderRadius = "15px";

    }

});

// ===========================
// NAVBAR SCROLL EFFECT
// ===========================

const navbar =
    document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(5,8,22,.95)";

        navbar.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.3)";

    }

    else {

        navbar.style.background =
            "transparent";

        navbar.style.boxShadow =
            "none";
    }

});

// ===========================
// SMOOTH SCROLLING
// ===========================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});

// ===========================
// CONTACT FORM
// ===========================

const form =
    document.getElementById("contactForm");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    alert(
        "Thank you for contacting Innovartus Technologies. We will get back to you shortly."
    );

    form.reset();

});

// ===========================
// 3D CARD HOVER EFFECT
// ===========================

const cards =
    document.querySelectorAll(
        ".service-card"
    );

cards.forEach(card => {

    card.addEventListener(
        "mousemove",
        (e) => {

            const rect =
                card.getBoundingClientRect();

            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;

            const rotateY =
                ((x / rect.width) - 0.5) * 20;

            const rotateX =
                ((y / rect.height) - 0.5) * -20;

            card.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 scale(1.05)`;

        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
        }
    );

});

// ===========================
// PAGE LOADER EFFECT
// ===========================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});