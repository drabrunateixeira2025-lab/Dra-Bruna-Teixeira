// Usamos nomes específicos para fotos para não conflitar com os cards
const photoTrack = document.getElementById('carouselTrack');
const photoDotsContainer = document.getElementById('carouselDots');
const photoPrevBtn = document.getElementById('prevBtn');
const photoNextBtn = document.getElementById('nextBtn');

const photoTotalImages = 11;
let photoCurrentIndex = 0;

// Inicialização segura
if (photoTrack && photoDotsContainer) {
    // Limpa o conteúdo antes de gerar para evitar duplicação
    photoTrack.innerHTML = '';
    photoDotsContainer.innerHTML = '';

    // Criação dinâmica dos elementos
    for (let i = 1; i <= photoTotalImages; i++) {
        const slide = document.createElement('div');
        slide.className = 'carousel-item';
        slide.innerHTML = `<img src="assets/procedimento${i}.jpeg" alt="Procedimento ${i}">`;
        photoTrack.appendChild(slide);

        const dot = document.createElement('div');
        dot.className = i === 1 ? 'dot active' : 'dot';
        dot.addEventListener('click', () => updatePhotoCarousel(i - 1));
        photoDotsContainer.appendChild(dot);
    }

    const photoDots = document.querySelectorAll('.dot');

    function updatePhotoCarousel(index) {
        photoCurrentIndex = index;
        if (photoCurrentIndex >= photoTotalImages) photoCurrentIndex = 0;
        if (photoCurrentIndex < 0) photoCurrentIndex = photoTotalImages - 1;

        // O cálculo de 100% funciona porque o CSS força o item a ter 100% da largura do pai
        photoTrack.style.transform = `translateX(-${photoCurrentIndex * 100}%)`;
        
        photoDots.forEach((dot, idx) => {
            dot.classList.toggle('active', idx === photoCurrentIndex);
        });
    }

    photoNextBtn.addEventListener('click', () => updatePhotoCarousel(photoCurrentIndex + 1));
    photoPrevBtn.addEventListener('click', () => updatePhotoCarousel(photoCurrentIndex - 1));

    // Teclas do teclado exclusivas para fotos
    document.addEventListener('keydown', (e) => {
        if (e.key === "ArrowLeft") updatePhotoCarousel(photoCurrentIndex - 1);
        if (e.key === "ArrowRight") updatePhotoCarousel(photoCurrentIndex + 1);
    });
}