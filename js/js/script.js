/* =====================================
   LOVE VATAN CAMPAIGN
   script.js
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       MOBILE MENU
    ===================================== */

    const mobileBtn = document.querySelector(".mobile-menu-btn");
    const navMenu = document.querySelector(".nav-menu");

    if (mobileBtn && navMenu) {

        mobileBtn.addEventListener("click", () => {

            navMenu.classList.toggle("active");

            if (navMenu.classList.contains("active")) {

                mobileBtn.innerHTML = "✕";

            } else {

                mobileBtn.innerHTML = "☰";
            }

        });

    }

    /* =====================================
       CLOSE MENU AFTER CLICK
    ===================================== */

    const navLinks = document.querySelectorAll(".nav-menu a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            if (window.innerWidth <= 992) {

                navMenu.classList.remove("active");

                mobileBtn.innerHTML = "☰";
            }

        });

    });

    /* =====================================
       COPY CARD NUMBER
    ===================================== */

    const copyBtn = document.getElementById("copyCardBtn");

    if (copyBtn) {

        copyBtn.addEventListener("click", () => {

            const cardNumber =
                "5892107050145211";

            navigator.clipboard.writeText(cardNumber)

                .then(() => {

                    const oldText = copyBtn.innerHTML;

                    copyBtn.innerHTML =
                        "✓ شماره کارت کپی شد";

                    copyBtn.style.background =
                        "#16a34a";

                    setTimeout(() => {

                        copyBtn.innerHTML =
                            oldText;

                        copyBtn.style.background =
                            "";

                    }, 2500);

                })

                .catch(() => {

                    alert(
                        "امکان کپی خودکار وجود ندارد. شماره کارت را دستی کپی کنید."
                    );

                });

        });

    }

    /* =====================================
       SMOOTH SCROLL
    ===================================== */

    document.querySelectorAll('a[href^="#"]')
        .forEach(anchor => {

            anchor.addEventListener("click", function (e) {

                const targetId =
                    this.getAttribute("href");

                if (targetId === "#")
                    return;

                const target =
                    document.querySelector(targetId);

                if (target) {

                    e.preventDefault();

                    target.scrollIntoView({

                        behavior: "smooth",
                        block: "start"

                    });

                }

            });

        });

    /* =====================================
       SCROLL ANIMATION
    ===================================== */

    const animatedElements = document.querySelectorAll(
        ".section, .donation-card, .need-card, .info-box"
    );

    animatedElements.forEach(item => {

        item.classList.add("fade-up");

    });

    const observer = new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.15
        }

    );

    animatedElements.forEach(item => {

        observer.observe(item);

    });

    /* =====================================
       HEADER SHADOW ON SCROLL
    ===================================== */

    const header =
        document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.style.boxShadow =
                "0 10px 30px rgba(0,0,0,.08)";

        } else {

            header.style.boxShadow =
                "none";
        }

    });

    /* =====================================
       ACTIVE MENU ITEM
    ===================================== */

    const sections =
        document.querySelectorAll("section");

    const menuLinks =
        document.querySelectorAll(".nav-menu a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.clientHeight;

            if (
                window.scrollY >= sectionTop
                &&
                window.scrollY <
                sectionTop + sectionHeight
            ) {

                current =
                    section.getAttribute("id");

            }

        });

        menuLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href")
                === "#" + current
            ) {

                link.classList.add("active");

            }

        });

    });

    /* =====================================
       PRELOAD IMAGES
    ===================================== */

    const images = [

        "assets/logo.png",
        "assets/delivery.jpg",
        "assets/volunteer.jpg"

    ];

    images.forEach(src => {

        const img = new Image();

        img.src = src;

    });

});

