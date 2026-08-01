/*==========================================
GOONZBLENDZ
SCRIPT.JS
==========================================*/

/*=========================
Loading Screen
=========================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/*=========================
Mobile Navigation
=========================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {

        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.top = "80px";
        navLinks.style.right = "20px";
        navLinks.style.background = "#111";
        navLinks.style.padding = "20px";
        navLinks.style.borderRadius = "15px";
        navLinks.style.gap = "20px";
        navLinks.style.boxShadow = "0 0 30px rgba(0,168,255,.4)";

    } else {

        navLinks.removeAttribute("style");

    }

});

/*=========================
Close Mobile Menu
=========================*/

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        if (window.innerWidth < 768) {

            navLinks.classList.remove("active");
            navLinks.removeAttribute("style");

        }

    });

});

/*=========================
Scroll Reveal Animation
=========================*/

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: .15
});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

/*=========================
Navbar Background
=========================*/

window.addEventListener("scroll", () => {

    const nav = document.querySelector(".navbar");

    if (window.scrollY > 80) {

        nav.style.background = "rgba(0,0,0,.90)";
        nav.style.padding = "14px 8%";
        nav.style.boxShadow = "0 8px 30px rgba(0,0,0,.5)";

    } else {

        nav.style.background = "rgba(0,0,0,.45)";
        nav.style.padding = "18px 8%";
        nav.style.boxShadow = "none";

    }

});

/*=========================
Gallery Hover Glow
=========================*/

document.querySelectorAll(".gallery-item").forEach(item => {

    item.addEventListener("mouseenter", () => {

        item.style.transform = "scale(1.03) rotate(.5deg)";

    });

    item.addEventListener("mouseleave", () => {

        item.style.transform = "scale(1) rotate(0deg)";

    });

});

/*=========================
Service Card Animation
=========================*/

document.querySelectorAll(".service-card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});

/*=========================
Typing Effect
=========================*/

const heroTitle = document.querySelector(".hero h1");

const originalText = heroTitle.textContent;

heroTitle.textContent = "";

let index = 0;

function typeText() {

    if (index < originalText.length) {

        heroTitle.textContent += originalText.charAt(index);

        index++;

        setTimeout(typeText, 90);

    }

}

typeText();

/*=========================
Button Glow Pulse
=========================*/

setInterval(() => {

    document.querySelectorAll(".book-btn").forEach(btn => {

        btn.classList.add("pulse");

        setTimeout(() => {

            btn.classList.remove("pulse");

        }, 1200);

    });

}, 4000);

/*=========================
Smooth Scroll
=========================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/*=========================
Parallax Hero
=========================*/

window.addEventListener("mousemove", (e) => {

    const hero = document.querySelector(".hero");

    const x = (window.innerWidth / 2 - e.clientX) / 40;

    const y = (window.innerHeight / 2 - e.clientY) / 40;

    hero.style.backgroundPosition = `${50 + x}% ${50 + y}%`;

});

/*=========================
Scroll Progress Bar
=========================*/

const progress = document.createElement("div");

progress.style.position = "fixed";
progress.style.top = "0";
progress.style.left = "0";
progress.style.height = "4px";
progress.style.width = "0%";
progress.style.background = "#00a8ff";
progress.style.zIndex = "99999";
progress.style.boxShadow = "0 0 20px #00a8ff";

document.body.appendChild(progress);

window.addEventListener("scroll", () => {

    const scroll =
        document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    progress.style.width = (scroll / height) * 100 + "%";

});

/*=========================
Console Signature
=========================*/

console.log(
"%c💈 GOONZBLENDZ WEBSITE 💈",
"color:#00a8ff;font-size:20px;font-weight:bold;"
);

console.log(
"%cDesigned with HTML • CSS • JavaScript",
"color:white;font-size:14px;"
);
