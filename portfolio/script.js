gsap.registerPlugin(ScrollTrigger);

/* =========================
   HERO
========================= */

const tl = gsap.timeline();

tl.from(".navbar", {
    opacity: 0,
    y: -50,
    duration: 0.8,
    ease: "power3.out"
})

    .from(".hero h1", {
        opacity: 0,
        y: 80,
        duration: 1,
        ease: "power4.out"
    }, "-=0.4")

    .from(".hero p", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.6")

    .from(".buttons", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.4")

    .from(".hero-card", {
        opacity: 0,
        x: 80,
        duration: 1,
        ease: "power4.out"
    }, "-=0.7");


/* =========================
   ABOUT
========================= */

gsap.fromTo(
    ".about",
    {
        opacity: 0,
        y: 60
    },
    {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".about",
            start: "top 80%"
        }
    }
);


/* =========================
   PROJECTS
========================= */

gsap.fromTo(
    ".projects-header",
    {
        opacity: 0,
        y: 60
    },
    {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".projects-header",
            start: "top 80%"
        }
    }
);

gsap.fromTo(
    ".project",
    {
        opacity: 0,
        y: 80
    },
    {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".projects-list",
            start: "top 80%"
        }
    }
);


/* =========================
   SKILLS
========================= */

gsap.fromTo(
    ".skills-header",
    {
        opacity: 0,
        y: 60
    },
    {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".skills",
            start: "top 80%"
        }
    }
);

gsap.fromTo(
    ".skill",
    {
        opacity: 0,
        scale: 0.8
    },
    {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.08,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: ".skills-grid",
            start: "top 80%"
        }
    }
);


/* =========================
   EDUCATION
========================= */

gsap.fromTo(
    ".education-card",
    {
        opacity: 0,
        y: 60
    },
    {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".education",
            start: "top 80%"
        }
    }
);


/* =========================
   CONTACT
========================= */

gsap.fromTo(
    ".contact-content",
    {
        opacity: 0,
        y: 60
    },
    {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".contact",
            start: "top 80%"
        }
    }
);


/* =========================
   PROJECT HOVER
========================= */

document.querySelectorAll(".project").forEach(project => {

    project.addEventListener("mouseenter", () => {
        gsap.to(project, {
            y: -12,
            duration: 0.3,
            ease: "power2.out"
        });
    });

    project.addEventListener("mouseleave", () => {
        gsap.to(project, {
            y: 0,
            duration: 0.3,
            ease: "power2.out"
        });
    });

});