const cardsTrack = document.getElementById('cardsTrack');
const cardPrev = document.getElementById('cardPrev');
const cardNext = document.getElementById('cardNext');
const modal = document.getElementById('infoModal');
const closeModal = document.querySelector('.close-modal');

const infoData = {
    "harmonizacao-facial": {
        title: "Harmonização Facial",
        text: "Valorização Facial, como eu prefiro chamar, é um planejamento personalizado que harmoniza as estruturas do rosto, respeitando sua beleza natural. Com técnicas estratégicas, suavizamos assimetrias, amenizamos sinais do envelhecimento, melhoramos a qualidade da pele e devolvemos leveza à expressão. O resultado não é transformação exagerada — é você, na sua melhor versão, com mais confiança e naturalidade."
    },
    "preenchimento-labial": {
        title: "Preenchimento Labial",
        text: "O Preenchimento Labial é um procedimento que realça o contorno, melhora a definição e devolve hidratação e sustentação aos lábios. Mais do que aumentar volume, meu objetivo é criar equilíbrio e proporção, respeitando a harmonia do seu rosto e sua identidade. O resultado é natural, delicado e sofisticado — lábios mais bonitos, sem exageros, valorizando a sua melhor versão."
    },
    "olheiras": {
        title: "Protocolos para Olheiras",
        text: "As olheiras profundas podem causar a sensação de cansaço e tristeza. O preenchimento com ácido hialurônico oferece uma solução rápida e eficaz, melhorando a profundidade das olheiras e proporcionando um olhar mais descansado e saudável. Em alguns casos, a associação de terapias como clareamento traz um resultado ainda melhor."
    },
    "botox": {
        title: "Botox",
        text: "A toxina botulínica é utilizada para suavizar rugas e linhas de expressão, proporcionando uma aparência mais jovem e descansada de forma preventiva e reparadora."
    },
    "bioestimulador": {
        title: "Bioestimulador de colágeno",
        text: "Os bioestimuladores de colágeno recuperam a firmeza e elasticidade da pele ao estimular a produção natural desta proteína fundamental para a sustentação e hidratação da face e corpo."
    },
    "limpeza": {
        title: "Limpeza de Pele",
        text: "Um cuidado profundo que remove impurezas, controla a oleosidade e devolve viço e luminosidade à pele. Prepara o rosto para receber outros tratamentos e realça a beleza natural."
    },
    "ultraformer": {
        title: "Ultrassom Microfocado",
        text: "Tecnologia que estimula a produção de colágeno nas camadas mais profundas da pele, promovendo efeito lifting sem cirurgia. Melhora a firmeza e redefine contornos contra a flacidez."
    },
    "rinomodelacao": {
        title: "Rinomodelação",
        text: "Procedimento não cirúrgico que corrige pequenas imperfeições e melhora o contorno do nariz, harmonizando o perfil facial com técnica e precisão."
    },
    "pele": {
        title: "Tratamentos para Pele",
        text: "Protocolos personalizados para tratar acne, manchas, poros dilatados e perda de viço. O foco é restaurar a saúde e luminosidade individual de cada pele."
    },
    "corporais": {
        title: "Protocolos Corporais",
        text: "Tratamentos estratégicos para gordura localizada, celulite e flacidez através da combinação de tecnologias e ativos para melhora do contorno corporal."
    },
    "varicoses": {
        title: "Remoção de Varicoses",
        text: "Procedimento minimamente invasivo que reduz a aparência de vasinhos, promovendo uniformidade e leveza visual para as pernas."
    },
    "gluteos": {
        title: "Harmonização de Glúteos",
        text: "Planejamento personalizado para melhorar contorno, projeção e firmeza, valorizando suas curvas com naturalidade e elegância."
    }
};

// Lógica do Carrossel
let index = 0;
function updateCarousel() {
    const cardWidth = document.querySelector('.card-glass').offsetWidth + 20;
    cardsTrack.style.transform = `translateX(${-index * cardWidth}px)`;
}

cardNext.addEventListener('click', () => {
    const max = document.querySelectorAll('.card-glass').length - (window.innerWidth > 768 ? 3 : 1);
    index = (index < max) ? index + 1 : 0;
    updateCarousel();
});

cardPrev.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : 0;
    updateCarousel();
});

// Lógica do Modal
document.querySelectorAll('.card-glass').forEach(card => {
    card.addEventListener('click', () => {
        const data = infoData[card.getAttribute('data-id')];
        document.getElementById('modalTitle').innerText = data.title;
        document.getElementById('modalText').innerText = data.text;
        modal.style.display = 'block';
    });
});

closeModal.onclick = () => modal.style.display = 'none';
window.onclick = (e) => { if (e.target == modal) modal.style.display = 'none'; }