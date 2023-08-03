let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

addEventListener("DOMContentLoaded", (event) => {
    (function loadCard() {



        const [row, column] = [3,4]
        const memoryGame = document.getElementsByClassName('memory-game') [0];
        memoryGame.style.cssText += `display: grid; grid-template-columns: repeat(${column}, 1fr); grid-template-rows: repeat (${row}, 1fr);`

        Array.from(Array(row+column)).forEach((_, index) => {
            const imageId = Math.ceil((index + 1) /2)
            console.log('imageId', imageId)
            memoryGame.innerHTML = memoryGame.innerHTML + `<div class="memory-card" data-image=${imageId}> <img class="front-face" 
            src="images/${imageId}.svg" alt=" image ${imageId}" /> <img class="back-face" src="images/back.svg" alt="back image" /> </div>`
        })

        const cards = document.querySelectorAll('.memory-card');
        cards.forEach(card => {
            card.addEventListener('click', flipCard)
            const randomPos = Math.floor(Math.random() * row * column);
            card.style.order = randomPos;
        });


 function flipCard() {
    if (lockBoard) return;
    if ( this === firstCard) return;

    this.classList.add('flip');

    //First time player click card
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
      return;
    }

    //Second time player click card
        secondCard = this;

        checkForMatch();
 }

 function checkForMatch(){
    //Do cards match?
    let isMatch = firstCard.dataset.image === secondCard.dataset.image;
    
    isMatch ? disableCards() : unflipCards();
 }

 function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
 }

 function unflipCards(){
    lockBoard = true;

setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    
    resetBoard();
    }, 1200);
 }

 function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
 }

 (function shuffle(){
    cards.forEach ( card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
 })();

 cards.forEach(card => card.addEventListener('click', flipCard));

})

})