const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.add('flip');

    //First time player click card
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
    } else {

    //Second time player click card
        hasFlippedCard = false;
        secondCard = this;

    //Do cards match?
    if (firstCard.dataset.image === secondCard.dataset.image) {
    //It is a match!
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    }else{
    //Not a match!
    setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    }, 1500);
    }
    }
}

cards.forEach(card => card.addEventListener('click', flipCard));