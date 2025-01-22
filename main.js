// Typing animation for home section
const texts = ["Mobile App Developer", "Data Scientist", "Ethical Hacker"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing-text").textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000); // Delay before starting next word
    } else {
        setTimeout(type, 100); // Typing speed
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Start the typing animation when the page loads
window.addEventListener('load', () => {
    if (document.querySelector(".typing-text")) {
        type();
    }
});

// Add scroll reveal animations
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});