
/* =========================
   1. Typing Animation
========================= */

const typingText = document.querySelector(".intro");

if (typingText) {
    const message = "WELCOME TO MY DIGITAL SPACE";
    typingText.textContent = "";
    let index = 0;

    function typeText() {
        if (index < message.length) {
            typingText.textContent += message[index];
            index++;
            setTimeout(typeText, 55);
        }
    }

    typeText();
}


/* =========================
   2. Scroll Reveal
========================= */

const revealElements = document.querySelectorAll(
    ".section, .project-card"
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
});

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach((element) => {
        observer.observe(element);
    });
} else {
    revealElements.forEach((element) => {
        element.classList.add("visible");
    });
}


/* =========================
   3. Automatic Footer Year
========================= */

const footer = document.querySelector("footer");

if (footer) {
    const year = document.createElement("p");
    year.textContent = `© ${new Date().getFullYear()} Elio`;
    year.classList.add("footer-year");
    footer.appendChild(year);
}
