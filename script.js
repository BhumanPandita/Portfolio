// JavaScript to add cool animations

// Function to animate scrolling to a section
function scrollToSection(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href") === "#" ? "header" : event.currentTarget.getAttribute("href");
    const targetPosition = document.querySelector(targetId).offsetTop;
    window.scrollTo({
        top: targetPosition - 50,
        behavior: "smooth"
    });
}

// Adding event listeners to navigation links
document.querySelectorAll("nav ul li a, button").forEach(anchor => {
    anchor.addEventListener("click", scrollToSection);
});

// Function to animate sections on scroll
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

// Observe each section
document.querySelectorAll("section").forEach(section => {
    observer.observe(section);
});

// Adding bounce animation to buttons on hover
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("mouseover", () => {
        button.classList.add("bounce");
    });
    button.addEventListener("animationend", () => {
        button.classList.remove("bounce");
    });
});

// Add slide-in animations for sections
const sections = document.querySelectorAll("section");
sections.forEach((section, index) => {
    section.style.animation = `slideIn${index % 2 === 0 ? 'Left' : 'Right'} 1s ease-in-out forwards`;
});

window.addEventListener('load', () => {
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    container.style.transform = 'translateY(20px)';
    container.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

    setTimeout(() => {
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 200);
});

// Add smooth reveal effect for main content
window.addEventListener('load', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 100 + index * 100);
    });
});

// Add parallax effect to the background video
window.addEventListener('scroll', () => {
    const video = document.getElementById('bgVideo');
    const scrollPosition = window.pageYOffset;
    video.style.transform = `translateY(${scrollPosition * 0.5}px)`;
});