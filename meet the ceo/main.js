/*
========================================
MEET THE CEO - PROFESSIONAL HERO EFFECTS
Tilt + Blur + Fade + Scale + Parallax
========================================
*/

document.addEventListener("DOMContentLoaded", function () {

    const hero = document.getElementById("hero");
    const heroImage = document.querySelector(".hero-image img");

    if (!hero || !heroImage) return;


    /*
    ================================
    SMOOTH 3D HERO TILT EFFECT
    ================================
    */

    let rotateX = 0;
    let rotateY = 0;

    hero.addEventListener("mousemove", (e) => {

        const x = (window.innerWidth / 2 - e.pageX) / 25;
        const y = (window.innerHeight / 2 - e.pageY) / 25;

        rotateX = y;
        rotateY = x;

        hero.style.transform =
            `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    });


    hero.addEventListener("mouseleave", () => {

        hero.style.transform =
            "perspective(1200px) rotateX(0deg) rotateY(0deg)";

    });


    /*
    ================================
    SCROLL EFFECT
    Blur + Fade + Scale + Parallax
    ================================
    */

    let ticking = false;

    function updateScrollEffects() {

        const scrollY = window.scrollY;

        const fadeDistance = 600;
        const maxBlur = 10;
        const maxScaleReduction = 0.1;

        const percent = Math.min(scrollY / fadeDistance, 1);

        const blur = percent * maxBlur;
        const opacity = 1 - percent;
        const scale = 1 - percent * maxScaleReduction;

        heroImage.style.filter = `blur(${blur}px)`;
        heroImage.style.opacity = opacity;
        heroImage.style.transform = `scale(${scale})`;

        /* Background parallax */

        document.body.style.backgroundPositionY =
            scrollY * 0.5 + "px";

        ticking = false;
    }


    function onScroll() {

        if (!ticking) {

            window.requestAnimationFrame(updateScrollEffects);
            ticking = true;

        }

    }

    window.addEventListener("scroll", onScroll);

});
