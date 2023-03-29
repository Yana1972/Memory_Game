const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.add('flip');

    //first time player click card
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
    } else {

    //second time player click card
        hasFlippedCard = false;
        secondCard = this;

    //do cards match?
    console.log(firstCard.dataset.framework);
    console.log(secondCard.dataset.framework);
    }
}

cards.forEach(card => card.addEventListener('click', flipCard));