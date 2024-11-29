// Function to create particle effect
function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    document.body.appendChild(particle);

    // Remove particle after animation
    setTimeout(() => particle.remove(), 1000); // Pastikan CSS memiliki animasi partikel
}

// Event listener for mouse movement
document.addEventListener('mousemove', (e) => {
    createParticle(e.clientX, e.clientY);
});

// Event listener for touch movement on mobile
document.addEventListener('touchmove', (e) => {
    createParticle(e.touches[0].clientX, e.touches[0].clientY);
});

// Function to open popup
function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = "block";
    } else {
        console.error(`Popup with ID "${popupId}" not found.`);
    }
}

// Function to close popup
function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = "none";
    } else {
        console.error(`Popup with ID "${popupId}" not found.`);
    }
}

// Function to close popup when clicking outside
window.onclick = function(event) {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(function(popup) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
};

// Function to create random particles in the background
document.addEventListener("DOMContentLoaded", function() {
    const particleContainer = document.createElement('div'); // Create a container for particles
    particleContainer.classList.add('particle-container');
    document.body.appendChild(particleContainer);

    for (let i = 0; i < 30; i++) { // Adjust the number of particles
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${Math.random() * 100}vw`; // Random position in viewport width
        particle.style.top = `${Math.random() * 100}vh`; // Random position in viewport height
        particle.style.animationDelay = `${Math.random() * 5}s`; // Random delay for animation
        particleContainer.appendChild(particle);
    }
});
