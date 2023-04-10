const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockBoard) return;
    this.classList.add('flip');

    //First time player click card
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
      return;
    }

    //Second time player click card
        hasFlippedCard = false;
        secondCard = this;

        checkForMatch();
}

function checkForMatch(){
    //Do cards match?
    let isMatch = firstCard.dataset.image === secondCard.dataset.image;
    
    isMatch ? disableCards() : unflipCards();
}

function disableCads(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

function unflipCards(){
    lockBoard = true;

setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    
    lockBoard = false;
    }, 1200);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

cards.forEach(card => card.addEventListener('click', flipCard));