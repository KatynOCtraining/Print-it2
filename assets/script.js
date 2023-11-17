

document.addEventListener('DOMContentLoaded', () => {

    const slides = [
        {
            "image": "slide1.jpg",
            "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
        },
        {
            "image": "slide2.jpg",
            "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
        },
        {
            "image": "slide3.jpg",
            "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
        },
        {
            "image": "slide4.jpg",
            "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
        }
    ];

    // Déclaration de la variable pour garder une trace du diaporama actuel //
    let currentSlide = 0;

    // Sélection des éléments à afficher dans le DOM //
    const bannerImg = document.querySelector('.banner-img');
    const tagLine = document.querySelector('#banner p');
    const dotsContainer = document.querySelector('.dots');

    // Fonction pour mettre à jour le carrousel //
    function updateCarousel() {
        // Affection de l'image et de la tagline en fonction de la slide //
        bannerImg.src = `assets/images/slideshow/${slides[currentSlide].image}`;
        tagLine.innerHTML = slides[currentSlide].tagLine;

        // Mise à jour des bullets points//
        updateDots();
    }

    // Fonction qui crée un bulletpoint à chaque slide //
    function createDots() {
        // Pour chaque salide, créer un bullet point //
        slides.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');

            // EventListener sur les bullets points //
            dot.addEventListener('click', () => {
                currentSlide = index;
                updateCarousel();
            });

            // Affichage du bulletpoint //
            dotsContainer.appendChild(dot);
        });
    }

    // Fonction de maj des bullets points//
    function updateDots() {
        // Parcour chaque point et mets sa classe à jour si son index correspond à celui de la slide en cours//
        document.querySelectorAll('.dots .dot').forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.add('dot_selected');
            } else {
                dot.classList.remove('dot_selected');
            }
        });
    }

    // Ajout eventlistener sur la flèche de gauche pour aller au diaporama précédent //
    document.querySelector('.arrow_left').addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateCarousel();
    });

    // Ajout d'un eventlistener sur la flèche droite pour aller au diaporama suivant //
    document.querySelector('.arrow_right').addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateCarousel();
    });

    // Afichage par défaut du Carousel // 
    createDots();
    updateCarousel();
});
