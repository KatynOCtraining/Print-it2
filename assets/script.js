

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

    let currentSlide = 0;
    const bannerImg = document.querySelector('.banner-img');
    const tagLine = document.querySelector('#banner p');
    const dotsContainer = document.querySelector('.dots');

    // Fonction de mise à jour de l'affichage du carousel //
    function updateCarousel() {
        bannerImg.src = `assets/images/slideshow/${slides[currentSlide].image}`;
        tagLine.innerHTML = slides[currentSlide].tagLine;
        updateDots();
    }

    // Génération et gestion des dots //
    function createDots() {
        slides.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.addEventListener('click', () => {
                currentSlide = index;
                updateCarousel();
            });
            dotsContainer.appendChild(dot);
        });
    }

    function updateDots() {
        document.querySelectorAll('.dots .dot').forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.add('dot_selected');
            } else {
                dot.classList.remove('dot_selected');
            }
        });
    }

    // Naviguer vers la gauche //
    document.querySelector('.arrow_left').addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateCarousel();
    });

    // Naviguer vers la droite //
    document.querySelector('.arrow_right').addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateCarousel();
    });

    // Initialisation du Carousel // 
    createDots();
    updateCarousel();
});
