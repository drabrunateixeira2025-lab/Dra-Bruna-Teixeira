/**
 * Lógica do Carrossel de Cards (Procedimentos)
 */
const cardsTrack = document.getElementById('cardsTrack');
const cardPrev = document.getElementById('cardPrev');
const cardNext = document.getElementById('cardNext');

let cardIndex = 0;

function moveCards() {
    // Pega a largura do primeiro card para calcular o deslocamento
    const firstCard = document.querySelector('.card-glass');
    const cardWidth = firstCard.offsetWidth + 20; // 20 é o gap definido no CSS

    cardsTrack.style.transform = `translateX(${-cardIndex * cardWidth}px)`;
}

cardNext.addEventListener('click', () => {
    const totalCards = document.querySelectorAll('.card-glass').length;
    
    // Define quantos cards estão visíveis na tela no momento
    let visibleCards = 3;
    if (window.innerWidth <= 600) visibleCards = 1;
    else if (window.innerWidth <= 992) visibleCards = 2;

    if (cardIndex < totalCards - visibleCards) {
        cardIndex++;
    } else {
        cardIndex = 0; // Loop infinito: volta ao começo
    }
    moveCards();
});

cardPrev.addEventListener('click', () => {
    if (cardIndex > 0) {
        cardIndex--;
    } else {
        // Vai para o último set de cards se clicar em voltar no início
        const totalCards = document.querySelectorAll('.card-glass').length;
        let visibleCards = 3;
        if (window.innerWidth <= 600) visibleCards = 1;
        else if (window.innerWidth <= 992) visibleCards = 2;
        
        cardIndex = totalCards - visibleCards;
    }
    moveCards();
});

// Garante que o carrossel se ajuste caso o usuário mude o tamanho da janela (orientação do celular)
window.addEventListener('resize', () => {
    cardIndex = 0; // Reseta a posição para evitar bugs visuais
    moveCards();
});