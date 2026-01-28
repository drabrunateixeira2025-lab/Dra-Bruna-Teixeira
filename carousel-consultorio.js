const track = document.getElementById('carouselTrack');
const dotsContainer = document.getElementById('carouselDots');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const totalImages = 3;
let currentIndex = 0;

for (let i = 1; i <= totalImages; i++) {
    const slide = document.createElement('div');
    slide.className = 'carousel-item';
    slide.innerHTML = `<img src="assets/sala${i}.jpeg" alt="Sala ${i}">`;
    track.appendChild(slide);

    const dot = document.createElement('div');
    dot.className = i === 1 ? 'dot active' : 'dot';
    dot.addEventListener('click', () => updateCarousel(i - 1));
    dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll('.dot');

function updateCarousel(index) {
    currentIndex = index;
    if (currentIndex >= totalImages) currentIndex = 0;
    if (currentIndex < 0) currentIndex = totalImages - 1;

    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, idx) => dot.classList.toggle('active', idx === currentIndex));
}

nextBtn.addEventListener('click', () => updateCarousel(currentIndex + 1));
prevBtn.addEventListener('click', () => updateCarousel(currentIndex - 1));