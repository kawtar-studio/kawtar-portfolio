gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

tl.from(".navbar", {
    opacity: 0,
    y: -30,
    duration: 0.8,
    ease: "power3.out"
})
    .from(".hero h1", {
        opacity: 0,
        y: 80,
        duration: 1,
        ease: "power4.out"
    }, "-=0.3")
    .from(".hero-left > p", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.6")
    .from(".buttons", {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: "power3.out"
    }, "-=0.4")
    .from(".hero-card", {
        opacity: 0,
        x: 80,
        duration: 1,
        ease: "power4.out"
    }, "-=0.7");

function revealElements(selector, trigger, options = {}) {
    gsap.fromTo(
        selector,
        {
            opacity: 0,
            y: options.y || 60,
            scale: options.scale || 1
        },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: options.duration || 0.9,
            stagger: options.stagger || 0,
            ease: options.ease || "power3.out",
            scrollTrigger: {
                trigger: trigger || selector,
                start: "top 82%",
                once: true
            }
        }
    );
}

revealElements(".about-image", ".about", {
    y: 80,
    duration: 1
});

revealElements(".about-content", ".about", {
    y: 60,
    duration: 1
});

revealElements(".projects-header", ".projects", {
    y: 60,
    duration: 1
});

revealElements(".project", ".projects-list", {
    y: 80,
    duration: 0.8,
    stagger: 0.15
});

revealElements(".experience-header", ".experience", {
    y: 60,
    duration: 1
});

revealElements(".experience-card", ".experience", {
    y: 80,
    duration: 1
});

revealElements(".skills-header", ".skills", {
    y: 60,
    duration: 1
});

gsap.fromTo(
    ".skill",
    {
        opacity: 0,
        y: 30,
        scale: 0.9
    },
    {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.55,
        stagger: 0.08,
        ease: "back.out(1.5)",
        scrollTrigger: {
            trigger: ".skills-grid",
            start: "top 82%",
            once: true
        }
    }
);

revealElements(".education-header", ".education", {
    y: 60,
    duration: 1
});

revealElements(".education-card", ".education", {
    y: 70,
    duration: 1
});

revealElements(".contact-content", ".contact", {
    y: 60,
    duration: 1
});

document.querySelectorAll(".project").forEach(project => {
    project.addEventListener("mouseenter", () => {
        gsap.to(project, {
            y: -10,
            duration: 0.35,
            ease: "power2.out"
        });
    });

    project.addEventListener("mouseleave", () => {
        gsap.to(project, {
            y: 0,
            duration: 0.35,
            ease: "power2.out"
        });
    });
});

document.querySelectorAll(".skill").forEach(skill => {
    skill.addEventListener("mouseenter", () => {
        gsap.to(skill, {
            y: -6,
            duration: 0.25,
            ease: "power2.out"
        });
    });

    skill.addEventListener("mouseleave", () => {
        gsap.to(skill, {
            y: 0,
            duration: 0.25,
            ease: "power2.out"
        });
    });
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
        const target = document.querySelector(link.getAttribute("href"));

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});