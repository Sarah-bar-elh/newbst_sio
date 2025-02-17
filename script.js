// Ajoute un effet de "zoom" sur le conteneur au chargement
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    container.classList.add("appear");
});

// Ajoute un effet de particules en arrière-plan
document.body.addEventListener("mousemove", (e) => {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    document.body.appendChild(particle);

    particle.style.left = `${e.clientX}px`;
    particle.style.top = `${e.clientY}px`;

    setTimeout(() => {
        particle.remove();
    }, 1000);
});

// Crée un effet de particules en CSS
const style = document.createElement("style");
style.innerHTML = `
    .particle {
        position: absolute;
        width: 5px;
        height: 5px;
        background-color: #ff4444;
        border-radius: 50%;
        pointer-events: none;
        animation: fadeOut 1s linear;
    }

    @keyframes fadeOut {
        0% { transform: scale(1); opacity: 1; }
        100% { transform: scale(3); opacity: 0; }
    }
`;
document.head.appendChild(style);

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const loader = document.getElementById("loading-screen");
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
        }, 500); // Délai pour une transition fluide
    }, 2000); // Affichage du loader pendant 2 secondes
});
