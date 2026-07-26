// =============================
// AOS Animation
// =============================
AOS.init({
    duration: 1000,
    once: true
});

// =============================
// Typing Effect
// =============================

const words = [
    "AI Engineer",
    "Machine Learning Enthusiast",
    "Computer Vision Developer",
    "Embedded Systems Developer",
    "ECE Student"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    const current = words[wordIndex];

    if (!isDeleting) {

        typing.textContent = current.substring(0, charIndex++);
    }
    else {

        typing.textContent = current.substring(0, charIndex--);
    }

    let speed = isDeleting ? 60 : 120;

    if (!isDeleting && charIndex === current.length + 1) {

        speed = 1800;
        isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {

        isDeleting = false;
        wordIndex++;

        if (wordIndex === words.length) {
            wordIndex = 0;
        }
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

// =============================
// Sticky Navbar
// =============================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 60) {

        header.style.background = "rgba(5,10,20,.95)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";

    } else {

        header.style.background = "rgba(0,0,0,.35)";
        header.style.boxShadow = "none";

    }

});

// =============================
// Active Navigation
// =============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");
        }

    });

});

// =============================
// Smooth Scroll
// =============================

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});

// =============================
// Contact Form
// =============================

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("✅ Thank you! Your message has been sent.");

    form.reset();

});

// =============================
// Hero Image Animation
// =============================

const heroImage = document.querySelector(".hero-right img");

window.addEventListener("mousemove", (e) => {

    let x = (window.innerWidth / 2 - e.pageX) / 40;
    let y = (window.innerHeight / 2 - e.pageY) / 40;

    heroImage.style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg)`;

});